import { AppShowroom } from '@/components/AppShowroom';
import { HomeHero } from '@/components/home/HomeHero';
import { HomePageSections } from '@/components/home/HomePageSections';
import { homeMetadata } from '@/lib/metadata';

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AppShowroom />
      <HomePageSections />
    </>
  );
}
