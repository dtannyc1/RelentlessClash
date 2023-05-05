/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n\n\nlet canvas = document.querySelector(\"#main-canvas\");\nconst ctx = canvas.getContext(\"2d\");\ncanvas.width = _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__.GameView.WIDTH;\ncanvas.height = _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__.GameView.HEIGHT;\ncanvas.style.backgroundColor = \"gray\";\n\n// let controller = new Controller(canvas);\n\n// window.controller = controller;\n\nlet game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__.Game(ctx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ1c7QUFFL0MsSUFBSUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDbkQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkNKLE1BQU0sQ0FBQ0ssS0FBSyxHQUFHTiw4REFBYztBQUM3QkMsTUFBTSxDQUFDTyxNQUFNLEdBQUdSLCtEQUFlO0FBQy9CQyxNQUFNLENBQUNTLEtBQUssQ0FBQ0MsZUFBZSxHQUFHLE1BQU07O0FBR3JDOztBQUVBOztBQUVBLElBQUlDLElBQUksR0FBRyxJQUFJYiwrQ0FBSSxDQUFDSyxHQUFHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dhbWV9IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IHsgR2FtZVZpZXcgfSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVfdmlld1wiO1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNhbnZhcy53aWR0aCA9IEdhbWVWaWV3LldJRFRIO1xuY2FudmFzLmhlaWdodCA9IEdhbWVWaWV3LkhFSUdIVDtcbmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcblxuXG4vLyBsZXQgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKGNhbnZhcyk7XG5cbi8vIHdpbmRvdy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcblxubGV0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuIl0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIldJRFRIIiwiaGVpZ2h0IiwiSEVJR0hUIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/controller.js":
/*!***********************************!*\
  !*** ./src/scripts/controller.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Controller\": function() { return /* binding */ Controller; }\n/* harmony export */ });\nclass Controller {\n  constructor(player, option) {\n    window.addEventListener(\"keydown\", event => {\n      // console.log(\"hi\")\n      // console.log(event.key)\n      let buttonMapping;\n      if (option === 1) {\n        buttonMapping = Controller.CONTROLLER_ONE;\n      } else if (option === 2) {\n        buttonMapping = Controller.CONTROLLER_TWO;\n      }\n      if (buttonMapping[event.key]) {\n        // console.log(\"1: \" + Controller.CONTROLLER_ONE[event.key]);\n        switch (buttonMapping[event.key]) {\n          case 'LEFT':\n            player.move({\n              x: -1 * player.moveSpeed\n            });\n            break;\n          case 'RIGHT':\n            player.move({\n              x: 1 * player.moveSpeed\n            });\n            break;\n          case 'UP':\n            player.move({\n              y: -1 * player.moveSpeed\n            });\n            break;\n          case 'DOWN':\n            player.move({\n              y: 1 * player.moveSpeed\n            });\n            break;\n        }\n      }\n    });\n  }\n  static CONTROLLER_ONE = {\n    f: 'B',\n    g: 'A',\n    h: 'LB',\n    r: 'Y',\n    t: 'X',\n    y: 'RB',\n    // 6: 'LT',\n    // 7: 'RT',\n    // 8: 'M',     // minus\n    // 9: 'P',     // plus\n    // 10: 'LJ',   // left joystick\n    // 11: 'RJ',   // right joystick\n    w: 'UP',\n    // up\n    s: 'DOWN',\n    // down\n    a: 'LEFT',\n    d: 'RIGHT'\n    // 16: 'HOME',\n    // 17: 'SS'\n  };\n\n  static CONTROLLER_TWO = {\n    k: 'B',\n    l: 'A',\n    \";\": 'LB',\n    \"i\": 'Y',\n    o: 'X',\n    p: 'RB',\n    // 6: 'LT',\n    // 7: 'RT',\n    // 8: 'M',     // minus\n    // 9: 'P',     // plus\n    // 10: 'LJ',   // left joystick\n    // 11: 'RJ',   // right joystick\n    ArrowUp: 'UP',\n    // up\n    ArrowDown: 'DOWN',\n    // down\n    ArrowLeft: 'LEFT',\n    ArrowRight: 'RIGHT'\n    // 16: 'HOME',\n    // 17: 'SS'\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDTyxNQUFNQSxVQUFVLENBQUM7RUFDcEJDLFdBQVdBLENBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFDO0lBQ3hCQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRUMsS0FBSyxJQUFJO01BQ3hDO01BQ0E7TUFDQSxJQUFJQyxhQUFhO01BQ2pCLElBQUlKLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZEksYUFBYSxHQUFHUCxVQUFVLENBQUNRLGNBQWM7TUFDN0MsQ0FBQyxNQUFNLElBQUlMLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckJJLGFBQWEsR0FBR1AsVUFBVSxDQUFDUyxjQUFjO01BQzdDO01BR0EsSUFBSUYsYUFBYSxDQUFDRCxLQUFLLENBQUNJLEdBQUcsQ0FBQyxFQUFFO1FBQzFCO1FBQ0EsUUFBUUgsYUFBYSxDQUFDRCxLQUFLLENBQUNJLEdBQUcsQ0FBQztVQUM1QixLQUFLLE1BQU07WUFDUFIsTUFBTSxDQUFDUyxJQUFJLENBQUM7Y0FBQ0MsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDVixNQUFNLENBQUNXO1lBQVMsQ0FBQyxDQUFDO1lBQ3JDO1VBQ0osS0FBSyxPQUFPO1lBQ1JYLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDO2NBQUNDLENBQUMsRUFBRSxDQUFDLEdBQUNWLE1BQU0sQ0FBQ1c7WUFBUyxDQUFDLENBQUM7WUFDcEM7VUFDSixLQUFLLElBQUk7WUFDTFgsTUFBTSxDQUFDUyxJQUFJLENBQUM7Y0FBQ0csQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDWixNQUFNLENBQUNXO1lBQVMsQ0FBQyxDQUFDO1lBQ3JDO1VBQ0osS0FBSyxNQUFNO1lBQ1BYLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDO2NBQUNHLENBQUMsRUFBRSxDQUFDLEdBQUNaLE1BQU0sQ0FBQ1c7WUFBUyxDQUFDLENBQUM7WUFDcEM7UUFDUjtNQUVKO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQSxPQUFPTCxjQUFjLEdBQUc7SUFDcEJPLENBQUMsRUFBRSxHQUFHO0lBQ05DLENBQUMsRUFBRSxHQUFHO0lBQ05DLENBQUMsRUFBRSxJQUFJO0lBQ1BDLENBQUMsRUFBRSxHQUFHO0lBQ05DLENBQUMsRUFBRSxHQUFHO0lBQ05MLENBQUMsRUFBRSxJQUFJO0lBQ1A7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0FNLENBQUMsRUFBRSxJQUFJO0lBQUk7SUFDWEMsQ0FBQyxFQUFFLE1BQU07SUFBSztJQUNkQyxDQUFDLEVBQUUsTUFBTTtJQUNUQyxDQUFDLEVBQUU7SUFDSDtJQUNBO0VBQ0osQ0FBQzs7RUFFRCxPQUFPZCxjQUFjLEdBQUc7SUFDcEJlLENBQUMsRUFBRSxHQUFHO0lBQ05DLENBQUMsRUFBRSxHQUFHO0lBQ04sR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSQyxDQUFDLEVBQUUsR0FBRztJQUNOQyxDQUFDLEVBQUUsSUFBSTtJQUNQO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBQyxPQUFPLEVBQUUsSUFBSTtJQUFJO0lBQ2pCQyxTQUFTLEVBQUUsTUFBTTtJQUFLO0lBQ3RCQyxTQUFTLEVBQUUsTUFBTTtJQUNqQkMsVUFBVSxFQUFFO0lBQ1o7SUFDQTtFQUNKLENBQUM7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXIuanM/OWU5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb24pe1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJoaVwiKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQua2V5KVxuICAgICAgICAgICAgbGV0IGJ1dHRvbk1hcHBpbmc7XG4gICAgICAgICAgICBpZiAob3B0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uTWFwcGluZyA9IENvbnRyb2xsZXIuQ09OVFJPTExFUl9PTkU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgICAgIGJ1dHRvbk1hcHBpbmcgPSBDb250cm9sbGVyLkNPTlRST0xMRVJfVFdPO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmIChidXR0b25NYXBwaW5nW2V2ZW50LmtleV0pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjE6IFwiICsgQ29udHJvbGxlci5DT05UUk9MTEVSX09ORVtldmVudC5rZXldKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGJ1dHRvbk1hcHBpbmdbZXZlbnQua2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdMRUZUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5tb3ZlKHt4OiAtMSpwbGF5ZXIubW92ZVNwZWVkfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdSSUdIVCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubW92ZSh7eDogMSpwbGF5ZXIubW92ZVNwZWVkfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdVUCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubW92ZSh7eTogLTEqcGxheWVyLm1vdmVTcGVlZH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRE9XTic6XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubW92ZSh7eTogMSpwbGF5ZXIubW92ZVNwZWVkfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgQ09OVFJPTExFUl9PTkUgPSB7XG4gICAgICAgIGY6ICdCJyxcbiAgICAgICAgZzogJ0EnLFxuICAgICAgICBoOiAnTEInLFxuICAgICAgICByOiAnWScsXG4gICAgICAgIHQ6ICdYJyxcbiAgICAgICAgeTogJ1JCJyxcbiAgICAgICAgLy8gNjogJ0xUJyxcbiAgICAgICAgLy8gNzogJ1JUJyxcbiAgICAgICAgLy8gODogJ00nLCAgICAgLy8gbWludXNcbiAgICAgICAgLy8gOTogJ1AnLCAgICAgLy8gcGx1c1xuICAgICAgICAvLyAxMDogJ0xKJywgICAvLyBsZWZ0IGpveXN0aWNrXG4gICAgICAgIC8vIDExOiAnUkonLCAgIC8vIHJpZ2h0IGpveXN0aWNrXG4gICAgICAgIHc6ICdVUCcsICAgLy8gdXBcbiAgICAgICAgczogJ0RPV04nLCAgICAvLyBkb3duXG4gICAgICAgIGE6ICdMRUZUJyxcbiAgICAgICAgZDogJ1JJR0hUJyxcbiAgICAgICAgLy8gMTY6ICdIT01FJyxcbiAgICAgICAgLy8gMTc6ICdTUydcbiAgICB9O1xuXG4gICAgc3RhdGljIENPTlRST0xMRVJfVFdPID0ge1xuICAgICAgICBrOiAnQicsXG4gICAgICAgIGw6ICdBJyxcbiAgICAgICAgXCI7XCI6ICdMQicsXG4gICAgICAgIFwiaVwiOiAnWScsXG4gICAgICAgIG86ICdYJyxcbiAgICAgICAgcDogJ1JCJyxcbiAgICAgICAgLy8gNjogJ0xUJyxcbiAgICAgICAgLy8gNzogJ1JUJyxcbiAgICAgICAgLy8gODogJ00nLCAgICAgLy8gbWludXNcbiAgICAgICAgLy8gOTogJ1AnLCAgICAgLy8gcGx1c1xuICAgICAgICAvLyAxMDogJ0xKJywgICAvLyBsZWZ0IGpveXN0aWNrXG4gICAgICAgIC8vIDExOiAnUkonLCAgIC8vIHJpZ2h0IGpveXN0aWNrXG4gICAgICAgIEFycm93VXA6ICdVUCcsICAgLy8gdXBcbiAgICAgICAgQXJyb3dEb3duOiAnRE9XTicsICAgIC8vIGRvd25cbiAgICAgICAgQXJyb3dMZWZ0OiAnTEVGVCcsXG4gICAgICAgIEFycm93UmlnaHQ6ICdSSUdIVCcsXG4gICAgICAgIC8vIDE2OiAnSE9NRScsXG4gICAgICAgIC8vIDE3OiAnU1MnXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJwbGF5ZXIiLCJvcHRpb24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJidXR0b25NYXBwaW5nIiwiQ09OVFJPTExFUl9PTkUiLCJDT05UUk9MTEVSX1RXTyIsImtleSIsIm1vdmUiLCJ4IiwibW92ZVNwZWVkIiwieSIsImYiLCJnIiwiaCIsInIiLCJ0IiwidyIsInMiLCJhIiwiZCIsImsiLCJsIiwibyIsInAiLCJBcnJvd1VwIiwiQXJyb3dEb3duIiwiQXJyb3dMZWZ0IiwiQXJyb3dSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/controller.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ \"./src/scripts/controller.js\");\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/scripts/player.js\");\n\n\n\nclass Game {\n  constructor(ctx) {\n    console.log(\"Game Made\");\n    this.ctx = ctx;\n    this.gameView = new _game_view_js__WEBPACK_IMPORTED_MODULE_1__.GameView(this.ctx);\n    this.player1 = new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player([545, 500]);\n    this.controller1 = new _controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller(this.player1, 1);\n    // this.player2 = new Player([400,200]);\n\n    let objects = [this.player1];\n    this.gameView.draw(objects);\n    setInterval(() => this.gameView.draw([this.player1]), 10);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFDSDtBQUNMO0FBRTlCLE1BQU1HLElBQUksQ0FBQztFQUNkQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUU7SUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0YsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDRyxRQUFRLEdBQUcsSUFBSVAsbURBQVEsQ0FBQyxJQUFJLENBQUNJLEdBQUcsQ0FBQztJQUN0QyxJQUFJLENBQUNJLE9BQU8sR0FBRyxJQUFJUCw4Q0FBTSxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLElBQUksQ0FBQ1EsV0FBVyxHQUFHLElBQUlWLHNEQUFVLENBQUMsSUFBSSxDQUFDUyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xEOztJQUVBLElBQUlFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQ0YsT0FBTyxDQUFDO0lBQzVCLElBQUksQ0FBQ0QsUUFBUSxDQUFDSSxJQUFJLENBQUNELE9BQU8sQ0FBQztJQUMzQkUsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDTCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ0gsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDN0Q7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgR2FtZVZpZXcgfSBmcm9tIFwiLi9nYW1lX3ZpZXcuanNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBNYWRlXCIpXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcihbNTQ1LDUwMF0pO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIxID0gbmV3IENvbnRyb2xsZXIodGhpcy5wbGF5ZXIxLCAxKTtcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcihbNDAwLDIwMF0pO1xuXG4gICAgICAgIGxldCBvYmplY3RzID0gW3RoaXMucGxheWVyMV1cbiAgICAgICAgdGhpcy5nYW1lVmlldy5kcmF3KG9iamVjdHMpO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmdhbWVWaWV3LmRyYXcoW3RoaXMucGxheWVyMV0pLCAxMCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJHYW1lVmlldyIsIlBsYXllciIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lVmlldyIsInBsYXllcjEiLCJjb250cm9sbGVyMSIsIm9iamVjdHMiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameView\": function() { return /* binding */ GameView; }\n/* harmony export */ });\nclass GameView {\n  static WIDTH = 960;\n  static HEIGHT = 720;\n  constructor(ctx) {\n    console.log(\"Game View Made\");\n    this.ctx = ctx;\n  }\n  draw(objects) {\n    let ctx = this.ctx;\n    ctx.resetTransform();\n    ctx.clearRect(0, 0, GameView.WIDTH, GameView.HEIGHT);\n    ctx.translate(-350, -200);\n    ctx.scale(0.9, 0.9);\n    let backgroundImg = document.getElementById(\"train-background\");\n    ctx.drawImage(backgroundImg, 0, 0);\n    objects.forEach(obj => {\n      obj.draw(ctx);\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNPLE1BQU1BLFFBQVEsQ0FBQztFQUNsQixPQUFPQyxLQUFLLEdBQUcsR0FBRztFQUNsQixPQUFPQyxNQUFNLEdBQUcsR0FBRztFQUVuQkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBRTdCLElBQUksQ0FBQ0YsR0FBRyxHQUFHQSxHQUFHO0VBQ2xCO0VBRUFHLElBQUlBLENBQUNDLE9BQU8sRUFBRTtJQUNWLElBQUlKLEdBQUcsR0FBRyxJQUFJLENBQUNBLEdBQUc7SUFDbEJBLEdBQUcsQ0FBQ0ssY0FBYyxDQUFDLENBQUM7SUFDcEJMLEdBQUcsQ0FBQ00sU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUNWLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFRCxRQUFRLENBQUNFLE1BQU0sQ0FBQztJQUNsREUsR0FBRyxDQUFDTyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxHQUFHLENBQUM7SUFDeEJQLEdBQUcsQ0FBQ1EsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFFbkIsSUFBSUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztJQUMvRFgsR0FBRyxDQUFDWSxTQUFTLENBQUNILGFBQWEsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRWhDTCxPQUFPLENBQUNTLE9BQU8sQ0FBRUMsR0FBRyxJQUFLO01BQ3JCQSxHQUFHLENBQUNYLElBQUksQ0FBQ0gsR0FBRyxDQUFDO0lBQ2pCLENBQUMsQ0FBQztFQUNOO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanM/ODBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBHYW1lVmlldyB7XG4gICAgc3RhdGljIFdJRFRIID0gOTYwO1xuICAgIHN0YXRpYyBIRUlHSFQgPSA3MjA7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIFZpZXcgTWFkZVwiKVxuXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIGRyYXcob2JqZWN0cykge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGN0eC5yZXNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCxHYW1lVmlldy5XSURUSCwgR2FtZVZpZXcuSEVJR0hUKVxuICAgICAgICBjdHgudHJhbnNsYXRlKC0zNTAsLTIwMCk7XG4gICAgICAgIGN0eC5zY2FsZSgwLjksIDAuOSk7XG5cbiAgICAgICAgbGV0IGJhY2tncm91bmRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYWluLWJhY2tncm91bmRcIik7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZEltZywwLDApO1xuXG4gICAgICAgIG9iamVjdHMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICAgICAgICBvYmouZHJhdyhjdHgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJHYW1lVmlldyIsIldJRFRIIiwiSEVJR0hUIiwiY29uc3RydWN0b3IiLCJjdHgiLCJjb25zb2xlIiwibG9nIiwiZHJhdyIsIm9iamVjdHMiLCJyZXNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsInRyYW5zbGF0ZSIsInNjYWxlIiwiYmFja2dyb3VuZEltZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmF3SW1hZ2UiLCJmb3JFYWNoIiwib2JqIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/moveable.js":
/*!*********************************!*\
  !*** ./src/scripts/moveable.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Moveable\": function() { return /* binding */ Moveable; }\n/* harmony export */ });\nclass Moveable {\n  constructor(options) {\n    console.log(\"Moveable Made\");\n    this.pos = options[\"startpos\"];\n    this.vel = [0, 0];\n  }\n  move(options) {\n    if (options[\"x\"]) {\n      this.pos[0] += options[\"x\"];\n    }\n    if (options[\"y\"]) {\n      this.pos[1] += options[\"y\"];\n    }\n    console.log(this.pos);\n  }\n  draw() {\n    throw new Error(\"Draw not implemented?\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3ZlYWJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ08sTUFBTUEsUUFBUSxDQUFDO0VBQ2xCQyxXQUFXQSxDQUFDQyxPQUFPLEVBQUU7SUFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUU1QixJQUFJLENBQUNDLEdBQUcsR0FBR0gsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUM5QixJQUFJLENBQUNJLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDckI7RUFFQUMsSUFBSUEsQ0FBQ0wsT0FBTyxFQUFFO0lBQ1YsSUFBSUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQ2QsSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUlILE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDL0I7SUFDQSxJQUFJQSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDZCxJQUFJLENBQUNHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSUgsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUMvQjtJQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQztFQUN6QjtFQUVBRyxJQUFJQSxDQUFBLEVBQUc7SUFDSCxNQUFNLElBQUlDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztFQUM1QztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbW92ZWFibGUuanM/OTFiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBNb3ZlYWJsZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vdmVhYmxlIE1hZGVcIilcblxuICAgICAgICB0aGlzLnBvcyA9IG9wdGlvbnNbXCJzdGFydHBvc1wiXTtcbiAgICAgICAgdGhpcy52ZWwgPSBbMCwgMF07XG4gICAgfVxuXG4gICAgbW92ZShvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zW1wieFwiXSkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gb3B0aW9uc1tcInhcIl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnNbXCJ5XCJdKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSArPSBvcHRpb25zW1wieVwiXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvcyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRHJhdyBub3QgaW1wbGVtZW50ZWQ/XCIpXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIk1vdmVhYmxlIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsInBvcyIsInZlbCIsIm1vdmUiLCJkcmF3IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moveable.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/* harmony import */ var _moveable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveable.js */ \"./src/scripts/moveable.js\");\n\nclass Player extends _moveable_js__WEBPACK_IMPORTED_MODULE_0__.Moveable {\n  constructor(startpos) {\n    console.log(\"Player Made\");\n    let options = {\n      startpos: startpos\n    };\n    super(options);\n    this.width = 128;\n    this.height = 128;\n    this.moveSpeed = 2;\n    this.scale = 3.5;\n  }\n  draw(ctx) {\n    // ctx.fillStyle = \"green\";\n    // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n    let spriteSheet = document.getElementById(\"player1-sprite\");\n    ctx.drawImage(spriteSheet, 0, 0, this.width, this.height, this.pos[0], this.pos[1], this.width * this.scale, this.height * this.scale);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFbEMsTUFBTUMsTUFBTSxTQUFTRCxrREFBUTtFQUNoQ0UsV0FBV0EsQ0FBQ0MsUUFBUSxFQUFFO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFFMUIsSUFBSUMsT0FBTyxHQUFHO01BQUNILFFBQVEsRUFBRUE7SUFBUSxDQUFDO0lBQ2xDLEtBQUssQ0FBQ0csT0FBTyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO0lBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztFQUNwQjtFQUVBQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUM7SUFDTDtJQUNBO0lBQ0EsSUFBSUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMzREgsR0FBRyxDQUFDSSxTQUFTLENBQUNILFdBQVcsRUFDckIsQ0FBQyxFQUFDLENBQUMsRUFDSCxJQUFJLENBQUNOLEtBQUssRUFBRSxJQUFJLENBQUNDLE1BQU0sRUFDdkIsSUFBSSxDQUFDUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLElBQUksQ0FBQ1YsS0FBSyxHQUFDLElBQUksQ0FBQ0csS0FBSyxFQUFFLElBQUksQ0FBQ0YsTUFBTSxHQUFDLElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQ3REO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb3ZlYWJsZSB9IGZyb20gXCIuL21vdmVhYmxlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBNb3ZlYWJsZXtcbiAgICBjb25zdHJ1Y3RvcihzdGFydHBvcykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBNYWRlXCIpXG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7c3RhcnRwb3M6IHN0YXJ0cG9zfTtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMud2lkdGggPSAxMjg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTI4O1xuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IDI7XG4gICAgICAgIHRoaXMuc2NhbGUgPSAzLjU7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpe1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGxldCBzcHJpdGVTaGVldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMS1zcHJpdGVcIik7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3ByaXRlU2hlZXQsXG4gICAgICAgICAgICAwLDAsXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSxcbiAgICAgICAgICAgIHRoaXMud2lkdGgqdGhpcy5zY2FsZSwgdGhpcy5oZWlnaHQqdGhpcy5zY2FsZSlcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiTW92ZWFibGUiLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsInN0YXJ0cG9zIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsIm1vdmVTcGVlZCIsInNjYWxlIiwiZHJhdyIsImN0eCIsInNwcml0ZVNoZWV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRyYXdJbWFnZSIsInBvcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;