import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const MenuBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: width ${baseTransition}, opacity ${baseTransition};
  overflow: hidden;
  display: grid;
  grid-template-rows: 100%;

  &.active {
    width: 100%;
    opacity: 1;
    overflow: hidden;
  }
`;

export const MenuContainer = styled.div`
  margin-left: auto;
  width: 80%;
  height: 100vh;

  background-color: ${props => props.theme.colors.background};
  transition: transform ${baseTransition}, width ${baseTransition};

  @media screen and (${devices.tablet}) {
    display: none;
  }
`;
