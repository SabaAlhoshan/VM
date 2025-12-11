
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignPage from './Sign/SignPage/SignPage';
import SignFill from './Sign/SignFill/SignFill';
import LogFill from './Sign/LogFill/LogFill';
import HomePage from './HomePage/HomePage';

import NewVoicefingerPrint from './NewVoicefingerPrint/NewVoicefingerPrint';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/SignFill" element={<SignFill />} />
      <Route path="/LogFill" element={<LogFill />} />
        <Route path="/SignPage" element={<SignPage />} />
        <Route path="/HomePage" element={<HomePage />} />

        <Route path="/NewVoicefingerPrint" element={<NewVoicefingerPrint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
