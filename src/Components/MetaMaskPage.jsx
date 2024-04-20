import React from 'react';
import './MetaMaskPage.css'; 
import VirtualMeLogo from './VirtualMe.png';

const MetaMask = () => {
  return (
    <div className="general">
      <div className="rectangle"></div>
      <a href="https://consensys.zendesk.com/auth/v2/login/registration?auth_origin=360001358331%2Ctrue%2Ctrue&brand_id=360001358331&return_to=https%3A%2F%2Fsupport.metamask.io%2Fhc%2Fen-us%2Farticles%360015489531-Getting-started-with-MetaMask&theme=hc"
        className="Sign_button" >   Sign Up  </a>
      <a className="Log_button" href="https://consensys.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fsupport.metamask.io%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=360001358331&auth_origin=360001358331%2Ctrue%2Ctrue" >
       Login </a>
      <h1 className="title1">Meta<br />Mask<br />Wallet..</h1>
      <h1 className="title2">Virtual Me </h1>
      <span className="text1">
        <br />
        text placeHolder &nbsp;&nbsp; text placeHolder
        <br />
        text placeHolder &nbsp;&nbsp; text placeHolder
        <br />
        text placeHolder &nbsp;&nbsp; text placeHolder
      </span>
      <img src={VirtualMeLogo} alt="VirtualMe Icon" className="icon" />
    </div>
  );
};
export default MetaMask;