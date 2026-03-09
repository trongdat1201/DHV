import { Y as T, bH as c } from "./entry.8aa394d7.js";
import { a as e } from "./swiper-vue.d5cda4d1.js";
const d = () => {
    const n = T("listTrainingProgram", () => e([]));
    return {
      listTrainingProgram: n,
      getTrainingPrograms: () =>
        new Promise((m, t) => {
          const { onResult: P, onError: s } = c();
          P((a) => {
            var r, i, o, g;
            (i =
              (r = a == null ? void 0 : a.data) == null
                ? void 0
                : r.trainingPrograms) != null &&
              i.length &&
              (n.value =
                (o = a == null ? void 0 : a.data) == null
                  ? void 0
                  : o.trainingPrograms),
              m(
                (g = a == null ? void 0 : a.data) == null
                  ? void 0
                  : g.trainingPrograms
              );
          }),
            s((a) => {
              t(a);
            });
        }),
    };
  },
  h = d;
export { h as u };
