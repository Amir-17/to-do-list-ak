/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\n(0,_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://server/./src/app.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nmodule.exports = {\n  mongo: process.env.DB || 'mongodb://localhost:27017/todo-list',\n  port: process.env.PORT || 44300\n};\n\n//# sourceURL=webpack://server/./src/config/config.js?");

/***/ }),

/***/ "./src/controllers/todo.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/todo.controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo.model */ \"./src/models/todo.model.js\");\n\n\nvar create = function create(req, res) {\n  var todo = (0,_models_todo_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req.body);\n  todo.save(function (err, data) {\n    if (err) {\n      return res.status(400).json(err.message);\n    }\n    res.status(201).json(data);\n  });\n};\nvar list = function list(req, res) {\n  _models_todo_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(function (err, data) {\n    if (err) {\n      return res.status(400).json(err.message);\n    }\n    res.status(201).json(data);\n  });\n};\nvar update = function update(req, res) {\n  var id = req.params.id;\n  var isCompleted = req.body.isCompleted;\n  if (id) {\n    _models_todo_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, {\n      isCompleted: isCompleted\n    }, function (err, docs) {\n      if (err) {\n        res.status(400).json({\n          message: \"Todo has not been updated.\"\n        });\n      } else {\n        res.status(200).json({\n          message: \"Todo details successfully updated.\"\n        });\n      }\n    });\n  } else {\n    res.json({\n      error: \"Todo has not been updated.\"\n    });\n  }\n};\nvar remove = function remove(req, res) {\n  var id = req.params.id;\n  _models_todo_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id).exec(function (err, data) {\n    if (err || !data) {\n      return res.status(400).json('Todo not found!');\n    }\n    data.remove(function (err, data) {\n      if (err) {\n        return res.status(400).json(err.message);\n      }\n      res.status(200).json('Todo successfully deleted');\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  list: list,\n  create: create,\n  update: update,\n  remove: remove\n});\n\n//# sourceURL=webpack://server/./src/controllers/todo.controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/config */ \"./src/config/config.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect((_config_config__WEBPACK_IMPORTED_MODULE_1___default().mongo), {\n  useUnifiedTopology: true,\n  useNewUrlParser: true\n}).then(function () {\n  return console.log('Database connected');\n})[\"catch\"](function () {\n  return console.log('Error connecting to database');\n});\n_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen((_config_config__WEBPACK_IMPORTED_MODULE_1___default().port), function (error) {\n  if (error) return console.log(error);\n  console.log(\"Server is listening on port \".concat((_config_config__WEBPACK_IMPORTED_MODULE_1___default().port)));\n});\n\n//# sourceURL=webpack://server/./src/index.js?");

/***/ }),

/***/ "./src/models/todo.model.js":
/*!**********************************!*\
  !*** ./src/models/todo.model.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar TodoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  text: {\n    type: String,\n    required: [true, 'The todo text field is required']\n  },\n  isCompleted: {\n    typle: Boolean,\n    \"default\": false\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Todo', TodoSchema));\n\n//# sourceURL=webpack://server/./src/models/todo.model.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.router */ \"./src/routes/todo.router.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {\n  app.use('/', _todo_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\n\n//# sourceURL=webpack://server/./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/todo.router.js":
/*!***********************************!*\
  !*** ./src/routes/todo.router.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_todo_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/todo.controller */ \"./src/controllers/todo.controller.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/todos').get(_controllers_todo_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_todo_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route('/api/todos/:id').put(_controllers_todo_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update)[\"delete\"](_controllers_todo_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./src/routes/todo.router.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;