import React, { useState } from 'react';

const PaymentPage = () => {
  const paymentAmount = 500; // Assuming the payment amount is Rs500

  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = () => {
    // Simulate payment success
    const paymentResponse = {
      success: true,
      message: `Payment of Rs${paymentAmount} is successful.`,
    };

    // Update the payment status
    setPaymentStatus(paymentResponse);
  };

  return (
    <div className="min-h-screen flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-black text-white p-4 w-full mb-20">
        <h1 className="text-2xl font-bold text-center">Yoga Classes</h1>
      </nav>

      {/* Page content */}
      <div className="container mx-auto text-center mt-8 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Hello!</h2>
        <h3 className="text-2xl mb-4">Please confirm your admission by making the payment!</h3>
        <button onClick={handlePayment} className="bg-blue-500 text-white p-3 rounded">
          Pay Rs{paymentAmount}
        </button>

        {paymentStatus && (
          <p className={`mt-4 ${paymentStatus.success ? 'text-black-500' : 'text-red-500'}`}>
            {paymentStatus.message}
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-4 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Yoga Classes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PaymentPage;
