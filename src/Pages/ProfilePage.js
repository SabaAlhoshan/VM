






import React from "react";


import logo from './logo.svg';
import './ProfilePage.css';
import logo1 from './vmLOGO.png';
import profile1 from'./profile.png';
import SoundWave from './soundwave1.png';
import wallet from './wallet.png';

///////////
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';


function ProfilePage() {
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
  
      
 
{/* meta mask buttton using redirecting y the blank element to new tap , and H ref for MetaMask (edited) */}


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


      </header>
      <p className="Title13"> 

Welcome to Virtual Me

</p>
<p className="Title14"> 

Please Sign in 

</p>
      <div className="sign-up-container">

 
<div className="form-wrapper">
  <form>
   
     <br/><br/>
    <label className="label2" for="id">ID:</label>
    <input type="text" id="id" name="id" placeholder="Enter your ID" className="box" required  minLength={10} maxLength={10} />
    <br/><br/>
   
    <br/><br/>
    <label className="label4" for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your password" className="box2" minLength={8} required />
    <br/><br/>
  
   
   
    
    <div >
    <button  type="submit" className="sub" onClick={() => navigate('/Homee')}>Submit</button>
    </div>
    
  </form>
  


</div>
<button className="metamaskB" onClick={() => window.open('https://metamask.io', '_blank')}>
  "Sign in into your MetaMask Account"
</button>

</div>





      
    </div>
    

)
}

export default ProfilePage