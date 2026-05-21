'use client';

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

import { socialLinksContent } from '@/content/social-links';
import { cn } from '@/lib/cn';

/** Simple TikTok-style mark (Lucide has no brand icon) */
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

const NETWORKS = [
  { key: 'x' as const, label: 'X (Twitter)', Icon: Twitter },
  { key: 'instagram' as const, label: 'Instagram', Icon: Instagram },
  { key: 'facebook' as const, label: 'Facebook', Icon: Facebook },
  { key: 'youtube' as const, label: 'YouTube', Icon: Youtube },
  { key: 'tiktok' as const, label: 'TikTok', Icon: TikTokIcon },
  { key: 'linkedin' as const, label: 'LinkedIn', Icon: Linkedin },
];

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({ className, iconClassName = 'h-5 w-5' }: SocialLinksProps) {
  const { links, emptyBehavior, comingSoonLabel } = socialLinksContent;

  const items = NETWORKS.map(({ key, label, Icon }) => {
    const url = links[key].trim();
    const active = Boolean(url);

    if (!active && emptyBehavior === 'hide') return null;

    const baseClass = cn(
      'inline-flex h-10 w-10 items-center justify-center rounded-full border transition',
      active
        ? 'border-ride-border text-white hover:border-ride-accent hover:bg-ride-accent/10 hover:text-ride-accent'
        : 'cursor-not-allowed border-ride-border/60 text-ride-muted/50 opacity-60'
    );

    if (active) {
      return (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={baseClass}
        >
          <Icon className={iconClassName} />
        </a>
      );
    }

    return (
      <span
        key={key}
        role="img"
        aria-label={`${label} — ${comingSoonLabel}`}
        title={`${label} — ${comingSoonLabel}`}
        className={baseClass}
      >
        <Icon className={iconClassName} />
      </span>
    );
  }).filter(Boolean);

  if (items.length === 0) return null;

  return (
    <div className={cn('flex flex-wrap gap-2', className)} aria-label="Social media">
      {items}
    </div>
  );
}
