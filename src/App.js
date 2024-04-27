
import logo from './logo.svg';
import './App.css';
import logo1 from './vmLOGO.png';
import profile1 from'./profile.png';
import SoundWave from './soundwave1.png';
import wallet from './wallet.png';



import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return (
 
    
    <div className="App">
      <header className="App-header">
      <header className="App-header2">
        <img src={logo1} className="App-logo" alt="logo" />
        </header>
        <header className="App-header1">
        <p>
       informative  <br />
       text <br />
       placeholder
        </p>
        </header>
        <header className="App-header3">
        <p>
       Text PlaceHolder
        </p>
        </header>
        <header className="App-header4">
        <p>
  TextPlaceHolderTextPlaceHolder&nbsp;&nbsp;&nbsp;&nbsp;TextPlaceHolderTextPlaceHolder<br />
  TextPlaceHolderTextPlaceHolder&nbsp;&nbsp;&nbsp;&nbsp;TextPlaceHolderTextPlaceHolder
</p>
</header>
<header>
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




  <a href="App2.js" class="card-button">
  <div class="button-inner">
    <div class="card">
      <img class="soundwaveimg" src={SoundWave} alt="Button Image"/>
      <p class="text9">new voice fingerprint </p> 
      <span class="textcaption9">TextPlaceHolder TextPlaceHolder <br />TextPlaceHolder TextPlaceHolder <br />TextPlaceHolder TextPlaceHolder</span>
    </div>
  </div>
</a>





<a href="#" class="card-button2">
  <div class="button-inner2">
    <div class="card2">
      <img class="wallet" src={wallet} alt="Button Image"/>
      <p class="text8">view wallet </p> 
      <span class="textcaption8">TextPlaceHolder TextPlaceHolder <br />TextPlaceHolder TextPlaceHolder <br />TextPlaceHolder TextPlaceHolder</span>
    </div>
  </div>
</a>





</div>
</header>


     
        <button className="button1">about us </button>
        <button className="button2">why virtual me </button>
        <button className="button3">home </button>
        <button className="button4">agreements </button>
        <button class="button5">
  <img src={profile1} alt="profile" />
</button>
       
        <p>

  <div class="line"></div>
  
</p>


      </header>



      <a
        href="/app2"
        onClick={() => navigate('/app2')}
        className="card-button"  
      >

      </a>
    </div>
  );
}

export default App;

