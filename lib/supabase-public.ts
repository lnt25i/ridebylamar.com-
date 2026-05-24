/**
 * Public Supabase client for auth callback token exchange on the marketing site.
 * Uses only the anon key — no service role key, no secrets.
 *
 * Required Vercel env vars (website project only):
 *   NEXT_PUBLIC_SUPABASE_URL      — e.g. https://pvsrzvfozpdrqzgnlfrl.supabase.co
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY — public anon key (safe to expose in browser)
 *
 * Session is not persisted — this site is a marketing page, not a web app.
 * Token exchange here only marks the user's email as confirmed in Supabase Auth.
 */
import { createClient } from '@supabase/supabase-js';

function resolveEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? '';
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ??
    '';
  return { url, key };
}

export function isPublicSupabaseConfigured(): boolean {
  const { url, key } = resolveEnv();
  return Boolean(url && key);
}

/**
 * Returns a browser-side Supabase client for token exchange, or null if env vars are missing.
 * Session is intentionally not persisted — the website does not manage user sessions.
 */
export function createPublicSupabaseClient() {
  const { url, key } = resolveEnv();
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
