'use client';

import { AlertCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { AnimatedGlowBackground } from '@/components/animations/AnimatedGlowBackground';
import { AnimatedButton } from '@/components/animations/AnimatedButton';
import { RideLogo } from '@/components/RideLogo';
import { authVerificationContent } from '@/content/auth-verification';
import { PoweredByLamarTechnology } from '@/components/LamarTechnologyBrand';
import { siteContent } from '@/content/site';
import { animate } from '@/lib/animations/anime';
import { DURATION, EASE_PREMIUM } from '@/lib/animations/config';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

export type EmailVerificationVariant = 'verified' | 'received' | 'error';

type EmailVerificationScreenProps = {
  variant: EmailVerificationVariant;
  errorDescription?: string | null;
};

const copyByVariant = {
  verified: authVerificationContent.verified,
  received: authVerificationContent.callbackReceived,
  error: authVerificationContent.error,
} as const;

export function EmailVerificationScreen({ variant, errorDescription }: EmailVerificationScreenProps) {
  const reduced = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const copy = copyByVariant[variant];
  const isError = variant === 'error';
  const supportEmail = siteContent.contact.supportEmail;
  const primaryHref = '/app';

  useEffect(() => {
    if (reduced) return;
    const panel = panelRef.current;
    const icon = iconRef.current;
    if (panel) {
      animate(panel, {
        opacity: [0, 1],
        scale: [0.96, 1],
        duration: DURATION.normal,
        ease: EASE_PREMIUM,
      });
    }
    if (icon) {
      animate(icon, {
        opacity: [0, 1],
        scale: [0.85, 1],
        duration: DURATION.normal,
        ease: EASE_PREMIUM,
        delay: 120,
      });
    }
  }, [reduced]);

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <AnimatedGlowBackground variant="section" />
      <div className="container-site relative z-10 flex justify-center px-4">
        <div
          ref={panelRef}
          className={cn(
            'w-full max-w-lg rounded-[20px] border border-ride-border bg-ride-card/95 p-8 shadow-card backdrop-blur-md md:p-10',
            !reduced && 'opacity-0',
            reduced && 'opacity-100'
          )}
        >
          <div className="flex flex-col items-center text-center">
            <RideLogo width={200} priority className="mb-8" />

            <div
              ref={iconRef}
              className={cn(
                'mb-6 flex h-16 w-16 items-center justify-center rounded-full',
                isError
                  ? 'bg-red-500/15 text-red-400 ring-1 ring-red-500/30'
                  : 'bg-ride-accent-soft text-ride-accent shadow-glow ring-1 ring-ride-accent/35',
                !reduced && 'opacity-0',
                reduced && 'opacity-100'
              )}
              aria-hidden
            >
              {isError ? (
                <AlertCircle className="h-8 w-8" strokeWidth={1.75} />
              ) : (
                <CheckCircle2 className="h-8 w-8" strokeWidth={1.75} />
              )}
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white md:text-[1.65rem]">{copy.title}</h1>
            <p className="mt-3 max-w-md text-base leading-relaxed text-ride-muted">{copy.subtext}</p>

            {isError && errorDescription ? (
              <p className="mt-4 max-w-md rounded-lg border border-ride-border bg-ride-elevated/80 px-4 py-3 text-sm text-ride-muted">
                {errorDescription}
              </p>
            ) : null}

            <div className="mt-8 flex w-full flex-col items-center gap-3">
              <AnimatedButton variant="primary" href={primaryHref}>
                {copy.primaryCta}
              </AnimatedButton>
              {!isError && copy.primaryHint ? (
                <p className="text-xs text-ride-muted">{copy.primaryHint}</p>
              ) : null}
              <AnimatedButton variant="secondary" href="/">
                {copy.secondaryCta}
              </AnimatedButton>
            </div>

            <p className="mt-8 text-sm text-ride-muted">
              {copy.supportPrefix}{' '}
              <a href={`mailto:${supportEmail}`} className="font-medium text-ride-accent hover:underline">
                {supportEmail}
              </a>
              .
            </p>

            <PoweredByLamarTechnology className="mt-6 text-xs" prefixClassName="text-ride-muted" />
          </div>
        </div>
      </div>
    </section>
  );
}
