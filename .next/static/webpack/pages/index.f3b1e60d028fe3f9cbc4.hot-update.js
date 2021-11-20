webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/Collections/TabCollection4.js":
false,

/***/ "./components/common/Collections/TabCollection5.js":
/*!*********************************************************!*\
  !*** ./components/common/Collections/TabCollection5.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _PostLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PostLoader */ "./components/common/PostLoader.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");


var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\common\\Collections\\TabCollection5.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        sale\n        stock\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var GET_PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_5__["default"])(_templateObject());

var TabContent = function TabContent(_ref) {
  _s();

  var data = _ref.data,
      loading = _ref.loading,
      startIndex = _ref.startIndex,
      endIndex = _ref.endIndex;
  var curContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_7__["CurrencyContext"]);
  var currency = curContext.state;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !data || !data.products || !data.products.items || loading ? __jsx("div", {
    className: "row mx-0 margin-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }))) : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "product-tab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, data && data.products.items.slice(startIndex, endIndex).map(function (item, i) {
    return __jsx("div", {
      className: "tab-box",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "product-box2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "media",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: null,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
      className: "img-fluid blur-up lazyload",
      src: item.images[0].src,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 23
      }
    })), __jsx("div", {
      className: "media-body align-self-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "rating",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 25
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 25
      }
    })), __jsx("a", {
      href: null,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 23
      }
    }, __jsx("h6", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }, item.title)), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 23
      }
    }, currency.symbol, ((item.price - item.price * item.discount / 100) * currency.value).toFixed(2), __jsx("del", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "money",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 27
      }
    }, currency.symbol, (item.price * currency.value).toFixed(2)))), __jsx("ul", {
      className: "color-variant",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 23
      }
    }, __jsx("li", {
      className: "bg-light0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }), __jsx("li", {
      className: "bg-light1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 25
      }
    }), __jsx("li", {
      className: "bg-light2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 25
      }
    }))))));
  })));
};

_s(TabContent, "tjmg1l6kIuIZuzN+VrZdqIJNf40=");

_c = TabContent;

var TabProducts = function TabProducts(_ref2) {
  _s2();

  var type = _ref2.type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(type),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var curContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_7__["CurrencyContext"]);
  var currency = curContext.state;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: activeTab,
      indexFrom: 0,
      limit: 17
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "tab-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "title4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "title-inner4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, "trending products"), __jsx("div", {
    className: "line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    className: "theme-tab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabList"], {
    className: "tabs tab-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    className: activeTab == type ? "active" : "",
    onClick: function onClick() {
      return setActiveTab(type);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, "unisex watches"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    className: activeTab == "couple" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab(type);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, "couple watches"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    className: activeTab == "titanium" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab(type);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, "titanium watches"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    className: activeTab == "gold" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab(type);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, "gold watches")), __jsx("div", {
    className: "tab-content-cls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 19
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "tab-content active default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    startIndex: 0,
    endIndex: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 23
    }
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "tab-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    startIndex: 4,
    endIndex: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 23
    }
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "tab-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 21
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    startIndex: 0,
    endIndex: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 23
    }
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "tab-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    startIndex: 4,
    endIndex: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 23
    }
  }))))))))));
};

_s2(TabProducts, "zMa/6FLbRolJRa9EMQ9zAS0YEdw=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c2 = TabProducts;
/* harmony default export */ __webpack_exports__["default"] = (TabProducts);

var _c, _c2;

$RefreshReg$(_c, "TabContent");
$RefreshReg$(_c2, "TabProducts");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_Fashion_Components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Fashion/Components/Banner */ "./pages/layouts/Fashion/Components/Banner.js");
/* harmony import */ var _layouts_Fashion_Components_Collection_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/Fashion/Components/Collection-Banner */ "./pages/layouts/Fashion/Components/Collection-Banner.js");
/* harmony import */ var _components_common_Collections_Collection1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Collections/Collection1 */ "./components/common/Collections/Collection1.js");
/* harmony import */ var _components_common_Collections_Collection2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/Collections/Collection2 */ "./components/common/Collections/Collection2.js");
/* harmony import */ var _layouts_Fashion_Components_Parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/Fashion/Components/Parallax */ "./pages/layouts/Fashion/Components/Parallax.js");
/* harmony import */ var _components_common_Collections_TabCollection5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Collections/TabCollection5 */ "./components/common/Collections/TabCollection5.js");
/* harmony import */ var _components_common_Service_service3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common/Service/service3 */ "./components/common/Service/service3.js");
/* harmony import */ var _components_common_Blog_blog1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/common/Blog/blog1 */ "./components/common/Blog/blog1.js");
/* harmony import */ var _components_common_instagram_instagram1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/instagram/instagram1 */ "./components/common/instagram/instagram1.js");
/* harmony import */ var _components_common_logo_block__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/common/logo-block */ "./components/common/logo-block.js");
/* harmony import */ var _components_headers_header_one__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/headers/header-one */ "./components/headers/header-one.js");
/* harmony import */ var _helpers_apollo_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/apollo/apollo */ "./helpers/apollo/apollo.js");
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/script */ "./services/script.js");
/* harmony import */ var _components_common_Paragraph__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/common/Paragraph */ "./components/common/Paragraph.js");
/* harmony import */ var _components_common_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/common/Modal */ "./components/common/Modal.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../public/assets/images/favicon/1.png */ "./public/assets/images/favicon/1.png");
/* harmony import */ var _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_footers_common_MasterFooter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/footers/common/MasterFooter */ "./components/footers/common/MasterFooter.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\pages\\index.js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




















var Fashion = function Fashion() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_17___default.a ? _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_17___default.a : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx(_components_common_Modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(_components_headers_header_one__WEBPACK_IMPORTED_MODULE_11__["default"], {
    logoName: "logo.png",
    topClass: "top-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(_layouts_Fashion_Components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(_components_common_Service_service3__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sectionClass: "border-section small-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(_components_common_Paragraph__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: "title1 section-t-space",
    inner: "title-inner1",
    hrClass: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(_components_common_Collections_Collection1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    noTitle: "null",
    backImage: true,
    type: "beauty",
    innerClass: "title1",
    inner: "title-inner1",
    productSlider: _services_script__WEBPACK_IMPORTED_MODULE_13__["Product5"],
    title: "New Products",
    subtitle: "special offer",
    productDetail: "text-center",
    designClass: "section-b-space ratio_square",
    noSlider: "true",
    cartClass: "cart-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx(_layouts_Fashion_Components_Parallax__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx(_components_common_Collections_TabCollection5__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "fashion",
    backImage: true,
    productSlider: _services_script__WEBPACK_IMPORTED_MODULE_13__["Product4"],
    line: true,
    title: "title1 section-t-space",
    inner: "title-inner1",
    designClass: "section-b-space p-t-0 ratio_asos",
    noSlider: "true",
    cartClass: "cart-info cart-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx(_components_common_instagram_instagram1__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "fashion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "section-b-space",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(_components_common_logo_block__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  })), __jsx(_components_footers_common_MasterFooter__WEBPACK_IMPORTED_MODULE_18__["default"], {
    footerClass: "footer-light",
    footerLayOut: "light-layout upper-footer",
    footerSection: "small-section border-section border-top-0",
    belowSection: "section-b-space light-layout",
    newLatter: true,
    logoName: "logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }));
};

_c = Fashion;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_helpers_apollo_apollo__WEBPACK_IMPORTED_MODULE_12__["withApollo"])(Fashion));

var _c, _c2;

$RefreshReg$(_c, "Fashion");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQ29sbGVjdGlvbnMvVGFiQ29sbGVjdGlvbjUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUUyIsImdxbCIsIlRhYkNvbnRlbnQiLCJkYXRhIiwibG9hZGluZyIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImN1ckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ3VycmVuY3lDb250ZXh0IiwiY3VycmVuY3kiLCJzdGF0ZSIsInByb2R1Y3RzIiwiaXRlbXMiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJpIiwiaW1hZ2VzIiwic3JjIiwidGl0bGUiLCJzeW1ib2wiLCJwcmljZSIsImRpc2NvdW50IiwidmFsdWUiLCJ0b0ZpeGVkIiwiVGFiUHJvZHVjdHMiLCJ0eXBlIiwidXNlU3RhdGUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImluZGV4RnJvbSIsImxpbWl0IiwiRmFzaGlvbiIsImZhdmljb24iLCJQcm9kdWN0NSIsIlByb2R1Y3Q0Iiwid2l0aEFwb2xsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLDJEQUFILG1CQUFsQjs7QUFpQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBNkM7QUFBQTs7QUFBQSxNQUExQ0MsSUFBMEMsUUFBMUNBLElBQTBDO0FBQUEsTUFBcENDLE9BQW9DLFFBQXBDQSxPQUFvQztBQUFBLE1BQTNCQyxVQUEyQixRQUEzQkEsVUFBMkI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDOUQsTUFBTUMsVUFBVSxHQUFHQyx3REFBVSxDQUFDQyxpRkFBRCxDQUE3QjtBQUNBLE1BQU1DLFFBQVEsR0FB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LEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBekRGLEVBNERFLE1BQUMsZ0ZBQUQ7QUFDRSxlQUFXLGdCQURiO0FBRUUsZ0JBQVksRUFBRSwyQkFGaEI7QUFHRSxpQkFBYSxFQUFFLDJDQUhqQjtBQUlFLGdCQUFZLEVBQUUsOEJBSmhCO0FBS0UsYUFBUyxFQUFFLElBTGI7QUFNRSxZQUFRLEVBQUUsVUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNURGLENBREY7QUF1RUQsQ0F4RUQ7O0tBQU1ILE87QUEwRVMscUVBQUFJLDBFQUFVLENBQUNKLE9BQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjNiMWU2MGQwMjhmZTNmOWNiYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgTWVkaWEgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSBcInJlYWN0LXRhYnNcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgUG9zdExvYWRlciBmcm9tIFwiLi4vUG9zdExvYWRlclwiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHRcIjtcclxuXHJcbmNvbnN0IEdFVF9QUk9EVUNUUyA9IGdxbGBcclxuICBxdWVyeSBwcm9kdWN0cygkdHlwZTogX0NhdGVnb3J5VHlwZSEsICRpbmRleEZyb206IEludCEsICRsaW1pdDogSW50ISkge1xyXG4gICAgcHJvZHVjdHModHlwZTogJHR5cGUsIGluZGV4RnJvbTogJGluZGV4RnJvbSwgbGltaXQ6ICRsaW1pdCkge1xyXG4gICAgICBpdGVtcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdHlwZVxyXG4gICAgICAgIGJyYW5kXHJcbiAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICBwcmljZVxyXG4gICAgICAgIG5ld1xyXG4gICAgICAgIHNhbGVcclxuICAgICAgICBzdG9ja1xyXG4gICAgICAgIGRpc2NvdW50XHJcbiAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNrdVxyXG4gICAgICAgICAgc2l6ZVxyXG4gICAgICAgICAgY29sb3JcclxuICAgICAgICAgIGltYWdlX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlcyB7XHJcbiAgICAgICAgICBpbWFnZV9pZFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGFsdFxyXG4gICAgICAgICAgc3JjXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGFiQ29udGVudCA9ICh7IGRhdGEsIGxvYWRpbmcsIHN0YXJ0SW5kZXgsIGVuZEluZGV4IH0pID0+IHtcclxuICBjb25zdCBjdXJDb250ZXh0ID0gdXNlQ29udGV4dChDdXJyZW5jeUNvbnRleHQpO1xyXG4gIGNvbnN0IGN1cnJlbmN5ID0gY3VyQ29udGV4dC5zdGF0ZTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgeyFkYXRhIHx8ICFkYXRhLnByb2R1Y3RzIHx8ICFkYXRhLnByb2R1Y3RzLml0ZW1zIHx8IGxvYWRpbmcgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtMCBtYXJnaW4tZGVmYXVsdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtNlwiPlxyXG4gICAgICAgICAgICA8UG9zdExvYWRlciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XHJcbiAgICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLTZcIj5cclxuICAgICAgICAgICAgPFBvc3RMb2FkZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtNlwiPlxyXG4gICAgICAgICAgICA8UG9zdExvYWRlciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwcm9kdWN0LXRhYlwiPlxyXG4gICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgZGF0YS5wcm9kdWN0cy5pdGVtcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCkubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItYm94XCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1ib3gyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgYmx1ci11cCBsYXp5bG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5IGFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57aXRlbS50aXRsZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3kuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLnByaWNlIC0gKGl0ZW0ucHJpY2UgKiBpdGVtLmRpc2NvdW50KSAvIDEwMCkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb25leVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5LnN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoaXRlbS5wcmljZSAqIGN1cnJlbmN5LnZhbHVlKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbG9yLXZhcmlhbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJnLWxpZ2h0MFwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiZy1saWdodDFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmctbGlnaHQyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRhYlByb2R1Y3RzID0gKHsgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKHR5cGUpO1xyXG4gIGNvbnN0IGN1ckNvbnRleHQgPSB1c2VDb250ZXh0KEN1cnJlbmN5Q29udGV4dCk7XHJcbiAgY29uc3QgY3VycmVuY3kgPSBjdXJDb250ZXh0LnN0YXRlO1xyXG5cclxuICB2YXIgeyBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVFMsIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB0eXBlOiBhY3RpdmVUYWIsXHJcbiAgICAgIGluZGV4RnJvbTogMCxcclxuICAgICAgbGltaXQ6IDE3LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItYmdcIj5cclxuICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ9e3RydWV9PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUtaW5uZXI0XCI+dHJlbmRpbmcgcHJvZHVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8VGFicyBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgICAgICAgICAgICAgPFRhYkxpc3QgY2xhc3NOYW1lPVwidGFicyB0YWItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PSB0eXBlID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIodHlwZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5pc2V4IHdhdGNoZXNcclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PSBcImNvdXBsZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIodHlwZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgY291cGxlIHdhdGNoZXNcclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PSBcInRpdGFuaXVtXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYih0eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRhbml1bSB3YXRjaGVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVUYWIgPT0gXCJnb2xkXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYih0eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBnb2xkIHdhdGNoZXNcclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50LWNsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJ0YWItY29udGVudCBhY3RpdmUgZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSW5kZXg9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4PXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleD17MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleD17OH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEluZGV4PXsxMn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYlByb2R1Y3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL2xheW91dHMvRmFzaGlvbi9Db21wb25lbnRzL0Jhbm5lclwiO1xuaW1wb3J0IENvbGxlY3Rpb25CYW5uZXIgZnJvbSBcIi4vbGF5b3V0cy9GYXNoaW9uL0NvbXBvbmVudHMvQ29sbGVjdGlvbi1CYW5uZXJcIjtcbmltcG9ydCBUb3BDb2xsZWN0aW9uMSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vQ29sbGVjdGlvbnMvQ29sbGVjdGlvbjFcIjtcbmltcG9ydCBUb3BDb2xsZWN0aW9uMiBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vQ29sbGVjdGlvbnMvQ29sbGVjdGlvbjJcIjtcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwiLi9sYXlvdXRzL0Zhc2hpb24vQ29tcG9uZW50cy9QYXJhbGxheFwiO1xuaW1wb3J0IFNwZWNpYWxQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vQ29sbGVjdGlvbnMvVGFiQ29sbGVjdGlvbjVcIjtcbmltcG9ydCBTZXJ2aWNlTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9TZXJ2aWNlL3NlcnZpY2UzXCI7XG5pbXBvcnQgQmxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vQmxvZy9ibG9nMVwiO1xuaW1wb3J0IEluc3RhZ3JhbSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vaW5zdGFncmFtL2luc3RhZ3JhbTFcIjtcbmltcG9ydCBMb2dvQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2xvZ28tYmxvY2tcIjtcbmltcG9ydCBIZWFkZXJPbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVycy9oZWFkZXItb25lXCI7XG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIi4uL2hlbHBlcnMvYXBvbGxvL2Fwb2xsb1wiO1xuaW1wb3J0IHsgUHJvZHVjdDQsIFByb2R1Y3Q1LCBQcm9kdWN0NiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY3JpcHRcIjtcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL1BhcmFncmFwaFwiO1xuaW1wb3J0IE1vZGFsQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Nb2RhbFwiO1xuaW1wb3J0IEhlbG1ldCBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5pbXBvcnQgZmF2aWNvbiBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi8xLnBuZ1wiO1xuaW1wb3J0IE1hc3RlckZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJzL2NvbW1vbi9NYXN0ZXJGb290ZXJcIjtcblxuY29uc3QgRmFzaGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPXtmYXZpY29uID8gZmF2aWNvbiA6IFwiXCJ9IC8+XG4gICAgICA8L0hlbG1ldD5cbiAgICAgIDxNb2RhbENvbXBvbmVudCAvPlxuICAgICAgPEhlYWRlck9uZSBsb2dvTmFtZT17XCJsb2dvLnBuZ1wifSB0b3BDbGFzcz1cInRvcC1oZWFkZXJcIiAvPlxuICAgICAgPEJhbm5lciAvPlxuICAgICAgPFNlcnZpY2VMYXlvdXQgc2VjdGlvbkNsYXNzPVwiYm9yZGVyLXNlY3Rpb24gc21hbGwtc2VjdGlvblwiIC8+XG4gICAgICB7LyogPENvbGxlY3Rpb25CYW5uZXIgLz4gKi99XG4gICAgICA8UGFyYWdyYXBoXG4gICAgICAgIHRpdGxlPVwidGl0bGUxIHNlY3Rpb24tdC1zcGFjZVwiXG4gICAgICAgIGlubmVyPVwidGl0bGUtaW5uZXIxXCJcbiAgICAgICAgaHJDbGFzcz17ZmFsc2V9XG4gICAgICAvPlxuICAgICAgey8qIDxUb3BDb2xsZWN0aW9uXG4gICAgICAgIG5vVGl0bGU9XCJudWxsXCJcbiAgICAgICAgYmFja0ltYWdlPXt0cnVlfVxuICAgICAgICB0eXBlPVwiZmFzaGlvblwiXG4gICAgICAgIHRpdGxlPVwidG9wIGNvbGxlY3Rpb25cIlxuICAgICAgICBzdWJ0aXRsZT1cInNwZWNpYWwgb2ZmZXJcIlxuICAgICAgICBwcm9kdWN0U2xpZGVyPXtQcm9kdWN0NH1cbiAgICAgICAgZGVzaWduQ2xhc3M9XCJzZWN0aW9uLWItc3BhY2UgcC10LTAgcmF0aW9fYXNvc1wiXG4gICAgICAgIG5vU2xpZGVyPVwiZmFsc2VcIlxuICAgICAgICBjYXJ0Q2xhc3M9XCJjYXJ0LWluZm8gY2FydC13cmFwXCJcbiAgICAgIC8+ICovfVxuXG4gICAgICA8VG9wQ29sbGVjdGlvbjFcbiAgICAgICAgbm9UaXRsZT1cIm51bGxcIlxuICAgICAgICBiYWNrSW1hZ2U9e3RydWV9XG4gICAgICAgIHR5cGU9XCJiZWF1dHlcIlxuICAgICAgICBpbm5lckNsYXNzPVwidGl0bGUxXCJcbiAgICAgICAgaW5uZXI9XCJ0aXRsZS1pbm5lcjFcIlxuICAgICAgICBwcm9kdWN0U2xpZGVyPXtQcm9kdWN0NX1cbiAgICAgICAgdGl0bGU9XCJOZXcgUHJvZHVjdHNcIlxuICAgICAgICBzdWJ0aXRsZT1cInNwZWNpYWwgb2ZmZXJcIlxuICAgICAgICBwcm9kdWN0RGV0YWlsPVwidGV4dC1jZW50ZXJcIlxuICAgICAgICBkZXNpZ25DbGFzcz1cInNlY3Rpb24tYi1zcGFjZSByYXRpb19zcXVhcmVcIlxuICAgICAgICBub1NsaWRlcj1cInRydWVcIlxuICAgICAgICBjYXJ0Q2xhc3M9XCJjYXJ0LWJveFwiXG4gICAgICAvPlxuXG5cbiAgICAgIDxQYXJhbGxheCAvPlxuICAgICAgPFNwZWNpYWxQcm9kdWN0c1xuICAgICAgICB0eXBlPVwiZmFzaGlvblwiXG4gICAgICAgIGJhY2tJbWFnZT17dHJ1ZX1cbiAgICAgICAgcHJvZHVjdFNsaWRlcj17UHJvZHVjdDR9XG4gICAgICAgIGxpbmU9e3RydWV9XG4gICAgICAgIHRpdGxlPVwidGl0bGUxIHNlY3Rpb24tdC1zcGFjZVwiXG4gICAgICAgIGlubmVyPVwidGl0bGUtaW5uZXIxXCJcbiAgICAgICAgZGVzaWduQ2xhc3M9XCJzZWN0aW9uLWItc3BhY2UgcC10LTAgcmF0aW9fYXNvc1wiXG4gICAgICAgIG5vU2xpZGVyPVwidHJ1ZVwiXG4gICAgICAgIGNhcnRDbGFzcz1cImNhcnQtaW5mbyBjYXJ0LXdyYXBcIlxuICAgICAgLz5cbiAgICAgIHsvKiA8QmxvZyB0eXBlPVwiZmFzaGlvblwiIHRpdGxlPVwidGl0bGUxXCIgaW5uZXI9XCJ0aXRsZS1pbm5lcjFcIiAvPiAqL31cbiAgICAgIDxJbnN0YWdyYW0gdHlwZT1cImZhc2hpb25cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWItc3BhY2VcIj5cbiAgICAgICAgPExvZ29CbG9jayAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TWFzdGVyRm9vdGVyXG4gICAgICAgIGZvb3RlckNsYXNzPXtgZm9vdGVyLWxpZ2h0YH1cbiAgICAgICAgZm9vdGVyTGF5T3V0PXtcImxpZ2h0LWxheW91dCB1cHBlci1mb290ZXJcIn1cbiAgICAgICAgZm9vdGVyU2VjdGlvbj17XCJzbWFsbC1zZWN0aW9uIGJvcmRlci1zZWN0aW9uIGJvcmRlci10b3AtMFwifVxuICAgICAgICBiZWxvd1NlY3Rpb249e1wic2VjdGlvbi1iLXNwYWNlIGxpZ2h0LWxheW91dFwifVxuICAgICAgICBuZXdMYXR0ZXI9e3RydWV9XG4gICAgICAgIGxvZ29OYW1lPXtcImxvZ28ucG5nXCJ9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhGYXNoaW9uKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=