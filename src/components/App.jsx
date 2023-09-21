import Header from './Header';
import SectionEducation from './SectionEducation';
import SectionSkills from './SectionSkills';
import Hero from './Hero';
import SectionProjects from './SectionProjects';
import ScrollTopButton from './ScrollTopButton';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { theme } from 'styles';
import { StyledWrapper } from './Wrapper/Wrapper.styled';
import { STORAGE_KEY } from './ThemeSwitcher/ThemeSwitcher';
import Particle from './Particle';
import Footer from './Footer';
// import Loader from './Loader';

export const App = () => {
  // const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(() => {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return value ? { ...theme[value] } : { ...theme.dark };
  });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoaderVisible(false);
  //   }, 800);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleTheme = value => {
    value === 'dark'
      ? setCurrentTheme({ ...theme.dark })
      : setCurrentTheme({ ...theme.light });
  };

  return (
    <ThemeProvider theme={currentTheme}>
      {/* {isLoaderVisible && <Loader />} */}
      <StyledWrapper>
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
      </StyledWrapper>
    </ThemeProvider>
  );
};
