import Reveal from 'components/Reveal';
import { Project, ProjectOverlay, ProjectThumb } from './ProjectItem.styled';

const ProjectItem = ({ project }) => {
  const { image, altText, descr } = project;
  return (
    <Project>
      <Reveal>
        <ProjectThumb className="thumb">
          <img src={image} alt={altText} />
        </ProjectThumb>

        <ProjectOverlay className="overlay">
          <p>{descr}</p>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </ProjectOverlay>
      </Reveal>
    </Project>
  );
};

export default ProjectItem;
