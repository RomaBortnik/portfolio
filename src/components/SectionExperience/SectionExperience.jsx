import Reveal from 'components/Reveal';
import Section from 'components/Section/Section';
import SectionContainer from 'components/SectionContainer';
import { StyledTitle } from 'components/SectionTitle/SectionTitle.styled';
import { CLOUDINARY_URL } from 'utils/education';
import { experience } from 'utils/experience';
import {
  ExperienceContainer,
  ExperienceInfo,
  ExperienceList,
  ExperienceListItem,
  ExperienceStatus,
  GoITLogo,
} from './SectionExperience.styled';

const SectionExperience = () => {
  return (
    <Section id={'experience'}>
      <SectionContainer>
        <Reveal>
          <StyledTitle>Experience</StyledTitle>

          <ExperienceContainer>
            <ExperienceInfo>
              <GoITLogo
                src={`${CLOUDINARY_URL}logos/nhksckv8yhxuzwpg3lw7`}
                alt="GoIT"
              />
              <ExperienceStatus>Student</ExperienceStatus>
            </ExperienceInfo>

            <ExperienceList>
              {experience.map(el => (
                <ExperienceListItem>{el.description}</ExperienceListItem>
              ))}
            </ExperienceList>
          </ExperienceContainer>
        </Reveal>
      </SectionContainer>
    </Section>
  );
};

export default SectionExperience;
