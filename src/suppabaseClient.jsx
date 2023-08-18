import { createClient } from '@supabase/supabase-js';

const URL = 'https://hxuglhejhjqgeuuzxxzc.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4dWdsaGVqaGpxZ2V1dXp4eHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5NDAyNjAsImV4cCI6MjAwNjUxNjI2MH0.YJidReI6HyKK2BQUK1tOQN3jYtRXCncG22fC0eSZnqs';

export const supabase = createClient(URL, API_KEY);