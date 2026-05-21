import Link from 'next/link';

import { AccordionSection } from '@/components/AccordionSection';
import { OrangeDivider } from '@/components/OrangeDivider';
import { PageHero } from '@/components/PageHero';
import { StairSection } from '@/components/StairSection';
import { MotionSection } from '@/components/MotionSection';
import { MotionButton } from '@/components/ui/MotionButton';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

type DriverSection = {
  title: string;
  subtitle: string;
  body: string;
  cta?: { href: string; label: string };
  link?: { href: string; label: string };
};

const DRIVER_SECTIONS: DriverSection[] = [
  {
    title: 'Driver Onboarding',
    subtitle: 'Step-by-step onboarding for new drivers joining the Ride platform.',
    body: 'Complete each onboarding step in the app — account setup, eligibility, and platform orientation — before you go online.',
  },
  {
    title: 'Verification',
    subtitle: 'Identity, license, and vehicle verification required before your first ride.',
    body: 'Identity and eligibility requirements depend on market and readiness. Documents are reviewed before your first trip is offered.',
  },
  {
    title: 'Driver Profile',
    subtitle: 'Build your profile to earn rider trust and increase your acceptance rate.',
    body: 'Professional profile and vehicle details help riders recognize you when trips are offered.',
  },
  {
    title: 'Earnings',
    subtitle: 'Understand how fares, tips, bonuses, and weekly payouts work.',
    body: 'Earnings visibility in the app — amounts vary by market and hours worked. Ride does not promise specific income, bonuses, or guaranteed trip volume.',
  },
  {
    title: 'Pro Mode',
    subtitle: 'Unlock advanced tools and priority dispatch for high-performing drivers.',
    body: 'Enhanced tools for experienced drivers where offered.',
  },
  {
    title: 'Flex Mode',
    subtitle: 'Set your own schedule and drive on your terms with flexible availability.',
    body: 'Flexible scheduling preferences where available.',
  },
  {
    title: 'Safety',
    subtitle: 'In-trip safety tools, emergency contacts, and incident reporting.',
    body: 'Driver safety resources and operational support channels. In an emergency, contact local authorities first.',
  },
  {
    title: 'Support',
    subtitle: 'Access driver support, report issues, and connect with the Ride team.',
    body: 'Reach driver support for account, trip, and platform questions through our support center.',
    cta: { href: '/support', label: 'Driver support' },
  },
  {
    title: 'Community Guidelines',
    subtitle: 'Standards of conduct that keep the Ride community safe and respectful.',
    body: 'Review the standards that apply to every driver and rider on Ride.',
    link: { href: '/community-guidelines', label: 'Read Community Guidelines' },
  },
  {
    title: 'Privacy Rights',
    subtitle: 'Your data rights, how we use your information, and how to make requests.',
    body: 'Learn what we collect, how we use it, and how to exercise your privacy rights.',
    link: { href: '/privacy-rights', label: 'Read Privacy Rights' },
  },
];

export const metadata = buildPageMetadata({
  title: `Drivers | ${siteContent.brand.appName}`,
  description: `Driver onboarding, Flex Mode, Pro Mode, and earnings tools on ${siteContent.brand.appName}.`,
  path: '/drivers',
});

export default function DriversPage() {
  return (
    <>
      <PageHero
        eyebrow="Drivers"
        title="Drive on your terms — with professional tools"
        description="Onboarding, verification, and earnings visibility without income guarantees."
      />
      <MotionSection className="py-16">
        <div className="container-site max-w-3xl">
          {DRIVER_SECTIONS.slice(0, 3).map((section, i) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              index={i}
              defaultOpen={i === 0}
            >
              <p>{section.body}</p>
              {section.cta ? (
                <div className="mt-4">
                  <MotionButton href={section.cta.href}>{section.cta.label}</MotionButton>
                </div>
              ) : null}
              {section.link ? (
                <p className="mt-4">
                  <Link href={section.link.href} className="font-semibold text-ride-accent hover:underline">
                    {section.link.label} →
                  </Link>
                </p>
              ) : null}
            </AccordionSection>
          ))}

          <OrangeDivider />

          {DRIVER_SECTIONS.slice(3, 6).map((section, i) => (
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

          {DRIVER_SECTIONS.slice(6, 8).map((section, i) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              index={i + 6}
            >
              <p>{section.body}</p>
              {section.cta ? (
                <div className="mt-4">
                  <MotionButton href={section.cta.href}>{section.cta.label}</MotionButton>
                </div>
              ) : null}
            </AccordionSection>
          ))}

          <OrangeDivider />

          {DRIVER_SECTIONS.slice(8).map((section, i) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              index={i + 8}
            >
              <p>{section.body}</p>
              {section.link ? (
                <p className="mt-4">
                  <Link href={section.link.href} className="font-semibold text-ride-accent hover:underline">
                    {section.link.label} →
                  </Link>
                </p>
              ) : null}
            </AccordionSection>
          ))}

          <StairSection index={10} className="mt-8">
            <p className="text-ride-muted">
              <strong className="text-white">Note:</strong> {siteContent.brand.appName} does not promise specific
              income, bonuses, or guaranteed trip volume.
            </p>
          </StairSection>
        </div>
      </MotionSection>
    </>
  );
}
