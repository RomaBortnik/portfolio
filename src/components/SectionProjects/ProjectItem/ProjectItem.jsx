// import Reveal from 'components/Reveal';
import LinkListItem from '../LinkListItem';
import {
  Project,
  ProjectOverlay,
  ProjectThumb,
  ProjectTitle,
  ProjectDescr,
  LinkList,
} from './ProjectItem.styled';

const ProjectItem = ({ project }) => {
  const { name, mobileImage, altText, descr, media } = project;
  return (
    <Project>
      {/* <Reveal> */}
      <ProjectThumb className="thumb">
        <img
          style={{ height: '100%', width: '100%' }}
          src={mobileImage}
          alt={altText}
        />
      </ProjectThumb>

      <ProjectOverlay className="overlay">
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDescr>{descr}</ProjectDescr>
        <LinkList>
          {media.map(({ id, link, icon }) => (
            <LinkListItem key={id} link={link} icon={icon} />
          ))}
        </LinkList>
      </ProjectOverlay>
      {/* </Reveal> */}
    </Project>
  );
};

export default ProjectItem;
