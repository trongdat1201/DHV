import { _ as $, a as w, b as g, u as b } from "./Tab.2bf50001.js";
import { _ as h } from "./AppBreadcrumb.vue.b9aa66bd.js";
import { _ as c } from "./entry.8aa394d7.js";
import {
  Q as o,
  a0 as a,
  a4 as i,
  a5 as _,
  j as N,
  al as k,
  R as m,
  z as s,
  u as r,
  Y as v,
  F,
} from "./swiper-vue.d5cda4d1.js";
import { S as P } from "./index.010e93e7.js";
import "./list.70e6673c.js";
import "./omitBy.06454d55.js";
import "./_baseIteratee.825e9cf8.js";
import "./_baseIsEqual.42871e3f.js";
import "./index.92524a9b.js";
import "./AppCircleBg.a727b718.js";
import "./circle-bg.50b04251.js";
import "./JsonContent.828a79a5.js";
import "./AppButton.be7bd59a.js";
import "./btn-arrow.5abf483c.js";
import "./index.164d0fc2.js";
import "./isVisible.48fa23e0.js";
import "./compact-item.8109a539.js";
import "./devWarning.0cb68424.js";
import "./nuxt-link.58f89fff.js";
import "./NuxtImg.vue.916c2d60.js";
import "./client-only.42178d49.js";
import "./AppBreadcrumb.73e131db.js";
import "./breadcrumb.bc5fa9d7.js";
import "./transform-translate-faculty.c0e2ceae.js";
import "./IFaculty.97f6e59d.js";
const S = {};
function T(n, e) {
  const t = $;
  return (o(), a(t, i(_(n.$attrs)), null, 16));
}
const C = c(S, [["render", T]]),
  A = {};
function B(n, e) {
  const t = w;
  return (o(), a(t, i(_(n.$attrs)), null, 16));
}
const E = c(A, [["render", B]]),
  R = {};
function I(n, e) {
  const t = g;
  return (o(), a(t, i(_(n.$attrs)), null, 16));
}
const L = c(R, [["render", I]]),
  j = { class: "student-experience__news-container" },
  z = { key: 0, class: "flex justify-center" },
  lt = N({
    __name: "index",
    async setup(n) {
      let e, t;
      const {
        activeArticleList: p,
        loadingRef: l,
        activeType: u,
        pageInfo: f,
        route: d,
      } = (([e, t] = k(() => b())), (e = await e), t(), e);
      return (y, V) => {
        const x = P;
        return (
          o(),
          m(
            F,
            null,
            [
              s(
                h,
                {
                  "extra-last-breadcrumb": [
                    { name: y.$t(`faculty_${r(u)}_news.title_link`) },
                  ],
                },
                null,
                8,
                ["extra-last-breadcrumb"],
              ),
              v("div", j, [
                s(L),
                s(C, { "page-info": r(f) }, null, 8, ["page-info"]),
                r(l)
                  ? (o(), m("div", z, [s(x, { class: "my-40" })]))
                  : (o(),
                    a(E, { key: r(d).query.type, "list-news": r(p) }, null, 8, [
                      "list-news",
                    ])),
              ]),
            ],
            64,
          )
        );
      };
    },
  });
export { lt as default };
