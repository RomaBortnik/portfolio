import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const TopButton = styled.div`
  position: fixed;
  bottom: 60px;
  right: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 24px;
  color: #fff;
  background: ${props => props.theme.colors.accentTextColor};
  cursor: pointer;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity ${baseTransition};
`;

// background: #22c1c3;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #fdbb2d, #22c1c3);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #fdbb2d, #22c1c3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
