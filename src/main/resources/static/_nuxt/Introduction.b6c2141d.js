import { _ as P } from "./JsonContent.828a79a5.js";
import { _ as $ } from "./AppButton.be7bd59a.js";
import { _ as j } from "./nuxt-link.58f89fff.js";
import {
  j as D,
  a as R,
  al as q,
  Q as o,
  R as a,
  u as e,
  Y as n,
  _ as d,
  X as h,
  z as s,
  S as r,
  F as z,
  a2 as J,
  a0 as O,
  W as Q,
  am as X,
  ap as Y,
  aq as G,
} from "./swiper-vue.d5cda4d1.js";
import { u as H } from "./list.70e6673c.js";
import { N as K, L as l, _ as M } from "./entry.8aa394d7.js";
import { A as b } from "./btn-arrow.5abf483c.js";
import { A as m } from "./IArticle.feadee52.js";
import { S as U } from "./index.010e93e7.js";
const Z = { class: "faculty-news-event__introduction-section lg:!mb-40" },
  ee = { key: 0, class: "thumbnail thumbnail-mobile flex-1" },
  te = ["src", "alt"],
  ne = { key: 1, class: "container h-full flex flex-wrap relative" },
  ie = {
    class:
      "main-content w-full lg:w-[45%] xxl:w-[39%] flex flex-col justify-center py-14",
  },
  oe = { class: "flex-1 flex flex-col justify-center" },
  ae = { class: "page-title" },
  se = { key: 0 },
  le = { class: "article-item" },
  ce = { class: "headline" },
  re = { class: "description" },
  de = { class: "flex mt-3" },
  ue = { key: 0, class: "navigation-btn-wrapper" },
  _e = {
    id: "facultyNewsEventPrevBtn",
    class: "faculty-news-event-navigation-btn prev",
  },
  pe = {
    id: "facultyNewsEventNextBtn",
    class: "faculty-news-event-navigation-btn next",
  },
  he = { key: 0, class: "thumbnail thumbnail-desktop flex-1" },
  me = ["src", "alt"],
  ve = { key: 2, class: "w-full h-full flex justify-center items-center" },
  fe = D({
    __name: "Introduction",
    props: { type: { type: String, default: m.NEWS } },
    async setup(u) {
      let v, f;
      const x = u,
        c = R(0),
        {
          paginationDataWithCursor: g,
          activeArticleListWithCursor: i,
          getActiveArticleListWithCursor: F,
          loadingRef: y,
        } = H(),
        { fetchCursorPaginationArticles: A, cursorVariables: _ } = F({
          type: x.type,
          outstanding: !0,
        });
      ([v, f] = q(async () =>
        K(async () => {
          await A();
        }, "$NyI4TVhOxf")
      )),
        await v,
        f();
      const k = (t) => {
        (c.value = t.activeIndex),
          t.isEnd &&
            g.value.hasNextPage &&
            (_.value = {
              ..._.value,
              pagination: { ..._.value.pagination, cursor: g.value.endCursor },
            });
      };
      return (t, ge) => {
        var N, W, S, L;
        const C = P,
          E = $,
          B = j,
          I = Y,
          T = G,
          w = U;
        return (
          o(),
          a("div", Z, [
            e(i).length
              ? (o(),
                a("div", ee, [
                  n(
                    "img",
                    {
                      src:
                        (N = (
                          "getFieldWithLocale" in t
                            ? t.getFieldWithLocale
                            : e(l)
                        )(e(i)[e(c)], "pictureThumbnail")) == null
                          ? void 0
                          : N.url,
                      alt:
                        (W = (
                          "getFieldWithLocale" in t
                            ? t.getFieldWithLocale
                            : e(l)
                        )(e(i)[e(c)], "pictureThumbnail")) == null
                          ? void 0
                          : W.alt,
                    },
                    null,
                    8,
                    te
                  ),
                ]))
              : d("", !0),
            !e(y) || e(i).length
              ? (o(),
                a("div", ne, [
                  n("div", ie, [
                    n("div", oe, [
                      n(
                        "h1",
                        ae,
                        h(
                          t.$t(
                            u.type === e(m).NEWS
                              ? "news.headline_news"
                              : "event.headline_event"
                          )
                        ),
                        1
                      ),
                      e(i).length
                        ? (o(),
                          a("div", se, [
                            s(
                              T,
                              {
                                "slides-per-view": "1",
                                modules: [
                                  "SwiperNavigation" in t
                                    ? t.SwiperNavigation
                                    : e(X),
                                ],
                                navigation: {
                                  nextEl: "#facultyNewsEventNextBtn",
                                  prevEl: "#facultyNewsEventPrevBtn",
                                },
                                onSlideChange: k,
                              },
                              {
                                default: r(() => [
                                  (o(!0),
                                  a(
                                    z,
                                    null,
                                    J(
                                      e(i),
                                      (p, V) => (
                                        o(),
                                        O(
                                          I,
                                          { key: V },
                                          {
                                            default: r(() => [
                                              n("div", le, [
                                                n(
                                                  "h2",
                                                  ce,
                                                  h(
                                                    ("getFieldWithLocale" in t
                                                      ? t.getFieldWithLocale
                                                      : e(l))(p, "headline")
                                                  ),
                                                  1
                                                ),
                                                n("div", re, [
                                                  s(
                                                    C,
                                                    {
                                                      content:
                                                        ("getFieldWithLocale" in
                                                          t
                                                          ? t.getFieldWithLocale
                                                          : e(l))(
                                                          p,
                                                          "description"
                                                        ),
                                                    },
                                                    null,
                                                    8,
                                                    ["content"]
                                                  ),
                                                ]),
                                                n("div", de, [
                                                  s(
                                                    B,
                                                    {
                                                      to: t.localePath(
                                                        `/news-event/${
                                                          u.type === e(m).NEWS
                                                            ? "news"
                                                            : "event"
                                                        }/${p.alias}`
                                                      ),
                                                    },
                                                    {
                                                      default: r(() => [
                                                        s(
                                                          E,
                                                          {
                                                            class:
                                                              "read-more-btn",
                                                            arrow: "",
                                                          },
                                                          {
                                                            default: r(() => [
                                                              Q(
                                                                h(
                                                                  t.$t(
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
                                                    ["to"]
                                                  ),
                                                ]),
                                              ]),
                                            ]),
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
                            ),
                          ]))
                        : d("", !0),
                    ]),
                    e(i).length
                      ? (o(),
                        a("div", ue, [
                          n("div", _e, [s(e(b))]),
                          s(
                            w,
                            { spinning: e(y) },
                            {
                              default: r(() => [n("div", pe, [s(e(b))])]),
                              _: 1,
                            },
                            8,
                            ["spinning"]
                          ),
                        ]))
                      : d("", !0),
                  ]),
                  e(i).length
                    ? (o(),
                      a("div", he, [
                        n(
                          "img",
                          {
                            src:
                              (S = (
                                "getFieldWithLocale" in t
                                  ? t.getFieldWithLocale
                                  : e(l)
                              )(e(i)[e(c)], "pictureThumbnail")) == null
                                ? void 0
                                : S.url,
                            alt:
                              (L = (
                                "getFieldWithLocale" in t
                                  ? t.getFieldWithLocale
                                  : e(l)
                              )(e(i)[e(c)], "pictureThumbnail")) == null
                                ? void 0
                                : L.alt,
                          },
                          null,
                          8,
                          me
                        ),
                      ]))
                    : d("", !0),
                ]))
              : (o(), a("div", ve, [s(w)])),
          ])
        );
      };
    },
  });
const Ae = M(fe, [["__scopeId", "data-v-49de23e3"]]);
export { Ae as I };
