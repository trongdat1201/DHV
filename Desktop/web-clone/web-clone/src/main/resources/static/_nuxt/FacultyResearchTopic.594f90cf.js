import { _ as G } from "./AppCircleBg.a727b718.js";
import { _ as K } from "./NuxtImg.vue.916c2d60.js";
import { _ as x } from "./client-only.42178d49.js";
import { _ as ee } from "./JsonContent.828a79a5.js";
import {
  Q as w,
  O as te,
  u as ae,
  a7 as oe,
  Y as se,
  N as ie,
  $ as ne,
  J as re,
  L as o,
  Z as ce,
  T as le,
  _ as _e,
} from "./entry.8aa394d7.js";
import { u as pe } from "./index.c079fb5a.js";
import { u as me } from "./index.92524a9b.js";
import { A as de } from "./btn-arrow.5abf483c.js";
import { A as ue } from "./AppBreadcrumb.73e131db.js";
import { S as fe } from "./index.010e93e7.js";
import {
  j as he,
  k as ge,
  a as ye,
  al as Fe,
  V as ve,
  z as r,
  Y as a,
  u as t,
  Q as s,
  R as n,
  _ as b,
  X as p,
  F as N,
  a2 as Le,
  a0 as $,
  S as m,
} from "./swiper-vue.d5cda4d1.js";
import { _ as Ce } from "./index.a66880e0.js";
import "./circle-bg.50b04251.js";
import "./omitBy.06454d55.js";
import "./_baseIteratee.825e9cf8.js";
import "./_baseIsEqual.42871e3f.js";
import "./nuxt-link.58f89fff.js";
import "./breadcrumb.bc5fa9d7.js";
import "./transform-translate-faculty.c0e2ceae.js";
import "./IFaculty.97f6e59d.js";
import "./Trigger.dd535606.js";
import "./isVisible.48fa23e0.js";
import "./PortalWrapper.438f60b2.js";
import "./motion.d46d0bbf.js";
import "./firstNotUndefined.29a740f3.js";
import "./zoom.4c1ddb0e.js";
const Se = { class: "scientific-research__research-topic" },
  Ie = { key: 0, class: "scientific-research__research-topic__banner" },
  Te = ["src", "alt"],
  We = {
    class:
      "scientific-research__research-topic__content relative py-11 lg:pt-11 lg:pb-20",
  },
  Re = {
    class:
      "hidden lg:block absolute w-[18%] top-4 left-0 -translate-x-1/4 opacity-20",
  },
  Ae = { class: "container" },
  Ee = { class: "section-title" },
  Pe = { class: "list-topic" },
  ke = { class: "topic" },
  we = { class: "topic-thumb flex justify-center items-center" },
  be = ["src", "alt"],
  Ne = { class: "topic-name" },
  $e = { class: "topic-description" },
  Be = { key: 0, class: "flex justify-center mt-14" },
  He = { class: "hover:underline underline-offset-2" },
  Me = { key: 1, class: "my-28 w-full" },
  je = he({
    __name: "FacultyResearchTopic",
    props: {
      type: {
        type: String,
        default: w.FACULTY_SCIENTIFIC_RESEARCH_LECTURER_RESEARCH_TOPIC,
      },
      bannerType: { type: String, default: te.FACULTY_SCIENTIFIC_RESEARCH },
    },
    async setup(B) {
      let d, u;
      const c = B;
      ae({
        link: [
          {
            rel: "preload",
            href: "/assets/images/bg/event-bg.webp",
            as: "image",
          },
        ],
      });
      const H = ge(
          () => c.type === w.FACULTY_SCIENTIFIC_RESEARCH_STUDENT_RESEARCH_TOPIC
        ),
        { informationManagementData: f } = oe(),
        { getPageSectionItemCursorPaginated: M, getPageSectionByType: j } =
          pe(),
        { findPageInfoByName: D } = me(),
        l = se(`teacherResearchTopic${c.type}`, () => null),
        h = ye([]),
        {
          listPageSectionItem: g,
          loadingRef: y,
          pageSectionItemPagination: _,
          cursorVariables: U,
        } = M({ pageType: c.type }, { after: "", take: 6 });
      ([d, u] = Fe(async () =>
        ie(async () => {
          if (ne.value || !l.value) {
            const e = await j(c.type),
              F = await D(c.bannerType);
            (l.value = F), re(e == null ? void 0 : e[0].metadata);
          }
        }, "$JuixMsZ75w")
      )),
        await d,
        u();
      const V = async () => {
        var e;
        !y.value &&
          _.value.hasNextPage &&
          (U.value.pagination.after =
            (e = _ == null ? void 0 : _.value) == null ? void 0 : e.endCursor);
      };
      return (e, F) => {
        const Y = G,
          O = K,
          z = Ce,
          J = x,
          Q = ee,
          Z = fe,
          X = le;
        return ve(
          e.$slots,
          "default",
          {},
          () => {
            var v, L, C, S;
            return [
              r(ue),
              a("div", Se, [
                (L = (v = t(l)) == null ? void 0 : v.picturePageInfo) != null &&
                L.url
                  ? (s(),
                    n("div", Ie, [
                      a(
                        "img",
                        {
                          class: "w-full h-full object-cover",
                          src:
                            (C = (
                              "getFieldWithLocale" in e
                                ? e.getFieldWithLocale
                                : t(o)
                            )(t(l), "picturePageInfo")) == null
                              ? void 0
                              : C.url,
                          alt:
                            (S = (
                              "getFieldWithLocale" in e
                                ? e.getFieldWithLocale
                                : t(o)
                            )(t(l), "picturePageInfo")) == null
                              ? void 0
                              : S.alt,
                        },
                        null,
                        8,
                        Te
                      ),
                    ]))
                  : b("", !0),
                a("div", We, [
                  a("div", Re, [r(Y)]),
                  a("div", Ae, [
                    a(
                      "h1",
                      Ee,
                      p(
                        t(H)
                          ? e.$t(
                              "scientific_research.faculty_research_topics_trainee"
                            )
                          : e.$t("scientific_research.faculty_research_topics")
                      ),
                      1
                    ),
                    t(g).length
                      ? (s(),
                        n(
                          N,
                          { key: 0 },
                          [
                            a("div", Pe, [
                              (s(!0),
                              n(
                                N,
                                null,
                                Le(t(g), (i, I) => {
                                  var T, W, R, A, E, P, k;
                                  return (
                                    s(),
                                    n("div", ke, [
                                      a("div", we, [
                                        (T =
                                          i == null
                                            ? void 0
                                            : i.picturePageSectionItem) !=
                                          null && T.url
                                          ? (s(),
                                            $(
                                              O,
                                              {
                                                key: 0,
                                                class:
                                                  "w-full h-full object-cover",
                                                src:
                                                  (W = (
                                                    "getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : t(o)
                                                  )(
                                                    i,
                                                    "picturePageSectionItem"
                                                  )) == null
                                                    ? void 0
                                                    : W.url,
                                                alt:
                                                  (R = (
                                                    "getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : t(o)
                                                  )(
                                                    i,
                                                    "picturePageSectionItem"
                                                  )) == null
                                                    ? void 0
                                                    : R.alt,
                                                sizes: "sm:50vw md:40vw",
                                              },
                                              null,
                                              8,
                                              ["src", "alt"]
                                            ))
                                          : (s(),
                                            n(
                                              "img",
                                              {
                                                key: 1,
                                                class: "w-9/12 opacity-70",
                                                src:
                                                  (E = (
                                                    "getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : t(o)
                                                  )(
                                                    (A = t(f)) == null
                                                      ? void 0
                                                      : A.informationManagement,
                                                    "pictureLogoHeader"
                                                  )) == null
                                                    ? void 0
                                                    : E.url,
                                                alt:
                                                  (k = (
                                                    "getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : t(o)
                                                  )(
                                                    (P = t(f)) == null
                                                      ? void 0
                                                      : P.informationManagement,
                                                    "pictureLogoHeader"
                                                  )) == null
                                                    ? void 0
                                                    : k.alt,
                                              },
                                              null,
                                              8,
                                              be
                                            )),
                                      ]),
                                      r(
                                        J,
                                        null,
                                        {
                                          fallback: m(() => [
                                            a(
                                              "h2",
                                              Ne,
                                              p(
                                                ("getFieldWithLocale" in e
                                                  ? e.getFieldWithLocale
                                                  : t(o))(i, "name")
                                              ),
                                              1
                                            ),
                                          ]),
                                          default: m(() => [
                                            r(
                                              z,
                                              {
                                                title: ("isTruncate" in e
                                                  ? e.isTruncate
                                                  : t(ce))(t(h)[I])
                                                  ? ("getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : t(o))(i, "name")
                                                  : "",
                                              },
                                              {
                                                default: m(() => [
                                                  a(
                                                    "h2",
                                                    {
                                                      ref_for: !0,
                                                      ref: (q) => {
                                                        t(h)[I] = q;
                                                      },
                                                      class: "topic-name",
                                                    },
                                                    p(
                                                      ("getFieldWithLocale" in e
                                                        ? e.getFieldWithLocale
                                                        : t(o))(i, "name")
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
                                      a("div", $e, [
                                        r(
                                          Q,
                                          {
                                            class: "editorjs-font-small",
                                            content: ("getFieldWithLocale" in e
                                              ? e.getFieldWithLocale
                                              : t(o))(i, "description"),
                                          },
                                          null,
                                          8,
                                          ["content"]
                                        ),
                                      ]),
                                    ])
                                  );
                                }),
                                256
                              )),
                            ]),
                            t(_).hasNextPage
                              ? (s(),
                                n("div", Be, [
                                  t(y)
                                    ? (s(), $(Z, { key: 1, size: "large" }))
                                    : (s(),
                                      n(
                                        "div",
                                        {
                                          key: 0,
                                          class:
                                            "read-more w-fit flex items-center gap-3 cursor-pointer",
                                          onClick: V,
                                        },
                                        [
                                          a(
                                            "span",
                                            He,
                                            p(e.$t("common.read_more")),
                                            1
                                          ),
                                          r(t(de), { class: "rotate-90" }),
                                        ]
                                      )),
                                ]))
                              : b("", !0),
                          ],
                          64
                        ))
                      : (s(), n("div", Me, [r(X)])),
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
const mt = _e(je, [["__scopeId", "data-v-1a027d12"]]);
export { mt as default };
