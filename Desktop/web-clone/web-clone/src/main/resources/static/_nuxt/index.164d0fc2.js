import {
  f as Bo,
  o as Oo,
  p as eo,
  l as no,
  c as Do,
  P as No,
  a$ as fo,
  aL as vo,
  a as r,
  m as lo,
  h as Ao,
  b0 as Mo,
  ak as Eo,
  i as _o,
  b1 as jo,
  b as M,
} from "./entry.8aa394d7.js";
import { w as bo, i as Go } from "./isVisible.48fa23e0.js";
import {
  O as To,
  z as g,
  j as L,
  s as P,
  y as ao,
  o as io,
  K as wo,
  k as H,
  b as Io,
  g as Vo,
  n as Ho,
  r as Fo,
  w as Uo,
  L as Xo,
  T as Ko,
} from "./swiper-vue.d5cda4d1.js";
import { u as I, g as qo, c as Jo, a as Qo } from "./compact-item.8109a539.js";
import { d as zo } from "./devWarning.0cb68424.js";
const Yo = (o) => {
    const { componentCls: e, colorPrimary: t } = o;
    return {
      [e]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${t})`,
        boxShadow: "0 0 0 0 currentcolor",
        opacity: 0.2,
        "&.wave-motion-appear": {
          transition: [
            `box-shadow 0.4s ${o.motionEaseOutCirc}`,
            `opacity 2s ${o.motionEaseOutCirc}`,
          ].join(","),
          "&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 },
        },
      },
    };
  },
  Zo = Bo("Wave", (o) => [Yo(o)]);
function ko(o) {
  const e = (o || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return e && e[1] && e[2] && e[3] ? !(e[1] === e[2] && e[2] === e[3]) : !0;
}
function k(o) {
  return (
    o &&
    o !== "#fff" &&
    o !== "#ffffff" &&
    o !== "rgb(255, 255, 255)" &&
    o !== "rgba(255, 255, 255, 1)" &&
    ko(o) &&
    !/rgba\((?:\d*, ){3}0\)/.test(o) &&
    o !== "transparent"
  );
}
function oe(o) {
  const {
    borderTopColor: e,
    borderColor: t,
    backgroundColor: l,
  } = getComputedStyle(o);
  return k(e) ? e : k(t) ? t : k(l) ? l : null;
}
function oo(o) {
  return Number.isNaN(o) ? 0 : o;
}
const ee = L({
  props: { target: Oo(), className: String },
  setup(o) {
    const e = P(null),
      [t, l] = I(null),
      [i, c] = I([]),
      [u, d] = I(0),
      [p, s] = I(0),
      [y, x] = I(0),
      [B, F] = I(0),
      [z, T] = I(!1);
    function w() {
      const { target: a } = o,
        m = getComputedStyle(a);
      l(oe(a));
      const R = m.position === "static",
        { borderLeftWidth: X, borderTopWidth: K } = m;
      d(R ? a.offsetLeft : oo(-parseFloat(X))),
        s(R ? a.offsetTop : oo(-parseFloat(K))),
        x(a.offsetWidth),
        F(a.offsetHeight);
      const {
        borderTopLeftRadius: q,
        borderTopRightRadius: uo,
        borderBottomLeftRadius: po,
        borderBottomRightRadius: n,
      } = m;
      c([q, uo, n, po].map((f) => oo(parseFloat(f))));
    }
    let $, b, E;
    const W = () => {
        clearTimeout(E), bo.cancel(b), $ == null || $.disconnect();
      },
      O = () => {
        var a;
        const m =
          (a = e.value) === null || a === void 0 ? void 0 : a.parentElement;
        m && (To(null, m), m.parentElement && m.parentElement.removeChild(m));
      };
    ao(() => {
      W(),
        (E = setTimeout(() => {
          O();
        }, 5e3));
      const { target: a } = o;
      a &&
        ((b = bo(() => {
          w(), T(!0);
        })),
        typeof ResizeObserver < "u" &&
          (($ = new ResizeObserver(w)), $.observe(a)));
    }),
      io(() => {
        W();
      });
    const U = (a) => {
      a.propertyName === "opacity" && O();
    };
    return () => {
      if (!z.value) return null;
      const a = {
        left: `${u.value}px`,
        top: `${p.value}px`,
        width: `${y.value}px`,
        height: `${B.value}px`,
        borderRadius: i.value.map((m) => `${m}px`).join(" "),
      };
      return (
        t && (a["--wave-color"] = t.value),
        g(
          wo,
          {
            appear: !0,
            name: "wave-motion",
            appearFromClass: "wave-motion-appear",
            appearActiveClass: "wave-motion-appear",
            appearToClass: "wave-motion-appear wave-motion-appear-active",
          },
          {
            default: () => [
              g(
                "div",
                { ref: e, class: o.className, style: a, onTransitionend: U },
                null
              ),
            ],
          }
        )
      );
    };
  },
});
function te(o, e) {
  const t = document.createElement("div");
  (t.style.position = "absolute"),
    (t.style.left = "0px"),
    (t.style.top = "0px"),
    o == null || o.insertBefore(t, o == null ? void 0 : o.firstChild),
    To(g(ee, { target: o, className: e }, null), t);
}
function re(o, e) {
  function t() {
    const l = eo(o);
    te(l, e.value);
  }
  return t;
}
const ne = L({
  compatConfig: { MODE: 3 },
  name: "Wave",
  props: { disabled: Boolean },
  setup(o, e) {
    let { slots: t } = e;
    const l = Vo(),
      { prefixCls: i } = no("wave", o),
      [, c] = Zo(i),
      u = re(
        l,
        H(() => Do(i.value, c.value))
      );
    let d;
    const p = () => {
      eo(l).removeEventListener("click", d, !0);
    };
    return (
      ao(() => {
        Io(
          () => o.disabled,
          () => {
            p(),
              Ho(() => {
                const s = eo(l);
                if (!s || s.nodeType !== 1 || o.disabled) return;
                const y = (x) => {
                  x.target.tagName === "INPUT" ||
                    !Go(x.target) ||
                    !s.getAttribute ||
                    s.getAttribute("disabled") ||
                    s.disabled ||
                    s.className.includes("disabled") ||
                    s.className.includes("-leave") ||
                    u();
                };
                s.addEventListener("click", y, !0);
              });
          },
          { immediate: !0, flush: "post" }
        );
      }),
      io(() => {
        p();
      }),
      () => {
        var s;
        return (s = t.default) === null || s === void 0 ? void 0 : s.call(t)[0];
      }
    );
  },
});
function Pe(o) {
  return o === "danger" ? { danger: !0 } : { type: o };
}
const le = () => ({
    prefixCls: String,
    type: String,
    htmlType: { type: String, default: "button" },
    shape: { type: String },
    size: { type: String },
    loading: { type: [Boolean, Object], default: () => !1 },
    disabled: { type: Boolean, default: void 0 },
    ghost: { type: Boolean, default: void 0 },
    block: { type: Boolean, default: void 0 },
    danger: { type: Boolean, default: void 0 },
    icon: No.any,
    href: String,
    target: String,
    title: String,
    onClick: fo(),
    onMousedown: fo(),
  }),
  ae = le,
  ho = (o) => {
    o &&
      ((o.style.width = "0px"),
      (o.style.opacity = "0"),
      (o.style.transform = "scale(0)"));
  },
  yo = (o) => {
    Ho(() => {
      o &&
        ((o.style.width = `${o.scrollWidth}px`),
        (o.style.opacity = "1"),
        (o.style.transform = "scale(1)"));
    });
  },
  $o = (o) => {
    o &&
      o.style &&
      ((o.style.width = null),
      (o.style.opacity = null),
      (o.style.transform = null));
  },
  ie = L({
    compatConfig: { MODE: 3 },
    name: "LoadingIcon",
    props: {
      prefixCls: String,
      loading: [Boolean, Object],
      existIcon: Boolean,
    },
    setup(o) {
      return () => {
        const { existIcon: e, prefixCls: t, loading: l } = o;
        if (e)
          return g("span", { class: `${t}-loading-icon` }, [g(vo, null, null)]);
        const i = !!l;
        return g(
          wo,
          {
            name: `${t}-loading-icon-motion`,
            onBeforeEnter: ho,
            onEnter: yo,
            onAfterEnter: $o,
            onBeforeLeave: yo,
            onLeave: (c) => {
              setTimeout(() => {
                ho(c);
              });
            },
            onAfterLeave: $o,
          },
          {
            default: () => [
              i
                ? g("span", { class: `${t}-loading-icon` }, [g(vo, null, null)])
                : null,
            ],
          }
        );
      };
    },
  }),
  Co = (o, e) => ({
    [`> span, > ${o}`]: {
      "&:not(:last-child)": {
        [`&, & > ${o}`]: { "&:not(:disabled)": { borderInlineEndColor: e } },
      },
      "&:not(:first-child)": {
        [`&, & > ${o}`]: { "&:not(:disabled)": { borderInlineStartColor: e } },
      },
    },
  }),
  se = (o) => {
    const {
      componentCls: e,
      fontSize: t,
      lineWidth: l,
      colorPrimaryHover: i,
      colorErrorHover: c,
    } = o;
    return {
      [`${e}-group`]: [
        {
          position: "relative",
          display: "inline-flex",
          [`> span, > ${e}`]: {
            "&:not(:last-child)": {
              [`&, & > ${e}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            "&:not(:first-child)": {
              marginInlineStart: -l,
              [`&, & > ${e}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
          },
          [e]: {
            position: "relative",
            zIndex: 1,
            [`&:hover,
          &:focus,
          &:active`]: { zIndex: 2 },
            "&[disabled]": { zIndex: 0 },
          },
          [`${e}-icon-only`]: { fontSize: t },
        },
        Co(`${e}-primary`, i),
        Co(`${e}-danger`, c),
      ],
    };
  },
  ce = se;
function de(o, e) {
  return {
    [`&-item:not(${e}-last-item)`]: { marginBottom: -o.lineWidth },
    "&-item": {
      "&:hover,&:focus,&:active": { zIndex: 2 },
      "&[disabled]": { zIndex: 0 },
    },
  };
}
function ue(o, e) {
  return {
    [`&-item:not(${e}-first-item):not(${e}-last-item)`]: { borderRadius: 0 },
    [`&-item${e}-first-item:not(${e}-last-item)`]: {
      [`&, &${o}-sm, &${o}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0,
      },
    },
    [`&-item${e}-last-item:not(${e}-first-item)`]: {
      [`&, &${o}-sm, &${o}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
      },
    },
  };
}
function pe(o) {
  const e = `${o.componentCls}-compact-vertical`;
  return { [e]: r(r({}, de(o, e)), ue(o.componentCls, e)) };
}
const ge = (o) => {
    const { componentCls: e, iconCls: t } = o;
    return {
      [e]: {
        outline: "none",
        position: "relative",
        display: "inline-block",
        fontWeight: 400,
        whiteSpace: "nowrap",
        textAlign: "center",
        backgroundImage: "none",
        backgroundColor: "transparent",
        border: `${o.lineWidth}px ${o.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${o.motionDurationMid} ${o.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        lineHeight: o.lineHeight,
        color: o.colorText,
        "> span": { display: "inline-block" },
        [`> ${t} + span, > span + ${t}`]: { marginInlineStart: o.marginXS },
        "> a": { color: "currentColor" },
        "&:not(:disabled)": r({}, Ao(o)),
        [`&-icon-only${e}-compact-item`]: { flex: "none" },
        [`&-compact-item${e}-primary`]: {
          [`&:not([disabled]) + ${e}-compact-item${e}-primary:not([disabled])`]:
            {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: -o.lineWidth,
                insetInlineStart: -o.lineWidth,
                display: "inline-block",
                width: o.lineWidth,
                height: `calc(100% + ${o.lineWidth * 2}px)`,
                backgroundColor: o.colorPrimaryHover,
                content: '""',
              },
            },
        },
        "&-compact-vertical-item": {
          [`&${e}-primary`]: {
            [`&:not([disabled]) + ${e}-compact-vertical-item${e}-primary:not([disabled])`]:
              {
                position: "relative",
                "&:before": {
                  position: "absolute",
                  top: -o.lineWidth,
                  insetInlineStart: -o.lineWidth,
                  display: "inline-block",
                  width: `calc(100% + ${o.lineWidth * 2}px)`,
                  height: o.lineWidth,
                  backgroundColor: o.colorPrimaryHover,
                  content: '""',
                },
              },
          },
        },
      },
    };
  },
  S = (o, e) => ({ "&:not(:disabled)": { "&:hover": o, "&:active": e } }),
  me = (o) => ({
    minWidth: o.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%",
  }),
  fe = (o) => ({
    borderRadius: o.controlHeight,
    paddingInlineStart: o.controlHeight / 2,
    paddingInlineEnd: o.controlHeight / 2,
  }),
  to = (o) => ({
    cursor: "not-allowed",
    borderColor: o.colorBorder,
    color: o.colorTextDisabled,
    backgroundColor: o.colorBgContainerDisabled,
    boxShadow: "none",
  }),
  G = (o, e, t, l, i, c, u) => ({
    [`&${o}-background-ghost`]: r(
      r(
        {
          color: e || void 0,
          backgroundColor: "transparent",
          borderColor: t || void 0,
          boxShadow: "none",
        },
        S(
          r({ backgroundColor: "transparent" }, c),
          r({ backgroundColor: "transparent" }, u)
        )
      ),
      {
        "&:disabled": {
          cursor: "not-allowed",
          color: l || void 0,
          borderColor: i || void 0,
        },
      }
    ),
  }),
  so = (o) => ({ "&:disabled": r({}, to(o)) }),
  Wo = (o) => r({}, so(o)),
  V = (o) => ({
    "&:disabled": { cursor: "not-allowed", color: o.colorTextDisabled },
  }),
  Ro = (o) =>
    r(
      r(
        r(
          r(r({}, Wo(o)), {
            backgroundColor: o.colorBgContainer,
            borderColor: o.colorBorder,
            boxShadow: `0 ${o.controlOutlineWidth}px 0 ${o.controlTmpOutline}`,
          }),
          S(
            { color: o.colorPrimaryHover, borderColor: o.colorPrimaryHover },
            { color: o.colorPrimaryActive, borderColor: o.colorPrimaryActive }
          )
        ),
        G(
          o.componentCls,
          o.colorBgContainer,
          o.colorBgContainer,
          o.colorTextDisabled,
          o.colorBorder
        )
      ),
      {
        [`&${o.componentCls}-dangerous`]: r(
          r(
            r(
              { color: o.colorError, borderColor: o.colorError },
              S(
                {
                  color: o.colorErrorHover,
                  borderColor: o.colorErrorBorderHover,
                },
                { color: o.colorErrorActive, borderColor: o.colorErrorActive }
              )
            ),
            G(
              o.componentCls,
              o.colorError,
              o.colorError,
              o.colorTextDisabled,
              o.colorBorder
            )
          ),
          so(o)
        ),
      }
    ),
  ve = (o) =>
    r(
      r(
        r(
          r(r({}, Wo(o)), {
            color: o.colorTextLightSolid,
            backgroundColor: o.colorPrimary,
            boxShadow: `0 ${o.controlOutlineWidth}px 0 ${o.controlOutline}`,
          }),
          S(
            {
              color: o.colorTextLightSolid,
              backgroundColor: o.colorPrimaryHover,
            },
            {
              color: o.colorTextLightSolid,
              backgroundColor: o.colorPrimaryActive,
            }
          )
        ),
        G(
          o.componentCls,
          o.colorPrimary,
          o.colorPrimary,
          o.colorTextDisabled,
          o.colorBorder,
          { color: o.colorPrimaryHover, borderColor: o.colorPrimaryHover },
          { color: o.colorPrimaryActive, borderColor: o.colorPrimaryActive }
        )
      ),
      {
        [`&${o.componentCls}-dangerous`]: r(
          r(
            r(
              {
                backgroundColor: o.colorError,
                boxShadow: `0 ${o.controlOutlineWidth}px 0 ${o.colorErrorOutline}`,
              },
              S(
                { backgroundColor: o.colorErrorHover },
                { backgroundColor: o.colorErrorActive }
              )
            ),
            G(
              o.componentCls,
              o.colorError,
              o.colorError,
              o.colorTextDisabled,
              o.colorBorder,
              { color: o.colorErrorHover, borderColor: o.colorErrorHover },
              { color: o.colorErrorActive, borderColor: o.colorErrorActive }
            )
          ),
          so(o)
        ),
      }
    ),
  be = (o) => r(r({}, Ro(o)), { borderStyle: "dashed" }),
  he = (o) =>
    r(
      r(
        r(
          { color: o.colorLink },
          S({ color: o.colorLinkHover }, { color: o.colorLinkActive })
        ),
        V(o)
      ),
      {
        [`&${o.componentCls}-dangerous`]: r(
          r(
            { color: o.colorError },
            S({ color: o.colorErrorHover }, { color: o.colorErrorActive })
          ),
          V(o)
        ),
      }
    ),
  ye = (o) =>
    r(
      r(
        r(
          {},
          S(
            { color: o.colorText, backgroundColor: o.colorBgTextHover },
            { color: o.colorText, backgroundColor: o.colorBgTextActive }
          )
        ),
        V(o)
      ),
      {
        [`&${o.componentCls}-dangerous`]: r(
          r({ color: o.colorError }, V(o)),
          S(
            { color: o.colorErrorHover, backgroundColor: o.colorErrorBg },
            { color: o.colorErrorHover, backgroundColor: o.colorErrorBg }
          )
        ),
      }
    ),
  $e = (o) => r(r({}, to(o)), { [`&${o.componentCls}:hover`]: r({}, to(o)) }),
  Ce = (o) => {
    const { componentCls: e } = o;
    return {
      [`${e}-default`]: Ro(o),
      [`${e}-primary`]: ve(o),
      [`${e}-dashed`]: be(o),
      [`${e}-link`]: he(o),
      [`${e}-text`]: ye(o),
      [`${e}-disabled`]: $e(o),
    };
  },
  co = function (o) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
        componentCls: t,
        iconCls: l,
        controlHeight: i,
        fontSize: c,
        lineHeight: u,
        lineWidth: d,
        borderRadius: p,
        buttonPaddingHorizontal: s,
      } = o,
      y = Math.max(0, (i - c * u) / 2 - d),
      x = s - d,
      B = `${t}-icon-only`;
    return [
      {
        [`${t}${e}`]: {
          fontSize: c,
          height: i,
          padding: `${y}px ${x}px`,
          borderRadius: p,
          [`&${B}`]: {
            width: i,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            [`&${t}-round`]: { width: "auto" },
            "> span": { transform: "scale(1.143)" },
          },
          [`&${t}-loading`]: { opacity: o.opacityLoading, cursor: "default" },
          [`${t}-loading-icon`]: {
            transition: `width ${o.motionDurationSlow} ${o.motionEaseInOut}, opacity ${o.motionDurationSlow} ${o.motionEaseInOut}`,
          },
          [`&:not(${B}) ${t}-loading-icon > ${l}`]: {
            marginInlineEnd: o.marginXS,
          },
        },
      },
      { [`${t}${t}-circle${e}`]: me(o) },
      { [`${t}${t}-round${e}`]: fe(o) },
    ];
  },
  Se = (o) => co(o),
  xe = (o) => {
    const e = lo(o, {
      controlHeight: o.controlHeightSM,
      padding: o.paddingXS,
      buttonPaddingHorizontal: 8,
      borderRadius: o.borderRadiusSM,
    });
    return co(e, `${o.componentCls}-sm`);
  },
  Be = (o) => {
    const e = lo(o, {
      controlHeight: o.controlHeightLG,
      fontSize: o.fontSizeLG,
      borderRadius: o.borderRadiusLG,
    });
    return co(e, `${o.componentCls}-lg`);
  },
  Ee = (o) => {
    const { componentCls: e } = o;
    return { [e]: { [`&${e}-block`]: { width: "100%" } } };
  },
  Te = Bo("Button", (o) => {
    const { controlTmpOutline: e, paddingContentHorizontal: t } = o,
      l = lo(o, { colorOutlineDefault: e, buttonPaddingHorizontal: t });
    return [
      ge(l),
      xe(l),
      Se(l),
      Be(l),
      Ee(l),
      Ce(l),
      ce(l),
      qo(o, { focus: !1 }),
      pe(o),
    ];
  }),
  we = () => ({ prefixCls: String, size: { type: String } }),
  Po = Jo(),
  ro = L({
    compatConfig: { MODE: 3 },
    name: "AButtonGroup",
    props: we(),
    setup(o, e) {
      let { slots: t } = e;
      const { prefixCls: l, direction: i } = no("btn-group", o),
        [, , c] = Mo();
      Po.useProvide(Fo({ size: H(() => o.size) }));
      const u = H(() => {
        const { size: d } = o;
        let p = "";
        switch (d) {
          case "large":
            p = "lg";
            break;
          case "small":
            p = "sm";
            break;
          case "middle":
          case void 0:
            break;
          default:
            zo(!d, "Button.Group", "Invalid prop `size`.");
        }
        return {
          [`${l.value}`]: !0,
          [`${l.value}-${p}`]: p,
          [`${l.value}-rtl`]: i.value === "rtl",
          [c.value]: !0,
        };
      });
      return () => {
        var d;
        return g("div", { class: u.value }, [
          Eo((d = t.default) === null || d === void 0 ? void 0 : d.call(t)),
        ]);
      };
    },
  }),
  So = /^[\u4e00-\u9fa5]{2}$/,
  xo = So.test.bind(So);
function _(o) {
  return o === "text" || o === "link";
}
const j = L({
  compatConfig: { MODE: 3 },
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: _o(ae(), { type: "default" }),
  slots: Object,
  setup(o, e) {
    let { slots: t, attrs: l, emit: i, expose: c } = e;
    const {
        prefixCls: u,
        autoInsertSpaceInButton: d,
        direction: p,
        size: s,
      } = no("btn", o),
      [y, x] = Te(u),
      B = Po.useInject(),
      F = jo(),
      z = H(() => {
        var n;
        return (n = o.disabled) !== null && n !== void 0 ? n : F.value;
      }),
      T = P(null),
      w = P(void 0);
    let $ = !1;
    const b = P(!1),
      E = P(!1),
      W = H(() => d.value !== !1),
      { compactSize: O, compactItemClassnames: U } = Qo(u, p),
      a = H(() =>
        typeof o.loading == "object" && o.loading.delay
          ? o.loading.delay || !0
          : !!o.loading
      );
    Io(
      a,
      (n) => {
        clearTimeout(w.value),
          typeof a.value == "number"
            ? (w.value = setTimeout(() => {
                b.value = n;
              }, a.value))
            : (b.value = n);
      },
      { immediate: !0 }
    );
    const m = H(() => {
        const {
            type: n,
            shape: f = "default",
            ghost: C,
            block: h,
            danger: J,
          } = o,
          v = u.value,
          D = { large: "lg", small: "sm", middle: void 0 },
          N = O.value || (B == null ? void 0 : B.size) || s.value,
          A = (N && D[N]) || "";
        return [
          U.value,
          {
            [x.value]: !0,
            [`${v}`]: !0,
            [`${v}-${f}`]: f !== "default" && f,
            [`${v}-${n}`]: n,
            [`${v}-${A}`]: A,
            [`${v}-loading`]: b.value,
            [`${v}-background-ghost`]: C && !_(n),
            [`${v}-two-chinese-chars`]: E.value && W.value,
            [`${v}-block`]: h,
            [`${v}-dangerous`]: !!J,
            [`${v}-rtl`]: p.value === "rtl",
          },
        ];
      }),
      R = () => {
        const n = T.value;
        if (!n || d.value === !1) return;
        const f = n.textContent;
        $ && xo(f) ? E.value || (E.value = !0) : E.value && (E.value = !1);
      },
      X = (n) => {
        if (b.value || z.value) {
          n.preventDefault();
          return;
        }
        i("click", n);
      },
      K = (n) => {
        i("mousedown", n);
      },
      q = (n, f) => {
        const C = f ? " " : "";
        if (n.type === Ko) {
          let h = n.children.trim();
          return xo(h) && (h = h.split("").join(C)), g("span", null, [h]);
        }
        return n;
      };
    return (
      Uo(() => {
        zo(
          !(o.ghost && _(o.type)),
          "Button",
          "`link` or `text` button can't be a `ghost` button."
        );
      }),
      ao(R),
      Xo(R),
      io(() => {
        w.value && clearTimeout(w.value);
      }),
      c({
        focus: () => {
          var n;
          (n = T.value) === null || n === void 0 || n.focus();
        },
        blur: () => {
          var n;
          (n = T.value) === null || n === void 0 || n.blur();
        },
      }),
      () => {
        var n, f;
        const {
            icon: C = (n = t.icon) === null || n === void 0
              ? void 0
              : n.call(t),
          } = o,
          h = Eo((f = t.default) === null || f === void 0 ? void 0 : f.call(t));
        $ = h.length === 1 && !C && !_(o.type);
        const { type: J, htmlType: v, href: D, title: N, target: A } = o,
          Lo = b.value ? "loading" : C,
          Q = r(r({}, l), {
            title: N,
            disabled: z.value,
            class: [
              m.value,
              l.class,
              { [`${u.value}-icon-only`]: h.length === 0 && !!Lo },
            ],
            onClick: X,
            onMousedown: K,
          });
        z.value || delete Q.disabled;
        const go =
            C && !b.value
              ? C
              : g(
                  ie,
                  { existIcon: !!C, prefixCls: u.value, loading: !!b.value },
                  null
                ),
          mo = h.map((Z) => q(Z, $ && W.value));
        if (D !== void 0)
          return y(
            g("a", M(M({}, Q), {}, { href: D, target: A, ref: T }), [go, mo])
          );
        let Y = g("button", M(M({}, Q), {}, { ref: T, type: v }), [go, mo]);
        if (!_(J)) {
          const Z = (function () {
            return Y;
          })();
          Y = g(
            ne,
            { ref: "wave", disabled: !!b.value },
            { default: () => [Z] }
          );
        }
        return y(Y);
      }
    );
  },
});
j.Group = ro;
j.install = function (o) {
  return o.component(j.name, j), o.component(ro.name, ro), o;
};
export { j as B, ae as b, Pe as c };
