import { ITheme } from "../../../store/interfaces/theme.interface";

class HomeThemeService {
  /**
   * @param activeTheme {ITheme} used to access properties on theme from the redux store
   * @returns object for react-particles-js
   */
  public static updateParticles(activeTheme: ITheme): object {
    return {
      particles: {
        number: {
          value: 100
        },
        shape: {
          type: "star"
        },
        line_linked: {
          shadow: {
            enable: true,
            color: activeTheme.secondary,
            blur: 5
          }
        },
        move: {
          speed: 8
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        }
      },
      retina_detect: true
    };
  }
}

export default HomeThemeService;
