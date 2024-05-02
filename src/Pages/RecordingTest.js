import React, { useState, useRef } from 'react';
import './NextButtonPage.css';
//import voiceFingerprint from './voicefingerprint.jpg';
//import manImage from './man.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';



import './NextButtonPage.css';
import logo1 from './vmLOGO.png';
import profile1 from'./profile.png';

///////////


import { useNavigate } from 'react-router-dom';


function RecordingTest() {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const mediaRecorderRef = useRef(null);
  
  const startRecording = () => {
  navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
  const mediaRecorder = new MediaRecorder(stream);
  mediaRecorderRef.current = mediaRecorder;
  mediaRecorder.start();
  setIsRecording(true);
  })
  .catch((error) => {
  console.error('Error accessing microphone:', error);
  });
  };
  
  const stopRecording = () => {
  if (mediaRecorderRef.current) {
  mediaRecorderRef.current.stop();
  mediaRecorderRef.current.ondataavailable = (e) => {
  const audioBlob = e.data;
  setRecordedAudio(URL.createObjectURL(audioBlob));
  };
  setIsRecording(false);
  }
  };
  
  const resetRecording = () => {
  setRecordedAudio(null);
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
        <header className="H5">
       
        <p>
        Recording Instructions: Read the script Carefully !
        </p>
    
        </header>
        <header className="H6">
        <p>
        "Thisss script contains all the letters and vowels to preserve the person's accent and ensure the accurate representation of letter sounds and pronunciation. We understand the importance of maintaining the authenticity of accents and linguistic nuances. With this comprehensive script, we aim to capture the true essence of each individual's unique way of speaking.”</p>
        <header className="dots">
<p >
  After recording press the three dots to download your record..
</p>
</header>
</header>



 {/* <div class="button-container">
    <button class="button10" on onClick={() => navigate('/Recording')} > Restart </button>
    <button class="button10" on onClick={() => navigate('/Recording')} > Submit </button>

  </div>

  */}
<header>
<div >
 
{/* here start git hub recording code */}
<div>


  
<div >
  {/* Display recorded audio if available */}
  {recordedAudio && (
    <div className="audio-player">
     
      <audio src={recordedAudio} controls>
        Your browser does not support the audio element.
      </audio>
    </div>
  )}
</div> 

{/*<button className="button1"> 
{/*  <img src={voiceFingerprint} alt="Voice Fingerprint" className="photo" /> 
  <span className="text1">new voice fingerprint</span> 
  <span className="text2"> 
  
  </span> 
</button> */}

<div className="top-right-image"> 
  {/* <img src={manImage} alt="Man" />  */}
</div>

<div className="buttons">
  {isRecording ? (
    <button className="button33" onClick={stopRecording}>
      <FontAwesomeIcon icon={faCircle} className="recording-icon" />
      Stop Recording
    </button>
  ) : (
    <>
      <button className="button33" onClick={startRecording}>
        Start Recording
      </button>
      {recordedAudio && (
        <button className="button33" onClick={resetRecording}>
          Reset Recording
        </button>
      )}
    </>
  )}
</div>
</div>

{/* here end git hub recording code */}


{/*هذي طريقة النافبار الاولى باستخدام لنك */} 
{/*  <button > 
  <Link to="/Fingerprint"> cliclk meee </Link>
  </button> */}







</div>
</header>



<button className="button1"   on onClick={() => navigate('/About')}>about us </button>
        <button className="button2" on onClick={() => navigate('/Test')} >why virtual me </button>
        <button className="button3" on onClick={() => navigate('/Homee')}>home </button>
        <button className="button4" on onClick={() => navigate('/Agreements')}>agreements </button>
        <button class="button5" on onClick={() => navigate('/Profile')}>
  <img src={profile1} alt="profile" />
</button>
      
        <p>

  <div class="line"></div>
  
</p>


      </header>


      
    </div>
  );
}

export default RecordingTest




