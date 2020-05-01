webpackHotUpdate("cms",{

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: Navigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/router */ "./node_modules/gatsby/node_modules/@reach/router/es/index.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.js");
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Nav.css */ "./src/components/Nav.css");
/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Nav_css__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "G:\\projekt\\gatsby\\yellowcake\\src\\components\\Nav.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var Navigation = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigation, _Component);

  function Navigation() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      active: false,
      activeSubNav: false,
      currentPath: false
    };

    _this.componentDidMount = function () {
      return _this.setState({
        currentPath: _this.props.location.pathname
      });
    };

    _this.handleMenuToggle = function () {
      return _this.setState({
        active: !_this.state.active
      });
    };

    _this.handleLinkClick = function () {
      return _this.state.active && _this.handleMenuToggle();
    };

    _this.toggleSubNav = function (subNav) {
      return _this.setState({
        activeSubNav: _this.state.activeSubNav === subNav ? false : subNav
      });
    };

    return _this;
  }

  var _proto = Navigation.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var active = this.state.active,
        subNav = this.props.subNav,
        NavLink = function NavLink(_ref) {
      var to = _ref.to,
          className = _ref.className,
          children = _ref.children,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["to", "className", "children"]);

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__["Link"], Object.assign({
        to: to,
        className: "NavLink " + (to === _this2.state.currentPath ? 'active' : '') + " " + className,
        onClick: _this2.handleLinkClick
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), children);
    };

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
      className: "Nav " + (active ? 'Nav-active' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Nav--Container container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: "/",
      onClick: this.handleLinkClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Nav--Links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Hem"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
      to: "/components/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Components"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Nav--Group " + (this.state.activeSubNav === 'posts' ? 'active' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "NavLink Nav--GroupParent " + (this.props.location.pathname.includes('posts') || this.props.location.pathname.includes('blog') || this.props.location.pathname.includes('post-categories') ? 'active' : ''),
      onClick: function onClick() {
        return _this2.toggleSubNav('posts');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Blog"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "Nav--GroupLinks",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
      to: "/blog/",
      className: "Nav--GroupLink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "All Posts"), subNav.posts.map(function (link, index) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
        to: link.slug,
        key: 'posts-subnav-link-' + index,
        className: "Nav--GroupLink",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, link.title);
    }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLink, {
      to: "/offert/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Offert")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
      className: "Button-blank Nav--MenuButton",
      onClick: this.handleMenuToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, active ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_8__["X"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = function _default(_ref2) {
  var subNav = _ref2.subNav;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_6__["Location"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, function (route) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Navigation, Object.assign({
      subNav: subNav
    }, route, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navigation, "Navigation", "G:\\projekt\\gatsby\\yellowcake\\src\\components\\Nav.js");
  reactHotLoader.register(_default, "default", "G:\\projekt\\gatsby\\yellowcake\\src\\components\\Nav.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.b71500403854cde32682.hot-update.js.map