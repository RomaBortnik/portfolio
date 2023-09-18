import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const TopButton = styled.div`
  position: fixed;
  bottom: 48px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 60px;
  border-radius: 12px;
  font-size: 24px;
  background: ${props => props.theme.colors.accentTextColor};
  cursor: pointer;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity ${baseTransition};
  color: ${props => props.theme.colors.scrollTopIconFill};
  z-index: 999;

  @media screen and (${devices.tablet}) {
    width: 52px;
    height: 72px;
    right: 16px;
    border-radius: 14px;
  }

  @media screen and (${devices.desktop}) {
    bottom: 64px;
    right: 36px;
  }
`;
