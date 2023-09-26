import Reveal from 'components/Reveal';
import { Section, SectionContainer, SectionTitle } from 'components/App.styled';
import { education } from 'utils/education';
import EducationItem from './EducationItem';

const SectionEducation = () => {
  return (
    <Section id={'education'}>
      <SectionContainer>
        <Reveal>
          <SectionTitle>Education</SectionTitle>
        </Reveal>
        <ul>
          {education.map(el => (
            <EducationItem key={el.id} education={el}></EducationItem>
          ))}
        </ul>
      </SectionContainer>
    </Section>
  );
};

export default SectionEducation;
