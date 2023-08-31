import HeroAnimation from 'components/HeroAnimation';
import Reveal from 'components/Reveal';
import SectionContainer from 'components/SectionContainer';
import TextAnimation from 'components/TextAnimation';
import heroAnimatedText from 'utils/heroAnimatedText';

const Hero = () => {
  return (
    <SectionContainer>
      <Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontSize: '64px' }}>Hello, World</p>
            <TextAnimation text={heroAnimatedText} fontSize={48} />
          </div>
          <HeroAnimation />
        </div>
      </Reveal>
    </SectionContainer>
  );
};

export default Hero;
