import BioSection from '@/features/BioSection';
import SplashSection from './_components/SplashSection';
import WorkSection from '@/features/WorkSection';
import Content from '@/layouts/Content';
import ProjectsSection from '@/features/ProjectsSection';
import EducationSection from '@/features/EducationSection';
import SkillsSection from '@/features/SkillsSection';

export default function Home() {
  return (
    <>
      <SplashSection>
        <BioSection />
      </SplashSection>
      <Content>
        <WorkSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </Content>
    </>
  );
}
