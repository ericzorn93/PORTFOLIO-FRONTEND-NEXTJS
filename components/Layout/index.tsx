import Header from "../Header";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
);

export default Layout;
