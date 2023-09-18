import Animation from 'components/Animation';
import Reveal from 'components/Reveal';
import SectionContainer from 'components/SectionContainer';
import TextAnimation from 'components/TextAnimation';
import { heroAnimatedText } from 'utils/heroAnimatedText';
import animation from '../../animations/heroAnimation2.json';
import {
  HeroContainer,
  HeroMainText,
  HeroTextContainer,
  SectionHero,
} from './Hero.styled';

const Hero = () => {
  return (
    <SectionHero id={'about'}>
      <SectionContainer>
        <Reveal>
          <HeroContainer>
            <HeroTextContainer>
              <HeroMainText>Hello, World</HeroMainText>
              <p>
                &#60;I'm <TextAnimation text={heroAnimatedText} />
              </p>
            </HeroTextContainer>
            <Animation animation={animation} />
          </HeroContainer>
        </Reveal>
      </SectionContainer>
    </SectionHero>
  );
};

export default Hero;
