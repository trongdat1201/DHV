import {
  bc as Z,
  a as l,
  P as u,
  c as $,
  bp as H,
  bq as Ie,
  ao as le,
  br as Pe,
  b as N,
  f as Oe,
  m as ze,
  r as Te,
  bs as se,
  h as we,
  l as Be,
  k as Ne,
  bt as Ee,
  an as F,
  aq as je,
  ah as E,
  am as _e,
  al as Me,
  bu as De,
} from "./entry.8aa394d7.js";
import {
  s as Ae,
  y as Re,
  q as Le,
  z as a,
  j as D,
  a as He,
  k as Q,
  a7 as ve,
  W as Ce,
  t as Fe,
} from "./swiper-vue.d5cda4d1.js";
import { R as ue } from "./RightOutlined.f501bedb.js";
import { s as $e, _ as U } from "./index.9e7cd0be.js";
import { u as Ve, i as We, g as Ke, b as Je } from "./index.661a1686.js";
import { B as Xe } from "./Trigger.dd535606.js";
import { c as Se } from "./statusUtils.cee29603.js";
import { c as ce } from "./motion.d46d0bbf.js";
import { f as pe } from "./firstNotUndefined.29a740f3.js";
function Ue() {
  const e = Ae({});
  let t = null;
  const i = Ve();
  return (
    Re(() => {
      t = i.value.subscribe((n) => {
        e.value = n;
      });
    }),
    Le(() => {
      i.value.unsubscribe(t);
    }),
    e
  );
}
var qe = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
        },
      },
    ],
  },
  name: "left",
  theme: "outlined",
};
const Ge = qe;
function ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? Object(arguments[t]) : {},
      n = Object.keys(i);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(i).filter(function (r) {
          return Object.getOwnPropertyDescriptor(i, r).enumerable;
        })
      )),
      n.forEach(function (r) {
        Qe(e, r, i[r]);
      });
  }
  return e;
}
function Qe(e, t, i) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = i),
    e
  );
}
var Y = function (t, i) {
  var n = ge({}, t, i.attrs);
  return a(Z, ge({}, n, { icon: Ge }), null);
};
Y.displayName = "LeftOutlined";
Y.inheritAttrs = !1;
const de = Y;
var Ze = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z",
        },
      },
    ],
  },
  name: "double-left",
  theme: "outlined",
};
const Ye = Ze;
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? Object(arguments[t]) : {},
      n = Object.keys(i);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(i).filter(function (r) {
          return Object.getOwnPropertyDescriptor(i, r).enumerable;
        })
      )),
      n.forEach(function (r) {
        ke(e, r, i[r]);
      });
  }
  return e;
}
function ke(e, t, i) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = i),
    e
  );
}
var k = function (t, i) {
  var n = me({}, t, i.attrs);
  return a(Z, me({}, n, { icon: Ye }), null);
};
k.displayName = "DoubleLeftOutlined";
k.inheritAttrs = !1;
const he = k;
var et = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z",
        },
      },
    ],
  },
  name: "double-right",
  theme: "outlined",
};
const tt = et;
function fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? Object(arguments[t]) : {},
      n = Object.keys(i);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(i).filter(function (r) {
          return Object.getOwnPropertyDescriptor(i, r).enumerable;
        })
      )),
      n.forEach(function (r) {
        it(e, r, i[r]);
      });
  }
  return e;
}
function it(e, t, i) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = i),
    e
  );
}
var ee = function (t, i) {
  var n = fe({}, t, i.attrs);
  return a(Z, fe({}, n, { icon: tt }), null);
};
ee.displayName = "DoubleRightOutlined";
ee.inheritAttrs = !1;
const be = ee,
  nt = D({
    name: "MiniSelect",
    compatConfig: { MODE: 3 },
    inheritAttrs: !1,
    props: $e(),
    Option: U.Option,
    setup(e, t) {
      let { attrs: i, slots: n } = t;
      return () => {
        const r = l(l(l({}, e), { size: "small" }), i);
        return a(U, r, n);
      };
    },
  }),
  rt = D({
    name: "MiddleSelect",
    inheritAttrs: !1,
    props: $e(),
    Option: U.Option,
    setup(e, t) {
      let { attrs: i, slots: n } = t;
      return () => {
        const r = l(l(l({}, e), { size: "middle" }), i);
        return a(U, r, n);
      };
    },
  }),
  j = D({
    compatConfig: { MODE: 3 },
    name: "Pager",
    inheritAttrs: !1,
    props: {
      rootPrefixCls: String,
      page: Number,
      active: { type: Boolean, default: void 0 },
      last: { type: Boolean, default: void 0 },
      locale: u.object,
      showTitle: { type: Boolean, default: void 0 },
      itemRender: { type: Function, default: () => {} },
      onClick: { type: Function },
      onKeypress: { type: Function },
    },
    eimt: ["click", "keypress"],
    setup(e, t) {
      let { emit: i, attrs: n } = t;
      const r = () => {
          i("click", e.page);
        },
        O = (d) => {
          i("keypress", d, r, e.page);
        };
      return () => {
        const { showTitle: d, page: p, itemRender: c } = e,
          { class: h, style: s } = n,
          b = `${e.rootPrefixCls}-item`,
          C = $(
            b,
            `${b}-${e.page}`,
            { [`${b}-active`]: e.active, [`${b}-disabled`]: !e.page },
            h
          );
        return a(
          "li",
          {
            onClick: r,
            onKeypress: O,
            title: d ? String(p) : null,
            tabindex: "0",
            class: C,
            style: s,
          },
          [
            c({
              page: p,
              type: "page",
              originalElement: a("a", { rel: "nofollow" }, [p]),
            }),
          ]
        );
      };
    },
  }),
  _ = {
    ZERO: 48,
    NINE: 57,
    NUMPAD_ZERO: 96,
    NUMPAD_NINE: 105,
    BACKSPACE: 8,
    DELETE: 46,
    ENTER: 13,
    ARROW_UP: 38,
    ARROW_DOWN: 40,
  },
  at = D({
    compatConfig: { MODE: 3 },
    props: {
      disabled: { type: Boolean, default: void 0 },
      changeSize: Function,
      quickGo: Function,
      selectComponentClass: u.any,
      current: Number,
      pageSizeOptions: u.array.def(["10", "20", "50", "100"]),
      pageSize: Number,
      buildOptionText: Function,
      locale: u.object,
      rootPrefixCls: String,
      selectPrefixCls: String,
      goButton: u.any,
    },
    setup(e) {
      const t = He(""),
        i = Q(() => (!t.value || isNaN(t.value) ? void 0 : Number(t.value))),
        n = (c) => `${c.value} ${e.locale.items_per_page}`,
        r = (c) => {
          const { value: h, composing: s } = c.target;
          c.isComposing || s || t.value === h || (t.value = h);
        },
        O = (c) => {
          const { goButton: h, quickGo: s, rootPrefixCls: b } = e;
          if (!(h || t.value === ""))
            if (
              c.relatedTarget &&
              (c.relatedTarget.className.indexOf(`${b}-item-link`) >= 0 ||
                c.relatedTarget.className.indexOf(`${b}-item`) >= 0)
            ) {
              t.value = "";
              return;
            } else s(i.value), (t.value = "");
        },
        d = (c) => {
          t.value !== "" &&
            (c.keyCode === _.ENTER || c.type === "click") &&
            (e.quickGo(i.value), (t.value = ""));
        },
        p = Q(() => {
          const { pageSize: c, pageSizeOptions: h } = e;
          return h.some((s) => s.toString() === c.toString())
            ? h
            : h.concat([c.toString()]).sort((s, b) => {
                const C = isNaN(Number(s)) ? 0 : Number(s),
                  S = isNaN(Number(b)) ? 0 : Number(b);
                return C - S;
              });
        });
      return () => {
        const {
            rootPrefixCls: c,
            locale: h,
            changeSize: s,
            quickGo: b,
            goButton: C,
            selectComponentClass: S,
            selectPrefixCls: m,
            pageSize: z,
            disabled: x,
          } = e,
          o = `${c}-options`;
        let v = null,
          y = null,
          T = null;
        if (!s && !b) return null;
        if (s && S) {
          const M = e.buildOptionText || n,
            g = p.value.map((f, V) =>
              a(
                S.Option,
                { key: V, value: f },
                { default: () => [M({ value: f })] }
              )
            );
          v = a(
            S,
            {
              disabled: x,
              prefixCls: m,
              showSearch: !1,
              class: `${o}-size-changer`,
              optionLabelProp: "children",
              value: (z || p.value[0]).toString(),
              onChange: (f) => s(Number(f)),
              getPopupContainer: (f) => f.parentNode,
            },
            { default: () => [g] }
          );
        }
        return (
          b &&
            (C &&
              (T =
                typeof C == "boolean"
                  ? a(
                      "button",
                      {
                        type: "button",
                        onClick: d,
                        onKeyup: d,
                        disabled: x,
                        class: `${o}-quick-jumper-button`,
                      },
                      [h.jump_to_confirm]
                    )
                  : a("span", { onClick: d, onKeyup: d }, [C])),
            (y = a("div", { class: `${o}-quick-jumper` }, [
              h.jump_to,
              ve(
                a(
                  "input",
                  {
                    disabled: x,
                    type: "text",
                    value: t.value,
                    onInput: r,
                    onChange: r,
                    onKeyup: d,
                    onBlur: O,
                  },
                  null
                ),
                [[Se]]
              ),
              h.page,
              T,
            ]))),
          a("li", { class: `${o}` }, [v, y])
        );
      };
    },
  }),
  ot = {
    items_per_page: "条/页",
    jump_to: "跳至",
    jump_to_confirm: "确定",
    page: "页",
    prev_page: "上一页",
    next_page: "下一页",
    prev_5: "向前 5 页",
    next_5: "向后 5 页",
    prev_3: "向前 3 页",
    next_3: "向后 3 页",
  };
var lt =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var i = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (i[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
        t.indexOf(n[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
          (i[n[r]] = e[n[r]]);
    return i;
  };
function st(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
function ut(e) {
  let { originalElement: t } = e;
  return t;
}
function P(e, t, i) {
  const n = typeof e > "u" ? t.statePageSize : e;
  return Math.floor((i.total - 1) / n) + 1;
}
const ct = D({
    compatConfig: { MODE: 3 },
    name: "Pagination",
    mixins: [Xe],
    inheritAttrs: !1,
    props: {
      disabled: { type: Boolean, default: void 0 },
      prefixCls: u.string.def("rc-pagination"),
      selectPrefixCls: u.string.def("rc-select"),
      current: Number,
      defaultCurrent: u.number.def(1),
      total: u.number.def(0),
      pageSize: Number,
      defaultPageSize: u.number.def(10),
      hideOnSinglePage: { type: Boolean, default: !1 },
      showSizeChanger: { type: Boolean, default: void 0 },
      showLessItems: { type: Boolean, default: !1 },
      selectComponentClass: u.any,
      showPrevNextJumpers: { type: Boolean, default: !0 },
      showQuickJumper: u.oneOfType([u.looseBool, u.object]).def(!1),
      showTitle: { type: Boolean, default: !0 },
      pageSizeOptions: u.arrayOf(u.oneOfType([u.number, u.string])),
      buildOptionText: Function,
      showTotal: Function,
      simple: { type: Boolean, default: void 0 },
      locale: u.object.def(ot),
      itemRender: u.func.def(ut),
      prevIcon: u.any,
      nextIcon: u.any,
      jumpPrevIcon: u.any,
      jumpNextIcon: u.any,
      totalBoundaryShowSizeChanger: u.number.def(50),
    },
    data() {
      const e = this.$props;
      let t = pe([this.current, this.defaultCurrent]);
      const i = pe([this.pageSize, this.defaultPageSize]);
      return (
        (t = Math.min(t, P(i, void 0, e))),
        { stateCurrent: t, stateCurrentInputValue: t, statePageSize: i }
      );
    },
    watch: {
      current(e) {
        this.setState({ stateCurrent: e, stateCurrentInputValue: e });
      },
      pageSize(e) {
        const t = {};
        let i = this.stateCurrent;
        const n = P(e, this.$data, this.$props);
        (i = i > n ? n : i),
          H(this, "current") ||
            ((t.stateCurrent = i), (t.stateCurrentInputValue = i)),
          (t.statePageSize = e),
          this.setState(t);
      },
      stateCurrent(e, t) {
        this.$nextTick(() => {
          if (this.$refs.paginationNode) {
            const i = this.$refs.paginationNode.querySelector(
              `.${this.prefixCls}-item-${t}`
            );
            i && document.activeElement === i && i.blur();
          }
        });
      },
      total() {
        const e = {},
          t = P(this.pageSize, this.$data, this.$props);
        if (H(this, "current")) {
          const i = Math.min(this.current, t);
          (e.stateCurrent = i), (e.stateCurrentInputValue = i);
        } else {
          let i = this.stateCurrent;
          i === 0 && t > 0 ? (i = 1) : (i = Math.min(this.stateCurrent, t)),
            (e.stateCurrent = i);
        }
        this.setState(e);
      },
    },
    methods: {
      getJumpPrevPage() {
        return Math.max(1, this.stateCurrent - (this.showLessItems ? 3 : 5));
      },
      getJumpNextPage() {
        return Math.min(
          P(void 0, this.$data, this.$props),
          this.stateCurrent + (this.showLessItems ? 3 : 5)
        );
      },
      getItemIcon(e, t) {
        const { prefixCls: i } = this.$props;
        return (
          Ie(this, e, this.$props) ||
          a(
            "button",
            { type: "button", "aria-label": t, class: `${i}-item-link` },
            null
          )
        );
      },
      getValidValue(e) {
        const t = e.target.value,
          i = P(void 0, this.$data, this.$props),
          { stateCurrentInputValue: n } = this.$data;
        let r;
        return (
          t === ""
            ? (r = t)
            : isNaN(Number(t))
            ? (r = n)
            : t >= i
            ? (r = i)
            : (r = Number(t)),
          r
        );
      },
      isValid(e) {
        return st(e) && e !== this.stateCurrent;
      },
      shouldDisplayQuickJumper() {
        const { showQuickJumper: e, pageSize: t, total: i } = this.$props;
        return i <= t ? !1 : e;
      },
      handleKeyDown(e) {
        (e.keyCode === _.ARROW_UP || e.keyCode === _.ARROW_DOWN) &&
          e.preventDefault();
      },
      handleKeyUp(e) {
        if (e.isComposing || e.target.composing) return;
        const t = this.getValidValue(e),
          i = this.stateCurrentInputValue;
        t !== i && this.setState({ stateCurrentInputValue: t }),
          e.keyCode === _.ENTER
            ? this.handleChange(t)
            : e.keyCode === _.ARROW_UP
            ? this.handleChange(t - 1)
            : e.keyCode === _.ARROW_DOWN && this.handleChange(t + 1);
      },
      changePageSize(e) {
        let t = this.stateCurrent;
        const i = t,
          n = P(e, this.$data, this.$props);
        (t = t > n ? n : t),
          n === 0 && (t = this.stateCurrent),
          typeof e == "number" &&
            (H(this, "pageSize") || this.setState({ statePageSize: e }),
            H(this, "current") ||
              this.setState({ stateCurrent: t, stateCurrentInputValue: t })),
          this.__emit("update:pageSize", e),
          t !== i && this.__emit("update:current", t),
          this.__emit("showSizeChange", t, e),
          this.__emit("change", t, e);
      },
      handleChange(e) {
        const { disabled: t } = this.$props;
        let i = e;
        if (this.isValid(i) && !t) {
          const n = P(void 0, this.$data, this.$props);
          return (
            i > n ? (i = n) : i < 1 && (i = 1),
            H(this, "current") ||
              this.setState({ stateCurrent: i, stateCurrentInputValue: i }),
            this.__emit("update:current", i),
            this.__emit("change", i, this.statePageSize),
            i
          );
        }
        return this.stateCurrent;
      },
      prev() {
        this.hasPrev() && this.handleChange(this.stateCurrent - 1);
      },
      next() {
        this.hasNext() && this.handleChange(this.stateCurrent + 1);
      },
      jumpPrev() {
        this.handleChange(this.getJumpPrevPage());
      },
      jumpNext() {
        this.handleChange(this.getJumpNextPage());
      },
      hasPrev() {
        return this.stateCurrent > 1;
      },
      hasNext() {
        return this.stateCurrent < P(void 0, this.$data, this.$props);
      },
      getShowSizeChanger() {
        const {
          showSizeChanger: e,
          total: t,
          totalBoundaryShowSizeChanger: i,
        } = this.$props;
        return typeof e < "u" ? e : t > i;
      },
      runIfEnter(e, t) {
        if (e.key === "Enter" || e.charCode === 13) {
          for (
            var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), r = 2;
            r < i;
            r++
          )
            n[r - 2] = arguments[r];
          t(...n);
        }
      },
      runIfEnterPrev(e) {
        this.runIfEnter(e, this.prev);
      },
      runIfEnterNext(e) {
        this.runIfEnter(e, this.next);
      },
      runIfEnterJumpPrev(e) {
        this.runIfEnter(e, this.jumpPrev);
      },
      runIfEnterJumpNext(e) {
        this.runIfEnter(e, this.jumpNext);
      },
      handleGoTO(e) {
        (e.keyCode === _.ENTER || e.type === "click") &&
          this.handleChange(this.stateCurrentInputValue);
      },
      renderPrev(e) {
        const { itemRender: t } = this.$props,
          i = t({
            page: e,
            type: "prev",
            originalElement: this.getItemIcon("prevIcon", "prev page"),
          }),
          n = !this.hasPrev();
        return le(i) ? ce(i, n ? { disabled: n } : {}) : i;
      },
      renderNext(e) {
        const { itemRender: t } = this.$props,
          i = t({
            page: e,
            type: "next",
            originalElement: this.getItemIcon("nextIcon", "next page"),
          }),
          n = !this.hasNext();
        return le(i) ? ce(i, n ? { disabled: n } : {}) : i;
      },
    },
    render() {
      const {
          prefixCls: e,
          disabled: t,
          hideOnSinglePage: i,
          total: n,
          locale: r,
          showQuickJumper: O,
          showLessItems: d,
          showTitle: p,
          showTotal: c,
          simple: h,
          itemRender: s,
          showPrevNextJumpers: b,
          jumpPrevIcon: C,
          jumpNextIcon: S,
          selectComponentClass: m,
          selectPrefixCls: z,
          pageSizeOptions: x,
        } = this.$props,
        { stateCurrent: o, statePageSize: v } = this,
        y = Pe(this.$attrs).extraAttrs,
        { class: T } = y,
        M = lt(y, ["class"]);
      if (i === !0 && this.total <= v) return null;
      const g = P(void 0, this.$data, this.$props),
        f = [];
      let V = null,
        te = null,
        ie = null,
        ne = null,
        A = null;
      const W = O && O.goButton,
        I = d ? 1 : 2,
        re = o - 1 > 0 ? o - 1 : 0,
        ae = o + 1 < g ? o + 1 : g,
        K = this.hasPrev(),
        J = this.hasNext();
      if (h)
        return (
          W &&
            (typeof W == "boolean"
              ? (A = a(
                  "button",
                  {
                    type: "button",
                    onClick: this.handleGoTO,
                    onKeyup: this.handleGoTO,
                  },
                  [r.jump_to_confirm]
                ))
              : (A = a(
                  "span",
                  { onClick: this.handleGoTO, onKeyup: this.handleGoTO },
                  [W]
                )),
            (A = a(
              "li",
              {
                title: p ? `${r.jump_to}${o}/${g}` : null,
                class: `${e}-simple-pager`,
              },
              [A]
            ))),
          a(
            "ul",
            N({ class: $(`${e} ${e}-simple`, { [`${e}-disabled`]: t }, T) }, M),
            [
              a(
                "li",
                {
                  title: p ? r.prev_page : null,
                  onClick: this.prev,
                  tabindex: K ? 0 : null,
                  onKeypress: this.runIfEnterPrev,
                  class: $(`${e}-prev`, { [`${e}-disabled`]: !K }),
                  "aria-disabled": !K,
                },
                [this.renderPrev(re)]
              ),
              a(
                "li",
                { title: p ? `${o}/${g}` : null, class: `${e}-simple-pager` },
                [
                  ve(
                    a(
                      "input",
                      {
                        type: "text",
                        value: this.stateCurrentInputValue,
                        disabled: t,
                        onKeydown: this.handleKeyDown,
                        onKeyup: this.handleKeyUp,
                        onInput: this.handleKeyUp,
                        onChange: this.handleKeyUp,
                        size: "3",
                      },
                      null
                    ),
                    [[Se]]
                  ),
                  a("span", { class: `${e}-slash` }, [Ce("／")]),
                  g,
                ]
              ),
              a(
                "li",
                {
                  title: p ? r.next_page : null,
                  onClick: this.next,
                  tabindex: J ? 0 : null,
                  onKeypress: this.runIfEnterNext,
                  class: $(`${e}-next`, { [`${e}-disabled`]: !J }),
                  "aria-disabled": !J,
                },
                [this.renderNext(ae)]
              ),
              A,
            ]
          )
        );
      if (g <= 3 + I * 2) {
        const X = {
          locale: r,
          rootPrefixCls: e,
          showTitle: p,
          itemRender: s,
          onClick: this.handleChange,
          onKeypress: this.runIfEnter,
        };
        g ||
          f.push(
            a(
              j,
              N(
                N({}, X),
                {},
                { key: "noPager", page: 1, class: `${e}-item-disabled` }
              ),
              null
            )
          );
        for (let w = 1; w <= g; w += 1) {
          const B = o === w;
          f.push(a(j, N(N({}, X), {}, { key: w, page: w, active: B }), null));
        }
      } else {
        const X = d ? r.prev_3 : r.prev_5,
          w = d ? r.next_3 : r.next_5;
        b &&
          ((V = a(
            "li",
            {
              title: this.showTitle ? X : null,
              key: "prev",
              onClick: this.jumpPrev,
              tabindex: "0",
              onKeypress: this.runIfEnterJumpPrev,
              class: $(`${e}-jump-prev`, {
                [`${e}-jump-prev-custom-icon`]: !!C,
              }),
            },
            [
              s({
                page: this.getJumpPrevPage(),
                type: "jump-prev",
                originalElement: this.getItemIcon("jumpPrevIcon", "prev page"),
              }),
            ]
          )),
          (te = a(
            "li",
            {
              title: this.showTitle ? w : null,
              key: "next",
              tabindex: "0",
              onClick: this.jumpNext,
              onKeypress: this.runIfEnterJumpNext,
              class: $(`${e}-jump-next`, {
                [`${e}-jump-next-custom-icon`]: !!S,
              }),
            },
            [
              s({
                page: this.getJumpNextPage(),
                type: "jump-next",
                originalElement: this.getItemIcon("jumpNextIcon", "next page"),
              }),
            ]
          ))),
          (ne = a(
            j,
            {
              locale: r,
              last: !0,
              rootPrefixCls: e,
              onClick: this.handleChange,
              onKeypress: this.runIfEnter,
              key: g,
              page: g,
              active: !1,
              showTitle: p,
              itemRender: s,
            },
            null
          )),
          (ie = a(
            j,
            {
              locale: r,
              rootPrefixCls: e,
              onClick: this.handleChange,
              onKeypress: this.runIfEnter,
              key: 1,
              page: 1,
              active: !1,
              showTitle: p,
              itemRender: s,
            },
            null
          ));
        let B = Math.max(1, o - I),
          R = Math.min(o + I, g);
        o - 1 <= I && (R = 1 + I * 2), g - o <= I && (B = g - I * 2);
        for (let L = B; L <= R; L += 1) {
          const ye = o === L;
          f.push(
            a(
              j,
              {
                locale: r,
                rootPrefixCls: e,
                onClick: this.handleChange,
                onKeypress: this.runIfEnter,
                key: L,
                page: L,
                active: ye,
                showTitle: p,
                itemRender: s,
              },
              null
            )
          );
        }
        o - 1 >= I * 2 &&
          o !== 1 + 2 &&
          ((f[0] = a(
            j,
            {
              locale: r,
              rootPrefixCls: e,
              onClick: this.handleChange,
              onKeypress: this.runIfEnter,
              key: B,
              page: B,
              class: `${e}-item-after-jump-prev`,
              active: !1,
              showTitle: this.showTitle,
              itemRender: s,
            },
            null
          )),
          f.unshift(V)),
          g - o >= I * 2 &&
            o !== g - 2 &&
            ((f[f.length - 1] = a(
              j,
              {
                locale: r,
                rootPrefixCls: e,
                onClick: this.handleChange,
                onKeypress: this.runIfEnter,
                key: R,
                page: R,
                class: `${e}-item-before-jump-next`,
                active: !1,
                showTitle: this.showTitle,
                itemRender: s,
              },
              null
            )),
            f.push(te)),
          B !== 1 && f.unshift(ie),
          R !== g && f.push(ne);
      }
      let oe = null;
      c &&
        (oe = a("li", { class: `${e}-total-text` }, [
          c(n, [n === 0 ? 0 : (o - 1) * v + 1, o * v > n ? n : o * v]),
        ]));
      const q = !K || !g,
        G = !J || !g,
        xe = this.buildOptionText || this.$slots.buildOptionText;
      return a(
        "ul",
        N(
          N({ unselectable: "on", ref: "paginationNode" }, M),
          {},
          { class: $({ [`${e}`]: !0, [`${e}-disabled`]: t }, T) }
        ),
        [
          oe,
          a(
            "li",
            {
              title: p ? r.prev_page : null,
              onClick: this.prev,
              tabindex: q ? null : 0,
              onKeypress: this.runIfEnterPrev,
              class: $(`${e}-prev`, { [`${e}-disabled`]: q }),
              "aria-disabled": q,
            },
            [this.renderPrev(re)]
          ),
          f,
          a(
            "li",
            {
              title: p ? r.next_page : null,
              onClick: this.next,
              tabindex: G ? null : 0,
              onKeypress: this.runIfEnterNext,
              class: $(`${e}-next`, { [`${e}-disabled`]: G }),
              "aria-disabled": G,
            },
            [this.renderNext(ae)]
          ),
          a(
            at,
            {
              disabled: t,
              locale: r,
              rootPrefixCls: e,
              selectComponentClass: m,
              selectPrefixCls: z,
              changeSize: this.getShowSizeChanger()
                ? this.changePageSize
                : null,
              current: o,
              pageSize: v,
              pageSizeOptions: x,
              buildOptionText: xe || null,
              quickGo: this.shouldDisplayQuickJumper()
                ? this.handleChange
                : null,
              goButton: W,
            },
            null
          ),
        ]
      );
    },
  }),
  pt = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-disabled`]: {
        "&, &:hover": {
          cursor: "not-allowed",
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: "not-allowed",
          },
        },
        "&:focus-visible": {
          cursor: "not-allowed",
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: "not-allowed",
          },
        },
      },
      [`&${t}-disabled`]: {
        cursor: "not-allowed",
        [`&${t}-mini`]: {
          [`
          &:hover ${t}-item:not(${t}-item-active),
          &:active ${t}-item:not(${t}-item-active),
          &:hover ${t}-item-link,
          &:active ${t}-item-link
        `]: { backgroundColor: "transparent" },
        },
        [`${t}-item`]: {
          cursor: "not-allowed",
          "&:hover, &:active": { backgroundColor: "transparent" },
          a: {
            color: e.colorTextDisabled,
            backgroundColor: "transparent",
            border: "none",
            cursor: "not-allowed",
          },
          "&-active": {
            borderColor: e.colorBorder,
            backgroundColor: e.paginationItemDisabledBgActive,
            "&:hover, &:active": {
              backgroundColor: e.paginationItemDisabledBgActive,
            },
            a: { color: e.paginationItemDisabledColorActive },
          },
        },
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed",
          "&:hover, &:active": { backgroundColor: "transparent" },
          [`${t}-simple&`]: {
            backgroundColor: "transparent",
            "&:hover, &:active": { backgroundColor: "transparent" },
          },
        },
        [`${t}-simple-pager`]: { color: e.colorTextDisabled },
        [`${t}-jump-prev, ${t}-jump-next`]: {
          [`${t}-item-link-icon`]: { opacity: 0 },
          [`${t}-item-ellipsis`]: { opacity: 1 },
        },
      },
      [`&${t}-simple`]: {
        [`${t}-prev, ${t}-next`]: {
          [`&${t}-disabled ${t}-item-link`]: {
            "&:hover, &:active": { backgroundColor: "transparent" },
          },
        },
      },
    };
  },
  gt = (e) => {
    const { componentCls: t } = e;
    return {
      [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
        height: e.paginationItemSizeSM,
        lineHeight: `${e.paginationItemSizeSM}px`,
      },
      [`&${t}-mini ${t}-item`]: {
        minWidth: e.paginationItemSizeSM,
        height: e.paginationItemSizeSM,
        margin: 0,
        lineHeight: `${e.paginationItemSizeSM - 2}px`,
      },
      [`&${t}-mini ${t}-item:not(${t}-item-active)`]: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        "&:hover": { backgroundColor: e.colorBgTextHover },
        "&:active": { backgroundColor: e.colorBgTextActive },
      },
      [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
        minWidth: e.paginationItemSizeSM,
        height: e.paginationItemSizeSM,
        margin: 0,
        lineHeight: `${e.paginationItemSizeSM}px`,
        [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
        [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
        [`&${t}-disabled:hover ${t}-item-link`]: {
          backgroundColor: "transparent",
        },
      },
      [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        "&::after": {
          height: e.paginationItemSizeSM,
          lineHeight: `${e.paginationItemSizeSM}px`,
        },
      },
      [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
        height: e.paginationItemSizeSM,
        marginInlineEnd: 0,
        lineHeight: `${e.paginationItemSizeSM}px`,
      },
      [`&${t}-mini ${t}-options`]: {
        marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
        ["&-size-changer"]: { top: e.paginationMiniOptionsSizeChangerTop },
        ["&-quick-jumper"]: {
          height: e.paginationItemSizeSM,
          lineHeight: `${e.paginationItemSizeSM}px`,
          input: l(l({}, Ke(e)), {
            width: e.paginationMiniQuickJumperInputWidth,
            height: e.controlHeightSM,
          }),
        },
      },
    };
  },
  dt = (e) => {
    const { componentCls: t } = e;
    return {
      [`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]: {
        height: e.paginationItemSizeSM,
        lineHeight: `${e.paginationItemSizeSM}px`,
        verticalAlign: "top",
        [`${t}-item-link`]: {
          height: e.paginationItemSizeSM,
          backgroundColor: "transparent",
          border: 0,
          "&:hover": { backgroundColor: e.colorBgTextHover },
          "&:active": { backgroundColor: e.colorBgTextActive },
          "&::after": {
            height: e.paginationItemSizeSM,
            lineHeight: `${e.paginationItemSizeSM}px`,
          },
        },
      },
      [`&${t}-simple ${t}-simple-pager`]: {
        display: "inline-block",
        height: e.paginationItemSizeSM,
        marginInlineEnd: e.marginXS,
        input: {
          boxSizing: "border-box",
          height: "100%",
          marginInlineEnd: e.marginXS,
          padding: `0 ${e.paginationItemPaddingInline}px`,
          textAlign: "center",
          backgroundColor: e.paginationItemInputBg,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadius,
          outline: "none",
          transition: `border-color ${e.motionDurationMid}`,
          color: "inherit",
          "&:hover": { borderColor: e.colorPrimary },
          "&:focus": {
            borderColor: e.colorPrimaryHover,
            boxShadow: `${e.inputOutlineOffset}px 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
          },
          "&[disabled]": {
            color: e.colorTextDisabled,
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            cursor: "not-allowed",
          },
        },
      },
    };
  },
  mt = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-jump-prev, ${t}-jump-next`]: {
        outline: 0,
        [`${t}-item-container`]: {
          position: "relative",
          [`${t}-item-link-icon`]: {
            color: e.colorPrimary,
            fontSize: e.fontSizeSM,
            opacity: 0,
            transition: `all ${e.motionDurationMid}`,
            "&-svg": {
              top: 0,
              insetInlineEnd: 0,
              bottom: 0,
              insetInlineStart: 0,
              margin: "auto",
            },
          },
          [`${t}-item-ellipsis`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            display: "block",
            margin: "auto",
            color: e.colorTextDisabled,
            fontFamily: "Arial, Helvetica, sans-serif",
            letterSpacing: e.paginationEllipsisLetterSpacing,
            textAlign: "center",
            textIndent: e.paginationEllipsisTextIndent,
            opacity: 1,
            transition: `all ${e.motionDurationMid}`,
          },
        },
        "&:hover": {
          [`${t}-item-link-icon`]: { opacity: 1 },
          [`${t}-item-ellipsis`]: { opacity: 0 },
        },
        "&:focus-visible": l(
          {
            [`${t}-item-link-icon`]: { opacity: 1 },
            [`${t}-item-ellipsis`]: { opacity: 0 },
          },
          se(e)
        ),
      },
      [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: { marginInlineEnd: e.marginXS },
      [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
        display: "inline-block",
        minWidth: e.paginationItemSize,
        height: e.paginationItemSize,
        color: e.colorText,
        fontFamily: e.paginationFontFamily,
        lineHeight: `${e.paginationItemSize}px`,
        textAlign: "center",
        verticalAlign: "middle",
        listStyle: "none",
        borderRadius: e.borderRadius,
        cursor: "pointer",
        transition: `all ${e.motionDurationMid}`,
      },
      [`${t}-prev, ${t}-next`]: {
        fontFamily: "Arial, Helvetica, sans-serif",
        outline: 0,
        button: { color: e.colorText, cursor: "pointer", userSelect: "none" },
        [`${t}-item-link`]: {
          display: "block",
          width: "100%",
          height: "100%",
          padding: 0,
          fontSize: e.fontSizeSM,
          textAlign: "center",
          backgroundColor: "transparent",
          border: `${e.lineWidth}px ${e.lineType} transparent`,
          borderRadius: e.borderRadius,
          outline: "none",
          transition: `border ${e.motionDurationMid}`,
        },
        [`&:focus-visible ${t}-item-link`]: l({}, se(e)),
        [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
        [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
        [`&${t}-disabled:hover`]: {
          [`${t}-item-link`]: { backgroundColor: "transparent" },
        },
      },
      [`${t}-slash`]: {
        marginInlineEnd: e.paginationSlashMarginInlineEnd,
        marginInlineStart: e.paginationSlashMarginInlineStart,
      },
      [`${t}-options`]: {
        display: "inline-block",
        marginInlineStart: e.margin,
        verticalAlign: "middle",
        "&-size-changer.-select": { display: "inline-block", width: "auto" },
        "&-quick-jumper": {
          display: "inline-block",
          height: e.controlHeight,
          marginInlineStart: e.marginXS,
          lineHeight: `${e.controlHeight}px`,
          verticalAlign: "top",
          input: l(l({}, Je(e)), {
            width: e.controlHeightLG * 1.25,
            height: e.controlHeight,
            boxSizing: "border-box",
            margin: 0,
            marginInlineStart: e.marginXS,
            marginInlineEnd: e.marginXS,
          }),
        },
      },
    };
  },
  ht = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-item`]: l(
        l(
          {
            display: "inline-block",
            minWidth: e.paginationItemSize,
            height: e.paginationItemSize,
            marginInlineEnd: e.marginXS,
            fontFamily: e.paginationFontFamily,
            lineHeight: `${e.paginationItemSize - 2}px`,
            textAlign: "center",
            verticalAlign: "middle",
            listStyle: "none",
            backgroundColor: "transparent",
            border: `${e.lineWidth}px ${e.lineType} transparent`,
            borderRadius: e.borderRadius,
            outline: 0,
            cursor: "pointer",
            userSelect: "none",
            a: {
              display: "block",
              padding: `0 ${e.paginationItemPaddingInline}px`,
              color: e.colorText,
              transition: "none",
              "&:hover": { textDecoration: "none" },
            },
            [`&:not(${t}-item-active)`]: {
              "&:hover": {
                transition: `all ${e.motionDurationMid}`,
                backgroundColor: e.colorBgTextHover,
              },
              "&:active": { backgroundColor: e.colorBgTextActive },
            },
          },
          we(e)
        ),
        {
          "&-active": {
            fontWeight: e.paginationFontWeightActive,
            backgroundColor: e.paginationItemBgActive,
            borderColor: e.colorPrimary,
            a: { color: e.colorPrimary },
            "&:hover": { borderColor: e.colorPrimaryHover },
            "&:hover a": { color: e.colorPrimaryHover },
          },
        }
      ),
    };
  },
  ft = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: l(
        l(
          l(
            l(
              l(
                l(
                  l(l({}, Te(e)), {
                    "ul, ol": { margin: 0, padding: 0, listStyle: "none" },
                    "&::after": {
                      display: "block",
                      clear: "both",
                      height: 0,
                      overflow: "hidden",
                      visibility: "hidden",
                      content: '""',
                    },
                    [`${t}-total-text`]: {
                      display: "inline-block",
                      height: e.paginationItemSize,
                      marginInlineEnd: e.marginXS,
                      lineHeight: `${e.paginationItemSize - 2}px`,
                      verticalAlign: "middle",
                    },
                  }),
                  ht(e)
                ),
                mt(e)
              ),
              dt(e)
            ),
            gt(e)
          ),
          pt(e)
        ),
        {
          [`@media only screen and (max-width: ${e.screenLG}px)`]: {
            [`${t}-item`]: {
              "&-after-jump-prev, &-before-jump-next": { display: "none" },
            },
          },
          [`@media only screen and (max-width: ${e.screenSM}px)`]: {
            [`${t}-options`]: { display: "none" },
          },
        }
      ),
      [`&${e.componentCls}-rtl`]: { direction: "rtl" },
    };
  },
  bt = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}${t}-disabled`]: {
        "&, &:hover": { [`${t}-item-link`]: { borderColor: e.colorBorder } },
        "&:focus-visible": {
          [`${t}-item-link`]: { borderColor: e.colorBorder },
        },
        [`${t}-item, ${t}-item-link`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          [`&:hover:not(${t}-item-active)`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            a: { color: e.colorTextDisabled },
          },
          [`&${t}-item-active`]: {
            backgroundColor: e.paginationItemDisabledBgActive,
          },
        },
        [`${t}-prev, ${t}-next`]: {
          "&:hover button": {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            color: e.colorTextDisabled,
          },
          [`${t}-item-link`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
          },
        },
      },
      [t]: {
        [`${t}-prev, ${t}-next`]: {
          "&:hover button": {
            borderColor: e.colorPrimaryHover,
            backgroundColor: e.paginationItemBg,
          },
          [`${t}-item-link`]: {
            backgroundColor: e.paginationItemLinkBg,
            borderColor: e.colorBorder,
          },
          [`&:hover ${t}-item-link`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.paginationItemBg,
            color: e.colorPrimary,
          },
          [`&${t}-disabled`]: {
            [`${t}-item-link`]: {
              borderColor: e.colorBorder,
              color: e.colorTextDisabled,
            },
          },
        },
        [`${t}-item`]: {
          backgroundColor: e.paginationItemBg,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          [`&:hover:not(${t}-item-active)`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.paginationItemBg,
            a: { color: e.colorPrimary },
          },
          "&-active": { borderColor: e.colorPrimary },
        },
      },
    };
  },
  vt = Oe("Pagination", (e) => {
    const t = ze(
      e,
      {
        paginationItemSize: e.controlHeight,
        paginationFontFamily: e.fontFamily,
        paginationItemBg: e.colorBgContainer,
        paginationItemBgActive: e.colorBgContainer,
        paginationFontWeightActive: e.fontWeightStrong,
        paginationItemSizeSM: e.controlHeightSM,
        paginationItemInputBg: e.colorBgContainer,
        paginationMiniOptionsSizeChangerTop: 0,
        paginationItemDisabledBgActive: e.controlItemBgActiveDisabled,
        paginationItemDisabledColorActive: e.colorTextDisabled,
        paginationItemLinkBg: e.colorBgContainer,
        inputOutlineOffset: "0 0",
        paginationMiniOptionsMarginInlineStart: e.marginXXS / 2,
        paginationMiniQuickJumperInputWidth: e.controlHeightLG * 1.1,
        paginationItemPaddingInline: e.marginXXS * 1.5,
        paginationEllipsisLetterSpacing: e.marginXXS / 2,
        paginationSlashMarginInlineStart: e.marginXXS,
        paginationSlashMarginInlineEnd: e.marginSM,
        paginationEllipsisTextIndent: "0.13em",
      },
      We(e)
    );
    return [ft(t), e.wireframe && bt(t)];
  });
var Ct =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var i = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (i[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
        t.indexOf(n[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
          (i[n[r]] = e[n[r]]);
    return i;
  };
const $t = () => ({
    total: Number,
    defaultCurrent: Number,
    disabled: F(),
    current: Number,
    defaultPageSize: Number,
    pageSize: Number,
    hideOnSinglePage: F(),
    showSizeChanger: F(),
    pageSizeOptions: je(),
    buildOptionText: E(),
    showQuickJumper: _e([Boolean, Object]),
    showTotal: E(),
    size: Me(),
    simple: F(),
    locale: Object,
    prefixCls: String,
    selectPrefixCls: String,
    totalBoundaryShowSizeChanger: Number,
    selectComponentClass: String,
    itemRender: E(),
    role: String,
    responsive: Boolean,
    showLessItems: F(),
    onChange: E(),
    onShowSizeChange: E(),
    "onUpdate:current": E(),
    "onUpdate:pageSize": E(),
  }),
  St = D({
    compatConfig: { MODE: 3 },
    name: "APagination",
    inheritAttrs: !1,
    props: $t(),
    setup(e, t) {
      let { slots: i, attrs: n } = t;
      const {
          prefixCls: r,
          configProvider: O,
          direction: d,
          size: p,
        } = Be("pagination", e),
        [c, h] = vt(r),
        s = Q(() => O.getPrefixCls("select", e.selectPrefixCls)),
        b = Ue(),
        [C] = Ne("Pagination", Ee, Fe(e, "locale")),
        S = (m) => {
          const z = a("span", { class: `${m}-item-ellipsis` }, [Ce("•••")]),
            x = a(
              "button",
              { class: `${m}-item-link`, type: "button", tabindex: -1 },
              [d.value === "rtl" ? a(ue, null, null) : a(de, null, null)]
            ),
            o = a(
              "button",
              { class: `${m}-item-link`, type: "button", tabindex: -1 },
              [d.value === "rtl" ? a(de, null, null) : a(ue, null, null)]
            ),
            v = a("a", { rel: "nofollow", class: `${m}-item-link` }, [
              a("div", { class: `${m}-item-container` }, [
                d.value === "rtl"
                  ? a(be, { class: `${m}-item-link-icon` }, null)
                  : a(he, { class: `${m}-item-link-icon` }, null),
                z,
              ]),
            ]),
            y = a("a", { rel: "nofollow", class: `${m}-item-link` }, [
              a("div", { class: `${m}-item-container` }, [
                d.value === "rtl"
                  ? a(he, { class: `${m}-item-link-icon` }, null)
                  : a(be, { class: `${m}-item-link-icon` }, null),
                z,
              ]),
            ]);
          return { prevIcon: x, nextIcon: o, jumpPrevIcon: v, jumpNextIcon: y };
        };
      return () => {
        var m;
        const {
            itemRender: z = i.itemRender,
            buildOptionText: x = i.buildOptionText,
            selectComponentClass: o,
            responsive: v,
          } = e,
          y = Ct(e, [
            "itemRender",
            "buildOptionText",
            "selectComponentClass",
            "responsive",
          ]),
          T =
            p.value === "small" ||
            !!(
              !((m = b.value) === null || m === void 0) &&
              m.xs &&
              !p.value &&
              v
            ),
          M = l(
            l(
              l(l(l({}, y), S(r.value)), {
                prefixCls: r.value,
                selectPrefixCls: s.value,
                selectComponentClass: o || (T ? nt : rt),
                locale: C.value,
                buildOptionText: x,
              }),
              n
            ),
            {
              class: $(
                {
                  [`${r.value}-mini`]: T,
                  [`${r.value}-rtl`]: d.value === "rtl",
                },
                n.class,
                h.value
              ),
              itemRender: z,
            }
          );
        return c(a(ct, M, null));
      };
    },
  }),
  Nt = De(St);
export { Nt as _, Ue as u };
