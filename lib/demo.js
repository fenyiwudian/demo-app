// 这是一个模拟的umd包
!function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.DemoLib = t() : e.DemoLib = t()
}(window, (function() {
  return function(e) {
      var t = {};
      function r(o) {
          if (t[o])
              return t[o].exports;
          var n = t[o] = {
              i: o,
              l: !1,
              exports: {}
          };
          return e[o].call(n.exports, n, n.exports, r),
          n.l = !0,
          n.exports
      }
      return r.m = e,
      r.c = t,
      r.d = function(e, t, o) {
          r.o(e, t) || Object.defineProperty(e, t, {
              enumerable: !0,
              get: o
          })
      }
      ,
      r.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
          }),
          Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }
      ,
      r.t = function(e, t) {
          if (1 & t && (e = r(e)),
          8 & t)
              return e;
          if (4 & t && "object" == typeof e && e && e.__esModule)
              return e;
          var o = Object.create(null);
          if (r.r(o),
          Object.defineProperty(o, "default", {
              enumerable: !0,
              value: e
          }),
          2 & t && "string" != typeof e)
              for (var n in e)
                  r.d(o, n, function(t) {
                      return e[t]
                  }
                  .bind(null, n));
          return o
      }
      ,
      r.n = function(e) {
          var t = e && e.__esModule ? function() {
              return e.default
          }
          : function() {
              return e
          }
          ;
          return r.d(t, "a", t),
          t
      }
      ,
      r.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
      }
      ,
      r.p = "",
      r(r.s = 0)
  }([function(e, t, r) {
      "use strict";
      r.r(t),
      r.d(t, "Hub", (function() {
          return a
      }
      )),
      r.d(t, "Core", (function() {
          return i
      }
      )),
      r.d(t, "Inner", (function() {
          return c
      }
      )),
      r.d(t, "Decline", (function() {
          return s
      }
      ));
      // 如果将这句代码的注释打开，则会构建失败,注释掉就能成功
      // async function hehe(){}
      const a = {name: 'Hub'}
        , s = {name: 'Decline'}
        , c = {name: 'Inner'}
        , i = {name: 'Core'}
  }
  ])
}
));
