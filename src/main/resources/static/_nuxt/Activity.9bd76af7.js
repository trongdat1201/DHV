import { _ as O } from "./JsonContent.828a79a5.js";
import { _ as ee } from "./AppPageIntroduction.270416f3.js";
import { u as te } from "./index.92524a9b.js";
import {
  N as P,
  $ as A,
  O as W,
  J as oe,
  L as u,
  _ as R,
  Y as j,
  Q as G,
  Z as ne,
  S as J,
} from "./entry.8aa394d7.js";
import {
  j as B,
  al as Y,
  V as ae,
  z as c,
  S as l,
  W as N,
  X as I,
  u as t,
  Y as a,
  a as T,
  Q as y,
  R as S,
  a3 as E,
  F as Q,
  a2 as q,
  a0 as w,
  _ as D,
  k as M,
} from "./swiper-vue.d5cda4d1.js";
import { _ as z } from "./AppTitleLogo.43818f33.js";
import { _ as se } from "./client-only.42178d49.js";
import { u as X } from "./breakpoints-screen.85b51075.js";
import { u as Z } from "./index.c079fb5a.js";
import { _ as le } from "./CaretUpOutlined.d54f7083.js";
import { _ as K, C as x } from "./index.d81f9ea4.js";
import { _ as ie } from "./index.a66880e0.js";
import { _ as ce } from "./PlusOutlined.ea401e65.js";
import { _ as re } from "./MinusOutlined.0c85195f.js";
const _e = ["src", "alt"],
  pe = B({
    __name: "Banner",
    async setup(U) {
      var _, p;
      let v, g;
      const { findPageInfoByName: k, pageInfoData: r } = te();
      return (
        ([v, g] = Y(async () =>
          P(async () => {
            (A.value || !r.value[W.FACULTY_OVERVIEW]) &&
              (await k(W.FACULTY_OVERVIEW));
          }, "$mOauN50NQl")
        )),
        await v,
        g(),
        oe(
          (p =
            (_ = r == null ? void 0 : r.value) == null
              ? void 0
              : _[W.FACULTY_OVERVIEW]) == null
            ? void 0
            : p.metadata
        ),
        (i, h) => {
          const C = O,
            o = ee;
          return ae(
            i.$slots,
            "default",
            {},
            () => [
              c(
                o,
                { "show-logo": "" },
                {
                  title: l(() => [N(I(i.$t("faculty_overview.overview")), 1)]),
                  description: l(() => {
                    var s;
                    return [
                      c(
                        C,
                        {
                          class: "editorjs-font-small",
                          content: ("getFieldWithLocale" in i
                            ? i.getFieldWithLocale
                            : t(u))(
                            (s = t(r)) == null
                              ? void 0
                              : s[t(W).FACULTY_OVERVIEW],
                            "description"
                          ),
                        },
                        null,
                        8,
                        ["content"]
                      ),
                    ];
                  }),
                  introductionImg: l(() => {
                    var s, e, n, d;
                    return [
                      a(
                        "img",
                        {
                          class: "w-full h-full object-cover",
                          src:
                            (e = (
                              "getFieldWithLocale" in i
                                ? i.getFieldWithLocale
                                : t(u)
                            )(
                              (s = t(r)) == null
                                ? void 0
                                : s[t(W).FACULTY_OVERVIEW],
                              "picturePageInfo"
                            )) == null
                              ? void 0
                              : e.url,
                          alt:
                            (d = (
                              "getFieldWithLocale" in i
                                ? i.getFieldWithLocale
                                : t(u)
                            )(
                              (n = t(r)) == null
                                ? void 0
                                : n[t(W).FACULTY_OVERVIEW],
                              "picturePageInfo"
                            )) == null
                              ? void 0
                              : d.alt,
                        },
                        null,
                        8,
                        _e
                      ),
                    ];
                  }),
                  _: 1,
                }
              ),
            ],
            !0
          );
        }
      );
    },
  });
const Ue = R(pe, [["__scopeId", "data-v-3c640757"]]),
  ue = { key: 0, class: "faculty-overview-goal" },
  de = { class: "faculty-overview-goal__container container flex flex-col" },
  fe = { class: "faculty-overview-goal__header" },
  me = { class: "description" },
  ve = ["aria-labelledby"],
  ge = { class: "description" },
  ye = B({
    __name: "Goal",
    async setup(U) {
      let v, g;
      const { breakpoints: k } = X(),
        { getPageSectionByType: r } = Z(),
        _ = j("goalInfo", () => null),
        p = T([0]),
        i = T([]),
        h = T(null);
      ([v, g] = Y(async () =>
        P(async () => {
          if (A.value || !_.value) {
            const o = await r(G.FACULTY_OVERVIEW_GOAL);
            o != null && o.length && (_.value = o[0]);
          }
        }, "$4VGhFElbRH")
      )),
        await v,
        g();
      const C = (o) => {
        var s, e;
        if (((p.value = [o]), k.smallerOrEqual("md").value)) {
          const n = i.value[o],
            f =
              ((s = n == null ? void 0 : n.offsetParent) == null
                ? void 0
                : s.offsetHeight) *
                o +
              ((e = h.value) == null ? void 0 : e.offsetTop);
          J(f);
        }
      };
      return (o, s) => {
        const e = z,
          n = O,
          d = le,
          f = ie,
          V = se,
          $ = K,
          b = x;
        return t(_)
          ? (y(),
            S("div", ue, [
              a("div", de, [
                a("div", fe, [
                  c(e, null, {
                    default: l(() => [N(I(o.$t("faculty_overview.goal")), 1)]),
                    _: 1,
                  }),
                  a("div", me, [
                    c(
                      n,
                      {
                        class: "editorjs-font-small",
                        content: ("getFieldWithLocale" in o
                          ? o.getFieldWithLocale
                          : t(u))(t(_), "description"),
                      },
                      null,
                      8,
                      ["content"]
                    ),
                  ]),
                ]),
                a(
                  "div",
                  { ref_key: "collapseContainerRef", ref: h },
                  [
                    c(
                      b,
                      {
                        ghost: "",
                        accordion: "",
                        "expand-icon-position": "end",
                        "default-active-key": "0",
                        "active-key": t(p),
                        role: "tablist",
                      },
                      {
                        expandIcon: l(() => [
                          a(
                            "div",
                            { onClick: s[0] || (s[0] = E(() => {}, ["stop"])) },
                            [c(d)]
                          ),
                        ]),
                        default: l(() => [
                          (y(!0),
                          S(
                            Q,
                            null,
                            q(
                              t(_).pageSectionItems,
                              (F, m) => (
                                y(),
                                w(
                                  $,
                                  {
                                    key: m,
                                    role: "tab",
                                    onMouseenter: (L) => C(m),
                                  },
                                  {
                                    header: l(() => [
                                      c(
                                        V,
                                        null,
                                        {
                                          fallback: l(() => [
                                            a(
                                              "span",
                                              {
                                                class: "title",
                                                onClick:
                                                  s[2] ||
                                                  (s[2] = E(() => {}, [
                                                    "stop",
                                                  ])),
                                              },
                                              I(
                                                ("getFieldWithLocale" in o
                                                  ? o.getFieldWithLocale
                                                  : t(u))(F, "name")
                                              ),
                                              1
                                            ),
                                          ]),
                                          default: l(() => [
                                            c(
                                              f,
                                              {
                                                placement: "rightTop",
                                                "overlay-inner-style": {
                                                  color: "#333333 !important",
                                                },
                                                title: ("isTruncate" in o
                                                  ? o.isTruncate
                                                  : t(ne))(t(i)[m])
                                                  ? ("getFieldWithLocale" in o
                                                      ? o.getFieldWithLocale
                                                      : t(u))(F, "name")
                                                  : "",
                                              },
                                              {
                                                default: l(() => [
                                                  a(
                                                    "span",
                                                    {
                                                      ref_for: !0,
                                                      ref: (L) => (t(i)[m] = L),
                                                      class: "title",
                                                      onClick:
                                                        s[1] ||
                                                        (s[1] = E(() => {}, [
                                                          "stop",
                                                        ])),
                                                    },
                                                    I(
                                                      ("getFieldWithLocale" in o
                                                        ? o.getFieldWithLocale
                                                        : t(u))(F, "name")
                                                    ),
                                                    513
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["title"]
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                    ]),
                                    default: l(() => [
                                      a(
                                        "div",
                                        {
                                          role: "tabpanel",
                                          "aria-labelledby": "header-" + m,
                                        },
                                        [
                                          a("div", ge, [
                                            c(
                                              n,
                                              {
                                                content:
                                                  ("getFieldWithLocale" in o
                                                    ? o.getFieldWithLocale
                                                    : t(u))(F, "description"),
                                              },
                                              null,
                                              8,
                                              ["content"]
                                            ),
                                          ]),
                                        ],
                                        8,
                                        ve
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["onMouseenter"]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ["active-key"]
                    ),
                  ],
                  512
                ),
              ]),
            ]))
          : D("", !0);
      };
    },
  });
const He = R(ye, [["__scopeId", "data-v-f29a8989"]]),
  he = { key: 0, class: "faculty-overview-activity bg-light-blue" },
  Ce = {
    class: "faculty-overview-activity__container container flex flex-col",
  },
  Fe = { class: "faculty-overview-activity__header" },
  Le = { class: "description" },
  We = { class: "ml-2.5" },
  Ie = { class: "description" },
  Te = B({
    __name: "Activity",
    async setup(U) {
      let v, g;
      const { breakpoints: k } = X(),
        { getPageSectionByType: r } = Z(),
        _ = T([0]),
        p = j("activityInfo", () => null),
        i = M(() => h.value.map((e, n) => n)),
        h = M(() => {
          var e;
          return ((e = p.value) == null ? void 0 : e.pageSectionItems) || [];
        }),
        C = T([]),
        o = T(null);
      ([v, g] = Y(async () =>
        P(async () => {
          if (A.value || !p.value) {
            const e = await r(G.FACULTY_OVERVIEW_ACTIVITIES);
            e != null && e.length && (p.value = e[0]);
          }
        }, "$hEGgkcyCuP")
      )),
        await v,
        g();
      const s = (e) => {
        var n, d;
        if (((_.value = [e]), k.smallerOrEqual("md").value)) {
          const f = C.value[e],
            $ =
              ((n = f == null ? void 0 : f.offsetParent) == null
                ? void 0
                : n.offsetHeight) *
                e +
              ((d = o.value) == null ? void 0 : d.offsetTop);
          J($);
        }
      };
      return (e, n) => {
        const d = z,
          f = O,
          V = ce,
          $ = re,
          b = K,
          F = x;
        return t(p)
          ? (y(),
            S("div", he, [
              a("div", Ce, [
                a("div", Fe, [
                  c(d, null, {
                    default: l(() => [
                      N(I(e.$t("faculty_overview.activity")), 1),
                    ]),
                    _: 1,
                  }),
                  a("div", Le, [
                    c(
                      f,
                      {
                        class: "editorjs-font-small",
                        content: ("getFieldWithLocale" in e
                          ? e.getFieldWithLocale
                          : t(u))(t(p), "description"),
                      },
                      null,
                      8,
                      ["content"]
                    ),
                  ]),
                ]),
                a(
                  "div",
                  { ref_key: "collapseContainerRef", ref: o },
                  [
                    c(
                      F,
                      {
                        ghost: "",
                        accordion: !("isServer" in e ? e.isServer : t(A)),
                        "active-key": ("isServer" in e ? e.isServer : t(A))
                          ? t(i)
                          : t(_),
                      },
                      {
                        expandIcon: l((m) => [
                          a(
                            "div",
                            { onClick: n[0] || (n[0] = E(() => {}, ["stop"])) },
                            [
                              m.isActive
                                ? (y(), w($, { key: 1 }))
                                : (y(), w(V, { key: 0 })),
                            ]
                          ),
                        ]),
                        default: l(() => [
                          (y(!0),
                          S(
                            Q,
                            null,
                            q(
                              t(h),
                              (m, L) => (
                                y(),
                                w(
                                  b,
                                  { key: L, onMouseenter: (H) => s(L) },
                                  {
                                    header: l(() => [
                                      a(
                                        "span",
                                        {
                                          ref_for: !0,
                                          ref: (H) => (t(C)[L] = H),
                                          class: "title",
                                          onClick:
                                            n[1] ||
                                            (n[1] = E(() => {}, ["stop"])),
                                        },
                                        I(
                                          ("getFieldWithLocale" in e
                                            ? e.getFieldWithLocale
                                            : t(u))(m, "name")
                                        ),
                                        513
                                      ),
                                    ]),
                                    default: l(() => [
                                      a("div", We, [
                                        a("div", Ie, [
                                          c(
                                            f,
                                            {
                                              content: ("getFieldWithLocale" in
                                                e
                                                ? e.getFieldWithLocale
                                                : t(u))(m, "description"),
                                            },
                                            null,
                                            8,
                                            ["content"]
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["onMouseenter"]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ["accordion", "active-key"]
                    ),
                  ],
                  512
                ),
              ]),
            ]))
          : D("", !0);
      };
    },
  });
const Me = R(Te, [["__scopeId", "data-v-49d387b2"]]);
export { Ue as _, He as a, Me as b };
