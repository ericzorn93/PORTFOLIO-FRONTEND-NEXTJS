import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { NextComponentType } from "next";

import { PageContainer } from "../styles/page_styles/overall/overall";
import { Paragraph } from "../components/primary/elements/paragraph";
import { ProfilePicture } from "../styles/styled_components/profile_picture";
import { PageTitle } from "../styles/styled_components/page_title";
import DownLoadResume from "../components/custom/download_resume";

const AboutPage: NextComponentType = ({ themeData }: any) => {
  return (
    <PageContainer>
      <PageTitle>About Me</PageTitle>
      <div css={{ display: "flex" }}>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <ProfilePicture
            src="/images/ProfilePicture.jpg"
            alt="Profile Picture"
          />
          <Paragraph css={{ marginTop: 10, textAlign: "center" }}>
            <b>Eric Zorn</b>
            <br />
            <DownLoadResume />
          </Paragraph>
        </div>

        <div>
          <Paragraph css={{ margin: 40, width: "80%" }}>
            I am a passionate developer, specializing in the MERN stack, with a
            solid knowledge of SQL-based ORM solutions as well. I deeply enjoy
            using React with Redux for global state management, TypeScript,
            Express, Node JS, and recently Apollo and GraphQL. Also, I have been
            experimenting with React Native, pulling upon my React skillset. I
            enjoy building scalable web applications with a strong front-end and
            back-end architecture, utilizing all of the most recent development
            technologies.
          </Paragraph>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
