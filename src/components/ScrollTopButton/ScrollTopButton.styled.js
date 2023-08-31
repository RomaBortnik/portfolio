import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const TopButton = styled.div`
  background-color: blueviolet;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: fixed;
  bottom: 60px;
  right: 36px;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity ${baseTransition};
`;
