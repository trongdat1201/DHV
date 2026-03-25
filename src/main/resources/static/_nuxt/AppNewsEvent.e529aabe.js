import { _ as T } from "./AppTitleLogo.43818f33.js";
import { _ as j } from "./AppButton.be7bd59a.js";
import { _ as z } from "./nuxt-link.58f89fff.js";
import { _ as I } from "./JsonContent.828a79a5.js";
import { _ as G } from "./NuxtImg.vue.916c2d60.js";
import {
  j as R,
  al as X,
  Q as c,
  R as b,
  Y as t,
  z as s,
  S as n,
  V as q,
  W as L,
  X as r,
  u as a,
  a0 as w,
  F as J,
  a2 as O,
  an as Q,
  ap as Y,
  aq as D,
} from "./swiper-vue.d5cda4d1.js";
import { N as H, L as _, T as K, _ as M } from "./entry.8aa394d7.js";
import { u as U } from "./list.70e6673c.js";
import { A as Z } from "./IArticle.feadee52.js";
const x = { class: "news-event" },
  ee = { class: "container" },
  te = { class: "news-event__header flex justify-between items-center" },
  se = { class: "uppercase" },
  ne = { class: "news-event__list" },
  ae = { class: "news-event__item" },
  oe = { class: "news-event__item__overlay" },
  le = { class: "title" },
  ie = { class: "description" },
  re = { class: "news-event__item__image" },
  ce = { class: "news-event__item__content" },
  _e = {
    class:
      "read-more-mobile read-more-mobile flex justify-center mt-4 lg:hidden",
  },
  de = { class: "uppercase" },
  S = 10,
  pe = R({
    __name: "AppNewsEvent",
    props: {
      newsEventCategory: { type: String, default: "" },
      type: { type: String, default: null },
    },
    async setup(A) {
      let h, v;
      const l = A,
        {
          activeArticleListWithCursor: g,
          paginationDataWithCursor: i,
          getActiveArticleListWithCursor: F,
        } = U(),
        { fetchCursorPaginationArticles: k, cursorVariables: C } = F(
          {
            categoryIds: l.newsEventCategory ? [l.newsEventCategory] : null,
            type: l.type,
          },
          { take: S, after: "" }
        );
      ([h, v] = X(async () =>
        H(async () => {
          await k();
        }, "$OCche7GX8G")
      )),
        await h,
        v();
      const P = (e) => {
        var p, d;
        e.isEnd &&
          (p = i == null ? void 0 : i.value) != null &&
          p.hasNextPage &&
          (C.value = {
            pagination: {
              take: S,
              after:
                (d = i == null ? void 0 : i.value) == null
                  ? void 0
                  : d.endCursor,
            },
            filter: {
              categoryIds: l.newsEventCategory ? [l.newsEventCategory] : null,
              type: l.type,
            },
          });
      };
      return (e, p) => {
        const d = T,
          u = j,
          m = z,
          W = I,
          E = G,
          N = Y,
          $ = D,
          B = K;
        return (
          c(),
          b("div", x, [
            t("div", ee, [
              t("div", te, [
                s(d, null, {
                  default: n(() => [
                    q(
                      e.$slots,
                      "title",
                      {},
                      () => [L(r(e.$t("news_event.title")), 1)],
                      !0
                    ),
                  ]),
                  _: 3,
                }),
                s(
                  m,
                  {
                    to: e.localePath("/news-event"),
                    class: "hidden lg:inline-block",
                  },
                  {
                    default: n(() => [
                      s(
                        u,
                        { type: "primary", arrow: "" },
                        {
                          default: n(() => [
                            t("span", se, r(e.$t("common.read_all_news")), 1),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["to"]
                ),
              ]),
              t("div", ne, [
                a(g).length
                  ? (c(),
                    w(
                      $,
                      {
                        key: 0,
                        class: "w-full !pb-14 lg:!pb-16",
                        "slides-per-view": 1.2,
                        "resize-observer": "",
                        "space-between": 12,
                        pagination: { clickable: !0 },
                        breakpoints: {
                          992: { slidesPerView: 3, spaceBetween: 50 },
                          768: { slidesPerView: 2, spaceBetween: 32 },
                          576: { slidesPerView: 1.7, spaceBetween: 32 },
                        },
                        modules: [
                          "SwiperPagination" in e ? e.SwiperPagination : a(Q),
                        ],
                        onSlideChange: P,
                      },
                      {
                        default: n(() => [
                          (c(!0),
                          b(
                            J,
                            null,
                            O(
                              a(g),
                              (o, V) => (
                                c(),
                                w(
                                  N,
                                  {
                                    key: V,
                                    pagination: { clickable: !0 },
                                    class: "!h-auto",
                                  },
                                  {
                                    default: n(() => {
                                      var f, y;
                                      return [
                                        t("div", ae, [
                                          t("div", oe, [
                                            t(
                                              "div",
                                              le,
                                              r(
                                                ("getFieldWithLocale" in e
                                                  ? e.getFieldWithLocale
                                                  : a(_))(o, "headline")
                                              ),
                                              1
                                            ),
                                            t("div", ie, [
                                              s(
                                                W,
                                                {
                                                  class: "editorjs-font-small",
                                                  content:
                                                    ("getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : a(_))(
                                                      o,
                                                      "description"
                                                    ) || "",
                                                },
                                                null,
                                                8,
                                                ["content"]
                                              ),
                                            ]),
                                            s(
                                              m,
                                              {
                                                to: e.localePath(
                                                  `/news-event/${
                                                    o.type === a(Z).NEWS
                                                      ? "news"
                                                      : "event"
                                                  }/${o.alias}`
                                                ),
                                                "aria-label": `Read more about ${o.headline}`,
                                              },
                                              {
                                                default: n(() => [
                                                  s(
                                                    u,
                                                    {
                                                      class:
                                                        "uppercase read-more-btn",
                                                      arrow: !0,
                                                    },
                                                    {
                                                      default: n(() => [
                                                        L(
                                                          r(
                                                            e.$t(
                                                              "common.read_more"
                                                            )
                                                          ),
                                                          1
                                                        ),
                                                      ]),
                                                      _: 1,
                                                    }
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["to", "aria-label"]
                                            ),
                                          ]),
                                          t("div", re, [
                                            s(
                                              E,
                                              {
                                                class: "w-full h-full",
                                                src:
                                                  (f = (
                                                    "getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : a(_)
                                                  )(o, "pictureThumbnail")) ==
                                                  null
                                                    ? void 0
                                                    : f.url,
                                                alt:
                                                  (y = (
                                                    "getFieldWithLocale" in e
                                                      ? e.getFieldWithLocale
                                                      : a(_)
                                                  )(o, "pictureThumbnail")) ==
                                                  null
                                                    ? void 0
                                                    : y.alt,
                                                loading: "lazy",
                                                sizes: "sm:90vw md:50vw",
                                              },
                                              null,
                                              8,
                                              ["src", "alt"]
                                            ),
                                          ]),
                                          t("div", ce, [
                                            t(
                                              "h3",
                                              null,
                                              r(
                                                ("getFieldWithLocale" in e
                                                  ? e.getFieldWithLocale
                                                  : a(_))(o, "headline")
                                              ),
                                              1
                                            ),
                                          ]),
                                        ]),
                                      ];
                                    }),
                                    _: 2,
                                  },
                                  1024
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modules"]
                    ))
                  : (c(), w(B, { key: 1 })),
                t("div", _e, [
                  s(
                    m,
                    { to: e.localePath("/news-event") },
                    {
                      default: n(() => [
                        s(
                          u,
                          { type: "primary", arrow: "" },
                          {
                            default: n(() => [
                              t("span", de, r(e.$t("common.read_all_news")), 1),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["to"]
                  ),
                ]),
              ]),
            ]),
          ])
        );
      };
    },
  });
const Le = M(pe, [["__scopeId", "data-v-61496e24"]]);
export { Le as _ };
