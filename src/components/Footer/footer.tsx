import { Link } from "gatsby";
import React from "react";

import { FooterWrapper } from "./styles/FooterWrapper";

interface IProps {
  name: string;
}

const Footer: React.FC<IProps> = ({ name }) => (
  <FooterWrapper>
    <div>
      <h1>{name}</h1>
      &copy; All rights are reserved | {new Date().getFullYear()}
    </div>
  </FooterWrapper>
);

export default Footer;
