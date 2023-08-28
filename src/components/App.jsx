import { TypeAnimation } from 'react-type-animation';

export const App = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <TypeAnimation
        sequence={[
          "I'm a Romko",
          1000,
          "I'm a Kotichok",
          1000,
          "I'm a Kotuuuuzyk",
          1000,
        ]}
        speed={10}
        repeat={Infinity}
        style={{ fontSize: 48 }}
      />
    </div>
  );
};
