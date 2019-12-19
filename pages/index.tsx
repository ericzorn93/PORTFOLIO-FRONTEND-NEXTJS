import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { NextPage } from "next";
import axios from "axios";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import { PrimaryUtils } from "../shared/utils/primary.utils";
import {
  HomePageWrapper,
  HomePageSocialMediaIcons
} from "../components/page_styles/home_page/home_page.styles";

interface HomePageProps {
  author: string;
}

const HomePage: NextPage<HomePageProps> = ({ author }) => {
  return (
    <HomePageWrapper>
      <h1 css={{ fontSize: "4rem", textAlign: "center" }}>Hey There!</h1>
      <br />
      <p css={{ fontSize: "3rem" }}> I am {author}.</p>
      <br />
      <p css={{ fontSize: "2rem" }}>A Full-Stack Software Engineer</p>
      <br />
      <p>#JavaScript &amp; #TypeScript Enthusiast</p>

      <HomePageSocialMediaIcons>
        <a
          href="https://github.com/ericzorn93"
          target="_blank"
          className="icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ericzorn/"
          target="_blank"
          className="icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/zornwebdev"
          target="_blank"
          className="icon"
        >
          <FaTwitterSquare />
        </a>
      </HomePageSocialMediaIcons>
    </HomePageWrapper>
  );
};

HomePage.getInitialProps = async () => {
  let author: string;

  try {
    const { data } = await axios(PrimaryUtils.apiUrl);
    const { data: nestedData } = data;

    author = nestedData.author;
  } catch (error) {
    author = "";
  }

  return {
    author
  };
};

export default HomePage;
