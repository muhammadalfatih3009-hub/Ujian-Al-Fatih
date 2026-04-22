import { createClient } from '@supabase/supabase-js';

const url = 'https://ptvtqnjbhonziglpxhro.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0dnRxbmpiaG9uemlnbHB4aHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTEwNzAsImV4cCI6MjA5MjM2NzA3MH0.9KWLIf6XeUzYURw6Ye9Fg7KkrO2jQ0PmPyMrlCq-Mxo';

const supabase = createClient(url, key);

async function check() {
    const id = '53c95a96-447a-4e99-a181-1fac42cfc49f';
    const { data } = await supabase.from('subjects').select('id, name, duration, question_count, token, is_active, education_level, shuffle_options, shuffle_questions').eq('id', id).single();
    if(!data) {
        console.log("No subject");
        return;
    }
    const { data: qData } = await supabase.from('questions').select('id, content').eq('subject_id', id);
    const questions = qData ? qData.map(q => ({ ...q.content, id: q.id })) : [];
    
    console.log("Subject:", data.name);
    console.log("Questions size:", questions.length);
}

check();
