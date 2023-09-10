import ThemeSwitcher from 'components/ThemeSwitcher';
import Headroom from 'react-headroom';
import SectionContainer from 'components/SectionContainer';
import { StyledHeader } from './Header.styled';

const Header = ({ onThemeChange }) => {
  return (
    <Headroom style={{ zIndex: 999 }}>
      <StyledHeader>
        <SectionContainer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <a href="/" style={{ fontSize: 28 }}>
              Logo
            </a>
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
              {/* <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <a href="#experience">Experience</a>
              </li> */}
              {/* <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <a href="#projects">Projects</a>
              </li> */}
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <a href="#contacts">Contacts</a>
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
          </div>
        </SectionContainer>
      </StyledHeader>
    </Headroom>
  );
};

export default Header;
