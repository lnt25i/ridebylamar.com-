import Link from 'next/link';

import { PageHero } from '@/components/PageHero';
import { MotionSection } from '@/components/MotionSection';
import { Reveal } from '@/components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  LamarTechnologyName,
  PoweredByLamarTechnology,
} from '@/components/LamarTechnologyBrand';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: `Ownership | ${siteContent.brand.appName}`,
  description:
    'Learn how riders, drivers, and supporters can register interest in the future of RIDE, built by Lamar Technology LLC.',
  path: '/investors',
});

const pillars = [
  {
    title: 'Aligned with riders and drivers',
    description:
      'RIDE is built to put riders and drivers first. Our long-term goal is a platform whose growth is shared with the people who use it every day.',
  },
  {
    title: 'Transparent by design',
    description:
      'We publish real policies, clear trip flows, and support you can reach by email — not inflated metrics about scale we have not announced.',
  },
  {
    title: 'Built by Lamar Technology LLC',
    description:
      'RIDE is developed and operated by Lamar Technology LLC, doing business as RIDE. Ownership and company information is kept accurate and up to date.',
  },
  {
    title: 'Register your interest',
    description:
      'If you would like to be notified about future ownership or investment information, you can register your interest with our team.',
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ownership"
        description="Learn how riders, drivers, and supporters can grow with RIDE."
        subtle
      >
        <h1 className="mb-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          Own a piece of the journey
        </h1>
      </PageHero>

      <MotionSection className="py-16">
        <div className="container-site max-w-2xl space-y-4">
          <Reveal>
            <p className="text-lg text-white">
              RIDE is building a rideshare platform designed around trust, safety, and fair
              treatment for riders and drivers. As we grow, we are exploring ways for our community
              and supporters to be part of that journey.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-ride-muted">
              This page is the official place to learn about ownership and to register your interest.
              We will share more detailed information here as it becomes available. If you have
              questions in the meantime, our team is reachable by email.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Register your interest
              </Link>
              <a
                href="mailto:support@ridebylamar.com?subject=Ownership%20interest"
                className="rounded-full border border-ride-border px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                support@ridebylamar.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <PoweredByLamarTechnology className="pt-2 font-semibold" prefixClassName="text-white" />
          </Reveal>
        </div>
      </MotionSection>

      <section className="border-t border-ride-border py-16">
        <div className="container-site">
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <GlassCard title={p.title}>
                  <p>{p.description}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-ride-border py-12">
        <div className="container-site max-w-3xl">
          <p className="text-xs leading-relaxed text-ride-muted">
            <span className="font-semibold text-white">Important notice.</span> This page is provided
            for general information only and is intended for residents of jurisdictions where such
            information is lawful. It is not an offer to sell, or a solicitation of an offer to buy,
            any security, investment, or interest in <LamarTechnologyName /> or RIDE, and it is not
            investment, legal, financial, or tax advice. No money or other consideration is being
            solicited, and if sent will not be accepted. Any future investment opportunity, if one is
            ever made available, would be offered only through official offering materials and in
            accordance with all applicable securities laws. Any forward-looking statements reflect
            current intentions only and are not guarantees of future results. This page is subject to
            change or update at any time.
          </p>
        </div>
      </section>
    </>
  );
}
