'use client';

import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import Link from 'next/link';

import { appLinksContent } from '@/content/app-links';
import { RideAppIcon } from '@/components/RideAppIcon';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

type AppShowroomProps = {
  compact?: boolean;
};

export function AppShowroom({ compact = false }: AppShowroomProps) {
  const { showroom, appStoreUrl, googlePlayUrl, labels } = appLinksContent;
  const hasAppStore = Boolean(appStoreUrl.trim());
  const hasGooglePlay = Boolean(googlePlayUrl.trim());

  return (
    <section
      id="get-the-app"
      className={cn('relative overflow-hidden', compact ? 'py-12' : 'py-20')}
    >
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <div className="container-site relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center"
        >
          <div>
            <p className="eyebrow">{showroom.eyebrow}</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{showroom.title}</h2>
            <p className="mb-6 max-w-prose text-ride-muted">{showroom.description}</p>
            <ul className="mb-8 space-y-2 text-sm text-ride-muted">
              {showroom.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-ride-accent">•</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <StoreButton
                icon={<Apple className="h-6 w-6" aria-hidden />}
                label={labels.appStore}
                href={hasAppStore ? appStoreUrl : undefined}
                comingSoonLabel={labels.comingSoon}
              />
              <StoreButton
                icon={<Play className="h-6 w-6 fill-current" aria-hidden />}
                label={labels.googlePlay}
                href={hasGooglePlay ? googlePlayUrl : undefined}
                comingSoonLabel={labels.comingSoon}
              />
            </div>
            {!compact ? (
              <p className="mt-6 text-xs text-ride-muted">
                Store links activate when URLs are set in <code className="text-ride-accent/90">content/app-links.ts</code>.
              </p>
            ) : null}
          </div>

          <Link
            href="/app"
            className="group mx-auto flex max-w-sm flex-col items-center rounded-2xl border border-ride-border bg-ride-elevated/80 p-8 transition hover:border-ride-accent/40"
            aria-label="View RIDE app download page"
          >
            <div className="relative mb-6">
              <div className="absolute -inset-4 rounded-full bg-ride-accent/20 blur-2xl transition group-hover:bg-ride-accent/30" />
              <RideAppIcon size={120} className="relative" />
            </div>
            <div className="w-full rounded-[28px] border border-ride-border bg-black/60 p-4 shadow-card">
              <div className="mb-3 flex items-center justify-between text-xs text-ride-muted">
                <span>RIDE</span>
                <span>Preview</span>
              </div>
              <div className="space-y-2">
                <div className="h-10 rounded-lg bg-ride-card" />
                <div className="h-24 rounded-lg bg-gradient-to-br from-ride-accent/20 to-transparent" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-8 rounded-lg bg-ride-card" />
                  <div className="h-8 rounded-lg bg-ride-card" />
                </div>
              </div>
            </div>
            <span className="mt-4 text-sm font-medium text-ride-accent group-hover:underline">
              View app page →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function StoreButton({
  icon,
  label,
  href,
  comingSoonLabel,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
  comingSoonLabel: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-w-[200px] items-center gap-3 rounded-xl border border-ride-border bg-black/40 px-4 py-3 transition hover:border-ride-accent/50 hover:bg-ride-accent/10"
      >
        {icon}
        <span className="text-left text-sm leading-tight">
          <span className="block text-[10px] uppercase tracking-wide text-ride-muted">Download</span>
          <span className="font-semibold text-white">{label}</span>
        </span>
      </a>
    );
  }

  return (
    <div
      className="inline-flex min-w-[200px] cursor-not-allowed items-center gap-3 rounded-xl border border-ride-border bg-ride-elevated/60 px-4 py-3 opacity-75"
      aria-disabled
    >
      {icon}
      <span className="text-left text-sm leading-tight">
        <span className="block text-[10px] uppercase tracking-wide text-ride-muted">{comingSoonLabel}</span>
        <span className="font-semibold text-white">{label}</span>
      </span>
    </div>
  );
}
