import React from 'react';
import '../LogFill/LogFill.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function LogOtp() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    otp: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
  try {
    const response=await axios.post(`${process.env.REACT_APP_BASE_URL}auth/verify-otp`,formData);
    console.log(response);
    if(response.status===200 || response.status===201){
        localStorage.setItem('token',response.data.token);
      navigate('/HomePage'
      );
      toast.success("Login Successful!")
  }
 } catch (error) {
    console.log(error);
    toast.error("Invalid OTP! Please try again.")
  }
    // navigate('/HomePage');
  }

  return (
    <div className="sign-up-container">

      <div className="form-wrapper">
        <form>
          
          <label for="id">OTP:</label>
          <input type="text" id="otp" name="otp" placeholder="Enter OTP" className="box" required  minLength={10}
          onChange={handleChange}
          />
          <br/><br/>
         

          <div >
          <button  type="submit" className="sub" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogOtp;
