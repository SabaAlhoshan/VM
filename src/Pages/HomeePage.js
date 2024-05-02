
import logo from './logo.svg';
import '../App.css';
import logo1 from './vmLOGO.png';
import profile1 from'./profile.png';
import SoundWave from './soundwave1.png';
import wallet from './wallet.png';

///////////
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

function HomeePage() {

/////////
const navigate = useNavigate();


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
        <header className="App-header3">
        <p>
        Why Own Your Voice? 
        </p>
        </header>
        <header className="App-header4">
        <p>
        Unleashing the Power of Authenticity and Protection
</p>
</header>
<header>
<div class="rounded-rectangle">
  <div class="section">
    <span class="text">3K<br />AI voice edits</span>
  </div>
  <div class="section">
    <span class="text">     5.2K<br />voice scamming</span>
  </div>
  <div class="section">
    <span class="text">     257<br />secure voice records </span>
  </div>
  <div class="section">
    <span class="text">    92%<br />Voice vulnerablility </span>
  </div>



  
  <button  class="card-button"  on onClick={() => navigate('/Fingerprint')} >
  <div class="button-inner">
    <div class="card">
      <img class="soundwaveimg" src={SoundWave} alt="Button Image"/>
      <p class="text9">new voice fingerprint </p> 
      <span class="textcaption9">Create your own voice fingerprint  <br />by recording your voice to be encrypted  <br />securely with us !</span>
    </div>
  </div>
</button>

{/*هذي طريقة النافبار الاولى باستخدام لنك */} 
{/*  <button > 
  <Link to="/Fingerprint"> cliclk meee </Link>
  </button> */}



<a class="card-button2"   on onClick={() => navigate('/ViewWallet')}>
  <div class="button-inner2">
    <div class="card2">
      <img class="wallet" src={wallet} alt="Button Image"/>
      <p class="text8">view wallet </p> 
      <span class="textcaption8">View previously recorded voice fingerprint <br />and voice records <br />securely in your wallet !</span>
    </div>
  </div>
</a>





</div>
</header>


     
        <button className="button1"   on onClick={() => navigate('/About')}>about us </button>
        <button className="button2" on onClick={() => navigate('/Test')} >why virtual me </button>
        <button className="button3" >home </button>
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

export default HomeePage;





// عشان اربط زر لصفحة ثانية احتاج 
//١-كرييت صفحة جديدة في البيجز فولدر
//٢- اعرف الصفحة في الاندكس بيج (اسويلها امبورت واعرف لها باث )
//اروح لمكان صفحة الزر اللي بينقل منه 
//٣-انبورت يوز نافقيت 
//٤-عرف كونست تحت الفنكنشن الاسايسيه
//٥-اون كلك استخدم اسم الباث المعرف بالاندكس 