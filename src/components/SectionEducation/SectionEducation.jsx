import Reveal from 'components/Reveal';
import Section from 'components/Section/Section';
import SectionContainer from 'components/SectionContainer';
import SectionTitle from 'components/SectionTitle';
import { education } from 'utils/education';
import EducationItem from './EducationItem';

const SectionEducation = () => {
  return (
    <Section id={'education'}>
      <SectionContainer>
        <Reveal>
          <SectionTitle>Education</SectionTitle>

          <ul>
            {education.map(el => (
              <EducationItem key={el.id} education={el}></EducationItem>
            ))}
          </ul>
        </Reveal>
      </SectionContainer>
    </Section>
  );
};

export default SectionEducation;
