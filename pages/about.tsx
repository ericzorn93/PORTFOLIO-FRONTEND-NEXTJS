import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { NextComponentType } from "next";

import { PageContainer } from "../components/page_styles/overall/overall";

const AboutPage: NextComponentType = ({ themeData }: any) => {
  return (
    <PageContainer>
      <h1>About Page</h1>
    </PageContainer>
  );
};

export default AboutPage;
