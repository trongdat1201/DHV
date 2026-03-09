import {
  a as i,
  P as $,
  bo as it,
  o as D,
  c as H,
  f as st,
  m as K,
  r as pt,
  i as ct,
  l as ft,
  aJ as ut,
  ao as dt,
  bD as mt,
  n as gt,
  bE as vt,
  bu as bt,
} from "./entry.8aa394d7.js";
import { T as ht } from "./Trigger.dd535606.js";
import {
  j as F,
  z as x,
  s as z,
  w as yt,
  k as B,
  a as q,
  b as wt,
} from "./swiper-vue.d5cda4d1.js";
import { c as U } from "./motion.d46d0bbf.js";
import { f as Ct } from "./firstNotUndefined.29a740f3.js";
import { w as Z } from "./isVisible.48fa23e0.js";
import { i as Ot } from "./zoom.4c1ddb0e.js";
const V = [
    "blue",
    "purple",
    "cyan",
    "green",
    "magenta",
    "pink",
    "red",
    "orange",
    "yellow",
    "volcano",
    "geekblue",
    "lime",
    "gold",
  ],
  $t = (t, o, e, n, a) => {
    const l = t / 2,
      s = l - e * (Math.sqrt(2) - 1),
      c = l,
      d = l + e * (1 - 1 / Math.sqrt(2)),
      v = l - e * (1 - 1 / Math.sqrt(2)),
      f = 2 * l - o * (1 / Math.sqrt(2)),
      u = o * (1 / Math.sqrt(2)),
      m = 4 * l - f,
      y = u,
      b = 4 * l - d,
      k = v,
      I = 4 * l - s,
      S = c;
    return {
      borderRadius: { _skip_check_: !0, value: `0 0 ${o}px` },
      pointerEvents: "none",
      width: t * 2,
      height: t * 2,
      overflow: "hidden",
      "&::after": {
        content: '""',
        position: "absolute",
        width: t / Math.sqrt(2),
        height: t / Math.sqrt(2),
        bottom: 0,
        insetInline: 0,
        margin: "auto",
        borderRadius: { _skip_check_: !0, value: `0 0 ${o}px 0` },
        transform: "translateY(50%) rotate(-135deg)",
        boxShadow: a,
        zIndex: 0,
        background: "transparent",
      },
      "&::before": {
        position: "absolute",
        bottom: 0,
        insetInlineStart: 0,
        width: t * 2,
        height: t / 2,
        background: n,
        clipPath: `path('M ${s} ${c} A ${e} ${e} 0 0 0 ${d} ${v} L ${f} ${u} A ${o} ${o} 0 0 1 ${m} ${y} L ${b} ${k} A ${e} ${e} 0 0 0 ${I} ${S} Z')`,
        content: '""',
      },
    };
  };
function _t(t, o) {
  return V.reduce((e, n) => {
    const a = t[`${n}-1`],
      l = t[`${n}-3`],
      s = t[`${n}-6`],
      c = t[`${n}-7`];
    return i(
      i({}, e),
      o(n, { lightColor: a, lightBorderColor: l, darkColor: s, textColor: c })
    );
  }, {});
}
const C = { adjustX: 1, adjustY: 1 },
  O = [0, 0],
  tt = {
    left: {
      points: ["cr", "cl"],
      overflow: C,
      offset: [-4, 0],
      targetOffset: O,
    },
    right: {
      points: ["cl", "cr"],
      overflow: C,
      offset: [4, 0],
      targetOffset: O,
    },
    top: {
      points: ["bc", "tc"],
      overflow: C,
      offset: [0, -4],
      targetOffset: O,
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: C,
      offset: [0, 4],
      targetOffset: O,
    },
    topLeft: {
      points: ["bl", "tl"],
      overflow: C,
      offset: [0, -4],
      targetOffset: O,
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: C,
      offset: [-4, 0],
      targetOffset: O,
    },
    topRight: {
      points: ["br", "tr"],
      overflow: C,
      offset: [0, -4],
      targetOffset: O,
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: C,
      offset: [4, 0],
      targetOffset: O,
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: C,
      offset: [0, 4],
      targetOffset: O,
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: C,
      offset: [4, 0],
      targetOffset: O,
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: C,
      offset: [0, 4],
      targetOffset: O,
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: C,
      offset: [-4, 0],
      targetOffset: O,
    },
  },
  Pt = { prefixCls: String, id: String, overlayInnerStyle: $.any },
  xt = F({
    compatConfig: { MODE: 3 },
    name: "Content",
    props: Pt,
    setup(t, o) {
      let { slots: e } = o;
      return () => {
        var n;
        return x(
          "div",
          {
            class: `${t.prefixCls}-inner`,
            id: t.id,
            role: "tooltip",
            style: t.overlayInnerStyle,
          },
          [(n = e.overlay) === null || n === void 0 ? void 0 : n.call(e)]
        );
      };
    },
  });
var St =
  (globalThis && globalThis.__rest) ||
  function (t, o) {
    var e = {};
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        o.indexOf(n) < 0 &&
        (e[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
        o.indexOf(n[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, n[a]) &&
          (e[n[a]] = t[n[a]]);
    return e;
  };
function G() {}
const Tt = F({
    compatConfig: { MODE: 3 },
    name: "Tooltip",
    inheritAttrs: !1,
    props: {
      trigger: $.any.def(["hover"]),
      defaultVisible: { type: Boolean, default: void 0 },
      visible: { type: Boolean, default: void 0 },
      placement: $.string.def("right"),
      transitionName: String,
      animation: $.any,
      afterVisibleChange: $.func.def(() => {}),
      overlayStyle: { type: Object, default: void 0 },
      overlayClassName: String,
      prefixCls: $.string.def("rc-tooltip"),
      mouseEnterDelay: $.number.def(0.1),
      mouseLeaveDelay: $.number.def(0.1),
      getPopupContainer: Function,
      destroyTooltipOnHide: { type: Boolean, default: !1 },
      align: $.object.def(() => ({})),
      arrowContent: $.any.def(null),
      tipId: String,
      builtinPlacements: $.object,
      overlayInnerStyle: { type: Object, default: void 0 },
      popupVisible: { type: Boolean, default: void 0 },
      onVisibleChange: Function,
      onPopupAlign: Function,
    },
    setup(t, o) {
      let { slots: e, attrs: n, expose: a } = o;
      const l = z(),
        s = () => {
          const { prefixCls: f, tipId: u, overlayInnerStyle: m } = t;
          return [
            x("div", { class: `${f}-arrow`, key: "arrow" }, [
              it(e, t, "arrowContent"),
            ]),
            x(
              xt,
              { key: "content", prefixCls: f, id: u, overlayInnerStyle: m },
              { overlay: e.overlay }
            ),
          ];
        };
      a({
        getPopupDomNode: () => l.value.getPopupDomNode(),
        triggerDOM: l,
        forcePopupAlign: () => {
          var f;
          return (f = l.value) === null || f === void 0
            ? void 0
            : f.forcePopupAlign();
        },
      });
      const d = z(!1),
        v = z(!1);
      return (
        yt(() => {
          const { destroyTooltipOnHide: f } = t;
          if (typeof f == "boolean") d.value = f;
          else if (f && typeof f == "object") {
            const { keepParent: u } = f;
            (d.value = u === !0), (v.value = u === !1);
          }
        }),
        () => {
          const {
              overlayClassName: f,
              trigger: u,
              mouseEnterDelay: m,
              mouseLeaveDelay: y,
              overlayStyle: b,
              prefixCls: k,
              afterVisibleChange: I,
              transitionName: S,
              animation: T,
              placement: E,
              align: L,
              destroyTooltipOnHide: Y,
              defaultVisible: N,
            } = t,
            M = St(t, [
              "overlayClassName",
              "trigger",
              "mouseEnterDelay",
              "mouseLeaveDelay",
              "overlayStyle",
              "prefixCls",
              "afterVisibleChange",
              "transitionName",
              "animation",
              "placement",
              "align",
              "destroyTooltipOnHide",
              "defaultVisible",
            ]),
            j = i({}, M);
          t.visible !== void 0 && (j.popupVisible = t.visible);
          const X = i(
            i(
              i(
                {
                  popupClassName: f,
                  prefixCls: k,
                  action: u,
                  builtinPlacements: tt,
                  popupPlacement: E,
                  popupAlign: L,
                  afterPopupVisibleChange: I,
                  popupTransitionName: S,
                  popupAnimation: T,
                  defaultPopupVisible: N,
                  destroyPopupOnHide: d.value,
                  autoDestroy: v.value,
                  mouseLeaveDelay: y,
                  popupStyle: b,
                  mouseEnterDelay: m,
                },
                j
              ),
              n
            ),
            {
              onPopupVisibleChange: t.onVisibleChange || G,
              onPopupAlign: t.onPopupAlign || G,
              ref: l,
              popup: s(),
            }
          );
          return x(ht, X, { default: e.default });
        }
      );
    },
  }),
  At = () => ({
    trigger: [String, Array],
    open: { type: Boolean, default: void 0 },
    visible: { type: Boolean, default: void 0 },
    placement: String,
    color: String,
    transitionName: String,
    overlayStyle: D(),
    overlayInnerStyle: D(),
    overlayClassName: String,
    openClassName: String,
    prefixCls: String,
    mouseEnterDelay: Number,
    mouseLeaveDelay: Number,
    getPopupContainer: Function,
    arrowPointAtCenter: { type: Boolean, default: void 0 },
    autoAdjustOverflow: { type: [Boolean, Object], default: void 0 },
    destroyTooltipOnHide: { type: Boolean, default: void 0 },
    align: D(),
    builtinPlacements: D(),
    children: Array,
    onVisibleChange: Function,
    "onUpdate:visible": Function,
    onOpenChange: Function,
    "onUpdate:open": Function,
  }),
  kt = { adjustX: 1, adjustY: 1 },
  J = { adjustX: 0, adjustY: 0 },
  Nt = [0, 0];
function Q(t) {
  return typeof t == "boolean" ? (t ? kt : J) : i(i({}, J), t);
}
function Bt(t) {
  const {
      arrowWidth: o = 4,
      horizontalArrowShift: e = 16,
      verticalArrowShift: n = 8,
      autoAdjustOverflow: a,
      arrowPointAtCenter: l,
    } = t,
    s = {
      left: { points: ["cr", "cl"], offset: [-4, 0] },
      right: { points: ["cl", "cr"], offset: [4, 0] },
      top: { points: ["bc", "tc"], offset: [0, -4] },
      bottom: { points: ["tc", "bc"], offset: [0, 4] },
      topLeft: { points: ["bl", "tc"], offset: [-(e + o), -4] },
      leftTop: { points: ["tr", "cl"], offset: [-4, -(n + o)] },
      topRight: { points: ["br", "tc"], offset: [e + o, -4] },
      rightTop: { points: ["tl", "cr"], offset: [4, -(n + o)] },
      bottomRight: { points: ["tr", "bc"], offset: [e + o, 4] },
      rightBottom: { points: ["bl", "cr"], offset: [4, n + o] },
      bottomLeft: { points: ["tl", "bc"], offset: [-(e + o), 4] },
      leftBottom: { points: ["br", "cl"], offset: [-4, n + o] },
    };
  return (
    Object.keys(s).forEach((c) => {
      (s[c] = l
        ? i(i({}, s[c]), { overflow: Q(a), targetOffset: Nt })
        : i(i({}, tt[c]), { overflow: Q(a) })),
        (s[c].ignoreShake = !0);
    }),
    s
  );
}
const It = V.map((t) => `${t}-inverse`);
function jt(t) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
    ? [...It, ...V].includes(t)
    : V.includes(t);
}
function Dt(t, o) {
  const e = jt(o),
    n = H({ [`${t}-${o}`]: o && e }),
    a = {},
    l = {};
  return (
    o && !e && ((a.background = o), (l["--antd-arrow-background-color"] = o)),
    { className: n, overlayStyle: a, arrowStyle: l }
  );
}
function R(t) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return t.map((e) => `${o}${e}`).join(",");
}
const et = 8;
function Rt(t) {
  const o = et,
    {
      sizePopupArrow: e,
      contentRadius: n,
      borderRadiusOuter: a,
      limitVerticalRadius: l,
    } = t,
    s = e / 2 - Math.ceil(a * (Math.sqrt(2) - 1)),
    c = (n > 12 ? n + 2 : 12) - s,
    d = l ? o - s : c;
  return { dropdownArrowOffset: c, dropdownArrowOffsetVertical: d };
}
function Vt(t, o) {
  const {
      componentCls: e,
      sizePopupArrow: n,
      marginXXS: a,
      borderRadiusXS: l,
      borderRadiusOuter: s,
      boxShadowPopoverArrow: c,
    } = t,
    {
      colorBg: d,
      showArrowCls: v,
      contentRadius: f = t.borderRadiusLG,
      limitVerticalRadius: u,
    } = o,
    { dropdownArrowOffsetVertical: m, dropdownArrowOffset: y } = Rt({
      sizePopupArrow: n,
      contentRadius: f,
      borderRadiusOuter: s,
      limitVerticalRadius: u,
    }),
    b = n / 2 + a;
  return {
    [e]: {
      [`${e}-arrow`]: [
        i(
          i(
            { position: "absolute", zIndex: 1, display: "block" },
            $t(n, l, s, d, c)
          ),
          { "&:before": { background: d } }
        ),
      ],
      [[
        `&-placement-top ${e}-arrow`,
        `&-placement-topLeft ${e}-arrow`,
        `&-placement-topRight ${e}-arrow`,
      ].join(",")]: { bottom: 0, transform: "translateY(100%) rotate(180deg)" },
      [`&-placement-top ${e}-arrow`]: {
        left: { _skip_check_: !0, value: "50%" },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)",
      },
      [`&-placement-topLeft ${e}-arrow`]: {
        left: { _skip_check_: !0, value: y },
      },
      [`&-placement-topRight ${e}-arrow`]: {
        right: { _skip_check_: !0, value: y },
      },
      [[
        `&-placement-bottom ${e}-arrow`,
        `&-placement-bottomLeft ${e}-arrow`,
        `&-placement-bottomRight ${e}-arrow`,
      ].join(",")]: { top: 0, transform: "translateY(-100%)" },
      [`&-placement-bottom ${e}-arrow`]: {
        left: { _skip_check_: !0, value: "50%" },
        transform: "translateX(-50%) translateY(-100%)",
      },
      [`&-placement-bottomLeft ${e}-arrow`]: {
        left: { _skip_check_: !0, value: y },
      },
      [`&-placement-bottomRight ${e}-arrow`]: {
        right: { _skip_check_: !0, value: y },
      },
      [[
        `&-placement-left ${e}-arrow`,
        `&-placement-leftTop ${e}-arrow`,
        `&-placement-leftBottom ${e}-arrow`,
      ].join(",")]: {
        right: { _skip_check_: !0, value: 0 },
        transform: "translateX(100%) rotate(90deg)",
      },
      [`&-placement-left ${e}-arrow`]: {
        top: { _skip_check_: !0, value: "50%" },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)",
      },
      [`&-placement-leftTop ${e}-arrow`]: { top: m },
      [`&-placement-leftBottom ${e}-arrow`]: { bottom: m },
      [[
        `&-placement-right ${e}-arrow`,
        `&-placement-rightTop ${e}-arrow`,
        `&-placement-rightBottom ${e}-arrow`,
      ].join(",")]: {
        left: { _skip_check_: !0, value: 0 },
        transform: "translateX(-100%) rotate(-90deg)",
      },
      [`&-placement-right ${e}-arrow`]: {
        top: { _skip_check_: !0, value: "50%" },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)",
      },
      [`&-placement-rightTop ${e}-arrow`]: { top: m },
      [`&-placement-rightBottom ${e}-arrow`]: { bottom: m },
      [R(
        ["&-placement-topLeft", "&-placement-top", "&-placement-topRight"],
        v
      )]: { paddingBottom: b },
      [R(
        [
          "&-placement-bottomLeft",
          "&-placement-bottom",
          "&-placement-bottomRight",
        ],
        v
      )]: { paddingTop: b },
      [R(
        ["&-placement-leftTop", "&-placement-left", "&-placement-leftBottom"],
        v
      )]: { paddingRight: { _skip_check_: !0, value: b } },
      [R(
        [
          "&-placement-rightTop",
          "&-placement-right",
          "&-placement-rightBottom",
        ],
        v
      )]: { paddingLeft: { _skip_check_: !0, value: b } },
    },
  };
}
const Et = (t) => {
    const {
      componentCls: o,
      tooltipMaxWidth: e,
      tooltipColor: n,
      tooltipBg: a,
      tooltipBorderRadius: l,
      zIndexPopup: s,
      controlHeight: c,
      boxShadowSecondary: d,
      paddingSM: v,
      paddingXS: f,
      tooltipRadiusOuter: u,
    } = t;
    return [
      {
        [o]: i(
          i(
            i(i({}, pt(t)), {
              position: "absolute",
              zIndex: s,
              display: "block",
              "&": [{ width: "max-content" }, { width: "intrinsic" }],
              maxWidth: e,
              visibility: "visible",
              "&-hidden": { display: "none" },
              "--antd-arrow-background-color": a,
              [`${o}-inner`]: {
                minWidth: c,
                minHeight: c,
                padding: `${v / 2}px ${f}px`,
                color: n,
                textAlign: "start",
                textDecoration: "none",
                wordWrap: "break-word",
                backgroundColor: a,
                borderRadius: l,
                boxShadow: d,
              },
              [[
                "&-placement-left",
                "&-placement-leftTop",
                "&-placement-leftBottom",
                "&-placement-right",
                "&-placement-rightTop",
                "&-placement-rightBottom",
              ].join(",")]: {
                [`${o}-inner`]: { borderRadius: Math.min(l, et) },
              },
              [`${o}-content`]: { position: "relative" },
            }),
            _t(t, (m, y) => {
              let { darkColor: b } = y;
              return {
                [`&${o}-${m}`]: {
                  [`${o}-inner`]: { backgroundColor: b },
                  [`${o}-arrow`]: { "--antd-arrow-background-color": b },
                },
              };
            })
          ),
          { "&-rtl": { direction: "rtl" } }
        ),
      },
      Vt(K(t, { borderRadiusOuter: u }), {
        colorBg: "var(--antd-arrow-background-color)",
        showArrowCls: "",
        contentRadius: l,
        limitVerticalRadius: !0,
      }),
      { [`${o}-pure`]: { position: "relative", maxWidth: "none" } },
    ];
  },
  Lt = (t, o) =>
    st(
      "Tooltip",
      (n) => {
        if ((o == null ? void 0 : o.value) === !1) return [];
        const {
            borderRadius: a,
            colorTextLightSolid: l,
            colorBgDefault: s,
            borderRadiusOuter: c,
          } = n,
          d = K(n, {
            tooltipMaxWidth: 250,
            tooltipColor: l,
            tooltipBorderRadius: a,
            tooltipBg: s,
            tooltipRadiusOuter: c > 4 ? 4 : c,
          });
        return [Et(d), Ot(n, "zoom-big-fast")];
      },
      (n) => {
        let { zIndexPopupBase: a, colorBgSpotlight: l } = n;
        return { zIndexPopup: a + 70, colorBgDefault: l };
      }
    )(t),
  Mt = (t, o) => {
    const e = {},
      n = i({}, t);
    return (
      o.forEach((a) => {
        t && a in t && ((e[a] = t[a]), delete n[a]);
      }),
      { picked: e, omitted: n }
    );
  },
  Xt = () => i(i({}, At()), { title: $.any }),
  zt = F({
    compatConfig: { MODE: 3 },
    name: "ATooltip",
    inheritAttrs: !1,
    props: ct(Xt(), {
      trigger: "hover",
      align: {},
      placement: "top",
      mouseEnterDelay: 0.1,
      mouseLeaveDelay: 0.1,
      arrowPointAtCenter: !1,
      autoAdjustOverflow: !0,
    }),
    slots: Object,
    setup(t, o) {
      let { slots: e, emit: n, attrs: a, expose: l } = o;
      const {
          prefixCls: s,
          getPopupContainer: c,
          direction: d,
          rootPrefixCls: v,
        } = ft("tooltip", t),
        f = B(() => {
          var r;
          return (r = t.open) !== null && r !== void 0 ? r : t.visible;
        }),
        u = q(Ct([t.open, t.visible])),
        m = q();
      let y;
      wt(f, (r) => {
        Z.cancel(y),
          (y = Z(() => {
            u.value = !!r;
          }));
      });
      const b = () => {
          var r;
          const p = (r = t.title) !== null && r !== void 0 ? r : e.title;
          return !p && p !== 0;
        },
        k = (r) => {
          const p = b();
          f.value === void 0 && (u.value = p ? !1 : r),
            p ||
              (n("update:visible", r),
              n("visibleChange", r),
              n("update:open", r),
              n("openChange", r));
        };
      l({
        getPopupDomNode: () => m.value.getPopupDomNode(),
        open: u,
        forcePopupAlign: () => {
          var r;
          return (r = m.value) === null || r === void 0
            ? void 0
            : r.forcePopupAlign();
        },
      });
      const S = B(() => {
          const {
            builtinPlacements: r,
            arrowPointAtCenter: p,
            autoAdjustOverflow: _,
          } = t;
          return r || Bt({ arrowPointAtCenter: p, autoAdjustOverflow: _ });
        }),
        T = (r) => r || r === "",
        E = (r) => {
          const p = r.type;
          if (
            typeof p == "object" &&
            r.props &&
            (((p.__ANT_BUTTON === !0 || p === "button") &&
              T(r.props.disabled)) ||
              (p.__ANT_SWITCH === !0 &&
                (T(r.props.disabled) || T(r.props.loading))) ||
              (p.__ANT_RADIO === !0 && T(r.props.disabled)))
          ) {
            const { picked: _, omitted: w } = Mt(vt(r), [
                "position",
                "left",
                "right",
                "top",
                "bottom",
                "float",
                "display",
                "zIndex",
              ]),
              P = i(i({ display: "inline-block" }, _), {
                cursor: "not-allowed",
                lineHeight: 1,
                width: r.props && r.props.block ? "100%" : void 0,
              }),
              h = i(i({}, w), { pointerEvents: "none" }),
              g = U(r, { style: h }, !0);
            return x(
              "span",
              { style: P, class: `${s.value}-disabled-compatible-wrapper` },
              [g]
            );
          }
          return r;
        },
        L = () => {
          var r, p;
          return (r = t.title) !== null && r !== void 0
            ? r
            : (p = e.title) === null || p === void 0
            ? void 0
            : p.call(e);
        },
        Y = (r, p) => {
          const _ = S.value,
            w = Object.keys(_).find((P) => {
              var h, g;
              return (
                _[P].points[0] ===
                  ((h = p.points) === null || h === void 0 ? void 0 : h[0]) &&
                _[P].points[1] ===
                  ((g = p.points) === null || g === void 0 ? void 0 : g[1])
              );
            });
          if (w) {
            const P = r.getBoundingClientRect(),
              h = { top: "50%", left: "50%" };
            w.indexOf("top") >= 0 || w.indexOf("Bottom") >= 0
              ? (h.top = `${P.height - p.offset[1]}px`)
              : (w.indexOf("Top") >= 0 || w.indexOf("bottom") >= 0) &&
                (h.top = `${-p.offset[1]}px`),
              w.indexOf("left") >= 0 || w.indexOf("Right") >= 0
                ? (h.left = `${P.width - p.offset[0]}px`)
                : (w.indexOf("right") >= 0 || w.indexOf("Left") >= 0) &&
                  (h.left = `${-p.offset[0]}px`),
              (r.style.transformOrigin = `${h.left} ${h.top}`);
          }
        },
        N = B(() => Dt(s.value, t.color)),
        M = B(() => a["data-popover-inject"]),
        [j, X] = Lt(
          s,
          B(() => !M.value)
        );
      return () => {
        var r, p;
        const {
          openClassName: _,
          overlayClassName: w,
          overlayStyle: P,
          overlayInnerStyle: h,
        } = t;
        let g =
          (p = ut(
            (r = e.default) === null || r === void 0 ? void 0 : r.call(e)
          )) !== null && p !== void 0
            ? p
            : null;
        g = g.length === 1 ? g[0] : g;
        let W = u.value;
        if ((f.value === void 0 && b() && (W = !1), !g)) return null;
        const A = E(dt(g) && !mt(g) ? g : x("span", null, [g])),
          ot = H({
            [_ || `${s.value}-open`]: !0,
            [A.props && A.props.class]: A.props && A.props.class,
          }),
          nt = H(
            w,
            { [`${s.value}-rtl`]: d.value === "rtl" },
            N.value.className,
            X.value
          ),
          rt = i(i({}, N.value.overlayStyle), h),
          at = N.value.arrowStyle,
          lt = i(i(i({}, a), t), {
            prefixCls: s.value,
            getPopupContainer: c == null ? void 0 : c.value,
            builtinPlacements: S.value,
            visible: W,
            ref: m,
            overlayClassName: nt,
            overlayStyle: i(i({}, at), P),
            overlayInnerStyle: rt,
            onVisibleChange: k,
            onPopupAlign: Y,
            transitionName: gt(v.value, "zoom-big-fast", t.transitionName),
          });
        return j(
          x(Tt, lt, {
            default: () => [u.value ? U(A, { class: ot }) : A],
            arrowContent: () =>
              x("span", { class: `${s.value}-arrow-content` }, null),
            overlay: L,
          })
        );
      };
    },
  }),
  Gt = bt(zt);
export { Gt as _, Bt as a, Rt as g, $t as r };
