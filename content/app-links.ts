/**
 * APP STORE LINKS — paste real URLs here when listings are live.
 *
 * - appStoreUrl: iOS App Store product page
 * - googlePlayUrl: Google Play listing
 *
 * Leave a string empty ('') to show "Coming Soon" on the website.
 * Do NOT use placeholder or fake App Store / Google Play URLs.
 */

export const appLinksContent = {
  showroom: {
    eyebrow: 'RIDE App',
    title: 'Get the RIDE App',
    description:
      'The RIDE mobile app brings together ride requests, driver tools, payments, safety features, and support — designed for a premium experience on iOS and Android.',
    features: [
      'Request and manage rides with clear trip status',
      'Driver onboarding, verification, and earnings tools',
      'Safety resources and support access in one place',
    ],
  },
  /**
   * iOS App Store product page URL.
   * Example shape: https://apps.apple.com/app/idXXXXXXXXX
   */
  appStoreUrl: '',

  /**
   * Google Play Store listing URL.
   * Example shape: https://play.google.com/store/apps/details?id=com.example.app
   */
  googlePlayUrl: '',

  labels: {
    appStore: 'Download on the App Store',
    googlePlay: 'Get it on Google Play',
    comingSoon: 'Coming Soon',
  },
} as const;
