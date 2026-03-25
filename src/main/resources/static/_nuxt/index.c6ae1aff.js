import {
  bO as _e,
  P as R,
  b as T,
  c as $e,
  bP as Kt,
  bc as Pt,
  a as b,
  ak as rt,
  o as ze,
  ao as st,
  g as Tt,
  bQ as Ve,
  bo as ut,
  bs as kt,
  aj as Et,
  f as _t,
  m as We,
  bR as Ge,
  j as Xe,
  r as At,
  bw as Bt,
  l as Dt,
} from "./entry.8aa394d7.js";
import { T as ct } from "./Trigger.dd535606.js";
import { c as ye } from "./motion.d46d0bbf.js";
import {
  j as Z,
  a as F,
  b as W,
  k as m,
  z as g,
  F as xe,
  i as re,
  p as fe,
  G as Ye,
  t as Ue,
  s as N,
  o as we,
  g as dt,
  K as Rt,
  a7 as zt,
  ak as Ht,
  y as Ft,
  w as Ae,
  u as Ce,
  M as Nt,
} from "./swiper-vue.d5cda4d1.js";
import { d as Me } from "./devWarning.0cb68424.js";
import { l as mt, b as jt, c as Lt } from "./_baseIsEqual.42871e3f.js";
import { c as Vt, a as Wt } from "./_arrayIncludesWith.49dc741e.js";
import { O as be, i as qe } from "./index.9e7cd0be.js";
import { _ as Gt } from "./index.a66880e0.js";
import { K as Xt } from "./pickAttrs.315d7ebe.js";
import { w as Be } from "./isVisible.48fa23e0.js";
import { g as Yt, c as Ut } from "./collapseMotion.3a38b156.js";
import { i as qt } from "./zoom.4c1ddb0e.js";
function Zt() {}
var Qt = 1 / 0,
  Jt =
    _e && 1 / mt(new _e([, -0]))[1] == Qt
      ? function (e) {
          return new _e(e);
        }
      : Zt;
const en = Jt;
var tn = 200;
function nn(e, n, t) {
  var o = -1,
    l = Vt,
    r = e.length,
    d = !0,
    a = [],
    s = a;
  if (t) (d = !1), (l = Wt);
  else if (r >= tn) {
    var f = n ? null : en(e);
    if (f) return mt(f);
    (d = !1), (l = Lt), (s = new jt());
  } else s = n ? [] : a;
  e: for (; ++o < r; ) {
    var u = e[o],
      i = n ? n(u) : u;
    if (((u = t || u !== 0 ? u : 0), d && i === i)) {
      for (var $ = s.length; $--; ) if (s[$] === i) continue e;
      n && s.push(i), a.push(u);
    } else l(s, i, t) || (s !== a && s.push(i), a.push(u));
  }
  return a;
}
function De(e) {
  return e && e.length ? nn(e) : [];
}
const de = { adjustX: 1, adjustY: 1 },
  me = [0, 0],
  on = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: de,
      offset: [0, -4],
      targetOffset: me,
    },
    topCenter: {
      points: ["bc", "tc"],
      overflow: de,
      offset: [0, -4],
      targetOffset: me,
    },
    topRight: {
      points: ["br", "tr"],
      overflow: de,
      offset: [0, -4],
      targetOffset: me,
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: de,
      offset: [0, 4],
      targetOffset: me,
    },
    bottomCenter: {
      points: ["tc", "bc"],
      overflow: de,
      offset: [0, 4],
      targetOffset: me,
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: de,
      offset: [0, 4],
      targetOffset: me,
    },
  },
  ln = on;
var an =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var t = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        n.indexOf(o) < 0 &&
        (t[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
        n.indexOf(o[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[l]) &&
          (t[o[l]] = e[o[l]]);
    return t;
  };
const Qn = Z({
  compatConfig: { MODE: 3 },
  props: {
    minOverlayWidthMatchTrigger: { type: Boolean, default: void 0 },
    arrow: { type: Boolean, default: !1 },
    prefixCls: R.string.def("rc-dropdown"),
    transitionName: String,
    overlayClassName: R.string.def(""),
    openClassName: String,
    animation: R.any,
    align: R.object,
    overlayStyle: { type: Object, default: void 0 },
    placement: R.string.def("bottomLeft"),
    overlay: R.any,
    trigger: R.oneOfType([R.string, R.arrayOf(R.string)]).def("hover"),
    alignPoint: { type: Boolean, default: void 0 },
    showAction: R.array,
    hideAction: R.array,
    getPopupContainer: Function,
    visible: { type: Boolean, default: void 0 },
    defaultVisible: { type: Boolean, default: !1 },
    mouseEnterDelay: R.number.def(0.15),
    mouseLeaveDelay: R.number.def(0.1),
  },
  emits: ["visibleChange", "overlayClick"],
  setup(e, n) {
    let { slots: t, emit: o, expose: l } = n;
    const r = F(!!e.visible);
    W(
      () => e.visible,
      (v) => {
        v !== void 0 && (r.value = v);
      }
    );
    const d = F();
    l({ triggerRef: d });
    const a = (v) => {
        e.visible === void 0 && (r.value = !1), o("overlayClick", v);
      },
      s = (v) => {
        e.visible === void 0 && (r.value = v), o("visibleChange", v);
      },
      f = () => {
        var v;
        const p = (v = t.overlay) === null || v === void 0 ? void 0 : v.call(t),
          C = { prefixCls: `${e.prefixCls}-menu`, onClick: a };
        return g(xe, { key: Kt }, [
          e.arrow && g("div", { class: `${e.prefixCls}-arrow` }, null),
          ye(p, C, !1),
        ]);
      },
      u = m(() => {
        const { minOverlayWidthMatchTrigger: v = !e.alignPoint } = e;
        return v;
      }),
      i = () => {
        var v;
        const p = (v = t.default) === null || v === void 0 ? void 0 : v.call(t);
        return r.value && p
          ? ye(p[0], { class: e.openClassName || `${e.prefixCls}-open` }, !1)
          : p;
      },
      $ = m(() =>
        !e.hideAction && e.trigger.indexOf("contextmenu") !== -1
          ? ["click"]
          : e.hideAction
      );
    return () => {
      const {
          prefixCls: v,
          arrow: p,
          showAction: C,
          overlayStyle: x,
          trigger: K,
          placement: M,
          align: j,
          getPopupContainer: G,
          transitionName: h,
          animation: O,
          overlayClassName: z,
        } = e,
        B = an(e, [
          "prefixCls",
          "arrow",
          "showAction",
          "overlayStyle",
          "trigger",
          "placement",
          "align",
          "getPopupContainer",
          "transitionName",
          "animation",
          "overlayClassName",
        ]);
      return g(
        ct,
        T(
          T({}, B),
          {},
          {
            prefixCls: v,
            ref: d,
            popupClassName: $e(z, { [`${v}-show-arrow`]: p }),
            popupStyle: x,
            builtinPlacements: ln,
            action: K,
            showAction: C,
            hideAction: $.value || [],
            popupPlacement: M,
            popupAlign: j,
            popupTransitionName: h,
            popupAnimation: O,
            popupVisible: r.value,
            stretch: u.value ? "minWidth" : "",
            onPopupVisibleChange: s,
            getPopupContainer: G,
          }
        ),
        { popup: f, default: i }
      );
    };
  },
});
var rn = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z",
        },
      },
    ],
  },
  name: "ellipsis",
  theme: "outlined",
};
const sn = rn;
function Ze(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {},
      o = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" &&
      (o = o.concat(
        Object.getOwnPropertySymbols(t).filter(function (l) {
          return Object.getOwnPropertyDescriptor(t, l).enumerable;
        })
      )),
      o.forEach(function (l) {
        un(e, l, t[l]);
      });
  }
  return e;
}
function un(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = t),
    e
  );
}
var He = function (n, t) {
  var o = Ze({}, n, t.attrs);
  return g(Pt, Ze({}, o, { icon: sn }), null);
};
He.displayName = "EllipsisOutlined";
He.inheritAttrs = !1;
const cn = He,
  vt = Symbol("OverrideContextKey"),
  ft = () => re(vt, void 0),
  Jn = (e) => {
    var n, t, o;
    const {
      prefixCls: l,
      mode: r,
      selectable: d,
      validator: a,
      onClick: s,
      expandIcon: f,
    } = ft() || {};
    fe(vt, {
      prefixCls: m(() => {
        var u, i;
        return (i =
          (u = e.prefixCls) === null || u === void 0 ? void 0 : u.value) !==
          null && i !== void 0
          ? i
          : l == null
          ? void 0
          : l.value;
      }),
      mode: m(() => {
        var u, i;
        return (i =
          (u = e.mode) === null || u === void 0 ? void 0 : u.value) !== null &&
          i !== void 0
          ? i
          : r == null
          ? void 0
          : r.value;
      }),
      selectable: m(() => {
        var u, i;
        return (i =
          (u = e.selectable) === null || u === void 0 ? void 0 : u.value) !==
          null && i !== void 0
          ? i
          : d == null
          ? void 0
          : d.value;
      }),
      validator: (n = e.validator) !== null && n !== void 0 ? n : a,
      onClick: (t = e.onClick) !== null && t !== void 0 ? t : s,
      expandIcon:
        (o = e.expandIcon) !== null && o !== void 0
          ? o
          : f == null
          ? void 0
          : f.value,
    });
  };
function dn(e, n, t, o) {
  let l = t ? t.call(o, e, n) : void 0;
  if (l !== void 0) return !!l;
  if (e === n) return !0;
  if (typeof e != "object" || !e || typeof n != "object" || !n) return !1;
  const r = Object.keys(e),
    d = Object.keys(n);
  if (r.length !== d.length) return !1;
  const a = Object.prototype.hasOwnProperty.bind(n);
  for (let s = 0; s < r.length; s++) {
    const f = r[s];
    if (!a(f)) return !1;
    const u = e[f],
      i = n[f];
    if (
      ((l = t ? t.call(o, u, i, f) : void 0),
      l === !1 || (l === void 0 && u !== i))
    )
      return !1;
  }
  return !0;
}
function ge(e, n) {
  return dn(Ye(e), Ye(n));
}
const pt = Symbol("menuContextKey"),
  gt = (e) => {
    fe(pt, e);
  },
  J = () => re(pt),
  bt = Symbol("ForceRenderKey"),
  mn = (e) => {
    fe(bt, e);
  },
  $t = () => re(bt, !1),
  yt = Symbol("menuFirstLevelContextKey"),
  ht = (e) => {
    fe(yt, e);
  },
  vn = () => re(yt, !0),
  Oe = Z({
    compatConfig: { MODE: 3 },
    name: "MenuContextProvider",
    inheritAttrs: !1,
    props: {
      mode: { type: String, default: void 0 },
      overflowDisabled: { type: Boolean, default: void 0 },
    },
    setup(e, n) {
      let { slots: t } = n;
      const o = J(),
        l = b({}, o);
      return (
        e.mode !== void 0 && (l.mode = Ue(e, "mode")),
        e.overflowDisabled !== void 0 &&
          (l.overflowDisabled = Ue(e, "overflowDisabled")),
        gt(l),
        () => {
          var r;
          return (r = t.default) === null || r === void 0 ? void 0 : r.call(t);
        }
      );
    },
  }),
  fn = gt,
  pn = Symbol("siderCollapsed"),
  Se = "$$__vc-menu-more__key",
  It = Symbol("KeyPathContext"),
  Fe = () =>
    re(It, {
      parentEventKeys: m(() => []),
      parentKeys: m(() => []),
      parentInfo: {},
    }),
  gn = (e, n, t) => {
    const { parentEventKeys: o, parentKeys: l } = Fe(),
      r = m(() => [...o.value, e]),
      d = m(() => [...l.value, n]);
    return fe(It, { parentEventKeys: r, parentKeys: d, parentInfo: t }), d;
  },
  Ct = Symbol("measure"),
  Qe = Z({
    compatConfig: { MODE: 3 },
    setup(e, n) {
      let { slots: t } = n;
      return (
        fe(Ct, !0),
        () => {
          var o;
          return (o = t.default) === null || o === void 0 ? void 0 : o.call(t);
        }
      );
    },
  }),
  Ne = () => re(Ct, !1),
  bn = gn;
function St(e) {
  const { mode: n, rtl: t, inlineIndent: o } = J();
  return m(() =>
    n.value !== "inline"
      ? null
      : t.value
      ? { paddingRight: `${e.value * o.value}px` }
      : { paddingLeft: `${e.value * o.value}px` }
  );
}
let $n = 0;
const yn = () => ({
    id: String,
    role: String,
    disabled: Boolean,
    danger: Boolean,
    title: { type: [String, Boolean], default: void 0 },
    icon: R.any,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
    onKeydown: Function,
    onFocus: Function,
    originItemValue: ze(),
  }),
  he = Z({
    compatConfig: { MODE: 3 },
    name: "AMenuItem",
    inheritAttrs: !1,
    props: yn(),
    slots: Object,
    setup(e, n) {
      let { slots: t, emit: o, attrs: l } = n;
      const r = dt(),
        d = Ne(),
        a = typeof r.vnode.key == "symbol" ? String(r.vnode.key) : r.vnode.key;
      Me(
        typeof r.vnode.key != "symbol",
        "MenuItem",
        `MenuItem \`:key="${String(a)}"\` not support Symbol type`
      );
      const s = `menu_item_${++$n}_$$_${a}`,
        { parentEventKeys: f, parentKeys: u } = Fe(),
        {
          prefixCls: i,
          activeKeys: $,
          disabled: v,
          changeActiveKeys: p,
          rtl: C,
          inlineCollapsed: x,
          siderCollapsed: K,
          onItemClick: M,
          selectedKeys: j,
          registerMenuInfo: G,
          unRegisterMenuInfo: h,
        } = J(),
        O = vn(),
        z = N(!1),
        B = m(() => [...u.value, a]);
      G(s, {
        eventKey: s,
        key: a,
        parentEventKeys: f,
        parentKeys: u,
        isLeaf: !0,
      }),
        we(() => {
          h(s);
        }),
        W(
          $,
          () => {
            z.value = !!$.value.find((I) => I === a);
          },
          { immediate: !0 }
        );
      const P = m(() => v.value || e.disabled),
        Y = m(() => j.value.includes(a)),
        U = m(() => {
          const I = `${i.value}-item`;
          return {
            [`${I}`]: !0,
            [`${I}-danger`]: e.danger,
            [`${I}-active`]: z.value,
            [`${I}-selected`]: Y.value,
            [`${I}-disabled`]: P.value,
          };
        }),
        q = (I) => ({
          key: a,
          eventKey: s,
          keyPath: B.value,
          eventKeyPath: [...f.value, s],
          domEvent: I,
          item: b(b({}, e), l),
        }),
        se = (I) => {
          if (P.value) return;
          const _ = q(I);
          o("click", I), M(_);
        },
        ue = (I) => {
          P.value || (p(B.value), o("mouseenter", I));
        },
        ee = (I) => {
          P.value || (p([]), o("mouseleave", I));
        },
        ie = (I) => {
          if ((o("keydown", I), I.which === Xt.ENTER)) {
            const _ = q(I);
            o("click", I), M(_);
          }
        },
        ce = (I) => {
          p(B.value), o("focus", I);
        },
        V = (I, _) => {
          const L = g("span", { class: `${i.value}-title-content` }, [_]);
          return (!I || (st(_) && _.type === "span")) &&
            _ &&
            x.value &&
            O &&
            typeof _ == "string"
            ? g("div", { class: `${i.value}-inline-collapsed-noicon` }, [
                _.charAt(0),
              ])
            : L;
        },
        pe = St(m(() => B.value.length));
      return () => {
        var I, _, L, Q, te;
        if (d) return null;
        const c =
            (I = e.title) !== null && I !== void 0
              ? I
              : (_ = t.title) === null || _ === void 0
              ? void 0
              : _.call(t),
          y = rt((L = t.default) === null || L === void 0 ? void 0 : L.call(t)),
          w = y.length;
        let k = c;
        typeof c > "u" ? (k = O && w ? y : "") : c === !1 && (k = "");
        const A = { title: k };
        !K.value && !x.value && ((A.title = null), (A.open = !1));
        const H = {};
        e.role === "option" && (H["aria-selected"] = Y.value);
        const E =
          (Q = e.icon) !== null && Q !== void 0
            ? Q
            : (te = t.icon) === null || te === void 0
            ? void 0
            : te.call(t, e);
        return g(
          Gt,
          T(
            T({}, A),
            {},
            {
              placement: C.value ? "left" : "right",
              overlayClassName: `${i.value}-inline-collapsed-tooltip`,
            }
          ),
          {
            default: () => [
              g(
                be.Item,
                T(
                  T(
                    T({ component: "li" }, l),
                    {},
                    {
                      id: e.id,
                      style: b(b({}, l.style || {}), pe.value),
                      class: [
                        U.value,
                        {
                          [`${l.class}`]: !!l.class,
                          [`${i.value}-item-only-child`]: (E ? w + 1 : w) === 1,
                        },
                      ],
                      role: e.role || "menuitem",
                      tabindex: e.disabled ? null : -1,
                      "data-menu-id": a,
                      "aria-disabled": e.disabled,
                    },
                    H
                  ),
                  {},
                  {
                    onMouseenter: ue,
                    onMouseleave: ee,
                    onClick: se,
                    onKeydown: ie,
                    onFocus: ce,
                    title: typeof c == "string" ? c : void 0,
                  }
                ),
                {
                  default: () => [
                    ye(
                      typeof E == "function" ? E(e.originItemValue) : E,
                      { class: `${i.value}-item-icon` },
                      !1
                    ),
                    V(E, y),
                  ],
                }
              ),
            ],
          }
        );
      };
    },
  }),
  le = { adjustX: 1, adjustY: 1 },
  hn = {
    topLeft: { points: ["bl", "tl"], overflow: le, offset: [0, -7] },
    bottomLeft: { points: ["tl", "bl"], overflow: le, offset: [0, 7] },
    leftTop: { points: ["tr", "tl"], overflow: le, offset: [-4, 0] },
    rightTop: { points: ["tl", "tr"], overflow: le, offset: [4, 0] },
  },
  In = {
    topLeft: { points: ["bl", "tl"], overflow: le, offset: [0, -7] },
    bottomLeft: { points: ["tl", "bl"], overflow: le, offset: [0, 7] },
    rightTop: { points: ["tr", "tl"], overflow: le, offset: [-4, 0] },
    leftTop: { points: ["tl", "tr"], overflow: le, offset: [4, 0] },
  },
  Cn = {
    horizontal: "bottomLeft",
    vertical: "rightTop",
    "vertical-left": "rightTop",
    "vertical-right": "leftTop",
  },
  Je = Z({
    compatConfig: { MODE: 3 },
    name: "PopupTrigger",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      mode: String,
      visible: Boolean,
      popupClassName: String,
      popupOffset: Array,
      disabled: Boolean,
      onVisibleChange: Function,
    },
    slots: Object,
    emits: ["visibleChange"],
    setup(e, n) {
      let { slots: t, emit: o } = n;
      const l = N(!1),
        {
          getPopupContainer: r,
          rtl: d,
          subMenuOpenDelay: a,
          subMenuCloseDelay: s,
          builtinPlacements: f,
          triggerSubMenuAction: u,
          forceSubMenuRender: i,
          motion: $,
          defaultMotions: v,
          rootClassName: p,
        } = J(),
        C = $t(),
        x = m(() => (d.value ? b(b({}, In), f.value) : b(b({}, hn), f.value))),
        K = m(() => Cn[e.mode]),
        M = N();
      W(
        () => e.visible,
        (h) => {
          Be.cancel(M.value),
            (M.value = Be(() => {
              l.value = h;
            }));
        },
        { immediate: !0 }
      ),
        we(() => {
          Be.cancel(M.value);
        });
      const j = (h) => {
          o("visibleChange", h);
        },
        G = m(() => {
          var h, O;
          const z =
              $.value ||
              ((h = v.value) === null || h === void 0 ? void 0 : h[e.mode]) ||
              ((O = v.value) === null || O === void 0 ? void 0 : O.other),
            B = typeof z == "function" ? z() : z;
          return B ? Tt(B.name, { css: !0 }) : void 0;
        });
      return () => {
        const {
          prefixCls: h,
          popupClassName: O,
          mode: z,
          popupOffset: B,
          disabled: X,
        } = e;
        return g(
          ct,
          {
            prefixCls: h,
            popupClassName: $e(
              `${h}-popup`,
              { [`${h}-rtl`]: d.value },
              O,
              p.value
            ),
            stretch: z === "horizontal" ? "minWidth" : null,
            getPopupContainer: r.value,
            builtinPlacements: x.value,
            popupPlacement: K.value,
            popupVisible: l.value,
            popupAlign: B && { offset: B },
            action: X ? [] : [u.value],
            mouseEnterDelay: a.value,
            mouseLeaveDelay: s.value,
            onPopupVisibleChange: j,
            forceRender: C || i.value,
            popupAnimation: G.value,
          },
          { popup: t.popup, default: t.default }
        );
      };
    },
  }),
  xt = (e, n) => {
    let { slots: t, attrs: o } = n;
    var l;
    const { prefixCls: r, mode: d } = J();
    return g(
      "ul",
      T(
        T({}, o),
        {},
        {
          class: $e(
            r.value,
            `${r.value}-sub`,
            `${r.value}-${d.value === "inline" ? "inline" : "vertical"}`
          ),
          "data-menu-list": !0,
        }
      ),
      [(l = t.default) === null || l === void 0 ? void 0 : l.call(t)]
    );
  };
xt.displayName = "SubMenuList";
const wt = xt,
  Sn = Z({
    compatConfig: { MODE: 3 },
    name: "InlineSubMenuList",
    inheritAttrs: !1,
    props: { id: String, open: Boolean, keyPath: Array },
    setup(e, n) {
      let { slots: t } = n;
      const o = m(() => "inline"),
        { motion: l, mode: r, defaultMotions: d } = J(),
        a = m(() => r.value === o.value),
        s = F(!a.value),
        f = m(() => (a.value ? e.open : !1));
      W(
        r,
        () => {
          a.value && (s.value = !1);
        },
        { flush: "post" }
      );
      const u = m(() => {
        var i, $;
        const v =
            l.value ||
            ((i = d.value) === null || i === void 0 ? void 0 : i[o.value]) ||
            (($ = d.value) === null || $ === void 0 ? void 0 : $.other),
          p = typeof v == "function" ? v() : v;
        return b(b({}, p), { appear: e.keyPath.length <= 1 });
      });
      return () => {
        var i;
        return s.value
          ? null
          : g(
              Oe,
              { mode: o.value },
              {
                default: () => [
                  g(Rt, u.value, {
                    default: () => [
                      zt(
                        g(
                          wt,
                          { id: e.id },
                          {
                            default: () => [
                              (i = t.default) === null || i === void 0
                                ? void 0
                                : i.call(t),
                            ],
                          }
                        ),
                        [[Ht, f.value]]
                      ),
                    ],
                  }),
                ],
              }
            );
      };
    },
  });
let et = 0;
const xn = () => ({
    icon: R.any,
    title: R.any,
    disabled: Boolean,
    level: Number,
    popupClassName: String,
    popupOffset: Array,
    internalPopupClose: Boolean,
    eventKey: String,
    expandIcon: Function,
    theme: String,
    onMouseenter: Function,
    onMouseleave: Function,
    onTitleClick: Function,
    originItemValue: ze(),
  }),
  ve = Z({
    compatConfig: { MODE: 3 },
    name: "ASubMenu",
    inheritAttrs: !1,
    props: xn(),
    slots: Object,
    setup(e, n) {
      let { slots: t, attrs: o, emit: l } = n;
      var r, d;
      ht(!1);
      const a = Ne(),
        s = dt(),
        f = typeof s.vnode.key == "symbol" ? String(s.vnode.key) : s.vnode.key;
      Me(
        typeof s.vnode.key != "symbol",
        "SubMenu",
        `SubMenu \`:key="${String(f)}"\` not support Symbol type`
      );
      const u = Ve(f) ? f : `sub_menu_${++et}_$$_not_set_key`,
        i =
          (r = e.eventKey) !== null && r !== void 0
            ? r
            : Ve(f)
            ? `sub_menu_${++et}_$$_${f}`
            : u,
        { parentEventKeys: $, parentInfo: v, parentKeys: p } = Fe(),
        C = m(() => [...p.value, u]),
        x = N([]),
        K = {
          eventKey: i,
          key: u,
          parentEventKeys: $,
          childrenEventKeys: x,
          parentKeys: p,
        };
      (d = v.childrenEventKeys) === null || d === void 0 || d.value.push(i),
        we(() => {
          var S;
          v.childrenEventKeys &&
            (v.childrenEventKeys.value =
              (S = v.childrenEventKeys) === null || S === void 0
                ? void 0
                : S.value.filter((D) => D != i));
        }),
        bn(i, u, K);
      const {
          prefixCls: M,
          activeKeys: j,
          disabled: G,
          changeActiveKeys: h,
          mode: O,
          inlineCollapsed: z,
          openKeys: B,
          overflowDisabled: X,
          onOpenChange: P,
          registerMenuInfo: Y,
          unRegisterMenuInfo: U,
          selectedSubMenuKeys: q,
          expandIcon: se,
          theme: ue,
        } = J(),
        ee = f != null,
        ie = !a && ($t() || !ee);
      mn(ie),
        ((a && ee) || (!a && !ee) || ie) &&
          (Y(i, K),
          we(() => {
            U(i);
          }));
      const ce = m(() => `${M.value}-submenu`),
        V = m(() => G.value || e.disabled),
        pe = N(),
        I = N(),
        _ = m(() => B.value.includes(u)),
        L = m(() => !X.value && _.value),
        Q = m(() => q.value.includes(u)),
        te = N(!1);
      W(
        j,
        () => {
          te.value = !!j.value.find((S) => S === u);
        },
        { immediate: !0 }
      );
      const c = (S) => {
          V.value ||
            (l("titleClick", S, u), O.value === "inline" && P(u, !_.value));
        },
        y = (S) => {
          V.value || (h(C.value), l("mouseenter", S));
        },
        w = (S) => {
          V.value || (h([]), l("mouseleave", S));
        },
        k = St(m(() => C.value.length)),
        A = (S) => {
          O.value !== "inline" && P(u, S);
        },
        H = () => {
          h(C.value);
        },
        E = i && `${i}-popup`,
        ne = m(() =>
          $e(M.value, `${M.value}-${e.theme || ue.value}`, e.popupClassName)
        ),
        Ie = (S, D) => {
          if (!D)
            return z.value && !p.value.length && S && typeof S == "string"
              ? g("div", { class: `${M.value}-inline-collapsed-noicon` }, [
                  S.charAt(0),
                ])
              : g("span", { class: `${M.value}-title-content` }, [S]);
          const oe = st(S) && S.type === "span";
          return g(xe, null, [
            ye(
              typeof D == "function" ? D(e.originItemValue) : D,
              { class: `${M.value}-item-icon` },
              !1
            ),
            oe ? S : g("span", { class: `${M.value}-title-content` }, [S]),
          ]);
        },
        Te = m(() =>
          O.value !== "inline" && C.value.length > 1 ? "vertical" : O.value
        ),
        Mt = m(() => (O.value === "horizontal" ? "vertical" : O.value)),
        Ot = m(() => (Te.value === "horizontal" ? "vertical" : Te.value)),
        je = () => {
          var S, D;
          const oe = ce.value,
            ke =
              (S = e.icon) !== null && S !== void 0
                ? S
                : (D = t.icon) === null || D === void 0
                ? void 0
                : D.call(t, e),
            Le = e.expandIcon || t.expandIcon || se.value,
            Ee = Ie(ut(t, e, "title"), ke);
          return g(
            "div",
            {
              style: k.value,
              class: `${oe}-title`,
              tabindex: V.value ? null : -1,
              ref: pe,
              title: typeof Ee == "string" ? Ee : null,
              "data-menu-id": u,
              "aria-expanded": L.value,
              "aria-haspopup": !0,
              "aria-controls": E,
              "aria-disabled": V.value,
              onClick: c,
              onFocus: H,
            },
            [
              Ee,
              O.value !== "horizontal" && Le
                ? Le(b(b({}, e), { isOpen: L.value }))
                : g("i", { class: `${oe}-arrow` }, null),
            ]
          );
        };
      return () => {
        var S;
        if (a)
          return ee
            ? (S = t.default) === null || S === void 0
              ? void 0
              : S.call(t)
            : null;
        const D = ce.value;
        let oe = () => null;
        if (!X.value && O.value !== "inline") {
          const ke = O.value === "horizontal" ? [0, 8] : [10, 0];
          oe = () =>
            g(
              Je,
              {
                mode: Te.value,
                prefixCls: D,
                visible: !e.internalPopupClose && L.value,
                popupClassName: ne.value,
                popupOffset: e.popupOffset || ke,
                disabled: V.value,
                onVisibleChange: A,
              },
              {
                default: () => [je()],
                popup: () =>
                  g(
                    Oe,
                    { mode: Ot.value },
                    {
                      default: () => [
                        g(wt, { id: E, ref: I }, { default: t.default }),
                      ],
                    }
                  ),
              }
            );
        } else oe = () => g(Je, null, { default: je });
        return g(
          Oe,
          { mode: Mt.value },
          {
            default: () => [
              g(
                be.Item,
                T(
                  T({ component: "li" }, o),
                  {},
                  {
                    role: "none",
                    class: $e(D, `${D}-${O.value}`, o.class, {
                      [`${D}-open`]: L.value,
                      [`${D}-active`]: te.value,
                      [`${D}-selected`]: Q.value,
                      [`${D}-disabled`]: V.value,
                    }),
                    onMouseenter: y,
                    onMouseleave: w,
                    "data-submenu-id": u,
                  }
                ),
                {
                  default: () =>
                    g(xe, null, [
                      oe(),
                      !X.value &&
                        g(
                          Sn,
                          { id: E, open: L.value, keyPath: C.value },
                          { default: t.default }
                        ),
                    ]),
                }
              ),
            ],
          }
        );
      };
    },
  }),
  wn = () => ({ title: R.any, originItemValue: ze() }),
  Ke = Z({
    compatConfig: { MODE: 3 },
    name: "AMenuItemGroup",
    inheritAttrs: !1,
    props: wn(),
    slots: Object,
    setup(e, n) {
      let { slots: t, attrs: o } = n;
      const { prefixCls: l } = J(),
        r = m(() => `${l.value}-item-group`),
        d = Ne();
      return () => {
        var a, s;
        return d
          ? (a = t.default) === null || a === void 0
            ? void 0
            : a.call(t)
          : g(
              "li",
              T(
                T({}, o),
                {},
                { onClick: (f) => f.stopPropagation(), class: r.value }
              ),
              [
                g(
                  "div",
                  {
                    title: typeof e.title == "string" ? e.title : void 0,
                    class: `${r.value}-title`,
                  },
                  [ut(t, e, "title")]
                ),
                g("ul", { class: `${r.value}-list` }, [
                  (s = t.default) === null || s === void 0 ? void 0 : s.call(t),
                ]),
              ]
            );
      };
    },
  }),
  Mn = () => ({ prefixCls: String, dashed: Boolean }),
  Pe = Z({
    compatConfig: { MODE: 3 },
    name: "AMenuDivider",
    props: Mn(),
    setup(e) {
      const { prefixCls: n } = J(),
        t = m(() => ({
          [`${n.value}-item-divider`]: !0,
          [`${n.value}-item-divider-dashed`]: !!e.dashed,
        }));
      return () => g("li", { class: t.value }, null);
    },
  });
var On =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var t = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        n.indexOf(o) < 0 &&
        (t[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, o = Object.getOwnPropertySymbols(e); l < o.length; l++)
        n.indexOf(o[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[l]) &&
          (t[o[l]] = e[o[l]]);
    return t;
  };
function Re(e, n, t) {
  return (e || [])
    .map((o, l) => {
      if (o && typeof o == "object") {
        const r = o,
          { label: d, children: a, key: s, type: f } = r,
          u = On(r, ["label", "children", "key", "type"]),
          i = s ?? `tmp-${l}`,
          $ = t ? t.parentKeys.slice() : [],
          v = [],
          p = {
            eventKey: i,
            key: i,
            parentEventKeys: F($),
            parentKeys: F($),
            childrenEventKeys: F(v),
            isLeaf: !1,
          };
        if (a || f === "group") {
          if (f === "group") {
            const x = Re(a, n, t);
            return g(
              Ke,
              T(T({ key: i }, u), {}, { title: d, originItemValue: o }),
              { default: () => [x] }
            );
          }
          n.set(i, p), t && t.childrenEventKeys.push(i);
          const C = Re(a, n, {
            childrenEventKeys: v,
            parentKeys: [].concat($, i),
          });
          return g(
            ve,
            T(T({ key: i }, u), {}, { title: d, originItemValue: o }),
            { default: () => [C] }
          );
        }
        return f === "divider"
          ? g(Pe, T({ key: i }, u), null)
          : ((p.isLeaf = !0),
            n.set(i, p),
            g(he, T(T({ key: i }, u), {}, { originItemValue: o }), {
              default: () => [d],
            }));
      }
      return null;
    })
    .filter((o) => o);
}
function Kn(e) {
  const n = N([]),
    t = N(!1),
    o = N(new Map());
  return (
    W(
      () => e.items,
      () => {
        const l = new Map();
        (t.value = !1),
          e.items
            ? ((t.value = !0), (n.value = Re(e.items, l)))
            : (n.value = void 0),
          (o.value = l);
      },
      { immediate: !0, deep: !0 }
    ),
    { itemsNodes: n, store: o, hasItmes: t }
  );
}
const Pn = (e) => {
    const {
      componentCls: n,
      motionDurationSlow: t,
      menuHorizontalHeight: o,
      colorSplit: l,
      lineWidth: r,
      lineType: d,
      menuItemPaddingInline: a,
    } = e;
    return {
      [`${n}-horizontal`]: {
        lineHeight: `${o}px`,
        border: 0,
        borderBottom: `${r}px ${d} ${l}`,
        boxShadow: "none",
        "&::after": {
          display: "block",
          clear: "both",
          height: 0,
          content: '"\\20"',
        },
        [`${n}-item, ${n}-submenu`]: {
          position: "relative",
          display: "inline-block",
          verticalAlign: "bottom",
          paddingInline: a,
        },
        [`> ${n}-item:hover,
        > ${n}-item-active,
        > ${n}-submenu ${n}-submenu-title:hover`]: {
          backgroundColor: "transparent",
        },
        [`${n}-item, ${n}-submenu-title`]: {
          transition: [`border-color ${t}`, `background ${t}`].join(","),
        },
        [`${n}-submenu-arrow`]: { display: "none" },
      },
    };
  },
  Tn = Pn,
  kn = (e) => {
    let { componentCls: n, menuArrowOffset: t } = e;
    return {
      [`${n}-rtl`]: { direction: "rtl" },
      [`${n}-submenu-rtl`]: { transformOrigin: "100% 0" },
      [`${n}-rtl${n}-vertical,
    ${n}-submenu-rtl ${n}-vertical`]: {
        [`${n}-submenu-arrow`]: {
          "&::before": { transform: `rotate(-45deg) translateY(-${t})` },
          "&::after": { transform: `rotate(45deg) translateY(${t})` },
        },
      },
    };
  },
  En = kn,
  tt = (e) => b({}, kt(e)),
  _n = (e, n) => {
    const {
      componentCls: t,
      colorItemText: o,
      colorItemTextSelected: l,
      colorGroupTitle: r,
      colorItemBg: d,
      colorSubItemBg: a,
      colorItemBgSelected: s,
      colorActiveBarHeight: f,
      colorActiveBarWidth: u,
      colorActiveBarBorderSize: i,
      motionDurationSlow: $,
      motionEaseInOut: v,
      motionEaseOut: p,
      menuItemPaddingInline: C,
      motionDurationMid: x,
      colorItemTextHover: K,
      lineType: M,
      colorSplit: j,
      colorItemTextDisabled: G,
      colorDangerItemText: h,
      colorDangerItemTextHover: O,
      colorDangerItemTextSelected: z,
      colorDangerItemBgActive: B,
      colorDangerItemBgSelected: X,
      colorItemBgHover: P,
      menuSubMenuBg: Y,
      colorItemTextSelectedHorizontal: U,
      colorItemBgSelectedHorizontal: q,
    } = e;
    return {
      [`${t}-${n}`]: {
        color: o,
        background: d,
        [`&${t}-root:focus-visible`]: b({}, tt(e)),
        [`${t}-item-group-title`]: { color: r },
        [`${t}-submenu-selected`]: { [`> ${t}-submenu-title`]: { color: l } },
        [`${t}-item-disabled, ${t}-submenu-disabled`]: {
          color: `${G} !important`,
        },
        [`${t}-item:hover, ${t}-submenu-title:hover`]: {
          [`&:not(${t}-item-selected):not(${t}-submenu-selected)`]: {
            color: K,
          },
        },
        [`&:not(${t}-horizontal)`]: {
          [`${t}-item:not(${t}-item-selected)`]: {
            "&:hover": { backgroundColor: P },
            "&:active": { backgroundColor: s },
          },
          [`${t}-submenu-title`]: {
            "&:hover": { backgroundColor: P },
            "&:active": { backgroundColor: s },
          },
        },
        [`${t}-item-danger`]: {
          color: h,
          [`&${t}-item:hover`]: {
            [`&:not(${t}-item-selected):not(${t}-submenu-selected)`]: {
              color: O,
            },
          },
          [`&${t}-item:active`]: { background: B },
        },
        [`${t}-item a`]: { "&, &:hover": { color: "inherit" } },
        [`${t}-item-selected`]: {
          color: l,
          [`&${t}-item-danger`]: { color: z },
          ["a, a:hover"]: { color: "inherit" },
        },
        [`& ${t}-item-selected`]: {
          backgroundColor: s,
          [`&${t}-item-danger`]: { backgroundColor: X },
        },
        [`${t}-item, ${t}-submenu-title`]: {
          [`&:not(${t}-item-disabled):focus-visible`]: b({}, tt(e)),
        },
        [`&${t}-submenu > ${t}`]: { backgroundColor: Y },
        [`&${t}-popup > ${t}`]: { backgroundColor: d },
        [`&${t}-horizontal`]: b(
          b({}, n === "dark" ? { borderBottom: 0 } : {}),
          {
            [`> ${t}-item, > ${t}-submenu`]: {
              top: i,
              marginTop: -i,
              marginBottom: 0,
              borderRadius: 0,
              "&::after": {
                position: "absolute",
                insetInline: C,
                bottom: 0,
                borderBottom: `${f}px solid transparent`,
                transition: `border-color ${$} ${v}`,
                content: '""',
              },
              ["&:hover, &-active, &-open"]: {
                "&::after": { borderBottomWidth: f, borderBottomColor: U },
              },
              ["&-selected"]: {
                color: U,
                backgroundColor: q,
                "&::after": { borderBottomWidth: f, borderBottomColor: U },
              },
            },
          }
        ),
        [`&${t}-root`]: {
          [`&${t}-inline, &${t}-vertical`]: {
            borderInlineEnd: `${i}px ${M} ${j}`,
          },
        },
        [`&${t}-inline`]: {
          [`${t}-sub${t}-inline`]: { background: a },
          [`${t}-item, ${t}-submenu-title`]:
            i && u ? { width: `calc(100% + ${i}px)` } : {},
          [`${t}-item`]: {
            position: "relative",
            "&::after": {
              position: "absolute",
              insetBlock: 0,
              insetInlineEnd: 0,
              borderInlineEnd: `${u}px solid ${l}`,
              transform: "scaleY(0.0001)",
              opacity: 0,
              transition: [`transform ${x} ${p}`, `opacity ${x} ${p}`].join(
                ","
              ),
              content: '""',
            },
            [`&${t}-item-danger`]: { "&::after": { borderInlineEndColor: z } },
          },
          [`${t}-selected, ${t}-item-selected`]: {
            "&::after": {
              transform: "scaleY(1)",
              opacity: 1,
              transition: [`transform ${x} ${v}`, `opacity ${x} ${v}`].join(
                ","
              ),
            },
          },
        },
      },
    };
  },
  nt = _n,
  ot = (e) => {
    const {
        componentCls: n,
        menuItemHeight: t,
        itemMarginInline: o,
        padding: l,
        menuArrowSize: r,
        marginXS: d,
        marginXXS: a,
      } = e,
      s = l + r + d;
    return {
      [`${n}-item`]: { position: "relative" },
      [`${n}-item, ${n}-submenu-title`]: {
        height: t,
        lineHeight: `${t}px`,
        paddingInline: l,
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginInline: o,
        marginBlock: a,
        width: `calc(100% - ${o * 2}px)`,
      },
      [`${n}-submenu`]: { paddingBottom: 0.02 },
      [`> ${n}-item,
            > ${n}-submenu > ${n}-submenu-title`]: {
        height: t,
        lineHeight: `${t}px`,
      },
      [`${n}-item-group-list ${n}-submenu-title,
            ${n}-submenu-title`]: { paddingInlineEnd: s },
    };
  },
  An = (e) => {
    const {
        componentCls: n,
        iconCls: t,
        menuItemHeight: o,
        colorTextLightSolid: l,
        dropdownWidth: r,
        controlHeightLG: d,
        motionDurationMid: a,
        motionEaseOut: s,
        paddingXL: f,
        fontSizeSM: u,
        fontSizeLG: i,
        motionDurationSlow: $,
        paddingXS: v,
        boxShadowSecondary: p,
      } = e,
      C = {
        height: o,
        lineHeight: `${o}px`,
        listStylePosition: "inside",
        listStyleType: "disc",
      };
    return [
      {
        [n]: {
          ["&-inline, &-vertical"]: b(
            { [`&${n}-root`]: { boxShadow: "none" } },
            ot(e)
          ),
        },
        [`${n}-submenu-popup`]: {
          [`${n}-vertical`]: b(b({}, ot(e)), { boxShadow: p }),
        },
      },
      {
        [`${n}-submenu-popup ${n}-vertical${n}-sub`]: {
          minWidth: r,
          maxHeight: `calc(100vh - ${d * 2.5}px)`,
          padding: "0",
          overflow: "hidden",
          borderInlineEnd: 0,
          "&:not([class*='-active'])": {
            overflowX: "hidden",
            overflowY: "auto",
          },
        },
      },
      {
        [`${n}-inline`]: {
          width: "100%",
          [`&${n}-root`]: {
            [`${n}-item, ${n}-submenu-title`]: {
              display: "flex",
              alignItems: "center",
              transition: [
                `border-color ${$}`,
                `background ${$}`,
                `padding ${a} ${s}`,
              ].join(","),
              [`> ${n}-title-content`]: {
                flex: "auto",
                minWidth: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
              "> *": { flex: "none" },
            },
          },
          [`${n}-sub${n}-inline`]: {
            padding: 0,
            border: 0,
            borderRadius: 0,
            boxShadow: "none",
            [`& > ${n}-submenu > ${n}-submenu-title`]: C,
            [`& ${n}-item-group-title`]: { paddingInlineStart: f },
          },
          [`${n}-item`]: C,
        },
      },
      {
        [`${n}-inline-collapsed`]: {
          width: o * 2,
          [`&${n}-root`]: {
            [`${n}-item, ${n}-submenu ${n}-submenu-title`]: {
              [`> ${n}-inline-collapsed-noicon`]: {
                fontSize: i,
                textAlign: "center",
              },
            },
          },
          [`> ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-submenu > ${n}-submenu-title,
          > ${n}-submenu > ${n}-submenu-title`]: {
            insetInlineStart: 0,
            paddingInline: `calc(50% - ${u}px)`,
            textOverflow: "clip",
            [`
            ${n}-submenu-arrow,
            ${n}-submenu-expand-icon
          `]: { opacity: 0 },
            [`${n}-item-icon, ${t}`]: {
              margin: 0,
              fontSize: i,
              lineHeight: `${o}px`,
              "+ span": { display: "inline-block", opacity: 0 },
            },
          },
          [`${n}-item-icon, ${t}`]: { display: "inline-block" },
          "&-tooltip": {
            pointerEvents: "none",
            [`${n}-item-icon, ${t}`]: { display: "none" },
            "a, a:hover": { color: l },
          },
          [`${n}-item-group-title`]: b(b({}, Et), { paddingInline: v }),
        },
      },
    ];
  },
  Bn = An,
  lt = (e) => {
    const {
      componentCls: n,
      fontSize: t,
      motionDurationSlow: o,
      motionDurationMid: l,
      motionEaseInOut: r,
      motionEaseOut: d,
      iconCls: a,
      controlHeightSM: s,
    } = e;
    return {
      [`${n}-item, ${n}-submenu-title`]: {
        position: "relative",
        display: "block",
        margin: 0,
        whiteSpace: "nowrap",
        cursor: "pointer",
        transition: [
          `border-color ${o}`,
          `background ${o}`,
          `padding ${o} ${r}`,
        ].join(","),
        [`${n}-item-icon, ${a}`]: {
          minWidth: t,
          fontSize: t,
          transition: [
            `font-size ${l} ${d}`,
            `margin ${o} ${r}`,
            `color ${o}`,
          ].join(","),
          "+ span": {
            marginInlineStart: s - t,
            opacity: 1,
            transition: [`opacity ${o} ${r}`, `margin ${o}`, `color ${o}`].join(
              ","
            ),
          },
        },
        [`${n}-item-icon`]: b({}, Bt()),
        [`&${n}-item-only-child`]: {
          [`> ${a}, > ${n}-item-icon`]: { marginInlineEnd: 0 },
        },
      },
      [`${n}-item-disabled, ${n}-submenu-disabled`]: {
        background: "none !important",
        cursor: "not-allowed",
        "&::after": { borderColor: "transparent !important" },
        a: { color: "inherit !important" },
        [`> ${n}-submenu-title`]: {
          color: "inherit !important",
          cursor: "not-allowed",
        },
      },
    };
  },
  it = (e) => {
    const {
      componentCls: n,
      motionDurationSlow: t,
      motionEaseInOut: o,
      borderRadius: l,
      menuArrowSize: r,
      menuArrowOffset: d,
    } = e;
    return {
      [`${n}-submenu`]: {
        ["&-expand-icon, &-arrow"]: {
          position: "absolute",
          top: "50%",
          insetInlineEnd: e.margin,
          width: r,
          color: "currentcolor",
          transform: "translateY(-50%)",
          transition: `transform ${t} ${o}, opacity ${t}`,
        },
        "&-arrow": {
          "&::before, &::after": {
            position: "absolute",
            width: r * 0.6,
            height: r * 0.15,
            backgroundColor: "currentcolor",
            borderRadius: l,
            transition: [
              `background ${t} ${o}`,
              `transform ${t} ${o}`,
              `top ${t} ${o}`,
              `color ${t} ${o}`,
            ].join(","),
            content: '""',
          },
          "&::before": { transform: `rotate(45deg) translateY(-${d})` },
          "&::after": { transform: `rotate(-45deg) translateY(${d})` },
        },
      },
    };
  },
  Dn = (e) => {
    const {
      antCls: n,
      componentCls: t,
      fontSize: o,
      motionDurationSlow: l,
      motionDurationMid: r,
      motionEaseInOut: d,
      lineHeight: a,
      paddingXS: s,
      padding: f,
      colorSplit: u,
      lineWidth: i,
      zIndexPopup: $,
      borderRadiusLG: v,
      radiusSubMenuItem: p,
      menuArrowSize: C,
      menuArrowOffset: x,
      lineType: K,
      menuPanelMaskInset: M,
    } = e;
    return [
      {
        "": { [`${t}`]: b(b({}, Xe()), { ["&-hidden"]: { display: "none" } }) },
        [`${t}-submenu-hidden`]: { display: "none" },
      },
      {
        [t]: b(
          b(
            b(
              b(
                b(b(b({}, At(e)), Xe()), {
                  marginBottom: 0,
                  paddingInlineStart: 0,
                  fontSize: o,
                  lineHeight: 0,
                  listStyle: "none",
                  outline: "none",
                  transition: `width ${l} cubic-bezier(0.2, 0, 0, 1) 0s`,
                  ["ul, ol"]: { margin: 0, padding: 0, listStyle: "none" },
                  ["&-overflow"]: {
                    display: "flex",
                    [`${t}-item`]: { flex: "none" },
                  },
                  [`${t}-item, ${t}-submenu, ${t}-submenu-title`]: {
                    borderRadius: e.radiusItem,
                  },
                  [`${t}-item-group-title`]: {
                    padding: `${s}px ${f}px`,
                    fontSize: o,
                    lineHeight: a,
                    transition: `all ${l}`,
                  },
                  [`&-horizontal ${t}-submenu`]: {
                    transition: [
                      `border-color ${l} ${d}`,
                      `background ${l} ${d}`,
                    ].join(","),
                  },
                  [`${t}-submenu, ${t}-submenu-inline`]: {
                    transition: [
                      `border-color ${l} ${d}`,
                      `background ${l} ${d}`,
                      `padding ${r} ${d}`,
                    ].join(","),
                  },
                  [`${t}-submenu ${t}-sub`]: {
                    cursor: "initial",
                    transition: [
                      `background ${l} ${d}`,
                      `padding ${l} ${d}`,
                    ].join(","),
                  },
                  [`${t}-title-content`]: { transition: `color ${l}` },
                  [`${t}-item a`]: {
                    "&::before": {
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "transparent",
                      content: '""',
                    },
                  },
                  [`${t}-item-divider`]: {
                    overflow: "hidden",
                    lineHeight: 0,
                    borderColor: u,
                    borderStyle: K,
                    borderWidth: 0,
                    borderTopWidth: i,
                    marginBlock: i,
                    padding: 0,
                    "&-dashed": { borderStyle: "dashed" },
                  },
                }),
                lt(e)
              ),
              {
                [`${t}-item-group`]: {
                  [`${t}-item-group-list`]: {
                    margin: 0,
                    padding: 0,
                    [`${t}-item, ${t}-submenu-title`]: {
                      paddingInline: `${o * 2}px ${f}px`,
                    },
                  },
                },
                "&-submenu": {
                  "&-popup": {
                    position: "absolute",
                    zIndex: $,
                    background: "transparent",
                    borderRadius: v,
                    boxShadow: "none",
                    transformOrigin: "0 0",
                    "&::before": {
                      position: "absolute",
                      inset: `${M}px 0 0`,
                      zIndex: -1,
                      width: "100%",
                      height: "100%",
                      opacity: 0,
                      content: '""',
                    },
                  },
                  "&-placement-rightTop::before": {
                    top: 0,
                    insetInlineStart: M,
                  },
                  [`> ${t}`]: b(b(b({ borderRadius: v }, lt(e)), it(e)), {
                    [`${t}-item, ${t}-submenu > ${t}-submenu-title`]: {
                      borderRadius: p,
                    },
                    [`${t}-submenu-title::after`]: {
                      transition: `transform ${l} ${d}`,
                    },
                  }),
                },
              }
            ),
            it(e)
          ),
          {
            [`&-inline-collapsed ${t}-submenu-arrow,
        &-inline ${t}-submenu-arrow`]: {
              "&::before": { transform: `rotate(-45deg) translateX(${x})` },
              "&::after": { transform: `rotate(45deg) translateX(-${x})` },
            },
            [`${t}-submenu-open${t}-submenu-inline > ${t}-submenu-title > ${t}-submenu-arrow`]:
              {
                transform: `translateY(-${C * 0.2}px)`,
                "&::after": { transform: `rotate(-45deg) translateX(-${x})` },
                "&::before": { transform: `rotate(45deg) translateX(${x})` },
              },
          }
        ),
      },
      { [`${n}-layout-header`]: { [t]: { lineHeight: "inherit" } } },
    ];
  },
  Rn = (e, n) =>
    _t(
      "Menu",
      (o, l) => {
        let { overrideComponentToken: r } = l;
        if ((n == null ? void 0 : n.value) === !1) return [];
        const {
            colorBgElevated: d,
            colorPrimary: a,
            colorError: s,
            colorErrorHover: f,
            colorTextLightSolid: u,
          } = o,
          { controlHeightLG: i, fontSize: $ } = o,
          v = ($ / 7) * 5,
          p = We(o, {
            menuItemHeight: i,
            menuItemPaddingInline: o.margin,
            menuArrowSize: v,
            menuHorizontalHeight: i * 1.15,
            menuArrowOffset: `${v * 0.25}px`,
            menuPanelMaskInset: -7,
            menuSubMenuBg: d,
          }),
          C = new Ge(u).setAlpha(0.65).toRgbString(),
          x = We(
            p,
            {
              colorItemText: C,
              colorItemTextHover: u,
              colorGroupTitle: C,
              colorItemTextSelected: u,
              colorItemBg: "#001529",
              colorSubItemBg: "#000c17",
              colorItemBgActive: "transparent",
              colorItemBgSelected: a,
              colorActiveBarWidth: 0,
              colorActiveBarHeight: 0,
              colorActiveBarBorderSize: 0,
              colorItemTextDisabled: new Ge(u).setAlpha(0.25).toRgbString(),
              colorDangerItemText: s,
              colorDangerItemTextHover: f,
              colorDangerItemTextSelected: u,
              colorDangerItemBgActive: s,
              colorDangerItemBgSelected: s,
              menuSubMenuBg: "#001529",
              colorItemTextSelectedHorizontal: u,
              colorItemBgSelectedHorizontal: a,
            },
            b({}, r)
          );
        return [
          Dn(p),
          Tn(p),
          Bn(p),
          nt(p, "light"),
          nt(x, "dark"),
          En(p),
          Yt(p),
          qe(p, "slide-up"),
          qe(p, "slide-down"),
          qt(p, "zoom-big"),
        ];
      },
      (o) => {
        const {
          colorPrimary: l,
          colorError: r,
          colorTextDisabled: d,
          colorErrorBg: a,
          colorText: s,
          colorTextDescription: f,
          colorBgContainer: u,
          colorFillAlter: i,
          colorFillContent: $,
          lineWidth: v,
          lineWidthBold: p,
          controlItemBgActive: C,
          colorBgTextHover: x,
        } = o;
        return {
          dropdownWidth: 160,
          zIndexPopup: o.zIndexPopupBase + 50,
          radiusItem: o.borderRadiusLG,
          radiusSubMenuItem: o.borderRadiusSM,
          colorItemText: s,
          colorItemTextHover: s,
          colorItemTextHoverHorizontal: l,
          colorGroupTitle: f,
          colorItemTextSelected: l,
          colorItemTextSelectedHorizontal: l,
          colorItemBg: u,
          colorItemBgHover: x,
          colorItemBgActive: $,
          colorSubItemBg: i,
          colorItemBgSelected: C,
          colorItemBgSelectedHorizontal: "transparent",
          colorActiveBarWidth: 0,
          colorActiveBarHeight: p,
          colorActiveBarBorderSize: v,
          colorItemTextDisabled: d,
          colorDangerItemText: r,
          colorDangerItemTextHover: r,
          colorDangerItemTextSelected: r,
          colorDangerItemBgActive: a,
          colorDangerItemBgSelected: a,
          itemMarginInline: o.marginXXS,
        };
      }
    )(e),
  zn = () => ({
    id: String,
    prefixCls: String,
    items: Array,
    disabled: Boolean,
    inlineCollapsed: Boolean,
    disabledOverflow: Boolean,
    forceSubMenuRender: Boolean,
    openKeys: Array,
    selectedKeys: Array,
    activeKey: String,
    selectable: { type: Boolean, default: !0 },
    multiple: { type: Boolean, default: !1 },
    tabindex: { type: [Number, String] },
    motion: Object,
    role: String,
    theme: { type: String, default: "light" },
    mode: { type: String, default: "vertical" },
    inlineIndent: { type: Number, default: 24 },
    subMenuOpenDelay: { type: Number, default: 0 },
    subMenuCloseDelay: { type: Number, default: 0.1 },
    builtinPlacements: { type: Object },
    triggerSubMenuAction: { type: String, default: "hover" },
    getPopupContainer: Function,
    expandIcon: Function,
    onOpenChange: Function,
    onSelect: Function,
    onDeselect: Function,
    onClick: [Function, Array],
    onFocus: Function,
    onBlur: Function,
    onMousedown: Function,
    "onUpdate:openKeys": Function,
    "onUpdate:selectedKeys": Function,
    "onUpdate:activeKey": Function,
  }),
  at = [],
  ae = Z({
    compatConfig: { MODE: 3 },
    name: "AMenu",
    inheritAttrs: !1,
    props: zn(),
    slots: Object,
    setup(e, n) {
      let { slots: t, emit: o, attrs: l } = n;
      const { direction: r, getPrefixCls: d } = Dt("menu", e),
        a = ft(),
        s = m(() => {
          var c;
          return d(
            "menu",
            e.prefixCls ||
              ((c = a == null ? void 0 : a.prefixCls) === null || c === void 0
                ? void 0
                : c.value)
          );
        }),
        [f, u] = Rn(
          s,
          m(() => !a)
        ),
        i = N(new Map()),
        $ = re(pn, F(void 0)),
        v = m(() => ($.value !== void 0 ? $.value : e.inlineCollapsed)),
        { itemsNodes: p } = Kn(e),
        C = N(!1);
      Ft(() => {
        C.value = !0;
      }),
        Ae(() => {
          Me(
            !(e.inlineCollapsed === !0 && e.mode !== "inline"),
            "Menu",
            "`inlineCollapsed` should only be used when `mode` is inline."
          ),
            Me(
              !($.value !== void 0 && e.inlineCollapsed === !0),
              "Menu",
              "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."
            );
        });
      const x = F([]),
        K = F([]),
        M = F({});
      W(
        i,
        () => {
          const c = {};
          for (const y of i.value.values()) c[y.key] = y;
          M.value = c;
        },
        { flush: "post" }
      ),
        Ae(() => {
          if (e.activeKey !== void 0) {
            let c = [];
            const y = e.activeKey ? M.value[e.activeKey] : void 0;
            y && e.activeKey !== void 0
              ? (c = De([].concat(Ce(y.parentKeys), e.activeKey)))
              : (c = []),
              ge(x.value, c) || (x.value = c);
          }
        }),
        W(
          () => e.selectedKeys,
          (c) => {
            c && (K.value = c.slice());
          },
          { immediate: !0, deep: !0 }
        );
      const j = F([]);
      W(
        [M, K],
        () => {
          let c = [];
          K.value.forEach((y) => {
            const w = M.value[y];
            w && (c = c.concat(Ce(w.parentKeys)));
          }),
            (c = De(c)),
            ge(j.value, c) || (j.value = c);
        },
        { immediate: !0 }
      );
      const G = (c) => {
          if (e.selectable) {
            const { key: y } = c,
              w = K.value.includes(y);
            let k;
            e.multiple
              ? w
                ? (k = K.value.filter((H) => H !== y))
                : (k = [...K.value, y])
              : (k = [y]);
            const A = b(b({}, c), { selectedKeys: k });
            ge(k, K.value) ||
              (e.selectedKeys === void 0 && (K.value = k),
              o("update:selectedKeys", k),
              w && e.multiple ? o("deselect", A) : o("select", A));
          }
          P.value !== "inline" && !e.multiple && h.value.length && q(at);
        },
        h = F([]);
      W(
        () => e.openKeys,
        function () {
          let c =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : h.value;
          ge(h.value, c) || (h.value = c.slice());
        },
        { immediate: !0, deep: !0 }
      );
      let O;
      const z = (c) => {
          clearTimeout(O),
            (O = setTimeout(() => {
              e.activeKey === void 0 && (x.value = c),
                o("update:activeKey", c[c.length - 1]);
            }));
        },
        B = m(() => !!e.disabled),
        X = m(() => r.value === "rtl"),
        P = F("vertical"),
        Y = N(!1);
      Ae(() => {
        var c;
        (e.mode === "inline" || e.mode === "vertical") && v.value
          ? ((P.value = "vertical"), (Y.value = v.value))
          : ((P.value = e.mode), (Y.value = !1)),
          !((c = a == null ? void 0 : a.mode) === null || c === void 0) &&
            c.value &&
            (P.value = a.mode.value);
      });
      const U = m(() => P.value === "inline"),
        q = (c) => {
          (h.value = c), o("update:openKeys", c), o("openChange", c);
        },
        se = F(h.value),
        ue = N(!1);
      W(
        h,
        () => {
          U.value && (se.value = h.value);
        },
        { immediate: !0 }
      ),
        W(
          U,
          () => {
            if (!ue.value) {
              ue.value = !0;
              return;
            }
            U.value ? (h.value = se.value) : q(at);
          },
          { immediate: !0 }
        );
      const ee = m(() => ({
          [`${s.value}`]: !0,
          [`${s.value}-root`]: !0,
          [`${s.value}-${P.value}`]: !0,
          [`${s.value}-inline-collapsed`]: Y.value,
          [`${s.value}-rtl`]: X.value,
          [`${s.value}-${e.theme}`]: !0,
        })),
        ie = m(() => d()),
        ce = m(() => ({
          horizontal: { name: `${ie.value}-slide-up` },
          inline: Ut,
          other: { name: `${ie.value}-zoom-big` },
        }));
      ht(!0);
      const V = function () {
          let c =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          const y = [],
            w = i.value;
          return (
            c.forEach((k) => {
              const { key: A, childrenEventKeys: H } = w.get(k);
              y.push(A, ...V(Ce(H)));
            }),
            y
          );
        },
        pe = (c) => {
          var y;
          o("click", c),
            G(c),
            (y = a == null ? void 0 : a.onClick) === null ||
              y === void 0 ||
              y.call(a);
        },
        I = (c, y) => {
          var w;
          const k =
            ((w = M.value[c]) === null || w === void 0
              ? void 0
              : w.childrenEventKeys) || [];
          let A = h.value.filter((H) => H !== c);
          if (y) A.push(c);
          else if (P.value !== "inline") {
            const H = V(Ce(k));
            A = De(A.filter((E) => !H.includes(E)));
          }
          ge(h, A) || q(A);
        },
        _ = (c, y) => {
          i.value.set(c, y), (i.value = new Map(i.value));
        },
        L = (c) => {
          i.value.delete(c), (i.value = new Map(i.value));
        },
        Q = F(0),
        te = m(() => {
          var c;
          return e.expandIcon ||
            t.expandIcon ||
            (!(
              (c = a == null ? void 0 : a.expandIcon) === null || c === void 0
            ) &&
              c.value)
            ? (y) => {
                let w = e.expandIcon || t.expandIcon;
                return (
                  (w = typeof w == "function" ? w(y) : w),
                  ye(w, { class: `${s.value}-submenu-expand-icon` }, !1)
                );
              }
            : null;
        });
      return (
        fn({
          prefixCls: s,
          activeKeys: x,
          openKeys: h,
          selectedKeys: K,
          changeActiveKeys: z,
          disabled: B,
          rtl: X,
          mode: P,
          inlineIndent: m(() => e.inlineIndent),
          subMenuCloseDelay: m(() => e.subMenuCloseDelay),
          subMenuOpenDelay: m(() => e.subMenuOpenDelay),
          builtinPlacements: m(() => e.builtinPlacements),
          triggerSubMenuAction: m(() => e.triggerSubMenuAction),
          getPopupContainer: m(() => e.getPopupContainer),
          inlineCollapsed: Y,
          theme: m(() => e.theme),
          siderCollapsed: $,
          defaultMotions: m(() => (C.value ? ce.value : null)),
          motion: m(() => (C.value ? e.motion : null)),
          overflowDisabled: N(void 0),
          onOpenChange: I,
          onItemClick: pe,
          registerMenuInfo: _,
          unRegisterMenuInfo: L,
          selectedSubMenuKeys: j,
          expandIcon: te,
          forceSubMenuRender: m(() => e.forceSubMenuRender),
          rootClassName: u,
        }),
        () => {
          var c, y;
          const w =
              p.value ||
              rt((c = t.default) === null || c === void 0 ? void 0 : c.call(t)),
            k =
              Q.value >= w.length - 1 ||
              P.value !== "horizontal" ||
              e.disabledOverflow,
            A =
              P.value !== "horizontal" || e.disabledOverflow
                ? w
                : w.map((E, ne) =>
                    g(
                      Oe,
                      { key: E.key, overflowDisabled: ne > Q.value },
                      { default: () => E }
                    )
                  ),
            H =
              ((y = t.overflowedIndicator) === null || y === void 0
                ? void 0
                : y.call(t)) || g(cn, null, null);
          return f(
            g(
              be,
              T(
                T({}, l),
                {},
                {
                  onMousedown: e.onMousedown,
                  prefixCls: `${s.value}-overflow`,
                  component: "ul",
                  itemComponent: he,
                  class: [ee.value, l.class, u.value],
                  role: "menu",
                  id: e.id,
                  data: A,
                  renderRawItem: (E) => E,
                  renderRawRest: (E) => {
                    const ne = E.length,
                      Ie = ne ? w.slice(-ne) : null;
                    return g(xe, null, [
                      g(
                        ve,
                        {
                          eventKey: Se,
                          key: Se,
                          title: H,
                          disabled: k,
                          internalPopupClose: ne === 0,
                        },
                        { default: () => Ie }
                      ),
                      g(Qe, null, {
                        default: () => [
                          g(
                            ve,
                            {
                              eventKey: Se,
                              key: Se,
                              title: H,
                              disabled: k,
                              internalPopupClose: ne === 0,
                            },
                            { default: () => Ie }
                          ),
                        ],
                      }),
                    ]);
                  },
                  maxCount:
                    P.value !== "horizontal" || e.disabledOverflow
                      ? be.INVALIDATE
                      : be.RESPONSIVE,
                  ssr: "full",
                  "data-menu-list": !0,
                  onVisibleChange: (E) => {
                    Q.value = E;
                  },
                }
              ),
              {
                default: () => [
                  g(
                    Nt,
                    { to: "body" },
                    {
                      default: () => [
                        g(
                          "div",
                          { style: { display: "none" }, "aria-hidden": !0 },
                          [g(Qe, null, { default: () => [A] })]
                        ),
                      ],
                    }
                  ),
                ],
              }
            )
          );
        }
      );
    },
  });
ae.install = function (e) {
  return (
    e.component(ae.name, ae),
    e.component(he.name, he),
    e.component(ve.name, ve),
    e.component(Pe.name, Pe),
    e.component(Ke.name, Ke),
    e
  );
};
ae.Item = he;
ae.Divider = Pe;
ae.SubMenu = ve;
ae.ItemGroup = Ke;
export { Qn as D, cn as E, ae as M, he as a, Jn as u };
