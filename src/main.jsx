
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecordToBlockchain from './RecordToBlockchain';
import App from './App';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/RecordToBlockchain" element={<RecordToBlockchain />} />
      <Route path="/App" element={<App />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
