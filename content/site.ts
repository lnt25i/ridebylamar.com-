/**
 * SITE CONTENT — edit this file for brand, nav, homepage, about, and footer structure.
 *
 * Also update:
 * - content/app-links.ts     → App Store & Google Play URLs
 * - content/social-links.ts  → Instagram, Facebook, X, TikTok, YouTube, LinkedIn
 * - content/shop.ts          → Amazon Storefront URL
 * - content/legal.ts         → Legal document text
 * - content/faqs.ts          → FAQ items
 * - content/careers.ts       → Driver careers copy
 * - content/contact.ts       → Contact form labels
 * - public/ride-logo.png     → Official RIDE wordmark
 * - public/app-icon.png      → Phone home-screen app icon
 */

export const siteContent = {
  brand: {
    appName: 'RIDE',
    techBrand: 'Lamar Technology',
    /** Footer must display exactly this line */
    poweredByLine: 'Powered by Lamar Technology',
    legalEntity: 'Lamar Technology LLC',
  },
  contact: {
    /** Support inbox — also used in mailto links */
    supportEmail: 'support@ridebylamar.com',
    domain: 'ridebylamar.com',
    siteUrl: 'https://ridebylamar.com',
  },
  assets: {
    logoPath: '/ride-logo.png',
    appIconPath: '/app-icon.png',
    ogImagePath: '/og-image.png',
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: '/app', label: 'App' },
    { href: '/riders', label: 'Riders' },
    { href: '/drivers', label: 'Drivers' },
    { href: '/careers', label: 'Careers' },
    { href: '/safety', label: 'Safety' },
    { href: '/shop', label: 'Shop' },
    { href: '/support', label: 'Support' },
    { href: '/legal', label: 'Legal' },
  ] as const,
  headerCtas: {
    primary: { href: '/app', label: 'Get the App' },
    secondary: { href: '/careers', label: 'Become a Driver' },
    /** Shown on smaller header layouts */
    support: { href: '/contact', label: 'Contact Support' },
  },
  seo: {
    homeTitle: 'RIDE | Premium Rideshare Powered by Lamar Technology',
    homeDescription:
      'RIDE is a modern rideshare platform focused on safety, reliability, and a premium rider and driver experience.',
  },
  home: {
    launchBadge: 'Preparing for launch',
    heroTitle: 'A premium rideshare experience',
    heroLead:
      'RIDE is a modern rideshare platform focused on safety, reliability, and a premium rider and driver experience — powered by Lamar Technology.',
    tagline:
      'We are building for riders and drivers who expect clarity, professional support, and a polished trip from request to drop-off.',
    whyTitle: 'Built for trust before the first mile',
    whyLead:
      'We are preparing RIDE for launch with verification, transparent trip flows, and support you can reach by email — not empty promises about scale we have not published yet.',
    heroCtas: [
      { href: '/app', label: 'Get the App', variant: 'primary' as const },
      { href: '/careers', label: 'Become a Driver', variant: 'secondary' as const },
      { href: '/contact', label: 'Contact Support', variant: 'secondary' as const },
      { href: '/legal', label: 'View Legal', variant: 'secondary' as const },
    ],
  },
  about: {
    title: 'RIDE is powered by Lamar Technology',
    lead: 'We are building a safer, cleaner, more premium rideshare experience for riders and drivers.',
    mission:
      'Our mission is to connect riders and independent drivers through technology that prioritizes safety, transparency, and professional support.',
    paragraphs: [
      'RIDE is developed by Lamar Technology LLC. Our team is preparing the platform for launch with careful attention to verification, trip transparency, and responsive support.',
      'We focus on riders, drivers, safety, and trust — without publishing inflated metrics about drivers, cities, rides, revenue, or partnerships we have not announced.',
      'As we open markets, we will share accurate information through official channels.',
    ],
    pillars: [
      { title: 'Riders', description: 'Clear trip flows, secure payments, and safety resources.' },
      { title: 'Drivers', description: 'Onboarding, verification, and professional in-app tools.' },
      { title: 'Safety', description: 'Safety-first design and realistic verification language.' },
      { title: 'Support', description: 'Reachable support for riders, drivers, and business partners.' },
    ],
  },
  footerLinks: {
    primary: [
      { href: '/app', label: 'App' },
      { href: '/riders', label: 'Riders' },
      { href: '/drivers', label: 'Drivers' },
      { href: '/careers', label: 'Careers' },
      { href: '/safety', label: 'Safety' },
      { href: '/shop', label: 'Shop' },
      { href: '/support', label: 'Support' },
      { href: '/contact', label: 'Contact' },
      { href: '/legal', label: 'Legal' },
    ],
    legal: [
      { href: '/legal/privacy-policy', label: 'Privacy Policy' },
      { href: '/legal/terms-of-service', label: 'Terms of Service' },
      { href: '/legal/community-guidelines', label: 'Community Guidelines' },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
