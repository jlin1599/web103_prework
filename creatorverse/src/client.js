import { createClient } from '@supabase/supabase-js';

const URL = 'https://btwdkiolosxhiobuxsru.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0d2RraW9sb3N4aGlvYnV4c3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MzcwOTksImV4cCI6MjA2NzMxMzA5OX0.Fuwh8Jo8qmMT51bw7LE1Jv3vOBqAopctLDXIN7fCLJg';

export const supabase = createClient(URL, API_KEY);
