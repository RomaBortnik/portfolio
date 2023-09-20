import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform ${baseTransition};

  &:hover {
    transform: scale(1.2);
  }
`;
