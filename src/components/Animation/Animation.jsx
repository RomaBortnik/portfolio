import Lottie from 'lottie-react';

const Animation = ({ animation, width = '100%' }) => {
  return <Lottie style={{ width }} animationData={animation} loop />;
};

export default Animation;
