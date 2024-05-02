import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//////



////
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import FingerprintPage from './Pages/FingerprintPage';
import TestPage from './Pages/TestPage';
import AgreementsPage from './Pages/AgreementsPage';
import ProfilePage from './Pages/ProfilePage';
import ViewWalletPage from './Pages/ViewWalletPage';
import HomeePage from './Pages/HomeePage';
import MataMaskPage from './Pages/MeteMaskPage';
import ViewButtonPage from './Pages/ViewButtonPage';
import ExtractButtonPage from './Pages/ExtractButtonPage';
import DeleteRecordPage from './Pages/DeleteRecordPage';
import ViewRecordPage from './Pages/ViewRecordPage';
import WhyVirtualMePage from './Pages/WhyVirtualMePage';
import VerifyButtonPage from './Pages/VerifyButtonPage';
import NextButtonPage from './Pages/NextButtonPage';
import RecordingTest from './Pages/RecordingTest';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "About",
    element: <AboutPage/>,
  },
  {
    path: "Contact",
    element: <ContactPage/>,
  },
  {
    path: "Fingerprint",
    element: <FingerprintPage/>,
  },
  {
    path: "Test",
    element: <TestPage/>,
  },
  {
    path: "Agreements",
    element: <AgreementsPage/>,
  },

  {
    path: "Profile",
    element: <ProfilePage/>,
  },

  {
    path: "ViewWallet",
    element: <ViewWalletPage/>,
  },
  {
    path: "Homee",
    element: <HomeePage/>,
  },
  {
    path: "MetaMask",
    element: <MataMaskPage/>,
  },
  {
    path: "ViewButton",
    element: <ViewButtonPage/>,
  },
  {
    path: "ExtractButton",
    element: <ExtractButtonPage/>,
  },
  {
    path: "DeleteRecord",
    element: <DeleteRecordPage/>,
  },
  {
    path: "ViewRecord",
    element: <ViewRecordPage/>,
  },
  {
    path: "WhyVirtualMe",
    element: <WhyVirtualMePage/>,
  },
  {
    path: "VerifyButton",
    element: <VerifyButtonPage/>,
  },
  {
    path: "NextButton",
    element: <NextButtonPage/>,
  },
  {
    path: "Recording",
    element: <RecordingTest/>,
  },
  
  
]);


////////


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <RouterProvider router={router}/>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
