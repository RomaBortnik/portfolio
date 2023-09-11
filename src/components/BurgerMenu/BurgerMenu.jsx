import { CloseBtn, MenuBackdrop, MenuContainer } from './BurgerMenu.styled';
import sprite from '../../images/icons.svg';
import SvgIcon from 'components/SvgIcon';

const BurgerMenu = ({ menuStatus, onClose, children }) => {
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
        <CloseBtn type="button" onClick={() => onClose()}>
          <SvgIcon w={48} h={48} use={`${sprite}#icon-close-big`}></SvgIcon>
        </CloseBtn>
        {children}
      </MenuContainer>
    </MenuBackdrop>
  );
};

export default BurgerMenu;
