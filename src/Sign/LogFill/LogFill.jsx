import React from 'react';
import './LogFill.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function LogFill() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(formData.email==='' || formData.password===''){
      toast.error("Please fill all the fields.")
      return;
    }
  try {
    setLoading(true);
    const response=await axios.post(`${process.env.REACT_APP_BASE_URL}auth/login`,formData);
    console.log(response);
    if(response.status===200 || response.status===201){
      navigate('/LogOtp'
      );
      toast.success("OTP Sent to your registered Email ID! Please enter the OTP to continue.")
  }
 } catch (error) {
    console.log(error);
    toast.error("Invalid Credentials! Please try again.")
  }finally{
    setLoading(false);
  }
    // navigate('/HomePage');
  }

  return (
    <div className="sign-up-container">

      <div className="form-wrapper">
        <form>
          
          <label for="id">Email:</label>
          <input type="text" id="email" name="email" placeholder="Enter your email" className="box" required  minLength={10}
          onChange={handleChange}
          />
          <br/><br/>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" className="box" required minLength={8} 
          onChange={handleChange}
          
          />
          <br/><br/>

          <div >
          <button  type="submit" className="sub" onClick={handleSubmit} 
          disabled={loading}
          
          >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogFill;
