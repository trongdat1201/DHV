import { _ as B } from "./JsonContent.828a79a5.js";
import { _ as ee } from "./AppPageIntroduction.270416f3.js";
import {
  L as c,
  a3 as Q,
  _ as E,
  $ as O,
  S as X,
  Z as te,
  b_ as oe,
} from "./entry.8aa394d7.js";
import {
  j as R,
  V as N,
  z as _,
  S as a,
  W as M,
  X as $,
  u as e,
  Y as o,
  Q as m,
  R as F,
  _ as A,
  k as q,
  a as k,
  F as V,
  a2 as J,
  a0 as H,
  Z as K,
  ay as ne,
  an as se,
  ap as ie,
  aq as le,
  a3 as D,
} from "./swiper-vue.d5cda4d1.js";
import { _ as G } from "./AppTitleLogo.43818f33.js";
import { u as z } from "./Detail.f8923e16.js";
import { _ as Y } from "./client-only.42178d49.js";
import { u as ae } from "./index.97fcacb7.js";
import { _ as ce } from "./PlusOutlined.ea401e65.js";
import { _ as re } from "./MinusOutlined.0c85195f.js";
import { _ as U, C as x } from "./index.d81f9ea4.js";
import { _ as _e } from "./index.a66880e0.js";
import { _ as de } from "./NuxtImg.vue.916c2d60.js";
import { _ as pe } from "./AppButton.be7bd59a.js";
import { _ as ue } from "./nuxt-link.58f89fff.js";
const me = ["src", "alt"],
  Ct = R({
    __name: "AcademicBanner",
    props: { data: { type: Object, default: () => {} } },
    setup(y) {
      return (n, i) => {
        const p = B,
          h = ee;
        return N(n.$slots, "default", {}, () => [
          _(h, null, {
            title: a(() => [
              M(
                " Ngành " +
                  $(
                    ("getFieldWithLocale" in n ? n.getFieldWithLocale : e(c))(
                      y.data,
                      "name"
                    )
                  ),
                1
              ),
            ]),
            description: a(() => [
              _(
                p,
                {
                  content: ("getFieldWithLocale" in n
                    ? n.getFieldWithLocale
                    : e(c))(y.data, "description"),
                },
                null,
                8,
                ["content"]
              ),
            ]),
            introductionImg: a(() => {
              var g, v;
              return [
                o(
                  "img",
                  {
                    class: "w-full h-full object-cover",
                    src:
                      (g = (
                        "getFieldWithLocale" in n ? n.getFieldWithLocale : e(c)
                      )(y.data, "pictureMajor")) == null
                        ? void 0
                        : g.url,
                    alt:
                      (v = (
                        "getFieldWithLocale" in n ? n.getFieldWithLocale : e(c)
                      )(y.data, "pictureMajor")) == null
                        ? void 0
                        : v.alt,
                  },
                  null,
                  8,
                  me
                ),
              ];
            }),
            _: 1,
          }),
        ]);
      };
    },
  }),
  he = { key: 0, class: "section-1" },
  ge = { class: "container" },
  fe = { class: "section-1__header" },
  ve = { class: "section-1__content" },
  Le = { class: "section-1__description" },
  Fe = R({
    __name: "CareerProspects",
    setup(y) {
      const { careerProspects: n } = z();
      return (i, p) => {
        const h = G,
          g = B;
        return N(
          i.$slots,
          "default",
          {},
          () => [
            e(Q)(
              ("getFieldWithLocale" in i ? i.getFieldWithLocale : e(c))(
                e(n),
                "description"
              )
            )
              ? A("", !0)
              : (m(),
                F("div", he, [
                  o("div", ge, [
                    o("div", fe, [
                      _(h, null, {
                        default: a(() => [
                          M(
                            $(
                              ("getFieldWithLocale" in i
                                ? i.getFieldWithLocale
                                : e(c))(e(n), "name")
                            ),
                            1
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    o("div", ve, [
                      o("div", Le, [
                        _(
                          g,
                          {
                            content: ("getFieldWithLocale" in i
                              ? i.getFieldWithLocale
                              : e(c))(e(n), "description"),
                          },
                          null,
                          8,
                          ["content"]
                        ),
                      ]),
                    ]),
                  ]),
                ])),
          ],
          !0
        );
      };
    },
  });
const kt = E(Fe, [["__scopeId", "data-v-1f09f33a"]]),
  $e = { key: 0, class: "section-2 bg-light-blue" },
  ye = {
    class:
      "section-2__container container flex items-center flex-col lg:flex-row",
  },
  We = { class: "section-2__left" },
  Ce = { key: 0, class: "description" },
  ke = { key: 0, class: "section-2__right flex-1" },
  Se = { class: "slide-vertical hidden md:block" },
  be = { class: "career-opportunity__item" },
  we = { class: "career-opportunity__item__content" },
  Ie = { class: "title" },
  Te = { class: "description" },
  je = { class: "slide-mobile block md:hidden" },
  Pe = { class: "career-opportunity__item" },
  Ae = { class: "career-opportunity__content" },
  He = { class: "title" },
  Be = { class: "description" },
  Re = R({
    __name: "CareerOpportunities",
    setup(y) {
      const { careerOpportunities: n } = z(),
        i = q(() => {
          var s;
          return (s = n == null ? void 0 : n.value) == null
            ? void 0
            : s.majorSectionItems;
        }),
        p = k(null),
        h = k(null),
        g = (s) => {
          h.value = s.activeIndex;
        },
        v = (s) => {
          var t, d, r;
          (h.value = s),
            (r =
              (d =
                (t = p == null ? void 0 : p.value) == null ? void 0 : t.$el) ==
              null
                ? void 0
                : d.swiper) == null || r.slideTo(s);
        };
      return (s, t) => {
        const d = G,
          r = B,
          f = ie,
          W = le,
          S = Y;
        return N(
          s.$slots,
          "default",
          {},
          () => {
            var b, j, w, I, L;
            return [
              e(Q)(e(n))
                ? A("", !0)
                : (m(),
                  F("div", $e, [
                    o("div", ye, [
                      o("div", We, [
                        _(d, null, {
                          default: a(() => [
                            M(
                              $(
                                ("getFieldWithLocale" in s
                                  ? s.getFieldWithLocale
                                  : e(c))(e(n), "name")
                              ),
                              1
                            ),
                          ]),
                          _: 1,
                        }),
                        (b = e(n)) != null && b.description
                          ? (m(),
                            F("div", Ce, [
                              _(
                                r,
                                {
                                  content: ("getFieldWithLocale" in s
                                    ? s.getFieldWithLocale
                                    : e(c))(e(n), "description"),
                                },
                                null,
                                8,
                                ["content"]
                              ),
                            ]))
                          : A("", !0),
                      ]),
                      (j = e(n)) != null && j.majorSectionItems.length
                        ? (m(),
                          F("div", ke, [
                            o("div", Se, [
                              _(
                                W,
                                {
                                  ref_key: "careerOpportunityRef",
                                  ref: p,
                                  "slides-per-view":
                                    ((w = e(i)) == null ? void 0 : w.length) ===
                                    1
                                      ? 1
                                      : 2,
                                  "space-between":
                                    ((I = e(i)) == null ? void 0 : I.length) ===
                                    1
                                      ? 0
                                      : 12,
                                  direction: "vertical",
                                  modules: [
                                    "SwiperScrollbar" in s
                                      ? s.SwiperScrollbar
                                      : e(ne),
                                  ],
                                  scrollbar: { draggable: !0 },
                                  breakpoints: {
                                    992: {
                                      spaceBetween:
                                        ((L = e(i)) == null
                                          ? void 0
                                          : L.length) === 1
                                          ? 0
                                          : 24,
                                    },
                                  },
                                  onActiveIndexChange: g,
                                  onSwiper:
                                    t[0] ||
                                    (t[0] = (l) => {
                                      let u =
                                          l.params.spaceBetween *
                                          l.params.slidesPerView,
                                        P =
                                          l.slides
                                            .map((C) => C.clientHeight)
                                            .reduce((C, Z) => C + Z, 0) + u;
                                      (l.el.style.height = P + "px"),
                                        (h.value = l.activeIndex);
                                    }),
                                  onResize:
                                    t[1] ||
                                    (t[1] = (l) => {
                                      let u =
                                          l.params.spaceBetween *
                                          l.params.slidesPerView,
                                        P =
                                          l.slides
                                            .map((C) => C.clientHeight)
                                            .reduce((C, Z) => C + Z, 0) + u;
                                      l.el.style.height = P + "px";
                                    }),
                                },
                                {
                                  default: a(() => [
                                    (m(!0),
                                    F(
                                      V,
                                      null,
                                      J(
                                        e(i),
                                        (l, u) => (
                                          m(),
                                          H(
                                            f,
                                            {
                                              key: u,
                                              class: K(
                                                e(h) === u ? "active" : ""
                                              ),
                                              onClick: (T) => v(u),
                                            },
                                            {
                                              default: a(() => [
                                                o("div", be, [
                                                  o("div", we, [
                                                    o(
                                                      "h3",
                                                      Ie,
                                                      $(
                                                        ("getFieldWithLocale" in
                                                          s
                                                          ? s.getFieldWithLocale
                                                          : e(c))(l, "name")
                                                      ),
                                                      1
                                                    ),
                                                    o("div", Te, [
                                                      _(
                                                        r,
                                                        {
                                                          class:
                                                            "editorjs-font-small",
                                                          content:
                                                            ("getFieldWithLocale" in
                                                              s
                                                              ? s.getFieldWithLocale
                                                              : e(c))(
                                                              l,
                                                              "description"
                                                            ),
                                                        },
                                                        null,
                                                        8,
                                                        ["content"]
                                                      ),
                                                    ]),
                                                  ]),
                                                ]),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["class", "onClick"]
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                },
                                8,
                                [
                                  "slides-per-view",
                                  "space-between",
                                  "modules",
                                  "breakpoints",
                                ]
                              ),
                            ]),
                            o("div", je, [
                              _(S, null, {
                                default: a(() => {
                                  var l, u, T;
                                  return [
                                    _(
                                      W,
                                      {
                                        class: K([
                                          "!pb-14 lg:!pb-16",
                                          {
                                            "!pb-0":
                                              ((l = e(i)) == null
                                                ? void 0
                                                : l.length) === 1,
                                          },
                                        ]),
                                        "slides-per-view":
                                          ((u = e(i)) == null
                                            ? void 0
                                            : u.length) === 1
                                            ? 1
                                            : 1.2,
                                        "resize-observer": "",
                                        "space-between":
                                          ((T = e(i)) == null
                                            ? void 0
                                            : T.length) === 1
                                            ? 0
                                            : 12,
                                        pagination: { clickable: !0 },
                                        modules: [
                                          "SwiperPagination" in s
                                            ? s.SwiperPagination
                                            : e(se),
                                        ],
                                      },
                                      {
                                        default: a(() => [
                                          (m(!0),
                                          F(
                                            V,
                                            null,
                                            J(
                                              e(i),
                                              (P, C) => (
                                                m(),
                                                H(
                                                  f,
                                                  {
                                                    key: C,
                                                    pagination: {
                                                      clickable: !0,
                                                    },
                                                  },
                                                  {
                                                    default: a(() => [
                                                      o("div", Pe, [
                                                        o("div", Ae, [
                                                          o(
                                                            "h3",
                                                            He,
                                                            $(
                                                              ("getFieldWithLocale" in
                                                                s
                                                                ? s.getFieldWithLocale
                                                                : e(c))(
                                                                P,
                                                                "name"
                                                              )
                                                            ),
                                                            1
                                                          ),
                                                          o("div", Be, [
                                                            _(
                                                              r,
                                                              {
                                                                class:
                                                                  "editorjs-font-small",
                                                                content:
                                                                  ("getFieldWithLocale" in
                                                                    s
                                                                    ? s.getFieldWithLocale
                                                                    : e(c))(
                                                                    P,
                                                                    "description"
                                                                  ),
                                                              },
                                                              null,
                                                              8,
                                                              ["content"]
                                                            ),
                                                          ]),
                                                        ]),
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
                                      [
                                        "class",
                                        "slides-per-view",
                                        "space-between",
                                        "modules",
                                      ]
                                    ),
                                  ];
                                }),
                                _: 1,
                              }),
                            ]),
                          ]))
                        : A("", !0),
                    ]),
                  ])),
            ];
          },
          !0
        );
      };
    },
  });
const St = E(Re, [["__scopeId", "data-v-6e786244"]]),
  Ne = { key: 0, class: "section-3" },
  Ee = { class: "container" },
  Me = { class: "section-3__header" },
  ze = { class: "ml-2.5" },
  Oe = { class: "description" },
  Ve = R({
    __name: "SpecializedTraining",
    setup(y) {
      const { specializedTraining: n } = z(),
        i = ae({
          xxs: 320,
          xs: 375,
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1200,
          xxl: 1400,
        }),
        p = k([0]),
        h = q(() => {
          var t;
          return (t = n.value) == null
            ? void 0
            : t.majorSectionItems.map((d, r) => r);
        }),
        g = k([]),
        v = k(null),
        s = (t) => {
          var d, r;
          if (((p.value = [t]), i.smallerOrEqual("md").value)) {
            const f = g.value[t],
              S =
                ((d = f == null ? void 0 : f.offsetParent) == null
                  ? void 0
                  : d.offsetHeight) *
                  (t + 1) +
                ((r = v.value) == null ? void 0 : r.offsetTop);
            X(S);
          }
        };
      return (t, d) => {
        const r = G,
          f = ce,
          W = re,
          S = B,
          b = U,
          j = x;
        return N(
          t.$slots,
          "default",
          {},
          () => {
            var w, I;
            return [
              (I = (w = e(n)) == null ? void 0 : w.majorSectionItems) != null &&
              I.length
                ? (m(),
                  F("div", Ne, [
                    o("div", Ee, [
                      o("div", Me, [
                        _(r, null, {
                          default: a(() => [
                            M(
                              $(
                                ("getFieldWithLocale" in t
                                  ? t.getFieldWithLocale
                                  : e(c))(e(n), "name")
                              ),
                              1
                            ),
                          ]),
                          _: 1,
                        }),
                      ]),
                      o(
                        "div",
                        {
                          ref_key: "collapseContainerRef",
                          ref: v,
                          class: "section-3__list",
                        },
                        [
                          _(
                            j,
                            {
                              ghost: "",
                              accordion: !("isServer" in t ? t.isServer : e(O)),
                              "active-key": (
                                "isServer" in t ? t.isServer : e(O)
                              )
                                ? e(h)
                                : e(p),
                            },
                            {
                              expandIcon: a((L) => [
                                o(
                                  "div",
                                  {
                                    onClick:
                                      d[0] || (d[0] = D(() => {}, ["stop"])),
                                  },
                                  [
                                    L.isActive
                                      ? (m(), H(W, { key: 1 }))
                                      : (m(), H(f, { key: 0 })),
                                  ]
                                ),
                              ]),
                              default: a(() => {
                                var L;
                                return [
                                  (m(!0),
                                  F(
                                    V,
                                    null,
                                    J(
                                      (L = e(n)) == null
                                        ? void 0
                                        : L.majorSectionItems,
                                      (l, u) => (
                                        m(),
                                        H(
                                          b,
                                          { key: u, onMouseenter: (T) => s(u) },
                                          {
                                            header: a(() => [
                                              o(
                                                "span",
                                                {
                                                  ref_for: !0,
                                                  ref: (T) => (e(g)[u] = T),
                                                  class: "title",
                                                  onClick:
                                                    d[1] ||
                                                    (d[1] = D(() => {}, [
                                                      "stop",
                                                    ])),
                                                },
                                                $(
                                                  ("getFieldWithLocale" in t
                                                    ? t.getFieldWithLocale
                                                    : e(c))(l, "name")
                                                ),
                                                513
                                              ),
                                            ]),
                                            default: a(() => [
                                              o("div", ze, [
                                                o("div", Oe, [
                                                  _(
                                                    S,
                                                    {
                                                      content:
                                                        ("getFieldWithLocale" in
                                                          t
                                                          ? t.getFieldWithLocale
                                                          : e(c))(
                                                          l,
                                                          "description"
                                                        ),
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
                                ];
                              }),
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
                : A("", !0),
            ];
          },
          !0
        );
      };
    },
  });
const bt = E(Ve, [["__scopeId", "data-v-ef8f3b57"]]),
  Je = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Ze = o(
    "g",
    { "clip-path": "url(#clip0_8316_133831)" },
    [
      o("path", {
        d: "M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z",
        fill: "#333333",
      }),
    ],
    -1
  ),
  qe = o(
    "defs",
    null,
    [
      o("clipPath", { id: "clip0_8316_133831" }, [
        o("rect", {
          width: "24",
          height: "24",
          fill: "white",
          transform: "matrix(1 0 0 -1 0 24)",
        }),
      ]),
    ],
    -1
  ),
  Ge = [Ze, qe];
function Ke(y, n) {
  return m(), F("svg", Je, Ge);
}
const De = { render: Ke },
  Qe = { key: 0, class: "section-4 bg-light-blue" },
  Xe = { class: "container" },
  Ye = { class: "section-4__header" },
  Ue = { class: "section-title mb-0" },
  xe = ["onClick"],
  et = { class: "mb-0 pl-4 line-clamp-1" },
  tt = { class: "reference-information__item-content" },
  ot = R({
    __name: "Curriculum",
    setup(y) {
      const { curriculum: n } = z(),
        i = k([]),
        p = q(() => {
          var t;
          return (t = n.value) == null
            ? void 0
            : t.majorSectionItems.map((d, r) => r);
        }),
        h = k([]),
        g = k([]),
        v = k(null),
        s = (t) => {
          var f, W;
          if (t === i.value[0]) {
            i.value = [];
            return;
          }
          i.value = [t];
          const d = h.value[t],
            r = Number(t);
          if (!isNaN(r)) {
            const b =
              ((f = d == null ? void 0 : d.offsetParent) == null
                ? void 0
                : f.offsetHeight) *
                (r + 1) +
              ((W = v.value) == null ? void 0 : W.offsetTop);
            X(b);
          }
        };
      return (t, d) => {
        const r = _e,
          f = Y,
          W = B,
          S = U,
          b = x;
        return N(
          t.$slots,
          "default",
          {},
          () => {
            var j, w;
            return [
              (w = (j = e(n)) == null ? void 0 : j.majorSectionItems) != null &&
              w.length
                ? (m(),
                  F("div", Qe, [
                    o("div", Xe, [
                      o("div", Ye, [
                        o(
                          "h2",
                          Ue,
                          $(
                            ("getFieldWithLocale" in t
                              ? t.getFieldWithLocale
                              : e(c))(e(n), "name")
                          ),
                          1
                        ),
                      ]),
                      o(
                        "div",
                        {
                          ref_key: "collapseContainerRef",
                          ref: v,
                          class: "section-4__list",
                        },
                        [
                          _(
                            b,
                            {
                              "expand-icon-position": "end",
                              accordion: !("isServer" in t ? t.isServer : e(O)),
                              "active-key": (
                                "isServer" in t ? t.isServer : e(O)
                              )
                                ? e(p)
                                : e(i),
                            },
                            {
                              expandIcon: a(() => [_(e(De))]),
                              default: a(() => {
                                var I;
                                return [
                                  (m(!0),
                                  F(
                                    V,
                                    null,
                                    J(
                                      (I = e(n)) == null
                                        ? void 0
                                        : I.majorSectionItems,
                                      (L, l) => (
                                        m(),
                                        H(
                                          S,
                                          { key: l },
                                          {
                                            header: a(() => [
                                              o(
                                                "div",
                                                {
                                                  ref_for: !0,
                                                  ref: (u) => (e(g)[l] = u),
                                                  class:
                                                    "section-4__item-header",
                                                  onClick: (u) => s(l),
                                                },
                                                [
                                                  _(
                                                    f,
                                                    null,
                                                    {
                                                      fallback: a(() => [
                                                        o(
                                                          "p",
                                                          et,
                                                          $(
                                                            ("getFieldWithLocale" in
                                                              t
                                                              ? t.getFieldWithLocale
                                                              : e(c))(L, "name")
                                                          ),
                                                          1
                                                        ),
                                                      ]),
                                                      default: a(() => [
                                                        _(
                                                          r,
                                                          {
                                                            title:
                                                              ("isTruncate" in t
                                                                ? t.isTruncate
                                                                : e(te))(
                                                                e(h)[l]
                                                              )
                                                                ? ("getFieldWithLocale" in
                                                                    t
                                                                    ? t.getFieldWithLocale
                                                                    : e(c))(
                                                                    L,
                                                                    "name"
                                                                  )
                                                                : "",
                                                            placement:
                                                              "rightTop",
                                                          },
                                                          {
                                                            default: a(() => [
                                                              o(
                                                                "p",
                                                                {
                                                                  ref_for: !0,
                                                                  ref: (u) =>
                                                                    (e(h)[l] =
                                                                      u),
                                                                  class:
                                                                    "mb-0 pl-4 line-clamp-1",
                                                                },
                                                                $(
                                                                  ("getFieldWithLocale" in
                                                                    t
                                                                    ? t.getFieldWithLocale
                                                                    : e(c))(
                                                                    L,
                                                                    "name"
                                                                  )
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
                                                ],
                                                8,
                                                xe
                                              ),
                                            ]),
                                            default: a(() => [
                                              o("div", tt, [
                                                _(
                                                  W,
                                                  {
                                                    content:
                                                      ("getFieldWithLocale" in t
                                                        ? t.getFieldWithLocale
                                                        : e(c))(
                                                        L,
                                                        "description"
                                                      ),
                                                  },
                                                  null,
                                                  8,
                                                  ["content"]
                                                ),
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
                                ];
                              }),
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
                : A("", !0),
            ];
          },
          !0
        );
      };
    },
  });
const wt = E(ot, [["__scopeId", "data-v-e1cdf309"]]),
  nt = { class: "section-5" },
  st = { class: "section-5__container container flex flex-col items-center" },
  it = { class: "relative" },
  lt = { class: "section-title" },
  at = { class: "logo" },
  ct = R({
    __name: "Register",
    setup(y) {
      const { registration: n } = z(),
        { generalInformation: i } = oe();
      return (p, h) => {
        const g = B,
          v = de,
          s = pe,
          t = ue;
        return N(
          p.$slots,
          "default",
          {},
          () => {
            var d, r;
            return [
              o("div", nt, [
                o("div", st, [
                  o("div", it, [
                    o("h2", lt, [
                      _(
                        g,
                        {
                          content: ("getFieldWithLocale" in p
                            ? p.getFieldWithLocale
                            : e(c))(e(n), "description"),
                        },
                        null,
                        8,
                        ["content"]
                      ),
                    ]),
                    o("div", at, [
                      _(
                        v,
                        {
                          src:
                            (d = (
                              "getFieldWithLocale" in p
                                ? p.getFieldWithLocale
                                : e(c)
                            )(e(i), "pictureFacultyLogo")) == null
                              ? void 0
                              : d.url,
                          alt:
                            (r = (
                              "getFieldWithLocale" in p
                                ? p.getFieldWithLocale
                                : e(c)
                            )(e(i), "pictureFacultyLogo")) == null
                              ? void 0
                              : r.alt,
                          sizes: "sm:20vw md:15vw",
                        },
                        null,
                        8,
                        ["src", "alt"]
                      ),
                    ]),
                  ]),
                  _(
                    t,
                    { to: "https://tuyensinh.dhv.edu.vn/", target: "_blank" },
                    {
                      default: a(() => [
                        _(
                          s,
                          { class: "uppercase", type: "primary", arrow: !0 },
                          {
                            default: a(() => [
                              M($(p.$t("common.register_now")), 1),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
            ];
          },
          !0
        );
      };
    },
  });
const It = E(ct, [["__scopeId", "data-v-db9e0250"]]);
export { Ct as _, kt as a, St as b, bt as c, wt as d, It as e };
