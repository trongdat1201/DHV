import { _ } from "./index.vue.d7adcc61.js";
import { _ as s } from "./AppBreadcrumb.vue.7e47a49f.js";
import { _ as u, a as l } from "./Introduction.2c14d018.js";
import {
  j as i,
  Q as e,
  a0 as p,
  R as g,
  z as o,
  S as n,
  F as d,
} from "./swiper-vue.d5cda4d1.js";
import "./entry.8aa394d7.js";
import "./AppBreadcrumb.73e131db.js";
import "./nuxt-link.58f89fff.js";
import "./client-only.42178d49.js";
import "./breadcrumb.bc5fa9d7.js";
import "./transform-translate-faculty.c0e2ceae.js";
import "./IFaculty.97f6e59d.js";
import "./index.62c724d1.js";
import "./index.a66880e0.js";
import "./Trigger.dd535606.js";
import "./isVisible.48fa23e0.js";
import "./PortalWrapper.438f60b2.js";
import "./motion.d46d0bbf.js";
import "./_baseIsEqual.42871e3f.js";
import "./firstNotUndefined.29a740f3.js";
import "./zoom.4c1ddb0e.js";
import "./JsonContent.828a79a5.js";
import "./index.97fcacb7.js";
import "./ArrowRightOutlined.581af82c.js";
import "./index.d81f9ea4.js";
import "./RightOutlined.f501bedb.js";
import "./collapseMotion.3a38b156.js";
import "./devWarning.0cb68424.js";
import "./PlusOutlined.ea401e65.js";
import "./MinusOutlined.0c85195f.js";
const P = i({
    __name: "ListProgram",
    emits: ["changeProgram"],
    setup(r, { emit: a }) {
      const m = (t) => {
        a("changeProgram", t);
      };
      return (t, x) => {
        const c = u;
        return e(), p(c, { onChangeProgram: m });
      };
    },
  }),
  f = {
    __name: "Introduction",
    props: { activedProgram: { type: Number, default: 0 } },
    setup(r) {
      return (a, m) => {
        const t = l;
        return (
          e(),
          p(t, { "actived-program": r.activedProgram }, null, 8, [
            "actived-program",
          ])
        );
      };
    },
  },
  h = f,
  U = i({
    __name: "index",
    setup(r) {
      return (a, m) => {
        const t = _;
        return (
          e(),
          g(
            d,
            null,
            [
              o(s),
              o(t, null, {
                listProgram: n(() => [o(P)]),
                introduction: n(() => [o(h)]),
                _: 1,
              }),
            ],
            64
          )
        );
      };
    },
  });
export { U as default };
