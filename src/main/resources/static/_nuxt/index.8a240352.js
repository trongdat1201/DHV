import {
  _ as I,
  a as S,
  b as A,
  c as N,
  d as $,
  u as h,
} from "./Sidebar.0b72a571.js";
import { _ as s, Q as m } from "./entry.8aa394d7.js";
import {
  Q as r,
  a0 as o,
  a4 as _,
  a5 as i,
  j as C,
  al as y,
  R as x,
  z as d,
  u as t,
  Y as l,
  _ as p,
  F as z,
} from "./swiper-vue.d5cda4d1.js";
import { _ as H } from "./AppBreadcrumb.vue.7e47a49f.js";
import { H as G, G as U, A as b } from "./constant.9400de67.js";
import "./index.92524a9b.js";
import "./transform-translate-faculty.c0e2ceae.js";
import "./IFaculty.97f6e59d.js";
import "./JsonContent.828a79a5.js";
import "./NuxtImg.vue.916c2d60.js";
import "./nuxt-link.58f89fff.js";
import "./client-only.42178d49.js";
import "./breakpoints-screen.85b51075.js";
import "./index.97fcacb7.js";
import "./AppBreadcrumb.73e131db.js";
import "./breadcrumb.bc5fa9d7.js";
const F = {};
function v(n, a) {
  const e = I;
  return r(), o(e, _(i(n.$attrs)), null, 16);
}
const E = s(F, [["render", v]]),
  P = {};
function k(n, a) {
  const e = S;
  return r(), o(e, _(i(n.$attrs)), null, 16);
}
const w = s(P, [["render", k]]),
  B = {};
function D(n, a) {
  const e = A;
  return r(), o(e, _(i(n.$attrs)), null, 16);
}
const Z = s(B, [["render", D]]),
  L = {};
function M(n, a) {
  const e = N;
  return r(), o(e, _(i(n.$attrs)), null, 16);
}
const V = s(L, [["render", M]]),
  Q = {};
function W(n, a) {
  const e = $;
  return r(), o(e, _(i(n.$attrs)), null, 16);
}
const j = s(Q, [["render", W]]),
  Y = { class: "hr-organizational-structure" },
  q = { class: "container flex flex-col lg:flex-row !mt-9 lg:!mt-11 gap-14" },
  J = { class: "hr-organizational-structure__sidebar w-full lg:w-2/6" },
  ft = C({
    __name: "index",
    async setup(n) {
      let a, e;
      const {
        mainBody: g,
        pageData: O,
        activeSection: c,
        handleChangeSection: T,
        getSectionByType: u,
      } = (([a, e] = y(() => h())), (a = await a), e(), a);
      return (R, K) => {
        var f;
        return (
          r(),
          x(
            z,
            null,
            [
              d(
                H,
                {
                  "extra-last-breadcrumb": [
                    {
                      name: R.$t(
                        `${
                          (f = t(c)) == null ? void 0 : f.replaceAll("-", "_")
                        }.title`
                      ),
                    },
                  ],
                },
                null,
                8,
                ["extra-last-breadcrumb"]
              ),
              l("div", Y, [
                d(E, { data: t(O) }, null, 8, ["data"]),
                l("div", q, [
                  l("div", J, [
                    d(
                      j,
                      { "active-section": t(c), onChangeSection: t(T) },
                      null,
                      8,
                      ["active-section", "onChangeSection"]
                    ),
                  ]),
                  l(
                    "div",
                    {
                      ref_key: "mainBody",
                      ref: g,
                      class: "hr-organizational-structure__main-body flex-1",
                    },
                    [
                      t(c) === t(G)
                        ? (r(),
                          o(
                            V,
                            {
                              key: 0,
                              data: t(u)(
                                t(m)
                                  .HR_ORGANIZATIONAL_STRUCTURE_ORGANIZATION_STRUCTURE
                              ),
                            },
                            null,
                            8,
                            ["data"]
                          ))
                        : p("", !0),
                      t(c) === t(U)
                        ? (r(),
                          o(
                            Z,
                            {
                              key: 1,
                              data: t(u)(
                                t(m)
                                  .HR_ORGANIZATIONAL_STRUCTURE_GROWTH_DIRECTION
                              ),
                            },
                            null,
                            8,
                            ["data"]
                          ))
                        : p("", !0),
                      t(c) === t(b)
                        ? (r(),
                          o(
                            w,
                            {
                              key: 2,
                              data: t(u)(
                                t(m)
                                  .HR_ORGANIZATIONAL_STRUCTURE_ADMISSION_INFORMATION
                              ),
                            },
                            null,
                            8,
                            ["data"]
                          ))
                        : p("", !0),
                    ],
                    512
                  ),
                ]),
              ]),
            ],
            64
          )
        );
      };
    },
  });
export { ft as default };
