import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const Project = styled.li`
  position: relative;
  cursor: pointer;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: transform ${baseTransition};

  &:hover {
    transform: scale(1.05);
  }

  &:hover .overlay {
    transform: scale(1);
  }

  &:hover .thumb {
    filter: blur(3px);
  }
`;

export const ProjectThumb = styled.div`
  width: 100%;
  height: 100%;
  transition: filter ${baseTransition};
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  padding: 40px;
  font-size: 24px;
  transform: scale(0);
  transition: transform ${baseTransition};
`;
