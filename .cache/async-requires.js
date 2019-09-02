// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  'component---cache-dev-404-page-js': () =>
    import(
      '/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/.cache/dev-404-page.js' /* webpackChunkName: "component---cache-dev-404-page-js" */
    ),
  'component---src-pages-404-tsx': () =>
    import(
      '/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/src/pages/404.tsx' /* webpackChunkName: "component---src-pages-404-tsx" */
    ),
  'component---src-pages-index-tsx': () =>
    import(
      '/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/src/pages/index.tsx' /* webpackChunkName: "component---src-pages-index-tsx" */
    ),
  'component---src-pages-page-2-tsx': () =>
    import(
      '/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/src/pages/page-2.tsx' /* webpackChunkName: "component---src-pages-page-2-tsx" */
    ),
};
