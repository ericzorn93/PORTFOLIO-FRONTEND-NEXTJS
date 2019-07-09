import React from "react";
import Particles from "react-particles-js";

import HomeText from "./components/HomeText";

const HomePage: React.FC = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Particles
        width="100%"
        height="100%"
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
              }
            }
          }
        }}
        style={{ zIndex: -1, height: "100vh" }}
      />
      <HomeText />
    </div>
  );
};

export default HomePage;
