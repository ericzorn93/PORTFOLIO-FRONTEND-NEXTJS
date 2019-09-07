import React, { Fragment } from 'react';
import ReactParticles from 'react-particles-js';

interface ParticleProps {
  backgroundColor?: string;
}

const Particles: React.FC<ParticleProps> = props => {
  const particleParams = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: '#3CA9D1',
          blur: 5,
        },
      },
    },
  };

  const styles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: -1,
    backgroundColor: props.backgroundColor,
  };

  return (
    <Fragment>
      <ReactParticles params={particleParams} style={styles} />
    </Fragment>
  );
};

export default Particles;
