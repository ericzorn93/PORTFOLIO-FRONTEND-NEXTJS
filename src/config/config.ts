export default {
  start: "node src/server.ts",
  dev: "tsnd --respawn src/server.ts",
  "dev:nodemon": "nodemon --exec src/server.ts",
  build: "next build",
  "build:export": "next build && next export"
};
