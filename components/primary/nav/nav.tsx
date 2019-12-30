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
  { href: "/contact", label: "Contact" }
  // { href: "/blog", label: "Blog" }
];

const Nav = () => {
  const { push } = useRouter();

  return (
    <>
      <div className="flex flex-wrap justify-around font-bold text-lg">
        <div className="logo flex-1 px-5 py-5">
          <h1 className="cursor-pointer text-lg" onClick={() => push("/")}>
            EZ
          </h1>
          {/* <img style={{ width: 80 }} src="images/EZLogo.png" alt="Logo" /> */}
        </div>

        <div className="links flex-1 flex justify-around px-5 py-5">
          {links.map(link => (
            <Link key={v4()} href={link.href}>
              <a style={{ color: "black" }}>{link.label}</a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
