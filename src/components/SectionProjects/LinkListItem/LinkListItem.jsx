import SvgIcon from 'components/SvgIcon';
import { LinkItem, LinkRef } from './LinkListItem.styled';

const LinkListItem = ({ link, icon }) => {
  return (
    <LinkItem>
      <LinkRef href={link}>
        <SvgIcon w={24} h={24} use={icon}></SvgIcon>
      </LinkRef>
    </LinkItem>
  );
};

export default LinkListItem;
