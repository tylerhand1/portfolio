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

const ProjectsSection = () => (
  <SectionContainer>
    <SectionTitle>Projects</SectionTitle>
    <ExperienceList>
      <ExperienceItem>
        <ExperienceTime>September 2025–Present</ExperienceTime>
        <ExperienceMainContainer>
          <ExperienceTitle>
            Chat Application &middot; In Progress
          </ExperienceTitle>
          <ExperienceDescription>
            Web application for chatting with friends in real time inspired by
            apps like Discord and Slack that supports text messages.
          </ExperienceDescription>
          <TechIconList>
            <TechIcon>JavaScript</TechIcon>
            <TechIcon>TypeScript</TechIcon>
            <TechIcon>HTML & Tailwind CSS</TechIcon>
            <TechIcon>React</TechIcon>
            <TechIcon>Express</TechIcon>
            <TechIcon>PostgreSQL</TechIcon>
            <TechIcon>Redis</TechIcon>
            <TechIcon>Vitest</TechIcon>
            <TechIcon>Playwright</TechIcon>
            <TechIcon>AWS S3</TechIcon>
            <TechIcon>AWS ECS & ECR</TechIcon>
          </TechIconList>
        </ExperienceMainContainer>
      </ExperienceItem>
      <ExperienceItem>
        <ExperienceTime>August 2024–Present</ExperienceTime>
        <ExperienceMainContainer>
          <ExperienceTitle>
            Learning Application &middot; In Progress
          </ExperienceTitle>
          <ExperienceDescription>
            A passion project aimed to give back to the language learning
            community. It includes user speaking transcriptions using OpenAI
            Whisper to practice speach, an admin dashboard to build courses
            inspired by older versions of Duolingo for any language and a
            markdown to HTML renderer to display grammar notes in an easy to
            read way.
          </ExperienceDescription>
          <TechIconList>
            <TechIcon>JavaScript</TechIcon>
            <TechIcon>TypeScript</TechIcon>
            <TechIcon>HTML & Tailwind CSS</TechIcon>
            <TechIcon>React</TechIcon>
            <TechIcon>PostgreSQL</TechIcon>
            <TechIcon>OpenAI Whisper</TechIcon>
            <TechIcon>AWS Polly</TechIcon>
          </TechIconList>
        </ExperienceMainContainer>
      </ExperienceItem>
    </ExperienceList>
  </SectionContainer>
);

export default ProjectsSection;
