import SvgIcon from 'components/SvgIcon';
import { FooterLinkListItem, FooterLinkListRef } from './FooterLinkItem.styled';

const FooterLinkItem = ({ linkItem }) => {
  const { link, icon, name } = linkItem;
  return (
    <FooterLinkListItem>
      <FooterLinkListRef
        href={link}
        target={name === 'Gmail' ? '_self' : '_blank'}
        rel="noopener noreferrer"
      >
        <SvgIcon w={24} h={24} use={icon} />
      </FooterLinkListRef>
    </FooterLinkListItem>
  );
};

export default FooterLinkItem;
