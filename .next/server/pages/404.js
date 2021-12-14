module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/404": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/404.js");
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\common\\widgets\\breadcrubs.js";
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
        //MENU
        'Sale': 'Sale',
        'Coupons': 'Coupons',
        'Starter sets': 'Starter sets',
        'Nail varnishes - color varnishes': 'Nail varnishes - color varnishes',
        'Gel & acrylic system': 'Gel & acrylic system',
        'Acrylic system': 'Acrylic system',
        'Poly acrylic gel': 'Poly acrylic gel',
        'Dipping powder': 'Dipping powder',
        'Gel build-up': 'Gel build-up',
        'Primer & base gel': 'Primer & base gel',
        'Rubber Base Gel': 'Rubber Base Gel',
        'Build-up gel': 'Build-up gel',
        'fiberglass': 'fiberglass',
        'LED': 'LED',
        '1-phase gel': '1-phase gel',
        'Cover camouflage': 'Cover camouflage',
        'French gels': 'French gels',
        'sealing': 'sealing',
        'UV / LED color gels': 'UV / LED color gels',
        'One stroke': 'One stroke',
        'Color Gels': 'Color Gels',
        'LED / UV RAL': 'LED / UV RAL',
        'Trend colors': 'Trend colors',
        'macarons': 'macarons',
        'Tropical Dream': 'Tropical Dream',
        'Neon': 'Neon',
        'Fresh & Cool': 'Fresh & Cool',
        'Nude': 'Nude',
        'Champions Red': 'Champions Red',
        'Glitter gels': 'Glitter gels',
        'hologram': 'hologram',
        'Precious Stone': 'Precious Stone',
        'Sparkling Wines': 'Sparkling Wines',
        'Pearl dreams': 'Pearl dreams',
        'High quality glitter gel': 'High quality glitter gel',
        'Milky Way': 'Milky Way',
        'Mermaid': 'Mermaid',
        'Fashion star': 'Fashion star',
        'Magic gels': 'Magic gels',
        'Effect gels': 'Effect gels',
        'Chameleon effect': 'Chameleon effect',
        'Thermo gels': 'Thermo gels',
        'Gloss gels': 'Gloss gels',
        'La Vie Naturel': 'La Vie Naturel',
        'Goldie Dream Ball': 'Goldie Dream Ball',
        'Daffodil case': 'Daffodil case',
        'Pastel': 'Pastel',
        'Mineral powder': 'Mineral powder',
        'Muse of Light': 'Muse of Light',
        'Pastel series': 'Pastel series',
        'Catmatic': 'Catmatic',
        '3D Cat Eye Gel': '3D Cat Eye Gel',
        'Magnets': 'Magnets',
        'UV / LED Shellac - gel varnish': 'UV / LED Shellac - gel varnish',
        'Flexy Hybrid Gel': 'Flexy Hybrid Gel',
        'Nail Art': 'Nail Art',
        'Instruments & accessories': 'Instruments & accessories',
        '3D & 4D gel': '3D & 4D gel',
        'Cracking gel': 'Cracking gel',
        'Sugar powder': 'Sugar powder',
        'Painting gel': 'Painting gel',
        'Spider gels': 'Spider gels',
        'Airbrush': 'Airbrush',
        'Airbrush stencils': 'Airbrush stencils',
        'Airbrush colors': 'Airbrush colors',
        'Airbrush device': 'Airbrush device',
        'Pigments': 'Pigments',
        'Nail art stamping': 'Nail art stamping',
        'stencils': 'stencils',
        'Stamping gel': 'Stamping gel',
        'Stamping accessories': 'Stamping accessories',
        'Transfer foils': 'Transfer foils',
        'Nail Art Stickers': 'Nail Art Stickers',
        'Glitter': 'Glitter',
        'Rhinestones': 'Rhinestones',
        'Piercing': 'Piercing',
        'Pearls and Co.': 'Pearls and Co.',
        'UV / LED lamps': 'UV / LED lamps',
        'Milling cutters & accessories': 'Milling cutters & accessories',
        'Router': 'Router',
        'Router bits': 'Router bits',
        'Ceramic bits': 'Ceramic bits',
        'Polishing tool': 'Polishing tool',
        'Dust': 'Dust',
        'Accessories': 'Accessories',
        'Hygiene & liquids': 'Hygiene & liquids',
        'Hygiene products': 'Hygiene products',
        'Cleaner & Co.': 'Cleaner & Co.',
        'Nail & Foot Care': 'Nail & Foot Care',
        'Tools': 'Tools',
        'Nail oil & hand cream': 'Nail oil & hand cream',
        'Brushes & brushes': 'Brushes & brushes',
        'Modeling templates': 'Modeling templates',
        'Tips & accessories': 'Tips & accessories',
        'Classic tips': 'Classic tips',
        'French tips': 'French tips',
        'Stiletto tips': 'Stiletto tips',
        'Tunnel tips': 'Tunnel tips',
        'Foot tips': 'Foot tips',
        'Tip glue': 'Tip glue',
        'Tip cutter': 'Tip cutter',
        'Tips accessories': 'Tips accessories',
        'Files & Buffers': 'Files & Buffers',
        'Foot files': 'Foot files',
        'Curved files': 'Curved files',
        'Straight files': 'Straight files',
        'Trapeze files': 'Trapeze files',
        'buffer': 'buffer',
        'Practice hands & fingers': 'Practice hands & fingers',
        'Task lights': 'Task lights',
        'Armrests': 'Armrests',
        'Containers & storage': 'Containers & storage',
        'Displays & shelves': 'Displays & shelves',
        'Studio furnishings': 'Studio furnishings',
        'Masks': 'Masks',
        'Others': 'Others',
        'Training': 'Training',
        'Training': 'Training',
        'Private courses': 'Private courses',
        //SERVICE
        'Express Shipping': 'Express Shipping',
        'from Mon-Fri': 'from Mon-Fri',
        'heapest in': 'heapest in',
        'Switzerland Prices': 'Switzerland Prices',
        'Absolutely safe': 'Absolutely safe',
        'Payment Methods': 'Payment Methods',
        'Direct from the': 'Direct from the',
        'manufacturer einkaufen': 'manufacturer einkaufen',
        'free shipping': 'free shipping',
        'from CHF 100.-': 'from CHF 100.-',
        //TOP PRODUCT
        'special offer': 'special offer',
        'top collection': 'top collection',
        'Find your product here...': 'Find your product here...',
        //BANNER
        'From us for you ♡': 'From us for you ♡',
        'Festive holidays with our Shellac colors': 'Festive holidays with our Shellac colors',
        'Christmas Sale!': 'Christmas Sale!',
        'Now from CHF 50.- 10% off EVERYTHING and from CHF 0.- a free gift! - Code-> merrynails': 'Now from CHF 50.- 10% off EVERYTHING and from CHF 0.- a free gift! - Code-> merrynails',
        //PARALLAX
        'fashion trends': 'fashion trends',
        'special offer': 'special offer',
        //NEWSLETTER
        'SUBSCRIBE TO OUR NEWSLETTER!': 'SUBSCRIBE TO OUR NEWSLETTER!',
        'Never Miss Anything From Swiss Nails Factory By Signing Up To Our Newsletter.': 'Never Miss Anything From Swiss Nails Factory By Signing Up To Our Newsletter.',
        //OTHERS
        'Enter your email': 'Enter your email',
        'subscribe': 'subscribe',
        'about': 'about',
        'NAILS FACTORY is one of the top suppliers to the Swiss nail salons. But our high-quality products are also the perfect choice for private use. A huge selection of nail polishes, nail art products, UV and LED lamps and many other accessories for successful nail modeling await you in our Nails Online Shop.': 'NAILS FACTORY is one of the top suppliers to the Swiss nail salons. But our high-quality products are also the perfect choice for private use. A huge selection of nail polishes, nail art products, UV and LED lamps and many other accessories for successful nail modeling await you in our Nails Online Shop.',
        'categories': 'categories',
        'information': 'information',
        'Locations': 'Locations',
        'FAQ': 'FAQ',
        'B2B request': 'B2B request',
        'Contact': 'Contact',
        'Seengen location Guardian Way 6 5707 Seengen': 'Seengen location Guardian Way 6 5707 Seengen',
        'Phone + 41 62 771 00 21': 'Phone + 41 62 771 00 21',
        'Email Us': 'Email Us',
        'Beauty is in your hands': 'Beauty is in your hands',
        'Login': 'Login',
        'Logout': 'Logout',
        'wishlist': 'wishlist',
        'My Account': 'My Account',
        'Register': 'Register',
        //PRODUCT
        'back': 'back',
        'Loading': 'Loading',
        'size': 'size',
        'price': 'price',
        "Great nail polish color polishes with an exceptionally nourishing formula. The composition works without the 18 harmful chemicals that can normally be found in nail polishes. They dry super fast. You don’t have to wait so long before you can go back to everyday business. This effect is supported by the body’s own warmth. This helps the nail polish to dry very quickly. The wait is finally over": "Great nail polish color polishes with an exceptionally nourishing formula. The composition works without the 18 harmful chemicals that can normally be found in nail polishes. They dry super fast. You don’t have to wait so long before you can go back to everyday business. This effect is supported by the body’s own warmth. This helps the nail polish to dry very quickly. The wait is finally over",
        'Home': 'Home',
        'language': 'language',
        '10 Products Par Page': '10 Products Par Page',
        '15 Products Par Page': '15 Products Par Page',
        '20 Products Par Page': '20 Products Par Page',
        'Sorting items': 'Sorting items',
        'High To Low': 'High To Low',
        'Low To High': 'Low To High',
        'Newest': 'Newest',
        'Asc Order': 'Asc Order',
        'Desc Order': 'Desc Order',
        'Your Cart is Empty': 'Your Cart is Empty',
        'Explore more shortlist some items.': 'Explore more shortlist some items.',
        'Load More': 'Load More'
      }
    },
    de: {
      translations: {
        //MENU
        'Sale': 'Verkauf',
        'Coupons': 'Gutscheine',
        'Starter sets': 'Startersets',
        'Nail varnishes - color varnishes': 'Nagellacke - Farblacke',
        'Nail varnishes': 'Nagellacke',
        'Gel & acrylic system': 'Gel- und Acrylsystem',
        'Acrylic system': 'Acrylsystem',
        'Poly acrylic gel': 'Polyacrylgel',
        'Dipping powder': 'Tauchpulver',
        'Gel build-up': 'Gelaufbau',
        'Primer & base gel': 'Primer & Basisgel',
        'Rubber Base Gel': 'Gummibasisgel',
        'Build-up gel': 'Aufbaugel',
        'fiberglass': 'Fiberglas',
        'LED': 'LED',
        '1-phase gel': '1-Phasen-Gel',
        'Cover camouflage': 'Tarnung decken',
        'French gels': 'Französische Gele',
        'sealing': 'Abdichtung',
        'UV / LED color gels': 'UV / LED Farbgele',
        'One stroke': 'Ein Schlag',
        'Color Gels': 'Farbgele',
        'LED / UV RAL': 'LED / UV-RAL',
        'Trend colors': 'Trendfarben',
        'macarons': 'Makronen',
        'Tropical Dream': 'Tropischer Traum',
        'Neon': 'Neon',
        'Fresh & Cool': 'Frisch cool',
        'Nude': 'Nackt',
        'Glitter gels': 'Glitzergele',
        'hologram': 'Hologramm',
        'Precious Stone': 'Edelstein',
        'Sparkling Wines': 'Sekt',
        'Pearl dreams': 'Perlenträume',
        'High quality glitter gel': 'Hochwertiges Glitzergel',
        'Milky Way': 'Milchstraße',
        'Mermaid': 'Meerjungfrau',
        'Fashion star': 'Modestar',
        'Magic gels': 'Zaubergele',
        'Effect gels': 'Effektgele',
        'Chameleon effect': 'Chamäleon-Effekt',
        'Thermo gels': 'Thermogele',
        'Gloss gels': 'Glanzgele',
        'La Vie Naturel': 'La Vie Naturel',
        'Goldie Dream Ball': 'Goldie Traumball',
        'Daffodil case': 'Narzissenetui',
        'Pastel': 'Pastell',
        'Mineral powder': 'Mineralpulver',
        'Muse of Light': 'Muse des Lichts',
        'Pastel series': 'Pastell-Serie',
        'Catmatic': 'Catmatic',
        '3D Cat Eye Gel': '3D Katzenaugengel',
        'Magnets': 'Magnete',
        'UV / LED Shellac - gel varnish': 'UV / LED Schellack - Gellack',
        'Flexy Hybrid Gel': 'Flexy Hybrid-Gel',
        'Nail Art': 'Nagel Kunst',
        'Instruments & accessories': 'Instrumente & Zubehör',
        '3D & 4D gel': '3D- und 4D-Gel',
        'Cracking gel': 'Knackgel',
        'Sugar powder': 'Zuckerpulver',
        'Painting gel': 'Malgel',
        'Spider gels': 'Spinnengele',
        'Airbrush': 'Airbrush',
        'Airbrush stencils': 'Airbrush-Schablonen',
        'Airbrush colors': 'Airbrush-Farben',
        'Airbrush device': 'Airbrush-Gerät',
        'Pigments': 'Pigmente',
        'Nail art stamping': 'Nailart Stempeln',
        'stencils': 'Schablonen',
        'Stamping gel': 'Stempelgel',
        'Stamping accessories': 'Stanzzubehör',
        'Transfer foils': 'Transferfolien',
        'Nail Art Stickers': 'Nailart-Aufkleber',
        'Glitter': 'Funkeln',
        'Rhinestones': 'Strasssteine',
        'Piercing': 'Piercing',
        'Pearls and Co.': 'Perlen und Co.',
        'UV / LED lamps': 'UV-/LED-Lampen',
        'Milling cutters & accessories': 'Fräser & Zubehör',
        'Router': 'Router',
        'Router bits': 'Fräser',
        'Ceramic bits': 'Keramik-Bits',
        'Polishing tool': 'Polierwerkzeug',
        'Dust': 'Staub',
        'Accessories': 'Zubehör',
        'Hygiene & liquids': 'Hygiene & Flüssigkeiten',
        'Hygiene products': 'Hygieneprodukte',
        'Cleaner & Co.': 'Reiniger & Co.',
        'Nail & Foot Care': 'Nagel- & Fußpflege',
        'Tools': 'Werkzeug',
        'Nail Oil & Hand Cream': 'Nagelöl & Handcreme',
        'Nail oil & hand ': 'Nagelöl & Hand',
        'Brushes & brushes': 'Bürsten & Bürsten',
        'Modeling templates': 'Modellierungsvorlagen',
        'Tips & accessories': 'Tipps & Zubehör',
        'Classic tips': 'Klassische Tipps',
        'French tips': 'Französisch Tipps',
        'Stiletto tips': 'Stiletto-Tipps',
        'Tunnel tips': 'Tunnel-Tipps',
        'Foot tips': 'Fußtipps',
        'Tip glue': 'Tipp Kleber',
        'Tip cutter': 'Spitzenschneider',
        'Tips accessories': 'Tipps Zubehör',
        'Files & Buffers': 'Dateien & Puffer',
        'Foot files': 'Fußfeilen',
        'Curved files': 'Gekrümmte Dateien',
        'Straight files': 'Gerade Dateien',
        'Trapeze files': 'Trapezdateien',
        'buffer': 'Puffer',
        'Practice hands & fingers': 'Üben Sie Hände und Finger',
        'Task lights': 'Arbeitsplatzleuchten',
        'Armrests': 'Armlehnen',
        'Containers & storage': 'Behälter & Lagerung',
        'Displays & shelves': 'Displays & Regale',
        'Studio furnishings': 'Studioeinrichtung',
        'Masks': 'Masken',
        'Others': 'Andere',
        'Training': 'Ausbildung',
        'Training': 'Ausbildung',
        'Private courses': 'Privatkurse',
        //SERVICE
        'Express Shipping': 'Expressversand',
        'from Mon-Fri': 'von Mo-Fr',
        'heapest in': 'haufigste in',
        'Switzerland Prices': 'Schweiz Preise',
        'Absolutely safe': 'Absolut sicher',
        'Payment Methods': 'Zahlungsarten',
        'Direct from the': 'Direkt von der',
        'manufacturer einkaufen': 'Hersteller einkaufen',
        'free shipping': 'Kostenloser Versand',
        'from CHF 100.-': 'ab CHF 100.-',
        //BANNER
        'From us for you ♡': 'Von uns für euch ♡',
        'Festive holidays with our Shellac colors': 'Festliche Feiertage mit unseren Schellackfarben',
        'Christmas Sale!': 'Weihnachtsangebot!',
        'Now from CHF 50. - 10 % off EVERYTHING and from CHF 0. - a free gift! - Code -> merrynails': 'Jetzt ab CHF 50. - 10 % auf ALLES und ab CHF 0. - ein Gratisgeschenk! - Code -> fröhliche Nägel',
        //TOP PRODUCT
        'special offer': 'Sonderangebot',
        'top collection': 'Top-Kollektion',
        'Find your product here...': 'Finden Sie hier Ihr Produkt...',
        //PARALLAX
        'fashion trends': 'Modetrends',
        'special offer': 'Sonderangebot',
        //PARALLAX
        'SUBSCRIBE TO OUR NEWSLETTER!': 'ABONNIERE UNSEREN NEWSLETTER!',
        'Never Miss Anything From Swiss Nails Factory By Signing Up To Our Newsletter.': 'Verpassen Sie nichts von Swiss Nails Factory, indem Sie sich für unseren Newsletter anmelden.',
        'Enter your email': 'Geben sie ihre E-Mail Adresse ein',
        'subscribe': 'Abonnieren',
        'about': 'etwa',
        'NAILS FACTORY is one of the top suppliers to the Swiss nail salons. But our high-quality products are also the perfect choice for private use. A huge selection of nail polishes, nail art products, UV and LED lamps and many other accessories for successful nail modeling await you in our Nails Online Shop.': 'NAILS FACTORY ist einer der Top-Lieferanten der Schweizer Nagelstudios. Aber auch für den privaten Gebrauch sind unsere hochwertigen Produkte die perfekte Wahl. Eine riesige Auswahl an Nagellacken, Nailart-Produkten, UV- und LED-Lampen und viele weitere Accessoires für eine erfolgreiche Nagelmodellage erwarten Sie in unserem Nails Online Shop.',
        'categories': 'Kategorien',
        'information': 'Information',
        'Locations': 'Standorte',
        'FAQ': 'FAQ',
        'B2B request': 'B2B-Anfrage',
        'Contact': 'Kontakt',
        'Seengen location Guardian Way 6 5707 Seengen': 'Standort Seengen Wächterweg 6 5707 Seengen',
        'Phone + 41 62 771 00 21': 'Telefon: + 41 62 771 00 21',
        'Email Us': 'Schreiben Sie uns eine E-Mail',
        'Beauty is in your hands': 'Schönheit liegt in deinen Händen',
        'Login': 'Anmeldung',
        'Logout': 'Ausloggen',
        'wishlist': 'Wunschzettel',
        'My Account': 'Mein Konto',
        'Register': 'Registrieren',
        //PRODUCT
        'back': 'zurück',
        'Loading': 'Wird geladen',
        'size': 'Größe',
        'price': 'Preis',
        'Great nail polish color polishes with an exceptionally nourishing formula. The composition works without the 18 harmful chemicals that can normally be found in nail polishes. They dry super fast. You don’t have to wait so long before you can go back to everyday business. This effect is supported by the body’s own warmth. This helps the nail polish to dry very quickly. The wait is finally over': 'Tolle Nagellack-Farblacke mit einer außergewöhnlich pflegenden Formel. Die Zusammensetzung funktioniert ohne die 18 schädlichen Chemikalien, die normalerweise in Nagellacken enthalten sind. Sie trocknen super schnell. Sie müssen nicht so lange warten, bis Sie wieder in den Geschäftsalltag zurückkehren können. Unterstützt wird dieser Effekt durch die körpereigene Wärme. Dadurch trocknet der Nagellack sehr schnell. Das Warten hat endlich ein Ende',
        'Home': 'Heim',
        'language': 'Sprache',
        '10 Products Par Page': '10 Produkte pro Seite',
        '15 Products Par Page': '15 Produkte Par Seite',
        '20 Products Par Page': '20 Produkte pro Seite',
        'Sorting items': 'Artikel sortieren',
        'High To Low': 'Absteigend',
        'Low To High': 'Von niedrig nach hoch',
        'Newest': 'Neueste',
        'Asc Order': 'Aufsteigende Bestellung',
        'Desc Order': 'Beschreibung Bestellung',
        'Your Cart is Empty': 'Ihr Warenkorb ist leer',
        'Explore more shortlist some items.': 'Entdecken Sie mehr, wählen Sie einige Elemente aus.',
        'Load More': 'Mehr laden'
      }
    },
    es: {
      translations: {
        //MENU
        'Sale': 'Rebaja',
        'Coupons': 'Cupones',
        'Starter sets': 'Conjuntos de iniciación',
        'Nail varnishes - color varnishes': 'Barnices de uñas - barnices de color',
        'Nail varnishes': 'Barnices de uñas',
        'Gel & acrylic system': 'Sistema de gel y acrílico',
        'Acrylic system': 'Sistema acrílico',
        'Poly acrylic gel': 'Gel poliacrílico',
        'Dipping powder': 'Polvo de inmersión',
        'Gel build-up': 'Acumulación de gel',
        'Primer & base gel': 'Primer y gel base',
        'Rubber Base Gel': 'Gel base de goma',
        'Build-up gel': 'Gel acumulador',
        'fiberglass': 'fibra de vidrio',
        'LED': 'LED',
        '1-phase gel': 'Gel monofásico',
        'Cover camouflage': 'Cubierta de camuflaje',
        'French gels': 'Geles franceses',
        'sealing': 'sellando',
        'UV / LED color gels': 'Geles de color UV / LED',
        'One stroke': 'Un golpe',
        'Color Gels': 'Geles de color',
        'LED / UV RAL': 'LED / UV RAL',
        'Trend colors': 'Colores de tendencia',
        'macarons': 'macarons',
        'Tropical Dream': 'Sueño Tropical',
        'Neon': 'Neón',
        'Fresh & Cool': 'Frescura fresca',
        'Nude': 'Desnudo',
        'Glitter gels': 'Geles con purpurina',
        'hologram': 'holograma',
        'Precious Stone': 'Piedra preciosa',
        'Sparkling Wines': 'Vinos espumosos',
        'Pearl dreams': 'Sueños de perlas',
        'High quality glitter gel': 'Gel de brillo de alta calidad',
        'Milky Way': 'vía Láctea',
        'Mermaid': 'Sirena',
        'Fashion star': 'Estrella de la moda',
        'Magic gels': 'Geles mágicos',
        'Effect gels': 'Geles de efecto',
        'Chameleon effect': 'Efecto camaleón',
        'Thermo gels': 'Termo geles',
        'Gloss gels': 'Geles brillantes',
        'La Vie Naturel': 'La Vie Naturel',
        'Goldie Dream Ball': 'Bola de ensueño Goldie',
        'Daffodil case': 'Estuche narciso',
        'Pastel': 'Pastel',
        'Mineral powder': 'Polvo mineral',
        'Muse of Light': 'Musa de la luz',
        'Pastel series': 'Serie pastel',
        'Catmatic': 'Catmatic',
        '3D Cat Eye Gel': 'Gel de ojos de gato 3D',
        'Magnets': 'Imanes',
        'UV / LED Shellac - gel varnish': 'UV / LED Shellac - barniz en gel',
        'Flexy Hybrid Gel': 'Gel híbrido Flexy',
        'Nail Art': 'Arte de uñas',
        'Instruments & accessories': 'Instrumentos y accesorios',
        '3D & 4D gel': 'Gel 3D y 4D',
        'Cracking gel': 'Gel de craqueo',
        'Sugar powder': 'Polvo de azúcar',
        'Painting gel': 'Gel de pintura',
        'Spider gels': 'Geles de araña',
        'Airbrush': 'Aerógrafo',
        'Airbrush stencils': 'Plantillas de aerógrafo',
        'Airbrush colors': 'Colores de aerógrafo',
        'Airbrush device': 'Dispositivo de aerógrafo',
        'Pigments': 'Pigmentos',
        'Nail art stamping': 'Estampado de uñas',
        'stencils': 'plantillas',
        'Stamping gel': 'Gel de estampación',
        'Stamping accessories': 'Accesorios de estampación',
        'Transfer foils': 'Láminas de transferencia',
        'Nail Art Stickers': 'Arte de uñas pegatinas',
        'Glitter': 'Brillantina',
        'Rhinestones': 'Diamantes de imitación',
        'Piercing': 'Perforación',
        'Pearls and Co.': 'Perlas y Co.',
        'UV / LED lamps': 'Lámparas UV / LED',
        'Milling cutters & accessories': 'Fresas y accesorios',
        'Router': 'Enrutador',
        'Router bits': 'Bits de enrutador',
        'Ceramic bits': 'Bits de cerámica',
        'Polishing tool': 'Herramienta de pulido',
        'Dust': 'Polvo',
        'Accessories': 'Accesorios',
        'Hygiene & liquids': 'Higiene y líquidos',
        'Hygiene products': 'Productos de higiene',
        'Cleaner & Co.': 'Cleaner & Co.',
        'Nail & Foot Care': 'Cuidado de uñas y pies',
        'Tools': 'Instrumentos',
        'Nail Oil & Hand Cream': 'Aceite de uñas y crema de manos',
        'Nail oil & hand ': 'Aceite de uñas y manos',
        'Brushes & brushes': 'Pinceles y pinceles',
        'Modeling templates': 'Plantillas de modelado',
        'Tips & accessories': 'Consejos y accesorios',
        'Classic tips': 'Consejos clásicos',
        'French tips': 'Consejos franceses',
        'Stiletto tips': 'Consejos de estilete',
        'Tunnel tips': 'Consejos para túneles',
        'Foot tips': 'Consejos para los pies',
        'Tip glue': 'Pegamento de punta',
        'Tip cutter': 'Cortador de puntas',
        'Tips accessories': 'Accesorios de puntas',
        'Files & Buffers': 'Archivos y búferes',
        'Foot files': 'Lima para pies',
        'Curved files': 'Archivos curvos',
        'Straight files': 'Archivos rectos',
        'Trapeze files': 'Archivos de trapecio',
        'buffer': 'buffer',
        'Practice hands & fingers': 'Practica manos y dedos',
        'Task lights': 'Luces de trabajo',
        'Armrests': 'Apoyabrazos',
        'Containers & storage': 'Contenedores y almacenamiento',
        'Displays & shelves': 'Expositores y estanterías',
        'Studio furnishings': 'Mobiliario de estudio',
        'Masks': 'Mascaras',
        'Others': 'Otros',
        'Training': 'Capacitación',
        'Training': 'Capacitación',
        'Private courses': 'Cursos privados',
        //SERVICE
        'Express Shipping': 'Envío express',
        'from Mon-Fri': 'de lunes a viernes',
        'heapest in': 'más pesado en',
        'Switzerland Prices': 'Precios de Suiza',
        'Absolutely safe': 'Absolutamente seguro',
        'Payment Methods': 'Métodos de pago',
        'Direct from the': 'Directo desde el',
        'manufacturer einkaufen': 'fabricante einkaufen',
        'free shipping': 'envío gratis',
        'from CHF 100.-': 'desde CHF 100.-',
        //BANNER
        'From us for you ♡': 'De nosotros para ti ♡',
        'Festive holidays with our Shellac colors': 'Fiestas festivas con nuestros colores Shellac',
        'Christmas Sale!': '¡Venta de Navidad!',
        'Now from CHF 50. - 10 % off EVERYTHING and from CHF 0. - a free gift! - Code -> merrynails': 'Ahora desde CHF 50. - 10% de descuento en TODO y desde CHF 0. - ¡un regalo gratis! - Código -> merrynails',
        //TOP PRODUCT
        'special offer': 'oferta especial',
        'top collection': 'colección superior',
        'Find your product here...': 'Encuentra tu producto aquí ...',
        //PARALLAX
        'fashion trends': 'tendencias de la moda',
        'special offer': 'oferta especial',
        //PARALLAX
        'SUBSCRIBE TO OUR NEWSLETTER!': '¡SUSCRÍBETE A NUESTRO BOLETÍN!',
        'Never Miss Anything From Swiss Nails Factory By Signing Up To Our Newsletter.': 'No se pierda nada de Swiss Nails Factory suscribiéndose a nuestro boletín.',
        'Enter your email': 'Introduce tu correo electrónico',
        'subscribe': 'suscribir',
        'about': 'acerca de',
        'NAILS FACTORY is one of the top suppliers to the Swiss nail salons. But our high-quality products are also the perfect choice for private use. A huge selection of nail polishes, nail art products, UV and LED lamps and many other accessories for successful nail modeling await you in our Nails Online Shop.': 'NAILS FACTORY es uno de los principales proveedores de los salones de uñas suizos. Pero nuestros productos de alta calidad también son la elección perfecta para uso privado. Una gran selección de esmaltes de uñas, productos de decoración de uñas, lámparas UV y LED y muchos otros accesorios para un modelado de uñas exitoso te esperan en nuestra tienda online de uñas.',
        'categories': 'categorias',
        'information': 'información',
        'Locations': 'Ubicaciones',
        'FAQ': 'Preguntas más frecuentes',
        'B2B request': 'Solicitud B2B',
        'Contact': 'Contacto',
        'Seengen location Guardian Way 6 5707 Seengen': 'Ubicación de Seengen Guardian Way 6 5707 Seengen',
        'Phone + 41 62 771 00 21': 'Teléfono: + 41 62 771 00 21',
        'Email Us': 'Envíenos un correo electrónico',
        'Beauty is in your hands': 'La belleza esta en tus manos',
        'Login': 'Acceso',
        'Logout': 'Cerrar sesión',
        'wishlist': 'lista de deseos',
        'My Account': 'Mi cuenta',
        'Register': 'Registrarse',
        //PRODUCT
        'back': 'espalda',
        'Loading': 'Cargando',
        'size': 'Talla',
        'price': 'precio',
        'Great nail polish color polishes with an exceptionally nourishing formula. The composition works without the 18 harmful chemicals that can normally be found in nail polishes. They dry super fast. You don’t have to wait so long before you can go back to everyday business. This effect is supported by the body’s own warmth. This helps the nail polish to dry very quickly. The wait is finally over': 'Excelente color de esmalte de uñas con una fórmula excepcionalmente nutritiva. La composición funciona sin los 18 químicos dañinos que normalmente se encuentran en los esmaltes de uñas. Se secan muy rápido. No tiene que esperar tanto antes de poder volver a sus actividades cotidianas. Este efecto es apoyado por el propio calor del cuerpo. Esto ayuda a que el esmalte de uñas se seque muy rápidamente. La espera ha terminado',
        'Home': 'Casa',
        'language': 'idioma',
        '10 Products Par Page': '10 productos por página',
        '15 Products Par Page': '15 productos por página',
        '20 Products Par Page': '20 productos por página',
        'Sorting items': 'Clasificación de elementos',
        'High To Low': 'De alto a bajo',
        'Low To High': 'Bajo a alto',
        'Newest': 'El más nuevo',
        'Asc Order': 'Orden Asc',
        'Desc Order': 'Orden de Desc',
        'Your Cart is Empty': 'Tu carrito esta vacío',
        'Explore more shortlist some items.': 'Explorar más preseleccionar algunos elementos.',
        'Load More': 'Carga más'
      }
    },
    fr: {
      translations: {
        //MENU
        'Sale': "Vente",
        'Coupons': "Bons de réduction",
        'Starter sets': "Kits de démarrage",
        'Nail varnishes': "Vernis à ongles",
        'Nail varnishes - color varnishes': 'Vernis à ongles - vernis de couleur',
        'Gel & acrylic system': "Système gel & acrylique",
        'Acrylic system': "Système acrylique",
        'Poly acrylic gel': "Gel poly acrylique",
        'Dipping powder': "Poudre à tremper",
        'Gel build-up': "Accumulation de gel",
        'Primer & base gel': "Primer & gel de base",
        'Rubber Base Gel': "Gel à base de caoutchouc",
        'Build-up gel': "Gel de construction",
        'fiberglass': "fibre de verre",
        'LED': "LED",
        '1-phase gel': "gel monophasique",
        'Cover camouflage': "Couverture camouflage",
        'French gels': "gels français",
        'sealing': "scellage",
        'UV / LED color gels': "Gels de couleur UV / LED",
        'One stroke': "Un coup",
        'Color Gels': "Gels de couleur",
        'LED / UV RAL': "LED/UV RAL",
        'Trend colors': "Couleurs tendance",
        'macarons': "macarons",
        'Tropical Dream': "Rêve Tropical",
        'Neon': "Néon",
        'Fresh & Cool': "Frais et frais",
        'Nude': "Nu",
        'Glitter gels': "Gels pailletés",
        'hologram': "hologramme",
        'Precious Stone': "Pierre précieuse",
        'Sparkling Wines': "Vins Mousseux",
        'Pearl dreams': "Rêves de perles",
        'High quality glitter gel': "Gel pailleté de haute qualité",
        'Milky Way': "voie Lactée",
        'Mermaid': "Sirène",
        'Fashion star': "Star de la mode",
        'Magic gels': "Gels magiques",
        'Effect gels': "Gels à effet",
        'Chameleon effect': "Effet caméléon",
        'Thermo gels': "Thermogels",
        'Gloss gels': "Gels brillants",
        'La Vie Naturel': "La Vie Naturelle",
        'Goldie Dream Ball': "Boule de rêve Goldie",
        'Daffodil case': "Étui à jonquilles",
        'Pastel': "Pastel",
        'Mineral powder': "Poudre minérale",
        'Muse of Light': "Muse de la Lumière",
        'Pastel series': "Série pastel",
        'Catmatic': "Catmatique",
        '3D Cat Eye Gel': "Gel yeux de chat 3D",
        'Magnets': "Aimants",
        'UV / LED Shellac - gel varnish': "UV / LED Shellac - vernis gel",
        'Flexy Hybrid Gel': "Gel Hybride Flexy",
        'Nail Art': "Nail Art",
        'Instruments & accessories': "Instruments et accessoires",
        '3D & 4D gel': "Gels 3D et 4D",
        'Cracking gel': "Gel craquant",
        'Sugar powder': "Sucre en poudre",
        'Painting gel': "Gel de peinture",
        'Spider gels': "Gels d'araignée",
        'Airbrush': "Aérographe",
        'Airbrush stencils': "Pochoirs aérographe",
        'Airbrush colors': "Couleurs aérographe",
        'Airbrush device': "Appareil aérographe",
        'Pigments': "Pigments",
        'Nail art stamping': "Estampage nail art",
        'stencils': "pochoirs",
        'Stamping gel': "Gel d'estampage",
        'Stamping accessories': "Accessoires d'estampage",
        'Transfer foils': "Feuilles de transfert",
        'Nail Art Stickers': "Autocollants Nail Art",
        'Glitter': "Briller",
        'Rhinestones': "Strass",
        'Piercing': "Perçant",
        'Pearls and Co.': "Perles et Cie.",
        'UV / LED lamps': "Lampes UV / LED",
        'Milling cutters & accessories': "Fraises et accessoires",
        'Router': "Routeur",
        'Router bits': "Bits de routeur",
        'Ceramic bits': "Embouts en céramique",
        'Polishing tool': "Outil de polissage",
        'Dust': "Poussière",
        'Accessories': "Accessoires",
        'Hygiene & liquids': "Hygiène & liquides",
        'Hygiene products': "Produits d'hygiène",
        'Cleaner & Co.': "Nettoyeur & Cie.",
        'Nail & Foot Care': "Soins des ongles et des pieds",
        'Tools': "Outils",
        'Nail Oil & Hand Cream': 'Huile pour les ongles et crème pour les mains',
        'Nail oil & hand ': "Huile d'ongle & main",
        'Brushes & brushes': "Brosses & brosses",
        'Modeling templates': "Modèles de modélisation",
        'Tips & accessories': "Astuces & accessoires",
        'Classic tips': "Conseils classiques",
        'French tips': "Conseils de français",
        'Stiletto tips': "Conseils de stylet",
        'Tunnel tips': "Conseils pour les tunnels",
        'Foot tips': "Conseils pour les pieds",
        'Tip glue': "Pointe de colle",
        'Tip cutter': "Coupeur de pointe",
        'Tips accessories': "Conseils accessoires",
        'Files & Buffers': "Fichiers et tampons",
        'Foot files': "Fichiers de pied",
        'Curved files': "Fichiers courbes",
        'Straight files': "Fichiers droits",
        'Trapeze files': "Fichiers trapèze",
        'buffer': "amortir",
        'Practice hands & fingers': "Pratiquer les mains et les doigts",
        'Task lights': "Voyants de tâche",
        'Armrests': "Accoudoirs",
        'Containers & storage': "Conteneurs & stockage",
        'Displays & shelves': "Présentoirs & étagères",
        'Studio furnishings': "Mobilier de studio",
        'Masks': "Masques",
        'Others': "Autres",
        'Training': "Entraînement",
        'Training': "Entraînement",
        'Private courses': "Cours privés",
        //SERVICE
        'Express Shipping': 'Livraison express',
        'from Mon-Fri': 'du lundi au vendredi',
        'heapest in': 'plus gros dans',
        'Switzerland Prices': 'Prix Suisse',
        'Absolutely safe': 'Absolument sûr',
        'Payment Methods': 'méthodes de payement',
        'Direct from the': 'Directement de la',
        'manufacturer einkaufen': 'fabricant einkaufen',
        'free shipping': 'livraison gratuite',
        'from CHF 100.-': 'dès CHF 100.-',
        //BANNER
        'From us for you ♡': 'De nous pour vous',
        'Festive holidays with our Shellac colors': 'Des vacances festives avec nos couleurs Shellac',
        'Christmas Sale!': 'Vente de Noël !',
        'Now from CHF 50. - 10 % off EVERYTHING and from CHF 0. - a free gift! - Code -> merrynails': 'Maintenant dès CHF 50. - 10 % de réduction sur TOUT et dès CHF 0. - un cadeau offert ! - Code -> Merrynails',
        //TOP PRODUCT
        'special offer': 'offre spéciale',
        'top collection': 'haut de gamme',
        'Find your product here...': 'Trouvez votre produit ici...',
        //PARALLAX
        'fashion trends': 'tendances de la mode',
        'special offer': 'offre spéciale',
        //PARALLAX
        'SUBSCRIBE TO OUR NEWSLETTER!': "ABONNEZ-VOUS À NOTRE NEWSLETTER!",
        'Never Miss Anything From Swiss Nails Factory By Signing Up To Our Newsletter.': "Ne manquez rien de Swiss Nails Factory en vous inscrivant à notre newsletter.",
        'Enter your email': "Entrer votre Email",
        'subscribe': "s'abonner",
        'about': "sur",
        'NAILS FACTORY is one of the top suppliers to the Swiss nail salons. But our high-quality products are also the perfect choice for private use. A huge selection of nail polishes, nail art products, UV and LED lamps and many other accessories for successful nail modeling await you in our Nails Online Shop.': "NAILS FACTORY est l'un des principaux fournisseurs des salons de manucure suisses. Mais nos produits de haute qualité sont également le choix parfait pour un usage privé. Un vaste choix de vernis à ongles, produits de nail art, lampes UV et LED et de nombreux autres accessoires pour un modelage réussi des ongles vous attendent dans notre boutique en ligne d'ongles.",
        'categories': "catégories",
        'information': "information",
        'Locations': "Emplacements",
        'FAQ': "FAQ",
        'B2B request': "demande B2B",
        'Contact': "Contact",
        'Seengen location Guardian Way 6 5707 Seengen': "Seengen emplacement Guardian Way 6 5707 Seengen",
        'Phone + 41 62 771 00 21': "Téléphone : + 41 62 771 00 21",
        'Email Us': "Envoyez-nous un email",
        'Beauty is in your hands': 'La beauté est entre vos mains',
        'Login': 'Connexion',
        'Logout': 'Se déconnecter',
        'wishlist': "liste de souhaits",
        'My Account': "Mon compte",
        'Register': "S'inscrire",
        //PRODUCT
        'back': "retour",
        'Loading': "Chargement",
        'size': "Taille",
        'price': "le prix",
        'Great nail polish color polishes with an exceptionally nourishing formula. The composition works without the 18 harmful chemicals that can normally be found in nail polishes. They dry super fast. You don’t have to wait so long before you can go back to everyday business. This effect is supported by the body’s own warmth. This helps the nail polish to dry very quickly. The wait is finally over': "De superbes vernis à ongles avec une formule exceptionnellement nourrissante. La composition fonctionne sans les 18 produits chimiques nocifs que l'on trouve normalement dans les vernis à ongles. Ils sèchent super vite. Vous n'avez pas à attendre si longtemps avant de pouvoir reprendre vos activités quotidiennes. Cet effet est soutenu par la propre chaleur du corps. Cela aide le vernis à ongles à sécher très rapidement. L'attente est finalement terminée",
        'Home': "Accueil",
        'language': "Langue",
        '10 Products Par Page': "10 produits par page",
        '15 Products Par Page': "15 produits par page",
        '20 Products Par Page': "20 produits par page",
        'Sorting items': "Trier les articles",
        'High To Low': "Haut en bas",
        'Low To High': "De bas en haut",
        'Newest': "Le plus récent",
        'Asc Order': "Ordre ascendant",
        'Desc Order': "Ordre desc",
        'Your Cart is Empty': "Votre panier est vide",
        'Explore more shortlist some items.': "Explorez plus de présélection de certains éléments.",
        'Load More': "Charger plus"
      }
    },
    it: {
      translations: {
        //MENU
        'Sale': "Vendita",
        'Coupons': "Buoni",
        'Starter sets': "Set di partenza",
        'Nail varnishes': "Smalti per unghie",
        'Nail varnishes - color varnishes': 'Smalti per unghie - smalti colorati',
        'Gel & acrylic system': "Sistema gel e acrilico",
        'Acrylic system': "Sistema acrilico",
        'Poly acrylic gel': "Gel poliacrilico",
        'Dipping powder': "Polvere da immersione",
        'Gel build-up': "Ricostruzione in gel",
        'Primer & base gel': "Primer e gel base",
        'Rubber Base Gel': "Gel di base in gomma",
        'Build-up gel': "Gel di ricostruzione",
        'fiberglass': "fibra di vetro",
        'LED': "PORTATO",
        '1-phase gel': "gel monofase",
        'Cover camouflage': "Copertura mimetica",
        'French gels': "gel francesi",
        'sealing': "sigillatura",
        'UV / LED color gels': "Gel colorati UV/LED",
        'One stroke': "Un colpo",
        'Color Gels': "Gel colorati",
        'LED / UV RAL': "LED / UV RAL",
        'Trend colors': "Colori di tendenza",
        'macarons': "macarons",
        'Tropical Dream': "Sogno tropicale",
        'Neon': "Neon",
        'Fresh & Cool': "Fresco e fresco",
        'Nude': "Nudo",
        'Glitter gels': "Gel glitterati",
        'hologram': "ologramma",
        'Precious Stone': "Pietra preziosa",
        'Sparkling Wines': "Spumanti",
        'Pearl dreams': "sogni di perle",
        'High quality glitter gel': "Gel glitterato di alta qualità",
        'Milky Way': "via Lattea",
        'Mermaid': "Sirena",
        'Fashion star': "Stella della moda",
        'Magic gels': "Gel magici",
        'Effect gels': "Gel effetto",
        'Chameleon effect': "Effetto camaleonte",
        'Thermo gels': "Gel termici",
        'Gloss gels': "Gel lucidi",
        'La Vie Naturel': "La Vie Naturel",
        'Goldie Dream Ball': "Goldie Dream Ball",
        'Daffodil case': "caso narciso",
        'Pastel': "Pastello",
        'Mineral powder': "Polvere minerale",
        'Muse of Light': "Musa della Luce",
        'Pastel series': "serie pastello",
        'Catmatic': "Catmatico",
        '3D Cat Eye Gel': "Gel occhi di gatto 3D",
        'Magnets': "magneti",
        'UV / LED Shellac - gel varnish': "UV / LED Shellac - vernice gel",
        'Flexy Hybrid Gel': "Gel ibrido flessibile",
        'Nail Art': "Arte del chiodo",
        'Instruments & accessories': "Strumenti e accessori",
        '3D & 4D gel': "Gel 3D e 4D",
        'Cracking gel': "Gel screpolante",
        'Sugar powder': "zucchero a velo",
        'Painting gel': "Gel per pittura",
        'Spider gels': "Gel di ragno",
        'Airbrush': "Aerografo",
        'Airbrush stencils': "Stencil per aerografo",
        'Airbrush colors': "Colori dell'aerografo",
        'Airbrush device': "Dispositivo aerografo",
        'Pigments': "pigmenti",
        'Nail art stamping': "Stampe per unghie",
        'stencils': "stampini",
        'Stamping gel': "Gel per stampaggio",
        'Stamping accessories': "Accessori per timbratura",
        'Transfer foils': "Pellicole di trasferimento",
        'Nail Art Stickers': "Adesivi per unghie",
        'Glitter': "scintillio",
        'Rhinestones': "Strass",
        'Piercing': "Piercing",
        'Pearls and Co.': "Perle e Co.",
        'UV / LED lamps': "Lampade UV/LED",
        'Milling cutters & accessories': "Frese e accessori",
        'Router': "Router",
        'Router bits': "Bit del router",
        'Ceramic bits': "Pezzi di ceramica",
        'Polishing tool': "Strumento di lucidatura",
        'Dust': "Polvere",
        'Accessories': "Accessori",
        'Hygiene & liquids': "Igiene e liquidi",
        'Hygiene products': "Prodotti per l'igiene",
        'Cleaner & Co.': "Pulitore & Co.",
        'Nail & Foot Care': "Cura delle unghie e dei piedi",
        'Tools': "Utensili",
        'Nail Oil & Hand Cream': 'Olio per unghie e crema per le mani',
        'Nail oil & hand ': "Olio per unghie e mani",
        'Brushes & brushes': "Spazzole e spazzole",
        'Modeling templates': "Modelli di modellazione",
        'Tips & accessories': "Suggerimenti e accessori",
        'Classic tips': "Suggerimenti classici",
        'French tips': "consigli francesi",
        'Stiletto tips': "Suggerimenti per lo stiletto",
        'Tunnel tips': "Suggerimenti per il tunnel",
        'Foot tips': "Suggerimenti per i piedi",
        'Tip glue': "Colla per la punta",
        'Tip cutter': "Taglierina a punta",
        'Tips accessories': "Suggerimenti accessori",
        'Files & Buffers': "File e buffer",
        'Foot files': "File del piede",
        'Curved files': "File curvi",
        'Straight files': "File dritti",
        'Trapeze files': "File di trapezio",
        'buffer': "respingente",
        'Practice hands & fingers': "Esercitati con mani e dita",
        'Task lights': "Luci di lavoro",
        'Armrests': "braccioli",
        'Containers & storage': "Contenitori e stoccaggio",
        'Displays & shelves': "Espositori e scaffali",
        'Studio furnishings': "Arredamento studio",
        'Masks': "Maschere",
        'Others': "Altri",
        'Training': "Formazione",
        'Training': "Formazione",
        'Private courses': "Corsi privati",
        //SERVICE
        'Express Shipping': 'Spedizione espressa',
        'from Mon-Fri': 'da lun-ven',
        'heapest in': 'più ammasso in',
        'Switzerland Prices': 'Prezzi Svizzera',
        'Absolutely safe': 'Assolutamente sicuro',
        'Payment Methods': 'Modalità di pagamento',
        'Direct from the': 'Direttamente dal',
        'manufacturer einkaufen': 'produttore einkaufen',
        'free shipping': 'spedizione gratuita',
        'from CHF 100.-': 'da CHF 100.-',
        //BANNER
        'From us for you ♡': 'Da noi per te ♡',
        'Festive holidays with our Shellac colors': 'Vacanze festive con i nostri colori Shellac',
        'Christmas Sale!': 'Saldi di Natale!',
        'Now from CHF 50. - 10 % off EVERYTHING and from CHF 0. - a free gift! - Code -> merrynails': 'Ora da CHF 50. - 10% di sconto su TUTTO e da CHF 0. - un omaggio! - Codice -> merrynails',
        //TOP PRODUCT
        'special offer': 'offerta speciale',
        'top collection': 'collezione top',
        'Find your product here...': 'Trova il tuo prodotto qui...',
        //PARALLAX
        'fashion trends': 'Tendenze di moda',
        'special offer': 'offerta speciale',
        //PARALLAX
        'SUBSCRIBE TO OUR NEWSLETTER!': "ISCRIVITI ALLA NOSTRA NEWSLETTER!",
        'Never Miss Anything From Swiss Nails Factory By Signing Up To Our Newsletter.': "Non perderti nulla da Swiss Nails Factory iscrivendoti alla nostra newsletter.",
        'Enter your email': "Inserisci il tuo indirizzo email",
        'subscribe': "sottoscrivi",
        'about': "di",
        'NAILS FACTORY is one of the top suppliers to the Swiss nail salons. But our high-quality products are also the perfect choice for private use. A huge selection of nail polishes, nail art products, UV and LED lamps and many other accessories for successful nail modeling await you in our Nails Online Shop.': "NAILS FACTORY è uno dei principali fornitori dei saloni di bellezza svizzeri. Ma i nostri prodotti di alta qualità sono anche la scelta perfetta per l'uso privato. Una vasta selezione di smalti per unghie, prodotti per nail art, lampade UV e LED e molti altri accessori per modellare le unghie con successo ti aspettano nel nostro negozio online di unghie.",
        'categories': "categorie",
        'information': "informazione",
        'Locations': "Sedi",
        'FAQ': "FAQ",
        'B2B request': "Richiesta B2B",
        'Contact': "Contatto",
        'Seengen location Guardian Way 6 5707 Seengen': "Località Seengen Guardian Way 6 5707 Seengen",
        'Phone + 41 62 771 00 21': "Telefono: + 41 62 771 00 21",
        'Email Us': "Mandaci una email",
        'Beauty is in your hands': 'La bellezza è nelle tue mani',
        'Login': 'Login',
        'Logout': 'Disconnettersi',
        'wishlist': 'Lista dei desideri',
        'My Account': 'Il mio account',
        'Register': 'Registrati',
        //PRODUCT
        'back': "indietro",
        'Loading': "Caricamento in corso",
        'size': "dimensione",
        'price': "prezzo",
        'Great nail polish color polishes with an exceptionally nourishing formula. The composition works without the 18 harmful chemicals that can normally be found in nail polishes. They dry super fast. You don’t have to wait so long before you can go back to everyday business. This effect is supported by the body’s own warmth. This helps the nail polish to dry very quickly. The wait is finally over': "Grandi smalti colorati per unghie con una formula eccezionalmente nutriente. La composizione funziona senza le 18 sostanze chimiche nocive che normalmente si trovano negli smalti per unghie. Si asciugano molto velocemente. Non devi aspettare così tanto prima di poter tornare alle tue attività quotidiane. Questo effetto è supportato dal calore stesso del corpo. Questo aiuta lo smalto ad asciugarsi molto rapidamente. L'attesa è finalmente finita",
        'Home': "Casa",
        'language': "linguaggio",
        '10 Products Par Page': "10 prodotti per pagina",
        '15 Products Par Page': "15 prodotti per pagina",
        '20 Products Par Page': "20 prodotti per pagina",
        'Sorting items': "Ordinamento degli elementi",
        'High To Low': "Dall'alto al basso",
        'Low To High': "Dal basso all'alto",
        'Newest': "più recente",
        'Asc Order': "Ordine Asc",
        'Desc Order': "Ordine desc",
        'Your Cart is Empty': "Il tuo carrello è vuoto",
        'Explore more shortlist some items.': "Esplora altri elenchi di alcuni elementi.",
        'Load More': "Carica altro"
      }
    },
    pt: {
      translations: {
        //MENU
        'Sale': 'Oferta',
        'Coupons': 'Cupons',
        'Starter sets': 'Conjuntos iniciais',
        'Nail varnishes': 'Vernizes de unha',
        'Nail varnishes - color varnishes': 'Vernizes para unhas - vernizes de cor',
        'Gel & acrylic system': 'Sistema de gel e acrílico',
        'Acrylic system': 'Sistema acrílico',
        'Poly acrylic gel': 'Gel poli acrílico',
        'Dipping powder': 'Pó de imersão',
        'Gel build-up': 'Gel acumulado',
        'Primer & base gel': 'Primer e gel de base',
        'Rubber Base Gel': 'Gel de Base de Borracha',
        'Build-up gel': 'Gel de construção',
        'fiberglass': 'fibra de vidro',
        'LED': 'LIDERADA',
        '1-phase gel': 'Gel monofásico',
        'Cover camouflage': 'Camuflagem de capa',
        'French gels': 'Géis franceses',
        'sealing': 'selagem',
        'UV / LED color gels': 'Gel UV / LED',
        'One stroke': 'Uma tacada',
        'Color Gels': 'Géis de cor',
        'LED / UV RAL': 'LED / UV RAL',
        'Trend colors': 'Cores de tendência',
        'macarons': 'macarons',
        'Tropical Dream': 'Sonho tropical',
        'Neon': 'Néon',
        'Fresh & Cool': 'Fresco e fresco',
        'Nude': 'Nu',
        'Glitter gels': 'Gel de brilho',
        'hologram': 'holograma',
        'Precious Stone': 'Pedra preciosa',
        'Sparkling Wines': 'Vinhos espumantes',
        'Pearl dreams': 'Sonhos de pérola',
        'High quality glitter gel': 'Gel glitter de alta qualidade',
        'Milky Way': 'via Láctea',
        'Mermaid': 'sereia',
        'Fashion star': 'Estrela da moda',
        'Magic gels': 'Géis mágicos',
        'Effect gels': 'Géis de efeito',
        'Chameleon effect': 'Efeito camaleão',
        'Thermo gels': 'Termogéis',
        'Gloss gels': 'Géis de brilho',
        'La Vie Naturel': 'La Vie Naturel',
        'Goldie Dream Ball': 'Goldie Dream Ball',
        'Daffodil case': 'Estojo narciso',
        'Pastel': 'Pastel',
        'Mineral powder': 'Pó mineral',
        'Muse of Light': 'Musa de luz',
        'Pastel series': 'Série Pastel',
        'Catmatic': 'Catmatic',
        '3D Cat Eye Gel': '3D Cat Eye Gel',
        'Magnets': 'Ímanes',
        'UV / LED Shellac - gel varnish': 'UV / LED Shellac - verniz em gel',
        'Flexy Hybrid Gel': 'Gel Híbrido Flexy',
        'Nail Art': 'Arte de unha',
        'Instruments & accessories': 'Instrumentos e acessórios',
        '3D & 4D gel': 'Gel 3D e 4D',
        'Cracking gel': 'Gel para rachar',
        'Sugar powder': 'Açucar em pó',
        'Painting gel': 'Gel de pintura',
        'Spider gels': 'Gel de aranha',
        'Airbrush': 'Aerógrafo',
        'Airbrush stencils': 'Estênceis de aerógrafo',
        'Airbrush colors': 'Cores do aerógrafo',
        'Airbrush device': 'Dispositivo aerógrafo',
        'Pigments': 'Pigmentos',
        'Nail art stamping': 'Estampagem de Nail Art',
        'stencils': 'estênceis',
        'Stamping gel': 'Gel de estampagem',
        'Stamping accessories': 'Acessórios para estamparia',
        'Transfer foils': 'Folhas de transferência',
        'Nail Art Stickers': 'Adesivos de Nail Art',
        'Glitter': 'Brilho',
        'Rhinestones': 'Strass',
        'Piercing': 'Piercing',
        'Pearls and Co.': 'Pearls and Co.',
        'UV / LED lamps': 'Lâmpadas UV / LED',
        'Milling cutters & accessories': 'Fresas e acessórios',
        'Router': 'Roteador',
        'Router bits': 'Bits de roteador',
        'Ceramic bits': 'Pedaços de cerâmica',
        'Polishing tool': 'Ferramenta de polimento',
        'Dust': 'Pó',
        'Accessories': 'Acessórios',
        'Hygiene & liquids': 'Higiene e líquidos',
        'Hygiene products': 'Produtos de higiene',
        'Cleaner & Co.': 'Cleaner & Co.',
        'Nail & Foot Care': 'Tratamento de unhas e pés',
        'Tools': 'Ferramentas',
        'Nail Oil & Hand Cream': 'Óleo para unhas e creme para as mãos',
        'Nail oil & hand ': 'Óleo para unhas e mãos',
        'Brushes & brushes': 'Pincéis e pincéis',
        'Modeling templates': 'Modelos de modelagem',
        'Tips & accessories': 'Dicas e acessórios',
        'Classic tips': 'Dicas clássicas',
        'French tips': 'Dicas francesas',
        'Stiletto tips': 'Pontas de estilete',
        'Tunnel tips': 'Dicas de túnel',
        'Foot tips': 'Pontas dos pés',
        'Tip glue': 'Cola de ponta',
        'Tip cutter': 'Cortador de pontas',
        'Tips accessories': 'Acessórios de dicas',
        'Files & Buffers': 'Arquivos e buffers',
        'Foot files': 'Limas de pé',
        'Curved files': 'Arquivos curvos',
        'Straight files': 'Arquivos diretos',
        'Trapeze files': 'Arquivos trapézio',
        'buffer': 'amortecedor',
        'Practice hands & fingers': 'Pratique mãos e dedos',
        'Task lights': 'Luzes de tarefas',
        'Armrests': 'Braços',
        'Containers & storage': 'Recipientes e armazenamento',
        'Displays & shelves': 'Expositores e prateleiras',
        'Studio furnishings': 'Móveis de estúdio',
        'Masks': 'Máscaras',
        'Others': 'Outras',
        'Training': 'Treinamento',
        'Training': 'Treinamento',
        'Private courses': 'Cursos particulares',
        //SERVICE
        'Express Shipping': 'Encomenda expressa',
        'from Mon-Fri': 'de seg-sex',
        'heapest in': 'mais alto em',
        'Switzerland Prices': 'Preços da Suíça',
        'Absolutely safe': 'Absolutamente seguro',
        'Payment Methods': 'Métodos de Pagamento',
        'Direct from the': 'Direto do',
        'manufacturer einkaufen': 'fabricante einkaufen',
        'free shipping': 'Envio Grátis',
        'from CHF 100.-': 'de CHF 100.-',
        //BANNER
        'From us for you ♡': 'De nós para você ♡',
        'Festive holidays with our Shellac colors': 'Férias festivas com as nossas cores Shellac',
        'Christmas Sale!': 'Promoção de Natal!',
        'Now from CHF 50. - 10 % off EVERYTHING and from CHF 0. - a free gift! - Code -> merrynails': 'Agora a partir de CHF 50. - 10% de desconto em TUDO e a partir de CHF 0. - um presente grátis! - Código -> merrynails',
        //TOP PRODUCT
        'special offer': 'oferta especial',
        'top collection': 'coleção superior',
        'Find your product here...': 'Encontre seu produto aqui ...',
        //PARALLAX
        'fashion trends': 'tendências da moda',
        'special offer': 'oferta especial',
        //PARALLAX
        'SUBSCRIBE TO OUR NEWSLETTER!': 'ASSINE A NOSSA NEWSLETTER!',
        'Never Miss Anything From Swiss Nails Factory By Signing Up To Our Newsletter.': 'Nunca perca nada da Swiss Nails Factory, assinando nosso boletim informativo.',
        'Enter your email': 'Digite seu e-mail',
        'subscribe': 'se inscrever',
        'about': 'cerca de',
        'NAILS FACTORY is one of the top suppliers to the Swiss nail salons. But our high-quality products are also the perfect choice for private use. A huge selection of nail polishes, nail art products, UV and LED lamps and many other accessories for successful nail modeling await you in our Nails Online Shop.': 'NAILS FACTORY é um dos principais fornecedores dos salões de manicure suíços. Mas nossos produtos de alta qualidade também são a escolha perfeita para uso privado. Uma grande seleção de esmaltes, produtos para unhas artísticas, lâmpadas UV e LED e muitos outros acessórios para modelagem de unhas bem-sucedida esperam por você em nossa Loja Online Nails.',
        'categories': 'categorias',
        'information': 'em formação',
        'Locations': 'Localizações',
        'FAQ': 'Perguntas frequentes',
        'B2B request': 'Solicitação de B2B',
        'Contact': 'Contato',
        'Seengen location Guardian Way 6 5707 Seengen': 'Localização Seengen Guardian Way 6 5707 Seengen',
        'Phone + 41 62 771 00 21': 'Telefone: + 41 62 771 00 21',
        'Email Us': 'Envia-nos um email',
        'Beauty is in your hands': 'A beleza está em suas mãos',
        'Login': 'Conecte-se',
        'Logout': 'Sair',
        'wishlist': 'Lista de Desejos',
        'My Account': 'Minha conta',
        'Register': 'Registro',
        //PRODUCT
        'back': 'costas',
        'Loading': 'Carregando',
        'size': 'Tamanho',
        'price': 'preço',
        'Great nail polish color polishes with an exceptionally nourishing formula. The composition works without the 18 harmful chemicals that can normally be found in nail polishes. They dry super fast. You don’t have to wait so long before you can go back to everyday business. This effect is supported by the body’s own warmth. This helps the nail polish to dry very quickly. The wait is finally over': 'Ótimos esmaltes de cor com uma fórmula excepcionalmente nutritiva. A composição funciona sem os 18 produtos químicos prejudiciais que normalmente podem ser encontrados em esmaltes. Eles secam super rápido. Você não precisa esperar tanto para voltar aos negócios do dia-a-dia. Este efeito é sustentado pelo calor do próprio corpo. Isso ajuda o esmalte a secar muito rapidamente. A espera finalmente acabou',
        'Home': 'Casa',
        'language': 'língua',
        '10 Products Par Page': 'Página par de 10 produtos',
        '15 Products Par Page': 'Página par de 15 produtos',
        '20 Products Par Page': 'Página par de 20 produtos',
        'Sorting items': 'Classificando itens',
        'High To Low': 'Decrescente',
        'Low To High': 'Baixo para alto',
        'Newest': 'O mais novo',
        'Asc Order': 'Ordem Asc',
        'Desc Order': 'Ordem de Desc.',
        'Your Cart is Empty': 'Seu carrinho está vazio',
        'Explore more shortlist some items.': 'Explore mais alguns itens da lista restrita.',
        'Load More': 'Carregue mais'
      }
    },
    sq: {
      translations: {
        //MENU
        'Sale': 'Shitje',
        'Coupons': 'Kuponët',
        'Starter sets': 'Komplete fillestare',
        'Nail varnishes': 'Llak për thonjtë',
        'Nail varnishes - color varnishes': 'Llak i thonjve - llaqe me ngjyra',
        'Gel & acrylic system': 'Sistem xhel & akrilik',
        'Acrylic system': 'Sistemi akrilik',
        'Poly acrylic gel': 'Xhel poliakrilik',
        'Dipping powder': 'Pluhur zhytjeje',
        'Gel build-up': 'Ndërtimi i xhelit',
        'Primer & base gel': 'Primer dhe xhel bazë',
        'Rubber Base Gel': 'Xhel me bazë gome',
        'Build-up gel': 'Xhel ndërtimi',
        'fiberglass': 'tekstil me fije qelqi',
        'LED': 'LED',
        '1-phase gel': 'Xhel 1fazor',
        'Cover camouflage': 'Kamuflazh mbulesë',
        'French gels': 'Xhel francez',
        'sealing': 'vulosje',
        'UV / LED color gels': 'Xhel me ngjyra UV/LED',
        'One stroke': 'Një goditje',
        'Color Gels': 'Xhel me ngjyra',
        'LED / UV RAL': 'LED / UV RAL',
        'Trend colors': 'Ngjyrat në trend',
        'macarons': 'makarona',
        'Tropical Dream': 'Ëndrra tropikale',
        'Neon': 'Neoni',
        'Fresh & Cool': 'E freskët dhe e ftohtë',
        'Nude': 'Nudo',
        'Glitter gels': 'Xhel me shkëlqim',
        'hologram': 'hologrami',
        'Precious Stone': 'Guri i çmuar',
        'Sparkling Wines': 'Verërat e gazuara',
        'Pearl dreams': 'Ëndrrat me perla',
        'High quality glitter gel': 'Xhel me shkëlqim me cilësi të lartë',
        'Milky Way': 'rruga e Qumështit',
        'Mermaid': 'Sirenë',
        'Fashion star': 'Ylli i modës',
        'Magic gels': 'Xhel magjik',
        'Effect gels': 'Xhel me efekt',
        'Chameleon effect': 'Efekti i kameleonit',
        'Thermo gels': 'Xhel termo',
        'Gloss gels': 'Xhel me shkëlqim',
        'La Vie Naturel': 'La Vie Naturel',
        'Goldie Dream Ball': 'Goldie Dream Ball',
        'Daffodil case': 'Rasti me daffodil',
        'Pastel': 'Pastel',
        'Mineral powder': 'Pluhur mineral',
        'Muse of Light': 'Muza e Dritës',
        'Pastel series': 'Seri pastel',
        'Catmatic': 'Katatike',
        '3D Cat Eye Gel': 'Xhel 3D për sytë e maces',
        'Magnets': 'Magnetët',
        'UV / LED Shellac - gel varnish': 'UV / LED Shellac - llak xhel',
        'Flexy Hybrid Gel': 'Xhel Hibrid Flexy',
        'Nail Art': 'Art thonjsh',
        'Instruments & accessories': 'Instrumente dhe aksesorë',
        '3D & 4D gel': 'Xhel 3D dhe 4D',
        'Cracking gel': 'Xhel plasaritje',
        'Sugar powder': 'Pluhur sheqeri',
        'Painting gel': 'Xhel për lyerje',
        'Spider gels': 'Xhel merimangash',
        'Airbrush': 'Airbrush',
        'Airbrush stencils': 'Stencilat e furçave të ajrit',
        'Airbrush colors': 'Ngjyrat e furçave të ajrit',
        'Airbrush device': 'Pajisja Airbrush',
        'Pigments': 'Pigmentet',
        'Nail art stamping': 'Stampimi i artit të thonjve',
        'stencils': 'shabllone',
        'Stamping gel': 'Xhel për vulosje',
        'Stamping accessories': 'Aksesorë stampimi',
        'Transfer foils': 'Transferoni fletët',
        'Nail Art Stickers': 'Ngjitëse për artin e thonjve',
        'Glitter': 'Shkëlqim',
        'Rhinestones': 'Rhinestones',
        'Piercing': 'Piercing',
        'Pearls and Co.': 'Perlat dhe Co.',
        'UV / LED lamps': 'Llambat UV/LED',
        'Milling cutters & accessories': 'Frezues dhe aksesorë',
        'Router': 'Ruteri',
        'Router bits': 'Bitët e ruterit',
        'Ceramic bits': 'Copa qeramike',
        'Polishing tool': 'Mjet lustrim',
        'Dust': 'Pluhuri',
        'Accessories': 'Aksesorë',
        'Hygiene & liquids': 'Higjiena dhe lëngjet',
        'Hygiene products': 'Produkte higjienike',
        'Cleaner & Co.': 'Cleaner & Co.',
        'Nail & Foot Care': 'Kujdesi për thonjtë dhe këmbët',
        'Tools': 'Mjetet',
        'Nail Oil & Hand Cream': 'Krem për duar dhe vaj për thonjtë',
        'Nail oil & hand ': 'Vaj thonjsh dhe duar',
        'Brushes & brushes': 'Furça & furça',
        'Modeling templates': 'Modelet e modelimit',
        'Tips & accessories': 'Këshilla dhe aksesorë',
        'Classic tips': 'Këshilla klasike',
        'French tips': 'Këshilla franceze',
        'Stiletto tips': 'Këshilla për stilet',
        'Tunnel tips': 'Këshilla për tunelin',
        'Foot tips': 'Majat e këmbëve',
        'Tip glue': 'Ngjitës me majë',
        'Tip cutter': 'Prerës i majave',
        'Tips accessories': 'Këshilla për aksesorët',
        'Files & Buffers': 'Skedarët & Buferët',
        'Foot files': 'Skedarët e këmbëve',
        'Curved files': 'Skedarët e lakuar',
        'Straight files': 'Skedarët e drejtë',
        'Trapeze files': 'Skedarët e trapezit',
        'buffer': 'tampon',
        'Practice hands & fingers': 'Praktikoni duart dhe gishtat',
        'Task lights': 'Dritat e detyrave',
        'Armrests': 'Mbështetëse krahësh',
        'Containers & storage': 'Kontejnerët dhe magazinimi',
        'Displays & shelves': 'Ekranet dhe raftet',
        'Studio furnishings': 'Arredimi i studios',
        'Masks': 'Maska',
        'Others': 'Të tjerët',
        'Training': 'Trajnimi',
        'Training': 'Trajnimi',
        'Private courses': 'Kurse private',
        //SERVICE
        'Express Shipping': 'Transporti Express',
        'from Mon-Fri': 'nga e Hëna-Premte',
        'heapest in': 'më e grumbulluara në',
        'Switzerland Prices': 'Çmimet në Zvicër',
        'Absolutely safe': 'Absolutisht i sigurt',
        'Payment Methods': 'menyra pagese',
        'Direct from the': 'Direkt nga',
        'manufacturer einkaufen': 'prodhuesi einkaufen',
        'free shipping': 'Transport falas',
        'from CHF 100.-': 'nga 100 CHF.-',
        //BANNER
        'From us for you ♡': 'Nga ne për ju ♡',
        'Festive holidays with our Shellac colors': 'Festat festive me ngjyrat tona Shellac',
        'Christmas Sale!': 'Shitje Krishtlindjesh!',
        'Now from CHF 50. - 10 % off EVERYTHING and from CHF 0. - a free gift! - Code -> merrynails': 'Tani nga 50 CHF. - 10% ZBRITJE PËR GJITHÇKA dhe nga CHF 0. - dhuratë falas! - Kodi -> gozhdë',
        //TOP PRODUCT
        'special offer': 'ofertë speciale',
        'top collection': 'koleksioni më i lartë',
        'Find your product here...': 'Gjeni produktin tuaj këtu...',
        //PARALLAX
        'fashion trends': 'tendencat e modës',
        'special offer': 'ofertë speciale',
        //PARALLAX
        'SUBSCRIBE TO OUR NEWSLETTER!': 'ABONOHUNI NË BULETINI TONË!',
        'Never Miss Anything From Swiss Nails Factory By Signing Up To Our Newsletter.': 'Mos humbisni kurrë asgjë nga Swiss Nails Factory Duke u regjistruar në buletinin tonë.',
        'Enter your email': 'Shkruani emailin tuaj',
        'subscribe': 'abonohen',
        'about': 'rreth',
        'NAILS FACTORY is one of the top suppliers to the Swiss nail salons. But our high-quality products are also the perfect choice for private use. A huge selection of nail polishes, nail art products, UV and LED lamps and many other accessories for successful nail modeling await you in our Nails Online Shop.': 'Nails FACTORY është një nga furnizuesit kryesorë të salloneve zvicerane të thonjve. Por produktet tona me cilësi të lartë janë gjithashtu zgjidhja perfekte për përdorim privat. Një përzgjedhje e madhe e manikyrave, produkteve të artit të thonjve, llambave UV dhe LED dhe shumë aksesorë të tjerë për modelim të suksesshëm të thonjve ju presin në dyqanin tonë Nails Online.',
        'categories': 'kategoritë',
        'information': 'informacion',
        'Locations': 'Vendndodhjet',
        'FAQ': 'FAQ',
        'B2B request': 'Kërkesa B2B',
        'Contact': 'Kontaktoni',
        'Seengen location Guardian Way 6 5707 Seengen': 'Vendndodhja Seengen Guardian Way 6 5707 Seengen',
        'Phone + 41 62 771 00 21': 'Telefoni: + 41 62 771 00 21',
        'Email Us': 'Na dërgoni me email',
        'Beauty is in your hands': 'Bukuria është në duart tuaja',
        'Login': 'Identifikohu',
        'Logout': 'Shkyç',
        'wishlist': 'lista e dëshirave',
        'My Account': 'Llogaria ime',
        'Register': 'Regjistrohu',
        //PRODUCT
        'back': "mbrapa",
        'Loading': "Po ngarkohet",
        'size': "madhësia",
        'price': "çmimi",
        'Great nail polish color polishes with an exceptionally nourishing formula. The composition works without the 18 harmful chemicals that can normally be found in nail polishes. They dry super fast. You don’t have to wait so long before you can go back to everyday business. This effect is supported by the body’s own warmth. This helps the nail polish to dry very quickly. The wait is finally over': "Lustrime të shkëlqyera të manikyrit me një formulë jashtëzakonisht ushqyese. Përbërja funksionon pa 18 kimikatet e dëmshme që normalisht mund të gjenden në manikyrin e thonjve. Ata thahen super shpejt. Nuk duhet të prisni kaq gjatë përpara se të mund t'i ktheheni biznesit të përditshëm. Ky efekt mbështetet nga vetë ngrohtësia e trupit. Kjo ndihmon që manikyri të thahet shumë shpejt. Pritja më në fund ka marrë fund",
        'Home': "Shtëpi",
        'language': "gjuhe",
        '10 Products Par Page': "10 Produkte Par Faqe",
        '15 Products Par Page': "15 Produkte Par Faqe",
        '20 Products Par Page': "20 Produkte Par Faqe",
        'Sorting items': "Renditja e artikujve",
        'High To Low': "Nga lart në të ulët",
        'Low To High': "E ulët në të lartë",
        'Newest': "Më të rejat",
        'Asc Order': "Urdhri Asc",
        'Desc Order': "Rendit Desc",
        'Your Cart is Empty': "Shporta juaj është bosh",
        'Explore more shortlist some items.': "Eksploroni më shumë, lista e disa artikujve.",
        'Load More': "Ngarko më shumë"
      }
    },
    zh: {
      translations: {
        //MENU
        'Sale': '销售',
        'Coupons': '优惠券',
        'Starter sets': '入门套装',
        'Nail varnishes - color varnishes': '指甲油 - 彩色清漆',
        'Nail varnishes': '指甲油',
        'Gel & acrylic system': '凝胶和丙烯酸系统',
        'Acrylic system': '亚克力系统',
        'Poly acrylic gel': '聚丙烯酸凝胶',
        'Dipping powder': '蘸粉',
        'Gel build-up': '凝胶堆积',
        'Primer & base gel': '底漆和基础凝胶',
        'Rubber Base Gel': '橡胶基础凝胶',
        'Build-up gel': '修护凝胶',
        'fiberglass': '玻璃纤维',
        'LED': '引领',
        '1-phase gel': '一相凝胶',
        'Cover camouflage': '封面迷彩',
        'French gels': '法国凝胶',
        'sealing': '密封',
        'UV / LED color gels': 'UV / LED 彩色凝胶',
        'One stroke': '一招',
        'Color Gels': '彩色凝胶',
        'LED / UV RAL': 'LED / 紫外线 RAL',
        'Trend colors': '流行色',
        'macarons': '马卡龙',
        'Tropical Dream': '热带梦想',
        'Neon': '氖',
        'Fresh & Cool': '清新凉爽',
        'Nude': '裸体',
        'Glitter gels': '闪光凝胶',
        'hologram': '全息图',
        'Precious Stone': '宝石',
        'Sparkling Wines': '起泡酒',
        'Pearl dreams': '珍珠梦',
        'High quality glitter gel': '高品质闪光凝胶',
        'Milky Way': '银河系',
        'Mermaid': '美人鱼',
        'Fashion star': '时尚明星',
        'Magic gels': '魔法凝胶',
        'Effect gels': '效果凝胶',
        'Chameleon effect': '变色龙效应',
        'Thermo gels': '热凝胶',
        'Gloss gels': '光泽凝胶',
        'La Vie Naturel': '自然生活',
        'Goldie Dream Ball': '戈尔迪梦想球',
        'Daffodil case': '水仙花案',
        'Pastel': '粉彩',
        'Mineral powder': '矿粉',
        'Muse of Light': '光之缪斯',
        'Pastel series': '粉彩系列',
        'Catmatic': '卡马蒂克',
        '3D Cat Eye Gel': '3D猫眼凝胶',
        'Magnets': '磁铁',
        'UV / LED Shellac - gel varnish': 'UV / LED 虫胶 - 凝胶清漆',
        'Flexy Hybrid Gel': 'Flexy 混合凝胶',
        'Nail Art': '美甲',
        'Instruments & accessories': '仪器及配件',
        '3D & 4D gel': '3D & 4D 凝胶',
        'Cracking gel': '裂解凝胶',
        'Sugar powder': '糖粉',
        'Painting gel': '绘画凝胶',
        'Spider gels': '蜘蛛凝胶',
        'Airbrush': '喷枪',
        'Airbrush stencils': '喷枪模具',
        'Airbrush colors': '喷枪颜色',
        'Airbrush device': '喷枪装置',
        'Pigments': '颜料',
        'Nail art stamping': '美甲烫印',
        'stencils': '模板',
        'Stamping gel': '冲压胶',
        'Stamping accessories': '冲压配件',
        'Transfer foils': '转印箔',
        'Nail Art Stickers': '美甲贴纸',
        'Glitter': '闪光',
        'Rhinestones': '水钻',
        'Piercing': '冲孔',
        'Pearls and Co.': '珍珠公司',
        'UV / LED lamps': 'UV/LED灯',
        'Milling cutters & accessories': '铣刀及配件',
        'Router': '路由器',
        'Router bits': '路由器位',
        'Ceramic bits': '陶瓷钻头',
        'Polishing tool': '抛光工具',
        'Dust': '灰尘',
        'Accessories': '配件',
        'Hygiene & liquids': '卫生和液体',
        'Hygiene products': '卫生用品',
        'Cleaner & Co.': '清洁剂公司',
        'Nail & Foot Care': '指甲和足部护理',
        'Tools': '工具',
        'Nail Oil & Hand Cream': '指甲油和护手霜',
        'Nail oil & hand ': '指甲油和手',
        'Brushes & brushes': '刷子和刷子',
        'Modeling templates': '建模模板',
        'Tips & accessories': '提示和配件',
        'Classic tips': '经典提示',
        'French tips': '法语小贴士',
        'Stiletto tips': '高跟鞋小贴士',
        'Tunnel tips': '隧道提示',
        'Foot tips': '足贴',
        'Tip glue': '尖头胶',
        'Tip cutter': '尖端刀具',
        'Tips accessories': '提示配件',
        'Files & Buffers': '文件和缓冲区',
        'Foot files': '足锉',
        'Curved files': '弯曲文件',
        'Straight files': '直接文件',
        'Trapeze files': '飞人文件',
        'buffer': '缓冲',
        'Practice hands & fingers': '练习手和手指',
        'Task lights': '任务灯',
        'Armrests': '扶手',
        'Containers & storage': '容器和存储',
        'Displays & shelves': '展示架和货架',
        'Studio furnishings': '工作室家具',
        'Masks': '面具',
        'Others': '其他',
        'Training': '训练',
        'Training': '训练',
        'Private courses': '私人课程',
        //SERVICE
        'Express Shipping': '快递',
        'from Mon-Fri': '周一至周五',
        'heapest in': '堆在',
        'Switzerland Prices': '瑞士 价格',
        'Absolutely safe': '绝对安全',
        'Payment Methods': '支付方式',
        'Direct from the': '直接从',
        'manufacturer einkaufen': '制造商 einkaufen',
        'free shipping': '免运费',
        'from CHF 100.-': '从 100 瑞士法郎起。-',
        //BANNER
        'From us for you ♡': '我们为你而来♡',
        'Festive holidays with our Shellac colors': '用我们的虫胶颜色庆祝节日',
        'Christmas Sale!': '圣诞特卖',
        'Now from CHF 50. - 10 % off EVERYTHING and from CHF 0. - a free gift! - Code -> merrynails': '现在 50 瑞士法郎起。 - 一切都可享受 10 % 的折扣，0 瑞士法郎起。 - 免费礼物 - 代码 -> merrynails',
        //TOP PRODUCT
        'special offer': '特价',
        'top collection': '顶级收藏',
        'Find your product here...': '在这里找到您的产品...',
        //PARALLAX
        'fashion trends': '流行趋势',
        'special offer': '特价',
        //OTHERS
        'SUBSCRIBE TO OUR NEWSLETTER!': '订阅我们的新闻',
        'Never Miss Anything From Swiss Nails Factory By Signing Up To Our Newsletter.': '订阅我们的时事通讯，绝不会错过瑞士美甲厂的任何产品。',
        'Enter your email': '输入你的电子邮箱',
        'subscribe': '订阅',
        'about': '关于',
        'NAILS FACTORY is one of the top suppliers to the Swiss nail salons. But our high-quality products are also the perfect choice for private use. A huge selection of nail polishes, nail art products, UV and LED lamps and many other accessories for successful nail modeling await you in our Nails Online Shop.': 'NAILS FACTORY 是瑞士美甲沙龙的顶级供应商之一。但我们的高品质产品也是私人使用的完美选择。在我们的 Nails Online Shop 中，有大量可供选择的指甲油、美甲产品、UV 和 LED 灯以及许多其他成功的指甲造型配件等着您。',
        'categories': '类别',
        'information': '信息',
        'Locations': '地点',
        'FAQ': '常问问题',
        'B2B request': 'B2B 请求',
        'Contact': '接触',
        'Seengen location Guardian Way 6 5707 Seengen': '森根位置 Guardian Way 6 5707 森根',
        'Phone + 41 62 771 00 21': '电话 + 41 62 771 00 21',
        'Email Us': '给我们发电子邮件',
        'Beauty is in your hands': '美丽在你手中',
        'Login': '登录',
        'Logout': '登出',
        'wishlist': '心愿单',
        'My Account': '我的帐户',
        'Register': '登记',
        //PRODUCT
        'back': '背部',
        'Loading': '加载中',
        'size': '尺寸',
        'price': '价格',
        'Great nail polish color polishes with an exceptionally nourishing formula. The composition works without the 18 harmful chemicals that can normally be found in nail polishes. They dry super fast. You don’t have to wait so long before you can go back to everyday business. This effect is supported by the body’s own warmth. This helps the nail polish to dry very quickly. The wait is finally over': '出色的指甲油颜色抛光剂，具有极其滋养的配方。该组合物不含指甲油中常见的 18 种有害化学物质。它们干得超级快。您无需等待很长时间即可恢复日常工作。这种效果是由身体自身的温暖支持的。这有助于指甲油快速干燥。漫长的等待终于结束了',
        'Home': '家',
        'language': '语',
        '10 Products Par Page': '10 产品标准页',
        '15 Products Par Page': '15 产品标准页',
        '20 Products Par Page': '20 产品标准页',
        'Sorting items': '排序项目',
        'High To Low': '高到低',
        'Low To High': '从低到高',
        'Newest': '最新',
        'Asc Order': '升序',
        'Desc Order': '降序',
        'Your Cart is Empty': '您的购物车是空的',
        'Explore more shortlist some items.': '探索更多候选名单一些项目。',
        'Load More': '装载更多'
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
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"lang\":\"Deutsch\",\"val\":\"de\"},{\"lang\":\"English\",\"val\":\"en\"},{\"lang\":\"Española\",\"val\":\"es\"},{\"lang\":\"Français\",\"val\":\"fr\"},{\"lang\":\"Italiano\",\"val\":\"it\"},{\"lang\":\"Português\",\"val\":\"pt\"},{\"lang\":\"Shqip\",\"val\":\"sq\"},{\"lang\":\"中国人\",\"val\":\"zh\"}]");

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
  path: '/shop/left_sidebar',
  title: 'Sale',
  type: 'link',
  arrow: false
}, {
  path: '/shop/left_sidebar',
  title: 'Coupons',
  type: 'link',
  arrow: false
}, {
  path: '/shop/left_sidebar',
  title: 'Starter sets',
  type: 'link',
  arrow: false
}, {
  path: '/shop/left_sidebar',
  title: 'Nail varnishes - color varnishes',
  type: 'link',
  arrow: false
}, {
  title: 'Gel & acrylic system',
  type: 'sub',
  children: [{
    title: 'Acrylic system',
    path: '/shop/left_sidebar',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Poly acrylic gel',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Dipping powder',
    type: 'link'
  }, {
    title: 'Gel build-up',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Primer & base gel',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Rubber Base Gel',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Build-up gel',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'fiberglass',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'LED',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: '1-phase gel',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Cover camouflage',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'French gels',
      type: 'link'
    }]
  }, {
    path: '/shop/left_sidebar',
    title: 'sealing',
    type: 'link'
  }]
}, {
  title: 'UV / LED color gels',
  type: 'sub',
  children: [{
    path: '/shop/left_sidebar',
    title: 'One stroke',
    type: 'link'
  }, {
    title: 'Color Gels',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'LED / UV RAL',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Trend colors',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'macarons',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Tropical Dream',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Neon',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Fresh & Cool',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Nude',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Champions Red',
      type: 'link'
    }]
  }, {
    title: 'Glitter gels',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'hologram',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Precious Stone',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Sparkling Wines',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Pearl dreams',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'High quality glitter gel',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Milky Way',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Mermaid',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Fashion star',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Magic gels',
      type: 'link'
    }]
  }, {
    title: 'Effect gels',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Chameleon effect',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Thermo gels',
      type: 'link'
    }]
  }, {
    title: 'Gloss gels',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'La Vie Naturel',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Goldie Dream Ball',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Daffodil case',
      type: 'link'
    }]
  }, {
    title: 'Pastel',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Mineral powder',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Muse of Light',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Pastel series',
      type: 'link'
    }]
  }, {
    title: 'Catmatic',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: '3D Cat Eye Gel',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Magnets',
      type: 'link'
    }]
  }, {
    path: '/shop/left_sidebar',
    title: 'UV / LED Shellac - gel varnish',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Flexy Hybrid Gel',
    type: 'link'
  }]
}, {
  title: 'Nail Art',
  type: 'sub',
  children: [{
    path: '/shop/left_sidebar',
    title: 'Instruments & accessories',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: '3D & 4D gel',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Cracking gel',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Sugar powder',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Painting gel',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Spider gels',
    type: 'link'
  }, {
    title: 'Airbrush',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Airbrush stencils',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Airbrush colors',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Airbrush device',
      type: 'link'
    }]
  }, {
    path: '/shop/left_sidebar',
    title: 'Pigments',
    type: 'link'
  }, {
    title: 'Nail art stamping',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'stencils',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Stamping gel',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Stamping accessories',
      type: 'link'
    }]
  }, {
    path: '/shop/left_sidebar',
    title: 'Transfer foils',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Nail Art Stickers',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Glitter',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Rhinestones',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Piercing',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Pearls and Co.',
    type: 'link'
  }]
}, {
  path: '/shop/left_sidebar',
  title: 'UV / LED lamps',
  type: 'link',
  arrow: false
}, {
  title: 'Milling cutters & accessories',
  type: 'sub',
  children: [{
    path: '/shop/left_sidebar',
    title: 'Router',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Router bits',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Ceramic bits',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Polishing tool',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Dust',
    type: 'link'
  }]
}, {
  title: 'Accessories',
  type: 'sub',
  children: [{
    title: 'Hygiene & liquids',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Hygiene products',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Cleaner & Co.',
      type: 'link'
    }]
  }, {
    title: 'Nail & Foot Care',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Tools',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Nail oil & hand cream',
      type: 'link'
    }]
  }, {
    path: '/shop/left_sidebar',
    title: 'Brushes & brushes',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Modeling templates',
    type: 'link'
  }, {
    title: 'Tips & accessories',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Classic tips',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'French tips',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Stiletto tips',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Tunnel tips',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Foot tips',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Tip glue',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Tip cutter',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Tips accessories',
      type: 'link'
    }]
  }, {
    title: 'Files & Buffers',
    type: 'sub',
    children: [{
      path: '/shop/left_sidebar',
      title: 'Foot files',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Curved files',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Straight files',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'Trapeze files',
      type: 'link'
    }, {
      path: '/shop/left_sidebar',
      title: 'buffer',
      type: 'link'
    }]
  }, {
    path: '/shop/left_sidebar',
    title: 'Practice hands & fingers',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Task lights',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Armrests',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Containers & storage',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Displays & shelves',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Studio furnishings',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Masks',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Others',
    type: 'link'
  }]
}, {
  title: 'Training',
  type: 'sub',
  children: [{
    path: '/shop/left_sidebar',
    title: 'Training',
    type: 'link'
  }, {
    path: '/shop/left_sidebar',
    title: 'Private courses',
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\containers\\Cart.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\containers\\CartContainer.js";
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\footers\\common\\MasterFooter.js";
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
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
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
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("footer", {
    className: footerClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, newLatter ? __jsx("div", {
    className: footerLayOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: containerFluid ? containerFluid : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: footerSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "subscribe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, t('SUBSCRIBE TO OUR NEWSLETTER!')), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, t('Never Miss Anything From Swiss Nails Factory By Signing Up To Our Newsletter.'))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    className: "form-inline subscribe-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: "mx-sm-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    className: "form-control",
    id: "exampleFormControlInput1",
    placeholder: t("Enter your email"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    className: "btn btn-solid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 23
    }
  }, t('subscribe')))))))) : "", __jsx("section", {
    className: belowSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: belowContainerFluid ? belowContainerFluid : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "footer-theme partition-f",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "4",
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: `footer-title ${isOpen && collapse == 1 ? "active" : ""} footer-mobile-title`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 95,
      columnNumber: 19
    }
  }, t('about'), __jsx("span", {
    className: "according-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: width ? collapse === 1 ? isOpen : false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "footer-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "footer-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx(_headers_common_logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    logo: logoName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 23
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, t('NAILS FACTORY is one of the top suppliers to the Swiss nail salons. But our high-quality products are also the perfect choice for private use. A huge selection of nail polishes, nail art products, UV and LED lamps and many other accessories for successful nail modeling await you in our Nails Online Shop.')), __jsx("div", {
    className: "footer-social",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/Nails-Factorych-103119622035783",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "fa fa-facebook",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.google.com/maps/place/Nails+Factory/@47.3246674,8.2088617,15z/data=!4m5!3m4!1s0x0:0x6a223ed1dd95e69f!8m2!3d47.3246674!4d8.2088617?sa=X&ved=2ahUKEwjg39TAwI7sAhVyQxUIHb6uA8kQ_BIwDXoECBYQCA&shorturl=1",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "fa fa-google-plus",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/nailsfactory_schweiz/?hl=en",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "fa fa-instagram",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 29
    }
  })))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "offset-xl-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: `footer-title ${isOpen && collapse == 2 ? "active" : ""} `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
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
      lineNumber: 150,
      columnNumber: 21
    }
  }, t('categories'), __jsx("span", {
    className: "according-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 23
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: width ? collapse === 2 ? isOpen : false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "footer-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 29
    }
  }, t('Starter sets')))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 29
    }
  }, " ", t('Instruments & accessories'), " "))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 29
    }
  }, t('Milling cutters & accessories')))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 29
    }
  }, " ", t('Coupons'), " ")))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: `footer-title ${isOpen && collapse == 3 ? "active" : ""} `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
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
      lineNumber: 198,
      columnNumber: 21
    }
  }, t('information'), __jsx("span", {
    className: "according-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 23
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: width ? collapse === 3 ? isOpen : false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "footer-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 27
    }
  }, t('Locations'))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 27
    }
  }, t('FAQ'))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 27
    }
  }, t('B2B request'))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 27
    }
  }, t('contact')))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: `footer-title ${isOpen && collapse == 4 ? "active" : ""} `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
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
      lineNumber: 238,
      columnNumber: 21
    }
  }, t('contact'), __jsx("span", {
    className: "according-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 23
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: width ? collapse === 4 ? isOpen : false : true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "footer-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "contact-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-map-marker",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 27
    }
  }), t('Seengen location Guardian Way 6 5707 Seengen')), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 27
    }
  }), t('Phone + 41 62 771 00 21')), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-envelope-o",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 27
    }
  }), t('Email Us'), ":", " ", __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 27
    }
  }, "contact@nails-factory.ch")))))))))), __jsx(_copyright__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layout: layoutClass,
    fluid: copyRightFluid ? copyRightFluid : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\footers\\common\\copyright.js";
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
  }), " 2021 swiss nails factory by Jo\xE3o Vitor Lima"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "6",
    md: "6",
    sm: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "payment-card-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\headers\\common\\cart-header.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\headers\\common\\currency.js";
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
    className: "fa fa-globe-europe",
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
  }, item.lang))))));
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\headers\\common\\logo.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\headers\\common\\navbar.js";
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
    console.lo;
    if (event.target.classList.contains("sub-arrow")) return;
    if (event.target.nextElementSibling !== null && event.target.nextElementSibling.classList.contains("opensubmenu")) event.target.nextElementSibling.classList.remove("opensubmenu");else {
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
      lineNumber: 132,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "main-navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "mainnav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "toggle-nav",
    onClick: openNav.bind(undefined),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fa fa-bars sidebar-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  })), __jsx("ul", {
    className: "nav-menu",
    style: navClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "back-btn",
    onClick: closeNav.bind(undefined),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mobile-back text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, "Back navbar"), __jsx("i", {
    className: "fa fa-angle-right pl-2",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }))), _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? "mega-menu" : ""}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${menuItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: "nav-link",
      onClick: e => openMblNav(e),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 21
      }
    }, " ", t(menuItem.title), menuItem.arrow == false ? '' : __jsx("span", {
      className: "sub-arrow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 55
      }
    }))), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: "nav-submenu",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 21
      }
    }, menuItem.children.map((childrenItem, index) => {
      return __jsx("li", {
        key: index,
        className: `${childrenItem.children ? "sub-menu " : ""}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 27
        }
      }, childrenItem.type === "sub" ? __jsx("a", {
        href: null,
        onClick: () => toggletNavActive(childrenItem),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 31
        }
      }, t(childrenItem.title), childrenItem.tag === "new" ? __jsx("span", {
        className: "new-tag",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 35
        }
      }, "new") : "", __jsx("i", {
        className: "fa fa-angle-right pl-2",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 33
        }
      })) : "", childrenItem.type === "link" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `${childrenItem.path}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 31
        }
      }, __jsx("a", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 33
        }
      }, t(childrenItem.title), childrenItem.tag === "new" ? __jsx("span", {
        className: "new-tag",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 37
        }
      }, "new") : "")) : "", childrenItem.children ? __jsx("ul", {
        className: `nav-sub-childmenu ${childrenItem.active ? "menu-open " : "active"}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 31
        }
      }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
        key: key,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 37
        }
      }, childrenSubItem.type === "link" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: childrenSubItem.path,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "sub-menu-title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 43
        }
      }, t(childrenSubItem.title))) : ""))) : "");
    })) : menuItem.arrow == false ? '' : __jsx("div", {
      className: `mega-menu-container  ${menuItem.megaMenu ? "" : "opensubmenu"}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 23
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 27
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 29
      }
    }, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == "small" ? "col mega-box" : menuItem.megaMenuType == "medium" ? "col-lg-3" : menuItem.megaMenuType == "large" ? "col" : ""} `,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 35
        }
      }, __jsx("div", {
        className: "link-section",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 37
        }
      }, __jsx("div", {
        className: "menu-title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 39
        }
      }, __jsx("h5", {
        onClick: e => handleMegaSubmenu(e),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 41
        }
      }, t(megaMenuItem.title))), __jsx("div", {
        className: "menu-content",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 39
        }
      }, __jsx("ul", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 41
        }
      }, menuItem.title === "Elements" ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 51
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 53
          }
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 55
          }
        }), t(subMegaMenuItem.title)));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 51
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 53
          }
        }, t(subMegaMenuItem.title)));
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\headers\\common\\search-overlay.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\headers\\common\\sidebar.js";
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_images_icon_language_translator_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/assets/images/icon/language_translator.png */ "./public/assets/images/icon/language_translator.png");
/* harmony import */ var _public_assets_images_icon_language_translator_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_language_translator_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./currency */ "./components/headers/common/currency.js");
/* harmony import */ var _containers_CartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../containers/CartContainer */ "./components/containers/CartContainer.js");
/* harmony import */ var _containers_Cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../containers/Cart */ "./components/containers/Cart.js");
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/assets/images/icon/cart.png */ "./public/assets/images/icon/cart.png");
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constant_langConfig_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constant/langConfig.json */ "./components/constant/langConfig.json");
var _constant_langConfig_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../constant/langConfig.json */ "./components/constant/langConfig.json", 1);
/* harmony import */ var _constant_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constant/i18n */ "./components/constant/i18n.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\headers\\common\\topbar-dark.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const TopBarDark = ({
  topClass,
  fluid,
  direction
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();

  const firebaseLogout = () => {
    _config_base__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signOut();
    router.push("/page/account/login-auth");
  };

  const changeLanguage = lng => {
    _constant_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].changeLanguage(lng);
  };

  return __jsx("div", {
    className: topClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "header-contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, t('Beauty is in your hands'))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: "text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "header-dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "mobile-wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page/account/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-heart",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), " ", t('wishlist')))), __jsx("li", {
    className: "onhover-dropdown mobile-account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fa fa-user",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), " ", t('My Account'), __jsx("ul", {
    className: "onhover-show-div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/page/account/login`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 23
    }
  }, t('Login')))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/page/account/register`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }, t('Register')))), __jsx("li", {
    onClick: () => firebaseLogout(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, t('Logout'))))), __jsx("li", {
    className: "onhover-dropdown mobile-account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fa fa-language",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), "  ", t('language'), __jsx("ul", {
    className: "onhover-show-div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, _constant_langConfig_json__WEBPACK_IMPORTED_MODULE_11__.map((item, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: null,
    onClick: () => {
      changeLanguage(item.val);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }
  }, item.lang))))))))));
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
/* harmony import */ var _public_assets_images_icon_language_translator_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/images/icon/language_translator.png */ "./public/assets/images/icon/language_translator.png");
/* harmony import */ var _public_assets_images_icon_language_translator_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_language_translator_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/assets/images/icon/cart.png */ "./public/assets/images/icon/cart.png");
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_currency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/currency */ "./components/headers/common/currency.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_search_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/search-overlay */ "./components/headers/common/search-overlay.js");
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\headers\\header-one.js";
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
    className: "menu-right pull-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx(_common_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }))))))), __jsx(_common_search_overlay__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\components\\shop\\common-layout.js";
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

var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\helpers\\Currency\\CurrencyContext.js";
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
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\helpers\\apollo\\apollo.js";
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

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shop_common_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shop/common-layout */ "./components/shop/common-layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\WorkSpace\\Freelancer\\nails-frontend\\pages\\404.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Page404 = () => {
  return __jsx(_components_shop_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    parent: "home",
    title: "404",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "error-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 33
    }
  }, "404"), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 33
    }
  }, "page not found"), __jsx("a", {
    href: "/",
    className: "btn btn-solid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 33
    }
  }, "back to home")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page404);

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

/***/ "./public/assets/images/icon/language_translator.png":
/*!***********************************************************!*\
  !*** ./public/assets/images/icon/language_translator.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAQAAABu4E3oAAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAAAB3RJTUUH5QwKFgc7xvGN1QAAAhhJREFUOMud00tsTGEcBfDfndtBSyn6UAlSpcWiXVEhEo+yEGEhFkIskAixshARQkiwstEQicS2UkrXbIiEeG4sSCOKRJh4q9eYuddiHmZGN5yz+W5uzjn/x/fxzwhQY4sW8Qh/r7k2sqxdSuRLBb+K9QvztiWoQih0yTEJRCKhQKTeeVWa7DXVXed8KJUQSHkIJmnxUIQGP8TG6dJqvfEOFiSJkp4IHHDVKhAi4Zk1ug1aplltuSSHThtNtFN10Sj2zlMfTXfBCWGlJLDNBI+ssKzMKCE2zUJPZSslnTZI+2SsHUaXDD0WyDjkVGn7OWzT5IO5hnVb4h4iGQzrMcr5gskfSWiMi477oVWPDRrUmGKtLN5htUDK/Vxx87zXg5pi231iaZFI2i/pPDMGtRRSYp12FWcUakcSJH1RXaylrmDaYlCmjJE4zyHdeotfKfNyKS9s0igW5ScY2q/LT0MiD1w3U4esqSb9fae32pw/XxEb0GiyCahWb7zdhZTCXpL2OWu3cagSYI71fvlmnQZvLbKyMmOPtNgttagykK/9iNEWqLPc6z+9JPI7aXXbS4GozGizNnd8t13T38+sVrObHuswWdKAWEafxZJmGWu6w94WUkpxVFbKLW0ui32yVLODhvSar96N0iEXcNJn870yLECtM0KzMcMKzyv9S0dNqL+4vHK+0V6ekrs6ZJ32ZAS7hGde+h/8BkBkv/DIk6ikAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEyLTEwVDIyOjA3OjUzKzAwOjAwlyeKoAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMi0xMFQyMjowNzo1MyswMDowMOZ6MhwAAAAASUVORK5CYII="

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi93aWRnZXRzL2JyZWFkY3J1YnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb25zdGFudC9pMThuLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29uc3RhbnQvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lcnMvQ2FydENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3RlcnMvY29tbW9uL01hc3RlckZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3RlcnMvY29tbW9uL2NvcHlyaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlcnMvY29tbW9uL2NhcnQtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vY3VycmVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXJzL2NvbW1vbi9sb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vc2VhcmNoLW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXJzL2NvbW1vbi9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vdG9wYmFyLWRhcmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXJzL2hlYWRlci1vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaG9wL2NvbW1vbi1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9hcG9sbG8vYXBvbGxvLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvNDA0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2Zhdmljb24vMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9hbWVyaWNhbi1leHByZXNzLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL2NhcnQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vZGlzY292ZXIucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vbGFuZ3VhZ2VfdHJhbnNsYXRvci5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9tYXN0ZXJjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3BheXBhbC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9zZWFyY2gucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbWVnYS1tZW51L2Zhc2hpb24uanBnIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LXNzclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiQnJlYWRjcnVicyIsInRpdGxlIiwicGFyZW50Iiwic3ViVGl0bGUiLCJ1bmRlZmluZWQiLCJpMThuZXh0IiwidXNlIiwiTGFuZ3VhZ2VEZXRlY3RvciIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbnMiLCJkZSIsImVzIiwiZnIiLCJpdCIsInB0Iiwic3EiLCJ6aCIsImZhbGxiYWNrTG5nIiwiZGVidWciLCJucyIsImRlZmF1bHROUyIsImtleVNlcGFyYXRvciIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIk1FTlVJVEVNUyIsInBhdGgiLCJ0eXBlIiwiYXJyb3ciLCJjaGlsZHJlbiIsIkNhcnRDb21wb25lbnQiLCJpY29uIiwibGF5b3V0IiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsImN1cnJDb250ZXh0IiwiQ3VycmVuY3lDb250ZXh0Iiwic3ltYm9sIiwic3RhdGUiLCJjYXJ0TGlzdCIsInRvdGFsIiwiY2FydFRvdGFsIiwicmVtb3ZlRnJvbUNhcnQiLCJvcGVuU2lkZSIsInNldE9wZW5TaWRlIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpbWFnZXMiLCJzcmMiLCJxdHkiLCJwcmljZSIsIkNhcnRDb250YWluZXIiLCJNYXN0ZXJGb290ZXIiLCJjb250YWluZXJGbHVpZCIsImxvZ29OYW1lIiwibGF5b3V0Q2xhc3MiLCJmb290ZXJDbGFzcyIsImZvb3RlckxheU91dCIsImZvb3RlclNlY3Rpb24iLCJiZWxvd1NlY3Rpb24iLCJiZWxvd0NvbnRhaW5lckZsdWlkIiwiY29weVJpZ2h0Rmx1aWQiLCJuZXdMYXR0ZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjb2xsYXBzZSIsInNldENvbGxhcHNlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidXNlRWZmZWN0IiwiY2hhbmdlQ29sbGFwc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvcHlSaWdodCIsImZsdWlkIiwidmlzYSIsIm1hc3RlcmNhcmQiLCJwYXlwYWwiLCJhbWVyaWNhbmV4cHJlc3MiLCJkaXNjb3ZlciIsIkNhcnRIZWFkZXIiLCJpZCIsIm5hbWUiLCJkaXNjb3VudCIsInRvRml4ZWQiLCJHRVRfQ1VSUkVOQ1kiLCJncWwiLCJDdXJyZW5jeSIsImRhdGEiLCJ1c2VRdWVyeSIsIkNvbnRleHQiLCJzZWxlY3RlZEN1cnJlbmN5IiwiY3VycmVuY3lDb250ZXh0IiwiY2hhbmdlTGFuZ3VhZ2UiLCJsbmciLCJsYW5ndWFnZSIsImkiLCJ2YWwiLCJsYW5nIiwid2l0aEFwb2xsbyIsIkxvZ29JbWFnZSIsImxvZ28iLCJOYXZCYXIiLCJuYXZDbG9zZSIsInNldE5hdkNsb3NlIiwicmlnaHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVuTmF2IiwiYXNQYXRoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xvc2VOYXYiLCJyZW1vdmUiLCJoYW5kbGVNZWdhU3VibWVudSIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ2YWx1ZSIsIm1haW5tZW51Iiwic2V0TWFpbk1lbnUiLCJjdXJyZW50VXJsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImZpbHRlciIsIml0ZW1zIiwic2V0TmF2QWN0aXZlIiwic3ViSXRlbXMiLCJzdWJTdWJJdGVtcyIsIm1lbnVJdGVtIiwiYWN0aXZlIiwiaW5jbHVkZXMiLCJzdWJtZW51SXRlbXMiLCJ0b2dnbGV0TmF2QWN0aXZlIiwiYSIsImIiLCJjIiwib3Blbk1ibE5hdiIsImNvbnNvbGUiLCJsbyIsImJpbmQiLCJtZWdhTWVudSIsImUiLCJjaGlsZHJlbkl0ZW0iLCJ0YWciLCJjaGlsZHJlblN1Ykl0ZW0iLCJrZXkiLCJtZWdhTWVudUl0ZW0iLCJtZWdhTWVudVR5cGUiLCJzdWJNZWdhTWVudUl0ZW0iLCJjbG9zZVNlYXJjaCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiU2VhcmNoT3ZlcmxheSIsIlNpZGVCYXIiLCJjbG9zZW15c2xpZGUiLCJoYW5kbGVTdWJtZW51IiwiaGFuZGxlU3ViVHdvTWVudSIsImhhbmRsZVN1YlRocmVlTWVudSIsImhhbmRsZVN1YkZvdXJNZW51IiwiZmFzaGlvbiIsIlRvcEJhckRhcmsiLCJ0b3BDbGFzcyIsImRpcmVjdGlvbiIsImZpcmViYXNlTG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsInB1c2giLCJsYW5nQ29uZmlnIiwiSGVhZGVyT25lIiwiaGVhZGVyQ2xhc3MiLCJub1RvcEJhciIsInNldFRpbWVvdXQiLCJoYW5kbGVTY3JvbGwiLCJudW1iZXIiLCJwYWdlWE9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJvcGVubXlzbGlkZSIsIm9wZW5TZWFyY2giLCJsb2FkIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2giLCJ0aGVuIiwiQ29tbW9uTGF5b3V0IiwiZmF2aWNvbiIsInJlcXVpcmUiLCJjb25maWdzIiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImdvb2dsZVByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwicHJvcHMiLCJzZWxlY3RlZEN1cnIiLCJjdXJyZW5jeSIsImFwb2xsb0NsaWVudCIsIlBhZ2VDb21wb25lbnQiLCJzc3IiLCJXaXRoQXBvbGxvIiwiYXBvbGxvU3RhdGUiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJpbml0QXBvbGxvQ2xpZW50IiwiZGlzcGxheU5hbWUiLCJ3YXJuIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiQXBwVHJlZSIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJyZXMiLCJmaW5pc2hlZCIsImdldERhdGFGcm9tVHJlZSIsImVycm9yIiwiSGVhZCIsInJld2luZCIsImNhY2hlIiwiZXh0cmFjdCIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJwcm9jZXNzIiwiY3JlZGVudGlhbHMiLCJJbk1lbW9yeUNhY2hlIiwicmVzdG9yZSIsInByZWZldGNoZWQiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJzaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQYWdlNDA0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBUEYsQ0FwQkYsQ0FERixDQURGLEVBbUNFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLENBUEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBVkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBYkYsRUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQWhCRixFQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FuQkYsRUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQXRCRixFQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBekJGLENBRkYsQ0FERixDQW5DRixFQXFFRSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUMsa0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU8sT0FBRyxFQUFFbUIsa0ZBQVo7QUFBcUIsT0FBRyxFQUFDLEVBQXpCO0FBQTRCLGFBQVMsRUFBQyxXQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQXJFRixDQURGLENBREYsQ0FMRixDQURGLEVBc0ZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksV0FBTyxFQUFHbkIsQ0FBRCxJQUFPZSxhQUFhLENBQUNmLENBQUQsQ0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUVFO0FBQU0sYUFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FKRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FQRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksV0FBTyxFQUFHQSxDQUFELElBQU9nQixnQkFBZ0IsQ0FBQ2hCLENBQUQsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVFO0FBQU0sYUFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtB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O0FBbUJlQSxzRUFBZixFOzs7Ozs7Ozs7OztBQ3ZCQSxpQ0FBaUMsNG9EOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2lEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDJEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsZ3ZEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsbytCOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDdEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsdzFDOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd3dEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2xFOzs7Ozs7Ozs7OztBQ0FqQyxrQ0FBa0MsZzNNOzs7Ozs7Ozs7OztBQ0FsQyxnRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy80MDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy80MDRcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvNDA0LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBCcmVhZGNydWJzID0gKHsgdGl0bGUsIHBhcmVudCwgc3ViVGl0bGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWItc2VjdGlvblwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiNlwiPlxyXG4gICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCIgY2xhc3NOYW1lPVwidGhlbWUtYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e3BhcmVudH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIHtzdWJUaXRsZSA9PT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3ViVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJyZWFkY3J1YnM7XHJcbiIsImltcG9ydCBpMThuZXh0IGZyb20gXCJpMThuZXh0XCI7XHJcbmltcG9ydCBMYW5ndWFnZURldGVjdG9yIGZyb20gXCJpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3RvclwiO1xyXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuXHJcbmkxOG5leHRcclxuICAgIC51c2UoTGFuZ3VhZ2VEZXRlY3RvcilcclxuICAgIC51c2UoaW5pdFJlYWN0STE4bmV4dClcclxuICAgIC5pbml0KHtcclxuICAgICAgICAvLyB3ZSBpbml0IHdpdGggcmVzb3VyY2VzXHJcbiAgICAgICAgcmVzb3VyY2VzOiB7XHJcbiAgICAgICAgICAgIGVuOiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAvL01FTlVcclxuICAgICAgICAgICAgICAgICAgICAnU2FsZSc6ICdTYWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ291cG9ucyc6ICdDb3Vwb25zJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3RhcnRlciBzZXRzJzogJ1N0YXJ0ZXIgc2V0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgdmFybmlzaGVzIC0gY29sb3IgdmFybmlzaGVzJzogJ05haWwgdmFybmlzaGVzIC0gY29sb3IgdmFybmlzaGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnR2VsICYgYWNyeWxpYyBzeXN0ZW0nOiAnR2VsICYgYWNyeWxpYyBzeXN0ZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY3J5bGljIHN5c3RlbSc6ICdBY3J5bGljIHN5c3RlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BvbHkgYWNyeWxpYyBnZWwnOiAnUG9seSBhY3J5bGljIGdlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RpcHBpbmcgcG93ZGVyJzogJ0RpcHBpbmcgcG93ZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnR2VsIGJ1aWxkLXVwJzogJ0dlbCBidWlsZC11cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByaW1lciAmIGJhc2UgZ2VsJzogJ1ByaW1lciAmIGJhc2UgZ2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnUnViYmVyIEJhc2UgR2VsJzogJ1J1YmJlciBCYXNlIEdlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0J1aWxkLXVwIGdlbCc6ICdCdWlsZC11cCBnZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmaWJlcmdsYXNzJzogJ2ZpYmVyZ2xhc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdMRUQnOiAnTEVEJyxcclxuICAgICAgICAgICAgICAgICAgICAnMS1waGFzZSBnZWwnOiAnMS1waGFzZSBnZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb3ZlciBjYW1vdWZsYWdlJzogJ0NvdmVyIGNhbW91ZmxhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGcmVuY2ggZ2Vscyc6ICdGcmVuY2ggZ2VscycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlYWxpbmcnOiAnc2VhbGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VWIC8gTEVEIGNvbG9yIGdlbHMnOiAnVVYgLyBMRUQgY29sb3IgZ2VscycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ09uZSBzdHJva2UnOiAnT25lIHN0cm9rZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbG9yIEdlbHMnOiAnQ29sb3IgR2VscycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xFRCAvIFVWIFJBTCc6ICdMRUQgLyBVViBSQUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmVuZCBjb2xvcnMnOiAnVHJlbmQgY29sb3JzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWFjYXJvbnMnOiAnbWFjYXJvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcm9waWNhbCBEcmVhbSc6ICdUcm9waWNhbCBEcmVhbScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05lb24nOiAnTmVvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZyZXNoICYgQ29vbCc6ICdGcmVzaCAmIENvb2wnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOdWRlJzogJ051ZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDaGFtcGlvbnMgUmVkJzogJ0NoYW1waW9ucyBSZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdHbGl0dGVyIGdlbHMnOiAnR2xpdHRlciBnZWxzJyxcclxuICAgICAgICAgICAgICAgICAgICAnaG9sb2dyYW0nOiAnaG9sb2dyYW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmVjaW91cyBTdG9uZSc6ICdQcmVjaW91cyBTdG9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NwYXJrbGluZyBXaW5lcyc6ICdTcGFya2xpbmcgV2luZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQZWFybCBkcmVhbXMnOiAnUGVhcmwgZHJlYW1zJyxcclxuICAgICAgICAgICAgICAgICAgICAnSGlnaCBxdWFsaXR5IGdsaXR0ZXIgZ2VsJzogJ0hpZ2ggcXVhbGl0eSBnbGl0dGVyIGdlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01pbGt5IFdheSc6ICdNaWxreSBXYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICdNZXJtYWlkJzogJ01lcm1haWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGYXNoaW9uIHN0YXInOiAnRmFzaGlvbiBzdGFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFnaWMgZ2Vscyc6ICdNYWdpYyBnZWxzJyxcclxuICAgICAgICAgICAgICAgICAgICAnRWZmZWN0IGdlbHMnOiAnRWZmZWN0IGdlbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDaGFtZWxlb24gZWZmZWN0JzogJ0NoYW1lbGVvbiBlZmZlY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaGVybW8gZ2Vscyc6ICdUaGVybW8gZ2VscycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dsb3NzIGdlbHMnOiAnR2xvc3MgZ2VscycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhIFZpZSBOYXR1cmVsJzogJ0xhIFZpZSBOYXR1cmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAnR29sZGllIERyZWFtIEJhbGwnOiAnR29sZGllIERyZWFtIEJhbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEYWZmb2RpbCBjYXNlJzogJ0RhZmZvZGlsIGNhc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXN0ZWwnOiAnUGFzdGVsJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWluZXJhbCBwb3dkZXInOiAnTWluZXJhbCBwb3dkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdNdXNlIG9mIExpZ2h0JzogJ011c2Ugb2YgTGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXN0ZWwgc2VyaWVzJzogJ1Bhc3RlbCBzZXJpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDYXRtYXRpYyc6ICdDYXRtYXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgJzNEIENhdCBFeWUgR2VsJzogJzNEIENhdCBFeWUgR2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFnbmV0cyc6ICdNYWduZXRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgU2hlbGxhYyAtIGdlbCB2YXJuaXNoJzogJ1VWIC8gTEVEIFNoZWxsYWMgLSBnZWwgdmFybmlzaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZsZXh5IEh5YnJpZCBHZWwnOiAnRmxleHkgSHlicmlkIEdlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgQXJ0JzogJ05haWwgQXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICAnSW5zdHJ1bWVudHMgJiBhY2Nlc3Nvcmllcyc6ICdJbnN0cnVtZW50cyAmIGFjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnM0QgJiA0RCBnZWwnOiAnM0QgJiA0RCBnZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmFja2luZyBnZWwnOiAnQ3JhY2tpbmcgZ2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3VnYXIgcG93ZGVyJzogJ1N1Z2FyIHBvd2RlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhaW50aW5nIGdlbCc6ICdQYWludGluZyBnZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTcGlkZXIgZ2Vscyc6ICdTcGlkZXIgZ2VscycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoJzogJ0FpcmJydXNoJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWlyYnJ1c2ggc3RlbmNpbHMnOiAnQWlyYnJ1c2ggc3RlbmNpbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdBaXJicnVzaCBjb2xvcnMnOiAnQWlyYnJ1c2ggY29sb3JzJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWlyYnJ1c2ggZGV2aWNlJzogJ0FpcmJydXNoIGRldmljZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BpZ21lbnRzJzogJ1BpZ21lbnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBhcnQgc3RhbXBpbmcnOiAnTmFpbCBhcnQgc3RhbXBpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdGVuY2lscyc6ICdzdGVuY2lscycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YW1waW5nIGdlbCc6ICdTdGFtcGluZyBnZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFtcGluZyBhY2Nlc3Nvcmllcyc6ICdTdGFtcGluZyBhY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYW5zZmVyIGZvaWxzJzogJ1RyYW5zZmVyIGZvaWxzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBBcnQgU3RpY2tlcnMnOiAnTmFpbCBBcnQgU3RpY2tlcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdHbGl0dGVyJzogJ0dsaXR0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdSaGluZXN0b25lcyc6ICdSaGluZXN0b25lcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BpZXJjaW5nJzogJ1BpZXJjaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGVhcmxzIGFuZCBDby4nOiAnUGVhcmxzIGFuZCBDby4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdVViAvIExFRCBsYW1wcyc6ICdVViAvIExFRCBsYW1wcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01pbGxpbmcgY3V0dGVycyAmIGFjY2Vzc29yaWVzJzogJ01pbGxpbmcgY3V0dGVycyAmIGFjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnUm91dGVyJzogJ1JvdXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JvdXRlciBiaXRzJzogJ1JvdXRlciBiaXRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2VyYW1pYyBiaXRzJzogJ0NlcmFtaWMgYml0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BvbGlzaGluZyB0b29sJzogJ1BvbGlzaGluZyB0b29sJyxcclxuICAgICAgICAgICAgICAgICAgICAnRHVzdCc6ICdEdXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXNzb3JpZXMnOiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdIeWdpZW5lICYgbGlxdWlkcyc6ICdIeWdpZW5lICYgbGlxdWlkcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0h5Z2llbmUgcHJvZHVjdHMnOiAnSHlnaWVuZSBwcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NsZWFuZXIgJiBDby4nOiAnQ2xlYW5lciAmIENvLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgJiBGb290IENhcmUnOiAnTmFpbCAmIEZvb3QgQ2FyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rvb2xzJzogJ1Rvb2xzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBvaWwgJiBoYW5kIGNyZWFtJzogJ05haWwgb2lsICYgaGFuZCBjcmVhbScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JydXNoZXMgJiBicnVzaGVzJzogJ0JydXNoZXMgJiBicnVzaGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTW9kZWxpbmcgdGVtcGxhdGVzJzogJ01vZGVsaW5nIHRlbXBsYXRlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcHMgJiBhY2Nlc3Nvcmllcyc6ICdUaXBzICYgYWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDbGFzc2ljIHRpcHMnOiAnQ2xhc3NpYyB0aXBzJyxcclxuICAgICAgICAgICAgICAgICAgICAnRnJlbmNoIHRpcHMnOiAnRnJlbmNoIHRpcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGlsZXR0byB0aXBzJzogJ1N0aWxldHRvIHRpcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUdW5uZWwgdGlwcyc6ICdUdW5uZWwgdGlwcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zvb3QgdGlwcyc6ICdGb290IHRpcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXAgZ2x1ZSc6ICdUaXAgZ2x1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcCBjdXR0ZXInOiAnVGlwIGN1dHRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcHMgYWNjZXNzb3JpZXMnOiAnVGlwcyBhY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpbGVzICYgQnVmZmVycyc6ICdGaWxlcyAmIEJ1ZmZlcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGb290IGZpbGVzJzogJ0Zvb3QgZmlsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDdXJ2ZWQgZmlsZXMnOiAnQ3VydmVkIGZpbGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3RyYWlnaHQgZmlsZXMnOiAnU3RyYWlnaHQgZmlsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmFwZXplIGZpbGVzJzogJ1RyYXBlemUgZmlsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdidWZmZXInOiAnYnVmZmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJhY3RpY2UgaGFuZHMgJiBmaW5nZXJzJzogJ1ByYWN0aWNlIGhhbmRzICYgZmluZ2VycycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rhc2sgbGlnaHRzJzogJ1Rhc2sgbGlnaHRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnQXJtcmVzdHMnOiAnQXJtcmVzdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWluZXJzICYgc3RvcmFnZSc6ICdDb250YWluZXJzICYgc3RvcmFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlzICYgc2hlbHZlcyc6ICdEaXNwbGF5cyAmIHNoZWx2ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdHVkaW8gZnVybmlzaGluZ3MnOiAnU3R1ZGlvIGZ1cm5pc2hpbmdzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFza3MnOiAnTWFza3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdPdGhlcnMnOiAnT3RoZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHJhaW5pbmcnOiAnVHJhaW5pbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmFpbmluZyc6ICdUcmFpbmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByaXZhdGUgY291cnNlcyc6ICdQcml2YXRlIGNvdXJzZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vU0VSVklDRVxyXG4gICAgICAgICAgICAgICAgICAgICdFeHByZXNzIFNoaXBwaW5nJzogJ0V4cHJlc3MgU2hpcHBpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmcm9tIE1vbi1GcmknOiAnZnJvbSBNb24tRnJpJyxcclxuICAgICAgICAgICAgICAgICAgICAnaGVhcGVzdCBpbic6ICdoZWFwZXN0IGluJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3dpdHplcmxhbmQgUHJpY2VzJzogJ1N3aXR6ZXJsYW5kIFByaWNlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fic29sdXRlbHkgc2FmZSc6ICdBYnNvbHV0ZWx5IHNhZmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXltZW50IE1ldGhvZHMnOiAnUGF5bWVudCBNZXRob2RzJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGlyZWN0IGZyb20gdGhlJzogJ0RpcmVjdCBmcm9tIHRoZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21hbnVmYWN0dXJlciBlaW5rYXVmZW4nOiAnbWFudWZhY3R1cmVyIGVpbmthdWZlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZyZWUgc2hpcHBpbmcnOiAnZnJlZSBzaGlwcGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zyb20gQ0hGIDEwMC4tJzogJ2Zyb20gQ0hGIDEwMC4tJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1RPUCBQUk9EVUNUXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwZWNpYWwgb2ZmZXInOiAnc3BlY2lhbCBvZmZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCBjb2xsZWN0aW9uJzogJ3RvcCBjb2xsZWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmluZCB5b3VyIHByb2R1Y3QgaGVyZS4uLic6ICdGaW5kIHlvdXIgcHJvZHVjdCBoZXJlLi4uJyxcclxuICAgICAgICAgICAgICAgICAgICAvL0JBTk5FUlxyXG4gICAgICAgICAgICAgICAgICAgICdGcm9tIHVzIGZvciB5b3Ug4pmhJzogJ0Zyb20gdXMgZm9yIHlvdSDimaEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGZXN0aXZlIGhvbGlkYXlzIHdpdGggb3VyIFNoZWxsYWMgY29sb3JzJzogJ0Zlc3RpdmUgaG9saWRheXMgd2l0aCBvdXIgU2hlbGxhYyBjb2xvcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDaHJpc3RtYXMgU2FsZSEnOiAnQ2hyaXN0bWFzIFNhbGUhJyxcclxuICAgICAgICAgICAgICAgICAgICAnTm93IGZyb20gQ0hGIDUwLi0gMTAlIG9mZiBFVkVSWVRISU5HIGFuZCBmcm9tIENIRiAwLi0gYSBmcmVlIGdpZnQhIC0gQ29kZS0+IG1lcnJ5bmFpbHMnOiAnTm93IGZyb20gQ0hGIDUwLi0gMTAlIG9mZiBFVkVSWVRISU5HIGFuZCBmcm9tIENIRiAwLi0gYSBmcmVlIGdpZnQhIC0gQ29kZS0+IG1lcnJ5bmFpbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vUEFSQUxMQVhcclxuICAgICAgICAgICAgICAgICAgICAnZmFzaGlvbiB0cmVuZHMnOiAnZmFzaGlvbiB0cmVuZHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzcGVjaWFsIG9mZmVyJzogJ3NwZWNpYWwgb2ZmZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vTkVXU0xFVFRFUlxyXG4gICAgICAgICAgICAgICAgICAgICdTVUJTQ1JJQkUgVE8gT1VSIE5FV1NMRVRURVIhJzogJ1NVQlNDUklCRSBUTyBPVVIgTkVXU0xFVFRFUiEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOZXZlciBNaXNzIEFueXRoaW5nIEZyb20gU3dpc3MgTmFpbHMgRmFjdG9yeSBCeSBTaWduaW5nIFVwIFRvIE91ciBOZXdzbGV0dGVyLic6ICdOZXZlciBNaXNzIEFueXRoaW5nIEZyb20gU3dpc3MgTmFpbHMgRmFjdG9yeSBCeSBTaWduaW5nIFVwIFRvIE91ciBOZXdzbGV0dGVyLicsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9PVEhFUlNcclxuICAgICAgICAgICAgICAgICAgICAnRW50ZXIgeW91ciBlbWFpbCc6ICdFbnRlciB5b3VyIGVtYWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3Vic2NyaWJlJzogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Fib3V0JzogJ2Fib3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAnTkFJTFMgRkFDVE9SWSBpcyBvbmUgb2YgdGhlIHRvcCBzdXBwbGllcnMgdG8gdGhlIFN3aXNzIG5haWwgc2Fsb25zLiBCdXQgb3VyIGhpZ2gtcXVhbGl0eSBwcm9kdWN0cyBhcmUgYWxzbyB0aGUgcGVyZmVjdCBjaG9pY2UgZm9yIHByaXZhdGUgdXNlLiBBIGh1Z2Ugc2VsZWN0aW9uIG9mIG5haWwgcG9saXNoZXMsIG5haWwgYXJ0IHByb2R1Y3RzLCBVViBhbmQgTEVEIGxhbXBzIGFuZCBtYW55IG90aGVyIGFjY2Vzc29yaWVzIGZvciBzdWNjZXNzZnVsIG5haWwgbW9kZWxpbmcgYXdhaXQgeW91IGluIG91ciBOYWlscyBPbmxpbmUgU2hvcC4nOiAnTkFJTFMgRkFDVE9SWSBpcyBvbmUgb2YgdGhlIHRvcCBzdXBwbGllcnMgdG8gdGhlIFN3aXNzIG5haWwgc2Fsb25zLiBCdXQgb3VyIGhpZ2gtcXVhbGl0eSBwcm9kdWN0cyBhcmUgYWxzbyB0aGUgcGVyZmVjdCBjaG9pY2UgZm9yIHByaXZhdGUgdXNlLiBBIGh1Z2Ugc2VsZWN0aW9uIG9mIG5haWwgcG9saXNoZXMsIG5haWwgYXJ0IHByb2R1Y3RzLCBVViBhbmQgTEVEIGxhbXBzIGFuZCBtYW55IG90aGVyIGFjY2Vzc29yaWVzIGZvciBzdWNjZXNzZnVsIG5haWwgbW9kZWxpbmcgYXdhaXQgeW91IGluIG91ciBOYWlscyBPbmxpbmUgU2hvcC4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yaWVzJzogJ2NhdGVnb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbmZvcm1hdGlvbic6ICdpbmZvcm1hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvY2F0aW9ucyc6ICdMb2NhdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGQVEnOiAnRkFRJyxcclxuICAgICAgICAgICAgICAgICAgICAnQjJCIHJlcXVlc3QnOiAnQjJCIHJlcXVlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWN0JzogJ0NvbnRhY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZWVuZ2VuIGxvY2F0aW9uIEd1YXJkaWFuIFdheSA2IDU3MDcgU2Vlbmdlbic6ICdTZWVuZ2VuIGxvY2F0aW9uIEd1YXJkaWFuIFdheSA2IDU3MDcgU2VlbmdlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bob25lICsgNDEgNjIgNzcxIDAwIDIxJzogJ1Bob25lICsgNDEgNjIgNzcxIDAwIDIxJyxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwgVXMnOiAnRW1haWwgVXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdCZWF1dHkgaXMgaW4geW91ciBoYW5kcyc6ICdCZWF1dHkgaXMgaW4geW91ciBoYW5kcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvZ2luJzogJ0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9nb3V0JzogJ0xvZ291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpc2hsaXN0JzogJ3dpc2hsaXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAnTXkgQWNjb3VudCc6ICdNeSBBY2NvdW50JyxcclxuICAgICAgICAgICAgICAgICAgICAnUmVnaXN0ZXInOiAnUmVnaXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vUFJPRFVDVFxyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrJzogJ2JhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb2FkaW5nJzogJ0xvYWRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzaXplJzogJ3NpemUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcmljZSc6ICdwcmljZScsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHcmVhdCBuYWlsIHBvbGlzaCBjb2xvciBwb2xpc2hlcyB3aXRoIGFuIGV4Y2VwdGlvbmFsbHkgbm91cmlzaGluZyBmb3JtdWxhLiBUaGUgY29tcG9zaXRpb24gd29ya3Mgd2l0aG91dCB0aGUgMTggaGFybWZ1bCBjaGVtaWNhbHMgdGhhdCBjYW4gbm9ybWFsbHkgYmUgZm91bmQgaW4gbmFpbCBwb2xpc2hlcy4gVGhleSBkcnkgc3VwZXIgZmFzdC4gWW91IGRvbuKAmXQgaGF2ZSB0byB3YWl0IHNvIGxvbmcgYmVmb3JlIHlvdSBjYW4gZ28gYmFjayB0byBldmVyeWRheSBidXNpbmVzcy4gVGhpcyBlZmZlY3QgaXMgc3VwcG9ydGVkIGJ5IHRoZSBib2R54oCZcyBvd24gd2FybXRoLiBUaGlzIGhlbHBzIHRoZSBuYWlsIHBvbGlzaCB0byBkcnkgdmVyeSBxdWlja2x5LiBUaGUgd2FpdCBpcyBmaW5hbGx5IG92ZXJcIjogXCJHcmVhdCBuYWlsIHBvbGlzaCBjb2xvciBwb2xpc2hlcyB3aXRoIGFuIGV4Y2VwdGlvbmFsbHkgbm91cmlzaGluZyBmb3JtdWxhLiBUaGUgY29tcG9zaXRpb24gd29ya3Mgd2l0aG91dCB0aGUgMTggaGFybWZ1bCBjaGVtaWNhbHMgdGhhdCBjYW4gbm9ybWFsbHkgYmUgZm91bmQgaW4gbmFpbCBwb2xpc2hlcy4gVGhleSBkcnkgc3VwZXIgZmFzdC4gWW91IGRvbuKAmXQgaGF2ZSB0byB3YWl0IHNvIGxvbmcgYmVmb3JlIHlvdSBjYW4gZ28gYmFjayB0byBldmVyeWRheSBidXNpbmVzcy4gVGhpcyBlZmZlY3QgaXMgc3VwcG9ydGVkIGJ5IHRoZSBib2R54oCZcyBvd24gd2FybXRoLiBUaGlzIGhlbHBzIHRoZSBuYWlsIHBvbGlzaCB0byBkcnkgdmVyeSBxdWlja2x5LiBUaGUgd2FpdCBpcyBmaW5hbGx5IG92ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAnSG9tZSc6ICdIb21lJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGFuZ3VhZ2UnOiAnbGFuZ3VhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICcxMCBQcm9kdWN0cyBQYXIgUGFnZSc6ICcxMCBQcm9kdWN0cyBQYXIgUGFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJzE1IFByb2R1Y3RzIFBhciBQYWdlJzogJzE1IFByb2R1Y3RzIFBhciBQYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAnMjAgUHJvZHVjdHMgUGFyIFBhZ2UnOiAnMjAgUHJvZHVjdHMgUGFyIFBhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTb3J0aW5nIGl0ZW1zJzogJ1NvcnRpbmcgaXRlbXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdIaWdoIFRvIExvdyc6ICdIaWdoIFRvIExvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvdyBUbyBIaWdoJzogJ0xvdyBUbyBIaWdoJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmV3ZXN0JzogJ05ld2VzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FzYyBPcmRlcic6ICdBc2MgT3JkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXNjIE9yZGVyJzogJ0Rlc2MgT3JkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdZb3VyIENhcnQgaXMgRW1wdHknOiAnWW91ciBDYXJ0IGlzIEVtcHR5JyxcclxuICAgICAgICAgICAgICAgICAgICAnRXhwbG9yZSBtb3JlIHNob3J0bGlzdCBzb21lIGl0ZW1zLic6ICdFeHBsb3JlIG1vcmUgc2hvcnRsaXN0IHNvbWUgaXRlbXMuJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9hZCBNb3JlJzogJ0xvYWQgTW9yZScsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlOiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAvL01FTlVcclxuICAgICAgICAgICAgICAgICAgICAnU2FsZSc6ICdWZXJrYXVmJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ291cG9ucyc6ICdHdXRzY2hlaW5lJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3RhcnRlciBzZXRzJzogJ1N0YXJ0ZXJzZXRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCB2YXJuaXNoZXMgLSBjb2xvciB2YXJuaXNoZXMnOiAnTmFnZWxsYWNrZSAtIEZhcmJsYWNrZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgdmFybmlzaGVzJzogJ05hZ2VsbGFja2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdHZWwgJiBhY3J5bGljIHN5c3RlbSc6ICdHZWwtIHVuZCBBY3J5bHN5c3RlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjcnlsaWMgc3lzdGVtJzogJ0Fjcnlsc3lzdGVtJyxcclxuICAgICAgICAgICAgICAgICAgICAnUG9seSBhY3J5bGljIGdlbCc6ICdQb2x5YWNyeWxnZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXBwaW5nIHBvd2Rlcic6ICdUYXVjaHB1bHZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dlbCBidWlsZC11cCc6ICdHZWxhdWZiYXUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmltZXIgJiBiYXNlIGdlbCc6ICdQcmltZXIgJiBCYXNpc2dlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1J1YmJlciBCYXNlIEdlbCc6ICdHdW1taWJhc2lzZ2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnQnVpbGQtdXAgZ2VsJzogJ0F1ZmJhdWdlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZpYmVyZ2xhc3MnOiAnRmliZXJnbGFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTEVEJzogJ0xFRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJzEtcGhhc2UgZ2VsJzogJzEtUGhhc2VuLUdlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvdmVyIGNhbW91ZmxhZ2UnOiAnVGFybnVuZyBkZWNrZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdGcmVuY2ggZ2Vscyc6ICdGcmFuesO2c2lzY2hlIEdlbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzZWFsaW5nJzogJ0FiZGljaHR1bmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdVViAvIExFRCBjb2xvciBnZWxzJzogJ1VWIC8gTEVEIEZhcmJnZWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAnT25lIHN0cm9rZSc6ICdFaW4gU2NobGFnJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29sb3IgR2Vscyc6ICdGYXJiZ2VsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xFRCAvIFVWIFJBTCc6ICdMRUQgLyBVVi1SQUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmVuZCBjb2xvcnMnOiAnVHJlbmRmYXJiZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYWNhcm9ucyc6ICdNYWtyb25lbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Ryb3BpY2FsIERyZWFtJzogJ1Ryb3Bpc2NoZXIgVHJhdW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdOZW9uJzogJ05lb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdGcmVzaCAmIENvb2wnOiAnRnJpc2NoIGNvb2wnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOdWRlJzogJ05hY2t0JyxcclxuICAgICAgICAgICAgICAgICAgICAnR2xpdHRlciBnZWxzJzogJ0dsaXR6ZXJnZWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAnaG9sb2dyYW0nOiAnSG9sb2dyYW1tJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJlY2lvdXMgU3RvbmUnOiAnRWRlbHN0ZWluJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3BhcmtsaW5nIFdpbmVzJzogJ1Nla3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQZWFybCBkcmVhbXMnOiAnUGVybGVudHLDpHVtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2ggcXVhbGl0eSBnbGl0dGVyIGdlbCc6ICdIb2Nod2VydGlnZXMgR2xpdHplcmdlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01pbGt5IFdheSc6ICdNaWxjaHN0cmHDn2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdNZXJtYWlkJzogJ01lZXJqdW5nZnJhdScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zhc2hpb24gc3Rhcic6ICdNb2Rlc3RhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hZ2ljIGdlbHMnOiAnWmF1YmVyZ2VsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VmZmVjdCBnZWxzJzogJ0VmZmVrdGdlbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDaGFtZWxlb24gZWZmZWN0JzogJ0NoYW3DpGxlb24tRWZmZWt0JyxcclxuICAgICAgICAgICAgICAgICAgICAnVGhlcm1vIGdlbHMnOiAnVGhlcm1vZ2VsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dsb3NzIGdlbHMnOiAnR2xhbnpnZWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAnTGEgVmllIE5hdHVyZWwnOiAnTGEgVmllIE5hdHVyZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdHb2xkaWUgRHJlYW0gQmFsbCc6ICdHb2xkaWUgVHJhdW1iYWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGFmZm9kaWwgY2FzZSc6ICdOYXJ6aXNzZW5ldHVpJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzdGVsJzogJ1Bhc3RlbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdNaW5lcmFsIHBvd2Rlcic6ICdNaW5lcmFscHVsdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnTXVzZSBvZiBMaWdodCc6ICdNdXNlIGRlcyBMaWNodHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXN0ZWwgc2VyaWVzJzogJ1Bhc3RlbGwtU2VyaWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDYXRtYXRpYyc6ICdDYXRtYXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgJzNEIENhdCBFeWUgR2VsJzogJzNEIEthdHplbmF1Z2VuZ2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFnbmV0cyc6ICdNYWduZXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgU2hlbGxhYyAtIGdlbCB2YXJuaXNoJzogJ1VWIC8gTEVEIFNjaGVsbGFjayAtIEdlbGxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICdGbGV4eSBIeWJyaWQgR2VsJzogJ0ZsZXh5IEh5YnJpZC1HZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIEFydCc6ICdOYWdlbCBLdW5zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0luc3RydW1lbnRzICYgYWNjZXNzb3JpZXMnOiAnSW5zdHJ1bWVudGUgJiBadWJlaMO2cicsXHJcbiAgICAgICAgICAgICAgICAgICAgJzNEICYgNEQgZ2VsJzogJzNELSB1bmQgNEQtR2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ3JhY2tpbmcgZ2VsJzogJ0tuYWNrZ2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3VnYXIgcG93ZGVyJzogJ1p1Y2tlcnB1bHZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhaW50aW5nIGdlbCc6ICdNYWxnZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTcGlkZXIgZ2Vscyc6ICdTcGlubmVuZ2VsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoJzogJ0FpcmJydXNoJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWlyYnJ1c2ggc3RlbmNpbHMnOiAnQWlyYnJ1c2gtU2NoYWJsb25lbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoIGNvbG9ycyc6ICdBaXJicnVzaC1GYXJiZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBaXJicnVzaCBkZXZpY2UnOiAnQWlyYnJ1c2gtR2Vyw6R0JyxcclxuICAgICAgICAgICAgICAgICAgICAnUGlnbWVudHMnOiAnUGlnbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIGFydCBzdGFtcGluZyc6ICdOYWlsYXJ0IFN0ZW1wZWxuJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3RlbmNpbHMnOiAnU2NoYWJsb25lbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YW1waW5nIGdlbCc6ICdTdGVtcGVsZ2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3RhbXBpbmcgYWNjZXNzb3JpZXMnOiAnU3Rhbnp6dWJlaMO2cicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYW5zZmVyIGZvaWxzJzogJ1RyYW5zZmVyZm9saWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBBcnQgU3RpY2tlcnMnOiAnTmFpbGFydC1BdWZrbGViZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdHbGl0dGVyJzogJ0Z1bmtlbG4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdSaGluZXN0b25lcyc6ICdTdHJhc3NzdGVpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQaWVyY2luZyc6ICdQaWVyY2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BlYXJscyBhbmQgQ28uJzogJ1BlcmxlbiB1bmQgQ28uJyxcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgbGFtcHMnOiAnVVYtL0xFRC1MYW1wZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdNaWxsaW5nIGN1dHRlcnMgJiBhY2Nlc3Nvcmllcyc6ICdGcsOkc2VyICYgWnViZWjDtnInLFxyXG4gICAgICAgICAgICAgICAgICAgICdSb3V0ZXInOiAnUm91dGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnUm91dGVyIGJpdHMnOiAnRnLDpHNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NlcmFtaWMgYml0cyc6ICdLZXJhbWlrLUJpdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQb2xpc2hpbmcgdG9vbCc6ICdQb2xpZXJ3ZXJremV1ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0R1c3QnOiAnU3RhdWInLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2Nlc3Nvcmllcyc6ICdadWJlaMO2cicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0h5Z2llbmUgJiBsaXF1aWRzJzogJ0h5Z2llbmUgJiBGbMO8c3NpZ2tlaXRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0h5Z2llbmUgcHJvZHVjdHMnOiAnSHlnaWVuZXByb2R1a3RlJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2xlYW5lciAmIENvLic6ICdSZWluaWdlciAmIENvLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgJiBGb290IENhcmUnOiAnTmFnZWwtICYgRnXDn3BmbGVnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rvb2xzJzogJ1dlcmt6ZXVnJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBPaWwgJiBIYW5kIENyZWFtJzogJ05hZ2Vsw7ZsICYgSGFuZGNyZW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBvaWwgJiBoYW5kICc6ICdOYWdlbMO2bCAmIEhhbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdCcnVzaGVzICYgYnJ1c2hlcyc6ICdCw7xyc3RlbiAmIELDvHJzdGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnTW9kZWxpbmcgdGVtcGxhdGVzJzogJ01vZGVsbGllcnVuZ3N2b3JsYWdlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcHMgJiBhY2Nlc3Nvcmllcyc6ICdUaXBwcyAmIFp1YmVow7ZyJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2xhc3NpYyB0aXBzJzogJ0tsYXNzaXNjaGUgVGlwcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGcmVuY2ggdGlwcyc6ICdGcmFuesO2c2lzY2ggVGlwcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGlsZXR0byB0aXBzJzogJ1N0aWxldHRvLVRpcHBzJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHVubmVsIHRpcHMnOiAnVHVubmVsLVRpcHBzJyxcclxuICAgICAgICAgICAgICAgICAgICAnRm9vdCB0aXBzJzogJ0Z1w590aXBwcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcCBnbHVlJzogJ1RpcHAgS2xlYmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnVGlwIGN1dHRlcic6ICdTcGl0emVuc2NobmVpZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnVGlwcyBhY2Nlc3Nvcmllcyc6ICdUaXBwcyBadWJlaMO2cicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpbGVzICYgQnVmZmVycyc6ICdEYXRlaWVuICYgUHVmZmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnRm9vdCBmaWxlcyc6ICdGdcOfZmVpbGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ3VydmVkIGZpbGVzJzogJ0dla3LDvG1tdGUgRGF0ZWllbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0cmFpZ2h0IGZpbGVzJzogJ0dlcmFkZSBEYXRlaWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHJhcGV6ZSBmaWxlcyc6ICdUcmFwZXpkYXRlaWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnYnVmZmVyJzogJ1B1ZmZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByYWN0aWNlIGhhbmRzICYgZmluZ2Vycyc6ICfDnGJlbiBTaWUgSMOkbmRlIHVuZCBGaW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXNrIGxpZ2h0cyc6ICdBcmJlaXRzcGxhdHpsZXVjaHRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FybXJlc3RzJzogJ0FybWxlaG5lbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhaW5lcnMgJiBzdG9yYWdlJzogJ0JlaMOkbHRlciAmIExhZ2VydW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheXMgJiBzaGVsdmVzJzogJ0Rpc3BsYXlzICYgUmVnYWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3R1ZGlvIGZ1cm5pc2hpbmdzJzogJ1N0dWRpb2VpbnJpY2h0dW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFza3MnOiAnTWFza2VuJyxcclxuICAgICAgICAgICAgICAgICAgICAnT3RoZXJzJzogJ0FuZGVyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYWluaW5nJzogJ0F1c2JpbGR1bmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmFpbmluZyc6ICdBdXNiaWxkdW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJpdmF0ZSBjb3Vyc2VzJzogJ1ByaXZhdGt1cnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1NFUlZJQ0VcclxuICAgICAgICAgICAgICAgICAgICAnRXhwcmVzcyBTaGlwcGluZyc6ICdFeHByZXNzdmVyc2FuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zyb20gTW9uLUZyaSc6ICd2b24gTW8tRnInLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWFwZXN0IGluJzogJ2hhdWZpZ3N0ZSBpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N3aXR6ZXJsYW5kIFByaWNlcyc6ICdTY2h3ZWl6IFByZWlzZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fic29sdXRlbHkgc2FmZSc6ICdBYnNvbHV0IHNpY2hlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnQgTWV0aG9kcyc6ICdaYWhsdW5nc2FydGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGlyZWN0IGZyb20gdGhlJzogJ0RpcmVrdCB2b24gZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWFudWZhY3R1cmVyIGVpbmthdWZlbic6ICdIZXJzdGVsbGVyIGVpbmthdWZlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZyZWUgc2hpcHBpbmcnOiAnS29zdGVubG9zZXIgVmVyc2FuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zyb20gQ0hGIDEwMC4tJzogJ2FiIENIRiAxMDAuLScsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9CQU5ORVJcclxuICAgICAgICAgICAgICAgICAgICAnRnJvbSB1cyBmb3IgeW91IOKZoSc6ICdWb24gdW5zIGbDvHIgZXVjaCDimaEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGZXN0aXZlIGhvbGlkYXlzIHdpdGggb3VyIFNoZWxsYWMgY29sb3JzJzogJ0Zlc3RsaWNoZSBGZWllcnRhZ2UgbWl0IHVuc2VyZW4gU2NoZWxsYWNrZmFyYmVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2hyaXN0bWFzIFNhbGUhJzogJ1dlaWhuYWNodHNhbmdlYm90IScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05vdyBmcm9tIENIRiA1MC4gLSAxMCAlIG9mZiBFVkVSWVRISU5HIGFuZCBmcm9tIENIRiAwLiAtIGEgZnJlZSBnaWZ0ISAtIENvZGUgLT4gbWVycnluYWlscyc6ICdKZXR6dCBhYiBDSEYgNTAuIC0gMTAgJSBhdWYgQUxMRVMgdW5kIGFiIENIRiAwLiAtIGVpbiBHcmF0aXNnZXNjaGVuayEgLSBDb2RlIC0+IGZyw7ZobGljaGUgTsOkZ2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1RPUCBQUk9EVUNUXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwZWNpYWwgb2ZmZXInOiAnU29uZGVyYW5nZWJvdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCBjb2xsZWN0aW9uJzogJ1RvcC1Lb2xsZWt0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmluZCB5b3VyIHByb2R1Y3QgaGVyZS4uLic6ICdGaW5kZW4gU2llIGhpZXIgSWhyIFByb2R1a3QuLi4nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vUEFSQUxMQVhcclxuICAgICAgICAgICAgICAgICAgICAnZmFzaGlvbiB0cmVuZHMnOiAnTW9kZXRyZW5kcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwZWNpYWwgb2ZmZXInOiAnU29uZGVyYW5nZWJvdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9QQVJBTExBWFxyXG4gICAgICAgICAgICAgICAgICAgICdTVUJTQ1JJQkUgVE8gT1VSIE5FV1NMRVRURVIhJzogJ0FCT05OSUVSRSBVTlNFUkVOIE5FV1NMRVRURVIhJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmV2ZXIgTWlzcyBBbnl0aGluZyBGcm9tIFN3aXNzIE5haWxzIEZhY3RvcnkgQnkgU2lnbmluZyBVcCBUbyBPdXIgTmV3c2xldHRlci4nOiAnVmVycGFzc2VuIFNpZSBuaWNodHMgdm9uIFN3aXNzIE5haWxzIEZhY3RvcnksIGluZGVtIFNpZSBzaWNoIGbDvHIgdW5zZXJlbiBOZXdzbGV0dGVyIGFubWVsZGVuLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VudGVyIHlvdXIgZW1haWwnOiAnR2ViZW4gc2llIGlocmUgRS1NYWlsIEFkcmVzc2UgZWluJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3Vic2NyaWJlJzogJ0Fib25uaWVyZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdhYm91dCc6ICdldHdhJyxcclxuICAgICAgICAgICAgICAgICAgICAnTkFJTFMgRkFDVE9SWSBpcyBvbmUgb2YgdGhlIHRvcCBzdXBwbGllcnMgdG8gdGhlIFN3aXNzIG5haWwgc2Fsb25zLiBCdXQgb3VyIGhpZ2gtcXVhbGl0eSBwcm9kdWN0cyBhcmUgYWxzbyB0aGUgcGVyZmVjdCBjaG9pY2UgZm9yIHByaXZhdGUgdXNlLiBBIGh1Z2Ugc2VsZWN0aW9uIG9mIG5haWwgcG9saXNoZXMsIG5haWwgYXJ0IHByb2R1Y3RzLCBVViBhbmQgTEVEIGxhbXBzIGFuZCBtYW55IG90aGVyIGFjY2Vzc29yaWVzIGZvciBzdWNjZXNzZnVsIG5haWwgbW9kZWxpbmcgYXdhaXQgeW91IGluIG91ciBOYWlscyBPbmxpbmUgU2hvcC4nOiAnTkFJTFMgRkFDVE9SWSBpc3QgZWluZXIgZGVyIFRvcC1MaWVmZXJhbnRlbiBkZXIgU2Nod2VpemVyIE5hZ2Vsc3R1ZGlvcy4gQWJlciBhdWNoIGbDvHIgZGVuIHByaXZhdGVuIEdlYnJhdWNoIHNpbmQgdW5zZXJlIGhvY2h3ZXJ0aWdlbiBQcm9kdWt0ZSBkaWUgcGVyZmVrdGUgV2FobC4gRWluZSByaWVzaWdlIEF1c3dhaGwgYW4gTmFnZWxsYWNrZW4sIE5haWxhcnQtUHJvZHVrdGVuLCBVVi0gdW5kIExFRC1MYW1wZW4gdW5kIHZpZWxlIHdlaXRlcmUgQWNjZXNzb2lyZXMgZsO8ciBlaW5lIGVyZm9sZ3JlaWNoZSBOYWdlbG1vZGVsbGFnZSBlcndhcnRlbiBTaWUgaW4gdW5zZXJlbSBOYWlscyBPbmxpbmUgU2hvcC4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yaWVzJzogJ0thdGVnb3JpZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbmZvcm1hdGlvbic6ICdJbmZvcm1hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvY2F0aW9ucyc6ICdTdGFuZG9ydGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGQVEnOiAnRkFRJyxcclxuICAgICAgICAgICAgICAgICAgICAnQjJCIHJlcXVlc3QnOiAnQjJCLUFuZnJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWN0JzogJ0tvbnRha3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZWVuZ2VuIGxvY2F0aW9uIEd1YXJkaWFuIFdheSA2IDU3MDcgU2Vlbmdlbic6ICdTdGFuZG9ydCBTZWVuZ2VuIFfDpGNodGVyd2VnIDYgNTcwNyBTZWVuZ2VuJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGhvbmUgKyA0MSA2MiA3NzEgMDAgMjEnOiAnVGVsZWZvbjogKyA0MSA2MiA3NzEgMDAgMjEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCBVcyc6ICdTY2hyZWliZW4gU2llIHVucyBlaW5lIEUtTWFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JlYXV0eSBpcyBpbiB5b3VyIGhhbmRzJzogJ1NjaMO2bmhlaXQgbGllZ3QgaW4gZGVpbmVuIEjDpG5kZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb2dpbic6ICdBbm1lbGR1bmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb2dvdXQnOiAnQXVzbG9nZ2VuJyxcclxuICAgICAgICAgICAgICAgICAgICAnd2lzaGxpc3QnOiAnV3Vuc2NoemV0dGVsJyxcclxuICAgICAgICAgICAgICAgICAgICAnTXkgQWNjb3VudCc6ICdNZWluIEtvbnRvJyxcclxuICAgICAgICAgICAgICAgICAgICAnUmVnaXN0ZXInOiAnUmVnaXN0cmllcmVuJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1BST0RVQ1RcclxuICAgICAgICAgICAgICAgICAgICAnYmFjayc6ICd6dXLDvGNrJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9hZGluZyc6ICdXaXJkIGdlbGFkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdzaXplJzogJ0dyw7bDn2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcmljZSc6ICdQcmVpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dyZWF0IG5haWwgcG9saXNoIGNvbG9yIHBvbGlzaGVzIHdpdGggYW4gZXhjZXB0aW9uYWxseSBub3VyaXNoaW5nIGZvcm11bGEuIFRoZSBjb21wb3NpdGlvbiB3b3JrcyB3aXRob3V0IHRoZSAxOCBoYXJtZnVsIGNoZW1pY2FscyB0aGF0IGNhbiBub3JtYWxseSBiZSBmb3VuZCBpbiBuYWlsIHBvbGlzaGVzLiBUaGV5IGRyeSBzdXBlciBmYXN0LiBZb3UgZG9u4oCZdCBoYXZlIHRvIHdhaXQgc28gbG9uZyBiZWZvcmUgeW91IGNhbiBnbyBiYWNrIHRvIGV2ZXJ5ZGF5IGJ1c2luZXNzLiBUaGlzIGVmZmVjdCBpcyBzdXBwb3J0ZWQgYnkgdGhlIGJvZHnigJlzIG93biB3YXJtdGguIFRoaXMgaGVscHMgdGhlIG5haWwgcG9saXNoIHRvIGRyeSB2ZXJ5IHF1aWNrbHkuIFRoZSB3YWl0IGlzIGZpbmFsbHkgb3Zlcic6ICdUb2xsZSBOYWdlbGxhY2stRmFyYmxhY2tlIG1pdCBlaW5lciBhdcOfZXJnZXfDtmhubGljaCBwZmxlZ2VuZGVuIEZvcm1lbC4gRGllIFp1c2FtbWVuc2V0enVuZyBmdW5rdGlvbmllcnQgb2huZSBkaWUgMTggc2Now6RkbGljaGVuIENoZW1pa2FsaWVuLCBkaWUgbm9ybWFsZXJ3ZWlzZSBpbiBOYWdlbGxhY2tlbiBlbnRoYWx0ZW4gc2luZC4gU2llIHRyb2NrbmVuIHN1cGVyIHNjaG5lbGwuIFNpZSBtw7xzc2VuIG5pY2h0IHNvIGxhbmdlIHdhcnRlbiwgYmlzIFNpZSB3aWVkZXIgaW4gZGVuIEdlc2Now6RmdHNhbGx0YWcgenVyw7xja2tlaHJlbiBrw7ZubmVuLiBVbnRlcnN0w7x0enQgd2lyZCBkaWVzZXIgRWZmZWt0IGR1cmNoIGRpZSBrw7ZycGVyZWlnZW5lIFfDpHJtZS4gRGFkdXJjaCB0cm9ja25ldCBkZXIgTmFnZWxsYWNrIHNlaHIgc2NobmVsbC4gRGFzIFdhcnRlbiBoYXQgZW5kbGljaCBlaW4gRW5kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hvbWUnOiAnSGVpbScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xhbmd1YWdlJzogJ1NwcmFjaGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICcxMCBQcm9kdWN0cyBQYXIgUGFnZSc6ICcxMCBQcm9kdWt0ZSBwcm8gU2VpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICcxNSBQcm9kdWN0cyBQYXIgUGFnZSc6ICcxNSBQcm9kdWt0ZSBQYXIgU2VpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICcyMCBQcm9kdWN0cyBQYXIgUGFnZSc6ICcyMCBQcm9kdWt0ZSBwcm8gU2VpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTb3J0aW5nIGl0ZW1zJzogJ0FydGlrZWwgc29ydGllcmVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnSGlnaCBUbyBMb3cnOiAnQWJzdGVpZ2VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvdyBUbyBIaWdoJzogJ1ZvbiBuaWVkcmlnIG5hY2ggaG9jaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld2VzdCc6ICdOZXVlc3RlJyxcclxuICAgICAgICAgICAgICAgICAgICAnQXNjIE9yZGVyJzogJ0F1ZnN0ZWlnZW5kZSBCZXN0ZWxsdW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzYyBPcmRlcic6ICdCZXNjaHJlaWJ1bmcgQmVzdGVsbHVuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1lvdXIgQ2FydCBpcyBFbXB0eSc6ICdJaHIgV2FyZW5rb3JiIGlzdCBsZWVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnRXhwbG9yZSBtb3JlIHNob3J0bGlzdCBzb21lIGl0ZW1zLic6ICdFbnRkZWNrZW4gU2llIG1laHIsIHfDpGhsZW4gU2llIGVpbmlnZSBFbGVtZW50ZSBhdXMuJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9hZCBNb3JlJzogJ01laHIgbGFkZW4nLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlczoge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9NRU5VXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NhbGUnOiAnUmViYWphJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ291cG9ucyc6ICdDdXBvbmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3RhcnRlciBzZXRzJzogJ0Nvbmp1bnRvcyBkZSBpbmljaWFjacOzbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgdmFybmlzaGVzIC0gY29sb3IgdmFybmlzaGVzJzogJ0Jhcm5pY2VzIGRlIHXDsWFzIC0gYmFybmljZXMgZGUgY29sb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIHZhcm5pc2hlcyc6ICdCYXJuaWNlcyBkZSB1w7FhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dlbCAmIGFjcnlsaWMgc3lzdGVtJzogJ1Npc3RlbWEgZGUgZ2VsIHkgYWNyw61saWNvJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNyeWxpYyBzeXN0ZW0nOiAnU2lzdGVtYSBhY3LDrWxpY28nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQb2x5IGFjcnlsaWMgZ2VsJzogJ0dlbCBwb2xpYWNyw61saWNvJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGlwcGluZyBwb3dkZXInOiAnUG9sdm8gZGUgaW5tZXJzacOzbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dlbCBidWlsZC11cCc6ICdBY3VtdWxhY2nDs24gZGUgZ2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJpbWVyICYgYmFzZSBnZWwnOiAnUHJpbWVyIHkgZ2VsIGJhc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSdWJiZXIgQmFzZSBHZWwnOiAnR2VsIGJhc2UgZGUgZ29tYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0J1aWxkLXVwIGdlbCc6ICdHZWwgYWN1bXVsYWRvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZpYmVyZ2xhc3MnOiAnZmlicmEgZGUgdmlkcmlvJyxcclxuICAgICAgICAgICAgICAgICAgICAnTEVEJzogJ0xFRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJzEtcGhhc2UgZ2VsJzogJ0dlbCBtb25vZsOhc2ljbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvdmVyIGNhbW91ZmxhZ2UnOiAnQ3ViaWVydGEgZGUgY2FtdWZsYWplJyxcclxuICAgICAgICAgICAgICAgICAgICAnRnJlbmNoIGdlbHMnOiAnR2VsZXMgZnJhbmNlc2VzJyxcclxuICAgICAgICAgICAgICAgICAgICAnc2VhbGluZyc6ICdzZWxsYW5kbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VWIC8gTEVEIGNvbG9yIGdlbHMnOiAnR2VsZXMgZGUgY29sb3IgVVYgLyBMRUQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdPbmUgc3Ryb2tlJzogJ1VuIGdvbHBlJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29sb3IgR2Vscyc6ICdHZWxlcyBkZSBjb2xvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xFRCAvIFVWIFJBTCc6ICdMRUQgLyBVViBSQUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmVuZCBjb2xvcnMnOiAnQ29sb3JlcyBkZSB0ZW5kZW5jaWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYWNhcm9ucyc6ICdtYWNhcm9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Ryb3BpY2FsIERyZWFtJzogJ1N1ZcOxbyBUcm9waWNhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05lb24nOiAnTmXDs24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdGcmVzaCAmIENvb2wnOiAnRnJlc2N1cmEgZnJlc2NhJyxcclxuICAgICAgICAgICAgICAgICAgICAnTnVkZSc6ICdEZXNudWRvJyxcclxuICAgICAgICAgICAgICAgICAgICAnR2xpdHRlciBnZWxzJzogJ0dlbGVzIGNvbiBwdXJwdXJpbmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdob2xvZ3JhbSc6ICdob2xvZ3JhbWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmVjaW91cyBTdG9uZSc6ICdQaWVkcmEgcHJlY2lvc2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTcGFya2xpbmcgV2luZXMnOiAnVmlub3MgZXNwdW1vc29zJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGVhcmwgZHJlYW1zJzogJ1N1ZcOxb3MgZGUgcGVybGFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnSGlnaCBxdWFsaXR5IGdsaXR0ZXIgZ2VsJzogJ0dlbCBkZSBicmlsbG8gZGUgYWx0YSBjYWxpZGFkJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWlsa3kgV2F5JzogJ3bDrWEgTMOhY3RlYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01lcm1haWQnOiAnU2lyZW5hJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmFzaGlvbiBzdGFyJzogJ0VzdHJlbGxhIGRlIGxhIG1vZGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYWdpYyBnZWxzJzogJ0dlbGVzIG3DoWdpY29zJyxcclxuICAgICAgICAgICAgICAgICAgICAnRWZmZWN0IGdlbHMnOiAnR2VsZXMgZGUgZWZlY3RvJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2hhbWVsZW9uIGVmZmVjdCc6ICdFZmVjdG8gY2FtYWxlw7NuJyxcclxuICAgICAgICAgICAgICAgICAgICAnVGhlcm1vIGdlbHMnOiAnVGVybW8gZ2VsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdHbG9zcyBnZWxzJzogJ0dlbGVzIGJyaWxsYW50ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYSBWaWUgTmF0dXJlbCc6ICdMYSBWaWUgTmF0dXJlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dvbGRpZSBEcmVhbSBCYWxsJzogJ0JvbGEgZGUgZW5zdWXDsW8gR29sZGllJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGFmZm9kaWwgY2FzZSc6ICdFc3R1Y2hlIG5hcmNpc28nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXN0ZWwnOiAnUGFzdGVsJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWluZXJhbCBwb3dkZXInOiAnUG9sdm8gbWluZXJhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ011c2Ugb2YgTGlnaHQnOiAnTXVzYSBkZSBsYSBsdXonLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXN0ZWwgc2VyaWVzJzogJ1NlcmllIHBhc3RlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NhdG1hdGljJzogJ0NhdG1hdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAnM0QgQ2F0IEV5ZSBHZWwnOiAnR2VsIGRlIG9qb3MgZGUgZ2F0byAzRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hZ25ldHMnOiAnSW1hbmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgU2hlbGxhYyAtIGdlbCB2YXJuaXNoJzogJ1VWIC8gTEVEIFNoZWxsYWMgLSBiYXJuaXogZW4gZ2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmxleHkgSHlicmlkIEdlbCc6ICdHZWwgaMOtYnJpZG8gRmxleHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIEFydCc6ICdBcnRlIGRlIHXDsWFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnSW5zdHJ1bWVudHMgJiBhY2Nlc3Nvcmllcyc6ICdJbnN0cnVtZW50b3MgeSBhY2Nlc29yaW9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnM0QgJiA0RCBnZWwnOiAnR2VsIDNEIHkgNEQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmFja2luZyBnZWwnOiAnR2VsIGRlIGNyYXF1ZW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdWdhciBwb3dkZXInOiAnUG9sdm8gZGUgYXrDumNhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhaW50aW5nIGdlbCc6ICdHZWwgZGUgcGludHVyYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NwaWRlciBnZWxzJzogJ0dlbGVzIGRlIGFyYcOxYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoJzogJ0FlcsOzZ3JhZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBaXJicnVzaCBzdGVuY2lscyc6ICdQbGFudGlsbGFzIGRlIGFlcsOzZ3JhZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBaXJicnVzaCBjb2xvcnMnOiAnQ29sb3JlcyBkZSBhZXLDs2dyYWZvJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWlyYnJ1c2ggZGV2aWNlJzogJ0Rpc3Bvc2l0aXZvIGRlIGFlcsOzZ3JhZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQaWdtZW50cyc6ICdQaWdtZW50b3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIGFydCBzdGFtcGluZyc6ICdFc3RhbXBhZG8gZGUgdcOxYXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdGVuY2lscyc6ICdwbGFudGlsbGFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3RhbXBpbmcgZ2VsJzogJ0dlbCBkZSBlc3RhbXBhY2nDs24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFtcGluZyBhY2Nlc3Nvcmllcyc6ICdBY2Nlc29yaW9zIGRlIGVzdGFtcGFjacOzbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYW5zZmVyIGZvaWxzJzogJ0zDoW1pbmFzIGRlIHRyYW5zZmVyZW5jaWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIEFydCBTdGlja2Vycyc6ICdBcnRlIGRlIHXDsWFzIHBlZ2F0aW5hcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dsaXR0ZXInOiAnQnJpbGxhbnRpbmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSaGluZXN0b25lcyc6ICdEaWFtYW50ZXMgZGUgaW1pdGFjacOzbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BpZXJjaW5nJzogJ1BlcmZvcmFjacOzbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BlYXJscyBhbmQgQ28uJzogJ1BlcmxhcyB5IENvLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VWIC8gTEVEIGxhbXBzJzogJ0zDoW1wYXJhcyBVViAvIExFRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01pbGxpbmcgY3V0dGVycyAmIGFjY2Vzc29yaWVzJzogJ0ZyZXNhcyB5IGFjY2Vzb3Jpb3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSb3V0ZXInOiAnRW5ydXRhZG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAnUm91dGVyIGJpdHMnOiAnQml0cyBkZSBlbnJ1dGFkb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICdDZXJhbWljIGJpdHMnOiAnQml0cyBkZSBjZXLDoW1pY2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQb2xpc2hpbmcgdG9vbCc6ICdIZXJyYW1pZW50YSBkZSBwdWxpZG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdEdXN0JzogJ1BvbHZvJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXNzb3JpZXMnOiAnQWNjZXNvcmlvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0h5Z2llbmUgJiBsaXF1aWRzJzogJ0hpZ2llbmUgeSBsw61xdWlkb3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdIeWdpZW5lIHByb2R1Y3RzJzogJ1Byb2R1Y3RvcyBkZSBoaWdpZW5lJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2xlYW5lciAmIENvLic6ICdDbGVhbmVyICYgQ28uJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCAmIEZvb3QgQ2FyZSc6ICdDdWlkYWRvIGRlIHXDsWFzIHkgcGllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rvb2xzJzogJ0luc3RydW1lbnRvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgT2lsICYgSGFuZCBDcmVhbSc6ICdBY2VpdGUgZGUgdcOxYXMgeSBjcmVtYSBkZSBtYW5vcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgb2lsICYgaGFuZCAnOiAnQWNlaXRlIGRlIHXDsWFzIHkgbWFub3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdCcnVzaGVzICYgYnJ1c2hlcyc6ICdQaW5jZWxlcyB5IHBpbmNlbGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTW9kZWxpbmcgdGVtcGxhdGVzJzogJ1BsYW50aWxsYXMgZGUgbW9kZWxhZG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXBzICYgYWNjZXNzb3JpZXMnOiAnQ29uc2Vqb3MgeSBhY2Nlc29yaW9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2xhc3NpYyB0aXBzJzogJ0NvbnNlam9zIGNsw6FzaWNvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZyZW5jaCB0aXBzJzogJ0NvbnNlam9zIGZyYW5jZXNlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0aWxldHRvIHRpcHMnOiAnQ29uc2Vqb3MgZGUgZXN0aWxldGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUdW5uZWwgdGlwcyc6ICdDb25zZWpvcyBwYXJhIHTDum5lbGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnRm9vdCB0aXBzJzogJ0NvbnNlam9zIHBhcmEgbG9zIHBpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXAgZ2x1ZSc6ICdQZWdhbWVudG8gZGUgcHVudGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXAgY3V0dGVyJzogJ0NvcnRhZG9yIGRlIHB1bnRhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcHMgYWNjZXNzb3JpZXMnOiAnQWNjZXNvcmlvcyBkZSBwdW50YXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGaWxlcyAmIEJ1ZmZlcnMnOiAnQXJjaGl2b3MgeSBiw7pmZXJlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zvb3QgZmlsZXMnOiAnTGltYSBwYXJhIHBpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDdXJ2ZWQgZmlsZXMnOiAnQXJjaGl2b3MgY3Vydm9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3RyYWlnaHQgZmlsZXMnOiAnQXJjaGl2b3MgcmVjdG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHJhcGV6ZSBmaWxlcyc6ICdBcmNoaXZvcyBkZSB0cmFwZWNpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2J1ZmZlcic6ICdidWZmZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmFjdGljZSBoYW5kcyAmIGZpbmdlcnMnOiAnUHJhY3RpY2EgbWFub3MgeSBkZWRvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rhc2sgbGlnaHRzJzogJ0x1Y2VzIGRlIHRyYWJham8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBcm1yZXN0cyc6ICdBcG95YWJyYXpvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhaW5lcnMgJiBzdG9yYWdlJzogJ0NvbnRlbmVkb3JlcyB5IGFsbWFjZW5hbWllbnRvJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheXMgJiBzaGVsdmVzJzogJ0V4cG9zaXRvcmVzIHkgZXN0YW50ZXLDrWFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3R1ZGlvIGZ1cm5pc2hpbmdzJzogJ01vYmlsaWFyaW8gZGUgZXN0dWRpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hc2tzJzogJ01hc2NhcmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnT3RoZXJzJzogJ090cm9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHJhaW5pbmcnOiAnQ2FwYWNpdGFjacOzbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYWluaW5nJzogJ0NhcGFjaXRhY2nDs24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcml2YXRlIGNvdXJzZXMnOiAnQ3Vyc29zIHByaXZhZG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1NFUlZJQ0VcclxuICAgICAgICAgICAgICAgICAgICAnRXhwcmVzcyBTaGlwcGluZyc6ICdFbnbDrW8gZXhwcmVzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zyb20gTW9uLUZyaSc6ICdkZSBsdW5lcyBhIHZpZXJuZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWFwZXN0IGluJzogJ23DoXMgcGVzYWRvIGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3dpdHplcmxhbmQgUHJpY2VzJzogJ1ByZWNpb3MgZGUgU3VpemEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdBYnNvbHV0ZWx5IHNhZmUnOiAnQWJzb2x1dGFtZW50ZSBzZWd1cm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXltZW50IE1ldGhvZHMnOiAnTcOpdG9kb3MgZGUgcGFnbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RpcmVjdCBmcm9tIHRoZSc6ICdEaXJlY3RvIGRlc2RlIGVsJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWFudWZhY3R1cmVyIGVpbmthdWZlbic6ICdmYWJyaWNhbnRlIGVpbmthdWZlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZyZWUgc2hpcHBpbmcnOiAnZW52w61vIGdyYXRpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zyb20gQ0hGIDEwMC4tJzogJ2Rlc2RlIENIRiAxMDAuLScsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9CQU5ORVJcclxuICAgICAgICAgICAgICAgICAgICAnRnJvbSB1cyBmb3IgeW91IOKZoSc6ICdEZSBub3NvdHJvcyBwYXJhIHRpIOKZoScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zlc3RpdmUgaG9saWRheXMgd2l0aCBvdXIgU2hlbGxhYyBjb2xvcnMnOiAnRmllc3RhcyBmZXN0aXZhcyBjb24gbnVlc3Ryb3MgY29sb3JlcyBTaGVsbGFjJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2hyaXN0bWFzIFNhbGUhJzogJ8KhVmVudGEgZGUgTmF2aWRhZCEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOb3cgZnJvbSBDSEYgNTAuIC0gMTAgJSBvZmYgRVZFUllUSElORyBhbmQgZnJvbSBDSEYgMC4gLSBhIGZyZWUgZ2lmdCEgLSBDb2RlIC0+IG1lcnJ5bmFpbHMnOiAnQWhvcmEgZGVzZGUgQ0hGIDUwLiAtIDEwJSBkZSBkZXNjdWVudG8gZW4gVE9ETyB5IGRlc2RlIENIRiAwLiAtIMKhdW4gcmVnYWxvIGdyYXRpcyEgLSBDw7NkaWdvIC0+IG1lcnJ5bmFpbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vVE9QIFBST0RVQ1RcclxuICAgICAgICAgICAgICAgICAgICAnc3BlY2lhbCBvZmZlcic6ICdvZmVydGEgZXNwZWNpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AgY29sbGVjdGlvbic6ICdjb2xlY2Npw7NuIHN1cGVyaW9yJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmluZCB5b3VyIHByb2R1Y3QgaGVyZS4uLic6ICdFbmN1ZW50cmEgdHUgcHJvZHVjdG8gYXF1w60gLi4uJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1BBUkFMTEFYXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zhc2hpb24gdHJlbmRzJzogJ3RlbmRlbmNpYXMgZGUgbGEgbW9kYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwZWNpYWwgb2ZmZXInOiAnb2ZlcnRhIGVzcGVjaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1BBUkFMTEFYXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NVQlNDUklCRSBUTyBPVVIgTkVXU0xFVFRFUiEnOiAnwqFTVVNDUsONQkVURSBBIE5VRVNUUk8gQk9MRVTDjU4hJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmV2ZXIgTWlzcyBBbnl0aGluZyBGcm9tIFN3aXNzIE5haWxzIEZhY3RvcnkgQnkgU2lnbmluZyBVcCBUbyBPdXIgTmV3c2xldHRlci4nOiAnTm8gc2UgcGllcmRhIG5hZGEgZGUgU3dpc3MgTmFpbHMgRmFjdG9yeSBzdXNjcmliacOpbmRvc2UgYSBudWVzdHJvIGJvbGV0w61uLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VudGVyIHlvdXIgZW1haWwnOiAnSW50cm9kdWNlIHR1IGNvcnJlbyBlbGVjdHLDs25pY28nLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdWJzY3JpYmUnOiAnc3VzY3JpYmlyJyxcclxuICAgICAgICAgICAgICAgICAgICAnYWJvdXQnOiAnYWNlcmNhIGRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnTkFJTFMgRkFDVE9SWSBpcyBvbmUgb2YgdGhlIHRvcCBzdXBwbGllcnMgdG8gdGhlIFN3aXNzIG5haWwgc2Fsb25zLiBCdXQgb3VyIGhpZ2gtcXVhbGl0eSBwcm9kdWN0cyBhcmUgYWxzbyB0aGUgcGVyZmVjdCBjaG9pY2UgZm9yIHByaXZhdGUgdXNlLiBBIGh1Z2Ugc2VsZWN0aW9uIG9mIG5haWwgcG9saXNoZXMsIG5haWwgYXJ0IHByb2R1Y3RzLCBVViBhbmQgTEVEIGxhbXBzIGFuZCBtYW55IG90aGVyIGFjY2Vzc29yaWVzIGZvciBzdWNjZXNzZnVsIG5haWwgbW9kZWxpbmcgYXdhaXQgeW91IGluIG91ciBOYWlscyBPbmxpbmUgU2hvcC4nOiAnTkFJTFMgRkFDVE9SWSBlcyB1bm8gZGUgbG9zIHByaW5jaXBhbGVzIHByb3ZlZWRvcmVzIGRlIGxvcyBzYWxvbmVzIGRlIHXDsWFzIHN1aXpvcy4gUGVybyBudWVzdHJvcyBwcm9kdWN0b3MgZGUgYWx0YSBjYWxpZGFkIHRhbWJpw6luIHNvbiBsYSBlbGVjY2nDs24gcGVyZmVjdGEgcGFyYSB1c28gcHJpdmFkby4gVW5hIGdyYW4gc2VsZWNjacOzbiBkZSBlc21hbHRlcyBkZSB1w7FhcywgcHJvZHVjdG9zIGRlIGRlY29yYWNpw7NuIGRlIHXDsWFzLCBsw6FtcGFyYXMgVVYgeSBMRUQgeSBtdWNob3Mgb3Ryb3MgYWNjZXNvcmlvcyBwYXJhIHVuIG1vZGVsYWRvIGRlIHXDsWFzIGV4aXRvc28gdGUgZXNwZXJhbiBlbiBudWVzdHJhIHRpZW5kYSBvbmxpbmUgZGUgdcOxYXMuJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2F0ZWdvcmllcyc6ICdjYXRlZ29yaWFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnaW5mb3JtYXRpb24nOiAnaW5mb3JtYWNpw7NuJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9jYXRpb25zJzogJ1ViaWNhY2lvbmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnRkFRJzogJ1ByZWd1bnRhcyBtw6FzIGZyZWN1ZW50ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdCMkIgcmVxdWVzdCc6ICdTb2xpY2l0dWQgQjJCJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGFjdCc6ICdDb250YWN0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlZW5nZW4gbG9jYXRpb24gR3VhcmRpYW4gV2F5IDYgNTcwNyBTZWVuZ2VuJzogJ1ViaWNhY2nDs24gZGUgU2VlbmdlbiBHdWFyZGlhbiBXYXkgNiA1NzA3IFNlZW5nZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQaG9uZSArIDQxIDYyIDc3MSAwMCAyMSc6ICdUZWzDqWZvbm86ICsgNDEgNjIgNzcxIDAwIDIxJyxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwgVXMnOiAnRW52w61lbm9zIHVuIGNvcnJlbyBlbGVjdHLDs25pY28nLFxyXG4gICAgICAgICAgICAgICAgICAgICdCZWF1dHkgaXMgaW4geW91ciBoYW5kcyc6ICdMYSBiZWxsZXphIGVzdGEgZW4gdHVzIG1hbm9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9naW4nOiAnQWNjZXNvJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9nb3V0JzogJ0NlcnJhciBzZXNpw7NuJyxcclxuICAgICAgICAgICAgICAgICAgICAnd2lzaGxpc3QnOiAnbGlzdGEgZGUgZGVzZW9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnTXkgQWNjb3VudCc6ICdNaSBjdWVudGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWdpc3Rlcic6ICdSZWdpc3RyYXJzZScsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9QUk9EVUNUXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2snOiAnZXNwYWxkYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvYWRpbmcnOiAnQ2FyZ2FuZG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdzaXplJzogJ1RhbGxhJyxcclxuICAgICAgICAgICAgICAgICAgICAncHJpY2UnOiAncHJlY2lvJyxcclxuICAgICAgICAgICAgICAgICAgICAnR3JlYXQgbmFpbCBwb2xpc2ggY29sb3IgcG9saXNoZXMgd2l0aCBhbiBleGNlcHRpb25hbGx5IG5vdXJpc2hpbmcgZm9ybXVsYS4gVGhlIGNvbXBvc2l0aW9uIHdvcmtzIHdpdGhvdXQgdGhlIDE4IGhhcm1mdWwgY2hlbWljYWxzIHRoYXQgY2FuIG5vcm1hbGx5IGJlIGZvdW5kIGluIG5haWwgcG9saXNoZXMuIFRoZXkgZHJ5IHN1cGVyIGZhc3QuIFlvdSBkb27igJl0IGhhdmUgdG8gd2FpdCBzbyBsb25nIGJlZm9yZSB5b3UgY2FuIGdvIGJhY2sgdG8gZXZlcnlkYXkgYnVzaW5lc3MuIFRoaXMgZWZmZWN0IGlzIHN1cHBvcnRlZCBieSB0aGUgYm9keeKAmXMgb3duIHdhcm10aC4gVGhpcyBoZWxwcyB0aGUgbmFpbCBwb2xpc2ggdG8gZHJ5IHZlcnkgcXVpY2tseS4gVGhlIHdhaXQgaXMgZmluYWxseSBvdmVyJzogJ0V4Y2VsZW50ZSBjb2xvciBkZSBlc21hbHRlIGRlIHXDsWFzIGNvbiB1bmEgZsOzcm11bGEgZXhjZXBjaW9uYWxtZW50ZSBudXRyaXRpdmEuIExhIGNvbXBvc2ljacOzbiBmdW5jaW9uYSBzaW4gbG9zIDE4IHF1w61taWNvcyBkYcOxaW5vcyBxdWUgbm9ybWFsbWVudGUgc2UgZW5jdWVudHJhbiBlbiBsb3MgZXNtYWx0ZXMgZGUgdcOxYXMuIFNlIHNlY2FuIG11eSByw6FwaWRvLiBObyB0aWVuZSBxdWUgZXNwZXJhciB0YW50byBhbnRlcyBkZSBwb2RlciB2b2x2ZXIgYSBzdXMgYWN0aXZpZGFkZXMgY290aWRpYW5hcy4gRXN0ZSBlZmVjdG8gZXMgYXBveWFkbyBwb3IgZWwgcHJvcGlvIGNhbG9yIGRlbCBjdWVycG8uIEVzdG8gYXl1ZGEgYSBxdWUgZWwgZXNtYWx0ZSBkZSB1w7FhcyBzZSBzZXF1ZSBtdXkgcsOhcGlkYW1lbnRlLiBMYSBlc3BlcmEgaGEgdGVybWluYWRvJyxcclxuICAgICAgICAgICAgICAgICAgICAnSG9tZSc6ICdDYXNhJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGFuZ3VhZ2UnOiAnaWRpb21hJyxcclxuICAgICAgICAgICAgICAgICAgICAnMTAgUHJvZHVjdHMgUGFyIFBhZ2UnOiAnMTAgcHJvZHVjdG9zIHBvciBww6FnaW5hJyxcclxuICAgICAgICAgICAgICAgICAgICAnMTUgUHJvZHVjdHMgUGFyIFBhZ2UnOiAnMTUgcHJvZHVjdG9zIHBvciBww6FnaW5hJyxcclxuICAgICAgICAgICAgICAgICAgICAnMjAgUHJvZHVjdHMgUGFyIFBhZ2UnOiAnMjAgcHJvZHVjdG9zIHBvciBww6FnaW5hJyxcclxuICAgICAgICAgICAgICAgICAgICAnU29ydGluZyBpdGVtcyc6ICdDbGFzaWZpY2FjacOzbiBkZSBlbGVtZW50b3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdIaWdoIFRvIExvdyc6ICdEZSBhbHRvIGEgYmFqbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvdyBUbyBIaWdoJzogJ0Jham8gYSBhbHRvJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmV3ZXN0JzogJ0VsIG3DoXMgbnVldm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBc2MgT3JkZXInOiAnT3JkZW4gQXNjJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzYyBPcmRlcic6ICdPcmRlbiBkZSBEZXNjJyxcclxuICAgICAgICAgICAgICAgICAgICAnWW91ciBDYXJ0IGlzIEVtcHR5JzogJ1R1IGNhcnJpdG8gZXN0YSB2YWPDrW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdFeHBsb3JlIG1vcmUgc2hvcnRsaXN0IHNvbWUgaXRlbXMuJzogJ0V4cGxvcmFyIG3DoXMgcHJlc2VsZWNjaW9uYXIgYWxndW5vcyBlbGVtZW50b3MuJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9hZCBNb3JlJzogJ0NhcmdhIG3DoXMnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmcjoge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9NRU5VXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NhbGUnOiBcIlZlbnRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvdXBvbnMnOiBcIkJvbnMgZGUgcsOpZHVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFydGVyIHNldHMnOiBcIktpdHMgZGUgZMOpbWFycmFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIHZhcm5pc2hlcyc6IFwiVmVybmlzIMOgIG9uZ2xlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIHZhcm5pc2hlcyAtIGNvbG9yIHZhcm5pc2hlcyc6ICdWZXJuaXMgw6Agb25nbGVzIC0gdmVybmlzIGRlIGNvdWxldXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdHZWwgJiBhY3J5bGljIHN5c3RlbSc6IFwiU3lzdMOobWUgZ2VsICYgYWNyeWxpcXVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjcnlsaWMgc3lzdGVtJzogXCJTeXN0w6htZSBhY3J5bGlxdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAnUG9seSBhY3J5bGljIGdlbCc6IFwiR2VsIHBvbHkgYWNyeWxpcXVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RpcHBpbmcgcG93ZGVyJzogXCJQb3VkcmUgw6AgdHJlbXBlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdHZWwgYnVpbGQtdXAnOiBcIkFjY3VtdWxhdGlvbiBkZSBnZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAnUHJpbWVyICYgYmFzZSBnZWwnOiBcIlByaW1lciAmIGdlbCBkZSBiYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1J1YmJlciBCYXNlIEdlbCc6IFwiR2VsIMOgIGJhc2UgZGUgY2FvdXRjaG91Y1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdCdWlsZC11cCBnZWwnOiBcIkdlbCBkZSBjb25zdHJ1Y3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAnZmliZXJnbGFzcyc6IFwiZmlicmUgZGUgdmVycmVcIixcclxuICAgICAgICAgICAgICAgICAgICAnTEVEJzogXCJMRURcIixcclxuICAgICAgICAgICAgICAgICAgICAnMS1waGFzZSBnZWwnOiBcImdlbCBtb25vcGhhc2lxdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAnQ292ZXIgY2Ftb3VmbGFnZSc6IFwiQ291dmVydHVyZSBjYW1vdWZsYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZyZW5jaCBnZWxzJzogXCJnZWxzIGZyYW7Dp2Fpc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdzZWFsaW5nJzogXCJzY2VsbGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdVViAvIExFRCBjb2xvciBnZWxzJzogXCJHZWxzIGRlIGNvdWxldXIgVVYgLyBMRURcIixcclxuICAgICAgICAgICAgICAgICAgICAnT25lIHN0cm9rZSc6IFwiVW4gY291cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb2xvciBHZWxzJzogXCJHZWxzIGRlIGNvdWxldXJcIixcclxuICAgICAgICAgICAgICAgICAgICAnTEVEIC8gVVYgUkFMJzogXCJMRUQvVVYgUkFMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyZW5kIGNvbG9ycyc6IFwiQ291bGV1cnMgdGVuZGFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAnbWFjYXJvbnMnOiBcIm1hY2Fyb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Ryb3BpY2FsIERyZWFtJzogXCJSw6p2ZSBUcm9waWNhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdOZW9uJzogXCJOw6lvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdGcmVzaCAmIENvb2wnOiBcIkZyYWlzIGV0IGZyYWlzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ051ZGUnOiBcIk51XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dsaXR0ZXIgZ2Vscyc6IFwiR2VscyBwYWlsbGV0w6lzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hvbG9ncmFtJzogXCJob2xvZ3JhbW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByZWNpb3VzIFN0b25lJzogXCJQaWVycmUgcHLDqWNpZXVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTcGFya2xpbmcgV2luZXMnOiBcIlZpbnMgTW91c3NldXhcIixcclxuICAgICAgICAgICAgICAgICAgICAnUGVhcmwgZHJlYW1zJzogXCJSw6p2ZXMgZGUgcGVybGVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2ggcXVhbGl0eSBnbGl0dGVyIGdlbCc6IFwiR2VsIHBhaWxsZXTDqSBkZSBoYXV0ZSBxdWFsaXTDqVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdNaWxreSBXYXknOiBcInZvaWUgTGFjdMOpZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdNZXJtYWlkJzogXCJTaXLDqG5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zhc2hpb24gc3Rhcic6IFwiU3RhciBkZSBsYSBtb2RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hZ2ljIGdlbHMnOiBcIkdlbHMgbWFnaXF1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAnRWZmZWN0IGdlbHMnOiBcIkdlbHMgw6AgZWZmZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAnQ2hhbWVsZW9uIGVmZmVjdCc6IFwiRWZmZXQgY2Ftw6lsw6lvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaGVybW8gZ2Vscyc6IFwiVGhlcm1vZ2Vsc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdHbG9zcyBnZWxzJzogXCJHZWxzIGJyaWxsYW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYSBWaWUgTmF0dXJlbCc6IFwiTGEgVmllIE5hdHVyZWxsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdHb2xkaWUgRHJlYW0gQmFsbCc6IFwiQm91bGUgZGUgcsOqdmUgR29sZGllXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RhZmZvZGlsIGNhc2UnOiBcIsOJdHVpIMOgIGpvbnF1aWxsZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzdGVsJzogXCJQYXN0ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAnTWluZXJhbCBwb3dkZXInOiBcIlBvdWRyZSBtaW7DqXJhbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAnTXVzZSBvZiBMaWdodCc6IFwiTXVzZSBkZSBsYSBMdW1pw6hyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXN0ZWwgc2VyaWVzJzogXCJTw6lyaWUgcGFzdGVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NhdG1hdGljJzogXCJDYXRtYXRpcXVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJzNEIENhdCBFeWUgR2VsJzogXCJHZWwgeWV1eCBkZSBjaGF0IDNEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hZ25ldHMnOiBcIkFpbWFudHNcIixcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgU2hlbGxhYyAtIGdlbCB2YXJuaXNoJzogXCJVViAvIExFRCBTaGVsbGFjIC0gdmVybmlzIGdlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdGbGV4eSBIeWJyaWQgR2VsJzogXCJHZWwgSHlicmlkZSBGbGV4eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIEFydCc6IFwiTmFpbCBBcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAnSW5zdHJ1bWVudHMgJiBhY2Nlc3Nvcmllcyc6IFwiSW5zdHJ1bWVudHMgZXQgYWNjZXNzb2lyZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAnM0QgJiA0RCBnZWwnOiBcIkdlbHMgM0QgZXQgNERcIixcclxuICAgICAgICAgICAgICAgICAgICAnQ3JhY2tpbmcgZ2VsJzogXCJHZWwgY3JhcXVhbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAnU3VnYXIgcG93ZGVyJzogXCJTdWNyZSBlbiBwb3VkcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAnUGFpbnRpbmcgZ2VsJzogXCJHZWwgZGUgcGVpbnR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAnU3BpZGVyIGdlbHMnOiBcIkdlbHMgZCdhcmFpZ27DqWVcIixcclxuICAgICAgICAgICAgICAgICAgICAnQWlyYnJ1c2gnOiBcIkHDqXJvZ3JhcGhlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoIHN0ZW5jaWxzJzogXCJQb2Nob2lycyBhw6lyb2dyYXBoZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdBaXJicnVzaCBjb2xvcnMnOiBcIkNvdWxldXJzIGHDqXJvZ3JhcGhlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoIGRldmljZSc6IFwiQXBwYXJlaWwgYcOpcm9ncmFwaGVcIixcclxuICAgICAgICAgICAgICAgICAgICAnUGlnbWVudHMnOiBcIlBpZ21lbnRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgYXJ0IHN0YW1waW5nJzogXCJFc3RhbXBhZ2UgbmFpbCBhcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAnc3RlbmNpbHMnOiBcInBvY2hvaXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YW1waW5nIGdlbCc6IFwiR2VsIGQnZXN0YW1wYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YW1waW5nIGFjY2Vzc29yaWVzJzogXCJBY2Nlc3NvaXJlcyBkJ2VzdGFtcGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmFuc2ZlciBmb2lscyc6IFwiRmV1aWxsZXMgZGUgdHJhbnNmZXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgQXJ0IFN0aWNrZXJzJzogXCJBdXRvY29sbGFudHMgTmFpbCBBcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAnR2xpdHRlcic6IFwiQnJpbGxlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdSaGluZXN0b25lcyc6IFwiU3RyYXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BpZXJjaW5nJzogXCJQZXLDp2FudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdQZWFybHMgYW5kIENvLic6IFwiUGVybGVzIGV0IENpZS5cIixcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgbGFtcHMnOiBcIkxhbXBlcyBVViAvIExFRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdNaWxsaW5nIGN1dHRlcnMgJiBhY2Nlc3Nvcmllcyc6IFwiRnJhaXNlcyBldCBhY2Nlc3NvaXJlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdSb3V0ZXInOiBcIlJvdXRldXJcIixcclxuICAgICAgICAgICAgICAgICAgICAnUm91dGVyIGJpdHMnOiBcIkJpdHMgZGUgcm91dGV1clwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdDZXJhbWljIGJpdHMnOiBcIkVtYm91dHMgZW4gY8OpcmFtaXF1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdQb2xpc2hpbmcgdG9vbCc6IFwiT3V0aWwgZGUgcG9saXNzYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0R1c3QnOiBcIlBvdXNzacOocmVcIixcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXNzb3JpZXMnOiBcIkFjY2Vzc29pcmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0h5Z2llbmUgJiBsaXF1aWRzJzogXCJIeWdpw6huZSAmIGxpcXVpZGVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0h5Z2llbmUgcHJvZHVjdHMnOiBcIlByb2R1aXRzIGQnaHlnacOobmVcIixcclxuICAgICAgICAgICAgICAgICAgICAnQ2xlYW5lciAmIENvLic6IFwiTmV0dG95ZXVyICYgQ2llLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsICYgRm9vdCBDYXJlJzogXCJTb2lucyBkZXMgb25nbGVzIGV0IGRlcyBwaWVkc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUb29scyc6IFwiT3V0aWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgT2lsICYgSGFuZCBDcmVhbSc6ICdIdWlsZSBwb3VyIGxlcyBvbmdsZXMgZXQgY3LDqG1lIHBvdXIgbGVzIG1haW5zJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBvaWwgJiBoYW5kICc6IFwiSHVpbGUgZCdvbmdsZSAmIG1haW5cIixcclxuICAgICAgICAgICAgICAgICAgICAnQnJ1c2hlcyAmIGJydXNoZXMnOiBcIkJyb3NzZXMgJiBicm9zc2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01vZGVsaW5nIHRlbXBsYXRlcyc6IFwiTW9kw6hsZXMgZGUgbW9kw6lsaXNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXBzICYgYWNjZXNzb3JpZXMnOiBcIkFzdHVjZXMgJiBhY2Nlc3NvaXJlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdDbGFzc2ljIHRpcHMnOiBcIkNvbnNlaWxzIGNsYXNzaXF1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAnRnJlbmNoIHRpcHMnOiBcIkNvbnNlaWxzIGRlIGZyYW7Dp2Fpc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGlsZXR0byB0aXBzJzogXCJDb25zZWlscyBkZSBzdHlsZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAnVHVubmVsIHRpcHMnOiBcIkNvbnNlaWxzIHBvdXIgbGVzIHR1bm5lbHNcIixcclxuICAgICAgICAgICAgICAgICAgICAnRm9vdCB0aXBzJzogXCJDb25zZWlscyBwb3VyIGxlcyBwaWVkc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXAgZ2x1ZSc6IFwiUG9pbnRlIGRlIGNvbGxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcCBjdXR0ZXInOiBcIkNvdXBldXIgZGUgcG9pbnRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcHMgYWNjZXNzb3JpZXMnOiBcIkNvbnNlaWxzIGFjY2Vzc29pcmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpbGVzICYgQnVmZmVycyc6IFwiRmljaGllcnMgZXQgdGFtcG9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdGb290IGZpbGVzJzogXCJGaWNoaWVycyBkZSBwaWVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0N1cnZlZCBmaWxlcyc6IFwiRmljaGllcnMgY291cmJlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdHJhaWdodCBmaWxlcyc6IFwiRmljaGllcnMgZHJvaXRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYXBlemUgZmlsZXMnOiBcIkZpY2hpZXJzIHRyYXDDqHplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2J1ZmZlcic6IFwiYW1vcnRpclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmFjdGljZSBoYW5kcyAmIGZpbmdlcnMnOiBcIlByYXRpcXVlciBsZXMgbWFpbnMgZXQgbGVzIGRvaWd0c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXNrIGxpZ2h0cyc6IFwiVm95YW50cyBkZSB0w6JjaGVcIixcclxuICAgICAgICAgICAgICAgICAgICAnQXJtcmVzdHMnOiBcIkFjY291ZG9pcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGFpbmVycyAmIHN0b3JhZ2UnOiBcIkNvbnRlbmV1cnMgJiBzdG9ja2FnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5cyAmIHNoZWx2ZXMnOiBcIlByw6lzZW50b2lycyAmIMOpdGFnw6hyZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAnU3R1ZGlvIGZ1cm5pc2hpbmdzJzogXCJNb2JpbGllciBkZSBzdHVkaW9cIixcclxuICAgICAgICAgICAgICAgICAgICAnTWFza3MnOiBcIk1hc3F1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAnT3RoZXJzJzogXCJBdXRyZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAnVHJhaW5pbmcnOiBcIkVudHJhw65uZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAnVHJhaW5pbmcnOiBcIkVudHJhw65uZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAnUHJpdmF0ZSBjb3Vyc2VzJzogXCJDb3VycyBwcml2w6lzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9TRVJWSUNFXHJcbiAgICAgICAgICAgICAgICAgICAgJ0V4cHJlc3MgU2hpcHBpbmcnOiAnTGl2cmFpc29uIGV4cHJlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmcm9tIE1vbi1GcmknOiAnZHUgbHVuZGkgYXUgdmVuZHJlZGknLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWFwZXN0IGluJzogJ3BsdXMgZ3JvcyBkYW5zJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3dpdHplcmxhbmQgUHJpY2VzJzogJ1ByaXggU3Vpc3NlJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWJzb2x1dGVseSBzYWZlJzogJ0Fic29sdW1lbnQgc8O7cicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnQgTWV0aG9kcyc6ICdtw6l0aG9kZXMgZGUgcGF5ZW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXJlY3QgZnJvbSB0aGUnOiAnRGlyZWN0ZW1lbnQgZGUgbGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYW51ZmFjdHVyZXIgZWlua2F1ZmVuJzogJ2ZhYnJpY2FudCBlaW5rYXVmZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdmcmVlIHNoaXBwaW5nJzogJ2xpdnJhaXNvbiBncmF0dWl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zyb20gQ0hGIDEwMC4tJzogJ2TDqHMgQ0hGIDEwMC4tJyxcclxuICAgICAgICAgICAgICAgICAgICAvL0JBTk5FUlxyXG4gICAgICAgICAgICAgICAgICAgICdGcm9tIHVzIGZvciB5b3Ug4pmhJzogJ0RlIG5vdXMgcG91ciB2b3VzJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmVzdGl2ZSBob2xpZGF5cyB3aXRoIG91ciBTaGVsbGFjIGNvbG9ycyc6ICdEZXMgdmFjYW5jZXMgZmVzdGl2ZXMgYXZlYyBub3MgY291bGV1cnMgU2hlbGxhYycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NocmlzdG1hcyBTYWxlISc6ICdWZW50ZSBkZSBOb8OrbCAhJyxcclxuICAgICAgICAgICAgICAgICAgICAnTm93IGZyb20gQ0hGIDUwLiAtIDEwICUgb2ZmIEVWRVJZVEhJTkcgYW5kIGZyb20gQ0hGIDAuIC0gYSBmcmVlIGdpZnQhIC0gQ29kZSAtPiBtZXJyeW5haWxzJzogJ01haW50ZW5hbnQgZMOocyBDSEYgNTAuIC0gMTAgJSBkZSByw6lkdWN0aW9uIHN1ciBUT1VUIGV0IGTDqHMgQ0hGIDAuIC0gdW4gY2FkZWF1IG9mZmVydCAhIC0gQ29kZSAtPiBNZXJyeW5haWxzJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1RPUCBQUk9EVUNUXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwZWNpYWwgb2ZmZXInOiAnb2ZmcmUgc3DDqWNpYWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAndG9wIGNvbGxlY3Rpb24nOiAnaGF1dCBkZSBnYW1tZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpbmQgeW91ciBwcm9kdWN0IGhlcmUuLi4nOiAnVHJvdXZleiB2b3RyZSBwcm9kdWl0IGljaS4uLicsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9QQVJBTExBWFxyXG4gICAgICAgICAgICAgICAgICAgICdmYXNoaW9uIHRyZW5kcyc6ICd0ZW5kYW5jZXMgZGUgbGEgbW9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwZWNpYWwgb2ZmZXInOiAnb2ZmcmUgc3DDqWNpYWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1BBUkFMTEFYXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NVQlNDUklCRSBUTyBPVVIgTkVXU0xFVFRFUiEnOiBcIkFCT05ORVotVk9VUyDDgCBOT1RSRSBORVdTTEVUVEVSIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdOZXZlciBNaXNzIEFueXRoaW5nIEZyb20gU3dpc3MgTmFpbHMgRmFjdG9yeSBCeSBTaWduaW5nIFVwIFRvIE91ciBOZXdzbGV0dGVyLic6IFwiTmUgbWFucXVleiByaWVuIGRlIFN3aXNzIE5haWxzIEZhY3RvcnkgZW4gdm91cyBpbnNjcml2YW50IMOgIG5vdHJlIG5ld3NsZXR0ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VudGVyIHlvdXIgZW1haWwnOiBcIkVudHJlciB2b3RyZSBFbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdWJzY3JpYmUnOiBcInMnYWJvbm5lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdhYm91dCc6IFwic3VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05BSUxTIEZBQ1RPUlkgaXMgb25lIG9mIHRoZSB0b3Agc3VwcGxpZXJzIHRvIHRoZSBTd2lzcyBuYWlsIHNhbG9ucy4gQnV0IG91ciBoaWdoLXF1YWxpdHkgcHJvZHVjdHMgYXJlIGFsc28gdGhlIHBlcmZlY3QgY2hvaWNlIGZvciBwcml2YXRlIHVzZS4gQSBodWdlIHNlbGVjdGlvbiBvZiBuYWlsIHBvbGlzaGVzLCBuYWlsIGFydCBwcm9kdWN0cywgVVYgYW5kIExFRCBsYW1wcyBhbmQgbWFueSBvdGhlciBhY2Nlc3NvcmllcyBmb3Igc3VjY2Vzc2Z1bCBuYWlsIG1vZGVsaW5nIGF3YWl0IHlvdSBpbiBvdXIgTmFpbHMgT25saW5lIFNob3AuJzogXCJOQUlMUyBGQUNUT1JZIGVzdCBsJ3VuIGRlcyBwcmluY2lwYXV4IGZvdXJuaXNzZXVycyBkZXMgc2Fsb25zIGRlIG1hbnVjdXJlIHN1aXNzZXMuIE1haXMgbm9zIHByb2R1aXRzIGRlIGhhdXRlIHF1YWxpdMOpIHNvbnQgw6lnYWxlbWVudCBsZSBjaG9peCBwYXJmYWl0IHBvdXIgdW4gdXNhZ2UgcHJpdsOpLiBVbiB2YXN0ZSBjaG9peCBkZSB2ZXJuaXMgw6Agb25nbGVzLCBwcm9kdWl0cyBkZSBuYWlsIGFydCwgbGFtcGVzIFVWIGV0IExFRCBldCBkZSBub21icmV1eCBhdXRyZXMgYWNjZXNzb2lyZXMgcG91ciB1biBtb2RlbGFnZSByw6l1c3NpIGRlcyBvbmdsZXMgdm91cyBhdHRlbmRlbnQgZGFucyBub3RyZSBib3V0aXF1ZSBlbiBsaWduZSBkJ29uZ2xlcy5cIixcclxuICAgICAgICAgICAgICAgICAgICAnY2F0ZWdvcmllcyc6IFwiY2F0w6lnb3JpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAnaW5mb3JtYXRpb24nOiBcImluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvY2F0aW9ucyc6IFwiRW1wbGFjZW1lbnRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZBUSc6IFwiRkFRXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0IyQiByZXF1ZXN0JzogXCJkZW1hbmRlIEIyQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWN0JzogXCJDb250YWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlZW5nZW4gbG9jYXRpb24gR3VhcmRpYW4gV2F5IDYgNTcwNyBTZWVuZ2VuJzogXCJTZWVuZ2VuIGVtcGxhY2VtZW50IEd1YXJkaWFuIFdheSA2IDU3MDcgU2VlbmdlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdQaG9uZSArIDQxIDYyIDc3MSAwMCAyMSc6IFwiVMOpbMOpcGhvbmUgOiArIDQxIDYyIDc3MSAwMCAyMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCBVcyc6IFwiRW52b3llei1ub3VzIHVuIGVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JlYXV0eSBpcyBpbiB5b3VyIGhhbmRzJzogJ0xhIGJlYXV0w6kgZXN0IGVudHJlIHZvcyBtYWlucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvZ2luJzogJ0Nvbm5leGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvZ291dCc6ICdTZSBkw6ljb25uZWN0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICd3aXNobGlzdCc6IFwibGlzdGUgZGUgc291aGFpdHNcIixcclxuICAgICAgICAgICAgICAgICAgICAnTXkgQWNjb3VudCc6IFwiTW9uIGNvbXB0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWdpc3Rlcic6IFwiUydpbnNjcmlyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vUFJPRFVDVFxyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrJzogXCJyZXRvdXJcIixcclxuICAgICAgICAgICAgICAgICAgICAnTG9hZGluZyc6IFwiQ2hhcmdlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdzaXplJzogXCJUYWlsbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAncHJpY2UnOiBcImxlIHByaXhcIixcclxuICAgICAgICAgICAgICAgICAgICAnR3JlYXQgbmFpbCBwb2xpc2ggY29sb3IgcG9saXNoZXMgd2l0aCBhbiBleGNlcHRpb25hbGx5IG5vdXJpc2hpbmcgZm9ybXVsYS4gVGhlIGNvbXBvc2l0aW9uIHdvcmtzIHdpdGhvdXQgdGhlIDE4IGhhcm1mdWwgY2hlbWljYWxzIHRoYXQgY2FuIG5vcm1hbGx5IGJlIGZvdW5kIGluIG5haWwgcG9saXNoZXMuIFRoZXkgZHJ5IHN1cGVyIGZhc3QuIFlvdSBkb27igJl0IGhhdmUgdG8gd2FpdCBzbyBsb25nIGJlZm9yZSB5b3UgY2FuIGdvIGJhY2sgdG8gZXZlcnlkYXkgYnVzaW5lc3MuIFRoaXMgZWZmZWN0IGlzIHN1cHBvcnRlZCBieSB0aGUgYm9keeKAmXMgb3duIHdhcm10aC4gVGhpcyBoZWxwcyB0aGUgbmFpbCBwb2xpc2ggdG8gZHJ5IHZlcnkgcXVpY2tseS4gVGhlIHdhaXQgaXMgZmluYWxseSBvdmVyJzogXCJEZSBzdXBlcmJlcyB2ZXJuaXMgw6Agb25nbGVzIGF2ZWMgdW5lIGZvcm11bGUgZXhjZXB0aW9ubmVsbGVtZW50IG5vdXJyaXNzYW50ZS4gTGEgY29tcG9zaXRpb24gZm9uY3Rpb25uZSBzYW5zIGxlcyAxOCBwcm9kdWl0cyBjaGltaXF1ZXMgbm9jaWZzIHF1ZSBsJ29uIHRyb3V2ZSBub3JtYWxlbWVudCBkYW5zIGxlcyB2ZXJuaXMgw6Agb25nbGVzLiBJbHMgc8OoY2hlbnQgc3VwZXIgdml0ZS4gVm91cyBuJ2F2ZXogcGFzIMOgIGF0dGVuZHJlIHNpIGxvbmd0ZW1wcyBhdmFudCBkZSBwb3V2b2lyIHJlcHJlbmRyZSB2b3MgYWN0aXZpdMOpcyBxdW90aWRpZW5uZXMuIENldCBlZmZldCBlc3Qgc291dGVudSBwYXIgbGEgcHJvcHJlIGNoYWxldXIgZHUgY29ycHMuIENlbGEgYWlkZSBsZSB2ZXJuaXMgw6Agb25nbGVzIMOgIHPDqWNoZXIgdHLDqHMgcmFwaWRlbWVudC4gTCdhdHRlbnRlIGVzdCBmaW5hbGVtZW50IHRlcm1pbsOpZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdIb21lJzogXCJBY2N1ZWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xhbmd1YWdlJzogXCJMYW5ndWVcIixcclxuICAgICAgICAgICAgICAgICAgICAnMTAgUHJvZHVjdHMgUGFyIFBhZ2UnOiBcIjEwIHByb2R1aXRzIHBhciBwYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJzE1IFByb2R1Y3RzIFBhciBQYWdlJzogXCIxNSBwcm9kdWl0cyBwYXIgcGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICcyMCBQcm9kdWN0cyBQYXIgUGFnZSc6IFwiMjAgcHJvZHVpdHMgcGFyIHBhZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICAnU29ydGluZyBpdGVtcyc6IFwiVHJpZXIgbGVzIGFydGljbGVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2ggVG8gTG93JzogXCJIYXV0IGVuIGJhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb3cgVG8gSGlnaCc6IFwiRGUgYmFzIGVuIGhhdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAnTmV3ZXN0JzogXCJMZSBwbHVzIHLDqWNlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAnQXNjIE9yZGVyJzogXCJPcmRyZSBhc2NlbmRhbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAnRGVzYyBPcmRlcic6IFwiT3JkcmUgZGVzY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdZb3VyIENhcnQgaXMgRW1wdHknOiBcIlZvdHJlIHBhbmllciBlc3QgdmlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdFeHBsb3JlIG1vcmUgc2hvcnRsaXN0IHNvbWUgaXRlbXMuJzogXCJFeHBsb3JleiBwbHVzIGRlIHByw6lzw6lsZWN0aW9uIGRlIGNlcnRhaW5zIMOpbMOpbWVudHMuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvYWQgTW9yZSc6IFwiQ2hhcmdlciBwbHVzXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGl0OiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAvL01FTlVcclxuICAgICAgICAgICAgICAgICAgICAnU2FsZSc6IFwiVmVuZGl0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb3Vwb25zJzogXCJCdW9uaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFydGVyIHNldHMnOiBcIlNldCBkaSBwYXJ0ZW56YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIHZhcm5pc2hlcyc6IFwiU21hbHRpIHBlciB1bmdoaWVcIixcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCB2YXJuaXNoZXMgLSBjb2xvciB2YXJuaXNoZXMnOiAnU21hbHRpIHBlciB1bmdoaWUgLSBzbWFsdGkgY29sb3JhdGknLFxyXG4gICAgICAgICAgICAgICAgICAgICdHZWwgJiBhY3J5bGljIHN5c3RlbSc6IFwiU2lzdGVtYSBnZWwgZSBhY3JpbGljb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY3J5bGljIHN5c3RlbSc6IFwiU2lzdGVtYSBhY3JpbGljb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdQb2x5IGFjcnlsaWMgZ2VsJzogXCJHZWwgcG9saWFjcmlsaWNvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RpcHBpbmcgcG93ZGVyJzogXCJQb2x2ZXJlIGRhIGltbWVyc2lvbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAnR2VsIGJ1aWxkLXVwJzogXCJSaWNvc3RydXppb25lIGluIGdlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmltZXIgJiBiYXNlIGdlbCc6IFwiUHJpbWVyIGUgZ2VsIGJhc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAnUnViYmVyIEJhc2UgR2VsJzogXCJHZWwgZGkgYmFzZSBpbiBnb21tYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdCdWlsZC11cCBnZWwnOiBcIkdlbCBkaSByaWNvc3RydXppb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZpYmVyZ2xhc3MnOiBcImZpYnJhIGRpIHZldHJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xFRCc6IFwiUE9SVEFUT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICcxLXBoYXNlIGdlbCc6IFwiZ2VsIG1vbm9mYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvdmVyIGNhbW91ZmxhZ2UnOiBcIkNvcGVydHVyYSBtaW1ldGljYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdGcmVuY2ggZ2Vscyc6IFwiZ2VsIGZyYW5jZXNpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlYWxpbmcnOiBcInNpZ2lsbGF0dXJhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VWIC8gTEVEIGNvbG9yIGdlbHMnOiBcIkdlbCBjb2xvcmF0aSBVVi9MRURcIixcclxuICAgICAgICAgICAgICAgICAgICAnT25lIHN0cm9rZSc6IFwiVW4gY29scG9cIixcclxuICAgICAgICAgICAgICAgICAgICAnQ29sb3IgR2Vscyc6IFwiR2VsIGNvbG9yYXRpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xFRCAvIFVWIFJBTCc6IFwiTEVEIC8gVVYgUkFMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyZW5kIGNvbG9ycyc6IFwiQ29sb3JpIGRpIHRlbmRlbnphXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21hY2Fyb25zJzogXCJtYWNhcm9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcm9waWNhbCBEcmVhbSc6IFwiU29nbm8gdHJvcGljYWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05lb24nOiBcIk5lb25cIixcclxuICAgICAgICAgICAgICAgICAgICAnRnJlc2ggJiBDb29sJzogXCJGcmVzY28gZSBmcmVzY29cIixcclxuICAgICAgICAgICAgICAgICAgICAnTnVkZSc6IFwiTnVkb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdHbGl0dGVyIGdlbHMnOiBcIkdlbCBnbGl0dGVyYXRpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hvbG9ncmFtJzogXCJvbG9ncmFtbWFcIixcclxuICAgICAgICAgICAgICAgICAgICAnUHJlY2lvdXMgU3RvbmUnOiBcIlBpZXRyYSBwcmV6aW9zYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTcGFya2xpbmcgV2luZXMnOiBcIlNwdW1hbnRpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BlYXJsIGRyZWFtcyc6IFwic29nbmkgZGkgcGVybGVcIixcclxuICAgICAgICAgICAgICAgICAgICAnSGlnaCBxdWFsaXR5IGdsaXR0ZXIgZ2VsJzogXCJHZWwgZ2xpdHRlcmF0byBkaSBhbHRhIHF1YWxpdMOgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01pbGt5IFdheSc6IFwidmlhIExhdHRlYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdNZXJtYWlkJzogXCJTaXJlbmFcIixcclxuICAgICAgICAgICAgICAgICAgICAnRmFzaGlvbiBzdGFyJzogXCJTdGVsbGEgZGVsbGEgbW9kYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYWdpYyBnZWxzJzogXCJHZWwgbWFnaWNpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VmZmVjdCBnZWxzJzogXCJHZWwgZWZmZXR0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdDaGFtZWxlb24gZWZmZWN0JzogXCJFZmZldHRvIGNhbWFsZW9udGVcIixcclxuICAgICAgICAgICAgICAgICAgICAnVGhlcm1vIGdlbHMnOiBcIkdlbCB0ZXJtaWNpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dsb3NzIGdlbHMnOiBcIkdlbCBsdWNpZGlcIixcclxuICAgICAgICAgICAgICAgICAgICAnTGEgVmllIE5hdHVyZWwnOiBcIkxhIFZpZSBOYXR1cmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dvbGRpZSBEcmVhbSBCYWxsJzogXCJHb2xkaWUgRHJlYW0gQmFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdEYWZmb2RpbCBjYXNlJzogXCJjYXNvIG5hcmNpc29cIixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzdGVsJzogXCJQYXN0ZWxsb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdNaW5lcmFsIHBvd2Rlcic6IFwiUG9sdmVyZSBtaW5lcmFsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdNdXNlIG9mIExpZ2h0JzogXCJNdXNhIGRlbGxhIEx1Y2VcIixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzdGVsIHNlcmllcyc6IFwic2VyaWUgcGFzdGVsbG9cIixcclxuICAgICAgICAgICAgICAgICAgICAnQ2F0bWF0aWMnOiBcIkNhdG1hdGljb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICczRCBDYXQgRXllIEdlbCc6IFwiR2VsIG9jY2hpIGRpIGdhdHRvIDNEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hZ25ldHMnOiBcIm1hZ25ldGlcIixcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgU2hlbGxhYyAtIGdlbCB2YXJuaXNoJzogXCJVViAvIExFRCBTaGVsbGFjIC0gdmVybmljZSBnZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAnRmxleHkgSHlicmlkIEdlbCc6IFwiR2VsIGlicmlkbyBmbGVzc2liaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgQXJ0JzogXCJBcnRlIGRlbCBjaGlvZG9cIixcclxuICAgICAgICAgICAgICAgICAgICAnSW5zdHJ1bWVudHMgJiBhY2Nlc3Nvcmllcyc6IFwiU3RydW1lbnRpIGUgYWNjZXNzb3JpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJzNEICYgNEQgZ2VsJzogXCJHZWwgM0QgZSA0RFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmFja2luZyBnZWwnOiBcIkdlbCBzY3JlcG9sYW50ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdWdhciBwb3dkZXInOiBcInp1Y2NoZXJvIGEgdmVsb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYWludGluZyBnZWwnOiBcIkdlbCBwZXIgcGl0dHVyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTcGlkZXIgZ2Vscyc6IFwiR2VsIGRpIHJhZ25vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoJzogXCJBZXJvZ3JhZm9cIixcclxuICAgICAgICAgICAgICAgICAgICAnQWlyYnJ1c2ggc3RlbmNpbHMnOiBcIlN0ZW5jaWwgcGVyIGFlcm9ncmFmb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdBaXJicnVzaCBjb2xvcnMnOiBcIkNvbG9yaSBkZWxsJ2Flcm9ncmFmb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdBaXJicnVzaCBkZXZpY2UnOiBcIkRpc3Bvc2l0aXZvIGFlcm9ncmFmb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdQaWdtZW50cyc6IFwicGlnbWVudGlcIixcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBhcnQgc3RhbXBpbmcnOiBcIlN0YW1wZSBwZXIgdW5naGllXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0ZW5jaWxzJzogXCJzdGFtcGluaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFtcGluZyBnZWwnOiBcIkdlbCBwZXIgc3RhbXBhZ2dpb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFtcGluZyBhY2Nlc3Nvcmllcyc6IFwiQWNjZXNzb3JpIHBlciB0aW1icmF0dXJhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYW5zZmVyIGZvaWxzJzogXCJQZWxsaWNvbGUgZGkgdHJhc2ZlcmltZW50b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIEFydCBTdGlja2Vycyc6IFwiQWRlc2l2aSBwZXIgdW5naGllXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dsaXR0ZXInOiBcInNjaW50aWxsaW9cIixcclxuICAgICAgICAgICAgICAgICAgICAnUmhpbmVzdG9uZXMnOiBcIlN0cmFzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdQaWVyY2luZyc6IFwiUGllcmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAnUGVhcmxzIGFuZCBDby4nOiBcIlBlcmxlIGUgQ28uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VWIC8gTEVEIGxhbXBzJzogXCJMYW1wYWRlIFVWL0xFRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdNaWxsaW5nIGN1dHRlcnMgJiBhY2Nlc3Nvcmllcyc6IFwiRnJlc2UgZSBhY2Nlc3NvcmlcIixcclxuICAgICAgICAgICAgICAgICAgICAnUm91dGVyJzogXCJSb3V0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAnUm91dGVyIGJpdHMnOiBcIkJpdCBkZWwgcm91dGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NlcmFtaWMgYml0cyc6IFwiUGV6emkgZGkgY2VyYW1pY2FcIixcclxuICAgICAgICAgICAgICAgICAgICAnUG9saXNoaW5nIHRvb2wnOiBcIlN0cnVtZW50byBkaSBsdWNpZGF0dXJhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0R1c3QnOiBcIlBvbHZlcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXNzb3JpZXMnOiBcIkFjY2Vzc29yaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdIeWdpZW5lICYgbGlxdWlkcyc6IFwiSWdpZW5lIGUgbGlxdWlkaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdIeWdpZW5lIHByb2R1Y3RzJzogXCJQcm9kb3R0aSBwZXIgbCdpZ2llbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAnQ2xlYW5lciAmIENvLic6IFwiUHVsaXRvcmUgJiBDby5cIixcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCAmIEZvb3QgQ2FyZSc6IFwiQ3VyYSBkZWxsZSB1bmdoaWUgZSBkZWkgcGllZGlcIixcclxuICAgICAgICAgICAgICAgICAgICAnVG9vbHMnOiBcIlV0ZW5zaWxpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgT2lsICYgSGFuZCBDcmVhbSc6ICdPbGlvIHBlciB1bmdoaWUgZSBjcmVtYSBwZXIgbGUgbWFuaScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgb2lsICYgaGFuZCAnOiBcIk9saW8gcGVyIHVuZ2hpZSBlIG1hbmlcIixcclxuICAgICAgICAgICAgICAgICAgICAnQnJ1c2hlcyAmIGJydXNoZXMnOiBcIlNwYXp6b2xlIGUgc3BhenpvbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAnTW9kZWxpbmcgdGVtcGxhdGVzJzogXCJNb2RlbGxpIGRpIG1vZGVsbGF6aW9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXBzICYgYWNjZXNzb3JpZXMnOiBcIlN1Z2dlcmltZW50aSBlIGFjY2Vzc29yaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdDbGFzc2ljIHRpcHMnOiBcIlN1Z2dlcmltZW50aSBjbGFzc2ljaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdGcmVuY2ggdGlwcyc6IFwiY29uc2lnbGkgZnJhbmNlc2lcIixcclxuICAgICAgICAgICAgICAgICAgICAnU3RpbGV0dG8gdGlwcyc6IFwiU3VnZ2VyaW1lbnRpIHBlciBsbyBzdGlsZXR0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUdW5uZWwgdGlwcyc6IFwiU3VnZ2VyaW1lbnRpIHBlciBpbCB0dW5uZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAnRm9vdCB0aXBzJzogXCJTdWdnZXJpbWVudGkgcGVyIGkgcGllZGlcIixcclxuICAgICAgICAgICAgICAgICAgICAnVGlwIGdsdWUnOiBcIkNvbGxhIHBlciBsYSBwdW50YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXAgY3V0dGVyJzogXCJUYWdsaWVyaW5hIGEgcHVudGFcIixcclxuICAgICAgICAgICAgICAgICAgICAnVGlwcyBhY2Nlc3Nvcmllcyc6IFwiU3VnZ2VyaW1lbnRpIGFjY2Vzc29yaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdGaWxlcyAmIEJ1ZmZlcnMnOiBcIkZpbGUgZSBidWZmZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAnRm9vdCBmaWxlcyc6IFwiRmlsZSBkZWwgcGllZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAnQ3VydmVkIGZpbGVzJzogXCJGaWxlIGN1cnZpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0cmFpZ2h0IGZpbGVzJzogXCJGaWxlIGRyaXR0aVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmFwZXplIGZpbGVzJzogXCJGaWxlIGRpIHRyYXBlemlvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2J1ZmZlcic6IFwicmVzcGluZ2VudGVcIixcclxuICAgICAgICAgICAgICAgICAgICAnUHJhY3RpY2UgaGFuZHMgJiBmaW5nZXJzJzogXCJFc2VyY2l0YXRpIGNvbiBtYW5pIGUgZGl0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXNrIGxpZ2h0cyc6IFwiTHVjaSBkaSBsYXZvcm9cIixcclxuICAgICAgICAgICAgICAgICAgICAnQXJtcmVzdHMnOiBcImJyYWNjaW9saVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWluZXJzICYgc3RvcmFnZSc6IFwiQ29udGVuaXRvcmkgZSBzdG9jY2FnZ2lvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlzICYgc2hlbHZlcyc6IFwiRXNwb3NpdG9yaSBlIHNjYWZmYWxpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0dWRpbyBmdXJuaXNoaW5ncyc6IFwiQXJyZWRhbWVudG8gc3R1ZGlvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hc2tzJzogXCJNYXNjaGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdPdGhlcnMnOiBcIkFsdHJpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYWluaW5nJzogXCJGb3JtYXppb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYWluaW5nJzogXCJGb3JtYXppb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByaXZhdGUgY291cnNlcyc6IFwiQ29yc2kgcHJpdmF0aVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vU0VSVklDRVxyXG4gICAgICAgICAgICAgICAgICAgICdFeHByZXNzIFNoaXBwaW5nJzogJ1NwZWRpemlvbmUgZXNwcmVzc2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmcm9tIE1vbi1GcmknOiAnZGEgbHVuLXZlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hlYXBlc3QgaW4nOiAncGnDuSBhbW1hc3NvIGluJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3dpdHplcmxhbmQgUHJpY2VzJzogJ1ByZXp6aSBTdml6emVyYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fic29sdXRlbHkgc2FmZSc6ICdBc3NvbHV0YW1lbnRlIHNpY3VybycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnQgTWV0aG9kcyc6ICdNb2RhbGl0w6AgZGkgcGFnYW1lbnRvJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGlyZWN0IGZyb20gdGhlJzogJ0RpcmV0dGFtZW50ZSBkYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYW51ZmFjdHVyZXIgZWlua2F1ZmVuJzogJ3Byb2R1dHRvcmUgZWlua2F1ZmVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnZnJlZSBzaGlwcGluZyc6ICdzcGVkaXppb25lIGdyYXR1aXRhJyxcclxuICAgICAgICAgICAgICAgICAgICAnZnJvbSBDSEYgMTAwLi0nOiAnZGEgQ0hGIDEwMC4tJyxcclxuICAgICAgICAgICAgICAgICAgICAvL0JBTk5FUlxyXG4gICAgICAgICAgICAgICAgICAgICdGcm9tIHVzIGZvciB5b3Ug4pmhJzogJ0RhIG5vaSBwZXIgdGUg4pmhJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmVzdGl2ZSBob2xpZGF5cyB3aXRoIG91ciBTaGVsbGFjIGNvbG9ycyc6ICdWYWNhbnplIGZlc3RpdmUgY29uIGkgbm9zdHJpIGNvbG9yaSBTaGVsbGFjJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2hyaXN0bWFzIFNhbGUhJzogJ1NhbGRpIGRpIE5hdGFsZSEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOb3cgZnJvbSBDSEYgNTAuIC0gMTAgJSBvZmYgRVZFUllUSElORyBhbmQgZnJvbSBDSEYgMC4gLSBhIGZyZWUgZ2lmdCEgLSBDb2RlIC0+IG1lcnJ5bmFpbHMnOiAnT3JhIGRhIENIRiA1MC4gLSAxMCUgZGkgc2NvbnRvIHN1IFRVVFRPIGUgZGEgQ0hGIDAuIC0gdW4gb21hZ2dpbyEgLSBDb2RpY2UgLT4gbWVycnluYWlscycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9UT1AgUFJPRFVDVFxyXG4gICAgICAgICAgICAgICAgICAgICdzcGVjaWFsIG9mZmVyJzogJ29mZmVydGEgc3BlY2lhbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AgY29sbGVjdGlvbic6ICdjb2xsZXppb25lIHRvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpbmQgeW91ciBwcm9kdWN0IGhlcmUuLi4nOiAnVHJvdmEgaWwgdHVvIHByb2RvdHRvIHF1aS4uLicsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9QQVJBTExBWFxyXG4gICAgICAgICAgICAgICAgICAgICdmYXNoaW9uIHRyZW5kcyc6ICdUZW5kZW56ZSBkaSBtb2RhJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3BlY2lhbCBvZmZlcic6ICdvZmZlcnRhIHNwZWNpYWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1BBUkFMTEFYXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NVQlNDUklCRSBUTyBPVVIgTkVXU0xFVFRFUiEnOiBcIklTQ1JJVklUSSBBTExBIE5PU1RSQSBORVdTTEVUVEVSIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdOZXZlciBNaXNzIEFueXRoaW5nIEZyb20gU3dpc3MgTmFpbHMgRmFjdG9yeSBCeSBTaWduaW5nIFVwIFRvIE91ciBOZXdzbGV0dGVyLic6IFwiTm9uIHBlcmRlcnRpIG51bGxhIGRhIFN3aXNzIE5haWxzIEZhY3RvcnkgaXNjcml2ZW5kb3RpIGFsbGEgbm9zdHJhIG5ld3NsZXR0ZXIuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VudGVyIHlvdXIgZW1haWwnOiBcIkluc2VyaXNjaSBpbCB0dW8gaW5kaXJpenpvIGVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N1YnNjcmliZSc6IFwic290dG9zY3JpdmlcIixcclxuICAgICAgICAgICAgICAgICAgICAnYWJvdXQnOiBcImRpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05BSUxTIEZBQ1RPUlkgaXMgb25lIG9mIHRoZSB0b3Agc3VwcGxpZXJzIHRvIHRoZSBTd2lzcyBuYWlsIHNhbG9ucy4gQnV0IG91ciBoaWdoLXF1YWxpdHkgcHJvZHVjdHMgYXJlIGFsc28gdGhlIHBlcmZlY3QgY2hvaWNlIGZvciBwcml2YXRlIHVzZS4gQSBodWdlIHNlbGVjdGlvbiBvZiBuYWlsIHBvbGlzaGVzLCBuYWlsIGFydCBwcm9kdWN0cywgVVYgYW5kIExFRCBsYW1wcyBhbmQgbWFueSBvdGhlciBhY2Nlc3NvcmllcyBmb3Igc3VjY2Vzc2Z1bCBuYWlsIG1vZGVsaW5nIGF3YWl0IHlvdSBpbiBvdXIgTmFpbHMgT25saW5lIFNob3AuJzogXCJOQUlMUyBGQUNUT1JZIMOoIHVubyBkZWkgcHJpbmNpcGFsaSBmb3JuaXRvcmkgZGVpIHNhbG9uaSBkaSBiZWxsZXp6YSBzdml6emVyaS4gTWEgaSBub3N0cmkgcHJvZG90dGkgZGkgYWx0YSBxdWFsaXTDoCBzb25vIGFuY2hlIGxhIHNjZWx0YSBwZXJmZXR0YSBwZXIgbCd1c28gcHJpdmF0by4gVW5hIHZhc3RhIHNlbGV6aW9uZSBkaSBzbWFsdGkgcGVyIHVuZ2hpZSwgcHJvZG90dGkgcGVyIG5haWwgYXJ0LCBsYW1wYWRlIFVWIGUgTEVEIGUgbW9sdGkgYWx0cmkgYWNjZXNzb3JpIHBlciBtb2RlbGxhcmUgbGUgdW5naGllIGNvbiBzdWNjZXNzbyB0aSBhc3BldHRhbm8gbmVsIG5vc3RybyBuZWdvemlvIG9ubGluZSBkaSB1bmdoaWUuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3JpZXMnOiBcImNhdGVnb3JpZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbmZvcm1hdGlvbic6IFwiaW5mb3JtYXppb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvY2F0aW9ucyc6IFwiU2VkaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdGQVEnOiBcIkZBUVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdCMkIgcmVxdWVzdCc6IFwiUmljaGllc3RhIEIyQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWN0JzogXCJDb250YXR0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZWVuZ2VuIGxvY2F0aW9uIEd1YXJkaWFuIFdheSA2IDU3MDcgU2Vlbmdlbic6IFwiTG9jYWxpdMOgIFNlZW5nZW4gR3VhcmRpYW4gV2F5IDYgNTcwNyBTZWVuZ2VuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bob25lICsgNDEgNjIgNzcxIDAwIDIxJzogXCJUZWxlZm9ubzogKyA0MSA2MiA3NzEgMDAgMjFcIixcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwgVXMnOiBcIk1hbmRhY2kgdW5hIGVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JlYXV0eSBpcyBpbiB5b3VyIGhhbmRzJzogJ0xhIGJlbGxlenphIMOoIG5lbGxlIHR1ZSBtYW5pJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9naW4nOiAnTG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb2dvdXQnOiAnRGlzY29ubmV0dGVyc2knLFxyXG4gICAgICAgICAgICAgICAgICAgICd3aXNobGlzdCc6ICdMaXN0YSBkZWkgZGVzaWRlcmknLFxyXG4gICAgICAgICAgICAgICAgICAgICdNeSBBY2NvdW50JzogJ0lsIG1pbyBhY2NvdW50JyxcclxuICAgICAgICAgICAgICAgICAgICAnUmVnaXN0ZXInOiAnUmVnaXN0cmF0aScsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9QUk9EVUNUXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2snOiBcImluZGlldHJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvYWRpbmcnOiBcIkNhcmljYW1lbnRvIGluIGNvcnNvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NpemUnOiBcImRpbWVuc2lvbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAncHJpY2UnOiBcInByZXp6b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICdHcmVhdCBuYWlsIHBvbGlzaCBjb2xvciBwb2xpc2hlcyB3aXRoIGFuIGV4Y2VwdGlvbmFsbHkgbm91cmlzaGluZyBmb3JtdWxhLiBUaGUgY29tcG9zaXRpb24gd29ya3Mgd2l0aG91dCB0aGUgMTggaGFybWZ1bCBjaGVtaWNhbHMgdGhhdCBjYW4gbm9ybWFsbHkgYmUgZm91bmQgaW4gbmFpbCBwb2xpc2hlcy4gVGhleSBkcnkgc3VwZXIgZmFzdC4gWW91IGRvbuKAmXQgaGF2ZSB0byB3YWl0IHNvIGxvbmcgYmVmb3JlIHlvdSBjYW4gZ28gYmFjayB0byBldmVyeWRheSBidXNpbmVzcy4gVGhpcyBlZmZlY3QgaXMgc3VwcG9ydGVkIGJ5IHRoZSBib2R54oCZcyBvd24gd2FybXRoLiBUaGlzIGhlbHBzIHRoZSBuYWlsIHBvbGlzaCB0byBkcnkgdmVyeSBxdWlja2x5LiBUaGUgd2FpdCBpcyBmaW5hbGx5IG92ZXInOiBcIkdyYW5kaSBzbWFsdGkgY29sb3JhdGkgcGVyIHVuZ2hpZSBjb24gdW5hIGZvcm11bGEgZWNjZXppb25hbG1lbnRlIG51dHJpZW50ZS4gTGEgY29tcG9zaXppb25lIGZ1bnppb25hIHNlbnphIGxlIDE4IHNvc3RhbnplIGNoaW1pY2hlIG5vY2l2ZSBjaGUgbm9ybWFsbWVudGUgc2kgdHJvdmFubyBuZWdsaSBzbWFsdGkgcGVyIHVuZ2hpZS4gU2kgYXNjaXVnYW5vIG1vbHRvIHZlbG9jZW1lbnRlLiBOb24gZGV2aSBhc3BldHRhcmUgY29zw6wgdGFudG8gcHJpbWEgZGkgcG90ZXIgdG9ybmFyZSBhbGxlIHR1ZSBhdHRpdml0w6AgcXVvdGlkaWFuZS4gUXVlc3RvIGVmZmV0dG8gw6ggc3VwcG9ydGF0byBkYWwgY2Fsb3JlIHN0ZXNzbyBkZWwgY29ycG8uIFF1ZXN0byBhaXV0YSBsbyBzbWFsdG8gYWQgYXNjaXVnYXJzaSBtb2x0byByYXBpZGFtZW50ZS4gTCdhdHRlc2Egw6ggZmluYWxtZW50ZSBmaW5pdGFcIixcclxuICAgICAgICAgICAgICAgICAgICAnSG9tZSc6IFwiQ2FzYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdsYW5ndWFnZSc6IFwibGluZ3VhZ2dpb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICcxMCBQcm9kdWN0cyBQYXIgUGFnZSc6IFwiMTAgcHJvZG90dGkgcGVyIHBhZ2luYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICcxNSBQcm9kdWN0cyBQYXIgUGFnZSc6IFwiMTUgcHJvZG90dGkgcGVyIHBhZ2luYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICcyMCBQcm9kdWN0cyBQYXIgUGFnZSc6IFwiMjAgcHJvZG90dGkgcGVyIHBhZ2luYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdTb3J0aW5nIGl0ZW1zJzogXCJPcmRpbmFtZW50byBkZWdsaSBlbGVtZW50aVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdIaWdoIFRvIExvdyc6IFwiRGFsbCdhbHRvIGFsIGJhc3NvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvdyBUbyBIaWdoJzogXCJEYWwgYmFzc28gYWxsJ2FsdG9cIixcclxuICAgICAgICAgICAgICAgICAgICAnTmV3ZXN0JzogXCJwacO5IHJlY2VudGVcIixcclxuICAgICAgICAgICAgICAgICAgICAnQXNjIE9yZGVyJzogXCJPcmRpbmUgQXNjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2MgT3JkZXInOiBcIk9yZGluZSBkZXNjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1lvdXIgQ2FydCBpcyBFbXB0eSc6IFwiSWwgdHVvIGNhcnJlbGxvIMOoIHZ1b3RvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0V4cGxvcmUgbW9yZSBzaG9ydGxpc3Qgc29tZSBpdGVtcy4nOiBcIkVzcGxvcmEgYWx0cmkgZWxlbmNoaSBkaSBhbGN1bmkgZWxlbWVudGkuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvYWQgTW9yZSc6IFwiQ2FyaWNhIGFsdHJvXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHB0OiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAvL01FTlVcclxuICAgICAgICAgICAgICAgICAgICAnU2FsZSc6ICdPZmVydGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb3Vwb25zJzogJ0N1cG9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YXJ0ZXIgc2V0cyc6ICdDb25qdW50b3MgaW5pY2lhaXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIHZhcm5pc2hlcyc6ICdWZXJuaXplcyBkZSB1bmhhJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCB2YXJuaXNoZXMgLSBjb2xvciB2YXJuaXNoZXMnOiAnVmVybml6ZXMgcGFyYSB1bmhhcyAtIHZlcm5pemVzIGRlIGNvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dlbCAmIGFjcnlsaWMgc3lzdGVtJzogJ1Npc3RlbWEgZGUgZ2VsIGUgYWNyw61saWNvJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNyeWxpYyBzeXN0ZW0nOiAnU2lzdGVtYSBhY3LDrWxpY28nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQb2x5IGFjcnlsaWMgZ2VsJzogJ0dlbCBwb2xpIGFjcsOtbGljbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RpcHBpbmcgcG93ZGVyJzogJ1DDsyBkZSBpbWVyc8OjbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dlbCBidWlsZC11cCc6ICdHZWwgYWN1bXVsYWRvJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJpbWVyICYgYmFzZSBnZWwnOiAnUHJpbWVyIGUgZ2VsIGRlIGJhc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSdWJiZXIgQmFzZSBHZWwnOiAnR2VsIGRlIEJhc2UgZGUgQm9ycmFjaGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdCdWlsZC11cCBnZWwnOiAnR2VsIGRlIGNvbnN0cnXDp8OjbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZpYmVyZ2xhc3MnOiAnZmlicmEgZGUgdmlkcm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdMRUQnOiAnTElERVJBREEnLFxyXG4gICAgICAgICAgICAgICAgICAgICcxLXBoYXNlIGdlbCc6ICdHZWwgbW9ub2bDoXNpY28nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb3ZlciBjYW1vdWZsYWdlJzogJ0NhbXVmbGFnZW0gZGUgY2FwYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZyZW5jaCBnZWxzJzogJ0fDqWlzIGZyYW5jZXNlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlYWxpbmcnOiAnc2VsYWdlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VWIC8gTEVEIGNvbG9yIGdlbHMnOiAnR2VsIFVWIC8gTEVEJyxcclxuICAgICAgICAgICAgICAgICAgICAnT25lIHN0cm9rZSc6ICdVbWEgdGFjYWRhJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29sb3IgR2Vscyc6ICdHw6lpcyBkZSBjb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICdMRUQgLyBVViBSQUwnOiAnTEVEIC8gVVYgUkFMJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHJlbmQgY29sb3JzJzogJ0NvcmVzIGRlIHRlbmTDqm5jaWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYWNhcm9ucyc6ICdtYWNhcm9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Ryb3BpY2FsIERyZWFtJzogJ1NvbmhvIHRyb3BpY2FsJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmVvbic6ICdOw6lvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZyZXNoICYgQ29vbCc6ICdGcmVzY28gZSBmcmVzY28nLFxyXG4gICAgICAgICAgICAgICAgICAgICdOdWRlJzogJ051JyxcclxuICAgICAgICAgICAgICAgICAgICAnR2xpdHRlciBnZWxzJzogJ0dlbCBkZSBicmlsaG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdob2xvZ3JhbSc6ICdob2xvZ3JhbWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmVjaW91cyBTdG9uZSc6ICdQZWRyYSBwcmVjaW9zYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NwYXJrbGluZyBXaW5lcyc6ICdWaW5ob3MgZXNwdW1hbnRlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BlYXJsIGRyZWFtcyc6ICdTb25ob3MgZGUgcMOpcm9sYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2ggcXVhbGl0eSBnbGl0dGVyIGdlbCc6ICdHZWwgZ2xpdHRlciBkZSBhbHRhIHF1YWxpZGFkZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01pbGt5IFdheSc6ICd2aWEgTMOhY3RlYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01lcm1haWQnOiAnc2VyZWlhJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmFzaGlvbiBzdGFyJzogJ0VzdHJlbGEgZGEgbW9kYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hZ2ljIGdlbHMnOiAnR8OpaXMgbcOhZ2ljb3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdFZmZlY3QgZ2Vscyc6ICdHw6lpcyBkZSBlZmVpdG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDaGFtZWxlb24gZWZmZWN0JzogJ0VmZWl0byBjYW1hbGXDo28nLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaGVybW8gZ2Vscyc6ICdUZXJtb2fDqWlzJyxcclxuICAgICAgICAgICAgICAgICAgICAnR2xvc3MgZ2Vscyc6ICdHw6lpcyBkZSBicmlsaG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYSBWaWUgTmF0dXJlbCc6ICdMYSBWaWUgTmF0dXJlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dvbGRpZSBEcmVhbSBCYWxsJzogJ0dvbGRpZSBEcmVhbSBCYWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGFmZm9kaWwgY2FzZSc6ICdFc3Rvam8gbmFyY2lzbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3RlbCc6ICdQYXN0ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdNaW5lcmFsIHBvd2Rlcic6ICdQw7MgbWluZXJhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ011c2Ugb2YgTGlnaHQnOiAnTXVzYSBkZSBsdXonLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXN0ZWwgc2VyaWVzJzogJ1PDqXJpZSBQYXN0ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDYXRtYXRpYyc6ICdDYXRtYXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgJzNEIENhdCBFeWUgR2VsJzogJzNEIENhdCBFeWUgR2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFnbmV0cyc6ICfDjW1hbmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgU2hlbGxhYyAtIGdlbCB2YXJuaXNoJzogJ1VWIC8gTEVEIFNoZWxsYWMgLSB2ZXJuaXogZW0gZ2VsJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmxleHkgSHlicmlkIEdlbCc6ICdHZWwgSMOtYnJpZG8gRmxleHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIEFydCc6ICdBcnRlIGRlIHVuaGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdJbnN0cnVtZW50cyAmIGFjY2Vzc29yaWVzJzogJ0luc3RydW1lbnRvcyBlIGFjZXNzw7NyaW9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnM0QgJiA0RCBnZWwnOiAnR2VsIDNEIGUgNEQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmFja2luZyBnZWwnOiAnR2VsIHBhcmEgcmFjaGFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3VnYXIgcG93ZGVyJzogJ0HDp3VjYXIgZW0gcMOzJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFpbnRpbmcgZ2VsJzogJ0dlbCBkZSBwaW50dXJhJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3BpZGVyIGdlbHMnOiAnR2VsIGRlIGFyYW5oYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoJzogJ0FlcsOzZ3JhZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBaXJicnVzaCBzdGVuY2lscyc6ICdFc3TDqm5jZWlzIGRlIGFlcsOzZ3JhZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBaXJicnVzaCBjb2xvcnMnOiAnQ29yZXMgZG8gYWVyw7NncmFmbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoIGRldmljZSc6ICdEaXNwb3NpdGl2byBhZXLDs2dyYWZvJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGlnbWVudHMnOiAnUGlnbWVudG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBhcnQgc3RhbXBpbmcnOiAnRXN0YW1wYWdlbSBkZSBOYWlsIEFydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0ZW5jaWxzJzogJ2VzdMOqbmNlaXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFtcGluZyBnZWwnOiAnR2VsIGRlIGVzdGFtcGFnZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFtcGluZyBhY2Nlc3Nvcmllcyc6ICdBY2Vzc8OzcmlvcyBwYXJhIGVzdGFtcGFyaWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmFuc2ZlciBmb2lscyc6ICdGb2xoYXMgZGUgdHJhbnNmZXLDqm5jaWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIEFydCBTdGlja2Vycyc6ICdBZGVzaXZvcyBkZSBOYWlsIEFydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dsaXR0ZXInOiAnQnJpbGhvJyxcclxuICAgICAgICAgICAgICAgICAgICAnUmhpbmVzdG9uZXMnOiAnU3RyYXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGllcmNpbmcnOiAnUGllcmNpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQZWFybHMgYW5kIENvLic6ICdQZWFybHMgYW5kIENvLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VWIC8gTEVEIGxhbXBzJzogJ0zDom1wYWRhcyBVViAvIExFRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01pbGxpbmcgY3V0dGVycyAmIGFjY2Vzc29yaWVzJzogJ0ZyZXNhcyBlIGFjZXNzw7NyaW9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnUm91dGVyJzogJ1JvdGVhZG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAnUm91dGVyIGJpdHMnOiAnQml0cyBkZSByb3RlYWRvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NlcmFtaWMgYml0cyc6ICdQZWRhw6dvcyBkZSBjZXLDom1pY2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQb2xpc2hpbmcgdG9vbCc6ICdGZXJyYW1lbnRhIGRlIHBvbGltZW50bycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0R1c3QnOiAnUMOzJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXNzb3JpZXMnOiAnQWNlc3PDs3Jpb3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdIeWdpZW5lICYgbGlxdWlkcyc6ICdIaWdpZW5lIGUgbMOtcXVpZG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnSHlnaWVuZSBwcm9kdWN0cyc6ICdQcm9kdXRvcyBkZSBoaWdpZW5lJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2xlYW5lciAmIENvLic6ICdDbGVhbmVyICYgQ28uJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCAmIEZvb3QgQ2FyZSc6ICdUcmF0YW1lbnRvIGRlIHVuaGFzIGUgcMOpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rvb2xzJzogJ0ZlcnJhbWVudGFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBPaWwgJiBIYW5kIENyZWFtJzogJ8OTbGVvIHBhcmEgdW5oYXMgZSBjcmVtZSBwYXJhIGFzIG3Do29zJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBvaWwgJiBoYW5kICc6ICfDk2xlbyBwYXJhIHVuaGFzIGUgbcOjb3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdCcnVzaGVzICYgYnJ1c2hlcyc6ICdQaW5jw6lpcyBlIHBpbmPDqWlzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTW9kZWxpbmcgdGVtcGxhdGVzJzogJ01vZGVsb3MgZGUgbW9kZWxhZ2VtJyxcclxuICAgICAgICAgICAgICAgICAgICAnVGlwcyAmIGFjY2Vzc29yaWVzJzogJ0RpY2FzIGUgYWNlc3PDs3Jpb3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDbGFzc2ljIHRpcHMnOiAnRGljYXMgY2zDoXNzaWNhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZyZW5jaCB0aXBzJzogJ0RpY2FzIGZyYW5jZXNhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0aWxldHRvIHRpcHMnOiAnUG9udGFzIGRlIGVzdGlsZXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHVubmVsIHRpcHMnOiAnRGljYXMgZGUgdMO6bmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAnRm9vdCB0aXBzJzogJ1BvbnRhcyBkb3MgcMOpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcCBnbHVlJzogJ0NvbGEgZGUgcG9udGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXAgY3V0dGVyJzogJ0NvcnRhZG9yIGRlIHBvbnRhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcHMgYWNjZXNzb3JpZXMnOiAnQWNlc3PDs3Jpb3MgZGUgZGljYXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGaWxlcyAmIEJ1ZmZlcnMnOiAnQXJxdWl2b3MgZSBidWZmZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAnRm9vdCBmaWxlcyc6ICdMaW1hcyBkZSBww6knLFxyXG4gICAgICAgICAgICAgICAgICAgICdDdXJ2ZWQgZmlsZXMnOiAnQXJxdWl2b3MgY3Vydm9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3RyYWlnaHQgZmlsZXMnOiAnQXJxdWl2b3MgZGlyZXRvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYXBlemUgZmlsZXMnOiAnQXJxdWl2b3MgdHJhcMOpemlvJyxcclxuICAgICAgICAgICAgICAgICAgICAnYnVmZmVyJzogJ2Ftb3J0ZWNlZG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJhY3RpY2UgaGFuZHMgJiBmaW5nZXJzJzogJ1ByYXRpcXVlIG3Do29zIGUgZGVkb3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXNrIGxpZ2h0cyc6ICdMdXplcyBkZSB0YXJlZmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnQXJtcmVzdHMnOiAnQnJhw6dvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhaW5lcnMgJiBzdG9yYWdlJzogJ1JlY2lwaWVudGVzIGUgYXJtYXplbmFtZW50bycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlzICYgc2hlbHZlcyc6ICdFeHBvc2l0b3JlcyBlIHByYXRlbGVpcmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3R1ZGlvIGZ1cm5pc2hpbmdzJzogJ03Ds3ZlaXMgZGUgZXN0w7pkaW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYXNrcyc6ICdNw6FzY2FyYXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdPdGhlcnMnOiAnT3V0cmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHJhaW5pbmcnOiAnVHJlaW5hbWVudG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmFpbmluZyc6ICdUcmVpbmFtZW50bycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByaXZhdGUgY291cnNlcyc6ICdDdXJzb3MgcGFydGljdWxhcmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1NFUlZJQ0VcclxuICAgICAgICAgICAgICAgICAgICAnRXhwcmVzcyBTaGlwcGluZyc6ICdFbmNvbWVuZGEgZXhwcmVzc2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmcm9tIE1vbi1GcmknOiAnZGUgc2VnLXNleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hlYXBlc3QgaW4nOiAnbWFpcyBhbHRvIGVtJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3dpdHplcmxhbmQgUHJpY2VzJzogJ1ByZcOnb3MgZGEgU3XDrcOnYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fic29sdXRlbHkgc2FmZSc6ICdBYnNvbHV0YW1lbnRlIHNlZ3VybycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnQgTWV0aG9kcyc6ICdNw6l0b2RvcyBkZSBQYWdhbWVudG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXJlY3QgZnJvbSB0aGUnOiAnRGlyZXRvIGRvJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWFudWZhY3R1cmVyIGVpbmthdWZlbic6ICdmYWJyaWNhbnRlIGVpbmthdWZlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZyZWUgc2hpcHBpbmcnOiAnRW52aW8gR3LDoXRpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zyb20gQ0hGIDEwMC4tJzogJ2RlIENIRiAxMDAuLScsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9CQU5ORVJcclxuICAgICAgICAgICAgICAgICAgICAnRnJvbSB1cyBmb3IgeW91IOKZoSc6ICdEZSBuw7NzIHBhcmEgdm9jw6og4pmhJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmVzdGl2ZSBob2xpZGF5cyB3aXRoIG91ciBTaGVsbGFjIGNvbG9ycyc6ICdGw6lyaWFzIGZlc3RpdmFzIGNvbSBhcyBub3NzYXMgY29yZXMgU2hlbGxhYycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NocmlzdG1hcyBTYWxlISc6ICdQcm9tb8Onw6NvIGRlIE5hdGFsIScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05vdyBmcm9tIENIRiA1MC4gLSAxMCAlIG9mZiBFVkVSWVRISU5HIGFuZCBmcm9tIENIRiAwLiAtIGEgZnJlZSBnaWZ0ISAtIENvZGUgLT4gbWVycnluYWlscyc6ICdBZ29yYSBhIHBhcnRpciBkZSBDSEYgNTAuIC0gMTAlIGRlIGRlc2NvbnRvIGVtIFRVRE8gZSBhIHBhcnRpciBkZSBDSEYgMC4gLSB1bSBwcmVzZW50ZSBncsOhdGlzISAtIEPDs2RpZ28gLT4gbWVycnluYWlscycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9UT1AgUFJPRFVDVFxyXG4gICAgICAgICAgICAgICAgICAgICdzcGVjaWFsIG9mZmVyJzogJ29mZXJ0YSBlc3BlY2lhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCBjb2xsZWN0aW9uJzogJ2NvbGXDp8OjbyBzdXBlcmlvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpbmQgeW91ciBwcm9kdWN0IGhlcmUuLi4nOiAnRW5jb250cmUgc2V1IHByb2R1dG8gYXF1aSAuLi4nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vUEFSQUxMQVhcclxuICAgICAgICAgICAgICAgICAgICAnZmFzaGlvbiB0cmVuZHMnOiAndGVuZMOqbmNpYXMgZGEgbW9kYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwZWNpYWwgb2ZmZXInOiAnb2ZlcnRhIGVzcGVjaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1BBUkFMTEFYXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NVQlNDUklCRSBUTyBPVVIgTkVXU0xFVFRFUiEnOiAnQVNTSU5FIEEgTk9TU0EgTkVXU0xFVFRFUiEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOZXZlciBNaXNzIEFueXRoaW5nIEZyb20gU3dpc3MgTmFpbHMgRmFjdG9yeSBCeSBTaWduaW5nIFVwIFRvIE91ciBOZXdzbGV0dGVyLic6ICdOdW5jYSBwZXJjYSBuYWRhIGRhIFN3aXNzIE5haWxzIEZhY3RvcnksIGFzc2luYW5kbyBub3NzbyBib2xldGltIGluZm9ybWF0aXZvLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VudGVyIHlvdXIgZW1haWwnOiAnRGlnaXRlIHNldSBlLW1haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdWJzY3JpYmUnOiAnc2UgaW5zY3JldmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnYWJvdXQnOiAnY2VyY2EgZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOQUlMUyBGQUNUT1JZIGlzIG9uZSBvZiB0aGUgdG9wIHN1cHBsaWVycyB0byB0aGUgU3dpc3MgbmFpbCBzYWxvbnMuIEJ1dCBvdXIgaGlnaC1xdWFsaXR5IHByb2R1Y3RzIGFyZSBhbHNvIHRoZSBwZXJmZWN0IGNob2ljZSBmb3IgcHJpdmF0ZSB1c2UuIEEgaHVnZSBzZWxlY3Rpb24gb2YgbmFpbCBwb2xpc2hlcywgbmFpbCBhcnQgcHJvZHVjdHMsIFVWIGFuZCBMRUQgbGFtcHMgYW5kIG1hbnkgb3RoZXIgYWNjZXNzb3JpZXMgZm9yIHN1Y2Nlc3NmdWwgbmFpbCBtb2RlbGluZyBhd2FpdCB5b3UgaW4gb3VyIE5haWxzIE9ubGluZSBTaG9wLic6ICdOQUlMUyBGQUNUT1JZIMOpIHVtIGRvcyBwcmluY2lwYWlzIGZvcm5lY2Vkb3JlcyBkb3Mgc2Fsw7VlcyBkZSBtYW5pY3VyZSBzdcOtw6dvcy4gTWFzIG5vc3NvcyBwcm9kdXRvcyBkZSBhbHRhIHF1YWxpZGFkZSB0YW1iw6ltIHPDo28gYSBlc2NvbGhhIHBlcmZlaXRhIHBhcmEgdXNvIHByaXZhZG8uIFVtYSBncmFuZGUgc2VsZcOnw6NvIGRlIGVzbWFsdGVzLCBwcm9kdXRvcyBwYXJhIHVuaGFzIGFydMOtc3RpY2FzLCBsw6JtcGFkYXMgVVYgZSBMRUQgZSBtdWl0b3Mgb3V0cm9zIGFjZXNzw7NyaW9zIHBhcmEgbW9kZWxhZ2VtIGRlIHVuaGFzIGJlbS1zdWNlZGlkYSBlc3BlcmFtIHBvciB2b2PDqiBlbSBub3NzYSBMb2phIE9ubGluZSBOYWlscy4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yaWVzJzogJ2NhdGVnb3JpYXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbmZvcm1hdGlvbic6ICdlbSBmb3JtYcOnw6NvJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9jYXRpb25zJzogJ0xvY2FsaXphw6fDtWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnRkFRJzogJ1Blcmd1bnRhcyBmcmVxdWVudGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnQjJCIHJlcXVlc3QnOiAnU29saWNpdGHDp8OjbyBkZSBCMkInLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWN0JzogJ0NvbnRhdG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZWVuZ2VuIGxvY2F0aW9uIEd1YXJkaWFuIFdheSA2IDU3MDcgU2Vlbmdlbic6ICdMb2NhbGl6YcOnw6NvIFNlZW5nZW4gR3VhcmRpYW4gV2F5IDYgNTcwNyBTZWVuZ2VuJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGhvbmUgKyA0MSA2MiA3NzEgMDAgMjEnOiAnVGVsZWZvbmU6ICsgNDEgNjIgNzcxIDAwIDIxJyxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwgVXMnOiAnRW52aWEtbm9zIHVtIGVtYWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAnQmVhdXR5IGlzIGluIHlvdXIgaGFuZHMnOiAnQSBiZWxlemEgZXN0w6EgZW0gc3VhcyBtw6NvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvZ2luJzogJ0NvbmVjdGUtc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb2dvdXQnOiAnU2FpcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpc2hsaXN0JzogJ0xpc3RhIGRlIERlc2Vqb3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdNeSBBY2NvdW50JzogJ01pbmhhIGNvbnRhJyxcclxuICAgICAgICAgICAgICAgICAgICAnUmVnaXN0ZXInOiAnUmVnaXN0cm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vUFJPRFVDVFxyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrJzogJ2Nvc3RhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvYWRpbmcnOiAnQ2FycmVnYW5kbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NpemUnOiAnVGFtYW5obycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ByaWNlJzogJ3ByZcOnbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dyZWF0IG5haWwgcG9saXNoIGNvbG9yIHBvbGlzaGVzIHdpdGggYW4gZXhjZXB0aW9uYWxseSBub3VyaXNoaW5nIGZvcm11bGEuIFRoZSBjb21wb3NpdGlvbiB3b3JrcyB3aXRob3V0IHRoZSAxOCBoYXJtZnVsIGNoZW1pY2FscyB0aGF0IGNhbiBub3JtYWxseSBiZSBmb3VuZCBpbiBuYWlsIHBvbGlzaGVzLiBUaGV5IGRyeSBzdXBlciBmYXN0LiBZb3UgZG9u4oCZdCBoYXZlIHRvIHdhaXQgc28gbG9uZyBiZWZvcmUgeW91IGNhbiBnbyBiYWNrIHRvIGV2ZXJ5ZGF5IGJ1c2luZXNzLiBUaGlzIGVmZmVjdCBpcyBzdXBwb3J0ZWQgYnkgdGhlIGJvZHnigJlzIG93biB3YXJtdGguIFRoaXMgaGVscHMgdGhlIG5haWwgcG9saXNoIHRvIGRyeSB2ZXJ5IHF1aWNrbHkuIFRoZSB3YWl0IGlzIGZpbmFsbHkgb3Zlcic6ICfDk3RpbW9zIGVzbWFsdGVzIGRlIGNvciBjb20gdW1hIGbDs3JtdWxhIGV4Y2VwY2lvbmFsbWVudGUgbnV0cml0aXZhLiBBIGNvbXBvc2nDp8OjbyBmdW5jaW9uYSBzZW0gb3MgMTggcHJvZHV0b3MgcXXDrW1pY29zIHByZWp1ZGljaWFpcyBxdWUgbm9ybWFsbWVudGUgcG9kZW0gc2VyIGVuY29udHJhZG9zIGVtIGVzbWFsdGVzLiBFbGVzIHNlY2FtIHN1cGVyIHLDoXBpZG8uIFZvY8OqIG7Do28gcHJlY2lzYSBlc3BlcmFyIHRhbnRvIHBhcmEgdm9sdGFyIGFvcyBuZWfDs2Npb3MgZG8gZGlhLWEtZGlhLiBFc3RlIGVmZWl0byDDqSBzdXN0ZW50YWRvIHBlbG8gY2Fsb3IgZG8gcHLDs3ByaW8gY29ycG8uIElzc28gYWp1ZGEgbyBlc21hbHRlIGEgc2VjYXIgbXVpdG8gcmFwaWRhbWVudGUuIEEgZXNwZXJhIGZpbmFsbWVudGUgYWNhYm91JyxcclxuICAgICAgICAgICAgICAgICAgICAnSG9tZSc6ICdDYXNhJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGFuZ3VhZ2UnOiAnbMOtbmd1YScsXHJcbiAgICAgICAgICAgICAgICAgICAgJzEwIFByb2R1Y3RzIFBhciBQYWdlJzogJ1DDoWdpbmEgcGFyIGRlIDEwIHByb2R1dG9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnMTUgUHJvZHVjdHMgUGFyIFBhZ2UnOiAnUMOhZ2luYSBwYXIgZGUgMTUgcHJvZHV0b3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICcyMCBQcm9kdWN0cyBQYXIgUGFnZSc6ICdQw6FnaW5hIHBhciBkZSAyMCBwcm9kdXRvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvcnRpbmcgaXRlbXMnOiAnQ2xhc3NpZmljYW5kbyBpdGVucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2ggVG8gTG93JzogJ0RlY3Jlc2NlbnRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG93IFRvIEhpZ2gnOiAnQmFpeG8gcGFyYSBhbHRvJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmV3ZXN0JzogJ08gbWFpcyBub3ZvJyxcclxuICAgICAgICAgICAgICAgICAgICAnQXNjIE9yZGVyJzogJ09yZGVtIEFzYycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2MgT3JkZXInOiAnT3JkZW0gZGUgRGVzYy4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdZb3VyIENhcnQgaXMgRW1wdHknOiAnU2V1IGNhcnJpbmhvIGVzdMOhIHZhemlvJyxcclxuICAgICAgICAgICAgICAgICAgICAnRXhwbG9yZSBtb3JlIHNob3J0bGlzdCBzb21lIGl0ZW1zLic6ICdFeHBsb3JlIG1haXMgYWxndW5zIGl0ZW5zIGRhIGxpc3RhIHJlc3RyaXRhLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvYWQgTW9yZSc6ICdDYXJyZWd1ZSBtYWlzJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3E6IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vTUVOVVxyXG4gICAgICAgICAgICAgICAgICAgICdTYWxlJzogJ1NoaXRqZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvdXBvbnMnOiAnS3Vwb27Dq3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFydGVyIHNldHMnOiAnS29tcGxldGUgZmlsbGVzdGFyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgdmFybmlzaGVzJzogJ0xsYWsgcMOrciB0aG9uanTDqycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgdmFybmlzaGVzIC0gY29sb3IgdmFybmlzaGVzJzogJ0xsYWsgaSB0aG9uanZlIC0gbGxhcWUgbWUgbmdqeXJhJyxcclxuICAgICAgICAgICAgICAgICAgICAnR2VsICYgYWNyeWxpYyBzeXN0ZW0nOiAnU2lzdGVtIHhoZWwgJiBha3JpbGlrJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNyeWxpYyBzeXN0ZW0nOiAnU2lzdGVtaSBha3JpbGlrJyxcclxuICAgICAgICAgICAgICAgICAgICAnUG9seSBhY3J5bGljIGdlbCc6ICdYaGVsIHBvbGlha3JpbGlrJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGlwcGluZyBwb3dkZXInOiAnUGx1aHVyIHpoeXRqZWplJyxcclxuICAgICAgICAgICAgICAgICAgICAnR2VsIGJ1aWxkLXVwJzogJ05kw6tydGltaSBpIHhoZWxpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByaW1lciAmIGJhc2UgZ2VsJzogJ1ByaW1lciBkaGUgeGhlbCBiYXrDqycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1J1YmJlciBCYXNlIEdlbCc6ICdYaGVsIG1lIGJhesOrIGdvbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdCdWlsZC11cCBnZWwnOiAnWGhlbCBuZMOrcnRpbWknLFxyXG4gICAgICAgICAgICAgICAgICAgICdmaWJlcmdsYXNzJzogJ3Rla3N0aWwgbWUgZmlqZSBxZWxxaScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xFRCc6ICdMRUQnLFxyXG4gICAgICAgICAgICAgICAgICAgICcxLXBoYXNlIGdlbCc6ICdYaGVsIDFmYXpvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvdmVyIGNhbW91ZmxhZ2UnOiAnS2FtdWZsYXpoIG1idWxlc8OrJyxcclxuICAgICAgICAgICAgICAgICAgICAnRnJlbmNoIGdlbHMnOiAnWGhlbCBmcmFuY2V6JyxcclxuICAgICAgICAgICAgICAgICAgICAnc2VhbGluZyc6ICd2dWxvc2plJyxcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgY29sb3IgZ2Vscyc6ICdYaGVsIG1lIG5nanlyYSBVVi9MRUQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdPbmUgc3Ryb2tlJzogJ05qw6sgZ29kaXRqZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbG9yIEdlbHMnOiAnWGhlbCBtZSBuZ2p5cmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdMRUQgLyBVViBSQUwnOiAnTEVEIC8gVVYgUkFMJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHJlbmQgY29sb3JzJzogJ05nanlyYXQgbsOrIHRyZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWFjYXJvbnMnOiAnbWFrYXJvbmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcm9waWNhbCBEcmVhbSc6ICfDi25kcnJhIHRyb3Bpa2FsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05lb24nOiAnTmVvbmknLFxyXG4gICAgICAgICAgICAgICAgICAgICdGcmVzaCAmIENvb2wnOiAnRSBmcmVza8OrdCBkaGUgZSBmdG9odMOrJyxcclxuICAgICAgICAgICAgICAgICAgICAnTnVkZSc6ICdOdWRvJyxcclxuICAgICAgICAgICAgICAgICAgICAnR2xpdHRlciBnZWxzJzogJ1hoZWwgbWUgc2hrw6tscWltJyxcclxuICAgICAgICAgICAgICAgICAgICAnaG9sb2dyYW0nOiAnaG9sb2dyYW1pJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJlY2lvdXMgU3RvbmUnOiAnR3VyaSBpIMOnbXVhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NwYXJrbGluZyBXaW5lcyc6ICdWZXLDq3JhdCBlIGdhenVhcmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQZWFybCBkcmVhbXMnOiAnw4tuZHJyYXQgbWUgcGVybGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdIaWdoIHF1YWxpdHkgZ2xpdHRlciBnZWwnOiAnWGhlbCBtZSBzaGvDq2xxaW0gbWUgY2lsw6tzaSB0w6sgbGFydMOrJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWlsa3kgV2F5JzogJ3JydWdhIGUgUXVtw6tzaHRpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01lcm1haWQnOiAnU2lyZW7DqycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zhc2hpb24gc3Rhcic6ICdZbGxpIGkgbW9kw6tzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFnaWMgZ2Vscyc6ICdYaGVsIG1hZ2ppaycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VmZmVjdCBnZWxzJzogJ1hoZWwgbWUgZWZla3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDaGFtZWxlb24gZWZmZWN0JzogJ0VmZWt0aSBpIGthbWVsZW9uaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaGVybW8gZ2Vscyc6ICdYaGVsIHRlcm1vJyxcclxuICAgICAgICAgICAgICAgICAgICAnR2xvc3MgZ2Vscyc6ICdYaGVsIG1lIHNoa8OrbHFpbScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhIFZpZSBOYXR1cmVsJzogJ0xhIFZpZSBOYXR1cmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAnR29sZGllIERyZWFtIEJhbGwnOiAnR29sZGllIERyZWFtIEJhbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEYWZmb2RpbCBjYXNlJzogJ1Jhc3RpIG1lIGRhZmZvZGlsJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzdGVsJzogJ1Bhc3RlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01pbmVyYWwgcG93ZGVyJzogJ1BsdWh1ciBtaW5lcmFsJyxcclxuICAgICAgICAgICAgICAgICAgICAnTXVzZSBvZiBMaWdodCc6ICdNdXphIGUgRHJpdMOrcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3RlbCBzZXJpZXMnOiAnU2VyaSBwYXN0ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDYXRtYXRpYyc6ICdLYXRhdGlrZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJzNEIENhdCBFeWUgR2VsJzogJ1hoZWwgM0QgcMOrciBzeXTDqyBlIG1hY2VzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFnbmV0cyc6ICdNYWduZXTDq3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdVViAvIExFRCBTaGVsbGFjIC0gZ2VsIHZhcm5pc2gnOiAnVVYgLyBMRUQgU2hlbGxhYyAtIGxsYWsgeGhlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZsZXh5IEh5YnJpZCBHZWwnOiAnWGhlbCBIaWJyaWQgRmxleHknLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIEFydCc6ICdBcnQgdGhvbmpzaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0luc3RydW1lbnRzICYgYWNjZXNzb3JpZXMnOiAnSW5zdHJ1bWVudGUgZGhlIGFrc2Vzb3LDqycsXHJcbiAgICAgICAgICAgICAgICAgICAgJzNEICYgNEQgZ2VsJzogJ1hoZWwgM0QgZGhlIDREJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ3JhY2tpbmcgZ2VsJzogJ1hoZWwgcGxhc2FyaXRqZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1Z2FyIHBvd2Rlcic6ICdQbHVodXIgc2hlcWVyaScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhaW50aW5nIGdlbCc6ICdYaGVsIHDDq3IgbHllcmplJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3BpZGVyIGdlbHMnOiAnWGhlbCBtZXJpbWFuZ2FzaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoJzogJ0FpcmJydXNoJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWlyYnJ1c2ggc3RlbmNpbHMnOiAnU3RlbmNpbGF0IGUgZnVyw6dhdmUgdMOrIGFqcml0JyxcclxuICAgICAgICAgICAgICAgICAgICAnQWlyYnJ1c2ggY29sb3JzJzogJ05nanlyYXQgZSBmdXLDp2F2ZSB0w6sgYWpyaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdBaXJicnVzaCBkZXZpY2UnOiAnUGFqaXNqYSBBaXJicnVzaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BpZ21lbnRzJzogJ1BpZ21lbnRldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgYXJ0IHN0YW1waW5nJzogJ1N0YW1waW1pIGkgYXJ0aXQgdMOrIHRob25qdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdGVuY2lscyc6ICdzaGFibGxvbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFtcGluZyBnZWwnOiAnWGhlbCBww6tyIHZ1bG9zamUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFtcGluZyBhY2Nlc3Nvcmllcyc6ICdBa3Nlc29yw6sgc3RhbXBpbWknLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmFuc2ZlciBmb2lscyc6ICdUcmFuc2Zlcm9uaSBmbGV0w6t0JyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBBcnQgU3RpY2tlcnMnOiAnTmdqaXTDq3NlIHDDq3IgYXJ0aW4gZSB0aG9uanZlJyxcclxuICAgICAgICAgICAgICAgICAgICAnR2xpdHRlcic6ICdTaGvDq2xxaW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdSaGluZXN0b25lcyc6ICdSaGluZXN0b25lcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BpZXJjaW5nJzogJ1BpZXJjaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGVhcmxzIGFuZCBDby4nOiAnUGVybGF0IGRoZSBDby4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdVViAvIExFRCBsYW1wcyc6ICdMbGFtYmF0IFVWL0xFRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01pbGxpbmcgY3V0dGVycyAmIGFjY2Vzc29yaWVzJzogJ0ZyZXp1ZXMgZGhlIGFrc2Vzb3LDqycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JvdXRlcic6ICdSdXRlcmknLFxyXG4gICAgICAgICAgICAgICAgICAgICdSb3V0ZXIgYml0cyc6ICdCaXTDq3QgZSBydXRlcml0JyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2VyYW1pYyBiaXRzJzogJ0NvcGEgcWVyYW1pa2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQb2xpc2hpbmcgdG9vbCc6ICdNamV0IGx1c3RyaW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdEdXN0JzogJ1BsdWh1cmknLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2Nlc3Nvcmllcyc6ICdBa3Nlc29yw6snLFxyXG4gICAgICAgICAgICAgICAgICAgICdIeWdpZW5lICYgbGlxdWlkcyc6ICdIaWdqaWVuYSBkaGUgbMOrbmdqZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdIeWdpZW5lIHByb2R1Y3RzJzogJ1Byb2R1a3RlIGhpZ2ppZW5pa2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDbGVhbmVyICYgQ28uJzogJ0NsZWFuZXIgJiBDby4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsICYgRm9vdCBDYXJlJzogJ0t1amRlc2kgcMOrciB0aG9uanTDqyBkaGUga8OrbWLDq3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUb29scyc6ICdNamV0ZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIE9pbCAmIEhhbmQgQ3JlYW0nOiAnS3JlbSBww6tyIGR1YXIgZGhlIHZhaiBww6tyIHRob25qdMOrJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBvaWwgJiBoYW5kICc6ICdWYWogdGhvbmpzaCBkaGUgZHVhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JydXNoZXMgJiBicnVzaGVzJzogJ0Z1csOnYSAmIGZ1csOnYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01vZGVsaW5nIHRlbXBsYXRlcyc6ICdNb2RlbGV0IGUgbW9kZWxpbWl0JyxcclxuICAgICAgICAgICAgICAgICAgICAnVGlwcyAmIGFjY2Vzc29yaWVzJzogJ0vDq3NoaWxsYSBkaGUgYWtzZXNvcsOrJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2xhc3NpYyB0aXBzJzogJ0vDq3NoaWxsYSBrbGFzaWtlJyxcclxuICAgICAgICAgICAgICAgICAgICAnRnJlbmNoIHRpcHMnOiAnS8Orc2hpbGxhIGZyYW5jZXplJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3RpbGV0dG8gdGlwcyc6ICdLw6tzaGlsbGEgcMOrciBzdGlsZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUdW5uZWwgdGlwcyc6ICdLw6tzaGlsbGEgcMOrciB0dW5lbGluJyxcclxuICAgICAgICAgICAgICAgICAgICAnRm9vdCB0aXBzJzogJ01hamF0IGUga8OrbWLDq3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICAnVGlwIGdsdWUnOiAnTmdqaXTDq3MgbWUgbWFqw6snLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXAgY3V0dGVyJzogJ1ByZXLDq3MgaSBtYWphdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXBzIGFjY2Vzc29yaWVzJzogJ0vDq3NoaWxsYSBww6tyIGFrc2Vzb3LDq3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGaWxlcyAmIEJ1ZmZlcnMnOiAnU2tlZGFyw6t0ICYgQnVmZXLDq3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGb290IGZpbGVzJzogJ1NrZWRhcsOrdCBlIGvDq21iw6t2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0N1cnZlZCBmaWxlcyc6ICdTa2VkYXLDq3QgZSBsYWt1YXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdHJhaWdodCBmaWxlcyc6ICdTa2VkYXLDq3QgZSBkcmVqdMOrJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHJhcGV6ZSBmaWxlcyc6ICdTa2VkYXLDq3QgZSB0cmFwZXppdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2J1ZmZlcic6ICd0YW1wb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmFjdGljZSBoYW5kcyAmIGZpbmdlcnMnOiAnUHJha3Rpa29uaSBkdWFydCBkaGUgZ2lzaHRhdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rhc2sgbGlnaHRzJzogJ0RyaXRhdCBlIGRldHlyYXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAnQXJtcmVzdHMnOiAnTWLDq3NodGV0w6tzZSBrcmFow6tzaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhaW5lcnMgJiBzdG9yYWdlJzogJ0tvbnRlam5lcsOrdCBkaGUgbWFnYXppbmltaScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlzICYgc2hlbHZlcyc6ICdFa3JhbmV0IGRoZSByYWZ0ZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdHVkaW8gZnVybmlzaGluZ3MnOiAnQXJyZWRpbWkgaSBzdHVkaW9zJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFza3MnOiAnTWFza2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICdPdGhlcnMnOiAnVMOrIHRqZXLDq3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmFpbmluZyc6ICdUcmFqbmltaScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYWluaW5nJzogJ1RyYWpuaW1pJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJpdmF0ZSBjb3Vyc2VzJzogJ0t1cnNlIHByaXZhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vU0VSVklDRVxyXG4gICAgICAgICAgICAgICAgICAgICdFeHByZXNzIFNoaXBwaW5nJzogJ1RyYW5zcG9ydGkgRXhwcmVzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zyb20gTW9uLUZyaSc6ICduZ2EgZSBIw6tuYS1QcmVtdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWFwZXN0IGluJzogJ23DqyBlIGdydW1idWxsdWFyYSBuw6snLFxyXG4gICAgICAgICAgICAgICAgICAgICdTd2l0emVybGFuZCBQcmljZXMnOiAnw4dtaW1ldCBuw6sgWnZpY8OrcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fic29sdXRlbHkgc2FmZSc6ICdBYnNvbHV0aXNodCBpIHNpZ3VydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnQgTWV0aG9kcyc6ICdtZW55cmEgcGFnZXNlJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGlyZWN0IGZyb20gdGhlJzogJ0RpcmVrdCBuZ2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYW51ZmFjdHVyZXIgZWlua2F1ZmVuJzogJ3Byb2RodWVzaSBlaW5rYXVmZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdmcmVlIHNoaXBwaW5nJzogJ1RyYW5zcG9ydCBmYWxhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zyb20gQ0hGIDEwMC4tJzogJ25nYSAxMDAgQ0hGLi0nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vQkFOTkVSXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zyb20gdXMgZm9yIHlvdSDimaEnOiAnTmdhIG5lIHDDq3IganUg4pmhJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmVzdGl2ZSBob2xpZGF5cyB3aXRoIG91ciBTaGVsbGFjIGNvbG9ycyc6ICdGZXN0YXQgZmVzdGl2ZSBtZSBuZ2p5cmF0IHRvbmEgU2hlbGxhYycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NocmlzdG1hcyBTYWxlISc6ICdTaGl0amUgS3Jpc2h0bGluZGplc2ghJyxcclxuICAgICAgICAgICAgICAgICAgICAnTm93IGZyb20gQ0hGIDUwLiAtIDEwICUgb2ZmIEVWRVJZVEhJTkcgYW5kIGZyb20gQ0hGIDAuIC0gYSBmcmVlIGdpZnQhIC0gQ29kZSAtPiBtZXJyeW5haWxzJzogJ1RhbmkgbmdhIDUwIENIRi4gLSAxMCUgWkJSSVRKRSBQw4tSIEdKSVRIw4dLQSBkaGUgbmdhIENIRiAwLiAtIGRodXJhdMOrIGZhbGFzISAtIEtvZGkgLT4gZ296aGTDqycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9UT1AgUFJPRFVDVFxyXG4gICAgICAgICAgICAgICAgICAgICdzcGVjaWFsIG9mZmVyJzogJ29mZXJ0w6sgc3BlY2lhbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AgY29sbGVjdGlvbic6ICdrb2xla3Npb25pIG3DqyBpIGxhcnTDqycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpbmQgeW91ciBwcm9kdWN0IGhlcmUuLi4nOiAnR2plbmkgcHJvZHVrdGluIHR1YWoga8OrdHUuLi4nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vUEFSQUxMQVhcclxuICAgICAgICAgICAgICAgICAgICAnZmFzaGlvbiB0cmVuZHMnOiAndGVuZGVuY2F0IGUgbW9kw6tzJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3BlY2lhbCBvZmZlcic6ICdvZmVydMOrIHNwZWNpYWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1BBUkFMTEFYXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NVQlNDUklCRSBUTyBPVVIgTkVXU0xFVFRFUiEnOiAnQUJPTk9IVU5JIE7DiyBCVUxFVElOSSBUT07DiyEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOZXZlciBNaXNzIEFueXRoaW5nIEZyb20gU3dpc3MgTmFpbHMgRmFjdG9yeSBCeSBTaWduaW5nIFVwIFRvIE91ciBOZXdzbGV0dGVyLic6ICdNb3MgaHVtYmlzbmkga3VycsOrIGFzZ2rDqyBuZ2EgU3dpc3MgTmFpbHMgRmFjdG9yeSBEdWtlIHUgcmVnamlzdHJ1YXIgbsOrIGJ1bGV0aW5pbiB0b27Dqy4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbnRlciB5b3VyIGVtYWlsJzogJ1Noa3J1YW5pIGVtYWlsaW4gdHVhaicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N1YnNjcmliZSc6ICdhYm9ub2hlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Fib3V0JzogJ3JyZXRoJyxcclxuICAgICAgICAgICAgICAgICAgICAnTkFJTFMgRkFDVE9SWSBpcyBvbmUgb2YgdGhlIHRvcCBzdXBwbGllcnMgdG8gdGhlIFN3aXNzIG5haWwgc2Fsb25zLiBCdXQgb3VyIGhpZ2gtcXVhbGl0eSBwcm9kdWN0cyBhcmUgYWxzbyB0aGUgcGVyZmVjdCBjaG9pY2UgZm9yIHByaXZhdGUgdXNlLiBBIGh1Z2Ugc2VsZWN0aW9uIG9mIG5haWwgcG9saXNoZXMsIG5haWwgYXJ0IHByb2R1Y3RzLCBVViBhbmQgTEVEIGxhbXBzIGFuZCBtYW55IG90aGVyIGFjY2Vzc29yaWVzIGZvciBzdWNjZXNzZnVsIG5haWwgbW9kZWxpbmcgYXdhaXQgeW91IGluIG91ciBOYWlscyBPbmxpbmUgU2hvcC4nOiAnTmFpbHMgRkFDVE9SWSDDq3NodMOrIG5qw6sgbmdhIGZ1cm5penVlc2l0IGtyeWVzb3LDqyB0w6sgc2FsbG9uZXZlIHp2aWNlcmFuZSB0w6sgdGhvbmp2ZS4gUG9yIHByb2R1a3RldCB0b25hIG1lIGNpbMOrc2kgdMOrIGxhcnTDqyBqYW7DqyBnaml0aGFzaHR1IHpnamlkaGphIHBlcmZla3RlIHDDq3IgcMOrcmRvcmltIHByaXZhdC4gTmrDqyBww6tyemdqZWRoamUgZSBtYWRoZSBlIG1hbmlreXJhdmUsIHByb2R1a3RldmUgdMOrIGFydGl0IHTDqyB0aG9uanZlLCBsbGFtYmF2ZSBVViBkaGUgTEVEIGRoZSBzaHVtw6sgYWtzZXNvcsOrIHTDqyB0amVyw6sgcMOrciBtb2RlbGltIHTDqyBzdWtzZXNzaMOrbSB0w6sgdGhvbmp2ZSBqdSBwcmVzaW4gbsOrIGR5cWFuaW4gdG9uw6sgTmFpbHMgT25saW5lLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3JpZXMnOiAna2F0ZWdvcml0w6snLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbmZvcm1hdGlvbic6ICdpbmZvcm1hY2lvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvY2F0aW9ucyc6ICdWZW5kbmRvZGhqZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGQVEnOiAnRkFRJyxcclxuICAgICAgICAgICAgICAgICAgICAnQjJCIHJlcXVlc3QnOiAnS8Orcmtlc2EgQjJCJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGFjdCc6ICdLb250YWt0b25pJyxcclxuICAgICAgICAgICAgICAgICAgICAnU2VlbmdlbiBsb2NhdGlvbiBHdWFyZGlhbiBXYXkgNiA1NzA3IFNlZW5nZW4nOiAnVmVuZG5kb2RoamEgU2VlbmdlbiBHdWFyZGlhbiBXYXkgNiA1NzA3IFNlZW5nZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQaG9uZSArIDQxIDYyIDc3MSAwMCAyMSc6ICdUZWxlZm9uaTogKyA0MSA2MiA3NzEgMDAgMjEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCBVcyc6ICdOYSBkw6tyZ29uaSBtZSBlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JlYXV0eSBpcyBpbiB5b3VyIGhhbmRzJzogJ0J1a3VyaWEgw6tzaHTDqyBuw6sgZHVhcnQgdHVhamEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb2dpbic6ICdJZGVudGlmaWtvaHUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb2dvdXQnOiAnU2hrecOnJyxcclxuICAgICAgICAgICAgICAgICAgICAnd2lzaGxpc3QnOiAnbGlzdGEgZSBkw6tzaGlyYXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAnTXkgQWNjb3VudCc6ICdMbG9nYXJpYSBpbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWdpc3Rlcic6ICdSZWdqaXN0cm9odScsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9QUk9EVUNUXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2snOiBcIm1icmFwYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb2FkaW5nJzogXCJQbyBuZ2Fya29oZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAnc2l6ZSc6IFwibWFkaMOrc2lhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ByaWNlJzogXCLDp21pbWlcIixcclxuICAgICAgICAgICAgICAgICAgICAnR3JlYXQgbmFpbCBwb2xpc2ggY29sb3IgcG9saXNoZXMgd2l0aCBhbiBleGNlcHRpb25hbGx5IG5vdXJpc2hpbmcgZm9ybXVsYS4gVGhlIGNvbXBvc2l0aW9uIHdvcmtzIHdpdGhvdXQgdGhlIDE4IGhhcm1mdWwgY2hlbWljYWxzIHRoYXQgY2FuIG5vcm1hbGx5IGJlIGZvdW5kIGluIG5haWwgcG9saXNoZXMuIFRoZXkgZHJ5IHN1cGVyIGZhc3QuIFlvdSBkb27igJl0IGhhdmUgdG8gd2FpdCBzbyBsb25nIGJlZm9yZSB5b3UgY2FuIGdvIGJhY2sgdG8gZXZlcnlkYXkgYnVzaW5lc3MuIFRoaXMgZWZmZWN0IGlzIHN1cHBvcnRlZCBieSB0aGUgYm9keeKAmXMgb3duIHdhcm10aC4gVGhpcyBoZWxwcyB0aGUgbmFpbCBwb2xpc2ggdG8gZHJ5IHZlcnkgcXVpY2tseS4gVGhlIHdhaXQgaXMgZmluYWxseSBvdmVyJzogXCJMdXN0cmltZSB0w6sgc2hrw6tscXllcmEgdMOrIG1hbmlreXJpdCBtZSBuasOrIGZvcm11bMOrIGphc2h0w6t6YWtvbmlzaHQgdXNocXllc2UuIFDDq3Jiw6tyamEgZnVua3Npb25vbiBwYSAxOCBraW1pa2F0ZXQgZSBkw6ttc2htZSBxw6sgbm9ybWFsaXNodCBtdW5kIHTDqyBnamVuZGVuIG7DqyBtYW5pa3lyaW4gZSB0aG9uanZlLiBBdGEgdGhhaGVuIHN1cGVyIHNocGVqdC4gTnVrIGR1aGV0IHTDqyBwcmlzbmkga2FxIGdqYXTDqyBww6tycGFyYSBzZSB0w6sgbXVuZCB0J2kga3RoZWhlbmkgYml6bmVzaXQgdMOrIHDDq3JkaXRzaMOrbS4gS3kgZWZla3QgbWLDq3NodGV0ZXQgbmdhIHZldMOrIG5ncm9odMOrc2lhIGUgdHJ1cGl0LiBLam8gbmRpaG1vbiBxw6sgbWFuaWt5cmkgdMOrIHRoYWhldCBzaHVtw6sgc2hwZWp0LiBQcml0amEgbcOrIG7DqyBmdW5kIGthIG1hcnLDqyBmdW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hvbWUnOiBcIlNodMOrcGlcIixcclxuICAgICAgICAgICAgICAgICAgICAnbGFuZ3VhZ2UnOiBcImdqdWhlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJzEwIFByb2R1Y3RzIFBhciBQYWdlJzogXCIxMCBQcm9kdWt0ZSBQYXIgRmFxZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICcxNSBQcm9kdWN0cyBQYXIgUGFnZSc6IFwiMTUgUHJvZHVrdGUgUGFyIEZhcWVcIixcclxuICAgICAgICAgICAgICAgICAgICAnMjAgUHJvZHVjdHMgUGFyIFBhZ2UnOiBcIjIwIFByb2R1a3RlIFBhciBGYXFlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvcnRpbmcgaXRlbXMnOiBcIlJlbmRpdGphIGUgYXJ0aWt1anZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2ggVG8gTG93JzogXCJOZ2EgbGFydCBuw6sgdMOrIHVsw6t0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvdyBUbyBIaWdoJzogXCJFIHVsw6t0IG7DqyB0w6sgbGFydMOrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld2VzdCc6IFwiTcOrIHTDqyByZWphdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdBc2MgT3JkZXInOiBcIlVyZGhyaSBBc2NcIixcclxuICAgICAgICAgICAgICAgICAgICAnRGVzYyBPcmRlcic6IFwiUmVuZGl0IERlc2NcIixcclxuICAgICAgICAgICAgICAgICAgICAnWW91ciBDYXJ0IGlzIEVtcHR5JzogXCJTaHBvcnRhIGp1YWogw6tzaHTDqyBib3NoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0V4cGxvcmUgbW9yZSBzaG9ydGxpc3Qgc29tZSBpdGVtcy4nOiBcIkVrc3Bsb3JvbmkgbcOrIHNodW3DqywgbGlzdGEgZSBkaXNhIGFydGlrdWp2ZS5cIixcclxuICAgICAgICAgICAgICAgICAgICAnTG9hZCBNb3JlJzogXCJOZ2Fya28gbcOrIHNodW3Dq1wiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB6aDoge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9NRU5VXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NhbGUnOiAn6ZSA5ZSuJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ291cG9ucyc6ICfkvJjmg6DliLgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFydGVyIHNldHMnOiAn5YWl6Zeo5aWX6KOFJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCB2YXJuaXNoZXMgLSBjb2xvciB2YXJuaXNoZXMnOiAn5oyH55Sy5rK5IC0g5b2p6Imy5riF5ryGJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCB2YXJuaXNoZXMnOiAn5oyH55Sy5rK5JyxcclxuICAgICAgICAgICAgICAgICAgICAnR2VsICYgYWNyeWxpYyBzeXN0ZW0nOiAn5Yed6IO25ZKM5LiZ54Ov6YW457O757ufJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNyeWxpYyBzeXN0ZW0nOiAn5Lqa5YWL5Yqb57O757ufJyxcclxuICAgICAgICAgICAgICAgICAgICAnUG9seSBhY3J5bGljIGdlbCc6ICfogZrkuJnng6/phbjlh53og7YnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXBwaW5nIHBvd2Rlcic6ICfomLjnsoknLFxyXG4gICAgICAgICAgICAgICAgICAgICdHZWwgYnVpbGQtdXAnOiAn5Yed6IO25aCG56evJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJpbWVyICYgYmFzZSBnZWwnOiAn5bqV5ryG5ZKM5Z+656GA5Yed6IO2JyxcclxuICAgICAgICAgICAgICAgICAgICAnUnViYmVyIEJhc2UgR2VsJzogJ+apoeiDtuWfuuehgOWHneiDticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0J1aWxkLXVwIGdlbCc6ICfkv67miqTlh53og7YnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmaWJlcmdsYXNzJzogJ+eOu+eSg+e6pOe7tCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xFRCc6ICflvJXpooYnLFxyXG4gICAgICAgICAgICAgICAgICAgICcxLXBoYXNlIGdlbCc6ICfkuIDnm7jlh53og7YnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb3ZlciBjYW1vdWZsYWdlJzogJ+Wwgemdoui/t+W9qScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZyZW5jaCBnZWxzJzogJ+azleWbveWHneiDticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlYWxpbmcnOiAn5a+G5bCBJyxcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgY29sb3IgZ2Vscyc6ICdVViAvIExFRCDlvanoibLlh53og7YnLFxyXG4gICAgICAgICAgICAgICAgICAgICdPbmUgc3Ryb2tlJzogJ+S4gOaLmycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbG9yIEdlbHMnOiAn5b2p6Imy5Yed6IO2JyxcclxuICAgICAgICAgICAgICAgICAgICAnTEVEIC8gVVYgUkFMJzogJ0xFRCAvIOe0q+Wklue6vyBSQUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUcmVuZCBjb2xvcnMnOiAn5rWB6KGM6ImyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWFjYXJvbnMnOiAn6ams5Y2h6b6ZJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHJvcGljYWwgRHJlYW0nOiAn54Ot5bim5qKm5oOzJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmVvbic6ICfmsJYnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGcmVzaCAmIENvb2wnOiAn5riF5paw5YeJ54i9JyxcclxuICAgICAgICAgICAgICAgICAgICAnTnVkZSc6ICfoo7jkvZMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdHbGl0dGVyIGdlbHMnOiAn6Zeq5YWJ5Yed6IO2JyxcclxuICAgICAgICAgICAgICAgICAgICAnaG9sb2dyYW0nOiAn5YWo5oGv5Zu+JyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJlY2lvdXMgU3RvbmUnOiAn5a6d55+zJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3BhcmtsaW5nIFdpbmVzJzogJ+i1t+azoemFkicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BlYXJsIGRyZWFtcyc6ICfnj43nj6DmoqYnLFxyXG4gICAgICAgICAgICAgICAgICAgICdIaWdoIHF1YWxpdHkgZ2xpdHRlciBnZWwnOiAn6auY5ZOB6LSo6Zeq5YWJ5Yed6IO2JyxcclxuICAgICAgICAgICAgICAgICAgICAnTWlsa3kgV2F5JzogJ+mTtuays+ezuycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01lcm1haWQnOiAn576O5Lq66bG8JyxcclxuICAgICAgICAgICAgICAgICAgICAnRmFzaGlvbiBzdGFyJzogJ+aXtuWwmuaYjuaYnycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hZ2ljIGdlbHMnOiAn6a2U5rOV5Yed6IO2JyxcclxuICAgICAgICAgICAgICAgICAgICAnRWZmZWN0IGdlbHMnOiAn5pWI5p6c5Yed6IO2JyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2hhbWVsZW9uIGVmZmVjdCc6ICflj5joibLpvpnmlYjlupQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaGVybW8gZ2Vscyc6ICfng63lh53og7YnLFxyXG4gICAgICAgICAgICAgICAgICAgICdHbG9zcyBnZWxzJzogJ+WFieazveWHneiDticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhIFZpZSBOYXR1cmVsJzogJ+iHqueEtueUn+a0uycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dvbGRpZSBEcmVhbSBCYWxsJzogJ+aIiOWwlOi/quaipuaDs+eQgycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RhZmZvZGlsIGNhc2UnOiAn5rC05LuZ6Iqx5qGIJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzdGVsJzogJ+eyieW9qScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01pbmVyYWwgcG93ZGVyJzogJ+efv+eyiScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ011c2Ugb2YgTGlnaHQnOiAn5YWJ5LmL57yq5pavJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzdGVsIHNlcmllcyc6ICfnsonlvanns7vliJcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDYXRtYXRpYyc6ICfljaHpqazokoLlhYsnLFxyXG4gICAgICAgICAgICAgICAgICAgICczRCBDYXQgRXllIEdlbCc6ICczROeMq+ecvOWHneiDticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hZ25ldHMnOiAn56OB6ZOBJyxcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgU2hlbGxhYyAtIGdlbCB2YXJuaXNoJzogJ1VWIC8gTEVEIOiZq+iDtiAtIOWHneiDtua4hea8hicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZsZXh5IEh5YnJpZCBHZWwnOiAnRmxleHkg5re35ZCI5Yed6IO2JyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBBcnQnOiAn576O55SyJyxcclxuICAgICAgICAgICAgICAgICAgICAnSW5zdHJ1bWVudHMgJiBhY2Nlc3Nvcmllcyc6ICfku6rlmajlj4rphY3ku7YnLFxyXG4gICAgICAgICAgICAgICAgICAgICczRCAmIDREIGdlbCc6ICczRCAmIDREIOWHneiDticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyYWNraW5nIGdlbCc6ICfoo4Lop6Plh53og7YnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdWdhciBwb3dkZXInOiAn57OW57KJJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFpbnRpbmcgZ2VsJzogJ+e7mOeUu+WHneiDticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NwaWRlciBnZWxzJzogJ+icmOibm+WHneiDticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoJzogJ+WWt+aeqicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoIHN0ZW5jaWxzJzogJ+WWt+aequaooeWFtycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FpcmJydXNoIGNvbG9ycyc6ICfllrfmnqrpopzoibInLFxyXG4gICAgICAgICAgICAgICAgICAgICdBaXJicnVzaCBkZXZpY2UnOiAn5Za35p6q6KOF572uJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGlnbWVudHMnOiAn6aKc5paZJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmFpbCBhcnQgc3RhbXBpbmcnOiAn576O55Sy54Or5Y2wJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3RlbmNpbHMnOiAn5qih5p2/JyxcclxuICAgICAgICAgICAgICAgICAgICAnU3RhbXBpbmcgZ2VsJzogJ+WGsuWOi+iDticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YW1waW5nIGFjY2Vzc29yaWVzJzogJ+WGsuWOi+mFjeS7ticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYW5zZmVyIGZvaWxzJzogJ+i9rOWNsOeulCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgQXJ0IFN0aWNrZXJzJzogJ+e+jueUsui0tOe6uCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0dsaXR0ZXInOiAn6Zeq5YWJJyxcclxuICAgICAgICAgICAgICAgICAgICAnUmhpbmVzdG9uZXMnOiAn5rC06ZK7JyxcclxuICAgICAgICAgICAgICAgICAgICAnUGllcmNpbmcnOiAn5Yay5a2UJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGVhcmxzIGFuZCBDby4nOiAn54+N54+g5YWs5Y+4JyxcclxuICAgICAgICAgICAgICAgICAgICAnVVYgLyBMRUQgbGFtcHMnOiAnVVYvTEVE54GvJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWlsbGluZyBjdXR0ZXJzICYgYWNjZXNzb3JpZXMnOiAn6ZOj5YiA5Y+K6YWN5Lu2JyxcclxuICAgICAgICAgICAgICAgICAgICAnUm91dGVyJzogJ+i3r+eUseWZqCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JvdXRlciBiaXRzJzogJ+i3r+eUseWZqOS9jScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NlcmFtaWMgYml0cyc6ICfpmbbnk7fpkrvlpLQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQb2xpc2hpbmcgdG9vbCc6ICfmipvlhYnlt6XlhbcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEdXN0JzogJ+eBsOWwmCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2Vzc29yaWVzJzogJ+mFjeS7ticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0h5Z2llbmUgJiBsaXF1aWRzJzogJ+WNq+eUn+WSjOa2suS9kycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0h5Z2llbmUgcHJvZHVjdHMnOiAn5Y2r55Sf55So5ZOBJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2xlYW5lciAmIENvLic6ICfmuIXmtIHliYLlhazlj7gnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsICYgRm9vdCBDYXJlJzogJ+aMh+eUsuWSjOi2s+mDqOaKpOeQhicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rvb2xzJzogJ+W3peWFtycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05haWwgT2lsICYgSGFuZCBDcmVhbSc6ICfmjIfnlLLmsrnlkozmiqTmiYvpnJwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYWlsIG9pbCAmIGhhbmQgJzogJ+aMh+eUsuayueWSjOaJiycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JydXNoZXMgJiBicnVzaGVzJzogJ+WIt+WtkOWSjOWIt+WtkCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01vZGVsaW5nIHRlbXBsYXRlcyc6ICflu7rmqKHmqKHmnb8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaXBzICYgYWNjZXNzb3JpZXMnOiAn5o+Q56S65ZKM6YWN5Lu2JyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2xhc3NpYyB0aXBzJzogJ+e7j+WFuOaPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZyZW5jaCB0aXBzJzogJ+azleivreWwj+i0tOWjqycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0aWxldHRvIHRpcHMnOiAn6auY6Lef6Z6L5bCP6LS05aOrJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHVubmVsIHRpcHMnOiAn6Zqn6YGT5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICAnRm9vdCB0aXBzJzogJ+i2s+i0tCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcCBnbHVlJzogJ+WwluWktOiDticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpcCBjdXR0ZXInOiAn5bCW56uv5YiA5YW3JyxcclxuICAgICAgICAgICAgICAgICAgICAnVGlwcyBhY2Nlc3Nvcmllcyc6ICfmj5DnpLrphY3ku7YnLFxyXG4gICAgICAgICAgICAgICAgICAgICdGaWxlcyAmIEJ1ZmZlcnMnOiAn5paH5Lu25ZKM57yT5Yay5Yy6JyxcclxuICAgICAgICAgICAgICAgICAgICAnRm9vdCBmaWxlcyc6ICfotrPplIknLFxyXG4gICAgICAgICAgICAgICAgICAgICdDdXJ2ZWQgZmlsZXMnOiAn5byv5puy5paH5Lu2JyxcclxuICAgICAgICAgICAgICAgICAgICAnU3RyYWlnaHQgZmlsZXMnOiAn55u05o6l5paH5Lu2JyxcclxuICAgICAgICAgICAgICAgICAgICAnVHJhcGV6ZSBmaWxlcyc6ICfpo57kurrmlofku7YnLFxyXG4gICAgICAgICAgICAgICAgICAgICdidWZmZXInOiAn57yT5YayJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJhY3RpY2UgaGFuZHMgJiBmaW5nZXJzJzogJ+e7g+S5oOaJi+WSjOaJi+aMhycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rhc2sgbGlnaHRzJzogJ+S7u+WKoeeBrycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FybXJlc3RzJzogJ+aJtuaJiycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhaW5lcnMgJiBzdG9yYWdlJzogJ+WuueWZqOWSjOWtmOWCqCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlzICYgc2hlbHZlcyc6ICflsZXnpLrmnrblkozotKfmnrYnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdHVkaW8gZnVybmlzaGluZ3MnOiAn5bel5L2c5a6k5a625YW3JyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFza3MnOiAn6Z2i5YW3JyxcclxuICAgICAgICAgICAgICAgICAgICAnT3RoZXJzJzogJ+WFtuS7licsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYWluaW5nJzogJ+iuree7gycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYWluaW5nJzogJ+iuree7gycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByaXZhdGUgY291cnNlcyc6ICfnp4Hkurror77nqIsnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vU0VSVklDRVxyXG4gICAgICAgICAgICAgICAgICAgICdFeHByZXNzIFNoaXBwaW5nJzogJ+W/q+mAkicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Zyb20gTW9uLUZyaSc6ICflkajkuIDoh7PlkajkupQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWFwZXN0IGluJzogJ+WghuWcqCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N3aXR6ZXJsYW5kIFByaWNlcyc6ICfnkZ7lo6sg5Lu35qC8JyxcclxuICAgICAgICAgICAgICAgICAgICAnQWJzb2x1dGVseSBzYWZlJzogJ+e7neWvueWuieWFqCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnQgTWV0aG9kcyc6ICfmlK/ku5jmlrnlvI8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXJlY3QgZnJvbSB0aGUnOiAn55u05o6l5LuOJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWFudWZhY3R1cmVyIGVpbmthdWZlbic6ICfliLbpgKDllYYgZWlua2F1ZmVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnZnJlZSBzaGlwcGluZyc6ICflhY3ov5DotLknLFxyXG4gICAgICAgICAgICAgICAgICAgICdmcm9tIENIRiAxMDAuLSc6ICfku44gMTAwIOeRnuWjq+azlemDjui1t+OAgi0nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vQkFOTkVSXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Zyb20gdXMgZm9yIHlvdSDimaEnOiAn5oiR5Lus5Li65L2g6ICM5p2l4pmhJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmVzdGl2ZSBob2xpZGF5cyB3aXRoIG91ciBTaGVsbGFjIGNvbG9ycyc6ICfnlKjmiJHku6znmoTomavog7bpopzoibLluobnpZ3oioLml6UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDaHJpc3RtYXMgU2FsZSEnOiAn5Zyj6K+e54m55Y2WJyxcclxuICAgICAgICAgICAgICAgICAgICAnTm93IGZyb20gQ0hGIDUwLiAtIDEwICUgb2ZmIEVWRVJZVEhJTkcgYW5kIGZyb20gQ0hGIDAuIC0gYSBmcmVlIGdpZnQhIC0gQ29kZSAtPiBtZXJyeW5haWxzJzogJ+eOsOWcqCA1MCDnkZ7lo6vms5Xpg47otbfjgIIgLSDkuIDliIfpg73lj6/kuqvlj5cgMTAgJSDnmoTmipjmiaPvvIwwIOeRnuWjq+azlemDjui1t+OAgiAtIOWFjei0ueekvOeJqSAtIOS7o+eggSAtPiBtZXJyeW5haWxzJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1RPUCBQUk9EVUNUXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwZWNpYWwgb2ZmZXInOiAn54m55Lu3JyxcclxuICAgICAgICAgICAgICAgICAgICAndG9wIGNvbGxlY3Rpb24nOiAn6aG257qn5pS26JePJyxcclxuICAgICAgICAgICAgICAgICAgICAnRmluZCB5b3VyIHByb2R1Y3QgaGVyZS4uLic6ICflnKjov5nph4zmib7liLDmgqjnmoTkuqflk4EuLi4nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vUEFSQUxMQVhcclxuICAgICAgICAgICAgICAgICAgICAnZmFzaGlvbiB0cmVuZHMnOiAn5rWB6KGM6LaL5Yq/JyxcclxuICAgICAgICAgICAgICAgICAgICAnc3BlY2lhbCBvZmZlcic6ICfnibnku7cnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vT1RIRVJTXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NVQlNDUklCRSBUTyBPVVIgTkVXU0xFVFRFUiEnOiAn6K6i6ZiF5oiR5Lus55qE5paw6Ze7JyxcclxuICAgICAgICAgICAgICAgICAgICAnTmV2ZXIgTWlzcyBBbnl0aGluZyBGcm9tIFN3aXNzIE5haWxzIEZhY3RvcnkgQnkgU2lnbmluZyBVcCBUbyBPdXIgTmV3c2xldHRlci4nOiAn6K6i6ZiF5oiR5Lus55qE5pe25LqL6YCa6K6v77yM57ud5LiN5Lya6ZSZ6L+H55Ge5aOr576O55Sy5Y6C55qE5Lu75L2V5Lqn5ZOB44CCJyxcclxuICAgICAgICAgICAgICAgICAgICAnRW50ZXIgeW91ciBlbWFpbCc6ICfovpPlhaXkvaDnmoTnlLXlrZDpgq7nrrEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdWJzY3JpYmUnOiAn6K6i6ZiFJyxcclxuICAgICAgICAgICAgICAgICAgICAnYWJvdXQnOiAn5YWz5LqOJyxcclxuICAgICAgICAgICAgICAgICAgICAnTkFJTFMgRkFDVE9SWSBpcyBvbmUgb2YgdGhlIHRvcCBzdXBwbGllcnMgdG8gdGhlIFN3aXNzIG5haWwgc2Fsb25zLiBCdXQgb3VyIGhpZ2gtcXVhbGl0eSBwcm9kdWN0cyBhcmUgYWxzbyB0aGUgcGVyZmVjdCBjaG9pY2UgZm9yIHByaXZhdGUgdXNlLiBBIGh1Z2Ugc2VsZWN0aW9uIG9mIG5haWwgcG9saXNoZXMsIG5haWwgYXJ0IHByb2R1Y3RzLCBVViBhbmQgTEVEIGxhbXBzIGFuZCBtYW55IG90aGVyIGFjY2Vzc29yaWVzIGZvciBzdWNjZXNzZnVsIG5haWwgbW9kZWxpbmcgYXdhaXQgeW91IGluIG91ciBOYWlscyBPbmxpbmUgU2hvcC4nOiAnTkFJTFMgRkFDVE9SWSDmmK/nkZ7lo6vnvo7nlLLmspnpvpnnmoTpobbnuqfkvpvlupTllYbkuYvkuIDjgILkvYbmiJHku6znmoTpq5jlk4HotKjkuqflk4HkuZ/mmK/np4Hkurrkvb/nlKjnmoTlroznvo7pgInmi6njgILlnKjmiJHku6znmoQgTmFpbHMgT25saW5lIFNob3Ag5Lit77yM5pyJ5aSn6YeP5Y+v5L6b6YCJ5oup55qE5oyH55Sy5rK544CB576O55Sy5Lqn5ZOB44CBVVYg5ZKMIExFRCDnga/ku6Xlj4rorrjlpJrlhbbku5bmiJDlip/nmoTmjIfnlLLpgKDlnovphY3ku7bnrYnnnYDmgqjjgIInLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yaWVzJzogJ+exu+WIqycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2luZm9ybWF0aW9uJzogJ+S/oeaBrycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvY2F0aW9ucyc6ICflnLDngrknLFxyXG4gICAgICAgICAgICAgICAgICAgICdGQVEnOiAn5bi46Zeu6Zeu6aKYJyxcclxuICAgICAgICAgICAgICAgICAgICAnQjJCIHJlcXVlc3QnOiAnQjJCIOivt+axgicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhY3QnOiAn5o6l6KemJyxcclxuICAgICAgICAgICAgICAgICAgICAnU2VlbmdlbiBsb2NhdGlvbiBHdWFyZGlhbiBXYXkgNiA1NzA3IFNlZW5nZW4nOiAn5qOu5qC55L2N572uIEd1YXJkaWFuIFdheSA2IDU3MDcg5qOu5qC5JyxcclxuICAgICAgICAgICAgICAgICAgICAnUGhvbmUgKyA0MSA2MiA3NzEgMDAgMjEnOiAn55S16K+dICsgNDEgNjIgNzcxIDAwIDIxJyxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwgVXMnOiAn57uZ5oiR5Lus5Y+R55S15a2Q6YKu5Lu2JyxcclxuICAgICAgICAgICAgICAgICAgICAnQmVhdXR5IGlzIGluIHlvdXIgaGFuZHMnOiAn576O5Li95Zyo5L2g5omL5LitJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9naW4nOiAn55m75b2VJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG9nb3V0JzogJ+eZu+WHuicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpc2hsaXN0JzogJ+W/g+aEv+WNlScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ015IEFjY291bnQnOiAn5oiR55qE5biQ5oi3JyxcclxuICAgICAgICAgICAgICAgICAgICAnUmVnaXN0ZXInOiAn55m76K6wJyxcclxuICAgICAgICAgICAgICAgICAgICAvL1BST0RVQ1RcclxuICAgICAgICAgICAgICAgICAgICAnYmFjayc6ICfog4zpg6gnLFxyXG4gICAgICAgICAgICAgICAgICAgICdMb2FkaW5nJzogJ+WKoOi9veS4rScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NpemUnOiAn5bC65a+4JyxcclxuICAgICAgICAgICAgICAgICAgICAncHJpY2UnOiAn5Lu35qC8JyxcclxuICAgICAgICAgICAgICAgICAgICAnR3JlYXQgbmFpbCBwb2xpc2ggY29sb3IgcG9saXNoZXMgd2l0aCBhbiBleGNlcHRpb25hbGx5IG5vdXJpc2hpbmcgZm9ybXVsYS4gVGhlIGNvbXBvc2l0aW9uIHdvcmtzIHdpdGhvdXQgdGhlIDE4IGhhcm1mdWwgY2hlbWljYWxzIHRoYXQgY2FuIG5vcm1hbGx5IGJlIGZvdW5kIGluIG5haWwgcG9saXNoZXMuIFRoZXkgZHJ5IHN1cGVyIGZhc3QuIFlvdSBkb27igJl0IGhhdmUgdG8gd2FpdCBzbyBsb25nIGJlZm9yZSB5b3UgY2FuIGdvIGJhY2sgdG8gZXZlcnlkYXkgYnVzaW5lc3MuIFRoaXMgZWZmZWN0IGlzIHN1cHBvcnRlZCBieSB0aGUgYm9keeKAmXMgb3duIHdhcm10aC4gVGhpcyBoZWxwcyB0aGUgbmFpbCBwb2xpc2ggdG8gZHJ5IHZlcnkgcXVpY2tseS4gVGhlIHdhaXQgaXMgZmluYWxseSBvdmVyJzogJ+WHuuiJsueahOaMh+eUsuayueminOiJsuaKm+WFieWJgu+8jOWFt+acieaegeWFtua7i+WFu+eahOmFjeaWueOAguivpee7hOWQiOeJqeS4jeWQq+aMh+eUsuayueS4reW4uOingeeahCAxOCDnp43mnInlrrPljJblrabnianotKjjgILlroPku6zlubLlvpfotoXnuqflv6vjgILmgqjml6DpnIDnrYnlvoXlvojplb/ml7bpl7TljbPlj6/mgaLlpI3ml6XluLjlt6XkvZzjgILov5nnp43mlYjmnpzmmK/nlLHouqvkvZPoh6rouqvnmoTmuKnmmpbmlK/mjIHnmoTjgILov5nmnInliqnkuo7mjIfnlLLmsrnlv6vpgJ/lubLnh6XjgILmvKvplb/nmoTnrYnlvoXnu4jkuo7nu5PmnZ/kuoYnLFxyXG4gICAgICAgICAgICAgICAgICAgICdIb21lJzogJ+WuticsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xhbmd1YWdlJzogJ+ivrScsXHJcbiAgICAgICAgICAgICAgICAgICAgJzEwIFByb2R1Y3RzIFBhciBQYWdlJzogJzEwIOS6p+WTgeagh+WHhumhtScsXHJcbiAgICAgICAgICAgICAgICAgICAgJzE1IFByb2R1Y3RzIFBhciBQYWdlJzogJzE1IOS6p+WTgeagh+WHhumhtScsXHJcbiAgICAgICAgICAgICAgICAgICAgJzIwIFByb2R1Y3RzIFBhciBQYWdlJzogJzIwIOS6p+WTgeagh+WHhumhtScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvcnRpbmcgaXRlbXMnOiAn5o6S5bqP6aG555uuJyxcclxuICAgICAgICAgICAgICAgICAgICAnSGlnaCBUbyBMb3cnOiAn6auY5Yiw5L2OJyxcclxuICAgICAgICAgICAgICAgICAgICAnTG93IFRvIEhpZ2gnOiAn5LuO5L2O5Yiw6auYJyxcclxuICAgICAgICAgICAgICAgICAgICAnTmV3ZXN0JzogJ+acgOaWsCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FzYyBPcmRlcic6ICfljYfluo8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXNjIE9yZGVyJzogJ+mZjeW6jycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1lvdXIgQ2FydCBpcyBFbXB0eSc6ICfmgqjnmoTotK3nianovabmmK/nqbrnmoQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdFeHBsb3JlIG1vcmUgc2hvcnRsaXN0IHNvbWUgaXRlbXMuJzogJ+aOoue0ouabtOWkmuWAmemAieWQjeWNleS4gOS6m+mhueebruOAgicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xvYWQgTW9yZSc6ICfoo4Xovb3mm7TlpJonLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhbGxiYWNrTG5nOiBcImVuXCIsXHJcbiAgICAgICAgZGVidWc6IHRydWUsXHJcblxyXG4gICAgICAgIC8vIGhhdmUgYSBjb21tb24gbmFtZXNwYWNlIHVzZWQgYXJvdW5kIHRoZSBmdWxsIGFwcFxyXG4gICAgICAgIG5zOiBbXCJ0cmFuc2xhdGlvbnNcIl0sXHJcbiAgICAgICAgZGVmYXVsdE5TOiBcInRyYW5zbGF0aW9uc1wiLFxyXG5cclxuICAgICAgICBrZXlTZXBhcmF0b3I6IGZhbHNlLCAvLyB3ZSB1c2UgY29udGVudCBhcyBrZXlzXHJcblxyXG4gICAgICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpMThuZXh0O1xyXG4iLCJleHBvcnQgY29uc3QgTUVOVUlURU1TID0gW1xyXG4gICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1NhbGUnLCB0eXBlOiAnbGluaycsIGFycm93OiBmYWxzZSB9LFxyXG4gICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0NvdXBvbnMnLCB0eXBlOiAnbGluaycsIGFycm93OiBmYWxzZSB9LFxyXG4gICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1N0YXJ0ZXIgc2V0cycsIHR5cGU6ICdsaW5rJywgYXJyb3c6IGZhbHNlIH0sXHJcbiAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTmFpbCB2YXJuaXNoZXMgLSBjb2xvciB2YXJuaXNoZXMnLCB0eXBlOiAnbGluaycsIGFycm93OiBmYWxzZSB9LFxyXG4gICB7XHJcbiAgICAgIHRpdGxlOiAnR2VsICYgYWNyeWxpYyBzeXN0ZW0nLCB0eXBlOiAnc3ViJywgY2hpbGRyZW46IFtcclxuICAgICAgICAgeyB0aXRsZTogJ0FjcnlsaWMgc3lzdGVtJywgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdQb2x5IGFjcnlsaWMgZ2VsJywgdHlwZTogJ2xpbmsnLCB9LFxyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0RpcHBpbmcgcG93ZGVyJywgdHlwZTogJ2xpbmsnLCB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2VsIGJ1aWxkLXVwJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnUHJpbWVyICYgYmFzZSBnZWwnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdSdWJiZXIgQmFzZSBHZWwnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdCdWlsZC11cCBnZWwnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdmaWJlcmdsYXNzJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTEVEJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnMS1waGFzZSBnZWwnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdDb3ZlciBjYW1vdWZsYWdlJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnRnJlbmNoIGdlbHMnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ3NlYWxpbmcnLCB0eXBlOiAnbGluaycsIH0sXHJcblxyXG4gICAgICBdXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgdGl0bGU6ICdVViAvIExFRCBjb2xvciBnZWxzJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnT25lIHN0cm9rZScsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NvbG9yIEdlbHMnLCB0eXBlOiAnc3ViJywgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdMRUQgLyBVViBSQUwnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdUcmVuZCBjb2xvcnMnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdtYWNhcm9ucycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1Ryb3BpY2FsIERyZWFtJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTmVvbicsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0ZyZXNoICYgQ29vbCcsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ051ZGUnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdDaGFtcGlvbnMgUmVkJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dsaXR0ZXIgZ2VscycsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ2hvbG9ncmFtJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnUHJlY2lvdXMgU3RvbmUnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdTcGFya2xpbmcgV2luZXMnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdQZWFybCBkcmVhbXMnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdIaWdoIHF1YWxpdHkgZ2xpdHRlciBnZWwnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdNaWxreSBXYXknLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdNZXJtYWlkJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnRmFzaGlvbiBzdGFyJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTWFnaWMgZ2VscycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFZmZlY3QgZ2VscycsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0NoYW1lbGVvbiBlZmZlY3QnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdUaGVybW8gZ2VscycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHbG9zcyBnZWxzJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTGEgVmllIE5hdHVyZWwnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdHb2xkaWUgRHJlYW0gQmFsbCcsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0RhZmZvZGlsIGNhc2UnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGFzdGVsJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTWluZXJhbCBwb3dkZXInLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdNdXNlIG9mIExpZ2h0JywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnUGFzdGVsIHNlcmllcycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDYXRtYXRpYycsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJzNEIENhdCBFeWUgR2VsJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTWFnbmV0cycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnVVYgLyBMRUQgU2hlbGxhYyAtIGdlbCB2YXJuaXNoJywgdHlwZTogJ2xpbmsnLCB9LFxyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0ZsZXh5IEh5YnJpZCBHZWwnLCB0eXBlOiAnbGluaycsIH0sXHJcblxyXG4gICAgICBdXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgdGl0bGU6ICdOYWlsIEFydCcsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0luc3RydW1lbnRzICYgYWNjZXNzb3JpZXMnLCB0eXBlOiAnbGluaycsIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnM0QgJiA0RCBnZWwnLCB0eXBlOiAnbGluaycsIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnQ3JhY2tpbmcgZ2VsJywgdHlwZTogJ2xpbmsnLCB9LFxyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1N1Z2FyIHBvd2RlcicsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdQYWludGluZyBnZWwnLCB0eXBlOiAnbGluaycsIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnU3BpZGVyIGdlbHMnLCB0eXBlOiAnbGluaycsIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBaXJicnVzaCcsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0FpcmJydXNoIHN0ZW5jaWxzJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnQWlyYnJ1c2ggY29sb3JzJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnQWlyYnJ1c2ggZGV2aWNlJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgfSxcclxuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdQaWdtZW50cycsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ05haWwgYXJ0IHN0YW1waW5nJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnc3RlbmNpbHMnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdTdGFtcGluZyBnZWwnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdTdGFtcGluZyBhY2Nlc3NvcmllcycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnVHJhbnNmZXIgZm9pbHMnLCB0eXBlOiAnbGluaycsIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTmFpbCBBcnQgU3RpY2tlcnMnLCB0eXBlOiAnbGluaycsIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnR2xpdHRlcicsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdSaGluZXN0b25lcycsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdQaWVyY2luZycsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdQZWFybHMgYW5kIENvLicsIHR5cGU6ICdsaW5rJywgfSxcclxuXHJcbiAgICAgIF1cclxuICAgfSxcclxuICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdVViAvIExFRCBsYW1wcycsIHR5cGU6ICdsaW5rJywgYXJyb3c6IGZhbHNlIH0sXHJcbiAgIHtcclxuICAgICAgdGl0bGU6ICdNaWxsaW5nIGN1dHRlcnMgJiBhY2Nlc3NvcmllcycsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1JvdXRlcicsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdSb3V0ZXIgYml0cycsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdDZXJhbWljIGJpdHMnLCB0eXBlOiAnbGluaycsIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnUG9saXNoaW5nIHRvb2wnLCB0eXBlOiAnbGluaycsIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnRHVzdCcsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgXVxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHRpdGxlOiAnQWNjZXNzb3JpZXMnLCB0eXBlOiAnc3ViJywgY2hpbGRyZW46IFtcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0h5Z2llbmUgJiBsaXF1aWRzJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnSHlnaWVuZSBwcm9kdWN0cycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0NsZWFuZXIgJiBDby4nLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTmFpbCAmIEZvb3QgQ2FyZScsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1Rvb2xzJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTmFpbCBvaWwgJiBoYW5kIGNyZWFtJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgfSxcclxuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdCcnVzaGVzICYgYnJ1c2hlcycsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdNb2RlbGluZyB0ZW1wbGF0ZXMnLCB0eXBlOiAnbGluaycsIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUaXBzICYgYWNjZXNzb3JpZXMnLCB0eXBlOiAnc3ViJywgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdDbGFzc2ljIHRpcHMnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdGcmVuY2ggdGlwcycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1N0aWxldHRvIHRpcHMnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdUdW5uZWwgdGlwcycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0Zvb3QgdGlwcycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1RpcCBnbHVlJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnVGlwIGN1dHRlcicsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1RpcHMgYWNjZXNzb3JpZXMnLCB0eXBlOiAnbGluaycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRmlsZXMgJiBCdWZmZXJzJywgdHlwZTogJ3N1YicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnRm9vdCBmaWxlcycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0N1cnZlZCBmaWxlcycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1N0cmFpZ2h0IGZpbGVzJywgdHlwZTogJ2xpbmsnIH0sXHJcbiAgICAgICAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnVHJhcGV6ZSBmaWxlcycsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ2J1ZmZlcicsIHR5cGU6ICdsaW5rJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnUHJhY3RpY2UgaGFuZHMgJiBmaW5nZXJzJywgdHlwZTogJ2xpbmsnLCB9LFxyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1Rhc2sgbGlnaHRzJywgdHlwZTogJ2xpbmsnLCB9LFxyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0FybXJlc3RzJywgdHlwZTogJ2xpbmsnLCB9LFxyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0NvbnRhaW5lcnMgJiBzdG9yYWdlJywgdHlwZTogJ2xpbmsnLCB9LFxyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ0Rpc3BsYXlzICYgc2hlbHZlcycsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgICAgeyBwYXRoOiAnL3Nob3AvbGVmdF9zaWRlYmFyJywgdGl0bGU6ICdTdHVkaW8gZnVybmlzaGluZ3MnLCB0eXBlOiAnbGluaycsIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnTWFza3MnLCB0eXBlOiAnbGluaycsIH0sXHJcbiAgICAgICAgIHsgcGF0aDogJy9zaG9wL2xlZnRfc2lkZWJhcicsIHRpdGxlOiAnT3RoZXJzJywgdHlwZTogJ2xpbmsnLCB9LFxyXG4gICAgICBdXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgdGl0bGU6ICdUcmFpbmluZycsIHR5cGU6ICdzdWInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1RyYWluaW5nJywgdHlwZTogJ2xpbmsnLCB9LFxyXG4gICAgICAgICB7IHBhdGg6ICcvc2hvcC9sZWZ0X3NpZGViYXInLCB0aXRsZTogJ1ByaXZhdGUgY291cnNlcycsIHR5cGU6ICdsaW5rJywgfSxcclxuICAgICAgXVxyXG4gICB9LFxyXG5cclxuXVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tIFwiLi4vLi4vaGVscGVycy9jYXJ0XCI7XHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0XCI7XHJcblxyXG5jb25zdCBDYXJ0Q29tcG9uZW50ID0gKHsgaWNvbiwgbGF5b3V0IH0pID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgY29uc3QgY3VyckNvbnRleHQgPSB1c2VDb250ZXh0KEN1cnJlbmN5Q29udGV4dCk7XHJcbiAgY29uc3Qgc3ltYm9sID0gY3VyckNvbnRleHQuc3RhdGUuc3ltYm9sO1xyXG4gIGNvbnN0IGNhcnRMaXN0ID0gY29udGV4dC5zdGF0ZTtcclxuICBjb25zdCB0b3RhbCA9IGNvbnRleHQuY2FydFRvdGFsO1xyXG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gY29udGV4dC5yZW1vdmVGcm9tQ2FydDtcclxuICBjb25zdCBbb3BlblNpZGUsIHNldE9wZW5TaWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAge1xyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib25ob3Zlci1kaXYgbW9iaWxlLWNhcnRcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlblNpZGUodHJ1ZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXF0eS1jbHNcIj57Y2FydExpc3QubGVuZ3RofTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBocmVmPXtudWxsfT5cclxuICAgICAgICAgICAgPE1lZGlhXHJcbiAgICAgICAgICAgICAgYWx0PVwiY2FydFwiXHJcbiAgICAgICAgICAgICAgc3JjPXtpY29ufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBibHVyLXVwIGxhenlsb2FkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctY2FydFwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cImNhcnRfc2lkZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgYWRkX3RvX2NhcnQgJHtsYXlvdXR9ICR7b3BlblNpZGUgPyBcIm9wZW4tc2lkZVwiIDogXCJcIn0gYH1cclxuICAgICAgPlxyXG4gICAgICAgIDxhIGhyZWY9e251bGx9IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWlubmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfdG9wXCI+XHJcbiAgICAgICAgICAgIDxoMz5teSBjYXJ0PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1jYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0T3BlblNpZGUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtudWxsfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF9tZWRpYVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FydF9wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAge2NhcnRMaXN0Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIGNhcnRMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17YGNhcnQtcG9wdXAtJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2l0ZW0uaW1hZ2VzWzBdLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e251bGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57aXRlbS50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnF0eX0geCB7c3ltYm9sfSB7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVGcm9tQ2FydChpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJ0X3RvdGFsXCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgc3VidG90YWwgOiA8c3Bhbj4ke3RvdGFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZS9hY2NvdW50L2NhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNvbGlkIGJ0bi14cyB2aWV3LWNhcnRcIj52aWV3IGNhcnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlL2FjY291bnQvY2hlY2tvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNvbGlkIGJ0bi14cyBjaGVja291dFwiPmNoZWNrb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbXBvbmVudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENhcnRIZWFkZXIgZnJvbSBcIi4uL2hlYWRlcnMvY29tbW9uL2NhcnQtaGVhZGVyXCI7XHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tIFwiLi4vLi4vaGVscGVycy9jYXJ0XCI7XHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0XCI7XHJcblxyXG5jb25zdCBDYXJ0Q29udGFpbmVyID0gKHsgaWNvbiB9KSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gIGNvbnN0IGN1cnJDb250ZXh0ID0gdXNlQ29udGV4dChDdXJyZW5jeUNvbnRleHQpO1xyXG4gIGNvbnN0IHN5bWJvbCA9IGN1cnJDb250ZXh0LnN0YXRlLnN5bWJvbDtcclxuICBjb25zdCBjYXJ0TGlzdCA9IGNvbnRleHQuc3RhdGU7XHJcbiAgY29uc3QgdG90YWwgPSBjb250ZXh0LmNhcnRUb3RhbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm9uaG92ZXItZGl2IG1vYmlsZS1jYXJ0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXF0eS1jbHNcIj57Y2FydExpc3QubGVuZ3RofTwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcGFnZS9hY2NvdW50L2NhcnRgfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxNZWRpYSBzcmM9e2ljb259IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNob3BwaW5nLWNhcnRcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNob3ctZGl2IHNob3BwaW5nLWNhcnRcIj5cclxuICAgICAgICAgIHtjYXJ0TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJ0SGVhZGVyIGtleT17aW5kZXh9IGl0ZW09e2l0ZW19IHRvdGFsPXt0b3RhbH0gc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIHtjYXJ0TGlzdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRvdGFsIDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zIHZpZXctY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BhZ2UvYWNjb3VudC9jYXJ0YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+dmlldyBjYXJ0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGFnZS9hY2NvdW50L2NoZWNrb3V0YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2hlY2tvdXRcIj5jaGVja291dDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGg1PllvdXIgY2FydCBpcyBjdXJyZW50bHkgZW1wdHkuPC9oNT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9saT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBGb3JtLFxyXG4gIEZvcm1Hcm91cCxcclxuICBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgQ29sbGFwc2UsXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IExvZ29JbWFnZSBmcm9tIFwiLi4vLi4vaGVhZGVycy9jb21tb24vbG9nb1wiO1xyXG5pbXBvcnQgQ29weVJpZ2h0IGZyb20gXCIuL2NvcHlyaWdodFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG5jb25zdCBNYXN0ZXJGb290ZXIgPSAoe1xyXG4gIGNvbnRhaW5lckZsdWlkLFxyXG4gIGxvZ29OYW1lLFxyXG4gIGxheW91dENsYXNzLFxyXG4gIGZvb3RlckNsYXNzLFxyXG4gIGZvb3RlckxheU91dCxcclxuICBmb290ZXJTZWN0aW9uLFxyXG4gIGJlbG93U2VjdGlvbixcclxuICBiZWxvd0NvbnRhaW5lckZsdWlkLFxyXG4gIGNvcHlSaWdodEZsdWlkLFxyXG4gIG5ld0xhdHRlcixcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb2xsYXBzZSwgc2V0Q29sbGFwc2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc1MDtcclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNoYW5nZUNvbGxhcHNlID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NTApIHtcclxuICAgICAgICBzZXRDb2xsYXBzZSgwKTtcclxuICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgICB9IGVsc2Ugc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGFuZ2VDb2xsYXBzZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUNvbGxhcHNlKVxyXG4gICAgfVxyXG5cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtmb290ZXJDbGFzc30+XHJcbiAgICAgICAge25ld0xhdHRlciA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb290ZXJMYXlPdXR9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXtjb250YWluZXJGbHVpZCA/IGNvbnRhaW5lckZsdWlkIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtmb290ZXJTZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJzY3JpYmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57dCgnU1VCU0NSSUJFIFRPIE9VUiBORVdTTEVUVEVSIScpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0KCdOZXZlciBNaXNzIEFueXRoaW5nIEZyb20gU3dpc3MgTmFpbHMgRmFjdG9yeSBCeSBTaWduaW5nIFVwIFRvIE91ciBOZXdzbGV0dGVyLicpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBzdWJzY3JpYmUtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJteC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUZvcm1Db250cm9sSW5wdXQxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcIkVudGVyIHlvdXIgZW1haWxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc29saWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3N1YnNjcmliZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgXCJcIlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YmVsb3dTZWN0aW9ufT5cclxuICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ9e2JlbG93Q29udGFpbmVyRmx1aWQgPyBiZWxvd0NvbnRhaW5lckZsdWlkIDogXCJcIn0+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZm9vdGVyLXRoZW1lIHBhcnRpdGlvbi1mXCI+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz1cIjRcIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9vdGVyLXRpdGxlICR7aXNPcGVuICYmIGNvbGxhcHNlID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0gZm9vdGVyLW1vYmlsZS10aXRsZWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldENvbGxhcHNlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnYWJvdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhY2NvcmRpbmctbWVudVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlXHJcbiAgICAgICAgICAgICAgICAgIGlzT3Blbj17d2lkdGggPyAoY29sbGFwc2UgPT09IDEgPyBpc09wZW4gOiBmYWxzZSkgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250YW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvZ29JbWFnZSBsb2dvPXtsb2dvTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dCgnTkFJTFMgRkFDVE9SWSBpcyBvbmUgb2YgdGhlIHRvcCBzdXBwbGllcnMgdG8gdGhlIFN3aXNzIG5haWwgc2Fsb25zLiBCdXQgb3VyIGhpZ2gtcXVhbGl0eSBwcm9kdWN0cyBhcmUgYWxzbyB0aGUgcGVyZmVjdCBjaG9pY2UgZm9yIHByaXZhdGUgdXNlLiBBIGh1Z2Ugc2VsZWN0aW9uIG9mIG5haWwgcG9saXNoZXMsIG5haWwgYXJ0IHByb2R1Y3RzLCBVViBhbmQgTEVEIGxhbXBzIGFuZCBtYW55IG90aGVyIGFjY2Vzc29yaWVzIGZvciBzdWNjZXNzZnVsIG5haWwgbW9kZWxpbmcgYXdhaXQgeW91IGluIG91ciBOYWlscyBPbmxpbmUgU2hvcC4nKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL05haWxzLUZhY3RvcnljaC0xMDMxMTk2MjIwMzU3ODNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9OYWlscytGYWN0b3J5L0A0Ny4zMjQ2Njc0LDguMjA4ODYxNywxNXovZGF0YT0hNG01ITNtNCExczB4MDoweDZhMjIzZWQxZGQ5NWU2OWYhOG0yITNkNDcuMzI0NjY3NCE0ZDguMjA4ODYxNz9zYT1YJnZlZD0yYWhVS0V3amczOVRBd0k3c0FoVnlReFVJSGI2dUE4a1FfQkl3RFhvRUNCWVFDQSZzaG9ydHVybD0xXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1nb29nbGUtcGx1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL25haWxzZmFjdG9yeV9zY2h3ZWl6Lz9obD1lblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtaW5zdGFncmFtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwib2Zmc2V0LXhsLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb290ZXItdGl0bGUgJHtpc09wZW4gJiYgY29sbGFwc2UgPT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aDRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbGxhcHNlKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Ugc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnY2F0ZWdvcmllcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWNjb3JkaW5nLW1lbnVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17d2lkdGggPyAoY29sbGFwc2UgPT09IDIgPyBpc09wZW4gOiBmYWxzZSkgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wL2xlZnRfc2lkZWJhcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3QoJ1N0YXJ0ZXIgc2V0cycpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Nob3AvbGVmdF9zaWRlYmFyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4ge3QoJ0luc3RydW1lbnRzICYgYWNjZXNzb3JpZXMnKX0gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc2hvcC9sZWZ0X3NpZGViYXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0KCdNaWxsaW5nIGN1dHRlcnMgJiBhY2Nlc3NvcmllcycpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Nob3AvbGVmdF9zaWRlYmFyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4ge3QoJ0NvdXBvbnMnKX0gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvb3Rlci10aXRsZSAke2lzT3BlbiAmJiBjb2xsYXBzZSA9PSAzID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0gYH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29sbGFwc2UoMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdpbmZvcm1hdGlvbicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWNjb3JkaW5nLW1lbnVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17d2lkdGggPyAoY29sbGFwc2UgPT09IDMgPyBpc09wZW4gOiBmYWxzZSkgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57dCgnTG9jYXRpb25zJyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57dCgnRkFRJyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57dCgnQjJCIHJlcXVlc3QnKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnt0KCdjb250YWN0Jyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9vdGVyLXRpdGxlICR7aXNPcGVuICYmIGNvbGxhcHNlID09IDQgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb2xsYXBzZSg0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHNldElzT3Blbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2NvbnRhY3QnKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY29yZGluZy1tZW51XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sbGFwc2VcclxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e3dpZHRoID8gKGNvbGxhcHNlID09PSA0ID8gaXNPcGVuIDogZmFsc2UpIDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250YWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXJcIj48L2k+e3QoJ1NlZW5nZW4gbG9jYXRpb24gR3VhcmRpYW4gV2F5IDYgNTcwNyBTZWVuZ2VuJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiPjwvaT57dCgnUGhvbmUgKyA0MSA2MiA3NzEgMDAgMjEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlLW9cIj48L2k+e3QoJ0VtYWlsIFVzJyl9OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmNvbnRhY3RAbmFpbHMtZmFjdG9yeS5jaDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxDb3B5UmlnaHRcclxuICAgICAgICAgIGxheW91dD17bGF5b3V0Q2xhc3N9XHJcbiAgICAgICAgICBmbHVpZD17Y29weVJpZ2h0Rmx1aWQgPyBjb3B5UmlnaHRGbHVpZCA6IFwiXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXJGb290ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyICxSb3cgLENvbCAsTWVkaWF9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgdmlzYSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3Zpc2EucG5nJztcclxuaW1wb3J0IG1hc3RlcmNhcmQgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9tYXN0ZXJjYXJkLnBuZyc7XHJcbmltcG9ydCBwYXlwYWwgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9wYXlwYWwucG5nJztcclxuaW1wb3J0IGFtZXJpY2FuZXhwcmVzcyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL2FtZXJpY2FuLWV4cHJlc3MucG5nJztcclxuaW1wb3J0IGRpc2NvdmVyIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vZGlzY292ZXIucG5nJztcclxuXHJcbmNvbnN0IENvcHlSaWdodCA9ICh7bGF5b3V0LCBmbHVpZH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN1Yi1mb290ZXIgJHtsYXlvdXR9YH0+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXtmbHVpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4bD1cIjZcIiBtZD1cIjZcIiBzbT1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJmYSBmYS1jb3B5cmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDIwMjEgc3dpc3MgbmFpbHMgZmFjdG9yeSBieSBKb8OjbyBWaXRvciBMaW1hPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiNlwiIG1kPVwiNlwiIHNtPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jYXJkLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48TWVkaWEgc3JjPXt2aXNhfSBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48TWVkaWEgc3JjPXttYXN0ZXJjYXJkfSBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48TWVkaWEgc3JjPXtwYXlwYWx9IGFsdD1cIlwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxNZWRpYSBzcmM9e2FtZXJpY2FuZXhwcmVzc30gYWx0PVwiXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PE1lZGlhIHNyYz17ZGlzY292ZXJ9IGFsdD1cIlwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29weVJpZ2h0OyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9jYXJ0XCI7XHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IENhcnRIZWFkZXIgPSAoeyBpdGVtLCBzeW1ib2wgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2R1Y3QvXCIgKyBpdGVtLmlkfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPE1lZGlhIGFsdD1cIlwiIGNsYXNzTmFtZT1cIm1yLTNcIiBzcmM9e2Ake2l0ZW0uaW1hZ2VzWzBdLnNyY31gfSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvcHJvZHVjdC9cIiArIGl0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGg0PntpdGVtLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnF0eX0geCB7c3ltYm9sfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHsoaXRlbS5wcmljZSAtIChpdGVtLnByaWNlICogaXRlbS5kaXNjb3VudCkgLyAxMDApLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1jaXJjbGVcIj5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCJcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29udGV4dC5yZW1vdmVGcm9tQ2FydChpdGVtKX1cclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0SGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGxhbmd1YWdlIGZyb20gXCIuLi8uLi9jb25zdGFudC9sYW5nQ29uZmlnLmpzb25cIjtcclxuaW1wb3J0IGkxOG5leHQgZnJvbSBcIi4uLy4uL2NvbnN0YW50L2kxOG5cIjtcclxuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0XCI7XHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9hcG9sbG8vYXBvbGxvXCI7XHJcblxyXG5jb25zdCBHRVRfQ1VSUkVOQ1kgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgZ2V0Q3VycmVuY3kge1xyXG4gICAgICBjdXJyZW5jeVxyXG4gICAgICBuYW1lXHJcbiAgICAgIHN5bWJvbFxyXG4gICAgICB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEN1cnJlbmN5ID0gKHsgaWNvbiB9KSA9PiB7XHJcbiAgdmFyIHsgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0NVUlJFTkNZKTtcclxuICBjb25zdCBDb250ZXh0ID0gdXNlQ29udGV4dChDdXJyZW5jeUNvbnRleHQpO1xyXG4gIGNvbnN0IHNlbGVjdGVkQ3VycmVuY3kgPSBDb250ZXh0LmN1cnJlbmN5Q29udGV4dC5zZWxlY3RlZEN1cnJlbmN5O1xyXG5cclxuICBjb25zdCBjaGFuZ2VMYW5ndWFnZSA9IChsbmcpID0+IHtcclxuICAgIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2UobG5nKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm9uaG92ZXItZGl2IG1vYmlsZS1zZXR0aW5nXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE1lZGlhIHNyYz17aWNvbn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1nbG9iZS1ldXJvcGVcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctZGl2IHNldHRpbmdcIj5cclxuICAgICAgICA8aDY+bGFuZ3VhZ2U8L2g2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtsYW5ndWFnZS5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e251bGx9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZUxhbmd1YWdlKGl0ZW0udmFsKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubGFuZ31cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oQ3VycmVuY3kpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBMb2dvSW1hZ2UgPSAoeyBsb2dvIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnLyd9ID5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgL2Fzc2V0cy9pbWFnZXMvaWNvbi8ke2xvZ28/bG9nbzonbG9nby5wbmcnfWB9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvSW1hZ2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBNRU5VSVRFTVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnQvbWVudVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIGNvbnN0IFtuYXZDbG9zZSwgc2V0TmF2Q2xvc2VdID0gdXNlU3RhdGUoeyByaWdodDogXCIwcHhcIiB9KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc1MCkge1xyXG4gICAgICBzZXROYXZDbG9zZSh7IHJpZ2h0OiBcIi00MTBweFwiIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE5OSkge1xyXG4gICAgICBzZXROYXZDbG9zZSh7IHJpZ2h0OiBcIi0zMDBweFwiIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb3Blbk5hdiA9ICgpID0+IHtcclxuICAgIHNldE5hdkNsb3NlKHsgcmlnaHQ6IFwiMHB4XCIgfSk7XHJcbiAgICBpZiAocm91dGVyLmFzUGF0aCA9PSBcIi9sYXlvdXRzL0d5bVwiKVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcEhlYWRlclwiKS5jbGFzc0xpc3QuYWRkKFwiemluZGV4LWNsYXNzXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlTmF2ID0gKCkgPT4ge1xyXG4gICAgc2V0TmF2Q2xvc2UoeyByaWdodDogXCItNDEwcHhcIiB9KTtcclxuICAgIGlmIChyb3V0ZXIuYXNQYXRoID09IFwiL2xheW91dHMvR3ltXCIpXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wSGVhZGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ6aW5kZXgtY2xhc3NcIik7XHJcbiAgfTtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVnYVN1Ym1lbnUgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ViLWFycm93XCIpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgIFwib3BlbnN1Ym1lZ2FtZW51XCJcclxuICAgICAgKVxyXG4gICAgKVxyXG4gICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICBcIm9wZW5zdWJtZWdhbWVudVwiXHJcbiAgICAgICk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWNvbnRlbnRcIikuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbnN1Ym1lZ2FtZW51XCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgXCJvcGVuc3VibWVnYW1lbnVcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFttYWlubWVudSwgc2V0TWFpbk1lbnVdID0gdXNlU3RhdGUoTUVOVUlURU1TKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRVcmwgPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIE1FTlVJVEVNUy5maWx0ZXIoKGl0ZW1zKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtcy5wYXRoID09PSBjdXJyZW50VXJsKSBzZXROYXZBY3RpdmUoaXRlbXMpO1xyXG4gICAgICBpZiAoIWl0ZW1zLmNoaWxkcmVuKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGl0ZW1zLmNoaWxkcmVuLmZpbHRlcigoc3ViSXRlbXMpID0+IHtcclxuICAgICAgICBpZiAoc3ViSXRlbXMucGF0aCA9PT0gY3VycmVudFVybCkgc2V0TmF2QWN0aXZlKHN1Ykl0ZW1zKTtcclxuICAgICAgICBpZiAoIXN1Ykl0ZW1zLmNoaWxkcmVuKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc3ViSXRlbXMuY2hpbGRyZW4uZmlsdGVyKChzdWJTdWJJdGVtcykgPT4ge1xyXG4gICAgICAgICAgaWYgKHN1YlN1Ykl0ZW1zLnBhdGggPT09IGN1cnJlbnRVcmwpIHNldE5hdkFjdGl2ZShzdWJTdWJJdGVtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZXROYXZBY3RpdmUgPSAoaXRlbSkgPT4ge1xyXG4gICAgTUVOVUlURU1TLmZpbHRlcigobWVudUl0ZW0pID0+IHtcclxuICAgICAgaWYgKG1lbnVJdGVtICE9IGl0ZW0pIG1lbnVJdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBpZiAobWVudUl0ZW0uY2hpbGRyZW4gJiYgbWVudUl0ZW0uY2hpbGRyZW4uaW5jbHVkZXMoaXRlbSkpXHJcbiAgICAgICAgbWVudUl0ZW0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgaWYgKG1lbnVJdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgbWVudUl0ZW0uY2hpbGRyZW4uZmlsdGVyKChzdWJtZW51SXRlbXMpID0+IHtcclxuICAgICAgICAgIGlmIChzdWJtZW51SXRlbXMuY2hpbGRyZW4gJiYgc3VibWVudUl0ZW1zLmNoaWxkcmVuLmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHN1Ym1lbnVJdGVtcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0TWFpbk1lbnUoeyBtYWlubWVudTogTUVOVUlURU1TIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIENsaWNrIFRvZ2dsZSBtZW51XHJcbiAgY29uc3QgdG9nZ2xldE5hdkFjdGl2ZSA9IChpdGVtKSA9PiB7XHJcbiAgICBpZiAoIWl0ZW0uYWN0aXZlKSB7XHJcbiAgICAgIE1FTlVJVEVNUy5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgICAgaWYgKE1FTlVJVEVNUy5pbmNsdWRlcyhpdGVtKSkgYS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIWEuY2hpbGRyZW4pIHJldHVybiBmYWxzZTtcclxuICAgICAgICBhLmNoaWxkcmVuLmZvckVhY2goKGIpID0+IHtcclxuICAgICAgICAgIGlmIChhLmNoaWxkcmVuLmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWIuY2hpbGRyZW4pIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIGIuY2hpbGRyZW4uZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYi5jaGlsZHJlbi5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgICAgICAgIGMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGl0ZW0uYWN0aXZlID0gIWl0ZW0uYWN0aXZlO1xyXG4gICAgc2V0TWFpbk1lbnUoeyBtYWlubWVudTogTUVOVUlURU1TIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5NYmxOYXYgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9cclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ViLWFycm93XCIpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcgIT09IG51bGwgJiYgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuc3VibWVudVwiKSlcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbnN1Ym1lbnVcIik7XHJcbiAgICBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtc3VibWVudVwiKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3VibWVudVwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubWVnYS1tZW51LWNvbnRhaW5lclwiKVxyXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbnN1Ym1lbnVcIik7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcIm9wZW5zdWJtZW51XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmF2YmFyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cIm1haW5uYXZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLW5hdlwiIG9uQ2xpY2s9e29wZW5OYXYuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnMgc2lkZWJhci1iYXJcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbWVudVwiIHN0eWxlPXtuYXZDbG9zZX0+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiYWNrLWJ0blwiIG9uQ2xpY2s9e2Nsb3NlTmF2LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWJhY2sgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QmFjayBuYXZiYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodCBwbC0yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICB7TUVOVUlURU1TLm1hcCgobWVudUl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7bWVudUl0ZW0ubWVnYU1lbnUgPyBcIm1lZ2EtbWVudVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHttZW51SXRlbS5wYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17KGUpID0+IG9wZW5NYmxOYXYoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge3QobWVudUl0ZW0udGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtLmFycm93ID09IGZhbHNlID8gJycgOiA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB7bWVudUl0ZW0uY2hpbGRyZW4gJiYgIW1lbnVJdGVtLm1lZ2FNZW51ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtc3VibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtLmNoaWxkcmVuLm1hcCgoY2hpbGRyZW5JdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2hpbGRyZW5JdGVtLmNoaWxkcmVuID8gXCJzdWItbWVudSBcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuSXRlbS50eXBlID09PSBcInN1YlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xldE5hdkFjdGl2ZShjaGlsZHJlbkl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoY2hpbGRyZW5JdGVtLnRpdGxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5JdGVtLnRhZyA9PT0gXCJuZXdcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy10YWdcIj5uZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0IHBsLTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5JdGVtLnR5cGUgPT09IFwibGlua1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtjaGlsZHJlbkl0ZW0ucGF0aH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KGNoaWxkcmVuSXRlbS50aXRsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5JdGVtLnRhZyA9PT0gXCJuZXdcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXRhZ1wiPm5ldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuSXRlbS5jaGlsZHJlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LXN1Yi1jaGlsZG1lbnUgJHtjaGlsZHJlbkl0ZW0uYWN0aXZlID8gXCJtZW51LW9wZW4gXCIgOiBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbkl0ZW0uY2hpbGRyZW4ubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuU3ViSXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuU3ViSXRlbS50eXBlID09PSBcImxpbmtcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2NoaWxkcmVuU3ViSXRlbS5wYXRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic3ViLW1lbnUtdGl0bGVcIj57dChjaGlsZHJlblN1Ykl0ZW0udGl0bGUpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW0uYXJyb3cgPT0gZmFsc2UgPyAnJyA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVnYS1tZW51LWNvbnRhaW5lciAgJHttZW51SXRlbS5tZWdhTWVudSA/IFwiXCIgOiBcIm9wZW5zdWJtZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtLm1lZ2FNZW51ID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW0uY2hpbGRyZW4ubWFwKChtZWdhTWVudUl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake21lbnVJdGVtLm1lZ2FNZW51VHlwZSA9PSBcInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY29sIG1lZ2EtYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1lbnVJdGVtLm1lZ2FNZW51VHlwZSA9PSBcIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY29sLWxnLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtZW51SXRlbS5tZWdhTWVudVR5cGUgPT0gXCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTWVnYVN1Ym1lbnUoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dChtZWdhTWVudUl0ZW0udGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW0udGl0bGUgPT09IFwiRWxlbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbWVnYU1lbnVJdGVtLmNoaWxkcmVuLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdWJNZWdhTWVudUl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yk1lZ2FNZW51SXRlbS5wYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpY29uLSR7c3ViTWVnYU1lbnVJdGVtLmljb259YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Qoc3ViTWVnYU1lbnVJdGVtLnRpdGxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1lZ2FNZW51SXRlbS5jaGlsZHJlbi5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3ViTWVnYU1lbnVJdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJNZWdhTWVudUl0ZW0ucGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KHN1Yk1lZ2FNZW51SXRlbS50aXRsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29sLFxyXG4gIENvbnRhaW5lcixcclxuICBGb3JtLFxyXG4gIEZvcm1Hcm91cCxcclxuICBJbnB1dCxcclxuICBSb3csXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IGNsb3NlU2VhcmNoID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59O1xyXG5jb25zdCBTZWFyY2hPdmVybGF5ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwic2VhcmNoLW92ZXJsYXlcIiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheVwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlYnRuXCIgb25DbGljaz17Y2xvc2VTZWFyY2h9IHRpdGxlPVwiQ2xvc2UgT3ZlcmxheVwiPlxyXG4gICAgICAgICAgw5dcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCB4bD1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhIFByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hPdmVybGF5O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIE1lZGlhIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGZhc2hpb24gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21lZ2EtbWVudS9mYXNoaW9uLmpwZ1wiO1xyXG5cclxuY29uc3QgU2lkZUJhciA9ICgpID0+IHtcclxuICBjb25zdCBjbG9zZU5hdiA9ICgpID0+IHtcclxuICAgIHZhciBjbG9zZW15c2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKTtcclxuICAgIGlmIChjbG9zZW15c2xpZGUpIGNsb3NlbXlzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zaWRlXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1lbnUgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ViLWFycm93XCIpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuc3ViMVwiKSlcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbnN1YjFcIik7XHJcbiAgICBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcGVuc3ViMVwiKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3ViMVwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcIm9wZW5zdWIxXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1YlR3b01lbnUgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ViLWFycm93XCIpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlbnN1YjJcIikpXHJcbiAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWIyXCIpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3BlbnN1YjJcIikuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbnN1YjJcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJvcGVuc3ViMlwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1YlRocmVlTWVudSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWItYXJyb3dcIikpIHJldHVybjtcclxuXHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuc3ViM1wiKSlcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbnN1YjNcIik7XHJcbiAgICBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcGVuc3ViM1wiKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3ViM1wiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcIm9wZW5zdWIzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1YkZvdXJNZW51ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN1Yi1hcnJvd1wiKSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5zdWI0XCIpKVxyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc3ViNFwiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wZW5zdWI0XCIpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5zdWI0XCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwib3BlbnN1YjRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVnYVN1Ym1lbnUgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ViLWFycm93XCIpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlbnNpZGVzdWJtZW51XCIpKVxyXG4gICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuc2lkZXN1Ym1lbnVcIik7XHJcbiAgICBlbHNlIHtcclxuICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwib3BlbnNpZGVzdWJtZW51XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgaWQ9XCJteVNpZGVuYXZcIiBjbGFzc05hbWU9XCJzaWRlbmF2XCI+XHJcbiAgICAgICAgPGEgaHJlZj17bnVsbH0gY2xhc3NOYW1lPVwic2lkZWJhci1vdmVybGF5XCIgb25DbGljaz17Y2xvc2VOYXZ9PjwvYT5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPGEgaHJlZj17bnVsbH0gb25DbGljaz17Y2xvc2VOYXZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmFjayB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IHByLTJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEJhY2tcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8dWwgaWQ9XCJzdWItbWVudVwiIGNsYXNzTmFtZT1cInNpZGViYXItbWVudVwiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTWVnYVN1Ym1lbnUoZSl9PlxyXG4gICAgICAgICAgICAgICAgY2xvdGhpbmdcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1hcnJvd1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2EtbWVudSBjbG90aGluZy1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3cgbT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PndvbWVuJ3MgZmFzaGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmRyZXNzZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNraXJ0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+d2VzdGFybiB3ZWFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5ldGhpYyB3ZWFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zcG9ydCB3ZWFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5tZW4ncyBmYXNoaW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+c3BvcnRzIHdlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPndlc3Rlcm4gd2VhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+ZXRoaWMgd2VhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4bD1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5hY2Nlc3NvcmllczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmZhc2hpb24gamV3ZWxsZXJ5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5jYXBzIGFuZCBoYXRzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5wcmVjaW91cyBqZXdlbGxlcnk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPm5lY2tsYWNlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+ZWFycmluZ3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPndyaXN0IHdlYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnRpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmN1ZmZsaW5rczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+cG9ja2V0cyBzcXVhcmVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtZWdhLW1lbnUtYmFubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYSBzcmM9e2Zhc2hpb259IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3VibWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICBiYWdzXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zaG9wcGVyIGJhZ3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmxhcHRvcCBiYWdzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5jbHV0Y2hlczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGhhbmRsZVN1YlR3b01lbnUoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHB1cnNlc1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1hcnJvd1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5wdXJzZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPndhbGxldHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmxlYXRoZXJzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zYXRjaGVsczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3VibWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICBmb290d2VhclxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+c3BvcnQgc2hvZXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmZvcm1hbCBzaG9lczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Y2FzdWFsIHNob2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj53YXRjaGVzPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3VibWVudShlKX0+XHJcbiAgICAgICAgICAgICAgICBBY2Nlc3Nvcmllc1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+ZmFzaGlvbiBqZXdlbGxlcnk8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmNhcHMgYW5kIGhhdHM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnByZWNpb3VzIGpld2VsbGVyeTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGhhbmRsZVN1YlR3b01lbnUoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vcmUuLlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1hcnJvd1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5uZWNrbGFjZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmVhcnJpbmdzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj53cmlzdCB3ZWFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU3ViVGhyZWVNZW51KGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3JpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj50aWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5jdWZmbGlua3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnBvY2tldHMgc3F1YXJlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+aGVsbWV0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+c2NhcnZlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGhhbmRsZVN1YkZvdXJNZW51KGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmUuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi1hcnJvd1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmFjY2Vzc29yeSBnaWZ0IHNldHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnRyYXZlbCBhY2Nlc3NvcmllczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+cGhvbmUgY2FzZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5iZWx0cyAmIG1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPndlYXJhYmxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPmhvdXNlIG9mIGRlc2lnbjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGhhbmRsZVN1Ym1lbnUoZSl9PlxyXG4gICAgICAgICAgICAgICAgYmVhdXR5ICYgcGVyc29uYWwgY2FyZVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLWFycm93XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+bWFrZXVwPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5za2luY2FyZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+cHJlbWl1bSBiZWF0eTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGhhbmRsZVN1YlR3b01lbnUoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vcmVcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItYXJyb3dcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+ZnJhZ3JhbmNlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+bHV4dXJ5IGJlYXV0eTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+aGFpciBjYXJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj50b29scyAmIGJydXNoZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+aG9tZSAmIGRlY29yPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5raXRjaGVuPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIE1lZGlhIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9iYXNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCBsYW5ndWFnZSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9sYW5ndWFnZV90cmFuc2xhdG9yLnBuZ1wiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcIi4vY3VycmVuY3lcIjtcclxuaW1wb3J0IENhcnRDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbnRhaW5lcnMvQ2FydENvbnRhaW5lclwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9DYXJ0XCI7XHJcbmltcG9ydCBjYXJ0IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL2NhcnQucG5nXCI7XHJcbmltcG9ydCBsYW5nQ29uZmlnIGZyb20gXCIuLi8uLi9jb25zdGFudC9sYW5nQ29uZmlnLmpzb25cIjtcclxuaW1wb3J0IGkxOG5leHQgZnJvbSBcIi4uLy4uL2NvbnN0YW50L2kxOG5cIjtcclxuXHJcbmNvbnN0IFRvcEJhckRhcmsgPSAoeyB0b3BDbGFzcywgZmx1aWQsIGRpcmVjdGlvbiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG5cclxuICBjb25zdCBmaXJlYmFzZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9wYWdlL2FjY291bnQvbG9naW4tYXV0aFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZUxhbmd1YWdlID0gKGxuZykgPT4ge1xyXG4gICAgaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZShsbmcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17dG9wQ2xhc3N9PlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPXtmbHVpZH0+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+e3QoJ0JlYXV0eSBpcyBpbiB5b3VyIGhhbmRzJyl9PC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBsZz1cIjZcIiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoZWFkZXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW9iaWxlLXdpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BhZ2UvYWNjb3VudC93aXNobGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3QoJ3dpc2hsaXN0Jyl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJvbmhvdmVyLWRyb3Bkb3duIG1vYmlsZS1hY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7dCgnTXkgQWNjb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9uaG92ZXItc2hvdy1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGFnZS9hY2NvdW50L2xvZ2luYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT57dCgnTG9naW4nKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wYWdlL2FjY291bnQvcmVnaXN0ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPnt0KCdSZWdpc3RlcicpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBmaXJlYmFzZUxvZ291dCgpfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57dCgnTG9nb3V0Jyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJvbmhvdmVyLWRyb3Bkb3duIG1vYmlsZS1hY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1sYW5ndWFnZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gIHt0KCdsYW5ndWFnZScpfVxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9uaG92ZXItc2hvdy1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAge2xhbmdDb25maWcubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTGFuZ3VhZ2UoaXRlbS52YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJEYXJrO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL2NvbW1vbi9uYXZiYXJcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vY29tbW9uL3NpZGViYXJcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQ2FydFwiO1xyXG5pbXBvcnQgQ2FydENvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9DYXJ0Q29udGFpbmVyXCI7XHJcbmltcG9ydCBUb3BCYXJEYXJrIGZyb20gXCIuL2NvbW1vbi90b3BiYXItZGFya1wiO1xyXG5pbXBvcnQgeyBNZWRpYSwgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBMb2dvSW1hZ2UgZnJvbSBcIi4vY29tbW9uL2xvZ29cIjtcclxuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9zZWFyY2gucG5nXCI7XHJcbmltcG9ydCBsYW5ndWFnZSBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9sYW5ndWFnZV90cmFuc2xhdG9yLnBuZ1wiO1xyXG5pbXBvcnQgY2FydCBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9jYXJ0LnBuZ1wiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcIi4vY29tbW9uL2N1cnJlbmN5XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2VhcmNoT3ZlcmxheSBmcm9tIFwiLi9jb21tb24vc2VhcmNoLW92ZXJsYXlcIjtcclxuXHJcbmNvbnN0IEhlYWRlck9uZSA9ICh7XHJcbiAgbG9nb05hbWUsXHJcbiAgaGVhZGVyQ2xhc3MsXHJcbiAgdG9wQ2xhc3MsXHJcbiAgbm9Ub3BCYXIsXHJcbiAgZGlyZWN0aW9uLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09XHJcblx0XHQgUHJlIGxvYWRlclxyXG5cdFx0ID09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9hZGVyLXdyYXBwZXJcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xyXG4gICAgfSwgMjAwMCk7XHJcblxyXG4gICAgaWYgKHJvdXRlci5hc1BhdGggIT09IFwiL2xheW91dHMvQ2hyaXN0bWFzXCIpXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBsZXQgbnVtYmVyID1cclxuICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IHx8XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHxcclxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHxcclxuICAgICAgMDtcclxuICAgIGlmIChudW1iZXIgPj0gMzAwKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDU3NilcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0aWNreVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XHJcbiAgICAgIGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGlja3lcIikuY2xhc3NMaXN0LmFkZChcImZpeGVkXCIpO1xyXG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RpY2t5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZFwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTmF2ID0gKCkgPT4ge1xyXG4gICAgdmFyIG9wZW5teXNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVNpZGVuYXZcIik7XHJcbiAgICBpZiAob3Blbm15c2xpZGUpIHtcclxuICAgICAgb3Blbm15c2xpZGUuY2xhc3NMaXN0LmFkZChcIm9wZW4tc2lkZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG9wZW5TZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGZldGNoKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIC8vIGRlYWwgd2l0aCBkYXRhIGZldGNoZWRcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aGVhZGVyIGlkPVwic3RpY2t5XCIgY2xhc3NOYW1lPXtgc3RpY2t5ICR7aGVhZGVyQ2xhc3N9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtZml4LW9wdGlvblwiPjwvZGl2PlxyXG4gICAgICAgIHsvKlRvcCBIZWFkZXIgQ29tcG9uZW50Ki99XHJcbiAgICAgICAge25vVG9wQmFyID8gXCJcIiA6IDxUb3BCYXJEYXJrIHRvcENsYXNzPXt0b3BDbGFzc30gLz59XHJcblxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtZW51LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ29JbWFnZSBsb2dvPXtsb2dvTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtcmlnaHQgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICB7LypUb3AgTmF2aWdhdGlvbiBCYXIgQ29tcG9uZW50Ki99XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm9uaG92ZXItZGl2IG1vYmlsZS1zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5IGljb249e2xhbmd1YWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGlyZWN0aW9uID09PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRDb250YWluZXIgbGF5b3V0PXtkaXJlY3Rpb259IGljb249e2NhcnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcnQgbGF5b3V0PXtkaXJlY3Rpb259IGljb249e2NhcnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8U2VhcmNoT3ZlcmxheSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlck9uZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyT25lIGZyb20gXCIuLi9oZWFkZXJzL2hlYWRlci1vbmVcIjtcclxuaW1wb3J0IEJyZWFkY3J1YnMgZnJvbSBcIi4uL2NvbW1vbi93aWRnZXRzL2JyZWFkY3J1YnNcIjtcclxuaW1wb3J0IEhlbG1ldCBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCBmYXZpY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLzEucG5nXCI7XHJcbmltcG9ydCBNYXN0ZXJGb290ZXIgZnJvbSBcIi4uL2Zvb3RlcnMvY29tbW9uL01hc3RlckZvb3RlclwiO1xyXG5cclxuY29uc3QgQ29tbW9uTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBwYXJlbnQsIHN1YlRpdGxlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlbG1ldD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj17ZmF2aWNvbiA/IGZhdmljb24gOiBcIlwifSAvPlxyXG4gICAgICA8L0hlbG1ldD5cclxuICAgICAgPEhlYWRlck9uZSB0b3BDbGFzcz1cInRvcC1oZWFkZXJcIiBsb2dvTmFtZT1cImxvZ28ucG5nXCIgLz5cclxuICAgICAgPEJyZWFkY3J1YnMgdGl0bGU9e3RpdGxlfSBwYXJlbnQ9e3BhcmVudH0gc3ViVGl0bGU9e3N1YlRpdGxlfSAvPlxyXG4gICAgICA8PntjaGlsZHJlbn08Lz5cclxuICAgICAgPE1hc3RlckZvb3RlclxyXG4gICAgICAgIGZvb3RlckNsYXNzPXtgZm9vdGVyLWxpZ2h0IGB9XHJcbiAgICAgICAgZm9vdGVyTGF5T3V0PXtcImxpZ2h0LWxheW91dCB1cHBlci1mb290ZXJcIn1cclxuICAgICAgICBmb290ZXJTZWN0aW9uPXtcInNtYWxsLXNlY3Rpb24gYm9yZGVyLXNlY3Rpb24gYm9yZGVyLXRvcC0wXCJ9XHJcbiAgICAgICAgYmVsb3dTZWN0aW9uPXtcInNlY3Rpb24tYi1zcGFjZSBsaWdodC1sYXlvdXRcIn1cclxuICAgICAgICBuZXdMYXR0ZXI9e3RydWV9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uTGF5b3V0O1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnQGZpcmViYXNlL2FwcCc7XHJcbnJlcXVpcmUoJ2ZpcmViYXNlL2F1dGgnKTtcclxuY29uc3QgY29uZmlncyA9IHJlcXVpcmUoXCIuL2luZGV4Lmpzb25cIilcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogY29uZmlncy5maXJlYmFzZS5hcGlLZXksXHJcbiAgICBhdXRoRG9tYWluOmNvbmZpZ3MuZmlyZWJhc2UuYXV0aERvbWFpbixcclxuICAgIGRhdGFiYXNlVVJMOiBjb25maWdzLmZpcmViYXNlLmRhdGFiYXNlVVJMLFxyXG4gICAgcHJvamVjdElkOiBjb25maWdzLmZpcmViYXNlLnByb2plY3RJZCxcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IGNvbmZpZ3MuZmlyZWJhc2Uuc3RvcmFnZUJ1Y2tldCxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBjb25maWdzLmZpcmViYXNlLm1lc3NhZ2luZ1NlbmRlcklkLFxyXG4gICAgYXBwSWQ6Y29uZmlncy5maXJlYmFzZS5hcHBJZFxyXG4gIH07XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnb29nbGVQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5leHBvcnQgY29uc3QgZmFjZWJvb2tQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEN1cnIsIHNlbGVjdGVkQ3VycmVuY3ldID0gdXNlU3RhdGUoe1xyXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXHJcbiAgICBzeW1ib2w6IFwiJFwiLFxyXG4gICAgdmFsdWU6IDEsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbmN5Q29udGV4dCA9IHtcclxuICAgIHNlbGVjdGVkQ3VycixcclxuICAgIHNlbGVjdGVkQ3VycmVuY3ksXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgc3RhdGU6IHNlbGVjdGVkQ3VycixcclxuICAgICAgICBjdXJyZW5jeUNvbnRleHQ6IGN1cnJlbmN5Q29udGV4dCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIENvbnRleHQgYXMgQ3VycmVuY3lDb250ZXh0LFxyXG4gIFByb3ZpZGVyIGFzIEN1cnJlbmN5Q29udGV4dFByb3ZpZGVyLFxyXG59IGZyb20gXCIuL0N1cnJlbmN5Q29udGV4dFwiO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XHJcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxubGV0IGFwb2xsb0NsaWVudCA9IG51bGw7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbmQgcHJvdmlkZXMgdGhlIGFwb2xsb0NvbnRleHRcclxuICogdG8gYSBuZXh0LmpzIFBhZ2VUcmVlLiBVc2UgaXQgYnkgd3JhcHBpbmdcclxuICogeW91ciBQYWdlQ29tcG9uZW50IHZpYSBIT0MgcGF0dGVybi5cclxuICogQHBhcmFtIHtGdW5jdGlvbnxDbGFzc30gUGFnZUNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZ11cclxuICogQHBhcmFtIHtCb29sZWFufSBbY29uZmlnLnNzcj10cnVlXVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBcG9sbG8oUGFnZUNvbXBvbmVudCwgeyBzc3IgPSB0cnVlIH0gPSB7fSkge1xyXG4gIGNvbnN0IFdpdGhBcG9sbG8gPSAoeyBhcG9sbG9DbGllbnQsIGFwb2xsb1N0YXRlLCAuLi5wYWdlUHJvcHMgfSkgPT4ge1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXBvbGxvQ2xpZW50IHx8IGluaXRBcG9sbG9DbGllbnQoYXBvbGxvU3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgICA8UGFnZUNvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvLyBTZXQgdGhlIGNvcnJlY3QgZGlzcGxheU5hbWUgaW4gZGV2ZWxvcG1lbnRcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgY29uc3QgZGlzcGxheU5hbWUgPVxyXG4gICAgICBQYWdlQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFBhZ2VDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcclxuXHJcbiAgICBpZiAoZGlzcGxheU5hbWUgPT09ICdBcHAnKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignVGhpcyB3aXRoQXBvbGxvIEhPQyBvbmx5IHdvcmtzIHdpdGggUGFnZUNvbXBvbmVudHMuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgV2l0aEFwb2xsby5kaXNwbGF5TmFtZSA9IGB3aXRoQXBvbGxvKCR7ZGlzcGxheU5hbWV9KWA7XHJcbiAgfVxyXG5cclxuICBpZiAoc3NyIHx8IFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICBXaXRoQXBvbGxvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgICAgIGNvbnN0IHsgQXBwVHJlZSB9ID0gY3R4O1xyXG5cclxuICAgICAgLy8gSW5pdGlhbGl6ZSBBcG9sbG9DbGllbnQsIGFkZCBpdCB0byB0aGUgY3R4IG9iamVjdCBzb1xyXG4gICAgICAvLyB3ZSBjYW4gdXNlIGl0IGluIGBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wYC5cclxuICAgICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gKGN0eC5hcG9sbG9DbGllbnQgPSBpbml0QXBvbGxvQ2xpZW50KHt9LCBjdHgucmVxICYmIGN0eC5yZXEuaGVhZGVycy5jb29raWUpKVxyXG5cclxuICAgICAgLy8gUnVuIHdyYXBwZWQgZ2V0SW5pdGlhbFByb3BzIG1ldGhvZHNcclxuICAgICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gICAgICBpZiAoUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBPbmx5IG9uIHRoZSBzZXJ2ZXI6XHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIFdoZW4gcmVkaXJlY3RpbmcsIHRoZSByZXNwb25zZSBpcyBmaW5pc2hlZC5cclxuICAgICAgICAvLyBObyBwb2ludCBpbiBjb250aW51aW5nIHRvIHJlbmRlclxyXG4gICAgICAgIGlmIChjdHgucmVzICYmIGN0eC5yZXMuZmluaXNoZWQpIHtcclxuICAgICAgICAgIHJldHVybiBwYWdlUHJvcHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPbmx5IGlmIHNzciBpcyBlbmFibGVkXHJcbiAgICAgICAgaWYgKHNzcikge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gUnVuIGFsbCBHcmFwaFFMIHF1ZXJpZXNcclxuICAgICAgICAgICAgY29uc3QgeyBnZXREYXRhRnJvbVRyZWUgfSA9IGF3YWl0IGltcG9ydCgnQGFwb2xsby9yZWFjdC1zc3InKTtcclxuICAgICAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKFxyXG4gICAgICAgICAgICAgIDxBcHBUcmVlXHJcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgLi4ucGFnZVByb3BzLFxyXG4gICAgICAgICAgICAgICAgICBhcG9sbG9DbGllbnQsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBQcmV2ZW50IEFwb2xsbyBDbGllbnQgR3JhcGhRTCBlcnJvcnMgZnJvbSBjcmFzaGluZyBTU1IuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGVtIGluIGNvbXBvbmVudHMgdmlhIHRoZSBkYXRhLmVycm9yIHByb3A6XHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWFwb2xsby5odG1sI2dyYXBocWwtcXVlcnktZGF0YS1lcnJvclxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSBydW5uaW5nIGBnZXREYXRhRnJvbVRyZWVgJywgZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGdldERhdGFGcm9tVHJlZSBkb2VzIG5vdCBjYWxsIGNvbXBvbmVudFdpbGxVbm1vdW50XHJcbiAgICAgICAgICAvLyBoZWFkIHNpZGUgZWZmZWN0IHRoZXJlZm9yZSBuZWVkIHRvIGJlIGNsZWFyZWQgbWFudWFsbHlcclxuICAgICAgICAgIEhlYWQucmV3aW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBFeHRyYWN0IHF1ZXJ5IGRhdGEgZnJvbSB0aGUgQXBvbGxvIHN0b3JlXHJcbiAgICAgIGNvbnN0IGFwb2xsb1N0YXRlID0gYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucGFnZVByb3BzLFxyXG4gICAgICAgIGFwb2xsb1N0YXRlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBXaXRoQXBvbGxvO1xyXG59XHJcblxyXG4vKipcclxuICogQWx3YXlzIGNyZWF0ZXMgYSBuZXcgYXBvbGxvIGNsaWVudCBvbiB0aGUgc2VydmVyXHJcbiAqIENyZWF0ZXMgb3IgcmV1c2VzIGFwb2xsbyBjbGllbnQgaW4gdGhlIGJyb3dzZXIuXHJcbiAqIEBwYXJhbSAge09iamVjdH0gaW5pdGlhbFN0YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0QXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSkge1xyXG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxyXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXHJcbiAgaWYgKCFhcG9sbG9DbGllbnQpIHtcclxuICAgIGFwb2xsb0NsaWVudCA9IGNyZWF0ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFwb2xsb0NsaWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW5kIGNvbmZpZ3VyZXMgdGhlIEFwb2xsb0NsaWVudFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IFtpbml0aWFsU3RhdGU9e31dXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlID0ge30pIHtcclxuICAvLyBDaGVjayBvdXQgaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9wdWxsLzQ2MTEgaWYgeW91IHdhbnQgdG8gdXNlIHRoZSBBV1NBcHBTeW5jQ2xpZW50XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsIC8vIERpc2FibGVzIGZvcmNlRmV0Y2ggb24gdGhlIHNlcnZlciAoc28gcXVlcmllcyBhcmUgb25seSBydW4gb25jZSlcclxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7XHJcbiAgICAgIHVyaTogcHJvY2Vzcy5lbnYuQVBJX1VSTCwgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcclxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYCBvciBgaGVhZGVyc2BcclxuICAgICAgZmV0Y2gsXHJcbiAgICB9KSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlKSxcclxuICB9KTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5hc1BhdGgpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gICAqL1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFsbCBjb25maWd1cmVkIGxvY2FsZXNcbiAgICovXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyZWQgZGVmYXVsdCBsb2NhbGVcbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGFmdGVySW50ZXJhY3RpdmU/OiBzdHJpbmdbXTsgYmVmb3JlSW50ZXJhY3RpdmU/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb21tb25MYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9zaG9wL2NvbW1vbi1sYXlvdXQnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBQYWdlNDA0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29tbW9uTGF5b3V0IHBhcmVudD1cImhvbWVcIiB0aXRsZT1cIjQwNFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+NDA0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+cGFnZSBub3QgZm91bmQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zb2xpZFwiPmJhY2sgdG8gaG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9Db21tb25MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTQwNDsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5RnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREUwSURjNUxqRTFNVFE0TVN3Z01qQXhNeTh3TXk4eE15MHhNam93T1RveE5TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG95TXpZNVF6YzRRVGt5TmpjeE1VVTRRVVF3UWtNMFJUUTBOME5CUXpnME15SWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3lNelk1UXpjNFFqa3lOamN4TVVVNFFVUXdRa00wUlRRME4wTkJRemcwTXlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qSXpOamxETnpnNE9USTJOekV4UlRoQlJEQkNRelJGTkRRM1EwRkRPRFF6SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pJek5qbEROemc1T1RJMk56RXhSVGhCUkRCQ1F6UkZORFEzUTBGRE9EUXpJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgreEYxYXJBQUFBVlpKUkVGVWVOcGkvUC8vUDhOQUFzYi9QdFlENmdBbUlNNGNRUHN6UVE2WURNVHVBMkE1eU03SklBY3dBL0ZLSU5hbG8rVzZVRHVabWFBQy9FQzhFWWhGNldBNXlJNE5VRHNabUpBa0ZJRjRNeEN6MDlCeU5xZ2RTc2lKRUJtWUEvRmNVTzZnUlk0RDRubFFPeGh3T1FBRW9vRzRsZ1lPcUlHYXpVRElBU0RRZ0UweEJRQmtWaU91Y2dCWGNNMUNEeTR5Z1RuVUxFWlNIQUFDWE5BRUkwK0I1WEpRTTdqd2xZU0Vzc3htV0pZaEVZRDBiQ0dVdFptSUxEU1dRUXNzWWdGSTdWSmlDamNtSWczMEF1S0pKRGhnQWhCN0Uxc1pFUXV5aWF5NFFHcHlTS2tOU1FHZ2lzc05qN3dyVkEwRHJSd0FpdHRWT09JV0pMYWF4TFJDc2dOZ3FYczlXdW9XaFlxUm5GdVl5TXpmeXREc3lRYkZtNkJpSkFNV1BISi9nZmdUSG5rMUlPNkZzdFdCK0QwZXRYeTRvb2FGUUh3TEV2QkFEZ09GZ0lsaGdNR29BMFlkTU9xQUFYY0FDNDJhNEVNbkJBQUNEQUE3eUNhUnN4cjRKd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYUNBWUFBQUNwU2t6T0FBQUVYa2xFUVZSSWlhMlZ5NDhVVlJTSHYzdnJWbFYzOVdzZU1Jd095RHNNOGdncUdFVU1rckF3WXVKV0ZyandrUmo4QjR4eDVjYWRDK01qOFJGalltSllZTnlJb3NiNEh0Q0lZVUdpem9Belk4dE1uQWM5ZEhkVmRWZmRlMTMwTk15ME1FaVlYMUxKdlhYcm5PL20xTW41aVMzSHk5eEF1NEZEd0Y1Z005QURDR0FXR0FGK0JFNEFwNWRLSXBZQUhRQmVBQTdlNkNieitocDRHZmo4V29meU9rR3ZBVi9kQkFUZ0llQWs4TmIvQVRuQXQ4QnpOd0hvMURPMHlwaFpDdlFkOE9BdFFOcTZsOWEvdXlib1RlRCtaWUMwZFJmd2ZpZG9EL0RzTWtMYWVvTDVDaWtBQWE4RFZEUm9CQUN1c0NnaENBMEk3S0pvZ2NCaWtmTW5CcEJZYkNzWEJvRXZMQ1VKR3Q0QWRpaGdteFJpejB4VHN6TUxHV0d4QmlJRTQ2Rm1iOUVodG9CeWFEWTFXU1dKclVGcWd3R3NsR1FreEtuRldvdnZDQzQzTlZvNmpHbUpMOWdPN0ZiQTRhbW1ZV3ZlNGNocWp3MWRIaG80TTlWZ1Y2L0h1VXJDbXB4aStuS0RPN29ESnFvSldTVW81WHdTYmZqblVvVHZPZlFYZlpTRTBWcktvVFVCN3d6WGVXVWtSQ21KSXppc0hNRyttU2hsLzZZaTUyUE4wRmhNVjAvQW56VndBOEdYRlVNK3RteldoaVIxK0dJeVpHdGVVazA4ZnB0dDh1S09iajRlbm1OcUptVDFxZ0xERXlGbDRWSnpGQ1VsTUsxcTd4WDl4LzRxRCtia3dFdmI4MHhIbXJtRzVuSnFXVnZ5bUl3TWg5WVgrUENQT1FwSndycStITXFWOUxxQ2M1VUVCVFMwUldEUjJqSmNUWG5xemhJbkxsUXBGREk4ZjNhT3ZBQWxtRlJZMitVcXlVK1hVc29OUUVpNnJLRmVTZkNONGVSb2xTaEtPRlZKdUVmWDZTdGxHQXBUYUNUMEYzMkd4cXVzNk1wZ0hBY1JOdmxzdkU0ajBReGZyR0dqSmpyajRpbFpGTnMrS3RmcnFRMG1HZ1pmdExwbXJnbjdWN2s4M0MwWm1ZNG81RDM2Q2o3blp5TlVxdWt2K2ZpdXc0WHBpSTE5QVkwNHdURVdGZmhjbkExWldmU0pHeW1EQllkWEx4b21ReDJxMUZMeEhSR3NDNXdyN1Z0UEV3NnN5YkV5NitCYXc4Q0tIR09SWVhDZ1NIazZZcURvVXRZT0lURW02Nk9GNU80Y1RGa0hhVE9zNjgzeVM3bkcrdjQ4cTJicmpGYlRxcVExNmpza3NNWkMxRUJaaTB4VGJCZ2pHMDAyRmhXREpaZE52dVhnNmdBUk5ZaHFEYVNGemE2aFBOZkV4QW05YU01WG10eVdsVFNNSFpQQUQ1MllRQW5HcWdrNVYxSVRpdkhJMEZQS0VzWXAxbE84WFU3b3pTcnVXQkd3TnU5eWUxN3hkeW9ZU1NScnUzeGlCQ3J3bVl3TXAyY1Nlanc1SkxZY0wrOEV6aTRFT1FLcWlTWGpPWFJsSEdhaWxPbElzNkhrTVJzbXhLa2w4Q1NKdGdTdUpPYzVOTFZGVzR2ckNPcE5RM2ZHWWFLZTRoaEQwWlAzdFkzdlYyRFgxY0tCdHFCdGEvUklJWkJBYW0xckxTQTE5c29vV2xSMEljQ0N4ZUlJZ1NQNDNjS2dtajgveW9LeGJnRXBXb0NGY2hmc1hkbGVMLzdtNml2UnpuVVVyazd2SWVDOS8wYmNzbzdSY3VwRmZ2UWtjR1laSWVlQXg5dWJUb2Q5QVBoNUdTQm42VERSVGxCTXk0YmZ2UVhJQjdUY3Rib1VxSzJuZ1VlQTcyOENjQXA0RERnQ0hhM0l2TU5lUjUvT1AvdUFSMm1WWWoxUVluNGtBcU8wR3VrVDRKdWxidkV2Nm9mQWh3R0h3QzBBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmNBQUFBWENBWUFBQURnS3RTZ0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURFMElEYzVMakUxTVRRNE1Td2dNakF4TXk4d015OHhNeTB4TWpvd09Ub3hOU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESUNoWGFXNWtiM2R6S1NJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRE56RTBORGRHTWpjeVJUa3hNVVU0UWpZNE1rRTVOMFUxUWtWR056SkVOeUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBETnpFME5EZEdNemN5UlRreE1VVTRRalk0TWtFNU4wVTFRa1ZHTnpKRU55SStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa00zTVRRME4wWXdOekpGT1RFeFJUaENOamd5UVRrM1JUVkNSVVkzTWtRM0lpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rTTNNVFEwTjBZeE56SkZPVEV4UlRoQ05qZ3lRVGszUlRWQ1JVWTNNa1EzSWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K2hOUzNJUUFBQWY5SlJFRlVlTnFrbFUxSUZWRVV4K2ZaS3dsZG1FR0pIeWp2V2JweFVVaTBhYUVvdUF6TVFJVW5TcEM2VUhmaVZ4dU4yaGx1WEtrYk40cm9KZ1JCVXR5RUNJcFlFY0pEaEJZUnFhaG9JVDZuMzRFemNKbmUxNHdIZm0vZVBjejg1OTcvdmVkTUlCUUtXVWtpRzBhZ0FmSWdBRGI4Z2dVWWlFYWpSNGtlemtnaS9CeE9vUjArUWpQVVFpUE1Rd3NjaHNQaHBrUUNnUVF6YjRWSkdJUHVKQk40RDczUXlRckcweEdYUkJUZXdMQ1ZPbnBnRkNwNHdaZFV0aXpDZnByQ0ZvSWZ1SHlIcFZTZTM0Y3lpRmplNGlYazQzOG9tZmd6K0F0clhwU1ovWTV1Zm5VOHo4V3pPaWpYL0RiYzhxQi9LWjdyZjdGb0JicUMvSHlDS3BpQU9maXQxbmdOT1YxM3hCN29nTWRCRlo2QlZ6NEV4WkwvY25nZjQvSmF4S2YwWFArQklzanlJbzZRT1pUOTJsTzlXUkZ2ZzExNEIrdnd3L0lmOTFSNGhCVU5tVVVrYnkxVXozM1p3aXJrRUp4SVR5Si82UnpGSW0xS0Q2enJSWm5xbEtacVhQV3dZWXpsRkd6Q1F5UDNtZGxHL0hURkFxaDB0ZDlIa0dQa25rS3hIL0V6clRxelVNN2h3c2dkdU81Slc5eFMvN3lNMHhiUFVTdWN1QW0zSWRQSTVjTGRSQUpCNDJwcklUa2hiYUhmR1ArRVFTMFNKL3BnMVZWRXRxTWJOUHpOZEsxa1MzSGlHTjY2djBTdThyOVNuVFAzbCtpcm5wQVh1a2wySEYvdE9HUG5IbWtiMDdMaHZMREVuTG5FRTFqV2ozSE1Sd0hkZ0c5UTR5VCtDVEFBcGRsOTNtOWJtUk1BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYUNBWUFBQUNwU2t6T0FBQUU4MGxFUVZSSWliV1dhMndVVlJpR243bnR6QzY3TFlVV0JBeHBRVXFrQm0rQXRyVVFFNGlRSXBnbWhHQU1ZUENDYUlpSlB4Ukk5SThHTmRHb29FQWdFRUNOb0NpSVlDSWFMbTBwVkxEV0FvVlNDWlhhVWlpa3UxdjJNck16bnorV0pWQ1Fvb0gzMzVtY2M1NTU1enZ6dlVlSlJpTDBvakZBT1ZBQ2pBRDZBUXB3RVdnRzlnTTdnWU0zMjBTNUNlaHhZREV3c2JjM3Vhdzl3RkxncC84Q1dnNjhmSXVBbmxvTnZOQWJTQU4yQTJYL0U1SlJMVEFCU0dRZXFEMG1WTjRHQ01BNDByVzdvcXRCSzREaTJ3REo2RUZnZldhUStYUmpTZHU5RXhvUFZHWWNmWHFISUFDZlFkcFJFWERrRG9JQXh1ckFMTS96TUUwZnB1Vy80U3d2bFVMVmRRQ2l0b0JQUVlBc0FOZkJjVDBNbjNuZHVtUWlUakpwbzZycUxCMTR6RFJOWXJFWXkxZXN4dlQ3cVhpeW5OYTJkdHJhenlJaVRDZ3I0YU5sSzhnWmtzLzhtZVVvUDY1RXlSL0Y5czUrakM0c0lDc1lZTnVtYjlGMGpjRURCOUxlY1E3WFRURjk2aFJNMDRlYmNrdDA0QjdUc3FnK1VNdmU2b09VRm85ajlvc0xHVGxpR0ZVMXRjeDVlaVlubWpmU2NiR0wwb2tqY1RZc3hQaHVJOVpJZzk5YVJuRnM1anNNRDdxc1dyY0IxM0dZTm5VS3g1dWErYjIrZ1VBZ3dJeUs2WFJIby9rcTBCZWdLeHptc2RKaUtxYVZVM1hnSUZtaEVPKy8vUmIxUjQ2eWJPVWFGcjZ5Z0NkS3grQ2VPa1RLQjNhVHd4dlBQOFhtSGJ2NFl2TVczbno5TmZKeWNoaGZXc3p4cHBQazlNdmgwWEZqU0RrMnFGcVd0bmpSb2lXNllSaWFwckg1NnkzVUgyM2twZWZtNG5rZTBXZzNtcVpSTWEyY1RWOXQ0bFJuTjQ5TXJzQjM3akJlMGNOWTg5YlEzbnFHK3dzTEtKODhpWm9EMWVUbURlRGV3aEVNR1h3WEFiOUZmc0V3VXFiUElScUovQjJKUk1ST0pxU3R0VlVpNGJDSWlOakpwTFMwL0NXTzQ0aUlTT094UnFtcTNpOFpuUTBucE8xYzE1V3g1N3B5cHVXME5KMXNGaEVSMTdHbHJiMURvaUlTL1dWZGh4S05SUGFLeUhoVlZRbjQvVGlPZzVOSzBTY1laTytlUFRRMk5oS0x4OG50MzUvczdDdzZMMXprZkRqR3NQeWg1UFVOVVZsWlNUS1pwTEN3a0RsejV5S2VSeUllUi9XWktJWk9jdjltV1BITUlSV29WaFFGRWVGU0xJYnRPSWdJQUxxdUV3Nkh1ZERaaWM4MEtTcTZEOWQxOGVJUnN2dyt3dUV3aXFyaWVoNjJiUk9MeFVqRTQ3aWFnV1BvMkxWYjRZT1prRHUwUm9sR0lxT0IraHY5UDRaaFlGb1c0YTR1SE1jaEZBcGhXaFlBRnpvN2lVYWo1QmNVNExrdWlVU0NSQ3lHbFplSEI3QnJGYkptUHBoK0dEMnBKTlByNm9BSHJvYUlDSnFtQWVEeitSQVJiTnNtNDE3WGRUUk53M0VjVkVVQkZGSitDd0ZZL3lyeS9jZVFGWVFCQlUzazNEMHlBeXFtUjF1L1pYa2VCTFBUU2RiU2dLeGRBSDlVd2FEQllKZ1F5SjZFYnYxOGRmQ3RCWjY5WllBSVdFSHdxZUNrNElmM2tHM3ZRcndiQmcwSDhVRFZ2a0hWWnVDNTF5WHNZZUNobXdPQVBxRzBBd0dxUGtkMmZnZ242aUMzUHdUN2daTUVWV3RFVVVmaHVjRDFVVzRCKzBqbjA3VXkvR0NsR3l2ZEVmaDFDN0p2SFJ5cEJNdUEzS0ZwbDA0U0F0a05HUDR5b3VmRHFPazY2ejIyUzVDTzRUVjQzangwSC9TNTNORWREeHFyb1g0blVyY2RUaldBcWNIZ0FsQlVTRGxwaTJhZkw4a2FPQnM3N3VLNVpFRC9mdDNTdENtazdDV2NyQzdsK0I2aytRQ2Nyb1BvcGZScEN1V2xIWWliQm1sR0xZWi9LV1pnSzc0QUpMb2gzQTZhMFFzb0ZJSS82NUJQS3Nyb1BETVZNMUJDb0c4K3VwR05DS0JFVU5VV05MMEd6ZHlCWnV4R3VWeEVNd2pKMkRXZ2Z3QzA5a2MyMU11NkFBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFaQ0FRQUFBQnU0RTNvQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFKaVMwZEVBUCtIajh5L0FBQUFCM1JKVFVVSDVRd0tGZ2M3eHZHTjFRQUFBaGhKUkVGVU9NdWQwMHRzVEdFY0JmRGZuZHRCU3luNlVBbFNwY1dpWFZFaEVvK3lFR0VoRmtJc2tBaXhzaEFSUWtpd3N0RVFpY1MyVWtyWGJJaUVlRzRzU0NPS1JKaDRxOWVZdWRkaUhtWkdONXl6K1c1dXpqbi94L2Z4endoUVk0c1c4UWgvcjdrMnNxeGRTdVJMQmIrSzlRdnp0aVdvUWloMHlURUpSQ0toUUtUZWVWV2E3RFhWWGVkOEtKVVFTSGtJSm1ueFVJUUdQOFRHNmRKcXZmRU9GaVNKa3A0SUhIRFZLaEFpNFprMXVnMWFwbGx0dVNTSFRodE50Rk4xMFNqMnpsTWZUWGZCQ1dHbEpMRE5CSStzc0t6TUtDRTJ6VUpQWlNzbG5UWkkrMlNzSFVhWEREMFd5RGprVkduN09XelQ1SU81aG5WYjRoNGlHUXpyTWNyNWdza2ZTV2lNaTQ3N29WV1BEUnJVbUdLdExONWh0VURLL1Z4eDg3elhnNXBpMjMxaWFaRkkyaS9wUERNR3RSUlNZcDEyRldjVWFrY1NKSDFSWGF5bHJtRGFZbENtakpFNHp5SGRlb3RmS2ZOeUtTOXMwaWdXNVNjWTJxL0xUME1pRDF3M1U0ZXNxU2I5ZmFlMzJwdy9YeEViMEdpeUNhaFdiN3pkaFpUQ1hwTDJPV3UzY2FnU1lJNzFmdmxtblFadkxiS3lNbU9QdE5ndHRhZ3lrSy85aU5FV3FMUGM2eis5SlBJN2FYWGJTNEdvekdpek5uZDh0MTNUMzgrc1ZyT2JIdXN3V2RLQVdFYWZ4WkptR1d1Nnc5NFdVa3B4VkZiS0xXMHVpMzJ5VkxPRGh2U2FyOTZOMGlFWGNOSm44NzB5TEVDdE0wS3pNY01Lenl2OVMwZE5xTCs0dkhLKzBWNmVrcnM2WkozMlpBUzdoR2RlK2gvOEJrQmt2L0RJazZpa0FBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREl4TFRFeUxURXdWREl5T2pBM09qVXpLekF3T2pBd2x5ZUtvQUFBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeU1TMHhNaTB4TUZReU1qb3dOem8xTXlzd01Eb3dNT1o2TWh3QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJvQUFBQWFDQVlBQUFDcFNrek9BQUFGamtsRVFWUklpYVdXYTR5Y1ZSbkhmK2U4Wnk0N2w1MmQ3cVhkV2RwdXR3c0x0cFVWV2l2TFZrcmdrMkR3a2doWTFFQnE4RXJ3Z3dueGcrRkxJd2xSTVVHTnhnWWIrQUphZ2pGeVN5Umx1MjVMaTlTaXRiU3VsTzIyM2U3TTdPemM1NzNNT2NjUHMwTnFzMTF0K0Nmdmh6ZlB5Zk03Ny9PYzgveGZNZjc0ZnY2SHRnSjNBV1BBdGNBcVFBQUZZQnFZQWw0RzNsb3BpVm9oZGp2d0ErRE9LOFE3Z2NHbCtBK0JBOENQZ05lWFd5eXZrT1JwNEkwVklNdHBKL0FhOE92L0IrUUFFOEMzcndKd3ViNU9xNHpSbFVBSGdSMGZBZExXSjJuMTdrTmQycU5mQXJjQUNHc0pWSmh5TEltdndnaHJpWHQxRW00VllReENXRnpDTEpvVXJna2poQ1VwNjNTSkNnNEdnd0Q0QkxBUCtOcWxvRzNBTjRTMVdDbVpTNjhoNmxiWmRPWmRlaXNMQkU2SW1aNjF2RDh3VElmdlVsNk1rSlFlbndvZEp4UEpFVmpGNmVaNjNnMUdpRG91R1NkUDB6b0FYd1YrQXh4c2czN2Urb29RODZsZXhrOU04cVdwRjltWW5TSG11MmdoS2NZN21ScmF5ak5qRDNEbjZwTjhsMzNjR0owRzJRQWtqV2FLUDlkdjVpZmxCNWtPQnRnWU90K0cvUUxZSXNZZjM3OEorQWZBK1ZYOWZPN3dIM2pzcGFjd0trdzIxVXZnT0FnTGNkMGdjcTdFdWMyRDNQcElGaEhQUWJVUDN5cUVnSkJzZ0xOQXFkSFBmZGtuZWMrc1o3MHpoOFlCMkNhQis0VzF6SGV0WnZ0N2gvbitTejlqTWQ3RlRMb2ZYNFd3Q0l3VUxQcHhDcHN5M0RDY3BYUk00Z1ZyY2EzQW1DYmFTbHdkbytFUGt1cVlZMi8zSGhLMlJvVjR1Ly8zUzJDODZUZ29ZZmo4Z2QraDZ5NTUzMkx5T2Z3TEYyZ1dGdkZtNXdpeTUrbGNjeFp6VFpsU3pxZDJmQVlWY1VIRnNPV3oyTnBGY0hONGl5RXk5aVM3NHE4eHAzdmJvREVGRE5laWNkWWVPOFRveUFDSjNUOWxZelNHMVpyNTU1NUZhSUhxWFVQaXh1dm9TRXpqejE5RXl3cHllQnd4OWdDcU1vUCsxeC9CTkVGNzJFZ2F0dXhnL0c5VmZ2WDJMS1pUSWpHREN1anlWWmprQjlQMDNMU09ydTg5aXE1V0tVOU1zbUhQSGlKREcvRE9uRUhYRzhqVUxweTZUNmhXUTIzYmdUbjlDUHJ2enhLKzkxVmsranBzczQ2WlBRQjlHWHJVQzZSa21jQjJFeEdtVXdKQ0drTVFUMktUU1ZqSTQxK1lJNXpwcCtPR0VYUzFTblI0R0JrTlk3d0d4dGNFMlVYeSszNUxhUERqT0RkL0M5RzVIcUpwYk9FVXhGWkQ4UVJ1ZnBvZzNJM0VmbmhoaXpHdkhzdU9idWZmZjMyQjRBdGZKQjlMRWNuMEk1UUNhekdlajY1NnBFWThPZ2E3cUI2ZEllS2N4QlIzZ1hZSkpoNERET2JpMjhpaGUzRDBFVTZWT2lqSVBsYUo4d0FWQlV4M0JGN20zRFZEdkQ2aGVQamdCT1ZZR3V1NVdLMFJDQkFTWThPWVVSK3hxWUhqSlVudmpCSk1Qb0VKSkJnRGdJMm1pUjU1QWhUc04zdEpDTGQ5R0dZVThCZXduMDRYYy96K3JvZllXcHhoN1BRUnBnZUcwSTZEc0JZRWFDMEozcStURE9WSmZOWmdreUU4ZHgwaTJpcU5SUktUSlVqQzB3dmY0V0I5TTllR1pyR3RjWFRJV2JmejNoeUliMFlEajNLc2s2bVI3ZlNWOG15ZS9TZGR0UktScGs5bm8wcGZMVWM1M01tUE4rNG0yTmJOOWFHaktGdEVTUThsSzRTY0FoRGlxY0xEUEZuK01obVZKeVEwTFkva1ViSGtzTWVBVVdVMHVXUTNUY2ZoOWhPVGpKNDVUaytsUU9DRU9Oc3p3T1RIeG5ocjRDYVN4VEozcXplNUxmWU9BMnFCd0RxY0N0YnljdjAycHR3dERLZ3NjZUdpVytad0NyaStEYnFsUGRhbE5mZ3FURDdaRFVEY3E5T1VEclZJakxoWHA3ZTJnR3ZEWEZpNmpIRlpSMXRKMVNSSXlCcXJuY0pTS1VXN1AzY0FiN1NINmlIZ0dlQkJJeVJLTjFsVG5NY0tnUkV0eTByWGlnQTBjVkJDczA1ZHhDTFFWaUlrOURuRnl3RUF6OU55NnY4eXZvZUFkeTVkSmF6Rk1SckhhSmFUd0tLRXhtSForQW5ndnZiTDVRNTdLM0IwMmF4WHArTXNtZWlWUUM0dEc5NzdFU0RQMFhMWHlrcWd0bllEbndFbXJ3SndHTGdIK0Fvc3paMUx0TkovM1N0THp6aHdONjFTYkFCU3RDNUhDZmlBMWtINkUvRG1TcnY0RDE5RFJJUzdhZU5FQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYUNBWUFBQUNwU2t6T0FBQUR3VWxFUVZSSWliV1dXMHdjVlJpQXZ6TjdnVjEydWJWY0NvSldRVFFhTENoZWtLSlcxRWpiYUd4TXhhVFJxRzFNTVRFK0dGTVM2b09KZlc1U3JiSEJTMUlmOE1rMDBpYWF0RFFZS2FLR05kWldpMHFRQ3FVc01MTXN5KzdNN3UvRE9JaHJYRW9MWHpLWm5IUCtPZCtjeTh4L1ZNUXdXSWE3Z0sxQUkxQU5GQUlLbUFhR2dhK0I0OEJBcGs1VUJ0RkRRQWZRc3R5Yi9FMHZjQUQ0WWlXaVEwRDdGUXJTT1FMc1dVN2tBazRCbTY5UzR2QU44QUN3NEZSb2FRRjlxeUFCdUJ0NzdSWlpLam9NM0xjS0VvYzY0R09uNEV4ZEEvWncxNEptb004WjBUdHJKQUY0Rit3UjNTWWlQeXFsQ0FUOWdBdkVZbTR1aG9pZ2xQclhVeUtnRkFSOFhuQnJZQ1daaTVtTDlTSkNNTnNEYmhmeGVCTFRzZ0FhM0VDYnBoUmVqNHVMRTlOYytHT1Nxb3Bpcml0ZGg3T0U1a0lNVDNZV0MvTXhzdjNaQUl4ZW1tRWtIS1dxT0VoWllRQTBCU2pNQlpQTDBRVGpzMUh5UFZDWUYwUXAxZVlHbW5KeWZGd0s2N1RzLzRBTlFSL2hXSUxPblZzb0xzakZvOEVkRzBzNSs4c29tNnJLbVp5YTRkekZhVjd2L1owY0pjekVMZDVzdVpXU1BEK1dhZEZjVTBGNzl5QkdORWJYVS9XSUNKcW1HdDFBRlpxYndRdGpESTlQMGJuemFkcmZPMFpvWkp5Sm9XRzZUMzNQcTA4MmNYNXNpbWNmcnFmcldCOGwxMWVpVzE1ZTIzd2pMMzgyUkdoY1ovSzNNQi8xRDNOZ1d5MS82dk04WHJPQjh0SWk1aUlSVWltNVFSUElCd2lOVE9DeVVuelNHK0tOSGMyc0Qvb3A4SG54ZXoza1pIbXBMaXZrbVk0amJLb3NvcldwanRHSmFZNE9qYkh2d1JvS2ZGNENMbzNLd2h4T0RrOEM4RWhWRVdBNlM1dnJkcnMwQmREMTVTQk50VGZSODladXUyVkhCeVVCSDNoY3ZQaG9BNGRQbkNFeEVhWnoxMk5zN3c1eFQyVUJQWHUyQUVLdzQxTktmRjVLOHYwa1JURGlGblhsK1VoOFVZUmJSR1pqODFIL3dkM2JxUzViajFnbXBwWGsrUDduT1Q4MlNYVkZNZXZ5QWh6NnZKKzJGMXJKQ3VUeHlwM2wzRndVQkROQkltbHg0cmxHemwyT2NFdFJrQ3kzaTNneWhWSXduMGc2bmdpR2JweldaMmZGSmluNjdLd1l1aTVMK2ZhblgyVnI1L3N5T1JVV001RVFFVk1rR1Y4U2E0cEl5cjZuN0haZDE4VXdESW5ZMTRDS0dNYmJ3TDcvKzlwRUJJQmdiaTVZQ1l4b0RFMUwvMFV1eTBFVk1ZeGFJSlFwU2ltRnBoVEpWR3FsQW9kN05lQUhZQ2hUbEloY2krUm5ZTUNaZzcxWDI4c1ZzQmYrU1JQOXdJZHJJT2tHVHNKL00reDNRUDBxU2M0Q3R6dUY5TzF6UHpDNENwSVFhVWswWGJTQW5ZYTdya0Z5RkR1N1JqS0pIRjRDV29HdlZpQTRBendCN0FJa3ZUSFR1YzZoQ2RpR1BSVWJnVHpzQTZRT2pHQnZwQjdnZEtaTy9nSlg0cVRHK2dYZk1RQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCY0FBQUFYQ0FZQUFBRGdLdFNnQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5RnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREUwSURjNUxqRTFNVFE0TVN3Z01qQXhNeTh3TXk4eE15MHhNam93T1RveE5TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBEUWpZeU4wTTROVGN5UlRreE1VVTRRamMxTWtNMlFVVTJPRFExT1VRMU5pSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcERRall5TjBNNE5qY3lSVGt4TVVVNFFqYzFNa00yUVVVMk9EUTFPVVExTmlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rTkNOakkzUXpnek56SkZPVEV4UlRoQ056VXlRelpCUlRZNE5EVTVSRFUySWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tOQ05qSTNRemcwTnpKRk9URXhSVGhDTnpVeVF6WkJSVFk0TkRVNVJEVTJJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrV1liNnVBQUFBYk5KUkVGVWVOcXNsVTBvUkZFVXgrK2JwdFNReGJDd2ZsTytraUpGV0VncEZoWlRJaHZGa2xKS3N2T2RCVklpSzhaS0ZJa0ZVWnFWc0xDeUlVM1dGa2hHTk9YamYrby85UnJ2em52elprNzl1bmRtN3Z6T2ZhZDd6ek5NMDFRMmtRKzZRRHVvQUFhNEEyZGdEN3dsRjhaaU1hVUx3MFkrRHVaVHZ2dGxnbVJNZ1VrbnVTL2w4em5GRDZBWEZGTXE2NEo4bWxzd0FTNkJYNlVKcXp3S1d2bkhVckFEbmkyL3Y0SjlVQTNHUUFNVE9NcGxjUXNmZDFvNXh3SVlCWFdoVUdndVhjM3pNSDZCUjJDcXpFSktWQVVLVWZ0M3U1MzNjRDZpTW85aGpuMjZzb1E1UC9FZ2ozSU02K1J5am45QVFubUxPQ2pYeVEyVmZSZzYrVDFIdjBkeEFSMjI4a1BPMnp5SW16a2U2T1RibkM5N2tLOXczTkxKUDlrbnluaVozTVlncUFFemRtYzh0WEZkZ1hyZXZDVUg4UkJZQlM4UUY3bnBMVTNnR2l5Q0c5REoxcHVNQU9nQUZ4VExib080L210dTVOOXNSck9nRmh6eERNY3ArZ0RIb0pHZHN3U3NTM21RWU5OdFA1ZVFSKzNtVGlzdEw0dFRzQXVlTEd0RjNBOGlLTkdBRzducmtKY0ZkLzR2Z1M4SHQxTlJHSkVFMWhMbFJHNlRZRU5sY2VXMUNTQ1dxWXlCbk1vdENlVGtKZjRFR0FBNmtYTXJHQjBjcGdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJvQUFBQWFDQVlBQUFDcFNrek9BQUFHQWtsRVFWUklpYTJWZTJ4WFp4bkhQKzk3enUvUys0M1MwZ0p0YVpGTHBjV050blIwWTVBaU1GZ2NpMDVad2hZSjdnK24wV1FtcmlhS1V3T0xsK20yUkkxekttNVJuSE9ibG1GSFdDKzZsVzVnWkJRY1FzY29HOTJrbFBaM1A1ZmZPWTkvL1BvcllOeVVaZC9rSk9kOTgzMmZ6M21lOHp4NTFaTFdCd0VRRVpSUzVPZUhDQVkwT2VFQWhxR3huWFNMWTN1YmJDZTl5bkc5aG5UYUx4VVJna0Z6c2lBL05ES3ZxbWh3MGNMeTU5ZmRYUDlLV1ZrdUZ5NGtLQ29NczZDMkJOTTA4RHdmQVBXZm9JS0NNRGtoZzdRbm5ZbUUzWlZNcGRlbVBSOEZHSWJHTUJRQTZiUlB5bkt4ckRSbVFOTzhkTTdBbHMxTGQ2MWYrNUVEU2tGeFVZaGdNREFETXNxck84bEthMDBvWkpKS3VUK2VpbGlQMkU2NnpqQTBwcWt4REkzVzZncXZJaFEweWM4TEVRd1l2SDU2dlBhRnZ0UGJKaTRscTlldGFlaWVWVjZDYTl2SXRQOXlSb0NoVlFEb2QxM3ZCcTBWU2wwTy9MK2t0Y0t5MHJ4eFpvSzFxK3RmM2YvVTl0V2hjTmlLUmlKb3JkRlpvd0o4WDE3eVBQOEd3OURYQkNGemxsRElZT21TQ25yN1JscTNiTnN6Q0I3NStibjR2cUFLNW5haGxFTEJZd0k3cmluNmY1RlNvSlJpYXZSdDd0eSs1dGRQUExidGJ0ZXhVSis2KzFlSTc3ZWxmUm02dGh6ZUQ2WklXUzRUbHhMODlLSGJibHErYlA1ZmxZZ0R5R0Y4V2ZFaGNUTFNHdHR5aWNYdDQrR1F1VXpaVnFKUndYR2xOQklNei9qRVRvSDRCTU41MlIxQUlaNk4wZ3BVY01icldFbTBWcGpCbkl6VHMzSGROSVpoNExnZW51ZTNtSTdqYlVVYmtJNGlyejlMZ1hNQ0tsYVNMRnRQYnA1d29QY0VFeE5KbWhvckdSaDhrNjIzTjFGU1dzU2Uzd3h4K01nb3pjM1ZiTHZqT29MQkFQdisvQnJSbU0wbmJsbUNZUm80bHB2OWxxM0VvdEgrV0N3dXNYaFVrdWRmbFlHdmQwajhBVVJrVk1ZVEloajN5dWUrK0Z2NXljOEhCTzZSNGVPamNzK1g5a3Jsb3AzU3ZPcjdzbWJ6b3lJaU1uemluTUFPd2J4WGpnMlBpb2hJTEJyTlBvYzAwSUI0NEVOT1ZRczljNS9tdGozTndDbTZEN3dObnMwRFhaMmNmV3VLbHJXTFNTUnRmdlp3RHl1YXF6bjYwbjMwZG44QmdPOThyNWZpbWdyS2EwczVjdlI4cG9ReVU5MWFEUlJucGdqQVozdW40dURGVzNuNlNacy83TzNocGszTG1UTm5GaS8wbnFhOExJKzJsb1hzM0hVSCs1NGJwcW4xUWQ1OWQ1THg4VXY4N3RsajlQMXBCNTJyR3pqUWR4ckl0UHEwQ2swdVUzQWRpNFlGcFd4WXY0QWRPNDlpeDZjNCtGeG10RTZlR3FmdCtya0FmTE5ySTUrNWZSbExGbitEcm0vdHA3MjFCaUlwSG4vaU1FTkgzcUoyWGpIZ0VnNmJXRlk2MDRUQVZCWmtXUjVnY21OYkZaRXpnOVRWem1KVit5SUdoMDVoL2Vzc0sxZk01OXZmN2FGand5UHMvdEVBeFRYVmhFSUJ2bngvTnlzN0Z4R0plNVNWNU5EWGM1Smp3K2N4QXpuWjBERVRHQUdxc3FrNmpzT1d6WTFNanQzRnhsdWI4SDBQdzlCOHBldlRyTHU1Z1VPSHp6SHc4aG1pTVp0OWUrOWlWbWt1eXZPNS83NDExTlJVTURaMmtkMFA5WUZTT001TTE0MnFXRFM2QytqSzd2aStUMkZSTGhBQUlCcUpVSkFmUmhraGZNOUNHNkVycXcyNDA5NDA4V2lTL01JY0lFRGFUWkZNT21pdEFSNVdzVWlrQ1RQOEdvRWd5QlhuRmUrNVZqcnpQdE5WNytWVmdBLzQza29WaThjZ09mNTM1WHZMSlZnSTR2R2hTQ253WEVEK2lSRmVyS0tlb044Y2FEZTdOd3hLem13STVGNDFBQjhZNG50Z1R5THpPanVscU9GRlU2VlMrUFdyRC9rTDcveWxIdnpGWjZXeTRPb3lmQkJwQXpVNWhjeXVlMHFLNmwvRVRhQmlrU2tJNXlPR1FlRDM2LzZtUmc1ZUo3UG5UOE91bFpocEVoVTloMS9aOGc5djlROGFsY29GTjQ2S1JhUGcrMGhoRVRoT09QRE0rcitva2Y0V0tTc0hNKy8vLzJkS2crZEE0aDNJclR6bTNmSk1oMS9iSGxPV0R5cDdsV3VOaWtZaEVMVFNuK3hyOWRvKy83aUtqYU9tem9MdlRyZlorMlFoSGlUR0lIVUJxZHYwcEgvOVZ6K0dFWXdwRzNBVDRHUXp5aDd3UFFnWElDR05Qcmx2b3o3Nnc2K3BkMTd1VUk2TkJBTVFLZ0ZqK3M3eWJYQmlxSFFTTWZPUTBzWlhaTzZhM1ZUZCtFY2lieURGQzVIYWpXREhNdEd2QWlIZzJZQWdlZVZneFRGRzkzZW84LzJibVR6WnJoSmpkYmp4SWtBUnlJMUl1T3dzaGZWRFVycjBlU245YUw5U1FPb2lKTWFRaWxhazV1TXpvSDhEYVd1OCtpYTEzTkFBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQStRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyT0RBcExDQmtaV1poZFd4MElIRjFZV3hwZEhrSy85c0FRd0FJQmdZSEJnVUlCd2NIQ1FrSUNnd1VEUXdMQ3d3WkVoTVBGQjBhSHg0ZEdod2NJQ1F1SnlBaUxDTWNIQ2czS1N3d01UUTBOQjhuT1QwNE1qd3VNelF5LzlzQVF3RUpDUWtNQ3d3WURRMFlNaUVjSVRJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXkvOEFBRVFnQjhnRXNBd0VpQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QTlnb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb3BrczBWdkUwczBpUnhvTXM3c0FBUGNtc0FlUGZDUnVCQVBFZW1GeWNmOGZLN2YrK3M0L1dnRG9xS2FqcEpHc2tiSzZNQVZaVGtFSHVEVkxWTmMwclJJbGwxVFViV3pSdnVtZVVKdStnUFg4S0FMOUZaK2xhN3BPdVJ2SnBlbzJ0NHFZMytSS0dLNTZaQTZmaldnU0FDU2NBVUFGRllEZU4vQ3EzZjJVK0lkTUUyZHUzN1N1TSttYzR6VytDQ0FRY2cwQUZGRkZBQlJSUlFBVVVVeWFhSzNoa21ta1NPS05TN3U3QUtxZ1pKSlBRQ2dCOUZSMjl4RGQyMFZ4YnlwTEJLb2VPUkdES3lua0VFZFJWZlV0VzA3UjdjVDZsZlcxcEVUZ1BQS0VCUG9NOWFBTGxGWldsZUp0RDF5Um85TDFhenU1Rkc1a2lsQllEMXgxeFdyUUFVVno5eDQ1OEsydHliZWJ4RHBxeWc0Sy9hRk9EN2tIQXJidDdtQzh0MHVMYWFPZUZ4bEpJbkRLdzlpT0RRQkxSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUZUVU5Nc2RWaGpoMUMxaXVZbzVCS3NjcTdsM0RvU09oNjk2ZTlsWnRhRzJlMmdOdGpCaWFNYk1mVHBWaXVLMUw0ZExxQ1lieEpyajRPZkt1cmdUd043UEdSaGg3VUFQK0hubFJhWHE2MmpuK3g0OVRtR25rbjVCQ0F1ZGgvdUI5K1B4cUx3Sll3NnpheWVMOVFoU2JVTlRrZDRXa1hjYmUzREVSeHBub01EY2NkUzNOWE5EMUs0dnRNMWpRN3EzZ2gxSFNnYmFSYlZkc1RxMGU2TmtYK0VGU1BsNXdSVXZ3N2RKUGg1b0xKMEZtaS9pQmcvcURRQlE4ZTJLYVpZanhkcDhTeDZucGJySzdvTUc0aDNBU1J1ZTQya25ub1FNWXAvakdRNnpxT2crR281U0xUVlhlYThhTnNGN2VKUXhUSTVBY3NvejZacS80K2RJL2gvcjdQME5qS3Y0bFNCK3BGWkt4dGIrUHZDb25HR2JScDRnVC9mWHlpZjBvQTZ3YVJwcTZkL1o2NmZhaXkyN1BzNGlYWmowMjR4WE4rRHQra2Excm5oYmV6V3RnMFZ4WTd6a3JCS0NkZzlsWldBOWlLN0d1U3N2M254WDFkays3RnBOc2tuKzhaSkNQMG9BNjJzN1ROZHNOV3VMMjJ0WlcrMFdVeGh1SVpGS09oN0hCNTJrY2c5Q0swYTQ3eHpaUVdGdC93QUpUYTNzZW5hdFlwaEpuQktYSzUvMUVpamxneDZZNUI1RkFIUjZ2cTlsb2VtVGFocUV3aXQ0aHllcFk5bEE3azlBS3R3eWllQ09aVmRSSW9ZTElwVmhrWndRZVFmYXVDOEtTbnhsckV1czY0UEt2Tk5sOHVEUm5CSDJGc2NTT0NCdWRoeUd4Z0RwejA5QW9BSzRQeFc4bml0OVIwYTNkbDBuVFltazFHWkcvd0JkS0YzTEFDT3c0Wi93SHJXeDRzMTZUVG9yZlROUGxpVFZ0UUpqZ2FWZ0ZnVWZlbWJQWlIwSGM0Rk1XSFI5RThHM09tMmQ1QXlwYXlaWnBnWGxjcVN6c2M4c3h5VDlhQUxIZ2Iva1FmRC9BUDJENFA4QTBBVmsrRTdTRFhkVTFieEpxRVFudVJmVFdsb0pRR0Z2REUyMEJCL0NTUVNUNzFmOEIzZHMvZ2pRSVV1SW1sR253Z29IQllZUVo0cWpFbXBlRHRZMUV3NlpjNmxvbW9YRFhhL1l3R210cG4rK3BRa2JrSkc0RWRDVHhRQmQ4YmFIQmZhSGRhakFpdzZ0WVJOYzJkNGd3Nk9neUJudXB4Z2c1R0RXWDRxMVdYVi9oZGE2bkdaSWJhOFcxbHZUQzJHamdkbE11RDE0QklQdG1sOFJhMXFldWVIZFJ0YkRTYjdUclZyYVQ3VmY2aEdJaEhGdE80SW1keFlqSXlRQU01ejJvMDdVcE5DK0czaHEwanRGdTcrK3RvTFczdG5PRVoyanlkNXdjS3FoaWZwanZRQjEybjJPbld1blJXK24yOXRIWmJCNWFRcU5oWHNSamcvV3VYOE93MjFuOFFkZnROSFZVMHdXOEwzTWNmOEFxbzdzbHNoUjBCS0JTUU8rTTFUdHZocmN4MkUwUC9DVWFuWW1iazIybU9ZYmFNOXdpRXNRUG93cTk0V2xuOFA2ci93aVY3YTJpZnVEYzJsMWFSK1dseW9ZQjk2NU9KQVNDZVRuT2FBT3lvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0RPMWpVYmpTN1pMaURUTG5VRTM0bFMxS21SRndmbUNramR6amdjODFqU2VQTER5eUlOTDEyNHVPZ3QwMHVaWHo2RXNvVWZpYTZxaWdEbWZDV2w2aEJMcXVzYXZFc0YvcXR3Sld0MVlONUVhS0VqUXNPQ1FCa2tkeldYcGM5MTRGbHVkSnU5UHZMblJETTgxamQyZHUwM2tvN2JqRklxQXNNRW5CeGdnOXE3cWlnRGhOVnVMbng2WU5Ic3RPdmJmUlRNa2wvZVhrRFFDVkZJWVJScXdETVNRTWtqQUFQWE5hL2kzU2I2N0duYXRwS28rcWFWT1pvWW5JQW1SbDJ5UjU3YmxQQjlRSzZTaWdEbFArRTh0aEFBMmlhK0wwai9qekdteUY4K203R3pIdnV4VXZoSFNiNjJiVXRaMWVOWXRVMWFZU3l3cTI0UVJxTnNjZWU1QXprampKTmROUlFBVnpOdjRmdTlSOFJOckd2UEZJdHJLdzB5empKTWNJSEFsYlAzcEQrU2pwenpYVFVVQWMzNGo4T1RYbHpGcldpekphYTlhcmlPVmg4bHduVXhTZ2RWUHIxVThpdWhoTXJRUm1kRlNZcUM2bzI0QnNjZ0hBeU05OFUraWdETzFMdy9vMnN5UnlhbnBWbmVQR0NFYTRnVnlvOUFTS3h0VDhEZUdScFY0YmZ3MXBubmVRL2w3TE5OMjdhY1k0NjVycXFLQU9TOEMrR2ROMHZ3M285MS9ZMXRhYXA5aWpFOGh0d2t3WXFOd1k0em5QWE5hT3ArS0xiU0w0MjExcCtxbE5vWVhFRmk4MFJ6MnlnT0Q5UUszS0tBT0gxVzl2dkcwUDlpNmJwOTlhYVhPUUw3VUx1Rm9OME9mbWppVnNNV1ljWndBQVRXcDRxMGU4dWJiVEwzUjRvM3Z0SnVWdUliZDIyckttMG8wZWVpa3F4d2V4QXJwS0tBT1dUeDNZTEhpNjB6VzdhNEErYUI5TW1aZ2ZRRlZLbjZnMUJwVUdvYS80dlR4RGVXRStuMk5sYlBiMlVOemdUU3M1QmVSbEIrVVlVQUE4OStLN0NpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBUC8yUT09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3Qtc3NyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=