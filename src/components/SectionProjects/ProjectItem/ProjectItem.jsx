import Reveal from 'components/Reveal';
import LinkListItem from '../LinkListItem';
import {
  Project,
  ProjectOverlay,
  ProjectThumb,
  ProjectTitle,
  LinkList,
} from './ProjectItem.styled';

const ProjectItem = ({ project }) => {
  const { id, name, image, altText, descr, media } = project;
  return (
    <Project>
      <Reveal>
        <ProjectThumb className="thumb">
          <img src={image} alt={altText} />
        </ProjectThumb>

        <ProjectOverlay className="overlay">
          <ProjectTitle>{name}</ProjectTitle>
          <p>{descr}</p>
          <LinkList>
            {media.map(({ link, icon }) => (
              <LinkListItem key={id} link={link} icon={icon} />
            ))}
          </LinkList>
        </ProjectOverlay>
      </Reveal>
    </Project>
  );
};

export default ProjectItem;
