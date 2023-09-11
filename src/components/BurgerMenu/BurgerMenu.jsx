import { MenuContainer } from './BurgerMenu.styled';
import sprite from '../../images/icons.svg';
import SvgIcon from 'components/SvgIcon';

const BurgerMenu = ({ menuStatus, onClose }) => {
  return (
    <MenuContainer className={`${menuStatus ? 'active' : 'not-active'}`}>
      <button type="button" onClick={() => onClose()}>
        <SvgIcon w={40} h={40} use={`${sprite}#icon-close-big`}></SvgIcon>
      </button>
    </MenuContainer>
  );
};

export default BurgerMenu;
