import { AnimatedText } from './TextAnimation.styled';
import './styles.css';

const TextAnimation = ({ text }) => {
  return (
    <AnimatedText
      sequence={text}
      speed={20}
      repeat={Infinity}
      className="type"
      cursor={true}
    />
  );
};

export default TextAnimation;
