webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/init-apollo.ts":
/*!****************************!*\
  !*** ./lib/init-apollo.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initApollo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBrowser */ "./lib/isBrowser.ts");






var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (!_isBrowser__WEBPACK_IMPORTED_MODULE_5__["isBrowser"]) {
  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default.a;
}

function create(initialState, _ref) {
  var getToken = _ref.getToken;
  var httpLink = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["createHttpLink"])({
    uri: "https://ez-portfolio-backend-graphql.herokuapp.com/graphql" // credentials: "include"

  });
  var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])(function (_, _ref2) {
    var headers = _ref2.headers;
    var token = getToken();
    return {
      headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headers, {
        cookie: token ? "qid=".concat(token) : ""
      })
    };
  }); // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    connectToDevTools: _isBrowser__WEBPACK_IMPORTED_MODULE_5__["isBrowser"],
    ssrMode: !_isBrowser__WEBPACK_IMPORTED_MODULE_5__["isBrowser"],
    // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!_isBrowser__WEBPACK_IMPORTED_MODULE_5__["isBrowser"]) {
    return create(initialState, options);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.17836d2183a62d0f30b3.hot-update.js.map