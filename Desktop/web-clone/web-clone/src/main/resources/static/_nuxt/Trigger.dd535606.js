import {
  P,
  a as y,
  b as A,
  bz as It,
  ak as Yt,
  c as dt,
  d as R,
  g as le,
  bA as ce,
  e as fe,
  p as K,
  bq as pe,
  bp as de,
  bB as Tt,
  aJ as he,
  bC as ve,
} from "./entry.8aa394d7.js";
import { w as B, i as ge } from "./isVisible.48fa23e0.js";
import { a as j, s as I, P as me } from "./PortalWrapper.438f60b2.js";
import {
  z as x,
  a7 as zt,
  a9 as ye,
  K as ht,
  j as _,
  a as k,
  s as O,
  b as $,
  y as Lt,
  o as we,
  k as z,
  n as ut,
  L as be,
  q as Te,
  t as Pe,
  ak as Ce,
  a3 as Pt,
  i as xe,
  p as Oe,
  F as Me,
} from "./swiper-vue.d5cda4d1.js";
import { b as Se, c as _t, a as De } from "./motion.d46d0bbf.js";
function Ee() {
  return "";
}
function Ne(t) {
  return t ? t.ownerDocument : window.document;
}
function Ut() {}
const Ae = () => ({
    action: P.oneOfType([P.string, P.arrayOf(P.string)]).def([]),
    showAction: P.any.def([]),
    hideAction: P.any.def([]),
    getPopupClassNameFromAlign: P.any.def(Ee),
    onPopupVisibleChange: Function,
    afterPopupVisibleChange: P.func.def(Ut),
    popup: P.any,
    popupStyle: { type: Object, default: void 0 },
    prefixCls: P.string.def("rc-trigger-popup"),
    popupClassName: P.string.def(""),
    popupPlacement: String,
    builtinPlacements: P.object,
    popupTransitionName: String,
    popupAnimation: P.any,
    mouseEnterDelay: P.number.def(0),
    mouseLeaveDelay: P.number.def(0.1),
    zIndex: Number,
    focusDelay: P.number.def(0),
    blurDelay: P.number.def(0.15),
    getPopupContainer: Function,
    getDocument: P.func.def(Ne),
    forceRender: { type: Boolean, default: void 0 },
    destroyPopupOnHide: { type: Boolean, default: !1 },
    mask: { type: Boolean, default: !1 },
    maskClosable: { type: Boolean, default: !0 },
    popupAlign: P.object.def(() => ({})),
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: !1 },
    maskTransitionName: String,
    maskAnimation: String,
    stretch: String,
    alignPoint: { type: Boolean, default: void 0 },
    autoDestroy: { type: Boolean, default: !1 },
    mobile: Object,
    getTriggerDOMNode: Function,
  }),
  vt = {
    visible: Boolean,
    prefixCls: String,
    zIndex: Number,
    destroyPopupOnHide: Boolean,
    forceRender: Boolean,
    animation: [String, Object],
    transitionName: String,
    stretch: { type: String },
    align: { type: Object },
    point: { type: Object },
    getRootDomNode: { type: Function },
    getClassNameFromAlign: { type: Function },
    onMouseenter: { type: Function },
    onMouseleave: { type: Function },
    onMousedown: { type: Function },
    onTouchstart: { type: Function },
  },
  Ve = y(y({}, vt), { mobile: { type: Object } }),
  He = y(y({}, vt), {
    mask: Boolean,
    mobile: { type: Object },
    maskAnimation: String,
    maskTransitionName: String,
  });
function qt(t) {
  const {
    prefixCls: o,
    visible: e,
    zIndex: i,
    mask: n,
    maskAnimation: r,
    maskTransitionName: s,
  } = t;
  if (!n) return null;
  let a = {};
  return (
    (s || r) && (a = It({ prefixCls: o, transitionName: s, animation: r })),
    x(ht, A({ appear: !0 }, a), {
      default: () => [
        zt(x("div", { style: { zIndex: i }, class: `${o}-mask` }, null), [
          [ye("if"), e],
        ]),
      ],
    })
  );
}
qt.displayName = "Mask";
const $e = _({
  compatConfig: { MODE: 3 },
  name: "MobilePopupInner",
  inheritAttrs: !1,
  props: Ve,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(t, o) {
    let { expose: e, slots: i } = o;
    const n = k();
    return (
      e({ forceAlign: () => {}, getElement: () => n.value }),
      () => {
        var r;
        const {
            zIndex: s,
            visible: a,
            prefixCls: l,
            mobile: {
              popupClassName: u,
              popupStyle: v,
              popupMotion: d = {},
              popupRender: p,
            } = {},
          } = t,
          c = y({ zIndex: s }, v);
        let h = Yt(
          (r = i.default) === null || r === void 0 ? void 0 : r.call(i)
        );
        h.length > 1 && (h = x("div", { class: `${l}-content` }, [h])),
          p && (h = p(h));
        const g = dt(l, u);
        return x(ht, A({ ref: n }, d), {
          default: () => [a ? x("div", { class: g, style: c }, [h]) : null],
        });
      }
    );
  },
});
var Re =
  (globalThis && globalThis.__awaiter) ||
  function (t, o, e, i) {
    function n(r) {
      return r instanceof e
        ? r
        : new e(function (s) {
            s(r);
          });
    }
    return new (e || (e = Promise))(function (r, s) {
      function a(v) {
        try {
          u(i.next(v));
        } catch (d) {
          s(d);
        }
      }
      function l(v) {
        try {
          u(i.throw(v));
        } catch (d) {
          s(d);
        }
      }
      function u(v) {
        v.done ? r(v.value) : n(v.value).then(a, l);
      }
      u((i = i.apply(t, o || [])).next());
    });
  };
const Ct = ["measure", "align", null, "motion"],
  ke = (t, o) => {
    const e = O(null),
      i = O(),
      n = O(!1);
    function r(l) {
      n.value || (e.value = l);
    }
    function s() {
      B.cancel(i.value);
    }
    function a(l) {
      s(),
        (i.value = B(() => {
          let u = e.value;
          switch (e.value) {
            case "align":
              u = "motion";
              break;
            case "motion":
              u = "stable";
              break;
          }
          r(u), l == null || l();
        }));
    }
    return (
      $(
        t,
        () => {
          r("measure");
        },
        { immediate: !0, flush: "post" }
      ),
      Lt(() => {
        $(
          e,
          () => {
            switch (e.value) {
              case "measure":
                o();
                break;
            }
            e.value &&
              (i.value = B(() =>
                Re(void 0, void 0, void 0, function* () {
                  const l = Ct.indexOf(e.value),
                    u = Ct[l + 1];
                  u && l !== -1 && r(u);
                })
              ));
          },
          { immediate: !0, flush: "post" }
        );
      }),
      we(() => {
        (n.value = !0), s();
      }),
      [e, a]
    );
  },
  Be = (t) => {
    const o = O({ width: 0, height: 0 });
    function e(n) {
      o.value = { width: n.offsetWidth, height: n.offsetHeight };
    }
    return [
      z(() => {
        const n = {};
        if (t.value) {
          const { width: r, height: s } = o.value;
          t.value.indexOf("height") !== -1 && s
            ? (n.height = `${s}px`)
            : t.value.indexOf("minHeight") !== -1 &&
              s &&
              (n.minHeight = `${s}px`),
            t.value.indexOf("width") !== -1 && r
              ? (n.width = `${r}px`)
              : t.value.indexOf("minWidth") !== -1 &&
                r &&
                (n.minWidth = `${r}px`);
        }
        return n;
      }),
      e,
    ];
  };
function xt(t, o) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    o &&
      (i = i.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      })),
      e.push.apply(e, i);
  }
  return e;
}
function Ot(t) {
  for (var o = 1; o < arguments.length; o++) {
    var e = arguments[o] != null ? arguments[o] : {};
    o % 2
      ? xt(Object(e), !0).forEach(function (i) {
          We(t, i, e[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
      : xt(Object(e)).forEach(function (i) {
          Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
        });
  }
  return t;
}
function lt(t) {
  "@babel/helpers - typeof";
  return (
    (lt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              typeof Symbol == "function" &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    lt(t)
  );
}
function We(t, o, e) {
  return (
    o in t
      ? Object.defineProperty(t, o, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[o] = e),
    t
  );
}
var X,
  Fe = { Webkit: "-webkit-", Moz: "-moz-", ms: "-ms-", O: "-o-" };
function et() {
  if (X !== void 0) return X;
  X = "";
  var t = document.createElement("p").style,
    o = "Transform";
  for (var e in Fe) e + o in t && (X = e);
  return X;
}
function Gt() {
  return et() ? "".concat(et(), "TransitionProperty") : "transitionProperty";
}
function ot() {
  return et() ? "".concat(et(), "Transform") : "transform";
}
function Mt(t, o) {
  var e = Gt();
  e &&
    ((t.style[e] = o),
    e !== "transitionProperty" && (t.style.transitionProperty = o));
}
function nt(t, o) {
  var e = ot();
  e && ((t.style[e] = o), e !== "transform" && (t.style.transform = o));
}
function Xe(t) {
  return t.style.transitionProperty || t.style[Gt()];
}
function je(t) {
  var o = window.getComputedStyle(t, null),
    e = o.getPropertyValue("transform") || o.getPropertyValue(ot());
  if (e && e !== "none") {
    var i = e.replace(/[^0-9\-.,]/g, "").split(",");
    return { x: parseFloat(i[12] || i[4], 0), y: parseFloat(i[13] || i[5], 0) };
  }
  return { x: 0, y: 0 };
}
var Ie = /matrix\((.*)\)/,
  Ye = /matrix3d\((.*)\)/;
function ze(t, o) {
  var e = window.getComputedStyle(t, null),
    i = e.getPropertyValue("transform") || e.getPropertyValue(ot());
  if (i && i !== "none") {
    var n,
      r = i.match(Ie);
    if (r)
      (r = r[1]),
        (n = r.split(",").map(function (a) {
          return parseFloat(a, 10);
        })),
        (n[4] = o.x),
        (n[5] = o.y),
        nt(t, "matrix(".concat(n.join(","), ")"));
    else {
      var s = i.match(Ye)[1];
      (n = s.split(",").map(function (a) {
        return parseFloat(a, 10);
      })),
        (n[12] = o.x),
        (n[13] = o.y),
        nt(t, "matrix3d(".concat(n.join(","), ")"));
    }
  } else
    nt(
      t,
      "translateX("
        .concat(o.x, "px) translateY(")
        .concat(o.y, "px) translateZ(0)")
    );
}
var Le = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
  U;
function St(t) {
  var o = t.style.display;
  (t.style.display = "none"), t.offsetHeight, (t.style.display = o);
}
function W(t, o, e) {
  var i = e;
  if (lt(o) === "object") {
    for (var n in o) o.hasOwnProperty(n) && W(t, n, o[n]);
    return;
  }
  if (typeof i < "u") {
    typeof i == "number" && (i = "".concat(i, "px")), (t.style[o] = i);
    return;
  }
  return U(t, o);
}
function _e(t) {
  var o,
    e,
    i,
    n = t.ownerDocument,
    r = n.body,
    s = n && n.documentElement;
  return (
    (o = t.getBoundingClientRect()),
    (e = Math.floor(o.left)),
    (i = Math.floor(o.top)),
    (e -= s.clientLeft || r.clientLeft || 0),
    (i -= s.clientTop || r.clientTop || 0),
    { left: e, top: i }
  );
}
function Kt(t, o) {
  var e = t["page".concat(o ? "Y" : "X", "Offset")],
    i = "scroll".concat(o ? "Top" : "Left");
  if (typeof e != "number") {
    var n = t.document;
    (e = n.documentElement[i]), typeof e != "number" && (e = n.body[i]);
  }
  return e;
}
function Jt(t) {
  return Kt(t);
}
function Qt(t) {
  return Kt(t, !0);
}
function L(t) {
  var o = _e(t),
    e = t.ownerDocument,
    i = e.defaultView || e.parentWindow;
  return (o.left += Jt(i)), (o.top += Qt(i)), o;
}
function gt(t) {
  return t != null && t == t.window;
}
function Zt(t) {
  return gt(t) ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
}
function Ue(t, o, e) {
  var i = e,
    n = "",
    r = Zt(t);
  return (
    (i = i || r.defaultView.getComputedStyle(t, null)),
    i && (n = i.getPropertyValue(o) || i[o]),
    n
  );
}
var qe = new RegExp("^(".concat(Le, ")(?!px)[a-z%]+$"), "i"),
  Ge = /^(top|right|bottom|left)$/,
  rt = "currentStyle",
  st = "runtimeStyle",
  H = "left",
  Ke = "px";
function Je(t, o) {
  var e = t[rt] && t[rt][o];
  if (qe.test(e) && !Ge.test(o)) {
    var i = t.style,
      n = i[H],
      r = t[st][H];
    (t[st][H] = t[rt][H]),
      (i[H] = o === "fontSize" ? "1em" : e || 0),
      (e = i.pixelLeft + Ke),
      (i[H] = n),
      (t[st][H] = r);
  }
  return e === "" ? "auto" : e;
}
typeof window < "u" && (U = window.getComputedStyle ? Ue : Je);
function J(t, o) {
  return t === "left"
    ? o.useCssRight
      ? "right"
      : t
    : o.useCssBottom
    ? "bottom"
    : t;
}
function Dt(t) {
  if (t === "left") return "right";
  if (t === "right") return "left";
  if (t === "top") return "bottom";
  if (t === "bottom") return "top";
}
function Et(t, o, e) {
  W(t, "position") === "static" && (t.style.position = "relative");
  var i = -999,
    n = -999,
    r = J("left", e),
    s = J("top", e),
    a = Dt(r),
    l = Dt(s);
  r !== "left" && (i = 999), s !== "top" && (n = 999);
  var u = "",
    v = L(t);
  ("left" in o || "top" in o) && ((u = Xe(t) || ""), Mt(t, "none")),
    "left" in o && ((t.style[a] = ""), (t.style[r] = "".concat(i, "px"))),
    "top" in o && ((t.style[l] = ""), (t.style[s] = "".concat(n, "px"))),
    St(t);
  var d = L(t),
    p = {};
  for (var c in o)
    if (o.hasOwnProperty(c)) {
      var h = J(c, e),
        g = c === "left" ? i : n,
        C = v[c] - d[c];
      h === c ? (p[h] = g + C) : (p[h] = g - C);
    }
  W(t, p), St(t), ("left" in o || "top" in o) && Mt(t, u);
  var b = {};
  for (var T in o)
    if (o.hasOwnProperty(T)) {
      var w = J(T, e),
        D = o[T] - v[T];
      T === w ? (b[w] = p[w] + D) : (b[w] = p[w] - D);
    }
  W(t, b);
}
function Qe(t, o) {
  var e = L(t),
    i = je(t),
    n = { x: i.x, y: i.y };
  "left" in o && (n.x = i.x + o.left - e.left),
    "top" in o && (n.y = i.y + o.top - e.top),
    ze(t, n);
}
function Ze(t, o, e) {
  if (e.ignoreShake) {
    var i = L(t),
      n = i.left.toFixed(0),
      r = i.top.toFixed(0),
      s = o.left.toFixed(0),
      a = o.top.toFixed(0);
    if (n === s && r === a) return;
  }
  e.useCssRight || e.useCssBottom
    ? Et(t, o, e)
    : e.useCssTransform && ot() in document.body.style
    ? Qe(t, o)
    : Et(t, o, e);
}
function mt(t, o) {
  for (var e = 0; e < t.length; e++) o(t[e]);
}
function te(t) {
  return U(t, "boxSizing") === "border-box";
}
var to = ["margin", "border", "padding"],
  ct = -1,
  eo = 2,
  ft = 1,
  oo = 0;
function io(t, o, e) {
  var i = {},
    n = t.style,
    r;
  for (r in o) o.hasOwnProperty(r) && ((i[r] = n[r]), (n[r] = o[r]));
  e.call(t);
  for (r in o) o.hasOwnProperty(r) && (n[r] = i[r]);
}
function Y(t, o, e) {
  var i = 0,
    n,
    r,
    s;
  for (r = 0; r < o.length; r++)
    if (((n = o[r]), n))
      for (s = 0; s < e.length; s++) {
        var a = void 0;
        n === "border"
          ? (a = "".concat(n).concat(e[s], "Width"))
          : (a = n + e[s]),
          (i += parseFloat(U(t, a)) || 0);
      }
  return i;
}
var E = {
  getParent: function (o) {
    var e = o;
    do e.nodeType === 11 && e.host ? (e = e.host) : (e = e.parentNode);
    while (e && e.nodeType !== 1 && e.nodeType !== 9);
    return e;
  },
};
mt(["Width", "Height"], function (t) {
  (E["doc".concat(t)] = function (o) {
    var e = o.document;
    return Math.max(
      e.documentElement["scroll".concat(t)],
      e.body["scroll".concat(t)],
      E["viewport".concat(t)](e)
    );
  }),
    (E["viewport".concat(t)] = function (o) {
      var e = "client".concat(t),
        i = o.document,
        n = i.body,
        r = i.documentElement,
        s = r[e];
      return (i.compatMode === "CSS1Compat" && s) || (n && n[e]) || s;
    });
});
function Nt(t, o, e) {
  var i = e;
  if (gt(t)) return o === "width" ? E.viewportWidth(t) : E.viewportHeight(t);
  if (t.nodeType === 9) return o === "width" ? E.docWidth(t) : E.docHeight(t);
  var n = o === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
    r = Math.floor(
      o === "width"
        ? t.getBoundingClientRect().width
        : t.getBoundingClientRect().height
    ),
    s = te(t),
    a = 0;
  (r == null || r <= 0) &&
    ((r = void 0),
    (a = U(t, o)),
    (a == null || Number(a) < 0) && (a = t.style[o] || 0),
    (a = Math.floor(parseFloat(a)) || 0)),
    i === void 0 && (i = s ? ft : ct);
  var l = r !== void 0 || s,
    u = r || a;
  return i === ct
    ? l
      ? u - Y(t, ["border", "padding"], n)
      : a
    : l
    ? i === ft
      ? u
      : u + (i === eo ? -Y(t, ["border"], n) : Y(t, ["margin"], n))
    : a + Y(t, to.slice(i), n);
}
var no = { position: "absolute", visibility: "hidden", display: "block" };
function At() {
  for (var t = arguments.length, o = new Array(t), e = 0; e < t; e++)
    o[e] = arguments[e];
  var i,
    n = o[0];
  return (
    n.offsetWidth !== 0
      ? (i = Nt.apply(void 0, o))
      : io(n, no, function () {
          i = Nt.apply(void 0, o);
        }),
    i
  );
}
mt(["width", "height"], function (t) {
  var o = t.charAt(0).toUpperCase() + t.slice(1);
  E["outer".concat(o)] = function (i, n) {
    return i && At(i, t, n ? oo : ft);
  };
  var e = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  E[t] = function (i, n) {
    var r = n;
    if (r !== void 0) {
      if (i) {
        var s = te(i);
        return s && (r += Y(i, ["padding", "border"], e)), W(i, t, r);
      }
      return;
    }
    return i && At(i, t, ct);
  };
});
function ee(t, o) {
  for (var e in o) o.hasOwnProperty(e) && (t[e] = o[e]);
  return t;
}
var f = {
  getWindow: function (o) {
    if (o && o.document && o.setTimeout) return o;
    var e = o.ownerDocument || o;
    return e.defaultView || e.parentWindow;
  },
  getDocument: Zt,
  offset: function (o, e, i) {
    if (typeof e < "u") Ze(o, e, i || {});
    else return L(o);
  },
  isWindow: gt,
  each: mt,
  css: W,
  clone: function (o) {
    var e,
      i = {};
    for (e in o) o.hasOwnProperty(e) && (i[e] = o[e]);
    var n = o.overflow;
    if (n) for (e in o) o.hasOwnProperty(e) && (i.overflow[e] = o.overflow[e]);
    return i;
  },
  mix: ee,
  getWindowScrollLeft: function (o) {
    return Jt(o);
  },
  getWindowScrollTop: function (o) {
    return Qt(o);
  },
  merge: function () {
    for (var o = {}, e = 0; e < arguments.length; e++)
      f.mix(o, e < 0 || arguments.length <= e ? void 0 : arguments[e]);
    return o;
  },
  viewportWidth: 0,
  viewportHeight: 0,
};
ee(f, E);
var at = f.getParent;
function pt(t) {
  if (f.isWindow(t) || t.nodeType === 9) return null;
  var o = f.getDocument(t),
    e = o.body,
    i,
    n = f.css(t, "position"),
    r = n === "fixed" || n === "absolute";
  if (!r) return t.nodeName.toLowerCase() === "html" ? null : at(t);
  for (i = at(t); i && i !== e && i.nodeType !== 9; i = at(i))
    if (((n = f.css(i, "position")), n !== "static")) return i;
  return null;
}
var Vt = f.getParent;
function ro(t) {
  if (f.isWindow(t) || t.nodeType === 9) return !1;
  var o = f.getDocument(t),
    e = o.body,
    i = null;
  for (i = Vt(t); i && i !== e && i !== o; i = Vt(i)) {
    var n = f.css(i, "position");
    if (n === "fixed") return !0;
  }
  return !1;
}
function yt(t, o) {
  for (
    var e = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
      i = pt(t),
      n = f.getDocument(t),
      r = n.defaultView || n.parentWindow,
      s = n.body,
      a = n.documentElement;
    i;

  ) {
    if (
      (navigator.userAgent.indexOf("MSIE") === -1 || i.clientWidth !== 0) &&
      i !== s &&
      i !== a &&
      f.css(i, "overflow") !== "visible"
    ) {
      var l = f.offset(i);
      (l.left += i.clientLeft),
        (l.top += i.clientTop),
        (e.top = Math.max(e.top, l.top)),
        (e.right = Math.min(e.right, l.left + i.clientWidth)),
        (e.bottom = Math.min(e.bottom, l.top + i.clientHeight)),
        (e.left = Math.max(e.left, l.left));
    } else if (i === s || i === a) break;
    i = pt(i);
  }
  var u = null;
  if (!f.isWindow(t) && t.nodeType !== 9) {
    u = t.style.position;
    var v = f.css(t, "position");
    v === "absolute" && (t.style.position = "fixed");
  }
  var d = f.getWindowScrollLeft(r),
    p = f.getWindowScrollTop(r),
    c = f.viewportWidth(r),
    h = f.viewportHeight(r),
    g = a.scrollWidth,
    C = a.scrollHeight,
    b = window.getComputedStyle(s);
  if (
    (b.overflowX === "hidden" && (g = r.innerWidth),
    b.overflowY === "hidden" && (C = r.innerHeight),
    t.style && (t.style.position = u),
    o || ro(t))
  )
    (e.left = Math.max(e.left, d)),
      (e.top = Math.max(e.top, p)),
      (e.right = Math.min(e.right, d + c)),
      (e.bottom = Math.min(e.bottom, p + h));
  else {
    var T = Math.max(g, d + c);
    e.right = Math.min(e.right, T);
    var w = Math.max(C, p + h);
    e.bottom = Math.min(e.bottom, w);
  }
  return e.top >= 0 && e.left >= 0 && e.bottom > e.top && e.right > e.left
    ? e
    : null;
}
function so(t, o, e, i) {
  var n = f.clone(t),
    r = { width: o.width, height: o.height };
  return (
    i.adjustX && n.left < e.left && (n.left = e.left),
    i.resizeWidth &&
      n.left >= e.left &&
      n.left + r.width > e.right &&
      (r.width -= n.left + r.width - e.right),
    i.adjustX &&
      n.left + r.width > e.right &&
      (n.left = Math.max(e.right - r.width, e.left)),
    i.adjustY && n.top < e.top && (n.top = e.top),
    i.resizeHeight &&
      n.top >= e.top &&
      n.top + r.height > e.bottom &&
      (r.height -= n.top + r.height - e.bottom),
    i.adjustY &&
      n.top + r.height > e.bottom &&
      (n.top = Math.max(e.bottom - r.height, e.top)),
    f.mix(n, r)
  );
}
function wt(t) {
  var o, e, i;
  if (!f.isWindow(t) && t.nodeType !== 9)
    (o = f.offset(t)), (e = f.outerWidth(t)), (i = f.outerHeight(t));
  else {
    var n = f.getWindow(t);
    (o = { left: f.getWindowScrollLeft(n), top: f.getWindowScrollTop(n) }),
      (e = f.viewportWidth(n)),
      (i = f.viewportHeight(n));
  }
  return (o.width = e), (o.height = i), o;
}
function Ht(t, o) {
  var e = o.charAt(0),
    i = o.charAt(1),
    n = t.width,
    r = t.height,
    s = t.left,
    a = t.top;
  return (
    e === "c" ? (a += r / 2) : e === "b" && (a += r),
    i === "c" ? (s += n / 2) : i === "r" && (s += n),
    { left: s, top: a }
  );
}
function Q(t, o, e, i, n) {
  var r = Ht(o, e[1]),
    s = Ht(t, e[0]),
    a = [s.left - r.left, s.top - r.top];
  return {
    left: Math.round(t.left - a[0] + i[0] - n[0]),
    top: Math.round(t.top - a[1] + i[1] - n[1]),
  };
}
function $t(t, o, e) {
  return t.left < e.left || t.left + o.width > e.right;
}
function Rt(t, o, e) {
  return t.top < e.top || t.top + o.height > e.bottom;
}
function ao(t, o, e) {
  return t.left > e.right || t.left + o.width < e.left;
}
function uo(t, o, e) {
  return t.top > e.bottom || t.top + o.height < e.top;
}
function Z(t, o, e) {
  var i = [];
  return (
    f.each(t, function (n) {
      i.push(
        n.replace(o, function (r) {
          return e[r];
        })
      );
    }),
    i
  );
}
function tt(t, o) {
  return (t[o] = -t[o]), t;
}
function kt(t, o) {
  var e;
  return (
    /%$/.test(t)
      ? (e = (parseInt(t.substring(0, t.length - 1), 10) / 100) * o)
      : (e = parseInt(t, 10)),
    e || 0
  );
}
function Bt(t, o) {
  (t[0] = kt(t[0], o.width)), (t[1] = kt(t[1], o.height));
}
function oe(t, o, e, i) {
  var n = e.points,
    r = e.offset || [0, 0],
    s = e.targetOffset || [0, 0],
    a = e.overflow,
    l = e.source || t;
  (r = [].concat(r)), (s = [].concat(s)), (a = a || {});
  var u = {},
    v = 0,
    d = !!(a && a.alwaysByViewport),
    p = yt(l, d),
    c = wt(l);
  Bt(r, c), Bt(s, o);
  var h = Q(c, o, n, r, s),
    g = f.merge(c, h);
  if (p && (a.adjustX || a.adjustY) && i) {
    if (a.adjustX && $t(h, c, p)) {
      var C = Z(n, /[lr]/gi, { l: "r", r: "l" }),
        b = tt(r, 0),
        T = tt(s, 0),
        w = Q(c, o, C, b, T);
      ao(w, c, p) || ((v = 1), (n = C), (r = b), (s = T));
    }
    if (a.adjustY && Rt(h, c, p)) {
      var D = Z(n, /[tb]/gi, { t: "b", b: "t" }),
        q = tt(r, 1),
        m = tt(s, 1),
        N = Q(c, o, D, q, m);
      uo(N, c, p) || ((v = 1), (n = D), (r = q), (s = m));
    }
    v && ((h = Q(c, o, n, r, s)), f.mix(g, h));
    var M = $t(h, c, p),
      S = Rt(h, c, p);
    if (M || S) {
      var V = n;
      M && (V = Z(n, /[lr]/gi, { l: "r", r: "l" })),
        S && (V = Z(n, /[tb]/gi, { t: "b", b: "t" })),
        (n = V),
        (r = e.offset || [0, 0]),
        (s = e.targetOffset || [0, 0]);
    }
    (u.adjustX = a.adjustX && M),
      (u.adjustY = a.adjustY && S),
      (u.adjustX || u.adjustY) && (g = so(h, c, p, u));
  }
  return (
    g.width !== c.width && f.css(l, "width", f.width(l) + g.width - c.width),
    g.height !== c.height &&
      f.css(l, "height", f.height(l) + g.height - c.height),
    f.offset(
      l,
      { left: g.left, top: g.top },
      {
        useCssRight: e.useCssRight,
        useCssBottom: e.useCssBottom,
        useCssTransform: e.useCssTransform,
        ignoreShake: e.ignoreShake,
      }
    ),
    { points: n, offset: r, targetOffset: s, overflow: u }
  );
}
function lo(t, o) {
  var e = yt(t, o),
    i = wt(t);
  return (
    !e ||
    i.left + i.width <= e.left ||
    i.top + i.height <= e.top ||
    i.left >= e.right ||
    i.top >= e.bottom
  );
}
function bt(t, o, e) {
  var i = e.target || o,
    n = wt(i),
    r = !lo(i, e.overflow && e.overflow.alwaysByViewport);
  return oe(t, n, e, r);
}
bt.__getOffsetParent = pt;
bt.__getVisibleRectForElement = yt;
function co(t, o, e) {
  var i,
    n,
    r = f.getDocument(t),
    s = r.defaultView || r.parentWindow,
    a = f.getWindowScrollLeft(s),
    l = f.getWindowScrollTop(s),
    u = f.viewportWidth(s),
    v = f.viewportHeight(s);
  "pageX" in o ? (i = o.pageX) : (i = a + o.clientX),
    "pageY" in o ? (n = o.pageY) : (n = l + o.clientY);
  var d = { left: i, top: n, width: 0, height: 0 },
    p = i >= 0 && i <= a + u && n >= 0 && n <= l + v,
    c = [e.points[0], "cc"];
  return oe(t, d, Ot(Ot({}, e), {}, { points: c }), p);
}
function fo(t, o) {
  return t === o
    ? !0
    : !t || !o
    ? !1
    : "pageX" in o && "pageY" in o
    ? t.pageX === o.pageX && t.pageY === o.pageY
    : "clientX" in o && "clientY" in o
    ? t.clientX === o.clientX && t.clientY === o.clientY
    : !1;
}
function po(t, o) {
  t !== document.activeElement &&
    R(o, t) &&
    typeof t.focus == "function" &&
    t.focus();
}
function Wt(t, o) {
  let e = null,
    i = null;
  function n(s) {
    let [{ target: a }] = s;
    if (!document.documentElement.contains(a)) return;
    const { width: l, height: u } = a.getBoundingClientRect(),
      v = Math.floor(l),
      d = Math.floor(u);
    (e !== v || i !== d) &&
      Promise.resolve().then(() => {
        o({ width: v, height: d });
      }),
      (e = v),
      (i = d);
  }
  const r = new Se(n);
  return (
    t && r.observe(t),
    () => {
      r.disconnect();
    }
  );
}
const ho = (t, o) => {
    let e = !1,
      i = null;
    function n() {
      clearTimeout(i);
    }
    function r(s) {
      if (!e || s === !0) {
        if (t() === !1) return;
        (e = !0),
          n(),
          (i = setTimeout(() => {
            e = !1;
          }, o.value));
      } else
        n(),
          (i = setTimeout(() => {
            (e = !1), r();
          }, o.value));
    }
    return [
      r,
      () => {
        (e = !1), n();
      },
    ];
  },
  vo = {
    align: Object,
    target: [Object, Function],
    onAlign: Function,
    monitorBufferTime: Number,
    monitorWindowResize: Boolean,
    disabled: Boolean,
  };
function Ft(t) {
  return typeof t != "function" ? null : t();
}
function Xt(t) {
  return typeof t != "object" || !t ? null : t;
}
const go = _({
    compatConfig: { MODE: 3 },
    name: "Align",
    props: vo,
    emits: ["align"],
    setup(t, o) {
      let { expose: e, slots: i } = o;
      const n = k({}),
        r = k(),
        [s, a] = ho(
          () => {
            const { disabled: p, target: c, align: h, onAlign: g } = t;
            if (!p && c && r.value) {
              const C = r.value;
              let b;
              const T = Ft(c),
                w = Xt(c);
              (n.value.element = T), (n.value.point = w), (n.value.align = h);
              const { activeElement: D } = document;
              return (
                T && ge(T) ? (b = bt(C, T, h)) : w && (b = co(C, w, h)),
                po(D, C),
                g && b && g(C, b),
                !0
              );
            }
            return !1;
          },
          z(() => t.monitorBufferTime)
        ),
        l = k({ cancel: () => {} }),
        u = k({ cancel: () => {} }),
        v = () => {
          const p = t.target,
            c = Ft(p),
            h = Xt(p);
          r.value !== u.value.element &&
            (u.value.cancel(),
            (u.value.element = r.value),
            (u.value.cancel = Wt(r.value, s))),
            (n.value.element !== c ||
              !fo(n.value.point, h) ||
              !De(n.value.align, t.align)) &&
              (s(),
              l.value.element !== c &&
                (l.value.cancel(),
                (l.value.element = c),
                (l.value.cancel = Wt(c, s))));
        };
      Lt(() => {
        ut(() => {
          v();
        });
      }),
        be(() => {
          ut(() => {
            v();
          });
        }),
        $(
          () => t.disabled,
          (p) => {
            p ? a() : s();
          },
          { immediate: !0, flush: "post" }
        );
      const d = k(null);
      return (
        $(
          () => t.monitorWindowResize,
          (p) => {
            p
              ? d.value || (d.value = j(window, "resize", s))
              : d.value && (d.value.remove(), (d.value = null));
          },
          { flush: "post" }
        ),
        Te(() => {
          l.value.cancel(), u.value.cancel(), d.value && d.value.remove(), a();
        }),
        e({ forceAlign: () => s(!0) }),
        () => {
          const p = i == null ? void 0 : i.default();
          return p ? _t(p[0], { ref: r }, !0, !0) : null;
        }
      );
    },
  }),
  mo = _({
    compatConfig: { MODE: 3 },
    name: "PopupInner",
    inheritAttrs: !1,
    props: vt,
    emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
    setup(t, o) {
      let { expose: e, attrs: i, slots: n } = o;
      const r = O(),
        s = O(),
        a = O(),
        [l, u] = Be(Pe(t, "stretch")),
        v = () => {
          t.stretch && u(t.getRootDomNode());
        },
        d = O(!1);
      let p;
      $(
        () => t.visible,
        (m) => {
          clearTimeout(p),
            m
              ? (p = setTimeout(() => {
                  d.value = t.visible;
                }))
              : (d.value = !1);
        },
        { immediate: !0 }
      );
      const [c, h] = ke(d, v),
        g = O(),
        C = () => (t.point ? t.point : t.getRootDomNode),
        b = () => {
          var m;
          (m = r.value) === null || m === void 0 || m.forceAlign();
        },
        T = (m, N) => {
          var M;
          const S = t.getClassNameFromAlign(N),
            V = a.value;
          a.value !== S && (a.value = S),
            c.value === "align" &&
              (V !== S
                ? Promise.resolve().then(() => {
                    b();
                  })
                : h(() => {
                    var F;
                    (F = g.value) === null || F === void 0 || F.call(g);
                  }),
              (M = t.onAlign) === null || M === void 0 || M.call(t, m, N));
        },
        w = z(() => {
          const m = typeof t.animation == "object" ? t.animation : It(t);
          return (
            ["onAfterEnter", "onAfterLeave"].forEach((N) => {
              const M = m[N];
              m[N] = (S) => {
                h(), (c.value = "stable"), M == null || M(S);
              };
            }),
            m
          );
        }),
        D = () =>
          new Promise((m) => {
            g.value = m;
          });
      $(
        [w, c],
        () => {
          !w.value && c.value === "motion" && h();
        },
        { immediate: !0 }
      ),
        e({ forceAlign: b, getElement: () => s.value.$el || s.value });
      const q = z(() => {
        var m;
        return !(
          !((m = t.align) === null || m === void 0) &&
          m.points &&
          (c.value === "align" || c.value === "stable")
        );
      });
      return () => {
        var m;
        const {
            zIndex: N,
            align: M,
            prefixCls: S,
            destroyPopupOnHide: V,
            onMouseenter: F,
            onMouseleave: ie,
            onTouchstart: ne = () => {},
            onMousedown: re,
          } = t,
          it = c.value,
          se = [
            y(y({}, l.value), {
              zIndex: N,
              opacity:
                it === "motion" || it === "stable" || !d.value ? null : 0,
              pointerEvents: !d.value && it !== "stable" ? "none" : null,
            }),
            i.style,
          ];
        let G = Yt(
          (m = n.default) === null || m === void 0
            ? void 0
            : m.call(n, { visible: t.visible })
        );
        G.length > 1 && (G = x("div", { class: `${S}-content` }, [G]));
        const ae = dt(S, i.class, a.value),
          ue = d.value || !t.visible ? le(w.value.name, w.value) : {};
        return x(ht, A(A({ ref: s }, ue), {}, { onBeforeEnter: D }), {
          default: () =>
            !V || t.visible
              ? zt(
                  x(
                    go,
                    {
                      target: C(),
                      key: "popup",
                      ref: r,
                      monitorWindowResize: !0,
                      disabled: q.value,
                      align: M,
                      onAlign: T,
                    },
                    {
                      default: () =>
                        x(
                          "div",
                          {
                            class: ae,
                            onMouseenter: F,
                            onMouseleave: ie,
                            onMousedown: Pt(re, ["capture"]),
                            [I ? "onTouchstartPassive" : "onTouchstart"]: Pt(
                              ne,
                              ["capture"]
                            ),
                            style: se,
                          },
                          [G]
                        ),
                    }
                  ),
                  [[Ce, d.value]]
                )
              : null,
        });
      };
    },
  }),
  yo = _({
    compatConfig: { MODE: 3 },
    name: "Popup",
    inheritAttrs: !1,
    props: He,
    setup(t, o) {
      let { attrs: e, slots: i, expose: n } = o;
      const r = O(!1),
        s = O(!1),
        a = O(),
        l = O();
      return (
        $(
          [() => t.visible, () => t.mobile],
          () => {
            (r.value = t.visible), t.visible && t.mobile && (s.value = !0);
          },
          { immediate: !0, flush: "post" }
        ),
        n({
          forceAlign: () => {
            var u;
            (u = a.value) === null || u === void 0 || u.forceAlign();
          },
          getElement: () => {
            var u;
            return (u = a.value) === null || u === void 0
              ? void 0
              : u.getElement();
          },
        }),
        () => {
          const u = y(y(y({}, t), e), { visible: r.value }),
            v = s.value
              ? x($e, A(A({}, u), {}, { mobile: t.mobile, ref: a }), {
                  default: i.default,
                })
              : x(mo, A(A({}, u), {}, { ref: a }), { default: i.default });
          return x("div", { ref: l }, [x(qt, u, null), v]);
        }
      );
    },
  });
function wo(t, o, e) {
  return e ? t[0] === o[0] : t[0] === o[0] && t[1] === o[1];
}
function jt(t, o, e) {
  const i = t[o] || {};
  return y(y({}, i), e);
}
function bo(t, o, e, i) {
  const { points: n } = e,
    r = Object.keys(t);
  for (let s = 0; s < r.length; s += 1) {
    const a = r[s];
    if (wo(t[a].points, n, i)) return `${o}-placement-${a}`;
  }
  return "";
}
const To = {
    methods: {
      setState() {
        let t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          o = arguments.length > 1 ? arguments[1] : void 0,
          e = typeof t == "function" ? t(this.$data, this.$props) : t;
        if (this.getDerivedStateFromProps) {
          const i = this.getDerivedStateFromProps(
            ce(this),
            y(y({}, this.$data), e)
          );
          if (i === null) return;
          e = y(y({}, e), i || {});
        }
        y(this.$data, e),
          this._.isMounted && this.$forceUpdate(),
          ut(() => {
            o && o();
          });
      },
      __emit() {
        const t = [].slice.call(arguments, 0);
        let o = t[0];
        o = `on${o[0].toUpperCase()}${o.substring(1)}`;
        const e = this.$props[o] || this.$attrs[o];
        if (t.length && e)
          if (Array.isArray(e))
            for (let i = 0, n = e.length; i < n; i++) e[i](...t.slice(1));
          else e(...t.slice(1));
      },
    },
  },
  Po = [
    "onClick",
    "onMousedown",
    "onTouchstart",
    "onMouseenter",
    "onMouseleave",
    "onFocus",
    "onBlur",
    "onContextmenu",
  ],
  Eo = _({
    compatConfig: { MODE: 3 },
    name: "Trigger",
    mixins: [To],
    inheritAttrs: !1,
    props: Ae(),
    setup(t) {
      const o = z(() => {
          const { popupPlacement: n, popupAlign: r, builtinPlacements: s } = t;
          return n && s ? jt(s, n, r) : r;
        }),
        e = O(null),
        i = (n) => {
          e.value = n;
        };
      return {
        vcTriggerContext: xe("vcTriggerContext", {}),
        popupRef: e,
        setPopupRef: i,
        triggerRef: O(null),
        align: o,
        focusTime: null,
        clickOutsideHandler: null,
        contextmenuOutsideHandler1: null,
        contextmenuOutsideHandler2: null,
        touchOutsideHandler: null,
        attachId: null,
        delayTimer: null,
        hasPopupMouseDown: !1,
        preClickTime: null,
        preTouchTime: null,
        mouseDownTimeout: null,
        childOriginEvents: {},
      };
    },
    data() {
      const t = this.$props;
      let o;
      return (
        this.popupVisible !== void 0
          ? (o = !!t.popupVisible)
          : (o = !!t.defaultPopupVisible),
        Po.forEach((e) => {
          this[`fire${e}`] = (i) => {
            this.fireEvents(e, i);
          };
        }),
        { prevPopupVisible: o, sPopupVisible: o, point: null }
      );
    },
    watch: {
      popupVisible(t) {
        t !== void 0 &&
          ((this.prevPopupVisible = this.sPopupVisible),
          (this.sPopupVisible = t));
      },
    },
    created() {
      Oe("vcTriggerContext", {
        onPopupMouseDown: this.onPopupMouseDown,
        onPopupMouseenter: this.onPopupMouseenter,
        onPopupMouseleave: this.onPopupMouseleave,
      }),
        fe(this);
    },
    deactivated() {
      this.setPopupVisible(!1);
    },
    mounted() {
      this.$nextTick(() => {
        this.updatedCal();
      });
    },
    updated() {
      this.$nextTick(() => {
        this.updatedCal();
      });
    },
    beforeUnmount() {
      this.clearDelayTimer(),
        this.clearOutsideHandler(),
        clearTimeout(this.mouseDownTimeout),
        B.cancel(this.attachId);
    },
    methods: {
      updatedCal() {
        const t = this.$props;
        if (this.$data.sPopupVisible) {
          let e;
          !this.clickOutsideHandler &&
            (this.isClickToHide() || this.isContextmenuToShow()) &&
            ((e = t.getDocument(this.getRootDomNode())),
            (this.clickOutsideHandler = j(
              e,
              "mousedown",
              this.onDocumentClick
            ))),
            this.touchOutsideHandler ||
              ((e = e || t.getDocument(this.getRootDomNode())),
              (this.touchOutsideHandler = j(
                e,
                "touchstart",
                this.onDocumentClick,
                I ? { passive: !1 } : !1
              ))),
            !this.contextmenuOutsideHandler1 &&
              this.isContextmenuToShow() &&
              ((e = e || t.getDocument(this.getRootDomNode())),
              (this.contextmenuOutsideHandler1 = j(
                e,
                "scroll",
                this.onContextmenuClose
              ))),
            !this.contextmenuOutsideHandler2 &&
              this.isContextmenuToShow() &&
              (this.contextmenuOutsideHandler2 = j(
                window,
                "blur",
                this.onContextmenuClose
              ));
        } else this.clearOutsideHandler();
      },
      onMouseenter(t) {
        const { mouseEnterDelay: o } = this.$props;
        this.fireEvents("onMouseenter", t),
          this.delaySetPopupVisible(!0, o, o ? null : t);
      },
      onMouseMove(t) {
        this.fireEvents("onMousemove", t), this.setPoint(t);
      },
      onMouseleave(t) {
        this.fireEvents("onMouseleave", t),
          this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
      },
      onPopupMouseenter() {
        const { vcTriggerContext: t = {} } = this;
        t.onPopupMouseenter && t.onPopupMouseenter(), this.clearDelayTimer();
      },
      onPopupMouseleave(t) {
        var o;
        if (
          t &&
          t.relatedTarget &&
          !t.relatedTarget.setTimeout &&
          R(
            (o = this.popupRef) === null || o === void 0
              ? void 0
              : o.getElement(),
            t.relatedTarget
          )
        )
          return;
        this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
        const { vcTriggerContext: e = {} } = this;
        e.onPopupMouseleave && e.onPopupMouseleave(t);
      },
      onFocus(t) {
        this.fireEvents("onFocus", t),
          this.clearDelayTimer(),
          this.isFocusToShow() &&
            ((this.focusTime = Date.now()),
            this.delaySetPopupVisible(!0, this.$props.focusDelay));
      },
      onMousedown(t) {
        this.fireEvents("onMousedown", t), (this.preClickTime = Date.now());
      },
      onTouchstart(t) {
        this.fireEvents("onTouchstart", t), (this.preTouchTime = Date.now());
      },
      onBlur(t) {
        R(t.target, t.relatedTarget || document.activeElement) ||
          (this.fireEvents("onBlur", t),
          this.clearDelayTimer(),
          this.isBlurToHide() &&
            this.delaySetPopupVisible(!1, this.$props.blurDelay));
      },
      onContextmenu(t) {
        t.preventDefault(),
          this.fireEvents("onContextmenu", t),
          this.setPopupVisible(!0, t);
      },
      onContextmenuClose() {
        this.isContextmenuToShow() && this.close();
      },
      onClick(t) {
        if ((this.fireEvents("onClick", t), this.focusTime)) {
          let e;
          if (
            (this.preClickTime && this.preTouchTime
              ? (e = Math.min(this.preClickTime, this.preTouchTime))
              : this.preClickTime
              ? (e = this.preClickTime)
              : this.preTouchTime && (e = this.preTouchTime),
            Math.abs(e - this.focusTime) < 20)
          )
            return;
          this.focusTime = 0;
        }
        (this.preClickTime = 0),
          (this.preTouchTime = 0),
          this.isClickToShow() &&
            (this.isClickToHide() || this.isBlurToHide()) &&
            t &&
            t.preventDefault &&
            t.preventDefault(),
          t && t.domEvent && t.domEvent.preventDefault();
        const o = !this.$data.sPopupVisible;
        ((this.isClickToHide() && !o) || (o && this.isClickToShow())) &&
          this.setPopupVisible(!this.$data.sPopupVisible, t);
      },
      onPopupMouseDown() {
        const { vcTriggerContext: t = {} } = this;
        (this.hasPopupMouseDown = !0),
          clearTimeout(this.mouseDownTimeout),
          (this.mouseDownTimeout = setTimeout(() => {
            this.hasPopupMouseDown = !1;
          }, 0)),
          t.onPopupMouseDown && t.onPopupMouseDown(...arguments);
      },
      onDocumentClick(t) {
        if (this.$props.mask && !this.$props.maskClosable) return;
        const o = t.target,
          e = this.getRootDomNode(),
          i = this.getPopupDomNode();
        (!R(e, o) || this.isContextMenuOnly()) &&
          !R(i, o) &&
          !this.hasPopupMouseDown &&
          this.delaySetPopupVisible(!1, 0.1);
      },
      getPopupDomNode() {
        var t;
        return (
          ((t = this.popupRef) === null || t === void 0
            ? void 0
            : t.getElement()) || null
        );
      },
      getRootDomNode() {
        var t, o, e, i;
        const { getTriggerDOMNode: n } = this.$props;
        if (n) {
          const r =
            ((o =
              (t = this.triggerRef) === null || t === void 0
                ? void 0
                : t.$el) === null || o === void 0
              ? void 0
              : o.nodeName) === "#comment"
              ? null
              : K(this.triggerRef);
          return K(n(r));
        }
        try {
          const r =
            ((i =
              (e = this.triggerRef) === null || e === void 0
                ? void 0
                : e.$el) === null || i === void 0
              ? void 0
              : i.nodeName) === "#comment"
              ? null
              : K(this.triggerRef);
          if (r) return r;
        } catch {}
        return K(this);
      },
      handleGetPopupClassFromAlign(t) {
        const o = [],
          e = this.$props,
          {
            popupPlacement: i,
            builtinPlacements: n,
            prefixCls: r,
            alignPoint: s,
            getPopupClassNameFromAlign: a,
          } = e;
        return i && n && o.push(bo(n, r, t, s)), a && o.push(a(t)), o.join(" ");
      },
      getPopupAlign() {
        const t = this.$props,
          { popupPlacement: o, popupAlign: e, builtinPlacements: i } = t;
        return o && i ? jt(i, o, e) : e;
      },
      getComponent() {
        const t = {};
        this.isMouseEnterToShow() && (t.onMouseenter = this.onPopupMouseenter),
          this.isMouseLeaveToHide() &&
            (t.onMouseleave = this.onPopupMouseleave),
          (t.onMousedown = this.onPopupMouseDown),
          (t[I ? "onTouchstartPassive" : "onTouchstart"] =
            this.onPopupMouseDown);
        const {
            handleGetPopupClassFromAlign: o,
            getRootDomNode: e,
            $attrs: i,
          } = this,
          {
            prefixCls: n,
            destroyPopupOnHide: r,
            popupClassName: s,
            popupAnimation: a,
            popupTransitionName: l,
            popupStyle: u,
            mask: v,
            maskAnimation: d,
            maskTransitionName: p,
            zIndex: c,
            stretch: h,
            alignPoint: g,
            mobile: C,
            forceRender: b,
          } = this.$props,
          { sPopupVisible: T, point: w } = this.$data,
          D = y(
            y(
              {
                prefixCls: n,
                destroyPopupOnHide: r,
                visible: T,
                point: g ? w : null,
                align: this.align,
                animation: a,
                getClassNameFromAlign: o,
                stretch: h,
                getRootDomNode: e,
                mask: v,
                zIndex: c,
                transitionName: l,
                maskAnimation: d,
                maskTransitionName: p,
                class: s,
                style: u,
                onAlign: i.onPopupAlign || Ut,
              },
              t
            ),
            { ref: this.setPopupRef, mobile: C, forceRender: b }
          );
        return x(yo, D, {
          default: this.$slots.popup || (() => pe(this, "popup")),
        });
      },
      attachParent(t) {
        B.cancel(this.attachId);
        const { getPopupContainer: o, getDocument: e } = this.$props,
          i = this.getRootDomNode();
        let n;
        o
          ? (i || o.length === 0) && (n = o(i))
          : (n = e(this.getRootDomNode()).body),
          n
            ? n.appendChild(t)
            : (this.attachId = B(() => {
                this.attachParent(t);
              }));
      },
      getContainer() {
        const { $props: t } = this,
          { getDocument: o } = t,
          e = o(this.getRootDomNode()).createElement("div");
        return (
          (e.style.position = "absolute"),
          (e.style.top = "0"),
          (e.style.left = "0"),
          (e.style.width = "100%"),
          this.attachParent(e),
          e
        );
      },
      setPopupVisible(t, o) {
        const {
          alignPoint: e,
          sPopupVisible: i,
          onPopupVisibleChange: n,
        } = this;
        this.clearDelayTimer(),
          i !== t &&
            (de(this, "popupVisible") ||
              this.setState({ sPopupVisible: t, prevPopupVisible: i }),
            n && n(t)),
          e && o && t && this.setPoint(o);
      },
      setPoint(t) {
        const { alignPoint: o } = this.$props;
        !o ||
          !t ||
          this.setState({ point: { pageX: t.pageX, pageY: t.pageY } });
      },
      handlePortalUpdate() {
        this.prevPopupVisible !== this.sPopupVisible &&
          this.afterPopupVisibleChange(this.sPopupVisible);
      },
      delaySetPopupVisible(t, o, e) {
        const i = o * 1e3;
        if ((this.clearDelayTimer(), i)) {
          const n = e ? { pageX: e.pageX, pageY: e.pageY } : null;
          this.delayTimer = setTimeout(() => {
            this.setPopupVisible(t, n), this.clearDelayTimer();
          }, i);
        } else this.setPopupVisible(t, e);
      },
      clearDelayTimer() {
        this.delayTimer &&
          (clearTimeout(this.delayTimer), (this.delayTimer = null));
      },
      clearOutsideHandler() {
        this.clickOutsideHandler &&
          (this.clickOutsideHandler.remove(),
          (this.clickOutsideHandler = null)),
          this.contextmenuOutsideHandler1 &&
            (this.contextmenuOutsideHandler1.remove(),
            (this.contextmenuOutsideHandler1 = null)),
          this.contextmenuOutsideHandler2 &&
            (this.contextmenuOutsideHandler2.remove(),
            (this.contextmenuOutsideHandler2 = null)),
          this.touchOutsideHandler &&
            (this.touchOutsideHandler.remove(),
            (this.touchOutsideHandler = null));
      },
      createTwoChains(t) {
        let o = () => {};
        const e = Tt(this);
        return this.childOriginEvents[t] && e[t]
          ? this[`fire${t}`]
          : ((o = this.childOriginEvents[t] || e[t] || o), o);
      },
      isClickToShow() {
        const { action: t, showAction: o } = this.$props;
        return t.indexOf("click") !== -1 || o.indexOf("click") !== -1;
      },
      isContextMenuOnly() {
        const { action: t } = this.$props;
        return (
          t === "contextmenu" || (t.length === 1 && t[0] === "contextmenu")
        );
      },
      isContextmenuToShow() {
        const { action: t, showAction: o } = this.$props;
        return (
          t.indexOf("contextmenu") !== -1 || o.indexOf("contextmenu") !== -1
        );
      },
      isClickToHide() {
        const { action: t, hideAction: o } = this.$props;
        return t.indexOf("click") !== -1 || o.indexOf("click") !== -1;
      },
      isMouseEnterToShow() {
        const { action: t, showAction: o } = this.$props;
        return t.indexOf("hover") !== -1 || o.indexOf("mouseenter") !== -1;
      },
      isMouseLeaveToHide() {
        const { action: t, hideAction: o } = this.$props;
        return t.indexOf("hover") !== -1 || o.indexOf("mouseleave") !== -1;
      },
      isFocusToShow() {
        const { action: t, showAction: o } = this.$props;
        return t.indexOf("focus") !== -1 || o.indexOf("focus") !== -1;
      },
      isBlurToHide() {
        const { action: t, hideAction: o } = this.$props;
        return t.indexOf("focus") !== -1 || o.indexOf("blur") !== -1;
      },
      forcePopupAlign() {
        var t;
        this.$data.sPopupVisible &&
          ((t = this.popupRef) === null || t === void 0 || t.forceAlign());
      },
      fireEvents(t, o) {
        this.childOriginEvents[t] && this.childOriginEvents[t](o);
        const e = this.$props[t] || this.$attrs[t];
        e && e(o);
      },
      close() {
        this.setPopupVisible(!1);
      },
    },
    render() {
      const { $attrs: t } = this,
        o = he(ve(this)),
        { alignPoint: e, getPopupContainer: i } = this.$props,
        n = o[0];
      this.childOriginEvents = Tt(n);
      const r = { key: "trigger" };
      this.isContextmenuToShow()
        ? (r.onContextmenu = this.onContextmenu)
        : (r.onContextmenu = this.createTwoChains("onContextmenu")),
        this.isClickToHide() || this.isClickToShow()
          ? ((r.onClick = this.onClick),
            (r.onMousedown = this.onMousedown),
            (r[I ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart))
          : ((r.onClick = this.createTwoChains("onClick")),
            (r.onMousedown = this.createTwoChains("onMousedown")),
            (r[I ? "onTouchstartPassive" : "onTouchstart"] =
              this.createTwoChains("onTouchstart"))),
        this.isMouseEnterToShow()
          ? ((r.onMouseenter = this.onMouseenter),
            e && (r.onMousemove = this.onMouseMove))
          : (r.onMouseenter = this.createTwoChains("onMouseenter")),
        this.isMouseLeaveToHide()
          ? (r.onMouseleave = this.onMouseleave)
          : (r.onMouseleave = this.createTwoChains("onMouseleave")),
        this.isFocusToShow() || this.isBlurToHide()
          ? ((r.onFocus = this.onFocus), (r.onBlur = this.onBlur))
          : ((r.onFocus = this.createTwoChains("onFocus")),
            (r.onBlur = (u) => {
              u &&
                (!u.relatedTarget || !R(u.target, u.relatedTarget)) &&
                this.createTwoChains("onBlur")(u);
            }));
      const s = dt(n && n.props && n.props.class, t.class);
      s && (r.class = s);
      const a = _t(n, y(y({}, r), { ref: "triggerRef" }), !0, !0),
        l = x(
          me,
          {
            key: "portal",
            getContainer: i && (() => i(this.getRootDomNode())),
            didUpdate: this.handlePortalUpdate,
            visible: this.$data.sPopupVisible,
          },
          { default: this.getComponent }
        );
      return x(Me, null, [a, l]);
    },
  });
export { To as B, Eo as T };
