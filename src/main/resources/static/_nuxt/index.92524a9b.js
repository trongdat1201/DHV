import { Y as i, bn as g, a3 as m } from "./entry.8aa394d7.js";
import { a as d } from "./swiper-vue.d5cda4d1.js";
const I = () => {
    const o = d(!1),
      e = i("pageInfoData", () => ({}));
    return {
      loadingData: o,
      findPageInfoByName: async (n) =>
        new Promise((t, f) => {
          const { onError: s, onResult: r } = g({ filter: { name: n } });
          s((a) => {
            f(a);
          }),
            r((a) => {
              m(a.data) ||
                ((e.value[n] = a.data.findPageInfoByName),
                t(a.data.findPageInfoByName));
            });
        }),
      pageInfoData: e,
    };
  },
  c = I;
export { c as u };
