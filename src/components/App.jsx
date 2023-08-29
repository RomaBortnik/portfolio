import { TypeAnimation } from 'react-type-animation';
import Lottie from 'lottie-react';
import animation from './Animation.json';
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
        <div style={{}}>
          <p style={{ fontSize: '64px', marginTop: 200 }}>Hello, Kotuuuuuzka</p>
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
            width: 600,
          }}
          animationData={animation}
          loop={true}
        />
      </div>
    </Reveal>
  );
};
