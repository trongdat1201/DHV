import { u as J } from "./index.92524a9b.js";
import {
  H as U,
  R as Z,
  Y as q,
  N as Y,
  $ as K,
  O as Q,
  S as X,
  L as l,
  _ as F,
  J as B,
  a3 as N,
  T as D,
  b_ as H,
  D as x,
  c3 as tt,
  c4 as et,
} from "./entry.8aa394d7.js";
import { H as C, G as A, A as R } from "./constant.9400de67.js";
import {
  a as $,
  k as G,
  Q as r,
  R as y,
  Y as a,
  j as S,
  V as W,
  u as t,
  z as g,
  X as p,
  a0 as f,
  F as j,
  _ as T,
  y as at,
  a2 as P,
  S as M,
  Z as k,
  M as ot,
} from "./swiper-vue.d5cda4d1.js";
import { u as nt } from "./transform-translate-faculty.c0e2ceae.js";
import { _ as E } from "./JsonContent.828a79a5.js";
import { _ as V } from "./NuxtImg.vue.916c2d60.js";
import { _ as st } from "./nuxt-link.58f89fff.js";
import { _ as it } from "./client-only.42178d49.js";
import { u as lt } from "./breakpoints-screen.85b51075.js";
const ct = async () => {
    const { findPageInfoByName: o } = J(),
      u = U(),
      n = Z(),
      i = $(null),
      e = q("pageData", () => $(null)),
      c = G(() => u.query.section || _.value[0]),
      _ = $([C, A, R]);
    return (
      await Y(async () => {
        if (K.value || !e.value) {
          const s = await o(Q.HR_ORGANIZATIONAL_STRUCTURE);
          s && (e.value = s);
        }
      }, "$5fW1k9MVw5"),
      {
        mainBody: i,
        pageData: e,
        activeSection: c,
        handleChangeSection: (s) => {
          var h;
          n.push({ query: { section: s } }),
            window.scrollY > 200 &&
              X((h = i.value) == null ? void 0 : h.offsetTop);
        },
        getSectionByType: (s) => {
          var h;
          return (h = e == null ? void 0 : e.value) == null
            ? void 0
            : h.pageSections.find((m) => m.type === s);
        },
      }
    );
  },
  oe = ct,
  rt = {
    width: "434",
    height: "437",
    viewBox: "0 0 434 437",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
  },
  dt = a(
    "path",
    { opacity: "0.8", d: "M433.5 240L0 0V436.5L433.5 240Z" },
    null,
    -1
  ),
  ut = [dt];
function _t(o, u) {
  return r(), y("svg", rt, ut);
}
const ht = { render: _t },
  mt = { class: "hr-organizational-structure__introduction-section" },
  gt = { class: "relative w-full h-full" },
  pt = ["src", "alt"],
  ft = { class: "absolute triangle-overlay" },
  vt = {
    class:
      "z-[2] container absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-8 w-full hidden lg:flex",
  },
  yt = { class: "title font-unbounded uppercase" },
  bt = { class: "container w-full flex justify-center lg:hidden !my-3" },
  Lt = { class: "title font-unbounded uppercase" },
  $t = S({
    __name: "Introduction",
    props: { data: { type: Object, default: () => {} } },
    setup(o) {
      const { transformKeyTranslateLanguage: u } = nt(),
        n = u("faculty_introduction", "title");
      return (i, e) =>
        W(
          i.$slots,
          "default",
          {},
          () => {
            var c, _;
            return [
              a("div", mt, [
                a("div", gt, [
                  a(
                    "img",
                    {
                      class: "image-banner",
                      src:
                        (c = (
                          "getFieldWithLocale" in i
                            ? i.getFieldWithLocale
                            : t(l)
                        )(o.data, "picturePageInfo")) == null
                          ? void 0
                          : c.url,
                      alt:
                        (_ = (
                          "getFieldWithLocale" in i
                            ? i.getFieldWithLocale
                            : t(l)
                        )(o.data, "picturePageInfo")) == null
                          ? void 0
                          : _.alt,
                    },
                    null,
                    8,
                    pt
                  ),
                  a("div", ft, [g(t(ht))]),
                  a("div", vt, [a("h1", yt, p(i.$t(t(n))), 1)]),
                ]),
                a("div", bt, [a("h1", Lt, p(i.$t(t(n))), 1)]),
              ]),
            ];
          },
          !0
        );
    },
  });
const ne = F($t, [["__scopeId", "data-v-c61e27b9"]]),
  Ft = {
    class: "hr-organizational-structure__admissions-information-section h-full",
  },
  St = { class: "section-title font-unbounded mb-3" },
  Wt = { class: "content h-full" },
  wt = S({
    __name: "AdmissionsInformation",
    props: { data: { type: Object, default: () => {} } },
    setup(o) {
      return (
        B(o.data.metadata),
        (n, i) => {
          const e = E,
            c = D;
          return W(
            n.$slots,
            "default",
            {},
            () => [
              a("div", Ft, [
                a("h2", St, p(n.$t("admissions_information.title")), 1),
                a("div", Wt, [
                  t(N)(
                    ("getFieldWithLocale" in n ? n.getFieldWithLocale : t(l))(
                      o.data,
                      "description"
                    )
                  )
                    ? (r(), f(c, { key: 1 }))
                    : (r(),
                      f(
                        e,
                        {
                          key: 0,
                          class: "editorjs-font-small",
                          content: ("getFieldWithLocale" in n
                            ? n.getFieldWithLocale
                            : t(l))(o.data, "description"),
                        },
                        null,
                        8,
                        ["content"]
                      )),
                ]),
              ]),
            ],
            !0
          );
        }
      );
    },
  });
const se = F(wt, [["__scopeId", "data-v-bfd3f85f"]]),
  It = {
    class: "hr-organizational-structure__growth-direction-section h-full",
  },
  zt = { class: "section-title font-unbounded mb-3" },
  kt = { class: "content h-full" },
  Tt = S({
    __name: "GrowthDirection",
    props: { data: { type: Object, default: () => {} } },
    setup(o) {
      return (
        B(o.data.metadata),
        (n, i) => {
          const e = E,
            c = D;
          return W(
            n.$slots,
            "default",
            {},
            () => [
              a("div", It, [
                a("h2", zt, p(n.$t("growth_direction.title")), 1),
                a("div", kt, [
                  t(N)(
                    ("getFieldWithLocale" in n ? n.getFieldWithLocale : t(l))(
                      o.data,
                      "description"
                    )
                  )
                    ? (r(), f(c, { key: 1 }))
                    : (r(),
                      f(
                        e,
                        {
                          key: 0,
                          class: "editorjs-font-small",
                          content: ("getFieldWithLocale" in n
                            ? n.getFieldWithLocale
                            : t(l))(o.data, "description"),
                        },
                        null,
                        8,
                        ["content"]
                      )),
                ]),
              ]),
            ],
            !0
          );
        }
      );
    },
  });
const ie = F(Tt, [["__scopeId", "data-v-84a8cbcd"]]),
  Nt = {
    class: "hr-organizational-structure__organization-structure-section h-full",
  },
  Ot = { class: "hr-organizational-structure__chart-wrapper" },
  Ct = { class: "section-title font-unbounded mb-3" },
  At = { class: "w-10/12 mx-auto aspect-[700/968]" },
  Rt = { class: "hr-organizational-structure__logo-bg" },
  jt = ["src", "alt"],
  Bt = {
    key: 0,
    class: "hr-organizational-structure__description mt-4 lg:mt-5",
  },
  Dt = S({
    __name: "OrganizationStructure",
    props: { data: { type: Object, default: () => {} } },
    setup(o) {
      var i;
      const u = o,
        { generalInformation: n } = H();
      return (
        B((i = u.data) == null ? void 0 : i.metadata),
        (e, c) => {
          const _ = V,
            w = E,
            b = D;
          return W(
            e.$slots,
            "default",
            {},
            () => {
              var s, h, m, I, z, d;
              return [
                a("div", Nt, [
                  a("div", Ot, [
                    a(
                      "h2",
                      Ct,
                      p(e.$t("hr_organizational_structure.title")),
                      1
                    ),
                    (s = (
                      "getFieldWithLocale" in e ? e.getFieldWithLocale : t(l)
                    )(o.data, "picturePageSection")) != null && s.url
                      ? (r(),
                        y(
                          j,
                          { key: 0 },
                          [
                            a("div", At, [
                              g(
                                _,
                                {
                                  class: "w-full h-full inline-block",
                                  src:
                                    (h = (
                                      "getFieldWithLocale" in e
                                        ? e.getFieldWithLocale
                                        : t(l)
                                    )(o.data, "picturePageSection")) == null
                                      ? void 0
                                      : h.url,
                                  alt:
                                    (m = (
                                      "getFieldWithLocale" in e
                                        ? e.getFieldWithLocale
                                        : t(l)
                                    )(o.data, "picturePageSection")) == null
                                      ? void 0
                                      : m.alt,
                                  loading: "lazy",
                                  sizes: "sm:60vw md:70vw",
                                },
                                null,
                                8,
                                ["src", "alt"]
                              ),
                            ]),
                            a("div", Rt, [
                              a(
                                "img",
                                {
                                  class: "w-full h-full",
                                  src:
                                    (I = (
                                      "getFieldWithLocale" in e
                                        ? e.getFieldWithLocale
                                        : t(l)
                                    )(t(n), "pictureFacultyLogo")) == null
                                      ? void 0
                                      : I.url,
                                  alt:
                                    (z = (
                                      "getFieldWithLocale" in e
                                        ? e.getFieldWithLocale
                                        : t(l)
                                    )(t(n), "pictureFacultyLogo")) == null
                                      ? void 0
                                      : z.alt,
                                },
                                null,
                                8,
                                jt
                              ),
                            ]),
                          ],
                          64
                        ))
                      : T("", !0),
                  ]),
                  t(N)(
                    ("getFieldWithLocale" in e ? e.getFieldWithLocale : t(l))(
                      o.data,
                      "description"
                    )
                  )
                    ? T("", !0)
                    : (r(),
                      y("div", Bt, [
                        g(
                          w,
                          {
                            class: "editorjs-font-small",
                            content: ("getFieldWithLocale" in e
                              ? e.getFieldWithLocale
                              : t(l))(o.data, "description"),
                          },
                          null,
                          8,
                          ["content"]
                        ),
                      ])),
                  !(
                    (d = (
                      "getFieldWithLocale" in e ? e.getFieldWithLocale : t(l)
                    )(o.data, "picturePageSection")) != null && d.url
                  ) &&
                  t(N)(
                    ("getFieldWithLocale" in e ? e.getFieldWithLocale : t(l))(
                      o.data,
                      "description"
                    )
                  )
                    ? (r(), f(b, { key: 1 }))
                    : T("", !0),
                ]),
              ];
            },
            !0
          );
        }
      );
    },
  });
const le = F(Dt, [["__scopeId", "data-v-25e2cce5"]]),
  Et = { class: "hr-organizational-structure__sidebar-wrapper" },
  Pt = { class: "hidden lg:flex flex-col h-full gap-10" },
  Mt = { class: "hr-organizational-structure__sidebar-list-section" },
  Ht = { class: "flex-1 item-name mb-0" },
  Gt = { class: "mascot-bg" },
  Vt = ["onClick"],
  Jt = { class: "flex-1 item-name mb-0" },
  Ut = S({
    __name: "Sidebar",
    props: { activeSection: { type: String, default: "" } },
    emits: ["changeSection"],
    setup(o, { emit: u }) {
      const { t: n } = x(),
        i = G(() => [
          { id: C, name: n(`${C.replaceAll("-", "_")}.title`) },
          { id: A, name: n(`${A.replaceAll("-", "_")}.title`) },
          { id: R, name: n(`${R.replaceAll("-", "_")}.title`) },
        ]),
        { breakpoints: e } = lt(),
        { generalInformation: c } = H(),
        _ = $(null),
        w = $(null);
      at(() => {
        document.addEventListener("scroll", async () => {
          const s = document.getElementById(
            "hr-organizational-structure-sidebar-mobile"
          );
          _.value = e.isSmaller("lg") && (await tt(s));
        });
      });
      const b = (s) => {
        u("changeSection", s.id);
      };
      return (s, h) => {
        const m = V,
          I = st,
          z = it;
        return W(
          s.$slots,
          "default",
          {},
          () => [
            a("div", Et, [
              a("div", Pt, [
                a("div", Mt, [
                  (r(!0),
                  y(
                    j,
                    null,
                    P(
                      t(i),
                      (d) => (
                        r(),
                        f(
                          I,
                          {
                            class: k([
                              "hr-organizational-structure__sidebar-list-section__item flex items-center justify-between gap-6",
                              { active: o.activeSection === d.id },
                            ]),
                            to: s.localePath({
                              path: "/faculty-introduction/hr-organizational-structure",
                              query: { section: d.id },
                            }),
                            onClick: (v) => b(d),
                          },
                          {
                            default: M(() => {
                              var v, L, O;
                              return [
                                g(
                                  m,
                                  {
                                    class: "logo opacity-50",
                                    src:
                                      (v = (
                                        "getFieldWithLocale" in s
                                          ? s.getFieldWithLocale
                                          : t(l)
                                      )(t(c), "pictureFacultyLogo")) == null
                                        ? void 0
                                        : v.url,
                                    alt:
                                      (O =
                                        (L = t(c)) == null
                                          ? void 0
                                          : L.pictureFacultyLogo) == null
                                        ? void 0
                                        : O.alt,
                                    sizes: "sm:20vw md:15vw",
                                  },
                                  null,
                                  8,
                                  ["src", "alt"]
                                ),
                                a("p", Ht, p(d.name), 1),
                              ];
                            }),
                            _: 2,
                          },
                          1032,
                          ["class", "to", "onClick"]
                        )
                      )
                    ),
                    256
                  )),
                ]),
                a("div", Gt, [
                  g(m, {
                    src: "/assets/images/mascot/mascot-full-2.webp",
                    alt: "Mascot faculty sidebar",
                    sizes: "sm:40vw md:10vw",
                  }),
                ]),
              ]),
              a(
                "div",
                { ref_key: "sidebarRef", ref: w, class: "sidebar-mobile" },
                [
                  g(z, null, {
                    default: M(() => [
                      t(e).isSmaller("lg")
                        ? (r(),
                          f(
                            ot,
                            { key: 0, to: "#extra", disabled: !t(_) },
                            [
                              a(
                                "div",
                                {
                                  id: "hr-organizational-structure-sidebar-mobile",
                                  class: k([
                                    "hr-organizational-structure__sidebar-list-section--mobile flex",
                                    { container: t(_) },
                                  ]),
                                },
                                [
                                  (r(!0),
                                  y(
                                    j,
                                    null,
                                    P(t(i), (d) => {
                                      var v, L;
                                      return (
                                        r(),
                                        y(
                                          "div",
                                          {
                                            class: k([
                                              "hr-organizational-structure__sidebar-list-section__item flex-1 px-3 text-center",
                                              {
                                                active:
                                                  o.activeSection === d.id,
                                              },
                                            ]),
                                            onClick: (O) => b(d),
                                          },
                                          [
                                            a(
                                              "div",
                                              {
                                                class: k([
                                                  {
                                                    safari: ("checkSafari" in s
                                                      ? s.checkSafari
                                                      : t(et))(),
                                                  },
                                                  "logo mb-2",
                                                ]),
                                              },
                                              [
                                                g(
                                                  m,
                                                  {
                                                    class:
                                                      "w-full h-full object-contain",
                                                    src:
                                                      (v = (
                                                        "getFieldWithLocale" in
                                                          s
                                                          ? s.getFieldWithLocale
                                                          : t(l)
                                                      )(
                                                        t(c),
                                                        "pictureFacultyLogo"
                                                      )) == null
                                                        ? void 0
                                                        : v.url,
                                                    alt:
                                                      (L = (
                                                        "getFieldWithLocale" in
                                                          s
                                                          ? s.getFieldWithLocale
                                                          : t(l)
                                                      )(
                                                        t(c),
                                                        "pictureFacultyLogo"
                                                      )) == null
                                                        ? void 0
                                                        : L.alt,
                                                    sizes: "sm:20vw md:10vw",
                                                  },
                                                  null,
                                                  8,
                                                  ["src", "alt"]
                                                ),
                                              ],
                                              2
                                            ),
                                            a("p", Jt, p(d.name), 1),
                                          ],
                                          10,
                                          Vt
                                        )
                                      );
                                    }),
                                    256
                                  )),
                                ],
                                2
                              ),
                            ],
                            8,
                            ["disabled"]
                          ))
                        : T("", !0),
                    ]),
                    _: 1,
                  }),
                ],
                512
              ),
            ]),
          ],
          !0
        );
      };
    },
  });
const ce = F(Ut, [["__scopeId", "data-v-98528c5e"]]);
export { ne as _, se as a, ie as b, le as c, ce as d, oe as u };
