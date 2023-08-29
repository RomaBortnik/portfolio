import Reveal from './Reveal';
import TextAnimation from './TextAnimation/TextAnimation';
import HeroAnimation from './HeroAnimation';
import heroAnimatedText from 'utils/heroAnimatedText';

export const App = () => {
  return (
    <>
      <Reveal>
        <div
          style={{
            display: 'flex',
            paddingLeft: 120,
          }}
        >
          <div style={{ marginTop: 200 }}>
            <p style={{ fontSize: '64px' }}>Hello, Kotuuuuuzka</p>
            <TextAnimation text={heroAnimatedText} fontSize={48} />
          </div>
          <HeroAnimation />
        </div>
      </Reveal>
    </>
  );
};
