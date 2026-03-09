import {
  am as j,
  an as b,
  ah as P,
  P as B,
  al as N,
  f as Q,
  m as Y,
  a as w,
  bw as Z,
  r as ee,
  i as X,
  l as F,
  c as R,
  b as T,
  bI as ne,
  ak as oe,
  bJ as te,
  ao as ae,
} from "./entry.8aa394d7.js";
import { c as G } from "./motion.d46d0bbf.js";
import { R as le } from "./RightOutlined.f501bedb.js";
import { f as re } from "./firstNotUndefined.29a740f3.js";
import { g as se, c as ie } from "./collapseMotion.3a38b156.js";
import {
  j as V,
  a as ce,
  b as de,
  k as pe,
  z as m,
  s as ue,
  w as fe,
  a7 as me,
  ak as ve,
  K as be,
} from "./swiper-vue.d5cda4d1.js";
import { d as $e } from "./devWarning.0cb68424.js";
const ge = () => ({
    prefixCls: String,
    activeKey: j([Array, Number, String]),
    defaultActiveKey: j([Array, Number, String]),
    accordion: b(),
    destroyInactivePanel: b(),
    bordered: b(),
    expandIcon: P(),
    openAnimation: B.object,
    expandIconPosition: N(),
    collapsible: N(),
    ghost: b(),
    onChange: P(),
    "onUpdate:activeKey": P(),
  }),
  J = () => ({
    openAnimation: B.object,
    prefixCls: String,
    header: B.any,
    headerClass: String,
    showArrow: b(),
    isActive: b(),
    destroyInactivePanel: b(),
    disabled: b(),
    accordion: b(),
    forceRender: b(),
    expandIcon: P(),
    extra: B.any,
    panelKey: j(),
    collapsible: N(),
    role: String,
    onItemClick: P(),
  }),
  xe = (n) => {
    const {
        componentCls: e,
        collapseContentBg: t,
        padding: p,
        collapseContentPaddingHorizontal: s,
        collapseHeaderBg: i,
        collapseHeaderPadding: r,
        collapsePanelBorderRadius: u,
        lineWidth: v,
        lineType: g,
        colorBorder: A,
        colorText: y,
        colorTextHeading: $,
        colorTextDisabled: x,
        fontSize: I,
        lineHeight: h,
        marginSM: o,
        paddingSM: a,
        motionDurationSlow: l,
        fontSizeIcon: f,
      } = n,
      c = `${v}px ${g} ${A}`;
    return {
      [e]: w(w({}, ee(n)), {
        backgroundColor: i,
        border: c,
        borderBottom: 0,
        borderRadius: `${u}px`,
        ["&-rtl"]: { direction: "rtl" },
        [`& > ${e}-item`]: {
          borderBottom: c,
          ["&:last-child"]: {
            [`
            &,
            & > ${e}-header`]: { borderRadius: `0 0 ${u}px ${u}px` },
          },
          [`> ${e}-header`]: {
            position: "relative",
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "flex-start",
            padding: r,
            color: $,
            lineHeight: h,
            cursor: "pointer",
            transition: `all ${l}, visibility 0s`,
            [`> ${e}-header-text`]: { flex: "auto" },
            "&:focus": { outline: "none" },
            [`${e}-expand-icon`]: {
              height: I * h,
              display: "flex",
              alignItems: "center",
              paddingInlineEnd: o,
            },
            [`${e}-arrow`]: w(w({}, Z()), {
              fontSize: f,
              svg: { transition: `transform ${l}` },
            }),
            [`${e}-header-text`]: { marginInlineEnd: "auto" },
          },
          [`${e}-header-collapsible-only`]: {
            cursor: "default",
            [`${e}-header-text`]: { flex: "none", cursor: "pointer" },
            [`${e}-expand-icon`]: { cursor: "pointer" },
          },
          [`${e}-icon-collapsible-only`]: {
            cursor: "default",
            [`${e}-expand-icon`]: { cursor: "pointer" },
          },
          [`&${e}-no-arrow`]: { [`> ${e}-header`]: { paddingInlineStart: a } },
        },
        [`${e}-content`]: {
          color: y,
          backgroundColor: t,
          borderTop: c,
          [`& > ${e}-content-box`]: { padding: `${p}px ${s}px` },
          ["&-hidden"]: { display: "none" },
        },
        [`${e}-item:last-child`]: {
          [`> ${e}-content`]: { borderRadius: `0 0 ${u}px ${u}px` },
        },
        [`& ${e}-item-disabled > ${e}-header`]: {
          [`
          &,
          & > .arrow
        `]: { color: x, cursor: "not-allowed" },
        },
        [`&${e}-icon-position-end`]: {
          [`& > ${e}-item`]: {
            [`> ${e}-header`]: {
              [`${e}-expand-icon`]: {
                order: 1,
                paddingInlineEnd: 0,
                paddingInlineStart: o,
              },
            },
          },
        },
      }),
    };
  },
  he = (n) => {
    const { componentCls: e } = n,
      t = `> ${e}-item > ${e}-header ${e}-arrow svg`;
    return { [`${e}-rtl`]: { [t]: { transform: "rotate(180deg)" } } };
  },
  ye = (n) => {
    const {
      componentCls: e,
      collapseHeaderBg: t,
      paddingXXS: p,
      colorBorder: s,
    } = n;
    return {
      [`${e}-borderless`]: {
        backgroundColor: t,
        border: 0,
        [`> ${e}-item`]: { borderBottom: `1px solid ${s}` },
        [`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]: { borderRadius: 0 },
        [`> ${e}-item:last-child`]: { borderBottom: 0 },
        [`> ${e}-item > ${e}-content`]: {
          backgroundColor: "transparent",
          borderTop: 0,
        },
        [`> ${e}-item > ${e}-content > ${e}-content-box`]: { paddingTop: p },
      },
    };
  },
  Ce = (n) => {
    const { componentCls: e, paddingSM: t } = n;
    return {
      [`${e}-ghost`]: {
        backgroundColor: "transparent",
        border: 0,
        [`> ${e}-item`]: {
          borderBottom: 0,
          [`> ${e}-content`]: {
            backgroundColor: "transparent",
            border: 0,
            [`> ${e}-content-box`]: { paddingBlock: t },
          },
        },
      },
    };
  },
  Ae = Q("Collapse", (n) => {
    const e = Y(n, {
      collapseContentBg: n.colorBgContainer,
      collapseHeaderBg: n.colorFillAlter,
      collapseHeaderPadding: `${n.paddingSM}px ${n.padding}px`,
      collapsePanelBorderRadius: n.borderRadiusLG,
      collapseContentPaddingHorizontal: 16,
    });
    return [xe(e), ye(e), Ce(e), he(e), se(e)];
  });
function U(n) {
  let e = n;
  if (!Array.isArray(e)) {
    const t = typeof e;
    e = t === "number" || t === "string" ? [e] : [];
  }
  return e.map((t) => String(t));
}
const k = V({
    compatConfig: { MODE: 3 },
    name: "ACollapse",
    inheritAttrs: !1,
    props: X(ge(), {
      accordion: !1,
      destroyInactivePanel: !1,
      bordered: !0,
      openAnimation: ie("ant-motion-collapse", !1),
      expandIconPosition: "start",
    }),
    slots: Object,
    setup(n, e) {
      let { attrs: t, slots: p, emit: s } = e;
      const i = ce(U(re([n.activeKey, n.defaultActiveKey])));
      de(
        () => n.activeKey,
        () => {
          i.value = U(n.activeKey);
        },
        { deep: !0 }
      );
      const { prefixCls: r, direction: u } = F("collapse", n),
        [v, g] = Ae(r),
        A = pe(() => {
          const { expandIconPosition: o } = n;
          return o !== void 0 ? o : u.value === "rtl" ? "end" : "start";
        }),
        y = (o) => {
          const { expandIcon: a = p.expandIcon } = n,
            l = a ? a(o) : m(le, { rotate: o.isActive ? 90 : void 0 }, null);
          return m(
            "div",
            {
              class: [`${r.value}-expand-icon`, g.value],
              onClick: () =>
                ["header", "icon"].includes(n.collapsible) && x(o.panelKey),
            },
            [
              ae(Array.isArray(a) ? l[0] : l)
                ? G(l, { class: `${r.value}-arrow` }, !1)
                : l,
            ]
          );
        },
        $ = (o) => {
          n.activeKey === void 0 && (i.value = o);
          const a = n.accordion ? o[0] : o;
          s("update:activeKey", a), s("change", a);
        },
        x = (o) => {
          let a = i.value;
          if (n.accordion) a = a[0] === o ? [] : [o];
          else {
            a = [...a];
            const l = a.indexOf(o);
            l > -1 ? a.splice(l, 1) : a.push(o);
          }
          $(a);
        },
        I = (o, a) => {
          var l, f, c;
          if (te(o)) return;
          const S = i.value,
            {
              accordion: d,
              destroyInactivePanel: _,
              collapsible: E,
              openAnimation: K,
            } = n,
            C = String((l = o.key) !== null && l !== void 0 ? l : a),
            {
              header: H = (c =
                (f = o.children) === null || f === void 0
                  ? void 0
                  : f.header) === null || c === void 0
                ? void 0
                : c.call(f),
              headerClass: L,
              collapsible: M,
              disabled: W,
            } = o.props || {};
          let D = !1;
          d ? (D = S[0] === C) : (D = S.indexOf(C) > -1);
          let O = M ?? E;
          (W || W === "") && (O = "disabled");
          const q = {
            key: C,
            panelKey: C,
            header: H,
            headerClass: L,
            isActive: D,
            prefixCls: r.value,
            destroyInactivePanel: _,
            openAnimation: K,
            accordion: d,
            onItemClick: O === "disabled" ? null : x,
            expandIcon: y,
            collapsible: O,
          };
          return G(o, q);
        },
        h = () => {
          var o;
          return oe(
            (o = p.default) === null || o === void 0 ? void 0 : o.call(p)
          ).map(I);
        };
      return () => {
        const { accordion: o, bordered: a, ghost: l } = n,
          f = R(
            r.value,
            {
              [`${r.value}-borderless`]: !a,
              [`${r.value}-icon-position-${A.value}`]: !0,
              [`${r.value}-rtl`]: u.value === "rtl",
              [`${r.value}-ghost`]: !!l,
              [t.class]: !!t.class,
            },
            g.value
          );
        return v(
          m(
            "div",
            T(
              T({ class: f }, ne(t)),
              {},
              { style: t.style, role: o ? "tablist" : null }
            ),
            [h()]
          )
        );
      };
    },
  }),
  Ie = V({
    compatConfig: { MODE: 3 },
    name: "PanelContent",
    props: J(),
    setup(n, e) {
      let { slots: t } = e;
      const p = ue(!1);
      return (
        fe(() => {
          (n.isActive || n.forceRender) && (p.value = !0);
        }),
        () => {
          var s;
          if (!p.value) return null;
          const { prefixCls: i, isActive: r, role: u } = n;
          return m(
            "div",
            {
              class: R(`${i}-content`, {
                [`${i}-content-active`]: r,
                [`${i}-content-inactive`]: !r,
              }),
              role: u,
            },
            [
              m("div", { class: `${i}-content-box` }, [
                (s = t.default) === null || s === void 0 ? void 0 : s.call(t),
              ]),
            ]
          );
        }
      );
    },
  }),
  z = V({
    compatConfig: { MODE: 3 },
    name: "ACollapsePanel",
    inheritAttrs: !1,
    props: X(J(), {
      showArrow: !0,
      isActive: !1,
      onItemClick() {},
      headerClass: "",
      forceRender: !1,
    }),
    slots: Object,
    setup(n, e) {
      let { slots: t, emit: p, attrs: s } = e;
      $e(
        n.disabled === void 0,
        "Collapse.Panel",
        '`disabled` is deprecated. Please use `collapsible="disabled"` instead.'
      );
      const { prefixCls: i } = F("collapse", n),
        r = () => {
          p("itemClick", n.panelKey);
        },
        u = (v) => {
          (v.key === "Enter" || v.keyCode === 13 || v.which === 13) && r();
        };
      return () => {
        var v, g;
        const {
            header: A = (v = t.header) === null || v === void 0
              ? void 0
              : v.call(t),
            headerClass: y,
            isActive: $,
            showArrow: x,
            destroyInactivePanel: I,
            accordion: h,
            forceRender: o,
            openAnimation: a,
            expandIcon: l = t.expandIcon,
            extra: f = (g = t.extra) === null || g === void 0
              ? void 0
              : g.call(t),
            collapsible: c,
          } = n,
          S = c === "disabled",
          d = i.value,
          _ = R(`${d}-header`, {
            [y]: y,
            [`${d}-header-collapsible-only`]: c === "header",
            [`${d}-icon-collapsible-only`]: c === "icon",
          }),
          E = R({
            [`${d}-item`]: !0,
            [`${d}-item-active`]: $,
            [`${d}-item-disabled`]: S,
            [`${d}-no-arrow`]: !x,
            [`${s.class}`]: !!s.class,
          });
        let K = m("i", { class: "arrow" }, null);
        x && typeof l == "function" && (K = l(n));
        const C = me(
            m(
              Ie,
              {
                prefixCls: d,
                isActive: $,
                forceRender: o,
                role: h ? "tabpanel" : null,
              },
              { default: t.default }
            ),
            [[ve, $]]
          ),
          H = w({ appear: !1, css: !1 }, a);
        return m("div", T(T({}, s), {}, { class: E }), [
          m(
            "div",
            {
              class: _,
              onClick: () => !["header", "icon"].includes(c) && r(),
              role: h ? "tab" : "button",
              tabindex: S ? -1 : 0,
              "aria-expanded": $,
              onKeypress: u,
            },
            [
              x && K,
              m(
                "span",
                {
                  onClick: () => c === "header" && r(),
                  class: `${d}-header-text`,
                },
                [A]
              ),
              f && m("div", { class: `${d}-extra` }, [f]),
            ]
          ),
          m(be, H, { default: () => [!I || $ ? C : null] }),
        ]);
      };
    },
  });
k.Panel = z;
k.install = function (n) {
  return n.component(k.name, k), n.component(z.name, z), n;
};
export { k as C, z as _ };
