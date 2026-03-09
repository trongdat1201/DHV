import { u as s, _ } from "./entry.8aa394d7.js";
import { _ as o } from "./circle-bg.50b04251.js";
import {
  j as a,
  Q as c,
  R as t,
  ai as p,
  aj as r,
  Y as i,
} from "./swiper-vue.d5cda4d1.js";
const n = (e) => (p("data-v-00bb2169"), (e = e()), r(), e),
  l = { class: "circle-bg w-full" },
  d = n(() =>
    i("img", { class: "w-full aspect-square inline-block", src: o }, null, -1)
  ),
  m = [d],
  u = a({
    __name: "AppCircleBg",
    setup(e) {
      return (
        s({
          link: [
            {
              rel: "preload",
              href: "/assets/images/bg/circle-bg.webp",
              as: "image",
            },
          ],
        }),
        (b, f) => (c(), t("div", l, m))
      );
    },
  });
const x = _(u, [["__scopeId", "data-v-00bb2169"]]);
export { x as _ };
