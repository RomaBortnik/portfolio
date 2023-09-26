import styled from '@emotion/styled';
import { sizes, devices, baseTransition } from 'styles';

export const Section = styled.section`
  padding-top: 32px;

  @media screen and (${devices.tablet}) {
    padding-top: 60px;
  }

  @media screen and (${devices.desktop}) {
    padding-top: 80px;
  }
`;

export const SectionContainer = styled.div`
  padding: 0 8px;
  margin: 0 auto;
  width: 100%;
  @media screen and (${devices.mobile}) {
    width: ${sizes.mobile};
  }

  @media screen and (${devices.tablet}) {
    width: ${sizes.tablet};
    padding: 0 12px;
  }

  @media screen and (${devices.desktop}) {
    width: ${sizes.desktop};
    padding: 0 16px;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 64px;
  margin-bottom: 24px;
  background: ${props => props.theme.colors.accentTextColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (${devices.onlymobile}) {
    font-size: 52px;
  }

  @media screen and (${devices.tablet}) {
    text-align: left;
    padding-left: 24px;
  }

  @media screen and (${devices.desktop}) {
    padding-left: 48px;
  }
`;

export const Wrapper = styled.div`
  color: ${props => props.theme.colors.mainTextColor};
  transition: color ${baseTransition};
`;
