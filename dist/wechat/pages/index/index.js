require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./lib/a.js":
/*!******************!*\
  !*** ./lib/a.js ***!
  \******************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 这是普通程序
var a = {
  a: function () {
    var _a = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", 'hehe');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function a() {
      return _a.apply(this, arguments);
    }

    return a;
  }()
};

/***/ }),

/***/ "./lib/demo.js":
/*!*********************!*\
  !*** ./lib/demo.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// 这是一个模拟的umd包
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() : "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.DemoLib = t() : e.DemoLib = t();
}(window, function () {
  return function (e) {
    var t = {};

    function r(o) {
      if (t[o]) return t[o].exports;
      var n = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: o
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var o = Object.create(null);
      if (r.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var n in e) {
        r.d(o, n, function (t) {
          return e[t];
        }.bind(null, n));
      }
      return o;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 0);
  }([function (e, t, r) {
    "use strict";

    r.r(t), r.d(t, "Hub", function () {
      return a;
    }), r.d(t, "Core", function () {
      return i;
    }), r.d(t, "Inner", function () {
      return c;
    }), r.d(t, "Decline", function () {
      return s;
    }); // 如果将这句代码的注释打开，则会构建失败,注释掉就能成功

    function hehe() {
      return _hehe.apply(this, arguments);
    }

    function _hehe() {
      _hehe = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _hehe.apply(this, arguments);
    }

    var a = {
      name: 'Hub'
    },
        s = {
      name: 'Decline'
    },
        c = {
      name: 'Inner'
    },
        i = {
      name: 'Core'
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@remax/one/esm/api/index.wechat.js":
/*!*********************************************************!*\
  !*** ./node_modules/@remax/one/esm/api/index.wechat.js ***!
  \*********************************************************/
/*! exports provided: navigateTo, navigateBack, redirectTo, reLaunch, switchTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/wechat */ "./node_modules/@remax/wechat/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });



/***/ }),

/***/ "./node_modules/@remax/one/esm/components/Modal.js":
/*!*********************************************************!*\
  !*** ./node_modules/@remax/one/esm/components/Modal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

function Modal(_a) {
  var children = _a.children; // context 一定存在

  var ctx = Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageContext"])();
  return Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPortal"])(children, ctx.modalContainer);
}

/***/ }),

/***/ "./node_modules/@remax/one/esm/createHostComponent.js":
/*!************************************************************!*\
  !*** ./node_modules/@remax/one/esm/createHostComponent.js ***!
  \************************************************************/
/*! exports provided: createTarget, createCurrentTarget, createTapEvent, createTouchEvent, createImageEvent, createCallback, createInputEvent, createFormEvent, aliasProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTarget", function() { return createTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCurrentTarget", function() { return createCurrentTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTapEvent", function() { return createTapEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTouchEvent", function() { return createTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageEvent", function() { return createImageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallback", function() { return createCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputEvent", function() { return createInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormEvent", function() { return createFormEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aliasProps", function() { return aliasProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHostComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




function createTarget(target, detail) {
  return {
    id: target.id,
    offsetLeft: target.offsetLeft,
    offsetTop: target.offsetTop,
    dataset: target.targetDataset || target.dataset,
    value: detail === null || detail === void 0 ? void 0 : detail.value
  };
}
function createCurrentTarget(currentTarget) {
  return {
    id: currentTarget.id,
    offsetLeft: currentTarget.offsetLeft,
    offsetTop: currentTarget.offsetTop,
    dataset: currentTarget.dataset
  };
}
var createTapEvent = function createTapEvent(originalEvent) {
  return {
    type: originalEvent.type,
    stopPropagation: originalEvent.stopPropagation,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
    nativeEvent: originalEvent
  };
};
var createTouchEvent = function createTouchEvent(originalEvent) {
  return {
    type: originalEvent.type,
    stopPropagation: originalEvent.stopPropagation,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    touches: originalEvent.touches,
    changedTouches: originalEvent.touches,
    originalEvent: originalEvent,
    nativeEvent: originalEvent
  };
};
var createImageEvent = function createImageEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
    nativeEvent: originalEvent
  };
};
function createCallback(fn, eventCreator) {
  if (typeof fn !== 'function') {
    return undefined;
  }

  return function (originalEvent) {
    return fn(eventCreator(originalEvent));
  };
}
var createInputEvent = function createInputEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
    nativeEvent: originalEvent
  };
};
var createFormEvent = function createFormEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent,
    nativeEvent: originalEvent
  };
};

function assignDefaultProps(inputProps, defaultProps) {
  if (defaultProps) {
    Object.keys(defaultProps).forEach(function (key) {
      var _a;

      inputProps[key] = (_a = inputProps[key]) !== null && _a !== void 0 ? _a : defaultProps[key];
    });
  }
}

function aliasProps(props, alias) {
  var _a;

  if (!alias) {
    return props;
  }

  var nextProps = {};

  for (var key in props) {
    nextProps[(_a = alias[key]) !== null && _a !== void 0 ? _a : key] = props[key];
  }

  return nextProps;
}
var createLongTapCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createTapCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createTouchStartCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createTouchMoveCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createTouchEndCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createTouchCancelCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createChangeCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createInputCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createConfirmCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createFocusCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createBlurCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createSubmitCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createResetCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createImageLoadCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
var createImageErrorCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(createCallback);
function createHostComponent(name, alias, defaults) {
  var Component = function Component(props, ref) {
    var inputProps = __assign({}, props); // 默认属性根据平台在这里设置


    if (defaults) {
      assignDefaultProps(inputProps, defaults);
    }

    if (props.onLongTap) {
      inputProps.onLongTap = createLongTapCallback(inputProps.onLongTap, createTapEvent);
    }

    if (inputProps.onTap) {
      inputProps.onTap = createTapCallback(inputProps.onTap, createTapEvent);
    }

    if (inputProps.onTouchStart) {
      inputProps.onTouchStart = createTouchStartCallback(inputProps.onTouchStart, createTouchEvent);
    }

    if (inputProps.onTouchMove) {
      inputProps.onTouchMove = createTouchMoveCallback(inputProps.onTouchMove, createTouchEvent);
    }

    if (inputProps.onTouchEnd) {
      inputProps.onTouchEnd = createTouchEndCallback(inputProps.onTouchEnd, createTouchEvent);
    }

    if (inputProps.onTouchCancel) {
      inputProps.onTouchCancel = createTouchCancelCallback(inputProps.onTouchCancel, createTouchEvent);
    }

    if (inputProps.onChange) {
      inputProps.onChange = createChangeCallback(inputProps.onChange, createInputEvent);
    }

    if (inputProps.onInput) {
      inputProps.onInput = createInputCallback(inputProps.onInput, createInputEvent);
    }

    if (inputProps.onConfirm) {
      inputProps.onConfirm = createConfirmCallback(inputProps.onConfirm, createInputEvent);
    }

    if (inputProps.onFocus) {
      inputProps.onFocus = createFocusCallback(inputProps.onFocus, createInputEvent);
    }

    if (inputProps.onBlur) {
      inputProps.onBlur = createBlurCallback(inputProps.onBlur, createInputEvent);
    }

    if (inputProps.onSubmit) {
      inputProps.onSubmit = createSubmitCallback(inputProps.onSubmit, createFormEvent);
    }

    if (inputProps.onReset) {
      inputProps.onReset = createResetCallback(inputProps.onReset, createFormEvent);
    }

    if (name === 'image') {
      if (inputProps.onLoad) {
        inputProps.onLoad = createImageLoadCallback(props.onLoad, createImageEvent);
      }

      if (inputProps.onError) {
        inputProps.onError = createImageErrorCallback(props.onError, createImageEvent);
      }
    }

    var nextProps = inputProps;

    if (alias) {
      nextProps = aliasProps(inputProps, alias);
    }

    nextProps.ref = ref;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, nextProps);
  };

  if (true) {
    Component.displayName = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_2__["formatDisplayName"])(name);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](Component);
}

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Button/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Button/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_alias__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/alias */ "./node_modules/@remax/one/esm/hostComponents/Button/props/alias/index.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/Button/props/default/index.wechat.js");



var Button = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('button', _props_alias__WEBPACK_IMPORTED_MODULE_1__["default"], _props_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Button/props/alias/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Button/props/alias/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  type: 'formType'
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Button/props/default/index.wechat.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Button/props/default/index.wechat.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  hoverClassName: 'button-hover',
  hoverStartTime: 20,
  hoverStayTime: 70
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Form/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Form/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/Form/props/default/index.wechat.js");


var Form = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('form', null, _props_default__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Form/props/default/index.wechat.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Form/props/default/index.wechat.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'wechat-report-submit': false,
  'wechat-report-submit-timeout': 0
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Image/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Image/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/Image/props/default/index.wechat.js");


var Image = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('image', null, _props_default__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Image/props/default/index.wechat.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Image/props/default/index.wechat.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mode: 'scaleToFill',
  'wechat-webp': false,
  'wechat-lazyLoad': false,
  'wechat-show-menu-by-longpress': false
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Input/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Input/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_alias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./props/alias */ "./node_modules/@remax/one/esm/hostComponents/Input/props/alias/index.js");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};





var createInputCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createCallback"]);
var createConfirmCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createCallback"]);
var createFocusCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createCallback"]);
var createBlurCallback = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createCallback"]);

var Input =
/** @class */
function (_super) {
  __extends(Input, _super);

  function Input(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      value: '',
      // 阿里
      controlled: false
    };

    _this.handleInput = function (e) {
      var controlled = _this.state.controlled;

      if (typeof _this.props.onInput === 'function') {
        return _this.props.onInput(e);
      } // 微信
      // 注意，微信要对 input 受控，必须要在 onInput 方法返回值


      return controlled ? _this.props.value : undefined;
    };

    var controlled = props.value !== undefined;
    var value = controlled ? props.value : props.defaultValue;
    _this.state = {
      value: value,
      controlled: controlled
    };
    return _this;
  }

  Input.prototype.componentDidUpdate = function () {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({
        value: this.props.value
      });
    }
  };

  Input.prototype.render = function () {
    var _a, _b, _c, _d, _e, _f;

    var inputProps = __assign({}, this.props);

    if (inputProps.onInput) {
      inputProps.onInput = createInputCallback(this.handleInput, _createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createInputEvent"]);
    }

    if (inputProps.onConfirm) {
      inputProps.onConfirm = createConfirmCallback(this.props.onConfirm, _createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createInputEvent"]);
    }

    if (inputProps.onFocus) {
      inputProps.onFocus = createFocusCallback(this.props.onFocus, _createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createInputEvent"]);
    }

    if (inputProps.onBlur) {
      inputProps.onBlur = createBlurCallback(this.props.onBlur, _createHostComponent__WEBPACK_IMPORTED_MODULE_2__["createInputEvent"]);
    } // 通用属性的默认属性根据平台在这里设置


    if (false) {}

    if (true) {
      inputProps.type = (_b = inputProps.type) !== null && _b !== void 0 ? _b : 'text';
      inputProps.password = (_c = inputProps.password) !== null && _c !== void 0 ? _c : false;
      inputProps.disabled = (_d = inputProps.disabled) !== null && _d !== void 0 ? _d : false;
      inputProps.focus = (_e = inputProps.focus) !== null && _e !== void 0 ? _e : false;
      inputProps.maxLength = (_f = inputProps.maxLength) !== null && _f !== void 0 ? _f : 140;
    }

    var nextProps = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_2__["aliasProps"])(__assign(__assign({}, inputProps), this.state), _props_alias__WEBPACK_IMPORTED_MODULE_3__["default"]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('input', nextProps);
  }; // 平台独有的属性默认值写在这


  Input.defaultProps = {
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-placeholder-class': 'input-placeholder',
    'wechat-cursor-spacing': 0,
    'wechat-confirm-type': 'done',
    'wechat-confirm-hold': false,
    'wechat-selection-end': -1,
    'wechat-selection-start': -1,
    'wechat-adjust-position': true,
    'wechat-hold-keyboard': false
  };
  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Input/props/alias/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Input/props/alias/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  maxLength: 'maxlength'
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Label/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Label/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");

var Label = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
  htmlFor: 'for'
});
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Navigator/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Navigator/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/Navigator/props/default/index.wechat.js");


var Navigator = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('navigator', null, _props_default__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Navigator);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Navigator/props/default/index.wechat.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Navigator/props/default/index.wechat.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'wechat-target': 'self',
  'wechat-open-type': 'navigate',
  'wechat-delta': 1,
  hoverClassName: 'navigator-hover',
  'wechat-hover-stop-propagation': false,
  hoverStartTime: 50,
  hoverStayTime: 600
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Text/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Text/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/Text/props/default/index.wechat.js");


var Text = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('text', null, _props_default__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Text/props/default/index.wechat.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Text/props/default/index.wechat.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  selectable: false,
  'wechat-decode': false
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Textarea/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Textarea/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_alias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props/alias */ "./node_modules/@remax/one/esm/hostComponents/Textarea/props/alias.js");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};





var Textarea =
/** @class */
function (_super) {
  __extends(Textarea, _super);

  function Textarea(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      value: '',
      // 阿里
      controlled: false
    };

    _this.handleInput = function (e) {
      var controlled = _this.state.controlled;

      if (!controlled) {
        _this.setState({
          value: e.target.value
        });
      }

      if (typeof _this.props.onInput === 'function') {
        return _this.props.onInput(e);
      } // 微信
      // 注意，微信要对 input 受控，必须要在 onInput 方法返回值


      return controlled ? _this.props.value : e.target.value;
    };

    var controlled = props.value !== undefined;
    var value = controlled ? props.value : props.defaultValue;
    _this.state = {
      value: value,
      controlled: controlled
    };
    return _this;
  }

  Textarea.prototype.componentDidUpdate = function () {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({
        value: this.props.value
      });
    }
  };

  Textarea.prototype.render = function () {
    var _a, _b, _c, _d, _e;

    var inputProps = __assign(__assign({}, this.props), {
      onInput: Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.handleInput, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"])
    });

    if (inputProps.onConfirm) {
      inputProps.onConfirm = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onConfirm, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (inputProps.onFocus) {
      inputProps.onFocus = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onFocus, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (inputProps.onBlur) {
      inputProps.onBlur = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onBlur, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (false) {}

    if (true) {
      inputProps.maxLength = (_b = inputProps.maxLength) !== null && _b !== void 0 ? _b : 140;
      inputProps.disabled = (_c = inputProps.disabled) !== null && _c !== void 0 ? _c : false;
      inputProps.focus = (_d = inputProps.focus) !== null && _d !== void 0 ? _d : false;
      inputProps.autoHeight = (_e = inputProps.autoHeight) !== null && _e !== void 0 ? _e : false;
    }

    var nextProps = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["aliasProps"])(__assign(__assign({}, inputProps), this.state), _props_alias__WEBPACK_IMPORTED_MODULE_2__["default"]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('textarea', nextProps);
  };

  Textarea.defaultProps = {
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-selection-end': -1,
    'wechat-selection-start': -1,
    'wechat-fixed': false,
    'wechat-placeholder-class': 'textarea-placeholder',
    'wechat-cursor-spacing': 0,
    'wechat-cursor': -1,
    'wechat-show-confirm-bar': true,
    'wechat-adjust-position': true,
    'wechat-hold-keyboard': false,
    'wechat-disable-default-padding': false
  };
  return Textarea;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/Textarea/props/alias.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/Textarea/props/alias.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  maxLength: 'maxlength'
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/View/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/View/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");
/* harmony import */ var _props_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props/default */ "./node_modules/@remax/one/esm/hostComponents/View/props/default/index.wechat.js");


var View = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('view', null, _props_default__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/View/props/default/index.wechat.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/View/props/default/index.wechat.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  hoverClassName: 'none',
  'wechat-hover-stop-propagation': false,
  hoverStartTime: 50,
  hoverStayTime: 400
});

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/WebView/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/WebView/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "./node_modules/@remax/one/esm/createHostComponent.js");

var WebView = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('web-view', null);
/* harmony default export */ __webpack_exports__["default"] = (WebView);

/***/ }),

/***/ "./node_modules/@remax/one/esm/hostComponents/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@remax/one/esm/hostComponents/index.js ***!
  \*************************************************************/
/*! exports provided: Button, Form, Image, Input, Label, Navigator, Text, Textarea, View, WebView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./node_modules/@remax/one/esm/hostComponents/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./node_modules/@remax/one/esm/hostComponents/Form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ "./node_modules/@remax/one/esm/hostComponents/Image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./node_modules/@remax/one/esm/hostComponents/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./node_modules/@remax/one/esm/hostComponents/Label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigator */ "./node_modules/@remax/one/esm/hostComponents/Navigator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _Navigator__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Text */ "./node_modules/@remax/one/esm/hostComponents/Text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Textarea */ "./node_modules/@remax/one/esm/hostComponents/Textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./View */ "./node_modules/@remax/one/esm/hostComponents/View/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _WebView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WebView */ "./node_modules/@remax/one/esm/hostComponents/WebView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _WebView__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* empty/unused harmony star reexport */




















/***/ }),

/***/ "./node_modules/@remax/one/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@remax/one/esm/index.js ***!
  \**********************************************/
/*! exports provided: Button, Form, Image, Input, Label, Navigator, Text, Textarea, View, WebView, navigateTo, navigateBack, redirectTo, reLaunch, switchTab, Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostComponents */ "./node_modules/@remax/one/esm/hostComponents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./node_modules/@remax/one/esm/api/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["switchTab"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@remax/one/esm/types/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Modal */ "./node_modules/@remax/one/esm/components/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/@remax/one/esm/types/event.js":
/*!****************************************************!*\
  !*** ./node_modules/@remax/one/esm/types/event.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@remax/one/esm/types/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@remax/one/esm/types/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./node_modules/@remax/one/esm/types/event.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/api/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/api/index.js ***!
  \*****************************************************/
/*! exports provided: getAppStub, canIUse, base64ToArrayBuffer, arrayBufferToBase64, getSystemInfoSync, getSystemInfo, getUpdateManager, getLaunchOptionsSync, onPageNotFound, onError, onAudioInterruptionEnd, onAppShow, onAppHide, offPageNotFound, offError, offAudioInterruptionEnd, offAudioInterruptionBegin, offAppShow, offAppHide, setEnableDebug, getLogManager, switchTab, reLaunch, redirectTo, navigateTo, navigateBack, showToast, showModal, showLoading, showActionSheet, hideToast, hideLoading, showNavigationBarLoading, setNavigationBarTitle, setNavigationBarColor, hideNavigationBarLoading, setBackgroundTextStyle, setBackgroundColor, showTabBarRedDot, showTabBar, setTabBarStyle, setTabBarItem, setTabBarBadge, removeTabBarBadge, hideTabBarRedDot, hideTabBar, loadFontFace, stopPullDownRefresh, startPullDownRefresh, pageScrollTo, createAnimation, setTopBarText, nextTick, getMenuButtonBoundingClientRect, onWindowResize, offWindowResize, onKeyboardHeightChange, offKeyboardHeightChange, getSelectedTextRange, request, downloadFile, uploadFile, sendSocketMessage, onSocketOpen, onSocketMessage, onSocketError, onSocketClose, connectSocket, closeSocket, stopLocalServiceDiscovery, startLocalServiceDiscovery, onLocalServiceResolveFail, onLocalServiceLost, onLocalServiceFound, onLocalServiceDiscoveryStop, offLocalServiceResolveFail, offLocalServiceLost, offLocalServiceFound, offLocalServiceDiscoveryStop, createUDPSocket, setStorageSync, setStorage, removeStorageSync, removeStorage, getStorageSync, getStorageInfoSync, getStorageInfo, getStorage, clearStorageSync, clearStorage, createMapContext, saveImageToPhotosAlbum, previewImage, getImageInfo, compressImage, chooseMessageFile, chooseImage, saveVideoToPhotosAlbum, createVideoContext, chooseVideo, chooseMedia, stopVoice, setInnerAudioOption, playVoice, pauseVoice, getAvailableAudioSources, createInnerAudioContext, createAudioContext, stopBackgroundAudio, seekBackgroundAudio, playBackgroundAudio, pauseBackgroundAudio, onBackgroundAudioStop, onBackgroundAudioPlay, onBackgroundAudioPause, getBackgroundAudioPlayerState, getBackgroundAudioManager, createLivePusherContext, createLivePlayerContext, stopRecord, startRecord, getRecorderManager, createCameraContext, stopLocationUpdate, startLocationUpdateBackground, startLocationUpdate, openLocation, onLocationChange, getLocation, chooseLocation, updateShareMenu, showShareMenu, hideShareMenu, getShareInfo, createOffscreenCanvas, createCanvasContext, canvasToTempFilePath, canvasPutImageData, canvasGetImageData, saveFile, removeSavedFile, openDocument, getSavedFileList, getSavedFileInfo, getFileSystemManager, getFileInfo, login, checkSession, navigateToMiniProgram, navigateBackMiniProgram, getAccountInfoSync, getUserInfo, reportMonitor, reportAnalytics, requestPayment, authorize, openSetting, getSetting, chooseAddress, openCard, addCard, chooseInvoiceTitle, chooseInvoice, startSoterAuthentication, checkIsSupportSoterAuthentication, checkIsSoterEnrolledInDevice, getWeRunData, stopBeaconDiscovery, startBeaconDiscovery, onBeaconUpdate, onBeaconServiceChange, getBeacons, stopWifi, startWifi, setWifiList, onWifiConnected, onGetWifiList, getWifiList, getConnectedWifi, connectWifi, addPhoneContact, writeBLECharacteristicValue, readBLECharacteristicValue, onBLEConnectionStateChange, onBLECharacteristicValueChange, notifyBLECharacteristicValueChange, getBLEDeviceServices, getBLEDeviceCharacteristics, createBLEConnection, closeBLEConnection, stopBluetoothDevicesDiscovery, startBluetoothDevicesDiscovery, openBluetoothAdapter, onBluetoothDeviceFound, onBluetoothAdapterStateChange, getConnectedBluetoothDevices, getBluetoothDevices, getBluetoothAdapterState, closeBluetoothAdapter, getBatteryInfoSync, getBatteryInfo, setClipboardData, getClipboardData, stopHCE, startHCE, sendHCEMessage, onHCEMessage, getHCEState, onNetworkStatusChange, getNetworkType, setScreenBrightness, setKeepScreenOn, onUserCaptureScreen, getScreenBrightness, makePhoneCall, stopAccelerometer, startAccelerometer, onAccelerometerChange, stopCompass, startCompass, onCompassChange, stopDeviceMotionListening, startDeviceMotionListening, onDeviceMotionChange, stopGyroscope, startGyroscope, onGyroscopeChange, onMemoryWarning, scanCode, vibrateShort, vibrateLong, createWorker, getExtConfigSync, getExtConfig, createSelectorQuery, createIntersectionObserver, createRewardedVideoAd, createInterstitialAd, cloud, requestSubscribeMessage, hideHomeButton, getRealtimeLogManager, hideKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return getAppStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return canIUse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return base64ToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return arrayBufferToBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return getSystemInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return getSystemInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return getUpdateManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return getLaunchOptionsSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPageNotFound", function() { return onPageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAudioInterruptionEnd", function() { return onAudioInterruptionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAppShow", function() { return onAppShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAppHide", function() { return onAppHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offPageNotFound", function() { return offPageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offError", function() { return offError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionEnd", function() { return offAudioInterruptionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionBegin", function() { return offAudioInterruptionBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAppShow", function() { return offAppShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAppHide", function() { return offAppHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEnableDebug", function() { return setEnableDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogManager", function() { return getLogManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return switchTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return reLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return navigateBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return showToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return showActionSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return hideToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return showNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return setNavigationBarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarColor", function() { return setNavigationBarColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return hideNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return setBackgroundTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return setBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return showTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return showTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return setTabBarStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return setTabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return setTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return removeTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return hideTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return hideTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return loadFontFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return stopPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return startPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return pageScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return createAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTopBarText", function() { return setTopBarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonBoundingClientRect", function() { return getMenuButtonBoundingClientRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return onWindowResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offWindowResize", function() { return offWindowResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyboardHeightChange", function() { return onKeyboardHeightChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offKeyboardHeightChange", function() { return offKeyboardHeightChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextRange", function() { return getSelectedTextRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return sendSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return onSocketOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return onSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return onSocketError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return onSocketClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return connectSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return closeSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLocalServiceDiscovery", function() { return stopLocalServiceDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocalServiceDiscovery", function() { return startLocalServiceDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceResolveFail", function() { return onLocalServiceResolveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceLost", function() { return onLocalServiceLost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceFound", function() { return onLocalServiceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceDiscoveryStop", function() { return onLocalServiceDiscoveryStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceResolveFail", function() { return offLocalServiceResolveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceLost", function() { return offLocalServiceLost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceFound", function() { return offLocalServiceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceDiscoveryStop", function() { return offLocalServiceDiscoveryStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUDPSocket", function() { return createUDPSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return setStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return setStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return removeStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return removeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return getStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return getStorageInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return getStorageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return clearStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return clearStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return createMapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return saveImageToPhotosAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return previewImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return getImageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return compressImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseMessageFile", function() { return chooseMessageFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return chooseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return saveVideoToPhotosAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return createVideoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return chooseVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseMedia", function() { return chooseMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopVoice", function() { return stopVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInnerAudioOption", function() { return setInnerAudioOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playVoice", function() { return playVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseVoice", function() { return pauseVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableAudioSources", function() { return getAvailableAudioSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInnerAudioContext", function() { return createInnerAudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return createAudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBackgroundAudio", function() { return stopBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seekBackgroundAudio", function() { return seekBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playBackgroundAudio", function() { return playBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseBackgroundAudio", function() { return pauseBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioStop", function() { return onBackgroundAudioStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPlay", function() { return onBackgroundAudioPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPause", function() { return onBackgroundAudioPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioPlayerState", function() { return getBackgroundAudioPlayerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioManager", function() { return getBackgroundAudioManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLivePusherContext", function() { return createLivePusherContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLivePlayerContext", function() { return createLivePlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopRecord", function() { return stopRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startRecord", function() { return startRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecorderManager", function() { return getRecorderManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCameraContext", function() { return createCameraContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLocationUpdate", function() { return stopLocationUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdateBackground", function() { return startLocationUpdateBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdate", function() { return startLocationUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return openLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocationChange", function() { return onLocationChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return chooseLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateShareMenu", function() { return updateShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return showShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return hideShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return getShareInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOffscreenCanvas", function() { return createOffscreenCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return createCanvasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasToTempFilePath", function() { return canvasToTempFilePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasPutImageData", function() { return canvasPutImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasGetImageData", function() { return canvasGetImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return saveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return removeSavedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return openDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return getSavedFileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return getSavedFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return getFileSystemManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return getFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return checkSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return navigateToMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return navigateBackMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountInfoSync", function() { return getAccountInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportMonitor", function() { return reportMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return reportAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return requestPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return authorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return openSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return chooseAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return openCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return addCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseInvoiceTitle", function() { return chooseInvoiceTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseInvoice", function() { return chooseInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startSoterAuthentication", function() { return startSoterAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsSupportSoterAuthentication", function() { return checkIsSupportSoterAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsSoterEnrolledInDevice", function() { return checkIsSoterEnrolledInDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeRunData", function() { return getWeRunData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return stopBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return startBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return onBeaconUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return onBeaconServiceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return getBeacons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopWifi", function() { return stopWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startWifi", function() { return startWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWifiList", function() { return setWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWifiConnected", function() { return onWifiConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGetWifiList", function() { return onGetWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWifiList", function() { return getWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return getConnectedWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectWifi", function() { return connectWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return addPhoneContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return writeBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return readBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChange", function() { return onBLEConnectionStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return onBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return notifyBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return getBLEDeviceServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return getBLEDeviceCharacteristics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBLEConnection", function() { return createBLEConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBLEConnection", function() { return closeBLEConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return stopBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return startBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return openBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return onBluetoothDeviceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return onBluetoothAdapterStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return getConnectedBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return getBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return getBluetoothAdapterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return closeBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return getBatteryInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return getBatteryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return setClipboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return getClipboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopHCE", function() { return stopHCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHCE", function() { return startHCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendHCEMessage", function() { return sendHCEMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onHCEMessage", function() { return onHCEMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHCEState", function() { return getHCEState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return onNetworkStatusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return getNetworkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return setScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return setKeepScreenOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return onUserCaptureScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return getScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return makePhoneCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return stopAccelerometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return startAccelerometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return onAccelerometerChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return stopCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return startCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return onCompassChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopDeviceMotionListening", function() { return stopDeviceMotionListening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startDeviceMotionListening", function() { return startDeviceMotionListening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDeviceMotionChange", function() { return onDeviceMotionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopGyroscope", function() { return stopGyroscope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGyroscope", function() { return startGyroscope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return onGyroscopeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return onMemoryWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return scanCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return vibrateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return vibrateLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return createWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return getExtConfigSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return getExtConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return createSelectorQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return createIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return createRewardedVideoAd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInterstitialAd", function() { return createInterstitialAd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return cloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestSubscribeMessage", function() { return requestSubscribeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideHomeButton", function() { return hideHomeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRealtimeLogManager", function() { return getRealtimeLogManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return hideKeyboard; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var getAppStub = getApp;
var canIUse = wx.canIUse;
var base64ToArrayBuffer = wx.base64ToArrayBuffer;
var arrayBufferToBase64 = wx.arrayBufferToBase64;
var getSystemInfoSync = wx.getSystemInfoSync;
var getSystemInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSystemInfo);
var getUpdateManager = wx.getUpdateManager;
var getLaunchOptionsSync = wx.getLaunchOptionsSync;
var onPageNotFound = wx.onPageNotFound;
var onError = wx.onError;
var onAudioInterruptionEnd = wx.onAudioInterruptionEnd;
var onAppShow = wx.onAppShow;
var onAppHide = wx.onAppHide;
var offPageNotFound = wx.offPageNotFound;
var offError = wx.offError;
var offAudioInterruptionEnd = wx.offAudioInterruptionEnd;
var offAudioInterruptionBegin = wx.offAudioInterruptionBegin;
var offAppShow = wx.offAppShow;
var offAppHide = wx.offAppHide;
var setEnableDebug = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setEnableDebug);
var getLogManager = wx.getLogManager;
var switchTab = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.switchTab);
var reLaunch = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.reLaunch);
var redirectTo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.redirectTo);
var navigateTo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateTo);
var navigateBack = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateBack);
var showToast = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showToast);
var showModal = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showModal);
var showLoading = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showLoading);
var showActionSheet = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showActionSheet);
var hideToast = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideToast);
var hideLoading = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideLoading);
var showNavigationBarLoading = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showNavigationBarLoading);
var setNavigationBarTitle = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setNavigationBarTitle);
var setNavigationBarColor = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setNavigationBarColor);
var hideNavigationBarLoading = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideNavigationBarLoading);
var setBackgroundTextStyle = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setBackgroundTextStyle);
var setBackgroundColor = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setBackgroundColor);
var showTabBarRedDot = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showTabBarRedDot);
var showTabBar = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showTabBar);
var setTabBarStyle = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTabBarStyle);
var setTabBarItem = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTabBarItem);
var setTabBarBadge = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTabBarBadge);
var removeTabBarBadge = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.removeTabBarBadge);
var hideTabBarRedDot = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideTabBarRedDot);
var hideTabBar = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideTabBar);
var loadFontFace = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.loadFontFace);
var stopPullDownRefresh = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopPullDownRefresh);
var startPullDownRefresh = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startPullDownRefresh);
var pageScrollTo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.pageScrollTo);
var createAnimation = wx.createAnimation;
var setTopBarText = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTopBarText);
var nextTick = wx.nextTick;
var getMenuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect;
var onWindowResize = wx.onWindowResize;
var offWindowResize = wx.offWindowResize;
var onKeyboardHeightChange = wx.onKeyboardHeightChange;
var offKeyboardHeightChange = wx.offKeyboardHeightChange;
var getSelectedTextRange = wx.getSelectedTextRange;
var request = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.request);
var downloadFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.downloadFile);
var uploadFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.uploadFile);
var sendSocketMessage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.sendSocketMessage);
var onSocketOpen = wx.onSocketOpen;
var onSocketMessage = wx.onSocketMessage;
var onSocketError = wx.onSocketError;
var onSocketClose = wx.onSocketClose;
var connectSocket = wx.connectSocket;
var closeSocket = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.closeSocket);
var stopLocalServiceDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopLocalServiceDiscovery);
var startLocalServiceDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startLocalServiceDiscovery);
var onLocalServiceResolveFail = wx.onLocalServiceResolveFail;
var onLocalServiceLost = wx.onLocalServiceLost;
var onLocalServiceFound = wx.onLocalServiceFound;
var onLocalServiceDiscoveryStop = wx.onLocalServiceDiscoveryStop;
var offLocalServiceResolveFail = wx.offLocalServiceResolveFail;
var offLocalServiceLost = wx.offLocalServiceLost;
var offLocalServiceFound = wx.offLocalServiceFound;
var offLocalServiceDiscoveryStop = wx.offLocalServiceDiscoveryStop;
var createUDPSocket = wx.createUDPSocket;
var setStorageSync = wx.setStorageSync;
var setStorage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setStorage);
var removeStorageSync = wx.removeStorageSync;
var removeStorage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.removeStorage);
var getStorageSync = wx.getStorageSync;
var getStorageInfoSync = wx.getStorageInfoSync;
var getStorageInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getStorageInfo);
var getStorage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getStorage);
var clearStorageSync = wx.clearStorageSync;
var clearStorage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.clearStorage);
var createMapContext = wx.createMapContext;
var saveImageToPhotosAlbum = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.saveImageToPhotosAlbum);
var previewImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.previewImage);
var getImageInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getImageInfo);
var compressImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.compressImage);
var chooseMessageFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseMessageFile);
var chooseImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseImage);
var saveVideoToPhotosAlbum = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.saveVideoToPhotosAlbum);
var createVideoContext = wx.createVideoContext;
var chooseVideo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseVideo);
var chooseMedia = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseMedia);
var stopVoice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopVoice);
var setInnerAudioOption = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setInnerAudioOption);
var playVoice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.playVoice);
var pauseVoice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.pauseVoice);
var getAvailableAudioSources = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getAvailableAudioSources);
var createInnerAudioContext = wx.createInnerAudioContext;
var createAudioContext = wx.createAudioContext;
var stopBackgroundAudio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopBackgroundAudio);
var seekBackgroundAudio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.seekBackgroundAudio);
var playBackgroundAudio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.playBackgroundAudio);
var pauseBackgroundAudio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.pauseBackgroundAudio);
var onBackgroundAudioStop = wx.onBackgroundAudioStop;
var onBackgroundAudioPlay = wx.onBackgroundAudioPlay;
var onBackgroundAudioPause = wx.onBackgroundAudioPause;
var getBackgroundAudioPlayerState = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBackgroundAudioPlayerState);
var getBackgroundAudioManager = wx.getBackgroundAudioManager;
var createLivePusherContext = wx.createLivePusherContext;
var createLivePlayerContext = wx.createLivePlayerContext;
var stopRecord = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopRecord);
var startRecord = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startRecord);
var getRecorderManager = wx.getRecorderManager;
var createCameraContext = wx.createCameraContext;
var stopLocationUpdate = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopLocationUpdate);
var startLocationUpdateBackground = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startLocationUpdateBackground);
var startLocationUpdate = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startLocationUpdate);
var openLocation = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openLocation);
var onLocationChange = wx.onLocationChange;
var getLocation = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getLocation);
var chooseLocation = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseLocation);
var updateShareMenu = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.updateShareMenu);
var showShareMenu = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showShareMenu);
var hideShareMenu = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideShareMenu);
var getShareInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getShareInfo);
var createOffscreenCanvas = wx.createOffscreenCanvas;
var createCanvasContext = wx.createCanvasContext;
var canvasToTempFilePath = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.canvasToTempFilePath);
var canvasPutImageData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.canvasPutImageData);
var canvasGetImageData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.canvasGetImageData);
var saveFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.saveFile);
var removeSavedFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.removeSavedFile);
var openDocument = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openDocument);
var getSavedFileList = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSavedFileList);
var getSavedFileInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSavedFileInfo);
var getFileSystemManager = wx.getFileSystemManager;
var getFileInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getFileInfo);
var login = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.login);
var checkSession = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.checkSession);
var navigateToMiniProgram = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateToMiniProgram);
var navigateBackMiniProgram = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateBackMiniProgram);
var getAccountInfoSync = wx.getAccountInfoSync;
var getUserInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getUserInfo);
var reportMonitor = wx.reportMonitor;
var reportAnalytics = wx.reportAnalytics;
var requestPayment = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.requestPayment);
var authorize = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.authorize);
var openSetting = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openSetting);
var getSetting = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSetting);
var chooseAddress = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseAddress);
var openCard = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openCard);
var addCard = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.addCard);
var chooseInvoiceTitle = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseInvoiceTitle);
var chooseInvoice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseInvoice);
var startSoterAuthentication = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startSoterAuthentication);
var checkIsSupportSoterAuthentication = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.checkIsSupportSoterAuthentication);
var checkIsSoterEnrolledInDevice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.checkIsSoterEnrolledInDevice);
var getWeRunData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getWeRunData);
var stopBeaconDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopBeaconDiscovery);
var startBeaconDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startBeaconDiscovery);
var onBeaconUpdate = wx.onBeaconUpdate;
var onBeaconServiceChange = wx.onBeaconServiceChange;
var getBeacons = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBeacons);
var stopWifi = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopWifi);
var startWifi = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startWifi);
var setWifiList = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setWifiList);
var onWifiConnected = wx.onWifiConnected;
var onGetWifiList = wx.onGetWifiList;
var getWifiList = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getWifiList);
var getConnectedWifi = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getConnectedWifi);
var connectWifi = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.connectWifi);
var addPhoneContact = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.addPhoneContact);
var writeBLECharacteristicValue = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.writeBLECharacteristicValue);
var readBLECharacteristicValue = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.readBLECharacteristicValue);
var onBLEConnectionStateChange = wx.onBLEConnectionStateChange;
var onBLECharacteristicValueChange = wx.onBLECharacteristicValueChange;
var notifyBLECharacteristicValueChange = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.notifyBLECharacteristicValueChange);
var getBLEDeviceServices = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBLEDeviceServices);
var getBLEDeviceCharacteristics = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBLEDeviceCharacteristics);
var createBLEConnection = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.createBLEConnection);
var closeBLEConnection = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.closeBLEConnection);
var stopBluetoothDevicesDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopBluetoothDevicesDiscovery);
var startBluetoothDevicesDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startBluetoothDevicesDiscovery);
var openBluetoothAdapter = wx.openBluetoothAdapter;
var onBluetoothDeviceFound = wx.onBluetoothDeviceFound;
var onBluetoothAdapterStateChange = wx.onBluetoothAdapterStateChange;
var getConnectedBluetoothDevices = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getConnectedBluetoothDevices);
var getBluetoothDevices = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBluetoothDevices);
var getBluetoothAdapterState = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBluetoothAdapterState);
var closeBluetoothAdapter = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.closeBluetoothAdapter);
var getBatteryInfoSync = wx.getBatteryInfoSync;
var getBatteryInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBatteryInfo);
var setClipboardData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setClipboardData);
var getClipboardData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getClipboardData);
var stopHCE = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopHCE);
var startHCE = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startHCE);
var sendHCEMessage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.sendHCEMessage);
var onHCEMessage = wx.onHCEMessage;
var getHCEState = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getHCEState);
var onNetworkStatusChange = wx.onNetworkStatusChange;
var getNetworkType = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getNetworkType);
var setScreenBrightness = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setScreenBrightness);
var setKeepScreenOn = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setKeepScreenOn);
var onUserCaptureScreen = wx.onUserCaptureScreen;
var getScreenBrightness = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getScreenBrightness);
var makePhoneCall = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.makePhoneCall);
var stopAccelerometer = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopAccelerometer);
var startAccelerometer = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startAccelerometer);
var onAccelerometerChange = wx.onAccelerometerChange;
var stopCompass = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopCompass);
var startCompass = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startCompass);
var onCompassChange = wx.onCompassChange;
var stopDeviceMotionListening = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopDeviceMotionListening);
var startDeviceMotionListening = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startDeviceMotionListening);
var onDeviceMotionChange = wx.onDeviceMotionChange;
var stopGyroscope = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopGyroscope);
var startGyroscope = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startGyroscope);
var onGyroscopeChange = wx.onGyroscopeChange;
var onMemoryWarning = wx.onMemoryWarning;
var scanCode = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.scanCode);
var vibrateShort = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.vibrateShort);
var vibrateLong = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.vibrateLong);
var createWorker = wx.createWorker;
var getExtConfigSync = wx.getExtConfigSync;
var getExtConfig = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getExtConfig);
var createSelectorQuery = wx.createSelectorQuery;
var createIntersectionObserver = wx.createIntersectionObserver;
var createRewardedVideoAd = wx.createRewardedVideoAd;
var createInterstitialAd = wx.createInterstitialAd;
var cloud = wx.cloud;
var requestSubscribeMessage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.requestSubscribeMessage);
var hideHomeButton = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideHomeButton);
var getRealtimeLogManager = wx.getRealtimeLogManager;
var hideKeyboard = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideKeyboard);

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Ad/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Ad/index.js ***!
  \*******************************************************************/
/*! exports provided: Ad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return Ad; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var Ad = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('ad');
Ad.defaultProps = {
  adType: 'banner',
  adTheme: 'white'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Audio/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Audio/index.js ***!
  \**********************************************************************/
/*! exports provided: Audio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return Audio; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");
 // 微信已不再维护

var Audio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('audio');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Button/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Button/index.js ***!
  \***********************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/button.html
 * https://q.qq.com/wiki/develop/miniprogram/component/form/button.html
 */

var Button = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('button');
Button.defaultProps = {
  hoverClassName: 'button-hover',
  hoverStartTime: 20,
  hoverStayTime: 70
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Camera/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Camera/index.js ***!
  \***********************************************************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/camera.html
 */

var Camera = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('camera');
Camera.defaultProps = {
  mode: 'normal',
  resolution: 'medium',
  devicePosition: 'back',
  flash: 'auto',
  frameSize: 'medium'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Canvas/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Canvas/index.js ***!
  \***********************************************************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
 */

var Canvas = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('canvas');
Canvas.defaultProps = {
  disableScroll: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Checkbox/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Checkbox/index.js ***!
  \*************************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html
 */

var Checkbox = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('checkbox');
Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  color: '#09bb07'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/CheckboxGroup/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/CheckboxGroup/index.js ***!
  \******************************************************************************/
/*! exports provided: CheckboxGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return CheckboxGroup; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html
 */

var CheckboxGroup = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('checkbox-group');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/CoverImage/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/CoverImage/index.js ***!
  \***************************************************************************/
/*! exports provided: CoverImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return CoverImage; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html
 */

var CoverImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('cover-image');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/CoverView/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/CoverView/index.js ***!
  \**************************************************************************/
/*! exports provided: CoverView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return CoverView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html
 */

var CoverView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('cover-view');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Editor/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Editor/index.js ***!
  \***********************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/editor.html
 */

var Editor = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('editor');
Editor.defaultProps = {
  readOnly: false,
  showImgSize: false,
  showImgToolbar: false,
  showImgResize: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Form/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Form/index.js ***!
  \*********************************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/form.html
 */

var Form = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('form');
Form.defaultProps = {
  reportSubmit: false,
  reportSubmitTimeout: 0
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/FunctionalPageNavigator/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/FunctionalPageNavigator/index.js ***!
  \****************************************************************************************/
/*! exports provided: FunctionalPageNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return FunctionalPageNavigator; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html
 */

var FunctionalPageNavigator = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('functional-page-navigator');
FunctionalPageNavigator.defaultProps = {
  version: 'release'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Icon/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Icon/index.js ***!
  \*********************************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/icon.html
 */

var Icon = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('icon');
Icon.defaultProps = {
  size: 23
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Image/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Image/index.js ***!
  \**********************************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/image.html
 */

var Image = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('image');
Image.defaultProps = {
  mode: 'scaleToFill',
  webp: false,
  lazyLoad: false,
  showMenuByLongpress: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Input/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Input/index.js ***!
  \**********************************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/input.html
 */

var Input = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('input');
Input.defaultProps = {
  type: 'text',
  password: false,
  placeholderClassName: 'input-placeholder',
  disabled: false,
  cursorSpacing: 0,
  autoFocus: false,
  focus: false,
  confirmType: 'done',
  confirmHold: false,
  maxlength: 140,
  selectionEnd: -1,
  selectionStart: -1,
  adjustPosition: true,
  holdKeyboard: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Label/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Label/index.js ***!
  \**********************************************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/label.html
 */

var Label = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('label');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/LivePlayer/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/LivePlayer/index.js ***!
  \***************************************************************************/
/*! exports provided: LivePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return LivePlayer; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html
 */

var LivePlayer = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('live-player');
LivePlayer.defaultProps = {
  mode: 'live',
  autoplay: false,
  muted: false,
  orientation: 'vertical',
  objectFit: 'contain',
  backgroundMute: false,
  minCache: 1,
  maxCache: 3,
  soundMode: 'speaker',
  autoPauseIfNavigate: true,
  autoPauseIfOpenNative: true
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/LivePusher/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/LivePusher/index.js ***!
  \***************************************************************************/
/*! exports provided: LivePusher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return LivePusher; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html
 */

var LivePusher = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('live-pusher');
LivePusher.defaultProps = {
  mode: 'RTC',
  autopush: false,
  muted: false,
  enableCamera: false,
  autoFocus: true,
  orientation: 'vertical',
  beauty: 0,
  whiteness: 0,
  aspect: '9:16',
  minBitrate: 200,
  maxBitrate: 1000,
  audioQuality: 'high',
  zoom: false,
  devicePosition: 'front',
  backgroundMute: false,
  mirror: false,
  remoteMirror: false,
  localMirror: 'auto',
  audioReverbType: 0,
  enableMic: true,
  enableAgc: true,
  enableAns: false,
  audioVolumeType: 'voicecall',
  videoWidth: 360,
  videoHeight: 640
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Map/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Map/index.js ***!
  \********************************************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/map.html
 */

var Map = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('map');
Map.defaultProps = {
  scale: 16,
  showLocation: false,
  layerStyle: 1,
  rotate: 0,
  enable3D: false,
  showCompass: false,
  showScale: false,
  enableOverlooking: false,
  enableZoom: true,
  enableScroll: true,
  enableRotate: false,
  enableSatellite: false,
  enableTraffic: false,
  setting: {}
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/MovableArea/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/MovableArea/index.js ***!
  \****************************************************************************/
/*! exports provided: MovableArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return MovableArea; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html
 */

var MovableArea = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('movable-area');
MovableArea.defaultProps = {
  scaleArea: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/MovableView/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/MovableView/index.js ***!
  \****************************************************************************/
/*! exports provided: MovableView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return MovableView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html
 */

var MovableView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('movable-view');
MovableView.defaultProps = {
  direction: 'none',
  inertia: false,
  outOfBounds: false,
  damping: 20,
  friction: 2,
  disabled: false,
  scale: false,
  scaleMin: 0,
  scaleMax: 10,
  scaleValue: 1,
  animation: true
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Navigator/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Navigator/index.js ***!
  \**************************************************************************/
/*! exports provided: Navigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return Navigator; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html
 */

var Navigator = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('navigator');
Navigator.defaultProps = {
  target: 'self',
  openType: 'navigate',
  delta: 1,
  hoverClassName: 'navigator-hover',
  hoverStopPropagation: false,
  hoverStartTime: 50,
  hoverStayTime: 600
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/OfficialAccount/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/OfficialAccount/index.js ***!
  \********************************************************************************/
/*! exports provided: OfficialAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return OfficialAccount; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html
 */

var OfficialAccount = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('official-account');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/OpenData/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/OpenData/index.js ***!
  \*************************************************************************/
/*! exports provided: OpenData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return OpenData; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html
 */

var OpenData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('open-data');
OpenData.defaultProps = {
  lang: 'en'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Picker/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Picker/index.js ***!
  \***********************************************************************/
/*! exports provided: Picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return Picker; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker.html
 */

var Picker = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker');
Picker.defaultProps = {
  mode: 'selector',
  disabled: false,
  // FIXME: value 的值与 mode 类型变化
  // value: 0,
  range: [],
  fields: 'day'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/PickerView/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/PickerView/index.js ***!
  \***************************************************************************/
/*! exports provided: PickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return PickerView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html
 */

var PickerView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker-view');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/PickerViewColumn/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/PickerViewColumn/index.js ***!
  \*********************************************************************************/
/*! exports provided: PickerViewColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return PickerViewColumn; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html
 */

var PickerViewColumn = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker-view-column');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Progress/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Progress/index.js ***!
  \*************************************************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/progress.html
 */

var Progress = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('progress');
Progress.defaultProps = {
  showInfo: false,
  borderRadius: 0,
  fontSize: 16,
  strokeWidth: 6,
  color: '#09BB07',
  activeColor: '#09BB07',
  backgroundColor: '#EBEBEB',
  active: false,
  activeMode: 'backwards',
  duration: 30
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Radio/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Radio/index.js ***!
  \**********************************************************************/
/*! exports provided: Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/radio.html
 */

var Radio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('radio');
Radio.defaultProps = {
  checked: false,
  disabled: false,
  color: '#09BB07'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/RadioGroup/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/RadioGroup/index.js ***!
  \***************************************************************************/
/*! exports provided: RadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html
 */

var RadioGroup = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('radio-group');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/RichText/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/RichText/index.js ***!
  \*************************************************************************/
/*! exports provided: RichText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return RichText; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html
 */

var RichText = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('rich-text');
RichText.defaultProps = {
  nodes: []
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/ScrollView/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/ScrollView/index.js ***!
  \***************************************************************************/
/*! exports provided: ScrollView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return ScrollView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

var ScrollView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('scroll-view');
ScrollView.defaultProps = {
  upperThreshold: 50,
  lowerThreshold: 50,
  scrollX: false,
  scrollY: false,
  scrollWithAnimation: false,
  enableBackToTop: false,
  enableFlex: false,
  scrollAnchoring: false,
  refresherEnabled: false,
  refresherThreshold: 45,
  refresherDefaultStyle: 'black',
  refresherBackground: '#fff',
  refresherTriggered: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Slider/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Slider/index.js ***!
  \***********************************************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/slider.html
 */

var Slider = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('slider');
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  value: 0,
  color: '#e9e9e9',
  selectedColor: '#1aad19',
  activeColor: '#1aad19',
  backgroundColor: '#e9e9e9',
  blockSize: 28,
  blockColor: '#ffffff',
  showValue: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Swiper/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Swiper/index.js ***!
  \***********************************************************************/
/*! exports provided: Swiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html
 */

var Swiper = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('swiper');
Swiper.defaultProps = {
  indicatorDots: false,
  indicatorColor: 'rgba(0, 0, 0, .3)',
  indicatorActiveColor: '#000000',
  autoplay: false,
  current: 0,
  interval: 5000,
  duration: 500,
  circular: false,
  vertical: false,
  previousMargin: '0px',
  nextMargin: '0px',
  displayMultipleItems: 1,
  skipHiddenItemLayout: false,
  easingFunction: 'default'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/SwiperItem/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/SwiperItem/index.js ***!
  \***************************************************************************/
/*! exports provided: SwiperItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return SwiperItem; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html
 */

var SwiperItem = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('swiper-item');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Switch/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Switch/index.js ***!
  \***********************************************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/switch.html
 */

var Switch = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('switch');
Switch.defaultProps = {
  checked: false,
  disabled: false,
  type: 'switch',
  color: '#04BE02'
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Text/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Text/index.js ***!
  \*********************************************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/text.html
 */

var Text = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('text');
Text.defaultProps = {
  selectable: false,
  decode: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Textarea/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Textarea/index.js ***!
  \*************************************************************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html
 */

var Textarea = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('textarea');
Textarea.defaultProps = {
  placeholderClassName: 'textarea-placeholder',
  disabled: false,
  maxlength: 140,
  autoFocus: false,
  focus: false,
  autoHeight: false,
  fixed: false,
  cursorSpacing: 0,
  cursor: -1,
  showConfirmBar: true,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  holdKeyboard: false,
  disableDefaultPadding: false
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/Video/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/Video/index.js ***!
  \**********************************************************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var hostComponentName = 'video';

var VideoRender = function VideoRender(props, ref) {
  var children = props.children,
      restProps = __rest(props, ["children"]);

  var videoProps = __assign(__assign({}, restProps), {
    ref: ref
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](hostComponentName, videoProps, children);
};
/**
 * video 默认宽度 300px、高度 225px，可通过 wxss 设置宽高
 * https://developers.weixin.qq.com/miniprogram/dev/component/video.html
 */


var RemaxVideo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](VideoRender);
RemaxVideo.defaultProps = {
  controls: true,
  danmuBtn: false,
  enableDanmu: false,
  autoplay: false,
  loop: false,
  muted: false,
  initialTime: 0,
  pageGesture: false,
  showProgress: true,
  showFullscreenBtn: true,
  showPlayBtn: true,
  showCenterPlayBtn: true,
  enableProgressGesture: true,
  objectFit: 'contain',
  showMuteBtn: false,
  playBtnPosition: 'bottom',
  enablePlayGesture: false,
  autoPauseIfNavigate: true,
  autoPauseIfOpenNative: true,
  vslideGesture: false,
  vslideGestureInFullscreen: true,
  showCastingButton: false,
  pictureInPictureShowProgress: false,
  enableAutoRotation: false,
  showScreenLockButton: false
};
var Video = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_1__["createHostComponent"])(hostComponentName, RemaxVideo);

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/View/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/View/index.js ***!
  \*********************************************************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/view.html
 */

var View = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('view');
View.defaultProps = {
  hoverClassName: 'none',
  hoverStopPropagation: false,
  hoverStartTime: 50,
  hoverStayTime: 400
};

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/WebView/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/WebView/index.js ***!
  \************************************************************************/
/*! exports provided: WebView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return WebView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "./node_modules/@remax/shared/esm/index.js");

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 */

var WebView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('web-view');

/***/ }),

/***/ "./node_modules/@remax/wechat/esm/hostComponents/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/hostComponents/index.js ***!
  \****************************************************************/
/*! exports provided: View, Input, Textarea, Video, Swiper, ScrollView, SwiperItem, MovableView, MovableArea, CoverView, CoverImage, Icon, Text, RichText, Progress, Button, CheckboxGroup, Checkbox, Form, Label, Picker, PickerView, PickerViewColumn, RadioGroup, Radio, Slider, Switch, Navigator, Image, LivePlayer, LivePusher, Map, Canvas, OpenData, OfficialAccount, Editor, Audio, Ad, WebView, FunctionalPageNavigator, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./node_modules/@remax/wechat/esm/hostComponents/View/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./node_modules/@remax/wechat/esm/hostComponents/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_1__["Input"]; });

/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Textarea */ "./node_modules/@remax/wechat/esm/hostComponents/Textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_2__["Textarea"]; });

/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Video */ "./node_modules/@remax/wechat/esm/hostComponents/Video/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _Video__WEBPACK_IMPORTED_MODULE_3__["Video"]; });

/* harmony import */ var _Swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Swiper */ "./node_modules/@remax/wechat/esm/hostComponents/Swiper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _Swiper__WEBPACK_IMPORTED_MODULE_4__["Swiper"]; });

/* harmony import */ var _ScrollView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScrollView */ "./node_modules/@remax/wechat/esm/hostComponents/ScrollView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _ScrollView__WEBPACK_IMPORTED_MODULE_5__["ScrollView"]; });

/* harmony import */ var _SwiperItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwiperItem */ "./node_modules/@remax/wechat/esm/hostComponents/SwiperItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _SwiperItem__WEBPACK_IMPORTED_MODULE_6__["SwiperItem"]; });

/* harmony import */ var _MovableView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MovableView */ "./node_modules/@remax/wechat/esm/hostComponents/MovableView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _MovableView__WEBPACK_IMPORTED_MODULE_7__["MovableView"]; });

/* harmony import */ var _MovableArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MovableArea */ "./node_modules/@remax/wechat/esm/hostComponents/MovableArea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _MovableArea__WEBPACK_IMPORTED_MODULE_8__["MovableArea"]; });

/* harmony import */ var _CoverView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CoverView */ "./node_modules/@remax/wechat/esm/hostComponents/CoverView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _CoverView__WEBPACK_IMPORTED_MODULE_9__["CoverView"]; });

/* harmony import */ var _CoverImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CoverImage */ "./node_modules/@remax/wechat/esm/hostComponents/CoverImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _CoverImage__WEBPACK_IMPORTED_MODULE_10__["CoverImage"]; });

/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Icon */ "./node_modules/@remax/wechat/esm/hostComponents/Icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_11__["Icon"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Text */ "./node_modules/@remax/wechat/esm/hostComponents/Text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_12__["Text"]; });

/* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RichText */ "./node_modules/@remax/wechat/esm/hostComponents/RichText/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _RichText__WEBPACK_IMPORTED_MODULE_13__["RichText"]; });

/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Progress */ "./node_modules/@remax/wechat/esm/hostComponents/Progress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _Progress__WEBPACK_IMPORTED_MODULE_14__["Progress"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Button */ "./node_modules/@remax/wechat/esm/hostComponents/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_15__["Button"]; });

/* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CheckboxGroup */ "./node_modules/@remax/wechat/esm/hostComponents/CheckboxGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _CheckboxGroup__WEBPACK_IMPORTED_MODULE_16__["CheckboxGroup"]; });

/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Checkbox */ "./node_modules/@remax/wechat/esm/hostComponents/Checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_17__["Checkbox"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Form */ "./node_modules/@remax/wechat/esm/hostComponents/Form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_18__["Form"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Label */ "./node_modules/@remax/wechat/esm/hostComponents/Label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_19__["Label"]; });

/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker */ "./node_modules/@remax/wechat/esm/hostComponents/Picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker__WEBPACK_IMPORTED_MODULE_20__["Picker"]; });

/* harmony import */ var _PickerView__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PickerView */ "./node_modules/@remax/wechat/esm/hostComponents/PickerView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _PickerView__WEBPACK_IMPORTED_MODULE_21__["PickerView"]; });

/* harmony import */ var _PickerViewColumn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PickerViewColumn */ "./node_modules/@remax/wechat/esm/hostComponents/PickerViewColumn/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _PickerViewColumn__WEBPACK_IMPORTED_MODULE_22__["PickerViewColumn"]; });

/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./RadioGroup */ "./node_modules/@remax/wechat/esm/hostComponents/RadioGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _RadioGroup__WEBPACK_IMPORTED_MODULE_23__["RadioGroup"]; });

/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Radio */ "./node_modules/@remax/wechat/esm/hostComponents/Radio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _Radio__WEBPACK_IMPORTED_MODULE_24__["Radio"]; });

/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Slider */ "./node_modules/@remax/wechat/esm/hostComponents/Slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_25__["Slider"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Switch */ "./node_modules/@remax/wechat/esm/hostComponents/Switch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_26__["Switch"]; });

/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Navigator */ "./node_modules/@remax/wechat/esm/hostComponents/Navigator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _Navigator__WEBPACK_IMPORTED_MODULE_27__["Navigator"]; });

/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Image */ "./node_modules/@remax/wechat/esm/hostComponents/Image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_28__["Image"]; });

/* harmony import */ var _LivePlayer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./LivePlayer */ "./node_modules/@remax/wechat/esm/hostComponents/LivePlayer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return _LivePlayer__WEBPACK_IMPORTED_MODULE_29__["LivePlayer"]; });

/* harmony import */ var _LivePusher__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./LivePusher */ "./node_modules/@remax/wechat/esm/hostComponents/LivePusher/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return _LivePusher__WEBPACK_IMPORTED_MODULE_30__["LivePusher"]; });

/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Map */ "./node_modules/@remax/wechat/esm/hostComponents/Map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_31__["Map"]; });

/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Canvas */ "./node_modules/@remax/wechat/esm/hostComponents/Canvas/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _Canvas__WEBPACK_IMPORTED_MODULE_32__["Canvas"]; });

/* harmony import */ var _OpenData__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./OpenData */ "./node_modules/@remax/wechat/esm/hostComponents/OpenData/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return _OpenData__WEBPACK_IMPORTED_MODULE_33__["OpenData"]; });

/* harmony import */ var _OfficialAccount__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./OfficialAccount */ "./node_modules/@remax/wechat/esm/hostComponents/OfficialAccount/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return _OfficialAccount__WEBPACK_IMPORTED_MODULE_34__["OfficialAccount"]; });

/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Editor */ "./node_modules/@remax/wechat/esm/hostComponents/Editor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _Editor__WEBPACK_IMPORTED_MODULE_35__["Editor"]; });

/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Audio */ "./node_modules/@remax/wechat/esm/hostComponents/Audio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _Audio__WEBPACK_IMPORTED_MODULE_36__["Audio"]; });

/* harmony import */ var _Ad__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Ad */ "./node_modules/@remax/wechat/esm/hostComponents/Ad/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return _Ad__WEBPACK_IMPORTED_MODULE_37__["Ad"]; });

/* harmony import */ var _WebView__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./WebView */ "./node_modules/@remax/wechat/esm/hostComponents/WebView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _WebView__WEBPACK_IMPORTED_MODULE_38__["WebView"]; });

/* harmony import */ var _FunctionalPageNavigator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./FunctionalPageNavigator */ "./node_modules/@remax/wechat/esm/hostComponents/FunctionalPageNavigator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return _FunctionalPageNavigator__WEBPACK_IMPORTED_MODULE_39__["FunctionalPageNavigator"]; });

/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Camera */ "./node_modules/@remax/wechat/esm/hostComponents/Camera/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _Camera__WEBPACK_IMPORTED_MODULE_40__["Camera"]; });











































/***/ }),

/***/ "./node_modules/@remax/wechat/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/index.js ***!
  \*************************************************/
/*! exports provided: View, Input, Textarea, Video, Swiper, ScrollView, SwiperItem, MovableView, MovableArea, CoverView, CoverImage, Icon, Text, RichText, Progress, Button, CheckboxGroup, Checkbox, Form, Label, Picker, PickerView, PickerViewColumn, RadioGroup, Radio, Slider, Switch, Navigator, Image, LivePlayer, LivePusher, Map, Canvas, OpenData, OfficialAccount, Editor, Audio, Ad, WebView, FunctionalPageNavigator, Camera, getAppStub, canIUse, base64ToArrayBuffer, arrayBufferToBase64, getSystemInfoSync, getSystemInfo, getUpdateManager, getLaunchOptionsSync, onPageNotFound, onError, onAudioInterruptionEnd, onAppShow, onAppHide, offPageNotFound, offError, offAudioInterruptionEnd, offAudioInterruptionBegin, offAppShow, offAppHide, setEnableDebug, getLogManager, switchTab, reLaunch, redirectTo, navigateTo, navigateBack, showToast, showModal, showLoading, showActionSheet, hideToast, hideLoading, showNavigationBarLoading, setNavigationBarTitle, setNavigationBarColor, hideNavigationBarLoading, setBackgroundTextStyle, setBackgroundColor, showTabBarRedDot, showTabBar, setTabBarStyle, setTabBarItem, setTabBarBadge, removeTabBarBadge, hideTabBarRedDot, hideTabBar, loadFontFace, stopPullDownRefresh, startPullDownRefresh, pageScrollTo, createAnimation, setTopBarText, nextTick, getMenuButtonBoundingClientRect, onWindowResize, offWindowResize, onKeyboardHeightChange, offKeyboardHeightChange, getSelectedTextRange, request, downloadFile, uploadFile, sendSocketMessage, onSocketOpen, onSocketMessage, onSocketError, onSocketClose, connectSocket, closeSocket, stopLocalServiceDiscovery, startLocalServiceDiscovery, onLocalServiceResolveFail, onLocalServiceLost, onLocalServiceFound, onLocalServiceDiscoveryStop, offLocalServiceResolveFail, offLocalServiceLost, offLocalServiceFound, offLocalServiceDiscoveryStop, createUDPSocket, setStorageSync, setStorage, removeStorageSync, removeStorage, getStorageSync, getStorageInfoSync, getStorageInfo, getStorage, clearStorageSync, clearStorage, createMapContext, saveImageToPhotosAlbum, previewImage, getImageInfo, compressImage, chooseMessageFile, chooseImage, saveVideoToPhotosAlbum, createVideoContext, chooseVideo, chooseMedia, stopVoice, setInnerAudioOption, playVoice, pauseVoice, getAvailableAudioSources, createInnerAudioContext, createAudioContext, stopBackgroundAudio, seekBackgroundAudio, playBackgroundAudio, pauseBackgroundAudio, onBackgroundAudioStop, onBackgroundAudioPlay, onBackgroundAudioPause, getBackgroundAudioPlayerState, getBackgroundAudioManager, createLivePusherContext, createLivePlayerContext, stopRecord, startRecord, getRecorderManager, createCameraContext, stopLocationUpdate, startLocationUpdateBackground, startLocationUpdate, openLocation, onLocationChange, getLocation, chooseLocation, updateShareMenu, showShareMenu, hideShareMenu, getShareInfo, createOffscreenCanvas, createCanvasContext, canvasToTempFilePath, canvasPutImageData, canvasGetImageData, saveFile, removeSavedFile, openDocument, getSavedFileList, getSavedFileInfo, getFileSystemManager, getFileInfo, login, checkSession, navigateToMiniProgram, navigateBackMiniProgram, getAccountInfoSync, getUserInfo, reportMonitor, reportAnalytics, requestPayment, authorize, openSetting, getSetting, chooseAddress, openCard, addCard, chooseInvoiceTitle, chooseInvoice, startSoterAuthentication, checkIsSupportSoterAuthentication, checkIsSoterEnrolledInDevice, getWeRunData, stopBeaconDiscovery, startBeaconDiscovery, onBeaconUpdate, onBeaconServiceChange, getBeacons, stopWifi, startWifi, setWifiList, onWifiConnected, onGetWifiList, getWifiList, getConnectedWifi, connectWifi, addPhoneContact, writeBLECharacteristicValue, readBLECharacteristicValue, onBLEConnectionStateChange, onBLECharacteristicValueChange, notifyBLECharacteristicValueChange, getBLEDeviceServices, getBLEDeviceCharacteristics, createBLEConnection, closeBLEConnection, stopBluetoothDevicesDiscovery, startBluetoothDevicesDiscovery, openBluetoothAdapter, onBluetoothDeviceFound, onBluetoothAdapterStateChange, getConnectedBluetoothDevices, getBluetoothDevices, getBluetoothAdapterState, closeBluetoothAdapter, getBatteryInfoSync, getBatteryInfo, setClipboardData, getClipboardData, stopHCE, startHCE, sendHCEMessage, onHCEMessage, getHCEState, onNetworkStatusChange, getNetworkType, setScreenBrightness, setKeepScreenOn, onUserCaptureScreen, getScreenBrightness, makePhoneCall, stopAccelerometer, startAccelerometer, onAccelerometerChange, stopCompass, startCompass, onCompassChange, stopDeviceMotionListening, startDeviceMotionListening, onDeviceMotionChange, stopGyroscope, startGyroscope, onGyroscopeChange, onMemoryWarning, scanCode, vibrateShort, vibrateLong, createWorker, getExtConfigSync, getExtConfig, createSelectorQuery, createIntersectionObserver, createRewardedVideoAd, createInterstitialAd, cloud, requestSubscribeMessage, hideHomeButton, getRealtimeLogManager, hideKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostComponents */ "./node_modules/@remax/wechat/esm/hostComponents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["LivePlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["LivePusher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["OpenData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["OfficialAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Audio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["FunctionalPageNavigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Camera"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./node_modules/@remax/wechat/esm/api/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAppStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["base64ToArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["arrayBufferToBase64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLaunchOptionsSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onPageNotFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAudioInterruptionEnd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppShow", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppHide", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offPageNotFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionEnd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionBegin", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAudioInterruptionBegin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppShow", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppHide", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEnableDebug", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setEnableDebug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLogManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLogManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundTextStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["loadFontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTopBarText", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTopBarText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonBoundingClientRect", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getMenuButtonBoundingClientRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offWindowResize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onKeyboardHeightChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onKeyboardHeightChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offKeyboardHeightChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offKeyboardHeightChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextRange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSelectedTextRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["sendSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocalServiceDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocalServiceDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceResolveFail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceLost", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceDiscoveryStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceResolveFail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceLost", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceDiscoveryStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUDPSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createUDPSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createMapContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveImageToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["compressImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMessageFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseMessageFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveVideoToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMedia", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInnerAudioOption", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setInnerAudioOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["playVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pauseVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAvailableAudioSources", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAvailableAudioSources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInnerAudioContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createInnerAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seekBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["seekBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["playBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pauseBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPlay", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioPlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPause", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioPause"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioPlayerState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBackgroundAudioPlayerState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBackgroundAudioManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePusherContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createLivePusherContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePlayerContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createLivePlayerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopRecord", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startRecord", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecorderManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getRecorderManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCameraContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createCameraContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocationUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdateBackground", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocationUpdateBackground"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocationChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocationChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["updateShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getShareInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOffscreenCanvas", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createOffscreenCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasToTempFilePath", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasToTempFilePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasPutImageData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasPutImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasGetImageData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasGetImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileSystemManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAccountInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAccountInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportMonitor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reportMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["requestPayment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["authorize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoiceTitle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseInvoiceTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseInvoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startSoterAuthentication", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSupportSoterAuthentication", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkIsSupportSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSoterEnrolledInDevice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkIsSoterEnrolledInDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeRunData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getWeRunData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBeacons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWifiConnected", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onWifiConnected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onGetWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getConnectedWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addPhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["writeBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["readBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLEConnectionStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["notifyBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceCharacteristics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBLEConnection", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBLEConnection", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getConnectedBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothAdapterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopHCE", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startHCE", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendHCEMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["sendHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onHCEMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHCEState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getHCEState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopDeviceMotionListening", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startDeviceMotionListening", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeviceMotionChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onDeviceMotionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopGyroscope", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startGyroscope", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["scanCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getExtConfigSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getExtConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createRewardedVideoAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterstitialAd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createInterstitialAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["cloud"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestSubscribeMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["requestSubscribeMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideHomeButton", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideHomeButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRealtimeLogManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getRealtimeLogManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideKeyboard"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@remax/wechat/esm/types/index.js");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./node_modules/@remax/wechat/esm/types/config.js":
/*!********************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/types/config.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@remax/wechat/esm/types/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@remax/wechat/esm/types/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/@remax/wechat/esm/types/config.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  function memoized() {
    var newArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }

  return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);

/***/ }),

/***/ "./node_modules/remax/one.js":
/*!***********************************!*\
  !*** ./node_modules/remax/one.js ***!
  \***********************************/
/*! exports provided: Button, Form, Image, Input, Label, Navigator, Text, Textarea, View, WebView, navigateTo, navigateBack, redirectTo, reLaunch, switchTab, Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/one */ "./node_modules/@remax/one/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });



/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* istanbul ignore next */
/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* istanbul ignore next */
module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/pages/index/index.css?modules":
/*!*******************************************!*\
  !*** ./src/pages/index/index.css?modules ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___2lhPP","logo":"logo___Al4Xb","logo-spin":"logo-spin___3_EwH","text":"text___XEtZ5","header":"header___3qOk9"};

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/index/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/demo */ "./lib/demo.js");
/* harmony import */ var _lib_a__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/a */ "./lib/a.js");



 // 这里导入了一个umd的包，一般情况下会导入npm安装的包，这里为了演示，导入的是一个手写的简单包




var _page = function _page() {
  console.log(_lib_demo__WEBPACK_IMPORTED_MODULE_4__["Core"], _lib_demo__WEBPACK_IMPORTED_MODULE_4__["Inner"], _lib_demo__WEBPACK_IMPORTED_MODULE_4__["Decline"], _lib_demo__WEBPACK_IMPORTED_MODULE_4__["Hub"], _lib_a__WEBPACK_IMPORTED_MODULE_5__["a"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ",
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.logo,
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.text
  }, "\u7F16\u8F91 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.path
  }, "src/pages/index/index.js"), ' ', "\u5F00\u59CB")));
};

_page.displayName = "Page[pages/index/index]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/index/index")));

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./src/pages/index/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fenyiwudian/code/demo-app/src/pages/index/index.js */"./src/pages/index/index.js");


/***/ })

},[[1,"runtime","remax-vendors"]]]);