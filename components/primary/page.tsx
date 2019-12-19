import React from "react";
import { NextComponentType } from "next";

import Nav from "./nav/nav";

const Page: NextComponentType = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
};

export default Page;
