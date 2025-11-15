import BioSection from '@/features/BioSection';
import SplashSection from './_components/SplashSection';
import WorkSection from '@/features/WorkSection';
import Content from '@/layouts/Content';

export default function Home() {
  return (
    <>
      <SplashSection>
        <BioSection />
      </SplashSection>
      <Content>
        <WorkSection />
      </Content>
    </>
  );
}
