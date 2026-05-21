import { AccordionSection } from '@/components/AccordionSection';
import { OrangeDivider } from '@/components/OrangeDivider';
import { PageHero } from '@/components/PageHero';
import { StairSection } from '@/components/StairSection';
import { MotionSection } from '@/components/MotionSection';
import { AnimatedButton } from '@/components/animations/AnimatedButton';
import { shopContent } from '@/content/shop';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

const SHOP_ACCORDIONS = [
  {
    title: 'Ride Merchandise',
    subtitle: 'Official Ride gear — premium and limited edition.',
    body: shopContent.categories[0],
  },
  {
    title: 'Driver Accessories',
    subtitle: 'Tools and accessories for professional drivers.',
    body: shopContent.categories[2],
  },
  {
    title: 'Gift Cards',
    subtitle: 'Give the gift of rides.',
    body: shopContent.categories[1],
  },
  {
    title: 'Shipping & Returns',
    subtitle: 'Order processing, shipping times, and return policy.',
    body: shopContent.categories[3],
  },
] as const;

export const metadata = buildPageMetadata({
  title: `Shop | ${siteContent.brand.appName} Driver Gear`,
  description: shopContent.lead,
  path: '/shop',
});

export default function ShopPage() {
  const hasAmazon = Boolean(shopContent.amazonStorefrontUrl.trim());

  return (
    <>
      <PageHero eyebrow="Shop" title={shopContent.title} description={shopContent.lead} />
      <MotionSection className="py-16">
        <div className="container-site max-w-3xl">
          {SHOP_ACCORDIONS.slice(0, 2).map((section, i) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              index={i}
              defaultOpen={i === 0}
            >
              <p className="font-semibold text-white">{section.body.title}</p>
              <p className="mt-2">{section.body.description}</p>
              <div className="mt-4">
                <AnimatedButton comingSoon size="sm">
                  {shopContent.amazonComingSoonLabel}
                </AnimatedButton>
              </div>
            </AccordionSection>
          ))}

          <OrangeDivider />

          {SHOP_ACCORDIONS.slice(2).map((section, i) => (
            <AccordionSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              index={i + 2}
            >
              <p className="font-semibold text-white">{section.body.title}</p>
              <p className="mt-2">{section.body.description}</p>
              <div className="mt-4">
                <AnimatedButton comingSoon size="sm">
                  {shopContent.amazonComingSoonLabel}
                </AnimatedButton>
              </div>
            </AccordionSection>
          ))}

          <StairSection index={4} className="mt-12 text-center">
            {hasAmazon ? (
              <AnimatedButton href={shopContent.amazonStorefrontUrl} external>
                {shopContent.amazonButtonLabel}
              </AnimatedButton>
            ) : (
              <AnimatedButton comingSoon>{shopContent.amazonComingSoonLabel}</AnimatedButton>
            )}
            <p className="mx-auto mt-6 max-w-lg text-sm text-ride-muted">{shopContent.footnote}</p>
          </StairSection>
        </div>
      </MotionSection>
    </>
  );
}
