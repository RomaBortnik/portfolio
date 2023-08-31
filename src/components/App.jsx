import Header from './Header';
import SectionAbout from './SectionAbout';
import SectionExperience from './SectionExperience';
import Hero from './Hero';
import SectionProjects from './SectionProjects';
import SectionContacts from './SectionContacts';
import ScrollTopButton from './ScrollTopButton';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { theme } from 'styles';
import { StyledWrapper } from './Wrapper/Wrapper.styled';

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState({ ...theme.light });
  const onThemeChange = value => {
    value
      ? setCurrentTheme({ ...theme.dark })
      : setCurrentTheme({ ...theme.light });
  };
  console.log(currentTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <StyledWrapper>
        <Header onThemeChange={onThemeChange} />
        <Hero />
        <SectionAbout />
        <SectionExperience />
        <SectionProjects />
        <SectionContacts />
        <ScrollTopButton />
      </StyledWrapper>
    </ThemeProvider>
  );
};
