import Link from 'next/link';

import { legalDraftNotice, type LegalDocument as LegalDoc } from '@/content/legal';
import { siteContent } from '@/content/site';

type LegalDocumentProps = {
  doc: LegalDoc;
};

export function LegalDocument({ doc }: LegalDocumentProps) {
  const { supportEmail } = siteContent.contact;
  const { brand } = siteContent;

  return (
    <div className="prose-legal">
      <p className="mb-6 inline-block rounded-lg border border-amber-500/35 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200">
        {legalDraftNotice}
      </p>
      <p>
        This document is a structured placeholder for {brand.appName}, operated by {siteContent.brand.legalEntity}.
        It is provided for business verification and public reference while formal policies are finalized. Do not rely
        on this page as final, attorney-approved language.
      </p>
      <p>
        {brand.appName} is preparing for launch. Features, screening providers, and regional availability may change
        before general availability.
      </p>
      <p>
        Questions: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>

      {doc.sections.map((section) => (
        <div key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}

      <p className="mt-10">
        <Link href="/legal">← Legal index</Link> · <Link href="/support">Support</Link>
      </p>
      <p className="text-sm text-ride-muted">{siteContent.brand.poweredByLine}</p>
    </div>
  );
}
