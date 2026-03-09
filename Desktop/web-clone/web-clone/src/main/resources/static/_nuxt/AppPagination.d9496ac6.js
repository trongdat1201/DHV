import { _ as N } from "./nuxt-link.58f89fff.js";
import { _ as A } from "./client-only.42178d49.js";
import {
  Q as r,
  R as _,
  Y as n,
  j as D,
  a as I,
  al as R,
  b as x,
  z as l,
  S as p,
  u as e,
  Z as d,
  a3 as u,
  F as j,
  a0 as h,
  W as G,
  X as k,
  _ as m,
  a8 as M,
} from "./swiper-vue.d5cda4d1.js";
import { H as S, N as V, _ as Z } from "./entry.8aa394d7.js";
import { _ as E } from "./index.5d8e77bd.js";
const F = {
    width: "1em",
    height: "1em",
    viewBox: "0 0 33 32",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
  },
  O = n(
    "g",
    { "clip-path": "url(#clip0_2165_1608)" },
    [
      n("path", {
        d: "M13.8331 8L11.9531 9.88L18.0598 16L11.9531 22.12L13.8331 24L21.8331 16L13.8331 8Z",
      }),
    ],
    -1
  ),
  Q = n(
    "defs",
    null,
    [
      n("clipPath", { id: "clip0_2165_1608" }, [
        n("rect", {
          width: "32",
          height: "32",
          fill: "white",
          transform: "translate(0.5)",
        }),
      ]),
    ],
    -1
  ),
  W = [O, Q];
function H(f, v) {
  return r(), _("svg", F, W);
}
const b = { render: H },
  T = {
    width: "1em",
    height: "1em",
    viewBox: "0 0 33 32",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
  },
  U = n(
    "g",
    { "clip-path": "url(#clip0_2165_1611)" },
    [
      n("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M17.5 8L15.62 9.88L21.7267 16L15.62 22.12L17.5 24L25.5 16L17.5 8ZM10.167 8L8.28699 9.88L14.3937 16L8.28699 22.12L10.167 24L18.167 16L10.167 8Z",
      }),
    ],
    -1
  ),
  X = n(
    "defs",
    null,
    [
      n("clipPath", { id: "clip0_2165_1611" }, [
        n("rect", {
          width: "32",
          height: "32",
          transform: "matrix(-1 0 0 1 32.5 0)",
        }),
      ]),
    ],
    -1
  ),
  Y = [U, X];
function J(f, v) {
  return r(), _("svg", T, Y);
}
const q = { render: J },
  K = { class: "hung-vuong-pagination" },
  ee = { key: 1 },
  te = D({
    __name: "AppPagination",
    props: { pageInfo: { type: Object, default: () => {} } },
    emits: ["changePage"],
    async setup(f, { emit: v }) {
      let P, w;
      const y = f,
        o = S(),
        t = I({ currentPage: 1, totalPages: 0, totalCount: 0, pageSize: 0 });
      return (
        ([P, w] = R(() =>
          V(async () => {
            t.value = y.pageInfo;
          }, "$DBukPWQfEg")
        )),
        await P,
        w(),
        x(
          () => y.pageInfo,
          (s) => {
            t.value = s;
          },
          { deep: !0 }
        ),
        x(
          () => t.value.currentPage,
          (s) => {
            v("changePage", s);
          }
        ),
        (s, a) => {
          var L, C;
          const c = N,
            $ = A,
            z = E;
          return (
            r(),
            _("div", K, [
              l(
                c,
                {
                  class: d([
                    "pagination-navigate",
                    { disabled: e(t).currentPage === 1 },
                  ]),
                  to: {
                    path: s.localePath(e(o).path),
                    query: { ...e(o).query, page: 1 },
                  },
                  onClick: a[0] || (a[0] = u(() => {}, ["prevent"])),
                  "aria-label": "Go to the first page",
                },
                { default: p(() => [l(e(q), { class: "rotate-180" })]), _: 1 },
                8,
                ["class", "to"]
              ),
              l(
                z,
                {
                  current: e(t).currentPage,
                  "onUpdate:current":
                    a[4] || (a[4] = (i) => (e(t).currentPage = i)),
                  total: (L = e(t)) == null ? void 0 : L.totalCount,
                  "page-size": (C = e(t)) == null ? void 0 : C.pageSize,
                  "show-less-items": "",
                  "show-size-changer": !1,
                },
                {
                  itemRender: p(({ type: i, originalElement: B, page: g }) => [
                    i === "page"
                      ? (r(),
                        _(
                          j,
                          { key: 0 },
                          [
                            g !== e(t).currentPage
                              ? (r(),
                                h(
                                  c,
                                  {
                                    key: 0,
                                    to: {
                                      path: s.localePath(e(o).path),
                                      query: { ...e(o).query, page: g },
                                    },
                                    onClick:
                                      a[1] || (a[1] = u(() => {}, ["prevent"])),
                                  },
                                  { default: p(() => [G(k(g), 1)]), _: 2 },
                                  1032,
                                  ["to"]
                                ))
                              : (r(), _("span", ee, k(g), 1)),
                          ],
                          64
                        ))
                      : m("", !0),
                    i === "prev"
                      ? (r(),
                        h(
                          c,
                          {
                            key: 1,
                            class: d([
                              "pagination-navigate sm:mr-20",
                              { disabled: e(t).currentPage === 1 },
                            ]),
                            to: {
                              path: s.localePath(e(o).path),
                              query: {
                                ...e(o).query,
                                page: e(t).currentPage - 1 || 1,
                              },
                            },
                            onClick: a[2] || (a[2] = u(() => {}, ["prevent"])),
                            "aria-label": "Go to the prev page",
                          },
                          {
                            default: p(() => [
                              l(e(b), { class: "rotate-180" }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["class", "to"]
                        ))
                      : m("", !0),
                    i === "next"
                      ? (r(),
                        h(
                          c,
                          {
                            key: 2,
                            class: d([
                              "pagination-navigate sm:ml-20",
                              {
                                disabled: e(t).currentPage === e(t).totalCount,
                              },
                            ]),
                            to: {
                              path: s.localePath(e(o).path),
                              query: {
                                ...e(o).query,
                                page: e(t).currentPage + 1,
                              },
                            },
                            onClick: a[3] || (a[3] = u(() => {}, ["prevent"])),
                            "aria-label": "Go to the next page",
                          },
                          { default: p(() => [l(e(b))]), _: 1 },
                          8,
                          ["class", "to"]
                        ))
                      : m("", !0),
                    l(
                      $,
                      null,
                      {
                        default: p(() => [
                          i === "jump-next" || i === "jump-prev"
                            ? (r(), h(M(B), { key: 0 }))
                            : m("", !0),
                        ]),
                        _: 2,
                      },
                      1024
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["current", "total", "page-size"]
              ),
              l(
                c,
                {
                  class: d([
                    "pagination-navigate",
                    { disabled: e(t).currentPage === e(t).totalPages },
                  ]),
                  to: {
                    path: s.localePath(e(o).path),
                    query: { ...e(o).query, page: e(t).totalPages },
                  },
                  onClick: a[5] || (a[5] = u(() => {}, ["prevent"])),
                  "aria-label": "Go to the last page",
                },
                { default: p(() => [l(e(q))]), _: 1 },
                8,
                ["class", "to"]
              ),
            ])
          );
        }
      );
    },
  });
const le = Z(te, [["__scopeId", "data-v-83b838a2"]]);
export { le as _ };
