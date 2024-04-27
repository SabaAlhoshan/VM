import React from 'react'
import './NewVoicefingerPrint.css'
import microphoneImg from './microphone.png';
import soundwave from '../uploads/wave-sound.png';

function NewVoicefingerPrint() {
  return (
    <div>

<div className="vertical-line"/>

      <div className="navbarg">
        <a href="#about-us" className="navbar">About us</a>
        <a href="#why-virtual-me" className="navbar">Why Virtual Me</a>
        <a href="#home" className="navbar">Home</a>
        <a href="#agreements" className="navbar">Agreements</a>
      </div>

      <h1 className="text"> New <br /> Voicefinger<br /> Print </h1>

      <div className="button-container">
        {/* <button className="button">Restart</button> */}
        <button className="button">Next</button>
      </div>

      <p className="texttwo"> Start Recording </p>
      <p className="textthree"> Click on Next To Read The Specified Text <br></br>and Record Your Voice </p>


      <div className="square-container">
        <button className="square-button">
          <img src={microphoneImg} alt="photo" className="logo" />
        </button>
      </div>


      <div className="undervoicecontainer">
        <div className="voice-container">

          <img src={soundwave} alt="wave sound" className="wave-logo" />
        </div>

        <div className='containertext'> Text Placeholder Text Placeholder <br/>Text Placeholder Text Placeholder <br/>Text Placeholder Text Placeholder </div>
      </div>



    </div>
  )
}

export default NewVoicefingerPrint
