'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { siteContent } from '@/content/site';
import { RideLogo } from '@/components/RideLogo';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { nav, headerCtas } = siteContent;

  return (
    <header className="sticky top-0 z-50 border-b border-ride-border bg-ride-bg/90 backdrop-blur-xl">
      <div className="container-site flex min-h-[72px] items-center justify-between gap-3">
        <Link href="/" aria-label="RIDE home" className="shrink-0">
          <RideLogo width={128} />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {nav.map(({ href, label }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'rounded-lg px-2.5 py-2 text-sm font-semibold transition',
                  active ? 'text-ride-accent' : 'text-ride-muted hover:text-white'
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={headerCtas.secondary.href} variant="secondary" className="hidden md:inline-flex px-4 py-2.5 text-xs">
            {headerCtas.secondary.label}
          </Button>
          <Button href={headerCtas.primary.href} className="hidden sm:inline-flex px-4 py-2.5 text-xs">
            {headerCtas.primary.label}
          </Button>
          <button
            type="button"
            className="inline-flex rounded-lg border border-ride-border p-2 text-white xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-ride-border xl:hidden"
            aria-label="Mobile"
          >
            <div className="container-site flex flex-col gap-1 py-4">
              {nav.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-ride-muted hover:bg-ride-card hover:text-white"
                >
                  {label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button href={headerCtas.primary.href} className="w-full justify-center">
                  {headerCtas.primary.label}
                </Button>
                <Button href={headerCtas.secondary.href} variant="secondary" className="w-full justify-center">
                  {headerCtas.secondary.label}
                </Button>
                <Button href={headerCtas.support.href} variant="secondary" className="w-full justify-center">
                  {headerCtas.support.label}
                </Button>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
