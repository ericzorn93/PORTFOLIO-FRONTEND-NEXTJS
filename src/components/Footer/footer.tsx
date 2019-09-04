import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'gatsby';

import { FooterWrapper } from './styles/footer.styles';

const Footer: React.FC = () => {
  /** Beginning of Redux Selectors */
  const currentTheme = useSelector((state: any) => state.themes.currentTheme);
  /** End of Redux Selectors */

  return (
    <FooterWrapper theme={currentTheme}>
      <Link to="/">Eric Zorn | Full-Stack Software Engineer</Link>
    </FooterWrapper>
  );
};

export default Footer;
