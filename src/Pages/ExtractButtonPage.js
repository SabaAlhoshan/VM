import React from "react";


import logo from './logo.svg';
import './ExtractButtonPage.css';
import logo1 from './vmLOGO.png';
import profile1 from'./profile.png';
import SoundWave from './soundwave1.png';
import wallet from './wallet.png';

///////////
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import ViewWalletPage from "./ViewWalletPage";


function ExtractButtonPage() {
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
<p className="Title1"> 

Extract Your Own Voice FingerPrint

</p>
<p className="Title99"> 

Enter the OTP sent to your assigned phone number ..


</p>

<p className="Title98">
        didn't get the OTP ? <u className="resend">Resend</u>
      </p>


<div className="OTP">
      <input className="OTP-field" type="text" maxLength="1" />
      <input className="OTP-field" type="text" maxLength="1" />
      <input className="OTP-field" type="text" maxLength="1" />
      <input className="OTP-field" type="text" maxLength="1" />
    </div>


      <button className="verify-button"  on onClick={() => navigate('/VerifyButton')} >Verify</button>



      <p className="Title87"> 

 Warning !


</p>
<p className="Title88"> 

You're requesting your unique voice fingerprint,<br /> make sure not to share it with anyone..


</p>


      </header>


      
    </div>

)
}

export default ExtractButtonPage 