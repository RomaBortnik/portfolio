import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
import particlesConfig from './config';

const Particle = ({ theme }) => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={
        theme.name === 'dark'
          ? particlesConfig('#fff', '#232741')
          : particlesConfig('#000', '#fff')
      }
      init={particlesInit}
    />
  );
};

export default Particle;
