/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin:0;\n    padding:0;\n}\n\n#container\n{\n    display: flex;\n    background-color: #242B2E;\n}\n\n#leftPanel\n{\n    display: flex;\n    flex-direction: column;\n    width:30vw;\n    text-align: center;\n    gap:20px;\n    height:100vh;\n    background-color: #F4BE2C;\n    padding: 10px;\n}\n\n#leftPanelTitle,#addProject\n{\n    height:max-content\n}\n\n#defaultProjects\n{\n    height:30vh;\n}\n\n#generatedProjects\n{\n    height:50vh;\n}\n\n.btn\n{\n    border-radius: 100px;\n}\n\n.projBtn\n{\n    cursor: pointer;\n}\n\n#rightPanel\n{\n    display: flex;\n    flex-direction: column;\n    width:70vw;\n}\n\n#addTask\n{\n    text-align: center;\n}\n\n.sidebarProject\n{\n    margin-top:18px ;\n}\n\n#viewToday\n{\n    display: flex;\n    flex-direction: column;\n}\n\n.mainTask\n{\n    display: flex;\n    justify-content: space-between;\n}\n\nul\n{\n    text-decoration: none;\n    list-style: none;\n}\n\nli\n{\n    margin-top: 18px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,yBAAyB;IACzB,aAAa;AACjB;;AAEA;;IAEI;AACJ;;AAEA;;IAEI,WAAW;AACf;;AAEA;;IAEI,WAAW;AACf;;AAEA;;IAEI,oBAAoB;AACxB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;;IAEI,gBAAgB;AACpB","sourcesContent":["*{\n    margin:0;\n    padding:0;\n}\n\n#container\n{\n    display: flex;\n    background-color: #242B2E;\n}\n\n#leftPanel\n{\n    display: flex;\n    flex-direction: column;\n    width:30vw;\n    text-align: center;\n    gap:20px;\n    height:100vh;\n    background-color: #F4BE2C;\n    padding: 10px;\n}\n\n#leftPanelTitle,#addProject\n{\n    height:max-content\n}\n\n#defaultProjects\n{\n    height:30vh;\n}\n\n#generatedProjects\n{\n    height:50vh;\n}\n\n.btn\n{\n    border-radius: 100px;\n}\n\n.projBtn\n{\n    cursor: pointer;\n}\n\n#rightPanel\n{\n    display: flex;\n    flex-direction: column;\n    width:70vw;\n}\n\n#addTask\n{\n    text-align: center;\n}\n\n.sidebarProject\n{\n    margin-top:18px ;\n}\n\n#viewToday\n{\n    display: flex;\n    flex-direction: column;\n}\n\n.mainTask\n{\n    display: flex;\n    justify-content: space-between;\n}\n\nul\n{\n    text-decoration: none;\n    list-style: none;\n}\n\nli\n{\n    margin-top: 18px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderTasksImportant = exports.renderTasksWeek = exports.renderTasksToday = exports.renderTasksDefault = exports.renderViewImportant = exports.renderViewWeek = exports.renderViewToday = exports.taskPopUp = exports.projectPopUp = exports.renderProjects = void 0;
const projects_1 = __webpack_require__(/*! ./projects */ "./src/projects.ts");
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
const tasks_1 = __webpack_require__(/*! ./tasks */ "./src/tasks.ts");
const rightPanel = document.getElementById('rightPanel');
const defaultProjectList = document.querySelector('.projects-list');
function renderProjects() {
    defaultProjectList.textContent = '';
    for (let i = 0; i < projects_1.projectsList.length; i++) {
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('sidebarProject');
        let pLen = projects_1.projectsList[i].index;
        projectTitle.classList.add(`${pLen}`);
        projectTitle.textContent = projects_1.projectsList[i].title;
        defaultProjectList === null || defaultProjectList === void 0 ? void 0 : defaultProjectList.appendChild(projectTitle);
    }
}
exports.renderProjects = renderProjects;
function projectPopUp() {
    const popUpProject = document.createElement('div');
    const titlePopUp = document.createElement('input');
    const submitPopUp = document.createElement('button');
    titlePopUp.setAttribute('type', 'input');
    titlePopUp.setAttribute('id', 'titlePopUp');
    submitPopUp.setAttribute('id', 'submitPopUp');
    submitPopUp.textContent = "Submit";
    popUpProject.appendChild(titlePopUp);
    popUpProject.appendChild(submitPopUp);
    _1.container.appendChild(popUpProject);
}
exports.projectPopUp = projectPopUp;
function taskPopUp() {
    const taskPopUpMain = document.createElement('div');
    const taskTitle = document.createElement('input');
    const taskDueDate = document.createElement('input');
    const taskPriority = document.createElement('select');
    const taskSubmit = document.createElement('button');
    const priorityHigh = document.createElement('option');
    const priorityMid = document.createElement('option');
    const priorityLow = document.createElement('option');
    taskPopUpMain.appendChild(taskTitle);
    taskPopUpMain.appendChild(taskDueDate);
    taskPopUpMain.appendChild(taskPriority);
    taskPopUpMain.appendChild(taskSubmit);
    taskPriority.appendChild(priorityHigh);
    taskPriority.appendChild(priorityMid);
    taskPriority.appendChild(priorityLow);
    taskTitle.setAttribute('type', 'text');
    taskDueDate.setAttribute('type', 'date');
    taskSubmit.textContent = "Submit";
    priorityLow.textContent = "Low";
    priorityHigh.textContent = "High";
    priorityMid.textContent = "Midium";
    ;
    taskPopUpMain.classList.add('taskPopUpMain');
    taskTitle.classList.add('taskPopUpInput');
    taskDueDate.classList.add('taskPopUpDate');
    taskPriority.setAttribute('id', 'taskPopUpPrio');
    taskSubmit.classList.add('taskPopUpSubmit');
    _1.container === null || _1.container === void 0 ? void 0 : _1.container.appendChild(taskPopUpMain);
}
exports.taskPopUp = taskPopUp;
function renderViewToday() {
    let vari = document.getElementById('viewImportant');
    let vari1 = document.getElementById('viewWeek');
    let vari2 = document.getElementById('viewToday');
    if (typeof (vari) != 'undefined' && vari != null) {
        vari === null || vari === void 0 ? void 0 : vari.remove();
    }
    if (typeof (vari1) != 'undefined' && vari1 != null) {
        vari1.remove();
    }
    if (typeof (vari2) != 'undefined' && vari2 != null) {
        vari2.remove();
    }
    const viewDefault = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.classList.add('btn');
    const todayView = document.createElement('div');
    todayView.setAttribute('id', 'todayView');
    todayView.appendChild(addTaskBtn);
    viewDefault.appendChild(todayView);
    rightPanel === null || rightPanel === void 0 ? void 0 : rightPanel.appendChild(viewDefault);
    viewDefault.setAttribute('id', 'viewToday');
}
exports.renderViewToday = renderViewToday;
function renderViewWeek() {
    let vari = document.getElementById('viewImportant');
    let vari1 = document.getElementById('viewWeek');
    let vari2 = document.getElementById('viewToday');
    if (typeof (vari) != 'undefined' && vari != null) {
        vari === null || vari === void 0 ? void 0 : vari.remove();
    }
    if (typeof (vari1) != 'undefined' && vari1 != null) {
        vari1.remove();
    }
    if (typeof (vari2) != 'undefined' && vari2 != null) {
        vari2.remove();
    }
    const viewDefault = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.classList.add('btn');
    const todayView = document.createElement('div');
    todayView.setAttribute('id', 'weekView');
    todayView.appendChild(addTaskBtn);
    viewDefault.appendChild(todayView);
    rightPanel === null || rightPanel === void 0 ? void 0 : rightPanel.appendChild(viewDefault);
    viewDefault.setAttribute('id', 'viewWeek');
}
exports.renderViewWeek = renderViewWeek;
function renderViewImportant() {
    let vari = document.getElementById('viewImportant');
    let vari1 = document.getElementById('viewWeek');
    let vari2 = document.getElementById('viewToday');
    if (typeof (vari) != 'undefined' && vari != null) {
        vari === null || vari === void 0 ? void 0 : vari.remove();
    }
    if (typeof (vari1) != 'undefined' && vari1 != null) {
        vari1.remove();
    }
    if (typeof (vari2) != 'undefined' && vari2 != null) {
        vari2.remove();
    }
    const viewDefault = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.classList.add('btn');
    const todayView = document.createElement('div');
    todayView.setAttribute('id', 'importantView');
    todayView.appendChild(addTaskBtn);
    viewDefault.appendChild(todayView);
    rightPanel === null || rightPanel === void 0 ? void 0 : rightPanel.appendChild(viewDefault);
    viewDefault.setAttribute('id', 'viewImportant');
}
exports.renderViewImportant = renderViewImportant;
function renderTasksDefault() {
    let vari = document.getElementById('viewImportant');
    let vari1 = document.getElementById('viewWeek');
    let vari2 = document.getElementById('viewToday');
}
exports.renderTasksDefault = renderTasksDefault;
function renderTasksToday() {
    const tasksTodayVar = document.getElementById('viewToday');
    tasksTodayVar.textContent = '';
    for (let i = 0; i < tasks_1.tasksToday.length; i++) {
        const mainTask = document.createElement('div');
        mainTask.classList.add('mainTask');
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task');
        taskTitle.textContent = tasks_1.tasksToday[i].title;
        const taskDate = document.createElement('div');
        taskDate.classList.add('task');
        taskDate.textContent = tasks_1.tasksToday[i].date;
        const taskPriority = document.createElement('div');
        taskPriority.textContent = tasks_1.tasksToday[i].priority;
        mainTask.appendChild(taskTitle);
        mainTask.appendChild(taskDate);
        mainTask.appendChild(taskPriority);
        tasksTodayVar === null || tasksTodayVar === void 0 ? void 0 : tasksTodayVar.appendChild(mainTask);
    }
}
exports.renderTasksToday = renderTasksToday;
function renderTasksWeek() {
    const tasksWeekVar = document.getElementById('viewWeek');
    tasksWeekVar.textContent = '';
    for (let i = 0; i < tasks_1.tasksWeek.length; i++) {
        const mainTask = document.createElement('div');
        mainTask.classList.add('mainTask');
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task');
        taskTitle.textContent = tasks_1.tasksWeek[i].title;
        const taskDate = document.createElement('div');
        taskDate.classList.add('task');
        taskDate.textContent = tasks_1.tasksWeek[i].date;
        const taskPriority = document.createElement('div');
        taskPriority.textContent = tasks_1.tasksWeek[i].priority;
        mainTask.appendChild(taskTitle);
        mainTask.appendChild(taskDate);
        mainTask.appendChild(taskPriority);
        tasksWeekVar === null || tasksWeekVar === void 0 ? void 0 : tasksWeekVar.appendChild(mainTask);
    }
}
exports.renderTasksWeek = renderTasksWeek;
function renderTasksImportant() {
    const tasksImportantVar = document.getElementById('viewImportant');
    tasksImportantVar.textContent = '';
    for (let i = 0; i < tasks_1.tasksImportant.length; i++) {
        const mainTask = document.createElement('div');
        mainTask.classList.add('mainTask');
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task');
        taskTitle.textContent = tasks_1.tasksImportant[i].title;
        const taskDate = document.createElement('div');
        taskDate.classList.add('task');
        taskDate.textContent = tasks_1.tasksImportant[i].date;
        const taskPriority = document.createElement('div');
        taskPriority.textContent = tasks_1.tasksImportant[i].priority;
        mainTask.appendChild(taskTitle);
        mainTask.appendChild(taskDate);
        mainTask.appendChild(taskPriority);
        tasksImportantVar === null || tasksImportantVar === void 0 ? void 0 : tasksImportantVar.appendChild(mainTask);
    }
}
exports.renderTasksImportant = renderTasksImportant;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.container = void 0;
__webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
const dom_1 = __webpack_require__(/*! ./dom */ "./src/dom.ts");
const projects_1 = __webpack_require__(/*! ./projects */ "./src/projects.ts");
const tasks_1 = __webpack_require__(/*! ./tasks */ "./src/tasks.ts");
exports.container = document.getElementById('container');
const addProjectBtn = document.getElementById('addProjectBtn');
const rightPanel = document.getElementById('rightPanel');
const addTaskBtn = document.getElementById('addTaskBtn');
const todayProject = document.getElementById('todayProject');
const weekProject = document.getElementById('weekProject');
const importantProject = document.getElementById('importantProject');
(0, dom_1.projectPopUp)();
(0, dom_1.taskPopUp)();
const taskPopUpInput = document.querySelector('.taskPopUpInput').value;
const taskPopUpDate = document.querySelector('.taskPopUpDate').value;
const taskPopUpPrio = document.getElementById('taskPopUpPrio').value;
const submitProjPopUp = document.getElementById('submitPopUp');
submitProjPopUp === null || submitProjPopUp === void 0 ? void 0 : submitProjPopUp.addEventListener('click', () => { (0, projects_1.createProject)(); });
//addTaskBtn?.addEventListener('click',()=>{createTask()});
todayProject === null || todayProject === void 0 ? void 0 : todayProject.addEventListener('click', () => { (0, dom_1.renderViewToday)(); (0, dom_1.renderTasksToday)(); });
weekProject === null || weekProject === void 0 ? void 0 : weekProject.addEventListener('click', () => { (0, dom_1.renderViewWeek)(); (0, dom_1.renderTasksWeek)(); });
importantProject === null || importantProject === void 0 ? void 0 : importantProject.addEventListener('click', () => { (0, dom_1.renderViewImportant)(); (0, dom_1.renderTasksImportant)(); });
const taskPopUpSubmit = document.querySelector('.taskPopUpSubmit');
taskPopUpSubmit === null || taskPopUpSubmit === void 0 ? void 0 : taskPopUpSubmit.addEventListener('click', () => {
    if (rightPanel === null || rightPanel === void 0 ? void 0 : rightPanel.firstChild) {
        let child = rightPanel.children;
        console.log(rightPanel.children);
        if (child[0].id == "viewToday") {
            (0, tasks_1.createTask)("today", document.querySelector('.taskPopUpInput').value, document.querySelector('.taskPopUpDate').value, document.querySelector('.taskPopUpDate').value);
            (0, dom_1.renderTasksToday)();
        }
        else if (child[0].id == "viewWeek") {
            (0, tasks_1.createTask)("week", document.querySelector('.taskPopUpInput').value, document.querySelector('.taskPopUpDate').value, document.querySelector('.taskPopUpDate').value);
            (0, dom_1.renderTasksWeek)();
        }
        else if (child[0].id == "viewImportant") {
            (0, tasks_1.createTask)("important", document.querySelector('.taskPopUpInput').value, document.querySelector('.taskPopUpDate').value, document.querySelector('.taskPopUpDate').value);
            (0, dom_1.renderTasksImportant)();
        }
        return;
    }
    (0, tasks_1.createTask)(0, document.querySelector('.taskPopUpInput').value, document.querySelector('.taskPopUpDate').value, document.querySelector('.taskPopUpDate').value);
});


/***/ }),

/***/ "./src/projects.ts":
/*!*************************!*\
  !*** ./src/projects.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.projectsList = exports.createProject = void 0;
const dom_1 = __webpack_require__(/*! ./dom */ "./src/dom.ts");
let projectsList = [];
exports.projectsList = projectsList;
class Project {
    constructor(title, index) {
        this.title = title;
        this.tasks = [];
        this.index = index;
    }
}
function createProject() {
    let title = document.getElementById('titlePopUp').value;
    let index = projectsList.length;
    const projectObj = new Project(title, index);
    projectsList.push(projectObj);
    (0, dom_1.renderProjects)();
    console.log(projectsList);
    console.log();
}
exports.createProject = createProject;


/***/ }),

/***/ "./src/tasks.ts":
/*!**********************!*\
  !*** ./src/tasks.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTask = exports.tasksImportant = exports.tasksWeek = exports.tasksToday = void 0;
class task {
    constructor(title, priority, date) {
        this.title = title;
        this.priority = priority;
        this.date = date;
    }
}
exports.tasksToday = [];
exports.tasksWeek = [];
exports.tasksImportant = [];
function createTask(projectIndex, title, priority, date) {
    if (projectIndex == "today") {
        const taskObj = new task(title, priority, date);
        exports.tasksToday.push(taskObj);
        console.log(exports.tasksToday);
        return;
    }
    if (projectIndex == "week") {
        const taskObj = new task(title, priority, date);
        exports.tasksWeek.push(taskObj);
        console.log(exports.tasksWeek);
        return;
    }
    if (projectIndex == "important") {
        const taskObj = new task(title, priority, date);
        exports.tasksImportant.push(taskObj);
        console.log(exports.tasksImportant);
        return;
    }
    /*     console.log("This executing?")
        const taskObj = new task(title,priority,date);
        projectsList[projectIndex].tasks?.push(taskObj);
        console.log(projectsList[projectIndex].tasks); */
}
exports.createTask = createTask;


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWMsbUJBQU8sQ0FBQywyQkFBTztBQUM3QjtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7Ozs7Ozs7Ozs7QUN0QlI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCLEdBQUcsc0JBQXNCLEdBQUcsaUJBQWlCLEdBQUcsa0JBQWtCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxrQkFBa0I7Ozs7Ozs7VUNyQ2xCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbn1cXG5cXG4jY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyQjJFO1xcbn1cXG5cXG4jbGVmdFBhbmVsXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDozMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEJFMkM7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNsZWZ0UGFuZWxUaXRsZSwjYWRkUHJvamVjdFxcbntcXG4gICAgaGVpZ2h0Om1heC1jb250ZW50XFxufVxcblxcbiNkZWZhdWx0UHJvamVjdHNcXG57XFxuICAgIGhlaWdodDozMHZoO1xcbn1cXG5cXG4jZ2VuZXJhdGVkUHJvamVjdHNcXG57XFxuICAgIGhlaWdodDo1MHZoO1xcbn1cXG5cXG4uYnRuXFxue1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuLnByb2pCdG5cXG57XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3JpZ2h0UGFuZWxcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOjcwdnc7XFxufVxcblxcbiNhZGRUYXNrXFxue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyUHJvamVjdFxcbntcXG4gICAgbWFyZ2luLXRvcDoxOHB4IDtcXG59XFxuXFxuI3ZpZXdUb2RheVxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5UYXNrXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbnVsXFxue1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxpXFxue1xcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuXFxuI2NvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MkIyRTtcXG59XFxuXFxuI2xlZnRQYW5lbFxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6MzB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6MjBweDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCRTJDO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbGVmdFBhbmVsVGl0bGUsI2FkZFByb2plY3RcXG57XFxuICAgIGhlaWdodDptYXgtY29udGVudFxcbn1cXG5cXG4jZGVmYXVsdFByb2plY3RzXFxue1xcbiAgICBoZWlnaHQ6MzB2aDtcXG59XFxuXFxuI2dlbmVyYXRlZFByb2plY3RzXFxue1xcbiAgICBoZWlnaHQ6NTB2aDtcXG59XFxuXFxuLmJ0blxcbntcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufVxcblxcbi5wcm9qQnRuXFxue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyaWdodFBhbmVsXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDo3MHZ3O1xcbn1cXG5cXG4jYWRkVGFza1xcbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhclByb2plY3RcXG57XFxuICAgIG1hcmdpbi10b3A6MThweCA7XFxufVxcblxcbiN2aWV3VG9kYXlcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluVGFza1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG51bFxcbntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5saVxcbntcXG4gICAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlbmRlclRhc2tzSW1wb3J0YW50ID0gZXhwb3J0cy5yZW5kZXJUYXNrc1dlZWsgPSBleHBvcnRzLnJlbmRlclRhc2tzVG9kYXkgPSBleHBvcnRzLnJlbmRlclRhc2tzRGVmYXVsdCA9IGV4cG9ydHMucmVuZGVyVmlld0ltcG9ydGFudCA9IGV4cG9ydHMucmVuZGVyVmlld1dlZWsgPSBleHBvcnRzLnJlbmRlclZpZXdUb2RheSA9IGV4cG9ydHMudGFza1BvcFVwID0gZXhwb3J0cy5wcm9qZWN0UG9wVXAgPSBleHBvcnRzLnJlbmRlclByb2plY3RzID0gdm9pZCAwO1xuY29uc3QgcHJvamVjdHNfMSA9IHJlcXVpcmUoXCIuL3Byb2plY3RzXCIpO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IHRhc2tzXzEgPSByZXF1aXJlKFwiLi90YXNrc1wiKTtcbmNvbnN0IHJpZ2h0UGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHRQYW5lbCcpO1xuY29uc3QgZGVmYXVsdFByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKTtcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIGRlZmF1bHRQcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNfMS5wcm9qZWN0c0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyUHJvamVjdCcpO1xuICAgICAgICBsZXQgcExlbiA9IHByb2plY3RzXzEucHJvamVjdHNMaXN0W2ldLmluZGV4O1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChgJHtwTGVufWApO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c18xLnByb2plY3RzTGlzdFtpXS50aXRsZTtcbiAgICAgICAgZGVmYXVsdFByb2plY3RMaXN0ID09PSBudWxsIHx8IGRlZmF1bHRQcm9qZWN0TGlzdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVmYXVsdFByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgfVxufVxuZXhwb3J0cy5yZW5kZXJQcm9qZWN0cyA9IHJlbmRlclByb2plY3RzO1xuZnVuY3Rpb24gcHJvamVjdFBvcFVwKCkge1xuICAgIGNvbnN0IHBvcFVwUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlUG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHN1Ym1pdFBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGl0bGVQb3BVcC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW5wdXQnKTtcbiAgICB0aXRsZVBvcFVwLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGVQb3BVcCcpO1xuICAgIHN1Ym1pdFBvcFVwLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0UG9wVXAnKTtcbiAgICBzdWJtaXRQb3BVcC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgcG9wVXBQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlUG9wVXApO1xuICAgIHBvcFVwUHJvamVjdC5hcHBlbmRDaGlsZChzdWJtaXRQb3BVcCk7XG4gICAgXzEuY29udGFpbmVyLmFwcGVuZENoaWxkKHBvcFVwUHJvamVjdCk7XG59XG5leHBvcnRzLnByb2plY3RQb3BVcCA9IHByb2plY3RQb3BVcDtcbmZ1bmN0aW9uIHRhc2tQb3BVcCgpIHtcbiAgICBjb25zdCB0YXNrUG9wVXBNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNvbnN0IHByaW9yaXR5TWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB0YXNrUG9wVXBNYWluLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgdGFza1BvcFVwTWFpbi5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgdGFza1BvcFVwTWFpbi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIHRhc2tQb3BVcE1haW4uYXBwZW5kQ2hpbGQodGFza1N1Ym1pdCk7XG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaCk7XG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5TWlkKTtcbiAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3cpO1xuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgdGFza1N1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgcHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIHByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIHByaW9yaXR5TWlkLnRleHRDb250ZW50ID0gXCJNaWRpdW1cIjtcbiAgICA7XG4gICAgdGFza1BvcFVwTWFpbi5jbGFzc0xpc3QuYWRkKCd0YXNrUG9wVXBNYWluJyk7XG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tQb3BVcElucHV0Jyk7XG4gICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFza1BvcFVwRGF0ZScpO1xuICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tQb3BVcFByaW8nKTtcbiAgICB0YXNrU3VibWl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tQb3BVcFN1Ym1pdCcpO1xuICAgIF8xLmNvbnRhaW5lciA9PT0gbnVsbCB8fCBfMS5jb250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF8xLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUG9wVXBNYWluKTtcbn1cbmV4cG9ydHMudGFza1BvcFVwID0gdGFza1BvcFVwO1xuZnVuY3Rpb24gcmVuZGVyVmlld1RvZGF5KCkge1xuICAgIGxldCB2YXJpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdJbXBvcnRhbnQnKTtcbiAgICBsZXQgdmFyaTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1dlZWsnKTtcbiAgICBsZXQgdmFyaTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1RvZGF5Jyk7XG4gICAgaWYgKHR5cGVvZiAodmFyaSkgIT0gJ3VuZGVmaW5lZCcgJiYgdmFyaSAhPSBudWxsKSB7XG4gICAgICAgIHZhcmkgPT09IG51bGwgfHwgdmFyaSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaS5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiAodmFyaTEpICE9ICd1bmRlZmluZWQnICYmIHZhcmkxICE9IG51bGwpIHtcbiAgICAgICAgdmFyaTEucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgKHZhcmkyKSAhPSAndW5kZWZpbmVkJyAmJiB2YXJpMiAhPSBudWxsKSB7XG4gICAgICAgIHZhcmkyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBjb25zdCB2aWV3RGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgY29uc3QgdG9kYXlWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlWaWV3LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXlWaWV3Jyk7XG4gICAgdG9kYXlWaWV3LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgIHZpZXdEZWZhdWx0LmFwcGVuZENoaWxkKHRvZGF5Vmlldyk7XG4gICAgcmlnaHRQYW5lbCA9PT0gbnVsbCB8fCByaWdodFBhbmVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiByaWdodFBhbmVsLmFwcGVuZENoaWxkKHZpZXdEZWZhdWx0KTtcbiAgICB2aWV3RGVmYXVsdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZpZXdUb2RheScpO1xufVxuZXhwb3J0cy5yZW5kZXJWaWV3VG9kYXkgPSByZW5kZXJWaWV3VG9kYXk7XG5mdW5jdGlvbiByZW5kZXJWaWV3V2VlaygpIHtcbiAgICBsZXQgdmFyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3SW1wb3J0YW50Jyk7XG4gICAgbGV0IHZhcmkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdXZWVrJyk7XG4gICAgbGV0IHZhcmkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdUb2RheScpO1xuICAgIGlmICh0eXBlb2YgKHZhcmkpICE9ICd1bmRlZmluZWQnICYmIHZhcmkgIT0gbnVsbCkge1xuICAgICAgICB2YXJpID09PSBudWxsIHx8IHZhcmkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmkucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgKHZhcmkxKSAhPSAndW5kZWZpbmVkJyAmJiB2YXJpMSAhPSBudWxsKSB7XG4gICAgICAgIHZhcmkxLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mICh2YXJpMikgIT0gJ3VuZGVmaW5lZCcgJiYgdmFyaTIgIT0gbnVsbCkge1xuICAgICAgICB2YXJpMi5yZW1vdmUoKTtcbiAgICB9XG4gICAgY29uc3Qgdmlld0RlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGNvbnN0IHRvZGF5VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5Vmlldy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlZWtWaWV3Jyk7XG4gICAgdG9kYXlWaWV3LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgIHZpZXdEZWZhdWx0LmFwcGVuZENoaWxkKHRvZGF5Vmlldyk7XG4gICAgcmlnaHRQYW5lbCA9PT0gbnVsbCB8fCByaWdodFBhbmVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiByaWdodFBhbmVsLmFwcGVuZENoaWxkKHZpZXdEZWZhdWx0KTtcbiAgICB2aWV3RGVmYXVsdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZpZXdXZWVrJyk7XG59XG5leHBvcnRzLnJlbmRlclZpZXdXZWVrID0gcmVuZGVyVmlld1dlZWs7XG5mdW5jdGlvbiByZW5kZXJWaWV3SW1wb3J0YW50KCkge1xuICAgIGxldCB2YXJpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdJbXBvcnRhbnQnKTtcbiAgICBsZXQgdmFyaTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1dlZWsnKTtcbiAgICBsZXQgdmFyaTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1RvZGF5Jyk7XG4gICAgaWYgKHR5cGVvZiAodmFyaSkgIT0gJ3VuZGVmaW5lZCcgJiYgdmFyaSAhPSBudWxsKSB7XG4gICAgICAgIHZhcmkgPT09IG51bGwgfHwgdmFyaSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaS5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiAodmFyaTEpICE9ICd1bmRlZmluZWQnICYmIHZhcmkxICE9IG51bGwpIHtcbiAgICAgICAgdmFyaTEucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgKHZhcmkyKSAhPSAndW5kZWZpbmVkJyAmJiB2YXJpMiAhPSBudWxsKSB7XG4gICAgICAgIHZhcmkyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBjb25zdCB2aWV3RGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgY29uc3QgdG9kYXlWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlWaWV3LnNldEF0dHJpYnV0ZSgnaWQnLCAnaW1wb3J0YW50VmlldycpO1xuICAgIHRvZGF5Vmlldy5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICB2aWV3RGVmYXVsdC5hcHBlbmRDaGlsZCh0b2RheVZpZXcpO1xuICAgIHJpZ2h0UGFuZWwgPT09IG51bGwgfHwgcmlnaHRQYW5lbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmlnaHRQYW5lbC5hcHBlbmRDaGlsZCh2aWV3RGVmYXVsdCk7XG4gICAgdmlld0RlZmF1bHQuc2V0QXR0cmlidXRlKCdpZCcsICd2aWV3SW1wb3J0YW50Jyk7XG59XG5leHBvcnRzLnJlbmRlclZpZXdJbXBvcnRhbnQgPSByZW5kZXJWaWV3SW1wb3J0YW50O1xuZnVuY3Rpb24gcmVuZGVyVGFza3NEZWZhdWx0KCkge1xuICAgIGxldCB2YXJpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdJbXBvcnRhbnQnKTtcbiAgICBsZXQgdmFyaTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1dlZWsnKTtcbiAgICBsZXQgdmFyaTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1RvZGF5Jyk7XG59XG5leHBvcnRzLnJlbmRlclRhc2tzRGVmYXVsdCA9IHJlbmRlclRhc2tzRGVmYXVsdDtcbmZ1bmN0aW9uIHJlbmRlclRhc2tzVG9kYXkoKSB7XG4gICAgY29uc3QgdGFza3NUb2RheVZhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3VG9kYXknKTtcbiAgICB0YXNrc1RvZGF5VmFyLnRleHRDb250ZW50ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc18xLnRhc2tzVG9kYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWFpblRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpblRhc2suY2xhc3NMaXN0LmFkZCgnbWFpblRhc2snKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tzXzEudGFza3NUb2RheVtpXS50aXRsZTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tzXzEudGFza3NUb2RheVtpXS5kYXRlO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFza3NfMS50YXNrc1RvZGF5W2ldLnByaW9yaXR5O1xuICAgICAgICBtYWluVGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICBtYWluVGFzay5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgICAgIG1haW5UYXNrLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgICAgIHRhc2tzVG9kYXlWYXIgPT09IG51bGwgfHwgdGFza3NUb2RheVZhciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFza3NUb2RheVZhci5hcHBlbmRDaGlsZChtYWluVGFzayk7XG4gICAgfVxufVxuZXhwb3J0cy5yZW5kZXJUYXNrc1RvZGF5ID0gcmVuZGVyVGFza3NUb2RheTtcbmZ1bmN0aW9uIHJlbmRlclRhc2tzV2VlaygpIHtcbiAgICBjb25zdCB0YXNrc1dlZWtWYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1dlZWsnKTtcbiAgICB0YXNrc1dlZWtWYXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzXzEudGFza3NXZWVrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1haW5UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5UYXNrLmNsYXNzTGlzdC5hZGQoJ21haW5UYXNrJyk7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrc18xLnRhc2tzV2Vla1tpXS50aXRsZTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tzXzEudGFza3NXZWVrW2ldLmRhdGU7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrc18xLnRhc2tzV2Vla1tpXS5wcmlvcml0eTtcbiAgICAgICAgbWFpblRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgbWFpblRhc2suYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgICAgICBtYWluVGFzay5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrc1dlZWtWYXIgPT09IG51bGwgfHwgdGFza3NXZWVrVmFyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXNrc1dlZWtWYXIuYXBwZW5kQ2hpbGQobWFpblRhc2spO1xuICAgIH1cbn1cbmV4cG9ydHMucmVuZGVyVGFza3NXZWVrID0gcmVuZGVyVGFza3NXZWVrO1xuZnVuY3Rpb24gcmVuZGVyVGFza3NJbXBvcnRhbnQoKSB7XG4gICAgY29uc3QgdGFza3NJbXBvcnRhbnRWYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0ltcG9ydGFudCcpO1xuICAgIHRhc2tzSW1wb3J0YW50VmFyLnRleHRDb250ZW50ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc18xLnRhc2tzSW1wb3J0YW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1haW5UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5UYXNrLmNsYXNzTGlzdC5hZGQoJ21haW5UYXNrJyk7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrc18xLnRhc2tzSW1wb3J0YW50W2ldLnRpdGxlO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFza3NfMS50YXNrc0ltcG9ydGFudFtpXS5kYXRlO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFza3NfMS50YXNrc0ltcG9ydGFudFtpXS5wcmlvcml0eTtcbiAgICAgICAgbWFpblRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgbWFpblRhc2suYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgICAgICBtYWluVGFzay5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrc0ltcG9ydGFudFZhciA9PT0gbnVsbCB8fCB0YXNrc0ltcG9ydGFudFZhciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFza3NJbXBvcnRhbnRWYXIuYXBwZW5kQ2hpbGQobWFpblRhc2spO1xuICAgIH1cbn1cbmV4cG9ydHMucmVuZGVyVGFza3NJbXBvcnRhbnQgPSByZW5kZXJUYXNrc0ltcG9ydGFudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb250YWluZXIgPSB2b2lkIDA7XG5yZXF1aXJlKFwiLi9zdHlsZXMvaW5kZXguY3NzXCIpO1xuY29uc3QgZG9tXzEgPSByZXF1aXJlKFwiLi9kb21cIik7XG5jb25zdCBwcm9qZWN0c18xID0gcmVxdWlyZShcIi4vcHJvamVjdHNcIik7XG5jb25zdCB0YXNrc18xID0gcmVxdWlyZShcIi4vdGFza3NcIik7XG5leHBvcnRzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuY29uc3QgcmlnaHRQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodFBhbmVsJyk7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbmNvbnN0IHRvZGF5UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVByb2plY3QnKTtcbmNvbnN0IHdlZWtQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtQcm9qZWN0Jyk7XG5jb25zdCBpbXBvcnRhbnRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydGFudFByb2plY3QnKTtcbigwLCBkb21fMS5wcm9qZWN0UG9wVXApKCk7XG4oMCwgZG9tXzEudGFza1BvcFVwKSgpO1xuY29uc3QgdGFza1BvcFVwSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwSW5wdXQnKS52YWx1ZTtcbmNvbnN0IHRhc2tQb3BVcERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwRGF0ZScpLnZhbHVlO1xuY29uc3QgdGFza1BvcFVwUHJpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUG9wVXBQcmlvJykudmFsdWU7XG5jb25zdCBzdWJtaXRQcm9qUG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0UG9wVXAnKTtcbnN1Ym1pdFByb2pQb3BVcCA9PT0gbnVsbCB8fCBzdWJtaXRQcm9qUG9wVXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN1Ym1pdFByb2pQb3BVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgKDAsIHByb2plY3RzXzEuY3JlYXRlUHJvamVjdCkoKTsgfSk7XG4vL2FkZFRhc2tCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e2NyZWF0ZVRhc2soKX0pO1xudG9kYXlQcm9qZWN0ID09PSBudWxsIHx8IHRvZGF5UHJvamVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9kYXlQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAoMCwgZG9tXzEucmVuZGVyVmlld1RvZGF5KSgpOyAoMCwgZG9tXzEucmVuZGVyVGFza3NUb2RheSkoKTsgfSk7XG53ZWVrUHJvamVjdCA9PT0gbnVsbCB8fCB3ZWVrUHJvamVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2Vla1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7ICgwLCBkb21fMS5yZW5kZXJWaWV3V2VlaykoKTsgKDAsIGRvbV8xLnJlbmRlclRhc2tzV2VlaykoKTsgfSk7XG5pbXBvcnRhbnRQcm9qZWN0ID09PSBudWxsIHx8IGltcG9ydGFudFByb2plY3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGltcG9ydGFudFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7ICgwLCBkb21fMS5yZW5kZXJWaWV3SW1wb3J0YW50KSgpOyAoMCwgZG9tXzEucmVuZGVyVGFza3NJbXBvcnRhbnQpKCk7IH0pO1xuY29uc3QgdGFza1BvcFVwU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQb3BVcFN1Ym1pdCcpO1xudGFza1BvcFVwU3VibWl0ID09PSBudWxsIHx8IHRhc2tQb3BVcFN1Ym1pdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFza1BvcFVwU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChyaWdodFBhbmVsID09PSBudWxsIHx8IHJpZ2h0UGFuZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJpZ2h0UGFuZWwuZmlyc3RDaGlsZCkge1xuICAgICAgICBsZXQgY2hpbGQgPSByaWdodFBhbmVsLmNoaWxkcmVuO1xuICAgICAgICBjb25zb2xlLmxvZyhyaWdodFBhbmVsLmNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGNoaWxkWzBdLmlkID09IFwidmlld1RvZGF5XCIpIHtcbiAgICAgICAgICAgICgwLCB0YXNrc18xLmNyZWF0ZVRhc2spKFwidG9kYXlcIiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQb3BVcElucHV0JykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUpO1xuICAgICAgICAgICAgKDAsIGRvbV8xLnJlbmRlclRhc2tzVG9kYXkpKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRbMF0uaWQgPT0gXCJ2aWV3V2Vla1wiKSB7XG4gICAgICAgICAgICAoMCwgdGFza3NfMS5jcmVhdGVUYXNrKShcIndlZWtcIiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQb3BVcElucHV0JykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUpO1xuICAgICAgICAgICAgKDAsIGRvbV8xLnJlbmRlclRhc2tzV2VlaykoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZFswXS5pZCA9PSBcInZpZXdJbXBvcnRhbnRcIikge1xuICAgICAgICAgICAgKDAsIHRhc2tzXzEuY3JlYXRlVGFzaykoXCJpbXBvcnRhbnRcIiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQb3BVcElucHV0JykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUpO1xuICAgICAgICAgICAgKDAsIGRvbV8xLnJlbmRlclRhc2tzSW1wb3J0YW50KSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKDAsIHRhc2tzXzEuY3JlYXRlVGFzaykoMCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQb3BVcElucHV0JykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUpO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHJvamVjdHNMaXN0ID0gZXhwb3J0cy5jcmVhdGVQcm9qZWN0ID0gdm9pZCAwO1xuY29uc3QgZG9tXzEgPSByZXF1aXJlKFwiLi9kb21cIik7XG5sZXQgcHJvamVjdHNMaXN0ID0gW107XG5leHBvcnRzLnByb2plY3RzTGlzdCA9IHByb2plY3RzTGlzdDtcbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBpbmRleCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlUG9wVXAnKS52YWx1ZTtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0c0xpc3QubGVuZ3RoO1xuICAgIGNvbnN0IHByb2plY3RPYmogPSBuZXcgUHJvamVjdCh0aXRsZSwgaW5kZXgpO1xuICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3RPYmopO1xuICAgICgwLCBkb21fMS5yZW5kZXJQcm9qZWN0cykoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0xpc3QpO1xuICAgIGNvbnNvbGUubG9nKCk7XG59XG5leHBvcnRzLmNyZWF0ZVByb2plY3QgPSBjcmVhdGVQcm9qZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZVRhc2sgPSBleHBvcnRzLnRhc2tzSW1wb3J0YW50ID0gZXhwb3J0cy50YXNrc1dlZWsgPSBleHBvcnRzLnRhc2tzVG9kYXkgPSB2b2lkIDA7XG5jbGFzcyB0YXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJpb3JpdHksIGRhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxufVxuZXhwb3J0cy50YXNrc1RvZGF5ID0gW107XG5leHBvcnRzLnRhc2tzV2VlayA9IFtdO1xuZXhwb3J0cy50YXNrc0ltcG9ydGFudCA9IFtdO1xuZnVuY3Rpb24gY3JlYXRlVGFzayhwcm9qZWN0SW5kZXgsIHRpdGxlLCBwcmlvcml0eSwgZGF0ZSkge1xuICAgIGlmIChwcm9qZWN0SW5kZXggPT0gXCJ0b2RheVwiKSB7XG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSBuZXcgdGFzayh0aXRsZSwgcHJpb3JpdHksIGRhdGUpO1xuICAgICAgICBleHBvcnRzLnRhc2tzVG9kYXkucHVzaCh0YXNrT2JqKTtcbiAgICAgICAgY29uc29sZS5sb2coZXhwb3J0cy50YXNrc1RvZGF5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvamVjdEluZGV4ID09IFwid2Vla1wiKSB7XG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSBuZXcgdGFzayh0aXRsZSwgcHJpb3JpdHksIGRhdGUpO1xuICAgICAgICBleHBvcnRzLnRhc2tzV2Vlay5wdXNoKHRhc2tPYmopO1xuICAgICAgICBjb25zb2xlLmxvZyhleHBvcnRzLnRhc2tzV2Vlayk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHByb2plY3RJbmRleCA9PSBcImltcG9ydGFudFwiKSB7XG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSBuZXcgdGFzayh0aXRsZSwgcHJpb3JpdHksIGRhdGUpO1xuICAgICAgICBleHBvcnRzLnRhc2tzSW1wb3J0YW50LnB1c2godGFza09iaik7XG4gICAgICAgIGNvbnNvbGUubG9nKGV4cG9ydHMudGFza3NJbXBvcnRhbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qICAgICBjb25zb2xlLmxvZyhcIlRoaXMgZXhlY3V0aW5nP1wiKVxuICAgICAgICBjb25zdCB0YXNrT2JqID0gbmV3IHRhc2sodGl0bGUscHJpb3JpdHksZGF0ZSk7XG4gICAgICAgIHByb2plY3RzTGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tzPy5wdXNoKHRhc2tPYmopO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0xpc3RbcHJvamVjdEluZGV4XS50YXNrcyk7ICovXG59XG5leHBvcnRzLmNyZWF0ZVRhc2sgPSBjcmVhdGVUYXNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=