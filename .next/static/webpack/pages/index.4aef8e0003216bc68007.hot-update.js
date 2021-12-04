webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/Collections/TabCollection1.js":
false,

/***/ "./components/common/Collections/TabCollection2.js":
/*!*********************************************************!*\
  !*** ./components/common/Collections/TabCollection2.js ***!
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


var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\common\\Collections\\TabCollection2.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(C_WorkSpace_Freelancer_nails_factory_multikart_react_all_in_one_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {\n    products(type: $type, indexFrom: $indexFrom, limit: $limit) {\n      items {\n        id\n        title\n        description\n        type\n        brand\n        category\n        price\n        stock\n        new\n        sale\n        discount\n        variants {\n          id\n          sku\n          size\n          color\n          image_id\n        }\n        images {\n          image_id\n          id\n          alt\n          src\n        }\n      }\n    }\n  }\n"]);

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
      cartClass = _ref.cartClass,
      startIndex = _ref.startIndex,
      endIndex = _ref.endIndex;
  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_cart_index__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var wishListContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_8__["WishlistContext"]);
  var compareContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_10__["CompareContext"]);
  var quantity = context.quantity;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "no-slider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? data && data.products && data.products.items && data.products.items.length === 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/images/empty-search.jpg",
    className: "img-fluid mb-4 mx-auto",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "Your Cart is Empty")), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, "Explore more shortlist some items.")))) : __jsx("div", {
    className: "row mx-0 margin-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }))) : data && data.products.items.slice(0, 8).map(function (product, i) {
    return __jsx(_product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_5__["default"], {
      product: product,
      key: i,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }
    });
  })));
};

_s(TabContent, "q1V2iZMPIIbjtJzGCAuK5xJt/9g=");

_c = TabContent;

var SpecialProducts = function SpecialProducts(_ref2) {
  _s2();

  var type = _ref2.type,
      designClass = _ref2.designClass,
      cartClass = _ref2.cartClass,
      noTitle = _ref2.noTitle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(type),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_cart_index__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var wishListContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_8__["WishlistContext"]);
  var compareContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_10__["CompareContext"]);
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
      lineNumber: 130,
      columnNumber: 5
    }
  }, noTitle ? "" : __jsx("div", {
    className: "title1 section-t-space",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "exclusive products"), __jsx("h2", {
    className: "title-inner1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, "special products")), __jsx("section", {
    className: designClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    className: "theme-tab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabList"], {
    className: "tabs tab-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
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
      lineNumber: 144,
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
      lineNumber: 150,
      columnNumber: 15
    }
  }, "FEATURED", " "), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    className: activeTab == "furniture" ? "active" : "",
    onClick: function onClick() {
      return setActiveTab("furniture");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, "SPECIAL")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    cartClass: cartClass,
    startIndex: 0,
    endIndex: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    cartClass: cartClass,
    startIndex: 0,
    endIndex: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, __jsx(TabContent, {
    data: data,
    loading: loading,
    cartClass: cartClass,
    startIndex: 0,
    endIndex: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  }))))));
};

_s2(SpecialProducts, "If4BMJZkXFmrm4e+2nFiek2/IEA=", false, function () {
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
/* harmony import */ var _components_common_Collections_TabCollection2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Collections/TabCollection2 */ "./components/common/Collections/TabCollection2.js");
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
  }), __jsx(_components_common_Collections_TabCollection2__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/***/ "./public/assets/images/empty-search.jpg":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQ29sbGVjdGlvbnMvVGFiQ29sbGVjdGlvbjIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUUyIsImdxbCIsIlRhYkNvbnRlbnQiLCJkYXRhIiwibG9hZGluZyIsImNhcnRDbGFzcyIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJ3aXNoTGlzdENvbnRleHQiLCJXaXNobGlzdENvbnRleHQiLCJjb21wYXJlQ29udGV4dCIsIkNvbXBhcmVDb250ZXh0IiwicXVhbnRpdHkiLCJwcm9kdWN0cyIsIml0ZW1zIiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJwcm9kdWN0IiwiaSIsImFkZFRvQ29tcGFyZSIsImFkZFRvQ2FydCIsImFkZFRvV2lzaCIsIlNwZWNpYWxQcm9kdWN0cyIsInR5cGUiLCJkZXNpZ25DbGFzcyIsIm5vVGl0bGUiLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaW5kZXhGcm9tIiwibGltaXQiLCJGYXNoaW9uIiwiZmF2aWNvbiIsIlByb2R1Y3Q1IiwiUHJvZHVjdDQiLCJ3aXRoQXBvbGxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsMkRBQUgsbUJBQWxCOztBQWlDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF3RDtBQUFBOztBQUFBLE1BQXJEQyxJQUFxRCxRQUFyREEsSUFBcUQ7QUFBQSxNQUEvQ0MsT0FBK0MsUUFBL0NBLE9BQStDO0FBQUEsTUFBdENDLFNBQXNDLFFBQXRDQSxTQUFz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Z0JBQVksRUFBRSw4QkFKaEI7QUFLRSxhQUFTLEVBQUUsSUFMYjtBQU1FLFlBQVEsRUFBRSxVQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1REYsQ0FERjtBQXVFRCxDQXhFRDs7S0FBTUgsTztBQTBFUyxxRUFBQUksMEVBQVUsQ0FBQ0osT0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YWVmOGUwMDAzMjE2YmM2ODAwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tIFwicmVhY3QtdGFic1wiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vcHJvZHVjdC1ib3gvUHJvZHVjdEJveDFcIjtcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2NhcnQvaW5kZXhcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IFdpc2hsaXN0Q29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL3dpc2hsaXN0L1dpc2hsaXN0Q29udGV4dFwiO1xyXG5pbXBvcnQgUG9zdExvYWRlciBmcm9tIFwiLi4vUG9zdExvYWRlclwiO1xyXG5pbXBvcnQgeyBDb21wYXJlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL0NvbXBhcmUvQ29tcGFyZUNvbnRleHRcIjtcclxuXHJcbmNvbnN0IEdFVF9QUk9EVUNUUyA9IGdxbGBcclxuICBxdWVyeSBwcm9kdWN0cygkdHlwZTogX0NhdGVnb3J5VHlwZSEsICRpbmRleEZyb206IEludCEsICRsaW1pdDogSW50ISkge1xyXG4gICAgcHJvZHVjdHModHlwZTogJHR5cGUsIGluZGV4RnJvbTogJGluZGV4RnJvbSwgbGltaXQ6ICRsaW1pdCkge1xyXG4gICAgICBpdGVtcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdHlwZVxyXG4gICAgICAgIGJyYW5kXHJcbiAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICBwcmljZVxyXG4gICAgICAgIHN0b2NrXHJcbiAgICAgICAgbmV3XHJcbiAgICAgICAgc2FsZVxyXG4gICAgICAgIGRpc2NvdW50XHJcbiAgICAgICAgdmFyaWFudHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNrdVxyXG4gICAgICAgICAgc2l6ZVxyXG4gICAgICAgICAgY29sb3JcclxuICAgICAgICAgIGltYWdlX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlcyB7XHJcbiAgICAgICAgICBpbWFnZV9pZFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGFsdFxyXG4gICAgICAgICAgc3JjXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGFiQ29udGVudCA9ICh7IGRhdGEsIGxvYWRpbmcsIGNhcnRDbGFzcywgc3RhcnRJbmRleCwgZW5kSW5kZXggfSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuICBjb25zdCB3aXNoTGlzdENvbnRleHQgPSB1c2VDb250ZXh0KFdpc2hsaXN0Q29udGV4dCk7XHJcbiAgY29uc3QgY29tcGFyZUNvbnRleHQgPSB1c2VDb250ZXh0KENvbXBhcmVDb250ZXh0KTtcclxuICBjb25zdCBxdWFudGl0eSA9IGNvbnRleHQucXVhbnRpdHk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cIm5vLXNsaWRlclwiPlxyXG4gICAgICAgIHshZGF0YSB8fFxyXG4gICAgICAgICFkYXRhLnByb2R1Y3RzIHx8XHJcbiAgICAgICAgIWRhdGEucHJvZHVjdHMuaXRlbXMgfHxcclxuICAgICAgICBkYXRhLnByb2R1Y3RzLml0ZW1zLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICAgIGxvYWRpbmcgPyAoXHJcbiAgICAgICAgICBkYXRhICYmXHJcbiAgICAgICAgICBkYXRhLnByb2R1Y3RzICYmXHJcbiAgICAgICAgICBkYXRhLnByb2R1Y3RzLml0ZW1zICYmXHJcbiAgICAgICAgICBkYXRhLnByb2R1Y3RzLml0ZW1zLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGVtcHR5LWNhcnQtY2xzIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Avc3RhdGljL2ltYWdlcy9lbXB0eS1zZWFyY2guanBnYH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItNCBteC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Zb3VyIENhcnQgaXMgRW1wdHk8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGg0PkV4cGxvcmUgbW9yZSBzaG9ydGxpc3Qgc29tZSBpdGVtcy48L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtMCBtYXJnaW4tZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgPFBvc3RMb2FkZXIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICA8UG9zdExvYWRlciAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBkYXRhICYmXHJcbiAgICAgICAgICBkYXRhLnByb2R1Y3RzLml0ZW1zXHJcbiAgICAgICAgICAgIC5zbGljZSgwLCA4KVxyXG4gICAgICAgICAgICAubWFwKChwcm9kdWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgYWRkQ29tcGFyZT17KCkgPT4gY29tcGFyZUNvbnRleHQuYWRkVG9Db21wYXJlKHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgYWRkQ2FydD17KCkgPT4gY29udGV4dC5hZGRUb0NhcnQocHJvZHVjdCwgcXVhbnRpdHkpfVxyXG4gICAgICAgICAgICAgICAgYWRkV2lzaGxpc3Q9eygpID0+IHdpc2hMaXN0Q29udGV4dC5hZGRUb1dpc2gocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICBjYXJ0Q2xhc3M9e2NhcnRDbGFzc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNwZWNpYWxQcm9kdWN0cyA9ICh7IHR5cGUsIGRlc2lnbkNsYXNzLCBjYXJ0Q2xhc3MsIG5vVGl0bGUgfSkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSh0eXBlKTtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgY29uc3Qgd2lzaExpc3RDb250ZXh0ID0gdXNlQ29udGV4dChXaXNobGlzdENvbnRleHQpO1xyXG4gIGNvbnN0IGNvbXBhcmVDb250ZXh0ID0gdXNlQ29udGV4dChDb21wYXJlQ29udGV4dCk7XHJcbiAgY29uc3QgcXVhbnRpdHkgPSBjb250ZXh0LnF1YW50aXR5O1xyXG5cclxuICB2YXIgeyBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVFMsIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB0eXBlOiBhY3RpdmVUYWIsXHJcbiAgICAgIGluZGV4RnJvbTogMCxcclxuICAgICAgbGltaXQ6IDgsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge25vVGl0bGUgPyAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUxIHNlY3Rpb24tdC1zcGFjZVwiPlxyXG4gICAgICAgICAgPGg0PmV4Y2x1c2l2ZSBwcm9kdWN0czwvaDQ+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUtaW5uZXIxXCI+c3BlY2lhbCBwcm9kdWN0czwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Rlc2lnbkNsYXNzfT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFRhYnMgY2xhc3NOYW1lPVwidGhlbWUtdGFiXCI+XHJcbiAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cInRhYnMgdGFiLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVUYWIgPT0gdHlwZSA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKHR5cGUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE5FVyBBUlJJVkFMXHJcbiAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVUYWIgPT0gXCJmdXJuaXR1cmVcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKFwiZnVybml0dXJlXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEZFQVRVUkVEe1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlVGFiID09IFwiZnVybml0dXJlXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYihcImZ1cm5pdHVyZVwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTUEVDSUFMXHJcbiAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICA8VGFiQ29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBjYXJ0Q2xhc3M9e2NhcnRDbGFzc31cclxuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICBlbmRJbmRleD17OH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgPFRhYkNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgY2FydENsYXNzPXtjYXJ0Q2xhc3N9XHJcbiAgICAgICAgICAgICAgICBzdGFydEluZGV4PXswfVxyXG4gICAgICAgICAgICAgICAgZW5kSW5kZXg9ezh9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDxUYWJDb250ZW50XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGNhcnRDbGFzcz17Y2FydENsYXNzfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleD17MH1cclxuICAgICAgICAgICAgICAgIGVuZEluZGV4PXs4fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVjaWFsUHJvZHVjdHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vbGF5b3V0cy9GYXNoaW9uL0NvbXBvbmVudHMvQmFubmVyXCI7XG5pbXBvcnQgQ29sbGVjdGlvbkJhbm5lciBmcm9tIFwiLi9sYXlvdXRzL0Zhc2hpb24vQ29tcG9uZW50cy9Db2xsZWN0aW9uLUJhbm5lclwiO1xuaW1wb3J0IFRvcENvbGxlY3Rpb24xIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uMVwiO1xuaW1wb3J0IFRvcENvbGxlY3Rpb24yIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uMlwiO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gXCIuL2xheW91dHMvRmFzaGlvbi9Db21wb25lbnRzL1BhcmFsbGF4XCI7XG5pbXBvcnQgU3BlY2lhbFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Db2xsZWN0aW9ucy9UYWJDb2xsZWN0aW9uMlwiO1xuaW1wb3J0IFNlcnZpY2VMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL1NlcnZpY2Uvc2VydmljZTNcIjtcbmltcG9ydCBCbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9CbG9nL2Jsb2cxXCI7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9pbnN0YWdyYW0vaW5zdGFncmFtMVwiO1xuaW1wb3J0IExvZ29CbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vbG9nby1ibG9ja1wiO1xuaW1wb3J0IEhlYWRlck9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJzL2hlYWRlci1vbmVcIjtcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vaGVscGVycy9hcG9sbG8vYXBvbGxvXCI7XG5pbXBvcnQgeyBQcm9kdWN0NCwgUHJvZHVjdDUsIFByb2R1Y3Q2IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjcmlwdFwiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vUGFyYWdyYXBoXCI7XG5pbXBvcnQgTW9kYWxDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL01vZGFsXCI7XG5pbXBvcnQgSGVsbWV0IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcbmltcG9ydCBmYXZpY29uIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLzEucG5nXCI7XG5pbXBvcnQgTWFzdGVyRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlcnMvY29tbW9uL01hc3RlckZvb3RlclwiO1xuXG5jb25zdCBGYXNoaW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9e2Zhdmljb24gPyBmYXZpY29uIDogXCJcIn0gLz5cbiAgICAgIDwvSGVsbWV0PlxuICAgICAgPE1vZGFsQ29tcG9uZW50IC8+XG4gICAgICA8SGVhZGVyT25lIGxvZ29OYW1lPXtcImxvZ28ucG5nXCJ9IHRvcENsYXNzPVwidG9wLWhlYWRlclwiIC8+XG4gICAgICA8QmFubmVyIC8+XG4gICAgICA8U2VydmljZUxheW91dCBzZWN0aW9uQ2xhc3M9XCJib3JkZXItc2VjdGlvbiBzbWFsbC1zZWN0aW9uXCIgLz5cbiAgICAgIHsvKiA8Q29sbGVjdGlvbkJhbm5lciAvPiAqL31cbiAgICAgIDxQYXJhZ3JhcGhcbiAgICAgICAgdGl0bGU9XCJ0aXRsZTEgc2VjdGlvbi10LXNwYWNlXCJcbiAgICAgICAgaW5uZXI9XCJ0aXRsZS1pbm5lcjFcIlxuICAgICAgICBockNsYXNzPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgICB7LyogPFRvcENvbGxlY3Rpb25cbiAgICAgICAgbm9UaXRsZT1cIm51bGxcIlxuICAgICAgICBiYWNrSW1hZ2U9e3RydWV9XG4gICAgICAgIHR5cGU9XCJmYXNoaW9uXCJcbiAgICAgICAgdGl0bGU9XCJ0b3AgY29sbGVjdGlvblwiXG4gICAgICAgIHN1YnRpdGxlPVwic3BlY2lhbCBvZmZlclwiXG4gICAgICAgIHByb2R1Y3RTbGlkZXI9e1Byb2R1Y3Q0fVxuICAgICAgICBkZXNpZ25DbGFzcz1cInNlY3Rpb24tYi1zcGFjZSBwLXQtMCByYXRpb19hc29zXCJcbiAgICAgICAgbm9TbGlkZXI9XCJmYWxzZVwiXG4gICAgICAgIGNhcnRDbGFzcz1cImNhcnQtaW5mbyBjYXJ0LXdyYXBcIlxuICAgICAgLz4gKi99XG5cbiAgICAgIDxUb3BDb2xsZWN0aW9uMVxuICAgICAgICBub1RpdGxlPVwibnVsbFwiXG4gICAgICAgIGJhY2tJbWFnZT17dHJ1ZX1cbiAgICAgICAgdHlwZT1cImJlYXV0eVwiXG4gICAgICAgIGlubmVyQ2xhc3M9XCJ0aXRsZTFcIlxuICAgICAgICBpbm5lcj1cInRpdGxlLWlubmVyMVwiXG4gICAgICAgIHByb2R1Y3RTbGlkZXI9e1Byb2R1Y3Q1fVxuICAgICAgICB0aXRsZT1cIk5ldyBQcm9kdWN0c1wiXG4gICAgICAgIHN1YnRpdGxlPVwic3BlY2lhbCBvZmZlclwiXG4gICAgICAgIHByb2R1Y3REZXRhaWw9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAgIGRlc2lnbkNsYXNzPVwic2VjdGlvbi1iLXNwYWNlIHJhdGlvX3NxdWFyZVwiXG4gICAgICAgIG5vU2xpZGVyPVwidHJ1ZVwiXG4gICAgICAgIGNhcnRDbGFzcz1cImNhcnQtYm94XCJcbiAgICAgIC8+XG5cblxuICAgICAgPFBhcmFsbGF4IC8+XG4gICAgICA8U3BlY2lhbFByb2R1Y3RzXG4gICAgICAgIHR5cGU9XCJmYXNoaW9uXCJcbiAgICAgICAgYmFja0ltYWdlPXt0cnVlfVxuICAgICAgICBwcm9kdWN0U2xpZGVyPXtQcm9kdWN0NH1cbiAgICAgICAgbGluZT17dHJ1ZX1cbiAgICAgICAgdGl0bGU9XCJ0aXRsZTEgc2VjdGlvbi10LXNwYWNlXCJcbiAgICAgICAgaW5uZXI9XCJ0aXRsZS1pbm5lcjFcIlxuICAgICAgICBkZXNpZ25DbGFzcz1cInNlY3Rpb24tYi1zcGFjZSBwLXQtMCByYXRpb19hc29zXCJcbiAgICAgICAgbm9TbGlkZXI9XCJ0cnVlXCJcbiAgICAgICAgY2FydENsYXNzPVwiY2FydC1pbmZvIGNhcnQtd3JhcFwiXG4gICAgICAvPlxuICAgICAgey8qIDxCbG9nIHR5cGU9XCJmYXNoaW9uXCIgdGl0bGU9XCJ0aXRsZTFcIiBpbm5lcj1cInRpdGxlLWlubmVyMVwiIC8+ICovfVxuICAgICAgPEluc3RhZ3JhbSB0eXBlPVwiZmFzaGlvblwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tYi1zcGFjZVwiPlxuICAgICAgICA8TG9nb0Jsb2NrIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNYXN0ZXJGb290ZXJcbiAgICAgICAgZm9vdGVyQ2xhc3M9e2Bmb290ZXItbGlnaHRgfVxuICAgICAgICBmb290ZXJMYXlPdXQ9e1wibGlnaHQtbGF5b3V0IHVwcGVyLWZvb3RlclwifVxuICAgICAgICBmb290ZXJTZWN0aW9uPXtcInNtYWxsLXNlY3Rpb24gYm9yZGVyLXNlY3Rpb24gYm9yZGVyLXRvcC0wXCJ9XG4gICAgICAgIGJlbG93U2VjdGlvbj17XCJzZWN0aW9uLWItc3BhY2UgbGlnaHQtbGF5b3V0XCJ9XG4gICAgICAgIG5ld0xhdHRlcj17dHJ1ZX1cbiAgICAgICAgbG9nb05hbWU9e1wibG9nby5wbmdcIn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKEZhc2hpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==