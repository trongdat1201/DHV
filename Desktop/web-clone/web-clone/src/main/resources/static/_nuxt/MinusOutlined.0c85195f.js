import { bc as c } from "./entry.8aa394d7.js";
import { z as o } from "./swiper-vue.d5cda4d1.js";
var l = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  },
  name: "minus",
  theme: "outlined",
};
const s = l;
function a(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(e);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(e).filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        f(n, i, e[i]);
      });
  }
  return n;
}
function f(n, t, e) {
  return (
    t in n
      ? Object.defineProperty(n, t, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[t] = e),
    n
  );
}
var u = function (t, e) {
  var r = a({}, t, e.attrs);
  return o(c, a({}, r, { icon: s }), null);
};
u.displayName = "MinusOutlined";
u.inheritAttrs = !1;
const d = u;
export { d as _ };
