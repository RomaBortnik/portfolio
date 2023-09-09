import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;
  background-color: ${props => props.theme.colors.headerBackground};
  display: grid;
  align-items: center;
  color: ${props => props.theme.colors.mainTextColor};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
