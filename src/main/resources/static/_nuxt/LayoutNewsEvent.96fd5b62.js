import { _ as $ } from "./AppBreadcrumb.1a0221cf.js";
import { _ as x } from "./AppBanner.43b973dd.js";
import { u as N } from "./index.0f7ce4b9.js";
import {
  Y as f,
  H as k,
  N as A,
  $ as E,
  J as S,
  _ as I,
} from "./entry.8aa394d7.js";
import { a as L } from "./index.97fcacb7.js";
import {
  j as V,
  k as C,
  al as z,
  Q as c,
  R as _,
  V as a,
  z as w,
  u as n,
  _ as d,
  Y as o,
} from "./swiper-vue.d5cda4d1.js";
const D = { class: "layout-news-event" },
  R = { key: 0, class: "banner" },
  Y = { class: "container !mt-4 lg:!mt-16" },
  j = { class: "flex flex-wrap content-wrapper" },
  G = { class: "layout-news-event__main-body" },
  H = { key: 0, class: "layout-news-event__related-article" },
  J = { class: "layout-news-event__sidebar" },
  M = { class: "sticky top-60 grid" },
  P = { key: 0, class: "layout-news-event__related-article" },
  Q = V({
    __name: "LayoutNewsEvent",
    props: {
      extraBreadcrumbs: { type: Array, default: () => [] },
      type: { type: String, default: "" },
    },
    async setup(u) {
      let m, p;
      const l = u,
        { width: y } = L(),
        { getBannerByPage: h } = N(),
        r = f(`banners${l.type}`, () => []),
        v = f(`metadata${l.type}`, () => ({})),
        s = k(),
        g = C(() => {
          var t;
          return ["award", "contest"].includes(
            (t = s == null ? void 0 : s.params) == null ? void 0 : t.type,
          );
        });
      return (
        ([m, p] = z(async () =>
          A(async () => {
            var t, i;
            if (E.value || !((t = r.value) != null && t.length)) {
              const e = await h(l.type);
              ((i = e == null ? void 0 : e.bannerImage) != null &&
                i.length &&
                (r.value = e == null ? void 0 : e.bannerImage),
                e != null &&
                  e.metadata &&
                  (v.value = e == null ? void 0 : e.metadata));
            }
            !s.name.includes("alias") && !s.params.category && S(v.value);
          }, "$gG6whb1aIc"),
        )),
        await m,
        p(),
        (t, i) => {
          var b;
          const e = $,
            B = x;
          return (
            c(),
            _("div", D, [
              a(
                t.$slots,
                "breadcrumb",
                {},
                () => [
                  w(
                    e,
                    { "extra-last-breadcrumb": u.extraBreadcrumbs },
                    null,
                    8,
                    ["extra-last-breadcrumb"],
                  ),
                ],
                !0,
              ),
              (b = n(r)) != null && b.length && !n(g)
                ? (c(),
                  _("div", R, [w(B, { banners: n(r) }, null, 8, ["banners"])]))
                : d("", !0),
              o("div", Y, [
                o("div", j, [
                  o("div", G, [
                    a(t.$slots, "mainBody", {}, void 0, !0),
                    n(y) < 992
                      ? (c(),
                        _("div", H, [
                          a(t.$slots, "relatedArticle", {}, void 0, !0),
                        ]))
                      : d("", !0),
                  ]),
                  o("div", J, [
                    o("div", M, [a(t.$slots, "sidebar", {}, void 0, !0)]),
                  ]),
                ]),
                n(y) >= 992
                  ? (c(),
                    _("div", P, [
                      a(t.$slots, "relatedArticle", {}, void 0, !0),
                    ]))
                  : d("", !0),
              ]),
            ])
          );
        }
      );
    },
  });
const U = I(Q, [["__scopeId", "data-v-514abf06"]]);
export { U as L };
