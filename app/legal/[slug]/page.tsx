import { notFound } from 'next/navigation';

import { LegalDocument } from '@/components/LegalDocument';
import { PageHero } from '@/components/PageHero';
import { getLegalDocument, legalDocuments } from '@/content/legal';
import { siteContent } from '@/content/site';
import { buildPageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return legalDocuments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const doc = getLegalDocument(slug);
  if (!doc) return {};
  return buildPageMetadata({
    title: `${doc.title} | ${siteContent.brand.appName}`,
    description: doc.description,
    path: `/legal/${slug}`,
  });
}

export default async function LegalDocumentPage({ params }: Props) {
  const { slug } = await params;
  if (!getLegalDocument(slug)) notFound();
  const doc = getLegalDocument(slug)!;

  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} description={doc.description} />
      <section className="py-16">
        <div className="container-site max-w-3xl">
          <LegalDocument doc={doc} />
        </div>
      </section>
    </>
  );
}
