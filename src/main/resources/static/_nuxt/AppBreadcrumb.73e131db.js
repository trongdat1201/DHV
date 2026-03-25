import { _ as v } from "./nuxt-link.58f89fff.js";
import { _ as x } from "./client-only.42178d49.js";
import { u as w } from "./breadcrumb.bc5fa9d7.js";
import {
  j as g,
  a as A,
  y as L,
  b as N,
  o as V,
  Q as e,
  a0 as u,
  S as s,
  Y as m,
  z as b,
  W as d,
  X as o,
  R as r,
  F as i,
  a2 as f,
  u as n,
  M as $,
  V as C,
} from "./swiper-vue.d5cda4d1.js";
import { _ as M } from "./entry.8aa394d7.js";
const S = { class: "breadcrumb-wrapper" },
  F = { class: "breadcrumb container" },
  P = { key: 1, class: "last-breadcrumb custom-breadcrumb-item" },
  T = { class: "breadcrumb-wrapper" },
  Y = { class: "breadcrumb container" },
  j = { key: 1, class: "last-breadcrumb custom-breadcrumb-item" },
  z = g({
    __name: "AppBreadcrumb",
    props: { extraLastBreadcrumb: { type: Array, default: () => [] } },
    setup(h) {
      const k = h,
        { breadcrumbs: c, extraLastBreadcrumbs: y } = w(),
        p = A(!1);
      return (
        L(() => {
          document.body.onscroll = (a) => {
            window.scrollY > 0 && (p.value = !0);
          };
        }),
        N(
          () => k.extraLastBreadcrumb,
          (a) => {
            y.value = a;
          },
          { immediate: !0 }
        ),
        V(() => {
          document.body.onscroll = null;
        }),
        (a, D) => {
          const l = v,
            B = x;
          return (
            e(),
            u(B, null, {
              fallback: s(() => [
                m("div", T, [
                  m("div", Y, [
                    b(
                      l,
                      {
                        to: a.localePath("/"),
                        class: "custom-breadcrumb-item",
                      },
                      {
                        default: s(() => [d(o(a.$t("home.title_link")), 1)]),
                        _: 1,
                      },
                      8,
                      ["to"]
                    ),
                    (e(!0),
                    r(
                      i,
                      null,
                      f(
                        n(c),
                        (t, _) => (
                          e(),
                          r(
                            i,
                            { key: t.name },
                            [
                              _ !== n(c).length - 1
                                ? (e(),
                                  u(
                                    l,
                                    {
                                      key: 0,
                                      to: a.localePath(t.link),
                                      class:
                                        "custom-breadcrumb-item cursor-pointer",
                                    },
                                    {
                                      default: s(() => [d(o(t.name), 1)]),
                                      _: 2,
                                    },
                                    1032,
                                    ["to"]
                                  ))
                                : (e(), r("div", j, o(t.name), 1)),
                            ],
                            64
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
              default: s(() => [
                (e(),
                u(
                  $,
                  { to: "#breadcrumb", disabled: !n(p) },
                  [
                    C(
                      a.$slots,
                      "default",
                      {},
                      () => [
                        m("div", S, [
                          m("div", F, [
                            b(
                              l,
                              { to: "/", class: "custom-breadcrumb-item" },
                              {
                                default: s(() => [
                                  d(o(a.$t("home.title_link")), 1),
                                ]),
                                _: 1,
                              }
                            ),
                            (e(!0),
                            r(
                              i,
                              null,
                              f(
                                n(c),
                                (t, _) => (
                                  e(),
                                  r(
                                    i,
                                    { key: t.name },
                                    [
                                      _ !== n(c).length - 1
                                        ? (e(),
                                          u(
                                            l,
                                            {
                                              key: 0,
                                              to: t.link,
                                              class:
                                                "custom-breadcrumb-item cursor-pointer",
                                            },
                                            {
                                              default: s(() => [
                                                d(o(t.name), 1),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["to"]
                                          ))
                                        : (e(), r("div", P, o(t.name), 1)),
                                    ],
                                    64
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]),
                      ],
                      !0
                    ),
                  ],
                  8,
                  ["disabled"]
                )),
              ]),
              _: 3,
            })
          );
        }
      );
    },
  });
const U = M(z, [["__scopeId", "data-v-cdba5f9f"]]);
export { U as A };
