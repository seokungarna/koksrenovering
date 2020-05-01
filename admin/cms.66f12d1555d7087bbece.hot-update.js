webpackHotUpdate("cms",{

/***/ "./node_modules/dom-form-serializer/dist/dom-form-serializer.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/dom-form-serializer/dist/dom-form-serializer.mjs ***!
  \***********************************************************************/
/*! exports provided: serialize, deserialize */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return serialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserialize", function() { return deserialize; });
/* harmony import */ var matches_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matches-selector */ "./node_modules/matches-selector/index.js");


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var TypeRegistry = function () {
  function TypeRegistry() {
    var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, TypeRegistry);

    this.registeredTypes = initial;
  }

  createClass(TypeRegistry, [{
    key: 'get',
    value: function get(type) {
      if (typeof this.registeredTypes[type] !== 'undefined') {
        return this.registeredTypes[type];
      } else {
        return this.registeredTypes['default'];
      }
    }
  }, {
    key: 'register',
    value: function register(type, item) {
      if (typeof this.registeredTypes[type] === 'undefined') {
        this.registeredTypes[type] = item;
      }
    }
  }, {
    key: 'registerDefault',
    value: function registerDefault(item) {
      this.register('default', item);
    }
  }]);
  return TypeRegistry;
}();

var KeyExtractors = function (_TypeRegistry) {
  inherits(KeyExtractors, _TypeRegistry);

  function KeyExtractors(options) {
    classCallCheck(this, KeyExtractors);

    var _this = possibleConstructorReturn(this, (KeyExtractors.__proto__ || Object.getPrototypeOf(KeyExtractors)).call(this, options));

    _this.registerDefault(function (el) {
      return el.getAttribute('name') || '';
    });
    return _this;
  }

  return KeyExtractors;
}(TypeRegistry);

var InputReaders = function (_TypeRegistry) {
  inherits(InputReaders, _TypeRegistry);

  function InputReaders(options) {
    classCallCheck(this, InputReaders);

    var _this = possibleConstructorReturn(this, (InputReaders.__proto__ || Object.getPrototypeOf(InputReaders)).call(this, options));

    _this.registerDefault(function (el) {
      return el.value;
    });
    _this.register('checkbox', function (el) {
      return el.getAttribute('value') !== null ? el.checked ? el.getAttribute('value') : null : el.checked;
    });
    _this.register('select', function (el) {
      return getSelectValue(el);
    });
    return _this;
  }

  return InputReaders;
}(TypeRegistry);

function getSelectValue(elem) {
  var value, option, i;
  var options = elem.options;
  var index = elem.selectedIndex;
  var one = elem.type === 'select-one';
  var values = one ? null : [];
  var max = one ? index + 1 : options.length;

  if (index < 0) {
    i = max;
  } else {
    i = one ? index : 0;
  }

  // Loop through all the selected options
  for (; i < max; i++) {
    option = options[i];

    // Support: IE <=9 only
    // IE8-9 doesn't update selected after form reset
    if ((option.selected || i === index) &&

    // Don't return options that are disabled or in a disabled optgroup
    !option.disabled && (!option.parentNode.disabled || option.parentNode.tagName.toLowerCase() === 'optgroup')) {
      // Get the specific value for the option
      value = option.value;

      // We don't need an array for one selects
      if (one) {
        return value;
      }

      // Multi-Selects return an array
      values.push(value);
    }
  }

  return values;
}

var KeyAssignmentValidators = function (_TypeRegistry) {
  inherits(KeyAssignmentValidators, _TypeRegistry);

  function KeyAssignmentValidators(options) {
    classCallCheck(this, KeyAssignmentValidators);

    var _this = possibleConstructorReturn(this, (KeyAssignmentValidators.__proto__ || Object.getPrototypeOf(KeyAssignmentValidators)).call(this, options));

    _this.registerDefault(function () {
      return true;
    });
    _this.register('radio', function (el) {
      return el.checked;
    });
    return _this;
  }

  return KeyAssignmentValidators;
}(TypeRegistry);

function keySplitter(key) {
  var matches = key.match(/[^[\]]+/g);
  var lastKey = void 0;
  if (key.length > 1 && key.indexOf('[]') === key.length - 2) {
    lastKey = matches.pop();
    matches.push([lastKey]);
  }
  return matches;
}

function getElementType(el) {
  var typeAttr = void 0;
  var tagName = el.tagName;
  var type = tagName;
  if (tagName.toLowerCase() === 'input') {
    typeAttr = el.getAttribute('type');
    if (typeAttr) {
      type = typeAttr;
    } else {
      type = 'text';
    }
  }
  return type.toLowerCase();
}

function getInputElements(element, options) {
  return Array.prototype.filter.call(element.querySelectorAll('input,select,textarea'), function (el) {
    if (el.tagName.toLowerCase() === 'input' && (el.type === 'submit' || el.type === 'reset')) {
      return false;
    }
    var myType = getElementType(el);
    var extractor = options.keyExtractors.get(myType);
    var identifier = extractor(el);
    var foundInInclude = (options.include || []).indexOf(identifier) !== -1;
    var foundInExclude = (options.exclude || []).indexOf(identifier) !== -1;
    var foundInIgnored = false;
    var reject = false;

    if (options.ignoredTypes) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = options.ignoredTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var selector = _step.value;

          if (matches_selector__WEBPACK_IMPORTED_MODULE_0__(el, selector)) {
            foundInIgnored = true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    if (foundInInclude) {
      reject = false;
    } else {
      if (options.include) {
        reject = true;
      } else {
        reject = foundInExclude || foundInIgnored;
      }
    }

    return !reject;
  });
}

function assignKeyValue(obj, keychain, value) {
  if (!keychain) {
    return obj;
  }

  var key = keychain.shift();

  // build the current object we need to store data
  if (!obj[key]) {
    obj[key] = Array.isArray(key) ? [] : {};
  }

  // if it's the last key in the chain, assign the value directly
  if (keychain.length === 0) {
    if (!Array.isArray(obj[key])) {
      obj[key] = value;
    } else if (value !== null) {
      obj[key].push(value);
    }
  }

  // recursive parsing of the array, depth-first
  if (keychain.length > 0) {
    assignKeyValue(obj[key], keychain, value);
  }

  return obj;
}

/**
 * Get a JSON object that represents all of the form inputs, in this element.
 *
 * @param {HTMLElement} Root element
 * @param {object} options
 * @param {object} options.inputReaders
 * @param {object} options.keyAssignmentValidators
 * @param {object} options.keyExtractors
 * @param {object} options.keySplitter
 * @param {string[]} options.include
 * @param {string[]} options.exclude
 * @param {string[]} options.ignoredTypes
 * @return {object}
 */
function serialize(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var data = {};
  options.keySplitter = options.keySplitter || keySplitter;
  options.keyExtractors = new KeyExtractors(options.keyExtractors || {});
  options.inputReaders = new InputReaders(options.inputReaders || {});
  options.keyAssignmentValidators = new KeyAssignmentValidators(options.keyAssignmentValidators || {});

  Array.prototype.forEach.call(getInputElements(element, options), function (el) {
    var type = getElementType(el);
    var keyExtractor = options.keyExtractors.get(type);
    var key = keyExtractor(el);
    var inputReader = options.inputReaders.get(type);
    var value = inputReader(el);
    var validKeyAssignment = options.keyAssignmentValidators.get(type);
    if (validKeyAssignment(el, key, value)) {
      var keychain = options.keySplitter(key);
      data = assignKeyValue(data, keychain, value);
    }
  });

  return data;
}

var InputWriters = function (_TypeRegistry) {
  inherits(InputWriters, _TypeRegistry);

  function InputWriters(options) {
    classCallCheck(this, InputWriters);

    var _this = possibleConstructorReturn(this, (InputWriters.__proto__ || Object.getPrototypeOf(InputWriters)).call(this, options));

    _this.registerDefault(function (el, value) {
      el.value = value;
    });
    _this.register('checkbox', function (el, value) {
      if (value === null) {
        el.indeterminate = true;
      } else {
        el.checked = Array.isArray(value) ? value.indexOf(el.value) !== -1 : value;
      }
    });
    _this.register('radio', function (el, value) {
      if (value !== undefined) {
        el.checked = el.value === value.toString();
      }
    });
    _this.register('select', setSelectValue);
    return _this;
  }

  return InputWriters;
}(TypeRegistry);

function makeArray(arr) {
  var ret = [];
  if (arr !== null) {
    if (Array.isArray(arr)) {
      ret.push.apply(ret, arr);
    } else {
      ret.push(arr);
    }
  }
  return ret;
}

/**
 * Write select values
 *
 * @see {@link https://github.com/jquery/jquery/blob/master/src/attributes/val.js|Github}
 * @param {object} Select element
 * @param {string|array} Select value
 */
function setSelectValue(elem, value) {
  var optionSet, option;
  var options = elem.options;
  var values = makeArray(value);
  var i = options.length;

  while (i--) {
    option = options[i];
    /* eslint-disable no-cond-assign */
    if (values.indexOf(option.value) > -1) {
      option.setAttribute('selected', true);
      optionSet = true;
    }
    /* eslint-enable no-cond-assign */
  }

  // Force browsers to behave consistently when non-matching value is set
  if (!optionSet) {
    elem.selectedIndex = -1;
  }
}

function keyJoiner(parentKey, childKey) {
  return parentKey + '[' + childKey + ']';
}

function flattenData(data, parentKey) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var flatData = {};
  var keyJoiner$$ = options.keyJoiner || keyJoiner;

  for (var keyName in data) {
    if (!data.hasOwnProperty(keyName)) {
      continue;
    }

    var value = data[keyName];
    var hash = {};

    // If there is a parent key, join it with
    // the current, child key.
    if (parentKey) {
      keyName = keyJoiner$$(parentKey, keyName);
    }

    if (Array.isArray(value)) {
      hash[keyName + '[]'] = value;
      hash[keyName] = value;
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      hash = flattenData(value, keyName, options);
    } else {
      hash[keyName] = value;
    }

    Object.assign(flatData, hash);
  }

  return flatData;
}

/**
 * Use the given JSON object to populate all of the form inputs, in this element.
 *
 * @param {HTMLElement} Root element
 * @param {object} options
 * @param {object} options.inputWriters
 * @param {object} options.keyExtractors
 * @param {object} options.keySplitter
 * @param {string[]} options.include
 * @param {string[]} options.exclude
 * @param {string[]} options.ignoredTypes
 */
function deserialize(form, data) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var flattenedData = flattenData(data, null, options);
  options.keyExtractors = new KeyExtractors(options.keyExtractors || {});
  options.inputWriters = new InputWriters(options.inputWriters || {});

  Array.prototype.forEach.call(getInputElements(form, options), function (el) {
    var type = getElementType(el);

    var keyExtractor = options.keyExtractors.get(type);
    var key = keyExtractor(el);

    var inputWriter = options.inputWriters.get(type);
    var value = flattenedData[key];

    inputWriter(el, value);
  });
}


//# sourceMappingURL=dom-form-serializer.mjs.map


/***/ }),

/***/ "./node_modules/matches-selector/index.js":
/*!************************************************!*\
  !*** ./node_modules/matches-selector/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var proto = typeof Element !== 'undefined' ? Element.prototype : {};
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}


/***/ }),

/***/ "./src/components/FormSimple.js":
false,

/***/ "./src/components/FormSimpleAjax.js":
/*!******************************************!*\
  !*** ./src/components/FormSimpleAjax.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dom_form_serializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-form-serializer */ "./node_modules/dom-form-serializer/dist/dom-form-serializer.mjs");
/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form.css */ "./src/components/Form.css");
/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Form_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "G:\\projekt\\gatsby\\yellowcake\\src\\components\\FormSimpleAjax.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var Form = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, _React$Component);

  function Form() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      alert: '',
      disabled: false
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      if (_this.state.disabled) return;
      var form = e.target;
      var data = Object(dom_form_serializer__WEBPACK_IMPORTED_MODULE_5__["serialize"])(form);

      _this.setState({
        disabled: true
      });

      fetch(form.action + '?' + Object(qs__WEBPACK_IMPORTED_MODULE_4__["stringify"])(data), {
        method: 'POST'
      }).then(function (res) {
        if (res.ok) {
          return res;
        } else {
          throw new Error('Network error');
        }
      }).then(function () {
        form.reset();

        _this.setState({
          alert: _this.props.successMessage,
          disabled: false
        });
      }).catch(function (err) {
        console.error(err);

        _this.setState({
          disabled: false,
          alert: _this.props.errorMessage
        });
      });
    };

    return _this;
  }

  var _proto = Form.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        name = _this$props.name,
        subject = _this$props.subject,
        action = _this$props.action;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("script", {
      src: "https://www.google.com/recaptcha/api.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      className: "Form",
      name: name,
      action: action,
      onSubmit: this.handleSubmit,
      "data-netlify": "",
      "netlify-recaptcha": "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, this.state.alert && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "Form--Alert",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, this.state.alert), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "Form--Group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "Form--Label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "Form--Input Form--InputText",
      type: "text",
      placeholder: "Firstname",
      name: "firstname",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Firstname")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "Form--Label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "Form--Input Form--InputText",
      type: "text",
      placeholder: "Lastname",
      name: "lastname",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Lastname"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "Form--Label Form--Radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "Form--RadioInput",
      type: "radio",
      name: "gender",
      value: "male",
      defaultChecked: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Male")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "Form--Label Form--Radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "Form--RadioInput",
      type: "radio",
      name: "gender",
      value: "female",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Female"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "Form--Label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "Form--Input Form--InputText",
      type: "email",
      placeholder: "Email",
      name: "emailAddress",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Email address")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "Form--Label has-arrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
      className: "Form--Input Form--Select",
      name: "type",
      defaultValue: "Type of Enquiry",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      disabled: true,
      hidden: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "Type of Enquiry"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Need to know more"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "Found a bug"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "Want to say hello"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "Form--Label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
      className: "Form--Input Form--Textarea Form--InputText",
      placeholder: "Message",
      name: "message",
      rows: "10",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "Message")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "Form--Label Form-Checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "Form--Input Form--Textarea Form--CheckboxInput",
      name: "newsletter",
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Get news updates")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "g-recaptcha",
      "data-sitekey": "6LfKN3kUAAAAAGIM1CbXmaRZx3LIh_W2twn1tzkA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }), !!subject && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "hidden",
      name: "subject",
      value: subject,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "Button Form--SubmitButton",
      type: "submit",
      value: "Enquire",
      disabled: this.state.disabled,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    })));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Form.defaultProps = {
  name: 'Simple Form Ajax',
  subject: '',
  // optional subject of the notification email
  action: '',
  successMessage: 'Thanks for your enquiry, we will get back to you soon',
  errorMessage: 'There is a problem, your message has not been sent, please try contacting us via email'
};
var _default = Form;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Form, "Form", "G:\\projekt\\gatsby\\yellowcake\\src\\components\\FormSimpleAjax.js");
  reactHotLoader.register(_default, "default", "G:\\projekt\\gatsby\\yellowcake\\src\\components\\FormSimpleAjax.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/templates/ContactPage.js":
/*!**************************************!*\
  !*** ./src/templates/ContactPage.js ***!
  \**************************************/
/*! exports provided: ContactPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageTemplate", function() { return ContactPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_FormSimpleAjax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormSimpleAjax */ "./src/components/FormSimpleAjax.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _ContactPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContactPage.css */ "./src/templates/ContactPage.css");
/* harmony import */ var _ContactPage_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ContactPage_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "G:\\projekt\\gatsby\\yellowcake\\src\\templates\\ContactPage.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



//import PageHeader from '../components/PageHeader'

 //import GoogleMap from '../components/GoogleMap'


 // Export Template for use in CMS preview

var ContactPageTemplate = function ContactPageTemplate(_ref) {
  var body = _ref.body,
      title = _ref.title,
      subtitle = _ref.subtitle,
      featuredImage = _ref.featuredImage,
      address = _ref.address,
      phone = _ref.phone,
      email = _ref.email,
      locations = _ref.locations;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section Contact--Section1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container Contact--Section1--Container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    source: body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Contact--Details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, address && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "https://www.google.com.au/maps/search/" + encodeURI(address),
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["MapPin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), " ", address), phone && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "tel:" + phone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Smartphone"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), " ", phone), email && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "mailto:" + email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["Mail"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), " ", email))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FormSimpleAjax__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Simple Form Ajax",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })))));
};

var ContactPage = function ContactPage(_ref2) {
  var page = _ref2.data.page;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContactPageTemplate, Object.assign({}, page.frontmatter, {
    body: page.html,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })));
};

var _default = ContactPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "3855609909";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactPageTemplate, "ContactPageTemplate", "G:\\projekt\\gatsby\\yellowcake\\src\\templates\\ContactPage.js");
  reactHotLoader.register(ContactPage, "ContactPage", "G:\\projekt\\gatsby\\yellowcake\\src\\templates\\ContactPage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "G:\\projekt\\gatsby\\yellowcake\\src\\templates\\ContactPage.js");
  reactHotLoader.register(_default, "default", "G:\\projekt\\gatsby\\yellowcake\\src\\templates\\ContactPage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.66f12d1555d7087bbece.hot-update.js.map