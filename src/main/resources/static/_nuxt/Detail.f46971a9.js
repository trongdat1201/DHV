import { _ as M } from "./AppBreadcrumb.1a0221cf.js";
import { _ as P } from "./nuxt-link.58f89fff.js";
import { _ as j } from "./JsonContent.828a79a5.js";
import { _ as X } from "./News.6674ecc5.js";
import { _ as Z } from "./Event.1de32b59.js";
import { u as q, _ as G } from "./detail.8702b6b0.js";
import {
  bY as J,
  bZ as Q,
  H as K,
  N as ee,
  u as te,
  c7 as ae,
  L as s,
  c8 as O,
  c9 as oe,
  ca as Y,
  bG as ne,
  a1 as se,
  _ as ie,
} from "./entry.8aa394d7.js";
import { L as le } from "./LayoutNewsEvent.f16c70d4.js";
import { A as re } from "./arrow-two-color.11c559b9.js";
import { C as ce } from "./calendar.0a3d87d0.js";
import { A as i } from "./IArticle.feadee52.js";
import {
  j as me,
  a as ue,
  k as de,
  al as pe,
  b as _e,
  Q as y,
  a0 as x,
  S as p,
  z as c,
  u as a,
  Y as m,
  W as he,
  X as w,
  R as V,
  _ as ve,
  Z as z,
  ai as fe,
  aj as ge,
} from "./swiper-vue.d5cda4d1.js";
import "./client-only.42178d49.js";
import "./breadcrumb.bc5fa9d7.js";
import "./transform-translate-faculty.c0e2ceae.js";
import "./IFaculty.97f6e59d.js";
import "./NuxtImg.vue.916c2d60.js";
import "./list.70e6673c.js";
import "./omitBy.06454d55.js";
import "./_baseIteratee.825e9cf8.js";
import "./_baseIsEqual.42871e3f.js";
import "./index.97fcacb7.js";
import "./AppBreadcrumb.73e131db.js";
const H = (o) => (fe("data-v-f1981196"), (o = o()), ge(), o),
  ye = { class: "news-category flex items-center uppercase font-medium" },
  we = { key: 1 },
  be = { key: 0, class: "news-publish-date my-3" },
  Le = { class: "mb-0" },
  Ne = { class: "news-title" },
  Se = { class: "news-content" },
  We = H(() =>
    m("div", { class: "horizontal-line block lg:hidden order-1" }, null, -1),
  ),
  De = H(() => m("div", { class: "horizontal-line order-3" }, null, -1)),
  $e = me({
    __name: "Detail",
    props: { type: { type: String, default: i.NEWS } },
    async setup(o) {
      var A, C, T, F, R;
      let L, N;
      const S = o,
        W = se(),
        D = J(),
        $ = Q({
          addDirAttribute: !0,
          identifierAttribute: "id",
          addSeoAttributes: !0,
        }),
        b = ue([]),
        E = K(),
        { detail: t, getArticleDetail: k } = q(),
        U = de(() => {
          var n, r, _, h, v, f, g, l, u, d;
          const e = [
            {
              link: `/news-event/${S.type === i.NEWS ? "news" : "event"}/${(n = t.value) == null ? void 0 : n.alias}`,
              name: (r = t.value) == null ? void 0 : r.headline,
              name_en: (_ = t.value) == null ? void 0 : _.headline_en,
            },
          ];
          return (
            (h = t.value) != null &&
              h.category &&
              S.type === i.NEWS &&
              e.unshift({
                link: `/news-event/news/category/${(f = (v = t.value) == null ? void 0 : v.category) == null ? void 0 : f.alias}`,
                name:
                  (l = (g = t.value) == null ? void 0 : g.category) == null
                    ? void 0
                    : l.name,
                name_en:
                  (d = (u = t.value) == null ? void 0 : u.category) == null
                    ? void 0
                    : d.name_en,
              }),
            e
          );
        });
      return (
        ([L, N] = pe(async () =>
          ee(async () => {
            var e;
            if (
              (await k(E.params.alias), (e = t.value) != null && e.headline_en)
            )
              $.value.link.map((n) => {
                b.value.push({
                  rel: n.rel,
                  href: `${W.public.URL_PROTOCOL}//${D.host}${n.href}`,
                  hreflang: n.hreflang,
                });
              });
            else {
              const n = $.value.link.find(
                (r) => r.rel === "alternate" && r.hreflang === "vi",
              );
              b.value.push({
                rel: "canonical",
                href: `${W.public.URL_PROTOCOL}//${D.host}${n.href}`,
              });
            }
          }, "$XhCU7FmFt2"),
        )),
        await L,
        N(),
        te({ link: b.value }),
        ae({
          ogImage:
            (A = s(t.value, "pictureThumbnail")) == null ? void 0 : A.url,
          ogImageWidth: 1200,
          ogImageHeight: 630,
          ogTitle:
            s(
              (C = t == null ? void 0 : t.value) == null ? void 0 : C.metadata,
              "metaTitle",
            ) || O.value,
          ogDescription:
            oe(
              s((T = t.value) == null ? void 0 : T.metadata, "metaDescription"),
              150,
              160,
            ) || Y.value,
          description:
            s((F = t.value) == null ? void 0 : F.metadata, "metaDescription") ||
            Y.value,
          titleTemplate:
            s((R = t.value) == null ? void 0 : R.metadata, "metaTitle") ||
            O.value,
        }),
        _e(
          () => E.params.alias,
          (e) => {
            k(e);
          },
        ),
        (e, n) => {
          const r = M,
            _ = P,
            h = j,
            v = X,
            f = Z,
            g = G;
          return (
            y(),
            x(le, null, {
              breadcrumb: p(() => [
                c(r, { "extra-last-breadcrumb": a(U) }, null, 8, [
                  "extra-last-breadcrumb",
                ]),
              ]),
              mainBody: p(() => {
                var l, u, d, I;
                return [
                  m("div", ye, [
                    c(a(re), { class: "mr-2 !flex-shrink-0" }),
                    o.type === a(i).NEWS
                      ? (y(),
                        x(
                          _,
                          {
                            key: 0,
                            to: e.localePath(
                              `/news-event/news/category/${(u = (l = a(t)) == null ? void 0 : l.category) == null ? void 0 : u.alias}`,
                            ),
                          },
                          {
                            default: p(() => {
                              var B;
                              return [
                                he(
                                  w(
                                    ("getFieldWithLocale" in e
                                      ? e.getFieldWithLocale
                                      : a(s))(
                                      (B = a(t)) == null ? void 0 : B.category,
                                      "name",
                                    ),
                                  ),
                                  1,
                                ),
                              ];
                            }),
                            _: 1,
                          },
                          8,
                          ["to"],
                        ))
                      : (y(),
                        V(
                          "span",
                          we,
                          w(
                            ("getFieldWithLocale" in e
                              ? e.getFieldWithLocale
                              : a(s))(
                              (d = a(t)) == null ? void 0 : d.category,
                              "name",
                            ),
                          ),
                          1,
                        )),
                  ]),
                  o.type === a(i).NEWS
                    ? (y(),
                      V("div", be, [
                        c(a(ce), { class: "mr-2" }),
                        m(
                          "p",
                          Le,
                          w(
                            ("formatDate" in e ? e.formatDate : a(ne))(
                              (I = a(t)) == null ? void 0 : I.publicDate,
                              "DD/MM/YYYY",
                            ),
                          ),
                          1,
                        ),
                      ]))
                    : ve("", !0),
                  m(
                    "h1",
                    Ne,
                    w(
                      ("getFieldWithLocale" in e ? e.getFieldWithLocale : a(s))(
                        a(t),
                        "headline",
                      ),
                    ),
                    1,
                  ),
                  m("div", Se, [
                    c(
                      h,
                      {
                        content: ("getFieldWithLocale" in e
                          ? e.getFieldWithLocale
                          : a(s))(a(t), "body"),
                      },
                      null,
                      8,
                      ["content"],
                    ),
                  ]),
                ];
              }),
              sidebar: p(() => [
                We,
                c(
                  v,
                  {
                    title: e.$t("news.headline_news"),
                    class: z(o.type === a(i).NEWS ? "order-2" : "order-4"),
                  },
                  null,
                  8,
                  ["title", "class"],
                ),
                De,
                c(
                  f,
                  {
                    title: e.$t("event.headline_event"),
                    class: z(o.type === a(i).NEWS ? "order-4" : "order-2"),
                  },
                  null,
                  8,
                  ["title", "class"],
                ),
              ]),
              relatedArticle: p(() => {
                var l;
                return [
                  c(
                    g,
                    {
                      title:
                        o.type === a(i).NEWS
                          ? e.$t("news.related_news")
                          : e.$t("event.related_event"),
                      category: (l = a(t)) == null ? void 0 : l.categoryId,
                      event: o.type === a(i).EVENTS,
                    },
                    null,
                    8,
                    ["title", "category", "event"],
                  ),
                ];
              }),
              _: 1,
            })
          );
        }
      );
    },
  });
const Je = ie($e, [["__scopeId", "data-v-f1981196"]]);
export { Je as default };
