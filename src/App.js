import React, { useEffect} from 'react';
import './App.css';
import { useState, useRef } from 'react';//manage storing input and data
import axios from 'axios'; //manage uploading files to pinata
import detectEthereumProvider from '@metamask/detect-provider';//check if metamask installed
import Web3 from 'web3';//import it to interact with blockchain
import './ViewHash.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import profile1 from'./profile.png';
import RecordToBlockchain from './RecordToBlockchain';
import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

const pinataApiKey = '192e364f981f4f05145c';
const pinataSecretKey = 'a87894043530d8c1dd39e3480b8962cd7f5d85070d50a8726e3c5350ac757358';


async function uploadFileToPinata(file) {//تنزيل الملف عال اي بي افس ثرو بنياتا
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(//يرسل طلب تنزيل الملف لبنياتا اذا سكسسفل يطلع الهاش
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      formData,
      {
        headers: {
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretKey,
          'Content-Type': 'multipart/form-data',//هذا يحدد تايب الملف المنرسل
        },
      }
    );

    if (response.status === 200) {
      const { IpfsHash } = response.data;// اذا سكسسفل يسوي اكستراكت للهاش من الرسبونس
      console.log('File uploaded successfully! IPFS Hash:', IpfsHash);
      return IpfsHash;

    } else {
      console.error('Error uploading file:', response.statusText);//ايرور اذا مب سكسسفل
      throw new Error('Error uploading file');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}// store the upladed file to ipfs and retireve its hash if successful

function App() {

  // const navigate = useNavigate();

  // create web3 object useeffect
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  })//يخزن معلومات الويب3 بروفايدر مثلا الميتاماسك فحالتنا عشان الانتراكشن مع البلوكتشين

  const providerChanged = (provider) => {
    provider.on("chainChanged", _ => window.location.reload());
    provider.on("accountsChanged", _ => window.location.reload());

  }// هنا اذا تغير حساب الميتا يهندله

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        providerChanged(provider);
        setWeb3Api({
          provider,
          web3: new Web3(provider)
        })
      } else {
        console.log("Please Sign To Metamask Wallet")
      }
    }

    loadProvider()
  }, [])//يشيك عالميتا ويستجيب 


  // ينزل السمارت كونتراكت 

  const [contract, setContract] = useState(null);

  useEffect(() => {
    const loadContract = async () => {
      const contractFile = await fetch('/abis/cloud.json');//يجيب الكونترات من ذا الملف
      const convertFileToJson = await contractFile.json();
      const networkId = await web3Api.web3.eth.net.getId();//يرجع النتورك اي دي حقت القناش 

      const netWorkData = convertFileToJson.networks[networkId];

      if (netWorkData) {
        const abi = convertFileToJson.abi;//يجيب الاي بي اي للكونتراكت
        const address = convertFileToJson.networks[networkId].address;//يجيب الادرس للكونتراكت من الجيسون
        const contract = await new web3Api.web3.eth.Contract(abi, address);
        setContract(contract)

      } else {
        window.alert("Our App Connect Only To Ganache Network!!")
      }

    }
    web3Api.web3 && loadContract();
  }, [web3Api.web3])

  //create setter and getter for the account address

  const [account, setAccount] = useState(null);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
      console.log(accounts[0]);
    }
    web3Api.web3 && getAccount();

  }, [web3Api.web3])//يرجع معلومات حساب اليوزر حقت الميتا وياخذ اول حساب تلقائي



  const [urlFile, setUrlFile] = useState('');//يخزن هاش الفايل

  const onChange = async (e) => {
    const file = e.target.files[0];

    try {
      const addFile = await uploadFileToPinata(file);
      setUrlFile(addFile);
      // console(addFile);

      console.log(`https://ipfs.io/ipfs/${addFile}`);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }//هنا لما يسوي اليوزر ابلود للفايل يخزن الهاش في ادد فايل

  // get and set the data to the blockchain
  const [cloudData, setClouddata] = useState("");

  useEffect(() => {
    const loadData = async () => {

      const responseData = await contract.methods.getData().call();
      const hash = responseData.startsWith('https://ipfs.io/ipfs/') ? responseData.substring(24) : responseData;
      setClouddata(hash);

      console.log("Contract is:", contract)
    }
    if (contract)/*(typeof web3Api.web3 !== 'undefined' && typeof contract !== 'undefined' && contract !== null && typeof account !== 'undefined') */ {
      loadData();
    }
  }, [contract])

  useEffect(() => {
    const savedata = async () => {
      await contract.methods.saveData(urlFile).send({
        from: account
      })

      window.location.reload()
    }
    if (typeof web3Api.web3 !== 'undefined' && typeof contract !== 'undefined' && contract !== null && typeof account !== 'undefined') {
      savedata();
    }
  }, [urlFile])


  const [showCloudData, setShowCloudData] = useState(false);

  // const navigate = useNavigate();

  const [isRecording, setIsRecording] = useState(false);
const [recordedAudio, setRecordedAudio] = useState(null);
const mediaRecorderRef = useRef(null);

const startRecording = () => {
navigator.mediaDevices
.getUserMedia({ audio: true })
.then((stream) => {
const mediaRecorder = new MediaRecorder(stream);
mediaRecorderRef.current = mediaRecorder;
mediaRecorder.start();
setIsRecording(true);
})
.catch((error) => {
console.error('Error accessing microphone:', error);
});
};

const stopRecording = () => {
if (mediaRecorderRef.current) {
mediaRecorderRef.current.stop();
mediaRecorderRef.current.ondataavailable = (e) => {
const audioBlob = e.data;
setRecordedAudio(URL.createObjectURL(audioBlob));
};
setIsRecording(false);
}
};

const resetRecording = () => {
setRecordedAudio(null);
};

  return (

    <div className="App">
      <header className="App-header">
      <header className="App-header2">
        {/* <img src={logo1} className="App-logo" alt="logo" /> */}
        </header>
        <header className="App-header1">
        <p>
        Protect it,
 <br />
 Empower it
<br />
Own it..
        </p>
        </header>
        <header className="App-header3">
          <div className="script">
          This script contains all the letters and vowels to preserve <br></br>the person's accent and ensure the accurate representation<br></br> of the letter sound and pronunciation.
          <br></br>

          </div>
          <br></br>

         <div className="upload">
    {/* Display recorded audio if available */}
    {recordedAudio && (
      <div className="audio-player">
        <audio src={recordedAudio} controls>
          Your browser does not support the audio element.
        </audio>
      </div>
    )}
  </div>

  <div className="buttons-container">
    {isRecording ? (
      <button className="button recording-button" onClick={stopRecording}>
        <FontAwesomeIcon icon={faCircle} className="recording-icon" />
        Stop Recording
      </button>
    ) : (
      <>
        <button className="button" onClick={startRecording}>
          Start Recording
        </button>
        {recordedAudio && (
          <button className="button" onClick={resetRecording}>
            Reset Recording
          </button>
        )}
      </>
    )}
  </div>
  <br></br>

  <div >
         <input className="upload" type="file" id="formFile" onChange={onChange} /> 
          
         </div>
        </header>
        
        <header className="App-header4">           
        {/* <button className="showhash" onClick={() => setShowCloudData(true)}>Show Blockchain Hash</button>
          {showCloudData && <p><br></br> {cloudData}</p>}
         {showCloudData && <button className="showhash"  onClick={() => setShowCloudData(false)}>Hide Blockchain Hash</button>}
           */}

            {/* <RecordToBlockchain cloudData={cloudData}/> */}
           <button> 
           <Link to={{ pathname: "/RecordToBlockchain", state: { cloudData: cloudData } }}>Show hash</Link>
            </button>
         </header>

         
<header>
<div >
 

</div>
</header>


<button className="button1"    >about us </button>
        <button className="button2"   >why virtual me </button>
        <button className="button3"  >home </button>
        <button className="button4"  >agreements </button>
        <button class="button5"  >
  <img src={profile1} alt="profile" />
</button>

{/* <button className="button1"    onClick={() => navigate('/About')}>about us </button>
        <button className="button2"  onClick={() => navigate('/Test')} >why virtual me </button>
        <button className="button3"  onClick={() => navigate('/Homee')}>home </button>
        <button className="button4"  onClick={() => navigate('/Agreements')}>agreements </button>
        <button class="button5"  onClick={() => navigate('/Profile')}>
  <img src={profile1} alt="profile" />
  </button> */}
        <p>

  <div class="line"></div>
  
</p>


      </header>
    </div>
  );
}

export default App;

