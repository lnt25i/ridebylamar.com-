'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { EmailVerificationScreen } from '@/components/auth/EmailVerificationScreen';

type CallbackStatus = 'loading' | 'received' | 'error';

function readErrorDescription(params: URLSearchParams): string | null {
  return params.get('error_description') ?? params.get('error_code') ?? params.get('error');
}

/**
 * Handles Supabase auth redirect query params on the public site.
 * Token exchange via verifyOtp requires @supabase/supabase-js and NEXT_PUBLIC_* keys;
 * until those exist, shows a safe confirmation message without claiming server-side verification.
 */
export function AuthCallbackClient() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<CallbackStatus>('loading');
  const [errorDescription, setErrorDescription] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const error = params.get('error');

    if (error) {
      setErrorDescription(readErrorDescription(params));
      setStatus('error');
      return;
    }

    setStatus('received');
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

  return <EmailVerificationScreen variant="received" />;
}
