import styled from '@emotion/styled';
import { devices } from 'styles';

export const NavList = styled.ul`
  @media screen and (${devices.nottabletanddesktop}) {
    display: grid;
    height: 60vh;
  }

  @media screen and (max-height: 414px) {
    height: 70vh;
  }

  @media screen and (${devices.tablet}) {
    display: flex;
    gap: 5vw;
    margin-left: auto;
  }

  @media screen and (${devices.desktop}) {
    gap: 80px;
  }
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;

  @media screen and (${devices.nottabletanddesktop}) {
    font-size: 36px;
  }
  @media screen and (${devices.tablet}) {
    justify-content: center;
    font-size: 20px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 26px;
  }

  @media screen and (max-height: 414px) and (${devices.nottabletanddesktop}) {
    font-size: 28px;
  }
`;
