import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const Project = styled.div`
  position: relative;
  border-radius: 12px;
  cursor: pointer;

  overflow: hidden;
  box-shadow: ${props => props.theme.colors.mainShadow};
  transition: transform ${baseTransition}, filter ${baseTransition};

  &:hover {
    transform: scale(1.05);
  }

  &:hover .overlay {
    transform: scale(1);
  }

  &:hover .thumb {
    filter: blur(4px);
  }

  /* @media screen and (${devices.nottabletanddesktop}) {
    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  } */
`;

export const ProjectThumb = styled.div`
  /* width: 100%;
  height: 100%; */

  height: 466px;

  @media screen and (${devices.onlymobile}) {
    height: 400px;
  }
  @media screen and (${devices.tablet}) {
    border-radius: 24px;
    height: 266px;
  }

  @media screen and (${devices.desktop}) {
    height: 320px;
  }
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
  padding: 12px;
  border-radius: 12px;
  transform: scale(0);
  transition: transform ${baseTransition};
  display: flex;
  flex-direction: column;

  @media screen and (${devices.onlymobile}) {
    padding: 8px;
  }

  @media screen and (${devices.tablet}) {
    padding: 8px 16px;
  }

  @media screen and (${devices.desktop}) {
    padding: 16px 24px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;

  @media screen and (${devices.onlymobile}) {
    margin-bottom: 2px;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 18px;
  display: flex;
  margin: auto 0;

  @media screen and (${devices.tablet}) {
    font-size: 18px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 32px;
  }
`;

export const ProjectStatus = styled.p`
  font-size: 14px;
  padding: 0 8px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 14px;
`;

export const ProjectDescr = styled.p`
  /* font-size: 13px !important; */

  /* @media screen and (${devices.desktop}) {
    font-size: 18px !important;
  } */
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: auto;

  @media screen and (${devices.nottabletanddesktop}) {
    justify-content: space-between;
  }

  /* @media screen and (${devices.onlymobile}) {
    margin-right: 0;
    gap: 4px;
  } */

  @media screen and (${devices.tablet}) {
    margin-right: 0;
    gap: 16px;
  }
`;

export const TechnologiesTitle = styled.p`
  font-size: 16px;
  margin-top: 8px;
  font-weight: 500;

  @media screen and (${devices.onlymobile}) {
    margin-top: 2px;
  }
`;

export const Technologies = styled.p`
  font-size: 13px;
  font-weight: 700;

  @media screen and (${devices.desktop}) {
    font-size: 16px;
  }
`;
