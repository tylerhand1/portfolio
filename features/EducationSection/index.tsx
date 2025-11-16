import SectionContainer from '@/app/_components/SectionContainer';
import SectionTitle from '@/app/_components/SectionTitle';
import ExperienceDescription from '@/components/Experience/ExperienceDescription';
import ExperienceItem from '@/components/Experience/ExperienceItem';
import ExperienceList from '@/components/Experience/ExperienceList';
import ExperienceMainContainer from '@/components/Experience/ExperienceMainContent';
import ExperienceTime from '@/components/Experience/ExperienceTime';
import ExperienceTitle from '@/components/Experience/ExperienceTitle';

const EducationSection = () => (
  <SectionContainer>
    <SectionTitle>Education</SectionTitle>
    <ExperienceList>
      <ExperienceItem>
        <ExperienceTime>August 2020–May 2024</ExperienceTime>
        <ExperienceMainContainer>
          <ExperienceTitle>
            BS in Computer Science &middot; University of Colorado Boulder
          </ExperienceTitle>
          <ExperienceDescription>
            Obtaining my degree was an enriching experience of making lifelong
            friends and learning from bright minds within and outside the field
            of software engineering.
          </ExperienceDescription>
        </ExperienceMainContainer>
      </ExperienceItem>
    </ExperienceList>
  </SectionContainer>
);

export default EducationSection;
