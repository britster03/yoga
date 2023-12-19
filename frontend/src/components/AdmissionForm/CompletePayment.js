const { createClient } = require('@supabase/supabase-js');

const CompletePayment = async (userId, paymentAmount) => {
  try {
    const supabaseUrl = 'https://onlihwgmrptveygkgodk.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ubGlod2dtcnB0dmV5Z2tnb2RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4ODY4MjQsImV4cCI6MjAxODQ2MjgyNH0.gnRM8o9OCQm0rW9Rfn1Hisw2p-yGarzYpQluBvLg7BA';

    //creating a supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);

    //assuming payment is successful
    const paymentResponse = {
      success: true,
      message: `Payment of Rs${paymentAmount} is successful.`,
      transactionId: 'mockTransactionId', //assuming a mock transaction id
    };

    //updating supabase tabke with payment details
    const { data, error } = await supabase
      .from('payments')
      .insert({
        user_id: userId,
        amount: paymentAmount,
        transaction_id: paymentResponse.transactionId,
        payment_time: new Date().toISOString(),
      });

    if (error) {
      console.error('Error updating payment details:', error);
      return { success: false, message: 'Payment details update failed.' };
    }

    return paymentResponse;
  } catch (error) {
    console.error('Error processing payment:', error);
    return { success: false, message: 'Payment failed.' };
  }
};

module.exports = {
  CompletePayment,
};
