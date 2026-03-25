import { _ as H } from "./NuxtImg.vue.916c2d60.js";
import { _ as V } from "./nuxt-link.58f89fff.js";
import { _ as R } from "./JsonContent.828a79a5.js";
import {
  j,
  Q as i,
  R as n,
  Y as r,
  z as o,
  u as a,
  a0 as E,
  S as I,
  W as m,
  X as l,
  a3 as f,
  _ as h,
} from "./swiper-vue.d5cda4d1.js";
import { R as P, a9 as S, L as s, bG as d, _ as G } from "./entry.8aa394d7.js";
import { A as J } from "./arrow-two-color.11c559b9.js";
import { C as N } from "./calendar.0a3d87d0.js";
const O = { class: "article-item__img" },
  Q = { class: "article-item__content" },
  X = { class: "article-item__content__category" },
  q = { key: 1, class: "mb-0" },
  K = { key: 0, class: "article-item__content__date mt-1 !hidden sm:!flex" },
  U = { key: 0, class: "mb-0 capitalize" },
  Z = { key: 0 },
  x = { key: 1, class: "mb-0" },
  ee = { class: "article-item__content__title text-left" },
  te = { class: "article-item__content__description hidden lg:line-clamp-3" },
  ae = { class: "mt-3 w-full" },
  ie = { key: 0, class: "article-item__content__date flex sm:!hidden" },
  ne = { key: 0, class: "mb-0 capitalize" },
  le = { key: 0 },
  oe = { key: 1, class: "mb-0" },
  se = j({
    __name: "AppArticleItem",
    props: {
      article: { type: Object, default: () => {} },
      event: { type: Boolean, default: !1 },
    },
    setup(t) {
      const u = t,
        z = P(),
        D = S(),
        B = (e) => {
          z.push({ path: D(`/news-event/${u.event ? "event" : "news"}/${e}`) });
        };
      return (e, c) => {
        var Y, y, _, k, L, b, W, F, w, M, p, A, C;
        const T = H,
          v = V,
          g = R;
        return (
          i(),
          n(
            "div",
            {
              class: "article-item",
              onClick:
                c[2] ||
                (c[2] = f(
                  (ce) => {
                    var $;
                    return B(($ = t.article) == null ? void 0 : $.alias);
                  },
                  ["prevent"]
                )),
            },
            [
              r("div", O, [
                o(
                  T,
                  {
                    src:
                      (Y = (
                        "getFieldWithLocale" in e ? e.getFieldWithLocale : a(s)
                      )(t.article, "pictureThumbnail")) == null
                        ? void 0
                        : Y.url,
                    alt:
                      (y = (
                        "getFieldWithLocale" in e ? e.getFieldWithLocale : a(s)
                      )(t.article, "pictureThumbnail")) == null
                        ? void 0
                        : y.alt,
                    loading: "lazy",
                    sizes: "sm:40vw md:60vw",
                  },
                  null,
                  8,
                  ["src", "alt"]
                ),
              ]),
              r("div", Q, [
                r("div", X, [
                  o(a(J), { class: "mr-2 !flex-shrink-0" }),
                  u.event
                    ? (i(),
                      n(
                        "p",
                        q,
                        l(
                          ("getFieldWithLocale" in e
                            ? e.getFieldWithLocale
                            : a(s))(t.article.category, "name")
                        ),
                        1
                      ))
                    : (i(),
                      E(
                        v,
                        {
                          key: 0,
                          to: a(D)(
                            `/news-event/news/category/${t.article.category.alias}`
                          ),
                          class: "mb-0",
                          onClick: c[0] || (c[0] = f(() => {}, ["stop"])),
                        },
                        {
                          default: I(() => [
                            m(
                              l(
                                ("getFieldWithLocale" in e
                                  ? e.getFieldWithLocale
                                  : a(s))(t.article.category, "name")
                              ),
                              1
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["to"]
                      )),
                ]),
                t.event || ((_ = t.article) != null && _.publicDate)
                  ? (i(),
                    n("div", K, [
                      o(a(N), { class: "mr-2" }),
                      t.event
                        ? (i(),
                          n("p", U, [
                            m(
                              l(
                                ("formatDate" in e ? e.formatDate : a(d))(
                                  (k = t.article) == null
                                    ? void 0
                                    : k.startDate,
                                  "H:mm, dd DD/MM/YYYY"
                                )
                              ) + " ",
                              1
                            ),
                            (L = t.article) != null && L.endDate
                              ? (i(),
                                n(
                                  "span",
                                  Z,
                                  " - " +
                                    l(
                                      ("formatDate" in e ? e.formatDate : a(d))(
                                        (b = t.article) == null
                                          ? void 0
                                          : b.endDate,
                                        "H:mm, dd DD/MM/YYYY"
                                      )
                                    ),
                                  1
                                ))
                              : h("", !0),
                          ]))
                        : (i(),
                          n(
                            "p",
                            x,
                            l(
                              ("formatDate" in e ? e.formatDate : a(d))(
                                (W = t.article) == null ? void 0 : W.publicDate,
                                "DD/MM/YYYY"
                              )
                            ),
                            1
                          )),
                    ]))
                  : h("", !0),
                r("h3", ee, [
                  o(
                    v,
                    {
                      to: a(D)(
                        `/news-event/${u.event ? "event" : "news"}/${
                          (F = t.article) == null ? void 0 : F.alias
                        }`
                      ),
                      onClick: c[1] || (c[1] = f(() => {}, ["stop"])),
                    },
                    {
                      default: I(() => [
                        m(
                          l(
                            ("getFieldWithLocale" in e
                              ? e.getFieldWithLocale
                              : a(s))(t.article, "headline")
                          ),
                          1
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["to"]
                  ),
                ]),
                r("div", te, [
                  o(
                    g,
                    {
                      content:
                        ("getFieldWithLocale" in e
                          ? e.getFieldWithLocale
                          : a(s))(t.article, "description") || "",
                    },
                    null,
                    8,
                    ["content"]
                  ),
                ]),
              ]),
              r("div", ae, [
                t.event || ((w = t.article) != null && w.publicDate)
                  ? (i(),
                    n("div", ie, [
                      o(a(N), { class: "mr-2" }),
                      t.event
                        ? (i(),
                          n("p", ne, [
                            m(
                              l(
                                ("formatDate" in e ? e.formatDate : a(d))(
                                  (M = t.article) == null
                                    ? void 0
                                    : M.startDate,
                                  "H:mm, dd DD/MM/YYYY"
                                )
                              ) + " ",
                              1
                            ),
                            (p = t.article) != null && p.endDate
                              ? (i(),
                                n(
                                  "span",
                                  le,
                                  " - " +
                                    l(
                                      ("formatDate" in e ? e.formatDate : a(d))(
                                        (A = t.article) == null
                                          ? void 0
                                          : A.endDate,
                                        "H:mm, dd DD/MM/YYYY"
                                      )
                                    ),
                                  1
                                ))
                              : h("", !0),
                          ]))
                        : (i(),
                          n(
                            "p",
                            oe,
                            l(
                              ("formatDate" in e ? e.formatDate : a(d))(
                                (C = t.article) == null ? void 0 : C.publicDate,
                                "DD/MM/YYYY"
                              )
                            ),
                            1
                          )),
                    ]))
                  : h("", !0),
                o(
                  g,
                  {
                    class:
                      "article-item__content__description line-clamp-3 lg:hidden",
                    content:
                      ("getFieldWithLocale" in e ? e.getFieldWithLocale : a(s))(
                        t.article,
                        "description"
                      ) || "",
                  },
                  null,
                  8,
                  ["content"]
                ),
              ]),
            ]
          )
        );
      };
    },
  });
const ve = G(se, [["__scopeId", "data-v-b359c3d6"]]);
export { ve as A };
