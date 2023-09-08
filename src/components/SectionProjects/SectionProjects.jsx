import Reveal from 'components/Reveal';
import Section from 'components/Section/Section';
import SectionContainer from 'components/SectionContainer';
import SectionTitle from 'components/SectionTitle';
import { projects } from 'utils/projects';
import ProjectItem from './ProjectItem';
import { ProjectList } from './SectionProjects.styled';

const SectionProjects = () => {
  return (
    <Section id={'projects'}>
      <SectionContainer>
        <Reveal>
          <SectionTitle>Projects</SectionTitle>
          <ProjectList>
            {projects.map(project => (
              <ProjectItem key={project.id} project={project}></ProjectItem>
            ))}
          </ProjectList>
        </Reveal>
      </SectionContainer>
    </Section>
  );
};

export default SectionProjects;
