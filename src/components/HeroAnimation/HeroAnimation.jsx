import animation from '../../animations/heroAnimation.json';
import Lottie from 'lottie-react';

const HeroAnimation = () => {
  return (
    <Lottie
      style={{
        position: 'absolute',
        right: 100,
        top: 0,
        width: 700,
      }}
      animationData={animation}
      loop
    />
  );
};

export default HeroAnimation;
