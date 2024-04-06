import React from 'react';
import './NewHashedVoice.css';
import user from './user.png';
import wallet from './wallet.png';
import encrypted from './encrypted.png';


const NewHashedVoice = () => {
  return (
    <div className="general">

      <div className="toolbar">
        <button>about us</button>
        <button>why virtual me</button>
        <button>home</button>
        <button>agreements</button>
      </div>

      <div className="view_buttons">
        <button>View</button>
      </div>

      <div className="Delete_buttons">
        <button>Delete</button>
      </div>

      <header className="header">
        <h1 className="title">view<br />voice wallet</h1>
      </header>

      <header className="header2">
        <h1 className="title2">Hashed voice fingerprint</h1>
        <h1 className="title3">Text PlaceHolder TextPlaceHolder</h1>
      </header>

      <button className="button1">
        <img src={wallet} alt="Wallet Icon" className="icon" />
        <span className="text1">view wallet</span>
        <span className="text2"> <br />text placeHolder text placeHolder <br /> text placeHolder  text placeHolder<br /> text placeHolder  text placeHolder</span>
      </button>

      <button className="button2">
        <img src={encrypted} alt="Encrypted Icon" className="icon2" />
      </button>

      <button className="button3">
        <img src={user} alt="User Icon" className="image" />
      </button>

      <div class="vertical-line"></div>

    </div>
  );
};

export default NewHashedVoice;
