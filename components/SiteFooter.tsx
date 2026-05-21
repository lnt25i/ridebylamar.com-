import Link from 'next/link';

import { SocialLinks } from '@/components/SocialLinks';
import { siteContent } from '@/content/site';
import { RideLogo } from '@/components/RideLogo';

export function SiteFooter() {
  const { brand, contact, footerLinks } = siteContent;

  return (
    <footer className="mt-20 border-t border-ride-border bg-ride-elevated py-14">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <RideLogo width={150} />
            <p className="mt-4 text-sm text-ride-muted">{brand.poweredByLine}</p>
            <SocialLinks className="mt-6" />
          </div>
          <div>
            <p className="mb-3 font-semibold text-white">Contact</p>
            <p className="text-sm text-ride-muted">
              <a href={`mailto:${contact.supportEmail}`} className="text-ride-accent hover:underline">
                {contact.supportEmail}
              </a>
            </p>
            <p className="text-sm text-ride-muted">
              <a href={contact.siteUrl} className="text-ride-accent hover:underline">
                {contact.domain}
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-3 font-semibold text-white">Explore</p>
              <ul className="space-y-2 text-ride-muted">
                {footerLinks.primary.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-ride-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold text-white">Legal</p>
              <ul className="space-y-2 text-ride-muted">
                {footerLinks.legal.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-ride-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-ride-border pt-6 text-xs text-ride-muted">
          © {new Date().getFullYear()} {brand.appName} · {brand.poweredByLine}
        </p>
      </div>
    </footer>
  );
}
