import animation from '../../animations/heroAnimation2.json';
import Lottie from 'lottie-react';

const HeroAnimation = () => {
  return <Lottie animationData={animation} loop />;
};

export default HeroAnimation;
