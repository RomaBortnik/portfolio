import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.mainTextColor};
  transition: background-color ${baseTransition}, color ${baseTransition};
`;
