import {
  b2 as $,
  b3 as S,
  b4 as _,
  b5 as x,
  b6 as O,
  b7 as M,
  b8 as A,
} from "./entry.8aa394d7.js";
import {
  a as p,
  b,
  w as L,
  k as y,
  g as j,
  y as z,
} from "./swiper-vue.d5cda4d1.js";
function v(r) {
  var i;
  const t = x(r);
  return (i = t == null ? void 0 : t.$el) != null ? i : t;
}
const w = S ? window : void 0;
function R(...r) {
  let i, t, s, a;
  if (
    (typeof r[0] == "string" || Array.isArray(r[0])
      ? (([t, s, a] = r), (i = w))
      : ([i, t, s, a] = r),
    !i)
  )
    return _;
  Array.isArray(t) || (t = [t]), Array.isArray(s) || (s = [s]);
  const c = [],
    o = () => {
      c.forEach((l) => l()), (c.length = 0);
    },
    e = (l, d, f, h) => (
      l.addEventListener(d, f, h), () => l.removeEventListener(d, f, h)
    ),
    n = b(
      () => [v(i), x(a)],
      ([l, d]) => {
        o(), l && c.push(...t.flatMap((f) => s.map((h) => e(l, f, h, d))));
      },
      { immediate: !0, flush: "post" }
    ),
    u = () => {
      n(), o();
    };
  return O(u), u;
}
function W() {
  const r = p(!1);
  return (
    j() &&
      z(() => {
        r.value = !0;
      }),
    r
  );
}
function E(r) {
  const i = W();
  return y(() => (i.value, !!r()));
}
function m(r, i = {}) {
  const { window: t = w } = i,
    s = E(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let a;
  const c = p(!1),
    o = () => {
      a &&
        ("removeEventListener" in a
          ? a.removeEventListener("change", e)
          : a.removeListener(e));
    },
    e = () => {
      s.value &&
        (o(),
        (a = t.matchMedia(M(r).value)),
        (c.value = !!(a != null && a.matches)),
        a &&
          ("addEventListener" in a
            ? a.addEventListener("change", e)
            : a.addListener(e)));
    };
  return L(e), O(() => o()), c;
}
function H(r, i = {}) {
  function t(e, n) {
    let u = r[e];
    return (
      n != null && (u = A(u, n)), typeof u == "number" && (u = `${u}px`), u
    );
  }
  const { window: s = w } = i;
  function a(e) {
    return s ? s.matchMedia(e).matches : !1;
  }
  const c = (e) => m(`(min-width: ${t(e)})`, i),
    o = Object.keys(r).reduce(
      (e, n) => (
        Object.defineProperty(e, n, {
          get: () => c(n),
          enumerable: !0,
          configurable: !0,
        }),
        e
      ),
      {}
    );
  return Object.assign(o, {
    greater(e) {
      return m(`(min-width: ${t(e, 0.1)})`, i);
    },
    greaterOrEqual: c,
    smaller(e) {
      return m(`(max-width: ${t(e, -0.1)})`, i);
    },
    smallerOrEqual(e) {
      return m(`(max-width: ${t(e)})`, i);
    },
    between(e, n) {
      return m(`(min-width: ${t(e)}) and (max-width: ${t(n, -0.1)})`, i);
    },
    isGreater(e) {
      return a(`(min-width: ${t(e, 0.1)})`);
    },
    isGreaterOrEqual(e) {
      return a(`(min-width: ${t(e)})`);
    },
    isSmaller(e) {
      return a(`(max-width: ${t(e, -0.1)})`);
    },
    isSmallerOrEqual(e) {
      return a(`(max-width: ${t(e)})`);
    },
    isInBetween(e, n) {
      return a(`(min-width: ${t(e)}) and (max-width: ${t(n, -0.1)})`);
    },
    current() {
      const e = Object.keys(r).map((n) => [n, c(n)]);
      return y(() => e.filter(([, n]) => n.value).map(([n]) => n));
    },
  });
}
var g = Object.getOwnPropertySymbols,
  B = Object.prototype.hasOwnProperty,
  I = Object.prototype.propertyIsEnumerable,
  P = (r, i) => {
    var t = {};
    for (var s in r) B.call(r, s) && i.indexOf(s) < 0 && (t[s] = r[s]);
    if (r != null && g)
      for (var s of g(r)) i.indexOf(s) < 0 && I.call(r, s) && (t[s] = r[s]);
    return t;
  };
function q(r, i, t = {}) {
  const s = t,
    { window: a = w } = s,
    c = P(s, ["window"]);
  let o;
  const e = E(() => a && "ResizeObserver" in a),
    n = () => {
      o && (o.disconnect(), (o = void 0));
    },
    u = y(() => (Array.isArray(r) ? r.map((f) => v(f)) : [v(r)])),
    l = b(
      u,
      (f) => {
        if ((n(), e.value && a)) {
          o = new ResizeObserver(i);
          for (const h of f) h && o.observe(h, c);
        }
      },
      { immediate: !0, flush: "post", deep: !0 }
    ),
    d = () => {
      n(), l();
    };
  return O(d), { isSupported: e, stop: d };
}
function V(r, i = { width: 0, height: 0 }, t = {}) {
  const { window: s = w, box: a = "content-box" } = t,
    c = y(() => {
      var n, u;
      return (u = (n = v(r)) == null ? void 0 : n.namespaceURI) == null
        ? void 0
        : u.includes("svg");
    }),
    o = p(i.width),
    e = p(i.height);
  return (
    q(
      r,
      ([n]) => {
        const u =
          a === "border-box"
            ? n.borderBoxSize
            : a === "content-box"
            ? n.contentBoxSize
            : n.devicePixelContentBoxSize;
        if (s && c.value) {
          const l = v(r);
          if (l) {
            const d = s.getComputedStyle(l);
            (o.value = Number.parseFloat(d.width)),
              (e.value = Number.parseFloat(d.height));
          }
        } else if (u) {
          const l = Array.isArray(u) ? u : [u];
          (o.value = l.reduce((d, { inlineSize: f }) => d + f, 0)),
            (e.value = l.reduce((d, { blockSize: f }) => d + f, 0));
        } else
          (o.value = n.contentRect.width), (e.value = n.contentRect.height);
      },
      t
    ),
    b(
      () => v(r),
      (n) => {
        (o.value = n ? i.width : 0), (e.value = n ? i.height : 0);
      }
    ),
    { width: o, height: e }
  );
}
function F(r = {}) {
  const {
      window: i = w,
      initialWidth: t = 1 / 0,
      initialHeight: s = 1 / 0,
      listenOrientation: a = !0,
      includeScrollbar: c = !0,
    } = r,
    o = p(t),
    e = p(s),
    n = () => {
      i &&
        (c
          ? ((o.value = i.innerWidth), (e.value = i.innerHeight))
          : ((o.value = i.document.documentElement.clientWidth),
            (e.value = i.document.documentElement.clientHeight)));
    };
  if ((n(), $(n), R("resize", n, { passive: !0 }), a)) {
    const u = m("(orientation: portrait)");
    b(u, () => n());
  }
  return { width: o, height: e };
}
export { F as a, V as b, H as u };
