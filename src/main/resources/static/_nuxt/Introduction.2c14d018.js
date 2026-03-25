import { _ as V } from "./nuxt-link.58f89fff.js";
import { _ as G } from "./client-only.42178d49.js";
import {
  H as z,
  u as K,
  L as u,
  N as D,
  $ as N,
  Z as U,
  _ as E,
  J as ee,
  S as te,
} from "./entry.8aa394d7.js";
import { u as P } from "./index.62c724d1.js";
import {
  j as Y,
  a as w,
  al as j,
  b as J,
  V as Z,
  Y as a,
  Q as c,
  R as p,
  a2 as M,
  Z as oe,
  u as n,
  a1 as ne,
  z as h,
  S as r,
  a0 as C,
  W as q,
  X as m,
  as as ae,
  F as R,
  _ as se,
  k as H,
  a3 as O,
} from "./swiper-vue.d5cda4d1.js";
import { _ as le } from "./index.a66880e0.js";
import { _ as ie } from "./JsonContent.828a79a5.js";
import { u as ce } from "./index.97fcacb7.js";
import { _ as _e } from "./ArrowRightOutlined.581af82c.js";
import { _ as de, C as ue } from "./index.d81f9ea4.js";
import { _ as re } from "./PlusOutlined.ea401e65.js";
import { _ as me } from "./MinusOutlined.0c85195f.js";
const fe = {
    class:
      "education-program__list-program bg-primary text-white flex flex-col md:flex-row min-h-[75rem] md:min-h-[50rem]",
  },
  pe = ["onMouseover"],
  he = { class: "content-wrapper absolute h-full left-0 bottom-0 w-full" },
  ve = {
    class:
      "content absolute bottom-0 left-1/2 -translate-x-1/2 h-full md:h-[40%]",
  },
  ye = { key: 1, class: "content__title font-semibold mb-3" },
  ge = { key: 0, class: "content__major my-0 py-0" },
  Le = Y({
    __name: "ListProgram",
    emits: ["changeProgram"],
    async setup(x, { emit: T }) {
      let b, S;
      const v = z(),
        { listTrainingProgram: f, getTrainingPrograms: k } = P();
      K({
        link: f.value.map((e) => {
          var d;
          return {
            rel: "preload",
            href: (d = u(e, "pictureTrainingProgram")) == null ? void 0 : d.url,
            as: "image",
          };
        }),
      });
      const _ = w(0),
        L = w([]);
      ([b, S] = j(async () =>
        D(async () => {
          var e;
          (N.value || !((e = f.value) != null && e.length)) && (await k());
        }, "$OYyHjsYyfL")
      )),
        await b,
        S(),
        J(
          [f, () => v.query.program],
          ([e]) => {
            if (e != null && e.length) {
              const d =
                  e == null
                    ? void 0
                    : e.findIndex((t) => {
                        var s;
                        return (
                          t.alias ===
                          ((s = v == null ? void 0 : v.query) == null
                            ? void 0
                            : s.program)
                        );
                      }),
                y = e == null ? void 0 : e.findIndex((t) => t.majors.length);
              (_.value = d > -1 ? d : y), T("changeProgram", _.value);
            }
          },
          { immediate: !0 }
        );
      const A = (e) => {
        var d;
        (d = f == null ? void 0 : f.value) != null &&
          d[e].majors.length &&
          (_.value = e);
      };
      return (e, d) => {
        const y = V,
          t = le,
          s = G;
        return Z(
          e.$slots,
          "default",
          {},
          () => [
            a("div", fe, [
              (c(!0),
              p(
                R,
                null,
                M(n(f), (o, i) => {
                  var F;
                  return (
                    c(),
                    p(
                      "div",
                      {
                        key: i,
                        class: oe([
                          "education-program__list-program__item relative flex-1",
                          {
                            "min-h-[30rem] flex-[5] md:min-h-0 md:flex-[3] active":
                              i === n(_),
                          },
                        ]),
                        onMouseover: (l) => A(i),
                      },
                      [
                        a(
                          "div",
                          {
                            class:
                              "thumbnail absolute md:!relative text-center w-full h-[60%]",
                            style: ne({
                              backgroundImage: `url(${
                                ((F = (
                                  "getFieldWithLocale" in e
                                    ? e.getFieldWithLocale
                                    : n(u)
                                )(o, "pictureTrainingProgram")) == null
                                  ? void 0
                                  : F.url) || ""
                              })`,
                            }),
                          },
                          null,
                          4
                        ),
                        a("div", he, [
                          a("div", ve, [
                            h(
                              s,
                              null,
                              {
                                fallback: r(() => {
                                  var l;
                                  return [
                                    (l = o == null ? void 0 : o.majors) !=
                                      null && l.length
                                      ? (c(),
                                        C(
                                          y,
                                          {
                                            key: 0,
                                            class:
                                              "content__title font-semibold mb-3",
                                            to: e.localePath({
                                              path: "/educational-program",
                                              query: {
                                                program:
                                                  o == null ? void 0 : o.alias,
                                              },
                                            }),
                                          },
                                          {
                                            default: r(() => [
                                              q(
                                                m(
                                                  ("getFieldWithLocale" in e
                                                    ? e.getFieldWithLocale
                                                    : n(u))(o, "name")
                                                ),
                                                1
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["to"]
                                        ))
                                      : (c(),
                                        p(
                                          "h3",
                                          ye,
                                          m(
                                            ("getFieldWithLocale" in e
                                              ? e.getFieldWithLocale
                                              : n(u))(o, "name")
                                          ),
                                          1
                                        )),
                                  ];
                                }),
                                default: r(() => [
                                  h(
                                    t,
                                    null,
                                    ae(
                                      {
                                        default: r(() => {
                                          var l;
                                          return [
                                            (l =
                                              o == null ? void 0 : o.majors) !=
                                              null && l.length
                                              ? (c(),
                                                C(
                                                  y,
                                                  {
                                                    key: 0,
                                                    ref_for: !0,
                                                    ref: (g) => (n(L)[i] = g),
                                                    class:
                                                      "content__title font-semibold mb-3",
                                                    to: e.localePath({
                                                      path: "/educational-program",
                                                      query: {
                                                        program:
                                                          o == null
                                                            ? void 0
                                                            : o.alias,
                                                      },
                                                    }),
                                                  },
                                                  {
                                                    default: r(() => [
                                                      q(
                                                        m(
                                                          ("getFieldWithLocale" in
                                                            e
                                                            ? e.getFieldWithLocale
                                                            : n(u))(o, "name")
                                                        ),
                                                        1
                                                      ),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ["to"]
                                                ))
                                              : (c(),
                                                p(
                                                  "h3",
                                                  {
                                                    key: 1,
                                                    ref_for: !0,
                                                    ref: (g) => (n(L)[i] = g),
                                                    class:
                                                      "content__title font-semibold mb-3",
                                                  },
                                                  m(
                                                    ("getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : n(u))(o, "name")
                                                  ),
                                                  513
                                                )),
                                          ];
                                        }),
                                        _: 2,
                                      },
                                      [
                                        ("isTruncate" in e
                                          ? e.isTruncate
                                          : n(U))(n(L)[i])
                                          ? {
                                              name: "title",
                                              fn: r(() => [
                                                q(
                                                  m(
                                                    ("getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : n(u))(o, "name")
                                                  ),
                                                  1
                                                ),
                                              ]),
                                              key: "0",
                                            }
                                          : void 0,
                                      ]
                                    ),
                                    1024
                                  ),
                                ]),
                                _: 2,
                              },
                              1024
                            ),
                            i === n(_)
                              ? (c(),
                                p("ul", ge, [
                                  (c(!0),
                                  p(
                                    R,
                                    null,
                                    M(
                                      o.majors,
                                      (l, g) => (
                                        c(),
                                        p("li", { key: g, class: "mb-3" }, [
                                          h(
                                            y,
                                            {
                                              to: e.localePath({
                                                path: `/educational-program/${
                                                  l == null ? void 0 : l.alias
                                                }`,
                                                query: {
                                                  program:
                                                    o == null
                                                      ? void 0
                                                      : o.alias,
                                                },
                                              }),
                                            },
                                            {
                                              default: r(() => [
                                                q(
                                                  m(
                                                    ("getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : n(u))(l, "name")
                                                  ),
                                                  1
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["to"]
                                          ),
                                        ])
                                      )
                                    ),
                                    128
                                  )),
                                ]))
                              : se("", !0),
                          ]),
                        ]),
                      ],
                      42,
                      pe
                    )
                  );
                }),
                128
              )),
            ]),
          ],
          !0
        );
      };
    },
  });
const Pe = E(Le, [["__scopeId", "data-v-c329fdbf"]]),
  be = { class: "education-program__introduction container py-12" },
  ke = {
    class:
      "education-program__introduction__header flex flex-wrap md:font-medium gap-x-32 mb-3 lg:!mb-16",
  },
  Fe = {
    class: "education-program__introduction__header--left w-full lg:w-fit",
  },
  We = { class: "label uppercase mb-0" },
  $e = {
    class:
      "program-name font-unbounded font-medium md:font-semibold uppercase mb-0",
  },
  we = { class: "education-program__introduction__header--right flex-1" },
  Ce = { class: "ml-2.5" },
  Te = { class: "major-description" },
  Se = { class: "flex" },
  Ie = Y({
    __name: "Introduction",
    async setup(x) {
      let T, b;
      const S = ce({
          xxs: 320,
          xs: 375,
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1200,
          xxl: 1400,
        }),
        { listTrainingProgram: v, getTrainingPrograms: f } = P(),
        k = z();
      ([T, b] = j(async () =>
        D(async () => {
          var t;
          (N.value || !((t = v.value) != null && t.length)) && (await f());
        }, "$BWovBN5Fp2")
      )),
        await T,
        b();
      const _ = H(() => {
          var t;
          return (t = v.value) == null
            ? void 0
            : t.find((s) => {
                var o;
                return (
                  s.alias ===
                  ((o = k == null ? void 0 : k.query) == null
                    ? void 0
                    : o.program)
                );
              });
        }),
        L = w([0]),
        A = H(() => {
          var t;
          return (t = _.value) == null ? void 0 : t.majors.map((s, o) => o);
        }),
        e = w([]),
        d = w(null);
      J(
        () => _.value,
        (t) => {
          ee(t == null ? void 0 : t.metadata);
        },
        { immediate: !0 }
      );
      const y = (t) => {
        var s, o;
        if (((L.value = [t]), S.smallerOrEqual("md").value)) {
          const i = e.value[t],
            l =
              ((s = i == null ? void 0 : i.offsetParent) == null
                ? void 0
                : s.offsetHeight) *
                (t + 1) +
              ((o = d.value) == null ? void 0 : o.offsetTop);
          te(l);
        }
      };
      return (t, s) => {
        const o = ie,
          i = re,
          F = me,
          l = _e,
          g = V,
          Q = de,
          X = ue;
        return Z(
          t.$slots,
          "default",
          {},
          () => [
            a("div", be, [
              a("div", ke, [
                a("div", Fe, [
                  a("p", We, m(t.$t("educational_program.title")), 1),
                  a(
                    "h1",
                    $e,
                    m(
                      ("getFieldWithLocale" in t ? t.getFieldWithLocale : n(u))(
                        n(_),
                        "name"
                      )
                    ),
                    1
                  ),
                ]),
                a("div", we, [
                  h(
                    o,
                    {
                      content: ("getFieldWithLocale" in t
                        ? t.getFieldWithLocale
                        : n(u))(n(_), "description"),
                    },
                    null,
                    8,
                    ["content"]
                  ),
                ]),
              ]),
              a(
                "div",
                {
                  ref_key: "collapseContainerRef",
                  ref: d,
                  class: "education-program__introduction__list-major",
                },
                [
                  h(
                    X,
                    {
                      ghost: "",
                      "active-key": ("isServer" in t ? t.isServer : n(N))
                        ? n(A)
                        : n(L),
                      accordion: !("isServer" in t ? t.isServer : n(N)),
                      "default-active-key": "0",
                    },
                    {
                      expandIcon: r((I) => [
                        a(
                          "div",
                          { onClick: s[0] || (s[0] = O(() => {}, ["stop"])) },
                          [
                            I.isActive
                              ? (c(), C(F, { key: 1 }))
                              : (c(), C(i, { key: 0 })),
                          ]
                        ),
                      ]),
                      default: r(() => {
                        var I;
                        return [
                          (c(!0),
                          p(
                            R,
                            null,
                            M(
                              (I = n(_)) == null ? void 0 : I.majors,
                              (W, B) => (
                                c(),
                                C(
                                  Q,
                                  { key: B, onMouseenter: ($) => y(B) },
                                  {
                                    header: r(() => [
                                      a(
                                        "span",
                                        {
                                          ref_for: !0,
                                          ref: ($) => (n(e)[B] = $),
                                          class: "major-name",
                                          onClick:
                                            s[1] ||
                                            (s[1] = O(() => {}, ["stop"])),
                                        },
                                        m(
                                          ("getFieldWithLocale" in t
                                            ? t.getFieldWithLocale
                                            : n(u))(W, "name")
                                        ),
                                        513
                                      ),
                                    ]),
                                    default: r(() => {
                                      var $;
                                      return [
                                        a("div", Ce, [
                                          a("div", Te, [
                                            h(
                                              o,
                                              {
                                                content:
                                                  ("getFieldWithLocale" in t
                                                    ? t.getFieldWithLocale
                                                    : n(u))(W, "description"),
                                              },
                                              null,
                                              8,
                                              ["content"]
                                            ),
                                          ]),
                                          a("div", Se, [
                                            h(
                                              g,
                                              {
                                                to: t.localePath({
                                                  path: `/educational-program/${
                                                    W == null ? void 0 : W.alias
                                                  }`,
                                                  query: {
                                                    program:
                                                      ($ = n(_)) == null
                                                        ? void 0
                                                        : $.alias,
                                                  },
                                                }),
                                                class:
                                                  "flex items-center gap-2 text-primary font-medium",
                                              },
                                              {
                                                default: r(() => [
                                                  a(
                                                    "span",
                                                    null,
                                                    m(t.$t("common.read_more")),
                                                    1
                                                  ),
                                                  h(l),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["to"]
                                            ),
                                          ]),
                                        ]),
                                      ];
                                    }),
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
                    ["active-key", "accordion"]
                  ),
                ],
                512
              ),
            ]),
          ],
          !0
        );
      };
    },
  });
const Ye = E(Ie, [["__scopeId", "data-v-8ac1819d"]]);
export { Pe as _, Ye as a };
