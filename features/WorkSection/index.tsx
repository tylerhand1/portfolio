import SectionContainer from '@/app/_components/SectionContainer';
import SectionTitle from '@/app/_components/SectionTitle';
import ExperienceDescription from '@/components/Experience/ExperienceDescription';
import ExperienceItem from '@/components/Experience/ExperienceItem';
import ExperienceList from '@/components/Experience/ExperienceList';
import ExperienceMainContainer from '@/components/Experience/ExperienceMainContent';
import ExperienceTime from '@/components/Experience/ExperienceTime';
import ExperienceTitle from '@/components/Experience/ExperienceTitle';
import TechIcon from '@/components/UI/TechIcons/TechIcon';
import TechIconList from '@/components/UI/TechIcons/TechIconList';

const WorkSection = () => (
  <SectionContainer>
    <SectionTitle>Work Experience</SectionTitle>
    <ExperienceList>
      <ExperienceItem>
        <ExperienceTime>June 2023–Present</ExperienceTime>
        <ExperienceMainContainer>
          <ExperienceTitle>
            Software Engineer &middot; Dents by Hand
          </ExperienceTitle>
          <ExperienceDescription>
            Currently engineering a client intake web application deployed to
            AWS ECS and ECR via a CI/CD pipeline to generate PDF reports for
            customers to accelerate processing clients.
          </ExperienceDescription>
          <TechIconList>
            <TechIcon>JavaScript</TechIcon>
            <TechIcon>TypeScript</TechIcon>
            <TechIcon>HTML & Tailwind CSS</TechIcon>
            <TechIcon>React</TechIcon>
            <TechIcon>Next.js</TechIcon>
            <TechIcon>Drizzle ORM</TechIcon>
            <TechIcon>PostgreSQL</TechIcon>
            <TechIcon>Vitest</TechIcon>
            <TechIcon>Playwright</TechIcon>
            <TechIcon>AWS ECS & ECR</TechIcon>
          </TechIconList>
        </ExperienceMainContainer>
      </ExperienceItem>
      <ExperienceItem>
        <ExperienceTime>May 2024–August 2024</ExperienceTime>
        <ExperienceMainContainer>
          <ExperienceTitle>
            Software Development Internship &middot; BioFrontiers Institute
          </ExperienceTitle>
          <ExperienceDescription>
            As a Virtual Labs Developer, coordinated with a team to build an
            educational Godot-based biology lab simulator framework accesible as
            a website, including the ability to make common mistakes and a
            real-time logging system to provide valuable feedback to students.
          </ExperienceDescription>
          <TechIconList>
            <TechIcon>Godot</TechIcon>
            <TechIcon>GDScript</TechIcon>
            <TechIcon>HTML</TechIcon>
            <TechIcon>Git</TechIcon>
            <TechIcon>CI/CD</TechIcon>
          </TechIconList>
        </ExperienceMainContainer>
      </ExperienceItem>
    </ExperienceList>
  </SectionContainer>
);

export default WorkSection;
