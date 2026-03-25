import { _ as n } from "./NuxtImg.vue.916c2d60.js";
import { b_ as _, L as l, _ as r } from "./entry.8aa394d7.js";
import {
  j as p,
  Q as d,
  R as u,
  Y as c,
  V as m,
  z as g,
  u as t,
} from "./swiper-vue.d5cda4d1.js";
const f = { class: "app-title-logo relative" },
  h = { class: "section-title" },
  L = { class: "logo" },
  v = p({
    __name: "AppTitleLogo",
    setup(F) {
      const { generalInformation: o } = _();
      return (e, y) => {
        var s, a;
        const i = n;
        return (
          d(),
          u("div", f, [
            c("h2", h, [m(e.$slots, "default", {}, void 0, !0)]),
            c("div", L, [
              g(
                i,
                {
                  src:
                    (s = (
                      "getFieldWithLocale" in e ? e.getFieldWithLocale : t(l)
                    )(t(o), "pictureFacultyLogo")) == null
                      ? void 0
                      : s.url,
                  alt:
                    (a = (
                      "getFieldWithLocale" in e ? e.getFieldWithLocale : t(l)
                    )(t(o), "pictureFacultyLogo")) == null
                      ? void 0
                      : a.alt,
                  loading: "lazy",
                  sizes: "sm:20vw md:15vw",
                },
                null,
                8,
                ["src", "alt"]
              ),
            ]),
          ])
        );
      };
    },
  });
const I = r(v, [["__scopeId", "data-v-f97399ec"]]);
export { I as _ };
