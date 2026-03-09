import {
  bg as I,
  bh as S,
  P as z,
  an as D,
  bi as U,
  bj as O,
} from "./entry.8aa394d7.js";
import { w as E } from "./isVisible.48fa23e0.js";
import {
  k as W,
  w as R,
  j as _,
  s as h,
  L as j,
  y as H,
  b as F,
  n as M,
  o as A,
  z as T,
  g as V,
} from "./swiper-vue.d5cda4d1.js";
let $ = !1;
try {
  let e = Object.defineProperty({}, "passive", {
    get() {
      $ = !0;
    },
  });
  window.addEventListener("testPassive", null, e),
    window.removeEventListener("testPassive", null, e);
} catch {}
const q = $;
function ee(e, n, o, t) {
  if (e && e.addEventListener) {
    let r = t;
    r === void 0 &&
      q &&
      (n === "touchstart" || n === "touchmove" || n === "wheel") &&
      (r = { passive: !1 }),
      e.addEventListener(n, o, r);
  }
  return {
    remove: () => {
      e && e.removeEventListener && e.removeEventListener(n, o);
    },
  };
}
let w;
function k(e) {
  if (typeof document > "u") return 0;
  if (e || w === void 0) {
    const n = document.createElement("div");
    (n.style.width = "100%"), (n.style.height = "200px");
    const o = document.createElement("div"),
      t = o.style;
    (t.position = "absolute"),
      (t.top = "0"),
      (t.left = "0"),
      (t.pointerEvents = "none"),
      (t.visibility = "hidden"),
      (t.width = "200px"),
      (t.height = "150px"),
      (t.overflow = "hidden"),
      o.appendChild(n),
      document.body.appendChild(o);
    const r = n.offsetWidth;
    o.style.overflow = "scroll";
    let a = n.offsetWidth;
    r === a && (a = o.clientWidth), document.body.removeChild(o), (w = r - a);
  }
  return w;
}
function P(e) {
  const n = e.match(/^(.*)px$/),
    o = Number(n == null ? void 0 : n[1]);
  return Number.isNaN(o) ? k() : o;
}
function te(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return { width: 0, height: 0 };
  const { width: n, height: o } = getComputedStyle(e, "::-webkit-scrollbar");
  return { width: P(n), height: P(o) };
}
const G = `vc-util-locker-${Date.now()}`;
let L = 0;
function Q() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
function J(e) {
  const n = W(() => !!e && !!e.value);
  L += 1;
  const o = `${G}_${L}`;
  R(
    (t) => {
      if (n.value) {
        const r = k(),
          a = Q();
        I(
          `
html body {
  overflow-y: hidden;
  ${a ? `width: calc(100% - ${r}px);` : ""}
}`,
          o
        );
      } else S(o);
      t(() => {
        S(o);
      });
    },
    { flush: "post" }
  );
}
let u = 0;
const f = U(),
  N = (e) => {
    if (!f) return null;
    if (e) {
      if (typeof e == "string") return document.querySelectorAll(e)[0];
      if (typeof e == "function") return e();
      if (typeof e == "object" && e instanceof window.HTMLElement) return e;
    }
    return document.body;
  },
  ne = _({
    compatConfig: { MODE: 3 },
    name: "PortalWrapper",
    inheritAttrs: !1,
    props: {
      wrapperClassName: String,
      forceRender: { type: Boolean, default: void 0 },
      getContainer: z.any,
      visible: { type: Boolean, default: void 0 },
      autoLock: D(),
      didUpdate: Function,
    },
    setup(e, n) {
      let { slots: o } = n;
      const t = h(),
        r = h(),
        a = h(),
        b = () => {
          var i, l;
          (l =
            (i = t.value) === null || i === void 0 ? void 0 : i.parentNode) ===
            null ||
            l === void 0 ||
            l.removeChild(t.value),
            (t.value = null);
        };
      let d = null;
      const v = function () {
          return (arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : !1) ||
            (t.value && !t.value.parentNode)
            ? ((d = N(e.getContainer)), d ? (d.appendChild(t.value), !0) : !1)
            : !0;
        },
        y = document.createElement("div"),
        g = () =>
          f ? (t.value || ((t.value = y), v(!0)), C(), t.value) : null,
        C = () => {
          const { wrapperClassName: i } = e;
          t.value && i && i !== t.value.className && (t.value.className = i);
        };
      j(() => {
        C(), v();
      });
      const x = V();
      return (
        J(
          W(
            () =>
              e.autoLock &&
              e.visible &&
              U() &&
              (t.value === document.body || t.value === y)
          )
        ),
        H(() => {
          let i = !1;
          F(
            [() => e.visible, () => e.getContainer],
            (l, c) => {
              let [m, s] = l,
                [B, p] = c;
              f &&
                ((d = N(e.getContainer)),
                d === document.body && (m && !B ? (u += 1) : i && (u -= 1))),
                i &&
                  (typeof s == "function" && typeof p == "function"
                    ? s.toString() !== p.toString()
                    : s !== p) &&
                  b(),
                (i = !0);
            },
            { immediate: !0, flush: "post" }
          ),
            M(() => {
              v() ||
                (a.value = E(() => {
                  x.update();
                }));
            });
        }),
        A(() => {
          const { visible: i } = e;
          f && d === document.body && (u = i && u ? u - 1 : u),
            b(),
            E.cancel(a.value);
        }),
        () => {
          const { forceRender: i, visible: l } = e;
          let c = null;
          const m = { getOpenCount: () => u, getContainer: g };
          return (
            (i || l || r.value) &&
              (c = T(
                O,
                { getContainer: g, ref: r, didUpdate: e.didUpdate },
                {
                  default: () => {
                    var s;
                    return (s = o.default) === null || s === void 0
                      ? void 0
                      : s.call(o, m);
                  },
                }
              )),
            c
          );
        }
      );
    },
  });
export { ne as P, ee as a, te as b, k as g, q as s };
