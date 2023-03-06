import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://tqtbsgvjookvxffzcgnv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxdGJzZ3Zqb29rdnhmZnpjZ252Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI1MDQxNTgsImV4cCI6MTk2ODA4MDE1OH0.NX1I-yxMm4WM_WqJnB153MREVeBX5hhBPnYDtiyUzdo')