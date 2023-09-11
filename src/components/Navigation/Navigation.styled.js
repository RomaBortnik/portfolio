import styled from '@emotion/styled';
import { devices } from 'styles';

export const NavList = styled.ul`
  @media screen and (${devices.nottabletanddesktop}) {
    display: grid;
    grid-template-rows: 15vh 15vh 15vh 15vh 20vh;
    height: 100vh;
  }

  @media screen and (${devices.tablet}) {
    display: flex;
    gap: 36px;
    font-size: 20px;
    margin-left: auto;
  }

  @media screen and (${devices.desktop}) {
    gap: 80px;
    font-size: 24px;
  }
`;

export const NavListItem = styled.li`
  @media screen and (${devices.nottabletanddesktop}) {
    display: flex;
    align-items: center;
    font-size: 32px;

    &:last-of-type {
      align-items: flex-end;
      margin-left: auto;
    }
  }
  @media screen and (${devices.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
