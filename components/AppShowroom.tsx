'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { Card3DTilt } from '@/components/Card3DTilt';
import { FloatUp3D } from '@/components/FloatUp3D';
import { AnimatedGlowBackground } from '@/components/animations/AnimatedGlowBackground';
import { FloatingAppIcon } from '@/components/animations/FloatingAppIcon';
import { StaggerGroup, StaggerItem } from '@/components/animations/StaggerGroup';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { AppStoreBadges } from '@/components/AppStoreBadges';
import { animate } from '@/lib/animations/anime';
import { DURATION, EASE_PREMIUM } from '@/lib/animations/config';
import { appLinksContent } from '@/content/app-links';
import { useLightMotion } from '@/hooks/useLightMotion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

type AppShowroomProps = {
  compact?: boolean;
};

export function AppShowroom({ compact = false }: AppShowroomProps) {
  const { showroom } = appLinksContent;
  const reduced = useReducedMotion();
  const lightMotion = useLightMotion();
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!previewRef.current) return;
    if (reduced || lightMotion) {
      previewRef.current.style.opacity = '1';
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        animate(previewRef.current!, {
          opacity: [0, 1],
          scale: [0.94, 1],
          duration: DURATION.slow,
          ease: EASE_PREMIUM,
        });
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: '-40px' }
    );
    observer.observe(previewRef.current);
    return () => observer.disconnect();
  }, [reduced, lightMotion]);

  return (
    <FloatUp3D index={compact ? 1 : 0}>
      <section
        id="get-the-app"
        className={cn('relative overflow-hidden', compact ? 'section-site-tight' : 'section-site')}
      >
        <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
        <AnimatedGlowBackground variant="section" />
        <div className="container-site relative">
          <RevealOnScroll>
            <Card3DTilt intensity={10} className="glass-card grid gap-8 sm:gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <StaggerGroup className="flex flex-col">
            <StaggerItem>
              <p className="eyebrow">{showroom.eyebrow}</p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{showroom.title}</h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mb-6 max-w-prose text-ride-muted">{showroom.description}</p>
            </StaggerItem>
            <StaggerItem>
              <ul className="mb-8 space-y-2 text-sm text-ride-muted">
                {showroom.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-ride-accent">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem>
              <AppStoreBadges />
            </StaggerItem>
            {!compact ? (
              <StaggerItem>
                <p className="mt-6 text-xs text-ride-muted">
                  Store links activate when URLs are set in{' '}
                  <code className="text-ride-accent/90">content/app-links.ts</code>.
                </p>
              </StaggerItem>
            ) : null}
              </StaggerGroup>

              <Card3DTilt intensity={12} className="mx-auto w-full max-w-sm">
                <div ref={previewRef} className={cn(reduced || lightMotion ? 'opacity-100' : 'opacity-0')}>
                  <Link
                    href="/app"
                    className="group flex flex-col items-center rounded-2xl border border-ride-border bg-ride-elevated/80 p-8 transition-colors hover:border-ride-accent/40"
                    aria-label="View RIDE app download page"
                  >
                    <FloatingAppIcon size={120} orbit className="mb-6" />
                    <PhonePreview reduced={reduced} />
                    <span className="mt-4 text-sm font-medium text-ride-accent group-hover:underline">
                      View app page →
                    </span>
                  </Link>
                </div>
              </Card3DTilt>
            </Card3DTilt>
          </RevealOnScroll>
        </div>
      </section>
    </FloatUp3D>
  );
}

function PhonePreview({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    const enter = () => animate(el, { translateY: -4, duration: DURATION.fast, ease: EASE_PREMIUM });
    const leave = () => animate(el, { translateY: 0, duration: DURATION.fast, ease: EASE_PREMIUM });
    el.parentElement?.addEventListener('mouseenter', enter);
    el.parentElement?.addEventListener('mouseleave', leave);
    return () => {
      el.parentElement?.removeEventListener('mouseenter', enter);
      el.parentElement?.removeEventListener('mouseleave', leave);
    };
  }, [reduced]);

  return (
    <div
      ref={ref}
      className="w-full rounded-[28px] border border-ride-border bg-black/60 p-4 shadow-card"
    >
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
  );
}
