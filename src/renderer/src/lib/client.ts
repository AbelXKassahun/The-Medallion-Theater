/*
import { createClient } from '@supabase/supabase-js';

const client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const supabase = () => client;

export default supabase;

*/

import { createClient } from '@supabase/supabase-js';

const client = createClient(import.meta.env.VITE_API_URL , import.meta.env.VITE_API_KEY);

const supabase = () => client;

export default supabase;