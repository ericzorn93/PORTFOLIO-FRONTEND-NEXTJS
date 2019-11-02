import React from "react";
import { Link } from "gatsby";

interface IProps {
  to: string;
  linkName: string;
}

const NavLink: React.FC<IProps> = ({ to, linkName }) => {
  return (
    <h1>
      <Link
        to={to}
        style={{
          color: "black",
          textDecoration: "none"
        }}
      >
        {linkName}
      </Link>
    </h1>
  );
};

export default NavLink;
