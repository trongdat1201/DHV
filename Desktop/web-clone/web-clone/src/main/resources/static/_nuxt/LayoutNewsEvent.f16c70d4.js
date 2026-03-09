import { a as c } from "./index.97fcacb7.js";
import { A as l } from "./AppBreadcrumb.73e131db.js";
import {
  j as _,
  Q as o,
  R as a,
  V as t,
  z as u,
  Y as s,
  u as n,
  _ as d,
} from "./swiper-vue.d5cda4d1.js";
import { _ as v } from "./entry.8aa394d7.js";
const m = { class: "layout-news-event" },
  p = { class: "banner" },
  y = { class: "container !mt-12" },
  b = { class: "flex flex-wrap content-wrapper" },
  w = { class: "layout-news-event__main-body" },
  f = { key: 0, class: "layout-news-event__related-article" },
  h = { class: "layout-news-event__sidebar" },
  B = { class: "sticky top-44 grid" },
  N = { key: 0, class: "layout-news-event__related-article" },
  $ = _({
    __name: "LayoutNewsEvent",
    props: { extraBreadcrumbs: { type: Array, default: () => [] } },
    setup(i) {
      const { width: r } = c();
      return (e, k) => (
        o(),
        a("div", m, [
          t(
            e.$slots,
            "breadcrumb",
            {},
            () => [
              u(l, { "extra-last-breadcrumb": i.extraBreadcrumbs }, null, 8, [
                "extra-last-breadcrumb",
              ]),
            ],
            !0
          ),
          s("div", p, [t(e.$slots, "introduction", {}, void 0, !0)]),
          s("div", y, [
            s("div", b, [
              s("div", w, [
                t(e.$slots, "mainBody", {}, void 0, !0),
                n(r) < 992
                  ? (o(),
                    a("div", f, [
                      t(e.$slots, "relatedArticle", {}, void 0, !0),
                    ]))
                  : d("", !0),
              ]),
              s("div", h, [
                s("div", B, [t(e.$slots, "sidebar", {}, void 0, !0)]),
              ]),
            ]),
            n(r) >= 992
              ? (o(),
                a("div", N, [t(e.$slots, "relatedArticle", {}, void 0, !0)]))
              : d("", !0),
          ]),
        ])
      );
    },
  });
const V = v($, [["__scopeId", "data-v-730a3310"]]);
export { V as L };
