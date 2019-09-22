import React from 'react';
import { useSelector } from 'react-redux';
import ReactParticles from 'react-particles-js';

import { ITheme } from '../../utils/primary_interfaces/theme.interface';

interface ParticleProps {
  style?: object;
}

const Particles: React.FC<ParticleProps> = props => {
  /** Redux Selectors */
  const currentTheme: ITheme = useSelector(
    (state: any) => state.themes.currentTheme,
  );
  /** End of Redux Selectors */

  const particleParams = {
    particles: {
      number: {
        value: 80,
      },
    },
  };

  const styles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: -1,
    backgroundColor: currentTheme.secondary || 'white',
    width: '100vw',
    ...props.style,
  };

  return (
    <>
      <ReactParticles params={particleParams} style={styles} />
    </>
  );
};

export default Particles;
