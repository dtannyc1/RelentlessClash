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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\nlet canvas = document.querySelector(\"#main-canvas\");\nconst ctx = canvas.getContext(\"2d\");\ncanvas.height = 500;\ncanvas.width = 500;\ncanvas.style.backgroundColor = \"black\";\n\n// let controller = new Controller(canvas);\n\n// window.controller = controller;\n\nlet game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__.Game(ctx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBb0M7QUFFcEMsSUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDbkQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkNKLE1BQU0sQ0FBQ0ssTUFBTSxHQUFHLEdBQUc7QUFDbkJMLE1BQU0sQ0FBQ00sS0FBSyxHQUFHLEdBQUc7QUFDbEJOLE1BQU0sQ0FBQ08sS0FBSyxDQUFDQyxlQUFlLEdBQUcsT0FBTzs7QUFHdEM7O0FBRUE7O0FBRUEsSUFBSUMsSUFBSSxHQUFHLElBQUlWLCtDQUFJLENBQUNJLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZX0gZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY2FudmFzLmhlaWdodCA9IDUwMDtcbmNhbnZhcy53aWR0aCA9IDUwMDtcbmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG5cblxuLy8gbGV0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihjYW52YXMpO1xuXG4vLyB3aW5kb3cuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG5cbmxldCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpZHRoIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ \"./src/scripts/controller.js\");\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/scripts/player.js\");\n\n\n\nclass Game {\n  constructor(ctx) {\n    console.log(\"Game Made\");\n    this.ctx = ctx;\n    this.gameView = new _game_view_js__WEBPACK_IMPORTED_MODULE_1__.GameView(this.ctx);\n    this.player1 = new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player([200, 200]);\n    this.controller1 = new _controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller(this.player1, 1);\n    // this.player2 = new Player([400,200]);\n\n    let objects = [this.player1];\n    this.gameView.draw(objects);\n    setInterval(() => this.gameView.draw([this.player1]), 10);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFDSDtBQUNMO0FBRTlCLE1BQU1HLElBQUksQ0FBQztFQUNkQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUU7SUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0YsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDRyxRQUFRLEdBQUcsSUFBSVAsbURBQVEsQ0FBQyxJQUFJLENBQUNJLEdBQUcsQ0FBQztJQUN0QyxJQUFJLENBQUNJLE9BQU8sR0FBRyxJQUFJUCw4Q0FBTSxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLElBQUksQ0FBQ1EsV0FBVyxHQUFHLElBQUlWLHNEQUFVLENBQUMsSUFBSSxDQUFDUyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xEOztJQUVBLElBQUlFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQ0YsT0FBTyxDQUFDO0lBQzVCLElBQUksQ0FBQ0QsUUFBUSxDQUFDSSxJQUFJLENBQUNELE9BQU8sQ0FBQztJQUMzQkUsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDTCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ0gsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDN0Q7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgR2FtZVZpZXcgfSBmcm9tIFwiLi9nYW1lX3ZpZXcuanNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBNYWRlXCIpXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcihbMjAwLDIwMF0pO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIxID0gbmV3IENvbnRyb2xsZXIodGhpcy5wbGF5ZXIxLCAxKTtcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcihbNDAwLDIwMF0pO1xuXG4gICAgICAgIGxldCBvYmplY3RzID0gW3RoaXMucGxheWVyMV1cbiAgICAgICAgdGhpcy5nYW1lVmlldy5kcmF3KG9iamVjdHMpO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmdhbWVWaWV3LmRyYXcoW3RoaXMucGxheWVyMV0pLCAxMCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJHYW1lVmlldyIsIlBsYXllciIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lVmlldyIsInBsYXllcjEiLCJjb250cm9sbGVyMSIsIm9iamVjdHMiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameView\": function() { return /* binding */ GameView; }\n/* harmony export */ });\nclass GameView {\n  constructor(ctx) {\n    console.log(\"Game View Made\");\n    this.ctx = ctx;\n  }\n  draw(objects) {\n    let ctx = this.ctx;\n    ctx.clearRect(0, 0, GameView.WIDTH, GameView.HEIGHT);\n    objects.forEach(obj => {\n      obj.draw(ctx);\n    });\n  }\n  static WIDTH = 500;\n  static HEIGHT = 500;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNPLE1BQU1BLFFBQVEsQ0FBQztFQUNsQkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBRTdCLElBQUksQ0FBQ0YsR0FBRyxHQUFHQSxHQUFHO0VBQ2xCO0VBRUFHLElBQUlBLENBQUNDLE9BQU8sRUFBRTtJQUNWLElBQUlKLEdBQUcsR0FBRyxJQUFJLENBQUNBLEdBQUc7SUFDbEJBLEdBQUcsQ0FBQ0ssU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUNQLFFBQVEsQ0FBQ1EsS0FBSyxFQUFFUixRQUFRLENBQUNTLE1BQU0sQ0FBQztJQUNsREgsT0FBTyxDQUFDSSxPQUFPLENBQUVDLEdBQUcsSUFBSztNQUNyQkEsR0FBRyxDQUFDTixJQUFJLENBQUNILEdBQUcsQ0FBQztJQUNqQixDQUFDLENBQUM7RUFDTjtFQUVBLE9BQU9NLEtBQUssR0FBRyxHQUFHO0VBQ2xCLE9BQU9DLE1BQU0sR0FBRyxHQUFHO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzPzgwZWUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgVmlldyBNYWRlXCIpXG5cbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgZHJhdyhvYmplY3RzKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsR2FtZVZpZXcuV0lEVEgsIEdhbWVWaWV3LkhFSUdIVClcbiAgICAgICAgb2JqZWN0cy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgICAgICAgIG9iai5kcmF3KGN0eCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIFdJRFRIID0gNTAwO1xuICAgIHN0YXRpYyBIRUlHSFQgPSA1MDA7XG59XG4iXSwibmFtZXMiOlsiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImN0eCIsImNvbnNvbGUiLCJsb2ciLCJkcmF3Iiwib2JqZWN0cyIsImNsZWFyUmVjdCIsIldJRFRIIiwiSEVJR0hUIiwiZm9yRWFjaCIsIm9iaiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/moveable.js":
/*!*********************************!*\
  !*** ./src/scripts/moveable.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Moveable\": function() { return /* binding */ Moveable; }\n/* harmony export */ });\nclass Moveable {\n  constructor(options) {\n    console.log(\"Moveable Made\");\n    this.pos = options[\"startpos\"];\n    this.vel = [0, 0];\n  }\n  move(options) {\n    if (options[\"x\"]) {\n      this.pos[0] += options[\"x\"];\n    }\n    if (options[\"y\"]) {\n      this.pos[1] += options[\"y\"];\n    }\n    // console.log(this.pos);\n  }\n\n  draw() {}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3ZlYWJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ08sTUFBTUEsUUFBUSxDQUFDO0VBQ2xCQyxXQUFXQSxDQUFDQyxPQUFPLEVBQUU7SUFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUU1QixJQUFJLENBQUNDLEdBQUcsR0FBR0gsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUM5QixJQUFJLENBQUNJLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDckI7RUFFQUMsSUFBSUEsQ0FBQ0wsT0FBTyxFQUFFO0lBQ1YsSUFBSUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQ2QsSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUlILE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDL0I7SUFDQSxJQUFJQSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDZCxJQUFJLENBQUNHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSUgsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUMvQjtJQUNBO0VBQ0o7O0VBRUFNLElBQUlBLENBQUEsRUFBRyxDQUVQO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvc2NyaXB0cy9tb3ZlYWJsZS5qcz85MWI5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIE1vdmVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW92ZWFibGUgTWFkZVwiKVxuXG4gICAgICAgIHRoaXMucG9zID0gb3B0aW9uc1tcInN0YXJ0cG9zXCJdO1xuICAgICAgICB0aGlzLnZlbCA9IFswLCAwXTtcbiAgICB9XG5cbiAgICBtb3ZlKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnNbXCJ4XCJdKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSBvcHRpb25zW1wieFwiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9uc1tcInlcIl0pIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdICs9IG9wdGlvbnNbXCJ5XCJdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIk1vdmVhYmxlIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsInBvcyIsInZlbCIsIm1vdmUiLCJkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/moveable.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/* harmony import */ var _moveable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveable.js */ \"./src/scripts/moveable.js\");\n\nclass Player extends _moveable_js__WEBPACK_IMPORTED_MODULE_0__.Moveable {\n  constructor(startpos) {\n    console.log(\"Player Made\");\n    let options = {\n      startpos: startpos\n    };\n    super(options);\n    this.width = 10;\n    this.height = 50;\n    this.moveSpeed = 2;\n  }\n  draw(ctx) {\n    ctx.fillStyle = \"green\";\n    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFbEMsTUFBTUMsTUFBTSxTQUFTRCxrREFBUTtFQUNoQ0UsV0FBV0EsQ0FBQ0MsUUFBUSxFQUFFO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFFMUIsSUFBSUMsT0FBTyxHQUFHO01BQUNILFFBQVEsRUFBRUE7SUFBUSxDQUFDO0lBQ2xDLEtBQUssQ0FBQ0csT0FBTyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsQ0FBQztFQUN0QjtFQUVBQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUM7SUFDTEEsR0FBRyxDQUFDQyxTQUFTLEdBQUcsT0FBTztJQUN2QkQsR0FBRyxDQUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDUCxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7RUFDbkU7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vdmVhYmxlIH0gZnJvbSBcIi4vbW92ZWFibGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIE1vdmVhYmxle1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0cG9zKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIE1hZGVcIilcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtzdGFydHBvczogc3RhcnRwb3N9O1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IDI7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpe1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIk1vdmVhYmxlIiwiUGxheWVyIiwiY29uc3RydWN0b3IiLCJzdGFydHBvcyIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJtb3ZlU3BlZWQiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJwb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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