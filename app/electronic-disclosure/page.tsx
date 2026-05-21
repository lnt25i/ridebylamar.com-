import Link from 'next/link';

import { PageHero } from '@/components/PageHero';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { legalDraftNotice } from '@/content/legal';
import { LamarTechnologyName } from '@/components/LamarTechnologyBrand';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: `Electronic Communications Disclosure | ${siteContent.brand.appName}`,
  description: `How ${siteContent.brand.appName} may contact you electronically.`,
  path: '/electronic-disclosure',
});

export default function ElectronicDisclosurePage() {
  const email = siteContent.contact.supportEmail;

  return (
    <>
      <PageHero
        subtle
        eyebrow="Legal"
        title="Electronic Communications Disclosure"
        description="How we may send account, trip, payment, and safety-related electronic notices."
      />
      <section className="py-16">
        <RevealOnScroll subtle className="prose-legal container-site max-w-3xl">
          <p className="mb-6 inline-block rounded-lg border border-amber-500/35 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200">
            {legalDraftNotice}
          </p>
          <p>
            <LamarTechnologyName /> LLC may contact you electronically regarding your {siteContent.brand.appName}{' '}
            account,
            trips, payments, safety notices, and legally required messages.
          </p>
          <p>
            You can manage certain preferences in the app where available. Transactional and safety-related notices may
            continue because they are necessary to operate the platform.
          </p>
          <p>
            Questions: <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            <Link href="/legal">← Legal index</Link>
          </p>
        </RevealOnScroll>
      </section>
    </>
  );
}
