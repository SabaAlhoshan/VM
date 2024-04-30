import React from "react";
import { useState } from "react";
import './ViewHash.css';
import profile1 from './profile.png';
// import { CloudDataContext } from './CloudDataContext'; 

// import { useNavigate } from 'react-router-dom';


function RecordToBlockchain( props ) {
   
    const {cloudData}=props;

    console.log('Cloud Data:', cloudData);
    const [showCloudData, setShowCloudData] = useState(false);


    return (


        <div className="App">
            <header className="App-header">
                <header className="App-header2">
                    {/* <img src={logo1} className="App-logo" alt="logo" /> */}
                </header>
                <header className="App-header1">
                    <p>
                        View
                        <br />
                        Blockchain
                        <br />
                        Hash
                        <br />
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
                            {/* <button className="showhash" onClick={() => setShowCloudData(true)}>Show Blockchain Hash</button>
                            {showCloudData && <p className="hash"><br /><br /><br /> QmXeVz3GnEEDMabSJj7VjfoPAgTqA6mb7gmUhLFdrVYHiU</p>}
                            {showCloudData && <button className="showhash" onClick={() => setShowCloudData(false)}>Hide Blockchain Hash</button>} */}

                         <button className="showhash" onClick={() => setShowCloudData(true)}>Show Blockchain Hash</button>
                            {showCloudData && <p className="hash"><br /><br /><br /> {cloudData}</p>}
                            {showCloudData && <button className="showhash" onClick={() => setShowCloudData(false)}>Hide Blockchain Hash</button>}

                        </div>

                    </div>

                </header>
                <br></br>
                <header className="note">
                    <div >Note !</div>
                    <div className="note2">You are requesting to extract your assigned voice fingerprint<br></br>and after extracting, fingerprint protection is your responsibility</div>


                </header>
                <header>
                    <div >


                    </div>
                </header>



                <button className="button1" >about us </button>
                <button className="button2" >why virtual me </button>
                <button className="button3" >home </button>
                <button className="button4" >agreements </button>
                <button className="button5" >
                    <img src={profile1} alt="profile" />
                </button>



                <div className="line"></div>




            </header>



        </div>

    )
}

export default RecordToBlockchain