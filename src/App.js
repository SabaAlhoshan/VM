import React, { useEffect } from 'react';
import './App.css';
import { useState, useRef } from 'react';//manage storing input and data
import axios from 'axios'; //manage uploading files to pinata
import detectEthereumProvider from '@metamask/detect-provider';//check if metamask installed
import Web3 from 'web3';//import it to interact with blockchain
import './ViewHash.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import profile1 from './profile.png';


const pinataApiKey = '192e364f981f4f05145c';
const pinataSecretKey = 'a87894043530d8c1dd39e3480b8962cd7f5d85070d50a8726e3c5350ac757358';


//the function take a file as parameter and upolad it to pinata
async function uploadFileToPinata(file) {
  const formData = new FormData();//FormData is an object created 
  formData.append('file', file);//then the file is appended to it

  try {
    const response = await axios.post(//it's called to send request to pinata API endpoint with FormData
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      formData,
      {
        headers: {//keys to authenticate with Pinata
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretKey,
          'Content-Type': 'multipart/form-data',//thie determine the file type 
        },
      }
    );

    if (response.status === 200)/*if response is accepted or success*/ {
      const { IpfsHash } = response.data;//if success the ipfs hash will be extracted from the acceptance response
      console.log('File uploaded successfully! IPFS Hash:', IpfsHash);
      return IpfsHash;

    } else {
      console.error('Error uploading file:', response.statusText);
      throw new Error('Error uploading file');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}// store the upladed file to ipfs and retireve its hash if successful


function App() {

  //web3Api state variable is declared using the useState hook, state variable used to store information about the web3 provider (Metamask)
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  })

  //reload when eth network  or  metamask account changed
  const providerChanged = (provider) => {
    provider.on("chainChanged", _ => window.location.reload());
    provider.on("accountsChanged", _ => window.location.reload());
  }

  useEffect(() => {
    // load the web3 provider and detect provider
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      //if provider found providerChanged function is called, and the web3Api state is updated with the provider
      //and a new web3 instance created from the provider
      if (provider) {
        providerChanged(provider);
        setWeb3Api({
          provider,
          web3: new Web3(provider)
        })

        //if not msg will show up to the console
      } else {
        console.log("Please Sign To Metamask Wallet")
      }
    }

    loadProvider()
  }, [])

  // contract state variable is declared. It is initially set to null and will be used to store the deployed smart contract instance.
  const [contract, setContract] = useState(null);

  //used to load smart contract
  useEffect(() => {

    const loadContract = async () => {
      const contractFile = await fetch('/abis/cloud.json');//bring contract from tis json file
      const convertFileToJson = await contractFile.json();
      const networkId = await web3Api.web3.eth.net.getId();//retrieve network id
      const netWorkData = convertFileToJson.networks[networkId];//retrieves contract API and address from json based on network id

      if (netWorkData) {
        const abi = convertFileToJson.abi;//retrieve contract api
        const address = convertFileToJson.networks[networkId].address;//retrieve contract address
        const contract = await new web3Api.web3.eth.Contract(abi, address);//create new contract instance 
        setContract(contract)

      } else {
        window.alert("Our App Connect Only To Ganache Network!!")
      }

    }
    web3Api.web3 && loadContract();
  }, [web3Api.web3])


  //create setter and getter for the account address

  const [account, setAccount] = useState(null);//store the user's Ethereum account address.

  useEffect(() => {//to retrieve the user's Ethereum account
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();//It calls web3Api.web3.eth.getAccounts() to get an array of accounts
      setAccount(accounts[0]);// sets the first account in the array as default
      console.log(accounts[0]);
    }
    web3Api.web3 && getAccount();

  }, [web3Api.web3])



  //It is initially set to an empty string and will be used to store the IPFS hash of the uploaded file.
  const [urlFile, setUrlFile] = useState('');
  //called when a file input's value changes. It retrieves the selected file
  const onChange = async (e) => {
    const file = e.target.files[0];

    try {
      const addFile = await uploadFileToPinata(file);//calls the uploadFileToPinata function to upload the file and get its IPFS hash
      //sets the urlFile state variable with the obtained hash.
      setUrlFile(addFile);
      // console(addFile);

      console.log(`https://ipfs.io/ipfs/${addFile}`);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  // get and set the data to the blockchain
  const [cloudData, setClouddata] = useState("");

  //retrieve data from blockchain smart contract
  useEffect(() => {
    const loadData = async () => {

      const responseData = await contract.methods.getData().call();// retrieves response data 
      const hash = responseData.startsWith('https://ipfs.io/ipfs/') ? responseData.substring(24) : responseData;//If it starts with 'https://ipfs.io/ipfs/', it extracts the IPFS hash from the URL
      setClouddata(hash);//and sets it as the cloudData

      console.log("Contract is:", contract)
    }
    if (contract) {
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

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const mediaRecorderRef = useRef(null);

  //called when the user clicks on the startrecording button
  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })//method to request access to  user microphone and starts recording
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

  //called when the user clicks on Stop Recording button
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();//it stops by calling stop method
      mediaRecorderRef.current.ondataavailable = (e) => {
        const audioBlob = e.data;// saves the recorded audio as a single Blob object in the audioBlob
        setRecordedAudio(URL.createObjectURL(audioBlob));
      };
      setIsRecording(false);
    }
  };

  const resetRecording = () => {
    setRecordedAudio(null);
  };

  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'instant',
    });
  }

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

          <button className="hashh" onClick={handleClick}>View My Hash</button>

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

        <p>

          <div class="line"></div>

        </p>

        <header className="App-header5">
          <p>
            View
            <br />
            Voice
            <br />
            Fingerprint
          </p>
        </header>
        <header className="script-record">
          <div >
            Your Hashed Voice Fingerprint Is
          </div>
          <div className="hashed" >
            "This is the hashed version of your original recorded voice"
          </div>

          <br></br>
          <div className="square-container">

            <div className="displayHash">
              <button className="showhash" onClick={() => setShowCloudData(true)}>Show Blockchain Hash</button>
              {showCloudData && <p className="hash"><br /><br /><br /> {cloudData}</p>}
              {showCloudData && <button className="showhash" onClick={() => setShowCloudData(false)}>Hide Blockchain Hash</button>}
            </div>
          </div>

        </header>
        <header className="note">
          <div >Note !</div>
          <div className="note2">You are requesting to extract your assigned voice fingerprint<br></br>and after extracting, fingerprint protection is your responsibility</div>


        </header>
        <button className="button6"    >about us </button>
        <button className="button7"   >why virtual me </button>
        <button className="button8"  >home </button>
        <button className="button9"  >agreements </button>
        <button class="button10"  >
          <img src={profile1} alt="profile" />
        </button>

        <p>

          <div class="line2"></div>

        </p>
      </header>
    </div>
  );
}

export default App;

/*(typeof web3Api.web3 !== 'undefined' && typeof contract !== 'undefined' && contract !== null && typeof account !== 'undefined') */