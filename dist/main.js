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
exports.renderTasksImportant = exports.renderTasksWeek = exports.renderTasksToday = exports.renderViewImportant = exports.renderViewWeek = exports.renderViewToday = exports.taskPopUp = exports.projectPopUp = exports.renderGeneratedProjectsView = exports.renderProjects = void 0;
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
;
function renderGeneratedProjectsView(index) {
    rightPanel.textContent = '';
    const view = document.createElement('div');
    rightPanel.appendChild(view);
    view.classList.add('generatedView');
    view.classList.add(`${index}`);
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
    rightPanel.textContent = '';
    let vari = document.getElementById('viewImportant');
    let vari1 = document.getElementById('viewWeek');
    let vari2 = document.getElementById('viewToday');
    /*     if(typeof(vari) != 'undefined' && vari != null)
        {
            vari?.remove();
        }
        if(typeof(vari1) != 'undefined' && vari1 != null)
        {
            vari1.remove()
        }
        if(typeof(vari2) != 'undefined' && vari2 != null)
        {
            vari2.remove()
        } */
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
    rightPanel.textContent = '';
    let vari = document.getElementById('viewImportant');
    let vari1 = document.getElementById('viewWeek');
    let vari2 = document.getElementById('viewToday');
    /*     if(typeof(vari) != 'undefined' && vari != null)
        {
            vari?.remove();
        }
        if(typeof(vari1) != 'undefined' && vari1 != null)
        {
            vari1.remove()
        }
        if(typeof(vari2) != 'undefined' && vari2 != null)
        {
            vari2.remove()
        } */
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
    rightPanel.textContent = '';
    let vari = document.getElementById('viewImportant');
    let vari1 = document.getElementById('viewWeek');
    let vari2 = document.getElementById('viewToday');
    /*     if(typeof(vari) != 'undefined' && vari != null)
        {
            vari?.remove();
        }
        if(typeof(vari1) != 'undefined' && vari1 != null)
        {
            vari1.remove()
        }
        if(typeof(vari2) != 'undefined' && vari2 != null)
        {
            vari2.remove()
        } */
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
    var _a;
    if (typeof ((_a = rightPanel === null || rightPanel === void 0 ? void 0 : rightPanel.firstChild) === null || _a === void 0 ? void 0 : _a.nodeValue) == 'string') {
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
    else {
        let child = rightPanel.children;
        (0, tasks_1.createTaskCustom)(parseInt(child[0].classList[1]), document.querySelector('.taskPopUpInput').value, document.querySelector('.taskPopUpDate').value, document.querySelector('.taskPopUpDate').value);
    }
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTaskCustom = exports.createTask = exports.tasksImportant = exports.tasksWeek = exports.tasksToday = void 0;
const projects_1 = __webpack_require__(/*! ./projects */ "./src/projects.ts");
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
function createTaskCustom(projectIndex, title, priority, date) {
    var _a;
    const taskObj = new task(title, priority, date);
    (_a = projects_1.projectsList[projectIndex].tasks) === null || _a === void 0 ? void 0 : _a.push(taskObj);
    console.log("Working?");
    console.log(projects_1.projectsList[projectIndex]);
}
exports.createTaskCustom = createTaskCustom;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbn1cXG5cXG4jY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyQjJFO1xcbn1cXG5cXG4jbGVmdFBhbmVsXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDozMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEJFMkM7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNsZWZ0UGFuZWxUaXRsZSwjYWRkUHJvamVjdFxcbntcXG4gICAgaGVpZ2h0Om1heC1jb250ZW50XFxufVxcblxcbiNkZWZhdWx0UHJvamVjdHNcXG57XFxuICAgIGhlaWdodDozMHZoO1xcbn1cXG5cXG4jZ2VuZXJhdGVkUHJvamVjdHNcXG57XFxuICAgIGhlaWdodDo1MHZoO1xcbn1cXG5cXG4uYnRuXFxue1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuLnByb2pCdG5cXG57XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3JpZ2h0UGFuZWxcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOjcwdnc7XFxufVxcblxcbiNhZGRUYXNrXFxue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyUHJvamVjdFxcbntcXG4gICAgbWFyZ2luLXRvcDoxOHB4IDtcXG59XFxuXFxuI3ZpZXdUb2RheVxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5UYXNrXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaWRlYmFyUHJvamVjdFxcbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG51bFxcbntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5saVxcbntcXG4gICAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBOztJQUVJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuXFxuI2NvbnRhaW5lclxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MkIyRTtcXG59XFxuXFxuI2xlZnRQYW5lbFxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6MzB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6MjBweDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCRTJDO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbGVmdFBhbmVsVGl0bGUsI2FkZFByb2plY3RcXG57XFxuICAgIGhlaWdodDptYXgtY29udGVudFxcbn1cXG5cXG4jZGVmYXVsdFByb2plY3RzXFxue1xcbiAgICBoZWlnaHQ6MzB2aDtcXG59XFxuXFxuI2dlbmVyYXRlZFByb2plY3RzXFxue1xcbiAgICBoZWlnaHQ6NTB2aDtcXG59XFxuXFxuLmJ0blxcbntcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufVxcblxcbi5wcm9qQnRuXFxue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyaWdodFBhbmVsXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDo3MHZ3O1xcbn1cXG5cXG4jYWRkVGFza1xcbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhclByb2plY3RcXG57XFxuICAgIG1hcmdpbi10b3A6MThweCA7XFxufVxcblxcbiN2aWV3VG9kYXlcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluVGFza1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2lkZWJhclByb2plY3RcXG57XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudWxcXG57XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubGlcXG57XFxuICAgIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZW5kZXJUYXNrc0ltcG9ydGFudCA9IGV4cG9ydHMucmVuZGVyVGFza3NXZWVrID0gZXhwb3J0cy5yZW5kZXJUYXNrc1RvZGF5ID0gZXhwb3J0cy5yZW5kZXJWaWV3SW1wb3J0YW50ID0gZXhwb3J0cy5yZW5kZXJWaWV3V2VlayA9IGV4cG9ydHMucmVuZGVyVmlld1RvZGF5ID0gZXhwb3J0cy50YXNrUG9wVXAgPSBleHBvcnRzLnByb2plY3RQb3BVcCA9IGV4cG9ydHMucmVuZGVyR2VuZXJhdGVkUHJvamVjdHNWaWV3ID0gZXhwb3J0cy5yZW5kZXJQcm9qZWN0cyA9IHZvaWQgMDtcbmNvbnN0IHByb2plY3RzXzEgPSByZXF1aXJlKFwiLi9wcm9qZWN0c1wiKTtcbmNvbnN0IF8xID0gcmVxdWlyZShcIi5cIik7XG5jb25zdCB0YXNrc18xID0gcmVxdWlyZShcIi4vdGFza3NcIik7XG5jb25zdCByaWdodFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0UGFuZWwnKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICBkZWZhdWx0UHJvamVjdExpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzXzEucHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhclByb2plY3QnKTtcbiAgICAgICAgbGV0IHBMZW4gPSBwcm9qZWN0c18xLnByb2plY3RzTGlzdFtpXS5pbmRleDtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoYCR7cExlbn1gKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNfMS5wcm9qZWN0c0xpc3RbaV0udGl0bGU7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0TGlzdCA9PT0gbnVsbCB8fCBkZWZhdWx0UHJvamVjdExpc3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlZmF1bHRQcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0WzFdO1xuICAgICAgICAgICAgcmVuZGVyR2VuZXJhdGVkUHJvamVjdHNWaWV3KChwYXJzZUludChpbmRleCkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5yZW5kZXJQcm9qZWN0cyA9IHJlbmRlclByb2plY3RzO1xuO1xuZnVuY3Rpb24gcmVuZGVyR2VuZXJhdGVkUHJvamVjdHNWaWV3KGluZGV4KSB7XG4gICAgcmlnaHRQYW5lbC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodFBhbmVsLmFwcGVuZENoaWxkKHZpZXcpO1xuICAgIHZpZXcuY2xhc3NMaXN0LmFkZCgnZ2VuZXJhdGVkVmlldycpO1xuICAgIHZpZXcuY2xhc3NMaXN0LmFkZChgJHtpbmRleH1gKTtcbn1cbmV4cG9ydHMucmVuZGVyR2VuZXJhdGVkUHJvamVjdHNWaWV3ID0gcmVuZGVyR2VuZXJhdGVkUHJvamVjdHNWaWV3O1xuZnVuY3Rpb24gcHJvamVjdFBvcFVwKCkge1xuICAgIGNvbnN0IHBvcFVwUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlUG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHN1Ym1pdFBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGl0bGVQb3BVcC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW5wdXQnKTtcbiAgICB0aXRsZVBvcFVwLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGVQb3BVcCcpO1xuICAgIHN1Ym1pdFBvcFVwLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0UG9wVXAnKTtcbiAgICBzdWJtaXRQb3BVcC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgcG9wVXBQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlUG9wVXApO1xuICAgIHBvcFVwUHJvamVjdC5hcHBlbmRDaGlsZChzdWJtaXRQb3BVcCk7XG4gICAgXzEuY29udGFpbmVyLmFwcGVuZENoaWxkKHBvcFVwUHJvamVjdCk7XG59XG5leHBvcnRzLnByb2plY3RQb3BVcCA9IHByb2plY3RQb3BVcDtcbmZ1bmN0aW9uIHRhc2tQb3BVcCgpIHtcbiAgICBjb25zdCB0YXNrUG9wVXBNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGNvbnN0IHByaW9yaXR5TWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB0YXNrUG9wVXBNYWluLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgdGFza1BvcFVwTWFpbi5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgdGFza1BvcFVwTWFpbi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIHRhc2tQb3BVcE1haW4uYXBwZW5kQ2hpbGQodGFza1N1Ym1pdCk7XG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaCk7XG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5TWlkKTtcbiAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3cpO1xuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgdGFza1N1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgcHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIHByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIHByaW9yaXR5TWlkLnRleHRDb250ZW50ID0gXCJNaWRpdW1cIjtcbiAgICA7XG4gICAgdGFza1BvcFVwTWFpbi5jbGFzc0xpc3QuYWRkKCd0YXNrUG9wVXBNYWluJyk7XG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tQb3BVcElucHV0Jyk7XG4gICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFza1BvcFVwRGF0ZScpO1xuICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tQb3BVcFByaW8nKTtcbiAgICB0YXNrU3VibWl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tQb3BVcFN1Ym1pdCcpO1xuICAgIF8xLmNvbnRhaW5lciA9PT0gbnVsbCB8fCBfMS5jb250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF8xLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUG9wVXBNYWluKTtcbn1cbmV4cG9ydHMudGFza1BvcFVwID0gdGFza1BvcFVwO1xuZnVuY3Rpb24gcmVuZGVyVmlld1RvZGF5KCkge1xuICAgIHJpZ2h0UGFuZWwudGV4dENvbnRlbnQgPSAnJztcbiAgICBsZXQgdmFyaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3SW1wb3J0YW50Jyk7XG4gICAgbGV0IHZhcmkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdXZWVrJyk7XG4gICAgbGV0IHZhcmkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdUb2RheScpO1xuICAgIC8qICAgICBpZih0eXBlb2YodmFyaSkgIT0gJ3VuZGVmaW5lZCcgJiYgdmFyaSAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXJpPy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YodmFyaTEpICE9ICd1bmRlZmluZWQnICYmIHZhcmkxICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhcmkxLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mKHZhcmkyKSAhPSAndW5kZWZpbmVkJyAmJiB2YXJpMiAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXJpMi5yZW1vdmUoKVxuICAgICAgICB9ICovXG4gICAgY29uc3Qgdmlld0RlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGNvbnN0IHRvZGF5VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5Vmlldy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZGF5VmlldycpO1xuICAgIHRvZGF5Vmlldy5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICB2aWV3RGVmYXVsdC5hcHBlbmRDaGlsZCh0b2RheVZpZXcpO1xuICAgIHJpZ2h0UGFuZWwgPT09IG51bGwgfHwgcmlnaHRQYW5lbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmlnaHRQYW5lbC5hcHBlbmRDaGlsZCh2aWV3RGVmYXVsdCk7XG4gICAgdmlld0RlZmF1bHQuc2V0QXR0cmlidXRlKCdpZCcsICd2aWV3VG9kYXknKTtcbn1cbmV4cG9ydHMucmVuZGVyVmlld1RvZGF5ID0gcmVuZGVyVmlld1RvZGF5O1xuZnVuY3Rpb24gcmVuZGVyVmlld1dlZWsoKSB7XG4gICAgcmlnaHRQYW5lbC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGxldCB2YXJpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdJbXBvcnRhbnQnKTtcbiAgICBsZXQgdmFyaTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1dlZWsnKTtcbiAgICBsZXQgdmFyaTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1RvZGF5Jyk7XG4gICAgLyogICAgIGlmKHR5cGVvZih2YXJpKSAhPSAndW5kZWZpbmVkJyAmJiB2YXJpICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhcmk/LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZih2YXJpMSkgIT0gJ3VuZGVmaW5lZCcgJiYgdmFyaTEgIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyaTEucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YodmFyaTIpICE9ICd1bmRlZmluZWQnICYmIHZhcmkyICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhcmkyLnJlbW92ZSgpXG4gICAgICAgIH0gKi9cbiAgICBjb25zdCB2aWV3RGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgY29uc3QgdG9kYXlWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlWaWV3LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2Vla1ZpZXcnKTtcbiAgICB0b2RheVZpZXcuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgdmlld0RlZmF1bHQuYXBwZW5kQ2hpbGQodG9kYXlWaWV3KTtcbiAgICByaWdodFBhbmVsID09PSBudWxsIHx8IHJpZ2h0UGFuZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJpZ2h0UGFuZWwuYXBwZW5kQ2hpbGQodmlld0RlZmF1bHQpO1xuICAgIHZpZXdEZWZhdWx0LnNldEF0dHJpYnV0ZSgnaWQnLCAndmlld1dlZWsnKTtcbn1cbmV4cG9ydHMucmVuZGVyVmlld1dlZWsgPSByZW5kZXJWaWV3V2VlaztcbmZ1bmN0aW9uIHJlbmRlclZpZXdJbXBvcnRhbnQoKSB7XG4gICAgcmlnaHRQYW5lbC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGxldCB2YXJpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdJbXBvcnRhbnQnKTtcbiAgICBsZXQgdmFyaTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1dlZWsnKTtcbiAgICBsZXQgdmFyaTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld1RvZGF5Jyk7XG4gICAgLyogICAgIGlmKHR5cGVvZih2YXJpKSAhPSAndW5kZWZpbmVkJyAmJiB2YXJpICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhcmk/LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZih2YXJpMSkgIT0gJ3VuZGVmaW5lZCcgJiYgdmFyaTEgIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyaTEucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YodmFyaTIpICE9ICd1bmRlZmluZWQnICYmIHZhcmkyICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhcmkyLnJlbW92ZSgpXG4gICAgICAgIH0gKi9cbiAgICBjb25zdCB2aWV3RGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgY29uc3QgdG9kYXlWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlWaWV3LnNldEF0dHJpYnV0ZSgnaWQnLCAnaW1wb3J0YW50VmlldycpO1xuICAgIHRvZGF5Vmlldy5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICB2aWV3RGVmYXVsdC5hcHBlbmRDaGlsZCh0b2RheVZpZXcpO1xuICAgIHJpZ2h0UGFuZWwgPT09IG51bGwgfHwgcmlnaHRQYW5lbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmlnaHRQYW5lbC5hcHBlbmRDaGlsZCh2aWV3RGVmYXVsdCk7XG4gICAgdmlld0RlZmF1bHQuc2V0QXR0cmlidXRlKCdpZCcsICd2aWV3SW1wb3J0YW50Jyk7XG59XG5leHBvcnRzLnJlbmRlclZpZXdJbXBvcnRhbnQgPSByZW5kZXJWaWV3SW1wb3J0YW50O1xuZnVuY3Rpb24gcmVuZGVyVGFza3NUb2RheSgpIHtcbiAgICBjb25zdCB0YXNrc1RvZGF5VmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdUb2RheScpO1xuICAgIHRhc2tzVG9kYXlWYXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzXzEudGFza3NUb2RheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtYWluVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluVGFzay5jbGFzc0xpc3QuYWRkKCdtYWluVGFzaycpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza3NfMS50YXNrc1RvZGF5W2ldLnRpdGxlO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFza3NfMS50YXNrc1RvZGF5W2ldLmRhdGU7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrc18xLnRhc2tzVG9kYXlbaV0ucHJpb3JpdHk7XG4gICAgICAgIG1haW5UYXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgICAgIG1haW5UYXNrLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgbWFpblRhc2suYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgdGFza3NUb2RheVZhciA9PT0gbnVsbCB8fCB0YXNrc1RvZGF5VmFyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXNrc1RvZGF5VmFyLmFwcGVuZENoaWxkKG1haW5UYXNrKTtcbiAgICB9XG59XG5leHBvcnRzLnJlbmRlclRhc2tzVG9kYXkgPSByZW5kZXJUYXNrc1RvZGF5O1xuZnVuY3Rpb24gcmVuZGVyVGFza3NXZWVrKCkge1xuICAgIGNvbnN0IHRhc2tzV2Vla1ZhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3V2VlaycpO1xuICAgIHRhc2tzV2Vla1Zhci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NfMS50YXNrc1dlZWsubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWFpblRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpblRhc2suY2xhc3NMaXN0LmFkZCgnbWFpblRhc2snKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tzXzEudGFza3NXZWVrW2ldLnRpdGxlO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFza3NfMS50YXNrc1dlZWtbaV0uZGF0ZTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2tzXzEudGFza3NXZWVrW2ldLnByaW9yaXR5O1xuICAgICAgICBtYWluVGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICBtYWluVGFzay5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgICAgIG1haW5UYXNrLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgICAgIHRhc2tzV2Vla1ZhciA9PT0gbnVsbCB8fCB0YXNrc1dlZWtWYXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhc2tzV2Vla1Zhci5hcHBlbmRDaGlsZChtYWluVGFzayk7XG4gICAgfVxufVxuZXhwb3J0cy5yZW5kZXJUYXNrc1dlZWsgPSByZW5kZXJUYXNrc1dlZWs7XG5mdW5jdGlvbiByZW5kZXJUYXNrc0ltcG9ydGFudCgpIHtcbiAgICBjb25zdCB0YXNrc0ltcG9ydGFudFZhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3SW1wb3J0YW50Jyk7XG4gICAgdGFza3NJbXBvcnRhbnRWYXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzXzEudGFza3NJbXBvcnRhbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWFpblRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpblRhc2suY2xhc3NMaXN0LmFkZCgnbWFpblRhc2snKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tzXzEudGFza3NJbXBvcnRhbnRbaV0udGl0bGU7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrc18xLnRhc2tzSW1wb3J0YW50W2ldLmRhdGU7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrc18xLnRhc2tzSW1wb3J0YW50W2ldLnByaW9yaXR5O1xuICAgICAgICBtYWluVGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICBtYWluVGFzay5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgICAgIG1haW5UYXNrLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgICAgIHRhc2tzSW1wb3J0YW50VmFyID09PSBudWxsIHx8IHRhc2tzSW1wb3J0YW50VmFyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXNrc0ltcG9ydGFudFZhci5hcHBlbmRDaGlsZChtYWluVGFzayk7XG4gICAgfVxufVxuZXhwb3J0cy5yZW5kZXJUYXNrc0ltcG9ydGFudCA9IHJlbmRlclRhc2tzSW1wb3J0YW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbnRhaW5lciA9IHZvaWQgMDtcbnJlcXVpcmUoXCIuL3N0eWxlcy9pbmRleC5jc3NcIik7XG5jb25zdCBkb21fMSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcbmNvbnN0IHByb2plY3RzXzEgPSByZXF1aXJlKFwiLi9wcm9qZWN0c1wiKTtcbmNvbnN0IHRhc2tzXzEgPSByZXF1aXJlKFwiLi90YXNrc1wiKTtcbmV4cG9ydHMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnRuJyk7XG5jb25zdCByaWdodFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0UGFuZWwnKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bicpO1xuY29uc3QgdG9kYXlQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5UHJvamVjdCcpO1xuY29uc3Qgd2Vla1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla1Byb2plY3QnKTtcbmNvbnN0IGltcG9ydGFudFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW50UHJvamVjdCcpO1xuKDAsIGRvbV8xLnByb2plY3RQb3BVcCkoKTtcbigwLCBkb21fMS50YXNrUG9wVXApKCk7XG5jb25zdCB0YXNrUG9wVXBJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBJbnB1dCcpLnZhbHVlO1xuY29uc3QgdGFza1BvcFVwRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWU7XG5jb25zdCB0YXNrUG9wVXBQcmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQb3BVcFByaW8nKS52YWx1ZTtcbmNvbnN0IHN1Ym1pdFByb2pQb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRQb3BVcCcpO1xuc3VibWl0UHJvalBvcFVwID09PSBudWxsIHx8IHN1Ym1pdFByb2pQb3BVcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3VibWl0UHJvalBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAoMCwgcHJvamVjdHNfMS5jcmVhdGVQcm9qZWN0KSgpOyB9KTtcbi8vYWRkVGFza0J0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57Y3JlYXRlVGFzaygpfSk7XG50b2RheVByb2plY3QgPT09IG51bGwgfHwgdG9kYXlQcm9qZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2RheVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7ICgwLCBkb21fMS5yZW5kZXJWaWV3VG9kYXkpKCk7ICgwLCBkb21fMS5yZW5kZXJUYXNrc1RvZGF5KSgpOyB9KTtcbndlZWtQcm9qZWN0ID09PSBudWxsIHx8IHdlZWtQcm9qZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3ZWVrUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgKDAsIGRvbV8xLnJlbmRlclZpZXdXZWVrKSgpOyAoMCwgZG9tXzEucmVuZGVyVGFza3NXZWVrKSgpOyB9KTtcbmltcG9ydGFudFByb2plY3QgPT09IG51bGwgfHwgaW1wb3J0YW50UHJvamVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW1wb3J0YW50UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgKDAsIGRvbV8xLnJlbmRlclZpZXdJbXBvcnRhbnQpKCk7ICgwLCBkb21fMS5yZW5kZXJUYXNrc0ltcG9ydGFudCkoKTsgfSk7XG5jb25zdCB0YXNrUG9wVXBTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwU3VibWl0Jyk7XG50YXNrUG9wVXBTdWJtaXQgPT09IG51bGwgfHwgdGFza1BvcFVwU3VibWl0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXNrUG9wVXBTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGlmICh0eXBlb2YgKChfYSA9IHJpZ2h0UGFuZWwgPT09IG51bGwgfHwgcmlnaHRQYW5lbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmlnaHRQYW5lbC5maXJzdENoaWxkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZVZhbHVlKSA9PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgY2hpbGQgPSByaWdodFBhbmVsLmNoaWxkcmVuO1xuICAgICAgICBjb25zb2xlLmxvZyhyaWdodFBhbmVsLmNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGNoaWxkWzBdLmlkID09IFwidmlld1RvZGF5XCIpIHtcbiAgICAgICAgICAgICgwLCB0YXNrc18xLmNyZWF0ZVRhc2spKFwidG9kYXlcIiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQb3BVcElucHV0JykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUpO1xuICAgICAgICAgICAgKDAsIGRvbV8xLnJlbmRlclRhc2tzVG9kYXkpKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRbMF0uaWQgPT0gXCJ2aWV3V2Vla1wiKSB7XG4gICAgICAgICAgICAoMCwgdGFza3NfMS5jcmVhdGVUYXNrKShcIndlZWtcIiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQb3BVcElucHV0JykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUpO1xuICAgICAgICAgICAgKDAsIGRvbV8xLnJlbmRlclRhc2tzV2VlaykoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZFswXS5pZCA9PSBcInZpZXdJbXBvcnRhbnRcIikge1xuICAgICAgICAgICAgKDAsIHRhc2tzXzEuY3JlYXRlVGFzaykoXCJpbXBvcnRhbnRcIiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tQb3BVcElucHV0JykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBEYXRlJykudmFsdWUpO1xuICAgICAgICAgICAgKDAsIGRvbV8xLnJlbmRlclRhc2tzSW1wb3J0YW50KSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBjaGlsZCA9IHJpZ2h0UGFuZWwuY2hpbGRyZW47XG4gICAgICAgICgwLCB0YXNrc18xLmNyZWF0ZVRhc2tDdXN0b20pKHBhcnNlSW50KGNoaWxkWzBdLmNsYXNzTGlzdFsxXSksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrUG9wVXBJbnB1dCcpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwRGF0ZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1BvcFVwRGF0ZScpLnZhbHVlKTtcbiAgICB9XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9qZWN0c0xpc3QgPSBleHBvcnRzLmNyZWF0ZVByb2plY3QgPSB2b2lkIDA7XG5jb25zdCBkb21fMSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcbmxldCBwcm9qZWN0c0xpc3QgPSBbXTtcbmV4cG9ydHMucHJvamVjdHNMaXN0ID0gcHJvamVjdHNMaXN0O1xuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGluZGV4KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVQb3BVcCcpLnZhbHVlO1xuICAgIGxldCBpbmRleCA9IHByb2plY3RzTGlzdC5sZW5ndGg7XG4gICAgY29uc3QgcHJvamVjdE9iaiA9IG5ldyBQcm9qZWN0KHRpdGxlLCBpbmRleCk7XG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdE9iaik7XG4gICAgKDAsIGRvbV8xLnJlbmRlclByb2plY3RzKSgpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzTGlzdCk7XG4gICAgY29uc29sZS5sb2coKTtcbn1cbmV4cG9ydHMuY3JlYXRlUHJvamVjdCA9IGNyZWF0ZVByb2plY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlVGFza0N1c3RvbSA9IGV4cG9ydHMuY3JlYXRlVGFzayA9IGV4cG9ydHMudGFza3NJbXBvcnRhbnQgPSBleHBvcnRzLnRhc2tzV2VlayA9IGV4cG9ydHMudGFza3NUb2RheSA9IHZvaWQgMDtcbmNvbnN0IHByb2plY3RzXzEgPSByZXF1aXJlKFwiLi9wcm9qZWN0c1wiKTtcbmNsYXNzIHRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB9XG59XG5leHBvcnRzLnRhc2tzVG9kYXkgPSBbXTtcbmV4cG9ydHMudGFza3NXZWVrID0gW107XG5leHBvcnRzLnRhc2tzSW1wb3J0YW50ID0gW107XG5mdW5jdGlvbiBjcmVhdGVUYXNrKHByb2plY3RJbmRleCwgdGl0bGUsIHByaW9yaXR5LCBkYXRlKSB7XG4gICAgaWYgKHByb2plY3RJbmRleCA9PSBcInRvZGF5XCIpIHtcbiAgICAgICAgY29uc3QgdGFza09iaiA9IG5ldyB0YXNrKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSk7XG4gICAgICAgIGV4cG9ydHMudGFza3NUb2RheS5wdXNoKHRhc2tPYmopO1xuICAgICAgICBjb25zb2xlLmxvZyhleHBvcnRzLnRhc2tzVG9kYXkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwcm9qZWN0SW5kZXggPT0gXCJ3ZWVrXCIpIHtcbiAgICAgICAgY29uc3QgdGFza09iaiA9IG5ldyB0YXNrKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSk7XG4gICAgICAgIGV4cG9ydHMudGFza3NXZWVrLnB1c2godGFza09iaik7XG4gICAgICAgIGNvbnNvbGUubG9nKGV4cG9ydHMudGFza3NXZWVrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvamVjdEluZGV4ID09IFwiaW1wb3J0YW50XCIpIHtcbiAgICAgICAgY29uc3QgdGFza09iaiA9IG5ldyB0YXNrKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSk7XG4gICAgICAgIGV4cG9ydHMudGFza3NJbXBvcnRhbnQucHVzaCh0YXNrT2JqKTtcbiAgICAgICAgY29uc29sZS5sb2coZXhwb3J0cy50YXNrc0ltcG9ydGFudCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyogICAgIGNvbnNvbGUubG9nKFwiVGhpcyBleGVjdXRpbmc/XCIpXG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSBuZXcgdGFzayh0aXRsZSxwcmlvcml0eSxkYXRlKTtcbiAgICAgICAgcHJvamVjdHNMaXN0W3Byb2plY3RJbmRleF0udGFza3M/LnB1c2godGFza09iaik7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzTGlzdFtwcm9qZWN0SW5kZXhdLnRhc2tzKTsgKi9cbn1cbmV4cG9ydHMuY3JlYXRlVGFzayA9IGNyZWF0ZVRhc2s7XG5mdW5jdGlvbiBjcmVhdGVUYXNrQ3VzdG9tKHByb2plY3RJbmRleCwgdGl0bGUsIHByaW9yaXR5LCBkYXRlKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHRhc2tPYmogPSBuZXcgdGFzayh0aXRsZSwgcHJpb3JpdHksIGRhdGUpO1xuICAgIChfYSA9IHByb2plY3RzXzEucHJvamVjdHNMaXN0W3Byb2plY3RJbmRleF0udGFza3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wdXNoKHRhc2tPYmopO1xuICAgIGNvbnNvbGUubG9nKFwiV29ya2luZz9cIik7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNfMS5wcm9qZWN0c0xpc3RbcHJvamVjdEluZGV4XSk7XG59XG5leHBvcnRzLmNyZWF0ZVRhc2tDdXN0b20gPSBjcmVhdGVUYXNrQ3VzdG9tO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=