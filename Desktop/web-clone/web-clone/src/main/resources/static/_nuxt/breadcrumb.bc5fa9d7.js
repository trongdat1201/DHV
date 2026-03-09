import { H as L, D as v, L as B } from "./entry.8aa394d7.js";
import { u as x } from "./transform-translate-faculty.c0e2ceae.js";
import { a as k, k as y } from "./swiper-vue.d5cda4d1.js";
const T = () => {
    const n = L(),
      { transformKeyTranslateLanguage: p } = x(),
      { t: b } = v(),
      a = k([]),
      h = ["en", "category"];
    return {
      breadcrumbs: y(() => {
        var l, o, m, i, d;
        const c =
            (o = (l = n.path) == null ? void 0 : l.split("/")) == null
              ? void 0
              : o.filter((r, s) => {
                  var e, t;
                  return (
                    r &&
                    (!h.includes(r) ||
                      s ===
                        ((t = (e = n.path) == null ? void 0 : e.split("/")) ==
                        null
                          ? void 0
                          : t.length) -
                          1)
                  );
                }),
          u = c.map((r, s) => {
            const e = c.reduce((t, f, g) => (g > s ? t : [...t, f]), []);
            return {
              name: b(p(r.replaceAll("-", "_"), "title_link")).replaceAll(
                "<br>",
                ""
              ),
              link: `/${e == null ? void 0 : e.join("/")}`,
            };
          });
        if ((m = a.value) != null && m.length) {
          const r =
              n.path.includes("news-event/news") &&
              (i = n.params) != null &&
              i.alias
                ? -(a.value.length - 1)
                : -a.value.length,
            s = u.slice(0, r),
            e =
              (d = a.value) == null
                ? void 0
                : d.map((t) => ({ ...t, name: B(t, "name") }));
          return [...s, ...e];
        }
        return u;
      }),
      extraLastBreadcrumbs: a,
    };
  },
  I = T;
export { I as u };
