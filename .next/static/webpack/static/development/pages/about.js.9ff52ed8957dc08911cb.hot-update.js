webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_client_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/client/components/Layout */ "./src/client/components/Layout/index.tsx");

 // interface IAboutPageProps {
//   todos: any[];
// }

var AboutPage = function AboutPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_client_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.todos[0].title));
};

AboutPage.getInitialProps = function (props) {
  var query = props.query;
  return {
    todos: query.todos
  };
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ })

})
//# sourceMappingURL=about.js.9ff52ed8957dc08911cb.hot-update.js.map