import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdmissionForm from './components/AdmissionForm/AdmissionForm';
import PaymentPage from './components/AdmissionForm/PaymentPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AdmissionForm/>} />
        <Route path="/payment" element={<PaymentPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
