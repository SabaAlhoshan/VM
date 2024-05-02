import React from "react";


import logo from './logo.svg';
import './ViewButtonPage.css';
import logo1 from './vmLOGO.png';
import profile1 from'./profile.png';
import SoundWave from './soundwave1.png';
import wallet from './wallet.png';

///////////
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import ViewWalletPage from "./ViewWalletPage";


function ViewButtonPage() {
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
  
        <div class="layout-container">
 

  
  </div>

  
</header> 
<div >

      <p class="text-container2">Attempt : Max </p>

      <p class="text-container3">one voice record “Maximum Attempt Reached ”  <br /> Voice fingerprint state: Available </p>
      
      <p class="text-container4"> voice fingerprint information : </p>
     
    </div>
    <div class="rectangle">
    <p>Time: 11:08AM;&nbsp;&nbsp;&nbsp;&nbsp;Date:2024/1/6;&nbsp;&nbsp;&nbsp;&nbsp;Period:26:00</p>
    </div>
<div class="button-container">
     {/* <button class="button11"  on onClick={() => navigate('/ViewRecord')}>View Record</button>*/}
      <button class="button12"  on onClick={() => navigate('/DeleteRecord')}>Delete Record</button>
    </div>

<header>
<div >
 




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

export default ViewButtonPage