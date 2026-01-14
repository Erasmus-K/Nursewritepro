import { createClient } from '@supabase/supabase-js'

// Direct configuration
const supabaseUrl = 'https://hsygxnbarqqcmpdnxcts.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzeWd4bmJhcnFxY21wZG54Y3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMzE2MzEsImV4cCI6MjA4MzYwNzYzMX0.I5PiTcsfDU_gW1NBp5eX7mU58lmRiZIPaNO7Ew2hi9M'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)