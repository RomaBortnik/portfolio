import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const FooterLinkListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.footerElementsBgd};
  padding: 10px;
  cursor: pointer;
  transition: transform ${baseTransition}, background-color ${baseTransition};

  &:hover {
    transform: scale(1.15);
    background-color: ${props => props.theme.colors.footerElementsHover};
  }
`;

export const FooterLinkListRef = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;
