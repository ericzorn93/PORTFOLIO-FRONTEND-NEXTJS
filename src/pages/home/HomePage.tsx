import React from 'react';
import { useSelector } from 'react-redux';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Layout from '../../components/Layout/layout';
import { IntroductionWrapper } from '../../components/Page/index.page.style';
import Particles from '../../components/Particles/Particles';
import aboutJson from '../../assets/json/about.json';
import { ITheme } from '../../utils/primary_interfaces/theme.interface';
import { withRouter } from 'react-router-dom';
import { RouterProps } from 'react-router';

const prettyHtml = require('json-pretty-html').default;

interface Props extends RouterProps {}

const HomePage: React.FC<Props> = ({ history }) => {
  const currentTheme: ITheme = useSelector(
    (state: any) => state.themes.currentTheme
  );

  const handleNavigateToContactPage = (): void => {
    history.push('/contact');
  };

  return (
    <React.Fragment>
      <Particles style={{ height: '100vh' }} />
      <Layout>
        <IntroductionWrapper theme={currentTheme}>
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
            <br />
            <p
              id="json"
              dangerouslySetInnerHTML={{ __html: prettyHtml(aboutJson || {}) }}
            />
          </div>
        </IntroductionWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default withRouter(HomePage);
