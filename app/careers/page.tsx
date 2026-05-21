import { CheckCircle2 } from 'lucide-react';

import { Card3DTilt } from '@/components/Card3DTilt';
import { FloatUp3D } from '@/components/FloatUp3D';
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

      <FloatUp3D index={0}>
        <section className="py-16">
          <div className="container-site max-w-3xl">
            <GlassCard title={driver.title}>
            <p className="mb-2 text-sm font-semibold text-ride-accent">{driver.status}</p>
            <p>{driver.summary}</p>
            <p className="mt-4 text-sm text-ride-muted">{driver.futureApplyNote}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={driver.applyCta.href}>Become a Driver</Button>
              <Button href="/contact" variant="secondary">
                Contact support
              </Button>
            </div>
            </GlassCard>
          </div>
        </section>
      </FloatUp3D>

      <FloatUp3D index={1}>
        <section className="border-y border-ride-border bg-ride-elevated/40 py-16">
          <div className="container-site grid gap-10 lg:grid-cols-2">
            <Card3DTilt intensity={8}>
              <div className="glass-card h-full">
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
                <div className="mt-6">
                  <Button href={driver.applyCta.href} variant="outline" size="sm">
                    Become a Driver
                  </Button>
                </div>
              </div>
            </Card3DTilt>
            <Card3DTilt intensity={12}>
              <div className="glass-card h-full">
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
            </Card3DTilt>
          </div>
        </section>
      </FloatUp3D>

      <FloatUp3D index={2}>
        <section className="py-16">
          <div className="container-site max-w-2xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">{linkedIn.title}</h2>
          <p className="mb-6 text-ride-muted">{linkedIn.description}</p>
          {linkedInUrl ? (
            <Button href={linkedInUrl} external>
              {linkedIn.buttonLabel}
            </Button>
          ) : (
            <Button comingSoon>{linkedIn.comingSoonLabel}</Button>
          )}
          <p className="mt-4 text-xs text-ride-muted">
            Add your URL in <code className="text-ride-accent">content/social-links.ts</code> →{' '}
            <code>links.linkedin</code>
          </p>
          </div>
        </section>
      </FloatUp3D>
    </>
  );
}
