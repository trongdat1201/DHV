function Ms(t, e) {
  const n = Object.create(null),
    s = t.split(",");
  for (let i = 0; i < s.length; i++) n[s[i]] = !0;
  return e ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const ie = {},
  wt = [],
  ze = () => {},
  Ll = () => !1,
  Il = /^on[^a-z]/,
  rn = (t) => Il.test(t),
  Os = (t) => t.startsWith("onUpdate:"),
  ae = Object.assign,
  Ls = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  Al = Object.prototype.hasOwnProperty,
  ee = (t, e) => Al.call(t, e),
  U = Array.isArray,
  Tt = (t) => ln(t) === "[object Map]",
  tr = (t) => ln(t) === "[object Set]",
  Bl = (t) => ln(t) === "[object RegExp]",
  X = (t) => typeof t == "function",
  re = (t) => typeof t == "string",
  Is = (t) => typeof t == "symbol",
  se = (t) => t !== null && typeof t == "object",
  As = (t) => se(t) && X(t.then) && X(t.catch),
  nr = Object.prototype.toString,
  ln = (t) => nr.call(t),
  Dl = (t) => ln(t).slice(8, -1),
  sr = (t) => ln(t) === "[object Object]",
  Bs = (t) =>
    re(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  jt = Ms(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Nn = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  Fl = /-(\w)/g,
  ke = Nn((t) => t.replace(Fl, (e, n) => (n ? n.toUpperCase() : ""))),
  zl = /\B([A-Z])/g,
  gt = Nn((t) => t.replace(zl, "-$1").toLowerCase()),
  $n = Nn((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Cn = Nn((t) => (t ? `on${$n(t)}` : "")),
  Xt = (t, e) => !Object.is(t, e),
  Gt = (t, e) => {
    for (let n = 0; n < t.length; n++) t[n](e);
  },
  On = (t, e, n) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n });
  },
  Nl = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  },
  ir = (t) => {
    const e = re(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e;
  };
let ui;
const ps = () =>
  ui ||
  (ui =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Rn(t) {
  if (U(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n],
        i = re(s) ? kl(s) : Rn(s);
      if (i) for (const r in i) e[r] = i[r];
    }
    return e;
  } else {
    if (re(t)) return t;
    if (se(t)) return t;
  }
}
const $l = /;(?![^(]*\))/g,
  Rl = /:([^]+)/,
  Hl = /\/\*[^]*?\*\//g;
function kl(t) {
  const e = {};
  return (
    t
      .replace(Hl, "")
      .split($l)
      .forEach((n) => {
        if (n) {
          const s = n.split(Rl);
          s.length > 1 && (e[s[0].trim()] = s[1].trim());
        }
      }),
    e
  );
}
function Hn(t) {
  let e = "";
  if (re(t)) e = t;
  else if (U(t))
    for (let n = 0; n < t.length; n++) {
      const s = Hn(t[n]);
      s && (e += s + " ");
    }
  else if (se(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
function jf(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !re(e) && (t.class = Hn(e)), n && (t.style = Rn(n)), t;
}
const jl =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Gl = Ms(jl);
function rr(t) {
  return !!t || t === "";
}
const Gf = (t) =>
    re(t)
      ? t
      : t == null
      ? ""
      : U(t) || (se(t) && (t.toString === nr || !X(t.toString)))
      ? JSON.stringify(t, lr, 2)
      : String(t),
  lr = (t, e) =>
    e && e.__v_isRef
      ? lr(t, e.value)
      : Tt(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (n, [s, i]) => ((n[`${s} =>`] = i), n),
            {}
          ),
        }
      : tr(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : se(e) && !U(e) && !sr(e)
      ? String(e)
      : e;
let Ee;
class ar {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ee),
      !e && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = Ee;
      try {
        return (Ee = this), e();
      } finally {
        Ee = n;
      }
    }
  }
  on() {
    Ee = this;
  }
  off() {
    Ee = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Vf(t) {
  return new ar(t);
}
function Vl(t, e = Ee) {
  e && e.active && e.effects.push(t);
}
function Wl() {
  return Ee;
}
function Wf(t) {
  Ee && Ee.cleanups.push(t);
}
const Ds = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  or = (t) => (t.w & lt) > 0,
  cr = (t) => (t.n & lt) > 0,
  ql = ({ deps: t }) => {
    if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= lt;
  },
  Ul = (t) => {
    const { deps: e } = t;
    if (e.length) {
      let n = 0;
      for (let s = 0; s < e.length; s++) {
        const i = e[s];
        or(i) && !cr(i) ? i.delete(t) : (e[n++] = i),
          (i.w &= ~lt),
          (i.n &= ~lt);
      }
      e.length = n;
    }
  },
  Ln = new WeakMap();
let Rt = 0,
  lt = 1;
const hs = 30;
let De;
const pt = Symbol(""),
  ms = Symbol("");
class Fs {
  constructor(e, n = null, s) {
    (this.fn = e),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Vl(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let e = De,
      n = st;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = De),
        (De = this),
        (st = !0),
        (lt = 1 << ++Rt),
        Rt <= hs ? ql(this) : di(this),
        this.fn()
      );
    } finally {
      Rt <= hs && Ul(this),
        (lt = 1 << --Rt),
        (De = this.parent),
        (st = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    De === this
      ? (this.deferStop = !0)
      : this.active &&
        (di(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function di(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0;
  }
}
let st = !0;
const fr = [];
function At() {
  fr.push(st), (st = !1);
}
function Bt() {
  const t = fr.pop();
  st = t === void 0 ? !0 : t;
}
function Te(t, e, n) {
  if (st && De) {
    let s = Ln.get(t);
    s || Ln.set(t, (s = new Map()));
    let i = s.get(n);
    i || s.set(n, (i = Ds())), ur(i);
  }
}
function ur(t, e) {
  let n = !1;
  Rt <= hs ? cr(t) || ((t.n |= lt), (n = !or(t))) : (n = !t.has(De)),
    n && (t.add(De), De.deps.push(t));
}
function Ue(t, e, n, s, i, r) {
  const l = Ln.get(t);
  if (!l) return;
  let o = [];
  if (e === "clear") o = [...l.values()];
  else if (n === "length" && U(t)) {
    const a = Number(s);
    l.forEach((c, f) => {
      (f === "length" || f >= a) && o.push(c);
    });
  } else
    switch ((n !== void 0 && o.push(l.get(n)), e)) {
      case "add":
        U(t)
          ? Bs(n) && o.push(l.get("length"))
          : (o.push(l.get(pt)), Tt(t) && o.push(l.get(ms)));
        break;
      case "delete":
        U(t) || (o.push(l.get(pt)), Tt(t) && o.push(l.get(ms)));
        break;
      case "set":
        Tt(t) && o.push(l.get(pt));
        break;
    }
  if (o.length === 1) o[0] && gs(o[0]);
  else {
    const a = [];
    for (const c of o) c && a.push(...c);
    gs(Ds(a));
  }
}
function gs(t, e) {
  const n = U(t) ? t : [...t];
  for (const s of n) s.computed && pi(s);
  for (const s of n) s.computed || pi(s);
}
function pi(t, e) {
  (t !== De || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
function Kl(t, e) {
  var n;
  return (n = Ln.get(t)) == null ? void 0 : n.get(e);
}
const Yl = Ms("__proto__,__v_isRef,__isVue"),
  dr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(Is)
  ),
  Xl = zs(),
  Jl = zs(!1, !0),
  Zl = zs(!0),
  hi = Ql();
function Ql() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...n) {
        const s = Q(this);
        for (let r = 0, l = this.length; r < l; r++) Te(s, "get", r + "");
        const i = s[e](...n);
        return i === -1 || i === !1 ? s[e](...n.map(Q)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...n) {
        At();
        const s = Q(this)[e].apply(this, n);
        return Bt(), s;
      };
    }),
    t
  );
}
function ea(t) {
  const e = Q(this);
  return Te(e, "has", t), e.hasOwnProperty(t);
}
function zs(t = !1, e = !1) {
  return function (s, i, r) {
    if (i === "__v_isReactive") return !t;
    if (i === "__v_isReadonly") return t;
    if (i === "__v_isShallow") return e;
    if (i === "__v_raw" && r === (t ? (e ? ga : vr) : e ? gr : mr).get(s))
      return s;
    const l = U(s);
    if (!t) {
      if (l && ee(hi, i)) return Reflect.get(hi, i, r);
      if (i === "hasOwnProperty") return ea;
    }
    const o = Reflect.get(s, i, r);
    return (Is(i) ? dr.has(i) : Yl(i)) || (t || Te(s, "get", i), e)
      ? o
      : ue(o)
      ? l && Bs(i)
        ? o
        : o.value
      : se(o)
      ? t
        ? br(o)
        : Rs(o)
      : o;
  };
}
const ta = pr(),
  na = pr(!0);
function pr(t = !1) {
  return function (n, s, i, r) {
    let l = n[s];
    if (Ct(l) && ue(l) && !ue(i)) return !1;
    if (
      !t &&
      (!In(i) && !Ct(i) && ((l = Q(l)), (i = Q(i))), !U(n) && ue(l) && !ue(i))
    )
      return (l.value = i), !0;
    const o = U(n) && Bs(s) ? Number(s) < n.length : ee(n, s),
      a = Reflect.set(n, s, i, r);
    return (
      n === Q(r) && (o ? Xt(i, l) && Ue(n, "set", s, i) : Ue(n, "add", s, i)), a
    );
  };
}
function sa(t, e) {
  const n = ee(t, e);
  t[e];
  const s = Reflect.deleteProperty(t, e);
  return s && n && Ue(t, "delete", e, void 0), s;
}
function ia(t, e) {
  const n = Reflect.has(t, e);
  return (!Is(e) || !dr.has(e)) && Te(t, "has", e), n;
}
function ra(t) {
  return Te(t, "iterate", U(t) ? "length" : pt), Reflect.ownKeys(t);
}
const hr = { get: Xl, set: ta, deleteProperty: sa, has: ia, ownKeys: ra },
  la = {
    get: Zl,
    set(t, e) {
      return !0;
    },
    deleteProperty(t, e) {
      return !0;
    },
  },
  aa = ae({}, hr, { get: Jl, set: na }),
  Ns = (t) => t,
  kn = (t) => Reflect.getPrototypeOf(t);
function hn(t, e, n = !1, s = !1) {
  t = t.__v_raw;
  const i = Q(t),
    r = Q(e);
  n || (e !== r && Te(i, "get", e), Te(i, "get", r));
  const { has: l } = kn(i),
    o = s ? Ns : n ? ks : Jt;
  if (l.call(i, e)) return o(t.get(e));
  if (l.call(i, r)) return o(t.get(r));
  t !== i && t.get(e);
}
function mn(t, e = !1) {
  const n = this.__v_raw,
    s = Q(n),
    i = Q(t);
  return (
    e || (t !== i && Te(s, "has", t), Te(s, "has", i)),
    t === i ? n.has(t) : n.has(t) || n.has(i)
  );
}
function gn(t, e = !1) {
  return (
    (t = t.__v_raw), !e && Te(Q(t), "iterate", pt), Reflect.get(t, "size", t)
  );
}
function mi(t) {
  t = Q(t);
  const e = Q(this);
  return kn(e).has.call(e, t) || (e.add(t), Ue(e, "add", t, t)), this;
}
function gi(t, e) {
  e = Q(e);
  const n = Q(this),
    { has: s, get: i } = kn(n);
  let r = s.call(n, t);
  r || ((t = Q(t)), (r = s.call(n, t)));
  const l = i.call(n, t);
  return (
    n.set(t, e), r ? Xt(e, l) && Ue(n, "set", t, e) : Ue(n, "add", t, e), this
  );
}
function vi(t) {
  const e = Q(this),
    { has: n, get: s } = kn(e);
  let i = n.call(e, t);
  i || ((t = Q(t)), (i = n.call(e, t))), s && s.call(e, t);
  const r = e.delete(t);
  return i && Ue(e, "delete", t, void 0), r;
}
function bi() {
  const t = Q(this),
    e = t.size !== 0,
    n = t.clear();
  return e && Ue(t, "clear", void 0, void 0), n;
}
function vn(t, e) {
  return function (s, i) {
    const r = this,
      l = r.__v_raw,
      o = Q(l),
      a = e ? Ns : t ? ks : Jt;
    return (
      !t && Te(o, "iterate", pt), l.forEach((c, f) => s.call(i, a(c), a(f), r))
    );
  };
}
function bn(t, e, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = Q(i),
      l = Tt(r),
      o = t === "entries" || (t === Symbol.iterator && l),
      a = t === "keys" && l,
      c = i[t](...s),
      f = n ? Ns : e ? ks : Jt;
    return (
      !e && Te(r, "iterate", a ? ms : pt),
      {
        next() {
          const { value: d, done: m } = c.next();
          return m
            ? { value: d, done: m }
            : { value: o ? [f(d[0]), f(d[1])] : f(d), done: m };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Xe(t) {
  return function (...e) {
    return t === "delete" ? !1 : this;
  };
}
function oa() {
  const t = {
      get(r) {
        return hn(this, r);
      },
      get size() {
        return gn(this);
      },
      has: mn,
      add: mi,
      set: gi,
      delete: vi,
      clear: bi,
      forEach: vn(!1, !1),
    },
    e = {
      get(r) {
        return hn(this, r, !1, !0);
      },
      get size() {
        return gn(this);
      },
      has: mn,
      add: mi,
      set: gi,
      delete: vi,
      clear: bi,
      forEach: vn(!1, !0),
    },
    n = {
      get(r) {
        return hn(this, r, !0);
      },
      get size() {
        return gn(this, !0);
      },
      has(r) {
        return mn.call(this, r, !0);
      },
      add: Xe("add"),
      set: Xe("set"),
      delete: Xe("delete"),
      clear: Xe("clear"),
      forEach: vn(!0, !1),
    },
    s = {
      get(r) {
        return hn(this, r, !0, !0);
      },
      get size() {
        return gn(this, !0);
      },
      has(r) {
        return mn.call(this, r, !0);
      },
      add: Xe("add"),
      set: Xe("set"),
      delete: Xe("delete"),
      clear: Xe("clear"),
      forEach: vn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (t[r] = bn(r, !1, !1)),
        (n[r] = bn(r, !0, !1)),
        (e[r] = bn(r, !1, !0)),
        (s[r] = bn(r, !0, !0));
    }),
    [t, n, e, s]
  );
}
const [ca, fa, ua, da] = oa();
function $s(t, e) {
  const n = e ? (t ? da : ua) : t ? fa : ca;
  return (s, i, r) =>
    i === "__v_isReactive"
      ? !t
      : i === "__v_isReadonly"
      ? t
      : i === "__v_raw"
      ? s
      : Reflect.get(ee(n, i) && i in s ? n : s, i, r);
}
const pa = { get: $s(!1, !1) },
  ha = { get: $s(!1, !0) },
  ma = { get: $s(!0, !1) },
  mr = new WeakMap(),
  gr = new WeakMap(),
  vr = new WeakMap(),
  ga = new WeakMap();
function va(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ba(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : va(Dl(t));
}
function Rs(t) {
  return Ct(t) ? t : Hs(t, !1, hr, pa, mr);
}
function ya(t) {
  return Hs(t, !1, aa, ha, gr);
}
function br(t) {
  return Hs(t, !0, la, ma, vr);
}
function Hs(t, e, n, s, i) {
  if (!se(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const r = i.get(t);
  if (r) return r;
  const l = ba(t);
  if (l === 0) return t;
  const o = new Proxy(t, l === 2 ? s : n);
  return i.set(t, o), o;
}
function xt(t) {
  return Ct(t) ? xt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Ct(t) {
  return !!(t && t.__v_isReadonly);
}
function In(t) {
  return !!(t && t.__v_isShallow);
}
function yr(t) {
  return xt(t) || Ct(t);
}
function Q(t) {
  const e = t && t.__v_raw;
  return e ? Q(e) : t;
}
function wr(t) {
  return On(t, "__v_skip", !0), t;
}
const Jt = (t) => (se(t) ? Rs(t) : t),
  ks = (t) => (se(t) ? br(t) : t);
function js(t) {
  st && De && ((t = Q(t)), ur(t.dep || (t.dep = Ds())));
}
function Gs(t, e) {
  t = Q(t);
  const n = t.dep;
  n && gs(n);
}
function ue(t) {
  return !!(t && t.__v_isRef === !0);
}
function fe(t) {
  return Tr(t, !1);
}
function qf(t) {
  return Tr(t, !0);
}
function Tr(t, e) {
  return ue(t) ? t : new wa(t, e);
}
class wa {
  constructor(e, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? e : Q(e)),
      (this._value = n ? e : Jt(e));
  }
  get value() {
    return js(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || In(e) || Ct(e);
    (e = n ? e : Q(e)),
      Xt(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = n ? e : Jt(e)), Gs(this));
  }
}
function Ta(t) {
  return ue(t) ? t.value : t;
}
const xa = {
  get: (t, e, n) => Ta(Reflect.get(t, e, n)),
  set: (t, e, n, s) => {
    const i = t[e];
    return ue(i) && !ue(n) ? ((i.value = n), !0) : Reflect.set(t, e, n, s);
  },
};
function xr(t) {
  return xt(t) ? t : new Proxy(t, xa);
}
class Sa {
  constructor(e) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: s } = e(
      () => js(this),
      () => Gs(this)
    );
    (this._get = n), (this._set = s);
  }
  get value() {
    return this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function Uf(t) {
  return new Sa(t);
}
function Kf(t) {
  const e = U(t) ? new Array(t.length) : {};
  for (const n in t) e[n] = Sr(t, n);
  return e;
}
class Ea {
  constructor(e, n, s) {
    (this._object = e),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return Kl(Q(this._object), this._key);
  }
}
class Ca {
  constructor(e) {
    (this._getter = e), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function Yf(t, e, n) {
  return ue(t)
    ? t
    : X(t)
    ? new Ca(t)
    : se(t) && arguments.length > 1
    ? Sr(t, e, n)
    : fe(t);
}
function Sr(t, e, n) {
  const s = t[e];
  return ue(s) ? s : new Ea(t, e, n);
}
class _a {
  constructor(e, n, s, i) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new Fs(e, () => {
        this._dirty || ((this._dirty = !0), Gs(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = s);
  }
  get value() {
    const e = Q(this);
    return (
      js(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function Pa(t, e, n = !1) {
  let s, i;
  const r = X(t);
  return (
    r ? ((s = t), (i = ze)) : ((s = t.get), (i = t.set)),
    new _a(s, i, r || !i, n)
  );
}
function it(t, e, n, s) {
  let i;
  try {
    i = s ? t(...s) : t();
  } catch (r) {
    Dt(r, e, n);
  }
  return i;
}
function Ie(t, e, n, s) {
  if (X(t)) {
    const r = it(t, e, n, s);
    return (
      r &&
        As(r) &&
        r.catch((l) => {
          Dt(l, e, n);
        }),
      r
    );
  }
  const i = [];
  for (let r = 0; r < t.length; r++) i.push(Ie(t[r], e, n, s));
  return i;
}
function Dt(t, e, n, s = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let r = e.parent;
    const l = e.proxy,
      o = n;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](t, l, o) === !1) return;
      }
      r = r.parent;
    }
    const a = e.appContext.config.errorHandler;
    if (a) {
      it(a, null, 10, [t, l, o]);
      return;
    }
  }
  Ma(t, n, i, s);
}
function Ma(t, e, n, s = !0) {
  console.error(t);
}
let Zt = !1,
  vs = !1;
const me = [];
let Re = 0;
const St = [];
let We = null,
  ft = 0;
const Er = Promise.resolve();
let Vs = null;
function Cr(t) {
  const e = Vs || Er;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Oa(t) {
  let e = Re + 1,
    n = me.length;
  for (; e < n; ) {
    const s = (e + n) >>> 1;
    Qt(me[s]) < t ? (e = s + 1) : (n = s);
  }
  return e;
}
function jn(t) {
  (!me.length || !me.includes(t, Zt && t.allowRecurse ? Re + 1 : Re)) &&
    (t.id == null ? me.push(t) : me.splice(Oa(t.id), 0, t), _r());
}
function _r() {
  !Zt && !vs && ((vs = !0), (Vs = Er.then(Mr)));
}
function La(t) {
  const e = me.indexOf(t);
  e > Re && me.splice(e, 1);
}
function Pr(t) {
  U(t)
    ? St.push(...t)
    : (!We || !We.includes(t, t.allowRecurse ? ft + 1 : ft)) && St.push(t),
    _r();
}
function yi(t, e = Zt ? Re + 1 : 0) {
  for (; e < me.length; e++) {
    const n = me[e];
    n && n.pre && (me.splice(e, 1), e--, n());
  }
}
function An(t) {
  if (St.length) {
    const e = [...new Set(St)];
    if (((St.length = 0), We)) {
      We.push(...e);
      return;
    }
    for (We = e, We.sort((n, s) => Qt(n) - Qt(s)), ft = 0; ft < We.length; ft++)
      We[ft]();
    (We = null), (ft = 0);
  }
}
const Qt = (t) => (t.id == null ? 1 / 0 : t.id),
  Ia = (t, e) => {
    const n = Qt(t) - Qt(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return n;
  };
function Mr(t) {
  (vs = !1), (Zt = !0), me.sort(Ia);
  const e = ze;
  try {
    for (Re = 0; Re < me.length; Re++) {
      const n = me[Re];
      n && n.active !== !1 && it(n, null, 14);
    }
  } finally {
    (Re = 0),
      (me.length = 0),
      An(),
      (Zt = !1),
      (Vs = null),
      (me.length || St.length) && Mr();
  }
}
function Aa(t, e, ...n) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || ie;
  let i = n;
  const r = e.startsWith("update:"),
    l = r && e.slice(7);
  if (l && l in s) {
    const f = `${l === "modelValue" ? "model" : l}Modifiers`,
      { number: d, trim: m } = s[f] || ie;
    m && (i = n.map((g) => (re(g) ? g.trim() : g))), d && (i = n.map(Nl));
  }
  let o,
    a = s[(o = Cn(e))] || s[(o = Cn(ke(e)))];
  !a && r && (a = s[(o = Cn(gt(e)))]), a && Ie(a, t, 6, i);
  const c = s[o + "Once"];
  if (c) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[o]) return;
    (t.emitted[o] = !0), Ie(c, t, 6, i);
  }
}
function Or(t, e, n = !1) {
  const s = e.emitsCache,
    i = s.get(t);
  if (i !== void 0) return i;
  const r = t.emits;
  let l = {},
    o = !1;
  if (!X(t)) {
    const a = (c) => {
      const f = Or(c, e, !0);
      f && ((o = !0), ae(l, f));
    };
    !n && e.mixins.length && e.mixins.forEach(a),
      t.extends && a(t.extends),
      t.mixins && t.mixins.forEach(a);
  }
  return !r && !o
    ? (se(t) && s.set(t, null), null)
    : (U(r) ? r.forEach((a) => (l[a] = null)) : ae(l, r),
      se(t) && s.set(t, l),
      l);
}
function Gn(t, e) {
  return !t || !rn(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      ee(t, e[0].toLowerCase() + e.slice(1)) || ee(t, gt(e)) || ee(t, e));
}
let de = null,
  Vn = null;
function Bn(t) {
  const e = de;
  return (de = t), (Vn = (t && t.type.__scopeId) || null), e;
}
function Xf(t) {
  Vn = t;
}
function Jf() {
  Vn = null;
}
function Ba(t, e = de, n) {
  if (!e || t._n) return t;
  const s = (...i) => {
    s._d && Bi(-1);
    const r = Bn(e);
    let l;
    try {
      l = t(...i);
    } finally {
      Bn(r), s._d && Bi(1);
    }
    return l;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Jn(t) {
  const {
    type: e,
    vnode: n,
    proxy: s,
    withProxy: i,
    props: r,
    propsOptions: [l],
    slots: o,
    attrs: a,
    emit: c,
    render: f,
    renderCache: d,
    data: m,
    setupState: g,
    ctx: E,
    inheritAttrs: y,
  } = t;
  let _, b;
  const u = Bn(t);
  try {
    if (n.shapeFlag & 4) {
      const h = i || s;
      (_ = Me(f.call(h, h, d, r, g, m, E))), (b = a);
    } else {
      const h = e;
      (_ = Me(
        h.length > 1 ? h(r, { attrs: a, slots: o, emit: c }) : h(r, null)
      )),
        (b = e.props ? a : Fa(a));
    }
  } catch (h) {
    (Kt.length = 0), Dt(h, t, 1), (_ = le(be));
  }
  let p = _;
  if (b && y !== !1) {
    const h = Object.keys(b),
      { shapeFlag: x } = p;
    h.length && x & 7 && (l && h.some(Os) && (b = za(b, l)), (p = Ke(p, b)));
  }
  return (
    n.dirs && ((p = Ke(p)), (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (p.transition = n.transition),
    (_ = p),
    Bn(u),
    _
  );
}
function Da(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (Ot(s)) {
      if (s.type !== be || s.children === "v-if") {
        if (e) return;
        e = s;
      }
    } else return;
  }
  return e;
}
const Fa = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || rn(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  za = (t, e) => {
    const n = {};
    for (const s in t) (!Os(s) || !(s.slice(9) in e)) && (n[s] = t[s]);
    return n;
  };
function Na(t, e, n) {
  const { props: s, children: i, component: r } = t,
    { props: l, children: o, patchFlag: a } = e,
    c = r.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? wi(s, l, c) : !!l;
    if (a & 8) {
      const f = e.dynamicProps;
      for (let d = 0; d < f.length; d++) {
        const m = f[d];
        if (l[m] !== s[m] && !Gn(c, m)) return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable)
      ? !0
      : s === l
      ? !1
      : s
      ? l
        ? wi(s, l, c)
        : !0
      : !!l;
  return !1;
}
function wi(t, e, n) {
  const s = Object.keys(e);
  if (s.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (e[r] !== t[r] && !Gn(n, r)) return !0;
  }
  return !1;
}
function Ws({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; ) ((t = e.vnode).el = n), (e = e.parent);
}
const Lr = (t) => t.__isSuspense,
  $a = {
    name: "Suspense",
    __isSuspense: !0,
    process(t, e, n, s, i, r, l, o, a, c) {
      t == null ? Ra(e, n, s, i, r, l, o, a, c) : Ha(t, e, n, s, i, l, o, a, c);
    },
    hydrate: ka,
    create: qs,
    normalize: ja,
  },
  Zf = $a;
function en(t, e) {
  const n = t.props && t.props[e];
  X(n) && n();
}
function Ra(t, e, n, s, i, r, l, o, a) {
  const {
      p: c,
      o: { createElement: f },
    } = a,
    d = f("div"),
    m = (t.suspense = qs(t, i, s, e, d, n, r, l, o, a));
  c(null, (m.pendingBranch = t.ssContent), d, null, s, m, r, l),
    m.deps > 0
      ? (en(t, "onPending"),
        en(t, "onFallback"),
        c(null, t.ssFallback, e, n, s, null, r, l),
        Et(m, t.ssFallback))
      : m.resolve(!1, !0);
}
function Ha(t, e, n, s, i, r, l, o, { p: a, um: c, o: { createElement: f } }) {
  const d = (e.suspense = t.suspense);
  (d.vnode = e), (e.el = t.el);
  const m = e.ssContent,
    g = e.ssFallback,
    { activeBranch: E, pendingBranch: y, isInFallback: _, isHydrating: b } = d;
  if (y)
    (d.pendingBranch = m),
      Fe(m, y)
        ? (a(y, m, d.hiddenContainer, null, i, d, r, l, o),
          d.deps <= 0
            ? d.resolve()
            : _ && (a(E, g, n, s, i, null, r, l, o), Et(d, g)))
        : (d.pendingId++,
          b ? ((d.isHydrating = !1), (d.activeBranch = y)) : c(y, i, d),
          (d.deps = 0),
          (d.effects.length = 0),
          (d.hiddenContainer = f("div")),
          _
            ? (a(null, m, d.hiddenContainer, null, i, d, r, l, o),
              d.deps <= 0
                ? d.resolve()
                : (a(E, g, n, s, i, null, r, l, o), Et(d, g)))
            : E && Fe(m, E)
            ? (a(E, m, n, s, i, d, r, l, o), d.resolve(!0))
            : (a(null, m, d.hiddenContainer, null, i, d, r, l, o),
              d.deps <= 0 && d.resolve()));
  else if (E && Fe(m, E)) a(E, m, n, s, i, d, r, l, o), Et(d, m);
  else if (
    (en(e, "onPending"),
    (d.pendingBranch = m),
    d.pendingId++,
    a(null, m, d.hiddenContainer, null, i, d, r, l, o),
    d.deps <= 0)
  )
    d.resolve();
  else {
    const { timeout: u, pendingId: p } = d;
    u > 0
      ? setTimeout(() => {
          d.pendingId === p && d.fallback(g);
        }, u)
      : u === 0 && d.fallback(g);
  }
}
function qs(t, e, n, s, i, r, l, o, a, c, f = !1) {
  const {
    p: d,
    m,
    um: g,
    n: E,
    o: { parentNode: y, remove: _ },
  } = c;
  let b;
  const u = Ga(t);
  u && e != null && e.pendingBranch && ((b = e.pendingId), e.deps++);
  const p = t.props ? ir(t.props.timeout) : void 0,
    h = {
      vnode: t,
      parent: e,
      parentComponent: n,
      isSVG: l,
      container: s,
      hiddenContainer: i,
      anchor: r,
      deps: 0,
      pendingId: 0,
      timeout: typeof p == "number" ? p : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: f,
      isUnmounted: !1,
      effects: [],
      resolve(x = !1, I = !1) {
        const {
          vnode: L,
          activeBranch: C,
          pendingBranch: w,
          pendingId: B,
          effects: M,
          parentComponent: S,
          container: P,
        } = h;
        if (h.isHydrating) h.isHydrating = !1;
        else if (!x) {
          const k = C && w.transition && w.transition.mode === "out-in";
          k &&
            (C.transition.afterLeave = () => {
              B === h.pendingId && m(w, P, j, 0);
            });
          let { anchor: j } = h;
          C && ((j = E(C)), g(C, S, h, !0)), k || m(w, P, j, 0);
        }
        Et(h, w), (h.pendingBranch = null), (h.isInFallback = !1);
        let O = h.parent,
          R = !1;
        for (; O; ) {
          if (O.pendingBranch) {
            O.effects.push(...M), (R = !0);
            break;
          }
          O = O.parent;
        }
        R || Pr(M),
          (h.effects = []),
          u &&
            e &&
            e.pendingBranch &&
            b === e.pendingId &&
            (e.deps--, e.deps === 0 && !I && e.resolve()),
          en(L, "onResolve");
      },
      fallback(x) {
        if (!h.pendingBranch) return;
        const {
          vnode: I,
          activeBranch: L,
          parentComponent: C,
          container: w,
          isSVG: B,
        } = h;
        en(I, "onFallback");
        const M = E(L),
          S = () => {
            h.isInFallback && (d(null, x, w, M, C, null, B, o, a), Et(h, x));
          },
          P = x.transition && x.transition.mode === "out-in";
        P && (L.transition.afterLeave = S),
          (h.isInFallback = !0),
          g(L, C, null, !0),
          P || S();
      },
      move(x, I, L) {
        h.activeBranch && m(h.activeBranch, x, I, L), (h.container = x);
      },
      next() {
        return h.activeBranch && E(h.activeBranch);
      },
      registerDep(x, I) {
        const L = !!h.pendingBranch;
        L && h.deps++;
        const C = x.vnode.el;
        x.asyncDep
          .catch((w) => {
            Dt(w, x, 0);
          })
          .then((w) => {
            if (x.isUnmounted || h.isUnmounted || h.pendingId !== x.suspenseId)
              return;
            x.asyncResolved = !0;
            const { vnode: B } = x;
            Ss(x, w, !1), C && (B.el = C);
            const M = !C && x.subTree.el;
            I(x, B, y(C || x.subTree.el), C ? null : E(x.subTree), h, l, a),
              M && _(M),
              Ws(x, B.el),
              L && --h.deps === 0 && h.resolve();
          });
      },
      unmount(x, I) {
        (h.isUnmounted = !0),
          h.activeBranch && g(h.activeBranch, n, x, I),
          h.pendingBranch && g(h.pendingBranch, n, x, I);
      },
    };
  return h;
}
function ka(t, e, n, s, i, r, l, o, a) {
  const c = (e.suspense = qs(
      e,
      s,
      n,
      t.parentNode,
      document.createElement("div"),
      null,
      i,
      r,
      l,
      o,
      !0
    )),
    f = a(t, (c.pendingBranch = e.ssContent), n, c, r, l);
  return c.deps === 0 && c.resolve(!1, !0), f;
}
function ja(t) {
  const { shapeFlag: e, children: n } = t,
    s = e & 32;
  (t.ssContent = Ti(s ? n.default : n)),
    (t.ssFallback = s ? Ti(n.fallback) : le(be));
}
function Ti(t) {
  let e;
  if (X(t)) {
    const n = Mt && t._c;
    n && ((t._d = !1), ti()), (t = t()), n && ((t._d = !0), (e = Le), Xr());
  }
  return (
    U(t) && (t = Da(t)),
    (t = Me(t)),
    e && !t.dynamicChildren && (t.dynamicChildren = e.filter((n) => n !== t)),
    t
  );
}
function Ir(t, e) {
  e && e.pendingBranch
    ? U(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : Pr(t);
}
function Et(t, e) {
  t.activeBranch = e;
  const { vnode: n, parentComponent: s } = t,
    i = (n.el = e.el);
  s && s.subTree === n && ((s.vnode.el = i), Ws(s, i));
}
function Ga(t) {
  var e;
  return (
    ((e = t.props) == null ? void 0 : e.suspensible) != null &&
    t.props.suspensible !== !1
  );
}
function Qf(t, e) {
  return Us(t, null, e);
}
const yn = {};
function Vt(t, e, n) {
  return Us(t, e, n);
}
function Us(
  t,
  e,
  { immediate: n, deep: s, flush: i, onTrack: r, onTrigger: l } = ie
) {
  var o;
  const a = Wl() === ((o = ce) == null ? void 0 : o.scope) ? ce : null;
  let c,
    f = !1,
    d = !1;
  if (
    (ue(t)
      ? ((c = () => t.value), (f = In(t)))
      : xt(t)
      ? ((c = () => t), (s = !0))
      : U(t)
      ? ((d = !0),
        (f = t.some((h) => xt(h) || In(h))),
        (c = () =>
          t.map((h) => {
            if (ue(h)) return h.value;
            if (xt(h)) return dt(h);
            if (X(h)) return it(h, a, 2);
          })))
      : X(t)
      ? e
        ? (c = () => it(t, a, 2))
        : (c = () => {
            if (!(a && a.isUnmounted)) return m && m(), Ie(t, a, 3, [g]);
          })
      : (c = ze),
    e && s)
  ) {
    const h = c;
    c = () => dt(h());
  }
  let m,
    g = (h) => {
      m = u.onStop = () => {
        it(h, a, 4);
      };
    },
    E;
  if (Lt)
    if (
      ((g = ze),
      e ? n && Ie(e, a, 3, [c(), d ? [] : void 0, g]) : c(),
      i === "sync")
    ) {
      const h = No();
      E = h.__watcherHandles || (h.__watcherHandles = []);
    } else return ze;
  let y = d ? new Array(t.length).fill(yn) : yn;
  const _ = () => {
    if (u.active)
      if (e) {
        const h = u.run();
        (s || f || (d ? h.some((x, I) => Xt(x, y[I])) : Xt(h, y))) &&
          (m && m(),
          Ie(e, a, 3, [h, y === yn ? void 0 : d && y[0] === yn ? [] : y, g]),
          (y = h));
      } else u.run();
  };
  _.allowRecurse = !!e;
  let b;
  i === "sync"
    ? (b = _)
    : i === "post"
    ? (b = () => pe(_, a && a.suspense))
    : ((_.pre = !0), a && (_.id = a.uid), (b = () => jn(_)));
  const u = new Fs(c, b);
  e
    ? n
      ? _()
      : (y = u.run())
    : i === "post"
    ? pe(u.run.bind(u), a && a.suspense)
    : u.run();
  const p = () => {
    u.stop(), a && a.scope && Ls(a.scope.effects, u);
  };
  return E && E.push(p), p;
}
function Va(t, e, n) {
  const s = this.proxy,
    i = re(t) ? (t.includes(".") ? Ar(s, t) : () => s[t]) : t.bind(s, s);
  let r;
  X(e) ? (r = e) : ((r = e.handler), (n = e));
  const l = ce;
  at(this);
  const o = Us(i, r.bind(s), n);
  return l ? at(l) : rt(), o;
}
function Ar(t, e) {
  const n = e.split(".");
  return () => {
    let s = t;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
function dt(t, e) {
  if (!se(t) || t.__v_skip || ((e = e || new Set()), e.has(t))) return t;
  if ((e.add(t), ue(t))) dt(t.value, e);
  else if (U(t)) for (let n = 0; n < t.length; n++) dt(t[n], e);
  else if (tr(t) || Tt(t))
    t.forEach((n) => {
      dt(n, e);
    });
  else if (sr(t)) for (const n in t) dt(t[n], e);
  return t;
}
function eu(t, e) {
  const n = de;
  if (n === null) return t;
  const s = Un(n) || n.proxy,
    i = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [l, o, a, c = ie] = e[r];
    l &&
      (X(l) && (l = { mounted: l, updated: l }),
      l.deep && dt(o),
      i.push({
        dir: l,
        instance: s,
        value: o,
        oldValue: void 0,
        arg: a,
        modifiers: c,
      }));
  }
  return t;
}
function $e(t, e, n, s) {
  const i = t.dirs,
    r = e && e.dirs;
  for (let l = 0; l < i.length; l++) {
    const o = i[l];
    r && (o.oldValue = r[l].value);
    let a = o.dir[s];
    a && (At(), Ie(a, n, 8, [t.el, o, t, e]), Bt());
  }
}
function Br() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    on(() => {
      t.isMounted = !0;
    }),
    fn(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const Pe = [Function, Array],
  Dr = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Pe,
    onEnter: Pe,
    onAfterEnter: Pe,
    onEnterCancelled: Pe,
    onBeforeLeave: Pe,
    onLeave: Pe,
    onAfterLeave: Pe,
    onLeaveCancelled: Pe,
    onBeforeAppear: Pe,
    onAppear: Pe,
    onAfterAppear: Pe,
    onAppearCancelled: Pe,
  },
  Wa = {
    name: "BaseTransition",
    props: Dr,
    setup(t, { slots: e }) {
      const n = un(),
        s = Br();
      let i;
      return () => {
        const r = e.default && Ks(e.default(), !0);
        if (!r || !r.length) return;
        let l = r[0];
        if (r.length > 1) {
          for (const y of r)
            if (y.type !== be) {
              l = y;
              break;
            }
        }
        const o = Q(t),
          { mode: a } = o;
        if (s.isLeaving) return Zn(l);
        const c = xi(l);
        if (!c) return Zn(l);
        const f = tn(c, o, s, n);
        _t(c, f);
        const d = n.subTree,
          m = d && xi(d);
        let g = !1;
        const { getTransitionKey: E } = c.type;
        if (E) {
          const y = E();
          i === void 0 ? (i = y) : y !== i && ((i = y), (g = !0));
        }
        if (m && m.type !== be && (!Fe(c, m) || g)) {
          const y = tn(m, o, s, n);
          if ((_t(m, y), a === "out-in"))
            return (
              (s.isLeaving = !0),
              (y.afterLeave = () => {
                (s.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              Zn(l)
            );
          a === "in-out" &&
            c.type !== be &&
            (y.delayLeave = (_, b, u) => {
              const p = Fr(s, m);
              (p[String(m.key)] = m),
                (_._leaveCb = () => {
                  b(), (_._leaveCb = void 0), delete f.delayedLeave;
                }),
                (f.delayedLeave = u);
            });
        }
        return l;
      };
    },
  },
  qa = Wa;
function Fr(t, e) {
  const { leavingVNodes: n } = t;
  let s = n.get(e.type);
  return s || ((s = Object.create(null)), n.set(e.type, s)), s;
}
function tn(t, e, n, s) {
  const {
      appear: i,
      mode: r,
      persisted: l = !1,
      onBeforeEnter: o,
      onEnter: a,
      onAfterEnter: c,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: m,
      onAfterLeave: g,
      onLeaveCancelled: E,
      onBeforeAppear: y,
      onAppear: _,
      onAfterAppear: b,
      onAppearCancelled: u,
    } = e,
    p = String(t.key),
    h = Fr(n, t),
    x = (C, w) => {
      C && Ie(C, s, 9, w);
    },
    I = (C, w) => {
      const B = w[1];
      x(C, w),
        U(C) ? C.every((M) => M.length <= 1) && B() : C.length <= 1 && B();
    },
    L = {
      mode: r,
      persisted: l,
      beforeEnter(C) {
        let w = o;
        if (!n.isMounted)
          if (i) w = y || o;
          else return;
        C._leaveCb && C._leaveCb(!0);
        const B = h[p];
        B && Fe(t, B) && B.el._leaveCb && B.el._leaveCb(), x(w, [C]);
      },
      enter(C) {
        let w = a,
          B = c,
          M = f;
        if (!n.isMounted)
          if (i) (w = _ || a), (B = b || c), (M = u || f);
          else return;
        let S = !1;
        const P = (C._enterCb = (O) => {
          S ||
            ((S = !0),
            O ? x(M, [C]) : x(B, [C]),
            L.delayedLeave && L.delayedLeave(),
            (C._enterCb = void 0));
        });
        w ? I(w, [C, P]) : P();
      },
      leave(C, w) {
        const B = String(t.key);
        if ((C._enterCb && C._enterCb(!0), n.isUnmounting)) return w();
        x(d, [C]);
        let M = !1;
        const S = (C._leaveCb = (P) => {
          M ||
            ((M = !0),
            w(),
            P ? x(E, [C]) : x(g, [C]),
            (C._leaveCb = void 0),
            h[B] === t && delete h[B]);
        });
        (h[B] = t), m ? I(m, [C, S]) : S();
      },
      clone(C) {
        return tn(C, e, n, s);
      },
    };
  return L;
}
function Zn(t) {
  if (an(t)) return (t = Ke(t)), (t.children = null), t;
}
function xi(t) {
  return an(t) ? (t.children ? t.children[0] : void 0) : t;
}
function _t(t, e) {
  t.shapeFlag & 6 && t.component
    ? _t(t.component.subTree, e)
    : t.shapeFlag & 128
    ? ((t.ssContent.transition = e.clone(t.ssContent)),
      (t.ssFallback.transition = e.clone(t.ssFallback)))
    : (t.transition = e);
}
function Ks(t, e = !1, n) {
  let s = [],
    i = 0;
  for (let r = 0; r < t.length; r++) {
    let l = t[r];
    const o = n == null ? l.key : String(n) + String(l.key != null ? l.key : r);
    l.type === ve
      ? (l.patchFlag & 128 && i++, (s = s.concat(Ks(l.children, e, o))))
      : (e || l.type !== be) && s.push(o != null ? Ke(l, { key: o }) : l);
  }
  if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
function Ua(t, e) {
  return X(t) ? (() => ae({ name: t.name }, e, { setup: t }))() : t;
}
const ht = (t) => !!t.type.__asyncLoader;
function tu(t) {
  X(t) && (t = { loader: t });
  const {
    loader: e,
    loadingComponent: n,
    errorComponent: s,
    delay: i = 200,
    timeout: r,
    suspensible: l = !0,
    onError: o,
  } = t;
  let a = null,
    c,
    f = 0;
  const d = () => (f++, (a = null), m()),
    m = () => {
      let g;
      return (
        a ||
        (g = a =
          e()
            .catch((E) => {
              if (((E = E instanceof Error ? E : new Error(String(E))), o))
                return new Promise((y, _) => {
                  o(
                    E,
                    () => y(d()),
                    () => _(E),
                    f + 1
                  );
                });
              throw E;
            })
            .then((E) =>
              g !== a && a
                ? a
                : (E &&
                    (E.__esModule || E[Symbol.toStringTag] === "Module") &&
                    (E = E.default),
                  (c = E),
                  E)
            ))
      );
    };
  return Ua({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const g = ce;
      if (c) return () => Qn(c, g);
      const E = (u) => {
        (a = null), Dt(u, g, 13, !s);
      };
      if ((l && g.suspense) || Lt)
        return m()
          .then((u) => () => Qn(u, g))
          .catch((u) => (E(u), () => (s ? le(s, { error: u }) : null)));
      const y = fe(!1),
        _ = fe(),
        b = fe(!!i);
      return (
        i &&
          setTimeout(() => {
            b.value = !1;
          }, i),
        r != null &&
          setTimeout(() => {
            if (!y.value && !_.value) {
              const u = new Error(`Async component timed out after ${r}ms.`);
              E(u), (_.value = u);
            }
          }, r),
        m()
          .then(() => {
            (y.value = !0),
              g.parent && an(g.parent.vnode) && jn(g.parent.update);
          })
          .catch((u) => {
            E(u), (_.value = u);
          }),
        () => {
          if (y.value && c) return Qn(c, g);
          if (_.value && s) return le(s, { error: _.value });
          if (n && !b.value) return le(n);
        }
      );
    },
  });
}
function Qn(t, e) {
  const { ref: n, props: s, children: i, ce: r } = e.vnode,
    l = le(t, s, i);
  return (l.ref = n), (l.ce = r), delete e.vnode.ce, l;
}
const an = (t) => t.type.__isKeepAlive,
  Ka = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(t, { slots: e }) {
      const n = un(),
        s = n.ctx;
      if (!s.renderer)
        return () => {
          const u = e.default && e.default();
          return u && u.length === 1 ? u[0] : u;
        };
      const i = new Map(),
        r = new Set();
      let l = null;
      const o = n.suspense,
        {
          renderer: {
            p: a,
            m: c,
            um: f,
            o: { createElement: d },
          },
        } = s,
        m = d("div");
      (s.activate = (u, p, h, x, I) => {
        const L = u.component;
        c(u, p, h, 0, o),
          a(L.vnode, u, p, h, L, o, x, u.slotScopeIds, I),
          pe(() => {
            (L.isDeactivated = !1), L.a && Gt(L.a);
            const C = u.props && u.props.onVnodeMounted;
            C && we(C, L.parent, u);
          }, o);
      }),
        (s.deactivate = (u) => {
          const p = u.component;
          c(u, m, null, 1, o),
            pe(() => {
              p.da && Gt(p.da);
              const h = u.props && u.props.onVnodeUnmounted;
              h && we(h, p.parent, u), (p.isDeactivated = !0);
            }, o);
        });
      function g(u) {
        es(u), f(u, n, o, !0);
      }
      function E(u) {
        i.forEach((p, h) => {
          const x = Es(p.type);
          x && (!u || !u(x)) && y(h);
        });
      }
      function y(u) {
        const p = i.get(u);
        !l || !Fe(p, l) ? g(p) : l && es(l), i.delete(u), r.delete(u);
      }
      Vt(
        () => [t.include, t.exclude],
        ([u, p]) => {
          u && E((h) => Ht(u, h)), p && E((h) => !Ht(p, h));
        },
        { flush: "post", deep: !0 }
      );
      let _ = null;
      const b = () => {
        _ != null && i.set(_, ts(n.subTree));
      };
      return (
        on(b),
        cn(b),
        fn(() => {
          i.forEach((u) => {
            const { subTree: p, suspense: h } = n,
              x = ts(p);
            if (u.type === x.type && u.key === x.key) {
              es(x);
              const I = x.component.da;
              I && pe(I, h);
              return;
            }
            g(u);
          });
        }),
        () => {
          if (((_ = null), !e.default)) return null;
          const u = e.default(),
            p = u[0];
          if (u.length > 1) return (l = null), u;
          if (!Ot(p) || (!(p.shapeFlag & 4) && !(p.shapeFlag & 128)))
            return (l = null), p;
          let h = ts(p);
          const x = h.type,
            I = Es(ht(h) ? h.type.__asyncResolved || {} : x),
            { include: L, exclude: C, max: w } = t;
          if ((L && (!I || !Ht(L, I))) || (C && I && Ht(C, I)))
            return (l = h), p;
          const B = h.key == null ? x : h.key,
            M = i.get(B);
          return (
            h.el && ((h = Ke(h)), p.shapeFlag & 128 && (p.ssContent = h)),
            (_ = B),
            M
              ? ((h.el = M.el),
                (h.component = M.component),
                h.transition && _t(h, h.transition),
                (h.shapeFlag |= 512),
                r.delete(B),
                r.add(B))
              : (r.add(B),
                w && r.size > parseInt(w, 10) && y(r.values().next().value)),
            (h.shapeFlag |= 256),
            (l = h),
            Lr(p.type) ? p : h
          );
        }
      );
    },
  },
  nu = Ka;
function Ht(t, e) {
  return U(t)
    ? t.some((n) => Ht(n, e))
    : re(t)
    ? t.split(",").includes(e)
    : Bl(t)
    ? t.test(e)
    : !1;
}
function Ya(t, e) {
  zr(t, "a", e);
}
function Xa(t, e) {
  zr(t, "da", e);
}
function zr(t, e, n = ce) {
  const s =
    t.__wdc ||
    (t.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return t();
    });
  if ((Wn(e, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      an(i.parent.vnode) && Ja(s, e, n, i), (i = i.parent);
  }
}
function Ja(t, e, n, s) {
  const i = Wn(e, t, s, !0);
  $r(() => {
    Ls(s[e], i);
  }, n);
}
function es(t) {
  (t.shapeFlag &= -257), (t.shapeFlag &= -513);
}
function ts(t) {
  return t.shapeFlag & 128 ? t.ssContent : t;
}
function Wn(t, e, n = ce, s = !1) {
  if (n) {
    const i = n[t] || (n[t] = []),
      r =
        e.__weh ||
        (e.__weh = (...l) => {
          if (n.isUnmounted) return;
          At(), at(n);
          const o = Ie(e, n, t, l);
          return rt(), Bt(), o;
        });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Ye =
    (t) =>
    (e, n = ce) =>
      (!Lt || t === "sp") && Wn(t, (...s) => e(...s), n),
  Za = Ye("bm"),
  on = Ye("m"),
  Nr = Ye("bu"),
  cn = Ye("u"),
  fn = Ye("bum"),
  $r = Ye("um"),
  Qa = Ye("sp"),
  eo = Ye("rtg"),
  to = Ye("rtc");
function no(t, e = ce) {
  Wn("ec", t, e);
}
const Ys = "components",
  so = "directives";
function su(t, e) {
  return Xs(Ys, t, !0, e) || t;
}
const Rr = Symbol.for("v-ndc");
function iu(t) {
  return re(t) ? Xs(Ys, t, !1) || t : t || Rr;
}
function ru(t) {
  return Xs(so, t);
}
function Xs(t, e, n = !0, s = !1) {
  const i = de || ce;
  if (i) {
    const r = i.type;
    if (t === Ys) {
      const o = Es(r, !1);
      if (o && (o === e || o === ke(e) || o === $n(ke(e)))) return r;
    }
    const l = Si(i[t] || r[t], e) || Si(i.appContext[t], e);
    return !l && s ? r : l;
  }
}
function Si(t, e) {
  return t && (t[e] || t[ke(e)] || t[$n(ke(e))]);
}
function lu(t, e, n, s) {
  let i;
  const r = n && n[s];
  if (U(t) || re(t)) {
    i = new Array(t.length);
    for (let l = 0, o = t.length; l < o; l++)
      i[l] = e(t[l], l, void 0, r && r[l]);
  } else if (typeof t == "number") {
    i = new Array(t);
    for (let l = 0; l < t; l++) i[l] = e(l + 1, l, void 0, r && r[l]);
  } else if (se(t))
    if (t[Symbol.iterator])
      i = Array.from(t, (l, o) => e(l, o, void 0, r && r[o]));
    else {
      const l = Object.keys(t);
      i = new Array(l.length);
      for (let o = 0, a = l.length; o < a; o++) {
        const c = l[o];
        i[o] = e(t[c], c, o, r && r[o]);
      }
    }
  else i = [];
  return n && (n[s] = i), i;
}
function au(t, e) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (U(s)) for (let i = 0; i < s.length; i++) t[s[i].name] = s[i].fn;
    else
      s &&
        (t[s.name] = s.key
          ? (...i) => {
              const r = s.fn(...i);
              return r && (r.key = s.key), r;
            }
          : s.fn);
  }
  return t;
}
function ou(t, e, n = {}, s, i) {
  if (de.isCE || (de.parent && ht(de.parent) && de.parent.isCE))
    return e !== "default" && (n.name = e), le("slot", n, s && s());
  let r = t[e];
  r && r._c && (r._d = !1), ti();
  const l = r && Hr(r(n)),
    o = Zr(
      ve,
      { key: n.key || (l && l.key) || `_${e}` },
      l || (s ? s() : []),
      l && t._ === 1 ? 64 : -2
    );
  return (
    !i && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    o
  );
}
function Hr(t) {
  return t.some((e) =>
    Ot(e) ? !(e.type === be || (e.type === ve && !Hr(e.children))) : !0
  )
    ? t
    : null;
}
function cu(t, e) {
  const n = {};
  for (const s in t) n[e && /[A-Z]/.test(s) ? `on:${s}` : Cn(s)] = t[s];
  return n;
}
const bs = (t) => (t ? (nl(t) ? Un(t) || t.proxy : bs(t.parent)) : null),
  Wt = ae(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => bs(t.parent),
    $root: (t) => bs(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Js(t),
    $forceUpdate: (t) => t.f || (t.f = () => jn(t.update)),
    $nextTick: (t) => t.n || (t.n = Cr.bind(t.proxy)),
    $watch: (t) => Va.bind(t),
  }),
  ns = (t, e) => t !== ie && !t.__isScriptSetup && ee(t, e),
  io = {
    get({ _: t }, e) {
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: l,
        type: o,
        appContext: a,
      } = t;
      let c;
      if (e[0] !== "$") {
        const g = l[e];
        if (g !== void 0)
          switch (g) {
            case 1:
              return s[e];
            case 2:
              return i[e];
            case 4:
              return n[e];
            case 3:
              return r[e];
          }
        else {
          if (ns(s, e)) return (l[e] = 1), s[e];
          if (i !== ie && ee(i, e)) return (l[e] = 2), i[e];
          if ((c = t.propsOptions[0]) && ee(c, e)) return (l[e] = 3), r[e];
          if (n !== ie && ee(n, e)) return (l[e] = 4), n[e];
          ys && (l[e] = 0);
        }
      }
      const f = Wt[e];
      let d, m;
      if (f) return e === "$attrs" && Te(t, "get", e), f(t);
      if ((d = o.__cssModules) && (d = d[e])) return d;
      if (n !== ie && ee(n, e)) return (l[e] = 4), n[e];
      if (((m = a.config.globalProperties), ee(m, e))) return m[e];
    },
    set({ _: t }, e, n) {
      const { data: s, setupState: i, ctx: r } = t;
      return ns(i, e)
        ? ((i[e] = n), !0)
        : s !== ie && ee(s, e)
        ? ((s[e] = n), !0)
        : ee(t.props, e) || (e[0] === "$" && e.slice(1) in t)
        ? !1
        : ((r[e] = n), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: r,
        },
      },
      l
    ) {
      let o;
      return (
        !!n[l] ||
        (t !== ie && ee(t, l)) ||
        ns(e, l) ||
        ((o = r[0]) && ee(o, l)) ||
        ee(s, l) ||
        ee(Wt, l) ||
        ee(i.config.globalProperties, l)
      );
    },
    defineProperty(t, e, n) {
      return (
        n.get != null
          ? (t._.accessCache[e] = 0)
          : ee(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      );
    },
  };
function fu() {
  return ro().attrs;
}
function ro() {
  const t = un();
  return t.setupContext || (t.setupContext = il(t));
}
function Ei(t) {
  return U(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
}
function uu(t) {
  const e = un();
  let n = t();
  return (
    rt(),
    As(n) &&
      (n = n.catch((s) => {
        throw (at(e), s);
      })),
    [n, () => at(e)]
  );
}
let ys = !0;
function lo(t) {
  const e = Js(t),
    n = t.proxy,
    s = t.ctx;
  (ys = !1), e.beforeCreate && Ci(e.beforeCreate, t, "bc");
  const {
    data: i,
    computed: r,
    methods: l,
    watch: o,
    provide: a,
    inject: c,
    created: f,
    beforeMount: d,
    mounted: m,
    beforeUpdate: g,
    updated: E,
    activated: y,
    deactivated: _,
    beforeDestroy: b,
    beforeUnmount: u,
    destroyed: p,
    unmounted: h,
    render: x,
    renderTracked: I,
    renderTriggered: L,
    errorCaptured: C,
    serverPrefetch: w,
    expose: B,
    inheritAttrs: M,
    components: S,
    directives: P,
    filters: O,
  } = e;
  if ((c && ao(c, s, null), l))
    for (const j in l) {
      const K = l[j];
      X(K) && (s[j] = K.bind(n));
    }
  if (i) {
    const j = i.call(n, n);
    se(j) && (t.data = Rs(j));
  }
  if (((ys = !0), r))
    for (const j in r) {
      const K = r[j],
        Y = X(K) ? K.bind(n, n) : X(K.get) ? K.get.bind(n, n) : ze,
        he = !X(K) && X(K.set) ? K.set.bind(n) : ze,
        xe = rl({ get: Y, set: he });
      Object.defineProperty(s, j, {
        enumerable: !0,
        configurable: !0,
        get: () => xe.value,
        set: (_e) => (xe.value = _e),
      });
    }
  if (o) for (const j in o) kr(o[j], s, n, j);
  if (a) {
    const j = X(a) ? a.call(n) : a;
    Reflect.ownKeys(j).forEach((K) => {
      Zs(K, j[K]);
    });
  }
  f && Ci(f, t, "c");
  function k(j, K) {
    U(K) ? K.forEach((Y) => j(Y.bind(n))) : K && j(K.bind(n));
  }
  if (
    (k(Za, d),
    k(on, m),
    k(Nr, g),
    k(cn, E),
    k(Ya, y),
    k(Xa, _),
    k(no, C),
    k(to, I),
    k(eo, L),
    k(fn, u),
    k($r, h),
    k(Qa, w),
    U(B))
  )
    if (B.length) {
      const j = t.exposed || (t.exposed = {});
      B.forEach((K) => {
        Object.defineProperty(j, K, {
          get: () => n[K],
          set: (Y) => (n[K] = Y),
        });
      });
    } else t.exposed || (t.exposed = {});
  x && t.render === ze && (t.render = x),
    M != null && (t.inheritAttrs = M),
    S && (t.components = S),
    P && (t.directives = P);
}
function ao(t, e, n = ze) {
  U(t) && (t = ws(t));
  for (const s in t) {
    const i = t[s];
    let r;
    se(i)
      ? "default" in i
        ? (r = _n(i.from || s, i.default, !0))
        : (r = _n(i.from || s))
      : (r = _n(i)),
      ue(r)
        ? Object.defineProperty(e, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (l) => (r.value = l),
          })
        : (e[s] = r);
  }
}
function Ci(t, e, n) {
  Ie(U(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function kr(t, e, n, s) {
  const i = s.includes(".") ? Ar(n, s) : () => n[s];
  if (re(t)) {
    const r = e[t];
    X(r) && Vt(i, r);
  } else if (X(t)) Vt(i, t.bind(n));
  else if (se(t))
    if (U(t)) t.forEach((r) => kr(r, e, n, s));
    else {
      const r = X(t.handler) ? t.handler.bind(n) : e[t.handler];
      X(r) && Vt(i, r, t);
    }
}
function Js(t) {
  const e = t.type,
    { mixins: n, extends: s } = e,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: l },
    } = t.appContext,
    o = r.get(e);
  let a;
  return (
    o
      ? (a = o)
      : !i.length && !n && !s
      ? (a = e)
      : ((a = {}), i.length && i.forEach((c) => Dn(a, c, l, !0)), Dn(a, e, l)),
    se(e) && r.set(e, a),
    a
  );
}
function Dn(t, e, n, s = !1) {
  const { mixins: i, extends: r } = e;
  r && Dn(t, r, n, !0), i && i.forEach((l) => Dn(t, l, n, !0));
  for (const l in e)
    if (!(s && l === "expose")) {
      const o = oo[l] || (n && n[l]);
      t[l] = o ? o(t[l], e[l]) : e[l];
    }
  return t;
}
const oo = {
  data: _i,
  props: Pi,
  emits: Pi,
  methods: kt,
  computed: kt,
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  components: kt,
  directives: kt,
  watch: fo,
  provide: _i,
  inject: co,
};
function _i(t, e) {
  return e
    ? t
      ? function () {
          return ae(
            X(t) ? t.call(this, this) : t,
            X(e) ? e.call(this, this) : e
          );
        }
      : e
    : t;
}
function co(t, e) {
  return kt(ws(t), ws(e));
}
function ws(t) {
  if (U(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function ge(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function kt(t, e) {
  return t ? ae(Object.create(null), t, e) : e;
}
function Pi(t, e) {
  return t
    ? U(t) && U(e)
      ? [...new Set([...t, ...e])]
      : ae(Object.create(null), Ei(t), Ei(e ?? {}))
    : e;
}
function fo(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = ae(Object.create(null), t);
  for (const s in e) n[s] = ge(t[s], e[s]);
  return n;
}
function jr() {
  return {
    app: null,
    config: {
      isNativeTag: Ll,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let uo = 0;
function po(t, e) {
  return function (s, i = null) {
    X(s) || (s = ae({}, s)), i != null && !se(i) && (i = null);
    const r = jr(),
      l = new Set();
    let o = !1;
    const a = (r.app = {
      _uid: uo++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: $o,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          l.has(c) ||
            (c && X(c.install)
              ? (l.add(c), c.install(a, ...f))
              : X(c) && (l.add(c), c(a, ...f))),
          a
        );
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), a;
      },
      component(c, f) {
        return f ? ((r.components[c] = f), a) : r.components[c];
      },
      directive(c, f) {
        return f ? ((r.directives[c] = f), a) : r.directives[c];
      },
      mount(c, f, d) {
        if (!o) {
          const m = le(s, i);
          return (
            (m.appContext = r),
            f && e ? e(m, c) : t(m, c, d),
            (o = !0),
            (a._container = c),
            (c.__vue_app__ = a),
            Un(m.component) || m.component.proxy
          );
        }
      },
      unmount() {
        o && (t(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, f) {
        return (r.provides[c] = f), a;
      },
      runWithContext(c) {
        nn = a;
        try {
          return c();
        } finally {
          nn = null;
        }
      },
    });
    return a;
  };
}
let nn = null;
function Zs(t, e) {
  if (ce) {
    let n = ce.provides;
    const s = ce.parent && ce.parent.provides;
    s === n && (n = ce.provides = Object.create(s)), (n[t] = e);
  }
}
function _n(t, e, n = !1) {
  const s = ce || de;
  if (s || nn) {
    const i = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : nn._context.provides;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && X(e) ? e.call(s && s.proxy) : e;
  }
}
function du() {
  return !!(ce || de || nn);
}
function ho(t, e, n, s = !1) {
  const i = {},
    r = {};
  On(r, qn, 1), (t.propsDefaults = Object.create(null)), Gr(t, e, i, r);
  for (const l in t.propsOptions[0]) l in i || (i[l] = void 0);
  n ? (t.props = s ? i : ya(i)) : t.type.props ? (t.props = i) : (t.props = r),
    (t.attrs = r);
}
function mo(t, e, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: l },
    } = t,
    o = Q(i),
    [a] = t.propsOptions;
  let c = !1;
  if ((s || l > 0) && !(l & 16)) {
    if (l & 8) {
      const f = t.vnode.dynamicProps;
      for (let d = 0; d < f.length; d++) {
        let m = f[d];
        if (Gn(t.emitsOptions, m)) continue;
        const g = e[m];
        if (a)
          if (ee(r, m)) g !== r[m] && ((r[m] = g), (c = !0));
          else {
            const E = ke(m);
            i[E] = Ts(a, o, E, g, t, !1);
          }
        else g !== r[m] && ((r[m] = g), (c = !0));
      }
    }
  } else {
    Gr(t, e, i, r) && (c = !0);
    let f;
    for (const d in o)
      (!e || (!ee(e, d) && ((f = gt(d)) === d || !ee(e, f)))) &&
        (a
          ? n &&
            (n[d] !== void 0 || n[f] !== void 0) &&
            (i[d] = Ts(a, o, d, void 0, t, !0))
          : delete i[d]);
    if (r !== o)
      for (const d in r) (!e || !ee(e, d)) && (delete r[d], (c = !0));
  }
  c && Ue(t, "set", "$attrs");
}
function Gr(t, e, n, s) {
  const [i, r] = t.propsOptions;
  let l = !1,
    o;
  if (e)
    for (let a in e) {
      if (jt(a)) continue;
      const c = e[a];
      let f;
      i && ee(i, (f = ke(a)))
        ? !r || !r.includes(f)
          ? (n[f] = c)
          : ((o || (o = {}))[f] = c)
        : Gn(t.emitsOptions, a) ||
          ((!(a in s) || c !== s[a]) && ((s[a] = c), (l = !0)));
    }
  if (r) {
    const a = Q(n),
      c = o || ie;
    for (let f = 0; f < r.length; f++) {
      const d = r[f];
      n[d] = Ts(i, a, d, c[d], t, !ee(c, d));
    }
  }
  return l;
}
function Ts(t, e, n, s, i, r) {
  const l = t[n];
  if (l != null) {
    const o = ee(l, "default");
    if (o && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && X(a)) {
        const { propsDefaults: c } = i;
        n in c ? (s = c[n]) : (at(i), (s = c[n] = a.call(null, e)), rt());
      } else s = a;
    }
    l[0] &&
      (r && !o ? (s = !1) : l[1] && (s === "" || s === gt(n)) && (s = !0));
  }
  return s;
}
function Vr(t, e, n = !1) {
  const s = e.propsCache,
    i = s.get(t);
  if (i) return i;
  const r = t.props,
    l = {},
    o = [];
  let a = !1;
  if (!X(t)) {
    const f = (d) => {
      a = !0;
      const [m, g] = Vr(d, e, !0);
      ae(l, m), g && o.push(...g);
    };
    !n && e.mixins.length && e.mixins.forEach(f),
      t.extends && f(t.extends),
      t.mixins && t.mixins.forEach(f);
  }
  if (!r && !a) return se(t) && s.set(t, wt), wt;
  if (U(r))
    for (let f = 0; f < r.length; f++) {
      const d = ke(r[f]);
      Mi(d) && (l[d] = ie);
    }
  else if (r)
    for (const f in r) {
      const d = ke(f);
      if (Mi(d)) {
        const m = r[f],
          g = (l[d] = U(m) || X(m) ? { type: m } : ae({}, m));
        if (g) {
          const E = Ii(Boolean, g.type),
            y = Ii(String, g.type);
          (g[0] = E > -1),
            (g[1] = y < 0 || E < y),
            (E > -1 || ee(g, "default")) && o.push(d);
        }
      }
    }
  const c = [l, o];
  return se(t) && s.set(t, c), c;
}
function Mi(t) {
  return t[0] !== "$";
}
function Oi(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function Li(t, e) {
  return Oi(t) === Oi(e);
}
function Ii(t, e) {
  return U(e) ? e.findIndex((n) => Li(n, t)) : X(e) && Li(e, t) ? 0 : -1;
}
const Wr = (t) => t[0] === "_" || t === "$stable",
  Qs = (t) => (U(t) ? t.map(Me) : [Me(t)]),
  go = (t, e, n) => {
    if (e._n) return e;
    const s = Ba((...i) => Qs(e(...i)), n);
    return (s._c = !1), s;
  },
  qr = (t, e, n) => {
    const s = t._ctx;
    for (const i in t) {
      if (Wr(i)) continue;
      const r = t[i];
      if (X(r)) e[i] = go(i, r, s);
      else if (r != null) {
        const l = Qs(r);
        e[i] = () => l;
      }
    }
  },
  Ur = (t, e) => {
    const n = Qs(e);
    t.slots.default = () => n;
  },
  vo = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? ((t.slots = Q(e)), On(e, "_", n)) : qr(e, (t.slots = {}));
    } else (t.slots = {}), e && Ur(t, e);
    On(t.slots, qn, 1);
  },
  bo = (t, e, n) => {
    const { vnode: s, slots: i } = t;
    let r = !0,
      l = ie;
    if (s.shapeFlag & 32) {
      const o = e._;
      o
        ? n && o === 1
          ? (r = !1)
          : (ae(i, e), !n && o === 1 && delete i._)
        : ((r = !e.$stable), qr(e, i)),
        (l = e);
    } else e && (Ur(t, e), (l = { default: 1 }));
    if (r) for (const o in i) !Wr(o) && !(o in l) && delete i[o];
  };
function Fn(t, e, n, s, i = !1) {
  if (U(t)) {
    t.forEach((m, g) => Fn(m, e && (U(e) ? e[g] : e), n, s, i));
    return;
  }
  if (ht(s) && !i) return;
  const r = s.shapeFlag & 4 ? Un(s.component) || s.component.proxy : s.el,
    l = i ? null : r,
    { i: o, r: a } = t,
    c = e && e.r,
    f = o.refs === ie ? (o.refs = {}) : o.refs,
    d = o.setupState;
  if (
    (c != null &&
      c !== a &&
      (re(c)
        ? ((f[c] = null), ee(d, c) && (d[c] = null))
        : ue(c) && (c.value = null)),
    X(a))
  )
    it(a, o, 12, [l, f]);
  else {
    const m = re(a),
      g = ue(a);
    if (m || g) {
      const E = () => {
        if (t.f) {
          const y = m ? (ee(d, a) ? d[a] : f[a]) : a.value;
          i
            ? U(y) && Ls(y, r)
            : U(y)
            ? y.includes(r) || y.push(r)
            : m
            ? ((f[a] = [r]), ee(d, a) && (d[a] = f[a]))
            : ((a.value = [r]), t.k && (f[t.k] = a.value));
        } else
          m
            ? ((f[a] = l), ee(d, a) && (d[a] = l))
            : g && ((a.value = l), t.k && (f[t.k] = l));
      };
      l ? ((E.id = -1), pe(E, n)) : E();
    }
  }
}
let Je = !1;
const wn = (t) => /svg/.test(t.namespaceURI) && t.tagName !== "foreignObject",
  Tn = (t) => t.nodeType === 8;
function yo(t) {
  const {
      mt: e,
      p: n,
      o: {
        patchProp: s,
        createText: i,
        nextSibling: r,
        parentNode: l,
        remove: o,
        insert: a,
        createComment: c,
      },
    } = t,
    f = (b, u) => {
      if (!u.hasChildNodes()) {
        n(null, b, u), An(), (u._vnode = b);
        return;
      }
      (Je = !1),
        d(u.firstChild, b, null, null, null),
        An(),
        (u._vnode = b),
        Je && console.error("Hydration completed but contains mismatches.");
    },
    d = (b, u, p, h, x, I = !1) => {
      const L = Tn(b) && b.data === "[",
        C = () => y(b, u, p, h, x, L),
        { type: w, ref: B, shapeFlag: M, patchFlag: S } = u;
      let P = b.nodeType;
      (u.el = b), S === -2 && ((I = !1), (u.dynamicChildren = null));
      let O = null;
      switch (w) {
        case Pt:
          P !== 3
            ? u.children === ""
              ? (a((u.el = i("")), l(b), b), (O = b))
              : (O = C())
            : (b.data !== u.children && ((Je = !0), (b.data = u.children)),
              (O = r(b)));
          break;
        case be:
          P !== 8 || L ? (O = C()) : (O = r(b));
          break;
        case Ut:
          if ((L && ((b = r(b)), (P = b.nodeType)), P === 1 || P === 3)) {
            O = b;
            const R = !u.children.length;
            for (let k = 0; k < u.staticCount; k++)
              R && (u.children += O.nodeType === 1 ? O.outerHTML : O.data),
                k === u.staticCount - 1 && (u.anchor = O),
                (O = r(O));
            return L ? r(O) : O;
          } else C();
          break;
        case ve:
          L ? (O = E(b, u, p, h, x, I)) : (O = C());
          break;
        default:
          if (M & 1)
            P !== 1 || u.type.toLowerCase() !== b.tagName.toLowerCase()
              ? (O = C())
              : (O = m(b, u, p, h, x, I));
          else if (M & 6) {
            u.slotScopeIds = x;
            const R = l(b);
            if (
              (e(u, R, null, p, h, wn(R), I),
              (O = L ? _(b) : r(b)),
              O && Tn(O) && O.data === "teleport end" && (O = r(O)),
              ht(u))
            ) {
              let k;
              L
                ? ((k = le(ve)),
                  (k.anchor = O ? O.previousSibling : R.lastChild))
                : (k = b.nodeType === 3 ? tl("") : le("div")),
                (k.el = b),
                (u.component.subTree = k);
            }
          } else
            M & 64
              ? P !== 8
                ? (O = C())
                : (O = u.type.hydrate(b, u, p, h, x, I, t, g))
              : M & 128 &&
                (O = u.type.hydrate(b, u, p, h, wn(l(b)), x, I, t, d));
      }
      return B != null && Fn(B, null, h, u), O;
    },
    m = (b, u, p, h, x, I) => {
      I = I || !!u.dynamicChildren;
      const { type: L, props: C, patchFlag: w, shapeFlag: B, dirs: M } = u,
        S = (L === "input" && M) || L === "option";
      if (S || w !== -1) {
        if ((M && $e(u, null, p, "created"), C))
          if (S || !I || w & 48)
            for (const O in C)
              ((S && O.endsWith("value")) || (rn(O) && !jt(O))) &&
                s(b, O, null, C[O], !1, void 0, p);
          else C.onClick && s(b, "onClick", null, C.onClick, !1, void 0, p);
        let P;
        if (
          ((P = C && C.onVnodeBeforeMount) && we(P, p, u),
          M && $e(u, null, p, "beforeMount"),
          ((P = C && C.onVnodeMounted) || M) &&
            Ir(() => {
              P && we(P, p, u), M && $e(u, null, p, "mounted");
            }, h),
          B & 16 && !(C && (C.innerHTML || C.textContent)))
        ) {
          let O = g(b.firstChild, u, b, p, h, x, I);
          for (; O; ) {
            Je = !0;
            const R = O;
            (O = O.nextSibling), o(R);
          }
        } else
          B & 8 &&
            b.textContent !== u.children &&
            ((Je = !0), (b.textContent = u.children));
      }
      return b.nextSibling;
    },
    g = (b, u, p, h, x, I, L) => {
      L = L || !!u.dynamicChildren;
      const C = u.children,
        w = C.length;
      for (let B = 0; B < w; B++) {
        const M = L ? C[B] : (C[B] = Me(C[B]));
        if (b) b = d(b, M, h, x, I, L);
        else {
          if (M.type === Pt && !M.children) continue;
          (Je = !0), n(null, M, p, null, h, x, wn(p), I);
        }
      }
      return b;
    },
    E = (b, u, p, h, x, I) => {
      const { slotScopeIds: L } = u;
      L && (x = x ? x.concat(L) : L);
      const C = l(b),
        w = g(r(b), u, C, p, h, x, I);
      return w && Tn(w) && w.data === "]"
        ? r((u.anchor = w))
        : ((Je = !0), a((u.anchor = c("]")), C, w), w);
    },
    y = (b, u, p, h, x, I) => {
      if (((Je = !0), (u.el = null), I)) {
        const w = _(b);
        for (;;) {
          const B = r(b);
          if (B && B !== w) o(B);
          else break;
        }
      }
      const L = r(b),
        C = l(b);
      return o(b), n(null, u, C, L, p, h, wn(C), x), L;
    },
    _ = (b) => {
      let u = 0;
      for (; b; )
        if (
          ((b = r(b)), b && Tn(b) && (b.data === "[" && u++, b.data === "]"))
        ) {
          if (u === 0) return r(b);
          u--;
        }
      return b;
    };
  return [f, d];
}
const pe = Ir;
function wo(t) {
  return Kr(t);
}
function To(t) {
  return Kr(t, yo);
}
function Kr(t, e) {
  const n = ps();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: l,
      createText: o,
      createComment: a,
      setText: c,
      setElementText: f,
      parentNode: d,
      nextSibling: m,
      setScopeId: g = ze,
      insertStaticContent: E,
    } = t,
    y = (
      v,
      T,
      A,
      F = null,
      D = null,
      $ = null,
      G = !1,
      N = null,
      H = !!T.dynamicChildren
    ) => {
      if (v === T) return;
      v && !Fe(v, T) && ((F = pn(v)), _e(v, D, $, !0), (v = null)),
        T.patchFlag === -2 && ((H = !1), (T.dynamicChildren = null));
      const { type: z, ref: W, shapeFlag: V } = T;
      switch (z) {
        case Pt:
          _(v, T, A, F);
          break;
        case be:
          b(v, T, A, F);
          break;
        case Ut:
          v == null && u(T, A, F, G);
          break;
        case ve:
          S(v, T, A, F, D, $, G, N, H);
          break;
        default:
          V & 1
            ? x(v, T, A, F, D, $, G, N, H)
            : V & 6
            ? P(v, T, A, F, D, $, G, N, H)
            : (V & 64 || V & 128) && z.process(v, T, A, F, D, $, G, N, H, vt);
      }
      W != null && D && Fn(W, v && v.ref, $, T || v, !T);
    },
    _ = (v, T, A, F) => {
      if (v == null) s((T.el = o(T.children)), A, F);
      else {
        const D = (T.el = v.el);
        T.children !== v.children && c(D, T.children);
      }
    },
    b = (v, T, A, F) => {
      v == null ? s((T.el = a(T.children || "")), A, F) : (T.el = v.el);
    },
    u = (v, T, A, F) => {
      [v.el, v.anchor] = E(v.children, T, A, F, v.el, v.anchor);
    },
    p = ({ el: v, anchor: T }, A, F) => {
      let D;
      for (; v && v !== T; ) (D = m(v)), s(v, A, F), (v = D);
      s(T, A, F);
    },
    h = ({ el: v, anchor: T }) => {
      let A;
      for (; v && v !== T; ) (A = m(v)), i(v), (v = A);
      i(T);
    },
    x = (v, T, A, F, D, $, G, N, H) => {
      (G = G || T.type === "svg"),
        v == null ? I(T, A, F, D, $, G, N, H) : w(v, T, D, $, G, N, H);
    },
    I = (v, T, A, F, D, $, G, N) => {
      let H, z;
      const { type: W, props: V, shapeFlag: q, transition: J, dirs: Z } = v;
      if (
        ((H = v.el = l(v.type, $, V && V.is, V)),
        q & 8
          ? f(H, v.children)
          : q & 16 &&
            C(v.children, H, null, F, D, $ && W !== "foreignObject", G, N),
        Z && $e(v, null, F, "created"),
        L(H, v, v.scopeId, G, F),
        V)
      ) {
        for (const te in V)
          te !== "value" &&
            !jt(te) &&
            r(H, te, null, V[te], $, v.children, F, D, je);
        "value" in V && r(H, "value", null, V.value),
          (z = V.onVnodeBeforeMount) && we(z, F, v);
      }
      Z && $e(v, null, F, "beforeMount");
      const ne = (!D || (D && !D.pendingBranch)) && J && !J.persisted;
      ne && J.beforeEnter(H),
        s(H, T, A),
        ((z = V && V.onVnodeMounted) || ne || Z) &&
          pe(() => {
            z && we(z, F, v), ne && J.enter(H), Z && $e(v, null, F, "mounted");
          }, D);
    },
    L = (v, T, A, F, D) => {
      if ((A && g(v, A), F)) for (let $ = 0; $ < F.length; $++) g(v, F[$]);
      if (D) {
        let $ = D.subTree;
        if (T === $) {
          const G = D.vnode;
          L(v, G, G.scopeId, G.slotScopeIds, D.parent);
        }
      }
    },
    C = (v, T, A, F, D, $, G, N, H = 0) => {
      for (let z = H; z < v.length; z++) {
        const W = (v[z] = N ? et(v[z]) : Me(v[z]));
        y(null, W, T, A, F, D, $, G, N);
      }
    },
    w = (v, T, A, F, D, $, G) => {
      const N = (T.el = v.el);
      let { patchFlag: H, dynamicChildren: z, dirs: W } = T;
      H |= v.patchFlag & 16;
      const V = v.props || ie,
        q = T.props || ie;
      let J;
      A && ot(A, !1),
        (J = q.onVnodeBeforeUpdate) && we(J, A, T, v),
        W && $e(T, v, A, "beforeUpdate"),
        A && ot(A, !0);
      const Z = D && T.type !== "foreignObject";
      if (
        (z
          ? B(v.dynamicChildren, z, N, A, F, Z, $)
          : G || K(v, T, N, null, A, F, Z, $, !1),
        H > 0)
      ) {
        if (H & 16) M(N, T, V, q, A, F, D);
        else if (
          (H & 2 && V.class !== q.class && r(N, "class", null, q.class, D),
          H & 4 && r(N, "style", V.style, q.style, D),
          H & 8)
        ) {
          const ne = T.dynamicProps;
          for (let te = 0; te < ne.length; te++) {
            const oe = ne[te],
              Be = V[oe],
              bt = q[oe];
            (bt !== Be || oe === "value") &&
              r(N, oe, Be, bt, D, v.children, A, F, je);
          }
        }
        H & 1 && v.children !== T.children && f(N, T.children);
      } else !G && z == null && M(N, T, V, q, A, F, D);
      ((J = q.onVnodeUpdated) || W) &&
        pe(() => {
          J && we(J, A, T, v), W && $e(T, v, A, "updated");
        }, F);
    },
    B = (v, T, A, F, D, $, G) => {
      for (let N = 0; N < T.length; N++) {
        const H = v[N],
          z = T[N],
          W =
            H.el && (H.type === ve || !Fe(H, z) || H.shapeFlag & 70)
              ? d(H.el)
              : A;
        y(H, z, W, null, F, D, $, G, !0);
      }
    },
    M = (v, T, A, F, D, $, G) => {
      if (A !== F) {
        if (A !== ie)
          for (const N in A)
            !jt(N) && !(N in F) && r(v, N, A[N], null, G, T.children, D, $, je);
        for (const N in F) {
          if (jt(N)) continue;
          const H = F[N],
            z = A[N];
          H !== z && N !== "value" && r(v, N, z, H, G, T.children, D, $, je);
        }
        "value" in F && r(v, "value", A.value, F.value);
      }
    },
    S = (v, T, A, F, D, $, G, N, H) => {
      const z = (T.el = v ? v.el : o("")),
        W = (T.anchor = v ? v.anchor : o(""));
      let { patchFlag: V, dynamicChildren: q, slotScopeIds: J } = T;
      J && (N = N ? N.concat(J) : J),
        v == null
          ? (s(z, A, F), s(W, A, F), C(T.children, A, W, D, $, G, N, H))
          : V > 0 && V & 64 && q && v.dynamicChildren
          ? (B(v.dynamicChildren, q, A, D, $, G, N),
            (T.key != null || (D && T === D.subTree)) && ei(v, T, !0))
          : K(v, T, A, W, D, $, G, N, H);
    },
    P = (v, T, A, F, D, $, G, N, H) => {
      (T.slotScopeIds = N),
        v == null
          ? T.shapeFlag & 512
            ? D.ctx.activate(T, A, F, G, H)
            : O(T, A, F, D, $, G, H)
          : R(v, T, H);
    },
    O = (v, T, A, F, D, $, G) => {
      const N = (v.component = Io(v, F, D));
      if ((an(v) && (N.ctx.renderer = vt), Ao(N), N.asyncDep)) {
        if ((D && D.registerDep(N, k), !v.el)) {
          const H = (N.subTree = le(be));
          b(null, H, T, A);
        }
        return;
      }
      k(N, v, T, A, D, $, G);
    },
    R = (v, T, A) => {
      const F = (T.component = v.component);
      if (Na(v, T, A))
        if (F.asyncDep && !F.asyncResolved) {
          j(F, T, A);
          return;
        } else (F.next = T), La(F.update), F.update();
      else (T.el = v.el), (F.vnode = T);
    },
    k = (v, T, A, F, D, $, G) => {
      const N = () => {
          if (v.isMounted) {
            let { next: W, bu: V, u: q, parent: J, vnode: Z } = v,
              ne = W,
              te;
            ot(v, !1),
              W ? ((W.el = Z.el), j(v, W, G)) : (W = Z),
              V && Gt(V),
              (te = W.props && W.props.onVnodeBeforeUpdate) && we(te, J, W, Z),
              ot(v, !0);
            const oe = Jn(v),
              Be = v.subTree;
            (v.subTree = oe),
              y(Be, oe, d(Be.el), pn(Be), v, D, $),
              (W.el = oe.el),
              ne === null && Ws(v, oe.el),
              q && pe(q, D),
              (te = W.props && W.props.onVnodeUpdated) &&
                pe(() => we(te, J, W, Z), D);
          } else {
            let W;
            const { el: V, props: q } = T,
              { bm: J, m: Z, parent: ne } = v,
              te = ht(T);
            if (
              (ot(v, !1),
              J && Gt(J),
              !te && (W = q && q.onVnodeBeforeMount) && we(W, ne, T),
              ot(v, !0),
              V && Xn)
            ) {
              const oe = () => {
                (v.subTree = Jn(v)), Xn(V, v.subTree, v, D, null);
              };
              te
                ? T.type.__asyncLoader().then(() => !v.isUnmounted && oe())
                : oe();
            } else {
              const oe = (v.subTree = Jn(v));
              y(null, oe, A, F, v, D, $), (T.el = oe.el);
            }
            if ((Z && pe(Z, D), !te && (W = q && q.onVnodeMounted))) {
              const oe = T;
              pe(() => we(W, ne, oe), D);
            }
            (T.shapeFlag & 256 ||
              (ne && ht(ne.vnode) && ne.vnode.shapeFlag & 256)) &&
              v.a &&
              pe(v.a, D),
              (v.isMounted = !0),
              (T = A = F = null);
          }
        },
        H = (v.effect = new Fs(N, () => jn(z), v.scope)),
        z = (v.update = () => H.run());
      (z.id = v.uid), ot(v, !0), z();
    },
    j = (v, T, A) => {
      T.component = v;
      const F = v.vnode.props;
      (v.vnode = T),
        (v.next = null),
        mo(v, T.props, F, A),
        bo(v, T.children, A),
        At(),
        yi(),
        Bt();
    },
    K = (v, T, A, F, D, $, G, N, H = !1) => {
      const z = v && v.children,
        W = v ? v.shapeFlag : 0,
        V = T.children,
        { patchFlag: q, shapeFlag: J } = T;
      if (q > 0) {
        if (q & 128) {
          he(z, V, A, F, D, $, G, N, H);
          return;
        } else if (q & 256) {
          Y(z, V, A, F, D, $, G, N, H);
          return;
        }
      }
      J & 8
        ? (W & 16 && je(z, D, $), V !== z && f(A, V))
        : W & 16
        ? J & 16
          ? he(z, V, A, F, D, $, G, N, H)
          : je(z, D, $, !0)
        : (W & 8 && f(A, ""), J & 16 && C(V, A, F, D, $, G, N, H));
    },
    Y = (v, T, A, F, D, $, G, N, H) => {
      (v = v || wt), (T = T || wt);
      const z = v.length,
        W = T.length,
        V = Math.min(z, W);
      let q;
      for (q = 0; q < V; q++) {
        const J = (T[q] = H ? et(T[q]) : Me(T[q]));
        y(v[q], J, A, null, D, $, G, N, H);
      }
      z > W ? je(v, D, $, !0, !1, V) : C(T, A, F, D, $, G, N, H, V);
    },
    he = (v, T, A, F, D, $, G, N, H) => {
      let z = 0;
      const W = T.length;
      let V = v.length - 1,
        q = W - 1;
      for (; z <= V && z <= q; ) {
        const J = v[z],
          Z = (T[z] = H ? et(T[z]) : Me(T[z]));
        if (Fe(J, Z)) y(J, Z, A, null, D, $, G, N, H);
        else break;
        z++;
      }
      for (; z <= V && z <= q; ) {
        const J = v[V],
          Z = (T[q] = H ? et(T[q]) : Me(T[q]));
        if (Fe(J, Z)) y(J, Z, A, null, D, $, G, N, H);
        else break;
        V--, q--;
      }
      if (z > V) {
        if (z <= q) {
          const J = q + 1,
            Z = J < W ? T[J].el : F;
          for (; z <= q; )
            y(null, (T[z] = H ? et(T[z]) : Me(T[z])), A, Z, D, $, G, N, H), z++;
        }
      } else if (z > q) for (; z <= V; ) _e(v[z], D, $, !0), z++;
      else {
        const J = z,
          Z = z,
          ne = new Map();
        for (z = Z; z <= q; z++) {
          const Se = (T[z] = H ? et(T[z]) : Me(T[z]));
          Se.key != null && ne.set(Se.key, z);
        }
        let te,
          oe = 0;
        const Be = q - Z + 1;
        let bt = !1,
          oi = 0;
        const Ft = new Array(Be);
        for (z = 0; z < Be; z++) Ft[z] = 0;
        for (z = J; z <= V; z++) {
          const Se = v[z];
          if (oe >= Be) {
            _e(Se, D, $, !0);
            continue;
          }
          let Ne;
          if (Se.key != null) Ne = ne.get(Se.key);
          else
            for (te = Z; te <= q; te++)
              if (Ft[te - Z] === 0 && Fe(Se, T[te])) {
                Ne = te;
                break;
              }
          Ne === void 0
            ? _e(Se, D, $, !0)
            : ((Ft[Ne - Z] = z + 1),
              Ne >= oi ? (oi = Ne) : (bt = !0),
              y(Se, T[Ne], A, null, D, $, G, N, H),
              oe++);
        }
        const ci = bt ? xo(Ft) : wt;
        for (te = ci.length - 1, z = Be - 1; z >= 0; z--) {
          const Se = Z + z,
            Ne = T[Se],
            fi = Se + 1 < W ? T[Se + 1].el : F;
          Ft[z] === 0
            ? y(null, Ne, A, fi, D, $, G, N, H)
            : bt && (te < 0 || z !== ci[te] ? xe(Ne, A, fi, 2) : te--);
        }
      }
    },
    xe = (v, T, A, F, D = null) => {
      const { el: $, type: G, transition: N, children: H, shapeFlag: z } = v;
      if (z & 6) {
        xe(v.component.subTree, T, A, F);
        return;
      }
      if (z & 128) {
        v.suspense.move(T, A, F);
        return;
      }
      if (z & 64) {
        G.move(v, T, A, vt);
        return;
      }
      if (G === ve) {
        s($, T, A);
        for (let V = 0; V < H.length; V++) xe(H[V], T, A, F);
        s(v.anchor, T, A);
        return;
      }
      if (G === Ut) {
        p(v, T, A);
        return;
      }
      if (F !== 2 && z & 1 && N)
        if (F === 0) N.beforeEnter($), s($, T, A), pe(() => N.enter($), D);
        else {
          const { leave: V, delayLeave: q, afterLeave: J } = N,
            Z = () => s($, T, A),
            ne = () => {
              V($, () => {
                Z(), J && J();
              });
            };
          q ? q($, Z, ne) : ne();
        }
      else s($, T, A);
    },
    _e = (v, T, A, F = !1, D = !1) => {
      const {
        type: $,
        props: G,
        ref: N,
        children: H,
        dynamicChildren: z,
        shapeFlag: W,
        patchFlag: V,
        dirs: q,
      } = v;
      if ((N != null && Fn(N, null, A, v, !0), W & 256)) {
        T.ctx.deactivate(v);
        return;
      }
      const J = W & 1 && q,
        Z = !ht(v);
      let ne;
      if ((Z && (ne = G && G.onVnodeBeforeUnmount) && we(ne, T, v), W & 6))
        Ol(v.component, A, F);
      else {
        if (W & 128) {
          v.suspense.unmount(A, F);
          return;
        }
        J && $e(v, null, T, "beforeUnmount"),
          W & 64
            ? v.type.remove(v, T, A, D, vt, F)
            : z && ($ !== ve || (V > 0 && V & 64))
            ? je(z, T, A, !1, !0)
            : (($ === ve && V & 384) || (!D && W & 16)) && je(H, T, A),
          F && dn(v);
      }
      ((Z && (ne = G && G.onVnodeUnmounted)) || J) &&
        pe(() => {
          ne && we(ne, T, v), J && $e(v, null, T, "unmounted");
        }, A);
    },
    dn = (v) => {
      const { type: T, el: A, anchor: F, transition: D } = v;
      if (T === ve) {
        Ml(A, F);
        return;
      }
      if (T === Ut) {
        h(v);
        return;
      }
      const $ = () => {
        i(A), D && !D.persisted && D.afterLeave && D.afterLeave();
      };
      if (v.shapeFlag & 1 && D && !D.persisted) {
        const { leave: G, delayLeave: N } = D,
          H = () => G(A, $);
        N ? N(v.el, $, H) : H();
      } else $();
    },
    Ml = (v, T) => {
      let A;
      for (; v !== T; ) (A = m(v)), i(v), (v = A);
      i(T);
    },
    Ol = (v, T, A) => {
      const { bum: F, scope: D, update: $, subTree: G, um: N } = v;
      F && Gt(F),
        D.stop(),
        $ && (($.active = !1), _e(G, v, T, A)),
        N && pe(N, T),
        pe(() => {
          v.isUnmounted = !0;
        }, T),
        T &&
          T.pendingBranch &&
          !T.isUnmounted &&
          v.asyncDep &&
          !v.asyncResolved &&
          v.suspenseId === T.pendingId &&
          (T.deps--, T.deps === 0 && T.resolve());
    },
    je = (v, T, A, F = !1, D = !1, $ = 0) => {
      for (let G = $; G < v.length; G++) _e(v[G], T, A, F, D);
    },
    pn = (v) =>
      v.shapeFlag & 6
        ? pn(v.component.subTree)
        : v.shapeFlag & 128
        ? v.suspense.next()
        : m(v.anchor || v.el),
    ai = (v, T, A) => {
      v == null
        ? T._vnode && _e(T._vnode, null, null, !0)
        : y(T._vnode || null, v, T, null, null, null, A),
        yi(),
        An(),
        (T._vnode = v);
    },
    vt = {
      p: y,
      um: _e,
      m: xe,
      r: dn,
      mt: O,
      mc: C,
      pc: K,
      pbc: B,
      n: pn,
      o: t,
    };
  let Yn, Xn;
  return (
    e && ([Yn, Xn] = e(vt)), { render: ai, hydrate: Yn, createApp: po(ai, Yn) }
  );
}
function ot({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function ei(t, e, n = !1) {
  const s = t.children,
    i = e.children;
  if (U(s) && U(i))
    for (let r = 0; r < s.length; r++) {
      const l = s[r];
      let o = i[r];
      o.shapeFlag & 1 &&
        !o.dynamicChildren &&
        ((o.patchFlag <= 0 || o.patchFlag === 32) &&
          ((o = i[r] = et(i[r])), (o.el = l.el)),
        n || ei(l, o)),
        o.type === Pt && (o.el = l.el);
    }
}
function xo(t) {
  const e = t.slice(),
    n = [0];
  let s, i, r, l, o;
  const a = t.length;
  for (s = 0; s < a; s++) {
    const c = t[s];
    if (c !== 0) {
      if (((i = n[n.length - 1]), t[i] < c)) {
        (e[s] = i), n.push(s);
        continue;
      }
      for (r = 0, l = n.length - 1; r < l; )
        (o = (r + l) >> 1), t[n[o]] < c ? (r = o + 1) : (l = o);
      c < t[n[r]] && (r > 0 && (e[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, l = n[r - 1]; r-- > 0; ) (n[r] = l), (l = e[l]);
  return n;
}
const So = (t) => t.__isTeleport,
  qt = (t) => t && (t.disabled || t.disabled === ""),
  Ai = (t) => typeof SVGElement < "u" && t instanceof SVGElement,
  xs = (t, e) => {
    const n = t && t.to;
    return re(n) ? (e ? e(n) : null) : n;
  },
  Eo = {
    __isTeleport: !0,
    process(t, e, n, s, i, r, l, o, a, c) {
      const {
          mc: f,
          pc: d,
          pbc: m,
          o: { insert: g, querySelector: E, createText: y, createComment: _ },
        } = c,
        b = qt(e.props);
      let { shapeFlag: u, children: p, dynamicChildren: h } = e;
      if (t == null) {
        const x = (e.el = y("")),
          I = (e.anchor = y(""));
        g(x, n, s), g(I, n, s);
        const L = (e.target = xs(e.props, E)),
          C = (e.targetAnchor = y(""));
        L && (g(C, L), (l = l || Ai(L)));
        const w = (B, M) => {
          u & 16 && f(p, B, M, i, r, l, o, a);
        };
        b ? w(n, I) : L && w(L, C);
      } else {
        e.el = t.el;
        const x = (e.anchor = t.anchor),
          I = (e.target = t.target),
          L = (e.targetAnchor = t.targetAnchor),
          C = qt(t.props),
          w = C ? n : I,
          B = C ? x : L;
        if (
          ((l = l || Ai(I)),
          h
            ? (m(t.dynamicChildren, h, w, i, r, l, o), ei(t, e, !0))
            : a || d(t, e, w, B, i, r, l, o, !1),
          b)
        )
          C || xn(e, n, x, c, 1);
        else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
          const M = (e.target = xs(e.props, E));
          M && xn(e, M, null, c, 0);
        } else C && xn(e, I, L, c, 1);
      }
      Yr(e);
    },
    remove(t, e, n, s, { um: i, o: { remove: r } }, l) {
      const {
        shapeFlag: o,
        children: a,
        anchor: c,
        targetAnchor: f,
        target: d,
        props: m,
      } = t;
      if ((d && r(f), (l || !qt(m)) && (r(c), o & 16)))
        for (let g = 0; g < a.length; g++) {
          const E = a[g];
          i(E, e, n, !0, !!E.dynamicChildren);
        }
    },
    move: xn,
    hydrate: Co,
  };
function xn(t, e, n, { o: { insert: s }, m: i }, r = 2) {
  r === 0 && s(t.targetAnchor, e, n);
  const { el: l, anchor: o, shapeFlag: a, children: c, props: f } = t,
    d = r === 2;
  if ((d && s(l, e, n), (!d || qt(f)) && a & 16))
    for (let m = 0; m < c.length; m++) i(c[m], e, n, 2);
  d && s(o, e, n);
}
function Co(
  t,
  e,
  n,
  s,
  i,
  r,
  { o: { nextSibling: l, parentNode: o, querySelector: a } },
  c
) {
  const f = (e.target = xs(e.props, a));
  if (f) {
    const d = f._lpa || f.firstChild;
    if (e.shapeFlag & 16)
      if (qt(e.props))
        (e.anchor = c(l(t), e, o(t), n, s, i, r)), (e.targetAnchor = d);
      else {
        e.anchor = l(t);
        let m = d;
        for (; m; )
          if (
            ((m = l(m)), m && m.nodeType === 8 && m.data === "teleport anchor")
          ) {
            (e.targetAnchor = m),
              (f._lpa = e.targetAnchor && l(e.targetAnchor));
            break;
          }
        c(d, e, f, n, s, i, r);
      }
    Yr(e);
  }
  return e.anchor && l(e.anchor);
}
const pu = Eo;
function Yr(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid),
        (n = n.nextSibling);
    e.ut();
  }
}
const ve = Symbol.for("v-fgt"),
  Pt = Symbol.for("v-txt"),
  be = Symbol.for("v-cmt"),
  Ut = Symbol.for("v-stc"),
  Kt = [];
let Le = null;
function ti(t = !1) {
  Kt.push((Le = t ? null : []));
}
function Xr() {
  Kt.pop(), (Le = Kt[Kt.length - 1] || null);
}
let Mt = 1;
function Bi(t) {
  Mt += t;
}
function Jr(t) {
  return (
    (t.dynamicChildren = Mt > 0 ? Le || wt : null),
    Xr(),
    Mt > 0 && Le && Le.push(t),
    t
  );
}
function hu(t, e, n, s, i, r) {
  return Jr(el(t, e, n, s, i, r, !0));
}
function Zr(t, e, n, s, i) {
  return Jr(le(t, e, n, s, i, !0));
}
function Ot(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Fe(t, e) {
  return t.type === e.type && t.key === e.key;
}
const qn = "__vInternal",
  Qr = ({ key: t }) => t ?? null,
  Pn = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? re(t) || ue(t) || X(t)
        ? { i: de, r: t, k: e, f: !!n }
        : t
      : null
  );
function el(
  t,
  e = null,
  n = null,
  s = 0,
  i = null,
  r = t === ve ? 0 : 1,
  l = !1,
  o = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Qr(e),
    ref: e && Pn(e),
    scopeId: Vn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: de,
  };
  return (
    o
      ? (ni(a, n), r & 128 && t.normalize(a))
      : n && (a.shapeFlag |= re(n) ? 8 : 16),
    Mt > 0 &&
      !l &&
      Le &&
      (a.patchFlag > 0 || r & 6) &&
      a.patchFlag !== 32 &&
      Le.push(a),
    a
  );
}
const le = _o;
function _o(t, e = null, n = null, s = 0, i = null, r = !1) {
  if (((!t || t === Rr) && (t = be), Ot(t))) {
    const o = Ke(t, e, !0);
    return (
      n && ni(o, n),
      Mt > 0 &&
        !r &&
        Le &&
        (o.shapeFlag & 6 ? (Le[Le.indexOf(t)] = o) : Le.push(o)),
      (o.patchFlag |= -2),
      o
    );
  }
  if ((Fo(t) && (t = t.__vccOpts), e)) {
    e = Po(e);
    let { class: o, style: a } = e;
    o && !re(o) && (e.class = Hn(o)),
      se(a) && (yr(a) && !U(a) && (a = ae({}, a)), (e.style = Rn(a)));
  }
  const l = re(t) ? 1 : Lr(t) ? 128 : So(t) ? 64 : se(t) ? 4 : X(t) ? 2 : 0;
  return el(t, e, n, s, i, l, r, !0);
}
function Po(t) {
  return t ? (yr(t) || qn in t ? ae({}, t) : t) : null;
}
function Ke(t, e, n = !1) {
  const { props: s, ref: i, patchFlag: r, children: l } = t,
    o = e ? Mo(s || {}, e) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: o,
    key: o && Qr(o),
    ref:
      e && e.ref ? (n && i ? (U(i) ? i.concat(Pn(e)) : [i, Pn(e)]) : Pn(e)) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: l,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== ve ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Ke(t.ssContent),
    ssFallback: t.ssFallback && Ke(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
  };
}
function tl(t = " ", e = 0) {
  return le(Pt, null, t, e);
}
function mu(t, e) {
  const n = le(Ut, null, t);
  return (n.staticCount = e), n;
}
function gu(t = "", e = !1) {
  return e ? (ti(), Zr(be, null, t)) : le(be, null, t);
}
function Me(t) {
  return t == null || typeof t == "boolean"
    ? le(be)
    : U(t)
    ? le(ve, null, t.slice())
    : typeof t == "object"
    ? et(t)
    : le(Pt, null, String(t));
}
function et(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Ke(t);
}
function ni(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null) e = null;
  else if (U(e)) n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), ni(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(qn in e)
        ? (e._ctx = de)
        : i === 3 &&
          de &&
          (de.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    X(e)
      ? ((e = { default: e, _ctx: de }), (n = 32))
      : ((e = String(e)), s & 64 ? ((n = 16), (e = [tl(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function Mo(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (const i in s)
      if (i === "class")
        e.class !== s.class && (e.class = Hn([e.class, s.class]));
      else if (i === "style") e.style = Rn([e.style, s.style]);
      else if (rn(i)) {
        const r = e[i],
          l = s[i];
        l &&
          r !== l &&
          !(U(r) && r.includes(l)) &&
          (e[i] = r ? [].concat(r, l) : l);
      } else i !== "" && (e[i] = s[i]);
  }
  return e;
}
function we(t, e, n, s = null) {
  Ie(t, e, 7, [n, s]);
}
const Oo = jr();
let Lo = 0;
function Io(t, e, n) {
  const s = t.type,
    i = (e ? e.appContext : t.appContext) || Oo,
    r = {
      uid: Lo++,
      vnode: t,
      type: s,
      parent: e,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new ar(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Vr(s, i),
      emitsOptions: Or(s, i),
      emit: null,
      emitted: null,
      propsDefaults: ie,
      inheritAttrs: s.inheritAttrs,
      ctx: ie,
      data: ie,
      props: ie,
      attrs: ie,
      slots: ie,
      refs: ie,
      setupState: ie,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = e ? e.root : r),
    (r.emit = Aa.bind(null, r)),
    t.ce && t.ce(r),
    r
  );
}
let ce = null;
const un = () => ce || de;
let si,
  yt,
  Di = "__VUE_INSTANCE_SETTERS__";
(yt = ps()[Di]) || (yt = ps()[Di] = []),
  yt.push((t) => (ce = t)),
  (si = (t) => {
    yt.length > 1 ? yt.forEach((e) => e(t)) : yt[0](t);
  });
const at = (t) => {
    si(t), t.scope.on();
  },
  rt = () => {
    ce && ce.scope.off(), si(null);
  };
function nl(t) {
  return t.vnode.shapeFlag & 4;
}
let Lt = !1;
function Ao(t, e = !1) {
  Lt = e;
  const { props: n, children: s } = t.vnode,
    i = nl(t);
  ho(t, n, i, e), vo(t, s);
  const r = i ? Bo(t, e) : void 0;
  return (Lt = !1), r;
}
function Bo(t, e) {
  const n = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = wr(new Proxy(t.ctx, io)));
  const { setup: s } = n;
  if (s) {
    const i = (t.setupContext = s.length > 1 ? il(t) : null);
    at(t), At();
    const r = it(s, t, 0, [t.props, i]);
    if ((Bt(), rt(), As(r))) {
      if ((r.then(rt, rt), e))
        return r
          .then((l) => {
            Ss(t, l, e);
          })
          .catch((l) => {
            Dt(l, t, 0);
          });
      t.asyncDep = r;
    } else Ss(t, r, e);
  } else sl(t, e);
}
function Ss(t, e, n) {
  X(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : se(e) && (t.setupState = xr(e)),
    sl(t, n);
}
let Fi;
function sl(t, e, n) {
  const s = t.type;
  if (!t.render) {
    if (!e && Fi && !s.render) {
      const i = s.template || Js(t).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: l } = t.appContext.config,
          { delimiters: o, compilerOptions: a } = s,
          c = ae(ae({ isCustomElement: r, delimiters: o }, l), a);
        s.render = Fi(i, c);
      }
    }
    t.render = s.render || ze;
  }
  at(t), At(), lo(t), Bt(), rt();
}
function Do(t) {
  return (
    t.attrsProxy ||
    (t.attrsProxy = new Proxy(t.attrs, {
      get(e, n) {
        return Te(t, "get", "$attrs"), e[n];
      },
    }))
  );
}
function il(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return Do(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function Un(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(xr(wr(t.exposed)), {
        get(e, n) {
          if (n in e) return e[n];
          if (n in Wt) return Wt[n](t);
        },
        has(e, n) {
          return n in e || n in Wt;
        },
      }))
    );
}
function Es(t, e = !0) {
  return X(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function Fo(t) {
  return X(t) && "__vccOpts" in t;
}
const rl = (t, e) => Pa(t, e, Lt);
function Oe(t, e, n) {
  const s = arguments.length;
  return s === 2
    ? se(e) && !U(e)
      ? Ot(e)
        ? le(t, null, [e])
        : le(t, e)
      : le(t, null, e)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Ot(n) && (n = [n]),
      le(t, e, n));
}
const zo = Symbol.for("v-scx"),
  No = () => _n(zo),
  $o = "3.3.4",
  Ro = "http://www.w3.org/2000/svg",
  ut = typeof document < "u" ? document : null,
  zi = ut && ut.createElement("template"),
  Ho = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, s) => {
      const i = e
        ? ut.createElementNS(Ro, t)
        : ut.createElement(t, n ? { is: n } : void 0);
      return (
        t === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      );
    },
    createText: (t) => ut.createTextNode(t),
    createComment: (t) => ut.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => ut.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, n, s, i, r) {
      const l = n ? n.previousSibling : e.lastChild;
      if (i && (i === r || i.nextSibling))
        for (
          ;
          e.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));

        );
      else {
        zi.innerHTML = s ? `<svg>${t}</svg>` : t;
        const o = zi.content;
        if (s) {
          const a = o.firstChild;
          for (; a.firstChild; ) o.appendChild(a.firstChild);
          o.removeChild(a);
        }
        e.insertBefore(o, n);
      }
      return [
        l ? l.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild,
      ];
    },
  };
function ko(t, e, n) {
  const s = t._vtc;
  s && (e = (e ? [e, ...s] : [...s]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
      ? t.setAttribute("class", e)
      : (t.className = e);
}
function jo(t, e, n) {
  const s = t.style,
    i = re(n);
  if (n && !i) {
    if (e && !re(e)) for (const r in e) n[r] == null && Cs(s, r, "");
    for (const r in n) Cs(s, r, n[r]);
  } else {
    const r = s.display;
    i ? e !== n && (s.cssText = n) : e && t.removeAttribute("style"),
      "_vod" in t && (s.display = r);
  }
}
const Ni = /\s*!important$/;
function Cs(t, e, n) {
  if (U(n)) n.forEach((s) => Cs(t, e, s));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const s = Go(t, e);
    Ni.test(n)
      ? t.setProperty(gt(s), n.replace(Ni, ""), "important")
      : (t[s] = n);
  }
}
const $i = ["Webkit", "Moz", "ms"],
  ss = {};
function Go(t, e) {
  const n = ss[e];
  if (n) return n;
  let s = ke(e);
  if (s !== "filter" && s in t) return (ss[e] = s);
  s = $n(s);
  for (let i = 0; i < $i.length; i++) {
    const r = $i[i] + s;
    if (r in t) return (ss[e] = r);
  }
  return e;
}
const Ri = "http://www.w3.org/1999/xlink";
function Vo(t, e, n, s, i) {
  if (s && e.startsWith("xlink:"))
    n == null
      ? t.removeAttributeNS(Ri, e.slice(6, e.length))
      : t.setAttributeNS(Ri, e, n);
  else {
    const r = Gl(e);
    n == null || (r && !rr(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, r ? "" : n);
  }
}
function Wo(t, e, n, s, i, r, l) {
  if (e === "innerHTML" || e === "textContent") {
    s && l(s, i, r), (t[e] = n ?? "");
    return;
  }
  const o = t.tagName;
  if (e === "value" && o !== "PROGRESS" && !o.includes("-")) {
    t._value = n;
    const c = o === "OPTION" ? t.getAttribute("value") : t.value,
      f = n ?? "";
    c !== f && (t.value = f), n == null && t.removeAttribute(e);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean"
      ? (n = rr(n))
      : n == null && c === "string"
      ? ((n = ""), (a = !0))
      : c === "number" && ((n = 0), (a = !0));
  }
  try {
    t[e] = n;
  } catch {}
  a && t.removeAttribute(e);
}
function qo(t, e, n, s) {
  t.addEventListener(e, n, s);
}
function Uo(t, e, n, s) {
  t.removeEventListener(e, n, s);
}
function Ko(t, e, n, s, i = null) {
  const r = t._vei || (t._vei = {}),
    l = r[e];
  if (s && l) l.value = s;
  else {
    const [o, a] = Yo(e);
    if (s) {
      const c = (r[e] = Zo(s, i));
      qo(t, o, c, a);
    } else l && (Uo(t, o, l, a), (r[e] = void 0));
  }
}
const Hi = /(?:Once|Passive|Capture)$/;
function Yo(t) {
  let e;
  if (Hi.test(t)) {
    e = {};
    let s;
    for (; (s = t.match(Hi)); )
      (t = t.slice(0, t.length - s[0].length)), (e[s[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : gt(t.slice(2)), e];
}
let is = 0;
const Xo = Promise.resolve(),
  Jo = () => is || (Xo.then(() => (is = 0)), (is = Date.now()));
function Zo(t, e) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Ie(Qo(s, n.value), e, 5, [s]);
  };
  return (n.value = t), (n.attached = Jo()), n;
}
function Qo(t, e) {
  if (U(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return e;
}
const ki = /^on[a-z]/,
  ec = (t, e, n, s, i = !1, r, l, o, a) => {
    e === "class"
      ? ko(t, s, i)
      : e === "style"
      ? jo(t, n, s)
      : rn(e)
      ? Os(e) || Ko(t, e, n, s, l)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : tc(t, e, s, i)
        )
      ? Wo(t, e, s, r, l, o, a)
      : (e === "true-value"
          ? (t._trueValue = s)
          : e === "false-value" && (t._falseValue = s),
        Vo(t, e, s, i));
  };
function tc(t, e, n, s) {
  return s
    ? !!(
        e === "innerHTML" ||
        e === "textContent" ||
        (e in t && ki.test(e) && X(n))
      )
    : e === "spellcheck" ||
      e === "draggable" ||
      e === "translate" ||
      e === "form" ||
      (e === "list" && t.tagName === "INPUT") ||
      (e === "type" && t.tagName === "TEXTAREA") ||
      (ki.test(e) && re(n))
    ? !1
    : e in t;
}
const Ze = "transition",
  zt = "animation",
  ll = (t, { slots: e }) => Oe(qa, ol(t), e);
ll.displayName = "Transition";
const al = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  nc = (ll.props = ae({}, Dr, al)),
  ct = (t, e = []) => {
    U(t) ? t.forEach((n) => n(...e)) : t && t(...e);
  },
  ji = (t) => (t ? (U(t) ? t.some((e) => e.length > 1) : t.length > 1) : !1);
function ol(t) {
  const e = {};
  for (const S in t) S in al || (e[S] = t[S]);
  if (t.css === !1) return e;
  const {
      name: n = "v",
      type: s,
      duration: i,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: l = `${n}-enter-active`,
      enterToClass: o = `${n}-enter-to`,
      appearFromClass: a = r,
      appearActiveClass: c = l,
      appearToClass: f = o,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: m = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`,
    } = t,
    E = sc(i),
    y = E && E[0],
    _ = E && E[1],
    {
      onBeforeEnter: b,
      onEnter: u,
      onEnterCancelled: p,
      onLeave: h,
      onLeaveCancelled: x,
      onBeforeAppear: I = b,
      onAppear: L = u,
      onAppearCancelled: C = p,
    } = e,
    w = (S, P, O) => {
      Qe(S, P ? f : o), Qe(S, P ? c : l), O && O();
    },
    B = (S, P) => {
      (S._isLeaving = !1), Qe(S, d), Qe(S, g), Qe(S, m), P && P();
    },
    M = (S) => (P, O) => {
      const R = S ? L : u,
        k = () => w(P, S, O);
      ct(R, [P, k]),
        Gi(() => {
          Qe(P, S ? a : r), Ge(P, S ? f : o), ji(R) || Vi(P, s, y, k);
        });
    };
  return ae(e, {
    onBeforeEnter(S) {
      ct(b, [S]), Ge(S, r), Ge(S, l);
    },
    onBeforeAppear(S) {
      ct(I, [S]), Ge(S, a), Ge(S, c);
    },
    onEnter: M(!1),
    onAppear: M(!0),
    onLeave(S, P) {
      S._isLeaving = !0;
      const O = () => B(S, P);
      Ge(S, d),
        fl(),
        Ge(S, m),
        Gi(() => {
          S._isLeaving && (Qe(S, d), Ge(S, g), ji(h) || Vi(S, s, _, O));
        }),
        ct(h, [S, O]);
    },
    onEnterCancelled(S) {
      w(S, !1), ct(p, [S]);
    },
    onAppearCancelled(S) {
      w(S, !0), ct(C, [S]);
    },
    onLeaveCancelled(S) {
      B(S), ct(x, [S]);
    },
  });
}
function sc(t) {
  if (t == null) return null;
  if (se(t)) return [rs(t.enter), rs(t.leave)];
  {
    const e = rs(t);
    return [e, e];
  }
}
function rs(t) {
  return ir(t);
}
function Ge(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)),
    (t._vtc || (t._vtc = new Set())).add(e);
}
function Qe(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.remove(s));
  const { _vtc: n } = t;
  n && (n.delete(e), n.size || (t._vtc = void 0));
}
function Gi(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let ic = 0;
function Vi(t, e, n, s) {
  const i = (t._endId = ++ic),
    r = () => {
      i === t._endId && s();
    };
  if (n) return setTimeout(r, n);
  const { type: l, timeout: o, propCount: a } = cl(t, e);
  if (!l) return s();
  const c = l + "end";
  let f = 0;
  const d = () => {
      t.removeEventListener(c, m), r();
    },
    m = (g) => {
      g.target === t && ++f >= a && d();
    };
  setTimeout(() => {
    f < a && d();
  }, o + 1),
    t.addEventListener(c, m);
}
function cl(t, e) {
  const n = window.getComputedStyle(t),
    s = (E) => (n[E] || "").split(", "),
    i = s(`${Ze}Delay`),
    r = s(`${Ze}Duration`),
    l = Wi(i, r),
    o = s(`${zt}Delay`),
    a = s(`${zt}Duration`),
    c = Wi(o, a);
  let f = null,
    d = 0,
    m = 0;
  e === Ze
    ? l > 0 && ((f = Ze), (d = l), (m = r.length))
    : e === zt
    ? c > 0 && ((f = zt), (d = c), (m = a.length))
    : ((d = Math.max(l, c)),
      (f = d > 0 ? (l > c ? Ze : zt) : null),
      (m = f ? (f === Ze ? r.length : a.length) : 0));
  const g =
    f === Ze && /\b(transform|all)(,|$)/.test(s(`${Ze}Property`).toString());
  return { type: f, timeout: d, propCount: m, hasTransform: g };
}
function Wi(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, s) => qi(n) + qi(t[s])));
}
function qi(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function fl() {
  return document.body.offsetHeight;
}
const ul = new WeakMap(),
  dl = new WeakMap(),
  pl = {
    name: "TransitionGroup",
    props: ae({}, nc, { tag: String, moveClass: String }),
    setup(t, { slots: e }) {
      const n = un(),
        s = Br();
      let i, r;
      return (
        cn(() => {
          if (!i.length) return;
          const l = t.moveClass || `${t.name || "v"}-move`;
          if (!cc(i[0].el, n.vnode.el, l)) return;
          i.forEach(lc), i.forEach(ac);
          const o = i.filter(oc);
          fl(),
            o.forEach((a) => {
              const c = a.el,
                f = c.style;
              Ge(c, l),
                (f.transform = f.webkitTransform = f.transitionDuration = "");
              const d = (c._moveCb = (m) => {
                (m && m.target !== c) ||
                  ((!m || /transform$/.test(m.propertyName)) &&
                    (c.removeEventListener("transitionend", d),
                    (c._moveCb = null),
                    Qe(c, l)));
              });
              c.addEventListener("transitionend", d);
            });
        }),
        () => {
          const l = Q(t),
            o = ol(l);
          let a = l.tag || ve;
          (i = r), (r = e.default ? Ks(e.default()) : []);
          for (let c = 0; c < r.length; c++) {
            const f = r[c];
            f.key != null && _t(f, tn(f, o, s, n));
          }
          if (i)
            for (let c = 0; c < i.length; c++) {
              const f = i[c];
              _t(f, tn(f, o, s, n)), ul.set(f, f.el.getBoundingClientRect());
            }
          return le(a, null, r);
        }
      );
    },
  },
  rc = (t) => delete t.mode;
pl.props;
const vu = pl;
function lc(t) {
  const e = t.el;
  e._moveCb && e._moveCb(), e._enterCb && e._enterCb();
}
function ac(t) {
  dl.set(t, t.el.getBoundingClientRect());
}
function oc(t) {
  const e = ul.get(t),
    n = dl.get(t),
    s = e.left - n.left,
    i = e.top - n.top;
  if (s || i) {
    const r = t.el.style;
    return (
      (r.transform = r.webkitTransform = `translate(${s}px,${i}px)`),
      (r.transitionDuration = "0s"),
      t
    );
  }
}
function cc(t, e, n) {
  const s = t.cloneNode();
  t._vtc &&
    t._vtc.forEach((l) => {
      l.split(/\s+/).forEach((o) => o && s.classList.remove(o));
    }),
    n.split(/\s+/).forEach((l) => l && s.classList.add(l)),
    (s.style.display = "none");
  const i = e.nodeType === 1 ? e : e.parentNode;
  i.appendChild(s);
  const { hasTransform: r } = cl(s);
  return i.removeChild(s), r;
}
const fc = ["ctrl", "shift", "alt", "meta"],
  uc = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => "button" in t && t.button !== 0,
    middle: (t) => "button" in t && t.button !== 1,
    right: (t) => "button" in t && t.button !== 2,
    exact: (t, e) => fc.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  bu =
    (t, e) =>
    (n, ...s) => {
      for (let i = 0; i < e.length; i++) {
        const r = uc[e[i]];
        if (r && r(n, e)) return;
      }
      return t(n, ...s);
    },
  dc = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  yu = (t, e) => (n) => {
    if (!("key" in n)) return;
    const s = gt(n.key);
    if (e.some((i) => i === s || dc[i] === s)) return t(n);
  },
  wu = {
    beforeMount(t, { value: e }, { transition: n }) {
      (t._vod = t.style.display === "none" ? "" : t.style.display),
        n && e ? n.beforeEnter(t) : Nt(t, e);
    },
    mounted(t, { value: e }, { transition: n }) {
      n && e && n.enter(t);
    },
    updated(t, { value: e, oldValue: n }, { transition: s }) {
      !e != !n &&
        (s
          ? e
            ? (s.beforeEnter(t), Nt(t, !0), s.enter(t))
            : s.leave(t, () => {
                Nt(t, !1);
              })
          : Nt(t, e));
    },
    beforeUnmount(t, { value: e }) {
      Nt(t, e);
    },
  };
function Nt(t, e) {
  t.style.display = e ? t._vod : "none";
}
const hl = ae({ patchProp: ec }, Ho);
let Yt,
  Ui = !1;
function ml() {
  return Yt || (Yt = wo(hl));
}
function pc() {
  return (Yt = Ui ? Yt : To(hl)), (Ui = !0), Yt;
}
const Tu = (...t) => {
    ml().render(...t);
  },
  xu = (...t) => {
    const e = ml().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (s) => {
        const i = gl(s);
        if (!i) return;
        const r = e._component;
        !X(r) && !r.render && !r.template && (r.template = i.innerHTML),
          (i.innerHTML = "");
        const l = n(i, !1, i instanceof SVGElement);
        return (
          i instanceof Element &&
            (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
          l
        );
      }),
      e
    );
  },
  Su = (...t) => {
    const e = pc().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (s) => {
        const i = gl(s);
        if (i) return n(i, !0, i instanceof SVGElement);
      }),
      e
    );
  };
function gl(t) {
  return re(t) ? document.querySelector(t) : t;
}
function Ki(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "constructor" in t &&
    t.constructor === Object
  );
}
function ii(t, e) {
  t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((n) => {
      typeof t[n] > "u"
        ? (t[n] = e[n])
        : Ki(e[n]) &&
          Ki(t[n]) &&
          Object.keys(e[n]).length > 0 &&
          ii(t[n], e[n]);
    });
}
const vl = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Ae() {
  const t = typeof document < "u" ? document : {};
  return ii(t, vl), t;
}
const hc = {
  document: vl,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  },
};
function ye() {
  const t = typeof window < "u" ? window : {};
  return ii(t, hc), t;
}
function mc(t) {
  const e = t;
  Object.keys(e).forEach((n) => {
    try {
      e[n] = null;
    } catch {}
    try {
      delete e[n];
    } catch {}
  });
}
function It(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function qe() {
  return Date.now();
}
function gc(t) {
  const e = ye();
  let n;
  return (
    e.getComputedStyle && (n = e.getComputedStyle(t, null)),
    !n && t.currentStyle && (n = t.currentStyle),
    n || (n = t.style),
    n
  );
}
function vc(t, e) {
  e === void 0 && (e = "x");
  const n = ye();
  let s, i, r;
  const l = gc(t);
  return (
    n.WebKitCSSMatrix
      ? ((i = l.transform || l.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((o) => o.replace(",", "."))
            .join(", ")),
        (r = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((r =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = r.toString().split(","))),
    e === "x" &&
      (n.WebKitCSSMatrix
        ? (i = r.m41)
        : s.length === 16
        ? (i = parseFloat(s[12]))
        : (i = parseFloat(s[4]))),
    e === "y" &&
      (n.WebKitCSSMatrix
        ? (i = r.m42)
        : s.length === 16
        ? (i = parseFloat(s[13]))
        : (i = parseFloat(s[5]))),
    i || 0
  );
}
function Sn(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function bc(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function Ce() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (s != null && !bc(s)) {
      const i = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0);
      for (let r = 0, l = i.length; r < l; r += 1) {
        const o = i[r],
          a = Object.getOwnPropertyDescriptor(s, o);
        a !== void 0 &&
          a.enumerable &&
          (Sn(t[o]) && Sn(s[o])
            ? s[o].__swiper__
              ? (t[o] = s[o])
              : Ce(t[o], s[o])
            : !Sn(t[o]) && Sn(s[o])
            ? ((t[o] = {}), s[o].__swiper__ ? (t[o] = s[o]) : Ce(t[o], s[o]))
            : (t[o] = s[o]));
      }
    }
  }
  return t;
}
function En(t, e, n) {
  t.style.setProperty(e, n);
}
function bl(t) {
  let { swiper: e, targetPosition: n, side: s } = t;
  const i = ye(),
    r = -e.translate;
  let l = null,
    o;
  const a = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(e.cssModeFrameID);
  const c = n > r ? "next" : "prev",
    f = (m, g) => (c === "next" && m >= g) || (c === "prev" && m <= g),
    d = () => {
      (o = new Date().getTime()), l === null && (l = o);
      const m = Math.max(Math.min((o - l) / a, 1), 0),
        g = 0.5 - Math.cos(m * Math.PI) / 2;
      let E = r + g * (n - r);
      if ((f(E, n) && (E = n), e.wrapperEl.scrollTo({ [s]: E }), f(E, n))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [s]: E });
          }),
          i.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function ri(t) {
  return (
    t.querySelector(".swiper-slide-transform") ||
    (t.shadowRoot && t.shadowRoot.querySelector(".swiper-slide-transform")) ||
    t
  );
}
function He(t, e) {
  return e === void 0 && (e = ""), [...t.children].filter((n) => n.matches(e));
}
function Kn(t, e) {
  e === void 0 && (e = []);
  const n = document.createElement(t);
  return n.classList.add(...(Array.isArray(e) ? e : [e])), n;
}
function yc(t) {
  const e = ye(),
    n = Ae(),
    s = t.getBoundingClientRect(),
    i = n.body,
    r = t.clientTop || i.clientTop || 0,
    l = t.clientLeft || i.clientLeft || 0,
    o = t === e ? e.scrollY : t.scrollTop,
    a = t === e ? e.scrollX : t.scrollLeft;
  return { top: s.top + o - r, left: s.left + a - l };
}
function wc(t, e) {
  const n = [];
  for (; t.previousElementSibling; ) {
    const s = t.previousElementSibling;
    e ? s.matches(e) && n.push(s) : n.push(s), (t = s);
  }
  return n;
}
function Tc(t, e) {
  const n = [];
  for (; t.nextElementSibling; ) {
    const s = t.nextElementSibling;
    e ? s.matches(e) && n.push(s) : n.push(s), (t = s);
  }
  return n;
}
function tt(t, e) {
  return ye().getComputedStyle(t, null).getPropertyValue(e);
}
function zn(t) {
  let e = t,
    n;
  if (e) {
    for (n = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (n += 1);
    return n;
  }
}
function yl(t, e) {
  const n = [];
  let s = t.parentElement;
  for (; s; ) e ? s.matches(e) && n.push(s) : n.push(s), (s = s.parentElement);
  return n;
}
function _s(t, e, n) {
  const s = ye();
  return n
    ? t[e === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
        )
    : t.offsetWidth;
}
let ls;
function xc() {
  const t = ye(),
    e = Ae();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in t ||
      (t.DocumentTouch && e instanceof t.DocumentTouch)
    ),
  };
}
function wl() {
  return ls || (ls = xc()), ls;
}
let as;
function Sc(t) {
  let { userAgent: e } = t === void 0 ? {} : t;
  const n = wl(),
    s = ye(),
    i = s.navigator.platform,
    r = e || s.navigator.userAgent,
    l = { ios: !1, android: !1 },
    o = s.screen.width,
    a = s.screen.height,
    c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let f = r.match(/(iPad).*OS\s([\d_]+)/);
  const d = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    m = !f && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    g = i === "Win32";
  let E = i === "MacIntel";
  const y = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !f &&
      E &&
      n.touch &&
      y.indexOf(`${o}x${a}`) >= 0 &&
      ((f = r.match(/(Version)\/([\d.]+)/)),
      f || (f = [0, 1, "13_0_0"]),
      (E = !1)),
    c && !g && ((l.os = "android"), (l.android = !0)),
    (f || m || d) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function Ec(t) {
  return t === void 0 && (t = {}), as || (as = Sc(t)), as;
}
let os;
function Cc() {
  const t = ye();
  let e = !1;
  function n() {
    const s = t.navigator.userAgent.toLowerCase();
    return (
      s.indexOf("safari") >= 0 &&
      s.indexOf("chrome") < 0 &&
      s.indexOf("android") < 0
    );
  }
  if (n()) {
    const s = String(t.navigator.userAgent);
    if (s.includes("Version/")) {
      const [i, r] = s
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((l) => Number(l));
      e = i < 16 || (i === 16 && r < 2);
    }
  }
  return {
    isSafari: e || n(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      t.navigator.userAgent
    ),
  };
}
function _c() {
  return os || (os = Cc()), os;
}
function Pc(t) {
  let { swiper: e, on: n, emit: s } = t;
  const i = ye();
  let r = null,
    l = null;
  const o = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((r = new ResizeObserver((d) => {
          l = i.requestAnimationFrame(() => {
            const { width: m, height: g } = e;
            let E = m,
              y = g;
            d.forEach((_) => {
              let { contentBoxSize: b, contentRect: u, target: p } = _;
              (p && p !== e.el) ||
                ((E = u ? u.width : (b[0] || b).inlineSize),
                (y = u ? u.height : (b[0] || b).blockSize));
            }),
              (E !== m || y !== g) && o();
          });
        })),
        r.observe(e.el));
    },
    c = () => {
      l && i.cancelAnimationFrame(l),
        r && r.unobserve && e.el && (r.unobserve(e.el), (r = null));
    },
    f = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange");
    };
  n("init", () => {
    if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", f);
  }),
    n("destroy", () => {
      c(),
        i.removeEventListener("resize", o),
        i.removeEventListener("orientationchange", f);
    });
}
function Mc(t) {
  let { swiper: e, extendParams: n, on: s, emit: i } = t;
  const r = [],
    l = ye(),
    o = function (f, d) {
      d === void 0 && (d = {});
      const m = l.MutationObserver || l.WebkitMutationObserver,
        g = new m((E) => {
          if (e.__preventObserver__) return;
          if (E.length === 1) {
            i("observerUpdate", E[0]);
            return;
          }
          const y = function () {
            i("observerUpdate", E[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(y)
            : l.setTimeout(y, 0);
        });
      g.observe(f, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: typeof d.childList > "u" ? !0 : d.childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        r.push(g);
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const f = yl(e.el);
          for (let d = 0; d < f.length; d += 1) o(f[d]);
        }
        o(e.el, { childList: e.params.observeSlideChildren }),
          o(e.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      r.forEach((f) => {
        f.disconnect();
      }),
        r.splice(0, r.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", a),
    s("destroy", c);
}
var Oc = {
  on(t, e, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const i = n ? "unshift" : "push";
    return (
      t.split(" ").forEach((r) => {
        s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][i](e);
      }),
      s
    );
  },
  once(t, e, n) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    function i() {
      s.off(t, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
        l[o] = arguments[o];
      e.apply(s, l);
    }
    return (i.__emitterProxy = e), s.on(t, i, n);
  },
  onAny(t, e) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
    const s = e ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(t) < 0 && n.eventsAnyListeners[s](t), n;
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const n = e.eventsAnyListeners.indexOf(t);
    return n >= 0 && e.eventsAnyListeners.splice(n, 1), e;
  },
  off(t, e) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        t.split(" ").forEach((s) => {
          typeof e > "u"
            ? (n.eventsListeners[s] = [])
            : n.eventsListeners[s] &&
              n.eventsListeners[s].forEach((i, r) => {
                (i === e || (i.__emitterProxy && i.__emitterProxy === e)) &&
                  n.eventsListeners[s].splice(r, 1);
              });
        }),
      n
    );
  },
  emit() {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let e, n, s;
    for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++)
      r[l] = arguments[l];
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((e = r[0]), (n = r.slice(1, r.length)), (s = t))
        : ((e = r[0].events), (n = r[0].data), (s = r[0].context || t)),
      n.unshift(s),
      (Array.isArray(e) ? e : e.split(" ")).forEach((a) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((c) => {
            c.apply(s, [a, ...n]);
          }),
          t.eventsListeners &&
            t.eventsListeners[a] &&
            t.eventsListeners[a].forEach((c) => {
              c.apply(s, n);
            });
      }),
      t
    );
  },
};
function Lc() {
  const t = this;
  let e, n;
  const s = t.el;
  typeof t.params.width < "u" && t.params.width !== null
    ? (e = t.params.width)
    : (e = s.clientWidth),
    typeof t.params.height < "u" && t.params.height !== null
      ? (n = t.params.height)
      : (n = s.clientHeight),
    !((e === 0 && t.isHorizontal()) || (n === 0 && t.isVertical())) &&
      ((e =
        e -
        parseInt(tt(s, "padding-left") || 0, 10) -
        parseInt(tt(s, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(tt(s, "padding-top") || 0, 10) -
        parseInt(tt(s, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(t, {
        width: e,
        height: n,
        size: t.isHorizontal() ? e : n,
      }));
}
function Ic() {
  const t = this;
  function e(M) {
    return t.isHorizontal()
      ? M
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[M];
  }
  function n(M, S) {
    return parseFloat(M.getPropertyValue(e(S)) || 0);
  }
  const s = t.params,
    { wrapperEl: i, slidesEl: r, size: l, rtlTranslate: o, wrongRTL: a } = t,
    c = t.virtual && s.virtual.enabled,
    f = c ? t.virtual.slides.length : t.slides.length,
    d = He(r, `.${t.params.slideClass}, swiper-slide`),
    m = c ? t.virtual.slides.length : d.length;
  let g = [];
  const E = [],
    y = [];
  let _ = s.slidesOffsetBefore;
  typeof _ == "function" && (_ = s.slidesOffsetBefore.call(t));
  let b = s.slidesOffsetAfter;
  typeof b == "function" && (b = s.slidesOffsetAfter.call(t));
  const u = t.snapGrid.length,
    p = t.slidesGrid.length;
  let h = s.spaceBetween,
    x = -_,
    I = 0,
    L = 0;
  if (typeof l > "u") return;
  typeof h == "string" && h.indexOf("%") >= 0
    ? (h = (parseFloat(h.replace("%", "")) / 100) * l)
    : typeof h == "string" && (h = parseFloat(h)),
    (t.virtualSize = -h),
    d.forEach((M) => {
      o ? (M.style.marginLeft = "") : (M.style.marginRight = ""),
        (M.style.marginBottom = ""),
        (M.style.marginTop = "");
    }),
    s.centeredSlides &&
      s.cssMode &&
      (En(i, "--swiper-centered-offset-before", ""),
      En(i, "--swiper-centered-offset-after", ""));
  const C = s.grid && s.grid.rows > 1 && t.grid;
  C && t.grid.initSlides(m);
  let w;
  const B =
    s.slidesPerView === "auto" &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter(
      (M) => typeof s.breakpoints[M].slidesPerView < "u"
    ).length > 0;
  for (let M = 0; M < m; M += 1) {
    w = 0;
    let S;
    if (
      (d[M] && (S = d[M]),
      C && t.grid.updateSlide(M, S, m, e),
      !(d[M] && tt(S, "display") === "none"))
    ) {
      if (s.slidesPerView === "auto") {
        B && (d[M].style[e("width")] = "");
        const P = getComputedStyle(S),
          O = S.style.transform,
          R = S.style.webkitTransform;
        if (
          (O && (S.style.transform = "none"),
          R && (S.style.webkitTransform = "none"),
          s.roundLengths)
        )
          w = t.isHorizontal() ? _s(S, "width", !0) : _s(S, "height", !0);
        else {
          const k = n(P, "width"),
            j = n(P, "padding-left"),
            K = n(P, "padding-right"),
            Y = n(P, "margin-left"),
            he = n(P, "margin-right"),
            xe = P.getPropertyValue("box-sizing");
          if (xe && xe === "border-box") w = k + Y + he;
          else {
            const { clientWidth: _e, offsetWidth: dn } = S;
            w = k + j + K + Y + he + (dn - _e);
          }
        }
        O && (S.style.transform = O),
          R && (S.style.webkitTransform = R),
          s.roundLengths && (w = Math.floor(w));
      } else
        (w = (l - (s.slidesPerView - 1) * h) / s.slidesPerView),
          s.roundLengths && (w = Math.floor(w)),
          d[M] && (d[M].style[e("width")] = `${w}px`);
      d[M] && (d[M].swiperSlideSize = w),
        y.push(w),
        s.centeredSlides
          ? ((x = x + w / 2 + I / 2 + h),
            I === 0 && M !== 0 && (x = x - l / 2 - h),
            M === 0 && (x = x - l / 2 - h),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            s.roundLengths && (x = Math.floor(x)),
            L % s.slidesPerGroup === 0 && g.push(x),
            E.push(x))
          : (s.roundLengths && (x = Math.floor(x)),
            (L - Math.min(t.params.slidesPerGroupSkip, L)) %
              t.params.slidesPerGroup ===
              0 && g.push(x),
            E.push(x),
            (x = x + w + h)),
        (t.virtualSize += w + h),
        (I = w),
        (L += 1);
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, l) + b),
    o &&
      a &&
      (s.effect === "slide" || s.effect === "coverflow") &&
      (i.style.width = `${t.virtualSize + h}px`),
    s.setWrapperSize && (i.style[e("width")] = `${t.virtualSize + h}px`),
    C && t.grid.updateWrapperSize(w, g, e),
    !s.centeredSlides)
  ) {
    const M = [];
    for (let S = 0; S < g.length; S += 1) {
      let P = g[S];
      s.roundLengths && (P = Math.floor(P)),
        g[S] <= t.virtualSize - l && M.push(P);
    }
    (g = M),
      Math.floor(t.virtualSize - l) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(t.virtualSize - l);
  }
  if (c && s.loop) {
    const M = y[0] + h;
    if (s.slidesPerGroup > 1) {
      const S = Math.ceil(
          (t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup
        ),
        P = M * s.slidesPerGroup;
      for (let O = 0; O < S; O += 1) g.push(g[g.length - 1] + P);
    }
    for (let S = 0; S < t.virtual.slidesBefore + t.virtual.slidesAfter; S += 1)
      s.slidesPerGroup === 1 && g.push(g[g.length - 1] + M),
        E.push(E[E.length - 1] + M),
        (t.virtualSize += M);
  }
  if ((g.length === 0 && (g = [0]), h !== 0)) {
    const M = t.isHorizontal() && o ? "marginLeft" : e("marginRight");
    d.filter((S, P) =>
      !s.cssMode || s.loop ? !0 : P !== d.length - 1
    ).forEach((S) => {
      S.style[M] = `${h}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let M = 0;
    y.forEach((P) => {
      M += P + (h || 0);
    }),
      (M -= h);
    const S = M - l;
    g = g.map((P) => (P <= 0 ? -_ : P > S ? S + b : P));
  }
  if (s.centerInsufficientSlides) {
    let M = 0;
    if (
      (y.forEach((S) => {
        M += S + (h || 0);
      }),
      (M -= h),
      M < l)
    ) {
      const S = (l - M) / 2;
      g.forEach((P, O) => {
        g[O] = P - S;
      }),
        E.forEach((P, O) => {
          E[O] = P + S;
        });
    }
  }
  if (
    (Object.assign(t, {
      slides: d,
      snapGrid: g,
      slidesGrid: E,
      slidesSizesGrid: y,
    }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    En(i, "--swiper-centered-offset-before", `${-g[0]}px`),
      En(
        i,
        "--swiper-centered-offset-after",
        `${t.size / 2 - y[y.length - 1] / 2}px`
      );
    const M = -t.snapGrid[0],
      S = -t.slidesGrid[0];
    (t.snapGrid = t.snapGrid.map((P) => P + M)),
      (t.slidesGrid = t.slidesGrid.map((P) => P + S));
  }
  if (
    (m !== f && t.emit("slidesLengthChange"),
    g.length !== u &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit("snapGridLengthChange")),
    E.length !== p && t.emit("slidesGridLengthChange"),
    s.watchSlidesProgress && t.updateSlidesOffset(),
    !c && !s.cssMode && (s.effect === "slide" || s.effect === "fade"))
  ) {
    const M = `${s.containerModifierClass}backface-hidden`,
      S = t.el.classList.contains(M);
    m <= s.maxBackfaceHiddenSlides
      ? S || t.el.classList.add(M)
      : S && t.el.classList.remove(M);
  }
}
function Ac(t) {
  const e = this,
    n = [],
    s = e.virtual && e.params.virtual.enabled;
  let i = 0,
    r;
  typeof t == "number"
    ? e.setTransition(t)
    : t === !0 && e.setTransition(e.params.speed);
  const l = (o) => (s ? e.slides[e.getSlideIndexByData(o)] : e.slides[o]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((o) => {
        n.push(o);
      });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const o = e.activeIndex + r;
        if (o > e.slides.length && !s) break;
        n.push(l(o));
      }
  else n.push(l(e.activeIndex));
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < "u") {
      const o = n[r].offsetHeight;
      i = o > i ? o : i;
    }
  (i || i === 0) && (e.wrapperEl.style.height = `${i}px`);
}
function Bc() {
  const t = this,
    e = t.slides,
    n = t.isElement
      ? t.isHorizontal()
        ? t.wrapperEl.offsetLeft
        : t.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < e.length; s += 1)
    e[s].swiperSlideOffset =
      (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) -
      n -
      t.cssOverflowAdjustment();
}
function Dc(t) {
  t === void 0 && (t = (this && this.translate) || 0);
  const e = this,
    n = e.params,
    { slides: s, rtlTranslate: i, snapGrid: r } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let l = -t;
  i && (l = t),
    s.forEach((a) => {
      a.classList.remove(n.slideVisibleClass);
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  let o = n.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0
    ? (o = (parseFloat(o.replace("%", "")) / 100) * e.size)
    : typeof o == "string" && (o = parseFloat(o));
  for (let a = 0; a < s.length; a += 1) {
    const c = s[a];
    let f = c.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (f -= s[0].swiperSlideOffset);
    const d =
        (l + (n.centeredSlides ? e.minTranslate() : 0) - f) /
        (c.swiperSlideSize + o),
      m =
        (l - r[0] + (n.centeredSlides ? e.minTranslate() : 0) - f) /
        (c.swiperSlideSize + o),
      g = -(l - f),
      E = g + e.slidesSizesGrid[a];
    ((g >= 0 && g < e.size - 1) ||
      (E > 1 && E <= e.size) ||
      (g <= 0 && E >= e.size)) &&
      (e.visibleSlides.push(c),
      e.visibleSlidesIndexes.push(a),
      s[a].classList.add(n.slideVisibleClass)),
      (c.progress = i ? -d : d),
      (c.originalProgress = i ? -m : m);
  }
}
function Fc(t) {
  const e = this;
  if (typeof t > "u") {
    const f = e.rtlTranslate ? -1 : 1;
    t = (e && e.translate && e.translate * f) || 0;
  }
  const n = e.params,
    s = e.maxTranslate() - e.minTranslate();
  let { progress: i, isBeginning: r, isEnd: l, progressLoop: o } = e;
  const a = r,
    c = l;
  if (s === 0) (i = 0), (r = !0), (l = !0);
  else {
    i = (t - e.minTranslate()) / s;
    const f = Math.abs(t - e.minTranslate()) < 1,
      d = Math.abs(t - e.maxTranslate()) < 1;
    (r = f || i <= 0), (l = d || i >= 1), f && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const f = e.getSlideIndexByData(0),
      d = e.getSlideIndexByData(e.slides.length - 1),
      m = e.slidesGrid[f],
      g = e.slidesGrid[d],
      E = e.slidesGrid[e.slidesGrid.length - 1],
      y = Math.abs(t);
    y >= m ? (o = (y - m) / E) : (o = (y + E - g) / E), o > 1 && (o -= 1);
  }
  Object.assign(e, { progress: i, progressLoop: o, isBeginning: r, isEnd: l }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      e.updateSlidesProgress(t),
    r && !a && e.emit("reachBeginning toEdge"),
    l && !c && e.emit("reachEnd toEdge"),
    ((a && !r) || (c && !l)) && e.emit("fromEdge"),
    e.emit("progress", i);
}
function zc() {
  const t = this,
    { slides: e, params: n, slidesEl: s, activeIndex: i } = t,
    r = t.virtual && n.virtual.enabled,
    l = (a) => He(s, `.${n.slideClass}${a}, swiper-slide${a}`)[0];
  e.forEach((a) => {
    a.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let o;
  if (r)
    if (n.loop) {
      let a = i - t.virtual.slidesBefore;
      a < 0 && (a = t.virtual.slides.length + a),
        a >= t.virtual.slides.length && (a -= t.virtual.slides.length),
        (o = l(`[data-swiper-slide-index="${a}"]`));
    } else o = l(`[data-swiper-slide-index="${i}"]`);
  else o = e[i];
  if (o) {
    o.classList.add(n.slideActiveClass);
    let a = Tc(o, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !a && (a = e[0]), a && a.classList.add(n.slideNextClass);
    let c = wc(o, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !c === 0 && (c = e[e.length - 1]),
      c && c.classList.add(n.slidePrevClass);
  }
  t.emitSlidesClasses();
}
const Mn = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const n = () => (t.isElement ? "swiper-slide" : `.${t.params.slideClass}`),
      s = e.closest(n());
    if (s) {
      const i = s.querySelector(`.${t.params.lazyPreloaderClass}`);
      i && i.remove();
    }
  },
  cs = (t, e) => {
    if (!t.slides[e]) return;
    const n = t.slides[e].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Ps = (t) => {
    if (!t || t.destroyed || !t.params) return;
    let e = t.params.lazyPreloadPrevNext;
    const n = t.slides.length;
    if (!n || !e || e < 0) return;
    e = Math.min(e, n);
    const s =
        t.params.slidesPerView === "auto"
          ? t.slidesPerViewDynamic()
          : Math.ceil(t.params.slidesPerView),
      i = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
      const l = i,
        o = [l - e];
      o.push(...Array.from({ length: e }).map((a, c) => l + s + c)),
        t.slides.forEach((a, c) => {
          o.includes(a.column) && cs(t, c);
        });
      return;
    }
    const r = i + s - 1;
    if (t.params.rewind || t.params.loop)
      for (let l = i - e; l <= r + e; l += 1) {
        const o = ((l % n) + n) % n;
        (o < i || o > r) && cs(t, o);
      }
    else
      for (let l = Math.max(i - e, 0); l <= Math.min(r + e, n - 1); l += 1)
        l !== i && (l > r || l < i) && cs(t, l);
  };
function Nc(t) {
  const { slidesGrid: e, params: n } = t,
    s = t.rtlTranslate ? t.translate : -t.translate;
  let i;
  for (let r = 0; r < e.length; r += 1)
    typeof e[r + 1] < "u"
      ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2
        ? (i = r)
        : s >= e[r] && s < e[r + 1] && (i = r + 1)
      : s >= e[r] && (i = r);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function $c(t) {
  const e = this,
    n = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: s, params: i, activeIndex: r, realIndex: l, snapIndex: o } = e;
  let a = t,
    c;
  const f = (m) => {
    let g = m - e.virtual.slidesBefore;
    return (
      g < 0 && (g = e.virtual.slides.length + g),
      g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
      g
    );
  };
  if ((typeof a > "u" && (a = Nc(e)), s.indexOf(n) >= 0)) c = s.indexOf(n);
  else {
    const m = Math.min(i.slidesPerGroupSkip, a);
    c = m + Math.floor((a - m) / i.slidesPerGroup);
  }
  if ((c >= s.length && (c = s.length - 1), a === r)) {
    c !== o && ((e.snapIndex = c), e.emit("snapIndexChange")),
      e.params.loop &&
        e.virtual &&
        e.params.virtual.enabled &&
        (e.realIndex = f(a));
    return;
  }
  let d;
  e.virtual && i.virtual.enabled && i.loop
    ? (d = f(a))
    : e.slides[a]
    ? (d = parseInt(
        e.slides[a].getAttribute("data-swiper-slide-index") || a,
        10
      ))
    : (d = a),
    Object.assign(e, {
      previousSnapIndex: o,
      snapIndex: c,
      previousRealIndex: l,
      realIndex: d,
      previousIndex: r,
      activeIndex: a,
    }),
    e.initialized && Ps(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    l !== d && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function Rc(t) {
  const e = this,
    n = e.params,
    s = t.closest(`.${n.slideClass}, swiper-slide`);
  let i = !1,
    r;
  if (s) {
    for (let l = 0; l < e.slides.length; l += 1)
      if (e.slides[l] === s) {
        (i = !0), (r = l);
        break;
      }
  }
  if (s && i)
    (e.clickedSlide = s),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt(
            s.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (e.clickedIndex = r);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide();
}
var Hc = {
  updateSize: Lc,
  updateSlides: Ic,
  updateAutoHeight: Ac,
  updateSlidesOffset: Bc,
  updateSlidesProgress: Dc,
  updateProgress: Fc,
  updateSlidesClasses: zc,
  updateActiveIndex: $c,
  updateClickedSlide: Rc,
};
function kc(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: n, rtlTranslate: s, translate: i, wrapperEl: r } = e;
  if (n.virtualTranslate) return s ? -i : i;
  if (n.cssMode) return i;
  let l = vc(r, t);
  return (l += e.cssOverflowAdjustment()), s && (l = -l), l || 0;
}
function jc(t, e) {
  const n = this,
    { rtlTranslate: s, params: i, wrapperEl: r, progress: l } = n;
  let o = 0,
    a = 0;
  const c = 0;
  n.isHorizontal() ? (o = s ? -t : t) : (a = t),
    i.roundLengths && ((o = Math.floor(o)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? o : a),
    i.cssMode
      ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -o
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (o -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${o}px, ${a}px, ${c}px)`));
  let f;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (f = 0) : (f = (t - n.minTranslate()) / d),
    f !== l && n.updateProgress(t),
    n.emit("setTranslate", n.translate, e);
}
function Gc() {
  return -this.snapGrid[0];
}
function Vc() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Wc(t, e, n, s, i) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0);
  const r = this,
    { params: l, wrapperEl: o } = r;
  if (r.animating && l.preventInteractionOnTransition) return !1;
  const a = r.minTranslate(),
    c = r.maxTranslate();
  let f;
  if (
    (s && t > a ? (f = a) : s && t < c ? (f = c) : (f = t),
    r.updateProgress(f),
    l.cssMode)
  ) {
    const d = r.isHorizontal();
    if (e === 0) o[d ? "scrollLeft" : "scrollTop"] = -f;
    else {
      if (!r.support.smoothScroll)
        return (
          bl({ swiper: r, targetPosition: -f, side: d ? "left" : "top" }), !0
        );
      o.scrollTo({ [d ? "left" : "top"]: -f, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (r.setTransition(0),
        r.setTranslate(f),
        n && (r.emit("beforeTransitionStart", e, i), r.emit("transitionEnd")))
      : (r.setTransition(e),
        r.setTranslate(f),
        n && (r.emit("beforeTransitionStart", e, i), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (m) {
              !r ||
                r.destroyed ||
                (m.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  n && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var qc = {
  getTranslate: kc,
  setTranslate: jc,
  minTranslate: Gc,
  maxTranslate: Vc,
  translateTo: Wc,
};
function Uc(t, e) {
  const n = this;
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${t}ms`),
    n.emit("setTransition", t, e);
}
function Tl(t) {
  let { swiper: e, runCallbacks: n, direction: s, step: i } = t;
  const { activeIndex: r, previousIndex: l } = e;
  let o = s;
  if (
    (o || (r > l ? (o = "next") : r < l ? (o = "prev") : (o = "reset")),
    e.emit(`transition${i}`),
    n && r !== l)
  ) {
    if (o === "reset") {
      e.emit(`slideResetTransition${i}`);
      return;
    }
    e.emit(`slideChangeTransition${i}`),
      o === "next"
        ? e.emit(`slideNextTransition${i}`)
        : e.emit(`slidePrevTransition${i}`);
  }
}
function Kc(t, e) {
  t === void 0 && (t = !0);
  const n = this,
    { params: s } = n;
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    Tl({ swiper: n, runCallbacks: t, direction: e, step: "Start" }));
}
function Yc(t, e) {
  t === void 0 && (t = !0);
  const n = this,
    { params: s } = n;
  (n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      Tl({ swiper: n, runCallbacks: t, direction: e, step: "End" }));
}
var Xc = { setTransition: Uc, transitionStart: Kc, transitionEnd: Yc };
function Jc(t, e, n, s, i) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    n === void 0 && (n = !0),
    typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let l = t;
  l < 0 && (l = 0);
  const {
    params: o,
    snapGrid: a,
    slidesGrid: c,
    previousIndex: f,
    activeIndex: d,
    rtlTranslate: m,
    wrapperEl: g,
    enabled: E,
  } = r;
  if ((r.animating && o.preventInteractionOnTransition) || (!E && !s && !i))
    return !1;
  const y = Math.min(r.params.slidesPerGroupSkip, l);
  let _ = y + Math.floor((l - y) / r.params.slidesPerGroup);
  _ >= a.length && (_ = a.length - 1);
  const b = -a[_];
  if (o.normalizeSlideIndex)
    for (let p = 0; p < c.length; p += 1) {
      const h = -Math.floor(b * 100),
        x = Math.floor(c[p] * 100),
        I = Math.floor(c[p + 1] * 100);
      typeof c[p + 1] < "u"
        ? h >= x && h < I - (I - x) / 2
          ? (l = p)
          : h >= x && h < I && (l = p + 1)
        : h >= x && (l = p);
    }
  if (
    r.initialized &&
    l !== d &&
    ((!r.allowSlideNext &&
      (m
        ? b > r.translate && b > r.minTranslate()
        : b < r.translate && b < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        b > r.translate &&
        b > r.maxTranslate() &&
        (d || 0) !== l))
  )
    return !1;
  l !== (f || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(b);
  let u;
  if (
    (l > d ? (u = "next") : l < d ? (u = "prev") : (u = "reset"),
    (m && -b === r.translate) || (!m && b === r.translate))
  )
    return (
      r.updateActiveIndex(l),
      o.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      o.effect !== "slide" && r.setTranslate(b),
      u !== "reset" && (r.transitionStart(n, u), r.transitionEnd(n, u)),
      !1
    );
  if (o.cssMode) {
    const p = r.isHorizontal(),
      h = m ? b : -b;
    if (e === 0) {
      const x = r.virtual && r.params.virtual.enabled;
      x &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        x && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              g[p ? "scrollLeft" : "scrollTop"] = h;
            }))
          : (g[p ? "scrollLeft" : "scrollTop"] = h),
        x &&
          requestAnimationFrame(() => {
            (r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1);
          });
    } else {
      if (!r.support.smoothScroll)
        return (
          bl({ swiper: r, targetPosition: h, side: p ? "left" : "top" }), !0
        );
      g.scrollTo({ [p ? "left" : "top"]: h, behavior: "smooth" });
    }
    return !0;
  }
  return (
    r.setTransition(e),
    r.setTranslate(b),
    r.updateActiveIndex(l),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, s),
    r.transitionStart(n, u),
    e === 0
      ? r.transitionEnd(n, u)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (h) {
            !r ||
              r.destroyed ||
              (h.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(n, u)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Zc(t, e, n, s) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    n === void 0 && (n = !0),
    typeof t == "string" && (t = parseInt(t, 10));
  const i = this;
  let r = t;
  return (
    i.params.loop &&
      (i.virtual && i.params.virtual.enabled
        ? (r = r + i.virtual.slidesBefore)
        : (r = i.getSlideIndexByData(r))),
    i.slideTo(r, e, n, s)
  );
}
function Qc(t, e, n) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this,
    { enabled: i, params: r, animating: l } = s;
  if (!i) return s;
  let o = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : o,
    c = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (l && !c && r.loopPreventsSliding) return !1;
    s.loopFix({ direction: "next" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, t, e, n)
    : s.slideTo(s.activeIndex + a, t, e, n);
}
function ef(t, e, n) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this,
    {
      params: i,
      snapGrid: r,
      slidesGrid: l,
      rtlTranslate: o,
      enabled: a,
      animating: c,
    } = s;
  if (!a) return s;
  const f = s.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !f && i.loopPreventsSliding) return !1;
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  const d = o ? s.translate : -s.translate;
  function m(b) {
    return b < 0 ? -Math.floor(Math.abs(b)) : Math.floor(b);
  }
  const g = m(d),
    E = r.map((b) => m(b));
  let y = r[E.indexOf(g) - 1];
  if (typeof y > "u" && i.cssMode) {
    let b;
    r.forEach((u, p) => {
      g >= u && (b = p);
    }),
      typeof b < "u" && (y = r[b > 0 ? b - 1 : b]);
  }
  let _ = 0;
  if (
    (typeof y < "u" &&
      ((_ = l.indexOf(y)),
      _ < 0 && (_ = s.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((_ = _ - s.slidesPerViewDynamic("previous", !0) + 1),
        (_ = Math.max(_, 0)))),
    i.rewind && s.isBeginning)
  ) {
    const b =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(b, t, e, n);
  }
  return s.slideTo(_, t, e, n);
}
function tf(t, e, n) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this;
  return s.slideTo(s.activeIndex, t, e, n);
}
function nf(t, e, n, s) {
  t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0),
    s === void 0 && (s = 0.5);
  const i = this;
  let r = i.activeIndex;
  const l = Math.min(i.params.slidesPerGroupSkip, r),
    o = l + Math.floor((r - l) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[o]) {
    const c = i.snapGrid[o],
      f = i.snapGrid[o + 1];
    a - c > (f - c) * s && (r += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[o - 1],
      f = i.snapGrid[o];
    a - c <= (f - c) * s && (r -= i.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, i.slidesGrid.length - 1)),
    i.slideTo(r, t, e, n)
  );
}
function sf() {
  const t = this,
    { params: e, slidesEl: n } = t,
    s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let i = t.clickedIndex,
    r;
  const l = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating) return;
    (r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? i < t.loopedSlides - s / 2 ||
          i > t.slides.length - t.loopedSlides + s / 2
          ? (t.loopFix(),
            (i = t.getSlideIndex(
              He(n, `${l}[data-swiper-slide-index="${r}"]`)[0]
            )),
            It(() => {
              t.slideTo(i);
            }))
          : t.slideTo(i)
        : i > t.slides.length - s
        ? (t.loopFix(),
          (i = t.getSlideIndex(
            He(n, `${l}[data-swiper-slide-index="${r}"]`)[0]
          )),
          It(() => {
            t.slideTo(i);
          }))
        : t.slideTo(i);
  } else t.slideTo(i);
}
var rf = {
  slideTo: Jc,
  slideToLoop: Zc,
  slideNext: Qc,
  slidePrev: ef,
  slideReset: tf,
  slideToClosest: nf,
  slideToClickedSlide: sf,
};
function lf(t) {
  const e = this,
    { params: n, slidesEl: s } = e;
  if (!n.loop || (e.virtual && e.params.virtual.enabled)) return;
  He(s, `.${n.slideClass}, swiper-slide`).forEach((r, l) => {
    r.setAttribute("data-swiper-slide-index", l);
  }),
    e.loopFix({
      slideRealIndex: t,
      direction: n.centeredSlides ? void 0 : "next",
    });
}
function af(t) {
  let {
    slideRealIndex: e,
    slideTo: n = !0,
    direction: s,
    setTranslate: i,
    activeSlideIndex: r,
    byController: l,
    byMousewheel: o,
  } = t === void 0 ? {} : t;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: f,
    allowSlideNext: d,
    slidesEl: m,
    params: g,
  } = a;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && g.virtual.enabled)
  ) {
    n &&
      (!g.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : g.centeredSlides && a.snapIndex < g.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = f),
      (a.allowSlideNext = d),
      a.emit("loopFix");
    return;
  }
  const E =
    g.slidesPerView === "auto"
      ? a.slidesPerViewDynamic()
      : Math.ceil(parseFloat(g.slidesPerView, 10));
  let y = g.loopedSlides || E;
  y % g.slidesPerGroup !== 0 &&
    (y += g.slidesPerGroup - (y % g.slidesPerGroup)),
    (a.loopedSlides = y);
  const _ = [],
    b = [];
  let u = a.activeIndex;
  typeof r > "u"
    ? (r = a.getSlideIndex(
        a.slides.filter((L) => L.classList.contains(g.slideActiveClass))[0]
      ))
    : (u = r);
  const p = s === "next" || !s,
    h = s === "prev" || !s;
  let x = 0,
    I = 0;
  if (r < y) {
    x = Math.max(y - r, g.slidesPerGroup);
    for (let L = 0; L < y - r; L += 1) {
      const C = L - Math.floor(L / c.length) * c.length;
      _.push(c.length - C - 1);
    }
  } else if (r > a.slides.length - y * 2) {
    I = Math.max(r - (a.slides.length - y * 2), g.slidesPerGroup);
    for (let L = 0; L < I; L += 1) {
      const C = L - Math.floor(L / c.length) * c.length;
      b.push(C);
    }
  }
  if (
    (h &&
      _.forEach((L) => {
        (a.slides[L].swiperLoopMoveDOM = !0),
          m.prepend(a.slides[L]),
          (a.slides[L].swiperLoopMoveDOM = !1);
      }),
    p &&
      b.forEach((L) => {
        (a.slides[L].swiperLoopMoveDOM = !0),
          m.append(a.slides[L]),
          (a.slides[L].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    g.slidesPerView === "auto" && a.updateSlides(),
    g.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (_.length > 0 && h)
      if (typeof e > "u") {
        const L = a.slidesGrid[u],
          w = a.slidesGrid[u + x] - L;
        o
          ? a.setTranslate(a.translate - w)
          : (a.slideTo(u + x, 0, !1, !0),
            i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += w));
      } else i && a.slideToLoop(e, 0, !1, !0);
    else if (b.length > 0 && p)
      if (typeof e > "u") {
        const L = a.slidesGrid[u],
          w = a.slidesGrid[u - I] - L;
        o
          ? a.setTranslate(a.translate - w)
          : (a.slideTo(u - I, 0, !1, !0),
            i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += w));
      } else a.slideToLoop(e, 0, !1, !0);
  }
  if (
    ((a.allowSlidePrev = f),
    (a.allowSlideNext = d),
    a.controller && a.controller.control && !l)
  ) {
    const L = {
      slideRealIndex: e,
      slideTo: !1,
      direction: s,
      setTranslate: i,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((C) => {
          !C.destroyed && C.params.loop && C.loopFix(L);
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix(L);
  }
  a.emit("loopFix");
}
function of() {
  const t = this,
    { params: e, slidesEl: n } = t;
  if (!e.loop || (t.virtual && t.params.virtual.enabled)) return;
  t.recalcSlides();
  const s = [];
  t.slides.forEach((i) => {
    const r =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    s[r] = i;
  }),
    t.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    s.forEach((i) => {
      n.append(i);
    }),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0);
}
var cf = { loopCreate: lf, loopFix: af, loopDestroy: of };
function ff(t) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const n = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = t ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function uf() {
  const t = this;
  (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t.isElement && (t.__preventObserver__ = !0),
    (t[
      t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      }));
}
var df = { setGrabCursor: ff, unsetGrabCursor: uf };
function pf(t, e) {
  e === void 0 && (e = this);
  function n(s) {
    if (!s || s === Ae() || s === ye()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const i = s.closest(t);
    return !i && !s.getRootNode ? null : i || n(s.getRootNode().host);
  }
  return n(e);
}
function hf(t) {
  const e = this,
    n = Ae(),
    s = ye(),
    i = e.touchEventsData;
  i.evCache.push(t);
  const { params: r, touches: l, enabled: o } = e;
  if (
    !o ||
    (!r.simulateTouch && t.pointerType === "mouse") ||
    (e.animating && r.preventInteractionOnTransition)
  )
    return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let a = t;
  a.originalEvent && (a = a.originalEvent);
  let c = a.target;
  if (
    (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(c)) ||
    ("which" in a && a.which === 3) ||
    ("button" in a && a.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const f = !!r.noSwipingClass && r.noSwipingClass !== "",
    d = t.composedPath ? t.composedPath() : t.path;
  f && a.target && a.target.shadowRoot && d && (c = d[0]);
  const m = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    g = !!(a.target && a.target.shadowRoot);
  if (r.noSwiping && (g ? pf(m, c) : c.closest(m))) {
    e.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !c.closest(r.swipeHandler)) return;
  (l.currentX = a.pageX), (l.currentY = a.pageY);
  const E = l.currentX,
    y = l.currentY,
    _ = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
    b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (_ && (E <= b || E >= s.innerWidth - b))
    if (_ === "prevent") t.preventDefault();
    else return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (l.startX = E),
    (l.startY = y),
    (i.touchStartTime = qe()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    r.threshold > 0 && (i.allowThresholdMove = !1);
  let u = !0;
  c.matches(i.focusableElements) &&
    ((u = !1), c.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== c &&
      n.activeElement.blur();
  const p = u && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || p) &&
    !c.isContentEditable &&
    a.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !r.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", a);
}
function mf(t) {
  const e = Ae(),
    n = this,
    s = n.touchEventsData,
    { params: i, touches: r, rtlTranslate: l, enabled: o } = n;
  if (!o || (!i.simulateTouch && t.pointerType === "mouse")) return;
  let a = t;
  if ((a.originalEvent && (a = a.originalEvent), !s.isTouched)) {
    s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const c = s.evCache.findIndex((I) => I.pointerId === a.pointerId);
  c >= 0 && (s.evCache[c] = a);
  const f = s.evCache.length > 1 ? s.evCache[0] : a,
    d = f.pageX,
    m = f.pageY;
  if (a.preventedByNestedSwiper) {
    (r.startX = d), (r.startY = m);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, {
          startX: d,
          startY: m,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: d,
          currentY: m,
        }),
        (s.touchStartTime = qe()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (m < r.startY && n.translate <= n.maxTranslate()) ||
        (m > r.startY && n.translate >= n.minTranslate())
      ) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
    } else if (
      (d < r.startX && n.translate <= n.maxTranslate()) ||
      (d > r.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    e.activeElement &&
    a.target === e.activeElement &&
    a.target.matches(s.focusableElements)
  ) {
    (s.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (s.allowTouchCallbacks && n.emit("touchMove", a),
    a.targetTouches && a.targetTouches.length > 1)
  )
    return;
  (r.currentX = d), (r.currentY = m);
  const g = r.currentX - r.startX,
    E = r.currentY - r.startY;
  if (n.params.threshold && Math.sqrt(g ** 2 + E ** 2) < n.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let I;
    (n.isHorizontal() && r.currentY === r.startY) ||
    (n.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : g * g + E * E >= 25 &&
        ((I = (Math.atan2(Math.abs(E), Math.abs(g)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? I > i.touchAngle
          : 90 - I > i.touchAngle));
  }
  if (
    (s.isScrolling && n.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        s.evCache.length > 1))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let y = n.isHorizontal() ? g : E,
    _ = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  i.oneWayMovement &&
    ((y = Math.abs(y) * (l ? 1 : -1)), (_ = Math.abs(_) * (l ? 1 : -1))),
    (r.diff = y),
    (y *= i.touchRatio),
    l && ((y = -y), (_ = -_));
  const b = n.touchesDirection;
  (n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = _ > 0 ? "prev" : "next");
  const u = n.params.loop && !i.cssMode;
  if (!s.isMoved) {
    if (
      (u && n.loopFix({ direction: n.swipeDirection }),
      (s.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const I = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(I);
    }
    (s.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let p;
  s.isMoved &&
    b !== n.touchesDirection &&
    u &&
    Math.abs(y) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (p = !0)),
    n.emit("sliderMove", a),
    (s.isMoved = !0),
    (s.currentTranslate = y + s.startTranslate);
  let h = !0,
    x = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (x = 0),
    y > 0
      ? (u &&
          !p &&
          s.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > n.minTranslate() &&
          ((h = !1),
          i.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + y) ** x)))
      : y < 0 &&
        (u &&
          !p &&
          s.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        s.currentTranslate < n.maxTranslate() &&
          ((h = !1),
          i.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - y) ** x))),
    h && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = n.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY);
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(s.currentTranslate),
    n.setTranslate(s.currentTranslate));
}
function gf(t) {
  const e = this,
    n = e.touchEventsData,
    s = n.evCache.findIndex((p) => p.pointerId === t.pointerId);
  if (
    (s >= 0 && n.evCache.splice(s, 1),
    ["pointercancel", "pointerout", "pointerleave"].includes(t.type) &&
      !(
        t.type === "pointercancel" &&
        (e.browser.isSafari || e.browser.isWebView)
      ))
  )
    return;
  const {
    params: i,
    touches: r,
    rtlTranslate: l,
    slidesGrid: o,
    enabled: a,
  } = e;
  if (!a || (!i.simulateTouch && t.pointerType === "mouse")) return;
  let c = t;
  if (
    (c.originalEvent && (c = c.originalEvent),
    n.allowTouchCallbacks && e.emit("touchEnd", c),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && i.grabCursor && e.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const f = qe(),
    d = f - n.touchStartTime;
  if (e.allowClick) {
    const p = c.path || (c.composedPath && c.composedPath());
    e.updateClickedSlide((p && p[0]) || c.target),
      e.emit("tap click", c),
      d < 300 &&
        f - n.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", c);
  }
  if (
    ((n.lastClickTime = qe()),
    It(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !e.swipeDirection ||
      r.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let m;
  if (
    (i.followFinger
      ? (m = l ? e.translate : -e.translate)
      : (m = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (i.freeMode && i.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: m });
    return;
  }
  let g = 0,
    E = e.slidesSizesGrid[0];
  for (
    let p = 0;
    p < o.length;
    p += p < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const h = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof o[p + h] < "u"
      ? m >= o[p] && m < o[p + h] && ((g = p), (E = o[p + h] - o[p]))
      : m >= o[p] && ((g = p), (E = o[o.length - 1] - o[o.length - 2]));
  }
  let y = null,
    _ = null;
  i.rewind &&
    (e.isBeginning
      ? (_ =
          i.virtual && i.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (y = 0));
  const b = (m - o[g]) / E,
    u = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (d > i.longSwipesMs) {
    if (!i.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (b >= i.longSwipesRatio
        ? e.slideTo(i.rewind && e.isEnd ? y : g + u)
        : e.slideTo(g)),
      e.swipeDirection === "prev" &&
        (b > 1 - i.longSwipesRatio
          ? e.slideTo(g + u)
          : _ !== null && b < 0 && Math.abs(b) > i.longSwipesRatio
          ? e.slideTo(_)
          : e.slideTo(g));
  } else {
    if (!i.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (c.target === e.navigation.nextEl || c.target === e.navigation.prevEl)
      ? c.target === e.navigation.nextEl
        ? e.slideTo(g + u)
        : e.slideTo(g)
      : (e.swipeDirection === "next" && e.slideTo(y !== null ? y : g + u),
        e.swipeDirection === "prev" && e.slideTo(_ !== null ? _ : g));
  }
}
function Yi() {
  const t = this,
    { params: e, el: n } = t;
  if (n && n.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = t,
    l = t.virtual && t.params.virtual.enabled;
  (t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses();
  const o = l && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  t.isEnd &&
  !t.isBeginning &&
  !t.params.centeredSlides &&
  !o
    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
    : t.params.loop && !l
    ? t.slideToLoop(t.realIndex, 0, !1, !0)
    : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay &&
      t.autoplay.running &&
      t.autoplay.paused &&
      (clearTimeout(t.autoplay.resizeTimeout),
      (t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay &&
          t.autoplay.running &&
          t.autoplay.paused &&
          t.autoplay.resume();
      }, 500))),
    (t.allowSlidePrev = i),
    (t.allowSlideNext = s),
    t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
}
function vf(t) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && t.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (t.stopPropagation(), t.stopImmediatePropagation())));
}
function bf() {
  const t = this,
    { wrapperEl: e, rtlTranslate: n, enabled: s } = t;
  if (!s) return;
  (t.previousTranslate = t.translate),
    t.isHorizontal()
      ? (t.translate = -e.scrollLeft)
      : (t.translate = -e.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses();
  let i;
  const r = t.maxTranslate() - t.minTranslate();
  r === 0 ? (i = 0) : (i = (t.translate - t.minTranslate()) / r),
    i !== t.progress && t.updateProgress(n ? -t.translate : t.translate),
    t.emit("setTranslate", t.translate, !1);
}
function yf(t) {
  const e = this;
  Mn(e, t.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
let Xi = !1;
function wf() {}
const xl = (t, e) => {
  const n = Ae(),
    { params: s, el: i, wrapperEl: r, device: l } = t,
    o = !!s.nested,
    a = e === "on" ? "addEventListener" : "removeEventListener",
    c = e;
  i[a]("pointerdown", t.onTouchStart, { passive: !1 }),
    n[a]("pointermove", t.onTouchMove, { passive: !1, capture: o }),
    n[a]("pointerup", t.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", t.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", t.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", t.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      i[a]("click", t.onClick, !0),
    s.cssMode && r[a]("scroll", t.onScroll),
    s.updateOnWindowResize
      ? t[c](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Yi,
          !0
        )
      : t[c]("observerUpdate", Yi, !0),
    i[a]("load", t.onLoad, { capture: !0 });
};
function Tf() {
  const t = this,
    e = Ae(),
    { params: n } = t;
  (t.onTouchStart = hf.bind(t)),
    (t.onTouchMove = mf.bind(t)),
    (t.onTouchEnd = gf.bind(t)),
    n.cssMode && (t.onScroll = bf.bind(t)),
    (t.onClick = vf.bind(t)),
    (t.onLoad = yf.bind(t)),
    Xi || (e.addEventListener("touchstart", wf), (Xi = !0)),
    xl(t, "on");
}
function xf() {
  xl(this, "off");
}
var Sf = { attachEvents: Tf, detachEvents: xf };
const Ji = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function Ef() {
  const t = this,
    { realIndex: e, initialized: n, params: s, el: i } = t,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const l = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
  if (!l || t.currentBreakpoint === l) return;
  const a = (l in r ? r[l] : void 0) || t.originalParams,
    c = Ji(t, s),
    f = Ji(t, a),
    d = s.enabled;
  c && !f
    ? (i.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      t.emitContainerClasses())
    : !c &&
      f &&
      (i.classList.add(`${s.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && s.grid.fill === "column")) &&
        i.classList.add(`${s.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((y) => {
      if (typeof a[y] > "u") return;
      const _ = s[y] && s[y].enabled,
        b = a[y] && a[y].enabled;
      _ && !b && t[y].disable(), !_ && b && t[y].enable();
    });
  const m = a.direction && a.direction !== s.direction,
    g = s.loop && (a.slidesPerView !== s.slidesPerView || m);
  m && n && t.changeDirection(), Ce(t.params, a);
  const E = t.params.enabled;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev,
  }),
    d && !E ? t.disable() : !d && E && t.enable(),
    (t.currentBreakpoint = l),
    t.emit("_beforeBreakpoint", a),
    g && n && (t.loopDestroy(), t.loopCreate(e), t.updateSlides()),
    t.emit("breakpoint", a);
}
function Cf(t, e, n) {
  if ((e === void 0 && (e = "window"), !t || (e === "container" && !n))) return;
  let s = !1;
  const i = ye(),
    r = e === "window" ? i.innerHeight : n.clientHeight,
    l = Object.keys(t).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const a = parseFloat(o.substr(1));
        return { value: r * a, point: o };
      }
      return { value: o, point: o };
    });
  l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
  for (let o = 0; o < l.length; o += 1) {
    const { point: a, value: c } = l[o];
    e === "window"
      ? i.matchMedia(`(min-width: ${c}px)`).matches && (s = a)
      : c <= n.clientWidth && (s = a);
  }
  return s || "max";
}
var _f = { setBreakpoint: Ef, getBreakpoint: Cf };
function Pf(t, e) {
  const n = [];
  return (
    t.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((i) => {
            s[i] && n.push(e + i);
          })
        : typeof s == "string" && n.push(e + s);
    }),
    n
  );
}
function Mf() {
  const t = this,
    { classNames: e, params: n, rtl: s, el: i, device: r } = t,
    l = Pf(
      [
        "initialized",
        n.direction,
        { "free-mode": t.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: s },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  e.push(...l), i.classList.add(...e), t.emitContainerClasses();
}
function Of() {
  const t = this,
    { el: e, classNames: n } = t;
  e.classList.remove(...n), t.emitContainerClasses();
}
var Lf = { addClasses: Mf, removeClasses: Of };
function If() {
  const t = this,
    { isLocked: e, params: n } = t,
    { slidesOffsetBefore: s } = n;
  if (s) {
    const i = t.slides.length - 1,
      r = t.slidesGrid[i] + t.slidesSizesGrid[i] + s * 2;
    t.isLocked = t.size > r;
  } else t.isLocked = t.snapGrid.length === 1;
  n.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    n.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
var Af = { checkOverflow: If },
  Zi = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Bf(t, e) {
  return function (s) {
    s === void 0 && (s = {});
    const i = Object.keys(s)[0],
      r = s[i];
    if (typeof r != "object" || r === null) {
      Ce(e, s);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
        t[i] === !0 &&
        (t[i] = { auto: !0 }),
      !(i in t && "enabled" in r))
    ) {
      Ce(e, s);
      return;
    }
    t[i] === !0 && (t[i] = { enabled: !0 }),
      typeof t[i] == "object" && !("enabled" in t[i]) && (t[i].enabled = !0),
      t[i] || (t[i] = { enabled: !1 }),
      Ce(e, s);
  };
}
const fs = {
    eventsEmitter: Oc,
    update: Hc,
    translate: qc,
    transition: Xc,
    slide: rf,
    loop: cf,
    grabCursor: df,
    events: Sf,
    breakpoints: _f,
    checkOverflow: Af,
    classes: Lf,
  },
  us = {};
let sn = class Ve {
  constructor() {
    let e, n;
    for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
      i[r] = arguments[r];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([e, n] = i),
      n || (n = {}),
      (n = Ce({}, n)),
      e && !n.el && (n.el = e);
    const l = Ae();
    if (
      n.el &&
      typeof n.el == "string" &&
      l.querySelectorAll(n.el).length > 1
    ) {
      const f = [];
      return (
        l.querySelectorAll(n.el).forEach((d) => {
          const m = Ce({}, n, { el: d });
          f.push(new Ve(m));
        }),
        f
      );
    }
    const o = this;
    (o.__swiper__ = !0),
      (o.support = wl()),
      (o.device = Ec({ userAgent: n.userAgent })),
      (o.browser = _c()),
      (o.eventsListeners = {}),
      (o.eventsAnyListeners = []),
      (o.modules = [...o.__modules__]),
      n.modules && Array.isArray(n.modules) && o.modules.push(...n.modules);
    const a = {};
    o.modules.forEach((f) => {
      f({
        params: n,
        swiper: o,
        extendParams: Bf(n, a),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o),
      });
    });
    const c = Ce({}, Zi, a);
    return (
      (o.params = Ce({}, c, us, n)),
      (o.originalParams = Ce({}, o.params)),
      (o.passedParams = Ce({}, n)),
      o.params &&
        o.params.on &&
        Object.keys(o.params.on).forEach((f) => {
          o.on(f, o.params.on[f]);
        }),
      o.params && o.params.onAny && o.onAny(o.params.onAny),
      Object.assign(o, {
        enabled: o.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return o.params.direction === "horizontal";
        },
        isVertical() {
          return o.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      o.emit("_swiper"),
      o.params.init && o.init(),
      o
    );
  }
  getSlideIndex(e) {
    const { slidesEl: n, params: s } = this,
      i = He(n, `.${s.slideClass}, swiper-slide`),
      r = zn(i[0]);
    return zn(e) - r;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === e
      )[0]
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: n, params: s } = e;
    e.slides = He(n, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, n) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const i = s.minTranslate(),
      l = (s.maxTranslate() - i) * e + i;
    s.translateTo(l, typeof n > "u" ? 0 : n),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const n = e.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(e) {
    const n = this;
    return n.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const n = [];
    e.slides.forEach((s) => {
      const i = e.getSlideClasses(s);
      n.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
    }),
      e.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(e, n) {
    e === void 0 && (e = "current"), n === void 0 && (n = !1);
    const s = this,
      {
        params: i,
        slides: r,
        slidesGrid: l,
        slidesSizesGrid: o,
        size: a,
        activeIndex: c,
      } = s;
    let f = 1;
    if (i.centeredSlides) {
      let d = r[c] ? r[c].swiperSlideSize : 0,
        m;
      for (let g = c + 1; g < r.length; g += 1)
        r[g] &&
          !m &&
          ((d += r[g].swiperSlideSize), (f += 1), d > a && (m = !0));
      for (let g = c - 1; g >= 0; g -= 1)
        r[g] &&
          !m &&
          ((d += r[g].swiperSlideSize), (f += 1), d > a && (m = !0));
    } else if (e === "current")
      for (let d = c + 1; d < r.length; d += 1)
        (n ? l[d] + o[d] - l[c] < a : l[d] - l[c] < a) && (f += 1);
    else for (let d = c - 1; d >= 0; d -= 1) l[c] - l[d] < a && (f += 1);
    return f;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: n, params: s } = e;
    s.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && Mn(e, l);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function i() {
      const l = e.rtlTranslate ? e.translate * -1 : e.translate,
        o = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
      e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      i(), s.autoHeight && e.updateAutoHeight();
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        e.isEnd &&
        !s.centeredSlides
      ) {
        const l = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(l.length - 1, 0, !1, !0);
      } else r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || i();
    }
    s.watchOverflow && n !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, n) {
    n === void 0 && (n = !0);
    const s = this,
      i = s.params.direction;
    return (
      e || (e = i === "horizontal" ? "vertical" : "horizontal"),
      e === i ||
        (e !== "horizontal" && e !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        (s.params.direction = e),
        s.slides.forEach((r) => {
          e === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        s.emit("changeDirection"),
        n && s.update()),
      s
    );
  }
  changeLanguageDirection(e) {
    const n = this;
    (n.rtl && e === "rtl") ||
      (!n.rtl && e === "ltr") ||
      ((n.rtl = e === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(e) {
    const n = this;
    if (n.mounted) return !0;
    let s = e || n.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    (s.swiper = n), s.parentNode && s.parentNode.host && (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = (() =>
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(i())
        : He(s, i())[0])();
    return (
      !l &&
        n.params.createElements &&
        ((l = Kn("div", n.params.wrapperClass)),
        s.append(l),
        He(s, `.${n.params.slideClass}`).forEach((o) => {
          l.append(o);
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: l,
        slidesEl: n.isElement ? s.parentNode.host : l,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || tt(s, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || tt(s, "direction") === "rtl"),
        wrongRTL: tt(l, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const n = this;
    return (
      n.initialized ||
        n.mount(e) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled
          ? n.slideTo(
              n.params.initialSlide + n.virtual.slidesBefore,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.params.loop && n.loopCreate(),
        n.attachEvents(),
        [...n.el.querySelectorAll('[loading="lazy"]')].forEach((i) => {
          i.complete
            ? Mn(n, i)
            : i.addEventListener("load", (r) => {
                Mn(n, r.target);
              });
        }),
        Ps(n),
        (n.initialized = !0),
        Ps(n),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(e, n) {
    e === void 0 && (e = !0), n === void 0 && (n = !0);
    const s = this,
      { params: i, el: r, wrapperEl: l, slides: o } = s;
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        i.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          r.removeAttribute("style"),
          l.removeAttribute("style"),
          o &&
            o.length &&
            o.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a);
        }),
        e !== !1 && ((s.el.swiper = null), mc(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    Ce(us, e);
  }
  static get extendedDefaults() {
    return us;
  }
  static get defaults() {
    return Zi;
  }
  static installModule(e) {
    Ve.prototype.__modules__ || (Ve.prototype.__modules__ = []);
    const n = Ve.prototype.__modules__;
    typeof e == "function" && n.indexOf(e) < 0 && n.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((n) => Ve.installModule(n)), Ve)
      : (Ve.installModule(e), Ve);
  }
};
Object.keys(fs).forEach((t) => {
  Object.keys(fs[t]).forEach((e) => {
    sn.prototype[e] = fs[t][e];
  });
});
sn.use([Pc, Mc]);
const Sl = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function mt(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function nt(t, e) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof t[s] > "u"
        ? (t[s] = e[s])
        : mt(e[s]) && mt(t[s]) && Object.keys(e[s]).length > 0
        ? e[s].__swiper__
          ? (t[s] = e[s])
          : nt(t[s], e[s])
        : (t[s] = e[s]);
    });
}
function El(t) {
  return (
    t === void 0 && (t = {}),
    t.navigation &&
      typeof t.navigation.nextEl > "u" &&
      typeof t.navigation.prevEl > "u"
  );
}
function Cl(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > "u";
}
function _l(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > "u";
}
function Pl(t) {
  t === void 0 && (t = "");
  const e = t
      .split(" ")
      .map((s) => s.trim())
      .filter((s) => !!s),
    n = [];
  return (
    e.forEach((s) => {
      n.indexOf(s) < 0 && n.push(s);
    }),
    n.join(" ")
  );
}
function Df(t) {
  return (
    t === void 0 && (t = ""),
    t
      ? t.includes("swiper-wrapper")
        ? t
        : `swiper-wrapper ${t}`
      : "swiper-wrapper"
  );
}
function Ff(t) {
  let {
    swiper: e,
    slides: n,
    passedParams: s,
    changedParams: i,
    nextEl: r,
    prevEl: l,
    scrollbarEl: o,
    paginationEl: a,
  } = t;
  const c = i.filter(
      (w) => w !== "children" && w !== "direction" && w !== "wrapperClass"
    ),
    {
      params: f,
      pagination: d,
      navigation: m,
      scrollbar: g,
      virtual: E,
      thumbs: y,
    } = e;
  let _, b, u, p, h, x, I, L;
  i.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    f.thumbs &&
    !f.thumbs.swiper &&
    (_ = !0),
    i.includes("controller") &&
      s.controller &&
      s.controller.control &&
      f.controller &&
      !f.controller.control &&
      (b = !0),
    i.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || a) &&
      (f.pagination || f.pagination === !1) &&
      d &&
      !d.el &&
      (u = !0),
    i.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || o) &&
      (f.scrollbar || f.scrollbar === !1) &&
      g &&
      !g.el &&
      (p = !0),
    i.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || l) &&
      (s.navigation.nextEl || r) &&
      (f.navigation || f.navigation === !1) &&
      m &&
      !m.prevEl &&
      !m.nextEl &&
      (h = !0);
  const C = (w) => {
    e[w] &&
      (e[w].destroy(),
      w === "navigation"
        ? (e.isElement && (e[w].prevEl.remove(), e[w].nextEl.remove()),
          (f[w].prevEl = void 0),
          (f[w].nextEl = void 0),
          (e[w].prevEl = void 0),
          (e[w].nextEl = void 0))
        : (e.isElement && e[w].el.remove(),
          (f[w].el = void 0),
          (e[w].el = void 0)));
  };
  i.includes("loop") &&
    e.isElement &&
    (f.loop && !s.loop ? (x = !0) : !f.loop && s.loop ? (I = !0) : (L = !0)),
    c.forEach((w) => {
      if (mt(f[w]) && mt(s[w]))
        nt(f[w], s[w]),
          (w === "navigation" || w === "pagination" || w === "scrollbar") &&
            "enabled" in s[w] &&
            !s[w].enabled &&
            C(w);
      else {
        const B = s[w];
        (B === !0 || B === !1) &&
        (w === "navigation" || w === "pagination" || w === "scrollbar")
          ? B === !1 && C(w)
          : (f[w] = s[w]);
      }
    }),
    c.includes("controller") &&
      !b &&
      e.controller &&
      e.controller.control &&
      f.controller &&
      f.controller.control &&
      (e.controller.control = f.controller.control),
    i.includes("children") &&
      n &&
      E &&
      f.virtual.enabled &&
      ((E.slides = n), E.update(!0)),
    i.includes("children") && n && f.loop && (L = !0),
    _ && y.init() && y.update(!0),
    b && (e.controller.control = f.controller.control),
    u &&
      (e.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        e.el.appendChild(a)),
      a && (f.pagination.el = a),
      d.init(),
      d.render(),
      d.update()),
    p &&
      (e.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-scrollbar"),
        e.el.appendChild(o)),
      o && (f.scrollbar.el = o),
      g.init(),
      g.updateSize(),
      g.setTranslate()),
    h &&
      (e.isElement &&
        ((!r || typeof r == "string") &&
          ((r = document.createElement("div")),
          r.classList.add("swiper-button-next"),
          (r.innerHTML = e.hostEl.nextButtonSvg),
          e.el.appendChild(r)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          (r.innerHTML = e.hostEl.prevButtonSvg),
          e.el.appendChild(l))),
      r && (f.navigation.nextEl = r),
      l && (f.navigation.prevEl = l),
      m.init(),
      m.update()),
    i.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext),
    i.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev),
    i.includes("direction") && e.changeDirection(s.direction, !1),
    (x || L) && e.loopDestroy(),
    (I || L) && e.loopCreate(),
    e.update();
}
function Qi(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = !0);
  const n = { on: {} },
    s = {},
    i = {};
  nt(n, sn.defaults),
    nt(n, sn.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const r = {},
    l = Sl.map((a) => a.replace(/_/, "")),
    o = Object.assign({}, t);
  return (
    Object.keys(o).forEach((a) => {
      typeof t[a] > "u" ||
        (l.indexOf(a) >= 0
          ? mt(t[a])
            ? ((n[a] = {}), (i[a] = {}), nt(n[a], t[a]), nt(i[a], t[a]))
            : ((n[a] = t[a]), (i[a] = t[a]))
          : a.search(/on[A-Z]/) === 0 && typeof t[a] == "function"
          ? e
            ? (s[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
          : (r[a] = t[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: r, events: s }
  );
}
function zf(t, e) {
  let {
    el: n,
    nextEl: s,
    prevEl: i,
    paginationEl: r,
    scrollbarEl: l,
    swiper: o,
  } = t;
  El(e) &&
    s &&
    i &&
    ((o.params.navigation.nextEl = s),
    (o.originalParams.navigation.nextEl = s),
    (o.params.navigation.prevEl = i),
    (o.originalParams.navigation.prevEl = i)),
    Cl(e) &&
      r &&
      ((o.params.pagination.el = r), (o.originalParams.pagination.el = r)),
    _l(e) &&
      l &&
      ((o.params.scrollbar.el = l), (o.originalParams.scrollbar.el = l)),
    o.init(n);
}
function Nf(t, e, n, s, i) {
  const r = [];
  if (!e) return r;
  const l = (a) => {
    r.indexOf(a) < 0 && r.push(a);
  };
  if (n && s) {
    const a = s.map(i),
      c = n.map(i);
    a.join("") !== c.join("") && l("children"),
      s.length !== n.length && l("children");
  }
  return (
    Sl.filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in t && a in e)
          if (mt(t[a]) && mt(e[a])) {
            const c = Object.keys(t[a]),
              f = Object.keys(e[a]);
            c.length !== f.length
              ? l(a)
              : (c.forEach((d) => {
                  t[a][d] !== e[a][d] && l(a);
                }),
                f.forEach((d) => {
                  t[a][d] !== e[a][d] && l(a);
                }));
          } else t[a] !== e[a] && l(a);
      }),
    r
  );
}
const $f = (t) => {
  !t ||
    t.destroyed ||
    !t.params.virtual ||
    (t.params.virtual && !t.params.virtual.enabled) ||
    (t.updateSlides(),
    t.updateProgress(),
    t.updateSlidesClasses(),
    t.parallax &&
      t.params.parallax &&
      t.params.parallax.enabled &&
      t.parallax.setTranslate());
};
function ds(t, e, n) {
  t === void 0 && (t = {});
  const s = [],
    i = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    r = (l, o) => {
      Array.isArray(l) &&
        l.forEach((a) => {
          const c = typeof a.type == "symbol";
          o === "default" && (o = "container-end"),
            c && a.children
              ? r(a.children, o)
              : a.type &&
                (a.type.name === "SwiperSlide" ||
                  a.type.name === "AsyncComponentWrapper")
              ? s.push(a)
              : i[o] && i[o].push(a);
        });
    };
  return (
    Object.keys(t).forEach((l) => {
      if (typeof t[l] != "function") return;
      const o = t[l]();
      r(o, l);
    }),
    (n.value = e.value),
    (e.value = s),
    { slides: s, slots: i }
  );
}
function Rf(t, e, n) {
  if (!n) return null;
  const s = (f) => {
      let d = f;
      return (
        f < 0 ? (d = e.length + f) : d >= e.length && (d = d - e.length), d
      );
    },
    i = t.value.isHorizontal()
      ? { [t.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: r, to: l } = n,
    o = t.value.params.loop ? -e.length : 0,
    a = t.value.params.loop ? e.length * 2 : e.length,
    c = [];
  for (let f = o; f < a; f += 1) f >= r && f <= l && c.push(e[s(f)]);
  return c.map(
    (f) => (
      f.props || (f.props = {}),
      f.props.style || (f.props.style = {}),
      (f.props.swiperRef = t),
      (f.props.style = i),
      Oe(f.type, { ...f.props }, f.children)
    )
  );
}
const Eu = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "autoplayTimeLeft",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "init",
      "keyPress",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(t, e) {
      let { slots: n, emit: s } = e;
      const { tag: i, wrapperTag: r } = t,
        l = fe("swiper"),
        o = fe(null),
        a = fe(!1),
        c = fe(!1),
        f = fe(null),
        d = fe(null),
        m = fe(null),
        g = { value: [] },
        E = { value: [] },
        y = fe(null),
        _ = fe(null),
        b = fe(null),
        u = fe(null),
        { params: p, passedParams: h } = Qi(t, !1);
      ds(n, g, E), (m.value = h), (E.value = g.value);
      const x = () => {
        ds(n, g, E), (a.value = !0);
      };
      (p.onAny = function (C) {
        for (
          var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), M = 1;
          M < w;
          M++
        )
          B[M - 1] = arguments[M];
        s(C, ...B);
      }),
        Object.assign(p.on, {
          _beforeBreakpoint: x,
          _containerClasses(C, w) {
            l.value = w;
          },
        });
      const I = { ...p };
      if (
        (delete I.wrapperClass,
        (d.value = new sn(I)),
        d.value.virtual && d.value.params.virtual.enabled)
      ) {
        d.value.virtual.slides = g.value;
        const C = {
          cache: !1,
          slides: g.value,
          renderExternal: (w) => {
            o.value = w;
          },
          renderExternalUpdate: !1,
        };
        nt(d.value.params.virtual, C), nt(d.value.originalParams.virtual, C);
      }
      cn(() => {
        !c.value && d.value && (d.value.emitSlidesClasses(), (c.value = !0));
        const { passedParams: C } = Qi(t, !1),
          w = Nf(C, m.value, g.value, E.value, (B) => B.props && B.props.key);
        (m.value = C),
          (w.length || a.value) &&
            d.value &&
            !d.value.destroyed &&
            Ff({
              swiper: d.value,
              slides: g.value,
              passedParams: C,
              changedParams: w,
              nextEl: y.value,
              prevEl: _.value,
              scrollbarEl: u.value,
              paginationEl: b.value,
            }),
          (a.value = !1);
      }),
        Zs("swiper", d),
        Vt(o, () => {
          Cr(() => {
            $f(d.value);
          });
        }),
        on(() => {
          f.value &&
            (zf(
              {
                el: f.value,
                nextEl: y.value,
                prevEl: _.value,
                paginationEl: b.value,
                scrollbarEl: u.value,
                swiper: d.value,
              },
              p
            ),
            s("swiper", d.value));
        }),
        fn(() => {
          d.value && !d.value.destroyed && d.value.destroy(!0, !1);
        });
      function L(C) {
        return p.virtual
          ? Rf(d, C, o.value)
          : (C.forEach((w, B) => {
              w.props || (w.props = {}),
                (w.props.swiperRef = d),
                (w.props.swiperSlideIndex = B);
            }),
            C);
      }
      return () => {
        const { slides: C, slots: w } = ds(n, g, E);
        return Oe(i, { ref: f, class: Pl(l.value) }, [
          w["container-start"],
          Oe(r, { class: Df(p.wrapperClass) }, [
            w["wrapper-start"],
            L(C),
            w["wrapper-end"],
          ]),
          El(t) && [
            Oe("div", { ref: _, class: "swiper-button-prev" }),
            Oe("div", { ref: y, class: "swiper-button-next" }),
          ],
          _l(t) && Oe("div", { ref: u, class: "swiper-scrollbar" }),
          Cl(t) && Oe("div", { ref: b, class: "swiper-pagination" }),
          w["container-end"],
        ]);
      };
    },
  },
  Cu = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(t, e) {
      let { slots: n } = e,
        s = !1;
      const { swiperRef: i } = t,
        r = fe(null),
        l = fe("swiper-slide"),
        o = fe(!1);
      function a(d, m, g) {
        m === r.value && (l.value = g);
      }
      on(() => {
        !i || !i.value || (i.value.on("_slideClass", a), (s = !0));
      }),
        Nr(() => {
          s || !i || !i.value || (i.value.on("_slideClass", a), (s = !0));
        }),
        cn(() => {
          !r.value ||
            !i ||
            !i.value ||
            (typeof t.swiperSlideIndex < "u" &&
              (r.value.swiperSlideIndex = t.swiperSlideIndex),
            i.value.destroyed &&
              l.value !== "swiper-slide" &&
              (l.value = "swiper-slide"));
        }),
        fn(() => {
          !i || !i.value || i.value.off("_slideClass", a);
        });
      const c = rl(() => ({
        isActive: l.value.indexOf("swiper-slide-active") >= 0,
        isVisible: l.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: l.value.indexOf("swiper-slide-prev") >= 0,
        isNext: l.value.indexOf("swiper-slide-next") >= 0,
      }));
      Zs("swiperSlide", c);
      const f = () => {
        o.value = !0;
      };
      return () =>
        Oe(
          t.tag,
          {
            class: Pl(`${l.value}`),
            ref: r,
            "data-swiper-slide-index":
              typeof t.virtualIndex > "u" && i && i.value && i.value.params.loop
                ? t.swiperSlideIndex
                : t.virtualIndex,
            onLoadCapture: f,
          },
          t.zoom
            ? Oe(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof t.zoom == "number" ? t.zoom : void 0,
                },
                [
                  n.default && n.default(c.value),
                  t.lazy &&
                    !o.value &&
                    Oe("div", { class: "swiper-lazy-preloader" }),
                ]
              )
            : [
                n.default && n.default(c.value),
                t.lazy &&
                  !o.value &&
                  Oe("div", { class: "swiper-lazy-preloader" }),
              ]
        );
    },
  };
function _u(t) {
  let { swiper: e, extendParams: n, on: s, emit: i } = t;
  const r = ye();
  n({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel",
    },
  }),
    (e.mousewheel = { enabled: !1 });
  let l,
    o = qe(),
    a;
  const c = [];
  function f(p) {
    let L = 0,
      C = 0,
      w = 0,
      B = 0;
    return (
      "detail" in p && (C = p.detail),
      "wheelDelta" in p && (C = -p.wheelDelta / 120),
      "wheelDeltaY" in p && (C = -p.wheelDeltaY / 120),
      "wheelDeltaX" in p && (L = -p.wheelDeltaX / 120),
      "axis" in p && p.axis === p.HORIZONTAL_AXIS && ((L = C), (C = 0)),
      (w = L * 10),
      (B = C * 10),
      "deltaY" in p && (B = p.deltaY),
      "deltaX" in p && (w = p.deltaX),
      p.shiftKey && !w && ((w = B), (B = 0)),
      (w || B) &&
        p.deltaMode &&
        (p.deltaMode === 1 ? ((w *= 40), (B *= 40)) : ((w *= 800), (B *= 800))),
      w && !L && (L = w < 1 ? -1 : 1),
      B && !C && (C = B < 1 ? -1 : 1),
      { spinX: L, spinY: C, pixelX: w, pixelY: B }
    );
  }
  function d() {
    e.enabled && (e.mouseEntered = !0);
  }
  function m() {
    e.enabled && (e.mouseEntered = !1);
  }
  function g(p) {
    return (e.params.mousewheel.thresholdDelta &&
      p.delta < e.params.mousewheel.thresholdDelta) ||
      (e.params.mousewheel.thresholdTime &&
        qe() - o < e.params.mousewheel.thresholdTime)
      ? !1
      : p.delta >= 6 && qe() - o < 60
      ? !0
      : (p.direction < 0
          ? (!e.isEnd || e.params.loop) &&
            !e.animating &&
            (e.slideNext(), i("scroll", p.raw))
          : (!e.isBeginning || e.params.loop) &&
            !e.animating &&
            (e.slidePrev(), i("scroll", p.raw)),
        (o = new r.Date().getTime()),
        !1);
  }
  function E(p) {
    const h = e.params.mousewheel;
    if (p.direction < 0) {
      if (e.isEnd && !e.params.loop && h.releaseOnEdges) return !0;
    } else if (e.isBeginning && !e.params.loop && h.releaseOnEdges) return !0;
    return !1;
  }
  function y(p) {
    let h = p,
      x = !0;
    if (
      !e.enabled ||
      p.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
    )
      return;
    const I = e.params.mousewheel;
    e.params.cssMode && h.preventDefault();
    let L = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (L = document.querySelector(e.params.mousewheel.eventsTarget));
    const C = L && L.contains(h.target);
    if (!e.mouseEntered && !C && !I.releaseOnEdges) return !0;
    h.originalEvent && (h = h.originalEvent);
    let w = 0;
    const B = e.rtlTranslate ? -1 : 1,
      M = f(h);
    if (I.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(M.pixelX) > Math.abs(M.pixelY)) w = -M.pixelX * B;
        else return !0;
      else if (Math.abs(M.pixelY) > Math.abs(M.pixelX)) w = -M.pixelY;
      else return !0;
    else
      w = Math.abs(M.pixelX) > Math.abs(M.pixelY) ? -M.pixelX * B : -M.pixelY;
    if (w === 0) return !0;
    I.invert && (w = -w);
    let S = e.getTranslate() + w * I.sensitivity;
    if (
      (S >= e.minTranslate() && (S = e.minTranslate()),
      S <= e.maxTranslate() && (S = e.maxTranslate()),
      (x = e.params.loop
        ? !0
        : !(S === e.minTranslate() || S === e.maxTranslate())),
      x && e.params.nested && h.stopPropagation(),
      !e.params.freeMode || !e.params.freeMode.enabled)
    ) {
      const P = {
        time: qe(),
        delta: Math.abs(w),
        direction: Math.sign(w),
        raw: p,
      };
      c.length >= 2 && c.shift();
      const O = c.length ? c[c.length - 1] : void 0;
      if (
        (c.push(P),
        O
          ? (P.direction !== O.direction ||
              P.delta > O.delta ||
              P.time > O.time + 150) &&
            g(P)
          : g(P),
        E(P))
      )
        return !0;
    } else {
      const P = { time: qe(), delta: Math.abs(w), direction: Math.sign(w) },
        O =
          a &&
          P.time < a.time + 500 &&
          P.delta <= a.delta &&
          P.direction === a.direction;
      if (!O) {
        a = void 0;
        let R = e.getTranslate() + w * I.sensitivity;
        const k = e.isBeginning,
          j = e.isEnd;
        if (
          (R >= e.minTranslate() && (R = e.minTranslate()),
          R <= e.maxTranslate() && (R = e.maxTranslate()),
          e.setTransition(0),
          e.setTranslate(R),
          e.updateProgress(),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          ((!k && e.isBeginning) || (!j && e.isEnd)) && e.updateSlidesClasses(),
          e.params.loop &&
            e.loopFix({
              direction: P.direction < 0 ? "next" : "prev",
              byMousewheel: !0,
            }),
          e.params.freeMode.sticky)
        ) {
          clearTimeout(l), (l = void 0), c.length >= 15 && c.shift();
          const K = c.length ? c[c.length - 1] : void 0,
            Y = c[0];
          if (
            (c.push(P), K && (P.delta > K.delta || P.direction !== K.direction))
          )
            c.splice(0);
          else if (
            c.length >= 15 &&
            P.time - Y.time < 500 &&
            Y.delta - P.delta >= 1 &&
            P.delta <= 6
          ) {
            const he = w > 0 ? 0.8 : 0.2;
            (a = P),
              c.splice(0),
              (l = It(() => {
                e.slideToClosest(e.params.speed, !0, void 0, he);
              }, 0));
          }
          l ||
            (l = It(() => {
              (a = P),
                c.splice(0),
                e.slideToClosest(e.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (O || i("scroll", h),
          e.params.autoplay &&
            e.params.autoplayDisableOnInteraction &&
            e.autoplay.stop(),
          R === e.minTranslate() || R === e.maxTranslate())
        )
          return !0;
      }
    }
    return h.preventDefault ? h.preventDefault() : (h.returnValue = !1), !1;
  }
  function _(p) {
    let h = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (h = document.querySelector(e.params.mousewheel.eventsTarget)),
      h[p]("mouseenter", d),
      h[p]("mouseleave", m),
      h[p]("wheel", y);
  }
  function b() {
    return e.params.cssMode
      ? (e.wrapperEl.removeEventListener("wheel", y), !0)
      : e.mousewheel.enabled
      ? !1
      : (_("addEventListener"), (e.mousewheel.enabled = !0), !0);
  }
  function u() {
    return e.params.cssMode
      ? (e.wrapperEl.addEventListener(event, y), !0)
      : e.mousewheel.enabled
      ? (_("removeEventListener"), (e.mousewheel.enabled = !1), !0)
      : !1;
  }
  s("init", () => {
    !e.params.mousewheel.enabled && e.params.cssMode && u(),
      e.params.mousewheel.enabled && b();
  }),
    s("destroy", () => {
      e.params.cssMode && b(), e.mousewheel.enabled && u();
    }),
    Object.assign(e.mousewheel, { enable: b, disable: u });
}
function li(t, e, n, s) {
  return (
    t.params.createElements &&
      Object.keys(s).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let r = He(t.el, `.${s[i]}`)[0];
          r || ((r = Kn("div", s[i])), (r.className = s[i]), t.el.append(r)),
            (n[i] = r),
            (e[i] = r);
        }
      }),
    n
  );
}
function Pu(t) {
  let { swiper: e, extendParams: n, on: s, emit: i } = t;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  const r = (y) => (Array.isArray(y) || (y = [y].filter((_) => !!_)), y);
  function l(y) {
    let _;
    return y &&
      typeof y == "string" &&
      e.isElement &&
      ((_ = e.el.querySelector(y)), _)
      ? _
      : (y &&
          (typeof y == "string" && (_ = [...document.querySelectorAll(y)]),
          e.params.uniqueNavElements &&
            typeof y == "string" &&
            _.length > 1 &&
            e.el.querySelectorAll(y).length === 1 &&
            (_ = e.el.querySelector(y))),
        y && !_ ? y : _);
  }
  function o(y, _) {
    const b = e.params.navigation;
    (y = r(y)),
      y.forEach((u) => {
        u &&
          (u.classList[_ ? "add" : "remove"](...b.disabledClass.split(" ")),
          u.tagName === "BUTTON" && (u.disabled = _),
          e.params.watchOverflow &&
            e.enabled &&
            u.classList[e.isLocked ? "add" : "remove"](b.lockClass));
      });
  }
  function a() {
    const { nextEl: y, prevEl: _ } = e.navigation;
    if (e.params.loop) {
      o(_, !1), o(y, !1);
      return;
    }
    o(_, e.isBeginning && !e.params.rewind), o(y, e.isEnd && !e.params.rewind);
  }
  function c(y) {
    y.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), i("navigationPrev"));
  }
  function f(y) {
    y.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), i("navigationNext"));
  }
  function d() {
    const y = e.params.navigation;
    if (
      ((e.params.navigation = li(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(y.nextEl || y.prevEl))
    )
      return;
    let _ = l(y.nextEl),
      b = l(y.prevEl);
    Object.assign(e.navigation, { nextEl: _, prevEl: b }),
      (_ = r(_)),
      (b = r(b));
    const u = (p, h) => {
      p && p.addEventListener("click", h === "next" ? f : c),
        !e.enabled && p && p.classList.add(...y.lockClass.split(" "));
    };
    _.forEach((p) => u(p, "next")), b.forEach((p) => u(p, "prev"));
  }
  function m() {
    let { nextEl: y, prevEl: _ } = e.navigation;
    (y = r(y)), (_ = r(_));
    const b = (u, p) => {
      u.removeEventListener("click", p === "next" ? f : c),
        u.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    y.forEach((u) => b(u, "next")), _.forEach((u) => b(u, "prev"));
  }
  s("init", () => {
    e.params.navigation.enabled === !1 ? E() : (d(), a());
  }),
    s("toEdge fromEdge lock unlock", () => {
      a();
    }),
    s("destroy", () => {
      m();
    }),
    s("enable disable", () => {
      let { nextEl: y, prevEl: _ } = e.navigation;
      (y = r(y)),
        (_ = r(_)),
        [...y, ..._]
          .filter((b) => !!b)
          .forEach((b) =>
            b.classList[e.enabled ? "remove" : "add"](
              e.params.navigation.lockClass
            )
          );
    }),
    s("click", (y, _) => {
      let { nextEl: b, prevEl: u } = e.navigation;
      (b = r(b)), (u = r(u));
      const p = _.target;
      if (e.params.navigation.hideOnClick && !u.includes(p) && !b.includes(p)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === p || e.pagination.el.contains(p))
        )
          return;
        let h;
        b.length
          ? (h = b[0].classList.contains(e.params.navigation.hiddenClass))
          : u.length &&
            (h = u[0].classList.contains(e.params.navigation.hiddenClass)),
          i(h === !0 ? "navigationShow" : "navigationHide"),
          [...b, ...u]
            .filter((x) => !!x)
            .forEach((x) =>
              x.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const g = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        d(),
        a();
    },
    E = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        m();
    };
  Object.assign(e.navigation, {
    enable: g,
    disable: E,
    update: a,
    init: d,
    destroy: m,
  });
}
function $t(t) {
  return (
    t === void 0 && (t = ""),
    `.${t
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function Mu(t) {
  let { swiper: e, extendParams: n, on: s, emit: i } = t;
  const r = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (u) => u,
      formatFractionTotal: (u) => u,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let l,
    o = 0;
  const a = (u) => (Array.isArray(u) || (u = [u].filter((p) => !!p)), u);
  function c() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function f(u, p) {
    const { bulletActiveClass: h } = e.params.pagination;
    u &&
      ((u = u[`${p === "prev" ? "previous" : "next"}ElementSibling`]),
      u &&
        (u.classList.add(`${h}-${p}`),
        (u = u[`${p === "prev" ? "previous" : "next"}ElementSibling`]),
        u && u.classList.add(`${h}-${p}-${p}`)));
  }
  function d(u) {
    const p = u.target.closest($t(e.params.pagination.bulletClass));
    if (!p) return;
    u.preventDefault();
    const h = zn(p) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === h) return;
      const x = e.getSlideIndexByData(h),
        I = e.getSlideIndexByData(e.realIndex);
      x > e.slides.length - e.loopedSlides &&
        e.loopFix({
          direction: x > I ? "next" : "prev",
          activeSlideIndex: x,
          slideTo: !1,
        }),
        e.slideToLoop(h);
    } else e.slideTo(h);
  }
  function m() {
    const u = e.rtl,
      p = e.params.pagination;
    if (c()) return;
    let h = e.pagination.el;
    h = a(h);
    let x, I;
    const L =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      C = e.params.loop
        ? Math.ceil(L / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((I = e.previousRealIndex || 0),
          (x =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < "u"
        ? ((x = e.snapIndex), (I = e.previousSnapIndex))
        : ((I = e.previousIndex || 0), (x = e.activeIndex || 0)),
      p.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const w = e.pagination.bullets;
      let B, M, S;
      if (
        (p.dynamicBullets &&
          ((l = _s(w[0], e.isHorizontal() ? "width" : "height", !0)),
          h.forEach((P) => {
            P.style[e.isHorizontal() ? "width" : "height"] = `${
              l * (p.dynamicMainBullets + 4)
            }px`;
          }),
          p.dynamicMainBullets > 1 &&
            I !== void 0 &&
            ((o += x - (I || 0)),
            o > p.dynamicMainBullets - 1
              ? (o = p.dynamicMainBullets - 1)
              : o < 0 && (o = 0)),
          (B = Math.max(x - o, 0)),
          (M = B + (Math.min(w.length, p.dynamicMainBullets) - 1)),
          (S = (M + B) / 2)),
        w.forEach((P) => {
          const O = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (R) => `${p.bulletActiveClass}${R}`
            ),
          ]
            .map((R) =>
              typeof R == "string" && R.includes(" ") ? R.split(" ") : R
            )
            .flat();
          P.classList.remove(...O);
        }),
        h.length > 1)
      )
        w.forEach((P) => {
          const O = zn(P);
          O === x
            ? P.classList.add(...p.bulletActiveClass.split(" "))
            : e.isElement && P.setAttribute("part", "bullet"),
            p.dynamicBullets &&
              (O >= B &&
                O <= M &&
                P.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),
              O === B && f(P, "prev"),
              O === M && f(P, "next"));
        });
      else {
        const P = w[x];
        if (
          (P && P.classList.add(...p.bulletActiveClass.split(" ")),
          e.isElement &&
            w.forEach((O, R) => {
              O.setAttribute("part", R === x ? "bullet-active" : "bullet");
            }),
          p.dynamicBullets)
        ) {
          const O = w[B],
            R = w[M];
          for (let k = B; k <= M; k += 1)
            w[k] &&
              w[k].classList.add(...`${p.bulletActiveClass}-main`.split(" "));
          f(O, "prev"), f(R, "next");
        }
      }
      if (p.dynamicBullets) {
        const P = Math.min(w.length, p.dynamicMainBullets + 4),
          O = (l * P - l) / 2 - S * l,
          R = u ? "right" : "left";
        w.forEach((k) => {
          k.style[e.isHorizontal() ? R : "top"] = `${O}px`;
        });
      }
    }
    h.forEach((w, B) => {
      if (
        (p.type === "fraction" &&
          (w.querySelectorAll($t(p.currentClass)).forEach((M) => {
            M.textContent = p.formatFractionCurrent(x + 1);
          }),
          w.querySelectorAll($t(p.totalClass)).forEach((M) => {
            M.textContent = p.formatFractionTotal(C);
          })),
        p.type === "progressbar")
      ) {
        let M;
        p.progressbarOpposite
          ? (M = e.isHorizontal() ? "vertical" : "horizontal")
          : (M = e.isHorizontal() ? "horizontal" : "vertical");
        const S = (x + 1) / C;
        let P = 1,
          O = 1;
        M === "horizontal" ? (P = S) : (O = S),
          w.querySelectorAll($t(p.progressbarFillClass)).forEach((R) => {
            (R.style.transform = `translate3d(0,0,0) scaleX(${P}) scaleY(${O})`),
              (R.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      p.type === "custom" && p.renderCustom
        ? ((w.innerHTML = p.renderCustom(e, x + 1, C)),
          B === 0 && i("paginationRender", w))
        : (B === 0 && i("paginationRender", w), i("paginationUpdate", w)),
        e.params.watchOverflow &&
          e.enabled &&
          w.classList[e.isLocked ? "add" : "remove"](p.lockClass);
    });
  }
  function g() {
    const u = e.params.pagination;
    if (c()) return;
    const p =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.slides.length;
    let h = e.pagination.el;
    h = a(h);
    let x = "";
    if (u.type === "bullets") {
      let I = e.params.loop
        ? Math.ceil(p / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && I > p && (I = p);
      for (let L = 0; L < I; L += 1)
        u.renderBullet
          ? (x += u.renderBullet.call(e, L, u.bulletClass))
          : (x += `<${u.bulletElement} ${
              e.isElement ? 'part="bullet"' : ""
            } class="${u.bulletClass}"></${u.bulletElement}>`);
    }
    u.type === "fraction" &&
      (u.renderFraction
        ? (x = u.renderFraction.call(e, u.currentClass, u.totalClass))
        : (x = `<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`)),
      u.type === "progressbar" &&
        (u.renderProgressbar
          ? (x = u.renderProgressbar.call(e, u.progressbarFillClass))
          : (x = `<span class="${u.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      h.forEach((I) => {
        u.type !== "custom" && (I.innerHTML = x || ""),
          u.type === "bullets" &&
            e.pagination.bullets.push(...I.querySelectorAll($t(u.bulletClass)));
      }),
      u.type !== "custom" && i("paginationRender", h[0]);
  }
  function E() {
    e.params.pagination = li(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const u = e.params.pagination;
    if (!u.el) return;
    let p;
    typeof u.el == "string" && e.isElement && (p = e.el.querySelector(u.el)),
      !p &&
        typeof u.el == "string" &&
        (p = [...document.querySelectorAll(u.el)]),
      p || (p = u.el),
      !(!p || p.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof u.el == "string" &&
          Array.isArray(p) &&
          p.length > 1 &&
          ((p = [...e.el.querySelectorAll(u.el)]),
          p.length > 1 &&
            (p = p.filter((h) => yl(h, ".swiper")[0] === e.el)[0])),
        Array.isArray(p) && p.length === 1 && (p = p[0]),
        Object.assign(e.pagination, { el: p }),
        (p = a(p)),
        p.forEach((h) => {
          u.type === "bullets" &&
            u.clickable &&
            h.classList.add(u.clickableClass),
            h.classList.add(u.modifierClass + u.type),
            h.classList.add(
              e.isHorizontal() ? u.horizontalClass : u.verticalClass
            ),
            u.type === "bullets" &&
              u.dynamicBullets &&
              (h.classList.add(`${u.modifierClass}${u.type}-dynamic`),
              (o = 0),
              u.dynamicMainBullets < 1 && (u.dynamicMainBullets = 1)),
            u.type === "progressbar" &&
              u.progressbarOpposite &&
              h.classList.add(u.progressbarOppositeClass),
            u.clickable && h.addEventListener("click", d),
            e.enabled || h.classList.add(u.lockClass);
        }));
  }
  function y() {
    const u = e.params.pagination;
    if (c()) return;
    let p = e.pagination.el;
    p &&
      ((p = a(p)),
      p.forEach((h) => {
        h.classList.remove(u.hiddenClass),
          h.classList.remove(u.modifierClass + u.type),
          h.classList.remove(
            e.isHorizontal() ? u.horizontalClass : u.verticalClass
          ),
          u.clickable && h.removeEventListener("click", d);
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((h) =>
          h.classList.remove(...u.bulletActiveClass.split(" "))
        );
  }
  s("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const u = e.params.pagination;
    let { el: p } = e.pagination;
    (p = a(p)),
      p.forEach((h) => {
        h.classList.remove(u.horizontalClass, u.verticalClass),
          h.classList.add(
            e.isHorizontal() ? u.horizontalClass : u.verticalClass
          );
      });
  }),
    s("init", () => {
      e.params.pagination.enabled === !1 ? b() : (E(), g(), m());
    }),
    s("activeIndexChange", () => {
      typeof e.snapIndex > "u" && m();
    }),
    s("snapIndexChange", () => {
      m();
    }),
    s("snapGridLengthChange", () => {
      g(), m();
    }),
    s("destroy", () => {
      y();
    }),
    s("enable disable", () => {
      let { el: u } = e.pagination;
      u &&
        ((u = a(u)),
        u.forEach((p) =>
          p.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass
          )
        ));
    }),
    s("lock unlock", () => {
      m();
    }),
    s("click", (u, p) => {
      const h = p.target,
        x = a(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        x &&
        x.length > 0 &&
        !h.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && h === e.navigation.nextEl) ||
            (e.navigation.prevEl && h === e.navigation.prevEl))
        )
          return;
        const I = x[0].classList.contains(e.params.pagination.hiddenClass);
        i(I === !0 ? "paginationShow" : "paginationHide"),
          x.forEach((L) => L.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const _ = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: u } = e.pagination;
      u &&
        ((u = a(u)),
        u.forEach((p) =>
          p.classList.remove(e.params.pagination.paginationDisabledClass)
        )),
        E(),
        g(),
        m();
    },
    b = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: u } = e.pagination;
      u &&
        ((u = a(u)),
        u.forEach((p) =>
          p.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        y();
    };
  Object.assign(e.pagination, {
    enable: _,
    disable: b,
    render: g,
    update: m,
    init: E,
    destroy: y,
  });
}
function Ou(t) {
  let { swiper: e, extendParams: n, on: s, emit: i } = t;
  const r = Ae();
  let l = !1,
    o = null,
    a = null,
    c,
    f,
    d,
    m;
  n({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical",
    },
  }),
    (e.scrollbar = { el: null, dragEl: null });
  function g() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: S, rtlTranslate: P } = e,
      { dragEl: O, el: R } = S,
      k = e.params.scrollbar,
      j = e.params.loop ? e.progressLoop : e.progress;
    let K = f,
      Y = (d - f) * j;
    P
      ? ((Y = -Y), Y > 0 ? ((K = f - Y), (Y = 0)) : -Y + f > d && (K = d + Y))
      : Y < 0
      ? ((K = f + Y), (Y = 0))
      : Y + f > d && (K = d - Y),
      e.isHorizontal()
        ? ((O.style.transform = `translate3d(${Y}px, 0, 0)`),
          (O.style.width = `${K}px`))
        : ((O.style.transform = `translate3d(0px, ${Y}px, 0)`),
          (O.style.height = `${K}px`)),
      k.hide &&
        (clearTimeout(o),
        (R.style.opacity = 1),
        (o = setTimeout(() => {
          (R.style.opacity = 0), (R.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  function E(S) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${S}ms`);
  }
  function y() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: S } = e,
      { dragEl: P, el: O } = S;
    (P.style.width = ""),
      (P.style.height = ""),
      (d = e.isHorizontal() ? O.offsetWidth : O.offsetHeight),
      (m =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (f = d * m)
        : (f = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (P.style.width = `${f}px`)
        : (P.style.height = `${f}px`),
      m >= 1 ? (O.style.display = "none") : (O.style.display = ""),
      e.params.scrollbar.hide && (O.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        S.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass
        );
  }
  function _(S) {
    return e.isHorizontal() ? S.clientX : S.clientY;
  }
  function b(S) {
    const { scrollbar: P, rtlTranslate: O } = e,
      { el: R } = P;
    let k;
    (k =
      (_(S) -
        yc(R)[e.isHorizontal() ? "left" : "top"] -
        (c !== null ? c : f / 2)) /
      (d - f)),
      (k = Math.max(Math.min(k, 1), 0)),
      O && (k = 1 - k);
    const j = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * k;
    e.updateProgress(j),
      e.setTranslate(j),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  function u(S) {
    const P = e.params.scrollbar,
      { scrollbar: O, wrapperEl: R } = e,
      { el: k, dragEl: j } = O;
    (l = !0),
      (c =
        S.target === j
          ? _(S) -
            S.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      S.preventDefault(),
      S.stopPropagation(),
      (R.style.transitionDuration = "100ms"),
      (j.style.transitionDuration = "100ms"),
      b(S),
      clearTimeout(a),
      (k.style.transitionDuration = "0ms"),
      P.hide && (k.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      i("scrollbarDragStart", S);
  }
  function p(S) {
    const { scrollbar: P, wrapperEl: O } = e,
      { el: R, dragEl: k } = P;
    l &&
      (S.preventDefault ? S.preventDefault() : (S.returnValue = !1),
      b(S),
      (O.style.transitionDuration = "0ms"),
      (R.style.transitionDuration = "0ms"),
      (k.style.transitionDuration = "0ms"),
      i("scrollbarDragMove", S));
  }
  function h(S) {
    const P = e.params.scrollbar,
      { scrollbar: O, wrapperEl: R } = e,
      { el: k } = O;
    l &&
      ((l = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (R.style.transitionDuration = "")),
      P.hide &&
        (clearTimeout(a),
        (a = It(() => {
          (k.style.opacity = 0), (k.style.transitionDuration = "400ms");
        }, 1e3))),
      i("scrollbarDragEnd", S),
      P.snapOnRelease && e.slideToClosest());
  }
  function x(S) {
    const { scrollbar: P, params: O } = e,
      R = P.el;
    if (!R) return;
    const k = R,
      j = O.passiveListeners ? { passive: !1, capture: !1 } : !1,
      K = O.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!k) return;
    const Y = S === "on" ? "addEventListener" : "removeEventListener";
    k[Y]("pointerdown", u, j),
      r[Y]("pointermove", p, j),
      r[Y]("pointerup", h, K);
  }
  function I() {
    !e.params.scrollbar.el || !e.scrollbar.el || x("on");
  }
  function L() {
    !e.params.scrollbar.el || !e.scrollbar.el || x("off");
  }
  function C() {
    const { scrollbar: S, el: P } = e;
    e.params.scrollbar = li(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const O = e.params.scrollbar;
    if (!O.el) return;
    let R;
    typeof O.el == "string" && e.isElement && (R = e.el.querySelector(O.el)),
      !R && typeof O.el == "string"
        ? (R = r.querySelectorAll(O.el))
        : R || (R = O.el),
      e.params.uniqueNavElements &&
        typeof O.el == "string" &&
        R.length > 1 &&
        P.querySelectorAll(O.el).length === 1 &&
        (R = P.querySelector(O.el)),
      R.length > 0 && (R = R[0]),
      R.classList.add(e.isHorizontal() ? O.horizontalClass : O.verticalClass);
    let k;
    R &&
      ((k = R.querySelector(`.${e.params.scrollbar.dragClass}`)),
      k || ((k = Kn("div", e.params.scrollbar.dragClass)), R.append(k))),
      Object.assign(S, { el: R, dragEl: k }),
      O.draggable && I(),
      R &&
        R.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass);
  }
  function w() {
    const S = e.params.scrollbar,
      P = e.scrollbar.el;
    P &&
      P.classList.remove(
        e.isHorizontal() ? S.horizontalClass : S.verticalClass
      ),
      L();
  }
  s("init", () => {
    e.params.scrollbar.enabled === !1 ? M() : (C(), y(), g());
  }),
    s("update resize observerUpdate lock unlock", () => {
      y();
    }),
    s("setTranslate", () => {
      g();
    }),
    s("setTransition", (S, P) => {
      E(P);
    }),
    s("enable disable", () => {
      const { el: S } = e.scrollbar;
      S &&
        S.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass);
    }),
    s("destroy", () => {
      w();
    });
  const B = () => {
      e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            e.params.scrollbar.scrollbarDisabledClass
          ),
        C(),
        y(),
        g();
    },
    M = () => {
      e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            e.params.scrollbar.scrollbarDisabledClass
          ),
        w();
    };
  Object.assign(e.scrollbar, {
    enable: B,
    disable: M,
    updateSize: y,
    setTranslate: g,
    init: C,
    destroy: w,
  });
}
function Lu(t) {
  let { swiper: e, extendParams: n, on: s, emit: i, params: r } = t;
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let l,
    o,
    a = r && r.autoplay ? r.autoplay.delay : 3e3,
    c = r && r.autoplay ? r.autoplay.delay : 3e3,
    f,
    d = new Date().getTime,
    m,
    g,
    E,
    y,
    _,
    b;
  function u(j) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (j.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", u), w()));
  }
  const p = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (m = !0) : m && ((c = f), (m = !1));
      const j = e.autoplay.paused ? f : d + c - new Date().getTime();
      (e.autoplay.timeLeft = j),
        i("autoplayTimeLeft", j, j / a),
        (o = requestAnimationFrame(() => {
          p();
        }));
    },
    h = () => {
      let j;
      return (
        e.virtual && e.params.virtual.enabled
          ? (j = e.slides.filter((Y) =>
              Y.classList.contains("swiper-slide-active")
            )[0])
          : (j = e.slides[e.activeIndex]),
        j ? parseInt(j.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    x = (j) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(o), p();
      let K = typeof j > "u" ? e.params.autoplay.delay : j;
      (a = e.params.autoplay.delay), (c = e.params.autoplay.delay);
      const Y = h();
      !Number.isNaN(Y) &&
        Y > 0 &&
        typeof j > "u" &&
        ((K = Y), (a = Y), (c = Y)),
        (f = K);
      const he = e.params.speed,
        xe = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(he, !0, !0), i("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, he, !0, !0), i("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(he, !0, !0), i("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, he, !0, !0), i("autoplay")),
            e.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                x();
              })));
        };
      return (
        K > 0
          ? (clearTimeout(l),
            (l = setTimeout(() => {
              xe();
            }, K)))
          : requestAnimationFrame(() => {
              xe();
            }),
        K
      );
    },
    I = () => {
      (e.autoplay.running = !0), x(), i("autoplayStart");
    },
    L = () => {
      (e.autoplay.running = !1),
        clearTimeout(l),
        cancelAnimationFrame(o),
        i("autoplayStop");
    },
    C = (j, K) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(l), j || (b = !0);
      const Y = () => {
        i("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", u)
            : w();
      };
      if (((e.autoplay.paused = !0), K)) {
        _ && (f = e.params.autoplay.delay), (_ = !1), Y();
        return;
      }
      (f = (f || e.params.autoplay.delay) - (new Date().getTime() - d)),
        !(e.isEnd && f < 0 && !e.params.loop) && (f < 0 && (f = 0), Y());
    },
    w = () => {
      (e.isEnd && f < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((d = new Date().getTime()),
        b ? ((b = !1), x(f)) : x(),
        (e.autoplay.paused = !1),
        i("autoplayResume"));
    },
    B = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const j = Ae();
      j.visibilityState === "hidden" && ((b = !0), C(!0)),
        j.visibilityState === "visible" && w();
    },
    M = (j) => {
      j.pointerType === "mouse" && ((b = !0), C(!0));
    },
    S = (j) => {
      j.pointerType === "mouse" && e.autoplay.paused && w();
    },
    P = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", M),
        e.el.addEventListener("pointerleave", S));
    },
    O = () => {
      e.el.removeEventListener("pointerenter", M),
        e.el.removeEventListener("pointerleave", S);
    },
    R = () => {
      Ae().addEventListener("visibilitychange", B);
    },
    k = () => {
      Ae().removeEventListener("visibilitychange", B);
    };
  s("init", () => {
    e.params.autoplay.enabled && (P(), R(), (d = new Date().getTime()), I());
  }),
    s("destroy", () => {
      O(), k(), e.autoplay.running && L();
    }),
    s("beforeTransitionStart", (j, K, Y) => {
      e.destroyed ||
        !e.autoplay.running ||
        (Y || !e.params.autoplay.disableOnInteraction ? C(!0, !0) : L());
    }),
    s("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          L();
          return;
        }
        (g = !0),
          (E = !1),
          (b = !1),
          (y = setTimeout(() => {
            (b = !0), (E = !0), C(!0);
          }, 200));
      }
    }),
    s("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !g)) {
        if (
          (clearTimeout(y),
          clearTimeout(l),
          e.params.autoplay.disableOnInteraction)
        ) {
          (E = !1), (g = !1);
          return;
        }
        E && e.params.cssMode && w(), (E = !1), (g = !1);
      }
    }),
    s("slideChange", () => {
      e.destroyed || !e.autoplay.running || (_ = !0);
    }),
    Object.assign(e.autoplay, { start: I, stop: L, pause: C, resume: w });
}
function Hf(t) {
  const {
    effect: e,
    swiper: n,
    on: s,
    setTranslate: i,
    setTransition: r,
    overwriteParams: l,
    perspective: o,
    recreateShadows: a,
    getEffectParams: c,
  } = t;
  s("beforeInit", () => {
    if (n.params.effect !== e) return;
    n.classNames.push(`${n.params.containerModifierClass}${e}`),
      o && o() && n.classNames.push(`${n.params.containerModifierClass}3d`);
    const d = l ? l() : {};
    Object.assign(n.params, d), Object.assign(n.originalParams, d);
  }),
    s("setTranslate", () => {
      n.params.effect === e && i();
    }),
    s("setTransition", (d, m) => {
      n.params.effect === e && r(m);
    }),
    s("transitionEnd", () => {
      if (n.params.effect === e && a) {
        if (!c || !c().slideShadows) return;
        n.slides.forEach((d) => {
          d.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          ).forEach((m) => m.remove());
        }),
          a();
      }
    });
  let f;
  s("virtualUpdate", () => {
    n.params.effect === e &&
      (n.slides.length || (f = !0),
      requestAnimationFrame(() => {
        f && n.slides && n.slides.length && (i(), (f = !1));
      }));
  });
}
function kf(t, e) {
  const n = ri(e);
  return (
    n !== e &&
      ((n.style.backfaceVisibility = "hidden"),
      (n.style["-webkit-backface-visibility"] = "hidden")),
    n
  );
}
function er(t, e, n) {
  const s = `swiper-slide-shadow${n ? `-${n}` : ""}${
      t ? ` swiper-slide-shadow-${t}` : ""
    }`,
    i = ri(e);
  let r = i.querySelector(`.${s.split(" ").join(".")}`);
  return r || ((r = Kn("div", s.split(" "))), i.append(r)), r;
}
function Iu(t) {
  let { swiper: e, extendParams: n, on: s } = t;
  n({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0,
    },
  }),
    Hf({
      effect: "coverflow",
      swiper: e,
      on: s,
      setTranslate: () => {
        const { width: l, height: o, slides: a, slidesSizesGrid: c } = e,
          f = e.params.coverflowEffect,
          d = e.isHorizontal(),
          m = e.translate,
          g = d ? -m + l / 2 : -m + o / 2,
          E = d ? f.rotate : -f.rotate,
          y = f.depth;
        for (let _ = 0, b = a.length; _ < b; _ += 1) {
          const u = a[_],
            p = c[_],
            h = u.swiperSlideOffset,
            x = (g - h - p / 2) / p,
            I =
              typeof f.modifier == "function" ? f.modifier(x) : x * f.modifier;
          let L = d ? E * I : 0,
            C = d ? 0 : E * I,
            w = -y * Math.abs(I),
            B = f.stretch;
          typeof B == "string" &&
            B.indexOf("%") !== -1 &&
            (B = (parseFloat(f.stretch) / 100) * p);
          let M = d ? 0 : B * I,
            S = d ? B * I : 0,
            P = 1 - (1 - f.scale) * Math.abs(I);
          Math.abs(S) < 0.001 && (S = 0),
            Math.abs(M) < 0.001 && (M = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(L) < 0.001 && (L = 0),
            Math.abs(C) < 0.001 && (C = 0),
            Math.abs(P) < 0.001 && (P = 0);
          const O = `translate3d(${S}px,${M}px,${w}px)  rotateX(${C}deg) rotateY(${L}deg) scale(${P})`,
            R = kf(f, u);
          if (
            ((R.style.transform = O),
            (u.style.zIndex = -Math.abs(Math.round(I)) + 1),
            f.slideShadows)
          ) {
            let k = d
                ? u.querySelector(".swiper-slide-shadow-left")
                : u.querySelector(".swiper-slide-shadow-top"),
              j = d
                ? u.querySelector(".swiper-slide-shadow-right")
                : u.querySelector(".swiper-slide-shadow-bottom");
            k || (k = er("coverflow", u, d ? "left" : "top")),
              j || (j = er("coverflow", u, d ? "right" : "bottom")),
              k && (k.style.opacity = I > 0 ? I : 0),
              j && (j.style.opacity = -I > 0 ? -I : 0);
          }
        }
      },
      setTransition: (l) => {
        e.slides
          .map((a) => ri(a))
          .forEach((a) => {
            (a.style.transitionDuration = `${l}ms`),
              a
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((c) => {
                  c.style.transitionDuration = `${l}ms`;
                });
          });
      },
      perspective: () => !0,
      overwriteParams: () => ({ watchSlidesProgress: !0 }),
    });
}
export {
  su as $,
  Qa as A,
  Wl as B,
  Wf as C,
  br as D,
  Uf as E,
  ve as F,
  Q as G,
  Ct as H,
  Ot as I,
  be as J,
  ll as K,
  cn as L,
  pu as M,
  vu as N,
  Tu as O,
  Kf as P,
  ti as Q,
  hu as R,
  Ba as S,
  Pt as T,
  Mo as U,
  ou as V,
  tl as W,
  Gf as X,
  el as Y,
  Hn as Z,
  gu as _,
  fe as a,
  Zr as a0,
  Rn as a1,
  lu as a2,
  bu as a3,
  jf as a4,
  Po as a5,
  yu as a6,
  eu as a7,
  iu as a8,
  ru as a9,
  cu as aa,
  xu as ab,
  nu as ac,
  Zf as ad,
  mu as ae,
  tu as af,
  no as ag,
  Su as ah,
  Xf as ai,
  Jf as aj,
  wu as ak,
  uu as al,
  Pu as am,
  Mu as an,
  Lu as ao,
  Cu as ap,
  Eu as aq,
  yr as ar,
  au as as,
  Nr as at,
  Ke as au,
  fu as av,
  wr as aw,
  Iu as ax,
  Ou as ay,
  _u as az,
  Vt as b,
  Xa as c,
  Ya as d,
  ue as e,
  ya as f,
  un as g,
  du as h,
  _n as i,
  Ua as j,
  rl as k,
  Oe as l,
  Za as m,
  Cr as n,
  fn as o,
  Zs as p,
  $r as q,
  Rs as r,
  qf as s,
  Yf as t,
  Ta as u,
  $o as v,
  Qf as w,
  Vf as x,
  on as y,
  le as z,
};
