/**
 * CONTACT PAGE — form labels and helper copy.
 *
 * Support email is in content/site.ts → contact.supportEmail
 * TODO: Replace mailto flow with a form API (Resend, SendGrid, etc.) when requested.
 */

export const contactContent = {
  page: {
    eyebrow: 'Contact',
    title: 'Contact us',
    lead: 'Tell us how we can help and our support team will review your message.',
  },
  helperText:
    'This form opens your email app with a pre-filled message. No data is stored on our servers. You can also email us directly anytime.',
  directEmailNote: 'Email support directly at support@ridebylamar.com.',
  fields: {
    fullName: 'Full name',
    email: 'Email address',
    phone: 'Phone number (optional)',
    topic: 'Topic / reason',
    message: 'Message',
  },
  topics: [
    'General inquiry',
    'Rider support',
    'Driver support',
    'Safety concern',
    'Business / partnership',
    'Account question',
    'Careers / driver interest',
  ],
  submitLabel: 'Email Support',
  directLabel: 'Contact Support',
} as const;
