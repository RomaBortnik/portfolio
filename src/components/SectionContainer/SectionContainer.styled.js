import styled from '@emotion/styled';
import { sizes, devices } from 'styles';

export const Container = styled.div`
  padding: 0 12px;
  margin: 0 auto;

  @media screen and (${devices.mobile}) {
    width: ${sizes.mobile};
  }

  @media screen and (${devices.tablet}) {
    width: ${sizes.tablet};
  }

  @media screen and (${devices.desktop}) {
    width: ${sizes.desktop};
  }
`;
