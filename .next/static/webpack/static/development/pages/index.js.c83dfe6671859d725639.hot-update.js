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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");
/* harmony import */ var _components_page_components_home_page_HomeText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/page_components/home_page/HomeText */ "./components/page_components/home_page/HomeText.tsx");
/* harmony import */ var _components_page_components_home_page_AboutText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/page_components/home_page/AboutText */ "./components/page_components/home_page/AboutText.tsx");
/* harmony import */ var _services_home_page_services_home_particle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/home_page_services/home.particle.service */ "./services/home_page_services/home.particle.service.ts");
/* harmony import */ var _styles_home_page_styles_styled_components_WelcomeText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/home_page_styles/styled_components/WelcomeText */ "./styles/home_page_styles/styled_components/WelcomeText.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.tsx");
/* harmony import */ var _apollo_setup_root_queries_theme_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../apollo_setup/root_queries/theme.query */ "./apollo_setup/root_queries/theme.query.ts");
var _jsxFileName = "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/pages/index.tsx";












var HomePage = function HomePage() {
  var _useQuery = Object(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_apollo_setup_root_queries_theme_query__WEBPACK_IMPORTED_MODULE_9__["THEME_QUERY"]),
      allThemes = _useQuery.data;

  console.log(allThemes);
  var activeTheme = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.themes.activeTheme;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    width: "100%",
    height: "100%",
    params: _services_home_page_services_home_particle_service__WEBPACK_IMPORTED_MODULE_6__["default"].updateParticles(activeTheme),
    style: {
      backgroundColor: activeTheme.primary,
      zIndex: -1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_home_page_styles_styled_components_WelcomeText__WEBPACK_IMPORTED_MODULE_7__["WelcomeTextWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "welcome-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_page_components_home_page_HomeText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_page_components_home_page_AboutText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.c83dfe6671859d725639.hot-update.js.map