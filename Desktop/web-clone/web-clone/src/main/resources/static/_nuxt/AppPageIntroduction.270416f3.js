import { b_ as _, L as n, _ as u } from "./entry.8aa394d7.js";
import {
  j as g,
  Q as c,
  R as r,
  Y as t,
  u as o,
  _ as p,
  V as l,
} from "./swiper-vue.d5cda4d1.js";
const f = {
    class:
      "faculty-page-introduction__container flex flex-col lg:flex-row relative",
  },
  h = {
    key: 0,
    class:
      "absolute top-0 left-0 -translate-x-1/2 hidden lg:block bg-logo opacity-5",
  },
  m = ["src", "alt"],
  v = {
    class:
      "faculty-page-introduction__left relative container lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 !order-2 lg:!order-1",
  },
  y = { class: "w-full lg:w-[45%]" },
  L = { class: "title font-unbounded" },
  w = { class: "description" },
  F = {
    class:
      "faculty-page-introduction__right ml-auto w-full order-1 lg:w-1/2 lg:!order-2",
  },
  b = g({
    __name: "AppPageIntroduction",
    props: {
      data: { type: Object, default: () => {} },
      showLogo: { type: Boolean, default: !1 },
    },
    setup(d) {
      const { generalInformation: a } = _();
      return (e, I) => {
        var s, i;
        return (
          c(),
          r("div", f, [
            d.showLogo
              ? (c(),
                r("div", h, [
                  t(
                    "img",
                    {
                      class: "w-full h-full",
                      src:
                        (s = (
                          "getFieldWithLocale" in e
                            ? e.getFieldWithLocale
                            : o(n)
                        )(o(a), "pictureFacultyLogo")) == null
                          ? void 0
                          : s.url,
                      alt:
                        (i = (
                          "getFieldWithLocale" in e
                            ? e.getFieldWithLocale
                            : o(n)
                        )(o(a), "pictureFacultyLogo")) == null
                          ? void 0
                          : i.alt,
                      loading: "lazy",
                    },
                    null,
                    8,
                    m
                  ),
                ]))
              : p("", !0),
            t("div", v, [
              t("div", y, [
                t("h1", L, [l(e.$slots, "title", {}, void 0, !0)]),
                t("div", w, [l(e.$slots, "description", {}, void 0, !0)]),
              ]),
            ]),
            t("div", F, [l(e.$slots, "introductionImg", {}, void 0, !0)]),
          ])
        );
      };
    },
  });
const B = u(b, [["__scopeId", "data-v-991a83c4"]]);
export { B as _ };
