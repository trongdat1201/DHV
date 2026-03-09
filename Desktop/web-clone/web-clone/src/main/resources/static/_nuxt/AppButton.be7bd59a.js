import { A as s } from "./btn-arrow.5abf483c.js";
import { _ } from "./entry.8aa394d7.js";
import { B as c } from "./index.164d0fc2.js";
import {
  $ as p,
  Q as o,
  a0 as e,
  S as m,
  V as u,
  _ as d,
  Z as l,
} from "./swiper-vue.d5cda4d1.js";
const f = {
  name: "AppButton",
  components: { ArrowIcon: s },
  props: {
    text: { type: String, default: "" },
    type: { type: String, default: "" },
    arrow: { type: Boolean, default: !1 },
  },
};
function i(n, y, t, B, w, A) {
  const a = p("ArrowIcon"),
    r = c;
  return (
    o(),
    e(
      r,
      { class: l([t.type, "common-btn"]) },
      {
        default: m(() => [
          u(n.$slots, "default", {}, void 0, !0),
          t.arrow ? (o(), e(a, { key: 0 })) : d("", !0),
        ]),
        _: 3,
      },
      8,
      ["class"]
    )
  );
}
const S = _(f, [
  ["render", i],
  ["__scopeId", "data-v-d34926a3"],
]);
export { S as _ };
