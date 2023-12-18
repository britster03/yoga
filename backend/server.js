const express = require('express');
const cors = require('cors');
const admissionFormRoutes = require('./routes/admissionFormRoutes');
const supabaseConfig = require('./db/supabaseConfig');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

// Initialize Supabase client
const supabase = supabaseConfig();

// Middleware
app.use(express.json());

// Routes
app.route('/api/admission/submit')
  .get((req, res) => {
    // Handle GET request (if needed)
    res.status(200).json({ message: 'GET request received for /api/admission/submit' });
  })
  .post(async (req, res) => {
    // Handle POST request using the admissionFormController logic
    try {
      const { submitForm } = require('./controllers/admissionFormController');
      await submitForm(req, res, supabase);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
