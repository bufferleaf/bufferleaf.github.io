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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\nvar _this = undefined;\nvar Footer = function(param) {\n    var noSubBG = param.noSubBG;\n    var validateEmail = function validateEmail(value) {\n        var error;\n        if (!value) {\n            error = \"Required\";\n        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(value)) {\n            error = \"Invalid email address\";\n        }\n        return error;\n    };\n    var sendEmail = function(ms) {\n        return new Promise(function(r) {\n            return setTimeout(r, ms);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n        className: \"footer-half \".concat(noSubBG ? '' : 'sub-bg', \" section-padding pb-0\"),\n        __source: {\n            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container\",\n            __source: {\n                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"row\",\n                    __source: {\n                        fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"col-lg-5\",\n                            __source: {\n                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"cont\",\n                                __source: {\n                                    fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"logo\",\n                                        __source: {\n                                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            href: \"#0\",\n                                            __source: {\n                                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                style: {\n                                                    width: \"250%\"\n                                                },\n                                                src: \"\".concat(_data_app_json__WEBPACK_IMPORTED_MODULE_3__.lightLogo),\n                                                alt: \"\",\n                                                __source: {\n                                                    fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                    lineNumber: 25,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this\n                                            })\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"con-info custom-font\",\n                                        __source: {\n                                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                            __source: {\n                                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                                                __source: {\n                                                    fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                    lineNumber: 30,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                        __source: {\n                                                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                                            lineNumber: 31,\n                                                            columnNumber: 21\n                                                        },\n                                                        __self: _this,\n                                                        children: \"Address : \"\n                                                    }),\n                                                    \" F\\xf6rr\\xe5dsv\\xe4gen 2 - Ume\\xe5, Sweden\"\n                                                ]\n                                            })\n                                        })\n                                    })\n                                ]\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"col-lg-5 offset-lg-2\",\n                            __source: {\n                                fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"copyrights text-center\",\n                    __source: {\n                        fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/home/noah/Documents/bufferleaf/Main_files/avo_react/src/components/Footer/index.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"\\xa9 2023, Bufferleaf AB.\"\n                    })\n                })\n            ]\n        })\n    }));\n};\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLEVBQThDLDZDQUNyQjtBQUNtQjtBQUNIOztBQUV6QyxHQUFLLENBQUNLLE1BQU0sR0FBRyxRQUFRLFFBQVMsQ0FBQztRQUFmQyxPQUFPLFNBQVBBLE9BQU87UUFDZEMsYUFBYSxHQUF0QixRQUFRLENBQUNBLGFBQWEsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDN0IsR0FBRyxDQUFDQyxLQUFLO1FBQ1QsRUFBRSxHQUFHRCxLQUFLLEVBQUUsQ0FBQztZQUNYQyxLQUFLLEdBQUcsQ0FBVTtRQUNwQixDQUFDLE1BQU0sRUFBRSwrQ0FBK0NDLElBQUksQ0FBQ0YsS0FBSyxHQUFHLENBQUM7WUFDcEVDLEtBQUssR0FBRyxDQUF1QjtRQUNqQyxDQUFDO1FBQ0QsTUFBTSxDQUFDQSxLQUFLO0lBQ2QsQ0FBQztJQUNELEdBQUssQ0FBQ0UsU0FBUyxHQUFHLFFBQVEsQ0FBUEMsRUFBRTtRQUFLLE1BQU0sQ0FBTixHQUFHLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQVBDLENBQUM7WUFBS0MsTUFBTSxDQUFOQSxVQUFVLENBQUNELENBQUMsRUFBRUYsRUFBRTs7O0lBQzdELE1BQU0sc0VBQ0hJLENBQU07UUFBQ0MsU0FBUyxFQUFHLENBQVksY0FBd0IsTUFBcUIsQ0FBM0NYLE9BQU8sR0FBRyxDQUFFLElBQUMsQ0FBUSxTQUFDLENBQXFCOzs7Ozs7O3dGQUMxRVksQ0FBRztZQUFDRCxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7c0ZBQ3ZCQyxDQUFHO29CQUFDRCxTQUFTLEVBQUMsQ0FBSzs7Ozs7Ozs7NkZBQ2pCQyxDQUFHOzRCQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs0R0FDdEJDLENBQUc7Z0NBQUNELFNBQVMsRUFBQyxDQUFNOzs7Ozs7Ozt5R0FDbEJDLENBQUc7d0NBQUNELFNBQVMsRUFBQyxDQUFNOzs7Ozs7O3VIQUNsQkUsQ0FBQzs0Q0FBQ0MsSUFBSSxFQUFDLENBQUk7Ozs7Ozs7MkhBQ1RDLENBQUc7Z0RBQUNDLEtBQUssRUFBRSxDQUFDO29EQUFDQyxLQUFLLEVBQUUsQ0FBTTtnREFBQyxDQUFDO2dEQUFFQyxHQUFHLEVBQUcsR0FBb0IsT0FBbEJwQixxREFBaUI7Z0RBQUlzQixHQUFHLEVBQUMsQ0FBRTs7Ozs7Ozs7Ozt5R0FHckVSLENBQUc7d0NBQUNELFNBQVMsRUFBQyxDQUFzQjs7Ozs7Ozt1SEFDbENVLENBQUU7Ozs7Ozs7NEhBQ0FDLENBQUU7Ozs7Ozs7O3lIQUNBQyxDQUFJOzs7Ozs7O2tFQUFDLENBQVU7O29EQUFPLENBQ3pCOzs7Ozs7Ozs2RkFLUFgsQ0FBRzs0QkFBQ0QsU0FBUyxFQUFDLENBQXNCOzs7Ozs7Ozs7O3FGQUd0Q0MsQ0FBRztvQkFBQ0QsU0FBUyxFQUFDLENBQXdCOzs7Ozs7O21HQUNwQ2EsQ0FBQzs7Ozs7OztrQ0FBQyxDQUVIOzs7Ozs7QUFLVixDQUFDO0tBMUNLekIsTUFBTTtBQTRDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5qc3g/YTljOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IGFwcERhdGEgZnJvbSBcIi4uLy4uL2RhdGEvYXBwLmpzb25cIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7IG5vU3ViQkcgfSkgPT4ge1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwodmFsdWUpIHtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgZXJyb3IgPSBcIlJlcXVpcmVkXCI7XHJcbiAgICB9IGVsc2UgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlKSkge1xyXG4gICAgICBlcnJvciA9IFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChtcykgPT4gbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgbXMpKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2Bmb290ZXItaGFsZiAke25vU3ViQkcgPyAnJzonc3ViLWJnJ30gc2VjdGlvbi1wYWRkaW5nIHBiLTBgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiBcIjI1MCVcIiB9fSBzcmM9e2Ake2FwcERhdGEubGlnaHRMb2dvfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24taW5mbyBjdXN0b20tZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWRkcmVzcyA6IDwvc3Bhbj4gRsO2cnLDpWRzdsOkZ2VuIDIgLSBVbWXDpSwgU3dlZGVuXHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBvZmZzZXQtbGctMlwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRzIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgwqkgMjAyMywgQnVmZmVybGVhZiBBQi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtaWsiLCJGb3JtIiwiRmllbGQiLCJhcHBEYXRhIiwiRm9vdGVyIiwibm9TdWJCRyIsInZhbGlkYXRlRW1haWwiLCJ2YWx1ZSIsImVycm9yIiwidGVzdCIsInNlbmRFbWFpbCIsIm1zIiwiUHJvbWlzZSIsInIiLCJzZXRUaW1lb3V0IiwiZm9vdGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsImhyZWYiLCJpbWciLCJzdHlsZSIsIndpZHRoIiwic3JjIiwibGlnaHRMb2dvIiwiYWx0IiwidWwiLCJsaSIsInNwYW4iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Footer/index.jsx\n");

/***/ })

});