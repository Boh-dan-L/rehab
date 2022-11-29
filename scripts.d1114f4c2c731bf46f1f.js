/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar/Navbar */ "./src/components/Navbar/Navbar.js");
/* harmony import */ var _PageOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageOne */ "./src/PageOne.js");
/* harmony import */ var _PageVideoCouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageVideoCouse */ "./src/PageVideoCouse.js");







var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageOne__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/online",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageVideoCouse__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/PageOne.js":
/*!************************!*\
  !*** ./src/PageOne.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/About/About */ "./src/components/About/About.js");
/* harmony import */ var _components_Anketa_Anketa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Anketa/Anketa */ "./src/components/Anketa/Anketa.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header/Header */ "./src/components/Header/Header.js");





var PageOne = function PageOne() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Anketa_Anketa__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_About_About__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageOne);

/***/ }),

/***/ "./src/PageVideoCouse.js":
/*!*******************************!*\
  !*** ./src/PageVideoCouse.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_VideoSlider_PlayVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/VideoSlider/PlayVideo */ "./src/components/VideoSlider/PlayVideo.js");



var PageVideoCouse = function PageVideoCouse() {
  var pageCourse = {
    padding: '65px 15px',
    "with": '100vw',
    height: '100vh'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: pageCourse
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_VideoSlider_PlayVideo__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageVideoCouse);

/***/ }),

/***/ "./src/components/About/About.js":
/*!***************************************!*\
  !*** ./src/components/About/About.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_prime_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button-prime/Button */ "./src/components/Button-prime/Button.js");
/* harmony import */ var _Text_SubTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Text/SubTitle */ "./src/components/Text/SubTitle.js");
/* harmony import */ var _Text_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Text/Title */ "./src/components/Text/Title.js");
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.scss */ "./src/components/About/about.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");







var About = function About() {
  var animate = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: function visible(custom) {
      return {
        y: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.1
        }
      };
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    initial: "hidden",
    whileInView: "visible",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    custom: 1,
    variants: animate,
    className: "about__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    about: "\u041F\u0440\u043E \u0441\u0435\u0431\u0435"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.img, {
    custom: 1,
    variants: animate,
    className: "about__img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    custom: 1,
    variants: animate,
    className: "about__subtitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text_SubTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    about: "\u0414\u0438\u043F\u043B\u043E\u043C\u043E\u0432\u0430\u043D\u0438\u0439 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u043E\u043B\u043E\u0433 \u0437\u0456 \u0441\u0442\u0430\u0436\u0435\u043C \u0431\u0456\u043B\u044C\u0448\u0435 10 \u0440\u043E\u043A\u0456\u0432. \u0417 2012 \u0440\u043E\u043A\u0443 \u043F\u043E\u0447\u0430\u0432 \u0437\u0430\u0439\u043C\u0430\u0442\u0438\u0441\u044F \u043C\u0430\u0441\u0430\u0436\u0435\u043C, \u0430 \u0432\u0436\u0435 \u0437 2014 \u0440\u043E\u043A\u0443 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u044E \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u044E.\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u0443\u044E\u0441\u044F \u0432 \u043B\u0456\u043A\u0443\u0432\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u043C\u0430\u0441\u0430\u0436\u0456 \u0432\u0456\u0434 \u0433\u0440\u0443\u0434\u043D\u043E\u0433\u043E \u0432\u0456\u043A\u0443 \u0434\u043E \u043B\u0456\u0442\u043D\u044C\u043E\u0433\u043E, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0443 \u0440\u0435\u0430\u0431\u0456\u043B\u0456\u0442\u0430\u0446\u0456\u0457 \u043F\u0456\u0441\u043B\u044F \u0456\u043D\u0441\u0443\u043B\u044C\u0442\u0443, \u043F\u0435\u0440\u0435\u043B\u043E\u043C\u0443 \u0445\u0440\u0435\u0431\u0442\u0430, \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0438\u0445 \u0442\u0440\u0430\u0432\u043C \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0437\u0430\u0445\u0432\u043E\u0440\u044E\u0432\u0430\u043D\u044C \u043E\u043F\u043E\u0440\u043D\u043E-\u0440\u0443\u0445\u043E\u0432\u043E\u0433\u043E \u0430\u043F\u0430\u0440\u0430\u0442\u0443 (\u041E\u0420\u0410). \u041F\u043E\u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0432\u0448\u0438 \u0432 \u0440\u0456\u0437\u043D\u0438\u0445 \u043A\u043B\u0456\u043D\u0456\u043A\u0430\u0445 \u041A\u0438\u0454\u0432\u0430, \u044F \u043D\u0430\u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0432 \u0432\u0435\u043B\u0438\u0447\u0435\u0437\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u041E\u0420\u0410, \u0430 \u0442\u0430\u043A\u043E\u0436, \u043D\u0430 \u0442\u043B\u0456 \u0446\u044C\u043E\u0433\u043E, \u043F\u043E\u0431\u0443\u0434\u0443\u0432\u0430\u0432 \u0432\u043B\u0430\u0441\u043D\u0443 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0443 \u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0437 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0438\u043C \u043F\u0456\u0434\u0445\u043E\u0434\u043E\u043C, \u0449\u043E \u0441\u043F\u0440\u0438\u044F\u0454 \u0448\u0432\u0438\u0434\u043A\u043E\u043C\u0443 \u043E\u0434\u0443\u0436\u0430\u043D\u043D\u044E."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    custom: 4,
    variants: animate,
    className: "about__btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button_prime_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    anketa: "\u0417\u0430\u043F\u043E\u0432\u043D\u0438\u0442\u0438 \u0430\u043D\u043A\u0435\u0442\u0443"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/components/Anketa/Anketa.js":
/*!*****************************************!*\
  !*** ./src/components/Anketa/Anketa.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anketa_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anketa.scss */ "./src/components/Anketa/anketa.scss");
/* harmony import */ var _Text_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Text/Title */ "./src/components/Text/Title.js");
/* harmony import */ var _Button_prime_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button-prime/Button */ "./src/components/Button-prime/Button.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");






var Anketa = function Anketa() {
  var animate = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: function visible(custom) {
      return {
        y: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.1
        }
      };
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    initial: "hidden",
    whileInView: "visible",
    viewport: {
      amout: 0.1,
      once: true
    },
    className: "anketa"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {
    custom: 1,
    variants: animate,
    className: "anketa__img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    custom: 3,
    variants: animate,
    className: "anketa__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    anketa: "\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.a, {
    custom: 4,
    variants: animate,
    href: "#",
    className: "anketa__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button_prime_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    anketa: "\u0417\u0430\u043F\u043E\u0432\u043D\u0438\u0442\u0438 \u0430\u043D\u043A\u0435\u0442\u0443"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Anketa);

/***/ }),

/***/ "./src/components/Button-prime/Button.js":
/*!***********************************************!*\
  !*** ./src/components/Button-prime/Button.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_prime_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-prime.scss */ "./src/components/Button-prime/button-prime.scss");



var Button = function Button(props) {
  // const Tag = Attr.href ? 'a' : 'button';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "button-prime"
  }, props.anketa);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text/Title */ "./src/components/Text/Title.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.scss */ "./src/components/Footer/footer.scss");








var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "footer__title",
    footer: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer__tell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "footer__tell--namb",
    href: "tel: +380500869337"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsTelephoneForwardFill, {
    className: "phone__icon"
  }), "+38(050)-086-93-37")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer__icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "footer__icons--telega"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTelegram, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "footer__icons--facebook"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsFacebook, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "footer__icons--viber"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaViber, null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_Header_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/Header.png */ "./src/img/Header.png");
/* harmony import */ var _Header_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/header.scss */ "./src/components/Header/header.scss");




var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "header__img"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Navbar/Menu.js":
/*!***************************************!*\
  !*** ./src/components/Navbar/Menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.scss */ "./src/components/Navbar/menu.scss");




var Menu = function Menu(_ref) {
  var items = _ref.items,
      active = _ref.active,
      setActive = _ref.setActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: active ? 'menu menu__view' : 'menu',
    onClick: function onClick() {
      return setActive(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: active ? 'blur' : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu__content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "menu__content--li",
      onClick: function onClick() {
        return setActive(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      className: "menu__content--a",
      to: item.to
    }, item.value));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/components/Navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/Navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.scss */ "./src/components/Navbar/navbar.scss");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/components/Navbar/Menu.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Navbar = function Navbar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuActive = _useState2[0],
      setMenuActive = _useState2[1];

  var items = [{
    value: 'головна',
    to: '/'
  }, {
    value: 'послуги',
    href: '/services'
  }, {
    value: 'онлайн реабілітація',
    to: '/online'
  }, {
    value: 'контакти',
    href: '/contacts'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
    to: "/",
    className: "nav__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav__link--logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav__burger",
    onClick: function onClick() {
      return setMenuActive(!menuActive);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: menuActive ? 'nav__burger--btn active' : 'nav__burger--btn'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: menuActive,
    setActive: setMenuActive,
    items: items
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/Text/SubTitle.js":
/*!*****************************************!*\
  !*** ./src/components/Text/SubTitle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subtitle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtitle.scss */ "./src/components/Text/subtitle.scss");



var SubTitle = function SubTitle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subtitle"
  }, props.about);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTitle);

/***/ }),

/***/ "./src/components/Text/Title.js":
/*!**************************************!*\
  !*** ./src/components/Text/Title.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MTitle": () => (/* binding */ MTitle),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _title_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.scss */ "./src/components/Text/title.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");



var Title = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: ref,
    className: "title"
  }, props.anketa, props.about, props.footer);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);
var MTitle = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)(Title);

/***/ }),

/***/ "./src/components/VideoSlider/PlayVideo.js":
/*!*************************************************!*\
  !*** ./src/components/VideoSlider/PlayVideo.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _videoplayer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoplayer.scss */ "./src/components/VideoSlider/videoplayer.scss");
/* harmony import */ var _playlist_Playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlist/Playlist */ "./src/components/VideoSlider/playlist/Playlist.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function PlayVideo() {
  var videoList = [{
    thumbnail: "https://via.placeholder.com/500/FFA500/FFFFFF",
    url: "https://drive.google.com/file/d/1ADeeXxhq71v-lDikySWYRc3GSiJDHFF_/view?usp=share_link",
    imgAlt: "Image 1 not found"
  }, {
    thumbnail: "https://via.placeholder.com/500/FF0000/FFFFFF",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    imgAlt: "Image 2 not found"
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentVideo = _useState2[0],
      setCurrentVideo = _useState2[1];

  var vidRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(null);
  var params = {
    videos: videoList,
    autoPlay: true,
    showQueue: true,
    playForward: true,
    currentVideo: currentVideo,
    setCurrentVideo: setCurrentVideo,
    vidRef: vidRef
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    id: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_playlist_Playlist__WEBPACK_IMPORTED_MODULE_2__.Playlist, {
    playlistParams: params
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayVideo);

/***/ }),

/***/ "./src/components/VideoSlider/playlist/Playlist.js":
/*!*********************************************************!*\
  !*** ./src/components/VideoSlider/playlist/Playlist.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Playlist": () => (/* binding */ Playlist),
/* harmony export */   "goToNextVideo": () => (/* binding */ goToNextVideo),
/* harmony export */   "goToPreviousVideo": () => (/* binding */ goToPreviousVideo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlaylistQueue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlaylistQueue */ "./src/components/VideoSlider/playlist/PlaylistQueue.js");



var goToNextVideo = function goToNextVideo(params) {
  if (params.playForward) {
    if (params.currentVideo + 1 >= params.videos.length) {
      params.setCurrentVideo(0);
    } else {
      params.setCurrentVideo(params.currentVideo + 1);
    }
  } else {
    if (params.currentVideo - 1 < 0) {
      params.setCurrentVideo(params.videos.length - 1);
    } else {
      params.setCurrentVideo(params.currentVideo - 1);
    }
  }
};

var goToPreviousVideo = function goToPreviousVideo(params) {
  if (params.playForward) {
    if (params.currentVideo - 1 < 0) {
      params.setCurrentVideo(params.videos.length - 1);
    } else {
      params.setCurrentVideo(params.currentVideo - 1);
    }
  } else {
    if (params.currentVideo + 1 >= params.videos.length) {
      params.setCurrentVideo(0);
    } else {
      params.setCurrentVideo(params.currentVideo + 1);
    }
  }
};

function Playlist(_ref) {
  var playlistParams = _ref.playlistParams;
  var videos = playlistParams.videos,
      autoPlay = playlistParams.autoPlay,
      showQueue = playlistParams.showQueue,
      playForward = playlistParams.playForward,
      defaultQueueItemPlaceholderThumbnail = playlistParams.defaultQueueItemPlaceholderThumbnail,
      currentVideo = playlistParams.currentVideo,
      setCurrentVideo = playlistParams.setCurrentVideo,
      vidRef = playlistParams.vidRef;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCurrentVideo(playForward ? 0 : videos.length - 1);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (videos.length > 0) {
      vidRef.current.onended = function () {
        if (autoPlay) {
          if (playForward) {
            if (currentVideo + 1 >= videos.length) {
              setCurrentVideo(0);
            } else {
              setCurrentVideo(currentVideo + 1);
            }
          } else {
            if (currentVideo - 1 < 0) {
              setCurrentVideo(videos.length - 1);
            } else {
              setCurrentVideo(currentVideo - 1);
            }
          }
        }
      };
    }
  }, [currentVideo]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, videos.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-container-styles"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    className: "video-styles",
    autoPlay: autoPlay,
    muted: autoPlay ? true : false,
    ref: vidRef,
    src: videos[currentVideo].url,
    controls: true
  }), showQueue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PlaylistQueue__WEBPACK_IMPORTED_MODULE_1__["default"], {
    vidRef: vidRef,
    videos: videos,
    currentVideo: currentVideo,
    changeCurrentVideo: setCurrentVideo,
    defaultQueueItemPlaceholderThumbnail: defaultQueueItemPlaceholderThumbnail
  })));
}



/***/ }),

/***/ "./src/components/VideoSlider/playlist/PlaylistQueue.js":
/*!**************************************************************!*\
  !*** ./src/components/VideoSlider/playlist/PlaylistQueue.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function PlaylistQueue(_ref) {
  var videos = _ref.videos,
      currentVideo = _ref.currentVideo,
      changeCurrentVideo = _ref.changeCurrentVideo,
      defaultQueueItemPlaceholderThumbnail = _ref.defaultQueueItemPlaceholderThumbnail,
      vidRef = _ref.vidRef;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      queueList = _useState2[0],
      setQueueList = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var list = Array.from(Array(videos.length).keys());
    setQueueList(list);
  }, []);

  var changeCurrentVideoHandler = function changeCurrentVideoHandler(newItem) {
    vidRef.current.load();
    changeCurrentVideo(newItem);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "playlist-queue-styles"
  }, queueList.length > 0 && queueList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: item,
      className: currentVideo === item ? 'playlist-queue-item-styles current-playing-video-styles' : 'playlist-queue-item-styles',
      onClick: function onClick() {
        return changeCurrentVideoHandler(item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: videos[item].thumbnail ? videos[item].thumbnail : defaultQueueItemPlaceholderThumbnail,
      alt: videos[item].imgAlt,
      className: "thumbnail-styles"
    }));
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaylistQueue);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");




var container = document.getElementById('app');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container); // createRoot(container!) if you use TypeScript

root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  tab: "home"
}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/About/about.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/About/about.scss ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/About.png */ "./src/img/About.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 15px;\n}\n@media (min-width: 1024px) {\n  .about {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0 90px;\n  }\n}\n.about__title {\n  margin-top: 47px;\n  text-transform: uppercase;\n}\n@media (min-width: 575px) {\n  .about__title {\n    font-size: 18px;\n  }\n}\n@media (min-width: 1024px) {\n  .about__title {\n    font-size: 21px;\n    flex: 0 1 100%;\n    margin-left: 34%;\n  }\n}\n.about__img {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  width: 205px;\n  height: 167px;\n  margin-top: 9px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  border-radius: 2px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media (min-width: 575px) {\n  .about__img {\n    width: 290px;\n    height: 238px;\n  }\n}\n@media (min-width: 1024px) {\n  .about__img {\n    width: 152px;\n    height: 342px;\n    flex: 0 0 29%;\n  }\n}\n.about__subtitle {\n  width: 264px;\n  margin-top: 5px;\n}\n@media (min-width: 575px) {\n  .about__subtitle {\n    width: 70%;\n    margin-top: 10px;\n  }\n}\n@media (min-width: 1024px) {\n  .about__subtitle {\n    display: flex;\n    justify-content: center;\n    width: 712px;\n    flex: 1 1 50%;\n    margin-left: 55px;\n  }\n}\n.about__btn {\n  display: flex;\n  justify-content: center;\n  margin-top: 36px;\n}\n@media (min-width: 1024px) {\n  .about__btn {\n    flex: 0 1 100%;\n    margin-left: 35%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/About/about.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;AADJ;AAII;EAPJ;IAQQ,mBAAA;IACA,eAAA;IACA,eAAA;EADN;AACF;AAGI;EACI,gBAAA;EACA,yBAAA;AADR;AAGQ;EAJJ;IAKQ,eAAA;EAAV;AACF;AAEQ;EARJ;IASQ,eAAA;IACA,cAAA;IACA,gBAAA;EACV;AACF;AAEI;EACI,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,4BAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,yFAAA;EACA,kBAAA;EACA,oBAAA;KAAA,iBAAA;AAAR;AAEQ;EAZJ;IAaQ,YAAA;IACA,aAAA;EACV;AACF;AACQ;EAjBJ;IAkBQ,YAAA;IACA,aAAA;IACA,aAAA;EAEV;AACF;AACI;EACI,YAAA;EACA,eAAA;AACR;AACQ;EAJJ;IAKQ,UAAA;IACA,gBAAA;EAEV;AACF;AAAQ;EATJ;IAUQ,aAAA;IACA,uBAAA;IACA,YAAA;IACA,aAAA;IACA,iBAAA;EAGV;AACF;AAAI;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;AAER;AAAQ;EALJ;IAMQ,cAAA;IACA,gBAAA;EAGV;AACF","sourcesContent":["\n\n.about {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0 15px;\n\n\n    @media (min-width: 1024px) {\n        flex-direction: row;\n        flex-wrap: wrap;\n        padding: 0 90px;\n    }\n\n    &__title {\n        margin-top: 47px;\n        text-transform: uppercase;\n\n        @media (min-width: 575px) {\n            font-size: 18px;\n        }\n\n        @media (min-width: 1024px) {\n            font-size: 21px;\n            flex: 0 1 100%;\n            margin-left: 34%;\n        }\n    }\n\n    &__img {\n        background-image: url(../../img/About.png);\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: 50% 50%;\n        width: 205px;\n        height: 167px;\n        margin-top: 9px;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n        border-radius: 2px;\n        object-fit: cover;\n\n        @media (min-width: 575px) {\n            width: 290px;\n            height: 238px;\n        }\n\n        @media (min-width: 1024px) {\n            width: 152px;\n            height: 342px;\n            flex: 0 0 29%;\n        }\n    }\n\n    &__subtitle {\n        width: 264px;\n        margin-top: 5px;\n\n        @media (min-width: 575px) {\n            width: 70%;\n            margin-top: 10px;\n        }\n\n        @media (min-width: 1024px) {\n            display: flex;\n            justify-content: center;\n            width: 712px;\n            flex: 1 1 50%;\n            margin-left: 55px;\n        }\n    }\n\n    &__btn {\n        display: flex;\n        justify-content: center;\n        margin-top: 36px;\n\n        @media (min-width: 1024px) {\n            flex: 0 1 100%;\n            margin-left: 35%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Anketa/anketa.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Anketa/anketa.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/Anketa1.jpg */ "./src/img/Anketa1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".anketa {\n  z-index: 5;\n  display: grid;\n}\n@media (min-width: 1024px) {\n  .anketa {\n    position: absolute;\n    top: 15%;\n    right: 18%;\n  }\n}\n.anketa__img {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-y: 74%;\n  display: block;\n  width: 190px;\n  height: 140px;\n  margin: -15px auto 0;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  border-radius: 2px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: 50% 71%;\n     object-position: 50% 71%;\n}\n@media (min-width: 575px) {\n  .anketa__img {\n    width: 290px;\n    height: 219px;\n  }\n}\n@media (min-width: 1024px) {\n  .anketa__img {\n    width: 344px;\n    height: 257px;\n  }\n}\n.anketa__title {\n  display: flex;\n  justify-content: center;\n  width: 320px;\n  margin: 27px auto 0;\n}\n@media (min-width: 575px) {\n  .anketa__title {\n    width: 380px;\n  }\n}\n@media (min-width: 1024px) {\n  .anketa__title {\n    width: 458px;\n    margin: 45px 0 45px 0;\n  }\n}\n@media (min-width: 1024px) {\n  .anketa__title .title {\n    color: #fff;\n    font-size: 25px;\n  }\n}\n.anketa__button {\n  display: flex;\n  justify-content: center;\n  margin-top: 15px;\n  text-decoration: none;\n}\n@media (min-width: 1024px) {\n  .anketa__button {\n    margin-top: 20px;\n  }\n  .anketa__button .button__prime.anketa__button {\n    color: #fff;\n    background-color: #008FAD;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Anketa/anketa.scss"],"names":[],"mappings":"AAEA;EACI,UAAA;EACA,aAAA;AADJ;AAGI;EAJJ;IAKQ,kBAAA;IACA,QAAA;IACA,UAAA;EAAN;AACF;AAEI;EACI,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,0BAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;EACA,yFAAA;EACA,kBAAA;EACA,oBAAA;KAAA,iBAAA;EACA,2BAAA;KAAA,wBAAA;AAAR;AAGI;EAfA;IAgBI,YAAA;IACA,aAAA;EAAN;AACF;AAEI;EApBA;IAqBI,YAAA;IACA,aAAA;EACN;AACF;AAGI;EACI,aAAA;EACA,uBAAA;EACA,YAAA;EACA,mBAAA;AADR;AAGQ;EANJ;IAOQ,YAAA;EAAV;AACF;AAEQ;EAVJ;IAWQ,YAAA;IACA,qBAAA;EACV;AACF;AAEY;EADJ;IAEQ,WAAA;IACA,eAAA;EACd;AACF;AAGI;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,qBAAA;AADR;AAGQ;EANJ;IAOQ,gBAAA;EAAV;EAEU;IACI,WAAA;IACA,yBAAA;EAAd;AACF","sourcesContent":["\n\n.anketa {\n    z-index: 5;\n    display: grid;\n\n    @media (min-width: 1024px) {\n        position: absolute;\n        top: 15%;\n        right: 18%;\n    }\n\n    &__img {\n        background-image: url(../../img/Anketa1.jpg);\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position-y: 74%;\n        display: block;\n        width: 190px;\n        height: 140px;\n        margin: -15px auto 0;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n        border-radius: 2px;\n        object-fit: cover;\n        object-position: 50% 71%;\n\n\n    @media (min-width: 575px) {\n        width: 290px;\n        height: 219px;\n    }\n\n    @media (min-width: 1024px) {\n        width: 344px;\n        height: 257px;\n    }\n\n    }\n\n    &__title {\n        display: flex;\n        justify-content: center;\n        width: 320px;\n        margin: 27px auto 0;\n\n        @media (min-width: 575px) {\n            width: 380px;\n        }\n\n        @media (min-width: 1024px) {\n            width: 458px;\n            margin: 45px 0 45px 0;\n        }\n\n        .title {\n            @media (min-width: 1024px) {\n                color: #fff;\n                font-size: 25px;\n            }\n        }\n    }\n\n    &__button {\n        display: flex;\n        justify-content: center;\n        margin-top: 15px;\n        text-decoration: none;\n\n        @media (min-width: 1024px) {\n            margin-top: 20px;\n\n            .button__prime.anketa__button {\n                color: #fff;\n                background-color: #008FAD;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button-prime/button-prime.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button-prime/button-prime.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button-prime {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 190.9%;\n  text-align: center;\n  letter-spacing: 0.02em;\n  color: #FDFDFD;\n  width: 210px;\n  height: 55px;\n  border-radius: 35px;\n  background-color: #008FAD;\n  border: 1px solid #008FAD;\n  translate: 0 -1px;\n  box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);\n  transition: 0.3s;\n  animation: shake-bottom 1.2s ease 10s 3 normal both;\n}\n@keyframes shake-bottom {\n  0% {\n    transform: rotate(0deg);\n    transform-origin: 50% 100%;\n  }\n  10% {\n    transform: rotate(2deg);\n  }\n  20% {\n    transform: rotate(-4deg);\n  }\n  30% {\n    transform: rotate(4deg);\n  }\n  40% {\n    transform: rotate(-4deg);\n  }\n  50% {\n    transform: rotate(4deg);\n  }\n  60% {\n    transform: rotate(-4deg);\n  }\n  70% {\n    transform: rotate(4deg);\n  }\n  80% {\n    transform: rotate(-2deg);\n  }\n  90% {\n    transform: rotate(2deg);\n  }\n  100% {\n    transform: rotate(0deg);\n    transform-origin: 50% 100%;\n  }\n}\n@media (min-width: 575px) {\n  .button-prime {\n    width: 258px;\n    height: 76px;\n    font-size: 16px;\n  }\n}\n@media (min-width: 1024px) {\n  .button-prime {\n    width: 332px;\n    height: 93px;\n    font-size: 18px;\n  }\n}\n.button-prime:hover {\n  translate: 0 -3px;\n  background: #008FAD;\n  color: #FDFDFD;\n  box-shadow: 5px 5px 4px 1px rgba(0, 0, 0, 0.25);\n}\n.button-prime:active {\n  translate: 0 -1px;\n  box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);\n}", "",{"version":3,"sources":["webpack://./src/components/Button-prime/button-prime.scss"],"names":[],"mappings":"AAEA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,cAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,yBAAA;EACA,iBAAA;EACA,+CAAA;EACA,gBAAA;EACA,mDAAA;AADJ;AAIA;EAEI;IACI,uBAAA;IACA,0BAAA;EAHN;EAKE;IACI,uBAAA;EAHN;EAKE;IACI,wBAAA;EAHN;EAKE;IACI,uBAAA;EAHN;EAKE;IACI,wBAAA;EAHN;EAKE;IACI,uBAAA;EAHN;EAKE;IACI,wBAAA;EAHN;EAKE;IACI,uBAAA;EAHN;EAKE;IACI,wBAAA;EAHN;EAKE;IACI,uBAAA;EAHN;EAKE;IACI,uBAAA;IACA,0BAAA;EAHN;AACF;AAOI;EA5DJ;IA6DQ,YAAA;IACA,YAAA;IACA,eAAA;EAJN;AACF;AAMI;EAlEJ;IAmEQ,YAAA;IACA,YAAA;IACA,eAAA;EAHN;AACF;AAKI;EACI,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,+CAAA;AAHR;AAMI;EACI,iBAAA;EACA,+CAAA;AAJR","sourcesContent":["\n\n.button-prime {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 12px;\n    line-height: 190.9%;\n    text-align: center;\n    letter-spacing: 0.02em;\n    color: #FDFDFD;\n    width: 210px;\n    height: 55px;\n    border-radius: 35px;\n    background-color: #008FAD;\n    border: 1px solid #008FAD;\n    translate: 0 -1px;\n    box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);\n    transition: 0.3s;\n    animation: shake-bottom 1.2s ease 10s 3 normal both;\n\n\n@keyframes shake-bottom {\n\n    0% {\n        transform:rotate(0deg);\n        transform-origin:50% 100%;\n    }\n    10% {\n        transform:rotate(2deg);\n    }\n    20% {\n        transform:rotate(-4deg);\n    }\n    30% {\n        transform:rotate(4deg);\n    }\n    40% {\n        transform:rotate(-4deg);\n    }\n    50% {\n        transform:rotate(4deg);\n    }\n    60% {\n        transform:rotate(-4deg);\n    }\n    70% {\n        transform:rotate(4deg);\n    }\n    80% {\n        transform:rotate(-2deg);\n    }\n    90% {\n        transform:rotate(2deg);\n    }\n    100% {\n        transform:rotate(0deg);\n        transform-origin:50% 100%;\n    }\n}\n\n\n    @media (min-width: 575px) {\n        width: 258px;\n        height: 76px;\n        font-size: 16px;\n    }\n\n    @media (min-width: 1024px) {\n        width: 332px;\n        height: 93px;\n        font-size: 18px;\n    }\n\n    &:hover {\n        translate: 0 -3px;\n        background: #008FAD;\n        color: #FDFDFD;\n        box-shadow: 5px 5px 4px 1px rgba(0, 0, 0, 0.25);\n    }\n\n    &:active {\n        translate: 0 -1px;\n        box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 224px;\n  background: #008FAD;\n  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.25);\n  margin-top: 107px;\n}\n.footer__title {\n  margin-top: 25px;\n}\n.footer__title .title {\n  color: #fff;\n}\n.footer__tell {\n  margin: 15px 0;\n}\n@media (min-width: 1024px) {\n  .footer__tell {\n    margin: 30px 0;\n  }\n}\n.footer__tell--namb {\n  display: block;\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 190.9%;\n  text-align: center;\n  letter-spacing: 0.02em;\n  text-decoration: none;\n  color: #fff;\n  margin-left: 3px;\n}\n.footer__icons {\n  display: flex;\n  justify-content: center;\n}\n.footer__icons--telega, .footer__icons--facebook, .footer__icons--viber {\n  text-decoration: none;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  color: #fff;\n}\n@media (min-width: 1024px) {\n  .footer__icons--telega, .footer__icons--facebook, .footer__icons--viber {\n    width: 30px;\n    height: 30px;\n  }\n}\n.footer__icons--telega:hover, .footer__icons--facebook:hover, .footer__icons--viber:hover {\n  translate: 0 -3px;\n}\n.footer__icons--telega {\n  margin-left: 7px;\n}\n.footer__icons--facebook {\n  margin-left: 20px;\n}\n.footer__icons--viber {\n  margin-left: 20px;\n}\n\n.phone__icon {\n  width: 12px;\n  height: 12px;\n  margin-right: 4px;\n}", "",{"version":3,"sources":["webpack://./src/components/Footer/footer.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,4CAAA;EACA,iBAAA;AADJ;AAGI;EACI,gBAAA;AADR;AAGQ;EACI,WAAA;AADZ;AAKI;EACI,cAAA;AAHR;AAKQ;EAHJ;IAIQ,cAAA;EAFV;AACF;AAKQ;EACI,cAAA;EACA,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,qBAAA;EACA,WAAA;EACA,gBAAA;AAHZ;AAOI;EACI,aAAA;EACA,uBAAA;AALR;AAOQ;EACI,qBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;AALZ;AAOY;EAPJ;IAQQ,WAAA;IACA,YAAA;EAJd;AACF;AAOQ;EACI,iBAAA;AALZ;AAQQ;EACI,gBAAA;AANZ;AASQ;EACI,iBAAA;AAPZ;AAUQ;EACI,iBAAA;AARZ;;AAcA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AAXJ","sourcesContent":["\n\n.footer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 224px;\n    background: #008FAD;\n    box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.25);\n    margin-top: 107px;\n\n    &__title {\n        margin-top: 25px;\n\n        .title {\n            color: #fff;\n        }\n    }\n\n    &__tell {\n        margin: 15px 0;\n\n        @media (min-width: 1024px) {\n            margin: 30px 0;\n        }\n\n\n        &--namb{\n            display: block;\n            font-family: 'Montserrat';\n            font-style: normal;\n            font-weight: 700;\n            font-size: 14px;\n            line-height: 190.9%;\n            text-align: center;\n            letter-spacing: 0.02em;\n            text-decoration: none;\n            color: #fff;\n            margin-left: 3px;\n        }\n    }\n\n    &__icons {\n        display: flex;\n        justify-content: center;\n\n        &--telega, &--facebook, &--viber {\n            text-decoration: none;\n            display: inline-block;\n            width: 20px;\n            height: 20px;\n            color: #fff;\n\n            @media (min-width: 1024px) {\n                width: 30px;\n                height: 30px;\n            }\n        }\n\n        &--telega:hover, &--facebook:hover, &--viber:hover {\n            translate: 0 -3px;\n        }\n\n        &--telega {\n            margin-left: 7px;\n        }\n\n        &--facebook {\n            margin-left: 20px;\n        }\n\n        &--viber {\n            margin-left: 20px;\n        }\n\n    }\n}\n\n.phone__icon {\n    width: 12px;\n    height: 12px;\n    margin-right: 4px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/header.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/header.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/Header.png */ "./src/img/Header.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/Header-desctop.png */ "./src/img/Header-desctop.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n  padding-top: 45px;\n  z-index: 3;\n}\n.header__img {\n  width: 100vw;\n  height: 30vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n@media (min-width: 575px) {\n  .header__img {\n    height: 50vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }\n}\n@media (min-width: 1024px) {\n  .header__img {\n    height: 100vh;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Header/header.scss"],"names":[],"mappings":"AAEA;EACI,iBAAA;EACA,UAAA;AADJ;AAGI;EACI,YAAA;EACA,YAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,4BAAA;EACA,2CAAA;AADR;AAGQ;EATJ;IAUQ,YAAA;IACA,yDAAA;EAAV;AACF;AAEQ;EAdJ;IAeQ,aAAA;EACV;AACF","sourcesContent":["\n\n.header {\n    padding-top: 45px;\n    z-index: 3;\n\n    &__img {\n        width: 100vw;\n        height: 30vh;\n        background-image: url(../../img/Header.png);\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: 50% 50%;\n        box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));\n\n        @media (min-width: 575px) {\n            height: 50vh;\n            background-image: url(../../img/Header-desctop.png);\n        }\n\n        @media (min-width: 1024px) {\n            height: 100vh;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/menu.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/menu.scss ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu {\n  position: absolute;\n  position: fixed;\n  padding: 90px 15px 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #008fad;\n  transform: translateX(100%);\n  transition: 0.3s;\n  z-index: 50;\n}\n@media (min-width: 785px) {\n  .menu {\n    max-width: 30%;\n    transform: translateX(335%);\n  }\n}\n.menu__view {\n  transform: translateX(0);\n  transition: 0.3s;\n}\n@media (min-width: 785px) {\n  .menu__view {\n    transform: translateX(235%);\n  }\n}\n.menu__content {\n  text-align: center;\n  text-transform: uppercase;\n}\n.menu__content--a {\n  display: block;\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 190.9%;\n  letter-spacing: 0.02em;\n  text-decoration: none;\n  color: white;\n  position: relative;\n}\n.menu__content--a::after {\n  content: \"\";\n  background-color: white;\n  position: absolute;\n  left: 0;\n  bottom: 3px;\n  width: 100%;\n  height: 0px;\n  z-index: -1;\n  border-bottom: 1px solid white;\n  transition: all 0.3s;\n}\n.menu__content--a:hover::after {\n  bottom: 0;\n  height: 100%;\n}\n.menu__content--a:hover {\n  color: #008fad;\n}\n.menu__content--li {\n  margin-bottom: 45px;\n}\n\n.blur {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  position: fixed;\n  top: 0;\n  right: 100%;\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}", "",{"version":3,"sources":["webpack://./src/components/Navbar/menu.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,eAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,2BAAA;EACA,gBAAA;EACA,WAAA;AADJ;AAGI;EAXJ;IAYQ,cAAA;IACA,2BAAA;EAAN;AACF;AAGI;EACI,wBAAA;EACA,gBAAA;AADR;AAGQ;EAJJ;IAKQ,2BAAA;EAAV;AACF;AAGI;EACI,kBAAA;EACA,yBAAA;AADR;AAGQ;EACI,cAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,sBAAA;EACA,qBAAA;EACA,YAAA;EACA,kBAAA;AADZ;AAGY;EACI,WAAA;EACA,uBAAA;EACA,kBAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,8BAAA;EACA,oBAAA;AADhB;AAIY;EACI,SAAA;EACA,YAAA;AAFhB;AAKY;EACI,cAAA;AAHhB;AAQQ;EACI,mBAAA;AANZ;;AAWA;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;EACA,MAAA;EACA,WAAA;EACA,kCAAA;UAAA,0BAAA;AARJ","sourcesContent":["\n\n.menu {\n    position: absolute;\n    position: fixed;\n    padding: 90px 15px 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #008fad;\n    transform: translateX(100%);\n    transition: 0.3s;\n    z-index: 50;\n\n    @media (min-width: 785px) {\n        max-width: 30%;\n        transform: translateX(335%);\n\n    }\n\n    &__view {\n        transform: translateX(0);\n        transition: 00.3s;\n\n        @media (min-width: 785px) {\n            transform: translateX(235%);\n        }\n    }\n\n    &__content {\n        text-align: center;\n        text-transform: uppercase;\n\n        &--a {\n            display: block;\n            font-family: 'Montserrat';\n            font-weight: 700;\n            font-size: 16px;\n            line-height: 190.9%;\n            letter-spacing: 0.02em;\n            text-decoration: none;\n            color: #ffff;\n            position: relative;\n\n            &::after{\n                content: '';\n                background-color: #ffff;\n                position: absolute;\n                left: 0;\n                bottom: 3px;\n                width: 100%;\n                height: 0px;\n                z-index: -1;\n                border-bottom: 1px solid #ffff;\n                transition: all .3s ;\n            }\n\n            &:hover::after{\n                bottom: 0;\n                height: 100%;\n            }\n\n            &:hover {\n                color: #008fad;\n            }\n        }\n\n\n        &--li {\n            margin-bottom: 45px;\n        }\n    }\n}\n\n.blur {\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    position: fixed;\n    top: 0;\n    right: 100%;\n    backdrop-filter: blur(2px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/navbar.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/navbar.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/Logo.svg */ "./src/img/Logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav {\n  position: relative;\n  position: fixed;\n  width: 100%;\n  height: 45px;\n  background: #008FAD;\n  z-index: 50;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  z-index: 60;\n}\n@media (min-width: 575px) {\n  .nav {\n    height: 60px;\n  }\n}\n.nav__link {\n  display: block;\n  width: 50px;\n  height: 30px;\n  position: absolute;\n  top: 8px;\n  left: 15px;\n  cursor: pointer;\n}\n.nav__link--logo {\n  width: 50px;\n  height: 30px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: 50% 50%;\n}\n@media (min-width: 575px) {\n  .nav__link--logo {\n    width: 70px;\n    height: 50px;\n  }\n}\n.nav__burger {\n  display: flex;\n  flex: content;\n  position: absolute;\n  width: 30px;\n  height: 18px;\n  right: 15px;\n  top: 14px;\n  cursor: pointer;\n}\n@media (min-width: 575px) {\n  .nav__burger {\n    top: 20px;\n    width: 40px;\n    height: 28px;\n  }\n}\n.nav__burger--btn, .nav__burger ::after, .nav__burger ::before {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  background: #FFFFFF;\n  border-radius: 2px;\n  transition: 300ms;\n}\n.nav__burger--btn {\n  top: 6px;\n}\n.nav__burger--btn::after {\n  content: \"\";\n  bottom: -10px;\n  transition: bottom 300ms 300ms, transform 300ms;\n  transition: cubic-bazier(0.23, 1, 0.32, 1);\n}\n.nav__burger--btn::before {\n  content: \"\";\n  top: -10px;\n  transition: top 300ms 300ms, transform 300ms;\n  transition: cubic-bazier(0.23, 1, 0.32, 1);\n}\n.nav__burger .active {\n  background: rgba(255, 255, 255, 0);\n  transition: none;\n}\n.nav__burger .active::after {\n  content: \"\";\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms, transform 300ms 300ms;\n  transition: cubic-bazier(0.68, -0.55, 0, 1.55);\n}\n.nav__burger .active::before {\n  content: \"\";\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms, transform 300ms 300ms;\n  transition: cubic-bazier(0.68, -0.55, 0, 1.55);\n}", "",{"version":3,"sources":["webpack://./src/components/Navbar/navbar.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,2CAAA;EACA,WAAA;AADJ;AAII;EAXJ;IAYQ,YAAA;EADN;AACF;AAGI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,eAAA;AADR;AAGQ;EACI,WAAA;EACA,YAAA;EACA,yDAAA;EACA,4BAAA;EACA,wBAAA;EACA,4BAAA;AADZ;AAGY;EARJ;IASQ,WAAA;IACA,YAAA;EAAd;AACF;AAII;EACI,aAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,eAAA;AAFR;AAIQ;EAVJ;IAWQ,SAAA;IACA,WAAA;IACA,YAAA;EADV;AACF;AAGQ;EACI,cAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;AADZ;AAIQ;EACI,QAAA;AAFZ;AAKQ;EACI,WAAA;EACA,aAAA;EACA,+CAAA;EACA,0CAAA;AAHZ;AAOQ;EACI,WAAA;EACA,UAAA;EACA,4CAAA;EACA,0CAAA;AALZ;AASQ;EACI,kCAAA;EACA,gBAAA;AAPZ;AAUQ;EACI,WAAA;EACA,SAAA;EACA,yBAAA;EACA,+CAAA;EACA,8CAAA;AARZ;AAWQ;EACI,WAAA;EACA,MAAA;EACA,wBAAA;EACA,4CAAA;EACA,8CAAA;AATZ","sourcesContent":["\n\n.nav {\n    position: relative;\n    position: fixed;\n    width: 100%;\n    height: 45px;\n    background: #008FAD;\n    z-index: 50;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    z-index: 60;\n\n\n    @media (min-width: 575px) {\n        height: 60px;\n    }\n\n    &__link{\n        display: block;\n        width: 50px;\n        height: 30px;\n        position: absolute;\n        top: 8px;\n        left: 15px;\n        cursor: pointer;\n\n        &--logo {\n            width: 50px;\n            height: 30px;\n            background-image: url(../../img/Logo.svg);\n            background-repeat: no-repeat;\n            background-size: contain;\n            background-position: 50% 50%;\n\n            @media (min-width: 575px) {\n                width: 70px;\n                height: 50px;\n            }\n        }\n    }\n\n    &__burger {\n        display: flex;\n        flex: content;\n        position: absolute;\n        width: 30px;\n        height: 18px;\n        right: 15px;\n        top: 14px;\n        cursor: pointer;\n\n        @media (min-width: 575px) {\n            top: 20px;\n            width: 40px;\n            height: 28px;\n        }\n\n        &--btn, ::after, ::before {\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 3px;\n            background: #FFFFFF;\n            border-radius: 2px;\n            transition: 300ms;\n        }\n\n        &--btn {\n            top: 6px;\n        }\n\n        &--btn::after {\n            content: '';\n            bottom: -10px;\n            transition: bottom 300ms 300ms, transform 300ms;\n            transition: cubic-bazier(0.23, 1, 0.32, 1);\n\n        }\n\n        &--btn::before {\n            content: '';\n            top: -10px;\n            transition: top 300ms 300ms, transform 300ms;\n            transition: cubic-bazier(0.23, 1, 0.32, 1);\n\n        }\n\n        .active {\n            background: rgba(255,255,255,0);\n            transition: none;\n        }\n\n        .active::after {\n            content: '';\n            bottom: 0;\n            transform: rotate(-45deg);\n            transition: bottom 300ms, transform 300ms 300ms;\n            transition: cubic-bazier(0.68, -0.55, 0, 1.55);\n        }\n\n        .active::before {\n            content: '';\n            top: 0;\n            transform: rotate(45deg);\n            transition: top 300ms, transform 300ms 300ms;\n            transition: cubic-bazier(0.68, -0.55, 0, 1.55);\n        }\n\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/subtitle.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/subtitle.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".subtitle {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 165.9%;\n  text-align: center;\n  letter-spacing: 0.04em;\n  color: #000000;\n}\n@media (min-width: 575px) {\n  .subtitle {\n    font-size: 16px;\n  }\n}\n@media (min-width: 1024px) {\n  .subtitle {\n    font-size: 18px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Text/subtitle.scss"],"names":[],"mappings":"AAEA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,cAAA;AADJ;AAGI;EAVJ;IAWQ,eAAA;EAAN;AACF;AAEI;EAdJ;IAeQ,eAAA;EACN;AACF","sourcesContent":["\n\n.subtitle {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 165.9%;\n    text-align: center;\n    letter-spacing: 0.04em;\n    color: #000000;\n\n    @media (min-width: 575px) {\n        font-size: 16px;\n    }\n\n    @media (min-width: 1024px) {\n        font-size: 18px;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/title.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/title.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 190.9%;\n  text-align: center;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n@media (min-width: 575px) {\n  .title {\n    font-size: 18px;\n  }\n}\n@media (min-width: 1024px) {\n  .title {\n    font-size: 21px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Text/title.scss"],"names":[],"mappings":"AAEA;EACI,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,cAAA;AADJ;AAGI;EAVJ;IAWQ,eAAA;EAAN;AACF;AAEI;EAdJ;IAeQ,eAAA;EACN;AACF","sourcesContent":["\n\n.title {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 190.9%;\n    text-align: center;\n    letter-spacing: 0.02em;\n    color: #000000;\n\n    @media (min-width: 575px) {\n        font-size: 18px;\n    }\n\n    @media (min-width: 1024px) {\n        font-size: 21px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/VideoSlider/videoplayer.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/VideoSlider/videoplayer.scss ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".video-container-styles {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.playlist-queue-styles {\n  box-shadow: 0px 0px 1px black;\n  display: flex;\n  align-items: center;\n  overflow-x: auto;\n  background: #008fad;\n}\n\n.playlist-queue-item-styles {\n  margin: 5px;\n  cursor: pointer;\n  min-width: 60px;\n  max-width: 60px;\n  min-height: 60px;\n  max-height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 4px solid transparent;\n}\n@media (max-width: 575px) {\n  .playlist-queue-item-styles {\n    margin: 3px;\n    min-width: 40px;\n    max-width: 40px;\n    min-height: 40px;\n    max-height: 40px;\n  }\n}\n\n.current-playing-video-styles {\n  box-shadow: 0px 0px 2px white;\n  transition: 0.2s;\n}\n\n.thumbnail-styles {\n  width: 100%;\n  height: 100%;\n}\n\n.video-styles {\n  width: 100%;\n  height: 100%;\n}\n\n@media screen and (max-width: 1024px) {\n  .video-container-styles {\n    width: 100%;\n    height: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/VideoSlider/videoplayer.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,cAAA;AACJ;;AAEA;EACI,6BAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,WAAA;EACA,eAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,6BAAA;AACJ;AACI;EAZJ;IAaQ,WAAA;IACA,eAAA;IACA,eAAA;IACA,gBAAA;IACA,gBAAA;EAEN;AACF;;AACA;EACI,6BAAA;EACA,gBAAA;AAEJ;;AACA;EACI,WAAA;EACA,YAAA;AAEJ;;AACA;EACI,WAAA;EACA,YAAA;AAEJ;;AAEA;EACI;IACI,WAAA;IACA,YAAA;EACN;AACF","sourcesContent":[".video-container-styles{\n    width:60%;\n    margin:0 auto;\n}\n\n.playlist-queue-styles{\n    box-shadow:0px 0px 1px black;\n    display:flex;\n    align-items:center;\n    overflow-x: auto;\n    background: #008fad;\n}\n\n.playlist-queue-item-styles{\n    margin: 5px;\n    cursor: pointer;\n    min-width: 60px;\n    max-width: 60px;\n    min-height: 60px;\n    max-height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border:4px solid transparent;\n\n    @media (max-width: 575px) {\n        margin: 3px;\n        min-width: 40px;\n        max-width: 40px;\n        min-height: 40px;\n        max-height: 40px;\n    }\n}\n\n.current-playing-video-styles{\n    box-shadow:0px 0px 2px white;\n    transition: 0.2s;\n}\n\n.thumbnail-styles{\n    width: 100%;\n    height: 100%;\n}\n\n.video-styles{\n    width: 100%;\n    height: 100%;\n    // object-fit: cover;\n}\n\n@media screen and (max-width: 1024px) {\n    .video-container-styles{\n        width:100%;\n        height: 100%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../fonts/fonts.scss */ "./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.scss");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nli {\n  list-style: none;\n}", "",{"version":3,"sources":["webpack://./src/style/index.scss"],"names":[],"mappings":"AAEA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAAJ;;AAGA;EACI,gBAAA;AAAJ","sourcesContent":["@import url(../fonts/fonts.scss);\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nli {\n    list-style: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.scss":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.scss ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/About/about.scss":
/*!*****************************************!*\
  !*** ./src/components/About/about.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./about.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/About/about.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Anketa/anketa.scss":
/*!*******************************************!*\
  !*** ./src/components/Anketa/anketa.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_anketa_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./anketa.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Anketa/anketa.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_anketa_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_anketa_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_anketa_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_anketa_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Button-prime/button-prime.scss":
/*!*******************************************************!*\
  !*** ./src/components/Button-prime/button-prime.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_button_prime_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./button-prime.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button-prime/button-prime.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_button_prime_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_button_prime_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_button_prime_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_button_prime_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/Footer/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/Header/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Navbar/menu.scss":
/*!*****************************************!*\
  !*** ./src/components/Navbar/menu.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Navbar/navbar.scss":
/*!*******************************************!*\
  !*** ./src/components/Navbar/navbar.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./navbar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/navbar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Text/subtitle.scss":
/*!*******************************************!*\
  !*** ./src/components/Text/subtitle.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./subtitle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/subtitle.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Text/title.scss":
/*!****************************************!*\
  !*** ./src/components/Text/title.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./title.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/title.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/VideoSlider/videoplayer.scss":
/*!*****************************************************!*\
  !*** ./src/components/VideoSlider/videoplayer.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_videoplayer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./videoplayer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/VideoSlider/videoplayer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_videoplayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_videoplayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_videoplayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_videoplayer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/img/About.png":
/*!***************************!*\
  !*** ./src/img/About.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8bbaa84cd7d19d9cd29c.png";

/***/ }),

/***/ "./src/img/Anketa1.jpg":
/*!*****************************!*\
  !*** ./src/img/Anketa1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e4eab92886d39d1f1621.jpg";

/***/ }),

/***/ "./src/img/Header-desctop.png":
/*!************************************!*\
  !*** ./src/img/Header-desctop.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3602012b7ccde69d9979.png";

/***/ }),

/***/ "./src/img/Header.png":
/*!****************************!*\
  !*** ./src/img/Header.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e6da3506ad4b37117a4d.png";

/***/ }),

/***/ "./src/img/Logo.svg":
/*!**************************!*\
  !*** ./src/img/Logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/eb97523d7891921befbf.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"scripts": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_r"] = self["webpackChunkwebpack_r"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-e85cae"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=scripts.d1114f4c2c731bf46f1f.js.map