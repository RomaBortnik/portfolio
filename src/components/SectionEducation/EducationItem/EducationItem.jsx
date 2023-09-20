import Reveal from 'components/Reveal';
import {
  Item,
  ItemContainer,
  Logo,
  Info,
  Title,
  Degree,
  Descr,
  DecorativeLine,
} from './EducationItem.styled';

const EducationItem = ({ education }) => {
  const { id, name, degree, period, logo, altText } = education;
  return (
    <Item>
      <Reveal>
        <ItemContainer>
          {id === 'goit' ? (
            <Logo src={logo} alt={altText} width="" height="" />
          ) : (
            <Logo
              className="nulp-logo"
              src={logo}
              alt={altText}
              width=""
              height=""
            />
          )}

          <Info>
            <Title>{name}</Title>
            <Degree>{degree}</Degree>
            <Descr>{period}</Descr>
          </Info>
        </ItemContainer>

        <DecorativeLine className="line" />
      </Reveal>
    </Item>
  );
};

export default EducationItem;
