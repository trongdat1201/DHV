import {
  j as y,
  k as h,
  u as t,
  Q as o,
  R as d,
  z as i,
  S as m,
  F as A,
  a2 as k,
  a0 as N,
  Y as r,
  am as P,
  an as E,
  ao as I,
  _ as T,
  ap as U,
  aq as C,
} from "./swiper-vue.d5cda4d1.js";
import {
  D as F,
  bK as R,
  u as L,
  a0 as g,
  a1 as V,
  _ as W,
} from "./entry.8aa394d7.js";
import { R as v } from "./chevron-right.7cc4ed2d.js";
const $ = { key: 0, class: "hung-vuong-banner" },
  x = ["src", "alt"],
  z = { id: "bannerPrevBtn", class: "navigation-btn prev" },
  D = { id: "bannerNextBtn", class: "navigation-btn next" },
  O = y({
    __name: "AppBanner",
    props: {
      banners: { type: Array, default: () => [] },
      useOriginalImage: { type: Boolean, default: !1 },
    },
    setup(l) {
      var u, c;
      const p = l,
        { locale: f } = F(),
        B = V(),
        s = h(() => {
          const e = f.value === "en" ? "pictureBanner_en" : "pictureBanner";
          return p.banners
            ? p.banners
                .filter((n) => n[`${e}`])
                .map((n) => ({ ...n[`${e}`], url: R(n[`${e}`]) }))
            : [];
        });
      return (
        (u = s.value) != null &&
          u.length &&
          L({
            link: [
              {
                rel: "preload",
                href: g((c = s.value[0]) == null ? void 0 : c.url),
                as: "image",
              },
            ],
          }),
        (e, n) => {
          var _;
          const w = U,
            S = C;
          return (_ = t(s)) != null && _.length
            ? (o(),
              d("div", $, [
                i(
                  S,
                  {
                    "slides-per-view": "1",
                    "resize-observer": "",
                    pagination: { clickable: !0 },
                    modules: [
                      "SwiperNavigation" in e ? e.SwiperNavigation : t(P),
                      "SwiperPagination" in e ? e.SwiperPagination : t(E),
                      "SwiperAutoplay" in e ? e.SwiperAutoplay : t(I),
                    ],
                    navigation: {
                      nextEl: "#bannerNextBtn",
                      prevEl: "#bannerPrevBtn",
                    },
                    autoplay: { delay: 3e3 },
                  },
                  {
                    default: m(() => [
                      (o(!0),
                      d(
                        A,
                        null,
                        k(
                          t(s),
                          (a) => (
                            o(),
                            N(
                              w,
                              { key: a },
                              {
                                default: m(() => [
                                  r(
                                    "img",
                                    {
                                      class: "w-full",
                                      src: l.useOriginalImage
                                        ? a == null
                                          ? void 0
                                          : a.url
                                        : ("convertUrlToWebp" in e
                                            ? e.convertUrlToWebp
                                            : t(g))(a == null ? void 0 : a.url),
                                      alt:
                                        (a == null ? void 0 : a.alt) ||
                                        t(B).public.DEFAULT_ALT_IMAGE,
                                    },
                                    null,
                                    8,
                                    x,
                                  ),
                                ]),
                                _: 2,
                              },
                              1024,
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modules"],
                ),
                r("div", z, [i(t(v))]),
                r("div", D, [i(t(v))]),
              ]))
            : T("", !0);
        }
      );
    },
  });
const G = W(O, [["__scopeId", "data-v-9c58ff29"]]);
export { G as _ };
