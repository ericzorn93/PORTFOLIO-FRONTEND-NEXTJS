"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeDefaultService {
    static getAboutJson(birthday) {
        return {
            author: "Eric Zorn",
            username: "@zornwebdev",
            description: "Full-Stack Software Engineer",
            homepage: "zornwebdev.com",
            birthday,
            repository: {
                type: "Open-source",
                url: "github.com/ericzorn93"
            },
            engines: ["js", "ts", "html", "css", "nodejs", "python", "ruby", "php"],
            dependencies: {
                "@emotion/styled": "^10.0.14",
                graphql: "^14.4.2",
                "json-pretty-html": "^1.1.6",
                react: "^16.8.6",
                "react-redux": "^7.1.0",
                redux: "^4.0.1",
                "redux-thunk": "^2.3.0",
                typescript: "3.5.2"
            },
            devDependencies: {
                music: "Blink-182",
                internet: "100mbps",
                editor: ["VSCode", "WebStorm", "PyCharm", "GemMine", "Atom", "PHPStorm"]
            }
        };
    }
}
exports.default = HomeDefaultService;
//# sourceMappingURL=home.default.service.js.map