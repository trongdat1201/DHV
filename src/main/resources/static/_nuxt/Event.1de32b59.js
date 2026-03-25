import { _ as D } from "./NuxtImg.vue.916c2d60.js";
import { _ as y } from "./nuxt-link.58f89fff.js";
import { u as L } from "./list.70e6673c.js";
import { N as A, L as r, bG as p, _ as w } from "./entry.8aa394d7.js";
import { A as F } from "./arrow-two-color.11c559b9.js";
import { C as Y } from "./calendar.0a3d87d0.js";
import { A as N } from "./IArticle.feadee52.js";
import {
  j as W,
  al as C,
  Q as o,
  R as c,
  Y as s,
  z as i,
  u as a,
  X as n,
  F as k,
  a2 as E,
  a0 as T,
  S as V,
  W as B,
  _ as M,
} from "./swiper-vue.d5cda4d1.js";
const S = { class: "sidebar-event" },
  x = { class: "flex items-center sidebar-title" },
  z = { class: "uppercase font-bold mb-0" },
  I = { class: "list-event" },
  $ = { class: "sidebar-event-item__title" },
  H = { class: "flex items-center mb-1" },
  j = { class: "mb-0 capitalize date" },
  G = { key: 0 },
  K = { class: "text mb-0" },
  P = W({
    __name: "Event",
    props: { title: { type: String, default: "" } },
    async setup(u) {
      let l, _;
      const { activeArticleList: h, getActiveArticleList: f } = L(),
        { refetch: v } = f({ type: N.EVENTS, outstanding: !0 });
      return (
        ([l, _] = C(async () =>
          A(async () => {
            await v();
          }, "$Ke9ykm3EAn")
        )),
        await l,
        _(),
        (t, Q) => {
          const b = D,
            g = y;
          return (
            o(),
            c("div", S, [
              s("div", x, [
                i(a(F), { class: "mr-2" }),
                s("h2", z, n(u.title), 1),
              ]),
              s("div", I, [
                (o(!0),
                c(
                  k,
                  null,
                  E(
                    a(h),
                    (e) => (
                      o(),
                      T(
                        g,
                        {
                          to: t.localePath(
                            `/news-event/event/${e == null ? void 0 : e.alias}`
                          ),
                          class: "sidebar-event-item",
                        },
                        {
                          default: V(() => {
                            var d, m;
                            return [
                              i(
                                b,
                                {
                                  src:
                                    (d = (
                                      "getFieldWithLocale" in t
                                        ? t.getFieldWithLocale
                                        : a(r)
                                    )(e, "pictureThumbnail")) == null
                                      ? void 0
                                      : d.url,
                                  class:
                                    "sidebar-event-item__image custom-shadow",
                                  alt:
                                    (m = (
                                      "getFieldWithLocale" in t
                                        ? t.getFieldWithLocale
                                        : a(r)
                                    )(e, "pictureThumbnail")) == null
                                      ? void 0
                                      : m.alt,
                                  sizes: "sm:40vw md:30vw",
                                },
                                null,
                                8,
                                ["src", "alt"]
                              ),
                              s("div", $, [
                                s("div", H, [
                                  i(a(Y), { class: "mr-2" }),
                                  s("span", j, [
                                    B(
                                      n(
                                        ("formatDate" in t
                                          ? t.formatDate
                                          : a(p))(
                                          e == null ? void 0 : e.startDate,
                                          "H:mm, dd DD/MM/YYYY"
                                        )
                                      ) + " ",
                                      1
                                    ),
                                    e != null && e.endDate
                                      ? (o(),
                                        c(
                                          "span",
                                          G,
                                          " - " +
                                            n(
                                              ("formatDate" in t
                                                ? t.formatDate
                                                : a(p))(
                                                e == null ? void 0 : e.endDate,
                                                "H:mm, dd DD/MM/YYYY"
                                              )
                                            ),
                                          1
                                        ))
                                      : M("", !0),
                                  ]),
                                ]),
                                s(
                                  "p",
                                  K,
                                  n(
                                    ("getFieldWithLocale" in t
                                      ? t.getFieldWithLocale
                                      : a(r))(e, "headline")
                                  ),
                                  1
                                ),
                              ]),
                            ];
                          }),
                          _: 2,
                        },
                        1032,
                        ["to"]
                      )
                    )
                  ),
                  256
                )),
              ]),
            ])
          );
        }
      );
    },
  });
const te = w(P, [["__scopeId", "data-v-b4b59a5a"]]);
export { te as _ };
