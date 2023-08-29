import { TypeAnimation } from 'react-type-animation';
import Lottie from 'lottie-react';
import animation from '../animations/heroAnimation.json';
import Reveal from './Reveal';

export const App = () => {
  return (
    <Reveal>
      <div
        style={{
          display: 'flex',
          paddingLeft: 120,
        }}
      >
        <div style={{ paddingTop: 200 }}>
          <p style={{ fontSize: '64px' }}>Hello, Kotuuuuuzka</p>
          <TypeAnimation
            sequence={[
              "I'm Romko",
              1000,
              "I'm Kotichok",
              1000,
              "I'm Kotuuuuzyk",
              1000,
              "I'm murko-burko",
              1000,
              "I'm Kotuskin",
              1000,
              "I'm vovtuuuuzyyyyyk",
              1000,
            ]}
            speed={10}
            repeat={Infinity}
            style={{ fontSize: 48 }}
          />
        </div>
        <Lottie
          style={{
            position: 'absolute',
            right: 100,
            top: 0,
            width: 700,
          }}
          animationData={animation}
          loop={true}
        />
      </div>
    </Reveal>
  );
};
