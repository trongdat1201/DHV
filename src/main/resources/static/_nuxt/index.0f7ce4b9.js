import { bF as P } from "./entry.8aa394d7.js";
import { a as c } from "./swiper-vue.d5cda4d1.js";
const d = () => {
    const o = c(!1);
    return {
      getBannerByPage: (r, t = "top") =>
        new Promise((B, g) => {
          const {
            loading: m,
            onError: i,
            onResult: s,
            load: p,
          } = P({ input: { page: r, position: t } });
          (i((n) => {
            g(n);
          }),
            s((n) => {
              var a, e;
              (a = n == null ? void 0 : n.data) != null &&
                a.getPublicBannerByPage &&
                B((e = n.data) == null ? void 0 : e.getPublicBannerByPage);
            }));
        }),
      loadingData: o,
    };
  },
  u = d;
export { u };
