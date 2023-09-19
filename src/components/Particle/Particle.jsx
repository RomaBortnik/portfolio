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
      options={particlesConfig(
        theme.colors.particlesColor,
        theme.colors.mainBackground
      )}
      init={particlesInit}
    />
  );
};

export default Particle;
