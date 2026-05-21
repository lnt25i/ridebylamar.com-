'use client';

import { CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { AccordionSection } from '@/components/AccordionSection';
import { OrangeDivider } from '@/components/OrangeDivider';
import { PageHero } from '@/components/PageHero';
import { StairSection } from '@/components/StairSection';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { AnimatedButton } from '@/components/animations/AnimatedButton';
import { animate, trackAnimation } from '@/lib/animations/anime';
import { careersContent } from '@/content/careers';
import { socialLinksContent } from '@/content/social-links';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function CareersPageClient() {
  const { page, roles, requirements, benefits, linkedIn } = careersContent;
  const driver = roles[0];
  const linkedInUrl = socialLinksContent.links.linkedin.trim();
  const reduced = useReducedMotion();
  const comingSoonRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (linkedInUrl || reduced || !comingSoonRef.current) return;
    const anim = trackAnimation(
      animate(comingSoonRef.current, {
        opacity: [0.75, 1, 0.75],
        duration: 3000,
        loop: true,
        ease: 'inOutSine',
      })
    );
    return () => {
      anim?.revert();
    };
  }, [linkedInUrl, reduced]);

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.lead} />

      <AnimatedSection className="py-16">
        <div className="container-site max-w-3xl">
          <AccordionSection
            title="Why Ride"
            subtitle="Join a team building the future of premium rideshare."
            index={0}
            defaultOpen
          >
            <p>{page.lead}</p>
          </AccordionSection>

          <AccordionSection
            title="Open Roles"
            subtitle="Current opportunities across engineering, ops, and support."
            index={1}
          >
            <p className="mb-2 text-sm font-semibold text-ride-accent">{driver.status}</p>
            <p className="font-semibold text-white">{driver.title}</p>
            <p className="mt-2">{driver.summary}</p>
            <p className="mt-4 text-sm text-ride-muted">{driver.futureApplyNote}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <AnimatedButton href={driver.applyCta.href}>{driver.applyCta.label}</AnimatedButton>
              <AnimatedButton href="/contact" variant="secondary">
                Contact support
              </AnimatedButton>
            </div>
          </AccordionSection>

          <OrangeDivider />

          <AccordionSection
            title="Culture & Values"
            subtitle="What it means to be part of Lamar Technology."
            index={2}
          >
            <p className="mb-4 text-ride-muted">{requirements.intro}</p>
            <ul className="space-y-3">
              {requirements.items.map((item) => (
                <li key={item} className="flex gap-3 text-ride-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ride-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ride-muted">{requirements.disclaimer}</p>
            <div className="mt-6">
              <AnimatedButton href={driver.applyCta.href} variant="outline" size="sm">
                {driver.applyCta.label}
              </AnimatedButton>
            </div>
          </AccordionSection>

          <AccordionSection title="Benefits" subtitle="Compensation, flexibility, and growth." index={3}>
            <p className="mb-4 font-semibold text-white">{benefits.title}</p>
            <ul className="space-y-3">
              {benefits.items.map((item) => (
                <li key={item} className="flex gap-3 text-ride-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ride-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </AccordionSection>

          <OrangeDivider />

          <AccordionSection
            title="How to Apply"
            subtitle="Our hiring process from application to offer."
            index={4}
          >
            <p>{driver.futureApplyNote}</p>
            <div className="mt-6">
              <AnimatedButton href={driver.applyCta.href}>{driver.applyCta.label}</AnimatedButton>
            </div>
          </AccordionSection>

          <StairSection index={5} className="mt-12 text-center">
            <h2 className="mb-3 text-2xl font-bold" style={{ color: '#FF9500' }}>
              {linkedIn.title}
            </h2>
            <p className="mb-6 text-ride-muted">{linkedIn.description}</p>
            {linkedInUrl ? (
              <AnimatedButton href={linkedInUrl} external>
                {linkedIn.buttonLabel}
              </AnimatedButton>
            ) : (
              <span ref={comingSoonRef} className="inline-flex">
                <AnimatedButton comingSoon>{linkedIn.comingSoonLabel}</AnimatedButton>
              </span>
            )}
          </StairSection>
        </div>
      </AnimatedSection>
    </>
  );
}
