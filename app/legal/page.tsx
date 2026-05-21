import Link from 'next/link';

import { PageHero } from '@/components/PageHero';
import { MotionSection } from '@/components/MotionSection';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
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
        subtle
        parallax={false}
        eyebrow="Legal"
        title="Policies and agreements"
        description="Public legal documents for the RIDE platform. Draft pages are marked pending legal review."
      />
      <MotionSection className="py-16" enable3D={false}>
        <div className="container-site">
          <StaggerContainer className="grid gap-5 sm:grid-cols-2">
            {legalDocuments.map((doc) => (
              <StaggerItem key={doc.slug}>
                <Link
                  href={`/legal/${doc.slug}`}
                  className="glass-card group block transition hover:border-ride-accent/30 hover:no-underline"
                >
                  <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-ride-accent">{doc.title}</h3>
                  <p className="mb-3 text-ride-muted">{doc.description}</p>
                  <span className="text-sm font-semibold text-ride-accent">Read document →</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </MotionSection>
    </>
  );
}
