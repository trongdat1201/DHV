import { _ as ee } from "./AppPagination.d9496ac6.js";
import {
  D as te,
  H as ae,
  R as ne,
  N as oe,
  J as re,
  S as le,
  T as ie,
  _ as se,
} from "./entry.8aa394d7.js";
import { _ as ue } from "./client-only.42178d49.js";
import { _ as ce } from "./FilterCategory.0bea77d9.js";
import { u as pe } from "./list.70e6673c.js";
import { L as me } from "./LayoutNewsEvent.f16c70d4.js";
import { I as de } from "./Introduction.b6c2141d.js";
import { A as ge } from "./AppArticleItem.3411b12b.js";
import { C as ve } from "./close.5df02e05.js";
import { A as y } from "./IArticle.feadee52.js";
import { S as _e } from "./index.010e93e7.js";
import {
  j as he,
  a as c,
  al as fe,
  b as w,
  k as O,
  $ as ye,
  Q as p,
  a0 as C,
  S as v,
  z as m,
  u as t,
  Y as _,
  R as D,
  X as s,
  _ as P,
  F as V,
  a2 as De,
  e as Se,
} from "./swiper-vue.d5cda4d1.js";
import "./nuxt-link.58f89fff.js";
import "./index.5d8e77bd.js";
import "./RightOutlined.f501bedb.js";
import "./index.9e7cd0be.js";
import "./Trigger.dd535606.js";
import "./isVisible.48fa23e0.js";
import "./PortalWrapper.438f60b2.js";
import "./motion.d46d0bbf.js";
import "./_baseIsEqual.42871e3f.js";
import "./pickAttrs.315d7ebe.js";
import "./statusUtils.cee29603.js";
import "./compact-item.8109a539.js";
import "./index.661a1686.js";
import "./firstNotUndefined.29a740f3.js";
import "./arrow-two-color.11c559b9.js";
import "./index.7b8d9ad8.js";
import "./omitBy.06454d55.js";
import "./_baseIteratee.825e9cf8.js";
import "./index.97fcacb7.js";
import "./AppBreadcrumb.73e131db.js";
import "./breadcrumb.bc5fa9d7.js";
import "./transform-translate-faculty.c0e2ceae.js";
import "./IFaculty.97f6e59d.js";
import "./JsonContent.828a79a5.js";
import "./AppButton.be7bd59a.js";
import "./btn-arrow.5abf483c.js";
import "./index.164d0fc2.js";
import "./devWarning.0cb68424.js";
import "./NuxtImg.vue.916c2d60.js";
import "./calendar.0a3d87d0.js";
const we = { key: 0, class: "flex items-center mb-3 !gap-5" },
  Ce = { class: "event-page__no-data-time mb-0" },
  ke = { key: 0, class: "event-page__pagination flex justify-center" },
  Ee = { class: "event-page__datepicker custom-shadow" },
  be = { class: "title" },
  Ae = { class: "event-page__category-filter custom-shadow" },
  Ne = he({
    __name: "Event",
    async setup(Oe) {
      let k, E;
      const { locale: T } = te(),
        u = ae(),
        I = ne(),
        {
          loadingRef: M,
          paginationData: $,
          activeArticleList: b,
          getActiveArticleList: q,
          activeEventsInMonth: R,
          getActiveEventsInMonth: x,
        } = pe(),
        a = c(null),
        F = c(null),
        L = c(null),
        A = c(null),
        Y = [
          {
            id: "outstanding",
            name: "Sự kiện nổi bật",
            name_en: "Remarkable events",
          },
          {
            id: "willOccur",
            name: "Sự kiện sắp diễn ra",
            name_en: "Upcoming event",
          },
          {
            id: "hasOccurred",
            name: "Sự kiện đã diễn ra",
            name_en: "The event took place",
          },
        ],
        r = c({ currentPage: 1, pageSize: 6, totalCount: 0, totalPages: 0 }),
        l = c({
          hasOccurred: null,
          outstanding: null,
          currentDate: null,
          sortBy: "-startDate",
        }),
        n = c([]),
        { refetch: z, offsetVariables: S } = q(
          { type: y.EVENTS, ...l.value },
          { page: 1, take: r.value.pageSize },
        ),
        { fetchActiveEventsInMonth: B, activeInMonthVariables: j } = x();
      (([k, E] = fe(async () =>
        oe(async () => {
          const e = new Date();
          (await B({ month: e.getMonth() + 1, year: e.getFullYear() }),
            u.query &&
              ((r.value.currentPage = Number(u.query.page) || 1),
              u.query.date && (a.value = new Date(Number(u.query.date))),
              (n.value = u.query.categories
                ? [].concat(u.query.categories)
                : []),
              (l.value.hasOccurred = n.value.includes("hasOccurred")
                ? n.value.includes("willOccur")
                  ? null
                  : !0
                : n.value.includes("willOccur")
                  ? !1
                  : null),
              (l.value.outstanding = n.value.includes("outstanding")
                ? !0
                : null),
              (l.value.currentDate =
                l.value.hasOccurred === null ? null : new Date())),
            (S.value = {
              pagination: { page: r.value.currentPage, take: r.value.pageSize },
              filter: { type: y.EVENTS, ...l.value },
            }),
            await z(S.value),
            re());
        }, "$XyiEeF519t"),
      )),
        await k,
        E(),
        w(
          $,
          (e) => {
            ((r.value.totalPages = e == null ? void 0 : e.totalPages),
              (r.value.totalCount = e == null ? void 0 : e.totalCount));
          },
          { deep: !0, immediate: !0 },
        ),
        w(
          () => u.query,
          (e) => {
            ((r.value.currentPage = Number(e.page) || 1),
              e.date && (a.value = new Date(Number(e.date))),
              (n.value = e.categories ? [].concat(e.categories) : []));
          },
          { deep: !0 },
        ),
        w(
          [
            () => r.value.currentPage,
            () => l.value,
            () => a.value,
            () => n.value,
          ],
          ([e, o, i, f]) => {
            const d = {
              page: e,
              date: i == null ? void 0 : i.getTime(),
              categories: f,
            };
            (!i && delete d.date,
              !e && delete d.page,
              !f.length && delete d.categories,
              (S.value = {
                pagination: { page: e, take: r.value.pageSize },
                filter: { type: y.EVENTS, ...o },
              }),
              I.push({ query: d }),
              le(A.value.offsetTop));
          },
          { deep: !0 },
        ));
      const H = O(() => {
          var o;
          const e = new Date();
          return e.toDateString() ===
            ((o = a.value) == null ? void 0 : o.toDateString()) ||
            h.value.find((i) => i.dates[0].toDateString() === e.toDateString())
            ? null
            : new Date();
        }),
        h = O(() =>
          R.value.map((e) => {
            const o = new Date(Number(e.startDate));
            return (o.setHours(0, 0, 0), { highlight: "primary", dates: [o] });
          }),
        ),
        U = (e) => {
          ((n.value = []),
            a.value &&
            new Date(e.date).toDateString() === a.value.toDateString()
              ? ((a.value = null),
                (h.value.find(
                  (o) =>
                    o.dates[0].toDateString() ===
                    new Date(e.date).toDateString(),
                ).highlight = "primary"))
              : ((a.value = new Date(e.date)),
                h.value.map((o) => {
                  o.dates[0].toDateString() === a.value.toDateString()
                    ? (o.highlight = "secondary")
                    : (o.highlight = "primary");
                })),
            (l.value.currentDate = e.date),
            (r.value.currentPage = 1));
        },
        X = () => {},
        J = () => {
          ((a.value = null),
            (l.value.hasOccurred = n.value.includes("hasOccurred")
              ? n.value.includes("willOccur")
                ? null
                : !0
              : n.value.includes("willOccur")
                ? !1
                : null),
            (l.value.outstanding = n.value.includes("outstanding") ? !0 : null),
            (l.value.currentDate =
              l.value.hasOccurred === null ? null : new Date()),
            (r.value.currentPage = 1));
        },
        N = () => {
          ((a.value = null),
            (n.value = []),
            (l.value.hasOccurred = null),
            (l.value.currentDate = null),
            (l.value.outstanding = null),
            (r.value.currentPage = 1));
        },
        Q = (e) => {
          j.value = { month: e[0].month, year: e[0].year };
        };
      return (e, o) => {
        const i = ee,
          f = ie,
          d = _e,
          G = ye("VCalendar"),
          K = ue,
          W = ce;
        return (
          p(),
          C(
            me,
            { type: "events" },
            {
              introduction: v(() => [
                m(de, { type: t(y).EVENTS }, null, 8, ["type"]),
              ]),
              mainBody: v(() => [
                _(
                  "div",
                  {
                    ref_key: "listEvent",
                    ref: A,
                    class: "event-page__list-event",
                  },
                  [
                    t(a)
                      ? (p(),
                        D("div", we, [
                          _(
                            "p",
                            Ce,
                            s(e.$t("common.date.day")) +
                              " " +
                              s(t(a).getDate()) +
                              ", " +
                              s(e.$t("common.date.month").toLowerCase()) +
                              " " +
                              s(t(a).getMonth() + 1) +
                              ", " +
                              s(e.$t("common.date.year").toLowerCase()) +
                              " " +
                              s(t(a).getFullYear()),
                            1,
                          ),
                          m(t(ve), {
                            class: "remove-icon cursor-pointer",
                            onClick: N,
                          }),
                        ]))
                      : P("", !0),
                    m(
                      d,
                      { spinning: t(M) },
                      {
                        default: v(() => {
                          var g;
                          return [
                            (g = t(b)) != null && g.length
                              ? (p(),
                                D(
                                  V,
                                  { key: 0 },
                                  [
                                    (p(!0),
                                    D(
                                      V,
                                      null,
                                      De(
                                        t(b),
                                        (Z) => (
                                          p(),
                                          C(
                                            ge,
                                            { event: "", article: Z },
                                            null,
                                            8,
                                            ["article"],
                                          )
                                        ),
                                      ),
                                      256,
                                    )),
                                    t(r).totalCount > t(r).pageSize
                                      ? (p(),
                                        D("div", ke, [
                                          m(
                                            i,
                                            {
                                              "page-info": t(r),
                                              onChangePage: X,
                                            },
                                            null,
                                            8,
                                            ["page-info"],
                                          ),
                                        ]))
                                      : P("", !0),
                                  ],
                                  64,
                                ))
                              : (p(), C(f, { key: 1 })),
                          ];
                        }),
                        _: 1,
                      },
                      8,
                      ["spinning"],
                    ),
                  ],
                  512,
                ),
              ]),
              sidebar: v(() => [
                _("div", Ee, [
                  _("div", be, s(e.$t("event.events_of_the_month")), 1),
                  m(K, null, {
                    default: v(() => [
                      m(
                        G,
                        {
                          ref_key: "calendarSelection",
                          ref: L,
                          expanded: "",
                          locale: t(T),
                          transparent: "",
                          borderless: "",
                          "first-day-of-week": 2,
                          attributes: [
                            { highlight: "current", dates: [t(H)] },
                            { highlight: "secondary", dates: [t(a)] },
                            ...t(h),
                          ],
                          masks: { title: "M, YYYY" },
                          onDayclick: U,
                          onDidMove: Q,
                        },
                        {
                          "header-title": v(({ title: g }) => [
                            _(
                              "span",
                              null,
                              s(e.$t("common.date.month")) + " " + s(g),
                              1,
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["locale", "attributes"],
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                _("div", Ae, [
                  m(
                    W,
                    {
                      ref_key: "filterCategory",
                      ref: F,
                      title: e.$t("event.filter_event"),
                      event: "",
                      categories: Y,
                      "model-value": t(n),
                      "onUpdate:modelValue":
                        o[0] || (o[0] = (g) => (Se(n) ? (n.value = g) : null)),
                      onChange: J,
                      onReset: N,
                    },
                    null,
                    8,
                    ["title", "model-value"],
                  ),
                ]),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
const ft = se(Ne, [["__scopeId", "data-v-d5a82a00"]]);
export { ft as default };
