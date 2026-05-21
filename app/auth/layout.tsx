import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/metadata';
import { siteContent } from '@/content/site';

export const metadata: Metadata = buildPageMetadata({
  title: `Email verification | ${siteContent.brand.appName}`,
  description: `Confirm your ${siteContent.brand.appName} account email and return to the app to sign in.`,
  path: '/auth',
});

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="relative min-h-[60vh]">{children}</div>;
}
