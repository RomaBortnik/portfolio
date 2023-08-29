import { TypeAnimation } from 'react-type-animation';

const TextAnimation = ({ text, fontSize }) => {
  return (
    <TypeAnimation
      sequence={text}
      speed={10}
      repeat={Infinity}
      style={{ fontSize }}
    />
  );
};

export default TextAnimation;
