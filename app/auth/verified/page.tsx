import { EmailVerificationScreen } from '@/components/auth/EmailVerificationScreen';
import { buildPageMetadata } from '@/lib/metadata';
import { siteContent } from '@/content/site';

export const metadata = buildPageMetadata({
  title: `Email verified | ${siteContent.brand.appName}`,
  description: 'Your email has been verified. Return to the RIDE app and sign in.',
  path: '/auth/verified',
});

export default function AuthVerifiedPage() {
  return <EmailVerificationScreen variant="verified" />;
}
