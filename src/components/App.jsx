import Header from './Header';
import SectionEducation from './SectionEducation';
import SectionSkills from './SectionSkills';
import Hero from './Hero';
import SectionProjects from './SectionProjects';
import ScrollTopButton from './ScrollTopButton';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { theme } from 'styles';
import { STORAGE_KEY } from './ThemeSwitcher/ThemeSwitcher';
import Particle from './Particle';
import Footer from './Footer';
import { Wrapper } from './App.styled';

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return value ? { ...theme[value] } : { ...theme.dark };
  });

  const handleTheme = value => {
    value === 'dark'
      ? setCurrentTheme({ ...theme.dark })
      : setCurrentTheme({ ...theme.light });
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Wrapper>
        <Header onThemeChange={handleTheme} />
        <main>
          <Particle theme={currentTheme}></Particle>
          <Hero />
          <SectionEducation />
          <SectionSkills />
          <SectionProjects />
          <ScrollTopButton />
        </main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};
