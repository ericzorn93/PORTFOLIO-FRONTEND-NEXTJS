import { Link } from "gatsby";
import React from "react";

import {
  HeaderWrapper,
  FirstNavSection,
  SecondNavSection
} from "./styles/HeaderWrapper";
import NavLink from "../NavLink/NavLink";

interface IProps {
  siteTitle?: string;
  name: string;
}

const Header: React.FC<IProps> = ({ name }) => (
  <HeaderWrapper>
    <nav>
      <FirstNavSection>
        <NavLink to="/" linkName={name} />
      </FirstNavSection>
      <SecondNavSection>
        <NavLink to="/about" linkName="About" />
        <NavLink to="/projects" linkName="Projects" />
        <NavLink to="/contact" linkName="Contacts" />
      </SecondNavSection>
    </nav>
  </HeaderWrapper>
);

export default Header;
