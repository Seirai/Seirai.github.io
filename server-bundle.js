/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n *  @author     Seirai <seilaizh@gmail.com>\n *  server.js\n *  The server which will run logic to make it authoritative.\n *\n */\nvar logic = __webpack_require__(/*! ./systems/serverlogic */ \"./src/systems/serverlogic.js\");\n\nvar io = __webpack_require__(/*! socket.io */ \"socket.io\").listen(8081);\n\nvar player = function player(id, x, y, stats) {\n  _classCallCheck(this, player);\n\n  if (x == null) this.x = 2;else this.x = x;\n  if (y == null) this.y = 2;else this.y = y;\n\n  if (stats == null) {\n    this.strength = 10;\n    this.agility = 10;\n    this.constitution = 10;\n    this.speed = 2;\n  }\n};\n\n; ////////////////Testing block\n// A\n//\n//\n//  End of testing block\n////////////////\n\nvar players = []; //Player and mob containers.\n\nvar mobs = [];\nvar rawMap = //Pseudo-map for testing for now. Will parse from actual tiled export .json later.\n{\n  width: 12,\n  height: 12,\n  tileHeight: 32,\n  tileWidth: 32\n};\nvar map = []; //On connection event\n\nio.sockets.on('connection', function (socket) {\n  console.log(\"Client connected \".concat(socket.id));\n  var newPlayer = new player(socket.id);\n  players.push(newPlayer); //socket.broadcast.emit sends to all clients except this current socket that there's a new player.\n\n  socket.broadcast.emit('playerLogin', newPlayer); //socket.emit sends to the current socket (newly connected player) information\n  //we will need to send the newly logged in player all the information they need here.\n\n  socket.emit('onLogin', players); //Disconnection event\n\n  socket.on('disconnect', function () {\n    //Remove a player from server-side by the disconnected socket.id\n    var removeIndex = players.findIndex(function (plyr) {\n      return plyr.id === socket.id;\n    });\n    socket.broadcast.emit('playerDisconnect', removeIndex);\n    players.splice(removeIndex, 1);\n    console.log(\"Client disconnected \".concat(socket.id, \", removed player\"));\n  });\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/systems/serverlogic.js":
/*!************************************!*\
  !*** ./src/systems/serverlogic.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n *  @author   Seirai <seilaizh@gmail.com>\n *  serverlogic.js\n *  Where a majority of the server authoritative logic will be placed.\n */\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar Logic = function Logic() {\n  _classCallCheck(this, Logic);\n\n  var rawMap;\n  fs.readFile('../../assets/maps/testmap1.json', 'utf8', function (err, data) {\n    if (err) throw err;\n    rawMap = JSON.parse(data);\n  });\n  console.log(rawMap);\n};\n\nmodule.exports.Logic;\n\n//# sourceURL=webpack:///./src/systems/serverlogic.js?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/server.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/server.js */\"./src/server.js\");\n\n\n//# sourceURL=webpack:///multi_./src/server.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });