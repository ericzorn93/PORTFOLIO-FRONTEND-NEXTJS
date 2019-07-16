webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/ApolloContext.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/ApolloContext.js ***!
  \*************************************************************/
/*! exports provided: ApolloProvider, useApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return ApolloProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return useApolloClient; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ApolloContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
function ApolloProvider(_ref) {
  var client = _ref.client,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApolloContext.Provider, {
    value: client
  }, children);
}
function useApolloClient(overrideClient) {
  var client = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ApolloContext); // Ensures that the number of hooks called from one render to another remains
  // constant, despite the Apollo client read from context being swapped for
  // one passed directly as prop.

  if (overrideClient) {
    return overrideClient;
  }

  if (!client) {
    // https://github.com/apollographql/react-apollo/blob/5cb63b3625ce5e4a3d3e4ba132eaec2a38ef5d90/src/component-utils.tsx#L19-L22
    throw new Error('Could not find "client" in the context or passed in as a prop. ' + 'Wrap the root component in an <ApolloProvider>, or pass an ' + 'ApolloClient instance in via props.');
  }

  return client;
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/SuspenseSSR.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/SuspenseSSR.js ***!
  \***********************************************************/
/*! exports provided: unstable_SuspenseSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_SuspenseSSR", function() { return unstable_SuspenseSSR; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _internal_SSRContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/SSRContext */ "./node_modules/react-apollo-hooks/es/internal/SSRContext.js");


function unstable_SuspenseSSR(_ref) {
  var children = _ref.children,
      fallback = _ref.fallback;
  var ssrManager = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_internal_SSRContext__WEBPACK_IMPORTED_MODULE_1__["SSRContext"]);
  return ssrManager ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: fallback
  }, children);
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/getMarkupFromTree.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/getMarkupFromTree.js ***!
  \*****************************************************************/
/*! exports provided: getMarkupFromTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return getMarkupFromTree; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _internal_SSRContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/SSRContext */ "./node_modules/react-apollo-hooks/es/internal/SSRContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-apollo-hooks/es/utils.js");



function getMarkupFromTree(_ref) {
  var tree = _ref.tree,
      onBeforeRender = _ref.onBeforeRender,
      renderFunction = _ref.renderFunction;
  var ssrManager = Object(_internal_SSRContext__WEBPACK_IMPORTED_MODULE_1__["createSSRManager"])();

  function process() {
    try {
      if (onBeforeRender) {
        onBeforeRender();
      }

      var html = renderFunction(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_internal_SSRContext__WEBPACK_IMPORTED_MODULE_1__["SSRContext"].Provider, {
        value: ssrManager
      }, tree));

      if (!ssrManager.hasPromises()) {
        return html;
      }
    } catch (e) {
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPromiseLike"])(e)) {
        throw e;
      }

      ssrManager.register(e);
    }

    return ssrManager.consumeAndAwaitPromises().then(process);
  }

  return Promise.resolve().then(process);
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/index.js ***!
  \*****************************************************/
/*! exports provided: useQuery, useMutation, useSubscription, ApolloProvider, useApolloClient, unstable_SuspenseSSR, getMarkupFromTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useQuery */ "./node_modules/react-apollo-hooks/es/useQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _useQuery__WEBPACK_IMPORTED_MODULE_0__["useQuery"]; });

/* harmony import */ var _useMutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMutation */ "./node_modules/react-apollo-hooks/es/useMutation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return _useMutation__WEBPACK_IMPORTED_MODULE_1__["useMutation"]; });

/* harmony import */ var _useSubscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSubscription */ "./node_modules/react-apollo-hooks/es/useSubscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return _useSubscription__WEBPACK_IMPORTED_MODULE_2__["useSubscription"]; });

/* harmony import */ var _ApolloContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApolloContext */ "./node_modules/react-apollo-hooks/es/ApolloContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _ApolloContext__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return _ApolloContext__WEBPACK_IMPORTED_MODULE_3__["useApolloClient"]; });

/* harmony import */ var _SuspenseSSR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SuspenseSSR */ "./node_modules/react-apollo-hooks/es/SuspenseSSR.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_SuspenseSSR", function() { return _SuspenseSSR__WEBPACK_IMPORTED_MODULE_4__["unstable_SuspenseSSR"]; });

/* harmony import */ var _getMarkupFromTree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getMarkupFromTree */ "./node_modules/react-apollo-hooks/es/getMarkupFromTree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return _getMarkupFromTree__WEBPACK_IMPORTED_MODULE_5__["getMarkupFromTree"]; });








/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/internal/SSRContext.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/internal/SSRContext.js ***!
  \*******************************************************************/
/*! exports provided: createSSRManager, SSRContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSSRManager", function() { return createSSRManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSRContext", function() { return SSRContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function createSSRManager() {
  var promiseSet = new Set();
  return {
    hasPromises: function hasPromises() {
      return promiseSet.size > 0;
    },
    register: function register(promise) {
      promiseSet.add(promise);
    },
    consumeAndAwaitPromises: function consumeAndAwaitPromises() {
      var promises = Array.from(promiseSet);
      promiseSet.clear();
      return Promise.all(promises);
    }
  };
}
var SSRContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/internal/actHack.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/internal/actHack.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return actHack; });
function actHack(callback) {
  callback();
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/queryCache.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/queryCache.js ***!
  \**********************************************************/
/*! exports provided: getCachedObservableQuery, invalidateCachedObservableQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCachedObservableQuery", function() { return getCachedObservableQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidateCachedObservableQuery", function() { return invalidateCachedObservableQuery; });
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-apollo-hooks/es/utils.js");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var cachedQueriesByClient = new WeakMap();
function getCachedObservableQuery(client, options) {
  var queriesForClient = getCachedQueriesForClient(client);
  var cacheKey = getCacheKey(options);
  var observableQuery = queriesForClient.get(cacheKey);

  if (observableQuery == null) {
    observableQuery = client.watchQuery(options);
    queriesForClient.set(cacheKey, observableQuery);
  }

  return observableQuery;
}
function invalidateCachedObservableQuery(client, options) {
  var queriesForClient = getCachedQueriesForClient(client);
  var cacheKey = getCacheKey(options);
  queriesForClient["delete"](cacheKey);
}

function getCachedQueriesForClient(client) {
  var queriesForClient = cachedQueriesByClient.get(client);

  if (queriesForClient == null) {
    queriesForClient = new Map();
    cachedQueriesByClient.set(client, queriesForClient);
  }

  return queriesForClient;
}

function getCacheKey(_ref) {
  var query = _ref.query,
      options = _objectWithoutPropertiesLoose(_ref, ["query"]);

  return Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__["print"])(query) + "@@" + Object(_utils__WEBPACK_IMPORTED_MODULE_1__["objToKey"])(options);
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/useMutation.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/useMutation.js ***!
  \***********************************************************/
/*! exports provided: useMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return useMutation; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApolloContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext */ "./node_modules/react-apollo-hooks/es/ApolloContext.js");
/* harmony import */ var _internal_actHack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/actHack */ "./node_modules/react-apollo-hooks/es/internal/actHack.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/react-apollo-hooks/es/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var getInitialState = function getInitialState() {
  return {
    called: false,
    data: undefined,
    error: undefined,
    hasError: false,
    loading: false
  };
};

function useMutation(mutation, baseOptions) {
  if (baseOptions === void 0) {
    baseOptions = {};
  }

  var client = Object(_ApolloContext__WEBPACK_IMPORTED_MODULE_2__["useApolloClient"])(baseOptions.client);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(getInitialState),
      result = _React$useState[0],
      setResult = _React$useState[1];

  var _baseOptions = baseOptions,
      _baseOptions$rethrow = _baseOptions.rethrow,
      rethrow = _baseOptions$rethrow === void 0 ? true : _baseOptions$rethrow,
      options = _objectWithoutPropertiesLoose(_baseOptions, ["rethrow"]);

  var mergeResult = function mergeResult(partialResult) {
    // A hack to get rid React warnings during tests.
    Object(_internal_actHack__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
      setResult(function (prev) {
        return _extends({}, prev, {}, partialResult);
      });
    });
  }; // reset state if client instance changes


  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    mergeResult(getInitialState());
  }, [client]);

  var _useMutationTracking = useMutationTracking(),
      generateNewMutationId = _useMutationTracking.generateNewMutationId,
      isMostRecentMutation = _useMutationTracking.isMostRecentMutation;

  var onMutationStart = function onMutationStart() {
    if (!result.loading) {
      mergeResult({
        called: true,
        data: undefined,
        error: undefined,
        hasError: false,
        loading: true
      });
    }
  };

  var onMutationError = function onMutationError(error, mutationId) {
    if (isMostRecentMutation(mutationId)) {
      mergeResult({
        error: error,
        hasError: true,
        loading: false
      });
    }
  };

  var onMutationCompleted = function onMutationCompleted(response, mutationId) {
    var data = response.data,
        errors = response.errors;

    if (errors && errors.length > 0) {
      onMutationError(new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloError"]({
        graphQLErrors: errors
      }), mutationId);
      return;
    }

    if (isMostRecentMutation(mutationId)) {
      mergeResult({
        data: data,
        loading: false
      });
    }
  };

  var runMutation = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (mutateOptions) {
    if (mutateOptions === void 0) {
      mutateOptions = {};
    }

    return new Promise(function (resolve, reject) {
      onMutationStart();
      var mutationId = generateNewMutationId(); // merge together variables from baseOptions (if specified)
      // and the execution

      var mutateVariables = options.variables ? _extends({}, mutateOptions.variables, {}, options.variables) : mutateOptions.variables;
      client.mutate(_extends({
        mutation: mutation
      }, options, {}, mutateOptions, {
        variables: mutateVariables
      })).then(function (response) {
        onMutationCompleted(response, mutationId);
        resolve(response);
      })["catch"](function (err) {
        onMutationError(err, mutationId);

        if (rethrow) {
          reject(err);
          return;
        }

        resolve({});
      });
    });
  }, [client, mutation, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["objToKey"])(baseOptions)]);
  return [runMutation, result];
}

function useMutationTracking() {
  var mostRecentMutationId = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(0);

  var generateNewMutationId = function generateNewMutationId() {
    mostRecentMutationId.current += 1;
    return mostRecentMutationId.current;
  };

  var isMostRecentMutation = function isMostRecentMutation(mutationId) {
    return mostRecentMutationId.current === mutationId;
  };

  return {
    generateNewMutationId: generateNewMutationId,
    isMostRecentMutation: isMostRecentMutation
  };
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/useQuery.js":
/*!********************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/useQuery.js ***!
  \********************************************************/
/*! exports provided: useQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApolloContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext */ "./node_modules/react-apollo-hooks/es/ApolloContext.js");
/* harmony import */ var _internal_SSRContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/SSRContext */ "./node_modules/react-apollo-hooks/es/internal/SSRContext.js");
/* harmony import */ var _internal_actHack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/actHack */ "./node_modules/react-apollo-hooks/es/internal/actHack.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queryCache */ "./node_modules/react-apollo-hooks/es/queryCache.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/react-apollo-hooks/es/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function useQuery(query, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? true : _ref$ssr,
      _ref$skip = _ref.skip,
      skip = _ref$skip === void 0 ? false : _ref$skip,
      _ref$suspend = _ref.suspend,
      suspend = _ref$suspend === void 0 ? false : _ref$suspend,
      pollInterval = _ref.pollInterval,
      _ref$notifyOnNetworkS = _ref.notifyOnNetworkStatusChange,
      notifyOnNetworkStatusChange = _ref$notifyOnNetworkS === void 0 ? false : _ref$notifyOnNetworkS,
      overrideClient = _ref.client,
      context = _ref.context,
      metadata = _ref.metadata,
      variables = _ref.variables,
      actualCachePolicy = _ref.fetchPolicy,
      errorPolicy = _ref.errorPolicy,
      fetchResults = _ref.fetchResults;

  var client = Object(_ApolloContext__WEBPACK_IMPORTED_MODULE_2__["useApolloClient"])(overrideClient);
  var ssrManager = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_internal_SSRContext__WEBPACK_IMPORTED_MODULE_3__["SSRContext"]);
  var ssrInUse = ssr && ssrManager; // Skips when `skip: true` or SSRContext passed but `ssr: false`

  var shouldSkip = skip || ssrManager != null && !ssr;
  var fetchPolicy = ssrInUse && ( // Taken from https://github.com/apollographql/react-apollo/blob/2d7e48b7d0c26e792e1ed26e98bb84d8fba5bb8a/src/Query.tsx#L167-L169
  actualCachePolicy === 'network-only' || actualCachePolicy === 'cache-and-network') ? 'cache-first' : actualCachePolicy;
  var watchQueryOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["compact"])({
      context: context,
      errorPolicy: errorPolicy,
      fetchPolicy: fetchPolicy,
      fetchResults: fetchResults,
      metadata: metadata,
      notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
      pollInterval: pollInterval,
      query: query,
      variables: variables
    });
  }, [query, pollInterval, notifyOnNetworkStatusChange, context && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["objToKey"])(context), metadata && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["objToKey"])(metadata), variables && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["objToKey"])(variables), fetchPolicy, errorPolicy, fetchResults]);
  var observableQuery = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_queryCache__WEBPACK_IMPORTED_MODULE_5__["getCachedObservableQuery"])(client, watchQueryOptions);
  }, [client, watchQueryOptions]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      responseId = _useState[0],
      setResponseId = _useState[1];

  var currentResult = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var helpers = {
      fetchMore: observableQuery.fetchMore.bind(observableQuery),
      refetch: observableQuery.refetch.bind(observableQuery),
      startPolling: observableQuery.startPolling.bind(observableQuery),
      stopPolling: observableQuery.stopPolling.bind(observableQuery),
      updateQuery: observableQuery.updateQuery.bind(observableQuery)
    };
    var result = observableQuery.getCurrentResult(); // return the old result data when there is an error

    var data = result.data;

    if (result.error || result.errors) {
      data = _extends({}, result.data, {}, (observableQuery.getLastResult() || {}).data);
    }

    if (shouldSkip) {
      // Taken from https://github.com/apollographql/react-apollo/blob/5cb63b3625ce5e4a3d3e4ba132eaec2a38ef5d90/src/Query.tsx#L376-L381
      return _extends({}, helpers, {
        data: undefined,
        error: undefined,
        loading: false,
        networkStatus: undefined
      });
    }

    return _extends({}, helpers, {
      data: data,
      error: result.errors && result.errors.length > 0 ? new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloError"]({
        graphQLErrors: result.errors
      }) : result.error,
      errors: result.errors,
      loading: result.loading,
      // don't try to return `networkStatus` when suspense it's used
      // because it's unreliable in that case
      // https://github.com/trojanowski/react-apollo-hooks/pull/68
      networkStatus: suspend ? undefined : result.networkStatus,
      partial: result.partial,
      stale: result.stale
    });
  }, [shouldSkip, responseId, observableQuery]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (shouldSkip) {
      return;
    }

    var invalidateCurrentResult = function invalidateCurrentResult() {
      // A hack to get rid React warnings during tests. The default
      // implementation of `actHack` just invokes the callback immediately.
      // In tests, it's replaced with `act` from react-testing-library.
      // A better solution welcome.
      Object(_internal_actHack__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
        setResponseId(function (x) {
          return x + 1;
        });
      });
    };

    var subscription = observableQuery.subscribe(invalidateCurrentResult, invalidateCurrentResult);
    Object(_queryCache__WEBPACK_IMPORTED_MODULE_5__["invalidateCachedObservableQuery"])(client, watchQueryOptions);
    return function () {
      subscription.unsubscribe();
    };
  }, [shouldSkip, observableQuery]);
  ensureSupportedFetchPolicy(suspend, fetchPolicy);

  if (currentResult.partial) {
    if (suspend) {
      // throw a promise - use the react suspense to wait until the data is
      // available
      throw observableQuery.result();
    }

    if (ssrInUse) {
      ssrManager.register(observableQuery.result());
    }
  }

  return currentResult;
}

function ensureSupportedFetchPolicy(suspend, fetchPolicy) {
  if (suspend && fetchPolicy && fetchPolicy !== 'cache-first') {
    throw new Error("Fetch policy " + fetchPolicy + " is not supported without 'suspend: false'");
  }
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/useSubscription.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/useSubscription.js ***!
  \***************************************************************/
/*! exports provided: useSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return useSubscription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApolloContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApolloContext */ "./node_modules/react-apollo-hooks/es/ApolloContext.js");
/* harmony import */ var _internal_actHack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/actHack */ "./node_modules/react-apollo-hooks/es/internal/actHack.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-apollo-hooks/es/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function useSubscription(query, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      onSubscriptionData = _ref.onSubscriptionData,
      overrideClient = _ref.client,
      options = _objectWithoutPropertiesLoose(_ref, ["onSubscriptionData", "client"]);

  var client = Object(_ApolloContext__WEBPACK_IMPORTED_MODULE_1__["useApolloClient"])(overrideClient);
  var onSubscriptionDataRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loading: true
  }),
      result = _useState[0],
      setResultBase = _useState[1];

  onSubscriptionDataRef.current = onSubscriptionData;

  function setResult(newResult) {
    // A hack to get rid React warnings during tests.
    Object(_internal_actHack__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
      setResultBase(newResult);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (options.skip === true) {
      return;
    }

    var subscription = client.subscribe(_extends({}, options, {
      query: query
    })).subscribe(function (nextResult) {
      var newResult = {
        data: nextResult.data,
        error: undefined,
        loading: false
      };
      setResult(newResult);

      if (onSubscriptionDataRef.current) {
        onSubscriptionDataRef.current({
          client: client,
          subscriptionData: newResult
        });
      }
    }, function (error) {
      setResult({
        loading: false,
        data: result.data,
        error: error
      });
    });
    return function () {
      setResult({
        loading: true
      });
      subscription.unsubscribe();
    };
  }, [query, options && Object(_utils__WEBPACK_IMPORTED_MODULE_3__["objToKey"])(options)]);
  return result;
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/utils.js ***!
  \*****************************************************/
/*! exports provided: objToKey, isPromiseLike, compact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objToKey", function() { return objToKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromiseLike", function() { return isPromiseLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__);

function objToKey(obj) {
  if (!lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default()(obj)) {
    return obj;
  }

  var sortedObj = Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = objToKey(obj[key]);
    return result;
  }, {});
  return JSON.stringify(sortedObj);
}
function isPromiseLike(value) {
  return value != null && typeof value.then === 'function';
}
function compact(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_with_apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/with-apollo-client */ "./lib/with-apollo-client.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store */ "./store/index.ts");






var _jsxFileName = "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/pages/_app.tsx";









var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          apolloClient = _this$props.apolloClient,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_8__["ApolloProvider"], {
        client: apolloClient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_9__["ApolloProvider"], {
        client: apolloClient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }))))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_6___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_apollo_client__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__["default"])(_store__WEBPACK_IMPORTED_MODULE_13__["default"])(MyApp)));

/***/ })

})
//# sourceMappingURL=_app.js.a5e6db0e892b44a7d86e.hot-update.js.map