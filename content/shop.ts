/**
 * SHOP / AMAZON — update when your Amazon Seller storefront is live.
 *
 * amazonStorefrontUrl: paste your real Amazon Store or brand page URL.
 * Leave empty ('') to show "Amazon Store Coming Soon" buttons.
 * Do NOT invent product URLs.
 */

export const shopContent = {
  title: 'Official driver gear — coming soon',
  lead: 'RIDE apparel and driver items will be available through our Amazon storefront when launch is ready.',
  /**
   * Amazon Seller / Storefront URL (brand page or store hub).
   */
  amazonStorefrontUrl: '',
  amazonButtonLabel: 'Visit Amazon Store',
  amazonComingSoonLabel: 'Amazon Store Coming Soon',
  categories: [
    {
      title: 'RIDE T-Shirts',
      description: 'Premium branded apparel for drivers and fans.',
    },
    {
      title: 'Driver Badges',
      description: 'Identification and brand badges for verified drivers.',
    },
    {
      title: 'Driver Accessories',
      description: 'Practical accessories for a professional vehicle setup.',
    },
    {
      title: 'Official Driver Gear',
      description: 'Curated gear aligned with RIDE brand standards.',
    },
  ],
  footnote:
    'We are not linking to placeholder Amazon products. When the storefront is live, this page will connect to verified RIDE listings only.',
} as const;
