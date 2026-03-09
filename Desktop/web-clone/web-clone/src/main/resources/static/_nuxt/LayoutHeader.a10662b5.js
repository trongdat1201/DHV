import {_ as ae} from "./nuxt-link.58f89fff.js";
import {M as re, _ as ne} from "./menu.9ec1f719.js";
import {a7 as se, a4 as ce, N as ue, L as M, M as de, S as V, _ as _e} from "./entry.8aa394d7.js";
import {u as he} from "./index.62c724d1.js";
import {u as me} from "./transform-translate-faculty.c0e2ceae.js";
import {C as fe} from "./close.5df02e05.js";
import {R as G} from "./chevron-right.7cc4ed2d.js";
import {b as pe} from "./index.97fcacb7.js";
import {H as U, G as Z, A as K} from "./constant.9400de67.js";
import {F as Q} from "./IFaculty.97f6e59d.js";
import {j as ye, a as g, al as X, b as ge, V as ke, Y as a, u as o, z as v, S as d, Q as i, R as n, a2 as L, Z as j, F as _, a0 as c, _ as y, W as m, X as u, ai as ve, aj as Le} from "./swiper-vue.d5cda4d1.js";
import {_ as Te} from "./CaretDownFilled.b9cab49d.js";
const Y = C => (ve("data-v-39de9c64"),
C = C(),
Le(),
C)
  , be = {
    class: "main-header-wrap relative bg-primary border-bottom-0"
}
  , Re = {
    class: "container"
}
  , $e = {
    class: "flex h-[79px]"
}
  , we = ["src", "alt"]
  , Me = {
    class: "flex-1 flex justify-center"
}
  , Ce = {
    class: "main-menu text-center"
}
  , Ie = {
    class: "h-full"
}
  , He = {
    class: "h-full flex flex-wrap justify-evenly items-center !gap-3 xxl:!gap-5"
}
  , Se = ["innerHTML"]
  , qe = ["href", "innerHTML"]
  , Fe = ["innerHTML"]
  , je = {
    key: 0,
    class: "submenu"
}
  , Ne = {
    key: 1,
    class: "child-menu-item cursor-pointer !text-inherit"
}
  , Pe = {
    key: 3,
    class: "child-submenu"
}
  , We = {
    class: "select-language flex items-center"
}
  , xe = {
    class: "header-small-mobile"
}
  , Ae = {
    class: "container"
}
  , ze = {
    class: "row items-center"
}
  , Be = {
    class: "col-2"
}
  , Oe = {
    class: "col-8 text-center"
}
  , De = {
    class: "mobile-logo logo"
}
  , Ee = ["src", "alt"]
  , Ve = {
    class: "col-2 !p-0 flex justify-end"
}
  , Ge = Y( () => a("div", {
    id: "breadcrumb"
}, null, -1))
  , Ue = Y( () => a("div", {
    id: "extra"
}, null, -1))
  , Ze = {
    class: "container flex-1"
}
  , Ke = ["onClick"]
  , Qe = ["href"]
  , Xe = {
    key: 1
}
  , Ye = {
    class: "arrow-icon"
}
  , Je = ["onClick"]
  , et = {
    key: 1,
    class: "child-menu-item-header"
}
  , tt = {
    class: "arrow-icon"
}
  , lt = ye({
    __name: "LayoutHeader",
    async setup(C) {
        let f, I;
        const {informationManagementData: H} = se()
          , J = g(null)
          , ee = g(null)
          , te = g(null)
          , N = g(null)
          , P = g(null)
          , q = g(null)
          , T = g({})
          , {height: le} = pe(q)
          , {listTrainingProgram: W, getTrainingPrograms: ie} = he()
          , {transformKeyTranslateLanguage: p} = me()
          , {facultyCode: x} = ce()
          , S = [{
            title: "home.title_nav",
            mobileTitle: "home.title",
            isRoute: !0,
            url: "/"
        }, {
            title: p("faculty_introduction", "title_nav"),
            mobileTitle: p("faculty_introduction", "title"),
            isRoute: !1,
            url: "/faculty-introduction",
            children: [{
                title: p("faculty_overview", "title"),
                isRoute: !0,
                url: "/faculty-introduction/faculty-overview"
            }, {
                title: "hr_organizational_structure.title",
                isRoute: !0,
                url: `/faculty-introduction/hr-organizational-structure?section=${U}`,
                query: {
                    section: U
                }
            }, {
                title: "growth_direction.title",
                isRoute: !0,
                url: `/faculty-introduction/hr-organizational-structure?section=${Z}`,
                query: {
                    section: Z
                }
            }, {
                title: "admissions_information.title",
                isRoute: !0,
                url: `/faculty-introduction/hr-organizational-structure?section=${K}`,
                query: {
                    section: K
                }
            }]
        }, {
            title: "educational_program.title_nav",
            mobileTitle: "educational_program.title",
            isRoute: !1,
            url: "/educational-program",
            children: []
        }, {
            title: "scientific_research.title_nav",
            mobileTitle: "scientific_research.title",
            isRoute: !1,
            children: [{
                title: p("student", "title"),
                isRoute: x.value !== Q.IPIC,
                url: "/scientific-research/student",
                children: x.value !== Q.IPIC ? null : [{
                    title: "research_topic.title",
                    isRoute: !0,
                    url: "/scientific-research/student/research-topic"
                }, {
                    title: "research_project.title",
                    isRoute: !0,
                    url: "/scientific-research/student/research-project"
                }]
            }, {
                title: "teacher.title",
                isRoute: !1,
                url: "/scientific-research/teacher",
                children: [{
                    title: "research_topic.title",
                    isRoute: !0,
                    url: "/scientific-research/teacher/research-topic"
                }, {
                    title: "research_project.title",
                    isRoute: !0,
                    url: "/scientific-research/teacher/research-project"
                }]
            }]
        }, {
            title: p("student_experience", "title_nav"),
            mobileTitle: p("student_experience", "title"),
            isRoute: !1,
            children: [{
                title: "partner.title",
                isRoute: !0,
                url: "/student-experience/partner"
            }, {
                title: "faculty_activity_news.title",
                isRoute: !0,
                url: "/student-experience/news?type=activity",
                query: {
                    type: "activity"
                }
            }, {
                title: "faculty_recruitment_news.title",
                isRoute: !0,
                url: "/student-experience/news?type=recruitment",
                query: {
                    type: "recruitment"
                }
            }]
        }, {
            title: "news_event.title_nav",
            mobileTitle: "news_event.title",
            url: "/news-event",
            isRoute: !1,
            children: [{
                title: "news.title_link",
                isRoute: !0,
                url: "/news-event/news"
            }, {
                title: "event.title_link",
                isRoute: !0,
                url: "/news-event/event"
            }]
        }, {
            title: p("alumni", "title_nav"),
            mobileTitle: p("alumni", "title"),
            isRoute: !0,
            url: "/alumni"
        }]
          , {data: A} = ([f,I] = X(async () => ue(async () => {
            var l, b;
            if (await ie(),
            (l = W.value) != null && l.length) {
                const s = S == null ? void 0 : S.find(h => h.url === "/educational-program");
                (b = W.value) == null || b.forEach(h => {
                    var R, $;
                    (R = h == null ? void 0 : h.majors) != null && R.length && (($ = s == null ? void 0 : s.children) == null || $.push({
                        title: M(h, "name"),
                        isRoute: !0,
                        url: `/educational-program?program=${h.alias}`,
                        query: {
                            program: h.alias
                        }
                    }))
                }
                )
            }
            return {
                menus: S
            }
        }
        , "$rjHunMsW4I")),
        f = await f,
        I(),
        f)
          , {activatedRoute: k, locale: z, handleChangeLocale: B, handleCloseMobileMenu: F, handleOpenItemMenu: O, handleToggleMobileMenu: D, headerHeight: oe} = ([f,I] = X( () => de({
            mobileMenu: N,
            menuToggleBtn: P,
            header: q,
            menuRefs: T,
            searchBar: J,
            mobileSearch: ee,
            searchBtn: te
        })),
        f = await f,
        I(),
        f);
        return ge(le, l => {
            oe.value = l
        }
        , {
            immediate: !0
        }),
        (l, b) => {
            const s = ae
              , h = Te
              , R = ne;
            return ke(l.$slots, "default", {}, () => {
                var $, E;
                return [a("header", {
                    id: "navbar",
                    ref_key: "header",
                    ref: q,
                    class: "header-area sticky-bar"
                }, [a("nav", be, [a("div", Re, [a("div", $e, [a("div", {
                    class: "logo lg:pr-8",
                    onClick: b[0] || (b[0] = (...e) => ("onScrollToTop"in l ? l.onScrollToTop : o(V)) && ("onScrollToTop"in l ? l.onScrollToTop : o(V))(...e))
                }, [v(s, {
                    to: l.localePath("/"),
                    "aria-label": "Logo header",
                    class: "block aspect-[102/39]"
                }, {
                    default: d( () => {
                        var e, t, r, w;
                        return [a("img", {
                            src: (t = ("getFieldWithLocale"in l ? l.getFieldWithLocale : o(M))((e = o(H)) == null ? void 0 : e.informationManagement, "pictureLogoHeader")) == null ? void 0 : t.url,
                            alt: (w = ("getFieldWithLocale"in l ? l.getFieldWithLocale : o(M))((r = o(H)) == null ? void 0 : r.informationManagement, "pictureLogoHeader")) == null ? void 0 : w.alt
                        }, null, 8, we)]
                    }
                    ),
                    _: 1
                }, 8, ["to"])]), a("div", Me, [a("div", Ce, [a("nav", Ie, [a("ul", He, [(i(!0),
                n(_, null, L(($ = o(A)) == null ? void 0 : $.menus, e => (i(),
                n("li", {
                    key: e.title,
                    class: "angle-shape"
                }, [a("div", {
                    class: j(["!flex !justify-center !items-center gap-2 menu-item", e.url !== "/" && o(k).includes(e.url) || e.url === "/" && o(k) === "/" ? "active" : ""])
                }, [e.isRoute ? (i(),
                n(_, {
                    key: 0
                }, [e.externalLink ? (i(),
                n("a", {
                    key: 1,
                    href: e.externalLink,
                    target: "_blank",
                    innerHTML: l.$t(e.title)
                }, null, 8, qe)) : (i(),
                c(s, {
                    key: 0,
                    to: l.localePath({
                        path: e.url,
                        query: e == null ? void 0 : e.query
                    })
                }, {
                    default: d( () => [a("span", {
                        innerHTML: l.$t(e.title)
                    }, null, 8, Se)]),
                    _: 2
                }, 1032, ["to"]))], 64)) : (i(),
                n("span", {
                    key: 1,
                    innerHTML: l.$t(e.title),
                    class: "cursor-pointer"
                }, null, 8, Fe)), e.children ? (i(),
                c(h, {
                    key: 2,
                    class: "dropdown-icon"
                })) : y("", !0)], 2), e.children ? (i(),
                n("div", je, [(i(!0),
                n(_, null, L(e.children, t => (i(),
                n("div", {
                    key: t.title,
                    class: j(["!flex !justify-center !items-center gap-2 menu-item", t.url !== "/" && o(k).includes(t.url) || t.url === "/" && o(k) === "/" ? "active" : ""])
                }, [t.isRoute ? (i(),
                n(_, {
                    key: 0
                }, [t.externalLink ? (i(),
                c(s, {
                    key: 1,
                    to: t.externalLink,
                    target: "_blank",
                    class: "child-menu-item"
                }, {
                    default: d( () => [m(u(l.$t(t.title)), 1)]),
                    _: 2
                }, 1032, ["to"])) : (i(),
                c(s, {
                    key: 0,
                    to: l.localePath({
                        path: t.url,
                        query: t.query
                    }),
                    class: "child-menu-item"
                }, {
                    default: d( () => [m(u(l.$t(t.title)), 1)]),
                    _: 2
                }, 1032, ["to"]))], 64)) : (i(),
                n("span", Ne, u(l.$t(t.title)), 1)), t.children ? (i(),
                c(h, {
                    key: 2,
                    class: "dropdown-icon"
                })) : y("", !0), t.children ? (i(),
                n("div", Pe, [(i(!0),
                n(_, null, L(t.children, r => (i(),
                n(_, {
                    key: r.title
                }, [r.externalLink ? (i(),
                c(s, {
                    key: 1,
                    to: r.externalLink,
                    target: "_blank",
                    class: "child-submenu-item"
                }, {
                    default: d( () => [m(u(l.$t(r.title)), 1)]),
                    _: 2
                }, 1032, ["to"])) : (i(),
                c(s, {
                    key: 0,
                    to: l.localePath({
                        path: r.url,
                        query: r.query
                    }),
                    class: "child-submenu-item"
                }, {
                    default: d( () => [m(u(l.$t(r.title)), 1)]),
                    _: 2
                }, 1032, ["to"]))], 64))), 128))])) : y("", !0)], 2))), 128))])) : y("", !0)]))), 128)), a("li", We, [v(R, {
                    locale: o(z),
                    onChangeLocale: o(B)
                }, null, 8, ["locale", "onChangeLocale"])])])])])])])])]), a("nav", xe, [a("div", Ae, [a("div", ze, [a("div", Be, [a("div", {
                    ref_key: "menuToggleBtn",
                    ref: P
                }, [v(o(re), {
                    class: "menu-icon",
                    onClick: o(D)
                }, null, 8, ["onClick"]), v(o(fe), {
                    class: "close-icon",
                    onClick: o(D)
                }, null, 8, ["onClick"])], 512)]), a("div", Oe, [a("div", De, [v(s, {
                    to: l.localePath("/"),
                    "aria-label": "Logo header"
                }, {
                    default: d( () => {
                        var e, t, r, w;
                        return [a("img", {
                            src: (t = ("getFieldWithLocale"in l ? l.getFieldWithLocale : o(M))((e = o(H)) == null ? void 0 : e.informationManagement, "pictureLogoHeader")) == null ? void 0 : t.url,
                            alt: (w = ("getFieldWithLocale"in l ? l.getFieldWithLocale : o(M))((r = o(H)) == null ? void 0 : r.informationManagement, "pictureLogoHeader")) == null ? void 0 : w.alt,
                            class: "h-full inline-block",
                            loading: "lazy"
                        }, null, 8, Ee)]
                    }
                    ),
                    _: 1
                }, 8, ["to"])])]), a("div", Ve, [v(R, {
                    locale: o(z),
                    onChangeLocale: o(B)
                }, null, 8, ["locale", "onChangeLocale"])])])])]), Ge, Ue, a("div", {
                    ref_key: "mobileMenu",
                    ref: N,
                    class: "mobile-menu flex lg:hidden flex-col"
                }, [a("div", Ze, [(i(!0),
                n(_, null, L((E = o(A)) == null ? void 0 : E.menus, e => (i(),
                n("div", {
                    key: `mobile-${e.mobileTitle}`,
                    ref_for: !0,
                    ref: t => {
                        o(T)[`mobile-${e.mobileTitle}`] = t
                    }
                    ,
                    class: j(["mobile-menu-item", e.url !== "/" && o(k).includes(e.url) || e.url === "/" && o(k) === "/" ? "active" : ""])
                }, [a("div", {
                    class: "menu-item-header",
                    onClick: t => e.children && o(O)(`mobile-${e.mobileTitle}`)
                }, [e.isRoute ? (i(),
                n(_, {
                    key: 0
                }, [e.externalLink ? (i(),
                n("a", {
                    key: 1,
                    href: e.externalLink,
                    target: "_blank"
                }, u(l.$t(e.mobileTitle)), 9, Qe)) : (i(),
                c(s, {
                    key: 0,
                    to: l.localePath({
                        path: e.url,
                        query: e.query
                    }),
                    onClick: o(F)
                }, {
                    default: d( () => [m(u(l.$t(e.mobileTitle)), 1)]),
                    _: 2
                }, 1032, ["to", "onClick"]))], 64)) : (i(),
                n("span", Xe, u(l.$t(e.mobileTitle)), 1)), a("span", Ye, [e.children ? (i(),
                c(o(G), {
                    key: 0
                })) : y("", !0)])], 8, Ke), e.children ? (i(),
                n("div", {
                    key: 0,
                    ref_for: !0,
                    ref: t => {
                        o(T)[`${e.mobileTitle}-child-menu`] = t
                    }
                    ,
                    class: "child-menu"
                }, [(i(!0),
                n(_, null, L(e.children, t => (i(),
                n("div", {
                    key: `mobile-${t.title}`,
                    ref_for: !0,
                    ref: r => {
                        o(T)[`mobile-${t.title}`] = r
                    }
                    ,
                    class: "child-menu-item",
                    onClick: r => t.children && o(O)(`mobile-${t.title}`, !0)
                }, [t.isRoute ? (i(),
                n(_, {
                    key: 0
                }, [t.externalLink ? (i(),
                c(s, {
                    key: 1,
                    to: t.externalLink,
                    target: "_blank"
                }, {
                    default: d( () => [m(u(l.$t(t.title)), 1)]),
                    _: 2
                }, 1032, ["to"])) : (i(),
                c(s, {
                    key: 0,
                    to: l.localePath({
                        path: t.url,
                        query: t.query
                    }),
                    onClick: o(F)
                }, {
                    default: d( () => [m(u(e.title.includes("educational_program") ? t.title : l.$t(t.title)), 1)]),
                    _: 2
                }, 1032, ["to", "onClick"]))], 64)) : (i(),
                n("div", et, [a("span", null, u(l.$t(t.title)), 1), a("span", tt, [t.children ? (i(),
                c(o(G), {
                    key: 0
                })) : y("", !0)])])), t.children ? (i(),
                n("div", {
                    key: 2,
                    ref_for: !0,
                    ref: r => {
                        o(T)[`${e.mobileTitle}-child-menu`] = r
                    }
                    ,
                    class: "child-menu pl-4"
                }, [(i(!0),
                n(_, null, L(t.children, r => (i(),
                n(_, {
                    key: `mobile-${r.title}`
                }, [r.externalLink ? (i(),
                c(s, {
                    key: 1,
                    to: r.externalLink,
                    target: "_blank",
                    class: "child-menu-item"
                }, {
                    default: d( () => [m(u(l.$t(r.title)), 1)]),
                    _: 2
                }, 1032, ["to"])) : (i(),
                c(s, {
                    key: 0,
                    class: "child-menu-item",
                    to: l.localePath({
                        path: r.url,
                        query: r.query
                    }),
                    onClick: o(F)
                }, {
                    default: d( () => [m(u(l.$t(r.title)), 1)]),
                    _: 2
                }, 1032, ["to", "onClick"]))], 64))), 128))], 512)) : y("", !0)], 8, Je))), 128))], 512)) : y("", !0)], 2))), 128))])], 512)], 512)]
            }
            , !0)
        }
    }
});
const ft = _e(lt, [["__scopeId", "data-v-39de9c64"]]);
export {ft as default};
