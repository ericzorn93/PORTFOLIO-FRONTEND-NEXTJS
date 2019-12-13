import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { IoIosPaper } from 'react-icons/io';

import { PrimaryUtils } from '../../../../shared/utils/primary.utils';
import { DownloadResumeLink } from './styles/downloadResume.styles';

interface DownloadResumeProps {
  resumeName: string;
}

const DownloadResume: React.FC<DownloadResumeProps> = ({ resumeName }) => {
  return (
    <div>
      <DownloadResumeLink
        href={`${PrimaryUtils.apiUrl}/resume/download?resumeName=${resumeName}`}
      >
        Download My Resume:
        <IoIosPaper style={{ fontSize: 24 }} />
      </DownloadResumeLink>
    </div>
  );
};

export default DownloadResume;
