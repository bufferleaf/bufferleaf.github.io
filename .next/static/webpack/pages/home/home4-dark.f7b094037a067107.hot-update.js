"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home/home4-dark",{

/***/ "./src/components/Footer/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\nvar _this = undefined;\nvar Footer = function(param) {\n    var noSubBG = param.noSubBG;\n    var validateEmail = function validateEmail(value) {\n        var error;\n        if (!value) {\n            error = \"Required\";\n        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(value)) {\n            error = \"Invalid email address\";\n        }\n        return error;\n    };\n    var sendEmail = function(ms) {\n        return new Promise(function(r) {\n            return setTimeout(r, ms);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n        className: \"footer-half \".concat(noSubBG ? '' : 'sub-bg', \" section-padding pb-0\"),\n        __source: {\n            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container\",\n            __source: {\n                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"row\",\n                    __source: {\n                        fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"col-lg-5\",\n                            __source: {\n                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"cont\",\n                                __source: {\n                                    fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"logo\",\n                                        __source: {\n                                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            href: \"#0\",\n                                            __source: {\n                                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                src: \"\".concat(_data_app_json__WEBPACK_IMPORTED_MODULE_3__.lightLogo),\n                                                alt: \"\",\n                                                __source: {\n                                                    fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                    lineNumber: 25,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this\n                                            })\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"con-info custom-font\",\n                                        __source: {\n                                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                            __source: {\n                                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                                                __source: {\n                                                    fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                    lineNumber: 30,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                        __source: {\n                                                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                            lineNumber: 31,\n                                                            columnNumber: 21\n                                                        },\n                                                        __self: _this,\n                                                        children: \"Address : \"\n                                                    }),\n                                                    \" F\\xf6rr\\xe5dsv\\xe4gen 2 - Ume\\xe5, Sweden\"\n                                                ]\n                                            })\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"social-icon\",\n                                        __source: {\n                                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h6\", {\n                                                className: \"custom-font stit simple-btn\",\n                                                __source: {\n                                                    fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"Follow Us\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                                className: \"social\",\n                                                __source: {\n                                                    fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                        href: \"#0\",\n                                                        className: \"icon\",\n                                                        __source: {\n                                                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                            lineNumber: 38,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                            className: \"fab fa-facebook-f\",\n                                                            __source: {\n                                                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                                lineNumber: 39,\n                                                                columnNumber: 21\n                                                            },\n                                                            __self: _this\n                                                        })\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                        href: \"#0\",\n                                                        className: \"icon\",\n                                                        __source: {\n                                                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                            lineNumber: 41,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                            className: \"fab fa-twitter\",\n                                                            __source: {\n                                                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                                lineNumber: 42,\n                                                                columnNumber: 21\n                                                            },\n                                                            __self: _this\n                                                        })\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                        href: \"#0\",\n                                                        className: \"icon\",\n                                                        __source: {\n                                                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                            lineNumber: 44,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                            className: \"fab fa-pinterest\",\n                                                            __source: {\n                                                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                                lineNumber: 45,\n                                                                columnNumber: 21\n                                                            },\n                                                            __self: _this\n                                                        })\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                        href: \"#0\",\n                                                        className: \"icon\",\n                                                        __source: {\n                                                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                            lineNumber: 47,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                            className: \"fab fa-behance\",\n                                                            __source: {\n                                                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                                lineNumber: 48,\n                                                                columnNumber: 21\n                                                            },\n                                                            __self: _this\n                                                        })\n                                                    })\n                                                ]\n                                            })\n                                        ]\n                                    })\n                                ]\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"col-lg-5 offset-lg-2\",\n                            __source: {\n                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"copyrights text-center\",\n                    __source: {\n                        fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            \"\\xa9 2022, Avo Template. Made with passion by \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"#0\",\n                                __source: {\n                                    fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 56\n                                },\n                                __self: _this,\n                                children: \"ThemesCamp\"\n                            }),\n                            \".\"\n                        ]\n                    })\n                })\n            ]\n        })\n    }));\n};\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs0QkFBQyxDQUMwQztpR0FBQ1gsQ0FBQztnQ0FBQ0MsSUFBSSxFQUFDLENBQUk7Ozs7Ozs7MENBQUMsQ0FBVTs7NEJBQUksQ0FDeEU7Ozs7Ozs7QUFLVixDQUFDO0tBM0RLZixNQUFNO0FBNkRaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzeD9hOWM4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgYXBwRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9hcHAuanNvblwiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgbm9TdWJCRyB9KSA9PiB7XHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCh2YWx1ZSkge1xyXG4gICAgbGV0IGVycm9yO1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICBlcnJvciA9IFwiUmVxdWlyZWRcIjtcclxuICAgIH0gZWxzZSBpZiAoIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgIGVycm9yID0gXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3NcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbiAgY29uc3Qgc2VuZEVtYWlsID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCBtcykpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17YGZvb3Rlci1oYWxmICR7bm9TdWJCRyA/ICcnOidzdWItYmcnfSBzZWN0aW9uLXBhZGRpbmcgcGItMGB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHthcHBEYXRhLmxpZ2h0TG9nb31gfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uLWluZm8gY3VzdG9tLWZvbnRcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkFkZHJlc3MgOiA8L3NwYW4+IEbDtnJyw6Vkc3bDpGdlbiAyIC0gVW1lw6UsIFN3ZWRlblxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY3VzdG9tLWZvbnQgc3RpdCBzaW1wbGUtYnRuXCI+Rm9sbG93IFVzPC9oNj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIzBcIiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCIgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1waW50ZXJlc3RcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMwXCIgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1iZWhhbmNlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgb2Zmc2V0LWxnLTJcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0cyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIMKpIDIwMjIsIEF2byBUZW1wbGF0ZS4gTWFkZSB3aXRoIHBhc3Npb24gYnkgPGEgaHJlZj1cIiMwXCI+VGhlbWVzQ2FtcDwvYT4uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybWlrIiwiRm9ybSIsIkZpZWxkIiwiYXBwRGF0YSIsIkZvb3RlciIsIm5vU3ViQkciLCJ2YWxpZGF0ZUVtYWlsIiwidmFsdWUiLCJlcnJvciIsInRlc3QiLCJzZW5kRW1haWwiLCJtcyIsIlByb21pc2UiLCJyIiwic2V0VGltZW91dCIsImZvb3RlciIsImNsYXNzTmFtZSIsImRpdiIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwibGlnaHRMb2dvIiwiYWx0IiwidWwiLCJsaSIsInNwYW4iLCJoNiIsImkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Footer/index.jsx\n");

/***/ })

});