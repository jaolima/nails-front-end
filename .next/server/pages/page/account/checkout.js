module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/page/account/checkout": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/page/account/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/common/widgets/breadcrubs.js":
/*!*************************************************!*\
  !*** ./components/common/widgets/breadcrubs.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\common\\widgets\\breadcrubs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Breadcrubs = ({
  title,
  parent,
  subTitle
}) => {
  return __jsx("div", {
    className: "breadcrumb-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "page-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 15
    }
  }, title))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("nav", {
    "aria-label": "breadcrumb",
    className: "theme-breadcrumb",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 19
    }
  }, parent)), __jsx("li", {
    className: "breadcrumb-item",
    "aria-current": "page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, title), subTitle === undefined ? "" : __jsx("li", {
    className: "breadcrumb-item active",
    "aria-current": "page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, subTitle)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Breadcrubs);

/***/ }),

/***/ "./components/constant/i18n.js":
/*!*************************************!*\
  !*** ./components/constant/i18n.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "i18next");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-browser-languagedetector */ "i18next-browser-languagedetector");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);



i18next__WEBPACK_IMPORTED_MODULE_0___default.a.use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1___default.a).use(react_i18next__WEBPACK_IMPORTED_MODULE_2__["initReactI18next"]).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'topbar_title': 'Welcome to Our store Multikart',
        'call_us': 'Call Us',
        'Home': 'Home',
        'features': 'features',
        'new': 'new',
        "Blogs": "Blogs",
        'blog_left_sidebar': 'left sidebar',
        'blog_right_sidebar': 'right sidebar',
        'blog_detail': 'blog detail',
        'category_left_sidebar': 'left sidebar',
        'category_right_sidebar': 'right sidebar',
        'category_no_sidebar': 'no sidebar',
        'category_metro': 'metro',
        'category_full_width': 'full width',
        'Products': 'Products',
        'left_sidebar': 'left sidebar',
        'right_sidebar': 'right sidebar',
        'no_sidebar': 'no sidebar',
        'three_col_thumbnail_left': 'Thumbnail left',
        'three_col_thumbnail_right': 'Thumbnail right',
        'thumbnail_below': 'thumbnail below',
        'accordian_details': 'accordian details',
        'thumbnail_left': 'image left',
        'thumbnail_right': 'image right',
        'vertical_tab': 'vertical tab',
        'Pages': 'Pages',
        'about_us': 'about us',
        'lookbook': 'lookbook',
        'login': 'login',
        'register': 'register',
        'logout': 'Logout',
        'search': 'search',
        'wishlist': 'wishlist',
        'cart': 'cart',
        'collection': 'collection',
        'forget_password': 'forget password',
        'contact': 'contact',
        'checkout': 'checkout',
        'compare': 'compare',
        'order_success': 'order_success',
        'dashboard': 'Dashboard',
        'FAQ': 'FAQ',
        'Shop': 'Shop',
        'mens_fashion': 'mens fashion',
        'top': 'top',
        'bottom': 'bottom',
        'ethic_wear': 'ethic wear',
        'sports_wear': 'sports wear',
        'shirts': 'shirts',
        'women_fashion': 'womens fashion',
        'dresses': 'dresses',
        'skirts': 'skirts',
        'westarn_wear': 'westarn wear',
        'ethnic_wear': 'ethnic wear',
        'sport_wear': 'aport wear',
        'bottom_wear': 'bottom wear',
        'kids_fashion': 'kidss fashion',
        'accessories': 'Accessories',
        'fashion_jewellery': 'Fashion Jewellery',
        'caps_and_hats': 'caps and hats',
        'precious_jewellery': 'precious jewellery',
        'necklaces': 'necklaces',
        'earrings': 'earrings',
        'rings_wrist_wear': 'rings & wrist wear',
        'men_accessories': 'mens accessories',
        'ties': 'ties',
        'cufflinks': 'cufflinks',
        'pockets_squares': 'pockets squares',
        'helmets': 'helmets',
        'scarves': 'scarves',
        'phone_cases': 'phone cases',
        'my_account': 'My Account',
        'fashion': 'Fashion',
        'beauty': 'Beauty',
        'electronic': 'Electronic',
        'furniture': 'Furniture',
        'kids': 'Kids',
        'pets': 'Pets',
        'vegetables': 'Vegetables',
        'watch': 'Watch',
        'theme_elements': 'theme elements',
        'element_title': 'element title',
        'collection_banner': 'collection banner',
        'home_slider': 'home slider',
        'category': 'category',
        'service': 'service',
        'image_size_ratio': 'image size ratio',
        'product_elements': 'product elements',
        'product_box': 'product box',
        'product_slider': 'product slider',
        'no_slider': 'no slider',
        'multi_slider': 'multi slider',
        'tab': 'tab',
        'email_template': 'email template',
        'portfolio': 'portfolio',
        'portfolio_grid_2': 'portfolio grid 2',
        'portfolio_grid_3': 'portfolio grid 3',
        'portfolio_grid_4': 'portfolio grid 4',
        'portfolio_masonary_2': 'masonary 2',
        'portfolio_masonary_3': 'masonary 3',
        'portfolio_masonary_4': 'masonary 4',
        'portfolio_masonary_full': 'masonary full width'
      }
    },
    fn: {
      translations: {
        'topbar_title': 'Bienvenue dans notre magasin {theme_name}',
        'call_us': 'Appelez nous',
        'Home': 'maison',
        'features': 'fonctionnalités',
        'new': 'Nouveau',
        'blog': 'bloguer',
        'blog_left_sidebar': 'barre latérale gauche',
        'blog_right_sidebar': 'barre latérale droite',
        'blog_detail': 'détail du blog',
        'category_left_sidebar': 'barre latérale gauche',
        'category_right_sidebar': 'barre latérale droite',
        'category_no_sidebar': 'sans encadré',
        'category_metro': 'métro',
        'category_full_width': 'pleine largeur',
        'products': 'des produits',
        'left_sidebar': 'Barre latérale degauche',
        'right_sidebar': 'Barre latérale droite',
        'no_sidebar': 'pas de barre latérale',
        'three_col_thumbnail_left': '3 vignettes gauche',
        'three_col_thumbnail_right': '3 vignette droite',
        'thumbnail_below': 'vignette ci_dessous',
        'accordian_details': 'détails accordéon',
        'thumbnail_left': 'vignette à gauche',
        'thumbnail_right': 'vignette droite',
        'vertical_tab': 'onglet vertical',
        'Pages': 'des pages',
        'about_us': 'à propos de nous',
        'lookbook': 'lookbook',
        'login': 'sidentifier',
        'register': 'registre',
        'logout': 'Connectez _ Out',
        'search': 'chercher',
        'wishlist': 'liste de souhaits',
        'cart': 'Chariot',
        'collection': 'collection',
        'forget_password': 'mot de passe oublié',
        'contact': 'contact',
        'checkout': 'check_out',
        'compare': 'comparer',
        'order_success': 'succès de la',
        'dashboard': 'Tableau de bord',
        'FAQ': 'FAQ',
        'Shop': 'Boutique',
        'mens_fashion': 'la mode masculine',
        'sports_wear': 'vêtements de sport',
        'top': 'Haut',
        'bottom': 'bas',
        'ethic_wear': 'usure éthique',
        'shirts': 'chemises',
        'women_fashion': 'la mode des femmes',
        'dresses': 'les robes',
        'skirts': 'jupes',
        'westarn_wear': 'usure occidentale',
        'ethnic_wear': 'tenue éthnique',
        'sport_wear': 'vêtement de sport',
        'bottom_wear': 'usure du bas',
        'kids_fashion': 'mode pour enfants',
        'accessories': 'Accessories',
        'fashion_jewellery': 'bijoux fantaisie',
        'caps_and_hats': 'casquettes et chapeaux',
        'precious_jewellery': 'bijoux précieux',
        'necklaces': 'colliers',
        'earrings': 'des boucles doreilles',
        'rings_wrist_wear': 'bagues et vêtements',
        'men_accessories': 'accessoires pour hommes',
        'ties': 'liens',
        'cufflinks': 'boutons de manchette',
        'pockets_squares': 'poches à carreaux',
        'helmets': 'casques',
        'scarves': 'écharpes',
        'phone_cases': 'Coque de téléphone',
        'my_account': 'Mon compte',
        'fashion': 'Mode',
        'beauty': 'Beauté',
        'electronic': 'Électronique',
        'furniture': 'Meubles',
        'kids': 'des gamins',
        'pets': 'animaux domestiques',
        'vegetables': 'Des légumes',
        'watch': 'Regarder',
        'theme_elements': 'éléments de thème',
        'element_title': 'titre de l\'élément',
        'collection_banner': 'bannière de collection',
        'home_slider': 'home curseur',
        'category': 'Catégorie',
        'service': 'un service',
        'image_size_ratio': 'rapport de taille d\'image',
        'product_elements': 'éléments de produit',
        'product_box': 'boîte de produit',
        'product_slider': 'curseur de produit',
        'no_slider': 'pas de curseur',
        'multi_slider': 'curseur multiple',
        'tab': 'languette',
        'email_template': 'modèle de courrier électronique',
        'portfolio': 'portefeuille',
        'portfolio_grid_2': 'portefeuille grille 2',
        'portfolio_grid_3': 'portefeuille grille 3',
        'portfolio_grid_4': 'portefeuille grille 4',
        'portfolio_masonary_2': 'maçonnerie 2',
        'portfolio_masonary_3': 'maçonnerie 3',
        'portfolio_masonary_4': 'maçonnerie 4',
        'portfolio_masonary_full': 'maçonnerie pleine largeur'
      }
    }
  },
  fallbackLng: "en",
  debug: true,
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  // we use content as keys
  interpolation: {
    escapeValue: false
  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./components/constant/langConfig.json":
/*!*********************************************!*\
  !*** ./components/constant/langConfig.json ***!
  \*********************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"lang\":\"English\",\"val\":\"en\"},{\"lang\":\"Franch\",\"val\":\"fn\"}]");

/***/ }),

/***/ "./components/constant/menu.js":
/*!*************************************!*\
  !*** ./components/constant/menu.js ***!
  \*************************************/
/*! exports provided: MENUITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUITEMS", function() { return MENUITEMS; });
const MENUITEMS = [{
  title: 'Home',
  type: 'sub',
  children: [{
    title: "New Demos",
    type: "sub",
    tag: 'new',
    children: [{
      path: '/layouts/Tools',
      title: 'Tools',
      type: 'link'
    }, {
      path: '/layouts/Christmas',
      title: 'Christmas',
      type: 'link'
    }, {
      path: '/layouts/Marketplace',
      title: 'Marketplace',
      type: 'link'
    }, {
      path: '/layouts/Game',
      title: 'Game',
      type: 'link'
    }, {
      path: '/layouts/Gym',
      title: 'Gym',
      type: 'link'
    }, {
      path: '/layouts/Marijuana',
      title: 'Marijuana',
      type: 'link'
    }, {
      path: '/layouts/Leftsidebar',
      title: 'Left-Sidebar',
      type: 'link'
    }, {
      path: '/layouts/Jewellery',
      title: 'Jewellery',
      type: 'link'
    }, {
      path: '/layouts/Pets',
      title: 'Pets',
      type: 'link'
    }, {
      path: '/layouts/Metros',
      title: 'Metros',
      type: 'link'
    }, {
      path: '/layouts/Vedioslider',
      title: 'Video-Slider',
      type: 'link'
    }, {
      path: '/layouts/Nursery',
      title: 'Nursery',
      type: 'link'
    }]
  }, {
    title: 'Clothing',
    type: 'sub',
    children: [{
      path: '/',
      title: 'Fashion1',
      type: 'link'
    }, {
      path: '/layouts/Fashion2',
      title: 'Fashion2',
      type: 'link'
    }, {
      path: '/layouts/Fashion3',
      title: 'Fashion3',
      type: 'link'
    }, {
      path: '/layouts/Kids',
      title: 'Kids',
      type: 'link'
    }]
  }, {
    title: 'Basics',
    type: 'sub',
    children: [{
      path: '/layouts/Basics/Lookbook',
      title: 'Lookbook',
      type: 'link'
    }, {
      path: '/layouts/Basics/Video',
      title: 'Video',
      type: 'link'
    }, {
      path: '/layouts/Basics/Parallax',
      title: 'Parallax',
      type: 'link'
    }, {
      path: '/layouts/Basics/Fullpage',
      title: 'Full Page',
      type: 'link'
    }]
  }, {
    path: '/layouts/Beauty',
    title: 'Beauty',
    type: 'link'
  }, {
    title: 'electronic',
    type: 'sub',
    children: [{
      path: '/layouts/Electronic/Electronic-1',
      title: 'Electronic-1',
      type: 'link'
    }, {
      path: '/layouts/Electronic/Electronic-2',
      title: 'Electronic-2',
      type: 'link'
    }]
  }, {
    path: '/layouts/Furniture',
    title: 'Furniture',
    type: 'link'
  }, {
    path: '/layouts/Vegetables',
    title: 'Vegetables',
    type: 'link'
  }, {
    path: '/layouts/Watch',
    title: 'Watch',
    type: 'link'
  }, {
    path: '/layouts/Lights',
    title: 'Lights',
    type: 'link'
  }, {
    path: '/layouts/Goggles',
    title: 'Goggles',
    type: 'link'
  }, {
    path: '/layouts/Shoes',
    title: 'Shoes',
    type: 'link'
  }, {
    path: '/layouts/Bags',
    title: 'Bags',
    type: 'link'
  }, {
    path: '/layouts/Flowers',
    title: 'Flowers',
    type: 'link'
  }]
}, {
  title: 'Shop',
  type: 'sub',
  children: [{
    path: '/shop/left_sidebar',
    title: 'Left Sidebar',
    type: 'link'
  }, {
    path: '/shop/right_sidebar',
    title: 'Right Sidebar',
    type: 'link'
  }, {
    path: '/shop/no_sidebar',
    title: 'No Sidebar',
    type: 'link'
  }, {
    path: '/shop/sidebar_popup',
    title: 'Sidebar Popup',
    type: 'link'
  }, {
    path: '/shop/metro',
    title: 'Metro',
    type: 'link',
    tag: 'new'
  }, {
    path: '/shop/full_width',
    title: 'Full Width',
    type: 'link',
    tag: 'new'
  }, {
    path: '/shop/three_grid',
    title: '3 Grid',
    type: 'link'
  }, {
    path: '/shop/six_grid',
    title: '6 Six',
    type: 'link'
  }, {
    path: '/shop/list_view',
    title: 'List View',
    type: 'link'
  }]
}, {
  title: 'Products',
  type: 'sub',
  children: [{
    title: 'Sidebar',
    type: 'sub',
    children: [{
      path: '/product-details/1',
      title: 'Left Sidebar',
      type: 'link'
    }, {
      path: '/product-details/right_sidebar',
      title: 'Right Sidebar',
      type: 'link'
    }, {
      path: '/product-details/no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }]
  }, {
    title: "Thumbnail Image",
    type: "sub",
    children: [{
      path: '/product-details/thumbnail_left',
      title: 'Left Image',
      type: 'link'
    }, {
      path: '/product-details/thumbnail_right',
      title: 'Right Image',
      type: 'link'
    }, {
      path: '/product-details/thumbnail_outside',
      title: 'Image Outside',
      type: 'link'
    }]
  }, {
    title: "3-Column",
    type: "sub",
    children: [{
      path: '/product-details/3_col_left',
      title: 'Thumbnail Left',
      type: 'link'
    }, {
      path: '/product-details/3_col_right',
      title: 'Thumbnail Right',
      type: 'link'
    }, {
      path: '/product-details/3_col_bottom',
      title: 'Thumbnail Bottom',
      type: 'link'
    }]
  }, {
    path: '/product-details/4_image',
    title: '4 Image',
    type: 'link',
    tag: 'New'
  }, {
    path: '/product-details/bundle_product',
    title: 'Bundle Product',
    type: 'link',
    tag: 'New'
  }, {
    path: '/product-details/sticky',
    title: 'Sticky',
    type: 'link'
  }, {
    path: '/product-details/accordian',
    title: 'Accordian',
    type: 'link'
  }, {
    path: '/product-details/image_swatch',
    title: 'Image Swatch',
    type: 'link',
    tag: 'New'
  }, {
    path: '/product-details/vertical_tab',
    title: 'Vertical Tab',
    type: 'link'
  }]
}, {
  title: 'features',
  megaMenu: true,
  megaMenuType: 'small',
  type: 'sub',
  children: [{
    title: 'Portfolio',
    type: 'sub',
    children: [{
      path: '/portfolio/grid-2',
      title: 'Portfolio Grid 2',
      type: 'link',
      icon: 'alert'
    }, {
      path: '/portfolio/grid-3',
      title: 'Portfolio Grid 3',
      type: 'link',
      icon: 'layout-accordion-merged'
    }, {
      path: '/portfolio/grid-4',
      title: 'Portfolio Grid 4',
      type: 'link',
      icon: 'layers'
    }, {
      path: '/portfolio/masonry-grid-2',
      title: 'masonry Grid 2',
      type: 'link',
      icon: 'write'
    }, {
      path: '/portfolio/masonry-grid-3',
      title: 'masonry Grid 3',
      type: 'link',
      icon: 'map-alt'
    }, {
      path: '/portfolio/masonry-grid-4',
      title: 'masonry Grid 4',
      type: 'link',
      icon: 'map-alt'
    }, {
      path: '/portfolio/masonry-full-width',
      title: 'masonry Full Width',
      type: 'link',
      icon: 'map-alt'
    }]
  }, {
    title: 'Add To Cart',
    type: 'sub',
    children: [{
      path: '/layouts/Nursery',
      title: 'Cart Modal Popup',
      type: 'link',
      icon: 'list'
    }, {
      path: '/layouts/Vegetables',
      title: 'Qty Counter',
      type: 'link',
      icon: 'gallery'
    }, {
      path: '/layouts/Bags',
      title: 'Cart Top',
      type: 'link',
      icon: 'money'
    }, {
      path: '/layouts/Shoes',
      title: 'Cart Bottom',
      type: 'link',
      icon: 'time'
    }, {
      path: '/layouts/Watch',
      title: 'Cart Left',
      type: 'link',
      icon: 'alarm-clock'
    }, {
      path: '/layouts/Tools',
      title: 'Cart Right',
      type: 'link',
      icon: 'alarm-clock'
    }]
  }, {
    title: 'Theme Element',
    type: 'sub',
    children: [{
      path: '/portfolio/title',
      title: 'Title',
      type: 'link',
      icon: 'bar-chart'
    }, {
      path: '/portfolio/collection-banner',
      title: 'Collection Banner',
      type: 'link',
      icon: 'thought'
    }, {
      path: '/portfolio/home-slider',
      title: 'Home Slider',
      type: 'link',
      icon: 'video-camera'
    }, {
      path: '/portfolio/category',
      title: 'Category',
      type: 'link',
      icon: 'headphone'
    }, {
      path: '/portfolio/service',
      title: 'Service',
      type: 'link',
      icon: 'headphone'
    }]
  }, {
    title: 'Product Element',
    type: 'sub',
    children: [{
      path: '/portfolio/product-box',
      title: 'Product Box',
      type: 'link',
      icon: 'bar-chart'
    }, {
      path: '/portfolio/product-slider',
      title: 'Product Slider',
      type: 'link',
      icon: 'thought'
    }, {
      path: '/portfolio/no-slider',
      title: 'No Slider',
      type: 'link',
      icon: 'video-camera'
    }, {
      path: '/portfolio/multi-slider',
      title: 'Multi Slider',
      type: 'link',
      icon: 'headphone'
    }, {
      path: '/portfolio/tab',
      title: 'Tab',
      type: 'link',
      icon: 'headphone'
    }]
  }, {
    title: 'Email Template',
    type: 'sub',
    children: [{
      path: '/portfolio/order-success',
      title: 'Order Success',
      type: 'link',
      icon: 'bar-chart'
    }, {
      path: '/portfolio/order-success-2',
      title: 'Order Success 2',
      type: 'link',
      icon: 'thought'
    }, {
      path: '/portfolio/email-template',
      title: 'Email Template',
      type: 'link',
      icon: 'headphone'
    }, {
      path: '/portfolio/email-template-2',
      title: 'Email Template 2',
      type: 'link',
      icon: 'headphone'
    }]
  }]
}, {
  title: 'Pages',
  type: 'sub',
  children: [{
    title: 'vendor',
    type: 'sub',
    tag: 'new',
    children: [{
      path: '/page/vendor/vendor-dashboard',
      title: 'Vendor Dashboard',
      type: 'link'
    }, {
      path: '/page/vendor/vendor-profile',
      title: 'Vendor Profile',
      type: 'link'
    }, {
      path: '/page/vendor/become-vendor',
      title: 'Become Vendor',
      type: 'link'
    }]
  }, {
    title: 'Account',
    type: 'sub',
    children: [{
      path: '/page/account/wishlist',
      title: 'Wishlist',
      type: 'link'
    }, {
      path: '/page/account/cart',
      title: 'cart',
      type: 'link'
    }, {
      path: '/page/account/dashboard',
      title: 'dashboard',
      type: 'link'
    }, {
      path: '/page/account/login',
      title: 'login',
      type: 'link'
    }, {
      path: '/page/account/login-auth',
      title: 'login-auth',
      type: 'link'
    }, {
      path: '/page/account/register',
      title: 'register',
      type: 'link'
    }, {
      path: '/page/account/contact',
      title: 'contact',
      type: 'link'
    }, {
      path: '/page/account/forget-pwd',
      title: 'forgot-password',
      type: 'link'
    }, {
      path: '/page/account/profile',
      title: 'profile',
      type: 'link'
    }, {
      path: '/page/account/checkout',
      title: 'checkout',
      type: 'link'
    }]
  }, {
    path: '/page/about-us',
    title: 'about-us',
    type: 'link'
  }, {
    path: '/page/search',
    title: 'search',
    type: 'link'
  }, {
    path: '/page/typography',
    title: 'typography',
    type: 'link',
    tag: 'new'
  }, {
    path: '/page/review',
    title: 'review',
    type: 'link'
  }, {
    path: '/page/order-success',
    title: 'order-success',
    type: 'link'
  }, {
    title: 'compare',
    type: 'sub',
    children: [{
      path: '/page/compare',
      title: 'compare',
      type: 'link'
    }, {
      path: '/page/compare-2',
      title: 'compare-2',
      type: 'link',
      tag: 'new'
    }]
  }, {
    path: '/page/collection',
    title: 'collection',
    type: 'link'
  }, {
    path: '/page/lookbook',
    title: 'lookbook',
    type: 'link'
  }, {
    path: '/page/site-map',
    title: 'site-map',
    type: 'link'
  }, {
    path: '/page/404',
    title: '404',
    type: 'link'
  }, {
    path: '/page/coming-soon',
    title: 'coming-soon',
    type: 'link'
  }, {
    path: '/page/faq',
    title: 'faq',
    type: 'link'
  }]
}, {
  title: 'Blogs',
  type: 'sub',
  children: [{
    path: '/blogs/blog_left_sidebar',
    title: 'blog left sidebar',
    type: 'link'
  }, {
    path: '/blogs/blog_right_sidebar',
    title: 'blog right sidebar',
    type: 'link'
  }, {
    path: '/blogs/no_sidebar',
    title: 'no sidebar',
    type: 'link'
  }, {
    path: '/blogs/blog_detail',
    title: 'blog detail',
    type: 'link'
  }]
}];

/***/ }),

/***/ "./components/containers/Cart.js":
/*!***************************************!*\
  !*** ./components/containers/Cart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/cart */ "./helpers/cart/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\containers\\Cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const CartComponent = ({
  icon,
  layout
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const currContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__["CurrencyContext"]);
  const symbol = currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;
  const removeFromCart = context.removeFromCart;
  const {
    0: openSide,
    1: setOpenSide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("li", {
    className: "onhover-div mobile-cart",
    onClick: () => setOpenSide(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "cart-qty-cls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, cartList.length), __jsx("div", {
    href: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    alt: "cart",
    src: icon,
    className: "img-fluid blur-up lazyload",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx("i", {
    className: "fa fa-shopping-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }))), __jsx("div", {
    id: "cart_side",
    className: `add_to_cart ${layout} ${openSide ? "open-side" : ""} `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: null,
    className: "overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "cart-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "cart_top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "my cart"), __jsx("div", {
    className: "close-cart",
    onClick: () => setOpenSide(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fa fa-times",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "cart_media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "cart_product",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, cartList.length > 0 && cartList.map((item, index) => __jsx("li", {
    key: `cart-popup-${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    alt: "",
    className: "mr-3",
    src: `${item.images[0].src}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "media-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 27
    }
  }, item.title)), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 27
    }
  }, item.qty, " x ", symbol, " ", item.price)))), __jsx("div", {
    className: "close-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    onClick: () => removeFromCart(item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fa fa-trash",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  })))))), __jsx("ul", {
    className: "cart_total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, "subtotal : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 32
    }
  }, "$", total)))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/page/account/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: "btn btn-solid btn-xs view-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "view cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/page/account/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: "btn btn-solid btn-xs checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, "checkout")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartComponent);

/***/ }),

/***/ "./components/containers/CartContainer.js":
/*!************************************************!*\
  !*** ./components/containers/CartContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headers_common_cart_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../headers/common/cart-header */ "./components/headers/common/cart-header.js");
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/cart */ "./helpers/cart/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\containers\\CartContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CartContainer = ({
  icon
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const currContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_5__["CurrencyContext"]);
  const symbol = currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("li", {
    className: "onhover-div mobile-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "cart-qty-cls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, cartList.length), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/page/account/cart`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Media"], {
    src: icon,
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("i", {
    className: "fa fa-shopping-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }))), __jsx("ul", {
    className: "show-div shopping-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, cartList.map((item, index) => __jsx(_headers_common_cart_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    item: item,
    total: total,
    symbol: symbol,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })), cartList.length > 0 ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, "subtotal :", " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, symbol, total)))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "buttons view-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/page/account/cart`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "view cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/page/account/checkout`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: "checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "checkout"))))) : __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Your cart is currently empty.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartContainer);

/***/ }),

/***/ "./components/footers/common/MasterFooter.js":
/*!***************************************************!*\
  !*** ./components/footers/common/MasterFooter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headers_common_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../headers/common/logo */ "./components/headers/common/logo.js");
/* harmony import */ var _copyright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copyright */ "./components/footers/common/copyright.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\footers\\common\\MasterFooter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const MasterFooter = ({
  containerFluid,
  logoName,
  layoutClass,
  footerClass,
  footerLayOut,
  footerSection,
  belowSection,
  belowContainerFluid,
  copyRightFluid,
  newLatter
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: collapse,
    1: setCollapse
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const width = window.innerWidth < 750;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const changeCollapse = () => {
      if (window.innerWidth < 750) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);
    return () => {
      window.removeEventListener('resize', changeCollapse);
    };
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("footer", {
    className: footerClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, newLatter ? __jsx("div", {
    className: footerLayOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: containerFluid ? containerFluid : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: footerSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "subscribe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "KNOW IT ALL FIRST!"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, "Never Miss Anything From Multikart By Signing Up To Our Newsletter.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    className: "form-inline subscribe-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: "mx-sm-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    className: "form-control",
    id: "exampleFormControlInput1",
    placeholder: "Enter your email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    className: "btn btn-solid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 23
    }
  }, "subscribe"))))))) : "", __jsx("section", {
    className: belowSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: belowContainerFluid ? belowContainerFluid : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "footer-theme partition-f",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "4",
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: `footer-title ${isOpen && collapse == 1 ? "active" : ""} footer-mobile-title`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx("h4", {
    onClick: () => {
      setCollapse(1);
      setIsOpen(!isOpen);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, "about", __jsx("span", {
    className: "according-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: width ? collapse === 1 ? isOpen : false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "footer-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "footer-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx(_headers_common_logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    logo: logoName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 23
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"), __jsx("div", {
    className: "footer-social",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.facebook.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "fa fa-facebook",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://plus.google.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "fa fa-google-plus",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://twitter.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "fa fa-twitter",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.instagram.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "fa fa-instagram",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://rss.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "fa fa-rss",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  })))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "offset-xl-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: `footer-title ${isOpen && collapse == 2 ? "active" : ""} `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  }, __jsx("h4", {
    onClick: () => {
      if (width) {
        setIsOpen(!isOpen);
        setCollapse(2);
      } else setIsOpen(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }, "my account", __jsx("span", {
    className: "according-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 23
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: width ? collapse === 2 ? isOpen : false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "footer-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 29
    }
  }, "womens"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 29
    }
  }, " clothing "))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 29
    }
  }, "accessories"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 29
    }
  }, " featured ")))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: `footer-title ${isOpen && collapse == 3 ? "active" : ""} `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  }, __jsx("h4", {
    onClick: () => {
      if (width) {
        setIsOpen(!isOpen);
        setCollapse(3);
      } else setIsOpen(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }, "why we choose", __jsx("span", {
    className: "according-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 23
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: width ? collapse === 3 ? isOpen : false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "footer-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 27
    }
  }, "shipping & return")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 27
    }
  }, "secure shopping")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 27
    }
  }, "gallary")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 27
    }
  }, "affiliates")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 27
    }
  }, "contacts"))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: `footer-title ${isOpen && collapse == 4 ? "active" : ""} `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 19
    }
  }, __jsx("h4", {
    onClick: () => {
      if (width) {
        setIsOpen(!isOpen);
        setCollapse(4);
      } else setIsOpen(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, "store information", __jsx("span", {
    className: "according-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 23
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: width ? collapse === 4 ? isOpen : false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "footer-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "contact-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-map-marker",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 27
    }
  }), "Multikart Demo Store, Demo store India 345-659"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 27
    }
  }), "Call Us: 123-456-7898"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-envelope-o",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 27
    }
  }), "Email Us:", " ", __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 27
    }
  }, "Support@Fiot.com")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-fax",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 27
    }
  }), "Fax: 123456"))))))))), __jsx(_copyright__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layout: layoutClass,
    fluid: copyRightFluid ? copyRightFluid : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MasterFooter);

/***/ }),

/***/ "./components/footers/common/copyright.js":
/*!************************************************!*\
  !*** ./components/footers/common/copyright.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/assets/images/icon/visa.png */ "./public/assets/images/icon/visa.png");
/* harmony import */ var _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/assets/images/icon/mastercard.png */ "./public/assets/images/icon/mastercard.png");
/* harmony import */ var _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/assets/images/icon/paypal.png */ "./public/assets/images/icon/paypal.png");
/* harmony import */ var _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/assets/images/icon/american-express.png */ "./public/assets/images/icon/american-express.png");
/* harmony import */ var _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/assets/images/icon/discover.png */ "./public/assets/images/icon/discover.png");
/* harmony import */ var _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\footers\\common\\copyright.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const CopyRight = ({
  layout,
  fluid
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `sub-footer ${layout}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "6",
    md: "6",
    sm: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "footer-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "fa fa-copyright",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 36
    }
  }), " 2020-21 themeforest powered by pixelstrap"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "6",
    md: "6",
    sm: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "payment-card-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 53
    }
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CopyRight);

/***/ }),

/***/ "./components/headers/common/cart-header.js":
/*!**************************************************!*\
  !*** ./components/headers/common/cart-header.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/cart */ "./helpers/cart/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\headers\\common\\cart-header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CartHeader = ({
  item,
  symbol
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/product/" + item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    alt: "",
    className: "mr-3",
    src: `${item.images[0].src}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "media-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/product/" + item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, item.name))), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, item.qty, " x ", symbol, " ", (item.price - item.price * item.discount / 100).toFixed(2))))), __jsx("div", {
    className: "close-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-times",
    "aria-hidden": "true",
    onClick: () => context.removeFromCart(item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartHeader);

/***/ }),

/***/ "./components/headers/common/currency.js":
/*!***********************************************!*\
  !*** ./components/headers/common/currency.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant_langConfig_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/langConfig.json */ "./components/constant/langConfig.json");
var _constant_langConfig_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../constant/langConfig.json */ "./components/constant/langConfig.json", 1);
/* harmony import */ var _constant_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constant/i18n */ "./components/constant/i18n.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var _helpers_apollo_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/apollo/apollo */ "./helpers/apollo/apollo.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\headers\\common\\currency.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const GET_CURRENCY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query {
    getCurrency {
      currency
      name
      symbol
      value
    }
  }
`;

const Currency = ({
  icon
}) => {
  var {
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_CURRENCY);
  const Context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__["CurrencyContext"]);
  const selectedCurrency = Context.currencyContext.selectedCurrency;

  const changeLanguage = lng => {
    _constant_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].changeLanguage(lng);
  };

  return __jsx("li", {
    className: "onhover-div mobile-setting",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: icon,
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("i", {
    className: "fa fa-cog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "show-div setting",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "language"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, _constant_langConfig_json__WEBPACK_IMPORTED_MODULE_4__.map((item, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: null,
    onClick: () => {
      changeLanguage(item.val);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, item.lang)))), __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "currency"), __jsx("ul", {
    className: "list-inline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, data && data.getCurrency.map((cur, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("div", {
    onClick: () => selectedCurrency(cur),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, cur.symbol, " ", cur.currency))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_apollo_apollo__WEBPACK_IMPORTED_MODULE_7__["withApollo"])(Currency));

/***/ }),

/***/ "./components/headers/common/logo.js":
/*!*******************************************!*\
  !*** ./components/headers/common/logo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\headers\\common\\logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LogoImage = ({
  logo
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: `/assets/images/icon/${logo ? logo : 'logo.png'}`,
    alt: "",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LogoImage);

/***/ }),

/***/ "./components/headers/common/navbar.js":
/*!*********************************************!*\
  !*** ./components/headers/common/navbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/menu */ "./components/constant/menu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\headers\\common\\navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const NavBar = () => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
  const {
    0: navClose,
    1: setNavClose
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: "0px"
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (window.innerWidth < 750) {
      setNavClose({
        right: "-410px"
      });
    }

    if (window.innerWidth < 1199) {
      setNavClose({
        right: "-300px"
      });
    }
  }, []);

  const openNav = () => {
    setNavClose({
      right: "0px"
    });
    if (router.asPath == "/layouts/Gym") document.querySelector("#topHeader").classList.add("zindex-class");
  };

  const closeNav = () => {
    setNavClose({
      right: "-410px"
    });
    if (router.asPath == "/layouts/Gym") document.querySelector("#topHeader").classList.remove("zindex-class");
  }; // eslint-disable-next-line


  const handleMegaSubmenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.parentNode.nextElementSibling.classList.contains("opensubmegamenu")) event.target.parentNode.nextElementSibling.classList.remove("opensubmegamenu");else {
      document.querySelectorAll(".menu-content").forEach(function (value) {
        value.classList.remove("opensubmegamenu");
      });
      event.target.parentNode.nextElementSibling.classList.add("opensubmegamenu");
    }
  };

  const {
    0: mainmenu,
    1: setMainMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentUrl = location.pathname;
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].filter(items => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = item => {
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].filter(menuItem => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = false;
          }
        });
      }
    });
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  }; // Click Toggle menu


  const toggletNavActive = item => {
    if (!item.active) {
      _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].forEach(a => {
        if (_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }

          if (!b.children) return false;
          b.children.forEach(c => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }

    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  };

  const openMblNav = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.nextElementSibling.classList.contains("opensubmenu")) event.target.nextElementSibling.classList.remove("opensubmenu");else {
      document.querySelectorAll(".nav-submenu").forEach(function (value) {
        value.classList.remove("opensubmenu");
      });
      document.querySelector(".mega-menu-container").classList.remove("opensubmenu");
      event.target.nextElementSibling.classList.add("opensubmenu");
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "main-navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "mainnav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "toggle-nav",
    onClick: openNav.bind(undefined),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fa fa-bars sidebar-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  })), __jsx("ul", {
    className: "nav-menu",
    style: navClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "back-btn",
    onClick: closeNav.bind(undefined),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mobile-back text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, "Back navbar"), __jsx("i", {
    className: "fa fa-angle-right pl-2",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }))), _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? "mega-menu" : ""}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "nav-link",
      onClick: e => openMblNav(e),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    }, " ", t(menuItem.title), __jsx("span", {
      className: "sub-arrow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    })), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: "nav-submenu",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }
    }, menuItem.children.map((childrenItem, index) => {
      return __jsx("li", {
        key: index,
        className: `${childrenItem.children ? "sub-menu " : ""}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 27
        }
      }, childrenItem.type === "sub" ? __jsx("a", {
        href: null,
        onClick: () => toggletNavActive(childrenItem),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 31
        }
      }, childrenItem.title, childrenItem.tag === "new" ? __jsx("span", {
        className: "new-tag",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 35
        }
      }, "new") : "", __jsx("i", {
        className: "fa fa-angle-right pl-2",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 33
        }
      })) : "", childrenItem.type === "link" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `${childrenItem.path}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 31
        }
      }, __jsx("a", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 33
        }
      }, childrenItem.title, childrenItem.tag === "new" ? __jsx("span", {
        className: "new-tag",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 37
        }
      }, "new") : "")) : "", childrenItem.children ? __jsx("ul", {
        className: `nav-sub-childmenu ${childrenItem.active ? "menu-open " : "active"}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 31
        }
      }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
        key: key,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 37
        }
      }, childrenSubItem.type === "link" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: childrenSubItem.path,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "sub-menu-title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 43
        }
      }, childrenSubItem.title, childrenSubItem.tag === "new" ? __jsx("span", {
        className: "new-tag",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 47
        }
      }, "new") : "")) : ""))) : "");
    })) : __jsx("div", {
      className: `mega-menu-container  ${menuItem.megaMenu ? "" : "opensubmenu"}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 21
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 25
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 27
      }
    }, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == "small" ? "col mega-box" : menuItem.megaMenuType == "medium" ? "col-lg-3" : menuItem.megaMenuType == "large" ? "col" : ""} `,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "link-section",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 35
        }
      }, __jsx("div", {
        className: "menu-title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 37
        }
      }, __jsx("h5", {
        onClick: e => handleMegaSubmenu(e),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 39
        }
      }, megaMenuItem.title)), __jsx("div", {
        className: "menu-content",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 37
        }
      }, __jsx("ul", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 39
        }
      }, menuItem.title === "Elements" ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 51
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 53
          }
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 55
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 51
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 53
          }
        }, subMegaMenuItem.title));
      })))));
    }))) : ""));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/headers/common/search-overlay.js":
/*!*****************************************************!*\
  !*** ./components/headers/common/search-overlay.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\headers\\common\\search-overlay.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const closeSearch = () => {
  document.getElementById("search-overlay").style.display = "none";
};

const SearchOverlay = () => {
  return __jsx("div", {
    id: "search-overlay",
    className: "search-overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "closebtn",
    onClick: closeSearch,
    title: "Close Overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "\xD7"), __jsx("div", {
    className: "overlay-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Search a Product",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    className: "btn btn-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchOverlay);

/***/ }),

/***/ "./components/headers/common/sidebar.js":
/*!**********************************************!*\
  !*** ./components/headers/common/sidebar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/assets/images/mega-menu/fashion.jpg */ "./public/assets/images/mega-menu/fashion.jpg");
/* harmony import */ var _public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\headers\\common\\sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SideBar = () => {
  const closeNav = () => {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  };

  const handleSubmenu = event => {
    if (event.target.classList.contains("sub-arrow")) {
      return;
    }

    if (event.target.nextElementSibling.classList.contains("opensub1")) event.target.nextElementSibling.classList.remove("opensub1");else {
      document.querySelectorAll(".opensub1").forEach(function (value) {
        value.classList.remove("opensub1");
      });
      event.target.nextElementSibling.classList.add("opensub1");
    }
  };

  const handleSubTwoMenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.nextElementSibling.classList.contains("opensub2")) event.target.nextElementSibling.classList.remove("opensub2");else {
      document.querySelectorAll(".opensub2").forEach(function (value) {
        value.classList.remove("opensub2");
      });
      event.target.nextElementSibling.classList.add("opensub2");
    }
  };

  const handleSubThreeMenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.nextElementSibling.classList.contains("opensub3")) event.target.nextElementSibling.classList.remove("opensub3");else {
      document.querySelectorAll(".opensub3").forEach(function (value) {
        value.classList.remove("opensub3");
      });
      event.target.nextElementSibling.classList.add("opensub3");
    }
  };

  const handleSubFourMenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.nextElementSibling.classList.contains("opensub4")) event.target.nextElementSibling.classList.remove("opensub4");else {
      document.querySelectorAll(".opensub4").forEach(function (value) {
        value.classList.remove("opensub4");
      });
      event.target.nextElementSibling.classList.add("opensub4");
    }
  };

  const handleMegaSubmenu = event => {
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.nextElementSibling.classList.contains("opensidesubmenu")) event.target.nextElementSibling.classList.remove("opensidesubmenu");else {
      event.target.nextElementSibling.classList.add("opensidesubmenu");
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "mySidenav",
    className: "sidenav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: null,
    className: "sidebar-overlay",
    onClick: closeNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: null,
    onClick: closeNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "sidebar-back text-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fa fa-angle-left pr-2",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }), " Back")), __jsx("ul", {
    id: "sub-menu",
    className: "sidebar-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    onClick: e => handleMegaSubmenu(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "clothing", __jsx("span", {
    className: "sub-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  })), __jsx("ul", {
    className: "mega-menu clothing-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    m: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "link-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 23
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, "women's fashion"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, "dresses")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }, "skirts")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, "westarn wear")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, "ethic wear")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }, "sport wear"))), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, "men's fashion"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }, "sports wear")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, "western wear")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }, "ethic wear"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "link-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 23
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }, "accessories"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }, "fashion jewellery")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, "caps and hats")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 29
    }
  }, "precious jewellery")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  }, "necklaces")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, "earrings")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }, "wrist wear")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, "ties")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }, "cufflinks")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 29
    }
  }, "pockets squares"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    className: "mega-menu-banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }))))))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, "bags", __jsx("span", {
    className: "sub-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  })), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 19
    }
  }, "shopper bags")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }, "laptop bags")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 19
    }
  }, "clutches")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    onClick: e => handleSubTwoMenu(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 19
    }
  }, "purses", __jsx("span", {
    className: "sub-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  })), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 23
    }
  }, "purses")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 23
    }
  }, "wallets")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 23
    }
  }, "leathers")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 23
    }
  }, "satchels")))))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, "footwear", __jsx("span", {
    className: "sub-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  })), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 19
    }
  }, "sport shoes")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 19
    }
  }, "formal shoes")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 19
    }
  }, "casual shoes")))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 15
    }
  }, "watches")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, "Accessories", __jsx("span", {
    className: "sub-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  })), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 19
    }
  }, "fashion jewellery")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 19
    }
  }, "caps and hats")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 19
    }
  }, "precious jewellery")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    onClick: e => handleSubTwoMenu(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 19
    }
  }, "more..", __jsx("span", {
    className: "sub-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  })), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 23
    }
  }, "necklaces")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 23
    }
  }, "earrings")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 23
    }
  }, "wrist wear")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    onClick: e => handleSubThreeMenu(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 23
    }
  }, "accessories", __jsx("span", {
    className: "sub-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 25
    }
  })), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 27
    }
  }, "ties")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 27
    }
  }, "cufflinks")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 27
    }
  }, "pockets squares")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 27
    }
  }, "helmets")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 27
    }
  }, "scarves")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    onClick: e => handleSubFourMenu(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 27
    }
  }, "more...", __jsx("span", {
    className: "sub-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 29
    }
  })), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 27
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 31
    }
  }, "accessory gift sets")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 31
    }
  }, "travel accessories")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 31
    }
  }, "phone cases")))))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 23
    }
  }, "belts & more")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 23
    }
  }, "wearable")))))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 15
    }
  }, "house of design")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 15
    }
  }, "beauty & personal care", __jsx("span", {
    className: "sub-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }
  })), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 19
    }
  }, "makeup")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 19
    }
  }, "skincare")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 19
    }
  }, "premium beaty")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    onClick: e => handleSubTwoMenu(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 19
    }
  }, "more", __jsx("span", {
    className: "sub-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 21
    }
  })), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 23
    }
  }, "fragrances")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 23
    }
  }, "luxury beauty")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 23
    }
  }, "hair care")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 23
    }
  }, "tools & brushes")))))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 15
    }
  }, "home & decor")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 15
    }
  }, "kitchen"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./components/headers/common/topbar-dark.js":
/*!**************************************************!*\
  !*** ./components/headers/common/topbar-dark.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/base */ "./config/base.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\headers\\common\\topbar-dark.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const TopBarDark = ({
  topClass,
  fluid
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const firebaseLogout = () => {
    _config_base__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signOut();
    router.push("/page/account/login-auth");
  };

  return __jsx("div", {
    className: topClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "header-contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Welcome to Our store Multikart"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-phone",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 19
    }
  }), "Call Us: 123 - 456 - 7890")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: "text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "header-dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "mobile-wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page/account/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-heart",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }), " wishlist"))), __jsx("li", {
    className: "onhover-dropdown mobile-account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fa fa-user",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), " My Account", __jsx("ul", {
    className: "onhover-show-div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/page/account/login`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 23
    }
  }, "Login"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/page/account/register`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 23
    }
  }, "Register"))), __jsx("li", {
    onClick: () => firebaseLogout(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "Logout")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TopBarDark);

/***/ }),

/***/ "./components/headers/header-one.js":
/*!******************************************!*\
  !*** ./components/headers/header-one.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/navbar */ "./components/headers/common/navbar.js");
/* harmony import */ var _common_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/sidebar */ "./components/headers/common/sidebar.js");
/* harmony import */ var _containers_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/Cart */ "./components/containers/Cart.js");
/* harmony import */ var _containers_CartContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/CartContainer */ "./components/containers/CartContainer.js");
/* harmony import */ var _common_topbar_dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/topbar-dark */ "./components/headers/common/topbar-dark.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/logo */ "./components/headers/common/logo.js");
/* harmony import */ var _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/assets/images/icon/search.png */ "./public/assets/images/icon/search.png");
/* harmony import */ var _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/images/icon/setting.png */ "./public/assets/images/icon/setting.png");
/* harmony import */ var _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/assets/images/icon/cart.png */ "./public/assets/images/icon/cart.png");
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_currency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/currency */ "./components/headers/common/currency.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_search_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/search-overlay */ "./components/headers/common/search-overlay.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\headers\\header-one.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const HeaderOne = ({
  logoName,
  headerClass,
  topClass,
  noTopBar,
  direction
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  /*=====================
   Pre loader
   ==========================*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);
    if (router.asPath !== "/layouts/Christmas") window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (number >= 300) {
      if (window.innerWidth < 576) document.getElementById("sticky").classList.remove("fixed");else document.getElementById("sticky").classList.add("fixed");
    } else document.getElementById("sticky").classList.remove("fixed");
  };

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");

    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };

  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  }; // eslint-disable-next-line


  const load = () => {
    setIsLoading(true);
    fetch().then(() => {
      // deal with data fetched
      setIsLoading(false);
    });
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("header", {
    id: "sticky",
    className: `sticky ${headerClass}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mobile-fix-option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), noTopBar ? "" : __jsx(_common_topbar_dark__WEBPACK_IMPORTED_MODULE_5__["default"], {
    topClass: topClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 26
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "menu-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: null,
    onClick: openNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "bar-style",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fa fa-bars sidebar-bar",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }))), __jsx(_common_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "brand-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx(_common_logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    logo: logoName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "menu-right pull-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx(_common_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "icon-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 23
    }
  }, __jsx("li", {
    className: "onhover-div mobile-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 27
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Media"], {
    src: _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    onClick: openSearch,
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }))), __jsx(_common_currency__WEBPACK_IMPORTED_MODULE_11__["default"], {
    icon: _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }), direction === undefined ? __jsx(_containers_CartContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layout: direction,
    icon: _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 27
    }
  }) : __jsx(_containers_Cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    layout: direction,
    icon: _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 27
    }
  })))))))))), __jsx(_common_search_overlay__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderOne);

/***/ }),

/***/ "./components/shop/common-layout.js":
/*!******************************************!*\
  !*** ./components/shop/common-layout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headers_header_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../headers/header-one */ "./components/headers/header-one.js");
/* harmony import */ var _common_widgets_breadcrubs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/widgets/breadcrubs */ "./components/common/widgets/breadcrubs.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/images/favicon/1.png */ "./public/assets/images/favicon/1.png");
/* harmony import */ var _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _footers_common_MasterFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footers/common/MasterFooter */ "./components/footers/common/MasterFooter.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\components\\shop\\common-layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CommonLayout = ({
  children,
  title,
  parent,
  subTitle
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_4___default.a ? _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_4___default.a : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx(_headers_header_one__WEBPACK_IMPORTED_MODULE_1__["default"], {
    topClass: "top-header",
    logoName: "logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_common_widgets_breadcrubs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    parent: parent,
    subTitle: subTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children), __jsx(_footers_common_MasterFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    footerClass: `footer-light `,
    footerLayOut: "light-layout upper-footer",
    footerSection: "small-section border-section border-top-0",
    belowSection: "section-b-space light-layout",
    newLatter: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CommonLayout);

/***/ }),

/***/ "./config/base.js":
/*!************************!*\
  !*** ./config/base.js ***!
  \************************/
/*! exports provided: googleProvider, facebookProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleProvider", function() { return googleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookProvider", function() { return facebookProvider; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "@firebase/app");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! firebase/auth */ "firebase/auth");

const configs = __webpack_require__(/*! ./index.json */ "./config/index.json");

const config = {
  apiKey: configs.firebase.apiKey,
  authDomain: configs.firebase.authDomain,
  databaseURL: configs.firebase.databaseURL,
  projectId: configs.firebase.projectId,
  storageBucket: configs.firebase.storageBucket,
  messagingSenderId: configs.firebase.messagingSenderId,
  appId: configs.firebase.appId
};

if (!_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const googleProvider = new _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
const facebookProvider = new _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.FacebookAuthProvider();
/* harmony default export */ __webpack_exports__["default"] = (_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./config/index.json":
/*!***************************!*\
  !*** ./config/index.json ***!
  \***************************/
/*! exports provided: firebase, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"firebase\":{\"apiKey\":\"AIzaSyB48VO9ib0Va5F_6dYs8BnjYldwNxbfuBQ\",\"authDomain\":\"multikart-react.firebaseapp.com\",\"projectId\":\"multikart-react\",\"storageBucket\":\"multikart-react.appspot.com\",\"messagingSenderId\":\"298873485216\",\"appId\":\"1:298873485216:web:e719b33e1427c8cfde56c5\"}}");

/***/ }),

/***/ "./helpers/Currency/CurrencyContext.js":
/*!*********************************************!*\
  !*** ./helpers/Currency/CurrencyContext.js ***!
  \*********************************************/
/*! exports provided: Context, Provider, CurrencyContext, CurrencyContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyContext", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyContextProvider", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["Provider"]; });

var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\helpers\\Currency\\CurrencyContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const Provider = props => {
  const {
    0: selectedCurr,
    1: selectedCurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    currency: "USD",
    symbol: "$",
    value: 1
  });
  const currencyContext = {
    selectedCurr,
    selectedCurrency
  };
  return __jsx(Context.Provider, {
    value: {
      state: selectedCurr,
      currencyContext: currencyContext
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, props.children);
};


/***/ }),

/***/ "./helpers/apollo/apollo.js":
/*!**********************************!*\
  !*** ./helpers/apollo/apollo.js ***!
  \**********************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\helpers\\apollo\\apollo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








let apolloClient = null;
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */

function withApollo(PageComponent, {
  ssr = true
} = {}) {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

    const client = apolloClient || initApolloClient(apolloState);
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
      client: client,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, __jsx(PageComponent, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    })));
  }; // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const {
        AppTree
      } = ctx; // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.

      const apolloClient = ctx.apolloClient = initApolloClient({}, ctx.req && ctx.req.headers.cookie); // Run wrapped getInitialProps methods

      let pageProps = {};

      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } // Only on the server:


      if (true) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        } // Only if ssr is enabled


        if (ssr) {
          try {
            // Run all GraphQL queries
            const {
              getDataFromTree
            } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/react-ssr */ "@apollo/react-ssr", 7));
            await getDataFromTree(__jsx(AppTree, {
              pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                apolloClient
              }),
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 15
              }
            }));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          } // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually


          next_head__WEBPACK_IMPORTED_MODULE_1___default.a.rewind();
        }
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return _objectSpread(_objectSpread({}, pageProps), {}, {
        apolloState
      });
    };
  }

  return WithApollo;
}
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */

function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */


function createApolloClient(initialState = {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloClient"]({
    ssrMode: true,
    // Disables forceFetch on the server (so queries are only run once)
    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]({
      uri: "https://multikart-graphql-dun.vercel.app/server.js",
      // Server URL (must be absolute)
      credentials: 'same-origin',
      // Additional fetch() options like `credentials` or `headers`
      fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default())
    }),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]().restore(initialState)
  });
}

/***/ }),

/***/ "./helpers/cart/index.js":
/*!*******************************!*\
  !*** ./helpers/cart/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (CartContext);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = (...args) => {
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
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/page/account/checkout.js":
/*!****************************************!*\
  !*** ./pages/page/account/checkout.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shop_common_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/shop/common-layout */ "./components/shop/common-layout.js");
/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/base */ "./config/base.js");
/* harmony import */ var _common_checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/checkout-page */ "./pages/page/account/common/checkout-page.js");
/* harmony import */ var _page_account_login_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../page/account/login-auth */ "./pages/page/account/login-auth/index.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\pages\\page\\account\\checkout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Checkout = () => {
  const {
    0: currentUser,
    1: setCurrentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _config_base__WEBPACK_IMPORTED_MODULE_2__["default"].auth().onAuthStateChanged(setCurrentUser);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, currentUser !== null ? __jsx(_components_shop_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    parent: "home",
    title: "checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_common_checkout_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })) : __jsx(_page_account_login_auth__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ }),

/***/ "./pages/page/account/common/checkout-page.js":
/*!****************************************************!*\
  !*** ./pages/page/account/common/checkout-page.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_paypal_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paypal-button */ "react-paypal-button");
/* harmony import */ var react_paypal_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paypal_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/cart */ "./helpers/cart/index.js");
/* harmony import */ var _public_assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/assets/images/paypal.png */ "./public/assets/images/paypal.png");
/* harmony import */ var _public_assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\pages\\page\\account\\common\\checkout-page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const CheckoutPage = () => {
  const cartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const cartItems = cartContext.state;
  const cartTotal = cartContext.cartTotal;
  const curContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_7__["CurrencyContext"]);
  const symbol = curContext.state.symbol;
  const {
    0: obj,
    1: setObj
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: payment,
    1: setPayment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("stripe");
  const {
    register,
    handleSubmit,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])(); // initialise the hook

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  const checkhandle = value => {
    setPayment(value);
  };

  const onSuccess = payment => {
    router.push({
      pathname: "/page/order-success",
      state: {
        payment: payment,
        items: cartItems,
        orderTotal: total,
        symbol: symbol
      }
    });
  };

  const onSubmit = data => {
    if (data !== "") {
      alert("You submitted the form and stuff!");
      router.push({
        pathname: "/page/order-success",
        state: {
          items: cartItems,
          orderTotal: cartTotal,
          symbol: symbol
        }
      });
    } else {
      errors.showMessages();
    }
  };

  const setStateFromInput = event => {
    obj[event.target.name] = event.target.value;
    setObj(obj);
  };

  const onCancel = data => {
    console.log("The payment was cancelled!", data);
  };

  const onError = err => {
    console.log("Error!", err);
  };

  const paypalOptions = {
    clientId: "AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_"
  };
  return __jsx("section", {
    className: "section-b-space",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "checkout-page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "checkout-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit(onSubmit),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    sm: "12",
    xs: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "checkout-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, "Billing Details")), __jsx("div", {
    className: "row check-out",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "form-group col-md-6 col-sm-6 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "field-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, "First Name"), __jsx("input", {
    type: "text",
    className: `${errors.firstName ? "error_border" : ""}`,
    name: "first_name",
    ref: register({
      required: true
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "error-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  }, errors.firstName && "First name is required")), __jsx("div", {
    className: "form-group col-md-6 col-sm-6 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "field-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }, "Last Name"), __jsx("input", {
    type: "text",
    className: `${errors.last_name ? "error_border" : ""}`,
    name: "last_name",
    ref: register({
      required: true
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "error-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 23
    }
  }, errors.last_name && "Last name is required")), __jsx("div", {
    className: "form-group col-md-6 col-sm-6 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "field-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 23
    }
  }, "Phone"), __jsx("input", {
    type: "text",
    name: "phone",
    className: `${errors.phone ? "error_border" : ""}`,
    ref: register({
      pattern: /\d+/
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "error-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 23
    }
  }, errors.phone && "Please enter number for phone.")), __jsx("div", {
    className: "form-group col-md-6 col-sm-6 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "field-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 23
    }
  }, "Email Address"), __jsx("input", {
    className: "form-control",
    className: `${errors.email ? "error_border" : ""}`,
    type: "text",
    name: "email",
    ref: register({
      required: true,
      pattern: /^\S+@\S+$/i
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "error-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 23
    }
  }, errors.email && "Please enter proper email address .")), __jsx("div", {
    className: "form-group col-md-12 col-sm-12 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "field-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 23
    }
  }, "Country"), __jsx("select", {
    name: "country",
    ref: register({
      required: true
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 23
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, "India"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, "South Africa"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, "United State"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, "Australia"))), __jsx("div", {
    className: "form-group col-md-12 col-sm-12 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "field-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 23
    }
  }, "Address"), __jsx("input", {
    className: "form-control",
    className: `${errors.address ? "error_border" : ""}`,
    type: "text",
    name: "address",
    ref: register({
      required: true,
      min: 20,
      max: 120
    }),
    placeholder: "Street address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "error-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 23
    }
  }, errors.address && "Please right your address .")), __jsx("div", {
    className: "form-group col-md-12 col-sm-12 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "field-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 23
    }
  }, "Town/City"), __jsx("input", {
    className: "form-control",
    type: "text",
    className: `${errors.city ? "error_border" : ""}`,
    name: "city",
    ref: register({
      required: true
    }),
    onChange: setStateFromInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "error-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 23
    }
  }, errors.city && "select one city")), __jsx("div", {
    className: "form-group col-md-12 col-sm-6 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "field-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 23
    }
  }, "State / County"), __jsx("input", {
    className: "form-control",
    type: "text",
    className: `${errors.state ? "error_border" : ""}`,
    name: "state",
    ref: register({
      required: true
    }),
    onChange: setStateFromInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "error-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 23
    }
  }, errors.state && "select one state")), __jsx("div", {
    className: "form-group col-md-12 col-sm-6 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "field-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 23
    }
  }, "Postal Code"), __jsx("input", {
    className: "form-control",
    type: "text",
    name: "pincode",
    className: `${errors.pincode ? "error_border" : ""}`,
    ref: register({
      pattern: /\d+/
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "error-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 23
    }
  }, errors.pincode && "Required integer")), __jsx("div", {
    className: "form-group col-lg-12 col-md-12 col-sm-12 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "create_account",
    id: "account-option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 23
    }
  }), "\u2002", " ", __jsx("label", {
    htmlFor: "account-option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 23
    }
  }, "Create An Account?")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    sm: "12",
    xs: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }, cartItems && cartItems.length > 0 > 0 ? __jsx("div", {
    className: "checkout-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "order-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "title-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 27
    }
  }, "Product ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 37
    }
  }, "Total"))), __jsx("ul", {
    className: "qty",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 25
    }
  }, cartItems.map((item, index) => __jsx("li", {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 29
    }
  }, item.title, " \xD7 ", item.qty, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 31
    }
  }, symbol, item.total)))), __jsx("ul", {
    className: "sub-total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 27
    }
  }, "Subtotal", " ", __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 29
    }
  }, symbol, cartTotal)), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 27
    }
  }, "Shipping", __jsx("div", {
    className: "shipping",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "shopping-option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 31
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "free-shipping",
    id: "free-shipping",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 33
    }
  }), __jsx("label", {
    htmlFor: "free-shipping",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 33
    }
  }, "Free Shipping")), __jsx("div", {
    className: "shopping-option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 31
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "local-pickup",
    id: "local-pickup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 33
    }
  }), __jsx("label", {
    htmlFor: "local-pickup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 33
    }
  }, "Local Pickup"))))), __jsx("ul", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 27
    }
  }, "Total", " ", __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 29
    }
  }, symbol, cartTotal)))), __jsx("div", {
    className: "payment-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "upper-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "payment-options",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 27
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "radio-option stripe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "radio",
    name: "payment-group",
    id: "payment-2",
    defaultChecked: true,
    onClick: () => checkhandle("stripe"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 35
    }
  }), __jsx("label", {
    htmlFor: "payment-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 35
    }
  }, "Stripe"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "radio-option paypal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "radio",
    name: "payment-group",
    id: "payment-1",
    onClick: () => checkhandle("paypal"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 35
    }
  }), __jsx("label", {
    htmlFor: "payment-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 35
    }
  }, "PayPal", __jsx("span", {
    className: "image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 39
    }
  })))))))), cartTotal !== 0 ? __jsx("div", {
    className: "text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 27
    }
  }, payment === "stripe" ? __jsx("button", {
    type: "submit",
    className: "btn-solid btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 31
    }
  }, "Place Order") : __jsx(react_paypal_button__WEBPACK_IMPORTED_MODULE_2__["PayPalButton"], {
    paypalOptions: paypalOptions,
    amount: cartTotal,
    onPaymentSuccess: onSuccess,
    onPaymentError: onError,
    onApprove: onSuccess,
    onPaymentCancel: onCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 31
    }
  })) : "")) : "")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutPage);

/***/ }),

/***/ "./pages/page/account/login-auth/index.js":
/*!************************************************!*\
  !*** ./pages/page/account/login-auth/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shop_common_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/shop/common-layout */ "./components/shop/common-layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/base */ "./config/base.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\multikart_react_all_in_one\\frontend\\pages\\page\\account\\login-auth\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Login = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("test@gmail.com");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("test@123");
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(localStorage.getItem('Name'));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem('Name', name);
  }, [name]);

  const loginAuth = async (email, password) => {
    try {
      await _config_base__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithEmailAndPassword(email, password).then(function () {
        setName("Emay Walter");
        setTimeout(() => {
          router.push(`/page/account/checkout`);
        }, 200);
      });
    } catch (error) {
      setTimeout(() => {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error("error", error);
      }, 200);
    }
  };

  const googleAuth = async () => {
    try {
      _config_base__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithPopup(_config_base__WEBPACK_IMPORTED_MODULE_3__["googleProvider"]).then(function (result) {
        setName(result.user.displayName);
        setTimeout(() => {
          router.push(`/page/account/checkout`);
        }, 200);
      });
    } catch (error) {
      setTimeout(() => {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error("Oppss.. The password is invalid or the user does not have a password.");
      }, 200);
    }
  };

  const facebookAuth = async () => {
    try {
      _config_base__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithPopup(_config_base__WEBPACK_IMPORTED_MODULE_3__["facebookProvider"]).then(function (result) {
        setName(result.user.displayName);
        setTimeout(() => {
          router.push(`/page/account/checkout`);
        }, 200);
      });
    } catch (error) {
      setTimeout(() => {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error("Oppss.. The password is invalid or the user does not have a password.");
      }, 200);
    }
  };

  return __jsx(_components_shop_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    parent: "home",
    title: "login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "login-page section-b-space",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "Login"), __jsx("div", {
    className: "theme-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    className: "theme-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    for: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  }, "Email"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    defaultValue: email,
    onChange: e => setEmail(e.target.value),
    className: "form-control",
    placeholder: "Email",
    required: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    for: "review",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 41
    }
  }, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "password",
    defaultValue: password,
    onChange: e => setPassword(e.target.value),
    className: "form-control",
    id: "review",
    placeholder: "Enter your password",
    required: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 41
    }
  })), __jsx("a", {
    href: "#",
    className: "btn btn-solid",
    onClick: () => loginAuth(email, password),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 37
    }
  }, "Login"), __jsx("div", {
    className: "footer-social",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 37
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, __jsx("li", {
    onClick: facebookAuth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "fa fa-facebook",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 68
    }
  })), __jsx("li", {
    onClick: googleAuth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 66
    }
  }, __jsx("i", {
    className: "fa fa-google-plus",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 69
    }
  })))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "6",
    className: "right-login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, "New Customer"), __jsx("div", {
    className: "theme-card authentication-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("h6", {
    className: "title-font",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, "Create A Account"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, "Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register."), __jsx("a", {
    href: "#",
    className: "btn btn-solid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 95
    }
  }, "Create an Account")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./public/assets/images/favicon/1.png":
/*!********************************************!*\
  !*** ./public/assets/images/favicon/1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzY5Qzc4QTkyNjcxMUU4QUQwQkM0RTQ0N0NBQzg0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzY5Qzc4QjkyNjcxMUU4QUQwQkM0RTQ0N0NBQzg0MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzNjlDNzg4OTI2NzExRThBRDBCQzRFNDQ3Q0FDODQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzNjlDNzg5OTI2NzExRThBRDBCQzRFNDQ3Q0FDODQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xF1arAAAAVZJREFUeNpi/P//P8NAAsb/PtYD6gAmIM4cQPszQQ6YDMTuA2A5yM7JIAcwA/FKINalo+W6UDuZmaAC/EC8EYhF6WA5yI4NUDsZmJAkFIF4MxCz09ByNqgdSsiJEBmYA/FcUO6gRY4D4nlQOxhwOQAEooG4lgYOqIGazUDIASDQgE0xBQBkViOucgBXcM1CDy4ygTnULEZSHAACXNAEI0+B5XJQM7jwlYSEssxmWJYhEYD0bCGUtZmILDSWQQssYgFI7VJiCjcmIg30AuKJJDhgAhB7E1sZEQuyiay4QGpySKkNSQGgissNj7wrVA0DrRwAittVOOIWJLaaxLRCsgNgqXs9WuoWhYqRnFuYyMzfytDsyQbFm6BiJAMWPHJ/gfgTHnk1IO6FstWB+D0etXy4ooaFQHwLEvBADgOFgIlhgMGoA0YdMOqAAXcAC42a4EMnBAACDAA7yCaRsxr4JwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/assets/images/icon/american-express.png":
/*!********************************************************!*\
  !*** ./public/assets/images/icon/american-express.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAEXklEQVRIia2Vy48UVRSHv3vrVlV39WseMIwOyDsM8ggqGEUMkrAwYuJWFrjwkRj8B4xx5cadC+Mj8RFjYmJYYNyIosb4HtCIYUGizoAzY8tMnAc9dHdVdVfde130NMy0MEiYX1LJvXXrnO/m1Mn5iS3Hy9xAu4FDwF5gM9ADCGAWGAF+BE4Ap5dKIpYAHQBeAA7e6Cbz+hp4Gfj8WofyOkGvAV/dBATgIeAk8Nb/ATnAt8BzNwHo1DO0yphZCvQd8OAtQNq6l9a/uyboTeD+ZYC0dRfwfidoD/DsMkLaeoL5CikAAa8DVDRoBACusCghCA0I7KJogcBikfMnBpBYbCsXBoEvLCUJGt4AdihgmxRiz0xTszMLGWGxBiIE46Fmb9EhtoByaDY1WSWJrUFqgwGslGQkxKnFWovvCC43NVo6jGmJL9gO7FbA4ammYWve4chqjw1dHho4M9VgV6/HuUrCmpxi+nKDO7oDJqoJWSUo5XwSbfjnUoTvOfQXfZSE0VrKoTUB7wzXeWUkRCmJIzisHMG+mShl/6Yi52PN0FhMV0/AnzVwA8GXFUM+tmzWhiR1+GIyZGteUk08fptt8uKObj4enmNqJmT1qgLDEyFl4VJzFCUlMK1q7xX9x/4qD+bkwEvb80xHmrmG5nJqWVvymIwMh9YX+PCPOQpJwrq+HMqV9LqCc5UEBTS0RWDR2jJcTXnqzhInLlQpFDI8f3aOvAAlmFRY2+UqyU+XUsoNQEi6rKFeSfCN4eRolShKOFVJuEfX6StlGApTaCT0F32Gxqus6MpgHAcRNvlsvE4j0QxfrGGjJjrj4ilZFNs+KtfrqQ0mGgZftLpmrgn7V7k83C0ZmY4o5D36Cj7nZyNUqukv+fiuw4XpiI19AY04wTEWFfhcnA1ZWfSJGymDBYdXLxomQx2q1FLxHRGsC5wr7VtPEw6sybEy6+Baw8CKHGORYXCgSHk6YqDoUtYOITEm66OF5O4cTFkHaTOs683yS7nG+v48q2brjFbTqqQ16jsksMZC1EBZi0xTbBgjG002FhWDJZdNvuXg6gARNYhqDaSFza6hPNfExAm9aM5XmtyWlTSMHZPAD52YQAnGqgk5V1ITivHI0FPKEsYp1lO8XU7ozSruWBGwNu9ye17xdyoYSSRru3xiBCrwmYwMp2cSejw5JLYcL+8Ezi4EOQKqiSXjOXRlHGailOlIs6HkMRsmxKkl8CSJtgSuJOc5NLVFW4vrCOpNQ3fGYaKe4hhD0ZP3tY3vV2DX1cKBtqBta/RIIZBAam1rLSA19sooWlR0IcCCxeIIgSP43cKgmj8/yoKxbgEpWoCFchfsXdleL/7m6ivRznUUrk7vIeC9/0bcso7RcupFfvQkcGYZIeeAx9ubTod9APh5GSBn6TDRTlBMy4bfvQXIB7TctboUqK2ngUeA728CcAp4DDgCHa3IvMNeR5/OP/uAR2mVYj1QYn4kAqO0GukT4JulbvEv6ofAhwGHwC0AAAAASUVORK5CYII="

/***/ }),

/***/ "./public/assets/images/icon/cart.png":
/*!********************************************!*\
  !*** ./public/assets/images/icon/cart.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzE0NDdGMjcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzE0NDdGMzcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3MTQ0N0YwNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3MTQ0N0YxNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hNS3IQAAAf9JREFUeNqklU1IFVEUx+fZKwldmEGJHyjvWbpxUUi0aaEouAzMQIUnSpC6UHfiVxuN2hluXKkbN4roJgRBUtyECIpYEcJDhBYRqahoIT6n34EzcJne14wHfm/ePcz8597/vedMIBQKWUkiG0agAfIgADb8ggUYiEajR4kezkgi/BxOoR0+QjPUQiPMQwschsPhpkQCgQQzb4VJGIPuJBN4D73QyQrG0xGXRBTewLCVOnpgFCp4wZdUtizCfprCFoIfuHyHpVSe34cyiFje4iXk438omfgz+AtrXpSZ/Y5ufnU8z8WzOijX/Dbc8qB/KZ7rf7FoBbqC/HyCKpiAOfit1ngNOV13xB7ogMdBFZ6BVz4ExZL/cngf4/JaxKf0XP+BIsjyIo6QOZT92lO9WRFvg114B+vww/If91R4hBUNmUUkby1Uz33ZwirkEJxITyJ/6RzFIm1KD6zrRZnqlKZqXPWwYYzlFGzCQyP3mdlG/HTFAqh0td9HkGPknkKxH/EzrTqzUM7hwsgduO5JW9xS/7yM0xbPUSucuAm3IdPI5cLdRAJB42prITkhbaHfGP+EQS0SJ/pg1VVEtqMbNPzNdK1kS3HiGN66v0Su8r9SnTP3l+irnpAXukl2HF/tOGPnHmkb07LhvLDEnLnEE1jWj3HMRwHdgG9Q4yT+CTAApdl93m9bmRMAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/assets/images/icon/discover.png":
/*!************************************************!*\
  !*** ./public/assets/images/icon/discover.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAE80lEQVRIibWWa2wUVRiGn7ntzC67LYUWBAxpQUqkBm+AtrUQE4iQIpgmhGAMYPCCaIiJPxRI9I8GNdGooEAgEECNoCiIYCIaLm0pVLDWAoVSCZXaUiiku1v2MrMznz+WJVCQooH335mcc5555zvzvUeJRiL0ojFAOVACjAD6AQpwEWgG9gM7gYM320S5CehxYDEwsbc3uaw9wFLgp/8CWg68fIuAnloNvNAbSAN2A2X/E5JRLTABSGQeqD0mVN4GCMA40rW7oqtBK4Di2wDJ6EFgfWaQ+XRjSdu9ExoPVGYcfXqHIACfQdpREXDkDoIAxurALM/zME0fpuW/4SwvlULVdQCitoBPQYAsANfBcT0Mn3ndumQiTjJpo6rqLB14zDRNYrEYy1esxvT7qXiynNa2dtrazyIiTCgr4aNlK8gZks/8meUoP65EyR/F9s5+jC4sICsYYNumb9F0jcEDB9LecQ7XTTF96hRM04ebckt04B7Tsqg+UMve6oOUFo9j9osLGTliGFU1tcx5eiYnmjfScbGL0okjcTYsxPhuI9ZIg99aRnFs5jsMD7qsWrcB13GYNnUKx5ua+b2+gUAgwIyK6XRHo/kq0BegKxzmsdJiKqaVU3XgIFmhEO+//Rb1R46ybOUaFr6ygCdKx+CeOkTKB3aTwxvPP8XmHbv4YvMW3nz9NfJychhfWszxppPk9Mvh0XFjSDk2qFqWtnjRoiW6YRiaprH56y3UH23kpefm4nke0Wg3mqZRMa2cTV9t4lRnN49MrsB37jBe0cNY89bQ3nqG+wsLKJ88iZoD1eTmDeDewhEMGXwXAb9FfsEwUqbPIRqJ/B2JRMROJqSttVUi4bCIiNjJpLS0/CWO44iISOOxRqmq3i8ZnQ0npO1c15Wx57pypuW0NJ1sFhER17Glrb1DoiIS/WVdhxKNRPaKyHhVVQn4/TiOg5NK0ScYZO+ePTQ2NhKLx8nt35/s7Cw6L1zkfDjGsPyh5PUNUVlZSTKZpLCwkDlz5yKeRyIeR/WZKIZOcv9mWPHMIRWoVhQFEeFSLIbtOIgIALquEw6HudDZic80KSq6D9d18eIRsvw+wuEwiqrieh62bROLxUjE47iagWPo2LVb4YOZkDu0RolGIqOB+hv9P4ZhYFoW4a4uHMchFAphWhYAFzo7iUaj5BcU4LkuiUSCRCyGlZeHB7BrFbJmPph+GD2pJNPr6oAHroaICJqmAeDz+RARbNsm417XdTRNw3EcVEUBFFJ+CwFY/yry/ceQFYQBBU3k3D0yAyqmR1u/ZXkeBLPTSdbSgKxdAH9UwaDBYJgQyJ6Ebv18dfCtBZ69ZYAIWEHwqeCk4If3kG3vQrwbBg0H8UDVvkHVZuC51yXsYeChmwOAPqG0AwGqPkd2fggn6iC3PwT7gZMEVWtEUUfhucD1UW4B+0jn07Uy/GClGyvdEfh1C7JvHRypBMuA3KFpl04SAtkNGP4youfDqOk66z22S5CO4TV43jx0H/S53NEdDxqroX4nUrcdTjWAqcHgAlBUSDlpi2afL8kaOBs77uK5ZED/ft3StCmk7CWcrC7l+B6k+QCcroPopfRpCuWlHYibBmlGLYZ/KWZgK74AJLoh3A6a0QsoFII/65BPKsroPDMVM1BCoG8+upGNCKBEUNUWNL0GzdyBZuxGuVxEMwjJ2DWgfwC09kc21Mu6AAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/assets/images/icon/mastercard.png":
/*!**************************************************!*\
  !*** ./public/assets/images/icon/mastercard.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAFjklEQVRIiaWWa4ycVRnHf+e8Zy47l52d7qXdWdputwsLtpUVWivLVkrgk2DwkghY1EBq8Erwgwnxg+FLIwlRMUGNxgYb+AJagjFySyRlu25Li9SitbSulO223e7M7Ozc573MOccPs0Nqs11t+CfvhzfPyfM77/Oc8/xfMf74fv6HtgJ3AWPAtcAqQAAFYBqYAl4G3lopiVohdjvwA+DOK8Q7gcGl+A+BA8CPgNeXWyyvkORp4I0VIMtpJ/Aa8Ov/B+QAE8C3rwJwub5Oq4zRlUAHgR0fAdLWJ2n17kNd2qNfArcACGsJVJhyLImvwghriXt1Em4VYQxCWFzCLJoUrgkjhCUp63SJCg4GgwD4BLAP+NqloG3AN4S1WCmZS68h6lbZdOZdeisLBE6ImZ61vD8wTIfvUl6MkJQenwodJxPJEVjF6eZ63g1GiDouGSdP0zoAXwV+Axxsg37e+ooQ86lexk9M8qWpF9mYnSHmu2ghKcY7mRrayjNjD3Dn6pN8l33cGJ0G2QAkjWaKP9dv5iflB5kOBtgYOt+G/QLYIsYf378J+AfA+VX9fO7wH3jspacwKkw21UvgOAgLcd0gcq7Euc2D3PpIFhHPQbUP3yqEgJBsgLNAqdHPfdknec+sZ70zh8YB2CaB+4W1zHetZvt7h/n+Sz9jMd7FTLofX4WwCIwULPpxCpsy3DCcpXRM4gVrca3AmCbaSlwdo+EPkuqYY2/3HhK2RoV4u//3S2C86TgoYfj8gd+h6y5532LyOfwLF2gWFvFm5wiy5+lccxZzTZlSzqd2fAYVcUHFsOWz2NpFcHN4iyEy9iS74q8xp3vboDEFDNeicdYeO8ToyACJ3T9lYzSG1Zr5555FaIHqXUPixuvoSEzjz19EywpyeBwx9gCqMoP+1x/BNEF72Egatuxg/G9VfvX2LKZTIjGDCujyVZjkB9P03LSOru89iq5WKU9MsmHPHiJDG/DOnEHXG8jULpy6T6hWQ23bgTn9CPrvzxK+91Vk+jpss46ZPQB9GXrUC6RkmcB2ExGmUwJCGkMQT2KTSVjI41+YI5zpp+OGEXS1SnR4GBkNY7wGxtcE2UXy+35LaPDjODd/C9G5HqJpbOEUxFZD8QRufpog3I3EfnhhizGvHsuObufff32B4AtfJB9LEcn0I5QCazGej656pEY8Oga7qB6dIeKcxBR3gXYJJh4DDObi28ihe3D0EU6VOijIPlaJ8wAVBUx3BF7m3DVDvD6hePjgBOVYGuu5WK0RCBASY8OYUR+xqYHjJUnvjBJMPoEJJBgDgI2miR55AhTsN3tJCLd9GGYU8Bewn04Xc/z+rofYWpxh7PQRpgeG0I6DsBYEaC0J3q+TDOVJfNZgkyE8dx0i2iqNRRKTJUjC0wvf4WB9M9eGZrGtcXTIWbfz3hyIb0YDj3Ksk6mR7fSV8mye/SddtRKRpk9no0pfLUc53MmPN+4m2NbN9aGjKFtESQ8lK4ScAhDiqcLDPFn+MhmVJyQ0LY/kUbHksMeAUWU0uWQ3Tcfh9hOTjJ45Tk+lQOCEONszwOTHxnhr4CaSxTJ3qze5LfYOA2qBwDqcCtbycv02ptwtDKgsceGiW+ZwCri+DbqlPdalNfgqTD7ZDUDcq9OUDrVIjLhXp7e2gGvDXFi6jHFZR1tJ1SRIyBqrncJSKUW7P3cAb7SH6iHgGeBBIyRKN1lTnMcKgREty0rXigA0cVBCs05dxCLQViIk9DnFywEAz9Ny6v8yvoeAdy5dJazFMRrHaJaTwKKExmHZ+AngvvbL5Q57K3B02axXp+MsmeiVQC4tG977ESDP0XLXykqgtnYDnwEmrwJwGLgH+AoszZ1LtNJ/3StLzzhwN61SbABStC5HCfiA1kH6E/DmSrv4D19DRIS7aeNEAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./public/assets/images/icon/paypal.png":
/*!**********************************************!*\
  !*** ./public/assets/images/icon/paypal.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADwUlEQVRIibWWW0wcVRiAvzN7gV12ubVcCoJWQTQaLChekKJW1EjbaGxMxaTRqG1MMTE+GFMS6oOJfW5SrbHBS1If8Mk00iaatDQYKaKGNdZWi0qQCqUsMLMsy+7M7u/DOIhrXEoLXzKZnHP+Od+cy8x/VMQwWIa7gK1AI1ANFAIKmAaGga+B48BApk5UBtFDQAfQstyb/E0vcAD4YiWiQ0D7FQrSOQLsWU7kAk4Bm69S4vAN8ACw4FRoaQF9qyABuBt77RZZKjoM3LcKEoc64GOn4ExdA/Zw14JmoM8Z0TtrJAF4F+wR3SYiPyqlCAT9gAvEYm4uhoiglPrXUyKgFAR8XnBrYCWZi5mL9SJCMNsDbhfxeBLTsgAa3ECbphRej4uLE9Nc+GOSqopiritdh7OE5kIMT3YWC/Mxsv3ZAIxemmEkHKWqOEhZYQA0BSjMBZPL0QTjs1HyPVCYF0Qp1eYGmnJyfFwK67Ts/4ANQR/hWILOnVsoLsjFo8EdG0s5+8som6rKmZya4dzFaV7v/Z0cJczELd5suZWSPD+WadFcU0F79yBGNEbXU/WICJqmGt1AFZqbwQtjDI9P0bnzadrfO0ZoZJyJoWG6T33Pq082cX5simcfrqfrWB8l11eiW15e23wjL382RGhcZ/K3MB/1D3NgWy1/6vM8XrOB8tIi5iIRUim5QRPIBwiNTOCyUnzSG+KNHc2sD/op8Hnxez3kZHmpLivkmY4jbKosorWpjtGJaY4OjbHvwRoKfF4CLo3KwhxODk8C8EhVEWA6S5vrdrs0BdD15SBNtTfR89Zuu2VHByUBH3hcvPhoA4dPnCExEaZz12Ns7w5xT2UBPXu2AEKw41NKfF5K8v0kRTDiFnXl+Uh8UYRbRGZj81H/wd3bqS5bj1gmppXk+P7nOT82SXVFMevyAhz6vJ+2F1rJCuTxyp3l3FwUBDNBImlx4rlGzl2OcEtRkCy3i3gyhVIwn0g6ngiGbpzWZ2fFJin67KwYui5L+fanX2Vr5/syORUWM5EQEVMkGV8Sa4pIyr6n7HZd18UwDInY14CKGMbbwL7/+9pEBIBgbi5YCYxoDE1L/0Uuy0EVMYxaIJQpSimFphTJVGqlAod7NeAHYChTlIhci+RnYMCZg71X28sVsBf+SRP9wIdrIOkGTsJ/M+x3QP0qSc4CtzuF9O1zPzC4CpIQaUk0XbSAnYa7rkFyFDu7RjKJHF4CWoGvViA4AzwB7AIkvTHTuc6hCdiGPRUbgTzsA6QOjGBvpB7gdKZO/gJX4qTG+gXfMQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/assets/images/icon/search.png":
/*!**********************************************!*\
  !*** ./public/assets/images/icon/search.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQjYyN0M4NTcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQjYyN0M4NjcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNCNjI3QzgzNzJFOTExRThCNzUyQzZBRTY4NDU5RDU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNCNjI3Qzg0NzJFOTExRThCNzUyQzZBRTY4NDU5RDU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WYb6uAAAAbNJREFUeNqslU0oRFEUx++bptSQxbCwflO+kiJFWEgpFhZTIhvFklJKsvOdBVIiK8ZKFIkFUZqVsLCyIU3WFkhGNOXjf+o/9RrvznvzZk79undm7vzOfad7zzNM01Q2kQ+6QDuoAAa4A2dgD7wlF8ZiMaULw0Y+DuZTvvtlgmRMgUknuS/l8znFD6AXFFMq64J8mlswAS6BX6UJqzwKWvnHUrADni2/v4J9UA3GQAMTOMplcQsfd1o5xwIYBXWhUGguXc3zMH6BR2CqzEJKVAUKUft3u533cD6iMo9hjn26soQ5P/Egj3IM6+Ryjn9AQnmLOCjXyQ2VfRg6+T1Hv0dxAR228kPO2zyImzke6OTbnC97kK9w3NLJP9knyniZ3MYgqAEzdmc8tXFdgXrevCUH8RBYBS8QF7npLU3gGiyCG9DJ1puMAOgAFxTLboO4/mtu5N9sRrOgFhzxDMcp+gDHoJGdswSsS3mQYNNtP5eQR+3mTistL4tTsAueLGtF3A8iKNGAG7nrkJcFd/4vgS8Ht1NRGJEE1hLlRG6TYENlceW1CSCWqYyBnMotCeTkJf4EGAA6kXMrGB0cpgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/assets/images/icon/setting.png":
/*!***********************************************!*\
  !*** ./public/assets/images/icon/setting.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMENEOTc1QjcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMENEOTc1QzcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwQ0Q5NzU5NzJFOTExRThCNzBFOERCQzg1RUE3OEU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwQ0Q5NzVBNzJFOTExRThCNzBFOERCQzg1RUE3OEU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7VNBOgAAAv5JREFUeNqclnuITFEcx++sKazHGvEHosws1r/IeoUirRLL0P6BTYvUsnlNm1dGS0hEi1WKSSuPvItlYmVJ2rTyj5U0YrDLem2bRxHr86vf6HTde/dy6tPp/u4553vO+T3uDYTDYctH6wuXoA+0QwDaYFYqlXrd0eQsy1+bD4NgEkzWvhcs8TPZSWQCPILNhk123gjNBo/hV2ZAJBKJQSNM60ikAO7ANVgP1Wp/pycx20BoVYFDdDvgMiR5nusmMh2uwkJYC+KsmXAL9sIJm8hxqGDBWvpFkId/yulnwxlTyBSpgd062dIrCcEztVfYRMS2BdIyDoGUGOku0q0ToT93bUSXLLJaTg8tPgPC0rUtwzc96J5DgncxsQWN9+LofvAEcuGD9Y8Nge46/0ZGwMnxS/X4CYc1RsM5uAkXYKLDmCr4hkCRaZSTdFVnd9FEC+siZiuDSjgJ4uihUAcbNKoy7SFEOVGZhv13OCU+qVexNh2YhJ3GxHFwV5OwzrCPgvsS9uw8aVzZKrpC3XA3uS0RadUoane5armeJljgcj0jEcn38FNafPIWenv4Mwduu7yTk3X2EMime5+lRc8rkr7AGJd3Y+GHR3h/lVsSX7yEe5kSoUm53xgb1ys7CA2GPQ9WSiW27V4idI4+Ss587hQKhU7rkZs0fCWLf6qzLU0s2a2MGwCDoRiOSWSx2ypDoNQoQWktqrGAw/ekQQtigc0+BdZAT9kdHIArZsYjIiE+Atswe56YTXYxHGY4XHGt4tWWw1PEjiC02CnjpbQvU5Fm6z8aC3/U+fMQ2uYksh32wQvbXLGVuqxbwmKVNqEW9etGJ5GonqZQnyVB30C+Vuhym8AK2CPJiNAn6K9+mar2YieR83JMrVtxjap6zQWpqCU2Efm+b2Xn4yUA5BAIbKK/LmOxV7tV4bP6hZSCedjIgRzNJ7O9gmy9Iik5u/QLGeU54RVdln7fc222oFbekPFLNAQeGL6I6w381YI+A0fiv0gzPyMiJeOon8m/BRgAuQrmGVlzgYMAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/assets/images/icon/visa.png":
/*!********************************************!*\
  !*** ./public/assets/images/icon/visa.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/assets/images/mega-menu/fashion.jpg":
/*!****************************************************!*\
  !*** ./public/assets/images/mega-menu/fashion.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgB8gEsAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopks0VvE0s0iRxoMs7sAAPcmsAePfCRuBAPEemFycf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0OfmjiVsMWYcZwAATWp4q0e8ubbTL3R4o3vtJuVuIbd22rKm0o0eeikqxwexArpKKAOWTx3YLHi60zW7a4A+aB9MmZgfQFVKn6g1BpUGoa/4vTxDeWE+n2NlbPb2UNzgTSs5BeRlB+UYUAA89+K7CigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="

/***/ }),

/***/ "./public/assets/images/paypal.png":
/*!*****************************************!*\
  !*** ./public/assets/images/paypal.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAABuCAMAAABm3eR/AAAFTGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTIgMS4xNDk2MDIsIDIwMTIvMTAvMTAtMTg6MTA6MjQgICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpkYW09Imh0dHA6Ly93d3cuZGF5LmNvbS9kYW0vMS4wIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpQYXlQYWw9Ind3dy5wYXlwYWwuY29tL2Jhc2UvdjEiCiAgIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIgogICBkYzptb2RpZmllZD0iMjAxNC0wOS0wNFQxNDozMzo0OS42NS0wNzowMCIKICAgZGFtOnNpemU9IjU3NDAiCiAgIGRhbTpQaHlzaWNhbHdpZHRoaW5pbmNoZXM9Ii0xLjAiCiAgIGRhbTpleHRyYWN0ZWQ9IjIwMTQtMDktMDRUMTQ6MzM6NDguMDI0LTA3OjAwIgogICBkYW06c2hhMT0iYjAzNTlhNTNjMjUzNzJlMzIyMTcxMTVmZjA3MzYwOTFiYjhiMWFhZCIKICAgZGFtOk51bWJlcm9mdGV4dHVhbGNvbW1lbnRzPSIxIgogICBkYW06RmlsZWZvcm1hdD0iUE5HIgogICBkYW06UHJvZ3Jlc3NpdmU9Im5vIgogICBkYW06UGh5c2ljYWxoZWlnaHRpbmRwaT0iLTEiCiAgIGRhbTpDb21tZW50cz0iU29mdHdhcmU6IEFkb2JlIEltYWdlUmVhZHkmI3hBOyIKICAgZGFtOk1JTUV0eXBlPSJpbWFnZS9wbmciCiAgIGRhbTpOdW1iZXJvZmltYWdlcz0iMSIKICAgZGFtOkJpdHNwZXJwaXhlbD0iOCIKICAgZGFtOlBoeXNpY2FsaGVpZ2h0aW5pbmNoZXM9Ii0xLjAiCiAgIGRhbTpQaHlzaWNhbHdpZHRoaW5kcGk9Ii0xIgogICB0aWZmOkltYWdlTGVuZ3RoPSIxMTAiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iMzE5IgogICBQYXlQYWw6c3RhdHVzPSJTb3VyY2VBcHByb3ZlZCIKICAgUGF5UGFsOnNvdXJjZU5vZGVQYXRoPSIvY29udGVudC9kYW0vUGF5UGFsRGlnaXRhbEFzc2V0cy9zcGFydGFJbWFnZXMvR2xvYmFsSW1hZ2VzL21rdGcvTG9nby9BTV9TYnlQUF9tY192c19tc19hZV9VSy5wbmciCiAgIFBheVBhbDppc1NvdXJjZT0idHJ1ZSI+CiAgIDxkYzpsYW5ndWFnZT4KICAgIDxyZGY6QmFnLz4KICAgPC9kYzpsYW5ndWFnZT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz7vtJu1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFGpPRusHTDB1vjcnoGKrigJbEIaviAE6OKn3AesrwUW+szSM39oYeBiOFZnSnNjJm+7pNEKLdNrPmkZu4k9L0i2qIXKLTk3JEjKbHLne8MlOchM3yuYWbAIXF1NjjxeX0k8Dia2mT6jpHjSpLIYnK+sh0is7z0Nfo7u7u8m51JYPF++rNH4zMgn6E15Qp+bK3jtHzibjfWWeYdSxT7jIsasTtT5nQ79GhcYm6p93zf83v8fP2mdT1AGipE53Zu+T3tyU8YcLs8Z0giEBi3PH7+K0vFprXAieUcavX8mQh9Y+VUbzp4rzE3iAwn6jB1O764+Xtj1BzS7rq4fL6CSB55vT7TExjAHm5r1hv70Yknp6e8vn9SVeOyM3cqcnkxsbGntrz63yHWDBdvWo1ED6OioSf8VdclrvdqpOp/dujteH1QIGwW8DrM6bbzuz5wMnjcMbuv9bnqX07wsfbs7nU3+Tw1NPUY7fgparHJj6QI4bIIUeavbfEruD1Q6vd7/n9QWKlK7Dkr77Y7lZiV7/ryOHx2Ftmdcjwdk1xQbfodoGp7/L317qOoSdDqtXtoa3TSTFgDqbfYH+zxOj2NpjRRrjp95yjhI+4NEFvTrbjiNDuX7vkASFpxun4+9XX+sbLQInHS7vnv+b3AG+wGix8LYW71Ov3AI/PuN3wULPg/ePlPrXmMK/jVazb7cnPHihsPrjnyt7vwcjekp/KEjWc1+bzwef4w8bYb8jtDxpjEDah29vbuLi4ADCHAJzef5m53t7ev8vfd12FxIsxsT1aHZDPO3yxKIDDDzNv3+buAD59WVRcrbTKn7HSGJfU/vHy/eO4D5LPn7TMZlpWeWRO//nx/vTjMHSo08zXHjFqdGxt3en15OTkltfyxJJEr6+vAmCf79fbwE5im9Dr3JOcvJaoyqCxikVKwDRPj4BxH2ef0kpe0s/L9vb2AJbW2WMq9Xgggb7he8fpAT+MFjGL4crStoQ24tXD7CAnAJzc+aYb7BwuADRzIzhx////////JuoP1AAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAABH2SURBVHja7J0NXBT3mceJyK5AYAUUOOyCuiqinlJXcrgEXSyKL0GIEInBNUiMNkTxFRXtZhH1iG4wAirINb5gq1GgibGJ2kQsEo2iQZOYNmlqyrWX62vMJfXueIkP9zz/mX0ZdmZY0CP9yPwMs7Pz313g6+95+f9nxnh0KLoXeSgIFH4KP4Wfwk+Rwk/hp/BT+ClS+Cn8FH4KP0U94Fd6ziafQoVQ9/ltPueQl4Ko2/zOOStPYdRNfvUCfu8rjLrJr1DAL9Qx4MUpUuqzcg1MWRbB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"

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "@firebase/app":
/*!********************************!*\
  !*** external "@firebase/app" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/app");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "i18next-browser-languagedetector":
/*!***************************************************!*\
  !*** external "i18next-browser-languagedetector" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-paypal-button":
/*!**************************************!*\
  !*** external "react-paypal-button" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-paypal-button");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi93aWRnZXRzL2JyZWFkY3J1YnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb25zdGFudC9pMThuLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29uc3RhbnQvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lcnMvQ2FydENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3RlcnMvY29tbW9uL01hc3RlckZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3RlcnMvY29tbW9uL2NvcHlyaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlcnMvY29tbW9uL2NhcnQtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vY3VycmVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXJzL2NvbW1vbi9sb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vc2VhcmNoLW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXJzL2NvbW1vbi9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vdG9wYmFyLWRhcmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXJzL2hlYWRlci1vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaG9wL2NvbW1vbi1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9hcG9sbG8vYXBvbGxvLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFnZS9hY2NvdW50L2NoZWNrb3V0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3BhZ2UvYWNjb3VudC9jb21tb24vY2hlY2tvdXQtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlL2FjY291bnQvbG9naW4tYXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLzEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vYW1lcmljYW4tZXhwcmVzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9jYXJ0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL2Rpc2NvdmVyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL21hc3RlcmNhcmQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vcGF5cGFsLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9zZXR0aW5nLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3Zpc2EucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21lZ2EtbWVudS9mYXNoaW9uLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wYXlwYWwucG5nIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LXNzclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wYXlwYWwtYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiQnJlYWRjcnVicyIsInRpdGxlIiwicGFyZW50Iiwic3ViVGl0bGUiLCJ1bmRlZmluZWQiLCJpMThuZXh0IiwidXNlIiwiTGFuZ3VhZ2VEZXRlY3RvciIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbnMiLCJmbiIsImZhbGxiYWNrTG5nIiwiZGVidWciLCJucyIsImRlZmF1bHROUyIsImtleVNlcGFyYXRvciIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIk1FTlVJVEVNUyIsInR5cGUiLCJjaGlsZHJlbiIsInRhZyIsInBhdGgiLCJtZWdhTWVudSIsIm1lZ2FNZW51VHlwZSIsImljb24iLCJDYXJ0Q29tcG9uZW50IiwibGF5b3V0IiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsImN1cnJDb250ZXh0IiwiQ3VycmVuY3lDb250ZXh0Iiwic3ltYm9sIiwic3RhdGUiLCJjYXJ0TGlzdCIsInRvdGFsIiwiY2FydFRvdGFsIiwicmVtb3ZlRnJvbUNhcnQiLCJvcGVuU2lkZSIsInNldE9wZW5TaWRlIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpbWFnZXMiLCJzcmMiLCJxdHkiLCJwcmljZSIsIkNhcnRDb250YWluZXIiLCJNYXN0ZXJGb290ZXIiLCJjb250YWluZXJGbHVpZCIsImxvZ29OYW1lIiwibGF5b3V0Q2xhc3MiLCJmb290ZXJDbGFzcyIsImZvb3RlckxheU91dCIsImZvb3RlclNlY3Rpb24iLCJiZWxvd1NlY3Rpb24iLCJiZWxvd0NvbnRhaW5lckZsdWlkIiwiY29weVJpZ2h0Rmx1aWQiLCJuZXdMYXR0ZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjb2xsYXBzZSIsInNldENvbGxhcHNlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiY2hhbmdlQ29sbGFwc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvcHlSaWdodCIsImZsdWlkIiwidmlzYSIsIm1hc3RlcmNhcmQiLCJwYXlwYWwiLCJhbWVyaWNhbmV4cHJlc3MiLCJkaXNjb3ZlciIsIkNhcnRIZWFkZXIiLCJpZCIsIm5hbWUiLCJkaXNjb3VudCIsInRvRml4ZWQiLCJHRVRfQ1VSUkVOQ1kiLCJncWwiLCJDdXJyZW5jeSIsImRhdGEiLCJ1c2VRdWVyeSIsIkNvbnRleHQiLCJzZWxlY3RlZEN1cnJlbmN5IiwiY3VycmVuY3lDb250ZXh0IiwiY2hhbmdlTGFuZ3VhZ2UiLCJsbmciLCJsYW5ndWFnZSIsImkiLCJ2YWwiLCJsYW5nIiwiZ2V0Q3VycmVuY3kiLCJjdXIiLCJjdXJyZW5jeSIsIndpdGhBcG9sbG8iLCJMb2dvSW1hZ2UiLCJsb2dvIiwiTmF2QmFyIiwidCIsInVzZVRyYW5zbGF0aW9uIiwibmF2Q2xvc2UiLCJzZXROYXZDbG9zZSIsInJpZ2h0Iiwicm91dGVyIiwidXNlUm91dGVyIiwib3Blbk5hdiIsImFzUGF0aCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImNsb3NlTmF2IiwicmVtb3ZlIiwiaGFuZGxlTWVnYVN1Ym1lbnUiLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidmFsdWUiLCJtYWlubWVudSIsInNldE1haW5NZW51IiwiY3VycmVudFVybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJmaWx0ZXIiLCJpdGVtcyIsInNldE5hdkFjdGl2ZSIsInN1Ykl0ZW1zIiwic3ViU3ViSXRlbXMiLCJtZW51SXRlbSIsImFjdGl2ZSIsImluY2x1ZGVzIiwic3VibWVudUl0ZW1zIiwidG9nZ2xldE5hdkFjdGl2ZSIsImEiLCJiIiwiYyIsIm9wZW5NYmxOYXYiLCJiaW5kIiwiZSIsImNoaWxkcmVuSXRlbSIsImNoaWxkcmVuU3ViSXRlbSIsImtleSIsIm1lZ2FNZW51SXRlbSIsInN1Yk1lZ2FNZW51SXRlbSIsImNsb3NlU2VhcmNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJTZWFyY2hPdmVybGF5IiwiU2lkZUJhciIsImNsb3NlbXlzbGlkZSIsImhhbmRsZVN1Ym1lbnUiLCJoYW5kbGVTdWJUd29NZW51IiwiaGFuZGxlU3ViVGhyZWVNZW51IiwiaGFuZGxlU3ViRm91ck1lbnUiLCJmYXNoaW9uIiwiVG9wQmFyRGFyayIsInRvcENsYXNzIiwiZmlyZWJhc2VMb2dvdXQiLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduT3V0IiwicHVzaCIsIkhlYWRlck9uZSIsImhlYWRlckNsYXNzIiwibm9Ub3BCYXIiLCJkaXJlY3Rpb24iLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2Nyb2xsIiwibnVtYmVyIiwicGFnZVhPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJib2R5Iiwib3Blbm15c2xpZGUiLCJvcGVuU2VhcmNoIiwibG9hZCIsInNldElzTG9hZGluZyIsImZldGNoIiwidGhlbiIsInNlYXJjaCIsInNldHRpbmdzIiwiY2FydCIsIkNvbW1vbkxheW91dCIsImZhdmljb24iLCJyZXF1aXJlIiwiY29uZmlncyIsImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwcyIsImluaXRpYWxpemVBcHAiLCJnb29nbGVQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsImZhY2Vib29rUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlciIsInByb3BzIiwic2VsZWN0ZWRDdXJyIiwiYXBvbGxvQ2xpZW50IiwiUGFnZUNvbXBvbmVudCIsInNzciIsIldpdGhBcG9sbG8iLCJhcG9sbG9TdGF0ZSIsInBhZ2VQcm9wcyIsImNsaWVudCIsImluaXRBcG9sbG9DbGllbnQiLCJkaXNwbGF5TmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiQXBwVHJlZSIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJyZXMiLCJmaW5pc2hlZCIsImdldERhdGFGcm9tVHJlZSIsImVycm9yIiwiSGVhZCIsInJld2luZCIsImNhY2hlIiwiZXh0cmFjdCIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJwcm9jZXNzIiwiY3JlZGVudGlhbHMiLCJJbk1lbW9yeUNhY2hlIiwicmVzdG9yZSIsInByZWZldGNoZWQiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQ2hlY2tvdXQiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiQ2hlY2tvdXRQYWdlIiwiY2FydENvbnRleHQiLCJjYXJ0SXRlbXMiLCJjdXJDb250ZXh0Iiwib2JqIiwic2V0T2JqIiwicGF5bWVudCIsInNldFBheW1lbnQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZUZvcm0iLCJjaGVja2hhbmRsZSIsIm9uU3VjY2VzcyIsIm9yZGVyVG90YWwiLCJvblN1Ym1pdCIsImFsZXJ0Iiwic2hvd01lc3NhZ2VzIiwic2V0U3RhdGVGcm9tSW5wdXQiLCJvbkNhbmNlbCIsImxvZyIsIm9uRXJyb3IiLCJwYXlwYWxPcHRpb25zIiwiY2xpZW50SWQiLCJmaXJzdE5hbWUiLCJyZXF1aXJlZCIsImxhc3RfbmFtZSIsInBob25lIiwicGF0dGVybiIsImVtYWlsIiwiYWRkcmVzcyIsIm1pbiIsIm1heCIsImNpdHkiLCJwaW5jb2RlIiwiTG9naW4iLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZXROYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJsb2dpbkF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRvYXN0IiwiZ29vZ2xlQXV0aCIsInNpZ25JbldpdGhQb3B1cCIsInVzZXIiLCJmYWNlYm9va0F1dGgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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QUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FQRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FWRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FiRixDQUZGLEVBbUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkJGLEVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBUEYsQ0FwQkYsQ0FERixDQURGLEVBbUNFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFB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aUMsd2lEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDJEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsZ3ZEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDdEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsdzFDOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd3dEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsZ3NFOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2xFOzs7Ozs7Ozs7OztBQ0FqQyxrQ0FBa0MsZzNNOzs7Ozs7Ozs7OztBQ0FsQyxpQ0FBaUMsZ3hTOzs7Ozs7Ozs7OztBQ0FqQyxnRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9wYWdlL2FjY291bnQvY2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9wYWdlL2FjY291bnQvY2hlY2tvdXRcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcGFnZS9hY2NvdW50L2NoZWNrb3V0LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBCcmVhZGNydWJzID0gKHsgdGl0bGUsIHBhcmVudCwgc3ViVGl0bGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWItc2VjdGlvblwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiNlwiPlxyXG4gICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCIgY2xhc3NOYW1lPVwidGhlbWUtYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e3BhcmVudH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIHtzdWJUaXRsZSA9PT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3ViVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJyZWFkY3J1YnM7XHJcbiIsImltcG9ydCBpMThuZXh0IGZyb20gXCJpMThuZXh0XCI7XHJcbmltcG9ydCBMYW5ndWFnZURldGVjdG9yIGZyb20gXCJpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3RvclwiO1xyXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuXHJcbmkxOG5leHRcclxuICAgIC51c2UoTGFuZ3VhZ2VEZXRlY3RvcilcclxuICAgIC51c2UoaW5pdFJlYWN0STE4bmV4dClcclxuICAgIC5pbml0KHtcclxuICAgICAgICAvLyB3ZSBpbml0IHdpdGggcmVzb3VyY2VzXHJcbiAgICAgICAgcmVzb3VyY2VzOiB7XHJcbiAgICAgICAgICAgIGVuOiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAndG9wYmFyX3RpdGxlJzogJ1dlbGNvbWUgdG8gT3VyIHN0b3JlIE11bHRpa2FydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhbGxfdXMnOiAnQ2FsbCBVcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hvbWUnOiAnSG9tZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzogJ2ZlYXR1cmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbmV3JzogJ25ldycsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCbG9nc1wiOlwiQmxvZ3NcIixcclxuICAgICAgICAgICAgICAgICAgICAnYmxvZ19sZWZ0X3NpZGViYXInOiAnbGVmdCBzaWRlYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnYmxvZ19yaWdodF9zaWRlYmFyJzogJ3JpZ2h0IHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdibG9nX2RldGFpbCc6ICdibG9nIGRldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5X2xlZnRfc2lkZWJhcic6ICdsZWZ0IHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9yaWdodF9zaWRlYmFyJzogJ3JpZ2h0IHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9ub19zaWRlYmFyJzogJ25vIHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9tZXRybyc6ICdtZXRybycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5X2Z1bGxfd2lkdGgnOiAnZnVsbCB3aWR0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y3RzJzogJ1Byb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdF9zaWRlYmFyJzogJ2xlZnQgc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0X3NpZGViYXInOiAncmlnaHQgc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25vX3NpZGViYXInOiAnbm8gc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RocmVlX2NvbF90aHVtYm5haWxfbGVmdCc6ICdUaHVtYm5haWwgbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RocmVlX2NvbF90aHVtYm5haWxfcmlnaHQnOiAnVGh1bWJuYWlsIHJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAndGh1bWJuYWlsX2JlbG93JzogJ3RodW1ibmFpbCBiZWxvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FjY29yZGlhbl9kZXRhaWxzJzogJ2FjY29yZGlhbiBkZXRhaWxzJyxcclxuICAgICAgICAgICAgICAgICAgICAndGh1bWJuYWlsX2xlZnQnOiAnaW1hZ2UgbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RodW1ibmFpbF9yaWdodCc6ICdpbWFnZSByaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZlcnRpY2FsX3RhYic6ICd2ZXJ0aWNhbCB0YWInLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYWdlcyc6ICdQYWdlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Fib3V0X3VzJzogJ2Fib3V0IHVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbG9va2Jvb2snOiAnbG9va2Jvb2snLFxyXG4gICAgICAgICAgICAgICAgICAgICdsb2dpbic6ICdsb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlZ2lzdGVyJzogJ3JlZ2lzdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbG9nb3V0JzogJ0xvZ291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlYXJjaCc6ICdzZWFyY2gnLFxyXG4gICAgICAgICAgICAgICAgICAgICd3aXNobGlzdCc6ICd3aXNobGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhcnQnOiAnY2FydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbGxlY3Rpb24nOiAnY29sbGVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZvcmdldF9wYXNzd29yZCc6ICdmb3JnZXQgcGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb250YWN0JzogJ2NvbnRhY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjaGVja291dCc6ICdjaGVja291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbXBhcmUnOiAnY29tcGFyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ29yZGVyX3N1Y2Nlc3MnOiAnb3JkZXJfc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rhc2hib2FyZCc6ICdEYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGQVEnOiAnRkFRJyxcclxuICAgICAgICAgICAgICAgICAgICAnU2hvcCc6ICdTaG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWVuc19mYXNoaW9uJzogJ21lbnMgZmFzaGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICdib3R0b20nOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAnZXRoaWNfd2Vhcic6ICdldGhpYyB3ZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3BvcnRzX3dlYXInOiAnc3BvcnRzIHdlYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdzaGlydHMnOiAnc2hpcnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnd29tZW5fZmFzaGlvbic6ICd3b21lbnMgZmFzaGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RyZXNzZXMnOiAnZHJlc3NlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NraXJ0cyc6ICdza2lydHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd3ZXN0YXJuX3dlYXInOiAnd2VzdGFybiB3ZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnZXRobmljX3dlYXInOiAnZXRobmljIHdlYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdzcG9ydF93ZWFyJzogJ2Fwb3J0IHdlYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdib3R0b21fd2Vhcic6ICdib3R0b20gd2VhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2tpZHNfZmFzaGlvbic6ICdraWRzcyBmYXNoaW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnYWNjZXNzb3JpZXMnOiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmYXNoaW9uX2pld2VsbGVyeSc6ICdGYXNoaW9uIEpld2VsbGVyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhcHNfYW5kX2hhdHMnOiAnY2FwcyBhbmQgaGF0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ByZWNpb3VzX2pld2VsbGVyeSc6ICdwcmVjaW91cyBqZXdlbGxlcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICduZWNrbGFjZXMnOiAnbmVja2xhY2VzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZWFycmluZ3MnOiAnZWFycmluZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdyaW5nc193cmlzdF93ZWFyJzogJ3JpbmdzICYgd3Jpc3Qgd2VhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21lbl9hY2Nlc3Nvcmllcyc6ICdtZW5zIGFjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAndGllcyc6ICd0aWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnY3VmZmxpbmtzJzogJ2N1ZmZsaW5rcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvY2tldHNfc3F1YXJlcyc6ICdwb2NrZXRzIHNxdWFyZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWxtZXRzJzogJ2hlbG1ldHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzY2FydmVzJzogJ3NjYXJ2ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwaG9uZV9jYXNlcyc6ICdwaG9uZSBjYXNlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ215X2FjY291bnQnOiAnTXkgQWNjb3VudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zhc2hpb24nOiAnRmFzaGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JlYXV0eSc6ICdCZWF1dHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdlbGVjdHJvbmljJzogJ0VsZWN0cm9uaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmdXJuaXR1cmUnOiAnRnVybml0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAna2lkcyc6ICdLaWRzJyxcclxuICAgICAgICAgICAgICAgICAgICAncGV0cyc6ICdQZXRzJyxcclxuICAgICAgICAgICAgICAgICAgICAndmVnZXRhYmxlcyc6ICdWZWdldGFibGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnd2F0Y2gnOiAnV2F0Y2gnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aGVtZV9lbGVtZW50cyc6ICd0aGVtZSBlbGVtZW50cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRfdGl0bGUnOiAnZWxlbWVudCB0aXRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbGxlY3Rpb25fYmFubmVyJzogJ2NvbGxlY3Rpb24gYmFubmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnaG9tZV9zbGlkZXInOiAnaG9tZSBzbGlkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeSc6ICdjYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlcnZpY2UnOiAnc2VydmljZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlX3NpemVfcmF0aW8nOiAnaW1hZ2Ugc2l6ZSByYXRpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2R1Y3RfZWxlbWVudHMnOiAncHJvZHVjdCBlbGVtZW50cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2R1Y3RfYm94JzogJ3Byb2R1Y3QgYm94JyxcclxuICAgICAgICAgICAgICAgICAgICAncHJvZHVjdF9zbGlkZXInOiAncHJvZHVjdCBzbGlkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdub19zbGlkZXInOiAnbm8gc2xpZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbXVsdGlfc2xpZGVyJzogJ211bHRpIHNsaWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhYic6ICd0YWInLFxyXG4gICAgICAgICAgICAgICAgICAgICdlbWFpbF90ZW1wbGF0ZSc6ICdlbWFpbCB0ZW1wbGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpbyc6ICdwb3J0Zm9saW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fZ3JpZF8yJzogJ3BvcnRmb2xpbyBncmlkIDInLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fZ3JpZF8zJzogJ3BvcnRmb2xpbyBncmlkIDMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fZ3JpZF80JzogJ3BvcnRmb2xpbyBncmlkIDQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fbWFzb25hcnlfMic6ICdtYXNvbmFyeSAyJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX21hc29uYXJ5XzMnOiAnbWFzb25hcnkgMycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19tYXNvbmFyeV80JzogJ21hc29uYXJ5IDQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fbWFzb25hcnlfZnVsbCc6ICdtYXNvbmFyeSBmdWxsIHdpZHRoJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm46IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICd0b3BiYXJfdGl0bGUnOiAnQmllbnZlbnVlIGRhbnMgbm90cmUgbWFnYXNpbiB7dGhlbWVfbmFtZX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYWxsX3VzJzogJ0FwcGVsZXogbm91cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hvbWUnOiAnbWFpc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiAnZm9uY3Rpb25uYWxpdMOpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25ldyc6ICdOb3V2ZWF1JyxcclxuICAgICAgICAgICAgICAgICAgICAnYmxvZyc6ICdibG9ndWVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnYmxvZ19sZWZ0X3NpZGViYXInOiAnYmFycmUgbGF0w6lyYWxlIGdhdWNoZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Jsb2dfcmlnaHRfc2lkZWJhcic6ICdiYXJyZSBsYXTDqXJhbGUgZHJvaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnYmxvZ19kZXRhaWwnOiAnZMOpdGFpbCBkdSBibG9nJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2F0ZWdvcnlfbGVmdF9zaWRlYmFyJzogJ2JhcnJlIGxhdMOpcmFsZSBnYXVjaGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9yaWdodF9zaWRlYmFyJzogJ2JhcnJlIGxhdMOpcmFsZSBkcm9pdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9ub19zaWRlYmFyJzogJ3NhbnMgZW5jYWRyw6knLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9tZXRybyc6ICdtw6l0cm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9mdWxsX3dpZHRoJzogJ3BsZWluZSBsYXJnZXVyJyxcclxuICAgICAgICAgICAgICAgICAgICAncHJvZHVjdHMnOiAnZGVzIHByb2R1aXRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdF9zaWRlYmFyJzogJ0JhcnJlIGxhdMOpcmFsZSBkZWdhdWNoZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0X3NpZGViYXInOiAnQmFycmUgbGF0w6lyYWxlIGRyb2l0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25vX3NpZGViYXInOiAncGFzIGRlIGJhcnJlIGxhdMOpcmFsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RocmVlX2NvbF90aHVtYm5haWxfbGVmdCc6ICczIHZpZ25ldHRlcyBnYXVjaGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aHJlZV9jb2xfdGh1bWJuYWlsX3JpZ2h0JzogJzMgdmlnbmV0dGUgZHJvaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAndGh1bWJuYWlsX2JlbG93JzogJ3ZpZ25ldHRlIGNpX2Rlc3NvdXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhY2NvcmRpYW5fZGV0YWlscyc6ICdkw6l0YWlscyBhY2NvcmTDqW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAndGh1bWJuYWlsX2xlZnQnOiAndmlnbmV0dGUgw6AgZ2F1Y2hlJyxcclxuICAgICAgICAgICAgICAgICAgICAndGh1bWJuYWlsX3JpZ2h0JzogJ3ZpZ25ldHRlIGRyb2l0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZlcnRpY2FsX3RhYic6ICdvbmdsZXQgdmVydGljYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYWdlcyc6ICdkZXMgcGFnZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhYm91dF91cyc6ICfDoCBwcm9wb3MgZGUgbm91cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xvb2tib29rJzogJ2xvb2tib29rJyxcclxuICAgICAgICAgICAgICAgICAgICAnbG9naW4nOiAnc2lkZW50aWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZWdpc3Rlcic6ICdyZWdpc3RyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xvZ291dCc6ICdDb25uZWN0ZXogXyBPdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzZWFyY2gnOiAnY2hlcmNoZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICd3aXNobGlzdCc6ICdsaXN0ZSBkZSBzb3VoYWl0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhcnQnOiAnQ2hhcmlvdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbGxlY3Rpb24nOiAnY29sbGVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZvcmdldF9wYXNzd29yZCc6ICdtb3QgZGUgcGFzc2Ugb3VibGnDqScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRhY3QnOiAnY29udGFjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NoZWNrb3V0JzogJ2NoZWNrX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbXBhcmUnOiAnY29tcGFyZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdvcmRlcl9zdWNjZXNzJzogJ3N1Y2PDqHMgZGUgbGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXNoYm9hcmQnOiAnVGFibGVhdSBkZSBib3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAnRkFRJzogJ0ZBUScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Nob3AnOiAnQm91dGlxdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtZW5zX2Zhc2hpb24nOiAnbGEgbW9kZSBtYXNjdWxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzcG9ydHNfd2Vhcic6ICd2w6p0ZW1lbnRzIGRlIHNwb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICAndG9wJzogJ0hhdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdib3R0b20nOiAnYmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZXRoaWNfd2Vhcic6ICd1c3VyZSDDqXRoaXF1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NoaXJ0cyc6ICdjaGVtaXNlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dvbWVuX2Zhc2hpb24nOiAnbGEgbW9kZSBkZXMgZmVtbWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZHJlc3Nlcyc6ICdsZXMgcm9iZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdza2lydHMnOiAnanVwZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd3ZXN0YXJuX3dlYXInOiAndXN1cmUgb2NjaWRlbnRhbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdldGhuaWNfd2Vhcic6ICd0ZW51ZSDDqXRobmlxdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzcG9ydF93ZWFyJzogJ3bDqnRlbWVudCBkZSBzcG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JvdHRvbV93ZWFyJzogJ3VzdXJlIGR1IGJhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2tpZHNfZmFzaGlvbic6ICdtb2RlIHBvdXIgZW5mYW50cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc29yaWVzJzogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZmFzaGlvbl9qZXdlbGxlcnknOiAnYmlqb3V4IGZhbnRhaXNpZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhcHNfYW5kX2hhdHMnOiAnY2FzcXVldHRlcyBldCBjaGFwZWF1eCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ByZWNpb3VzX2pld2VsbGVyeSc6ICdiaWpvdXggcHLDqWNpZXV4JyxcclxuICAgICAgICAgICAgICAgICAgICAnbmVja2xhY2VzJzogJ2NvbGxpZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZWFycmluZ3MnOiAnZGVzIGJvdWNsZXMgZG9yZWlsbGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAncmluZ3Nfd3Jpc3Rfd2Vhcic6ICdiYWd1ZXMgZXQgdsOqdGVtZW50cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21lbl9hY2Nlc3Nvcmllcyc6ICdhY2Nlc3NvaXJlcyBwb3VyIGhvbW1lcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpZXMnOiAnbGllbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjdWZmbGlua3MnOiAnYm91dG9ucyBkZSBtYW5jaGV0dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb2NrZXRzX3NxdWFyZXMnOiAncG9jaGVzIMOgIGNhcnJlYXV4JyxcclxuICAgICAgICAgICAgICAgICAgICAnaGVsbWV0cyc6ICdjYXNxdWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnc2NhcnZlcyc6ICfDqWNoYXJwZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwaG9uZV9jYXNlcyc6ICdDb3F1ZSBkZSB0w6lsw6lwaG9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ215X2FjY291bnQnOiAnTW9uIGNvbXB0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zhc2hpb24nOiAnTW9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JlYXV0eSc6ICdCZWF1dMOpJyxcclxuICAgICAgICAgICAgICAgICAgICAnZWxlY3Ryb25pYyc6ICfDiWxlY3Ryb25pcXVlJyxcclxuICAgICAgICAgICAgICAgICAgICAnZnVybml0dXJlJzogJ01ldWJsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdraWRzJzogJ2RlcyBnYW1pbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwZXRzJzogJ2FuaW1hdXggZG9tZXN0aXF1ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2ZWdldGFibGVzJzogJ0RlcyBsw6lndW1lcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dhdGNoJzogJ1JlZ2FyZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAndGhlbWVfZWxlbWVudHMnOiAnw6lsw6ltZW50cyBkZSB0aMOobWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50X3RpdGxlJzogJ3RpdHJlIGRlIGxcXCfDqWzDqW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb2xsZWN0aW9uX2Jhbm5lcic6ICdiYW5uacOocmUgZGUgY29sbGVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hvbWVfc2xpZGVyJzogJ2hvbWUgY3Vyc2V1cicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5JzogJ0NhdMOpZ29yaWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzZXJ2aWNlJzogJ3VuIHNlcnZpY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZV9zaXplX3JhdGlvJzogJ3JhcHBvcnQgZGUgdGFpbGxlIGRcXCdpbWFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2R1Y3RfZWxlbWVudHMnOiAnw6lsw6ltZW50cyBkZSBwcm9kdWl0JyxcclxuICAgICAgICAgICAgICAgICAgICAncHJvZHVjdF9ib3gnOiAnYm/DrnRlIGRlIHByb2R1aXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcm9kdWN0X3NsaWRlcic6ICdjdXJzZXVyIGRlIHByb2R1aXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdub19zbGlkZXInOiAncGFzIGRlIGN1cnNldXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdtdWx0aV9zbGlkZXInOiAnY3Vyc2V1ciBtdWx0aXBsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhYic6ICdsYW5ndWV0dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdlbWFpbF90ZW1wbGF0ZSc6ICdtb2TDqGxlIGRlIGNvdXJyaWVyIMOpbGVjdHJvbmlxdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW8nOiAncG9ydGVmZXVpbGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX2dyaWRfMic6ICdwb3J0ZWZldWlsbGUgZ3JpbGxlIDInLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fZ3JpZF8zJzogJ3BvcnRlZmV1aWxsZSBncmlsbGUgMycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19ncmlkXzQnOiAncG9ydGVmZXVpbGxlIGdyaWxsZSA0JyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX21hc29uYXJ5XzInOiAnbWHDp29ubmVyaWUgMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19tYXNvbmFyeV8zJzogJ21hw6dvbm5lcmllIDMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fbWFzb25hcnlfNCc6ICdtYcOnb25uZXJpZSA0JyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX21hc29uYXJ5X2Z1bGwnOiAnbWHDp29ubmVyaWUgcGxlaW5lIGxhcmdldXInLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWxsYmFja0xuZzogXCJlblwiLFxyXG4gICAgICAgIGRlYnVnOiB0cnVlLFxyXG5cclxuICAgICAgICAvLyBoYXZlIGEgY29tbW9uIG5hbWVzcGFjZSB1c2VkIGFyb3VuZCB0aGUgZnVsbCBhcHBcclxuICAgICAgICBuczogW1widHJhbnNsYXRpb25zXCJdLFxyXG4gICAgICAgIGRlZmF1bHROUzogXCJ0cmFuc2xhdGlvbnNcIixcclxuXHJcbiAgICAgICAga2V5U2VwYXJhdG9yOiBmYWxzZSwgLy8gd2UgdXNlIGNvbnRlbnQgYXMga2V5c1xyXG5cclxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaTE4bmV4dDtcclxuIiwiZXhwb3J0IGNvbnN0IE1FTlVJVEVNUyA9IFtcbiAgIHtcbiAgICAgIHRpdGxlOiAnSG9tZScsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xuICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiTmV3IERlbW9zXCIsIHR5cGU6IFwic3ViXCIsIHRhZzogJ25ldycsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9Ub29scycsIHRpdGxlOiAnVG9vbHMnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL0NocmlzdG1hcycsIHRpdGxlOiAnQ2hyaXN0bWFzJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9NYXJrZXRwbGFjZScsIHRpdGxlOiAnTWFya2V0cGxhY2UnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL0dhbWUnLCB0aXRsZTogJ0dhbWUnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL0d5bScsIHRpdGxlOiAnR3ltJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9NYXJpanVhbmEnLCB0aXRsZTogJ01hcmlqdWFuYScsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL2xheW91dHMvTGVmdHNpZGViYXInLCB0aXRsZTogJ0xlZnQtU2lkZWJhcicsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL2xheW91dHMvSmV3ZWxsZXJ5JywgdGl0bGU6ICdKZXdlbGxlcnknLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL1BldHMnLCB0aXRsZTogJ1BldHMnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL01ldHJvcycsIHRpdGxlOiAnTWV0cm9zJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9WZWRpb3NsaWRlcicsIHRpdGxlOiAnVmlkZW8tU2xpZGVyJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9OdXJzZXJ5JywgdGl0bGU6ICdOdXJzZXJ5JywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdDbG90aGluZycsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgeyBwYXRoOiAnLycsIHRpdGxlOiAnRmFzaGlvbjEnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL0Zhc2hpb24yJywgdGl0bGU6ICdGYXNoaW9uMicsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL2xheW91dHMvRmFzaGlvbjMnLCB0aXRsZTogJ0Zhc2hpb24zJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9LaWRzJywgdGl0bGU6ICdLaWRzJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCYXNpY3MnLCB0eXBlOiAnc3ViJywgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL0Jhc2ljcy9Mb29rYm9vaycsIHRpdGxlOiAnTG9va2Jvb2snLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL0Jhc2ljcy9WaWRlbycsIHRpdGxlOiAnVmlkZW8nLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL0Jhc2ljcy9QYXJhbGxheCcsIHRpdGxlOiAnUGFyYWxsYXgnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL0Jhc2ljcy9GdWxscGFnZScsIHRpdGxlOiAnRnVsbCBQYWdlJywgdHlwZTogJ2xpbmsnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgIH0sXG4gICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9CZWF1dHknLCB0aXRsZTogJ0JlYXV0eScsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdlbGVjdHJvbmljJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9FbGVjdHJvbmljL0VsZWN0cm9uaWMtMScsIHRpdGxlOiAnRWxlY3Ryb25pYy0xJywgdHlwZTogJ2xpbmsnLCB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL2xheW91dHMvRWxlY3Ryb25pYy9FbGVjdHJvbmljLTInLCB0aXRsZTogJ0VsZWN0cm9uaWMtMicsIHR5cGU6ICdsaW5rJywgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgIH0sXG4gICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9GdXJuaXR1cmUnLCB0aXRsZTogJ0Z1cm5pdHVyZScsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgeyBwYXRoOiAnL2xheW91dHMvVmVnZXRhYmxlcycsIHRpdGxlOiAnVmVnZXRhYmxlcycsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgeyBwYXRoOiAnL2xheW91dHMvV2F0Y2gnLCB0aXRsZTogJ1dhdGNoJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9MaWdodHMnLCB0aXRsZTogJ0xpZ2h0cycsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgeyBwYXRoOiAnL2xheW91dHMvR29nZ2xlcycsIHRpdGxlOiAnR29nZ2xlcycsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgeyBwYXRoOiAnL2xheW91dHMvU2hvZXMnLCB0aXRsZTogJ1Nob2VzJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9CYWdzJywgdGl0bGU6ICdCYWdzJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9GbG93ZXJzJywgdGl0bGU6ICdGbG93ZXJzJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICBdLFxuICAgfSxcbiAgIHtcbiAgICAgIHRpdGxlOiAnU2hvcCcsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdMZWZ0IFNpZGViYXInLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL3JpZ2h0X3NpZGViYXInLCB0aXRsZTogJ1JpZ2h0IFNpZGViYXInLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL25vX3NpZGViYXInLCB0aXRsZTogJ05vIFNpZGViYXInLCB0eXBlOiAnbGluaycsIH0sXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9zaWRlYmFyX3BvcHVwJywgdGl0bGU6ICdTaWRlYmFyIFBvcHVwJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9tZXRybycsIHRpdGxlOiAnTWV0cm8nLCB0eXBlOiAnbGluaycsIHRhZzogJ25ldycgfSxcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2Z1bGxfd2lkdGgnLCB0aXRsZTogJ0Z1bGwgV2lkdGgnLCB0eXBlOiAnbGluaycsIHRhZzogJ25ldycgfSxcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL3RocmVlX2dyaWQnLCB0aXRsZTogJzMgR3JpZCcsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgeyBwYXRoOiAnL3Nob3Avc2l4X2dyaWQnLCB0aXRsZTogJzYgU2l4JywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9saXN0X3ZpZXcnLCB0aXRsZTogJ0xpc3QgVmlldycsIHR5cGU6ICdsaW5rJyB9XG4gICAgICBdLFxuICAgfSxcbiAgIHtcbiAgICAgIHRpdGxlOiAnUHJvZHVjdHMnLCB0eXBlOiAnc3ViJywgY2hpbGRyZW46IFtcbiAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnU2lkZWJhcicsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Byb2R1Y3QtZGV0YWlscy8xJywgdGl0bGU6ICdMZWZ0IFNpZGViYXInLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wcm9kdWN0LWRldGFpbHMvcmlnaHRfc2lkZWJhcicsIHRpdGxlOiAnUmlnaHQgU2lkZWJhcicsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Byb2R1Y3QtZGV0YWlscy9uby1zaWRlYmFyJywgdGl0bGU6ICdObyBTaWRlYmFyJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiVGh1bWJuYWlsIEltYWdlXCIsIHR5cGU6IFwic3ViXCIsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcHJvZHVjdC1kZXRhaWxzL3RodW1ibmFpbF9sZWZ0JywgdGl0bGU6ICdMZWZ0IEltYWdlJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcHJvZHVjdC1kZXRhaWxzL3RodW1ibmFpbF9yaWdodCcsIHRpdGxlOiAnUmlnaHQgSW1hZ2UnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wcm9kdWN0LWRldGFpbHMvdGh1bWJuYWlsX291dHNpZGUnLCB0aXRsZTogJ0ltYWdlIE91dHNpZGUnLCB0eXBlOiAnbGluaycgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjMtQ29sdW1uXCIsIHR5cGU6IFwic3ViXCIsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcHJvZHVjdC1kZXRhaWxzLzNfY29sX2xlZnQnLCB0aXRsZTogJ1RodW1ibmFpbCBMZWZ0JywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcHJvZHVjdC1kZXRhaWxzLzNfY29sX3JpZ2h0JywgdGl0bGU6ICdUaHVtYm5haWwgUmlnaHQnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wcm9kdWN0LWRldGFpbHMvM19jb2xfYm90dG9tJywgdGl0bGU6ICdUaHVtYm5haWwgQm90dG9tJywgdHlwZTogJ2xpbmsnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnL3Byb2R1Y3QtZGV0YWlscy80X2ltYWdlJywgdGl0bGU6ICc0IEltYWdlJywgdHlwZTogJ2xpbmsnLCB0YWc6ICdOZXcnXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJy9wcm9kdWN0LWRldGFpbHMvYnVuZGxlX3Byb2R1Y3QnLCB0aXRsZTogJ0J1bmRsZSBQcm9kdWN0JywgdHlwZTogJ2xpbmsnLCB0YWc6ICdOZXcnXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJy9wcm9kdWN0LWRldGFpbHMvc3RpY2t5JywgdGl0bGU6ICdTdGlja3knLCB0eXBlOiAnbGluaydcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnL3Byb2R1Y3QtZGV0YWlscy9hY2NvcmRpYW4nLCB0aXRsZTogJ0FjY29yZGlhbicsIHR5cGU6ICdsaW5rJ1xuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICcvcHJvZHVjdC1kZXRhaWxzL2ltYWdlX3N3YXRjaCcsIHRpdGxlOiAnSW1hZ2UgU3dhdGNoJywgdHlwZTogJ2xpbmsnLCB0YWc6ICdOZXcnXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJy9wcm9kdWN0LWRldGFpbHMvdmVydGljYWxfdGFiJywgdGl0bGU6ICdWZXJ0aWNhbCBUYWInLCB0eXBlOiAnbGluaydcbiAgICAgICAgIH0sXG4gICAgICBdXG4gICB9LFxuICAge1xuICAgICAgdGl0bGU6ICdmZWF0dXJlcycsIG1lZ2FNZW51OiB0cnVlLCBtZWdhTWVudVR5cGU6ICdzbWFsbCcsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xuICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0Zm9saW8nLCB0eXBlOiAnc3ViJywgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wb3J0Zm9saW8vZ3JpZC0yJywgdGl0bGU6ICdQb3J0Zm9saW8gR3JpZCAyJywgdHlwZTogJ2xpbmsnLCBpY29uOiAnYWxlcnQnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcG9ydGZvbGlvL2dyaWQtMycsIHRpdGxlOiAnUG9ydGZvbGlvIEdyaWQgMycsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2xheW91dC1hY2NvcmRpb24tbWVyZ2VkJyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BvcnRmb2xpby9ncmlkLTQnLCB0aXRsZTogJ1BvcnRmb2xpbyBHcmlkIDQnLCB0eXBlOiAnbGluaycsIGljb246ICdsYXllcnMnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcG9ydGZvbGlvL21hc29ucnktZ3JpZC0yJywgdGl0bGU6ICdtYXNvbnJ5IEdyaWQgMicsIHR5cGU6ICdsaW5rJywgaWNvbjogJ3dyaXRlJyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BvcnRmb2xpby9tYXNvbnJ5LWdyaWQtMycsIHRpdGxlOiAnbWFzb25yeSBHcmlkIDMnLCB0eXBlOiAnbGluaycsIGljb246ICdtYXAtYWx0JyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BvcnRmb2xpby9tYXNvbnJ5LWdyaWQtNCcsIHRpdGxlOiAnbWFzb25yeSBHcmlkIDQnLCB0eXBlOiAnbGluaycsIGljb246ICdtYXAtYWx0JyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BvcnRmb2xpby9tYXNvbnJ5LWZ1bGwtd2lkdGgnLCB0aXRsZTogJ21hc29ucnkgRnVsbCBXaWR0aCcsIHR5cGU6ICdsaW5rJywgaWNvbjogJ21hcC1hbHQnIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdBZGQgVG8gQ2FydCcsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgeyBwYXRoOiAnL2xheW91dHMvTnVyc2VyeScsIHRpdGxlOiAnQ2FydCBNb2RhbCBQb3B1cCcsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2xpc3QnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9WZWdldGFibGVzJywgdGl0bGU6ICdRdHkgQ291bnRlcicsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2dhbGxlcnknIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvbGF5b3V0cy9CYWdzJywgdGl0bGU6ICdDYXJ0IFRvcCcsIHR5cGU6ICdsaW5rJywgaWNvbjogJ21vbmV5JyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL2xheW91dHMvU2hvZXMnLCB0aXRsZTogJ0NhcnQgQm90dG9tJywgdHlwZTogJ2xpbmsnLCBpY29uOiAndGltZScgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL1dhdGNoJywgdGl0bGU6ICdDYXJ0IExlZnQnLCB0eXBlOiAnbGluaycsIGljb246ICdhbGFybS1jbG9jaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9sYXlvdXRzL1Rvb2xzJywgdGl0bGU6ICdDYXJ0IFJpZ2h0JywgdHlwZTogJ2xpbmsnLCBpY29uOiAnYWxhcm0tY2xvY2snIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1RoZW1lIEVsZW1lbnQnLCB0eXBlOiAnc3ViJywgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wb3J0Zm9saW8vdGl0bGUnLCB0aXRsZTogJ1RpdGxlJywgdHlwZTogJ2xpbmsnLCBpY29uOiAnYmFyLWNoYXJ0JyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BvcnRmb2xpby9jb2xsZWN0aW9uLWJhbm5lcicsIHRpdGxlOiAnQ29sbGVjdGlvbiBCYW5uZXInLCB0eXBlOiAnbGluaycsIGljb246ICd0aG91Z2h0JyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BvcnRmb2xpby9ob21lLXNsaWRlcicsIHRpdGxlOiAnSG9tZSBTbGlkZXInLCB0eXBlOiAnbGluaycsIGljb246ICd2aWRlby1jYW1lcmEnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcG9ydGZvbGlvL2NhdGVnb3J5JywgdGl0bGU6ICdDYXRlZ29yeScsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2hlYWRwaG9uZScgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wb3J0Zm9saW8vc2VydmljZScsIHRpdGxlOiAnU2VydmljZScsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2hlYWRwaG9uZScgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvZHVjdCBFbGVtZW50JywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcG9ydGZvbGlvL3Byb2R1Y3QtYm94JywgdGl0bGU6ICdQcm9kdWN0IEJveCcsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2Jhci1jaGFydCcgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wb3J0Zm9saW8vcHJvZHVjdC1zbGlkZXInLCB0aXRsZTogJ1Byb2R1Y3QgU2xpZGVyJywgdHlwZTogJ2xpbmsnLCBpY29uOiAndGhvdWdodCcgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wb3J0Zm9saW8vbm8tc2xpZGVyJywgdGl0bGU6ICdObyBTbGlkZXInLCB0eXBlOiAnbGluaycsIGljb246ICd2aWRlby1jYW1lcmEnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcG9ydGZvbGlvL211bHRpLXNsaWRlcicsIHRpdGxlOiAnTXVsdGkgU2xpZGVyJywgdHlwZTogJ2xpbmsnLCBpY29uOiAnaGVhZHBob25lJyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BvcnRmb2xpby90YWInLCB0aXRsZTogJ1RhYicsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2hlYWRwaG9uZScgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRW1haWwgVGVtcGxhdGUnLCB0eXBlOiAnc3ViJywgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wb3J0Zm9saW8vb3JkZXItc3VjY2VzcycsIHRpdGxlOiAnT3JkZXIgU3VjY2VzcycsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2Jhci1jaGFydCcgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wb3J0Zm9saW8vb3JkZXItc3VjY2Vzcy0yJywgdGl0bGU6ICdPcmRlciBTdWNjZXNzIDInLCB0eXBlOiAnbGluaycsIGljb246ICd0aG91Z2h0JyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BvcnRmb2xpby9lbWFpbC10ZW1wbGF0ZScsIHRpdGxlOiAnRW1haWwgVGVtcGxhdGUnLCB0eXBlOiAnbGluaycsIGljb246ICdoZWFkcGhvbmUnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcG9ydGZvbGlvL2VtYWlsLXRlbXBsYXRlLTInLCB0aXRsZTogJ0VtYWlsIFRlbXBsYXRlIDInLCB0eXBlOiAnbGluaycsIGljb246ICdoZWFkcGhvbmUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgIH1cbiAgICAgIF1cbiAgIH0sXG4gICB7XG4gICAgICB0aXRsZTogJ1BhZ2VzJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXG4gICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ3ZlbmRvcicsIHR5cGU6ICdzdWInLCB0YWc6ICduZXcnLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BhZ2UvdmVuZG9yL3ZlbmRvci1kYXNoYm9hcmQnLCB0aXRsZTogJ1ZlbmRvciBEYXNoYm9hcmQnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wYWdlL3ZlbmRvci92ZW5kb3ItcHJvZmlsZScsIHRpdGxlOiAnVmVuZG9yIFByb2ZpbGUnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wYWdlL3ZlbmRvci9iZWNvbWUtdmVuZG9yJywgdGl0bGU6ICdCZWNvbWUgVmVuZG9yJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdBY2NvdW50JywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcGFnZS9hY2NvdW50L3dpc2hsaXN0JywgdGl0bGU6ICdXaXNobGlzdCcsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BhZ2UvYWNjb3VudC9jYXJ0JywgdGl0bGU6ICdjYXJ0JywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcGFnZS9hY2NvdW50L2Rhc2hib2FyZCcsIHRpdGxlOiAnZGFzaGJvYXJkJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcGFnZS9hY2NvdW50L2xvZ2luJywgdGl0bGU6ICdsb2dpbicsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BhZ2UvYWNjb3VudC9sb2dpbi1hdXRoJywgdGl0bGU6ICdsb2dpbi1hdXRoJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcGFnZS9hY2NvdW50L3JlZ2lzdGVyJywgdGl0bGU6ICdyZWdpc3RlcicsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BhZ2UvYWNjb3VudC9jb250YWN0JywgdGl0bGU6ICdjb250YWN0JywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcGFnZS9hY2NvdW50L2ZvcmdldC1wd2QnLCB0aXRsZTogJ2ZvcmdvdC1wYXNzd29yZCcsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3BhZ2UvYWNjb3VudC9wcm9maWxlJywgdGl0bGU6ICdwcm9maWxlJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvcGFnZS9hY2NvdW50L2NoZWNrb3V0JywgdGl0bGU6ICdjaGVja291dCcsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgfSxcbiAgICAgICAgIHsgcGF0aDogJy9wYWdlL2Fib3V0LXVzJywgdGl0bGU6ICdhYm91dC11cycsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgeyBwYXRoOiAnL3BhZ2Uvc2VhcmNoJywgdGl0bGU6ICdzZWFyY2gnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgIHsgcGF0aDogJy9wYWdlL3R5cG9ncmFwaHknLCB0aXRsZTogJ3R5cG9ncmFwaHknLCB0eXBlOiAnbGluaycsIHRhZzogJ25ldycgfSxcbiAgICAgICAgIHsgcGF0aDogJy9wYWdlL3JldmlldycsIHRpdGxlOiAncmV2aWV3JywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICB7IHBhdGg6ICcvcGFnZS9vcmRlci1zdWNjZXNzJywgdGl0bGU6ICdvcmRlci1zdWNjZXNzJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ2NvbXBhcmUnLCB0eXBlOiAnc3ViJywgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wYWdlL2NvbXBhcmUnLCB0aXRsZTogJ2NvbXBhcmUnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9wYWdlL2NvbXBhcmUtMicsIHRpdGxlOiAnY29tcGFyZS0yJywgdHlwZTogJ2xpbmsnLCB0YWc6ICduZXcnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgIH0sXG4gICAgICAgICB7IHBhdGg6ICcvcGFnZS9jb2xsZWN0aW9uJywgdGl0bGU6ICdjb2xsZWN0aW9uJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICB7IHBhdGg6ICcvcGFnZS9sb29rYm9vaycsIHRpdGxlOiAnbG9va2Jvb2snLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgIHsgcGF0aDogJy9wYWdlL3NpdGUtbWFwJywgdGl0bGU6ICdzaXRlLW1hcCcsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgeyBwYXRoOiAnL3BhZ2UvNDA0JywgdGl0bGU6ICc0MDQnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgIHsgcGF0aDogJy9wYWdlL2NvbWluZy1zb29uJywgdGl0bGU6ICdjb21pbmctc29vbicsIHR5cGU6ICdsaW5rJyB9LFxuICAgICAgICAgeyBwYXRoOiAnL3BhZ2UvZmFxJywgdGl0bGU6ICdmYXEnLCB0eXBlOiAnbGluaycgfSxcbiAgICAgIF1cbiAgIH0sXG4gICB7XG4gICAgICB0aXRsZTogJ0Jsb2dzJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXG4gICAgICAgICB7IHBhdGg6ICcvYmxvZ3MvYmxvZ19sZWZ0X3NpZGViYXInLCB0aXRsZTogJ2Jsb2cgbGVmdCBzaWRlYmFyJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICB7IHBhdGg6ICcvYmxvZ3MvYmxvZ19yaWdodF9zaWRlYmFyJywgdGl0bGU6ICdibG9nIHJpZ2h0IHNpZGViYXInLCB0eXBlOiAnbGluaycgfSxcbiAgICAgICAgIHsgcGF0aDogJy9ibG9ncy9ub19zaWRlYmFyJywgdGl0bGU6ICdubyBzaWRlYmFyJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICAgICB7IHBhdGg6ICcvYmxvZ3MvYmxvZ19kZXRhaWwnLCB0aXRsZTogJ2Jsb2cgZGV0YWlsJywgdHlwZTogJ2xpbmsnIH0sXG4gICAgICBdXG4gICB9LFxuXVxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvY2FydFwiO1xuaW1wb3J0IHsgTWVkaWEgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0XCI7XG5cbmNvbnN0IENhcnRDb21wb25lbnQgPSAoeyBpY29uLCBsYXlvdXQgfSkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG4gIGNvbnN0IGN1cnJDb250ZXh0ID0gdXNlQ29udGV4dChDdXJyZW5jeUNvbnRleHQpO1xuICBjb25zdCBzeW1ib2wgPSBjdXJyQ29udGV4dC5zdGF0ZS5zeW1ib2w7XG4gIGNvbnN0IGNhcnRMaXN0ID0gY29udGV4dC5zdGF0ZTtcbiAgY29uc3QgdG90YWwgPSBjb250ZXh0LmNhcnRUb3RhbDtcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSBjb250ZXh0LnJlbW92ZUZyb21DYXJ0O1xuICBjb25zdCBbb3BlblNpZGUsIHNldE9wZW5TaWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPVwib25ob3Zlci1kaXYgbW9iaWxlLWNhcnRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5TaWRlKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXF0eS1jbHNcIj57Y2FydExpc3QubGVuZ3RofTwvZGl2PlxuICAgICAgICAgIDxkaXYgaHJlZj17bnVsbH0+XG4gICAgICAgICAgICA8TWVkaWFcbiAgICAgICAgICAgICAgYWx0PVwiY2FydFwiXG4gICAgICAgICAgICAgIHNyYz17aWNvbn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGJsdXItdXAgbGF6eWxvYWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNob3BwaW5nLWNhcnRcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICB9XG5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJjYXJ0X3NpZGVcIlxuICAgICAgICBjbGFzc05hbWU9e2BhZGRfdG9fY2FydCAke2xheW91dH0gJHtvcGVuU2lkZSA/IFwib3Blbi1zaWRlXCIgOiBcIlwifSBgfVxuICAgICAgPlxuICAgICAgICA8YSBocmVmPXtudWxsfSBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaW5uZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfdG9wXCI+XG4gICAgICAgICAgICA8aDM+bXkgY2FydDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLWNhcnRcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU2lkZShmYWxzZSl9PlxuICAgICAgICAgICAgICA8YSBocmVmPXtudWxsfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0X21lZGlhXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FydF9wcm9kdWN0XCI+XG4gICAgICAgICAgICAgIHtjYXJ0TGlzdC5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgY2FydExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17YGNhcnQtcG9wdXAtJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e251bGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2l0ZW0uaW1hZ2VzWzBdLnNyY31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtudWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnF0eX0geCB7c3ltYm9sfSB7aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVGcm9tQ2FydChpdGVtKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FydF90b3RhbFwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbFwiPlxuICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICBzdWJ0b3RhbCA6IDxzcGFuPiR7dG90YWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlL2FjY291bnQvY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNvbGlkIGJ0bi14cyB2aWV3LWNhcnRcIj52aWV3IGNhcnQ8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BhZ2UvYWNjb3VudC9jaGVja291dFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNvbGlkIGJ0bi14cyBjaGVja291dFwiPmNoZWNrb3V0PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDYXJ0SGVhZGVyIGZyb20gXCIuLi9oZWFkZXJzL2NvbW1vbi9jYXJ0LWhlYWRlclwiO1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvY2FydFwiO1xyXG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IEN1cnJlbmN5Q29udGV4dCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL0N1cnJlbmN5L0N1cnJlbmN5Q29udGV4dFwiO1xyXG5cclxuY29uc3QgQ2FydENvbnRhaW5lciA9ICh7IGljb24gfSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuICBjb25zdCBjdXJyQ29udGV4dCA9IHVzZUNvbnRleHQoQ3VycmVuY3lDb250ZXh0KTtcclxuICBjb25zdCBzeW1ib2wgPSBjdXJyQ29udGV4dC5zdGF0ZS5zeW1ib2w7XHJcbiAgY29uc3QgY2FydExpc3QgPSBjb250ZXh0LnN0YXRlO1xyXG4gIGNvbnN0IHRvdGFsID0gY29udGV4dC5jYXJ0VG90YWw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJvbmhvdmVyLWRpdiBtb2JpbGUtY2FydFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1xdHktY2xzXCI+e2NhcnRMaXN0Lmxlbmd0aH08L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPXtgL3BhZ2UvYWNjb3VudC9jYXJ0YH0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TWVkaWEgc3JjPXtpY29ufSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaG93LWRpdiBzaG9wcGluZy1jYXJ0XCI+XHJcbiAgICAgICAgICB7Y2FydExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8Q2FydEhlYWRlciBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSB0b3RhbD17dG90YWx9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICB7Y2FydExpc3QubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICBzdWJ0b3RhbCA6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3N5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucyB2aWV3LWNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wYWdlL2FjY291bnQvY2FydGB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnZpZXcgY2FydDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BhZ2UvYWNjb3VudC9jaGVja291dGB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNoZWNrb3V0XCI+Y2hlY2tvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxoNT5Zb3VyIGNhcnQgaXMgY3VycmVudGx5IGVtcHR5LjwvaDU+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0Q29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgRm9ybSxcbiAgRm9ybUdyb3VwLFxuICBJbnB1dCxcbiAgQnV0dG9uLFxuICBDb2xsYXBzZSxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBMb2dvSW1hZ2UgZnJvbSBcIi4uLy4uL2hlYWRlcnMvY29tbW9uL2xvZ29cIjtcbmltcG9ydCBDb3B5UmlnaHQgZnJvbSBcIi4vY29weXJpZ2h0XCI7XG5cbmNvbnN0IE1hc3RlckZvb3RlciA9ICh7XG4gIGNvbnRhaW5lckZsdWlkLFxuICBsb2dvTmFtZSxcbiAgbGF5b3V0Q2xhc3MsXG4gIGZvb3RlckNsYXNzLFxuICBmb290ZXJMYXlPdXQsXG4gIGZvb3RlclNlY3Rpb24sXG4gIGJlbG93U2VjdGlvbixcbiAgYmVsb3dDb250YWluZXJGbHVpZCxcbiAgY29weVJpZ2h0Rmx1aWQsXG4gIG5ld0xhdHRlcixcbn0pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjb2xsYXBzZSwgc2V0Q29sbGFwc2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPCA3NTA7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hhbmdlQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NTApIHtcbiAgICAgICAgc2V0Q29sbGFwc2UoMCk7XG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICB9IGVsc2Ugc2V0SXNPcGVuKHRydWUpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGFuZ2VDb2xsYXBzZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUNvbGxhcHNlKVxuICAgIH1cblxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtmb290ZXJDbGFzc30+XG4gICAgICAgIHtuZXdMYXR0ZXIgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvb3RlckxheU91dH0+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXtjb250YWluZXJGbHVpZCA/IGNvbnRhaW5lckZsdWlkIDogXCJcIn0+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Zm9vdGVyU2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Vic2NyaWJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5LTk9XIElUIEFMTCBGSVJTVCE8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5ldmVyIE1pc3MgQW55dGhpbmcgRnJvbSBNdWx0aWthcnQgQnkgU2lnbmluZyBVcCBUb1xuICAgICAgICAgICAgICAgICAgICAgICAgICBPdXIgTmV3c2xldHRlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lIHN1YnNjcmliZS1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJteC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVGb3JtQ29udHJvbElucHV0MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc29saWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgXCJcIlxuICAgICAgICApfVxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YmVsb3dTZWN0aW9ufT5cbiAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXtiZWxvd0NvbnRhaW5lckZsdWlkID8gYmVsb3dDb250YWluZXJGbHVpZCA6IFwiXCJ9PlxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJmb290ZXItdGhlbWUgcGFydGl0aW9uLWZcIj5cbiAgICAgICAgICAgICAgPENvbCBsZz1cIjRcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb290ZXItdGl0bGUgJHtcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuICYmIGNvbGxhcHNlID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfSBmb290ZXItbW9iaWxlLXRpdGxlYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldENvbGxhcHNlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgYWJvdXRcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWNjb3JkaW5nLW1lbnVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZVxuICAgICAgICAgICAgICAgICAgaXNPcGVuPXt3aWR0aCA/IChjb2xsYXBzZSA9PT0gMSA/IGlzT3BlbiA6IGZhbHNlKSA6IHRydWV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExvZ29JbWFnZSBsb2dvPXtsb2dvTmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsXG4gICAgICAgICAgICAgICAgICAgICAgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYVxuICAgICAgICAgICAgICAgICAgICAgIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc29jaWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcGx1cy5nb29nbGUuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yc3MuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcnNzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwib2Zmc2V0LXhsLTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb290ZXItdGl0bGUgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gJiYgY29sbGFwc2UgPT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGg0XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29sbGFwc2UoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Ugc2V0SXNPcGVuKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBteSBhY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWNjb3JkaW5nLW1lbnVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZVxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e3dpZHRoID8gKGNvbGxhcHNlID09PSAyID8gaXNPcGVuIDogZmFsc2UpIDogdHJ1ZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wL2xlZnRfc2lkZWJhcmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPndvbWVuczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wL2xlZnRfc2lkZWJhcmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBjbG90aGluZyA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc2hvcC9sZWZ0X3NpZGViYXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5hY2Nlc3NvcmllczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wL2xlZnRfc2lkZWJhcmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBmZWF0dXJlZCA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb290ZXItdGl0bGUgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gJiYgY29sbGFwc2UgPT0gMyA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGg0XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29sbGFwc2UoMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Ugc2V0SXNPcGVuKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB3aHkgd2UgY2hvb3NlXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWNjb3JkaW5nLW1lbnVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZVxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e3dpZHRoID8gKGNvbGxhcHNlID09PSAzID8gaXNPcGVuIDogZmFsc2UpIDogdHJ1ZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zaGlwcGluZyAmIHJldHVybjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+c2VjdXJlIHNob3BwaW5nPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5nYWxsYXJ5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5hZmZpbGlhdGVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5jb250YWN0czwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb290ZXItdGl0bGUgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gJiYgY29sbGFwc2UgPT0gNCA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGg0XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29sbGFwc2UoNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Ugc2V0SXNPcGVuKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY29yZGluZy1tZW51XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Q29sbGFwc2VcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt3aWR0aCA/IChjb2xsYXBzZSA9PT0gNCA/IGlzT3BlbiA6IGZhbHNlKSA6IHRydWV9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29udGFjdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXJcIj48L2k+TXVsdGlrYXJ0IERlbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmUsIERlbW8gc3RvcmUgSW5kaWEgMzQ1LTY1OVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGhvbmVcIj48L2k+Q2FsbCBVczogMTIzLTQ1Ni03ODk4XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZS1vXCI+PC9pPkVtYWlsIFVzOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5TdXBwb3J0QEZpb3QuY29tPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmF4XCI+PC9pPkZheDogMTIzNDU2XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxDb3B5UmlnaHRcbiAgICAgICAgICBsYXlvdXQ9e2xheW91dENsYXNzfVxuICAgICAgICAgIGZsdWlkPXtjb3B5UmlnaHRGbHVpZCA/IGNvcHlSaWdodEZsdWlkIDogXCJcIn1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1hc3RlckZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyICxSb3cgLENvbCAsTWVkaWF9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgdmlzYSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3Zpc2EucG5nJztcclxuaW1wb3J0IG1hc3RlcmNhcmQgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9tYXN0ZXJjYXJkLnBuZyc7XHJcbmltcG9ydCBwYXlwYWwgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9wYXlwYWwucG5nJztcclxuaW1wb3J0IGFtZXJpY2FuZXhwcmVzcyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL2FtZXJpY2FuLWV4cHJlc3MucG5nJztcclxuaW1wb3J0IGRpc2NvdmVyIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vZGlzY292ZXIucG5nJztcclxuXHJcbmNvbnN0IENvcHlSaWdodCA9ICh7bGF5b3V0LCBmbHVpZH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN1Yi1mb290ZXIgJHtsYXlvdXR9YH0+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXtmbHVpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4bD1cIjZcIiBtZD1cIjZcIiBzbT1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJmYSBmYS1jb3B5cmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDIwMjAtMjEgdGhlbWVmb3Jlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvd2VyZWQgYnkgcGl4ZWxzdHJhcDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4bD1cIjZcIiBtZD1cIjZcIiBzbT1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY2FyZC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PE1lZGlhIHNyYz17dmlzYX0gYWx0PVwiXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PE1lZGlhIHNyYz17bWFzdGVyY2FyZH0gYWx0PVwiXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PE1lZGlhIHNyYz17cGF5cGFsfSBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48TWVkaWEgc3JjPXthbWVyaWNhbmV4cHJlc3N9IGFsdD1cIlwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxNZWRpYSBzcmM9e2Rpc2NvdmVyfSBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcHlSaWdodDsiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvY2FydFwiO1xyXG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBDYXJ0SGVhZGVyID0gKHsgaXRlbSwgc3ltYm9sIH0pID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9wcm9kdWN0L1wiICsgaXRlbS5pZH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxNZWRpYSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJtci0zXCIgc3JjPXtgJHtpdGVtLmltYWdlc1swXS5zcmN9YH0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2R1Y3QvXCIgKyBpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxoND57aXRlbS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5xdHl9IHgge3N5bWJvbH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7KGl0ZW0ucHJpY2UgLSAoaXRlbS5wcmljZSAqIGl0ZW0uZGlzY291bnQpIC8gMTAwKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtY2lyY2xlXCI+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnRleHQucmVtb3ZlRnJvbUNhcnQoaXRlbSl9XHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBsYW5ndWFnZSBmcm9tIFwiLi4vLi4vY29uc3RhbnQvbGFuZ0NvbmZpZy5qc29uXCI7XHJcbmltcG9ydCBpMThuZXh0IGZyb20gXCIuLi8uLi9jb25zdGFudC9pMThuXCI7XHJcbmltcG9ydCB7IEN1cnJlbmN5Q29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL0N1cnJlbmN5L0N1cnJlbmN5Q29udGV4dFwiO1xyXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvYXBvbGxvL2Fwb2xsb1wiO1xyXG5cclxuY29uc3QgR0VUX0NVUlJFTkNZID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGdldEN1cnJlbmN5IHtcclxuICAgICAgY3VycmVuY3lcclxuICAgICAgbmFtZVxyXG4gICAgICBzeW1ib2xcclxuICAgICAgdmFsdWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDdXJyZW5jeSA9ICh7IGljb24gfSkgPT4ge1xyXG4gIHZhciB7IGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9DVVJSRU5DWSk7XHJcbiAgY29uc3QgQ29udGV4dCA9IHVzZUNvbnRleHQoQ3VycmVuY3lDb250ZXh0KTtcclxuICBjb25zdCBzZWxlY3RlZEN1cnJlbmN5ID0gQ29udGV4dC5jdXJyZW5jeUNvbnRleHQuc2VsZWN0ZWRDdXJyZW5jeTtcclxuXHJcbiAgY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSAobG5nKSA9PiB7XHJcbiAgICBpMThuZXh0LmNoYW5nZUxhbmd1YWdlKGxuZyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJvbmhvdmVyLWRpdiBtb2JpbGUtc2V0dGluZ1wiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxNZWRpYSBzcmM9e2ljb259IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWRpdiBzZXR0aW5nXCI+XHJcbiAgICAgICAgPGg2Pmxhbmd1YWdlPC9oNj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bGFuZ3VhZ2UubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VMYW5ndWFnZShpdGVtLnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmxhbmd9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8aDY+Y3VycmVuY3k8L2g2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZVwiPlxyXG4gICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgZGF0YS5nZXRDdXJyZW5jeS5tYXAoKGN1ciwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZWxlY3RlZEN1cnJlbmN5KGN1cil9PlxyXG4gICAgICAgICAgICAgICAgICB7Y3VyLnN5bWJvbH0ge2N1ci5jdXJyZW5jeX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhDdXJyZW5jeSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IExvZ29JbWFnZSA9ICh7IGxvZ28gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC9hc3NldHMvaW1hZ2VzL2ljb24vJHtsb2dvP2xvZ286J2xvZ28ucG5nJ31gfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ29JbWFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgTUVOVUlURU1TIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50L21lbnVcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgW25hdkNsb3NlLCBzZXROYXZDbG9zZV0gPSB1c2VTdGF0ZSh7IHJpZ2h0OiBcIjBweFwiIH0pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc1MCkge1xuICAgICAgc2V0TmF2Q2xvc2UoeyByaWdodDogXCItNDEwcHhcIiB9KTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE5OSkge1xuICAgICAgc2V0TmF2Q2xvc2UoeyByaWdodDogXCItMzAwcHhcIiB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBvcGVuTmF2ID0gKCkgPT4ge1xuICAgIHNldE5hdkNsb3NlKHsgcmlnaHQ6IFwiMHB4XCIgfSk7XG4gICAgaWYgKHJvdXRlci5hc1BhdGggPT0gXCIvbGF5b3V0cy9HeW1cIilcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wSGVhZGVyXCIpLmNsYXNzTGlzdC5hZGQoXCJ6aW5kZXgtY2xhc3NcIik7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VOYXYgPSAoKSA9PiB7XG4gICAgc2V0TmF2Q2xvc2UoeyByaWdodDogXCItNDEwcHhcIiB9KTtcbiAgICBpZiAocm91dGVyLmFzUGF0aCA9PSBcIi9sYXlvdXRzL0d5bVwiKVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3BIZWFkZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInppbmRleC1jbGFzc1wiKTtcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgY29uc3QgaGFuZGxlTWVnYVN1Ym1lbnUgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN1Yi1hcnJvd1wiKSkgcmV0dXJuO1xuXG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgXCJvcGVuc3VibWVnYW1lbnVcIlxuICAgICAgKVxuICAgIClcbiAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICBcIm9wZW5zdWJtZWdhbWVudVwiXG4gICAgICApO1xuICAgIGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWNvbnRlbnRcIikuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWJtZWdhbWVudVwiKTtcbiAgICAgIH0pO1xuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIFwib3BlbnN1Ym1lZ2FtZW51XCJcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFttYWlubWVudSwgc2V0TWFpbk1lbnVdID0gdXNlU3RhdGUoTUVOVUlURU1TKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRVcmwgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICBNRU5VSVRFTVMuZmlsdGVyKChpdGVtcykgPT4ge1xuICAgICAgaWYgKGl0ZW1zLnBhdGggPT09IGN1cnJlbnRVcmwpIHNldE5hdkFjdGl2ZShpdGVtcyk7XG4gICAgICBpZiAoIWl0ZW1zLmNoaWxkcmVuKSByZXR1cm4gZmFsc2U7XG4gICAgICBpdGVtcy5jaGlsZHJlbi5maWx0ZXIoKHN1Ykl0ZW1zKSA9PiB7XG4gICAgICAgIGlmIChzdWJJdGVtcy5wYXRoID09PSBjdXJyZW50VXJsKSBzZXROYXZBY3RpdmUoc3ViSXRlbXMpO1xuICAgICAgICBpZiAoIXN1Ykl0ZW1zLmNoaWxkcmVuKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHN1Ykl0ZW1zLmNoaWxkcmVuLmZpbHRlcigoc3ViU3ViSXRlbXMpID0+IHtcbiAgICAgICAgICBpZiAoc3ViU3ViSXRlbXMucGF0aCA9PT0gY3VycmVudFVybCkgc2V0TmF2QWN0aXZlKHN1YlN1Ykl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldE5hdkFjdGl2ZSA9IChpdGVtKSA9PiB7XG4gICAgTUVOVUlURU1TLmZpbHRlcigobWVudUl0ZW0pID0+IHtcbiAgICAgIGlmIChtZW51SXRlbSAhPSBpdGVtKSBtZW51SXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGlmIChtZW51SXRlbS5jaGlsZHJlbiAmJiBtZW51SXRlbS5jaGlsZHJlbi5pbmNsdWRlcyhpdGVtKSlcbiAgICAgICAgbWVudUl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmIChtZW51SXRlbS5jaGlsZHJlbikge1xuICAgICAgICBtZW51SXRlbS5jaGlsZHJlbi5maWx0ZXIoKHN1Ym1lbnVJdGVtcykgPT4ge1xuICAgICAgICAgIGlmIChzdWJtZW51SXRlbXMuY2hpbGRyZW4gJiYgc3VibWVudUl0ZW1zLmNoaWxkcmVuLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICBtZW51SXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgc3VibWVudUl0ZW1zLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzZXRNYWluTWVudSh7IG1haW5tZW51OiBNRU5VSVRFTVMgfSk7XG4gIH07XG5cbiAgLy8gQ2xpY2sgVG9nZ2xlIG1lbnVcbiAgY29uc3QgdG9nZ2xldE5hdkFjdGl2ZSA9IChpdGVtKSA9PiB7XG4gICAgaWYgKCFpdGVtLmFjdGl2ZSkge1xuICAgICAgTUVOVUlURU1TLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgaWYgKE1FTlVJVEVNUy5pbmNsdWRlcyhpdGVtKSkgYS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFhLmNoaWxkcmVuKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGEuY2hpbGRyZW4uZm9yRWFjaCgoYikgPT4ge1xuICAgICAgICAgIGlmIChhLmNoaWxkcmVuLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICBiLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWIuY2hpbGRyZW4pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBiLmNoaWxkcmVuLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIGlmIChiLmNoaWxkcmVuLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgIGMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGl0ZW0uYWN0aXZlID0gIWl0ZW0uYWN0aXZlO1xuICAgIHNldE1haW5NZW51KHsgbWFpbm1lbnU6IE1FTlVJVEVNUyB9KTtcbiAgfTtcblxuICBjb25zdCBvcGVuTWJsTmF2ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWItYXJyb3dcIikpIHJldHVybjtcblxuICAgIGlmIChldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5zdWJtZW51XCIpKVxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbnN1Ym1lbnVcIik7XG4gICAgZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1zdWJtZW51XCIpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3VibWVudVwiKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubWVnYS1tZW51LWNvbnRhaW5lclwiKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWJtZW51XCIpO1xuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwib3BlbnN1Ym1lbnVcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1uYXZiYXJcIj5cbiAgICAgICAgPGRpdiBpZD1cIm1haW5uYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1uYXZcIiBvbkNsaWNrPXtvcGVuTmF2LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFycyBzaWRlYmFyLWJhclwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LW1lbnVcIiBzdHlsZT17bmF2Q2xvc2V9PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJhY2stYnRuXCIgb25DbGljaz17Y2xvc2VOYXYuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWJhY2sgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPkJhY2sgbmF2YmFyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0IHBsLTJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHtNRU5VSVRFTVMubWFwKChtZW51SXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7bWVudUl0ZW0ubWVnYU1lbnUgPyBcIm1lZ2EtbWVudVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17KGUpID0+IG9wZW5NYmxOYXYoZSl9PlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHt0KG1lbnVJdGVtLnRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAge21lbnVJdGVtLmNoaWxkcmVuICYmICFtZW51SXRlbS5tZWdhTWVudSA/IChcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtLmNoaWxkcmVuLm1hcCgoY2hpbGRyZW5JdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5JdGVtLmNoaWxkcmVuID8gXCJzdWItbWVudSBcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbkl0ZW0udHlwZSA9PT0gXCJzdWJcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZXROYXZBY3RpdmUoY2hpbGRyZW5JdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuSXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuSXRlbS50YWcgPT09IFwibmV3XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXRhZ1wiPm5ldzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0IHBsLTJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbkl0ZW0udHlwZSA9PT0gXCJsaW5rXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtjaGlsZHJlbkl0ZW0ucGF0aH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuSXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5JdGVtLnRhZyA9PT0gXCJuZXdcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy10YWdcIj5uZXc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbkl0ZW0uY2hpbGRyZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LXN1Yi1jaGlsZG1lbnUgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkl0ZW0uYWN0aXZlID8gXCJtZW51LW9wZW4gXCIgOiBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5JdGVtLmNoaWxkcmVuLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5TdWJJdGVtLCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblN1Ykl0ZW0udHlwZSA9PT0gXCJsaW5rXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Y2hpbGRyZW5TdWJJdGVtLnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic3ViLW1lbnUtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuU3ViSXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuU3ViSXRlbS50YWcgPT09IFwibmV3XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXRhZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVnYS1tZW51LWNvbnRhaW5lciAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtLm1lZ2FNZW51ID8gXCJcIiA6IFwib3BlbnN1Ym1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtLm1lZ2FNZW51ID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW0uY2hpbGRyZW4ubWFwKChtZWdhTWVudUl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW0ubWVnYU1lbnVUeXBlID09IFwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY29sIG1lZ2EtYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtZW51SXRlbS5tZWdhTWVudVR5cGUgPT0gXCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY29sLWxnLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1lbnVJdGVtLm1lZ2FNZW51VHlwZSA9PSBcImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTWVnYVN1Ym1lbnUoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZWdhTWVudUl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW0udGl0bGUgPT09IFwiRWxlbWVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtZWdhTWVudUl0ZW0uY2hpbGRyZW4ubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdWJNZWdhTWVudUl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViTWVnYU1lbnVJdGVtLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpY29uLSR7c3ViTWVnYU1lbnVJdGVtLmljb259YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViTWVnYU1lbnVJdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1lZ2FNZW51SXRlbS5jaGlsZHJlbi5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN1Yk1lZ2FNZW51SXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJNZWdhTWVudUl0ZW0ucGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJNZWdhTWVudUl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb2wsXG4gIENvbnRhaW5lcixcbiAgRm9ybSxcbiAgRm9ybUdyb3VwLFxuICBJbnB1dCxcbiAgUm93LFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5jb25zdCBjbG9zZVNlYXJjaCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xuY29uc3QgU2VhcmNoT3ZlcmxheSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwic2VhcmNoLW92ZXJsYXlcIiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VidG5cIiBvbkNsaWNrPXtjbG9zZVNlYXJjaH0gdGl0bGU9XCJDbG9zZSBPdmVybGF5XCI+XG4gICAgICAgICAgw5dcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXktY29udGVudFwiPlxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIHhsPVwiMTJcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhIFByb2R1Y3RcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoT3ZlcmxheTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgTWVkaWEgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgZmFzaGlvbiBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbWVnYS1tZW51L2Zhc2hpb24uanBnXCI7XHJcblxyXG5jb25zdCBTaWRlQmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsb3NlTmF2ID0gKCkgPT4ge1xyXG4gICAgdmFyIGNsb3NlbXlzbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTaWRlbmF2XCIpO1xyXG4gICAgaWYgKGNsb3NlbXlzbGlkZSkgY2xvc2VteXNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXNpZGVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWVudSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWItYXJyb3dcIikpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5zdWIxXCIpKVxyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3ViMVwiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wZW5zdWIxXCIpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWIxXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwib3BlbnN1YjFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3ViVHdvTWVudSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWItYXJyb3dcIikpIHJldHVybjtcclxuXHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuc3ViMlwiKSlcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbnN1YjJcIik7XHJcbiAgICBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcGVuc3ViMlwiKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3ViMlwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcIm9wZW5zdWIyXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3ViVGhyZWVNZW51ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN1Yi1hcnJvd1wiKSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5zdWIzXCIpKVxyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3ViM1wiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wZW5zdWIzXCIpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWIzXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwib3BlbnN1YjNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3ViRm91ck1lbnUgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ViLWFycm93XCIpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlbnN1YjRcIikpXHJcbiAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWI0XCIpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3BlbnN1YjRcIikuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbnN1YjRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJvcGVuc3ViNFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNZWdhU3VibWVudSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWItYXJyb3dcIikpIHJldHVybjtcclxuXHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuc2lkZXN1Ym1lbnVcIikpXHJcbiAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zaWRlc3VibWVudVwiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJvcGVuc2lkZXN1Ym1lbnVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBpZD1cIm15U2lkZW5hdlwiIGNsYXNzTmFtZT1cInNpZGVuYXZcIj5cclxuICAgICAgICA8YSBocmVmPXtudWxsfSBjbGFzc05hbWU9XCJzaWRlYmFyLW92ZXJsYXlcIiBvbkNsaWNrPXtjbG9zZU5hdn0+PC9hPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8YSBocmVmPXtudWxsfSBvbkNsaWNrPXtjbG9zZU5hdn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1iYWNrIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnQgcHItMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gQmFja1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDx1bCBpZD1cInN1Yi1tZW51XCIgY2xhc3NOYW1lPVwic2lkZWJhci1tZW51XCI+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVNZWdhU3VibWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICBjbG90aGluZ1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYS1tZW51IGNsb3RoaW5nLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPFJvdyBtPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeGw9XCI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+d29tZW4ncyBmYXNoaW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+ZHJlc3NlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+c2tpcnRzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj53ZXN0YXJuIHdlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmV0aGljIHdlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNwb3J0IHdlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pm1lbidzIGZhc2hpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zcG9ydHMgd2VhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+d2VzdGVybiB3ZWFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5ldGhpYyB3ZWFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PmFjY2Vzc29yaWVzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+ZmFzaGlvbiBqZXdlbGxlcnk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmNhcHMgYW5kIGhhdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnByZWNpb3VzIGpld2VsbGVyeTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+bmVja2xhY2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5lYXJyaW5nczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+d3Jpc3Qgd2VhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+dGllczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Y3VmZmxpbmtzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5wb2NrZXRzIHNxdWFyZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeGw9XCI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1lZ2EtbWVudS1iYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIHNyYz17ZmFzaGlvbn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTdWJtZW51KGUpfT5cclxuICAgICAgICAgICAgICAgIGJhZ3NcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1hcnJvd1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNob3BwZXIgYmFnczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+bGFwdG9wIGJhZ3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmNsdXRjaGVzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3ViVHdvTWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgcHVyc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnB1cnNlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+d2FsbGV0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+bGVhdGhlcnM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNhdGNoZWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTdWJtZW51KGUpfT5cclxuICAgICAgICAgICAgICAgIGZvb3R3ZWFyXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zcG9ydCBzaG9lczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Zm9ybWFsIHNob2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5jYXN1YWwgc2hvZXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPndhdGNoZXM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTdWJtZW51KGUpfT5cclxuICAgICAgICAgICAgICAgIEFjY2Vzc29yaWVzXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5mYXNoaW9uIGpld2VsbGVyeTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Y2FwcyBhbmQgaGF0czwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+cHJlY2lvdXMgamV3ZWxsZXJ5PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3ViVHdvTWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9yZS4uXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPm5lY2tsYWNlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+ZWFycmluZ3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPndyaXN0IHdlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTdWJUaHJlZU1lbnUoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3Nvcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnRpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmN1ZmZsaW5rczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+cG9ja2V0cyBzcXVhcmVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5oZWxtZXRzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zY2FydmVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3ViRm91ck1lbnUoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yZS4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+YWNjZXNzb3J5IGdpZnQgc2V0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+dHJhdmVsIGFjY2Vzc29yaWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5waG9uZSBjYXNlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmJlbHRzICYgbW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+d2VhcmFibGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+aG91c2Ugb2YgZGVzaWduPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3VibWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICBiZWF1dHkgJiBwZXJzb25hbCBjYXJlXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5tYWtldXA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNraW5jYXJlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5wcmVtaXVtIGJlYXR5PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3ViVHdvTWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1hcnJvd1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5mcmFncmFuY2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5sdXh1cnkgYmVhdXR5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5oYWlyIGNhcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnRvb2xzICYgYnJ1c2hlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5ob21lICYgZGVjb3I8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmtpdGNoZW48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi8uLi8uLi9jb25maWcvYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFRvcEJhckRhcmsgPSAoeyB0b3BDbGFzcywgZmx1aWQgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGZpcmViYXNlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL3BhZ2UvYWNjb3VudC9sb2dpbi1hdXRoXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXt0b3BDbGFzc30+XHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQ9e2ZsdWlkfT5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBsZz1cIjZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5XZWxjb21lIHRvIE91ciBzdG9yZSBNdWx0aWthcnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5DYWxsIFVzOiAxMjNcclxuICAgICAgICAgICAgICAgICAgLSA0NTYgLSA3ODkwXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGxnPVwiNlwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtb2JpbGUtd2lzaGxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZS9hY2NvdW50L3dpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB3aXNobGlzdFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwib25ob3Zlci1kcm9wZG93biBtb2JpbGUtYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gTXkgQWNjb3VudFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9uaG92ZXItc2hvdy1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGFnZS9hY2NvdW50L2xvZ2luYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BhZ2UvYWNjb3VudC9yZWdpc3RlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gZmlyZWJhc2VMb2dvdXQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TG9nb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJhckRhcms7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL2NvbW1vbi9uYXZiYXJcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL2NvbW1vbi9zaWRlYmFyXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29udGFpbmVycy9DYXJ0XCI7XG5pbXBvcnQgQ2FydENvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9DYXJ0Q29udGFpbmVyXCI7XG5pbXBvcnQgVG9wQmFyRGFyayBmcm9tIFwiLi9jb21tb24vdG9wYmFyLWRhcmtcIjtcbmltcG9ydCB7IE1lZGlhLCBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBMb2dvSW1hZ2UgZnJvbSBcIi4vY29tbW9uL2xvZ29cIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vc2VhcmNoLnBuZ1wiO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3NldHRpbmcucG5nXCI7XG5pbXBvcnQgY2FydCBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9jYXJ0LnBuZ1wiO1xuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCIuL2NvbW1vbi9jdXJyZW5jeVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgU2VhcmNoT3ZlcmxheSBmcm9tIFwiLi9jb21tb24vc2VhcmNoLW92ZXJsYXlcIjtcblxuY29uc3QgSGVhZGVyT25lID0gKHtcbiAgbG9nb05hbWUsXG4gIGhlYWRlckNsYXNzLFxuICB0b3BDbGFzcyxcbiAgbm9Ub3BCYXIsXG4gIGRpcmVjdGlvbixcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLyo9PT09PT09PT09PT09PT09PT09PT1cblx0XHQgUHJlIGxvYWRlclxuXHRcdCA9PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvYWRlci13cmFwcGVyXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcbiAgICB9LCAyMDAwKTtcblxuICAgIGlmIChyb3V0ZXIuYXNQYXRoICE9PSBcIi9sYXlvdXRzL0NocmlzdG1hc1wiKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgbGV0IG51bWJlciA9XG4gICAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHxcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8XG4gICAgICAwO1xuICAgIGlmIChudW1iZXIgPj0gMzAwKSB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA1NzYpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RpY2t5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZFwiKTtcbiAgICAgIGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGlja3lcIikuY2xhc3NMaXN0LmFkZChcImZpeGVkXCIpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0aWNreVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XG4gIH07XG5cbiAgY29uc3Qgb3Blbk5hdiA9ICgpID0+IHtcbiAgICB2YXIgb3Blbm15c2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKTtcbiAgICBpZiAob3Blbm15c2xpZGUpIHtcbiAgICAgIG9wZW5teXNsaWRlLmNsYXNzTGlzdC5hZGQoXCJvcGVuLXNpZGVcIik7XG4gICAgfVxuICB9O1xuICBjb25zdCBvcGVuU2VhcmNoID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2goKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIGRlYWwgd2l0aCBkYXRhIGZldGNoZWRcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhlYWRlciBpZD1cInN0aWNreVwiIGNsYXNzTmFtZT17YHN0aWNreSAke2hlYWRlckNsYXNzfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1maXgtb3B0aW9uXCI+PC9kaXY+XG4gICAgICAgIHsvKlRvcCBIZWFkZXIgQ29tcG9uZW50Ki99XG4gICAgICAgIHtub1RvcEJhciA/IFwiXCIgOiA8VG9wQmFyRGFyayB0b3BDbGFzcz17dG9wQ2xhc3N9IC8+fVxuXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e251bGx9IG9uQ2xpY2s9e29wZW5OYXZ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLXN0eWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1iYXJzIHNpZGViYXItYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgey8qU2lkZUJhciBOYXZpZ2F0aW9uIENvbXBvbmVudCovfVxuICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPExvZ29JbWFnZSBsb2dvPXtsb2dvTmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1yaWdodCBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICB7LypUb3AgTmF2aWdhdGlvbiBCYXIgQ29tcG9uZW50Ki99XG4gICAgICAgICAgICAgICAgICA8TmF2QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwib25ob3Zlci1kaXYgbW9iaWxlLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5IGljb249e3NldHRpbmdzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qSGVhZGVyIENhcnQgQ29tcG9uZW50ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge2RpcmVjdGlvbiA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FydENvbnRhaW5lciBsYXlvdXQ9e2RpcmVjdGlvbn0gaWNvbj17Y2FydH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0IGxheW91dD17ZGlyZWN0aW9ufSBpY29uPXtjYXJ0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8U2VhcmNoT3ZlcmxheSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyT25lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyT25lIGZyb20gXCIuLi9oZWFkZXJzL2hlYWRlci1vbmVcIjtcclxuaW1wb3J0IEJyZWFkY3J1YnMgZnJvbSBcIi4uL2NvbW1vbi93aWRnZXRzL2JyZWFkY3J1YnNcIjtcclxuaW1wb3J0IEhlbG1ldCBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCBmYXZpY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLzEucG5nXCI7XHJcbmltcG9ydCBNYXN0ZXJGb290ZXIgZnJvbSBcIi4uL2Zvb3RlcnMvY29tbW9uL01hc3RlckZvb3RlclwiO1xyXG5cclxuY29uc3QgQ29tbW9uTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBwYXJlbnQsIHN1YlRpdGxlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlbG1ldD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj17ZmF2aWNvbiA/IGZhdmljb24gOiBcIlwifSAvPlxyXG4gICAgICA8L0hlbG1ldD5cclxuICAgICAgPEhlYWRlck9uZSB0b3BDbGFzcz1cInRvcC1oZWFkZXJcIiBsb2dvTmFtZT1cImxvZ28ucG5nXCIgLz5cclxuICAgICAgPEJyZWFkY3J1YnMgdGl0bGU9e3RpdGxlfSBwYXJlbnQ9e3BhcmVudH0gc3ViVGl0bGU9e3N1YlRpdGxlfSAvPlxyXG4gICAgICA8PntjaGlsZHJlbn08Lz5cclxuICAgICAgPE1hc3RlckZvb3RlclxyXG4gICAgICAgIGZvb3RlckNsYXNzPXtgZm9vdGVyLWxpZ2h0IGB9XHJcbiAgICAgICAgZm9vdGVyTGF5T3V0PXtcImxpZ2h0LWxheW91dCB1cHBlci1mb290ZXJcIn1cclxuICAgICAgICBmb290ZXJTZWN0aW9uPXtcInNtYWxsLXNlY3Rpb24gYm9yZGVyLXNlY3Rpb24gYm9yZGVyLXRvcC0wXCJ9XHJcbiAgICAgICAgYmVsb3dTZWN0aW9uPXtcInNlY3Rpb24tYi1zcGFjZSBsaWdodC1sYXlvdXRcIn1cclxuICAgICAgICBuZXdMYXR0ZXI9e3RydWV9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uTGF5b3V0O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5yZXF1aXJlKCdmaXJlYmFzZS9hdXRoJyk7XG5jb25zdCBjb25maWdzID0gcmVxdWlyZShcIi4vaW5kZXguanNvblwiKVxuXG5jb25zdCBjb25maWcgPSB7XG4gICAgYXBpS2V5OiBjb25maWdzLmZpcmViYXNlLmFwaUtleSxcbiAgICBhdXRoRG9tYWluOmNvbmZpZ3MuZmlyZWJhc2UuYXV0aERvbWFpbixcbiAgICBkYXRhYmFzZVVSTDogY29uZmlncy5maXJlYmFzZS5kYXRhYmFzZVVSTCxcbiAgICBwcm9qZWN0SWQ6IGNvbmZpZ3MuZmlyZWJhc2UucHJvamVjdElkLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IGNvbmZpZ3MuZmlyZWJhc2Uuc3RvcmFnZUJ1Y2tldCxcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogY29uZmlncy5maXJlYmFzZS5tZXNzYWdpbmdTZW5kZXJJZCxcbiAgICBhcHBJZDpjb25maWdzLmZpcmViYXNlLmFwcElkXG4gIH07XG5cbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xufVxuZXhwb3J0IGNvbnN0IGdvb2dsZVByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5leHBvcnQgY29uc3QgZmFjZWJvb2tQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRDdXJyLCBzZWxlY3RlZEN1cnJlbmN5XSA9IHVzZVN0YXRlKHtcclxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxyXG4gICAgc3ltYm9sOiBcIiRcIixcclxuICAgIHZhbHVlOiAxLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjdXJyZW5jeUNvbnRleHQgPSB7XHJcbiAgICBzZWxlY3RlZEN1cnIsXHJcbiAgICBzZWxlY3RlZEN1cnJlbmN5LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHN0YXRlOiBzZWxlY3RlZEN1cnIsXHJcbiAgICAgICAgY3VycmVuY3lDb250ZXh0OiBjdXJyZW5jeUNvbnRleHQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBDb250ZXh0IGFzIEN1cnJlbmN5Q29udGV4dCxcclxuICBQcm92aWRlciBhcyBDdXJyZW5jeUNvbnRleHRQcm92aWRlcixcclxufSBmcm9tIFwiLi9DdXJyZW5jeUNvbnRleHRcIjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xyXG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmxldCBhcG9sbG9DbGllbnQgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW5kIHByb3ZpZGVzIHRoZSBhcG9sbG9Db250ZXh0XHJcbiAqIHRvIGEgbmV4dC5qcyBQYWdlVHJlZS4gVXNlIGl0IGJ5IHdyYXBwaW5nXHJcbiAqIHlvdXIgUGFnZUNvbXBvbmVudCB2aWEgSE9DIHBhdHRlcm4uXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb258Q2xhc3N9IFBhZ2VDb21wb25lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NvbmZpZy5zc3I9dHJ1ZV1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRoQXBvbGxvKFBhZ2VDb21wb25lbnQsIHsgc3NyID0gdHJ1ZSB9ID0ge30pIHtcclxuICBjb25zdCBXaXRoQXBvbGxvID0gKHsgYXBvbGxvQ2xpZW50LCBhcG9sbG9TdGF0ZSwgLi4ucGFnZVByb3BzIH0pID0+IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGFwb2xsb0NsaWVudCB8fCBpbml0QXBvbGxvQ2xpZW50KGFwb2xsb1N0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgPFBhZ2VDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gU2V0IHRoZSBjb3JyZWN0IGRpc3BsYXlOYW1lIGluIGRldmVsb3BtZW50XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGNvbnN0IGRpc3BsYXlOYW1lID1cclxuICAgICAgUGFnZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBQYWdlQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XHJcblxyXG4gICAgaWYgKGRpc3BsYXlOYW1lID09PSAnQXBwJykge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1RoaXMgd2l0aEFwb2xsbyBIT0Mgb25seSB3b3JrcyB3aXRoIFBhZ2VDb21wb25lbnRzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIFdpdGhBcG9sbG8uZGlzcGxheU5hbWUgPSBgd2l0aEFwb2xsbygke2Rpc3BsYXlOYW1lfSlgO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNzciB8fCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgV2l0aEFwb2xsby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gICAgICBjb25zdCB7IEFwcFRyZWUgfSA9IGN0eDtcclxuXHJcbiAgICAgIC8vIEluaXRpYWxpemUgQXBvbGxvQ2xpZW50LCBhZGQgaXQgdG8gdGhlIGN0eCBvYmplY3Qgc29cclxuICAgICAgLy8gd2UgY2FuIHVzZSBpdCBpbiBgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcGAuXHJcbiAgICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IChjdHguYXBvbGxvQ2xpZW50ID0gaW5pdEFwb2xsb0NsaWVudCh7fSwgY3R4LnJlcSAmJiBjdHgucmVxLmhlYWRlcnMuY29va2llKSlcclxuXHJcbiAgICAgIC8vIFJ1biB3cmFwcGVkIGdldEluaXRpYWxQcm9wcyBtZXRob2RzXHJcbiAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICAgICAgaWYgKFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT25seSBvbiB0aGUgc2VydmVyOlxyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyBXaGVuIHJlZGlyZWN0aW5nLCB0aGUgcmVzcG9uc2UgaXMgZmluaXNoZWQuXHJcbiAgICAgICAgLy8gTm8gcG9pbnQgaW4gY29udGludWluZyB0byByZW5kZXJcclxuICAgICAgICBpZiAoY3R4LnJlcyAmJiBjdHgucmVzLmZpbmlzaGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gcGFnZVByb3BzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT25seSBpZiBzc3IgaXMgZW5hYmxlZFxyXG4gICAgICAgIGlmIChzc3IpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZ2V0RGF0YUZyb21UcmVlIH0gPSBhd2FpdCBpbXBvcnQoJ0BhcG9sbG8vcmVhY3Qtc3NyJyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZShcclxuICAgICAgICAgICAgICA8QXBwVHJlZVxyXG4gICAgICAgICAgICAgICAgcGFnZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhZ2VQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgYXBvbGxvQ2xpZW50LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxyXG4gICAgICAgICAgICAvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1hcG9sbG8uaHRtbCNncmFwaHFsLXF1ZXJ5LWRhdGEtZXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgcnVubmluZyBgZ2V0RGF0YUZyb21UcmVlYCcsIGVycm9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxyXG4gICAgICAgICAgLy8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XHJcbiAgICAgICAgICBIZWFkLnJld2luZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbyBzdG9yZVxyXG4gICAgICBjb25zdCBhcG9sbG9TdGF0ZSA9IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnBhZ2VQcm9wcyxcclxuICAgICAgICBhcG9sbG9TdGF0ZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gV2l0aEFwb2xsbztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFsd2F5cyBjcmVhdGVzIGEgbmV3IGFwb2xsbyBjbGllbnQgb24gdGhlIHNlcnZlclxyXG4gKiBDcmVhdGVzIG9yIHJldXNlcyBhcG9sbG8gY2xpZW50IGluIHRoZSBicm93c2VyLlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IGluaXRpYWxTdGF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdEFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpIHtcclxuICAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgbmV3IGNsaWVudCBmb3IgZXZlcnkgc2VydmVyLXNpZGUgcmVxdWVzdCBzbyB0aGF0IGRhdGFcclxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV1c2UgY2xpZW50IG9uIHRoZSBjbGllbnQtc2lkZVxyXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XHJcbiAgICBhcG9sbG9DbGllbnQgPSBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcG9sbG9DbGllbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuZCBjb25maWd1cmVzIHRoZSBBcG9sbG9DbGllbnRcclxuICogQHBhcmFtICB7T2JqZWN0fSBbaW5pdGlhbFN0YXRlPXt9XVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSA9IHt9KSB7XHJcbiAgLy8gQ2hlY2sgb3V0IGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvcHVsbC80NjExIGlmIHlvdSB3YW50IHRvIHVzZSB0aGUgQVdTQXBwU3luY0NsaWVudFxyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnLCAvLyBEaXNhYmxlcyBmb3JjZUZldGNoIG9uIHRoZSBzZXJ2ZXIgKHNvIHF1ZXJpZXMgYXJlIG9ubHkgcnVuIG9uY2UpXHJcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xyXG4gICAgICB1cmk6IHByb2Nlc3MuZW52LkFQSV9VUkwsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXHJcbiAgICAgIGZldGNoLFxyXG4gICAgfSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSksXHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0Q29udGV4dDsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKVxuICB9XG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCAob3B0aW9ucyBhcyBhbnkpLl9oXG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGxvY2FsZVxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbGwgY29uZmlndXJlZCBsb2NhbGVzXG4gICAqL1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmVkIGRlZmF1bHQgbG9jYWxlXG4gICAqL1xuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogc3RyaW5nW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBhZnRlckludGVyYWN0aXZlPzogc3RyaW5nW107IGJlZm9yZUludGVyYWN0aXZlPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZGlzYWJsZU9wdGltaXplZExvYWRpbmc/OiBib29sZWFuXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IFByZXZpZXdEYXRhXG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbW9uTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2hvcC9jb21tb24tbGF5b3V0JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uLy4uLy4uL2NvbmZpZy9iYXNlJ1xyXG5pbXBvcnQgQ2hlY2tvdXRQYWdlIGZyb20gJy4vY29tbW9uL2NoZWNrb3V0LXBhZ2UnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vLi4vcGFnZS9hY2NvdW50L2xvZ2luLWF1dGgnXHJcblxyXG5jb25zdCBDaGVja291dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKHNldEN1cnJlbnRVc2VyKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge2N1cnJlbnRVc2VyICE9PSBudWxsID9cclxuICAgICAgICAgICAgPENvbW1vbkxheW91dCBwYXJlbnQ9XCJob21lXCIgdGl0bGU9XCJjaGVja291dFwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrb3V0UGFnZSAvPlxyXG4gICAgICAgICAgICA8L0NvbW1vbkxheW91dD5cclxuICAgICAgICA6XHJcbiAgICAgICAgPExvZ2luLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZWRpYSwgQ29udGFpbmVyLCBGb3JtLCBSb3csIElucHV0LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBQYXlQYWxCdXR0b24gfSBmcm9tIFwicmVhY3QtcGF5cGFsLWJ1dHRvblwiO1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvY2FydFwiO1xyXG5pbXBvcnQgcGF5cGFsIGZyb20gXCIuLi8uLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9wYXlwYWwucG5nXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHRcIjtcclxuXHJcbmNvbnN0IENoZWNrb3V0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjYXJ0Q29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gIGNvbnN0IGNhcnRJdGVtcyA9IGNhcnRDb250ZXh0LnN0YXRlO1xyXG4gIGNvbnN0IGNhcnRUb3RhbCA9IGNhcnRDb250ZXh0LmNhcnRUb3RhbDtcclxuICBjb25zdCBjdXJDb250ZXh0ID0gdXNlQ29udGV4dChDdXJyZW5jeUNvbnRleHQpO1xyXG4gIGNvbnN0IHN5bWJvbCA9IGN1ckNvbnRleHQuc3RhdGUuc3ltYm9sO1xyXG4gIGNvbnN0IFtvYmosIHNldE9ial0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoXCJzdHJpcGVcIik7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKTsgLy8gaW5pdGlhbGlzZSB0aGUgaG9va1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBjaGVja2hhbmRsZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0UGF5bWVudCh2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWNjZXNzID0gKHBheW1lbnQpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IFwiL3BhZ2Uvb3JkZXItc3VjY2Vzc1wiLFxyXG4gICAgICBzdGF0ZToge1xyXG4gICAgICAgIHBheW1lbnQ6IHBheW1lbnQsXHJcbiAgICAgICAgaXRlbXM6IGNhcnRJdGVtcyxcclxuICAgICAgICBvcmRlclRvdGFsOiB0b3RhbCxcclxuICAgICAgICBzeW1ib2w6IHN5bWJvbCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhICE9PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiWW91IHN1Ym1pdHRlZCB0aGUgZm9ybSBhbmQgc3R1ZmYhXCIpO1xyXG4gICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgcGF0aG5hbWU6IFwiL3BhZ2Uvb3JkZXItc3VjY2Vzc1wiLFxyXG4gICAgICAgIHN0YXRlOiB7IGl0ZW1zOiBjYXJ0SXRlbXMsIG9yZGVyVG90YWw6IGNhcnRUb3RhbCwgc3ltYm9sOiBzeW1ib2wgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcnJvcnMuc2hvd01lc3NhZ2VzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0U3RhdGVGcm9tSW5wdXQgPSAoZXZlbnQpID0+IHtcclxuICAgIG9ialtldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRPYmoob2JqKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNhbmNlbCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBwYXltZW50IHdhcyBjYW5jZWxsZWQhXCIsIGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRXJyb3IgPSAoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIVwiLCBlcnIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBheXBhbE9wdGlvbnMgPSB7XHJcbiAgICBjbGllbnRJZDpcclxuICAgICAgXCJBWjRTOTh6RmEwMXZ5bTdOVmVvX3F0aFp5T25CaHROdlFEc2poYVpTTUgtMl9ZOUlBSkZiU0QzSFB1ZUVyWXFOOFNhOFdZUmJqUDd3V3RkX1wiLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLWItc3BhY2VcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LXBhZ2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXQtZm9ybVwiPlxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCIgc209XCIxMlwiIHhzPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5CaWxsaW5nIERldGFpbHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY2hlY2stb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC02IGNvbC1zbS02IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbFwiPkZpcnN0IE5hbWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7ZXJyb3JzLmZpcnN0TmFtZSA/IFwiZXJyb3JfYm9yZGVyXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5maXJzdE5hbWUgJiYgXCJGaXJzdCBuYW1lIGlzIHJlcXVpcmVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC02IGNvbC1zbS02IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbFwiPkxhc3QgTmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtlcnJvcnMubGFzdF9uYW1lID8gXCJlcnJvcl9ib3JkZXJcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubGFzdF9uYW1lICYmIFwiTGFzdCBuYW1lIGlzIHJlcXVpcmVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC02IGNvbC1zbS02IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbFwiPlBob25lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Vycm9ycy5waG9uZSA/IFwiZXJyb3JfYm9yZGVyXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyBwYXR0ZXJuOiAvXFxkKy8gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBob25lICYmIFwiUGxlYXNlIGVudGVyIG51bWJlciBmb3IgcGhvbmUuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC02IGNvbC1zbS02IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbFwiPkVtYWlsIEFkZHJlc3M8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Vycm9ycy5lbWFpbCA/IFwiZXJyb3JfYm9yZGVyXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogL15cXFMrQFxcUyskL2ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBcIlBsZWFzZSBlbnRlciBwcm9wZXIgZW1haWwgYWRkcmVzcyAuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsXCI+Q291bnRyeTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY291bnRyeVwiIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SW5kaWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Tb3V0aCBBZnJpY2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Vbml0ZWQgU3RhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BdXN0cmFsaWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbFwiPkFkZHJlc3M8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Vycm9ycy5hZGRyZXNzID8gXCJlcnJvcl9ib3JkZXJcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSwgbWluOiAyMCwgbWF4OiAxMjAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RyZWV0IGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5hZGRyZXNzICYmIFwiUGxlYXNlIHJpZ2h0IHlvdXIgYWRkcmVzcyAuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsXCI+VG93bi9DaXR5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Vycm9ycy5jaXR5ID8gXCJlcnJvcl9ib3JkZXJcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTdGF0ZUZyb21JbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY2l0eSAmJiBcInNlbGVjdCBvbmUgY2l0eVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtMTIgY29sLXNtLTYgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsXCI+U3RhdGUgLyBDb3VudHk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7ZXJyb3JzLnN0YXRlID8gXCJlcnJvcl9ib3JkZXJcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U3RhdGVGcm9tSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnN0YXRlICYmIFwic2VsZWN0IG9uZSBzdGF0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtMTIgY29sLXNtLTYgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsXCI+UG9zdGFsIENvZGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaW5jb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtlcnJvcnMucGluY29kZSA/IFwiZXJyb3JfYm9yZGVyXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyBwYXR0ZXJuOiAvXFxkKy8gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBpbmNvZGUgJiYgXCJSZXF1aXJlZCBpbnRlZ2VyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjcmVhdGVfYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWNjb3VudC1vcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICZlbnNwO3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWNjb3VudC1vcHRpb25cIj5DcmVhdGUgQW4gQWNjb3VudD88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz1cIjZcIiBzbT1cIjEyXCIgeHM9XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zICYmIGNhcnRJdGVtcy5sZW5ndGggPiAwID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3QgPHNwYW4+VG90YWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfSDDlyB7aXRlbS5xdHl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLXRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VidG90YWx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydFRvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hpcHBpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHBpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wcGluZy1vcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnJlZS1zaGlwcGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZyZWUtc2hpcHBpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmcmVlLXNoaXBwaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcmVlIFNoaXBwaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcHBpbmctb3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvY2FsLXBpY2t1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxvY2FsLXBpY2t1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvY2FsLXBpY2t1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWwgUGlja3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0VG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLW9wdGlvbiBzdHJpcGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudC1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGF5bWVudC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoZWNraGFuZGxlKFwic3RyaXBlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5bWVudC0yXCI+U3RyaXBlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW8tb3B0aW9uIHBheXBhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXltZW50LWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXltZW50LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGVja2hhbmRsZShcInBheXBhbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBheW1lbnQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXlQYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgc3JjPXtwYXlwYWx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcnRUb3RhbCAhPT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXltZW50ID09PSBcInN0cmlwZVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4tc29saWQgYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2UgT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGF5UGFsQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5cGFsT3B0aW9ucz17cGF5cGFsT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2NhcnRUb3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBheW1lbnRTdWNjZXNzPXtvblN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYXltZW50RXJyb3I9e29uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BcHByb3ZlPXtvblN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYXltZW50Q2FuY2VsPXtvbkNhbmNlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbW9uTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc2hvcC9jb21tb24tbGF5b3V0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIEZvcm0sIExhYmVsLCBJbnB1dCAsQ29sfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IGZpcmViYXNlICx7Z29vZ2xlUHJvdmlkZXIsZmFjZWJvb2tQcm92aWRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL2Jhc2UnXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJ0ZXN0QGdtYWlsLmNvbVwiKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJ0ZXN0QDEyM1wiKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdOYW1lJylcclxuICAgICk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05hbWUnLCBuYW1lKTtcclxuICAgIH0sIFtuYW1lXSk7XHJcblxyXG4gICAgY29uc3QgbG9naW5BdXRoID0gYXN5bmMgKGVtYWlsLHBhc3N3b3JkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbihmdW5jdGlvbiAoKSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0TmFtZShcIkVtYXkgV2FsdGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9wYWdlL2FjY291bnQvY2hlY2tvdXRgKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBnb29nbGVBdXRoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKGdvb2dsZVByb3ZpZGVyKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHNldE5hbWUocmVzdWx0LnVzZXIuZGlzcGxheU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9wYWdlL2FjY291bnQvY2hlY2tvdXRgKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiT3Bwc3MuLiBUaGUgcGFzc3dvcmQgaXMgaW52YWxpZCBvciB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIGEgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGZhY2Vib29rQXV0aCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChmYWNlYm9va1Byb3ZpZGVyKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHNldE5hbWUocmVzdWx0LnVzZXIuZGlzcGxheU5hbWUpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3BhZ2UvYWNjb3VudC9jaGVja291dGApO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcIk9wcHNzLi4gVGhlIHBhc3N3b3JkIGlzIGludmFsaWQgb3IgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSBhIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29tbW9uTGF5b3V0IHBhcmVudD1cImhvbWVcIiB0aXRsZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxvZ2luLXBhZ2Ugc2VjdGlvbi1iLXNwYWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TG9naW48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwidGhlbWUtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJyZXZpZXdcIj5QYXNzd29yZDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgZGVmYXVsdFZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInJldmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCIgcmVxdWlyZWQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNvbGlkXCIgb25DbGljaz17KCkgPT4gbG9naW5BdXRoKGVtYWlsLHBhc3N3b3JkKX0+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17ZmFjZWJvb2tBdXRofT48aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9va1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e2dvb2dsZUF1dGh9PjxhPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjZcIiBjbGFzc05hbWU9XCJyaWdodC1sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk5ldyBDdXN0b21lcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWNhcmQgYXV0aGVudGljYXRpb24tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0bGUtZm9udFwiPkNyZWF0ZSBBIEFjY291bnQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNpZ24gdXAgZm9yIGEgZnJlZSBhY2NvdW50IGF0IG91ciBzdG9yZS4gUmVnaXN0cmF0aW9uIGlzIHF1aWNrIGFuZCBlYXN5LiBJdCBhbGxvd3MgeW91IHRvIGJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYmxlIHRvIG9yZGVyIGZyb20gb3VyIHNob3AuIFRvIHN0YXJ0IHNob3BwaW5nIGNsaWNrIHJlZ2lzdGVyLjwvcD48YSBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc29saWRcIj5DcmVhdGUgYW4gQWNjb3VudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9Db21tb25MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlGcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TlMxak1ERTBJRGM1TGpFMU1UUTRNU3dnTWpBeE15OHdNeTh4TXkweE1qb3dPVG94TlNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEb3lNelk1UXpjNFFUa3lOamN4TVVVNFFVUXdRa00wUlRRME4wTkJRemcwTXlJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRveU16WTVRemM0UWpreU5qY3hNVVU0UVVRd1FrTTBSVFEwTjBOQlF6ZzBNeUkrSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pJek5qbEROemc0T1RJMk56RXhSVGhCUkRCQ1F6UkZORFEzUTBGRE9EUXpJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPakl6TmpsRE56ZzVPVEkyTnpFeFJUaEJSREJDUXpSRk5EUTNRMEZET0RReklpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCt4RjFhckFBQUFWWkpSRUZVZU5waS9QLy9QOE5BQXNiL1B0WUQ2Z0FtSU00Y1FQc3pRUTZZRE1UdUEyQTV5TTdKSUFjd0EvRktJTmFsbytXNlVEdVptYUFDL0VDOEVZaEY2V0E1eUk0TlVEc1ptSkFrRklGNE14Q3owOUJ5TnFnZFNzaUpFQm1ZQS9GY1VPNmdSWTRENG5sUU94aHdPUUFFb29HNGxnWU9xSUdhelVESUFTRFFnRTB4QlFCa1ZpT3VjZ0JYY00xQ0R5NHlnVG5VTEVaU0hBQUNYTkFFSTArQjVYSlFNN2p3bFlTRXNzeG1XSlloRVlEMGJDR1V0Wm1JTERTV1FRc3NZZ0ZJN1ZKaUNqY21JZzMwQXVLSkpEaGdBaEI3RTFzWkVRdXlpYXk0UUdweVNLa05TUUdnaXNzTmo3d3JWQTBEclJ3QWl0dFZPT0lXSkxhYXhMUkNzZ05ncVhzOVd1b1doWXFSbkZ1WXlNemZ5dERzeVFiRm02QmlKQU1XUEhKL2dmZ1RIbmsxSU82RnN0V0IrRDBldFh5NG9vYUZRSHdMRXZCQURnT0ZnSWxoZ01Hb0EwWWRNT3FBQVhjQUM0MmE0RU1uQkFBQ0RBQTd5Q2FSc3hyNEp3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCb0FBQUFhQ0FZQUFBQ3BTa3pPQUFBRVhrbEVRVlJJaWEyVnk0OFVWUlNIdjN2clZsVjM5V3NlTUl3T3lEc004Z2dxR0VVTWtyQXdZdUpXRnJqd2tSajhCNHh4NWNhZEMrTWo4UkZqWW1KWVlOeUlvc2I0SHRDSVlVR2l6b0F6WTh0TW5BYzlkSGRWZFZmZGUxMzBOTXkwTUVpWVgxTEp2WFhybk8vbTFNbjVpUzNIeTl4QXU0RkR3RjVnTTlBRENHQVdHQUYrQkU0QXA1ZEtJcFlBSFFCZUFBN2U2Q2J6K2hwNEdmajhXb2Z5T2tHdkFWL2RCQVRnSWVBazhOYi9BVG5BdDhCek53SG8xRE8weXBoWkN2UWQ4T0F0UU5xNmw5YS91eWJvVGVEK1pZQzBkUmZ3Zmlkb0QvRHNNa0xhZW9MNUNpa0FBYThEVkRSb0JBQ3VzQ2doQ0EwSTdLSm9nY0Jpa2ZNbkJwQlliQ3NYQm9FdkxDVUpHdDRBZGloZ214Uml6MHhUc3pNTEdXR3hCaUlFNDZGbWI5RWh0b0J5YURZMVdTV0pyVUZxZ3dHc2xHUWt4S25GV292dkNDNDNOVm82akdtSkw5Z083RmJBNGFtbVlXdmU0Y2hxancxZEhobzRNOVZnVjYvSHVVckNtcHhpK25LRE83b0RKcW9KV1NVbzVYd1NiZmpuVW9Udk9mUVhmWlNFMFZyS29UVUI3d3pYZVdVa1JDbUpJemlzSE1HK21TaGwvNllpNTJQTjBGaE1WMC9BbnpWd0E4R1hGVU0rdG16V2hpUjErR0l5Wkd0ZVVrMDhmcHR0OHVLT2JqNGVubU5xSm1UMXFnTERFeUZsNFZKekZDVWxNSzFxN3hYOXgvNHFEK2Jrd0V2YjgweEhtcm1HNW5KcVdWdnltSXdNaDlZWCtQQ1BPUXBKd3JxK0hNcVY5THFDYzVVRUJUUzBSV0RSMmpKY1RYbnF6aEluTGxRcEZESThmM2FPdkFBbG1GUlkyK1VxeVUrWFVzb05RRWk2cktGZVNmQ040ZVJvbFNoS09GVkp1RWZYNlN0bEdBcFRhQ1QwRjMyR3hxdXM2TXBnSEFjUk52bHN2RTRqMFF4ZnJHR2pKanJqNGlsWkZOcytLdGZycVEwbUdnWmZ0THBtcmduN1Y3azgzQzBabVk0bzVEMzZDajduWnlOVXF1a3YrZml1dzRYcGlJMTlBWTA0d1RFV0ZmaGNuQTFaV2ZTSkd5bURCWWRYTHhvbVF4MnExRkx4SFJHc0M1d3I3VnRQRXc2c3liRXk2K0JhdzhDS0hHT1JZWENnU0hrNllxRG9VdFlPSVRFbTY2T0Y1TzRjVEZrSGFUT3M2ODN5UzduRyt2NDhxMmJyakZiVHFxUTE2anNrc01aQzFFQlppMHhUYkJnakcwMDJGaFdESlpkTnZ1WGc2Z0FSTllocURhU0Z6YTZoUE5mRXhBbTlhTTVYbXR5V2xUU01IWlBBRDUyWVFBbkdxZ2s1VjFJVGl2SEkwRlBLRXNZcDFsTzhYVTdvelNydVdCR3dOdTl5ZTE3eGR5b1lTU1JydTN4aUJDcndtWXdNcDJjU2VqdzVKTFljTCs4RXppNEVPUUtxaVNYak9YUmxIR2FpbE9sSXM2SGtNUnNteEtrbDhDU0p0Z1N1Sk9jNU5MVkZXNHZyQ09wTlEzZkdZYUtlNGhoRDBaUDN0WTN2VjJEWDFjS0J0cUJ0YS9SSUlaQkFhbTFyTFNBMTlzb29XbFIwSWNDQ3hlSUlnU1A0M2NLZ21qOC95b0t4YmdFcFdvQ0ZjaGZzWGRsZUwvN202aXZSem5VVXJrN3ZJZUM5LzBiY3NvN1JjdXBGZnZRa2NHWVpJZWVBeDl1YlRvZDlBUGg1R1NCbjZURFJUbEJNeTRiZnZRWElCN1RjdGJvVXFLMm5nVWVBNzI4Q2NBcDRERGdDSGEzSXZNTmVSNS9PUC91QVIybVZZajFRWW40a0FxTzBHdWtUNEp1bGJ2RXY2b2ZBaHdHSHdDMEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCY0FBQUFYQ0FZQUFBRGdLdFNnQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5RnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREUwSURjNUxqRTFNVFE0TVN3Z01qQXhNeTh3TXk4eE15MHhNam93T1RveE5TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBETnpFME5EZEdNamN5UlRreE1VVTRRalk0TWtFNU4wVTFRa1ZHTnpKRU55SWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEROekUwTkRkR016Y3lSVGt4TVVVNFFqWTRNa0U1TjBVMVFrVkdOekpFTnlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rTTNNVFEwTjBZd056SkZPVEV4UlRoQ05qZ3lRVGszUlRWQ1JVWTNNa1EzSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tNM01UUTBOMFl4TnpKRk9URXhSVGhDTmpneVFUazNSVFZDUlVZM01rUTNJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgraE5TM0lRQUFBZjlKUkVGVWVOcWtsVTFJRlZFVXgrZlpLd2xkbUVHSkh5anZXYnB4VVVpMGFhRW91QXpNUUlVblNwQzZVSGZpVnh1TjJobHVYS2tiTjRyb0pnUkJVdHlFQ0lwWUVjSkRoQllScWFob0lUNm4zNEV6Y0puZTE0d0hmbS9lUGN6ODU5Ny92ZWRNSUJRS1dVa2lHMGFnQWZJZ0FEYjhnZ1VZaUVhalI0a2V6a2dpL0J4T29SMCtRalBVUWlQTVF3c2Noc1BocGtRQ2dRUXpiNFZKR0lQdUpCTjRENzNReVFyRzB4R1hSQlRld0xDVk9ucGdGQ3A0d1pkVXRpekNmcHJDRm9JZnVIeUhwVlNlMzRjeWlGamU0aVhrNDM4b21mZ3orQXRyWHBTWi9ZNXVmblU4ejhXek9palgvRGJjOHFCL0taN3JmN0ZvQmJxQy9IeUNLcGlBT2ZpdDFuZ05PVjEzeEI3b2dNZEJGWjZCVno0RXhaTC9jbmdmNC9KYXhLZjBYUCtCSXNqeUlvNlFPWlQ5MmxPOVdSRnZnMTE0Qit2d3cvSWY5MVI0aEJVTm1VVWtieTFVejMzWndpcmtFSnhJVHlKLzZSekZJbTFLRDZ6clJabnFsS1pxWFBXd1lZemxGR3pDUXlQM21kbEcvSFRGQXFoMHRkOUhrR1BrbmtLeEgvRXpyVHF6VU03aHdzZ2R1TzVKVzl4Uy83eU0weGJQVVN1Y3VBbTNJZFBJNWNMZFJBSkI0MnBySVRraGJhSGZHUCtFUVMwU0ovcGcxVlZFdHFNYk5Qek5kSzFrUzNIaUdONjZ2MFN1OHI5U25UUDNsK2lybnBBWHVrbDJIRi90T0dQbkhta2IwN0xodkxERW5MbkVFMWpXajNITVJ3SGRnRzlRNHlUK0NUQUFwZGw5M205Ym1STUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCb0FBQUFhQ0FZQUFBQ3BTa3pPQUFBRTgwbEVRVlJJaWJXV2Eyd1VWUmlHbjdudHpDNjdMWVVXQkF4cFFVcWtCbStBdHJVUUU0aVFJcGdtaEdBTVlQQ0NhSWlKUHhSSTlJOEdOZEdvb0VBZ0VFQ05vQ2lJWUNJYUxtMHBWTERXQW9WU0NaWGFVaWlrdTF2Mk1yTXpueitXSlZDUW9vSDMzNW1jYzU1NTV6dnp2VWVKUmlMMG9qRkFPVkFDakFENkFRcHdFV2dHOWdNN2dZTTMyMFM1Q2VoeFlERXdzYmMzdWF3OXdGTGdwLzhDV2c2OGZJdUFubG9Odk5BYlNBTjJBMlgvRTVKUkxUQUJTR1FlcUQwbVZONEdDTUE0MHJXN29xdEJLNERpMndESjZFRmdmV2FRK1hSalNkdTlFeG9QVkdZY2ZYcUhJQUNmUWRwUkVYRGtEb0lBeHVyQUxNL3pNRTBmcHVXLzRTd3ZsVUxWZFFDaXRvQlBRWUFzQU5mQmNUME1uM25kdW1RaVRqSnBvNnJxTEIxNHpEUk5ZckVZeTFlc3h2VDdxWGl5bk5hMmR0cmF6eUlpVENncjRhTmxLOGdaa3MvOG1lVW9QNjVFeVIvRjlzNStqQzRzSUNzWVlOdW1iOUYwamNFREI5TGVjUTdYVFRGOTZoUk0wNGViY2t0MDRCN1RzcWcrVU12ZTZvT1VGbzlqOW9zTEdUbGlHRlUxdGN4NWVpWW5tamZTY2JHTDBva2pjVFlzeFBodUk5WklnOTlhUm5GczVqc01EN3FzV3JjQjEzR1lOblVLeDV1YStiMitnVUFnd0l5SzZYUkhvL2txMEJlZ0t4em1zZEppS3FhVlUzWGdJRm1oRU8rLy9SYjFSNDZ5Yk9VYUZyNnlnQ2RLeCtDZU9rVEtCM2FUd3h2UFA4WG1IYnY0WXZNVzNuejlOZkp5Y2hoZldzenhwcFBrOU12aDBYRmpTRGsycUZxV3RualJvaVc2WVJpYXBySDU2eTNVSDIza3BlZm00bmtlMFdnM21xWlJNYTJjVFY5dDRsUm5ONDlNcnNCMzdqQmUwY05ZODliUTNucUcrd3NMS0o4OGlab0QxZVRtRGVEZXdoRU1HWHdYQWI5RmZzRXdVcWJQSVJxSi9CMkpSTVJPSnFTdHRWVWk0YkNJaU5qSnBMUzAvQ1dPNDRpSVNPT3hScW1xM2k4Wm5RMG5wTzFjMTVXeDU3cHlwdVcwTkoxc0ZoRVIxN0dscmIxRG9pSVMvV1ZkaHhLTlJQYUt5SGhWVlFuNC9UaU9nNU5LMFNjWVpPK2VQVFEyTmhLTHg4bnQzNS9zN0N3NkwxemtmRGpHc1B5aDVQVU5VVmxaU1RLWnBMQ3drRGx6NXlLZVJ5SWVSL1daS0laT2N2OW1XUEhNSVJXb1ZoUUZFZUZTTElidE9JZ0lBTHF1RXc2SHVkRFppYzgwS1NxNkQ5ZDE4ZUlSc3Z3K3d1RXdpcXJpZWg2MmJST0x4VWpFNDdpYWdXUG8yTFZiNFlPWmtEdTBSb2xHSXFPQitodjlQNFpoWUZvVzRhNHVITWNoRkFwaFdoWUFGem83aVVhajVCY1U0TGt1aVVTQ1JDeUdsWmVIQjdCckZiSm1QcGgrR0QycEpOUHI2b0FIcm9hSUNKcW1BZUR6K1JBUmJOc200MTdYZFRSTnczRWNWRVVCRkZKK0N3RlkveXJ5L2NlUUZZUUJCVTNrM0QweUF5cW1SMXUvWlhrZUJMUFRTZGJTZ0t4ZEFIOVV3YURCWUpnUXlKNkVidjE4ZGZDdEJaNjlaWUFJV0VId3FlQ2s0SWYza0czdlFyd2JCZzBIOFVEVnZrSFZadUM1MXlYc1llQ2htd09BUHFHMEF3R3FQa2QyZmdnbjZpQzNQd1Q3Z1pNRVZXdEVVVWZodWNEMVVXNEIrMGpuMDdVeS9HQ2xHeXZkRWZoMUM3SnZIUnlwQk11QTNLRnBsMDRTQXRrTkdQNHlvdWZEcU9rNjZ6MjJTNUNPNFRWNDNqeDBIL1M1M05FZER4cXJvWDRuVXJjZFRqV0FxY0hnQWxCVVNEbHBpMmFmTDhrYU9Cczc3dUs1WkVEL2Z0M1N0Q21rN0NXY3JDN2wrQjZrK1FDY3JvUG9wZlJwQ3VXbEhZaWJCbWxHTFlaL0tXWmdLNzRBSkxvaDNBNmEwUXNvRklJLzY1QlBLc3JvUERNVk0xQkNvRzgrdXBHTkNLQkVVTlVXTkwwR3pkeUJadXhHdVZ4RU13akoyRFdnZndDMDlrYzIxTXU2QUFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJvQUFBQWFDQVlBQUFDcFNrek9BQUFGamtsRVFWUklpYVdXYTR5Y1ZSbkhmK2U4Wnk0N2w1MmQ3cVhkV2RwdXR3c0x0cFVWV2l2TFZrcmdrMkR3a2doWTFFQnE4RXJ3Z3dueGcrRkxJd2xSTVVHTnhnWWIrQUphZ2pGeVN5Umx1MjVMaTlTaXRiU3VsTzIyM2U3TTdPemM1NzNNT2NjUHMwTnFzMTF0K0Nmdmh6ZlB5Zk03Ny9PYzgveGZNZjc0ZnY2SHRnSjNBV1BBdGNBcVFBQUZZQnFZQWw0RzNsb3BpVm9oZGp2d0ErRE9LOFE3Z2NHbCtBK0JBOENQZ05lWFd5eXZrT1JwNEkwVklNdHBKL0FhOE92L0IrUUFFOEMzcndKd3ViNU9xNHpSbFVBSGdSMGZBZExXSjJuMTdrTmQycU5mQXJjQUNHc0pWSmh5TEltdndnaHJpWHQxRW00VllReENXRnpDTEpvVXJna2poQ1VwNjNTSkNnNEdnd0Q0QkxBUCtOcWxvRzNBTjRTMVdDbVpTNjhoNmxiWmRPWmRlaXNMQkU2SW1aNjF2RDh3VElmdlVsNk1rSlFlbndvZEp4UEpFVmpGNmVaNjNnMUdpRG91R1NkUDB6b0FYd1YrQXh4c2czN2Urb29RODZsZXhrOU04cVdwRjltWW5TSG11MmdoS2NZN21ScmF5ak5qRDNEbjZwTjhsMzNjR0owRzJRQWtqV2FLUDlkdjVpZmxCNWtPQnRnWU90K0cvUUxZSXNZZjM3OEorQWZBK1ZYOWZPN3dIM2pzcGFjd0trdzIxVXZnT0FnTGNkMGdjcTdFdWMyRDNQcElGaEhQUWJVUDN5cUVnSkJzZ0xOQXFkSFBmZGtuZWMrc1o3MHpoOFlCMkNhQis0VzF6SGV0WnZ0N2gvbitTejlqTWQ3RlRMb2ZYNFd3Q0l3VUxQcHhDcHN5M0RDY3BYUk00Z1ZyY2EzQW1DYmFTbHdkbytFUGt1cVlZMi8zSGhLMlJvVjR1Ly8zUzJDODZUZ29ZZmo4Z2QraDZ5NTUzMkx5T2Z3TEYyZ1dGdkZtNXdpeTUrbGNjeFp6VFpsU3pxZDJmQVlWY1VIRnNPV3oyTnBGY0hONGl5RXk5aVM3NHE4eHAzdmJvREVGRE5laWNkWWVPOFRveUFDSjNUOWxZelNHMVpyNTU1NUZhSUhxWFVQaXh1dm9TRXpqejE5RXl3cHllQnd4OWdDcU1vUCsxeC9CTkVGNzJFZ2F0dXhnL0c5VmZ2WDJMS1pUSWpHREN1anlWWmprQjlQMDNMU09ydTg5aXE1V0tVOU1zbUhQSGlKREcvRE9uRUhYRzhqVUxweTZUNmhXUTIzYmdUbjlDUHJ2enhLKzkxVmsranBzczQ2WlBRQjlHWHJVQzZSa21jQjJFeEdtVXdKQ0drTVFUMktUU1ZqSTQxK1lJNXpwcCtPR0VYUzFTblI0R0JrTlk3d0d4dGNFMlVYeSszNUxhUERqT0RkL0M5RzVIcUpwYk9FVXhGWkQ4UVJ1ZnBvZzNJM0VmbmhoaXpHdkhzdU9idWZmZjMyQjRBdGZKQjlMRWNuMEk1UUNhekdlajY1NnBFWThPZ2E3cUI2ZEllS2N4QlIzZ1hZSkpoNERET2JpMjhpaGUzRDBFVTZWT2lqSVBsYUo4d0FWQlV4M0JGN20zRFZEdkQ2aGVQamdCT1ZZR3V1NVdLMFJDQkFTWThPWVVSK3hxWUhqSlVudmpCSk1Qb0VKSkJnRGdJMm1pUjU1QWhUc04zdEpDTGQ5R0dZVThCZXduMDRYYy96K3JvZllXcHhoN1BRUnBnZUcwSTZEc0JZRWFDMEozcStURE9WSmZOWmdreUU4ZHgwaTJpcU5SUktUSlVqQzB3dmY0V0I5TTllR1pyR3RjWFRJV2JmejNoeUliMFlEajNLc2s2bVI3ZlNWOG15ZS9TZGR0UktScGs5bm8wcGZMVWM1M01tUE4rNG0yTmJOOWFHaktGdEVTUThsSzRTY0FoRGlxY0xEUEZuK01obVZKeVEwTFkva1ViSGtzTWVBVVdVMHVXUTNUY2ZoOWhPVGpKNDVUaytsUU9DRU9Oc3p3T1RIeG5ocjRDYVN4VEozcXplNUxmWU9BMnFCd0RxY0N0YnljdjAycHR3dERLZ3NjZUdpVytad0NyaStEYnFsUGRhbE5mZ3FURDdaRFVEY3E5T1VEclZJakxoWHA3ZTJnR3ZEWEZpNmpIRlpSMXRKMVNSSXlCcXJuY0pTS1VXN1AzY0FiN1NINmlIZ0dlQkJJeVJLTjFsVG5NY0tnUkV0eTByWGlnQTBjVkJDczA1ZHhDTFFWaUlrOURuRnl3RUF6OU55NnY4eXZvZUFkeTVkSmF6Rk1SckhhSmFUd0tLRXhtSForQW5ndnZiTDVRNTdLM0IwMmF4WHArTXNtZWlWUUM0dEc5NzdFU0RQMFhMWHlrcWd0bllEbndFbXJ3SndHTGdIK0Fvc3paMUx0TkovM1N0THp6aHdONjFTYkFCU3RDNUhDZmlBMWtINkUvRG1TcnY0RDE5RFJJUzdhZU5FQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYUNBWUFBQUNwU2t6T0FBQUR3VWxFUVZSSWliV1dXMHdjVlJpQXZ6TjdnVjEydWJWY0NvSldRVFFhTENoZWtLSlcxRWpiYUd4TXhhVFJxRzFNTVRFK0dGTVM2b09KZlc1U3JiSEJTMUlmOE1rMDBpYWF0RFFZS2FLR05kWldpMHFRQ3FVc01MTXN5KzdNN3UvRE9JaHJYRW9MWHpLWm5IUCtPZCtjeTh4L1ZNUXdXSWE3Z0sxQUkxQU5GQUlLbUFhR2dhK0I0OEJBcGs1VUJ0RkRRQWZRc3R5Yi9FMHZjQUQ0WWlXaVEwRDdGUXJTT1FMc1dVN2tBazRCbTY5UzR2QU44QUN3NEZSb2FRRjlxeUFCdUJ0NzdSWlpLam9NM0xjS0VvYzY0R09uNEV4ZEEvWncxNEptb004WjBUdHJKQUY0Rit3UjNTWWlQeXFsQ0FUOWdBdkVZbTR1aG9pZ2xQclhVeUtnRkFSOFhuQnJZQ1daaTVtTDlTSkNNTnNEYmhmeGVCTFRzZ0FhM0VDYnBoUmVqNHVMRTlOYytHT1Nxb3Bpcml0ZGg3T0U1a0lNVDNZV0MvTXhzdjNaQUl4ZW1tRWtIS1dxT0VoWllRQTBCU2pNQlpQTDBRVGpzMUh5UFZDWUYwUXAxZVlHbW5KeWZGd0s2N1RzLzRBTlFSL2hXSUxPblZzb0xzakZvOEVkRzBzNSs4c29tNnJLbVp5YTRkekZhVjd2L1owY0pjekVMZDVzdVpXU1BEK1dhZEZjVTBGNzl5QkdORWJYVS9XSUNKcW1HdDFBRlpxYndRdGpESTlQMGJuemFkcmZPMFpvWkp5Sm9XRzZUMzNQcTA4MmNYNXNpbWNmcnFmcldCOGwxMWVpVzE1ZTIzd2pMMzgyUkdoY1ovSzNNQi8xRDNOZ1d5MS82dk04WHJPQjh0SWk1aUlSVWltNVFSUElCd2lOVE9DeVVuelNHK0tOSGMyc0Qvb3A4SG54ZXoza1pIbXBMaXZrbVk0amJLb3NvcldwanRHSmFZNE9qYkh2d1JvS2ZGNENMbzNLd2h4T0RrOEM4RWhWRVdBNlM1dnJkcnMwQmREMTVTQk50VGZSODladXUyVkhCeVVCSDNoY3ZQaG9BNGRQbkNFeEVhWnoxMk5zN3c1eFQyVUJQWHUyQUVLdzQxTktmRjVLOHYwa1JURGlGblhsK1VoOFVZUmJSR1pqODFIL3dkM2JxUzViajFnbXBwWGsrUDduT1Q4MlNYVkZNZXZ5QWh6NnZKKzJGMXJKQ3VUeHlwM2wzRndVQkROQkltbHg0cmxHemwyT2NFdFJrQ3kzaTNneWhWSXduMGc2bmdpR2JweldaMmZGSmluNjdLd1l1aTVMK2ZhblgyVnI1L3N5T1JVV001RVFFVk1rR1Y4U2E0cEl5cjZuN0haZDE4VXdESW5ZMTRDS0dNYmJ3TDcvKzlwRUJJQmdiaTVZQ1l4b0RFMUwvMFV1eTBFVk1ZeGFJSlFwU2ltRnBoVEpWR3FsQW9kN05lQUhZQ2hUbEloY2krUm5ZTUNaZzcxWDI4c1ZzQmYrU1JQOXdJZHJJT2tHVHNKL00reDNRUDBxU2M0Q3R6dUY5TzF6UHpDNENwSVFhVWswWGJTQW5ZYTdya0Z5RkR1N1JqS0pIRjRDV29HdlZpQTRBendCN0FJa3ZUSFR1YzZoQ2RpR1BSVWJnVHpzQTZRT2pHQnZwQjdnZEtaTy9nSlg0cVRHK2dYZk1RQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCY0FBQUFYQ0FZQUFBRGdLdFNnQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5RnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREUwSURjNUxqRTFNVFE0TVN3Z01qQXhNeTh3TXk4eE15MHhNam93T1RveE5TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBEUWpZeU4wTTROVGN5UlRreE1VVTRRamMxTWtNMlFVVTJPRFExT1VRMU5pSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcERRall5TjBNNE5qY3lSVGt4TVVVNFFqYzFNa00yUVVVMk9EUTFPVVExTmlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rTkNOakkzUXpnek56SkZPVEV4UlRoQ056VXlRelpCUlRZNE5EVTVSRFUySWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tOQ05qSTNRemcwTnpKRk9URXhSVGhDTnpVeVF6WkJSVFk0TkRVNVJEVTJJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrV1liNnVBQUFBYk5KUkVGVWVOcXNsVTBvUkZFVXgrK2JwdFNReGJDd2ZsTytraUpGV0VncEZoWlRJaHZGa2xKS3N2T2RCVklpSzhaS0ZJa0ZVWnFWc0xDeUlVM1dGa2hHTk9YamYrby85UnJ2em52elprNzl1bmRtN3Z6T2ZhZDd6ek5NMDFRMmtRKzZRRHVvQUFhNEEyZGdEN3dsRjhaaU1hVUx3MFkrRHVaVHZ2dGxnbVJNZ1VrbnVTL2w4em5GRDZBWEZGTXE2NEo4bWxzd0FTNkJYNlVKcXp3S1d2bkhVckFEbmkyL3Y0SjlVQTNHUUFNVE9NcGxjUXNmZDFvNXh3SVlCWFdoVUdndVhjM3pNSDZCUjJDcXpFSktWQVVLVWZ0M3U1MzNjRDZpTW85aGpuMjZzb1E1UC9FZ2ozSU02K1J5am45QVFubUxPQ2pYeVEyVmZSZzYrVDFIdjBkeEFSMjI4a1BPMnp5SW16a2U2T1RibkM5N2tLOXczTkxKUDlrbnluaVozTVlncUFFemRtYzh0WEZkZ1hyZXZDVUg4UkJZQlM4UUY3bnBMVTNnR2l5Q0c5REoxcHVNQU9nQUZ4VExib080L210dTVOOXNSck9nRmh6eERNY3ArZ0RIb0pHZHN3U3NTM21RWU5OdFA1ZVFSKzNtVGlzdEw0dFRzQXVlTEd0RjNBOGlLTkdBRzducmtKY0ZkLzR2Z1M4SHQxTlJHSkVFMWhMbFJHNlRZRU5sY2VXMUNTQ1dxWXlCbk1vdENlVGtKZjRFR0FBNmtYTXJHQjBjcGdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJrQUFBQVpDQVlBQUFERTZZVmpBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlGcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TlMxak1ERTBJRGM1TGpFMU1UUTRNU3dnTWpBeE15OHdNeTh4TXkweE1qb3dPVG94TlNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcERNRU5FT1RjMVFqY3lSVGt4TVVVNFFqY3dSVGhFUWtNNE5VVkJOemhGTlNJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwRE1FTkVPVGMxUXpjeVJUa3hNVVU0UWpjd1JUaEVRa000TlVWQk56aEZOU0krSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tNd1EwUTVOelU1TnpKRk9URXhSVGhDTnpCRk9FUkNRemcxUlVFM09FVTFJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa013UTBRNU56VkJOekpGT1RFeFJUaENOekJGT0VSQ1F6ZzFSVUUzT0VVMUlpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCs3Vk5CT2dBQUF2NUpSRUZVZU5xY2xudUlURkVjeCsrc0thekhHdkVIb3N3czFyL0llb1VpclJMTDBQNkJUWXZVc25sTm0xZEdTMGhFaTFXS1NTdVB2SXRsWW1WSjJyVHlqNVUwWXJETGVtMmJSeEhyODZ2ZjZIVGRlL2R5NnRQcC91NDU1M3ZPK1QzdURZVERZY3RINnd1WG9BKzBRd0RhWUZZcWxYcmQwZVFzeTErYkQ0TmdFa3pXdmhjczhUUFpTV1FDUElMTmhrMTIzZ2pOQm8vaFYyWkFKQktKUVNOTTYwaWtBTzdBTlZnUDFXcC9weWN4MjBCb1ZZRkRkRHZnTWlSNW51c21NaDJ1d2tKWUMrS3NtWEFMOXNJSm04aHhxR0RCV3ZwRmtJZC95dWxud3hsVHlCU3BnZDA2MmRJckNjRXp0VmZZUk1TMkJkSXlEb0dVR09rdTBxMFRvVDkzYlVTWExMSmFUZzh0UGdQQzByVXR3emM5Nko1RGduY3hzUVdOOStMb2Z2QUVjdUdEOVk4TmdlNDYvMFpHd01ueFMvWDRDWWMxUnNNNXVBa1hZS0xEbUNyNGhrQ1JhWlNUZEZWbmQ5RkVDK3NpWml1RFNqZ0o0dWloVUFjYk5Lb3k3U0ZFT1ZHWmh2MTNPQ1UrcVZleE5oMlloSjNHeEhGd1Y1T3d6ckNQZ3ZzUzl1dzhhVnpaS3JwQzNYQTN1UzBSYWRVb2FuZTVhcm1lSmxqZ2NqMGpFY24zOEZOYWZQSVdlbnY0TXdkdXU3eVRrM1gyRU1pbWU1K2xSYzhya3I3QUdKZDNZK0dIUjNoL2xWc1NYN3lFZTVrU29VbTUzeGdiMXlzN0NBMkdQUTlXU2lXMjdWNGlkSTQrU3M1ODdoUUtoVTdya1pzMGZDV0xmNnF6TFUwczJhMk1Hd0NEb1JpT1NXU3gyeXBEb05Rb1FXa3RxckdBdy9la1FRdGlnYzArQmRaQVQ5a2RISUFyWnNZaklpRStBdHN3ZTU2WVRYWXhIR1k0WEhHdDR0V1d3MVBFamlDMDJDbmpwYlF2VTVGbTZ6OGFDMy9VK2ZNUTJ1WWtzaDMyd1F2YlhMR1Z1cXhid21LVk5xRVc5ZXRHSjVHb25xWlFueVZCMzBDK1Z1aHltOEFLMkNQSmlOQW42SzkrbWFyMllpZVI4M0pNclZ0eGphcDZ6UVdwcUNVMkVmbStiMlhuNHlVQTVCQUliS0svTG1PeFY3dFY0YlA2aFpTQ2VkaklnUnpOSjdPOWdteTlJaWs1dS9RTEdlVTU0UlZkbG43ZmMyMjJvRmJla1BGTE5BUWVHTDZJNnczODFZSStBMGZpdjBnelB5TWlKZU9vbjhtL0JSZ0F1UXJtR1ZsemdZTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCb0FBQUFhQ0FZQUFBQ3BTa3pPQUFBR0FrbEVRVlJJaWEyVmUyeFhaeG5IUCs5N3p1L1MrNDNTMGdKdGFaRkxwY1dOdG5SMFk1QWlNRmdjaTA1WndoWUo3ZytuMFdRbXJpYUtVd09MbCttMlJJMXpLbTVSbkhPYmxtRkhXQys2bFc1Z1pCUWNRc2NvRzkya2xQWjNQNWZmT1k5Ly9Qb3JZTnlVWmQva0pPZDk4MzJmejNtZTh6eDUxWkxXQndFUUVaUlM1T2VIQ0FZME9lRUFocUd4blhTTFkzdWJiQ2U5eW5HOWhuVGFMeFVSZ2tGenNpQS9OREt2cW1odzBjTHk1OWZkWFA5S1dWa3VGeTRrS0NvTXM2QzJCTk0wOER3ZkFQV2ZvSUtDTURraGc3UW5uWW1FM1pWTXBkZW1QUjhGR0liR01CUUE2YlJQeW5LeHJEUm1RTk84ZE03QWxzMUxkNjFmKzVFRFNrRnhVWWhnTURBRE1zcXJPOGxLYTAwb1pKSkt1VCtlaWxpUDJFNjZ6akEwcHFreERJM1c2Z3F2SWhRMHljOExFUXdZdkg1NnZQYUZ2dFBiSmk0bHE5ZXRhZWllVlY2Q2E5dkl0UDl5Um9DaFZRRG9kMTN2QnEwVlNsME8vTCtrdGNLeTByeHhab0sxcSt0ZjNmL1U5dFdoY05pS1JpSm9yZEZab3dKOFgxN3lQUDhHdzlEWEJDRnpsbERJWU9tU0NucjdSbHEzYk5zekNCNzUrYm40dnFBSzVuYWhsRUxCWXdJN3JpbjZmNUZTb0pSaWF2UnQ3dHkrNXRkUFBMYnRidGV4VUorNisxZUk3N2VsZlJtNnRoemVENlpJV1M0VGx4TDg5S0hiYmxxK2JQNWZsWWdEeUdGOFdmRWhjVExTR3R0eWljWHQ0K0dRdVV6WlZxSlJ3WEdsTkJJTXovakVUb0g0Qk1ONTJSMUFJWjZOMGdwVWNNYnJXRW0wVnBqQm5JelRzM0hkTklaaDRMZ2VudWUzbUk3amJVVWJrSTRpcno5TGdYTUNLbGFTTEZ0UGJwNXdvUGNFRXhOSm1ob3JHUmg4azYyM04xRlNXc1NlM3d4eCtNZ296YzNWYkx2ak9vTEJBUHYrL0JyUm1NMG5ibG1DWVJvNGxwdjlscTNFb3RIK1dDd3VzWGhVa3VkZmxZR3ZkMGo4QVVSa1ZNWVRJaGozeXVlKytGdjV5YzhIQk82UjRlT2pjcytYOWtybG9wM1N2T3I3c21iem95SWlNbnppbk1BT3dieFhqZzJQaW9oSUxCck5Qb2MwMElCNDRFTk9WUXM5YzUvbXRqM053Q202RDd3Tm5zMERYWjJjZld1S2xyV0xTU1J0ZnZad0R5dWFxem42MG4zMGRuOEJnTzk4cjVmaW1nckthMHM1Y3ZSOHBvUXlVOTFhRFJSbnBnakFaM3VuNHVERlczbjZTWnMvN08zaHBrM0xtVE5uRmkvMG5xYThMSSsybG9YczNIVUgrNTRicHFuMVFkNTlkNUx4OFV2ODd0bGo5UDFwQjUyckd6alFkeHJJdFBxMENrMHVVM0FkaTRZRnBXeFl2NEFkTzQ5aXg2YzQrRnhtdEU2ZUdxZnQrcmtBZkxOckk1KzVmUmxMRm4rRHJtL3RwNzIxQmlJcEhuL2lNRU5IM3FKMlhqSGdFZzZiV0ZZNjA0VEFWQlprV1I1Z2NtTmJGWkV6ZzlUVnptSlYreUlHaDA1aC9lc3NLMWZNNTl2ZjdhRmp3eVBzL3RFQXhUWFZoRUlCdm54L055czdGeEdKZTVTVjVORFhjNUpqdytjeEF6blowREVUR0FHcXNxazZqc09XelkxTWp0M0Z4bHViOEgwUHc5QjhwZXZUckx1NWdVT0h6ekh3OGhtaU1adDllKzlpVm1rdXl2TzUvNzQxMU5SVU1EWjJrZDBQOVlGU09NNU0xNDJxV0RTNkMraks3dmkrVDJGUkxoQUFJQnFKVUpBZlJoa2hmTTlDRzZFcnF3MjQwOTQwOFdpUy9NSWNJRURhVFpGTU9taXRBUjVXc1Vpa0NUUDhHb0VneUJYbkZlKzVWanJ6UHROVjcrVlZnQS80M2tvVmk4Y2dPZjUzNVh2TEpWZ0k0dkdoU0Nud1hFRCtpUkZlcktLZW9OOGNhRGU3Tnd4S3ptd0k1RjQxQUI4WTRudGdUeUx6T2p1bHFPRkZVNlZTK1BXckQva0w3L3lsSHZ6Rlo2V3k0T295ZkJCcEF6VTVoY3l1ZTBxSzZsL0VUYUJpa1NrSTV5T0dRZUQzNi82bVJnNWVKN1BuVDhPdWxaaHBFaFU5aDEvWjhnOXY5UThhbGNvRk40NktSYVBnKzBoaEVUaE9PUERNK3Irb2tmNFdLU3NITSsvLy8yZEtnK2RBNGgzSXJUem0zZkpNaDEvYkhsT1dEeXA3bFd1TmlrWWhFTFRTbit4cjlkbysvN2lLamFPbXpvTHZUcmZaKzJRaEhpVEdJSFVCcWR2MHBILzlWeitHRVl3cEczQVQ0R1F6eWg3d1BRZ1hJQ0dOUHJsdm96NzZ3NitwZDE3dVVJNk5CQU1RS2dGaitzN3liWEJpcUhRU01mT1Ewc1pYWk82YTNWVGQrRWNpYnlERkM1SGFqV0RITXRHdkFpSGcyWUFnZWVWZ3hURkc5M2VvOC8yYm1UelpyaEpqZGJqeElrQVJ5STFJdU93c2hmVkRVcnIwZVNuOWFMOVNRT29pSk1hUWlsYWs1dU16b0g4RGFXdTgraWExM05BQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0ErUTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0JrWldaaGRXeDBJSEYxWVd4cGRIa0svOXNBUXdBSUJnWUhCZ1VJQndjSENRa0lDZ3dVRFF3TEN3d1pFaE1QRkIwYUh4NGRHaHdjSUNRdUp5QWlMQ01jSENnM0tTd3dNVFEwTkI4bk9UMDRNand1TXpReS85c0FRd0VKQ1FrTUN3d1lEUTBZTWlFY0lUSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5LzhBQUVRZ0I4Z0VzQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEE5Z29vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9wa3MwVnZFMHMwaVJ4b01zN3NBQVBjbXNBZVBmQ1J1QkFQRWVtRnljZjhmSzdmKytzNC9XZ0RvcUthanBKR3NrYks2TUFWWlRrRUh1RFZMVk5jMHJSSWxsMVRVYld6UnZ1bWVVSnUrZ1BYOEtBTDlGWitsYTdwT3VSdkpwZW8ydDRxWTMrUktHSzU2WkE2ZmpXZ1NBQ1NjQVVBRkZZRGVOL0NxM2YyVStJZE1FMmR1MzdTdU0rbWM0elcrQ0NBUWNnMEFGRkZGQUJSUlJRQVVVVXlhYUszaGttbWtTT0tOUzd1N0FLcWdaSkpQUUNnQjlGUjI5eERkMjBWeGJ5cExCS29lT1JHREt5bmtFRWRSVmZVdFcwN1I3Y1Q2bGZXMXBFVGdQUEtFQlBvTTlhQUxsRlpXbGVKdEQxeVJvOUwxYXp1NUZHNWtpbEJZRDF4MXhXclFBVVZ6OXg0NThLMnR5YmVieERwcXlnNEsvYUZPRDdrSEFyYnQ3bUM4dDB1TGFhT2VGeGxKSW5ES3c5aU9EUUJMUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFGVFVOTXNkVmhqaDFDMWl1WW81QktzY3E3bDNEb1NPaDY5NmU5bFp0YUcyZTJnTnRqQmlhTWJNZlRwVml1SzFMNGRMcUNZYnhKcmo0T2ZLdXJnVHdON1BHUmhoN1VBUCtIbmxSYVhxNjJqbit4NDlUbUdua241QkNBdWRoL3VCOStQeHFMd0pZdzZ6YXllTDlRaFNiVU5Ua2Q0V2tYY2JlM0RFUnhwbm9NRGNjZFMzTlhORDFLNHZ0TTFqUTdxM2doMUhTZ2JhUmJWZHNUcTBlNk5rWCtFRlNQbDV3UlV2dzdkSlBoNW9MSjBGbWkvaUJnL3FEUUJROGUyS2FaWWp4ZHA4U3g2bnBicks3b01HNGgzQVNSdWU0Mmtubm9RTVlwL2pHUTZ6cU9nK0dvNVNMVFZYZWE4YU5zRjdlSlF4VEk1QWNzb3o2WnEvNCtkSS9oL3I3UDBOakt2NGxTQitwRlpLeHRiK1B2Q29uR0diUnA0Z1QvZlh5aWYwb0E2d2FScHE2ZC9aNjZmYWl5MjdQczRpWFpqMDI0eFhOK0R0K2thMXJuaGJleld0ZzBWeFk3emtyQktDZGc5bFpXQTlpSzdHdVNzdjNueFgxZGsrN0ZwTnNrbis4WkpDUDBvQTYyczdUTmRzTld1TDIydFpXKzBXVXhodUlaRktPaDdIQjUya2NnOUNLMGE0N3h6WlFXRnQvd0FKVGEzc2VuYXRZcGhKbkJLWEs1LzFFaWpsZ3g2WTVCNUZBSFI2dnE5bG9lbVRhaHFFd2l0NGh5ZXBZOWxBN2s5QUt0d3lpZUNPWlZkUklvWUxJcFZoa1p3UWVRZmF1QzhLU254bHJFdXM2NFBLdk5ObDh1RFJuQkgyRnNjU09DQnVkaHlHeGdEcHowOUFvQUs0UHhXOG5pdDlSMGEzZGwwblRZbWsxR1pHL3dCZEtGM0xBQ093NFovd0hyV3g0czE2VFRvcmZUTlBsaVRWdFFKamdhVmdGZ1VmZW1iUFpSMEhjNEZNV0hSOUU4RzNPbTJkNUF5cGF5WlpwZ1hsY3FTenNjOHN4eVQ5YUFMSGdiL2tRZkQvQVAyRDRQOEEwQVZrK0U3U0RYZFUxYnhKcUVRbnVSZlRXbG9KUUdGdkRFMjBCQi9DU1FTVDcxZjhCM2RzL2dqUUlVdUltbEdud2dvSEJZWVFaNHFqRW1wZUR0WTFFdzZaYzZsb21vWERYYS9Zd0dtdHBuKytwUWtia0pHNEVkQ1R4UUJkOGJhSEJmYUhkYWpBaXc2dFlSTmMyZDRndzZPZ3lCbnVweGdnNUdEV1g0cTFXWFYvaGRhNm5HWkliYThXMWx2VEMyR2pnZGxNdUQxNEJJUHRtbDhSYTFxZXVlSGRSdGJEU2I3VHJWcmFUN1ZmNmhHSWhIRnRPNEltZHhZakl5UUFNNXoybzA3VXBOQytHM2hxMGp0RnU3Kyt0b0xXM3RuT0VaMmp5ZDV3Y0txaGlmcGp2UUIxMm4yT25XdW5SVytuMjl0SFpiQjVhUXFOaFhzUmpnL1d1WDhPdzIxbjhRZGZ0TkhWVTB3VzhMM01jZjhBcW83c2xzaFIwQktCU1FPK00xVHR2aHJjeDJFMFAvQ1VhblltYmsyMm1PWWJhTTl3aUVzUVBvd3E5NFdsbjhQNnIvd2lWN2EyaWZ1RGMybDFhUitXbHlvWUI5NjVPSkFTQ2VUbk9hQU95b29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdETzFqVWJqUzdaTGlEVExuVUUzNGxTMUttUkZ3Zm1Da2pkempnYzgxalNlUExEeXlJTkwxMjR1T2d0MDB1Wlh6NkVzb1VmaWE2cWlnRG1mQ1dsNmhCTHF1c2F2RXNGL3F0d0pXdDFZTjVFYUtFalFzT0NRQmtrZHpXWHBjOTE0Rmx1ZEp1OVB2TG5SRE04MWpkMmR1MDNrbzdiakZJcUFzTUVuQnhnZzlxN3FpZ0RoTlZ1TG54NllOSHN0T3ZiZlJUTWtsL2VYa0RRQ1ZGSVlSUnF3RE1TUU1rakFBUFhOYS9pM1NiNjdHbmF0cEtvK3FhVk9ab1luSUFtUmwyeVI1N2JsUEI5UUs2U2lnRGxQK0U4dGhBQTJpYStMMGovanpHbXlGOCttN0d6SHZ1eFV2aEhTYjYyYlV0WjFlTll0VTFhWVN5d3EyNFFScU5zY2VlNUF6a2pqSk5kTlJRQVZ6TnY0ZnU5UjhSTnJHdlBGSXRyS3cweXpqSk1jSUhBbGJQM3BEK1NqcHp6WFRVVUFjMzRqOE9UWGx6RnJXaXpKYWE5YXJpT1ZoOGx3blV4U2dkVlByMVU4aXVoaE1yUVJtZEZTWXFDNm8yNEJzY2dIQXlNOThVK2lnRE8xTHcvbzJzeVJ5YW5wVm5lUEdDRWE0Z1Z5bzlBU0t4dFQ4RGVHUnBWNGJmdzFwbm5lUS9sN0xOTjI3YWNZNDY1cnFxS0FPUzhDK0dkTjB2dzNvOTEvWTF0YWFwOWlqRThodHdrd1lxTndZNHpuUFhOYU9wK0tMYlNMNDIxMXArcWxOb1lYRUZpODBSejJ5Z09EOVFLM0tLQU9IMVc5dnZHMFA5aTZicDk5YWFYT1FMN1VMdUZvTjBPZm1qaVZzTVdZY1p3QUFUV3A0cTBlOHViYlRMM1I0bzN2dEp1VnVJYmQyMnJLbTBvMGVlaWtxeHdleEFycEtLQU9XVHgzWUxIaTYwelc3YTRBK2FCOU1tWmdmUUZWS242ZzFCcFVHb2EvNHZUeERlV0UrbjJObGJQYjJVTnpnVFNzNUJlUmxCK1VZVUFBODkrSzdDaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQVAvMlE9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBVDhBQUFCdUNBTUFBQUJtM2VSL0FBQUZUR2xVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDFMV013TVRJZ01TNHhORGsyTURJc0lESXdNVEl2TVRBdk1UQXRNVGc2TVRBNk1qUWdJQ0FnSUNBZ0lDSStDaUE4Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pUGdvZ0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlDaUFnSUNCNGJXeHVjenBrWXowaWFIUjBjRG92TDNCMWNtd3ViM0puTDJSakwyVnNaVzFsYm5Sekx6RXVNUzhpQ2lBZ0lDQjRiV3h1Y3pwa1lXMDlJbWgwZEhBNkx5OTNkM2N1WkdGNUxtTnZiUzlrWVcwdk1TNHdJZ29nSUNBZ2VHMXNibk02ZEdsbVpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzkwYVdabUx6RXVNQzhpQ2lBZ0lDQjRiV3h1Y3pwUVlYbFFZV3c5SW5kM2R5NXdZWGx3WVd3dVkyOXRMMkpoYzJVdmRqRWlDaUFnSUdSak9tWnZjbTFoZEQwaWFXMWhaMlV2Y0c1bklnb2dJQ0JrWXpwdGIyUnBabWxsWkQwaU1qQXhOQzB3T1Mwd05GUXhORG96TXpvME9TNDJOUzB3Tnpvd01DSUtJQ0FnWkdGdE9uTnBlbVU5SWpVM05EQWlDaUFnSUdSaGJUcFFhSGx6YVdOaGJIZHBaSFJvYVc1cGJtTm9aWE05SWkweExqQWlDaUFnSUdSaGJUcGxlSFJ5WVdOMFpXUTlJakl3TVRRdE1Ea3RNRFJVTVRRNk16TTZORGd1TURJMExUQTNPakF3SWdvZ0lDQmtZVzA2YzJoaE1UMGlZakF6TlRsaE5UTmpNalV6TnpKbE16SXlNVGN4TVRWbVpqQTNNell3T1RGaVlqaGlNV0ZoWkNJS0lDQWdaR0Z0T2s1MWJXSmxjbTltZEdWNGRIVmhiR052YlcxbGJuUnpQU0l4SWdvZ0lDQmtZVzA2Um1sc1pXWnZjbTFoZEQwaVVFNUhJZ29nSUNCa1lXMDZVSEp2WjNKbGMzTnBkbVU5SW01dklnb2dJQ0JrWVcwNlVHaDVjMmxqWVd4b1pXbG5hSFJwYm1Sd2FUMGlMVEVpQ2lBZ0lHUmhiVHBEYjIxdFpXNTBjejBpVTI5bWRIZGhjbVU2SUVGa2IySmxJRWx0WVdkbFVtVmhaSGttSTNoQk95SUtJQ0FnWkdGdE9rMUpUVVYwZVhCbFBTSnBiV0ZuWlM5d2JtY2lDaUFnSUdSaGJUcE9kVzFpWlhKdlptbHRZV2RsY3owaU1TSUtJQ0FnWkdGdE9rSnBkSE53WlhKd2FYaGxiRDBpT0NJS0lDQWdaR0Z0T2xCb2VYTnBZMkZzYUdWcFoyaDBhVzVwYm1Ob1pYTTlJaTB4TGpBaUNpQWdJR1JoYlRwUWFIbHphV05oYkhkcFpIUm9hVzVrY0drOUlpMHhJZ29nSUNCMGFXWm1Pa2x0WVdkbFRHVnVaM1JvUFNJeE1UQWlDaUFnSUhScFptWTZTVzFoWjJWWGFXUjBhRDBpTXpFNUlnb2dJQ0JRWVhsUVlXdzZjM1JoZEhWelBTSlRiM1Z5WTJWQmNIQnliM1psWkNJS0lDQWdVR0Y1VUdGc09uTnZkWEpqWlU1dlpHVlFZWFJvUFNJdlkyOXVkR1Z1ZEM5a1lXMHZVR0Y1VUdGc1JHbG5hWFJoYkVGemMyVjBjeTl6Y0dGeWRHRkpiV0ZuWlhNdlIyeHZZbUZzU1cxaFoyVnpMMjFyZEdjdlRHOW5ieTlCVFY5VFlubFFVRjl0WTE5MmMxOXRjMTloWlY5VlN5NXdibWNpQ2lBZ0lGQmhlVkJoYkRwcGMxTnZkWEpqWlQwaWRISjFaU0krQ2lBZ0lEeGtZenBzWVc1bmRXRm5aVDRLSUNBZ0lEeHlaR1k2UW1Gbkx6NEtJQ0FnUEM5a1l6cHNZVzVuZFdGblpUNEtJQ0E4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLSUR3dmNtUm1PbEpFUmo0S1BDOTRPbmh0Y0cxbGRHRStDancvZUhCaFkydGxkQ0JsYm1ROUluSWlQejd2dEp1MUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBd0JRVEZSRkdwUFJ1c0hUREIxdmpjbm9HS3JpZ0piRUlhdmlBRTZPS24zQWVzcndVVytzelNNMzlvWWVCaU9GWm5Tbk5qSm0rN3BORUtMZE5yUG1rWnU0azlMMGkycUlYS0xUazNKRWpLYkhMbmU4TWxPY2hNM3l1WVdiQUlYRjFOamp4ZVgwazhEaWEybVQ2anBIalNwTElZbksrc2gwaXM3ejBOZm83dTd1OG01MUpZUEYrK3JOSDR6TWduNkUxNVFwK2JLM2p0SHppYmpmV1dlWWRTeFQ3aklzYXNUdFQ1blE3OUdoY1ltNnA5M3pmODN2OGZQMm1kVDFBR2lwRTUzWnUrVDN0eVU4WWNMczhaMGdpRUJpM1BINytLMHZGcHJYQWllVWNhdlg4bVFoOVkrVlVienA0cnpFM2lBd242akIxTzc2NCtYdGoxQnpTN3JxNGZMNkNTQjU1dlQ3VEV4akFIbTVyMWh2NzBZa25wNmU4dm45U1ZlT3lNM2NxY25reHNiR250cno2M3lIV0RCZHZXbzFFRDZPaW9TZjhWZGNscnZkcXBPcC9kdWp0ZUgxUUlHd1c4RHJNNmJienV6NXdNbmpjTWJ1djlibnFYMDd3c2ZiczduVTMrVHcxTlBVWTdmZ3BhckhKajZRSTRiSUlVZWF2YmZFcnVEMVE2dmQ3L245UVdLbEs3RGtyNzdZN2xaaVY3L3J5T0h4MkZ0bWRjandkazF4UWJmb2RvR3A3L0wzMTdxT29TZERxdFh0b2EzVFNURmdEcWJmWUgrenhPajJOcGpSUnJqcDk1eWpoSSs0TkVGdlRyYmppTkR1WDd2a0FTRnB4dW40KzlYWCtzYkxRSW5IUzd2bnYrYjNBRyt3R2l4OExZVzcxT3YzQUkvUHVOM3dVTFBnL2VQbFByWG1NSy9qVmF6YjdjblBIaWhzUHJqbnl0N3Z3Y2pla3AvS0VqV2MxK2J6d2VmNHc4YlliOGp0RHhwakVEYWgyOXZidUxpNEFEQ0hBSnplZjVtNTN0N2V2OHZmZDEyRnhJc3hzVDFhSFpEUE8zeXhLSURERHpOdjMrYnVBRDU5V1ZSY3JiVEtuN0hTR0pmVS92SHkvZU80RDVMUG43VE1abHBXZVdSTy8vbngvdlRqTUhTbzA4elhIakZxZEd4dDNlbjE1T1RrbHRmeXhKSkVyNit2QW1DZjc5ZmJ3RTVpbTlEcjNKT2N2SmFveXFDeGlrVkt3RFJQajRCeEgyZWYwa3BlMHMvTDl2YjJBSmJXMldNcTlYZ2dnYjdoZThmcEFUK01GakdMNGNyU3RvUTI0dFhEN0NBbkFKemMrYVliN0J3dUFEUnpJemh4Ly8vLy8vLy9KdW9QMUFBQUFRQjBVazVULy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0FGUDNCeVVBQUJIMlNVUkJWSGphN0owTlhCVDNtY2VKeUs1QVlBVVVPT3lDdWlxaW5sSlhjcmdFWFN5S0wwR0lFSW5CTlVpTU5rVHhGUlh0WmhIMWlHNHdBaXJJTmI1Z3ExR2dpYkdKMmtRc0VvMmlRWk9ZTm1scXlyV1g2MnZNSmZYdWVJa1A5enovbVgwWmRtWlkwQ1A5eVB3TXM3UHozMTNnNis5NStmOW54bmgwS0xvWGVTZ0lGSDRLUDRXZndrK1J3ay9ocC9CVCtDbFMrQ244Rkg0S1AwVTk0RmQ2emlhZlFvVlE5L2x0UHVlUWw0S28yL3pPT1N0UFlkUk5mdlVDZnU4cmpMckpyMURBTDlReDRNVXBVdXF6Y2cxTVdSYkJVWU1odW0veDh5SnNQN1pwajhYRmwxSTU4VXdkcDRCY1o2aDRvRy94OHhId3U1MWdPLzUrVnpteG11ZFhOOGZwb0xtdXJxWnY4U3R3NXFkMnVJZDhXVmdmaHR0NjhjOEtRSEpWV1hWQ3d4bnE2cXI3RnI5enp2eTBEaGpveTRLT2psREdMeS9VeXlzdnNyN2VpbC9rUm10OWZYMEhnb3RtTGd4QTIxRWVyS3JLN1Vpb3F6UDBLWDU1enZ5TzFOV3BiQVBvdkZJdXV2TmkyV3VXSUVrMHF3L0hka2tWOHF2cXNKQUxjMnRZSGlRbklzNnNCNXZmbCsvd0d1MG9FeHk5djJjNEp6TThYRkJBNFZzUWE4K0U5WlFVcmF4a0YxTGt6cWttYU5FcVd5YXM3bUJRVWU4OGlQcVMrRDMxVzlmeXEyNXVqczg0eGhDWStlT1JObVpMaUpiUGxUeEMyV0VsY2xaMFlpeGxPazQxQmhiSmpHZmFnMXgrZi9zVThudDZ2ZkFnTTVlMnp1R2dUdTFMUVNTbXdNMWNuN2laUlc0cEJ2Rm1xNjM4QnB5eHFMaWNod2NNVlN3YlBxaDYrMm1Qam5mRXlxOERuMFZZZnV1NXZRTDdBOS9WNFBFYUtyOVZhVGpDeHl4aU5FYy8yT1gzSFZkK0dJdm4vczZNVkYxOXBrcXdLaE5tSjdra3NxTitDZXVrclF4ZkxFZU5yN1FVdUJZTFZ0NjZYT3lwei9RcGZveUh1czZXOWdXKzlPbmNTSWZ5N1hZWVA5SGczekxIYmwrSzRlZyt4WStsdWZnNjE3VHZOSEh6NGJzWDFraFR2cVFwTWJVdmFmeWNMWUJ2WDFUVVUxZjFQWDVINmx6VC92dGVYbGI3Zm14cHFEWFVLNVF2eTR5cnhXbWhJTTB3NTB3V0hqQmpILzBnMjA4cy8rRk1ZdVh0T25mVHZqV01LeVo5VkNMOCtGQjBNKzFqOUM3SlUvZ0paWWsyR0F3V3R6NmcwTXVydmtQaHAwamhwL0JUK0NuOEZQV1FYOUQ5ay8zanYvemxmWlA5TTgvZk56azFEcXVLdkwwTlF6Z1p2TDJMVnExS1NOZzJaOTZPNnBvdHF2NGxKUUVCVTZiTWFHcnk4TGc0YnR5SVRadkdEQlhoZC9mK3lmNWpqUjROOTBrT2Z0L2VONTEzOEVOOFE0YU00alJrQ0FHTWlWbStiYzdlNmtBSHZ4a0tQMmwrQm9Zdk9qcmFCakFtaGhrd0VBMW81OWZrY2ZIaXVCRWozT2UzTzF1djArbXpOU0pERlZjL0Nna0p1WHIxSDRCZm96bytRNnZWSG9sWE43cU1hZlI2bzlGWXJOZC9Lc3VQdVM5NkVDbWFBVVFESml6Zk5tOXZwd0R1QmorTjN0aGlVM0t4WHNEd296WGoyMndhSHpML3UrVFhHSzl0ZGVqWUVTZUVsN09MMngxS0x0Wkk4ek53K0I3RlB3eWd3WHZWS2pLZ0lJQzVCT2dldjJ3SFBCNmh6a2F3SW1SYW0xRGpiMzVYL0Jveldqc3JneWQ0V1ovYzNrbSsyVkw4MEg2RWowUUFlUU95QU80SlAwMW5laHhCTm5hek16MVN3L3p2Z2w5amZLdVltQWQzdTlBakdUVVMvREQxY2ZnUUlCbVFDMkRHYjR0TEFlNktuejY1UlZTK3UrOVdOTFNKSzZUMythbTFyZUxTcWkvcjJzV1ZuQzNKNzFFYlB6S2d0N2VOWDQycXUveUtXNlNVL01kcGJWSnFxT2hsZnVyYnJWTDZ3Tmd1S1owRXYwRTIvejJLUlpnU1lFLzlKNDJ2WlZLYmpNWlg5Q28vOVRGcGZIOXFiM2NEb0ZUOE12OFY5ZFIvY3ZpbXRia0ZzRGY0eWJpdlZSWmZlN3Rlak44b2tmekgxdzlWZCtxSHJrV0czNElGQzJiSkFGelRlL3dhcGQzSGFaZ013TjJpOVRmYVZuOUhPZFhmN3ZZdjJTMWRTUTdnUjczR0wwT2EzTGhMVEw3Uy9KSXZ1L2JQdHZhWjcvK0tpbHduY083MHo3N1M0Qlk4ekVtRzM3U0tYdUtubHNiM2dXOTdsOUs1OEdNTk5GcVF6ZUN3ZXZEcHI3dnpENzJNOGVTVG4zTVgwek4rYjZ4YzZUWS9yVFMvQysxdTZGT1g5UU51K1NDYVgwQ3dMOEE0bFY4YlA3bjFnMlNaNVBld1RYSWc1NHZ6Tzh1cllpUDNmR08vZnYzUzgrRlVPcW9jbitmRjV2dVJOc2V5WVd2cEw1S1NrbndrK2NuWXIvV25sMnpxeW9ETy9JcTh1UldFVVd3QnE4ZysvUTNzMXZxVnZzVWRMZWpLZ0NMK083M3pOZUxYNzJ3NGU3b1E4ZlVMQW4vaTl3YkF5M2NZdlNRL3Z3STJISnRFK29Va3Y0eFdkL1M0RE1ETFFuNnJ6SW1KYVV5amN0TVNtVkpRdWFoWFhza3BRMFZ3Mm81NlJKS2ZYTzh5eXlHNUhrWTZmamN5Z2tHMG00cjI2L2NUSytRVFB5dThuTzdISzhtTDJlL25qRi9TWnhMOEd1V2d2V3VYWENMTUZ2S0x5WHhpYWlMQTFLbVFBcms1bHNRY3Mva3RtSnlWZGVzSmlFNkRuTXJKVU9rSkVPRjVGTkoyUWJBVVAwMDN5dTcwZ2RNbEExZ2kvKzBrZnY2MFYwNzgvTUhhRC9HRmdmV09Id0VNSzhqM1MxcEh3eTl6K0pJS0pmalp3bGRGdDV1MHR0WndENXc2VFh1SHo1NjlWWXhmc1pCZkZneWFPZ1NnS0RvRk1vY1lFbk84emVZcTJKdVZaUWlFL21XVjFaV1RJNDRmM3dXZWUycGhlekFFdnlmQkQ1dVhmOFdmZGFudkFkd0s2QzFkS2t4NjA4ZmlLMzQxc0ZQMS9SZjRWZHROYVg2bmlkOUMycnRML0NKaExkblBIOVlSdmZ3OFNvT25yRFFjeHZQemt1QjNoR2QxbmtaYXRmVzR0ZGlxN3dVbm9RR0hBY3dXNCtjcjVKZG04WWJLUkZpVk9BaXFjcUlUemQ0cEtZbXdJemYzMW1Fb0tkdFNCdkJ2azE4OURwNmV0YnZrK0dIdi9DenhleEUzQndqYUpNWnU2NlFuQWFKb2J6Z2Z5NSt6WHhPbXR3MTBkbUdEQ2NheUhscXEvcklTZ28vckNCK0NMQ2QrcCtqQkw5MnBXS3hreVErL0NpVDQ4ZFZYK3lIajl4ZmFWcW1pcTZxcXNtclFsRmxWVldaOG5HTis2KzJEVVlqNFFGVFV3WU5SQi9jTjMzY0FUa3dZN2tpQVR2emdWbFpLMWkySUFlOUViMHRsaW5uVjVNbFRvVG9tNFhVemxMeWxLb08wR1JFUlRVYzlQZFAydkNyRHo5alNRdWxwSzFYRXgyYlRqN1d2WlI4OURDYXFVZGZ4WjVuMGU5ekVQUVJnOHQvNXQ1RTA5bHpEV0JqNzhjZ2JBRCtLZytmYUdtVDRUU1IrV0VBbUVqK3N4QXVKWHlTVXMvQ2RtR2Q3V1NtaTIxd3FMQ0FDZnZ6Y0l5T1NSbzR4aWdibVJiQUVyTEN3UjlYWDdQbVQ1TTN2c1R3dzRUbzdjbjBTeDA4ajRKZVpZRGFiWXl3SlVCWnpDNGFrVERiUVN3TUJubENoLzViSFJNUnNxUFRjc01IVEU0YnVrZVZuTk9IN2ZrZzE4Z3NUKzNaZjBPWUFVVjNNbms4Z2xJaHY3TFMyaGpYY1MvNk1YM0hydVY5ekpDc2dVdnlDaU45R3lEdUwrTzdpODUra1l3SUVpQ1QvK2ZuZDhlSmNuZWVINkdKUGtRa2p4Zm54c2RvTWNBVUE3WWZ2QzJZbjFBRDI0SkZZYklKQ2NULzAvQmMvdUFKeFFiamhkT1U4ZnVBK01YNnZUTWJobkxjd0JRNUpnYXkwcWQ1Rlp3WkJBaDQ3RElkVExESDdqNmNoeTlwZHU4QXk4L3NRUEVDU1gzRXF2dWNheEtIbG5uMHhHM005SWhxYy9lUkRFRDQ0SFA0OWV5TmNSMittWGlOUTJLdjg4Mit1WWhSaXlNZUZreUh4WFpnUlpmaUZFNytkVUU3ODZIT3doMG1uZkJpYnpoWGdmTWJMaThqbFJkTDJaVmwrendPZ3MrckJpbTliOFVHQ1lUVnlDZ1ZJTStDR1NHV1Z0dXNCZnVhTEczaWNjc0Z3STI0UGl2RkRPdk5TcEhwMzV1Z05HMmlibG9rYkdYNTZNbGNjVVZzYVJVV0VySFlpcWpnY0p2d0FkMzZXQ25GekFkNE5vdFNIR2ptV3VRcmdKVHc2UFdRdU95dzMvM2lORlpDNy9SQmdLbXVpMDlOM3NuNlBHUkF0U0FEemsveVN3Z0NJWDZ3c3YxTEVSR09oeUszR3dyMHVsSC85ZVRZU2RZSDhkb0dnNGZNSjdkeXVDTC9BNmgwNzl1N2RPMi9lbWFLaXZUdXFxd054M3FHaXpwbTF6dFE3czdrSGE1N2ZlMi9BTWlsK0dKMlUvSkRFZjNBL1IwVTRsLzVtRCthZW0weFlXWGgrTC9GUkNmQTVWWTZHYS9CeG16dy9Tb0N2clR2TG1oZnNaeWg4MTNGenR3TE9nVDdVdkdEOG5nSW9FQlFRRVg1YVpQVThqZjBhWVBWcVJIZnBDbGdSMDRjWXlhSDkxUVdVK3ZBdklLb2RON09OSEw4ZnNxMHJ2NXJBd01EcWFvUzQ3UXdxSmlaaHk0N2wyK1ljSnUzZnYvLzRDOGRyajllaWdtdURneDhKRGc1ZUpNVVBZM0VpRmdJVGhNZkJZL3E1Y01KWFV4NEg2SldseU85N2d3Y1BmandWSnJUc1pQSGJrQXIvaTU0alI0YVlzSFA1UEJVaHl0WVBMZ0ZXMERUa3RHMFNZcXNhYjNCVEVPU0cwNUNrd3BVcmZjaUFjdlUzb3g1eU1RV0MrWGxtdTl4V2pMRFY2TWtzVmF0cXVVcWxiWTVreHhmL0ZRdk1WbDhjdUw1MXNaVjRpdkRic21WTERURU16T0svMzlSTTJibTZSUCtTSEFRSGtOL2dYMUxjVHNEdmRuRDIwc0ZmRXI4Snc2Z1IyTHFQck5oQ09ldTVHeDhEM0hocE5EbHk3QnJNaURjd21KL3JnaDlMZ1Awd2ZLbDZBSnVFMk1jaW1RT3BldmdsMmJWU2xCODNmWXRIZFBnRjFXaXRVcjVFR0piRWNSUG9SZXpoRTZxOGhXakU5dllLcmpqQndjVmNQeTNzLzFRcTFSYW1XN0NGSXRjTWx0ZVhZK3pXSEMyYk1tUEdpbGNqS0hyaDZ4R2J4c0RRQVFPazRsZVA1WGZDUkxpdVE2ZWtjcjh3Mjg0bDY4eTFCZXZTRmgyYmhJVnpnOWV3YXhrL2tTKy9OMGFHeUs2L3NDa2MybytXRWRiU0dnSytjZDFhTnJTT0pVQW9wV213SGVFcFVYN05qQitHclFINTVXb1Iwazk5ckt5WW5Na0lvN0NGRDluMnNkOVRWNGw0VCtDRWd3MVkvM1BTaWNYc1JKeVFYMG4vL2lxbVc2Q2lpdkg2cmVySlpZY0J2dGtmY1J5M0d5SnE4ZWoyRWZTaDc3MHA2VCtOYnE0cGFxRnA5b3VtVDU1Y2FETDk2Tm9uYzAyb3FOMXpUWjhNMzcwVGR4K2JhUHJ2NFMyenJ0TCtTd3Nmd3Blc2Y5YTBmbVRiVFgrVEtjaTBmdUNOZ1ZkbCtRM2psbUZlSXpNRUViOXk2Z0x6L2N2TGZaajkvSEV1bCtUbk1HQ3B6UHp0U0h4R3F6WSsvdmF4K0hodGE0WmFmU1FERDdRZWExWS8vK3Q0YmJOYXJmNUxjcnRlYzBHbjArdHBKbXpNbm4vaFJaM3pBb3d6djVLUy9zaXdmLzlvNkgvNHNEZWtsSGhEV1UxbDVmNXZJbFo0ZXE0NEdyR250dmJyekVjZUNaNEpNdzhGejN4VFl2M0FhUFJ0TVJwYmZPbEJWNHdQUnAxTzU5dVNqSnRKczU0SkNYbm1xMmVlK1dyV0xPejlRa0lhY0xObWZNTjQvSStXN2tNYTJNNDArZlcvalJ3L05nbjJwL2hGNzFFVDdjZSsvTzdrblNLS0JlemZXZGlNL01MRTExOWtGdThuT3RZUDVFNkRhSVQ4QWtwNFZVSUpmYnVZNVRVcFpTc3FLM01nNG9XSWlOcFhtZjhBTXJjZk9vbVo1bEN3QkQrNWt4OXRibW1OUEw5VWpsK3FmUkpzNVNiQmZBY2RDZmtVdmx6VzgzSXVJRUorOFRMTGYrNHNuN0xwcjRBZnFpU0E0MWRaV2JrOEJuS3FjL2JEMFFnTHhtK21aKzMyUFo1RGg4TFFvVE1QcFMxYXR1eFFvUVEvdVFXWS8zS0wzOVV1MXAvdjJ0Y1FyRWp2TFBycmRENEhNUDJPZng2c1pHMDA5OUpDNXdJaTVDZTNnRFhNdG5yd2JsZW40Sno0VFFuZ1ZRbTAySWNUWGpoYWxnTEhteUl5ajBKRTJ0Rk1XdmVEN2R0UHBzR2JKM0VqdGY1YzdNYnlxZHhKNElhdTF1L0RUNk9ZL2F4clVhd0U1YTB0THk4L3hVamxyVVR4c3pZcjdWdkYxKy9kV1VCOXQ2c1RTTTc4cGt3SlFJWlRBbUlZdnJJYzFUZTBXdnBDMHg5dys0ZnROcDA4dWVna2F0RnFLWDZhNUs3NXlSbnhONzEwL3FoUjV1enZKYzUrY3F2UE9wMHJQNEZta0pxYTJKSTltM2ZReElObUhnTUcvQk5xbWVUNXQzdkxnQ0VRMUV2bkwrVk93Q1YzbGYyTTJaM3pIK0d5czV0aWc0ZjAyS3l0TXo0WmZySW5NTHZDTjc1aTU4TGV1djVBSm9JdlVmRnQ3L0wwcnpPL3BxWVp6bXB5MEdQbTY0UlBqcDljQk5QMUJ6SW4zNmJONzgzclg3UTlQWGVVclBsV2hGOW5lZGpvTWZNSjhjbnh1N3RiTGdWT2V0Z05mTDNEcjFGN2ovaWMrU0dzSmc4ZUhNZk9RWStaVDRCUGxwOHN3Sy9jd2RkTDE2ODFTb2R3UnJaMDU2Y1J1Mzd0b29kUUZ5ODYwV1BtYzhZbnowOG1CK3JFcno1bHVXOSs3MTkvMml5QnIvbmJielVTSnkrTEw0dGVQM21SazhkRkQzNlA0QkU5Si9NNThIWEY3NjVPMUlLKzJUZzBYL3dDMUpDSzcrTDZaOUVZMWpaS1hQNk01dHN0Y2YwendycG9KOGZZMmVnNVlyY2IvTzVxWEJ2cFpEMC9kbk44RjVjLzkrYjE5K3JPUVp5aHRnMTkycGxncDh2SG5mbU5HQ2ZVQ0I0ZVI2K1QrOXpnUjJzeGdpZzI2cDF2WC9nZlFlUzYzTURRcS9kL05EWm4ySnJwMnhuTndqdEFkdXZzWVd6VWEyVHUveGpoSWg2ZUdEMjMrTEU3UUhSR1VySE85UTZhcXlGckdraHJiczcvUjdqL1NFMFN2OHRJUS9xMGkvdVBFTmFJVGM3b2hQUTY0WE9UWDErNWYrdXpRNStOMlNUVUdCNGU1NzNPK0JSK0FuN1c3MmVPY1pFTm5vdjNlcFhmK3Z0MSsrcmYvbi92WHgwcXBtWDBSMVFubGZ1bmxmdlBGWDRLUDRXZnd1OGUrVDA5V3NIUVU0MSsycU5qOU84VURqM1Y3MFo3ZEhTc2YycjkyNHA2SUFUSC9mdlpDb3FlcVVQNS94L2RxeFIrQ2orRm44SlA0YWRJNGFmd1UvZ3AvQlFwL0JSK0NyKytvUDhUWUFBRCtXK2R6K1RyVHdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1zc3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1odHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wYXlwYWwtYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==