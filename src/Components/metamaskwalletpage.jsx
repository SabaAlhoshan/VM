import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './metamaskwalletpage.css';
import VirtualMeLogo from './VirtualMe.png';

const MetaMaskWallet = () => {
  const history = useHistory();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    // Perform sign-in logic here
    // Once the sign-in is successful, set isSignedIn to true
    setIsSignedIn(true);

    // Redirect the user to the desired page
    history.push('/dashboard'); // Replace '/dashboard' with the actual URL of the page you want to redirect to
  };

  return (
    <div className="general">
      <div className="rectangle"></div>
      <a
        href="https://consensys.zendesk.com/auth/v2/login/registration?auth_origin=360001358331%2Ctrue%2Ctrue&brand_id=360001358331&return_to=https%3A%2F%2Fsupport.metamask.io%2Fhc%2Fen-us%2Farticles%360015489531-Getting-started-with-MetaMask&theme=hc"
        className="Sign_button"
      >
        Sign Up
      </a>
      <button className="Log_button" onClick={handleSignIn}>
        Login
      </button>
      <h1 className="title1">Meta<br />Mask<br />Wallet..</h1>
      <h1 className="title2">Virtual Me </h1>
      <span className="text1">
        <br />
        text placeHolder &nbsp; &nbsp;text placeHolder
        <br />
        text placeHolder &nbsp;&nbsp; text placeHolder
        <br />
        text placeHolder &nbsp;&nbsp; text placeHolder
      </span>
      <img src={VirtualMeLogo} alt="VirtualMe Icon" className="icon" />
    </div>
  );
};

export default MetaMaskWallet;