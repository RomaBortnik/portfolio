import ThemeSwitcher from 'components/ThemeSwitcher';
import Headroom from 'react-headroom';
import SectionContainer from 'components/SectionContainer';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <Headroom>
      <StyledHeader>
        <SectionContainer>
          <ul
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
            }}
          >
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <a href="#about">About</a>
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
              <a href="#contacts">Contacts</a>
            </li>
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ThemeSwitcher />
            </li>
          </ul>
        </SectionContainer>
      </StyledHeader>
    </Headroom>
  );
};

export default Header;
