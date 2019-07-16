webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _components_page_components_home_page_HomeText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page_components/home_page/HomeText */ "./components/page_components/home_page/HomeText.tsx");
/* harmony import */ var _components_page_components_home_page_AboutText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/page_components/home_page/AboutText */ "./components/page_components/home_page/AboutText.tsx");
/* harmony import */ var _services_home_page_services_home_particle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/home_page_services/home.particle.service */ "./services/home_page_services/home.particle.service.ts");
/* harmony import */ var _styles_home_page_styles_styled_components_WelcomeText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/home_page_styles/styled_components/WelcomeText */ "./styles/home_page_styles/styled_components/WelcomeText.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.tsx");
var _jsxFileName = "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/pages/index.tsx";










var HomePage = function HomePage() {
  var activeTheme = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.themes.activeTheme;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    width: "100%",
    height: "100%",
    params: _services_home_page_services_home_particle_service__WEBPACK_IMPORTED_MODULE_5__["default"].updateParticles(activeTheme),
    style: {
      backgroundColor: activeTheme.primary,
      zIndex: -1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_home_page_styles_styled_components_WelcomeText__WEBPACK_IMPORTED_MODULE_6__["WelcomeTextWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "welcome-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_page_components_home_page_HomeText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_page_components_home_page_AboutText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.956ee7fa165ff2e237d1.hot-update.js.map