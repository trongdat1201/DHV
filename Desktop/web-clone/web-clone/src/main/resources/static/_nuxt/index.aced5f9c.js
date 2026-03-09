import { _ as b } from "./AppBreadcrumb.1a0221cf.js";
import { u as P, _ as S } from "./index.58583e8f.js";
import {
  u as x,
  bS as y,
  N as w,
  $ as A,
  O as l,
  J as I,
  _ as N,
} from "./entry.8aa394d7.js";
import { u as L } from "./index.92524a9b.js";
import { _ as C } from "./half-circle-bg.cf46304b.js";
import { S as H } from "./index.010e93e7.js";
import {
  j as T,
  al as B,
  Q as M,
  R,
  z as o,
  Y as t,
  X as U,
  S as V,
  u as c,
  F as k,
  ai as D,
  aj as O,
} from "./swiper-vue.d5cda4d1.js";
import "./nuxt-link.58f89fff.js";
import "./client-only.42178d49.js";
import "./breadcrumb.bc5fa9d7.js";
import "./transform-translate-faculty.c0e2ceae.js";
import "./IFaculty.97f6e59d.js";
import "./arrow-two-color.11c559b9.js";
import "./index.a66880e0.js";
import "./Trigger.dd535606.js";
import "./isVisible.48fa23e0.js";
import "./PortalWrapper.438f60b2.js";
import "./motion.d46d0bbf.js";
import "./_baseIsEqual.42871e3f.js";
import "./firstNotUndefined.29a740f3.js";
import "./zoom.4c1ddb0e.js";
const $ = "" + globalThis.__publicAssetsURL("assets/images/portal/alumni.webp"),
  m = (a) => (D("data-v-4936540c"), (a = a()), O(), a),
  j = { class: "portal-alumni" },
  F = { class: "portal-alumni__banner text-end relative" },
  Q = { class: "section-title" },
  Y = m(() => t("img", { class: "secondary-bg", src: C }, null, -1)),
  q = m(() =>
    t(
      "img",
      {
        class: "main-bg",
        src: $,
        alt: "Cựu sinh viên Trường Đại Học Hùng Vương TP.HCM ((DHV))",
      },
      null,
      -1,
    ),
  ),
  z = { class: "container" },
  E = T({
    __name: "index",
    async setup(a) {
      var _, p;
      let i, n;
      x({
        link: [
          {
            rel: "preload",
            href: "/assets/images/bg/half-circle-bg.webp",
            as: "image",
          },
          {
            rel: "preload",
            href: "/assets/images/portal/alumni.webp",
            as: "image",
          },
        ],
      });
      const { listPortal: r, getPortal: d, loadingState: u } = P(y.ALUMNI),
        { findPageInfoByName: g, pageInfoData: e } = L();
      return (
        ([i, n] = B(async () =>
          w(async () => {
            var s;
            (A.value || !((s = r.value) != null && s.length)) &&
              (await d(), await g(l.PORTAL_ALUMNI));
          }, "$S1CHwqeYQg"),
        )),
        await i,
        n(),
        I(
          (p =
            (_ = e == null ? void 0 : e.value) == null
              ? void 0
              : _[l.PORTAL_ALUMNI]) == null
            ? void 0
            : p.metadata,
        ),
        (s, J) => {
          const f = b,
            h = S,
            v = H;
          return (
            M(),
            R(
              k,
              null,
              [
                o(f),
                t("div", j, [
                  t("div", F, [t("h1", Q, U(s.$t("alumni.title")), 1), Y, q]),
                  t("div", z, [
                    o(
                      v,
                      { spinning: c(u) },
                      {
                        default: V(() => [
                          o(h, { "list-portal": c(r) }, null, 8, [
                            "list-portal",
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      ["spinning"],
                    ),
                  ]),
                ]),
              ],
              64,
            )
          );
        }
      );
    },
  });
const ft = N(E, [["__scopeId", "data-v-4936540c"]]);
export { ft as default };
