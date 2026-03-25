import { a4 as v, _ as w } from "./entry.8aa394d7.js";
import {
  j as x,
  a as g,
  Q as e,
  R as t,
  Y as s,
  u as l,
  X as d,
  _ as p,
  z as V,
  Z as r,
  F as y,
  a2 as b,
  a3 as k,
} from "./swiper-vue.d5cda4d1.js";
import { _ as C } from "./CaretDownFilled.b9cab49d.js";
const N = "" + globalThis.__publicAssetsURL("assets/images/logo/vn-flag.webp"),
  $ = "" + globalThis.__publicAssetsURL("assets/images/logo/en-flag.webp"),
  L = { class: "relative pr-2 w-fit h-fit lg:w-full" },
  H = { key: 0, src: N, alt: "VN", class: "flag-img" },
  M = { key: 1, src: $, alt: "EN", class: "flag-img" },
  z = { key: 2, class: "text-white font-medium hidden lg:inline-block" },
  A = {
    class:
      "menu-locale-list list-none p-0 bg-white w-[92%] shadow-md rounded-md overflow-hidden mx-auto",
  },
  E = ["onClick"],
  S = ["src", "alt"],
  j = { key: 0 },
  B = x({
    __name: "AppSelectLocale",
    props: { locale: { type: String, required: !0 } },
    emits: ["change-locale"],
    setup(o, { emit: _ }) {
      const { facultyCode: c } = v(),
        m = (u) => {
          (n.value = !1), _("change-locale", u);
        },
        n = g(!1),
        f = g([
          { value: "vi", flagValue: "vn", name: "VN" },
          { value: "en", flagValue: "gb", name: "EN" },
        ]);
      return (u, i) => {
        const h = C;
        return (
          e(),
          t("div", L, [
            s(
              "div",
              {
                class:
                  "flex items-center h-full gap-2.5 pl-1.5 lg:gap-3 cursor-pointer",
                onClick: i[0] || (i[0] = (a) => (n.value = !l(n))),
              },
              [
                o.locale === "vi" ? (e(), t("img", H)) : (e(), t("img", M)),
                l(c)
                  ? p("", !0)
                  : (e(), t("span", z, d(o.locale === "vi" ? "VN" : "EN"), 1)),
                V(h, { class: "!text-primary lg:!text-white" }),
              ]
            ),
            s(
              "div",
              {
                class: r([
                  "fixed inset-0 pointer-events-none opacity-0 z-[1001]",
                  { "pointer-events-auto": l(n) },
                ]),
                onClick: i[1] || (i[1] = (a) => (n.value = !1)),
              },
              null,
              2
            ),
            s(
              "div",
              {
                class: r([
                  "menu-locale-wrapper absolute right-0 translate-x-0 sm:right-1/2 sm:translate-x-1/2 pt-2 lg:!pt-2 z-[1002]",
                  { active: l(n) },
                ]),
              },
              [
                s("ul", A, [
                  (e(!0),
                  t(
                    y,
                    null,
                    b(
                      l(f),
                      (a) => (
                        e(),
                        t(
                          "li",
                          {
                            class: r([
                              "menu-locale-item flex items-center justify-center lg:justify-start cursor-pointer gap-2.5 py-2 px-1.5 lg:gap-3 w-full font-medium h-fit mb-0",
                              {
                                active: o.locale === a.value,
                                "lg:!justify-center": l(c),
                              },
                            ]),
                            onClick: k((q) => m(a.value), ["prevent"]),
                          },
                          [
                            s(
                              "img",
                              {
                                src: `/assets/images/logo/${
                                  a.flagValue === "vn" ? "vn" : "en"
                                }-flag.webp`,
                                alt:
                                  a.flagValue === "vn" ? "VN flag" : "EN flag",
                                loading: "lazy",
                                class: "flag-img",
                              },
                              null,
                              8,
                              S
                            ),
                            l(c)
                              ? p("", !0)
                              : (e(), t("span", j, d(a.name), 1)),
                          ],
                          10,
                          E
                        )
                      )
                    ),
                    256
                  )),
                ]),
              ],
              2
            ),
          ])
        );
      };
    },
  });
const Y = w(B, [["__scopeId", "data-v-33a0daa0"]]),
  Z = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
  },
  F = s("path", { d: "M3 8V6H15V8H3Z" }, null, -1),
  R = s("path", { d: "M3 13H21V11H3V13Z" }, null, -1),
  D = s("path", { d: "M3 18H15V16H3V18Z" }, null, -1),
  T = [F, R, D];
function U(o, _) {
  return e(), t("svg", Z, T);
}
const G = { render: U };
export { G as M, Y as _ };
