import {
  a as P,
  r as k,
  p as D,
  w as R,
  i as _,
  k as l,
  j as S,
  z as y,
} from "./swiper-vue.d5cda4d1.js";
import {
  a as r,
  f as N,
  a3 as x,
  c as z,
  l as w,
  ak as B,
  b,
  P as I,
  aK as g,
  an as h,
} from "./entry.8aa394d7.js";
function M(t) {
  const e = typeof t == "function" ? t() : t,
    n = P(e);
  function o(a) {
    n.value = a;
  }
  return [n, o];
}
function F(t) {
  const e = Symbol("contextKey");
  return {
    useProvide: (a, s) => {
      const c = k({});
      return (
        D(e, c),
        R(() => {
          r(c, a, s || {});
        }),
        c
      );
    },
    useInject: () => _(e, t) || {},
  };
}
const L = (t) => {
    const { componentCls: e } = t;
    return {
      [e]: {
        display: "inline-flex",
        "&-block": { display: "flex", width: "100%" },
        "&-vertical": { flexDirection: "column" },
      },
    };
  },
  K = L,
  O = (t) => {
    const { componentCls: e } = t;
    return {
      [e]: {
        display: "inline-flex",
        "&-rtl": { direction: "rtl" },
        "&-vertical": { flexDirection: "column" },
        "&-align": {
          flexDirection: "column",
          "&-center": { alignItems: "center" },
          "&-start": { alignItems: "flex-start" },
          "&-end": { alignItems: "flex-end" },
          "&-baseline": { alignItems: "baseline" },
        },
        [`${e}-space-item`]: { "&:empty": { display: "none" } },
      },
    };
  },
  A = N("Space", (t) => [O(t), K(t)]),
  T = () => ({
    compactSize: String,
    compactDirection: I.oneOf(g("horizontal", "vertical")).def("horizontal"),
    isFirstItem: h(),
    isLastItem: h(),
  }),
  m = F(null),
  Q = (t, e) => {
    const n = m.useInject(),
      o = l(() => {
        if (!n || x(n)) return "";
        const { compactDirection: a, isFirstItem: s, isLastItem: c } = n,
          i = a === "vertical" ? "-vertical-" : "-";
        return z({
          [`${t.value}-compact${i}item`]: !0,
          [`${t.value}-compact${i}first-item`]: s,
          [`${t.value}-compact${i}last-item`]: c,
          [`${t.value}-compact${i}item-rtl`]: e.value === "rtl",
        });
      });
    return {
      compactSize: l(() => (n == null ? void 0 : n.compactSize)),
      compactDirection: l(() => (n == null ? void 0 : n.compactDirection)),
      compactItemClassnames: o,
    };
  },
  U = S({
    name: "NoCompactStyle",
    setup(t, e) {
      let { slots: n } = e;
      return (
        m.useProvide(null),
        () => {
          var o;
          return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
        }
      );
    },
  }),
  H = () => ({
    prefixCls: String,
    size: { type: String },
    direction: I.oneOf(g("horizontal", "vertical")).def("horizontal"),
    align: I.oneOf(g("start", "end", "center", "baseline")),
    block: { type: Boolean, default: void 0 },
  }),
  V = S({
    name: "CompactItem",
    props: T(),
    setup(t, e) {
      let { slots: n } = e;
      return (
        m.useProvide(t),
        () => {
          var o;
          return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
        }
      );
    },
  });
H();
function W(t, e, n) {
  const { focusElCls: o, focus: a, borderElCls: s } = n,
    c = s ? "> *" : "",
    i = ["hover", a ? "focus" : null, "active"]
      .filter(Boolean)
      .map((u) => `&:${u} ${c}`)
      .join(",");
  return {
    [`&-item:not(${e}-last-item)`]: { marginInlineEnd: -t.lineWidth },
    "&-item": r(
      r({ [i]: { zIndex: 2 } }, o ? { [`&${o}`]: { zIndex: 2 } } : {}),
      { [`&[disabled] ${c}`]: { zIndex: 0 } }
    ),
  };
}
function q(t, e, n) {
  const { borderElCls: o } = n,
    a = o ? `> ${o}` : "";
  return {
    [`&-item:not(${e}-first-item):not(${e}-last-item) ${a}`]: {
      borderRadius: 0,
    },
    [`&-item:not(${e}-last-item)${e}-first-item`]: {
      [`& ${a}, &${t}-sm ${a}, &${t}-lg ${a}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },
    [`&-item:not(${e}-first-item)${e}-last-item`]: {
      [`& ${a}, &${t}-sm ${a}, &${t}-lg ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },
  };
}
function X(t) {
  let e =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { focus: !0 };
  const { componentCls: n } = t,
    o = `${n}-compact`;
  return { [o]: r(r({}, W(t, o, e)), q(n, o, e)) };
}
export { U as N, Q as a, F as c, X as g, M as u };
