import { PageHero } from '@/components/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

const FEATURES = [
  { title: 'Request rides', body: 'Set pickup and destination with a clear trip flow before you confirm.' },
  { title: 'Driver & vehicle details', body: 'See relevant driver and vehicle information when available in your market.' },
  { title: 'Secure trip flow', body: 'Status updates and trip context from match to drop-off.' },
  { title: 'Payment experience', body: 'Pay through approved in-app methods with fare visibility where supported.' },
  { title: 'Safety support', body: 'Safety resources and reporting; for emergencies, contact local authorities first.' },
  { title: 'History & support', body: 'Trip history and email support for post-ride questions.' },
];

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
      <section className="py-16">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <GlassCard key={f.title} title={f.title}>
              <p>{f.body}</p>
            </GlassCard>
          ))}
        </div>
        <div className="container-site mt-10">
          <Button href="/support">Rider support</Button>
        </div>
      </section>
    </>
  );
}
