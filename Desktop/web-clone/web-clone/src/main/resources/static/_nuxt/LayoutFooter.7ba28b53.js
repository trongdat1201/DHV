import { _ as V } from "./nuxt-link.58f89fff.js";
import { a7 as C, L as r, S as u, _ as H } from "./entry.8aa394d7.js";
import {
  P as N,
  M as U,
  _ as B,
  a as A,
  b as E,
  c as R,
} from "./mail-icon.642c2b2a.js";
import { P as Y } from "./place-icon.a072a836.js";
import {
  j as Q,
  k as q,
  Q as p,
  R as f,
  Y as t,
  u as e,
  z as d,
  S as _,
  X as i,
  W as g,
  F as X,
  a2 as Z,
  _ as G,
  ai as J,
  aj as K,
} from "./swiper-vue.d5cda4d1.js";
const b = (m) => (J("data-v-be02544a"), (m = m()), K(), m),
  O = { class: "footer" },
  D = { class: "row container text-white main-content justify-between" },
  x = {
    class: "col-12 col-sm-5 col-md-2 col-lg-2 col-xl-3 social-col md:px-0",
  },
  oo = ["src", "alt"],
  to = { class: "social w-full h-fit" },
  eo = ["href"],
  lo = b(() =>
    t(
      "img",
      {
        src: B,
        alt: "facebook",
        class: "w-full inline-block aspect-square",
        loading: "lazy",
      },
      null,
      -1,
    ),
  ),
  so = [lo],
  io = ["href"],
  ao = b(() =>
    t(
      "img",
      {
        src: A,
        alt: "youtube",
        class: "w-full inline-block aspect-square",
        loading: "lazy",
      },
      null,
      -1,
    ),
  ),
  no = [ao],
  co = ["href"],
  ro = b(() =>
    t(
      "img",
      {
        src: E,
        alt: "zalo",
        class: "w-full inline-block aspect-square",
        loading: "lazy",
      },
      null,
      -1,
    ),
  ),
  _o = [ro],
  mo = ["href"],
  ho = b(() =>
    t(
      "img",
      {
        src: R,
        alt: "tiktok",
        class: "w-full inline-block aspect-square",
        loading: "lazy",
      },
      null,
      -1,
    ),
  ),
  uo = [ho],
  po = { class: "col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 link-col" },
  fo = { class: "col-title" },
  go = { class: "flex flex-col" },
  bo = { class: "item link-item mb-2" },
  ko = { class: "item link-item mb-2" },
  vo = { class: "item link-item mb-0" },
  To = { class: "col-12 col-sm-12 col-md-6 contact-col" },
  Lo = { class: "col-title" },
  yo = { class: "contact-item item" },
  Fo = { class: "icon" },
  wo = ["innerHTML"],
  So = { class: "contact-item item" },
  $o = { class: "icon" },
  Mo = ["innerHTML"],
  Po = { class: "contact-item item !items-start" },
  Wo = { class: "icon" },
  zo = { key: 0 },
  qo = { href: "https://maps.app.goo.gl/V8H3kxAwmRApqzkV7", class: "mb-0" },
  Io = { class: "bg-white copy-right" },
  jo = { class: "container mb-0" },
  Vo = Q({
    __name: "LayoutFooter",
    setup(m) {
      const { informationManagementData: l } = C(),
        I = q(() => {
          var o, n, a;
          return (n = r(
            (o = l == null ? void 0 : l.value) == null
              ? void 0
              : o.informationManagement,
            "email",
          )) != null && n.length
            ? r(
                (a = l == null ? void 0 : l.value) == null
                  ? void 0
                  : a.informationManagement,
                "email",
              )
                .filter((s) => s)
                .map((s) => `<a href="mailto:${s}">${s}</a>`)
                .join("|")
            : "";
        }),
        j = q(() => {
          var o, n, a;
          return (n = r(
            (o = l == null ? void 0 : l.value) == null
              ? void 0
              : o.informationManagement,
            "phone",
          )) != null && n.length
            ? r(
                (a = l == null ? void 0 : l.value) == null
                  ? void 0
                  : a.informationManagement,
                "phone",
              )
                .filter((s) => s)
                .map((s) => `<a href="tel:${s}">${s}</a>`)
                .join("-")
            : "";
        });
      return (o, n) => {
        var s, k, v, T, L, y, F, w, S, $, M, P;
        const a = V;
        return (
          p(),
          f("div", O, [
            t("div", D, [
              t("div", x, [
                t(
                  "div",
                  {
                    onClick:
                      n[0] ||
                      (n[0] = (...c) =>
                        ("onScrollToTop" in o ? o.onScrollToTop : e(u)) &&
                        ("onScrollToTop" in o ? o.onScrollToTop : e(u))(...c)),
                  },
                  [
                    d(
                      a,
                      { to: o.localePath("/"), class: "block" },
                      {
                        default: _(() => {
                          var c, h, W, z;
                          return [
                            t(
                              "img",
                              {
                                class:
                                  "logo inline-block w-full object-contain aspect-[266/123]",
                                src:
                                  (h = (
                                    "getFieldWithLocale" in o
                                      ? o.getFieldWithLocale
                                      : e(r)
                                  )(
                                    (c = e(l)) == null
                                      ? void 0
                                      : c.informationManagement,
                                    "pictureLogoFooter",
                                  )) == null
                                    ? void 0
                                    : h.url,
                                alt:
                                  (z = (
                                    "getFieldWithLocale" in o
                                      ? o.getFieldWithLocale
                                      : e(r)
                                  )(
                                    (W = e(l)) == null
                                      ? void 0
                                      : W.informationManagement,
                                    "pictureLogoFooter",
                                  )) == null
                                    ? void 0
                                    : z.alt,
                                loading: "lazy",
                              },
                              null,
                              8,
                              oo,
                            ),
                          ];
                        }),
                        _: 1,
                      },
                      8,
                      ["to"],
                    ),
                  ],
                ),
                t("div", to, [
                  t(
                    "a",
                    {
                      href:
                        ((k =
                          (s = e(l)) == null
                            ? void 0
                            : s.informationManagement) == null
                          ? void 0
                          : k.fbUrl) || "",
                      target: "_blank",
                      "aria-label": "Facebook",
                      class: "w-9",
                    },
                    so,
                    8,
                    eo,
                  ),
                  t(
                    "a",
                    {
                      href:
                        ((T =
                          (v = e(l)) == null
                            ? void 0
                            : v.informationManagement) == null
                          ? void 0
                          : T.ytbUrl) || "",
                      target: "_blank",
                      "aria-label": "Youtube",
                      class: "w-9",
                    },
                    no,
                    8,
                    io,
                  ),
                  t(
                    "a",
                    {
                      href:
                        ((y =
                          (L = e(l)) == null
                            ? void 0
                            : L.informationManagement) == null
                          ? void 0
                          : y.zaloUrl) || "",
                      target: "_blank",
                      "aria-label": "Zalo",
                      class: "w-9",
                    },
                    _o,
                    8,
                    co,
                  ),
                  t(
                    "a",
                    {
                      href:
                        ((w =
                          (F = e(l)) == null
                            ? void 0
                            : F.informationManagement) == null
                          ? void 0
                          : w.tiktokUrl) || "",
                      target: "_blank",
                      "aria-label": "Tiktok",
                    },
                    uo,
                    8,
                    mo,
                  ),
                ]),
              ]),
              t("div", po, [
                t("h2", fo, i(o.$t("common.quick_link")), 1),
                t("div", go, [
                  t(
                    "div",
                    {
                      class: "item link-item mb-2",
                      onClick:
                        n[1] ||
                        (n[1] = (...c) =>
                          ("onScrollToTop" in o ? o.onScrollToTop : e(u)) &&
                          ("onScrollToTop" in o ? o.onScrollToTop : e(u))(
                            ...c,
                          )),
                    },
                    [
                      d(
                        a,
                        { to: o.localePath("/"), class: "inline-block pb-2" },
                        {
                          default: _(() => [g(i(o.$t("home.title_link")), 1)]),
                          _: 1,
                        },
                        8,
                        ["to"],
                      ),
                    ],
                  ),
                  t("div", bo, [
                    d(
                      a,
                      {
                        to: o.localePath("/about-us/mission-vision"),
                        class: "inline-block pb-2",
                      },
                      {
                        default: _(() => [
                          g(i(o.$t("about_us.title_link")), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      ["to"],
                    ),
                  ]),
                  t("div", ko, [
                    d(
                      a,
                      {
                        to: o.localePath("/education/education-institute"),
                        class: "inline-block pb-2",
                      },
                      {
                        default: _(() => [
                          g(i(o.$t("education_institute.title_link")), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      ["to"],
                    ),
                  ]),
                  t("div", vo, [
                    d(
                      a,
                      {
                        to: o.localePath("/education/education-program"),
                        class: "inline-block pb-2",
                      },
                      {
                        default: _(() => [
                          g(i(o.$t("education_program.title_link")), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      ["to"],
                    ),
                  ]),
                ]),
              ]),
              t("div", To, [
                t("h2", Lo, i(o.$t("contact.title")), 1),
                t("div", yo, [
                  t("div", Fo, [d(e(N))]),
                  t(
                    "p",
                    { class: "list-item-text mb-0", innerHTML: e(j) },
                    null,
                    8,
                    wo,
                  ),
                ]),
                t("div", So, [
                  t("div", $o, [d(e(U))]),
                  t(
                    "p",
                    { class: "list-item-text mb-0", innerHTML: e(I) },
                    null,
                    8,
                    Mo,
                  ),
                ]),
                t("div", Po, [
                  t("div", Wo, [d(e(Y))]),
                  ($ = (S = e(l)) == null ? void 0 : S.branchs) != null &&
                  $.length
                    ? (p(),
                      f("div", zo, [
                        t(
                          "a",
                          qo,
                          i(o.$t("information_management.headquarter")) +
                            ": " +
                            i(
                              ("getFieldWithLocale" in o
                                ? o.getFieldWithLocale
                                : e(r))(
                                (M = e(l)) == null
                                  ? void 0
                                  : M.informationManagement,
                                "headquarter",
                              ),
                            ),
                          1,
                        ),
                        (p(!0),
                        f(
                          X,
                          null,
                          Z(
                            (P = e(l)) == null ? void 0 : P.branchs,
                            (c, h) => (
                              p(),
                              f(
                                "p",
                                { key: c.id, class: "mb-0" },
                                i(o.$t("information_management.branch")) +
                                  " " +
                                  i(h + 1) +
                                  ": " +
                                  i(
                                    ("getFieldWithLocale" in o
                                      ? o.getFieldWithLocale
                                      : e(r))(c, "address"),
                                  ),
                                1,
                              )
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : G("", !0),
                ]),
              ]),
            ]),
            t("div", Io, [
              t(
                "p",
                jo,
                " © 2023 " + i(o.$t("common.hung_vuong_university")),
                1,
              ),
            ]),
          ])
        );
      };
    },
  });
const Ao = H(Vo, [["__scopeId", "data-v-be02544a"]]);
export { Ao as default };
