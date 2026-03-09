import { H as i, _ as m } from "./entry.8aa394d7.js";
import { C as h } from "./close.5df02e05.js";
import { _ as f } from "./statusUtils.cee29603.js";
import { I as v } from "./index.7421026a.js";
import {
  j as y,
  a as x,
  y as k,
  b as w,
  Q as r,
  R as C,
  z as c,
  Y as I,
  u as a,
  e as S,
  a0 as b,
  _ as B,
} from "./swiper-vue.d5cda4d1.js";
const R = { class: "sidebar-search flex items-center custom-shadow" },
  q = { class: "flex-1 sidebar-search__input flex items-center" },
  E = y({
    __name: "Search",
    emits: ["input"],
    setup(N, { emit: s }) {
      const e = x(""),
        o = i();
      k(() => {
        o.query.keyword && (e.value = o.query.keyword);
      }),
        w(
          () => o.query.keyword,
          (t) => {
            e.value = t;
          }
        );
      const _ = () => {
          s("input", e);
        },
        l = () => {
          (e.value = ""), s("input", e);
        };
      return (t, n) => {
        const u = f,
          d = v;
        return (
          r(),
          C("div", R, [
            c(u, { class: "sidebar-search__icon" }),
            I("div", q, [
              c(
                d,
                {
                  type: "text",
                  placeholder: t.$t("common.placeholder.search"),
                  value: a(e),
                  "onUpdate:value":
                    n[0] || (n[0] = (p) => (S(e) ? (e.value = p) : null)),
                  onPressEnter: _,
                },
                null,
                8,
                ["placeholder", "value"]
              ),
              a(e) ? (r(), b(a(h), { key: 0, onClick: l })) : B("", !0),
            ]),
          ])
        );
      };
    },
  });
const H = m(E, [["__scopeId", "data-v-36ad0594"]]);
export { H as _ };
