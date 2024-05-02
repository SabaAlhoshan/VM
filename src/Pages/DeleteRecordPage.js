import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from './logo.svg';
import './DeleteRecord.css';
import logo1 from './vmLOGO.png';
import profile1 from './profile.png';
import SoundWave from './soundwave1.png';
import wallet from './wallet.png';
import alarm from './alarm.png'
function ViewButtonPage() {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Yes, Delete Voice Record");

  const handleButtonClick = () => {
    if (buttonText === "Yes, Delete Voice Record") {
      setButtonText("Delete request is sent!");
    } else {
      setButtonText("Yes, Delete Voice Record");
    }
  }; 

  return (
    <div className="App">
      <header className="App-header">
        <header className="App-header2">
          <img src={logo1} className="App-logo" alt="logo" />
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
        <header className="App-header3"></header>
        <header className="App-header4">
          <div class="layout-container"></div>
        </header>
        <div>

          <p class="text-container10">Delete Voice Records</p>
          <p class="text-container11">
          You are making a request to delete your voice records <br /> stored in the Virtual Me System..
          </p>
          
          <p class="text-container22"> Are you sure you want to delete your voice fingerprint and all voice records<br /> stored in the Virtual Me system?  </p>
          <p class="text-container23">After deletion, records and voice fingerprint will no longer be available.  </p>
        </div>
        {/*
        <div class="rectangle">
          <p>
            Time: 11:08AM;&nbsp;&nbsp;&nbsp;&nbsp;Date:2024/1/6;&nbsp;&nbsp;&nbsp;&nbsp;Period:26:00
          </p>
  </div>*/}
        <div class="button-container">
          <button class="button11" onClick={handleButtonClick}>
            {buttonText}
          </button>
          {/*<button class="button11" >
            Request Delete Record
  </button> */}
        </div>

        <header>
          <div>
            {/*هذي طريقة النافبار الاولى باستخدام لنك */}
            {/*  <button > 
              <Link to="/Fingerprint"> cliclk meee </Link>
              </button> */}
          </div>
        </header>
        <img src={alarm} className="alarm-logo" alt="logo" />
        <button className="button1" onClick={() => navigate('/About')}>about us</button>
        <button className="button2" onClick={() => navigate('/Test')}>why virtual me</button>
        <button className="button3" onClick={() => navigate('/Homee')}>home</button>
        <button className="button4" onClick={() => navigate('/Agreements')}>agreements</button>
        <button class="button5" onClick={() => navigate('/Profile')}>
          <img src={profile1} alt="profile" />
        </button>

        <p>
          <div class="line"></div>
        </p>
      </header>
    </div>
  );
}

export default ViewButtonPage;