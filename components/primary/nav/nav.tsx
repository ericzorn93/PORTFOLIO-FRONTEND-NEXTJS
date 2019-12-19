import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { v4 } from "uuid";

import { HeaderWrapper, Navigation } from "./styles/HeaderWrapper";

interface ILink {
  href: string;
  label: string;
}

const links: ILink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" }
];

const Nav = () => {
  const { push } = useRouter();

  return (
    <>
      <HeaderWrapper>
        <Navigation>
          <div className="logo">
            <h1 css={{ cursor: "pointer" }} onClick={() => push("/")}>
              EZ
            </h1>
            {/* <img style={{ width: 80 }} src="images/EZLogo.png" alt="Logo" /> */}
          </div>

          <div className="links">
            {links.map(link => (
              <Link key={v4()} href={link.href}>
                <a style={{ color: "black" }}>{link.label}</a>
              </Link>
            ))}
          </div>
        </Navigation>
      </HeaderWrapper>
    </>
  );
};

export default Nav;
