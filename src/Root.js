import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import App2 from './App2';

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app2" element={<App2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;