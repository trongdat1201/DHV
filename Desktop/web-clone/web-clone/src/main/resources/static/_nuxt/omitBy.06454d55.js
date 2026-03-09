import {
  l as g,
  t as m,
  a as v,
  j as x,
  f as _,
  d,
  e as h,
} from "./_baseIteratee.825e9cf8.js";
import { i as y } from "./_baseIsEqual.42871e3f.js";
import { ax as c } from "./entry.8aa394d7.js";
var E = "Expected a function";
function I(r) {
  if (typeof r != "function") throw new TypeError(E);
  return function () {
    var n = arguments;
    switch (n.length) {
      case 0:
        return !r.call(this);
      case 1:
        return !r.call(this, n[0]);
      case 2:
        return !r.call(this, n[0], n[1]);
      case 3:
        return !r.call(this, n[0], n[1], n[2]);
    }
    return !r.apply(this, n);
  };
}
function B(r, n, u, t) {
  if (!c(r)) return r;
  n = g(n, r);
  for (var i = -1, e = n.length, f = e - 1, s = r; s != null && ++i < e; ) {
    var a = m(n[i]),
      l = u;
    if (a === "__proto__" || a === "constructor" || a === "prototype") return r;
    if (i != f) {
      var o = s[a];
      (l = t ? t(o, a, s) : void 0),
        l === void 0 && (l = c(o) ? o : y(n[i + 1]) ? [] : {});
    }
    v(s, a, l), (s = s[a]);
  }
  return r;
}
function R(r, n, u) {
  for (var t = -1, i = n.length, e = {}; ++t < i; ) {
    var f = n[t],
      s = x(r, f);
    u(s, f) && B(e, g(f, r), s);
  }
  return e;
}
function T(r, n) {
  if (r == null) return {};
  var u = _(d(r), function (t) {
    return [t];
  });
  return (
    (n = h(n)),
    R(r, u, function (t, i) {
      return n(t, i[0]);
    })
  );
}
function O(r, n) {
  return T(r, I(h(n)));
}
export { R as b, O as o };
