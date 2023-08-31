import { useState } from 'react';
import { useEffect } from 'react';
import { TopButton } from './ScrollTopButton.styled';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <TopButton isVisible={isVisible} onClick={handleClick} style={{}}>
      Top
    </TopButton>
  );
};

export default ScrollTopButton;
