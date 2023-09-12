import { useState } from 'react';
import { useEffect } from 'react';
import { TopButton } from './ScrollTopButton.styled';
import SvgIcon from 'components/SvgIcon';
import sprite from '../../images/icons.svg';

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
    });
  };
  return (
    <TopButton isVisible={isVisible} onClick={handleClick} style={{}}>
      <SvgIcon
        style={{ fill: 'black' }}
        w={40}
        h={40}
        use={`${sprite}#icon-hand-up`}
      />
    </TopButton>
  );
};

export default ScrollTopButton;
