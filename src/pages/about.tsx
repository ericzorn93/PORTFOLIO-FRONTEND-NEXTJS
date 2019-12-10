import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Layout from '../components/Layout/layout';
import { Container } from '../components/styled/Container';
import CustomImage from '../components/CustomImage/CustomImage';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <h1 css={{ fontSize: '3rem', textAlign: 'center' }}>About Me.</h1>
        <div css={{ display: 'flex' }}>
          <div css={{ height: 150, width: 150 }}>
            <CustomImage
              imageName="ProfilePicture.jpg"
              alt="Profile Picture"
              imageStyle={{
                height: 150,
                width: 150,
                borderRadius: '50%',
              }}
            />
            <h1
              css={{
                fontSize: 22,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 300,
              }}
            >
              Eric Zorn
            </h1>
          </div>

          <div style={{ padding: '0 40px 0 40px' }}>
            <p css={{ fontFamily: 'Ubuntu, sans-serif' }}>
              I am a passionate developer, specializing in the MERN stack, with
              a solid knowledge of SQL-based ORM solutions as well. I deeply
              enjoy using React with Redux for global state management,
              TypeScript, Express, Node JS, and recently Apollo and GraphQL.
              Also, I have been experimenting with React Native, pulling upon my
              React skillset. I enjoy building scalable web applications with a
              strong front-end and back-end architecture, utilizing all of the
              most recent development technologies.
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutPage;
