import { appLinksContent } from '@/content/app-links';
import { StoreButton } from '@/components/ui/Button';

export function AppStoreBadges() {
  const { appStoreUrl, googlePlayUrl, labels } = appLinksContent;

  return (
    <div className="flex flex-wrap gap-3">
      <StoreButton
        icon={<span aria-hidden></span>}
        label="App Store"
        href={appStoreUrl}
        comingSoonLabel={labels.comingSoon}
      />
      <StoreButton
        icon={<span aria-hidden>▶</span>}
        label="Google Play"
        href={googlePlayUrl}
        comingSoonLabel={labels.comingSoon}
      />
    </div>
  );
}
