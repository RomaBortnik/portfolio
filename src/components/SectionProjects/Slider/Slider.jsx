import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';

import ProjectItem from '../ProjectItem';
import { StyledSwiper, StyledSlide } from './Slider.styled';
import { projects } from 'utils/projects';

const Slider = () => {
  return (
    <StyledSwiper
      modules={[Autoplay]}
      autoplay={{ delay: 6000, pauseOnMouseEnter: true }}
      slidesPerView={1.5}
      spaceBetween={36}
      centeredSlides={true}
      loop={true}
      speed={1500}
    >
      {projects.map(project => (
        <StyledSlide key={project.id}>
          <ProjectItem project={project}></ProjectItem>
        </StyledSlide>
      ))}
    </StyledSwiper>
  );
};

export default Slider;
