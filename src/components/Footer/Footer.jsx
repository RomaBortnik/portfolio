import SectionContainer from 'components/SectionContainer';
import SvgIcon from 'components/SvgIcon';
import FooterLinkItem from './FooterLinkItem';
import sprite from '../../images/icons.svg';
import { links } from 'utils/links';
import {
  CopyrightContainer,
  CopyrightText,
  EmploymentLocation,
  EmploymentOptions,
  EmploymentText,
  FooterContainer,
  FooterLinkList,
  StyledFooter,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter id={'contacts'}>
      <SectionContainer>
        <FooterContainer>
          <EmploymentOptions>
            <SvgIcon w={32} h={32} use={`${sprite}#icon-location`}></SvgIcon>
            <div>
              <EmploymentLocation>Lviv, Ukraine</EmploymentLocation>
              <EmploymentText>
                Remote / Office / Part-time / Freelance &#40;one-time
                projects&#41;
              </EmploymentText>
            </div>
          </EmploymentOptions>
          <div>
            <FooterLinkList>
              {links.map(link => (
                <FooterLinkItem key={link.id} linkItem={link}></FooterLinkItem>
              ))}
            </FooterLinkList>
            <CopyrightContainer>
              <CopyrightText>&#169; 2023 Portfolio</CopyrightText>
              <CopyrightText>Built by Roman Bortnik</CopyrightText>
            </CopyrightContainer>
          </div>
        </FooterContainer>
      </SectionContainer>
    </StyledFooter>
  );
};

export default Footer;
