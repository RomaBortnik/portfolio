import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 80px;
  }

  &:hover .line {
    width: 100%;
    background: ${props => props.theme.colors.accentTextColor};
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const Logo = styled.img`
  width: 360px;
  height: auto;

  &.nulp-logo {
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
`;

export const Info = styled.div`
  text-align: center;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const Degree = styled.p`
  font-size: 32px;
  margin-bottom: 12px;
`;

export const Descr = styled.p`
  font-size: 24px;
  color: grey;
`;

export const DecorativeLine = styled.div`
  margin: 0 auto;
  height: 2px;
  width: 75%;
  background-color: grey;
  transition: width ${baseTransition}, background ${baseTransition};
`;
