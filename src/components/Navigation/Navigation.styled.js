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
    gap: 3vw;
    margin-left: auto;
  }

  @media screen and (${devices.desktop}) {
    gap: 80px;
  }
`;

export const NavListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::after {
    position: absolute;
    bottom: 0;
    content: '';
    display: inline-block;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.accentTextColor};
    transform: translateX(-100%);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    transform: translateX(0);
  }

  @media screen and (${devices.nottabletanddesktop}) {
    font-size: 36px;
  }
  @media screen and (${devices.tablet}) {
    justify-content: center;
    font-size: 18px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 26px;
  }

  @media screen and (max-height: 414px) and (${devices.nottabletanddesktop}) {
    font-size: 24px;
  }
`;
