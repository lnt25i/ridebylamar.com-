import { PageHero } from '@/components/PageHero';
import { MotionSection } from '@/components/MotionSection';
import { Reveal } from '@/components/motion/Reveal';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import { GlassCard } from '@/components/ui/GlassCard';
import { SocialLinks } from '@/components/SocialLinks';
import {
  highlightLamarTechnology,
  LamarTechnologyName,
  PoweredByLamarTechnology,
} from '@/components/LamarTechnologyBrand';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: `About ${siteContent.brand.appName} | ${siteContent.brand.techBrand}`,
  description: siteContent.about.lead,
  path: '/about',
});

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <>
      <PageHero eyebrow="About" description={about.lead} subtle>
        <h1 className="mb-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          RIDE is powered by <LamarTechnologyName />
        </h1>
      </PageHero>
      <MotionSection className="py-16">
        <div className="container-site max-w-2xl space-y-4">
          <Reveal>
            <p className="text-lg text-white">{about.mission}</p>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={p} delay={0.05 * (i + 1)}>
              <p className="text-ride-muted">{highlightLamarTechnology(p)}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <PoweredByLamarTechnology className="font-semibold" prefixClassName="text-white" />
            <SocialLinks className="pt-4" />
          </Reveal>
        </div>
      </MotionSection>
      <section className="border-t border-ride-border py-16">
        <div className="container-site">
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.pillars.map((p) => (
              <StaggerItem key={p.title}>
                <GlassCard title={p.title}>
                  <p>{p.description}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
