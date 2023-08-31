import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;
  background-color: ${props => props.theme.colors.headerBackground};
  display: grid;
  align-items: center;
  color: ${props => props.theme.colors.mainTextColor};
`;
