import Reveal from 'components/Reveal';
import { Section, SectionContainer, SectionTitle } from 'components/App.styled';
import { projects } from 'utils/projects';
import Slider from './Slider';
import ProjectItem from './ProjectItem';
import { ProjectList, ProjectListContainer } from './SectionProjects.styled';

const SectionProjects = () => {
  return (
    <Section id={'projects'}>
      <SectionContainer>
        <Reveal>
          <SectionTitle>Projects</SectionTitle>

          <ProjectListContainer>
            <ProjectList>
              {projects.map(project => (
                <ProjectItem key={project.id} project={project}></ProjectItem>
              ))}
            </ProjectList>
          </ProjectListContainer>

          <Slider />
        </Reveal>
      </SectionContainer>
    </Section>
  );
};

export default SectionProjects;
