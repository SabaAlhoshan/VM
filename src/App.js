import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';


const pinataApiKey = '192e364f981f4f05145c';
const pinataSecretKey = 'a87894043530d8c1dd39e3480b8962cd7f5d85070d50a8726e3c5350ac757358';


async function uploadFileToPinata(file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      formData,
      {
        headers: {
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretKey,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.status === 200) {
      const { IpfsHash } = response.data;
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
}

function App() {
  // create web3 object useeffect
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  })

  const providerChanged = (provider) => {
    provider.on("chainChanged", _ => window.location.reload());
    provider.on("accountsChanged", _ => window.location.reload());

  }

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
  }, [])


  // connect with contract

  const [contract, setContract] = useState(null);

  useEffect(() => {
    const loadContract = async () => {
      const contractFile = await fetch('/abis/cloud.json');
      const convertFileToJson = await contractFile.json();
      const networkId = await web3Api.web3.eth.net.getId();

      const netWorkData = convertFileToJson.networks[networkId];

      if (netWorkData) {
        const abi = convertFileToJson.abi;
        const address = convertFileToJson.networks[networkId].address;
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

  }, [web3Api.web3])



  const [urlFile, setUrlFile] = useState('');

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
  }

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

  return (
    <div className="App">
      <header className="App-header">
        <div className="alert alert-danger" role="alert">
          IPFS Uploader
        </div>

        <div>
          <div className="mb-3">
            <label htmlFor="fromFile" className="form-label"> Upload File  </label><br></br>
            <p>My Account Is:{account}</p>
            <p>Blockchain Data Is: {cloudData}</p>

            {
               urlFile ? <p>The Selected File URL Is: {urlFile}</p> : <p>Select File To See The IPFS URL</p>

            }

            <input className="upload" type="file" id="formFile" onChange={onChange} /> 

            {/* <div>
              <br></br>
            <button className="showhash" onClick={() => setShowCloudData(true)}>Show Blockchain Hash</button>
            {showCloudData && <p>Blockchain Data Is: {cloudData}</p>}
            {showCloudData && <button className="showhash"  onClick={() => setShowCloudData(false)}>Hide Blockchain Hash</button>}
            </div> */}

          </div>
        </div>

        {urlFile && <img src={cloudData} alt="Uploaded File" width={400} height={300} />}
      </header>
    </div>
  );
}

export default App;

