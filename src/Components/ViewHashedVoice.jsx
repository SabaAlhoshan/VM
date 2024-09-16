import React from 'react';
import './ViewHashedVoice.css';
import user from './user.png';
import wallet from './wallet.png';


const ViewHashedVoice = () => {
  return (
    <div className="general">

      <div className="toolbar">
        <button>about us</button>
        <button>why virtual me</button>
        <button>home</button>
        <button>agreements</button>
      </div>

      <div className="View_buttons">
        <button>View Record</button>
      </div>

      <div className="Extract_buttons">
        <button>Extract</button>
      </div>

      <header className="header">
        <h1 className="title">view<br />voice wallet</h1>
      </header>

      <header className="header2">
        
        <h1 className="title1">Attempt: Max</h1>
        <h1 className="title2">One voice record "Maximum Attempt Reached"</h1>
        <h1 className="title3">Voice fingerprint statue Available</h1>
        <h1 className="title4">Welcome Khaled..</h1>
      </header>

      <button className="button1">
        <img src={wallet} alt="Wallet Icon" className="icon" />
        <span className="text1">view wallet</span>
        <span className="text2"> <br />text placeHolder text placeHolder <br /> text placeHolder  text placeHolder<br /> text placeHolder  text placeHolder</span>
      </button>

      <button className="button2">
      Time: 11:08am&nbsp;&nbsp;&nbsp;Date: 06/01/2024&nbsp;&nbsp;&nbsp;Period: 26:00
      </button>

      <button className="button3">
        <img src={user} alt="User Icon" className="image" />
      </button>

      <div class="vertical-line"></div>

    </div>
  );
};

export default ViewHashedVoice;
