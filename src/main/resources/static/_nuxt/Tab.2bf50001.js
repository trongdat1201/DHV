import { u as me } from "./list.70e6673c.js";
import { u as fe } from "./index.92524a9b.js";
import {
  a4 as U,
  H as z,
  cf as ee,
  N as ge,
  O as E,
  J as te,
  L as b,
  _ as X,
  $ as Y,
  T as he,
  R as ye,
  D as we,
} from "./entry.8aa394d7.js";
import {
  a as w,
  k as q,
  b as R,
  j,
  Q as m,
  R as h,
  Y as n,
  z as u,
  u as t,
  _ as be,
  X as C,
  S as $,
  Z as D,
  ai as $e,
  aj as Le,
  y as ae,
  F as B,
  a2 as V,
  W as Se,
  a0 as M,
  an as Fe,
  ao as Ie,
  ap as Ae,
  aq as We,
  V as Ce,
  M as Ne,
} from "./swiper-vue.d5cda4d1.js";
import { _ as ke } from "./AppCircleBg.a727b718.js";
import { _ as oe } from "./JsonContent.828a79a5.js";
import { _ as se } from "./AppButton.be7bd59a.js";
import { _ as ie } from "./nuxt-link.58f89fff.js";
import { _ as Te } from "./NuxtImg.vue.916c2d60.js";
import { A as ne } from "./btn-arrow.5abf483c.js";
import { _ as Re } from "./client-only.42178d49.js";
const Pe = async () => {
    const {
        activeArticleList: c,
        getActiveArticleList: L,
        loadingRef: F,
      } = me(),
      { findPageInfoByName: o } = fe(),
      { facultyCode: f } = U(),
      p = z(),
      s = w(null),
      a = q(() => {
        var r;
        return (r = p == null ? void 0 : p.query) == null ? void 0 : r.type;
      }),
      { refetch: d, offsetVariables: y } = L(
        { categoryIds: [`${f.value.toLowerCase()}-${a.value}`], type: ee.NEWS },
        { page: 1, take: 100 },
      );
    return (
      await ge(async () => {
        var _;
        await d();
        const r = await o(
          ((_ = p == null ? void 0 : p.query) == null ? void 0 : _.type) ===
            "recruitment"
            ? E.FACULTY_RECRUITMENT_NEWS
            : E.FACULTY_ACTIVITY_NEWS,
        );
        r && (s.value = r);
      }, "$oxki2iKNcG"),
      R(
        () => a.value,
        async (r) => {
          if (r) {
            y.value = {
              pagination: { page: 1, take: 100 },
              filter: {
                categoryIds: [`${f.value.toLowerCase()}-${r}`],
                type: ee.NEWS,
              },
            };
            const _ = await o(
              a.value === "recruitment"
                ? E.FACULTY_RECRUITMENT_NEWS
                : E.FACULTY_ACTIVITY_NEWS,
            );
            _ && (s.value = _);
          }
        },
      ),
      {
        activeArticleList: c,
        loadingRef: F,
        activeType: a,
        pageInfo: s,
        route: p,
      }
    );
  },
  It = Pe,
  xe = (c) => ($e("data-v-f32d35bc"), (c = c()), Le(), c),
  Ee = xe(() =>
    n(
      "div",
      { class: "student-experience-news__introduction__content-bg" },
      null,
      -1,
    ),
  ),
  qe = {
    class:
      "circle-bg hidden lg:block absolute top-3 left-0 w-[25%] z-[11] opacity-20",
  },
  Be = { class: "student-experience-news__introduction__bg" },
  Ve = ["src", "alt"],
  ze = { class: "student-experience-news__introduction__content container" },
  Ye = { class: "circle-bg" },
  Me = { class: "student-experience-news__introduction__content-wrapper" },
  Ue = { class: "page-title" },
  Xe = { class: "description" },
  je = { class: "uppercase" },
  De = j({
    __name: "Introduction",
    props: { pageInfo: { type: Object, default: () => {} } },
    setup(c) {
      var p;
      const L = c,
        F = z(),
        { facultyCode: o } = U();
      te((p = L.pageInfo) == null ? void 0 : p.metadata);
      const f = q(() => F.query.type);
      return (
        R(
          () => L.pageInfo,
          (s) => {
            te(s == null ? void 0 : s.metadata);
          },
          { immediate: !0 },
        ),
        (s, a) => {
          var N, P, x;
          const d = ke,
            y = oe,
            r = se,
            _ = ie;
          return (
            m(),
            h(
              "div",
              { class: D(["student-experience-news__introduction", t(f)]) },
              [
                Ee,
                n("div", qe, [u(d)]),
                n("div", Be, [
                  (N = (
                    "getFieldWithLocale" in s ? s.getFieldWithLocale : t(b)
                  )(c.pageInfo, "picturePageInfo")) != null && N.url
                    ? (m(),
                      h(
                        "img",
                        {
                          key: 0,
                          src:
                            (P = (
                              "getFieldWithLocale" in s
                                ? s.getFieldWithLocale
                                : t(b)
                            )(c.pageInfo, "picturePageInfo")) == null
                              ? void 0
                              : P.url,
                          alt:
                            (x = (
                              "getFieldWithLocale" in s
                                ? s.getFieldWithLocale
                                : t(b)
                            )(c.pageInfo, "picturePageInfo")) == null
                              ? void 0
                              : x.alt,
                        },
                        null,
                        8,
                        Ve,
                      ))
                    : be("", !0),
                ]),
                n("div", ze, [
                  n("div", Ye, [u(d)]),
                  n("div", Me, [
                    n("h1", Ue, C(s.$t(`faculty_${t(f)}_news.title`)), 1),
                    n("div", Xe, [
                      u(
                        y,
                        {
                          content: ("getFieldWithLocale" in s
                            ? s.getFieldWithLocale
                            : t(b))(c.pageInfo, "description"),
                        },
                        null,
                        8,
                        ["content"],
                      ),
                    ]),
                    u(
                      _,
                      {
                        class: "hidden lg:block",
                        to: s.localePath({
                          path: "/news-event/news",
                          query: { category: `${t(o).toLowerCase()}-${t(f)}` },
                        }),
                      },
                      {
                        default: $(() => [
                          u(
                            r,
                            { type: "primary", arrow: "" },
                            {
                              default: $(() => [
                                n(
                                  "span",
                                  je,
                                  C(s.$t("common.read_all_news")),
                                  1,
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["to"],
                    ),
                  ]),
                ]),
              ],
              2,
            )
          );
        }
      );
    },
  });
const At = X(De, [["__scopeId", "data-v-f32d35bc"]]),
  He = {
    viewBox: "0 0 73 75",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Oe = n(
    "path",
    {
      d: "M1 59.5L14.5 73.5L53 34.5V67H72.5V1H7.5V20.5H39.5L1 59.5Z",
      stroke: "currentColor",
    },
    null,
    -1,
  ),
  Je = [Oe];
function Ze(c, L) {
  return (m(), h("svg", He, Je));
}
const Ge = { render: Ze },
  Ke = {
    class: "student-experience__list-news overflow-hidden mb-16 lg:my-20",
  },
  Qe = { class: "container relative" },
  et = { key: 0 },
  tt = { class: "hidden lg:block" },
  nt = { class: "list-slide" },
  at = { class: "overlay" },
  ot = { class: "title" },
  st = { class: "description cursor-default" },
  it = { class: "block lg:hidden mt-3" },
  lt = { class: "flex-1 title" },
  ct = { class: "flex justify-center mt-3" },
  rt = { class: "uppercase" },
  ut = j({
    __name: "ListNews",
    props: { listNews: { type: Array, default: () => [] } },
    setup(c) {
      const L = z(),
        { facultyCode: F } = U(),
        o = w(0),
        f = w(null),
        p = w(null),
        s = w(null),
        a = w([]),
        d = w(!1),
        y = w(null),
        r = w(!1),
        _ = w(performance.now()),
        N = (e) => {
          Y.value ||
            (e - _.value >= 3e3 && (H(), (_.value = e)),
            (y.value = requestAnimationFrame(N)));
        },
        P = () => {
          Y.value || y.value || (y.value = requestAnimationFrame(N));
        },
        x = () => {
          Y.value ||
            (y.value && (cancelAnimationFrame(y.value), (y.value = null)));
        };
      (R(
        r,
        (e) => {
          e ? x() : P();
        },
        { immediate: !0 },
      ),
        R(
          () => L.query.type,
          (e) => {
            o.value = 0;
          },
        ),
        R(
          () => a.value.length,
          (e) => {
            e && le();
          },
          { immediate: !0 },
        ),
        ae(() => {
          f.value &&
            ((p.value.onmouseenter = () => {
              r.value = !0;
            }),
            (p.value.onmouseleave = () => {
              r.value = !1;
            }),
            (f.value.onmouseenter = () => {
              r.value = !0;
            }),
            (f.value.onmouseleave = () => {
              r.value = !1;
            }));
        }));
      const le = () => {
          var e;
          (e = a == null ? void 0 : a.value) == null ||
            e.forEach((i, l) => {
              var A;
              let g = 0;
              (l !== o.value && (g = (l - 1) * I() + de()),
                l ===
                  ((A = a == null ? void 0 : a.value) == null
                    ? void 0
                    : A.length) -
                    1 && (g = -1 * I()),
                i.setAttribute("data-x", g),
                (i.style.transform = `translateX(${g}px)`));
            });
        },
        H = () => {
          var e;
          d.value ||
            ((d.value = !0),
            o.value++,
            o.value > (a == null ? void 0 : a.value.length) - 1 &&
              (o.value = 0),
            (e = a == null ? void 0 : a.value) == null ||
              e.forEach((i, l) => {
                const g = window == null ? void 0 : window.getComputedStyle(i);
                let S =
                  Number(i.getAttribute("data-x")) -
                  (i == null ? void 0 : i.clientWidth) -
                  parseFloat(g.marginRight);
                (l === o.value
                  ? ((S = 0), (i.style.opacity = 1))
                  : l === o.value - 1 ||
                      (o.value === 0 && l === a.value.length - 1)
                    ? (S = -1 * I())
                    : S < -I() && ((S = O() - I()), (i.style.opacity = 0)),
                  (i.ontransitionend = () => {
                    i.style.opacity = 1;
                  }),
                  (i.style.transform = `translateX(${S}px)`),
                  i.setAttribute("data-x", S));
              }),
            setTimeout(() => {
              d.value = !1;
            }, 300));
        },
        ce = (e = 1) => {
          var i;
          d.value ||
            ((d.value = !0),
            o.value--,
            o.value < 0 &&
              (o.value = (a == null ? void 0 : a.value.length) - 1),
            (i = a == null ? void 0 : a.value) == null ||
              i.forEach((l, g) => {
                const A = window == null ? void 0 : window.getComputedStyle(l);
                let W =
                  Number(l.getAttribute("data-x")) +
                  (l == null ? void 0 : l.clientWidth) +
                  parseFloat(A.marginRight);
                (g === o.value
                  ? ((W = 0), (l.style.opacity = 1))
                  : W > O() - I()
                    ? ((W = -1 * I()), (l.style.opacity = 0))
                    : (l.style.opacity = 1),
                  (l.style.transform = `translateX(${W}px)`),
                  l.setAttribute("data-x", W));
              }),
            setTimeout(() => {
              d.value = !1;
            }, 300));
        },
        re = () => {
          ((r.value = !0), H());
        },
        ue = () => {
          ((r.value = !0), ce());
        },
        O = () => {
          const e = document.querySelector(".slide.active"),
            i = window == null ? void 0 : window.getComputedStyle(e),
            l = document.querySelectorAll(".slide:not(.active)");
          return (
            e.clientWidth + parseFloat(i.marginRight) + I() * (l.length - 1)
          );
        },
        I = () => {
          const e = document.querySelector(".slide:not(.active)"),
            i = window == null ? void 0 : window.getComputedStyle(e);
          return e.clientWidth + parseFloat(i.marginRight);
        },
        de = () => {
          const e = document.querySelector(".slide.active"),
            i = window == null ? void 0 : window.getComputedStyle(e);
          return e.clientWidth + parseFloat(i.marginRight);
        };
      return (e, i) => {
        var J, Z, G, K;
        const l = Te,
          g = ie,
          A = oe,
          S = Ae,
          W = We,
          _e = se,
          pe = he;
        return (
          m(),
          h("div", Ke, [
            n("div", Qe, [
              (J = c.listNews) != null && J.length
                ? (m(),
                  h("div", et, [
                    n("div", tt, [
                      n(
                        "div",
                        { ref_key: "listSlideRef", ref: f, class: "w-full" },
                        [
                          n("div", nt, [
                            (m(!0),
                            h(
                              B,
                              null,
                              V(c.listNews, (v, k) => {
                                var T, Q;
                                return (
                                  m(),
                                  h(
                                    "div",
                                    {
                                      class: D([
                                        "slide",
                                        { active: k === t(o) },
                                      ]),
                                      ref_for: !0,
                                      ref: (ve) => {
                                        t(a)[k] = ve;
                                      },
                                    },
                                    [
                                      u(
                                        l,
                                        {
                                          class: "w-full h-full object-cover",
                                          src:
                                            (T = (
                                              "getFieldWithLocale" in e
                                                ? e.getFieldWithLocale
                                                : t(b)
                                            )(v, "pictureThumbnail")) == null
                                              ? void 0
                                              : T.url,
                                          alt:
                                            (Q = (
                                              "getFieldWithLocale" in e
                                                ? e.getFieldWithLocale
                                                : t(b)
                                            )(v, "pictureThumbnail")) == null
                                              ? void 0
                                              : Q.alt,
                                          loading: "lazy",
                                          sizes: "sm:80vw md:60vw",
                                        },
                                        null,
                                        8,
                                        ["src", "alt"],
                                      ),
                                      n("div", at, [
                                        u(
                                          g,
                                          {
                                            to: e.localePath(
                                              `/news-event/news/${v.alias}`,
                                            ),
                                            "aria-label":
                                              v == null ? void 0 : v.headline,
                                          },
                                          {
                                            default: $(() => [
                                              u(t(Ge), {
                                                class: "h-1/2 cursor-pointer",
                                              }),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["to", "aria-label"],
                                        ),
                                      ]),
                                    ],
                                    2,
                                  )
                                );
                              }),
                              256,
                            )),
                          ]),
                          n(
                            "div",
                            {
                              ref_key: "navigationRef",
                              ref: s,
                              class: "navigation-btn-wrapper mt-4 lg:mt-5",
                            },
                            [
                              n(
                                "div",
                                {
                                  class: "navigation-btn prev-btn",
                                  onClick: ue,
                                },
                                [u(t(ne), { class: "arrow-icon" })],
                              ),
                              n(
                                "div",
                                {
                                  class: "navigation-btn next-btn",
                                  onClick: re,
                                },
                                [u(t(ne), { class: "arrow-icon" })],
                              ),
                            ],
                            512,
                          ),
                        ],
                        512,
                      ),
                      n(
                        "div",
                        {
                          ref_key: "activeSlideRef",
                          ref: p,
                          class: "active-item-content absolute",
                        },
                        [
                          n("h2", ot, [
                            u(
                              g,
                              {
                                to: e.localePath(
                                  `/news-event/news/${(G = (Z = c.listNews) == null ? void 0 : Z[t(o)]) == null ? void 0 : G.alias}`,
                                ),
                                target: "_blank",
                              },
                              {
                                default: $(() => {
                                  var v;
                                  return [
                                    Se(
                                      C(
                                        ("getFieldWithLocale" in e
                                          ? e.getFieldWithLocale
                                          : t(b))(
                                          (v = c.listNews) == null
                                            ? void 0
                                            : v[t(o)],
                                          "headline",
                                        ),
                                      ),
                                      1,
                                    ),
                                  ];
                                }),
                                _: 1,
                              },
                              8,
                              ["to"],
                            ),
                          ]),
                          n("div", st, [
                            u(
                              A,
                              {
                                content: ("getFieldWithLocale" in e
                                  ? e.getFieldWithLocale
                                  : t(b))(
                                  (K = c.listNews) == null ? void 0 : K[t(o)],
                                  "description",
                                ),
                              },
                              null,
                              8,
                              ["content"],
                            ),
                          ]),
                        ],
                        512,
                      ),
                    ]),
                    n("div", it, [
                      u(
                        W,
                        {
                          "resize-observer": "",
                          class: "mobile-list-slide !pb-16",
                          breakpoints: {
                            200: { slidesPerView: 1.1, spaceBetween: 16 },
                            450: { slidesPerView: 1.5, spaceBetween: 24 },
                            576: { slidesPerView: 1.8, spaceBetween: 24 },
                            768: { slidesPerView: 2.2, spaceBetween: 28 },
                          },
                          loop: !0,
                          autoplay: { delay: 3e3, disableOnInteraction: !1 },
                          pagination: { clickable: !0 },
                          modules: [
                            "SwiperPagination" in e
                              ? e.SwiperPagination
                              : t(Fe),
                            "SwiperAutoplay" in e ? e.SwiperAutoplay : t(Ie),
                          ],
                        },
                        {
                          default: $(() => [
                            (m(!0),
                            h(
                              B,
                              null,
                              V(
                                c.listNews,
                                (v) => (
                                  m(),
                                  M(
                                    S,
                                    null,
                                    {
                                      default: $(() => [
                                        u(
                                          g,
                                          {
                                            class: "mobile-slide-item",
                                            to: e.localePath(
                                              `/news-event/news/${v == null ? void 0 : v.alias}`,
                                            ),
                                          },
                                          {
                                            default: $(() => {
                                              var k, T;
                                              return [
                                                u(
                                                  l,
                                                  {
                                                    src:
                                                      (k = (
                                                        "getFieldWithLocale" in
                                                          e
                                                          ? e.getFieldWithLocale
                                                          : t(b)
                                                      )(
                                                        v,
                                                        "pictureThumbnail",
                                                      )) == null
                                                        ? void 0
                                                        : k.url,
                                                    alt:
                                                      (T = (
                                                        "getFieldWithLocale" in
                                                          e
                                                          ? e.getFieldWithLocale
                                                          : t(b)
                                                      )(
                                                        v,
                                                        "pictureThumbnail",
                                                      )) == null
                                                        ? void 0
                                                        : T.alt,
                                                    loading: "lazy",
                                                    sizes: "sm:90vw md:60vw",
                                                  },
                                                  null,
                                                  8,
                                                  ["src", "alt"],
                                                ),
                                                n("div", lt, [
                                                  n(
                                                    "h2",
                                                    null,
                                                    C(
                                                      ("getFieldWithLocale" in e
                                                        ? e.getFieldWithLocale
                                                        : t(b))(v, "headline"),
                                                    ),
                                                    1,
                                                  ),
                                                ]),
                                              ];
                                            }),
                                            _: 2,
                                          },
                                          1032,
                                          ["to"],
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1024,
                                  )
                                ),
                              ),
                              256,
                            )),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modules"],
                      ),
                      n("div", ct, [
                        u(
                          g,
                          {
                            to: e.localePath(
                              `/news-event/news?category=${t(F).toLowerCase()}-${t(L).query.type}`,
                            ),
                          },
                          {
                            default: $(() => [
                              u(
                                _e,
                                { type: "primary", arrow: "" },
                                {
                                  default: $(() => [
                                    n(
                                      "span",
                                      rt,
                                      C(e.$t("common.read_all_news")),
                                      1,
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["to"],
                        ),
                      ]),
                    ]),
                  ]))
                : (m(), M(pe, { key: 1 })),
            ]),
          ])
        );
      };
    },
  });
const Wt = X(ut, [["__scopeId", "data-v-1e840493"]]),
  dt = { class: "student-experience__news__menu flex" },
  _t = ["onClick"],
  pt = { class: "student-experience__news__menu flex items-center" },
  vt = j({
    __name: "Tab",
    setup(c) {
      const L = ye(),
        F = z(),
        { t: o } = we(),
        f = q(() => [
          { title: o("faculty_activity_news.title"), type: "activity" },
          { title: o("faculty_recruitment_news.title"), type: "recruitment" },
        ]),
        p = q(() => F.query.type),
        s = w(!1);
      ae(() => {
        document.addEventListener("scroll", () => {
          window.scrollY > 0 && (s.value = !0);
        });
      });
      const a = (d) => {
        L.push({ query: { ...F.query, type: d == null ? void 0 : d.type } });
      };
      return (d, y) => {
        const r = Re;
        return Ce(
          d.$slots,
          "default",
          {},
          () => [
            u(r, null, {
              fallback: $(() => [
                n("div", pt, [
                  (m(!0),
                  h(
                    B,
                    null,
                    V(
                      t(f),
                      (_) => (
                        m(),
                        h(
                          "div",
                          {
                            key: _.type,
                            class: "student-experience__news__menu-item",
                          },
                          [n("span", null, C(_.title), 1)],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
              default: $(() => [
                (m(),
                M(
                  Ne,
                  { to: "#extra", disabled: !t(s) },
                  [
                    n("div", dt, [
                      (m(!0),
                      h(
                        B,
                        null,
                        V(
                          t(f),
                          (_) => (
                            m(),
                            h(
                              "div",
                              {
                                class: D([
                                  "student-experience__news__menu-item flex-1",
                                  { active: _.type === t(p) },
                                ]),
                              },
                              [
                                n(
                                  "span",
                                  { onClick: (N) => a(_) },
                                  C(_.title),
                                  9,
                                  _t,
                                ),
                              ],
                              2,
                            )
                          ),
                        ),
                        256,
                      )),
                    ]),
                  ],
                  8,
                  ["disabled"],
                )),
              ]),
              _: 1,
            }),
          ],
          !0,
        );
      };
    },
  });
const Ct = X(vt, [["__scopeId", "data-v-28f5b8dc"]]);
export { At as _, Wt as a, Ct as b, It as u };
