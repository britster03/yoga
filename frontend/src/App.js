import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdmissionForm from './components/AdmissionForm/AdmissionForm';
import PaymentPage from './components/AdmissionForm/PaymentPage';
import Login from './components/AdmissionForm/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route exact path="/admission" element={<AdmissionForm/>} />
        <Route path="/payment" element={<PaymentPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
