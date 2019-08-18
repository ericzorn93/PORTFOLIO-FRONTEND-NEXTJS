module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../../../ssr-module-cache.js"); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 3));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
      /*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/map */ "core-js/library/fn/map"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
      /*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
      /*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/values */ "core-js/library/fn/object/values"
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
      /*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _Object$assign = __webpack_require__(
          /*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"
        );

        function _extends() {
          module.exports = _extends =
            _Object$assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }

              return target;
            };

          return _extends.apply(this, arguments);
        }

        module.exports = _extends;

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              };
        }

        module.exports = _interopRequireDefault;

        /***/
      },

    /***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
      /*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _Object$getOwnPropertyDescriptor = __webpack_require__(
          /*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js"
        );

        var _Object$defineProperty = __webpack_require__(
          /*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"
        );

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};

            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc =
                    _Object$defineProperty && _Object$getOwnPropertyDescriptor
                      ? _Object$getOwnPropertyDescriptor(obj, key)
                      : {};

                  if (desc.get || desc.set) {
                    _Object$defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
            }

            newObj["default"] = obj;
            return newObj;
          }
        }

        module.exports = _interopRequireWildcard;

        /***/
      },

    /***/ "./node_modules/next/dist/client/link.js":
      /*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireWildcard = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js"
        );

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"
        );

        exports.__esModule = true;
        exports.default = void 0;

        var _map = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"
          )
        );

        var _url = __webpack_require__(/*! url */ "url");

        var _react = _interopRequireWildcard(
          __webpack_require__(/*! react */ "react")
        );

        var _propTypes = _interopRequireDefault(
          __webpack_require__(/*! prop-types */ "prop-types")
        );

        var _router = _interopRequireDefault(
          __webpack_require__(
            /*! ./router */ "./node_modules/next/dist/client/router.js"
          )
        );

        var _rewriteUrlForExport = __webpack_require__(
          /*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export"
        );

        var _utils = __webpack_require__(
          /*! next-server/dist/lib/utils */ "next-server/dist/lib/utils"
        );
        /* global __NEXT_DATA__ */

        function isLocal(href) {
          const url = (0, _url.parse)(href, false, true);
          const origin = (0, _url.parse)(
            (0, _utils.getLocationOrigin)(),
            false,
            true
          );
          return (
            !url.host ||
            (url.protocol === origin.protocol && url.host === origin.host)
          );
        }

        function memoizedFormatUrl(formatFunc) {
          let lastHref = null;
          let lastAs = null;
          let lastResult = null;
          return (href, as) => {
            if (lastResult && href === lastHref && as === lastAs) {
              return lastResult;
            }

            const result = formatFunc(href, as);
            lastHref = href;
            lastAs = as;
            lastResult = result;
            return result;
          };
        }

        function formatUrl(url) {
          return url && typeof url === "object"
            ? (0, _utils.formatWithValidation)(url)
            : url;
        }

        let observer;
        const listeners = new _map.default();
        const IntersectionObserver = false ? undefined : null;

        function getObserver() {
          // Return shared instance of IntersectionObserver if already created
          if (observer) {
            return observer;
          } // Only create shared IntersectionObserver if supported in browser

          if (!IntersectionObserver) {
            return undefined;
          }

          return (observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (!listeners.has(entry.target)) {
                  return;
                }

                const cb = listeners.get(entry.target);

                if (entry.isIntersecting || entry.intersectionRatio > 0) {
                  observer.unobserve(entry.target);
                  listeners.delete(entry.target);
                  cb();
                }
              });
            },
            {
              rootMargin: "200px"
            }
          ));
        }

        const listenToIntersections = (el, cb) => {
          const observer = getObserver();

          if (!observer) {
            return () => {};
          }

          observer.observe(el);
          listeners.set(el, cb);
          return () => {
            observer.unobserve(el);
            listeners.delete(el);
          };
        };

        class Link extends _react.Component {
          constructor() {
            super(...arguments);

            this.cleanUpListeners = () => {};

            this.formatUrls = memoizedFormatUrl((href, asHref) => {
              return {
                href: formatUrl(href),
                as: asHref ? formatUrl(asHref) : asHref
              };
            });

            this.linkClicked = e => {
              // @ts-ignore target exists on currentTarget
              const { nodeName, target } = e.currentTarget;

              if (
                nodeName === "A" &&
                ((target && target !== "_self") ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && e.nativeEvent.which === 2))
              ) {
                // ignore click for new tab / new window behavior
                return;
              }

              let { href, as } = this.formatUrls(
                this.props.href,
                this.props.as
              );

              if (!isLocal(href)) {
                // ignore click if it's outside our scope
                return;
              }

              const { pathname } = window.location;
              href = (0, _url.resolve)(pathname, href);
              as = as ? (0, _url.resolve)(pathname, as) : href;
              e.preventDefault(); //  avoid scroll for urls with anchor refs

              let { scroll } = this.props;

              if (scroll == null) {
                scroll = as.indexOf("#") < 0;
              } // replace state instead of push if prop is present

              _router.default[this.props.replace ? "replace" : "push"](
                href,
                as,
                {
                  shallow: this.props.shallow
                }
              ).then(success => {
                if (!success) return;

                if (scroll) {
                  window.scrollTo(0, 0);
                  document.body.focus();
                }
              });
            };
          }

          componentWillUnmount() {
            this.cleanUpListeners();
          }

          handleRef(ref) {
            if (
              this.props.prefetch &&
              IntersectionObserver &&
              ref &&
              ref.tagName
            ) {
              this.cleanUpListeners();
              this.cleanUpListeners = listenToIntersections(ref, () => {
                this.prefetch();
              });
            }
          } // The function is memoized so that no extra lifecycles are needed
          // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

          prefetch() {
            if (!this.props.prefetch || "undefined" === "undefined") return; // Prefetch the JSON page if asked (only in the client)

            const { pathname } = window.location;
            const { href: parsedHref } = this.formatUrls(
              this.props.href,
              this.props.as
            );
            const href = (0, _url.resolve)(pathname, parsedHref);

            _router.default.prefetch(href);
          }

          render() {
            let { children } = this.props;
            const { href, as } = this.formatUrls(
              this.props.href,
              this.props.as
            ); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

            if (typeof children === "string") {
              children = _react.default.createElement("a", null, children);
            } // This will return the first child, if multiple are provided it will throw an error

            const child = _react.Children.only(children);

            const props = {
              ref: el => this.handleRef(el),
              onMouseEnter: e => {
                if (
                  child.props &&
                  typeof child.props.onMouseEnter === "function"
                ) {
                  child.props.onMouseEnter(e);
                }

                this.prefetch();
              },
              onClick: e => {
                if (child.props && typeof child.props.onClick === "function") {
                  child.props.onClick(e);
                }

                if (!e.defaultPrevented) {
                  this.linkClicked(e);
                }
              } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
              // defined, we specify the current 'href', so that repetition is not needed by the user
            };

            if (
              this.props.passHref ||
              (child.type === "a" && !("href" in child.props))
            ) {
              props.href = as || href;
            } // Add the ending slash to the paths. So, we can serve the
            // "<page>/index.html" directly.

            if (false) {
            }

            return _react.default.cloneElement(child, props);
          }
        }

        Link.propTypes = void 0;
        Link.defaultProps = {
          prefetch: true
        };

        if (true) {
          const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

          const exact = __webpack_require__(
            /*! prop-types-exact */ "prop-types-exact"
          );

          Link.propTypes = exact({
            href: _propTypes.default.oneOfType([
              _propTypes.default.string,
              _propTypes.default.object
            ]).isRequired,
            as: _propTypes.default.oneOfType([
              _propTypes.default.string,
              _propTypes.default.object
            ]),
            prefetch: _propTypes.default.bool,
            replace: _propTypes.default.bool,
            shallow: _propTypes.default.bool,
            passHref: _propTypes.default.bool,
            scroll: _propTypes.default.bool,
            children: _propTypes.default.oneOfType([
              _propTypes.default.element,
              (props, propName) => {
                const value = props[propName];

                if (typeof value === "string") {
                  warn(
                    "Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"
                  );
                }

                return null;
              }
            ]).isRequired
          });
        }

        var _default = Link;
        exports.default = _default;

        /***/
      },

    /***/ "./node_modules/next/dist/client/router.js":
      /*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireWildcard = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js"
        );

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"
        );

        exports.__esModule = true;
        exports.useRouter = useRouter;
        exports.makePublicRouterInstance = makePublicRouterInstance;
        exports.createRouter = exports.withRouter = exports.default = void 0;

        var _extends2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"
          )
        );

        var _defineProperty = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"
          )
        );

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ "react")
        );

        var _router2 = _interopRequireWildcard(
          __webpack_require__(
            /*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"
          )
        );

        exports.Router = _router2.default;
        exports.NextRouter = _router2.NextRouter;

        var _routerContext = __webpack_require__(
          /*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context"
        );

        var _withRouter = _interopRequireDefault(
          __webpack_require__(
            /*! ./with-router */ "./node_modules/next/dist/client/with-router.js"
          )
        );

        exports.withRouter = _withRouter.default;
        /* global window */

        const singletonRouter = {
          router: null,
          // holds the actual router instance
          readyCallbacks: [],

          ready(cb) {
            if (this.router) return cb();

            if (false) {
            }
          }
        }; // Create public properties and methods of the router in the singletonRouter

        const urlPropertyFields = ["pathname", "route", "query", "asPath"];
        const propertyFields = ["components"];
        const routerEvents = [
          "routeChangeStart",
          "beforeHistoryChange",
          "routeChangeComplete",
          "routeChangeError",
          "hashChangeStart",
          "hashChangeComplete"
        ];
        const coreMethodFields = [
          "push",
          "replace",
          "reload",
          "back",
          "prefetch",
          "beforePopState"
        ]; // Events is a static property on the router, the router doesn't have to be initialized to use it

        (0, _defineProperty.default)(singletonRouter, "events", {
          get() {
            return _router2.default.events;
          }
        });
        propertyFields.concat(urlPropertyFields).forEach(field => {
          // Here we need to use Object.defineProperty because, we need to return
          // the property assigned to the actual router
          // The value might get changed as we change routes and this is the
          // proper way to access it
          (0, _defineProperty.default)(singletonRouter, field, {
            get() {
              const router = getRouter();
              return router[field];
            }
          });
        });
        coreMethodFields.forEach(field => {
          // We don't really know the types here, so we add them later instead
          singletonRouter[field] = function() {
            const router = getRouter();
            return router[field](...arguments);
          };
        });
        routerEvents.forEach(event => {
          singletonRouter.ready(() => {
            _router2.default.events.on(event, function() {
              const eventField =
                "on" + event.charAt(0).toUpperCase() + event.substring(1);
              const _singletonRouter = singletonRouter;

              if (_singletonRouter[eventField]) {
                try {
                  _singletonRouter[eventField](...arguments);
                } catch (err) {
                  // tslint:disable-next-line:no-console
                  console.error(
                    "Error when running the Router event: " + eventField
                  ); // tslint:disable-next-line:no-console

                  console.error(err.message + "\n" + err.stack);
                }
              }
            });
          });
        });

        function getRouter() {
          if (!singletonRouter.router) {
            const message =
              "No router instance found.\n" +
              'You should only use "next/router" inside the client side of your app.\n';
            throw new Error(message);
          }

          return singletonRouter.router;
        } // Export the singletonRouter and this is the public API.

        var _default = singletonRouter; // Reexport the withRoute HOC

        exports.default = _default;

        function useRouter() {
          return _react.default.useContext(_routerContext.RouterContext);
        } // INTERNAL APIS
        // -------------
        // (do not use following exports inside the app)
        // Create a router and assign it as the singleton instance.
        // This is used in client side when we are initilizing the app.
        // This should **not** use inside the server.

        const createRouter = function createRouter() {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          singletonRouter.router = new _router2.default(...args);
          singletonRouter.readyCallbacks.forEach(cb => cb());
          singletonRouter.readyCallbacks = [];
          return singletonRouter.router;
        }; // This function is used to create the `withRouter` router instance

        exports.createRouter = createRouter;

        function makePublicRouterInstance(router) {
          const _router = router;
          const instance = {};

          for (const property of urlPropertyFields) {
            if (typeof _router[property] === "object") {
              instance[property] = (0, _extends2.default)(
                {},
                _router[property]
              ); // makes sure query is not stateful

              continue;
            }

            instance[property] = _router[property];
          } // Events is a static property on the router, the router doesn't have to be initialized to use it

          instance.events = _router2.default.events;
          propertyFields.forEach(field => {
            // Here we need to use Object.defineProperty because, we need to return
            // the property assigned to the actual router
            // The value might get changed as we change routes and this is the
            // proper way to access it
            (0, _defineProperty.default)(instance, field, {
              get() {
                return _router[field];
              }
            });
          });
          coreMethodFields.forEach(field => {
            instance[field] = function() {
              return _router[field](...arguments);
            };
          });
          return instance;
        }

        /***/
      },

    /***/ "./node_modules/next/dist/client/with-router.js":
      /*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js"
        );

        exports.__esModule = true;
        exports.default = withRouter;

        var _extends2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"
          )
        );

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ "react")
        );

        var _propTypes = _interopRequireDefault(
          __webpack_require__(/*! prop-types */ "prop-types")
        );

        function withRouter(ComposedComponent) {
          class WithRouteWrapper extends _react.default.Component {
            constructor() {
              super(...arguments);
              this.context = void 0;
            }

            render() {
              return _react.default.createElement(
                ComposedComponent,
                (0, _extends2.default)(
                  {
                    router: this.context.router
                  },
                  this.props
                )
              );
            }
          }

          WithRouteWrapper.displayName = void 0;
          WithRouteWrapper.getInitialProps = void 0;
          WithRouteWrapper.contextTypes = {
            router: _propTypes.default.object
          };
          WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

          if (true) {
            const name =
              ComposedComponent.displayName ||
              ComposedComponent.name ||
              "Unknown";
            WithRouteWrapper.displayName = "withRouter(" + name + ")";
          }

          return WithRouteWrapper;
        }

        /***/
      },

    /***/ "./node_modules/next/link.js":
      /*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./dist/client/link */ "./node_modules/next/dist/client/link.js"
        );

        /***/
      },

    /***/ "./pages/index.tsx":
      /*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-redux */ "react-redux"
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react_redux__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-particles-js */ "react-particles-js"
        );
        /* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react_particles_js__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _src_components_page_components_home_page_HomeText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../src/components/page_components/home_page/HomeText */ "./src/components/page_components/home_page/HomeText.tsx"
        );
        /* harmony import */ var _src_components_page_components_home_page_AboutText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../src/components/page_components/home_page/AboutText */ "./src/components/page_components/home_page/AboutText.tsx"
        );
        /* harmony import */ var _src_services_home_page_services_home_particle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../src/services/home_page_services/home.particle.service */ "./src/services/home_page_services/home.particle.service.ts"
        );
        /* harmony import */ var _src_components_page_components_home_page_styles_styled_components_WelcomeText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../src/components/page_components/home_page/styles/styled_components/WelcomeText */ "./src/components/page_components/home_page/styles/styled_components/WelcomeText.ts"
        );
        /* harmony import */ var _src_components_Layout___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../src/components/Layout/ */ "./src/components/Layout/index.tsx"
        );
        var _jsxFileName =
          "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/pages/index.tsx";

        const HomePage = () => {
          const activeTheme = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]
          )(state => state.themes.activeTheme);
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
            _src_components_Layout___WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
              react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: undefined
              },
              react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                  width: "100%",
                  height: "100%",
                  params: _src_services_home_page_services_home_particle_service__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ].updateParticles(activeTheme),
                  style: {
                    backgroundColor: activeTheme.primary,
                    zIndex: -1
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  },
                  __self: undefined
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                _src_components_page_components_home_page_styles_styled_components_WelcomeText__WEBPACK_IMPORTED_MODULE_6__[
                  "WelcomeTextWrapper"
                ],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: undefined
                },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                  "div",
                  {
                    className: "welcome-text",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: undefined
                  },
                  react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                    _src_components_page_components_home_page_HomeText__WEBPACK_IMPORTED_MODULE_3__[
                      "default"
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: undefined
                    }
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                  "div",
                  {
                    className: "about-json",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    },
                    __self: undefined
                  },
                  react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                    _src_components_page_components_home_page_AboutText__WEBPACK_IMPORTED_MODULE_4__[
                      "default"
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: undefined
                    }
                  )
                )
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = HomePage;

        /***/
      },

    /***/ "./src/components/Error/index.tsx":
      /*!****************************************!*\
  !*** ./src/components/Error/index.tsx ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        var _jsxFileName =
          "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/src/components/Error/index.tsx";

        const ErrorMessage = ({ message }) =>
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "aside",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 6
              },
              __self: undefined
            },
            message
          );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = ErrorMessage;

        /***/
      },

    /***/ "./src/components/Header/index.tsx":
      /*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/router */ "next/router"
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/link */ "./node_modules/next/link.js"
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _styles_styled_components_HeaderWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./styles/styled_components/HeaderWrapper */ "./src/components/Header/styles/styled_components/HeaderWrapper.ts"
        );
        var _jsxFileName =
          "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/src/components/Header/index.tsx";

        const Header = () => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _styles_styled_components_HeaderWrapper__WEBPACK_IMPORTED_MODULE_3__[
              "HeaderWrapper"
            ],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
              {
                href: "/",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9
                },
                __self: undefined
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "a",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                  },
                  __self: undefined
                },
                "Home"
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
              {
                href: "/about",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                },
                __self: undefined
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "a",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  },
                  __self: undefined
                },
                "About"
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Object(
          next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"]
        )(Header);

        /***/
      },

    /***/ "./src/components/Header/styles/styled_components/HeaderWrapper.ts":
      /*!*************************************************************************!*\
  !*** ./src/components/Header/styles/styled_components/HeaderWrapper.ts ***!
  \*************************************************************************/
      /*! exports provided: HeaderWrapper */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HeaderWrapper",
          function() {
            return HeaderWrapper;
          }
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @emotion/styled */ "@emotion/styled"
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _emotion_styled__WEBPACK_IMPORTED_MODULE_0__
        );

        const HeaderWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default
          .a.header`
  position: fixed;
  left: 0px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

        /***/
      },

    /***/ "./src/components/Layout/index.tsx":
      /*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js"
        );
        /* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-apollo-hooks */ "react-apollo-hooks"
        );
        /* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react_apollo_hooks__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! react-redux */ "react-redux"
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          react_redux__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../Header */ "./src/components/Header/index.tsx"
        );
        /* harmony import */ var _graphql_theme_queries_theme_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../graphql/theme/queries/theme.query */ "./src/graphql/theme/queries/theme.query.ts"
        );
        /* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../Loading */ "./src/components/Loading/index.tsx"
        );
        /* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../Error */ "./src/components/Error/index.tsx"
        );
        /* harmony import */ var _store_actions_theme_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../store/actions/theme.actions */ "./src/store/actions/theme.actions.ts"
        );

        var _jsxFileName =
          "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/src/components/Layout/index.tsx";

        const Layout = ({ children }) => {
          /** Beginning State */
          const selectedTheme = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]
          )(state => state.themes.selectedTheme);
          /** End State */

          /** Beginning Dispatchers */

          const dispatch = Object(
            react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]
          )();
          /** End Dispatchers */

          /** Beginning Apollo Queries &Mutations */

          const {
            data: themeData,
            error: themeError,
            loading: themeLoading
          } = Object(
            react_apollo_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"]
          )(
            _graphql_theme_queries_theme_query__WEBPACK_IMPORTED_MODULE_5__[
              "THEME_QUERY"
            ]
          );
          /** End Apollo Queries & Mutations */

          if (themeError) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Error__WEBPACK_IMPORTED_MODULE_7__["default"],
              {
                message: "Could not upload themes",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: undefined
              }
            );
          }

          if (themeLoading) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Loading__WEBPACK_IMPORTED_MODULE_6__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                },
                __self: undefined
              }
            );
          }

          if (
            !_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(
              selectedTheme
            ).length
          ) {
            const { getAllThemes } = themeData;
            dispatch(
              Object(
                _store_actions_theme_actions__WEBPACK_IMPORTED_MODULE_8__[
                  "loadThemesAction"
                ]
              )(getAllThemes, selectedTheme)
            );
          }

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            "main",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Header__WEBPACK_IMPORTED_MODULE_4__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: undefined
              }
            ),
            children
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Layout;

        /***/
      },

    /***/ "./src/components/Loading/index.tsx":
      /*!******************************************!*\
  !*** ./src/components/Loading/index.tsx ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _global_styles_styled_components_LoadingErrorBG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../global/styles/styled_components/LoadingErrorBG */ "./src/global/styles/styled_components/LoadingErrorBG.tsx"
        );
        var _jsxFileName =
          "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/src/components/Loading/index.tsx";

        const Loading = () => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _global_styles_styled_components_LoadingErrorBG__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "h1",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8
                },
                __self: undefined
              },
              "Loading..."
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Loading;

        /***/
      },

    /***/ "./src/components/page_components/home_page/AboutText.tsx":
      /*!****************************************************************!*\
  !*** ./src/components/page_components/home_page/AboutText.tsx ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! moment */ "moment"
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _services_home_page_services_home_default_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../services/home_page_services/home.default.service */ "./src/services/home_page_services/home.default.service.ts"
        );
        var _jsxFileName =
          "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/src/components/page_components/home_page/AboutText.tsx";
        // tslint-disable-line

        const prettyHtml = __webpack_require__(
          /*! json-pretty-html */ "json-pretty-html"
        ).default;

        const AboutText = () => {
          const myBirthday = new Date(1995, 7, 30, 16, 9).toISOString();
          const [
            formattedBirthday
          ] = moment__WEBPACK_IMPORTED_MODULE_1___default()(myBirthday)
            .fromNow()
            .split(" ");
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: prettyHtml(
                  _services_home_page_services_home_default_service__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                  ].getAboutJson(formattedBirthday)
                )
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: undefined
            })
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = AboutText;

        /***/
      },

    /***/ "./src/components/page_components/home_page/HomeText.tsx":
      /*!***************************************************************!*\
  !*** ./src/components/page_components/home_page/HomeText.tsx ***!
  \***************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        var _jsxFileName =
          "/Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/src/components/page_components/home_page/HomeText.tsx";

        const HomeText = () => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 5
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "h1",
              {
                style: {
                  color: "white",
                  fontFamily: "sans-serif"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 6
                },
                __self: undefined
              },
              "Hi, I'm Eric,"
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "h2",
              {
                style: {
                  color: "white",
                  fontFamily: "sans-serif"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9
                },
                __self: undefined
              },
              "Full-Stack Software Engineer"
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "h4",
              {
                style: {
                  color: "white",
                  fontFamily: "sans-serif"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                },
                __self: undefined
              },
              "I Enjoy all things tech and hip."
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = HomeText;

        /***/
      },

    /***/ "./src/components/page_components/home_page/styles/styled_components/WelcomeText.ts":
      /*!******************************************************************************************!*\
  !*** ./src/components/page_components/home_page/styles/styled_components/WelcomeText.ts ***!
  \******************************************************************************************/
      /*! exports provided: WelcomeTextWrapper */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "WelcomeTextWrapper",
          function() {
            return WelcomeTextWrapper;
          }
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @emotion/styled */ "@emotion/styled"
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _emotion_styled__WEBPACK_IMPORTED_MODULE_0__
        );

        const WelcomeTextWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  top: 0px;
  width: 100vw;
  padding-left: 200px;
  padding-right: 200px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    padding-left: 0;
    padding-right: 0;

    &.welcome-text {
      text-align: center;
    }
  }

  span {
    font-size: 12px;
  }

  .about-json {
    .json-pretty {
      padding-top: 2em;
    }
    .json-selected {
      background-color: rgba(139, 191, 228, 0.19999999999999996);
    }

    .json-string {
      font-weight: 500;
      color: ${props => props.theme.secondary};
    }

    .json-key {
      font-weight: 800;
      color: ${props => props.theme.light};
    }

    .json-boolean {
      font-weight: 500;
      color: ${props => props.theme.secondary};
    }

    .json-number {
      font-weight: 500;
      color: ${props => props.theme.secondary};
    }
  }

  &.welcome-text {
    grid-column: 1;
  }

  &.about-json {
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

        /***/
      },

    /***/ "./src/global/styles/styled_components/LoadingErrorBG.tsx":
      /*!****************************************************************!*\
  !*** ./src/global/styles/styled_components/LoadingErrorBG.tsx ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @emotion/styled */ "@emotion/styled"
        );
        /* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _emotion_styled__WEBPACK_IMPORTED_MODULE_0__
        );

        const LoadingErrorBG = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary || "#05396B"};
  color: ${props => props.theme.white || "white"};
`;
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = LoadingErrorBG;

        /***/
      },

    /***/ "./src/graphql/theme/queries/theme.query.ts":
      /*!**************************************************!*\
  !*** ./src/graphql/theme/queries/theme.query.ts ***!
  \**************************************************/
      /*! exports provided: THEME_QUERY */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "THEME_QUERY",
          function() {
            return THEME_QUERY;
          }
        );
        /* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! apollo-boost */ "apollo-boost"
        );
        /* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          apollo_boost__WEBPACK_IMPORTED_MODULE_0__
        );

        const THEME_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getAllThemes {
    getAllThemes {
      darkMode {
        primary
        secondary
        alternate
        lightAlternate
        light
        black
        white
      }
      lightMode {
        primary
        secondary
        alternate
        lightAlternate
        light
        black
        white
      }
    }
  }
`;

        /***/
      },

    /***/ "./src/services/home_page_services/home.default.service.ts":
      /*!*****************************************************************!*\
  !*** ./src/services/home_page_services/home.default.service.ts ***!
  \*****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        class HomeDefaultService {
          static getAboutJson(birthday) {
            return {
              author: "Eric Zorn",
              username: "@zornwebdev",
              description: "Full-Stack Software Engineer",
              homepage: "zornwebdev.com",
              birthday,
              repository: {
                type: "Open-source",
                url: "github.com/ericzorn93"
              },
              engines: [
                "js",
                "ts",
                "html",
                "css",
                "nodejs",
                "python",
                "ruby",
                "php"
              ],
              dependencies: {
                "@emotion/styled": "^10.0.14",
                graphql: "^14.4.2",
                "json-pretty-html": "^1.1.6",
                react: "^16.8.6",
                "react-redux": "^7.1.0",
                redux: "^4.0.1",
                "redux-thunk": "^2.3.0",
                typescript: "3.5.2"
              },
              devDependencies: {
                music: "Blink-182",
                internet: "100mbps",
                editor: [
                  "VSCode",
                  "WebStorm",
                  "PyCharm",
                  "GemMine",
                  "Atom",
                  "PHPStorm"
                ]
              }
            };
          }
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = HomeDefaultService;

        /***/
      },

    /***/ "./src/services/home_page_services/home.particle.service.ts":
      /*!******************************************************************!*\
  !*** ./src/services/home_page_services/home.particle.service.ts ***!
  \******************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        class HomeParticleService {
          /**
           * @param activeTheme {ITheme} used to access properties on theme from the redux store
           * @returns object for react-particles-js
           */
          static updateParticles(activeTheme) {
            return {
              particles: {
                number: {
                  value: 100
                },
                shape: {
                  type: "star"
                },
                line_linked: {
                  shadow: {
                    enable: false,
                    color: activeTheme.secondary,
                    blur: 4
                  }
                },
                move: {
                  speed: 7
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                }
              },
              retina_detect: true
            };
          }
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = HomeParticleService;

        /***/
      },

    /***/ "./src/store/actions/theme.actions.ts":
      /*!********************************************!*\
  !*** ./src/store/actions/theme.actions.ts ***!
  \********************************************/
      /*! exports provided: loadThemesAction */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadThemesAction",
          function() {
            return loadThemesAction;
          }
        );
        /* harmony import */ var _types_theme_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../types/theme.types */ "./src/store/types/theme.types.ts"
        );

        const loadThemesAction = (themes, selectedTheme) => {
          console.log("theme action called");
          return async dispatch => {
            dispatch({
              type:
                _types_theme_types__WEBPACK_IMPORTED_MODULE_0__["LOAD_THEMES"],
              payload: {
                lightMode: themes.lightMode,
                darkMode: themes.darkMode,
                selectedTheme: selectedTheme || "darkMode",
                completeThemes: themes
              }
            });
          };
        };

        /***/
      },

    /***/ "./src/store/types/theme.types.ts":
      /*!****************************************!*\
  !*** ./src/store/types/theme.types.ts ***!
  \****************************************/
      /*! exports provided: LOAD_THEMES, UPDATE_SELECTED_THEME */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LOAD_THEMES",
          function() {
            return LOAD_THEMES;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "UPDATE_SELECTED_THEME",
          function() {
            return UPDATE_SELECTED_THEME;
          }
        );
        const LOAD_THEMES = "LOAD_THEMES";
        const UPDATE_SELECTED_THEME = "UPDATE_SELECTED_THEME";

        /***/
      },

    /***/ 3:
      /*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/ericzorn/Dropbox/Projects/UPDATED_PORTFOLIO/frontend/pages/index.tsx */ "./pages/index.tsx"
        );

        /***/
      },

    /***/ "@emotion/styled":
      /*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("@emotion/styled");

        /***/
      },

    /***/ "apollo-boost":
      /*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("apollo-boost");

        /***/
      },

    /***/ "core-js/library/fn/map":
      /*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/map");

        /***/
      },

    /***/ "core-js/library/fn/object/assign":
      /*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/assign");

        /***/
      },

    /***/ "core-js/library/fn/object/define-property":
      /*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/define-property");

        /***/
      },

    /***/ "core-js/library/fn/object/get-own-property-descriptor":
      /*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

        /***/
      },

    /***/ "core-js/library/fn/object/values":
      /*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("core-js/library/fn/object/values");

        /***/
      },

    /***/ "json-pretty-html":
      /*!***********************************!*\
  !*** external "json-pretty-html" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("json-pretty-html");

        /***/
      },

    /***/ moment:
      /*!*************************!*\
  !*** external "moment" ***!
  \*************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("moment");

        /***/
      },

    /***/ "next-server/dist/lib/router-context":
      /*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next-server/dist/lib/router-context");

        /***/
      },

    /***/ "next-server/dist/lib/router/rewrite-url-for-export":
      /*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

        /***/
      },

    /***/ "next-server/dist/lib/router/router":
      /*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next-server/dist/lib/router/router");

        /***/
      },

    /***/ "next-server/dist/lib/utils":
      /*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next-server/dist/lib/utils");

        /***/
      },

    /***/ "next/router":
      /*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/router");

        /***/
      },

    /***/ "prop-types":
      /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("prop-types");

        /***/
      },

    /***/ "prop-types-exact":
      /*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("prop-types-exact");

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react");

        /***/
      },

    /***/ "react-apollo-hooks":
      /*!*************************************!*\
  !*** external "react-apollo-hooks" ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-apollo-hooks");

        /***/
      },

    /***/ "react-particles-js":
      /*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-particles-js");

        /***/
      },

    /***/ "react-redux":
      /*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-redux");

        /***/
      },

    /***/ url:
      /*!**********************!*\
  !*** external "url" ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("url");

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=index.js.map