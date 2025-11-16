import SectionContainer from '@/app/_components/SectionContainer';
import SectionTitle from '@/app/_components/SectionTitle';
import ExperienceItem from '@/components/Experience/ExperienceItem';
import ExperienceList from '@/components/Experience/ExperienceList';
import ExperienceMainContainer from '@/components/Experience/ExperienceMainContent';
import ExperienceTime from '@/components/Experience/ExperienceTime';
import TechIcon from '@/components/UI/TechIcons/TechIcon';
import TechIconList from '@/components/UI/TechIcons/TechIconList';

const SkillsSection = () => (
  <SectionContainer>
    <SectionTitle>Skills</SectionTitle>
    <ExperienceList>
      <ExperienceItem>
        <ExperienceTime>Programming Languages</ExperienceTime>
        <ExperienceMainContainer>
          <TechIconList>
            <TechIcon>JavaScript</TechIcon>
            <TechIcon>TypeScript</TechIcon>
            <TechIcon>HTML</TechIcon>
            <TechIcon>CSS</TechIcon>
            <TechIcon>C#</TechIcon>
          </TechIconList>
        </ExperienceMainContainer>
      </ExperienceItem>
      <ExperienceItem>
        <ExperienceTime>Frameworks & Libraries</ExperienceTime>
        <ExperienceMainContainer>
          <TechIconList>
            <TechIcon>React</TechIcon>
            <TechIcon>Next.js</TechIcon>
            <TechIcon>Express</TechIcon>
            <TechIcon>Tailwind CSS</TechIcon>
            <TechIcon>.NET Core</TechIcon>
            <TechIcon>ASP.NET Core</TechIcon>
          </TechIconList>
        </ExperienceMainContainer>
      </ExperienceItem>
      <ExperienceItem>
        <ExperienceTime>Tools and Platforms</ExperienceTime>
        <ExperienceMainContainer>
          <TechIconList>
            <TechIcon>Git</TechIcon>
            <TechIcon>Docker</TechIcon>
            <TechIcon>AWS</TechIcon>
            <TechIcon>Figma</TechIcon>
            <TechIcon>Vitest</TechIcon>
            <TechIcon>Playwright</TechIcon>
          </TechIconList>
        </ExperienceMainContainer>
      </ExperienceItem>
      <ExperienceItem>
        <ExperienceTime>Databases</ExperienceTime>
        <ExperienceMainContainer>
          <TechIconList>
            <TechIcon>PostgreSQL</TechIcon>
            <TechIcon>Drizzle ORM</TechIcon>
            <TechIcon>Entity Framework Core</TechIcon>
          </TechIconList>
        </ExperienceMainContainer>
      </ExperienceItem>
      <ExperienceItem>
        <ExperienceTime>Soft Skills</ExperienceTime>
        <ExperienceMainContainer>
          <TechIconList>
            <TechIcon>Agile</TechIcon>
            <TechIcon>Communication</TechIcon>
            <TechIcon>Teamwork</TechIcon>
          </TechIconList>
        </ExperienceMainContainer>
      </ExperienceItem>
    </ExperienceList>
  </SectionContainer>
);

export default SkillsSection;
