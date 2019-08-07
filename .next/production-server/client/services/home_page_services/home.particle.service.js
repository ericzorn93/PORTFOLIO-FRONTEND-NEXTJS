"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeParticleService {
    /**
     * @param activeTheme {ITheme} used to access properties on theme from the redux store
     * @returns object for react-particles-js
     */
    static updateParticles(activeTheme) {
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
                        enable: false,
                        color: activeTheme.secondary,
                        blur: 4
                    }
                },
                move: {
                    speed: 7
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
exports.default = HomeParticleService;
//# sourceMappingURL=home.particle.service.js.map