import {
  CloseBtn,
  FlexContainer,
  MenuBackdrop,
  MenuContainer,
} from './BurgerMenu.styled';
import sprite from '../../images/icons.svg';
import SvgIcon from 'components/SvgIcon';
import Navigation from 'components/Navigation';
import ThemeSwitcher from 'components/ThemeSwitcher';

const BurgerMenu = ({ menuStatus, onClose, onThemeChange }) => {
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
        <FlexContainer>
          <ThemeSwitcher onThemeChange={onThemeChange} />
          <CloseBtn type="button" onClick={() => onClose()}>
            <SvgIcon w={40} h={40} use={`${sprite}#icon-close-big`}></SvgIcon>
          </CloseBtn>
        </FlexContainer>
        <nav>
          <Navigation onClose={onClose}></Navigation>
        </nav>
      </MenuContainer>
    </MenuBackdrop>
  );
};

export default BurgerMenu;
