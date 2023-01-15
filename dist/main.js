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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin:0;\n    padding:0;\n}\n\n#container\n{\n    display: flex;\n    background-color: #242B2E;\n}\n\n#leftPanel\n{\n    display: flex;\n    flex-direction: column;\n    width:30vw;\n    text-align: center;\n    gap:20px;\n    height:100vh;\n    background-color: #F4BE2C;\n    padding: 10px;\n}\n\n#leftPanelTitle,#addProject\n{\n    height:max-content\n}\n\n#defaultProjects\n{\n    height:30vh;\n}\n\n#generatedProjects\n{\n    height:50vh;\n}\n\n.btn\n{\n    border-radius: 100px;\n}\n\n.projBtn\n{\n    cursor: pointer;\n}\n\n#rightPanel\n{\n    display: flex;\n    flex-direction: column;\n    width:70vw;\n}\n\n#addTask\n{\n    text-align: center;\n}\n\n.sidebarProject\n{\n    margin-top:18px ;\n}\n\n#viewToday\n{\n    display: flex;\n    flex-direction: column;\n}\n\n.mainTask\n{\n    display: flex;\n    justify-content: space-between;\n}\n\n.sidebarProject\n{\n    cursor: pointer;\n}\n\nul\n{\n    text-decoration: none;\n    list-style: none;\n}\n\nli\n{\n    margin-top: 18px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,yBAAyB;IACzB,aAAa;AACjB;;AAEA;;IAEI;AACJ;;AAEA;;IAEI,WAAW;AACf;;AAEA;;IAEI,WAAW;AACf;;AAEA;;IAEI,oBAAoB;AACxB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;;IAEI,gBAAgB;AACpB","sourcesContent":["*{\n    margin:0;\n    padding:0;\n}\n\n#container\n{\n    display: flex;\n    background-color: #242B2E;\n}\n\n#leftPanel\n{\n    display: flex;\n    flex-direction: column;\n    width:30vw;\n    text-align: center;\n    gap:20px;\n    height:100vh;\n    background-color: #F4BE2C;\n    padding: 10px;\n}\n\n#leftPanelTitle,#addProject\n{\n    height:max-content\n}\n\n#defaultProjects\n{\n    height:30vh;\n}\n\n#generatedProjects\n{\n    height:50vh;\n}\n\n.btn\n{\n    border-radius: 100px;\n}\n\n.projBtn\n{\n    cursor: pointer;\n}\n\n#rightPanel\n{\n    display: flex;\n    flex-direction: column;\n    width:70vw;\n}\n\n#addTask\n{\n    text-align: center;\n}\n\n.sidebarProject\n{\n    margin-top:18px ;\n}\n\n#viewToday\n{\n    display: flex;\n    flex-direction: column;\n}\n\n.mainTask\n{\n    display: flex;\n    justify-content: space-between;\n}\n\n.sidebarProject\n{\n    cursor: pointer;\n}\n\nul\n{\n    text-decoration: none;\n    list-style: none;\n}\n\nli\n{\n    margin-top: 18px;\n}\n"],"sourceRoot":""}]);
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
exports.renderTasksImportant = exports.renderTasksWeek = exports.renderTasksToday = exports.renderTasksDefault = exports.renderViewImportant = exports.renderViewWeek = exports.renderViewToday = exports.taskPopUp = exports.projectPopUp = exports.renderGeneratedProjectsView = exports.renderProjects = void 0;
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
        projectTitle.addEventListener('click', () => {
            let index = projectTitle.classList[1];
            renderGeneratedProjectsView((parseInt(index)));
        });
    }
}
exports.renderProjects = renderProjects;
function renderGeneratedProjectsView(index) {
    rightPanel.textContent = '';
    const generatedView = document.createElement('div');
    generatedView.classList.add('upper-view');
    rightPanel === null || rightPanel === void 0 ? void 0 : rightPanel.appendChild(generatedView);
    const view = document.createElement('div');
    generatedView.appendChild(view);
    view.classList.add(`generatedView${index}`);
}
exports.renderGeneratedProjectsView = renderGeneratedProjectsView;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbiNjb250YWluZXJcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDJCMkU7XFxufVxcblxcbiNsZWZ0UGFuZWxcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOjMwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QkUyQztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2xlZnRQYW5lbFRpdGxlLCNhZGRQcm9qZWN0XFxue1xcbiAgICBoZWlnaHQ6bWF4LWNvbnRlbnRcXG59XFxuXFxuI2RlZmF1bHRQcm9qZWN0c1xcbntcXG4gICAgaGVpZ2h0OjMwdmg7XFxufVxcblxcbiNnZW5lcmF0ZWRQcm9qZWN0c1xcbntcXG4gICAgaGVpZ2h0OjUwdmg7XFxufVxcblxcbi5idG5cXG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbn1cXG5cXG4ucHJvakJ0blxcbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcmlnaHRQYW5lbFxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6NzB2dztcXG59XFxuXFxuI2FkZFRhc2tcXG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXJQcm9qZWN0XFxue1xcbiAgICBtYXJnaW4tdG9wOjE4cHggO1xcbn1cXG5cXG4jdmlld1RvZGF5XFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpblRhc2tcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNpZGViYXJQcm9qZWN0XFxue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnVsXFxue1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxpXFxue1xcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbn1cXG5cXG4jY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyQjJFO1xcbn1cXG5cXG4jbGVmdFBhbmVsXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDozMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEJFMkM7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNsZWZ0UGFuZWxUaXRsZSwjYWRkUHJvamVjdFxcbntcXG4gICAgaGVpZ2h0Om1heC1jb250ZW50XFxufVxcblxcbiNkZWZhdWx0UHJvamVjdHNcXG57XFxuICAgIGhlaWdodDozMHZoO1xcbn1cXG5cXG4jZ2VuZXJhdGVkUHJvamVjdHNcXG57XFxuICAgIGhlaWdodDo1MHZoO1xcbn1cXG5cXG4uYnRuXFxue1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuLnByb2pCdG5cXG57XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3JpZ2h0UGFuZWxcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOjcwdnc7XFxufVxcblxcbiNhZGRUYXNrXFxue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyUHJvamVjdFxcbntcXG4gICAgbWFyZ2luLXRvcDoxOHB4IDtcXG59XFxuXFxuI3ZpZXdUb2RheVxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5UYXNrXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaWRlYmFyUHJvamVjdFxcbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG51bFxcbntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5saVxcbntcXG4gICAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlbmRlclRhc2tzSW1wb3J0YW50ID0gZXhwb3J0cy5yZW5kZXJUYXNrc1dlZWsgPSBleHBvcnRzLnJlbmRlclRhc2tzVG9kYXkgPSBleHBvcnRzLnJlbmRlclRhc2tzRGVmYXVsdCA9IGV4cG9ydHMucmVuZGVyVmlld0ltcG9ydGFudCA9IGV4cG9ydHMucmVuZGVyVmlld1dlZWsgPSBleHBvcnRzLnJlbmRlclZpZXdUb2RheSA9IGV4cG9ydHMudGFza1BvcFVwID0gZXhwb3J0cy5wcm9qZWN0UG9wVXAgPSBleHBvcnRzLnJlbmRlckdlbmVyYXRlZFByb2plY3RzVmlldyA9IGV4cG9ydHMucmVuZGVyUHJvamVjdHMgPSB2b2lkIDA7XG5jb25zdCBwcm9qZWN0c18xID0gcmVxdWlyZShcIi4vcHJvamVjdHNcIik7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgdGFza3NfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzXCIpO1xuY29uc3QgcmlnaHRQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodFBhbmVsJyk7XG5jb25zdCBkZWZhdWx0UHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtbGlzdCcpO1xuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgZGVmYXVsdFByb2plY3RMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c18xLnByb2plY3RzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJQcm9qZWN0Jyk7XG4gICAgICAgIGxldCBwTGVuID0gcHJvamVjdHNfMS5wcm9qZWN0c0xpc3RbaV0uaW5kZXg7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKGAke3BMZW59YCk7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzXzEucHJvamVjdHNMaXN0W2ldLnRpdGxlO1xuICAgICAgICBkZWZhdWx0UHJvamVjdExpc3QgPT09IG51bGwgfHwgZGVmYXVsdFByb2plY3RMaXN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWZhdWx0UHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdFRpdGxlLmNsYXNzTGlzdFsxXTtcbiAgICAgICAgICAgIHJlbmRlckdlbmVyYXRlZFByb2plY3RzVmlldygocGFyc2VJbnQoaW5kZXgpKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMucmVuZGVyUHJvamVjdHMgPSByZW5kZXJQcm9qZWN0cztcbmZ1bmN0aW9uIHJlbmRlckdlbmVyYXRlZFByb2plY3RzVmlldyhpbmRleCkge1xuICAgIHJpZ2h0UGFuZWwudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBnZW5lcmF0ZWRWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2VuZXJhdGVkVmlldy5jbGFzc0xpc3QuYWRkKCd1cHBlci12aWV3Jyk7XG4gICAgcmlnaHRQYW5lbCA9PT0gbnVsbCB8fCByaWdodFBhbmVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiByaWdodFBhbmVsLmFwcGVuZENoaWxkKGdlbmVyYXRlZFZpZXcpO1xuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnZW5lcmF0ZWRWaWV3LmFwcGVuZENoaWxkKHZpZXcpO1xuICAgIHZpZXcuY2xhc3NMaXN0LmFkZChgZ2VuZXJhdGVkVmlldyR7aW5kZXh9YCk7XG59XG5leHBvcnRzLnJlbmRlckdlbmVyYXRlZFByb2plY3RzVmlldyA9IHJlbmRlckdlbmVyYXRlZFByb2plY3RzVmlldztcbmZ1bmN0aW9uIHByb2plY3RQb3BVcCgpIHtcbiAgICBjb25zdCBwb3BVcFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZVBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBzdWJtaXRQb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRpdGxlUG9wVXAuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2lucHV0Jyk7XG4gICAgdGl0bGVQb3BVcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlUG9wVXAnKTtcbiAgICBzdWJtaXRQb3BVcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdFBvcFVwJyk7XG4gICAgc3VibWl0UG9wVXAudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHBvcFVwUHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZVBvcFVwKTtcbiAgICBwb3BVcFByb2plY3QuYXBwZW5kQ2hpbGQoc3VibWl0UG9wVXApO1xuICAgIF8xLmNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3BVcFByb2plY3QpO1xufVxuZXhwb3J0cy5wcm9qZWN0UG9wVXAgPSBwcm9qZWN0UG9wVXA7XG5mdW5jdGlvbiB0YXNrUG9wVXAoKSB7XG4gICAgY29uc3QgdGFza1BvcFVwTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjb25zdCBwcmlvcml0eU1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNvbnN0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgdGFza1BvcFVwTWFpbi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tQb3BVcE1haW4uYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICAgIHRhc2tQb3BVcE1haW4uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICB0YXNrUG9wVXBNYWluLmFwcGVuZENoaWxkKHRhc2tTdWJtaXQpO1xuICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eUhpZ2gpO1xuICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eU1pZCk7XG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5TG93KTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIHRhc2tTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHByaW9yaXR5TG93LnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICBwcmlvcml0eUhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICBwcmlvcml0eU1pZC50ZXh0Q29udGVudCA9IFwiTWlkaXVtXCI7XG4gICAgO1xuICAgIHRhc2tQb3BVcE1haW4uY2xhc3NMaXN0LmFkZCgndGFza1BvcFVwTWFpbicpO1xuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrUG9wVXBJbnB1dCcpO1xuICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tQb3BVcERhdGUnKTtcbiAgICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrUG9wVXBQcmlvJyk7XG4gICAgdGFza1N1Ym1pdC5jbGFzc0xpc3QuYWRkKCd0YXNrUG9wVXBTdWJtaXQnKTtcbiAgICBfMS5jb250YWluZXIgPT09IG51bGwgfHwgXzEuY29udGFpbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfMS5jb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1BvcFVwTWFpbik7XG59XG5leHBvcnRzLnRhc2tQb3BVcCA9IHRhc2tQb3BVcDtcbmZ1bmN0aW9uIHJlbmRlclZpZXdUb2RheSgpIHtcbiAgICBsZXQgdmFyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3SW1wb3J0YW50Jyk7XG4gICAgbGV0IHZhcmkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdXZWVrJyk7XG4gICAgbGV0IHZhcmkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdUb2RheScpO1xuICAgIGlmICh0eXBlb2YgKHZhcmkpICE9ICd1bmRlZmluZWQnICYmIHZhcmkgIT0gbnVsbCkge1xuICAgICAgICB2YXJpID09PSBudWxsIHx8IHZhcmkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmkucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgKHZhcmkxKSAhPSAndW5kZWZpbmVkJyAmJiB2YXJpMSAhPSBudWxsKSB7XG4gICAgICAgIHZhcmkxLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mICh2YXJpMikgIT0gJ3VuZGVmaW5lZCcgJiYgdmFyaTIgIT0gbnVsbCkge1xuICAgICAgICB2YXJpMi5yZW1vdmUoKTtcbiAgICB9XG4gICAgY29uc3Qgdmlld0RlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGNvbnN0IHRvZGF5VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5Vmlldy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZGF5VmlldycpO1xuICAgIHRvZGF5Vmlldy5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICB2aWV3RGVmYXVsdC5hcHBlbmRDaGlsZCh0b2RheVZpZXcpO1xuICAgIHJpZ2h0UGFuZWwgPT09IG51bGwgfHwgcmlnaHRQYW5lbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmlnaHRQYW5lbC5hcHBlbmRDaGlsZCh2aWV3RGVmYXVsdCk7XG4gICAgdmlld0RlZmF1bHQuc2V0QXR0cmlidXRlKCdpZCcsICd2aWV3VG9kYXknKTtcbn1cbmV4cG9ydHMucmVuZGVyVmlld1RvZGF5ID0gcmVuZGVyVmlld1RvZGF5O1xuZnVuY3Rpb24gcmVuZGVyVmlld1dlZWsoKSB7XG4gICAgbGV0IHZhcmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0ltcG9ydGFudCcpO1xuICAgIGxldCB2YXJpMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3V2VlaycpO1xuICAgIGxldCB2YXJpMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3VG9kYXknKTtcbiAgICBpZiAodHlwZW9mICh2YXJpKSAhPSAndW5kZWZpbmVkJyAmJiB2YXJpICE9IG51bGwpIHtcbiAgICAgICAgdmFyaSA9PT0gbnVsbCB8fCB2YXJpID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YXJpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mICh2YXJpMSkgIT0gJ3VuZGVmaW5lZCcgJiYgdmFyaTEgIT0gbnVsbCkge1xuICAgICAgICB2YXJpMS5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiAodmFyaTIpICE9ICd1bmRlZmluZWQnICYmIHZhcmkyICE9IG51bGwpIHtcbiAgICAgICAgdmFyaTIucmVtb3ZlKCk7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdEZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBjb25zdCB0b2RheVZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheVZpZXcuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWVrVmlldycpO1xuICAgIHRvZGF5Vmlldy5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICB2aWV3RGVmYXVsdC5hcHBlbmRDaGlsZCh0b2RheVZpZXcpO1xuICAgIHJpZ2h0UGFuZWwgPT09IG51bGwgfHwgcmlnaHRQYW5lbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmlnaHRQYW5lbC5hcHBlbmRDaGlsZCh2aWV3RGVmYXVsdCk7XG4gICAgdmlld0RlZmF1bHQuc2V0QXR0cmlidXRlKCdpZCcsICd2aWV3V2VlaycpO1xufVxuZXhwb3J0cy5yZW5kZXJWaWV3V2VlayA9IHJlbmRlclZpZXdXZWVrO1xuZnVuY3Rpb24gcmVuZGVyVmlld0ltcG9ydGFudCgpIHtcbiAgICBsZXQgdmFyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3SW1wb3J0YW50Jyk7XG4gICAgbGV0IHZhcmkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdXZWVrJyk7XG4gICAgbGV0IHZhcmkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdUb2RheScpO1xuICAgIGlmICh0eXBlb2YgKHZhcmkpICE9ICd1bmRlZmluZWQnICYmIHZhcmkgIT0gbnVsbCkge1xuICAgICAgICB2YXJpID09PSBudWxsIHx8IHZhcmkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmkucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgKHZhcmkxKSAhPSAndW5kZWZpbmVkJyAmJiB2YXJpMSAhPSBudWxsKSB7XG4gICAgICAgIHZhcmkxLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mICh2YXJpMikgIT0gJ3VuZGVmaW5lZCcgJiYgdmFyaTIgIT0gbnVsbCkge1xuICAgICAgICB2YXJpMi5yZW1vdmUoKTtcbiAgICB9XG4gICAgY29uc3Qgdmlld0RlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGNvbnN0IHRvZGF5VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5Vmlldy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ltcG9ydGFudFZpZXcnKTtcbiAgICB0b2RheVZpZXcuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgdmlld0RlZmF1bHQuYXBwZW5kQ2hpbGQodG9kYXlWaWV3KTtcbiAgICByaWdodFBhbmVsID09PSBudWxsIHx8IHJpZ2h0UGFuZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJpZ2h0UGFuZWwuYXBwZW5kQ2hpbGQodmlld0RlZmF1bHQpO1xuICAgIHZpZXdEZWZhdWx0LnNldEF0dHJpYnV0ZSgnaWQnLCAndmlld0ltcG9ydGFudCcpO1xufVxuZXhwb3J0cy5yZW5kZXJWaWV3SW1wb3J0YW50ID0gcmVuZGVyVmlld0ltcG9ydGFudDtcbmZ1bmN0aW9uIHJlbmRlclRhc2tzRGVmYXVsdCgpIHtcbiAgICBsZXQgdmFyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3SW1wb3J0YW50Jyk7XG4gICAgbGV0IHZhcmkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdXZWVrJyk7XG4gICAgbGV0IHZhcmkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdUb2RheScpO1xufVxuZXhwb3J0cy5yZW5kZXJUYXNrc0RlZmF1bHQgPSByZW5kZXJUYXNrc0RlZmF1bHQ7XG5mdW5jdGlvbiByZW5kZXJUYXNrc1RvZGF5KCkge1xuICAgIGNvbnN0IHRhc2tzVG9kYXlWYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1RvZGF5Jyk7XG4gICAgdGFza3NUb2RheVZhci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NfMS50YXNrc1RvZGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1haW5UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5UYXNrLmNsYXNzTGlzdC5hZGQoJ21haW5UYXNrJyk7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrc18xLnRhc2tzVG9kYXlbaV0udGl0bGU7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrc18xLnRhc2tzVG9kYXlbaV0uZGF0ZTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2tzXzEudGFza3NUb2RheVtpXS5wcmlvcml0eTtcbiAgICAgICAgbWFpblRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgbWFpblRhc2suYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgICAgICBtYWluVGFzay5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrc1RvZGF5VmFyID09PSBudWxsIHx8IHRhc2tzVG9kYXlWYXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhc2tzVG9kYXlWYXIuYXBwZW5kQ2hpbGQobWFpblRhc2spO1xuICAgIH1cbn1cbmV4cG9ydHMucmVuZGVyVGFza3NUb2RheSA9IHJlbmRlclRhc2tzVG9kYXk7XG5mdW5jdGlvbiByZW5kZXJUYXNrc1dlZWsoKSB7XG4gICAgY29uc3QgdGFza3NXZWVrVmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdXZWVrJyk7XG4gICAgdGFza3NXZWVrVmFyLnRleHRDb250ZW50ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc18xLnRhc2tzV2Vlay5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtYWluVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluVGFzay5jbGFzc0xpc3QuYWRkKCdtYWluVGFzaycpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza3NfMS50YXNrc1dlZWtbaV0udGl0bGU7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrc18xLnRhc2tzV2Vla1tpXS5kYXRlO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFza3NfMS50YXNrc1dlZWtbaV0ucHJpb3JpdHk7XG4gICAgICAgIG1haW5UYXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgICAgIG1haW5UYXNrLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgbWFpblRhc2suYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgdGFza3NXZWVrVmFyID09PSBudWxsIHx8IHRhc2tzV2Vla1ZhciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFza3NXZWVrVmFyLmFwcGVuZENoaWxkKG1haW5UYXNrKTtcbiAgICB9XG59XG5leHBvcnRzLnJlbmRlclRhc2tzV2VlayA9IHJlbmRlclRhc2tzV2VlaztcbmZ1bmN0aW9uIHJlbmRlclRhc2tzSW1wb3J0YW50KCkge1xuICAgIGNvbnN0IHRhc2tzSW1wb3J0YW50VmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdJbXBvcnRhbnQnKTtcbiAgICB0YXNrc0ltcG9ydGFudFZhci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NfMS50YXNrc0ltcG9ydGFudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtYWluVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluVGFzay5jbGFzc0xpc3QuYWRkKCdtYWluVGFzaycpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza3NfMS50YXNrc0ltcG9ydGFudFtpXS50aXRsZTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tzXzEudGFza3NJbXBvcnRhbnRbaV0uZGF0ZTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2tzXzEudGFza3NJbXBvcnRhbnRbaV0ucHJpb3JpdHk7XG4gICAgICAgIG1haW5UYXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgICAgIG1haW5UYXNrLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgbWFpblRhc2suYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgdGFza3NJbXBvcnRhbnRWYXIgPT09IG51bGwgfHwgdGFza3NJbXBvcnRhbnRWYXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhc2tzSW1wb3J0YW50VmFyLmFwcGVuZENoaWxkKG1haW5UYXNrKTtcbiAgICB9XG59XG5leHBvcnRzLnJlbmRlclRhc2tzSW1wb3J0YW50ID0gcmVuZGVyVGFza3NJbXBvcnRhbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29udGFpbmVyID0gdm9pZCAwO1xucmVxdWlyZShcIi4vc3R5bGVzL2luZGV4LmNzc1wiKTtcbmNvbnN0IGRvbV8xID0gcmVxdWlyZShcIi4vZG9tXCIpO1xuY29uc3QgcHJvamVjdHNfMSA9IHJlcXVpcmUoXCIuL3Byb2plY3RzXCIpO1xuY29uc3QgdGFza3NfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzXCIpO1xuZXhwb3J0cy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdG4nKTtcbmNvbnN0IHJpZ2h0UGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHRQYW5lbCcpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG5jb25zdCB0b2RheVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlQcm9qZWN0Jyk7XG5jb25zdCB3ZWVrUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrUHJvamVjdCcpO1xuY29uc3QgaW1wb3J0YW50UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRhbnRQcm9qZWN0Jyk7XG4oMCwgZG9tXzEucHJvamVjdFBvcFVwKSgpO1xuKDAsIGRvbV8xLnRhc2tQb3BVcCkoKTtcbmNvbnN0IHRhc2tQb3BVcElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQb3BVcElucHV0JykudmFsdWU7XG5jb25zdCB0YXNrUG9wVXBEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQb3BVcERhdGUnKS52YWx1ZTtcbmNvbnN0IHRhc2tQb3BVcFByaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1BvcFVwUHJpbycpLnZhbHVlO1xuY29uc3Qgc3VibWl0UHJvalBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFBvcFVwJyk7XG5zdWJtaXRQcm9qUG9wVXAgPT09IG51bGwgfHwgc3VibWl0UHJvalBvcFVwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdWJtaXRQcm9qUG9wVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7ICgwLCBwcm9qZWN0c18xLmNyZWF0ZVByb2plY3QpKCk7IH0pO1xuLy9hZGRUYXNrQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntjcmVhdGVUYXNrKCl9KTtcbnRvZGF5UHJvamVjdCA9PT0gbnVsbCB8fCB0b2RheVByb2plY3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRvZGF5UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgKDAsIGRvbV8xLnJlbmRlclZpZXdUb2RheSkoKTsgKDAsIGRvbV8xLnJlbmRlclRhc2tzVG9kYXkpKCk7IH0pO1xud2Vla1Byb2plY3QgPT09IG51bGwgfHwgd2Vla1Byb2plY3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdlZWtQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAoMCwgZG9tXzEucmVuZGVyVmlld1dlZWspKCk7ICgwLCBkb21fMS5yZW5kZXJUYXNrc1dlZWspKCk7IH0pO1xuaW1wb3J0YW50UHJvamVjdCA9PT0gbnVsbCB8fCBpbXBvcnRhbnRQcm9qZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbXBvcnRhbnRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAoMCwgZG9tXzEucmVuZGVyVmlld0ltcG9ydGFudCkoKTsgKDAsIGRvbV8xLnJlbmRlclRhc2tzSW1wb3J0YW50KSgpOyB9KTtcbmNvbnN0IHRhc2tQb3BVcFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBTdWJtaXQnKTtcbnRhc2tQb3BVcFN1Ym1pdCA9PT0gbnVsbCB8fCB0YXNrUG9wVXBTdWJtaXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhc2tQb3BVcFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocmlnaHRQYW5lbCA9PT0gbnVsbCB8fCByaWdodFBhbmVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiByaWdodFBhbmVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbGV0IGNoaWxkID0gcmlnaHRQYW5lbC5jaGlsZHJlbjtcbiAgICAgICAgY29uc29sZS5sb2cocmlnaHRQYW5lbC5jaGlsZHJlbik7XG4gICAgICAgIGlmIChjaGlsZFswXS5pZCA9PSBcInZpZXdUb2RheVwiKSB7XG4gICAgICAgICAgICAoMCwgdGFza3NfMS5jcmVhdGVUYXNrKShcInRvZGF5XCIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBJbnB1dCcpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwRGF0ZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwRGF0ZScpLnZhbHVlKTtcbiAgICAgICAgICAgICgwLCBkb21fMS5yZW5kZXJUYXNrc1RvZGF5KSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkWzBdLmlkID09IFwidmlld1dlZWtcIikge1xuICAgICAgICAgICAgKDAsIHRhc2tzXzEuY3JlYXRlVGFzaykoXCJ3ZWVrXCIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBJbnB1dCcpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwRGF0ZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwRGF0ZScpLnZhbHVlKTtcbiAgICAgICAgICAgICgwLCBkb21fMS5yZW5kZXJUYXNrc1dlZWspKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRbMF0uaWQgPT0gXCJ2aWV3SW1wb3J0YW50XCIpIHtcbiAgICAgICAgICAgICgwLCB0YXNrc18xLmNyZWF0ZVRhc2spKFwiaW1wb3J0YW50XCIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBJbnB1dCcpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwRGF0ZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwRGF0ZScpLnZhbHVlKTtcbiAgICAgICAgICAgICgwLCBkb21fMS5yZW5kZXJUYXNrc0ltcG9ydGFudCkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgICgwLCB0YXNrc18xLmNyZWF0ZVRhc2spKDAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBJbnB1dCcpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwRGF0ZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwRGF0ZScpLnZhbHVlKTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnByb2plY3RzTGlzdCA9IGV4cG9ydHMuY3JlYXRlUHJvamVjdCA9IHZvaWQgMDtcbmNvbnN0IGRvbV8xID0gcmVxdWlyZShcIi4vZG9tXCIpO1xubGV0IHByb2plY3RzTGlzdCA9IFtdO1xuZXhwb3J0cy5wcm9qZWN0c0xpc3QgPSBwcm9qZWN0c0xpc3Q7XG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZVBvcFVwJykudmFsdWU7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdHNMaXN0Lmxlbmd0aDtcbiAgICBjb25zdCBwcm9qZWN0T2JqID0gbmV3IFByb2plY3QodGl0bGUsIGluZGV4KTtcbiAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0T2JqKTtcbiAgICAoMCwgZG9tXzEucmVuZGVyUHJvamVjdHMpKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNMaXN0KTtcbiAgICBjb25zb2xlLmxvZygpO1xufVxuZXhwb3J0cy5jcmVhdGVQcm9qZWN0ID0gY3JlYXRlUHJvamVjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVUYXNrID0gZXhwb3J0cy50YXNrc0ltcG9ydGFudCA9IGV4cG9ydHMudGFza3NXZWVrID0gZXhwb3J0cy50YXNrc1RvZGF5ID0gdm9pZCAwO1xuY2xhc3MgdGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIHByaW9yaXR5LCBkYXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIH1cbn1cbmV4cG9ydHMudGFza3NUb2RheSA9IFtdO1xuZXhwb3J0cy50YXNrc1dlZWsgPSBbXTtcbmV4cG9ydHMudGFza3NJbXBvcnRhbnQgPSBbXTtcbmZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdEluZGV4LCB0aXRsZSwgcHJpb3JpdHksIGRhdGUpIHtcbiAgICBpZiAocHJvamVjdEluZGV4ID09IFwidG9kYXlcIikge1xuICAgICAgICBjb25zdCB0YXNrT2JqID0gbmV3IHRhc2sodGl0bGUsIHByaW9yaXR5LCBkYXRlKTtcbiAgICAgICAgZXhwb3J0cy50YXNrc1RvZGF5LnB1c2godGFza09iaik7XG4gICAgICAgIGNvbnNvbGUubG9nKGV4cG9ydHMudGFza3NUb2RheSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHByb2plY3RJbmRleCA9PSBcIndlZWtcIikge1xuICAgICAgICBjb25zdCB0YXNrT2JqID0gbmV3IHRhc2sodGl0bGUsIHByaW9yaXR5LCBkYXRlKTtcbiAgICAgICAgZXhwb3J0cy50YXNrc1dlZWsucHVzaCh0YXNrT2JqKTtcbiAgICAgICAgY29uc29sZS5sb2coZXhwb3J0cy50YXNrc1dlZWspO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwcm9qZWN0SW5kZXggPT0gXCJpbXBvcnRhbnRcIikge1xuICAgICAgICBjb25zdCB0YXNrT2JqID0gbmV3IHRhc2sodGl0bGUsIHByaW9yaXR5LCBkYXRlKTtcbiAgICAgICAgZXhwb3J0cy50YXNrc0ltcG9ydGFudC5wdXNoKHRhc2tPYmopO1xuICAgICAgICBjb25zb2xlLmxvZyhleHBvcnRzLnRhc2tzSW1wb3J0YW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKiAgICAgY29uc29sZS5sb2coXCJUaGlzIGV4ZWN1dGluZz9cIilcbiAgICAgICAgY29uc3QgdGFza09iaiA9IG5ldyB0YXNrKHRpdGxlLHByaW9yaXR5LGRhdGUpO1xuICAgICAgICBwcm9qZWN0c0xpc3RbcHJvamVjdEluZGV4XS50YXNrcz8ucHVzaCh0YXNrT2JqKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNMaXN0W3Byb2plY3RJbmRleF0udGFza3MpOyAqL1xufVxuZXhwb3J0cy5jcmVhdGVUYXNrID0gY3JlYXRlVGFzaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9