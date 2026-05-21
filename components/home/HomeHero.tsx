'use client';

import { motion } from 'framer-motion';

import { AnimatedButton } from '@/components/animations/AnimatedButton';
import { AnimatedGlowBackground } from '@/components/animations/AnimatedGlowBackground';
import { AnimatedLogo } from '@/components/animations/AnimatedLogo';
import { HeroHeadline, HeroSubtextFade } from '@/components/home/HeroHeadline';
import { HeroParticles } from '@/components/HeroParticles';
import { Parallax3DHero } from '@/components/Parallax3DHero';
import { highlightLamarTechnology } from '@/components/LamarTechnologyBrand';
import { siteContent } from '@/content/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const { home } = siteContent;
  const reduced = useReducedMotion();
  const headlineWords = home.heroTitle.split(' ');

  return (
    <section className="relative overflow-hidden border-b border-ride-border py-16 md:py-28">
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <AnimatedGlowBackground variant="hero" />
      <HeroParticles />
      <div className="container-site relative z-[1] flex flex-col items-center text-center">
        <Parallax3DHero className="relative z-[1] flex w-full max-w-3xl flex-col items-center">
          {reduced ? (
            <span className="mb-6 inline-block rounded-full border border-ride-accent/35 bg-ride-accent-soft px-4 py-1.5 text-sm font-semibold text-ride-accent shadow-[0_0_24px_rgba(255,122,0,0.2)]">
              {home.launchBadge}
            </span>
          ) : (
            <motion.span
              className="mb-6 inline-block rounded-full border border-ride-accent/35 bg-ride-accent-soft px-4 py-1.5 text-sm font-semibold text-ride-accent shadow-[0_0_24px_rgba(255,122,0,0.2)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_CINEMATIC }}
            >
              {home.launchBadge}
            </motion.span>
          )}

          <AnimatedLogo width={300} priority entrance className="relative z-[1] mb-2" />

          <HeroHeadline
            text={home.heroTitle}
            className="relative z-[1] mt-8 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
          />

          <HeroSubtextFade
            wordCount={headlineWords.length}
            className="relative z-[1] mt-5 max-w-2xl text-lg text-white/90"
          >
            {highlightLamarTechnology(home.heroLead)}
          </HeroSubtextFade>

          <HeroSubtextFade
            wordCount={headlineWords.length}
            delayExtra={0.35}
            className="relative z-[1] mt-3 max-w-xl text-sm text-ride-muted"
          >
            {home.tagline}
          </HeroSubtextFade>

          {reduced ? (
            <div className="relative z-[1] mt-10 flex flex-wrap justify-center gap-3">
              {home.heroCtas.map((cta) => (
                <AnimatedButton key={cta.href} href={cta.href} variant={cta.variant}>
                  {cta.label}
                </AnimatedButton>
              ))}
            </div>
          ) : (
            <motion.div
              className="relative z-[1] mt-10 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: headlineWords.length * 0.08 + 0.45,
                ease: EASE_CINEMATIC,
              }}
            >
              {home.heroCtas.map((cta) => (
                <AnimatedButton key={cta.href} href={cta.href} variant={cta.variant}>
                  {cta.label}
                </AnimatedButton>
              ))}
            </motion.div>
          )}
        </Parallax3DHero>
      </div>
    </section>
  );
}
