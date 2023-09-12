import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const TopButton = styled.div`
  position: fixed;
  bottom: 48px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 80px;
  border-radius: 18px;
  font-size: 24px;
  background: ${props => props.theme.colors.accentTextColor};
  cursor: pointer;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity ${baseTransition};
  color: ${props => props.theme.colors.scrollTopIconFill};
  z-index: 999;

  @media screen and (${devices.desktop}) {
    bottom: 64px;
    right: 48px;
  }
`;
