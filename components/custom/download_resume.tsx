import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { NextComponentType } from "next";

import { PrimaryUtils } from "../../shared/utils/primary.utils";

const DownLoadResume: NextComponentType = () => {
  return (
    <>
      <a
        css={{ textDecoration: "none" }}
        href={`${PrimaryUtils.apiUrl}/resume/download?resumeName=ezresume`}
      >
        Download Resume
      </a>
    </>
  );
};

export default DownLoadResume;
