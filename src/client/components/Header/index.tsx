import { withRouter } from "next/router";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
};

export default withRouter(Header);
