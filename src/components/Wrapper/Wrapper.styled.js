import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${props => {
    console.log(props.theme);
    return props.theme.colors.background;
  }};
  color: ${props => props.theme.colors.mainTextColor};
`;
