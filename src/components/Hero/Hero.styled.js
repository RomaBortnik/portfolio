import styled from '@emotion/styled';
import { devices } from 'styles';

export const SectionHero = styled.section`
  padding-top: 40px;

  @media screen and (${devices.desktop}) {
    padding-top: 0;
  }
`;

export const HeroContainer = styled.ul`
  font-family: 'Architects Daughter';

  @media screen and (${devices.tablet}) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 28px;

  @media screen and (${devices.tablet}) {
    font-size: 28px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 44px;
  }
`;

export const HeroMainText = styled.p`
  font-size: 60px;
  line-height: 1.12;
  margin-bottom: 12px;

  @media screen and (${devices.tablet}) {
    font-size: 54px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 72px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

export const HeroDescr = styled.p`
  font-size: 26px;

  @media screen and (${devices.tablet}) {
    font-size: 22px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 32px;
  }
`;

export const AccentText = styled.span`
  /* background: ${props => props.theme.colors.accentTextColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  text-decoration: underline;
`;
