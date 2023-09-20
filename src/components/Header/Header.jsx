import Headroom from 'react-headroom';
import SectionContainer from 'components/SectionContainer';
import SvgIcon from 'components/SvgIcon';
import sprite from '../../images/icons.svg';
import { useEffect, useState } from 'react';
import { sizes } from 'styles';
import BurgerMenu from 'components/BurgerMenu';
import Navigation from 'components/Navigation';
import ThemeSwitcher from 'components/ThemeSwitcher';
import {
  HeaderContainer,
  HeaderFlexContainer,
  Logo,
  MenuBtn,
  StyledHeader,
} from './Header.styled';

const Header = ({ onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const body = document.querySelector('body');

  useEffect(() => {
    const handleScreenWidth = event => {
      const viewportWidth = parseInt(event.target.innerWidth);
      if (viewportWidth >= parseInt(sizes.tablet)) {
        setIsMenuOpen(false);
      }
      if (
        viewportWidth >= parseInt(sizes.tablet) &&
        body.classList.contains('backdrop')
      ) {
        body.classList.remove('backdrop');
      }
    };
    window.addEventListener('resize', handleScreenWidth);
    return () => window.removeEventListener('resize', handleScreenWidth);
  }, [body.classList]);

  const toggleMenu = () => {
    body.classList.toggle('backdrop');
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Headroom style={{ zIndex: 999 }}>
        <StyledHeader>
          <SectionContainer>
            <HeaderContainer>
              <Logo href="/">&lt;Logo&gt;</Logo>

              <HeaderFlexContainer>
                <nav>
                  <Navigation />
                </nav>
                <ThemeSwitcher onThemeChange={onThemeChange} />
              </HeaderFlexContainer>

              <MenuBtn
                alt="open"
                aria-label="open-menu"
                type="button"
                onClick={toggleMenu}
              >
                <SvgIcon w={40} h={40} use={`${sprite}#icon-menu`}></SvgIcon>
              </MenuBtn>
            </HeaderContainer>
          </SectionContainer>
        </StyledHeader>
      </Headroom>

      <BurgerMenu
        onThemeChange={onThemeChange}
        menuStatus={isMenuOpen}
        onClose={toggleMenu}
      ></BurgerMenu>
    </>
  );
};

export default Header;
