module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/GetDownloadUrl.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/GetDownloadUrl.tsx":
/*!**************************************!*\
  !*** ./pages/api/GetDownloadUrl.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst {\n  Octokit\n} = __webpack_require__(/*! @octokit/rest */ \"@octokit/rest\");\n\nconst {\n  Base64\n} = __webpack_require__(/*! js-base64 */ \"js-base64\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst octokit = new Octokit({\n  auth: \"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\"\n});\n\nconst main2 = async str => {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const hash = req.body.hash;\n\n  try {\n    const filename = hash; //assign as str\n\n    const {\n      data\n    } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {\n      owner: \"chandrashekarvt\",\n      repo: \"githubApiUsageToUploadDownload\",\n      path: filename\n    });\n    console.log(data.html_url);\n    res.status(200).json(data.html_url);\n  } catch (err) {\n    console.error(err);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvR2V0RG93bmxvYWRVcmwudHN4P2JiNTMiXSwibmFtZXMiOlsiT2N0b2tpdCIsInJlcXVpcmUiLCJCYXNlNjQiLCJmcyIsImNvbmZpZyIsIm9jdG9raXQiLCJhdXRoIiwibWFpbjIiLCJzdHIiLCJyZXEiLCJyZXMiLCJoYXNoIiwiYm9keSIsImZpbGVuYW1lIiwiZGF0YSIsInJlcXVlc3QiLCJvd25lciIsInJlcG8iLCJwYXRoIiwiY29uc29sZSIsImxvZyIsImh0bWxfdXJsIiwic3RhdHVzIiwianNvbiIsImVyciIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBLE1BQU07QUFBRUE7QUFBRixJQUFjQyxtQkFBTyxDQUFDLG9DQUFELENBQTNCOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFhRCxtQkFBTyxDQUFDLDRCQUFELENBQTFCOztBQUNBLE1BQU1FLEVBQUUsR0FBR0YsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUVBQSxtQkFBTyxDQUFDLHNCQUFELENBQVAsQ0FBa0JHLE1BQWxCOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxJQUFJTCxPQUFKLENBQVk7QUFDMUJNLE1BQUksRUFBRTtBQURvQixDQUFaLENBQWhCOztBQUdBLE1BQU1DLEtBQUssR0FBQyxNQUFNQyxHQUFOLElBQVksQ0FFdkIsQ0FGRDs7QUFHZSxzRUFBT0MsR0FBUCxFQUEyQkMsR0FBM0IsS0FBa0Q7QUFHekQsUUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQUosQ0FBU0QsSUFBdEI7O0FBR0EsTUFBRztBQUNDLFVBQU1FLFFBQVEsR0FBQ0YsSUFBZixDQURELENBQ29COztBQUNuQixVQUFNO0FBQUNHO0FBQUQsUUFBTyxNQUFNVCxPQUFPLENBQUNVLE9BQVIsQ0FBZ0IsMkNBQWhCLEVBQTZEO0FBQzlFQyxXQUFLLEVBQUUsaUJBRHVFO0FBRTlFQyxVQUFJLEVBQUUsZ0NBRndFO0FBRzVFQyxVQUFJLEVBQUVMO0FBSHNFLEtBQTdELENBQW5CO0FBS0VNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFJLENBQUNPLFFBQWpCO0FBQ0FYLE9BQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCVCxJQUFJLENBQUNPLFFBQTFCO0FBQ0QsR0FUTCxDQVVLLE9BQU9HLEdBQVAsRUFBWTtBQUNiTCxXQUFPLENBQUNNLEtBQVIsQ0FBY0QsR0FBZDtBQUNDO0FBQ0YsQ0FuQlgiLCJmaWxlIjoiLi9wYWdlcy9hcGkvR2V0RG93bmxvYWRVcmwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxuY29uc3QgeyBPY3Rva2l0IH0gPSByZXF1aXJlKFwiQG9jdG9raXQvcmVzdFwiKVxuY29uc3QgeyBCYXNlNjQgfSA9IHJlcXVpcmUoXCJqcy1iYXNlNjRcIilcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpXG5cbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKClcblxuY29uc3Qgb2N0b2tpdCA9IG5ldyBPY3Rva2l0KHtcbiAgYXV0aDogXCJnaXRodWJfcGF0XzExQU5TN1JOUTBROGRkQ2UzaERVTUJfcFJGc3VzY2ZHVDVmZENnMVhmTVhRejZ1b2dPMXRoaTl4Vm5oVjZrMnFaSEZFM1E2V0VUR0g0S05YSXhcIixcbn0pXG5jb25zdCBtYWluMj1hc3luYyhzdHIpPT57XG5cbn1cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6TmV4dEFwaVJlcXVlc3QsIHJlczpOZXh0QXBpUmVzcG9uc2UpPT4ge1xuXG5cbiAgICAgICAgY29uc3QgaGFzaCA9IHJlcS5ib2R5Lmhhc2g7XG5cblxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBmaWxlbmFtZT1oYXNoLy9hc3NpZ24gYXMgc3RyXG4gICAgICAgICAgICBjb25zdCB7ZGF0YX09YXdhaXQgb2N0b2tpdC5yZXF1ZXN0KCdHRVQgL3JlcG9zL3tvd25lcn0ve3JlcG99L2NvbnRlbnRzL3twYXRofScsIHtcbiAgICAgICAgICAgICAgb3duZXI6IFwiY2hhbmRyYXNoZWthcnZ0XCIsXG4gICAgICAgICAgICAgIHJlcG86IFwiZ2l0aHViQXBpVXNhZ2VUb1VwbG9hZERvd25sb2FkXCIsXG4gICAgICAgICAgICAgICAgcGF0aDogZmlsZW5hbWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5odG1sX3VybClcbiAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YS5odG1sX3VybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/GetDownloadUrl.tsx\n");

/***/ }),

/***/ "@octokit/rest":
/*!********************************!*\
  !*** external "@octokit/rest" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@octokit/rest\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAb2N0b2tpdC9yZXN0XCI/ZDEzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAb2N0b2tpdC9yZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG9jdG9raXQvcmVzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@octokit/rest\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIj9lNzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRvdGVudi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "js-base64":
/*!****************************!*\
  !*** external "js-base64" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-base64\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1iYXNlNjRcIj8yYTg1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWJhc2U2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWJhc2U2NFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-base64\n");

/***/ })

/******/ });