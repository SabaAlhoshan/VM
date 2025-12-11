import React, { useEffect } from 'react';
import './SignFill.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function SignFill() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: '',
    id: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(formData.name==='' || formData.id==='' || formData.email==='' || formData.password===''){
      toast.error("Please fill all the fields.")
      return;
    }
    if(formData.id.length!==10){
      toast.error("Invalid ID! Please enter a valid ID.")
      return;
    }
  try {
    const response=await axios.post(`${process.env.REACT_APP_BASE_URL}auth/signup`,formData);
    console.log(response);
    if(response.status===200 || response.status===201){
      navigate('/'
      );
      toast.success("Sign Up Successful! Please Login to continue.")
  }
 } catch (error) {
    console.log(error);
    toast.error("Invalid Credentials! Please try again.")
  }

    // navigate('/HomePage');
  }



  return (
    <div className="sign-up-container">

      <div className="form-wrapper">
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" className="box" required
          onChange={handleChange}
          />
           <br/><br/>
          <label for="id">ID:</label>
          <input type="text" id="id" name="id" placeholder="Enter your ID" className="box" required  minLength={10} maxLength={10} 
          onChange={handleChange}
          />
          <br/><br/>
          <label for="phone">Email:</label>
          <input type="tel" id="phone" name="email" placeholder="Enter your email" className="box" minLength={10}  required
          onChange={handleChange}
    
          />
          <br/><br/>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" className="box" minLength={8} required
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

export default SignFill;

