import { _ as H } from "./AppPagination.d9496ac6.js";
import {
  u as J,
  H as K,
  R as M,
  cf as Q,
  N as U,
  J as W,
  S as X,
  T as Y,
  _ as G,
} from "./entry.8aa394d7.js";
import { _ as O } from "./Search.94fe15f5.js";
import { u as Z, _ as ee } from "./FilterCategory.0bea77d9.js";
import { _ as te } from "./Event.1de32b59.js";
import { u as ae } from "./list.70e6673c.js";
import { L as oe } from "./LayoutNewsEvent.f16c70d4.js";
import { I as re } from "./Introduction.b6c2141d.js";
import { A as ne } from "./AppArticleItem.3411b12b.js";
import { S as se } from "./index.010e93e7.js";
import {
  j as ie,
  a as _,
  k as ce,
  al as pe,
  b as S,
  Q as l,
  a0 as C,
  S as y,
  z as m,
  Y as f,
  u as c,
  R as A,
  F as q,
  a2 as le,
  _ as me,
  e as ue,
  ai as _e,
  aj as ge,
} from "./swiper-vue.d5cda4d1.js";
import "./nuxt-link.58f89fff.js";
import "./client-only.42178d49.js";
import "./index.5d8e77bd.js";
import "./RightOutlined.f501bedb.js";
import "./index.9e7cd0be.js";
import "./Trigger.dd535606.js";
import "./isVisible.48fa23e0.js";
import "./PortalWrapper.438f60b2.js";
import "./motion.d46d0bbf.js";
import "./_baseIsEqual.42871e3f.js";
import "./pickAttrs.315d7ebe.js";
import "./statusUtils.cee29603.js";
import "./compact-item.8109a539.js";
import "./index.661a1686.js";
import "./firstNotUndefined.29a740f3.js";
import "./close.5df02e05.js";
import "./index.7421026a.js";
import "./index.164d0fc2.js";
import "./devWarning.0cb68424.js";
import "./_baseIteratee.825e9cf8.js";
import "./arrow-two-color.11c559b9.js";
import "./index.7b8d9ad8.js";
import "./NuxtImg.vue.916c2d60.js";
import "./calendar.0a3d87d0.js";
import "./IArticle.feadee52.js";
import "./omitBy.06454d55.js";
import "./index.97fcacb7.js";
import "./AppBreadcrumb.73e131db.js";
import "./breadcrumb.bc5fa9d7.js";
import "./transform-translate-faculty.c0e2ceae.js";
import "./IFaculty.97f6e59d.js";
import "./JsonContent.828a79a5.js";
import "./AppButton.be7bd59a.js";
import "./btn-arrow.5abf483c.js";
const de = (g) => (_e("data-v-1c08c2c4"), (g = g()), ge(), g),
  ye = { key: 0, class: "news-page__pagination flex justify-center" },
  fe = { class: "news-page__sidebar" },
  ve = { class: "filter custom-shadow" },
  he = de(() => f("div", { class: "horizontal-line" }, null, -1)),
  we = ie({
    __name: "News",
    async setup(g) {
      let x, P;
      J({
        link: [
          {
            rel: "preload",
            href: "/assets/images/bg/event-bg.webp",
            as: "image",
          },
          {
            rel: "preload",
            href: "/assets/images/bg/half-circle-bg.webp",
            as: "image",
          },
        ],
      });
      const {
          loadingRef: I,
          activeArticleList: N,
          getActiveArticleList: B,
          paginationData: R,
        } = ae(),
        { getArticleCategoryDetailByAlias: z, articleCategoryDetail: k } = Z(),
        e = K(),
        D = M(),
        r = _([]),
        u = _(""),
        d = _(null),
        a = _({ currentPage: 1, pageSize: 6, totalCount: 0, totalPages: 0 }),
        v = _({ type: Q.NEWS, sortBy: "-publicDate" }),
        { refetch: E, offsetVariables: h } = B(
          { ...v.value },
          { page: 1, take: a.value.pageSize }
        ),
        L = ce(() => {
          var t, o, n;
          if ((t = e.params) != null && t.category)
            return [
              {
                name: (o = k.value) == null ? void 0 : o.name,
                name_en: (n = k.value) == null ? void 0 : n.name_en,
              },
            ];
        });
      ([x, P] = pe(async () =>
        U(async () => {
          var t, o, n, s, p;
          if (
            (e != null &&
              e.query &&
              ((a.value.currentPage =
                Number(
                  (t = e == null ? void 0 : e.query) == null ? void 0 : t.page
                ) || 1),
              (r.value =
                (o = e == null ? void 0 : e.query) != null && o.categories
                  ? [].concat(
                      (n = e == null ? void 0 : e.query) == null
                        ? void 0
                        : n.categories
                    )
                  : []),
              (u.value =
                ((s = e == null ? void 0 : e.query) == null
                  ? void 0
                  : s.keyword) || "")),
            (p = e == null ? void 0 : e.params) != null && p.category)
          ) {
            r.value.push(e.params.category);
            const i = await z(e.params.category);
            W(i == null ? void 0 : i.metadata);
          }
          (h.value = {
            pagination: { page: a.value.currentPage, take: a.value.pageSize },
            filter: {
              ...v.value,
              headline: u.value || "",
              categoryAlias: r.value || [],
            },
          }),
            await E(h.value);
        }, "$lfSxowXi8g")
      )),
        await x,
        P(),
        S(
          R,
          (t) => {
            (a.value.totalPages = t == null ? void 0 : t.totalPages),
              (a.value.totalCount = t == null ? void 0 : t.totalCount);
          },
          { deep: !0, immediate: !0 }
        ),
        S(
          () => e.query,
          (t) => {
            (a.value.currentPage = Number(t.page)),
              (r.value = e.params.category ? [e.params.category] : []),
              e.query.categories &&
                (r.value = r.value.concat(e.query.categories)),
              (u.value = t.keyword);
          },
          { deep: !0 }
        ),
        S(
          [() => a.value.currentPage, () => r.value, () => u.value],
          ([t, o, n]) => {
            var i;
            const s = { page: t, categories: [...o], keyword: n },
              p = s.categories.findIndex((w) => w === e.params.category);
            p >= 0 && s.categories.splice(p, 1),
              !n && delete s.keyword,
              !t && delete s.page,
              !o.length && delete s.categories,
              (h.value = {
                pagination: { page: Number(t), take: a.value.pageSize },
                filter: {
                  ...v.value,
                  headline: n || "",
                  categoryAlias: o || [],
                },
              }),
              D.push({ query: s }),
              X(
                (i = d == null ? void 0 : d.value) == null
                  ? void 0
                  : i.offsetTop
              );
          }
        );
      const T = () => {},
        V = () => {
          (r.value = []), (a.value.currentPage = 1);
        },
        F = (t) => {
          (u.value = t.value), (a.value.currentPage = 1);
        },
        $ = () => {
          a.value.currentPage = 1;
        };
      return (t, o) => {
        const n = H,
          s = Y,
          p = se,
          i = O,
          w = ee,
          j = te;
        return (
          l(),
          C(
            oe,
            { type: "news", "extra-breadcrumbs": c(L) },
            {
              introduction: y(() => [m(re)]),
              mainBody: y(() => [
                f(
                  "div",
                  {
                    ref_key: "listNews",
                    ref: d,
                    class: "news-page__list-news",
                  },
                  [
                    m(
                      p,
                      { spinning: c(I) },
                      {
                        default: y(() => [
                          c(N).length
                            ? (l(),
                              A(
                                q,
                                { key: 0 },
                                [
                                  (l(!0),
                                  A(
                                    q,
                                    null,
                                    le(
                                      c(N),
                                      (b) => (
                                        l(),
                                        C(ne, { article: b }, null, 8, [
                                          "article",
                                        ])
                                      )
                                    ),
                                    256
                                  )),
                                  c(a).totalCount > c(a).pageSize
                                    ? (l(),
                                      A("div", ye, [
                                        m(
                                          n,
                                          {
                                            "page-info": c(a),
                                            onChangePage: T,
                                          },
                                          null,
                                          8,
                                          ["page-info"]
                                        ),
                                      ]))
                                    : me("", !0),
                                ],
                                64
                              ))
                            : (l(), C(s, { key: 1 })),
                        ]),
                        _: 1,
                      },
                      8,
                      ["spinning"]
                    ),
                  ],
                  512
                ),
              ]),
              sidebar: y(() => [
                f("div", fe, [
                  m(i, { class: "search-input", onInput: F }),
                  f("div", ve, [
                    m(
                      w,
                      {
                        "model-value": c(r),
                        "onUpdate:modelValue":
                          o[0] ||
                          (o[0] = (b) => (ue(r) ? (r.value = b) : null)),
                        title: t.$t("news.filter_news_by_category"),
                        onChange: $,
                        onReset: V,
                      },
                      null,
                      8,
                      ["model-value", "title"]
                    ),
                    he,
                    m(j, { title: t.$t("event.headline_event") }, null, 8, [
                      "title",
                    ]),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["extra-breadcrumbs"]
          )
        );
      };
    },
  });
const ut = G(we, [["__scopeId", "data-v-1c08c2c4"]]);
export { ut as default };
