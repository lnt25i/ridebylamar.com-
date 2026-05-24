'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { EmailVerificationScreen } from '@/components/auth/EmailVerificationScreen';
import { createPublicSupabaseClient, isPublicSupabaseConfigured } from '@/lib/supabase-public';

type CallbackStatus = 'loading' | 'verified' | 'received' | 'error';

function readErrorDescription(params: URLSearchParams): string | null {
  return params.get('error_description') ?? params.get('error_code') ?? params.get('error');
}

/**
 * Handles Supabase auth redirect params on the public marketing site.
 *
 * Supabase sends email confirmation / password-reset / magic-link redirects to
 * https://ridebylamar.com/auth/callback with one of:
 *   - token_hash + type  →  OTP verification (signup, recovery, email_change, magiclink)
 *   - code               →  PKCE code exchange (OAuth / PKCE email link)
 *   - error              →  failed link (expired, already used, etc.)
 *
 * On success the user's email is marked confirmed in Supabase Auth. We then show
 * a branded success screen directing them back to the mobile app.
 *
 * Graceful degradation: if NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY
 * are not yet set in this site's Vercel project, the component falls back to the
 * display-only "received" state so the page still renders without a runtime error.
 */
export function AuthCallbackClient() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<CallbackStatus>('loading');
  const [errorDescription, setErrorDescription] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const error = params.get('error');

    // Supabase reported an error before we even got the params.
    if (error) {
      setErrorDescription(readErrorDescription(params));
      setStatus('error');
      return;
    }

    const code = params.get('code');
    const tokenHash = params.get('token_hash');
    const type = params.get('type') as
      | 'signup'
      | 'recovery'
      | 'email_change'
      | 'magiclink'
      | 'invite'
      | null;

    // Graceful degradation: if Supabase is not configured in this project's
    // Vercel env, show a display-only confirmation instead of a runtime error.
    if (!isPublicSupabaseConfigured()) {
      setStatus('received');
      return;
    }

    const supabase = createPublicSupabaseClient();
    if (!supabase) {
      setStatus('received');
      return;
    }

    async function exchange() {
      try {
        if (tokenHash && type) {
          // Primary path: email confirmation, password reset, magic link, invite.
          // verifyOtp marks the user's email as confirmed in Supabase Auth.
          const { error: verifyError } = await supabase!.auth.verifyOtp({ token_hash: tokenHash, type });
          if (verifyError) {
            setErrorDescription(verifyError.message);
            setStatus('error');
          } else {
            setStatus('verified');
          }
        } else if (code) {
          // Secondary path: PKCE code from OAuth or email-PKCE link.
          // Note: mobile-initiated PKCE flows store the code verifier on the device,
          // so this path applies to web-initiated flows or future web auth support.
          const { error: exchangeError } = await supabase!.auth.exchangeCodeForSession(code);
          if (exchangeError) {
            setErrorDescription(exchangeError.message);
            setStatus('error');
          } else {
            setStatus('verified');
          }
        } else {
          // No recognisable auth params — direct visit or params already consumed.
          setStatus('received');
        }
      } catch (e) {
        setErrorDescription(e instanceof Error ? e.message : 'Verification failed. Please try again.');
        setStatus('error');
      }
    }

    void exchange();
  }, [searchParams]);

  if (status === 'loading') {
    return (
      <section className="flex min-h-[50vh] items-center justify-center py-24">
        <p className="text-sm text-ride-muted" role="status">
          Confirming your email…
        </p>
      </section>
    );
  }

  if (status === 'error') {
    return <EmailVerificationScreen variant="error" errorDescription={errorDescription} />;
  }

  if (status === 'verified') {
    return <EmailVerificationScreen variant="verified" />;
  }

  // 'received' — Supabase not yet configured in this Vercel project,
  // or no auth params present (direct visit).
  return <EmailVerificationScreen variant="received" />;
}
