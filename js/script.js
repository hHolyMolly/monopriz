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

/***/ "./src/js/modules/device.js":
/*!**********************************!*\
  !*** ./src/js/modules/device.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  let isMobile = {\r\n    Android: function () { return navigator.userAgent.match(/Android/i); },\r\n    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },\r\n    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },\r\n    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },\r\n    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },\r\n    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }\r\n  };\r\n\r\n  if (isMobile.any()) {\r\n    document.body.classList.add(\"_touch\");\r\n  } else {\r\n    document.body.classList.add(\"_pc\");\r\n  }\r\n} \n\n//# sourceURL=webpack://gulp-template-lite/./src/js/modules/device.js?");

/***/ }),

/***/ "./src/js/modules/webp.js":
/*!********************************!*\
  !*** ./src/js/modules/webp.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isWebp)\n/* harmony export */ });\n/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */\r\nfunction isWebp() {\r\n  // Проверка поддержки webp\r\n  function testWebP(callback) {\r\n    let webP = new Image();\r\n    webP.onload = webP.onerror = () => {\r\n      callback(webP.height == 2)\r\n    }\r\n    webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\"\r\n  }\r\n\r\n  // Добавление класса _webp или _no-webp для HTML\r\n  testWebP((support) => {\r\n    let className = support === true ? \"webp\" : \"no-webp\";\r\n    document.documentElement.classList.add(className);\r\n  })\r\n}\n\n//# sourceURL=webpack://gulp-template-lite/./src/js/modules/webp.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_webp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webp.js */ \"./src/js/modules/webp.js\");\n/* harmony import */ var _modules_device_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/device.js */ \"./src/js/modules/device.js\");\n//< \" CONNECTING JS COMPONENTS \" >=============================================================================================================>//\r\n //SUPPORT WEBP\r\n\r\n //DEFINE DEVICE\r\n\r\n// import './modules/preloader.js'; // PRELOADER\r\n\r\n// import \"./modules/spoiler.js\"  // SPOILERS\r\n\r\n// import \"./modules/dynamic_adap.js\"  // DYNAMIC ADAPTIVE\r\n\r\n// import \"./modules/scroll_header.js\"  // SCROLL HEADER\r\n\r\n// import \"./modules/swiper.js\"  // SLIDER SWIPER\r\n\r\n// import \"./modules/animate_scroll.js\"  // ANIMATE WITH SCROLL\r\n\r\n// import \"./modules/tabs.js\"  // TABS\r\n\r\n// import \"./modules/parallax.js\"  // PARALLAX EFFECT\r\n\r\n//< \" СКРИПТЫ \" >=============================================================================================================>//\r\n\r\n(0,_modules_webp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_device_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n  const wheel = document.querySelector('.wheel');\r\n  const startButton = document.getElementById('submitButton');\r\n  const modal = document.getElementById('modal');\r\n  const result = document.getElementById('result');\r\n  const closeModal = document.getElementById('close-modal');\r\n  const passwordInput = document.getElementById('passwordInput');\r\n\r\n  const sectors = [\r\n    { label: '1', probability: 5, angle: 360 - 22.5 * 0 },\r\n    { label: '2', probability: 5, angle: 360 - 22.5 * 1 },\r\n    { label: '3', probability: 5, angle: 360 - 22.5 * 2 },\r\n    { label: '4', probability: 5, angle: 360 - 22.5 * 3 },\r\n    { label: '5', probability: 5, angle: 360 - 22.5 * 4 },\r\n    { label: '6', probability: 5, angle: 360 - 22.5 * 5 },\r\n    { label: '7', probability: 50, angle: 360 - 22.5 * 6 },\r\n    { label: '8', probability: 5, angle: 360 - 22.5 * 7 },\r\n    { label: '9', probability: 5, angle: 360 - 22.5 * 8 },\r\n    { label: '10', probability: 5, angle: 360 - 22.5 * 9 },\r\n    { label: '11', probability: 5, angle: 360 - 22.5 * 10 },\r\n    { label: '12', probability: 5, angle: 360 - 22.5 * 11 },\r\n    { label: '13', probability: 5, angle: 360 - 22.5 * 12 },\r\n    { label: '14', probability: 5, angle: 360 - 22.5 * 13 },\r\n    { label: '15', probability: 5, angle: 360 - 22.5 * 14 },\r\n    { label: '16', probability: 5, angle: 360 - 22.5 * 15 },\r\n  ];\r\n\r\n  const getSectorByProbability = () => {\r\n    const randomNumber = Math.random() * 100;\r\n    let cumulativeProbability = 0;\r\n\r\n    for (let sector of sectors) {\r\n      cumulativeProbability += sector.probability;\r\n      if (randomNumber <= cumulativeProbability) {\r\n        return sector;\r\n      }\r\n    }\r\n  };\r\n\r\n  const handleWin = chosenSector => {\r\n    result.innerHTML = `Вітаємо, ви виграли: <strong>${chosenSector.label}</strong>`;\r\n    modal.style.display = 'flex';\r\n  };\r\n\r\n  passwordInput.addEventListener('input', () => {\r\n    const enteredPassword = passwordInput.value;\r\n\r\n    if (enteredPassword) {\r\n      fetch('server.php', {\r\n        method: 'POST',\r\n        headers: {\r\n          'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify({ password: enteredPassword, checkOnly: true }),\r\n      })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n          if (data.valid) {\r\n            startButton.disabled = false;\r\n            startButton.classList.add('active');\r\n          } else {\r\n            startButton.disabled = true;\r\n            startButton.classList.remove('active');\r\n          }\r\n        });\r\n    } else {\r\n      startButton.disabled = true;\r\n      startButton.classList.remove('active');\r\n    }\r\n  });\r\n\r\n  startButton.addEventListener('click', function () {\r\n    const enteredPassword = passwordInput.value;\r\n\r\n    fetch('server.php', {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({ password: enteredPassword }),\r\n    })\r\n      .then(response => response.json())\r\n      .then(data => {\r\n        if (data.valid) {\r\n          passwordInput.value = '';\r\n          startButton.disabled = true;\r\n          startButton.classList.remove('active');\r\n\r\n          const chosenSector = getSectorByProbability();\r\n          const finalAngle = chosenSector.angle + 360 * 5;\r\n          wheel.style.transition = 'all 10s ease-out';\r\n          wheel.style.transform = `rotate(${finalAngle}deg)`;\r\n\r\n          wheel.addEventListener('transitionend', function onTransitionEnd() {\r\n            wheel.style.transition = 'none';\r\n            wheel.style.transform = `rotate(${chosenSector.angle}deg)`;\r\n            handleWin(chosenSector);\r\n            wheel.removeEventListener('transitionend', onTransitionEnd);\r\n          });\r\n        } else {\r\n          alert('Невірний пароль або його вже використано!');\r\n        }\r\n      });\r\n  });\r\n\r\n  closeModal.addEventListener('click', function () {\r\n    modal.style.display = 'none';\r\n    location.reload(); // Оновлює сторінку після закриття модального вікна\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://gulp-template-lite/./src/js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;