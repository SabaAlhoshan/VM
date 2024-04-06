import React from 'react';
import './metamaskwalletpage.css';
import VirtualMeLogo from './VirtualMe.png';


const MetaMaskWallet = () => {
  return (
    <div className="general">

      <div className="toolbar">
        <button>about us</button>
        <button>why virtual me</button>
        <button>home</button>
        <button>agreements</button>
      </div>

      <div className="log_buttons">
        <button>Login</button>
      </div>

      <div className="Sign_buttons">
        <button>Sign Up</button>
      </div>

      <header className="header">
        <h1 className="title">Meta<br />Mask<br />Wallet..</h1>
      </header>

      <header className="header2">
        <h1 className="title2">Virtual Me </h1>
        <span className="text2"> <br />text placeHolder text placeHolder <br /> text placeHolder  text placeHolder<br /> text placeHolder  text placeHolder</span>
      </header>

      <button className="button2">
        <img src={VirtualMeLogo} alt="VirtualMe Icon" className="icon2" />
      </button>

      <button className="button3">
        <img src={user} alt="User Icon" className="image" />
      </button>

      <div class="vertical-line"></div>

    </div>
  );
};

export default MetaMaskWallet;