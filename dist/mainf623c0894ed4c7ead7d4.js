/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\"; /* Reset */\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*,\n*:before,\n*:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:focus,\n:active {\n  outline: none;\n}\n\na:focus,\na:active {\n  outline: none;\n}\n\nnav,\nfooter,\nheader,\naside {\n  display: block;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 14px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\ninput,\nbutton,\ntextarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na,\na:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n\n/*===========*/\nbody {\n  font-family: \"DM Sans\", sans-serif;\n  font-family: \"Roboto\", sans-serif;\n  background-color: #808080;\n}\n\nmain {\n  min-height: 100vh;\n  color: #f2f3f4;\n  width: 100%;\n}\n\n.wrapper {\n  min-height: 100vh;\n  display: flex;\n  column-gap: 15px;\n  justify-content: center;\n}\n\nnav.navigation {\n  position: relative;\n  background-color: #563d3d;\n  transition: all 0.3s ease-in-out;\n  -webkit-box-shadow: 4px 1px 31px 1px #563d3d;\n  -moz-box-shadow: 4px 1px 31px 1px #563d3d;\n  box-shadow: 4px 1px 31px 1px #563d3d;\n}\n\nnav > ul {\n  display: flex;\n  flex-direction: column;\n}\n\n.navigation__list > li > a {\n  text-decoration: none;\n  color: #f2f3f4;\n}\n\n.content {\n  position: relative;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  display: flex;\n  gap: 8px;\n  padding: 16px 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #516644;\n}\n\n.content__wrapper-article {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  padding: 15px 0;\n  align-content: flex-start;\n}\n\n.article {\n  background: #682828;\n  padding: 10px;\n  max-width: 600px;\n}\n\n.content__wrapper {\n  display: flex;\n  gap: 15px;\n  flex-grow: 1;\n}\n\n.aside {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  background-color: #ef5b5b;\n  min-width: 200px;\n}\n\n.aside > p {\n  font-style: italic;\n}\n\n.footer {\n  height: 20%;\n  min-height: 50px;\n  max-height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #76589d;\n}\n\n/*==================*/\n#menu__toggle {\n  opacity: 0;\n  position: absolute;\n  top: 20px;\n  left: 100%;\n  transform: translateX(-120%);\n  width: 25px;\n  height: 25px;\n}\n\n.burger__menu-btn {\n  display: none;\n}\n\n.burger__menu-btn > span,\n.burger__menu-btn > span::before,\n.burger__menu-btn > span::after {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #ffffff;\n  transition: all 0.3s ease-in-out;\n}\n\n.burger__menu-btn > span::before {\n  content: \"\";\n  top: -8px;\n}\n\n.burger__menu-btn > span::after {\n  content: \"\";\n  top: 8px;\n}\n\n.navigation__list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 0;\n  transition: all 0.3s ease-in-out;\n  transition-delay: 0.1s;\n}\n\n.navigation__list-item {\n  display: block;\n  padding: 12px 24px;\n  color: #ffffff;\n  font-weight: 600;\n}\n\n#menu__toggle:checked ~ .burger__menu-btn > span {\n  transform: rotate(45deg);\n}\n\n#menu__toggle:checked ~ .burger__menu-btn > span::before {\n  top: 0;\n  transform: rotate(0);\n}\n\n#menu__toggle:checked ~ .burger__menu-btn > span::after {\n  top: 0;\n  transform: rotate(90deg);\n}\n\n#menu__toggle:checked ~ .navigation__list {\n  min-width: 200px;\n}\n\n/*Accordion*/\n#chck1,\n#chck2 {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n\n.tab {\n  width: 100%;\n  overflow: hidden;\n}\n\n.tab-label {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  background: #f97f7f;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.tab-label:hover {\n  background: #f33c3c;\n}\n\n.tab-label::after {\n  content: \"→\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  transition: all 0.3s ease-in-out;\n}\n\n.tab-content {\n  max-height: 0;\n  padding: 0 1em;\n  transition: all 0.3s ease-in-out;\n}\n\ninput:checked + .tab-label {\n  background: #874545;\n}\n\ninput:checked + .tab-label::after {\n  transform: rotate(90deg);\n}\n\ninput:checked ~ .tab-content {\n  max-height: 100vh;\n  padding: 1em;\n}\n\n/*Dropdown*/\n.dropbtn {\n  background-color: #3a4eca;\n  color: #f2f3f4;\n  padding: 16px;\n  border: none;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n  width: min-content;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #e7fcff;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {\n  background-color: #94cfff;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n  transition: all 0.3s ease-in-out;\n}\n\n.dropdown:hover .dropbtn {\n  background-color: #5876c9;\n  transition: all 0.3s ease-in-out;\n}\n\n.dropdown__wrapper {\n  display: flex;\n  gap: 8px;\n}\n\n@media screen and (min-width: 0) and (max-width: 599.99px) {\n  .content {\n    padding: 0;\n    flex-grow: 1;\n  }\n  .wrapper {\n    flex-direction: column;\n  }\n  .content__wrapper {\n    flex-direction: column-reverse;\n    justify-content: flex-end;\n  }\n  #menu__toggle ~ .navigation__list {\n    height: 50px;\n  }\n  #menu__toggle ~ .navigation__list > li {\n    visibility: hidden;\n  }\n  #menu__toggle:checked ~ .navigation__list {\n    height: auto;\n  }\n  #menu__toggle:checked ~ .navigation__list > li {\n    visibility: visible;\n  }\n  .navigation {\n    width: 100% !important;\n  }\n  .burger__menu-btn {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    top: 50%;\n    left: 100%;\n    transform: translateX(-120%) translateY(-50%);\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n    z-index: 5;\n  }\n  /*Dropdown*/\n  .dropdown {\n    display: flex;\n    flex-direction: column;\n    width: auto;\n  }\n  .dropdown-content {\n    position: static;\n  }\n  .dropdown-content a:focus {\n    background-color: #94cfff;\n  }\n  .dropdown:focus .dropdown-content {\n    display: block;\n    transition: all 0.3s ease-in-out;\n  }\n  .dropdown:focus .dropbtn {\n    background-color: #5876c9;\n    transition: all 0.3s ease-in-out;\n  }\n  .dropdown__wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    align-self: flex-start;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 904.99px) {\n  .aside {\n    max-width: 150px;\n  }\n}\n@media screen and (min-width: 905px) and (max-width: 1239.99px) {\n  .aside {\n    width: 30%;\n  }\n  .content__wrapper-article {\n    width: 70%;\n    justify-content: space-between;\n  }\n  .article {\n    width: 45%;\n  }\n}\n@media screen and (min-width: 1240px) and (max-width: 1439.99px) {\n  .aside {\n    width: 30%;\n  }\n  .content__wrapper {\n    display: flex;\n    gap: 15px;\n    flex-grow: 1;\n    justify-content: space-between;\n  }\n  .content__wrapper-article {\n    width: 70%;\n    justify-content: space-between;\n  }\n  .article {\n    width: 45%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/reset.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap');\r\n@import './reset.scss';\r\n\r\n/*===========*/\r\nbody {\r\n   font-family: 'DM Sans', sans-serif;\r\n   font-family: 'Roboto', sans-serif;\r\n   background-color: #808080;\r\n}\r\n\r\nmain {\r\n   min-height: 100vh;\r\n   color: #f2f3f4;\r\n   width: 100%;\r\n}\r\n\r\n.wrapper {\r\n   min-height: 100vh;\r\n   display: flex;\r\n   column-gap: 15px;\r\n   justify-content: center;\r\n}\r\n\r\nnav.navigation {\r\n   position: relative;\r\n   background-color: #563d3d;\r\n   transition: all 0.3s ease-in-out;\r\n   -webkit-box-shadow: 4px 1px 31px 1px #563d3d;\r\n   -moz-box-shadow: 4px 1px 31px 1px #563d3d;\r\n   box-shadow: 4px 1px 31px 1px #563d3d;\r\n}\r\n\r\nnav > ul {\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n\r\n.navigation__list > li > a {\r\n   text-decoration: none;\r\n   color: #f2f3f4;\r\n}\r\n\r\n.content {\r\n   position: relative;\r\n   padding: 0 15px;\r\n\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: space-between;\r\n}\r\n\r\n.header {\r\n   position: sticky;\r\n   top: 0;\r\n   z-index: 10;\r\n   display: flex;\r\n   gap: 8px;\r\n   padding: 16px 0;\r\n   flex-direction: column;\r\n   align-items: center;\r\n   justify-content: center;\r\n   background-color: #516644;\r\n}\r\n\r\n.content__wrapper-article {\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n   gap: 15px;\r\n   padding: 15px 0;\r\n   align-content: flex-start;\r\n}\r\n\r\n.article {\r\n   background: #682828;\r\n   padding: 10px;\r\n   max-width: 600px;\r\n}\r\n\r\n.content__wrapper {\r\n   display: flex;\r\n   gap: 15px;\r\n   flex-grow: 1;\r\n}\r\n\r\n.aside {\r\n   display: flex;\r\n   flex-direction: column;\r\n   padding: 15px;\r\n   background-color: #ef5b5b;\r\n   min-width: 200px;\r\n}\r\n\r\n.aside > p {\r\n   font-style: italic;\r\n}\r\n\r\n.footer {\r\n   height: 20%;\r\n   min-height: 50px;\r\n   max-height: 150px;\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   background-color: #76589d;\r\n}\r\n\r\n/*==================*/\r\n\r\n#menu__toggle {\r\n   opacity: 0;\r\n   position: absolute;\r\n   top: 20px;\r\n   left: 100%;\r\n   transform: translateX(-120%);\r\n   width: 25px;\r\n   height: 25px;\r\n}\r\n\r\n.burger__menu-btn {\r\n   display: none;\r\n}\r\n\r\n.burger__menu-btn > span,\r\n.burger__menu-btn > span::before,\r\n.burger__menu-btn > span::after {\r\n   display: block;\r\n   position: absolute;\r\n   width: 100%;\r\n   height: 2px;\r\n   background-color: #ffffff;\r\n   transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.burger__menu-btn > span::before {\r\n   content: '';\r\n   top: -8px;\r\n}\r\n\r\n.burger__menu-btn > span::after {\r\n   content: '';\r\n   top: 8px;\r\n}\r\n\r\n.navigation__list {\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: flex-start;\r\n   margin: 0;\r\n   transition: all 0.3s ease-in-out;\r\n   transition-delay: 0.1s;\r\n}\r\n\r\n.navigation__list-item {\r\n   display: block;\r\n   padding: 12px 24px;\r\n   color: #ffffff;\r\n   font-weight: 600;\r\n}\r\n\r\n#menu__toggle:checked ~ .burger__menu-btn > span {\r\n   transform: rotate(45deg);\r\n}\r\n\r\n#menu__toggle:checked ~ .burger__menu-btn > span::before {\r\n   top: 0;\r\n   transform: rotate(0);\r\n}\r\n\r\n#menu__toggle:checked ~ .burger__menu-btn > span::after {\r\n   top: 0;\r\n   transform: rotate(90deg);\r\n}\r\n\r\n#menu__toggle:checked ~ .navigation__list {\r\n   min-width: 200px;\r\n}\r\n\r\n/*Accordion*/\r\n#chck1,\r\n#chck2 {\r\n   position: absolute;\r\n   opacity: 0;\r\n   z-index: -1;\r\n}\r\n\r\n.tab {\r\n   width: 100%;\r\n   overflow: hidden;\r\n}\r\n\r\n.tab-label {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   padding: 15px;\r\n   background: #f97f7f;\r\n   font-weight: bold;\r\n   cursor: pointer;\r\n}\r\n\r\n.tab-label:hover {\r\n   background: #f33c3c;\r\n}\r\n\r\n.tab-label::after {\r\n   content: '\\2192';\r\n   width: 1em;\r\n   height: 1em;\r\n   text-align: center;\r\n   transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.tab-content {\r\n   max-height: 0;\r\n   padding: 0 1em;\r\n   transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput:checked + .tab-label {\r\n   background: #874545;\r\n}\r\n\r\ninput:checked + .tab-label::after {\r\n   transform: rotate(90deg);\r\n}\r\n\r\ninput:checked ~ .tab-content {\r\n   max-height: 100vh;\r\n   padding: 1em;\r\n}\r\n\r\n/*Dropdown*/\r\n.dropbtn {\r\n   background-color: #3a4eca;\r\n   color: #f2f3f4;\r\n   padding: 16px;\r\n   border: none;\r\n}\r\n\r\n.dropdown {\r\n   position: relative;\r\n   display: inline-block;\r\n   width: min-content;\r\n}\r\n\r\n.dropdown-content {\r\n   display: none;\r\n   position: absolute;\r\n   background-color: #e7fcff;\r\n   min-width: 160px;\r\n   box-shadow: 0px 8px 16px 0px #00000033;\r\n   z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n   color: black;\r\n   padding: 12px 16px;\r\n   text-decoration: none;\r\n   display: block;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n   background-color: #94cfff;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n   display: block;\r\n   transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.dropdown:hover .dropbtn {\r\n   background-color: #5876c9;\r\n   transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.dropdown__wrapper {\r\n   display: flex;\r\n   gap: 8px;\r\n}\r\n\r\n@media screen and (min-width: 0) and (max-width: 599.99px) {\r\n   .content {\r\n      padding: 0;\r\n      flex-grow: 1;\r\n   }\r\n\r\n   .wrapper {\r\n      flex-direction: column;\r\n   }\r\n\r\n   .content__wrapper {\r\n      flex-direction: column-reverse;\r\n      justify-content: flex-end;\r\n   }\r\n\r\n   #menu__toggle ~ .navigation__list {\r\n      height: 50px;\r\n   }\r\n   #menu__toggle ~ .navigation__list > li {\r\n      visibility: hidden;\r\n   }\r\n\r\n   #menu__toggle:checked ~ .navigation__list {\r\n      height: auto;\r\n   }\r\n\r\n   #menu__toggle:checked ~ .navigation__list > li {\r\n      visibility: visible;\r\n   }\r\n\r\n   .navigation {\r\n      width: 100% !important;\r\n   }\r\n\r\n   .burger__menu-btn {\r\n      display: flex;\r\n      align-items: center;\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 100%;\r\n      transform: translateX(-120%) translateY(-50%);\r\n      width: 25px;\r\n      height: 25px;\r\n      cursor: pointer;\r\n      z-index: 5;\r\n   }\r\n\r\n   /*Dropdown*/\r\n\r\n   .dropdown {\r\n      display: flex;\r\n      flex-direction: column;\r\n      width: auto;\r\n   }\r\n\r\n   .dropdown-content {\r\n      position: static;\r\n   }\r\n\r\n   .dropdown-content a:focus {\r\n      background-color: #94cfff;\r\n   }\r\n\r\n   .dropdown:focus .dropdown-content {\r\n      display: block;\r\n      transition: all 0.3s ease-in-out;\r\n   }\r\n\r\n   .dropdown:focus .dropbtn {\r\n      background-color: #5876c9;\r\n      transition: all 0.3s ease-in-out;\r\n   }\r\n\r\n   .dropdown__wrapper {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 8px;\r\n      align-self: flex-start;\r\n   }\r\n}\r\n\r\n@media screen and (min-width: 600px) and (max-width: 904.99px) {\r\n   .aside {\r\n      max-width: 150px;\r\n   }\r\n}\r\n\r\n@media screen and (min-width: 905px) and (max-width: 1239.99px) {\r\n   .aside {\r\n      width: 30%;\r\n   }\r\n   .content__wrapper-article {\r\n      width: 70%;\r\n      justify-content: space-between;\r\n   }\r\n   .article {\r\n      width: 45%;\r\n   }\r\n}\r\n\r\n@media screen and (min-width: 1240px) and (max-width: 1439.99px) {\r\n   .aside {\r\n      width: 30%;\r\n   }\r\n   .content__wrapper {\r\n      display: flex;\r\n      gap: 15px;\r\n      flex-grow: 1;\r\n      justify-content: space-between;\r\n   }\r\n\r\n   .content__wrapper-article {\r\n      width: 70%;\r\n      justify-content: space-between;\r\n   }\r\n   .article {\r\n      width: 45%;\r\n   }\r\n}\r\n","/* Reset */\r\n* {\r\n   padding: 0;\r\n   margin: 0;\r\n   border: 0;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n   -moz-box-sizing: border-box;\r\n   -webkit-box-sizing: border-box;\r\n   box-sizing: border-box;\r\n}\r\n\r\n:focus,\r\n:active {\r\n   outline: none;\r\n}\r\n\r\na:focus,\r\na:active {\r\n   outline: none;\r\n}\r\n\r\nnav,\r\nfooter,\r\nheader,\r\naside {\r\n   display: block;\r\n}\r\n\r\nhtml,\r\nbody {\r\n   min-height: 100vh;\r\n   font-size: 100%;\r\n   line-height: 1;\r\n   font-size: 14px;\r\n   -ms-text-size-adjust: 100%;\r\n   -moz-text-size-adjust: 100%;\r\n   -webkit-text-size-adjust: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea {\r\n   font-family: inherit;\r\n}\r\n\r\ninput::-ms-clear {\r\n   display: none;\r\n}\r\n\r\nbutton {\r\n   cursor: pointer;\r\n}\r\n\r\nbutton::-moz-focus-inner {\r\n   padding: 0;\r\n   border: 0;\r\n}\r\n\r\na,\r\na:visited {\r\n   text-decoration: none;\r\n}\r\n\r\na:hover {\r\n   text-decoration: none;\r\n}\r\n\r\nul li {\r\n   list-style: none;\r\n}\r\n\r\nimg {\r\n   vertical-align: top;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n   font-size: inherit;\r\n   font-weight: 400;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");


})();

/******/ })()
;
//# sourceMappingURL=mainf623c0894ed4c7ead7d4.js.map