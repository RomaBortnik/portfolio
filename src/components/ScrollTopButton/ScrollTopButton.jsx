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
    <TopButton
      type="button"
      name="scroll-top"
      alt="scroll"
      isVisible={isVisible}
      onClick={handleClick}
    >
      <SvgIcon w={32} h={32} use={`${sprite}#icon-hand-up`} />
    </TopButton>
  );
};

export default ScrollTopButton;
