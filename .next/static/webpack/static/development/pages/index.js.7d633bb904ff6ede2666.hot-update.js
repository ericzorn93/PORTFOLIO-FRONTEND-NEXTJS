webpackHotUpdate("static/development/pages/index.js",{

/***/ "./apollo_setup/root_queries/theme.query.ts":
/*!**************************************************!*\
  !*** ./apollo_setup/root_queries/theme.query.ts ***!
  \**************************************************/
/*! exports provided: THEME_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_QUERY", function() { return THEME_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getAllThemes {\n    getAllThemes {\n      darkMode {\n        primary\n        secondary\n        alternate\n        lightAlternate\n        light\n        black\n        white\n      }\n      lightMode {\n        primary\n        secondary\n        alternate\n        lightAlternate\n        light\n        black\n        white\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var THEME_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());

/***/ }),

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");
/* harmony import */ var _apollo_setup_root_queries_theme_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apollo_setup/root_queries/theme.query */ "./apollo_setup/root_queries/theme.query.ts");
var _jsxFileName = "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/components/Header/index.tsx";






var Header = function Header() {
  var _useQuery = Object(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_apollo_setup_root_queries_theme_query__WEBPACK_IMPORTED_MODULE_4__["THEME_QUERY"]),
      allThemes = _useQuery.data;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Header));

/***/ })

})
//# sourceMappingURL=index.js.7d633bb904ff6ede2666.hot-update.js.map