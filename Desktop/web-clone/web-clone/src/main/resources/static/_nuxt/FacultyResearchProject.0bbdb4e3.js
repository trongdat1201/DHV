import { _ as ra } from "./NuxtImg.vue.916c2d60.js";
import { _ as ia } from "./client-only.42178d49.js";
import { _ as sa } from "./JsonContent.828a79a5.js";
import { _ as ca } from "./AppButton.be7bd59a.js";
import {
  am as Ue,
  o as lt,
  P as Xe,
  an as Ke,
  a as C,
  a$ as da,
  f as on,
  m as ln,
  r as $t,
  h as ro,
  i as Ot,
  l as ut,
  b as U,
  c as ye,
  w as ua,
  ao as Jt,
  K as Qo,
  bs as Zt,
  b1 as io,
  ah as Ee,
  al as et,
  aq as Ye,
  aJ as Lt,
  ap as el,
  bc as Et,
  ak as tl,
  bi as fa,
  ai as so,
  aL as pa,
  cg as co,
  aj as va,
  bR as Ft,
  j as ma,
  k as ha,
  z as ga,
  Q as uo,
  O as ya,
  u as ba,
  a7 as xa,
  D as Ca,
  Y as Sa,
  N as wa,
  $ as Wt,
  J as $a,
  L as Fe,
  Z as fo,
  T as ka,
  _ as Ka,
} from "./entry.8aa394d7.js";
import { u as Oa } from "./index.c079fb5a.js";
import { u as Ea } from "./index.92524a9b.js";
import { A as Pa } from "./btn-arrow.5abf483c.js";
import { A as _a } from "./AppBreadcrumb.73e131db.js";
import {
  s as le,
  w as Le,
  j as Ce,
  k as w,
  z as y,
  i as qe,
  p as Je,
  a as me,
  b as Ae,
  n as dt,
  r as ht,
  y as gt,
  L as Wn,
  g as nl,
  V as an,
  I as Xt,
  T as Ta,
  q as ol,
  W as Ia,
  F as at,
  t as He,
  o as Pt,
  d as Ra,
  P as fn,
  a7 as Da,
  ak as Na,
  K as Ba,
  G as pn,
  au as Fa,
  al as La,
  Y as Ne,
  u as de,
  Q as Ge,
  R as _t,
  _ as po,
  X as bt,
  S as Ze,
  a2 as Aa,
  a0 as Tt,
  Z as vn,
} from "./swiper-vue.d5cda4d1.js";
import { i as za, a as Ha } from "./styleChecker.cebdc292.js";
import {
  s as Ma,
  a as xt,
  g as vo,
  b as ja,
} from "./PortalWrapper.438f60b2.js";
import { w as Ct, i as Wa } from "./isVisible.48fa23e0.js";
import { d as tt, w as ll, a as Va } from "./devWarning.0cb68424.js";
import {
  o as Dt,
  a as al,
  F as Xa,
  R as rl,
  _ as Ga,
} from "./statusUtils.cee29603.js";
import { u as St } from "./compact-item.8109a539.js";
import { p as Vn, K as vt } from "./pickAttrs.315d7ebe.js";
import { S as il } from "./index.010e93e7.js";
import { u as Ua, _ as Ya } from "./index.5d8e77bd.js";
import {
  b as qa,
  c as Ja,
  d as Za,
  e as Qa,
  i as mo,
  f as ho,
  u as er,
  D as tr,
  L as nr,
} from "./index.9e7cd0be.js";
import { V as or, C as Qt, g as lr } from "./index.7b8d9ad8.js";
import { E as ar, u as rr, D as ir, M as en } from "./index.c6ae1aff.js";
import { b as sr, B as At } from "./index.164d0fc2.js";
import { g as cr, r as dr, a as ur, _ as sl } from "./index.a66880e0.js";
import { i as fr } from "./zoom.4c1ddb0e.js";
import { c as go } from "./motion.d46d0bbf.js";
import { R as yo } from "./RightOutlined.f501bedb.js";
import { _ as pr } from "./CaretUpOutlined.d54f7083.js";
import { I as vr } from "./index.7421026a.js";
import { c as mr, g as hr } from "./collapseMotion.3a38b156.js";
import { _ as gr } from "./CaretDownFilled.b9cab49d.js";
import { _ as yr, C as br } from "./index.d81f9ea4.js";
import "./omitBy.06454d55.js";
import "./_baseIteratee.825e9cf8.js";
import "./_baseIsEqual.42871e3f.js";
import "./nuxt-link.58f89fff.js";
import "./breadcrumb.bc5fa9d7.js";
import "./transform-translate-faculty.c0e2ceae.js";
import "./IFaculty.97f6e59d.js";
import "./index.661a1686.js";
import "./Trigger.dd535606.js";
import "./firstNotUndefined.29a740f3.js";
import "./_arrayIncludesWith.49dc741e.js";
function xr(e) {
  for (var t = -1, o = e == null ? 0 : e.length, n = {}; ++t < o; ) {
    var l = e[t];
    n[l[0]] = l[1];
  }
  return n;
}
const Cr = (e) => ({
  color: e.colorLink,
  textDecoration: "none",
  outline: "none",
  cursor: "pointer",
  transition: `color ${e.motionDurationSlow}`,
  "&:focus, &:hover": { color: e.colorLinkHover },
  "&:active": { color: e.colorLinkActive },
});
function Sr(e, t, o, n) {
  const l = o - t;
  return (
    (e /= n / 2),
    e < 1 ? (l / 2) * e * e * e + t : (l / 2) * ((e -= 2) * e * e + 2) + t
  );
}
function kn(e) {
  return e != null && e === e.window;
}
function wr(e, t) {
  var o, n;
  if (typeof window > "u") return 0;
  const l = t ? "scrollTop" : "scrollLeft";
  let a = 0;
  return (
    kn(e)
      ? (a = e[t ? "pageYOffset" : "pageXOffset"])
      : e instanceof Document
      ? (a = e.documentElement[l])
      : (e instanceof HTMLElement || e) && (a = e[l]),
    e &&
      !kn(e) &&
      typeof a != "number" &&
      (a =
        (n = ((o = e.ownerDocument) !== null && o !== void 0 ? o : e)
          .documentElement) === null || n === void 0
          ? void 0
          : n[l]),
    a
  );
}
function $r(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { getContainer: o = () => window, callback: n, duration: l = 450 } = t,
    a = o(),
    r = wr(a, !0),
    i = Date.now(),
    c = () => {
      const u = Date.now() - i,
        d = Sr(u > l ? l : u, r, e, l);
      kn(a)
        ? a.scrollTo(window.pageXOffset, d)
        : a instanceof Document || a.constructor.name === "HTMLDocument"
        ? (a.documentElement.scrollTop = d)
        : (a.scrollTop = d),
        u < l ? Ct(c) : typeof n == "function" && n();
    };
  Ct(c);
}
function Qe(e) {
  const t = le();
  return (
    Le(
      () => {
        t.value = e();
      },
      { flush: "sync" }
    ),
    t
  );
}
const cl = () => ({
    arrow: Ue([Boolean, Object]),
    trigger: { type: [Array, String] },
    menu: lt(),
    overlay: Xe.any,
    visible: Ke(),
    open: Ke(),
    disabled: Ke(),
    danger: Ke(),
    autofocus: Ke(),
    align: lt(),
    getPopupContainer: Function,
    prefixCls: String,
    transitionName: String,
    placement: String,
    overlayClassName: String,
    overlayStyle: lt(),
    forceRender: Ke(),
    mouseEnterDelay: Number,
    mouseLeaveDelay: Number,
    openClassName: String,
    minOverlayWidthMatchTrigger: Ke(),
    destroyPopupOnHide: Ke(),
    onVisibleChange: { type: Function },
    "onUpdate:visible": { type: Function },
    onOpenChange: { type: Function },
    "onUpdate:open": { type: Function },
  }),
  mn = sr(),
  kr = () =>
    C(C({}, cl()), {
      type: mn.type,
      size: String,
      htmlType: mn.htmlType,
      href: String,
      disabled: Ke(),
      prefixCls: String,
      icon: Xe.any,
      title: String,
      loading: mn.loading,
      onClick: da(),
    }),
  Kr = (e) => {
    const { componentCls: t, antCls: o, paddingXS: n, opacityLoading: l } = e;
    return {
      [`${t}-button`]: {
        whiteSpace: "nowrap",
        [`&${o}-btn-group > ${o}-btn`]: {
          [`&-loading, &-loading + ${o}-btn`]: {
            cursor: "default",
            pointerEvents: "none",
            opacity: l,
          },
          [`&:last-child:not(:first-child):not(${o}-btn-icon-only)`]: {
            paddingInline: n,
          },
        },
      },
    };
  },
  Or = Kr,
  Er = (e) => {
    const {
        componentCls: t,
        menuCls: o,
        colorError: n,
        colorTextLightSolid: l,
      } = e,
      a = `${o}-item`;
    return {
      [`${t}, ${t}-menu-submenu`]: {
        [`${o} ${a}`]: {
          [`&${a}-danger:not(${a}-disabled)`]: {
            color: n,
            "&:hover": { color: l, backgroundColor: n },
          },
        },
      },
    };
  },
  Pr = Er,
  _r = (e) => {
    const {
      componentCls: t,
      menuCls: o,
      zIndexPopup: n,
      dropdownArrowDistance: l,
      dropdownArrowOffset: a,
      sizePopupArrow: r,
      antCls: i,
      iconCls: c,
      motionDurationMid: f,
      dropdownPaddingVertical: u,
      fontSize: d,
      dropdownEdgeChildPadding: h,
      colorTextDisabled: x,
      fontSizeIcon: b,
      controlPaddingHorizontal: p,
      colorBgElevated: s,
      boxShadowPopoverArrow: v,
    } = e;
    return [
      {
        [t]: C(C({}, $t(e)), {
          position: "absolute",
          top: -9999,
          left: { _skip_check_: !0, value: -9999 },
          zIndex: n,
          display: "block",
          "&::before": {
            position: "absolute",
            insetBlock: -l + r / 2,
            zIndex: -9999,
            opacity: 1e-4,
            content: '""',
          },
          [`${t}-wrap`]: {
            position: "relative",
            [`${i}-btn > ${c}-down`]: { fontSize: b },
            [`${c}-down::before`]: { transition: `transform ${f}` },
          },
          [`${t}-wrap-open`]: {
            [`${c}-down::before`]: { transform: "rotate(180deg)" },
          },
          [`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]: { display: "none" },
          [`
        &-show-arrow${t}-placement-topLeft,
        &-show-arrow${t}-placement-top,
        &-show-arrow${t}-placement-topRight
      `]: { paddingBottom: l },
          [`
        &-show-arrow${t}-placement-bottomLeft,
        &-show-arrow${t}-placement-bottom,
        &-show-arrow${t}-placement-bottomRight
      `]: { paddingTop: l },
          [`${t}-arrow`]: C(
            { position: "absolute", zIndex: 1, display: "block" },
            dr(r, e.borderRadiusXS, e.borderRadiusOuter, s, v)
          ),
          [`
        &-placement-top > ${t}-arrow,
        &-placement-topLeft > ${t}-arrow,
        &-placement-topRight > ${t}-arrow
      `]: { bottom: l, transform: "translateY(100%) rotate(180deg)" },
          [`&-placement-top > ${t}-arrow`]: {
            left: { _skip_check_: !0, value: "50%" },
            transform: "translateX(-50%) translateY(100%) rotate(180deg)",
          },
          [`&-placement-topLeft > ${t}-arrow`]: {
            left: { _skip_check_: !0, value: a },
          },
          [`&-placement-topRight > ${t}-arrow`]: {
            right: { _skip_check_: !0, value: a },
          },
          [`
          &-placement-bottom > ${t}-arrow,
          &-placement-bottomLeft > ${t}-arrow,
          &-placement-bottomRight > ${t}-arrow
        `]: { top: l, transform: "translateY(-100%)" },
          [`&-placement-bottom > ${t}-arrow`]: {
            left: { _skip_check_: !0, value: "50%" },
            transform: "translateY(-100%) translateX(-50%)",
          },
          [`&-placement-bottomLeft > ${t}-arrow`]: {
            left: { _skip_check_: !0, value: a },
          },
          [`&-placement-bottomRight > ${t}-arrow`]: {
            right: { _skip_check_: !0, value: a },
          },
          [`&${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomLeft,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomLeft,
          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottom,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottom,
          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomRight,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomRight`]:
            { animationName: qa },
          [`&${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topLeft,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topLeft,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-top,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-top,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topRight,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topRight`]:
            { animationName: Ja },
          [`&${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomLeft,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottom,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomRight`]:
            { animationName: Za },
          [`&${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topLeft,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-top,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topRight`]:
            { animationName: Qa },
        }),
      },
      {
        [`${t} ${o}`]: { position: "relative", margin: 0 },
        [`${o}-submenu-popup`]: {
          position: "absolute",
          zIndex: n,
          background: "transparent",
          boxShadow: "none",
          transformOrigin: "0 0",
          "ul,li": { listStyle: "none" },
          ul: { marginInline: "0.3em" },
        },
        [`${t}, ${t}-menu-submenu`]: {
          [o]: C(
            C(
              {
                padding: h,
                listStyleType: "none",
                backgroundColor: s,
                backgroundClip: "padding-box",
                borderRadius: e.borderRadiusLG,
                outline: "none",
                boxShadow: e.boxShadowSecondary,
              },
              ro(e)
            ),
            {
              [`${o}-item-group-title`]: {
                padding: `${u}px ${p}px`,
                color: e.colorTextDescription,
                transition: `all ${f}`,
              },
              [`${o}-item`]: {
                position: "relative",
                display: "flex",
                alignItems: "center",
                borderRadius: e.borderRadiusSM,
              },
              [`${o}-item-icon`]: {
                minWidth: d,
                marginInlineEnd: e.marginXS,
                fontSize: e.fontSizeSM,
              },
              [`${o}-title-content`]: {
                flex: "auto",
                "> a": {
                  color: "inherit",
                  transition: `all ${f}`,
                  "&:hover": { color: "inherit" },
                  "&::after": { position: "absolute", inset: 0, content: '""' },
                },
              },
              [`${o}-item, ${o}-submenu-title`]: C(
                C(
                  {
                    clear: "both",
                    margin: 0,
                    padding: `${u}px ${p}px`,
                    color: e.colorText,
                    fontWeight: "normal",
                    fontSize: d,
                    lineHeight: e.lineHeight,
                    cursor: "pointer",
                    transition: `all ${f}`,
                    ["&:hover, &-active"]: {
                      backgroundColor: e.controlItemBgHover,
                    },
                  },
                  ro(e)
                ),
                {
                  "&-selected": {
                    color: e.colorPrimary,
                    backgroundColor: e.controlItemBgActive,
                    "&:hover, &-active": {
                      backgroundColor: e.controlItemBgActiveHover,
                    },
                  },
                  "&-disabled": {
                    color: x,
                    cursor: "not-allowed",
                    "&:hover": {
                      color: x,
                      backgroundColor: s,
                      cursor: "not-allowed",
                    },
                    a: { pointerEvents: "none" },
                  },
                  "&-divider": {
                    height: 1,
                    margin: `${e.marginXXS}px 0`,
                    overflow: "hidden",
                    lineHeight: 0,
                    backgroundColor: e.colorSplit,
                  },
                  [`${t}-menu-submenu-expand-icon`]: {
                    position: "absolute",
                    insetInlineEnd: e.paddingXS,
                    [`${t}-menu-submenu-arrow-icon`]: {
                      marginInlineEnd: "0 !important",
                      color: e.colorTextDescription,
                      fontSize: b,
                      fontStyle: "normal",
                    },
                  },
                }
              ),
              [`${o}-item-group-list`]: {
                margin: `0 ${e.marginXS}px`,
                padding: 0,
                listStyle: "none",
              },
              [`${o}-submenu-title`]: { paddingInlineEnd: p + e.fontSizeSM },
              [`${o}-submenu-vertical`]: { position: "relative" },
              [`${o}-submenu${o}-submenu-disabled ${t}-menu-submenu-title`]: {
                [`&, ${t}-menu-submenu-arrow-icon`]: {
                  color: x,
                  backgroundColor: s,
                  cursor: "not-allowed",
                },
              },
              [`${o}-submenu-selected ${t}-menu-submenu-title`]: {
                color: e.colorPrimary,
              },
            }
          ),
        },
      },
      [
        mo(e, "slide-up"),
        mo(e, "slide-down"),
        ho(e, "move-up"),
        ho(e, "move-down"),
        fr(e, "zoom-big"),
      ],
    ];
  },
  dl = on(
    "Dropdown",
    (e, t) => {
      let { rootPrefixCls: o } = t;
      const {
          marginXXS: n,
          sizePopupArrow: l,
          controlHeight: a,
          fontSize: r,
          lineHeight: i,
          paddingXXS: c,
          componentCls: f,
          borderRadiusOuter: u,
          borderRadiusLG: d,
        } = e,
        h = (a - r * i) / 2,
        { dropdownArrowOffset: x } = cr({
          sizePopupArrow: l,
          contentRadius: d,
          borderRadiusOuter: u,
        }),
        b = ln(e, {
          menuCls: `${f}-menu`,
          rootPrefixCls: o,
          dropdownArrowDistance: l / 2 + n,
          dropdownArrowOffset: x,
          dropdownPaddingVertical: h,
          dropdownEdgeChildPadding: c,
        });
      return [_r(b), Or(b), Pr(b)];
    },
    (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 })
  );
var Tr =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
        t.indexOf(n[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
          (o[n[l]] = e[n[l]]);
    return o;
  };
const Ir = At.Group,
  tn = Ce({
    compatConfig: { MODE: 3 },
    name: "ADropdownButton",
    inheritAttrs: !1,
    __ANT_BUTTON: !0,
    props: Ot(kr(), {
      trigger: "hover",
      placement: "bottomRight",
      type: "default",
    }),
    slots: Object,
    setup(e, t) {
      let { slots: o, attrs: n, emit: l } = t;
      const a = (h) => {
          l("update:visible", h),
            l("visibleChange", h),
            l("update:open", h),
            l("openChange", h);
        },
        {
          prefixCls: r,
          direction: i,
          getPopupContainer: c,
        } = ut("dropdown", e),
        f = w(() => `${r.value}-button`),
        [u, d] = dl(r);
      return () => {
        var h, x;
        const b = C(C({}, e), n),
          {
            type: p = "default",
            disabled: s,
            danger: v,
            loading: k,
            htmlType: m,
            class: E = "",
            overlay: K = (h = o.overlay) === null || h === void 0
              ? void 0
              : h.call(o),
            trigger: F,
            align: S,
            open: _,
            visible: g,
            onVisibleChange: O,
            placement: R = i.value === "rtl" ? "bottomLeft" : "bottomRight",
            href: A,
            title: L,
            icon: ne = ((x = o.icon) === null || x === void 0
              ? void 0
              : x.call(o)) || y(ar, null, null),
            mouseEnterDelay: ae,
            mouseLeaveDelay: ue,
            overlayClassName: be,
            overlayStyle: X,
            destroyPopupOnHide: Y,
            onClick: j,
            "onUpdate:open": Z,
          } = b,
          N = Tr(b, [
            "type",
            "disabled",
            "danger",
            "loading",
            "htmlType",
            "class",
            "overlay",
            "trigger",
            "align",
            "open",
            "visible",
            "onVisibleChange",
            "placement",
            "href",
            "title",
            "icon",
            "mouseEnterDelay",
            "mouseLeaveDelay",
            "overlayClassName",
            "overlayStyle",
            "destroyPopupOnHide",
            "onClick",
            "onUpdate:open",
          ]),
          z = {
            align: S,
            disabled: s,
            trigger: s ? [] : F,
            placement: R,
            getPopupContainer: c == null ? void 0 : c.value,
            onOpenChange: a,
            mouseEnterDelay: ae,
            mouseLeaveDelay: ue,
            open: _ ?? g,
            overlayClassName: be,
            overlayStyle: X,
            destroyPopupOnHide: Y,
          },
          M = y(
            At,
            {
              danger: v,
              type: p,
              disabled: s,
              loading: k,
              onClick: j,
              htmlType: m,
              href: A,
              title: L,
            },
            { default: o.default }
          ),
          H = y(At, { danger: v, type: p, icon: ne }, null);
        return u(
          y(Ir, U(U({}, N), {}, { class: ye(f.value, E, d.value) }), {
            default: () => [
              o.leftButton ? o.leftButton({ button: M }) : M,
              y(wt, z, {
                default: () => [
                  o.rightButton ? o.rightButton({ button: H }) : H,
                ],
                overlay: () => K,
              }),
            ],
          })
        );
      };
    },
  }),
  ul = Ce({
    compatConfig: { MODE: 3 },
    name: "ADropdown",
    inheritAttrs: !1,
    props: Ot(cl(), {
      mouseEnterDelay: 0.15,
      mouseLeaveDelay: 0.1,
      placement: "bottomLeft",
      trigger: "hover",
    }),
    slots: Object,
    setup(e, t) {
      let { slots: o, attrs: n, emit: l } = t;
      const {
          prefixCls: a,
          rootPrefixCls: r,
          direction: i,
          getPopupContainer: c,
        } = ut("dropdown", e),
        [f, u] = dl(a),
        d = w(() => {
          const { placement: s = "", transitionName: v } = e;
          return v !== void 0
            ? v
            : s.includes("top")
            ? `${r.value}-slide-down`
            : `${r.value}-slide-up`;
        });
      rr({
        prefixCls: w(() => `${a.value}-menu`),
        expandIcon: w(() =>
          y("span", { class: `${a.value}-menu-submenu-arrow` }, [
            y(yo, { class: `${a.value}-menu-submenu-arrow-icon` }, null),
          ])
        ),
        mode: w(() => "vertical"),
        selectable: w(() => !1),
        onClick: () => {},
        validator: (s) => {
          ua();
        },
      });
      const h = () => {
          var s, v, k;
          const m =
              e.overlay ||
              ((s = o.overlay) === null || s === void 0 ? void 0 : s.call(o)),
            E = Array.isArray(m) ? m[0] : m;
          if (!E) return null;
          const K = E.props || {};
          tt(
            !K.mode || K.mode === "vertical",
            "Dropdown",
            `mode="${K.mode}" is not supported for Dropdown's Menu.`
          );
          const {
              selectable: F = !1,
              expandIcon: S = (k =
                (v = E.children) === null || v === void 0
                  ? void 0
                  : v.expandIcon) === null || k === void 0
                ? void 0
                : k.call(v),
            } = K,
            _ =
              typeof S < "u" && Jt(S)
                ? S
                : y("span", { class: `${a.value}-menu-submenu-arrow` }, [
                    y(
                      yo,
                      { class: `${a.value}-menu-submenu-arrow-icon` },
                      null
                    ),
                  ]);
          return Jt(E)
            ? go(E, { mode: "vertical", selectable: F, expandIcon: () => _ })
            : E;
        },
        x = w(() => {
          const s = e.placement;
          if (!s) return i.value === "rtl" ? "bottomRight" : "bottomLeft";
          if (s.includes("Center")) {
            const v = s.slice(0, s.indexOf("Center"));
            return (
              tt(
                !s.includes("Center"),
                "Dropdown",
                `You are using '${s}' placement in Dropdown, which is deprecated. Try to use '${v}' instead.`
              ),
              v
            );
          }
          return s;
        }),
        b = w(() => (typeof e.visible == "boolean" ? e.visible : e.open)),
        p = (s) => {
          l("update:visible", s),
            l("visibleChange", s),
            l("update:open", s),
            l("openChange", s);
        };
      return () => {
        var s, v;
        const { arrow: k, trigger: m, disabled: E, overlayClassName: K } = e,
          F = (s = o.default) === null || s === void 0 ? void 0 : s.call(o)[0],
          S = go(
            F,
            C(
              {
                class: ye(
                  (v = F == null ? void 0 : F.props) === null || v === void 0
                    ? void 0
                    : v.class,
                  { [`${a.value}-rtl`]: i.value === "rtl" },
                  `${a.value}-trigger`
                ),
              },
              E ? { disabled: E } : {}
            )
          ),
          _ = ye(K, u.value, { [`${a.value}-rtl`]: i.value === "rtl" }),
          g = E ? [] : m;
        let O;
        g && g.includes("contextmenu") && (O = !0);
        const R = ur({
            arrowPointAtCenter: typeof k == "object" && k.pointAtCenter,
            autoAdjustOverflow: !0,
          }),
          A = Dt(
            C(C(C({}, e), n), {
              visible: b.value,
              builtinPlacements: R,
              overlayClassName: _,
              arrow: !!k,
              alignPoint: O,
              prefixCls: a.value,
              getPopupContainer: c == null ? void 0 : c.value,
              transitionName: d.value,
              trigger: g,
              onVisibleChange: p,
              placement: x.value,
            }),
            ["overlay", "onUpdate:visible"]
          );
        return f(y(ir, A, { default: () => [S], overlay: h }));
      };
    },
  });
ul.Button = tn;
const wt = ul,
  fl = Symbol("radioGroupContextKey"),
  Rr = (e) => {
    Je(fl, e);
  },
  Dr = () => qe(fl, void 0),
  pl = Symbol("radioOptionTypeContextKey"),
  Nr = (e) => {
    Je(pl, e);
  },
  Br = () => qe(pl, void 0),
  Fr = new Qo("antRadioEffect", {
    "0%": { transform: "scale(1)", opacity: 0.5 },
    "100%": { transform: "scale(1.6)", opacity: 0 },
  }),
  Lr = (e) => {
    const { componentCls: t, antCls: o } = e,
      n = `${t}-group`;
    return {
      [n]: C(C({}, $t(e)), {
        display: "inline-block",
        fontSize: 0,
        [`&${n}-rtl`]: { direction: "rtl" },
        [`${o}-badge ${o}-badge-count`]: { zIndex: 1 },
        [`> ${o}-badge:not(:first-child) > ${o}-button-wrapper`]: {
          borderInlineStart: "none",
        },
      }),
    };
  },
  Ar = (e) => {
    const {
        componentCls: t,
        radioWrapperMarginRight: o,
        radioCheckedColor: n,
        radioSize: l,
        motionDurationSlow: a,
        motionDurationMid: r,
        motionEaseInOut: i,
        motionEaseInOutCirc: c,
        radioButtonBg: f,
        colorBorder: u,
        lineWidth: d,
        radioDotSize: h,
        colorBgContainerDisabled: x,
        colorTextDisabled: b,
        paddingXS: p,
        radioDotDisabledColor: s,
        lineType: v,
        radioDotDisabledSize: k,
        wireframe: m,
        colorWhite: E,
      } = e,
      K = `${t}-inner`;
    return {
      [`${t}-wrapper`]: C(C({}, $t(e)), {
        position: "relative",
        display: "inline-flex",
        alignItems: "baseline",
        marginInlineStart: 0,
        marginInlineEnd: o,
        cursor: "pointer",
        [`&${t}-wrapper-rtl`]: { direction: "rtl" },
        "&-disabled": { cursor: "not-allowed", color: e.colorTextDisabled },
        "&::after": {
          display: "inline-block",
          width: 0,
          overflow: "hidden",
          content: '"\\a0"',
        },
        [`${t}-checked::after`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: "100%",
          height: "100%",
          border: `${d}px ${v} ${n}`,
          borderRadius: "50%",
          visibility: "hidden",
          animationName: Fr,
          animationDuration: a,
          animationTimingFunction: i,
          animationFillMode: "both",
          content: '""',
        },
        [t]: C(C({}, $t(e)), {
          position: "relative",
          display: "inline-block",
          outline: "none",
          cursor: "pointer",
          alignSelf: "center",
        }),
        [`${t}-wrapper:hover &,
        &:hover ${K}`]: { borderColor: n },
        [`${t}-input:focus-visible + ${K}`]: C({}, Zt(e)),
        [`${t}:hover::after, ${t}-wrapper:hover &::after`]: {
          visibility: "visible",
        },
        [`${t}-inner`]: {
          "&::after": {
            boxSizing: "border-box",
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineStart: "50%",
            display: "block",
            width: l,
            height: l,
            marginBlockStart: l / -2,
            marginInlineStart: l / -2,
            backgroundColor: m ? n : E,
            borderBlockStart: 0,
            borderInlineStart: 0,
            borderRadius: l,
            transform: "scale(0)",
            opacity: 0,
            transition: `all ${a} ${c}`,
            content: '""',
          },
          boxSizing: "border-box",
          position: "relative",
          insetBlockStart: 0,
          insetInlineStart: 0,
          display: "block",
          width: l,
          height: l,
          backgroundColor: f,
          borderColor: u,
          borderStyle: "solid",
          borderWidth: d,
          borderRadius: "50%",
          transition: `all ${r}`,
        },
        [`${t}-input`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          insetBlockEnd: 0,
          insetInlineStart: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
        },
        [`${t}-checked`]: {
          [K]: {
            borderColor: n,
            backgroundColor: m ? f : n,
            "&::after": {
              transform: `scale(${h / l})`,
              opacity: 1,
              transition: `all ${a} ${c}`,
            },
          },
        },
        [`${t}-disabled`]: {
          cursor: "not-allowed",
          [K]: {
            backgroundColor: x,
            borderColor: u,
            cursor: "not-allowed",
            "&::after": { backgroundColor: s },
          },
          [`${t}-input`]: { cursor: "not-allowed" },
          [`${t}-disabled + span`]: { color: b, cursor: "not-allowed" },
          [`&${t}-checked`]: {
            [K]: { "&::after": { transform: `scale(${k / l})` } },
          },
        },
        [`span${t} + *`]: { paddingInlineStart: p, paddingInlineEnd: p },
      }),
    };
  },
  zr = (e) => {
    const {
      radioButtonColor: t,
      controlHeight: o,
      componentCls: n,
      lineWidth: l,
      lineType: a,
      colorBorder: r,
      motionDurationSlow: i,
      motionDurationMid: c,
      radioButtonPaddingHorizontal: f,
      fontSize: u,
      radioButtonBg: d,
      fontSizeLG: h,
      controlHeightLG: x,
      controlHeightSM: b,
      paddingXS: p,
      borderRadius: s,
      borderRadiusSM: v,
      borderRadiusLG: k,
      radioCheckedColor: m,
      radioButtonCheckedBg: E,
      radioButtonHoverColor: K,
      radioButtonActiveColor: F,
      radioSolidCheckedColor: S,
      colorTextDisabled: _,
      colorBgContainerDisabled: g,
      radioDisabledButtonCheckedColor: O,
      radioDisabledButtonCheckedBg: R,
    } = e;
    return {
      [`${n}-button-wrapper`]: {
        position: "relative",
        display: "inline-block",
        height: o,
        margin: 0,
        paddingInline: f,
        paddingBlock: 0,
        color: t,
        fontSize: u,
        lineHeight: `${o - l * 2}px`,
        background: d,
        border: `${l}px ${a} ${r}`,
        borderBlockStartWidth: l + 0.02,
        borderInlineStartWidth: 0,
        borderInlineEndWidth: l,
        cursor: "pointer",
        transition: [
          `color ${c}`,
          `background ${c}`,
          `border-color ${c}`,
          `box-shadow ${c}`,
        ].join(","),
        a: { color: t },
        [`> ${n}-button`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
        },
        "&:not(:first-child)": {
          "&::before": {
            position: "absolute",
            insetBlockStart: -l,
            insetInlineStart: -l,
            display: "block",
            boxSizing: "content-box",
            width: 1,
            height: "100%",
            paddingBlock: l,
            paddingInline: 0,
            backgroundColor: r,
            transition: `background-color ${i}`,
            content: '""',
          },
        },
        "&:first-child": {
          borderInlineStart: `${l}px ${a} ${r}`,
          borderStartStartRadius: s,
          borderEndStartRadius: s,
        },
        "&:last-child": { borderStartEndRadius: s, borderEndEndRadius: s },
        "&:first-child:last-child": { borderRadius: s },
        [`${n}-group-large &`]: {
          height: x,
          fontSize: h,
          lineHeight: `${x - l * 2}px`,
          "&:first-child": {
            borderStartStartRadius: k,
            borderEndStartRadius: k,
          },
          "&:last-child": { borderStartEndRadius: k, borderEndEndRadius: k },
        },
        [`${n}-group-small &`]: {
          height: b,
          paddingInline: p - l,
          paddingBlock: 0,
          lineHeight: `${b - l * 2}px`,
          "&:first-child": {
            borderStartStartRadius: v,
            borderEndStartRadius: v,
          },
          "&:last-child": { borderStartEndRadius: v, borderEndEndRadius: v },
        },
        "&:hover": { position: "relative", color: m },
        "&:has(:focus-visible)": C({}, Zt(e)),
        [`${n}-inner, input[type='checkbox'], input[type='radio']`]: {
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: "none",
        },
        [`&-checked:not(${n}-button-wrapper-disabled)`]: {
          zIndex: 1,
          color: m,
          background: E,
          borderColor: m,
          "&::before": { backgroundColor: m },
          "&:first-child": { borderColor: m },
          "&:hover": {
            color: K,
            borderColor: K,
            "&::before": { backgroundColor: K },
          },
          "&:active": {
            color: F,
            borderColor: F,
            "&::before": { backgroundColor: F },
          },
        },
        [`${n}-group-solid &-checked:not(${n}-button-wrapper-disabled)`]: {
          color: S,
          background: m,
          borderColor: m,
          "&:hover": { color: S, background: K, borderColor: K },
          "&:active": { color: S, background: F, borderColor: F },
        },
        "&-disabled": {
          color: _,
          backgroundColor: g,
          borderColor: r,
          cursor: "not-allowed",
          "&:first-child, &:hover": {
            color: _,
            backgroundColor: g,
            borderColor: r,
          },
        },
        [`&-disabled${n}-button-wrapper-checked`]: {
          color: O,
          backgroundColor: R,
          borderColor: r,
          boxShadow: "none",
        },
      },
    };
  },
  vl = on("Radio", (e) => {
    const {
        padding: t,
        lineWidth: o,
        controlItemBgActiveDisabled: n,
        colorTextDisabled: l,
        colorBgContainer: a,
        fontSizeLG: r,
        controlOutline: i,
        colorPrimaryHover: c,
        colorPrimaryActive: f,
        colorText: u,
        colorPrimary: d,
        marginXS: h,
        controlOutlineWidth: x,
        colorTextLightSolid: b,
        wireframe: p,
      } = e,
      s = `0 0 0 ${x}px ${i}`,
      v = s,
      k = r,
      m = 4,
      E = k - m * 2,
      K = p ? E : k - (m + o) * 2,
      F = d,
      S = u,
      _ = c,
      g = f,
      O = t - o,
      L = ln(e, {
        radioFocusShadow: s,
        radioButtonFocusShadow: v,
        radioSize: k,
        radioDotSize: K,
        radioDotDisabledSize: E,
        radioCheckedColor: F,
        radioDotDisabledColor: l,
        radioSolidCheckedColor: b,
        radioButtonBg: a,
        radioButtonCheckedBg: a,
        radioButtonColor: S,
        radioButtonHoverColor: _,
        radioButtonActiveColor: g,
        radioButtonPaddingHorizontal: O,
        radioDisabledButtonCheckedBg: n,
        radioDisabledButtonCheckedColor: l,
        radioWrapperMarginRight: h,
      });
    return [Lr(L), Ar(L), zr(L)];
  });
var Hr =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
        t.indexOf(n[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
          (o[n[l]] = e[n[l]]);
    return o;
  };
const ml = () => ({
    prefixCls: String,
    checked: Ke(),
    disabled: Ke(),
    isGroup: Ke(),
    value: Xe.any,
    name: String,
    id: String,
    autofocus: Ke(),
    onChange: Ee(),
    onFocus: Ee(),
    onBlur: Ee(),
    onClick: Ee(),
    "onUpdate:checked": Ee(),
    "onUpdate:value": Ee(),
  }),
  Ve = Ce({
    compatConfig: { MODE: 3 },
    name: "ARadio",
    inheritAttrs: !1,
    props: ml(),
    setup(e, t) {
      let { emit: o, expose: n, slots: l, attrs: a } = t;
      const r = al(),
        i = Xa.useInject(),
        c = Br(),
        f = Dr(),
        u = io(),
        d = w(() => {
          var _;
          return (_ = p.value) !== null && _ !== void 0 ? _ : u.value;
        }),
        h = me(),
        { prefixCls: x, direction: b, disabled: p } = ut("radio", e),
        s = w(() =>
          (f == null ? void 0 : f.optionType.value) === "button" ||
          c === "button"
            ? `${x.value}-button`
            : x.value
        ),
        v = io(),
        [k, m] = vl(x);
      n({
        focus: () => {
          h.value.focus();
        },
        blur: () => {
          h.value.blur();
        },
      });
      const F = (_) => {
          const g = _.target.checked;
          o("update:checked", g),
            o("update:value", g),
            o("change", _),
            r.onFieldChange();
        },
        S = (_) => {
          o("change", _), f && f.onChange && f.onChange(_);
        };
      return () => {
        var _;
        const g = f,
          { prefixCls: O, id: R = r.id.value } = e,
          A = Hr(e, ["prefixCls", "id"]),
          L = C(
            C(
              { prefixCls: s.value, id: R },
              Dt(A, ["onUpdate:checked", "onUpdate:value"])
            ),
            { disabled: (_ = p.value) !== null && _ !== void 0 ? _ : v.value }
          );
        g
          ? ((L.name = g.name.value),
            (L.onChange = S),
            (L.checked = e.value === g.value.value),
            (L.disabled = d.value || g.disabled.value))
          : (L.onChange = F);
        const ne = ye(
          {
            [`${s.value}-wrapper`]: !0,
            [`${s.value}-wrapper-checked`]: L.checked,
            [`${s.value}-wrapper-disabled`]: L.disabled,
            [`${s.value}-wrapper-rtl`]: b.value === "rtl",
            [`${s.value}-wrapper-in-form-item`]: i.isFormItemInput,
          },
          a.class,
          m.value
        );
        return k(
          y("label", U(U({}, a), {}, { class: ne }), [
            y(or, U(U({}, L), {}, { type: "radio", ref: h }), null),
            l.default && y("span", null, [l.default()]),
          ])
        );
      };
    },
  }),
  Mr = () => ({
    prefixCls: String,
    value: Xe.any,
    size: et(),
    options: Ye(),
    disabled: Ke(),
    name: String,
    buttonStyle: et("outline"),
    id: String,
    optionType: et("default"),
    onChange: Ee(),
    "onUpdate:value": Ee(),
  }),
  jr = Ce({
    compatConfig: { MODE: 3 },
    name: "ARadioGroup",
    inheritAttrs: !1,
    props: Mr(),
    setup(e, t) {
      let { slots: o, emit: n, attrs: l } = t;
      const a = al(),
        { prefixCls: r, direction: i, size: c } = ut("radio", e),
        [f, u] = vl(r),
        d = me(e.value),
        h = me(!1);
      return (
        Ae(
          () => e.value,
          (b) => {
            (d.value = b), (h.value = !1);
          }
        ),
        Rr({
          onChange: (b) => {
            const p = d.value,
              { value: s } = b.target;
            "value" in e || (d.value = s),
              !h.value &&
                s !== p &&
                ((h.value = !0),
                n("update:value", s),
                n("change", b),
                a.onFieldChange()),
              dt(() => {
                h.value = !1;
              });
          },
          value: d,
          disabled: w(() => e.disabled),
          name: w(() => e.name),
          optionType: w(() => e.optionType),
        }),
        () => {
          var b;
          const { options: p, buttonStyle: s, id: v = a.id.value } = e,
            k = `${r.value}-group`,
            m = ye(
              k,
              `${k}-${s}`,
              { [`${k}-${c.value}`]: c.value, [`${k}-rtl`]: i.value === "rtl" },
              l.class,
              u.value
            );
          let E = null;
          return (
            p && p.length > 0
              ? (E = p.map((K) => {
                  if (typeof K == "string" || typeof K == "number")
                    return y(
                      Ve,
                      {
                        key: K,
                        prefixCls: r.value,
                        disabled: e.disabled,
                        value: K,
                        checked: d.value === K,
                      },
                      { default: () => [K] }
                    );
                  const { value: F, disabled: S, label: _ } = K;
                  return y(
                    Ve,
                    {
                      key: `radio-group-value-options-${F}`,
                      prefixCls: r.value,
                      disabled: S || e.disabled,
                      value: F,
                      checked: d.value === F,
                    },
                    { default: () => [_] }
                  );
                }))
              : (E =
                  (b = o.default) === null || b === void 0
                    ? void 0
                    : b.call(o)),
            f(y("div", U(U({}, l), {}, { class: m, id: v }), [E]))
          );
        }
      );
    },
  }),
  Wr = Ce({
    compatConfig: { MODE: 3 },
    name: "ARadioButton",
    inheritAttrs: !1,
    props: ml(),
    setup(e, t) {
      let { slots: o, attrs: n } = t;
      const { prefixCls: l } = ut("radio", e);
      return (
        Nr("button"),
        () => {
          var a;
          return y(Ve, U(U(U({}, n), e), {}, { prefixCls: l.value }), {
            default: () => [
              (a = o.default) === null || a === void 0 ? void 0 : a.call(o),
            ],
          });
        }
      );
    },
  });
Ve.Group = jr;
Ve.Button = Wr;
Ve.install = function (e) {
  return (
    e.component(Ve.name, Ve),
    e.component(Ve.Group.name, Ve.Group),
    e.component(Ve.Button.name, Ve.Button),
    e
  );
};
const hl = Symbol("TreeContextKey"),
  Vr = Ce({
    compatConfig: { MODE: 3 },
    name: "TreeContext",
    props: { value: { type: Object } },
    setup(e, t) {
      let { slots: o } = t;
      return (
        Je(
          hl,
          w(() => e.value)
        ),
        () => {
          var n;
          return (n = o.default) === null || n === void 0 ? void 0 : n.call(o);
        }
      );
    },
  }),
  Xn = () =>
    qe(
      hl,
      w(() => ({}))
    ),
  gl = Symbol("KeysStateKey"),
  Xr = (e) => {
    Je(gl, e);
  },
  yl = () =>
    qe(gl, {
      expandedKeys: le([]),
      selectedKeys: le([]),
      loadedKeys: le([]),
      loadingKeys: le([]),
      checkedKeys: le([]),
      halfCheckedKeys: le([]),
      expandedKeysSet: w(() => new Set()),
      selectedKeysSet: w(() => new Set()),
      loadedKeysSet: w(() => new Set()),
      loadingKeysSet: w(() => new Set()),
      checkedKeysSet: w(() => new Set()),
      halfCheckedKeysSet: w(() => new Set()),
      flattenNodes: le([]),
    }),
  Gr = (e) => {
    let { prefixCls: t, level: o, isStart: n, isEnd: l } = e;
    const a = `${t}-indent-unit`,
      r = [];
    for (let i = 0; i < o; i += 1)
      r.push(
        y(
          "span",
          {
            key: i,
            class: { [a]: !0, [`${a}-start`]: n[i], [`${a}-end`]: l[i] },
          },
          null
        )
      );
    return y("span", { "aria-hidden": "true", class: `${t}-indent` }, [r]);
  },
  Ur = Gr,
  bl = {
    eventKey: [String, Number],
    prefixCls: String,
    title: Xe.any,
    data: { type: Object, default: void 0 },
    parent: { type: Object, default: void 0 },
    isStart: { type: Array },
    isEnd: { type: Array },
    active: { type: Boolean, default: void 0 },
    onMousemove: { type: Function },
    isLeaf: { type: Boolean, default: void 0 },
    checkable: { type: Boolean, default: void 0 },
    selectable: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    disableCheckbox: { type: Boolean, default: void 0 },
    icon: Xe.any,
    switcherIcon: Xe.any,
    domRef: { type: Function },
  },
  Yr = {
    prefixCls: { type: String },
    motion: { type: Object },
    focusable: { type: Boolean },
    activeItem: { type: Object },
    focused: { type: Boolean },
    tabindex: { type: Number },
    checkable: { type: Boolean },
    selectable: { type: Boolean },
    disabled: { type: Boolean },
    height: { type: Number },
    itemHeight: { type: Number },
    virtual: { type: Boolean },
    onScroll: { type: Function },
    onKeydown: { type: Function },
    onFocus: { type: Function },
    onBlur: { type: Function },
    onActiveChange: { type: Function },
    onContextmenu: { type: Function },
    onListChangeStart: { type: Function },
    onListChangeEnd: { type: Function },
  },
  xl = () => ({
    prefixCls: String,
    focusable: { type: Boolean, default: void 0 },
    activeKey: [Number, String],
    tabindex: Number,
    children: Xe.any,
    treeData: { type: Array },
    fieldNames: { type: Object },
    showLine: { type: [Boolean, Object], default: void 0 },
    showIcon: { type: Boolean, default: void 0 },
    icon: Xe.any,
    selectable: { type: Boolean, default: void 0 },
    expandAction: [String, Boolean],
    disabled: { type: Boolean, default: void 0 },
    multiple: { type: Boolean, default: void 0 },
    checkable: { type: Boolean, default: void 0 },
    checkStrictly: { type: Boolean, default: void 0 },
    draggable: { type: [Function, Boolean] },
    defaultExpandParent: { type: Boolean, default: void 0 },
    autoExpandParent: { type: Boolean, default: void 0 },
    defaultExpandAll: { type: Boolean, default: void 0 },
    defaultExpandedKeys: { type: Array },
    expandedKeys: { type: Array },
    defaultCheckedKeys: { type: Array },
    checkedKeys: { type: [Object, Array] },
    defaultSelectedKeys: { type: Array },
    selectedKeys: { type: Array },
    allowDrop: { type: Function },
    dropIndicatorRender: { type: Function },
    onFocus: { type: Function },
    onBlur: { type: Function },
    onKeydown: { type: Function },
    onContextmenu: { type: Function },
    onClick: { type: Function },
    onDblclick: { type: Function },
    onScroll: { type: Function },
    onExpand: { type: Function },
    onCheck: { type: Function },
    onSelect: { type: Function },
    onLoad: { type: Function },
    loadData: { type: Function },
    loadedKeys: { type: Array },
    onMouseenter: { type: Function },
    onMouseleave: { type: Function },
    onRightClick: { type: Function },
    onDragstart: { type: Function },
    onDragenter: { type: Function },
    onDragover: { type: Function },
    onDragleave: { type: Function },
    onDragend: { type: Function },
    onDrop: { type: Function },
    onActiveChange: { type: Function },
    filterTreeNode: { type: Function },
    motion: Xe.any,
    switcherIcon: Xe.any,
    height: Number,
    itemHeight: Number,
    virtual: { type: Boolean, default: void 0 },
    direction: { type: String },
    rootClassName: String,
    rootStyle: Object,
  });
var qr =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
        t.indexOf(n[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
          (o[n[l]] = e[n[l]]);
    return o;
  };
const bo = "open",
  xo = "close",
  Jr = "---",
  Kn = Ce({
    compatConfig: { MODE: 3 },
    name: "ATreeNode",
    inheritAttrs: !1,
    props: bl,
    isTreeNode: 1,
    setup(e, t) {
      let { attrs: o, slots: n, expose: l } = t;
      ll(
        !("slots" in e.data),
        `treeData slots is deprecated, please use ${Object.keys(
          e.data.slots || {}
        ).map((P) => "`v-slot:" + P + "` ")}instead`
      );
      const a = le(!1),
        r = Xn(),
        {
          expandedKeysSet: i,
          selectedKeysSet: c,
          loadedKeysSet: f,
          loadingKeysSet: u,
          checkedKeysSet: d,
          halfCheckedKeysSet: h,
        } = yl(),
        { dragOverNodeKey: x, dropPosition: b, keyEntities: p } = r.value,
        s = w(() =>
          Gt(e.eventKey, {
            expandedKeysSet: i.value,
            selectedKeysSet: c.value,
            loadedKeysSet: f.value,
            loadingKeysSet: u.value,
            checkedKeysSet: d.value,
            halfCheckedKeysSet: h.value,
            dragOverNodeKey: x,
            dropPosition: b,
            keyEntities: p,
          })
        ),
        v = Qe(() => s.value.expanded),
        k = Qe(() => s.value.selected),
        m = Qe(() => s.value.checked),
        E = Qe(() => s.value.loaded),
        K = Qe(() => s.value.loading),
        F = Qe(() => s.value.halfChecked),
        S = Qe(() => s.value.dragOver),
        _ = Qe(() => s.value.dragOverGapTop),
        g = Qe(() => s.value.dragOverGapBottom),
        O = Qe(() => s.value.pos),
        R = le(),
        A = w(() => {
          const { eventKey: P } = e,
            { keyEntities: $ } = r.value,
            { children: I } = $[P] || {};
          return !!(I || []).length;
        }),
        L = w(() => {
          const { isLeaf: P } = e,
            { loadData: $ } = r.value,
            I = A.value;
          return P === !1 ? !1 : P || (!$ && !I) || ($ && E.value && !I);
        }),
        ne = w(() => (L.value ? null : v.value ? bo : xo)),
        ae = w(() => {
          const { disabled: P } = e,
            { disabled: $ } = r.value;
          return !!($ || P);
        }),
        ue = w(() => {
          const { checkable: P } = e,
            { checkable: $ } = r.value;
          return !$ || P === !1 ? !1 : $;
        }),
        be = w(() => {
          const { selectable: P } = e,
            { selectable: $ } = r.value;
          return typeof P == "boolean" ? P : $;
        }),
        X = w(() => {
          const {
            data: P,
            active: $,
            checkable: I,
            disableCheckbox: ee,
            disabled: fe,
            selectable: Se,
          } = e;
          return C(
            C(
              {
                active: $,
                checkable: I,
                disableCheckbox: ee,
                disabled: fe,
                selectable: Se,
              },
              P
            ),
            {
              dataRef: P,
              data: P,
              isLeaf: L.value,
              checked: m.value,
              expanded: v.value,
              loading: K.value,
              selected: k.value,
              halfChecked: F.value,
            }
          );
        }),
        Y = nl(),
        j = w(() => {
          const { eventKey: P } = e,
            { keyEntities: $ } = r.value,
            { parent: I } = $[P] || {};
          return C(C({}, Ut(C({}, e, s.value))), { parent: I });
        }),
        Z = ht({
          eventData: j,
          eventKey: w(() => e.eventKey),
          selectHandle: R,
          pos: O,
          key: Y.vnode.key,
        });
      l(Z);
      const N = (P) => {
          const { onNodeDoubleClick: $ } = r.value;
          $(P, j.value);
        },
        z = (P) => {
          if (ae.value) return;
          const { onNodeSelect: $ } = r.value;
          P.preventDefault(), $(P, j.value);
        },
        M = (P) => {
          if (ae.value) return;
          const { disableCheckbox: $ } = e,
            { onNodeCheck: I } = r.value;
          if (!ue.value || $) return;
          P.preventDefault();
          const ee = !m.value;
          I(P, j.value, ee);
        },
        H = (P) => {
          const { onNodeClick: $ } = r.value;
          $(P, j.value), be.value ? z(P) : M(P);
        },
        J = (P) => {
          const { onNodeMouseEnter: $ } = r.value;
          $(P, j.value);
        },
        Q = (P) => {
          const { onNodeMouseLeave: $ } = r.value;
          $(P, j.value);
        },
        _e = (P) => {
          const { onNodeContextMenu: $ } = r.value;
          $(P, j.value);
        },
        Oe = (P) => {
          const { onNodeDragStart: $ } = r.value;
          P.stopPropagation(), (a.value = !0), $(P, Z);
          try {
            P.dataTransfer.setData("text/plain", "");
          } catch {}
        },
        Pe = (P) => {
          const { onNodeDragEnter: $ } = r.value;
          P.preventDefault(), P.stopPropagation(), $(P, Z);
        },
        Te = (P) => {
          const { onNodeDragOver: $ } = r.value;
          P.preventDefault(), P.stopPropagation(), $(P, Z);
        },
        De = (P) => {
          const { onNodeDragLeave: $ } = r.value;
          P.stopPropagation(), $(P, Z);
        },
        Me = (P) => {
          const { onNodeDragEnd: $ } = r.value;
          P.stopPropagation(), (a.value = !1), $(P, Z);
        },
        Re = (P) => {
          const { onNodeDrop: $ } = r.value;
          P.preventDefault(), P.stopPropagation(), (a.value = !1), $(P, Z);
        },
        Ie = (P) => {
          const { onNodeExpand: $ } = r.value;
          K.value || $(P, j.value);
        },
        V = () => {
          const { data: P } = e,
            { draggable: $ } = r.value;
          return !!($ && (!$.nodeDraggable || $.nodeDraggable(P)));
        },
        ie = () => {
          const { draggable: P, prefixCls: $ } = r.value;
          return P && P != null && P.icon
            ? y("span", { class: `${$}-draggable-icon` }, [P.icon])
            : null;
        },
        q = () => {
          var P, $, I;
          const {
              switcherIcon: ee = n.switcherIcon ||
                ((P = r.value.slots) === null || P === void 0
                  ? void 0
                  : P[
                      (I =
                        ($ = e.data) === null || $ === void 0
                          ? void 0
                          : $.slots) === null || I === void 0
                        ? void 0
                        : I.switcherIcon
                    ]),
            } = e,
            { switcherIcon: fe } = r.value,
            Se = ee || fe;
          return typeof Se == "function" ? Se(X.value) : Se;
        },
        re = () => {
          const { loadData: P, onNodeLoad: $ } = r.value;
          K.value ||
            (P && v.value && !L.value && !A.value && !E.value && $(j.value));
        };
      gt(() => {
        re();
      }),
        Wn(() => {
          re();
        });
      const ce = () => {
          const { prefixCls: P } = r.value,
            $ = q();
          if (L.value)
            return $ !== !1
              ? y(
                  "span",
                  { class: ye(`${P}-switcher`, `${P}-switcher-noop`) },
                  [$]
                )
              : null;
          const I = ye(`${P}-switcher`, `${P}-switcher_${v.value ? bo : xo}`);
          return $ !== !1 ? y("span", { onClick: Ie, class: I }, [$]) : null;
        },
        we = () => {
          var P, $;
          const { disableCheckbox: I } = e,
            { prefixCls: ee } = r.value,
            fe = ae.value;
          return ue.value
            ? y(
                "span",
                {
                  class: ye(
                    `${ee}-checkbox`,
                    m.value && `${ee}-checkbox-checked`,
                    !m.value && F.value && `${ee}-checkbox-indeterminate`,
                    (fe || I) && `${ee}-checkbox-disabled`
                  ),
                  onClick: M,
                },
                [
                  ($ = (P = r.value).customCheckable) === null || $ === void 0
                    ? void 0
                    : $.call(P),
                ]
              )
            : null;
        },
        se = () => {
          const { prefixCls: P } = r.value;
          return y(
            "span",
            {
              class: ye(
                `${P}-iconEle`,
                `${P}-icon__${ne.value || "docu"}`,
                K.value && `${P}-icon_loading`
              ),
            },
            null
          );
        },
        pe = () => {
          const { disabled: P, eventKey: $ } = e,
            {
              draggable: I,
              dropLevelOffset: ee,
              dropPosition: fe,
              prefixCls: Se,
              indent: T,
              dropIndicatorRender: D,
              dragOverNodeKey: B,
              direction: W,
            } = r.value;
          return !P && I !== !1 && B === $
            ? D({
                dropPosition: fe,
                dropLevelOffset: ee,
                indent: T,
                prefixCls: Se,
                direction: W,
              })
            : null;
        },
        ke = () => {
          var P, $, I, ee, fe, Se;
          const { icon: T = n.icon, data: D } = e,
            B =
              n.title ||
              ((P = r.value.slots) === null || P === void 0
                ? void 0
                : P[
                    (I =
                      ($ = e.data) === null || $ === void 0
                        ? void 0
                        : $.slots) === null || I === void 0
                      ? void 0
                      : I.title
                  ]) ||
              ((ee = r.value.slots) === null || ee === void 0
                ? void 0
                : ee.title) ||
              e.title,
            { prefixCls: W, showIcon: te, icon: oe, loadData: G } = r.value,
            he = ae.value,
            $e = `${W}-node-content-wrapper`;
          let ve;
          if (te) {
            const ze =
              T ||
              ((fe = r.value.slots) === null || fe === void 0
                ? void 0
                : fe[
                    (Se = D == null ? void 0 : D.slots) === null ||
                    Se === void 0
                      ? void 0
                      : Se.icon
                  ]) ||
              oe;
            ve = ze
              ? y(
                  "span",
                  { class: ye(`${W}-iconEle`, `${W}-icon__customize`) },
                  [typeof ze == "function" ? ze(X.value) : ze]
                )
              : se();
          } else G && K.value && (ve = se());
          let ge;
          typeof B == "function" ? (ge = B(X.value)) : (ge = B),
            (ge = ge === void 0 ? Jr : ge);
          const xe = y("span", { class: `${W}-title` }, [ge]);
          return y(
            "span",
            {
              ref: R,
              title: typeof B == "string" ? B : "",
              class: ye(
                `${$e}`,
                `${$e}-${ne.value || "normal"}`,
                !he && (k.value || a.value) && `${W}-node-selected`
              ),
              onMouseenter: J,
              onMouseleave: Q,
              onContextmenu: _e,
              onClick: H,
              onDblclick: N,
            },
            [ve, xe, pe()]
          );
        };
      return () => {
        const P = C(C({}, e), o),
          {
            eventKey: $,
            isLeaf: I,
            isStart: ee,
            isEnd: fe,
            domRef: Se,
            active: T,
            data: D,
            onMousemove: B,
            selectable: W,
          } = P,
          te = qr(P, [
            "eventKey",
            "isLeaf",
            "isStart",
            "isEnd",
            "domRef",
            "active",
            "data",
            "onMousemove",
            "selectable",
          ]),
          {
            prefixCls: oe,
            filterTreeNode: G,
            keyEntities: he,
            dropContainerKey: $e,
            dropTargetKey: ve,
            draggingNodeKey: ge,
          } = r.value,
          xe = ae.value,
          ze = Vn(te, { aria: !0, data: !0 }),
          { level: je } = he[$] || {},
          We = fe[fe.length - 1],
          Be = V(),
          nt = !xe && Be,
          ft = ge === $,
          yt = W !== void 0 ? { "aria-selected": !!W } : void 0;
        return y(
          "div",
          U(
            U(
              {
                ref: Se,
                class: ye(o.class, `${oe}-treenode`, {
                  [`${oe}-treenode-disabled`]: xe,
                  [`${oe}-treenode-switcher-${v.value ? "open" : "close"}`]: !I,
                  [`${oe}-treenode-checkbox-checked`]: m.value,
                  [`${oe}-treenode-checkbox-indeterminate`]: F.value,
                  [`${oe}-treenode-selected`]: k.value,
                  [`${oe}-treenode-loading`]: K.value,
                  [`${oe}-treenode-active`]: T,
                  [`${oe}-treenode-leaf-last`]: We,
                  [`${oe}-treenode-draggable`]: nt,
                  dragging: ft,
                  "drop-target": ve === $,
                  "drop-container": $e === $,
                  "drag-over": !xe && S.value,
                  "drag-over-gap-top": !xe && _.value,
                  "drag-over-gap-bottom": !xe && g.value,
                  "filter-node": G && G(j.value),
                }),
                style: o.style,
                draggable: nt,
                "aria-grabbed": ft,
                onDragstart: nt ? Oe : void 0,
                onDragenter: Be ? Pe : void 0,
                onDragover: Be ? Te : void 0,
                onDragleave: Be ? De : void 0,
                onDrop: Be ? Re : void 0,
                onDragend: Be ? Me : void 0,
                onMousemove: B,
              },
              yt
            ),
            ze
          ),
          [
            y(Ur, { prefixCls: oe, level: je, isStart: ee, isEnd: fe }, null),
            ie(),
            ce(),
            we(),
            ke(),
          ]
        );
      };
    },
  });
globalThis && globalThis.__rest;
function ot(e, t) {
  if (!e) return [];
  const o = e.slice(),
    n = o.indexOf(t);
  return n >= 0 && o.splice(n, 1), o;
}
function it(e, t) {
  const o = (e || []).slice();
  return o.indexOf(t) === -1 && o.push(t), o;
}
function Gn(e) {
  return e.split("-");
}
function Cl(e, t) {
  return `${e}-${t}`;
}
function Zr(e) {
  return e && e.type && e.type.isTreeNode;
}
function Qr(e, t) {
  const o = [],
    n = t[e];
  function l() {
    (arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : []
    ).forEach((r) => {
      let { key: i, children: c } = r;
      o.push(i), l(c);
    });
  }
  return l(n.children), o;
}
function ei(e) {
  if (e.parent) {
    const t = Gn(e.pos);
    return Number(t[t.length - 1]) === e.parent.children.length - 1;
  }
  return !1;
}
function ti(e) {
  const t = Gn(e.pos);
  return Number(t[t.length - 1]) === 0;
}
function Co(e, t, o, n, l, a, r, i, c, f) {
  var u;
  const { clientX: d, clientY: h } = e,
    { top: x, height: b } = e.target.getBoundingClientRect(),
    s =
      ((f === "rtl" ? -1 : 1) * (((l == null ? void 0 : l.x) || 0) - d) - 12) /
      n;
  let v = i[o.eventKey];
  if (h < x + b / 2) {
    const O = r.findIndex((L) => L.key === v.key),
      R = O <= 0 ? 0 : O - 1,
      A = r[R].key;
    v = i[A];
  }
  const k = v.key,
    m = v,
    E = v.key;
  let K = 0,
    F = 0;
  if (!c.has(k))
    for (let O = 0; O < s && ei(v); O += 1) (v = v.parent), (F += 1);
  const S = t.eventData,
    _ = v.node;
  let g = !0;
  return (
    ti(v) &&
    v.level === 0 &&
    h < x + b / 2 &&
    a({ dragNode: S, dropNode: _, dropPosition: -1 }) &&
    v.key === o.eventKey
      ? (K = -1)
      : (m.children || []).length && c.has(E)
      ? a({ dragNode: S, dropNode: _, dropPosition: 0 })
        ? (K = 0)
        : (g = !1)
      : F === 0
      ? s > -1.5
        ? a({ dragNode: S, dropNode: _, dropPosition: 1 })
          ? (K = 1)
          : (g = !1)
        : a({ dragNode: S, dropNode: _, dropPosition: 0 })
        ? (K = 0)
        : a({ dragNode: S, dropNode: _, dropPosition: 1 })
        ? (K = 1)
        : (g = !1)
      : a({ dragNode: S, dropNode: _, dropPosition: 1 })
      ? (K = 1)
      : (g = !1),
    {
      dropPosition: K,
      dropLevelOffset: F,
      dropTargetKey: v.key,
      dropTargetPos: v.pos,
      dragOverNodeKey: E,
      dropContainerKey:
        K === 0
          ? null
          : ((u = v.parent) === null || u === void 0 ? void 0 : u.key) || null,
      dropAllowed: g,
    }
  );
}
function So(e, t) {
  if (!e) return;
  const { multiple: o } = t;
  return o ? e.slice() : e.length ? [e[0]] : e;
}
function hn(e) {
  if (!e) return null;
  let t;
  if (Array.isArray(e)) t = { checkedKeys: e, halfCheckedKeys: void 0 };
  else if (typeof e == "object")
    t = {
      checkedKeys: e.checked || void 0,
      halfCheckedKeys: e.halfChecked || void 0,
    };
  else return null;
  return t;
}
function On(e, t) {
  const o = new Set();
  function n(l) {
    if (o.has(l)) return;
    const a = t[l];
    if (!a) return;
    o.add(l);
    const { parent: r, node: i } = a;
    i.disabled || (r && n(r.key));
  }
  return (
    (e || []).forEach((l) => {
      n(l);
    }),
    [...o]
  );
}
var ni =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
        t.indexOf(n[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
          (o[n[l]] = e[n[l]]);
    return o;
  };
function zt(e, t) {
  return e ?? t;
}
function rn(e) {
  const { title: t, _title: o, key: n, children: l } = e || {},
    a = t || "title";
  return {
    title: a,
    _title: o || [a],
    key: n || "key",
    children: l || "children",
  };
}
function En(e) {
  function t() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return Lt(o).map((l) => {
      var a, r, i, c;
      if (!Zr(l)) return null;
      const f = l.children || {},
        u = l.key,
        d = {};
      for (const [O, R] of Object.entries(l.props)) d[el(O)] = R;
      const {
          isLeaf: h,
          checkable: x,
          selectable: b,
          disabled: p,
          disableCheckbox: s,
        } = d,
        v = {
          isLeaf: h || h === "" || void 0,
          checkable: x || x === "" || void 0,
          selectable: b || b === "" || void 0,
          disabled: p || p === "" || void 0,
          disableCheckbox: s || s === "" || void 0,
        },
        k = C(C({}, d), v),
        {
          title: m = (a = f.title) === null || a === void 0
            ? void 0
            : a.call(f, k),
          icon: E = (r = f.icon) === null || r === void 0
            ? void 0
            : r.call(f, k),
          switcherIcon: K = (i = f.switcherIcon) === null || i === void 0
            ? void 0
            : i.call(f, k),
        } = d,
        F = ni(d, ["title", "icon", "switcherIcon"]),
        S = (c = f.default) === null || c === void 0 ? void 0 : c.call(f),
        _ = C(
          C(C({}, F), {
            title: m,
            icon: E,
            switcherIcon: K,
            key: u,
            isLeaf: h,
          }),
          v
        ),
        g = t(S);
      return g.length && (_.children = g), _;
    });
  }
  return t(e);
}
function oi(e, t, o) {
  const { _title: n, key: l, children: a } = rn(o),
    r = new Set(t === !0 ? [] : t),
    i = [];
  function c(f) {
    let u =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return f.map((d, h) => {
      const x = Cl(u ? u.pos : "0", h),
        b = zt(d[l], x);
      let p;
      for (let v = 0; v < n.length; v += 1) {
        const k = n[v];
        if (d[k] !== void 0) {
          p = d[k];
          break;
        }
      }
      const s = C(C({}, Dt(d, [...n, l, a])), {
        title: p,
        key: b,
        parent: u,
        pos: x,
        children: null,
        data: d,
        isStart: [...(u ? u.isStart : []), h === 0],
        isEnd: [...(u ? u.isEnd : []), h === f.length - 1],
      });
      return (
        i.push(s),
        t === !0 || r.has(b)
          ? (s.children = c(d[a] || [], s))
          : (s.children = []),
        s
      );
    });
  }
  return c(e), i;
}
function li(e, t, o) {
  let n = {};
  typeof o == "object" ? (n = o) : (n = { externalGetKey: o }), (n = n || {});
  const { childrenPropName: l, externalGetKey: a, fieldNames: r } = n,
    { key: i, children: c } = rn(r),
    f = l || c;
  let u;
  a
    ? typeof a == "string"
      ? (u = (h) => h[a])
      : typeof a == "function" && (u = (h) => a(h))
    : (u = (h, x) => zt(h[i], x));
  function d(h, x, b, p) {
    const s = h ? h[f] : e,
      v = h ? Cl(b.pos, x) : "0",
      k = h ? [...p, h] : [];
    if (h) {
      const m = u(h, v),
        E = {
          node: h,
          index: x,
          pos: v,
          key: m,
          parentPos: b.node ? b.pos : null,
          level: b.level + 1,
          nodes: k,
        };
      t(E);
    }
    s &&
      s.forEach((m, E) => {
        d(m, E, { node: h, pos: v, level: b ? b.level + 1 : -1 }, k);
      });
  }
  d(null);
}
function Un(e) {
  let {
      initWrapper: t,
      processEntity: o,
      onProcessFinished: n,
      externalGetKey: l,
      childrenPropName: a,
      fieldNames: r,
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    i = arguments.length > 2 ? arguments[2] : void 0;
  const c = l || i,
    f = {},
    u = {};
  let d = { posEntities: f, keyEntities: u };
  return (
    t && (d = t(d) || d),
    li(
      e,
      (h) => {
        const {
            node: x,
            index: b,
            pos: p,
            key: s,
            parentPos: v,
            level: k,
            nodes: m,
          } = h,
          E = { node: x, nodes: m, index: b, key: s, pos: p, level: k },
          K = zt(s, p);
        (f[p] = E),
          (u[K] = E),
          (E.parent = f[v]),
          E.parent &&
            ((E.parent.children = E.parent.children || []),
            E.parent.children.push(E)),
          o && o(E, d);
      },
      { externalGetKey: c, childrenPropName: a, fieldNames: r }
    ),
    n && n(d),
    d
  );
}
function Gt(e, t) {
  let {
    expandedKeysSet: o,
    selectedKeysSet: n,
    loadedKeysSet: l,
    loadingKeysSet: a,
    checkedKeysSet: r,
    halfCheckedKeysSet: i,
    dragOverNodeKey: c,
    dropPosition: f,
    keyEntities: u,
  } = t;
  const d = u[e];
  return {
    eventKey: e,
    expanded: o.has(e),
    selected: n.has(e),
    loaded: l.has(e),
    loading: a.has(e),
    checked: r.has(e),
    halfChecked: i.has(e),
    pos: String(d ? d.pos : ""),
    parent: d.parent,
    dragOver: c === e && f === 0,
    dragOverGapTop: c === e && f === -1,
    dragOverGapBottom: c === e && f === 1,
  };
}
function Ut(e) {
  const {
      data: t,
      expanded: o,
      selected: n,
      checked: l,
      loaded: a,
      loading: r,
      halfChecked: i,
      dragOver: c,
      dragOverGapTop: f,
      dragOverGapBottom: u,
      pos: d,
      active: h,
      eventKey: x,
    } = e,
    b = C(C({ dataRef: t }, t), {
      expanded: o,
      selected: n,
      checked: l,
      loaded: a,
      loading: r,
      halfChecked: i,
      dragOver: c,
      dragOverGapTop: f,
      dragOverGapBottom: u,
      pos: d,
      active: h,
      eventKey: x,
      key: x,
    });
  return (
    "props" in b ||
      Object.defineProperty(b, "props", {
        get() {
          return e;
        },
      }),
    b
  );
}
function Sl(e, t) {
  const o = new Set();
  return (
    e.forEach((n) => {
      t.has(n) || o.add(n);
    }),
    o
  );
}
function ai(e) {
  const { disabled: t, disableCheckbox: o, checkable: n } = e || {};
  return !!(t || o) || n === !1;
}
function ri(e, t, o, n) {
  const l = new Set(e),
    a = new Set();
  for (let i = 0; i <= o; i += 1)
    (t.get(i) || new Set()).forEach((f) => {
      const { key: u, node: d, children: h = [] } = f;
      l.has(u) &&
        !n(d) &&
        h
          .filter((x) => !n(x.node))
          .forEach((x) => {
            l.add(x.key);
          });
    });
  const r = new Set();
  for (let i = o; i >= 0; i -= 1)
    (t.get(i) || new Set()).forEach((f) => {
      const { parent: u, node: d } = f;
      if (n(d) || !f.parent || r.has(f.parent.key)) return;
      if (n(f.parent.node)) {
        r.add(u.key);
        return;
      }
      let h = !0,
        x = !1;
      (u.children || [])
        .filter((b) => !n(b.node))
        .forEach((b) => {
          let { key: p } = b;
          const s = l.has(p);
          h && !s && (h = !1), !x && (s || a.has(p)) && (x = !0);
        }),
        h && l.add(u.key),
        x && a.add(u.key),
        r.add(u.key);
    });
  return { checkedKeys: Array.from(l), halfCheckedKeys: Array.from(Sl(a, l)) };
}
function ii(e, t, o, n, l) {
  const a = new Set(e);
  let r = new Set(t);
  for (let c = 0; c <= n; c += 1)
    (o.get(c) || new Set()).forEach((u) => {
      const { key: d, node: h, children: x = [] } = u;
      !a.has(d) &&
        !r.has(d) &&
        !l(h) &&
        x
          .filter((b) => !l(b.node))
          .forEach((b) => {
            a.delete(b.key);
          });
    });
  r = new Set();
  const i = new Set();
  for (let c = n; c >= 0; c -= 1)
    (o.get(c) || new Set()).forEach((u) => {
      const { parent: d, node: h } = u;
      if (l(h) || !u.parent || i.has(u.parent.key)) return;
      if (l(u.parent.node)) {
        i.add(d.key);
        return;
      }
      let x = !0,
        b = !1;
      (d.children || [])
        .filter((p) => !l(p.node))
        .forEach((p) => {
          let { key: s } = p;
          const v = a.has(s);
          x && !v && (x = !1), !b && (v || r.has(s)) && (b = !0);
        }),
        x || a.delete(d.key),
        b && r.add(d.key),
        i.add(d.key);
    });
  return { checkedKeys: Array.from(a), halfCheckedKeys: Array.from(Sl(r, a)) };
}
function It(e, t, o, n, l, a) {
  let r;
  a ? (r = a) : (r = ai);
  const i = new Set(e.filter((f) => !!o[f]));
  let c;
  return (
    t === !0 ? (c = ri(i, l, n, r)) : (c = ii(i, t.halfCheckedKeys, l, n, r)), c
  );
}
function wl(e) {
  const t = me(0),
    o = le();
  return (
    Le(() => {
      const n = new Map();
      let l = 0;
      const a = e.value || {};
      for (const r in a)
        if (Object.prototype.hasOwnProperty.call(a, r)) {
          const i = a[r],
            { level: c } = i;
          let f = n.get(c);
          f || ((f = new Set()), n.set(c, f)), f.add(i), (l = Math.max(l, c));
        }
      (t.value = l), (o.value = n);
    }),
    { maxLevel: t, levelEntities: o }
  );
}
var si = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z",
        },
      },
    ],
  },
  name: "caret-down",
  theme: "outlined",
};
const ci = si;
function wo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {},
      n = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (l) {
          return Object.getOwnPropertyDescriptor(o, l).enumerable;
        })
      )),
      n.forEach(function (l) {
        di(e, l, o[l]);
      });
  }
  return e;
}
function di(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var Yn = function (t, o) {
  var n = wo({}, t, o.attrs);
  return y(Et, wo({}, n, { icon: ci }), null);
};
Yn.displayName = "CaretDownOutlined";
Yn.inheritAttrs = !1;
const ui = Yn;
var fi = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z",
        },
      },
    ],
  },
  name: "file",
  theme: "outlined",
};
const pi = fi;
function $o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {},
      n = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (l) {
          return Object.getOwnPropertyDescriptor(o, l).enumerable;
        })
      )),
      n.forEach(function (l) {
        vi(e, l, o[l]);
      });
  }
  return e;
}
function vi(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var qn = function (t, o) {
  var n = $o({}, t, o.attrs);
  return y(Et, $o({}, n, { icon: pi }), null);
};
qn.displayName = "FileOutlined";
qn.inheritAttrs = !1;
const $l = qn;
var mi = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z",
        },
      },
    ],
  },
  name: "filter",
  theme: "filled",
};
const hi = mi;
function ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {},
      n = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (l) {
          return Object.getOwnPropertyDescriptor(o, l).enumerable;
        })
      )),
      n.forEach(function (l) {
        gi(e, l, o[l]);
      });
  }
  return e;
}
function gi(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var Jn = function (t, o) {
  var n = ko({}, t, o.attrs);
  return y(Et, ko({}, n, { icon: hi }), null);
};
Jn.displayName = "FilterFilled";
Jn.inheritAttrs = !1;
const yi = Jn;
var bi = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z",
        },
      },
    ],
  },
  name: "folder-open",
  theme: "outlined",
};
const xi = bi;
function Ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {},
      n = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (l) {
          return Object.getOwnPropertyDescriptor(o, l).enumerable;
        })
      )),
      n.forEach(function (l) {
        Ci(e, l, o[l]);
      });
  }
  return e;
}
function Ci(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var Zn = function (t, o) {
  var n = Ko({}, t, o.attrs);
  return y(Et, Ko({}, n, { icon: xi }), null);
};
Zn.displayName = "FolderOpenOutlined";
Zn.inheritAttrs = !1;
const Si = Zn;
var wi = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z",
        },
      },
    ],
  },
  name: "folder",
  theme: "outlined",
};
const $i = wi;
function Oo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {},
      n = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (l) {
          return Object.getOwnPropertyDescriptor(o, l).enumerable;
        })
      )),
      n.forEach(function (l) {
        ki(e, l, o[l]);
      });
  }
  return e;
}
function ki(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var Qn = function (t, o) {
  var n = Oo({}, t, o.attrs);
  return y(Et, Oo({}, n, { icon: $i }), null);
};
Qn.displayName = "FolderOutlined";
Qn.inheritAttrs = !1;
const Ki = Qn;
var Oi = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
        },
      },
    ],
  },
  name: "minus-square",
  theme: "outlined",
};
const Ei = Oi;
function Eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {},
      n = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (l) {
          return Object.getOwnPropertyDescriptor(o, l).enumerable;
        })
      )),
      n.forEach(function (l) {
        Pi(e, l, o[l]);
      });
  }
  return e;
}
function Pi(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var eo = function (t, o) {
  var n = Eo({}, t, o.attrs);
  return y(Et, Eo({}, n, { icon: Ei }), null);
};
eo.displayName = "MinusSquareOutlined";
eo.inheritAttrs = !1;
const _i = eo;
var Ti = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
        },
      },
    ],
  },
  name: "plus-square",
  theme: "outlined",
};
const Ii = Ti;
function Po(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? Object(arguments[t]) : {},
      n = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (l) {
          return Object.getOwnPropertyDescriptor(o, l).enumerable;
        })
      )),
      n.forEach(function (l) {
        Ri(e, l, o[l]);
      });
  }
  return e;
}
function Ri(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var to = function (t, o) {
  var n = Po({}, t, o.attrs);
  return y(Et, Po({}, n, { icon: Ii }), null);
};
to.displayName = "PlusSquareOutlined";
to.inheritAttrs = !1;
const Di = to;
wt.Button = tn;
wt.install = function (e) {
  return e.component(wt.name, wt), e.component(tn.name, tn), e;
};
function _o(e) {
  const t = e.getBoundingClientRect(),
    o = document.documentElement;
  return {
    left:
      t.left +
      (window.pageXOffset || o.scrollLeft) -
      (o.clientLeft || document.body.clientLeft || 0),
    top:
      t.top +
      (window.pageYOffset || o.scrollTop) -
      (o.clientTop || document.body.clientTop || 0),
  };
}
const kl = Symbol("TableContextProps"),
  Ni = (e) => {
    Je(kl, e);
  },
  rt = () => qe(kl, {}),
  Bi = "RC_TABLE_KEY";
function Kl(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ol(e, t) {
  if (!t && typeof t != "number") return e;
  const o = Kl(t);
  let n = e;
  for (let l = 0; l < o.length; l += 1) {
    if (!n) return null;
    const a = o[l];
    n = n[a];
  }
  return n;
}
function sn(e) {
  const t = [],
    o = {};
  return (
    e.forEach((n) => {
      const { key: l, dataIndex: a } = n || {};
      let r = l || Kl(a).join("-") || Bi;
      for (; o[r]; ) r = `${r}_next`;
      (o[r] = !0), t.push(r);
    }),
    t
  );
}
function Fi() {
  const e = {};
  function t(a, r) {
    r &&
      Object.keys(r).forEach((i) => {
        const c = r[i];
        c && typeof c == "object"
          ? ((a[i] = a[i] || {}), t(a[i], c))
          : (a[i] = c);
      });
  }
  for (var o = arguments.length, n = new Array(o), l = 0; l < o; l++)
    n[l] = arguments[l];
  return (
    n.forEach((a) => {
      t(e, a);
    }),
    e
  );
}
function Pn(e) {
  return e != null;
}
const El = Symbol("SlotsContextProps"),
  Li = (e) => {
    Je(El, e);
  },
  no = () =>
    qe(
      El,
      w(() => ({}))
    ),
  Pl = Symbol("ContextProps"),
  Ai = (e) => {
    Je(Pl, e);
  },
  zi = () => qe(Pl, { onResizeColumn: () => {} });
globalThis && globalThis.__rest;
const Rt = "RC_TABLE_INTERNAL_COL_DEFINE",
  _l = Symbol("HoverContextProps"),
  Hi = (e) => {
    Je(_l, e);
  },
  Mi = () => qe(_l, { startRow: le(-1), endRow: le(-1), onHover() {} }),
  _n = le(!1),
  ji = () => {
    gt(() => {
      _n.value = _n.value || za("position", "sticky");
    });
  },
  Wi = () => _n;
var Vi =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
        t.indexOf(n[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
          (o[n[l]] = e[n[l]]);
    return o;
  };
function Xi(e, t, o, n) {
  const l = e + t - 1;
  return e <= n && l >= o;
}
function Gi(e) {
  return e && typeof e == "object" && !Array.isArray(e) && !Xt(e);
}
const cn = Ce({
  name: "Cell",
  props: [
    "prefixCls",
    "record",
    "index",
    "renderIndex",
    "dataIndex",
    "customRender",
    "component",
    "colSpan",
    "rowSpan",
    "fixLeft",
    "fixRight",
    "firstFixLeft",
    "lastFixLeft",
    "firstFixRight",
    "lastFixRight",
    "appendNode",
    "additionalProps",
    "ellipsis",
    "align",
    "rowType",
    "isSticky",
    "column",
    "cellType",
    "transformCellText",
  ],
  setup(e, t) {
    let { slots: o } = t;
    const n = no(),
      { onHover: l, startRow: a, endRow: r } = Mi(),
      i = w(() => {
        var b, p, s, v;
        return (s =
          (b = e.colSpan) !== null && b !== void 0
            ? b
            : (p = e.additionalProps) === null || p === void 0
            ? void 0
            : p.colSpan) !== null && s !== void 0
          ? s
          : (v = e.additionalProps) === null || v === void 0
          ? void 0
          : v.colspan;
      }),
      c = w(() => {
        var b, p, s, v;
        return (s =
          (b = e.rowSpan) !== null && b !== void 0
            ? b
            : (p = e.additionalProps) === null || p === void 0
            ? void 0
            : p.rowSpan) !== null && s !== void 0
          ? s
          : (v = e.additionalProps) === null || v === void 0
          ? void 0
          : v.rowspan;
      }),
      f = Qe(() => {
        const { index: b } = e;
        return Xi(b, c.value || 1, a.value, r.value);
      }),
      u = Wi(),
      d = (b, p) => {
        var s;
        const { record: v, index: k, additionalProps: m } = e;
        v && l(k, k + p - 1),
          (s = m == null ? void 0 : m.onMouseenter) === null ||
            s === void 0 ||
            s.call(m, b);
      },
      h = (b) => {
        var p;
        const { record: s, additionalProps: v } = e;
        s && l(-1, -1),
          (p = v == null ? void 0 : v.onMouseleave) === null ||
            p === void 0 ||
            p.call(v, b);
      },
      x = (b) => {
        const p = Lt(b)[0];
        return Xt(p)
          ? p.type === Ta
            ? p.children
            : Array.isArray(p.children)
            ? x(p.children)
            : void 0
          : p;
      };
    return () => {
      var b, p, s, v, k, m;
      const {
          prefixCls: E,
          record: K,
          index: F,
          renderIndex: S,
          dataIndex: _,
          customRender: g,
          component: O = "td",
          fixLeft: R,
          fixRight: A,
          firstFixLeft: L,
          lastFixLeft: ne,
          firstFixRight: ae,
          lastFixRight: ue,
          appendNode: be = (b = o.appendNode) === null || b === void 0
            ? void 0
            : b.call(o),
          additionalProps: X = {},
          ellipsis: Y,
          align: j,
          rowType: Z,
          isSticky: N,
          column: z = {},
          cellType: M,
        } = e,
        H = `${E}-cell`;
      let J, Q;
      const _e = (p = o.default) === null || p === void 0 ? void 0 : p.call(o);
      if (Pn(_e) || M === "header") Q = _e;
      else {
        const ke = Ol(K, _);
        if (((Q = ke), g)) {
          const P = g({
            text: ke,
            value: ke,
            record: K,
            index: F,
            renderIndex: S,
            column: z.__originColumn__,
          });
          Gi(P) ? ((Q = P.children), (J = P.props)) : (Q = P);
        }
        if (
          !(Rt in z) &&
          M === "body" &&
          n.value.bodyCell &&
          !(!((s = z.slots) === null || s === void 0) && s.customRender)
        ) {
          const P = an(
            n.value,
            "bodyCell",
            {
              text: ke,
              value: ke,
              record: K,
              index: F,
              column: z.__originColumn__,
            },
            () => {
              const $ = Q === void 0 ? ke : Q;
              return [
                (typeof $ == "object" && Jt($)) || typeof $ != "object"
                  ? $
                  : null,
              ];
            }
          );
          Q = tl(P);
        }
        e.transformCellText &&
          (Q = e.transformCellText({
            text: Q,
            record: K,
            index: F,
            column: z.__originColumn__,
          }));
      }
      typeof Q == "object" && !Array.isArray(Q) && !Xt(Q) && (Q = null),
        Y && (ne || ae) && (Q = y("span", { class: `${H}-content` }, [Q])),
        Array.isArray(Q) && Q.length === 1 && (Q = Q[0]);
      const Oe = J || {},
        { colSpan: Pe, rowSpan: Te, style: De, class: Me } = Oe,
        Re = Vi(Oe, ["colSpan", "rowSpan", "style", "class"]),
        Ie =
          (v = Pe !== void 0 ? Pe : i.value) !== null && v !== void 0 ? v : 1,
        V = (k = Te !== void 0 ? Te : c.value) !== null && k !== void 0 ? k : 1;
      if (Ie === 0 || V === 0) return null;
      const ie = {},
        q = typeof R == "number" && u.value,
        re = typeof A == "number" && u.value;
      q && ((ie.position = "sticky"), (ie.left = `${R}px`)),
        re && ((ie.position = "sticky"), (ie.right = `${A}px`));
      const ce = {};
      j && (ce.textAlign = j);
      let we;
      const se = Y === !0 ? { showTitle: !0 } : Y;
      se &&
        (se.showTitle || Z === "header") &&
        (typeof Q == "string" || typeof Q == "number"
          ? (we = Q.toString())
          : Xt(Q) && (we = x([Q])));
      const pe = C(C(C({ title: we }, Re), X), {
        colSpan: Ie !== 1 ? Ie : null,
        rowSpan: V !== 1 ? V : null,
        class: ye(
          H,
          {
            [`${H}-fix-left`]: q && u.value,
            [`${H}-fix-left-first`]: L && u.value,
            [`${H}-fix-left-last`]: ne && u.value,
            [`${H}-fix-right`]: re && u.value,
            [`${H}-fix-right-first`]: ae && u.value,
            [`${H}-fix-right-last`]: ue && u.value,
            [`${H}-ellipsis`]: Y,
            [`${H}-with-append`]: be,
            [`${H}-fix-sticky`]: (q || re) && N && u.value,
            [`${H}-row-hover`]: !J && f.value,
          },
          X.class,
          Me
        ),
        onMouseenter: (ke) => {
          d(ke, V);
        },
        onMouseleave: h,
        style: [X.style, ce, ie, De],
      });
      return y(O, pe, {
        default: () => [
          be,
          Q,
          (m = o.dragHandle) === null || m === void 0 ? void 0 : m.call(o),
        ],
      });
    };
  },
});
function oo(e, t, o, n, l) {
  const a = o[e] || {},
    r = o[t] || {};
  let i, c;
  a.fixed === "left"
    ? (i = n.left[e])
    : r.fixed === "right" && (c = n.right[t]);
  let f = !1,
    u = !1,
    d = !1,
    h = !1;
  const x = o[t + 1],
    b = o[e - 1];
  return (
    l === "rtl"
      ? i !== void 0
        ? (h = !(b && b.fixed === "left"))
        : c !== void 0 && (d = !(x && x.fixed === "right"))
      : i !== void 0
      ? (f = !(x && x.fixed === "left"))
      : c !== void 0 && (u = !(b && b.fixed === "right")),
    {
      fixLeft: i,
      fixRight: c,
      lastFixLeft: f,
      firstFixRight: u,
      lastFixRight: d,
      firstFixLeft: h,
      isSticky: n.isSticky,
    }
  );
}
const To = {
    mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" },
    touch: { start: "touchstart", move: "touchmove", stop: "touchend" },
  },
  Io = 50,
  Ui = Ce({
    compatConfig: { MODE: 3 },
    name: "DragHandle",
    props: {
      prefixCls: String,
      width: { type: Number, required: !0 },
      minWidth: { type: Number, default: Io },
      maxWidth: { type: Number, default: 1 / 0 },
      column: { type: Object, default: void 0 },
    },
    setup(e) {
      let t = 0,
        o = { remove: () => {} },
        n = { remove: () => {} };
      const l = () => {
        o.remove(), n.remove();
      };
      ol(() => {
        l();
      }),
        Le(() => {
          tt(
            !isNaN(e.width),
            "Table",
            "width must be a number when use resizable"
          );
        });
      const { onResizeColumn: a } = zi(),
        r = w(() =>
          typeof e.minWidth == "number" && !isNaN(e.minWidth) ? e.minWidth : Io
        ),
        i = w(() =>
          typeof e.maxWidth == "number" && !isNaN(e.maxWidth)
            ? e.maxWidth
            : 1 / 0
        ),
        c = nl();
      let f = 0;
      const u = le(!1);
      let d;
      const h = (m) => {
          let E = 0;
          m.touches
            ? m.touches.length
              ? (E = m.touches[0].pageX)
              : (E = m.changedTouches[0].pageX)
            : (E = m.pageX);
          const K = t - E;
          let F = Math.max(f - K, r.value);
          (F = Math.min(F, i.value)),
            Ct.cancel(d),
            (d = Ct(() => {
              a(F, e.column.__originColumn__);
            }));
        },
        x = (m) => {
          h(m);
        },
        b = (m) => {
          (u.value = !1), h(m), l();
        },
        p = (m, E) => {
          (u.value = !0),
            l(),
            (f = c.vnode.el.parentNode.getBoundingClientRect().width),
            !(m instanceof MouseEvent && m.which !== 1) &&
              (m.stopPropagation && m.stopPropagation(),
              (t = m.touches ? m.touches[0].pageX : m.pageX),
              (o = xt(document.documentElement, E.move, x)),
              (n = xt(document.documentElement, E.stop, b)));
        },
        s = (m) => {
          m.stopPropagation(), m.preventDefault(), p(m, To.mouse);
        },
        v = (m) => {
          m.stopPropagation(), m.preventDefault(), p(m, To.touch);
        },
        k = (m) => {
          m.stopPropagation(), m.preventDefault();
        };
      return () => {
        const { prefixCls: m } = e,
          E = { [Ma ? "onTouchstartPassive" : "onTouchstart"]: (K) => v(K) };
        return y(
          "div",
          U(
            U(
              {
                class: `${m}-resize-handle ${u.value ? "dragging" : ""}`,
                onMousedown: s,
              },
              E
            ),
            {},
            { onClick: k }
          ),
          [y("div", { class: `${m}-resize-handle-line` }, null)]
        );
      };
    },
  }),
  Yi = Ce({
    name: "HeaderRow",
    props: [
      "cells",
      "stickyOffsets",
      "flattenColumns",
      "rowComponent",
      "cellComponent",
      "index",
      "customHeaderRow",
    ],
    setup(e) {
      const t = rt();
      return () => {
        const { prefixCls: o, direction: n } = t,
          {
            cells: l,
            stickyOffsets: a,
            flattenColumns: r,
            rowComponent: i,
            cellComponent: c,
            customHeaderRow: f,
            index: u,
          } = e;
        let d;
        f &&
          (d = f(
            l.map((x) => x.column),
            u
          ));
        const h = sn(l.map((x) => x.column));
        return y(i, d, {
          default: () => [
            l.map((x, b) => {
              const { column: p } = x,
                s = oo(x.colStart, x.colEnd, r, a, n);
              let v;
              p && p.customHeaderCell && (v = x.column.customHeaderCell(p));
              const k = p;
              return y(
                cn,
                U(
                  U(
                    U({}, x),
                    {},
                    {
                      cellType: "header",
                      ellipsis: p.ellipsis,
                      align: p.align,
                      component: c,
                      prefixCls: o,
                      key: h[b],
                    },
                    s
                  ),
                  {},
                  { additionalProps: v, rowType: "header", column: p }
                ),
                {
                  default: () => p.title,
                  dragHandle: () =>
                    k.resizable
                      ? y(
                          Ui,
                          {
                            prefixCls: o,
                            width: k.width,
                            minWidth: k.minWidth,
                            maxWidth: k.maxWidth,
                            column: k,
                          },
                          null
                        )
                      : null,
                }
              );
            }),
          ],
        });
      };
    },
  });
function qi(e) {
  const t = [];
  function o(l, a) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    t[r] = t[r] || [];
    let i = a;
    return l.filter(Boolean).map((f) => {
      const u = {
        key: f.key,
        class: ye(f.className, f.class),
        column: f,
        colStart: i,
      };
      let d = 1;
      const h = f.children;
      return (
        h &&
          h.length > 0 &&
          ((d = o(h, i, r + 1).reduce((x, b) => x + b, 0)),
          (u.hasSubColumns = !0)),
        "colSpan" in f && ({ colSpan: d } = f),
        "rowSpan" in f && (u.rowSpan = f.rowSpan),
        (u.colSpan = d),
        (u.colEnd = u.colStart + d - 1),
        t[r].push(u),
        (i += d),
        d
      );
    });
  }
  o(e, 0);
  const n = t.length;
  for (let l = 0; l < n; l += 1)
    t[l].forEach((a) => {
      !("rowSpan" in a) && !a.hasSubColumns && (a.rowSpan = n - l);
    });
  return t;
}
const Ro = Ce({
    name: "Header",
    inheritAttrs: !1,
    props: ["columns", "flattenColumns", "stickyOffsets", "customHeaderRow"],
    setup(e) {
      const t = rt(),
        o = w(() => qi(e.columns));
      return () => {
        const { prefixCls: n, getComponent: l } = t,
          { stickyOffsets: a, flattenColumns: r, customHeaderRow: i } = e,
          c = l(["header", "wrapper"], "thead"),
          f = l(["header", "row"], "tr"),
          u = l(["header", "cell"], "th");
        return y(
          c,
          { class: `${n}-thead` },
          {
            default: () => [
              o.value.map((d, h) =>
                y(
                  Yi,
                  {
                    key: h,
                    flattenColumns: r,
                    cells: d,
                    stickyOffsets: a,
                    rowComponent: f,
                    cellComponent: u,
                    customHeaderRow: i,
                    index: h,
                  },
                  null
                )
              ),
            ],
          }
        );
      };
    },
  }),
  Tl = Symbol("ExpandedRowProps"),
  Ji = (e) => {
    Je(Tl, e);
  },
  Zi = () => qe(Tl, {}),
  Il = Ce({
    name: "ExpandedRow",
    inheritAttrs: !1,
    props: [
      "prefixCls",
      "component",
      "cellComponent",
      "expanded",
      "colSpan",
      "isEmpty",
    ],
    setup(e, t) {
      let { slots: o, attrs: n } = t;
      const l = rt(),
        a = Zi(),
        { fixHeader: r, fixColumn: i, componentWidth: c, horizonScroll: f } = a;
      return () => {
        const {
          prefixCls: u,
          component: d,
          cellComponent: h,
          expanded: x,
          colSpan: b,
          isEmpty: p,
        } = e;
        return y(
          d,
          { class: n.class, style: { display: x ? null : "none" } },
          {
            default: () => [
              y(
                cn,
                { component: h, prefixCls: u, colSpan: b },
                {
                  default: () => {
                    var s;
                    let v =
                      (s = o.default) === null || s === void 0
                        ? void 0
                        : s.call(o);
                    return (
                      (p ? f.value : i.value) &&
                        (v = y(
                          "div",
                          {
                            style: {
                              width: `${
                                c.value - (r.value ? l.scrollbarSize : 0)
                              }px`,
                              position: "sticky",
                              left: 0,
                              overflow: "hidden",
                            },
                            class: `${u}-expanded-row-fixed`,
                          },
                          [v]
                        )),
                      v
                    );
                  },
                }
              ),
            ],
          }
        );
      };
    },
  }),
  Qi = Ce({
    name: "MeasureCell",
    props: ["columnKey"],
    setup(e, t) {
      let { emit: o } = t;
      const n = me();
      return (
        gt(() => {
          n.value && o("columnResize", e.columnKey, n.value.offsetWidth);
        }),
        () =>
          y(
            rl,
            {
              onResize: (l) => {
                let { offsetWidth: a } = l;
                o("columnResize", e.columnKey, a);
              },
            },
            {
              default: () => [
                y(
                  "td",
                  { ref: n, style: { padding: 0, border: 0, height: 0 } },
                  [
                    y("div", { style: { height: 0, overflow: "hidden" } }, [
                      Ia(" "),
                    ]),
                  ]
                ),
              ],
            }
          )
      );
    },
  }),
  Rl = Symbol("BodyContextProps"),
  es = (e) => {
    Je(Rl, e);
  },
  Dl = () => qe(Rl, {}),
  ts = Ce({
    name: "BodyRow",
    inheritAttrs: !1,
    props: [
      "record",
      "index",
      "renderIndex",
      "recordKey",
      "expandedKeys",
      "rowComponent",
      "cellComponent",
      "customRow",
      "rowExpandable",
      "indent",
      "rowKey",
      "getRowKey",
      "childrenColumnName",
    ],
    setup(e, t) {
      let { attrs: o } = t;
      const n = rt(),
        l = Dl(),
        a = le(!1),
        r = w(() => e.expandedKeys && e.expandedKeys.has(e.recordKey));
      Le(() => {
        r.value && (a.value = !0);
      });
      const i = w(
          () =>
            l.expandableType === "row" &&
            (!e.rowExpandable || e.rowExpandable(e.record))
        ),
        c = w(() => l.expandableType === "nest"),
        f = w(
          () =>
            e.childrenColumnName && e.record && e.record[e.childrenColumnName]
        ),
        u = w(() => i.value || c.value),
        d = (s, v) => {
          l.onTriggerExpand(s, v);
        },
        h = w(() => {
          var s;
          return (
            ((s = e.customRow) === null || s === void 0
              ? void 0
              : s.call(e, e.record, e.index)) || {}
          );
        }),
        x = function (s) {
          var v, k;
          l.expandRowByClick && u.value && d(e.record, s);
          for (
            var m = arguments.length, E = new Array(m > 1 ? m - 1 : 0), K = 1;
            K < m;
            K++
          )
            E[K - 1] = arguments[K];
          (k = (v = h.value) === null || v === void 0 ? void 0 : v.onClick) ===
            null ||
            k === void 0 ||
            k.call(v, s, ...E);
        },
        b = w(() => {
          const { record: s, index: v, indent: k } = e,
            { rowClassName: m } = l;
          return typeof m == "string"
            ? m
            : typeof m == "function"
            ? m(s, v, k)
            : "";
        }),
        p = w(() => sn(l.flattenColumns));
      return () => {
        const { class: s, style: v } = o,
          {
            record: k,
            index: m,
            rowKey: E,
            indent: K = 0,
            rowComponent: F,
            cellComponent: S,
          } = e,
          { prefixCls: _, fixedInfoList: g, transformCellText: O } = n,
          {
            flattenColumns: R,
            expandedRowClassName: A,
            indentSize: L,
            expandIcon: ne,
            expandedRowRender: ae,
            expandIconColumnIndex: ue,
          } = l,
          be = y(
            F,
            U(
              U({}, h.value),
              {},
              {
                "data-row-key": E,
                class: ye(
                  s,
                  `${_}-row`,
                  `${_}-row-level-${K}`,
                  b.value,
                  h.value.class
                ),
                style: [v, h.value.style],
                onClick: x,
              }
            ),
            {
              default: () => [
                R.map((Y, j) => {
                  const { customRender: Z, dataIndex: N, className: z } = Y,
                    M = p[j],
                    H = g[j];
                  let J;
                  Y.customCell && (J = Y.customCell(k, m, Y));
                  const Q =
                    j === (ue || 0) && c.value
                      ? y(at, null, [
                          y(
                            "span",
                            {
                              style: { paddingLeft: `${L * K}px` },
                              class: `${_}-row-indent indent-level-${K}`,
                            },
                            null
                          ),
                          ne({
                            prefixCls: _,
                            expanded: r.value,
                            expandable: f.value,
                            record: k,
                            onExpand: d,
                          }),
                        ])
                      : null;
                  return y(
                    cn,
                    U(
                      U(
                        {
                          cellType: "body",
                          class: z,
                          ellipsis: Y.ellipsis,
                          align: Y.align,
                          component: S,
                          prefixCls: _,
                          key: M,
                          record: k,
                          index: m,
                          renderIndex: e.renderIndex,
                          dataIndex: N,
                          customRender: Z,
                        },
                        H
                      ),
                      {},
                      {
                        additionalProps: J,
                        column: Y,
                        transformCellText: O,
                        appendNode: Q,
                      }
                    ),
                    null
                  );
                }),
              ],
            }
          );
        let X;
        if (i.value && (a.value || r.value)) {
          const Y = ae({
              record: k,
              index: m,
              indent: K + 1,
              expanded: r.value,
            }),
            j = A && A(k, m, K);
          X = y(
            Il,
            {
              expanded: r.value,
              class: ye(
                `${_}-expanded-row`,
                `${_}-expanded-row-level-${K + 1}`,
                j
              ),
              prefixCls: _,
              component: F,
              cellComponent: S,
              colSpan: R.length,
              isEmpty: !1,
            },
            { default: () => [Y] }
          );
        }
        return y(at, null, [be, X]);
      };
    },
  });
function Nl(e, t, o, n, l, a) {
  const r = [];
  r.push({ record: e, indent: t, index: a });
  const i = l(e),
    c = n == null ? void 0 : n.has(i);
  if (e && Array.isArray(e[o]) && c)
    for (let f = 0; f < e[o].length; f += 1) {
      const u = Nl(e[o][f], t + 1, o, n, l, f);
      r.push(...u);
    }
  return r;
}
function ns(e, t, o, n) {
  return w(() => {
    const a = t.value,
      r = o.value,
      i = e.value;
    if (r != null && r.size) {
      const c = [];
      for (let f = 0; f < (i == null ? void 0 : i.length); f += 1) {
        const u = i[f];
        c.push(...Nl(u, 0, a, r, n.value, f));
      }
      return c;
    }
    return i == null
      ? void 0
      : i.map((c, f) => ({ record: c, indent: 0, index: f }));
  });
}
const Bl = Symbol("ResizeContextProps"),
  os = (e) => {
    Je(Bl, e);
  },
  ls = () => qe(Bl, { onColumnResize: () => {} }),
  as = Ce({
    name: "Body",
    props: [
      "data",
      "getRowKey",
      "measureColumnWidth",
      "expandedKeys",
      "customRow",
      "rowExpandable",
      "childrenColumnName",
    ],
    setup(e, t) {
      let { slots: o } = t;
      const n = ls(),
        l = rt(),
        a = Dl(),
        r = ns(
          He(e, "data"),
          He(e, "childrenColumnName"),
          He(e, "expandedKeys"),
          He(e, "getRowKey")
        ),
        i = le(-1),
        c = le(-1);
      let f;
      return (
        Hi({
          startRow: i,
          endRow: c,
          onHover: (u, d) => {
            clearTimeout(f),
              (f = setTimeout(() => {
                (i.value = u), (c.value = d);
              }, 100));
          },
        }),
        () => {
          var u;
          const {
              data: d,
              getRowKey: h,
              measureColumnWidth: x,
              expandedKeys: b,
              customRow: p,
              rowExpandable: s,
              childrenColumnName: v,
            } = e,
            { onColumnResize: k } = n,
            { prefixCls: m, getComponent: E } = l,
            { flattenColumns: K } = a,
            F = E(["body", "wrapper"], "tbody"),
            S = E(["body", "row"], "tr"),
            _ = E(["body", "cell"], "td");
          let g;
          d.length
            ? (g = r.value.map((R, A) => {
                const { record: L, indent: ne, index: ae } = R,
                  ue = h(L, A);
                return y(
                  ts,
                  {
                    key: ue,
                    rowKey: ue,
                    record: L,
                    recordKey: ue,
                    index: A,
                    renderIndex: ae,
                    rowComponent: S,
                    cellComponent: _,
                    expandedKeys: b,
                    customRow: p,
                    getRowKey: h,
                    rowExpandable: s,
                    childrenColumnName: v,
                    indent: ne,
                  },
                  null
                );
              }))
            : (g = y(
                Il,
                {
                  expanded: !0,
                  class: `${m}-placeholder`,
                  prefixCls: m,
                  component: S,
                  cellComponent: _,
                  colSpan: K.length,
                  isEmpty: !0,
                },
                {
                  default: () => [
                    (u = o.emptyNode) === null || u === void 0
                      ? void 0
                      : u.call(o),
                  ],
                }
              ));
          const O = sn(K);
          return y(
            F,
            { class: `${m}-tbody` },
            {
              default: () => [
                x &&
                  y(
                    "tr",
                    {
                      "aria-hidden": "true",
                      class: `${m}-measure-row`,
                      style: { height: 0, fontSize: 0 },
                    },
                    [
                      O.map((R) =>
                        y(Qi, { key: R, columnKey: R, onColumnResize: k }, null)
                      ),
                    ]
                  ),
                g,
              ],
            }
          );
        }
      );
    },
  }),
  mt = {};
var rs =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
        t.indexOf(n[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
          (o[n[l]] = e[n[l]]);
    return o;
  };
function Tn(e) {
  return e.reduce((t, o) => {
    const { fixed: n } = o,
      l = n === !0 ? "left" : n,
      a = o.children;
    return a && a.length > 0
      ? [...t, ...Tn(a).map((r) => C({ fixed: l }, r))]
      : [...t, C(C({}, o), { fixed: l })];
  }, []);
}
function is(e) {
  return e.map((t) => {
    const { fixed: o } = t,
      n = rs(t, ["fixed"]);
    let l = o;
    return (
      o === "left" ? (l = "right") : o === "right" && (l = "left"),
      C({ fixed: l }, n)
    );
  });
}
function ss(e, t) {
  let {
    prefixCls: o,
    columns: n,
    expandable: l,
    expandedKeys: a,
    getRowKey: r,
    onTriggerExpand: i,
    expandIcon: c,
    rowExpandable: f,
    expandIconColumnIndex: u,
    direction: d,
    expandRowByClick: h,
    expandColumnWidth: x,
    expandFixed: b,
  } = e;
  const p = no(),
    s = w(() => {
      if (l.value) {
        let m = n.value.slice();
        if (!m.includes(mt)) {
          const L = u.value || 0;
          L >= 0 && m.splice(L, 0, mt);
        }
        const E = m.indexOf(mt);
        m = m.filter((L, ne) => L !== mt || ne === E);
        const K = n.value[E];
        let F;
        (b.value === "left" || b.value) && !u.value
          ? (F = "left")
          : (b.value === "right" || b.value) && u.value === n.value.length
          ? (F = "right")
          : (F = K ? K.fixed : null);
        const S = a.value,
          _ = f.value,
          g = c.value,
          O = o.value,
          R = h.value,
          A = {
            [Rt]: {
              class: `${o.value}-expand-icon-col`,
              columnType: "EXPAND_COLUMN",
            },
            title: an(p.value, "expandColumnTitle", {}, () => [""]),
            fixed: F,
            class: `${o.value}-row-expand-icon-cell`,
            width: x.value,
            customRender: (L) => {
              let { record: ne, index: ae } = L;
              const ue = r.value(ne, ae),
                be = S.has(ue),
                X = _ ? _(ne) : !0,
                Y = g({
                  prefixCls: O,
                  expanded: be,
                  expandable: X,
                  record: ne,
                  onExpand: i,
                });
              return R
                ? y("span", { onClick: (j) => j.stopPropagation() }, [Y])
                : Y;
            },
          };
        return m.map((L) => (L === mt ? A : L));
      }
      return n.value.filter((m) => m !== mt);
    }),
    v = w(() => {
      let m = s.value;
      return (
        t.value && (m = t.value(m)),
        m.length || (m = [{ customRender: () => null }]),
        m
      );
    }),
    k = w(() => (d.value === "rtl" ? is(Tn(v.value)) : Tn(v.value)));
  return [v, k];
}
function Fl(e) {
  const t = le(e);
  let o;
  const n = le([]);
  function l(a) {
    n.value.push(a),
      Ct.cancel(o),
      (o = Ct(() => {
        const r = n.value;
        (n.value = []),
          r.forEach((i) => {
            t.value = i(t.value);
          });
      }));
  }
  return (
    Pt(() => {
      Ct.cancel(o);
    }),
    [t, l]
  );
}
function cs(e) {
  const t = me(e || null),
    o = me();
  function n() {
    clearTimeout(o.value);
  }
  function l(r) {
    (t.value = r),
      n(),
      (o.value = setTimeout(() => {
        (t.value = null), (o.value = void 0);
      }, 100));
  }
  function a() {
    return t.value;
  }
  return (
    Pt(() => {
      n();
    }),
    [l, a]
  );
}
function ds(e, t, o) {
  return w(() => {
    const l = [],
      a = [];
    let r = 0,
      i = 0;
    const c = e.value,
      f = t.value,
      u = o.value;
    for (let d = 0; d < f; d += 1)
      if (u === "rtl") {
        (a[d] = i), (i += c[d] || 0);
        const h = f - d - 1;
        (l[h] = r), (r += c[h] || 0);
      } else {
        (l[d] = r), (r += c[d] || 0);
        const h = f - d - 1;
        (a[h] = i), (i += c[h] || 0);
      }
    return { left: l, right: a };
  });
}
var us =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
        t.indexOf(n[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
          (o[n[l]] = e[n[l]]);
    return o;
  };
function Ll(e) {
  let { colWidths: t, columns: o, columCount: n } = e;
  const l = [],
    a = n || o.length;
  let r = !1;
  for (let i = a - 1; i >= 0; i -= 1) {
    const c = t[i],
      f = o && o[i],
      u = f && f[Rt];
    if (c || u || r) {
      const d = u || {},
        h = us(d, ["columnType"]);
      l.unshift(
        y(
          "col",
          U(
            { key: i, style: { width: typeof c == "number" ? `${c}px` : c } },
            h
          ),
          null
        )
      ),
        (r = !0);
    }
  }
  return y("colgroup", null, [l]);
}
function In(e, t) {
  let { slots: o } = t;
  var n;
  return y("div", null, [
    (n = o.default) === null || n === void 0 ? void 0 : n.call(o),
  ]);
}
In.displayName = "Panel";
let fs = 0;
const ps = Ce({
    name: "Summary",
    props: ["fixed"],
    setup(e, t) {
      let { slots: o } = t;
      const n = rt(),
        l = `table-summary-uni-key-${++fs}`,
        a = w(() => e.fixed === "" || e.fixed);
      return (
        Le(() => {
          n.summaryCollect(l, a.value);
        }),
        Pt(() => {
          n.summaryCollect(l, !1);
        }),
        () => {
          var r;
          return (r = o.default) === null || r === void 0 ? void 0 : r.call(o);
        }
      );
    },
  }),
  vs = ps,
  ms = Ce({
    compatConfig: { MODE: 3 },
    name: "ATableSummaryRow",
    setup(e, t) {
      let { slots: o } = t;
      return () => {
        var n;
        return y("tr", null, [
          (n = o.default) === null || n === void 0 ? void 0 : n.call(o),
        ]);
      };
    },
  }),
  Al = Symbol("SummaryContextProps"),
  hs = (e) => {
    Je(Al, e);
  },
  gs = () => qe(Al, {}),
  ys = Ce({
    name: "ATableSummaryCell",
    props: ["index", "colSpan", "rowSpan", "align"],
    setup(e, t) {
      let { attrs: o, slots: n } = t;
      const l = rt(),
        a = gs();
      return () => {
        const { index: r, colSpan: i = 1, rowSpan: c, align: f } = e,
          { prefixCls: u, direction: d } = l,
          { scrollColumnIndex: h, stickyOffsets: x, flattenColumns: b } = a,
          s = r + i - 1 + 1 === h ? i + 1 : i,
          v = oo(r, r + s - 1, b, x, d);
        return y(
          cn,
          U(
            {
              class: o.class,
              index: r,
              component: "td",
              prefixCls: u,
              record: null,
              dataIndex: null,
              align: f,
              colSpan: s,
              rowSpan: c,
              customRender: () => {
                var k;
                return (k = n.default) === null || k === void 0
                  ? void 0
                  : k.call(n);
              },
            },
            v
          ),
          null
        );
      };
    },
  }),
  Vt = Ce({
    name: "Footer",
    inheritAttrs: !1,
    props: ["stickyOffsets", "flattenColumns"],
    setup(e, t) {
      let { slots: o } = t;
      const n = rt();
      return (
        hs(
          ht({
            stickyOffsets: He(e, "stickyOffsets"),
            flattenColumns: He(e, "flattenColumns"),
            scrollColumnIndex: w(() => {
              const l = e.flattenColumns.length - 1,
                a = e.flattenColumns[l];
              return a != null && a.scrollbar ? l : null;
            }),
          })
        ),
        () => {
          var l;
          const { prefixCls: a } = n;
          return y("tfoot", { class: `${a}-summary` }, [
            (l = o.default) === null || l === void 0 ? void 0 : l.call(o),
          ]);
        }
      );
    },
  }),
  bs = vs;
function xs(e) {
  let { prefixCls: t, record: o, onExpand: n, expanded: l, expandable: a } = e;
  const r = `${t}-row-expand-icon`;
  if (!a) return y("span", { class: [r, `${t}-row-spaced`] }, null);
  const i = (c) => {
    n(o, c), c.stopPropagation();
  };
  return y(
    "span",
    {
      class: { [r]: !0, [`${t}-row-expanded`]: l, [`${t}-row-collapsed`]: !l },
      onClick: i,
    },
    null
  );
}
function Cs(e, t, o) {
  const n = [];
  function l(a) {
    (a || []).forEach((r, i) => {
      n.push(t(r, i)), l(r[o]);
    });
  }
  return l(e), n;
}
const Ss = Ce({
    name: "StickyScrollBar",
    inheritAttrs: !1,
    props: ["offsetScroll", "container", "scrollBodyRef", "scrollBodySizeInfo"],
    emits: ["scroll"],
    setup(e, t) {
      let { emit: o, expose: n } = t;
      const l = rt(),
        a = le(0),
        r = le(0),
        i = le(0);
      Le(
        () => {
          (a.value = e.scrollBodySizeInfo.scrollWidth || 0),
            (r.value = e.scrollBodySizeInfo.clientWidth || 0),
            (i.value = a.value && r.value * (r.value / a.value));
        },
        { flush: "post" }
      );
      const c = le(),
        [f, u] = Fl({ scrollLeft: 0, isHiddenScrollBar: !0 }),
        d = me({ delta: 0, x: 0 }),
        h = le(!1),
        x = () => {
          h.value = !1;
        },
        b = (S) => {
          (d.value = { delta: S.pageX - f.value.scrollLeft, x: 0 }),
            (h.value = !0),
            S.preventDefault();
        },
        p = (S) => {
          const { buttons: _ } = S || (window == null ? void 0 : window.event);
          if (!h.value || _ === 0) {
            h.value && (h.value = !1);
            return;
          }
          let g = d.value.x + S.pageX - d.value.x - d.value.delta;
          g <= 0 && (g = 0),
            g + i.value >= r.value && (g = r.value - i.value),
            o("scroll", { scrollLeft: (g / r.value) * (a.value + 2) }),
            (d.value.x = S.pageX);
        },
        s = () => {
          if (!e.scrollBodyRef.value) return;
          const S = _o(e.scrollBodyRef.value).top,
            _ = S + e.scrollBodyRef.value.offsetHeight,
            g =
              e.container === window
                ? document.documentElement.scrollTop + window.innerHeight
                : _o(e.container).top + e.container.clientHeight;
          _ - vo() <= g || S >= g - e.offsetScroll
            ? u((O) => C(C({}, O), { isHiddenScrollBar: !0 }))
            : u((O) => C(C({}, O), { isHiddenScrollBar: !1 }));
        };
      n({
        setScrollLeft: (S) => {
          u((_) => C(C({}, _), { scrollLeft: (S / a.value) * r.value || 0 }));
        },
      });
      let k = null,
        m = null,
        E = null,
        K = null;
      gt(() => {
        (k = xt(document.body, "mouseup", x, !1)),
          (m = xt(document.body, "mousemove", p, !1)),
          (E = xt(window, "resize", s, !1));
      }),
        Ra(() => {
          dt(() => {
            s();
          });
        }),
        gt(() => {
          setTimeout(() => {
            Ae(
              [i, h],
              () => {
                s();
              },
              { immediate: !0, flush: "post" }
            );
          });
        }),
        Ae(
          () => e.container,
          () => {
            K == null || K.remove(), (K = xt(e.container, "scroll", s, !1));
          },
          { immediate: !0, flush: "post" }
        ),
        Pt(() => {
          k == null || k.remove(),
            m == null || m.remove(),
            K == null || K.remove(),
            E == null || E.remove();
        }),
        Ae(
          () => C({}, f.value),
          (S, _) => {
            S.isHiddenScrollBar !==
              (_ == null ? void 0 : _.isHiddenScrollBar) &&
              !S.isHiddenScrollBar &&
              u((g) => {
                const O = e.scrollBodyRef.value;
                return O
                  ? C(C({}, g), {
                      scrollLeft:
                        (O.scrollLeft / O.scrollWidth) * O.clientWidth,
                    })
                  : g;
              });
          },
          { immediate: !0 }
        );
      const F = vo();
      return () => {
        if (a.value <= r.value || !i.value || f.value.isHiddenScrollBar)
          return null;
        const { prefixCls: S } = l;
        return y(
          "div",
          {
            style: {
              height: `${F}px`,
              width: `${r.value}px`,
              bottom: `${e.offsetScroll}px`,
            },
            class: `${S}-sticky-scroll`,
          },
          [
            y(
              "div",
              {
                onMousedown: b,
                ref: c,
                class: ye(`${S}-sticky-scroll-bar`, {
                  [`${S}-sticky-scroll-bar-active`]: h.value,
                }),
                style: {
                  width: `${i.value}px`,
                  transform: `translate3d(${f.value.scrollLeft}px, 0, 0)`,
                },
              },
              null
            ),
          ]
        );
      };
    },
  }),
  Do = fa() ? window : null;
function ws(e, t) {
  return w(() => {
    const {
        offsetHeader: o = 0,
        offsetSummary: n = 0,
        offsetScroll: l = 0,
        getContainer: a = () => Do,
      } = typeof e.value == "object" ? e.value : {},
      r = a() || Do,
      i = !!e.value;
    return {
      isSticky: i,
      stickyClassName: i ? `${t.value}-sticky-holder` : "",
      offsetHeader: o,
      offsetSummary: n,
      offsetScroll: l,
      container: r,
    };
  });
}
function $s(e, t) {
  return w(() => {
    const o = [],
      n = e.value,
      l = t.value;
    for (let a = 0; a < l; a += 1) {
      const r = n[a];
      if (r !== void 0) o[a] = r;
      else return null;
    }
    return o;
  });
}
const No = Ce({
  name: "FixedHolder",
  inheritAttrs: !1,
  props: [
    "columns",
    "flattenColumns",
    "stickyOffsets",
    "customHeaderRow",
    "noData",
    "maxContentScroll",
    "colWidths",
    "columCount",
    "direction",
    "fixHeader",
    "stickyTopOffset",
    "stickyBottomOffset",
    "stickyClassName",
  ],
  emits: ["scroll"],
  setup(e, t) {
    let { attrs: o, slots: n, emit: l } = t;
    const a = rt(),
      r = w(() => (a.isSticky && !e.fixHeader ? 0 : a.scrollbarSize)),
      i = me(),
      c = (p) => {
        const { currentTarget: s, deltaX: v } = p;
        v &&
          (l("scroll", { currentTarget: s, scrollLeft: s.scrollLeft + v }),
          p.preventDefault());
      },
      f = me();
    gt(() => {
      dt(() => {
        f.value = xt(i.value, "wheel", c);
      });
    }),
      Pt(() => {
        var p;
        (p = f.value) === null || p === void 0 || p.remove();
      });
    const u = w(() =>
        e.flattenColumns.every(
          (p) => p.width && p.width !== 0 && p.width !== "0px"
        )
      ),
      d = me([]),
      h = me([]);
    Le(() => {
      const p = e.flattenColumns[e.flattenColumns.length - 1],
        s = {
          fixed: p ? p.fixed : null,
          scrollbar: !0,
          customHeaderCell: () => ({ class: `${a.prefixCls}-cell-scrollbar` }),
        };
      (d.value = r.value ? [...e.columns, s] : e.columns),
        (h.value = r.value ? [...e.flattenColumns, s] : e.flattenColumns);
    });
    const x = w(() => {
        const { stickyOffsets: p, direction: s } = e,
          { right: v, left: k } = p;
        return C(C({}, p), {
          left: s === "rtl" ? [...k.map((m) => m + r.value), 0] : k,
          right: s === "rtl" ? v : [...v.map((m) => m + r.value), 0],
          isSticky: a.isSticky,
        });
      }),
      b = $s(He(e, "colWidths"), He(e, "columCount"));
    return () => {
      var p;
      const {
          noData: s,
          columCount: v,
          stickyTopOffset: k,
          stickyBottomOffset: m,
          stickyClassName: E,
          maxContentScroll: K,
        } = e,
        { isSticky: F } = a;
      return y(
        "div",
        {
          style: C(
            { overflow: "hidden" },
            F ? { top: `${k}px`, bottom: `${m}px` } : {}
          ),
          ref: i,
          class: ye(o.class, { [E]: !!E }),
        },
        [
          y(
            "table",
            {
              style: {
                tableLayout: "fixed",
                visibility: s || b.value ? null : "hidden",
              },
            },
            [
              (!s || !K || u.value) &&
                y(
                  Ll,
                  {
                    colWidths: b.value ? [...b.value, r.value] : [],
                    columCount: v + 1,
                    columns: h.value,
                  },
                  null
                ),
              (p = n.default) === null || p === void 0
                ? void 0
                : p.call(
                    n,
                    C(C({}, e), {
                      stickyOffsets: x.value,
                      columns: d.value,
                      flattenColumns: h.value,
                    })
                  ),
            ]
          ),
        ]
      );
    };
  },
});
function Bo(e) {
  for (
    var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    o[n - 1] = arguments[n];
  return ht(xr(o.map((l) => [l, He(e, l)])));
}
const ks = [],
  Ks = {},
  Rn = "rc-table-internal-hook",
  Os = Ce({
    name: "Table",
    inheritAttrs: !1,
    props: [
      "prefixCls",
      "data",
      "columns",
      "rowKey",
      "tableLayout",
      "scroll",
      "rowClassName",
      "title",
      "footer",
      "id",
      "showHeader",
      "components",
      "customRow",
      "customHeaderRow",
      "direction",
      "expandFixed",
      "expandColumnWidth",
      "expandedRowKeys",
      "defaultExpandedRowKeys",
      "expandedRowRender",
      "expandRowByClick",
      "expandIcon",
      "onExpand",
      "onExpandedRowsChange",
      "onUpdate:expandedRowKeys",
      "defaultExpandAllRows",
      "indentSize",
      "expandIconColumnIndex",
      "expandedRowClassName",
      "childrenColumnName",
      "rowExpandable",
      "sticky",
      "transformColumns",
      "internalHooks",
      "internalRefs",
      "canExpandable",
      "onUpdateInternalRefs",
      "transformCellText",
    ],
    emits: [
      "expand",
      "expandedRowsChange",
      "updateInternalRefs",
      "update:expandedRowKeys",
    ],
    setup(e, t) {
      let { attrs: o, slots: n, emit: l } = t;
      const a = w(() => e.data || ks),
        r = w(() => !!a.value.length),
        i = w(() => Fi(e.components, {})),
        c = ($, I) => Ol(i.value, $) || I,
        f = w(() => {
          const $ = e.rowKey;
          return typeof $ == "function" ? $ : (I) => I && I[$];
        }),
        u = w(() => e.expandIcon || xs),
        d = w(() => e.childrenColumnName || "children"),
        h = w(() =>
          e.expandedRowRender
            ? "row"
            : e.canExpandable ||
              a.value.some(($) => $ && typeof $ == "object" && $[d.value])
            ? "nest"
            : !1
        ),
        x = le([]);
      Le(() => {
        e.defaultExpandedRowKeys && (x.value = e.defaultExpandedRowKeys),
          e.defaultExpandAllRows && (x.value = Cs(a.value, f.value, d.value));
      })();
      const p = w(() => new Set(e.expandedRowKeys || x.value || [])),
        s = ($) => {
          const I = f.value($, a.value.indexOf($));
          let ee;
          const fe = p.value.has(I);
          fe
            ? (p.value.delete(I), (ee = [...p.value]))
            : (ee = [...p.value, I]),
            (x.value = ee),
            l("expand", !fe, $),
            l("update:expandedRowKeys", ee),
            l("expandedRowsChange", ee);
        },
        v = me(0),
        [k, m] = ss(
          C(C({}, fn(e)), {
            expandable: w(() => !!e.expandedRowRender),
            expandedKeys: p,
            getRowKey: f,
            onTriggerExpand: s,
            expandIcon: u,
          }),
          w(() => (e.internalHooks === Rn ? e.transformColumns : null))
        ),
        E = w(() => ({ columns: k.value, flattenColumns: m.value })),
        K = me(),
        F = me(),
        S = me(),
        _ = me({ scrollWidth: 0, clientWidth: 0 }),
        g = me(),
        [O, R] = St(!1),
        [A, L] = St(!1),
        [ne, ae] = Fl(new Map()),
        ue = w(() => sn(m.value)),
        be = w(() => ue.value.map(($) => ne.value.get($))),
        X = w(() => m.value.length),
        Y = ds(be, X, He(e, "direction")),
        j = w(() => e.scroll && Pn(e.scroll.y)),
        Z = w(() => (e.scroll && Pn(e.scroll.x)) || !!e.expandFixed),
        N = w(
          () =>
            Z.value &&
            m.value.some(($) => {
              let { fixed: I } = $;
              return I;
            })
        ),
        z = me(),
        M = ws(He(e, "sticky"), He(e, "prefixCls")),
        H = ht({}),
        J = w(() => {
          const $ = Object.values(H)[0];
          return (j.value || M.value.isSticky) && $;
        }),
        Q = ($, I) => {
          I ? (H[$] = I) : delete H[$];
        },
        _e = me({}),
        Oe = me({}),
        Pe = me({});
      Le(() => {
        j.value &&
          (Oe.value = { overflowY: "scroll", maxHeight: so(e.scroll.y) }),
          Z.value &&
            ((_e.value = { overflowX: "auto" }),
            j.value || (Oe.value = { overflowY: "hidden" }),
            (Pe.value = {
              width: e.scroll.x === !0 ? "auto" : so(e.scroll.x),
              minWidth: "100%",
            }));
      });
      const Te = ($, I) => {
          Wa(K.value) &&
            ae((ee) => {
              if (ee.get($) !== I) {
                const fe = new Map(ee);
                return fe.set($, I), fe;
              }
              return ee;
            });
        },
        [De, Me] = cs(null);
      function Re($, I) {
        if (!I) return;
        if (typeof I == "function") {
          I($);
          return;
        }
        const ee = I.$el || I;
        ee.scrollLeft !== $ && (ee.scrollLeft = $);
      }
      const Ie = ($) => {
          let { currentTarget: I, scrollLeft: ee } = $;
          var fe;
          const Se = e.direction === "rtl",
            T = typeof ee == "number" ? ee : I.scrollLeft,
            D = I || Ks;
          if (
            ((!Me() || Me() === D) &&
              (De(D),
              Re(T, F.value),
              Re(T, S.value),
              Re(T, g.value),
              Re(
                T,
                (fe = z.value) === null || fe === void 0
                  ? void 0
                  : fe.setScrollLeft
              )),
            I)
          ) {
            const { scrollWidth: B, clientWidth: W } = I;
            Se ? (R(-T < B - W), L(-T > 0)) : (R(T > 0), L(T < B - W));
          }
        },
        V = () => {
          Z.value && S.value ? Ie({ currentTarget: S.value }) : (R(!1), L(!1));
        };
      let ie;
      const q = ($) => {
          $ !== v.value && (V(), (v.value = K.value ? K.value.offsetWidth : $));
        },
        re = ($) => {
          let { width: I } = $;
          if ((clearTimeout(ie), v.value === 0)) {
            q(I);
            return;
          }
          ie = setTimeout(() => {
            q(I);
          }, 100);
        };
      Ae(
        [Z, () => e.data, () => e.columns],
        () => {
          Z.value && V();
        },
        { flush: "post" }
      );
      const [ce, we] = St(0);
      ji(),
        gt(() => {
          dt(() => {
            var $, I;
            V(),
              we(ja(S.value).width),
              (_.value = {
                scrollWidth:
                  (($ = S.value) === null || $ === void 0
                    ? void 0
                    : $.scrollWidth) || 0,
                clientWidth:
                  ((I = S.value) === null || I === void 0
                    ? void 0
                    : I.clientWidth) || 0,
              });
          });
        }),
        Wn(() => {
          dt(() => {
            var $, I;
            const ee =
                (($ = S.value) === null || $ === void 0
                  ? void 0
                  : $.scrollWidth) || 0,
              fe =
                ((I = S.value) === null || I === void 0
                  ? void 0
                  : I.clientWidth) || 0;
            (_.value.scrollWidth !== ee || _.value.clientWidth !== fe) &&
              (_.value = { scrollWidth: ee, clientWidth: fe });
          });
        }),
        Le(
          () => {
            e.internalHooks === Rn &&
              e.internalRefs &&
              e.onUpdateInternalRefs({
                body: S.value ? S.value.$el || S.value : null,
              });
          },
          { flush: "post" }
        );
      const se = w(() =>
          e.tableLayout
            ? e.tableLayout
            : N.value
            ? e.scroll.x === "max-content"
              ? "auto"
              : "fixed"
            : j.value ||
              M.value.isSticky ||
              m.value.some(($) => {
                let { ellipsis: I } = $;
                return I;
              })
            ? "fixed"
            : "auto"
        ),
        pe = () => {
          var $;
          return r.value
            ? null
            : (($ = n.emptyText) === null || $ === void 0
                ? void 0
                : $.call(n)) || "No Data";
        };
      Ni(
        ht(
          C(C({}, fn(Bo(e, "prefixCls", "direction", "transformCellText"))), {
            getComponent: c,
            scrollbarSize: ce,
            fixedInfoList: w(() =>
              m.value.map(($, I) => oo(I, I, m.value, Y.value, e.direction))
            ),
            isSticky: w(() => M.value.isSticky),
            summaryCollect: Q,
          })
        )
      ),
        es(
          ht(
            C(
              C(
                {},
                fn(
                  Bo(
                    e,
                    "rowClassName",
                    "expandedRowClassName",
                    "expandRowByClick",
                    "expandedRowRender",
                    "expandIconColumnIndex",
                    "indentSize"
                  )
                )
              ),
              {
                columns: k,
                flattenColumns: m,
                tableLayout: se,
                expandIcon: u,
                expandableType: h,
                onTriggerExpand: s,
              }
            )
          )
        ),
        os({ onColumnResize: Te }),
        Ji({ componentWidth: v, fixHeader: j, fixColumn: N, horizonScroll: Z });
      const ke = () =>
          y(
            as,
            {
              data: a.value,
              measureColumnWidth: j.value || Z.value || M.value.isSticky,
              expandedKeys: p.value,
              rowExpandable: e.rowExpandable,
              getRowKey: f.value,
              customRow: e.customRow,
              childrenColumnName: d.value,
            },
            { emptyNode: pe }
          ),
        P = () =>
          y(
            Ll,
            {
              colWidths: m.value.map(($) => {
                let { width: I } = $;
                return I;
              }),
              columns: m.value,
            },
            null
          );
      return () => {
        var $;
        const {
            prefixCls: I,
            scroll: ee,
            tableLayout: fe,
            direction: Se,
            title: T = n.title,
            footer: D = n.footer,
            id: B,
            showHeader: W,
            customHeaderRow: te,
          } = e,
          {
            isSticky: oe,
            offsetHeader: G,
            offsetSummary: he,
            offsetScroll: $e,
            stickyClassName: ve,
            container: ge,
          } = M.value,
          xe = c(["table"], "table"),
          ze = c(["body"]),
          je =
            ($ = n.summary) === null || $ === void 0
              ? void 0
              : $.call(n, { pageData: a.value });
        let We = () => null;
        const Be = {
          colWidths: be.value,
          columCount: m.value.length,
          stickyOffsets: Y.value,
          customHeaderRow: te,
          fixHeader: j.value,
          scroll: ee,
        };
        if (j.value || oe) {
          let yt = () => null;
          typeof ze == "function"
            ? ((yt = () =>
                ze(a.value, { scrollbarSize: ce.value, ref: S, onScroll: Ie })),
              (Be.colWidths = m.value.map((pt, un) => {
                let { width: jt } = pt;
                const Nt = un === k.value.length - 1 ? jt - ce.value : jt;
                return typeof Nt == "number" && !Number.isNaN(Nt) ? Nt : 0;
              })))
            : (yt = () =>
                y(
                  "div",
                  {
                    style: C(C({}, _e.value), Oe.value),
                    onScroll: Ie,
                    ref: S,
                    class: ye(`${I}-body`),
                  },
                  [
                    y(
                      xe,
                      { style: C(C({}, Pe.value), { tableLayout: se.value }) },
                      {
                        default: () => [
                          P(),
                          ke(),
                          !J.value &&
                            je &&
                            y(
                              Vt,
                              {
                                stickyOffsets: Y.value,
                                flattenColumns: m.value,
                              },
                              { default: () => [je] }
                            ),
                        ],
                      }
                    ),
                  ]
                ));
          const Mt = C(
            C(
              C(
                {
                  noData: !a.value.length,
                  maxContentScroll: Z.value && ee.x === "max-content",
                },
                Be
              ),
              E.value
            ),
            { direction: Se, stickyClassName: ve, onScroll: Ie }
          );
          We = () =>
            y(at, null, [
              W !== !1 &&
                y(
                  No,
                  U(
                    U({}, Mt),
                    {},
                    { stickyTopOffset: G, class: `${I}-header`, ref: F }
                  ),
                  {
                    default: (pt) =>
                      y(at, null, [
                        y(Ro, pt, null),
                        J.value === "top" && y(Vt, pt, { default: () => [je] }),
                      ]),
                  }
                ),
              yt(),
              J.value &&
                J.value !== "top" &&
                y(
                  No,
                  U(
                    U({}, Mt),
                    {},
                    { stickyBottomOffset: he, class: `${I}-summary`, ref: g }
                  ),
                  { default: (pt) => y(Vt, pt, { default: () => [je] }) }
                ),
              oe &&
                S.value &&
                y(
                  Ss,
                  {
                    ref: z,
                    offsetScroll: $e,
                    scrollBodyRef: S,
                    onScroll: Ie,
                    container: ge,
                    scrollBodySizeInfo: _.value,
                  },
                  null
                ),
            ]);
        } else
          We = () =>
            y(
              "div",
              {
                style: C(C({}, _e.value), Oe.value),
                class: ye(`${I}-content`),
                onScroll: Ie,
                ref: S,
              },
              [
                y(
                  xe,
                  { style: C(C({}, Pe.value), { tableLayout: se.value }) },
                  {
                    default: () => [
                      P(),
                      W !== !1 && y(Ro, U(U({}, Be), E.value), null),
                      ke(),
                      je &&
                        y(
                          Vt,
                          { stickyOffsets: Y.value, flattenColumns: m.value },
                          { default: () => [je] }
                        ),
                    ],
                  }
                ),
              ]
            );
        const nt = Vn(o, { aria: !0, data: !0 }),
          ft = () =>
            y(
              "div",
              U(
                U({}, nt),
                {},
                {
                  class: ye(I, {
                    [`${I}-rtl`]: Se === "rtl",
                    [`${I}-ping-left`]: O.value,
                    [`${I}-ping-right`]: A.value,
                    [`${I}-layout-fixed`]: fe === "fixed",
                    [`${I}-fixed-header`]: j.value,
                    [`${I}-fixed-column`]: N.value,
                    [`${I}-scroll-horizontal`]: Z.value,
                    [`${I}-has-fix-left`]: m.value[0] && m.value[0].fixed,
                    [`${I}-has-fix-right`]:
                      m.value[X.value - 1] &&
                      m.value[X.value - 1].fixed === "right",
                    [o.class]: o.class,
                  }),
                  style: o.style,
                  id: B,
                  ref: K,
                }
              ),
              [
                T &&
                  y(
                    In,
                    { class: `${I}-title` },
                    { default: () => [T(a.value)] }
                  ),
                y("div", { class: `${I}-container` }, [We()]),
                D &&
                  y(
                    In,
                    { class: `${I}-footer` },
                    { default: () => [D(a.value)] }
                  ),
              ]
            );
        return Z.value ? y(rl, { onResize: re }, { default: ft }) : ft();
      };
    },
  });
function Es() {
  const e = C({}, arguments.length <= 0 ? void 0 : arguments[0]);
  for (let t = 1; t < arguments.length; t++) {
    const o = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    o &&
      Object.keys(o).forEach((n) => {
        const l = o[n];
        l !== void 0 && (e[n] = l);
      });
  }
  return e;
}
const Dn = 10;
function Ps(e, t) {
  const o = { current: e.current, pageSize: e.pageSize };
  return (
    Object.keys(t && typeof t == "object" ? t : {}).forEach((l) => {
      const a = e[l];
      typeof a != "function" && (o[l] = a);
    }),
    o
  );
}
function _s(e, t, o) {
  const n = w(() => (t.value && typeof t.value == "object" ? t.value : {})),
    l = w(() => n.value.total || 0),
    [a, r] = St(() => ({
      current: "defaultCurrent" in n.value ? n.value.defaultCurrent : 1,
      pageSize: "defaultPageSize" in n.value ? n.value.defaultPageSize : Dn,
    })),
    i = w(() => {
      const u = Es(a.value, n.value, {
          total: l.value > 0 ? l.value : e.value,
        }),
        d = Math.ceil((l.value || e.value) / u.pageSize);
      return u.current > d && (u.current = d || 1), u;
    }),
    c = (u, d) => {
      t.value !== !1 && r({ current: u ?? 1, pageSize: d || i.value.pageSize });
    },
    f = (u, d) => {
      var h, x;
      t.value &&
        ((x = (h = n.value).onChange) === null ||
          x === void 0 ||
          x.call(h, u, d)),
        c(u, d),
        o(u, d || i.value.pageSize);
    };
  return [
    w(() => (t.value === !1 ? {} : C(C({}, i.value), { onChange: f }))),
    c,
  ];
}
function Ts(e, t, o) {
  const n = le({});
  Ae(
    [e, t, o],
    () => {
      const a = new Map(),
        r = o.value,
        i = t.value;
      function c(f) {
        f.forEach((u, d) => {
          const h = r(u, d);
          a.set(h, u), u && typeof u == "object" && i in u && c(u[i] || []);
        });
      }
      c(e.value), (n.value = { kvMap: a });
    },
    { deep: !0, immediate: !0 }
  );
  function l(a) {
    return n.value.kvMap.get(a);
  }
  return [l];
}
const st = {},
  Nn = "SELECT_ALL",
  Bn = "SELECT_INVERT",
  Fn = "SELECT_NONE",
  Is = [];
function zl(e, t) {
  let o = [];
  return (
    (t || []).forEach((n) => {
      o.push(n),
        n && typeof n == "object" && e in n && (o = [...o, ...zl(e, n[e])]);
    }),
    o
  );
}
function Rs(e, t) {
  const o = w(() => {
      const g = e.value || {},
        { checkStrictly: O = !0 } = g;
      return C(C({}, g), { checkStrictly: O });
    }),
    [n, l] = er(
      o.value.selectedRowKeys || o.value.defaultSelectedRowKeys || Is,
      { value: w(() => o.value.selectedRowKeys) }
    ),
    a = le(new Map()),
    r = (g) => {
      if (o.value.preserveSelectedRowKeys) {
        const O = new Map();
        g.forEach((R) => {
          let A = t.getRecordByKey(R);
          !A && a.value.has(R) && (A = a.value.get(R)), O.set(R, A);
        }),
          (a.value = O);
      }
    };
  Le(() => {
    r(n.value);
  });
  const i = w(() =>
      o.value.checkStrictly
        ? null
        : Un(t.data.value, {
            externalGetKey: t.getRowKey.value,
            childrenPropName: t.childrenColumnName.value,
          }).keyEntities
    ),
    c = w(() => zl(t.childrenColumnName.value, t.pageData.value)),
    f = w(() => {
      const g = new Map(),
        O = t.getRowKey.value,
        R = o.value.getCheckboxProps;
      return (
        c.value.forEach((A, L) => {
          const ne = O(A, L),
            ae = (R ? R(A) : null) || {};
          g.set(ne, ae);
        }),
        g
      );
    }),
    { maxLevel: u, levelEntities: d } = wl(i),
    h = (g) => {
      var O;
      return !!(
        !((O = f.value.get(t.getRowKey.value(g))) === null || O === void 0) &&
        O.disabled
      );
    },
    x = w(() => {
      if (o.value.checkStrictly) return [n.value || [], []];
      const { checkedKeys: g, halfCheckedKeys: O } = It(
        n.value,
        !0,
        i.value,
        u.value,
        d.value,
        h
      );
      return [g || [], O];
    }),
    b = w(() => x.value[0]),
    p = w(() => x.value[1]),
    s = w(() => {
      const g = o.value.type === "radio" ? b.value.slice(0, 1) : b.value;
      return new Set(g);
    }),
    v = w(() => (o.value.type === "radio" ? new Set() : new Set(p.value))),
    [k, m] = St(null),
    E = (g) => {
      let O, R;
      r(g);
      const { preserveSelectedRowKeys: A, onChange: L } = o.value,
        { getRecordByKey: ne } = t;
      A
        ? ((O = g), (R = g.map((ae) => a.value.get(ae))))
        : ((O = []),
          (R = []),
          g.forEach((ae) => {
            const ue = ne(ae);
            ue !== void 0 && (O.push(ae), R.push(ue));
          })),
        l(O),
        L == null || L(O, R);
    },
    K = (g, O, R, A) => {
      const { onSelect: L } = o.value,
        { getRecordByKey: ne } = t || {};
      if (L) {
        const ae = R.map((ue) => ne(ue));
        L(ne(g), O, ae, A);
      }
      E(R);
    },
    F = w(() => {
      const {
          onSelectInvert: g,
          onSelectNone: O,
          selections: R,
          hideSelectAll: A,
        } = o.value,
        { data: L, pageData: ne, getRowKey: ae, locale: ue } = t;
      return !R || A
        ? null
        : (R === !0 ? [Nn, Bn, Fn] : R).map((X) =>
            X === Nn
              ? {
                  key: "all",
                  text: ue.value.selectionAll,
                  onSelect() {
                    E(
                      L.value
                        .map((Y, j) => ae.value(Y, j))
                        .filter((Y) => {
                          const j = f.value.get(Y);
                          return !(j != null && j.disabled) || s.value.has(Y);
                        })
                    );
                  },
                }
              : X === Bn
              ? {
                  key: "invert",
                  text: ue.value.selectInvert,
                  onSelect() {
                    const Y = new Set(s.value);
                    ne.value.forEach((Z, N) => {
                      const z = ae.value(Z, N),
                        M = f.value.get(z);
                      (M != null && M.disabled) ||
                        (Y.has(z) ? Y.delete(z) : Y.add(z));
                    });
                    const j = Array.from(Y);
                    g &&
                      (tt(
                        !1,
                        "Table",
                        "`onSelectInvert` will be removed in future. Please use `onChange` instead."
                      ),
                      g(j)),
                      E(j);
                  },
                }
              : X === Fn
              ? {
                  key: "none",
                  text: ue.value.selectNone,
                  onSelect() {
                    O == null || O(),
                      E(
                        Array.from(s.value).filter((Y) => {
                          const j = f.value.get(Y);
                          return j == null ? void 0 : j.disabled;
                        })
                      );
                  },
                }
              : X
          );
    }),
    S = w(() => c.value.length);
  return [
    (g) => {
      var O;
      const {
          onSelectAll: R,
          onSelectMultiple: A,
          columnWidth: L,
          type: ne,
          fixed: ae,
          renderCell: ue,
          hideSelectAll: be,
          checkStrictly: X,
        } = o.value,
        {
          prefixCls: Y,
          getRecordByKey: j,
          getRowKey: Z,
          expandType: N,
          getPopupContainer: z,
        } = t;
      if (!e.value) return g.filter((q) => q !== st);
      let M = g.slice();
      const H = new Set(s.value),
        J = c.value.map(Z.value).filter((q) => !f.value.get(q).disabled),
        Q = J.every((q) => H.has(q)),
        _e = J.some((q) => H.has(q)),
        Oe = () => {
          const q = [];
          Q
            ? J.forEach((ce) => {
                H.delete(ce), q.push(ce);
              })
            : J.forEach((ce) => {
                H.has(ce) || (H.add(ce), q.push(ce));
              });
          const re = Array.from(H);
          R == null ||
            R(
              !Q,
              re.map((ce) => j(ce)),
              q.map((ce) => j(ce))
            ),
            E(re);
        };
      let Pe;
      if (ne !== "radio") {
        let q;
        if (F.value) {
          const pe = y(
            en,
            { getPopupContainer: z.value },
            {
              default: () => [
                F.value.map((ke, P) => {
                  const { key: $, text: I, onSelect: ee } = ke;
                  return y(
                    en.Item,
                    {
                      key: $ || P,
                      onClick: () => {
                        ee == null || ee(J);
                      },
                    },
                    { default: () => [I] }
                  );
                }),
              ],
            }
          );
          q = y("div", { class: `${Y.value}-selection-extra` }, [
            y(
              wt,
              { overlay: pe, getPopupContainer: z.value },
              { default: () => [y("span", null, [y(tr, null, null)])] }
            ),
          ]);
        }
        const re = c.value
            .map((pe, ke) => {
              const P = Z.value(pe, ke),
                $ = f.value.get(P) || {};
              return C({ checked: H.has(P) }, $);
            })
            .filter((pe) => {
              let { disabled: ke } = pe;
              return ke;
            }),
          ce = !!re.length && re.length === S.value,
          we =
            ce &&
            re.every((pe) => {
              let { checked: ke } = pe;
              return ke;
            }),
          se =
            ce &&
            re.some((pe) => {
              let { checked: ke } = pe;
              return ke;
            });
        Pe =
          !be &&
          y("div", { class: `${Y.value}-selection` }, [
            y(
              Qt,
              {
                checked: ce ? we : !!S.value && Q,
                indeterminate: ce ? !we && se : !Q && _e,
                onChange: Oe,
                disabled: S.value === 0 || ce,
                "aria-label": q ? "Custom selection" : "Select all",
                skipGroup: !0,
              },
              null
            ),
            q,
          ]);
      }
      let Te;
      ne === "radio"
        ? (Te = (q) => {
            let { record: re, index: ce } = q;
            const we = Z.value(re, ce),
              se = H.has(we);
            return {
              node: y(
                Ve,
                U(
                  U({}, f.value.get(we)),
                  {},
                  {
                    checked: se,
                    onClick: (pe) => pe.stopPropagation(),
                    onChange: (pe) => {
                      H.has(we) || K(we, !0, [we], pe.nativeEvent);
                    },
                  }
                ),
                null
              ),
              checked: se,
            };
          })
        : (Te = (q) => {
            let { record: re, index: ce } = q;
            var we;
            const se = Z.value(re, ce),
              pe = H.has(se),
              ke = v.value.has(se),
              P = f.value.get(se);
            let $;
            return (
              N.value === "nest"
                ? (($ = ke),
                  tt(
                    typeof (P == null ? void 0 : P.indeterminate) != "boolean",
                    "Table",
                    "set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource."
                  ))
                : ($ =
                    (we = P == null ? void 0 : P.indeterminate) !== null &&
                    we !== void 0
                      ? we
                      : ke),
              {
                node: y(
                  Qt,
                  U(
                    U({}, P),
                    {},
                    {
                      indeterminate: $,
                      checked: pe,
                      skipGroup: !0,
                      onClick: (I) => I.stopPropagation(),
                      onChange: (I) => {
                        let { nativeEvent: ee } = I;
                        const { shiftKey: fe } = ee;
                        let Se = -1,
                          T = -1;
                        if (fe && X) {
                          const D = new Set([k.value, se]);
                          J.some((B, W) => {
                            if (D.has(B))
                              if (Se === -1) Se = W;
                              else return (T = W), !0;
                            return !1;
                          });
                        }
                        if (T !== -1 && Se !== T && X) {
                          const D = J.slice(Se, T + 1),
                            B = [];
                          pe
                            ? D.forEach((te) => {
                                H.has(te) && (B.push(te), H.delete(te));
                              })
                            : D.forEach((te) => {
                                H.has(te) || (B.push(te), H.add(te));
                              });
                          const W = Array.from(H);
                          A == null ||
                            A(
                              !pe,
                              W.map((te) => j(te)),
                              B.map((te) => j(te))
                            ),
                            E(W);
                        } else {
                          const D = b.value;
                          if (X) {
                            const B = pe ? ot(D, se) : it(D, se);
                            K(se, !pe, B, ee);
                          } else {
                            const B = It(
                                [...D, se],
                                !0,
                                i.value,
                                u.value,
                                d.value,
                                h
                              ),
                              { checkedKeys: W, halfCheckedKeys: te } = B;
                            let oe = W;
                            if (pe) {
                              const G = new Set(W);
                              G.delete(se),
                                (oe = It(
                                  Array.from(G),
                                  { checked: !1, halfCheckedKeys: te },
                                  i.value,
                                  u.value,
                                  d.value,
                                  h
                                ).checkedKeys);
                            }
                            K(se, !pe, oe, ee);
                          }
                        }
                        m(se);
                      },
                    }
                  ),
                  null
                ),
                checked: pe,
              }
            );
          });
      const De = (q) => {
        let { record: re, index: ce } = q;
        const { node: we, checked: se } = Te({ record: re, index: ce });
        return ue ? ue(se, re, ce, we) : we;
      };
      if (!M.includes(st))
        if (
          M.findIndex((q) => {
            var re;
            return (
              ((re = q[Rt]) === null || re === void 0
                ? void 0
                : re.columnType) === "EXPAND_COLUMN"
            );
          }) === 0
        ) {
          const [q, ...re] = M;
          M = [q, st, ...re];
        } else M = [st, ...M];
      const Me = M.indexOf(st);
      M = M.filter((q, re) => q !== st || re === Me);
      const Re = M[Me - 1],
        Ie = M[Me + 1];
      let V = ae;
      V === void 0 &&
        ((Ie == null ? void 0 : Ie.fixed) !== void 0
          ? (V = Ie.fixed)
          : (Re == null ? void 0 : Re.fixed) !== void 0 && (V = Re.fixed)),
        V &&
          Re &&
          ((O = Re[Rt]) === null || O === void 0 ? void 0 : O.columnType) ===
            "EXPAND_COLUMN" &&
          Re.fixed === void 0 &&
          (Re.fixed = V);
      const ie = {
        fixed: V,
        width: L,
        className: `${Y.value}-selection-column`,
        title: o.value.columnTitle || Pe,
        customRender: De,
        [Rt]: { class: `${Y.value}-selection-col` },
      };
      return M.map((q) => (q === st ? ie : q));
    },
    s,
  ];
}
var Ds =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
        t.indexOf(n[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
          (o[n[l]] = e[n[l]]);
    return o;
  };
function kt(e, t) {
  return "key" in e && e.key !== void 0 && e.key !== null
    ? e.key
    : e.dataIndex
    ? Array.isArray(e.dataIndex)
      ? e.dataIndex.join(".")
      : e.dataIndex
    : t;
}
function Ht(e, t) {
  return t ? `${t}-${e}` : `${e}`;
}
function lo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = tl(e),
    o = [];
  return (
    t.forEach((n) => {
      var l, a, r, i;
      if (!n) return;
      const c = n.key,
        f = ((l = n.props) === null || l === void 0 ? void 0 : l.style) || {},
        u = ((a = n.props) === null || a === void 0 ? void 0 : a.class) || "",
        d = n.props || {};
      for (const [s, v] of Object.entries(d)) d[el(s)] = v;
      const h = n.children || {},
        { default: x } = h,
        b = Ds(h, ["default"]),
        p = C(C(C({}, b), d), { style: f, class: u });
      if (
        (c && (p.key = c),
        !((r = n.type) === null || r === void 0) && r.__ANT_TABLE_COLUMN_GROUP)
      )
        p.children = Hl(typeof x == "function" ? x() : x);
      else {
        const s =
          (i = n.children) === null || i === void 0 ? void 0 : i.default;
        p.customRender = p.customRender || s;
      }
      o.push(p);
    }),
    o
  );
}
const Yt = "ascend",
  gn = "descend";
function nn(e) {
  return typeof e.sorter == "object" && typeof e.sorter.multiple == "number"
    ? e.sorter.multiple
    : !1;
}
function Fo(e) {
  return typeof e == "function"
    ? e
    : e && typeof e == "object" && e.compare
    ? e.compare
    : !1;
}
function Ns(e, t) {
  return t ? e[e.indexOf(t) + 1] : e[0];
}
function Ln(e, t, o) {
  let n = [];
  function l(a, r) {
    n.push({
      column: a,
      key: kt(a, r),
      multiplePriority: nn(a),
      sortOrder: a.sortOrder,
    });
  }
  return (
    (e || []).forEach((a, r) => {
      const i = Ht(r, o);
      a.children
        ? ("sortOrder" in a && l(a, i), (n = [...n, ...Ln(a.children, t, i)]))
        : a.sorter &&
          ("sortOrder" in a
            ? l(a, i)
            : t &&
              a.defaultSortOrder &&
              n.push({
                column: a,
                key: kt(a, i),
                multiplePriority: nn(a),
                sortOrder: a.defaultSortOrder,
              }));
    }),
    n
  );
}
function Ml(e, t, o, n, l, a, r, i) {
  return (t || []).map((c, f) => {
    const u = Ht(f, i);
    let d = c;
    if (d.sorter) {
      const h = d.sortDirections || l,
        x = d.showSorterTooltip === void 0 ? r : d.showSorterTooltip,
        b = kt(d, u),
        p = o.find((g) => {
          let { key: O } = g;
          return O === b;
        }),
        s = p ? p.sortOrder : null,
        v = Ns(h, s),
        k =
          h.includes(Yt) &&
          y(
            pr,
            {
              class: ye(`${e}-column-sorter-up`, { active: s === Yt }),
              role: "presentation",
            },
            null
          ),
        m =
          h.includes(gn) &&
          y(
            ui,
            {
              role: "presentation",
              class: ye(`${e}-column-sorter-down`, { active: s === gn }),
            },
            null
          ),
        { cancelSort: E, triggerAsc: K, triggerDesc: F } = a || {};
      let S = E;
      v === gn ? (S = F) : v === Yt && (S = K);
      const _ = typeof x == "object" ? x : { title: S };
      d = C(C({}, d), {
        className: ye(d.className, { [`${e}-column-sort`]: s }),
        title: (g) => {
          const O = y("div", { class: `${e}-column-sorters` }, [
            y("span", { class: `${e}-column-title` }, [lo(c.title, g)]),
            y(
              "span",
              {
                class: ye(`${e}-column-sorter`, {
                  [`${e}-column-sorter-full`]: !!(k && m),
                }),
              },
              [y("span", { class: `${e}-column-sorter-inner` }, [k, m])]
            ),
          ]);
          return x ? y(sl, _, { default: () => [O] }) : O;
        },
        customHeaderCell: (g) => {
          const O = (c.customHeaderCell && c.customHeaderCell(g)) || {},
            R = O.onClick,
            A = O.onKeydown;
          return (
            (O.onClick = (L) => {
              n({ column: c, key: b, sortOrder: v, multiplePriority: nn(c) }),
                R && R(L);
            }),
            (O.onKeydown = (L) => {
              L.keyCode === vt.ENTER &&
                (n({
                  column: c,
                  key: b,
                  sortOrder: v,
                  multiplePriority: nn(c),
                }),
                A == null || A(L));
            }),
            s && (O["aria-sort"] = s === "ascend" ? "ascending" : "descending"),
            (O.class = ye(O.class, `${e}-column-has-sorters`)),
            (O.tabindex = 0),
            O
          );
        },
      });
    }
    return (
      "children" in d &&
        (d = C(C({}, d), { children: Ml(e, d.children, o, n, l, a, r, u) })),
      d
    );
  });
}
function Lo(e) {
  const { column: t, sortOrder: o } = e;
  return { column: t, order: o, field: t.dataIndex, columnKey: t.key };
}
function Ao(e) {
  const t = e
    .filter((o) => {
      let { sortOrder: n } = o;
      return n;
    })
    .map(Lo);
  return t.length === 0 && e.length
    ? C(C({}, Lo(e[e.length - 1])), { column: void 0 })
    : t.length <= 1
    ? t[0] || {}
    : t;
}
function An(e, t, o) {
  const n = t.slice().sort((r, i) => i.multiplePriority - r.multiplePriority),
    l = e.slice(),
    a = n.filter((r) => {
      let {
        column: { sorter: i },
        sortOrder: c,
      } = r;
      return Fo(i) && c;
    });
  return a.length
    ? l
        .sort((r, i) => {
          for (let c = 0; c < a.length; c += 1) {
            const f = a[c],
              {
                column: { sorter: u },
                sortOrder: d,
              } = f,
              h = Fo(u);
            if (h && d) {
              const x = h(r, i, d);
              if (x !== 0) return d === Yt ? x : -x;
            }
          }
          return 0;
        })
        .map((r) => {
          const i = r[o];
          return i ? C(C({}, r), { [o]: An(i, t, o) }) : r;
        })
    : l;
}
function Bs(e) {
  let {
    prefixCls: t,
    mergedColumns: o,
    onSorterChange: n,
    sortDirections: l,
    tableLocale: a,
    showSorterTooltip: r,
  } = e;
  const [i, c] = St(Ln(o.value, !0)),
    f = w(() => {
      let b = !0;
      const p = Ln(o.value, !1);
      if (!p.length) return i.value;
      const s = [];
      function v(m) {
        b ? s.push(m) : s.push(C(C({}, m), { sortOrder: null }));
      }
      let k = null;
      return (
        p.forEach((m) => {
          k === null
            ? (v(m),
              m.sortOrder && (m.multiplePriority === !1 ? (b = !1) : (k = !0)))
            : ((k && m.multiplePriority !== !1) || (b = !1), v(m));
        }),
        s
      );
    }),
    u = w(() => {
      const b = f.value.map((p) => {
        let { column: s, sortOrder: v } = p;
        return { column: s, order: v };
      });
      return {
        sortColumns: b,
        sortColumn: b[0] && b[0].column,
        sortOrder: b[0] && b[0].order,
      };
    });
  function d(b) {
    let p;
    b.multiplePriority === !1 ||
    !f.value.length ||
    f.value[0].multiplePriority === !1
      ? (p = [b])
      : (p = [
          ...f.value.filter((s) => {
            let { key: v } = s;
            return v !== b.key;
          }),
          b,
        ]),
      c(p),
      n(Ao(p), p);
  }
  const h = (b) => Ml(t.value, b, f.value, d, l.value, a.value, r.value),
    x = w(() => Ao(f.value));
  return [h, f, u, x];
}
const Fs = (e) => {
    const { keyCode: t } = e;
    t === vt.ENTER && e.stopPropagation();
  },
  Ls = (e, t) => {
    let { slots: o } = t;
    var n;
    return y("div", { onClick: (l) => l.stopPropagation(), onKeydown: Fs }, [
      (n = o.default) === null || n === void 0 ? void 0 : n.call(o),
    ]);
  },
  As = Ls,
  zo = Ce({
    compatConfig: { MODE: 3 },
    name: "FilterSearch",
    inheritAttrs: !1,
    props: {
      value: et(),
      onChange: Ee(),
      filterSearch: Ue([Boolean, Function]),
      tablePrefixCls: et(),
      locale: lt(),
    },
    setup(e) {
      return () => {
        const {
          value: t,
          onChange: o,
          filterSearch: n,
          tablePrefixCls: l,
          locale: a,
        } = e;
        return n
          ? y("div", { class: `${l}-filter-dropdown-search` }, [
              y(
                vr,
                {
                  placeholder: a.filterSearchPlaceholder,
                  onChange: o,
                  value: t,
                  htmlSize: 1,
                  class: `${l}-filter-dropdown-search-input`,
                },
                { prefix: () => y(Ga, null, null) }
              ),
            ])
          : null;
      };
    },
  });
var Ho =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
        t.indexOf(n[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
          (o[n[l]] = e[n[l]]);
    return o;
  };
const zs = Ce({
  compatConfig: { MODE: 3 },
  name: "MotionTreeNode",
  inheritAttrs: !1,
  props: C(C({}, bl), {
    active: Boolean,
    motion: Object,
    motionNodes: { type: Array },
    onMotionStart: Function,
    onMotionEnd: Function,
    motionType: String,
  }),
  setup(e, t) {
    let { attrs: o, slots: n } = t;
    const l = le(!0),
      a = Xn(),
      r = le(!1),
      i = w(() => (e.motion ? e.motion : mr())),
      c = (f, u) => {
        var d, h, x, b;
        u === "appear"
          ? (h =
              (d = i.value) === null || d === void 0
                ? void 0
                : d.onAfterEnter) === null ||
            h === void 0 ||
            h.call(d, f)
          : u === "leave" &&
            ((b =
              (x = i.value) === null || x === void 0
                ? void 0
                : x.onAfterLeave) === null ||
              b === void 0 ||
              b.call(x, f)),
          r.value || e.onMotionEnd(),
          (r.value = !0);
      };
    return (
      Ae(
        () => e.motionNodes,
        () => {
          e.motionNodes &&
            e.motionType === "hide" &&
            l.value &&
            dt(() => {
              l.value = !1;
            });
        },
        { immediate: !0, flush: "post" }
      ),
      gt(() => {
        e.motionNodes && e.onMotionStart();
      }),
      Pt(() => {
        e.motionNodes && c();
      }),
      () => {
        const {
            motion: f,
            motionNodes: u,
            motionType: d,
            active: h,
            eventKey: x,
          } = e,
          b = Ho(e, [
            "motion",
            "motionNodes",
            "motionType",
            "active",
            "eventKey",
          ]);
        return u
          ? y(
              Ba,
              U(
                U({}, i.value),
                {},
                {
                  appear: d === "show",
                  onAfterAppear: (p) => c(p, "appear"),
                  onAfterLeave: (p) => c(p, "leave"),
                }
              ),
              {
                default: () => [
                  Da(
                    y(
                      "div",
                      { class: `${a.value.prefixCls}-treenode-motion` },
                      [
                        u.map((p) => {
                          const s = Ho(p.data, []),
                            { title: v, key: k, isStart: m, isEnd: E } = p;
                          return (
                            delete s.children,
                            y(
                              Kn,
                              U(
                                U({}, s),
                                {},
                                {
                                  title: v,
                                  active: h,
                                  data: p.data,
                                  key: k,
                                  eventKey: k,
                                  isStart: m,
                                  isEnd: E,
                                }
                              ),
                              n
                            )
                          );
                        }),
                      ]
                    ),
                    [[Na, l.value]]
                  ),
                ],
              }
            )
          : y(
              Kn,
              U(
                U({ class: o.class, style: o.style }, b),
                {},
                { active: h, eventKey: x }
              ),
              n
            );
      }
    );
  },
});
function Hs() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const o = e.length,
    n = t.length;
  if (Math.abs(o - n) !== 1) return { add: !1, key: null };
  function l(a, r) {
    const i = new Map();
    a.forEach((f) => {
      i.set(f, !0);
    });
    const c = r.filter((f) => !i.has(f));
    return c.length === 1 ? c[0] : null;
  }
  return o < n ? { add: !0, key: l(e, t) } : { add: !1, key: l(t, e) };
}
function Mo(e, t, o) {
  const n = e.findIndex((r) => r.key === o),
    l = e[n + 1],
    a = t.findIndex((r) => r.key === o);
  if (l) {
    const r = t.findIndex((i) => i.key === l.key);
    return t.slice(a + 1, r);
  }
  return t.slice(a + 1);
}
var jo =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
        t.indexOf(n[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
          (o[n[l]] = e[n[l]]);
    return o;
  };
const Wo = {
    width: 0,
    height: 0,
    display: "flex",
    overflow: "hidden",
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  Ms = () => {},
  Kt = `RC_TREE_MOTION_${Math.random()}`,
  zn = { key: Kt },
  jl = { key: Kt, level: 0, index: 0, pos: "0", node: zn, nodes: [zn] },
  Vo = {
    parent: null,
    children: [],
    pos: jl.pos,
    data: zn,
    title: null,
    key: Kt,
    isStart: [],
    isEnd: [],
  };
function Xo(e, t, o, n) {
  return t === !1 || !o ? e : e.slice(0, Math.ceil(o / n) + 1);
}
function Go(e) {
  const { key: t, pos: o } = e;
  return zt(t, o);
}
function js(e) {
  let t = String(e.key),
    o = e;
  for (; o.parent; ) (o = o.parent), (t = `${o.key} > ${t}`);
  return t;
}
const Ws = Ce({
  compatConfig: { MODE: 3 },
  name: "NodeList",
  inheritAttrs: !1,
  props: Yr,
  setup(e, t) {
    let { expose: o, attrs: n } = t;
    const l = me(),
      a = me(),
      { expandedKeys: r, flattenNodes: i } = yl();
    o({
      scrollTo: (p) => {
        l.value.scrollTo(p);
      },
      getIndentWidth: () => a.value.offsetWidth,
    });
    const c = le(i.value),
      f = le([]),
      u = me(null);
    function d() {
      (c.value = i.value),
        (f.value = []),
        (u.value = null),
        e.onListChangeEnd();
    }
    const h = Xn();
    Ae([() => r.value.slice(), i], (p, s) => {
      let [v, k] = p,
        [m, E] = s;
      const K = Hs(m, v);
      if (K.key !== null) {
        const { virtual: F, height: S, itemHeight: _ } = e;
        if (K.add) {
          const g = E.findIndex((A) => {
              let { key: L } = A;
              return L === K.key;
            }),
            O = Xo(Mo(E, k, K.key), F, S, _),
            R = E.slice();
          R.splice(g + 1, 0, Vo),
            (c.value = R),
            (f.value = O),
            (u.value = "show");
        } else {
          const g = k.findIndex((A) => {
              let { key: L } = A;
              return L === K.key;
            }),
            O = Xo(Mo(k, E, K.key), F, S, _),
            R = k.slice();
          R.splice(g + 1, 0, Vo),
            (c.value = R),
            (f.value = O),
            (u.value = "hide");
        }
      } else E !== k && (c.value = k);
    }),
      Ae(
        () => h.value.dragging,
        (p) => {
          p || d();
        }
      );
    const x = w(() => (e.motion === void 0 ? c.value : i.value)),
      b = () => {
        e.onActiveChange(null);
      };
    return () => {
      const p = C(C({}, e), n),
        {
          prefixCls: s,
          selectable: v,
          checkable: k,
          disabled: m,
          motion: E,
          height: K,
          itemHeight: F,
          virtual: S,
          focusable: _,
          activeItem: g,
          focused: O,
          tabindex: R,
          onKeydown: A,
          onFocus: L,
          onBlur: ne,
          onListChangeStart: ae,
          onListChangeEnd: ue,
        } = p,
        be = jo(p, [
          "prefixCls",
          "selectable",
          "checkable",
          "disabled",
          "motion",
          "height",
          "itemHeight",
          "virtual",
          "focusable",
          "activeItem",
          "focused",
          "tabindex",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onListChangeStart",
          "onListChangeEnd",
        ]);
      return y(at, null, [
        O && g && y("span", { style: Wo, "aria-live": "assertive" }, [js(g)]),
        y("div", null, [
          y(
            "input",
            {
              style: Wo,
              disabled: _ === !1 || m,
              tabindex: _ !== !1 ? R : null,
              onKeydown: A,
              onFocus: L,
              onBlur: ne,
              value: "",
              onChange: Ms,
              "aria-label": "for screen reader",
            },
            null
          ),
        ]),
        y(
          "div",
          {
            class: `${s}-treenode`,
            "aria-hidden": !0,
            style: {
              position: "absolute",
              pointerEvents: "none",
              visibility: "hidden",
              height: 0,
              overflow: "hidden",
            },
          },
          [
            y("div", { class: `${s}-indent` }, [
              y("div", { ref: a, class: `${s}-indent-unit` }, null),
            ]),
          ]
        ),
        y(
          nr,
          U(
            U({}, Dt(be, ["onActiveChange"])),
            {},
            {
              data: x.value,
              itemKey: Go,
              height: K,
              fullHeight: !1,
              virtual: S,
              itemHeight: F,
              prefixCls: `${s}-list`,
              ref: l,
              onVisibleChange: (X, Y) => {
                const j = new Set(X);
                Y.filter((N) => !j.has(N)).some((N) => Go(N) === Kt) && d();
              },
            }
          ),
          {
            default: (X) => {
              const { pos: Y } = X,
                j = jo(X.data, []),
                { title: Z, key: N, isStart: z, isEnd: M } = X,
                H = zt(N, Y);
              return (
                delete j.key,
                delete j.children,
                y(
                  zs,
                  U(
                    U({}, j),
                    {},
                    {
                      eventKey: H,
                      title: Z,
                      active: !!g && N === g.key,
                      data: X.data,
                      isStart: z,
                      isEnd: M,
                      motion: E,
                      motionNodes: N === Kt ? f.value : null,
                      motionType: u.value,
                      onMotionStart: ae,
                      onMotionEnd: d,
                      onMousemove: b,
                    }
                  ),
                  null
                )
              );
            },
          }
        ),
      ]);
    };
  },
});
function Vs(e) {
  let { dropPosition: t, dropLevelOffset: o, indent: n } = e;
  const l = {
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    height: "2px",
  };
  switch (t) {
    case -1:
      (l.top = 0), (l.left = `${-o * n}px`);
      break;
    case 1:
      (l.bottom = 0), (l.left = `${-o * n}px`);
      break;
    case 0:
      (l.bottom = 0), (l.left = `${n}`);
      break;
  }
  return y("div", { style: l }, null);
}
const Xs = 10,
  Gs = Ce({
    compatConfig: { MODE: 3 },
    name: "Tree",
    inheritAttrs: !1,
    props: Ot(xl(), {
      prefixCls: "vc-tree",
      showLine: !1,
      showIcon: !0,
      selectable: !0,
      multiple: !1,
      checkable: !1,
      disabled: !1,
      checkStrictly: !1,
      draggable: !1,
      expandAction: !1,
      defaultExpandParent: !0,
      autoExpandParent: !1,
      defaultExpandAll: !1,
      defaultExpandedKeys: [],
      defaultCheckedKeys: [],
      defaultSelectedKeys: [],
      dropIndicatorRender: Vs,
      allowDrop: () => !0,
    }),
    setup(e, t) {
      let { attrs: o, slots: n, expose: l } = t;
      const a = le(!1);
      let r = {};
      const i = le(),
        c = le([]),
        f = le([]),
        u = le([]),
        d = le([]),
        h = le([]),
        x = le([]),
        b = {},
        p = ht({
          draggingNodeKey: null,
          dragChildrenKeys: [],
          dropTargetKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropLevelOffset: null,
          dropTargetPos: null,
          dropAllowed: !0,
          dragOverNodeKey: null,
        }),
        s = le([]);
      Ae(
        [() => e.treeData, () => e.children],
        () => {
          s.value =
            e.treeData !== void 0 ? pn(e.treeData).slice() : En(pn(e.children));
        },
        { immediate: !0, deep: !0 }
      );
      const v = le({}),
        k = le(!1),
        m = le(null),
        E = le(!1),
        K = w(() => rn(e.fieldNames)),
        F = le();
      let S = null,
        _ = null,
        g = null;
      const O = w(() => ({
          expandedKeysSet: R.value,
          selectedKeysSet: A.value,
          loadedKeysSet: L.value,
          loadingKeysSet: ne.value,
          checkedKeysSet: ae.value,
          halfCheckedKeysSet: ue.value,
          dragOverNodeKey: p.dragOverNodeKey,
          dropPosition: p.dropPosition,
          keyEntities: v.value,
        })),
        R = w(() => new Set(x.value)),
        A = w(() => new Set(c.value)),
        L = w(() => new Set(d.value)),
        ne = w(() => new Set(h.value)),
        ae = w(() => new Set(f.value)),
        ue = w(() => new Set(u.value));
      Le(() => {
        if (s.value) {
          const T = Un(s.value, { fieldNames: K.value });
          v.value = C({ [Kt]: jl }, T.keyEntities);
        }
      });
      let be = !1;
      Ae(
        [() => e.expandedKeys, () => e.autoExpandParent, v],
        (T, D) => {
          let [B, W] = T,
            [te, oe] = D,
            G = x.value;
          if (e.expandedKeys !== void 0 || (be && W !== oe))
            G =
              e.autoExpandParent || (!be && e.defaultExpandParent)
                ? On(e.expandedKeys, v.value)
                : e.expandedKeys;
          else if (!be && e.defaultExpandAll) {
            const he = C({}, v.value);
            delete he[Kt], (G = Object.keys(he).map(($e) => he[$e].key));
          } else
            !be &&
              e.defaultExpandedKeys &&
              (G =
                e.autoExpandParent || e.defaultExpandParent
                  ? On(e.defaultExpandedKeys, v.value)
                  : e.defaultExpandedKeys);
          G && (x.value = G), (be = !0);
        },
        { immediate: !0 }
      );
      const X = le([]);
      Le(() => {
        X.value = oi(s.value, x.value, K.value);
      }),
        Le(() => {
          e.selectable &&
            (e.selectedKeys !== void 0
              ? (c.value = So(e.selectedKeys, e))
              : !be &&
                e.defaultSelectedKeys &&
                (c.value = So(e.defaultSelectedKeys, e)));
        });
      const { maxLevel: Y, levelEntities: j } = wl(v);
      Le(() => {
        if (e.checkable) {
          let T;
          if (
            (e.checkedKeys !== void 0
              ? (T = hn(e.checkedKeys) || {})
              : !be && e.defaultCheckedKeys
              ? (T = hn(e.defaultCheckedKeys) || {})
              : s.value &&
                (T = hn(e.checkedKeys) || {
                  checkedKeys: f.value,
                  halfCheckedKeys: u.value,
                }),
            T)
          ) {
            let { checkedKeys: D = [], halfCheckedKeys: B = [] } = T;
            e.checkStrictly ||
              ({ checkedKeys: D, halfCheckedKeys: B } = It(
                D,
                !0,
                v.value,
                Y.value,
                j.value
              )),
              (f.value = D),
              (u.value = B);
          }
        }
      }),
        Le(() => {
          e.loadedKeys && (d.value = e.loadedKeys);
        });
      const Z = () => {
          C(p, {
            dragOverNodeKey: null,
            dropPosition: null,
            dropLevelOffset: null,
            dropTargetKey: null,
            dropContainerKey: null,
            dropTargetPos: null,
            dropAllowed: !1,
          });
        },
        N = (T) => {
          F.value.scrollTo(T);
        };
      Ae(
        () => e.activeKey,
        () => {
          e.activeKey !== void 0 && (m.value = e.activeKey);
        },
        { immediate: !0 }
      ),
        Ae(
          m,
          (T) => {
            dt(() => {
              T !== null && N({ key: T });
            });
          },
          { immediate: !0, flush: "post" }
        );
      const z = (T) => {
          e.expandedKeys === void 0 && (x.value = T);
        },
        M = () => {
          p.draggingNodeKey !== null &&
            C(p, {
              draggingNodeKey: null,
              dropPosition: null,
              dropContainerKey: null,
              dropTargetKey: null,
              dropLevelOffset: null,
              dropAllowed: !0,
              dragOverNodeKey: null,
            }),
            (S = null),
            (g = null);
        },
        H = (T, D) => {
          const { onDragend: B } = e;
          (p.dragOverNodeKey = null),
            M(),
            B == null || B({ event: T, node: D.eventData }),
            (_ = null);
        },
        J = (T) => {
          H(T, null), window.removeEventListener("dragend", J);
        },
        Q = (T, D) => {
          const { onDragstart: B } = e,
            { eventKey: W, eventData: te } = D;
          (_ = D), (S = { x: T.clientX, y: T.clientY });
          const oe = ot(x.value, W);
          (p.draggingNodeKey = W),
            (p.dragChildrenKeys = Qr(W, v.value)),
            (i.value = F.value.getIndentWidth()),
            z(oe),
            window.addEventListener("dragend", J),
            B && B({ event: T, node: te });
        },
        _e = (T, D) => {
          const {
              onDragenter: B,
              onExpand: W,
              allowDrop: te,
              direction: oe,
            } = e,
            { pos: G, eventKey: he } = D;
          if ((g !== he && (g = he), !_)) {
            Z();
            return;
          }
          const {
            dropPosition: $e,
            dropLevelOffset: ve,
            dropTargetKey: ge,
            dropContainerKey: xe,
            dropTargetPos: ze,
            dropAllowed: je,
            dragOverNodeKey: We,
          } = Co(T, _, D, i.value, S, te, X.value, v.value, R.value, oe);
          if (p.dragChildrenKeys.indexOf(ge) !== -1 || !je) {
            Z();
            return;
          }
          if (
            (r || (r = {}),
            Object.keys(r).forEach((Be) => {
              clearTimeout(r[Be]);
            }),
            _.eventKey !== D.eventKey &&
              (r[G] = window.setTimeout(() => {
                if (p.draggingNodeKey === null) return;
                let Be = x.value.slice();
                const nt = v.value[D.eventKey];
                nt &&
                  (nt.children || []).length &&
                  (Be = it(x.value, D.eventKey)),
                  z(Be),
                  W &&
                    W(Be, { node: D.eventData, expanded: !0, nativeEvent: T });
              }, 800)),
            _.eventKey === ge && ve === 0)
          ) {
            Z();
            return;
          }
          C(p, {
            dragOverNodeKey: We,
            dropPosition: $e,
            dropLevelOffset: ve,
            dropTargetKey: ge,
            dropContainerKey: xe,
            dropTargetPos: ze,
            dropAllowed: je,
          }),
            B && B({ event: T, node: D.eventData, expandedKeys: x.value });
        },
        Oe = (T, D) => {
          const { onDragover: B, allowDrop: W, direction: te } = e;
          if (!_) return;
          const {
            dropPosition: oe,
            dropLevelOffset: G,
            dropTargetKey: he,
            dropContainerKey: $e,
            dropAllowed: ve,
            dropTargetPos: ge,
            dragOverNodeKey: xe,
          } = Co(T, _, D, i.value, S, W, X.value, v.value, R.value, te);
          p.dragChildrenKeys.indexOf(he) !== -1 ||
            !ve ||
            (_.eventKey === he && G === 0
              ? (p.dropPosition === null &&
                  p.dropLevelOffset === null &&
                  p.dropTargetKey === null &&
                  p.dropContainerKey === null &&
                  p.dropTargetPos === null &&
                  p.dropAllowed === !1 &&
                  p.dragOverNodeKey === null) ||
                Z()
              : (oe === p.dropPosition &&
                  G === p.dropLevelOffset &&
                  he === p.dropTargetKey &&
                  $e === p.dropContainerKey &&
                  ge === p.dropTargetPos &&
                  ve === p.dropAllowed &&
                  xe === p.dragOverNodeKey) ||
                C(p, {
                  dropPosition: oe,
                  dropLevelOffset: G,
                  dropTargetKey: he,
                  dropContainerKey: $e,
                  dropTargetPos: ge,
                  dropAllowed: ve,
                  dragOverNodeKey: xe,
                }),
            B && B({ event: T, node: D.eventData }));
        },
        Pe = (T, D) => {
          g === D.eventKey &&
            !T.currentTarget.contains(T.relatedTarget) &&
            (Z(), (g = null));
          const { onDragleave: B } = e;
          B && B({ event: T, node: D.eventData });
        },
        Te = function (T, D) {
          let B =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          var W;
          const {
            dragChildrenKeys: te,
            dropPosition: oe,
            dropTargetKey: G,
            dropTargetPos: he,
            dropAllowed: $e,
          } = p;
          if (!$e) return;
          const { onDrop: ve } = e;
          if (((p.dragOverNodeKey = null), M(), G === null)) return;
          const ge = C(C({}, Gt(G, pn(O.value))), {
            active:
              ((W = I.value) === null || W === void 0 ? void 0 : W.key) === G,
            data: v.value[G].node,
          });
          te.indexOf(G);
          const xe = Gn(he),
            ze = {
              event: T,
              node: Ut(ge),
              dragNode: _ ? _.eventData : null,
              dragNodesKeys: [_.eventKey].concat(te),
              dropToGap: oe !== 0,
              dropPosition: oe + Number(xe[xe.length - 1]),
            };
          B || ve == null || ve(ze), (_ = null);
        },
        De = (T, D) => {
          const { expanded: B, key: W } = D,
            te = X.value.filter((G) => G.key === W)[0],
            oe = Ut(C(C({}, Gt(W, O.value)), { data: te.data }));
          z(B ? ot(x.value, W) : it(x.value, W)), pe(T, oe);
        },
        Me = (T, D) => {
          const { onClick: B, expandAction: W } = e;
          W === "click" && De(T, D), B && B(T, D);
        },
        Re = (T, D) => {
          const { onDblclick: B, expandAction: W } = e;
          (W === "doubleclick" || W === "dblclick") && De(T, D), B && B(T, D);
        },
        Ie = (T, D) => {
          let B = c.value;
          const { onSelect: W, multiple: te } = e,
            { selected: oe } = D,
            G = D[K.value.key],
            he = !oe;
          he ? (te ? (B = it(B, G)) : (B = [G])) : (B = ot(B, G));
          const $e = v.value,
            ve = B.map((ge) => {
              const xe = $e[ge];
              return xe ? xe.node : null;
            }).filter((ge) => ge);
          e.selectedKeys === void 0 && (c.value = B),
            W &&
              W(B, {
                event: "select",
                selected: he,
                node: D,
                selectedNodes: ve,
                nativeEvent: T,
              });
        },
        V = (T, D, B) => {
          const { checkStrictly: W, onCheck: te } = e,
            oe = D[K.value.key];
          let G;
          const he = { event: "check", node: D, checked: B, nativeEvent: T },
            $e = v.value;
          if (W) {
            const ve = B ? it(f.value, oe) : ot(f.value, oe),
              ge = ot(u.value, oe);
            (G = { checked: ve, halfChecked: ge }),
              (he.checkedNodes = ve
                .map((xe) => $e[xe])
                .filter((xe) => xe)
                .map((xe) => xe.node)),
              e.checkedKeys === void 0 && (f.value = ve);
          } else {
            let { checkedKeys: ve, halfCheckedKeys: ge } = It(
              [...f.value, oe],
              !0,
              $e,
              Y.value,
              j.value
            );
            if (!B) {
              const xe = new Set(ve);
              xe.delete(oe),
                ({ checkedKeys: ve, halfCheckedKeys: ge } = It(
                  Array.from(xe),
                  { checked: !1, halfCheckedKeys: ge },
                  $e,
                  Y.value,
                  j.value
                ));
            }
            (G = ve),
              (he.checkedNodes = []),
              (he.checkedNodesPositions = []),
              (he.halfCheckedKeys = ge),
              ve.forEach((xe) => {
                const ze = $e[xe];
                if (!ze) return;
                const { node: je, pos: We } = ze;
                he.checkedNodes.push(je),
                  he.checkedNodesPositions.push({ node: je, pos: We });
              }),
              e.checkedKeys === void 0 && ((f.value = ve), (u.value = ge));
          }
          te && te(G, he);
        },
        ie = (T) => {
          const D = T[K.value.key],
            B = new Promise((W, te) => {
              const { loadData: oe, onLoad: G } = e;
              if (!oe || L.value.has(D) || ne.value.has(D)) return null;
              oe(T)
                .then(() => {
                  const $e = it(d.value, D),
                    ve = ot(h.value, D);
                  G && G($e, { event: "load", node: T }),
                    e.loadedKeys === void 0 && (d.value = $e),
                    (h.value = ve),
                    W();
                })
                .catch(($e) => {
                  const ve = ot(h.value, D);
                  if (((h.value = ve), (b[D] = (b[D] || 0) + 1), b[D] >= Xs)) {
                    const ge = it(d.value, D);
                    e.loadedKeys === void 0 && (d.value = ge), W();
                  }
                  te($e);
                }),
                (h.value = it(h.value, D));
            });
          return B.catch(() => {}), B;
        },
        q = (T, D) => {
          const { onMouseenter: B } = e;
          B && B({ event: T, node: D });
        },
        re = (T, D) => {
          const { onMouseleave: B } = e;
          B && B({ event: T, node: D });
        },
        ce = (T, D) => {
          const { onRightClick: B } = e;
          B && (T.preventDefault(), B({ event: T, node: D }));
        },
        we = (T) => {
          const { onFocus: D } = e;
          (k.value = !0), D && D(T);
        },
        se = (T) => {
          const { onBlur: D } = e;
          (k.value = !1), $(null), D && D(T);
        },
        pe = (T, D) => {
          let B = x.value;
          const { onExpand: W, loadData: te } = e,
            { expanded: oe } = D,
            G = D[K.value.key];
          if (E.value) return;
          B.indexOf(G);
          const he = !oe;
          if (
            (he ? (B = it(B, G)) : (B = ot(B, G)),
            z(B),
            W && W(B, { node: D, expanded: he, nativeEvent: T }),
            he && te)
          ) {
            const $e = ie(D);
            $e &&
              $e
                .then(() => {})
                .catch((ve) => {
                  const ge = ot(x.value, G);
                  z(ge), Promise.reject(ve);
                });
          }
        },
        ke = () => {
          E.value = !0;
        },
        P = () => {
          setTimeout(() => {
            E.value = !1;
          });
        },
        $ = (T) => {
          const { onActiveChange: D } = e;
          m.value !== T &&
            (e.activeKey !== void 0 && (m.value = T),
            T !== null && N({ key: T }),
            D && D(T));
        },
        I = w(() =>
          m.value === null
            ? null
            : X.value.find((T) => {
                let { key: D } = T;
                return D === m.value;
              }) || null
        ),
        ee = (T) => {
          let D = X.value.findIndex((W) => {
            let { key: te } = W;
            return te === m.value;
          });
          D === -1 && T < 0 && (D = X.value.length),
            (D = (D + T + X.value.length) % X.value.length);
          const B = X.value[D];
          if (B) {
            const { key: W } = B;
            $(W);
          } else $(null);
        },
        fe = w(() =>
          Ut(C(C({}, Gt(m.value, O.value)), { data: I.value.data, active: !0 }))
        ),
        Se = (T) => {
          const { onKeydown: D, checkable: B, selectable: W } = e;
          switch (T.which) {
            case vt.UP: {
              ee(-1), T.preventDefault();
              break;
            }
            case vt.DOWN: {
              ee(1), T.preventDefault();
              break;
            }
          }
          const te = I.value;
          if (te && te.data) {
            const oe =
                te.data.isLeaf === !1 || !!(te.data.children || []).length,
              G = fe.value;
            switch (T.which) {
              case vt.LEFT: {
                oe && R.value.has(m.value)
                  ? pe({}, G)
                  : te.parent && $(te.parent.key),
                  T.preventDefault();
                break;
              }
              case vt.RIGHT: {
                oe && !R.value.has(m.value)
                  ? pe({}, G)
                  : te.children && te.children.length && $(te.children[0].key),
                  T.preventDefault();
                break;
              }
              case vt.ENTER:
              case vt.SPACE: {
                B && !G.disabled && G.checkable !== !1 && !G.disableCheckbox
                  ? V({}, G, !ae.value.has(m.value))
                  : !B && W && !G.disabled && G.selectable !== !1 && Ie({}, G);
                break;
              }
            }
          }
          D && D(T);
        };
      return (
        l({
          onNodeExpand: pe,
          scrollTo: N,
          onKeydown: Se,
          selectedKeys: w(() => c.value),
          checkedKeys: w(() => f.value),
          halfCheckedKeys: w(() => u.value),
          loadedKeys: w(() => d.value),
          loadingKeys: w(() => h.value),
          expandedKeys: w(() => x.value),
        }),
        ol(() => {
          window.removeEventListener("dragend", J), (a.value = !0);
        }),
        Xr({
          expandedKeys: x,
          selectedKeys: c,
          loadedKeys: d,
          loadingKeys: h,
          checkedKeys: f,
          halfCheckedKeys: u,
          expandedKeysSet: R,
          selectedKeysSet: A,
          loadedKeysSet: L,
          loadingKeysSet: ne,
          checkedKeysSet: ae,
          halfCheckedKeysSet: ue,
          flattenNodes: X,
        }),
        () => {
          const {
              draggingNodeKey: T,
              dropLevelOffset: D,
              dropContainerKey: B,
              dropTargetKey: W,
              dropPosition: te,
              dragOverNodeKey: oe,
            } = p,
            {
              prefixCls: G,
              showLine: he,
              focusable: $e,
              tabindex: ve = 0,
              selectable: ge,
              showIcon: xe,
              icon: ze = n.icon,
              switcherIcon: je,
              draggable: We,
              checkable: Be,
              checkStrictly: nt,
              disabled: ft,
              motion: yt,
              loadData: Mt,
              filterTreeNode: pt,
              height: un,
              itemHeight: jt,
              virtual: Nt,
              dropIndicatorRender: Jl,
              onContextmenu: Zl,
              onScroll: Ql,
              direction: ea,
              rootClassName: ta,
              rootStyle: na,
            } = e,
            { class: oa, style: la } = o,
            aa = Vn(C(C({}, e), o), { aria: !0, data: !0 });
          let Bt;
          return (
            We
              ? typeof We == "object"
                ? (Bt = We)
                : typeof We == "function"
                ? (Bt = { nodeDraggable: We })
                : (Bt = {})
              : (Bt = !1),
            y(
              Vr,
              {
                value: {
                  prefixCls: G,
                  selectable: ge,
                  showIcon: xe,
                  icon: ze,
                  switcherIcon: je,
                  draggable: Bt,
                  draggingNodeKey: T,
                  checkable: Be,
                  customCheckable: n.checkable,
                  checkStrictly: nt,
                  disabled: ft,
                  keyEntities: v.value,
                  dropLevelOffset: D,
                  dropContainerKey: B,
                  dropTargetKey: W,
                  dropPosition: te,
                  dragOverNodeKey: oe,
                  dragging: T !== null,
                  indent: i.value,
                  direction: ea,
                  dropIndicatorRender: Jl,
                  loadData: Mt,
                  filterTreeNode: pt,
                  onNodeClick: Me,
                  onNodeDoubleClick: Re,
                  onNodeExpand: pe,
                  onNodeSelect: Ie,
                  onNodeCheck: V,
                  onNodeLoad: ie,
                  onNodeMouseEnter: q,
                  onNodeMouseLeave: re,
                  onNodeContextMenu: ce,
                  onNodeDragStart: Q,
                  onNodeDragEnter: _e,
                  onNodeDragOver: Oe,
                  onNodeDragLeave: Pe,
                  onNodeDragEnd: H,
                  onNodeDrop: Te,
                  slots: n,
                },
              },
              {
                default: () => [
                  y(
                    "div",
                    {
                      role: "tree",
                      class: ye(G, oa, ta, {
                        [`${G}-show-line`]: he,
                        [`${G}-focused`]: k.value,
                        [`${G}-active-focused`]: m.value !== null,
                      }),
                      style: na,
                    },
                    [
                      y(
                        Ws,
                        U(
                          {
                            ref: F,
                            prefixCls: G,
                            style: la,
                            disabled: ft,
                            selectable: ge,
                            checkable: !!Be,
                            motion: yt,
                            height: un,
                            itemHeight: jt,
                            virtual: Nt,
                            focusable: $e,
                            focused: k.value,
                            tabindex: ve,
                            activeItem: I.value,
                            onFocus: we,
                            onBlur: se,
                            onKeydown: Se,
                            onActiveChange: $,
                            onListChangeStart: ke,
                            onListChangeEnd: P,
                            onContextmenu: Zl,
                            onScroll: Ql,
                          },
                          aa
                        ),
                        null
                      ),
                    ]
                  ),
                ],
              }
            )
          );
        }
      );
    },
  });
function Us(e, t, o, n, l) {
  const { isLeaf: a, expanded: r, loading: i } = o;
  let c = t;
  if (i) return y(pa, { class: `${e}-switcher-loading-icon` }, null);
  let f;
  l && typeof l == "object" && (f = l.showLeafIcon);
  let u = null;
  const d = `${e}-switcher-icon`;
  return a
    ? l
      ? f && n
        ? n(o)
        : (typeof l == "object" && !f
            ? (u = y("span", { class: `${e}-switcher-leaf-line` }, null))
            : (u = y($l, { class: `${e}-switcher-line-icon` }, null)),
          u)
      : null
    : ((u = y(gr, { class: d }, null)),
      l &&
        (u = r
          ? y(_i, { class: `${e}-switcher-line-icon` }, null)
          : y(Di, { class: `${e}-switcher-line-icon` }, null)),
      typeof t == "function"
        ? (c = t(C(C({}, o), { defaultIcon: u, switcherCls: d })))
        : Jt(c) && (c = Fa(c, { class: d })),
      c || u);
}
const Uo = 4;
function Ys(e) {
  const {
      dropPosition: t,
      dropLevelOffset: o,
      prefixCls: n,
      indent: l,
      direction: a = "ltr",
    } = e,
    r = a === "ltr" ? "left" : "right",
    i = a === "ltr" ? "right" : "left",
    c = { [r]: `${-o * l + Uo}px`, [i]: 0 };
  switch (t) {
    case -1:
      c.top = "-3px";
      break;
    case 1:
      c.bottom = "-3px";
      break;
    default:
      (c.bottom = "-3px"), (c[r] = `${l + Uo}px`);
      break;
  }
  return y("div", { style: c, class: `${n}-drop-indicator` }, null);
}
const qs = new Qo("ant-tree-node-fx-do-not-use", {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  }),
  Js = (e, t) => ({
    [`.${e}-switcher-icon`]: {
      display: "inline-block",
      fontSize: 10,
      verticalAlign: "baseline",
      svg: { transition: `transform ${t.motionDurationSlow}` },
    },
  }),
  Zs = (e, t) => ({
    [`.${e}-drop-indicator`]: {
      position: "absolute",
      zIndex: 1,
      height: 2,
      backgroundColor: t.colorPrimary,
      borderRadius: 1,
      pointerEvents: "none",
      "&:after": {
        position: "absolute",
        top: -3,
        insetInlineStart: -6,
        width: 8,
        height: 8,
        backgroundColor: "transparent",
        border: `${t.lineWidthBold}px solid ${t.colorPrimary}`,
        borderRadius: "50%",
        content: '""',
      },
    },
  }),
  Qs = (e, t) => {
    const {
        treeCls: o,
        treeNodeCls: n,
        treeNodePadding: l,
        treeTitleHeight: a,
      } = t,
      r = (a - t.fontSizeLG) / 2,
      i = t.paddingXS;
    return {
      [o]: C(C({}, $t(t)), {
        background: t.colorBgContainer,
        borderRadius: t.borderRadius,
        transition: `background-color ${t.motionDurationSlow}`,
        [`&${o}-rtl`]: {
          [`${o}-switcher`]: {
            "&_close": {
              [`${o}-switcher-icon`]: { svg: { transform: "rotate(90deg)" } },
            },
          },
        },
        [`&-focused:not(:hover):not(${o}-active-focused)`]: C({}, Zt(t)),
        [`${o}-list-holder-inner`]: { alignItems: "flex-start" },
        [`&${o}-block-node`]: {
          [`${o}-list-holder-inner`]: {
            alignItems: "stretch",
            [`${o}-node-content-wrapper`]: { flex: "auto" },
            [`${n}.dragging`]: {
              position: "relative",
              "&:after": {
                position: "absolute",
                top: 0,
                insetInlineEnd: 0,
                bottom: l,
                insetInlineStart: 0,
                border: `1px solid ${t.colorPrimary}`,
                opacity: 0,
                animationName: qs,
                animationDuration: t.motionDurationSlow,
                animationPlayState: "running",
                animationFillMode: "forwards",
                content: '""',
                pointerEvents: "none",
              },
            },
          },
        },
        [`${n}`]: {
          display: "flex",
          alignItems: "flex-start",
          padding: `0 0 ${l}px 0`,
          outline: "none",
          "&-rtl": { direction: "rtl" },
          "&-disabled": {
            [`${o}-node-content-wrapper`]: {
              color: t.colorTextDisabled,
              cursor: "not-allowed",
              "&:hover": { background: "transparent" },
            },
          },
          [`&-active ${o}-node-content-wrapper`]: C({}, Zt(t)),
          [`&:not(${n}-disabled).filter-node ${o}-title`]: {
            color: "inherit",
            fontWeight: 500,
          },
          "&-draggable": {
            [`${o}-draggable-icon`]: {
              width: a,
              lineHeight: `${a}px`,
              textAlign: "center",
              visibility: "visible",
              opacity: 0.2,
              transition: `opacity ${t.motionDurationSlow}`,
              [`${n}:hover &`]: { opacity: 0.45 },
            },
            [`&${n}-disabled`]: {
              [`${o}-draggable-icon`]: { visibility: "hidden" },
            },
          },
        },
        [`${o}-indent`]: {
          alignSelf: "stretch",
          whiteSpace: "nowrap",
          userSelect: "none",
          "&-unit": { display: "inline-block", width: a },
        },
        [`${o}-draggable-icon`]: { visibility: "hidden" },
        [`${o}-switcher`]: C(C({}, Js(e, t)), {
          position: "relative",
          flex: "none",
          alignSelf: "stretch",
          width: a,
          margin: 0,
          lineHeight: `${a}px`,
          textAlign: "center",
          cursor: "pointer",
          userSelect: "none",
          "&-noop": { cursor: "default" },
          "&_close": {
            [`${o}-switcher-icon`]: { svg: { transform: "rotate(-90deg)" } },
          },
          "&-loading-icon": { color: t.colorPrimary },
          "&-leaf-line": {
            position: "relative",
            zIndex: 1,
            display: "inline-block",
            width: "100%",
            height: "100%",
            "&:before": {
              position: "absolute",
              top: 0,
              insetInlineEnd: a / 2,
              bottom: -l,
              marginInlineStart: -1,
              borderInlineEnd: `1px solid ${t.colorBorder}`,
              content: '""',
            },
            "&:after": {
              position: "absolute",
              width: (a / 2) * 0.8,
              height: a / 2,
              borderBottom: `1px solid ${t.colorBorder}`,
              content: '""',
            },
          },
        }),
        [`${o}-checkbox`]: {
          top: "initial",
          marginInlineEnd: i,
          marginBlockStart: r,
        },
        [`${o}-node-content-wrapper, ${o}-checkbox + span`]: {
          position: "relative",
          zIndex: "auto",
          minHeight: a,
          margin: 0,
          padding: `0 ${t.paddingXS / 2}px`,
          color: "inherit",
          lineHeight: `${a}px`,
          background: "transparent",
          borderRadius: t.borderRadius,
          cursor: "pointer",
          transition: `all ${t.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
          "&:hover": { backgroundColor: t.controlItemBgHover },
          [`&${o}-node-selected`]: { backgroundColor: t.controlItemBgActive },
          [`${o}-iconEle`]: {
            display: "inline-block",
            width: a,
            height: a,
            lineHeight: `${a}px`,
            textAlign: "center",
            verticalAlign: "top",
            "&:empty": { display: "none" },
          },
        },
        [`${o}-unselectable ${o}-node-content-wrapper:hover`]: {
          backgroundColor: "transparent",
        },
        [`${o}-node-content-wrapper`]: C(
          { lineHeight: `${a}px`, userSelect: "none" },
          Zs(e, t)
        ),
        [`${n}.drop-container`]: {
          "> [draggable]": { boxShadow: `0 0 0 2px ${t.colorPrimary}` },
        },
        "&-show-line": {
          [`${o}-indent`]: {
            "&-unit": {
              position: "relative",
              height: "100%",
              "&:before": {
                position: "absolute",
                top: 0,
                insetInlineEnd: a / 2,
                bottom: -l,
                borderInlineEnd: `1px solid ${t.colorBorder}`,
                content: '""',
              },
              "&-end": { "&:before": { display: "none" } },
            },
          },
          [`${o}-switcher`]: {
            background: "transparent",
            "&-line-icon": { verticalAlign: "-0.15em" },
          },
        },
        [`${n}-leaf-last`]: {
          [`${o}-switcher`]: {
            "&-leaf-line": {
              "&:before": {
                top: "auto !important",
                bottom: "auto !important",
                height: `${a / 2}px !important`,
              },
            },
          },
        },
      }),
    };
  },
  ec = (e) => {
    const { treeCls: t, treeNodeCls: o, treeNodePadding: n } = e;
    return {
      [`${t}${t}-directory`]: {
        [o]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: n,
            insetInlineStart: 0,
            transition: `background-color ${e.motionDurationMid}`,
            content: '""',
            pointerEvents: "none",
          },
          "&:hover": { "&:before": { background: e.controlItemBgHover } },
          "> *": { zIndex: 1 },
          [`${t}-switcher`]: { transition: `color ${e.motionDurationMid}` },
          [`${t}-node-content-wrapper`]: {
            borderRadius: 0,
            userSelect: "none",
            "&:hover": { background: "transparent" },
            [`&${t}-node-selected`]: {
              color: e.colorTextLightSolid,
              background: "transparent",
            },
          },
          "&-selected": {
            [`
            &:hover::before,
            &::before
          `]: { background: e.colorPrimary },
            [`${t}-switcher`]: { color: e.colorTextLightSolid },
            [`${t}-node-content-wrapper`]: {
              color: e.colorTextLightSolid,
              background: "transparent",
            },
          },
        },
      },
    };
  },
  tc = (e, t) => {
    const o = `.${e}`,
      n = `${o}-treenode`,
      l = t.paddingXS / 2,
      a = t.controlHeightSM,
      r = ln(t, {
        treeCls: o,
        treeNodeCls: n,
        treeNodePadding: l,
        treeTitleHeight: a,
      });
    return [Qs(e, r), ec(r)];
  },
  nc = on("Tree", (e, t) => {
    let { prefixCls: o } = t;
    return [{ [e.componentCls]: lr(`${o}-checkbox`, e) }, tc(o, e), hr(e)];
  }),
  Wl = () => {
    const e = xl();
    return C(C({}, e), {
      showLine: Ue([Boolean, Object]),
      multiple: Ke(),
      autoExpandParent: Ke(),
      checkStrictly: Ke(),
      checkable: Ke(),
      disabled: Ke(),
      defaultExpandAll: Ke(),
      defaultExpandParent: Ke(),
      defaultExpandedKeys: Ye(),
      expandedKeys: Ye(),
      checkedKeys: Ue([Array, Object]),
      defaultCheckedKeys: Ye(),
      selectedKeys: Ye(),
      defaultSelectedKeys: Ye(),
      selectable: Ke(),
      loadedKeys: Ye(),
      draggable: Ke(),
      showIcon: Ke(),
      icon: Ee(),
      switcherIcon: Xe.any,
      prefixCls: String,
      replaceFields: lt(),
      blockNode: Ke(),
      openAnimation: Xe.any,
      onDoubleclick: e.onDblclick,
      "onUpdate:selectedKeys": Ee(),
      "onUpdate:checkedKeys": Ee(),
      "onUpdate:expandedKeys": Ee(),
    });
  },
  qt = Ce({
    compatConfig: { MODE: 3 },
    name: "ATree",
    inheritAttrs: !1,
    props: Ot(Wl(), {
      checkable: !1,
      selectable: !0,
      showIcon: !1,
      blockNode: !1,
    }),
    slots: Object,
    setup(e, t) {
      let { attrs: o, expose: n, emit: l, slots: a } = t;
      ll(!(e.treeData === void 0 && a.default));
      const { prefixCls: r, direction: i, virtual: c } = ut("tree", e),
        [f, u] = nc(r),
        d = me();
      n({
        treeRef: d,
        onNodeExpand: function () {
          var s;
          (s = d.value) === null ||
            s === void 0 ||
            s.onNodeExpand(...arguments);
        },
        scrollTo: (s) => {
          var v;
          (v = d.value) === null || v === void 0 || v.scrollTo(s);
        },
        selectedKeys: w(() => {
          var s;
          return (s = d.value) === null || s === void 0
            ? void 0
            : s.selectedKeys;
        }),
        checkedKeys: w(() => {
          var s;
          return (s = d.value) === null || s === void 0
            ? void 0
            : s.checkedKeys;
        }),
        halfCheckedKeys: w(() => {
          var s;
          return (s = d.value) === null || s === void 0
            ? void 0
            : s.halfCheckedKeys;
        }),
        loadedKeys: w(() => {
          var s;
          return (s = d.value) === null || s === void 0 ? void 0 : s.loadedKeys;
        }),
        loadingKeys: w(() => {
          var s;
          return (s = d.value) === null || s === void 0
            ? void 0
            : s.loadingKeys;
        }),
        expandedKeys: w(() => {
          var s;
          return (s = d.value) === null || s === void 0
            ? void 0
            : s.expandedKeys;
        }),
      }),
        Le(() => {
          tt(
            e.replaceFields === void 0,
            "Tree",
            "`replaceFields` is deprecated, please use fieldNames instead"
          );
        });
      const x = (s, v) => {
          l("update:checkedKeys", s), l("check", s, v);
        },
        b = (s, v) => {
          l("update:expandedKeys", s), l("expand", s, v);
        },
        p = (s, v) => {
          l("update:selectedKeys", s), l("select", s, v);
        };
      return () => {
        const {
            showIcon: s,
            showLine: v,
            switcherIcon: k = a.switcherIcon,
            icon: m = a.icon,
            blockNode: E,
            checkable: K,
            selectable: F,
            fieldNames: S = e.replaceFields,
            motion: _ = e.openAnimation,
            itemHeight: g = 28,
            onDoubleclick: O,
            onDblclick: R,
          } = e,
          A = C(
            C(
              C({}, o),
              Dt(e, [
                "onUpdate:checkedKeys",
                "onUpdate:expandedKeys",
                "onUpdate:selectedKeys",
                "onDoubleclick",
              ])
            ),
            {
              showLine: !!v,
              dropIndicatorRender: Ys,
              fieldNames: S,
              icon: m,
              itemHeight: g,
            }
          ),
          L = a.default ? Lt(a.default()) : void 0;
        return f(
          y(
            Gs,
            U(
              U({}, A),
              {},
              {
                virtual: c.value,
                motion: _,
                ref: d,
                prefixCls: r.value,
                class: ye(
                  {
                    [`${r.value}-icon-hide`]: !s,
                    [`${r.value}-block-node`]: E,
                    [`${r.value}-unselectable`]: !F,
                    [`${r.value}-rtl`]: i.value === "rtl",
                  },
                  o.class,
                  u.value
                ),
                direction: i.value,
                checkable: K,
                selectable: F,
                switcherIcon: (ne) => Us(r.value, k, ne, a.leafIcon, v),
                onCheck: x,
                onExpand: b,
                onSelect: p,
                onDblclick: R || O,
                children: L,
              }
            ),
            C(C({}, a), {
              checkable: () =>
                y("span", { class: `${r.value}-checkbox-inner` }, null),
            })
          )
        );
      };
    },
  });
var ct;
(function (e) {
  (e[(e.None = 0)] = "None"),
    (e[(e.Start = 1)] = "Start"),
    (e[(e.End = 2)] = "End");
})(ct || (ct = {}));
function ao(e, t, o) {
  function n(l) {
    const a = l[t.key],
      r = l[t.children];
    o(a, l) !== !1 && ao(r || [], t, o);
  }
  e.forEach(n);
}
function oc(e) {
  let {
    treeData: t,
    expandedKeys: o,
    startKey: n,
    endKey: l,
    fieldNames: a = { title: "title", key: "key", children: "children" },
  } = e;
  const r = [];
  let i = ct.None;
  if (n && n === l) return [n];
  if (!n || !l) return [];
  function c(f) {
    return f === n || f === l;
  }
  return (
    ao(t, a, (f) => {
      if (i === ct.End) return !1;
      if (c(f)) {
        if ((r.push(f), i === ct.None)) i = ct.Start;
        else if (i === ct.Start) return (i = ct.End), !1;
      } else i === ct.Start && r.push(f);
      return o.includes(f);
    }),
    r
  );
}
function yn(e, t, o) {
  const n = [...t],
    l = [];
  return (
    ao(e, o, (a, r) => {
      const i = n.indexOf(a);
      return i !== -1 && (l.push(r), n.splice(i, 1)), !!n.length;
    }),
    l
  );
}
var lc =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
        t.indexOf(n[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
          (o[n[l]] = e[n[l]]);
    return o;
  };
const ac = () => C(C({}, Wl()), { expandAction: Ue([Boolean, String]) });
function rc(e) {
  const { isLeaf: t, expanded: o } = e;
  return t ? y($l, null, null) : o ? y(Si, null, null) : y(Ki, null, null);
}
const bn = Ce({
    compatConfig: { MODE: 3 },
    name: "ADirectoryTree",
    inheritAttrs: !1,
    props: Ot(ac(), { showIcon: !0, expandAction: "click" }),
    slots: Object,
    setup(e, t) {
      let { attrs: o, slots: n, emit: l, expose: a } = t;
      var r;
      const i = me(
        e.treeData ||
          En(Lt((r = n.default) === null || r === void 0 ? void 0 : r.call(n)))
      );
      Ae(
        () => e.treeData,
        () => {
          i.value = e.treeData;
        }
      ),
        Wn(() => {
          dt(() => {
            var g;
            e.treeData === void 0 &&
              n.default &&
              (i.value = En(
                Lt(
                  (g = n.default) === null || g === void 0 ? void 0 : g.call(n)
                )
              ));
          });
        });
      const c = me(),
        f = me(),
        u = w(() => rn(e.fieldNames)),
        d = me();
      a({
        scrollTo: (g) => {
          var O;
          (O = d.value) === null || O === void 0 || O.scrollTo(g);
        },
        selectedKeys: w(() => {
          var g;
          return (g = d.value) === null || g === void 0
            ? void 0
            : g.selectedKeys;
        }),
        checkedKeys: w(() => {
          var g;
          return (g = d.value) === null || g === void 0
            ? void 0
            : g.checkedKeys;
        }),
        halfCheckedKeys: w(() => {
          var g;
          return (g = d.value) === null || g === void 0
            ? void 0
            : g.halfCheckedKeys;
        }),
        loadedKeys: w(() => {
          var g;
          return (g = d.value) === null || g === void 0 ? void 0 : g.loadedKeys;
        }),
        loadingKeys: w(() => {
          var g;
          return (g = d.value) === null || g === void 0
            ? void 0
            : g.loadingKeys;
        }),
        expandedKeys: w(() => {
          var g;
          return (g = d.value) === null || g === void 0
            ? void 0
            : g.expandedKeys;
        }),
      });
      const x = () => {
          const { keyEntities: g } = Un(i.value, { fieldNames: u.value });
          let O;
          return (
            e.defaultExpandAll
              ? (O = Object.keys(g))
              : e.defaultExpandParent
              ? (O = On(e.expandedKeys || e.defaultExpandedKeys || [], g))
              : (O = e.expandedKeys || e.defaultExpandedKeys),
            O
          );
        },
        b = me(e.selectedKeys || e.defaultSelectedKeys || []),
        p = me(x());
      Ae(
        () => e.selectedKeys,
        () => {
          e.selectedKeys !== void 0 && (b.value = e.selectedKeys);
        },
        { immediate: !0 }
      ),
        Ae(
          () => e.expandedKeys,
          () => {
            e.expandedKeys !== void 0 && (p.value = e.expandedKeys);
          },
          { immediate: !0 }
        );
      const v = Ha(
          (g, O) => {
            const { isLeaf: R } = O;
            R ||
              g.shiftKey ||
              g.metaKey ||
              g.ctrlKey ||
              d.value.onNodeExpand(g, O);
          },
          200,
          { leading: !0 }
        ),
        k = (g, O) => {
          e.expandedKeys === void 0 && (p.value = g),
            l("update:expandedKeys", g),
            l("expand", g, O);
        },
        m = (g, O) => {
          const { expandAction: R } = e;
          R === "click" && v(g, O), l("click", g, O);
        },
        E = (g, O) => {
          const { expandAction: R } = e;
          (R === "dblclick" || R === "doubleclick") && v(g, O),
            l("doubleclick", g, O),
            l("dblclick", g, O);
        },
        K = (g, O) => {
          const { multiple: R } = e,
            { node: A, nativeEvent: L } = O,
            ne = A[u.value.key],
            ae = C(C({}, O), { selected: !0 }),
            ue =
              (L == null ? void 0 : L.ctrlKey) ||
              (L == null ? void 0 : L.metaKey),
            be = L == null ? void 0 : L.shiftKey;
          let X;
          R && ue
            ? ((X = g),
              (c.value = ne),
              (f.value = X),
              (ae.selectedNodes = yn(i.value, X, u.value)))
            : R && be
            ? ((X = Array.from(
                new Set([
                  ...(f.value || []),
                  ...oc({
                    treeData: i.value,
                    expandedKeys: p.value,
                    startKey: ne,
                    endKey: c.value,
                    fieldNames: u.value,
                  }),
                ])
              )),
              (ae.selectedNodes = yn(i.value, X, u.value)))
            : ((X = [ne]),
              (c.value = ne),
              (f.value = X),
              (ae.selectedNodes = yn(i.value, X, u.value))),
            l("update:selectedKeys", X),
            l("select", X, ae),
            e.selectedKeys === void 0 && (b.value = X);
        },
        F = (g, O) => {
          l("update:checkedKeys", g), l("check", g, O);
        },
        { prefixCls: S, direction: _ } = ut("tree", e);
      return () => {
        const g = ye(
            `${S.value}-directory`,
            { [`${S.value}-directory-rtl`]: _.value === "rtl" },
            o.class
          ),
          { icon: O = n.icon, blockNode: R = !0 } = e,
          A = lc(e, ["icon", "blockNode"]);
        return y(
          qt,
          U(
            U(U({}, o), {}, { icon: O || rc, ref: d, blockNode: R }, A),
            {},
            {
              prefixCls: S.value,
              class: g,
              expandedKeys: p.value,
              selectedKeys: b.value,
              onSelect: K,
              onClick: m,
              onDblclick: E,
              onExpand: k,
              onCheck: F,
            }
          ),
          n
        );
      };
    },
  }),
  xn = Kn,
  ic = C(qt, {
    DirectoryTree: bn,
    TreeNode: xn,
    install: (e) => (
      e.component(qt.name, qt),
      e.component(xn.name, xn),
      e.component(bn.name, bn),
      e
    ),
  });
function Yo(e, t) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const n = new Set();
  function l(a, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    const c = n.has(a);
    if ((Va(!c, "Warning: There may be circular references"), c)) return !1;
    if (a === r) return !0;
    if (o && i > 1) return !1;
    n.add(a);
    const f = i + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(r) || a.length !== r.length) return !1;
      for (let u = 0; u < a.length; u++) if (!l(a[u], r[u], f)) return !1;
      return !0;
    }
    if (a && r && typeof a == "object" && typeof r == "object") {
      const u = Object.keys(a);
      return u.length !== Object.keys(r).length
        ? !1
        : u.every((d) => l(a[d], r[d], f));
    }
    return !1;
  }
  return l(e, t);
}
const { SubMenu: sc, Item: cc } = en;
function dc(e) {
  return e.some((t) => {
    let { children: o } = t;
    return o && o.length > 0;
  });
}
function Vl(e, t) {
  return typeof t == "string" || typeof t == "number"
    ? t == null
      ? void 0
      : t.toString().toLowerCase().includes(e.trim().toLowerCase())
    : !1;
}
function Xl(e) {
  let {
    filters: t,
    prefixCls: o,
    filteredKeys: n,
    filterMultiple: l,
    searchValue: a,
    filterSearch: r,
  } = e;
  return t.map((i, c) => {
    const f = String(i.value);
    if (i.children)
      return y(
        sc,
        { key: f || c, title: i.text, popupClassName: `${o}-dropdown-submenu` },
        {
          default: () => [
            Xl({
              filters: i.children,
              prefixCls: o,
              filteredKeys: n,
              filterMultiple: l,
              searchValue: a,
              filterSearch: r,
            }),
          ],
        }
      );
    const u = l ? Qt : Ve,
      d = y(
        cc,
        { key: i.value !== void 0 ? f : c },
        {
          default: () => [
            y(u, { checked: n.includes(f) }, null),
            y("span", null, [i.text]),
          ],
        }
      );
    return a.trim()
      ? typeof r == "function"
        ? r(a, i)
          ? d
          : void 0
        : Vl(a, i.text)
        ? d
        : void 0
      : d;
  });
}
const uc = Ce({
  name: "FilterDropdown",
  props: [
    "tablePrefixCls",
    "prefixCls",
    "dropdownPrefixCls",
    "column",
    "filterState",
    "filterMultiple",
    "filterMode",
    "filterSearch",
    "columnKey",
    "triggerFilter",
    "locale",
    "getPopupContainer",
  ],
  setup(e, t) {
    let { slots: o } = t;
    const n = no(),
      l = w(() => {
        var N;
        return (N = e.filterMode) !== null && N !== void 0 ? N : "menu";
      }),
      a = w(() => {
        var N;
        return (N = e.filterSearch) !== null && N !== void 0 ? N : !1;
      }),
      r = w(
        () => e.column.filterDropdownOpen || e.column.filterDropdownVisible
      ),
      i = w(
        () =>
          e.column.onFilterDropdownOpenChange ||
          e.column.onFilterDropdownVisibleChange
      ),
      c = le(!1),
      f = w(() => {
        var N;
        return !!(
          e.filterState &&
          ((!((N = e.filterState.filteredKeys) === null || N === void 0) &&
            N.length) ||
            e.filterState.forceFiltered)
        );
      }),
      u = w(() => {
        var N;
        return dn((N = e.column) === null || N === void 0 ? void 0 : N.filters);
      }),
      d = w(() => {
        const {
          filterDropdown: N,
          slots: z = {},
          customFilterDropdown: M,
        } = e.column;
        return (
          N ||
          (z.filterDropdown && n.value[z.filterDropdown]) ||
          (M && n.value.customFilterDropdown)
        );
      }),
      h = w(() => {
        const { filterIcon: N, slots: z = {} } = e.column;
        return (
          N ||
          (z.filterIcon && n.value[z.filterIcon]) ||
          n.value.customFilterIcon
        );
      }),
      x = (N) => {
        var z;
        (c.value = N), (z = i.value) === null || z === void 0 || z.call(i, N);
      },
      b = w(() => (typeof r.value == "boolean" ? r.value : c.value)),
      p = w(() => {
        var N;
        return (N = e.filterState) === null || N === void 0
          ? void 0
          : N.filteredKeys;
      }),
      s = le([]),
      v = (N) => {
        let { selectedKeys: z } = N;
        s.value = z;
      },
      k = (N, z) => {
        let { node: M, checked: H } = z;
        e.filterMultiple
          ? v({ selectedKeys: N })
          : v({ selectedKeys: H && M.key ? [M.key] : [] });
      };
    Ae(
      p,
      () => {
        c.value && v({ selectedKeys: p.value || [] });
      },
      { immediate: !0 }
    );
    const m = le([]),
      E = le(),
      K = (N) => {
        E.value = setTimeout(() => {
          m.value = N;
        });
      },
      F = () => {
        clearTimeout(E.value);
      };
    Pt(() => {
      clearTimeout(E.value);
    });
    const S = le(""),
      _ = (N) => {
        const { value: z } = N.target;
        S.value = z;
      };
    Ae(c, () => {
      c.value || (S.value = "");
    });
    const g = (N) => {
        const { column: z, columnKey: M, filterState: H } = e,
          J = N && N.length ? N : null;
        if (
          (J === null && (!H || !H.filteredKeys)) ||
          Yo(J, H == null ? void 0 : H.filteredKeys, !0)
        )
          return null;
        e.triggerFilter({ column: z, key: M, filteredKeys: J });
      },
      O = () => {
        x(!1), g(s.value);
      },
      R = function () {
        let { confirm: N, closeDropdown: z } =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { confirm: !1, closeDropdown: !1 };
        N && g([]),
          z && x(!1),
          (S.value = ""),
          e.column.filterResetToDefaultFilteredValue
            ? (s.value = (e.column.defaultFilteredValue || []).map((M) =>
                String(M)
              ))
            : (s.value = []);
      },
      A = function () {
        let { closeDropdown: N } =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { closeDropdown: !0 };
        N && x(!1), g(s.value);
      },
      L = (N) => {
        N && p.value !== void 0 && (s.value = p.value || []),
          x(N),
          !N && !d.value && O();
      },
      { direction: ne } = ut("", e),
      ae = (N) => {
        if (N.target.checked) {
          const z = u.value;
          s.value = z;
        } else s.value = [];
      },
      ue = (N) => {
        let { filters: z } = N;
        return (z || []).map((M, H) => {
          const J = String(M.value),
            Q = { title: M.text, key: M.value !== void 0 ? J : H };
          return M.children && (Q.children = ue({ filters: M.children })), Q;
        });
      },
      be = (N) => {
        var z;
        return C(C({}, N), {
          text: N.title,
          value: N.key,
          children:
            ((z = N.children) === null || z === void 0
              ? void 0
              : z.map((M) => be(M))) || [],
        });
      },
      X = w(() => ue({ filters: e.column.filters })),
      Y = w(() =>
        ye({
          [`${e.dropdownPrefixCls}-menu-without-submenu`]: !dc(
            e.column.filters || []
          ),
        })
      ),
      j = () => {
        const N = s.value,
          {
            column: z,
            locale: M,
            tablePrefixCls: H,
            filterMultiple: J,
            dropdownPrefixCls: Q,
            getPopupContainer: _e,
            prefixCls: Oe,
          } = e;
        return (z.filters || []).length === 0
          ? y(
              co,
              {
                image: co.PRESENTED_IMAGE_SIMPLE,
                description: M.filterEmptyText,
                imageStyle: { height: 24 },
                style: { margin: 0, padding: "16px 0" },
              },
              null
            )
          : l.value === "tree"
          ? y(at, null, [
              y(
                zo,
                {
                  filterSearch: a.value,
                  value: S.value,
                  onChange: _,
                  tablePrefixCls: H,
                  locale: M,
                },
                null
              ),
              y("div", { class: `${H}-filter-dropdown-tree` }, [
                J
                  ? y(
                      Qt,
                      {
                        class: `${H}-filter-dropdown-checkall`,
                        onChange: ae,
                        checked: N.length === u.value.length,
                        indeterminate:
                          N.length > 0 && N.length < u.value.length,
                      },
                      { default: () => [M.filterCheckall] }
                    )
                  : null,
                y(
                  ic,
                  {
                    checkable: !0,
                    selectable: !1,
                    blockNode: !0,
                    multiple: J,
                    checkStrictly: !J,
                    class: `${Q}-menu`,
                    onCheck: k,
                    checkedKeys: N,
                    selectedKeys: N,
                    showIcon: !1,
                    treeData: X.value,
                    autoExpandParent: !0,
                    defaultExpandAll: !0,
                    filterTreeNode: S.value.trim()
                      ? (Pe) =>
                          typeof a.value == "function"
                            ? a.value(S.value, be(Pe))
                            : Vl(S.value, Pe.title)
                      : void 0,
                  },
                  null
                ),
              ]),
            ])
          : y(at, null, [
              y(
                zo,
                {
                  filterSearch: a.value,
                  value: S.value,
                  onChange: _,
                  tablePrefixCls: H,
                  locale: M,
                },
                null
              ),
              y(
                en,
                {
                  multiple: J,
                  prefixCls: `${Q}-menu`,
                  class: Y.value,
                  onClick: F,
                  onSelect: v,
                  onDeselect: v,
                  selectedKeys: N,
                  getPopupContainer: _e,
                  openKeys: m.value,
                  onOpenChange: K,
                },
                {
                  default: () =>
                    Xl({
                      filters: z.filters || [],
                      filterSearch: a.value,
                      prefixCls: Oe,
                      filteredKeys: s.value,
                      filterMultiple: J,
                      searchValue: S.value,
                    }),
                }
              ),
            ]);
      },
      Z = w(() => {
        const N = s.value;
        return e.column.filterResetToDefaultFilteredValue
          ? Yo(
              (e.column.defaultFilteredValue || []).map((z) => String(z)),
              N,
              !0
            )
          : N.length === 0;
      });
    return () => {
      var N;
      const {
        tablePrefixCls: z,
        prefixCls: M,
        column: H,
        dropdownPrefixCls: J,
        locale: Q,
        getPopupContainer: _e,
      } = e;
      let Oe;
      typeof d.value == "function"
        ? (Oe = d.value({
            prefixCls: `${J}-custom`,
            setSelectedKeys: (De) => v({ selectedKeys: De }),
            selectedKeys: s.value,
            confirm: A,
            clearFilters: R,
            filters: H.filters,
            visible: b.value,
            column: H.__originColumn__,
            close: () => {
              x(!1);
            },
          }))
        : d.value
        ? (Oe = d.value)
        : (Oe = y(at, null, [
            j(),
            y("div", { class: `${M}-dropdown-btns` }, [
              y(
                At,
                {
                  type: "link",
                  size: "small",
                  disabled: Z.value,
                  onClick: () => R(),
                },
                { default: () => [Q.filterReset] }
              ),
              y(
                At,
                { type: "primary", size: "small", onClick: O },
                { default: () => [Q.filterConfirm] }
              ),
            ]),
          ]));
      const Pe = y(As, { class: `${M}-dropdown` }, { default: () => [Oe] });
      let Te;
      return (
        typeof h.value == "function"
          ? (Te = h.value({ filtered: f.value, column: H.__originColumn__ }))
          : h.value
          ? (Te = h.value)
          : (Te = y(yi, null, null)),
        y("div", { class: `${M}-column` }, [
          y("span", { class: `${z}-column-title` }, [
            (N = o.default) === null || N === void 0 ? void 0 : N.call(o),
          ]),
          y(
            wt,
            {
              overlay: Pe,
              trigger: ["click"],
              open: b.value,
              onOpenChange: L,
              getPopupContainer: _e,
              placement: ne.value === "rtl" ? "bottomLeft" : "bottomRight",
            },
            {
              default: () => [
                y(
                  "span",
                  {
                    role: "button",
                    tabindex: -1,
                    class: ye(`${M}-trigger`, { active: f.value }),
                    onClick: (De) => {
                      De.stopPropagation();
                    },
                  },
                  [Te]
                ),
              ],
            }
          ),
        ])
      );
    };
  },
});
function Hn(e, t, o) {
  let n = [];
  return (
    (e || []).forEach((l, a) => {
      var r, i;
      const c = Ht(a, o),
        f =
          l.filterDropdown ||
          ((r = l == null ? void 0 : l.slots) === null || r === void 0
            ? void 0
            : r.filterDropdown) ||
          l.customFilterDropdown;
      if (l.filters || f || "onFilter" in l)
        if ("filteredValue" in l) {
          let u = l.filteredValue;
          f ||
            (u =
              (i = u == null ? void 0 : u.map(String)) !== null && i !== void 0
                ? i
                : u),
            n.push({
              column: l,
              key: kt(l, c),
              filteredKeys: u,
              forceFiltered: l.filtered,
            });
        } else
          n.push({
            column: l,
            key: kt(l, c),
            filteredKeys:
              t && l.defaultFilteredValue ? l.defaultFilteredValue : void 0,
            forceFiltered: l.filtered,
          });
      "children" in l && (n = [...n, ...Hn(l.children, t, c)]);
    }),
    n
  );
}
function Gl(e, t, o, n, l, a, r, i) {
  return o.map((c, f) => {
    var u;
    const d = Ht(f, i),
      { filterMultiple: h = !0, filterMode: x, filterSearch: b } = c;
    let p = c;
    const s =
      c.filterDropdown ||
      ((u = c == null ? void 0 : c.slots) === null || u === void 0
        ? void 0
        : u.filterDropdown) ||
      c.customFilterDropdown;
    if (p.filters || s) {
      const v = kt(p, d),
        k = n.find((m) => {
          let { key: E } = m;
          return v === E;
        });
      p = C(C({}, p), {
        title: (m) =>
          y(
            uc,
            {
              tablePrefixCls: e,
              prefixCls: `${e}-filter`,
              dropdownPrefixCls: t,
              column: p,
              columnKey: v,
              filterState: k,
              filterMultiple: h,
              filterMode: x,
              filterSearch: b,
              triggerFilter: a,
              locale: l,
              getPopupContainer: r,
            },
            { default: () => [lo(c.title, m)] }
          ),
      });
    }
    return (
      "children" in p &&
        (p = C(C({}, p), { children: Gl(e, t, p.children, n, l, a, r, d) })),
      p
    );
  });
}
function dn(e) {
  let t = [];
  return (
    (e || []).forEach((o) => {
      let { value: n, children: l } = o;
      t.push(n), l && (t = [...t, ...dn(l)]);
    }),
    t
  );
}
function qo(e) {
  const t = {};
  return (
    e.forEach((o) => {
      let { key: n, filteredKeys: l, column: a } = o;
      var r;
      const i =
          a.filterDropdown ||
          ((r = a == null ? void 0 : a.slots) === null || r === void 0
            ? void 0
            : r.filterDropdown) ||
          a.customFilterDropdown,
        { filters: c } = a;
      if (i) t[n] = l || null;
      else if (Array.isArray(l)) {
        const f = dn(c);
        t[n] = f.filter((u) => l.includes(String(u)));
      } else t[n] = null;
    }),
    t
  );
}
function Jo(e, t) {
  return t.reduce((o, n) => {
    const {
      column: { onFilter: l, filters: a },
      filteredKeys: r,
    } = n;
    return l && r && r.length
      ? o.filter((i) =>
          r.some((c) => {
            const f = dn(a),
              u = f.findIndex((h) => String(h) === String(c)),
              d = u !== -1 ? f[u] : c;
            return l(d, i);
          })
        )
      : o;
  }, e);
}
function fc(e) {
  let {
    prefixCls: t,
    dropdownPrefixCls: o,
    mergedColumns: n,
    locale: l,
    onFilterChange: a,
    getPopupContainer: r,
  } = e;
  const [i, c] = St(Hn(n.value, !0)),
    f = w(() => {
      const x = Hn(n.value, !1);
      if (x.length === 0) return x;
      let b = !0,
        p = !0;
      if (
        (x.forEach((s) => {
          let { filteredKeys: v } = s;
          v !== void 0 ? (b = !1) : (p = !1);
        }),
        b)
      ) {
        const s = (n.value || []).map((v, k) => kt(v, Ht(k)));
        return i.value
          .filter((v) => {
            let { key: k } = v;
            return s.includes(k);
          })
          .map((v) => {
            const k = n.value[s.findIndex((m) => m === v.key)];
            return C(C({}, v), {
              column: C(C({}, v.column), k),
              forceFiltered: k.filtered,
            });
          });
      }
      return (
        tt(
          p,
          "Table",
          "Columns should all contain `filteredValue` or not contain `filteredValue`."
        ),
        x
      );
    }),
    u = w(() => qo(f.value)),
    d = (x) => {
      const b = f.value.filter((p) => {
        let { key: s } = p;
        return s !== x.key;
      });
      b.push(x), c(b), a(qo(b), b);
    };
  return [(x) => Gl(t.value, o.value, x, f.value, l.value, d, r.value), f, u];
}
function Ul(e, t) {
  return e.map((o) => {
    const n = C({}, o);
    return (
      (n.title = lo(n.title, t)),
      "children" in n && (n.children = Ul(n.children, t)),
      n
    );
  });
}
function pc(e) {
  return [(o) => Ul(o, e.value)];
}
function vc(e) {
  return function (o) {
    let {
      prefixCls: n,
      onExpand: l,
      record: a,
      expanded: r,
      expandable: i,
    } = o;
    const c = `${n}-row-expand-icon`;
    return y(
      "button",
      {
        type: "button",
        onClick: (f) => {
          l(a, f), f.stopPropagation();
        },
        class: ye(c, {
          [`${c}-spaced`]: !i,
          [`${c}-expanded`]: i && r,
          [`${c}-collapsed`]: i && !r,
        }),
        "aria-label": r ? e.collapse : e.expand,
        "aria-expanded": r,
      },
      null
    );
  };
}
function Yl(e, t) {
  const o = t.value;
  return e.map((n) => {
    var l;
    if (n === st || n === mt) return n;
    const a = C({}, n),
      { slots: r = {} } = a;
    return (
      (a.__originColumn__ = n),
      tt(
        !("slots" in a),
        "Table",
        "`column.slots` is deprecated. Please use `v-slot:headerCell` `v-slot:bodyCell` instead."
      ),
      Object.keys(r).forEach((i) => {
        const c = r[i];
        a[i] === void 0 && o[c] && (a[i] = o[c]);
      }),
      t.value.headerCell &&
        !(!((l = n.slots) === null || l === void 0) && l.title) &&
        (a.title = an(
          t.value,
          "headerCell",
          { title: n.title, column: n },
          () => [n.title]
        )),
      "children" in a &&
        Array.isArray(a.children) &&
        (a.children = Yl(a.children, t)),
      a
    );
  });
}
function mc(e) {
  return [(o) => Yl(o, e)];
}
const hc = (e) => {
    const { componentCls: t } = e,
      o = `${e.lineWidth}px ${e.lineType} ${e.tableBorderColor}`,
      n = (l, a, r) => ({
        [`&${t}-${l}`]: {
          [`> ${t}-container`]: {
            [`> ${t}-content, > ${t}-body`]: {
              "> table > tbody > tr > td": {
                [`> ${t}-expanded-row-fixed`]: {
                  margin: `-${a}px -${r + e.lineWidth}px`,
                },
              },
            },
          },
        },
      });
    return {
      [`${t}-wrapper`]: {
        [`${t}${t}-bordered`]: C(
          C(
            C(
              {
                [`> ${t}-title`]: { border: o, borderBottom: 0 },
                [`> ${t}-container`]: {
                  borderInlineStart: o,
                  [`
            > ${t}-content,
            > ${t}-header,
            > ${t}-body,
            > ${t}-summary
          `]: {
                    "> table": {
                      [`
                > thead > tr > th,
                > tbody > tr > td,
                > tfoot > tr > th,
                > tfoot > tr > td
              `]: { borderInlineEnd: o },
                      "> thead": {
                        "> tr:not(:last-child) > th": { borderBottom: o },
                        "> tr > th::before": {
                          backgroundColor: "transparent !important",
                        },
                      },
                      [`
                > thead > tr,
                > tbody > tr,
                > tfoot > tr
              `]: {
                        [`> ${t}-cell-fix-right-first::after`]: {
                          borderInlineEnd: o,
                        },
                      },
                      "> tbody > tr > td": {
                        [`> ${t}-expanded-row-fixed`]: {
                          margin: `-${e.tablePaddingVertical}px -${
                            e.tablePaddingHorizontal + e.lineWidth
                          }px`,
                          "&::after": {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: e.lineWidth,
                            bottom: 0,
                            borderInlineEnd: o,
                            content: '""',
                          },
                        },
                      },
                    },
                  },
                  [`
            > ${t}-content,
            > ${t}-header
          `]: { "> table": { borderTop: o } },
                },
                [`&${t}-scroll-horizontal`]: {
                  [`> ${t}-container > ${t}-body`]: {
                    "> table > tbody": {
                      [`
                > tr${t}-expanded-row,
                > tr${t}-placeholder
              `]: { "> td": { borderInlineEnd: 0 } },
                    },
                  },
                },
              },
              n(
                "middle",
                e.tablePaddingVerticalMiddle,
                e.tablePaddingHorizontalMiddle
              )
            ),
            n(
              "small",
              e.tablePaddingVerticalSmall,
              e.tablePaddingHorizontalSmall
            )
          ),
          { [`> ${t}-footer`]: { border: o, borderTop: 0 } }
        ),
        [`${t}-cell`]: {
          [`${t}-container:first-child`]: { borderTop: 0 },
          "&-scrollbar:not([rowspan])": {
            boxShadow: `0 ${e.lineWidth}px 0 ${e.lineWidth}px ${e.tableHeaderBg}`,
          },
        },
      },
    };
  },
  gc = hc,
  yc = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-cell-ellipsis`]: C(C({}, va), {
          wordBreak: "keep-all",
          [`
          &${t}-cell-fix-left-last,
          &${t}-cell-fix-right-first
        `]: {
            overflow: "visible",
            [`${t}-cell-content`]: {
              display: "block",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          },
          [`${t}-column-title`]: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordBreak: "keep-all",
          },
        }),
      },
    };
  },
  bc = yc,
  xc = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-tbody > tr${t}-placeholder`]: {
          textAlign: "center",
          color: e.colorTextDisabled,
          "&:hover > td": { background: e.colorBgContainer },
        },
      },
    };
  },
  Cc = xc,
  Sc = (e) => {
    const {
        componentCls: t,
        antCls: o,
        controlInteractiveSize: n,
        motionDurationSlow: l,
        lineWidth: a,
        paddingXS: r,
        lineType: i,
        tableBorderColor: c,
        tableExpandIconBg: f,
        tableExpandColumnWidth: u,
        borderRadius: d,
        fontSize: h,
        fontSizeSM: x,
        lineHeight: b,
        tablePaddingVertical: p,
        tablePaddingHorizontal: s,
        tableExpandedRowBg: v,
        paddingXXS: k,
      } = e,
      m = n / 2 - a,
      E = m * 2 + a * 3,
      K = `${a}px ${i} ${c}`,
      F = k - a;
    return {
      [`${t}-wrapper`]: {
        [`${t}-expand-icon-col`]: { width: u },
        [`${t}-row-expand-icon-cell`]: {
          textAlign: "center",
          [`${t}-row-expand-icon`]: {
            display: "inline-flex",
            float: "none",
            verticalAlign: "sub",
          },
        },
        [`${t}-row-indent`]: { height: 1, float: "left" },
        [`${t}-row-expand-icon`]: C(C({}, Cr(e)), {
          position: "relative",
          float: "left",
          boxSizing: "border-box",
          width: E,
          height: E,
          padding: 0,
          color: "inherit",
          lineHeight: `${E}px`,
          background: f,
          border: K,
          borderRadius: d,
          transform: `scale(${n / E})`,
          transition: `all ${l}`,
          userSelect: "none",
          ["&:focus, &:hover, &:active"]: { borderColor: "currentcolor" },
          ["&::before, &::after"]: {
            position: "absolute",
            background: "currentcolor",
            transition: `transform ${l} ease-out`,
            content: '""',
          },
          "&::before": {
            top: m,
            insetInlineEnd: F,
            insetInlineStart: F,
            height: a,
          },
          "&::after": {
            top: F,
            bottom: F,
            insetInlineStart: m,
            width: a,
            transform: "rotate(90deg)",
          },
          "&-collapsed::before": { transform: "rotate(-180deg)" },
          "&-collapsed::after": { transform: "rotate(0deg)" },
          "&-spaced": {
            "&::before, &::after": { display: "none", content: "none" },
            background: "transparent",
            border: 0,
            visibility: "hidden",
          },
        }),
        [`${t}-row-indent + ${t}-row-expand-icon`]: {
          marginTop: (h * b - a * 3) / 2 - Math.ceil((x * 1.4 - a * 3) / 2),
          marginInlineEnd: r,
        },
        [`tr${t}-expanded-row`]: {
          "&, &:hover": { "> td": { background: v } },
          [`${o}-descriptions-view`]: {
            display: "flex",
            table: { flex: "auto", width: "auto" },
          },
        },
        [`${t}-expanded-row-fixed`]: {
          position: "relative",
          margin: `-${p}px -${s}px`,
          padding: `${p}px ${s}px`,
        },
      },
    };
  },
  wc = Sc,
  $c = (e) => {
    const {
        componentCls: t,
        antCls: o,
        iconCls: n,
        tableFilterDropdownWidth: l,
        tableFilterDropdownSearchWidth: a,
        paddingXXS: r,
        paddingXS: i,
        colorText: c,
        lineWidth: f,
        lineType: u,
        tableBorderColor: d,
        tableHeaderIconColor: h,
        fontSizeSM: x,
        tablePaddingHorizontal: b,
        borderRadius: p,
        motionDurationSlow: s,
        colorTextDescription: v,
        colorPrimary: k,
        tableHeaderFilterActiveBg: m,
        colorTextDisabled: E,
        tableFilterDropdownBg: K,
        tableFilterDropdownHeight: F,
        controlItemBgHover: S,
        controlItemBgActive: _,
        boxShadowSecondary: g,
      } = e,
      O = `${o}-dropdown`,
      R = `${t}-filter-dropdown`,
      A = `${o}-tree`,
      L = `${f}px ${u} ${d}`;
    return [
      {
        [`${t}-wrapper`]: {
          [`${t}-filter-column`]: {
            display: "flex",
            justifyContent: "space-between",
          },
          [`${t}-filter-trigger`]: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginBlock: -r,
            marginInline: `${r}px ${-b / 2}px`,
            padding: `0 ${r}px`,
            color: h,
            fontSize: x,
            borderRadius: p,
            cursor: "pointer",
            transition: `all ${s}`,
            "&:hover": { color: v, background: m },
            "&.active": { color: k },
          },
        },
      },
      {
        [`${o}-dropdown`]: {
          [R]: C(C({}, $t(e)), {
            minWidth: l,
            backgroundColor: K,
            borderRadius: p,
            boxShadow: g,
            [`${O}-menu`]: {
              maxHeight: F,
              overflowX: "hidden",
              border: 0,
              boxShadow: "none",
              "&:empty::after": {
                display: "block",
                padding: `${i}px 0`,
                color: E,
                fontSize: x,
                textAlign: "center",
                content: '"Not Found"',
              },
            },
            [`${R}-tree`]: {
              paddingBlock: `${i}px 0`,
              paddingInline: i,
              [A]: { padding: 0 },
              [`${A}-treenode ${A}-node-content-wrapper:hover`]: {
                backgroundColor: S,
              },
              [`${A}-treenode-checkbox-checked ${A}-node-content-wrapper`]: {
                "&, &:hover": { backgroundColor: _ },
              },
            },
            [`${R}-search`]: {
              padding: i,
              borderBottom: L,
              "&-input": { input: { minWidth: a }, [n]: { color: E } },
            },
            [`${R}-checkall`]: {
              width: "100%",
              marginBottom: r,
              marginInlineStart: r,
            },
            [`${R}-btns`]: {
              display: "flex",
              justifyContent: "space-between",
              padding: `${i - f}px ${i}px`,
              overflow: "hidden",
              backgroundColor: "inherit",
              borderTop: L,
            },
          }),
        },
      },
      {
        [`${o}-dropdown ${R}, ${R}-submenu`]: {
          [`${o}-checkbox-wrapper + span`]: { paddingInlineStart: i, color: c },
          ["> ul"]: {
            maxHeight: "calc(100vh - 130px)",
            overflowX: "hidden",
            overflowY: "auto",
          },
        },
      },
    ];
  },
  kc = $c,
  Kc = (e) => {
    const {
        componentCls: t,
        lineWidth: o,
        colorSplit: n,
        motionDurationSlow: l,
        zIndexTableFixed: a,
        tableBg: r,
        zIndexTableSticky: i,
      } = e,
      c = n;
    return {
      [`${t}-wrapper`]: {
        [`
        ${t}-cell-fix-left,
        ${t}-cell-fix-right
      `]: { position: "sticky !important", zIndex: a, background: r },
        [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after
      `]: {
          position: "absolute",
          top: 0,
          right: { _skip_check_: !0, value: 0 },
          bottom: -o,
          width: 30,
          transform: "translateX(100%)",
          transition: `box-shadow ${l}`,
          content: '""',
          pointerEvents: "none",
        },
        [`${t}-cell-fix-left-all::after`]: { display: "none" },
        [`
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: {
          position: "absolute",
          top: 0,
          bottom: -o,
          left: { _skip_check_: !0, value: 0 },
          width: 30,
          transform: "translateX(-100%)",
          transition: `box-shadow ${l}`,
          content: '""',
          pointerEvents: "none",
        },
        [`${t}-container`]: {
          "&::before, &::after": {
            position: "absolute",
            top: 0,
            bottom: 0,
            zIndex: i + 1,
            width: 30,
            transition: `box-shadow ${l}`,
            content: '""',
            pointerEvents: "none",
          },
          "&::before": { insetInlineStart: 0 },
          "&::after": { insetInlineEnd: 0 },
        },
        [`${t}-ping-left`]: {
          [`&:not(${t}-has-fix-left) ${t}-container`]: {
            position: "relative",
            "&::before": { boxShadow: `inset 10px 0 8px -8px ${c}` },
          },
          [`
          ${t}-cell-fix-left-first::after,
          ${t}-cell-fix-left-last::after
        `]: { boxShadow: `inset 10px 0 8px -8px ${c}` },
          [`${t}-cell-fix-left-last::before`]: {
            backgroundColor: "transparent !important",
          },
        },
        [`${t}-ping-right`]: {
          [`&:not(${t}-has-fix-right) ${t}-container`]: {
            position: "relative",
            "&::after": { boxShadow: `inset -10px 0 8px -8px ${c}` },
          },
          [`
          ${t}-cell-fix-right-first::after,
          ${t}-cell-fix-right-last::after
        `]: { boxShadow: `inset -10px 0 8px -8px ${c}` },
        },
      },
    };
  },
  Oc = Kc,
  Ec = (e) => {
    const { componentCls: t, antCls: o } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-pagination${o}-pagination`]: { margin: `${e.margin}px 0` },
        [`${t}-pagination`]: {
          display: "flex",
          flexWrap: "wrap",
          rowGap: e.paddingXS,
          "> *": { flex: "none" },
          "&-left": { justifyContent: "flex-start" },
          "&-center": { justifyContent: "center" },
          "&-right": { justifyContent: "flex-end" },
        },
      },
    };
  },
  Pc = Ec,
  _c = (e) => {
    const { componentCls: t, tableRadius: o } = e;
    return {
      [`${t}-wrapper`]: {
        [t]: {
          [`${t}-title, ${t}-header`]: { borderRadius: `${o}px ${o}px 0 0` },
          [`${t}-title + ${t}-container`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0,
            table: {
              borderRadius: 0,
              "> thead > tr:first-child": {
                "th:first-child": { borderRadius: 0 },
                "th:last-child": { borderRadius: 0 },
              },
            },
          },
          "&-container": {
            borderStartStartRadius: o,
            borderStartEndRadius: o,
            "table > thead > tr:first-child": {
              "> *:first-child": { borderStartStartRadius: o },
              "> *:last-child": { borderStartEndRadius: o },
            },
          },
          "&-footer": { borderRadius: `0 0 ${o}px ${o}px` },
        },
      },
    };
  },
  Tc = _c,
  Ic = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-wrapper-rtl`]: {
        direction: "rtl",
        table: { direction: "rtl" },
        [`${t}-pagination-left`]: { justifyContent: "flex-end" },
        [`${t}-pagination-right`]: { justifyContent: "flex-start" },
        [`${t}-row-expand-icon`]: {
          "&::after": { transform: "rotate(-90deg)" },
          "&-collapsed::before": { transform: "rotate(180deg)" },
          "&-collapsed::after": { transform: "rotate(0deg)" },
        },
      },
    };
  },
  Rc = Ic,
  Dc = (e) => {
    const {
      componentCls: t,
      antCls: o,
      iconCls: n,
      fontSizeIcon: l,
      paddingXS: a,
      tableHeaderIconColor: r,
      tableHeaderIconColorHover: i,
    } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-selection-col`]: { width: e.tableSelectionColumnWidth },
        [`${t}-bordered ${t}-selection-col`]: {
          width: e.tableSelectionColumnWidth + a * 2,
        },
        [`
        table tr th${t}-selection-column,
        table tr td${t}-selection-column
      `]: {
          paddingInlineEnd: e.paddingXS,
          paddingInlineStart: e.paddingXS,
          textAlign: "center",
          [`${o}-radio-wrapper`]: { marginInlineEnd: 0 },
        },
        [`table tr th${t}-selection-column${t}-cell-fix-left`]: {
          zIndex: e.zIndexTableFixed + 1,
        },
        [`table tr th${t}-selection-column::after`]: {
          backgroundColor: "transparent !important",
        },
        [`${t}-selection`]: {
          position: "relative",
          display: "inline-flex",
          flexDirection: "column",
        },
        [`${t}-selection-extra`]: {
          position: "absolute",
          top: 0,
          zIndex: 1,
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          marginInlineStart: "100%",
          paddingInlineStart: `${e.tablePaddingHorizontal / 4}px`,
          [n]: {
            color: r,
            fontSize: l,
            verticalAlign: "baseline",
            "&:hover": { color: i },
          },
        },
      },
    };
  },
  Nc = Dc,
  Bc = (e) => {
    const { componentCls: t } = e,
      o = (n, l, a, r) => ({
        [`${t}${t}-${n}`]: {
          fontSize: r,
          [`
        ${t}-title,
        ${t}-footer,
        ${t}-thead > tr > th,
        ${t}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: { padding: `${l}px ${a}px` },
          [`${t}-filter-trigger`]: { marginInlineEnd: `-${a / 2}px` },
          [`${t}-expanded-row-fixed`]: { margin: `-${l}px -${a}px` },
          [`${t}-tbody`]: {
            [`${t}-wrapper:only-child ${t}`]: {
              marginBlock: `-${l}px`,
              marginInline: `${e.tableExpandColumnWidth - a}px -${a}px`,
            },
          },
          [`${t}-selection-column`]: { paddingInlineStart: `${a / 4}px` },
        },
      });
    return {
      [`${t}-wrapper`]: C(
        C(
          {},
          o(
            "middle",
            e.tablePaddingVerticalMiddle,
            e.tablePaddingHorizontalMiddle,
            e.tableFontSizeMiddle
          )
        ),
        o(
          "small",
          e.tablePaddingVerticalSmall,
          e.tablePaddingHorizontalSmall,
          e.tableFontSizeSmall
        )
      ),
    };
  },
  Fc = Bc,
  Lc = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-wrapper ${t}-resize-handle`]: {
        position: "absolute",
        top: 0,
        height: "100% !important",
        bottom: 0,
        left: " auto !important",
        right: " -8px",
        cursor: "col-resize",
        touchAction: "none",
        userSelect: "auto",
        width: "16px",
        zIndex: 1,
        ["&-line"]: {
          display: "block",
          width: "1px",
          marginLeft: "7px",
          height: "100% !important",
          backgroundColor: e.colorPrimary,
          opacity: 0,
        },
        ["&:hover &-line"]: { opacity: 1 },
      },
      [`${t}-wrapper  ${t}-resize-handle.dragging`]: {
        overflow: "hidden",
        [`${t}-resize-handle-line`]: { opacity: 1 },
        ["&:before"]: {
          position: "absolute",
          top: 0,
          bottom: 0,
          content: '" "',
          width: "200vw",
          transform: "translateX(-50%)",
          opacity: 0,
        },
      },
    };
  },
  Ac = Lc,
  zc = (e) => {
    const {
      componentCls: t,
      marginXXS: o,
      fontSizeIcon: n,
      tableHeaderIconColor: l,
      tableHeaderIconColorHover: a,
    } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-thead th${t}-column-has-sorters`]: {
          outline: "none",
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "&:hover": {
            background: e.tableHeaderSortHoverBg,
            "&::before": { backgroundColor: "transparent !important" },
          },
          "&:focus-visible": { color: e.colorPrimary },
          [`
          &${t}-cell-fix-left:hover,
          &${t}-cell-fix-right:hover
        `]: { background: e.tableFixedHeaderSortActiveBg },
        },
        [`${t}-thead th${t}-column-sort`]: {
          background: e.tableHeaderSortBg,
          "&::before": { backgroundColor: "transparent !important" },
        },
        [`td${t}-column-sort`]: { background: e.tableBodySortBg },
        [`${t}-column-title`]: { position: "relative", zIndex: 1, flex: 1 },
        [`${t}-column-sorters`]: {
          display: "flex",
          flex: "auto",
          alignItems: "center",
          justifyContent: "space-between",
          "&::after": {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            content: '""',
          },
        },
        [`${t}-column-sorter`]: {
          marginInlineStart: o,
          color: l,
          fontSize: 0,
          transition: `color ${e.motionDurationSlow}`,
          "&-inner": {
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
          },
          "&-up, &-down": {
            fontSize: n,
            "&.active": { color: e.colorPrimary },
          },
          [`${t}-column-sorter-up + ${t}-column-sorter-down`]: {
            marginTop: "-0.3em",
          },
        },
        [`${t}-column-sorters:hover ${t}-column-sorter`]: { color: a },
      },
    };
  },
  Hc = zc,
  Mc = (e) => {
    const {
        componentCls: t,
        opacityLoading: o,
        tableScrollThumbBg: n,
        tableScrollThumbBgHover: l,
        tableScrollThumbSize: a,
        tableScrollBg: r,
        zIndexTableSticky: i,
      } = e,
      c = `${e.lineWidth}px ${e.lineType} ${e.tableBorderColor}`;
    return {
      [`${t}-wrapper`]: {
        [`${t}-sticky`]: {
          "&-holder": {
            position: "sticky",
            zIndex: i,
            background: e.colorBgContainer,
          },
          "&-scroll": {
            position: "sticky",
            bottom: 0,
            height: `${a}px !important`,
            zIndex: i,
            display: "flex",
            alignItems: "center",
            background: r,
            borderTop: c,
            opacity: o,
            "&:hover": { transformOrigin: "center bottom" },
            "&-bar": {
              height: a,
              backgroundColor: n,
              borderRadius: 100,
              transition: `all ${e.motionDurationSlow}, transform none`,
              position: "absolute",
              bottom: 0,
              "&:hover, &-active": { backgroundColor: l },
            },
          },
        },
      },
    };
  },
  jc = Mc,
  Wc = (e) => {
    const { componentCls: t, lineWidth: o, tableBorderColor: n } = e,
      l = `${o}px ${e.lineType} ${n}`;
    return {
      [`${t}-wrapper`]: {
        [`${t}-summary`]: {
          position: "relative",
          zIndex: e.zIndexTableFixed,
          background: e.tableBg,
          "> tr": { "> th, > td": { borderBottom: l } },
        },
        [`div${t}-summary`]: { boxShadow: `0 -${o}px 0 ${n}` },
      },
    };
  },
  Zo = Wc,
  Vc = (e) => {
    const {
        componentCls: t,
        fontWeightStrong: o,
        tablePaddingVertical: n,
        tablePaddingHorizontal: l,
        lineWidth: a,
        lineType: r,
        tableBorderColor: i,
        tableFontSize: c,
        tableBg: f,
        tableRadius: u,
        tableHeaderTextColor: d,
        motionDurationMid: h,
        tableHeaderBg: x,
        tableHeaderCellSplitColor: b,
        tableRowHoverBg: p,
        tableSelectedRowBg: s,
        tableSelectedRowHoverBg: v,
        tableFooterTextColor: k,
        tableFooterBg: m,
        paddingContentVerticalLG: E,
        wireframe: K,
      } = e,
      F = `${a}px ${r} ${i}`;
    return {
      [`${t}-wrapper`]: C(C({ clear: "both", maxWidth: "100%" }, ma()), {
        [t]: C(C({}, $t(e)), {
          fontSize: c,
          background: f,
          borderRadius: `${u}px ${u}px 0 0`,
        }),
        table: {
          width: "100%",
          textAlign: "start",
          borderRadius: `${u}px ${u}px 0 0`,
          borderCollapse: "separate",
          borderSpacing: 0,
        },
        [`
          ${t}-thead > tr > th,
          ${t}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
          position: "relative",
          padding: `${E}px ${l}px`,
          overflowWrap: "break-word",
        },
        [`${t}-title`]: { padding: `${n}px ${l}px` },
        [`${t}-thead`]: {
          [`
          > tr > th,
          > tr > td
        `]: {
            position: "relative",
            color: d,
            fontWeight: o,
            textAlign: "start",
            background: x,
            borderBottom: F,
            transition: `background ${h} ease`,
            "&[colspan]:not([colspan='1'])": { textAlign: "center" },
            [`&:not(:last-child):not(${t}-selection-column):not(${t}-row-expand-icon-cell):not([colspan])::before`]:
              {
                position: "absolute",
                top: "50%",
                insetInlineEnd: 0,
                width: 1,
                height: "1.6em",
                backgroundColor: b,
                transform: "translateY(-50%)",
                transition: `background-color ${h}`,
                content: '""',
              },
          },
          "> tr:not(:last-child) > th[colspan]": { borderBottom: 0 },
        },
        [`${t}:not(${t}-bordered)`]: {
          [`${t}-tbody`]: {
            "> tr": {
              "> td": { borderTop: F, borderBottom: "transparent" },
              "&:last-child > td": { borderBottom: F },
              [`&:first-child > td,
              &${t}-measure-row + tr > td`]: {
                borderTop: "none",
                borderTopColor: "transparent",
              },
            },
          },
        },
        [`${t}${t}-bordered`]: {
          [`${t}-tbody`]: { "> tr": { "> td": { borderBottom: F } } },
        },
        [`${t}-tbody`]: {
          "> tr": {
            "> td": {
              transition: `background ${h}, border-color ${h}`,
              [`
              > ${t}-wrapper:only-child,
              > ${t}-expanded-row-fixed > ${t}-wrapper:only-child
            `]: {
                [t]: {
                  marginBlock: `-${n}px`,
                  marginInline: `${e.tableExpandColumnWidth - l}px -${l}px`,
                  [`${t}-tbody > tr:last-child > td`]: {
                    borderBottom: 0,
                    "&:first-child, &:last-child": { borderRadius: 0 },
                  },
                },
              },
            },
            [`
            &${t}-row:hover > td,
            > td${t}-cell-row-hover
          `]: { background: p },
            [`&${t}-row-selected`]: {
              "> td": { background: s },
              "&:hover > td": { background: v },
            },
          },
        },
        [`${t}:not(${t}-bordered) ${t}-tbody > tr`]: K
          ? void 0
          : {
              [`&${t}-row:hover, &${t}-row${t}-row-selected`]: {
                [`+ tr${t}-row > td`]: { borderTopColor: "transparent" },
              },
              [`&${t}-row:last-child:hover > td,
          &${t}-row${t}-row-selected:last-child > td`]: {
                borderBottomColor: "transparent",
              },
              [`
          &${t}-row:hover > td,
          > td${t}-cell-row-hover,
          &${t}-row${t}-row-selected > td
        `]: {
                borderTopColor: "transparent",
                "&:first-child": {
                  borderStartStartRadius: u,
                  borderEndStartRadius: u,
                },
                "&:last-child": {
                  borderStartEndRadius: u,
                  borderEndEndRadius: u,
                },
              },
            },
        [`${t}-footer`]: { padding: `${n}px ${l}px`, color: k, background: m },
      }),
    };
  },
  Xc = on("Table", (e) => {
    const {
        controlItemBgActive: t,
        controlItemBgActiveHover: o,
        colorTextPlaceholder: n,
        colorTextHeading: l,
        colorSplit: a,
        colorBorderSecondary: r,
        fontSize: i,
        padding: c,
        paddingXS: f,
        paddingSM: u,
        controlHeight: d,
        colorFillAlter: h,
        colorIcon: x,
        colorIconHover: b,
        opacityLoading: p,
        colorBgContainer: s,
        borderRadiusLG: v,
        colorFillContent: k,
        colorFillSecondary: m,
        controlInteractiveSize: E,
      } = e,
      K = new Ft(x),
      F = new Ft(b),
      S = t,
      _ = 2,
      g = new Ft(m).onBackground(s).toHexString(),
      O = new Ft(k).onBackground(s).toHexString(),
      R = new Ft(h).onBackground(s).toHexString(),
      A = ln(e, {
        tableFontSize: i,
        tableBg: s,
        tableRadius: v,
        tablePaddingVertical: c,
        tablePaddingHorizontal: c,
        tablePaddingVerticalMiddle: u,
        tablePaddingHorizontalMiddle: f,
        tablePaddingVerticalSmall: f,
        tablePaddingHorizontalSmall: f,
        tableBorderColor: r,
        tableHeaderTextColor: l,
        tableHeaderBg: R,
        tableFooterTextColor: l,
        tableFooterBg: R,
        tableHeaderCellSplitColor: r,
        tableHeaderSortBg: g,
        tableHeaderSortHoverBg: O,
        tableHeaderIconColor: K.clone()
          .setAlpha(K.getAlpha() * p)
          .toRgbString(),
        tableHeaderIconColorHover: F.clone()
          .setAlpha(F.getAlpha() * p)
          .toRgbString(),
        tableBodySortBg: R,
        tableFixedHeaderSortActiveBg: g,
        tableHeaderFilterActiveBg: k,
        tableFilterDropdownBg: s,
        tableRowHoverBg: R,
        tableSelectedRowBg: S,
        tableSelectedRowHoverBg: o,
        zIndexTableFixed: _,
        zIndexTableSticky: _ + 1,
        tableFontSizeMiddle: i,
        tableFontSizeSmall: i,
        tableSelectionColumnWidth: d,
        tableExpandIconBg: s,
        tableExpandColumnWidth: E + 2 * e.padding,
        tableExpandedRowBg: h,
        tableFilterDropdownWidth: 120,
        tableFilterDropdownHeight: 264,
        tableFilterDropdownSearchWidth: 140,
        tableScrollThumbSize: 8,
        tableScrollThumbBg: n,
        tableScrollThumbBgHover: l,
        tableScrollBg: a,
      });
    return [
      Vc(A),
      Pc(A),
      Zo(A),
      Hc(A),
      kc(A),
      gc(A),
      Tc(A),
      wc(A),
      Zo(A),
      Cc(A),
      Nc(A),
      Oc(A),
      jc(A),
      bc(A),
      Fc(A),
      Ac(A),
      Rc(A),
    ];
  }),
  Gc = [],
  ql = () => ({
    prefixCls: et(),
    columns: Ye(),
    rowKey: Ue([String, Function]),
    tableLayout: et(),
    rowClassName: Ue([String, Function]),
    title: Ee(),
    footer: Ee(),
    id: et(),
    showHeader: Ke(),
    components: lt(),
    customRow: Ee(),
    customHeaderRow: Ee(),
    direction: et(),
    expandFixed: Ue([Boolean, String]),
    expandColumnWidth: Number,
    expandedRowKeys: Ye(),
    defaultExpandedRowKeys: Ye(),
    expandedRowRender: Ee(),
    expandRowByClick: Ke(),
    expandIcon: Ee(),
    onExpand: Ee(),
    onExpandedRowsChange: Ee(),
    "onUpdate:expandedRowKeys": Ee(),
    defaultExpandAllRows: Ke(),
    indentSize: Number,
    expandIconColumnIndex: Number,
    showExpandColumn: Ke(),
    expandedRowClassName: Ee(),
    childrenColumnName: et(),
    rowExpandable: Ee(),
    sticky: Ue([Boolean, Object]),
    dropdownPrefixCls: String,
    dataSource: Ye(),
    pagination: Ue([Boolean, Object]),
    loading: Ue([Boolean, Object]),
    size: et(),
    bordered: Ke(),
    locale: lt(),
    onChange: Ee(),
    onResizeColumn: Ee(),
    rowSelection: lt(),
    getPopupContainer: Ee(),
    scroll: lt(),
    sortDirections: Ye(),
    showSorterTooltip: Ue([Boolean, Object], !0),
    transformCellText: Ee(),
  }),
  Uc = Ce({
    name: "InteralTable",
    inheritAttrs: !1,
    props: Ot(C(C({}, ql()), { contextSlots: lt() }), { rowKey: "key" }),
    setup(e, t) {
      let { attrs: o, slots: n, expose: l, emit: a } = t;
      tt(
        !(typeof e.rowKey == "function" && e.rowKey.length > 1),
        "Table",
        "`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected."
      ),
        Li(w(() => e.contextSlots)),
        Ai({
          onResizeColumn: (V, ie) => {
            a("resizeColumn", V, ie);
          },
        });
      const r = Ua(),
        i = w(() => {
          const V = new Set(Object.keys(r.value).filter((ie) => r.value[ie]));
          return e.columns.filter(
            (ie) => !ie.responsive || ie.responsive.some((q) => V.has(q))
          );
        }),
        {
          size: c,
          renderEmpty: f,
          direction: u,
          prefixCls: d,
          configProvider: h,
        } = ut("table", e),
        [x, b] = Xc(d),
        p = w(() => {
          var V;
          return (
            e.transformCellText ||
            ((V = h.transformCellText) === null || V === void 0
              ? void 0
              : V.value)
          );
        }),
        [s] = ha("Table", ga.Table, He(e, "locale")),
        v = w(() => e.dataSource || Gc),
        k = w(() => h.getPrefixCls("dropdown", e.dropdownPrefixCls)),
        m = w(() => e.childrenColumnName || "children"),
        E = w(() =>
          v.value.some((V) => (V == null ? void 0 : V[m.value]))
            ? "nest"
            : e.expandedRowRender
            ? "row"
            : null
        ),
        K = ht({ body: null }),
        F = (V) => {
          C(K, V);
        },
        S = w(() =>
          typeof e.rowKey == "function"
            ? e.rowKey
            : (V) => (V == null ? void 0 : V[e.rowKey])
        ),
        [_] = Ts(v, m, S),
        g = {},
        O = function (V, ie) {
          let q =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          const { pagination: re, scroll: ce, onChange: we } = e,
            se = C(C({}, g), V);
          q &&
            (g.resetPagination(),
            se.pagination.current && (se.pagination.current = 1),
            re && re.onChange && re.onChange(1, se.pagination.pageSize)),
            ce &&
              ce.scrollToFirstRowOnChange !== !1 &&
              K.body &&
              $r(0, { getContainer: () => K.body }),
            we == null ||
              we(se.pagination, se.filters, se.sorter, {
                currentDataSource: Jo(
                  An(v.value, se.sorterStates, m.value),
                  se.filterStates
                ),
                action: ie,
              });
        },
        R = (V, ie) => {
          O({ sorter: V, sorterStates: ie }, "sort", !1);
        },
        [A, L, ne, ae] = Bs({
          prefixCls: d,
          mergedColumns: i,
          onSorterChange: R,
          sortDirections: w(() => e.sortDirections || ["ascend", "descend"]),
          tableLocale: s,
          showSorterTooltip: He(e, "showSorterTooltip"),
        }),
        ue = w(() => An(v.value, L.value, m.value)),
        be = (V, ie) => {
          O({ filters: V, filterStates: ie }, "filter", !0);
        },
        [X, Y, j] = fc({
          prefixCls: d,
          locale: s,
          dropdownPrefixCls: k,
          mergedColumns: i,
          onFilterChange: be,
          getPopupContainer: He(e, "getPopupContainer"),
        }),
        Z = w(() => Jo(ue.value, Y.value)),
        [N] = mc(He(e, "contextSlots")),
        z = w(() => {
          const V = {},
            ie = j.value;
          return (
            Object.keys(ie).forEach((q) => {
              ie[q] !== null && (V[q] = ie[q]);
            }),
            C(C({}, ne.value), { filters: V })
          );
        }),
        [M] = pc(z),
        H = (V, ie) => {
          O(
            {
              pagination: C(C({}, g.pagination), { current: V, pageSize: ie }),
            },
            "paginate"
          );
        },
        [J, Q] = _s(
          w(() => Z.value.length),
          He(e, "pagination"),
          H
        );
      Le(() => {
        (g.sorter = ae.value),
          (g.sorterStates = L.value),
          (g.filters = j.value),
          (g.filterStates = Y.value),
          (g.pagination = e.pagination === !1 ? {} : Ps(J.value, e.pagination)),
          (g.resetPagination = Q);
      });
      const _e = w(() => {
        if (e.pagination === !1 || !J.value.pageSize) return Z.value;
        const { current: V = 1, total: ie, pageSize: q = Dn } = J.value;
        return (
          tt(V > 0, "Table", "`current` should be positive number."),
          Z.value.length < ie
            ? Z.value.length > q
              ? Z.value.slice((V - 1) * q, V * q)
              : Z.value
            : Z.value.slice((V - 1) * q, V * q)
        );
      });
      Le(
        () => {
          dt(() => {
            const { total: V, pageSize: ie = Dn } = J.value;
            Z.value.length < V &&
              Z.value.length > ie &&
              tt(
                !1,
                "Table",
                "`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode."
              );
          });
        },
        { flush: "post" }
      );
      const Oe = w(() =>
          e.showExpandColumn === !1
            ? -1
            : E.value === "nest" && e.expandIconColumnIndex === void 0
            ? e.rowSelection
              ? 1
              : 0
            : e.expandIconColumnIndex > 0 && e.rowSelection
            ? e.expandIconColumnIndex - 1
            : e.expandIconColumnIndex
        ),
        Pe = me();
      Ae(
        () => e.rowSelection,
        () => {
          Pe.value = e.rowSelection ? C({}, e.rowSelection) : e.rowSelection;
        },
        { deep: !0, immediate: !0 }
      );
      const [Te, De] = Rs(Pe, {
          prefixCls: d,
          data: Z,
          pageData: _e,
          getRowKey: S,
          getRecordByKey: _,
          expandType: E,
          childrenColumnName: m,
          locale: s,
          getPopupContainer: w(() => e.getPopupContainer),
        }),
        Me = (V, ie, q) => {
          let re;
          const { rowClassName: ce } = e;
          return (
            typeof ce == "function" ? (re = ye(ce(V, ie, q))) : (re = ye(ce)),
            ye(
              { [`${d.value}-row-selected`]: De.value.has(S.value(V, ie)) },
              re
            )
          );
        };
      l({ selectedKeySet: De });
      const Re = w(() => (typeof e.indentSize == "number" ? e.indentSize : 15)),
        Ie = (V) => M(Te(X(A(N(V)))));
      return () => {
        var V;
        const {
          expandIcon: ie = n.expandIcon || vc(s.value),
          pagination: q,
          loading: re,
          bordered: ce,
        } = e;
        let we, se;
        if (q !== !1 && !((V = J.value) === null || V === void 0) && V.total) {
          let $;
          J.value.size
            ? ($ = J.value.size)
            : ($ =
                c.value === "small" || c.value === "middle" ? "small" : void 0);
          const I = (Se) =>
              y(
                Ya,
                U(
                  U({}, J.value),
                  {},
                  {
                    class: [
                      `${d.value}-pagination ${d.value}-pagination-${Se}`,
                      J.value.class,
                    ],
                    size: $,
                  }
                ),
                null
              ),
            ee = u.value === "rtl" ? "left" : "right",
            { position: fe } = J.value;
          if (fe !== null && Array.isArray(fe)) {
            const Se = fe.find((B) => B.includes("top")),
              T = fe.find((B) => B.includes("bottom")),
              D = fe.every((B) => `${B}` == "none");
            !Se && !T && !D && (se = I(ee)),
              Se && (we = I(Se.toLowerCase().replace("top", ""))),
              T && (se = I(T.toLowerCase().replace("bottom", "")));
          } else se = I(ee);
        }
        let pe;
        typeof re == "boolean"
          ? (pe = { spinning: re })
          : typeof re == "object" && (pe = C({ spinning: !0 }, re));
        const ke = ye(
            `${d.value}-wrapper`,
            { [`${d.value}-wrapper-rtl`]: u.value === "rtl" },
            o.class,
            b.value
          ),
          P = Dt(e, ["columns"]);
        return x(
          y("div", { class: ke, style: o.style }, [
            y(il, U({ spinning: !1 }, pe), {
              default: () => [
                we,
                y(
                  Os,
                  U(
                    U(U({}, o), P),
                    {},
                    {
                      expandedRowKeys: e.expandedRowKeys,
                      defaultExpandedRowKeys: e.defaultExpandedRowKeys,
                      expandIconColumnIndex: Oe.value,
                      indentSize: Re.value,
                      expandIcon: ie,
                      columns: i.value,
                      direction: u.value,
                      prefixCls: d.value,
                      class: ye({
                        [`${d.value}-middle`]: c.value === "middle",
                        [`${d.value}-small`]: c.value === "small",
                        [`${d.value}-bordered`]: ce,
                        [`${d.value}-empty`]: v.value.length === 0,
                      }),
                      data: _e.value,
                      rowKey: S.value,
                      rowClassName: Me,
                      internalHooks: Rn,
                      internalRefs: K,
                      onUpdateInternalRefs: F,
                      transformColumns: Ie,
                      transformCellText: p.value,
                    }
                  ),
                  C(C({}, n), {
                    emptyText: () => {
                      var $, I;
                      return (
                        (($ = n.emptyText) === null || $ === void 0
                          ? void 0
                          : $.call(n)) ||
                        ((I = e.locale) === null || I === void 0
                          ? void 0
                          : I.emptyText) ||
                        f("Table")
                      );
                    },
                  })
                ),
                se,
              ],
            }),
          ])
        );
      };
    },
  }),
  Yc = Ce({
    name: "ATable",
    inheritAttrs: !1,
    props: Ot(ql(), { rowKey: "key" }),
    slots: Object,
    setup(e, t) {
      let { attrs: o, slots: n, expose: l } = t;
      const a = me();
      return (
        l({ table: a }),
        () => {
          var r;
          const i =
            e.columns ||
            Hl((r = n.default) === null || r === void 0 ? void 0 : r.call(n));
          return y(
            Uc,
            U(
              U(U({ ref: a }, o), e),
              {},
              {
                columns: i || [],
                expandedRowRender: n.expandedRowRender,
                contextSlots: C({}, n),
              }
            ),
            n
          );
        }
      );
    },
  }),
  Cn = Yc,
  Sn = Ce({
    name: "ATableColumn",
    slots: Object,
    render() {
      return null;
    },
  }),
  wn = Ce({
    name: "ATableColumnGroup",
    slots: Object,
    __ANT_TABLE_COLUMN_GROUP: !0,
    render() {
      return null;
    },
  }),
  Mn = ms,
  jn = ys,
  $n = C(bs, { Cell: jn, Row: Mn, name: "ATableSummary" }),
  qc = C(Cn, {
    SELECTION_ALL: Nn,
    SELECTION_INVERT: Bn,
    SELECTION_NONE: Fn,
    SELECTION_COLUMN: st,
    EXPAND_COLUMN: mt,
    Column: Sn,
    ColumnGroup: wn,
    Summary: $n,
    install: (e) => (
      e.component($n.name, $n),
      e.component(jn.name, jn),
      e.component(Mn.name, Mn),
      e.component(Cn.name, Cn),
      e.component(Sn.name, Sn),
      e.component(wn.name, wn),
      e
    ),
  }),
  Jc = { class: "scientific-research__research-project" },
  Zc = { key: 0, class: "scientific-research__research-project__banner" },
  Qc = ["src", "alt"],
  ed = { class: "scientific-research__research-project__content py-11" },
  td = { class: "container" },
  nd = { class: "section-title uppercase lg:pt-9" },
  od = { class: "scientific-research__research-project__list-teacher" },
  ld = {
    class: "w-full flex flex-wrap items-center gap-8 xxl:gap-16 lg:h-[15.8rem]",
  },
  ad = {
    class: "thumbnail mx-auto w-3/5 lg:h-full lg:w-auto relative mb-11 lg:mb-0",
  },
  rd = {
    key: 1,
    class: "no-image w-full h-full flex justify-center items-center",
  },
  id = {
    class:
      "content w-full h-full lg:flex-1 flex flex-wrap justify-between items-center lg:gap-6 xxl:gap-12",
  },
  sd = { class: "flex-1" },
  cd = { class: "teacher-name w-full" },
  dd = { class: "font-unbounded" },
  ud = { class: "description" },
  fd = { class: "w-full lg:w-auto flex justify-center" },
  pd = { class: "uppercase" },
  vd = { class: "list-project w-full" },
  md = { key: 0, class: "flex justify-center mt-14" },
  hd = { class: "hover:underline underline-offset-2" },
  gd = Ce({
    __name: "FacultyResearchProject",
    props: {
      type: {
        type: String,
        default: uo.FACULTY_SCIENTIFIC_RESEARCH_LECTURER_RESEARCH_WORK,
      },
      bannerType: { type: String, default: ya.FACULTY_SCIENTIFIC_RESEARCH },
    },
    async setup(e) {
      let t, o;
      const n = e;
      ba({
        link: [
          {
            rel: "preload",
            href: "/assets/images/bg/event-bg.webp",
            as: "image",
          },
        ],
      });
      const { informationManagementData: l } = xa(),
        { getPageSectionByType: a, getPageSectionItemCursorPaginated: r } =
          Oa(),
        { findPageInfoByName: i } = Ea(),
        { locale: c } = Ca(),
        f = Sa(`${n.type}ResearchProject`, () => null),
        u = me(null),
        d = me([]),
        h = me([]),
        x = w(
          () => n.type === uo.FACULTY_SCIENTIFIC_RESEARCH_STUDENT_RESEARCH_WORK
        ),
        {
          listPageSectionItem: b,
          loadingRef: p,
          pageSectionItemPagination: s,
          cursorVariables: v,
        } = r({ pageType: n.type });
      ([t, o] = La(async () =>
        wa(async () => {
          var S;
          if (Wt.value || !f.value) {
            const _ = await i(n.bannerType);
            f.value = _;
            const g = await a(n.type);
            g != null && g.length && (u.value = g == null ? void 0 : g[0]),
              $a(
                (S = u == null ? void 0 : u.value) == null ? void 0 : S.metadata
              );
          }
        }, "$DG3XJ1c5TP")
      )),
        await t,
        o();
      const k = me(null),
        m = w(() => b.value.map((S, _) => _)),
        E = w(() => {
          var _;
          const S =
            (_ = u == null ? void 0 : u.value) == null
              ? void 0
              : _.tableSectionHeader;
          return [
            {
              title: Fe(S, "name"),
              key: "name",
              dataIndex: c.value === "en" ? "name_en" : "name",
              width: 200,
              align: "left",
              class: "name",
            },
            {
              title: Fe(S, "yearOfPub"),
              key: "yearOfPub",
              dataIndex: c.value === "en" ? "yearOfPub_en" : "yearOfPub",
              width: 80,
              align: "center",
              class: "year-of-pub",
            },
            {
              title: Fe(S, "magazineName"),
              key: "magazineName",
              dataIndex: c.value === "en" ? "magazineName_en" : "magazineName",
              width: 80,
              align: "center",
              class: "magazine-name",
            },
            {
              title: Fe(S, "levelTopic"),
              key: "levelTopic",
              dataIndex: c.value === "en" ? "levelTopic_en" : "levelTopic",
              width: 80,
              align: "center",
              class: "level-topic",
            },
          ];
        }),
        K = (S) => {
          k.value = S !== k.value ? S : null;
        },
        F = () => {
          var S, _;
          (S = s == null ? void 0 : s.value) != null &&
            S.hasNextPage &&
            (v.value.pagination.after =
              (_ = s == null ? void 0 : s.value) == null
                ? void 0
                : _.endCursor);
        };
      return (S, _) => {
        const g = ra,
          O = sl,
          R = ia,
          A = sa,
          L = ca,
          ne = qc,
          ae = ka,
          ue = yr,
          be = br,
          X = il;
        return an(
          S.$slots,
          "default",
          {},
          () => {
            var Y, j, Z, N;
            return [
              y(_a),
              Ne("div", Jc, [
                (j = (Y = de(f)) == null ? void 0 : Y.picturePageInfo) !=
                  null && j.url
                  ? (Ge(),
                    _t("div", Zc, [
                      Ne(
                        "img",
                        {
                          class: "w-full h-full object-cover",
                          src:
                            (Z = (
                              "getFieldWithLocale" in S
                                ? S.getFieldWithLocale
                                : de(Fe)
                            )(de(f), "picturePageInfo")) == null
                              ? void 0
                              : Z.url,
                          alt:
                            (N = (
                              "getFieldWithLocale" in S
                                ? S.getFieldWithLocale
                                : de(Fe)
                            )(de(f), "picturePageInfo")) == null
                              ? void 0
                              : N.alt,
                        },
                        null,
                        8,
                        Qc
                      ),
                    ]))
                  : po("", !0),
                Ne("div", ed, [
                  Ne("div", td, [
                    Ne(
                      "h1",
                      nd,
                      bt(
                        de(x)
                          ? S.$t(
                              "scientific_research.faculty_research_projects_trainee"
                            )
                          : S.$t(
                              "scientific_research.faculty_research_projects"
                            )
                      ),
                      1
                    ),
                    de(b).length
                      ? (Ge(),
                        _t(
                          at,
                          { key: 0 },
                          [
                            Ne("div", od, [
                              y(
                                be,
                                {
                                  "active-key": (
                                    "isServer" in S ? S.isServer : de(Wt)
                                  )
                                    ? de(m)
                                    : de(k),
                                  accordion: !("isServer" in S
                                    ? S.isServer
                                    : de(Wt)),
                                  bordered: !0,
                                  collapsible: "disabled",
                                },
                                {
                                  default: Ze(() => [
                                    (Ge(!0),
                                    _t(
                                      at,
                                      null,
                                      Aa(
                                        de(b),
                                        (z, M) => (
                                          Ge(),
                                          Tt(
                                            ue,
                                            {
                                              key: M,
                                              class:
                                                "scientific-research__research-project__list-teacher__item p-7 xxl:p-14 mt-8",
                                              "show-arrow": !1,
                                              "force-render": !0,
                                            },
                                            {
                                              header: Ze(() => {
                                                var H, J, Q, _e, Oe, Pe, Te;
                                                return [
                                                  Ne("div", ld, [
                                                    Ne("div", ad, [
                                                      (H = (
                                                        "getFieldWithLocale" in
                                                          S
                                                          ? S.getFieldWithLocale
                                                          : de(Fe)
                                                      )(
                                                        z,
                                                        "picturePageSectionItem"
                                                      )) != null && H.url
                                                        ? (Ge(),
                                                          Tt(
                                                            g,
                                                            {
                                                              key: 0,
                                                              class:
                                                                "w-full h-full object-cover relative z-20",
                                                              src:
                                                                (J = (
                                                                  "getFieldWithLocale" in
                                                                    S
                                                                    ? S.getFieldWithLocale
                                                                    : de(Fe)
                                                                )(
                                                                  z,
                                                                  "picturePageSectionItem"
                                                                )) == null
                                                                  ? void 0
                                                                  : J.url,
                                                              alt:
                                                                (Q = (
                                                                  "getFieldWithLocale" in
                                                                    S
                                                                    ? S.getFieldWithLocale
                                                                    : de(Fe)
                                                                )(
                                                                  z,
                                                                  "picturePageSectionItem"
                                                                )) == null
                                                                  ? void 0
                                                                  : Q.alt,
                                                              sizes:
                                                                "sm:30vw md:25vw",
                                                            },
                                                            null,
                                                            8,
                                                            ["src", "alt"]
                                                          ))
                                                        : (Ge(),
                                                          _t("div", rd, [
                                                            y(
                                                              g,
                                                              {
                                                                class:
                                                                  "w-3/4 opacity-50",
                                                                src:
                                                                  (Oe = (
                                                                    "getFieldWithLocale" in
                                                                      S
                                                                      ? S.getFieldWithLocale
                                                                      : de(Fe)
                                                                  )(
                                                                    (_e =
                                                                      de(l)) ==
                                                                      null
                                                                      ? void 0
                                                                      : _e.informationManagement,
                                                                    "pictureLogoHeader"
                                                                  )) == null
                                                                    ? void 0
                                                                    : Oe.url,
                                                                alt:
                                                                  (Te = (
                                                                    "getFieldWithLocale" in
                                                                      S
                                                                      ? S.getFieldWithLocale
                                                                      : de(Fe)
                                                                  )(
                                                                    (Pe =
                                                                      de(l)) ==
                                                                      null
                                                                      ? void 0
                                                                      : Pe.informationManagement,
                                                                    "pictureLogoHeader"
                                                                  )) == null
                                                                    ? void 0
                                                                    : Te.alt,
                                                                sizes:
                                                                  "sm:30vw md:50vw",
                                                              },
                                                              null,
                                                              8,
                                                              ["src", "alt"]
                                                            ),
                                                          ])),
                                                    ]),
                                                    Ne("div", id, [
                                                      Ne("div", sd, [
                                                        Ne("div", cd, [
                                                          y(
                                                            R,
                                                            null,
                                                            {
                                                              fallback: Ze(
                                                                () => [
                                                                  Ne(
                                                                    "h2",
                                                                    dd,
                                                                    bt(
                                                                      ("getFieldWithLocale" in
                                                                        S
                                                                        ? S.getFieldWithLocale
                                                                        : de(
                                                                            Fe
                                                                          ))(
                                                                        z,
                                                                        "name"
                                                                      )
                                                                    ),
                                                                    1
                                                                  ),
                                                                ]
                                                              ),
                                                              default: Ze(
                                                                () => [
                                                                  y(
                                                                    O,
                                                                    {
                                                                      title:
                                                                        ("isTruncate" in
                                                                          S
                                                                          ? S.isTruncate
                                                                          : de(
                                                                              fo
                                                                            ))(
                                                                          de(h)[
                                                                            M
                                                                          ]
                                                                        )
                                                                          ? ("getFieldWithLocale" in
                                                                              S
                                                                              ? S.getFieldWithLocale
                                                                              : de(
                                                                                  Fe
                                                                                ))(
                                                                              z,
                                                                              "name"
                                                                            )
                                                                          : "",
                                                                    },
                                                                    {
                                                                      default:
                                                                        Ze(
                                                                          () => [
                                                                            Ne(
                                                                              "h2",
                                                                              {
                                                                                ref_for:
                                                                                  !0,
                                                                                ref: (
                                                                                  De
                                                                                ) => {
                                                                                  de(
                                                                                    h
                                                                                  )[
                                                                                    M
                                                                                  ] =
                                                                                    De;
                                                                                },
                                                                                class:
                                                                                  "font-unbounded",
                                                                              },
                                                                              bt(
                                                                                ("getFieldWithLocale" in
                                                                                  S
                                                                                  ? S.getFieldWithLocale
                                                                                  : de(
                                                                                      Fe
                                                                                    ))(
                                                                                  z,
                                                                                  "name"
                                                                                )
                                                                              ),
                                                                              513
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1032,
                                                                    ["title"]
                                                                  ),
                                                                ]
                                                              ),
                                                              _: 2,
                                                            },
                                                            1024
                                                          ),
                                                        ]),
                                                        Ne("div", ud, [
                                                          y(
                                                            A,
                                                            {
                                                              content:
                                                                ("getFieldWithLocale" in
                                                                  S
                                                                  ? S.getFieldWithLocale
                                                                  : de(Fe))(
                                                                  z,
                                                                  "description"
                                                                ),
                                                            },
                                                            null,
                                                            8,
                                                            ["content"]
                                                          ),
                                                        ]),
                                                      ]),
                                                      Ne("div", fd, [
                                                        y(
                                                          L,
                                                          {
                                                            class:
                                                              "show-list-project-btn",
                                                            type: "primary",
                                                            arrow: "",
                                                            onClick: (De) =>
                                                              K(M),
                                                          },
                                                          {
                                                            default: Ze(() => [
                                                              Ne(
                                                                "span",
                                                                pd,
                                                                bt(
                                                                  S.$t(
                                                                    "scientific_research.research_projects"
                                                                  )
                                                                ),
                                                                1
                                                              ),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["onClick"]
                                                        ),
                                                      ]),
                                                    ]),
                                                  ]),
                                                ];
                                              }),
                                              default: Ze(() => [
                                                Ne("div", vd, [
                                                  z != null && z.tableData
                                                    ? (Ge(),
                                                      Tt(
                                                        ne,
                                                        {
                                                          key: 0,
                                                          columns: de(E),
                                                          "data-source":
                                                            ("getFieldWithLocale" in
                                                              S
                                                              ? S.getFieldWithLocale
                                                              : de(Fe))(
                                                              z,
                                                              "tableData"
                                                            ),
                                                          pagination: !1,
                                                          scroll: { y: 600 },
                                                          class: vn({
                                                            server:
                                                              "isServer" in S
                                                                ? S.isServer
                                                                : de(Wt),
                                                          }),
                                                        },
                                                        {
                                                          bodyCell: Ze(
                                                            ({
                                                              column: H,
                                                              record: J,
                                                              index: Q,
                                                            }) => [
                                                              y(
                                                                R,
                                                                null,
                                                                {
                                                                  fallback: Ze(
                                                                    () => [
                                                                      Ne(
                                                                        "div",
                                                                        {
                                                                          class:
                                                                            vn(
                                                                              H.class
                                                                            ),
                                                                        },
                                                                        bt(
                                                                          ("getFieldWithLocale" in
                                                                            S
                                                                            ? S.getFieldWithLocale
                                                                            : de(
                                                                                Fe
                                                                              ))(
                                                                            J,
                                                                            H.key
                                                                          ) ||
                                                                            "--"
                                                                        ),
                                                                        3
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  default: Ze(
                                                                    () => {
                                                                      var _e,
                                                                        Oe,
                                                                        Pe,
                                                                        Te,
                                                                        De;
                                                                      return [
                                                                        y(
                                                                          O,
                                                                          {
                                                                            title:
                                                                              (Oe =
                                                                                (_e =
                                                                                  de(
                                                                                    d
                                                                                  )) ==
                                                                                null
                                                                                  ? void 0
                                                                                  : _e[
                                                                                      M
                                                                                    ]) !=
                                                                                null &&
                                                                              Oe[
                                                                                `${H.key}`
                                                                              ] &&
                                                                              ("isTruncate" in
                                                                                S
                                                                                ? S.isTruncate
                                                                                : de(
                                                                                    fo
                                                                                  ))(
                                                                                (De =
                                                                                  (Te =
                                                                                    (Pe =
                                                                                      de(
                                                                                        d
                                                                                      )) ==
                                                                                    null
                                                                                      ? void 0
                                                                                      : Pe[
                                                                                          M
                                                                                        ]) ==
                                                                                  null
                                                                                    ? void 0
                                                                                    : Te[
                                                                                        `${H.key}`
                                                                                      ]) ==
                                                                                  null
                                                                                  ? void 0
                                                                                  : De[
                                                                                      Q
                                                                                    ]
                                                                              )
                                                                                ? ("getFieldWithLocale" in
                                                                                    S
                                                                                    ? S.getFieldWithLocale
                                                                                    : de(
                                                                                        Fe
                                                                                      ))(
                                                                                    J,
                                                                                    H.key
                                                                                  )
                                                                                : "",
                                                                          },
                                                                          {
                                                                            default:
                                                                              Ze(
                                                                                () => [
                                                                                  Ne(
                                                                                    "div",
                                                                                    {
                                                                                      ref_for:
                                                                                        !0,
                                                                                      ref: (
                                                                                        Me
                                                                                      ) => {
                                                                                        var Re,
                                                                                          Ie;
                                                                                        ((Ie =
                                                                                          (Re =
                                                                                            de(
                                                                                              d
                                                                                            )) ==
                                                                                          null
                                                                                            ? void 0
                                                                                            : Re[
                                                                                                M
                                                                                              ]) !=
                                                                                          null &&
                                                                                          Ie[
                                                                                            `${H.key}`
                                                                                          ]) ||
                                                                                          (de(
                                                                                            d
                                                                                          )[
                                                                                            M
                                                                                          ] =
                                                                                            {
                                                                                              ...de(
                                                                                                d
                                                                                              )[
                                                                                                M
                                                                                              ],
                                                                                              [`${H.key}`]:
                                                                                                [],
                                                                                            }),
                                                                                          (de(
                                                                                            d
                                                                                          )[
                                                                                            M
                                                                                          ][
                                                                                            `${H.key}`
                                                                                          ][
                                                                                            Q
                                                                                          ] =
                                                                                            Me);
                                                                                      },
                                                                                      class:
                                                                                        vn(
                                                                                          H.class
                                                                                        ),
                                                                                    },
                                                                                    bt(
                                                                                      ("getFieldWithLocale" in
                                                                                        S
                                                                                        ? S.getFieldWithLocale
                                                                                        : de(
                                                                                            Fe
                                                                                          ))(
                                                                                        J,
                                                                                        H.key
                                                                                      ) ||
                                                                                        "--"
                                                                                    ),
                                                                                    3
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1032,
                                                                          [
                                                                            "title",
                                                                          ]
                                                                        ),
                                                                      ];
                                                                    }
                                                                  ),
                                                                  _: 2,
                                                                },
                                                                1024
                                                              ),
                                                            ]
                                                          ),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        [
                                                          "columns",
                                                          "data-source",
                                                          "class",
                                                        ]
                                                      ))
                                                    : (Ge(),
                                                      Tt(ae, {
                                                        key: 1,
                                                        class: "py-12",
                                                      })),
                                                ]),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["active-key", "accordion"]
                              ),
                            ]),
                            de(s).hasNextPage
                              ? (Ge(),
                                _t("div", md, [
                                  de(p)
                                    ? (Ge(), Tt(X, { key: 1, size: "large" }))
                                    : (Ge(),
                                      _t(
                                        "div",
                                        {
                                          key: 0,
                                          class:
                                            "read-more w-fit flex items-center gap-3 cursor-pointer",
                                          onClick: F,
                                        },
                                        [
                                          Ne(
                                            "span",
                                            hd,
                                            bt(S.$t("common.read_more")),
                                            1
                                          ),
                                          y(de(Pa), { class: "rotate-90" }),
                                        ]
                                      )),
                                ]))
                              : po("", !0),
                          ],
                          64
                        ))
                      : (Ge(), Tt(ae, { key: 1, class: "py-40" })),
                  ]),
                ]),
              ]),
            ];
          },
          !0
        );
      };
    },
  });
const iu = Ka(gd, [["__scopeId", "data-v-7fc941d3"]]);
export { iu as default };
