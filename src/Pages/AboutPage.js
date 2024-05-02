






import React from "react";


import logo from './logo.svg';
import './AboutPage.css';
import logo1 from './vmLOGO.png';
import profile1 from'./profile.png';
import SoundWave from './soundwave1.png';
import wallet from './wallet.png';

///////////
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';


function AboutPage() {
    const navigate = useNavigate();
return(


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
        <header className="App-header3">
       
        </header>
        <header className="App-header4">


  
</header>
<header>
<div >
 
  
<p className="Title1"> 

About Virtual Me 

</p>

<p className="Title2">
Virtual Me stands out as a unique and powerful platform that showcases the legal validation of AI-modified voices. By choosing Virtual Me, you gain the ability to safeguard and empower your voice. This platform goes beyond providing a mere technological solution; it becomes a catalyst for asserting true ownership and protection over your voice.
One of the core principles of Virtual Me is its unwavering commitment to combatting the depersonalization of virtual rights and addressing the potential misuse of AI-modified voices. Virtual Me serves as a robust defender of ethical treatment, ensuring that your voice is respected, valued, and utilized in a manner that aligns with your intentions. By engaging with Virtual Me, you exercise your voice rights and contribute to a larger movement that seeks to establish a framework for true ownership and protection of individuals' voices in the digital age. By choosing Virtual Me, you not only preserve and empower your voice but also actively participate in the preservation and advocacy of your real-life interests.
</p>

<p className="Title3">
  "Virtual Me Team"
</p>
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

)
}

export default AboutPage

