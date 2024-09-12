import React from 'react';
import './MetaMaskPage.css'; // Assuming a stylesheet exists
import VirtualMeLogo from './VirtualMe.png'; // Assuming an image exists


const MetaMask = () => {
  const openPopup = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
      <div className="general">
      <div className="rectangle"></div>
      <button className="Log_button" onClick={() => openPopup('https://consensys.zendesk.com/auth/v2/login/signin?...')}>
      Login      </button>
      <button className="Sign_button" onClick={() => openPopup('https://consensys.zendesk.com/auth/v2/login/registration?...')}>
      Sign Up
      </button>
      <button className="NextButton" >Next</button> 
      <p className="NoteNextStep">Please click "Next" after completing your Login</p>
      <h1 className="title1">Meta<br />Mask<br />Wallet..</h1>
      <h1 className="title2">Virtual Me</h1>
      <p className="text1">
       Amplify rights, own your voice with us 
      </p>
      <img src={VirtualMeLogo} alt="VirtualMe Icon" className="icon" />
    </div>
  );
};

export default MetaMask;