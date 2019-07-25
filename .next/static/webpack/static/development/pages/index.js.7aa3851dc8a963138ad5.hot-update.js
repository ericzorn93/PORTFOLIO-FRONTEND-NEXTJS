webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _apollo_setup_root_queries_theme_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apollo_setup/root_queries/theme.query */ "./apollo_setup/root_queries/theme.query.ts");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Loading */ "./components/Loading/index.tsx");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Error */ "./components/Error/index.tsx");
/* harmony import */ var _store_types_theme_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/types/theme.types */ "./store/types/theme.types.ts");
var _jsxFileName = "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/components/Header/index.tsx";










var Header = function Header() {
  /** Beginning State */
  var completeThemes = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.themes.completeThemes;
  });
  var selectedTheme = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.themes.selectedTheme;
  });
  /** End State */

  /** Beginning Dispatchers */

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  /** End Dispatchers */

  /** Beginning Apollo Queries &Mutations */

  var _useQuery = Object(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_apollo_setup_root_queries_theme_query__WEBPACK_IMPORTED_MODULE_5__["THEME_QUERY"]),
      themeData = _useQuery.data,
      themeError = _useQuery.error,
      themeLoading = _useQuery.loading;
  /** End Apollo Queries & Mutations */


  if (themeError) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_7__["default"], {
      message: "Could not upload themes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    });
  }

  if (themeLoading) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    });
  }

  var getAllThemes = themeData.getAllThemes;
  dispatch({
    type: _store_types_theme_types__WEBPACK_IMPORTED_MODULE_8__["LOAD_THEMES"],
    payload: {
      lightMode: getAllThemes.lightMode,
      darkMode: getAllThemes.darkMode,
      completeThemes: getAllThemes,
      selectedTheme: selectedTheme || "darkMode"
    }
  }); // dispatch(loadThemesAction(getAllThemes));

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "About")));
};

Header.getInitialProps = function () {};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Header));

/***/ })

})
//# sourceMappingURL=index.js.7aa3851dc8a963138ad5.hot-update.js.map