import { Suspense } from 'react';

import { AuthCallbackClient } from '@/components/auth/AuthCallbackClient';
import { buildPageMetadata } from '@/lib/metadata';
import { siteContent } from '@/content/site';

export const metadata = buildPageMetadata({
  title: `Email verification | ${siteContent.brand.appName}`,
  description: `Complete ${siteContent.brand.appName} email verification and return to the app.`,
  path: '/auth/callback',
});

function CallbackFallback() {
  return (
    <section className="flex min-h-[50vh] items-center justify-center py-24">
      <p className="text-sm text-ride-muted" role="status">
        Confirming your email…
      </p>
    </section>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<CallbackFallback />}>
      <AuthCallbackClient />
    </Suspense>
  );
}
