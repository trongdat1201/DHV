import {
  f as E,
  K as M,
  m as L,
  a as I,
  r as X,
  i as P,
  l as _,
  b as x,
  aJ as G,
  P as T,
  bo as j,
} from "./entry.8aa394d7.js";
import {
  j as A,
  s as B,
  b as H,
  o as R,
  z as r,
  I as N,
  au as O,
} from "./swiper-vue.d5cda4d1.js";
function V(n, e, c) {
  var t = c || {},
    i = t.noTrailing,
    m = i === void 0 ? !1 : i,
    b = t.noLeading,
    $ = b === void 0 ? !1 : b,
    y = t.debounceMode,
    a = y === void 0 ? void 0 : y,
    o,
    g = !1,
    f = 0;
  function D() {
    o && clearTimeout(o);
  }
  function w(u) {
    var v = u || {},
      p = v.upcomingOnly,
      h = p === void 0 ? !1 : p;
    D(), (g = !h);
  }
  function S() {
    for (var u = arguments.length, v = new Array(u), p = 0; p < u; p++)
      v[p] = arguments[p];
    var h = this,
      l = Date.now() - f;
    if (g) return;
    function d() {
      (f = Date.now()), e.apply(h, v);
    }
    function s() {
      o = void 0;
    }
    !$ && a && !o && d(),
      D(),
      a === void 0 && l > n
        ? $
          ? ((f = Date.now()), m || (o = setTimeout(a ? s : d, n)))
          : d()
        : m !== !0 && (o = setTimeout(a ? s : d, a === void 0 ? n - l : n));
  }
  return (S.cancel = w), S;
}
function F(n, e, c) {
  var t = c || {},
    i = t.atBegin,
    m = i === void 0 ? !1 : i;
  return V(n, e, { debounceMode: m !== !1 });
}
const K = new M("antSpinMove", { to: { opacity: 1 } }),
  J = new M("antRotate", { to: { transform: "rotate(405deg)" } }),
  U = (n) => ({
    [`${n.componentCls}`]: I(I({}, X(n)), {
      position: "absolute",
      display: "none",
      color: n.colorPrimary,
      textAlign: "center",
      verticalAlign: "middle",
      opacity: 0,
      transition: `transform ${n.motionDurationSlow} ${n.motionEaseInOutCirc}`,
      "&-spinning": { position: "static", display: "inline-block", opacity: 1 },
      "&-nested-loading": {
        position: "relative",
        [`> div > ${n.componentCls}`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          zIndex: 4,
          display: "block",
          width: "100%",
          height: "100%",
          maxHeight: n.contentHeight,
          [`${n.componentCls}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: -n.spinDotSize / 2,
          },
          [`${n.componentCls}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            paddingTop: (n.spinDotSize - n.fontSize) / 2 + 2,
            textShadow: `0 1px 2px ${n.colorBgContainer}`,
          },
          [`&${n.componentCls}-show-text ${n.componentCls}-dot`]: {
            marginTop: -(n.spinDotSize / 2) - 10,
          },
          "&-sm": {
            [`${n.componentCls}-dot`]: { margin: -n.spinDotSizeSM / 2 },
            [`${n.componentCls}-text`]: {
              paddingTop: (n.spinDotSizeSM - n.fontSize) / 2 + 2,
            },
            [`&${n.componentCls}-show-text ${n.componentCls}-dot`]: {
              marginTop: -(n.spinDotSizeSM / 2) - 10,
            },
          },
          "&-lg": {
            [`${n.componentCls}-dot`]: { margin: -(n.spinDotSizeLG / 2) },
            [`${n.componentCls}-text`]: {
              paddingTop: (n.spinDotSizeLG - n.fontSize) / 2 + 2,
            },
            [`&${n.componentCls}-show-text ${n.componentCls}-dot`]: {
              marginTop: -(n.spinDotSizeLG / 2) - 10,
            },
          },
        },
        [`${n.componentCls}-container`]: {
          position: "relative",
          transition: `opacity ${n.motionDurationSlow}`,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
            background: n.colorBgContainer,
            opacity: 0,
            transition: `all ${n.motionDurationSlow}`,
            content: '""',
            pointerEvents: "none",
          },
        },
        [`${n.componentCls}-blur`]: {
          clear: "both",
          opacity: 0.5,
          userSelect: "none",
          pointerEvents: "none",
          ["&::after"]: { opacity: 0.4, pointerEvents: "auto" },
        },
      },
      ["&-tip"]: { color: n.spinDotDefault },
      [`${n.componentCls}-dot`]: {
        position: "relative",
        display: "inline-block",
        fontSize: n.spinDotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: (n.spinDotSize - n.marginXXS / 2) / 2,
          height: (n.spinDotSize - n.marginXXS / 2) / 2,
          backgroundColor: n.colorPrimary,
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: K,
          animationDuration: "1s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          animationDirection: "alternate",
          "&:nth-child(1)": { top: 0, insetInlineStart: 0 },
          "&:nth-child(2)": {
            top: 0,
            insetInlineEnd: 0,
            animationDelay: "0.4s",
          },
          "&:nth-child(3)": {
            insetInlineEnd: 0,
            bottom: 0,
            animationDelay: "0.8s",
          },
          "&:nth-child(4)": {
            bottom: 0,
            insetInlineStart: 0,
            animationDelay: "1.2s",
          },
        },
        "&-spin": {
          transform: "rotate(45deg)",
          animationName: J,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        },
      },
      [`&-sm ${n.componentCls}-dot`]: {
        fontSize: n.spinDotSizeSM,
        i: {
          width: (n.spinDotSizeSM - n.marginXXS / 2) / 2,
          height: (n.spinDotSizeSM - n.marginXXS / 2) / 2,
        },
      },
      [`&-lg ${n.componentCls}-dot`]: {
        fontSize: n.spinDotSizeLG,
        i: {
          width: (n.spinDotSizeLG - n.marginXXS) / 2,
          height: (n.spinDotSizeLG - n.marginXXS) / 2,
        },
      },
      [`&${n.componentCls}-show-text ${n.componentCls}-text`]: {
        display: "block",
      },
    }),
  }),
  q = E(
    "Spin",
    (n) => {
      const e = L(n, {
        spinDotDefault: n.colorTextDescription,
        spinDotSize: n.controlHeightLG / 2,
        spinDotSizeSM: n.controlHeightLG * 0.35,
        spinDotSizeLG: n.controlHeight,
      });
      return [U(e)];
    },
    { contentHeight: 400 }
  );
var Q =
  (globalThis && globalThis.__rest) ||
  function (n, e) {
    var c = {};
    for (var t in n)
      Object.prototype.hasOwnProperty.call(n, t) &&
        e.indexOf(t) < 0 &&
        (c[t] = n[t]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, t = Object.getOwnPropertySymbols(n); i < t.length; i++)
        e.indexOf(t[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(n, t[i]) &&
          (c[t[i]] = n[t[i]]);
    return c;
  };
const W = () => ({
  prefixCls: String,
  spinning: { type: Boolean, default: void 0 },
  size: String,
  wrapperClassName: String,
  tip: T.any,
  delay: Number,
  indicator: T.any,
});
let C = null;
function Y(n, e) {
  return !!n && !!e && !isNaN(Number(e));
}
function Z(n) {
  const e = n.indicator;
  C = typeof e == "function" ? e : () => r(e, null, null);
}
const z = A({
  compatConfig: { MODE: 3 },
  name: "ASpin",
  inheritAttrs: !1,
  props: P(W(), { size: "default", spinning: !0, wrapperClassName: "" }),
  setup(n, e) {
    let { attrs: c, slots: t } = e;
    const { prefixCls: i, size: m, direction: b } = _("spin", n),
      [$, y] = q(i),
      a = B(n.spinning && !Y(n.spinning, n.delay));
    let o;
    return (
      H(
        [() => n.spinning, () => n.delay],
        () => {
          o == null || o.cancel(),
            (o = F(n.delay, () => {
              a.value = n.spinning;
            })),
            o == null || o();
        },
        { immediate: !0, flush: "post" }
      ),
      R(() => {
        o == null || o.cancel();
      }),
      () => {
        var g, f;
        const { class: D } = c,
          w = Q(c, ["class"]),
          {
            tip: S = (g = t.tip) === null || g === void 0 ? void 0 : g.call(t),
          } = n,
          u = (f = t.default) === null || f === void 0 ? void 0 : f.call(t),
          v = {
            [y.value]: !0,
            [i.value]: !0,
            [`${i.value}-sm`]: m.value === "small",
            [`${i.value}-lg`]: m.value === "large",
            [`${i.value}-spinning`]: a.value,
            [`${i.value}-show-text`]: !!S,
            [`${i.value}-rtl`]: b.value === "rtl",
            [D]: !!D,
          };
        function p(l) {
          const d = `${l}-dot`;
          let s = j(t, n, "indicator");
          return s === null
            ? null
            : (Array.isArray(s) && (s = s.length === 1 ? s[0] : s),
              N(s)
                ? O(s, { class: d })
                : C && N(C())
                ? O(C(), { class: d })
                : r("span", { class: `${d} ${l}-dot-spin` }, [
                    r("i", { class: `${l}-dot-item` }, null),
                    r("i", { class: `${l}-dot-item` }, null),
                    r("i", { class: `${l}-dot-item` }, null),
                    r("i", { class: `${l}-dot-item` }, null),
                  ]));
        }
        const h = r(
          "div",
          x(
            x({}, w),
            {},
            { class: v, "aria-live": "polite", "aria-busy": a.value }
          ),
          [p(i.value), S ? r("div", { class: `${i.value}-text` }, [S]) : null]
        );
        if (u && G(u).length) {
          const l = {
            [`${i.value}-container`]: !0,
            [`${i.value}-blur`]: a.value,
          };
          return $(
            r(
              "div",
              {
                class: [
                  `${i.value}-nested-loading`,
                  n.wrapperClassName,
                  y.value,
                ],
              },
              [
                a.value && r("div", { key: "loading" }, [h]),
                r("div", { class: l, key: "container" }, [u]),
              ]
            )
          );
        }
        return $(h);
      }
    );
  },
});
z.setDefaultIndicator = Z;
z.install = function (n) {
  return n.component(z.name, z), n;
};
export { z as S };
