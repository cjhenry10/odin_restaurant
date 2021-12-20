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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --dark: black;\\n    --darkA: rgba(0,0,0,0.9);\\n    --med: gray;\\n    --light: beige;\\n    /* --accent: hsl(251, 100%, 64%); */\\n    --accent: rgb(77, 139, 77);\\n  }\\n\\nhtml {\\n    scroll-behavior: smooth;\\n}\\n\\nbody {\\n    overflow-x: hidden;\\n    margin: 0 auto;\\n    padding: 0;\\n    display: block;\\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n    text-align: center;\\n    background-color: var(--light);\\n}\\n\\nbody.preload * {\\n    animation-duration: 0s !important;\\n    transition: opacity 0s !important;\\n}\\n\\n@keyframes opacity{\\n    from {\\n        opacity: 1;\\n    }\\n    to {\\n        opacity: 0;\\n    }\\n}\\n@keyframes show {\\n    from {\\n        opacity: 0;\\n    }\\n    to {\\n        opacity: 1;\\n    }\\n}\\n\\n.hidden {\\n    /* display: none; */\\n    /* transition: opacity 1s ease-out; */\\n    animation-name: opacity;\\n    animation-duration: 1s;\\n    animation-iteration-count: 1;\\n    opacity: 0;\\n    /* height: 0; */\\n}\\n\\n.show {\\n    animation-name: show;\\n    animation-duration: 2s;\\n    animation-iteration-count: 1;\\n    opacity: 1;\\n    /* height: auto; */\\n}\\n\\n#content {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    align-items: flex-start;\\n    align-content: flex-start;\\n    flex-direction: row;\\n    height: 100%;\\n}\\n\\n#content > * {\\n    position: absolute;\\n    width: 80%;\\n    /* border: 2px solid gray; */\\n    /* padding: 12vh 10vw 0; */\\n    margin: 75px 10vw 0;\\n\\n}\\n\\n\\n\\n.navbar {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    background-color: var(--accent);\\n    position: fixed;\\n    top:0;\\n    left: 10%;\\n    width: 80%;\\n    z-index: 1000;\\n    transition: 0.3s ease-in-out;\\n    margin: 0 auto 25px;\\n    box-shadow: 0 8px 15px -6px black;\\n    border-bottom-left-radius: 10px;\\n    border-bottom-right-radius: 10px;\\n  }\\n  \\n  .navbar-links ul {\\n    margin: 0 auto;\\n    padding: 0 5px;\\n    display: flex;\\n    justify-content: center;\\n  }\\n  \\n  .navbar-links li {\\n    list-style: none;\\n    border-bottom: 4px solid transparent;\\n  }\\n  \\n  .navbar-links li a {\\n    text-decoration: none;\\n    color: var(--light);\\n    padding: 1rem;\\n    display: block;\\n    font-variant: small-caps;\\n    font-size: 1.5rem;\\n  }\\n  \\n  .navbar-links li:hover {\\n    border-bottom: 4px solid var(--light);\\n  }\\n  \\n  .navbar-links li a:hover {\\n    color: var(--light);\\n    cursor: pointer;\\n  }\\n  \\n  .toggle-button {\\n    position: absolute;\\n    top: .75rem;\\n    right: 1rem;\\n    display: none;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    width: 30px;\\n    height: 21px;\\n  }\\n  \\n  .toggle-button .bar {\\n    height: 3px;\\n    width: 100%;\\n    background-color: var(--light);\\n    border-radius: 10px;\\n  }\\n  \\n  @media (max-width: 600px) {\\n    .toggle-button {\\n        display: flex;\\n    }\\n  \\n    .navbar-links {\\n        display: none;\\n        width: 100%;\\n    }\\n  \\n    .navbar {\\n        flex-direction: column;\\n        align-items: flex-start;\\n        /* background-color: var(--dark); */\\n        width: 100%;\\n        left: 0;\\n        min-height: 50px;\\n    }\\n  \\n    .navbar-links ul {\\n        width: 100%;\\n        flex-direction: column;\\n        padding: 0;\\n    }\\n  \\n    .navbar-links li {\\n        text-align: center;\\n    }\\n  \\n    .navbar-links li a {\\n        padding: .75rem 1rem;\\n    }\\n  \\n    .navbar-links.active {\\n        display: flex;\\n    }\\n  }\\n\\n  img {\\n      max-width: 80%;\\n      height: auto;\\n  }\\n\\n#menu {\\n    padding-top: 60px;\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    align-items: flex-start;\\n    align-content: flex-start;\\n    flex-direction: row;\\n    height: 100%;\\n}\\n\\n  .menu-block {\\n      width: 40%;\\n      /* height: 60%; */\\n      border: 1px solid black;\\n      margin: 5px;\\n      padding: 5px;\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin_restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin_restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navbar.js */ \"./src/modules/navbar.js\");\n/* harmony import */ var _modules_sections_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sections.js */ \"./src/modules/sections.js\");\n/* harmony import */ var _img_restaurant1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/restaurant1.jpg */ \"./src/img/restaurant1.jpg\");\n\n\n\n\n\nconst sections = [\"about\", \"menu\", \"contact\"];\n\n(0,_modules_navbar_js__WEBPACK_IMPORTED_MODULE_1__.constructNavbar)(sections);\n\n// createPageElement(\n//     \"HTML Element\",\n//     \"Parent Element Id\",\n//     \"Text Content\",\n//     \"Id\",\n//     \"Class\",\n// );\n\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"section\",\n    \"content\",\n    \"\",\n    sections[0],\n    \"show\"\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"h1\",\n    sections[0],\n    \"About Us\",\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"p\",\n    sections[0],\n    `Our restaurant has been around for 3 days. We do not have food.\n    Please do not come here. Thank you.`,\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"p\",\n    sections[0],\n    \"hello\",\n);\n\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createImageElement)(\n    sections[0],\n    _img_restaurant1_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    \"picture of a vegetable bowl\",\n\n);\n\n\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"section\",\n    \"content\",\n    \"\",\n    sections[1],\n);\n\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"div\",\n    sections[1],\n    \"Salad #1 - $9.99\",\n    \"salad-1\",\n    \"menu-block\",\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"div\",\n    sections[1],\n    \"Salad #2 - $12.99\",\n    \"salad-2\",\n    \"menu-block\",\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createImageElement)(\n    \"salad-1\",\n    _img_restaurant1_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    \"picture of a vegetable bowl\",\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createImageElement)(\n    \"salad-2\",\n    _img_restaurant1_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    \"picture of a vegetable bowl\",\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"div\",\n    sections[1],\n    \"Salad #3 - $7.99\",\n    \"salad-3\",\n    \"menu-block\",\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"div\",\n    sections[1],\n    \"Salad #2 - $14.99\",\n    \"salad-4\",\n    \"menu-block\",\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createImageElement)(\n    \"salad-3\",\n    _img_restaurant1_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    \"picture of a vegetable bowl\",\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createImageElement)(\n    \"salad-4\",\n    _img_restaurant1_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    \"picture of a vegetable bowl\",\n);\n\n\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"section\",\n    \"content\",\n    \"\",\n    \"contact\",\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"h1\",\n    \"contact\",\n    \"How To Reach Us\",\n);\n(0,_modules_sections_js__WEBPACK_IMPORTED_MODULE_2__.createPageElement)(\n    \"p\",\n    \"contact\",\n    \"Don't.\"\n);\n\n\n\n\nsetTimeout(function(){\n    document.body.className = \"\";\n    console.log(\"body class removed\");\n}, 2000);\n\n//# sourceURL=webpack://odin_restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"constructNavbar\": () => (/* binding */ constructNavbar)\n/* harmony export */ });\n\nconsole.log(\"navbar.js\");\n\nfunction constructNavbar(navLinks) {\n\n    const showPage = (link) => {\n        console.log(link);\n        let pageSection = document.getElementById(link);\n\n        function timeFunc1() {\n            pageSection.classList.remove(\"hidden\");\n            pageSection.classList.add(\"show\");\n            let x = document.getElementById(\"responsive\");\n            if (x.className === \"navbar-links\") {\n                x.className += \" active\";\n            }\n            else {\n                x.className = \"navbar-links\"\n            }\n        }\n        function timeFunc2() {\n            navLinks.forEach((navLink) => {\n                if (navLink !== link && document.getElementById(navLink).classList == \"show\") {\n                    document.getElementById(navLink).classList.add(\"hidden\");\n                    document.getElementById(navLink).classList.remove(\"show\");\n                };\n            })\n        }\n\n        setTimeout(timeFunc1, 300);\n        setTimeout(timeFunc2, 250);\n    }\n\n    const navBar = document.createElement(\"nav\");\n    navBar.classList.add(\"navbar\");\n\n    const hamburger = document.createElement(\"a\");\n    hamburger.href = \"javascript:void(0)\";\n    hamburger.classList.add(\"toggle-button\");\n    hamburger.onclick = function() {\n        let x = document.getElementById(\"responsive\");\n        if (x.className === \"navbar-links\") {\n            x.className += \" active\";\n        }\n        else {\n            x.className = \"navbar-links\"\n        }\n    }\n    for (let i = 0; i < 3; i++) {\n        let bar = document.createElement(\"span\");\n        bar.classList.add(\"bar\");\n        hamburger.appendChild(bar);\n    }\n    navBar.appendChild(hamburger);\n\n    const linkDiv = document.createElement(\"div\");\n    linkDiv.classList.add(\"navbar-links\");\n    linkDiv.id = \"responsive\";\n\n    const navUl = document.createElement(\"ul\");\n\n\n    navLinks.forEach((link) => {\n        let navLi = document.createElement(\"li\");\n        let navA = document.createElement(\"a\");\n\n        navA.onclick = () => showPage(link);\n        // navA.onclick = setTimeout(console.log(\"timeout test\", 4000));\n        \n        navA.textContent = link;\n        navLi.appendChild(navA);\n        navUl.appendChild(navLi);\n    });\n\n    linkDiv.appendChild(navUl);\n    navBar.appendChild(linkDiv);\n    document.body.insertBefore(navBar, document.getElementById(\"content\"));\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/modules/navbar.js?");

/***/ }),

/***/ "./src/modules/sections.js":
/*!*********************************!*\
  !*** ./src/modules/sections.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPageElement\": () => (/* binding */ createPageElement),\n/* harmony export */   \"createImageElement\": () => (/* binding */ createImageElement)\n/* harmony export */ });\nconsole.log(\"sections.js\");\n\nfunction createPageElement(...args) {\n    let classTemp;\n    if (args[1] === \"content\" && args[4] === undefined) classTemp = \"hidden\";\n    else classTemp = args[4];\n    let newPageElement = {\n        elem: args[0],\n        parent: document.getElementById(args[1]),\n        text: args[2],\n        id: args[3],\n        class: classTemp,\n    }\n    let newElement = document.createElement(newPageElement.elem);\n    if (newPageElement.id != \"\") newElement.id = newPageElement.id;\n    if (newPageElement.class != undefined) newElement.classList.add(newPageElement.class);\n    newElement.textContent = newPageElement.text;\n    newPageElement.parent.appendChild(newElement);\n}\n\nfunction createImageElement(...args) {\n    let newImageElement = {\n        parent: document.getElementById(args[0]),\n        src: args[1],\n        alt: args[2],\n        id: args[3],\n        class: args[4],\n    }\n    let newImage = document.createElement(\"img\");\n    newImage.src = newImageElement.src;\n    if (newImageElement.alt != undefined) newImage.alt = newImageElement.alt;\n    if (newImageElement.id != undefined) newImage.id = newImageElement.id;\n    if (newImageElement.class != undefined) newImage.classList.add(newImageElement.class);\n    newImageElement.parent.appendChild(newImage);\n}\n\n\n\n\n\n//# sourceURL=webpack://odin_restaurant/./src/modules/sections.js?");

/***/ }),

/***/ "./src/img/restaurant1.jpg":
/*!*********************************!*\
  !*** ./src/img/restaurant1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac9d8bd2672c91233b23.jpg\";\n\n//# sourceURL=webpack://odin_restaurant/./src/img/restaurant1.jpg?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;