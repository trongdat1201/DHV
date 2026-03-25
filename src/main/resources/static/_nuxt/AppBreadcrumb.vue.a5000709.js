import { A as e } from "./AppBreadcrumb.73e131db.js";
import { j as t, Q as c, a0 as p } from "./swiper-vue.d5cda4d1.js";
const u = t({
  __name: "AppBreadcrumb",
  props: { extraLastBreadcrumb: { type: Array, default: () => [] } },
  setup(r) {
    return (m, o) => {
      const a = e;
      return (
        c(),
        p(a, { "extra-last-breadcrumb": r.extraLastBreadcrumb }, null, 8, [
          "extra-last-breadcrumb",
        ])
      );
    };
  },
});
export { u as _ };
