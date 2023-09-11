import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 100vh;
  z-index: 1000;
  transform: translateX(100%);
  background-color: ${props => props.theme.colors.background};
  transition: transform ${baseTransition}, width ${baseTransition};
  transform: scale(0);

  &.active {
    transform: translateX(0);
    width: 80vw;
  }

  @media screen and (${devices.tablet}) {
    display: none;
  }
`;
