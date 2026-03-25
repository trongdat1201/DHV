import { bL as E, bM as L, bN as W } from "./entry.8aa394d7.js";
import { o as P } from "./omitBy.06454d55.js";
import { a as e, ar as O } from "./swiper-vue.d5cda4d1.js";
const R = () => {
    const b = e([]),
      p = e([]),
      y = e([]),
      C = e(),
      I = e(),
      l = e(!1);
    return {
      activeArticleList: b,
      activeArticleListWithCursor: p,
      activeEventsInMonth: y,
      getActiveArticleList: (i = {}, n = { page: 1, take: 5 }) => {
        const c = e({
            filter: { ...P(i, (a) => a === null), sortBy: "-publicDate" },
            pagination: n,
          }),
          { refetch: o, onResult: s, variables: r } = E(c.value);
        return (
          s((a) => {
            var t, v, f, g, A, d;
            (l.value = a.loading),
              (t = a == null ? void 0 : a.data) != null &&
                t.publicArticleOffsetPaginated &&
                ((b.value =
                  (g =
                    (f =
                      (v = a == null ? void 0 : a.data) == null
                        ? void 0
                        : v.publicArticleOffsetPaginated) == null
                      ? void 0
                      : f.edges) == null
                    ? void 0
                    : g.map((h) => h.node)),
                (C.value =
                  (d =
                    (A = a == null ? void 0 : a.data) == null
                      ? void 0
                      : A.publicArticleOffsetPaginated) == null
                    ? void 0
                    : d.pageInfo));
          }),
          { refetch: o, offsetVariables: r }
        );
      },
      getActiveArticleListWithCursor: (i = {}, n = { take: 10, after: "" }) => {
        const c = e({ filter: { ...P(i, (t) => t === null) }, pagination: n }),
          {
            refetch: o,
            onResult: s,
            variables: r,
          } = L(c.value, {
            fetchPolicy: "no-cache",
            notifyOnNetworkStatusChange: !0,
          }),
          a = async () => {
            await o();
          };
        return (
          s((t) => {
            var v, f, g, A, d, h, m, M;
            (l.value = t == null ? void 0 : t.loading),
              !O(t.data) &&
                (g =
                  (f =
                    (v = t == null ? void 0 : t.data) == null
                      ? void 0
                      : v.publicArticleCursorPaginated) == null
                    ? void 0
                    : f.edges) != null &&
                g.length &&
                (p.value = p.value.concat(
                  (h =
                    (d =
                      (A = t == null ? void 0 : t.data) == null
                        ? void 0
                        : A.publicArticleCursorPaginated) == null
                      ? void 0
                      : d.edges) == null
                    ? void 0
                    : h.map((u) => u.node)
                )),
              (I.value =
                (M =
                  (m = t == null ? void 0 : t.data) == null
                    ? void 0
                    : m.publicArticleCursorPaginated) == null
                  ? void 0
                  : M.pageInfo);
          }),
          { fetchCursorPaginationArticles: a, cursorVariables: r }
        );
      },
      getActiveEventsInMonth: (i, n) => {
        const {
            onResult: c,
            refetch: o,
            variables: s,
          } = W({ month: i, year: n }),
          r = async (a) => {
            await o(a);
          };
        return (
          c((a) => {
            var t;
            (t = a == null ? void 0 : a.data) != null &&
              t.getEventsInMonth &&
              (y.value = a.data.getEventsInMonth);
          }),
          { fetchActiveEventsInMonth: r, activeInMonthVariables: s }
        );
      },
      paginationData: C,
      paginationDataWithCursor: I,
      loadingRef: l,
    };
  },
  x = R;
export { x as u };
