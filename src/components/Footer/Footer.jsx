import SectionContainer from 'components/SectionContainer';
import SvgIcon from 'components/SvgIcon';
import sprite from '../../images/icons.svg';
import { links } from 'utils/links';
import {
  EmploymentOptions,
  FooterContainer,
  FooterLinkList,
  FooterLinkListItem,
  FooterLinkListRef,
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
              <p style={{ fontSize: 24 }}>Lviv, Ukraine</p>
              <p style={{ fontSize: 18 }}>
                Remote / Office / Part-time / Freelance &#40;one-time
                projects&#41;
              </p>
            </div>
          </EmploymentOptions>
          <div>
            <FooterLinkList>
              {links.map(({ link, id, icon, name }) => (
                <FooterLinkListItem key={id} title={name}>
                  <FooterLinkListRef
                    href={link}
                    target={name === 'Gmail' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                  >
                    <SvgIcon w={24} h={24} use={icon} />
                  </FooterLinkListRef>
                </FooterLinkListItem>
              ))}
            </FooterLinkList>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 48,
              }}
            >
              <p>&#169; 2023 Portfolio</p>
              <p>Built by Roman Bortnik</p>
            </div>
          </div>
        </FooterContainer>
      </SectionContainer>
    </StyledFooter>
  );
};

export default Footer;
