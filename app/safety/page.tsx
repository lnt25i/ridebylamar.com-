import { AccordionSection } from '@/components/AccordionSection';
import { OrangeDivider } from '@/components/OrangeDivider';
import { PageHero } from '@/components/PageHero';
import { StairSection } from '@/components/StairSection';
import { MotionSection } from '@/components/MotionSection';
import { MotionButton } from '@/components/ui/MotionButton';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

const SAFETY_SECTIONS = [
  {
    title: 'Driver Verification',
    subtitle: 'Every driver is background-checked and verified.',
    body: 'Requirements are communicated during onboarding. Screening may not be active everywhere before launch.',
  },
  {
    title: 'Real-Time Tracking',
    subtitle: 'Share your trip and location with trusted contacts.',
    body: 'Trip context and in-app tools help riders and drivers during active trips where available.',
  },
  {
    title: 'Emergency Button',
    subtitle: 'One tap to alert authorities and notify contacts.',
    body: 'Contact support for non-emergency safety questions. For immediate danger, call local emergency services.',
  },
  {
    title: 'RideCheck',
    subtitle: 'Automatic safety check-ins during your trip.',
    body: 'Trip context and in-app tools help riders and drivers during active trips where available.',
  },
  {
    title: 'Incident Reporting',
    subtitle: 'Report any issue directly in the app.',
    body: 'Report concerns through support so our team can review per platform policy.',
  },
  {
    title: 'Community Standards',
    subtitle: 'Zero tolerance for unsafe or disrespectful behavior.',
    body: 'Report concerns through support so our team can review per platform policy.',
  },
] as const;

export const metadata = buildPageMetadata({
  title: `Safety | ${siteContent.brand.appName}`,
  description: `Safety principles for ${siteContent.brand.appName}: verification, reporting, and support.`,
  path: '/safety',
});

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety"
        title="Safety-first platform design"
        description="Realistic language about verification, trip support, and reporting — without overstating what is live in every market."
      />
      <MotionSection className="py-16">
        <div className="container-site max-w-3xl">
          {SAFETY_SECTIONS.slice(0, 3).map((section, i) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              index={i}
              defaultOpen={i === 0}
            >
              <p>{section.body}</p>
            </AccordionSection>
          ))}

          <OrangeDivider />

          {SAFETY_SECTIONS.slice(3).map((section, i) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              index={i + 3}
            >
              <p>{section.body}</p>
            </AccordionSection>
          ))}

          <StairSection index={6} className="mt-8 flex flex-wrap gap-3">
            <MotionButton href="/legal/safety-policy" variant="secondary">
              Safety policy (draft)
            </MotionButton>
            <MotionButton href="/support">Safety support</MotionButton>
          </StairSection>
        </div>
      </MotionSection>
    </>
  );
}
