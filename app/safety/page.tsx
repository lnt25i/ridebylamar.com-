import { PageHero } from '@/components/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

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
      <section className="py-16">
        <div className="container-site grid gap-5 md:grid-cols-2">
          <GlassCard title="Driver verification">
            <p>Requirements are communicated during onboarding. Screening may not be active everywhere before launch.</p>
          </GlassCard>
          <GlassCard title="Trip support">
            <p>Trip context and in-app tools help riders and drivers during active trips where available.</p>
          </GlassCard>
          <GlassCard title="Support access">
            <p>Contact support for non-emergency safety questions. For immediate danger, call local emergency services.</p>
          </GlassCard>
          <GlassCard title="Reporting issues">
            <p>Report concerns through support so our team can review per platform policy.</p>
          </GlassCard>
        </div>
        <div className="container-site mt-10 flex flex-wrap gap-3">
          <Button href="/legal/safety-policy" variant="secondary">
            Safety policy (draft)
          </Button>
          <Button href="/support">Safety support</Button>
        </div>
      </section>
    </>
  );
}
