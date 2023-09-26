import styled from '@emotion/styled';
import { devices } from 'styles';

export const ProjectList = styled.ul`
  @media screen and (${devices.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 32px;
  }

  @media screen and (${devices.desktop}) {
    grid-column-gap: 60px;
    grid-row-gap: 48px;
  }
`;

export const ProjectListContainer = styled.div`
  display: none;
  @media screen and (${devices.desktop}) {
    display: block;
  }
`;
