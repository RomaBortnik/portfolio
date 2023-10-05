import styled from '@emotion/styled';
import { devices } from 'styles';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSlide = styled(SwiperSlide)``;

export const StyledSwiper = styled(Swiper)`
  width: 100% !important;
  height: 100% !important;
  padding: 24px 0 !important;

  @media screen and (${devices.desktop}) {
    display: none;
  }
`;
