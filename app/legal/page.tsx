import Link from 'next/link';

import { PageHero } from '@/components/PageHero';
import { legalDocuments } from '@/content/legal';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: `Legal | ${siteContent.brand.appName}`,
  description: `Terms, privacy, agreements, and safety policies for ${siteContent.brand.appName}.`,
  path: '/legal',
});

export default function LegalIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Policies and agreements"
        description="Public legal documents for the RIDE platform. Draft pages are marked pending legal review."
      />
      <section className="py-16">
        <div className="container-site grid gap-5 sm:grid-cols-2">
          {legalDocuments.map((doc) => (
            <Link
              key={doc.slug}
              href={`/legal/${doc.slug}`}
              className="glass-card block transition hover:border-ride-accent/30 hover:no-underline"
            >
              <h3 className="mb-2 text-lg font-semibold text-white">{doc.title}</h3>
              <p className="mb-3 text-ride-muted">{doc.description}</p>
              <span className="text-sm font-semibold text-ride-accent">Read document →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
