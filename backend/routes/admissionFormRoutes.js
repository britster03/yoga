const express = require('express');
const router = express.Router();
const admissionFormController = require('../controllers/admissionFormController');

//route to subnmit
router.post('/submit', admissionFormController.submitForm);

module.exports = router;
