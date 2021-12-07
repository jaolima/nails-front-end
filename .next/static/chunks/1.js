(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./node_modules/@apollo/client/react/ssr/RenderPromises.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/RenderPromises.js ***!
  \*****************************************************************/
/*! exports provided: RenderPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return RenderPromises; });
function makeDefaultQueryInfo() {
    return {
        seen: false,
        observable: null
    };
}
var RenderPromises = (function () {
    function RenderPromises() {
        this.queryPromises = new Map();
        this.queryInfoTrie = new Map();
        this.stopped = false;
    }
    RenderPromises.prototype.stop = function () {
        if (!this.stopped) {
            this.queryPromises.clear();
            this.queryInfoTrie.clear();
            this.stopped = true;
        }
    };
    RenderPromises.prototype.registerSSRObservable = function (observable, props) {
        if (this.stopped)
            return;
        this.lookupQueryInfo(props).observable = observable;
    };
    RenderPromises.prototype.getSSRObservable = function (props) {
        return this.lookupQueryInfo(props).observable;
    };
    RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
        if (!this.stopped) {
            var info = this.lookupQueryInfo(queryInstance.getOptions());
            if (!info.seen) {
                this.queryPromises.set(queryInstance.getOptions(), new Promise(function (resolve) {
                    resolve(queryInstance.fetchData());
                }));
                return null;
            }
        }
        return finish();
    };
    RenderPromises.prototype.hasPromises = function () {
        return this.queryPromises.size > 0;
    };
    RenderPromises.prototype.consumeAndAwaitPromises = function () {
        var _this = this;
        var promises = [];
        this.queryPromises.forEach(function (promise, queryInstance) {
            _this.lookupQueryInfo(queryInstance).seen = true;
            promises.push(promise);
        });
        this.queryPromises.clear();
        return Promise.all(promises);
    };
    RenderPromises.prototype.lookupQueryInfo = function (props) {
        var queryInfoTrie = this.queryInfoTrie;
        var query = props.query, variables = props.variables;
        var varMap = queryInfoTrie.get(query) || new Map();
        if (!queryInfoTrie.has(query))
            queryInfoTrie.set(query, varMap);
        var variablesString = JSON.stringify(variables);
        var info = varMap.get(variablesString) || makeDefaultQueryInfo();
        if (!varMap.has(variablesString))
            varMap.set(variablesString, info);
        return info;
    };
    return RenderPromises;
}());

//# sourceMappingURL=RenderPromises.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/ssr/getDataFromTree.js":
/*!******************************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/getDataFromTree.js ***!
  \******************************************************************/
/*! exports provided: getDataFromTree, getMarkupFromTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return getDataFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return getMarkupFromTree; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/index.js");
/* harmony import */ var _RenderPromises_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RenderPromises.js */ "./node_modules/@apollo/client/react/ssr/RenderPromises.js");




function getDataFromTree(tree, context) {
    if (context === void 0) { context = {}; }
    return getMarkupFromTree({
        tree: tree,
        context: context,
        renderFunction: __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToStaticMarkup
    });
}
function getMarkupFromTree(_a) {
    var tree = _a.tree, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.renderFunction, renderFunction = _c === void 0 ? __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToStaticMarkup : _c;
    var renderPromises = new _RenderPromises_js__WEBPACK_IMPORTED_MODULE_3__["RenderPromises"]();
    function process() {
        var ApolloContext = Object(_context_index_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])();
        return new Promise(function (resolve) {
            var element = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ApolloContext.Provider, { value: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { renderPromises: renderPromises }) }, tree);
            resolve(renderFunction(element));
        }).then(function (html) {
            return renderPromises.hasPromises()
                ? renderPromises.consumeAndAwaitPromises().then(process)
                : html;
        }).finally(function () {
            renderPromises.stop();
        });
    }
    return Promise.resolve().then(process);
}
//# sourceMappingURL=getDataFromTree.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/ssr/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/index.js ***!
  \********************************************************/
/*! exports provided: getMarkupFromTree, getDataFromTree, renderToStringWithData, RenderPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataFromTree.js */ "./node_modules/@apollo/client/react/ssr/getDataFromTree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupFromTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getDataFromTree"]; });

/* harmony import */ var _renderToStringWithData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderToStringWithData.js */ "./node_modules/@apollo/client/react/ssr/renderToStringWithData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return _renderToStringWithData_js__WEBPACK_IMPORTED_MODULE_1__["renderToStringWithData"]; });

/* harmony import */ var _RenderPromises_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderPromises.js */ "./node_modules/@apollo/client/react/ssr/RenderPromises.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return _RenderPromises_js__WEBPACK_IMPORTED_MODULE_2__["RenderPromises"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/ssr/renderToStringWithData.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/renderToStringWithData.js ***!
  \*************************************************************************/
/*! exports provided: renderToStringWithData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return renderToStringWithData; });
/* harmony import */ var _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataFromTree.js */ "./node_modules/@apollo/client/react/ssr/getDataFromTree.js");

function renderToStringWithData(component) {
    return Object(_getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupFromTree"])({
        tree: component,
        renderFunction: __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToString
    });
}
//# sourceMappingURL=renderToStringWithData.js.map

/***/ }),

/***/ "./node_modules/@apollo/react-ssr/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@apollo/react-ssr/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! @apollo/client/react/ssr */ "./node_modules/@apollo/client/react/ssr/index.js");


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
function formatProdErrorMessage(code) {
  var url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;

  for (var i = 1; i < arguments.length; i++) {
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return "Minified React error #" + code + "; visit " + url + " for the full message or " + 'use the non-minified dev environment for full errors and additional ' + 'helpful warnings.';
}

var ReactVersion = '16.14.0';

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
  ReactSharedInternals.ReactCurrentDispatcher = {
    current: null
  };
}

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
  ReactSharedInternals.ReactCurrentBatchConfig = {
    suspense: null
  };
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}
function initializeLazyComponentType(lazyComponent) {
  if (lazyComponent._status === Uninitialized) {
    lazyComponent._status = Pending;
    var ctor = lazyComponent._ctor;
    var thenable = ctor();
    lazyComponent._result = thenable;
    thenable.then(function (moduleObject) {
      if (lazyComponent._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + "const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
          }
        }

        lazyComponent._status = Resolved;
        lazyComponent._result = defaultExport;
      }
    }, function (error) {
      if (lazyComponent._status === Pending) {
        lazyComponent._status = Rejected;
        lazyComponent._result = error;
      }
    });
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var enableSuspenseServerRenderer = false;

var enableDeprecatedFlareAPI = false; // Experimental Host Component support.

var ReactDebugCurrentFrame;
var didWarnAboutInvalidateContextType;

{
  ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
  didWarnAboutInvalidateContextType = new Set();
}

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;

  if (!contextTypes) {
    return emptyObject;
  }

  var maskedContext = {};

  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }

  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame.getCurrentStack);
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}
function processContext(type, context, threadID, isClass) {
  if (isClass) {
    var contextType = type.contextType;

    {
      if ('contextType' in type) {
        var isValid = // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
          didWarnAboutInvalidateContextType.add(type);
          var addendum = '';

          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }

          error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
        }
      }
    }

    if (typeof contextType === 'object' && contextType !== null) {
      validateContextBounds(contextType, threadID);
      return contextType[threadID];
    }

    {
      var maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }

      return maskedContext;
    }
  } else {
    {
      var _maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, _maskedContext, 'context');
        }
      }

      return _maskedContext;
    }
  }
}

var nextAvailableThreadIDs = new Uint16Array(16);

for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}

nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;

  if (!(newSize <= 0x10000)) {
    {
      throw Error( "Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic." );
    }
  }

  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;

  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }

  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];

  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }

  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}
function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    error('Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];

reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true);
});

var ReactDebugCurrentFrame$1 = null;

{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
} // A javascript: URL can contain leading C0 control or \u0020 SPACE,
// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */


var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  {
    if (!didWarn && isJavaScriptProtocol.test(url)) {
      didWarn = true;

      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
    }
  }
}

// code copied and modified from escape-html

/**
 * Module variables.
 * @private
 */
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */

function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}
/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */

function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);

  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }

  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      if (propertyInfo.sanitizeURL) {
        value = '' + value;
        sanitizeURL(value);
      }

      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }

  return '';
}
/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */

function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }

  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  if (!(currentlyRenderingComponent !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  {
    if (isInHookUserCodeInDev) {
      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks');
    }
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    {
      {
        throw Error( "Rendered more hooks than during the previous render" );
      }
    }
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  currentlyRenderingComponent = null;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;

  {
    isInHookUserCodeInDev = false;
  } // These were reset above
  // currentlyRenderingComponent = null;
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;


  return children;
}

function readContext(context, observedBits) {
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);

  {
    if (isInHookUserCodeInDev) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';

    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://fb.me/react-uselayouteffect-ssr for common fixes.');
  }
}

function dispatchAction(componentIdentity, queue, action) {
  if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
    {
      throw Error( "Too many re-renders. React limits the number of renders to prevent an infinite loop." );
    }
  }

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  }
}

function useCallback(callback, deps) {
  // Callbacks are passed as they are in the server environment.
  return callback;
}

function useResponder(responder, props) {
  return {
    props: props,
    responder: responder
  };
}

function useDeferredValue(value, config) {
  resolveCurrentlyRenderingComponent();
  return value;
}

function useTransition(config) {
  resolveCurrentlyRenderingComponent();

  var startTransition = function (callback) {
    callback();
  };

  return [startTransition, false];
}

function noop() {}

var currentThreadID = 0;
function setCurrentThreadID(threadID) {
  currentThreadID = threadID;
}
var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useResponder: useResponder,
  useDeferredValue: useDeferredValue,
  useTransition: useTransition
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
}; // Assumes there is no parent namespace.

function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;

    case 'math':
      return MATH_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}
function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  } // By default, pass namespace below.


  return parentNamespace;
}

var ReactDebugCurrentFrame$2 = null;
var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };
  var propTypes = {
    value: function (props, propName, componentName) {
      if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null || enableDeprecatedFlareAPI ) {
        return null;
      }

      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (props.onChange || props.readOnly || props.disabled || props[propName] == null || enableDeprecatedFlareAPI ) {
        return null;
      }

      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };
  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */

  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
    checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$2.getStackAddendum);
  };
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

var HTML = '__html';
var ReactDebugCurrentFrame$3 = null;

{
  ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
}

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
      {
        throw Error( tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + ( ReactDebugCurrentFrame$3.getStackAddendum() ) );
      }
    }
  }

  if (props.dangerouslySetInnerHTML != null) {
    if (!(props.children == null)) {
      {
        throw Error( "Can only set one of `children` or `props.dangerouslySetInnerHTML`." );
      }
    }

    if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
      {
        throw Error( "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information." );
      }
    }
  }

  {
    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }
  }

  if (!(props.style == null || typeof props.style === 'object')) {
    {
      throw Error( "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + ( ReactDebugCurrentFrame$3.getStackAddendum() ) );
    }
  }
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;

    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;

    error('`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  {
    if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    if (rARIACamel.test(name)) {
      var ariaName = 'aria-' + name.slice(4).toLowerCase();
      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (correctName == null) {
        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

        warnedProperties[name] = true;
        return true;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== correctName) {
        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

        warnedProperties[name] = true;
        return true;
      }
    }

    if (rARIA.test(name)) {
      var lowerCasedName = name.toLowerCase();
      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (standardName == null) {
        warnedProperties[name] = true;
        return false;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== standardName) {
        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties[name] = true;
        return true;
      }
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  {
    var invalidProps = [];

    for (var key in props) {
      var isValid = validateProperty(type, key);

      if (!isValid) {
        invalidProps.push(key);
      }
    }

    var unknownPropString = invalidProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (invalidProps.length === 1) {
      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
    } else if (invalidProps.length > 1) {
      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
    }
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  {
    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
      return;
    }

    if (props != null && props.value === null && !didWarnValueNull) {
      didWarnValueNull = true;

      if (type === 'select' && props.multiple) {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
      } else {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
      }
    }
  }
}

/**
 * Mapping from registration name to plugin module
 */

var registrationNameModules = {};
/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */

var possibleRegistrationNames =  {} ; // Trust the developer to only use possibleRegistrationNames in true

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (canUseEventSystem) {
      if (registrationNameModules.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  {
    var unknownProps = [];

    for (var key in props) {
      var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);

      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
    } else if (unknownProps.length > 1) {
      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
    }
  }
};

function validateProperties$2(type, props, canUseEventSystem) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, canUseEventSystem);
}

var toArray = React.Children.toArray; // This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.

var currentDebugStacks = [];
var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame$4;
var prevGetCurrentStackImpl = null;

var getCurrentServerStackImpl = function () {
  return '';
};

var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};

var pushCurrentDebugStack = function (stack) {};

var pushElementToDebugStack = function (element) {};

var popCurrentDebugStack = function () {};

var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame$4 = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props,
    /* canUseEventSystem */
    false);
  };

  describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame$4.getCurrentStack;
      ReactDebugCurrentFrame$4.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

    var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

    frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame$4.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.


    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = ''; // Go through every frame in the stack from the innermost one.

    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.

      var debugElementStack = frame.debugElementStack;

      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }

    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
}; // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = {};

function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    if (!VALID_TAG_REGEX.test(tag)) {
      {
        throw Error( "Invalid tag: " + tag );
      }
    }

    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};

var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }

  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];

    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }

    if (styleValue != null) {
      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
      delimiter = ';';
    }
  }

  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;

  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;

    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }

  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }

  var element = children;

  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }

  var fragmentChildren = element.props.children;

  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }

  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }

  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;

        error('Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!hasOwnProperty$2.call(props, propKey)) {
      continue;
    }

    var propValue = props[propKey];

    if (propValue == null) {
      continue;
    }

    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }

    var markup = null;

    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }

    if (markup) {
      ret += ' ' + markup;
    }
  } // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.


  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }

  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    {
      {
        throw Error( (getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." );
      }
    }
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;

    {
      pushElementToDebugStack(element);
    }

    if (typeof Component !== 'function') {
      break;
    }

    processChild(element, Component);
  } // Extra closure so queue and replace can be captured properly


  function processChild(element, Component) {
    var isClass = shouldConstruct(Component);
    var publicContext = processContext(Component, context, threadID, isClass);
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }

        queue.push(currentPartialState);
      }
    };
    var inst;

    if (isClass) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUninitializedState[componentName]) {
              error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);

              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);

              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);

            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }

      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }

      {
        var _componentName3 = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutModulePatternComponent[_componentName3]) {
          error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);

          didWarnAboutModulePatternComponent[_componentName3] = true;
        }
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;
    var initialState = inst.state;

    if (initialState === undefined) {
      inst.state = initialState = null;
    }

    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if ( inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName4 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
              warn( // keep this warning in sync with ReactStrictModeWarning.js
              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);

              didWarnAboutDeprecatedWillMount[_componentName4] = true;
            }
          }
        } // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }

      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }

      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;

          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];

            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }

          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }

    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }

    validateRenderResult(child, Component);
    var childContext;

    {
      if (typeof inst.getChildContext === 'function') {
        var _childContextTypes = Component.childContextTypes;

        if (typeof _childContextTypes === 'object') {
          childContext = inst.getChildContext();

          for (var contextKey in childContext) {
            if (!(contextKey in _childContextTypes)) {
              {
                throw Error( (getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes." );
              }
            }
          }
        } else {
          {
            error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
          }
        }
      }

      if (childContext) {
        context = _assign({}, context, childContext);
      }
    }
  }

  return {
    child: child,
    context: context
  };
}

var ReactDOMServerRenderer =
/*#__PURE__*/
function () {
  // TODO: type this more strictly:
  // DEV-only
  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    var flatChildren = flattenTopLevelChildren(children);
    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };

    {
      topFrame.debugElementStack = [];
    }

    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0; // Context (new API)

    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];

    {
      this.contextProviderStack = [];
    }
  }

  var _proto = ReactDOMServerRenderer.prototype;

  _proto.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  }
  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */
  ;

  _proto.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;

    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    } // Mutate the current value.


    context[threadID] = provider.props.value;
  };

  _proto.popProvider = function popProvider(provider) {
    var index = this.contextIndex;

    {
      if (index < 0 || provider !== this.contextProviderStack[index]) {
        error('Unexpected pop.');
      }
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.

    this.contextStack[index] = null;
    this.contextValueStack[index] = null;

    {
      this.contextProviderStack[index] = null;
    }

    this.contextIndex--; // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.

    context[this.threadID] = previousValue;
  };

  _proto.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      context[this.threadID] = previousValue;
    }
  };

  _proto.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevThreadID = currentThreadID;
    setCurrentThreadID(this.threadID);
    var prevDispatcher = ReactCurrentDispatcher.current;
    ReactCurrentDispatcher.current = Dispatcher;

    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;

      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }

        var frame = this.stack[this.stack.length - 1];

        if (suspended || frame.childIndex >= frame.children.length) {
          var footer = frame.footer;

          if (footer !== '') {
            this.previousWasTextNode = false;
          }

          this.stack.pop();

          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

              var fallbackFrame = frame.fallbackFrame;

              if (!fallbackFrame) {
                {
                  throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : undefined);
                }
              }

              this.stack.push(fallbackFrame);
              out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          } // Flush output


          out[this.suspenseDepth] += footer;
          continue;
        }

        var child = frame.children[frame.childIndex++];
        var outBuffer = '';

        if (true) {
          pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

          frame.debugElementStack.length = 0;
        }

        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (err != null && typeof err.then === 'function') {
            if (enableSuspenseServerRenderer) {
              if (!(this.suspenseDepth > 0)) {
                {
                  throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : undefined);
                }
              }

              suspended = true;
            } else {
              if (true) {
                {
                  throw Error(true ? "ReactDOMServer does not yet support Suspense." : undefined);
                }
              }
            }
          } else {
            throw err;
          }
        } finally {
          if (true) {
            popCurrentDebugStack();
          }
        }

        if (out.length <= this.suspenseDepth) {
          out.push('');
        }

        out[this.suspenseDepth] += outBuffer;
      }

      return out[0];
    } finally {
      ReactCurrentDispatcher.current = prevDispatcher;
      setCurrentThreadID(prevThreadID);
    }
  };

  _proto.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;

      if (text === '') {
        return '';
      }

      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }

      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }

      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;

          if (!($$typeof !== REACT_PORTAL_TYPE)) {
            {
              throw Error( "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." );
            }
          } // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


          {
            {
              throw Error( "Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue." );
            }
          }
        }

        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };

        {
          frame.debugElementStack = [];
        }

        this.stack.push(frame);
        return '';
      } // Safe because we just checked it's an element.


      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        case REACT_STRICT_MODE_TYPE:
        case REACT_CONCURRENT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_SUSPENSE_LIST_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);

            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };

            {
              _frame.debugElementStack = [];
            }

            this.stack.push(_frame);
            return '';
          }

        case REACT_SUSPENSE_TYPE:
          {
            {
              {
                {
                  throw Error( "ReactDOMServer does not yet support Suspense." );
                }
              }
            }
          }
      }

      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;

              var _nextChildren4;

              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren4 = elementType.render(element.props, element.ref);
              _nextChildren4 = finishHooks(elementType.render, element.props, _nextChildren4, element.ref);
              _nextChildren4 = toArray(_nextChildren4);
              var _frame4 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren4,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame4.debugElementStack = [];
              }

              this.stack.push(_frame4);
              return '';
            }

          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren5 = [React.createElement(elementType.type, _assign({
                ref: _element.ref
              }, _element.props))];
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame5.debugElementStack = [];
              }

              this.stack.push(_frame5);
              return '';
            }

          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;

              var _nextChildren6 = toArray(nextProps.children);

              var _frame6 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame6.debugElementStack = [];
              }

              this.pushProvider(provider);
              this.stack.push(_frame6);
              return '';
            }

          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.

              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;

                      error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }

              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren7 = toArray(_nextProps.children(nextValue));

              var _frame7 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame7.debugElementStack = [];
              }

              this.stack.push(_frame7);
              return '';
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_FUNDAMENTAL_TYPE:
            {

              {
                {
                  throw Error( "ReactDOMServer does not yet support the fundamental API." );
                }
              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_LAZY_TYPE:
            {
              var _element2 = nextChild;
              var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
              // suspense server-side renderer is enabled so synchronously
              // resolved constructors are supported.

              initializeLazyComponentType(lazyComponent);

              switch (lazyComponent._status) {
                case Resolved:
                  {
                    var _nextChildren9 = [React.createElement(lazyComponent._result, _assign({
                      ref: _element2.ref
                    }, _element2.props))];
                    var _frame9 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren9,
                      childIndex: 0,
                      context: context,
                      footer: ''
                    };

                    {
                      _frame9.debugElementStack = [];
                    }

                    this.stack.push(_frame9);
                    return '';
                  }

                case Rejected:
                  throw lazyComponent._result;

                case Pending:
                default:
                  {
                    {
                      throw Error( "ReactDOMServer does not yet support lazy-loaded components." );
                    }
                  }

              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_SCOPE_TYPE:
            {

              {
                {
                  throw Error( "ReactDOMServer does not yet support scope components." );
                }
              }
            }
        }
      }

      var info = '';

      {
        var owner = nextElement._owner;

        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }

        var ownerName = owner ? getComponentName(owner) : null;

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }

      {
        {
          throw Error( "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info );
        }
      }
    }
  };

  _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();
    var namespace = parentNamespace;

    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        if (tag !== element.type) {
          error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type);
        }
      }
    }

    validateDangerousTag(tag);
    var props = element.props;

    if (tag === 'input') {
      {
        ReactControlledValuePropTypes.checkPropTypes('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);

          didWarnDefaultChecked = true;
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);

          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes.checkPropTypes('textarea', props);

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');

          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;

      if (initialValue == null) {
        var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

        var textareaChildren = props.children;

        if (textareaChildren != null) {
          {
            error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }

          if (!(defaultValue == null)) {
            {
              throw Error( "If you supply `defaultValue` on a <textarea>, do not pass children." );
            }
          }

          if (Array.isArray(textareaChildren)) {
            if (!(textareaChildren.length <= 1)) {
              {
                throw Error( "<textarea> can only have at most one child." );
              }
            }

            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }

        if (defaultValue == null) {
          defaultValue = '';
        }

        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes.checkPropTypes('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];

          if (props[propName] == null) {
            continue;
          }

          var isArray = Array.isArray(props[propName]);

          if (props.multiple && !isArray) {
            error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');

          didWarnDefaultSelectValue = true;
        }
      }

      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);

      if (selectValue != null) {
        var value;

        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }

        selected = false;

        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);
    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';

    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }

    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);

    if (innerMarkup != null) {
      children = [];

      if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }

      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }

    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };

    {
      frame.debugElementStack = [];
    }

    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */

function renderToString(element) {
  var renderer = new ReactDOMServerRenderer(element, false);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}
/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */

function renderToStaticMarkup(element) {
  var renderer = new ReactDOMServerRenderer(element, true);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead." );
    }
  }
}

function renderToStaticNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead." );
    }
  }
} // Note: when changing this, also consider https://github.com/facebook/react/issues/11526


var ReactDOMServer = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream,
  version: ReactVersion
};

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest


var server_browser = ReactDOMServer.default || ReactDOMServer;

module.exports = server_browser;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L3Nzci9SZW5kZXJQcm9taXNlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L3JlYWN0L3Nzci9nZXREYXRhRnJvbVRyZWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9zc3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9zc3IvcmVuZGVyVG9TdHJpbmdXaXRoRGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vcmVhY3Qtc3NyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20tc2VydmVyLmJyb3dzZXIuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmJyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDeUI7QUFDMUIsMEM7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ0Y7QUFDd0I7QUFDRjtBQUM5QztBQUNQLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLG9FQUFrQjtBQUNsRCxLQUFLO0FBQ0w7QUFDTztBQUNQLHFFQUFxRSxnRUFBZ0UsbUJBQU8sQ0FBQyxvRUFBa0I7QUFDL0osNkJBQTZCLGlFQUFjO0FBQzNDO0FBQ0EsNEJBQTRCLDBFQUFnQjtBQUM1QztBQUNBLDBCQUEwQixtREFBbUIsMEJBQTBCLFFBQVEsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLGFBQWEsaUNBQWlDLEdBQUc7QUFDcEo7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDJDOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBFO0FBQ0w7QUFDaEI7QUFDckQsaUM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUF5RDtBQUNsRDtBQUNQLFdBQVcsNkVBQWlCO0FBQzVCO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsb0VBQWtCO0FBQ2xELEtBQUs7QUFDTDtBQUNBLGtEOzs7Ozs7Ozs7OztBQ1BBLGlCQUFpQixtQkFBTyxDQUFDLGtGQUEwQjs7Ozs7Ozs7Ozs7OztBQ0FuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQixjQUFjLG1CQUFPLENBQUMsZ0ZBQWU7QUFDckMscUJBQXFCLG1CQUFPLENBQUMsOEVBQTJCOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7O0FBRUE7O0FBRUEsb0ZBQW9GO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRkFBMEYsYUFBYTtBQUN2RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtJQUErSTs7QUFFL0k7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWCxvRUFBb0UsNENBQTRDO0FBQ2hIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCOztBQUVBLGdCQUFnQjtBQUNoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7OztBQUdBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixFQUFFLDhCQUE4Qjs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixZQUFZLE9BQU87QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsWUFBWSxPQUFPO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsWUFBWSxRQUFRO0FBQ3BCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCLHVCQUF1Qjs7QUFFdkIseUNBQXlDOztBQUV6Qyw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiw0Q0FBNEM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RUFBNEUsWUFBWTtBQUN4RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkhBQTJILDZCQUE2QjtBQUN4SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLDBDQUEwQzs7O0FBR2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtGQUErRjtBQUMvRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBDQUEwQzs7O0FBR2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUEsbUNBQW1DLEVBQUU7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RUFBNkU7O0FBRTdFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0pBQXNKLGlCQUFpQjtBQUN2SyxPQUFPO0FBQ1Asc0pBQXNKLGlCQUFpQix3REFBd0QsbUJBQW1CLGdCQUFnQiw4QkFBOEI7QUFDaFM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0Esb0dBQW9HLEdBQUc7O0FBRXZHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFQUFrRTs7QUFFbEUsd0NBQXdDOztBQUV4QywwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0EsbUJBQW1COztBQUVuQixtQ0FBbUMsUUFBUTtBQUMzQyw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTs7QUFFQSxpREFBaUQsU0FBUztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsMENBQTBDLHFCQUFxQjtBQUMvRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0EsNEpBQTRKLFNBQTJCO0FBQ3ZMO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ1BBQWdQLFNBQTJCO0FBQzNRO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isa0JBQWtCLElBQU07QUFDeEI7QUFDQSx1RkFBdUYsU0FBMkI7QUFDbEg7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4Q0FBOEM7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQSx1QkFBdUIsMkJBQTJCO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUMxOEhhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLDJIQUErQztBQUMxRSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtYWtlRGVmYXVsdFF1ZXJ5SW5mbygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VlbjogZmFsc2UsXHJcbiAgICAgICAgb2JzZXJ2YWJsZTogbnVsbFxyXG4gICAgfTtcclxufVxyXG52YXIgUmVuZGVyUHJvbWlzZXMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVuZGVyUHJvbWlzZXMoKSB7XHJcbiAgICAgICAgdGhpcy5xdWVyeVByb21pc2VzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMucXVlcnlJbmZvVHJpZSA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnN0b3BwZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdG9wcGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnlQcm9taXNlcy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5SW5mb1RyaWUuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLnJlZ2lzdGVyU1NST2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlLCBwcm9wcykge1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3BwZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmxvb2t1cFF1ZXJ5SW5mbyhwcm9wcykub2JzZXJ2YWJsZSA9IG9ic2VydmFibGU7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmdldFNTUk9ic2VydmFibGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb29rdXBRdWVyeUluZm8ocHJvcHMpLm9ic2VydmFibGU7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmFkZFF1ZXJ5UHJvbWlzZSA9IGZ1bmN0aW9uIChxdWVyeUluc3RhbmNlLCBmaW5pc2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RvcHBlZCkge1xyXG4gICAgICAgICAgICB2YXIgaW5mbyA9IHRoaXMubG9va3VwUXVlcnlJbmZvKHF1ZXJ5SW5zdGFuY2UuZ2V0T3B0aW9ucygpKTtcclxuICAgICAgICAgICAgaWYgKCFpbmZvLnNlZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlQcm9taXNlcy5zZXQocXVlcnlJbnN0YW5jZS5nZXRPcHRpb25zKCksIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShxdWVyeUluc3RhbmNlLmZldGNoRGF0YSgpKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaW5pc2goKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuaGFzUHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlQcm9taXNlcy5zaXplID4gMDtcclxuICAgIH07XHJcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuY29uc3VtZUFuZEF3YWl0UHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvbWlzZSwgcXVlcnlJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5sb29rdXBRdWVyeUluZm8ocXVlcnlJbnN0YW5jZSkuc2VlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5xdWVyeVByb21pc2VzLmNsZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUubG9va3VwUXVlcnlJbmZvID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICAgICAgdmFyIHF1ZXJ5SW5mb1RyaWUgPSB0aGlzLnF1ZXJ5SW5mb1RyaWU7XHJcbiAgICAgICAgdmFyIHF1ZXJ5ID0gcHJvcHMucXVlcnksIHZhcmlhYmxlcyA9IHByb3BzLnZhcmlhYmxlcztcclxuICAgICAgICB2YXIgdmFyTWFwID0gcXVlcnlJbmZvVHJpZS5nZXQocXVlcnkpIHx8IG5ldyBNYXAoKTtcclxuICAgICAgICBpZiAoIXF1ZXJ5SW5mb1RyaWUuaGFzKHF1ZXJ5KSlcclxuICAgICAgICAgICAgcXVlcnlJbmZvVHJpZS5zZXQocXVlcnksIHZhck1hcCk7XHJcbiAgICAgICAgdmFyIHZhcmlhYmxlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHZhcmlhYmxlcyk7XHJcbiAgICAgICAgdmFyIGluZm8gPSB2YXJNYXAuZ2V0KHZhcmlhYmxlc1N0cmluZykgfHwgbWFrZURlZmF1bHRRdWVyeUluZm8oKTtcclxuICAgICAgICBpZiAoIXZhck1hcC5oYXModmFyaWFibGVzU3RyaW5nKSlcclxuICAgICAgICAgICAgdmFyTWFwLnNldCh2YXJpYWJsZXNTdHJpbmcsIGluZm8pO1xyXG4gICAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZW5kZXJQcm9taXNlcztcclxufSgpKTtcclxuZXhwb3J0IHsgUmVuZGVyUHJvbWlzZXMgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVuZGVyUHJvbWlzZXMuanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRBcG9sbG9Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgUmVuZGVyUHJvbWlzZXMgfSBmcm9tIFwiLi9SZW5kZXJQcm9taXNlcy5qc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21UcmVlKHRyZWUsIGNvbnRleHQpIHtcclxuICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XHJcbiAgICByZXR1cm4gZ2V0TWFya3VwRnJvbVRyZWUoe1xyXG4gICAgICAgIHRyZWU6IHRyZWUsXHJcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcclxuICAgICAgICByZW5kZXJGdW5jdGlvbjogcmVxdWlyZSgncmVhY3QtZG9tL3NlcnZlcicpLnJlbmRlclRvU3RhdGljTWFya3VwXHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFya3VwRnJvbVRyZWUoX2EpIHtcclxuICAgIHZhciB0cmVlID0gX2EudHJlZSwgX2IgPSBfYS5jb250ZXh0LCBjb250ZXh0ID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2IsIF9jID0gX2EucmVuZGVyRnVuY3Rpb24sIHJlbmRlckZ1bmN0aW9uID0gX2MgPT09IHZvaWQgMCA/IHJlcXVpcmUoJ3JlYWN0LWRvbS9zZXJ2ZXInKS5yZW5kZXJUb1N0YXRpY01hcmt1cCA6IF9jO1xyXG4gICAgdmFyIHJlbmRlclByb21pc2VzID0gbmV3IFJlbmRlclByb21pc2VzKCk7XHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzKCkge1xyXG4gICAgICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBvbGxvQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogX19hc3NpZ24oX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IHJlbmRlclByb21pc2VzOiByZW5kZXJQcm9taXNlcyB9KSB9LCB0cmVlKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZW5kZXJGdW5jdGlvbihlbGVtZW50KSk7XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyUHJvbWlzZXMuaGFzUHJvbWlzZXMoKVxyXG4gICAgICAgICAgICAgICAgPyByZW5kZXJQcm9taXNlcy5jb25zdW1lQW5kQXdhaXRQcm9taXNlcygpLnRoZW4ocHJvY2VzcylcclxuICAgICAgICAgICAgICAgIDogaHRtbDtcclxuICAgICAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVuZGVyUHJvbWlzZXMuc3RvcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4ocHJvY2Vzcyk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0RGF0YUZyb21UcmVlLmpzLm1hcCIsImV4cG9ydCB7IGdldE1hcmt1cEZyb21UcmVlLCBnZXREYXRhRnJvbVRyZWUgfSBmcm9tIFwiLi9nZXREYXRhRnJvbVRyZWUuanNcIjtcclxuZXhwb3J0IHsgcmVuZGVyVG9TdHJpbmdXaXRoRGF0YSB9IGZyb20gXCIuL3JlbmRlclRvU3RyaW5nV2l0aERhdGEuanNcIjtcclxuZXhwb3J0IHsgUmVuZGVyUHJvbWlzZXMgfSBmcm9tIFwiLi9SZW5kZXJQcm9taXNlcy5qc1wiO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBnZXRNYXJrdXBGcm9tVHJlZSB9IGZyb20gXCIuL2dldERhdGFGcm9tVHJlZS5qc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9TdHJpbmdXaXRoRGF0YShjb21wb25lbnQpIHtcclxuICAgIHJldHVybiBnZXRNYXJrdXBGcm9tVHJlZSh7XHJcbiAgICAgICAgdHJlZTogY29tcG9uZW50LFxyXG4gICAgICAgIHJlbmRlckZ1bmN0aW9uOiByZXF1aXJlKCdyZWFjdC1kb20vc2VydmVyJykucmVuZGVyVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbmRlclRvU3RyaW5nV2l0aERhdGEuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3InKTtcclxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xNC4wXHJcbiAqIHJlYWN0LWRvbS1zZXJ2ZXIuYnJvd3Nlci5kZXZlbG9wbWVudC5qc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xyXG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJyk7XHJcblxyXG4vLyBEbyBub3QgcmVxdWlyZSB0aGlzIG1vZHVsZSBkaXJlY3RseSEgVXNlIG5vcm1hbCBgaW52YXJpYW50YCBjYWxscyB3aXRoXHJcbi8vIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5ncy4gVGhlIG1lc3NhZ2VzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBlcnJvciBjb2Rlc1xyXG4vLyBkdXJpbmcgYnVpbGQuXHJcbmZ1bmN0aW9uIGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoY29kZSkge1xyXG4gIHZhciB1cmwgPSAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9JyArIGNvZGU7XHJcblxyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB1cmwgKz0gJyZhcmdzW109JyArIGVuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbaV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiICsgY29kZSArIFwiOyB2aXNpdCBcIiArIHVybCArIFwiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIFwiICsgJ3VzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgJyArICdoZWxwZnVsIHdhcm5pbmdzLic7XHJcbn1cclxuXHJcbnZhciBSZWFjdFZlcnNpb24gPSAnMTYuMTQuMCc7XHJcblxyXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDsgLy8gUHJldmVudCBuZXdlciByZW5kZXJlcnMgZnJvbSBSVEUgd2hlbiB1c2VkIHdpdGggb2xkZXIgcmVhY3QgcGFja2FnZSB2ZXJzaW9ucy5cclxuLy8gQ3VycmVudCBvd25lciBhbmQgZGlzcGF0Y2hlciB1c2VkIHRvIHNoYXJlIHRoZSBzYW1lIHJlZixcclxuLy8gYnV0IFBSICMxNDU0OCBzcGxpdCB0aGVtIG91dCB0byBiZXR0ZXIgc3VwcG9ydCB0aGUgcmVhY3QtZGVidWctdG9vbHMgcGFja2FnZS5cclxuXHJcbmlmICghUmVhY3RTaGFyZWRJbnRlcm5hbHMuaGFzT3duUHJvcGVydHkoJ1JlYWN0Q3VycmVudERpc3BhdGNoZXInKSkge1xyXG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XHJcbiAgICBjdXJyZW50OiBudWxsXHJcbiAgfTtcclxufVxyXG5cclxuaWYgKCFSZWFjdFNoYXJlZEludGVybmFscy5oYXNPd25Qcm9wZXJ0eSgnUmVhY3RDdXJyZW50QmF0Y2hDb25maWcnKSkge1xyXG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xyXG4gICAgc3VzcGVuc2U6IG51bGxcclxuICB9O1xyXG59XHJcblxyXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxyXG4vL1xyXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxyXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXHJcblxyXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xyXG4gIHtcclxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XHJcbiAge1xyXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcclxuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XHJcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXHJcbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXHJcbiAge1xyXG4gICAgdmFyIGhhc0V4aXN0aW5nU3RhY2sgPSBhcmdzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgJiYgYXJnc1thcmdzLmxlbmd0aCAtIDFdLmluZGV4T2YoJ1xcbiAgICBpbicpID09PSAwO1xyXG5cclxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xyXG4gICAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XHJcbiAgICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xyXG5cclxuICAgICAgaWYgKHN0YWNrICE9PSAnJykge1xyXG4gICAgICAgIGZvcm1hdCArPSAnJXMnO1xyXG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XHJcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcclxuXHJcbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcclxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcclxuXHJcbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cclxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXHJcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxyXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xyXG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKHgpIHt9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxyXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXHJcbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XHJcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xyXG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XHJcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcclxudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xyXG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XHJcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxyXG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcclxudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xyXG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XHJcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XHJcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XHJcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XHJcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcclxudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xyXG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XHJcblxyXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xyXG52YXIgUGVuZGluZyA9IDA7XHJcbnZhciBSZXNvbHZlZCA9IDE7XHJcbnZhciBSZWplY3RlZCA9IDI7XHJcbmZ1bmN0aW9uIHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudChsYXp5Q29tcG9uZW50KSB7XHJcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVMYXp5Q29tcG9uZW50VHlwZShsYXp5Q29tcG9uZW50KSB7XHJcbiAgaWYgKGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xyXG4gICAgbGF6eUNvbXBvbmVudC5fc3RhdHVzID0gUGVuZGluZztcclxuICAgIHZhciBjdG9yID0gbGF6eUNvbXBvbmVudC5fY3RvcjtcclxuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTtcclxuICAgIGxhenlDb21wb25lbnQuX3Jlc3VsdCA9IHRoZW5hYmxlO1xyXG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XHJcbiAgICAgIGlmIChsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFBlbmRpbmcpIHtcclxuICAgICAgICB2YXIgZGVmYXVsdEV4cG9ydCA9IG1vZHVsZU9iamVjdC5kZWZhdWx0O1xyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZiAoZGVmYXVsdEV4cG9ydCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIFwiY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGF6eUNvbXBvbmVudC5fc3RhdHVzID0gUmVzb2x2ZWQ7XHJcbiAgICAgICAgbGF6eUNvbXBvbmVudC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcclxuICAgICAgfVxyXG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGlmIChsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFBlbmRpbmcpIHtcclxuICAgICAgICBsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPSBSZWplY3RlZDtcclxuICAgICAgICBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgPSBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcclxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xyXG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xyXG4gIGlmICh0eXBlID09IG51bGwpIHtcclxuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xyXG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gdHlwZTtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxyXG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcclxuXHJcbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxyXG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XHJcblxyXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxyXG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xyXG5cclxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcclxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcclxuXHJcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XHJcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xyXG5cclxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxyXG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcclxuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XHJcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcclxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxyXG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcclxuXHJcbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxyXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XHJcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xyXG5cclxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFyIHRoZW5hYmxlID0gdHlwZTtcclxuICAgICAgICAgIHZhciByZXNvbHZlZFRoZW5hYmxlID0gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KHRoZW5hYmxlKTtcclxuXHJcbiAgICAgICAgICBpZiAocmVzb2x2ZWRUaGVuYWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShyZXNvbHZlZFRoZW5hYmxlKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XHJcbmZ1bmN0aW9uIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUgKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKSB7XHJcbiAgdmFyIHNvdXJjZUluZm8gPSAnJztcclxuXHJcbiAgaWYgKHNvdXJjZSkge1xyXG4gICAgdmFyIHBhdGggPSBzb3VyY2UuZmlsZU5hbWU7XHJcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XHJcblxyXG4gICAge1xyXG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxyXG4gICAgICAvLyBwcmVmZXIgXCJmb2xkZXIvaW5kZXguanNcIiBpbnN0ZWFkIG9mIGp1c3QgXCJpbmRleC5qc1wiLlxyXG4gICAgICBpZiAoL15pbmRleFxcLi8udGVzdChmaWxlTmFtZSkpIHtcclxuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XHJcblxyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xyXG5cclxuICAgICAgICAgIGlmIChwYXRoQmVmb3JlU2xhc2gpIHtcclxuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcclxuICAgICAgICAgICAgZmlsZU5hbWUgPSBmb2xkZXJOYW1lICsgJy8nICsgZmlsZU5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc291cmNlSW5mbyA9ICcgKGF0ICcgKyBmaWxlTmFtZSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknO1xyXG4gIH0gZWxzZSBpZiAob3duZXJOYW1lKSB7XHJcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xyXG59XHJcblxyXG52YXIgZW5hYmxlU3VzcGVuc2VTZXJ2ZXJSZW5kZXJlciA9IGZhbHNlO1xyXG5cclxudmFyIGVuYWJsZURlcHJlY2F0ZWRGbGFyZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgSG9zdCBDb21wb25lbnQgc3VwcG9ydC5cclxuXHJcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xyXG52YXIgZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlO1xyXG5cclxue1xyXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xyXG4gIGRpZFdhcm5BYm91dEludmFsaWRhdGVDb250ZXh0VHlwZSA9IG5ldyBTZXQoKTtcclxufVxyXG5cclxudmFyIGVtcHR5T2JqZWN0ID0ge307XHJcblxyXG57XHJcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hc2tDb250ZXh0KHR5cGUsIGNvbnRleHQpIHtcclxuICB2YXIgY29udGV4dFR5cGVzID0gdHlwZS5jb250ZXh0VHlwZXM7XHJcblxyXG4gIGlmICghY29udGV4dFR5cGVzKSB7XHJcbiAgICByZXR1cm4gZW1wdHlPYmplY3Q7XHJcbiAgfVxyXG5cclxuICB2YXIgbWFza2VkQ29udGV4dCA9IHt9O1xyXG5cclxuICBmb3IgKHZhciBjb250ZXh0TmFtZSBpbiBjb250ZXh0VHlwZXMpIHtcclxuICAgIG1hc2tlZENvbnRleHRbY29udGV4dE5hbWVdID0gY29udGV4dFtjb250ZXh0TmFtZV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWFza2VkQ29udGV4dDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDb250ZXh0VHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uKSB7XHJcbiAge1xyXG4gICAgY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCAnQ29tcG9uZW50JywgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2spO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVDb250ZXh0Qm91bmRzKGNvbnRleHQsIHRocmVhZElEKSB7XHJcbiAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBlbm91Z2ggc2xvdHMgaW4gdGhpcyBjb250ZXh0IHRvIHN0b3JlIHRoaXMgdGhyZWFkSUQsXHJcbiAgLy8gZmlsbCBpdCBpbiB3aXRob3V0IGxlYXZpbmcgYW55IGhvbGVzIHRvIGVuc3VyZSB0aGF0IHRoZSBWTSBvcHRpbWl6ZXNcclxuICAvLyB0aGlzIGFzIG5vbi1ob2xleSBpbmRleCBwcm9wZXJ0aWVzLlxyXG4gIC8vIChOb3RlOiBJZiBgcmVhY3RgIHBhY2thZ2UgaXMgPCAxNi42LCBfdGhyZWFkQ291bnQgaXMgdW5kZWZpbmVkLilcclxuICBmb3IgKHZhciBpID0gY29udGV4dC5fdGhyZWFkQ291bnQgfCAwOyBpIDw9IHRocmVhZElEOyBpKyspIHtcclxuICAgIC8vIFdlIGFzc3VtZSB0aGF0IHRoaXMgaXMgdGhlIHNhbWUgYXMgdGhlIGRlZmF1bHRWYWx1ZSB3aGljaCBtaWdodCBub3QgYmVcclxuICAgIC8vIHRydWUgaWYgd2UncmUgcmVuZGVyaW5nIGluc2lkZSBhIHNlY29uZGFyeSByZW5kZXJlciBidXQgdGhleSBhcmVcclxuICAgIC8vIHNlY29uZGFyeSBiZWNhdXNlIHRoZXNlIHVzZSBjYXNlcyBhcmUgdmVyeSByYXJlLlxyXG4gICAgY29udGV4dFtpXSA9IGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XHJcbiAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IGkgKyAxO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBwcm9jZXNzQ29udGV4dCh0eXBlLCBjb250ZXh0LCB0aHJlYWRJRCwgaXNDbGFzcykge1xyXG4gIGlmIChpc0NsYXNzKSB7XHJcbiAgICB2YXIgY29udGV4dFR5cGUgPSB0eXBlLmNvbnRleHRUeXBlO1xyXG5cclxuICAgIHtcclxuICAgICAgaWYgKCdjb250ZXh0VHlwZScgaW4gdHlwZSkge1xyXG4gICAgICAgIHZhciBpc1ZhbGlkID0gLy8gQWxsb3cgbnVsbCBmb3IgY29uZGl0aW9uYWwgZGVjbGFyYXRpb25cclxuICAgICAgICBjb250ZXh0VHlwZSA9PT0gbnVsbCB8fCBjb250ZXh0VHlwZSAhPT0gdW5kZWZpbmVkICYmIGNvbnRleHRUeXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgJiYgY29udGV4dFR5cGUuX2NvbnRleHQgPT09IHVuZGVmaW5lZDsgLy8gTm90IGEgPENvbnRleHQuQ29uc3VtZXI+XHJcblxyXG4gICAgICAgIGlmICghaXNWYWxpZCAmJiAhZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlLmhhcyh0eXBlKSkge1xyXG4gICAgICAgICAgZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlLmFkZCh0eXBlKTtcclxuICAgICAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xyXG5cclxuICAgICAgICAgIGlmIChjb250ZXh0VHlwZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFkZGVuZHVtID0gJyBIb3dldmVyLCBpdCBpcyBzZXQgdG8gdW5kZWZpbmVkLiAnICsgJ1RoaXMgY2FuIGJlIGNhdXNlZCBieSBhIHR5cG8gb3IgYnkgbWl4aW5nIHVwIG5hbWVkIGFuZCBkZWZhdWx0IGltcG9ydHMuICcgKyAnVGhpcyBjYW4gYWxzbyBoYXBwZW4gZHVlIHRvIGEgY2lyY3VsYXIgZGVwZW5kZW5jeSwgc28gJyArICd0cnkgbW92aW5nIHRoZSBjcmVhdGVDb250ZXh0KCkgY2FsbCB0byBhIHNlcGFyYXRlIGZpbGUuJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnRleHRUeXBlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgSG93ZXZlciwgaXQgaXMgc2V0IHRvIGEgJyArIHR5cGVvZiBjb250ZXh0VHlwZSArICcuJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dFR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUpIHtcclxuICAgICAgICAgICAgYWRkZW5kdW0gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgdGhlIENvbnRleHQuUHJvdmlkZXIgaW5zdGVhZD8nO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0VHlwZS5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIDxDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyB0aGUgQ29udGV4dC5Db25zdW1lciBpbnN0ZWFkPyc7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgSG93ZXZlciwgaXQgaXMgc2V0IHRvIGFuIG9iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjb250ZXh0VHlwZSkuam9pbignLCAnKSArICd9Lic7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZXJyb3IoJyVzIGRlZmluZXMgYW4gaW52YWxpZCBjb250ZXh0VHlwZS4gJyArICdjb250ZXh0VHlwZSBzaG91bGQgcG9pbnQgdG8gdGhlIENvbnRleHQgb2JqZWN0IHJldHVybmVkIGJ5IFJlYWN0LmNyZWF0ZUNvbnRleHQoKS4lcycsIGdldENvbXBvbmVudE5hbWUodHlwZSkgfHwgJ0NvbXBvbmVudCcsIGFkZGVuZHVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGNvbnRleHRUeXBlID09PSAnb2JqZWN0JyAmJiBjb250ZXh0VHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICB2YWxpZGF0ZUNvbnRleHRCb3VuZHMoY29udGV4dFR5cGUsIHRocmVhZElEKTtcclxuICAgICAgcmV0dXJuIGNvbnRleHRUeXBlW3RocmVhZElEXTtcclxuICAgIH1cclxuXHJcbiAgICB7XHJcbiAgICAgIHZhciBtYXNrZWRDb250ZXh0ID0gbWFza0NvbnRleHQodHlwZSwgY29udGV4dCk7XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKHR5cGUuY29udGV4dFR5cGVzKSB7XHJcbiAgICAgICAgICBjaGVja0NvbnRleHRUeXBlcyh0eXBlLmNvbnRleHRUeXBlcywgbWFza2VkQ29udGV4dCwgJ2NvbnRleHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBtYXNrZWRDb250ZXh0O1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB7XHJcbiAgICAgIHZhciBfbWFza2VkQ29udGV4dCA9IG1hc2tDb250ZXh0KHR5cGUsIGNvbnRleHQpO1xyXG5cclxuICAgICAge1xyXG4gICAgICAgIGlmICh0eXBlLmNvbnRleHRUeXBlcykge1xyXG4gICAgICAgICAgY2hlY2tDb250ZXh0VHlwZXModHlwZS5jb250ZXh0VHlwZXMsIF9tYXNrZWRDb250ZXh0LCAnY29udGV4dCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIF9tYXNrZWRDb250ZXh0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxudmFyIG5leHRBdmFpbGFibGVUaHJlYWRJRHMgPSBuZXcgVWludDE2QXJyYXkoMTYpO1xyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1tpXSA9IGkgKyAxO1xyXG59XHJcblxyXG5uZXh0QXZhaWxhYmxlVGhyZWFkSURzWzE1XSA9IDA7XHJcblxyXG5mdW5jdGlvbiBncm93VGhyZWFkQ291bnRBbmRSZXR1cm5OZXh0QXZhaWxhYmxlKCkge1xyXG4gIHZhciBvbGRBcnJheSA9IG5leHRBdmFpbGFibGVUaHJlYWRJRHM7XHJcbiAgdmFyIG9sZFNpemUgPSBvbGRBcnJheS5sZW5ndGg7XHJcbiAgdmFyIG5ld1NpemUgPSBvbGRTaXplICogMjtcclxuXHJcbiAgaWYgKCEobmV3U2l6ZSA8PSAweDEwMDAwKSkge1xyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvciggXCJNYXhpbXVtIG51bWJlciBvZiBjb25jdXJyZW50IFJlYWN0IHJlbmRlcmVycyBleGNlZWRlZC4gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBhcmUgbm90IHByb3Blcmx5IGRlc3Ryb3lpbmcgdGhlIFJlYWRhYmxlIHByb3ZpZGVkIGJ5IFJlYWN0LiBFbnN1cmUgdGhhdCB5b3UgY2FsbCAuZGVzdHJveSgpIG9uIGl0IGlmIHlvdSBubyBsb25nZXIgd2FudCB0byByZWFkIGZyb20gaXQsIGFuZCBkaWQgbm90IHJlYWQgdG8gdGhlIGVuZC4gSWYgeW91IHVzZSAucGlwZSgpIHRoaXMgc2hvdWxkIGJlIGF1dG9tYXRpYy5cIiApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG5ld0FycmF5ID0gbmV3IFVpbnQxNkFycmF5KG5ld1NpemUpO1xyXG4gIG5ld0FycmF5LnNldChvbGRBcnJheSk7XHJcbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEcyA9IG5ld0FycmF5O1xyXG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF0gPSBvbGRTaXplICsgMTtcclxuXHJcbiAgZm9yICh2YXIgX2kgPSBvbGRTaXplOyBfaSA8IG5ld1NpemUgLSAxOyBfaSsrKSB7XHJcbiAgICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW19pXSA9IF9pICsgMTtcclxuICB9XHJcblxyXG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbbmV3U2l6ZSAtIDFdID0gMDtcclxuICByZXR1cm4gb2xkU2l6ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsb2NUaHJlYWRJRCgpIHtcclxuICB2YXIgbmV4dElEID0gbmV4dEF2YWlsYWJsZVRocmVhZElEc1swXTtcclxuXHJcbiAgaWYgKG5leHRJRCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIGdyb3dUaHJlYWRDb3VudEFuZFJldHVybk5leHRBdmFpbGFibGUoKTtcclxuICB9XHJcblxyXG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF0gPSBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW25leHRJRF07XHJcbiAgcmV0dXJuIG5leHRJRDtcclxufVxyXG5mdW5jdGlvbiBmcmVlVGhyZWFkSUQoaWQpIHtcclxuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW2lkXSA9IG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF07XHJcbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1swXSA9IGlkO1xyXG59XHJcblxyXG4vLyBBIHJlc2VydmVkIGF0dHJpYnV0ZS5cclxuLy8gSXQgaXMgaGFuZGxlZCBieSBSZWFjdCBzZXBhcmF0ZWx5IGFuZCBzaG91bGRuJ3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxyXG52YXIgUkVTRVJWRUQgPSAwOyAvLyBBIHNpbXBsZSBzdHJpbmcgYXR0cmlidXRlLlxyXG4vLyBBdHRyaWJ1dGVzIHRoYXQgYXJlbid0IGluIHRoZSB3aGl0ZWxpc3QgYXJlIHByZXN1bWVkIHRvIGhhdmUgdGhpcyB0eXBlLlxyXG5cclxudmFyIFNUUklORyA9IDE7IC8vIEEgc3RyaW5nIGF0dHJpYnV0ZSB0aGF0IGFjY2VwdHMgYm9vbGVhbnMgaW4gUmVhY3QuIEluIEhUTUwsIHRoZXNlIGFyZSBjYWxsZWRcclxuLy8gXCJlbnVtZXJhdGVkXCIgYXR0cmlidXRlcyB3aXRoIFwidHJ1ZVwiIGFuZCBcImZhbHNlXCIgYXMgcG9zc2libGUgdmFsdWVzLlxyXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBzZXQgdG8gYSBcInRydWVcIiBzdHJpbmcuXHJcbi8vIFdoZW4gZmFsc2UsIGl0IHNob3VsZCBiZSBzZXQgdG8gYSBcImZhbHNlXCIgc3RyaW5nLlxyXG5cclxudmFyIEJPT0xFQU5JU0hfU1RSSU5HID0gMjsgLy8gQSByZWFsIGJvb2xlYW4gYXR0cmlidXRlLlxyXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBwcmVzZW50IChzZXQgZWl0aGVyIHRvIGFuIGVtcHR5IHN0cmluZyBvciBpdHMgbmFtZSkuXHJcbi8vIFdoZW4gZmFsc2UsIGl0IHNob3VsZCBiZSBvbWl0dGVkLlxyXG5cclxudmFyIEJPT0xFQU4gPSAzOyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBjYW4gYmUgdXNlZCBhcyBhIGZsYWcgYXMgd2VsbCBhcyB3aXRoIGEgdmFsdWUuXHJcbi8vIFdoZW4gdHJ1ZSwgaXQgc2hvdWxkIGJlIHByZXNlbnQgKHNldCBlaXRoZXIgdG8gYW4gZW1wdHkgc3RyaW5nIG9yIGl0cyBuYW1lKS5cclxuLy8gV2hlbiBmYWxzZSwgaXQgc2hvdWxkIGJlIG9taXR0ZWQuXHJcbi8vIEZvciBhbnkgb3RoZXIgdmFsdWUsIHNob3VsZCBiZSBwcmVzZW50IHdpdGggdGhhdCB2YWx1ZS5cclxuXHJcbnZhciBPVkVSTE9BREVEX0JPT0xFQU4gPSA0OyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBtdXN0IGJlIG51bWVyaWMgb3IgcGFyc2UgYXMgYSBudW1lcmljLlxyXG4vLyBXaGVuIGZhbHN5LCBpdCBzaG91bGQgYmUgcmVtb3ZlZC5cclxuXHJcbnZhciBOVU1FUklDID0gNTsgLy8gQW4gYXR0cmlidXRlIHRoYXQgbXVzdCBiZSBwb3NpdGl2ZSBudW1lcmljIG9yIHBhcnNlIGFzIGEgcG9zaXRpdmUgbnVtZXJpYy5cclxuLy8gV2hlbiBmYWxzeSwgaXQgc2hvdWxkIGJlIHJlbW92ZWQuXHJcblxyXG52YXIgUE9TSVRJVkVfTlVNRVJJQyA9IDY7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXHJcbnZhciBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSID0gXCI6QS1aX2EtelxcXFx1MDBDMC1cXFxcdTAwRDZcXFxcdTAwRDgtXFxcXHUwMEY2XFxcXHUwMEY4LVxcXFx1MDJGRlxcXFx1MDM3MC1cXFxcdTAzN0RcXFxcdTAzN0YtXFxcXHUxRkZGXFxcXHUyMDBDLVxcXFx1MjAwRFxcXFx1MjA3MC1cXFxcdTIxOEZcXFxcdTJDMDAtXFxcXHUyRkVGXFxcXHUzMDAxLVxcXFx1RDdGRlxcXFx1RjkwMC1cXFxcdUZEQ0ZcXFxcdUZERjAtXFxcXHVGRkZEXCI7XHJcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xyXG5cclxudmFyIEFUVFJJQlVURV9OQU1FX0NIQVIgPSBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSICsgXCJcXFxcLS4wLTlcXFxcdTAwQjdcXFxcdTAzMDAtXFxcXHUwMzZGXFxcXHUyMDNGLVxcXFx1MjA0MFwiO1xyXG52YXIgUk9PVF9BVFRSSUJVVEVfTkFNRSA9ICdkYXRhLXJlYWN0cm9vdCc7XHJcbnZhciBWQUxJRF9BVFRSSUJVVEVfTkFNRV9SRUdFWCA9IG5ldyBSZWdFeHAoJ15bJyArIEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgKyAnXVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcclxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxudmFyIGlsbGVnYWxBdHRyaWJ1dGVOYW1lQ2FjaGUgPSB7fTtcclxudmFyIHZhbGlkYXRlZEF0dHJpYnV0ZU5hbWVDYWNoZSA9IHt9O1xyXG5mdW5jdGlvbiBpc0F0dHJpYnV0ZU5hbWVTYWZlKGF0dHJpYnV0ZU5hbWUpIHtcclxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh2YWxpZGF0ZWRBdHRyaWJ1dGVOYW1lQ2FjaGUsIGF0dHJpYnV0ZU5hbWUpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGlsbGVnYWxBdHRyaWJ1dGVOYW1lQ2FjaGUsIGF0dHJpYnV0ZU5hbWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoVkFMSURfQVRUUklCVVRFX05BTUVfUkVHRVgudGVzdChhdHRyaWJ1dGVOYW1lKSkge1xyXG4gICAgdmFsaWRhdGVkQXR0cmlidXRlTmFtZUNhY2hlW2F0dHJpYnV0ZU5hbWVdID0gdHJ1ZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWxsZWdhbEF0dHJpYnV0ZU5hbWVDYWNoZVthdHRyaWJ1dGVOYW1lXSA9IHRydWU7XHJcblxyXG4gIHtcclxuICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBuYW1lOiBgJXNgJywgYXR0cmlidXRlTmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gc2hvdWxkSWdub3JlQXR0cmlidXRlKG5hbWUsIHByb3BlcnR5SW5mbywgaXNDdXN0b21Db21wb25lbnRUYWcpIHtcclxuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gcHJvcGVydHlJbmZvLnR5cGUgPT09IFJFU0VSVkVEO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAobmFtZS5sZW5ndGggPiAyICYmIChuYW1lWzBdID09PSAnbycgfHwgbmFtZVswXSA9PT0gJ08nKSAmJiAobmFtZVsxXSA9PT0gJ24nIHx8IG5hbWVbMV0gPT09ICdOJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIHNob3VsZFJlbW92ZUF0dHJpYnV0ZVdpdGhXYXJuaW5nKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XHJcbiAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCAmJiBwcm9wZXJ0eUluZm8udHlwZSA9PT0gUkVTRVJWRUQpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XHJcbiAgICBjYXNlICdmdW5jdGlvbic6IC8vICRGbG93SXNzdWUgc3ltYm9sIGlzIHBlcmZlY3RseSB2YWxpZCBoZXJlXHJcblxyXG4gICAgY2FzZSAnc3ltYm9sJzpcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAge1xyXG4gICAgICAgIGlmIChpc0N1c3RvbUNvbXBvbmVudFRhZykge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgcmV0dXJuICFwcm9wZXJ0eUluZm8uYWNjZXB0c0Jvb2xlYW5zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgcHJlZml4ID0gbmFtZS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsIDUpO1xyXG4gICAgICAgICAgcmV0dXJuIHByZWZpeCAhPT0gJ2RhdGEtJyAmJiBwcmVmaXggIT09ICdhcmlhLSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzaG91bGRSZW1vdmVBdHRyaWJ1dGUobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgaXNDdXN0b21Db21wb25lbnRUYWcpIHtcclxuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoc2hvdWxkUmVtb3ZlQXR0cmlidXRlV2l0aFdhcm5pbmcobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgaXNDdXN0b21Db21wb25lbnRUYWcpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0N1c3RvbUNvbXBvbmVudFRhZykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCkge1xyXG4gICAgc3dpdGNoIChwcm9wZXJ0eUluZm8udHlwZSkge1xyXG4gICAgICBjYXNlIEJPT0xFQU46XHJcbiAgICAgICAgcmV0dXJuICF2YWx1ZTtcclxuXHJcbiAgICAgIGNhc2UgT1ZFUkxPQURFRF9CT09MRUFOOlxyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gZmFsc2U7XHJcblxyXG4gICAgICBjYXNlIE5VTUVSSUM6XHJcbiAgICAgICAgcmV0dXJuIGlzTmFOKHZhbHVlKTtcclxuXHJcbiAgICAgIGNhc2UgUE9TSVRJVkVfTlVNRVJJQzpcclxuICAgICAgICByZXR1cm4gaXNOYU4odmFsdWUpIHx8IHZhbHVlIDwgMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eUluZm8obmFtZSkge1xyXG4gIHJldHVybiBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KG5hbWUpID8gcHJvcGVydGllc1tuYW1lXSA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCB0eXBlLCBtdXN0VXNlUHJvcGVydHksIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZU5hbWVzcGFjZSwgc2FuaXRpemVVUkwpIHtcclxuICB0aGlzLmFjY2VwdHNCb29sZWFucyA9IHR5cGUgPT09IEJPT0xFQU5JU0hfU1RSSU5HIHx8IHR5cGUgPT09IEJPT0xFQU4gfHwgdHlwZSA9PT0gT1ZFUkxPQURFRF9CT09MRUFOO1xyXG4gIHRoaXMuYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZU5hbWU7XHJcbiAgdGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2UgPSBhdHRyaWJ1dGVOYW1lc3BhY2U7XHJcbiAgdGhpcy5tdXN0VXNlUHJvcGVydHkgPSBtdXN0VXNlUHJvcGVydHk7XHJcbiAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBuYW1lO1xyXG4gIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgdGhpcy5zYW5pdGl6ZVVSTCA9IHNhbml0aXplVVJMO1xyXG59IC8vIFdoZW4gYWRkaW5nIGF0dHJpYnV0ZXMgdG8gdGhpcyBsaXN0LCBiZSBzdXJlIHRvIGFsc28gYWRkIHRoZW0gdG9cclxuLy8gdGhlIGBwb3NzaWJsZVN0YW5kYXJkTmFtZXNgIG1vZHVsZSB0byBlbnN1cmUgY2FzaW5nIGFuZCBpbmNvcnJlY3RcclxuLy8gbmFtZSB3YXJuaW5ncy5cclxuXHJcblxyXG52YXIgcHJvcGVydGllcyA9IHt9OyAvLyBUaGVzZSBwcm9wcyBhcmUgcmVzZXJ2ZWQgYnkgUmVhY3QuIFRoZXkgc2hvdWxkbid0IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cclxuXHJcbnZhciByZXNlcnZlZFByb3BzID0gWydjaGlsZHJlbicsICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsIC8vIFRPRE86IFRoaXMgcHJldmVudHMgdGhlIGFzc2lnbm1lbnQgb2YgZGVmYXVsdFZhbHVlIHRvIHJlZ3VsYXJcclxuLy8gZWxlbWVudHMgKG5vdCBqdXN0IGlucHV0cykuIE5vdyB0aGF0IFJlYWN0RE9NSW5wdXQgYXNzaWducyB0byB0aGVcclxuLy8gZGVmYXVsdFZhbHVlIHByb3BlcnR5IC0tIGRvIHdlIG5lZWQgdGhpcz9cclxuJ2RlZmF1bHRWYWx1ZScsICdkZWZhdWx0Q2hlY2tlZCcsICdpbm5lckhUTUwnLCAnc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nJywgJ3N1cHByZXNzSHlkcmF0aW9uV2FybmluZycsICdzdHlsZSddO1xyXG5cclxucmVzZXJ2ZWRQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgUkVTRVJWRUQsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcclxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXHJcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXHJcbiAgZmFsc2UpO1xyXG59KTsgLy8gQSBmZXcgUmVhY3Qgc3RyaW5nIGF0dHJpYnV0ZXMgaGF2ZSBhIGRpZmZlcmVudCBuYW1lLlxyXG4vLyBUaGlzIGlzIGEgbWFwcGluZyBmcm9tIFJlYWN0IHByb3AgbmFtZXMgdG8gdGhlIGF0dHJpYnV0ZSBuYW1lcy5cclxuXHJcbltbJ2FjY2VwdENoYXJzZXQnLCAnYWNjZXB0LWNoYXJzZXQnXSwgWydjbGFzc05hbWUnLCAnY2xhc3MnXSwgWydodG1sRm9yJywgJ2ZvciddLCBbJ2h0dHBFcXVpdicsICdodHRwLWVxdWl2J11dLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcclxuICB2YXIgbmFtZSA9IF9yZWZbMF0sXHJcbiAgICAgIGF0dHJpYnV0ZU5hbWUgPSBfcmVmWzFdO1xyXG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxyXG4gIGF0dHJpYnV0ZU5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcclxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcclxuICBmYWxzZSk7XHJcbn0pOyAvLyBUaGVzZSBhcmUgXCJlbnVtZXJhdGVkXCIgSFRNTCBhdHRyaWJ1dGVzIHRoYXQgYWNjZXB0IFwidHJ1ZVwiIGFuZCBcImZhbHNlXCIuXHJcbi8vIEluIFJlYWN0LCB3ZSBsZXQgdXNlcnMgcGFzcyBgdHJ1ZWAgYW5kIGBmYWxzZWAgZXZlbiB0aG91Z2ggdGVjaG5pY2FsbHlcclxuLy8gdGhlc2UgYXJlbid0IGJvb2xlYW4gYXR0cmlidXRlcyAodGhleSBhcmUgY29lcmNlZCB0byBzdHJpbmdzKS5cclxuXHJcblsnY29udGVudEVkaXRhYmxlJywgJ2RyYWdnYWJsZScsICdzcGVsbENoZWNrJywgJ3ZhbHVlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xyXG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU5JU0hfU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XHJcbiAgbmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXHJcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXHJcbiAgZmFsc2UpO1xyXG59KTsgLy8gVGhlc2UgYXJlIFwiZW51bWVyYXRlZFwiIFNWRyBhdHRyaWJ1dGVzIHRoYXQgYWNjZXB0IFwidHJ1ZVwiIGFuZCBcImZhbHNlXCIuXHJcbi8vIEluIFJlYWN0LCB3ZSBsZXQgdXNlcnMgcGFzcyBgdHJ1ZWAgYW5kIGBmYWxzZWAgZXZlbiB0aG91Z2ggdGVjaG5pY2FsbHlcclxuLy8gdGhlc2UgYXJlbid0IGJvb2xlYW4gYXR0cmlidXRlcyAodGhleSBhcmUgY29lcmNlZCB0byBzdHJpbmdzKS5cclxuLy8gU2luY2UgdGhlc2UgYXJlIFNWRyBhdHRyaWJ1dGVzLCB0aGVpciBhdHRyaWJ1dGUgbmFtZXMgYXJlIGNhc2Utc2Vuc2l0aXZlLlxyXG5cclxuWydhdXRvUmV2ZXJzZScsICdleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkJywgJ2ZvY3VzYWJsZScsICdwcmVzZXJ2ZUFscGhhJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xyXG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU5JU0hfU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XHJcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxyXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxyXG4gIGZhbHNlKTtcclxufSk7IC8vIFRoZXNlIGFyZSBIVE1MIGJvb2xlYW4gYXR0cmlidXRlcy5cclxuXHJcblsnYWxsb3dGdWxsU2NyZWVuJywgJ2FzeW5jJywgLy8gTm90ZTogdGhlcmUgaXMgYSBzcGVjaWFsIGNhc2UgdGhhdCBwcmV2ZW50cyBpdCBmcm9tIGJlaW5nIHdyaXR0ZW4gdG8gdGhlIERPTVxyXG4vLyBvbiB0aGUgY2xpZW50IHNpZGUgYmVjYXVzZSB0aGUgYnJvd3NlcnMgYXJlIGluY29uc2lzdGVudC4gSW5zdGVhZCB3ZSBjYWxsIGZvY3VzKCkuXHJcbidhdXRvRm9jdXMnLCAnYXV0b1BsYXknLCAnY29udHJvbHMnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXNhYmxlZCcsICdkaXNhYmxlUGljdHVyZUluUGljdHVyZScsICdmb3JtTm9WYWxpZGF0ZScsICdoaWRkZW4nLCAnbG9vcCcsICdub01vZHVsZScsICdub1ZhbGlkYXRlJywgJ29wZW4nLCAncGxheXNJbmxpbmUnLCAncmVhZE9ubHknLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAnc2NvcGVkJywgJ3NlYW1sZXNzJywgLy8gTWljcm9kYXRhXHJcbidpdGVtU2NvcGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgQk9PTEVBTiwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxyXG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxyXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxyXG4gIGZhbHNlKTtcclxufSk7IC8vIFRoZXNlIGFyZSB0aGUgZmV3IFJlYWN0IHByb3BzIHRoYXQgd2Ugc2V0IGFzIERPTSBwcm9wZXJ0aWVzXHJcbi8vIHJhdGhlciB0aGFuIGF0dHJpYnV0ZXMuIFRoZXNlIGFyZSBhbGwgYm9vbGVhbnMuXHJcblxyXG5bJ2NoZWNrZWQnLCAvLyBOb3RlOiBgb3B0aW9uLnNlbGVjdGVkYCBpcyBub3QgdXBkYXRlZCBpZiBgc2VsZWN0Lm11bHRpcGxlYCBpc1xyXG4vLyBkaXNhYmxlZCB3aXRoIGByZW1vdmVBdHRyaWJ1dGVgLiBXZSBoYXZlIHNwZWNpYWwgbG9naWMgZm9yIGhhbmRsaW5nIHRoaXMuXHJcbidtdWx0aXBsZScsICdtdXRlZCcsICdzZWxlY3RlZCcgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXHJcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxyXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxyXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcclxuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOLCB0cnVlLCAvLyBtdXN0VXNlUHJvcGVydHlcclxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXHJcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXHJcbiAgZmFsc2UpO1xyXG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IGFyZSBcIm92ZXJsb2FkZWQgYm9vbGVhbnNcIjogdGhleSBiZWhhdmUgbGlrZVxyXG4vLyBib29sZWFucywgYnV0IGNhbiBhbHNvIGFjY2VwdCBhIHN0cmluZyB2YWx1ZS5cclxuXHJcblsnY2FwdHVyZScsICdkb3dubG9hZCcgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXHJcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxyXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxyXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcclxuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBPVkVSTE9BREVEX0JPT0xFQU4sIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcclxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXHJcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXHJcbiAgZmFsc2UpO1xyXG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IG11c3QgYmUgcG9zaXRpdmUgbnVtYmVycy5cclxuXHJcblsnY29scycsICdyb3dzJywgJ3NpemUnLCAnc3BhbicgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXHJcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxyXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxyXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcclxuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBQT1NJVElWRV9OVU1FUklDLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XHJcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxyXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxyXG4gIGZhbHNlKTtcclxufSk7IC8vIFRoZXNlIGFyZSBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBtdXN0IGJlIG51bWJlcnMuXHJcblxyXG5bJ3Jvd1NwYW4nLCAnc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgTlVNRVJJQywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxyXG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxyXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxyXG4gIGZhbHNlKTtcclxufSk7XHJcbnZhciBDQU1FTElaRSA9IC9bXFwtXFw6XShbYS16XSkvZztcclxuXHJcbnZhciBjYXBpdGFsaXplID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgcmV0dXJuIHRva2VuWzFdLnRvVXBwZXJDYXNlKCk7XHJcbn07IC8vIFRoaXMgaXMgYSBsaXN0IG9mIGFsbCBTVkcgYXR0cmlidXRlcyB0aGF0IG5lZWQgc3BlY2lhbCBjYXNpbmcsIG5hbWVzcGFjaW5nLFxyXG4vLyBvciBib29sZWFuIHZhbHVlIGFzc2lnbm1lbnQuIFJlZ3VsYXIgYXR0cmlidXRlcyB0aGF0IGp1c3QgYWNjZXB0IHN0cmluZ3NcclxuLy8gYW5kIGhhdmUgdGhlIHNhbWUgbmFtZXMgYXJlIG9taXR0ZWQsIGp1c3QgbGlrZSBpbiB0aGUgSFRNTCB3aGl0ZWxpc3QuXHJcbi8vIFNvbWUgb2YgdGhlc2UgYXR0cmlidXRlcyBjYW4gYmUgaGFyZCB0byBmaW5kLiBUaGlzIGxpc3Qgd2FzIGNyZWF0ZWQgYnlcclxuLy8gc2NyYXBpbmcgdGhlIE1ETiBkb2N1bWVudGF0aW9uLlxyXG5cclxuXHJcblsnYWNjZW50LWhlaWdodCcsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXJhYmljLWZvcm0nLCAnYmFzZWxpbmUtc2hpZnQnLCAnY2FwLWhlaWdodCcsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2RvbWluYW50LWJhc2VsaW5lJywgJ2VuYWJsZS1iYWNrZ3JvdW5kJywgJ2ZpbGwtb3BhY2l0eScsICdmaWxsLXJ1bGUnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZ2x5cGgtbmFtZScsICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJywgJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJywgJ2hvcml6LWFkdi14JywgJ2hvcml6LW9yaWdpbi14JywgJ2ltYWdlLXJlbmRlcmluZycsICdsZXR0ZXItc3BhY2luZycsICdsaWdodGluZy1jb2xvcicsICdtYXJrZXItZW5kJywgJ21hcmtlci1taWQnLCAnbWFya2VyLXN0YXJ0JywgJ292ZXJsaW5lLXBvc2l0aW9uJywgJ292ZXJsaW5lLXRoaWNrbmVzcycsICdwYWludC1vcmRlcicsICdwYW5vc2UtMScsICdwb2ludGVyLWV2ZW50cycsICdyZW5kZXJpbmctaW50ZW50JywgJ3NoYXBlLXJlbmRlcmluZycsICdzdG9wLWNvbG9yJywgJ3N0b3Atb3BhY2l0eScsICdzdHJpa2V0aHJvdWdoLXBvc2l0aW9uJywgJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZS13aWR0aCcsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndW5kZXJsaW5lLXBvc2l0aW9uJywgJ3VuZGVybGluZS10aGlja25lc3MnLCAndW5pY29kZS1iaWRpJywgJ3VuaWNvZGUtcmFuZ2UnLCAndW5pdHMtcGVyLWVtJywgJ3YtYWxwaGFiZXRpYycsICd2LWhhbmdpbmcnLCAndi1pZGVvZ3JhcGhpYycsICd2LW1hdGhlbWF0aWNhbCcsICd2ZWN0b3ItZWZmZWN0JywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dvcmQtc3BhY2luZycsICd3cml0aW5nLW1vZGUnLCAneG1sbnM6eGxpbmsnLCAneC1oZWlnaHQnIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxyXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcclxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XHJcbiAgdmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoQ0FNRUxJWkUsIGNhcGl0YWxpemUpO1xyXG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxyXG4gIGF0dHJpYnV0ZU5hbWUsIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxyXG4gIGZhbHNlKTtcclxufSk7IC8vIFN0cmluZyBTVkcgYXR0cmlidXRlcyB3aXRoIHRoZSB4bGluayBuYW1lc3BhY2UuXHJcblxyXG5bJ3hsaW5rOmFjdHVhdGUnLCAneGxpbms6YXJjcm9sZScsICd4bGluazpyb2xlJywgJ3hsaW5rOnNob3cnLCAneGxpbms6dGl0bGUnLCAneGxpbms6dHlwZScgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXHJcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxyXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxyXG5dLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcclxuICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShDQU1FTElaRSwgY2FwaXRhbGl6ZSk7XHJcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XHJcbiAgYXR0cmlidXRlTmFtZSwgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBmYWxzZSk7XHJcbn0pOyAvLyBTdHJpbmcgU1ZHIGF0dHJpYnV0ZXMgd2l0aCB0aGUgeG1sIG5hbWVzcGFjZS5cclxuXHJcblsneG1sOmJhc2UnLCAneG1sOmxhbmcnLCAneG1sOnNwYWNlJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcclxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXHJcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXHJcbl0uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xyXG4gIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKENBTUVMSVpFLCBjYXBpdGFsaXplKTtcclxuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcclxuICBhdHRyaWJ1dGVOYW1lLCAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJywgZmFsc2UpO1xyXG59KTsgLy8gVGhlc2UgYXR0cmlidXRlIGV4aXN0cyBib3RoIGluIEhUTUwgYW5kIFNWRy5cclxuLy8gVGhlIGF0dHJpYnV0ZSBuYW1lIGlzIGNhc2Utc2Vuc2l0aXZlIGluIFNWRyBzbyB3ZSBjYW4ndCBqdXN0IHVzZVxyXG4vLyB0aGUgUmVhY3QgbmFtZSBsaWtlIHdlIGRvIGZvciBhdHRyaWJ1dGVzIHRoYXQgZXhpc3Qgb25seSBpbiBIVE1MLlxyXG5cclxuWyd0YWJJbmRleCcsICdjcm9zc09yaWdpbiddLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcclxuICBwcm9wZXJ0aWVzW2F0dHJpYnV0ZU5hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChhdHRyaWJ1dGVOYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcclxuICBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcclxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcclxuICBmYWxzZSk7XHJcbn0pOyAvLyBUaGVzZSBhdHRyaWJ1dGVzIGFjY2VwdCBVUkxzLiBUaGVzZSBtdXN0IG5vdCBhbGxvdyBqYXZhc2NyaXB0OiBVUkxTLlxyXG4vLyBUaGVzZSB3aWxsIGFsc28gbmVlZCB0byBhY2NlcHQgVHJ1c3RlZCBUeXBlcyBvYmplY3QgaW4gdGhlIGZ1dHVyZS5cclxuXHJcbnZhciB4bGlua0hyZWYgPSAneGxpbmtIcmVmJztcclxucHJvcGVydGllc1t4bGlua0hyZWZdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZCgneGxpbmtIcmVmJywgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XHJcbid4bGluazpocmVmJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCB0cnVlKTtcclxuWydzcmMnLCAnaHJlZicsICdhY3Rpb24nLCAnZm9ybUFjdGlvbiddLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcclxuICBwcm9wZXJ0aWVzW2F0dHJpYnV0ZU5hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChhdHRyaWJ1dGVOYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcclxuICBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcclxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcclxuICB0cnVlKTtcclxufSk7XHJcblxyXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gbnVsbDtcclxuXHJcbntcclxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xyXG59IC8vIEEgamF2YXNjcmlwdDogVVJMIGNhbiBjb250YWluIGxlYWRpbmcgQzAgY29udHJvbCBvciBcXHUwMDIwIFNQQUNFLFxyXG4vLyBhbmQgYW55IG5ld2xpbmUgb3IgdGFiIGFyZSBmaWx0ZXJlZCBvdXQgYXMgaWYgdGhleSdyZSBub3QgcGFydCBvZiB0aGUgVVJMLlxyXG4vLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybC1wYXJzaW5nXHJcbi8vIFRhYiBvciBuZXdsaW5lIGFyZSBkZWZpbmVkIGFzIFxcclxcblxcdDpcclxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2FzY2lpLXRhYi1vci1uZXdsaW5lXHJcbi8vIEEgQzAgY29udHJvbCBpcyBhIGNvZGUgcG9pbnQgaW4gdGhlIHJhbmdlIFxcdTAwMDAgTlVMTCB0byBcXHUwMDFGXHJcbi8vIElORk9STUFUSU9OIFNFUEFSQVRPUiBPTkUsIGluY2x1c2l2ZTpcclxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2MwLWNvbnRyb2wtb3Itc3BhY2VcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuXHJcblxyXG52YXIgaXNKYXZhU2NyaXB0UHJvdG9jb2wgPSAvXltcXHUwMDAwLVxcdTAwMUYgXSpqW1xcclxcblxcdF0qYVtcXHJcXG5cXHRdKnZbXFxyXFxuXFx0XSphW1xcclxcblxcdF0qc1tcXHJcXG5cXHRdKmNbXFxyXFxuXFx0XSpyW1xcclxcblxcdF0qaVtcXHJcXG5cXHRdKnBbXFxyXFxuXFx0XSp0W1xcclxcblxcdF0qXFw6L2k7XHJcbnZhciBkaWRXYXJuID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzYW5pdGl6ZVVSTCh1cmwpIHtcclxuICB7XHJcbiAgICBpZiAoIWRpZFdhcm4gJiYgaXNKYXZhU2NyaXB0UHJvdG9jb2wudGVzdCh1cmwpKSB7XHJcbiAgICAgIGRpZFdhcm4gPSB0cnVlO1xyXG5cclxuICAgICAgZXJyb3IoJ0EgZnV0dXJlIHZlcnNpb24gb2YgUmVhY3Qgd2lsbCBibG9jayBqYXZhc2NyaXB0OiBVUkxzIGFzIGEgc2VjdXJpdHkgcHJlY2F1dGlvbi4gJyArICdVc2UgZXZlbnQgaGFuZGxlcnMgaW5zdGVhZCBpZiB5b3UgY2FuLiBJZiB5b3UgbmVlZCB0byBnZW5lcmF0ZSB1bnNhZmUgSFRNTCB0cnkgJyArICd1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCBpbnN0ZWFkLiBSZWFjdCB3YXMgcGFzc2VkICVzLicsIEpTT04uc3RyaW5naWZ5KHVybCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gY29kZSBjb3BpZWQgYW5kIG1vZGlmaWVkIGZyb20gZXNjYXBlLWh0bWxcclxuXHJcbi8qKlxyXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxudmFyIG1hdGNoSHRtbFJlZ0V4cCA9IC9bXCInJjw+XS87XHJcbi8qKlxyXG4gKiBFc2NhcGVzIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgSFRNTCBlbnRpdGllcyBpbiBhIGdpdmVuIGh0bWwgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyBIVE1MIHN0cmluZyB0byBlc2NhcGUgZm9yIGxhdGVyIGluc2VydGlvblxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZykge1xyXG4gIHZhciBzdHIgPSAnJyArIHN0cmluZztcclxuICB2YXIgbWF0Y2ggPSBtYXRjaEh0bWxSZWdFeHAuZXhlYyhzdHIpO1xyXG5cclxuICBpZiAoIW1hdGNoKSB7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgdmFyIGVzY2FwZTtcclxuICB2YXIgaHRtbCA9ICcnO1xyXG4gIHZhciBpbmRleDtcclxuICB2YXIgbGFzdEluZGV4ID0gMDtcclxuXHJcbiAgZm9yIChpbmRleCA9IG1hdGNoLmluZGV4OyBpbmRleCA8IHN0ci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaW5kZXgpKSB7XHJcbiAgICAgIGNhc2UgMzQ6XHJcbiAgICAgICAgLy8gXCJcclxuICAgICAgICBlc2NhcGUgPSAnJnF1b3Q7JztcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgLy8gJlxyXG4gICAgICAgIGVzY2FwZSA9ICcmYW1wOyc7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDM5OlxyXG4gICAgICAgIC8vICdcclxuICAgICAgICBlc2NhcGUgPSAnJiN4Mjc7JzsgLy8gbW9kaWZpZWQgZnJvbSBlc2NhcGUtaHRtbDsgdXNlZCB0byBiZSAnJiMzOSdcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDYwOlxyXG4gICAgICAgIC8vIDxcclxuICAgICAgICBlc2NhcGUgPSAnJmx0Oyc7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDYyOlxyXG4gICAgICAgIC8vID5cclxuICAgICAgICBlc2NhcGUgPSAnJmd0Oyc7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsYXN0SW5kZXggIT09IGluZGV4KSB7XHJcbiAgICAgIGh0bWwgKz0gc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XHJcbiAgICBodG1sICs9IGVzY2FwZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBsYXN0SW5kZXggIT09IGluZGV4ID8gaHRtbCArIHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCkgOiBodG1sO1xyXG59IC8vIGVuZCBjb2RlIGNvcGllZCBhbmQgbW9kaWZpZWQgZnJvbSBlc2NhcGUtaHRtbFxyXG5cclxuLyoqXHJcbiAqIEVzY2FwZXMgdGV4dCB0byBwcmV2ZW50IHNjcmlwdGluZyBhdHRhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHRleHQgVGV4dCB2YWx1ZSB0byBlc2NhcGUuXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gQW4gZXNjYXBlZCBzdHJpbmcuXHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGVzY2FwZVRleHRGb3JCcm93c2VyKHRleHQpIHtcclxuICBpZiAodHlwZW9mIHRleHQgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgdGV4dCA9PT0gJ251bWJlcicpIHtcclxuICAgIC8vIHRoaXMgc2hvcnRjaXJjdWl0IGhlbHBzIHBlcmYgZm9yIHR5cGVzIHRoYXQgd2Uga25vdyB3aWxsIG5ldmVyIGhhdmVcclxuICAgIC8vIHNwZWNpYWwgY2hhcmFjdGVycywgZXNwZWNpYWxseSBnaXZlbiB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgdXNlZCBvZnRlblxyXG4gICAgLy8gZm9yIG51bWVyaWMgZG9tIGlkcy5cclxuICAgIHJldHVybiAnJyArIHRleHQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXNjYXBlSHRtbCh0ZXh0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVzY2FwZXMgYXR0cmlidXRlIHZhbHVlIHRvIHByZXZlbnQgc2NyaXB0aW5nIGF0dGFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gZXNjYXBlLlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEFuIGVzY2FwZWQgc3RyaW5nLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHF1b3RlQXR0cmlidXRlVmFsdWVGb3JCcm93c2VyKHZhbHVlKSB7XHJcbiAgcmV0dXJuICdcIicgKyBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih2YWx1ZSkgKyAnXCInO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JSb290KCkge1xyXG4gIHJldHVybiBST09UX0FUVFJJQlVURV9OQU1FICsgJz1cIlwiJztcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBtYXJrdXAgZm9yIGEgcHJvcGVydHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICogQHJldHVybiB7P3N0cmluZ30gTWFya3VwIHN0cmluZywgb3IgbnVsbCBpZiB0aGUgcHJvcGVydHkgd2FzIGludmFsaWQuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFya3VwRm9yUHJvcGVydHkobmFtZSwgdmFsdWUpIHtcclxuICB2YXIgcHJvcGVydHlJbmZvID0gZ2V0UHJvcGVydHlJbmZvKG5hbWUpO1xyXG5cclxuICBpZiAobmFtZSAhPT0gJ3N0eWxlJyAmJiBzaG91bGRJZ25vcmVBdHRyaWJ1dGUobmFtZSwgcHJvcGVydHlJbmZvLCBmYWxzZSkpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIGlmIChzaG91bGRSZW1vdmVBdHRyaWJ1dGUobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgZmFsc2UpKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XHJcbiAgICB2YXIgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5SW5mby5hdHRyaWJ1dGVOYW1lO1xyXG4gICAgdmFyIHR5cGUgPSBwcm9wZXJ0eUluZm8udHlwZTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gQk9PTEVBTiB8fCB0eXBlID09PSBPVkVSTE9BREVEX0JPT0xFQU4gJiYgdmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWUgKyAnPVwiXCInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHByb3BlcnR5SW5mby5zYW5pdGl6ZVVSTCkge1xyXG4gICAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcclxuICAgICAgICBzYW5pdGl6ZVVSTCh2YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lICsgJz0nICsgcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNBdHRyaWJ1dGVOYW1lU2FmZShuYW1lKSkge1xyXG4gICAgcmV0dXJuIG5hbWUgKyAnPScgKyBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3Nlcih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gJyc7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgbWFya3VwIGZvciBhIGN1c3RvbSBwcm9wZXJ0eS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICogQHBhcmFtIHsqfSB2YWx1ZVxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IE1hcmt1cCBzdHJpbmcsIG9yIGVtcHR5IHN0cmluZyBpZiB0aGUgcHJvcGVydHkgd2FzIGludmFsaWQuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFya3VwRm9yQ3VzdG9tQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XHJcbiAgaWYgKCFpc0F0dHJpYnV0ZU5hbWVTYWZlKG5hbWUpIHx8IHZhbHVlID09IG51bGwpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHJldHVybiBuYW1lICsgJz0nICsgcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpO1xyXG59XHJcblxyXG4vKipcclxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxyXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcclxuICovXHJcbmZ1bmN0aW9uIGlzKHgsIHkpIHtcclxuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxyXG4gIDtcclxufVxyXG5cclxudmFyIG9iamVjdElzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGlzO1xyXG5cclxudmFyIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IG51bGw7XHJcbnZhciBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XHJcbnZhciB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsOyAvLyBXaGV0aGVyIHRoZSB3b3JrLWluLXByb2dyZXNzIGhvb2sgaXMgYSByZS1yZW5kZXJlZCBob29rXHJcblxyXG52YXIgaXNSZVJlbmRlciA9IGZhbHNlOyAvLyBXaGV0aGVyIGFuIHVwZGF0ZSB3YXMgc2NoZWR1bGVkIGR1cmluZyB0aGUgY3VycmVudGx5IGV4ZWN1dGluZyByZW5kZXIgcGFzcy5cclxuXHJcbnZhciBkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlID0gZmFsc2U7IC8vIExhemlseSBjcmVhdGVkIG1hcCBvZiByZW5kZXItcGhhc2UgdXBkYXRlc1xyXG5cclxudmFyIHJlbmRlclBoYXNlVXBkYXRlcyA9IG51bGw7IC8vIENvdW50ZXIgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wcy5cclxuXHJcbnZhciBudW1iZXJPZlJlUmVuZGVycyA9IDA7XHJcbnZhciBSRV9SRU5ERVJfTElNSVQgPSAyNTtcclxudmFyIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlOyAvLyBJbiBERVYsIHRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnRseSBleGVjdXRpbmcgcHJpbWl0aXZlIGhvb2tcclxuXHJcbnZhciBjdXJyZW50SG9va05hbWVJbkRldjtcclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKSB7XHJcbiAgaWYgKCEoY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ICE9PSBudWxsKSkge1xyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC1pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCIgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHtcclxuICAgIGlmIChpc0luSG9va1VzZXJDb2RlSW5EZXYpIHtcclxuICAgICAgZXJyb3IoJ0RvIG5vdCBjYWxsIEhvb2tzIGluc2lkZSB1c2VFZmZlY3QoLi4uKSwgdXNlTWVtbyguLi4pLCBvciBvdGhlciBidWlsdC1pbiBIb29rcy4gJyArICdZb3UgY2FuIG9ubHkgY2FsbCBIb29rcyBhdCB0aGUgdG9wIGxldmVsIG9mIHlvdXIgUmVhY3QgZnVuY3Rpb24uICcgKyAnRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSAnICsgJ2h0dHBzOi8vZmIubWUvcnVsZXMtb2YtaG9va3MnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFyZUhvb2tJbnB1dHNFcXVhbChuZXh0RGVwcywgcHJldkRlcHMpIHtcclxuICBpZiAocHJldkRlcHMgPT09IG51bGwpIHtcclxuICAgIHtcclxuICAgICAgZXJyb3IoJyVzIHJlY2VpdmVkIGEgZmluYWwgYXJndW1lbnQgZHVyaW5nIHRoaXMgcmVuZGVyLCBidXQgbm90IGR1cmluZyAnICsgJ3RoZSBwcmV2aW91cyByZW5kZXIuIEV2ZW4gdGhvdWdoIHRoZSBmaW5hbCBhcmd1bWVudCBpcyBvcHRpb25hbCwgJyArICdpdHMgdHlwZSBjYW5ub3QgY2hhbmdlIGJldHdlZW4gcmVuZGVycy4nLCBjdXJyZW50SG9va05hbWVJbkRldik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAge1xyXG4gICAgLy8gRG9uJ3QgYm90aGVyIGNvbXBhcmluZyBsZW5ndGhzIGluIHByb2QgYmVjYXVzZSB0aGVzZSBhcnJheXMgc2hvdWxkIGJlXHJcbiAgICAvLyBwYXNzZWQgaW5saW5lLlxyXG4gICAgaWYgKG5leHREZXBzLmxlbmd0aCAhPT0gcHJldkRlcHMubGVuZ3RoKSB7XHJcbiAgICAgIGVycm9yKCdUaGUgZmluYWwgYXJndW1lbnQgcGFzc2VkIHRvICVzIGNoYW5nZWQgc2l6ZSBiZXR3ZWVuIHJlbmRlcnMuIFRoZSAnICsgJ29yZGVyIGFuZCBzaXplIG9mIHRoaXMgYXJyYXkgbXVzdCByZW1haW4gY29uc3RhbnQuXFxuXFxuJyArICdQcmV2aW91czogJXNcXG4nICsgJ0luY29taW5nOiAlcycsIGN1cnJlbnRIb29rTmFtZUluRGV2LCBcIltcIiArIG5leHREZXBzLmpvaW4oJywgJykgKyBcIl1cIiwgXCJbXCIgKyBwcmV2RGVwcy5qb2luKCcsICcpICsgXCJdXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmV2RGVwcy5sZW5ndGggJiYgaSA8IG5leHREZXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAob2JqZWN0SXMobmV4dERlcHNbaV0sIHByZXZEZXBzW2ldKSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG9vaygpIHtcclxuICBpZiAobnVtYmVyT2ZSZVJlbmRlcnMgPiAwKSB7XHJcbiAgICB7XHJcbiAgICAgIHtcclxuICAgICAgICB0aHJvdyBFcnJvciggXCJSZW5kZXJlZCBtb3JlIGhvb2tzIHRoYW4gZHVyaW5nIHRoZSBwcmV2aW91cyByZW5kZXJcIiApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbWVtb2l6ZWRTdGF0ZTogbnVsbCxcclxuICAgIHF1ZXVlOiBudWxsLFxyXG4gICAgbmV4dDogbnVsbFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpIHtcclxuICBpZiAod29ya0luUHJvZ3Jlc3NIb29rID09PSBudWxsKSB7XHJcbiAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCBob29rIGluIHRoZSBsaXN0XHJcbiAgICBpZiAoZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2sgPT09IG51bGwpIHtcclxuICAgICAgaXNSZVJlbmRlciA9IGZhbHNlO1xyXG4gICAgICBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZUhvb2soKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRoZXJlJ3MgYWxyZWFkeSBhIHdvcmstaW4tcHJvZ3Jlc3MuIFJldXNlIGl0LlxyXG4gICAgICBpc1JlUmVuZGVyID0gdHJ1ZTtcclxuICAgICAgd29ya0luUHJvZ3Jlc3NIb29rID0gZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2s7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh3b3JrSW5Qcm9ncmVzc0hvb2submV4dCA9PT0gbnVsbCkge1xyXG4gICAgICBpc1JlUmVuZGVyID0gZmFsc2U7IC8vIEFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XHJcblxyXG4gICAgICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSB3b3JrSW5Qcm9ncmVzc0hvb2submV4dCA9IGNyZWF0ZUhvb2soKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRoZXJlJ3MgYWxyZWFkeSBhIHdvcmstaW4tcHJvZ3Jlc3MuIFJldXNlIGl0LlxyXG4gICAgICBpc1JlUmVuZGVyID0gdHJ1ZTtcclxuICAgICAgd29ya0luUHJvZ3Jlc3NIb29rID0gd29ya0luUHJvZ3Jlc3NIb29rLm5leHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd29ya0luUHJvZ3Jlc3NIb29rO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlVG9Vc2VIb29rcyhjb21wb25lbnRJZGVudGl0eSkge1xyXG4gIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IGNvbXBvbmVudElkZW50aXR5O1xyXG5cclxuICB7XHJcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcclxuICB9IC8vIFRoZSBmb2xsb3dpbmcgc2hvdWxkIGhhdmUgYWxyZWFkeSBiZWVuIHJlc2V0XHJcbiAgLy8gZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xyXG4gIC8vIGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcclxuICAvLyBudW1iZXJPZlJlUmVuZGVycyA9IDA7XHJcbiAgLy8gcmVuZGVyUGhhc2VVcGRhdGVzID0gbnVsbDtcclxuICAvLyB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xyXG5cclxufVxyXG5mdW5jdGlvbiBmaW5pc2hIb29rcyhDb21wb25lbnQsIHByb3BzLCBjaGlsZHJlbiwgcmVmT3JDb250ZXh0KSB7XHJcbiAgLy8gVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBldmVyeSBmdW5jdGlvbiBjb21wb25lbnQgdG8gcHJldmVudCBob29rcyBmcm9tXHJcbiAgLy8gYmVpbmcgdXNlZCBpbiBjbGFzc2VzLlxyXG4gIHdoaWxlIChkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlKSB7XHJcbiAgICAvLyBVcGRhdGVzIHdlcmUgc2NoZWR1bGVkIGR1cmluZyB0aGUgcmVuZGVyIHBoYXNlLiBUaGV5IGFyZSBzdG9yZWQgaW5cclxuICAgIC8vIHRoZSBgcmVuZGVyUGhhc2VVcGRhdGVzYCBtYXAuIENhbGwgdGhlIGNvbXBvbmVudCBhZ2FpbiwgcmV1c2luZyB0aGVcclxuICAgIC8vIHdvcmstaW4tcHJvZ3Jlc3MgaG9va3MgYW5kIGFwcGx5aW5nIHRoZSBhZGRpdGlvbmFsIHVwZGF0ZXMgb24gdG9wLiBLZWVwXHJcbiAgICAvLyByZXN0YXJ0aW5nIHVudGlsIG5vIG1vcmUgdXBkYXRlcyBhcmUgc2NoZWR1bGVkLlxyXG4gICAgZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgbnVtYmVyT2ZSZVJlbmRlcnMgKz0gMTsgLy8gU3RhcnQgb3ZlciBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RcclxuXHJcbiAgICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xyXG4gICAgY2hpbGRyZW4gPSBDb21wb25lbnQocHJvcHMsIHJlZk9yQ29udGV4dCk7XHJcbiAgfVxyXG5cclxuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSBudWxsO1xyXG4gIGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcclxuICBudW1iZXJPZlJlUmVuZGVycyA9IDA7XHJcbiAgcmVuZGVyUGhhc2VVcGRhdGVzID0gbnVsbDtcclxuICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xyXG5cclxuICB7XHJcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcclxuICB9IC8vIFRoZXNlIHdlcmUgcmVzZXQgYWJvdmVcclxuICAvLyBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSBudWxsO1xyXG4gIC8vIGRpZFNjaGVkdWxlUmVuZGVyUGhhc2VVcGRhdGUgPSBmYWxzZTtcclxuICAvLyBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XHJcbiAgLy8gbnVtYmVyT2ZSZVJlbmRlcnMgPSAwO1xyXG4gIC8vIHJlbmRlclBoYXNlVXBkYXRlcyA9IG51bGw7XHJcbiAgLy8gd29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcclxuXHJcblxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZENvbnRleHQoY29udGV4dCwgb2JzZXJ2ZWRCaXRzKSB7XHJcbiAgdmFyIHRocmVhZElEID0gY3VycmVudFRocmVhZElEO1xyXG4gIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCk7XHJcblxyXG4gIHtcclxuICAgIGlmIChpc0luSG9va1VzZXJDb2RlSW5EZXYpIHtcclxuICAgICAgZXJyb3IoJ0NvbnRleHQgY2FuIG9ubHkgYmUgcmVhZCB3aGlsZSBSZWFjdCBpcyByZW5kZXJpbmcuICcgKyAnSW4gY2xhc3NlcywgeW91IGNhbiByZWFkIGl0IGluIHRoZSByZW5kZXIgbWV0aG9kIG9yIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy4gJyArICdJbiBmdW5jdGlvbiBjb21wb25lbnRzLCB5b3UgY2FuIHJlYWQgaXQgZGlyZWN0bHkgaW4gdGhlIGZ1bmN0aW9uIGJvZHksIGJ1dCBub3QgJyArICdpbnNpZGUgSG9va3MgbGlrZSB1c2VSZWR1Y2VyKCkgb3IgdXNlTWVtbygpLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbnRleHRbdGhyZWFkSURdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VDb250ZXh0KGNvbnRleHQsIG9ic2VydmVkQml0cykge1xyXG4gIHtcclxuICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZUNvbnRleHQnO1xyXG4gIH1cclxuXHJcbiAgcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xyXG4gIHZhciB0aHJlYWRJRCA9IGN1cnJlbnRUaHJlYWRJRDtcclxuICB2YWxpZGF0ZUNvbnRleHRCb3VuZHMoY29udGV4dCwgdGhyZWFkSUQpO1xyXG4gIHJldHVybiBjb250ZXh0W3RocmVhZElEXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFzaWNTdGF0ZVJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIC8vICRGbG93Rml4TWU6IEZsb3cgZG9lc24ndCBsaWtlIG1peGVkIHR5cGVzXHJcbiAgcmV0dXJuIHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicgPyBhY3Rpb24oc3RhdGUpIDogYWN0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcclxuICB7XHJcbiAgICBjdXJyZW50SG9va05hbWVJbkRldiA9ICd1c2VTdGF0ZSc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdXNlUmVkdWNlcihiYXNpY1N0YXRlUmVkdWNlciwgLy8gdXNlUmVkdWNlciBoYXMgYSBzcGVjaWFsIGNhc2UgdG8gc3VwcG9ydCBsYXp5IHVzZVN0YXRlIGluaXRpYWxpemVyc1xyXG4gIGluaXRpYWxTdGF0ZSk7XHJcbn1cclxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XHJcbiAge1xyXG4gICAgaWYgKHJlZHVjZXIgIT09IGJhc2ljU3RhdGVSZWR1Y2VyKSB7XHJcbiAgICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZVJlZHVjZXInO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xyXG4gIHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpO1xyXG5cclxuICBpZiAoaXNSZVJlbmRlcikge1xyXG4gICAgLy8gVGhpcyBpcyBhIHJlLXJlbmRlci4gQXBwbHkgdGhlIG5ldyByZW5kZXIgcGhhc2UgdXBkYXRlcyB0byB0aGUgcHJldmlvdXNcclxuICAgIC8vIGN1cnJlbnQgaG9vay5cclxuICAgIHZhciBxdWV1ZSA9IHdvcmtJblByb2dyZXNzSG9vay5xdWV1ZTtcclxuICAgIHZhciBkaXNwYXRjaCA9IHF1ZXVlLmRpc3BhdGNoO1xyXG5cclxuICAgIGlmIChyZW5kZXJQaGFzZVVwZGF0ZXMgIT09IG51bGwpIHtcclxuICAgICAgLy8gUmVuZGVyIHBoYXNlIHVwZGF0ZXMgYXJlIHN0b3JlZCBpbiBhIG1hcCBvZiBxdWV1ZSAtPiBsaW5rZWQgbGlzdFxyXG4gICAgICB2YXIgZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZSA9IHJlbmRlclBoYXNlVXBkYXRlcy5nZXQocXVldWUpO1xyXG5cclxuICAgICAgaWYgKGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlbmRlclBoYXNlVXBkYXRlcy5kZWxldGUocXVldWUpO1xyXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlO1xyXG4gICAgICAgIHZhciB1cGRhdGUgPSBmaXJzdFJlbmRlclBoYXNlVXBkYXRlO1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAvLyBQcm9jZXNzIHRoaXMgcmVuZGVyIHBoYXNlIHVwZGF0ZS4gV2UgZG9uJ3QgaGF2ZSB0byBjaGVjayB0aGVcclxuICAgICAgICAgIC8vIHByaW9yaXR5IGJlY2F1c2UgaXQgd2lsbCBhbHdheXMgYmUgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnRcclxuICAgICAgICAgIC8vIHJlbmRlcidzLlxyXG4gICAgICAgICAgdmFyIGFjdGlvbiA9IHVwZGF0ZS5hY3Rpb247XHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5ld1N0YXRlID0gcmVkdWNlcihuZXdTdGF0ZSwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVwZGF0ZSA9IHVwZGF0ZS5uZXh0O1xyXG4gICAgICAgIH0gd2hpbGUgKHVwZGF0ZSAhPT0gbnVsbCk7XHJcblxyXG4gICAgICAgIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gbmV3U3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIFtuZXdTdGF0ZSwgZGlzcGF0Y2hdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFt3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSwgZGlzcGF0Y2hdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB7XHJcbiAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICBpZiAocmVkdWNlciA9PT0gYmFzaWNTdGF0ZVJlZHVjZXIpIHtcclxuICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBgdXNlU3RhdGVgLlxyXG4gICAgICBpbml0aWFsU3RhdGUgPSB0eXBlb2YgaW5pdGlhbEFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGluaXRpYWxBcmcoKSA6IGluaXRpYWxBcmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0aWFsU3RhdGUgPSBpbml0ICE9PSB1bmRlZmluZWQgPyBpbml0KGluaXRpYWxBcmcpIDogaW5pdGlhbEFyZztcclxuICAgIH1cclxuXHJcbiAgICB7XHJcbiAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgIHZhciBfcXVldWUgPSB3b3JrSW5Qcm9ncmVzc0hvb2sucXVldWUgPSB7XHJcbiAgICAgIGxhc3Q6IG51bGwsXHJcbiAgICAgIGRpc3BhdGNoOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfZGlzcGF0Y2ggPSBfcXVldWUuZGlzcGF0Y2ggPSBkaXNwYXRjaEFjdGlvbi5iaW5kKG51bGwsIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCwgX3F1ZXVlKTtcclxuXHJcbiAgICByZXR1cm4gW3dvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlLCBfZGlzcGF0Y2hdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXNlTWVtbyhuZXh0Q3JlYXRlLCBkZXBzKSB7XHJcbiAgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xyXG4gIHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpO1xyXG4gIHZhciBuZXh0RGVwcyA9IGRlcHMgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZXBzO1xyXG5cclxuICBpZiAod29ya0luUHJvZ3Jlc3NIb29rICE9PSBudWxsKSB7XHJcbiAgICB2YXIgcHJldlN0YXRlID0gd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGU7XHJcblxyXG4gICAgaWYgKHByZXZTdGF0ZSAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAobmV4dERlcHMgIT09IG51bGwpIHtcclxuICAgICAgICB2YXIgcHJldkRlcHMgPSBwcmV2U3RhdGVbMV07XHJcblxyXG4gICAgICAgIGlmIChhcmVIb29rSW5wdXRzRXF1YWwobmV4dERlcHMsIHByZXZEZXBzKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZVswXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHtcclxuICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB2YXIgbmV4dFZhbHVlID0gbmV4dENyZWF0ZSgpO1xyXG5cclxuICB7XHJcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gW25leHRWYWx1ZSwgbmV4dERlcHNdO1xyXG4gIHJldHVybiBuZXh0VmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcclxuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XHJcbiAgd29ya0luUHJvZ3Jlc3NIb29rID0gY3JlYXRlV29ya0luUHJvZ3Jlc3NIb29rKCk7XHJcbiAgdmFyIHByZXZpb3VzUmVmID0gd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGU7XHJcblxyXG4gIGlmIChwcmV2aW91c1JlZiA9PT0gbnVsbCkge1xyXG4gICAgdmFyIHJlZiA9IHtcclxuICAgICAgY3VycmVudDogaW5pdGlhbFZhbHVlXHJcbiAgICB9O1xyXG5cclxuICAgIHtcclxuICAgICAgT2JqZWN0LnNlYWwocmVmKTtcclxuICAgIH1cclxuXHJcbiAgICB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSA9IHJlZjtcclxuICAgIHJldHVybiByZWY7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwcmV2aW91c1JlZjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cykge1xyXG4gIHtcclxuICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZUxheW91dEVmZmVjdCc7XHJcblxyXG4gICAgZXJyb3IoJ3VzZUxheW91dEVmZmVjdCBkb2VzIG5vdGhpbmcgb24gdGhlIHNlcnZlciwgYmVjYXVzZSBpdHMgZWZmZWN0IGNhbm5vdCAnICsgXCJiZSBlbmNvZGVkIGludG8gdGhlIHNlcnZlciByZW5kZXJlcidzIG91dHB1dCBmb3JtYXQuIFRoaXMgd2lsbCBsZWFkIFwiICsgJ3RvIGEgbWlzbWF0Y2ggYmV0d2VlbiB0aGUgaW5pdGlhbCwgbm9uLWh5ZHJhdGVkIFVJIGFuZCB0aGUgaW50ZW5kZWQgJyArICdVSS4gVG8gYXZvaWQgdGhpcywgdXNlTGF5b3V0RWZmZWN0IHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gJyArICdjb21wb25lbnRzIHRoYXQgcmVuZGVyIGV4Y2x1c2l2ZWx5IG9uIHRoZSBjbGllbnQuICcgKyAnU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtdXNlbGF5b3V0ZWZmZWN0LXNzciBmb3IgY29tbW9uIGZpeGVzLicpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGF0Y2hBY3Rpb24oY29tcG9uZW50SWRlbnRpdHksIHF1ZXVlLCBhY3Rpb24pIHtcclxuICBpZiAoIShudW1iZXJPZlJlUmVuZGVycyA8IFJFX1JFTkRFUl9MSU1JVCkpIHtcclxuICAgIHtcclxuICAgICAgdGhyb3cgRXJyb3IoIFwiVG9vIG1hbnkgcmUtcmVuZGVycy4gUmVhY3QgbGltaXRzIHRoZSBudW1iZXIgb2YgcmVuZGVycyB0byBwcmV2ZW50IGFuIGluZmluaXRlIGxvb3AuXCIgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnRJZGVudGl0eSA9PT0gY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KSB7XHJcbiAgICAvLyBUaGlzIGlzIGEgcmVuZGVyIHBoYXNlIHVwZGF0ZS4gU3Rhc2ggaXQgaW4gYSBsYXppbHktY3JlYXRlZCBtYXAgb2ZcclxuICAgIC8vIHF1ZXVlIC0+IGxpbmtlZCBsaXN0IG9mIHVwZGF0ZXMuIEFmdGVyIHRoaXMgcmVuZGVyIHBhc3MsIHdlJ2xsIHJlc3RhcnRcclxuICAgIC8vIGFuZCBhcHBseSB0aGUgc3Rhc2hlZCB1cGRhdGVzIG9uIHRvcCBvZiB0aGUgd29yay1pbi1wcm9ncmVzcyBob29rLlxyXG4gICAgZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IHRydWU7XHJcbiAgICB2YXIgdXBkYXRlID0ge1xyXG4gICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgbmV4dDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAocmVuZGVyUGhhc2VVcGRhdGVzID09PSBudWxsKSB7XHJcbiAgICAgIHJlbmRlclBoYXNlVXBkYXRlcyA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZSA9IHJlbmRlclBoYXNlVXBkYXRlcy5nZXQocXVldWUpO1xyXG5cclxuICAgIGlmIChmaXJzdFJlbmRlclBoYXNlVXBkYXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmVuZGVyUGhhc2VVcGRhdGVzLnNldChxdWV1ZSwgdXBkYXRlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEFwcGVuZCB0aGUgdXBkYXRlIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXHJcbiAgICAgIHZhciBsYXN0UmVuZGVyUGhhc2VVcGRhdGUgPSBmaXJzdFJlbmRlclBoYXNlVXBkYXRlO1xyXG5cclxuICAgICAgd2hpbGUgKGxhc3RSZW5kZXJQaGFzZVVwZGF0ZS5uZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgbGFzdFJlbmRlclBoYXNlVXBkYXRlID0gbGFzdFJlbmRlclBoYXNlVXBkYXRlLm5leHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhc3RSZW5kZXJQaGFzZVVwZGF0ZS5uZXh0ID0gdXBkYXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcclxuICAvLyBDYWxsYmFja3MgYXJlIHBhc3NlZCBhcyB0aGV5IGFyZSBpbiB0aGUgc2VydmVyIGVudmlyb25tZW50LlxyXG4gIHJldHVybiBjYWxsYmFjaztcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlUmVzcG9uZGVyKHJlc3BvbmRlciwgcHJvcHMpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHByb3BzLFxyXG4gICAgcmVzcG9uZGVyOiByZXNwb25kZXJcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VEZWZlcnJlZFZhbHVlKHZhbHVlLCBjb25maWcpIHtcclxuICByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VUcmFuc2l0aW9uKGNvbmZpZykge1xyXG4gIHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcclxuXHJcbiAgdmFyIHN0YXJ0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgY2FsbGJhY2soKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gW3N0YXJ0VHJhbnNpdGlvbiwgZmFsc2VdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub29wKCkge31cclxuXHJcbnZhciBjdXJyZW50VGhyZWFkSUQgPSAwO1xyXG5mdW5jdGlvbiBzZXRDdXJyZW50VGhyZWFkSUQodGhyZWFkSUQpIHtcclxuICBjdXJyZW50VGhyZWFkSUQgPSB0aHJlYWRJRDtcclxufVxyXG52YXIgRGlzcGF0Y2hlciA9IHtcclxuICByZWFkQ29udGV4dDogcmVhZENvbnRleHQsXHJcbiAgdXNlQ29udGV4dDogdXNlQ29udGV4dCxcclxuICB1c2VNZW1vOiB1c2VNZW1vLFxyXG4gIHVzZVJlZHVjZXI6IHVzZVJlZHVjZXIsXHJcbiAgdXNlUmVmOiB1c2VSZWYsXHJcbiAgdXNlU3RhdGU6IHVzZVN0YXRlLFxyXG4gIHVzZUxheW91dEVmZmVjdDogdXNlTGF5b3V0RWZmZWN0LFxyXG4gIHVzZUNhbGxiYWNrOiB1c2VDYWxsYmFjayxcclxuICAvLyB1c2VJbXBlcmF0aXZlSGFuZGxlIGlzIG5vdCBydW4gaW4gdGhlIHNlcnZlciBlbnZpcm9ubWVudFxyXG4gIHVzZUltcGVyYXRpdmVIYW5kbGU6IG5vb3AsXHJcbiAgLy8gRWZmZWN0cyBhcmUgbm90IHJ1biBpbiB0aGUgc2VydmVyIGVudmlyb25tZW50LlxyXG4gIHVzZUVmZmVjdDogbm9vcCxcclxuICAvLyBEZWJ1Z2dpbmcgZWZmZWN0XHJcbiAgdXNlRGVidWdWYWx1ZTogbm9vcCxcclxuICB1c2VSZXNwb25kZXI6IHVzZVJlc3BvbmRlcixcclxuICB1c2VEZWZlcnJlZFZhbHVlOiB1c2VEZWZlcnJlZFZhbHVlLFxyXG4gIHVzZVRyYW5zaXRpb246IHVzZVRyYW5zaXRpb25cclxufTtcclxuXHJcbnZhciBIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcclxudmFyIE1BVEhfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xyXG52YXIgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XHJcbnZhciBOYW1lc3BhY2VzID0ge1xyXG4gIGh0bWw6IEhUTUxfTkFNRVNQQUNFLFxyXG4gIG1hdGhtbDogTUFUSF9OQU1FU1BBQ0UsXHJcbiAgc3ZnOiBTVkdfTkFNRVNQQUNFXHJcbn07IC8vIEFzc3VtZXMgdGhlcmUgaXMgbm8gcGFyZW50IG5hbWVzcGFjZS5cclxuXHJcbmZ1bmN0aW9uIGdldEludHJpbnNpY05hbWVzcGFjZSh0eXBlKSB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlICdzdmcnOlxyXG4gICAgICByZXR1cm4gU1ZHX05BTUVTUEFDRTtcclxuXHJcbiAgICBjYXNlICdtYXRoJzpcclxuICAgICAgcmV0dXJuIE1BVEhfTkFNRVNQQUNFO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBIVE1MX05BTUVTUEFDRTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0Q2hpbGROYW1lc3BhY2UocGFyZW50TmFtZXNwYWNlLCB0eXBlKSB7XHJcbiAgaWYgKHBhcmVudE5hbWVzcGFjZSA9PSBudWxsIHx8IHBhcmVudE5hbWVzcGFjZSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcclxuICAgIC8vIE5vIChvciBkZWZhdWx0KSBwYXJlbnQgbmFtZXNwYWNlOiBwb3RlbnRpYWwgZW50cnkgcG9pbnQuXHJcbiAgICByZXR1cm4gZ2V0SW50cmluc2ljTmFtZXNwYWNlKHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBhcmVudE5hbWVzcGFjZSA9PT0gU1ZHX05BTUVTUEFDRSAmJiB0eXBlID09PSAnZm9yZWlnbk9iamVjdCcpIHtcclxuICAgIC8vIFdlJ3JlIGxlYXZpbmcgU1ZHLlxyXG4gICAgcmV0dXJuIEhUTUxfTkFNRVNQQUNFO1xyXG4gIH0gLy8gQnkgZGVmYXVsdCwgcGFzcyBuYW1lc3BhY2UgYmVsb3cuXHJcblxyXG5cclxuICByZXR1cm4gcGFyZW50TmFtZXNwYWNlO1xyXG59XHJcblxyXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQyID0gbnVsbDtcclxudmFyIFJlYWN0Q29udHJvbGxlZFZhbHVlUHJvcFR5cGVzID0ge1xyXG4gIGNoZWNrUHJvcFR5cGVzOiBudWxsXHJcbn07XHJcblxyXG57XHJcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcclxuICB2YXIgaGFzUmVhZE9ubHlWYWx1ZSA9IHtcclxuICAgIGJ1dHRvbjogdHJ1ZSxcclxuICAgIGNoZWNrYm94OiB0cnVlLFxyXG4gICAgaW1hZ2U6IHRydWUsXHJcbiAgICBoaWRkZW46IHRydWUsXHJcbiAgICByYWRpbzogdHJ1ZSxcclxuICAgIHJlc2V0OiB0cnVlLFxyXG4gICAgc3VibWl0OiB0cnVlXHJcbiAgfTtcclxuICB2YXIgcHJvcFR5cGVzID0ge1xyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcclxuICAgICAgaWYgKGhhc1JlYWRPbmx5VmFsdWVbcHJvcHMudHlwZV0gfHwgcHJvcHMub25DaGFuZ2UgfHwgcHJvcHMucmVhZE9ubHkgfHwgcHJvcHMuZGlzYWJsZWQgfHwgcHJvcHNbcHJvcE5hbWVdID09IG51bGwgfHwgZW5hYmxlRGVwcmVjYXRlZEZsYXJlQVBJICkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdZb3UgcHJvdmlkZWQgYSBgdmFsdWVgIHByb3AgdG8gYSBmb3JtIGZpZWxkIHdpdGhvdXQgYW4gJyArICdgb25DaGFuZ2VgIGhhbmRsZXIuIFRoaXMgd2lsbCByZW5kZXIgYSByZWFkLW9ubHkgZmllbGQuIElmICcgKyAndGhlIGZpZWxkIHNob3VsZCBiZSBtdXRhYmxlIHVzZSBgZGVmYXVsdFZhbHVlYC4gT3RoZXJ3aXNlLCAnICsgJ3NldCBlaXRoZXIgYG9uQ2hhbmdlYCBvciBgcmVhZE9ubHlgLicpO1xyXG4gICAgfSxcclxuICAgIGNoZWNrZWQ6IGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcclxuICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlIHx8IHByb3BzLnJlYWRPbmx5IHx8IHByb3BzLmRpc2FibGVkIHx8IHByb3BzW3Byb3BOYW1lXSA9PSBudWxsIHx8IGVuYWJsZURlcHJlY2F0ZWRGbGFyZUFQSSApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignWW91IHByb3ZpZGVkIGEgYGNoZWNrZWRgIHByb3AgdG8gYSBmb3JtIGZpZWxkIHdpdGhvdXQgYW4gJyArICdgb25DaGFuZ2VgIGhhbmRsZXIuIFRoaXMgd2lsbCByZW5kZXIgYSByZWFkLW9ubHkgZmllbGQuIElmICcgKyAndGhlIGZpZWxkIHNob3VsZCBiZSBtdXRhYmxlIHVzZSBgZGVmYXVsdENoZWNrZWRgLiBPdGhlcndpc2UsICcgKyAnc2V0IGVpdGhlciBgb25DaGFuZ2VgIG9yIGByZWFkT25seWAuJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBQcm92aWRlIGEgbGlua2VkIGB2YWx1ZWAgYXR0cmlidXRlIGZvciBjb250cm9sbGVkIGZvcm1zLiBZb3Ugc2hvdWxkIG5vdCB1c2VcclxuICAgKiB0aGlzIG91dHNpZGUgb2YgdGhlIFJlYWN0RE9NIGNvbnRyb2xsZWQgZm9ybSBjb21wb25lbnRzLlxyXG4gICAqL1xyXG5cclxuICBSZWFjdENvbnRyb2xsZWRWYWx1ZVByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGZ1bmN0aW9uICh0YWdOYW1lLCBwcm9wcykge1xyXG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBwcm9wcywgJ3Byb3AnLCB0YWdOYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDIuZ2V0U3RhY2tBZGRlbmR1bSk7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gRm9yIEhUTUwsIGNlcnRhaW4gdGFncyBzaG91bGQgb21pdCB0aGVpciBjbG9zZSB0YWcuIFdlIGtlZXAgYSB3aGl0ZWxpc3QgZm9yXHJcbi8vIHRob3NlIHNwZWNpYWwtY2FzZSB0YWdzLlxyXG52YXIgb21pdHRlZENsb3NlVGFncyA9IHtcclxuICBhcmVhOiB0cnVlLFxyXG4gIGJhc2U6IHRydWUsXHJcbiAgYnI6IHRydWUsXHJcbiAgY29sOiB0cnVlLFxyXG4gIGVtYmVkOiB0cnVlLFxyXG4gIGhyOiB0cnVlLFxyXG4gIGltZzogdHJ1ZSxcclxuICBpbnB1dDogdHJ1ZSxcclxuICBrZXlnZW46IHRydWUsXHJcbiAgbGluazogdHJ1ZSxcclxuICBtZXRhOiB0cnVlLFxyXG4gIHBhcmFtOiB0cnVlLFxyXG4gIHNvdXJjZTogdHJ1ZSxcclxuICB0cmFjazogdHJ1ZSxcclxuICB3YnI6IHRydWUgLy8gTk9URTogbWVudWl0ZW0ncyBjbG9zZSB0YWcgc2hvdWxkIGJlIG9taXR0ZWQsIGJ1dCB0aGF0IGNhdXNlcyBwcm9ibGVtcy5cclxuXHJcbn07XHJcblxyXG4vLyBgb21pdHRlZENsb3NlVGFnc2AgZXhjZXB0IHRoYXQgYG1lbnVpdGVtYCBzaG91bGQgc3RpbGwgaGF2ZSBpdHMgY2xvc2luZyB0YWcuXHJcblxyXG52YXIgdm9pZEVsZW1lbnRUYWdzID0gX2Fzc2lnbih7XHJcbiAgbWVudWl0ZW06IHRydWVcclxufSwgb21pdHRlZENsb3NlVGFncyk7XHJcblxyXG52YXIgSFRNTCA9ICdfX2h0bWwnO1xyXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQzID0gbnVsbDtcclxuXHJcbntcclxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDMgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhc3NlcnRWYWxpZFByb3BzKHRhZywgcHJvcHMpIHtcclxuICBpZiAoIXByb3BzKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfSAvLyBOb3RlIHRoZSB1c2Ugb2YgYD09YCB3aGljaCBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkLlxyXG5cclxuXHJcbiAgaWYgKHZvaWRFbGVtZW50VGFnc1t0YWddKSB7XHJcbiAgICBpZiAoIShwcm9wcy5jaGlsZHJlbiA9PSBudWxsICYmIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID09IG51bGwpKSB7XHJcbiAgICAgIHtcclxuICAgICAgICB0aHJvdyBFcnJvciggdGFnICsgXCIgaXMgYSB2b2lkIGVsZW1lbnQgdGFnIGFuZCBtdXN0IG5laXRoZXIgaGF2ZSBgY2hpbGRyZW5gIG5vciB1c2UgYGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYC5cIiArICggUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQzLmdldFN0YWNrQWRkZW5kdW0oKSApICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAhPSBudWxsKSB7XHJcbiAgICBpZiAoIShwcm9wcy5jaGlsZHJlbiA9PSBudWxsKSkge1xyXG4gICAgICB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoIFwiQ2FuIG9ubHkgc2V0IG9uZSBvZiBgY2hpbGRyZW5gIG9yIGBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTGAuXCIgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghKHR5cGVvZiBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCA9PT0gJ29iamVjdCcgJiYgSFRNTCBpbiBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCkpIHtcclxuICAgICAge1xyXG4gICAgICAgIHRocm93IEVycm9yKCBcImBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTGAgbXVzdCBiZSBpbiB0aGUgZm9ybSBge19faHRtbDogLi4ufWAuIFBsZWFzZSB2aXNpdCBodHRwczovL2ZiLm1lL3JlYWN0LWludmFyaWFudC1kYW5nZXJvdXNseS1zZXQtaW5uZXItaHRtbCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIiApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7XHJcbiAgICBpZiAoIXByb3BzLnN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyAmJiBwcm9wcy5jb250ZW50RWRpdGFibGUgJiYgcHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICBlcnJvcignQSBjb21wb25lbnQgaXMgYGNvbnRlbnRFZGl0YWJsZWAgYW5kIGNvbnRhaW5zIGBjaGlsZHJlbmAgbWFuYWdlZCBieSAnICsgJ1JlYWN0LiBJdCBpcyBub3cgeW91ciByZXNwb25zaWJpbGl0eSB0byBndWFyYW50ZWUgdGhhdCBub25lIG9mICcgKyAndGhvc2Ugbm9kZXMgYXJlIHVuZXhwZWN0ZWRseSBtb2RpZmllZCBvciBkdXBsaWNhdGVkLiBUaGlzIGlzICcgKyAncHJvYmFibHkgbm90IGludGVudGlvbmFsLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCEocHJvcHMuc3R5bGUgPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHMuc3R5bGUgPT09ICdvYmplY3QnKSkge1xyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvciggXCJUaGUgYHN0eWxlYCBwcm9wIGV4cGVjdHMgYSBtYXBwaW5nIGZyb20gc3R5bGUgcHJvcGVydGllcyB0byB2YWx1ZXMsIG5vdCBhIHN0cmluZy4gRm9yIGV4YW1wbGUsIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IHNwYWNpbmcgKyAnZW0nfX0gd2hlbiB1c2luZyBKU1guXCIgKyAoIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMy5nZXRTdGFja0FkZGVuZHVtKCkgKSApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENTUyBwcm9wZXJ0aWVzIHdoaWNoIGFjY2VwdCBudW1iZXJzIGJ1dCBhcmUgbm90IGluIHVuaXRzIG9mIFwicHhcIi5cclxuICovXHJcbnZhciBpc1VuaXRsZXNzTnVtYmVyID0ge1xyXG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxyXG4gIGJvcmRlckltYWdlT3V0c2V0OiB0cnVlLFxyXG4gIGJvcmRlckltYWdlU2xpY2U6IHRydWUsXHJcbiAgYm9yZGVySW1hZ2VXaWR0aDogdHJ1ZSxcclxuICBib3hGbGV4OiB0cnVlLFxyXG4gIGJveEZsZXhHcm91cDogdHJ1ZSxcclxuICBib3hPcmRpbmFsR3JvdXA6IHRydWUsXHJcbiAgY29sdW1uQ291bnQ6IHRydWUsXHJcbiAgY29sdW1uczogdHJ1ZSxcclxuICBmbGV4OiB0cnVlLFxyXG4gIGZsZXhHcm93OiB0cnVlLFxyXG4gIGZsZXhQb3NpdGl2ZTogdHJ1ZSxcclxuICBmbGV4U2hyaW5rOiB0cnVlLFxyXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcclxuICBmbGV4T3JkZXI6IHRydWUsXHJcbiAgZ3JpZEFyZWE6IHRydWUsXHJcbiAgZ3JpZFJvdzogdHJ1ZSxcclxuICBncmlkUm93RW5kOiB0cnVlLFxyXG4gIGdyaWRSb3dTcGFuOiB0cnVlLFxyXG4gIGdyaWRSb3dTdGFydDogdHJ1ZSxcclxuICBncmlkQ29sdW1uOiB0cnVlLFxyXG4gIGdyaWRDb2x1bW5FbmQ6IHRydWUsXHJcbiAgZ3JpZENvbHVtblNwYW46IHRydWUsXHJcbiAgZ3JpZENvbHVtblN0YXJ0OiB0cnVlLFxyXG4gIGZvbnRXZWlnaHQ6IHRydWUsXHJcbiAgbGluZUNsYW1wOiB0cnVlLFxyXG4gIGxpbmVIZWlnaHQ6IHRydWUsXHJcbiAgb3BhY2l0eTogdHJ1ZSxcclxuICBvcmRlcjogdHJ1ZSxcclxuICBvcnBoYW5zOiB0cnVlLFxyXG4gIHRhYlNpemU6IHRydWUsXHJcbiAgd2lkb3dzOiB0cnVlLFxyXG4gIHpJbmRleDogdHJ1ZSxcclxuICB6b29tOiB0cnVlLFxyXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcclxuICBmaWxsT3BhY2l0eTogdHJ1ZSxcclxuICBmbG9vZE9wYWNpdHk6IHRydWUsXHJcbiAgc3RvcE9wYWNpdHk6IHRydWUsXHJcbiAgc3Ryb2tlRGFzaGFycmF5OiB0cnVlLFxyXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXHJcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogdHJ1ZSxcclxuICBzdHJva2VPcGFjaXR5OiB0cnVlLFxyXG4gIHN0cm9rZVdpZHRoOiB0cnVlXHJcbn07XHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IHZlbmRvci1zcGVjaWZpYyBwcmVmaXgsIGVnOiBXZWJraXRcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBzdHlsZSBuYW1lLCBlZzogdHJhbnNpdGlvbkR1cmF0aW9uXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gc3R5bGUgbmFtZSBwcmVmaXhlZCB3aXRoIGBwcmVmaXhgLCBwcm9wZXJseSBjYW1lbENhc2VkLCBlZzpcclxuICogV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gcHJlZml4S2V5KHByZWZpeCwga2V5KSB7XHJcbiAgcmV0dXJuIHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XHJcbn1cclxuLyoqXHJcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xyXG4gKiBvZiB2ZW5kb3IgcHJlZml4ZXMuXHJcbiAqL1xyXG5cclxuXHJcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ21zJywgJ01veicsICdPJ107IC8vIFVzaW5nIE9iamVjdC5rZXlzIGhlcmUsIG9yIGVsc2UgdGhlIHZhbmlsbGEgZm9yLWluIGxvb3AgbWFrZXMgSUU4IGdvIGludG8gYW5cclxuLy8gaW5maW5pdGUgbG9vcCwgYmVjYXVzZSBpdCBpdGVyYXRlcyBvdmVyIHRoZSBuZXdseSBhZGRlZCBwcm9wcyB0b28uXHJcblxyXG5PYmplY3Qua2V5cyhpc1VuaXRsZXNzTnVtYmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgcHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XHJcbiAgICBpc1VuaXRsZXNzTnVtYmVyW3ByZWZpeEtleShwcmVmaXgsIHByb3ApXSA9IGlzVW5pdGxlc3NOdW1iZXJbcHJvcF07XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIHRoZSBwcm9wZXIgY3NzIHdyaXRhYmxlIHZhbHVlLiBUaGUgc3R5bGUgbmFtZSBgbmFtZWBcclxuICogc2hvdWxkIGJlIGxvZ2ljYWwgKG5vIGh5cGhlbnMpLCBhcyBzcGVjaWZpZWRcclxuICogaW4gYENTU1Byb3BlcnR5LmlzVW5pdGxlc3NOdW1iZXJgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBDU1MgcHJvcGVydHkgbmFtZSBzdWNoIGFzIGB0b3BNYXJnaW5gLlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIENTUyBwcm9wZXJ0eSB2YWx1ZSBzdWNoIGFzIGAxMHB4YC5cclxuICogQHJldHVybiB7c3RyaW5nfSBOb3JtYWxpemVkIHN0eWxlIHZhbHVlIHdpdGggZGltZW5zaW9ucyBhcHBsaWVkLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGRhbmdlcm91c1N0eWxlVmFsdWUobmFtZSwgdmFsdWUsIGlzQ3VzdG9tUHJvcGVydHkpIHtcclxuICAvLyBOb3RlIHRoYXQgd2UndmUgcmVtb3ZlZCBlc2NhcGVUZXh0Rm9yQnJvd3NlcigpIGNhbGxzIGhlcmUgc2luY2UgdGhlXHJcbiAgLy8gd2hvbGUgc3RyaW5nIHdpbGwgYmUgZXNjYXBlZCB3aGVuIHRoZSBhdHRyaWJ1dGUgaXMgaW5qZWN0ZWQgaW50b1xyXG4gIC8vIHRoZSBtYXJrdXAuIElmIHlvdSBwcm92aWRlIHVuc2FmZSB1c2VyIGRhdGEgaGVyZSB0aGV5IGNhbiBpbmplY3RcclxuICAvLyBhcmJpdHJhcnkgQ1NTIHdoaWNoIG1heSBiZSBwcm9ibGVtYXRpYyAoSSBjb3VsZG4ndCByZXBybyB0aGlzKTpcclxuICAvLyBodHRwczovL3d3dy5vd2FzcC5vcmcvaW5kZXgucGhwL1hTU19GaWx0ZXJfRXZhc2lvbl9DaGVhdF9TaGVldFxyXG4gIC8vIGh0dHA6Ly93d3cudGhlc3Bhbm5lci5jby51ay8yMDA3LzExLzI2L3VsdGltYXRlLXhzcy1jc3MtaW5qZWN0aW9uL1xyXG4gIC8vIFRoaXMgaXMgbm90IGFuIFhTUyBob2xlIGJ1dCBpbnN0ZWFkIGEgcG90ZW50aWFsIENTUyBpbmplY3Rpb24gaXNzdWVcclxuICAvLyB3aGljaCBoYXMgbGVhZCB0byBhIGdyZWF0ZXIgZGlzY3Vzc2lvbiBhYm91dCBob3cgd2UncmUgZ29pbmcgdG9cclxuICAvLyB0cnVzdCBVUkxzIG1vdmluZyBmb3J3YXJkLiBTZWUgIzIxMTU5MDFcclxuICB2YXIgaXNFbXB0eSA9IHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdmFsdWUgPT09ICcnO1xyXG5cclxuICBpZiAoaXNFbXB0eSkge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFpc0N1c3RvbVByb3BlcnR5ICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDAgJiYgIShpc1VuaXRsZXNzTnVtYmVyLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlzVW5pdGxlc3NOdW1iZXJbbmFtZV0pKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnOyAvLyBQcmVzdW1lcyBpbXBsaWNpdCAncHgnIHN1ZmZpeCBmb3IgdW5pdGxlc3MgbnVtYmVyc1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICgnJyArIHZhbHVlKS50cmltKCk7XHJcbn1cclxuXHJcbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gLyhbQS1aXSkvZztcclxudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcclxuLyoqXHJcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcclxuICpcclxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnYmFja2dyb3VuZENvbG9yJylcclxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXHJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ01velRyYW5zaXRpb24nKVxyXG4gKiAgIDwgXCItbW96LXRyYW5zaXRpb25cIlxyXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdtc1RyYW5zaXRpb24nKVxyXG4gKiAgIDwgXCItbXMtdHJhbnNpdGlvblwiXHJcbiAqXHJcbiAqIEFzIE1vZGVybml6ciBzdWdnZXN0cyAoaHR0cDovL21vZGVybml6ci5jb20vZG9jcy8jcHJlZml4ZWQpLCBhbiBgbXNgIHByZWZpeFxyXG4gKiBpcyBjb252ZXJ0ZWQgdG8gYC1tcy1gLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShuYW1lKSB7XHJcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAnLSQxJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDdXN0b21Db21wb25lbnQodGFnTmFtZSwgcHJvcHMpIHtcclxuICBpZiAodGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHByb3BzLmlzID09PSAnc3RyaW5nJztcclxuICB9XHJcblxyXG4gIHN3aXRjaCAodGFnTmFtZSkge1xyXG4gICAgLy8gVGhlc2UgYXJlIHJlc2VydmVkIFNWRyBhbmQgTWF0aE1MIGVsZW1lbnRzLlxyXG4gICAgLy8gV2UgZG9uJ3QgbWluZCB0aGlzIHdoaXRlbGlzdCB0b28gbXVjaCBiZWNhdXNlIHdlIGV4cGVjdCBpdCB0byBuZXZlciBncm93LlxyXG4gICAgLy8gVGhlIGFsdGVybmF0aXZlIGlzIHRvIHRyYWNrIHRoZSBuYW1lc3BhY2UgaW4gYSBmZXcgcGxhY2VzIHdoaWNoIGlzIGNvbnZvbHV0ZWQuXHJcbiAgICAvLyBodHRwczovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL2N1c3RvbS8jY3VzdG9tLWVsZW1lbnRzLWNvcmUtY29uY2VwdHNcclxuICAgIGNhc2UgJ2Fubm90YXRpb24teG1sJzpcclxuICAgIGNhc2UgJ2NvbG9yLXByb2ZpbGUnOlxyXG4gICAgY2FzZSAnZm9udC1mYWNlJzpcclxuICAgIGNhc2UgJ2ZvbnQtZmFjZS1zcmMnOlxyXG4gICAgY2FzZSAnZm9udC1mYWNlLXVyaSc6XHJcbiAgICBjYXNlICdmb250LWZhY2UtZm9ybWF0JzpcclxuICAgIGNhc2UgJ2ZvbnQtZmFjZS1uYW1lJzpcclxuICAgIGNhc2UgJ21pc3NpbmctZ2x5cGgnOlxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgd2FyblZhbGlkU3R5bGUgPSBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbntcclxuICAvLyAnbXNUcmFuc2Zvcm0nIGlzIGNvcnJlY3QsIGJ1dCB0aGUgb3RoZXIgcHJlZml4ZXMgc2hvdWxkIGJlIGNhcGl0YWxpemVkXHJcbiAgdmFyIGJhZFZlbmRvcmVkU3R5bGVOYW1lUGF0dGVybiA9IC9eKD86d2Via2l0fG1venxvKVtBLVpdLztcclxuICB2YXIgbXNQYXR0ZXJuJDEgPSAvXi1tcy0vO1xyXG4gIHZhciBoeXBoZW5QYXR0ZXJuID0gLy0oLikvZzsgLy8gc3R5bGUgdmFsdWVzIHNob3VsZG4ndCBjb250YWluIGEgc2VtaWNvbG9uXHJcblxyXG4gIHZhciBiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4gPSAvO1xccyokLztcclxuICB2YXIgd2FybmVkU3R5bGVOYW1lcyA9IHt9O1xyXG4gIHZhciB3YXJuZWRTdHlsZVZhbHVlcyA9IHt9O1xyXG4gIHZhciB3YXJuZWRGb3JOYU5WYWx1ZSA9IGZhbHNlO1xyXG4gIHZhciB3YXJuZWRGb3JJbmZpbml0eVZhbHVlID0gZmFsc2U7XHJcblxyXG4gIHZhciBjYW1lbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoXywgY2hhcmFjdGVyKSB7XHJcbiAgICAgIHJldHVybiBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHZhciB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICBpZiAod2FybmVkU3R5bGVOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB3YXJuZWRTdHlsZU5hbWVzW25hbWVdKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcclxuXHJcbiAgICBlcnJvcignVW5zdXBwb3J0ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8nLCBuYW1lLCAvLyBBcyBBbmRpIFNtaXRoIHN1Z2dlc3RzXHJcbiAgICAvLyAoaHR0cDovL3d3dy5hbmRpc21pdGguY29tL2Jsb2cvMjAxMi8wMi9tb2Rlcm5penItcHJlZml4ZWQvKSwgYW4gYC1tc2AgcHJlZml4XHJcbiAgICAvLyBpcyBjb252ZXJ0ZWQgdG8gbG93ZXJjYXNlIGBtc2AuXHJcbiAgICBjYW1lbGl6ZShuYW1lLnJlcGxhY2UobXNQYXR0ZXJuJDEsICdtcy0nKSkpO1xyXG4gIH07XHJcblxyXG4gIHZhciB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgaWYgKHdhcm5lZFN0eWxlTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSA9IHRydWU7XHJcblxyXG4gICAgZXJyb3IoJ1Vuc3VwcG9ydGVkIHZlbmRvci1wcmVmaXhlZCBzdHlsZSBwcm9wZXJ0eSAlcy4gRGlkIHlvdSBtZWFuICVzPycsIG5hbWUsIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpKTtcclxuICB9O1xyXG5cclxuICB2YXIgd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBpZiAod2FybmVkU3R5bGVWYWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpICYmIHdhcm5lZFN0eWxlVmFsdWVzW3ZhbHVlXSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdID0gdHJ1ZTtcclxuXHJcbiAgICBlcnJvcihcIlN0eWxlIHByb3BlcnR5IHZhbHVlcyBzaG91bGRuJ3QgY29udGFpbiBhIHNlbWljb2xvbi4gXCIgKyAnVHJ5IFwiJXM6ICVzXCIgaW5zdGVhZC4nLCBuYW1lLCB2YWx1ZS5yZXBsYWNlKGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybiwgJycpKTtcclxuICB9O1xyXG5cclxuICB2YXIgd2FyblN0eWxlVmFsdWVJc05hTiA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xyXG4gICAgaWYgKHdhcm5lZEZvck5hTlZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB3YXJuZWRGb3JOYU5WYWx1ZSA9IHRydWU7XHJcblxyXG4gICAgZXJyb3IoJ2BOYU5gIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSBgJXNgIGNzcyBzdHlsZSBwcm9wZXJ0eS4nLCBuYW1lKTtcclxuICB9O1xyXG5cclxuICB2YXIgd2FyblN0eWxlVmFsdWVJc0luZmluaXR5ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBpZiAod2FybmVkRm9ySW5maW5pdHlWYWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgd2FybmVkRm9ySW5maW5pdHlWYWx1ZSA9IHRydWU7XHJcblxyXG4gICAgZXJyb3IoJ2BJbmZpbml0eWAgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIGAlc2AgY3NzIHN0eWxlIHByb3BlcnR5LicsIG5hbWUpO1xyXG4gIH07XHJcblxyXG4gIHdhcm5WYWxpZFN0eWxlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPiAtMSkge1xyXG4gICAgICB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZShuYW1lKTtcclxuICAgIH0gZWxzZSBpZiAoYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuLnRlc3QobmFtZSkpIHtcclxuICAgICAgd2FybkJhZFZlbmRvcmVkU3R5bGVOYW1lKG5hbWUpO1xyXG4gICAgfSBlbHNlIGlmIChiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uKG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgICAgd2FyblN0eWxlVmFsdWVJc05hTihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWlzRmluaXRlKHZhbHVlKSkge1xyXG4gICAgICAgIHdhcm5TdHlsZVZhbHVlSXNJbmZpbml0eShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG52YXIgd2FyblZhbGlkU3R5bGUkMSA9IHdhcm5WYWxpZFN0eWxlO1xyXG5cclxudmFyIGFyaWFQcm9wZXJ0aWVzID0ge1xyXG4gICdhcmlhLWN1cnJlbnQnOiAwLFxyXG4gIC8vIHN0YXRlXHJcbiAgJ2FyaWEtZGV0YWlscyc6IDAsXHJcbiAgJ2FyaWEtZGlzYWJsZWQnOiAwLFxyXG4gIC8vIHN0YXRlXHJcbiAgJ2FyaWEtaGlkZGVuJzogMCxcclxuICAvLyBzdGF0ZVxyXG4gICdhcmlhLWludmFsaWQnOiAwLFxyXG4gIC8vIHN0YXRlXHJcbiAgJ2FyaWEta2V5c2hvcnRjdXRzJzogMCxcclxuICAnYXJpYS1sYWJlbCc6IDAsXHJcbiAgJ2FyaWEtcm9sZWRlc2NyaXB0aW9uJzogMCxcclxuICAvLyBXaWRnZXQgQXR0cmlidXRlc1xyXG4gICdhcmlhLWF1dG9jb21wbGV0ZSc6IDAsXHJcbiAgJ2FyaWEtY2hlY2tlZCc6IDAsXHJcbiAgJ2FyaWEtZXhwYW5kZWQnOiAwLFxyXG4gICdhcmlhLWhhc3BvcHVwJzogMCxcclxuICAnYXJpYS1sZXZlbCc6IDAsXHJcbiAgJ2FyaWEtbW9kYWwnOiAwLFxyXG4gICdhcmlhLW11bHRpbGluZSc6IDAsXHJcbiAgJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJzogMCxcclxuICAnYXJpYS1vcmllbnRhdGlvbic6IDAsXHJcbiAgJ2FyaWEtcGxhY2Vob2xkZXInOiAwLFxyXG4gICdhcmlhLXByZXNzZWQnOiAwLFxyXG4gICdhcmlhLXJlYWRvbmx5JzogMCxcclxuICAnYXJpYS1yZXF1aXJlZCc6IDAsXHJcbiAgJ2FyaWEtc2VsZWN0ZWQnOiAwLFxyXG4gICdhcmlhLXNvcnQnOiAwLFxyXG4gICdhcmlhLXZhbHVlbWF4JzogMCxcclxuICAnYXJpYS12YWx1ZW1pbic6IDAsXHJcbiAgJ2FyaWEtdmFsdWVub3cnOiAwLFxyXG4gICdhcmlhLXZhbHVldGV4dCc6IDAsXHJcbiAgLy8gTGl2ZSBSZWdpb24gQXR0cmlidXRlc1xyXG4gICdhcmlhLWF0b21pYyc6IDAsXHJcbiAgJ2FyaWEtYnVzeSc6IDAsXHJcbiAgJ2FyaWEtbGl2ZSc6IDAsXHJcbiAgJ2FyaWEtcmVsZXZhbnQnOiAwLFxyXG4gIC8vIERyYWctYW5kLURyb3AgQXR0cmlidXRlc1xyXG4gICdhcmlhLWRyb3BlZmZlY3QnOiAwLFxyXG4gICdhcmlhLWdyYWJiZWQnOiAwLFxyXG4gIC8vIFJlbGF0aW9uc2hpcCBBdHRyaWJ1dGVzXHJcbiAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IDAsXHJcbiAgJ2FyaWEtY29sY291bnQnOiAwLFxyXG4gICdhcmlhLWNvbGluZGV4JzogMCxcclxuICAnYXJpYS1jb2xzcGFuJzogMCxcclxuICAnYXJpYS1jb250cm9scyc6IDAsXHJcbiAgJ2FyaWEtZGVzY3JpYmVkYnknOiAwLFxyXG4gICdhcmlhLWVycm9ybWVzc2FnZSc6IDAsXHJcbiAgJ2FyaWEtZmxvd3RvJzogMCxcclxuICAnYXJpYS1sYWJlbGxlZGJ5JzogMCxcclxuICAnYXJpYS1vd25zJzogMCxcclxuICAnYXJpYS1wb3NpbnNldCc6IDAsXHJcbiAgJ2FyaWEtcm93Y291bnQnOiAwLFxyXG4gICdhcmlhLXJvd2luZGV4JzogMCxcclxuICAnYXJpYS1yb3dzcGFuJzogMCxcclxuICAnYXJpYS1zZXRzaXplJzogMFxyXG59O1xyXG5cclxudmFyIHdhcm5lZFByb3BlcnRpZXMgPSB7fTtcclxudmFyIHJBUklBID0gbmV3IFJlZ0V4cCgnXihhcmlhKS1bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XHJcbnZhciByQVJJQUNhbWVsID0gbmV3IFJlZ0V4cCgnXihhcmlhKVtBLVpdWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xyXG52YXIgaGFzT3duUHJvcGVydHkkMSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnR5KHRhZ05hbWUsIG5hbWUpIHtcclxuICB7XHJcbiAgICBpZiAoaGFzT3duUHJvcGVydHkkMS5jYWxsKHdhcm5lZFByb3BlcnRpZXMsIG5hbWUpICYmIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJBUklBQ2FtZWwudGVzdChuYW1lKSkge1xyXG4gICAgICB2YXIgYXJpYU5hbWUgPSAnYXJpYS0nICsgbmFtZS5zbGljZSg0KS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB2YXIgY29ycmVjdE5hbWUgPSBhcmlhUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShhcmlhTmFtZSkgPyBhcmlhTmFtZSA6IG51bGw7IC8vIElmIHRoaXMgaXMgYW4gYXJpYS0qIGF0dHJpYnV0ZSwgYnV0IGlzIG5vdCBsaXN0ZWQgaW4gdGhlIGtub3duIERPTVxyXG4gICAgICAvLyBET00gcHJvcGVydGllcywgdGhlbiBpdCBpcyBhbiBpbnZhbGlkIGFyaWEtKiBhdHRyaWJ1dGUuXHJcblxyXG4gICAgICBpZiAoY29ycmVjdE5hbWUgPT0gbnVsbCkge1xyXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIEFSSUEgYXR0cmlidXRlIGAlc2AuIEFSSUEgYXR0cmlidXRlcyBmb2xsb3cgdGhlIHBhdHRlcm4gYXJpYS0qIGFuZCBtdXN0IGJlIGxvd2VyY2FzZS4nLCBuYW1lKTtcclxuXHJcbiAgICAgICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gLy8gYXJpYS0qIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGxvd2VyY2FzZTsgc3VnZ2VzdCB0aGUgbG93ZXJjYXNlIHZlcnNpb24uXHJcblxyXG5cclxuICAgICAgaWYgKG5hbWUgIT09IGNvcnJlY3ROYW1lKSB7XHJcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgQVJJQSBhdHRyaWJ1dGUgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgY29ycmVjdE5hbWUpO1xyXG5cclxuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzW25hbWVdID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChyQVJJQS50ZXN0KG5hbWUpKSB7XHJcbiAgICAgIHZhciBsb3dlckNhc2VkTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgdmFyIHN0YW5kYXJkTmFtZSA9IGFyaWFQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGxvd2VyQ2FzZWROYW1lKSA/IGxvd2VyQ2FzZWROYW1lIDogbnVsbDsgLy8gSWYgdGhpcyBpcyBhbiBhcmlhLSogYXR0cmlidXRlLCBidXQgaXMgbm90IGxpc3RlZCBpbiB0aGUga25vd24gRE9NXHJcbiAgICAgIC8vIERPTSBwcm9wZXJ0aWVzLCB0aGVuIGl0IGlzIGFuIGludmFsaWQgYXJpYS0qIGF0dHJpYnV0ZS5cclxuXHJcbiAgICAgIGlmIChzdGFuZGFyZE5hbWUgPT0gbnVsbCkge1xyXG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSAvLyBhcmlhLSogYXR0cmlidXRlcyBzaG91bGQgYmUgbG93ZXJjYXNlOyBzdWdnZXN0IHRoZSBsb3dlcmNhc2UgdmVyc2lvbi5cclxuXHJcblxyXG4gICAgICBpZiAobmFtZSAhPT0gc3RhbmRhcmROYW1lKSB7XHJcbiAgICAgICAgZXJyb3IoJ1Vua25vd24gQVJJQSBhdHRyaWJ1dGUgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgc3RhbmRhcmROYW1lKTtcclxuXHJcbiAgICAgICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3YXJuSW52YWxpZEFSSUFQcm9wcyh0eXBlLCBwcm9wcykge1xyXG4gIHtcclxuICAgIHZhciBpbnZhbGlkUHJvcHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcclxuICAgICAgdmFyIGlzVmFsaWQgPSB2YWxpZGF0ZVByb3BlcnR5KHR5cGUsIGtleSk7XHJcblxyXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICBpbnZhbGlkUHJvcHMucHVzaChrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHVua25vd25Qcm9wU3RyaW5nID0gaW52YWxpZFByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICByZXR1cm4gJ2AnICsgcHJvcCArICdgJztcclxuICAgIH0pLmpvaW4oJywgJyk7XHJcblxyXG4gICAgaWYgKGludmFsaWRQcm9wcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXJpYSBwcm9wICVzIG9uIDwlcz4gdGFnLiAnICsgJ0ZvciBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9mYi5tZS9pbnZhbGlkLWFyaWEtcHJvcCcsIHVua25vd25Qcm9wU3RyaW5nLCB0eXBlKTtcclxuICAgIH0gZWxzZSBpZiAoaW52YWxpZFByb3BzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXJpYSBwcm9wcyAlcyBvbiA8JXM+IHRhZy4gJyArICdGb3IgZGV0YWlscywgc2VlIGh0dHBzOi8vZmIubWUvaW52YWxpZC1hcmlhLXByb3AnLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnRpZXModHlwZSwgcHJvcHMpIHtcclxuICBpZiAoaXNDdXN0b21Db21wb25lbnQodHlwZSwgcHJvcHMpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB3YXJuSW52YWxpZEFSSUFQcm9wcyh0eXBlLCBwcm9wcyk7XHJcbn1cclxuXHJcbnZhciBkaWRXYXJuVmFsdWVOdWxsID0gZmFsc2U7XHJcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydGllcyQxKHR5cGUsIHByb3BzKSB7XHJcbiAge1xyXG4gICAgaWYgKHR5cGUgIT09ICdpbnB1dCcgJiYgdHlwZSAhPT0gJ3RleHRhcmVhJyAmJiB0eXBlICE9PSAnc2VsZWN0Jykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BzICE9IG51bGwgJiYgcHJvcHMudmFsdWUgPT09IG51bGwgJiYgIWRpZFdhcm5WYWx1ZU51bGwpIHtcclxuICAgICAgZGlkV2FyblZhbHVlTnVsbCA9IHRydWU7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcgJiYgcHJvcHMubXVsdGlwbGUpIHtcclxuICAgICAgICBlcnJvcignYHZhbHVlYCBwcm9wIG9uIGAlc2Agc2hvdWxkIG5vdCBiZSBudWxsLiAnICsgJ0NvbnNpZGVyIHVzaW5nIGFuIGVtcHR5IGFycmF5IHdoZW4gYG11bHRpcGxlYCBpcyBzZXQgdG8gYHRydWVgICcgKyAndG8gY2xlYXIgdGhlIGNvbXBvbmVudCBvciBgdW5kZWZpbmVkYCBmb3IgdW5jb250cm9sbGVkIGNvbXBvbmVudHMuJywgdHlwZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXJyb3IoJ2B2YWx1ZWAgcHJvcCBvbiBgJXNgIHNob3VsZCBub3QgYmUgbnVsbC4gJyArICdDb25zaWRlciB1c2luZyBhbiBlbXB0eSBzdHJpbmcgdG8gY2xlYXIgdGhlIGNvbXBvbmVudCBvciBgdW5kZWZpbmVkYCAnICsgJ2ZvciB1bmNvbnRyb2xsZWQgY29tcG9uZW50cy4nLCB0eXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1hcHBpbmcgZnJvbSByZWdpc3RyYXRpb24gbmFtZSB0byBwbHVnaW4gbW9kdWxlXHJcbiAqL1xyXG5cclxudmFyIHJlZ2lzdHJhdGlvbk5hbWVNb2R1bGVzID0ge307XHJcbi8qKlxyXG4gKiBNYXBwaW5nIGZyb20gbG93ZXJjYXNlIHJlZ2lzdHJhdGlvbiBuYW1lcyB0byB0aGUgcHJvcGVybHkgY2FzZWQgdmVyc2lvbixcclxuICogdXNlZCB0byB3YXJuIGluIHRoZSBjYXNlIG9mIG1pc3NpbmcgZXZlbnQgaGFuZGxlcnMuIEF2YWlsYWJsZVxyXG4gKiBvbmx5IGluIHRydWUuXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xyXG5cclxudmFyIHBvc3NpYmxlUmVnaXN0cmF0aW9uTmFtZXMgPSAge30gOyAvLyBUcnVzdCB0aGUgZGV2ZWxvcGVyIHRvIG9ubHkgdXNlIHBvc3NpYmxlUmVnaXN0cmF0aW9uTmFtZXMgaW4gdHJ1ZVxyXG5cclxuLy8gV2hlbiBhZGRpbmcgYXR0cmlidXRlcyB0byB0aGUgSFRNTCBvciBTVkcgd2hpdGVsaXN0LCBiZSBzdXJlIHRvXHJcbi8vIGFsc28gYWRkIHRoZW0gdG8gdGhpcyBtb2R1bGUgdG8gZW5zdXJlIGNhc2luZyBhbmQgaW5jb3JyZWN0IG5hbWVcclxuLy8gd2FybmluZ3MuXHJcbnZhciBwb3NzaWJsZVN0YW5kYXJkTmFtZXMgPSB7XHJcbiAgLy8gSFRNTFxyXG4gIGFjY2VwdDogJ2FjY2VwdCcsXHJcbiAgYWNjZXB0Y2hhcnNldDogJ2FjY2VwdENoYXJzZXQnLFxyXG4gICdhY2NlcHQtY2hhcnNldCc6ICdhY2NlcHRDaGFyc2V0JyxcclxuICBhY2Nlc3NrZXk6ICdhY2Nlc3NLZXknLFxyXG4gIGFjdGlvbjogJ2FjdGlvbicsXHJcbiAgYWxsb3dmdWxsc2NyZWVuOiAnYWxsb3dGdWxsU2NyZWVuJyxcclxuICBhbHQ6ICdhbHQnLFxyXG4gIGFzOiAnYXMnLFxyXG4gIGFzeW5jOiAnYXN5bmMnLFxyXG4gIGF1dG9jYXBpdGFsaXplOiAnYXV0b0NhcGl0YWxpemUnLFxyXG4gIGF1dG9jb21wbGV0ZTogJ2F1dG9Db21wbGV0ZScsXHJcbiAgYXV0b2NvcnJlY3Q6ICdhdXRvQ29ycmVjdCcsXHJcbiAgYXV0b2ZvY3VzOiAnYXV0b0ZvY3VzJyxcclxuICBhdXRvcGxheTogJ2F1dG9QbGF5JyxcclxuICBhdXRvc2F2ZTogJ2F1dG9TYXZlJyxcclxuICBjYXB0dXJlOiAnY2FwdHVyZScsXHJcbiAgY2VsbHBhZGRpbmc6ICdjZWxsUGFkZGluZycsXHJcbiAgY2VsbHNwYWNpbmc6ICdjZWxsU3BhY2luZycsXHJcbiAgY2hhbGxlbmdlOiAnY2hhbGxlbmdlJyxcclxuICBjaGFyc2V0OiAnY2hhclNldCcsXHJcbiAgY2hlY2tlZDogJ2NoZWNrZWQnLFxyXG4gIGNoaWxkcmVuOiAnY2hpbGRyZW4nLFxyXG4gIGNpdGU6ICdjaXRlJyxcclxuICBjbGFzczogJ2NsYXNzTmFtZScsXHJcbiAgY2xhc3NpZDogJ2NsYXNzSUQnLFxyXG4gIGNsYXNzbmFtZTogJ2NsYXNzTmFtZScsXHJcbiAgY29sczogJ2NvbHMnLFxyXG4gIGNvbHNwYW46ICdjb2xTcGFuJyxcclxuICBjb250ZW50OiAnY29udGVudCcsXHJcbiAgY29udGVudGVkaXRhYmxlOiAnY29udGVudEVkaXRhYmxlJyxcclxuICBjb250ZXh0bWVudTogJ2NvbnRleHRNZW51JyxcclxuICBjb250cm9sczogJ2NvbnRyb2xzJyxcclxuICBjb250cm9sc2xpc3Q6ICdjb250cm9sc0xpc3QnLFxyXG4gIGNvb3JkczogJ2Nvb3JkcycsXHJcbiAgY3Jvc3NvcmlnaW46ICdjcm9zc09yaWdpbicsXHJcbiAgZGFuZ2Vyb3VzbHlzZXRpbm5lcmh0bWw6ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsXHJcbiAgZGF0YTogJ2RhdGEnLFxyXG4gIGRhdGV0aW1lOiAnZGF0ZVRpbWUnLFxyXG4gIGRlZmF1bHQ6ICdkZWZhdWx0JyxcclxuICBkZWZhdWx0Y2hlY2tlZDogJ2RlZmF1bHRDaGVja2VkJyxcclxuICBkZWZhdWx0dmFsdWU6ICdkZWZhdWx0VmFsdWUnLFxyXG4gIGRlZmVyOiAnZGVmZXInLFxyXG4gIGRpcjogJ2RpcicsXHJcbiAgZGlzYWJsZWQ6ICdkaXNhYmxlZCcsXHJcbiAgZGlzYWJsZXBpY3R1cmVpbnBpY3R1cmU6ICdkaXNhYmxlUGljdHVyZUluUGljdHVyZScsXHJcbiAgZG93bmxvYWQ6ICdkb3dubG9hZCcsXHJcbiAgZHJhZ2dhYmxlOiAnZHJhZ2dhYmxlJyxcclxuICBlbmN0eXBlOiAnZW5jVHlwZScsXHJcbiAgZm9yOiAnaHRtbEZvcicsXHJcbiAgZm9ybTogJ2Zvcm0nLFxyXG4gIGZvcm1tZXRob2Q6ICdmb3JtTWV0aG9kJyxcclxuICBmb3JtYWN0aW9uOiAnZm9ybUFjdGlvbicsXHJcbiAgZm9ybWVuY3R5cGU6ICdmb3JtRW5jVHlwZScsXHJcbiAgZm9ybW5vdmFsaWRhdGU6ICdmb3JtTm9WYWxpZGF0ZScsXHJcbiAgZm9ybXRhcmdldDogJ2Zvcm1UYXJnZXQnLFxyXG4gIGZyYW1lYm9yZGVyOiAnZnJhbWVCb3JkZXInLFxyXG4gIGhlYWRlcnM6ICdoZWFkZXJzJyxcclxuICBoZWlnaHQ6ICdoZWlnaHQnLFxyXG4gIGhpZGRlbjogJ2hpZGRlbicsXHJcbiAgaGlnaDogJ2hpZ2gnLFxyXG4gIGhyZWY6ICdocmVmJyxcclxuICBocmVmbGFuZzogJ2hyZWZMYW5nJyxcclxuICBodG1sZm9yOiAnaHRtbEZvcicsXHJcbiAgaHR0cGVxdWl2OiAnaHR0cEVxdWl2JyxcclxuICAnaHR0cC1lcXVpdic6ICdodHRwRXF1aXYnLFxyXG4gIGljb246ICdpY29uJyxcclxuICBpZDogJ2lkJyxcclxuICBpbm5lcmh0bWw6ICdpbm5lckhUTUwnLFxyXG4gIGlucHV0bW9kZTogJ2lucHV0TW9kZScsXHJcbiAgaW50ZWdyaXR5OiAnaW50ZWdyaXR5JyxcclxuICBpczogJ2lzJyxcclxuICBpdGVtaWQ6ICdpdGVtSUQnLFxyXG4gIGl0ZW1wcm9wOiAnaXRlbVByb3AnLFxyXG4gIGl0ZW1yZWY6ICdpdGVtUmVmJyxcclxuICBpdGVtc2NvcGU6ICdpdGVtU2NvcGUnLFxyXG4gIGl0ZW10eXBlOiAnaXRlbVR5cGUnLFxyXG4gIGtleXBhcmFtczogJ2tleVBhcmFtcycsXHJcbiAga2V5dHlwZTogJ2tleVR5cGUnLFxyXG4gIGtpbmQ6ICdraW5kJyxcclxuICBsYWJlbDogJ2xhYmVsJyxcclxuICBsYW5nOiAnbGFuZycsXHJcbiAgbGlzdDogJ2xpc3QnLFxyXG4gIGxvb3A6ICdsb29wJyxcclxuICBsb3c6ICdsb3cnLFxyXG4gIG1hbmlmZXN0OiAnbWFuaWZlc3QnLFxyXG4gIG1hcmdpbndpZHRoOiAnbWFyZ2luV2lkdGgnLFxyXG4gIG1hcmdpbmhlaWdodDogJ21hcmdpbkhlaWdodCcsXHJcbiAgbWF4OiAnbWF4JyxcclxuICBtYXhsZW5ndGg6ICdtYXhMZW5ndGgnLFxyXG4gIG1lZGlhOiAnbWVkaWEnLFxyXG4gIG1lZGlhZ3JvdXA6ICdtZWRpYUdyb3VwJyxcclxuICBtZXRob2Q6ICdtZXRob2QnLFxyXG4gIG1pbjogJ21pbicsXHJcbiAgbWlubGVuZ3RoOiAnbWluTGVuZ3RoJyxcclxuICBtdWx0aXBsZTogJ211bHRpcGxlJyxcclxuICBtdXRlZDogJ211dGVkJyxcclxuICBuYW1lOiAnbmFtZScsXHJcbiAgbm9tb2R1bGU6ICdub01vZHVsZScsXHJcbiAgbm9uY2U6ICdub25jZScsXHJcbiAgbm92YWxpZGF0ZTogJ25vVmFsaWRhdGUnLFxyXG4gIG9wZW46ICdvcGVuJyxcclxuICBvcHRpbXVtOiAnb3B0aW11bScsXHJcbiAgcGF0dGVybjogJ3BhdHRlcm4nLFxyXG4gIHBsYWNlaG9sZGVyOiAncGxhY2Vob2xkZXInLFxyXG4gIHBsYXlzaW5saW5lOiAncGxheXNJbmxpbmUnLFxyXG4gIHBvc3RlcjogJ3Bvc3RlcicsXHJcbiAgcHJlbG9hZDogJ3ByZWxvYWQnLFxyXG4gIHByb2ZpbGU6ICdwcm9maWxlJyxcclxuICByYWRpb2dyb3VwOiAncmFkaW9Hcm91cCcsXHJcbiAgcmVhZG9ubHk6ICdyZWFkT25seScsXHJcbiAgcmVmZXJyZXJwb2xpY3k6ICdyZWZlcnJlclBvbGljeScsXHJcbiAgcmVsOiAncmVsJyxcclxuICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICByZXZlcnNlZDogJ3JldmVyc2VkJyxcclxuICByb2xlOiAncm9sZScsXHJcbiAgcm93czogJ3Jvd3MnLFxyXG4gIHJvd3NwYW46ICdyb3dTcGFuJyxcclxuICBzYW5kYm94OiAnc2FuZGJveCcsXHJcbiAgc2NvcGU6ICdzY29wZScsXHJcbiAgc2NvcGVkOiAnc2NvcGVkJyxcclxuICBzY3JvbGxpbmc6ICdzY3JvbGxpbmcnLFxyXG4gIHNlYW1sZXNzOiAnc2VhbWxlc3MnLFxyXG4gIHNlbGVjdGVkOiAnc2VsZWN0ZWQnLFxyXG4gIHNoYXBlOiAnc2hhcGUnLFxyXG4gIHNpemU6ICdzaXplJyxcclxuICBzaXplczogJ3NpemVzJyxcclxuICBzcGFuOiAnc3BhbicsXHJcbiAgc3BlbGxjaGVjazogJ3NwZWxsQ2hlY2snLFxyXG4gIHNyYzogJ3NyYycsXHJcbiAgc3JjZG9jOiAnc3JjRG9jJyxcclxuICBzcmNsYW5nOiAnc3JjTGFuZycsXHJcbiAgc3Jjc2V0OiAnc3JjU2V0JyxcclxuICBzdGFydDogJ3N0YXJ0JyxcclxuICBzdGVwOiAnc3RlcCcsXHJcbiAgc3R5bGU6ICdzdHlsZScsXHJcbiAgc3VtbWFyeTogJ3N1bW1hcnknLFxyXG4gIHRhYmluZGV4OiAndGFiSW5kZXgnLFxyXG4gIHRhcmdldDogJ3RhcmdldCcsXHJcbiAgdGl0bGU6ICd0aXRsZScsXHJcbiAgdHlwZTogJ3R5cGUnLFxyXG4gIHVzZW1hcDogJ3VzZU1hcCcsXHJcbiAgdmFsdWU6ICd2YWx1ZScsXHJcbiAgd2lkdGg6ICd3aWR0aCcsXHJcbiAgd21vZGU6ICd3bW9kZScsXHJcbiAgd3JhcDogJ3dyYXAnLFxyXG4gIC8vIFNWR1xyXG4gIGFib3V0OiAnYWJvdXQnLFxyXG4gIGFjY2VudGhlaWdodDogJ2FjY2VudEhlaWdodCcsXHJcbiAgJ2FjY2VudC1oZWlnaHQnOiAnYWNjZW50SGVpZ2h0JyxcclxuICBhY2N1bXVsYXRlOiAnYWNjdW11bGF0ZScsXHJcbiAgYWRkaXRpdmU6ICdhZGRpdGl2ZScsXHJcbiAgYWxpZ25tZW50YmFzZWxpbmU6ICdhbGlnbm1lbnRCYXNlbGluZScsXHJcbiAgJ2FsaWdubWVudC1iYXNlbGluZSc6ICdhbGlnbm1lbnRCYXNlbGluZScsXHJcbiAgYWxsb3dyZW9yZGVyOiAnYWxsb3dSZW9yZGVyJyxcclxuICBhbHBoYWJldGljOiAnYWxwaGFiZXRpYycsXHJcbiAgYW1wbGl0dWRlOiAnYW1wbGl0dWRlJyxcclxuICBhcmFiaWNmb3JtOiAnYXJhYmljRm9ybScsXHJcbiAgJ2FyYWJpYy1mb3JtJzogJ2FyYWJpY0Zvcm0nLFxyXG4gIGFzY2VudDogJ2FzY2VudCcsXHJcbiAgYXR0cmlidXRlbmFtZTogJ2F0dHJpYnV0ZU5hbWUnLFxyXG4gIGF0dHJpYnV0ZXR5cGU6ICdhdHRyaWJ1dGVUeXBlJyxcclxuICBhdXRvcmV2ZXJzZTogJ2F1dG9SZXZlcnNlJyxcclxuICBhemltdXRoOiAnYXppbXV0aCcsXHJcbiAgYmFzZWZyZXF1ZW5jeTogJ2Jhc2VGcmVxdWVuY3knLFxyXG4gIGJhc2VsaW5lc2hpZnQ6ICdiYXNlbGluZVNoaWZ0JyxcclxuICAnYmFzZWxpbmUtc2hpZnQnOiAnYmFzZWxpbmVTaGlmdCcsXHJcbiAgYmFzZXByb2ZpbGU6ICdiYXNlUHJvZmlsZScsXHJcbiAgYmJveDogJ2Jib3gnLFxyXG4gIGJlZ2luOiAnYmVnaW4nLFxyXG4gIGJpYXM6ICdiaWFzJyxcclxuICBieTogJ2J5JyxcclxuICBjYWxjbW9kZTogJ2NhbGNNb2RlJyxcclxuICBjYXBoZWlnaHQ6ICdjYXBIZWlnaHQnLFxyXG4gICdjYXAtaGVpZ2h0JzogJ2NhcEhlaWdodCcsXHJcbiAgY2xpcDogJ2NsaXAnLFxyXG4gIGNsaXBwYXRoOiAnY2xpcFBhdGgnLFxyXG4gICdjbGlwLXBhdGgnOiAnY2xpcFBhdGgnLFxyXG4gIGNsaXBwYXRodW5pdHM6ICdjbGlwUGF0aFVuaXRzJyxcclxuICBjbGlwcnVsZTogJ2NsaXBSdWxlJyxcclxuICAnY2xpcC1ydWxlJzogJ2NsaXBSdWxlJyxcclxuICBjb2xvcjogJ2NvbG9yJyxcclxuICBjb2xvcmludGVycG9sYXRpb246ICdjb2xvckludGVycG9sYXRpb24nLFxyXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uJzogJ2NvbG9ySW50ZXJwb2xhdGlvbicsXHJcbiAgY29sb3JpbnRlcnBvbGF0aW9uZmlsdGVyczogJ2NvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnMnLFxyXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnOiAnY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycycsXHJcbiAgY29sb3Jwcm9maWxlOiAnY29sb3JQcm9maWxlJyxcclxuICAnY29sb3ItcHJvZmlsZSc6ICdjb2xvclByb2ZpbGUnLFxyXG4gIGNvbG9ycmVuZGVyaW5nOiAnY29sb3JSZW5kZXJpbmcnLFxyXG4gICdjb2xvci1yZW5kZXJpbmcnOiAnY29sb3JSZW5kZXJpbmcnLFxyXG4gIGNvbnRlbnRzY3JpcHR0eXBlOiAnY29udGVudFNjcmlwdFR5cGUnLFxyXG4gIGNvbnRlbnRzdHlsZXR5cGU6ICdjb250ZW50U3R5bGVUeXBlJyxcclxuICBjdXJzb3I6ICdjdXJzb3InLFxyXG4gIGN4OiAnY3gnLFxyXG4gIGN5OiAnY3knLFxyXG4gIGQ6ICdkJyxcclxuICBkYXRhdHlwZTogJ2RhdGF0eXBlJyxcclxuICBkZWNlbGVyYXRlOiAnZGVjZWxlcmF0ZScsXHJcbiAgZGVzY2VudDogJ2Rlc2NlbnQnLFxyXG4gIGRpZmZ1c2Vjb25zdGFudDogJ2RpZmZ1c2VDb25zdGFudCcsXHJcbiAgZGlyZWN0aW9uOiAnZGlyZWN0aW9uJyxcclxuICBkaXNwbGF5OiAnZGlzcGxheScsXHJcbiAgZGl2aXNvcjogJ2Rpdmlzb3InLFxyXG4gIGRvbWluYW50YmFzZWxpbmU6ICdkb21pbmFudEJhc2VsaW5lJyxcclxuICAnZG9taW5hbnQtYmFzZWxpbmUnOiAnZG9taW5hbnRCYXNlbGluZScsXHJcbiAgZHVyOiAnZHVyJyxcclxuICBkeDogJ2R4JyxcclxuICBkeTogJ2R5JyxcclxuICBlZGdlbW9kZTogJ2VkZ2VNb2RlJyxcclxuICBlbGV2YXRpb246ICdlbGV2YXRpb24nLFxyXG4gIGVuYWJsZWJhY2tncm91bmQ6ICdlbmFibGVCYWNrZ3JvdW5kJyxcclxuICAnZW5hYmxlLWJhY2tncm91bmQnOiAnZW5hYmxlQmFja2dyb3VuZCcsXHJcbiAgZW5kOiAnZW5kJyxcclxuICBleHBvbmVudDogJ2V4cG9uZW50JyxcclxuICBleHRlcm5hbHJlc291cmNlc3JlcXVpcmVkOiAnZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCcsXHJcbiAgZmlsbDogJ2ZpbGwnLFxyXG4gIGZpbGxvcGFjaXR5OiAnZmlsbE9wYWNpdHknLFxyXG4gICdmaWxsLW9wYWNpdHknOiAnZmlsbE9wYWNpdHknLFxyXG4gIGZpbGxydWxlOiAnZmlsbFJ1bGUnLFxyXG4gICdmaWxsLXJ1bGUnOiAnZmlsbFJ1bGUnLFxyXG4gIGZpbHRlcjogJ2ZpbHRlcicsXHJcbiAgZmlsdGVycmVzOiAnZmlsdGVyUmVzJyxcclxuICBmaWx0ZXJ1bml0czogJ2ZpbHRlclVuaXRzJyxcclxuICBmbG9vZG9wYWNpdHk6ICdmbG9vZE9wYWNpdHknLFxyXG4gICdmbG9vZC1vcGFjaXR5JzogJ2Zsb29kT3BhY2l0eScsXHJcbiAgZmxvb2Rjb2xvcjogJ2Zsb29kQ29sb3InLFxyXG4gICdmbG9vZC1jb2xvcic6ICdmbG9vZENvbG9yJyxcclxuICBmb2N1c2FibGU6ICdmb2N1c2FibGUnLFxyXG4gIGZvbnRmYW1pbHk6ICdmb250RmFtaWx5JyxcclxuICAnZm9udC1mYW1pbHknOiAnZm9udEZhbWlseScsXHJcbiAgZm9udHNpemU6ICdmb250U2l6ZScsXHJcbiAgJ2ZvbnQtc2l6ZSc6ICdmb250U2l6ZScsXHJcbiAgZm9udHNpemVhZGp1c3Q6ICdmb250U2l6ZUFkanVzdCcsXHJcbiAgJ2ZvbnQtc2l6ZS1hZGp1c3QnOiAnZm9udFNpemVBZGp1c3QnLFxyXG4gIGZvbnRzdHJldGNoOiAnZm9udFN0cmV0Y2gnLFxyXG4gICdmb250LXN0cmV0Y2gnOiAnZm9udFN0cmV0Y2gnLFxyXG4gIGZvbnRzdHlsZTogJ2ZvbnRTdHlsZScsXHJcbiAgJ2ZvbnQtc3R5bGUnOiAnZm9udFN0eWxlJyxcclxuICBmb250dmFyaWFudDogJ2ZvbnRWYXJpYW50JyxcclxuICAnZm9udC12YXJpYW50JzogJ2ZvbnRWYXJpYW50JyxcclxuICBmb250d2VpZ2h0OiAnZm9udFdlaWdodCcsXHJcbiAgJ2ZvbnQtd2VpZ2h0JzogJ2ZvbnRXZWlnaHQnLFxyXG4gIGZvcm1hdDogJ2Zvcm1hdCcsXHJcbiAgZnJvbTogJ2Zyb20nLFxyXG4gIGZ4OiAnZngnLFxyXG4gIGZ5OiAnZnknLFxyXG4gIGcxOiAnZzEnLFxyXG4gIGcyOiAnZzInLFxyXG4gIGdseXBobmFtZTogJ2dseXBoTmFtZScsXHJcbiAgJ2dseXBoLW5hbWUnOiAnZ2x5cGhOYW1lJyxcclxuICBnbHlwaG9yaWVudGF0aW9uaG9yaXpvbnRhbDogJ2dseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsJyxcclxuICAnZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCc6ICdnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbCcsXHJcbiAgZ2x5cGhvcmllbnRhdGlvbnZlcnRpY2FsOiAnZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsJyxcclxuICAnZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwnOiAnZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsJyxcclxuICBnbHlwaHJlZjogJ2dseXBoUmVmJyxcclxuICBncmFkaWVudHRyYW5zZm9ybTogJ2dyYWRpZW50VHJhbnNmb3JtJyxcclxuICBncmFkaWVudHVuaXRzOiAnZ3JhZGllbnRVbml0cycsXHJcbiAgaGFuZ2luZzogJ2hhbmdpbmcnLFxyXG4gIGhvcml6YWR2eDogJ2hvcml6QWR2WCcsXHJcbiAgJ2hvcml6LWFkdi14JzogJ2hvcml6QWR2WCcsXHJcbiAgaG9yaXpvcmlnaW54OiAnaG9yaXpPcmlnaW5YJyxcclxuICAnaG9yaXotb3JpZ2luLXgnOiAnaG9yaXpPcmlnaW5YJyxcclxuICBpZGVvZ3JhcGhpYzogJ2lkZW9ncmFwaGljJyxcclxuICBpbWFnZXJlbmRlcmluZzogJ2ltYWdlUmVuZGVyaW5nJyxcclxuICAnaW1hZ2UtcmVuZGVyaW5nJzogJ2ltYWdlUmVuZGVyaW5nJyxcclxuICBpbjI6ICdpbjInLFxyXG4gIGluOiAnaW4nLFxyXG4gIGlubGlzdDogJ2lubGlzdCcsXHJcbiAgaW50ZXJjZXB0OiAnaW50ZXJjZXB0JyxcclxuICBrMTogJ2sxJyxcclxuICBrMjogJ2syJyxcclxuICBrMzogJ2szJyxcclxuICBrNDogJ2s0JyxcclxuICBrOiAnaycsXHJcbiAga2VybmVsbWF0cml4OiAna2VybmVsTWF0cml4JyxcclxuICBrZXJuZWx1bml0bGVuZ3RoOiAna2VybmVsVW5pdExlbmd0aCcsXHJcbiAga2VybmluZzogJ2tlcm5pbmcnLFxyXG4gIGtleXBvaW50czogJ2tleVBvaW50cycsXHJcbiAga2V5c3BsaW5lczogJ2tleVNwbGluZXMnLFxyXG4gIGtleXRpbWVzOiAna2V5VGltZXMnLFxyXG4gIGxlbmd0aGFkanVzdDogJ2xlbmd0aEFkanVzdCcsXHJcbiAgbGV0dGVyc3BhY2luZzogJ2xldHRlclNwYWNpbmcnLFxyXG4gICdsZXR0ZXItc3BhY2luZyc6ICdsZXR0ZXJTcGFjaW5nJyxcclxuICBsaWdodGluZ2NvbG9yOiAnbGlnaHRpbmdDb2xvcicsXHJcbiAgJ2xpZ2h0aW5nLWNvbG9yJzogJ2xpZ2h0aW5nQ29sb3InLFxyXG4gIGxpbWl0aW5nY29uZWFuZ2xlOiAnbGltaXRpbmdDb25lQW5nbGUnLFxyXG4gIGxvY2FsOiAnbG9jYWwnLFxyXG4gIG1hcmtlcmVuZDogJ21hcmtlckVuZCcsXHJcbiAgJ21hcmtlci1lbmQnOiAnbWFya2VyRW5kJyxcclxuICBtYXJrZXJoZWlnaHQ6ICdtYXJrZXJIZWlnaHQnLFxyXG4gIG1hcmtlcm1pZDogJ21hcmtlck1pZCcsXHJcbiAgJ21hcmtlci1taWQnOiAnbWFya2VyTWlkJyxcclxuICBtYXJrZXJzdGFydDogJ21hcmtlclN0YXJ0JyxcclxuICAnbWFya2VyLXN0YXJ0JzogJ21hcmtlclN0YXJ0JyxcclxuICBtYXJrZXJ1bml0czogJ21hcmtlclVuaXRzJyxcclxuICBtYXJrZXJ3aWR0aDogJ21hcmtlcldpZHRoJyxcclxuICBtYXNrOiAnbWFzaycsXHJcbiAgbWFza2NvbnRlbnR1bml0czogJ21hc2tDb250ZW50VW5pdHMnLFxyXG4gIG1hc2t1bml0czogJ21hc2tVbml0cycsXHJcbiAgbWF0aGVtYXRpY2FsOiAnbWF0aGVtYXRpY2FsJyxcclxuICBtb2RlOiAnbW9kZScsXHJcbiAgbnVtb2N0YXZlczogJ251bU9jdGF2ZXMnLFxyXG4gIG9mZnNldDogJ29mZnNldCcsXHJcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxyXG4gIG9wZXJhdG9yOiAnb3BlcmF0b3InLFxyXG4gIG9yZGVyOiAnb3JkZXInLFxyXG4gIG9yaWVudDogJ29yaWVudCcsXHJcbiAgb3JpZW50YXRpb246ICdvcmllbnRhdGlvbicsXHJcbiAgb3JpZ2luOiAnb3JpZ2luJyxcclxuICBvdmVyZmxvdzogJ292ZXJmbG93JyxcclxuICBvdmVybGluZXBvc2l0aW9uOiAnb3ZlcmxpbmVQb3NpdGlvbicsXHJcbiAgJ292ZXJsaW5lLXBvc2l0aW9uJzogJ292ZXJsaW5lUG9zaXRpb24nLFxyXG4gIG92ZXJsaW5ldGhpY2tuZXNzOiAnb3ZlcmxpbmVUaGlja25lc3MnLFxyXG4gICdvdmVybGluZS10aGlja25lc3MnOiAnb3ZlcmxpbmVUaGlja25lc3MnLFxyXG4gIHBhaW50b3JkZXI6ICdwYWludE9yZGVyJyxcclxuICAncGFpbnQtb3JkZXInOiAncGFpbnRPcmRlcicsXHJcbiAgcGFub3NlMTogJ3Bhbm9zZTEnLFxyXG4gICdwYW5vc2UtMSc6ICdwYW5vc2UxJyxcclxuICBwYXRobGVuZ3RoOiAncGF0aExlbmd0aCcsXHJcbiAgcGF0dGVybmNvbnRlbnR1bml0czogJ3BhdHRlcm5Db250ZW50VW5pdHMnLFxyXG4gIHBhdHRlcm50cmFuc2Zvcm06ICdwYXR0ZXJuVHJhbnNmb3JtJyxcclxuICBwYXR0ZXJudW5pdHM6ICdwYXR0ZXJuVW5pdHMnLFxyXG4gIHBvaW50ZXJldmVudHM6ICdwb2ludGVyRXZlbnRzJyxcclxuICAncG9pbnRlci1ldmVudHMnOiAncG9pbnRlckV2ZW50cycsXHJcbiAgcG9pbnRzOiAncG9pbnRzJyxcclxuICBwb2ludHNhdHg6ICdwb2ludHNBdFgnLFxyXG4gIHBvaW50c2F0eTogJ3BvaW50c0F0WScsXHJcbiAgcG9pbnRzYXR6OiAncG9pbnRzQXRaJyxcclxuICBwcmVmaXg6ICdwcmVmaXgnLFxyXG4gIHByZXNlcnZlYWxwaGE6ICdwcmVzZXJ2ZUFscGhhJyxcclxuICBwcmVzZXJ2ZWFzcGVjdHJhdGlvOiAncHJlc2VydmVBc3BlY3RSYXRpbycsXHJcbiAgcHJpbWl0aXZldW5pdHM6ICdwcmltaXRpdmVVbml0cycsXHJcbiAgcHJvcGVydHk6ICdwcm9wZXJ0eScsXHJcbiAgcjogJ3InLFxyXG4gIHJhZGl1czogJ3JhZGl1cycsXHJcbiAgcmVmeDogJ3JlZlgnLFxyXG4gIHJlZnk6ICdyZWZZJyxcclxuICByZW5kZXJpbmdpbnRlbnQ6ICdyZW5kZXJpbmdJbnRlbnQnLFxyXG4gICdyZW5kZXJpbmctaW50ZW50JzogJ3JlbmRlcmluZ0ludGVudCcsXHJcbiAgcmVwZWF0Y291bnQ6ICdyZXBlYXRDb3VudCcsXHJcbiAgcmVwZWF0ZHVyOiAncmVwZWF0RHVyJyxcclxuICByZXF1aXJlZGV4dGVuc2lvbnM6ICdyZXF1aXJlZEV4dGVuc2lvbnMnLFxyXG4gIHJlcXVpcmVkZmVhdHVyZXM6ICdyZXF1aXJlZEZlYXR1cmVzJyxcclxuICByZXNvdXJjZTogJ3Jlc291cmNlJyxcclxuICByZXN0YXJ0OiAncmVzdGFydCcsXHJcbiAgcmVzdWx0OiAncmVzdWx0JyxcclxuICByZXN1bHRzOiAncmVzdWx0cycsXHJcbiAgcm90YXRlOiAncm90YXRlJyxcclxuICByeDogJ3J4JyxcclxuICByeTogJ3J5JyxcclxuICBzY2FsZTogJ3NjYWxlJyxcclxuICBzZWN1cml0eTogJ3NlY3VyaXR5JyxcclxuICBzZWVkOiAnc2VlZCcsXHJcbiAgc2hhcGVyZW5kZXJpbmc6ICdzaGFwZVJlbmRlcmluZycsXHJcbiAgJ3NoYXBlLXJlbmRlcmluZyc6ICdzaGFwZVJlbmRlcmluZycsXHJcbiAgc2xvcGU6ICdzbG9wZScsXHJcbiAgc3BhY2luZzogJ3NwYWNpbmcnLFxyXG4gIHNwZWN1bGFyY29uc3RhbnQ6ICdzcGVjdWxhckNvbnN0YW50JyxcclxuICBzcGVjdWxhcmV4cG9uZW50OiAnc3BlY3VsYXJFeHBvbmVudCcsXHJcbiAgc3BlZWQ6ICdzcGVlZCcsXHJcbiAgc3ByZWFkbWV0aG9kOiAnc3ByZWFkTWV0aG9kJyxcclxuICBzdGFydG9mZnNldDogJ3N0YXJ0T2Zmc2V0JyxcclxuICBzdGRkZXZpYXRpb246ICdzdGREZXZpYXRpb24nLFxyXG4gIHN0ZW1oOiAnc3RlbWgnLFxyXG4gIHN0ZW12OiAnc3RlbXYnLFxyXG4gIHN0aXRjaHRpbGVzOiAnc3RpdGNoVGlsZXMnLFxyXG4gIHN0b3Bjb2xvcjogJ3N0b3BDb2xvcicsXHJcbiAgJ3N0b3AtY29sb3InOiAnc3RvcENvbG9yJyxcclxuICBzdG9wb3BhY2l0eTogJ3N0b3BPcGFjaXR5JyxcclxuICAnc3RvcC1vcGFjaXR5JzogJ3N0b3BPcGFjaXR5JyxcclxuICBzdHJpa2V0aHJvdWdocG9zaXRpb246ICdzdHJpa2V0aHJvdWdoUG9zaXRpb24nLFxyXG4gICdzdHJpa2V0aHJvdWdoLXBvc2l0aW9uJzogJ3N0cmlrZXRocm91Z2hQb3NpdGlvbicsXHJcbiAgc3RyaWtldGhyb3VnaHRoaWNrbmVzczogJ3N0cmlrZXRocm91Z2hUaGlja25lc3MnLFxyXG4gICdzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcyc6ICdzdHJpa2V0aHJvdWdoVGhpY2tuZXNzJyxcclxuICBzdHJpbmc6ICdzdHJpbmcnLFxyXG4gIHN0cm9rZTogJ3N0cm9rZScsXHJcbiAgc3Ryb2tlZGFzaGFycmF5OiAnc3Ryb2tlRGFzaGFycmF5JyxcclxuICAnc3Ryb2tlLWRhc2hhcnJheSc6ICdzdHJva2VEYXNoYXJyYXknLFxyXG4gIHN0cm9rZWRhc2hvZmZzZXQ6ICdzdHJva2VEYXNob2Zmc2V0JyxcclxuICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAnc3Ryb2tlRGFzaG9mZnNldCcsXHJcbiAgc3Ryb2tlbGluZWNhcDogJ3N0cm9rZUxpbmVjYXAnLFxyXG4gICdzdHJva2UtbGluZWNhcCc6ICdzdHJva2VMaW5lY2FwJyxcclxuICBzdHJva2VsaW5lam9pbjogJ3N0cm9rZUxpbmVqb2luJyxcclxuICAnc3Ryb2tlLWxpbmVqb2luJzogJ3N0cm9rZUxpbmVqb2luJyxcclxuICBzdHJva2VtaXRlcmxpbWl0OiAnc3Ryb2tlTWl0ZXJsaW1pdCcsXHJcbiAgJ3N0cm9rZS1taXRlcmxpbWl0JzogJ3N0cm9rZU1pdGVybGltaXQnLFxyXG4gIHN0cm9rZXdpZHRoOiAnc3Ryb2tlV2lkdGgnLFxyXG4gICdzdHJva2Utd2lkdGgnOiAnc3Ryb2tlV2lkdGgnLFxyXG4gIHN0cm9rZW9wYWNpdHk6ICdzdHJva2VPcGFjaXR5JyxcclxuICAnc3Ryb2tlLW9wYWNpdHknOiAnc3Ryb2tlT3BhY2l0eScsXHJcbiAgc3VwcHJlc3Njb250ZW50ZWRpdGFibGV3YXJuaW5nOiAnc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nJyxcclxuICBzdXBwcmVzc2h5ZHJhdGlvbndhcm5pbmc6ICdzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcnLFxyXG4gIHN1cmZhY2VzY2FsZTogJ3N1cmZhY2VTY2FsZScsXHJcbiAgc3lzdGVtbGFuZ3VhZ2U6ICdzeXN0ZW1MYW5ndWFnZScsXHJcbiAgdGFibGV2YWx1ZXM6ICd0YWJsZVZhbHVlcycsXHJcbiAgdGFyZ2V0eDogJ3RhcmdldFgnLFxyXG4gIHRhcmdldHk6ICd0YXJnZXRZJyxcclxuICB0ZXh0YW5jaG9yOiAndGV4dEFuY2hvcicsXHJcbiAgJ3RleHQtYW5jaG9yJzogJ3RleHRBbmNob3InLFxyXG4gIHRleHRkZWNvcmF0aW9uOiAndGV4dERlY29yYXRpb24nLFxyXG4gICd0ZXh0LWRlY29yYXRpb24nOiAndGV4dERlY29yYXRpb24nLFxyXG4gIHRleHRsZW5ndGg6ICd0ZXh0TGVuZ3RoJyxcclxuICB0ZXh0cmVuZGVyaW5nOiAndGV4dFJlbmRlcmluZycsXHJcbiAgJ3RleHQtcmVuZGVyaW5nJzogJ3RleHRSZW5kZXJpbmcnLFxyXG4gIHRvOiAndG8nLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zZm9ybScsXHJcbiAgdHlwZW9mOiAndHlwZW9mJyxcclxuICB1MTogJ3UxJyxcclxuICB1MjogJ3UyJyxcclxuICB1bmRlcmxpbmVwb3NpdGlvbjogJ3VuZGVybGluZVBvc2l0aW9uJyxcclxuICAndW5kZXJsaW5lLXBvc2l0aW9uJzogJ3VuZGVybGluZVBvc2l0aW9uJyxcclxuICB1bmRlcmxpbmV0aGlja25lc3M6ICd1bmRlcmxpbmVUaGlja25lc3MnLFxyXG4gICd1bmRlcmxpbmUtdGhpY2tuZXNzJzogJ3VuZGVybGluZVRoaWNrbmVzcycsXHJcbiAgdW5pY29kZTogJ3VuaWNvZGUnLFxyXG4gIHVuaWNvZGViaWRpOiAndW5pY29kZUJpZGknLFxyXG4gICd1bmljb2RlLWJpZGknOiAndW5pY29kZUJpZGknLFxyXG4gIHVuaWNvZGVyYW5nZTogJ3VuaWNvZGVSYW5nZScsXHJcbiAgJ3VuaWNvZGUtcmFuZ2UnOiAndW5pY29kZVJhbmdlJyxcclxuICB1bml0c3BlcmVtOiAndW5pdHNQZXJFbScsXHJcbiAgJ3VuaXRzLXBlci1lbSc6ICd1bml0c1BlckVtJyxcclxuICB1bnNlbGVjdGFibGU6ICd1bnNlbGVjdGFibGUnLFxyXG4gIHZhbHBoYWJldGljOiAndkFscGhhYmV0aWMnLFxyXG4gICd2LWFscGhhYmV0aWMnOiAndkFscGhhYmV0aWMnLFxyXG4gIHZhbHVlczogJ3ZhbHVlcycsXHJcbiAgdmVjdG9yZWZmZWN0OiAndmVjdG9yRWZmZWN0JyxcclxuICAndmVjdG9yLWVmZmVjdCc6ICd2ZWN0b3JFZmZlY3QnLFxyXG4gIHZlcnNpb246ICd2ZXJzaW9uJyxcclxuICB2ZXJ0YWR2eTogJ3ZlcnRBZHZZJyxcclxuICAndmVydC1hZHYteSc6ICd2ZXJ0QWR2WScsXHJcbiAgdmVydG9yaWdpbng6ICd2ZXJ0T3JpZ2luWCcsXHJcbiAgJ3ZlcnQtb3JpZ2luLXgnOiAndmVydE9yaWdpblgnLFxyXG4gIHZlcnRvcmlnaW55OiAndmVydE9yaWdpblknLFxyXG4gICd2ZXJ0LW9yaWdpbi15JzogJ3ZlcnRPcmlnaW5ZJyxcclxuICB2aGFuZ2luZzogJ3ZIYW5naW5nJyxcclxuICAndi1oYW5naW5nJzogJ3ZIYW5naW5nJyxcclxuICB2aWRlb2dyYXBoaWM6ICd2SWRlb2dyYXBoaWMnLFxyXG4gICd2LWlkZW9ncmFwaGljJzogJ3ZJZGVvZ3JhcGhpYycsXHJcbiAgdmlld2JveDogJ3ZpZXdCb3gnLFxyXG4gIHZpZXd0YXJnZXQ6ICd2aWV3VGFyZ2V0JyxcclxuICB2aXNpYmlsaXR5OiAndmlzaWJpbGl0eScsXHJcbiAgdm1hdGhlbWF0aWNhbDogJ3ZNYXRoZW1hdGljYWwnLFxyXG4gICd2LW1hdGhlbWF0aWNhbCc6ICd2TWF0aGVtYXRpY2FsJyxcclxuICB2b2NhYjogJ3ZvY2FiJyxcclxuICB3aWR0aHM6ICd3aWR0aHMnLFxyXG4gIHdvcmRzcGFjaW5nOiAnd29yZFNwYWNpbmcnLFxyXG4gICd3b3JkLXNwYWNpbmcnOiAnd29yZFNwYWNpbmcnLFxyXG4gIHdyaXRpbmdtb2RlOiAnd3JpdGluZ01vZGUnLFxyXG4gICd3cml0aW5nLW1vZGUnOiAnd3JpdGluZ01vZGUnLFxyXG4gIHgxOiAneDEnLFxyXG4gIHgyOiAneDInLFxyXG4gIHg6ICd4JyxcclxuICB4Y2hhbm5lbHNlbGVjdG9yOiAneENoYW5uZWxTZWxlY3RvcicsXHJcbiAgeGhlaWdodDogJ3hIZWlnaHQnLFxyXG4gICd4LWhlaWdodCc6ICd4SGVpZ2h0JyxcclxuICB4bGlua2FjdHVhdGU6ICd4bGlua0FjdHVhdGUnLFxyXG4gICd4bGluazphY3R1YXRlJzogJ3hsaW5rQWN0dWF0ZScsXHJcbiAgeGxpbmthcmNyb2xlOiAneGxpbmtBcmNyb2xlJyxcclxuICAneGxpbms6YXJjcm9sZSc6ICd4bGlua0FyY3JvbGUnLFxyXG4gIHhsaW5raHJlZjogJ3hsaW5rSHJlZicsXHJcbiAgJ3hsaW5rOmhyZWYnOiAneGxpbmtIcmVmJyxcclxuICB4bGlua3JvbGU6ICd4bGlua1JvbGUnLFxyXG4gICd4bGluazpyb2xlJzogJ3hsaW5rUm9sZScsXHJcbiAgeGxpbmtzaG93OiAneGxpbmtTaG93JyxcclxuICAneGxpbms6c2hvdyc6ICd4bGlua1Nob3cnLFxyXG4gIHhsaW5rdGl0bGU6ICd4bGlua1RpdGxlJyxcclxuICAneGxpbms6dGl0bGUnOiAneGxpbmtUaXRsZScsXHJcbiAgeGxpbmt0eXBlOiAneGxpbmtUeXBlJyxcclxuICAneGxpbms6dHlwZSc6ICd4bGlua1R5cGUnLFxyXG4gIHhtbGJhc2U6ICd4bWxCYXNlJyxcclxuICAneG1sOmJhc2UnOiAneG1sQmFzZScsXHJcbiAgeG1sbGFuZzogJ3htbExhbmcnLFxyXG4gICd4bWw6bGFuZyc6ICd4bWxMYW5nJyxcclxuICB4bWxuczogJ3htbG5zJyxcclxuICAneG1sOnNwYWNlJzogJ3htbFNwYWNlJyxcclxuICB4bWxuc3hsaW5rOiAneG1sbnNYbGluaycsXHJcbiAgJ3htbG5zOnhsaW5rJzogJ3htbG5zWGxpbmsnLFxyXG4gIHhtbHNwYWNlOiAneG1sU3BhY2UnLFxyXG4gIHkxOiAneTEnLFxyXG4gIHkyOiAneTInLFxyXG4gIHk6ICd5JyxcclxuICB5Y2hhbm5lbHNlbGVjdG9yOiAneUNoYW5uZWxTZWxlY3RvcicsXHJcbiAgejogJ3onLFxyXG4gIHpvb21hbmRwYW46ICd6b29tQW5kUGFuJ1xyXG59O1xyXG5cclxudmFyIHZhbGlkYXRlUHJvcGVydHkkMSA9IGZ1bmN0aW9uICgpIHt9O1xyXG5cclxue1xyXG4gIHZhciB3YXJuZWRQcm9wZXJ0aWVzJDEgPSB7fTtcclxuICB2YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuICB2YXIgRVZFTlRfTkFNRV9SRUdFWCA9IC9eb24uLztcclxuICB2YXIgSU5WQUxJRF9FVkVOVF9OQU1FX1JFR0VYID0gL15vblteQS1aXS87XHJcbiAgdmFyIHJBUklBJDEgPSBuZXcgUmVnRXhwKCdeKGFyaWEpLVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcclxuICB2YXIgckFSSUFDYW1lbCQxID0gbmV3IFJlZ0V4cCgnXihhcmlhKVtBLVpdWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xyXG5cclxuICB2YWxpZGF0ZVByb3BlcnR5JDEgPSBmdW5jdGlvbiAodGFnTmFtZSwgbmFtZSwgdmFsdWUsIGNhblVzZUV2ZW50U3lzdGVtKSB7XHJcbiAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwod2FybmVkUHJvcGVydGllcyQxLCBuYW1lKSAmJiB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0pIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvd2VyQ2FzZWROYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGlmIChsb3dlckNhc2VkTmFtZSA9PT0gJ29uZm9jdXNpbicgfHwgbG93ZXJDYXNlZE5hbWUgPT09ICdvbmZvY3Vzb3V0Jykge1xyXG4gICAgICBlcnJvcignUmVhY3QgdXNlcyBvbkZvY3VzIGFuZCBvbkJsdXIgaW5zdGVhZCBvZiBvbkZvY3VzSW4gYW5kIG9uRm9jdXNPdXQuICcgKyAnQWxsIFJlYWN0IGV2ZW50cyBhcmUgbm9ybWFsaXplZCB0byBidWJibGUsIHNvIG9uRm9jdXNJbiBhbmQgb25Gb2N1c091dCAnICsgJ2FyZSBub3QgbmVlZGVkL3N1cHBvcnRlZCBieSBSZWFjdC4nKTtcclxuXHJcbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSAvLyBXZSBjYW4ndCByZWx5IG9uIHRoZSBldmVudCBzeXN0ZW0gYmVpbmcgaW5qZWN0ZWQgb24gdGhlIHNlcnZlci5cclxuXHJcblxyXG4gICAgaWYgKGNhblVzZUV2ZW50U3lzdGVtKSB7XHJcbiAgICAgIGlmIChyZWdpc3RyYXRpb25OYW1lTW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgcmVnaXN0cmF0aW9uTmFtZSA9IHBvc3NpYmxlUmVnaXN0cmF0aW9uTmFtZXMuaGFzT3duUHJvcGVydHkobG93ZXJDYXNlZE5hbWUpID8gcG9zc2libGVSZWdpc3RyYXRpb25OYW1lc1tsb3dlckNhc2VkTmFtZV0gOiBudWxsO1xyXG5cclxuICAgICAgaWYgKHJlZ2lzdHJhdGlvbk5hbWUgIT0gbnVsbCkge1xyXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIGV2ZW50IGhhbmRsZXIgcHJvcGVydHkgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgcmVnaXN0cmF0aW9uTmFtZSk7XHJcblxyXG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChFVkVOVF9OQU1FX1JFR0VYLnRlc3QobmFtZSkpIHtcclxuICAgICAgICBlcnJvcignVW5rbm93biBldmVudCBoYW5kbGVyIHByb3BlcnR5IGAlc2AuIEl0IHdpbGwgYmUgaWdub3JlZC4nLCBuYW1lKTtcclxuXHJcbiAgICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChFVkVOVF9OQU1FX1JFR0VYLnRlc3QobmFtZSkpIHtcclxuICAgICAgLy8gSWYgbm8gZXZlbnQgcGx1Z2lucyBoYXZlIGJlZW4gaW5qZWN0ZWQsIHdlIGFyZSBpbiBhIHNlcnZlciBlbnZpcm9ubWVudC5cclxuICAgICAgLy8gU28gd2UgY2FuJ3QgdGVsbCBpZiB0aGUgZXZlbnQgbmFtZSBpcyBjb3JyZWN0IGZvciBzdXJlLCBidXQgd2UgY2FuIGZpbHRlclxyXG4gICAgICAvLyBvdXQga25vd24gYmFkIG9uZXMgbGlrZSBgb25jbGlja2AuIFdlIGNhbid0IHN1Z2dlc3QgYSBzcGVjaWZpYyByZXBsYWNlbWVudCB0aG91Z2guXHJcbiAgICAgIGlmIChJTlZBTElEX0VWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xyXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIGV2ZW50IGhhbmRsZXIgcHJvcGVydHkgYCVzYC4gJyArICdSZWFjdCBldmVudHMgdXNlIHRoZSBjYW1lbENhc2UgbmFtaW5nIGNvbnZlbnRpb24sIGZvciBleGFtcGxlIGBvbkNsaWNrYC4nLCBuYW1lKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IC8vIExldCB0aGUgQVJJQSBhdHRyaWJ1dGUgaG9vayB2YWxpZGF0ZSBBUklBIGF0dHJpYnV0ZXNcclxuXHJcblxyXG4gICAgaWYgKHJBUklBJDEudGVzdChuYW1lKSB8fCByQVJJQUNhbWVsJDEudGVzdChuYW1lKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG93ZXJDYXNlZE5hbWUgPT09ICdpbm5lcmh0bWwnKSB7XHJcbiAgICAgIGVycm9yKCdEaXJlY3RseSBzZXR0aW5nIHByb3BlcnR5IGBpbm5lckhUTUxgIGlzIG5vdCBwZXJtaXR0ZWQuICcgKyAnRm9yIG1vcmUgaW5mb3JtYXRpb24sIGxvb2t1cCBkb2N1bWVudGF0aW9uIG9uIGBkYW5nZXJvdXNseVNldElubmVySFRNTGAuJyk7XHJcblxyXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG93ZXJDYXNlZE5hbWUgPT09ICdhcmlhJykge1xyXG4gICAgICBlcnJvcignVGhlIGBhcmlhYCBhdHRyaWJ1dGUgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSB1c2UgaW4gUmVhY3QuICcgKyAnUGFzcyBpbmRpdmlkdWFsIGBhcmlhLWAgYXR0cmlidXRlcyBpbnN0ZWFkLicpO1xyXG5cclxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvd2VyQ2FzZWROYW1lID09PSAnaXMnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBlcnJvcignUmVjZWl2ZWQgYSBgJXNgIGZvciBhIHN0cmluZyBhdHRyaWJ1dGUgYGlzYC4gSWYgdGhpcyBpcyBleHBlY3RlZCwgY2FzdCAnICsgJ3RoZSB2YWx1ZSB0byBhIHN0cmluZy4nLCB0eXBlb2YgdmFsdWUpO1xyXG5cclxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBOYU4gZm9yIHRoZSBgJXNgIGF0dHJpYnV0ZS4gSWYgdGhpcyBpcyBleHBlY3RlZCwgY2FzdCAnICsgJ3RoZSB2YWx1ZSB0byBhIHN0cmluZy4nLCBuYW1lKTtcclxuXHJcbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwcm9wZXJ0eUluZm8gPSBnZXRQcm9wZXJ0eUluZm8obmFtZSk7XHJcbiAgICB2YXIgaXNSZXNlcnZlZCA9IHByb3BlcnR5SW5mbyAhPT0gbnVsbCAmJiBwcm9wZXJ0eUluZm8udHlwZSA9PT0gUkVTRVJWRUQ7IC8vIEtub3duIGF0dHJpYnV0ZXMgc2hvdWxkIG1hdGNoIHRoZSBjYXNpbmcgc3BlY2lmaWVkIGluIHRoZSBwcm9wZXJ0eSBjb25maWcuXHJcblxyXG4gICAgaWYgKHBvc3NpYmxlU3RhbmRhcmROYW1lcy5oYXNPd25Qcm9wZXJ0eShsb3dlckNhc2VkTmFtZSkpIHtcclxuICAgICAgdmFyIHN0YW5kYXJkTmFtZSA9IHBvc3NpYmxlU3RhbmRhcmROYW1lc1tsb3dlckNhc2VkTmFtZV07XHJcblxyXG4gICAgICBpZiAoc3RhbmRhcmROYW1lICE9PSBuYW1lKSB7XHJcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgRE9NIHByb3BlcnR5IGAlc2AuIERpZCB5b3UgbWVhbiBgJXNgPycsIG5hbWUsIHN0YW5kYXJkTmFtZSk7XHJcblxyXG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWlzUmVzZXJ2ZWQgJiYgbmFtZSAhPT0gbG93ZXJDYXNlZE5hbWUpIHtcclxuICAgICAgLy8gVW5rbm93biBhdHRyaWJ1dGVzIHNob3VsZCBoYXZlIGxvd2VyY2FzZSBjYXNpbmcgc2luY2UgdGhhdCdzIGhvdyB0aGV5XHJcbiAgICAgIC8vIHdpbGwgYmUgY2FzZWQgYW55d2F5IHdpdGggc2VydmVyIHJlbmRlcmluZy5cclxuICAgICAgZXJyb3IoJ1JlYWN0IGRvZXMgbm90IHJlY29nbml6ZSB0aGUgYCVzYCBwcm9wIG9uIGEgRE9NIGVsZW1lbnQuIElmIHlvdSAnICsgJ2ludGVudGlvbmFsbHkgd2FudCBpdCB0byBhcHBlYXIgaW4gdGhlIERPTSBhcyBhIGN1c3RvbSAnICsgJ2F0dHJpYnV0ZSwgc3BlbGwgaXQgYXMgbG93ZXJjYXNlIGAlc2AgaW5zdGVhZC4gJyArICdJZiB5b3UgYWNjaWRlbnRhbGx5IHBhc3NlZCBpdCBmcm9tIGEgcGFyZW50IGNvbXBvbmVudCwgcmVtb3ZlICcgKyAnaXQgZnJvbSB0aGUgRE9NIGVsZW1lbnQuJywgbmFtZSwgbG93ZXJDYXNlZE5hbWUpO1xyXG5cclxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmIHNob3VsZFJlbW92ZUF0dHJpYnV0ZVdpdGhXYXJuaW5nKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGZhbHNlKSkge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBlcnJvcignUmVjZWl2ZWQgYCVzYCBmb3IgYSBub24tYm9vbGVhbiBhdHRyaWJ1dGUgYCVzYC5cXG5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIHdyaXRlIGl0IHRvIHRoZSBET00sIHBhc3MgYSBzdHJpbmcgaW5zdGVhZDogJyArICclcz1cIiVzXCIgb3IgJXM9e3ZhbHVlLnRvU3RyaW5nKCl9LicsIHZhbHVlLCBuYW1lLCBuYW1lLCB2YWx1ZSwgbmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXJyb3IoJ1JlY2VpdmVkIGAlc2AgZm9yIGEgbm9uLWJvb2xlYW4gYXR0cmlidXRlIGAlc2AuXFxuXFxuJyArICdJZiB5b3Ugd2FudCB0byB3cml0ZSBpdCB0byB0aGUgRE9NLCBwYXNzIGEgc3RyaW5nIGluc3RlYWQ6ICcgKyAnJXM9XCIlc1wiIG9yICVzPXt2YWx1ZS50b1N0cmluZygpfS5cXG5cXG4nICsgJ0lmIHlvdSB1c2VkIHRvIGNvbmRpdGlvbmFsbHkgb21pdCBpdCB3aXRoICVzPXtjb25kaXRpb24gJiYgdmFsdWV9LCAnICsgJ3Bhc3MgJXM9e2NvbmRpdGlvbiA/IHZhbHVlIDogdW5kZWZpbmVkfSBpbnN0ZWFkLicsIHZhbHVlLCBuYW1lLCBuYW1lLCB2YWx1ZSwgbmFtZSwgbmFtZSwgbmFtZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSAvLyBOb3cgdGhhdCB3ZSd2ZSB2YWxpZGF0ZWQgY2FzaW5nLCBkbyBub3QgdmFsaWRhdGVcclxuICAgIC8vIGRhdGEgdHlwZXMgZm9yIHJlc2VydmVkIHByb3BzXHJcblxyXG5cclxuICAgIGlmIChpc1Jlc2VydmVkKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSAvLyBXYXJuIHdoZW4gYSBrbm93biBhdHRyaWJ1dGUgaXMgYSBiYWQgdHlwZVxyXG5cclxuXHJcbiAgICBpZiAoc2hvdWxkUmVtb3ZlQXR0cmlidXRlV2l0aFdhcm5pbmcobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgZmFsc2UpKSB7XHJcbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gLy8gV2FybiB3aGVuIHBhc3NpbmcgdGhlIHN0cmluZ3MgJ2ZhbHNlJyBvciAndHJ1ZScgaW50byBhIGJvb2xlYW4gcHJvcFxyXG5cclxuXHJcbiAgICBpZiAoKHZhbHVlID09PSAnZmFsc2UnIHx8IHZhbHVlID09PSAndHJ1ZScpICYmIHByb3BlcnR5SW5mbyAhPT0gbnVsbCAmJiBwcm9wZXJ0eUluZm8udHlwZSA9PT0gQk9PTEVBTikge1xyXG4gICAgICBlcnJvcignUmVjZWl2ZWQgdGhlIHN0cmluZyBgJXNgIGZvciB0aGUgYm9vbGVhbiBhdHRyaWJ1dGUgYCVzYC4gJyArICclcyAnICsgJ0RpZCB5b3UgbWVhbiAlcz17JXN9PycsIHZhbHVlLCBuYW1lLCB2YWx1ZSA9PT0gJ2ZhbHNlJyA/ICdUaGUgYnJvd3NlciB3aWxsIGludGVycHJldCBpdCBhcyBhIHRydXRoeSB2YWx1ZS4nIDogJ0FsdGhvdWdoIHRoaXMgd29ya3MsIGl0IHdpbGwgbm90IHdvcmsgYXMgZXhwZWN0ZWQgaWYgeW91IHBhc3MgdGhlIHN0cmluZyBcImZhbHNlXCIuJywgbmFtZSwgdmFsdWUpO1xyXG5cclxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxufVxyXG5cclxudmFyIHdhcm5Vbmtub3duUHJvcGVydGllcyA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcywgY2FuVXNlRXZlbnRTeXN0ZW0pIHtcclxuICB7XHJcbiAgICB2YXIgdW5rbm93blByb3BzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XHJcbiAgICAgIHZhciBpc1ZhbGlkID0gdmFsaWRhdGVQcm9wZXJ0eSQxKHR5cGUsIGtleSwgcHJvcHNba2V5XSwgY2FuVXNlRXZlbnRTeXN0ZW0pO1xyXG5cclxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgdW5rbm93blByb3BzLnB1c2goa2V5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciB1bmtub3duUHJvcFN0cmluZyA9IHVua25vd25Qcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgcmV0dXJuICdgJyArIHByb3AgKyAnYCc7XHJcbiAgICB9KS5qb2luKCcsICcpO1xyXG5cclxuICAgIGlmICh1bmtub3duUHJvcHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciBwcm9wICVzIG9uIDwlcz4gdGFnLiBFaXRoZXIgcmVtb3ZlIGl0IGZyb20gdGhlIGVsZW1lbnQsICcgKyAnb3IgcGFzcyBhIHN0cmluZyBvciBudW1iZXIgdmFsdWUgdG8ga2VlcCBpdCBpbiB0aGUgRE9NLiAnICsgJ0ZvciBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC1hdHRyaWJ1dGUtYmVoYXZpb3InLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XHJcbiAgICB9IGVsc2UgaWYgKHVua25vd25Qcm9wcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGVycm9yKCdJbnZhbGlkIHZhbHVlcyBmb3IgcHJvcHMgJXMgb24gPCVzPiB0YWcuIEVpdGhlciByZW1vdmUgdGhlbSBmcm9tIHRoZSBlbGVtZW50LCAnICsgJ29yIHBhc3MgYSBzdHJpbmcgb3IgbnVtYmVyIHZhbHVlIHRvIGtlZXAgdGhlbSBpbiB0aGUgRE9NLiAnICsgJ0ZvciBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC1hdHRyaWJ1dGUtYmVoYXZpb3InLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0aWVzJDIodHlwZSwgcHJvcHMsIGNhblVzZUV2ZW50U3lzdGVtKSB7XHJcbiAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50KHR5cGUsIHByb3BzKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgd2FyblVua25vd25Qcm9wZXJ0aWVzKHR5cGUsIHByb3BzLCBjYW5Vc2VFdmVudFN5c3RlbSk7XHJcbn1cclxuXHJcbnZhciB0b0FycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheTsgLy8gVGhpcyBpcyBvbmx5IHVzZWQgaW4gREVWLlxyXG4vLyBFYWNoIGVudHJ5IGlzIGB0aGlzLnN0YWNrYCBmcm9tIGEgY3VycmVudGx5IGV4ZWN1dGluZyByZW5kZXJlciBpbnN0YW5jZS5cclxuLy8gKFRoZXJlIG1heSBiZSBtb3JlIHRoYW4gb25lIGJlY2F1c2UgUmVhY3RET01TZXJ2ZXIgaXMgcmVlbnRyYW50KS5cclxuLy8gRWFjaCBzdGFjayBpcyBhbiBhcnJheSBvZiBmcmFtZXMgd2hpY2ggbWF5IGNvbnRhaW4gbmVzdGVkIHN0YWNrcyBvZiBlbGVtZW50cy5cclxuXHJcbnZhciBjdXJyZW50RGVidWdTdGFja3MgPSBbXTtcclxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xyXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQ0O1xyXG52YXIgcHJldkdldEN1cnJlbnRTdGFja0ltcGwgPSBudWxsO1xyXG5cclxudmFyIGdldEN1cnJlbnRTZXJ2ZXJTdGFja0ltcGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuICcnO1xyXG59O1xyXG5cclxudmFyIGRlc2NyaWJlU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgcmV0dXJuICcnO1xyXG59O1xyXG5cclxudmFyIHZhbGlkYXRlUHJvcGVydGllc0luRGV2ZWxvcG1lbnQgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHt9O1xyXG5cclxudmFyIHB1c2hDdXJyZW50RGVidWdTdGFjayA9IGZ1bmN0aW9uIChzdGFjaykge307XHJcblxyXG52YXIgcHVzaEVsZW1lbnRUb0RlYnVnU3RhY2sgPSBmdW5jdGlvbiAoZWxlbWVudCkge307XHJcblxyXG52YXIgcG9wQ3VycmVudERlYnVnU3RhY2sgPSBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbnZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29udGV4dEFzQ29uc3VtZXIgPSBmYWxzZTtcclxuXHJcbntcclxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDQgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xyXG5cclxuICB2YWxpZGF0ZVByb3BlcnRpZXNJbkRldmVsb3BtZW50ID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7XHJcbiAgICB2YWxpZGF0ZVByb3BlcnRpZXModHlwZSwgcHJvcHMpO1xyXG4gICAgdmFsaWRhdGVQcm9wZXJ0aWVzJDEodHlwZSwgcHJvcHMpO1xyXG4gICAgdmFsaWRhdGVQcm9wZXJ0aWVzJDIodHlwZSwgcHJvcHMsXHJcbiAgICAvKiBjYW5Vc2VFdmVudFN5c3RlbSAqL1xyXG4gICAgZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGRlc2NyaWJlU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xyXG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XHJcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XHJcbiAgICB2YXIgb3duZXJOYW1lID0gbnVsbDtcclxuICAgIHJldHVybiBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKTtcclxuICB9O1xyXG5cclxuICBwdXNoQ3VycmVudERlYnVnU3RhY2sgPSBmdW5jdGlvbiAoc3RhY2spIHtcclxuICAgIGN1cnJlbnREZWJ1Z1N0YWNrcy5wdXNoKHN0YWNrKTtcclxuXHJcbiAgICBpZiAoY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAvLyBXZSBhcmUgZW50ZXJpbmcgYSBzZXJ2ZXIgcmVuZGVyZXIuXHJcbiAgICAgIC8vIFJlbWVtYmVyIHRoZSBwcmV2aW91cyAoZS5nLiBjbGllbnQpIGdsb2JhbCBzdGFjayBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgcHJldkdldEN1cnJlbnRTdGFja0ltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDQuZ2V0Q3VycmVudFN0YWNrO1xyXG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDQuZ2V0Q3VycmVudFN0YWNrID0gZ2V0Q3VycmVudFNlcnZlclN0YWNrSW1wbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwdXNoRWxlbWVudFRvRGVidWdTdGFjayA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAvLyBGb3IgdGhlIGlubmVybW9zdCBleGVjdXRpbmcgUmVhY3RET01TZXJ2ZXIgY2FsbCxcclxuICAgIHZhciBzdGFjayA9IGN1cnJlbnREZWJ1Z1N0YWNrc1tjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoIC0gMV07IC8vIFRha2UgdGhlIGlubmVybW9zdCBleGVjdXRpbmcgZnJhbWUgKGUuZy4gPEZvbz4pLFxyXG5cclxuICAgIHZhciBmcmFtZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdOyAvLyBhbmQgcmVjb3JkIHRoYXQgaXQgaGFzIG9uZSBtb3JlIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIGl0LlxyXG5cclxuICAgIGZyYW1lLmRlYnVnRWxlbWVudFN0YWNrLnB1c2goZWxlbWVudCk7IC8vIFdlIG9ubHkgbmVlZCB0aGlzIGJlY2F1c2Ugd2UgdGFpbC1vcHRpbWl6ZSBzaW5nbGUtZWxlbWVudFxyXG4gICAgLy8gY2hpbGRyZW4gYW5kIGRpcmVjdGx5IGhhbmRsZSB0aGVtIGluIGFuIGlubmVyIGxvb3AgaW5zdGVhZCBvZlxyXG4gICAgLy8gY3JlYXRpbmcgc2VwYXJhdGUgZnJhbWVzIGZvciB0aGVtLlxyXG4gIH07XHJcblxyXG4gIHBvcEN1cnJlbnREZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY3VycmVudERlYnVnU3RhY2tzLnBvcCgpO1xyXG5cclxuICAgIGlmIChjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vIFdlIGFyZSBleGl0aW5nIHRoZSBzZXJ2ZXIgcmVuZGVyZXIuXHJcbiAgICAgIC8vIFJlc3RvcmUgdGhlIHByZXZpb3VzIChlLmcuIGNsaWVudCkgZ2xvYmFsIHN0YWNrIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDQuZ2V0Q3VycmVudFN0YWNrID0gcHJldkdldEN1cnJlbnRTdGFja0ltcGw7XHJcbiAgICAgIHByZXZHZXRDdXJyZW50U3RhY2tJbXBsID0gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnZXRDdXJyZW50U2VydmVyU3RhY2tJbXBsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGN1cnJlbnREZWJ1Z1N0YWNrcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgLy8gTm90aGluZyBpcyBjdXJyZW50bHkgcmVuZGVyaW5nLlxyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9IC8vIFJlYWN0RE9NU2VydmVyIGlzIHJlZW50cmFudCBzbyB0aGVyZSBtYXkgYmUgbXVsdGlwbGUgY2FsbHMgYXQgdGhlIHNhbWUgdGltZS5cclxuICAgIC8vIFRha2UgdGhlIGZyYW1lcyBmcm9tIHRoZSBpbm5lcm1vc3QgY2FsbCB3aGljaCBpcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXkuXHJcblxyXG5cclxuICAgIHZhciBmcmFtZXMgPSBjdXJyZW50RGVidWdTdGFja3NbY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCAtIDFdO1xyXG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEdvIHRocm91Z2ggZXZlcnkgZnJhbWUgaW4gdGhlIHN0YWNrIGZyb20gdGhlIGlubmVybW9zdCBvbmUuXHJcblxyXG4gICAgZm9yICh2YXIgaSA9IGZyYW1lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICB2YXIgZnJhbWUgPSBmcmFtZXNbaV07IC8vIEV2ZXJ5IGZyYW1lIG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBkZWJ1ZyBlbGVtZW50IHN0YWNrIGVudHJ5IGFzc29jaWF0ZWQgd2l0aCBpdC5cclxuICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHNpbmdsZS1jaGlsZCBuZXN0aW5nIGRvZXNuJ3QgY3JlYXRlIG1hdGVyaWFsaXplZCBmcmFtZXMuXHJcbiAgICAgIC8vIEluc3RlYWQgaXQgd291bGQgcHVzaCB0aGVtIHRocm91Z2ggYHB1c2hFbGVtZW50VG9EZWJ1Z1N0YWNrKClgLlxyXG5cclxuICAgICAgdmFyIGRlYnVnRWxlbWVudFN0YWNrID0gZnJhbWUuZGVidWdFbGVtZW50U3RhY2s7XHJcblxyXG4gICAgICBmb3IgKHZhciBpaSA9IGRlYnVnRWxlbWVudFN0YWNrLmxlbmd0aCAtIDE7IGlpID49IDA7IGlpLS0pIHtcclxuICAgICAgICBzdGFjayArPSBkZXNjcmliZVN0YWNrRnJhbWUoZGVidWdFbGVtZW50U3RhY2tbaWldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGFjaztcclxuICB9O1xyXG59XHJcblxyXG52YXIgZGlkV2FybkRlZmF1bHRJbnB1dFZhbHVlID0gZmFsc2U7XHJcbnZhciBkaWRXYXJuRGVmYXVsdENoZWNrZWQgPSBmYWxzZTtcclxudmFyIGRpZFdhcm5EZWZhdWx0U2VsZWN0VmFsdWUgPSBmYWxzZTtcclxudmFyIGRpZFdhcm5EZWZhdWx0VGV4dGFyZWFWYWx1ZSA9IGZhbHNlO1xyXG52YXIgZGlkV2FybkludmFsaWRPcHRpb25DaGlsZHJlbiA9IGZhbHNlO1xyXG52YXIgZGlkV2FybkFib3V0Tm9vcFVwZGF0ZUZvckNvbXBvbmVudCA9IHt9O1xyXG52YXIgZGlkV2FybkFib3V0QmFkQ2xhc3MgPSB7fTtcclxudmFyIGRpZFdhcm5BYm91dE1vZHVsZVBhdHRlcm5Db21wb25lbnQgPSB7fTtcclxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRXaWxsTW91bnQgPSB7fTtcclxudmFyIGRpZFdhcm5BYm91dFVuZGVmaW5lZERlcml2ZWRTdGF0ZSA9IHt9O1xyXG52YXIgZGlkV2FybkFib3V0VW5pbml0aWFsaXplZFN0YXRlID0ge307XHJcbnZhciB2YWx1ZVByb3BOYW1lcyA9IFsndmFsdWUnLCAnZGVmYXVsdFZhbHVlJ107XHJcbnZhciBuZXdsaW5lRWF0aW5nVGFncyA9IHtcclxuICBsaXN0aW5nOiB0cnVlLFxyXG4gIHByZTogdHJ1ZSxcclxuICB0ZXh0YXJlYTogdHJ1ZVxyXG59OyAvLyBXZSBhY2NlcHQgYW55IHRhZyB0byBiZSByZW5kZXJlZCBidXQgc2luY2UgdGhpcyBnZXRzIGluamVjdGVkIGludG8gYXJiaXRyYXJ5XHJcbi8vIEhUTUwsIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHRoYXQgaXQncyBhIHNhZmUgdGFnLlxyXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLyNOVC1OYW1lXHJcblxyXG52YXIgVkFMSURfVEFHX1JFR0VYID0gL15bYS16QS1aXVthLXpBLVo6X1xcLlxcLVxcZF0qJC87IC8vIFNpbXBsaWZpZWQgc3Vic2V0XHJcblxyXG52YXIgdmFsaWRhdGVkVGFnQ2FjaGUgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRGFuZ2Vyb3VzVGFnKHRhZykge1xyXG4gIGlmICghdmFsaWRhdGVkVGFnQ2FjaGUuaGFzT3duUHJvcGVydHkodGFnKSkge1xyXG4gICAgaWYgKCFWQUxJRF9UQUdfUkVHRVgudGVzdCh0YWcpKSB7XHJcbiAgICAgIHtcclxuICAgICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIHRhZzogXCIgKyB0YWcgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlZFRhZ0NhY2hlW3RhZ10gPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxudmFyIHN0eWxlTmFtZUNhY2hlID0ge307XHJcblxyXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IGZ1bmN0aW9uIChzdHlsZU5hbWUpIHtcclxuICBpZiAoc3R5bGVOYW1lQ2FjaGUuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkge1xyXG4gICAgcmV0dXJuIHN0eWxlTmFtZUNhY2hlW3N0eWxlTmFtZV07XHJcbiAgfVxyXG5cclxuICB2YXIgcmVzdWx0ID0gaHlwaGVuYXRlU3R5bGVOYW1lKHN0eWxlTmFtZSk7XHJcbiAgc3R5bGVOYW1lQ2FjaGVbc3R5bGVOYW1lXSA9IHJlc3VsdDtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFya3VwRm9yU3R5bGVzKHN0eWxlcykge1xyXG4gIHZhciBzZXJpYWxpemVkID0gJyc7XHJcbiAgdmFyIGRlbGltaXRlciA9ICcnO1xyXG5cclxuICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XHJcbiAgICBpZiAoIXN0eWxlcy5oYXNPd25Qcm9wZXJ0eShzdHlsZU5hbWUpKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpc0N1c3RvbVByb3BlcnR5ID0gc3R5bGVOYW1lLmluZGV4T2YoJy0tJykgPT09IDA7XHJcbiAgICB2YXIgc3R5bGVWYWx1ZSA9IHN0eWxlc1tzdHlsZU5hbWVdO1xyXG5cclxuICAgIHtcclxuICAgICAgaWYgKCFpc0N1c3RvbVByb3BlcnR5KSB7XHJcbiAgICAgICAgd2FyblZhbGlkU3R5bGUkMShzdHlsZU5hbWUsIHN0eWxlVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0eWxlVmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICBzZXJpYWxpemVkICs9IGRlbGltaXRlciArIChpc0N1c3RvbVByb3BlcnR5ID8gc3R5bGVOYW1lIDogcHJvY2Vzc1N0eWxlTmFtZShzdHlsZU5hbWUpKSArICc6JztcclxuICAgICAgc2VyaWFsaXplZCArPSBkYW5nZXJvdXNTdHlsZVZhbHVlKHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSwgaXNDdXN0b21Qcm9wZXJ0eSk7XHJcbiAgICAgIGRlbGltaXRlciA9ICc7JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzZXJpYWxpemVkIHx8IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XHJcbiAge1xyXG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xyXG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgZ2V0Q29tcG9uZW50TmFtZShfY29uc3RydWN0b3IpIHx8ICdSZWFjdENsYXNzJztcclxuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIGNhbGxlck5hbWU7XHJcblxyXG4gICAgaWYgKGRpZFdhcm5BYm91dE5vb3BVcGRhdGVGb3JDb21wb25lbnRbd2FybmluZ0tleV0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKCclcyguLi4pOiBDYW4gb25seSB1cGRhdGUgYSBtb3VudGluZyBjb21wb25lbnQuICcgKyAnVGhpcyB1c3VhbGx5IG1lYW5zIHlvdSBjYWxsZWQgJXMoKSBvdXRzaWRlIGNvbXBvbmVudFdpbGxNb3VudCgpIG9uIHRoZSBzZXJ2ZXIuICcgKyAnVGhpcyBpcyBhIG5vLW9wLlxcblxcblBsZWFzZSBjaGVjayB0aGUgY29kZSBmb3IgdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcclxuXHJcbiAgICBkaWRXYXJuQWJvdXROb29wVXBkYXRlRm9yQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcclxuICByZXR1cm4gQ29tcG9uZW50LnByb3RvdHlwZSAmJiBDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5vbkNoaWxkcmVuSW5uZXJNYXJrdXAocHJvcHMpIHtcclxuICB2YXIgaW5uZXJIVE1MID0gcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw7XHJcblxyXG4gIGlmIChpbm5lckhUTUwgIT0gbnVsbCkge1xyXG4gICAgaWYgKGlubmVySFRNTC5fX2h0bWwgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gaW5uZXJIVE1MLl9faHRtbDtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGNvbnRlbnQgPSBwcm9wcy5jaGlsZHJlbjtcclxuXHJcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjb250ZW50ID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXR1cm4gZXNjYXBlVGV4dEZvckJyb3dzZXIoY29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmxhdHRlblRvcExldmVsQ2hpbGRyZW4oY2hpbGRyZW4pIHtcclxuICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xyXG4gICAgcmV0dXJuIHRvQXJyYXkoY2hpbGRyZW4pO1xyXG4gIH1cclxuXHJcbiAgdmFyIGVsZW1lbnQgPSBjaGlsZHJlbjtcclxuXHJcbiAgaWYgKGVsZW1lbnQudHlwZSAhPT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xyXG4gICAgcmV0dXJuIFtlbGVtZW50XTtcclxuICB9XHJcblxyXG4gIHZhciBmcmFnbWVudENoaWxkcmVuID0gZWxlbWVudC5wcm9wcy5jaGlsZHJlbjtcclxuXHJcbiAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChmcmFnbWVudENoaWxkcmVuKSkge1xyXG4gICAgcmV0dXJuIHRvQXJyYXkoZnJhZ21lbnRDaGlsZHJlbik7XHJcbiAgfVxyXG5cclxuICB2YXIgZnJhZ21lbnRDaGlsZEVsZW1lbnQgPSBmcmFnbWVudENoaWxkcmVuO1xyXG4gIHJldHVybiBbZnJhZ21lbnRDaGlsZEVsZW1lbnRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmbGF0dGVuT3B0aW9uQ2hpbGRyZW4oY2hpbGRyZW4pIHtcclxuICBpZiAoY2hpbGRyZW4gPT09IHVuZGVmaW5lZCB8fCBjaGlsZHJlbiA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gIH1cclxuXHJcbiAgdmFyIGNvbnRlbnQgPSAnJzsgLy8gRmxhdHRlbiBjaGlsZHJlbiBhbmQgd2FybiBpZiB0aGV5IGFyZW4ndCBzdHJpbmdzIG9yIG51bWJlcnM7XHJcbiAgLy8gaW52YWxpZCB0eXBlcyBhcmUgaWdub3JlZC5cclxuXHJcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICBpZiAoY2hpbGQgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudCArPSBjaGlsZDtcclxuXHJcbiAgICB7XHJcbiAgICAgIGlmICghZGlkV2FybkludmFsaWRPcHRpb25DaGlsZHJlbiAmJiB0eXBlb2YgY2hpbGQgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBjaGlsZCAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICBkaWRXYXJuSW52YWxpZE9wdGlvbkNoaWxkcmVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZXJyb3IoJ09ubHkgc3RyaW5ncyBhbmQgbnVtYmVycyBhcmUgc3VwcG9ydGVkIGFzIDxvcHRpb24+IGNoaWxkcmVuLicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbnZhciBoYXNPd25Qcm9wZXJ0eSQyID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxudmFyIFNUWUxFID0gJ3N0eWxlJztcclxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xyXG4gIGNoaWxkcmVuOiBudWxsLFxyXG4gIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBudWxsLFxyXG4gIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZzogbnVsbCxcclxuICBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc6IG51bGxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wZW5UYWdNYXJrdXAodGFnVmVyYmF0aW0sIHRhZ0xvd2VyY2FzZSwgcHJvcHMsIG5hbWVzcGFjZSwgbWFrZVN0YXRpY01hcmt1cCwgaXNSb290RWxlbWVudCkge1xyXG4gIHZhciByZXQgPSAnPCcgKyB0YWdWZXJiYXRpbTtcclxuXHJcbiAgZm9yICh2YXIgcHJvcEtleSBpbiBwcm9wcykge1xyXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eSQyLmNhbGwocHJvcHMsIHByb3BLZXkpKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wS2V5XTtcclxuXHJcbiAgICBpZiAocHJvcFZhbHVlID09IG51bGwpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BLZXkgPT09IFNUWUxFKSB7XHJcbiAgICAgIHByb3BWYWx1ZSA9IGNyZWF0ZU1hcmt1cEZvclN0eWxlcyhwcm9wVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtYXJrdXAgPSBudWxsO1xyXG5cclxuICAgIGlmIChpc0N1c3RvbUNvbXBvbmVudCh0YWdMb3dlcmNhc2UsIHByb3BzKSkge1xyXG4gICAgICBpZiAoIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XHJcbiAgICAgICAgbWFya3VwID0gY3JlYXRlTWFya3VwRm9yQ3VzdG9tQXR0cmlidXRlKHByb3BLZXksIHByb3BWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hcmt1cCA9IGNyZWF0ZU1hcmt1cEZvclByb3BlcnR5KHByb3BLZXksIHByb3BWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1hcmt1cCkge1xyXG4gICAgICByZXQgKz0gJyAnICsgbWFya3VwO1xyXG4gICAgfVxyXG4gIH0gLy8gRm9yIHN0YXRpYyBwYWdlcywgbm8gbmVlZCB0byBwdXQgUmVhY3QgSUQgYW5kIGNoZWNrc3VtLiBTYXZlcyBsb3RzIG9mXHJcbiAgLy8gYnl0ZXMuXHJcblxyXG5cclxuICBpZiAobWFrZVN0YXRpY01hcmt1cCkge1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIGlmIChpc1Jvb3RFbGVtZW50KSB7XHJcbiAgICByZXQgKz0gJyAnICsgY3JlYXRlTWFya3VwRm9yUm9vdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVSZW5kZXJSZXN1bHQoY2hpbGQsIHR5cGUpIHtcclxuICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAge1xyXG4gICAgICB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoIChnZXRDb21wb25lbnROYW1lKHR5cGUpIHx8ICdDb21wb25lbnQnKSArIFwiKC4uLik6IE5vdGhpbmcgd2FzIHJldHVybmVkIGZyb20gcmVuZGVyLiBUaGlzIHVzdWFsbHkgbWVhbnMgYSByZXR1cm4gc3RhdGVtZW50IGlzIG1pc3NpbmcuIE9yLCB0byByZW5kZXIgbm90aGluZywgcmV0dXJuIG51bGwuXCIgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzb2x2ZShjaGlsZCwgY29udGV4dCwgdGhyZWFkSUQpIHtcclxuICB3aGlsZSAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XHJcbiAgICAvLyBTYWZlIGJlY2F1c2Ugd2UganVzdCBjaGVja2VkIGl0J3MgYW4gZWxlbWVudC5cclxuICAgIHZhciBlbGVtZW50ID0gY2hpbGQ7XHJcbiAgICB2YXIgQ29tcG9uZW50ID0gZWxlbWVudC50eXBlO1xyXG5cclxuICAgIHtcclxuICAgICAgcHVzaEVsZW1lbnRUb0RlYnVnU3RhY2soZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0NoaWxkKGVsZW1lbnQsIENvbXBvbmVudCk7XHJcbiAgfSAvLyBFeHRyYSBjbG9zdXJlIHNvIHF1ZXVlIGFuZCByZXBsYWNlIGNhbiBiZSBjYXB0dXJlZCBwcm9wZXJseVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc0NoaWxkKGVsZW1lbnQsIENvbXBvbmVudCkge1xyXG4gICAgdmFyIGlzQ2xhc3MgPSBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KTtcclxuICAgIHZhciBwdWJsaWNDb250ZXh0ID0gcHJvY2Vzc0NvbnRleHQoQ29tcG9uZW50LCBjb250ZXh0LCB0aHJlYWRJRCwgaXNDbGFzcyk7XHJcbiAgICB2YXIgcXVldWUgPSBbXTtcclxuICAgIHZhciByZXBsYWNlID0gZmFsc2U7XHJcbiAgICB2YXIgdXBkYXRlciA9IHtcclxuICAgICAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKHF1ZXVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSkge1xyXG4gICAgICAgIHJlcGxhY2UgPSB0cnVlO1xyXG4gICAgICAgIHF1ZXVlID0gW2NvbXBsZXRlU3RhdGVdO1xyXG4gICAgICB9LFxyXG4gICAgICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY3VycmVudFBhcnRpYWxTdGF0ZSkge1xyXG4gICAgICAgIGlmIChxdWV1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnRQYXJ0aWFsU3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIGluc3Q7XHJcblxyXG4gICAgaWYgKGlzQ2xhc3MpIHtcclxuICAgICAgaW5zdCA9IG5ldyBDb21wb25lbnQoZWxlbWVudC5wcm9wcywgcHVibGljQ29udGV4dCwgdXBkYXRlcik7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZiAoaW5zdC5zdGF0ZSA9PT0gbnVsbCB8fCBpbnN0LnN0YXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRVbmluaXRpYWxpemVkU3RhdGVbY29tcG9uZW50TmFtZV0pIHtcclxuICAgICAgICAgICAgICBlcnJvcignYCVzYCB1c2VzIGBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNgIGJ1dCBpdHMgaW5pdGlhbCBzdGF0ZSBpcyAnICsgJyVzLiBUaGlzIGlzIG5vdCByZWNvbW1lbmRlZC4gSW5zdGVhZCwgZGVmaW5lIHRoZSBpbml0aWFsIHN0YXRlIGJ5ICcgKyAnYXNzaWduaW5nIGFuIG9iamVjdCB0byBgdGhpcy5zdGF0ZWAgaW4gdGhlIGNvbnN0cnVjdG9yIG9mIGAlc2AuICcgKyAnVGhpcyBlbnN1cmVzIHRoYXQgYGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc2AgYXJndW1lbnRzIGhhdmUgYSBjb25zaXN0ZW50IHNoYXBlLicsIGNvbXBvbmVudE5hbWUsIGluc3Quc3RhdGUgPT09IG51bGwgPyAnbnVsbCcgOiAndW5kZWZpbmVkJywgY29tcG9uZW50TmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgIGRpZFdhcm5BYm91dFVuaW5pdGlhbGl6ZWRTdGF0ZVtjb21wb25lbnROYW1lXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwYXJ0aWFsU3RhdGUgPSBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLmNhbGwobnVsbCwgZWxlbWVudC5wcm9wcywgaW5zdC5zdGF0ZSk7XHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmIChwYXJ0aWFsU3RhdGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2YXIgX2NvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRVbmRlZmluZWREZXJpdmVkU3RhdGVbX2NvbXBvbmVudE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgZXJyb3IoJyVzLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpOiBBIHZhbGlkIHN0YXRlIG9iamVjdCAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZC4gJyArICdZb3UgaGF2ZSByZXR1cm5lZCB1bmRlZmluZWQuJywgX2NvbXBvbmVudE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICBkaWRXYXJuQWJvdXRVbmRlZmluZWREZXJpdmVkU3RhdGVbX2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnRpYWxTdGF0ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBpbnN0LnN0YXRlID0gX2Fzc2lnbih7fSwgaW5zdC5zdGF0ZSwgcGFydGlhbFN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoQ29tcG9uZW50LnByb3RvdHlwZSAmJiB0eXBlb2YgQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgIHZhciBfY29tcG9uZW50TmFtZTIgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xyXG5cclxuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0QmFkQ2xhc3NbX2NvbXBvbmVudE5hbWUyXSkge1xyXG4gICAgICAgICAgICBlcnJvcihcIlRoZSA8JXMgLz4gY29tcG9uZW50IGFwcGVhcnMgdG8gaGF2ZSBhIHJlbmRlciBtZXRob2QsIGJ1dCBkb2Vzbid0IGV4dGVuZCBSZWFjdC5Db21wb25lbnQuIFwiICsgJ1RoaXMgaXMgbGlrZWx5IHRvIGNhdXNlIGVycm9ycy4gQ2hhbmdlICVzIHRvIGV4dGVuZCBSZWFjdC5Db21wb25lbnQgaW5zdGVhZC4nLCBfY29tcG9uZW50TmFtZTIsIF9jb21wb25lbnROYW1lMik7XHJcblxyXG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRCYWRDbGFzc1tfY29tcG9uZW50TmFtZTJdID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjb21wb25lbnRJZGVudGl0eSA9IHt9O1xyXG4gICAgICBwcmVwYXJlVG9Vc2VIb29rcyhjb21wb25lbnRJZGVudGl0eSk7XHJcbiAgICAgIGluc3QgPSBDb21wb25lbnQoZWxlbWVudC5wcm9wcywgcHVibGljQ29udGV4dCwgdXBkYXRlcik7XHJcbiAgICAgIGluc3QgPSBmaW5pc2hIb29rcyhDb21wb25lbnQsIGVsZW1lbnQucHJvcHMsIGluc3QsIHB1YmxpY0NvbnRleHQpO1xyXG5cclxuICAgICAgaWYgKGluc3QgPT0gbnVsbCB8fCBpbnN0LnJlbmRlciA9PSBudWxsKSB7XHJcbiAgICAgICAgY2hpbGQgPSBpbnN0O1xyXG4gICAgICAgIHZhbGlkYXRlUmVuZGVyUmVzdWx0KGNoaWxkLCBDb21wb25lbnQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHZhciBfY29tcG9uZW50TmFtZTMgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xyXG5cclxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1vZHVsZVBhdHRlcm5Db21wb25lbnRbX2NvbXBvbmVudE5hbWUzXSkge1xyXG4gICAgICAgICAgZXJyb3IoJ1RoZSA8JXMgLz4gY29tcG9uZW50IGFwcGVhcnMgdG8gYmUgYSBmdW5jdGlvbiBjb21wb25lbnQgdGhhdCByZXR1cm5zIGEgY2xhc3MgaW5zdGFuY2UuICcgKyAnQ2hhbmdlICVzIHRvIGEgY2xhc3MgdGhhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCBpbnN0ZWFkLiAnICsgXCJJZiB5b3UgY2FuJ3QgdXNlIGEgY2xhc3MgdHJ5IGFzc2lnbmluZyB0aGUgcHJvdG90eXBlIG9uIHRoZSBmdW5jdGlvbiBhcyBhIHdvcmthcm91bmQuIFwiICsgXCJgJXMucHJvdG90eXBlID0gUmVhY3QuQ29tcG9uZW50LnByb3RvdHlwZWAuIERvbid0IHVzZSBhbiBhcnJvdyBmdW5jdGlvbiBzaW5jZSBpdCBcIiArICdjYW5ub3QgYmUgY2FsbGVkIHdpdGggYG5ld2AgYnkgUmVhY3QuJywgX2NvbXBvbmVudE5hbWUzLCBfY29tcG9uZW50TmFtZTMsIF9jb21wb25lbnROYW1lMyk7XHJcblxyXG4gICAgICAgICAgZGlkV2FybkFib3V0TW9kdWxlUGF0dGVybkNvbXBvbmVudFtfY29tcG9uZW50TmFtZTNdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnN0LnByb3BzID0gZWxlbWVudC5wcm9wcztcclxuICAgIGluc3QuY29udGV4dCA9IHB1YmxpY0NvbnRleHQ7XHJcbiAgICBpbnN0LnVwZGF0ZXIgPSB1cGRhdGVyO1xyXG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IGluc3Quc3RhdGU7XHJcblxyXG4gICAgaWYgKGluaXRpYWxTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGluc3Quc3RhdGUgPSBpbml0aWFsU3RhdGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgaW5zdC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBpbnN0LmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBpZiAodHlwZW9mIGluc3QuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKCBpbnN0LmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHZhciBfY29tcG9uZW50TmFtZTQgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkV2lsbE1vdW50W19jb21wb25lbnROYW1lNF0pIHtcclxuICAgICAgICAgICAgICB3YXJuKCAvLyBrZWVwIHRoaXMgd2FybmluZyBpbiBzeW5jIHdpdGggUmVhY3RTdHJpY3RNb2RlV2FybmluZy5qc1xyXG4gICAgICAgICAgICAgICdjb21wb25lbnRXaWxsTW91bnQgaGFzIGJlZW4gcmVuYW1lZCwgYW5kIGlzIG5vdCByZWNvbW1lbmRlZCBmb3IgdXNlLiAnICsgJ1NlZSBodHRwczovL2ZiLm1lL3JlYWN0LXVuc2FmZS1jb21wb25lbnQtbGlmZWN5Y2xlcyBmb3IgZGV0YWlscy5cXG5cXG4nICsgJyogTW92ZSBjb2RlIGZyb20gY29tcG9uZW50V2lsbE1vdW50IHRvIGNvbXBvbmVudERpZE1vdW50IChwcmVmZXJyZWQgaW4gbW9zdCBjYXNlcykgJyArICdvciB0aGUgY29uc3RydWN0b3IuXFxuJyArICdcXG5QbGVhc2UgdXBkYXRlIHRoZSBmb2xsb3dpbmcgY29tcG9uZW50czogJXMnLCBfY29tcG9uZW50TmFtZTQpO1xyXG5cclxuICAgICAgICAgICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkV2lsbE1vdW50W19jb21wb25lbnROYW1lNF0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBJbiBvcmRlciB0byBzdXBwb3J0IHJlYWN0LWxpZmVjeWNsZXMtY29tcGF0IHBvbHlmaWxsZWQgY29tcG9uZW50cyxcclxuICAgICAgICAvLyBVbnNhZmUgbGlmZWN5Y2xlcyBzaG91bGQgbm90IGJlIGludm9rZWQgZm9yIGFueSBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGdEU0ZQLlxyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICBpbnN0LmNvbXBvbmVudFdpbGxNb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBpbnN0LlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBJbiBvcmRlciB0byBzdXBwb3J0IHJlYWN0LWxpZmVjeWNsZXMtY29tcGF0IHBvbHlmaWxsZWQgY29tcG9uZW50cyxcclxuICAgICAgICAvLyBVbnNhZmUgbGlmZWN5Y2xlcyBzaG91bGQgbm90IGJlIGludm9rZWQgZm9yIGFueSBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGdEU0ZQLlxyXG4gICAgICAgIGluc3QuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocXVldWUubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIG9sZFF1ZXVlID0gcXVldWU7XHJcbiAgICAgICAgdmFyIG9sZFJlcGxhY2UgPSByZXBsYWNlO1xyXG4gICAgICAgIHF1ZXVlID0gbnVsbDtcclxuICAgICAgICByZXBsYWNlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChvbGRSZXBsYWNlICYmIG9sZFF1ZXVlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgaW5zdC5zdGF0ZSA9IG9sZFF1ZXVlWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gb2xkUmVwbGFjZSA/IG9sZFF1ZXVlWzBdIDogaW5zdC5zdGF0ZTtcclxuICAgICAgICAgIHZhciBkb250TXV0YXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gb2xkUmVwbGFjZSA/IDEgOiAwOyBpIDwgb2xkUXVldWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpYWwgPSBvbGRRdWV1ZVtpXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfcGFydGlhbFN0YXRlID0gdHlwZW9mIHBhcnRpYWwgPT09ICdmdW5jdGlvbicgPyBwYXJ0aWFsLmNhbGwoaW5zdCwgbmV4dFN0YXRlLCBlbGVtZW50LnByb3BzLCBwdWJsaWNDb250ZXh0KSA6IHBhcnRpYWw7XHJcblxyXG4gICAgICAgICAgICBpZiAoX3BhcnRpYWxTdGF0ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGRvbnRNdXRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGRvbnRNdXRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IF9hc3NpZ24oe30sIG5leHRTdGF0ZSwgX3BhcnRpYWxTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF9hc3NpZ24obmV4dFN0YXRlLCBfcGFydGlhbFN0YXRlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnN0LnN0YXRlID0gbmV4dFN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBxdWV1ZSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGlsZCA9IGluc3QucmVuZGVyKCk7XHJcblxyXG4gICAge1xyXG4gICAgICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCAmJiBpbnN0LnJlbmRlci5faXNNb2NrRnVuY3Rpb24pIHtcclxuICAgICAgICAvLyBUaGlzIGlzIHByb2JhYmx5IGJhZCBwcmFjdGljZS4gQ29uc2lkZXIgd2FybmluZyBoZXJlIGFuZFxyXG4gICAgICAgIC8vIGRlcHJlY2F0aW5nIHRoaXMgY29udmVuaWVuY2UuXHJcbiAgICAgICAgY2hpbGQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVSZW5kZXJSZXN1bHQoY2hpbGQsIENvbXBvbmVudCk7XHJcbiAgICB2YXIgY2hpbGRDb250ZXh0O1xyXG5cclxuICAgIHtcclxuICAgICAgaWYgKHR5cGVvZiBpbnN0LmdldENoaWxkQ29udGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHZhciBfY2hpbGRDb250ZXh0VHlwZXMgPSBDb21wb25lbnQuY2hpbGRDb250ZXh0VHlwZXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgX2NoaWxkQ29udGV4dFR5cGVzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gaW5zdC5nZXRDaGlsZENvbnRleHQoKTtcclxuXHJcbiAgICAgICAgICBmb3IgKHZhciBjb250ZXh0S2V5IGluIGNoaWxkQ29udGV4dCkge1xyXG4gICAgICAgICAgICBpZiAoIShjb250ZXh0S2V5IGluIF9jaGlsZENvbnRleHRUeXBlcykpIHtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggKGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bicpICsgXCIuZ2V0Q2hpbGRDb250ZXh0KCk6IGtleSBcXFwiXCIgKyBjb250ZXh0S2V5ICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkIGluIGNoaWxkQ29udGV4dFR5cGVzLlwiICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZXJyb3IoJyVzLmdldENoaWxkQ29udGV4dCgpOiBjaGlsZENvbnRleHRUeXBlcyBtdXN0IGJlIGRlZmluZWQgaW4gb3JkZXIgdG8gJyArICd1c2UgZ2V0Q2hpbGRDb250ZXh0KCkuJywgZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2hpbGRDb250ZXh0KSB7XHJcbiAgICAgICAgY29udGV4dCA9IF9hc3NpZ24oe30sIGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjaGlsZDogY2hpbGQsXHJcbiAgICBjb250ZXh0OiBjb250ZXh0XHJcbiAgfTtcclxufVxyXG5cclxudmFyIFJlYWN0RE9NU2VydmVyUmVuZGVyZXIgPVxyXG4vKiNfX1BVUkVfXyovXHJcbmZ1bmN0aW9uICgpIHtcclxuICAvLyBUT0RPOiB0eXBlIHRoaXMgbW9yZSBzdHJpY3RseTpcclxuICAvLyBERVYtb25seVxyXG4gIGZ1bmN0aW9uIFJlYWN0RE9NU2VydmVyUmVuZGVyZXIoY2hpbGRyZW4sIG1ha2VTdGF0aWNNYXJrdXApIHtcclxuICAgIHZhciBmbGF0Q2hpbGRyZW4gPSBmbGF0dGVuVG9wTGV2ZWxDaGlsZHJlbihjaGlsZHJlbik7XHJcbiAgICB2YXIgdG9wRnJhbWUgPSB7XHJcbiAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgIC8vIEFzc3VtZSBhbGwgdHJlZXMgc3RhcnQgaW4gdGhlIEhUTUwgbmFtZXNwYWNlIChub3QgdG90YWxseSB0cnVlLCBidXRcclxuICAgICAgLy8gdGhpcyBpcyB3aGF0IHdlIGRpZCBoaXN0b3JpY2FsbHkpXHJcbiAgICAgIGRvbU5hbWVzcGFjZTogTmFtZXNwYWNlcy5odG1sLFxyXG4gICAgICBjaGlsZHJlbjogZmxhdENoaWxkcmVuLFxyXG4gICAgICBjaGlsZEluZGV4OiAwLFxyXG4gICAgICBjb250ZXh0OiBlbXB0eU9iamVjdCxcclxuICAgICAgZm9vdGVyOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICB7XHJcbiAgICAgIHRvcEZyYW1lLmRlYnVnRWxlbWVudFN0YWNrID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aHJlYWRJRCA9IGFsbG9jVGhyZWFkSUQoKTtcclxuICAgIHRoaXMuc3RhY2sgPSBbdG9wRnJhbWVdO1xyXG4gICAgdGhpcy5leGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY3VycmVudFNlbGVjdFZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5tYWtlU3RhdGljTWFya3VwID0gbWFrZVN0YXRpY01hcmt1cDtcclxuICAgIHRoaXMuc3VzcGVuc2VEZXB0aCA9IDA7IC8vIENvbnRleHQgKG5ldyBBUEkpXHJcblxyXG4gICAgdGhpcy5jb250ZXh0SW5kZXggPSAtMTtcclxuICAgIHRoaXMuY29udGV4dFN0YWNrID0gW107XHJcbiAgICB0aGlzLmNvbnRleHRWYWx1ZVN0YWNrID0gW107XHJcblxyXG4gICAge1xyXG4gICAgICB0aGlzLmNvbnRleHRQcm92aWRlclN0YWNrID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgX3Byb3RvID0gUmVhY3RET01TZXJ2ZXJSZW5kZXJlci5wcm90b3R5cGU7XHJcblxyXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgIGlmICghdGhpcy5leGhhdXN0ZWQpIHtcclxuICAgICAgdGhpcy5leGhhdXN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNsZWFyUHJvdmlkZXJzKCk7XHJcbiAgICAgIGZyZWVUaHJlYWRJRCh0aGlzLnRocmVhZElEKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogTm90ZTogV2UgdXNlIGp1c3QgdHdvIHN0YWNrcyByZWdhcmRsZXNzIG9mIGhvdyBtYW55IGNvbnRleHQgcHJvdmlkZXJzIHlvdSBoYXZlLlxyXG4gICAqIFByb3ZpZGVycyBhcmUgYWx3YXlzIHBvcHBlZCBpbiB0aGUgcmV2ZXJzZSBvcmRlciB0byBob3cgdGhleSB3ZXJlIHB1c2hlZFxyXG4gICAqIHNvIHdlIGFsd2F5cyBrbm93IG9uIHRoZSB3YXkgZG93biB3aGljaCBwcm92aWRlciB5b3UnbGwgZW5jb3VudGVyIG5leHQgb24gdGhlIHdheSB1cC5cclxuICAgKiBPbiB0aGUgd2F5IGRvd24sIHdlIHB1c2ggdGhlIGN1cnJlbnQgcHJvdmlkZXIsIGFuZCBpdHMgY29udGV4dCB2YWx1ZSAqYmVmb3JlKlxyXG4gICAqIHdlIG11dGF0ZWQgaXQsIG9udG8gdGhlIHN0YWNrcy4gVGhlcmVmb3JlLCBvbiB0aGUgd2F5IHVwLCB3ZSBhbHdheXMga25vdyB3aGljaFxyXG4gICAqIHByb3ZpZGVyIG5lZWRzIHRvIGJlIFwicmVzdG9yZWRcIiB0byB3aGljaCB2YWx1ZS5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8xMjk4NSNpc3N1ZWNvbW1lbnQtMzk2MzAxMjQ4XHJcbiAgICovXHJcbiAgO1xyXG5cclxuICBfcHJvdG8ucHVzaFByb3ZpZGVyID0gZnVuY3Rpb24gcHVzaFByb3ZpZGVyKHByb3ZpZGVyKSB7XHJcbiAgICB2YXIgaW5kZXggPSArK3RoaXMuY29udGV4dEluZGV4O1xyXG4gICAgdmFyIGNvbnRleHQgPSBwcm92aWRlci50eXBlLl9jb250ZXh0O1xyXG4gICAgdmFyIHRocmVhZElEID0gdGhpcy50aHJlYWRJRDtcclxuICAgIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCk7XHJcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IGNvbnRleHRbdGhyZWFkSURdOyAvLyBSZW1lbWJlciB3aGljaCB2YWx1ZSB0byByZXN0b3JlIHRoaXMgY29udGV4dCB0byBvbiBvdXIgd2F5IHVwLlxyXG5cclxuICAgIHRoaXMuY29udGV4dFN0YWNrW2luZGV4XSA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLmNvbnRleHRWYWx1ZVN0YWNrW2luZGV4XSA9IHByZXZpb3VzVmFsdWU7XHJcblxyXG4gICAge1xyXG4gICAgICAvLyBPbmx5IHVzZWQgZm9yIHB1c2gvcG9wIG1pc21hdGNoIHdhcm5pbmdzLlxyXG4gICAgICB0aGlzLmNvbnRleHRQcm92aWRlclN0YWNrW2luZGV4XSA9IHByb3ZpZGVyO1xyXG4gICAgfSAvLyBNdXRhdGUgdGhlIGN1cnJlbnQgdmFsdWUuXHJcblxyXG5cclxuICAgIGNvbnRleHRbdGhyZWFkSURdID0gcHJvdmlkZXIucHJvcHMudmFsdWU7XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLnBvcFByb3ZpZGVyID0gZnVuY3Rpb24gcG9wUHJvdmlkZXIocHJvdmlkZXIpIHtcclxuICAgIHZhciBpbmRleCA9IHRoaXMuY29udGV4dEluZGV4O1xyXG5cclxuICAgIHtcclxuICAgICAgaWYgKGluZGV4IDwgMCB8fCBwcm92aWRlciAhPT0gdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFja1tpbmRleF0pIHtcclxuICAgICAgICBlcnJvcignVW5leHBlY3RlZCBwb3AuJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dFN0YWNrW2luZGV4XTtcclxuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF07IC8vIFwiSGlkZVwiIHRoZXNlIG51bGwgYXNzaWdubWVudHMgZnJvbSBGbG93IGJ5IHVzaW5nIGBhbnlgXHJcbiAgICAvLyBiZWNhdXNlIGNvbmNlcHR1YWxseSB0aGV5IGFyZSBkZWxldGlvbnMtLWFzIGxvbmcgYXMgd2VcclxuICAgIC8vIHByb21pc2UgdG8gbmV2ZXIgYWNjZXNzIHZhbHVlcyBiZXlvbmQgYHRoaXMuY29udGV4dEluZGV4YC5cclxuXHJcbiAgICB0aGlzLmNvbnRleHRTdGFja1tpbmRleF0gPSBudWxsO1xyXG4gICAgdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF0gPSBudWxsO1xyXG5cclxuICAgIHtcclxuICAgICAgdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFja1tpbmRleF0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGV4dEluZGV4LS07IC8vIFJlc3RvcmUgdG8gdGhlIHByZXZpb3VzIHZhbHVlIHdlIHN0b3JlZCBhcyB3ZSB3ZXJlIHdhbGtpbmcgZG93bi5cclxuICAgIC8vIFdlJ3ZlIGFscmVhZHkgdmVyaWZpZWQgdGhhdCB0aGlzIGNvbnRleHQgaGFzIGJlZW4gZXhwYW5kZWQgdG8gYWNjb21tb2RhdGVcclxuICAgIC8vIHRoaXMgdGhyZWFkIGlkLCBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGl0IGFnYWluLlxyXG5cclxuICAgIGNvbnRleHRbdGhpcy50aHJlYWRJRF0gPSBwcmV2aW91c1ZhbHVlO1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5jbGVhclByb3ZpZGVycyA9IGZ1bmN0aW9uIGNsZWFyUHJvdmlkZXJzKCkge1xyXG4gICAgLy8gUmVzdG9yZSBhbnkgcmVtYWluaW5nIHByb3ZpZGVycyBvbiB0aGUgc3RhY2sgdG8gcHJldmlvdXMgdmFsdWVzXHJcbiAgICBmb3IgKHZhciBpbmRleCA9IHRoaXMuY29udGV4dEluZGV4OyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XHJcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0U3RhY2tbaW5kZXhdO1xyXG4gICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHRoaXMuY29udGV4dFZhbHVlU3RhY2tbaW5kZXhdO1xyXG4gICAgICBjb250ZXh0W3RoaXMudGhyZWFkSURdID0gcHJldmlvdXNWYWx1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfcHJvdG8ucmVhZCA9IGZ1bmN0aW9uIHJlYWQoYnl0ZXMpIHtcclxuICAgIGlmICh0aGlzLmV4aGF1c3RlZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHJldlRocmVhZElEID0gY3VycmVudFRocmVhZElEO1xyXG4gICAgc2V0Q3VycmVudFRocmVhZElEKHRoaXMudGhyZWFkSUQpO1xyXG4gICAgdmFyIHByZXZEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xyXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gRGlzcGF0Y2hlcjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBNYXJrdXAgZ2VuZXJhdGVkIHdpdGhpbiA8U3VzcGVuc2U+IGVuZHMgdXAgYnVmZmVyZWQgdW50aWwgd2Uga25vd1xyXG4gICAgICAvLyBub3RoaW5nIGluIHRoYXQgYm91bmRhcnkgc3VzcGVuZGVkXHJcbiAgICAgIHZhciBvdXQgPSBbJyddO1xyXG4gICAgICB2YXIgc3VzcGVuZGVkID0gZmFsc2U7XHJcblxyXG4gICAgICB3aGlsZSAob3V0WzBdLmxlbmd0aCA8IGJ5dGVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgICAgICBmcmVlVGhyZWFkSUQodGhpcy50aHJlYWRJRCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmcmFtZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgaWYgKHN1c3BlbmRlZCB8fCBmcmFtZS5jaGlsZEluZGV4ID49IGZyYW1lLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgdmFyIGZvb3RlciA9IGZyYW1lLmZvb3RlcjtcclxuXHJcbiAgICAgICAgICBpZiAoZm9vdGVyICE9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xyXG5cclxuICAgICAgICAgIGlmIChmcmFtZS50eXBlID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGZyYW1lLnR5cGUgIT0gbnVsbCAmJiBmcmFtZS50eXBlLnR5cGUgIT0gbnVsbCAmJiBmcmFtZS50eXBlLnR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUpIHtcclxuICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gZnJhbWUudHlwZTtcclxuICAgICAgICAgICAgdGhpcy5wb3BQcm92aWRlcihwcm92aWRlcik7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGZyYW1lLnR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdXNwZW5zZURlcHRoLS07XHJcbiAgICAgICAgICAgIHZhciBidWZmZXJlZCA9IG91dC5wb3AoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdXNwZW5kZWQpIHtcclxuICAgICAgICAgICAgICBzdXNwZW5kZWQgPSBmYWxzZTsgLy8gSWYgcmVuZGVyaW5nIHdhcyBzdXNwZW5kZWQgYXQgdGhpcyBib3VuZGFyeSwgcmVuZGVyIHRoZSBmYWxsYmFja0ZyYW1lXHJcblxyXG4gICAgICAgICAgICAgIHZhciBmYWxsYmFja0ZyYW1lID0gZnJhbWUuZmFsbGJhY2tGcmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKCFmYWxsYmFja0ZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHRydWUgPyBcIlJlYWN0RE9NU2VydmVyIGRpZCBub3QgZmluZCBhbiBpbnRlcm5hbCBmYWxsYmFjayBmcmFtZSBmb3IgU3VzcGVuc2UuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLlwiIDogZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzMDMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChmYWxsYmFja0ZyYW1lKTtcclxuICAgICAgICAgICAgICBvdXRbdGhpcy5zdXNwZW5zZURlcHRoXSArPSAnPCEtLSQhLS0+JzsgLy8gU2tpcCBmbHVzaGluZyBvdXRwdXQgc2luY2Ugd2UncmUgc3dpdGNoaW5nIHRvIHRoZSBmYWxsYmFja1xyXG5cclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvdXRbdGhpcy5zdXNwZW5zZURlcHRoXSArPSBidWZmZXJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSAvLyBGbHVzaCBvdXRwdXRcclxuXHJcblxyXG4gICAgICAgICAgb3V0W3RoaXMuc3VzcGVuc2VEZXB0aF0gKz0gZm9vdGVyO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2hpbGQgPSBmcmFtZS5jaGlsZHJlbltmcmFtZS5jaGlsZEluZGV4KytdO1xyXG4gICAgICAgIHZhciBvdXRCdWZmZXIgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHRydWUpIHtcclxuICAgICAgICAgIHB1c2hDdXJyZW50RGVidWdTdGFjayh0aGlzLnN0YWNrKTsgLy8gV2UncmUgc3RhcnRpbmcgd29yayBvbiB0aGlzIGZyYW1lLCBzbyByZXNldCBpdHMgaW5uZXIgc3RhY2suXHJcblxyXG4gICAgICAgICAgZnJhbWUuZGVidWdFbGVtZW50U3RhY2subGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBvdXRCdWZmZXIgKz0gdGhpcy5yZW5kZXIoY2hpbGQsIGZyYW1lLmNvbnRleHQsIGZyYW1lLmRvbU5hbWVzcGFjZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBpZiAoZXJyICE9IG51bGwgJiYgdHlwZW9mIGVyci50aGVuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmIChlbmFibGVTdXNwZW5zZVNlcnZlclJlbmRlcmVyKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCEodGhpcy5zdXNwZW5zZURlcHRoID4gMCkpIHtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IodHJ1ZSA/IFwiQSBSZWFjdCBjb21wb25lbnQgc3VzcGVuZGVkIHdoaWxlIHJlbmRlcmluZywgYnV0IG5vIGZhbGxiYWNrIFVJIHdhcyBzcGVjaWZpZWQuXFxuXFxuQWRkIGEgPFN1c3BlbnNlIGZhbGxiYWNrPS4uLj4gY29tcG9uZW50IGhpZ2hlciBpbiB0aGUgdHJlZSB0byBwcm92aWRlIGEgbG9hZGluZyBpbmRpY2F0b3Igb3IgcGxhY2Vob2xkZXIgdG8gZGlzcGxheS5cIiA6IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMzQyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBzdXNwZW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmICghZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IodHJ1ZSA/IFwiUmVhY3RET01TZXJ2ZXIgZG9lcyBub3QgeWV0IHN1cHBvcnQgU3VzcGVuc2UuXCIgOiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDI5NCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICBpZiAodHJ1ZSkge1xyXG4gICAgICAgICAgICBwb3BDdXJyZW50RGVidWdTdGFjaygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG91dC5sZW5ndGggPD0gdGhpcy5zdXNwZW5zZURlcHRoKSB7XHJcbiAgICAgICAgICBvdXQucHVzaCgnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvdXRbdGhpcy5zdXNwZW5zZURlcHRoXSArPSBvdXRCdWZmZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBvdXRbMF07XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2RGlzcGF0Y2hlcjtcclxuICAgICAgc2V0Q3VycmVudFRocmVhZElEKHByZXZUaHJlYWRJRCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjaGlsZCwgY29udGV4dCwgcGFyZW50TmFtZXNwYWNlKSB7XHJcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhciB0ZXh0ID0gJycgKyBjaGlsZDtcclxuXHJcbiAgICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMubWFrZVN0YXRpY01hcmt1cCkge1xyXG4gICAgICAgIHJldHVybiBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih0ZXh0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSkge1xyXG4gICAgICAgIHJldHVybiAnPCEtLSAtLT4nICsgZXNjYXBlVGV4dEZvckJyb3dzZXIodGV4dCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSA9IHRydWU7XHJcbiAgICAgIHJldHVybiBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih0ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBuZXh0Q2hpbGQ7XHJcblxyXG4gICAgICB2YXIgX3Jlc29sdmUgPSByZXNvbHZlKGNoaWxkLCBjb250ZXh0LCB0aGlzLnRocmVhZElEKTtcclxuXHJcbiAgICAgIG5leHRDaGlsZCA9IF9yZXNvbHZlLmNoaWxkO1xyXG4gICAgICBjb250ZXh0ID0gX3Jlc29sdmUuY29udGV4dDtcclxuXHJcbiAgICAgIGlmIChuZXh0Q2hpbGQgPT09IG51bGwgfHwgbmV4dENoaWxkID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSBlbHNlIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQobmV4dENoaWxkKSkge1xyXG4gICAgICAgIGlmIChuZXh0Q2hpbGQgIT0gbnVsbCAmJiBuZXh0Q2hpbGQuJCR0eXBlb2YgIT0gbnVsbCkge1xyXG4gICAgICAgICAgLy8gQ2F0Y2ggdW5leHBlY3RlZCBzcGVjaWFsIHR5cGVzIGVhcmx5LlxyXG4gICAgICAgICAgdmFyICQkdHlwZW9mID0gbmV4dENoaWxkLiQkdHlwZW9mO1xyXG5cclxuICAgICAgICAgIGlmICghKCQkdHlwZW9mICE9PSBSRUFDVF9QT1JUQUxfVFlQRSkpIHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIlBvcnRhbHMgYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGJ5IHRoZSBzZXJ2ZXIgcmVuZGVyZXIuIFJlbmRlciB0aGVtIGNvbmRpdGlvbmFsbHkgc28gdGhhdCB0aGV5IG9ubHkgYXBwZWFyIG9uIHRoZSBjbGllbnQgcmVuZGVyLlwiICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gLy8gQ2F0Y2gtYWxsIHRvIHByZXZlbnQgYW4gaW5maW5pdGUgbG9vcCBpZiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KCkgc3VwcG9ydHMgc29tZSBuZXcgdHlwZS5cclxuXHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiVW5rbm93biBlbGVtZW50LWxpa2Ugb2JqZWN0IHR5cGU6IFwiICsgJCR0eXBlb2YudG9TdHJpbmcoKSArIFwiLiBUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuXCIgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5leHRDaGlsZHJlbiA9IHRvQXJyYXkobmV4dENoaWxkKTtcclxuICAgICAgICB2YXIgZnJhbWUgPSB7XHJcbiAgICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogbmV4dENoaWxkcmVuLFxyXG4gICAgICAgICAgY2hpbGRJbmRleDogMCxcclxuICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXHJcbiAgICAgICAgICBmb290ZXI6ICcnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZnJhbWUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChmcmFtZSk7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9IC8vIFNhZmUgYmVjYXVzZSB3ZSBqdXN0IGNoZWNrZWQgaXQncyBhbiBlbGVtZW50LlxyXG5cclxuXHJcbiAgICAgIHZhciBuZXh0RWxlbWVudCA9IG5leHRDaGlsZDtcclxuICAgICAgdmFyIGVsZW1lbnRUeXBlID0gbmV4dEVsZW1lbnQudHlwZTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRE9NKG5leHRFbGVtZW50LCBjb250ZXh0LCBwYXJlbnROYW1lc3BhY2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzd2l0Y2ggKGVsZW1lbnRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxyXG4gICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XHJcbiAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxyXG4gICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxyXG4gICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW4gPSB0b0FycmF5KG5leHRDaGlsZC5wcm9wcy5jaGlsZHJlbik7XHJcblxyXG4gICAgICAgICAgICB2YXIgX2ZyYW1lID0ge1xyXG4gICAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW4sXHJcbiAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcclxuICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxyXG4gICAgICAgICAgICAgIGZvb3RlcjogJydcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBfZnJhbWUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCJSZWFjdERPTVNlcnZlciBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBTdXNwZW5zZS5cIiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnRUeXBlID09PSAnb2JqZWN0JyAmJiBlbGVtZW50VHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudFR5cGUuJCR0eXBlb2YpIHtcclxuICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gbmV4dENoaWxkO1xyXG5cclxuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjQ7XHJcblxyXG4gICAgICAgICAgICAgIHZhciBjb21wb25lbnRJZGVudGl0eSA9IHt9O1xyXG4gICAgICAgICAgICAgIHByZXBhcmVUb1VzZUhvb2tzKGNvbXBvbmVudElkZW50aXR5KTtcclxuICAgICAgICAgICAgICBfbmV4dENoaWxkcmVuNCA9IGVsZW1lbnRUeXBlLnJlbmRlcihlbGVtZW50LnByb3BzLCBlbGVtZW50LnJlZik7XHJcbiAgICAgICAgICAgICAgX25leHRDaGlsZHJlbjQgPSBmaW5pc2hIb29rcyhlbGVtZW50VHlwZS5yZW5kZXIsIGVsZW1lbnQucHJvcHMsIF9uZXh0Q2hpbGRyZW40LCBlbGVtZW50LnJlZik7XHJcbiAgICAgICAgICAgICAgX25leHRDaGlsZHJlbjQgPSB0b0FycmF5KF9uZXh0Q2hpbGRyZW40KTtcclxuICAgICAgICAgICAgICB2YXIgX2ZyYW1lNCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuNCxcclxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyOiAnJ1xyXG4gICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9mcmFtZTQuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWU0KTtcclxuICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHZhciBfZWxlbWVudCA9IG5leHRDaGlsZDtcclxuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjUgPSBbUmVhY3QuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZS50eXBlLCBfYXNzaWduKHtcclxuICAgICAgICAgICAgICAgIHJlZjogX2VsZW1lbnQucmVmXHJcbiAgICAgICAgICAgICAgfSwgX2VsZW1lbnQucHJvcHMpKV07XHJcbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTUgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcclxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcclxuICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfZnJhbWU1LmRlYnVnRWxlbWVudFN0YWNrID0gW107XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lNSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV4dENoaWxkO1xyXG4gICAgICAgICAgICAgIHZhciBuZXh0UHJvcHMgPSBwcm92aWRlci5wcm9wcztcclxuXHJcbiAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW42ID0gdG9BcnJheShuZXh0UHJvcHMuY2hpbGRyZW4pO1xyXG5cclxuICAgICAgICAgICAgICB2YXIgX2ZyYW1lNiA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjYsXHJcbiAgICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcclxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcclxuICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfZnJhbWU2LmRlYnVnRWxlbWVudFN0YWNrID0gW107XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB0aGlzLnB1c2hQcm92aWRlcihwcm92aWRlcik7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTYpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFyIHJlYWN0Q29udGV4dCA9IG5leHRDaGlsZC50eXBlOyAvLyBUaGUgbG9naWMgYmVsb3cgZm9yIENvbnRleHQgZGlmZmVycyBkZXBlbmRpbmcgb24gUFJPRCBvciBERVYgbW9kZS4gSW5cclxuICAgICAgICAgICAgICAvLyBERVYgbW9kZSwgd2UgY3JlYXRlIGEgc2VwYXJhdGUgb2JqZWN0IGZvciBDb250ZXh0LkNvbnN1bWVyIHRoYXQgYWN0c1xyXG4gICAgICAgICAgICAgIC8vIGxpa2UgYSBwcm94eSB0byBDb250ZXh0LiBUaGlzIHByb3h5IG9iamVjdCBhZGRzIHVubmVjZXNzYXJ5IGNvZGUgaW4gUFJPRFxyXG4gICAgICAgICAgICAgIC8vIHNvIHdlIHVzZSB0aGUgb2xkIGJlaGF2aW91ciAoQ29udGV4dC5Db25zdW1lciByZWZlcmVuY2VzIENvbnRleHQpIHRvXHJcbiAgICAgICAgICAgICAgLy8gcmVkdWNlIHNpemUgYW5kIG92ZXJoZWFkLiBUaGUgc2VwYXJhdGUgb2JqZWN0IHJlZmVyZW5jZXMgY29udGV4dCB2aWFcclxuICAgICAgICAgICAgICAvLyBhIHByb3BlcnR5IGNhbGxlZCBcIl9jb250ZXh0XCIsIHdoaWNoIGFsc28gZ2l2ZXMgdXMgdGhlIGFiaWxpdHkgdG8gY2hlY2tcclxuICAgICAgICAgICAgICAvLyBpbiBERVYgbW9kZSBpZiB0aGlzIHByb3BlcnR5IGV4aXN0cyBvciBub3QgYW5kIHdhcm4gaWYgaXQgZG9lcyBub3QuXHJcblxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWFjdENvbnRleHQuX2NvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBUaGlzIG1heSBiZSBiZWNhdXNlIGl0J3MgYSBDb250ZXh0IChyYXRoZXIgdGhhbiBhIENvbnN1bWVyKS5cclxuICAgICAgICAgICAgICAgICAgLy8gT3IgaXQgbWF5IGJlIGJlY2F1c2UgaXQncyBvbGRlciBSZWFjdCB3aGVyZSB0aGV5J3JlIHRoZSBzYW1lIHRoaW5nLlxyXG4gICAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gd2FybiBpZiB3ZSdyZSBzdXJlIGl0J3MgYSBuZXcgUmVhY3QuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZWFjdENvbnRleHQgIT09IHJlYWN0Q29udGV4dC5Db25zdW1lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnRleHRBc0NvbnN1bWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29udGV4dEFzQ29uc3VtZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQ+IGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZWFjdENvbnRleHQgPSByZWFjdENvbnRleHQuX2NvbnRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB2YXIgX25leHRQcm9wcyA9IG5leHRDaGlsZC5wcm9wcztcclxuICAgICAgICAgICAgICB2YXIgdGhyZWFkSUQgPSB0aGlzLnRocmVhZElEO1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhyZWFjdENvbnRleHQsIHRocmVhZElEKTtcclxuICAgICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gcmVhY3RDb250ZXh0W3RocmVhZElEXTtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW43ID0gdG9BcnJheShfbmV4dFByb3BzLmNoaWxkcmVuKG5leHRWYWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICB2YXIgX2ZyYW1lNyA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG5leHRDaGlsZCxcclxuICAgICAgICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW43LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXHJcbiAgICAgICAgICAgICAgICBmb290ZXI6ICcnXHJcbiAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2ZyYW1lNy5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTcpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lLW5vLWZhbGx0aHJvdWdoXHJcblxyXG4gICAgICAgICAgY2FzZSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFOlxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3RET01TZXJ2ZXIgZG9lcyBub3QgeWV0IHN1cHBvcnQgdGhlIGZ1bmRhbWVudGFsIEFQSS5cIiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lLW5vLWZhbGx0aHJvdWdoXHJcblxyXG4gICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2YXIgX2VsZW1lbnQyID0gbmV4dENoaWxkO1xyXG4gICAgICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gbmV4dENoaWxkLnR5cGU7IC8vIEF0dGVtcHQgdG8gaW5pdGlhbGl6ZSBsYXp5IGNvbXBvbmVudCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlXHJcbiAgICAgICAgICAgICAgLy8gc3VzcGVuc2Ugc2VydmVyLXNpZGUgcmVuZGVyZXIgaXMgZW5hYmxlZCBzbyBzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgICAgICAgLy8gcmVzb2x2ZWQgY29uc3RydWN0b3JzIGFyZSBzdXBwb3J0ZWQuXHJcblxyXG4gICAgICAgICAgICAgIGluaXRpYWxpemVMYXp5Q29tcG9uZW50VHlwZShsYXp5Q29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgc3dpdGNoIChsYXp5Q29tcG9uZW50Ll9zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgUmVzb2x2ZWQ6XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjkgPSBbUmVhY3QuY3JlYXRlRWxlbWVudChsYXp5Q29tcG9uZW50Ll9yZXN1bHQsIF9hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBfZWxlbWVudDIucmVmXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgX2VsZW1lbnQyLnByb3BzKSldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfZnJhbWU5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW45LFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb290ZXI6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgX2ZyYW1lOS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgUmVqZWN0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgIHRocm93IGxhenlDb21wb25lbnQuX3Jlc3VsdDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFBlbmRpbmc6XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3RET01TZXJ2ZXIgZG9lcyBub3QgeWV0IHN1cHBvcnQgbGF6eS1sb2FkZWQgY29tcG9uZW50cy5cIiApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZS1uby1mYWxsdGhyb3VnaFxyXG5cclxuICAgICAgICAgIGNhc2UgUkVBQ1RfU0NPUEVfVFlQRTpcclxuICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0RE9NU2VydmVyIGRvZXMgbm90IHlldCBzdXBwb3J0IHNjb3BlIGNvbXBvbmVudHMuXCIgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBpbmZvID0gJyc7XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgdmFyIG93bmVyID0gbmV4dEVsZW1lbnQuX293bmVyO1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdvYmplY3QnICYmIGVsZW1lbnRUeXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKGVsZW1lbnRUeXBlKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIFwiICsgJ25hbWVkIGltcG9ydHMuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvd25lck5hbWUgPSBvd25lciA/IGdldENvbXBvbmVudE5hbWUob3duZXIpIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKG93bmVyTmFtZSkge1xyXG4gICAgICAgICAgaW5mbyArPSAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBvd25lck5hbWUgKyAnYC4nO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKCBcIkVsZW1lbnQgdHlwZSBpcyBpbnZhbGlkOiBleHBlY3RlZCBhIHN0cmluZyAoZm9yIGJ1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgY29tcG9uZW50cykgYnV0IGdvdDogXCIgKyAoZWxlbWVudFR5cGUgPT0gbnVsbCA/IGVsZW1lbnRUeXBlIDogdHlwZW9mIGVsZW1lbnRUeXBlKSArIFwiLlwiICsgaW5mbyApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9wcm90by5yZW5kZXJET00gPSBmdW5jdGlvbiByZW5kZXJET00oZWxlbWVudCwgY29udGV4dCwgcGFyZW50TmFtZXNwYWNlKSB7XHJcbiAgICB2YXIgdGFnID0gZWxlbWVudC50eXBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YXIgbmFtZXNwYWNlID0gcGFyZW50TmFtZXNwYWNlO1xyXG5cclxuICAgIGlmIChwYXJlbnROYW1lc3BhY2UgPT09IE5hbWVzcGFjZXMuaHRtbCkge1xyXG4gICAgICBuYW1lc3BhY2UgPSBnZXRJbnRyaW5zaWNOYW1lc3BhY2UodGFnKTtcclxuICAgIH1cclxuXHJcbiAgICB7XHJcbiAgICAgIGlmIChuYW1lc3BhY2UgPT09IE5hbWVzcGFjZXMuaHRtbCkge1xyXG4gICAgICAgIC8vIFNob3VsZCB0aGlzIGNoZWNrIGJlIGdhdGVkIGJ5IHBhcmVudCBuYW1lc3BhY2U/IE5vdCBzdXJlIHdlIHdhbnQgdG9cclxuICAgICAgICAvLyBhbGxvdyA8U1ZHPiBvciA8bUFUSD4uXHJcbiAgICAgICAgaWYgKHRhZyAhPT0gZWxlbWVudC50eXBlKSB7XHJcbiAgICAgICAgICBlcnJvcignPCVzIC8+IGlzIHVzaW5nIGluY29ycmVjdCBjYXNpbmcuICcgKyAnVXNlIFBhc2NhbENhc2UgZm9yIFJlYWN0IGNvbXBvbmVudHMsICcgKyAnb3IgbG93ZXJjYXNlIGZvciBIVE1MIGVsZW1lbnRzLicsIGVsZW1lbnQudHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVEYW5nZXJvdXNUYWcodGFnKTtcclxuICAgIHZhciBwcm9wcyA9IGVsZW1lbnQucHJvcHM7XHJcblxyXG4gICAgaWYgKHRhZyA9PT0gJ2lucHV0Jykge1xyXG4gICAgICB7XHJcbiAgICAgICAgUmVhY3RDb250cm9sbGVkVmFsdWVQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoJ2lucHV0JywgcHJvcHMpO1xyXG5cclxuICAgICAgICBpZiAocHJvcHMuY2hlY2tlZCAhPT0gdW5kZWZpbmVkICYmIHByb3BzLmRlZmF1bHRDaGVja2VkICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5EZWZhdWx0Q2hlY2tlZCkge1xyXG4gICAgICAgICAgZXJyb3IoJyVzIGNvbnRhaW5zIGFuIGlucHV0IG9mIHR5cGUgJXMgd2l0aCBib3RoIGNoZWNrZWQgYW5kIGRlZmF1bHRDaGVja2VkIHByb3BzLiAnICsgJ0lucHV0IGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkICcgKyAnKHNwZWNpZnkgZWl0aGVyIHRoZSBjaGVja2VkIHByb3AsIG9yIHRoZSBkZWZhdWx0Q2hlY2tlZCBwcm9wLCBidXQgbm90ICcgKyAnYm90aCkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgaW5wdXQgJyArICdlbGVtZW50IGFuZCByZW1vdmUgb25lIG9mIHRoZXNlIHByb3BzLiBNb3JlIGluZm86ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1jb250cm9sbGVkLWNvbXBvbmVudHMnLCAnQSBjb21wb25lbnQnLCBwcm9wcy50eXBlKTtcclxuXHJcbiAgICAgICAgICBkaWRXYXJuRGVmYXVsdENoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5EZWZhdWx0SW5wdXRWYWx1ZSkge1xyXG4gICAgICAgICAgZXJyb3IoJyVzIGNvbnRhaW5zIGFuIGlucHV0IG9mIHR5cGUgJXMgd2l0aCBib3RoIHZhbHVlIGFuZCBkZWZhdWx0VmFsdWUgcHJvcHMuICcgKyAnSW5wdXQgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgJyArICcoc3BlY2lmeSBlaXRoZXIgdGhlIHZhbHVlIHByb3AsIG9yIHRoZSBkZWZhdWx0VmFsdWUgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIGlucHV0ICcgKyAnZWxlbWVudCBhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtY29udHJvbGxlZC1jb21wb25lbnRzJywgJ0EgY29tcG9uZW50JywgcHJvcHMudHlwZSk7XHJcblxyXG4gICAgICAgICAgZGlkV2FybkRlZmF1bHRJbnB1dFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByb3BzID0gX2Fzc2lnbih7XHJcbiAgICAgICAgdHlwZTogdW5kZWZpbmVkXHJcbiAgICAgIH0sIHByb3BzLCB7XHJcbiAgICAgICAgZGVmYXVsdENoZWNrZWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgIT0gbnVsbCA/IHByb3BzLnZhbHVlIDogcHJvcHMuZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgIGNoZWNrZWQ6IHByb3BzLmNoZWNrZWQgIT0gbnVsbCA/IHByb3BzLmNoZWNrZWQgOiBwcm9wcy5kZWZhdWx0Q2hlY2tlZFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodGFnID09PSAndGV4dGFyZWEnKSB7XHJcbiAgICAgIHtcclxuICAgICAgICBSZWFjdENvbnRyb2xsZWRWYWx1ZVByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygndGV4dGFyZWEnLCBwcm9wcyk7XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmICFkaWRXYXJuRGVmYXVsdFRleHRhcmVhVmFsdWUpIHtcclxuICAgICAgICAgIGVycm9yKCdUZXh0YXJlYSBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgdmFsdWUgcHJvcCwgb3IgdGhlIGRlZmF1bHRWYWx1ZSBwcm9wLCBidXQgbm90ICcgKyAnYm90aCkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgdGV4dGFyZWEgJyArICdhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtY29udHJvbGxlZC1jb21wb25lbnRzJyk7XHJcblxyXG4gICAgICAgICAgZGlkV2FybkRlZmF1bHRUZXh0YXJlYVZhbHVlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBpbml0aWFsVmFsdWUgPSBwcm9wcy52YWx1ZTtcclxuXHJcbiAgICAgIGlmIChpbml0aWFsVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7IC8vIFRPRE8gKHl1bmdzdGVycyk6IFJlbW92ZSBzdXBwb3J0IGZvciBjaGlsZHJlbiBjb250ZW50IGluIDx0ZXh0YXJlYT4uXHJcblxyXG4gICAgICAgIHZhciB0ZXh0YXJlYUNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIGlmICh0ZXh0YXJlYUNoaWxkcmVuICE9IG51bGwpIHtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZXJyb3IoJ1VzZSB0aGUgYGRlZmF1bHRWYWx1ZWAgb3IgYHZhbHVlYCBwcm9wcyBpbnN0ZWFkIG9mIHNldHRpbmcgJyArICdjaGlsZHJlbiBvbiA8dGV4dGFyZWE+LicpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSkge1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiSWYgeW91IHN1cHBseSBgZGVmYXVsdFZhbHVlYCBvbiBhIDx0ZXh0YXJlYT4sIGRvIG5vdCBwYXNzIGNoaWxkcmVuLlwiICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0ZXh0YXJlYUNoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICBpZiAoISh0ZXh0YXJlYUNoaWxkcmVuLmxlbmd0aCA8PSAxKSkge1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIjx0ZXh0YXJlYT4gY2FuIG9ubHkgaGF2ZSBhdCBtb3N0IG9uZSBjaGlsZC5cIiApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGV4dGFyZWFDaGlsZHJlbiA9IHRleHRhcmVhQ2hpbGRyZW5bMF07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gJycgKyB0ZXh0YXJlYUNoaWxkcmVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXRpYWxWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJvcHMgPSBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgY2hpbGRyZW46ICcnICsgaW5pdGlhbFZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdzZWxlY3QnKSB7XHJcbiAgICAgIHtcclxuICAgICAgICBSZWFjdENvbnRyb2xsZWRWYWx1ZVByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygnc2VsZWN0JywgcHJvcHMpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlUHJvcE5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgcHJvcE5hbWUgPSB2YWx1ZVByb3BOYW1lc1tpXTtcclxuXHJcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BzW3Byb3BOYW1lXSk7XHJcblxyXG4gICAgICAgICAgaWYgKHByb3BzLm11bHRpcGxlICYmICFpc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGVycm9yKCdUaGUgYCVzYCBwcm9wIHN1cHBsaWVkIHRvIDxzZWxlY3Q+IG11c3QgYmUgYW4gYXJyYXkgaWYgJyArICdgbXVsdGlwbGVgIGlzIHRydWUuJywgcHJvcE5hbWUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICghcHJvcHMubXVsdGlwbGUgJiYgaXNBcnJheSkge1xyXG4gICAgICAgICAgICBlcnJvcignVGhlIGAlc2AgcHJvcCBzdXBwbGllZCB0byA8c2VsZWN0PiBtdXN0IGJlIGEgc2NhbGFyICcgKyAndmFsdWUgaWYgYG11bHRpcGxlYCBpcyBmYWxzZS4nLCBwcm9wTmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FybkRlZmF1bHRTZWxlY3RWYWx1ZSkge1xyXG4gICAgICAgICAgZXJyb3IoJ1NlbGVjdCBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgdmFsdWUgcHJvcCwgb3IgdGhlIGRlZmF1bHRWYWx1ZSBwcm9wLCBidXQgbm90ICcgKyAnYm90aCkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgc2VsZWN0ICcgKyAnZWxlbWVudCBhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtY29udHJvbGxlZC1jb21wb25lbnRzJyk7XHJcblxyXG4gICAgICAgICAgZGlkV2FybkRlZmF1bHRTZWxlY3RWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZSA9IHByb3BzLnZhbHVlICE9IG51bGwgPyBwcm9wcy52YWx1ZSA6IHByb3BzLmRlZmF1bHRWYWx1ZTtcclxuICAgICAgcHJvcHMgPSBfYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWRcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ29wdGlvbicpIHtcclxuICAgICAgdmFyIHNlbGVjdGVkID0gbnVsbDtcclxuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5jdXJyZW50U2VsZWN0VmFsdWU7XHJcbiAgICAgIHZhciBvcHRpb25DaGlsZHJlbiA9IGZsYXR0ZW5PcHRpb25DaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0VmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgIHZhciB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHByb3BzLnZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUgKyAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFsdWUgPSBvcHRpb25DaGlsZHJlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdFZhbHVlKSkge1xyXG4gICAgICAgICAgLy8gbXVsdGlwbGVcclxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VsZWN0VmFsdWUubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKCcnICsgc2VsZWN0VmFsdWVbal0gPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlbGVjdGVkID0gJycgKyBzZWxlY3RWYWx1ZSA9PT0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9wcyA9IF9hc3NpZ24oe1xyXG4gICAgICAgICAgc2VsZWN0ZWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWRcclxuICAgICAgICB9LCBwcm9wcywge1xyXG4gICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkLFxyXG4gICAgICAgICAgY2hpbGRyZW46IG9wdGlvbkNoaWxkcmVuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB7XHJcbiAgICAgIHZhbGlkYXRlUHJvcGVydGllc0luRGV2ZWxvcG1lbnQodGFnLCBwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXNzZXJ0VmFsaWRQcm9wcyh0YWcsIHByb3BzKTtcclxuICAgIHZhciBvdXQgPSBjcmVhdGVPcGVuVGFnTWFya3VwKGVsZW1lbnQudHlwZSwgdGFnLCBwcm9wcywgbmFtZXNwYWNlLCB0aGlzLm1ha2VTdGF0aWNNYXJrdXAsIHRoaXMuc3RhY2subGVuZ3RoID09PSAxKTtcclxuICAgIHZhciBmb290ZXIgPSAnJztcclxuXHJcbiAgICBpZiAob21pdHRlZENsb3NlVGFncy5oYXNPd25Qcm9wZXJ0eSh0YWcpKSB7XHJcbiAgICAgIG91dCArPSAnLz4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3V0ICs9ICc+JztcclxuICAgICAgZm9vdGVyID0gJzwvJyArIGVsZW1lbnQudHlwZSArICc+JztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2hpbGRyZW47XHJcbiAgICB2YXIgaW5uZXJNYXJrdXAgPSBnZXROb25DaGlsZHJlbklubmVyTWFya3VwKHByb3BzKTtcclxuXHJcbiAgICBpZiAoaW5uZXJNYXJrdXAgIT0gbnVsbCkge1xyXG4gICAgICBjaGlsZHJlbiA9IFtdO1xyXG5cclxuICAgICAgaWYgKG5ld2xpbmVFYXRpbmdUYWdzLmhhc093blByb3BlcnR5KHRhZykgJiYgaW5uZXJNYXJrdXAuY2hhckF0KDApID09PSAnXFxuJykge1xyXG4gICAgICAgIC8vIHRleHQvaHRtbCBpZ25vcmVzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlc2UgdGFncyBpZiBpdCdzIGEgbmV3bGluZVxyXG4gICAgICAgIC8vIFByZWZlciB0byBicmVhayBhcHBsaWNhdGlvbi94bWwgb3ZlciB0ZXh0L2h0bWwgKGZvciBub3cpIGJ5IGFkZGluZ1xyXG4gICAgICAgIC8vIGEgbmV3bGluZSBzcGVjaWZpY2FsbHkgdG8gZ2V0IGVhdGVuIGJ5IHRoZSBwYXJzZXIuIChBbHRlcm5hdGVseSBmb3JcclxuICAgICAgICAvLyB0ZXh0YXJlYXMsIHJlcGxhY2luZyBcIl5cXG5cIiB3aXRoIFwiXFxyXFxuXCIgZG9lc24ndCBnZXQgZWF0ZW4sIGFuZCB0aGUgZmlyc3RcclxuICAgICAgICAvLyBcXHIgaXMgbm9ybWFsaXplZCBvdXQgYnkgSFRNTFRleHRBcmVhRWxlbWVudCN2YWx1ZS4pXHJcbiAgICAgICAgLy8gU2VlOiA8aHR0cDovL3d3dy53My5vcmcvVFIvaHRtbC1wb2x5Z2xvdC8jbmV3bGluZXMtaW4tdGV4dGFyZWEtYW5kLXByZT5cclxuICAgICAgICAvLyBTZWU6IDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50LXJlc3RyaWN0aW9ucz5cclxuICAgICAgICAvLyBTZWU6IDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNuZXdsaW5lcz5cclxuICAgICAgICAvLyBTZWU6IFBhcnNpbmcgb2YgXCJ0ZXh0YXJlYVwiIFwibGlzdGluZ1wiIGFuZCBcInByZVwiIGVsZW1lbnRzXHJcbiAgICAgICAgLy8gIGZyb20gPGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbmJvZHk+XHJcbiAgICAgICAgb3V0ICs9ICdcXG4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBvdXQgKz0gaW5uZXJNYXJrdXA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGlsZHJlbiA9IHRvQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmcmFtZSA9IHtcclxuICAgICAgZG9tTmFtZXNwYWNlOiBnZXRDaGlsZE5hbWVzcGFjZShwYXJlbnROYW1lc3BhY2UsIGVsZW1lbnQudHlwZSksXHJcbiAgICAgIHR5cGU6IHRhZyxcclxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxyXG4gICAgICBjaGlsZEluZGV4OiAwLFxyXG4gICAgICBjb250ZXh0OiBjb250ZXh0LFxyXG4gICAgICBmb290ZXI6IGZvb3RlclxyXG4gICAgfTtcclxuXHJcbiAgICB7XHJcbiAgICAgIGZyYW1lLmRlYnVnRWxlbWVudFN0YWNrID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGFjay5wdXNoKGZyYW1lKTtcclxuICAgIHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIG91dDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gUmVhY3RET01TZXJ2ZXJSZW5kZXJlcjtcclxufSgpO1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlciBhIFJlYWN0RWxlbWVudCB0byBpdHMgaW5pdGlhbCBIVE1MLiBUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgb24gdGhlXHJcbiAqIHNlcnZlci5cclxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1kb20tc2VydmVyLmh0bWwjcmVuZGVydG9zdHJpbmdcclxuICovXHJcblxyXG5mdW5jdGlvbiByZW5kZXJUb1N0cmluZyhlbGVtZW50KSB7XHJcbiAgdmFyIHJlbmRlcmVyID0gbmV3IFJlYWN0RE9NU2VydmVyUmVuZGVyZXIoZWxlbWVudCwgZmFsc2UpO1xyXG5cclxuICB0cnkge1xyXG4gICAgdmFyIG1hcmt1cCA9IHJlbmRlcmVyLnJlYWQoSW5maW5pdHkpO1xyXG4gICAgcmV0dXJuIG1hcmt1cDtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgcmVuZGVyZXIuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogU2ltaWxhciB0byByZW5kZXJUb1N0cmluZywgZXhjZXB0IHRoaXMgZG9lc24ndCBjcmVhdGUgZXh0cmEgRE9NIGF0dHJpYnV0ZXNcclxuICogc3VjaCBhcyBkYXRhLXJlYWN0LWlkIHRoYXQgUmVhY3QgdXNlcyBpbnRlcm5hbGx5LlxyXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWRvbS1zZXJ2ZXIuaHRtbCNyZW5kZXJ0b3N0YXRpY21hcmt1cFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRvU3RhdGljTWFya3VwKGVsZW1lbnQpIHtcclxuICB2YXIgcmVuZGVyZXIgPSBuZXcgUmVhY3RET01TZXJ2ZXJSZW5kZXJlcihlbGVtZW50LCB0cnVlKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIHZhciBtYXJrdXAgPSByZW5kZXJlci5yZWFkKEluZmluaXR5KTtcclxuICAgIHJldHVybiBtYXJrdXA7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIHJlbmRlcmVyLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRvTm9kZVN0cmVhbSgpIHtcclxuICB7XHJcbiAgICB7XHJcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0RE9NU2VydmVyLnJlbmRlclRvTm9kZVN0cmVhbSgpOiBUaGUgc3RyZWFtaW5nIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBicm93c2VyLiBVc2UgUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoKSBpbnN0ZWFkLlwiICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUb1N0YXRpY05vZGVTdHJlYW0oKSB7XHJcbiAge1xyXG4gICAge1xyXG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY05vZGVTdHJlYW0oKTogVGhlIHN0cmVhbWluZyBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgYnJvd3Nlci4gVXNlIFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKCkgaW5zdGVhZC5cIiApO1xyXG4gICAgfVxyXG4gIH1cclxufSAvLyBOb3RlOiB3aGVuIGNoYW5naW5nIHRoaXMsIGFsc28gY29uc2lkZXIgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMTUyNlxyXG5cclxuXHJcbnZhciBSZWFjdERPTVNlcnZlciA9IHtcclxuICByZW5kZXJUb1N0cmluZzogcmVuZGVyVG9TdHJpbmcsXHJcbiAgcmVuZGVyVG9TdGF0aWNNYXJrdXA6IHJlbmRlclRvU3RhdGljTWFya3VwLFxyXG4gIHJlbmRlclRvTm9kZVN0cmVhbTogcmVuZGVyVG9Ob2RlU3RyZWFtLFxyXG4gIHJlbmRlclRvU3RhdGljTm9kZVN0cmVhbTogcmVuZGVyVG9TdGF0aWNOb2RlU3RyZWFtLFxyXG4gIHZlcnNpb246IFJlYWN0VmVyc2lvblxyXG59O1xyXG5cclxuLy8gVE9ETzogZGVjaWRlIG9uIHRoZSB0b3AtbGV2ZWwgZXhwb3J0IGZvcm0uXHJcbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdFxyXG5cclxuXHJcbnZhciBzZXJ2ZXJfYnJvd3NlciA9IFJlYWN0RE9NU2VydmVyLmRlZmF1bHQgfHwgUmVhY3RET01TZXJ2ZXI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNlcnZlcl9icm93c2VyO1xyXG4gIH0pKCk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS1zZXJ2ZXIuYnJvd3Nlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xyXG59IGVsc2Uge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLXNlcnZlci5icm93c2VyLmRldmVsb3BtZW50LmpzJyk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==