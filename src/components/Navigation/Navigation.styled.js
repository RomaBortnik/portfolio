import styled from '@emotion/styled';
import { devices } from 'styles';

export const NavList = styled.ul`
  @media screen and (${devices.nottabletanddesktop}) {
    display: grid;
    grid-template-rows: 15vh 15vh 15vh 15vh 15vh;
    height: 100vh;
  }

  @media screen and (${devices.tablet}) {
    display: flex;
    gap: 36px;
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
    font-size: 32px;

    &:last-of-type {
      align-items: flex-end;
      margin-left: auto;
    }
  }
  @media screen and (${devices.tablet}) {
    justify-content: center;
    font-size: 20px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 26px;
  }

  @media screen and (max-height: 375px) {
    font-size: 20px;
  }
`;
