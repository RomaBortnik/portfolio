import NU_LP_IMAGE from '../../images/NULP_LOGO_ENG.jpg';
import GO_IT_IMAGE from '../../images/GO_IT_LOGO.png';
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
  const { name, degree, period, logo, altText } = education;
  return (
    <Item>
      <ItemContainer>
        {logo === 'goit' ? (
          <Logo src={GO_IT_IMAGE} alt={altText} />
        ) : (
          <Logo className="nulp-logo" src={NU_LP_IMAGE} alt={altText} />
        )}

        <Info>
          <Title>{name}</Title>
          <Degree>{degree}</Degree>
          <Descr>{period}</Descr>
        </Info>
      </ItemContainer>
      <DecorativeLine className="line" />
    </Item>
  );
};

export default EducationItem;
