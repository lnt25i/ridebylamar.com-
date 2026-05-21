import { AppShowroom } from '@/components/AppShowroom';
import { PageHero } from '@/components/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';
import { appLinksContent } from '@/content/app-links';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: `Download ${siteContent.brand.appName} | iOS & Android`,
  description: appLinksContent.showroom.description,
  path: '/app',
});

export default function AppPage() {
  return (
    <>
      <PageHero
        eyebrow="App"
        title={appLinksContent.showroom.title}
        description="iOS and Android apps are being prepared for store release. Download buttons activate when real store URLs are added."
      />
      <AppShowroom compact />
      <section className="py-16">
        <div className="container-site grid gap-5 md:grid-cols-2">
          <GlassCard title="iOS">
            <p>
              The {siteContent.brand.appName} app for iPhone will be listed on the App Store. Add your App Store URL in{' '}
              <code className="text-ride-accent">content/app-links.ts</code> when ready.
            </p>
          </GlassCard>
          <GlassCard title="Android">
            <p>
              The {siteContent.brand.appName} app for Android will be listed on Google Play. Add your Play Store URL in{' '}
              <code className="text-ride-accent">content/app-links.ts</code> when ready.
            </p>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
