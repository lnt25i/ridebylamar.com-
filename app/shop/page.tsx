import { PageHero } from '@/components/PageHero';
import { GlassCard } from '@/components/ui/GlassCard';
import { shopContent } from '@/content/shop';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';
import { cn } from '@/lib/cn';

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
      <section className="py-16">
        <div className="container-site grid gap-5 md:grid-cols-2">
          {shopContent.categories.map((cat) => (
            <GlassCard key={cat.title} title={cat.title}>
              <p>{cat.description}</p>
              {/*
                TODO: Per-category Amazon product URLs — add when listings exist.
                <a href="AMAZON_PRODUCT_URL">View on Amazon</a>
              */}
              <button
                type="button"
                disabled
                className={cn(
                  'mt-4 inline-flex rounded-full border border-ride-border px-4 py-2 text-sm font-semibold',
                  'cursor-not-allowed text-ride-muted opacity-70'
                )}
              >
                {shopContent.amazonComingSoonLabel}
              </button>
            </GlassCard>
          ))}
        </div>
        <div className="container-site mt-12 text-center">
          {hasAmazon ? (
            <a
              href={shopContent.amazonStorefrontUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-ride-accent px-6 py-3 font-semibold text-black hover:bg-[#ff8f26]"
            >
              {shopContent.amazonButtonLabel}
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed rounded-full border border-ride-border px-6 py-3 font-semibold text-ride-muted">
              {shopContent.amazonComingSoonLabel}
            </span>
          )}
          <p className="mx-auto mt-6 max-w-lg text-sm text-ride-muted">{shopContent.footnote}</p>
          <p className="mt-4 text-xs text-ride-muted">
            Update <code className="text-ride-accent">content/shop.ts</code> → <code>amazonStorefrontUrl</code>
          </p>
        </div>
      </section>
    </>
  );
}
