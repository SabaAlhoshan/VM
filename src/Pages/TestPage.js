






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


function TestPage() {
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

Why Virtual Me ?

</p>

<p className="Title2">
Virtual Me is the premier choice for AI-modified voice platforms, offering a comprehensive set of advantages. It excels in legal validation, ensuring the authentication and protection of your voice. With a user-friendly interface, Virtual Me makes voice management accessible to all. It actively advocates for voice rights, combating depersonalization and misuse. Additionally, Virtual Me provides a range of services, from licensing to collaborations, enabling individuals to maximize the potential of their voices. By choosing Virtual Me, you join a community that safeguards and empowers voices in the digital age, offering the necessary tools to thrive in the world of AI-modified voices.
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

export default TestPage

