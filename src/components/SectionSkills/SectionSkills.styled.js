import styled from '@emotion/styled';
import { devices } from 'styles';

export const SkillList = styled.ul`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  margin-bottom: 24px;

  @media screen and (${devices.tablet}) {
    display: flex;
    justify-content: space-around;
    margin-bottom: 24px;
  }

  @media screen and (${devices.desktop}) {
    justify-content: center;
    gap: 32px;
  }
`;

export const TextContainer = styled.div`
  height: 120px;
  text-align: center;
  font-size: 28px;

  @media screen and (${devices.onlymobile}) {
    font-size: 24px;
    height: 132px;
  }

  @media screen and (${devices.tablet}) {
    font-size: 36px;
    height: 104px;
  }

  @media screen and (${devices.desktop}) {
    height: auto;
  }
`;
