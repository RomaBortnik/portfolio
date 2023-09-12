import { sections } from 'utils/sections';
import { NavList, NavListItem } from './Navigation.styled';

const Navigation = ({ onClose }) => {
  return (
    <NavList>
      {sections.map((section, index) => (
        <NavListItem onClick={onClose} key={index}>
          <a href={`#${section.toLowerCase()}`}>{section}</a>
        </NavListItem>
      ))}
    </NavList>
  );
};

export default Navigation;
