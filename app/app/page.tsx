import { AppShowroom } from '@/components/AppShowroom';
import { AccordionSection } from '@/components/AccordionSection';
import { OrangeDivider } from '@/components/OrangeDivider';
import { PageHero } from '@/components/PageHero';
import { MotionSection } from '@/components/MotionSection';
import { appLinksContent } from '@/content/app-links';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: `Download ${siteContent.brand.appName} | iOS & Android`,
  description: appLinksContent.showroom.description,
  path: '/app',
});

export default function AppPage() {
  const appName = siteContent.brand.appName;

  return (
    <>
      <PageHero
        eyebrow="App"
        title={appLinksContent.showroom.title}
        description="iOS and Android apps are being prepared for store release. Download buttons activate when real store URLs are added."
      />
      <AppShowroom compact />
      <MotionSection className="py-16">
        <div className="container-site max-w-3xl">
          <AccordionSection
            title="Download for iOS"
            subtitle="Available on the App Store for iPhone."
            index={0}
            defaultOpen
          >
            <p>
              The {appName} app for iPhone will be listed on the App Store. Add your App Store URL in{' '}
              <code className="text-ride-accent">content/app-links.ts</code> when ready.
            </p>
          </AccordionSection>

          <AccordionSection
            title="Download for Android"
            subtitle="Available on Google Play for Android devices."
            index={1}
          >
            <p>
              The {appName} app for Android will be listed on Google Play. Add your Play Store URL in{' '}
              <code className="text-ride-accent">content/app-links.ts</code> when ready.
            </p>
          </AccordionSection>

          <OrangeDivider />

          <AccordionSection
            title="App Features"
            subtitle="Everything you need to ride or drive, in one app."
            index={2}
          >
            <p>{appLinksContent.showroom.description}</p>
          </AccordionSection>

          <AccordionSection
            title="Notifications"
            subtitle="Stay updated on your trips, earnings, and offers."
            index={3}
          >
            <ul className="list-disc space-y-2 pl-5">
              {appLinksContent.showroom.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </AccordionSection>
        </div>
      </MotionSection>
    </>
  );
}
