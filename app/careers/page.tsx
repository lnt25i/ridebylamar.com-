import { CheckCircle2 } from 'lucide-react';

import { PageHero } from '@/components/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { careersContent } from '@/content/careers';
import { socialLinksContent } from '@/content/social-links';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: `Careers | ${siteContent.brand.appName}`,
  description: `Become a RIDE driver — requirements, experience, and LinkedIn updates from ${siteContent.brand.appName}.`,
  path: '/careers',
});

export default function CareersPage() {
  const { page, roles, requirements, benefits, linkedIn } = careersContent;
  const driver = roles[0];
  const linkedInUrl = socialLinksContent.links.linkedin.trim();

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.lead} />

      <section className="py-16">
        <div className="container-site max-w-3xl">
          <GlassCard title={driver.title}>
            <p className="mb-2 text-sm font-semibold text-ride-accent">{driver.status}</p>
            <p>{driver.summary}</p>
            <p className="mt-4 text-sm text-ride-muted">{driver.futureApplyNote}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={driver.applyCta.href}>{driver.applyCta.label}</Button>
              <Button href="/contact" variant="secondary">
                Contact support
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="border-y border-ride-border bg-ride-elevated/40 py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">{requirements.title}</h2>
            <p className="mb-6 text-ride-muted">{requirements.intro}</p>
            <ul className="space-y-3">
              {requirements.items.map((item) => (
                <li key={item} className="flex gap-3 text-ride-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ride-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ride-muted">{requirements.disclaimer}</p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">{benefits.title}</h2>
            <ul className="space-y-3">
              {benefits.items.map((item) => (
                <li key={item} className="flex gap-3 text-ride-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ride-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site max-w-2xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">{linkedIn.title}</h2>
          <p className="mb-6 text-ride-muted">{linkedIn.description}</p>
          {linkedInUrl ? (
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-ride-accent px-6 py-3 font-semibold text-black hover:bg-[#ff8f26]"
            >
              {linkedIn.buttonLabel}
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed rounded-full border border-ride-border px-6 py-3 font-semibold text-ride-muted">
              {linkedIn.comingSoonLabel}
            </span>
          )}
          <p className="mt-4 text-xs text-ride-muted">
            Add your URL in <code className="text-ride-accent">content/social-links.ts</code> →{' '}
            <code>links.linkedin</code>
          </p>
        </div>
      </section>
    </>
  );
}
