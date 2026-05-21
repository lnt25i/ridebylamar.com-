import { PageHero } from '@/components/PageHero';
import { SocialLinks } from '@/components/SocialLinks';
import { GlassCard } from '@/components/ui/GlassCard';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: `About ${siteContent.brand.appName} | ${siteContent.brand.techBrand}`,
  description: siteContent.about.lead,
  path: '/about',
});

export default function AboutPage() {
  const { about, brand } = siteContent;

  return (
    <>
      <PageHero eyebrow="About" title={about.title} description={about.lead} />
      <section className="py-16">
        <div className="container-site max-w-2xl space-y-4 text-ride-muted">
          <p className="text-lg text-white">{about.mission}</p>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="font-semibold text-white">{brand.poweredByLine}</p>
          <SocialLinks className="pt-4" />
        </div>
      </section>
      <section className="border-t border-ride-border py-16">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((p) => (
            <GlassCard key={p.title} title={p.title}>
              <p>{p.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
