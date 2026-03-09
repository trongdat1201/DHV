import { av as c, H as m, S as u } from "./entry.8aa394d7.js";
import {
  a as r,
  b as i,
  j as p,
  al as _,
  y as d,
  Q as f,
  R as g,
  V as l,
  Y as h,
} from "./swiper-vue.d5cda4d1.js";
const v = async () => {
    const n = m(),
      e = r(null),
      t = r(0);
    return (
      i(
        [
          () => n.query.program,
          () => {
            var a;
            return (a = e == null ? void 0 : e.value) == null
              ? void 0
              : a.offsetTop;
          },
        ],
        ([a, o]) => {
          o &&
            setTimeout(() => {
              u(a ? o : null);
            }, 0);
        }
      ),
      {
        currentProgram: t,
        programIntroduction: e,
        handleChangeProgram: (a) => {
          t.value = a;
        },
      }
    );
  },
  P = c(v),
  S = p({
    __name: "index",
    async setup(n) {
      let e, t;
      const s = r(null),
        { programIntroduction: a } =
          (([e, t] = _(() => P())), (e = await e), t(), e);
      return (
        d(() => {
          var o;
          (a.value = s.value),
            u(
              (o = s == null ? void 0 : s.value) == null ? void 0 : o.offsetTop
            );
        }),
        (o, y) => (
          f(),
          g("div", null, [
            l(o.$slots, "listProgram"),
            h(
              "div",
              { ref_key: "programIntroductionRef", ref: s },
              [l(o.$slots, "introduction")],
              512
            ),
          ])
        )
      );
    },
  });
export { S as _, P as u };
