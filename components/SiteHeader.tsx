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
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const navEl = mobileNavRef.current;
    const items = mobileItemsRef.current;
    if (!navEl) return;

    const links = items?.querySelectorAll('[data-mobile-nav-item]');

    const resetLinkStyles = () => {
      links?.forEach((link) => {
        const el = link as HTMLElement;
        el.style.opacity = '';
        el.style.transform = '';
      });
    };

    if (!open) {
      navEl.style.display = 'none';
      navEl.style.opacity = '0';
      resetLinkStyles();
      return;
    }

    navEl.style.display = 'block';
    navEl.style.opacity = '1';

    if (!links?.length) return;

    if (reduced) {
      links.forEach((link) => {
        const el = link as HTMLElement;
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    animate(navEl, {
      opacity: [0, 1],
      duration: DURATION.fast,
      ease: EASE_PREMIUM,
    });
    animate(links, {
      opacity: [0, 1],
      translateX: [-8, 0],
      delay: stagger(40, { start: 30 }),
      duration: DURATION.fast,
      ease: EASE_PREMIUM,
    });
  }, [open, reduced]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'sticky top-0 z-[100] w-full border-b transition-[border-color,background-color,box-shadow,backdrop-filter] duration-300',
        scrolled
          ? 'border-[rgba(255,149,0,0.15)] bg-[rgba(0,0,0,0.88)] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-[12px]'
          : 'border-transparent bg-transparent backdrop-blur-none'
      )}
    >
      <div className="container-site flex min-h-[68px] items-center justify-between gap-3 sm:min-h-[72px]">
        <AnimatedLogo width={128} href="/" />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {nav.map(({ href, label }) => (
            <AnimatedNavLink
              key={href}
              href={href}
              label={label}
              active={isActive(href)}
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-ride-elevated/70 text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-[border-color,box-shadow,background-color] hover:border-ride-accent/45 hover:bg-ride-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ride-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ride-bg xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-main-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-main-nav"
        ref={mobileNavRef}
        className="overflow-hidden border-t border-ride-border bg-ride-bg/98 backdrop-blur-xl xl:hidden"
        aria-label="Mobile"
        style={{ display: open ? 'block' : 'none', opacity: open ? 1 : 0 }}
      >
        <div ref={mobileItemsRef} className="container-site flex flex-col gap-0.5 py-4 pb-5">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              data-mobile-nav-item
              onClick={() => setOpen(false)}
              className={cn(
                'block min-h-[44px] rounded-lg px-3 py-3 text-sm font-semibold opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ride-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ride-bg',
                isActive(href)
                  ? 'bg-ride-accent/10 text-ride-accent'
                  : 'text-ride-muted hover:bg-ride-card hover:text-white'
              )}
            >
              {label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2.5 border-t border-ride-border pt-4">
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
