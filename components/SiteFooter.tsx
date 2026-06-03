'use client';

import Link from 'next/link';
import { useRef, type ReactNode } from 'react';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { SocialLinks } from '@/components/SocialLinks';
import { LamarTechnologyName, PoweredByLamarTechnology } from '@/components/LamarTechnologyBrand';
import { siteContent } from '@/content/site';
import { RideLogo } from '@/components/RideLogo';
import { animate } from '@/lib/animations/anime';
import { DURATION, EASE_PREMIUM } from '@/lib/animations/config';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function SiteFooter() {
  const { brand, contact, footerLinks } = siteContent;
  return (
    <RevealOnScroll as="footer" className="mt-16 border-t border-ride-border bg-ride-elevated py-12 sm:mt-20 sm:py-14">
      <div className="container-site">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <RideLogo width={150} />
            <PoweredByLamarTechnology className="mt-4 text-sm" prefixClassName="text-ride-muted" />
            <SocialLinks className="mt-6" />
          </div>
          <div>
            <p className="mb-3 font-semibold text-white">Contact</p>
            <p className="text-sm text-ride-muted">
              <FooterLink href={`mailto:${contact.supportEmail}`}>{contact.supportEmail}</FooterLink>
            </p>
            <p className="text-sm text-ride-muted">
              <FooterLink href={contact.siteUrl}>{contact.domain}</FooterLink>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm sm:gap-8">
            <div>
              <p className="mb-3 font-semibold text-white">Explore</p>
              <ul className="space-y-2 text-ride-muted">
                {footerLinks.primary.map((l) => (
                  <li key={l.href}>
                    <FooterNavLink href={l.href}>{l.label}</FooterNavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold text-white">Legal</p>
              <ul className="space-y-2 text-ride-muted">
                {footerLinks.legal.map((l) => (
                  <li key={l.href}>
                    <FooterNavLink href={l.href}>{l.label}</FooterNavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-ride-border pt-6 text-xs text-ride-muted">
          © {new Date().getFullYear()} {brand.appName} · Powered by <LamarTechnologyName />
        </p>
      </div>
    </RevealOnScroll>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      href={href}
      className="link-premium"
      onMouseEnter={() => {
        if (reduced || !ref.current) return;
        animate(ref.current, { opacity: 0.85, duration: DURATION.fast, ease: EASE_PREMIUM });
      }}
      onMouseLeave={() => {
        if (reduced || !ref.current) return;
        animate(ref.current, { opacity: 1, duration: DURATION.fast, ease: EASE_PREMIUM });
      }}
    >
      {children}
    </a>
  );
}

function FooterNavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-sm transition-colors hover:text-ride-accent hover:underline decoration-ride-accent/50 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ride-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ride-elevated"
    >
      {children}
    </Link>
  );
}
