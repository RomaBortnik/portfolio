import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 40px;

    @media screen and (${devices.nottabletanddesktop}) {
      margin-bottom: 24px;
    }
  }

  &:hover .line {
    width: 100%;
    background: ${props => props.theme.colors.accentTextColor};
  }
`;

export const ItemContainer = styled.div`
  padding: 24px 12px 12px;

  @media screen and (${devices.nottabletanddesktop}) {
    padding: 12px 8px 8px;
    margin-bottom: 4px;
  }

  @media screen and (${devices.tablet}) {
    display: grid;
    align-items: center;
    grid-template-columns: 20% 80%;
    margin-bottom: 12px;
  }

  @media screen and (${devices.desktop}) {
    grid-template-columns: 30% 70%;
  }
`;

export const Logo = styled.img`
  @media screen and (${devices.nottabletanddesktop}) {
    max-width: 45%;
    margin: 0 auto 24px;
  }

  @media screen and (${devices.tablet}) {
    height: auto;
    margin: 0 auto;
  }

  @media screen and (${devices.desktop}) {
    max-width: 50%;
  }

  &.nulp-logo {
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    @media screen and (${devices.tablet}) {
      border-top-left-radius: 80px;
      border-top-right-radius: 80px;
      border-bottom-left-radius: 60px;
      border-bottom-right-radius: 60px;
    }
  }
`;

export const Info = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: 1.12;
  margin-bottom: 12px;

  @media screen and (${devices.onlymobile}) {
    font-size: 28px;
    margin-bottom: 4px;
  }

  @media screen and (${devices.tablet}) {
    font-size: 32px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 38px;
    margin-bottom: 16px;
  }
`;

export const Degree = styled.p`
  font-size: 24px;
  line-height: 1.12;
  margin-bottom: 24px;

  @media screen and (${devices.onlymobile}) {
    font-size: 22px;
    margin-bottom: 4px;
  }

  @media screen and (${devices.tablet}) {
    font-size: 26px;
    margin-bottom: 12px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 26px;
    margin-bottom: 12px;
  }
`;

export const Descr = styled.p`
  font-size: 18px;
  line-height: 1.12;
  color: grey;

  @media screen and (${devices.onlymobile}) {
    font-size: 18px;
  }

  @media screen and (${devices.tablet}) {
    font-size: 20px;
  }
`;

export const DecorativeLine = styled.div`
  margin: 0 auto;
  height: 2px;
  width: 75%;
  background-color: grey;
  transition: width ${baseTransition}, background ${baseTransition};
`;
