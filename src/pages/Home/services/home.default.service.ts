class HomeDefaultService {
  public static getAboutJson(birthday: string | Date): object {
    return {
      author: "Eric Zorn",
      username: "@zornwebdev",
      description: "Full-Stack Software Engineer",
      homepage: "zornwebdev.com",
      repository: {
        type: "Open-source",
        url: "github.com/ericzorn93"
      },
      engines: [
        "js",
        "ts",
        "html",
        "css",
        "nodejs",
        "python",
        "ruby",
        "php",
        "react",
        "angular 1 & 2+"
      ],
      dependencies: {
        "@apollo/react-hooks": "^0.1.0-beta.10",
        "@emotion/core": "^10.0.14",
        "@emotion/styled": "^10.0.14",
        "@types/jest": "24.0.15",
        "@types/node": "12.0.12",
        "@types/react": "16.8.23",
        "@types/react-dom": "16.8.4",
        "apollo-boost": "^0.4.3",
        "apollo-cache-inmemory": "^1.6.2",
        "apollo-link-http": "^1.5.15",
        axios: "^0.19.0",
        "emotion-theming": "^10.0.14",
        graphql: "^14.4.2",
        "graphql-tag": "^2.10.1",
        "json-pretty-html": "^1.1.6",
        moment: "^2.24.0",
        react: "^16.8.6",
        "react-apollo": "^2.5.8",
        "react-apollo-hooks": "^0.4.5",
        "react-dom": "^16.8.6",
        "react-particles-js": "^2.6.0",
        "react-redux": "^7.1.0",
        "react-router-dom": "^5.0.1",
        "react-scripts": "3.0.1",
        redux: "^4.0.1",
        "redux-devtools-extension": "^2.13.8",
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

export default HomeDefaultService;
