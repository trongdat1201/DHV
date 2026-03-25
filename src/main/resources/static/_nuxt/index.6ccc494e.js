import { Y as m, b$ as u } from "./entry.8aa394d7.js";
import { a as d, ar as s } from "./swiper-vue.d5cda4d1.js";
const p = () => {
    const a = m("listQuote", () => d([]));
    return {
      listQuote: a,
      getListQuote: () =>
        new Promise((t, e) => {
          const { onResult: c, onError: f } = u();
          f((o) => {
            e(o);
          }),
            c((o) => {
              var i, n, Q;
              s(o == null ? void 0 : o.data) || t(!0),
                (i = o == null ? void 0 : o.data) != null &&
                  i.quoutes &&
                  (a.value =
                    (n = o == null ? void 0 : o.data) == null
                      ? void 0
                      : n.quoutes),
                t(
                  (Q = o == null ? void 0 : o.data) == null ? void 0 : Q.quoutes
                );
            });
        }),
    };
  },
  y = p;
export { y as u };
