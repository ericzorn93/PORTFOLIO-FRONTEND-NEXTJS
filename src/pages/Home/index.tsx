import React from "react";
import Particles from "react-particles-js";
import { useSelector } from "react-redux";

import HomeText from "./components/HomeText";
import AboutText from "./components/AboutText";
import { ITheme } from "../../store/interfaces/theme.interface";
import HomeThemeService from "./services/home.particle.service";
import { WelcomeTextWrapper } from "./styles/styled_components/WelcomeText";

const HomePage: React.FC = () => {
  const activeTheme: ITheme = useSelector(
    (state: any) => state.themes.activeTheme
  );

  return (
    <div style={{ height: "100vh" }}>
      <Particles
        width="100vw"
        height="100vh"
        params={HomeThemeService.updateParticles(activeTheme)}
        style={{ backgroundColor: activeTheme.primary, zIndex: -1 }}
      />
      <WelcomeTextWrapper>
        <div className="welcome-text">
          <HomeText />
        </div>
        <div className="about-json">
          <AboutText />
        </div>
      </WelcomeTextWrapper>
    </div>
  );
};

export default HomePage;
