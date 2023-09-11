import ThemeSwitcher from 'components/ThemeSwitcher';
import Headroom from 'react-headroom';
import SectionContainer from 'components/SectionContainer';
import { StyledHeader } from './Header.styled';
import SvgIcon from 'components/SvgIcon';
import sprite from '../../images/icons.svg';
import { useEffect, useState } from 'react';
import { sizes } from 'styles';
import BurgerMenu from 'components/BurgerMenu';

const Header = ({ onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth);
    return () => window.removeEventListener('resize', handleScreenWidth);
  }, [screenWidth]);

  const handleScreenWidth = event => {
    const viewportWidth = parseInt(event.target.innerWidth);
    if (viewportWidth >= parseInt(sizes.tablet)) {
      setIsMenuOpen(false);
    }
    setScreenWidth(viewportWidth);
  };

  const toggleMenu = () => {
    document.querySelector('body').classList.toggle('backdrop');
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Headroom style={{ zIndex: 999 }}>
        <StyledHeader>
          <SectionContainer>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <a href="/" style={{ fontSize: 28 }}>
                Logo
              </a>
              {screenWidth >= parseInt(sizes.tablet) ? (
                <ul
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    fontSize: 20,
                    width: '70%',
                    marginLeft: 'auto',
                  }}
                >
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <a href="#education">Education</a>
                  </li>
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <a href="#experience">Experience</a>
                  </li>
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <a href="#projects">Projects</a>
                  </li>
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ThemeSwitcher onThemeChange={onThemeChange} />
                  </li>
                </ul>
              ) : (
                <>
                  <button
                    style={{
                      marginLeft: 'auto',
                    }}
                    type="button"
                    onClick={toggleMenu}
                  >
                    <SvgIcon
                      w={40}
                      h={40}
                      use={`${sprite}#icon-menu`}
                    ></SvgIcon>
                  </button>
                </>
              )}
            </div>
          </SectionContainer>
        </StyledHeader>
      </Headroom>
      <BurgerMenu menuStatus={isMenuOpen} onClose={toggleMenu}></BurgerMenu>
    </>
  );
};

export default Header;
