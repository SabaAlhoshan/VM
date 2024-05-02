





import React from "react";


import logo from './logo.svg';
import './ViewWalletPage.css';
import logo1 from './vmLOGO.png';
import profile1 from'./profile.png';
import SoundWave from './soundwave1.png';
import wallet from './wallet.png';
import HashedFileIMG from './HashedFileIMG.png'
///////////
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';


function ViewWalletPage() {
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
        <header className="H3">
       
        <p>
        Hashed voice fingerprint 
        </p>
    
        </header>
        <header className="H4">
        <p>
        It is important to keep it confidential and <br /> refrain from sharing it with anyone</p>
       
</header>

<div class="container">
    <img src={HashedFileIMG} alt="Your Image"/>
  </div>

  <div class="button-container">
    <button class="button10" on onClick={() => navigate('/ViewButton')} >  View  </button>
    <button class="button10" on onClick={() => navigate('/ExtractButton')} >Extract</button>
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

export default ViewWalletPage