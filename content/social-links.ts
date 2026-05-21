/**
 * SOCIAL MEDIA — paste official profile URLs when accounts are live.
 *
 * Leave a value as '' (empty string) to hide or disable that network
 * (controlled by `emptyBehavior` below).
 *
 * Do NOT invent usernames or placeholder URLs.
 */

export const socialLinksContent = {
  /**
   * 'hide' — empty URLs are not shown in the footer.
   * 'disabled' — icon appears grayed with Coming Soon tooltip (partner-visible placeholders).
   */
  emptyBehavior: 'disabled' as 'hide' | 'disabled',

  comingSoonLabel: 'Coming Soon',

  links: {
    /** X (Twitter) profile URL */
    x: '',
    /** Instagram profile URL */
    instagram: '',
    /** Facebook page URL */
    facebook: '',
    /** YouTube channel URL */
    youtube: '',
    /** TikTok profile URL */
    tiktok: '',
    /** LinkedIn company or jobs URL */
    linkedin: '',
  },
} as const;
