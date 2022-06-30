/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0px;\\r\\n  margin: 0px;\\r\\n  font-family: Arial, Helvetica;\\r\\n}\\r\\n\\r\\n.content-div {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n.header-div {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-end;\\r\\n  padding: 1rem 4rem 1rem 4rem;\\r\\n  box-shadow: 0 5px 10px #ddd;\\r\\n  background-color: lightgrey;\\r\\n  border-bottom: solid black 5px;\\r\\n}\\r\\n#nav-title {\\r\\n  color: #000;\\r\\n  margin-right: auto;\\r\\n  text-decoration: 2px underline;\\r\\n}\\r\\nheader li {\\r\\n  list-style: none;\\r\\n  display: inline-block;\\r\\n  padding: 0 20px;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\nheader a {\\r\\n  text-decoration: none;\\r\\n  color: #555;\\r\\n  transition: all 0.3s ease 0s;\\r\\n}\\r\\nheader a:hover {\\r\\n  color: #96c5c1;\\r\\n}\\r\\nmain {\\r\\n  flex-grow: 1;\\r\\n}\\r\\n.main-div {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 5rem;\\r\\n}\\r\\n.btn-main {\\r\\n  width: 180px;\\r\\n  height: 80px;\\r\\n  border: none;\\r\\n  border: solid 2px rgb(255, 255, 255);\\r\\n  color: white;\\r\\n  font-weight: bolder;\\r\\n  border-radius: 5px;\\r\\n  background: hsla(9, 100%, 65%, 0.5);\\r\\n  font-size: 25px;\\r\\n  transition-duration: 0.8s;\\r\\n}\\r\\n\\r\\n.btn-main:hover {\\r\\n  background: hsla(9, 100%, 65%, 1);\\r\\n  color: black;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.footer-div {\\r\\n  margin-top: auto;\\r\\n  height: 50px;\\r\\n  color: #fff;\\r\\n  background-color: #000;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.main-menu {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.menu-title {\\r\\n  color: white;\\r\\n  text-decoration: underline;\\r\\n  padding: 1rem;\\r\\n}\\r\\n.menu-div {\\r\\n  min-height: 70vh;\\r\\n  border: solid hsla(0, 100%, 55%, 0.8) 0.8rem;\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  padding: 10px;\\r\\n  gap: 6rem;\\r\\n  border-radius: 4%;\\r\\n}\\r\\n.menu-item {\\r\\n  border: solid white 1px;\\r\\n  border-radius: 5%;\\r\\n  background: black;\\r\\n  color: white;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 1rem;\\r\\n}\\r\\n.item-title {\\r\\n  font-size: 1.5rem;\\r\\n  text-decoration: underline;\\r\\n  padding-bottom: 1rem;\\r\\n}\\r\\n.item-content {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n.main-contact {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: white;\\r\\n}\\r\\n.contact-wrapper {\\r\\n  min-height: 65vh;\\r\\n  max-width: 70vw;\\r\\n  display: grid;\\r\\n  grid-template-columns: 2fr 1fr;\\r\\n  background-color: white;\\r\\n}\\r\\n.form-wrapper {\\r\\n  border-radius: 5px;\\r\\n  background-color: #f2f2f2;\\r\\n  padding: 25px;\\r\\n}\\r\\nform {\\r\\n  flex-grow: 1;\\r\\n  margin: 5px;\\r\\n}\\r\\n#form-intro {\\r\\n  padding-bottom: 1.5rem;\\r\\n}\\r\\ninput[type=\\\"text\\\"],\\r\\nselect,\\r\\ninput[type=\\\"email\\\"],\\r\\ninput[type=\\\"tel\\\"] {\\r\\n  width: 100%;\\r\\n  padding: 12px 20px;\\r\\n  margin: 8px 0;\\r\\n  display: inline-block;\\r\\n  border: 1px solid #ccc;\\r\\n  border-radius: 4px;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\ninput[type=\\\"submit\\\"] {\\r\\n  width: 100%;\\r\\n  background-color: #e21339;\\r\\n  color: white;\\r\\n  padding: 14px 20px;\\r\\n  margin: 8px 0;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput[type=\\\"submit\\\"]:hover {\\r\\n  background-color: #be1635;\\r\\n}\\r\\n\\r\\n.contact-info {\\r\\n  padding-top: 3rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 5rem;\\r\\n  background-color: #d21033;\\r\\n  color: white;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n.contact-title {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n.tel-title,\\r\\n.adress-title {\\r\\n  font-size: 1.5rem;\\r\\n  padding-bottom: 1rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Contact Page\r\n\r\nfunction renderContactPage() {\r\n  let mainDiv = document.createElement(\"main\");\r\n  mainDiv.className = \"main-contact\";\r\n\r\n  let contactWrapper = document.createElement(\"div\");\r\n  contactWrapper.className = \"contact-wrapper\";\r\n\r\n  let newForm = createForm();\r\n  let infoWrapper = createInfoSection();\r\n\r\n  contactWrapper.append(newForm, infoWrapper);\r\n  mainDiv.append(contactWrapper);\r\n\r\n  return mainDiv;\r\n}\r\n\r\nfunction createInfoSection() {\r\n  let contactInfoWrapper = document.createElement(\"div\");\r\n  contactInfoWrapper.className = \"contact-info\";\r\n\r\n  let contactTitle = document.createElement(\"h2\");\r\n  contactTitle.className = \"contact-title\";\r\n  let contactTitleNode = document.createTextNode(\"Contact Us!\");\r\n  contactTitle.appendChild(contactTitleNode);\r\n\r\n  let telDiv = document.createElement(\"div\");\r\n  telDiv.className = \"tel-div\";\r\n\r\n  let telTitle = document.createElement(\"p\");\r\n  telTitle.className = \"tel-title\";\r\n  let telNode = document.createTextNode(\"Telephone Nr.\");\r\n  telTitle.appendChild(telNode);\r\n\r\n  let telnrPara = document.createElement(\"p\");\r\n  telnrPara.className = \"telnr-p\";\r\n  let telnrparaNode = document.createTextNode(\"+123-123456789\");\r\n  telnrPara.appendChild(telnrparaNode);\r\n\r\n  telDiv.append(telTitle, telnrPara);\r\n\r\n  let adressDiv = document.createElement(\"div\");\r\n  adressDiv.className = \"adress-div\";\r\n\r\n  let adressTitle = document.createElement(\"p\");\r\n  adressTitle.className = \"adress-title\";\r\n  let adressTitleNode = document.createTextNode(\"Local Adress\");\r\n  adressTitle.appendChild(adressTitleNode);\r\n\r\n  let adressPara = document.createElement(\"p\");\r\n  adressPara.className = \"adress-p\";\r\n  let adressParaNode = document.createTextNode(\"Fake Street 123\");\r\n  adressPara.appendChild(adressParaNode);\r\n\r\n  adressDiv.append(adressTitle, adressPara);\r\n\r\n  contactInfoWrapper.append(contactTitle, telDiv, adressDiv);\r\n\r\n  return contactInfoWrapper;\r\n}\r\n\r\nfunction createForm() {\r\n  // Main Form wrapper\r\n  let formWrapper = document.createElement(\"div\");\r\n  formWrapper.className = \"form-wrapper\";\r\n\r\n  // Heading for form\r\n  let formIntro = document.createElement(\"h1\");\r\n  formIntro.className = \"form-intro\";\r\n  let formIntroNode = document.createTextNode(\"Feedback\");\r\n  formIntro.appendChild(formIntroNode);\r\n\r\n  // Form\r\n  let contactForm = document.createElement(\"form\");\r\n  contactForm.setAttribute(\"method\", \"post\");\r\n  contactForm.setAttribute(\"action\", \"#\");\r\n\r\n  //Labels for all Form Elements\r\n  let labelFname = document.createElement(\"label\");\r\n  labelFname.setAttribute(\"for\", \"fname\");\r\n  labelFname.innerHTML = \"First Name\";\r\n\r\n  let labelLname = document.createElement(\"label\");\r\n  labelLname.setAttribute(\"for\", \"lname\");\r\n  labelLname.innerHTML = \"Last Name\";\r\n\r\n  let labelEmail = document.createElement(\"label\");\r\n  labelEmail.setAttribute(\"for\", \"email\");\r\n  labelEmail.innerHTML = \"E-Mail\";\r\n\r\n  let labelTelnr = document.createElement(\"label\");\r\n  labelTelnr.setAttribute(\"for\", \"telNumber\");\r\n  labelTelnr.innerHTML = \"Telephone Number\";\r\n\r\n  let labelCategory = document.createElement(\"label\");\r\n  labelCategory.setAttribute(\"for\", \"Category\");\r\n  labelCategory.innerHTML = \"Category\";\r\n\r\n  // Create an input element for First Name\r\n  let inputFName = document.createElement(\"input\");\r\n  inputFName.setAttribute(\"type\", \"text\");\r\n  inputFName.setAttribute(\"id\", \"fname\");\r\n  inputFName.setAttribute(\"name\", \"firstname\");\r\n  inputFName.setAttribute(\"placeholder\", \"Your name..\");\r\n  inputFName.setAttribute(\"required\", \"\");\r\n\r\n  // Create an input element for Last Name\r\n  let inputLName = document.createElement(\"input\");\r\n  inputLName.setAttribute(\"type\", \"text\");\r\n  inputLName.setAttribute(\"id\", \"lname\");\r\n  inputLName.setAttribute(\"name\", \"lastname\");\r\n  inputLName.setAttribute(\"placeholder\", \"Your last name..\");\r\n  inputLName.setAttribute(\"required\", \"\");\r\n\r\n  // Create an input element for E-Mail\r\n  let inpuEmail = document.createElement(\"input\");\r\n  inpuEmail.setAttribute(\"type\", \"email\");\r\n  inpuEmail.setAttribute(\"id\", \"email\");\r\n  inpuEmail.setAttribute(\"name\", \"emailAdress\");\r\n  inpuEmail.setAttribute(\"placeholder\", \"BurgerLover@mail.com\");\r\n  inpuEmail.setAttribute(\"required\", \"\");\r\n\r\n  // Create an input element for Tel-Number\r\n  let inputTelnr = document.createElement(\"input\");\r\n  inputTelnr.setAttribute(\"type\", \"tel\");\r\n  inputTelnr.setAttribute(\"id\", \"telNumber\");\r\n  inputTelnr.setAttribute(\"name\", \"telephoneNumber\");\r\n  inputTelnr.setAttribute(\"placeholder\", \"+123-45678910\");\r\n\r\n  // Create an Select element for Category\r\n  let inputCategory = document.createElement(\"select\");\r\n  inputCategory.setAttribute(\"id\", \"Category\");\r\n  inputCategory.setAttribute(\"name\", \"Category\");\r\n\r\n  let opt1 = document.createElement(\"option\");\r\n  let opt2 = document.createElement(\"option\");\r\n  let opt3 = document.createElement(\"option\");\r\n\r\n  opt1.value = \"food&beverage\";\r\n  opt1.text = \"Food & Beverage\";\r\n\r\n  opt2.value = \"service\";\r\n  opt2.text = \"Service\";\r\n\r\n  opt3.value = \"other\";\r\n  opt3.text = \"Other\";\r\n\r\n  inputCategory.add(opt1, null);\r\n  inputCategory.add(opt2, null);\r\n  inputCategory.add(opt3, null);\r\n\r\n  // Create a submit button\r\n  let btnSubmitForm = document.createElement(\"input\");\r\n  btnSubmitForm.setAttribute(\"type\", \"submit\");\r\n  btnSubmitForm.setAttribute(\"value\", \"Submit\");\r\n\r\n  // Append Form\r\n  contactForm.append(\r\n    labelFname,\r\n    inputFName,\r\n    labelLname,\r\n    inputLName,\r\n    labelEmail,\r\n    inpuEmail,\r\n    labelTelnr,\r\n    inputTelnr,\r\n    labelCategory,\r\n    inputCategory,\r\n    btnSubmitForm\r\n  );\r\n\r\n  formWrapper.append(formIntro, contactForm);\r\n\r\n  return formWrapper;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContactPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderFooter() {\r\n  let footerDiv = document.createElement(\"footer\");\r\n  footerDiv.className = \"footer-div\";\r\n  footerDiv.innerHTML = \"Footer\";\r\n  return footerDiv;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFooter);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderHeader() {\r\n  let headerDiv = document.createElement(\"header\");\r\n  headerDiv.innerHTML = \"\";\r\n  headerDiv.className = \"header-div\";\r\n\r\n  const navTitle = document.createElement(\"H1\");\r\n  navTitle.setAttribute(\"id\", \"nav-title\");\r\n  const textNode = document.createTextNode(\"The Burger Palace\");\r\n  navTitle.appendChild(textNode);\r\n\r\n  let navSection = document.createElement(\"nav\");\r\n  let listStart = document.createElement(\"ul\");\r\n  let listelement1 = document.createElement(\"li\");\r\n  let listelement2 = document.createElement(\"li\");\r\n  let listelement3 = document.createElement(\"li\");\r\n  listelement1.innerHTML = '<a class=\"btn-home\" href=\"#\">Home</a>';\r\n  listelement2.innerHTML = '<a class=\"btn-menu\" href=\"#\">Menu</a>';\r\n  listelement3.innerHTML = '<a class=\"btn-contact\" href=\"#\">Contact</a>';\r\n  listStart.append(listelement1, listelement2, listelement3);\r\n\r\n  navSection.append(listStart);\r\n  headerDiv.append(navTitle, navSection);\r\n\r\n  return headerDiv;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _introPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introPage */ \"./src/introPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(123);\r\n\r\nlet contentDiv = document.querySelector(\".content-div\");\r\n\r\ncontentDiv.append((0,_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_introPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), (0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n\r\nlet mainDiv = contentDiv.children[1];\r\n\r\n// All the Nav Btns\r\nlet btnHome = document.querySelector(\".btn-home\");\r\nlet btnMenu = document.querySelector(\".btn-menu\");\r\nlet btnContact = document.querySelector(\".btn-contact\");\r\nlet btnContactUs = document.querySelector(\".btn-contact-us\");\r\n\r\nbtnHome.addEventListener(\"click\", () => {\r\n  contentDiv.replaceChild((0,_introPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), mainDiv);\r\n  mainDiv = contentDiv.children[1];\r\n  btnContactUs = document.querySelector(\".btn-contact-us\");\r\n});\r\n\r\nbtnMenu.addEventListener(\"click\", () => {\r\n  contentDiv.replaceChild((0,_menuPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), mainDiv);\r\n  mainDiv = contentDiv.children[1];\r\n});\r\n\r\nbtnContact.addEventListener(\"click\", () => {\r\n  contentDiv.replaceChild((0,_contactPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), mainDiv);\r\n  mainDiv = contentDiv.children[1];\r\n});\r\n\r\nbtnContactUs.addEventListener(\"click\", () => {\r\n  contentDiv.replaceChild((0,_contactPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), mainDiv);\r\n  mainDiv = contentDiv.children[1];\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/introPage.js":
/*!**************************!*\
  !*** ./src/introPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderIntroPage() {\r\n  let mainDiv = document.createElement(\"main\");\r\n  mainDiv.className = \"main-div\";\r\n  let btnOrder = document.createElement(\"button\");\r\n  btnOrder.className = \"btn-main btn-order-food\";\r\n  btnOrder.textContent = \"Order Food!\";\r\n  let btnContact = document.createElement(\"button\");\r\n  btnContact.className = \"btn-main btn-contact-us\";\r\n  btnContact.textContent = \"Contact Us!\";\r\n  mainDiv.append(btnOrder, btnContact);\r\n\r\n  mainDiv.style.backgroundImage = \"url(bgBurger.jpg)\";\r\n  mainDiv.style.backgroundSize = \"stretch\";\r\n  mainDiv.style.backgroundRepeat = \"no-repeat\";\r\n  mainDiv.style.backgroundPosition = \"center bottom\";\r\n  mainDiv.style.backgroundAttachment = \"fixed\";\r\n\r\n  return mainDiv;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderIntroPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/introPage.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderMenuPage() {\r\n  let mainDiv = document.createElement(\"main\");\r\n  mainDiv.className = \"main-menu\";\r\n  let menuTitle = document.createElement(\"H1\");\r\n  menuTitle.className = \"menu-title\";\r\n  menuTitle.textContent = \"Our Menu\";\r\n  let menuDiv = document.createElement(\"div\");\r\n  menuDiv.className = \"menu-div\";\r\n\r\n  let item1 = createItem(\r\n    \"The Classic\",\r\n    \"Our Classic burger never changin always Delicious!\"\r\n  );\r\n  let item2 = createItem(\r\n    \"Cheese Burger\",\r\n    \"Our Classic burger but with some Extra Cheese on it!\"\r\n  );\r\n  let item3 = createItem(\r\n    \"Chicken Burger\",\r\n    \"Same concept just replacing the beef with Chicken!\"\r\n  );\r\n  let item4 = createItem(\r\n    \"Jalapeno Special\",\r\n    \"Our Classic burger never changin always Delicious!\"\r\n  );\r\n  let item5 = createItem(\r\n    \"The 10k Cal Burger\",\r\n    \"For that one hungry person still bulking!\"\r\n  );\r\n  let item6 = createItem(\r\n    \"The Vegan\",\r\n    \"I can not believe this is not meat! Same Taste different meat!\"\r\n  );\r\n  menuDiv.append(item1, item2, item3, item4, item5, item6);\r\n\r\n  // Background Image\r\n  mainDiv.style.backgroundImage = \"url(bgBurger.jpg)\";\r\n  mainDiv.style.backgroundSize = \"stretch\";\r\n  mainDiv.style.backgroundRepeat = \"no-repeat\";\r\n  mainDiv.style.backgroundPosition = \"center bottom\";\r\n  mainDiv.style.backgroundAttachment = \"fixed\";\r\n\r\n  mainDiv.append(menuTitle, menuDiv);\r\n  return mainDiv;\r\n}\r\n\r\nfunction createItem(title, content) {\r\n  let wrapper = document.createElement(\"div\");\r\n  wrapper.className = \"menu-item\";\r\n  let span1 = document.createElement(\"span\");\r\n  span1.className = \"item-title\";\r\n  span1.textContent = title;\r\n  let span2 = document.createElement(\"span\");\r\n  span2.className = \"item-content\";\r\n  span2.textContent = content;\r\n\r\n  wrapper.append(span1, span2);\r\n  return wrapper;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;