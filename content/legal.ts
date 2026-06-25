/**
 * LEGAL CONTENT — edit section text here when counsel provides final policies.
 *
 * Every document uses draft placeholders until you remove the draft banner in
 * components/LegalDocument.tsx after attorney approval.
 *
 * Do NOT claim attorney review is complete on draft pages.
 */

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export const legalDraftNotice = 'Draft — pending legal review.';

export const legalDocuments: LegalDocument[] = [
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    description: 'Platform terms for riders, drivers, and visitors.',
    sections: [
      {
        heading: '1. Acceptance',
        paragraphs: [
          'By accessing RIDE services, websites, or applications, you agree to these Terms and any policies referenced here.',
        ],
      },
      {
        heading: '2. Eligibility',
        paragraphs: ['Users must meet applicable age, licensing, and local law requirements to request or provide rides.'],
      },
      {
        heading: '3. Platform role',
        paragraphs: [
          'RIDE provides technology that connects riders and independent drivers. We do not guarantee availability in every area or at every time.',
        ],
      },
      {
        heading: '4. Conduct',
        bullets: [
          'No harassment, discrimination, or unsafe behavior.',
          'Accurate account information and compliance with applicable laws.',
          'We may suspend or remove accounts that violate platform rules.',
        ],
      },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect personal information.',
    sections: [
      {
        heading: '1. Overview',
        paragraphs: [
          'Lamar Technology LLC describes how RIDE may process personal data for account management, trips, payments, safety, fraud prevention, and support.',
        ],
      },
      {
        heading: '2. Categories of data',
        bullets: [
          'Account and profile information.',
          'Location and trip-related data when you use the service.',
          'Payment and transaction records processed by payment partners.',
          'Communications with support and safety teams.',
        ],
      },
      {
        heading: '3. Your choices',
        paragraphs: [
          'You may contact us regarding access, correction, or deletion requests where permitted by law. Some records may be retained for legal, tax, or safety obligations.',
        ],
      },
      {
        heading: '4. SMS and text messaging',
        paragraphs: [
          'If you provide a mobile number, RIDE (Lamar Technology LLC) may send SMS text messages for account security and service notifications — most importantly one-time verification passcodes (2FA) to confirm your phone number. You opt in within the RIDE mobile app: during sign-up and in Account → Phone you enter your own mobile number and tap “Send code,” and the screen discloses that you agree to receive a one-time verification passcode by SMS. Message frequency depends on your verification requests. Message and data rates may apply.',
          'You can opt out at any time by replying STOP to any message; reply HELP for help. Opting out of verification texts may prevent you from completing phone verification. We do not sell or share your mobile number or SMS consent with third parties or affiliates for their marketing. See our SMS Messaging Terms at https://www.ridebylamar.com/legal/sms-terms.',
        ],
      },
    ],
  },
  {
    slug: 'sms-terms',
    title: 'SMS Messaging Terms',
    description: 'How RIDE sends text messages: opt-in consent, frequency, and opt-out.',
    sections: [
      {
        heading: 'Program description',
        paragraphs: [
          'RIDE (Lamar Technology LLC) uses SMS text messaging to send account-security and service messages — primarily one-time verification passcodes (2FA) used to confirm your mobile number during sign-up and when you add or change your phone number. RIDE does not send marketing or promotional text messages.',
        ],
      },
      {
        heading: 'How you opt in',
        paragraphs: [
          'You opt in inside the RIDE mobile app. During sign-up, and in Account → Phone, you enter your own mobile number and tap “Send code.” Directly above that button the app states: “By tapping Send code, you agree to receive a one-time verification passcode by SMS from RIDE at the number provided. Message frequency depends on your verification requests. Msg & data rates may apply. Reply STOP to opt out, HELP for help.” Exactly one passcode is sent per request, only to verify the number you just entered.',
        ],
      },
      {
        heading: 'Message frequency and cost',
        paragraphs: [
          'Message frequency depends on how many verification requests you make (typically one message per request). Message and data rates may apply, depending on your mobile carrier and plan.',
        ],
      },
      {
        heading: 'Opt-out and help',
        paragraphs: [
          'Reply STOP to any message to stop receiving texts; reply HELP for help. You can also contact support@ridebylamar.com. Opting out of verification messages may prevent you from completing phone verification and using features that require a verified number.',
        ],
      },
      {
        heading: 'Privacy',
        paragraphs: [
          'We do not sell or share your mobile number or your SMS consent with third parties or affiliates for their own marketing. See our Privacy Policy at https://www.ridebylamar.com/legal/privacy-policy.',
        ],
      },
    ],
  },
  {
    slug: 'rider-agreement',
    title: 'Rider Agreement',
    description: 'Rider-specific terms and ride request rules.',
    sections: [
      {
        heading: '1. Ride requests',
        paragraphs: ['Riders agree to provide accurate pickup and destination details and to be ready at pickup.'],
      },
      {
        heading: '2. Fees',
        paragraphs: [
          'Fares, fees, and promotions are shown in the app before confirmation where available. Additional charges may apply per the Payment Policy.',
        ],
      },
      {
        heading: '3. Safety',
        paragraphs: [
          'Use in-app safety tools and contact support for non-emergency issues. For emergencies, contact local authorities.',
        ],
      },
    ],
  },
  {
    slug: 'driver-agreement',
    title: 'Driver Agreement',
    description: 'Driver onboarding, conduct, and platform standards.',
    sections: [
      {
        heading: '1. Independent contractor status',
        paragraphs: [
          'Drivers operate as independent providers subject to local law. RIDE does not guarantee trip volume or income.',
        ],
      },
      {
        heading: '2. Requirements',
        bullets: [
          'Valid license, registration, and insurance as required by law and platform policy.',
          'Completion of onboarding and verification steps.',
          'Professional conduct toward riders and support staff.',
        ],
      },
      {
        heading: '3. Flex Mode and Pro Mode',
        paragraphs: [
          'Where offered, Flex Mode and Pro Mode may provide different scheduling and earnings tools. Availability and features may vary by market.',
        ],
      },
    ],
  },
  {
    slug: 'community-guidelines',
    title: 'Community Guidelines',
    description: 'Respectful conduct standards for riders and drivers.',
    sections: [
      {
        heading: '1. Respect',
        paragraphs: ['Treat riders, drivers, and support staff with respect. Harassment and discrimination are not permitted.'],
      },
      {
        heading: '2. Safety',
        paragraphs: ['Follow applicable laws and platform safety guidance. Report concerns through support channels.'],
      },
      {
        heading: '3. Enforcement',
        paragraphs: ['Violations may result in warnings, suspension, or removal from the platform under our Terms of Service.'],
      },
    ],
  },
  {
    slug: 'safety-policy',
    title: 'Safety Policy',
    description: 'Safety principles, reporting, and support access.',
    sections: [
      {
        heading: '1. Safety-first design',
        paragraphs: [
          'RIDE is built with safety tools, trip context, and support access. Policies evolve as we prepare for launch and expand operations.',
        ],
      },
      {
        heading: '2. Reporting',
        paragraphs: [
          'Users can report safety concerns through support channels. For immediate danger, contact local emergency services first.',
        ],
      },
      {
        heading: '3. Verification',
        paragraphs: [
          'Driver verification requirements are described in onboarding materials. We do not claim that every screening type is active in every market before operational launch.',
        ],
      },
    ],
  },
  {
    slug: 'payment-policy',
    title: 'Payment Policy',
    description: 'Payments, fares, and payout-related terms.',
    sections: [
      {
        heading: '1. Rider payments',
        paragraphs: [
          'Trips may be paid through approved in-app payment methods. Failed or disputed charges are handled per partner and card network rules.',
        ],
      },
      {
        heading: '2. Driver payouts',
        paragraphs: [
          'Earnings and payout timing depend on verification status, bank connectivity, and third-party payout providers. RIDE does not promise specific income or payout schedules.',
        ],
      },
    ],
  },
  {
    slug: 'background-check-disclosure',
    title: 'Background Check Disclosure',
    description: 'Screening notices for driver applicants where applicable.',
    sections: [
      {
        heading: '1. Screening',
        paragraphs: [
          'Driver applicants may be asked to complete identity and eligibility screening. The scope of screening depends on applicable law, market, and operational readiness — screening may not be active in all regions until launch procedures are complete.',
        ],
      },
      {
        heading: '2. Authorization',
        paragraphs: [
          'Applicants will receive disclosure and authorization steps inside the driver onboarding flow when screening is required. Do not assume background checks are live until you complete in-app steps for your market.',
        ],
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    description: 'How this website may use cookies and similar technologies.',
    sections: [
      {
        heading: '1. Website cookies',
        paragraphs: [
          'This marketing site may use essential cookies for basic functionality and analytics only if enabled in the future. We will update this policy before expanding tracking.',
        ],
      },
      {
        heading: '2. Mobile app',
        paragraphs: ['The RIDE mobile application may use additional technologies described in the Privacy Policy.'],
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    description: 'Our commitment to accessible experiences.',
    sections: [
      {
        heading: '1. Commitment',
        paragraphs: [
          'RIDE aims to improve accessibility across our website and mobile applications as we prepare for launch and gather user feedback.',
        ],
      },
      {
        heading: '2. Feedback',
        paragraphs: [
          'If you encounter accessibility barriers on this site, contact support@ridebylamar.com with a description of the issue and your preferred contact method.',
        ],
      },
    ],
  },
  {
    slug: 'refund-cancellation-policy',
    title: 'Refund & Cancellation Policy',
    description: 'Trip cancellations and payment adjustments.',
    sections: [
      {
        heading: '1. Cancellations',
        paragraphs: [
          'Cancellation rules, fees, and timing are presented in the app when available and may vary by market and trip status.',
        ],
      },
      {
        heading: '2. Refunds',
        paragraphs: [
          'Refund eligibility depends on trip circumstances, payment method, and partner rules. Contact support for assistance with a specific trip.',
        ],
      },
    ],
  },
];

export const legalSlugs = legalDocuments.map((d) => d.slug);

export type LegalSlug = (typeof legalSlugs)[number];

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments.find((d) => d.slug === slug);
}
