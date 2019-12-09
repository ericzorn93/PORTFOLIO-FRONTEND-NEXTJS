import React, { useCallback } from 'react';
import { Link } from 'gatsby';
import Switch from 'react-switch';
import { FaSun, FaCloudMoon } from 'react-icons/fa';

import { HeaderWrapper, Navigation } from './styles/HeaderWrapper';
import CustomImage from '../image';
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
  const toggleDarkMode = useCallback(() => {
    dispatch(toggleDarkModeEnabledAction(!isDarkModeEnabled));
  }, [dispatch, isDarkModeEnabled, toggleDarkModeEnabledAction]);

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
          <a href="#">
            <Switch
              id="darkModeSwitch"
              onChange={toggleDarkMode}
              checked={isDarkModeEnabled}
              onColor={'#333333'}
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
};

export default Header;
