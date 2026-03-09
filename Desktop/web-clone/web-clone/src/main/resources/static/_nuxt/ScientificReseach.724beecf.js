import { _ as O } from "./JsonContent.828a79a5.js";
import { _ as l6 } from "./AppButton.be7bd59a.js";
import { _ as j } from "./nuxt-link.58f89fff.js";
import {
  b_ as u6,
  L as l,
  _ as N,
  N as D,
  Z as q,
  a4 as c6,
  $ as m6,
  T as g6,
  D as f6,
} from "./entry.8aa394d7.js";
import {
  j as z,
  V as J,
  Y as t,
  u as e,
  X as h,
  z as n,
  S as i,
  ai as v6,
  aj as H6,
  al as K,
  a as A,
  W as R,
  Q as C,
  R as p,
  F as I,
  a2 as B,
  a0 as T,
  Z as r6,
  _ as X,
  an as C6,
  ap as Y,
  aq as G,
  b as w6,
  am as L6,
  ao as V6,
  ae as U,
  k as a6,
  a8 as $6,
} from "./swiper-vue.d5cda4d1.js";
import { _ as Q } from "./AppTitleLogo.43818f33.js";
import { _ as x } from "./NuxtImg.vue.916c2d60.js";
import { _ as _6 } from "./client-only.42178d49.js";
import { u as y6 } from "./index.62c724d1.js";
import { _ as d6 } from "./index.a66880e0.js";
import { _ as M6 } from "./AppNewsEvent.e529aabe.js";
import { u as F6 } from "./list.70e6673c.js";
import { u as e6 } from "./transform-translate-faculty.c0e2ceae.js";
import { A as Z6 } from "./IArticle.feadee52.js";
import { _ as b6 } from "./ArrowRightOutlined.581af82c.js";
import { u as W6 } from "./index.6ccc494e.js";
import { A as o6 } from "./btn-arrow.5abf483c.js";
import { F as T6 } from "./IFaculty.97f6e59d.js";
const p6 = (m) => (v6("data-v-dc7ab83d"), (m = m()), H6(), m),
  k6 = { class: "home__banner" },
  S6 = { class: "picture-logo" },
  P6 = ["src", "alt"],
  A6 = { class: "home__banner-top-image-outer" },
  I6 = { class: "home__banner-top-image-inner" },
  B6 = p6(() => t("div", { class: "shadow-image" }, null, -1)),
  N6 = { class: "image" },
  j6 = ["src", "alt"],
  z6 = {
    class:
      "home__banner__container container flex justify-between items-center flex-col lg:flex-row",
  },
  E6 = { class: "home__banner-left flex-1 font-unbounded" },
  R6 = { class: "title" },
  Q6 = { class: "uppercase" },
  q6 = { class: "home__banner-right" },
  O6 = p6(() => t("div", { class: "shadow-image" }, null, -1)),
  D6 = { class: "image" },
  J6 = ["src", "alt"],
  K6 = z({
    __name: "HomeBanner",
    setup(m) {
      const { generalInformation: c } = u6();
      return (s, H) => {
        const d = O,
          g = l6,
          o = j;
        return J(
          s.$slots,
          "default",
          {},
          () => {
            var V, y, f, u, _, M;
            return [
              t("div", k6, [
                t("div", S6, [
                  t(
                    "img",
                    {
                      class: "w-full h-full opacity-5",
                      src:
                        (V = (
                          "getFieldWithLocale" in s
                            ? s.getFieldWithLocale
                            : e(l)
                        )(e(c), "pictureFacultyLogo")) == null
                          ? void 0
                          : V.url,
                      alt:
                        (y = (
                          "getFieldWithLocale" in s
                            ? s.getFieldWithLocale
                            : e(l)
                        )(e(c), "pictureFacultyLogo")) == null
                          ? void 0
                          : y.alt,
                    },
                    null,
                    8,
                    P6
                  ),
                ]),
                t("div", A6, [
                  t("div", I6, [
                    B6,
                    t("div", N6, [
                      t(
                        "img",
                        {
                          src:
                            (f = (
                              "getFieldWithLocale" in s
                                ? s.getFieldWithLocale
                                : e(l)
                            )(e(c), "pictureFaculty")) == null
                              ? void 0
                              : f.url,
                          alt:
                            (u = (
                              "getFieldWithLocale" in s
                                ? s.getFieldWithLocale
                                : e(l)
                            )(e(c), "pictureFaculty")) == null
                              ? void 0
                              : u.alt,
                        },
                        null,
                        8,
                        j6
                      ),
                    ]),
                  ]),
                ]),
                t("div", z6, [
                  t("div", E6, [
                    t(
                      "h1",
                      R6,
                      h(
                        ("getFieldWithLocale" in s
                          ? s.getFieldWithLocale
                          : e(l))(e(c), "name")
                      ),
                      1
                    ),
                    n(
                      d,
                      {
                        content: ("getFieldWithLocale" in s
                          ? s.getFieldWithLocale
                          : e(l))(e(c), "description"),
                        class: "description",
                      },
                      null,
                      8,
                      ["content"]
                    ),
                    n(
                      o,
                      {
                        to: s.localePath(
                          "/faculty-introduction/faculty-overview"
                        ),
                      },
                      {
                        default: i(() => [
                          n(
                            g,
                            { type: "primary", arrow: "" },
                            {
                              default: i(() => [
                                t("span", Q6, h(s.$t("common.read_more")), 1),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["to"]
                    ),
                  ]),
                  t("div", q6, [
                    O6,
                    t("div", D6, [
                      t(
                        "img",
                        {
                          src:
                            (_ = (
                              "getFieldWithLocale" in s
                                ? s.getFieldWithLocale
                                : e(l)
                            )(e(c), "pictureFaculty")) == null
                              ? void 0
                              : _.url,
                          alt:
                            (M = (
                              "getFieldWithLocale" in s
                                ? s.getFieldWithLocale
                                : e(l)
                            )(e(c), "pictureFaculty")) == null
                              ? void 0
                              : M.alt,
                        },
                        null,
                        8,
                        J6
                      ),
                    ]),
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
const B5 = N(K6, [["__scopeId", "data-v-dc7ab83d"]]),
  X6 = { class: "education-program bg-light-blue" },
  Y6 = { class: "container" },
  G6 = { class: "education-program__header relative" },
  U6 = { class: "education-program__list" },
  x6 = { class: "education-program__item__image" },
  e4 = { class: "education-program__item__content" },
  t4 = { key: 0, class: "education-program__item__title" },
  a4 = { class: "education-program__item__title" },
  o4 = { key: 0, class: "education-program__item__description" },
  n4 = z({
    __name: "EducationProgram",
    async setup(m) {
      let c, s;
      const { listTrainingProgram: H, getTrainingPrograms: d } = y6();
      ([c, s] = K(async () =>
        D(async () => {
          !H.value.length && (await d());
        }, "$bryYp3GPQX")
      )),
        await c,
        s();
      const g = A([]);
      return (o, V) => {
        const y = Q,
          f = x,
          u = j,
          _ = d6,
          M = _6,
          a = Y,
          v = G;
        return J(
          o.$slots,
          "default",
          {},
          () => [
            t("div", X6, [
              t("div", Y6, [
                t("div", G6, [
                  n(y, null, {
                    default: i(() => [
                      R(h(o.$t("educational_program.title")), 1),
                    ]),
                    _: 1,
                  }),
                ]),
                t("div", U6, [
                  n(
                    v,
                    {
                      class: "w-full !pb-14 lg:!pb-16",
                      "slides-per-view": 1.2,
                      "resize-observer": "",
                      "space-between": 12,
                      pagination: { clickable: !0 },
                      breakpoints: {
                        992: { slidesPerView: 4 },
                        768: { slidesPerView: 2 },
                      },
                      modules: [
                        "SwiperPagination" in o ? o.SwiperPagination : e(C6),
                      ],
                    },
                    {
                      default: i(() => [
                        (C(!0),
                        p(
                          I,
                          null,
                          B(
                            e(H),
                            (r, w) => (
                              C(),
                              T(
                                a,
                                { key: w, pagination: { clickable: !0 } },
                                {
                                  default: i(() => {
                                    var F, W, Z, L;
                                    return [
                                      t(
                                        "div",
                                        {
                                          class: r6([
                                            "education-program__item",
                                            {
                                              active:
                                                (F = r.majors) == null
                                                  ? void 0
                                                  : F.length,
                                            },
                                          ]),
                                        },
                                        [
                                          t("div", x6, [
                                            n(
                                              f,
                                              {
                                                class:
                                                  "w-full inline-block object-contain",
                                                src:
                                                  ((W = (
                                                    "getFieldWithLocale" in o
                                                      ? o.getFieldWithLocale
                                                      : e(l)
                                                  )(
                                                    r,
                                                    "pictureTrainingProgram"
                                                  )) == null
                                                    ? void 0
                                                    : W.url) || "",
                                                alt:
                                                  ((Z = (
                                                    "getFieldWithLocale" in o
                                                      ? o.getFieldWithLocale
                                                      : e(l)
                                                  )(
                                                    r,
                                                    "pictureTrainingProgram"
                                                  )) == null
                                                    ? void 0
                                                    : Z.alt) || "",
                                                loading: "lazy",
                                                sizes: "sm:75vw md:70vw",
                                              },
                                              null,
                                              8,
                                              ["src", "alt"]
                                            ),
                                          ]),
                                          t("div", e4, [
                                            n(
                                              M,
                                              null,
                                              {
                                                fallback: i(() => [
                                                  r.majors.length
                                                    ? (C(),
                                                      T(
                                                        u,
                                                        {
                                                          key: 1,
                                                          to: o.localePath({
                                                            path: "/educational-program",
                                                            query: {
                                                              program: r.alias,
                                                            },
                                                          }),
                                                        },
                                                        {
                                                          default: i(() => [
                                                            t(
                                                              "h3",
                                                              a4,
                                                              h(
                                                                ("getFieldWithLocale" in
                                                                  o
                                                                  ? o.getFieldWithLocale
                                                                  : e(l))(
                                                                  r,
                                                                  "name"
                                                                )
                                                              ),
                                                              1
                                                            ),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        ["to"]
                                                      ))
                                                    : (C(),
                                                      p(
                                                        "h3",
                                                        t4,
                                                        h(
                                                          ("getFieldWithLocale" in
                                                            o
                                                            ? o.getFieldWithLocale
                                                            : e(l))(r, "name")
                                                        ),
                                                        1
                                                      )),
                                                ]),
                                                default: i(() => [
                                                  n(
                                                    _,
                                                    {
                                                      "overlay-inner-style": {
                                                        color:
                                                          "#333333 !important",
                                                      },
                                                      title: ("isTruncate" in o
                                                        ? o.isTruncate
                                                        : e(q))(e(g)[w])
                                                        ? ("getFieldWithLocale" in
                                                            o
                                                            ? o.getFieldWithLocale
                                                            : e(l))(r, "name")
                                                        : "",
                                                      placement: "rightTop",
                                                    },
                                                    {
                                                      default: i(() => [
                                                        r.majors.length
                                                          ? (C(),
                                                            T(
                                                              u,
                                                              {
                                                                key: 1,
                                                                to: o.localePath(
                                                                  {
                                                                    path: "/educational-program",
                                                                    query: {
                                                                      program:
                                                                        r.alias,
                                                                    },
                                                                  }
                                                                ),
                                                              },
                                                              {
                                                                default: i(
                                                                  () => [
                                                                    t(
                                                                      "h3",
                                                                      {
                                                                        ref_for:
                                                                          !0,
                                                                        ref: (
                                                                          $
                                                                        ) =>
                                                                          (e(g)[
                                                                            w
                                                                          ] = $),
                                                                        class:
                                                                          "education-program__item__title",
                                                                      },
                                                                      h(
                                                                        ("getFieldWithLocale" in
                                                                          o
                                                                          ? o.getFieldWithLocale
                                                                          : e(
                                                                              l
                                                                            ))(
                                                                          r,
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
                                                              ["to"]
                                                            ))
                                                          : (C(),
                                                            p(
                                                              "h3",
                                                              {
                                                                key: 0,
                                                                ref_for: !0,
                                                                ref: ($) =>
                                                                  (e(g)[w] = $),
                                                                class:
                                                                  "education-program__item__title",
                                                              },
                                                              h(
                                                                ("getFieldWithLocale" in
                                                                  o
                                                                  ? o.getFieldWithLocale
                                                                  : e(l))(
                                                                  r,
                                                                  "name"
                                                                )
                                                              ),
                                                              513
                                                            )),
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
                                            (L = r.majors) != null && L.length
                                              ? (C(),
                                                p("ul", o4, [
                                                  (C(!0),
                                                  p(
                                                    I,
                                                    null,
                                                    B(
                                                      r.majors,
                                                      ($, k) => (
                                                        C(),
                                                        p("li", { key: k }, [
                                                          n(
                                                            u,
                                                            {
                                                              to: o.localePath({
                                                                path: `/educational-program/${$.alias}`,
                                                                query: {
                                                                  program:
                                                                    r.alias,
                                                                },
                                                              }),
                                                            },
                                                            {
                                                              default: i(() => [
                                                                R(
                                                                  h(
                                                                    ("getFieldWithLocale" in
                                                                      o
                                                                      ? o.getFieldWithLocale
                                                                      : e(l))(
                                                                      $,
                                                                      "name"
                                                                    )
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
                                              : X("", !0),
                                          ]),
                                        ],
                                        2
                                      ),
                                    ];
                                  }),
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
                    ["modules"]
                  ),
                ]),
              ]),
            ]),
          ],
          !0
        );
      };
    },
  });
const N5 = N(n4, [["__scopeId", "data-v-c935f245"]]),
  s4 = {},
  i4 = { class: "bg-light-blue" };
function l4(m, c) {
  const s = M6;
  return J(m.$slots, "default", {}, () => [t("div", i4, [n(s)])]);
}
const j5 = N(s4, [["render", l4]]),
  c4 = { key: 0, class: "student-experience__wrapper pb-10 lg:pb-20" },
  r4 = { class: "container" },
  C4 = { class: "capitalize" },
  _4 = { class: "student-experience__list-news" },
  d4 = { class: "student-experience__list-news__item relative" },
  p4 = { class: "student-experience__list-news__item__image w-full h-full" },
  h4 = {
    class:
      "student-experience__list-news__item__content bottom-0 left-0 z-10 absolute",
  },
  u4 = { class: "title mb-0 cursor-default" },
  m4 = { class: "description-wrapper" },
  g4 = { class: "description mt-1 cursor-default" },
  f4 = { class: "read-more-btn mt-1 flex !gap-2 cursor-pointer w-fit" },
  n6 = 10,
  v4 = z({
    __name: "StudentExperience",
    async setup(m) {
      let c, s;
      const {
          activeArticleListWithCursor: H,
          paginationDataWithCursor: d,
          getActiveArticleListWithCursor: g,
        } = F6(),
        { transformKeyTranslateLanguage: o } = e6(),
        { facultyCode: V } = c6(),
        { fetchCursorPaginationArticles: y, cursorVariables: f } = g(
          {
            categoryIds: [
              `${V.value.toLowerCase()}-partner`,
              `${V.value.toLowerCase()}-activity`,
              `${V.value.toLowerCase()}-recruitment`,
            ],
          },
          { take: n6, after: "" }
        );
      ([c, s] = K(async () =>
        D(async () => {
          await y();
        }, "$qMDe93suMx")
      )),
        await c,
        s();
      const u = (_) => {
        var M, a;
        _.isEnd &&
          (M = d == null ? void 0 : d.value) != null &&
          M.hasNextPage &&
          (f.value = {
            ...f.value,
            pagination: {
              take: n6,
              after:
                (a = d == null ? void 0 : d.value) == null
                  ? void 0
                  : a.endCursor,
            },
          });
      };
      return (_, M) => {
        const a = Q,
          v = x,
          r = O,
          w = b6,
          F = j,
          W = Y,
          Z = G;
        return e(H).length
          ? (C(),
            p("div", c4, [
              t("div", r4, [
                n(
                  a,
                  { class: "py-14 lg:py-32" },
                  {
                    default: i(() => [
                      t(
                        "span",
                        C4,
                        h(_.$t(e(o)("student_experience", "title"))),
                        1
                      ),
                    ]),
                    _: 1,
                  }
                ),
                t("div", _4, [
                  n(
                    Z,
                    {
                      class: "w-full !pb-14 lg:!pb-16",
                      "slides-per-view": 1.2,
                      "resize-observer": "",
                      "space-between": 12,
                      pagination: { clickable: !0 },
                      breakpoints: {
                        992: { slidesPerView: 3, spaceBetween: 22 },
                        768: { slidesPerView: 2, spaceBetween: 15 },
                        576: { slidesPerView: 1.7, spaceBetween: 15 },
                      },
                      modules: [
                        "SwiperPagination" in _ ? _.SwiperPagination : e(C6),
                      ],
                      onSlideChange: u,
                    },
                    {
                      default: i(() => [
                        (C(!0),
                        p(
                          I,
                          null,
                          B(
                            e(H),
                            (L, $) => (
                              C(),
                              T(
                                W,
                                {
                                  key: $,
                                  pagination: { clickable: !0 },
                                  class: "!h-auto",
                                },
                                {
                                  default: i(() => {
                                    var k, E;
                                    return [
                                      t("div", d4, [
                                        t("div", p4, [
                                          n(
                                            v,
                                            {
                                              class:
                                                "w-full h-full object-cover",
                                              src:
                                                (k = (
                                                  "getFieldWithLocale" in _
                                                    ? _.getFieldWithLocale
                                                    : e(l)
                                                )(L, "pictureThumbnail")) ==
                                                null
                                                  ? void 0
                                                  : k.url,
                                              alt:
                                                (E = (
                                                  "getFieldWithLocale" in _
                                                    ? _.getFieldWithLocale
                                                    : e(l)
                                                )(L, "pictureThumbnail")) ==
                                                null
                                                  ? void 0
                                                  : E.alt,
                                              loading: "lazy",
                                              sizes: "sm:90vw md:50vw",
                                            },
                                            null,
                                            8,
                                            ["src", "alt"]
                                          ),
                                        ]),
                                        t("div", h4, [
                                          t(
                                            "h3",
                                            u4,
                                            h(
                                              ("getFieldWithLocale" in _
                                                ? _.getFieldWithLocale
                                                : e(l))(L, "headline")
                                            ),
                                            1
                                          ),
                                          t("div", m4, [
                                            t("div", g4, [
                                              n(
                                                r,
                                                {
                                                  content:
                                                    ("getFieldWithLocale" in _
                                                      ? _.getFieldWithLocale
                                                      : e(l))(
                                                      L,
                                                      "description"
                                                    ) || "",
                                                },
                                                null,
                                                8,
                                                ["content"]
                                              ),
                                            ]),
                                            t("div", f4, [
                                              n(
                                                F,
                                                {
                                                  to: _.localePath(
                                                    `/news-event/${
                                                      L.type === e(Z6).NEWS
                                                        ? "news"
                                                        : "event"
                                                    }/${L.alias}`
                                                  ),
                                                },
                                                {
                                                  default: i(() => [
                                                    R(
                                                      h(
                                                        _.$t("common.read_more")
                                                      ) + " ",
                                                      1
                                                    ),
                                                    n(w),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["to"]
                                              ),
                                            ]),
                                          ]),
                                        ]),
                                      ]),
                                    ];
                                  }),
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
                    ["modules"]
                  ),
                ]),
              ]),
            ]))
          : X("", !0);
      };
    },
  });
const z5 = N(v4, [["__scopeId", "data-v-2994ac21"]]),
  H4 = {
    viewBox: "0 0 80 60",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
  },
  w4 = t(
    "path",
    {
      opacity: "0.2",
      d: "M79.5561 0.320312L62.7684 36.5453L61.2995 26.7604C64.5171 26.7604 67.385 27.5237 69.9032 29.0505C72.4213 30.5772 74.4498 32.5897 75.9887 35.088C77.5275 37.4474 78.297 40.1539 78.297 43.2073C78.297 46.2608 77.5275 49.0366 75.9887 51.5349C74.4498 54.0332 72.4213 56.0457 69.9032 57.5724C67.385 58.9603 64.5171 59.6543 61.2995 59.6543C58.2217 59.6543 55.3538 58.9603 52.6958 57.5724C50.1776 56.0457 48.1491 53.9638 46.6102 51.3267C45.0714 48.6897 44.3019 45.775 44.3019 42.5828C44.3019 39.3905 44.9315 36.0595 46.1905 32.5897C47.5895 29.1199 50.0377 24.6091 53.5351 19.0574L64.8668 0.320312H79.5561ZM35.6982 0.320312L18.9105 36.5453L17.4416 26.7604C20.6593 26.7604 23.5272 27.5237 26.0453 29.0505C28.5635 30.5772 30.592 32.5897 32.1309 35.088C33.6697 37.4474 34.4392 40.1539 34.4392 43.2073C34.4392 46.2608 33.6697 49.0366 32.1309 51.5349C30.592 54.0332 28.5635 56.0457 26.0453 57.5724C23.5272 58.9603 20.6593 59.6543 17.4416 59.6543C14.3639 59.6543 11.496 58.9603 8.83794 57.5724C6.31978 56.0457 4.29127 53.9638 2.7524 51.3267C1.21353 48.6897 0.444092 45.775 0.444092 42.5828C0.444092 39.3905 1.07363 36.0595 2.33271 32.5897C3.73168 29.1199 6.17989 24.6091 9.67732 19.0574L21.009 0.320312H35.6982Z",
      fill: "#1B2C65",
    },
    null,
    -1
  ),
  L4 = [w4];
function V4(m, c) {
  return C(), p("svg", H4, L4);
}
const s6 = { render: V4 },
  $4 = { key: 0, class: "alumni__main-section bg-light-blue" },
  y4 = {
    class: "container relative pb-7 lg:pb-32",
    style: { "z-index": "10" },
  },
  M4 = { class: "alumni__header flex justify-between items-center" },
  F4 = { class: "capitalize" },
  Z4 = { class: "uppercase" },
  b4 = { key: 0, class: "content-wrapper relative" },
  W4 = { class: "content !gap-5 lg:!gap-20" },
  T4 = { class: "quote-avatar-wrapper" },
  k4 = { class: "quotes-content-wrapper" },
  S4 = { class: "flex-1", style: { "min-width": "0" } },
  P4 = { class: "quote-item-content lg:!text-center" },
  A4 = { class: "quote-author" },
  I4 = { class: "flex" },
  B4 = ["innerHTML"],
  N4 = ["innerHTML"],
  j4 = { class: "quote-content" },
  z4 = { class: "navigation-btn-wrapper mt-4 lg:mt-5" },
  E4 = {
    id: "prevBtn",
    class: "quote-navigation-btn select-none cursor-pointer",
  },
  R4 = {
    id: "nextBtn",
    class: "quote-navigation-btn select-none cursor-pointer",
  },
  Q4 = { class: "uppercase" },
  q4 = z({
    __name: "Alumni",
    async setup(m) {
      let c, s;
      const H = A(0),
        d = A(null),
        g = A(null),
        o = A([]),
        V = A([]),
        { getListQuote: y, listQuote: f } = W6(),
        { transformKeyTranslateLanguage: u } = e6();
      ([c, s] = K(async () =>
        D(async () => {
          var a;
          (m6.value || !((a = f.value) != null && a.length)) && (await y());
        }, "$yekwIlZS0l")
      )),
        await c,
        s(),
        w6(H, (a) => {
          var v, r, w, F, W, Z;
          (w =
            (r = (v = d.value) == null ? void 0 : v.$el) == null
              ? void 0
              : r.swiper) == null || w.slideTo(a),
            (Z =
              (W = (F = g.value) == null ? void 0 : F.$el) == null
                ? void 0
                : W.swiper) == null || Z.slideTo(a);
        });
      const _ = () => {
          var a, v, r;
          H.value =
            (r =
              (v =
                (a = g == null ? void 0 : g.value) == null ? void 0 : a.$el) ==
              null
                ? void 0
                : v.swiper) == null
              ? void 0
              : r.activeIndex;
        },
        M = () => {
          var a, v, r;
          H.value =
            (r =
              (v =
                (a = d == null ? void 0 : d.value) == null ? void 0 : a.$el) ==
              null
                ? void 0
                : v.swiper) == null
              ? void 0
              : r.activeIndex;
        };
      return (a, v) => {
        const r = Q,
          w = l6,
          F = j,
          W = x,
          Z = Y,
          L = G,
          $ = d6,
          k = _6,
          E = O,
          h6 = g6;
        return e(f).length
          ? (C(),
            p("div", $4, [
              t("div", y4, [
                t("div", M4, [
                  n(
                    r,
                    { class: "py-14 lg:py-32" },
                    {
                      default: i(() => [
                        t("span", F4, h(a.$t(e(u)("alumni", "title"))), 1),
                      ]),
                      _: 1,
                    }
                  ),
                  n(
                    F,
                    {
                      to: a.localePath("/alumni"),
                      class: "hidden lg:inline-block",
                    },
                    {
                      default: i(() => [
                        n(
                          w,
                          { type: "primary", arrow: "" },
                          {
                            default: i(() => [
                              t("span", Z4, h(a.$t("common.read_more")), 1),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["to"]
                  ),
                ]),
                e(f).length
                  ? (C(),
                    p("div", b4, [
                      n(e(s6), {
                        class:
                          "!hidden lg:!block absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-28",
                      }),
                      t("div", W4, [
                        t("div", T4, [
                          n(
                            L,
                            {
                              ref_key: "avatarSwiper",
                              ref: g,
                              class: "h-full",
                              "slides-per-view": "1",
                              "resize-observer": "",
                              "space-between": "100",
                              onSlideChange: _,
                            },
                            {
                              default: i(() => [
                                (C(!0),
                                p(
                                  I,
                                  null,
                                  B(
                                    e(f),
                                    (b, S) => (
                                      C(),
                                      T(
                                        Z,
                                        { key: `avatar-${S}` },
                                        {
                                          default: i(() => {
                                            var P, t6;
                                            return [
                                              n(
                                                W,
                                                {
                                                  src:
                                                    (P = (
                                                      "getFieldWithLocale" in a
                                                        ? a.getFieldWithLocale
                                                        : e(l)
                                                    )(b, "pictureQuoute")) ==
                                                    null
                                                      ? void 0
                                                      : P.url,
                                                  alt:
                                                    (t6 = (
                                                      "getFieldWithLocale" in a
                                                        ? a.getFieldWithLocale
                                                        : e(l)
                                                    )(b, "pictureQuoute")) ==
                                                    null
                                                      ? void 0
                                                      : t6.alt,
                                                  class:
                                                    "inline-block w-full h-full",
                                                  loading: "lazy",
                                                  sizes: "sm:90vw md:70vw",
                                                },
                                                null,
                                                8,
                                                ["src", "alt"]
                                              ),
                                            ];
                                          }),
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
                            512
                          ),
                        ]),
                        t("div", k4, [
                          t("div", S4, [
                            n(e(s6), { class: "w-20 !mb-4 block lg:hidden" }),
                            n(
                              L,
                              {
                                ref_key: "swiper",
                                ref: d,
                                modules: [
                                  "SwiperNavigation" in a
                                    ? a.SwiperNavigation
                                    : e(L6),
                                  "SwiperAutoplay" in a
                                    ? a.SwiperAutoplay
                                    : e(V6),
                                ],
                                "slides-per-view": "1",
                                "space-between": "100",
                                "resize-observer": "",
                                navigation: {
                                  nextEl: "#nextBtn",
                                  prevEl: "#prevBtn",
                                },
                                autoplay: {
                                  delay: 2500,
                                  pauseOnMouseEnter: !0,
                                },
                                onSlideChange: M,
                              },
                              {
                                default: i(() => [
                                  (C(!0),
                                  p(
                                    I,
                                    null,
                                    B(
                                      e(f),
                                      (b, S) => (
                                        C(),
                                        T(
                                          Z,
                                          { key: S },
                                          {
                                            default: i(() => [
                                              t("div", P4, [
                                                n(
                                                  k,
                                                  null,
                                                  {
                                                    fallback: i(() => [
                                                      t(
                                                        "p",
                                                        A4,
                                                        h(
                                                          ("getFieldWithLocale" in
                                                            a
                                                            ? a.getFieldWithLocale
                                                            : e(l))(b, "name")
                                                        ),
                                                        1
                                                      ),
                                                    ]),
                                                    default: i(() => [
                                                      n(
                                                        $,
                                                        {
                                                          title:
                                                            ("isTruncate" in a
                                                              ? a.isTruncate
                                                              : e(q))(e(V)[S])
                                                              ? ("getFieldWithLocale" in
                                                                  a
                                                                  ? a.getFieldWithLocale
                                                                  : e(l))(
                                                                  b,
                                                                  "name"
                                                                )
                                                              : "",
                                                          placement: "rightTop",
                                                        },
                                                        {
                                                          default: i(() => [
                                                            t(
                                                              "p",
                                                              {
                                                                ref_for: !0,
                                                                ref: (P) => {
                                                                  e(V)[S] = P;
                                                                },
                                                                class:
                                                                  "quote-author",
                                                              },
                                                              h(
                                                                ("getFieldWithLocale" in
                                                                  a
                                                                  ? a.getFieldWithLocale
                                                                  : e(l))(
                                                                  b,
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
                                                t("div", I4, [
                                                  n(
                                                    k,
                                                    null,
                                                    {
                                                      fallback: i(() => [
                                                        t(
                                                          "div",
                                                          {
                                                            class:
                                                              "author-position",
                                                            innerHTML:
                                                              ("getFieldWithLocale" in
                                                                a
                                                                ? a.getFieldWithLocale
                                                                : e(l))(
                                                                b,
                                                                "title"
                                                              ),
                                                          },
                                                          null,
                                                          8,
                                                          N4
                                                        ),
                                                      ]),
                                                      default: i(() => [
                                                        n(
                                                          $,
                                                          {
                                                            title:
                                                              ("isTruncate" in a
                                                                ? a.isTruncate
                                                                : e(q))(e(o)[S])
                                                                ? ("getFieldWithLocale" in
                                                                    a
                                                                    ? a.getFieldWithLocale
                                                                    : e(l))(
                                                                    b,
                                                                    "title"
                                                                  )
                                                                : "",
                                                            placement:
                                                              "rightTop",
                                                          },
                                                          {
                                                            default: i(() => [
                                                              t(
                                                                "div",
                                                                {
                                                                  ref_for: !0,
                                                                  ref: (P) => {
                                                                    e(o)[S] = P;
                                                                  },
                                                                  class:
                                                                    "author-position",
                                                                  innerHTML:
                                                                    ("getFieldWithLocale" in
                                                                      a
                                                                      ? a.getFieldWithLocale
                                                                      : e(l))(
                                                                      b,
                                                                      "title"
                                                                    ),
                                                                },
                                                                null,
                                                                8,
                                                                B4
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
                                                t("div", j4, [
                                                  n(
                                                    E,
                                                    {
                                                      content:
                                                        ("getFieldWithLocale" in
                                                          a
                                                          ? a.getFieldWithLocale
                                                          : e(l))(
                                                          b,
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
                              ["modules"]
                            ),
                            t("div", z4, [
                              t("div", E4, [n(e(o6), { class: "arrow-icon" })]),
                              t("div", R4, [n(e(o6), { class: "arrow-icon" })]),
                            ]),
                          ]),
                        ]),
                        n(
                          F,
                          {
                            to: a.localePath("/alumni"),
                            class: "block lg:hidden !py-5",
                          },
                          {
                            default: i(() => [
                              n(
                                w,
                                { type: "primary", arrow: "" },
                                {
                                  default: i(() => [
                                    t(
                                      "span",
                                      Q4,
                                      h(a.$t("common.read_more")),
                                      1
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ),
                      ]),
                    ]))
                  : (C(), T(h6, { key: 1 })),
              ]),
            ]))
          : X("", !0);
      };
    },
  });
const E5 = N(q4, [["__scopeId", "data-v-5178a6bf"]]),
  O4 = {
    viewBox: "0 0 72 76",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
  },
  D4 = U(
    '<path d="M66.9433 52.8998H4.51383C2.02182 52.8998 0 50.6564 0 47.8913C0 46.574 0.47019 45.3871 1.30478 44.3306C2.13937 43.4045 3.3266 42.8828 4.51383 42.8828H5.93615C6.77074 42.8828 7.48778 43.6784 7.48778 44.6045C7.48778 45.5305 6.77074 46.3131 5.93615 46.3131H4.38452C4.03188 46.3131 3.66748 46.4435 3.31484 46.8479C3.07975 47.1087 2.84465 47.513 2.84465 48.0348C2.84465 48.9608 3.56169 49.7564 4.38452 49.7564H66.814C67.1667 49.7564 67.5311 49.626 67.8837 49.2217C68.1188 48.9608 68.3539 48.5695 68.3539 48.0348C68.3539 47.1087 67.6369 46.3131 66.8023 46.3131H65.38C64.5454 46.3131 63.8401 45.5175 63.8401 44.6045C63.8401 43.6915 64.5571 42.8828 65.38 42.8828H66.9316C69.4236 42.8828 71.4454 45.1262 71.4454 47.8913C71.4454 49.2086 70.9752 50.3955 70.1406 51.452C69.306 52.5085 68.1188 52.8998 66.9316 52.8998H66.9433Z"></path><path d="M65.4037 46.3154H59.4558C58.6212 46.3154 57.9041 45.5197 57.9041 44.6067C57.9041 43.6937 58.6212 42.8851 59.4558 42.8851H63.9696V3.29986H7.48798V42.8851H46.1376C46.9722 42.8851 47.6892 43.6807 47.6892 44.6067C47.6892 45.5328 46.9722 46.3154 46.1376 46.3154H5.94811C5.11352 46.3154 4.39648 45.5197 4.39648 44.6067V1.70862C4.39648 0.782574 5.11352 0 5.94811 0H65.4037C66.2382 0 66.9553 0.795617 66.9553 1.70862V44.5937C66.9553 45.5197 66.2382 46.3023 65.4037 46.3023V46.3154Z"></path><path d="M20.806 76.0001C19.9714 76.0001 19.2661 75.2045 19.2661 74.2785C19.2661 70.5873 16.6448 67.6788 13.3182 67.6788C9.99162 67.6788 7.37031 70.5743 7.37031 74.2785C7.37031 75.2045 6.65327 76.0001 5.81868 76.0001C4.98409 76.0001 4.27881 75.2045 4.27881 74.2785C4.27881 68.8657 8.32244 64.3789 13.2007 64.3789C18.0789 64.3789 22.1225 68.8657 22.1225 74.2785C22.3576 75.2045 21.6406 76.0001 20.8177 76.0001H20.806Z"></path><path d="M13.4357 67.6799C10.1091 67.6799 7.48779 64.7713 7.48779 61.0802C7.48779 57.389 10.1091 54.4805 13.4357 54.4805C16.7623 54.4805 19.3836 57.389 19.3836 61.0802C19.3836 64.7713 16.6447 67.6799 13.4357 67.6799ZM13.4357 57.7803C11.7665 57.7803 10.4617 59.2281 10.4617 61.0802C10.4617 62.9323 11.7665 64.38 13.4357 64.38C15.1049 64.38 16.4097 62.9323 16.4097 61.0802C16.4097 59.2281 14.9873 57.7803 13.4357 57.7803Z"></path><path d="M35.6747 76.0001C34.8401 76.0001 34.1231 75.2045 34.1231 74.2785C34.1231 70.5873 31.5017 67.6788 28.1751 67.6788C24.8486 67.6788 22.2272 70.5743 22.2272 74.2785C22.2272 75.2045 21.5102 76.0001 20.6874 76.0001C19.8645 76.0001 19.1357 75.2045 19.1357 74.2785C19.1357 68.8657 23.1794 64.3789 28.0576 64.3789C32.9358 64.3789 36.9795 68.8657 36.9795 74.2785C37.2146 75.2045 36.5093 76.0001 35.6747 76.0001Z"></path><path d="M28.3053 67.6799C24.9787 67.6799 22.3574 64.7713 22.3574 61.0802C22.3574 57.389 24.9787 54.4805 28.3053 54.4805C31.6319 54.4805 34.2532 57.389 34.2532 61.0802C34.2532 64.7713 31.5144 67.6799 28.3053 67.6799ZM28.3053 57.7803C26.6362 57.7803 25.3314 59.2281 25.3314 61.0802C25.3314 62.9323 26.6362 64.38 28.3053 64.38C29.9745 64.38 31.2793 62.9323 31.2793 61.0802C31.2793 59.2281 29.857 57.7803 28.3053 57.7803Z"></path><path d="M50.5329 76.0001C49.6983 76.0001 48.9812 75.2045 48.9812 74.2785C48.9812 70.5873 46.3599 67.6788 43.0333 67.6788C39.7067 67.6788 37.0854 70.5743 37.0854 74.2785C37.0854 75.2045 36.3684 76.0001 35.5338 76.0001C34.6992 76.0001 33.9822 75.2045 33.9822 74.2785C33.9822 68.8657 38.0258 64.3789 42.904 64.3789C47.7823 64.3789 51.8259 68.8657 51.8259 74.2785C52.061 75.2045 51.3557 76.0001 50.5211 76.0001H50.5329Z"></path><path d="M43.163 67.6799C39.8364 67.6799 37.2151 64.7713 37.2151 61.0802C37.2151 57.389 39.8364 54.4805 43.163 54.4805C46.4896 54.4805 49.1109 57.389 49.1109 61.0802C49.1109 64.7713 46.372 67.6799 43.163 67.6799ZM43.163 57.7803C41.4938 57.7803 40.189 59.2281 40.189 61.0802C40.189 62.9323 41.4938 64.38 43.163 64.38C44.8322 64.38 46.1369 62.9323 46.1369 61.0802C46.1369 59.2281 44.7146 57.7803 43.163 57.7803Z"></path><path d="M65.4034 76.0001C64.5688 76.0001 63.8635 75.2045 63.8635 74.2785C63.8635 70.5873 61.2422 67.6788 57.9156 67.6788C54.589 67.6788 51.9677 70.5743 51.9677 74.2785C51.9677 75.2045 51.2507 76.0001 50.4161 76.0001C49.5815 76.0001 48.8762 75.2045 48.8762 74.2785C48.8762 68.8657 52.9199 64.3789 57.7981 64.3789C62.6763 64.3789 66.7199 68.8657 66.7199 74.2785C66.955 75.2045 66.238 76.0001 65.4152 76.0001H65.4034Z"></path><path d="M58.0326 67.6799C54.706 67.6799 52.0847 64.7713 52.0847 61.0802C52.0847 57.389 54.706 54.4805 58.0326 54.4805C61.3592 54.4805 63.9805 57.389 63.9805 61.0802C63.9805 64.7713 61.2417 67.6799 58.0326 67.6799ZM58.0326 57.7803C56.3634 57.7803 55.0587 59.2281 55.0587 61.0802C55.0587 62.9323 56.3634 64.38 58.0326 64.38C59.7018 64.38 61.0066 62.9323 61.0066 61.0802C61.0066 59.2281 59.5842 57.7803 58.0326 57.7803Z"></path><path d="M59.4552 46.3138H46.137C45.3025 46.3138 44.5972 45.5181 44.5972 44.6051V39.5967C44.5972 38.6706 45.3142 37.875 46.137 37.875H59.4552C60.2898 37.875 61.0068 38.6706 61.0068 39.5967V44.6051C61.0068 45.5312 60.2898 46.3138 59.4552 46.3138ZM47.5594 43.0139H58.0211V41.2922H47.5594V43.0139Z"></path><path d="M56.4818 10.0338H5.94811C5.11352 10.0338 4.39648 9.23818 4.39648 8.32518C4.39648 7.41218 5.11352 6.60352 5.94811 6.60352H56.4818C57.3164 6.60352 58.0334 7.39913 58.0334 8.32518C58.0334 9.25123 57.3164 10.0338 56.4818 10.0338Z"></path>',
    12
  ),
  J4 = [D4];
function K4(m, c) {
  return C(), p("svg", O4, J4);
}
const i6 = { render: K4 },
  X4 = {
    viewBox: "0 0 84 76",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Y4 = U(
    '<path d="M77.9759 75.9988H26.0422C25.0701 75.9988 24.2349 75.1826 24.2349 74.2326C24.2349 73.2826 25.0701 72.4664 26.0422 72.4664H77.9759C78.9481 72.4664 79.6327 71.7841 79.6327 70.8475V60.5581C79.6327 59.6081 78.9344 58.9391 77.9759 58.9391H69.2541C68.282 58.9391 67.4605 58.1229 67.4605 57.1729C67.4605 56.223 68.8434 56.2363 69.8155 56.2363H78.0307C80.7965 56.2363 83.1104 57.7215 83.1104 60.4243V70.7136C83.1104 73.8312 80.7554 75.9988 77.9896 75.9988H77.9759Z"></path><path d="M19.1141 75.9996H13.8564C11.0906 75.9996 8.7356 73.6983 8.7356 70.9955V60.7061C8.7356 58.5386 10.2554 56.6252 12.2818 55.9562C12.7747 55.7956 13.1307 56.2506 13.6784 56.2506C14.6505 56.2506 15.6637 56.5182 15.6637 57.4548C15.6637 58.1639 15.253 59.1139 14.5547 59.0738C12.3092 58.9266 12.1997 59.89 12.1997 60.8399V71.1293C12.1997 72.0793 12.898 72.7483 13.8564 72.7483H19.1141C20.0863 72.7483 20.9215 73.5645 20.9215 74.5011C20.7845 75.3173 19.9493 75.9863 19.1141 75.9863V75.9996Z"></path><path d="M26.0421 75.9991H19.114C18.1418 75.9991 17.3203 75.2097 17.3203 74.2864V57.9627C17.3203 57.0394 18.1555 56.25 19.114 56.25C20.0724 56.25 20.9213 57.0394 20.9213 57.9627V72.8414H24.3854V57.9627C24.3854 57.0394 25.2206 56.25 26.179 56.25C27.1375 56.25 27.9727 57.0394 27.9727 57.9627V74.4202C27.6988 75.3435 26.8636 75.9991 26.0284 75.9991H26.0421Z"></path><path d="M71.0478 75.9988C70.0757 75.9988 69.2542 75.1826 69.2542 74.2327V57.454C69.2542 56.504 70.0894 55.7012 71.0478 55.7012C72.0062 55.7012 72.8551 56.5174 72.8551 57.454V74.3665C72.7182 75.3165 71.883 75.9855 71.0478 75.9855V75.9988Z"></path><path d="M32.2048 54.0686C31.2327 54.0686 30.4111 53.2524 30.4111 52.3024V45.5321C30.4111 44.5821 31.2463 43.7793 32.2048 43.7793C33.1632 43.7793 34.0121 44.5955 34.0121 45.5321V52.3024C33.8752 53.2524 33.04 54.0686 32.2048 54.0686Z"></path><path d="M37.3257 54.0686C36.3535 54.0686 35.5183 53.2524 35.5183 52.3024V45.5321C35.5183 44.5821 36.3535 43.7793 37.3257 43.7793C38.2978 43.7793 39.1193 44.5955 39.1193 45.5321V52.3024C39.1193 53.2524 38.2841 54.0686 37.3257 54.0686Z"></path><path d="M42.5834 54.0686C41.6113 54.0686 40.7898 53.2524 40.7898 52.3024V45.5321C40.7898 44.5821 41.625 43.7793 42.5834 43.7793C43.5419 43.7793 44.3908 44.5955 44.3908 45.5321V52.3024C44.2539 53.2524 43.4187 54.0686 42.5834 54.0686Z"></path><path d="M77.9758 42.4283H69.254C68.2819 42.4283 67.4604 41.6121 67.4604 40.6621C67.4604 39.7121 68.2956 38.8959 69.254 38.8959H77.9758C78.9479 38.8959 79.6325 38.2135 79.6325 37.2769V26.9876C79.6325 26.0376 78.9342 25.3686 77.9758 25.3686H17.8269C16.8547 25.3686 16.0195 24.5524 16.0195 23.6158C16.0195 22.6792 16.8547 21.8496 17.8269 21.8496H77.9758C80.7416 21.8496 83.0966 24.151 83.0966 26.8538V37.1431C83.0966 40.2607 80.7416 42.4283 77.9758 42.4283Z"></path><path d="M13.8564 42.161C11.0906 42.161 8.7356 39.8596 8.7356 37.1568V26.8675C8.7356 24.1647 11.0906 21.8633 13.8564 21.8633H19.1141C20.0863 21.8633 20.9215 22.6795 20.9215 23.6161C20.9215 24.5527 20.0863 25.3689 19.1141 25.3689H13.8564C12.8843 25.3689 12.1997 26.0513 12.1997 26.9879V37.2772C12.1997 38.2272 12.898 38.8962 13.8564 38.8962C14.8148 38.8962 15.6501 39.7124 15.6501 40.6624C15.6501 41.6124 14.6779 42.1476 13.8564 42.1476V42.161Z"></path><path d="M26.0421 42.1609C25.0699 42.1609 24.2347 41.3448 24.2347 40.3948V25.2351H20.7707V40.5286C20.7707 41.4786 19.9354 42.2814 18.977 42.2814C18.0186 42.2814 17.1833 41.4652 17.1833 40.5286V23.6161C17.1833 22.6661 18.0186 21.8633 18.977 21.8633H25.9051C26.8773 21.8633 27.6988 22.6795 27.6988 23.6161V40.5286C27.6988 41.4786 26.8636 42.1476 26.0421 42.1476V42.1609Z"></path><path d="M71.0478 42.161C70.0757 42.161 69.2542 41.3448 69.2542 40.3948V23.6161C69.2542 22.6661 70.0894 21.8633 71.0478 21.8633C72.0062 21.8633 72.8551 22.6795 72.8551 23.6161V40.5286C72.7182 41.4786 71.883 42.1476 71.0478 42.1476V42.161Z"></path><path d="M79.1123 59.0731H5.12081C2.35502 59.0731 0 56.7717 0 54.0689V43.7796C0 41.0768 2.35502 38.7754 5.12081 38.7754H78.9617C79.9339 38.7754 80.7554 39.5916 80.7554 40.5416C80.7554 41.4916 79.9202 42.2944 78.9617 42.2944H5.12081C4.14867 42.2944 3.46407 42.9768 3.46407 43.9134V54.2027C3.46407 55.1527 4.16237 55.8217 5.12081 55.8217H78.9617C79.9339 55.8217 80.7554 56.6379 80.7554 57.5879C80.7554 58.4041 79.9202 59.0731 79.0986 59.0731H79.1123Z"></path><path d="M69.8018 58.9119H64.325C63.3529 58.9119 62.1343 58.6845 62.1343 57.7211C62.1343 56.7577 62.9695 55.9415 63.9553 55.9415H69.2541C70.2262 55.9415 70.9245 55.2591 70.9245 54.3092V43.9395C70.9245 42.9896 70.2262 42.3072 69.2541 42.3072H63.9553C62.9832 42.3072 62.1343 41.491 62.1343 40.5276C62.1343 39.5642 62.9695 38.748 63.9553 38.748H69.2541C72.0473 38.748 74.416 41.0628 74.416 43.7924V54.162C74.5529 57.2929 72.7319 58.8985 69.8018 58.8985V58.9119Z"></path><path d="M64.1334 59.0731H57.2053C56.2331 59.0731 55.4116 58.2569 55.4116 57.3203V40.5416C55.4116 39.5916 56.2468 38.7754 57.2053 38.7754H64.1334C65.1056 38.7754 65.9271 39.5916 65.9271 40.5416V57.4541C65.7902 58.404 64.9549 59.0731 64.1334 59.0731ZM58.8757 55.6879H62.3398V42.1472H58.8757V55.6879Z"></path><path d="M13.9719 59.0731C12.9998 59.0731 12.1646 58.2569 12.1646 57.3203V40.5416C12.1646 39.5916 12.9998 38.7754 13.9719 38.7754C14.944 38.7754 15.7655 39.5916 15.7655 40.5416V57.4541C15.6286 58.404 14.7934 59.0731 13.9719 59.0731Z"></path><path d="M46.5392 25.2349C45.9915 25.2349 45.4302 25.1011 44.5949 24.9673C44.3211 24.8335 43.8966 24.8335 43.6228 24.9673C42.7876 25.2349 42.103 25.2349 41.6785 25.2349C36.8316 25.2349 32.8198 17.1132 32.8198 11.6942C32.8198 9.66045 33.3675 8.04145 34.3396 6.69006C35.1748 5.60626 36.6947 4.38867 39.5974 4.38867C41.2541 4.38867 42.9245 5.07106 44.1705 6.00767C45.4165 4.92388 47.0732 4.38867 48.7436 4.38867C51.6463 4.38867 53.1798 5.60626 54.0013 6.69006C54.9735 7.90765 55.5211 9.67383 55.5211 11.6942C55.3842 17.1132 51.3725 25.2349 46.5118 25.2349H46.5392ZM41.7607 21.823C43.2805 21.5688 44.8277 21.5688 46.3338 21.823C46.4571 21.8498 46.5255 21.8498 46.5255 21.8498C47.2238 21.8498 48.6067 20.8998 49.8527 18.7322C51.0986 16.5646 51.9338 13.8618 51.9338 11.6942C51.9338 10.4766 51.66 9.52664 51.0986 8.85764C50.5646 8.20201 49.7705 7.93441 48.7162 7.90765C47.525 7.89427 46.1011 8.72384 45.5123 9.74073C45.2248 10.2358 44.6908 10.6104 44.0336 10.6104C43.3764 10.6104 42.8971 10.2759 42.5959 9.80763C41.9113 8.73722 40.8433 7.90765 39.5426 7.90765C38.2419 7.90765 37.393 8.16187 36.9685 8.85764C36.4208 9.54002 36.1333 10.4766 36.1333 11.6942C36.1333 13.8618 36.9685 16.4308 38.2145 18.7322C39.4604 20.8998 40.8433 21.8498 41.5416 21.8498C41.569 21.8498 41.6375 21.8498 41.7607 21.823Z"></path><path d="M44.0472 10.6238C43.212 10.6238 42.3904 9.94138 42.3904 9.13857C42.2535 7.65338 41.8428 2.63583 43.4995 0.615428C44.0472 -0.0669587 45.1562 -0.20076 45.9914 0.347825C46.6897 0.883031 46.8267 1.96682 46.2653 2.78301C45.7176 3.31822 45.567 6.30199 45.8545 8.87097C45.9914 9.82096 45.3068 10.6238 44.3347 10.771C44.1978 10.6372 44.0609 10.6371 44.0609 10.6371L44.0472 10.6238Z"></path>',
    17
  ),
  G4 = [Y4];
function U4(m, c) {
  return C(), p("svg", X4, G4);
}
const x4 = { render: U4 },
  e5 = {
    viewBox: "0 0 65 76",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
  },
  t5 = U(
    '<path d="M41.7203 55.2036H63.3185C64.1849 55.2036 64.9293 54.3734 64.9293 53.4071V13.9098C64.9293 12.9435 64.1849 12.1133 63.3185 12.1133H44.8075C43.9411 12.1133 43.1968 12.9435 43.1968 13.9098C43.1968 14.8762 43.9411 15.5567 44.8075 15.5567H61.72V51.7602H41.5983C40.7319 51.7602 39.9875 52.5904 39.9875 53.5568C39.9875 54.5231 40.8539 55.2036 41.7203 55.2036Z"></path><path d="M21.5968 55.351H23.1953C24.0617 55.351 24.806 54.5208 24.806 53.5544C24.806 52.5881 24.0617 51.7715 23.1953 51.7715H21.5968C20.7304 51.7715 19.9861 52.6017 19.9861 53.5544C19.9861 54.5208 20.7304 55.351 21.5968 55.351Z"></path><path d="M1.59851 55.205H62.6837C63.5501 55.205 64.2822 54.3747 64.2822 53.4084C64.2822 52.4421 63.5379 51.6255 62.6837 51.6255H3.08721V15.558H20.1218C20.9881 15.558 21.7203 14.7278 21.7203 13.7615C21.7203 12.7951 20.9759 11.9785 20.1218 11.9785H1.59851C0.744346 11.9785 0 12.8087 0 13.7751V53.422C0 54.3884 0.744346 55.2186 1.59851 55.2186V55.205Z"></path><path d="M20.1217 15.5561H44.8071C45.6735 15.5561 46.4056 14.7259 46.4056 13.7596V6.87274C46.4056 5.9064 45.6613 5.07617 44.8071 5.07617H35.5455C34.6791 5.07617 33.9348 5.9064 33.9348 6.87274C33.9348 7.83907 34.6791 8.65569 35.5455 8.65569H43.3184V12.0991H21.7202V8.65569H29.4931C30.3595 8.65569 31.1038 7.82546 31.1038 6.87274C31.1038 5.9064 30.3595 5.07617 29.4931 5.07617H20.2315C19.3651 5.07617 18.633 5.9064 18.633 6.87274V13.7596C18.511 14.7259 19.2431 15.5561 20.1095 15.5561H20.1217Z"></path><path d="M27.7717 7.02294V1.78296C27.7717 0.816621 28.5161 0 29.3824 0H35.5569C36.4232 0 37.1554 0.830231 37.1554 1.78296V6.87323C37.1554 7.83956 36.411 8.65618 35.5569 8.65618H29.3824C28.5161 8.65618 27.7717 7.82595 27.7717 7.00933V7.02294ZM33.9461 3.44342H30.8589V5.23998H33.9461V3.44342Z"></path><path d="M35.5443 67.1928H40.6205C41.4869 67.1928 42.219 66.3626 42.219 65.4098C42.219 64.4435 41.4747 63.6133 40.6205 63.6133H35.5443C34.6779 63.6133 33.9336 64.4435 33.9336 65.4098C33.9336 66.3762 34.6779 67.2064 35.5443 67.2064V67.1928Z"></path><path d="M23.4281 67.1928H28.1626C29.029 67.1928 29.7611 66.3626 29.7611 65.4098C29.7611 64.4435 29.0167 63.6133 28.1626 63.6133H24.3066C23.4403 63.6133 22.6959 64.4435 22.6959 65.4098C22.6959 66.3762 22.5617 67.1928 23.4158 67.2064L23.4281 67.1928Z"></path><path d="M27.771 74.2013V53.5544C27.771 52.5881 28.5153 51.7715 29.3817 51.7715H35.5561C36.4225 51.7715 37.1546 52.6017 37.1546 53.5544V74.2013C37.1546 75.1677 36.4103 75.9979 35.5561 75.9979H29.3817C28.5153 75.9979 27.771 75.1677 27.771 74.2013ZM33.9454 55.3374H30.8582V72.5409H33.9454V55.3374Z"></path><path d="M10.9814 75.0335C10.7373 74.489 10.7373 73.7949 10.9814 73.2369L21.8415 52.59C22.0856 52.0456 22.7079 51.7598 23.196 51.7598H29.3704C29.9805 51.7598 30.4808 52.032 30.7249 52.59C30.9689 53.1344 30.9689 53.8285 30.7249 54.3866L19.8647 75.0335C19.6207 75.5779 18.9984 75.8637 18.5103 75.8637H12.3358C11.8355 75.8637 11.3474 75.4554 10.9814 75.0335ZM26.6615 55.2032H24.0745L15.0692 72.4067H17.6561L26.6615 55.2032Z"></path><path d="M44.9282 75.0335L34.068 54.3866C33.824 53.8421 33.824 53.148 34.068 52.59C34.3121 52.0456 34.9344 51.7598 35.4225 51.7598H41.5969C42.207 51.7598 42.7073 52.032 42.9514 52.59L53.8115 73.2369C54.0556 73.7813 54.0556 74.4754 53.8115 75.0335C53.5675 75.5779 52.9452 75.8637 52.4571 75.8637H46.2826C45.7823 75.8637 45.2943 75.4554 44.9282 75.0335ZM40.7306 55.2032H38.1436L47.149 72.4067H49.7359L40.7306 55.2032Z"></path><path d="M27.7718 46.5336H43.1957C44.062 46.5336 44.8064 45.7034 44.8064 44.737V27.6697C44.8064 26.7033 44.062 25.8867 43.1957 25.8867H32.0671C31.2007 25.8867 30.4564 26.7169 30.4564 27.6697C30.4564 28.636 31.2007 29.4662 32.0671 29.4662H41.707V43.2399H29.3582V34.5701C29.3582 33.6038 28.6138 32.7736 27.7474 32.7736C26.8811 32.7736 26.1367 33.6038 26.1367 34.5701V44.9004C26.2587 45.7306 26.8811 46.5472 27.7474 46.5472L27.7718 46.5336Z"></path><path d="M18.5093 34.5563V22.4431C18.5093 21.4768 19.2536 20.6602 20.12 20.6602H30.9801C31.8465 20.6602 32.5908 21.4904 32.5908 22.4431V34.4202C32.5908 35.3866 31.8465 36.2168 30.9801 36.2168H20.12C19.2536 36.2168 18.5093 35.3865 18.5093 34.5699V34.5563ZM29.3694 24.09H21.5965V32.7598H29.3694V24.09Z"></path>',
    12
  ),
  a5 = [t5];
function o5(m, c) {
  return C(), p("svg", e5, a5);
}
const n5 = { render: o5 },
  s5 = {
    width: "92",
    height: "76",
    viewBox: "0 0 92 76",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
  },
  i5 = t(
    "path",
    {
      d: "M49.1567 33.1637H65.4281C65.8408 33.1637 66.2366 32.9998 66.5284 32.708C66.8202 32.4162 66.9841 32.0204 66.9841 31.6077C66.9841 31.195 66.8202 30.7992 66.5284 30.5074C66.2366 30.2156 65.8408 30.0516 65.4281 30.0516H49.1567C48.744 30.0516 48.3482 30.2156 48.0564 30.5074C47.7646 30.7992 47.6006 31.195 47.6006 31.6077C47.6006 32.0204 47.7646 32.4162 48.0564 32.708C48.3482 32.9998 48.744 33.1637 49.1567 33.1637ZM49.0042 39.1607H67.521C67.9068 39.122 68.2646 38.9414 68.5247 38.6539C68.7849 38.3664 68.929 37.9924 68.929 37.6046C68.929 37.2169 68.7849 36.8429 68.5247 36.5554C68.2646 36.2678 67.9068 36.0872 67.521 36.0486H49.0042C48.6183 36.0872 48.2606 36.2678 48.0004 36.5554C47.7402 36.8429 47.5962 37.2169 47.5962 37.6046C47.5962 37.9924 47.7402 38.3664 48.0004 38.6539C48.2606 38.9414 48.6183 39.122 49.0042 39.1607ZM49.1567 45.1592H62.2787C62.6914 45.1592 63.0872 44.9952 63.379 44.7034C63.6708 44.4116 63.8347 44.0158 63.8347 43.6031C63.8347 43.1905 63.6708 42.7947 63.379 42.5029C63.0872 42.2111 62.6914 42.0471 62.2787 42.0471H49.1567C48.744 42.0471 48.3482 42.2111 48.0564 42.5029C47.7646 42.7947 47.6006 43.1905 47.6006 43.6031C47.6006 44.0158 47.7646 44.4116 48.0564 44.7034C48.3482 44.9952 48.744 45.1592 49.1567 45.1592ZM49.1567 27.1668H61.1755C61.5882 27.1668 61.9839 27.0028 62.2757 26.711C62.5676 26.4192 62.7315 26.0234 62.7315 25.6107C62.7315 25.198 62.5676 24.8023 62.2757 24.5104C61.9839 24.2186 61.5882 24.0547 61.1755 24.0547H49.1567C48.744 24.0547 48.3482 24.2186 48.0564 24.5104C47.7646 24.8023 47.6006 25.198 47.6006 25.6107C47.6006 26.0234 47.7646 26.4192 48.0564 26.711C48.3482 27.0028 48.744 27.1668 49.1567 27.1668Z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  l5 = t(
    "path",
    {
      d: "M18.5949 33.209H34.8664C35.2791 33.209 35.6749 33.0451 35.9667 32.7533C36.2585 32.4614 36.4224 32.0657 36.4224 31.653C36.4224 31.2403 36.2585 30.8445 35.9667 30.5527C35.6749 30.2609 35.2791 30.0969 34.8664 30.0969H18.5949C18.1822 30.0969 17.7865 30.2609 17.4946 30.5527C17.2028 30.8445 17.0389 31.2403 17.0389 31.653C17.0389 32.0657 17.2028 32.4614 17.4946 32.7533C17.7865 33.0451 18.1822 33.209 18.5949 33.209ZM18.4424 39.206H36.9593C37.3451 39.1673 37.7028 38.9867 37.963 38.6992C38.2232 38.4117 38.3673 38.0377 38.3673 37.6499C38.3673 37.2621 38.2232 36.8882 37.963 36.6007C37.7028 36.3131 37.3451 36.1325 36.9593 36.0939H18.4424C18.0566 36.1325 17.6989 36.3131 17.4387 36.6007C17.1785 36.8882 17.0344 37.2621 17.0344 37.6499C17.0344 38.0377 17.1785 38.4117 17.4387 38.6992C17.6989 38.9867 18.0566 39.1673 18.4424 39.206ZM18.5949 45.2045H31.717C32.1297 45.2045 32.5254 45.0405 32.8173 44.7487C33.1091 44.4569 33.273 44.0611 33.273 43.6484C33.273 43.2358 33.1091 42.84 32.8173 42.5482C32.5254 42.2563 32.1297 42.0924 31.717 42.0924H18.5949C18.1822 42.0924 17.7865 42.2563 17.4946 42.5482C17.2028 42.84 17.0389 43.2358 17.0389 43.6484C17.0389 44.0611 17.2028 44.4569 17.4946 44.7487C17.7865 45.0405 18.1822 45.2045 18.5949 45.2045ZM18.5949 27.212H30.6137C31.0264 27.212 31.4222 27.0481 31.714 26.7563C32.0058 26.4645 32.1698 26.0687 32.1698 25.656C32.1698 25.2433 32.0058 24.8475 31.714 24.5557C31.4222 24.2639 31.0264 24.1 30.6137 24.1H18.5949C18.1822 24.1 17.7865 24.2639 17.4946 24.5557C17.2028 24.8475 17.0389 25.2433 17.0389 25.656C17.0389 26.0687 17.2028 26.4645 17.4946 26.7563C17.7865 27.0481 18.1822 27.212 18.5949 27.212Z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  c5 = t(
    "path",
    {
      d: "M84.337 49.8423V28.1854C84.3282 26.6712 83.8753 25.1929 83.0344 23.9336C82.1936 22.6743 81.0018 21.6894 79.6066 21.1008V9.5597C79.6066 9.31814 79.5504 9.07989 79.4424 8.86383C79.3343 8.64776 79.1775 8.45982 78.9842 8.31488C77.8541 7.46312 76.662 6.69698 75.4178 6.02284C73.9672 5.21106 72.4453 4.53395 70.8711 3.99999C66.4642 2.47153 61.7583 2.00717 57.1376 2.64485C52.517 3.28253 48.1128 5.00416 44.2846 7.66912C39.159 4.14239 33.0581 2.30833 26.8374 2.42414C20.6168 2.53995 14.5883 4.59981 9.59753 8.31488C9.40427 8.45982 9.24742 8.64776 9.13939 8.86383C9.03136 9.07989 8.97511 9.31814 8.97511 9.5597V20.9188C7.46788 21.448 6.1612 22.4304 5.23412 23.7313C4.30705 25.0322 3.80495 26.588 3.79663 28.1854V64.0365C3.79869 66.0704 4.60757 68.0204 6.04576 69.4586C7.48395 70.8968 9.43397 71.7057 11.4679 71.7077H76.6657C78.1566 71.7054 79.6145 71.2689 80.8613 70.4515C82.1081 69.6341 83.0899 68.4712 83.6866 67.105C84.2085 67.5293 84.8354 67.8047 85.5009 67.9022C86.1665 67.9997 86.846 67.9157 87.4677 67.6589C87.9273 67.478 88.3465 67.2077 88.7009 66.8637C89.0554 66.5197 89.338 66.1088 89.5326 65.6547C89.7327 65.1922 89.8382 64.6942 89.843 64.1902C89.8479 63.6862 89.7518 63.1864 89.5606 62.7201L84.337 49.8423ZM12.0903 22.1325V10.3502C16.581 7.20138 21.9326 5.51212 27.4172 5.51212C32.9019 5.51212 38.2535 7.20138 42.7442 10.3502V62.4649C38.7215 60.0104 34.1682 58.5575 29.4673 58.2285C24.7664 57.8996 20.0552 58.704 15.7299 60.5743C14.4746 61.12 13.2586 61.7517 12.0903 62.4649V22.1325ZM38.5896 63.7984H16.2185C18.9124 62.5299 21.8019 61.7275 24.7642 61.4254C24.9198 61.4099 25.0754 61.3803 25.231 61.3679C25.5671 61.3399 25.9032 61.3383 26.2409 61.3243C26.5785 61.3103 26.9566 61.2792 27.3161 61.2776C27.4717 61.2776 27.6148 61.2916 27.7642 61.2947C31.5095 61.3512 35.1998 62.2047 38.5896 63.7984ZM42.8998 68.5957H11.4679C10.2591 68.5944 9.10016 68.1137 8.24542 67.2589C7.39067 66.4042 6.90994 65.2453 6.9087 64.0365V28.1854C6.91261 27.4276 7.10354 26.6823 7.46456 26.016C7.82558 25.3496 8.34551 24.7826 8.97823 24.3654V65.3902C8.97431 65.5894 9.00983 65.7874 9.08274 65.9728C9.15565 66.1583 9.26452 66.3274 9.40306 66.4706C9.54161 66.6138 9.70711 66.7281 9.89003 66.8071C10.073 66.8861 10.2697 66.9281 10.4689 66.9307C10.4907 66.9307 10.5109 66.9463 10.5343 66.9463C10.5576 66.9463 10.5732 66.9369 10.5934 66.9369C10.6708 66.9319 10.7477 66.9215 10.8237 66.9058H10.8486H42.9029L42.8998 68.5957ZM79.6066 24.7046C80.1114 25.1338 80.5173 25.6671 80.7967 26.2679C81.076 26.8687 81.2221 27.5229 81.2249 28.1854V42.1602L79.6066 38.1674V24.7046ZM45.8562 15.0323V10.3517C49.2973 7.91201 53.2714 6.32963 57.4477 5.73635C61.6239 5.14307 65.8815 5.55604 69.8659 6.9409C71.2718 7.41817 72.6308 8.02395 73.9255 8.75057C74.8144 9.23221 75.6738 9.76636 76.4992 10.3502V30.4977L68.0375 9.63751C67.7518 8.94286 67.2666 8.34847 66.6432 7.92944C66.0198 7.5104 65.2863 7.28552 64.5352 7.28319C63.784 7.28086 63.0491 7.50118 62.4231 7.91634C61.7972 8.3315 61.3083 8.92286 61.0182 9.61572C60.8251 10.0706 60.7241 10.5592 60.7212 11.0533C60.7182 11.5475 60.8134 12.0373 61.0011 12.4944L66.0147 24.8649C66.0271 24.9071 66.0416 24.9486 66.0582 24.9893L76.4946 50.7246V62.4649C75.9064 62.1091 75.3099 61.7745 74.7051 61.4612C74.3581 61.2823 74.0033 61.1267 73.6517 60.9617C73.3903 60.8388 73.132 60.705 72.8737 60.5914C72.4893 60.4249 72.0956 60.2802 71.7082 60.1246C71.4717 60.0328 71.2414 59.9301 70.9971 59.8461C70.577 59.6905 70.1506 59.5722 69.7258 59.4431C69.5126 59.3777 69.3026 59.3015 69.0894 59.2423C68.6599 59.1225 68.2273 59.026 67.7948 58.9311C67.58 58.8813 67.3669 58.8206 67.1506 58.7755C66.7304 58.6884 66.3056 58.6199 65.8824 58.5561C65.6521 58.5188 65.4156 58.469 65.1931 58.4379C64.7838 58.3818 64.3731 58.3492 63.9623 58.3103C63.7149 58.2854 63.4674 58.2511 63.22 58.234C62.8217 58.206 62.4233 58.2013 62.0234 58.1905C61.762 58.1905 61.5022 58.164 61.2454 58.164H61.191C60.7724 58.164 60.3538 58.1873 59.9337 58.206C59.7143 58.2153 59.4949 58.2138 59.277 58.2278C58.8351 58.2558 58.3948 58.3087 57.9544 58.3569C57.7412 58.3818 57.5265 58.3943 57.3118 58.4223C56.8776 58.4799 56.4451 58.5623 56.0125 58.6401C55.7946 58.679 55.5768 58.7055 55.3589 58.7491C54.931 58.8362 54.5062 58.9467 54.0799 59.0603C53.862 59.1147 53.6442 59.1567 53.4279 59.2159C52.9984 59.3341 52.5721 59.4757 52.1473 59.6127C51.9388 59.6796 51.7287 59.7356 51.5249 59.8072C51.1001 59.955 50.6815 60.1277 50.2629 60.2958C50.0591 60.3767 49.8521 60.4514 49.6499 60.5323C49.183 60.7346 48.7085 60.9617 48.2494 61.1889C48.1078 61.2589 47.9631 61.3165 47.8231 61.3881C47.2183 61.6993 46.6213 62.0292 46.0321 62.3777C46.0406 62.308 46.0406 62.2374 46.0321 62.1677V42.9615C46.0321 35.3432 45.9802 27.7238 45.8765 20.1034L45.8562 15.0323ZM70.2611 23.5998C70.2488 23.7249 70.2032 23.8445 70.1291 23.946C70.0549 24.0476 69.9549 24.1273 69.8394 24.1771C69.7569 24.2083 69.6693 24.2242 69.5811 24.2238C69.5358 24.2207 69.491 24.2129 69.4473 24.2004C69.3596 24.1938 69.2762 24.1595 69.2092 24.1024C69.1752 24.0841 69.1429 24.0627 69.1127 24.0386C69.0819 24.0068 69.0537 23.9725 69.0287 23.9359C68.9968 23.8972 68.9687 23.8555 68.9447 23.8114V23.8021L63.8829 11.318C63.8499 11.2392 63.833 11.1545 63.833 11.0691C63.833 10.9836 63.8499 10.899 63.8829 10.8201C63.935 10.6951 64.023 10.5884 64.1357 10.5133C64.2484 10.4382 64.3808 10.3981 64.5162 10.3981C64.6516 10.3981 64.784 10.4382 64.8967 10.5133C65.0094 10.5884 65.0974 10.6951 65.1495 10.8201L70.2066 23.2979C70.2323 23.3692 70.244 23.4448 70.2409 23.5204C70.2502 23.5485 70.2626 23.578 70.2611 23.5998ZM72.4053 63.8217H49.9486C53.4594 62.1632 57.2941 61.3031 61.177 61.3031C65.0598 61.3031 68.8945 62.1632 72.4053 63.8217ZM81.2249 64.0365C81.2237 65.2453 80.7429 66.4042 79.8882 67.2589C79.0334 68.1137 77.8745 68.5944 76.6657 68.5957H46.0118V66.9338H77.9681C77.9961 66.9338 78.0226 66.9463 78.0506 66.9463C78.4633 66.9463 78.8591 66.7823 79.1509 66.4905C79.4427 66.1987 79.6066 65.8029 79.6066 65.3902V58.4021L81.2249 62.3949V64.0365ZM86.671 64.4239C86.6385 64.502 86.5904 64.5726 86.5297 64.6315C86.4689 64.6903 86.3969 64.7362 86.3178 64.7663L86.2929 64.7756C86.2097 64.8108 86.1203 64.8289 86.0299 64.8289C85.9396 64.8289 85.8502 64.8108 85.767 64.7756C85.6858 64.7435 85.6119 64.6956 85.5494 64.6347C85.4869 64.5738 85.4371 64.5011 85.4029 64.4208L79.4899 49.8408L77.6865 45.3952L70.3327 27.2612C70.5607 27.215 70.7842 27.1484 71.0002 27.062H71.008C71.216 26.9761 71.4159 26.8719 71.6055 26.7508L86.671 63.8886C86.7067 63.9734 86.7251 64.0644 86.7251 64.1563C86.7251 64.2482 86.7067 64.3392 86.671 64.4239Z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  r5 = [i5, l5, c5];
function C5(m, c) {
  return C(), p("svg", s5, r5);
}
const _5 = { render: C5 },
  d5 = { class: "container py-14 lg:py-32" },
  p5 = {
    class: "scientific-research__header flex justify-between items-center",
  },
  h5 = {
    class:
      "scientific-research__content flex flex-col md:flex-row gap-4 md:gap-0 flex-wrap !mt-16",
  },
  u5 = {
    class:
      "w-1/4 md:w-auto md:h-20 lg:h-28 aspect-square icon flex justify-center items-center",
  },
  m5 = { class: "flex-1 flex items-center mb-0 md:mt-4" },
  g5 = { class: "title mb-0" },
  f5 = z({
    __name: "ScientificReseach",
    setup(m) {
      const { t: c } = f6(),
        { transformKeyTranslateLanguage: s } = e6(),
        { facultyCode: H } = c6(),
        d = a6(() => H.value === T6.IPIC),
        g = a6(() => {
          const o = [
            {
              title: c(
                `scientific_research.${s("faculty_research_topics_student")}`
              ),
              icon: d.value ? _5 : i6,
              path: d.value
                ? "scientific-research/student/research-topic"
                : "scientific-research/student",
            },
            {
              title: c("scientific_research.faculty_research_projects"),
              icon: n5,
              path: "scientific-research/teacher/research-project",
            },
            {
              title: c("scientific_research.faculty_research_topics"),
              icon: x4,
              path: "scientific-research/teacher/research-topic",
            },
          ];
          return (
            d.value &&
              o.unshift({
                title: c(
                  "scientific_research.faculty_research_projects_trainee"
                ),
                icon: i6,
                path: "scientific-research/student/research-project",
              }),
            o
          );
        });
      return (o, V) => {
        const y = Q,
          f = j;
        return (
          C(),
          p("div", d5, [
            t("div", p5, [
              n(y, null, {
                default: i(() => [R(h(o.$t("scientific_research.title")), 1)]),
                _: 1,
              }),
            ]),
            t("div", h5, [
              (C(!0),
              p(
                I,
                null,
                B(
                  e(g),
                  (u) => (
                    C(),
                    T(
                      f,
                      {
                        class: r6([
                          "scientific-research__content__item md:text-center gap-3 md:gap-0 flex-1 flex md:flex-col items-stretch md:items-center !px-[0.5%]",
                          [e(d) ? "lg:!px-[2%]" : "lg:!px-[5%]"],
                        ]),
                        to: o.localePath(`/${u.path}`),
                      },
                      {
                        default: i(() => [
                          t("div", u5, [(C(), T($6(u.icon)))]),
                          t("div", m5, [
                            t("p", g5, h(u == null ? void 0 : u.title), 1),
                          ]),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["class", "to"]
                    )
                  )
                ),
                256
              )),
            ]),
          ])
        );
      };
    },
  });
const R5 = N(f5, [["__scopeId", "data-v-eab9ffe1"]]);
export { B5 as _, N5 as a, j5 as b, z5 as c, E5 as d, R5 as e };
