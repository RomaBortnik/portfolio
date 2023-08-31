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
import { STORAGE_KEY } from './ThemeSwitcher/ThemeSwitcher';

export const App = () => {
  const [currentTheme] = useState(() => {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (value) {
      return value === 'dark' ? { ...theme.dark } : { ...theme.light };
    } else {
      return { ...theme.dark };
    }
  });

  return (
    <ThemeProvider theme={currentTheme}>
      <StyledWrapper>
        <Header />
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
