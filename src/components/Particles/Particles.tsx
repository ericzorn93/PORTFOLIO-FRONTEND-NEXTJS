import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ReactParticles from 'react-particles-js';

import { ITheme } from '../../utils/primary_interfaces/theme.interface';

interface ParticleProps {}

const Particles: React.FC<ParticleProps> = props => {
  /** Redux Selectors */
  const currentTheme: ITheme = useSelector(
    (state: any) => state.themes.currentTheme
  );
  /** End of Redux Selectors */

  const particleParams = {
    particles: {
      number: {
        value: 80,
      },
      line_linked: {
        shadow: {
          enable: true,
          color: '#3CA9D1',
          blur: 5,
        },
      },
    },
    interactivity: {
      onhover: { 
        enable: true 
      },
    },
  };

  const styles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: -1,
    backgroundColor: currentTheme.secondary || 'white',
  };

  return (
    <Fragment>
      <ReactParticles params={particleParams} style={styles} />
    </Fragment>
  );
};

export default Particles;
