import { aR as I, a5 as k, a1 as B, u as F } from "./entry.8aa394d7.js";
import {
  k as y,
  j as G,
  av as V,
  a as O,
  y as X,
  Q as J,
  R as Q,
  U as Z,
  u as j,
} from "./swiper-vue.d5cda4d1.js";
function Y(e = I()) {
  var t;
  return (t = e.ssrContext) == null ? void 0 : t.event;
}
function x(e) {
  if (e === null || typeof e != "object") return !1;
  const t = Object.getPrototypeOf(e);
  return (t !== null &&
    t !== Object.prototype &&
    Object.getPrototypeOf(t) !== null) ||
    Symbol.iterator in e
    ? !1
    : Symbol.toStringTag in e
    ? Object.prototype.toString.call(e) === "[object Module]"
    : !0;
}
function E(e, t, i = ".", r) {
  if (!x(t)) return E(e, {}, i, r);
  const n = Object.assign({}, t);
  for (const o in e) {
    if (o === "__proto__" || o === "constructor") continue;
    const s = e[o];
    s != null &&
      ((r && r(n, o, s, i)) ||
        (Array.isArray(s) && Array.isArray(n[o])
          ? (n[o] = [...s, ...n[o]])
          : x(s) && x(n[o])
          ? (n[o] = E(s, n[o], (i ? `${i}.` : "") + o.toString(), r))
          : (n[o] = s)));
  }
  return n;
}
function K(e) {
  return (...t) => t.reduce((i, r) => E(i, r, "", e), {});
}
const N = K(),
  ee = /#/g,
  te = /&/g,
  re = /\//g,
  ie = /\?/g,
  ne = /\+/g,
  oe = /%7c/gi,
  se = /%252f/gi;
function ae(e) {
  return encodeURI("" + e).replace(oe, "|");
}
function W(e) {
  return ae(e)
    .replace(ee, "%23")
    .replace(ie, "%3F")
    .replace(se, "%2F")
    .replace(te, "%26")
    .replace(ne, "%2B");
}
function P(e) {
  return W(e).replace(re, "%2F");
}
const ce = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  le = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  fe = /^([/\\]\s*){2,}[^/\\]/,
  de = /\/$|\/\?|\/#/,
  ue = /^\.?\//;
function R(e, t = {}) {
  return (
    typeof t == "boolean" && (t = { acceptRelative: t }),
    t.strict ? ce.test(e) : le.test(e) || (t.acceptRelative ? fe.test(e) : !1)
  );
}
function he(e = "", t) {
  return t ? de.test(e) : e.endsWith("/");
}
function me(e = "", t) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (he(e, !0)) return e || "/";
  let i = e,
    r = "";
  const n = e.indexOf("#");
  if (n >= 0 && ((i = e.slice(0, n)), (r = e.slice(n)), !i)) return r;
  const [o, ...s] = i.split("?");
  return o + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + r;
}
function ge(e = "") {
  return e.startsWith("/");
}
function pe(e = "") {
  return ge(e) ? e : "/" + e;
}
function ve(e) {
  return e && e !== "/";
}
function A(e, ...t) {
  let i = e || "";
  for (const r of t.filter((n) => ve(n)))
    if (i) {
      const n = r.replace(ue, "");
      i = me(i) + n;
    } else i = r;
  return i;
}
const ye = Symbol.for("ufo:protocolRelative");
function H(e = "", t) {
  const i = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (i) {
    const [, d, u = ""] = i;
    return {
      protocol: d.toLowerCase(),
      pathname: u,
      href: d + u,
      auth: "",
      host: "",
      search: "",
      hash: "",
    };
  }
  if (!R(e, { acceptRelative: !0 })) return t ? H(t + e) : z(e);
  const [, r = "", n, o = ""] =
    e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) ||
    [];
  let [, s = "", a = ""] = o.match(/([^#/?]*)(.*)?/) || [];
  r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: f, search: l, hash: g } = z(a);
  return {
    protocol: r.toLowerCase(),
    auth: n ? n.slice(0, Math.max(0, n.length - 1)) : "",
    host: s,
    pathname: f,
    search: l,
    hash: g,
    [ye]: !r,
  };
}
function z(e = "") {
  const [t = "", i = "", r = ""] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1);
  return { pathname: t, search: i, hash: r };
}
async function _e(e, t) {
  return await we(t).catch(
    (r) => (
      console.error("Failed to get image meta for " + t, r + ""),
      { width: 0, height: 0, ratio: 0 }
    )
  );
}
async function we(e) {
  if (import.meta.server) {
    const t = await k(
        () => import("./index.99dc9c2d.js"),
        [],
        import.meta.url
      ).then((a) => a.imageMeta),
      i = await fetch(e).then((a) => a.buffer()),
      r = t(i);
    if (!r)
      throw new Error(
        `No metadata could be extracted from the image \`${e}\`.`
      );
    const { width: n, height: o } = r;
    return { width: n, height: o, ratio: n && o ? n / o : void 0 };
  }
  if (typeof Image > "u") throw new TypeError("Image not supported");
  return new Promise((t, i) => {
    const r = new Image();
    (r.onload = () => {
      const n = { width: r.width, height: r.height, ratio: r.width / r.height };
      t(n);
    }),
      (r.onerror = (n) => i(n)),
      (r.src = e);
  });
}
function $(e) {
  return (t) => (t ? e[t] || t : e.missingValue);
}
function Se({ formatter: e, keyMap: t, joinWith: i = "/", valueMap: r } = {}) {
  e || (e = (o, s) => `${o}=${s}`), t && typeof t != "function" && (t = $(t));
  const n = r || {};
  return (
    Object.keys(n).forEach((o) => {
      typeof n[o] != "function" && (n[o] = $(n[o]));
    }),
    (o = {}) =>
      Object.entries(o)
        .filter(([a, f]) => typeof f < "u")
        .map(([a, f]) => {
          const l = n[a];
          return (
            typeof l == "function" && (f = l(o[a])),
            (a = typeof t == "function" ? t(a) : a),
            e(a, f)
          );
        })
        .join(i)
  );
}
function v(e = "") {
  if (typeof e == "number") return e;
  if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g))
    return Number.parseInt(e, 10);
}
function be(e = "") {
  if (e === void 0 || !e.length) return [];
  const t = new Set();
  for (const i of e.split(" ")) {
    const r = Number.parseInt(i.replace("x", ""));
    r && t.add(r);
  }
  return Array.from(t);
}
function xe(e) {
  if (e.length === 0)
    throw new Error(
      "`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)"
    );
  if (import.meta.dev && Array.from(e).some((t) => t > 2)) {
    const t = e;
    t._warned ||
      console.warn(
        "[nuxt] [image] Density values above `2` are not recommended. See https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio."
      ),
      (t._warned = !0);
  }
}
function Ee(e) {
  const t = {};
  if (typeof e == "string")
    for (const i of e.split(/[\s,]+/).filter((r) => r)) {
      const r = i.split(":");
      r.length !== 2
        ? (t["1px"] = r[0].trim())
        : (t[r[0].trim()] = r[1].trim());
    }
  else Object.assign(t, e);
  return t;
}
function Re(e, t, i) {
  let r = e.node.res.getHeader(t);
  if (!r) {
    e.node.res.setHeader(t, i);
    return;
  }
  Array.isArray(r) || (r = [r.toString()]), e.node.res.setHeader(t, [...r, i]);
}
const Ae = Re;
function C(e = "", t = "") {
  if (!import.meta.server || !import.meta.prerender) return;
  const i = [
    e,
    ...t.split(", ").map((r) => r.trim().split(" ")[0].trim()),
  ].filter((r) => r && r.includes("/_ipx/"));
  i.length &&
    Ae(
      Y(),
      "x-nitro-prerender",
      i.map((r) => encodeURIComponent(r)).join(", ")
    );
}
function Ie(e) {
  const t = { options: e },
    i = (n, o = {}) => {
      const s = T(t, n, o);
      return import.meta.server && import.meta.prerender && C(s.url), s;
    },
    r = (n, o = {}, s = {}) =>
      i(n, { ...s, modifiers: N(o, s.modifiers || {}) }).url;
  for (const n in e.presets)
    r[n] = (o, s, a) => r(o, s, { ...e.presets[n], ...a });
  return (
    (r.options = e),
    (r.getImage = i),
    (r.getMeta = (n, o) => qe(t, n, o)),
    (r.getSizes = (n, o) => Pe(t, n, o)),
    (t.$img = r),
    r
  );
}
async function qe(e, t, i) {
  const r = T(e, t, { ...i });
  return typeof r.getMeta == "function"
    ? await r.getMeta()
    : await _e(e, r.url);
}
function T(e, t, i) {
  var l, g;
  if (t && typeof t != "string")
    throw new TypeError(
      `input must be a string (received ${typeof t}: ${JSON.stringify(t)})`
    );
  if (!t || t.startsWith("data:")) return { url: t };
  const { provider: r, defaults: n } = Oe(e, i.provider || e.options.provider),
    o = je(e, i.preset);
  if (((t = R(t) ? t : pe(t)), !r.supportsAlias)) {
    for (const d in e.options.alias)
      if (t.startsWith(d)) {
        const u = e.options.alias[d];
        u && (t = A(u, t.slice(d.length)));
      }
  }
  if (r.validateDomains && R(t)) {
    const d = H(t).host;
    if (!e.options.domains.find((u) => u === d)) return { url: t };
  }
  const s = N(i, o, n);
  s.modifiers = { ...s.modifiers };
  const a = s.modifiers.format;
  (l = s.modifiers) != null &&
    l.width &&
    (s.modifiers.width = v(s.modifiers.width)),
    (g = s.modifiers) != null &&
      g.height &&
      (s.modifiers.height = v(s.modifiers.height));
  const f = r.getImage(t, s, e);
  return (f.format = f.format || a || ""), f;
}
function Oe(e, t) {
  const i = e.options.providers[t];
  if (!i) throw new Error("Unknown provider: " + t);
  return i;
}
function je(e, t) {
  if (!t) return {};
  if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
  return e.options.presets[t];
}
function Pe(e, t, i) {
  var b, S, c, h, q;
  const r = v((b = i.modifiers) == null ? void 0 : b.width),
    n = v((S = i.modifiers) == null ? void 0 : S.height),
    o = Ee(i.sizes),
    s =
      (c = i.densities) != null && c.trim()
        ? be(i.densities.trim())
        : e.options.densities;
  xe(s);
  const a = r && n ? n / r : 0,
    f = [],
    l = [];
  if (Object.keys(o).length >= 1) {
    for (const m in o) {
      const p = L(m, String(o[m]), n, a, e);
      if (p !== void 0) {
        f.push({
          size: p.size,
          screenMaxWidth: p.screenMaxWidth,
          media: `(max-width: ${p.screenMaxWidth}px)`,
        });
        for (const _ of s)
          l.push({ width: p._cWidth * _, src: M(e, t, i, p, _) });
      }
    }
    ze(f);
  } else
    for (const m of s) {
      const p = Object.keys(o)[0];
      let _ = p ? L(p, String(o[p]), n, a, e) : void 0;
      _ === void 0 &&
        (_ = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (h = i.modifiers) == null ? void 0 : h.width,
          _cHeight: (q = i.modifiers) == null ? void 0 : q.height,
        }),
        l.push({ width: m, src: M(e, t, i, _, m) });
    }
  $e(l);
  const g = l[l.length - 1],
    d = f.length
      ? f.map((m) => `${m.media ? m.media + " " : ""}${m.size}`).join(", ")
      : void 0,
    u = d ? "w" : "x",
    w = l.map((m) => `${m.src} ${m.width}${u}`).join(", ");
  return { sizes: d, srcset: w, src: g == null ? void 0 : g.src };
}
function L(e, t, i, r, n) {
  const o = (n.options.screens && n.options.screens[e]) || Number.parseInt(e),
    s = t.endsWith("vw");
  if ((!s && /^\d+$/.test(t) && (t = t + "px"), !s && !t.endsWith("px")))
    return;
  let a = Number.parseInt(t);
  if (!o || !a) return;
  s && (a = Math.round((a / 100) * o));
  const f = r ? Math.round(a * r) : i;
  return { size: t, screenMaxWidth: o, _cWidth: a, _cHeight: f };
}
function M(e, t, i, r, n) {
  return e.$img(
    t,
    {
      ...i.modifiers,
      width: r._cWidth ? r._cWidth * n : void 0,
      height: r._cHeight ? r._cHeight * n : void 0,
    },
    i
  );
}
function ze(e) {
  var i;
  e.sort((r, n) => r.screenMaxWidth - n.screenMaxWidth);
  let t = null;
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    n.media === t && e.splice(r, 1), (t = n.media);
  }
  for (let r = 0; r < e.length; r++)
    e[r].media = ((i = e[r + 1]) == null ? void 0 : i.media) || "";
}
function $e(e) {
  e.sort((i, r) => i.width - r.width);
  let t = null;
  for (let i = e.length - 1; i >= 0; i--) {
    const r = e[i];
    r.width === t && e.splice(i, 1), (t = r.width);
  }
}
const Le = Se({
    keyMap: {
      format: "f",
      fit: "fit",
      width: "w",
      height: "h",
      resize: "s",
      quality: "q",
      background: "b",
    },
    joinWith: "&",
    formatter: (e, t) => P(e) + "_" + P(t),
  }),
  Me = (e, { modifiers: t = {}, baseURL: i } = {}, r) => {
    t.width &&
      t.height &&
      ((t.resize = `${t.width}x${t.height}`), delete t.width, delete t.height);
    const n = Le(t) || "_";
    return (
      i || (i = A(r.options.nuxt.baseURL, "/_ipx")), { url: A(i, n, W(e)) }
    );
  },
  Ne = !0,
  We = !0,
  He = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImage: Me, supportsAlias: We, validateDomains: Ne },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  U = {
    screens: {
      xs: 375,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1440,
      "2xl": 1536,
      xxs: 320,
      "2xxl": 1600,
    },
    presets: {},
    provider: "ipx",
    domains: ["hung-vuong-prd.sgp1.digitaloceanspaces.com"],
    alias: {},
    densities: [1, 2],
    format: ["webp"],
  };
U.providers = { ipx: { provider: He, defaults: {} } };
const D = () => {
  const e = B(),
    t = I();
  return (
    t.$img ||
    t._img ||
    (t._img = Ie({ ...U, nuxt: { baseURL: e.app.baseURL }, runtimeConfig: e }))
  );
};
function Ce(e) {
  var t;
  (t = performance == null ? void 0 : performance.mark) == null ||
    t.call(performance, "mark_feature_usage", { detail: { feature: e } });
}
const Te = {
    src: { type: String, required: !1 },
    format: { type: String, required: !1 },
    quality: { type: [Number, String], required: !1 },
    background: { type: String, required: !1 },
    fit: { type: String, required: !1 },
    modifiers: { type: Object, required: !1 },
    preset: { type: String, required: !1 },
    provider: { type: String, required: !1 },
    sizes: { type: [Object, String], required: !1 },
    densities: { type: String, required: !1 },
    preload: { type: [Boolean, Object], required: !1 },
    width: { type: [String, Number], required: !1 },
    height: { type: [String, Number], required: !1 },
    alt: { type: String, required: !1 },
    referrerpolicy: { type: String, required: !1 },
    usemap: { type: String, required: !1 },
    longdesc: { type: String, required: !1 },
    ismap: { type: Boolean, required: !1 },
    loading: {
      type: String,
      required: !1,
      validator: (e) => ["lazy", "eager"].includes(e),
    },
    crossorigin: {
      type: [Boolean, String],
      required: !1,
      validator: (e) =>
        ["anonymous", "use-credentials", "", !0, !1].includes(e),
    },
    decoding: {
      type: String,
      required: !1,
      validator: (e) => ["async", "auto", "sync"].includes(e),
    },
    nonce: { type: [String], required: !1 },
  },
  Ue = (e) => {
    const t = y(() => ({ provider: e.provider, preset: e.preset })),
      i = y(() => ({
        width: v(e.width),
        height: v(e.height),
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        usemap: e.usemap,
        longdesc: e.longdesc,
        ismap: e.ismap,
        crossorigin:
          e.crossorigin === !0 ? "anonymous" : e.crossorigin || void 0,
        loading: e.loading,
        decoding: e.decoding,
        nonce: e.nonce,
      })),
      r = D(),
      n = y(() => ({
        ...e.modifiers,
        width: v(e.width),
        height: v(e.height),
        format: e.format,
        quality: e.quality || r.options.quality,
        background: e.background,
        fit: e.fit,
      }));
    return { options: t, attrs: i, modifiers: n };
  },
  De = {
    ...Te,
    placeholder: { type: [Boolean, String, Number, Array], required: !1 },
    placeholderClass: { type: String, required: !1 },
  },
  ke = ["src"],
  Ge = G({
    __name: "NuxtImg",
    props: De,
    emits: ["load", "error"],
    setup(e, { emit: t }) {
      const i = e,
        r = V(),
        n = import.meta.server,
        o = D(),
        s = Ue(i),
        a = O(!1),
        f = O(),
        l = y(() =>
          o.getSizes(i.src, {
            ...s.options.value,
            sizes: i.sizes,
            densities: i.densities,
            modifiers: {
              ...s.modifiers.value,
              width: v(i.width),
              height: v(i.height),
            },
          })
        ),
        g = y(() => {
          const c = { ...s.attrs.value, "data-nuxt-img": "" };
          return (
            (!i.placeholder || a.value) &&
              ((c.sizes = l.value.sizes), (c.srcset = l.value.srcset)),
            c
          );
        }),
        d = y(() => {
          let c = i.placeholder;
          if ((c === "" && (c = !0), !c || a.value)) return !1;
          if (typeof c == "string") return c;
          const h = Array.isArray(c)
            ? c
            : typeof c == "number"
            ? [c, c]
            : [10, 10];
          return o(
            i.src,
            {
              ...s.modifiers.value,
              width: h[0],
              height: h[1],
              quality: h[2] || 50,
              blur: h[3] || 3,
            },
            s.options.value
          );
        }),
        u = y(() =>
          i.sizes ? l.value.src : o(i.src, s.modifiers.value, s.options.value)
        ),
        w = y(() => (d.value ? d.value : u.value));
      if (import.meta.server && i.preload) {
        const c = Object.values(l.value).every((h) => h);
        F({
          link: [
            {
              rel: "preload",
              as: "image",
              nonce: i.nonce,
              ...(c
                ? {
                    href: l.value.src,
                    imagesizes: l.value.sizes,
                    imagesrcset: l.value.srcset,
                  }
                : { href: w.value }),
              ...(typeof i.preload != "boolean" && i.preload.fetchPriority
                ? { fetchpriority: i.preload.fetchPriority }
                : {}),
            },
          ],
        });
      }
      import.meta.server && import.meta.prerender && C(w.value, l.value.srcset);
      const S = I().isHydrating;
      return (
        X(() => {
          if (d.value) {
            const c = new Image();
            u.value && (c.src = u.value),
              i.sizes &&
                ((c.sizes = l.value.sizes || ""), (c.srcset = l.value.srcset)),
              (c.onload = (h) => {
                (a.value = !0), t("load", h);
              }),
              Ce("nuxt-image");
            return;
          }
          f.value &&
            (f.value.complete &&
              S &&
              (f.value.getAttribute("data-error")
                ? t("error", new Event("error"))
                : t("load", new Event("load"))),
            (f.value.onload = (c) => {
              t("load", c);
            }),
            (f.value.onerror = (c) => {
              t("error", c);
            }));
        }),
        (c, h) => (
          J(),
          Q(
            "img",
            Z(
              {
                ref_key: "imgEl",
                ref: f,
                class: i.placeholder && !a.value ? i.placeholderClass : void 0,
              },
              {
                ...(j(n)
                  ? { onerror: "this.setAttribute('data-error', 1)" }
                  : {}),
                ...g.value,
                ...j(r),
              },
              { src: w.value }
            ),
            null,
            16,
            ke
          )
        )
      );
    },
  });
export { Ge as _ };
