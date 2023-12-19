import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {createClient} from '@supabase/supabase-js';

const supabase = createClient(
  'https://rquwntqrmfmwtzzlbjci.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdXdudHFybWZtd3R6emxiamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMDYzNTEsImV4cCI6MjAxNjY4MjM1MX0.szFlkP1hTlddGoE8akJrt78fCjB1XVIhWF8ZrKCoxZw',  
)

const PaymentPage = () => {
  const paymentAmount = 500; 
  const navigate = useNavigate();

  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = () => {
    //simulation of successful payment
    //from CompletePayment we re
    const paymentResponse = {
      success: true,
      message: `Payment of Rs${paymentAmount} is successful.`,
    };

    //updating payment status
    setPaymentStatus(paymentResponse);

  };

  //sign out feature
  async function signOutUser(){
    const {error} = await supabase.auth.signOut();
    navigate("/");
}

  return (
  <div className="min-h-screen flex flex-col bg-gray-100">

      <nav className="bg-black text-white p-4 w-full mb-20">
        <h1 className="text-2xl font-bold text-center">Yoga Classes</h1>
      </nav>

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="container mx-auto text-center mt-8 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Hello!</h2>

        <h3 className="text-2xl mb-4">Please confirm your admission by making the payment!</h3>
        <button onClick={handlePayment} className="bg-blue-500 text-white p-3 rounded">
          Pay Rs{paymentAmount}
        </button>

        <div>
        <button className="bg-blue-500 text-white p-3 rounded mt-5" onClick={()=> signOutUser()}>Sign Out</button>
        </div>
        

        {paymentStatus && (
          <p className={`mt-4 ${paymentStatus.success ? 'text-black-500' : 'text-red-500'}`}>
            {paymentStatus.message}
          </p>
        )}
      </div>
    </div>

      <footer className="bg-black text-white p-4 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Yoga Classes. All rights reserved.</p>
        </div>
      </footer>


  </div>
  );
};

export default PaymentPage;
