import { _ as O } from "./JsonContent.828a79a5.js";
import {
  u as ae,
  N as X,
  $ as Z,
  O as p,
  J as ie,
  L as i,
  a3 as oe,
  _ as K,
  b_ as ne,
  Z as J,
  T as se,
} from "./entry.8aa394d7.js";
import { u as le } from "./index.92524a9b.js";
import { u as ce } from "./transform-translate-faculty.c0e2ceae.js";
import { _ as re } from "./circle-bg.50b04251.js";
import {
  j as G,
  al as x,
  V as de,
  u as e,
  Q as r,
  R as u,
  Y as a,
  X as g,
  z as d,
  _ as j,
  ai as ee,
  aj as te,
  a as U,
  k as _e,
  b as ue,
  S as h,
  F as b,
  a2 as P,
  a0 as Q,
  am as pe,
  ao as he,
  Z as me,
  a1 as ge,
  W as A,
  ap as ve,
  aq as Le,
} from "./swiper-vue.d5cda4d1.js";
import { _ as fe } from "./NuxtImg.vue.916c2d60.js";
import { _ as Fe } from "./client-only.42178d49.js";
import { u as we } from "./index.6ccc494e.js";
import { A as R } from "./btn-arrow.5abf483c.js";
import { _ as We } from "./index.a66880e0.js";
const ye = (m) => (ee("data-v-f5e5a456"), (m = m()), te(), m),
  be = { key: 0, class: "alumni__introduction-wrapper overflow-hidden" },
  Ae = {
    class:
      "alumni__introduction__bg w-full sm:w-3/4 mx-auto mb-4 block lg:!hidden aspect-[520/580]",
  },
  Ie = ["src", "alt"],
  Te = {
    class:
      "alumni__introduction__content-wrapper relative z-10 container flex flex-wrap w-full h-full !mb-16 lg:gap-11 lg:!mb-0",
  },
  $e = {
    class:
      "alumni__introduction__content order-1 lg:!order-none flex-1 flex items-center",
  },
  Se = { class: "text-white" },
  Ne = { class: "page-title !mb-2.5 lg:!mb-3.5" },
  Ce = { class: "description" },
  Ue = { class: "w-1/2 hidden lg:block" },
  ke = {
    class:
      "alumni__introduction__bg w-full lg:w-10/12 mx-auto aspect-[520/580]",
  },
  Me = ["src", "alt"],
  ze = ye(() =>
    a("div", { class: "circle-bg" }, [a("img", { src: re, alt: "" })], -1)
  ),
  Ye = G({
    __name: "Introduction",
    async setup(m) {
      var N, C;
      let T, $;
      ae({
        link: [
          {
            rel: "preload",
            href: "/assets/images/bg/circle-bg.webp",
            as: "image",
          },
        ],
      });
      const { findPageInfoByName: S, pageInfoData: s } = le(),
        { transformKeyTranslateLanguage: w } = ce();
      return (
        ([T, $] = x(async () =>
          X(async () => {
            (Z.value || !s.value[p.FACULTY_ALUMNI]) &&
              (await S(p.FACULTY_ALUMNI));
          }, "$nSXd27Em66")
        )),
        await T,
        $(),
        ie(
          (C =
            (N = s == null ? void 0 : s.value) == null
              ? void 0
              : N[p.FACULTY_ALUMNI]) == null
            ? void 0
            : C.metadata
        ),
        (o, _) => {
          const k = O;
          return de(
            o.$slots,
            "default",
            {},
            () => {
              var M, z, Y, t, l, c, v, L, f, F, B, E;
              return [
                ((z = ("getFieldWithLocale" in o ? o.getFieldWithLocale : e(i))(
                  (M = e(s)) == null ? void 0 : M[e(p).FACULTY_ALUMNI],
                  "picturePageInfo"
                )) != null &&
                  z.url) ||
                !e(oe)(
                  ("getFieldWithLocale" in o ? o.getFieldWithLocale : e(i))(
                    (Y = e(s)) == null ? void 0 : Y[e(p).FACULTY_ALUMNI],
                    "description"
                  )
                )
                  ? (r(),
                    u("div", be, [
                      a("div", Ae, [
                        a(
                          "img",
                          {
                            class: "w-full h-full object-cover",
                            src:
                              (l = (
                                "getFieldWithLocale" in o
                                  ? o.getFieldWithLocale
                                  : e(i)
                              )(
                                (t = e(s)) == null
                                  ? void 0
                                  : t[e(p).FACULTY_ALUMNI],
                                "picturePageInfo"
                              )) == null
                                ? void 0
                                : l.url,
                            alt:
                              (v = (
                                "getFieldWithLocale" in o
                                  ? o.getFieldWithLocale
                                  : e(i)
                              )(
                                (c = e(s)) == null
                                  ? void 0
                                  : c[e(p).FACULTY_ALUMNI],
                                "picturePageInfo"
                              )) == null
                                ? void 0
                                : v.alt,
                          },
                          null,
                          8,
                          Ie
                        ),
                      ]),
                      a("div", Te, [
                        a("div", $e, [
                          a("div", Se, [
                            a("h1", Ne, g(o.$t(e(w)("alumni", "title"))), 1),
                            a("div", Ce, [
                              d(
                                k,
                                {
                                  content: ("getFieldWithLocale" in o
                                    ? o.getFieldWithLocale
                                    : e(i))(
                                    (L = e(s)) == null
                                      ? void 0
                                      : L[e(p).FACULTY_ALUMNI],
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
                        a("div", Ue, [
                          a("div", ke, [
                            a(
                              "img",
                              {
                                class: "w-full h-full object-cover",
                                src:
                                  (F = (
                                    "getFieldWithLocale" in o
                                      ? o.getFieldWithLocale
                                      : e(i)
                                  )(
                                    (f = e(s)) == null
                                      ? void 0
                                      : f[e(p).FACULTY_ALUMNI],
                                    "picturePageInfo"
                                  )) == null
                                    ? void 0
                                    : F.url,
                                alt:
                                  (E = (
                                    "getFieldWithLocale" in o
                                      ? o.getFieldWithLocale
                                      : e(i)
                                  )(
                                    (B = e(s)) == null
                                      ? void 0
                                      : B[e(p).FACULTY_ALUMNI],
                                    "picturePageInfo"
                                  )) == null
                                    ? void 0
                                    : E.alt,
                              },
                              null,
                              8,
                              Me
                            ),
                          ]),
                        ]),
                      ]),
                      ze,
                    ]))
                  : j("", !0),
              ];
            },
            !0
          );
        }
      );
    },
  });
const Ft = K(Ye, [["__scopeId", "data-v-f5e5a456"]]),
  I = (m) => (ee("data-v-3d2d056b"), (m = m()), te(), m),
  Be = { class: "alumni__main-section bg-light-blue" },
  Ee = {
    class: "container relative py-7 lg:py-32",
    style: { "z-index": "10" },
  },
  Pe = { key: 0, class: "content !gap-5 lg:!gap-20" },
  Qe = { class: "quote-avatar-wrapper" },
  je = { class: "quotes-content-wrapper" },
  qe = { class: "flex-1", style: { "min-width": "0" } },
  He = { class: "quote-item-content" },
  Ve = { class: "quote-author" },
  De = { class: "flex" },
  Je = ["innerHTML"],
  Re = ["innerHTML"],
  Oe = { class: "quote-content" },
  Xe = { class: "navigation-btn-wrapper mt-4 lg:mt-5" },
  Ze = {
    id: "prevBtn",
    class: "quote-navigation-btn select-none cursor-pointer",
  },
  Ke = {
    id: "nextBtn",
    class: "quote-navigation-btn select-none cursor-pointer",
  },
  Ge = { class: "alumni__main-section__marquee-wrapper" },
  xe = { class: "item" },
  et = I(() => a("span", { class: "mx-4" }, "-", -1)),
  tt = I(() => a("span", { class: "mx-4" }, "-", -1)),
  at = I(() => a("span", { class: "mx-4" }, "-", -1)),
  it = { class: "alumni__main-section__marquee" },
  ot = { class: "item" },
  nt = I(() => a("span", { class: "mx-4" }, "-", -1)),
  st = I(() => a("span", { class: "mx-4" }, "-", -1)),
  lt = I(() => a("span", { class: "mx-4" }, "-", -1)),
  ct = G({
    __name: "MainSection",
    async setup(m) {
      let T, $;
      const S = U(0),
        s = U(null),
        w = U(null),
        N = U([]),
        C = U([]),
        { getListQuote: o, listQuote: _ } = we(),
        { generalInformation: k } = ne();
      ([T, $] = x(async () =>
        X(async () => {
          var t;
          (Z.value || !((t = _.value) != null && t.length)) && (await o());
        }, "$DvJ0EXRd4g")
      )),
        await T,
        $();
      const M = _e(() => _.value.reduce((t, l) => t + i(l, "name").length, 0));
      ue(S, (t) => {
        var l, c, v, L, f, F;
        (v =
          (c = (l = s.value) == null ? void 0 : l.$el) == null
            ? void 0
            : c.swiper) == null || v.slideTo(t),
          (F =
            (f = (L = w.value) == null ? void 0 : L.$el) == null
              ? void 0
              : f.swiper) == null || F.slideTo(t);
      });
      const z = () => {
          var t, l, c;
          S.value =
            (c =
              (l =
                (t = w == null ? void 0 : w.value) == null ? void 0 : t.$el) ==
              null
                ? void 0
                : l.swiper) == null
              ? void 0
              : c.activeIndex;
        },
        Y = () => {
          var t, l, c;
          S.value =
            (c =
              (l =
                (t = s == null ? void 0 : s.value) == null ? void 0 : t.$el) ==
              null
                ? void 0
                : l.swiper) == null
              ? void 0
              : c.activeIndex;
        };
      return (t, l) => {
        var q, H, V;
        const c = fe,
          v = ve,
          L = Le,
          f = We,
          F = Fe,
          B = O,
          E = se;
        return (
          r(),
          u("div", Be, [
            a("div", Ee, [
              e(_).length
                ? (r(),
                  u("div", Pe, [
                    a("div", Qe, [
                      d(
                        L,
                        {
                          ref_key: "avatarSwiper",
                          ref: w,
                          class: "h-full",
                          "slides-per-view": "1",
                          "resize-observer": "",
                          "space-between": "100",
                          onSlideChange: z,
                        },
                        {
                          default: h(() => [
                            (r(!0),
                            u(
                              b,
                              null,
                              P(
                                e(_),
                                (n, W) => (
                                  r(),
                                  Q(
                                    v,
                                    { key: `avatar-${W}` },
                                    {
                                      default: h(() => {
                                        var y, D;
                                        return [
                                          d(
                                            c,
                                            {
                                              src:
                                                (y = (
                                                  "getFieldWithLocale" in t
                                                    ? t.getFieldWithLocale
                                                    : e(i)
                                                )(n, "pictureQuoute")) == null
                                                  ? void 0
                                                  : y.url,
                                              alt:
                                                (D = (
                                                  "getFieldWithLocale" in t
                                                    ? t.getFieldWithLocale
                                                    : e(i)
                                                )(n, "pictureQuoute")) == null
                                                  ? void 0
                                                  : D.alt,
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
                    a("div", je, [
                      a("div", qe, [
                        d(
                          L,
                          {
                            ref_key: "swiper",
                            ref: s,
                            modules: [
                              "SwiperNavigation" in t
                                ? t.SwiperNavigation
                                : e(pe),
                              "SwiperAutoplay" in t ? t.SwiperAutoplay : e(he),
                            ],
                            "slides-per-view": "1",
                            "space-between": "100",
                            "resize-observer": "",
                            navigation: {
                              nextEl: "#nextBtn",
                              prevEl: "#prevBtn",
                            },
                            autoplay: { delay: 2500, pauseOnMouseEnter: !0 },
                            onSlideChange: Y,
                          },
                          {
                            default: h(() => [
                              (r(!0),
                              u(
                                b,
                                null,
                                P(
                                  e(_),
                                  (n, W) => (
                                    r(),
                                    Q(
                                      v,
                                      { key: W },
                                      {
                                        default: h(() => [
                                          a("div", He, [
                                            d(
                                              F,
                                              null,
                                              {
                                                fallback: h(() => [
                                                  a(
                                                    "p",
                                                    Ve,
                                                    g(
                                                      ("getFieldWithLocale" in t
                                                        ? t.getFieldWithLocale
                                                        : e(i))(n, "name")
                                                    ),
                                                    1
                                                  ),
                                                ]),
                                                default: h(() => [
                                                  d(
                                                    f,
                                                    {
                                                      title: ("isTruncate" in t
                                                        ? t.isTruncate
                                                        : e(J))(e(C)[W])
                                                        ? ("getFieldWithLocale" in
                                                            t
                                                            ? t.getFieldWithLocale
                                                            : e(i))(n, "name")
                                                        : "",
                                                      placement: "rightTop",
                                                    },
                                                    {
                                                      default: h(() => [
                                                        a(
                                                          "p",
                                                          {
                                                            ref_for: !0,
                                                            ref: (y) => {
                                                              e(C)[W] = y;
                                                            },
                                                            class:
                                                              "quote-author",
                                                          },
                                                          g(
                                                            ("getFieldWithLocale" in
                                                              t
                                                              ? t.getFieldWithLocale
                                                              : e(i))(n, "name")
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
                                            a("div", De, [
                                              d(
                                                F,
                                                null,
                                                {
                                                  fallback: h(() => [
                                                    a(
                                                      "div",
                                                      {
                                                        class:
                                                          "author-position",
                                                        innerHTML:
                                                          ("getFieldWithLocale" in
                                                            t
                                                            ? t.getFieldWithLocale
                                                            : e(i))(n, "title"),
                                                      },
                                                      null,
                                                      8,
                                                      Re
                                                    ),
                                                  ]),
                                                  default: h(() => [
                                                    d(
                                                      f,
                                                      {
                                                        title: ("isTruncate" in
                                                          t
                                                          ? t.isTruncate
                                                          : e(J))(e(N)[W])
                                                          ? ("getFieldWithLocale" in
                                                              t
                                                              ? t.getFieldWithLocale
                                                              : e(i))(
                                                              n,
                                                              "title"
                                                            )
                                                          : "",
                                                        placement: "rightTop",
                                                      },
                                                      {
                                                        default: h(() => [
                                                          a(
                                                            "div",
                                                            {
                                                              ref_for: !0,
                                                              ref: (y) => {
                                                                e(N)[W] = y;
                                                              },
                                                              class:
                                                                "author-position",
                                                              innerHTML:
                                                                ("getFieldWithLocale" in
                                                                  t
                                                                  ? t.getFieldWithLocale
                                                                  : e(i))(
                                                                  n,
                                                                  "title"
                                                                ),
                                                            },
                                                            null,
                                                            8,
                                                            Je
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
                                            a("div", Oe, [
                                              d(
                                                B,
                                                {
                                                  content:
                                                    ("getFieldWithLocale" in t
                                                      ? t.getFieldWithLocale
                                                      : e(i))(n, "description"),
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
                        a("div", Xe, [
                          a("div", Ze, [d(e(R), { class: "arrow-icon" })]),
                          a("div", Ke, [d(e(R), { class: "arrow-icon" })]),
                        ]),
                      ]),
                    ]),
                  ]))
                : (r(), Q(E, { key: 1 })),
            ]),
            a(
              "div",
              {
                class: me([
                  { "-translate-y-[6rem]": e(_).length },
                  "alumni__main-section__bg opacity-5 absolute left-0 top-0 -translate-x-1/2 hidden lg:block aspect-[272/466]",
                ]),
              },
              [
                d(
                  c,
                  {
                    class: "w-full h-full object-contain",
                    src:
                      (q = (
                        "getFieldWithLocale" in t ? t.getFieldWithLocale : e(i)
                      )(e(k), "pictureFacultyLogo")) == null
                        ? void 0
                        : q.url,
                    alt:
                      (V =
                        (H = e(k)) == null ? void 0 : H.pictureFacultyLogo) ==
                      null
                        ? void 0
                        : V.alt,
                    sizes: "md:32vw 20vw",
                    loading: "lazy",
                  },
                  null,
                  8,
                  ["src", "alt"]
                ),
              ],
              2
            ),
            a("div", Ge, [
              a(
                "div",
                {
                  class: "alumni__main-section__marquee",
                  style: ge({
                    "animation-duration": e(M) > 600 ? "100s" : "50s",
                  }),
                },
                [
                  (r(!0),
                  u(
                    b,
                    null,
                    P(
                      e(_),
                      (n) => (
                        r(),
                        u("div", xe, [
                          A(
                            g(
                              ("getFieldWithLocale" in t
                                ? t.getFieldWithLocale
                                : e(i))(n, "name")
                            ),
                            1
                          ),
                          et,
                          e(_).length === 1
                            ? (r(),
                              u(
                                b,
                                { key: 0 },
                                [
                                  A(
                                    g(
                                      ("getFieldWithLocale" in t
                                        ? t.getFieldWithLocale
                                        : e(i))(n, "name")
                                    ),
                                    1
                                  ),
                                  tt,
                                  A(
                                    " " +
                                      g(
                                        ("getFieldWithLocale" in t
                                          ? t.getFieldWithLocale
                                          : e(i))(n, "name")
                                      ),
                                    1
                                  ),
                                  at,
                                ],
                                64
                              ))
                            : j("", !0),
                        ])
                      )
                    ),
                    256
                  )),
                ],
                4
              ),
              a("div", it, [
                (r(!0),
                u(
                  b,
                  null,
                  P(
                    e(_),
                    (n) => (
                      r(),
                      u("div", ot, [
                        A(
                          g(
                            ("getFieldWithLocale" in t
                              ? t.getFieldWithLocale
                              : e(i))(n, "name")
                          ),
                          1
                        ),
                        nt,
                        e(_).length === 1
                          ? (r(),
                            u(
                              b,
                              { key: 0 },
                              [
                                A(
                                  g(
                                    ("getFieldWithLocale" in t
                                      ? t.getFieldWithLocale
                                      : e(i))(n, "name")
                                  ),
                                  1
                                ),
                                st,
                                A(
                                  " " +
                                    g(
                                      ("getFieldWithLocale" in t
                                        ? t.getFieldWithLocale
                                        : e(i))(n, "name")
                                    ),
                                  1
                                ),
                                lt,
                              ],
                              64
                            ))
                          : j("", !0),
                      ])
                    )
                  ),
                  256
                )),
              ]),
            ]),
          ])
        );
      };
    },
  });
const wt = K(ct, [["__scopeId", "data-v-3d2d056b"]]);
export { Ft as _, wt as a };
