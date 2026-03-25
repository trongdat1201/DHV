import { _ as ie } from "./NuxtImg.vue.916c2d60.js";
import { _ as le } from "./client-only.42178d49.js";
import {
  u as oe,
  a7 as ne,
  b_ as re,
  Y as ce,
  Q as Y,
  N as de,
  $ as me,
  J as _e,
  L as i,
  Z as J,
  T as ue,
  _ as he,
} from "./entry.8aa394d7.js";
import { u as ge } from "./transform-translate-faculty.c0e2ceae.js";
import { u as fe } from "./index.c079fb5a.js";
import { A as pe } from "./btn-arrow.5abf483c.js";
import { A as be } from "./AppBreadcrumb.73e131db.js";
import { S as ve } from "./index.010e93e7.js";
import {
  j as Le,
  a as O,
  al as Fe,
  V as ye,
  z as d,
  Y as s,
  X as l,
  u as t,
  Q as o,
  R as n,
  F as Q,
  a2 as Se,
  a0 as b,
  S as m,
  _ as v,
  ai as We,
  aj as Te,
} from "./swiper-vue.d5cda4d1.js";
import { _ as we } from "./index.a66880e0.js";
import "./IFaculty.97f6e59d.js";
import "./omitBy.06454d55.js";
import "./_baseIteratee.825e9cf8.js";
import "./_baseIsEqual.42871e3f.js";
import "./nuxt-link.58f89fff.js";
import "./breadcrumb.bc5fa9d7.js";
import "./Trigger.dd535606.js";
import "./isVisible.48fa23e0.js";
import "./PortalWrapper.438f60b2.js";
import "./motion.d46d0bbf.js";
import "./firstNotUndefined.29a740f3.js";
import "./zoom.4c1ddb0e.js";
const Ce =
    "" +
    globalThis.__publicAssetsURL(
      "assets/images/bg/student-research-topic-mobile.webp"
    ),
  ke =
    "" +
    globalThis.__publicAssetsURL(
      "assets/images/bg/student-research-topic.webp"
    ),
  X = (f) => (We("data-v-e13f31cf"), (f = f()), Te(), f),
  Re = {
    class:
      "block lg:hidden scientific-research__student-research-topic__banner",
  },
  Ae = X(() =>
    s(
      "img",
      { class: "banner-mobile", src: Ce, alt: "", loading: "lazy" },
      null,
      -1
    )
  ),
  Ee = { class: "section-title" },
  Ie = { class: "scientific-research__student-research-topic" },
  Ne = { class: "container" },
  De = {
    class:
      "hidden lg:block scientific-research__student-research-topic__banner mb-8 lg:mb-24 relative",
  },
  Pe = X(() =>
    s(
      "img",
      { class: "w-full inline-block aspect-[1140/352]", src: ke, alt: "" },
      null,
      -1
    )
  ),
  He = {
    class:
      "section-title w-[61%] xl:w-[53%] xxl:w-[58%] uppercase text-white absolute top-1/2 left-1/2 -translate-y-[110%] -translate-x-1/2 text-center",
  },
  $e = {
    class:
      "scientific-research__student-research-topic__list-student-topic flex flex-col gap-6 lg:gap-9 pb-16 xxl:pb-36",
  },
  Be = {
    class:
      "scientific-research__student-research-topic__list-student-topic__item flex flex-wrap !gap-6 lg:!gap-16",
  },
  ze = { class: "w-full lg:w-[38%]" },
  Me = { class: "thumbnail w-full flex justify-center items-center" },
  Ue = ["src", "alt"],
  je = { class: "content flex-1 flex items-start lg:items-center" },
  Ve = { class: "relative" },
  Ye = { class: "logo-bg hidden lg:block absolute -z-10" },
  Je = { class: "time-point font-bold" },
  Oe = { class: "topic-name font-bold" },
  Qe = { class: "flex my-4" },
  Xe = { class: "topic-field-title font-medium" },
  Ke = { class: "topic-author font-medium" },
  Ze = { class: "flex items-center" },
  qe = { class: "topic-field-title font-medium" },
  Ge = { key: 0, class: "topic-achievement font-bold" },
  xe = { key: 0, class: "topic-achievement font-bold" },
  et = { key: 0, class: "flex justify-center mt-3" },
  tt = { class: "hover:underline underline-offset-2" },
  at = Le({
    __name: "StudentResearchTopic",
    async setup(f) {
      let L, F;
      oe({
        link: [
          {
            rel: "preload",
            href: "/assets/images/bg/student-research-topic.webp",
            as: "image",
          },
          {
            rel: "preload",
            href: "/assets/images/bg/student-research-topic-mobile.webp",
            as: "image",
          },
          {
            rel: "preload",
            href: "/assets/images/bg/event-bg.webp",
            as: "image",
          },
        ],
      });
      const { informationManagementData: y } = ne(),
        { generalInformation: S } = re(),
        { transformKeyTranslateLanguage: K } = ge(),
        { getPageSectionByType: Z, getPageSectionItemCursorPaginated: q } =
          fe(),
        W = `scientific_research.${K("faculty_research_topics_student")}`,
        r = ce("studentResearch", () => null),
        T = O([]),
        w = O([]),
        {
          listPageSectionItem: C,
          loadingRef: G,
          pageSectionItemPagination: _,
          cursorVariables: x,
        } = q({
          pageType:
            Y.FACULTY_SCIENTIFIC_RESEARCH_STUDENT_SCIENCE_RESEARCH_PROJECT,
        });
      ([L, F] = Fe(async () =>
        de(async () => {
          var e;
          if (me.value || !r.value) {
            const u = await Z(
              Y.FACULTY_SCIENTIFIC_RESEARCH_STUDENT_SCIENCE_RESEARCH_PROJECT
            );
            u && (r.value = u == null ? void 0 : u[0]),
              _e(
                (e = r == null ? void 0 : r.value) == null ? void 0 : e.metadata
              );
          }
        }, "$XQmN0gn2AD")
      )),
        await L,
        F();
      const ee = async () => {
        var e;
        _.value.hasNextPage &&
          (x.value.pagination.after =
            (e = _ == null ? void 0 : _.value) == null ? void 0 : e.endCursor);
      };
      return (e, u) => {
        const k = ie,
          R = we,
          A = le,
          te = ve,
          ae = ue;
        return ye(
          e.$slots,
          "default",
          {},
          () => [
            d(be),
            s("div", Re, [Ae, s("h1", Ee, l(e.$t(W)), 1)]),
            s("div", Ie, [
              s("div", Ne, [
                s("div", De, [Pe, s("h2", He, l(e.$t(W)), 1)]),
                s("div", $e, [
                  t(C).length
                    ? (o(),
                      n(
                        Q,
                        { key: 0 },
                        [
                          (o(!0),
                          n(
                            Q,
                            null,
                            Se(t(C), (a, p) => {
                              var E, I, N, D, P, H, $, B, z, M, U, j;
                              return (
                                o(),
                                n("div", Be, [
                                  s("div", ze, [
                                    s("div", Me, [
                                      (E =
                                        a == null
                                          ? void 0
                                          : a.picturePageSectionItem) != null &&
                                      E.url
                                        ? (o(),
                                          b(
                                            k,
                                            {
                                              key: 0,
                                              class:
                                                "w-full h-full object-cover",
                                              src:
                                                (I = (
                                                  "getFieldWithLocale" in e
                                                    ? e.getFieldWithLocale
                                                    : t(i)
                                                )(
                                                  a,
                                                  "picturePageSectionItem"
                                                )) == null
                                                  ? void 0
                                                  : I.url,
                                              alt:
                                                (N = (
                                                  "getFieldWithLocale" in e
                                                    ? e.getFieldWithLocale
                                                    : t(i)
                                                )(
                                                  a,
                                                  "picturePageSectionItem"
                                                )) == null
                                                  ? void 0
                                                  : N.alt,
                                              sizes: "sm:90vw md:50vw",
                                            },
                                            null,
                                            8,
                                            ["src", "alt"]
                                          ))
                                        : (o(),
                                          n(
                                            "img",
                                            {
                                              key: 1,
                                              class:
                                                "no-image w-1/2 opacity-70",
                                              src:
                                                (P = (
                                                  "getFieldWithLocale" in e
                                                    ? e.getFieldWithLocale
                                                    : t(i)
                                                )(
                                                  (D = t(y)) == null
                                                    ? void 0
                                                    : D.informationManagement,
                                                  "pictureLogoHeader"
                                                )) == null
                                                  ? void 0
                                                  : P.url,
                                              alt:
                                                ($ = (
                                                  "getFieldWithLocale" in e
                                                    ? e.getFieldWithLocale
                                                    : t(i)
                                                )(
                                                  (H = t(y)) == null
                                                    ? void 0
                                                    : H.informationManagement,
                                                  "pictureLogoHeader"
                                                )) == null
                                                  ? void 0
                                                  : $.alt,
                                            },
                                            null,
                                            8,
                                            Ue
                                          )),
                                    ]),
                                  ]),
                                  s("div", je, [
                                    s("div", Ve, [
                                      s("div", Ye, [
                                        d(
                                          k,
                                          {
                                            class:
                                              "opacity-5 w-full inline-block aspect-[117/174]",
                                            src:
                                              (B = (
                                                "getFieldWithLocale" in e
                                                  ? e.getFieldWithLocale
                                                  : t(i)
                                              )(t(S), "pictureFacultyLogo")) ==
                                              null
                                                ? void 0
                                                : B.url,
                                            alt:
                                              (z = (
                                                "getFieldWithLocale" in e
                                                  ? e.getFieldWithLocale
                                                  : t(i)
                                              )(t(S), "pictureFacultyLogo")) ==
                                              null
                                                ? void 0
                                                : z.alt,
                                            sizes: "20vw",
                                          },
                                          null,
                                          8,
                                          ["src", "alt"]
                                        ),
                                      ]),
                                      s("div", Je, l(a.timePoint), 1),
                                      d(
                                        A,
                                        null,
                                        {
                                          fallback: m(() => [
                                            s(
                                              "div",
                                              Oe,
                                              l(
                                                ("getFieldWithLocale" in e
                                                  ? e.getFieldWithLocale
                                                  : t(i))(a, "name")
                                              ),
                                              1
                                            ),
                                          ]),
                                          default: m(() => [
                                            d(
                                              R,
                                              {
                                                title: ("isTruncate" in e
                                                  ? e.isTruncate
                                                  : t(J))(t(T)[p])
                                                  ? ("getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : t(i))(a, "name")
                                                  : "",
                                              },
                                              {
                                                default: m(() => [
                                                  s(
                                                    "div",
                                                    {
                                                      ref_for: !0,
                                                      ref: (c) => {
                                                        t(T)[p] = c;
                                                      },
                                                      class:
                                                        "topic-name font-bold",
                                                    },
                                                    l(
                                                      ("getFieldWithLocale" in e
                                                        ? e.getFieldWithLocale
                                                        : t(i))(a, "name")
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
                                      s("div", Qe, [
                                        s(
                                          "div",
                                          Xe,
                                          l(
                                            ("getFieldWithLocale" in e
                                              ? e.getFieldWithLocale
                                              : t(i))(
                                              (M = t(r)) == null
                                                ? void 0
                                                : M.tableSectionHeader,
                                              "author"
                                            )
                                          ) + ": ",
                                          1
                                        ),
                                        s(
                                          "div",
                                          Ke,
                                          l(
                                            ("getFieldWithLocale" in e
                                              ? e.getFieldWithLocale
                                              : t(i))(
                                              (U =
                                                a == null
                                                  ? void 0
                                                  : a.tableData) == null
                                                ? void 0
                                                : U[0],
                                              "author"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                      s("div", Ze, [
                                        s(
                                          "div",
                                          qe,
                                          l(
                                            ("getFieldWithLocale" in e
                                              ? e.getFieldWithLocale
                                              : t(i))(
                                              (j = t(r)) == null
                                                ? void 0
                                                : j.tableSectionHeader,
                                              "achievement"
                                            )
                                          ) + ": ",
                                          1
                                        ),
                                        d(
                                          A,
                                          null,
                                          {
                                            fallback: m(() => {
                                              var c, h, g;
                                              return [
                                                (h =
                                                  (c =
                                                    a == null
                                                      ? void 0
                                                      : a.tableData) == null
                                                    ? void 0
                                                    : c[0]) != null &&
                                                h.achievement
                                                  ? (o(),
                                                    n("div", xe, [
                                                      s(
                                                        "p",
                                                        null,
                                                        l(
                                                          ("getFieldWithLocale" in
                                                            e
                                                            ? e.getFieldWithLocale
                                                            : t(i))(
                                                            (g =
                                                              a == null
                                                                ? void 0
                                                                : a.tableData) ==
                                                              null
                                                              ? void 0
                                                              : g[0],
                                                            "achievement"
                                                          )
                                                        ),
                                                        1
                                                      ),
                                                    ]))
                                                  : v("", !0),
                                              ];
                                            }),
                                            default: m(() => {
                                              var c;
                                              return [
                                                d(
                                                  R,
                                                  {
                                                    title: ("isTruncate" in e
                                                      ? e.isTruncate
                                                      : t(J))(t(w)[p])
                                                      ? ("getFieldWithLocale" in
                                                          e
                                                          ? e.getFieldWithLocale
                                                          : t(i))(
                                                          (c =
                                                            a == null
                                                              ? void 0
                                                              : a.tableData) ==
                                                            null
                                                            ? void 0
                                                            : c[0],
                                                          "achievement"
                                                        )
                                                      : "",
                                                  },
                                                  {
                                                    default: m(() => {
                                                      var h, g, V;
                                                      return [
                                                        (g =
                                                          (h =
                                                            a == null
                                                              ? void 0
                                                              : a.tableData) ==
                                                          null
                                                            ? void 0
                                                            : h[0]) != null &&
                                                        g.achievement
                                                          ? (o(),
                                                            n("div", Ge, [
                                                              s(
                                                                "p",
                                                                {
                                                                  ref_for: !0,
                                                                  ref: (se) => {
                                                                    t(w)[p] =
                                                                      se;
                                                                  },
                                                                },
                                                                l(
                                                                  ("getFieldWithLocale" in
                                                                    e
                                                                    ? e.getFieldWithLocale
                                                                    : t(i))(
                                                                    (V =
                                                                      a == null
                                                                        ? void 0
                                                                        : a.tableData) ==
                                                                      null
                                                                      ? void 0
                                                                      : V[0],
                                                                    "achievement"
                                                                  )
                                                                ),
                                                                513
                                                              ),
                                                            ]))
                                                          : v("", !0),
                                                      ];
                                                    }),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ["title"]
                                                ),
                                              ];
                                            }),
                                            _: 2,
                                          },
                                          1024
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ])
                              );
                            }),
                            256
                          )),
                          t(_).hasNextPage
                            ? (o(),
                              n("div", et, [
                                t(G)
                                  ? (o(), b(te, { key: 1, size: "large" }))
                                  : (o(),
                                    n(
                                      "div",
                                      {
                                        key: 0,
                                        class:
                                          "read-more w-fit flex items-center gap-3 cursor-pointer",
                                        onClick: ee,
                                      },
                                      [
                                        s(
                                          "span",
                                          tt,
                                          l(e.$t("common.read_more")),
                                          1
                                        ),
                                        d(t(pe), { class: "rotate-90" }),
                                      ]
                                    )),
                              ]))
                            : v("", !0),
                        ],
                        64
                      ))
                    : (o(), b(ae, { key: 1, class: "py-40" })),
                ]),
              ]),
            ]),
          ],
          !0
        );
      };
    },
  });
const Tt = he(at, [["__scopeId", "data-v-e13f31cf"]]);
export { Tt as default };
