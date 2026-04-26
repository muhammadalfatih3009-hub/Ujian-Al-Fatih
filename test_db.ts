import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ptvtqnjbhonziglpxhro.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0dnRxbmpiaG9uemlnbHB4aHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTEwNzAsImV4cCI6MjA5MjM2NzA3MH0.9KWLIf6XeUzYURw6Ye9Fg7KkrO2jQ0PmPyMrlCq-Mxo'
);

async function check() {
    console.log("Fetching results...");
    const { data } = await supabase.from('results').select('id, answers, peserta_id').neq('score', 0).limit(2);
    console.log("Raw answers for non-zero score:");
    console.log(JSON.stringify(data, null, 2));
}

check();
