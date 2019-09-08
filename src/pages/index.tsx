import React from 'react';
import { useSelector } from 'react-redux';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link, navigate } from 'gatsby';

import Layout from '../components/Layout/layout';
import SEO from '../components/SEO/seo';
import { IntroductionWrapper } from '../components/Page/index.page.style';
import Particles from '../components/Particles/Particles';

const IndexPage: React.FC = () => {
  const handleNavigateToContactPage = (): void => {
    navigate("/contact")
  }


  return (
    <React.Fragment>
      <Particles />
      <Layout>
        <SEO title="Home" />
        <IntroductionWrapper>
          <div className="firstColumn">
            <h1>Hi I'm, Eric Zorn,</h1>
            <p>I am a Full-Stack Software Engineer</p>
            <p>
              <em>Specializing in JavaScript, Python, and Ruby</em>
            </p>
            <p>Passionate Tech Enthusiast, Programmer, and Golfer</p>
            <button type="button" onClick={handleNavigateToContactPage}>
              Contact Me
            </button>
          </div>
          <div className="secondColumn">
            <h3>About Me</h3>
          </div>
        </IntroductionWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
