import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    selectedBatch: '',
  });

  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.age || !formData.selectedBatch) {
      setError('All fields are required');
      return;
    }

    // Additional validation (e.g., age range)
    const ageNumber = parseInt(formData.age, 10);
    if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 65) {
      setError('Invalid age. Must be between 18 and 65.');
      return;
    }

    // If validation passes, send the data to the backend
    try {
      const response = await fetch('https://yoga-26p2.onrender.com/api/admission/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form.');
      }

      // Clear any previous errors
      setError(null);
      setSubmitted(true);
      alert('Form submitted successfully!');

      // Optionally, handle success or perform additional actions
      console.log('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      setError('Failed to submit the form.');
    }
  };

  useEffect(() => {
    // Redirect to payment page upon successful form submission
    if (submitted) {
      navigate('/payment');
    }
  }, [submitted, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <nav className="bg-black text-white p-4 w-full mb-20">
        <h1 className="text-2xl font-bold text-center">Yoga Classes</h1>
      </nav>

      {/* Form Container */}
      <div className="bg-white p-8 rounded shadow-md w-96 mt-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Admission Form</h2>

        {/* Form Inputs */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border p-3 rounded focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full border p-3 rounded focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Select Batch</label>
          <select
            value={formData.selectedBatch}
            onChange={(e) => handleInputChange({ target: { name: 'selectedBatch', value: e.target.value } })}
            className="w-full border p-3 rounded focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Batch</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
      <footer className="bg-black text-white p-4 w-full mt-7">
        <p className="text-center">© 2023 Yoga Classes</p>
      </footer>
    </div>
  );
};


export default AdmissionForm;
