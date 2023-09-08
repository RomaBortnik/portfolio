import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const Project = styled.li`
  position: relative;
  height: 100%;
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
    filter: blur(4px);
  }

  @media screen and (${devices.nottabletanddesktop}) {
    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
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
  background-color: ${props => props.theme.colors.projectOverlayBgd};
  color: #fff;
  text-align: justify;
  padding: 24px 24px 12px 24px;
  font-size: 20px;
  border-radius: 24px;
  transform: scale(0);
  transition: transform ${baseTransition};
  font-family: 'Architects Daughter';
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 12px;
`;

export const LinkList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 18px;
  margin-top: auto;
  width: 60%;
`;
