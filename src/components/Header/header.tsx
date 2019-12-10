import React, { useCallback } from 'react';
import { Link } from 'gatsby';
import Switch from 'react-switch';
import { FaSun, FaCloudMoon } from 'react-icons/fa';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import { HeaderWrapper, Navigation } from './styles/HeaderWrapper';
import CustomImage from '../CustomImage/CustomImage';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkModeEnabledAction } from '../../store/actions/theme_actions/theme.actions';

interface IProps {
  siteTitle?: string;
  name: string;
}

const Header: React.FC<IProps> = ({ name }) => {
  const dispatch = useDispatch();
  const isDarkModeEnabled: boolean = useSelector(
    (state: any) => state.theme.isDarkModeEnabled
  );

  // METHODS
  const toggleDarkMode = useCallback(
    (toggle: Function) => {
      dispatch(toggleDarkModeEnabledAction(!isDarkModeEnabled));

      const theme = !isDarkModeEnabled ? 'dark' : 'light';
      toggle(theme);
    },
    [dispatch, isDarkModeEnabled, toggleDarkModeEnabledAction]
  );

  return (
    <ThemeToggler>
      {({ toggleTheme }: any) => {
        return (
          <HeaderWrapper>
            <Navigation>
              <div className="logo">
                <Link to="/">
                  <CustomImage imageName="EZLogo.png" alt="Eric Zorn Logo" />
                </Link>
              </div>

              <div className="links">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
                <a href="#">
                  <Switch
                    id="darkModeSwitch"
                    onChange={() => toggleDarkMode(toggleTheme)}
                    checked={isDarkModeEnabled}
                    onColor={'#000'}
                    offColor={'#F9D86B'}
                    checkedIcon={<FaCloudMoon style={{ color: 'white' }} />}
                    uncheckedIcon={<FaSun style={{ color: '#333' }} />}
                    width={50}
                    height={20}
                  />
                </a>
              </div>
            </Navigation>
          </HeaderWrapper>
        );
      }}
    </ThemeToggler>
  );
};

export default Header;
