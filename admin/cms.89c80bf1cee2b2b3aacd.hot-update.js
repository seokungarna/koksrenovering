webpackHotUpdate("cms",{

/***/ "./src/components/FormSimple.js":
/*!**************************************!*\
  !*** ./src/components/FormSimple.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.css */ "./src/components/Form.css");
/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Form_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\projekt\\gatsby\\yellowcake\\src\\components\\FormSimple.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var _default = function _default(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'Simple Form' : _ref$name,
      _ref$subject = _ref.subject,
      subject = _ref$subject === void 0 ? 'Offert' : _ref$subject,
      _ref$action = _ref.action,
      action = _ref$action === void 0 ? '' : _ref$action;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "Form",
    name: name,
    action: action,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "Form--Label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "Form--Input",
    type: "text",
    placeholder: "Namn",
    name: "name",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "Form--Label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "Form--Input",
    type: "email",
    placeholder: "Email",
    name: "email",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "Form--Label has-arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    className: "Form--Input Form--Select",
    name: "type",
    defaultValue: "Type of Enquiry",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    disabled: true,
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Type of Enquiry"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Need to know more"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Found a bug"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Want to say hello"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "Form--Label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    className: "Form--Input Form--Textarea",
    placeholder: "Message",
    name: "message",
    rows: "10",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "_gotcha",
    style: {
      display: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), !!subject && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "hidden",
    name: "subject",
    value: subject,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "Button Form--SubmitButton",
    type: "submit",
    value: "Enquire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "G:\\projekt\\gatsby\\yellowcake\\src\\components\\FormSimple.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.89c80bf1cee2b2b3aacd.hot-update.js.map