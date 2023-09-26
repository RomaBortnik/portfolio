import Animation from 'components/Animation';
import Reveal from 'components/Reveal';
import { SectionContainer } from 'components/App.styled';
import TextAnimation from 'components/TextAnimation';
import { heroAnimatedText } from 'utils/heroAnimatedText';
import animation from '../../animations/heroAnimation2.json';
import {
  AccentText,
  HeroContainer,
  HeroDescr,
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
              <HeroMainText>Hello, I'm Roma</HeroMainText>
              <HeroDescr>My technical expertise includes:</HeroDescr>
              <TextAnimation text={heroAnimatedText} />
              <HeroDescr>
                I'm always looking to expand my network and connect with
                like-minded professionals, so please feel free to reach out and{' '}
                <AccentText>
                  <a href="#contacts">say hello!</a>
                </AccentText>
              </HeroDescr>
            </HeroTextContainer>

            <Animation animation={animation} />
          </HeroContainer>
        </Reveal>
      </SectionContainer>
    </SectionHero>
  );
};

export default Hero;
