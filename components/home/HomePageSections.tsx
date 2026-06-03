'use client';

import { Card3DTilt } from '@/components/Card3DTilt';
import { FloatUp3D } from '@/components/FloatUp3D';
import { AnimatedButton } from '@/components/animations/AnimatedButton';
import { siteContent } from '@/content/site';

export function HomePageSections() {
  const { home, about } = siteContent;

  return (
    <>
      <FloatUp3D index={0}>
        <section className="section-site">
          <div className="container-site">
            <h2 className="heading-section mb-3">{home.whyTitle}</h2>
            <p className="text-lead max-w-2xl">{home.whyLead}</p>
          </div>
        </section>
      </FloatUp3D>

      <section className="border-y border-ride-border bg-ride-elevated/30 section-site">
        <div className="container-site">
          <FloatUp3D index={1}>
            <h2 className="heading-section mb-8 text-center sm:mb-10">What we are building</h2>
          </FloatUp3D>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {about.pillars.map((pillar, i) => (
              <FloatUp3D key={pillar.title} index={i + 2}>
                <Card3DTilt intensity={i % 2 === 0 ? 8 : 12}>
                  <article className="glass-card h-full">
                    <h3 className="mb-2 text-lg font-semibold text-ride-accent">{pillar.title}</h3>
                    <p className="text-sm text-ride-muted">{pillar.description}</p>
                  </article>
                </Card3DTilt>
              </FloatUp3D>
            ))}
          </div>
          <FloatUp3D index={6} className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <AnimatedButton href="/app" variant="primary">
              Get the App
            </AnimatedButton>
            <AnimatedButton href="/contact" variant="secondary">
              Contact Support
            </AnimatedButton>
          </FloatUp3D>
        </div>
      </section>
    </>
  );
}
