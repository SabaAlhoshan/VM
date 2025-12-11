
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SignPage from './Sign/SignPage/SignPage';
import SignFill from './Sign/SignFill/SignFill';
import LogFill from './Sign/LogFill/LogFill';
import HomePage from './HomePage/HomePage';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import NewVoicefingerPrint from './NewVoicefingerPrint/NewVoicefingerPrint';
import LogOtp from './Sign/LogOTP/LogOtp';


function App() {
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   if(localStorage.getItem('token')){
  //     navigate('/HomePage');
  //   }

  // },[localStorage.getItem('token')])


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/SignFill" element={<SignFill />} />
      <Route path="/" element={<LogFill />} />
      <Route path="/LogOtp" element={<LogOtp/>} />

        <Route path="/SignPage" element={<SignPage />} />
        <Route path="/HomePage" element={<HomePage />} />

        <Route path="/NewVoicefingerPrint" element={<NewVoicefingerPrint />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
