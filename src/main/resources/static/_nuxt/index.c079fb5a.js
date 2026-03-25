import { b9 as C, ba as B } from "./entry.8aa394d7.js";
import { o as b } from "./omitBy.06454d55.js";
import { a as o, ar as T } from "./swiper-vue.d5cda4d1.js";
const h = () => ({
    loadingData: o(!1),
    getPageSectionByType: (c) =>
      new Promise((g, t) => {
        const n = o(null),
          { onResult: i, onError: d } = C({ filter: { type: c } });
        d((e) => {
          t(e);
        }),
          i((e) => {
            var P;
            (P = e == null ? void 0 : e.data) != null &&
              P.findPageSectionByType &&
              ((n.value = e.data.findPageSectionByType),
              g(e.data.findPageSectionByType));
          });
      }),
    getPageSectionItemCursorPaginated: (c, g = { after: "", take: 5 }) => {
      const t = o(!1),
        n = o([]),
        i = o({}),
        d = o({ filter: { ...b(c, (a) => a === null) }, pagination: g }),
        {
          onResult: e,
          onError: P,
          variables: s,
        } = B(d.value, {
          fetchPolicy: "no-cache",
          notifyOnNetworkStatusChange: !0,
        });
      return (
        e((a) => {
          var r, f, m, S, y, p;
          if (
            ((t.value = a == null ? void 0 : a.loading),
            !(a.networkStatus !== 7 || T(a == null ? void 0 : a.data)) &&
              (r = a == null ? void 0 : a.data) != null &&
              r.pageSectionItemCursorPaginated)
          ) {
            const I =
              (S =
                (m =
                  (f = a == null ? void 0 : a.data) == null
                    ? void 0
                    : f.pageSectionItemCursorPaginated) == null
                  ? void 0
                  : m.edges) == null
                ? void 0
                : S.map((v) => v.node);
            (n.value = n.value.concat(I)),
              (i.value =
                (p =
                  (y = a == null ? void 0 : a.data) == null
                    ? void 0
                    : y.pageSectionItemCursorPaginated) == null
                  ? void 0
                  : p.pageInfo);
          }
        }),
        {
          loadingRef: t,
          listPageSectionItem: n,
          pageSectionItemPagination: i,
          cursorVariables: s,
        }
      );
    },
  }),
  G = h;
export { G as u };
