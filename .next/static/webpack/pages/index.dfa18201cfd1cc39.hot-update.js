"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/Header.js":
/*!*******************************!*\
  !*** ./src/layouts/Header.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./src/context/context.js\");\n/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menus */ \"./src/layouts/menus.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Header = ()=>{\n    _s();\n    const navContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.context);\n    const { nav , changeNav  } = navContext;\n    const activeNav = (value)=>value == nav ? \"active\" : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"edrea_tm_header fixed w-[900px] translate-x-[-50%] left-[50%]\",\n        style: {\n            backgroundColor: \"transparent\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"header_inner w-full h-auto float-left pt-[40px] flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        onClick: ()=>changeNav(\"home\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"max-w-[100px]\",\n                            src: \"assets/img/logo/logo.png\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/noah/Documents/bufferleaf/hadl.io/package/edrea/src/layouts/Header.js\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/noah/Documents/bufferleaf/hadl.io/package/edrea/src/layouts/Header.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/noah/Documents/bufferleaf/hadl.io/package/edrea/src/layouts/Header.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"menu\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"transition_link m-0 list-none\",\n                        children: _menus__WEBPACK_IMPORTED_MODULE_3__.menus.map((menu, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mr-[30px] inline-block \".concat(activeNav(menu.href)),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    onClick: ()=>changeNav(menu.href),\n                                    className: \"text-white-color font-poppins font-medium transition-all duration-300\",\n                                    href: \"#\".concat(menu.href),\n                                    children: menu.name\n                                }, void 0, false, {\n                                    fileName: \"/home/noah/Documents/bufferleaf/hadl.io/package/edrea/src/layouts/Header.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, menu.href, false, {\n                                fileName: \"/home/noah/Documents/bufferleaf/hadl.io/package/edrea/src/layouts/Header.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/noah/Documents/bufferleaf/hadl.io/package/edrea/src/layouts/Header.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/noah/Documents/bufferleaf/hadl.io/package/edrea/src/layouts/Header.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/noah/Documents/bufferleaf/hadl.io/package/edrea/src/layouts/Header.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/noah/Documents/bufferleaf/hadl.io/package/edrea/src/layouts/Header.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"8G05RIizZzUWAWMLZt15OnGrJ+Q=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFtQztBQUNVO0FBQ2I7QUFFaEMsTUFBTUcsU0FBUyxJQUFNOztJQUNuQixNQUFNQyxhQUFhSixpREFBVUEsQ0FBQ0MscURBQU9BO0lBQ3JDLE1BQU0sRUFBRUksSUFBRyxFQUFFQyxVQUFTLEVBQUUsR0FBR0Y7SUFFM0IsTUFBTUcsWUFBWSxDQUFDQyxRQUFXQSxTQUFTSCxNQUFNLFdBQVcsRUFBRTtJQUUxRCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtRQUFnRUMsT0FBTztZQUFDQyxpQkFBZ0I7UUFBYTtrQkFDbEgsNEVBQUNIO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0c7d0JBQUVDLE1BQUs7d0JBQUlDLFNBQVMsSUFBTVQsVUFBVTtrQ0FDbkMsNEVBQUNVOzRCQUNDTixXQUFVOzRCQUNWTyxLQUFJOzRCQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUlWLDhEQUFDVDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1M7d0JBQUdULFdBQVU7a0NBQ1hSLDZDQUFTLENBQUMsQ0FBQ21CLE1BQU1DLGtCQUNoQiw4REFBQ0M7Z0NBQ0NiLFdBQVcsMEJBQStDLE9BQXJCSCxVQUFVYyxLQUFLUCxJQUFJOzBDQUd4RCw0RUFBQ0Q7b0NBQ0NFLFNBQVMsSUFBTVQsVUFBVWUsS0FBS1AsSUFBSTtvQ0FDbENKLFdBQVU7b0NBQ1ZJLE1BQU0sSUFBYyxPQUFWTyxLQUFLUCxJQUFJOzhDQUVsQk8sS0FBS0csSUFBSTs7Ozs7OytCQVBQSCxLQUFLUCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCOUI7R0F2Q01YO0tBQUFBO0FBd0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL0hlYWRlci5qcz85MWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcclxuaW1wb3J0IHsgbWVudXMgfSBmcm9tIFwiLi9tZW51c1wiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdkNvbnRleHQgPSB1c2VDb250ZXh0KGNvbnRleHQpO1xyXG4gIGNvbnN0IHsgbmF2LCBjaGFuZ2VOYXYgfSA9IG5hdkNvbnRleHQ7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZU5hdiA9ICh2YWx1ZSkgPT4gKHZhbHVlID09IG5hdiA/IFwiYWN0aXZlXCIgOiBcIlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRyZWFfdG1faGVhZGVyIGZpeGVkIHctWzkwMHB4XSB0cmFuc2xhdGUteC1bLTUwJV0gbGVmdC1bNTAlXVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOid0cmFuc3BhcmVudCd9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfaW5uZXIgdy1mdWxsIGgtYXV0byBmbG9hdC1sZWZ0IHB0LVs0MHB4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gY2hhbmdlTmF2KFwiaG9tZVwiKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1bMTAwcHhdXCJcclxuICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1nL2xvZ28vbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJhbnNpdGlvbl9saW5rIG0tMCBsaXN0LW5vbmVcIj5cclxuICAgICAgICAgICAge21lbnVzLm1hcCgobWVudSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXItWzMwcHhdIGlubGluZS1ibG9jayAke2FjdGl2ZU5hdihtZW51LmhyZWYpfWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e21lbnUuaHJlZn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VOYXYobWVudS5ocmVmKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS1jb2xvciBmb250LXBvcHBpbnMgZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YCMke21lbnUuaHJlZn1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bWVudS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiY29udGV4dCIsIm1lbnVzIiwiSGVhZGVyIiwibmF2Q29udGV4dCIsIm5hdiIsImNoYW5nZU5hdiIsImFjdGl2ZU5hdiIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJ1bCIsIm1hcCIsIm1lbnUiLCJpIiwibGkiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/Header.js\n"));

/***/ })

});