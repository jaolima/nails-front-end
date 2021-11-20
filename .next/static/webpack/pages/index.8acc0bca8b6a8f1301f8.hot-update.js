webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/Collections/LeftCollection.js":
/*!*********************************************************!*\
  !*** ./components/common/Collections/LeftCollection.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");


var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\common\\Collections\\LeftCollection.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!) {\n        products (type: $type,indexFrom:$indexFrom ,limit:$limit){\n            items {\n                id\n                title\n                description\n                type\n                brand\n                category \n                price\n                stock\n                new\n                sale\n                discount\n                variants{\n                    id\n                    sku\n                    size\n                    color\n                    image_id\n                }\n                images{\n                    image_id\n                    id\n                    alt\n                    src\n                }\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var GET_PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject());

var LeftCollection = function LeftCollection(_ref) {
  _s();

  var type = _ref.type,
      border = _ref.border,
      product = _ref.product;
  var curContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__["CurrencyContext"]);
  var currency = curContext.state;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: type,
      indexFrom: 0,
      limit: 8
    }
  }),
      data = _useQuery.data;

  return __jsx("div", {
    className: "theme-card ".concat(border, " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("h5", {
    className: "title-border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "new product"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "offer-slider slide-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, data && data.products.items.slice(0, product).map(function (product, index) {
    return __jsx("div", {
      className: "media",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, __jsx("a", {
      href: product.images[0].src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 29
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
      alt: "",
      className: "img-fluid blur-up lazyload",
      src: product.images[0].src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "media-body align-self-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "rating",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 57
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 88
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 119
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 150
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 181
      }
    })), __jsx("a", {
      href: product.images[0].src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 33
      }
    }, __jsx("h6", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 37
      }
    }, product.title)), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 33
      }
    }, currency.symbol, (product.price * currency.value).toFixed(2))));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, data && data.products.items.slice(3, 6).map(function (product, index) {
    return __jsx("div", {
      className: "media",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }
    }, __jsx("a", {
      href: product.images[0].src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
      alt: "",
      className: "img-fluid blur-up lazyload",
      src: product.images[0].src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "media-body align-self-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "rating",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 57
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 88
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 119
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 150
      }
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 181
      }
    })), __jsx("a", {
      href: product.images[0].src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 33
      }
    }, __jsx("h6", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 37
      }
    }, product.title)), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 33
      }
    }, currency.symbol, (product.price * currency.value).toFixed(2))));
  }))));
};

_s(LeftCollection, "bs7wRJTQWNZkHHksUhl1yzTSTOk=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = LeftCollection;
/* harmony default export */ __webpack_exports__["default"] = (LeftCollection);

var _c;

$RefreshReg$(_c, "LeftCollection");

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

/***/ "./components/common/Collections/TabCollection2.js":
false,

/***/ "./components/common/Collections/TabCollection3.js":
/*!*********************************************************!*\
  !*** ./components/common/Collections/TabCollection3.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _product_box_ProductBox12__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-box/ProductBox12 */ "./components/common/product-box/ProductBox12.js");
/* harmony import */ var _helpers_cart_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/cart/index */ "./helpers/cart/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/wishlist/WishlistContext */ "./helpers/wishlist/WishlistContext.js");
/* harmony import */ var _public_assets_images_tools_banner_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/assets/images/tools/banner.jpg */ "./public/assets/images/tools/banner.jpg");
/* harmony import */ var _public_assets_images_tools_banner_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_tools_banner_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/script */ "./services/script.js");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../helpers/Compare/CompareContext */ "./helpers/Compare/CompareContext.js");
/* harmony import */ var _LeftCollection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LeftCollection */ "./components/common/Collections/LeftCollection.js");



var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\common\\Collections\\TabCollection3.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        new\n        stock\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}















var GET_PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_6__["default"])(_templateObject());

var TabContent = function TabContent(_ref) {
  _s();

  var data = _ref.data,
      cartClass = _ref.cartClass,
      spanClass = _ref.spanClass,
      startIndex = _ref.startIndex,
      endIndex = _ref.endIndex;
  var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_cart_index__WEBPACK_IMPORTED_MODULE_8__["default"]);
  var compareContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_14__["CompareContext"]);
  var curContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_12__["CurrencyContext"]);
  var symbol = curContext.state.symbol;
  var wishListContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_10__["WishlistContext"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _services_script__WEBPACK_IMPORTED_MODULE_13__["Product4"], {
    className: "product-4 product-m no-arrow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), data && data.products.items.slice(startIndex, endIndex).map(function (product, i) {
    return __jsx(_product_box_ProductBox12__WEBPACK_IMPORTED_MODULE_7__["default"], {
      product: product,
      spanClass: spanClass,
      addToCompare: function addToCompare() {
        return compareContext.addToCompare(product);
      },
      addCart: function addCart() {
        return context.addToCart(product);
      },
      key: i,
      addWishlist: function addWishlist() {
        return wishListContext.addToWish(product);
      },
      cartClass: cartClass,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    });
  })));
};

_s(TabContent, "k/EupLde1jcQJ0r+Zgp2cgegKYM=");

_c = TabContent;

var NewProduct = function NewProduct(_ref2) {
  _s2();

  var type = _ref2.type,
      designClass = _ref2.designClass,
      cartClass = _ref2.cartClass,
      spanClass = _ref2.spanClass;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(type),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_cart_index__WEBPACK_IMPORTED_MODULE_8__["default"]);
  var compareContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_14__["CompareContext"]);
  var curContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_12__["CurrencyContext"]);
  var symbol = curContext.state.symbol;
  var wishListContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_10__["WishlistContext"]);

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: activeTab,
      indexFrom: 0,
      limit: 8
    }
  }),
      data = _useQuery.data;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "tools_product",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    className: "multiple-slider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xl: "3",
    lg: "4",
    md: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx(_LeftCollection__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: type,
    product: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xl: "9",
    lg: "8",
    md: "12",
    className: designClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    className: "p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
    className: "theme-tab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["TabList"], {
    className: "tabs tab-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    className: activeTab == type ? "active" : "",
    onClick: function onClick() {
      return setActiveTab(type);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, "New Products"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    className: activeTab == "furniture" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab("furniture");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, "Featured Products", " ")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, __jsx(TabContent, {
    data: data,
    startIndex: 0,
    endIndex: 8,
    cartClass: cartClass,
    spanClass: spanClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }, __jsx(TabContent, {
    data: data,
    startIndex: 0,
    endIndex: 8,
    cartClass: cartClass,
    spanClass: spanClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "banner-tools",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Media"], {
    src: _public_assets_images_tools_banner_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "",
    className: "img-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  })))))));
};

_s2(NewProduct, "swQrkJu3q9hM82Nl424irEjYkac=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"]];
});

_c2 = NewProduct;
/* harmony default export */ __webpack_exports__["default"] = (NewProduct);

var _c, _c2;

$RefreshReg$(_c, "TabContent");
$RefreshReg$(_c2, "NewProduct");

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
/* harmony import */ var _components_common_Collections_TabCollection3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Collections/TabCollection3 */ "./components/common/Collections/TabCollection3.js");
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
  }), __jsx(_components_common_Collections_TabCollection3__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
/*!***********************************************!*\
  !*** ./public/assets/images/tools/banner.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-5e442256abdfcdfa469f1b5b28291560.jpg";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQ29sbGVjdGlvbnMvTGVmdENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL0NvbGxlY3Rpb25zL1RhYkNvbGxlY3Rpb24zLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvdG9vbHMvYmFubmVyLmpwZyJdLCJuYW1lcyI6WyJHRVRfUFJPRFVDVFMiLCJncWwiLCJMZWZ0Q29sbGVjdGlvbiIsInR5cGUiLCJib3JkZXIiLCJwcm9kdWN0IiwiY3VyQ29udGV4dCIsInVzZUNvbnRleHQiLCJDdXJyZW5jeUNvbnRleHQiLCJjdXJyZW5jeSIsInN0YXRlIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpbmRleEZyb20iLCJsaW1pdCIsImRhdGEiLCJwcm9kdWN0cyIsIml0ZW1zIiwic2xpY2UiLCJtYXAiLCJpbmRleCIsImltYWdlcyIsInNyYyIsInRpdGxlIiwic3ltYm9sIiwicHJpY2UiLCJ2YWx1ZSIsInRvRml4ZWQiLCJUYWJDb250ZW50IiwiY2FydENsYXNzIiwic3BhbkNsYXNzIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiY29udGV4dCIsIkNhcnRDb250ZXh0IiwiY29tcGFyZUNvbnRleHQiLCJDb21wYXJlQ29udGV4dCIsIndpc2hMaXN0Q29udGV4dCIsIldpc2hsaXN0Q29udGV4dCIsIlByb2R1Y3Q0IiwiaSIsImFkZFRvQ29tcGFyZSIsImFkZFRvQ2FydCIsImFkZFRvV2lzaCIsIk5ld1Byb2R1Y3QiLCJkZXNpZ25DbGFzcyIsInVzZVN0YXRlIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiYmFubmVyIiwiRmFzaGlvbiIsImZhdmljb24iLCJQcm9kdWN0NSIsIndpdGhBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTRERSxNQUFDLGdGQUFEO0FBQ0UsZUFBVyxnQkFEYjtBQUVFLGdCQUFZLEVBQUUsMkJBRmhCO0FBR0UsaUJBQWEsRUFBRSwyQ0FIakI7QUFJRSxnQkFBWSxFQUFFLDhCQUpoQjtBQUtFLGFBQVMsRUFBRSxJQUxiO0FBTUUsWUFBUSxFQUFFLFVBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVERixDQURGO0FBdUVELENBeEVEOztLQUFNVyxPO0FBMEVTLHFFQUFBRywwRUFBVSxDQUFDSCxPQUFELENBQXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBLG9GIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhhY2MwYmNhOGI2YThmMTMwMWY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBDdXJyZW5jeUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL0N1cnJlbmN5L0N1cnJlbmN5Q29udGV4dCc7XHJcblxyXG5jb25zdCBHRVRfUFJPRFVDVFMgPSBncWxgXHJcbiAgICBxdWVyeSAgcHJvZHVjdHMoJHR5cGU6X0NhdGVnb3J5VHlwZSEsJGluZGV4RnJvbTpJbnQhICwkbGltaXQ6SW50ISkge1xyXG4gICAgICAgIHByb2R1Y3RzICh0eXBlOiAkdHlwZSxpbmRleEZyb206JGluZGV4RnJvbSAsbGltaXQ6JGxpbWl0KXtcclxuICAgICAgICAgICAgaXRlbXMge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgYnJhbmRcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IFxyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICAgICAgICBuZXdcclxuICAgICAgICAgICAgICAgIHNhbGVcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50c3tcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHNrdVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemVcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX2lkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZXN7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWRcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdFxyXG4gICAgICAgICAgICAgICAgICAgIHNyY1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IExlZnRDb2xsZWN0aW9uID0gKHt0eXBlICxib3JkZXIscHJvZHVjdH0pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY3VyQ29udGV4dCA9ICB1c2VDb250ZXh0KEN1cnJlbmN5Q29udGV4dCk7XHJcbiAgICBjb25zdCBjdXJyZW5jeSA9IGN1ckNvbnRleHQuc3RhdGU7XHJcbiAgICBcclxuXHJcbiAgICB2YXIgeyBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVFMsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgaW5kZXhGcm9tOiAwLFxyXG4gICAgICAgICAgICBsaW1pdDogOFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRoZW1lLWNhcmQgJHtib3JkZXJ9IGB9PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGl0bGUtYm9yZGVyXCI+bmV3IHByb2R1Y3Q8L2g1PlxyXG4gICAgICAgICAgICA8U2xpZGVyIGNsYXNzTmFtZT1cIm9mZmVyLXNsaWRlciBzbGlkZS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEucHJvZHVjdHMuaXRlbXMuc2xpY2UoMCwgcHJvZHVjdCkubWFwKChwcm9kdWN0LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvZHVjdC5pbWFnZXNbMF0uc3JjfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGJsdXItdXAgbGF6eWxvYWRcIiBzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdLnNyY30gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHkgYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+IDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+IDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+IDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+IDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvZHVjdC5pbWFnZXNbMF0uc3JjfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pntwcm9kdWN0LnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57Y3VycmVuY3kuc3ltYm9sfXsocHJvZHVjdC5wcmljZSAqIGN1cnJlbmN5LnZhbHVlKS50b0ZpeGVkKDIpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnByb2R1Y3RzLml0ZW1zLnNsaWNlKDMsIDYpLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2R1Y3QuaW1hZ2VzWzBdLnNyY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBibHVyLXVwIGxhenlsb2FkXCIgc3JjPXtwcm9kdWN0LmltYWdlc1swXS5zcmN9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5IGFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCI+PC9pPiA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCI+PC9pPiA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCI+PC9pPiA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCI+PC9pPiA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2R1Y3QuaW1hZ2VzWzBdLnNyY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57cHJvZHVjdC50aXRsZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2N1cnJlbmN5LnN5bWJvbH17KHByb2R1Y3QucHJpY2UgKiBjdXJyZW5jeS52YWx1ZSkudG9GaXhlZCgyKX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnRDb2xsZWN0aW9uOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gXCJyZWFjdC10YWJzXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuLi9wcm9kdWN0LWJveC9Qcm9kdWN0Qm94MTJcIjtcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2NhcnQvaW5kZXhcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBNZWRpYSwgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBXaXNobGlzdENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy93aXNobGlzdC9XaXNobGlzdENvbnRleHRcIjtcclxuaW1wb3J0IGJhbm5lciBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvdG9vbHMvYmFubmVyLmpwZ1wiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHRcIjtcclxuaW1wb3J0IHsgUHJvZHVjdDQgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvc2NyaXB0XCI7XHJcbmltcG9ydCB7IENvbXBhcmVDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvQ29tcGFyZS9Db21wYXJlQ29udGV4dFwiO1xyXG5pbXBvcnQgTGVmdENvbGxlY3Rpb24gZnJvbSBcIi4vTGVmdENvbGxlY3Rpb25cIjtcclxuXHJcbmNvbnN0IEdFVF9QUk9EVUNUUyA9IGdxbGBcclxuICBxdWVyeSBwcm9kdWN0cygkdHlwZTogX0NhdGVnb3J5VHlwZSEsICRpbmRleEZyb206IEludCEsICRsaW1pdDogSW50ISkge1xyXG4gICAgcHJvZHVjdHModHlwZTogJHR5cGUsIGluZGV4RnJvbTogJGluZGV4RnJvbSwgbGltaXQ6ICRsaW1pdCkge1xyXG4gICAgICBpdGVtcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdHlwZVxyXG4gICAgICAgIGJyYW5kXHJcbiAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICBwcmljZVxyXG4gICAgICAgIG5ld1xyXG4gICAgICAgIHN0b2NrXHJcbiAgICAgICAgc2FsZVxyXG4gICAgICAgIGRpc2NvdW50XHJcbiAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNrdVxyXG4gICAgICAgICAgc2l6ZVxyXG4gICAgICAgICAgY29sb3JcclxuICAgICAgICAgIGltYWdlX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlcyB7XHJcbiAgICAgICAgICBpbWFnZV9pZFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGFsdFxyXG4gICAgICAgICAgc3JjXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGFiQ29udGVudCA9ICh7IGRhdGEsIGNhcnRDbGFzcywgc3BhbkNsYXNzLCBzdGFydEluZGV4LCBlbmRJbmRleCB9KSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gIGNvbnN0IGNvbXBhcmVDb250ZXh0ID0gdXNlQ29udGV4dChDb21wYXJlQ29udGV4dCk7XHJcbiAgY29uc3QgY3VyQ29udGV4dCA9IHVzZUNvbnRleHQoQ3VycmVuY3lDb250ZXh0KTtcclxuICBjb25zdCBzeW1ib2wgPSBjdXJDb250ZXh0LnN0YXRlLnN5bWJvbDtcclxuICBjb25zdCB3aXNoTGlzdENvbnRleHQgPSB1c2VDb250ZXh0KFdpc2hsaXN0Q29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTbGlkZXIgey4uLlByb2R1Y3Q0fSBjbGFzc05hbWU9XCJwcm9kdWN0LTQgcHJvZHVjdC1tIG5vLWFycm93XCI+XHJcbiAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgIGRhdGEucHJvZHVjdHMuaXRlbXNcclxuICAgICAgICAgICAgLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxyXG4gICAgICAgICAgICAubWFwKChwcm9kdWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgc3BhbkNsYXNzPXtzcGFuQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICBhZGRUb0NvbXBhcmU9eygpID0+IGNvbXBhcmVDb250ZXh0LmFkZFRvQ29tcGFyZShwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgIGFkZENhcnQ9eygpID0+IGNvbnRleHQuYWRkVG9DYXJ0KHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgYWRkV2lzaGxpc3Q9eygpID0+IHdpc2hMaXN0Q29udGV4dC5hZGRUb1dpc2gocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICBjYXJ0Q2xhc3M9e2NhcnRDbGFzc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgPC9TbGlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTmV3UHJvZHVjdCA9ICh7IHR5cGUsIGRlc2lnbkNsYXNzLCBjYXJ0Q2xhc3MsIHNwYW5DbGFzcyB9KSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKHR5cGUpO1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuICBjb25zdCBjb21wYXJlQ29udGV4dCA9IHVzZUNvbnRleHQoQ29tcGFyZUNvbnRleHQpO1xyXG4gIGNvbnN0IGN1ckNvbnRleHQgPSB1c2VDb250ZXh0KEN1cnJlbmN5Q29udGV4dCk7XHJcbiAgY29uc3Qgc3ltYm9sID0gY3VyQ29udGV4dC5zdGF0ZS5zeW1ib2w7XHJcbiAgY29uc3Qgd2lzaExpc3RDb250ZXh0ID0gdXNlQ29udGV4dChXaXNobGlzdENvbnRleHQpO1xyXG5cclxuICB2YXIgeyBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVFMsIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB0eXBlOiBhY3RpdmVUYWIsXHJcbiAgICAgIGluZGV4RnJvbTogMCxcclxuICAgICAgbGltaXQ6IDgsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b29sc19wcm9kdWN0XCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXVsdGlwbGUtc2xpZGVyXCI+XHJcbiAgICAgICAgICAgIDxDb2wgeGw9XCIzXCIgbGc9XCI0XCIgbWQ9XCIxMlwiPlxyXG4gICAgICAgICAgICAgIDxMZWZ0Q29sbGVjdGlvbiB0eXBlPXt0eXBlfSBwcm9kdWN0PXs0fSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4bD1cIjlcIiBsZz1cIjhcIiBtZD1cIjEyXCIgY2xhc3NOYW1lPXtkZXNpZ25DbGFzc30+XHJcbiAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJzIGNsYXNzTmFtZT1cInRoZW1lLXRhYlwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGFiTGlzdCBjbGFzc05hbWU9XCJ0YWJzIHRhYi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlVGFiID09IHR5cGUgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYih0eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOZXcgUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PSBcImZ1cm5pdHVyZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJmdXJuaXR1cmVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZWQgUHJvZHVjdHN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleD17OH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNhcnRDbGFzcz17Y2FydENsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3BhbkNsYXNzPXtzcGFuQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgIGVuZEluZGV4PXs4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FydENsYXNzPXtjYXJ0Q2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcGFuQ2xhc3M9e3NwYW5DbGFzc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRvb2xzXCI+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWEgc3JjPXtiYW5uZXJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Byb2R1Y3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vbGF5b3V0cy9GYXNoaW9uL0NvbXBvbmVudHMvQmFubmVyXCI7XG5pbXBvcnQgQ29sbGVjdGlvbkJhbm5lciBmcm9tIFwiLi9sYXlvdXRzL0Zhc2hpb24vQ29tcG9uZW50cy9Db2xsZWN0aW9uLUJhbm5lclwiO1xuaW1wb3J0IFRvcENvbGxlY3Rpb24xIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uMVwiO1xuaW1wb3J0IFRvcENvbGxlY3Rpb24yIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uMlwiO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gXCIuL2xheW91dHMvRmFzaGlvbi9Db21wb25lbnRzL1BhcmFsbGF4XCI7XG5pbXBvcnQgU3BlY2lhbFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Db2xsZWN0aW9ucy9UYWJDb2xsZWN0aW9uM1wiO1xuaW1wb3J0IFNlcnZpY2VMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL1NlcnZpY2Uvc2VydmljZTNcIjtcbmltcG9ydCBCbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9CbG9nL2Jsb2cxXCI7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9pbnN0YWdyYW0vaW5zdGFncmFtMVwiO1xuaW1wb3J0IExvZ29CbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vbG9nby1ibG9ja1wiO1xuaW1wb3J0IEhlYWRlck9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJzL2hlYWRlci1vbmVcIjtcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vaGVscGVycy9hcG9sbG8vYXBvbGxvXCI7XG5pbXBvcnQgeyBQcm9kdWN0NCwgUHJvZHVjdDUsIFByb2R1Y3Q2IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjcmlwdFwiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vUGFyYWdyYXBoXCI7XG5pbXBvcnQgTW9kYWxDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsXCI7XG5pbXBvcnQgSGVsbWV0IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcbmltcG9ydCBmYXZpY29uIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLzEucG5nXCI7XG5pbXBvcnQgTWFzdGVyRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlcnMvY29tbW9uL01hc3RlckZvb3RlclwiO1xuXG5jb25zdCBGYXNoaW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9e2Zhdmljb24gPyBmYXZpY29uIDogXCJcIn0gLz5cbiAgICAgIDwvSGVsbWV0PlxuICAgICAgPE1vZGFsQ29tcG9uZW50IC8+XG4gICAgICA8SGVhZGVyT25lIGxvZ29OYW1lPXtcImxvZ28ucG5nXCJ9IHRvcENsYXNzPVwidG9wLWhlYWRlclwiIC8+XG4gICAgICA8QmFubmVyIC8+XG4gICAgICA8U2VydmljZUxheW91dCBzZWN0aW9uQ2xhc3M9XCJib3JkZXItc2VjdGlvbiBzbWFsbC1zZWN0aW9uXCIgLz5cbiAgICAgIHsvKiA8Q29sbGVjdGlvbkJhbm5lciAvPiAqL31cbiAgICAgIDxQYXJhZ3JhcGhcbiAgICAgICAgdGl0bGU9XCJ0aXRsZTEgc2VjdGlvbi10LXNwYWNlXCJcbiAgICAgICAgaW5uZXI9XCJ0aXRsZS1pbm5lcjFcIlxuICAgICAgICBockNsYXNzPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgICB7LyogPFRvcENvbGxlY3Rpb25cbiAgICAgICAgbm9UaXRsZT1cIm51bGxcIlxuICAgICAgICBiYWNrSW1hZ2U9e3RydWV9XG4gICAgICAgIHR5cGU9XCJmYXNoaW9uXCJcbiAgICAgICAgdGl0bGU9XCJ0b3AgY29sbGVjdGlvblwiXG4gICAgICAgIHN1YnRpdGxlPVwic3BlY2lhbCBvZmZlclwiXG4gICAgICAgIHByb2R1Y3RTbGlkZXI9e1Byb2R1Y3Q0fVxuICAgICAgICBkZXNpZ25DbGFzcz1cInNlY3Rpb24tYi1zcGFjZSBwLXQtMCByYXRpb19hc29zXCJcbiAgICAgICAgbm9TbGlkZXI9XCJmYWxzZVwiXG4gICAgICAgIGNhcnRDbGFzcz1cImNhcnQtaW5mbyBjYXJ0LXdyYXBcIlxuICAgICAgLz4gKi99XG5cbiAgICAgIDxUb3BDb2xsZWN0aW9uMVxuICAgICAgICBub1RpdGxlPVwibnVsbFwiXG4gICAgICAgIGJhY2tJbWFnZT17dHJ1ZX1cbiAgICAgICAgdHlwZT1cImJlYXV0eVwiXG4gICAgICAgIGlubmVyQ2xhc3M9XCJ0aXRsZTFcIlxuICAgICAgICBpbm5lcj1cInRpdGxlLWlubmVyMVwiXG4gICAgICAgIHByb2R1Y3RTbGlkZXI9e1Byb2R1Y3Q1fVxuICAgICAgICB0aXRsZT1cIk5ldyBQcm9kdWN0c1wiXG4gICAgICAgIHN1YnRpdGxlPVwic3BlY2lhbCBvZmZlclwiXG4gICAgICAgIHByb2R1Y3REZXRhaWw9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAgIGRlc2lnbkNsYXNzPVwic2VjdGlvbi1iLXNwYWNlIHJhdGlvX3NxdWFyZVwiXG4gICAgICAgIG5vU2xpZGVyPVwidHJ1ZVwiXG4gICAgICAgIGNhcnRDbGFzcz1cImNhcnQtYm94XCJcbiAgICAgIC8+XG5cblxuICAgICAgPFBhcmFsbGF4IC8+XG4gICAgICA8U3BlY2lhbFByb2R1Y3RzXG4gICAgICAgIHR5cGU9XCJmYXNoaW9uXCJcbiAgICAgICAgYmFja0ltYWdlPXt0cnVlfVxuICAgICAgICBwcm9kdWN0U2xpZGVyPXtQcm9kdWN0NH1cbiAgICAgICAgbGluZT17dHJ1ZX1cbiAgICAgICAgdGl0bGU9XCJ0aXRsZTEgc2VjdGlvbi10LXNwYWNlXCJcbiAgICAgICAgaW5uZXI9XCJ0aXRsZS1pbm5lcjFcIlxuICAgICAgICBkZXNpZ25DbGFzcz1cInNlY3Rpb24tYi1zcGFjZSBwLXQtMCByYXRpb19hc29zXCJcbiAgICAgICAgbm9TbGlkZXI9XCJ0cnVlXCJcbiAgICAgICAgY2FydENsYXNzPVwiY2FydC1pbmZvIGNhcnQtd3JhcFwiXG4gICAgICAvPlxuICAgICAgey8qIDxCbG9nIHR5cGU9XCJmYXNoaW9uXCIgdGl0bGU9XCJ0aXRsZTFcIiBpbm5lcj1cInRpdGxlLWlubmVyMVwiIC8+ICovfVxuICAgICAgPEluc3RhZ3JhbSB0eXBlPVwiZmFzaGlvblwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tYi1zcGFjZVwiPlxuICAgICAgICA8TG9nb0Jsb2NrIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNYXN0ZXJGb290ZXJcbiAgICAgICAgZm9vdGVyQ2xhc3M9e2Bmb290ZXItbGlnaHRgfVxuICAgICAgICBmb290ZXJMYXlPdXQ9e1wibGlnaHQtbGF5b3V0IHVwcGVyLWZvb3RlclwifVxuICAgICAgICBmb290ZXJTZWN0aW9uPXtcInNtYWxsLXNlY3Rpb24gYm9yZGVyLXNlY3Rpb24gYm9yZGVyLXRvcC0wXCJ9XG4gICAgICAgIGJlbG93U2VjdGlvbj17XCJzZWN0aW9uLWItc3BhY2UgbGlnaHQtbGF5b3V0XCJ9XG4gICAgICAgIG5ld0xhdHRlcj17dHJ1ZX1cbiAgICAgICAgbG9nb05hbWU9e1wibG9nby5wbmdcIn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKEZhc2hpb24pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lci01ZTQ0MjI1NmFiZGZjZGZhNDY5ZjFiNWIyODI5MTU2MC5qcGdcIjsiXSwic291cmNlUm9vdCI6IiJ9