import { _ as w } from "./nuxt-link.58f89fff.js";
import { _ as x } from "./client-only.42178d49.js";
import { u as g } from "./breadcrumb.bc5fa9d7.js";
import { A as f } from "./arrow-two-color.11c559b9.js";
import {
  j as A,
  a as L,
  y as C,
  b as N,
  o as P,
  Q as e,
  a0 as u,
  S as s,
  Y as r,
  z as m,
  u as a,
  W as i,
  X as c,
  R as n,
  a2 as h,
  F as _,
  M as $,
} from "./swiper-vue.d5cda4d1.js";
import { _ as M } from "./entry.8aa394d7.js";
const T = { class: "breadcrumb-wrapper" },
  V = { class: "breadcrumb container" },
  Y = { class: "icon" },
  F = {
    key: 1,
    class: "last-breadcrumb custom-breadcrumb-item cursor-default",
  },
  S = { class: "breadcrumb-wrapper" },
  j = { class: "breadcrumb container" },
  z = { class: "icon" },
  D = { key: 1, class: "last-breadcrumb custom-breadcrumb-item" },
  E = A({
    __name: "AppBreadcrumb",
    props: { extraLastBreadcrumb: { type: Array, default: () => [] } },
    setup(k) {
      const y = k,
        { breadcrumbs: l, extraLastBreadcrumbs: v } = g(),
        p = L(!1);
      return (
        C(() => {
          ((p.value = window.scrollY > 0),
            (document.body.onscroll = () => {
              window.scrollY > 0 && (p.value = !0);
            }));
        }),
        N(
          () => y.extraLastBreadcrumb,
          (t) => {
            v.value = t;
          },
          { immediate: !0 },
        ),
        P(() => {
          document.body.onscroll = null;
        }),
        (t, I) => {
          const d = w,
            B = x;
          return (
            e(),
            u(B, null, {
              fallback: s(() => [
                r("div", S, [
                  r("div", j, [
                    r("div", z, [m(a(f))]),
                    m(
                      d,
                      {
                        to: t.localePath("/"),
                        class: "custom-breadcrumb-item",
                      },
                      {
                        default: s(() => [i(c(t.$t("home.title_link")), 1)]),
                        _: 1,
                      },
                      8,
                      ["to"],
                    ),
                    (e(!0),
                    n(
                      _,
                      null,
                      h(
                        a(l),
                        (o, b) => (
                          e(),
                          n(
                            _,
                            { key: o.name },
                            [
                              b !== a(l).length - 1
                                ? (e(),
                                  u(
                                    d,
                                    {
                                      key: 0,
                                      to: t.localePath(o.link),
                                      class:
                                        "custom-breadcrumb-item cursor-pointer",
                                    },
                                    {
                                      default: s(() => [i(c(o.name), 1)]),
                                      _: 2,
                                    },
                                    1032,
                                    ["to"],
                                  ))
                                : (e(), n("div", D, c(t.lastBreadcrumb), 1)),
                            ],
                            64,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
              ]),
              default: s(() => [
                (e(),
                u(
                  $,
                  { to: "#breadcrumb", disabled: !a(p) },
                  [
                    r("div", T, [
                      r("div", V, [
                        r("div", Y, [m(a(f))]),
                        m(
                          d,
                          {
                            to: t.localePath("/"),
                            class: "custom-breadcrumb-item",
                          },
                          {
                            default: s(() => [
                              i(c(t.$t("home.title_link")), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["to"],
                        ),
                        (e(!0),
                        n(
                          _,
                          null,
                          h(
                            a(l),
                            (o, b) => (
                              e(),
                              n(
                                _,
                                { key: o.name },
                                [
                                  b !== a(l).length - 1
                                    ? (e(),
                                      u(
                                        d,
                                        {
                                          key: 0,
                                          to: t.localePath(o.link),
                                          class:
                                            "custom-breadcrumb-item cursor-pointer",
                                        },
                                        {
                                          default: s(() => [i(c(o.name), 1)]),
                                          _: 2,
                                        },
                                        1032,
                                        ["to"],
                                      ))
                                    : (e(), n("div", F, c(o.name), 1)),
                                ],
                                64,
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                    ]),
                  ],
                  8,
                  ["disabled"],
                )),
              ]),
              _: 1,
            })
          );
        }
      );
    },
  });
const q = M(E, [["__scopeId", "data-v-74cbc0dc"]]);
export { q as _ };
