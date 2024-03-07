import React from 'react';
import './SignFill.css';
function SignFill() {
    
  return (
    <div className="sign-up-container">

      <div className="form-wrapper">
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" className="box" required />
           <br/><br/>
          <label for="id">ID:</label>
          <input type="text" id="id" name="id" placeholder="Enter your ID" className="box" required  minLength={10} maxLength={10} />
          <br/><br/>
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="box" minLength={10} maxLength={10} required/>
          <br/><br/>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" className="box" minLength={8} required />
          <br/><br/>

          <div >
          <button  type="submit" className="sub">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignFill;

