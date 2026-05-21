/**
 * CAREERS — edit driver opportunity copy and requirements here.
 *
 * LinkedIn URL: also set in content/social-links.ts → links.linkedin
 * Driver application: link to /drivers until a dedicated apply URL exists.
 */

export const careersContent = {
  page: {
    eyebrow: 'Careers',
    title: 'Join RIDE as a driver',
    lead: 'We are preparing for launch with a focus on professional drivers who value safety, reliability, and a premium platform experience.',
  },
  roles: [
    {
      id: 'driver',
      title: 'Become a RIDE Driver',
      status: 'Open for interest — onboarding launches by market',
      summary:
        'Drive with RIDE when your market opens. Complete verification, maintain platform standards, and use in-app tools for scheduling and earnings visibility.',
      applyCta: { href: '/drivers', label: 'Learn about driving with RIDE' },
      /** TODO: Replace with driver application URL or deep link when ready */
      futureApplyNote: 'A dedicated driver application flow will be available in the RIDE mobile app.',
    },
  ],
  requirements: {
    title: 'Driver requirements',
    intro: 'Requirements may vary by market and applicable law. The following are general expectations while onboarding is being prepared:',
    items: [
      'Must meet local legal driving requirements',
      "Must have a valid driver's license",
      'Must have access to an eligible vehicle',
      'Must be able to pass required verification and background screening when onboarding opens',
      'Must provide required documents such as license, insurance, and registration when requested',
      'Must follow RIDE safety and community standards',
    ],
    disclaimer:
      'Meeting these expectations does not guarantee acceptance. Final eligibility is determined during onboarding and verification.',
  },
  benefits: {
    title: 'Driver experience',
    items: [
      'Professional driver profile and in-app tools',
      'Flex Mode and Pro Mode where offered in your market',
      'Earnings visibility in the app — no guaranteed income promises',
      'Safety resources and driver support channels',
      'Platform focused on a premium rider and driver experience',
    ],
  },
  linkedIn: {
    title: 'Jobs on LinkedIn',
    description:
      'Official job postings may also be shared on LinkedIn as we grow. Follow our LinkedIn presence for updates when listings are published.',
    buttonLabel: 'View on LinkedIn',
    comingSoonLabel: 'LinkedIn Coming Soon',
  },
} as const;
