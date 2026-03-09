import {
  cc as R,
  cd as D,
  H as I,
  N as L,
  L as N,
  _ as W,
} from "./entry.8aa394d7.js";
import {
  a as x,
  j as E,
  al as Q,
  k as A,
  Q as p,
  R as w,
  Y as v,
  z as k,
  u as i,
  X as B,
  a0 as b,
  _ as S,
  S as F,
  F as T,
  a2 as j,
  W as z,
  e as G,
  Z as P,
} from "./swiper-vue.d5cda4d1.js";
import { A as H } from "./arrow-two-color.11c559b9.js";
import { C as J } from "./close.5df02e05.js";
import { C as U, _ as X } from "./index.7b8d9ad8.js";
const Y = () => {
    const c = x([]),
      d = x(null);
    return {
      listArticleCategory: c,
      articleCategoryDetail: d,
      getArticleCategories: () =>
        new Promise((s, m) => {
          const { onError: n, onResult: _ } = R();
          n((t) => {
            m(t);
          }),
            _((t) => {
              var e, l;
              (c.value =
                (e = t == null ? void 0 : t.data) == null
                  ? void 0
                  : e.articleCategories),
                s(
                  (l = t == null ? void 0 : t.data) == null
                    ? void 0
                    : l.articleCategories
                );
            });
        }),
      getArticleCategoryDetailByAlias: (s) =>
        new Promise((m, n) => {
          const { onError: _, onResult: t } = D({ alias: s });
          _((e) => {
            n(e);
          }),
            t((e) => {
              var l, g, u;
              (l = e == null ? void 0 : e.data) != null &&
                l.detailArticleCategoryByAlias &&
                ((d.value =
                  (g = e == null ? void 0 : e.data) == null
                    ? void 0
                    : g.detailArticleCategoryByAlias),
                m(
                  (u = e == null ? void 0 : e.data) == null
                    ? void 0
                    : u.detailArticleCategoryByAlias
                ));
            });
        }),
    };
  },
  Z = Y,
  $ = { class: "sidebar-filter-news-category" },
  q = { class: "flex items-center justify-between sidebar-title" },
  K = { class: "flex items-center" },
  M = { class: "uppercase font-bold mb-0" },
  O = E({
    __name: "FilterCategory",
    props: {
      title: { type: String, default: "" },
      event: { type: Boolean, default: !1 },
      categories: { type: Array, default: () => [] },
      modelValue: { type: Array, default: () => [] },
    },
    emits: ["change", "reset", "update:modelValue"],
    async setup(c, { emit: d }) {
      let C, y;
      const s = c,
        { getArticleCategories: m, listArticleCategory: n } = Z(),
        _ = I();
      ([C, y] = Q(async () =>
        L(async () => {
          await m();
        }, "$Tkl15wmlkJ")
      )),
        await C,
        y();
      const t = A(() => {
          var a;
          return s.event
            ? s.categories
            : (a = n == null ? void 0 : n.value) == null
            ? void 0
            : a.filter((r) => r.alias !== _.params.category);
        }),
        e = A({
          get: () => s.modelValue,
          set: (a) => {
            d("update:modelValue", a);
          },
        }),
        l = A(() => {
          const a = e.value.findIndex((f) => f === _.params.category),
            r = [...e.value];
          return a >= 0 && r.splice(a, 1), r.length;
        }),
        g = () => {
          d("reset");
        },
        u = () => {
          d("change");
        };
      return (a, r) => {
        var h;
        const f = U,
          V = X;
        return (
          p(),
          w("div", $, [
            v("div", q, [
              v("div", K, [
                k(i(H), { class: "mr-2" }),
                v("h2", M, B(c.title), 1),
              ]),
              i(l)
                ? (p(), b(i(J), { key: 0, class: "remove-icon", onClick: g }))
                : S("", !0),
            ]),
            k(
              V,
              {
                value: i(e),
                "onUpdate:value":
                  r[0] || (r[0] = (o) => (G(e) ? (e.value = o) : null)),
                class: P([
                  "list-category flex flex-col flex-nowrap !max-h-[12rem]",
                  {
                    "h-[12rem] overflow-y-scroll":
                      ((h = i(t)) == null ? void 0 : h.length) > 5,
                  },
                ]),
                onChange: u,
              },
              {
                default: F(() => [
                  (p(!0),
                  w(
                    T,
                    null,
                    j(
                      i(t),
                      (o) => (
                        p(),
                        b(
                          f,
                          {
                            value: c.event
                              ? o == null
                                ? void 0
                                : o.id
                              : o == null
                              ? void 0
                              : o.alias,
                          },
                          {
                            default: F(() => [
                              z(
                                B(
                                  ("getFieldWithLocale" in a
                                    ? a.getFieldWithLocale
                                    : i(N))(o, "name")
                                ),
                                1
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["value"]
                        )
                      )
                    ),
                    256
                  )),
                ]),
                _: 1,
              },
              8,
              ["value", "class"]
            ),
          ])
        );
      };
    },
  });
const ne = W(O, [["__scopeId", "data-v-466ec6cb"]]);
export { ne as _, Z as u };
