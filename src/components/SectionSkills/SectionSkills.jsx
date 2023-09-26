import { useState } from 'react';
import Reveal from 'components/Reveal';
import { Section, SectionContainer, SectionTitle } from 'components/App.styled';
import SkillListItem from '../SectionSkills/SkillListItem';
import { skills } from 'utils/skills';
import { SkillList, TextContainer } from './SectionSkills.styled';

const SectionExperience = () => {
  const [descr, setDescr] = useState('');

  const handleDescription = value => setDescr(value);

  return (
    <Section id={'skills'}>
      <SectionContainer>
        <Reveal>
          <SectionTitle>Skills</SectionTitle>
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
