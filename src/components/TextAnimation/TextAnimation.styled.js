import styled from '@emotion/styled';
import { TypeAnimation } from 'react-type-animation';
import { devices } from 'styles';

export const AnimatedText = styled(TypeAnimation)`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Architects Daughter';
  margin-bottom: 12px;
  background: ${props => props.theme.colors.accentTextColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::after {
    content: '_';
    animation: cursor 1.1s infinite step-start;
  }

  @media screen and (${devices.onlymobile}) {
    font-size: 20px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 32px;
  }
`;
