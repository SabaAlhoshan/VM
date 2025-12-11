import React, { useState, useRef } from 'react';
import './login.css';
import voiceFingerprint from './voicefingerprint.jpg';

import manImage from './man.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Loginsignup() {
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
    <div className="container">
      <nav className="navbar">
        <div className="logo"></div>
        <ul className="nav-links">
          <li>
            <a href="#aboutus" className="nav-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#why" className="nav-link">
              Why VirtualMe
            </a>
          </li>
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#agreements" className="nav-link active">
              Agreements
            </a>
          </li>
        </ul>
        <div className="paragraph-topright">Pre-Specified Script</div>
        <div className="vertical-line"></div>
      </nav>
      <div className="paragraph">
        <span>new</span>
        <span>voice</span>
        <span>fingerprint</span>
      </div>
      <div className="paragraph-bottomright">
        This script contains all the letters and vowels to preserve the person's accent and ensure the accurate representation of the letter sound and pronunciation.
      </div>

      <div className="top-right-audio">
        {/* Display recorded audio if available */}
        {recordedAudio && (
          <div className="audio-player">
            <audio src={recordedAudio} controls>
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>

      <button className="button1">
        <img src={voiceFingerprint} alt="Voice Fingerprint" className="photo" />
        <span className="text1">new voice fingerprint</span>
        <span className="text2">
          <br />text placeHolder text placeHolder <br /> text placeHolder text placeHolder <br />
        </span>
      </button>

      <div className="top-right-image">
        <img src={manImage} alt="Man" />
      </div>

      <div className="buttons-container">
        {isRecording ? (
          <button className="button recording-button" onClick={stopRecording}>
            <FontAwesomeIcon icon={faCircle} className="recording-icon" />
            Stop Recording
          </button>
        ) : (
          <>
            <button className="button" onClick={startRecording}>
              Start Recording
            </button>
            {recordedAudio && (
              <button className="button" onClick={resetRecording}>
                Reset Recording
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Loginsignup;