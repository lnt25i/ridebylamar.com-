/**
 * Copy for Supabase email verification landing pages.
 * Redirect target in Supabase Auth: https://ridebylamar.com/auth/callback
 */

export const authVerificationContent = {
  verified: {
    title: 'Your email has been verified.',
    subtext: 'You can now return to the RIDE app and sign in.',
    primaryCta: 'Open RIDE App',
    primaryHint: 'Open the RIDE app on your phone.',
    secondaryCta: 'Go to homepage',
    supportPrefix: 'Need help? Contact',
  },
  callbackReceived: {
    title: 'Email verification received.',
    subtext: 'You can return to the RIDE app and sign in.',
    primaryCta: 'Open RIDE App',
    primaryHint: 'Open the RIDE app on your phone.',
    secondaryCta: 'Go to homepage',
    supportPrefix: 'Need help? Contact',
  },
  error: {
    title: 'Verification link could not be confirmed.',
    subtext:
      'The link may have expired or already been used. Request a new verification email from the RIDE app, or contact support.',
    primaryCta: 'Get the App',
    primaryHint: '',
    secondaryCta: 'Go to homepage',
    supportPrefix: 'Need help? Contact',
  },
} as const;
