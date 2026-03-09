import { _ as Y } from "./nuxt-link.58f89fff.js";
import { M as Z, _ as q } from "./menu.9ec1f719.js";
import { a7 as G, M as J, S as x, L, _ as K } from "./entry.8aa394d7.js";
import { C as U } from "./close.5df02e05.js";
import { R as ee } from "./chevron-right.7cc4ed2d.js";
import { b as te } from "./index.97fcacb7.js";
import {
  j as le,
  a as m,
  al as ie,
  b as oe,
  Q as n,
  R as s,
  Y as l,
  F as r,
  a2 as k,
  Z as g,
  u as t,
  z as _,
  S as u,
  W as p,
  X as d,
  a0 as h,
  _ as R,
  ai as ne,
  aj as se,
} from "./swiper-vue.d5cda4d1.js";
import { _ as ae } from "./CaretDownFilled.b9cab49d.js";
const N = (v) => (ne("data-v-0491c19b"), (v = v()), se(), v),
  re = { class: "main-header-wrap relative" },
  ce = { class: "portal-wrapper" },
  ue = { class: "container flex justify-end gap-6 h-12" },
  de = { class: "flex items-center" },
  _e = { class: "container" },
  he = { class: "row items-center" },
  me = { class: "col-2" },
  pe = ["src", "alt"],
  ke = { class: "col-10 flex justify-center" },
  fe = { class: "main-menu text-center" },
  be = { class: "flex justify-center" },
  ge = {
    class: "flex flex-wrap items-center md:gap-[1.5rem] xxl:!gap-[2.5rem]",
  },
  ve = ["innerHTML"],
  Te = ["href"],
  ye = ["innerHTML"],
  Le = ["innerHTML"],
  Re = { key: 0, class: "submenu" },
  we = ["innerHTML"],
  Ce = { class: "header-small-mobile" },
  Me = { class: "container" },
  He = { class: "row items-center" },
  $e = { class: "col-2" },
  Se = { class: "col-8 text-center" },
  Fe = { class: "mobile-logo logo" },
  je = ["src", "alt"],
  We = { class: "col-2 !p-0 flex justify-end" },
  ze = N(() => l("div", { id: "breadcrumb" }, null, -1)),
  Be = N(() => l("div", { id: "extra" }, null, -1)),
  Ie = { class: "container flex-1" },
  Pe = ["onClick"],
  xe = ["href"],
  Ne = { key: 1 },
  Ve = { class: "arrow-icon" },
  Ae = ["innerHTML"],
  De = { class: "portal-wrapper" },
  Ee = { class: "container flex justify-center flex-wrap portal-menu" },
  Oe = { class: "menu-item-header !justify-center" },
  Qe = le({
    __name: "LayoutHeader",
    async setup(v) {
      let T, H;
      const V = m(null),
        A = m(null),
        D = m(null),
        $ = m(null),
        S = m(null),
        w = m(null),
        C = m({}),
        { height: E } = te(w),
        F = [
          {
            title: "home.title_link",
            mobileTitle: "home.title",
            isRoute: !0,
            url: "/",
          },
          {
            title: "about_us.title_link",
            mobileTitle: "about_us.title",
            url: "/about-us",
            isRoute: !1,
            children: [
              {
                title: "mission_vision.title_link",
                mobileTitle: "mission_vision.title_link",
                isRoute: !0,
                url: "/about-us/mission-vision",
              },
              {
                title: "organization_structure_chart.title_link",
                mobileTitle: "organization_structure_chart.title_link",
                isRoute: !0,
                url: "/about-us/organization-structure-chart",
              },
              {
                title: "publish.title_link",
                mobileTitle: "publish.title",
                isRoute: !0,
                externalLink: "https://congkhai.dhv.edu.vn/",
                url: "https://congkhai.dhv.edu.vn/",
              },
              {
                title: "school_history.title_link",
                mobileTitle: "school_history.title",
                isRoute: !0,
                url: "/about-us/school-history",
              },
              {
                title: "organization_structure.title_link",
                mobileTitle: "organization_structure.title",
                isRoute: !0,
                url: "/about-us/organization-structure",
              },
              {
                title: "hiring.title_link",
                mobileTitle: "hiring.title",
                isRoute: !0,
                url: "/about-us/hiring",
              },
            ],
          },
          {
            title: "news_event.title_link",
            mobileTitle: "news_event.title",
            url: "/news-event",
            isRoute: !1,
            children: [
              {
                title: "news.title_link",
                mobileTitle: "news.title",
                isRoute: !0,
                url: "/news-event/news",
              },
              {
                title: "event.title_link",
                mobileTitle: "event.title",
                isRoute: !0,
                url: "/news-event/event",
              },
            ],
          },
          {
            title: "education.title_link",
            mobileTitle: "education.title",
            isRoute: !1,
            children: [
              {
                title: "education_program.title_link",
                mobileTitle: "education_program.title",
                isRoute: !0,
                url: "/education/education-program",
              },
              {
                title: "education_institute.title_link",
                mobileTitle: "education_institute.title",
                isRoute: !0,
                url: "/education/education-institute",
              },
            ],
          },
          {
            title: "enrollment.title_link",
            mobileTitle: "enrollment.title",
            isRoute: !0,
            url: "/enrollment",
          },
          {
            title: "cooperate.title_link",
            mobileTitle: "cooperate.title",
            url: "/cooperate",
            isRoute: !1,
            children: [
              {
                title: "international_cooperation.title_link",
                mobileTitle: "international_cooperation.title",
                isRoute: !1,
                url: "/cooperate/international-cooperation",
              },
              {
                title: "domestic_cooperation.title_link",
                mobileTitle: "domestic_cooperation.title",
                isRoute: !1,
                url: "/cooperate/domestic-cooperation",
              },
              {
                title: "network.title_link",
                mobileTitle: "network.title",
                isRoute: !1,
                url: "/cooperate/network",
              },
            ],
          },
          {
            title: "student_life.title_link",
            mobileTitle: "student_life.title",
            isRoute: !0,
            url: "/student-life",
          },
          {
            title: "contact.title_link",
            mobileTitle: "contact.title",
            isRoute: !0,
            url: "/contact",
          },
        ],
        j = [
          { title: "student.title_link", isRoute: !0, url: "/student" },
          { title: "alumni.title_link", isRoute: !0, url: "/alumni" },
          { title: "guardian.title_link", isRoute: !0, url: "/guardian" },
          { title: "teacher.title_link", isRoute: !0, url: "/teacher" },
        ],
        { informationManagementData: y } = G(),
        {
          activatedRoute: a,
          locale: W,
          handleChangeLocale: z,
          handleCloseMobileMenu: M,
          handleOpenItemMenu: O,
          handleToggleMobileMenu: B,
          headerHeight: Q,
        } = (([T, H] = ie(() =>
          J({
            mobileMenu: $,
            menuToggleBtn: S,
            header: w,
            menuRefs: C,
            searchBar: V,
            mobileSearch: A,
            searchBtn: D,
          }),
        )),
        (T = await T),
        H(),
        T);
      return (
        oe(
          E,
          (i) => {
            Q.value = i;
          },
          { immediate: !0 },
        ),
        (i, I) => {
          const c = Y,
            P = q,
            X = ae;
          return (
            n(),
            s(
              "header",
              {
                id: "navbar",
                ref_key: "header",
                ref: w,
                class: "header-area sticky-bar",
              },
              [
                l("nav", re, [
                  l("div", ce, [
                    l("div", ue, [
                      (n(),
                      s(
                        r,
                        null,
                        k(j, (e, o) =>
                          l(
                            "div",
                            {
                              key: o,
                              class: g([
                                "menu-item text-white font-medium",
                                (e.url !== "/" && e.url === t(a)) ||
                                (e.url === "/" &&
                                  (t(a) === "/" || t(a) === "/en"))
                                  ? "active"
                                  : "",
                              ]),
                            },
                            [
                              _(
                                c,
                                { to: i.localePath(e.url) },
                                {
                                  default: u(() => [p(d(i.$t(e.title)), 1)]),
                                  _: 2,
                                },
                                1032,
                                ["to"],
                              ),
                            ],
                            2,
                          ),
                        ),
                        64,
                      )),
                      l("div", de, [
                        _(P, { locale: t(W), onChangeLocale: t(z) }, null, 8, [
                          "locale",
                          "onChangeLocale",
                        ]),
                      ]),
                    ]),
                  ]),
                  l("div", _e, [
                    l("div", he, [
                      l("div", me, [
                        l(
                          "div",
                          {
                            class: "logo",
                            onClick:
                              I[0] ||
                              (I[0] = (...e) =>
                                ("onScrollToTop" in i
                                  ? i.onScrollToTop
                                  : t(x)) &&
                                ("onScrollToTop" in i ? i.onScrollToTop : t(x))(
                                  ...e,
                                )),
                          },
                          [
                            _(
                              c,
                              {
                                to: i.localePath("/"),
                                class: "block aspect-[102/39]",
                              },
                              {
                                default: u(() => {
                                  var e, o, f, b;
                                  return [
                                    l(
                                      "img",
                                      {
                                        src:
                                          (o = (
                                            "getFieldWithLocale" in i
                                              ? i.getFieldWithLocale
                                              : t(L)
                                          )(
                                            (e = t(y)) == null
                                              ? void 0
                                              : e.informationManagement,
                                            "pictureLogoHeader",
                                          )) == null
                                            ? void 0
                                            : o.url,
                                        alt:
                                          (b = (
                                            "getFieldWithLocale" in i
                                              ? i.getFieldWithLocale
                                              : t(L)
                                          )(
                                            (f = t(y)) == null
                                              ? void 0
                                              : f.informationManagement,
                                            "pictureLogoHeader",
                                          )) == null
                                            ? void 0
                                            : b.alt,
                                        class:
                                          "inline-block w-full h-full object-cover",
                                      },
                                      null,
                                      8,
                                      pe,
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
                      ]),
                      l("div", ke, [
                        l("div", fe, [
                          l("nav", be, [
                            l("ul", ge, [
                              (n(),
                              s(
                                r,
                                null,
                                k(F, (e) =>
                                  l(
                                    "li",
                                    { key: e.title, class: "angle-shape" },
                                    [
                                      l(
                                        "div",
                                        {
                                          class: g([
                                            "!flex justify-center items-center menu-item",
                                            (e.url !== "/" &&
                                              t(a).includes(e.url)) ||
                                            (e.url === "/" &&
                                              (t(a) === "/" || t(a) === "/en"))
                                              ? "active"
                                              : "",
                                          ]),
                                        },
                                        [
                                          e.isRoute
                                            ? (n(),
                                              s(
                                                r,
                                                { key: 0 },
                                                [
                                                  e.externalLink
                                                    ? (n(),
                                                      s(
                                                        "a",
                                                        {
                                                          key: 1,
                                                          href: e.externalLink,
                                                          target: "_blank",
                                                        },
                                                        [
                                                          l(
                                                            "span",
                                                            {
                                                              innerHTML: i.$t(
                                                                e.title,
                                                              ),
                                                              class:
                                                                "font-bold",
                                                            },
                                                            null,
                                                            8,
                                                            ye,
                                                          ),
                                                        ],
                                                        8,
                                                        Te,
                                                      ))
                                                    : (n(),
                                                      h(
                                                        c,
                                                        {
                                                          key: 0,
                                                          to: i.localePath(
                                                            e.url,
                                                          ),
                                                        },
                                                        {
                                                          default: u(() => [
                                                            l(
                                                              "span",
                                                              {
                                                                innerHTML: i.$t(
                                                                  e.title,
                                                                ),
                                                                class:
                                                                  "font-bold",
                                                              },
                                                              null,
                                                              8,
                                                              ve,
                                                            ),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        ["to"],
                                                      )),
                                                ],
                                                64,
                                              ))
                                            : (n(),
                                              s(
                                                "span",
                                                {
                                                  key: 1,
                                                  class:
                                                    "cursor-pointer font-bold",
                                                  innerHTML: i.$t(e.title),
                                                },
                                                null,
                                                8,
                                                Le,
                                              )),
                                          e.children
                                            ? (n(),
                                              h(X, {
                                                key: 2,
                                                class: "ml-2 dropdown-icon",
                                              }))
                                            : R("", !0),
                                        ],
                                        2,
                                      ),
                                      e.children
                                        ? (n(),
                                          s("div", Re, [
                                            (n(!0),
                                            s(
                                              r,
                                              null,
                                              k(
                                                e.children,
                                                (o) => (
                                                  n(),
                                                  s(
                                                    "div",
                                                    {
                                                      key: o.title,
                                                      class: g([
                                                        "!flex !justify-center !items-center gap-2 child-menu-item-wrapper",
                                                        (o.url !== "/" &&
                                                          t(a).includes(
                                                            o.url,
                                                          )) ||
                                                        (o.url === "/" &&
                                                          t(a) === "/")
                                                          ? "active"
                                                          : "",
                                                      ]),
                                                    },
                                                    [
                                                      o.isRoute
                                                        ? (n(),
                                                          s(
                                                            r,
                                                            { key: 0 },
                                                            [
                                                              o.externalLink
                                                                ? (n(),
                                                                  h(
                                                                    c,
                                                                    {
                                                                      key: 1,
                                                                      to: o.externalLink,
                                                                      target:
                                                                        "_blank",
                                                                      class:
                                                                        "child-menu-item",
                                                                    },
                                                                    {
                                                                      default:
                                                                        u(
                                                                          () => [
                                                                            p(
                                                                              d(
                                                                                i.$t(
                                                                                  o.title,
                                                                                ),
                                                                              ),
                                                                              1,
                                                                            ),
                                                                          ],
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1032,
                                                                    ["to"],
                                                                  ))
                                                                : (n(),
                                                                  h(
                                                                    c,
                                                                    {
                                                                      key: 0,
                                                                      to: i.localePath(
                                                                        o.url,
                                                                      ),
                                                                      class:
                                                                        "child-menu-item",
                                                                    },
                                                                    {
                                                                      default:
                                                                        u(
                                                                          () => [
                                                                            p(
                                                                              d(
                                                                                i.$t(
                                                                                  o.title,
                                                                                ),
                                                                              ),
                                                                              1,
                                                                            ),
                                                                          ],
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1032,
                                                                    ["to"],
                                                                  )),
                                                            ],
                                                            64,
                                                          ))
                                                        : (n(),
                                                          s(
                                                            "span",
                                                            {
                                                              key: 1,
                                                              class:
                                                                "child-menu-item cursor-pointer",
                                                              innerHTML: i.$t(
                                                                o.title,
                                                              ),
                                                            },
                                                            null,
                                                            8,
                                                            we,
                                                          )),
                                                    ],
                                                    2,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]))
                                        : R("", !0),
                                    ],
                                  ),
                                ),
                                64,
                              )),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                l("nav", Ce, [
                  l("div", Me, [
                    l("div", He, [
                      l("div", $e, [
                        l(
                          "div",
                          { ref_key: "menuToggleBtn", ref: S },
                          [
                            _(
                              t(Z),
                              { class: "menu-icon", onClick: t(B) },
                              null,
                              8,
                              ["onClick"],
                            ),
                            _(
                              t(U),
                              { class: "close-icon", onClick: t(B) },
                              null,
                              8,
                              ["onClick"],
                            ),
                          ],
                          512,
                        ),
                      ]),
                      l("div", Se, [
                        l("div", Fe, [
                          _(
                            c,
                            {
                              to: i.localePath("/"),
                              class: "inline-block aspect-[108/44]",
                            },
                            {
                              default: u(() => {
                                var e, o, f, b;
                                return [
                                  l(
                                    "img",
                                    {
                                      src:
                                        (o = (
                                          "getFieldWithLocale" in i
                                            ? i.getFieldWithLocale
                                            : t(L)
                                        )(
                                          (e = t(y)) == null
                                            ? void 0
                                            : e.informationManagement,
                                          "pictureLogoHeader",
                                        )) == null
                                          ? void 0
                                          : o.url,
                                      alt:
                                        (b = (
                                          "getFieldWithLocale" in i
                                            ? i.getFieldWithLocale
                                            : t(L)
                                        )(
                                          (f = t(y)) == null
                                            ? void 0
                                            : f.informationManagement,
                                          "pictureLogoHeader",
                                        )) == null
                                          ? void 0
                                          : b.alt,
                                    },
                                    null,
                                    8,
                                    je,
                                  ),
                                ];
                              }),
                              _: 1,
                            },
                            8,
                            ["to"],
                          ),
                        ]),
                      ]),
                      l("div", We, [
                        _(P, { locale: t(W), onChangeLocale: t(z) }, null, 8, [
                          "locale",
                          "onChangeLocale",
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                ze,
                Be,
                l(
                  "div",
                  {
                    ref_key: "mobileMenu",
                    ref: $,
                    class: "mobile-menu flex lg:hidden flex-col",
                  },
                  [
                    l("div", Ie, [
                      (n(),
                      s(
                        r,
                        null,
                        k(F, (e) =>
                          l(
                            "div",
                            {
                              key: `mobile-${e.title}`,
                              ref_for: !0,
                              ref: (o) => {
                                t(C)[`mobile-${e.title}`] = o;
                              },
                              class: g([
                                "mobile-menu-item",
                                (e.url !== "/" && t(a).includes(e.url)) ||
                                (e.url === "/" &&
                                  (t(a) === "/" || t(a) === "/en"))
                                  ? "active"
                                  : "",
                              ]),
                            },
                            [
                              l(
                                "div",
                                {
                                  class: "menu-item-header",
                                  onClick: (o) =>
                                    e.children && t(O)(`mobile-${e.title}`),
                                },
                                [
                                  e.isRoute
                                    ? (n(),
                                      s(
                                        r,
                                        { key: 0 },
                                        [
                                          e.externalLink
                                            ? (n(),
                                              s(
                                                "a",
                                                {
                                                  key: 1,
                                                  href: e.externalLink,
                                                  target: "_blank",
                                                },
                                                d(i.$t(e.mobileTitle)),
                                                9,
                                                xe,
                                              ))
                                            : (n(),
                                              h(
                                                c,
                                                {
                                                  key: 0,
                                                  to: i.localePath(e.url),
                                                  onClick: t(M),
                                                },
                                                {
                                                  default: u(() => [
                                                    p(
                                                      d(i.$t(e.mobileTitle)),
                                                      1,
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["to", "onClick"],
                                              )),
                                        ],
                                        64,
                                      ))
                                    : (n(),
                                      s("span", Ne, d(i.$t(e.mobileTitle)), 1)),
                                  l("span", Ve, [
                                    e.children
                                      ? (n(), h(t(ee), { key: 0 }))
                                      : R("", !0),
                                  ]),
                                ],
                                8,
                                Pe,
                              ),
                              e.children
                                ? (n(),
                                  s(
                                    "div",
                                    {
                                      key: 0,
                                      ref_for: !0,
                                      ref: (o) => {
                                        t(C)[`${e.title}-child-menu`] = o;
                                      },
                                      class: "child-menu",
                                    },
                                    [
                                      (n(!0),
                                      s(
                                        r,
                                        null,
                                        k(
                                          e.children,
                                          (o) => (
                                            n(),
                                            s(
                                              r,
                                              { key: `mobile-${o.title}` },
                                              [
                                                o.isRoute
                                                  ? (n(),
                                                    s(
                                                      r,
                                                      { key: 0 },
                                                      [
                                                        o.externalLink
                                                          ? (n(),
                                                            h(
                                                              c,
                                                              {
                                                                key: 1,
                                                                to: o.externalLink,
                                                                target:
                                                                  "_blank",
                                                                class:
                                                                  "child-menu-item",
                                                              },
                                                              {
                                                                default: u(
                                                                  () => [
                                                                    p(
                                                                      d(
                                                                        i.$t(
                                                                          o.mobileTitle,
                                                                        ),
                                                                      ),
                                                                      1,
                                                                    ),
                                                                  ],
                                                                ),
                                                                _: 2,
                                                              },
                                                              1032,
                                                              ["to"],
                                                            ))
                                                          : (n(),
                                                            h(
                                                              c,
                                                              {
                                                                key: 0,
                                                                class:
                                                                  "child-menu-item",
                                                                to: i.localePath(
                                                                  o.url,
                                                                ),
                                                                onClick: t(M),
                                                              },
                                                              {
                                                                default: u(
                                                                  () => [
                                                                    p(
                                                                      d(
                                                                        i.$t(
                                                                          o.mobileTitle,
                                                                        ),
                                                                      ),
                                                                      1,
                                                                    ),
                                                                  ],
                                                                ),
                                                                _: 2,
                                                              },
                                                              1032,
                                                              ["to", "onClick"],
                                                            )),
                                                      ],
                                                      64,
                                                    ))
                                                  : (n(),
                                                    s(
                                                      "span",
                                                      {
                                                        key: 1,
                                                        class:
                                                          "child-menu-item cursor-pointer",
                                                        innerHTML: i.$t(
                                                          o.title,
                                                        ),
                                                      },
                                                      null,
                                                      8,
                                                      Ae,
                                                    )),
                                              ],
                                              64,
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ],
                                    512,
                                  ))
                                : R("", !0),
                            ],
                            2,
                          ),
                        ),
                        64,
                      )),
                    ]),
                    l("div", De, [
                      l("div", Ee, [
                        (n(),
                        s(
                          r,
                          null,
                          k(j, (e) =>
                            l(
                              "div",
                              {
                                class: g([
                                  "mobile-menu-item text-white font-medium w-1/2",
                                  (e.url !== "/" && e.url === t(a)) ||
                                  (e.url === "/" &&
                                    (t(a) === "/" || t(a) === "/en"))
                                    ? "active"
                                    : "",
                                ]),
                              },
                              [
                                l("div", Oe, [
                                  _(
                                    c,
                                    { to: i.localePath(e.url), onClick: t(M) },
                                    {
                                      default: u(() => [
                                        p(d(i.$t(e.title)), 1),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["to", "onClick"],
                                  ),
                                ]),
                              ],
                              2,
                            ),
                          ),
                          64,
                        )),
                      ]),
                    ]),
                  ],
                  512,
                ),
              ],
              512,
            )
          );
        }
      );
    },
  });
const et = K(Qe, [["__scopeId", "data-v-0491c19b"]]);
export { et as default };
