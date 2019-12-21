import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { NextComponentType } from "next";

import { PrimaryUtils } from "../../shared/utils/primary.utils";
import { ExternalLink } from "../primary/external_link/external_link";

const DownLoadResume: NextComponentType = () => {
  return (
    <>
      <ExternalLink
        css={{ textDecoration: "none" }}
        href={`${PrimaryUtils.apiUrl}/resume/download?resumeName=ezresume`}
      >
        Click Here to Download My Resume
      </ExternalLink>
    </>
  );
};

export default DownLoadResume;
