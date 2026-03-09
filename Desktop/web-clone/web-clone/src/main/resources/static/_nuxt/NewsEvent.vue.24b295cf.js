import { _ as D } from "./JsonContent.828a79a5.js";
import { _ as G } from "./AppPageIntroduction.270416f3.js";
import { u as H } from "./index.92524a9b.js";
import {
  N as j,
  $ as V,
  O as m,
  J as M,
  L as n,
  av as O,
  Y as J,
  ch as K,
  b_ as Z,
  Q as x,
  T as ee,
  _ as te,
  a4 as ae,
} from "./entry.8aa394d7.js";
import {
  j as A,
  al as Q,
  V as q,
  z as h,
  S as u,
  W as C,
  X as R,
  u as e,
  Y as l,
  a as oe,
  Q as c,
  R as L,
  a1 as ne,
  F as U,
  a2 as B,
  a0 as T,
  an as se,
  ap as le,
  aq as ie,
} from "./swiper-vue.d5cda4d1.js";
import { _ as ce } from "./NuxtImg.vue.916c2d60.js";
import { _ as re } from "./AppTitleLogo.43818f33.js";
import { u as _e } from "./index.c079fb5a.js";
import { _ as pe } from "./AppNewsEvent.e529aabe.js";
import { a as de } from "./article.42cc306b.js";
const ue = ["src", "alt"],
  ze = A({
    __name: "Introduction",
    async setup(f) {
      var p, d;
      let i, s;
      const { findPageInfoByName: _, pageInfoData: t } = H();
      return (
        ([i, s] = Q(async () =>
          j(async () => {
            var o;
            (V.value || !((o = t.value) != null && o[m.FACULTY_PARTNER])) &&
              (await _(m.FACULTY_PARTNER));
          }, "$371GDmWC9L")
        )),
        await i,
        s(),
        M(
          (d =
            (p = t == null ? void 0 : t.value) == null
              ? void 0
              : p[m.FACULTY_PARTNER]) == null
            ? void 0
            : d.metadata
        ),
        (o, a) => {
          const N = D,
            W = G;
          return q(o.$slots, "default", {}, () => [
            h(
              W,
              { showLogo: "" },
              {
                title: u(() => [C(R(o.$t("partner.title")), 1)]),
                description: u(() => {
                  var r;
                  return [
                    h(
                      N,
                      {
                        content: ("getFieldWithLocale" in o
                          ? o.getFieldWithLocale
                          : e(n))(
                          (r = e(t)) == null ? void 0 : r[e(m).FACULTY_PARTNER],
                          "description"
                        ),
                      },
                      null,
                      8,
                      ["content"]
                    ),
                  ];
                }),
                introductionImg: u(() => {
                  var r, F, w, v;
                  return [
                    l(
                      "img",
                      {
                        src:
                          (F = (
                            "getFieldWithLocale" in o
                              ? o.getFieldWithLocale
                              : e(n)
                          )(
                            (r = e(t)) == null
                              ? void 0
                              : r[e(m).FACULTY_PARTNER],
                            "picturePageInfo"
                          )) == null
                            ? void 0
                            : F.url,
                        alt:
                          (v = (
                            "getFieldWithLocale" in o
                              ? o.getFieldWithLocale
                              : e(n)
                          )(
                            (w = e(t)) == null
                              ? void 0
                              : w[e(m).FACULTY_PARTNER],
                            "picturePageInfo"
                          )) == null
                            ? void 0
                            : v.alt,
                      },
                      null,
                      8,
                      ue
                    ),
                  ];
                }),
                _: 1,
              }
            ),
          ]);
        }
      );
    },
  }),
  ge = () => {
    const f = J(() => oe([]), "$0bg71Eg2Yu"),
      { onResult: i, refetch: s } = K(),
      _ = async () => {
        await s();
      };
    return (
      i((t) => {
        var p, d;
        (p = t == null ? void 0 : t.data) != null &&
          p.partners &&
          (f.value =
            (d = t == null ? void 0 : t.data) == null ? void 0 : d.partners);
      }),
      { listPartner: f, getListPartner: _ }
    );
  },
  me = O(ge),
  he = { class: "partner-wrapper relative overflow-x-hidden my-4 md:!my-24" },
  fe = { class: "container flex flex-wrap gap-3 lg:!gap-12 xl:!gap-20" },
  ye = { class: "!hidden lg:!block flex-1" },
  Le = {
    class:
      "partner__introduction w-full lg:w-6/12 flex flex-col justify-center",
  },
  Fe = { class: "description" },
  we = { class: "block lg:!hidden w-full pt-2.5" },
  ve = { class: "logo-item" },
  Pe = ["src", "alt"],
  Te = {
    class:
      "absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 hidden lg:block h-full opacity-5 aspect-[272/604]",
  },
  We = ["src", "alt"],
  Ae = A({
    __name: "Partners",
    async setup(f) {
      let i, s;
      const { generalInformation: _ } = Z(),
        { listPartner: t, getListPartner: p } = me(),
        { getPageSectionByType: d } = _e(),
        o = J("partnerDescription", () => null);
      return (
        ([i, s] = Q(async () =>
          j(async () => {
            if (V.value || !o.value) {
              const a = await d(x.FACULTY_PARTNER);
              a && (o.value = a == null ? void 0 : a[0]), await p();
            }
          }, "$ezXiivHaCv")
        )),
        await i,
        s(),
        (a, N) => {
          var S, b, $, k, E, Y, I;
          const W = ce,
            r = ee,
            F = re,
            w = D,
            v = le,
            X = ie;
          return (
            c(),
            L("div", he, [
              l("div", fe, [
                l("div", ye, [
                  (S = e(t)) != null && S.length
                    ? (c(),
                      L(
                        "div",
                        {
                          key: 0,
                          class: "partner__list-partner-logo",
                          style: ne({
                            aspectRatio:
                              ((b = e(t)) == null ? void 0 : b.length) > 4
                                ? "523/572"
                                : "auto",
                          }),
                        },
                        [
                          (c(!0),
                          L(
                            U,
                            null,
                            B(e(t), (g) => {
                              var P, y;
                              return (
                                c(),
                                L("div", { key: g.id, class: "logo-item" }, [
                                  h(
                                    W,
                                    {
                                      class:
                                        "w-full h-full object-cover aspect-square",
                                      src:
                                        (P = (
                                          "getFieldWithLocale" in a
                                            ? a.getFieldWithLocale
                                            : e(n)
                                        )(g, "pictureLogo")) == null
                                          ? void 0
                                          : P.url,
                                      alt:
                                        (y = (
                                          "getFieldWithLocale" in a
                                            ? a.getFieldWithLocale
                                            : e(n)
                                        )(g, "pictureLogo")) == null
                                          ? void 0
                                          : y.alt,
                                      loading: "lazy",
                                      sizes: "sm:30vw md:20vw",
                                    },
                                    null,
                                    8,
                                    ["src", "alt"]
                                  ),
                                ])
                              );
                            }),
                            128
                          )),
                        ],
                        4
                      ))
                    : (c(), T(r, { key: 1, class: "w-full" })),
                ]),
                l("div", Le, [
                  h(
                    F,
                    { class: "py-4 lg:!py-9 xl:!py-14" },
                    {
                      default: u(() => [
                        C(
                          R(
                            ("getFieldWithLocale" in a
                              ? a.getFieldWithLocale
                              : e(n))(e(o), "name")
                          ),
                          1
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  l("div", Fe, [
                    h(
                      w,
                      {
                        content: ("getFieldWithLocale" in a
                          ? a.getFieldWithLocale
                          : e(n))(e(o), "description"),
                      },
                      null,
                      8,
                      ["content"]
                    ),
                  ]),
                ]),
                l("div", we, [
                  ($ = e(t)) != null && $.length
                    ? (c(),
                      T(
                        X,
                        {
                          key: 0,
                          class: "w-full !pb-14 lg:!pb-16",
                          "slides-per-view":
                            ((k = e(t)) == null ? void 0 : k.length) < 3
                              ? (E = e(t)) == null
                                ? void 0
                                : E.length
                              : 3,
                          "resize-observer": "",
                          "space-between": 12,
                          pagination: { clickable: !0 },
                          modules: [
                            "SwiperPagination" in a
                              ? a.SwiperPagination
                              : e(se),
                          ],
                        },
                        {
                          default: u(() => [
                            (c(!0),
                            L(
                              U,
                              null,
                              B(
                                e(t),
                                (g, P) => (
                                  c(),
                                  T(
                                    v,
                                    {
                                      key: P,
                                      pagination: { clickable: !0 },
                                      class: "!h-auto",
                                    },
                                    {
                                      default: u(() => {
                                        var y, z;
                                        return [
                                          l("div", ve, [
                                            l(
                                              "img",
                                              {
                                                src:
                                                  (y = (
                                                    "getFieldWithLocale" in a
                                                      ? a.getFieldWithLocale
                                                      : e(n)
                                                  )(g, "pictureLogo")) == null
                                                    ? void 0
                                                    : y.url,
                                                alt:
                                                  (z = (
                                                    "getFieldWithLocale" in a
                                                      ? a.getFieldWithLocale
                                                      : e(n)
                                                  )(g, "pictureLogo")) == null
                                                    ? void 0
                                                    : z.alt,
                                                loading: "lazy",
                                                class:
                                                  "w-full h-full object-contain",
                                              },
                                              null,
                                              8,
                                              Pe
                                            ),
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
                        ["slides-per-view", "modules"]
                      ))
                    : (c(), T(r, { key: 1 })),
                ]),
              ]),
              l("div", Te, [
                l(
                  "img",
                  {
                    class: "w-full h-full",
                    src:
                      (Y = (
                        "getFieldWithLocale" in a ? a.getFieldWithLocale : e(n)
                      )(e(_), "pictureFacultyLogo")) == null
                        ? void 0
                        : Y.url,
                    alt:
                      (I = (
                        "getFieldWithLocale" in a ? a.getFieldWithLocale : e(n)
                      )(e(_), "pictureFacultyLogo")) == null
                        ? void 0
                        : I.alt,
                    loading: "lazy",
                  },
                  null,
                  8,
                  We
                ),
              ]),
            ])
          );
        }
      );
    },
  });
const Ue = te(Ae, [["__scopeId", "data-v-f31c483d"]]),
  Be = A({
    __name: "NewsEvent",
    setup(f) {
      const { facultyCode: i } = ae();
      return (s, _) => {
        const t = pe;
        return q(s.$slots, "default", {}, () => [
          h(
            t,
            {
              "news-event-category": `${e(i).toLowerCase()}-${
                e(de).FACULTY_PARTNER
              }`,
            },
            { title: u(() => [C(R(s.$t("common.news")), 1)]), _: 1 },
            8,
            ["news-event-category"]
          ),
        ]);
      };
    },
  });
export { ze as _, Ue as a, Be as b };
