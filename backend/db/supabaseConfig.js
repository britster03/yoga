// db/supabaseConfig.js

const { createClient } = require('@supabase/supabase-js');

const supabaseConfig = () => {
  const supabaseUrl = 'https://onlihwgmrptveygkgodk.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ubGlod2dtcnB0dmV5Z2tnb2RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4ODY4MjQsImV4cCI6MjAxODQ2MjgyNH0.gnRM8o9OCQm0rW9Rfn1Hisw2p-yGarzYpQluBvLg7BA';

  return createClient(supabaseUrl, supabaseKey);
};

module.exports = supabaseConfig;
