import { _ as w } from "./client-only.42178d49.js";
import {
  Y as P,
  c0 as T,
  c1 as V,
  c2 as x,
  H as z,
  L as D,
  a3 as A,
  N as G,
  J as H,
  S as L,
  _ as Q,
} from "./entry.8aa394d7.js";
import {
  a as E,
  k as u,
  b as B,
  j as U,
  Q as j,
  R as y,
  V as b,
  Y as k,
  F as Y,
  a2 as W,
  Z as q,
  u as a,
  X as J,
  z as N,
  S as X,
  e as Z,
  _ as C,
} from "./swiper-vue.d5cda4d1.js";
import { _ as K } from "./index.9e7cd0be.js";
const ee = () => {
    const I = P("listMajors", () => E([])),
      r = P("majorDetail", () => E(null)),
      h = E(!1),
      l = u(() => (i) => {
        var e;
        return (
          (((e = r.value) == null ? void 0 : e.majorSections) || []).find(
            (o) => o.type === i
          ) || null
        );
      }),
      d = u(() => l.value(T.CAREER_PROSPECTS)),
      m = u(() => l.value(T.CAREER_OPPORTUNITIES)),
      v = u(() => l.value(T.THE_DIFFERENCE)),
      M = u(() => l.value(T.STUDY_PROGRAM)),
      $ = u(() => l.value(T.REGISTRATION)),
      _ = u(() => {
        var i;
        return (i = r == null ? void 0 : r.value) == null ? void 0 : i.metadata;
      });
    return {
      loadingData: h,
      listMajors: I,
      careerProspects: d,
      careerOpportunities: m,
      specializedTraining: v,
      curriculum: M,
      registration: $,
      metaData: _,
      majorDetail: r,
      getMajors: (i) => {
        const { loading: e, onResult: o } = V({ trainingProgramId: i });
        B(
          e,
          (s) => {
            h.value = s;
          },
          { immediate: !0 }
        ),
          o((s) => {
            s.data.majors && (I.value = s.data.majors);
          });
      },
      getMajorDetail: (i, e) => {
        const o = { alias: i, trainingProgramAlias: e };
        return new Promise((s, c) => {
          const { loading: f, onResult: g, onError: S } = x({ input: o });
          B(
            f,
            (n) => {
              h.value = n;
            },
            { immediate: !0 }
          ),
            S((n) => {
              c(n);
            }),
            g((n) => {
              var R, t;
              (R = n.data) != null &&
                R.getMajorByAlias &&
                (r.value = n.data.getMajorByAlias),
                s(
                  (t = n == null ? void 0 : n.data) == null
                    ? void 0
                    : t.getMajorByAlias
                );
            });
        });
      },
    };
  },
  te = ee,
  ae = { class: "hidden lg:block tab-list-container container" },
  oe = { class: "hidden lg:flex tab-list flex-wrap justify-center" },
  se = ["onClick"],
  ne = { class: "block lg:hidden" },
  le = U({
    __name: "Detail",
    setup(I) {
      const r = z(),
        {
          getMajorDetail: h,
          careerOpportunities: l,
          careerProspects: d,
          curriculum: m,
          specializedTraining: v,
          registration: M,
          metaData: $,
        } = te(),
        _ = E("section-1"),
        O = u(() => {
          var o, s, c, f, g;
          return [
            {
              label: D(d == null ? void 0 : d.value, "name"),
              value: "section-1",
              hidden: A((o = d.value) == null ? void 0 : o.description),
            },
            {
              label: D(l == null ? void 0 : l.value, "name"),
              value: "section-2",
              hidden: A(l.value),
            },
            {
              label: D(v == null ? void 0 : v.value, "name"),
              value: "section-3",
              hidden: !(
                (c = (s = v.value) == null ? void 0 : s.majorSectionItems) !=
                  null && c.length
              ),
            },
            {
              label: D(m == null ? void 0 : m.value, "name"),
              value: "section-4",
              hidden: !(
                (g = (f = m.value) == null ? void 0 : f.majorSectionItems) !=
                  null && g.length
              ),
            },
            {
              label: D(M == null ? void 0 : M.value, "name"),
              value: "section-5",
            },
          ].filter((S) => !S.hidden);
        }),
        p = E({});
      G(async () => {
        var s, c;
        const e = (s = r.params) == null ? void 0 : s.slug,
          o = (c = r.query) == null ? void 0 : c.program;
        e && o && (await h(e, o), H($.value));
      }, "$e5Hm1TVFTW");
      const i = (e) => {
        L(p.value[e].offsetTop, 140), (_.value = e);
      };
      return (e, o) => {
        var f, g, S, n, R;
        const s = K,
          c = w;
        return (
          j(),
          y("div", null, [
            b(e.$slots, "banner", {}, void 0, !0),
            k("div", ae, [
              k("div", oe, [
                (j(!0),
                y(
                  Y,
                  null,
                  W(
                    a(O),
                    (t, F) => (
                      j(),
                      y(
                        "p",
                        {
                          key: F,
                          class: q([
                            "tab-item mb-0",
                            { active: t.value === a(_) },
                          ]),
                          onClick: (re) => i(t.value),
                        },
                        J(t.label),
                        11,
                        se
                      )
                    )
                  ),
                  128
                )),
              ]),
              k("div", ne, [
                N(c, null, {
                  default: X(() => [
                    N(
                      s,
                      {
                        value: a(_),
                        "onUpdate:value":
                          o[0] || (o[0] = (t) => (Z(_) ? (_.value = t) : null)),
                        bordered: !1,
                        options: a(O),
                      },
                      null,
                      8,
                      ["value", "options"]
                    ),
                  ]),
                  _: 1,
                }),
              ]),
            ]),
            a(A)((f = a(d)) == null ? void 0 : f.description)
              ? C("", !0)
              : (j(),
                y(
                  "div",
                  {
                    key: 0,
                    ref: (t) => {
                      a(p)["section-1"] = t;
                    },
                  },
                  [b(e.$slots, "careerProspects", {}, void 0, !0)],
                  512
                )),
            a(A)(a(l))
              ? C("", !0)
              : (j(),
                y(
                  "div",
                  {
                    key: 1,
                    ref: (t) => {
                      a(p)["section-2"] = t;
                    },
                  },
                  [b(e.$slots, "careerOpportunities", {}, void 0, !0)],
                  512
                )),
            (S = (g = a(v)) == null ? void 0 : g.majorSectionItems) != null &&
            S.length
              ? (j(),
                y(
                  "div",
                  {
                    key: 2,
                    ref: (t) => {
                      a(p)["section-3"] = t;
                    },
                  },
                  [b(e.$slots, "specializedTraining", {}, void 0, !0)],
                  512
                ))
              : C("", !0),
            (R = (n = a(m)) == null ? void 0 : n.majorSectionItems) != null &&
            R.length
              ? (j(),
                y(
                  "div",
                  {
                    key: 3,
                    ref: (t) => {
                      a(p)["section-4"] = t;
                    },
                  },
                  [b(e.$slots, "curriculum", {}, void 0, !0)],
                  512
                ))
              : C("", !0),
            k(
              "div",
              {
                ref: (t) => {
                  a(p)["section-5"] = t;
                },
              },
              [b(e.$slots, "register", {}, void 0, !0)],
              512
            ),
          ])
        );
      };
    },
  });
const ie = Q(le, [["__scopeId", "data-v-20dd1446"]]),
  ve = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ie },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { ve as D, ie as _, te as u };
