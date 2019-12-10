import React from 'react';

import { ResumeHeaderText } from '../../../components/styled/ResumeHeaderText';
import { ResumeInfo } from '../../../components/styled/ResumeInfo';
import AboutHistory from './AboutHistory';

interface AboutResumeProps {}

const AboutResume: React.FC<AboutResumeProps> = () => {
  return (
    <div css={{ marginTop: 50 }}>
      <hr />
      <ResumeHeaderText>Work History</ResumeHeaderText>
      <ResumeInfo>
        <AboutHistory
          date="2018-10 - 2019-11"
          title="Junior Front End Developer"
          location="EarthCam Inc., Upper Saddle River, NJ"
          description={`Front-End developer on a large team, specializing in React and
          Angular. Built and maintained multiple enterprise level web
          applications, both public facing and customer facing. These projects
          consisted of widgets, new features, and bug fixes for both the Control
          Center 8 SaSS platform, as well as EarthCam's Broadway Media Player`}
          bulletPoints={[
            `Implemented and re-architected a large portion of the React
          applications to use Redux and utilize asynchronous actions and
          global state management`,
            ` Began to write functional hook-based components in the expanding
          component library for optimal code cleanliness and performance`,
            ` Co-wrote a 360-degree image markup tool with Procore integration`,
            `Assisted in conversion of Angular 1 application to React`,
          ]}
        />
      </ResumeInfo>
    </div>
  );
};

export default AboutResume;
