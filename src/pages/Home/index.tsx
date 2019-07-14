import React from "react";
import Particles from "react-particles-js";
import { useSelector } from "react-redux";

import HomeText from "./components/HomeText";
import { ITheme } from "../../store/interfaces/theme.interface";

const HomePage: React.FC = () => {
  const activeTheme: ITheme = useSelector(
    (state: any) => state.themes.activeTheme
  );

  return (
    <div style={{ height: "100vh" }}>
      <Particles
        width="100%"
        height="100%"
        params={{
          particles: {
            color: {
              value: "red"
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "red",
                blur: 5
              }s
            }
          }
        }}
        style={{ backgroundColor: activeTheme.primary }}
      />
      <HomeText />
    </div>
  );
};

export default HomePage;
