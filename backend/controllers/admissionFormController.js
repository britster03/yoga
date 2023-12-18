const supabaseConfig = require('../db/supabaseConfig');
const supabase = supabaseConfig();

const validBatches = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];

const submitForm = async (req, res) => {
  try {
    const { name, age, selectedBatch,batch } = req.body;

    // Validate name (assuming name is a non-empty string)
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Invalid name. Must be a non-empty string.' });
      }

    // Validate age (assuming age is a number)
    if (isNaN(age) || age < 18 || age > 65) {
      return res.status(400).json({ error: 'Invalid age. Must be between 18 and 65.' });
    }

    // Check if the selected batch is in the list of valid batches
    if (!validBatches.includes(selectedBatch)) {
        return res.status(400).json({ error: 'Invalid batch selection.' });
      }

    // Insert the form data into the 'admission_forms' table in Supabase
    const { data, error } = await supabase.from('admission_forms').insert({
      name,
      age,
      selected_batch: selectedBatch,
      submission_time: new Date().toISOString(),
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error submitting the admission form.' });
    }

    const { data: newBatch, error: batchInsertError} = await supabase.from('batches').insert({
        name,
        batch: selectedBatch,
      });
  
      if (batchInsertError) {
        console.error(batchInsertError);
        return res.status(500).json({ error: 'Error inserting batch data.' });
      }

    // Return success response with the inserted data
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  submitForm,
};

