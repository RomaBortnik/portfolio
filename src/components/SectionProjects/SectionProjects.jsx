import Reveal from 'components/Reveal';
import Section from 'components/Section/Section';
import SectionContainer from 'components/SectionContainer';
import SectionTitle from 'components/SectionTitle';
import { projects } from 'utils/projects';
import ProjectItem from './ProjectItem';

const SectionProjects = () => {
  return (
    <Section id={'projects'}>
      <SectionContainer>
        <Reveal>
          <SectionTitle>Projects</SectionTitle>
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridColumnGap: 60,
              gridRowGap: 48,
            }}
          >
            {projects.map(project => (
              <ProjectItem key={project.id} project={project}></ProjectItem>
            ))}
          </ul>
        </Reveal>
      </SectionContainer>
    </Section>
  );
};

export default SectionProjects;
