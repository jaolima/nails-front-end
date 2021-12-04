webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/Collections/LeftCollection.js":
false,

/***/ "./components/common/Collections/TabCollection3.js":
false,

/***/ "./components/common/Collections/TabCollection4.js":
/*!*********************************************************!*\
  !*** ./components/common/Collections/TabCollection4.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _PostLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PostLoader */ "./components/common/PostLoader.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\common\\Collections\\TabCollection4.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);

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
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "product-tab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, data && data.products.items.slice(startIndex, endIndex).map(function (item, i) {
    return __jsx("div", {
      className: "tab-box",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "product-box2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "media",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return clickProductDetail(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
      className: "img-fluid blur-up lazyload",
      src: item.images[0].src,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 23
      }
    })), __jsx("div", {
      className: "media-body align-self-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "rating",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 25
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 25
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 25
      }
    })), __jsx("a", {
      onClick: function onClick() {
        return clickProductDetail(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 23
      }
    }, __jsx("h6", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    }, item.title)), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 23
      }
    }, currency.symbol, (item.price * currency.value).toFixed(2))))));
  })));
};

_s(TabContent, "tjmg1l6kIuIZuzN+VrZdqIJNf40=");

_c = TabContent;

var TabCollection = function TabCollection(_ref2) {
  _s2();

  var type = _ref2.type,
      bgClass = _ref2.bgClass;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(type),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var curContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_7__["CurrencyContext"]);
  var currency = curContext.state;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: activeTab,
      indexFrom: 0,
      limit: 8
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  var clickProductDetail = function clickProductDetail(product) {
    var titleProps = product.title.split(" ").join("");
    router.push("/product-details/".concat(product.id) + "-" + "".concat(titleProps));
  };

  return __jsx("div", {
    className: bgClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "title4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "title-inner4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, "trending products"), __jsx("div", {
    className: "line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    className: "theme-tab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabList"], {
    className: "tabs tab-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    className: activeTab == type ? "active" : "",
    onClick: function onClick() {
      return setActiveTab(type);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, "winter"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    className: activeTab == "greens" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab(type);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }, "greens"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    className: activeTab == "various" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab(type);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }, "various")), __jsx("div", {
    className: "tab-content-cls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    className: "tab-content active default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 19
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    startIndex: 0,
    endIndex: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    className: "tab-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    startIndex: 4,
    endIndex: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    className: "tab-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 19
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    startIndex: 2,
    endIndex: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  })))))))));
};

_s2(TabCollection, "n63YE0KsauiAn5HWiaLfMtTkp/I=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c2 = TabCollection;
/* harmony default export */ __webpack_exports__["default"] = (TabCollection);

var _c, _c2;

$RefreshReg$(_c, "TabContent");
$RefreshReg$(_c2, "TabCollection");

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
/* harmony import */ var _components_common_Collections_TabCollection4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Collections/TabCollection4 */ "./components/common/Collections/TabCollection4.js");
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
  }), __jsx(_components_common_Collections_TabCollection4__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/***/ }),

/***/ "./public/assets/images/tools/banner.jpg":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQ29sbGVjdGlvbnMvVGFiQ29sbGVjdGlvbjQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUUyIsImdxbCIsIlRhYkNvbnRlbnQiLCJkYXRhIiwibG9hZGluZyIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImN1ckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ3VycmVuY3lDb250ZXh0IiwiY3VycmVuY3kiLCJzdGF0ZSIsInByb2R1Y3RzIiwiaXRlbXMiLCJsZW5ndGgiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJpIiwiY2xpY2tQcm9kdWN0RGV0YWlsIiwiaW1hZ2VzIiwic3JjIiwidGl0bGUiLCJzeW1ib2wiLCJwcmljZSIsInZhbHVlIiwidG9GaXhlZCIsIlRhYkNvbGxlY3Rpb24iLCJ0eXBlIiwiYmdDbGFzcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpbmRleEZyb20iLCJsaW1pdCIsInByb2R1Y3QiLCJ0aXRsZVByb3BzIiwic3BsaXQiLCJqb2luIiwicHVzaCIsImlkIiwiRmFzaGlvbiIsImZhdmljb24iLCJQcm9kdWN0NSIsIlByb2R1Y3Q0Iiwid2l0aEFwb2xsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHQywyREFBSCxtQkFBbEI7O0FBaUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQTZDO0FBQUE7O0FBQUEsTUFBMUNDLElBQTBDLFFBQTFDQSxJQUEwQztBQUFBLE1BQXBDQyxPQUFvQyxRQUFwQ0EsT0FBb0M7QUFBQSxNQUEzQkMs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O0FBQUE7QUFBQTtBQUFBLElBNUNGLEVBd0RFLE1BQUMsK0VBQUQ7QUFBVyxRQUFJLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhERixFQXlERTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0F6REYsRUE0REUsTUFBQyxnRkFBRDtBQUNFLGVBQVcsZ0JBRGI7QUFFRSxnQkFBWSxFQUFFLDJCQUZoQjtBQUdFLGlCQUFhLEVBQUUsMkNBSGpCO0FBSUUsZ0JBQVksRUFBRSw4QkFKaEI7QUFLRSxhQUFTLEVBQUUsSUFMYjtBQU1FLFlBQVEsRUFBRSxVQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1REYsQ0FERjtBQXVFRCxDQXhFRDs7S0FBTUgsTztBQTBFUyxxRUFBQUksMEVBQVUsQ0FBQ0osT0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZWRhNmQ5YTM4NjY3YmI2YjU3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRhYiwgVGFiTGlzdCwgVGFiUGFuZWwsIFRhYnMgfSBmcm9tIFwicmVhY3QtdGFic1wiO1xyXG5pbXBvcnQgeyBDb2wsIENvbnRhaW5lciwgTWVkaWEsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IFBvc3RMb2FkZXIgZnJvbSBcIi4uL1Bvc3RMb2FkZXJcIjtcclxuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCBHRVRfUFJPRFVDVFMgPSBncWxgXHJcbiAgcXVlcnkgcHJvZHVjdHMoJHR5cGU6IF9DYXRlZ29yeVR5cGUhLCAkaW5kZXhGcm9tOiBJbnQhLCAkbGltaXQ6IEludCEpIHtcclxuICAgIHByb2R1Y3RzKHR5cGU6ICR0eXBlLCBpbmRleEZyb206ICRpbmRleEZyb20sIGxpbWl0OiAkbGltaXQpIHtcclxuICAgICAgaXRlbXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIHR5cGVcclxuICAgICAgICBicmFuZFxyXG4gICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICBuZXdcclxuICAgICAgICBzdG9ja1xyXG4gICAgICAgIHNhbGVcclxuICAgICAgICBkaXNjb3VudFxyXG4gICAgICAgIHZhcmlhbnRzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBza3VcclxuICAgICAgICAgIHNpemVcclxuICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICBpbWFnZV9pZFxyXG4gICAgICAgIH1cclxuICAgICAgICBpbWFnZXMge1xyXG4gICAgICAgICAgaW1hZ2VfaWRcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBhbHRcclxuICAgICAgICAgIHNyY1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRhYkNvbnRlbnQgPSAoeyBkYXRhLCBsb2FkaW5nLCBzdGFydEluZGV4LCBlbmRJbmRleCB9KSA9PiB7XHJcbiAgY29uc3QgY3VyQ29udGV4dCA9IHVzZUNvbnRleHQoQ3VycmVuY3lDb250ZXh0KTtcclxuICBjb25zdCBjdXJyZW5jeSA9IGN1ckNvbnRleHQuc3RhdGU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgY2xhc3NOYW1lPVwicHJvZHVjdC10YWJcIj5cclxuICAgICAgeyFkYXRhIHx8XHJcbiAgICAgICFkYXRhLnByb2R1Y3RzIHx8XHJcbiAgICAgICFkYXRhLnByb2R1Y3RzLml0ZW1zIHx8XHJcbiAgICAgIGRhdGEucHJvZHVjdHMuaXRlbXMubGVuZ3RoID09PSAwIHx8XHJcbiAgICAgIGxvYWRpbmcgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XHJcbiAgICAgICAgICA8UG9zdExvYWRlciAvPlxyXG4gICAgICAgICAgPFBvc3RMb2FkZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgZGF0YS5wcm9kdWN0cy5pdGVtcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCkubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItYm94XCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1ib3gyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBjbGlja1Byb2R1Y3REZXRhaWwoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBibHVyLXVwIGxhenlsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHkgYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhclwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBjbGlja1Byb2R1Y3REZXRhaWwoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2l0ZW0udGl0bGV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5LnN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhpdGVtLnByaWNlICogY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUYWJDb2xsZWN0aW9uID0gKHsgdHlwZSwgYmdDbGFzcyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKHR5cGUpO1xyXG4gIGNvbnN0IGN1ckNvbnRleHQgPSB1c2VDb250ZXh0KEN1cnJlbmN5Q29udGV4dCk7XHJcbiAgY29uc3QgY3VycmVuY3kgPSBjdXJDb250ZXh0LnN0YXRlO1xyXG4gIHZhciB7IGxvYWRpbmcsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUUywge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHR5cGU6IGFjdGl2ZVRhYixcclxuICAgICAgaW5kZXhGcm9tOiAwLFxyXG4gICAgICBsaW1pdDogOCxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNsaWNrUHJvZHVjdERldGFpbCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZVByb3BzID0gcHJvZHVjdC50aXRsZS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcclxuICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdC1kZXRhaWxzLyR7cHJvZHVjdC5pZH1gICsgXCItXCIgKyBgJHt0aXRsZVByb3BzfWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmdDbGFzc30+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ9e3RydWV9PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlNFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlLWlubmVyNFwiPnRyZW5kaW5nIHByb2R1Y3RzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8VGFicyBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cInRhYnMgdGFiLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PSB0eXBlID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKHR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgd2ludGVyXHJcbiAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVUYWIgPT0gXCJncmVlbnNcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYih0eXBlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIGdyZWVuc1xyXG4gICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlVGFiID09IFwidmFyaW91c1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKHR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaW91c1xyXG4gICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnQtY2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJ0YWItY29udGVudCBhY3RpdmUgZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleD17OH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4PXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZW5kSW5kZXg9ezEyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleD17MTB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYkNvbGxlY3Rpb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vbGF5b3V0cy9GYXNoaW9uL0NvbXBvbmVudHMvQmFubmVyXCI7XG5pbXBvcnQgQ29sbGVjdGlvbkJhbm5lciBmcm9tIFwiLi9sYXlvdXRzL0Zhc2hpb24vQ29tcG9uZW50cy9Db2xsZWN0aW9uLUJhbm5lclwiO1xuaW1wb3J0IFRvcENvbGxlY3Rpb24xIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uMVwiO1xuaW1wb3J0IFRvcENvbGxlY3Rpb24yIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uMlwiO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gXCIuL2xheW91dHMvRmFzaGlvbi9Db21wb25lbnRzL1BhcmFsbGF4XCI7XG5pbXBvcnQgU3BlY2lhbFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Db2xsZWN0aW9ucy9UYWJDb2xsZWN0aW9uNFwiO1xuaW1wb3J0IFNlcnZpY2VMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL1NlcnZpY2Uvc2VydmljZTNcIjtcbmltcG9ydCBCbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9CbG9nL2Jsb2cxXCI7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9pbnN0YWdyYW0vaW5zdGFncmFtMVwiO1xuaW1wb3J0IExvZ29CbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vbG9nby1ibG9ja1wiO1xuaW1wb3J0IEhlYWRlck9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJzL2hlYWRlci1vbmVcIjtcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vaGVscGVycy9hcG9sbG8vYXBvbGxvXCI7XG5pbXBvcnQgeyBQcm9kdWN0NCwgUHJvZHVjdDUsIFByb2R1Y3Q2IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjcmlwdFwiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vUGFyYWdyYXBoXCI7XG5pbXBvcnQgTW9kYWxDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsXCI7XG5pbXBvcnQgSGVsbWV0IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcbmltcG9ydCBmYXZpY29uIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLzEucG5nXCI7XG5pbXBvcnQgTWFzdGVyRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlcnMvY29tbW9uL01hc3RlckZvb3RlclwiO1xuXG5jb25zdCBGYXNoaW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9e2Zhdmljb24gPyBmYXZpY29uIDogXCJcIn0gLz5cbiAgICAgIDwvSGVsbWV0PlxuICAgICAgPE1vZGFsQ29tcG9uZW50IC8+XG4gICAgICA8SGVhZGVyT25lIGxvZ29OYW1lPXtcImxvZ28ucG5nXCJ9IHRvcENsYXNzPVwidG9wLWhlYWRlclwiIC8+XG4gICAgICA8QmFubmVyIC8+XG4gICAgICA8U2VydmljZUxheW91dCBzZWN0aW9uQ2xhc3M9XCJib3JkZXItc2VjdGlvbiBzbWFsbC1zZWN0aW9uXCIgLz5cbiAgICAgIHsvKiA8Q29sbGVjdGlvbkJhbm5lciAvPiAqL31cbiAgICAgIDxQYXJhZ3JhcGhcbiAgICAgICAgdGl0bGU9XCJ0aXRsZTEgc2VjdGlvbi10LXNwYWNlXCJcbiAgICAgICAgaW5uZXI9XCJ0aXRsZS1pbm5lcjFcIlxuICAgICAgICBockNsYXNzPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgICB7LyogPFRvcENvbGxlY3Rpb25cbiAgICAgICAgbm9UaXRsZT1cIm51bGxcIlxuICAgICAgICBiYWNrSW1hZ2U9e3RydWV9XG4gICAgICAgIHR5cGU9XCJmYXNoaW9uXCJcbiAgICAgICAgdGl0bGU9XCJ0b3AgY29sbGVjdGlvblwiXG4gICAgICAgIHN1YnRpdGxlPVwic3BlY2lhbCBvZmZlclwiXG4gICAgICAgIHByb2R1Y3RTbGlkZXI9e1Byb2R1Y3Q0fVxuICAgICAgICBkZXNpZ25DbGFzcz1cInNlY3Rpb24tYi1zcGFjZSBwLXQtMCByYXRpb19hc29zXCJcbiAgICAgICAgbm9TbGlkZXI9XCJmYWxzZVwiXG4gICAgICAgIGNhcnRDbGFzcz1cImNhcnQtaW5mbyBjYXJ0LXdyYXBcIlxuICAgICAgLz4gKi99XG5cbiAgICAgIDxUb3BDb2xsZWN0aW9uMVxuICAgICAgICBub1RpdGxlPVwibnVsbFwiXG4gICAgICAgIGJhY2tJbWFnZT17dHJ1ZX1cbiAgICAgICAgdHlwZT1cImJlYXV0eVwiXG4gICAgICAgIGlubmVyQ2xhc3M9XCJ0aXRsZTFcIlxuICAgICAgICBpbm5lcj1cInRpdGxlLWlubmVyMVwiXG4gICAgICAgIHByb2R1Y3RTbGlkZXI9e1Byb2R1Y3Q1fVxuICAgICAgICB0aXRsZT1cIk5ldyBQcm9kdWN0c1wiXG4gICAgICAgIHN1YnRpdGxlPVwic3BlY2lhbCBvZmZlclwiXG4gICAgICAgIHByb2R1Y3REZXRhaWw9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAgIGRlc2lnbkNsYXNzPVwic2VjdGlvbi1iLXNwYWNlIHJhdGlvX3NxdWFyZVwiXG4gICAgICAgIG5vU2xpZGVyPVwidHJ1ZVwiXG4gICAgICAgIGNhcnRDbGFzcz1cImNhcnQtYm94XCJcbiAgICAgIC8+XG5cblxuICAgICAgPFBhcmFsbGF4IC8+XG4gICAgICA8U3BlY2lhbFByb2R1Y3RzXG4gICAgICAgIHR5cGU9XCJmYXNoaW9uXCJcbiAgICAgICAgYmFja0ltYWdlPXt0cnVlfVxuICAgICAgICBwcm9kdWN0U2xpZGVyPXtQcm9kdWN0NH1cbiAgICAgICAgbGluZT17dHJ1ZX1cbiAgICAgICAgdGl0bGU9XCJ0aXRsZTEgc2VjdGlvbi10LXNwYWNlXCJcbiAgICAgICAgaW5uZXI9XCJ0aXRsZS1pbm5lcjFcIlxuICAgICAgICBkZXNpZ25DbGFzcz1cInNlY3Rpb24tYi1zcGFjZSBwLXQtMCByYXRpb19hc29zXCJcbiAgICAgICAgbm9TbGlkZXI9XCJ0cnVlXCJcbiAgICAgICAgY2FydENsYXNzPVwiY2FydC1pbmZvIGNhcnQtd3JhcFwiXG4gICAgICAvPlxuICAgICAgey8qIDxCbG9nIHR5cGU9XCJmYXNoaW9uXCIgdGl0bGU9XCJ0aXRsZTFcIiBpbm5lcj1cInRpdGxlLWlubmVyMVwiIC8+ICovfVxuICAgICAgPEluc3RhZ3JhbSB0eXBlPVwiZmFzaGlvblwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tYi1zcGFjZVwiPlxuICAgICAgICA8TG9nb0Jsb2NrIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNYXN0ZXJGb290ZXJcbiAgICAgICAgZm9vdGVyQ2xhc3M9e2Bmb290ZXItbGlnaHRgfVxuICAgICAgICBmb290ZXJMYXlPdXQ9e1wibGlnaHQtbGF5b3V0IHVwcGVyLWZvb3RlclwifVxuICAgICAgICBmb290ZXJTZWN0aW9uPXtcInNtYWxsLXNlY3Rpb24gYm9yZGVyLXNlY3Rpb24gYm9yZGVyLXRvcC0wXCJ9XG4gICAgICAgIGJlbG93U2VjdGlvbj17XCJzZWN0aW9uLWItc3BhY2UgbGlnaHQtbGF5b3V0XCJ9XG4gICAgICAgIG5ld0xhdHRlcj17dHJ1ZX1cbiAgICAgICAgbG9nb05hbWU9e1wibG9nby5wbmdcIn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKEZhc2hpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==