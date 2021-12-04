webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/Collections/TabCollection1.js":
/*!*********************************************************!*\
  !*** ./components/common/Collections/TabCollection1.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-box/ProductBox1 */ "./components/common/product-box/ProductBox1.js");
/* harmony import */ var _helpers_cart_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/cart/index */ "./helpers/cart/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/wishlist/WishlistContext */ "./helpers/wishlist/WishlistContext.js");
/* harmony import */ var _PostLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PostLoader */ "./components/common/PostLoader.js");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/Compare/CompareContext */ "./helpers/Compare/CompareContext.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var _public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/assets/images/empty-search.jpg */ "./public/assets/images/empty-search.jpg");
/* harmony import */ var _public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\common\\Collections\\TabCollection1.js",
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













var GET_PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_4__["default"])(_templateObject());

var TabContent = function TabContent(_ref) {
  _s();

  var data = _ref.data,
      loading = _ref.loading,
      startIndex = _ref.startIndex,
      endIndex = _ref.endIndex,
      cartClass = _ref.cartClass,
      backImage = _ref.backImage;
  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_cart_index__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var wishListContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_8__["WishlistContext"]);
  var compareContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_10__["CompareContext"]);
  var curContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_11__["CurrencyContext"]);
  var currency = curContext.state;
  var quantity = context.quantity;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "no-slider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? data && data.products && data.products.items && data.products.items.length === 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Media"], {
    src: _public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    className: "img-fluid mb-4 mx-auto",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, "Your Cart is Empty")), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "Explore more shortlist some items.")))) : __jsx("div", {
    className: "row mx-0 margin-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }))) : data && data.products.items.slice(startIndex, endIndex).map(function (product, i) {
    return __jsx(_product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      product: product,
      symbol: currency.symbol,
      addCompare: function addCompare() {
        return compareContext.addToCompare(product);
      },
      addCart: function addCart() {
        return context.addToCart(product, quantity);
      },
      addWishlist: function addWishlist() {
        return wishListContext.addToWish(product);
      },
      cartClass: cartClass,
      backImage: backImage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    });
  }));
};

_s(TabContent, "KOx6edw6jvmrta5q/QYvkNeRYGg=");

_c = TabContent;

var SpecialProducts = function SpecialProducts(_ref2) {
  _s2();

  var type = _ref2.type,
      fluid = _ref2.fluid,
      designClass = _ref2.designClass,
      cartClass = _ref2.cartClass,
      heading = _ref2.heading,
      noTitle = _ref2.noTitle,
      title = _ref2.title,
      inner = _ref2.inner,
      line = _ref2.line,
      hrClass = _ref2.hrClass,
      backImage = _ref2.backImage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(type),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_cart_index__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var wishListContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_8__["WishlistContext"]);
  var compareContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_10__["CompareContext"]);
  var curContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_11__["CurrencyContext"]);
  var currency = curContext.state;
  var quantity = context.quantity;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: activeTab,
      indexFrom: 0,
      limit: 8
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: designClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    fluid: fluid,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, noTitle ? "" : __jsx("div", {
    className: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, heading), __jsx("h2", {
    className: inner,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, "special products"), line ? __jsx("div", {
    className: "line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }) : hrClass ? __jsx("hr", {
    role: "tournament6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }) : ""), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    className: "theme-tab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabList"], {
    className: "tabs tab-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    className: activeTab == type ? "active" : "",
    onClick: function onClick() {
      return setActiveTab(type);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  }, "NEW ARRIVAL"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    className: activeTab == "furniture" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab("furniture");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  }, "FEATURED", " ")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    startIndex: 0,
    endIndex: 8,
    cartClass: cartClass,
    backImage: backImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    startIndex: 0,
    endIndex: 8,
    cartClass: cartClass,
    backImage: backImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    startIndex: 0,
    endIndex: 8,
    cartClass: cartClass,
    backImage: backImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }))))));
};

_s2(SpecialProducts, "gmGMig+I4rqp1niEks4WkPs1o9w=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c2 = SpecialProducts;
/* harmony default export */ __webpack_exports__["default"] = (SpecialProducts);

var _c, _c2;

$RefreshReg$(_c, "TabContent");
$RefreshReg$(_c2, "SpecialProducts");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQ29sbGVjdGlvbnMvVGFiQ29sbGVjdGlvbjEuanMiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RTIiwiZ3FsIiwiVGFiQ29udGVudCIsImRhdGEiLCJsb2FkaW5nIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiY2FydENsYXNzIiwiYmFja0ltYWdlIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsIndpc2hMaXN0Q29udGV4dCIsIldpc2hsaXN0Q29udGV4dCIsImNvbXBhcmVDb250ZXh0IiwiQ29tcGFyZUNvbnRleHQiLCJjdXJDb250ZXh0IiwiQ3VycmVuY3lDb250ZXh0IiwiY3VycmVuY3kiLCJzdGF0ZSIsInF1YW50aXR5IiwicHJvZHVjdHMiLCJpdGVtcyIsImxlbmd0aCIsImVtcHR5U2VhcmNoIiwic2xpY2UiLCJtYXAiLCJwcm9kdWN0IiwiaSIsInN5bWJvbCIsImFkZFRvQ29tcGFyZSIsImFkZFRvQ2FydCIsImFkZFRvV2lzaCIsIlNwZWNpYWxQcm9kdWN0cyIsInR5cGUiLCJmbHVpZCIsImRlc2lnbkNsYXNzIiwiaGVhZGluZyIsIm5vVGl0bGUiLCJ0aXRsZSIsImlubmVyIiwibGluZSIsImhyQ2xhc3MiLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaW5kZXhGcm9tIiwibGltaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsMkRBQUgsbUJBQWxCOztBQWlDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQU9iO0FBQUE7O0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFM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RixFQWdDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFDRSxRQUFJLEVBQUVMLElBRFI7QUFFRSxXQUFPLEVBQUVDLE9BRlg7QUFHRSxjQUFVLEVBQUUsQ0FIZDtBQUlFLFlBQVEsRUFBRSxDQUpaO0FBS0UsYUFBUyxFQUFFRyxTQUxiO0FBTUUsYUFBUyxFQUFFQyxTQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWhDRixFQTBDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFDRSxRQUFJLEVBQUVMLElBRFI7QUFFRSxXQUFPLEVBQUVDLE9BRlg7QUFHRSxjQUFVLEVBQUUsQ0FIZDtBQUlFLFlBQVEsRUFBRSxDQUpaO0FBS0UsYUFBUyxFQUFFRyxTQUxiO0FBTUUsYUFBUyxFQUFFQyxTQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTFDRixDQWxCRixDQURGLENBREYsQ0FERjtBQThFRCxDQTNHRDs7SUFBTXlCLGU7VUFxQm9CYSw0RDs7O01BckJwQmIsZTtBQTZHU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTYzNzI2YTljMGFiYjgyYWQ2NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gXCJyZWFjdC10YWJzXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuLi9wcm9kdWN0LWJveC9Qcm9kdWN0Qm94MVwiO1xuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2NhcnQvaW5kZXhcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIE1lZGlhIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IFdpc2hsaXN0Q29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL3dpc2hsaXN0L1dpc2hsaXN0Q29udGV4dFwiO1xuaW1wb3J0IFBvc3RMb2FkZXIgZnJvbSBcIi4uL1Bvc3RMb2FkZXJcIjtcbmltcG9ydCB7IENvbXBhcmVDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvQ29tcGFyZS9Db21wYXJlQ29udGV4dFwiO1xuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0XCI7XG5pbXBvcnQgZW1wdHlTZWFyY2ggZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2VtcHR5LXNlYXJjaC5qcGdcIjtcblxuY29uc3QgR0VUX1BST0RVQ1RTID0gZ3FsYFxuICBxdWVyeSBwcm9kdWN0cygkdHlwZTogX0NhdGVnb3J5VHlwZSEsICRpbmRleEZyb206IEludCEsICRsaW1pdDogSW50ISkge1xuICAgIHByb2R1Y3RzKHR5cGU6ICR0eXBlLCBpbmRleEZyb206ICRpbmRleEZyb20sIGxpbWl0OiAkbGltaXQpIHtcbiAgICAgIGl0ZW1zIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgdHlwZVxuICAgICAgICBicmFuZFxuICAgICAgICBjYXRlZ29yeVxuICAgICAgICBwcmljZVxuICAgICAgICBuZXdcbiAgICAgICAgc3RvY2tcbiAgICAgICAgc2FsZVxuICAgICAgICBkaXNjb3VudFxuICAgICAgICB2YXJpYW50cyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBza3VcbiAgICAgICAgICBzaXplXG4gICAgICAgICAgY29sb3JcbiAgICAgICAgICBpbWFnZV9pZFxuICAgICAgICB9XG4gICAgICAgIGltYWdlcyB7XG4gICAgICAgICAgaW1hZ2VfaWRcbiAgICAgICAgICBpZFxuICAgICAgICAgIGFsdFxuICAgICAgICAgIHNyY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBUYWJDb250ZW50ID0gKHtcbiAgZGF0YSxcbiAgbG9hZGluZyxcbiAgc3RhcnRJbmRleCxcbiAgZW5kSW5kZXgsXG4gIGNhcnRDbGFzcyxcbiAgYmFja0ltYWdlLFxufSkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG4gIGNvbnN0IHdpc2hMaXN0Q29udGV4dCA9IHVzZUNvbnRleHQoV2lzaGxpc3RDb250ZXh0KTtcbiAgY29uc3QgY29tcGFyZUNvbnRleHQgPSB1c2VDb250ZXh0KENvbXBhcmVDb250ZXh0KTtcbiAgY29uc3QgY3VyQ29udGV4dCA9IHVzZUNvbnRleHQoQ3VycmVuY3lDb250ZXh0KTtcbiAgY29uc3QgY3VycmVuY3kgPSBjdXJDb250ZXh0LnN0YXRlO1xuICBjb25zdCBxdWFudGl0eSA9IGNvbnRleHQucXVhbnRpdHk7XG5cbiAgcmV0dXJuIChcbiAgICA8Um93IGNsYXNzTmFtZT1cIm5vLXNsaWRlclwiPlxuICAgICAgeyFkYXRhIHx8XG4gICAgICAhZGF0YS5wcm9kdWN0cyB8fFxuICAgICAgIWRhdGEucHJvZHVjdHMuaXRlbXMgfHxcbiAgICAgIGRhdGEucHJvZHVjdHMuaXRlbXMubGVuZ3RoID09PSAwIHx8XG4gICAgICBsb2FkaW5nID8gKFxuICAgICAgICBkYXRhICYmXG4gICAgICAgIGRhdGEucHJvZHVjdHMgJiZcbiAgICAgICAgZGF0YS5wcm9kdWN0cy5pdGVtcyAmJlxuICAgICAgICBkYXRhLnByb2R1Y3RzLml0ZW1zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGVtcHR5LWNhcnQtY2xzIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPE1lZGlhXG4gICAgICAgICAgICAgICAgICBzcmM9e2VtcHR5U2VhcmNofVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1iLTQgbXgtYXV0b1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Zb3VyIENhcnQgaXMgRW1wdHk8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxoND5FeHBsb3JlIG1vcmUgc2hvcnRsaXN0IHNvbWUgaXRlbXMuPC9oND5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteC0wIG1hcmdpbi1kZWZhdWx0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XG4gICAgICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLTZcIj5cbiAgICAgICAgICAgICAgPFBvc3RMb2FkZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtNlwiPlxuICAgICAgICAgICAgICA8UG9zdExvYWRlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XG4gICAgICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKSA6IChcbiAgICAgICAgZGF0YSAmJlxuICAgICAgICBkYXRhLnByb2R1Y3RzLml0ZW1zXG4gICAgICAgICAgLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxuICAgICAgICAgIC5tYXAoKHByb2R1Y3QsIGkpID0+IChcbiAgICAgICAgICAgIDxQcm9kdWN0SXRlbVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgIHN5bWJvbD17Y3VycmVuY3kuc3ltYm9sfVxuICAgICAgICAgICAgICBhZGRDb21wYXJlPXsoKSA9PiBjb21wYXJlQ29udGV4dC5hZGRUb0NvbXBhcmUocHJvZHVjdCl9XG4gICAgICAgICAgICAgIGFkZENhcnQ9eygpID0+IGNvbnRleHQuYWRkVG9DYXJ0KHByb2R1Y3QsIHF1YW50aXR5KX1cbiAgICAgICAgICAgICAgYWRkV2lzaGxpc3Q9eygpID0+IHdpc2hMaXN0Q29udGV4dC5hZGRUb1dpc2gocHJvZHVjdCl9XG4gICAgICAgICAgICAgIGNhcnRDbGFzcz17Y2FydENsYXNzfVxuICAgICAgICAgICAgICBiYWNrSW1hZ2U9e2JhY2tJbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICl9XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5jb25zdCBTcGVjaWFsUHJvZHVjdHMgPSAoe1xuICB0eXBlLFxuICBmbHVpZCxcbiAgZGVzaWduQ2xhc3MsXG4gIGNhcnRDbGFzcyxcbiAgaGVhZGluZyxcbiAgbm9UaXRsZSxcbiAgdGl0bGUsXG4gIGlubmVyLFxuICBsaW5lLFxuICBockNsYXNzLFxuICBiYWNrSW1hZ2UsXG59KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSh0eXBlKTtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xuICBjb25zdCB3aXNoTGlzdENvbnRleHQgPSB1c2VDb250ZXh0KFdpc2hsaXN0Q29udGV4dCk7XG4gIGNvbnN0IGNvbXBhcmVDb250ZXh0ID0gdXNlQ29udGV4dChDb21wYXJlQ29udGV4dCk7XG4gIGNvbnN0IGN1ckNvbnRleHQgPSB1c2VDb250ZXh0KEN1cnJlbmN5Q29udGV4dCk7XG4gIGNvbnN0IGN1cnJlbmN5ID0gY3VyQ29udGV4dC5zdGF0ZTtcbiAgY29uc3QgcXVhbnRpdHkgPSBjb250ZXh0LnF1YW50aXR5O1xuXG4gIHZhciB7IGxvYWRpbmcsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUUywge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgdHlwZTogYWN0aXZlVGFiLFxuICAgICAgaW5kZXhGcm9tOiAwLFxuICAgICAgbGltaXQ6IDgsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtkZXNpZ25DbGFzc30+XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ9e2ZsdWlkfT5cbiAgICAgICAgICB7bm9UaXRsZSA/IChcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpdGxlfT5cbiAgICAgICAgICAgICAgPGg0PntoZWFkaW5nfTwvaDQ+XG4gICAgICAgICAgICAgIHsvKiBleGNsdXNpdmUgcHJvZHVjdHMgKi99XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2lubmVyfT5zcGVjaWFsIHByb2R1Y3RzPC9oMj5cbiAgICAgICAgICAgICAge2xpbmUgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICkgOiBockNsYXNzID8gKFxuICAgICAgICAgICAgICAgIDxociByb2xlPVwidG91cm5hbWVudDZcIj48L2hyPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8VGFicyBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cbiAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cInRhYnMgdGFiLXRpdGxlXCI+XG4gICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PSB0eXBlID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKHR5cGUpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTkVXIEFSUklWQUxcbiAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PSBcImZ1cm5pdHVyZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKFwiZnVybml0dXJlXCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRkVBVFVSRUR7XCIgXCJ9XG4gICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICB7LyogPFRhYlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlVGFiID09IFwiZnVybml0dXJlXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJmdXJuaXR1cmVcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTUEVDSUFMXG4gICAgICAgICAgICAgIDwvVGFiPiAqL31cbiAgICAgICAgICAgIDwvVGFiTGlzdD5cblxuICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICA8VGFiQ29udGVudFxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICBzdGFydEluZGV4PXswfVxuICAgICAgICAgICAgICAgIGVuZEluZGV4PXs4fVxuICAgICAgICAgICAgICAgIGNhcnRDbGFzcz17Y2FydENsYXNzfVxuICAgICAgICAgICAgICAgIGJhY2tJbWFnZT17YmFja0ltYWdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgPFRhYkNvbnRlbnRcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleD17MH1cbiAgICAgICAgICAgICAgICBlbmRJbmRleD17OH1cbiAgICAgICAgICAgICAgICBjYXJ0Q2xhc3M9e2NhcnRDbGFzc31cbiAgICAgICAgICAgICAgICBiYWNrSW1hZ2U9e2JhY2tJbWFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgIDxUYWJDb250ZW50XG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg9ezB9XG4gICAgICAgICAgICAgICAgZW5kSW5kZXg9ezh9XG4gICAgICAgICAgICAgICAgY2FydENsYXNzPXtjYXJ0Q2xhc3N9XG4gICAgICAgICAgICAgICAgYmFja0ltYWdlPXtiYWNrSW1hZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVjaWFsUHJvZHVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9