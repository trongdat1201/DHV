import { _ as v } from "./client-only.42178d49.js";
import {
  L as l,
  Z as y,
  T,
  _ as k,
  Y as B,
  bT as b,
} from "./entry.8aa394d7.js";
import {
  j as N,
  a as W,
  Q as d,
  R as L,
  F as R,
  a2 as S,
  Y as o,
  u as a,
  z as F,
  S as u,
  X as h,
  a0 as A,
} from "./swiper-vue.d5cda4d1.js";
import { _ as C } from "./index.a66880e0.js";
const D = { key: 0, class: "list-portal" },
  U = { class: "list-portal__item" },
  w = { class: "list-portal__item__image" },
  z = ["src", "alt"],
  E = { class: "list-portal__item__content" },
  Q = ["href"],
  V = { class: "list-portal__item__name cursor-pointer line-clamp-2" },
  Y = ["href"],
  j = { class: "list-portal__item__description" },
  G = N({
    __name: "PortalList",
    props: { listPortal: { type: Array, default: () => [] } },
    setup(r) {
      const n = W([]),
        s = W([]);
      return (e, P) => {
        const c = C,
          f = v,
          g = T;
        return r.listPortal.length
          ? (d(),
            L("div", D, [
              (d(!0),
              L(
                R,
                null,
                S(r.listPortal, (t, i) => {
                  var _, p;
                  return (
                    d(),
                    L("div", U, [
                      o("div", w, [
                        o(
                          "img",
                          {
                            src:
                              (_ = (
                                "getFieldWithLocale" in e
                                  ? e.getFieldWithLocale
                                  : a(l)
                              )(t, "picturePortal")) == null
                                ? void 0
                                : _.url,
                            alt:
                              (p = (
                                "getFieldWithLocale" in e
                                  ? e.getFieldWithLocale
                                  : a(l)
                              )(t, "picturePortal")) == null
                                ? void 0
                                : p.alt,
                            loading: "lazy",
                          },
                          null,
                          8,
                          z,
                        ),
                      ]),
                      o("div", E, [
                        F(
                          f,
                          null,
                          {
                            fallback: u(() => [
                              o("h2", V, [
                                o(
                                  "a",
                                  {
                                    href: t == null ? void 0 : t.itemUrl,
                                    target: "_blank",
                                  },
                                  h(
                                    ("getFieldWithLocale" in e
                                      ? e.getFieldWithLocale
                                      : a(l))(t, "name"),
                                  ),
                                  9,
                                  Y,
                                ),
                              ]),
                              o(
                                "p",
                                j,
                                h(
                                  ("getFieldWithLocale" in e
                                    ? e.getFieldWithLocale
                                    : a(l))(t, "description"),
                                ),
                                1,
                              ),
                            ]),
                            default: u(() => [
                              F(
                                c,
                                {
                                  title: ("isTruncate" in e
                                    ? e.isTruncate
                                    : a(y))(a(n)[i])
                                    ? ("getFieldWithLocale" in e
                                        ? e.getFieldWithLocale
                                        : a(l))(t, "name")
                                    : "",
                                  placement: "rightTop",
                                },
                                {
                                  default: u(() => [
                                    o(
                                      "h2",
                                      {
                                        ref_for: !0,
                                        ref: (m) => {
                                          a(n)[i] = m;
                                        },
                                        class:
                                          "list-portal__item__name cursor-pointer line-clamp-2",
                                      },
                                      [
                                        o(
                                          "a",
                                          {
                                            href:
                                              t == null ? void 0 : t.itemUrl,
                                            target: "_blank",
                                          },
                                          h(
                                            ("getFieldWithLocale" in e
                                              ? e.getFieldWithLocale
                                              : a(l))(t, "name"),
                                          ),
                                          9,
                                          Q,
                                        ),
                                      ],
                                      512,
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["title"],
                              ),
                              F(
                                c,
                                {
                                  title: ("isTruncate" in e
                                    ? e.isTruncate
                                    : a(y))(a(s)[i])
                                    ? ("getFieldWithLocale" in e
                                        ? e.getFieldWithLocale
                                        : a(l))(t, "description")
                                    : "",
                                  placement: "rightTop",
                                },
                                {
                                  default: u(() => [
                                    o(
                                      "p",
                                      {
                                        ref_for: !0,
                                        ref: (m) => {
                                          a(s)[i] = m;
                                        },
                                        class: "list-portal__item__description",
                                      },
                                      h(
                                        ("getFieldWithLocale" in e
                                          ? e.getFieldWithLocale
                                          : a(l))(t, "description"),
                                      ),
                                      513,
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["title"],
                              ),
                            ]),
                            _: 2,
                          },
                          1024,
                        ),
                      ]),
                    ])
                  );
                }),
                256,
              )),
            ]))
          : (d(), A(g, { key: 1 }));
      };
    },
  });
const q = k(G, [["__scopeId", "data-v-93af9d27"]]),
  I = (r) => {
    const n = B(r, () => []),
      s = W(!1);
    return {
      listPortal: n,
      getPortal: () =>
        new Promise((P, c) => {
          s.value = !0;
          const { onError: f, onResult: g } = b({ portalType: r });
          (f((t) => {
            ((s.value = !1), c(t));
          }),
            g((t) => {
              var i, _;
              ((s.value = !1),
                (n.value =
                  (_ =
                    (i = t == null ? void 0 : t.data) == null
                      ? void 0
                      : i.getPortalByType) == null
                    ? void 0
                    : _.filter((p) => p.itemUrl)),
                P(n.value));
            }));
        }),
      loadingState: s,
    };
  },
  H = I;
export { q as _, H as u };
