import { PageHero } from '@/components/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

const FEATURES = [
  { title: 'Driver onboarding', body: 'Step-by-step onboarding for verification and platform standards.' },
  { title: 'Verification', body: 'Identity and eligibility requirements depend on market and readiness.' },
  { title: 'Driver profile', body: 'Professional profile and vehicle details when trips are offered.' },
  { title: 'Flex Mode', body: 'Flexible scheduling preferences where available.' },
  { title: 'Pro Mode', body: 'Enhanced tools for experienced drivers where offered.' },
  { title: 'Earnings tools', body: 'Earnings visibility in the app — amounts vary by market and hours worked.' },
  { title: 'Safety and support', body: 'Driver safety resources and operational support channels.' },
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
      <section className="py-16">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <GlassCard key={f.title} title={f.title}>
              <p>{f.body}</p>
            </GlassCard>
          ))}
        </div>
        <div className="container-site mt-10 max-w-2xl">
          <p className="mb-6 text-ride-muted">
            <strong className="text-white">Note:</strong> {siteContent.brand.appName} does not promise specific income,
            bonuses, or guaranteed trip volume.
          </p>
          <Button href="/support">Driver support</Button>
        </div>
      </section>
    </>
  );
}
