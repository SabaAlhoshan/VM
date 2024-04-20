import React from 'react';
import './SignPage.css';
import VMLogo from '../../uploads/VMLogo.png';  
import { useNavigate } from 'react-router-dom';

function SignPage() {
    const navigate = useNavigate();
  return (
    <div>

        <div >
            <img src={VMLogo} alt="Logo" className="Slogo"/>
        </div>

      <h1 className="maintext">Virtual Me</h1>

      <p className="sectext">Text Placeholder Text Placeholder Text Placeholder<br/> Text Placeholder Text Placeholder Text Placeholder<br/>Text Placeholder Text Placeholder Text Placeholder</p>

      <div className="sign-login">
        <button className="button" onClick={() => navigate('/Signfill')}>Sign Up</button>
        <button className="button" onClick={() => navigate('/Logfill')}>Login</button>
      </div>

    </div>
  );
}

export default SignPage;

