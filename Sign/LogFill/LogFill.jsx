import React from 'react';
import './LogFill.css';
function LogFill() {
  return (
    <div className="sign-up-container">

      <div className="form-wrapper">
        <form>
          
          <label for="id">ID:</label>
          <input type="text" id="id" name="id" placeholder="Enter your ID" className="box" required  minLength={10} maxLength={10} />
          <br/><br/>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" className="box" required minLength={8} />
          <br/><br/>

          <div >
          <button  type="submit" className="sub">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogFill;
