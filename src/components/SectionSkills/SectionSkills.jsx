import Reveal from 'components/Reveal';
import Section from 'components/Section/Section';
import SectionContainer from 'components/SectionContainer';
import { StyledTitle } from 'components/SectionTitle/SectionTitle.styled';
import { useState } from 'react';
import { skills } from 'utils/skills';
import SkillListItem from '../SectionSkills/SkillListItem';
import { SkillList, TextContainer } from './SectionSkills.styled';

const SectionExperience = () => {
  const [descr, setDescr] = useState('');

  const handleDescription = value => setDescr(value);

  return (
    <Section id={'skills'}>
      <SectionContainer>
        <Reveal>
          <StyledTitle>Skills</StyledTitle>
          <SkillList>
            {skills.map(skill => (
              <SkillListItem
                key={skill.id}
                skill={skill}
                onClick={handleDescription}
              />
            ))}
          </SkillList>

          {descr !== '' && (
            <Reveal>
              <TextContainer>
                <p>{descr}</p>
              </TextContainer>
            </Reveal>
          )}
        </Reveal>
      </SectionContainer>
    </Section>
  );
};

export default SectionExperience;
