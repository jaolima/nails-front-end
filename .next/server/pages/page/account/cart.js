module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/page/account/cart": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/page/account/cart.js");
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\common\\widgets\\breadcrubs.js";
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
  title: 'Shop',
  megaMenu: true,
  megaMenuType: 'small',
  type: 'sub',
  children: [{
    title: 'DIP POWDER',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Dip Starter Kits',
      type: 'link',
      icon: 'alert'
    }, {
      path: '/shop/left_sidebar',
      title: 'Dip Colors',
      type: 'link',
      icon: 'layout-accordion-merged'
    }, {
      path: '/shop/left_sidebar',
      title: 'Dip Glow',
      type: 'link',
      icon: 'layers'
    }, {
      path: '/shop/left_sidebar',
      title: 'Dip Essentials',
      type: 'link',
      icon: 'write'
    }]
  }, {
    title: 'NAIL ELECTRONICS',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Beyond Pro Drill',
      type: 'link',
      icon: 'alert'
    }, {
      path: '/shop/left_sidebar',
      title: 'Beyond Pro LED Lamp',
      type: 'link',
      icon: 'layout-accordion-merged'
    }, {
      path: '/shop/left_sidebar',
      title: 'Drill Bits',
      type: 'link',
      icon: 'layers'
    }, {
      path: '/shop/left_sidebar',
      title: 'Beyond Pro Accessories',
      type: 'link',
      icon: 'write'
    }, {
      path: '/shop/left_sidebar',
      title: 'Beyond Home LED Lamp',
      type: 'link',
      icon: 'map-alt'
    }]
  }, {
    title: 'GEL POLISH',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Gel Colors',
      type: 'link',
      icon: 'alert'
    }, {
      path: '/shop/left_sidebar',
      title: 'All-in-one Gel Colors',
      type: 'link',
      icon: 'layers'
    }, {
      path: '/shop/left_sidebar',
      title: 'Gel Effects',
      type: 'link',
      icon: 'write'
    }, {
      path: '/shop/left_sidebar',
      title: 'Gel Essential',
      type: 'link',
      icon: 'map-alt'
    }]
  }, {
    title: 'GELLY TIPS',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Gelly Tips Starter Kit',
      type: 'link',
      icon: 'alert'
    }, {
      path: '/shop/left_sidebar',
      title: 'Gelly Tip Shapes',
      type: 'link',
      icon: 'layout-accordion-merged'
    }, {
      path: '/shop/left_sidebar',
      title: 'Gelly Essentials',
      type: 'link',
      icon: 'layers'
    }]
  }, {
    title: 'NAIL LACQUER',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Lacquer Colors',
      type: 'link',
      icon: 'alert'
    }, {
      path: '/shop/left_sidebar',
      title: 'All-in-one Lacquer Colors',
      type: 'link',
      icon: 'layout-accordion-merged'
    }, {
      path: '/shop/left_sidebar',
      title: 'Lacquer Essentials',
      type: 'link',
      icon: 'layers'
    }]
  }, {
    title: 'NAIL ART',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Gel Art',
      type: 'link',
      icon: 'alert'
    }, {
      path: '/shop/left_sidebar',
      title: 'Rhinestones - Bling It On',
      type: 'link',
      icon: 'layout-accordion-merged'
    }, {
      path: '/shop/left_sidebar',
      title: '3D Glitter - Sprinkle On',
      type: 'link',
      icon: 'layers'
    }, {
      path: '/shop/left_sidebar',
      title: 'Chrome - Rub On',
      type: 'link',
      icon: 'write'
    }, {
      path: '/shop/left_sidebar',
      title: 'Holo - Rub On',
      type: 'link',
      icon: 'map-alt'
    }, {
      path: '/shop/left_sidebar',
      title: 'Mermaid - Rub On',
      type: 'link',
      icon: 'map-alt'
    }, {
      path: '/shop/left_sidebar',
      title: 'Nail Art Essentials',
      type: 'link',
      icon: 'map-alt'
    }]
  }]
}, {
  path: '/',
  title: 'KITS + BUNDLES',
  type: 'link',
  arrow: false
}, {
  path: '/',
  title: 'NEW',
  type: 'link',
  arrow: false
}, {
  path: '/',
  title: 'COLOR CHART',
  type: 'link',
  arrow: false
}, {
  path: '/',
  title: 'SALE',
  type: 'link',
  arrow: false
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\containers\\Cart.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\containers\\CartContainer.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\footers\\common\\MasterFooter.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\footers\\common\\copyright.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\headers\\common\\cart-header.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\headers\\common\\currency.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\headers\\common\\logo.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\headers\\common\\navbar.js";
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
    }, " ", t(menuItem.title), menuItem.arrow == false ? '' : __jsx("span", {
      className: "sub-arrow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 53
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
          lineNumber: 165,
          columnNumber: 31
        }
      }, childrenItem.title, childrenItem.tag === "new" ? __jsx("span", {
        className: "new-tag",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 35
        }
      }, "new") : "", __jsx("i", {
        className: "fa fa-angle-right pl-2",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 33
        }
      })) : "", childrenItem.type === "link" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `${childrenItem.path}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 31
        }
      }, __jsx("a", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 33
        }
      }, childrenItem.title, childrenItem.tag === "new" ? __jsx("span", {
        className: "new-tag",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 37
        }
      }, "new") : "")) : "", childrenItem.children ? __jsx("ul", {
        className: `nav-sub-childmenu ${childrenItem.active ? "menu-open " : "active"}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 31
        }
      }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
        key: key,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 37
        }
      }, childrenSubItem.type === "link" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: childrenSubItem.path,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "sub-menu-title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 43
        }
      }, childrenSubItem.title, childrenSubItem.tag === "new" ? __jsx("span", {
        className: "new-tag",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 47
        }
      }, "new") : "")) : ""))) : "");
    })) : menuItem.arrow == false ? '' : __jsx("div", {
      className: `mega-menu-container  ${menuItem.megaMenu ? "" : "opensubmenu"}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 23
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 27
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 29
      }
    }, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == "small" ? "col mega-box" : menuItem.megaMenuType == "medium" ? "col-lg-3" : menuItem.megaMenuType == "large" ? "col" : ""} `,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 35
        }
      }, __jsx("div", {
        className: "link-section",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 37
        }
      }, __jsx("div", {
        className: "menu-title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 39
        }
      }, __jsx("h5", {
        onClick: e => handleMegaSubmenu(e),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 41
        }
      }, megaMenuItem.title)), __jsx("div", {
        className: "menu-content",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 39
        }
      }, __jsx("ul", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 41
        }
      }, menuItem.title === "Elements" ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 51
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 53
          }
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 55
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 51
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282,
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\headers\\common\\search-overlay.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\headers\\common\\sidebar.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\headers\\common\\topbar-dark.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\headers\\header-one.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\components\\shop\\common-layout.js";
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

var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\helpers\\Currency\\CurrencyContext.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\helpers\\apollo\\apollo.js";
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

/***/ "./pages/page/account/cart.js":
/*!************************************!*\
  !*** ./pages/page/account/cart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shop_common_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/shop/common-layout */ "./components/shop/common-layout.js");
/* harmony import */ var _common_cart_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/cart-page */ "./pages/page/account/common/cart-page.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\pages\\page\\account\\cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Wishliat = () => {
  return __jsx(_components_shop_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    parent: "home",
    title: "cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_common_cart_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Wishliat);

/***/ }),

/***/ "./pages/page/account/common/cart-page.js":
/*!************************************************!*\
  !*** ./pages/page/account/common/cart-page.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/cart */ "./helpers/cart/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var _public_assets_images_icon_empty_cart_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/assets/images/icon-empty-cart.png */ "./public/assets/images/icon-empty-cart.png");
/* harmony import */ var _public_assets_images_icon_empty_cart_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_empty_cart_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-factory\\projeto nails factory\\multikart-frontend-template\\pages\\page\\account\\common\\cart-page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CartPage = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const cartItems = context.state;
  const curContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__["CurrencyContext"]);
  const symbol = curContext.state.symbol;
  const total = context.cartTotal;
  const removeFromCart = context.removeFromCart;
  const {
    0: quantity,
    1: setQty
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: quantityError,
    1: setQuantityError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const updateQty = context.updateQty;

  const handleQtyUpdate = (item, quantity) => {
    if (quantity >= 1) {
      setQuantityError(false);
      updateQty(item, quantity);
    } else {
      setQuantityError(true);
    }
  };

  const changeQty = e => {
    setQuantity(parseInt(e.target.value));
  };

  const minusQty = () => {
    if (quantity > 1) {
      setStock("InStock");
      setQty(quantity - 1);
    }
  };

  const plusQty = product => {
    if (product.stock >= quantity) {
      setQty(quantity + 1);
    } else {
      setStock("Out of Stock !");
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, cartItems && cartItems.length > 0 ? __jsx("section", {
    className: "cart-section section-b-space",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("table", {
    className: "table cart-table table-responsive-xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, __jsx("tr", {
    className: "table-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("th", {
    scope: "col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }, "image"), __jsx("th", {
    scope: "col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, "product name"), __jsx("th", {
    scope: "col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, "price"), __jsx("th", {
    scope: "col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  }, "quantity"), __jsx("th", {
    scope: "col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 23
    }
  }, "action"), __jsx("th", {
    scope: "col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, "total"))), cartItems.map((item, index) => {
    return __jsx("tbody", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 23
      }
    }, __jsx("tr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 27
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/left-sidebar/product/` + item.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 31
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
      src: item.images ? item.images[0].src : item.images[0].src,
      alt: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    })))), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 27
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/left-sidebar/product/` + item.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 31
      }
    }, item.title)), __jsx("div", {
      className: "mobile-cart-content row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col-xs-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: "qty-box",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "input-group",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 35
      }
    }, __jsx("input", {
      type: "number",
      name: "quantity",
      onChange: e => handleQtyUpdate(item, e.target.value),
      className: "form-control input-number",
      defaultValue: item.qty,
      style: {
        borderColor: quantityError && "red"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 37
      }
    }))), item.qty >= item.stock ? "out of Stock" : ""), __jsx("div", {
      className: "col-xs-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 31
      }
    }, __jsx("h2", {
      className: "td-color",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 33
      }
    }, symbol, item.price - item.price * item.discount / 100)), __jsx("div", {
      className: "col-xs-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 31
      }
    }, __jsx("h2", {
      className: "td-color",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 33
      }
    }, __jsx("a", {
      href: "#",
      className: "icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 35
      }
    }, __jsx("i", {
      className: "fa fa-times",
      onClick: () => removeFromCart(item),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 37
      }
    })))))), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 27
      }
    }, __jsx("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 29
      }
    }, symbol, item.price - item.price * item.discount / 100)), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "qty-box",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "input-group",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 31
      }
    }, __jsx("input", {
      type: "number",
      name: "quantity",
      onChange: e => handleQtyUpdate(item, e.target.value),
      className: "form-control input-number",
      defaultValue: item.qty,
      style: {
        borderColor: quantityError && "red"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 33
      }
    }))), item.qty >= item.stock ? "out of Stock" : ""), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "fa fa-times",
      onClick: () => removeFromCart(item),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 29
      }
    })), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 27
      }
    }, __jsx("h2", {
      className: "td-color",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 29
      }
    }, symbol, item.total))));
  })), __jsx("table", {
    className: "table cart-table table-responsive-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, __jsx("tfoot", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 19
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 23
    }
  }, "total price :"), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 23
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 25
    }
  }, symbol, " ", total, " "))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "cart-buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn btn-solid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 19
    }
  }, "continue shopping"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/page/account/checkout`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn btn-solid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 19
    }
  }, "check out")))))) : __jsx("section", {
    className: "cart-section section-b-space",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: _public_assets_images_icon_empty_cart_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "img-fluid mb-4 mx-auto",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 23
    }
  }, "Your Cart is Empty")), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }, "Explore more shortlist some items."))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartPage);

/***/ }),

/***/ "./public/assets/images/favicon/1.png":
/*!********************************************!*\
  !*** ./public/assets/images/favicon/1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzY5Qzc4QTkyNjcxMUU4QUQwQkM0RTQ0N0NBQzg0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzY5Qzc4QjkyNjcxMUU4QUQwQkM0RTQ0N0NBQzg0MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzNjlDNzg4OTI2NzExRThBRDBCQzRFNDQ3Q0FDODQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzNjlDNzg5OTI2NzExRThBRDBCQzRFNDQ3Q0FDODQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xF1arAAAAVZJREFUeNpi/P//P8NAAsb/PtYD6gAmIM4cQPszQQ6YDMTuA2A5yM7JIAcwA/FKINalo+W6UDuZmaAC/EC8EYhF6WA5yI4NUDsZmJAkFIF4MxCz09ByNqgdSsiJEBmYA/FcUO6gRY4D4nlQOxhwOQAEooG4lgYOqIGazUDIASDQgE0xBQBkViOucgBXcM1CDy4ygTnULEZSHAACXNAEI0+B5XJQM7jwlYSEssxmWJYhEYD0bCGUtZmILDSWQQssYgFI7VJiCjcmIg30AuKJJDhgAhB7E1sZEQuyiay4QGpySKkNSQGgissNj7wrVA0DrRwAittVOOIWJLaaxLRCsgNgqXs9WuoWhYqRnFuYyMzfytDsyQbFm6BiJAMWPHJ/gfgTHnk1IO6FstWB+D0etXy4ooaFQHwLEvBADgOFgIlhgMGoA0YdMOqAAXcAC42a4EMnBAACDAA7yCaRsxr4JwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/assets/images/icon-empty-cart.png":
/*!**************************************************!*\
  !*** ./public/assets/images/icon-empty-cart.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi93aWRnZXRzL2JyZWFkY3J1YnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb25zdGFudC9pMThuLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29uc3RhbnQvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lcnMvQ2FydENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3RlcnMvY29tbW9uL01hc3RlckZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3RlcnMvY29tbW9uL2NvcHlyaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlcnMvY29tbW9uL2NhcnQtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vY3VycmVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXJzL2NvbW1vbi9sb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vc2VhcmNoLW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXJzL2NvbW1vbi9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vdG9wYmFyLWRhcmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXJzL2hlYWRlci1vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaG9wL2NvbW1vbi1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9hcG9sbG8vYXBvbGxvLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFnZS9hY2NvdW50L2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFnZS9hY2NvdW50L2NvbW1vbi9jYXJ0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi8xLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uLWVtcHR5LWNhcnQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vYW1lcmljYW4tZXhwcmVzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9jYXJ0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL2Rpc2NvdmVyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL21hc3RlcmNhcmQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vcGF5cGFsLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9zZXR0aW5nLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3Zpc2EucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21lZ2EtbWVudS9mYXNoaW9uLmpwZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1zc3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1saW5rLWh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sIm5hbWVzIjpbIkJyZWFkY3J1YnMiLCJ0aXRsZSIsInBhcmVudCIsInN1YlRpdGxlIiwidW5kZWZpbmVkIiwiaTE4bmV4dCIsInVzZSIsIkxhbmd1YWdlRGV0ZWN0b3IiLCJpbml0UmVhY3RJMThuZXh0IiwiaW5pdCIsInJlc291cmNlcyIsImVuIiwidHJhbnNsYXRpb25zIiwiZm4iLCJmYWxsYmFja0xuZyIsImRlYnVnIiwibnMiLCJkZWZhdWx0TlMiLCJrZXlTZXBhcmF0b3IiLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJNRU5VSVRFTVMiLCJtZWdhTWVudSIsIm1lZ2FNZW51VHlwZSIsInR5cGUiLCJjaGlsZHJlbiIsInBhdGgiLCJpY29uIiwiYXJyb3ciLCJDYXJ0Q29tcG9uZW50IiwibGF5b3V0IiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsImN1cnJDb250ZXh0IiwiQ3VycmVuY3lDb250ZXh0Iiwic3ltYm9sIiwic3RhdGUiLCJjYXJ0TGlzdCIsInRvdGFsIiwiY2FydFRvdGFsIiwicmVtb3ZlRnJvbUNhcnQiLCJvcGVuU2lkZSIsInNldE9wZW5TaWRlIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpbWFnZXMiLCJzcmMiLCJxdHkiLCJwcmljZSIsIkNhcnRDb250YWluZXIiLCJNYXN0ZXJGb290ZXIiLCJjb250YWluZXJGbHVpZCIsImxvZ29OYW1lIiwibGF5b3V0Q2xhc3MiLCJmb290ZXJDbGFzcyIsImZvb3RlckxheU91dCIsImZvb3RlclNlY3Rpb24iLCJiZWxvd1NlY3Rpb24iLCJiZWxvd0NvbnRhaW5lckZsdWlkIiwiY29weVJpZ2h0Rmx1aWQiLCJuZXdMYXR0ZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjb2xsYXBzZSIsInNldENvbGxhcHNlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiY2hhbmdlQ29sbGFwc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvcHlSaWdodCIsImZsdWlkIiwidmlzYSIsIm1hc3RlcmNhcmQiLCJwYXlwYWwiLCJhbWVyaWNhbmV4cHJlc3MiLCJkaXNjb3ZlciIsIkNhcnRIZWFkZXIiLCJpZCIsIm5hbWUiLCJkaXNjb3VudCIsInRvRml4ZWQiLCJHRVRfQ1VSUkVOQ1kiLCJncWwiLCJDdXJyZW5jeSIsImRhdGEiLCJ1c2VRdWVyeSIsIkNvbnRleHQiLCJzZWxlY3RlZEN1cnJlbmN5IiwiY3VycmVuY3lDb250ZXh0IiwiY2hhbmdlTGFuZ3VhZ2UiLCJsbmciLCJsYW5ndWFnZSIsImkiLCJ2YWwiLCJsYW5nIiwiZ2V0Q3VycmVuY3kiLCJjdXIiLCJjdXJyZW5jeSIsIndpdGhBcG9sbG8iLCJMb2dvSW1hZ2UiLCJsb2dvIiwiTmF2QmFyIiwidCIsInVzZVRyYW5zbGF0aW9uIiwibmF2Q2xvc2UiLCJzZXROYXZDbG9zZSIsInJpZ2h0Iiwicm91dGVyIiwidXNlUm91dGVyIiwib3Blbk5hdiIsImFzUGF0aCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImNsb3NlTmF2IiwicmVtb3ZlIiwiaGFuZGxlTWVnYVN1Ym1lbnUiLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidmFsdWUiLCJtYWlubWVudSIsInNldE1haW5NZW51IiwiY3VycmVudFVybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJmaWx0ZXIiLCJpdGVtcyIsInNldE5hdkFjdGl2ZSIsInN1Ykl0ZW1zIiwic3ViU3ViSXRlbXMiLCJtZW51SXRlbSIsImFjdGl2ZSIsImluY2x1ZGVzIiwic3VibWVudUl0ZW1zIiwidG9nZ2xldE5hdkFjdGl2ZSIsImEiLCJiIiwiYyIsIm9wZW5NYmxOYXYiLCJiaW5kIiwiZSIsImNoaWxkcmVuSXRlbSIsInRhZyIsImNoaWxkcmVuU3ViSXRlbSIsImtleSIsIm1lZ2FNZW51SXRlbSIsInN1Yk1lZ2FNZW51SXRlbSIsImNsb3NlU2VhcmNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJTZWFyY2hPdmVybGF5IiwiU2lkZUJhciIsImNsb3NlbXlzbGlkZSIsImhhbmRsZVN1Ym1lbnUiLCJoYW5kbGVTdWJUd29NZW51IiwiaGFuZGxlU3ViVGhyZWVNZW51IiwiaGFuZGxlU3ViRm91ck1lbnUiLCJmYXNoaW9uIiwiVG9wQmFyRGFyayIsInRvcENsYXNzIiwiZmlyZWJhc2VMb2dvdXQiLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduT3V0IiwicHVzaCIsIkhlYWRlck9uZSIsImhlYWRlckNsYXNzIiwibm9Ub3BCYXIiLCJkaXJlY3Rpb24iLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2Nyb2xsIiwibnVtYmVyIiwicGFnZVhPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJib2R5Iiwib3Blbm15c2xpZGUiLCJvcGVuU2VhcmNoIiwibG9hZCIsInNldElzTG9hZGluZyIsImZldGNoIiwidGhlbiIsInNlYXJjaCIsInNldHRpbmdzIiwiY2FydCIsIkNvbW1vbkxheW91dCIsImZhdmljb24iLCJyZXF1aXJlIiwiY29uZmlncyIsImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwcyIsImluaXRpYWxpemVBcHAiLCJnb29nbGVQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsImZhY2Vib29rUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlciIsInByb3BzIiwic2VsZWN0ZWRDdXJyIiwiYXBvbGxvQ2xpZW50IiwiUGFnZUNvbXBvbmVudCIsInNzciIsIldpdGhBcG9sbG8iLCJhcG9sbG9TdGF0ZSIsInBhZ2VQcm9wcyIsImNsaWVudCIsImluaXRBcG9sbG9DbGllbnQiLCJkaXNwbGF5TmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiQXBwVHJlZSIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJyZXMiLCJmaW5pc2hlZCIsImdldERhdGFGcm9tVHJlZSIsImVycm9yIiwiSGVhZCIsInJld2luZCIsImNhY2hlIiwiZXh0cmFjdCIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJwcm9jZXNzIiwiY3JlZGVudGlhbHMiLCJJbk1lbW9yeUNhY2hlIiwicmVzdG9yZSIsInByZWZldGNoZWQiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiV2lzaGxpYXQiLCJDYXJ0UGFnZSIsImNhcnRJdGVtcyIsImN1ckNvbnRleHQiLCJxdWFudGl0eSIsInNldFF0eSIsInF1YW50aXR5RXJyb3IiLCJzZXRRdWFudGl0eUVycm9yIiwidXBkYXRlUXR5IiwiaGFuZGxlUXR5VXBkYXRlIiwiY2hhbmdlUXR5Iiwic2V0UXVhbnRpdHkiLCJtaW51c1F0eSIsInNldFN0b2NrIiwicGx1c1F0eSIsInByb2R1Y3QiLCJzdG9jayIsImJvcmRlckNvbG9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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SyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQUpGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQVBGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQVZGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQWJGLENBRkYsRUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFuQkYsRUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUks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Ozs7O0FDQWxDLGdEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL3BhZ2UvYWNjb3VudC9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvcGFnZS9hY2NvdW50L2NhcnRcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcGFnZS9hY2NvdW50L2NhcnQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IEJyZWFkY3J1YnMgPSAoeyB0aXRsZSwgcGFyZW50LCBzdWJUaXRsZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1zZWN0aW9uXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgc209XCI2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc209XCI2XCI+XHJcbiAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIiBjbGFzc05hbWU9XCJ0aGVtZS1icmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57cGFyZW50fTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAge3N1YlRpdGxlID09PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWJUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVicztcclxuIiwiaW1wb3J0IGkxOG5leHQgZnJvbSBcImkxOG5leHRcIjtcclxuaW1wb3J0IExhbmd1YWdlRGV0ZWN0b3IgZnJvbSBcImkxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yXCI7XHJcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5cclxuaTE4bmV4dFxyXG4gICAgLnVzZShMYW5ndWFnZURldGVjdG9yKVxyXG4gICAgLnVzZShpbml0UmVhY3RJMThuZXh0KVxyXG4gICAgLmluaXQoe1xyXG4gICAgICAgIC8vIHdlIGluaXQgd2l0aCByZXNvdXJjZXNcclxuICAgICAgICByZXNvdXJjZXM6IHtcclxuICAgICAgICAgICAgZW46IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICd0b3BiYXJfdGl0bGUnOiAnV2VsY29tZSB0byBPdXIgc3RvcmUgTXVsdGlrYXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2FsbF91cyc6ICdDYWxsIFVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnSG9tZSc6ICdIb21lJyxcclxuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiAnZmVhdHVyZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICduZXcnOiAnbmV3JyxcclxuICAgICAgICAgICAgICAgICAgICBcIkJsb2dzXCI6XCJCbG9nc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdibG9nX2xlZnRfc2lkZWJhcic6ICdsZWZ0IHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdibG9nX3JpZ2h0X3NpZGViYXInOiAncmlnaHQgc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Jsb2dfZGV0YWlsJzogJ2Jsb2cgZGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2F0ZWdvcnlfbGVmdF9zaWRlYmFyJzogJ2xlZnQgc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5X3JpZ2h0X3NpZGViYXInOiAncmlnaHQgc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5X25vX3NpZGViYXInOiAnbm8gc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5X21ldHJvJzogJ21ldHJvJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2F0ZWdvcnlfZnVsbF93aWR0aCc6ICdmdWxsIHdpZHRoJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdHMnOiAnUHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0X3NpZGViYXInOiAnbGVmdCBzaWRlYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAncmlnaHRfc2lkZWJhcic6ICdyaWdodCBzaWRlYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbm9fc2lkZWJhcic6ICdubyBzaWRlYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAndGhyZWVfY29sX3RodW1ibmFpbF9sZWZ0JzogJ1RodW1ibmFpbCBsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAndGhyZWVfY29sX3RodW1ibmFpbF9yaWdodCc6ICdUaHVtYm5haWwgcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aHVtYm5haWxfYmVsb3cnOiAndGh1bWJuYWlsIGJlbG93JyxcclxuICAgICAgICAgICAgICAgICAgICAnYWNjb3JkaWFuX2RldGFpbHMnOiAnYWNjb3JkaWFuIGRldGFpbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aHVtYm5haWxfbGVmdCc6ICdpbWFnZSBsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAndGh1bWJuYWlsX3JpZ2h0JzogJ2ltYWdlIHJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAndmVydGljYWxfdGFiJzogJ3ZlcnRpY2FsIHRhYicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhZ2VzJzogJ1BhZ2VzJyxcclxuICAgICAgICAgICAgICAgICAgICAnYWJvdXRfdXMnOiAnYWJvdXQgdXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsb29rYm9vayc6ICdsb29rYm9vaycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xvZ2luJzogJ2xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAncmVnaXN0ZXInOiAncmVnaXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdsb2dvdXQnOiAnTG9nb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAnc2VhcmNoJzogJ3NlYXJjaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpc2hsaXN0JzogJ3dpc2hsaXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2FydCc6ICdjYXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6ICdjb2xsZWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnZm9yZ2V0X3Bhc3N3b3JkJzogJ2ZvcmdldCBwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRhY3QnOiAnY29udGFjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NoZWNrb3V0JzogJ2NoZWNrb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY29tcGFyZSc6ICdjb21wYXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAnb3JkZXJfc3VjY2Vzcyc6ICdvcmRlcl9zdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZGFzaGJvYXJkJzogJ0Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZBUSc6ICdGQVEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaG9wJzogJ1Nob3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtZW5zX2Zhc2hpb24nOiAnbWVucyBmYXNoaW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAndG9wJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JvdHRvbSc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICdldGhpY193ZWFyJzogJ2V0aGljIHdlYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdzcG9ydHNfd2Vhcic6ICdzcG9ydHMgd2VhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NoaXJ0cyc6ICdzaGlydHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd3b21lbl9mYXNoaW9uJzogJ3dvbWVucyBmYXNoaW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnZHJlc3Nlcyc6ICdkcmVzc2VzJyxcclxuICAgICAgICAgICAgICAgICAgICAnc2tpcnRzJzogJ3NraXJ0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dlc3Rhcm5fd2Vhcic6ICd3ZXN0YXJuIHdlYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdldGhuaWNfd2Vhcic6ICdldGhuaWMgd2VhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nwb3J0X3dlYXInOiAnYXBvcnQgd2VhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JvdHRvbV93ZWFyJzogJ2JvdHRvbSB3ZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAna2lkc19mYXNoaW9uJzogJ2tpZHNzIGZhc2hpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdhY2Nlc3Nvcmllcyc6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zhc2hpb25famV3ZWxsZXJ5JzogJ0Zhc2hpb24gSmV3ZWxsZXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2Fwc19hbmRfaGF0cyc6ICdjYXBzIGFuZCBoYXRzJyxcclxuICAgICAgICAgICAgICAgICAgICAncHJlY2lvdXNfamV3ZWxsZXJ5JzogJ3ByZWNpb3VzIGpld2VsbGVyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25lY2tsYWNlcyc6ICduZWNrbGFjZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdlYXJyaW5ncyc6ICdlYXJyaW5ncycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpbmdzX3dyaXN0X3dlYXInOiAncmluZ3MgJiB3cmlzdCB3ZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWVuX2FjY2Vzc29yaWVzJzogJ21lbnMgYWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aWVzJzogJ3RpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjdWZmbGlua3MnOiAnY3VmZmxpbmtzJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ja2V0c19zcXVhcmVzJzogJ3BvY2tldHMgc3F1YXJlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hlbG1ldHMnOiAnaGVsbWV0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NjYXJ2ZXMnOiAnc2NhcnZlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Bob25lX2Nhc2VzJzogJ3Bob25lIGNhc2VzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbXlfYWNjb3VudCc6ICdNeSBBY2NvdW50JyxcclxuICAgICAgICAgICAgICAgICAgICAnZmFzaGlvbic6ICdGYXNoaW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnYmVhdXR5JzogJ0JlYXV0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VsZWN0cm9uaWMnOiAnRWxlY3Ryb25pYycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Z1cm5pdHVyZSc6ICdGdXJuaXR1cmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdraWRzJzogJ0tpZHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwZXRzJzogJ1BldHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2ZWdldGFibGVzJzogJ1ZlZ2V0YWJsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd3YXRjaCc6ICdXYXRjaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RoZW1lX2VsZW1lbnRzJzogJ3RoZW1lIGVsZW1lbnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudF90aXRsZSc6ICdlbGVtZW50IHRpdGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbl9iYW5uZXInOiAnY29sbGVjdGlvbiBiYW5uZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdob21lX3NsaWRlcic6ICdob21lIHNsaWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5JzogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgICAgICAgICAnc2VydmljZSc6ICdzZXJ2aWNlJyxcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2Vfc2l6ZV9yYXRpbyc6ICdpbWFnZSBzaXplIHJhdGlvJyxcclxuICAgICAgICAgICAgICAgICAgICAncHJvZHVjdF9lbGVtZW50cyc6ICdwcm9kdWN0IGVsZW1lbnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAncHJvZHVjdF9ib3gnOiAncHJvZHVjdCBib3gnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcm9kdWN0X3NsaWRlcic6ICdwcm9kdWN0IHNsaWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25vX3NsaWRlcic6ICdubyBzbGlkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdtdWx0aV9zbGlkZXInOiAnbXVsdGkgc2xpZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAndGFiJzogJ3RhYicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VtYWlsX3RlbXBsYXRlJzogJ2VtYWlsIHRlbXBsYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvJzogJ3BvcnRmb2xpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19ncmlkXzInOiAncG9ydGZvbGlvIGdyaWQgMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19ncmlkXzMnOiAncG9ydGZvbGlvIGdyaWQgMycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19ncmlkXzQnOiAncG9ydGZvbGlvIGdyaWQgNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19tYXNvbmFyeV8yJzogJ21hc29uYXJ5IDInLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fbWFzb25hcnlfMyc6ICdtYXNvbmFyeSAzJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX21hc29uYXJ5XzQnOiAnbWFzb25hcnkgNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19tYXNvbmFyeV9mdWxsJzogJ21hc29uYXJ5IGZ1bGwgd2lkdGgnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmbjoge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcGJhcl90aXRsZSc6ICdCaWVudmVudWUgZGFucyBub3RyZSBtYWdhc2luIHt0aGVtZV9uYW1lfScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhbGxfdXMnOiAnQXBwZWxleiBub3VzJyxcclxuICAgICAgICAgICAgICAgICAgICAnSG9tZSc6ICdtYWlzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6ICdmb25jdGlvbm5hbGl0w6lzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbmV3JzogJ05vdXZlYXUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdibG9nJzogJ2Jsb2d1ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdibG9nX2xlZnRfc2lkZWJhcic6ICdiYXJyZSBsYXTDqXJhbGUgZ2F1Y2hlJyxcclxuICAgICAgICAgICAgICAgICAgICAnYmxvZ19yaWdodF9zaWRlYmFyJzogJ2JhcnJlIGxhdMOpcmFsZSBkcm9pdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdibG9nX2RldGFpbCc6ICdkw6l0YWlsIGR1IGJsb2cnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9sZWZ0X3NpZGViYXInOiAnYmFycmUgbGF0w6lyYWxlIGdhdWNoZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5X3JpZ2h0X3NpZGViYXInOiAnYmFycmUgbGF0w6lyYWxlIGRyb2l0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5X25vX3NpZGViYXInOiAnc2FucyBlbmNhZHLDqScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5X21ldHJvJzogJ23DqXRybycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5X2Z1bGxfd2lkdGgnOiAncGxlaW5lIGxhcmdldXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcm9kdWN0cyc6ICdkZXMgcHJvZHVpdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0X3NpZGViYXInOiAnQmFycmUgbGF0w6lyYWxlIGRlZ2F1Y2hlJyxcclxuICAgICAgICAgICAgICAgICAgICAncmlnaHRfc2lkZWJhcic6ICdCYXJyZSBsYXTDqXJhbGUgZHJvaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnbm9fc2lkZWJhcic6ICdwYXMgZGUgYmFycmUgbGF0w6lyYWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAndGhyZWVfY29sX3RodW1ibmFpbF9sZWZ0JzogJzMgdmlnbmV0dGVzIGdhdWNoZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RocmVlX2NvbF90aHVtYm5haWxfcmlnaHQnOiAnMyB2aWduZXR0ZSBkcm9pdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aHVtYm5haWxfYmVsb3cnOiAndmlnbmV0dGUgY2lfZGVzc291cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FjY29yZGlhbl9kZXRhaWxzJzogJ2TDqXRhaWxzIGFjY29yZMOpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aHVtYm5haWxfbGVmdCc6ICd2aWduZXR0ZSDDoCBnYXVjaGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aHVtYm5haWxfcmlnaHQnOiAndmlnbmV0dGUgZHJvaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAndmVydGljYWxfdGFiJzogJ29uZ2xldCB2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhZ2VzJzogJ2RlcyBwYWdlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Fib3V0X3VzJzogJ8OgIHByb3BvcyBkZSBub3VzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbG9va2Jvb2snOiAnbG9va2Jvb2snLFxyXG4gICAgICAgICAgICAgICAgICAgICdsb2dpbic6ICdzaWRlbnRpZmllcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlZ2lzdGVyJzogJ3JlZ2lzdHJlJyxcclxuICAgICAgICAgICAgICAgICAgICAnbG9nb3V0JzogJ0Nvbm5lY3RleiBfIE91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlYXJjaCc6ICdjaGVyY2hlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpc2hsaXN0JzogJ2xpc3RlIGRlIHNvdWhhaXRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2FydCc6ICdDaGFyaW90JyxcclxuICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6ICdjb2xsZWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnZm9yZ2V0X3Bhc3N3b3JkJzogJ21vdCBkZSBwYXNzZSBvdWJsacOpJyxcclxuICAgICAgICAgICAgICAgICAgICAnY29udGFjdCc6ICdjb250YWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2hlY2tvdXQnOiAnY2hlY2tfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY29tcGFyZSc6ICdjb21wYXJlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ29yZGVyX3N1Y2Nlc3MnOiAnc3VjY8OocyBkZSBsYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rhc2hib2FyZCc6ICdUYWJsZWF1IGRlIGJvcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGQVEnOiAnRkFRJyxcclxuICAgICAgICAgICAgICAgICAgICAnU2hvcCc6ICdCb3V0aXF1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21lbnNfZmFzaGlvbic6ICdsYSBtb2RlIG1hc2N1bGluZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nwb3J0c193ZWFyJzogJ3bDqnRlbWVudHMgZGUgc3BvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiAnSGF1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JvdHRvbSc6ICdiYXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdldGhpY193ZWFyJzogJ3VzdXJlIMOpdGhpcXVlJyxcclxuICAgICAgICAgICAgICAgICAgICAnc2hpcnRzJzogJ2NoZW1pc2VzJyxcclxuICAgICAgICAgICAgICAgICAgICAnd29tZW5fZmFzaGlvbic6ICdsYSBtb2RlIGRlcyBmZW1tZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkcmVzc2VzJzogJ2xlcyByb2JlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NraXJ0cyc6ICdqdXBlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dlc3Rhcm5fd2Vhcic6ICd1c3VyZSBvY2NpZGVudGFsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2V0aG5pY193ZWFyJzogJ3RlbnVlIMOpdGhuaXF1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nwb3J0X3dlYXInOiAndsOqdGVtZW50IGRlIHNwb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICAnYm90dG9tX3dlYXInOiAndXN1cmUgZHUgYmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAna2lkc19mYXNoaW9uJzogJ21vZGUgcG91ciBlbmZhbnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnYWNjZXNzb3JpZXMnOiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmYXNoaW9uX2pld2VsbGVyeSc6ICdiaWpvdXggZmFudGFpc2llJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2Fwc19hbmRfaGF0cyc6ICdjYXNxdWV0dGVzIGV0IGNoYXBlYXV4JyxcclxuICAgICAgICAgICAgICAgICAgICAncHJlY2lvdXNfamV3ZWxsZXJ5JzogJ2Jpam91eCBwcsOpY2lldXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICduZWNrbGFjZXMnOiAnY29sbGllcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdlYXJyaW5ncyc6ICdkZXMgYm91Y2xlcyBkb3JlaWxsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdyaW5nc193cmlzdF93ZWFyJzogJ2JhZ3VlcyBldCB2w6p0ZW1lbnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWVuX2FjY2Vzc29yaWVzJzogJ2FjY2Vzc29pcmVzIHBvdXIgaG9tbWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAndGllcyc6ICdsaWVucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2N1ZmZsaW5rcyc6ICdib3V0b25zIGRlIG1hbmNoZXR0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvY2tldHNfc3F1YXJlcyc6ICdwb2NoZXMgw6AgY2FycmVhdXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWxtZXRzJzogJ2Nhc3F1ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzY2FydmVzJzogJ8OpY2hhcnBlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Bob25lX2Nhc2VzJzogJ0NvcXVlIGRlIHTDqWzDqXBob25lJyxcclxuICAgICAgICAgICAgICAgICAgICAnbXlfYWNjb3VudCc6ICdNb24gY29tcHRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnZmFzaGlvbic6ICdNb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICAnYmVhdXR5JzogJ0JlYXV0w6knLFxyXG4gICAgICAgICAgICAgICAgICAgICdlbGVjdHJvbmljJzogJ8OJbGVjdHJvbmlxdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmdXJuaXR1cmUnOiAnTWV1YmxlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2tpZHMnOiAnZGVzIGdhbWlucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BldHMnOiAnYW5pbWF1eCBkb21lc3RpcXVlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZlZ2V0YWJsZXMnOiAnRGVzIGzDqWd1bWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnd2F0Y2gnOiAnUmVnYXJkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aGVtZV9lbGVtZW50cyc6ICfDqWzDqW1lbnRzIGRlIHRow6htZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnRfdGl0bGUnOiAndGl0cmUgZGUgbFxcJ8OpbMOpbWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbGxlY3Rpb25fYmFubmVyJzogJ2Jhbm5pw6hyZSBkZSBjb2xsZWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnaG9tZV9zbGlkZXInOiAnaG9tZSBjdXJzZXVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2F0ZWdvcnknOiAnQ2F0w6lnb3JpZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlcnZpY2UnOiAndW4gc2VydmljZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlX3NpemVfcmF0aW8nOiAncmFwcG9ydCBkZSB0YWlsbGUgZFxcJ2ltYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAncHJvZHVjdF9lbGVtZW50cyc6ICfDqWzDqW1lbnRzIGRlIHByb2R1aXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcm9kdWN0X2JveCc6ICdib8OudGUgZGUgcHJvZHVpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2R1Y3Rfc2xpZGVyJzogJ2N1cnNldXIgZGUgcHJvZHVpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25vX3NsaWRlcic6ICdwYXMgZGUgY3Vyc2V1cicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ211bHRpX3NsaWRlcic6ICdjdXJzZXVyIG11bHRpcGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAndGFiJzogJ2xhbmd1ZXR0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VtYWlsX3RlbXBsYXRlJzogJ21vZMOobGUgZGUgY291cnJpZXIgw6lsZWN0cm9uaXF1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpbyc6ICdwb3J0ZWZldWlsbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fZ3JpZF8yJzogJ3BvcnRlZmV1aWxsZSBncmlsbGUgMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19ncmlkXzMnOiAncG9ydGVmZXVpbGxlIGdyaWxsZSAzJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX2dyaWRfNCc6ICdwb3J0ZWZldWlsbGUgZ3JpbGxlIDQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fbWFzb25hcnlfMic6ICdtYcOnb25uZXJpZSAyJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX21hc29uYXJ5XzMnOiAnbWHDp29ubmVyaWUgMycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19tYXNvbmFyeV80JzogJ21hw6dvbm5lcmllIDQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fbWFzb25hcnlfZnVsbCc6ICdtYcOnb25uZXJpZSBwbGVpbmUgbGFyZ2V1cicsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhbGxiYWNrTG5nOiBcImVuXCIsXHJcbiAgICAgICAgZGVidWc6IHRydWUsXHJcblxyXG4gICAgICAgIC8vIGhhdmUgYSBjb21tb24gbmFtZXNwYWNlIHVzZWQgYXJvdW5kIHRoZSBmdWxsIGFwcFxyXG4gICAgICAgIG5zOiBbXCJ0cmFuc2xhdGlvbnNcIl0sXHJcbiAgICAgICAgZGVmYXVsdE5TOiBcInRyYW5zbGF0aW9uc1wiLFxyXG5cclxuICAgICAgICBrZXlTZXBhcmF0b3I6IGZhbHNlLCAvLyB3ZSB1c2UgY29udGVudCBhcyBrZXlzXHJcblxyXG4gICAgICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpMThuZXh0O1xyXG4iLCJleHBvcnQgY29uc3QgTUVOVUlURU1TID0gW1xyXG4gICB7XHJcbiAgICAgIHRpdGxlOiAnU2hvcCcsIG1lZ2FNZW51OiB0cnVlLCBtZWdhTWVudVR5cGU6ICdzbWFsbCcsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRElQIFBPV0RFUicsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0RpcCBTdGFydGVyIEtpdHMnLCB0eXBlOiAnbGluaycsIGljb246ICdhbGVydCcgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdEaXAgQ29sb3JzJywgdHlwZTogJ2xpbmsnLCBpY29uOiAnbGF5b3V0LWFjY29yZGlvbi1tZXJnZWQnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnRGlwIEdsb3cnLCB0eXBlOiAnbGluaycsIGljb246ICdsYXllcnMnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnRGlwIEVzc2VudGlhbHMnLCB0eXBlOiAnbGluaycsIGljb246ICd3cml0ZScgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTkFJTCBFTEVDVFJPTklDUycsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0JleW9uZCBQcm8gRHJpbGwnLCB0eXBlOiAnbGluaycsIGljb246ICdhbGVydCcgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdCZXlvbmQgUHJvIExFRCBMYW1wJywgdHlwZTogJ2xpbmsnLCBpY29uOiAnbGF5b3V0LWFjY29yZGlvbi1tZXJnZWQnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnRHJpbGwgQml0cycsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2xheWVycycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdCZXlvbmQgUHJvIEFjY2Vzc29yaWVzJywgdHlwZTogJ2xpbmsnLCBpY29uOiAnd3JpdGUnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnQmV5b25kIEhvbWUgTEVEIExhbXAnLCB0eXBlOiAnbGluaycsIGljb246ICdtYXAtYWx0JyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHRUwgUE9MSVNIJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnR2VsIENvbG9ycycsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2FsZXJ0JyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0FsbC1pbi1vbmUgR2VsIENvbG9ycycsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2xheWVycycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdHZWwgRWZmZWN0cycsIHR5cGU6ICdsaW5rJywgaWNvbjogJ3dyaXRlJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0dlbCBFc3NlbnRpYWwnLCB0eXBlOiAnbGluaycsIGljb246ICdtYXAtYWx0JyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHRUxMWSBUSVBTJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnR2VsbHkgVGlwcyBTdGFydGVyIEtpdCcsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2FsZXJ0JyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0dlbGx5IFRpcCBTaGFwZXMnLCB0eXBlOiAnbGluaycsIGljb246ICdsYXlvdXQtYWNjb3JkaW9uLW1lcmdlZCcgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdHZWxseSBFc3NlbnRpYWxzJywgdHlwZTogJ2xpbmsnLCBpY29uOiAnbGF5ZXJzJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOQUlMIExBQ1FVRVInLCB0eXBlOiAnc3ViJywgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdMYWNxdWVyIENvbG9ycycsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2FsZXJ0JyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0FsbC1pbi1vbmUgTGFjcXVlciBDb2xvcnMnLCB0eXBlOiAnbGluaycsIGljb246ICdsYXlvdXQtYWNjb3JkaW9uLW1lcmdlZCcgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdMYWNxdWVyIEVzc2VudGlhbHMnLCB0eXBlOiAnbGluaycsIGljb246ICdsYXllcnMnIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ05BSUwgQVJUJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnR2VsIEFydCcsIHR5cGU6ICdsaW5rJywgaWNvbjogJ2FsZXJ0JyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1JoaW5lc3RvbmVzIC0gQmxpbmcgSXQgT24nLCB0eXBlOiAnbGluaycsIGljb246ICdsYXlvdXQtYWNjb3JkaW9uLW1lcmdlZCcgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICczRCBHbGl0dGVyIC0gU3ByaW5rbGUgT24nLCB0eXBlOiAnbGluaycsIGljb246ICdsYXllcnMnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnQ2hyb21lIC0gUnViIE9uJywgdHlwZTogJ2xpbmsnLCBpY29uOiAnd3JpdGUnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnSG9sbyAtIFJ1YiBPbicsIHR5cGU6ICdsaW5rJywgaWNvbjogJ21hcC1hbHQnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTWVybWFpZCAtIFJ1YiBPbicsIHR5cGU6ICdsaW5rJywgaWNvbjogJ21hcC1hbHQnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTmFpbCBBcnQgRXNzZW50aWFscycsIHR5cGU6ICdsaW5rJywgaWNvbjogJ21hcC1hbHQnIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgfSxcclxuICAgICAgXVxyXG4gICB9LFxyXG4gICB7IHBhdGg6ICcvJywgdGl0bGU6ICdLSVRTICsgQlVORExFUycsIHR5cGU6ICdsaW5rJywgYXJyb3c6IGZhbHNlIH0sXHJcbiAgIHsgcGF0aDogJy8nLCB0aXRsZTogJ05FVycsIHR5cGU6ICdsaW5rJywgYXJyb3c6IGZhbHNlIH0sXHJcbiAgIHsgcGF0aDogJy8nLCB0aXRsZTogJ0NPTE9SIENIQVJUJywgdHlwZTogJ2xpbmsnLCBhcnJvdzogZmFsc2UgfSxcclxuICAgeyBwYXRoOiAnLycsIHRpdGxlOiAnU0FMRScsIHR5cGU6ICdsaW5rJywgYXJyb3c6IGZhbHNlIH0sXHJcblxyXG5dXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NhcnRcIjtcclxuaW1wb3J0IHsgTWVkaWEgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHRcIjtcclxuXHJcbmNvbnN0IENhcnRDb21wb25lbnQgPSAoeyBpY29uLCBsYXlvdXQgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuICBjb25zdCBjdXJyQ29udGV4dCA9IHVzZUNvbnRleHQoQ3VycmVuY3lDb250ZXh0KTtcclxuICBjb25zdCBzeW1ib2wgPSBjdXJyQ29udGV4dC5zdGF0ZS5zeW1ib2w7XHJcbiAgY29uc3QgY2FydExpc3QgPSBjb250ZXh0LnN0YXRlO1xyXG4gIGNvbnN0IHRvdGFsID0gY29udGV4dC5jYXJ0VG90YWw7XHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSBjb250ZXh0LnJlbW92ZUZyb21DYXJ0O1xyXG4gIGNvbnN0IFtvcGVuU2lkZSwgc2V0T3BlblNpZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICB7XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvbmhvdmVyLWRpdiBtb2JpbGUtY2FydFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU2lkZSh0cnVlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcXR5LWNsc1wiPntjYXJ0TGlzdC5sZW5ndGh9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGhyZWY9e251bGx9PlxyXG4gICAgICAgICAgICA8TWVkaWFcclxuICAgICAgICAgICAgICBhbHQ9XCJjYXJ0XCJcclxuICAgICAgICAgICAgICBzcmM9e2ljb259XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGJsdXItdXAgbGF6eWxvYWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgfVxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGlkPVwiY2FydF9zaWRlXCJcclxuICAgICAgICBjbGFzc05hbWU9e2BhZGRfdG9fY2FydCAke2xheW91dH0gJHtvcGVuU2lkZSA/IFwib3Blbi1zaWRlXCIgOiBcIlwifSBgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGEgaHJlZj17bnVsbH0gY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF90b3BcIj5cclxuICAgICAgICAgICAgPGgzPm15IGNhcnQ8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLWNhcnRcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU2lkZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e251bGx9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0X21lZGlhXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJ0X3Byb2R1Y3RcIj5cclxuICAgICAgICAgICAgICB7Y2FydExpc3QubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgY2FydExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtgY2FydC1wb3B1cC0ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e251bGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7aXRlbS5pbWFnZXNbMF0uc3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucXR5fSB4IHtzeW1ib2x9IHtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21DYXJ0KGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcnRfdG90YWxcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICBzdWJ0b3RhbCA6IDxzcGFuPiR7dG90YWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlL2FjY291bnQvY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc29saWQgYnRuLXhzIHZpZXctY2FydFwiPnZpZXcgY2FydDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BhZ2UvYWNjb3VudC9jaGVja291dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc29saWQgYnRuLXhzIGNoZWNrb3V0XCI+Y2hlY2tvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0Q29tcG9uZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ2FydEhlYWRlciBmcm9tIFwiLi4vaGVhZGVycy9jb21tb24vY2FydC1oZWFkZXJcIjtcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gXCIuLi8uLi9oZWxwZXJzL2NhcnRcIjtcclxuaW1wb3J0IHsgTWVkaWEgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHRcIjtcclxuXHJcbmNvbnN0IENhcnRDb250YWluZXIgPSAoeyBpY29uIH0pID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgY29uc3QgY3VyckNvbnRleHQgPSB1c2VDb250ZXh0KEN1cnJlbmN5Q29udGV4dCk7XHJcbiAgY29uc3Qgc3ltYm9sID0gY3VyckNvbnRleHQuc3RhdGUuc3ltYm9sO1xyXG4gIGNvbnN0IGNhcnRMaXN0ID0gY29udGV4dC5zdGF0ZTtcclxuICBjb25zdCB0b3RhbCA9IGNvbnRleHQuY2FydFRvdGFsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwib25ob3Zlci1kaXYgbW9iaWxlLWNhcnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcXR5LWNsc1wiPntjYXJ0TGlzdC5sZW5ndGh9PC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wYWdlL2FjY291bnQvY2FydGB9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE1lZGlhIHNyYz17aWNvbn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctY2FydFwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2hvdy1kaXYgc2hvcHBpbmctY2FydFwiPlxyXG4gICAgICAgICAge2NhcnRMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPENhcnRIZWFkZXIga2V5PXtpbmRleH0gaXRlbT17aXRlbX0gdG90YWw9e3RvdGFsfSBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAge2NhcnRMaXN0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgc3VidG90YWwgOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMgdmlldy1jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGFnZS9hY2NvdW50L2NhcnRgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT52aWV3IGNhcnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wYWdlL2FjY291bnQvY2hlY2tvdXRgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGVja291dFwiPmNoZWNrb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8aDU+WW91ciBjYXJ0IGlzIGN1cnJlbnRseSBlbXB0eS48L2g1PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIEZvcm0sXHJcbiAgRm9ybUdyb3VwLFxyXG4gIElucHV0LFxyXG4gIEJ1dHRvbixcclxuICBDb2xsYXBzZSxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTG9nb0ltYWdlIGZyb20gXCIuLi8uLi9oZWFkZXJzL2NvbW1vbi9sb2dvXCI7XHJcbmltcG9ydCBDb3B5UmlnaHQgZnJvbSBcIi4vY29weXJpZ2h0XCI7XHJcblxyXG5jb25zdCBNYXN0ZXJGb290ZXIgPSAoe1xyXG4gIGNvbnRhaW5lckZsdWlkLFxyXG4gIGxvZ29OYW1lLFxyXG4gIGxheW91dENsYXNzLFxyXG4gIGZvb3RlckNsYXNzLFxyXG4gIGZvb3RlckxheU91dCxcclxuICBmb290ZXJTZWN0aW9uLFxyXG4gIGJlbG93U2VjdGlvbixcclxuICBiZWxvd0NvbnRhaW5lckZsdWlkLFxyXG4gIGNvcHlSaWdodEZsdWlkLFxyXG4gIG5ld0xhdHRlcixcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb2xsYXBzZSwgc2V0Q29sbGFwc2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc1MDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY2hhbmdlQ29sbGFwc2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc1MCkge1xyXG4gICAgICAgIHNldENvbGxhcHNlKDApO1xyXG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoYW5nZUNvbGxhcHNlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hhbmdlQ29sbGFwc2UpXHJcbiAgICB9XHJcblxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2Zvb3RlckNsYXNzfT5cclxuICAgICAgICB7bmV3TGF0dGVyID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvb3RlckxheU91dH0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ9e2NvbnRhaW5lckZsdWlkID8gY29udGFpbmVyRmx1aWQgOiBcIlwifT5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Zvb3RlclNlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmliZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PktOT1cgSVQgQUxMIEZJUlNUITwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5ldmVyIE1pc3MgQW55dGhpbmcgRnJvbSBNdWx0aWthcnQgQnkgU2lnbmluZyBVcCBUb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE91ciBOZXdzbGV0dGVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgc3Vic2NyaWJlLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibXgtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVGb3JtQ29udHJvbElucHV0MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiXCJcclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2JlbG93U2VjdGlvbn0+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXtiZWxvd0NvbnRhaW5lckZsdWlkID8gYmVsb3dDb250YWluZXJGbHVpZCA6IFwiXCJ9PlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImZvb3Rlci10aGVtZSBwYXJ0aXRpb24tZlwiPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9XCI0XCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvb3Rlci10aXRsZSAke1xyXG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiAmJiBjb2xsYXBzZSA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfSBmb290ZXItbW9iaWxlLXRpdGxlYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29sbGFwc2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIGFib3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWNjb3JkaW5nLW1lbnVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZVxyXG4gICAgICAgICAgICAgICAgICBpc09wZW49e3dpZHRoID8gKGNvbGxhcHNlID09PSAxID8gaXNPcGVuIDogZmFsc2UpIDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMb2dvSW1hZ2UgbG9nbz17bG9nb05hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSxcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9va1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtZ29vZ2xlLXBsdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtaW5zdGFncmFtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcnNzLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcnNzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm9mZnNldC14bC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9vdGVyLXRpdGxlICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gJiYgY29sbGFwc2UgPT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb2xsYXBzZSgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHNldElzT3Blbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgbXkgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWNjb3JkaW5nLW1lbnVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17d2lkdGggPyAoY29sbGFwc2UgPT09IDIgPyBpc09wZW4gOiBmYWxzZSkgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wL2xlZnRfc2lkZWJhcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+d29tZW5zPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc2hvcC9sZWZ0X3NpZGViYXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBjbG90aGluZyA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wL2xlZnRfc2lkZWJhcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+YWNjZXNzb3JpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wL2xlZnRfc2lkZWJhcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IGZlYXR1cmVkIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb290ZXItdGl0bGUgJHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiAmJiBjb2xsYXBzZSA9PSAzID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9IGB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aDRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbGxhcHNlKDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Ugc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aHkgd2UgY2hvb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhY2NvcmRpbmctbWVudVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPENvbGxhcHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt3aWR0aCA/IChjb2xsYXBzZSA9PT0gMyA/IGlzT3BlbiA6IGZhbHNlKSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250YW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNoaXBwaW5nICYgcmV0dXJuPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zZWN1cmUgc2hvcHBpbmc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmdhbGxhcnk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmFmZmlsaWF0ZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmNvbnRhY3RzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9vdGVyLXRpdGxlICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gJiYgY29sbGFwc2UgPT0gNCA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb2xsYXBzZSg0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHNldElzT3Blbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmUgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY29yZGluZy1tZW51XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sbGFwc2VcclxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e3dpZHRoID8gKGNvbGxhcHNlID09PSA0ID8gaXNPcGVuIDogZmFsc2UpIDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250YWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXJcIj48L2k+TXVsdGlrYXJ0IERlbW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yZSwgRGVtbyBzdG9yZSBJbmRpYSAzNDUtNjU5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiPjwvaT5DYWxsIFVzOiAxMjMtNDU2LTc4OThcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlLW9cIj48L2k+RW1haWwgVXM6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U3VwcG9ydEBGaW90LmNvbTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZheFwiPjwvaT5GYXg6IDEyMzQ1NlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPENvcHlSaWdodFxyXG4gICAgICAgICAgbGF5b3V0PXtsYXlvdXRDbGFzc31cclxuICAgICAgICAgIGZsdWlkPXtjb3B5UmlnaHRGbHVpZCA/IGNvcHlSaWdodEZsdWlkIDogXCJcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1hc3RlckZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIgLFJvdyAsQ29sICxNZWRpYX0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB2aXNhIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vdmlzYS5wbmcnO1xyXG5pbXBvcnQgbWFzdGVyY2FyZCBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL21hc3RlcmNhcmQucG5nJztcclxuaW1wb3J0IHBheXBhbCBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3BheXBhbC5wbmcnO1xyXG5pbXBvcnQgYW1lcmljYW5leHByZXNzIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vYW1lcmljYW4tZXhwcmVzcy5wbmcnO1xyXG5pbXBvcnQgZGlzY292ZXIgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9kaXNjb3Zlci5wbmcnO1xyXG5cclxuY29uc3QgQ29weVJpZ2h0ID0gKHtsYXlvdXQsIGZsdWlkfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc3ViLWZvb3RlciAke2xheW91dH1gfT5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ9e2ZsdWlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiNlwiIG1kPVwiNlwiIHNtPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvcHlyaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gMjAyMC0yMSB0aGVtZWZvcmVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG93ZXJlZCBieSBwaXhlbHN0cmFwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiNlwiIG1kPVwiNlwiIHNtPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jYXJkLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48TWVkaWEgc3JjPXt2aXNhfSBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48TWVkaWEgc3JjPXttYXN0ZXJjYXJkfSBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48TWVkaWEgc3JjPXtwYXlwYWx9IGFsdD1cIlwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxNZWRpYSBzcmM9e2FtZXJpY2FuZXhwcmVzc30gYWx0PVwiXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PE1lZGlhIHNyYz17ZGlzY292ZXJ9IGFsdD1cIlwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29weVJpZ2h0OyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9jYXJ0XCI7XHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IENhcnRIZWFkZXIgPSAoeyBpdGVtLCBzeW1ib2wgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2R1Y3QvXCIgKyBpdGVtLmlkfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPE1lZGlhIGFsdD1cIlwiIGNsYXNzTmFtZT1cIm1yLTNcIiBzcmM9e2Ake2l0ZW0uaW1hZ2VzWzBdLnNyY31gfSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvcHJvZHVjdC9cIiArIGl0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGg0PntpdGVtLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnF0eX0geCB7c3ltYm9sfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHsoaXRlbS5wcmljZSAtIChpdGVtLnByaWNlICogaXRlbS5kaXNjb3VudCkgLyAxMDApLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1jaXJjbGVcIj5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCJcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29udGV4dC5yZW1vdmVGcm9tQ2FydChpdGVtKX1cclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0SGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGxhbmd1YWdlIGZyb20gXCIuLi8uLi9jb25zdGFudC9sYW5nQ29uZmlnLmpzb25cIjtcclxuaW1wb3J0IGkxOG5leHQgZnJvbSBcIi4uLy4uL2NvbnN0YW50L2kxOG5cIjtcclxuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0XCI7XHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9hcG9sbG8vYXBvbGxvXCI7XHJcblxyXG5jb25zdCBHRVRfQ1VSUkVOQ1kgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgZ2V0Q3VycmVuY3kge1xyXG4gICAgICBjdXJyZW5jeVxyXG4gICAgICBuYW1lXHJcbiAgICAgIHN5bWJvbFxyXG4gICAgICB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEN1cnJlbmN5ID0gKHsgaWNvbiB9KSA9PiB7XHJcbiAgdmFyIHsgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0NVUlJFTkNZKTtcclxuICBjb25zdCBDb250ZXh0ID0gdXNlQ29udGV4dChDdXJyZW5jeUNvbnRleHQpO1xyXG4gIGNvbnN0IHNlbGVjdGVkQ3VycmVuY3kgPSBDb250ZXh0LmN1cnJlbmN5Q29udGV4dC5zZWxlY3RlZEN1cnJlbmN5O1xyXG5cclxuICBjb25zdCBjaGFuZ2VMYW5ndWFnZSA9IChsbmcpID0+IHtcclxuICAgIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2UobG5nKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm9uaG92ZXItZGl2IG1vYmlsZS1zZXR0aW5nXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE1lZGlhIHNyYz17aWNvbn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctZGl2IHNldHRpbmdcIj5cclxuICAgICAgICA8aDY+bGFuZ3VhZ2U8L2g2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtsYW5ndWFnZS5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e251bGx9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZUxhbmd1YWdlKGl0ZW0udmFsKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubGFuZ31cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxoNj5jdXJyZW5jeTwvaDY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lXCI+XHJcbiAgICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgICBkYXRhLmdldEN1cnJlbmN5Lm1hcCgoY3VyLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNlbGVjdGVkQ3VycmVuY3koY3VyKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjdXIuc3ltYm9sfSB7Y3VyLmN1cnJlbmN5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKEN1cnJlbmN5KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTG9nb0ltYWdlID0gKHsgbG9nbyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSA+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC9hc3NldHMvaW1hZ2VzL2ljb24vJHtsb2dvP2xvZ286J2xvZ28ucG5nJ31gfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb0ltYWdlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTUVOVUlURU1TIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50L21lbnVcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCBbbmF2Q2xvc2UsIHNldE5hdkNsb3NlXSA9IHVzZVN0YXRlKHsgcmlnaHQ6IFwiMHB4XCIgfSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NTApIHtcclxuICAgICAgc2V0TmF2Q2xvc2UoeyByaWdodDogXCItNDEwcHhcIiB9KTtcclxuICAgIH1cclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDExOTkpIHtcclxuICAgICAgc2V0TmF2Q2xvc2UoeyByaWdodDogXCItMzAwcHhcIiB9KTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5OYXYgPSAoKSA9PiB7XHJcbiAgICBzZXROYXZDbG9zZSh7IHJpZ2h0OiBcIjBweFwiIH0pO1xyXG4gICAgaWYgKHJvdXRlci5hc1BhdGggPT0gXCIvbGF5b3V0cy9HeW1cIilcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3BIZWFkZXJcIikuY2xhc3NMaXN0LmFkZChcInppbmRleC1jbGFzc1wiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZU5hdiA9ICgpID0+IHtcclxuICAgIHNldE5hdkNsb3NlKHsgcmlnaHQ6IFwiLTQxMHB4XCIgfSk7XHJcbiAgICBpZiAocm91dGVyLmFzUGF0aCA9PSBcIi9sYXlvdXRzL0d5bVwiKVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcEhlYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiemluZGV4LWNsYXNzXCIpO1xyXG4gIH07XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lZ2FTdWJtZW51ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN1Yi1hcnJvd1wiKSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICBcIm9wZW5zdWJtZWdhbWVudVwiXHJcbiAgICAgIClcclxuICAgIClcclxuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgXCJvcGVuc3VibWVnYW1lbnVcIlxyXG4gICAgICApO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1jb250ZW50XCIpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWJtZWdhbWVudVwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgIFwib3BlbnN1Ym1lZ2FtZW51XCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbbWFpbm1lbnUsIHNldE1haW5NZW51XSA9IHVzZVN0YXRlKE1FTlVJVEVNUyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50VXJsID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBNRU5VSVRFTVMuZmlsdGVyKChpdGVtcykgPT4ge1xyXG4gICAgICBpZiAoaXRlbXMucGF0aCA9PT0gY3VycmVudFVybCkgc2V0TmF2QWN0aXZlKGl0ZW1zKTtcclxuICAgICAgaWYgKCFpdGVtcy5jaGlsZHJlbikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpdGVtcy5jaGlsZHJlbi5maWx0ZXIoKHN1Ykl0ZW1zKSA9PiB7XHJcbiAgICAgICAgaWYgKHN1Ykl0ZW1zLnBhdGggPT09IGN1cnJlbnRVcmwpIHNldE5hdkFjdGl2ZShzdWJJdGVtcyk7XHJcbiAgICAgICAgaWYgKCFzdWJJdGVtcy5jaGlsZHJlbikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHN1Ykl0ZW1zLmNoaWxkcmVuLmZpbHRlcigoc3ViU3ViSXRlbXMpID0+IHtcclxuICAgICAgICAgIGlmIChzdWJTdWJJdGVtcy5wYXRoID09PSBjdXJyZW50VXJsKSBzZXROYXZBY3RpdmUoc3ViU3ViSXRlbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2V0TmF2QWN0aXZlID0gKGl0ZW0pID0+IHtcclxuICAgIE1FTlVJVEVNUy5maWx0ZXIoKG1lbnVJdGVtKSA9PiB7XHJcbiAgICAgIGlmIChtZW51SXRlbSAhPSBpdGVtKSBtZW51SXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgaWYgKG1lbnVJdGVtLmNoaWxkcmVuICYmIG1lbnVJdGVtLmNoaWxkcmVuLmluY2x1ZGVzKGl0ZW0pKVxyXG4gICAgICAgIG1lbnVJdGVtLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIGlmIChtZW51SXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgIG1lbnVJdGVtLmNoaWxkcmVuLmZpbHRlcigoc3VibWVudUl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3VibWVudUl0ZW1zLmNoaWxkcmVuICYmIHN1Ym1lbnVJdGVtcy5jaGlsZHJlbi5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBzdWJtZW51SXRlbXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNldE1haW5NZW51KHsgbWFpbm1lbnU6IE1FTlVJVEVNUyB9KTtcclxuICB9O1xyXG5cclxuICAvLyBDbGljayBUb2dnbGUgbWVudVxyXG4gIGNvbnN0IHRvZ2dsZXROYXZBY3RpdmUgPSAoaXRlbSkgPT4ge1xyXG4gICAgaWYgKCFpdGVtLmFjdGl2ZSkge1xyXG4gICAgICBNRU5VSVRFTVMuZm9yRWFjaCgoYSkgPT4ge1xyXG4gICAgICAgIGlmIChNRU5VSVRFTVMuaW5jbHVkZXMoaXRlbSkpIGEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFhLmNoaWxkcmVuKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgYS5jaGlsZHJlbi5mb3JFYWNoKChiKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYS5jaGlsZHJlbi5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgICAgICBiLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFiLmNoaWxkcmVuKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICBiLmNoaWxkcmVuLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGIuY2hpbGRyZW4uaW5jbHVkZXMoaXRlbSkpIHtcclxuICAgICAgICAgICAgICBjLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpdGVtLmFjdGl2ZSA9ICFpdGVtLmFjdGl2ZTtcclxuICAgIHNldE1haW5NZW51KHsgbWFpbm1lbnU6IE1FTlVJVEVNUyB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTWJsTmF2ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN1Yi1hcnJvd1wiKSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5zdWJtZW51XCIpKVxyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3VibWVudVwiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1zdWJtZW51XCIpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWJtZW51XCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5tZWdhLW1lbnUtY29udGFpbmVyXCIpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3VibWVudVwiKTtcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwib3BlbnN1Ym1lbnVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1uYXZiYXJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibWFpbm5hdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtbmF2XCIgb25DbGljaz17b3Blbk5hdi5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFycyBzaWRlYmFyLWJhclwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1tZW51XCIgc3R5bGU9e25hdkNsb3NlfT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJhY2stYnRuXCIgb25DbGljaz17Y2xvc2VOYXYuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtYmFjayB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5CYWNrIG5hdmJhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0IHBsLTJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIHtNRU5VSVRFTVMubWFwKChtZW51SXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHttZW51SXRlbS5tZWdhTWVudSA/IFwibWVnYS1tZW51XCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17KGUpID0+IG9wZW5NYmxOYXYoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7dChtZW51SXRlbS50aXRsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtLmFycm93ID09IGZhbHNlID8gJycgOiA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIHttZW51SXRlbS5jaGlsZHJlbiAmJiAhbWVudUl0ZW0ubWVnYU1lbnUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1zdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW0uY2hpbGRyZW4ubWFwKChjaGlsZHJlbkl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjaGlsZHJlbkl0ZW0uY2hpbGRyZW4gPyBcInN1Yi1tZW51IFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5JdGVtLnR5cGUgPT09IFwic3ViXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGV0TmF2QWN0aXZlKGNoaWxkcmVuSXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5JdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbkl0ZW0udGFnID09PSBcIm5ld1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXRhZ1wiPm5ldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHQgcGwtMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbkl0ZW0udHlwZSA9PT0gXCJsaW5rXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake2NoaWxkcmVuSXRlbS5wYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuSXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbkl0ZW0udGFnID09PSBcIm5ld1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctdGFnXCI+bmV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5JdGVtLmNoaWxkcmVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtc3ViLWNoaWxkbWVudSAke2NoaWxkcmVuSXRlbS5hY3RpdmUgPyBcIm1lbnUtb3BlbiBcIiA6IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuSXRlbS5jaGlsZHJlbi5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5TdWJJdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5TdWJJdGVtLnR5cGUgPT09IFwibGlua1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Y2hpbGRyZW5TdWJJdGVtLnBhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzdWItbWVudS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblN1Ykl0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuU3ViSXRlbS50YWcgPT09IFwibmV3XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctdGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbS5hcnJvdyA9PSBmYWxzZSA/ICcnIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtZWdhLW1lbnUtY29udGFpbmVyICAke21lbnVJdGVtLm1lZ2FNZW51ID8gXCJcIiA6IFwib3BlbnN1Ym1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW0ubWVnYU1lbnUgPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbS5jaGlsZHJlbi5tYXAoKG1lZ2FNZW51SXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7bWVudUl0ZW0ubWVnYU1lbnVUeXBlID09IFwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjb2wgbWVnYS1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbWVudUl0ZW0ubWVnYU1lbnVUeXBlID09IFwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjb2wtbGctM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1lbnVJdGVtLm1lZ2FNZW51VHlwZSA9PSBcImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVNZWdhU3VibWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZWdhTWVudUl0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbS50aXRsZSA9PT0gXCJFbGVtZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtZWdhTWVudUl0ZW0uY2hpbGRyZW4ubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN1Yk1lZ2FNZW51SXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViTWVnYU1lbnVJdGVtLnBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGljb24tJHtzdWJNZWdhTWVudUl0ZW0uaWNvbn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViTWVnYU1lbnVJdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbWVnYU1lbnVJdGVtLmNoaWxkcmVuLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdWJNZWdhTWVudUl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yk1lZ2FNZW51SXRlbS5wYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yk1lZ2FNZW51SXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb2wsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEZvcm0sXHJcbiAgRm9ybUdyb3VwLFxyXG4gIElucHV0LFxyXG4gIFJvdyxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuY29uc3QgY2xvc2VTZWFyY2ggPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn07XHJcbmNvbnN0IFNlYXJjaE92ZXJsYXkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJzZWFyY2gtb3ZlcmxheVwiIGNsYXNzTmFtZT1cInNlYXJjaC1vdmVybGF5XCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VidG5cIiBvbkNsaWNrPXtjbG9zZVNlYXJjaH0gdGl0bGU9XCJDbG9zZSBPdmVybGF5XCI+XHJcbiAgICAgICAgICDDl1xyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXktY29udGVudFwiPlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIHhsPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaE92ZXJsYXk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgTWVkaWEgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgZmFzaGlvbiBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbWVnYS1tZW51L2Zhc2hpb24uanBnXCI7XHJcblxyXG5jb25zdCBTaWRlQmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsb3NlTmF2ID0gKCkgPT4ge1xyXG4gICAgdmFyIGNsb3NlbXlzbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTaWRlbmF2XCIpO1xyXG4gICAgaWYgKGNsb3NlbXlzbGlkZSkgY2xvc2VteXNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXNpZGVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWVudSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWItYXJyb3dcIikpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5zdWIxXCIpKVxyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3ViMVwiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wZW5zdWIxXCIpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWIxXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwib3BlbnN1YjFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3ViVHdvTWVudSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWItYXJyb3dcIikpIHJldHVybjtcclxuXHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuc3ViMlwiKSlcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbnN1YjJcIik7XHJcbiAgICBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcGVuc3ViMlwiKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3ViMlwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcIm9wZW5zdWIyXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3ViVGhyZWVNZW51ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN1Yi1hcnJvd1wiKSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5zdWIzXCIpKVxyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3ViM1wiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wZW5zdWIzXCIpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWIzXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwib3BlbnN1YjNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3ViRm91ck1lbnUgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ViLWFycm93XCIpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlbnN1YjRcIikpXHJcbiAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWI0XCIpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3BlbnN1YjRcIikuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbnN1YjRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJvcGVuc3ViNFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNZWdhU3VibWVudSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWItYXJyb3dcIikpIHJldHVybjtcclxuXHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuc2lkZXN1Ym1lbnVcIikpXHJcbiAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zaWRlc3VibWVudVwiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJvcGVuc2lkZXN1Ym1lbnVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBpZD1cIm15U2lkZW5hdlwiIGNsYXNzTmFtZT1cInNpZGVuYXZcIj5cclxuICAgICAgICA8YSBocmVmPXtudWxsfSBjbGFzc05hbWU9XCJzaWRlYmFyLW92ZXJsYXlcIiBvbkNsaWNrPXtjbG9zZU5hdn0+PC9hPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8YSBocmVmPXtudWxsfSBvbkNsaWNrPXtjbG9zZU5hdn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1iYWNrIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnQgcHItMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gQmFja1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDx1bCBpZD1cInN1Yi1tZW51XCIgY2xhc3NOYW1lPVwic2lkZWJhci1tZW51XCI+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVNZWdhU3VibWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICBjbG90aGluZ1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYS1tZW51IGNsb3RoaW5nLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPFJvdyBtPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeGw9XCI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+d29tZW4ncyBmYXNoaW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+ZHJlc3NlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+c2tpcnRzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj53ZXN0YXJuIHdlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmV0aGljIHdlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNwb3J0IHdlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pm1lbidzIGZhc2hpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zcG9ydHMgd2VhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+d2VzdGVybiB3ZWFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5ldGhpYyB3ZWFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PmFjY2Vzc29yaWVzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+ZmFzaGlvbiBqZXdlbGxlcnk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmNhcHMgYW5kIGhhdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnByZWNpb3VzIGpld2VsbGVyeTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+bmVja2xhY2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5lYXJyaW5nczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+d3Jpc3Qgd2VhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+dGllczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Y3VmZmxpbmtzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5wb2NrZXRzIHNxdWFyZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeGw9XCI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1lZ2EtbWVudS1iYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIHNyYz17ZmFzaGlvbn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTdWJtZW51KGUpfT5cclxuICAgICAgICAgICAgICAgIGJhZ3NcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1hcnJvd1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNob3BwZXIgYmFnczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+bGFwdG9wIGJhZ3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmNsdXRjaGVzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3ViVHdvTWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgcHVyc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnB1cnNlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+d2FsbGV0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+bGVhdGhlcnM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNhdGNoZWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTdWJtZW51KGUpfT5cclxuICAgICAgICAgICAgICAgIGZvb3R3ZWFyXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zcG9ydCBzaG9lczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Zm9ybWFsIHNob2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5jYXN1YWwgc2hvZXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPndhdGNoZXM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTdWJtZW51KGUpfT5cclxuICAgICAgICAgICAgICAgIEFjY2Vzc29yaWVzXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5mYXNoaW9uIGpld2VsbGVyeTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Y2FwcyBhbmQgaGF0czwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+cHJlY2lvdXMgamV3ZWxsZXJ5PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3ViVHdvTWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9yZS4uXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPm5lY2tsYWNlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+ZWFycmluZ3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPndyaXN0IHdlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTdWJUaHJlZU1lbnUoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3Nvcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnRpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmN1ZmZsaW5rczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+cG9ja2V0cyBzcXVhcmVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5oZWxtZXRzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zY2FydmVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3ViRm91ck1lbnUoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yZS4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+YWNjZXNzb3J5IGdpZnQgc2V0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+dHJhdmVsIGFjY2Vzc29yaWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5waG9uZSBjYXNlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmJlbHRzICYgbW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+d2VhcmFibGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+aG91c2Ugb2YgZGVzaWduPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3VibWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICBiZWF1dHkgJiBwZXJzb25hbCBjYXJlXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5tYWtldXA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNraW5jYXJlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5wcmVtaXVtIGJlYXR5PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3ViVHdvTWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1hcnJvd1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5mcmFncmFuY2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5sdXh1cnkgYmVhdXR5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5oYWlyIGNhcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnRvb2xzICYgYnJ1c2hlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5ob21lICYgZGVjb3I8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmtpdGNoZW48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi8uLi8uLi9jb25maWcvYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFRvcEJhckRhcmsgPSAoeyB0b3BDbGFzcywgZmx1aWQgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGZpcmViYXNlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL3BhZ2UvYWNjb3VudC9sb2dpbi1hdXRoXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXt0b3BDbGFzc30+XHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQ9e2ZsdWlkfT5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBsZz1cIjZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5XZWxjb21lIHRvIE91ciBzdG9yZSBNdWx0aWthcnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5DYWxsIFVzOiAxMjNcclxuICAgICAgICAgICAgICAgICAgLSA0NTYgLSA3ODkwXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGxnPVwiNlwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtb2JpbGUtd2lzaGxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZS9hY2NvdW50L3dpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB3aXNobGlzdFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwib25ob3Zlci1kcm9wZG93biBtb2JpbGUtYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gTXkgQWNjb3VudFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9uaG92ZXItc2hvdy1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGFnZS9hY2NvdW50L2xvZ2luYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BhZ2UvYWNjb3VudC9yZWdpc3RlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gZmlyZWJhc2VMb2dvdXQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TG9nb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJhckRhcms7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vY29tbW9uL25hdmJhclwiO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9jb21tb24vc2lkZWJhclwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29udGFpbmVycy9DYXJ0XCI7XHJcbmltcG9ydCBDYXJ0Q29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL0NhcnRDb250YWluZXJcIjtcclxuaW1wb3J0IFRvcEJhckRhcmsgZnJvbSBcIi4vY29tbW9uL3RvcGJhci1kYXJrXCI7XHJcbmltcG9ydCB7IE1lZGlhLCBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IExvZ29JbWFnZSBmcm9tIFwiLi9jb21tb24vbG9nb1wiO1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3NlYXJjaC5wbmdcIjtcclxuaW1wb3J0IHNldHRpbmdzIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3NldHRpbmcucG5nXCI7XHJcbmltcG9ydCBjYXJ0IGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL2NhcnQucG5nXCI7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwiLi9jb21tb24vY3VycmVuY3lcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTZWFyY2hPdmVybGF5IGZyb20gXCIuL2NvbW1vbi9zZWFyY2gtb3ZlcmxheVwiO1xyXG5cclxuY29uc3QgSGVhZGVyT25lID0gKHtcclxuICBsb2dvTmFtZSxcclxuICBoZWFkZXJDbGFzcyxcclxuICB0b3BDbGFzcyxcclxuICBub1RvcEJhcixcclxuICBkaXJlY3Rpb24sXHJcbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT1cclxuXHRcdCBQcmUgbG9hZGVyXHJcblx0XHQgPT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb2FkZXItd3JhcHBlclwiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XHJcbiAgICB9LCAyMDAwKTtcclxuXHJcbiAgICBpZiAocm91dGVyLmFzUGF0aCAhPT0gXCIvbGF5b3V0cy9DaHJpc3RtYXNcIilcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGxldCBudW1iZXIgPVxyXG4gICAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHxcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fFxyXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fFxyXG4gICAgICAwO1xyXG4gICAgaWYgKG51bWJlciA+PSAzMDApIHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNTc2KVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RpY2t5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZFwiKTtcclxuICAgICAgZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0aWNreVwiKS5jbGFzc0xpc3QuYWRkKFwiZml4ZWRcIik7XHJcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGlja3lcIikuY2xhc3NMaXN0LnJlbW92ZShcImZpeGVkXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5OYXYgPSAoKSA9PiB7XHJcbiAgICB2YXIgb3Blbm15c2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKTtcclxuICAgIGlmIChvcGVubXlzbGlkZSkge1xyXG4gICAgICBvcGVubXlzbGlkZS5jbGFzc0xpc3QuYWRkKFwib3Blbi1zaWRlXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgb3BlblNlYXJjaCA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9O1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgZmV0Y2goKS50aGVuKCgpID0+IHtcclxuICAgICAgLy8gZGVhbCB3aXRoIGRhdGEgZmV0Y2hlZFxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoZWFkZXIgaWQ9XCJzdGlja3lcIiBjbGFzc05hbWU9e2BzdGlja3kgJHtoZWFkZXJDbGFzc31gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1maXgtb3B0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgey8qVG9wIEhlYWRlciBDb21wb25lbnQqL31cclxuICAgICAgICB7bm9Ub3BCYXIgPyBcIlwiIDogPFRvcEJhckRhcmsgdG9wQ2xhc3M9e3RvcENsYXNzfSAvPn1cclxuXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bnVsbH0gb25DbGljaz17b3Blbk5hdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWJhcnMgc2lkZWJhci1iYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qU2lkZUJhciBOYXZpZ2F0aW9uIENvbXBvbmVudCovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nb0ltYWdlIGxvZ289e2xvZ29OYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXJpZ2h0IHB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgey8qVG9wIE5hdmlnYXRpb24gQmFyIENvbXBvbmVudCovfVxyXG4gICAgICAgICAgICAgICAgICA8TmF2QmFyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm9uaG92ZXItZGl2IG1vYmlsZS1zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5IGljb249e3NldHRpbmdzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LypIZWFkZXIgQ2FydCBDb21wb25lbnQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkaXJlY3Rpb24gPT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FydENvbnRhaW5lciBsYXlvdXQ9e2RpcmVjdGlvbn0gaWNvbj17Y2FydH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FydCBsYXlvdXQ9e2RpcmVjdGlvbn0gaWNvbj17Y2FydH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPFNlYXJjaE92ZXJsYXkgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJPbmU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlck9uZSBmcm9tIFwiLi4vaGVhZGVycy9oZWFkZXItb25lXCI7XHJcbmltcG9ydCBCcmVhZGNydWJzIGZyb20gXCIuLi9jb21tb24vd2lkZ2V0cy9icmVhZGNydWJzXCI7XHJcbmltcG9ydCBIZWxtZXQgZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xyXG5pbXBvcnQgZmF2aWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi8xLnBuZ1wiO1xyXG5pbXBvcnQgTWFzdGVyRm9vdGVyIGZyb20gXCIuLi9mb290ZXJzL2NvbW1vbi9NYXN0ZXJGb290ZXJcIjtcclxuXHJcbmNvbnN0IENvbW1vbkxheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgcGFyZW50LCBzdWJUaXRsZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9e2Zhdmljb24gPyBmYXZpY29uIDogXCJcIn0gLz5cclxuICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgIDxIZWFkZXJPbmUgdG9wQ2xhc3M9XCJ0b3AtaGVhZGVyXCIgbG9nb05hbWU9XCJsb2dvLnBuZ1wiIC8+XHJcbiAgICAgIDxCcmVhZGNydWJzIHRpdGxlPXt0aXRsZX0gcGFyZW50PXtwYXJlbnR9IHN1YlRpdGxlPXtzdWJUaXRsZX0gLz5cclxuICAgICAgPD57Y2hpbGRyZW59PC8+XHJcbiAgICAgIDxNYXN0ZXJGb290ZXJcclxuICAgICAgICBmb290ZXJDbGFzcz17YGZvb3Rlci1saWdodCBgfVxyXG4gICAgICAgIGZvb3RlckxheU91dD17XCJsaWdodC1sYXlvdXQgdXBwZXItZm9vdGVyXCJ9XHJcbiAgICAgICAgZm9vdGVyU2VjdGlvbj17XCJzbWFsbC1zZWN0aW9uIGJvcmRlci1zZWN0aW9uIGJvcmRlci10b3AtMFwifVxyXG4gICAgICAgIGJlbG93U2VjdGlvbj17XCJzZWN0aW9uLWItc3BhY2UgbGlnaHQtbGF5b3V0XCJ9XHJcbiAgICAgICAgbmV3TGF0dGVyPXt0cnVlfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1vbkxheW91dDtcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xyXG5yZXF1aXJlKCdmaXJlYmFzZS9hdXRoJyk7XHJcbmNvbnN0IGNvbmZpZ3MgPSByZXF1aXJlKFwiLi9pbmRleC5qc29uXCIpXHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IGNvbmZpZ3MuZmlyZWJhc2UuYXBpS2V5LFxyXG4gICAgYXV0aERvbWFpbjpjb25maWdzLmZpcmViYXNlLmF1dGhEb21haW4sXHJcbiAgICBkYXRhYmFzZVVSTDogY29uZmlncy5maXJlYmFzZS5kYXRhYmFzZVVSTCxcclxuICAgIHByb2plY3RJZDogY29uZmlncy5maXJlYmFzZS5wcm9qZWN0SWQsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBjb25maWdzLmZpcmViYXNlLnN0b3JhZ2VCdWNrZXQsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogY29uZmlncy5maXJlYmFzZS5tZXNzYWdpbmdTZW5kZXJJZCxcclxuICAgIGFwcElkOmNvbmZpZ3MuZmlyZWJhc2UuYXBwSWRcclxuICB9O1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ29vZ2xlUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuZXhwb3J0IGNvbnN0IGZhY2Vib29rUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRDdXJyLCBzZWxlY3RlZEN1cnJlbmN5XSA9IHVzZVN0YXRlKHtcclxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxyXG4gICAgc3ltYm9sOiBcIiRcIixcclxuICAgIHZhbHVlOiAxLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjdXJyZW5jeUNvbnRleHQgPSB7XHJcbiAgICBzZWxlY3RlZEN1cnIsXHJcbiAgICBzZWxlY3RlZEN1cnJlbmN5LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHN0YXRlOiBzZWxlY3RlZEN1cnIsXHJcbiAgICAgICAgY3VycmVuY3lDb250ZXh0OiBjdXJyZW5jeUNvbnRleHQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBDb250ZXh0IGFzIEN1cnJlbmN5Q29udGV4dCxcclxuICBQcm92aWRlciBhcyBDdXJyZW5jeUNvbnRleHRQcm92aWRlcixcclxufSBmcm9tIFwiLi9DdXJyZW5jeUNvbnRleHRcIjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xyXG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmxldCBhcG9sbG9DbGllbnQgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW5kIHByb3ZpZGVzIHRoZSBhcG9sbG9Db250ZXh0XHJcbiAqIHRvIGEgbmV4dC5qcyBQYWdlVHJlZS4gVXNlIGl0IGJ5IHdyYXBwaW5nXHJcbiAqIHlvdXIgUGFnZUNvbXBvbmVudCB2aWEgSE9DIHBhdHRlcm4uXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb258Q2xhc3N9IFBhZ2VDb21wb25lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NvbmZpZy5zc3I9dHJ1ZV1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRoQXBvbGxvKFBhZ2VDb21wb25lbnQsIHsgc3NyID0gdHJ1ZSB9ID0ge30pIHtcclxuICBjb25zdCBXaXRoQXBvbGxvID0gKHsgYXBvbGxvQ2xpZW50LCBhcG9sbG9TdGF0ZSwgLi4ucGFnZVByb3BzIH0pID0+IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGFwb2xsb0NsaWVudCB8fCBpbml0QXBvbGxvQ2xpZW50KGFwb2xsb1N0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgPFBhZ2VDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gU2V0IHRoZSBjb3JyZWN0IGRpc3BsYXlOYW1lIGluIGRldmVsb3BtZW50XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGNvbnN0IGRpc3BsYXlOYW1lID1cclxuICAgICAgUGFnZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBQYWdlQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XHJcblxyXG4gICAgaWYgKGRpc3BsYXlOYW1lID09PSAnQXBwJykge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1RoaXMgd2l0aEFwb2xsbyBIT0Mgb25seSB3b3JrcyB3aXRoIFBhZ2VDb21wb25lbnRzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIFdpdGhBcG9sbG8uZGlzcGxheU5hbWUgPSBgd2l0aEFwb2xsbygke2Rpc3BsYXlOYW1lfSlgO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNzciB8fCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgV2l0aEFwb2xsby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gICAgICBjb25zdCB7IEFwcFRyZWUgfSA9IGN0eDtcclxuXHJcbiAgICAgIC8vIEluaXRpYWxpemUgQXBvbGxvQ2xpZW50LCBhZGQgaXQgdG8gdGhlIGN0eCBvYmplY3Qgc29cclxuICAgICAgLy8gd2UgY2FuIHVzZSBpdCBpbiBgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcGAuXHJcbiAgICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IChjdHguYXBvbGxvQ2xpZW50ID0gaW5pdEFwb2xsb0NsaWVudCh7fSwgY3R4LnJlcSAmJiBjdHgucmVxLmhlYWRlcnMuY29va2llKSlcclxuXHJcbiAgICAgIC8vIFJ1biB3cmFwcGVkIGdldEluaXRpYWxQcm9wcyBtZXRob2RzXHJcbiAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICAgICAgaWYgKFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT25seSBvbiB0aGUgc2VydmVyOlxyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyBXaGVuIHJlZGlyZWN0aW5nLCB0aGUgcmVzcG9uc2UgaXMgZmluaXNoZWQuXHJcbiAgICAgICAgLy8gTm8gcG9pbnQgaW4gY29udGludWluZyB0byByZW5kZXJcclxuICAgICAgICBpZiAoY3R4LnJlcyAmJiBjdHgucmVzLmZpbmlzaGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gcGFnZVByb3BzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT25seSBpZiBzc3IgaXMgZW5hYmxlZFxyXG4gICAgICAgIGlmIChzc3IpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZ2V0RGF0YUZyb21UcmVlIH0gPSBhd2FpdCBpbXBvcnQoJ0BhcG9sbG8vcmVhY3Qtc3NyJyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZShcclxuICAgICAgICAgICAgICA8QXBwVHJlZVxyXG4gICAgICAgICAgICAgICAgcGFnZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhZ2VQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgYXBvbGxvQ2xpZW50LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxyXG4gICAgICAgICAgICAvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1hcG9sbG8uaHRtbCNncmFwaHFsLXF1ZXJ5LWRhdGEtZXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgcnVubmluZyBgZ2V0RGF0YUZyb21UcmVlYCcsIGVycm9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxyXG4gICAgICAgICAgLy8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XHJcbiAgICAgICAgICBIZWFkLnJld2luZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbyBzdG9yZVxyXG4gICAgICBjb25zdCBhcG9sbG9TdGF0ZSA9IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnBhZ2VQcm9wcyxcclxuICAgICAgICBhcG9sbG9TdGF0ZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gV2l0aEFwb2xsbztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFsd2F5cyBjcmVhdGVzIGEgbmV3IGFwb2xsbyBjbGllbnQgb24gdGhlIHNlcnZlclxyXG4gKiBDcmVhdGVzIG9yIHJldXNlcyBhcG9sbG8gY2xpZW50IGluIHRoZSBicm93c2VyLlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IGluaXRpYWxTdGF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdEFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpIHtcclxuICAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgbmV3IGNsaWVudCBmb3IgZXZlcnkgc2VydmVyLXNpZGUgcmVxdWVzdCBzbyB0aGF0IGRhdGFcclxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV1c2UgY2xpZW50IG9uIHRoZSBjbGllbnQtc2lkZVxyXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XHJcbiAgICBhcG9sbG9DbGllbnQgPSBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcG9sbG9DbGllbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuZCBjb25maWd1cmVzIHRoZSBBcG9sbG9DbGllbnRcclxuICogQHBhcmFtICB7T2JqZWN0fSBbaW5pdGlhbFN0YXRlPXt9XVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSA9IHt9KSB7XHJcbiAgLy8gQ2hlY2sgb3V0IGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvcHVsbC80NjExIGlmIHlvdSB3YW50IHRvIHVzZSB0aGUgQVdTQXBwU3luY0NsaWVudFxyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnLCAvLyBEaXNhYmxlcyBmb3JjZUZldGNoIG9uIHRoZSBzZXJ2ZXIgKHNvIHF1ZXJpZXMgYXJlIG9ubHkgcnVuIG9uY2UpXHJcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xyXG4gICAgICB1cmk6IHByb2Nlc3MuZW52LkFQSV9VUkwsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXHJcbiAgICAgIGZldGNoLFxyXG4gICAgfSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSksXHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0Q29udGV4dDsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKVxuICB9XG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCAob3B0aW9ucyBhcyBhbnkpLl9oXG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGxvY2FsZVxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbGwgY29uZmlndXJlZCBsb2NhbGVzXG4gICAqL1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmVkIGRlZmF1bHQgbG9jYWxlXG4gICAqL1xuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogc3RyaW5nW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBhZnRlckludGVyYWN0aXZlPzogc3RyaW5nW107IGJlZm9yZUludGVyYWN0aXZlPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZGlzYWJsZU9wdGltaXplZExvYWRpbmc/OiBib29sZWFuXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IFByZXZpZXdEYXRhXG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbW9uTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvc2hvcC9jb21tb24tbGF5b3V0JztcclxuaW1wb3J0IENhcnRQYWdlIGZyb20gJy4vY29tbW9uL2NhcnQtcGFnZSc7XHJcblxyXG5cclxuY29uc3QgV2lzaGxpYXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21tb25MYXlvdXQgcGFyZW50PVwiaG9tZVwiIHRpdGxlPVwiY2FydFwiPlxyXG4gICAgICAgICAgICA8Q2FydFBhZ2UgLz5cclxuICAgICAgICA8L0NvbW1vbkxheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lzaGxpYXQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gXCIuLi8uLi8uLi8uLi9oZWxwZXJzL2NhcnRcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgTWVkaWEsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0XCI7XHJcbmltcG9ydCBjYXJ0IGZyb20gXCIuLi8uLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uLWVtcHR5LWNhcnQucG5nXCI7XHJcblxyXG5jb25zdCBDYXJ0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgY29uc3QgY2FydEl0ZW1zID0gY29udGV4dC5zdGF0ZTtcclxuICBjb25zdCBjdXJDb250ZXh0ID0gdXNlQ29udGV4dChDdXJyZW5jeUNvbnRleHQpO1xyXG4gIGNvbnN0IHN5bWJvbCA9IGN1ckNvbnRleHQuc3RhdGUuc3ltYm9sO1xyXG4gIGNvbnN0IHRvdGFsID0gY29udGV4dC5jYXJ0VG90YWw7XHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSBjb250ZXh0LnJlbW92ZUZyb21DYXJ0O1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXR5XSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtxdWFudGl0eUVycm9yLCBzZXRRdWFudGl0eUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB1cGRhdGVRdHkgPSBjb250ZXh0LnVwZGF0ZVF0eTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUXR5VXBkYXRlID0gKGl0ZW0sIHF1YW50aXR5KSA9PiB7XHJcbiAgICBpZiAocXVhbnRpdHkgPj0gMSkge1xyXG4gICAgICBzZXRRdWFudGl0eUVycm9yKGZhbHNlKTtcclxuICAgICAgdXBkYXRlUXR5KGl0ZW0sIHF1YW50aXR5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFF1YW50aXR5RXJyb3IodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlUXR5ID0gKGUpID0+IHtcclxuICAgIHNldFF1YW50aXR5KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWludXNRdHkgPSAoKSA9PiB7XHJcbiAgICBpZiAocXVhbnRpdHkgPiAxKSB7XHJcbiAgICAgIHNldFN0b2NrKFwiSW5TdG9ja1wiKTtcclxuICAgICAgc2V0UXR5KHF1YW50aXR5IC0gMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGx1c1F0eSA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdC5zdG9jayA+PSBxdWFudGl0eSkge1xyXG4gICAgICBzZXRRdHkocXVhbnRpdHkgKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN0b2NrKFwiT3V0IG9mIFN0b2NrICFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtjYXJ0SXRlbXMgJiYgY2FydEl0ZW1zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FydC1zZWN0aW9uIHNlY3Rpb24tYi1zcGFjZVwiPlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIHNtPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBjYXJ0LXRhYmxlIHRhYmxlLXJlc3BvbnNpdmUteHNcIj5cclxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5pbWFnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5wcm9kdWN0IG5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+cHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+cXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+YWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPnRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9sZWZ0LXNpZGViYXIvcHJvZHVjdC9gICsgaXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uaW1hZ2VzWzBdLnNyY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5pbWFnZXNbMF0uc3JjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbGVmdC1zaWRlYmFyL3Byb2R1Y3QvYCArIGl0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1jYXJ0LWNvbnRlbnQgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF0eS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1YW50aXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVRdHlVcGRhdGUoaXRlbSwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dC1udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXRlbS5xdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBxdWFudGl0eUVycm9yICYmIFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnF0eSA+PSBpdGVtLnN0b2NrID8gXCJvdXQgb2YgU3RvY2tcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRkLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2UgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5wcmljZSAqIGl0ZW0uZGlzY291bnQpIC8gMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRkLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlRnJvbUNhcnQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2UgLSAoaXRlbS5wcmljZSAqIGl0ZW0uZGlzY291bnQpIC8gMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXR5LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWFudGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVF0eVVwZGF0ZShpdGVtLCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dC1udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLnF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBxdWFudGl0eUVycm9yICYmIFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5xdHkgPj0gaXRlbS5zdG9jayA/IFwib3V0IG9mIFN0b2NrXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVGcm9tQ2FydChpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBjYXJ0LXRhYmxlIHRhYmxlLXJlc3BvbnNpdmUtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD50b3RhbCBwcmljZSA6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzeW1ib2x9IHt0b3RhbH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJjYXJ0LWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICA8Q29sIHhzPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wL2xlZnRfc2lkZWJhcmB9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNvbGlkXCI+Y29udGludWUgc2hvcHBpbmc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCB4cz1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGFnZS9hY2NvdW50L2NoZWNrb3V0YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc29saWRcIj5jaGVjayBvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcnQtc2VjdGlvbiBzZWN0aW9uLWItc3BhY2VcIj5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBlbXB0eS1jYXJ0LWNscyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtjYXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1iLTQgbXgtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Zb3VyIENhcnQgaXMgRW1wdHk8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5FeHBsb3JlIG1vcmUgc2hvcnRsaXN0IHNvbWUgaXRlbXMuPC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlGcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TlMxak1ERTBJRGM1TGpFMU1UUTRNU3dnTWpBeE15OHdNeTh4TXkweE1qb3dPVG94TlNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEb3lNelk1UXpjNFFUa3lOamN4TVVVNFFVUXdRa00wUlRRME4wTkJRemcwTXlJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRveU16WTVRemM0UWpreU5qY3hNVVU0UVVRd1FrTTBSVFEwTjBOQlF6ZzBNeUkrSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pJek5qbEROemc0T1RJMk56RXhSVGhCUkRCQ1F6UkZORFEzUTBGRE9EUXpJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPakl6TmpsRE56ZzVPVEkyTnpFeFJUaEJSREJDUXpSRk5EUTNRMEZET0RReklpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCt4RjFhckFBQUFWWkpSRUZVZU5waS9QLy9QOE5BQXNiL1B0WUQ2Z0FtSU00Y1FQc3pRUTZZRE1UdUEyQTV5TTdKSUFjd0EvRktJTmFsbytXNlVEdVptYUFDL0VDOEVZaEY2V0E1eUk0TlVEc1ptSkFrRklGNE14Q3owOUJ5TnFnZFNzaUpFQm1ZQS9GY1VPNmdSWTRENG5sUU94aHdPUUFFb29HNGxnWU9xSUdhelVESUFTRFFnRTB4QlFCa1ZpT3VjZ0JYY00xQ0R5NHlnVG5VTEVaU0hBQUNYTkFFSTArQjVYSlFNN2p3bFlTRXNzeG1XSlloRVlEMGJDR1V0Wm1JTERTV1FRc3NZZ0ZJN1ZKaUNqY21JZzMwQXVLSkpEaGdBaEI3RTFzWkVRdXlpYXk0UUdweVNLa05TUUdnaXNzTmo3d3JWQTBEclJ3QWl0dFZPT0lXSkxhYXhMUkNzZ05ncVhzOVd1b1doWXFSbkZ1WXlNemZ5dERzeVFiRm02QmlKQU1XUEhKL2dmZ1RIbmsxSU82RnN0V0IrRDBldFh5NG9vYUZRSHdMRXZCQURnT0ZnSWxoZ01Hb0EwWWRNT3FBQVhjQUM0MmE0RU1uQkFBQ0RBQTd5Q2FSc3hyNEp3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFLd0FBQUNzQ0FNQUFBRFI3N2ZxQUFBQU0xQk1WRVVBQUFDOHZjQzh2Y0M4dmNDOHZjQzh2Y0M4dmNDOHZjQzh2Y0M4dmNDOHZjQzh2Y0M4dmNDOHZjQzh2Y0M4dmNDOHZjQnJCSjl4QUFBQUVIUlNUbE1BdjRCQW54RHZZTThnY0k4dzM2OVF2TzNnWUFBQUJqdEpSRUZVZU5yTVd0dVNxeUFRQklhcmd1Yi92L1pVblVyU0pzYmxNb2oyMCs1V0ZwdWhwMmt3b2ljTWtWTWJPQ0lqN2dlYVp1a2ZQK0hsUEpHNENhTFQvcEdGMXk2S2EyR2N0bzlpV08wdVUwV1kvS01hZmdwaU9BeVkxdk1kVzEvU2gxUWtjRHdkUGF6ampFdS82clVvUjJFbkZYSnErVVU2RFpHdlVYYjNZRDFSenRuMGJvSlduVTBYVk5IaG9iQWZuYllNdW15cWFhWktyYzlwRkYxblAydEtiYjM1T1lvVFo0RDhSejg1MDk2Z0h5UEovczVnNW96MU1LeHY3cXdGU2x1cVFiQVJ0blFUblZOV1VPWFRQYVc0Y1ZQV0pYUU1GOHVtdUoweTJZUWhQZGFyZTlOT1BTU0E2ZHRKZE1ka3NXaUdMUUhNWFo0UzdvTEV1akdsUUxhOHJQemlXcGJLSEdaOVltWU9XRDNHZnFaZ0xlSlV3QnFWYUlSK0w4OHFUc2I2bG9KbWNLMFZQcitSTll1ck5HSUFqR1N3MWN4MUdmbEVqZFlhaHJtUnJZS1hESVJyOGdRM2pDdi91Y1RseW1kTHhUWmlyK0lLdGpZV21vam45eGEveTN5WllTNE16K3JvWUV0TjFwYmlJc2p5TkI2eEROY0FNb3paVHlZSS9CcWd3Wk1wMVBjcUxzUmExdUUwMGdqeUphTVNFWGh4TVR5RWtKdVJEZUppQkp0ZFlYcWJ4dVdZc2tMd0w0ZTlBV1NHaTd1TENDQ0V3M3hpN0cxRXNCR0MvZDFqNmlaTzhDVks5VmRocVUvVWswKzB4MHo2bzdRS1lhY0RGUGZXQXZGUEhSYzIzSWRzUUdsL2o2NTduMDlXZnJSVkp4ZFdFQTVUL1V2clhvVzlFMW1oZjN0dGVoYjJYbVNmcFUwL3g5YmlYbVJmcGFYTUg1a3dMN0tpRXZraW12NmJGOGoyMk1hTUFLYkQwQkREdFdUZFBxOTRXTVQrb0NtMW9uQUpXVmlxM3pXZFByeHdBT1Zhc3JiVG5VZjRWZ0VkSmVCNnlnalBuV3hsK2xKQk9vZ1NlMGcxaUN4MkFQL2xCZlBoZGNNZWFoelorZE1QM0xISm12WGdtMDdqeU5LblUrbGNLOFE5NVZBWVJyVmd3Mktnelc4WkJGSmFGcjl3VjhWeDFoRGwvQUMxakZYWDNJRndvR0NTUlY5NGs5OFg0dmFYVUxjRG1sNWtsOXhDaFZjeFVlWlVlVVplTzVFMStZdkF0Skdwcit5RVdQUjVWM2lxV2ZNdG9EZE9pNDZwc2VsVTVqaFV0cDNHZ3V1T2cxSDU0Mk5ZL3N3eEZIZ0RqSlVEb3Z5UDJFTlRXUHU1T25lYnV2L2dkNnQvOTZxc3Y0aFpZRjVjU0F5VmU1NEU3ZnB5T01HSEtRb1E2cjJVRGE5cFEwWm9YZVVQRzN6blE2clBtRFpqQjFyS09mS05CWFpnWGorRWhvd1pTeTVUMk1hRkRaZGVaRnRXYnk2NTVBaGM0NEozRWZSUW56Rjl5WlhueEk4WjZDdlZGT2lYVE5WdzFGUnM0NEpqTlpKMU9VRnFrRzAyTGtBMms0WGtGODVsTW96clRMSllHSnQvQ3l4NXhzVW5DL05hYzEvaTFZWnZYSHl5TVIvd0RaSGhqc0VuQy9OS3B5Y3VQbG5vTGZBVGx4aEExcUdUV1lscllaQmxQb28vM2Y1a3NhdXdiMTdERUxLcXJEMzRMWXJ0TmhOaytJbUpiMXdJTXZtSXlMZDAvc29nejJha3c5d3MrWnBIK01heHB2SDg1R1VqaXQwRXh4cm9vY0c4K0pocVhvYWgwNXAySURaQ2hidzlMam1hOW5ZdVVzMjVSRFpjSHdGaGhBclFpelBxMC82S1NyYmlIelhubHVvd0RBTlJYUG1Cay9UNjduKzEvU21NRFE2aU03UWdmVFhGTktwakswSTY0Ny8yVWJmeWNHcVRldmxBdDlWRG5wTWJ4TjdrOThaU3BpZnNCNGdkeXZST0EwUXZIK2lHQm9qVFd0TExCN3FodGVRMDdmVHlnVzVvMm0zYW9VejU0RUdaZmJSazYrYUtDRjYwblV5anVmR1IxdjRWWTFyNFJkQW1WTVZaQW80QWRrSllWdElZQWpzQjBNTXBVRmxMRndIMEFKVVNFUDNUK25oL0hEZVRVeDkydFNmaUVJZEtBVUtqSWkwMFRua2Zkc2MwcGlEZDR5QTA0SDFza25ITVJkbTZUL1RiZlBkRTRIMGFPQWxIeXJKenR5dWxycytWQnllQnBKTE80dXJXMmJTTzRaRlVmUG5sbVVXbVJzQytPa2JkNXZ5N1ZIL05kdFRXQ0l4YUE5VDc5TmRMM3YrR2JhS0JBcWdEL1NmamJCN1dubkI4KzloT3N3TzM0ZEYvaUNya1ZDYmR4aDlZMWtRVm1GbytTOFRUZHREV1dzaUoxWVZBMmZFVkt4VmpXQ0VRcGxhSXRUaHJ4Si8vMUFXSmxTNWU2L245Qm0vK2NXMnBxZUkxWFJaNG1WbGh4dml5d1BpQ3kxaFMxbGdpNFZEeTYxakM5bEJIQnNRNmpDSFdNUmVoRGhCNVZYZkhOZ0RBSUFERDFIYnAveGZEQnpBaG5FTWNpMmF4MEJ1TEU2S2dKb3ZBc25BeGkyMnpRRHlMR3JRUVI0dkh0T0JSaTNTMXNGeUxJYmFBWjR2T3RsQnlqSHUzSUgxclVZRE5IN0ozbUswR05pekJWakRXWkFmYkYyRmpxR3E1OVhjdHQ3U1pHYmFKMHdaODJ0cXdONDI4ZTZhUmd6dk9BRnlCTXdLMXBkV09BQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCb0FBQUFhQ0FZQUFBQ3BTa3pPQUFBRVhrbEVRVlJJaWEyVnk0OFVWUlNIdjN2clZsVjM5V3NlTUl3T3lEc004Z2dxR0VVTWtyQXdZdUpXRnJqd2tSajhCNHh4NWNhZEMrTWo4UkZqWW1KWVlOeUlvc2I0SHRDSVlVR2l6b0F6WTh0TW5BYzlkSGRWZFZmZGUxMzBOTXkwTUVpWVgxTEp2WFhybk8vbTFNbjVpUzNIeTl4QXU0RkR3RjVnTTlBRENHQVdHQUYrQkU0QXA1ZEtJcFlBSFFCZUFBN2U2Q2J6K2hwNEdmajhXb2Z5T2tHdkFWL2RCQVRnSWVBazhOYi9BVG5BdDhCek53SG8xRE8weXBoWkN2UWQ4T0F0UU5xNmw5YS91eWJvVGVEK1pZQzBkUmZ3Zmlkb0QvRHNNa0xhZW9MNUNpa0FBYThEVkRSb0JBQ3VzQ2doQ0EwSTdLSm9nY0Jpa2ZNbkJwQlliQ3NYQm9FdkxDVUpHdDRBZGloZ214Uml6MHhUc3pNTEdXR3hCaUlFNDZGbWI5RWh0b0J5YURZMVdTV0pyVUZxZ3dHc2xHUWt4S25GV292dkNDNDNOVm82akdtSkw5Z083RmJBNGFtbVlXdmU0Y2hxancxZEhobzRNOVZnVjYvSHVVckNtcHhpK25LRE83b0RKcW9KV1NVbzVYd1NiZmpuVW9Udk9mUVhmWlNFMFZyS29UVUI3d3pYZVdVa1JDbUpJemlzSE1HK21TaGwvNllpNTJQTjBGaE1WMC9BbnpWd0E4R1hGVU0rdG16V2hpUjErR0l5Wkd0ZVVrMDhmcHR0OHVLT2JqNGVubU5xSm1UMXFnTERFeUZsNFZKekZDVWxNSzFxN3hYOXgvNHFEK2Jrd0V2YjgweEhtcm1HNW5KcVdWdnltSXdNaDlZWCtQQ1BPUXBKd3JxK0hNcVY5THFDYzVVRUJUUzBSV0RSMmpKY1RYbnF6aEluTGxRcEZESThmM2FPdkFBbG1GUlkyK1VxeVUrWFVzb05RRWk2cktGZVNmQ040ZVJvbFNoS09GVkp1RWZYNlN0bEdBcFRhQ1QwRjMyR3hxdXM2TXBnSEFjUk52bHN2RTRqMFF4ZnJHR2pKanJqNGlsWkZOcytLdGZycVEwbUdnWmZ0THBtcmduN1Y3azgzQzBabVk0bzVEMzZDajduWnlOVXF1a3YrZml1dzRYcGlJMTlBWTA0d1RFV0ZmaGNuQTFaV2ZTSkd5bURCWWRYTHhvbVF4MnExRkx4SFJHc0M1d3I3VnRQRXc2c3liRXk2K0JhdzhDS0hHT1JZWENnU0hrNllxRG9VdFlPSVRFbTY2T0Y1TzRjVEZrSGFUT3M2ODN5UzduRyt2NDhxMmJyakZiVHFxUTE2anNrc01aQzFFQlppMHhUYkJnakcwMDJGaFdESlpkTnZ1WGc2Z0FSTllocURhU0Z6YTZoUE5mRXhBbTlhTTVYbXR5V2xUU01IWlBBRDUyWVFBbkdxZ2s1VjFJVGl2SEkwRlBLRXNZcDFsTzhYVTdvelNydVdCR3dOdTl5ZTE3eGR5b1lTU1JydTN4aUJDcndtWXdNcDJjU2VqdzVKTFljTCs4RXppNEVPUUtxaVNYak9YUmxIR2FpbE9sSXM2SGtNUnNteEtrbDhDU0p0Z1N1Sk9jNU5MVkZXNHZyQ09wTlEzZkdZYUtlNGhoRDBaUDN0WTN2VjJEWDFjS0J0cUJ0YS9SSUlaQkFhbTFyTFNBMTlzb29XbFIwSWNDQ3hlSUlnU1A0M2NLZ21qOC95b0t4YmdFcFdvQ0ZjaGZzWGRsZUwvN202aXZSem5VVXJrN3ZJZUM5LzBiY3NvN1JjdXBGZnZRa2NHWVpJZWVBeDl1YlRvZDlBUGg1R1NCbjZURFJUbEJNeTRiZnZRWElCN1RjdGJvVXFLMm5nVWVBNzI4Q2NBcDRERGdDSGEzSXZNTmVSNS9PUC91QVIybVZZajFRWW40a0FxTzBHdWtUNEp1bGJ2RXY2b2ZBaHdHSHdDMEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCY0FBQUFYQ0FZQUFBRGdLdFNnQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5RnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREUwSURjNUxqRTFNVFE0TVN3Z01qQXhNeTh3TXk4eE15MHhNam93T1RveE5TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBETnpFME5EZEdNamN5UlRreE1VVTRRalk0TWtFNU4wVTFRa1ZHTnpKRU55SWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEROekUwTkRkR016Y3lSVGt4TVVVNFFqWTRNa0U1TjBVMVFrVkdOekpFTnlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rTTNNVFEwTjBZd056SkZPVEV4UlRoQ05qZ3lRVGszUlRWQ1JVWTNNa1EzSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tNM01UUTBOMFl4TnpKRk9URXhSVGhDTmpneVFUazNSVFZDUlVZM01rUTNJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgraE5TM0lRQUFBZjlKUkVGVWVOcWtsVTFJRlZFVXgrZlpLd2xkbUVHSkh5anZXYnB4VVVpMGFhRW91QXpNUUlVblNwQzZVSGZpVnh1TjJobHVYS2tiTjRyb0pnUkJVdHlFQ0lwWUVjSkRoQllScWFob0lUNm4zNEV6Y0puZTE0d0hmbS9lUGN6ODU5Ny92ZWRNSUJRS1dVa2lHMGFnQWZJZ0FEYjhnZ1VZaUVhalI0a2V6a2dpL0J4T29SMCtRalBVUWlQTVF3c2Noc1BocGtRQ2dRUXpiNFZKR0lQdUpCTjRENzNReVFyRzB4R1hSQlRld0xDVk9ucGdGQ3A0d1pkVXRpekNmcHJDRm9JZnVIeUhwVlNlMzRjeWlGamU0aVhrNDM4b21mZ3orQXRyWHBTWi9ZNXVmblU4ejhXek9palgvRGJjOHFCL0taN3JmN0ZvQmJxQy9IeUNLcGlBT2ZpdDFuZ05PVjEzeEI3b2dNZEJGWjZCVno0RXhaTC9jbmdmNC9KYXhLZjBYUCtCSXNqeUlvNlFPWlQ5MmxPOVdSRnZnMTE0Qit2d3cvSWY5MVI0aEJVTm1VVWtieTFVejMzWndpcmtFSnhJVHlKLzZSekZJbTFLRDZ6clJabnFsS1pxWFBXd1lZemxGR3pDUXlQM21kbEcvSFRGQXFoMHRkOUhrR1BrbmtLeEgvRXpyVHF6VU03aHdzZ2R1TzVKVzl4Uy83eU0weGJQVVN1Y3VBbTNJZFBJNWNMZFJBSkI0MnBySVRraGJhSGZHUCtFUVMwU0ovcGcxVlZFdHFNYk5Qek5kSzFrUzNIaUdONjZ2MFN1OHI5U25UUDNsK2lybnBBWHVrbDJIRi90T0dQbkhta2IwN0xodkxERW5MbkVFMWpXajNITVJ3SGRnRzlRNHlUK0NUQUFwZGw5M205Ym1STUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCb0FBQUFhQ0FZQUFBQ3BTa3pPQUFBRTgwbEVRVlJJaWJXV2Eyd1VWUmlHbjdudHpDNjdMWVVXQkF4cFFVcWtCbStBdHJVUUU0aVFJcGdtaEdBTVlQQ0NhSWlKUHhSSTlJOEdOZEdvb0VBZ0VFQ05vQ2lJWUNJYUxtMHBWTERXQW9WU0NaWGFVaWlrdTF2Mk1yTXpueitXSlZDUW9vSDMzNW1jYzU1NTV6dnp2VWVKUmlMMG9qRkFPVkFDakFENkFRcHdFV2dHOWdNN2dZTTMyMFM1Q2VoeFlERXdzYmMzdWF3OXdGTGdwLzhDV2c2OGZJdUFubG9Odk5BYlNBTjJBMlgvRTVKUkxUQUJTR1FlcUQwbVZONEdDTUE0MHJXN29xdEJLNERpMndESjZFRmdmV2FRK1hSalNkdTlFeG9QVkdZY2ZYcUhJQUNmUWRwUkVYRGtEb0lBeHVyQUxNL3pNRTBmcHVXLzRTd3ZsVUxWZFFDaXRvQlBRWUFzQU5mQmNUME1uM25kdW1RaVRqSnBvNnJxTEIxNHpEUk5ZckVZeTFlc3h2VDdxWGl5bk5hMmR0cmF6eUlpVENncjRhTmxLOGdaa3MvOG1lVW9QNjVFeVIvRjlzNStqQzRzSUNzWVlOdW1iOUYwamNFREI5TGVjUTdYVFRGOTZoUk0wNGViY2t0MDRCN1RzcWcrVU12ZTZvT1VGbzlqOW9zTEdUbGlHRlUxdGN4NWVpWW5tamZTY2JHTDBva2pjVFlzeFBodUk5WklnOTlhUm5GczVqc01EN3FzV3JjQjEzR1lOblVLeDV1YStiMitnVUFnd0l5SzZYUkhvL2txMEJlZ0t4em1zZEppS3FhVlUzWGdJRm1oRU8rLy9SYjFSNDZ5Yk9VYUZyNnlnQ2RLeCtDZU9rVEtCM2FUd3h2UFA4WG1IYnY0WXZNVzNuejlOZkp5Y2hoZldzenhwcFBrOU12aDBYRmpTRGsycUZxV3RualJvaVc2WVJpYXBySDU2eTNVSDIza3BlZm00bmtlMFdnM21xWlJNYTJjVFY5dDRsUm5ONDlNcnNCMzdqQmUwY05ZODliUTNucUcrd3NMS0o4OGlab0QxZVRtRGVEZXdoRU1HWHdYQWI5RmZzRXdVcWJQSVJxSi9CMkpSTVJPSnFTdHRWVWk0YkNJaU5qSnBMUzAvQ1dPNDRpSVNPT3hScW1xM2k4Wm5RMG5wTzFjMTVXeDU3cHlwdVcwTkoxc0ZoRVIxN0dscmIxRG9pSVMvV1ZkaHhLTlJQYUt5SGhWVlFuNC9UaU9nNU5LMFNjWVpPK2VQVFEyTmhLTHg4bnQzNS9zN0N3NkwxemtmRGpHc1B5aDVQVU5VVmxaU1RLWnBMQ3drRGx6NXlLZVJ5SWVSL1daS0laT2N2OW1XUEhNSVJXb1ZoUUZFZUZTTElidE9JZ0lBTHF1RXc2SHVkRFppYzgwS1NxNkQ5ZDE4ZUlSc3Z3K3d1RXdpcXJpZWg2MmJST0x4VWpFNDdpYWdXUG8yTFZiNFlPWmtEdTBSb2xHSXFPQitodjlQNFpoWUZvVzRhNHVITWNoRkFwaFdoWUFGem83aVVhajVCY1U0TGt1aVVTQ1JDeUdsWmVIQjdCckZiSm1QcGgrR0QycEpOUHI2b0FIcm9hSUNKcW1BZUR6K1JBUmJOc200MTdYZFRSTnczRWNWRVVCRkZKK0N3RlkveXJ5L2NlUUZZUUJCVTNrM0QweUF5cW1SMXUvWlhrZUJMUFRTZGJTZ0t4ZEFIOVV3YURCWUpnUXlKNkVidjE4ZGZDdEJaNjlaWUFJV0VId3FlQ2s0SWYza0czdlFyd2JCZzBIOFVEVnZrSFZadUM1MXlYc1llQ2htd09BUHFHMEF3R3FQa2QyZmdnbjZpQzNQd1Q3Z1pNRVZXdEVVVWZodWNEMVVXNEIrMGpuMDdVeS9HQ2xHeXZkRWZoMUM3SnZIUnlwQk11QTNLRnBsMDRTQXRrTkdQNHlvdWZEcU9rNjZ6MjJTNUNPNFRWNDNqeDBIL1M1M05FZER4cXJvWDRuVXJjZFRqV0FxY0hnQWxCVVNEbHBpMmFmTDhrYU9Cczc3dUs1WkVEL2Z0M1N0Q21rN0NXY3JDN2wrQjZrK1FDY3JvUG9wZlJwQ3VXbEhZaWJCbWxHTFlaL0tXWmdLNzRBSkxvaDNBNmEwUXNvRklJLzY1QlBLc3JvUERNVk0xQkNvRzgrdXBHTkNLQkVVTlVXTkwwR3pkeUJadXhHdVZ4RU13akoyRFdnZndDMDlrYzIxTXU2QUFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJvQUFBQWFDQVlBQUFDcFNrek9BQUFGamtsRVFWUklpYVdXYTR5Y1ZSbkhmK2U4Wnk0N2w1MmQ3cVhkV2RwdXR3c0x0cFVWV2l2TFZrcmdrMkR3a2doWTFFQnE4RXJ3Z3dueGcrRkxJd2xSTVVHTnhnWWIrQUphZ2pGeVN5Umx1MjVMaTlTaXRiU3VsTzIyM2U3TTdPemM1NzNNT2NjUHMwTnFzMTF0K0Nmdmh6ZlB5Zk03Ny9PYzgveGZNZjc0ZnY2SHRnSjNBV1BBdGNBcVFBQUZZQnFZQWw0RzNsb3BpVm9oZGp2d0ErRE9LOFE3Z2NHbCtBK0JBOENQZ05lWFd5eXZrT1JwNEkwVklNdHBKL0FhOE92L0IrUUFFOEMzcndKd3ViNU9xNHpSbFVBSGdSMGZBZExXSjJuMTdrTmQycU5mQXJjQUNHc0pWSmh5TEltdndnaHJpWHQxRW00VllReENXRnpDTEpvVXJna2poQ1VwNjNTSkNnNEdnd0Q0QkxBUCtOcWxvRzNBTjRTMVdDbVpTNjhoNmxiWmRPWmRlaXNMQkU2SW1aNjF2RDh3VElmdlVsNk1rSlFlbndvZEp4UEpFVmpGNmVaNjNnMUdpRG91R1NkUDB6b0FYd1YrQXh4c2czN2Urb29RODZsZXhrOU04cVdwRjltWW5TSG11MmdoS2NZN21ScmF5ak5qRDNEbjZwTjhsMzNjR0owRzJRQWtqV2FLUDlkdjVpZmxCNWtPQnRnWU90K0cvUUxZSXNZZjM3OEorQWZBK1ZYOWZPN3dIM2pzcGFjd0trdzIxVXZnT0FnTGNkMGdjcTdFdWMyRDNQcElGaEhQUWJVUDN5cUVnSkJzZ0xOQXFkSFBmZGtuZWMrc1o3MHpoOFlCMkNhQis0VzF6SGV0WnZ0N2gvbitTejlqTWQ3RlRMb2ZYNFd3Q0l3VUxQcHhDcHN5M0RDY3BYUk00Z1ZyY2EzQW1DYmFTbHdkbytFUGt1cVlZMi8zSGhLMlJvVjR1Ly8zUzJDODZUZ29ZZmo4Z2QraDZ5NTUzMkx5T2Z3TEYyZ1dGdkZtNXdpeTUrbGNjeFp6VFpsU3pxZDJmQVlWY1VIRnNPV3oyTnBGY0hONGl5RXk5aVM3NHE4eHAzdmJvREVGRE5laWNkWWVPOFRveUFDSjNUOWxZelNHMVpyNTU1NUZhSUhxWFVQaXh1dm9TRXpqejE5RXl3cHllQnd4OWdDcU1vUCsxeC9CTkVGNzJFZ2F0dXhnL0c5VmZ2WDJMS1pUSWpHREN1anlWWmprQjlQMDNMU09ydTg5aXE1V0tVOU1zbUhQSGlKREcvRE9uRUhYRzhqVUxweTZUNmhXUTIzYmdUbjlDUHJ2enhLKzkxVmsranBzczQ2WlBRQjlHWHJVQzZSa21jQjJFeEdtVXdKQ0drTVFUMktUU1ZqSTQxK1lJNXpwcCtPR0VYUzFTblI0R0JrTlk3d0d4dGNFMlVYeSszNUxhUERqT0RkL0M5RzVIcUpwYk9FVXhGWkQ4UVJ1ZnBvZzNJM0VmbmhoaXpHdkhzdU9idWZmZjMyQjRBdGZKQjlMRWNuMEk1UUNhekdlajY1NnBFWThPZ2E3cUI2ZEllS2N4QlIzZ1hZSkpoNERET2JpMjhpaGUzRDBFVTZWT2lqSVBsYUo4d0FWQlV4M0JGN20zRFZEdkQ2aGVQamdCT1ZZR3V1NVdLMFJDQkFTWThPWVVSK3hxWUhqSlVudmpCSk1Qb0VKSkJnRGdJMm1pUjU1QWhUc04zdEpDTGQ5R0dZVThCZXduMDRYYy96K3JvZllXcHhoN1BRUnBnZUcwSTZEc0JZRWFDMEozcStURE9WSmZOWmdreUU4ZHgwaTJpcU5SUktUSlVqQzB3dmY0V0I5TTllR1pyR3RjWFRJV2JmejNoeUliMFlEajNLc2s2bVI3ZlNWOG15ZS9TZGR0UktScGs5bm8wcGZMVWM1M01tUE4rNG0yTmJOOWFHaktGdEVTUThsSzRTY0FoRGlxY0xEUEZuK01obVZKeVEwTFkva1ViSGtzTWVBVVdVMHVXUTNUY2ZoOWhPVGpKNDVUaytsUU9DRU9Oc3p3T1RIeG5ocjRDYVN4VEozcXplNUxmWU9BMnFCd0RxY0N0YnljdjAycHR3dERLZ3NjZUdpVytad0NyaStEYnFsUGRhbE5mZ3FURDdaRFVEY3E5T1VEclZJakxoWHA3ZTJnR3ZEWEZpNmpIRlpSMXRKMVNSSXlCcXJuY0pTS1VXN1AzY0FiN1NINmlIZ0dlQkJJeVJLTjFsVG5NY0tnUkV0eTByWGlnQTBjVkJDczA1ZHhDTFFWaUlrOURuRnl3RUF6OU55NnY4eXZvZUFkeTVkSmF6Rk1SckhhSmFUd0tLRXhtSForQW5ndnZiTDVRNTdLM0IwMmF4WHArTXNtZWlWUUM0dEc5NzdFU0RQMFhMWHlrcWd0bllEbndFbXJ3SndHTGdIK0Fvc3paMUx0TkovM1N0THp6aHdONjFTYkFCU3RDNUhDZmlBMWtINkUvRG1TcnY0RDE5RFJJUzdhZU5FQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYUNBWUFBQUNwU2t6T0FBQUR3VWxFUVZSSWliV1dXMHdjVlJpQXZ6TjdnVjEydWJWY0NvSldRVFFhTENoZWtLSlcxRWpiYUd4TXhhVFJxRzFNTVRFK0dGTVM2b09KZlc1U3JiSEJTMUlmOE1rMDBpYWF0RFFZS2FLR05kWldpMHFRQ3FVc01MTXN5KzdNN3UvRE9JaHJYRW9MWHpLWm5IUCtPZCtjeTh4L1ZNUXdXSWE3Z0sxQUkxQU5GQUlLbUFhR2dhK0I0OEJBcGs1VUJ0RkRRQWZRc3R5Yi9FMHZjQUQ0WWlXaVEwRDdGUXJTT1FMc1dVN2tBazRCbTY5UzR2QU44QUN3NEZSb2FRRjlxeUFCdUJ0NzdSWlpLam9NM0xjS0VvYzY0R09uNEV4ZEEvWncxNEptb004WjBUdHJKQUY0Rit3UjNTWWlQeXFsQ0FUOWdBdkVZbTR1aG9pZ2xQclhVeUtnRkFSOFhuQnJZQ1daaTVtTDlTSkNNTnNEYmhmeGVCTFRzZ0FhM0VDYnBoUmVqNHVMRTlOYytHT1Nxb3Bpcml0ZGg3T0U1a0lNVDNZV0MvTXhzdjNaQUl4ZW1tRWtIS1dxT0VoWllRQTBCU2pNQlpQTDBRVGpzMUh5UFZDWUYwUXAxZVlHbW5KeWZGd0s2N1RzLzRBTlFSL2hXSUxPblZzb0xzakZvOEVkRzBzNSs4c29tNnJLbVp5YTRkekZhVjd2L1owY0pjekVMZDVzdVpXU1BEK1dhZEZjVTBGNzl5QkdORWJYVS9XSUNKcW1HdDFBRlpxYndRdGpESTlQMGJuemFkcmZPMFpvWkp5Sm9XRzZUMzNQcTA4MmNYNXNpbWNmcnFmcldCOGwxMWVpVzE1ZTIzd2pMMzgyUkdoY1ovSzNNQi8xRDNOZ1d5MS82dk04WHJPQjh0SWk1aUlSVWltNVFSUElCd2lOVE9DeVVuelNHK0tOSGMyc0Qvb3A4SG54ZXoza1pIbXBMaXZrbVk0amJLb3NvcldwanRHSmFZNE9qYkh2d1JvS2ZGNENMbzNLd2h4T0RrOEM4RWhWRVdBNlM1dnJkcnMwQmREMTVTQk50VGZSODladXUyVkhCeVVCSDNoY3ZQaG9BNGRQbkNFeEVhWnoxMk5zN3c1eFQyVUJQWHUyQUVLdzQxTktmRjVLOHYwa1JURGlGblhsK1VoOFVZUmJSR1pqODFIL3dkM2JxUzViajFnbXBwWGsrUDduT1Q4MlNYVkZNZXZ5QWh6NnZKKzJGMXJKQ3VUeHlwM2wzRndVQkROQkltbHg0cmxHemwyT2NFdFJrQ3kzaTNneWhWSXduMGc2bmdpR2JweldaMmZGSmluNjdLd1l1aTVMK2ZhblgyVnI1L3N5T1JVV001RVFFVk1rR1Y4U2E0cEl5cjZuN0haZDE4VXdESW5ZMTRDS0dNYmJ3TDcvKzlwRUJJQmdiaTVZQ1l4b0RFMUwvMFV1eTBFVk1ZeGFJSlFwU2ltRnBoVEpWR3FsQW9kN05lQUhZQ2hUbEloY2krUm5ZTUNaZzcxWDI4c1ZzQmYrU1JQOXdJZHJJT2tHVHNKL00reDNRUDBxU2M0Q3R6dUY5TzF6UHpDNENwSVFhVWswWGJTQW5ZYTdya0Z5RkR1N1JqS0pIRjRDV29HdlZpQTRBendCN0FJa3ZUSFR1YzZoQ2RpR1BSVWJnVHpzQTZRT2pHQnZwQjdnZEtaTy9nSlg0cVRHK2dYZk1RQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCY0FBQUFYQ0FZQUFBRGdLdFNnQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5RnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREUwSURjNUxqRTFNVFE0TVN3Z01qQXhNeTh3TXk4eE15MHhNam93T1RveE5TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBEUWpZeU4wTTROVGN5UlRreE1VVTRRamMxTWtNMlFVVTJPRFExT1VRMU5pSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcERRall5TjBNNE5qY3lSVGt4TVVVNFFqYzFNa00yUVVVMk9EUTFPVVExTmlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rTkNOakkzUXpnek56SkZPVEV4UlRoQ056VXlRelpCUlRZNE5EVTVSRFUySWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tOQ05qSTNRemcwTnpKRk9URXhSVGhDTnpVeVF6WkJSVFk0TkRVNVJEVTJJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrV1liNnVBQUFBYk5KUkVGVWVOcXNsVTBvUkZFVXgrK2JwdFNReGJDd2ZsTytraUpGV0VncEZoWlRJaHZGa2xKS3N2T2RCVklpSzhaS0ZJa0ZVWnFWc0xDeUlVM1dGa2hHTk9YamYrby85UnJ2em52elprNzl1bmRtN3Z6T2ZhZDd6ek5NMDFRMmtRKzZRRHVvQUFhNEEyZGdEN3dsRjhaaU1hVUx3MFkrRHVaVHZ2dGxnbVJNZ1VrbnVTL2w4em5GRDZBWEZGTXE2NEo4bWxzd0FTNkJYNlVKcXp3S1d2bkhVckFEbmkyL3Y0SjlVQTNHUUFNVE9NcGxjUXNmZDFvNXh3SVlCWFdoVUdndVhjM3pNSDZCUjJDcXpFSktWQVVLVWZ0M3U1MzNjRDZpTW85aGpuMjZzb1E1UC9FZ2ozSU02K1J5am45QVFubUxPQ2pYeVEyVmZSZzYrVDFIdjBkeEFSMjI4a1BPMnp5SW16a2U2T1RibkM5N2tLOXczTkxKUDlrbnluaVozTVlncUFFemRtYzh0WEZkZ1hyZXZDVUg4UkJZQlM4UUY3bnBMVTNnR2l5Q0c5REoxcHVNQU9nQUZ4VExib080L210dTVOOXNSck9nRmh6eERNY3ArZ0RIb0pHZHN3U3NTM21RWU5OdFA1ZVFSKzNtVGlzdEw0dFRzQXVlTEd0RjNBOGlLTkdBRzducmtKY0ZkLzR2Z1M4SHQxTlJHSkVFMWhMbFJHNlRZRU5sY2VXMUNTQ1dxWXlCbk1vdENlVGtKZjRFR0FBNmtYTXJHQjBjcGdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJrQUFBQVpDQVlBQUFERTZZVmpBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlGcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TlMxak1ERTBJRGM1TGpFMU1UUTRNU3dnTWpBeE15OHdNeTh4TXkweE1qb3dPVG94TlNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcERNRU5FT1RjMVFqY3lSVGt4TVVVNFFqY3dSVGhFUWtNNE5VVkJOemhGTlNJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwRE1FTkVPVGMxUXpjeVJUa3hNVVU0UWpjd1JUaEVRa000TlVWQk56aEZOU0krSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tNd1EwUTVOelU1TnpKRk9URXhSVGhDTnpCRk9FUkNRemcxUlVFM09FVTFJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa013UTBRNU56VkJOekpGT1RFeFJUaENOekJGT0VSQ1F6ZzFSVUUzT0VVMUlpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCs3Vk5CT2dBQUF2NUpSRUZVZU5xY2xudUlURkVjeCsrc0thekhHdkVIb3N3czFyL0llb1VpclJMTDBQNkJUWXZVc25sTm0xZEdTMGhFaTFXS1NTdVB2SXRsWW1WSjJyVHlqNVUwWXJETGVtMmJSeEhyODZ2ZjZIVGRlL2R5NnRQcC91NDU1M3ZPK1QzdURZVERZY3RINnd1WG9BKzBRd0RhWUZZcWxYcmQwZVFzeTErYkQ0TmdFa3pXdmhjczhUUFpTV1FDUElMTmhrMTIzZ2pOQm8vaFYyWkFKQktKUVNOTTYwaWtBTzdBTlZnUDFXcC9weWN4MjBCb1ZZRkRkRHZnTWlSNW51c21NaDJ1d2tKWUMrS3NtWEFMOXNJSm04aHhxR0RCV3ZwRmtJZC95dWxud3hsVHlCU3BnZDA2MmRJckNjRXp0VmZZUk1TMkJkSXlEb0dVR09rdTBxMFRvVDkzYlVTWExMSmFUZzh0UGdQQzByVXR3emM5Nko1RGduY3hzUVdOOStMb2Z2QUVjdUdEOVk4TmdlNDYvMFpHd01ueFMvWDRDWWMxUnNNNXVBa1hZS0xEbUNyNGhrQ1JhWlNUZEZWbmQ5RkVDK3NpWml1RFNqZ0o0dWloVUFjYk5Lb3k3U0ZFT1ZHWmh2MTNPQ1UrcVZleE5oMlloSjNHeEhGd1Y1T3d6ckNQZ3ZzUzl1dzhhVnpaS3JwQzNYQTN1UzBSYWRVb2FuZTVhcm1lSmxqZ2NqMGpFY24zOEZOYWZQSVdlbnY0TXdkdXU3eVRrM1gyRU1pbWU1K2xSYzhya3I3QUdKZDNZK0dIUjNoL2xWc1NYN3lFZTVrU29VbTUzeGdiMXlzN0NBMkdQUTlXU2lXMjdWNGlkSTQrU3M1ODdoUUtoVTdya1pzMGZDV0xmNnF6TFUwczJhMk1Hd0NEb1JpT1NXU3gyeXBEb05Rb1FXa3RxckdBdy9la1FRdGlnYzArQmRaQVQ5a2RISUFyWnNZaklpRStBdHN3ZTU2WVRYWXhIR1k0WEhHdDR0V1d3MVBFamlDMDJDbmpwYlF2VTVGbTZ6OGFDMy9VK2ZNUTJ1WWtzaDMyd1F2YlhMR1Z1cXhid21LVk5xRVc5ZXRHSjVHb25xWlFueVZCMzBDK1Z1aHltOEFLMkNQSmlOQW42SzkrbWFyMllpZVI4M0pNclZ0eGphcDZ6UVdwcUNVMkVmbStiMlhuNHlVQTVCQUliS0svTG1PeFY3dFY0YlA2aFpTQ2VkaklnUnpOSjdPOWdteTlJaWs1dS9RTEdlVTU0UlZkbG43ZmMyMjJvRmJla1BGTE5BUWVHTDZJNnczODFZSStBMGZpdjBnelB5TWlKZU9vbjhtL0JSZ0F1UXJtR1ZsemdZTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCb0FBQUFhQ0FZQUFBQ3BTa3pPQUFBR0FrbEVRVlJJaWEyVmUyeFhaeG5IUCs5N3p1L1MrNDNTMGdKdGFaRkxwY1dOdG5SMFk1QWlNRmdjaTA1WndoWUo3ZytuMFdRbXJpYUtVd09MbCttMlJJMXpLbTVSbkhPYmxtRkhXQys2bFc1Z1pCUWNRc2NvRzkya2xQWjNQNWZmT1k5Ly9Qb3JZTnlVWmQva0pPZDk4MzJmejNtZTh6eDUxWkxXQndFUUVaUlM1T2VIQ0FZME9lRUFocUd4blhTTFkzdWJiQ2U5eW5HOWhuVGFMeFVSZ2tGenNpQS9OREt2cW1odzBjTHk1OWZkWFA5S1dWa3VGeTRrS0NvTXM2QzJCTk0wOER3ZkFQV2ZvSUtDTURraGc3UW5uWW1FM1pWTXBkZW1QUjhGR0liR01CUUE2YlJQeW5LeHJEUm1RTk84ZE03QWxzMUxkNjFmKzVFRFNrRnhVWWhnTURBRE1zcXJPOGxLYTAwb1pKSkt1VCtlaWxpUDJFNjZ6akEwcHFreERJM1c2Z3F2SWhRMHljOExFUXdZdkg1NnZQYUZ2dFBiSmk0bHE5ZXRhZWllVlY2Q2E5dkl0UDl5Um9DaFZRRG9kMTN2QnEwVlNsME8vTCtrdGNLeTByeHhab0sxcSt0ZjNmL1U5dFdoY05pS1JpSm9yZEZab3dKOFgxN3lQUDhHdzlEWEJDRnpsbERJWU9tU0NucjdSbHEzYk5zekNCNzUrYm40dnFBSzVuYWhsRUxCWXdJN3JpbjZmNUZTb0pSaWF2UnQ3dHkrNXRkUFBMYnRidGV4VUorNisxZUk3N2VsZlJtNnRoemVENlpJV1M0VGx4TDg5S0hiYmxxK2JQNWZsWWdEeUdGOFdmRWhjVExTR3R0eWljWHQ0K0dRdVV6WlZxSlJ3WEdsTkJJTXovakVUb0g0Qk1ONTJSMUFJWjZOMGdwVWNNYnJXRW0wVnBqQm5JelRzM0hkTklaaDRMZ2VudWUzbUk3amJVVWJrSTRpcno5TGdYTUNLbGFTTEZ0UGJwNXdvUGNFRXhOSm1ob3JHUmg4azYyM04xRlNXc1NlM3d4eCtNZ296YzNWYkx2ak9vTEJBUHYrL0JyUm1NMG5ibG1DWVJvNGxwdjlscTNFb3RIK1dDd3VzWGhVa3VkZmxZR3ZkMGo4QVVSa1ZNWVRJaGozeXVlKytGdjV5YzhIQk82UjRlT2pjcytYOWtybG9wM1N2T3I3c21iem95SWlNbnppbk1BT3dieFhqZzJQaW9oSUxCck5Qb2MwMElCNDRFTk9WUXM5YzUvbXRqM053Q202RDd3Tm5zMERYWjJjZld1S2xyV0xTU1J0ZnZad0R5dWFxem42MG4zMGRuOEJnTzk4cjVmaW1nckthMHM1Y3ZSOHBvUXlVOTFhRFJSbnBnakFaM3VuNHVERlczbjZTWnMvN08zaHBrM0xtVE5uRmkvMG5xYThMSSsybG9YczNIVUgrNTRicHFuMVFkNTlkNUx4OFV2ODd0bGo5UDFwQjUyckd6alFkeHJJdFBxMENrMHVVM0FkaTRZRnBXeFl2NEFkTzQ5aXg2YzQrRnhtdEU2ZUdxZnQrcmtBZkxOckk1KzVmUmxMRm4rRHJtL3RwNzIxQmlJcEhuL2lNRU5IM3FKMlhqSGdFZzZiV0ZZNjA0VEFWQlprV1I1Z2NtTmJGWkV6ZzlUVnptSlYreUlHaDA1aC9lc3NLMWZNNTl2ZjdhRmp3eVBzL3RFQXhUWFZoRUlCdm54L055czdGeEdKZTVTVjVORFhjNUpqdytjeEF6blowREVUR0FHcXNxazZqc09XelkxTWp0M0Z4bHViOEgwUHc5QjhwZXZUckx1NWdVT0h6ekh3OGhtaU1adDllKzlpVm1rdXl2TzUvNzQxMU5SVU1EWjJrZDBQOVlGU09NNU0xNDJxV0RTNkMraks3dmkrVDJGUkxoQUFJQnFKVUpBZlJoa2hmTTlDRzZFcnF3MjQwOTQwOFdpUy9NSWNJRURhVFpGTU9taXRBUjVXc1Vpa0NUUDhHb0VneUJYbkZlKzVWanJ6UHROVjcrVlZnQS80M2tvVmk4Y2dPZjUzNVh2TEpWZ0k0dkdoU0Nud1hFRCtpUkZlcktLZW9OOGNhRGU3Tnd4S3ptd0k1RjQxQUI4WTRudGdUeUx6T2p1bHFPRkZVNlZTK1BXckQva0w3L3lsSHZ6Rlo2V3k0T295ZkJCcEF6VTVoY3l1ZTBxSzZsL0VUYUJpa1NrSTV5T0dRZUQzNi82bVJnNWVKN1BuVDhPdWxaaHBFaFU5aDEvWjhnOXY5UThhbGNvRk40NktSYVBnKzBoaEVUaE9PUERNK3Irb2tmNFdLU3NITSsvLy8yZEtnK2RBNGgzSXJUem0zZkpNaDEvYkhsT1dEeXA3bFd1TmlrWWhFTFRTbit4cjlkbysvN2lLamFPbXpvTHZUcmZaKzJRaEhpVEdJSFVCcWR2MHBILzlWeitHRVl3cEczQVQ0R1F6eWg3d1BRZ1hJQ0dOUHJsdm96NzZ3NitwZDE3dVVJNk5CQU1RS2dGaitzN3liWEJpcUhRU01mT1Ewc1pYWk82YTNWVGQrRWNpYnlERkM1SGFqV0RITXRHdkFpSGcyWUFnZWVWZ3hURkc5M2VvOC8yYm1UelpyaEpqZGJqeElrQVJ5STFJdU93c2hmVkRVcnIwZVNuOWFMOVNRT29pSk1hUWlsYWs1dU16b0g4RGFXdTgraWExM05BQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0ErUTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0JrWldaaGRXeDBJSEYxWVd4cGRIa0svOXNBUXdBSUJnWUhCZ1VJQndjSENRa0lDZ3dVRFF3TEN3d1pFaE1QRkIwYUh4NGRHaHdjSUNRdUp5QWlMQ01jSENnM0tTd3dNVFEwTkI4bk9UMDRNand1TXpReS85c0FRd0VKQ1FrTUN3d1lEUTBZTWlFY0lUSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5LzhBQUVRZ0I4Z0VzQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEE5Z29vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9wa3MwVnZFMHMwaVJ4b01zN3NBQVBjbXNBZVBmQ1J1QkFQRWVtRnljZjhmSzdmKytzNC9XZ0RvcUthanBKR3NrYks2TUFWWlRrRUh1RFZMVk5jMHJSSWxsMVRVYld6UnZ1bWVVSnUrZ1BYOEtBTDlGWitsYTdwT3VSdkpwZW8ydDRxWTMrUktHSzU2WkE2ZmpXZ1NBQ1NjQVVBRkZZRGVOL0NxM2YyVStJZE1FMmR1MzdTdU0rbWM0elcrQ0NBUWNnMEFGRkZGQUJSUlJRQVVVVXlhYUszaGttbWtTT0tOUzd1N0FLcWdaSkpQUUNnQjlGUjI5eERkMjBWeGJ5cExCS29lT1JHREt5bmtFRWRSVmZVdFcwN1I3Y1Q2bGZXMXBFVGdQUEtFQlBvTTlhQUxsRlpXbGVKdEQxeVJvOUwxYXp1NUZHNWtpbEJZRDF4MXhXclFBVVZ6OXg0NThLMnR5YmVieERwcXlnNEsvYUZPRDdrSEFyYnQ3bUM4dDB1TGFhT2VGeGxKSW5ES3c5aU9EUUJMUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFGVFVOTXNkVmhqaDFDMWl1WW81QktzY3E3bDNEb1NPaDY5NmU5bFp0YUcyZTJnTnRqQmlhTWJNZlRwVml1SzFMNGRMcUNZYnhKcmo0T2ZLdXJnVHdON1BHUmhoN1VBUCtIbmxSYVhxNjJqbit4NDlUbUdua241QkNBdWRoL3VCOStQeHFMd0pZdzZ6YXllTDlRaFNiVU5Ua2Q0V2tYY2JlM0RFUnhwbm9NRGNjZFMzTlhORDFLNHZ0TTFqUTdxM2doMUhTZ2JhUmJWZHNUcTBlNk5rWCtFRlNQbDV3UlV2dzdkSlBoNW9MSjBGbWkvaUJnL3FEUUJROGUyS2FaWWp4ZHA4U3g2bnBicks3b01HNGgzQVNSdWU0Mmtubm9RTVlwL2pHUTZ6cU9nK0dvNVNMVFZYZWE4YU5zRjdlSlF4VEk1QWNzb3o2WnEvNCtkSS9oL3I3UDBOakt2NGxTQitwRlpLeHRiK1B2Q29uR0diUnA0Z1QvZlh5aWYwb0E2d2FScHE2ZC9aNjZmYWl5MjdQczRpWFpqMDI0eFhOK0R0K2thMXJuaGJleld0ZzBWeFk3emtyQktDZGc5bFpXQTlpSzdHdVNzdjNueFgxZGsrN0ZwTnNrbis4WkpDUDBvQTYyczdUTmRzTld1TDIydFpXKzBXVXhodUlaRktPaDdIQjUya2NnOUNLMGE0N3h6WlFXRnQvd0FKVGEzc2VuYXRZcGhKbkJLWEs1LzFFaWpsZ3g2WTVCNUZBSFI2dnE5bG9lbVRhaHFFd2l0NGh5ZXBZOWxBN2s5QUt0d3lpZUNPWlZkUklvWUxJcFZoa1p3UWVRZmF1QzhLU254bHJFdXM2NFBLdk5ObDh1RFJuQkgyRnNjU09DQnVkaHlHeGdEcHowOUFvQUs0UHhXOG5pdDlSMGEzZGwwblRZbWsxR1pHL3dCZEtGM0xBQ093NFovd0hyV3g0czE2VFRvcmZUTlBsaVRWdFFKamdhVmdGZ1VmZW1iUFpSMEhjNEZNV0hSOUU4RzNPbTJkNUF5cGF5WlpwZ1hsY3FTenNjOHN4eVQ5YUFMSGdiL2tRZkQvQVAyRDRQOEEwQVZrK0U3U0RYZFUxYnhKcUVRbnVSZlRXbG9KUUdGdkRFMjBCQi9DU1FTVDcxZjhCM2RzL2dqUUlVdUltbEdud2dvSEJZWVFaNHFqRW1wZUR0WTFFdzZaYzZsb21vWERYYS9Zd0dtdHBuKytwUWtia0pHNEVkQ1R4UUJkOGJhSEJmYUhkYWpBaXc2dFlSTmMyZDRndzZPZ3lCbnVweGdnNUdEV1g0cTFXWFYvaGRhNm5HWkliYThXMWx2VEMyR2pnZGxNdUQxNEJJUHRtbDhSYTFxZXVlSGRSdGJEU2I3VHJWcmFUN1ZmNmhHSWhIRnRPNEltZHhZakl5UUFNNXoybzA3VXBOQytHM2hxMGp0RnU3Kyt0b0xXM3RuT0VaMmp5ZDV3Y0txaGlmcGp2UUIxMm4yT25XdW5SVytuMjl0SFpiQjVhUXFOaFhzUmpnL1d1WDhPdzIxbjhRZGZ0TkhWVTB3VzhMM01jZjhBcW83c2xzaFIwQktCU1FPK00xVHR2aHJjeDJFMFAvQ1VhblltYmsyMm1PWWJhTTl3aUVzUVBvd3E5NFdsbjhQNnIvd2lWN2EyaWZ1RGMybDFhUitXbHlvWUI5NjVPSkFTQ2VUbk9hQU95b29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdETzFqVWJqUzdaTGlEVExuVUUzNGxTMUttUkZ3Zm1Da2pkempnYzgxalNlUExEeXlJTkwxMjR1T2d0MDB1Wlh6NkVzb1VmaWE2cWlnRG1mQ1dsNmhCTHF1c2F2RXNGL3F0d0pXdDFZTjVFYUtFalFzT0NRQmtrZHpXWHBjOTE0Rmx1ZEp1OVB2TG5SRE04MWpkMmR1MDNrbzdiakZJcUFzTUVuQnhnZzlxN3FpZ0RoTlZ1TG54NllOSHN0T3ZiZlJUTWtsL2VYa0RRQ1ZGSVlSUnF3RE1TUU1rakFBUFhOYS9pM1NiNjdHbmF0cEtvK3FhVk9ab1luSUFtUmwyeVI1N2JsUEI5UUs2U2lnRGxQK0U4dGhBQTJpYStMMGovanpHbXlGOCttN0d6SHZ1eFV2aEhTYjYyYlV0WjFlTll0VTFhWVN5d3EyNFFScU5zY2VlNUF6a2pqSk5kTlJRQVZ6TnY0ZnU5UjhSTnJHdlBGSXRyS3cweXpqSk1jSUhBbGJQM3BEK1NqcHp6WFRVVUFjMzRqOE9UWGx6RnJXaXpKYWE5YXJpT1ZoOGx3blV4U2dkVlByMVU4aXVoaE1yUVJtZEZTWXFDNm8yNEJzY2dIQXlNOThVK2lnRE8xTHcvbzJzeVJ5YW5wVm5lUEdDRWE0Z1Z5bzlBU0t4dFQ4RGVHUnBWNGJmdzFwbm5lUS9sN0xOTjI3YWNZNDY1cnFxS0FPUzhDK0dkTjB2dzNvOTEvWTF0YWFwOWlqRThodHdrd1lxTndZNHpuUFhOYU9wK0tMYlNMNDIxMXArcWxOb1lYRUZpODBSejJ5Z09EOVFLM0tLQU9IMVc5dnZHMFA5aTZicDk5YWFYT1FMN1VMdUZvTjBPZm1qaVZzTVdZY1p3QUFUV3A0cTBlOHViYlRMM1I0bzN2dEp1VnVJYmQyMnJLbTBvMGVlaWtxeHdleEFycEtLQU9XVHgzWUxIaTYwelc3YTRBK2FCOU1tWmdmUUZWS242ZzFCcFVHb2EvNHZUeERlV0UrbjJObGJQYjJVTnpnVFNzNUJlUmxCK1VZVUFBODkrSzdDaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQVAvMlE9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LXNzclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLWh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImkxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9