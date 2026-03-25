import {
  u as D,
  bY as V,
  H as B,
  bZ as C,
  a4 as k,
  a1 as N,
  au as x,
  a5 as t,
  _ as w,
} from "./entry.8aa394d7.js";
import {
  j as l,
  k as L,
  af as g,
  m as M,
  Q as n,
  a0 as m,
  S as d,
  u as i,
  R as v,
  a2 as f,
  F as S,
  _ as j,
  z as E,
  Y as y,
  a8 as T,
} from "./swiper-vue.d5cda4d1.js";
import { _ as A } from "./dynamic-import-helper.be004503.js";
const q = (e) =>
    Object.fromEntries(Object.entries(e).filter(([, o]) => o !== void 0)),
  _ = (e, o) => (s, r) => (
    D(() => e({ ...q(s), ...r.attrs }, r)),
    () => {
      var p, u;
      return o
        ? (u = (p = r.slots).default) == null
          ? void 0
          : u.call(p)
        : null;
    }
  ),
  c = {
    accesskey: String,
    autocapitalize: String,
    autofocus: { type: Boolean, default: void 0 },
    class: [String, Object, Array],
    contenteditable: { type: Boolean, default: void 0 },
    contextmenu: String,
    dir: String,
    draggable: { type: Boolean, default: void 0 },
    enterkeyhint: String,
    exportparts: String,
    hidden: { type: Boolean, default: void 0 },
    id: String,
    inputmode: String,
    is: String,
    itemid: String,
    itemprop: String,
    itemref: String,
    itemscope: String,
    itemtype: String,
    lang: String,
    nonce: String,
    part: String,
    slot: String,
    spellcheck: { type: Boolean, default: void 0 },
    style: String,
    tabindex: String,
    title: String,
    translate: String,
  },
  $ = l({
    name: "Link",
    inheritAttrs: !1,
    props: {
      ...c,
      as: String,
      crossorigin: String,
      disabled: Boolean,
      fetchpriority: String,
      href: String,
      hreflang: String,
      imagesizes: String,
      imagesrcset: String,
      integrity: String,
      media: String,
      prefetch: { type: Boolean, default: void 0 },
      referrerpolicy: String,
      rel: String,
      sizes: String,
      title: String,
      type: String,
      methods: String,
      target: String,
      body: Boolean,
      renderPriority: [String, Number],
    },
    setup: _((e) => ({ link: [e] })),
  }),
  z = l({
    name: "Meta",
    inheritAttrs: !1,
    props: {
      ...c,
      charset: String,
      content: String,
      httpEquiv: String,
      name: String,
      body: Boolean,
      renderPriority: [String, Number],
    },
    setup: _((e) => {
      const o = { ...e };
      return (
        o.httpEquiv && ((o["http-equiv"] = o.httpEquiv), delete o.httpEquiv),
        { meta: [o] }
      );
    }),
  }),
  U = l({
    name: "Head",
    inheritAttrs: !1,
    setup: (e, o) => () => {
      var s, r;
      return (r = (s = o.slots).default) == null ? void 0 : r.call(s);
    },
  }),
  W = l({
    name: "Html",
    inheritAttrs: !1,
    props: {
      ...c,
      manifest: String,
      version: String,
      xmlns: String,
      renderPriority: [String, Number],
    },
    setup: _((e) => ({ htmlAttrs: e }), !0),
  }),
  Y = l({
    name: "Body",
    inheritAttrs: !1,
    props: { ...c, renderPriority: [String, Number] },
    setup: _((e) => ({ bodyAttrs: e }), !0),
  }),
  Q = { class: "layout-default" },
  Z = { id: "main-body", class: "main-body server" },
  G = l({
    __name: "default",
    setup(e) {
      const o = V(),
        s = B(),
        r = C({
          addDirAttribute: !0,
          identifierAttribute: "id",
          addSeoAttributes: !0,
        }),
        p = N(),
        { facultyCode: u } = k(),
        F = L(() =>
          g(async () =>
            u.value
              ? await A(
                  Object.assign({
                    "../components/FacultyTemplates/BAM/Layout/LayoutHeader.vue":
                      () =>
                        t(
                          () => import("./LayoutHeader.4327bf3b.js"),
                          [
                            "./LayoutHeader.4327bf3b.js",
                            "./LayoutHeader.a10662b5.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./menu.9ec1f719.js",
                            "./CaretDownFilled.b9cab49d.js",
                            "./menu.1459038a.css",
                            "./index.62c724d1.js",
                            "./transform-translate-faculty.c0e2ceae.js",
                            "./IFaculty.97f6e59d.js",
                            "./close.5df02e05.js",
                            "./chevron-right.7cc4ed2d.js",
                            "./index.97fcacb7.js",
                            "./constant.9400de67.js",
                            "./LayoutHeader.4ddc101d.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/Core/Layout/LayoutHeader.vue":
                      () =>
                        t(
                          () => import("./LayoutHeader.a10662b5.js"),
                          [
                            "./LayoutHeader.a10662b5.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./menu.9ec1f719.js",
                            "./CaretDownFilled.b9cab49d.js",
                            "./menu.1459038a.css",
                            "./index.62c724d1.js",
                            "./transform-translate-faculty.c0e2ceae.js",
                            "./IFaculty.97f6e59d.js",
                            "./close.5df02e05.js",
                            "./chevron-right.7cc4ed2d.js",
                            "./index.97fcacb7.js",
                            "./constant.9400de67.js",
                            "./LayoutHeader.4ddc101d.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/FBA/Layout/LayoutHeader.vue":
                      () =>
                        t(
                          () => import("./LayoutHeader.fb8b9044.js"),
                          [
                            "./LayoutHeader.fb8b9044.js",
                            "./LayoutHeader.a10662b5.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./menu.9ec1f719.js",
                            "./CaretDownFilled.b9cab49d.js",
                            "./menu.1459038a.css",
                            "./index.62c724d1.js",
                            "./transform-translate-faculty.c0e2ceae.js",
                            "./IFaculty.97f6e59d.js",
                            "./close.5df02e05.js",
                            "./chevron-right.7cc4ed2d.js",
                            "./index.97fcacb7.js",
                            "./constant.9400de67.js",
                            "./LayoutHeader.4ddc101d.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/HEAL/Layout/LayoutHeader.vue":
                      () =>
                        t(
                          () => import("./LayoutHeader.073a9e0e.js"),
                          [
                            "./LayoutHeader.073a9e0e.js",
                            "./LayoutHeader.a10662b5.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./menu.9ec1f719.js",
                            "./CaretDownFilled.b9cab49d.js",
                            "./menu.1459038a.css",
                            "./index.62c724d1.js",
                            "./transform-translate-faculty.c0e2ceae.js",
                            "./IFaculty.97f6e59d.js",
                            "./close.5df02e05.js",
                            "./chevron-right.7cc4ed2d.js",
                            "./index.97fcacb7.js",
                            "./constant.9400de67.js",
                            "./LayoutHeader.4ddc101d.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/HOST/Layout/LayoutHeader.vue":
                      () =>
                        t(
                          () => import("./LayoutHeader.f4ab0f89.js"),
                          [
                            "./LayoutHeader.f4ab0f89.js",
                            "./LayoutHeader.a10662b5.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./menu.9ec1f719.js",
                            "./CaretDownFilled.b9cab49d.js",
                            "./menu.1459038a.css",
                            "./index.62c724d1.js",
                            "./transform-translate-faculty.c0e2ceae.js",
                            "./IFaculty.97f6e59d.js",
                            "./close.5df02e05.js",
                            "./chevron-right.7cc4ed2d.js",
                            "./index.97fcacb7.js",
                            "./constant.9400de67.js",
                            "./LayoutHeader.4ddc101d.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/IPIC/Layout/LayoutHeader.vue":
                      () =>
                        t(
                          () => import("./LayoutHeader.c1df1cc8.js"),
                          [
                            "./LayoutHeader.c1df1cc8.js",
                            "./LayoutHeader.a10662b5.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./menu.9ec1f719.js",
                            "./CaretDownFilled.b9cab49d.js",
                            "./menu.1459038a.css",
                            "./index.62c724d1.js",
                            "./transform-translate-faculty.c0e2ceae.js",
                            "./IFaculty.97f6e59d.js",
                            "./close.5df02e05.js",
                            "./chevron-right.7cc4ed2d.js",
                            "./index.97fcacb7.js",
                            "./constant.9400de67.js",
                            "./LayoutHeader.4ddc101d.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/LAN/Layout/LayoutHeader.vue":
                      () =>
                        t(
                          () => import("./LayoutHeader.fd9fd71c.js"),
                          [
                            "./LayoutHeader.fd9fd71c.js",
                            "./LayoutHeader.a10662b5.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./menu.9ec1f719.js",
                            "./CaretDownFilled.b9cab49d.js",
                            "./menu.1459038a.css",
                            "./index.62c724d1.js",
                            "./transform-translate-faculty.c0e2ceae.js",
                            "./IFaculty.97f6e59d.js",
                            "./close.5df02e05.js",
                            "./chevron-right.7cc4ed2d.js",
                            "./index.97fcacb7.js",
                            "./constant.9400de67.js",
                            "./LayoutHeader.4ddc101d.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/LAW/Layout/LayoutHeader.vue":
                      () =>
                        t(
                          () => import("./LayoutHeader.e5ff6837.js"),
                          [
                            "./LayoutHeader.e5ff6837.js",
                            "./LayoutHeader.a10662b5.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./menu.9ec1f719.js",
                            "./CaretDownFilled.b9cab49d.js",
                            "./menu.1459038a.css",
                            "./index.62c724d1.js",
                            "./transform-translate-faculty.c0e2ceae.js",
                            "./IFaculty.97f6e59d.js",
                            "./close.5df02e05.js",
                            "./chevron-right.7cc4ed2d.js",
                            "./index.97fcacb7.js",
                            "./constant.9400de67.js",
                            "./LayoutHeader.4ddc101d.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/TEC/Layout/LayoutHeader.vue":
                      () =>
                        t(
                          () => import("./LayoutHeader.07c2292f.js"),
                          [
                            "./LayoutHeader.07c2292f.js",
                            "./LayoutHeader.a10662b5.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./menu.9ec1f719.js",
                            "./CaretDownFilled.b9cab49d.js",
                            "./menu.1459038a.css",
                            "./index.62c724d1.js",
                            "./transform-translate-faculty.c0e2ceae.js",
                            "./IFaculty.97f6e59d.js",
                            "./close.5df02e05.js",
                            "./chevron-right.7cc4ed2d.js",
                            "./index.97fcacb7.js",
                            "./constant.9400de67.js",
                            "./LayoutHeader.4ddc101d.css",
                          ],
                          import.meta.url
                        ),
                  }),
                  `../components/FacultyTemplates/${u.value}/Layout/LayoutHeader.vue`
                )
              : await t(
                  () => import("./LayoutHeader.37541499.js"),
                  [
                    "./LayoutHeader.37541499.js",
                    "./nuxt-link.58f89fff.js",
                    "./entry.8aa394d7.js",
                    "./swiper-vue.d5cda4d1.js",
                    "./swiper-vue.62a11922.css",
                    "./entry.6812f4f1.css",
                    "./menu.9ec1f719.js",
                    "./CaretDownFilled.b9cab49d.js",
                    "./menu.1459038a.css",
                    "./close.5df02e05.js",
                    "./chevron-right.7cc4ed2d.js",
                    "./index.97fcacb7.js",
                    "./LayoutHeader.abb24ee5.css",
                  ],
                  import.meta.url
                )
          )
        ),
        h = L(() =>
          g(async () =>
            u.value
              ? await A(
                  Object.assign({
                    "../components/FacultyTemplates/BAM/Layout/LayoutFooter.vue":
                      () =>
                        t(
                          () => import("./LayoutFooter.d82401b2.js"),
                          [
                            "./LayoutFooter.d82401b2.js",
                            "./LayoutFooter.9e4d3c06.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./mail-icon.642c2b2a.js",
                            "./place-icon.a072a836.js",
                            "./LayoutFooter.057f88bb.css",
                            "./LayoutFooter.c9f553c7.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/Core/Layout/LayoutFooter.vue":
                      () =>
                        t(
                          () => import("./LayoutFooter.9e4d3c06.js"),
                          [
                            "./LayoutFooter.9e4d3c06.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./mail-icon.642c2b2a.js",
                            "./place-icon.a072a836.js",
                            "./LayoutFooter.057f88bb.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/FBA/Layout/LayoutFooter.vue":
                      () =>
                        t(
                          () => import("./LayoutFooter.91fbee8c.js"),
                          [
                            "./LayoutFooter.91fbee8c.js",
                            "./LayoutFooter.9e4d3c06.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./mail-icon.642c2b2a.js",
                            "./place-icon.a072a836.js",
                            "./LayoutFooter.057f88bb.css",
                            "./LayoutFooter.4cc1814b.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/HEAL/Layout/LayoutFooter.vue":
                      () =>
                        t(
                          () => import("./LayoutFooter.8b75e23c.js"),
                          [
                            "./LayoutFooter.8b75e23c.js",
                            "./LayoutFooter.9e4d3c06.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./mail-icon.642c2b2a.js",
                            "./place-icon.a072a836.js",
                            "./LayoutFooter.057f88bb.css",
                            "./LayoutFooter.66920fd8.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/HOST/Layout/LayoutFooter.vue":
                      () =>
                        t(
                          () => import("./LayoutFooter.5c47a186.js"),
                          [
                            "./LayoutFooter.5c47a186.js",
                            "./LayoutFooter.9e4d3c06.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./mail-icon.642c2b2a.js",
                            "./place-icon.a072a836.js",
                            "./LayoutFooter.057f88bb.css",
                            "./LayoutFooter.7ff0d759.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/IPIC/Layout/LayoutFooter.vue":
                      () =>
                        t(
                          () => import("./LayoutFooter.3e187410.js"),
                          [
                            "./LayoutFooter.3e187410.js",
                            "./LayoutFooter.9e4d3c06.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./mail-icon.642c2b2a.js",
                            "./place-icon.a072a836.js",
                            "./LayoutFooter.057f88bb.css",
                            "./LayoutFooter.df3adb29.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/LAN/Layout/LayoutFooter.vue":
                      () =>
                        t(
                          () => import("./LayoutFooter.1b641b5c.js"),
                          [
                            "./LayoutFooter.1b641b5c.js",
                            "./LayoutFooter.9e4d3c06.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./mail-icon.642c2b2a.js",
                            "./place-icon.a072a836.js",
                            "./LayoutFooter.057f88bb.css",
                            "./LayoutFooter.c3454f21.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/LAW/Layout/LayoutFooter.vue":
                      () =>
                        t(
                          () => import("./LayoutFooter.4b37efd9.js"),
                          [
                            "./LayoutFooter.4b37efd9.js",
                            "./LayoutFooter.9e4d3c06.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./mail-icon.642c2b2a.js",
                            "./place-icon.a072a836.js",
                            "./LayoutFooter.057f88bb.css",
                            "./LayoutFooter.afd7eda3.css",
                          ],
                          import.meta.url
                        ),
                    "../components/FacultyTemplates/TEC/Layout/LayoutFooter.vue":
                      () =>
                        t(
                          () => import("./LayoutFooter.ad71c790.js"),
                          [
                            "./LayoutFooter.ad71c790.js",
                            "./LayoutFooter.9e4d3c06.js",
                            "./nuxt-link.58f89fff.js",
                            "./entry.8aa394d7.js",
                            "./swiper-vue.d5cda4d1.js",
                            "./swiper-vue.62a11922.css",
                            "./entry.6812f4f1.css",
                            "./mail-icon.642c2b2a.js",
                            "./place-icon.a072a836.js",
                            "./LayoutFooter.057f88bb.css",
                            "./LayoutFooter.1e9b59a4.css",
                          ],
                          import.meta.url
                        ),
                  }),
                  `../components/FacultyTemplates/${u.value}/Layout/LayoutFooter.vue`
                )
              : await t(
                  () => import("./LayoutFooter.7ba28b53.js"),
                  [
                    "./LayoutFooter.7ba28b53.js",
                    "./nuxt-link.58f89fff.js",
                    "./entry.8aa394d7.js",
                    "./swiper-vue.d5cda4d1.js",
                    "./swiper-vue.62a11922.css",
                    "./entry.6812f4f1.css",
                    "./mail-icon.642c2b2a.js",
                    "./place-icon.a072a836.js",
                    "./LayoutFooter.7de6deea.css",
                  ],
                  import.meta.url
                )
          )
        );
      return (
        M(() => {
          document.getElementById("main-body").classList.remove("server");
        }),
        (J, K) => {
          const P = $,
            O = z,
            b = U,
            R = x,
            I = Y,
            H = W;
          return (
            n(),
            m(
              H,
              { lang: i(r).htmlAttrs.lang },
              {
                default: d(() => [
                  i(s).name.includes("news-event-news-alias")
                    ? j("", !0)
                    : (n(),
                      m(
                        b,
                        { key: 0 },
                        {
                          default: d(() => [
                            (n(!0),
                            v(
                              S,
                              null,
                              f(
                                i(r).link,
                                (a) => (
                                  n(),
                                  m(
                                    P,
                                    {
                                      key: a.id,
                                      rel: a.rel,
                                      href: `${i(p).public.URL_PROTOCOL}//${
                                        i(o).host
                                      }${a.href}`,
                                      hreflang: a.hreflang,
                                    },
                                    null,
                                    8,
                                    ["rel", "href", "hreflang"]
                                  )
                                )
                              ),
                              128
                            )),
                            (n(!0),
                            v(
                              S,
                              null,
                              f(
                                i(r).meta,
                                (a) => (
                                  n(),
                                  m(
                                    O,
                                    {
                                      key: a.id,
                                      property: a.property,
                                      content: a.content,
                                    },
                                    null,
                                    8,
                                    ["property", "content"]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 1,
                        }
                      )),
                  E(I, null, {
                    default: d(() => [
                      y("div", Q, [
                        (n(), m(T(i(F)))),
                        y("div", Z, [E(R)]),
                        y("footer", null, [(n(), m(T(i(h))))]),
                      ]),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["lang"]
            )
          );
        }
      );
    },
  });
const ot = w(G, [["__scopeId", "data-v-78b9ef6d"]]);
export { ot as default };
