import styled from '@emotion/styled';
import { devices } from 'styles';

export const ExperienceContainer = styled.div`
  @media screen and (${devices.tablet}) {
    display: grid;
    align-items: center;
    grid-template-columns: 0.6fr 1fr;
    gap: 36px;
  }

  @media screen and (${devices.desktop}) {
    gap: 60px;
  }
`;

export const ExperienceInfo = styled.div`
  @media screen and (${devices.nottabletanddesktop}) {
    margin-bottom: 24px;
  }
`;

export const ExperienceStatus = styled.p`
  font-size: 32px;
  text-align: center;
  color: grey;

  @media screen and (${devices.tablet}) {
    font-size: 36px;
  }
`;

export const GoITLogo = styled.img`
  width: 100%;
  margin-bottom: 8px;

  @media screen and (${devices.tablet}) {
    /* width: 65%; */
    margin: 0 auto 16px;
  }
`;

export const ExperienceList = styled.ul`
  text-align: justify;
`;

export const ExperienceListItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
  font-size: 20px;
  list-style: inside;

  @media screen and (${devices.tablet}) {
    font-size: 22px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 28px;
  }
`;
