import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const isSupabaseAdminConfigured = () => {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL && 
    process.env.SUPABASE_SERVICE_ROLE_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_URL.startsWith('https://') &&
    process.env.SUPABASE_SERVICE_ROLE_KEY.length > 20
  );
};

let supabaseAdminInstance: SupabaseClient | null = null;

export const getSupabaseAdmin = () => {
  if (!isSupabaseAdminConfigured()) {
    throw new Error('Supabase admin is not configured');
  }
  
  if (!supabaseAdminInstance) {
    supabaseAdminInstance = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );
  }
  
  return supabaseAdminInstance;
};
