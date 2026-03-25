import {
  a as b,
  P as D,
  b as G,
  c as re,
  i as it,
  bv as Ht,
  ao as at,
  ak as At,
  bi as Fn,
  bc as zt,
  q as Dn,
  aL as Nn,
  C as Vn,
  K as se,
  aj as tt,
  r as rt,
  m as be,
  bw as Bt,
  f as _n,
  am as Ot,
  al as Te,
  an as Ln,
  ah as Hn,
  l as An,
  b1 as zn,
  n as Bn,
  bx as Kn,
  by as Wn,
} from "./entry.8aa394d7.js";
import { T as jn } from "./Trigger.dd535606.js";
import {
  j as ue,
  k as M,
  a as me,
  z as y,
  i as Pe,
  a7 as Un,
  p as Ae,
  q as Kt,
  s as q,
  b as ie,
  y as ye,
  W as nt,
  F as Ee,
  o as Fe,
  w as xe,
  P as Yn,
  g as Gn,
  au as Xn,
  r as Le,
  G as ze,
  n as Me,
  L as qn,
  u as Qn,
  t as ge,
} from "./swiper-vue.d5cda4d1.js";
import { p as st, K as W } from "./pickAttrs.315d7ebe.js";
import { c as Wt, i as jt } from "./motion.d46d0bbf.js";
import {
  c as Zn,
  R as ut,
  o as Be,
  _ as Jn,
  a as kn,
  F as eo,
  g as to,
  d as no,
} from "./statusUtils.cee29603.js";
import { w as ve } from "./isVisible.48fa23e0.js";
import { s as he } from "./PortalWrapper.438f60b2.js";
import { u as xt, g as oo, a as lo } from "./compact-item.8109a539.js";
function $t(e, n) {
  const { key: o } = e;
  let t;
  return (
    "value" in e && ({ value: t } = e),
    o ?? (t !== void 0 ? t : `rc-index-key-${n}`)
  );
}
function Ut(e, n) {
  const { label: o, value: t, options: l } = e || {};
  return {
    label: o || (n ? "children" : "label"),
    value: t || "value",
    options: l || "options",
  };
}
function io(e) {
  let { fieldNames: n, childrenAsData: o } =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const t = [],
    { label: l, value: i, options: s } = Ut(n, !1);
  function a(d, r) {
    d.forEach((u) => {
      const p = u[l];
      if (r || !(s in u)) {
        const c = u[i];
        t.push({
          key: $t(u, t.length),
          groupOption: r,
          data: u,
          label: p,
          value: c,
        });
      } else {
        let c = p;
        c === void 0 && o && (c = u.label),
          t.push({ key: $t(u, t.length), group: !0, data: u, label: c }),
          a(u[s], !0);
      }
    });
  }
  return a(e, !1), t;
}
function ot(e) {
  const n = b({}, e);
  return (
    "props" in n ||
      Object.defineProperty(n, "props", {
        get() {
          return n;
        },
      }),
    n
  );
}
function ao(e, n) {
  if (!n || !n.length) return null;
  let o = !1;
  function t(i, s) {
    let [a, ...d] = s;
    if (!a) return [i];
    const r = i.split(a);
    return (
      (o = o || r.length > 1),
      r.reduce((u, p) => [...u, ...t(p, d)], []).filter((u) => u)
    );
  }
  const l = t(e, n);
  return o ? l : null;
}
var ro =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var o = {};
    for (var t in e)
      Object.prototype.hasOwnProperty.call(e, t) &&
        n.indexOf(t) < 0 &&
        (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, t = Object.getOwnPropertySymbols(e); l < t.length; l++)
        n.indexOf(t[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
          (o[t[l]] = e[t[l]]);
    return o;
  };
const so = (e) => {
    const n = e === !0 ? 0 : 1;
    return {
      bottomLeft: {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow: { adjustX: n, adjustY: 1 },
      },
      bottomRight: {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow: { adjustX: n, adjustY: 1 },
      },
      topLeft: {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow: { adjustX: n, adjustY: 1 },
      },
      topRight: {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow: { adjustX: n, adjustY: 1 },
      },
    };
  },
  uo = ue({
    name: "SelectTrigger",
    inheritAttrs: !1,
    props: {
      dropdownAlign: Object,
      visible: { type: Boolean, default: void 0 },
      disabled: { type: Boolean, default: void 0 },
      dropdownClassName: String,
      dropdownStyle: D.object,
      placement: String,
      empty: { type: Boolean, default: void 0 },
      prefixCls: String,
      popupClassName: String,
      animation: String,
      transitionName: String,
      getPopupContainer: Function,
      dropdownRender: Function,
      containerWidth: Number,
      dropdownMatchSelectWidth: D.oneOfType([Number, Boolean]).def(!0),
      popupElement: D.any,
      direction: String,
      getTriggerDOMNode: Function,
      onPopupVisibleChange: Function,
      onPopupMouseEnter: Function,
    },
    setup(e, n) {
      let { slots: o, attrs: t, expose: l } = n;
      const i = M(() => {
          const { dropdownMatchSelectWidth: a } = e;
          return so(a);
        }),
        s = me();
      return (
        l({ getPopupElement: () => s.value }),
        () => {
          const a = b(b({}, e), t),
            { empty: d = !1 } = a,
            r = ro(a, ["empty"]),
            {
              visible: u,
              dropdownAlign: p,
              prefixCls: c,
              popupElement: h,
              dropdownClassName: v,
              dropdownStyle: E,
              direction: N = "ltr",
              placement: C,
              dropdownMatchSelectWidth: T,
              containerWidth: L,
              dropdownRender: _,
              animation: m,
              transitionName: x,
              getPopupContainer: A,
              getTriggerDOMNode: V,
              onPopupVisibleChange: H,
              onPopupMouseEnter: j,
            } = r,
            U = `${c}-dropdown`;
          let Q = h;
          _ && (Q = _({ menuNode: h, props: e }));
          const ee = m ? `${U}-${m}` : x,
            Y = b({ minWidth: `${L}px` }, E);
          return (
            typeof T == "number"
              ? (Y.width = `${T}px`)
              : T && (Y.width = `${L}px`),
            y(
              jn,
              G(
                G({}, e),
                {},
                {
                  showAction: H ? ["click"] : [],
                  hideAction: H ? ["click"] : [],
                  popupPlacement:
                    C || (N === "rtl" ? "bottomRight" : "bottomLeft"),
                  builtinPlacements: i.value,
                  prefixCls: U,
                  popupTransitionName: ee,
                  popupAlign: p,
                  popupVisible: u,
                  getPopupContainer: A,
                  popupClassName: re(v, { [`${U}-empty`]: d }),
                  popupStyle: Y,
                  getTriggerDOMNode: V,
                  onPopupVisibleChange: H,
                }
              ),
              {
                default: o.default,
                popup: () => y("div", { ref: s, onMouseenter: j }, [Q]),
              }
            )
          );
        }
      );
    },
  }),
  co = uo,
  Ke = (e, n) => {
    let { slots: o } = n;
    var t;
    const {
      class: l,
      customizeIcon: i,
      customizeIconProps: s,
      onMousedown: a,
      onClick: d,
    } = e;
    let r;
    return (
      typeof i == "function" ? (r = i(s)) : (r = i),
      y(
        "span",
        {
          class: l,
          onMousedown: (u) => {
            u.preventDefault(), a && a(u);
          },
          style: { userSelect: "none", WebkitUserSelect: "none" },
          unselectable: "on",
          onClick: d,
          "aria-hidden": !0,
        },
        [
          r !== void 0
            ? r
            : y("span", { class: l.split(/\s+/).map((u) => `${u}-icon`) }, [
                (t = o.default) === null || t === void 0 ? void 0 : t.call(o),
              ]),
        ]
      )
    );
  };
Ke.inheritAttrs = !1;
Ke.displayName = "TransBtn";
Ke.props = {
  class: String,
  customizeIcon: D.any,
  customizeIconProps: D.any,
  onMousedown: Function,
  onClick: Function,
};
const He = Ke,
  fo = {
    inputRef: D.any,
    prefixCls: String,
    id: String,
    inputElement: D.VueNode,
    disabled: { type: Boolean, default: void 0 },
    autofocus: { type: Boolean, default: void 0 },
    autocomplete: String,
    editable: { type: Boolean, default: void 0 },
    activeDescendantId: String,
    value: String,
    open: { type: Boolean, default: void 0 },
    tabindex: D.oneOfType([D.number, D.string]),
    attrs: D.object,
    onKeydown: { type: Function },
    onMousedown: { type: Function },
    onChange: { type: Function },
    onPaste: { type: Function },
    onCompositionstart: { type: Function },
    onCompositionend: { type: Function },
    onFocus: { type: Function },
    onBlur: { type: Function },
  },
  po = ue({
    compatConfig: { MODE: 3 },
    name: "Input",
    inheritAttrs: !1,
    props: fo,
    setup(e) {
      let n = null;
      const o = Pe("VCSelectContainerEvent");
      return () => {
        var t;
        const {
          prefixCls: l,
          id: i,
          inputElement: s,
          disabled: a,
          tabindex: d,
          autofocus: r,
          autocomplete: u,
          editable: p,
          activeDescendantId: c,
          value: h,
          onKeydown: v,
          onMousedown: E,
          onChange: N,
          onPaste: C,
          onCompositionstart: T,
          onCompositionend: L,
          onFocus: _,
          onBlur: m,
          open: x,
          inputRef: A,
          attrs: V,
        } = e;
        let H = s || Un(y("input", null, null), [[Zn]]);
        const j = H.props || {},
          {
            onKeydown: U,
            onInput: Q,
            onFocus: ee,
            onBlur: Y,
            onMousedown: P,
            onCompositionstart: K,
            onCompositionend: X,
            style: g,
          } = j;
        return (
          (H = Wt(
            H,
            b(
              b(
                b(
                  b(b({ type: "search" }, j), {
                    id: i,
                    ref: A,
                    disabled: a,
                    tabindex: d,
                    autocomplete: u || "off",
                    autofocus: r,
                    class: re(
                      `${l}-selection-search-input`,
                      (t = H == null ? void 0 : H.props) === null ||
                        t === void 0
                        ? void 0
                        : t.class
                    ),
                    role: "combobox",
                    "aria-expanded": x,
                    "aria-haspopup": "listbox",
                    "aria-owns": `${i}_list`,
                    "aria-autocomplete": "list",
                    "aria-controls": `${i}_list`,
                    "aria-activedescendant": c,
                  }),
                  V
                ),
                {
                  value: p ? h : "",
                  readonly: !p,
                  unselectable: p ? null : "on",
                  style: b(b({}, g), { opacity: p ? null : 0 }),
                  onKeydown: ($) => {
                    v($), U && U($);
                  },
                  onMousedown: ($) => {
                    E($), P && P($);
                  },
                  onInput: ($) => {
                    N($), Q && Q($);
                  },
                  onCompositionstart($) {
                    T($), K && K($);
                  },
                  onCompositionend($) {
                    L($), X && X($);
                  },
                  onPaste: C,
                  onFocus: function () {
                    clearTimeout(n),
                      ee && ee(arguments.length <= 0 ? void 0 : arguments[0]),
                      _ && _(arguments.length <= 0 ? void 0 : arguments[0]),
                      o == null ||
                        o.focus(arguments.length <= 0 ? void 0 : arguments[0]);
                  },
                  onBlur: function () {
                    for (
                      var $ = arguments.length, J = new Array($), Z = 0;
                      Z < $;
                      Z++
                    )
                      J[Z] = arguments[Z];
                    n = setTimeout(() => {
                      Y && Y(J[0]), m && m(J[0]), o == null || o.blur(J[0]);
                    }, 100);
                  },
                }
              ),
              H.type === "textarea" ? {} : { type: "search" }
            ),
            !0,
            !0
          )),
          H
        );
      };
    },
  }),
  Yt = po,
  Gt = Symbol("OverflowContextProviderKey"),
  lt = ue({
    compatConfig: { MODE: 3 },
    name: "OverflowContextProvider",
    inheritAttrs: !1,
    props: { value: { type: Object } },
    setup(e, n) {
      let { slots: o } = n;
      return (
        Ae(
          Gt,
          M(() => e.value)
        ),
        () => {
          var t;
          return (t = o.default) === null || t === void 0 ? void 0 : t.call(o);
        }
      );
    },
  }),
  mo = () =>
    Pe(
      Gt,
      M(() => null)
    );
var vo =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var o = {};
    for (var t in e)
      Object.prototype.hasOwnProperty.call(e, t) &&
        n.indexOf(t) < 0 &&
        (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, t = Object.getOwnPropertySymbols(e); l < t.length; l++)
        n.indexOf(t[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
          (o[t[l]] = e[t[l]]);
    return o;
  };
const Ie = void 0,
  _e = ue({
    compatConfig: { MODE: 3 },
    name: "Item",
    props: {
      prefixCls: String,
      item: D.any,
      renderItem: Function,
      responsive: Boolean,
      itemKey: { type: [String, Number] },
      registerSize: Function,
      display: Boolean,
      order: Number,
      component: D.any,
      invalidate: Boolean,
    },
    setup(e, n) {
      let { slots: o, expose: t } = n;
      const l = M(() => e.responsive && !e.display),
        i = me();
      t({ itemNodeRef: i });
      function s(a) {
        e.registerSize(e.itemKey, a);
      }
      return (
        Kt(() => {
          s(null);
        }),
        () => {
          var a;
          const {
              prefixCls: d,
              invalidate: r,
              item: u,
              renderItem: p,
              responsive: c,
              registerSize: h,
              itemKey: v,
              display: E,
              order: N,
              component: C = "div",
            } = e,
            T = vo(e, [
              "prefixCls",
              "invalidate",
              "item",
              "renderItem",
              "responsive",
              "registerSize",
              "itemKey",
              "display",
              "order",
              "component",
            ]),
            L = (a = o.default) === null || a === void 0 ? void 0 : a.call(o),
            _ = p && u !== Ie ? p(u) : L;
          let m;
          r ||
            (m = {
              opacity: l.value ? 0 : 1,
              height: l.value ? 0 : Ie,
              overflowY: l.value ? "hidden" : Ie,
              order: c ? N : Ie,
              pointerEvents: l.value ? "none" : Ie,
              position: l.value ? "absolute" : Ie,
            });
          const x = {};
          return (
            l.value && (x["aria-hidden"] = !0),
            y(
              ut,
              {
                disabled: !c,
                onResize: (A) => {
                  let { offsetWidth: V } = A;
                  s(V);
                },
              },
              {
                default: () =>
                  y(
                    C,
                    G(
                      G(G({ class: re(!r && d), style: m }, x), T),
                      {},
                      { ref: i }
                    ),
                    { default: () => [_] }
                  ),
              }
            )
          );
        }
      );
    },
  });
var Qe =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var o = {};
    for (var t in e)
      Object.prototype.hasOwnProperty.call(e, t) &&
        n.indexOf(t) < 0 &&
        (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, t = Object.getOwnPropertySymbols(e); l < t.length; l++)
        n.indexOf(t[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
          (o[t[l]] = e[t[l]]);
    return o;
  };
const go = ue({
  compatConfig: { MODE: 3 },
  name: "RawItem",
  inheritAttrs: !1,
  props: {
    component: D.any,
    title: D.any,
    id: String,
    onMouseenter: { type: Function },
    onMouseleave: { type: Function },
    onClick: { type: Function },
    onKeydown: { type: Function },
    onFocus: { type: Function },
    role: String,
    tabindex: Number,
  },
  setup(e, n) {
    let { slots: o, attrs: t } = n;
    const l = mo();
    return () => {
      var i;
      if (!l.value) {
        const { component: p = "div" } = e,
          c = Qe(e, ["component"]);
        return y(p, G(G({}, c), t), {
          default: () => [
            (i = o.default) === null || i === void 0 ? void 0 : i.call(o),
          ],
        });
      }
      const s = l.value,
        { className: a } = s,
        d = Qe(s, ["className"]),
        { class: r } = t,
        u = Qe(t, ["class"]);
      return y(
        lt,
        { value: null },
        { default: () => [y(_e, G(G(G({ class: re(a, r) }, d), u), e), o)] }
      );
    };
  },
});
var ho =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var o = {};
    for (var t in e)
      Object.prototype.hasOwnProperty.call(e, t) &&
        n.indexOf(t) < 0 &&
        (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, t = Object.getOwnPropertySymbols(e); l < t.length; l++)
        n.indexOf(t[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
          (o[t[l]] = e[t[l]]);
    return o;
  };
const Xt = "responsive",
  qt = "invalidate";
function bo(e) {
  return `+ ${e.length} ...`;
}
const yo = () => ({
    id: String,
    prefixCls: String,
    data: Array,
    itemKey: [String, Number, Function],
    itemWidth: { type: Number, default: 10 },
    renderItem: Function,
    renderRawItem: Function,
    maxCount: [Number, String],
    renderRest: Function,
    renderRawRest: Function,
    suffix: D.any,
    component: String,
    itemComponent: D.any,
    onVisibleChange: Function,
    ssr: String,
    onMousedown: Function,
  }),
  We = ue({
    name: "Overflow",
    inheritAttrs: !1,
    props: yo(),
    emits: ["visibleChange"],
    setup(e, n) {
      let { attrs: o, emit: t, slots: l } = n;
      const i = M(() => e.ssr === "full"),
        s = q(null),
        a = M(() => s.value || 0),
        d = q(new Map()),
        r = q(0),
        u = q(0),
        p = q(0),
        c = q(null),
        h = q(null),
        v = M(() =>
          h.value === null && i.value ? Number.MAX_SAFE_INTEGER : h.value || 0
        ),
        E = q(!1),
        N = M(() => `${e.prefixCls}-item`),
        C = M(() => Math.max(r.value, u.value)),
        T = M(() => !!(e.data.length && e.maxCount === Xt)),
        L = M(() => e.maxCount === qt),
        _ = M(
          () =>
            T.value ||
            (typeof e.maxCount == "number" && e.data.length > e.maxCount)
        ),
        m = M(() => {
          let P = e.data;
          return (
            T.value
              ? s.value === null && i.value
                ? (P = e.data)
                : (P = e.data.slice(
                    0,
                    Math.min(e.data.length, a.value / e.itemWidth)
                  ))
              : typeof e.maxCount == "number" &&
                (P = e.data.slice(0, e.maxCount)),
            P
          );
        }),
        x = M(() =>
          T.value ? e.data.slice(v.value + 1) : e.data.slice(m.value.length)
        ),
        A = (P, K) => {
          var X;
          return typeof e.itemKey == "function"
            ? e.itemKey(P)
            : (X = e.itemKey && (P == null ? void 0 : P[e.itemKey])) !== null &&
              X !== void 0
            ? X
            : K;
        },
        V = M(() => e.renderItem || ((P) => P)),
        H = (P, K) => {
          (h.value = P),
            K || ((E.value = P < e.data.length - 1), t("visibleChange", P));
        },
        j = (P, K) => {
          s.value = K.clientWidth;
        },
        U = (P, K) => {
          const X = new Map(d.value);
          K === null ? X.delete(P) : X.set(P, K), (d.value = X);
        },
        Q = (P, K) => {
          (r.value = u.value), (u.value = K);
        },
        ee = (P, K) => {
          p.value = K;
        },
        Y = (P) => d.value.get(A(m.value[P], P));
      return (
        ie([a, d, u, p, () => e.itemKey, m], () => {
          if (a.value && C.value && m.value) {
            let P = p.value;
            const K = m.value.length,
              X = K - 1;
            if (!K) {
              H(0), (c.value = null);
              return;
            }
            for (let g = 0; g < K; g += 1) {
              const $ = Y(g);
              if ($ === void 0) {
                H(g - 1, !0);
                break;
              }
              if (
                ((P += $),
                (X === 0 && P <= a.value) ||
                  (g === X - 1 && P + Y(X) <= a.value))
              ) {
                H(X), (c.value = null);
                break;
              } else if (P + C.value > a.value) {
                H(g - 1), (c.value = P - $ - p.value + u.value);
                break;
              }
            }
            e.suffix && Y(0) + p.value > a.value && (c.value = null);
          }
        }),
        () => {
          const P = E.value && !!x.value.length,
            {
              itemComponent: K,
              renderRawItem: X,
              renderRawRest: g,
              renderRest: $,
              prefixCls: J = "rc-overflow",
              suffix: Z,
              component: z = "div",
              id: le,
              onMousedown: ne,
            } = e,
            { class: ae, style: ce } = o,
            I = ho(o, ["class", "style"]);
          let O = {};
          c.value !== null &&
            T.value &&
            (O = { position: "absolute", left: `${c.value}px`, top: 0 });
          const f = {
              prefixCls: N.value,
              responsive: T.value,
              component: K,
              invalidate: L.value,
            },
            S = X
              ? (B, te) => {
                  const k = A(B, te);
                  return y(
                    lt,
                    {
                      key: k,
                      value: b(b({}, f), {
                        order: te,
                        item: B,
                        itemKey: k,
                        registerSize: U,
                        display: te <= v.value,
                      }),
                    },
                    { default: () => [X(B, te)] }
                  );
                }
              : (B, te) => {
                  const k = A(B, te);
                  return y(
                    _e,
                    G(
                      G({}, f),
                      {},
                      {
                        order: te,
                        key: k,
                        item: B,
                        renderItem: V.value,
                        itemKey: k,
                        registerSize: U,
                        display: te <= v.value,
                      }
                    ),
                    null
                  );
                };
          let w = () => null;
          const F = {
            order: P ? v.value : Number.MAX_SAFE_INTEGER,
            className: `${N.value} ${N.value}-rest`,
            registerSize: Q,
            display: P,
          };
          if (g)
            g &&
              (w = () =>
                y(
                  lt,
                  { value: b(b({}, f), F) },
                  { default: () => [g(x.value)] }
                ));
          else {
            const B = $ || bo;
            w = () =>
              y(_e, G(G({}, f), F), {
                default: () => (typeof B == "function" ? B(x.value) : B),
              });
          }
          const R = () => {
            var B;
            return y(
              z,
              G(
                {
                  id: le,
                  class: re(!L.value && J, ae),
                  style: ce,
                  onMousedown: ne,
                },
                I
              ),
              {
                default: () => [
                  m.value.map(S),
                  _.value ? w() : null,
                  Z &&
                    y(
                      _e,
                      G(
                        G({}, f),
                        {},
                        {
                          order: v.value,
                          class: `${N.value}-suffix`,
                          registerSize: ee,
                          display: !0,
                          style: O,
                        }
                      ),
                      { default: () => Z }
                    ),
                  (B = l.default) === null || B === void 0 ? void 0 : B.call(l),
                ],
              }
            );
          };
          return y(ut, { disabled: !T.value, onResize: j }, { default: R });
        }
      );
    },
  });
We.Item = go;
We.RESPONSIVE = Xt;
We.INVALIDATE = qt;
const So = We,
  wo = Symbol("TreeSelectLegacyContextPropsKey");
function ct() {
  return Pe(wo, {});
}
const Co = {
    id: String,
    prefixCls: String,
    values: D.array,
    open: { type: Boolean, default: void 0 },
    searchValue: String,
    inputRef: D.any,
    placeholder: D.any,
    disabled: { type: Boolean, default: void 0 },
    mode: String,
    showSearch: { type: Boolean, default: void 0 },
    autofocus: { type: Boolean, default: void 0 },
    autocomplete: String,
    activeDescendantId: String,
    tabindex: D.oneOfType([D.number, D.string]),
    removeIcon: D.any,
    choiceTransitionName: String,
    maxTagCount: D.oneOfType([D.number, D.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: D.any.def(() => (e) => `+ ${e.length} ...`),
    tagRender: Function,
    onToggleOpen: { type: Function },
    onRemove: Function,
    onInputChange: Function,
    onInputPaste: Function,
    onInputKeyDown: Function,
    onInputMouseDown: Function,
    onInputCompositionStart: Function,
    onInputCompositionEnd: Function,
  },
  Tt = (e) => {
    e.preventDefault(), e.stopPropagation();
  },
  Io = ue({
    name: "MultipleSelectSelector",
    inheritAttrs: !1,
    props: Co,
    setup(e) {
      const n = q(),
        o = q(0),
        t = q(!1),
        l = ct(),
        i = M(() => `${e.prefixCls}-selection`),
        s = M(() => (e.open || e.mode === "tags" ? e.searchValue : "")),
        a = M(() => e.mode === "tags" || (e.showSearch && (e.open || t.value)));
      ye(() => {
        ie(
          s,
          () => {
            o.value = n.value.scrollWidth;
          },
          { flush: "post", immediate: !0 }
        );
      });
      function d(c, h, v, E, N) {
        return y(
          "span",
          {
            class: re(`${i.value}-item`, { [`${i.value}-item-disabled`]: v }),
            title:
              typeof c == "string" || typeof c == "number"
                ? c.toString()
                : void 0,
          },
          [
            y("span", { class: `${i.value}-item-content` }, [h]),
            E &&
              y(
                He,
                {
                  class: `${i.value}-item-remove`,
                  onMousedown: Tt,
                  onClick: N,
                  customizeIcon: e.removeIcon,
                },
                { default: () => [nt("×")] }
              ),
          ]
        );
      }
      function r(c, h, v, E, N, C) {
        var T;
        const L = (m) => {
          Tt(m), e.onToggleOpen(!open);
        };
        let _ = C;
        return (
          l.keyEntities &&
            (_ =
              ((T = l.keyEntities[c]) === null || T === void 0
                ? void 0
                : T.node) || {}),
          y("span", { key: c, onMousedown: L }, [
            e.tagRender({
              label: h,
              value: c,
              disabled: v,
              closable: E,
              onClose: N,
              option: _,
            }),
          ])
        );
      }
      function u(c) {
        const { disabled: h, label: v, value: E, option: N } = c,
          C = !e.disabled && !h;
        let T = v;
        if (
          typeof e.maxTagTextLength == "number" &&
          (typeof v == "string" || typeof v == "number")
        ) {
          const _ = String(T);
          _.length > e.maxTagTextLength &&
            (T = `${_.slice(0, e.maxTagTextLength)}...`);
        }
        const L = (_) => {
          var m;
          _ && _.stopPropagation(),
            (m = e.onRemove) === null || m === void 0 || m.call(e, c);
        };
        return typeof e.tagRender == "function"
          ? r(E, T, h, C, L, N)
          : d(v, T, h, C, L);
      }
      function p(c) {
        const { maxTagPlaceholder: h = (E) => `+ ${E.length} ...` } = e,
          v = typeof h == "function" ? h(c) : h;
        return d(v, v, !1);
      }
      return () => {
        const {
            id: c,
            prefixCls: h,
            values: v,
            open: E,
            inputRef: N,
            placeholder: C,
            disabled: T,
            autofocus: L,
            autocomplete: _,
            activeDescendantId: m,
            tabindex: x,
            onInputChange: A,
            onInputPaste: V,
            onInputKeyDown: H,
            onInputMouseDown: j,
            onInputCompositionStart: U,
            onInputCompositionEnd: Q,
          } = e,
          ee = y(
            "div",
            {
              class: `${i.value}-search`,
              style: { width: o.value + "px" },
              key: "input",
            },
            [
              y(
                Yt,
                {
                  inputRef: N,
                  open: E,
                  prefixCls: h,
                  id: c,
                  inputElement: null,
                  disabled: T,
                  autofocus: L,
                  autocomplete: _,
                  editable: a.value,
                  activeDescendantId: m,
                  value: s.value,
                  onKeydown: H,
                  onMousedown: j,
                  onChange: A,
                  onPaste: V,
                  onCompositionstart: U,
                  onCompositionend: Q,
                  tabindex: x,
                  attrs: st(e, !0),
                  onFocus: () => (t.value = !0),
                  onBlur: () => (t.value = !1),
                },
                null
              ),
              y(
                "span",
                {
                  ref: n,
                  class: `${i.value}-search-mirror`,
                  "aria-hidden": !0,
                },
                [s.value, nt(" ")]
              ),
            ]
          ),
          Y = y(
            So,
            {
              prefixCls: `${i.value}-overflow`,
              data: v,
              renderItem: u,
              renderRest: p,
              suffix: ee,
              itemKey: "key",
              maxCount: e.maxTagCount,
              key: "overflow",
            },
            null
          );
        return y(Ee, null, [
          Y,
          !v.length &&
            !s.value &&
            y("span", { class: `${i.value}-placeholder` }, [C]),
        ]);
      };
    },
  }),
  Oo = Io,
  xo = {
    inputElement: D.any,
    id: String,
    prefixCls: String,
    values: D.array,
    open: { type: Boolean, default: void 0 },
    searchValue: String,
    inputRef: D.any,
    placeholder: D.any,
    disabled: { type: Boolean, default: void 0 },
    mode: String,
    showSearch: { type: Boolean, default: void 0 },
    autofocus: { type: Boolean, default: void 0 },
    autocomplete: String,
    activeDescendantId: String,
    tabindex: D.oneOfType([D.number, D.string]),
    activeValue: String,
    backfill: { type: Boolean, default: void 0 },
    optionLabelRender: Function,
    onInputChange: Function,
    onInputPaste: Function,
    onInputKeyDown: Function,
    onInputMouseDown: Function,
    onInputCompositionStart: Function,
    onInputCompositionEnd: Function,
  },
  dt = ue({
    name: "SingleSelector",
    setup(e) {
      const n = q(!1),
        o = M(() => e.mode === "combobox"),
        t = M(() => o.value || e.showSearch),
        l = M(() => {
          let r = e.searchValue || "";
          return o.value && e.activeValue && !n.value && (r = e.activeValue), r;
        }),
        i = ct();
      ie(
        [o, () => e.activeValue],
        () => {
          o.value && (n.value = !1);
        },
        { immediate: !0 }
      );
      const s = M(() =>
          e.mode !== "combobox" && !e.open && !e.showSearch ? !1 : !!l.value
        ),
        a = M(() => {
          const r = e.values[0];
          return r && (typeof r.label == "string" || typeof r.label == "number")
            ? r.label.toString()
            : void 0;
        }),
        d = () => {
          if (e.values[0]) return null;
          const r = s.value ? { visibility: "hidden" } : void 0;
          return y(
            "span",
            { class: `${e.prefixCls}-selection-placeholder`, style: r },
            [e.placeholder]
          );
        };
      return () => {
        var r, u, p, c;
        const {
            inputElement: h,
            prefixCls: v,
            id: E,
            values: N,
            inputRef: C,
            disabled: T,
            autofocus: L,
            autocomplete: _,
            activeDescendantId: m,
            open: x,
            tabindex: A,
            optionLabelRender: V,
            onInputKeyDown: H,
            onInputMouseDown: j,
            onInputChange: U,
            onInputPaste: Q,
            onInputCompositionStart: ee,
            onInputCompositionEnd: Y,
          } = e,
          P = N[0];
        let K = null;
        if (P && i.customSlots) {
          const X = (r = P.key) !== null && r !== void 0 ? r : P.value,
            g =
              ((u = i.keyEntities[X]) === null || u === void 0
                ? void 0
                : u.node) || {};
          (K =
            i.customSlots[
              (p = g.slots) === null || p === void 0 ? void 0 : p.title
            ] ||
            i.customSlots.title ||
            P.label),
            typeof K == "function" && (K = K(g));
        } else K = V && P ? V(P.option) : P == null ? void 0 : P.label;
        return y(Ee, null, [
          y("span", { class: `${v}-selection-search` }, [
            y(
              Yt,
              {
                inputRef: C,
                prefixCls: v,
                id: E,
                open: x,
                inputElement: h,
                disabled: T,
                autofocus: L,
                autocomplete: _,
                editable: t.value,
                activeDescendantId: m,
                value: l.value,
                onKeydown: H,
                onMousedown: j,
                onChange: (X) => {
                  (n.value = !0), U(X);
                },
                onPaste: Q,
                onCompositionstart: ee,
                onCompositionend: Y,
                tabindex: A,
                attrs: st(e, !0),
              },
              null
            ),
          ]),
          !o.value &&
            P &&
            !s.value &&
            y("span", { class: `${v}-selection-item`, title: a.value }, [
              y(
                Ee,
                { key: (c = P.key) !== null && c !== void 0 ? c : P.value },
                [K]
              ),
            ]),
          d(),
        ]);
      };
    },
  });
dt.props = xo;
dt.inheritAttrs = !1;
const $o = dt;
function To(e) {
  return ![
    W.ESC,
    W.SHIFT,
    W.BACKSPACE,
    W.TAB,
    W.WIN_KEY,
    W.ALT,
    W.META,
    W.WIN_KEY_RIGHT,
    W.CTRL,
    W.SEMICOLON,
    W.EQUALS,
    W.CAPS_LOCK,
    W.CONTEXT_MENU,
    W.F1,
    W.F2,
    W.F3,
    W.F4,
    W.F5,
    W.F6,
    W.F7,
    W.F8,
    W.F9,
    W.F10,
    W.F11,
    W.F12,
  ].includes(e);
}
function Qt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
    n = null,
    o;
  Fe(() => {
    clearTimeout(o);
  });
  function t(l) {
    (l || n === null) && (n = l),
      clearTimeout(o),
      (o = setTimeout(() => {
        n = null;
      }, e));
  }
  return [() => n, t];
}
function Re() {
  const e = (n) => {
    e.current = n;
  };
  return e;
}
const Mo = ue({
    name: "Selector",
    inheritAttrs: !1,
    props: {
      id: String,
      prefixCls: String,
      showSearch: { type: Boolean, default: void 0 },
      open: { type: Boolean, default: void 0 },
      values: D.array,
      multiple: { type: Boolean, default: void 0 },
      mode: String,
      searchValue: String,
      activeValue: String,
      inputElement: D.any,
      autofocus: { type: Boolean, default: void 0 },
      activeDescendantId: String,
      tabindex: D.oneOfType([D.number, D.string]),
      disabled: { type: Boolean, default: void 0 },
      placeholder: D.any,
      removeIcon: D.any,
      maxTagCount: D.oneOfType([D.number, D.string]),
      maxTagTextLength: Number,
      maxTagPlaceholder: D.any,
      tagRender: Function,
      optionLabelRender: Function,
      tokenWithEnter: { type: Boolean, default: void 0 },
      choiceTransitionName: String,
      onToggleOpen: { type: Function },
      onSearch: Function,
      onSearchSubmit: Function,
      onRemove: Function,
      onInputKeyDown: { type: Function },
      domRef: Function,
    },
    setup(e, n) {
      let { expose: o } = n;
      const t = Re();
      let l = !1;
      const [i, s] = Qt(0),
        a = (C) => {
          const { which: T } = C;
          (T === W.UP || T === W.DOWN) && C.preventDefault(),
            e.onInputKeyDown && e.onInputKeyDown(C),
            T === W.ENTER &&
              e.mode === "tags" &&
              !l &&
              !e.open &&
              e.onSearchSubmit(C.target.value),
            To(T) && e.onToggleOpen(!0);
        },
        d = () => {
          s(!0);
        };
      let r = null;
      const u = (C) => {
          e.onSearch(C, !0, l) !== !1 && e.onToggleOpen(!0);
        },
        p = () => {
          l = !0;
        },
        c = (C) => {
          (l = !1), e.mode !== "combobox" && u(C.target.value);
        },
        h = (C) => {
          let {
            target: { value: T },
          } = C;
          if (e.tokenWithEnter && r && /[\r\n]/.test(r)) {
            const L = r
              .replace(/[\r\n]+$/, "")
              .replace(/\r\n/g, " ")
              .replace(/[\r\n]/g, " ");
            T = T.replace(L, r);
          }
          (r = null), u(T);
        },
        v = (C) => {
          const { clipboardData: T } = C;
          r = T.getData("text");
        },
        E = (C) => {
          let { target: T } = C;
          T !== t.current &&
            (document.body.style.msTouchAction !== void 0
              ? setTimeout(() => {
                  t.current.focus();
                })
              : t.current.focus());
        },
        N = (C) => {
          const T = i();
          C.target !== t.current && !T && C.preventDefault(),
            ((e.mode !== "combobox" && (!e.showSearch || !T)) || !e.open) &&
              (e.open && e.onSearch("", !0, !1), e.onToggleOpen());
        };
      return (
        o({
          focus: () => {
            t.current.focus();
          },
          blur: () => {
            t.current.blur();
          },
        }),
        () => {
          const { prefixCls: C, domRef: T, mode: L } = e,
            _ = {
              inputRef: t,
              onInputKeyDown: a,
              onInputMouseDown: d,
              onInputChange: h,
              onInputPaste: v,
              onInputCompositionStart: p,
              onInputCompositionEnd: c,
            },
            m =
              L === "multiple" || L === "tags"
                ? y(Oo, G(G({}, e), _), null)
                : y($o, G(G({}, e), _), null);
          return y(
            "div",
            { ref: T, class: `${C}-selector`, onClick: E, onMousedown: N },
            [m]
          );
        }
      );
    },
  }),
  Eo = Mo;
function Ro(e, n, o) {
  function t(l) {
    var i, s, a;
    let d = l.target;
    d.shadowRoot && l.composed && (d = l.composedPath()[0] || d);
    const r = [
      (i = e[0]) === null || i === void 0 ? void 0 : i.value,
      (a = (s = e[1]) === null || s === void 0 ? void 0 : s.value) === null ||
      a === void 0
        ? void 0
        : a.getPopupElement(),
    ];
    n.value && r.every((u) => u && !u.contains(d) && u !== d) && o(!1);
  }
  ye(() => {
    window.addEventListener("mousedown", t);
  }),
    Fe(() => {
      window.removeEventListener("mousedown", t);
    });
}
function Po() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  const n = q(!1);
  let o;
  const t = () => {
    clearTimeout(o);
  };
  return (
    ye(() => {
      t();
    }),
    [
      n,
      (i, s) => {
        t(),
          (o = setTimeout(() => {
            (n.value = i), s && s();
          }, e));
      },
      t,
    ]
  );
}
const Zt = Symbol("BaseSelectContextKey");
function Fo(e) {
  return Ae(Zt, e);
}
function Do() {
  return Pe(Zt, {});
}
const No = () => {
  if (typeof navigator > "u" || typeof window > "u") return !1;
  const e = navigator.userAgent || navigator.vendor || window.opera;
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      e
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
      e == null ? void 0 : e.substr(0, 4)
    )
  );
};
var Vo =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var o = {};
    for (var t in e)
      Object.prototype.hasOwnProperty.call(e, t) &&
        n.indexOf(t) < 0 &&
        (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, t = Object.getOwnPropertySymbols(e); l < t.length; l++)
        n.indexOf(t[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
          (o[t[l]] = e[t[l]]);
    return o;
  };
const _o = [
    "value",
    "onChange",
    "removeIcon",
    "placeholder",
    "autofocus",
    "maxTagCount",
    "maxTagTextLength",
    "maxTagPlaceholder",
    "choiceTransitionName",
    "onInputKeyDown",
    "onPopupScroll",
    "tabindex",
    "OptionList",
    "notFoundContent",
  ],
  Lo = () => ({
    prefixCls: String,
    id: String,
    omitDomProps: Array,
    displayValues: Array,
    onDisplayValuesChange: Function,
    activeValue: String,
    activeDescendantId: String,
    onActiveValueChange: Function,
    searchValue: String,
    onSearch: Function,
    onSearchSplit: Function,
    maxLength: Number,
    OptionList: D.any,
    emptyOptions: Boolean,
  }),
  Jt = () => ({
    showSearch: { type: Boolean, default: void 0 },
    tagRender: { type: Function },
    optionLabelRender: { type: Function },
    direction: { type: String },
    tabindex: Number,
    autofocus: Boolean,
    notFoundContent: D.any,
    placeholder: D.any,
    onClear: Function,
    choiceTransitionName: String,
    mode: String,
    disabled: { type: Boolean, default: void 0 },
    loading: { type: Boolean, default: void 0 },
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: void 0 },
    onDropdownVisibleChange: { type: Function },
    getInputElement: { type: Function },
    getRawInputElement: { type: Function },
    maxTagTextLength: Number,
    maxTagCount: { type: [String, Number] },
    maxTagPlaceholder: D.any,
    tokenSeparators: { type: Array },
    allowClear: { type: Boolean, default: void 0 },
    showArrow: { type: Boolean, default: void 0 },
    inputIcon: D.any,
    clearIcon: D.any,
    removeIcon: D.any,
    animation: String,
    transitionName: String,
    dropdownStyle: { type: Object },
    dropdownClassName: String,
    dropdownMatchSelectWidth: { type: [Boolean, Number], default: void 0 },
    dropdownRender: { type: Function },
    dropdownAlign: Object,
    placement: { type: String },
    getPopupContainer: { type: Function },
    showAction: { type: Array },
    onBlur: { type: Function },
    onFocus: { type: Function },
    onKeyup: Function,
    onKeydown: Function,
    onMousedown: Function,
    onPopupScroll: Function,
    onInputKeyDown: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
  }),
  Ho = () => b(b({}, Lo()), Jt());
function kt(e) {
  return e === "tags" || e === "multiple";
}
const Ao = ue({
    compatConfig: { MODE: 3 },
    name: "BaseSelect",
    inheritAttrs: !1,
    props: it(Ho(), { showAction: [], notFoundContent: "Not Found" }),
    setup(e, n) {
      let { attrs: o, expose: t, slots: l } = n;
      const i = M(() => kt(e.mode)),
        s = M(() =>
          e.showSearch !== void 0
            ? e.showSearch
            : i.value || e.mode === "combobox"
        ),
        a = q(!1);
      ye(() => {
        a.value = No();
      });
      const d = ct(),
        r = q(null),
        u = Re(),
        p = q(null),
        c = q(null),
        h = q(null),
        [v, E, N] = Po();
      t({
        focus: () => {
          var I;
          (I = c.value) === null || I === void 0 || I.focus();
        },
        blur: () => {
          var I;
          (I = c.value) === null || I === void 0 || I.blur();
        },
        scrollTo: (I) => {
          var O;
          return (O = h.value) === null || O === void 0
            ? void 0
            : O.scrollTo(I);
        },
      });
      const L = M(() => {
          var I;
          if (e.mode !== "combobox") return e.searchValue;
          const O =
            (I = e.displayValues[0]) === null || I === void 0
              ? void 0
              : I.value;
          return typeof O == "string" || typeof O == "number" ? String(O) : "";
        }),
        _ = e.open !== void 0 ? e.open : e.defaultOpen,
        m = q(_),
        x = q(_),
        A = (I) => {
          (m.value = e.open !== void 0 ? e.open : I), (x.value = m.value);
        };
      ie(
        () => e.open,
        () => {
          A(e.open);
        }
      );
      const V = M(() => !e.notFoundContent && e.emptyOptions);
      xe(() => {
        (x.value = m.value),
          (e.disabled || (V.value && x.value && e.mode === "combobox")) &&
            (x.value = !1);
      });
      const H = M(() => (V.value ? !1 : x.value)),
        j = (I) => {
          const O = I !== void 0 ? I : !x.value;
          m.value !== O &&
            !e.disabled &&
            (A(O), e.onDropdownVisibleChange && e.onDropdownVisibleChange(O));
        },
        U = M(() =>
          (e.tokenSeparators || []).some((I) =>
            [
              `
`,
              `\r
`,
            ].includes(I)
          )
        ),
        Q = (I, O, f) => {
          var S, w;
          let F = !0,
            R = I;
          (S = e.onActiveValueChange) === null ||
            S === void 0 ||
            S.call(e, null);
          const B = f ? null : ao(I, e.tokenSeparators);
          return (
            e.mode !== "combobox" &&
              B &&
              ((R = ""),
              (w = e.onSearchSplit) === null || w === void 0 || w.call(e, B),
              j(!1),
              (F = !1)),
            e.onSearch &&
              L.value !== R &&
              e.onSearch(R, { source: O ? "typing" : "effect" }),
            F
          );
        },
        ee = (I) => {
          var O;
          !I ||
            !I.trim() ||
            (O = e.onSearch) === null ||
            O === void 0 ||
            O.call(e, I, { source: "submit" });
        };
      ie(
        x,
        () => {
          !x.value && !i.value && e.mode !== "combobox" && Q("", !1, !1);
        },
        { immediate: !0, flush: "post" }
      ),
        ie(
          () => e.disabled,
          () => {
            m.value && e.disabled && A(!1);
          },
          { immediate: !0 }
        );
      const [Y, P] = Qt(),
        K = function (I) {
          var O;
          const f = Y(),
            { which: S } = I;
          if (
            (S === W.ENTER &&
              (e.mode !== "combobox" && I.preventDefault(), x.value || j(!0)),
            P(!!L.value),
            S === W.BACKSPACE &&
              !f &&
              i.value &&
              !L.value &&
              e.displayValues.length)
          ) {
            const B = [...e.displayValues];
            let te = null;
            for (let k = B.length - 1; k >= 0; k -= 1) {
              const de = B[k];
              if (!de.disabled) {
                B.splice(k, 1), (te = de);
                break;
              }
            }
            te && e.onDisplayValuesChange(B, { type: "remove", values: [te] });
          }
          for (
            var w = arguments.length, F = new Array(w > 1 ? w - 1 : 0), R = 1;
            R < w;
            R++
          )
            F[R - 1] = arguments[R];
          x.value && h.value && h.value.onKeydown(I, ...F),
            (O = e.onKeydown) === null || O === void 0 || O.call(e, I, ...F);
        },
        X = function (I) {
          for (
            var O = arguments.length, f = new Array(O > 1 ? O - 1 : 0), S = 1;
            S < O;
            S++
          )
            f[S - 1] = arguments[S];
          x.value && h.value && h.value.onKeyup(I, ...f),
            e.onKeyup && e.onKeyup(I, ...f);
        },
        g = (I) => {
          const O = e.displayValues.filter((f) => f !== I);
          e.onDisplayValuesChange(O, { type: "remove", values: [I] });
        },
        $ = q(!1);
      Ae("VCSelectContainerEvent", {
        focus: function () {
          E(!0),
            e.disabled ||
              (e.onFocus && !$.value && e.onFocus(...arguments),
              e.showAction && e.showAction.includes("focus") && j(!0)),
            ($.value = !0);
        },
        blur: function () {
          if (
            (E(!1, () => {
              ($.value = !1), j(!1);
            }),
            e.disabled)
          )
            return;
          const I = L.value;
          I &&
            (e.mode === "tags"
              ? e.onSearch(I, { source: "submit" })
              : e.mode === "multiple" && e.onSearch("", { source: "blur" })),
            e.onBlur && e.onBlur(...arguments);
        },
      });
      const z = [];
      ye(() => {
        z.forEach((I) => clearTimeout(I)), z.splice(0, z.length);
      }),
        Fe(() => {
          z.forEach((I) => clearTimeout(I)), z.splice(0, z.length);
        });
      const le = function (I) {
          var O, f;
          const { target: S } = I,
            w =
              (O = p.value) === null || O === void 0
                ? void 0
                : O.getPopupElement();
          if (w && w.contains(S)) {
            const te = setTimeout(() => {
              var k;
              const de = z.indexOf(te);
              de !== -1 && z.splice(de, 1),
                N(),
                !a.value &&
                  !w.contains(document.activeElement) &&
                  ((k = c.value) === null || k === void 0 || k.focus());
            });
            z.push(te);
          }
          for (
            var F = arguments.length, R = new Array(F > 1 ? F - 1 : 0), B = 1;
            B < F;
            B++
          )
            R[B - 1] = arguments[B];
          (f = e.onMousedown) === null || f === void 0 || f.call(e, I, ...R);
        },
        ne = q(null),
        ae = Gn(),
        ce = () => {
          ae.update();
        };
      return (
        ye(() => {
          ie(
            H,
            () => {
              var I;
              if (H.value) {
                const O = Math.ceil(
                  (I = r.value) === null || I === void 0
                    ? void 0
                    : I.offsetWidth
                );
                ne.value !== O && !Number.isNaN(O) && (ne.value = O);
              }
            },
            { immediate: !0, flush: "post" }
          );
        }),
        Ro([r, p], H, j),
        Fo(
          Ht(
            b(b({}, Yn(e)), {
              open: x,
              triggerOpen: H,
              showSearch: s,
              multiple: i,
              toggleOpen: j,
            })
          )
        ),
        () => {
          const I = b(b({}, e), o),
            {
              prefixCls: O,
              id: f,
              open: S,
              defaultOpen: w,
              mode: F,
              showSearch: R,
              searchValue: B,
              onSearch: te,
              allowClear: k,
              clearIcon: de,
              showArrow: oe,
              inputIcon: we,
              disabled: fe,
              loading: Ce,
              getInputElement: De,
              getPopupContainer: Ne,
              placement: Ue,
              animation: fn,
              transitionName: pn,
              dropdownStyle: mn,
              dropdownClassName: vn,
              dropdownMatchSelectWidth: gn,
              dropdownRender: hn,
              dropdownAlign: bn,
              showAction: ni,
              direction: yn,
              tokenSeparators: oi,
              tagRender: Sn,
              optionLabelRender: wn,
              onPopupScroll: li,
              onDropdownVisibleChange: ii,
              onFocus: ai,
              onBlur: ri,
              onKeyup: si,
              onKeydown: ui,
              onMousedown: ci,
              onClear: Ye,
              omitDomProps: Ge,
              getRawInputElement: gt,
              displayValues: Ve,
              onDisplayValuesChange: Cn,
              emptyOptions: In,
              activeDescendantId: On,
              activeValue: xn,
              OptionList: $n,
            } = I,
            Tn = Vo(I, [
              "prefixCls",
              "id",
              "open",
              "defaultOpen",
              "mode",
              "showSearch",
              "searchValue",
              "onSearch",
              "allowClear",
              "clearIcon",
              "showArrow",
              "inputIcon",
              "disabled",
              "loading",
              "getInputElement",
              "getPopupContainer",
              "placement",
              "animation",
              "transitionName",
              "dropdownStyle",
              "dropdownClassName",
              "dropdownMatchSelectWidth",
              "dropdownRender",
              "dropdownAlign",
              "showAction",
              "direction",
              "tokenSeparators",
              "tagRender",
              "optionLabelRender",
              "onPopupScroll",
              "onDropdownVisibleChange",
              "onFocus",
              "onBlur",
              "onKeyup",
              "onKeydown",
              "onMousedown",
              "onClear",
              "omitDomProps",
              "getRawInputElement",
              "displayValues",
              "onDisplayValuesChange",
              "emptyOptions",
              "activeDescendantId",
              "activeValue",
              "OptionList",
            ]),
            ht = (F === "combobox" && De && De()) || null,
            $e = typeof gt == "function" && gt(),
            Xe = b({}, Tn);
          let bt;
          $e &&
            (bt = (Se) => {
              j(Se);
            }),
            _o.forEach((Se) => {
              delete Xe[Se];
            }),
            Ge == null ||
              Ge.forEach((Se) => {
                delete Xe[Se];
              });
          const yt = oe !== void 0 ? oe : Ce || (!i.value && F !== "combobox");
          let St;
          yt &&
            (St = y(
              He,
              {
                class: re(`${O}-arrow`, { [`${O}-arrow-loading`]: Ce }),
                customizeIcon: we,
                customizeIconProps: {
                  loading: Ce,
                  searchValue: L.value,
                  open: x.value,
                  focused: v.value,
                  showSearch: s.value,
                },
              },
              null
            ));
          let wt;
          const Mn = () => {
            Ye == null || Ye(),
              Cn([], { type: "clear", values: Ve }),
              Q("", !1, !1);
          };
          !fe &&
            k &&
            (Ve.length || L.value) &&
            (wt = y(
              He,
              { class: `${O}-clear`, onMousedown: Mn, customizeIcon: de },
              { default: () => [nt("×")] }
            ));
          const En = y(
              $n,
              { ref: h },
              b(b({}, d.customSlots), { option: l.option })
            ),
            Rn = re(O, o.class, {
              [`${O}-focused`]: v.value,
              [`${O}-multiple`]: i.value,
              [`${O}-single`]: !i.value,
              [`${O}-allow-clear`]: k,
              [`${O}-show-arrow`]: yt,
              [`${O}-disabled`]: fe,
              [`${O}-loading`]: Ce,
              [`${O}-open`]: x.value,
              [`${O}-customize-input`]: ht,
              [`${O}-show-search`]: s.value,
            }),
            Ct = y(
              co,
              {
                ref: p,
                disabled: fe,
                prefixCls: O,
                visible: H.value,
                popupElement: En,
                containerWidth: ne.value,
                animation: fn,
                transitionName: pn,
                dropdownStyle: mn,
                dropdownClassName: vn,
                direction: yn,
                dropdownMatchSelectWidth: gn,
                dropdownRender: hn,
                dropdownAlign: bn,
                placement: Ue,
                getPopupContainer: Ne,
                empty: In,
                getTriggerDOMNode: () => u.current,
                onPopupVisibleChange: bt,
                onPopupMouseEnter: ce,
              },
              {
                default: () =>
                  $e
                    ? at($e) && Wt($e, { ref: u }, !1, !0)
                    : y(
                        Eo,
                        G(
                          G({}, e),
                          {},
                          {
                            domRef: u,
                            prefixCls: O,
                            inputElement: ht,
                            ref: c,
                            id: f,
                            showSearch: s.value,
                            mode: F,
                            activeDescendantId: On,
                            tagRender: Sn,
                            optionLabelRender: wn,
                            values: Ve,
                            open: x.value,
                            onToggleOpen: j,
                            activeValue: xn,
                            searchValue: L.value,
                            onSearch: Q,
                            onSearchSubmit: ee,
                            onRemove: g,
                            tokenWithEnter: U.value,
                          }
                        ),
                        null
                      ),
              }
            );
          let qe;
          return (
            $e
              ? (qe = Ct)
              : (qe = y(
                  "div",
                  G(
                    G({}, Xe),
                    {},
                    {
                      class: Rn,
                      ref: r,
                      onMousedown: le,
                      onKeydown: K,
                      onKeyup: X,
                    }
                  ),
                  [
                    v.value &&
                      !x.value &&
                      y(
                        "span",
                        {
                          style: {
                            width: 0,
                            height: 0,
                            position: "absolute",
                            overflow: "hidden",
                            opacity: 0,
                          },
                          "aria-live": "polite",
                        },
                        [
                          `${Ve.map((Se) => {
                            let { label: It, value: Pn } = Se;
                            return ["number", "string"].includes(typeof It)
                              ? It
                              : Pn;
                          }).join(", ")}`,
                        ]
                      ),
                    Ct,
                    St,
                    wt,
                  ]
                )),
            qe
          );
        }
      );
    },
  }),
  je = (e, n) => {
    let { height: o, offset: t, prefixCls: l, onInnerResize: i } = e,
      { slots: s } = n;
    var a;
    let d = {},
      r = { display: "flex", flexDirection: "column" };
    return (
      t !== void 0 &&
        ((d = { height: `${o}px`, position: "relative", overflow: "hidden" }),
        (r = b(b({}, r), {
          transform: `translateY(${t}px)`,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
        }))),
      y("div", { style: d }, [
        y(
          ut,
          {
            onResize: (u) => {
              let { offsetHeight: p } = u;
              p && i && i();
            },
          },
          {
            default: () => [
              y("div", { style: r, class: re({ [`${l}-holder-inner`]: l }) }, [
                (a = s.default) === null || a === void 0 ? void 0 : a.call(s),
              ]),
            ],
          }
        ),
      ])
    );
  };
je.displayName = "Filter";
je.inheritAttrs = !1;
je.props = {
  prefixCls: String,
  height: Number,
  offset: Number,
  onInnerResize: Function,
};
const zo = je,
  en = (e, n) => {
    let { setRef: o } = e,
      { slots: t } = n;
    var l;
    const i = At((l = t.default) === null || l === void 0 ? void 0 : l.call(t));
    return i && i.length ? Xn(i[0], { ref: o }) : i;
  };
en.props = { setRef: { type: Function, default: () => {} } };
const Bo = en,
  Ko = 20;
function Mt(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
const Wo = ue({
  compatConfig: { MODE: 3 },
  name: "ScrollBar",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    scrollTop: Number,
    scrollHeight: Number,
    height: Number,
    count: Number,
    onScroll: { type: Function },
    onStartMove: { type: Function },
    onStopMove: { type: Function },
  },
  setup() {
    return {
      moveRaf: null,
      scrollbarRef: Re(),
      thumbRef: Re(),
      visibleTimeout: null,
      state: Le({ dragging: !1, pageY: null, startTop: null, visible: !1 }),
    };
  },
  watch: {
    scrollTop: {
      handler() {
        this.delayHidden();
      },
      flush: "post",
    },
  },
  mounted() {
    var e, n;
    (e = this.scrollbarRef.current) === null ||
      e === void 0 ||
      e.addEventListener(
        "touchstart",
        this.onScrollbarTouchStart,
        he ? { passive: !1 } : !1
      ),
      (n = this.thumbRef.current) === null ||
        n === void 0 ||
        n.addEventListener(
          "touchstart",
          this.onMouseDown,
          he ? { passive: !1 } : !1
        );
  },
  beforeUnmount() {
    this.removeEvents(), clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden() {
      clearTimeout(this.visibleTimeout),
        (this.state.visible = !0),
        (this.visibleTimeout = setTimeout(() => {
          this.state.visible = !1;
        }, 2e3));
    },
    onScrollbarTouchStart(e) {
      e.preventDefault();
    },
    onContainerMouseDown(e) {
      e.stopPropagation(), e.preventDefault();
    },
    patchEvents() {
      window.addEventListener("mousemove", this.onMouseMove),
        window.addEventListener("mouseup", this.onMouseUp),
        this.thumbRef.current.addEventListener(
          "touchmove",
          this.onMouseMove,
          he ? { passive: !1 } : !1
        ),
        this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents() {
      window.removeEventListener("mousemove", this.onMouseMove),
        window.removeEventListener("mouseup", this.onMouseUp),
        this.scrollbarRef.current.removeEventListener(
          "touchstart",
          this.onScrollbarTouchStart,
          he ? { passive: !1 } : !1
        ),
        this.thumbRef.current &&
          (this.thumbRef.current.removeEventListener(
            "touchstart",
            this.onMouseDown,
            he ? { passive: !1 } : !1
          ),
          this.thumbRef.current.removeEventListener(
            "touchmove",
            this.onMouseMove,
            he ? { passive: !1 } : !1
          ),
          this.thumbRef.current.removeEventListener(
            "touchend",
            this.onMouseUp
          )),
        ve.cancel(this.moveRaf);
    },
    onMouseDown(e) {
      const { onStartMove: n } = this.$props;
      b(this.state, { dragging: !0, pageY: Mt(e), startTop: this.getTop() }),
        n(),
        this.patchEvents(),
        e.stopPropagation(),
        e.preventDefault();
    },
    onMouseMove(e) {
      const { dragging: n, pageY: o, startTop: t } = this.state,
        { onScroll: l } = this.$props;
      if ((ve.cancel(this.moveRaf), n)) {
        const i = Mt(e) - o,
          s = t + i,
          a = this.getEnableScrollRange(),
          d = this.getEnableHeightRange(),
          r = d ? s / d : 0,
          u = Math.ceil(r * a);
        this.moveRaf = ve(() => {
          l(u);
        });
      }
    },
    onMouseUp() {
      const { onStopMove: e } = this.$props;
      (this.state.dragging = !1), e(), this.removeEvents();
    },
    getSpinHeight() {
      const { height: e, count: n } = this.$props;
      let o = (e / n) * 10;
      return (o = Math.max(o, Ko)), (o = Math.min(o, e / 2)), Math.floor(o);
    },
    getEnableScrollRange() {
      const { scrollHeight: e, height: n } = this.$props;
      return e - n || 0;
    },
    getEnableHeightRange() {
      const { height: e } = this.$props,
        n = this.getSpinHeight();
      return e - n || 0;
    },
    getTop() {
      const { scrollTop: e } = this.$props,
        n = this.getEnableScrollRange(),
        o = this.getEnableHeightRange();
      return e === 0 || n === 0 ? 0 : (e / n) * o;
    },
    showScroll() {
      const { height: e, scrollHeight: n } = this.$props;
      return n > e;
    },
  },
  render() {
    const { dragging: e, visible: n } = this.state,
      { prefixCls: o } = this.$props,
      t = this.getSpinHeight() + "px",
      l = this.getTop() + "px",
      i = this.showScroll(),
      s = i && n;
    return y(
      "div",
      {
        ref: this.scrollbarRef,
        class: re(`${o}-scrollbar`, { [`${o}-scrollbar-show`]: i }),
        style: {
          width: "8px",
          top: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: s ? void 0 : "none",
        },
        onMousedown: this.onContainerMouseDown,
        onMousemove: this.delayHidden,
      },
      [
        y(
          "div",
          {
            ref: this.thumbRef,
            class: re(`${o}-scrollbar-thumb`, {
              [`${o}-scrollbar-thumb-moving`]: e,
            }),
            style: {
              width: "100%",
              height: t,
              top: l,
              left: 0,
              position: "absolute",
              background: "rgba(0, 0, 0, 0.5)",
              borderRadius: "99px",
              cursor: "pointer",
              userSelect: "none",
            },
            onMousedown: this.onMouseDown,
          },
          null
        ),
      ]
    );
  },
});
function jo(e, n, o, t) {
  const l = new Map(),
    i = new Map(),
    s = me(Symbol("update"));
  ie(e, () => {
    s.value = Symbol("update");
  });
  let a;
  function d() {
    ve.cancel(a);
  }
  function r() {
    d(),
      (a = ve(() => {
        l.forEach((p, c) => {
          if (p && p.offsetParent) {
            const { offsetHeight: h } = p;
            i.get(c) !== h &&
              ((s.value = Symbol("update")), i.set(c, p.offsetHeight));
          }
        });
      }));
  }
  function u(p, c) {
    const h = n(p),
      v = l.get(h);
    c ? (l.set(h, c.$el || c), r()) : l.delete(h),
      !v != !c && (c ? o == null || o(p) : t == null || t(p));
  }
  return (
    Kt(() => {
      d();
    }),
    [u, r, i, s]
  );
}
function Uo(e, n, o, t, l, i, s, a) {
  let d;
  return (r) => {
    if (r == null) {
      a();
      return;
    }
    ve.cancel(d);
    const u = n.value,
      p = t.itemHeight;
    if (typeof r == "number") s(r);
    else if (r && typeof r == "object") {
      let c;
      const { align: h } = r;
      "index" in r
        ? ({ index: c } = r)
        : (c = u.findIndex((N) => l(N) === r.key));
      const { offset: v = 0 } = r,
        E = (N, C) => {
          if (N < 0 || !e.value) return;
          const T = e.value.clientHeight;
          let L = !1,
            _ = C;
          if (T) {
            const m = C || h;
            let x = 0,
              A = 0,
              V = 0;
            const H = Math.min(u.length, c);
            for (let Q = 0; Q <= H; Q += 1) {
              const ee = l(u[Q]);
              A = x;
              const Y = o.get(ee);
              (V = A + (Y === void 0 ? p : Y)),
                (x = V),
                Q === c && Y === void 0 && (L = !0);
            }
            const j = e.value.scrollTop;
            let U = null;
            switch (m) {
              case "top":
                U = A - v;
                break;
              case "bottom":
                U = V - T + v;
                break;
              default: {
                const Q = j + T;
                A < j ? (_ = "top") : V > Q && (_ = "bottom");
              }
            }
            U !== null && U !== j && s(U);
          }
          d = ve(() => {
            L && i(), E(N - 1, _);
          }, 2);
        };
      E(5);
    }
  };
}
const Yo = typeof navigator == "object" && /Firefox/i.test(navigator.userAgent),
  Go = Yo,
  tn = (e, n) => {
    let o = !1,
      t = null;
    function l() {
      clearTimeout(t),
        (o = !0),
        (t = setTimeout(() => {
          o = !1;
        }, 50));
    }
    return function (i) {
      let s =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      const a = (i < 0 && e.value) || (i > 0 && n.value);
      return s && a ? (clearTimeout(t), (o = !1)) : (!a || o) && l(), !o && a;
    };
  };
function Xo(e, n, o, t) {
  let l = 0,
    i = null,
    s = null,
    a = !1;
  const d = tn(n, o);
  function r(p) {
    if (!e.value) return;
    ve.cancel(i);
    const { deltaY: c } = p;
    (l += c),
      (s = c),
      !d(c) &&
        (Go || p.preventDefault(),
        (i = ve(() => {
          t(l * (a ? 10 : 1)), (l = 0);
        })));
  }
  function u(p) {
    e.value && (a = p.detail === s);
  }
  return [r, u];
}
const qo = 14 / 15;
function Qo(e, n, o) {
  let t = !1,
    l = 0,
    i = null,
    s = null;
  const a = () => {
      i &&
        (i.removeEventListener("touchmove", d),
        i.removeEventListener("touchend", r));
    },
    d = (c) => {
      if (t) {
        const h = Math.ceil(c.touches[0].pageY);
        let v = l - h;
        (l = h),
          o(v) && c.preventDefault(),
          clearInterval(s),
          (s = setInterval(() => {
            (v *= qo), (!o(v, !0) || Math.abs(v) <= 0.1) && clearInterval(s);
          }, 16));
      }
    },
    r = () => {
      (t = !1), a();
    },
    u = (c) => {
      a(),
        c.touches.length === 1 &&
          !t &&
          ((t = !0),
          (l = Math.ceil(c.touches[0].pageY)),
          (i = c.target),
          i.addEventListener("touchmove", d, { passive: !1 }),
          i.addEventListener("touchend", r));
    },
    p = () => {};
  ye(() => {
    document.addEventListener("touchmove", p, { passive: !1 }),
      ie(
        e,
        (c) => {
          n.value.removeEventListener("touchstart", u),
            a(),
            clearInterval(s),
            c && n.value.addEventListener("touchstart", u, { passive: !1 });
        },
        { immediate: !0 }
      );
  }),
    Fe(() => {
      document.removeEventListener("touchmove", p);
    });
}
var Zo =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var o = {};
    for (var t in e)
      Object.prototype.hasOwnProperty.call(e, t) &&
        n.indexOf(t) < 0 &&
        (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, t = Object.getOwnPropertySymbols(e); l < t.length; l++)
        n.indexOf(t[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
          (o[t[l]] = e[t[l]]);
    return o;
  };
const Jo = [],
  ko = { overflowY: "auto", overflowAnchor: "none" };
function el(e, n, o, t, l, i) {
  let { getKey: s } = i;
  return e.slice(n, o + 1).map((a, d) => {
    const r = n + d,
      u = l(a, r, {}),
      p = s(a);
    return y(Bo, { key: p, setRef: (c) => t(a, c) }, { default: () => [u] });
  });
}
const tl = ue({
    compatConfig: { MODE: 3 },
    name: "List",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      data: D.array,
      height: Number,
      itemHeight: Number,
      fullHeight: { type: Boolean, default: void 0 },
      itemKey: { type: [String, Number, Function], required: !0 },
      component: { type: [String, Object] },
      virtual: { type: Boolean, default: void 0 },
      children: Function,
      onScroll: Function,
      onMousedown: Function,
      onMouseenter: Function,
      onVisibleChange: Function,
    },
    setup(e, n) {
      let { expose: o } = n;
      const t = M(() => {
          const { height: g, itemHeight: $, virtual: J } = e;
          return !!(J !== !1 && g && $);
        }),
        l = M(() => {
          const { height: g, itemHeight: $, data: J } = e;
          return t.value && J && $ * J.length > g;
        }),
        i = Le({ scrollTop: 0, scrollMoving: !1 }),
        s = M(() => e.data || Jo),
        a = q([]);
      ie(
        s,
        () => {
          a.value = ze(s.value).slice();
        },
        { immediate: !0 }
      );
      const d = q((g) => {});
      ie(
        () => e.itemKey,
        (g) => {
          typeof g == "function"
            ? (d.value = g)
            : (d.value = ($) => ($ == null ? void 0 : $[g]));
        },
        { immediate: !0 }
      );
      const r = q(),
        u = q(),
        p = q(),
        c = (g) => d.value(g),
        h = { getKey: c };
      function v(g) {
        let $;
        typeof g == "function" ? ($ = g(i.scrollTop)) : ($ = g);
        const J = x($);
        r.value && (r.value.scrollTop = J), (i.scrollTop = J);
      }
      const [E, N, C, T] = jo(a, c, null, null),
        L = Le({ scrollHeight: void 0, start: 0, end: 0, offset: void 0 }),
        _ = q(0);
      ye(() => {
        Me(() => {
          var g;
          _.value =
            ((g = u.value) === null || g === void 0
              ? void 0
              : g.offsetHeight) || 0;
        });
      }),
        qn(() => {
          Me(() => {
            var g;
            _.value =
              ((g = u.value) === null || g === void 0
                ? void 0
                : g.offsetHeight) || 0;
          });
        }),
        ie(
          [t, a],
          () => {
            t.value ||
              b(L, {
                scrollHeight: void 0,
                start: 0,
                end: a.value.length - 1,
                offset: void 0,
              });
          },
          { immediate: !0 }
        ),
        ie(
          [t, a, _, l],
          () => {
            t.value &&
              !l.value &&
              b(L, {
                scrollHeight: _.value,
                start: 0,
                end: a.value.length - 1,
                offset: void 0,
              }),
              r.value && (i.scrollTop = r.value.scrollTop);
          },
          { immediate: !0 }
        ),
        ie(
          [l, t, () => i.scrollTop, a, T, () => e.height, _],
          () => {
            if (!t.value || !l.value) return;
            let g = 0,
              $,
              J,
              Z;
            const z = a.value.length,
              le = a.value,
              ne = i.scrollTop,
              { itemHeight: ae, height: ce } = e,
              I = ne + ce;
            for (let O = 0; O < z; O += 1) {
              const f = le[O],
                S = c(f);
              let w = C.get(S);
              w === void 0 && (w = ae);
              const F = g + w;
              $ === void 0 && F >= ne && (($ = O), (J = g)),
                Z === void 0 && F > I && (Z = O),
                (g = F);
            }
            $ === void 0 && (($ = 0), (J = 0), (Z = Math.ceil(ce / ae))),
              Z === void 0 && (Z = z - 1),
              (Z = Math.min(Z + 1, z)),
              b(L, { scrollHeight: g, start: $, end: Z, offset: J });
          },
          { immediate: !0 }
        );
      const m = M(() => L.scrollHeight - e.height);
      function x(g) {
        let $ = g;
        return (
          Number.isNaN(m.value) || ($ = Math.min($, m.value)),
          ($ = Math.max($, 0)),
          $
        );
      }
      const A = M(() => i.scrollTop <= 0),
        V = M(() => i.scrollTop >= m.value),
        H = tn(A, V);
      function j(g) {
        v(g);
      }
      function U(g) {
        var $;
        const { scrollTop: J } = g.currentTarget;
        J !== i.scrollTop && v(J),
          ($ = e.onScroll) === null || $ === void 0 || $.call(e, g);
      }
      const [Q, ee] = Xo(t, A, V, (g) => {
        v(($) => $ + g);
      });
      Qo(t, r, (g, $) =>
        H(g, $) ? !1 : (Q({ preventDefault() {}, deltaY: g }), !0)
      );
      function Y(g) {
        t.value && g.preventDefault();
      }
      const P = () => {
        r.value &&
          (r.value.removeEventListener("wheel", Q, he ? { passive: !1 } : !1),
          r.value.removeEventListener("DOMMouseScroll", ee),
          r.value.removeEventListener("MozMousePixelScroll", Y));
      };
      xe(() => {
        Me(() => {
          r.value &&
            (P(),
            r.value.addEventListener("wheel", Q, he ? { passive: !1 } : !1),
            r.value.addEventListener("DOMMouseScroll", ee),
            r.value.addEventListener("MozMousePixelScroll", Y));
        });
      }),
        Fe(() => {
          P();
        });
      const K = Uo(r, a, C, e, c, N, v, () => {
        var g;
        (g = p.value) === null || g === void 0 || g.delayHidden();
      });
      o({ scrollTo: K });
      const X = M(() => {
        let g = null;
        return (
          e.height &&
            ((g = b(
              { [e.fullHeight ? "height" : "maxHeight"]: e.height + "px" },
              ko
            )),
            t.value &&
              ((g.overflowY = "hidden"),
              i.scrollMoving && (g.pointerEvents = "none"))),
          g
        );
      });
      return (
        ie(
          [() => L.start, () => L.end, a],
          () => {
            if (e.onVisibleChange) {
              const g = a.value.slice(L.start, L.end + 1);
              e.onVisibleChange(g, a.value);
            }
          },
          { flush: "post" }
        ),
        {
          state: i,
          mergedData: a,
          componentStyle: X,
          onFallbackScroll: U,
          onScrollBar: j,
          componentRef: r,
          useVirtual: t,
          calRes: L,
          collectHeight: N,
          setInstance: E,
          sharedConfig: h,
          scrollBarRef: p,
          fillerInnerRef: u,
        }
      );
    },
    render() {
      const e = b(b({}, this.$props), this.$attrs),
        {
          prefixCls: n = "rc-virtual-list",
          height: o,
          itemHeight: t,
          fullHeight: l,
          data: i,
          itemKey: s,
          virtual: a,
          component: d = "div",
          onScroll: r,
          children: u = this.$slots.default,
          style: p,
          class: c,
        } = e,
        h = Zo(e, [
          "prefixCls",
          "height",
          "itemHeight",
          "fullHeight",
          "data",
          "itemKey",
          "virtual",
          "component",
          "onScroll",
          "children",
          "style",
          "class",
        ]),
        v = re(n, c),
        { scrollTop: E } = this.state,
        { scrollHeight: N, offset: C, start: T, end: L } = this.calRes,
        {
          componentStyle: _,
          onFallbackScroll: m,
          onScrollBar: x,
          useVirtual: A,
          collectHeight: V,
          sharedConfig: H,
          setInstance: j,
          mergedData: U,
        } = this;
      return y(
        "div",
        G({ style: b(b({}, p), { position: "relative" }), class: v }, h),
        [
          y(
            d,
            {
              class: `${n}-holder`,
              style: _,
              ref: "componentRef",
              onScroll: m,
            },
            {
              default: () => [
                y(
                  zo,
                  {
                    prefixCls: n,
                    height: N,
                    offset: C,
                    onInnerResize: V,
                    ref: "fillerInnerRef",
                  },
                  { default: () => el(U, T, L, j, u, H) }
                ),
              ],
            }
          ),
          A &&
            y(
              Wo,
              {
                ref: "scrollBarRef",
                prefixCls: n,
                scrollTop: E,
                height: o,
                scrollHeight: N,
                count: U.length,
                onScroll: x,
                onStartMove: () => {
                  this.state.scrollMoving = !0;
                },
                onStopMove: () => {
                  this.state.scrollMoving = !1;
                },
              },
              null
            ),
        ]
      );
    },
  }),
  nl = tl;
function ol(e, n, o) {
  const t = me(e());
  return (
    ie(n, (l, i) => {
      o ? o(l, i) && (t.value = e()) : (t.value = e());
    }),
    t
  );
}
function ll() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
const nn = Symbol("SelectContextKey");
function il(e) {
  return Ae(nn, e);
}
function al() {
  return Pe(nn, {});
}
var rl =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var o = {};
    for (var t in e)
      Object.prototype.hasOwnProperty.call(e, t) &&
        n.indexOf(t) < 0 &&
        (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, t = Object.getOwnPropertySymbols(e); l < t.length; l++)
        n.indexOf(t[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
          (o[t[l]] = e[t[l]]);
    return o;
  };
function Et(e) {
  return typeof e == "string" || typeof e == "number";
}
const sl = ue({
    compatConfig: { MODE: 3 },
    name: "OptionList",
    inheritAttrs: !1,
    setup(e, n) {
      let { expose: o, slots: t } = n;
      const l = Do(),
        i = al(),
        s = M(() => `${l.prefixCls}-item`),
        a = ol(
          () => i.flattenOptions,
          [() => l.open, () => i.flattenOptions],
          (m) => m[0]
        ),
        d = Re(),
        r = (m) => {
          m.preventDefault();
        },
        u = (m) => {
          d.current &&
            d.current.scrollTo(typeof m == "number" ? { index: m } : m);
        },
        p = function (m) {
          let x =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          const A = a.value.length;
          for (let V = 0; V < A; V += 1) {
            const H = (m + V * x + A) % A,
              { group: j, data: U } = a.value[H];
            if (!j && !U.disabled) return H;
          }
          return -1;
        },
        c = Le({ activeIndex: p(0) }),
        h = function (m) {
          let x =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          c.activeIndex = m;
          const A = { source: x ? "keyboard" : "mouse" },
            V = a.value[m];
          if (!V) {
            i.onActiveValue(null, -1, A);
            return;
          }
          i.onActiveValue(V.value, m, A);
        };
      ie(
        [() => a.value.length, () => l.searchValue],
        () => {
          h(i.defaultActiveFirstOption !== !1 ? p(0) : -1);
        },
        { immediate: !0 }
      );
      const v = (m) => i.rawValues.has(m) && l.mode !== "combobox";
      ie(
        [() => l.open, () => l.searchValue],
        () => {
          if (!l.multiple && l.open && i.rawValues.size === 1) {
            const m = Array.from(i.rawValues)[0],
              x = ze(a.value).findIndex((A) => {
                let { data: V } = A;
                return V[i.fieldNames.value] === m;
              });
            x !== -1 &&
              (h(x),
              Me(() => {
                u(x);
              }));
          }
          l.open &&
            Me(() => {
              var m;
              (m = d.current) === null || m === void 0 || m.scrollTo(void 0);
            });
        },
        { immediate: !0, flush: "post" }
      );
      const E = (m) => {
          m !== void 0 && i.onSelect(m, { selected: !i.rawValues.has(m) }),
            l.multiple || l.toggleOpen(!1);
        },
        N = (m) => (typeof m.label == "function" ? m.label() : m.label);
      function C(m) {
        const x = a.value[m];
        if (!x) return null;
        const A = x.data || {},
          { value: V } = A,
          { group: H } = x,
          j = st(A, !0),
          U = N(x);
        return x
          ? y(
              "div",
              G(
                G({ "aria-label": typeof U == "string" && !H ? U : null }, j),
                {},
                {
                  key: m,
                  role: H ? "presentation" : "option",
                  id: `${l.id}_list_${m}`,
                  "aria-selected": v(V),
                }
              ),
              [V]
            )
          : null;
      }
      return (
        o({
          onKeydown: (m) => {
            const { which: x, ctrlKey: A } = m;
            switch (x) {
              case W.N:
              case W.P:
              case W.UP:
              case W.DOWN: {
                let V = 0;
                if (
                  (x === W.UP
                    ? (V = -1)
                    : x === W.DOWN
                    ? (V = 1)
                    : ll() &&
                      A &&
                      (x === W.N ? (V = 1) : x === W.P && (V = -1)),
                  V !== 0)
                ) {
                  const H = p(c.activeIndex + V, V);
                  u(H), h(H, !0);
                }
                break;
              }
              case W.ENTER: {
                const V = a.value[c.activeIndex];
                V && !V.data.disabled ? E(V.value) : E(void 0),
                  l.open && m.preventDefault();
                break;
              }
              case W.ESC:
                l.toggleOpen(!1), l.open && m.stopPropagation();
            }
          },
          onKeyup: () => {},
          scrollTo: (m) => {
            u(m);
          },
        }),
        () => {
          const { id: m, notFoundContent: x, onPopupScroll: A } = l,
            {
              menuItemSelectedIcon: V,
              fieldNames: H,
              virtual: j,
              listHeight: U,
              listItemHeight: Q,
            } = i,
            ee = t.option,
            { activeIndex: Y } = c,
            P = Object.keys(H).map((K) => H[K]);
          return a.value.length === 0
            ? y(
                "div",
                {
                  role: "listbox",
                  id: `${m}_list`,
                  class: `${s.value}-empty`,
                  onMousedown: r,
                },
                [x]
              )
            : y(Ee, null, [
                y(
                  "div",
                  {
                    role: "listbox",
                    id: `${m}_list`,
                    style: { height: 0, width: 0, overflow: "hidden" },
                  },
                  [C(Y - 1), C(Y), C(Y + 1)]
                ),
                y(
                  nl,
                  {
                    itemKey: "key",
                    ref: d,
                    data: a.value,
                    height: U,
                    itemHeight: Q,
                    fullHeight: !1,
                    onMousedown: r,
                    onScroll: A,
                    virtual: j,
                  },
                  {
                    default: (K, X) => {
                      var g;
                      const { group: $, groupOption: J, data: Z, value: z } = K,
                        { key: le } = Z,
                        ne = typeof K.label == "function" ? K.label() : K.label;
                      if ($) {
                        const fe =
                          (g = Z.title) !== null && g !== void 0
                            ? g
                            : Et(ne) && ne;
                        return y(
                          "div",
                          { class: re(s.value, `${s.value}-group`), title: fe },
                          [ee ? ee(Z) : ne !== void 0 ? ne : le]
                        );
                      }
                      const {
                          disabled: ae,
                          title: ce,
                          children: I,
                          style: O,
                          class: f,
                          className: S,
                        } = Z,
                        w = rl(Z, [
                          "disabled",
                          "title",
                          "children",
                          "style",
                          "class",
                          "className",
                        ]),
                        F = Be(w, P),
                        R = v(z),
                        B = `${s.value}-option`,
                        te = re(s.value, B, f, S, {
                          [`${B}-grouped`]: J,
                          [`${B}-active`]: Y === X && !ae,
                          [`${B}-disabled`]: ae,
                          [`${B}-selected`]: R,
                        }),
                        k = N(K),
                        de = !V || typeof V == "function" || R,
                        oe = typeof k == "number" ? k : k || z;
                      let we = Et(oe) ? oe.toString() : void 0;
                      return (
                        ce !== void 0 && (we = ce),
                        y(
                          "div",
                          G(
                            G({}, F),
                            {},
                            {
                              "aria-selected": R,
                              class: te,
                              title: we,
                              onMousemove: (fe) => {
                                w.onMousemove && w.onMousemove(fe),
                                  !(Y === X || ae) && h(X);
                              },
                              onClick: (fe) => {
                                ae || E(z), w.onClick && w.onClick(fe);
                              },
                              style: O,
                            }
                          ),
                          [
                            y("div", { class: `${B}-content` }, [
                              ee ? ee(Z) : oe,
                            ]),
                            at(V) || R,
                            de &&
                              y(
                                He,
                                {
                                  class: `${s.value}-option-state`,
                                  customizeIcon: V,
                                  customizeIconProps: { isSelected: R },
                                },
                                { default: () => [R ? "✓" : null] }
                              ),
                          ]
                        )
                      );
                    },
                  }
                ),
              ]);
        }
      );
    },
  }),
  ul = sl;
var cl =
  (globalThis && globalThis.__rest) ||
  function (e, n) {
    var o = {};
    for (var t in e)
      Object.prototype.hasOwnProperty.call(e, t) &&
        n.indexOf(t) < 0 &&
        (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, t = Object.getOwnPropertySymbols(e); l < t.length; l++)
        n.indexOf(t[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
          (o[t[l]] = e[t[l]]);
    return o;
  };
function dl(e) {
  const n = e,
    { key: o, children: t } = n,
    l = n.props,
    { value: i, disabled: s } = l,
    a = cl(l, ["value", "disabled"]),
    d = t == null ? void 0 : t.default;
  return b(
    {
      key: o,
      value: i !== void 0 ? i : o,
      children: d,
      disabled: s || s === "",
    },
    a
  );
}
function on(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return At(e)
    .map((t, l) => {
      var i;
      if (!at(t) || !t.type) return null;
      const {
        type: { isSelectOptGroup: s },
        key: a,
        children: d,
        props: r,
      } = t;
      if (n || !s) return dl(t);
      const u = d && d.default ? d.default() : void 0,
        p =
          (r == null ? void 0 : r.label) ||
          ((i = d.label) === null || i === void 0 ? void 0 : i.call(d)) ||
          a;
      return b(
        b({ key: `__RC_SELECT_GRP__${a === null ? l : String(a)}__` }, r),
        { label: p, options: on(u || []) }
      );
    })
    .filter((t) => t);
}
function fl(e, n, o) {
  const t = q(),
    l = q(),
    i = q(),
    s = q([]);
  return (
    ie(
      [e, n],
      () => {
        e.value ? (s.value = ze(e.value).slice()) : (s.value = on(n.value));
      },
      { immediate: !0, deep: !0 }
    ),
    xe(() => {
      const a = s.value,
        d = new Map(),
        r = new Map(),
        u = o.value;
      function p(c) {
        let h =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        for (let v = 0; v < c.length; v += 1) {
          const E = c[v];
          !E[u.options] || h
            ? (d.set(E[u.value], E), r.set(E[u.label], E))
            : p(E[u.options], !0);
        }
      }
      p(a), (t.value = a), (l.value = d), (i.value = r);
    }),
    { options: t, valueOptions: l, labelOptions: i }
  );
}
let Rt = 0;
const pl = Fn();
function ml() {
  let e;
  return pl ? ((e = Rt), (Rt += 1)) : (e = "TEST_OR_SSR"), e;
}
function vl() {
  let e =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : me("");
  const n = `rc_select_${ml()}`;
  return e.value || n;
}
function ln(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
function Ze(e, n) {
  return ln(e).join("").toUpperCase().includes(n);
}
const gl = (e, n, o, t, l) =>
    M(() => {
      const i = o.value,
        s = l == null ? void 0 : l.value,
        a = t == null ? void 0 : t.value;
      if (!i || a === !1) return e.value;
      const { options: d, label: r, value: u } = n.value,
        p = [],
        c = typeof a == "function",
        h = i.toUpperCase(),
        v = c
          ? a
          : (N, C) =>
              s
                ? Ze(C[s], h)
                : C[d]
                ? Ze(C[r !== "children" ? r : "label"], h)
                : Ze(C[u], h),
        E = c ? (N) => ot(N) : (N) => N;
      return (
        e.value.forEach((N) => {
          if (N[d]) {
            if (v(i, E(N))) p.push(N);
            else {
              const T = N[d].filter((L) => v(i, E(L)));
              T.length && p.push(b(b({}, N), { [d]: T }));
            }
            return;
          }
          v(i, E(N)) && p.push(N);
        }),
        p
      );
    }),
  hl = (e, n) => {
    const o = q({ values: new Map(), options: new Map() });
    return [
      M(() => {
        const { values: i, options: s } = o.value,
          a = e.value.map((u) => {
            var p;
            return u.label === void 0
              ? b(b({}, u), {
                  label:
                    (p = i.get(u.value)) === null || p === void 0
                      ? void 0
                      : p.label,
                })
              : u;
          }),
          d = new Map(),
          r = new Map();
        return (
          a.forEach((u) => {
            d.set(u.value, u),
              r.set(u.value, n.value.get(u.value) || s.get(u.value));
          }),
          (o.value.values = d),
          (o.value.options = r),
          a
        );
      }),
      (i) => n.value.get(i) || o.value.options.get(i),
    ];
  };
function Pt(e, n) {
  const { defaultValue: o, value: t = me() } = n || {};
  let l = typeof e == "function" ? e() : e;
  t.value !== void 0 && (l = Qn(t)),
    o !== void 0 && (l = typeof o == "function" ? o() : o);
  const i = me(l),
    s = me(l);
  xe(() => {
    let d = t.value !== void 0 ? t.value : i.value;
    n.postState && (d = n.postState(d)), (s.value = d);
  });
  function a(d) {
    const r = s.value;
    (i.value = d), ze(s.value) !== d && n.onChange && n.onChange(d, r);
  }
  return (
    ie(t, () => {
      i.value = t.value;
    }),
    [s, a]
  );
}
const bl = ["inputValue"];
function an() {
  return b(b({}, Jt()), {
    prefixCls: String,
    id: String,
    backfill: { type: Boolean, default: void 0 },
    fieldNames: Object,
    inputValue: String,
    searchValue: String,
    onSearch: Function,
    autoClearSearchValue: { type: Boolean, default: void 0 },
    onSelect: Function,
    onDeselect: Function,
    filterOption: { type: [Boolean, Function], default: void 0 },
    filterSort: Function,
    optionFilterProp: String,
    optionLabelProp: String,
    options: Array,
    defaultActiveFirstOption: { type: Boolean, default: void 0 },
    virtual: { type: Boolean, default: void 0 },
    listHeight: Number,
    listItemHeight: Number,
    menuItemSelectedIcon: D.any,
    mode: String,
    labelInValue: { type: Boolean, default: void 0 },
    value: D.any,
    defaultValue: D.any,
    onChange: Function,
    children: Array,
  });
}
function yl(e) {
  return !e || typeof e != "object";
}
const Sl = ue({
    compatConfig: { MODE: 3 },
    name: "Select",
    inheritAttrs: !1,
    props: it(an(), {
      prefixCls: "vc-select",
      autoClearSearchValue: !0,
      listHeight: 200,
      listItemHeight: 20,
      dropdownMatchSelectWidth: !0,
    }),
    setup(e, n) {
      let { expose: o, attrs: t, slots: l } = n;
      const i = vl(ge(e, "id")),
        s = M(() => kt(e.mode)),
        a = M(() => !!(!e.options && e.children)),
        d = M(() =>
          e.filterOption === void 0 && e.mode === "combobox"
            ? !1
            : e.filterOption
        ),
        r = M(() => Ut(e.fieldNames, a.value)),
        [u, p] = Pt("", {
          value: M(() =>
            e.searchValue !== void 0 ? e.searchValue : e.inputValue
          ),
          postState: (f) => f || "",
        }),
        c = fl(ge(e, "options"), ge(e, "children"), r),
        { valueOptions: h, labelOptions: v, options: E } = c,
        N = (f) =>
          ln(f).map((w) => {
            var F, R;
            let B, te, k, de;
            yl(w)
              ? (B = w)
              : ((k = w.key),
                (te = w.label),
                (B = (F = w.value) !== null && F !== void 0 ? F : k));
            const oe = h.value.get(B);
            return (
              oe &&
                (te === void 0 &&
                  (te =
                    oe == null
                      ? void 0
                      : oe[e.optionLabelProp || r.value.label]),
                k === void 0 &&
                  (k =
                    (R = oe == null ? void 0 : oe.key) !== null && R !== void 0
                      ? R
                      : B),
                (de = oe == null ? void 0 : oe.disabled)),
              { label: te, value: B, key: k, disabled: de, option: oe }
            );
          }),
        [C, T] = Pt(e.defaultValue, { value: ge(e, "value") }),
        L = M(() => {
          var f;
          const S = N(C.value);
          return e.mode === "combobox" &&
            !(!((f = S[0]) === null || f === void 0) && f.value)
            ? []
            : S;
        }),
        [_, m] = hl(L, h),
        x = M(() => {
          if (!e.mode && _.value.length === 1) {
            const f = _.value[0];
            if (f.value === null && (f.label === null || f.label === void 0))
              return [];
          }
          return _.value.map((f) => {
            var S;
            return b(b({}, f), {
              label:
                (S = typeof f.label == "function" ? f.label() : f.label) !==
                  null && S !== void 0
                  ? S
                  : f.value,
            });
          });
        }),
        A = M(() => new Set(_.value.map((f) => f.value)));
      xe(
        () => {
          var f;
          if (e.mode === "combobox") {
            const S =
              (f = _.value[0]) === null || f === void 0 ? void 0 : f.value;
            S != null && p(String(S));
          }
        },
        { flush: "post" }
      );
      const V = (f, S) => {
          const w = S ?? f;
          return { [r.value.value]: f, [r.value.label]: w };
        },
        H = q();
      xe(() => {
        if (e.mode !== "tags") {
          H.value = E.value;
          return;
        }
        const f = E.value.slice(),
          S = (w) => h.value.has(w);
        [..._.value]
          .sort((w, F) => (w.value < F.value ? -1 : 1))
          .forEach((w) => {
            const F = w.value;
            S(F) || f.push(V(F, w.label));
          }),
          (H.value = f);
      });
      const j = gl(H, r, u, d, ge(e, "optionFilterProp")),
        U = M(() =>
          e.mode !== "tags" ||
          !u.value ||
          j.value.some((f) => f[e.optionFilterProp || "value"] === u.value)
            ? j.value
            : [V(u.value), ...j.value]
        ),
        Q = M(() =>
          e.filterSort
            ? [...U.value].sort((f, S) => e.filterSort(f, S))
            : U.value
        ),
        ee = M(() =>
          io(Q.value, { fieldNames: r.value, childrenAsData: a.value })
        ),
        Y = (f) => {
          const S = N(f);
          if (
            (T(S),
            e.onChange &&
              (S.length !== _.value.length ||
                S.some((w, F) => {
                  var R;
                  return (
                    ((R = _.value[F]) === null || R === void 0
                      ? void 0
                      : R.value) !== (w == null ? void 0 : w.value)
                  );
                })))
          ) {
            const w = e.labelInValue
                ? S.map((R) =>
                    b(b({}, R), {
                      originLabel: R.label,
                      label: typeof R.label == "function" ? R.label() : R.label,
                    })
                  )
                : S.map((R) => R.value),
              F = S.map((R) => ot(m(R.value)));
            e.onChange(s.value ? w : w[0], s.value ? F : F[0]);
          }
        },
        [P, K] = xt(null),
        [X, g] = xt(0),
        $ = M(() =>
          e.defaultActiveFirstOption !== void 0
            ? e.defaultActiveFirstOption
            : e.mode !== "combobox"
        ),
        J = function (f, S) {
          let { source: w = "keyboard" } =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          g(S),
            e.backfill &&
              e.mode === "combobox" &&
              f !== null &&
              w === "keyboard" &&
              K(String(f));
        },
        Z = (f, S) => {
          const w = () => {
            var F;
            const R = m(f),
              B = R == null ? void 0 : R[r.value.label];
            return [
              e.labelInValue
                ? {
                    label: typeof B == "function" ? B() : B,
                    originLabel: B,
                    value: f,
                    key:
                      (F = R == null ? void 0 : R.key) !== null && F !== void 0
                        ? F
                        : f,
                  }
                : f,
              ot(R),
            ];
          };
          if (S && e.onSelect) {
            const [F, R] = w();
            e.onSelect(F, R);
          } else if (!S && e.onDeselect) {
            const [F, R] = w();
            e.onDeselect(F, R);
          }
        },
        z = (f, S) => {
          let w;
          const F = s.value ? S.selected : !0;
          F
            ? (w = s.value ? [..._.value, f] : [f])
            : (w = _.value.filter((R) => R.value !== f)),
            Y(w),
            Z(f, F),
            e.mode === "combobox"
              ? K("")
              : (!s.value || e.autoClearSearchValue) && (p(""), K(""));
        },
        le = (f, S) => {
          Y(f),
            (S.type === "remove" || S.type === "clear") &&
              S.values.forEach((w) => {
                Z(w.value, !1);
              });
        },
        ne = (f, S) => {
          var w;
          if ((p(f), K(null), S.source === "submit")) {
            const F = (f || "").trim();
            if (F) {
              const R = Array.from(new Set([...A.value, F]));
              Y(R), Z(F, !0), p("");
            }
            return;
          }
          S.source !== "blur" &&
            (e.mode === "combobox" && Y(f),
            (w = e.onSearch) === null || w === void 0 || w.call(e, f));
        },
        ae = (f) => {
          let S = f;
          e.mode !== "tags" &&
            (S = f
              .map((F) => {
                const R = v.value.get(F);
                return R == null ? void 0 : R.value;
              })
              .filter((F) => F !== void 0));
          const w = Array.from(new Set([...A.value, ...S]));
          Y(w),
            w.forEach((F) => {
              Z(F, !0);
            });
        },
        ce = M(() => e.virtual !== !1 && e.dropdownMatchSelectWidth !== !1);
      il(
        Ht(
          b(b({}, c), {
            flattenOptions: ee,
            onActiveValue: J,
            defaultActiveFirstOption: $,
            onSelect: z,
            menuItemSelectedIcon: ge(e, "menuItemSelectedIcon"),
            rawValues: A,
            fieldNames: r,
            virtual: ce,
            listHeight: ge(e, "listHeight"),
            listItemHeight: ge(e, "listItemHeight"),
            childrenAsData: a,
          })
        )
      );
      const I = me();
      o({
        focus() {
          var f;
          (f = I.value) === null || f === void 0 || f.focus();
        },
        blur() {
          var f;
          (f = I.value) === null || f === void 0 || f.blur();
        },
        scrollTo(f) {
          var S;
          (S = I.value) === null || S === void 0 || S.scrollTo(f);
        },
      });
      const O = M(() =>
        Be(e, [
          "id",
          "mode",
          "prefixCls",
          "backfill",
          "fieldNames",
          "inputValue",
          "searchValue",
          "onSearch",
          "autoClearSearchValue",
          "onSelect",
          "onDeselect",
          "dropdownMatchSelectWidth",
          "filterOption",
          "filterSort",
          "optionFilterProp",
          "optionLabelProp",
          "options",
          "children",
          "defaultActiveFirstOption",
          "menuItemSelectedIcon",
          "virtual",
          "listHeight",
          "listItemHeight",
          "value",
          "defaultValue",
          "labelInValue",
          "onChange",
        ])
      );
      return () =>
        y(
          Ao,
          G(
            G(G({}, O.value), t),
            {},
            {
              id: i,
              prefixCls: e.prefixCls,
              ref: I,
              omitDomProps: bl,
              mode: e.mode,
              displayValues: x.value,
              onDisplayValuesChange: le,
              searchValue: u.value,
              onSearch: ne,
              onSearchSplit: ae,
              dropdownMatchSelectWidth: e.dropdownMatchSelectWidth,
              OptionList: ul,
              emptyOptions: !ee.value.length,
              activeValue: P.value,
              activeDescendantId: `${i}_list_${X.value}`,
            }
          ),
          l
        );
    },
  }),
  ft = () => null;
ft.isSelectOption = !0;
ft.displayName = "ASelectOption";
const wl = ft,
  pt = () => null;
pt.isSelectOptGroup = !0;
pt.displayName = "ASelectOptGroup";
const Cl = pt;
var Il = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z",
        },
      },
    ],
  },
  name: "down",
  theme: "outlined",
};
const Ol = Il;
function Ft(e) {
  for (var n = 1; n < arguments.length; n++) {
    var o = arguments[n] != null ? Object(arguments[n]) : {},
      t = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" &&
      (t = t.concat(
        Object.getOwnPropertySymbols(o).filter(function (l) {
          return Object.getOwnPropertyDescriptor(o, l).enumerable;
        })
      )),
      t.forEach(function (l) {
        xl(e, l, o[l]);
      });
  }
  return e;
}
function xl(e, n, o) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = o),
    e
  );
}
var mt = function (n, o) {
  var t = Ft({}, n, o.attrs);
  return y(zt, Ft({}, t, { icon: Ol }), null);
};
mt.displayName = "DownOutlined";
mt.inheritAttrs = !1;
const $l = mt;
var Tl = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
        },
      },
    ],
  },
  name: "check",
  theme: "outlined",
};
const Ml = Tl;
function Dt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var o = arguments[n] != null ? Object(arguments[n]) : {},
      t = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" &&
      (t = t.concat(
        Object.getOwnPropertySymbols(o).filter(function (l) {
          return Object.getOwnPropertyDescriptor(o, l).enumerable;
        })
      )),
      t.forEach(function (l) {
        El(e, l, o[l]);
      });
  }
  return e;
}
function El(e, n, o) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = o),
    e
  );
}
var vt = function (n, o) {
  var t = Dt({}, n, o.attrs);
  return y(zt, Dt({}, t, { icon: Ml }), null);
};
vt.displayName = "CheckOutlined";
vt.inheritAttrs = !1;
const Rl = vt;
function Pl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
      loading: o,
      multiple: t,
      prefixCls: l,
      hasFeedback: i,
      feedbackIcon: s,
      showArrow: a,
    } = e,
    d = e.suffixIcon || (n.suffixIcon && n.suffixIcon()),
    r = e.clearIcon || (n.clearIcon && n.clearIcon()),
    u =
      e.menuItemSelectedIcon ||
      (n.menuItemSelectedIcon && n.menuItemSelectedIcon()),
    p = e.removeIcon || (n.removeIcon && n.removeIcon()),
    c = r ?? y(Dn, null, null),
    h = (C) => y(Ee, null, [a !== !1 && C, i && s]);
  let v = null;
  if (d !== void 0) v = h(d);
  else if (o) v = h(y(Nn, { spin: !0 }, null));
  else {
    const C = `${l}-suffix`;
    v = (T) => {
      let { open: L, showSearch: _ } = T;
      return h(L && _ ? y(Jn, { class: C }, null) : y($l, { class: C }, null));
    };
  }
  let E = null;
  u !== void 0 ? (E = u) : t ? (E = y(Rl, null, null)) : (E = null);
  let N = null;
  return (
    p !== void 0 ? (N = p) : (N = y(Vn, null, null)),
    { clearIcon: c, suffixIcon: v, itemIcon: E, removeIcon: N }
  );
}
const Fl = new se("antMoveDownIn", {
    "0%": {
      transform: "translate3d(0, 100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  Dl = new se("antMoveDownOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(0, 100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  Nl = new se("antMoveLeftIn", {
    "0%": {
      transform: "translate3d(-100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  Vl = new se("antMoveLeftOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(-100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  _l = new se("antMoveRightIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  Ll = new se("antMoveRightOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  Hl = new se("antMoveUpIn", {
    "0%": {
      transform: "translate3d(0, -100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  Al = new se("antMoveUpOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(0, -100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  zl = {
    "move-up": { inKeyframes: Hl, outKeyframes: Al },
    "move-down": { inKeyframes: Fl, outKeyframes: Dl },
    "move-left": { inKeyframes: Nl, outKeyframes: Vl },
    "move-right": { inKeyframes: _l, outKeyframes: Ll },
  },
  Nt = (e, n) => {
    const { antCls: o } = e,
      t = `${o}-${n}`,
      { inKeyframes: l, outKeyframes: i } = zl[n];
    return [
      jt(t, l, i, e.motionDurationMid),
      {
        [`
        ${t}-enter,
        ${t}-appear
      `]: { opacity: 0, animationTimingFunction: e.motionEaseOutCirc },
        [`${t}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  },
  rn = new se("antSlideUpIn", {
    "0%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 },
    "100%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 },
  }),
  sn = new se("antSlideUpOut", {
    "0%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 },
    "100%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 },
  }),
  un = new se("antSlideDownIn", {
    "0%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0,
    },
    "100%": {
      transform: "scaleY(1)",
      transformOrigin: "100% 100%",
      opacity: 1,
    },
  }),
  cn = new se("antSlideDownOut", {
    "0%": { transform: "scaleY(1)", transformOrigin: "100% 100%", opacity: 1 },
    "100%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0,
    },
  }),
  Bl = new se("antSlideLeftIn", {
    "0%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 },
    "100%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 },
  }),
  Kl = new se("antSlideLeftOut", {
    "0%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 },
    "100%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 },
  }),
  Wl = new se("antSlideRightIn", {
    "0%": { transform: "scaleX(0.8)", transformOrigin: "100% 0%", opacity: 0 },
    "100%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 },
  }),
  jl = new se("antSlideRightOut", {
    "0%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 },
    "100%": {
      transform: "scaleX(0.8)",
      transformOrigin: "100% 0%",
      opacity: 0,
    },
  }),
  Ul = {
    "slide-up": { inKeyframes: rn, outKeyframes: sn },
    "slide-down": { inKeyframes: un, outKeyframes: cn },
    "slide-left": { inKeyframes: Bl, outKeyframes: Kl },
    "slide-right": { inKeyframes: Wl, outKeyframes: jl },
  },
  Vt = (e, n) => {
    const { antCls: o } = e,
      t = `${o}-${n}`,
      { inKeyframes: l, outKeyframes: i } = Ul[n];
    return [
      jt(t, l, i, e.motionDurationMid),
      {
        [`
      ${t}-enter,
      ${t}-appear
    `]: {
          transform: "scale(0)",
          transformOrigin: "0% 0%",
          opacity: 0,
          animationTimingFunction: e.motionEaseOutQuint,
        },
        [`${t}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
      },
    ];
  },
  _t = (e) => {
    const { controlPaddingHorizontal: n } = e;
    return {
      position: "relative",
      display: "block",
      minHeight: e.controlHeight,
      padding: `${(e.controlHeight - e.fontSize * e.lineHeight) / 2}px ${n}px`,
      color: e.colorText,
      fontWeight: "normal",
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      boxSizing: "border-box",
    };
  },
  Yl = (e) => {
    const { antCls: n, componentCls: o } = e,
      t = `${o}-item`;
    return [
      {
        [`${o}-dropdown`]: b(b({}, rt(e)), {
          position: "absolute",
          top: -9999,
          zIndex: e.zIndexPopup,
          boxSizing: "border-box",
          padding: e.paddingXXS,
          overflow: "hidden",
          fontSize: e.fontSize,
          fontVariant: "initial",
          backgroundColor: e.colorBgElevated,
          borderRadius: e.borderRadiusLG,
          outline: "none",
          boxShadow: e.boxShadowSecondary,
          [`
            &${n}-slide-up-enter${n}-slide-up-enter-active${o}-dropdown-placement-bottomLeft,
            &${n}-slide-up-appear${n}-slide-up-appear-active${o}-dropdown-placement-bottomLeft
          `]: { animationName: rn },
          [`
            &${n}-slide-up-enter${n}-slide-up-enter-active${o}-dropdown-placement-topLeft,
            &${n}-slide-up-appear${n}-slide-up-appear-active${o}-dropdown-placement-topLeft
          `]: { animationName: un },
          [`&${n}-slide-up-leave${n}-slide-up-leave-active${o}-dropdown-placement-bottomLeft`]:
            { animationName: sn },
          [`&${n}-slide-up-leave${n}-slide-up-leave-active${o}-dropdown-placement-topLeft`]:
            { animationName: cn },
          "&-hidden": { display: "none" },
          "&-empty": { color: e.colorTextDisabled },
          [`${t}-empty`]: b(b({}, _t(e)), { color: e.colorTextDisabled }),
          [`${t}`]: b(b({}, _t(e)), {
            cursor: "pointer",
            transition: `background ${e.motionDurationSlow} ease`,
            borderRadius: e.borderRadiusSM,
            "&-group": {
              color: e.colorTextDescription,
              fontSize: e.fontSizeSM,
              cursor: "default",
            },
            "&-option": {
              display: "flex",
              "&-content": b({ flex: "auto" }, tt),
              "&-state": { flex: "none" },
              [`&-active:not(${t}-option-disabled)`]: {
                backgroundColor: e.controlItemBgHover,
              },
              [`&-selected:not(${t}-option-disabled)`]: {
                color: e.colorText,
                fontWeight: e.fontWeightStrong,
                backgroundColor: e.controlItemBgActive,
                [`${t}-option-state`]: { color: e.colorPrimary },
              },
              "&-disabled": {
                [`&${t}-option-selected`]: {
                  backgroundColor: e.colorBgContainerDisabled,
                },
                color: e.colorTextDisabled,
                cursor: "not-allowed",
              },
              "&-grouped": {
                paddingInlineStart: e.controlPaddingHorizontal * 2,
              },
            },
          }),
          "&-rtl": { direction: "rtl" },
        }),
      },
      Vt(e, "slide-up"),
      Vt(e, "slide-down"),
      Nt(e, "move-up"),
      Nt(e, "move-down"),
    ];
  },
  Gl = Yl,
  Oe = 2;
function dn(e) {
  let { controlHeightSM: n, controlHeight: o, lineWidth: t } = e;
  const l = (o - n) / 2 - t,
    i = Math.ceil(l / 2);
  return [l, i];
}
function Je(e, n) {
  const { componentCls: o, iconCls: t } = e,
    l = `${o}-selection-overflow`,
    i = e.controlHeightSM,
    [s] = dn(e),
    a = n ? `${o}-${n}` : "";
  return {
    [`${o}-multiple${a}`]: {
      fontSize: e.fontSize,
      [l]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex",
        },
      },
      [`${o}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        padding: `${s - Oe}px ${Oe * 2}px`,
        borderRadius: e.borderRadius,
        [`${o}-show-search&`]: { cursor: "text" },
        [`${o}-disabled&`]: {
          background: e.colorBgContainerDisabled,
          cursor: "not-allowed",
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${Oe}px 0`,
          lineHeight: `${i}px`,
          content: '"\\a0"',
        },
      },
      [`
        &${o}-show-arrow ${o}-selector,
        &${o}-allow-clear ${o}-selector
      `]: { paddingInlineEnd: e.fontSizeIcon + e.controlPaddingHorizontal },
      [`${o}-selection-item`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: i,
        marginTop: Oe,
        marginBottom: Oe,
        lineHeight: `${i - e.lineWidth * 2}px`,
        background: e.colorFillSecondary,
        border: `${e.lineWidth}px solid ${e.colorSplit}`,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: Oe * 2,
        paddingInlineStart: e.paddingXS,
        paddingInlineEnd: e.paddingXS / 2,
        [`${o}-disabled&`]: {
          color: e.colorTextDisabled,
          borderColor: e.colorBorder,
          cursor: "not-allowed",
        },
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.paddingXS / 2,
          overflow: "hidden",
          whiteSpace: "pre",
          textOverflow: "ellipsis",
        },
        "&-remove": b(b({}, Bt()), {
          display: "inline-block",
          color: e.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${t}`]: { verticalAlign: "-0.2em" },
          "&:hover": { color: e.colorIconHover },
        }),
      },
      [`${l}-item + ${l}-item`]: {
        [`${o}-selection-search`]: { marginInlineStart: 0 },
      },
      [`${o}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.inputPaddingHorizontalBase - s,
        [`
          &-input,
          &-mirror
        `]: {
          height: i,
          fontFamily: e.fontFamily,
          lineHeight: `${i}px`,
          transition: `all ${e.motionDurationSlow}`,
        },
        "&-input": { width: "100%", minWidth: 4.1 },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          visibility: "hidden",
        },
      },
      [`${o}-selection-placeholder `]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.inputPaddingHorizontalBase,
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`,
      },
    },
  };
}
function Xl(e) {
  const { componentCls: n } = e,
    o = be(e, {
      controlHeight: e.controlHeightSM,
      controlHeightSM: e.controlHeightXS,
      borderRadius: e.borderRadiusSM,
      borderRadiusSM: e.borderRadiusXS,
    }),
    [, t] = dn(e);
  return [
    Je(e),
    Je(o, "sm"),
    {
      [`${n}-multiple${n}-sm`]: {
        [`${n}-selection-placeholder`]: {
          insetInlineStart: e.controlPaddingHorizontalSM - e.lineWidth,
          insetInlineEnd: "auto",
        },
        [`${n}-selection-search`]: { marginInlineStart: t },
      },
    },
    Je(
      be(e, {
        fontSize: e.fontSizeLG,
        controlHeight: e.controlHeightLG,
        controlHeightSM: e.controlHeight,
        borderRadius: e.borderRadiusLG,
        borderRadiusSM: e.borderRadius,
      }),
      "lg"
    ),
  ];
}
function ke(e, n) {
  const { componentCls: o, inputPaddingHorizontalBase: t, borderRadius: l } = e,
    i = e.controlHeight - e.lineWidth * 2,
    s = Math.ceil(e.fontSize * 1.25),
    a = n ? `${o}-${n}` : "";
  return {
    [`${o}-single${a}`]: {
      fontSize: e.fontSize,
      [`${o}-selector`]: b(b({}, rt(e)), {
        display: "flex",
        borderRadius: l,
        [`${o}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: t,
          insetInlineEnd: t,
          bottom: 0,
          "&-input": { width: "100%" },
        },
        [`
          ${o}-selection-item,
          ${o}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${i}px`,
          transition: `all ${e.motionDurationSlow}`,
          "@supports (-moz-appearance: meterbar)": { lineHeight: `${i}px` },
        },
        [`${o}-selection-item`]: { position: "relative", userSelect: "none" },
        [`${o}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none",
        },
        [[
          "&:after",
          `${o}-selection-item:after`,
          `${o}-selection-placeholder:after`,
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"',
        },
      }),
      [`
        &${o}-show-arrow ${o}-selection-item,
        &${o}-show-arrow ${o}-selection-placeholder
      `]: { paddingInlineEnd: s },
      [`&${o}-open ${o}-selection-item`]: { color: e.colorTextPlaceholder },
      [`&:not(${o}-customize-input)`]: {
        [`${o}-selector`]: {
          width: "100%",
          height: e.controlHeight,
          padding: `0 ${t}px`,
          [`${o}-selection-search-input`]: { height: i },
          "&:after": { lineHeight: `${i}px` },
        },
      },
      [`&${o}-customize-input`]: {
        [`${o}-selector`]: {
          "&:after": { display: "none" },
          [`${o}-selection-search`]: { position: "static", width: "100%" },
          [`${o}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${t}px`,
            "&:after": { display: "none" },
          },
        },
      },
    },
  };
}
function ql(e) {
  const { componentCls: n } = e,
    o = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    ke(e),
    ke(
      be(e, {
        controlHeight: e.controlHeightSM,
        borderRadius: e.borderRadiusSM,
      }),
      "sm"
    ),
    {
      [`${n}-single${n}-sm`]: {
        [`&:not(${n}-customize-input)`]: {
          [`${n}-selection-search`]: { insetInlineStart: o, insetInlineEnd: o },
          [`${n}-selector`]: { padding: `0 ${o}px` },
          [`&${n}-show-arrow ${n}-selection-search`]: {
            insetInlineEnd: o + e.fontSize * 1.5,
          },
          [`
            &${n}-show-arrow ${n}-selection-item,
            &${n}-show-arrow ${n}-selection-placeholder
          `]: { paddingInlineEnd: e.fontSize * 1.5 },
        },
      },
    },
    ke(
      be(e, {
        controlHeight: e.controlHeightLG,
        fontSize: e.fontSizeLG,
        borderRadius: e.borderRadiusLG,
      }),
      "lg"
    ),
  ];
}
const Ql = (e) => {
    const { componentCls: n } = e;
    return {
      position: "relative",
      backgroundColor: e.colorBgContainer,
      border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      input: { cursor: "pointer" },
      [`${n}-show-search&`]: {
        cursor: "text",
        input: { cursor: "auto", color: "inherit" },
      },
      [`${n}-disabled&`]: {
        color: e.colorTextDisabled,
        background: e.colorBgContainerDisabled,
        cursor: "not-allowed",
        [`${n}-multiple&`]: { background: e.colorBgContainerDisabled },
        input: { cursor: "not-allowed" },
      },
    };
  },
  et = function (e, n) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const {
        componentCls: t,
        borderHoverColor: l,
        outlineColor: i,
        antCls: s,
      } = n,
      a = o ? { [`${t}-selector`]: { borderColor: l } } : {};
    return {
      [e]: {
        [`&:not(${t}-disabled):not(${t}-customize-input):not(${s}-pagination-size-changer)`]:
          b(b({}, a), {
            [`${t}-focused& ${t}-selector`]: {
              borderColor: l,
              boxShadow: `0 0 0 ${n.controlOutlineWidth}px ${i}`,
              borderInlineEndWidth: `${n.controlLineWidth}px !important`,
              outline: 0,
            },
            [`&:hover ${t}-selector`]: {
              borderColor: l,
              borderInlineEndWidth: `${n.controlLineWidth}px !important`,
            },
          }),
      },
    };
  },
  Zl = (e) => {
    const { componentCls: n } = e;
    return {
      [`${n}-selection-search-input`]: {
        margin: 0,
        padding: 0,
        background: "transparent",
        border: "none",
        outline: "none",
        appearance: "none",
        "&::-webkit-search-cancel-button": {
          display: "none",
          "-webkit-appearance": "none",
        },
      },
    };
  },
  Jl = (e) => {
    const { componentCls: n, inputPaddingHorizontalBase: o, iconCls: t } = e;
    return {
      [n]: b(b({}, rt(e)), {
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        [`&:not(${n}-customize-input) ${n}-selector`]: b(b({}, Ql(e)), Zl(e)),
        [`${n}-selection-item`]: b({ flex: 1, fontWeight: "normal" }, tt),
        [`${n}-selection-placeholder`]: b(b({}, tt), {
          flex: 1,
          color: e.colorTextPlaceholder,
          pointerEvents: "none",
        }),
        [`${n}-arrow`]: b(b({}, Bt()), {
          position: "absolute",
          top: "50%",
          insetInlineStart: "auto",
          insetInlineEnd: o,
          height: e.fontSizeIcon,
          marginTop: -e.fontSizeIcon / 2,
          color: e.colorTextQuaternary,
          fontSize: e.fontSizeIcon,
          lineHeight: 1,
          textAlign: "center",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          [t]: {
            verticalAlign: "top",
            transition: `transform ${e.motionDurationSlow}`,
            "> svg": { verticalAlign: "top" },
            [`&:not(${n}-suffix)`]: { pointerEvents: "auto" },
          },
          [`${n}-disabled &`]: { cursor: "not-allowed" },
          "> *:not(:last-child)": { marginInlineEnd: 8 },
        }),
        [`${n}-clear`]: {
          position: "absolute",
          top: "50%",
          insetInlineStart: "auto",
          insetInlineEnd: o,
          zIndex: 1,
          display: "inline-block",
          width: e.fontSizeIcon,
          height: e.fontSizeIcon,
          marginTop: -e.fontSizeIcon / 2,
          color: e.colorTextQuaternary,
          fontSize: e.fontSizeIcon,
          fontStyle: "normal",
          lineHeight: 1,
          textAlign: "center",
          textTransform: "none",
          background: e.colorBgContainer,
          cursor: "pointer",
          opacity: 0,
          transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
          textRendering: "auto",
          "&:before": { display: "block" },
          "&:hover": { color: e.colorTextTertiary },
        },
        "&:hover": { [`${n}-clear`]: { opacity: 1 } },
      }),
      [`${n}-has-feedback`]: {
        [`${n}-clear`]: { insetInlineEnd: o + e.fontSize + e.paddingXXS },
      },
    };
  },
  kl = (e) => {
    const { componentCls: n } = e;
    return [
      {
        [n]: {
          [`&-borderless ${n}-selector`]: {
            backgroundColor: "transparent !important",
            borderColor: "transparent !important",
            boxShadow: "none !important",
          },
          [`&${n}-in-form-item`]: { width: "100%" },
        },
      },
      Jl(e),
      ql(e),
      Xl(e),
      Gl(e),
      { [`${n}-rtl`]: { direction: "rtl" } },
      et(
        n,
        be(e, {
          borderHoverColor: e.colorPrimaryHover,
          outlineColor: e.controlOutline,
        })
      ),
      et(
        `${n}-status-error`,
        be(e, {
          borderHoverColor: e.colorErrorHover,
          outlineColor: e.colorErrorOutline,
        }),
        !0
      ),
      et(
        `${n}-status-warning`,
        be(e, {
          borderHoverColor: e.colorWarningHover,
          outlineColor: e.colorWarningOutline,
        }),
        !0
      ),
      oo(e, { borderElCls: `${n}-selector`, focusElCls: `${n}-focused` }),
    ];
  },
  ei = _n(
    "Select",
    (e, n) => {
      let { rootPrefixCls: o } = n;
      const t = be(e, {
        rootPrefixCls: o,
        inputPaddingHorizontalBase: e.paddingSM - 1,
      });
      return [kl(t)];
    },
    (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 })
  ),
  ti = () =>
    b(
      b(
        {},
        Be(an(), [
          "inputIcon",
          "mode",
          "getInputElement",
          "getRawInputElement",
          "backfill",
        ])
      ),
      {
        value: Ot([Array, Object, String, Number]),
        defaultValue: Ot([Array, Object, String, Number]),
        notFoundContent: D.any,
        suffixIcon: D.any,
        itemIcon: D.any,
        size: Te(),
        mode: Te(),
        bordered: Ln(!0),
        transitionName: String,
        choiceTransitionName: Te(""),
        popupClassName: String,
        dropdownClassName: String,
        placement: Te(),
        status: Te(),
        "onUpdate:value": Hn(),
      }
    ),
  Lt = "SECRET_COMBOBOX_MODE_DO_NOT_USE",
  pe = ue({
    compatConfig: { MODE: 3 },
    name: "ASelect",
    Option: wl,
    OptGroup: Cl,
    inheritAttrs: !1,
    props: it(ti(), { listHeight: 256, listItemHeight: 24 }),
    SECRET_COMBOBOX_MODE_DO_NOT_USE: Lt,
    slots: Object,
    setup(e, n) {
      let { attrs: o, emit: t, slots: l, expose: i } = n;
      const s = me(),
        a = kn(),
        d = eo.useInject(),
        r = M(() => to(d.status, e.status)),
        u = () => {
          var z;
          (z = s.value) === null || z === void 0 || z.focus();
        },
        p = () => {
          var z;
          (z = s.value) === null || z === void 0 || z.blur();
        },
        c = (z) => {
          var le;
          (le = s.value) === null || le === void 0 || le.scrollTo(z);
        },
        h = M(() => {
          const { mode: z } = e;
          if (z !== "combobox") return z === Lt ? "combobox" : z;
        }),
        {
          prefixCls: v,
          direction: E,
          configProvider: N,
          renderEmpty: C,
          size: T,
          getPrefixCls: L,
          getPopupContainer: _,
          disabled: m,
          select: x,
        } = An("select", e),
        { compactSize: A, compactItemClassnames: V } = lo(v, E),
        H = M(() => A.value || T.value),
        j = zn(),
        U = M(() => {
          var z;
          return (z = m.value) !== null && z !== void 0 ? z : j.value;
        }),
        [Q, ee] = ei(v),
        Y = M(() => L()),
        P = M(() =>
          e.placement !== void 0
            ? e.placement
            : E.value === "rtl"
            ? "bottomRight"
            : "bottomLeft"
        ),
        K = M(() => Bn(Y.value, Kn(P.value), e.transitionName)),
        X = M(() =>
          re(
            {
              [`${v.value}-lg`]: H.value === "large",
              [`${v.value}-sm`]: H.value === "small",
              [`${v.value}-rtl`]: E.value === "rtl",
              [`${v.value}-borderless`]: !e.bordered,
              [`${v.value}-in-form-item`]: d.isFormItemInput,
            },
            no(v.value, r.value, d.hasFeedback),
            V.value,
            ee.value
          )
        ),
        g = function () {
          for (
            var z = arguments.length, le = new Array(z), ne = 0;
            ne < z;
            ne++
          )
            le[ne] = arguments[ne];
          t("update:value", le[0]), t("change", ...le), a.onFieldChange();
        },
        $ = (z) => {
          t("blur", z), a.onFieldBlur();
        };
      i({ blur: p, focus: u, scrollTo: c });
      const J = M(() => h.value === "multiple" || h.value === "tags"),
        Z = M(() =>
          e.showArrow !== void 0
            ? e.showArrow
            : e.loading || !(J.value || h.value === "combobox")
        );
      return () => {
        var z, le, ne, ae;
        const {
            notFoundContent: ce,
            listHeight: I = 256,
            listItemHeight: O = 24,
            popupClassName: f,
            dropdownClassName: S,
            virtual: w,
            dropdownMatchSelectWidth: F,
            id: R = a.id.value,
            placeholder: B = (z = l.placeholder) === null || z === void 0
              ? void 0
              : z.call(l),
            showArrow: te,
          } = e,
          { hasFeedback: k, feedbackIcon: de } = d;
        let oe;
        ce !== void 0
          ? (oe = ce)
          : l.notFoundContent
          ? (oe = l.notFoundContent())
          : h.value === "combobox"
          ? (oe = null)
          : (oe =
              (C == null ? void 0 : C("Select")) ||
              y(Wn, { componentName: "Select" }, null));
        const {
            suffixIcon: we,
            itemIcon: fe,
            removeIcon: Ce,
            clearIcon: De,
          } = Pl(
            b(b({}, e), {
              multiple: J.value,
              prefixCls: v.value,
              hasFeedback: k,
              feedbackIcon: de,
              showArrow: Z.value,
            }),
            l
          ),
          Ne = Be(e, [
            "prefixCls",
            "suffixIcon",
            "itemIcon",
            "removeIcon",
            "clearIcon",
            "size",
            "bordered",
            "status",
          ]),
          Ue = re(
            f || S,
            { [`${v.value}-dropdown-${E.value}`]: E.value === "rtl" },
            ee.value
          );
        return Q(
          y(
            Sl,
            G(
              G(G({ ref: s, virtual: w, dropdownMatchSelectWidth: F }, Ne), o),
              {},
              {
                showSearch:
                  (le = e.showSearch) !== null && le !== void 0
                    ? le
                    : (ne = x == null ? void 0 : x.value) === null ||
                      ne === void 0
                    ? void 0
                    : ne.showSearch,
                placeholder: B,
                listHeight: I,
                listItemHeight: O,
                mode: h.value,
                prefixCls: v.value,
                direction: E.value,
                inputIcon: we,
                menuItemSelectedIcon: fe,
                removeIcon: Ce,
                clearIcon: De,
                notFoundContent: oe,
                class: [X.value, o.class],
                getPopupContainer: _ == null ? void 0 : _.value,
                dropdownClassName: Ue,
                onChange: g,
                onBlur: $,
                id: R,
                dropdownRender: Ne.dropdownRender || l.dropdownRender,
                transitionName: K.value,
                children:
                  (ae = l.default) === null || ae === void 0
                    ? void 0
                    : ae.call(l),
                tagRender: e.tagRender || l.tagRender,
                optionLabelRender: l.optionLabel,
                maxTagPlaceholder: e.maxTagPlaceholder || l.maxTagPlaceholder,
                showArrow: k || te,
                disabled: U.value,
              }
            ),
            { option: l.option }
          )
        );
      };
    },
  });
pe.install = function (e) {
  return (
    e.component(pe.name, pe),
    e.component(pe.Option.displayName, pe.Option),
    e.component(pe.OptGroup.displayName, pe.OptGroup),
    e
  );
};
pe.Option;
pe.OptGroup;
const Si = pe;
export {
  $l as D,
  nl as L,
  So as O,
  Si as _,
  No as a,
  rn as b,
  un as c,
  sn as d,
  cn as e,
  Nt as f,
  Vt as i,
  ti as s,
  Pt as u,
};
