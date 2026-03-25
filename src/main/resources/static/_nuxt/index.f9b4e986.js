import { _ as g, a as b, b as h, u as N } from "./Tab.2bf50001.js";
import { _ as k } from "./AppBreadcrumb.vue.8bbea466.js";
import { _ as c } from "./entry.8aa394d7.js";
import {
  Q as o,
  a0 as a,
  a4 as i,
  a5 as _,
  j as v,
  al as F,
  R as l,
  z as s,
  u as r,
  Y as P,
  F as S,
} from "./swiper-vue.d5cda4d1.js";
import { S as T } from "./index.010e93e7.js";
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
const C = {};
function A(n, e) {
  const t = g;
  return (o(), a(t, i(_(n.$attrs)), null, 16));
}
const B = c(C, [["render", A]]),
  E = {};
function R(n, e) {
  const t = b;
  return (o(), a(t, i(_(n.$attrs)), null, 16));
}
const I = c(E, [["render", R]]),
  L = {};
function j(n, e) {
  const t = h;
  return (o(), a(t, i(_(n.$attrs)), null, 16));
}
const z = c(L, [["render", j]]),
  V = { class: "student-experience__news-container" },
  q = { key: 0, class: "flex justify-center" },
  ft = v({
    __name: "index",
    async setup(n) {
      let e, t;
      const {
        activeArticleList: u,
        loadingRef: f,
        activeType: d,
        pageInfo: y,
        route: x,
      } = (([e, t] = F(() => N())), (e = await e), t(), e);
      return ($, Q) => {
        var m, p;
        const w = T;
        return (
          o(),
          l(
            S,
            null,
            [
              s(
                k,
                {
                  "extra-last-breadcrumb": [
                    { name: $.$t(`faculty_${r(d)}_news.title_link`) },
                  ],
                },
                null,
                8,
                ["extra-last-breadcrumb"],
              ),
              P("div", V, [
                s(z),
                s(B, { "page-info": r(y) }, null, 8, ["page-info"]),
                r(f)
                  ? (o(), l("div", q, [s(w, { class: "my-40" })]))
                  : (o(),
                    a(
                      I,
                      {
                        key:
                          (p = (m = r(x)) == null ? void 0 : m.query) == null
                            ? void 0
                            : p.type,
                        "list-news": r(u),
                      },
                      null,
                      8,
                      ["list-news"],
                    )),
              ]),
            ],
            64,
          )
        );
      };
    },
  });
export { ft as default };
