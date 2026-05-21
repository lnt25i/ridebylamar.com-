import Link from 'next/link';

import { AccordionSection } from '@/components/AccordionSection';
import { OrangeDivider } from '@/components/OrangeDivider';
import { PageHero } from '@/components/PageHero';
import { StairSection } from '@/components/StairSection';
import { MotionSection } from '@/components/MotionSection';
import { MotionButton } from '@/components/ui/MotionButton';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

const RIDER_SECTIONS = [
  {
    title: 'How Ride Works',
    subtitle: 'Request a ride in seconds — pickup to destination.',
    body: 'Set pickup and destination with a clear trip flow before you confirm.',
  },
  {
    title: 'Safety Features',
    subtitle: 'Real-time tracking, emergency tools, and verified drivers.',
    body: 'Access safety resources and reporting paths; for emergencies, contact local authorities first.',
  },
  {
    title: 'Payment & Wallet',
    subtitle: 'Secure payments, receipts, and wallet management.',
    body: 'Pay through approved in-app methods with fare visibility where supported.',
  },
  {
    title: 'Saved Places',
    subtitle: 'Set home, work, and favorite destinations.',
    body: 'See relevant driver and vehicle information when available in your market.',
  },
  {
    title: 'Ride Tiers',
    subtitle: 'Economy, Comfort, XL, and Black — choose your experience.',
    body: 'Status updates and trip context from match to drop-off.',
  },
  {
    title: 'Scheduling',
    subtitle: 'Book rides in advance for important trips.',
    body: 'Request rides with a clear trip flow before you confirm.',
  },
  {
    title: 'Community Guidelines',
    subtitle: 'How riders are expected to treat drivers and the platform.',
    body: 'Review the standards that apply to every rider and driver on Ride.',
    link: { href: '/community-guidelines', label: 'Read Community Guidelines' },
  },
  {
    title: 'Privacy Rights',
    subtitle: 'Your rights as a Ride user.',
    body: 'Learn what we collect, how we use it, and how to exercise your privacy rights.',
    link: { href: '/privacy-rights', label: 'Read Privacy Rights' },
  },
] as const;

export const metadata = buildPageMetadata({
  title: `Riders | ${siteContent.brand.appName}`,
  description: `Request rides, secure payments, and trip support on ${siteContent.brand.appName}.`,
  path: '/riders',
});

export default function RidersPage() {
  return (
    <>
      <PageHero
        eyebrow="Riders"
        title="Ride with clarity and control"
        description="The rider experience is designed around secure requests, visible trip context, and support when you need it."
      />
      <MotionSection className="py-16">
        <div className="container-site max-w-3xl">
          {RIDER_SECTIONS.slice(0, 3).map((section, i) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              index={i}
              defaultOpen={i === 0}
            >
              <p>{section.body}</p>
              {'link' in section && section.link ? (
                <p className="mt-4">
                  <Link href={section.link.href} className="font-semibold text-ride-accent hover:underline">
                    {section.link.label} →
                  </Link>
                </p>
              ) : null}
            </AccordionSection>
          ))}

          <OrangeDivider />

          {RIDER_SECTIONS.slice(3, 6).map((section, i) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              index={i + 3}
            >
              <p>{section.body}</p>
            </AccordionSection>
          ))}

          <OrangeDivider />

          {RIDER_SECTIONS.slice(6).map((section, i) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              index={i + 6}
            >
              <p>{section.body}</p>
              {'link' in section && section.link ? (
                <p className="mt-4">
                  <Link href={section.link.href} className="font-semibold text-ride-accent hover:underline">
                    {section.link.label} →
                  </Link>
                </p>
              ) : null}
            </AccordionSection>
          ))}

          <StairSection index={8} className="mt-8">
            <MotionButton href="/support">Rider support</MotionButton>
          </StairSection>
        </div>
      </MotionSection>
    </>
  );
}
