import { _ as j } from "./nuxt-link.58f89fff.js";
import { a7 as C, L as r, S as h, _ as H } from "./entry.8aa394d7.js";
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
  V as X,
  Y as t,
  u as e,
  z as d,
  S as p,
  X as i,
  W as I,
  Q as f,
  R as g,
  F as Z,
  a2 as G,
  _ as J,
  ai as K,
  aj as O,
} from "./swiper-vue.d5cda4d1.js";
const u = (_) => (K("data-v-c0d6f26f"), (_ = _()), O(), _),
  x = { class: "footer bg-primary" },
  D = {
    class: "row flex-wrap container text-white main-content justify-between",
  },
  oo = {
    class: "col-12 col-sm-5 col-md-2 col-lg-2 col-xl-3 social-col md:px-0",
  },
  to = ["src", "alt"],
  eo = { class: "social" },
  lo = ["href"],
  so = u(() =>
    t(
      "img",
      {
        src: B,
        alt: "facebook",
        class: "w-full inline-block aspect-square",
        loading: "lazy",
      },
      null,
      -1
    )
  ),
  ao = [so],
  io = ["href"],
  no = u(() =>
    t(
      "img",
      {
        src: A,
        alt: "youtube",
        class: "w-full inline-block aspect-square",
        loading: "lazy",
      },
      null,
      -1
    )
  ),
  co = [no],
  ro = ["href"],
  _o = u(() =>
    t(
      "img",
      {
        src: E,
        alt: "zalo",
        class: "w-full inline-block aspect-square",
        loading: "lazy",
      },
      null,
      -1
    )
  ),
  mo = [_o],
  ho = ["href"],
  uo = u(() =>
    t(
      "img",
      {
        src: R,
        alt: "tiktok",
        class: "w-full inline-block aspect-square",
        loading: "lazy",
      },
      null,
      -1
    )
  ),
  po = [uo],
  fo = { class: "col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 link-col" },
  go = { class: "col-title" },
  ko = { class: "flex flex-col" },
  bo = { class: "col-12 col-sm-12 col-md-6 contact-col" },
  vo = { class: "col-title" },
  To = { class: "contact-item item" },
  Lo = { class: "icon" },
  yo = ["innerHTML"],
  wo = { class: "contact-item item" },
  Fo = { class: "icon" },
  So = ["innerHTML"],
  $o = { class: "contact-item item !items-start" },
  Mo = { class: "icon" },
  Wo = { key: 0 },
  zo = { href: "https://maps.app.goo.gl/V8H3kxAwmRApqzkV7", class: "mb-0" },
  qo = { class: "bg-white copy-right" },
  Io = { class: "container text-center text-primary mb-0" },
  Po = Q({
    __name: "LayoutFooter",
    setup(_) {
      const { informationManagementData: l } = C(),
        P = q(() => {
          var o, a, n;
          return (a = r(
            (o = l == null ? void 0 : l.value) == null
              ? void 0
              : o.informationManagement,
            "email"
          )) != null && a.length
            ? r(
                (n = l == null ? void 0 : l.value) == null
                  ? void 0
                  : n.informationManagement,
                "email"
              )
                .filter((s) => s)
                .map((s) => `<a href="mailto:${s}">${s}</a>`)
                .join("|")
            : "";
        }),
        V = q(() => {
          var o, a, n;
          return (a = r(
            (o = l == null ? void 0 : l.value) == null
              ? void 0
              : o.informationManagement,
            "phone"
          )) != null && a.length
            ? r(
                (n = l == null ? void 0 : l.value) == null
                  ? void 0
                  : n.informationManagement,
                "phone"
              )
                .filter((s) => s)
                .map((s) => `<a href="tel:${s}">${s}</a>`)
                .join("-")
            : "";
        });
      return (o, a) => {
        const n = j;
        return X(
          o.$slots,
          "default",
          {},
          () => {
            var s, k, b, v, T, L, y, w, F, S, $, M;
            return [
              t("div", x, [
                t("div", D, [
                  t("div", oo, [
                    t(
                      "div",
                      {
                        onClick:
                          a[0] ||
                          (a[0] = (...c) =>
                            ("onScrollToTop" in o ? o.onScrollToTop : e(h)) &&
                            ("onScrollToTop" in o ? o.onScrollToTop : e(h))(
                              ...c
                            )),
                      },
                      [
                        d(
                          n,
                          {
                            to: o.localePath("/"),
                            "aria-label": "Logo footer",
                          },
                          {
                            default: p(() => {
                              var c, m, W, z;
                              return [
                                t(
                                  "img",
                                  {
                                    class:
                                      "logo inline-block w-full h-full aspect-[266/123]",
                                    src:
                                      (m = (
                                        "getFieldWithLocale" in o
                                          ? o.getFieldWithLocale
                                          : e(r)
                                      )(
                                        (c = e(l)) == null
                                          ? void 0
                                          : c.informationManagement,
                                        "pictureLogoFooter"
                                      )) == null
                                        ? void 0
                                        : m.url,
                                    alt:
                                      (z = (
                                        "getFieldWithLocale" in o
                                          ? o.getFieldWithLocale
                                          : e(r)
                                      )(
                                        (W = e(l)) == null
                                          ? void 0
                                          : W.informationManagement,
                                        "pictureLogoFooter"
                                      )) == null
                                        ? void 0
                                        : z.alt,
                                    loading: "lazy",
                                  },
                                  null,
                                  8,
                                  to
                                ),
                              ];
                            }),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ),
                      ]
                    ),
                    t("div", eo, [
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
                        ao,
                        8,
                        lo
                      ),
                      t(
                        "a",
                        {
                          href:
                            ((v =
                              (b = e(l)) == null
                                ? void 0
                                : b.informationManagement) == null
                              ? void 0
                              : v.ytbUrl) || "",
                          target: "_blank",
                          "aria-label": "Youtube",
                          class: "w-9",
                        },
                        co,
                        8,
                        io
                      ),
                      t(
                        "a",
                        {
                          href:
                            ((L =
                              (T = e(l)) == null
                                ? void 0
                                : T.informationManagement) == null
                              ? void 0
                              : L.zaloUrl) || "",
                          target: "_blank",
                          "aria-label": "Zalo",
                          class: "w-9",
                        },
                        mo,
                        8,
                        ro
                      ),
                      t(
                        "a",
                        {
                          href:
                            ((w =
                              (y = e(l)) == null
                                ? void 0
                                : y.informationManagement) == null
                              ? void 0
                              : w.tiktokUrl) || "",
                          target: "_blank",
                          "aria-label": "Tiktok",
                          class: "w-9",
                        },
                        po,
                        8,
                        ho
                      ),
                    ]),
                  ]),
                  t("div", fo, [
                    t("h2", go, i(o.$t("common.quick_link")), 1),
                    t("div", ko, [
                      t(
                        "div",
                        {
                          class: "item link-item",
                          onClick:
                            a[1] ||
                            (a[1] = (...c) =>
                              ("onScrollToTop" in o ? o.onScrollToTop : e(h)) &&
                              ("onScrollToTop" in o ? o.onScrollToTop : e(h))(
                                ...c
                              )),
                        },
                        [
                          d(
                            n,
                            { to: o.localePath("/") },
                            {
                              default: p(() => [
                                I(i(o.$t("home.title_link")), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["to"]
                          ),
                        ]
                      ),
                      d(
                        n,
                        {
                          to: o.localePath("/educational-program"),
                          class: "item link-item",
                        },
                        {
                          default: p(() => [
                            I(i(o.$t("educational_program.title")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["to"]
                      ),
                    ]),
                  ]),
                  t("div", bo, [
                    t("h2", vo, i(o.$t("contact.title")), 1),
                    t("div", To, [
                      t("div", Lo, [d(e(N))]),
                      t(
                        "p",
                        { class: "list-item-text mb-0", innerHTML: e(V) },
                        null,
                        8,
                        yo
                      ),
                    ]),
                    t("div", wo, [
                      t("div", Fo, [d(e(U))]),
                      t(
                        "p",
                        { class: "list-item-text mb-0", innerHTML: e(P) },
                        null,
                        8,
                        So
                      ),
                    ]),
                    t("div", $o, [
                      t("div", Mo, [d(e(Y))]),
                      (S = (F = e(l)) == null ? void 0 : F.branchs) != null &&
                      S.length
                        ? (f(),
                          g("div", Wo, [
                            t(
                              "a",
                              zo,
                              i(o.$t("information_management.headquarter")) +
                                ": " +
                                i(
                                  ("getFieldWithLocale" in o
                                    ? o.getFieldWithLocale
                                    : e(r))(
                                    ($ = e(l)) == null
                                      ? void 0
                                      : $.informationManagement,
                                    "headquarter"
                                  )
                                ),
                              1
                            ),
                            (f(!0),
                            g(
                              Z,
                              null,
                              G(
                                (M = e(l)) == null ? void 0 : M.branchs,
                                (c, m) => (
                                  f(),
                                  g(
                                    "p",
                                    { key: c.id, class: "mb-0" },
                                    i(o.$t("information_management.branch")) +
                                      " " +
                                      i(m + 1) +
                                      ": " +
                                      i(
                                        ("getFieldWithLocale" in o
                                          ? o.getFieldWithLocale
                                          : e(r))(c, "address")
                                      ),
                                    1
                                  )
                                )
                              ),
                              128
                            )),
                          ]))
                        : J("", !0),
                    ]),
                  ]),
                ]),
                t("div", qo, [
                  t(
                    "p",
                    Io,
                    " © 2023 " + i(o.$t("common.hung_vuong_university")),
                    1
                  ),
                ]),
              ]),
            ];
          },
          !0
        );
      };
    },
  });
const Uo = H(Po, [["__scopeId", "data-v-c0d6f26f"]]);
export { Uo as default };
