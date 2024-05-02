import React, { useState } from "react";
import logo from './logo.svg';
import './verify.css';
import logo1 from './vmLOGO.png';
import profile1 from'./profile.png';
import SoundWave from './soundwave1.png';
import wallet from './wallet.png';

///////////
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ViewWalletPage from "./ViewWalletPage";

function VerifyButtonPage() {
  const navigate = useNavigate();
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleToggleText = () => {
    setIsTextVisible(!isTextVisible);
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
        <header className="App-header4"></header>
        <header>
          <div>
            {/*هذي طريقة النافبار الاولى باستخدام لنك */} 
            {/*  <button > 
                <Link to="/Fingerprint"> cliclk meee </Link>
              </button> */}
          </div>
        </header>

        <button className="button1" onClick={() => navigate('/About')}>
          about us
        </button>
        <button className="button2" onClick={() => navigate('/Test')}>
          why virtual me
        </button>
        <button className="button3" onClick={() => navigate('/Homee')}>
          home
        </button>
        <button className="button4" onClick={() => navigate('/Agreements')}>
          agreements
        </button>
        <button className="button5" onClick={() => navigate('/Profile')}>
          <img src={profile1} alt="profile" />
        </button>

        <p>
          <div className="line"></div>
        </p>
        <p className="Title1">Your hashed Voice FingerPrint is</p>
        <p className="Title99">This is the hashed version of your original voice record..</p>

        <p className="Title87">Note !</p>
        <p className="Title88">
          You're requesting to extract your assigned Voice Fingerprint,
          <br /> and after extracting, protecting it is completly on your responsibility ..
        </p>

        <div className="long-red-rectangleB">
          <button onClick={handleToggleText}>
            {isTextVisible ? 'Hide' : 'Show'}
          </button>
          {isTextVisible && <p> Your hashed Voice FingerPrint is : 1H7t27687H23U7236</p>}
        </div>
      </header>
    </div>
  );
}

export default VerifyButtonPage;