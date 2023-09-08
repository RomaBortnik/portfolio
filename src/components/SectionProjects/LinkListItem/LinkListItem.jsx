import SvgIcon from 'components/SvgIcon';
import { LinkItem, LinkRef } from './LinkListItem.styled';

const LinkListItem = ({ link, icon }) => {
  return (
    <LinkItem>
      <LinkRef href={link}>
        <SvgIcon w={20} h={20} use={icon}></SvgIcon>
      </LinkRef>
    </LinkItem>
  );
};

export default LinkListItem;
