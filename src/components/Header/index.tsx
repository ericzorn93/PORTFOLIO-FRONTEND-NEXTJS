import { withRouter } from "next/router";
import Link from "next/link";

import { HeaderWrapper } from "./styles/styled_components/HeaderWrapper";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
