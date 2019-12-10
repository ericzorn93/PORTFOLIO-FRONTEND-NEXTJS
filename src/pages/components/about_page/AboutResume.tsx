import React from 'react';

import { ResumeHeaderText } from '../../../components/styled/ResumeHeaderText';

interface AboutResumeProps {}

const AboutResume: React.FC<AboutResumeProps> = () => {
  return (
    <div css={{ marginTop: 50 }}>
      <hr />
      <ResumeHeaderText>Work History</ResumeHeaderText>
    </div>
  );
};

export default AboutResume;
