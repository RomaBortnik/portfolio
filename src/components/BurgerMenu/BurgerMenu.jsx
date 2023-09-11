import { MenuBackdrop, MenuContainer } from './BurgerMenu.styled';
import sprite from '../../images/icons.svg';
import SvgIcon from 'components/SvgIcon';
import './styles.css';

const BurgerMenu = ({ menuStatus, onClose }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <MenuBackdrop
      onClick={handleBackdropClick}
      className={`${menuStatus ? 'active' : 'not-active'}`}
    >
      <MenuContainer>
        <button type="button" onClick={() => onClose()}>
          <SvgIcon w={40} h={40} use={`${sprite}#icon-close-big`}></SvgIcon>
        </button>
      </MenuContainer>
    </MenuBackdrop>
  );
};

export default BurgerMenu;
