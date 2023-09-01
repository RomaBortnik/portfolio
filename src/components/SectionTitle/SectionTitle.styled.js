import styled from '@emotion/styled';

export const StyledTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 24px;
  padding-left: 24px;
  background: ${props => props.theme.colors.accentTextColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
