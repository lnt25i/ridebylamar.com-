'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import type { ComponentType } from 'react';

import { socialLinksContent } from '@/content/social-links';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

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
  const reduced = useReducedMotion();

  const items = NETWORKS.map(({ key, label, Icon }) => {
    const url = links[key].trim();
    const active = Boolean(url);

    if (!active && emptyBehavior === 'hide') return null;

    const baseClass = cn(
      'inline-flex h-10 w-10 items-center justify-center rounded-full border',
      active
        ? 'border-ride-border text-[#FF9500]'
        : 'cursor-not-allowed border-ride-border/60 text-ride-muted/50'
    );

    if (active) {
      return (
        <SocialIconLink
          key={key}
          url={url}
          label={label}
          Icon={Icon}
          baseClass={baseClass}
          iconClassName={iconClassName}
          reduced={reduced}
        />
      );
    }

    return (
      <SocialIconDisabled
        key={key}
        label={label}
        comingSoonLabel={comingSoonLabel}
        Icon={Icon}
        baseClass={baseClass}
        iconClassName={iconClassName}
      />
    );
  }).filter(Boolean);

  if (items.length === 0) return null;

  return (
    <div className={cn('flex flex-wrap gap-2', className)} aria-label="Social media">
      {items}
    </div>
  );
}

function SocialIconLink({
  url,
  label,
  Icon,
  baseClass,
  iconClassName,
  reduced,
}: {
  url: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  baseClass: string;
  iconClassName: string;
  reduced: boolean;
}) {
  if (reduced) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(baseClass, 'hover:brightness-[1.2]')}
      >
        <Icon className={iconClassName} />
      </a>
    );
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(baseClass, 'hover:brightness-[1.2]')}
      whileHover={{ scale: 1.18 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      style={{ position: 'relative', display: 'inline-flex' }}
    >
      <motion.span
        style={{
          position: 'absolute',
          inset: -4,
          borderRadius: '50%',
          border: '1.5px solid #FF9500',
          opacity: 0,
          scale: 0.7,
        }}
        whileHover={{ opacity: 0.6, scale: 1.2 }}
        transition={{ duration: 0.25 }}
        aria-hidden
      />
      <Icon className={cn(iconClassName, 'relative z-[1]')} />
    </motion.a>
  );
}

function SocialIconDisabled({
  label,
  comingSoonLabel,
  Icon,
  baseClass,
  iconClassName,
}: {
  label: string;
  comingSoonLabel: string;
  Icon: ComponentType<{ className?: string }>;
  baseClass: string;
  iconClassName: string;
}) {
  return (
    <span
      role="img"
      aria-label={`${label} — ${comingSoonLabel}`}
      title={`${label} — ${comingSoonLabel}`}
      className={cn(baseClass, 'opacity-60')}
    >
      <Icon className={iconClassName} />
    </span>
  );
}
