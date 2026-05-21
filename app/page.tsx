import Link from 'next/link';

import { AppShowroom } from '@/components/AppShowroom';
import { MotionSection } from '@/components/MotionSection';
import { RideLogo } from '@/components/RideLogo';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { legalDocuments } from '@/content/legal';
import { siteContent } from '@/content/site';
import { homeMetadata } from '@/lib/metadata';

export const metadata = homeMetadata;

export default function HomePage() {
  const { home, brand } = siteContent;

  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient py-16 md:py-24">
        <div className="container-site flex flex-col items-center text-center">
          <span className="mb-6 inline-block rounded-full border border-ride-accent/35 bg-ride-accent-soft px-4 py-1.5 text-sm font-semibold text-ride-accent">
            {home.launchBadge}
          </span>
          <RideLogo width={300} priority />
          <h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">{home.heroTitle}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">{home.heroLead}</p>
          <p className="mt-3 max-w-xl text-sm text-ride-muted">{home.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {home.heroCtas.map((cta) => (
              <Button key={cta.href} href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <AppShowroom />

      <MotionSection className="py-20">
        <div className="container-site">
          <p className="eyebrow">Why {brand.appName}</p>
          <h2 className="mb-4 text-3xl font-bold text-white">{home.whyTitle}</h2>
          <p className="mb-10 max-w-2xl text-ride-muted">{home.whyLead}</p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <GlassCard title="Riders">
              <p>Request rides, driver visibility, secure payments, and trip support.</p>
              <Link href="/riders" className="mt-3 inline-block font-semibold">
                Explore riders →
              </Link>
            </GlassCard>
            <GlassCard title="Drivers">
              <p>Onboarding, Flex Mode, Pro Mode, and earnings tools — no income guarantees.</p>
              <Link href="/drivers" className="mt-3 inline-block font-semibold">
                Explore drivers →
              </Link>
            </GlassCard>
            <GlassCard title="Careers">
              <p>Driver opportunity is open for interest as we prepare market launch.</p>
              <Link href="/careers" className="mt-3 inline-block font-semibold">
                View careers →
              </Link>
            </GlassCard>
            <GlassCard title="Safety">
              <p>Safety-first design, reporting paths, and realistic verification language.</p>
              <Link href="/safety" className="mt-3 inline-block font-semibold">
                Safety principles →
              </Link>
            </GlassCard>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-y border-ride-border bg-ride-elevated/50 py-16" delay={0.05}>
        <div className="container-site grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-4">
            <div>
              <p className="eyebrow">Shop</p>
              <h2 className="text-2xl font-bold text-white">Official driver gear</h2>
              <p className="mt-2 text-ride-muted">T-shirts, badges, and accessories — Amazon storefront coming soon.</p>
            </div>
            <Button href="/shop" variant="secondary" className="w-fit">
              View shop
            </Button>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div>
              <p className="eyebrow">Legal</p>
              <h2 className="text-2xl font-bold text-white">Policies & agreements</h2>
              <p className="mt-2 text-ride-muted">
                {legalDocuments.length} public documents for riders, drivers, and partners. Draft pages marked pending
                legal review.
              </p>
            </div>
            <Button href="/legal" variant="secondary" className="w-fit">
              View legal
            </Button>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-20" delay={0.08}>
        <div className="container-site text-center md:text-left">
          <p className="eyebrow">Support</p>
          <h2 className="mb-4 text-2xl font-bold text-white">Reach our team</h2>
          <p className="mb-6 text-ride-muted">
            Business partners, riders, and drivers can contact {siteContent.contact.supportEmail} while we prepare for
            launch.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Button href="/support">Support center</Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
