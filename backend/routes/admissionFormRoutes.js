const express = require('express');
const router = express.Router();
const admissionFormController = require('../controllers/admissionFormController');

// Routes
router.post('/submit', admissionFormController.submitForm);

module.exports = router;
