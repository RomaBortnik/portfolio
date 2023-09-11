import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const MenuBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  grid-template-rows: 100%;
  transition: width ${baseTransition};

  &.active {
    width: 100%;
  }
`;

export const MenuContainer = styled.div`
  padding: 24px;
  margin-left: auto;
  width: 75%;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  transition: background-color ${baseTransition}, width ${baseTransition};
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;
