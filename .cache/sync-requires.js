const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("E:\\Dropbox\\Projects\\UPDATED_PORTFOLIO\\frontend\\node_modules\\gatsby-plugin-offline\\app-shell.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("E:\\Dropbox\\Projects\\UPDATED_PORTFOLIO\\frontend\\src\\pages\\404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("E:\\Dropbox\\Projects\\UPDATED_PORTFOLIO\\frontend\\src\\pages\\index.tsx"))),
  "component---src-pages-page-2-tsx": hot(preferDefault(require("E:\\Dropbox\\Projects\\UPDATED_PORTFOLIO\\frontend\\src\\pages\\page-2.tsx")))
}

