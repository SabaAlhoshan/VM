import './HomePage.css';
// import VMLogo from '../uploads/VMLogo.png';
// import profile1 from'../uploads/profile.png';
// import SoundWave from '../uploads/wave-sound.png';
// import wallet from '../uploads/wallet.png';

function HomePage() {
  return (
    
    <div className="App">

      <div className="App-header">
      <div className="App-header2">
        {/* <img src={VMLogo} className="App-logo" alt="logo" /> */}
        </div>
      {/* <div className="App-header2">
        <img src={VMLogo} className="App-logo" alt="logo" />
        </div> */}
        <div className="App-header1">
        <p>
       Informative  <br />
       text <br />
       placeholder
        </p>
        </div>
        <div className="App-header3">
        <p>
       Text PlaceHolder
        </p>
        </div>
        <div className="App-header4">
        <p>
  TextPlaceHolderTextPlaceHolder&nbsp;&nbsp;&nbsp;&nbsp;TextPlaceHolderTextPlaceHolder<br />
  TextPlaceHolderTextPlaceHolder&nbsp;&nbsp;&nbsp;&nbsp;TextPlaceHolderTextPlaceHolder
</p>
</div>

<div>
    
<div class="rounded-rectangle">
    
  <div class="section">
    <span class="text">3K<br />text</span>
  </div>
  <div class="section">
    <span class="text">5.2K<br />text</span>
  </div>
  <div class="section">
    <span class="text">257<br />text</span>
  </div>
  <div class="section">
    <span class="text">42K<br />text</span>
  </div>




  <button className="card-button">
    <div className="button-inner">
      <div className="card">
        {/* <img className="soundwaveimg" src={SoundWave} alt="Button Image"/> */}
        <p className="text9">New Voice Fingerprint </p> 
        <span className="textcaption9">TextPlaceHolder TextPlaceHolder <br />TextPlaceHolder TextPlaceHolder <br />TextPlaceHolder TextPlaceHolder</span>
      </div>
    </div>
  </button>





<button className="card-button2">
  <div className="button-inner2">
    <div className="card2">
      {/* <img className="wallet" src={wallet} alt="Button Image"/> */}
      <p className="text8">View Wallet </p> 
      <span className="textcaption8">TextPlaceHolder TextPlaceHolder <br />TextPlaceHolder TextPlaceHolder <br />TextPlaceHolder TextPlaceHolder</span>
    </div>
  </div>
</button>





</div>
</div>


<div className="navbarg">
        <a href="#about-us" className="navbar">About us</a>
        <a href="#why-virtual-me" className="navbar">Why Virtual Me</a>
        <a href="#home" className="navbar">Home</a>
        <a href="#agreements" className="navbar">Agreements</a>
      </div>

        {/* <button className="button1">about us </button>
        <button className="button2">why virtual me </button>
        <button className="button3">home </button>
        <button className="button4">agreements </button> */}
        <button class="button5">
            
  {/* <img src={profile1} alt="profile" /> */}
</button>
       
        <p>

  <div class="line"></div>
  
</p>


      </div>
    </div>
  );
}

export default HomePage;