import { ax as E, ay as M, bi as k } from "./entry.8aa394d7.js";
import { n as $ } from "./_baseIteratee.825e9cf8.js";
var B = /\s/;
function F(e) {
  for (var n = e.length; n-- && B.test(e.charAt(n)); );
  return n;
}
var G = /^\s+/;
function R(e) {
  return e && e.slice(0, F(e) + 1).replace(G, "");
}
var A = 0 / 0,
  U = /^[-+]0x[0-9a-f]+$/i,
  H = /^0b[01]+$/i,
  _ = /^0o[0-7]+$/i,
  j = parseInt;
function C(e) {
  if (typeof e == "number") return e;
  if ($(e)) return A;
  if (E(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = E(n) ? n + "" : n;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = R(e);
  var r = H.test(e);
  return r || _.test(e) ? j(e.slice(2), r ? 2 : 8) : U.test(e) ? A : +e;
}
var P = function () {
  return M.Date.now();
};
const v = P;
var X = "Expected a function",
  q = Math.max,
  z = Math.min;
function Y(e, n, r) {
  var o,
    d,
    l,
    c,
    i,
    u,
    s = 0,
    S = !1,
    f = !1,
    y = !0;
  if (typeof e != "function") throw new TypeError(X);
  (n = C(n) || 0),
    E(r) &&
      ((S = !!r.leading),
      (f = "maxWait" in r),
      (l = f ? q(C(r.maxWait) || 0, n) : l),
      (y = "trailing" in r ? !!r.trailing : y));
  function g(t) {
    var a = o,
      m = d;
    return (o = d = void 0), (s = t), (c = e.apply(m, a)), c;
  }
  function W(t) {
    return (s = t), (i = setTimeout(p, n)), S ? g(t) : c;
  }
  function L(t) {
    var a = t - u,
      m = t - s,
      b = n - a;
    return f ? z(b, l - m) : b;
  }
  function T(t) {
    var a = t - u,
      m = t - s;
    return u === void 0 || a >= n || a < 0 || (f && m >= l);
  }
  function p() {
    var t = v();
    if (T(t)) return I(t);
    i = setTimeout(p, L(t));
  }
  function I(t) {
    return (i = void 0), y && o ? g(t) : ((o = d = void 0), c);
  }
  function O() {
    i !== void 0 && clearTimeout(i), (s = 0), (o = u = d = i = void 0);
  }
  function D() {
    return i === void 0 ? c : I(v());
  }
  function h() {
    var t = v(),
      a = T(t);
    if (((o = arguments), (d = this), (u = t), a)) {
      if (i === void 0) return W(u);
      if (f) return clearTimeout(i), (i = setTimeout(p, n)), g(u);
    }
    return i === void 0 && (i = setTimeout(p, n)), c;
  }
  return (h.cancel = O), (h.flush = D), h;
}
const J = () => k() && window.document.documentElement,
  w = (e) => {
    if (k() && window.document.documentElement) {
      const n = Array.isArray(e) ? e : [e],
        { documentElement: r } = window.document;
      return n.some((o) => o in r.style);
    }
    return !1;
  },
  K = (e, n) => {
    if (!w(e)) return !1;
    const r = document.createElement("div"),
      o = r.style[e];
    return (r.style[e] = n), r.style[e] !== o;
  };
function Z(e, n) {
  return !Array.isArray(e) && n !== void 0 ? K(e, n) : w(e);
}
let x;
const N = () => {
  if (!J()) return !1;
  if (x !== void 0) return x;
  const e = document.createElement("div");
  return (
    (e.style.display = "flex"),
    (e.style.flexDirection = "column"),
    (e.style.rowGap = "1px"),
    e.appendChild(document.createElement("div")),
    e.appendChild(document.createElement("div")),
    document.body.appendChild(e),
    (x = e.scrollHeight === 1),
    document.body.removeChild(e),
    x
  );
};
export { Y as a, J as c, N as d, Z as i, C as t };
