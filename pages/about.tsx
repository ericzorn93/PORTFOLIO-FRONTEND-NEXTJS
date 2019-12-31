import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { PageContainer } from "../styles/page_styles/overall/overall";
import { ProfilePicture } from "../styles/page_styles/about_page/profile_picture";
import { ResumeHeaderText } from "../styles/page_styles/about_page/resume_header_text";
import { Paragraph } from "../components/primary/elements/paragraph";
import DownLoadResume from "../components/custom/download_resume";
import AboutResume from "../components/custom/about_resume";

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <h1 className="text-center font-bold text-4xl mt-5">About Me</h1>
      <div css={{ display: "flex", margin: 50 }}>
        <div css={{ height: 150, width: 150 }}>
          <ProfilePicture
            src={"images/ProfilePicture.jpg"}
            alt="Profile Picture"
            css={{
              height: 150,
              width: 150,
              borderRadius: "50%"
            }}
          />
          <ResumeHeaderText>Eric Zorn</ResumeHeaderText>
        </div>

        <div style={{ padding: "0 40px 0 40px" }}>
          <Paragraph css={{ lineHeight: 2 }}>
            I am a passionate developer, specializing in the MERN stack, with a
            solid knowledge of SQL-based ORM solutions as well. I deeply enjoy
            using React with Redux for global state management, TypeScript,
            Express, Node JS, and recently Apollo and GraphQL. Also, I have been
            experimenting with React Native, pulling upon my React skillset. I
            enjoy building scalable web applications with a strong front-end and
            back-end architecture, utilizing all of the most recent development
            technologies.
          </Paragraph>
          <br />
          <DownLoadResume />
        </div>
      </div>
      <br />
      <AboutResume />
    </PageContainer>
  );
};

export default AboutPage;
