import Header from './Header';
import SectionAbout from './SectionAbout';
import SectionExperience from './SectionExperience';
import Hero from './Hero';
import SectionProjects from './SectionProjects';
import SectionContacts from './SectionContacts';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <SectionAbout />
      <SectionExperience />
      <SectionProjects />
      <SectionContacts />
    </>
  );
};
