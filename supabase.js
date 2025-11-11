import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://gfeenhqwwnwdtqivffdg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZWVuaHF3d253ZHRxaXZmZmRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MjEyMTUsImV4cCI6MjA3Nzk5NzIxNX0.0QcHKGEH87DiWcpuBFjaa3556wuu4Knd_D7P9rm56VI'
export const supabase = createClient(supabaseUrl, supabaseKey)
