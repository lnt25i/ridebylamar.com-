'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { AnimatedNavLink } from '@/components/animations/AnimatedNavLink';
import { AnimatedLogo } from '@/components/animations/AnimatedLogo';
import { AnimatedButton } from '@/components/animations/AnimatedButton';
import { animate, stagger } from '@/lib/animations/anime';
import { DURATION, EASE_PREMIUM } from '@/lib/animations/config';
import { siteContent } from '@/content/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef<HTMLElement>(null);
  const mobileItemsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { nav, headerCtas } = siteContent;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const navEl = mobileNavRef.current;
    const items = mobileItemsRef.current;
    if (!navEl) return;

    if (open && !reduced) {
      navEl.style.display = 'block';
      animate(navEl, {
        opacity: [0, 1],
        duration: DURATION.fast,
        ease: EASE_PREMIUM,
      });
      if (items) {
        const links = items.querySelectorAll('[data-mobile-nav-item]');
        animate(links, {
          opacity: [0, 1],
          translateX: [-12, 0],
          delay: stagger(50, { start: 40 }),
          duration: DURATION.fast,
          ease: EASE_PREMIUM,
        });
      }
    } else if (!open) {
      navEl.style.display = 'none';
      navEl.style.opacity = '0';
    }
  }, [open, reduced]);

  return (
    <header
      className={cn(
        'sticky top-0 z-[100] w-full border-b transition-all duration-300 ease-[ease]',
        scrolled
          ? 'border-[rgba(255,149,0,0.15)] bg-[rgba(0,0,0,0.85)] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-[12px]'
          : 'border-transparent bg-transparent backdrop-blur-none'
      )}
      style={{ transition: 'all 0.3s ease' }}
    >
      <div className="container-site flex min-h-[72px] items-center justify-between gap-3">
        <AnimatedLogo width={128} href="/" />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {nav.map(({ href, label }) => (
            <AnimatedNavLink
              key={href}
              href={href}
              label={label}
              active={href === '/' ? pathname === '/' : pathname.startsWith(href)}
            />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <AnimatedButton
            href={headerCtas.secondary.href}
            variant="outline"
            size="header"
            className="hidden md:inline-flex"
          >
            {headerCtas.secondary.label}
          </AnimatedButton>
          <AnimatedButton href={headerCtas.primary.href} size="header" className="hidden sm:inline-flex">
            {headerCtas.primary.label}
          </AnimatedButton>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-ride-elevated/70 text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-[border-color,box-shadow,background-color] hover:border-ride-accent/45 hover:bg-ride-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ride-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ride-bg xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      <nav
        ref={mobileNavRef}
        className="overflow-hidden border-t border-ride-border bg-ride-bg/95 backdrop-blur-xl xl:hidden"
        aria-label="Mobile"
        style={{ display: open ? 'block' : 'none', opacity: open ? 1 : 0 }}
      >
        <div ref={mobileItemsRef} className="container-site flex flex-col gap-1 py-4">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              data-mobile-nav-item
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-semibold text-ride-muted hover:bg-ride-card hover:text-white opacity-0"
            >
              {label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <AnimatedButton href={headerCtas.primary.href} size="full" className="w-full">
              {headerCtas.primary.label}
            </AnimatedButton>
            <AnimatedButton href={headerCtas.secondary.href} variant="outline" size="full" className="w-full">
              {headerCtas.secondary.label}
            </AnimatedButton>
            <AnimatedButton href={headerCtas.support.href} variant="secondary" size="full" className="w-full">
              {headerCtas.support.label}
            </AnimatedButton>
          </div>
        </div>
      </nav>
    </header>
  );
}
