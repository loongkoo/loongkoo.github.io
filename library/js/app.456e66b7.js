(function(t) {
    function e(e) { for (var n, o, s = e[0], l = e[1], d = e[2], u = 0, p = []; u < s.length; u++) o = s[u], i[o] && p.push(i[o][0]), i[o] = 0; for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
        c && c(e); while (p.length) p.shift()(); return r.push.apply(r, d || []), a() }

    function a() { for (var t, e = 0; e < r.length; e++) { for (var a = r[e], n = !0, s = 1; s < a.length; s++) { var l = a[s];
                0 !== i[l] && (n = !1) } n && (r.splice(e--, 1), t = o(o.s = a[0])) } return t } var n = {},
        i = { 1: 0 },
        r = [];

    function o(e) { if (n[e]) return n[e].exports; var a = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports } o.m = t, o.c = n, o.d = function(t, e, a) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a }) }, o.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" === typeof t && t && t.__esModule) return t; var a = Object.create(null); if (o.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(a, n, function(e) { return t[e] }.bind(null, n)); return a }, o.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "/library/"; var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = s.push.bind(s);
    s.push = e, s = s.slice(); for (var d = 0; d < s.length; d++) e(s[d]); var c = l;
    r.push([5, 0]), a() })({ "2aYc": function(t, e, a) {}, 5: function(t, e, a) { t.exports = a("Vtdi") }, "9lQF": function(t, e, a) {}, Ur83: function(t, e, a) { "use strict"; var n = a("2aYc"),
            i = a.n(n);
        i.a }, Vtdi: function(t, e, a) { "use strict";
        a.r(e);
        a("VRzm"); var n = a("Kw5r"),
            i = a("XJYT"),
            r = a.n(i),
            o = (a("D66Q"), function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("div", { attrs: { id: "app" } }, [a("el-container", [a("el-header", { attrs: { height: "50px" } }, [a("el-row", { staticClass: "row-bg", attrs: { type: "flex" } }, [a("h1", [a("router-link", { attrs: { to: "/" } }, [t._v("DIYgod 的媒体库")])], 1), a("el-col", { attrs: { span: 3 } }, [a("router-link", { attrs: { to: "/" } }, [t._v("首页")])], 1), a("el-col", { attrs: { span: 3 } }, [a("router-link", { attrs: { to: "/about" } }, [t._v("关于")])], 1)], 1)], 1), a("el-main", [a("router-view")], 1), a("el-footer", { attrs: { height: "40px" } }, [t._v("© 2018 "), a("a", { attrs: { href: "https://diygod.me/", target: "_blank" } }, [t._v("Hi, DIYgod")])])], 1)], 1) }),
            s = [],
            l = { name: "app", components: {} },
            d = l,
            c = (a("ZL7j"), a("KHd+")),
            u = Object(c["a"])(d, o, s, !1, null, null, null),
            p = u.exports,
            f = (a("f3/d"), a("jE9Z")),
            v = function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("div", { directives: [{ name: "loading", rawName: "v-loading", value: t.loading, expression: "loading" }], staticClass: "home" }, t._l(t.data, function(e) { return a("div", { key: e.id, staticClass: "column" }, [a("h2", { staticClass: "column-header" }, [t._v(t._s(e.name))]), a("el-row", { attrs: { gutter: 20 } }, t._l(e.sub, function(n) { return a("el-col", { key: n.id, staticClass: "playlist", attrs: { span: 6 } }, [a("router-link", { attrs: { to: "/video/" + n.id } }, [a("img", { staticClass: "playlist-poster", attrs: { src: "https://pan.prprpr.me/?/" + e.id + "/" + n.id + "/poster.jpg" } }), a("h3", { staticClass: "playlist-title" }, [t._v(t._s(n.name))])])], 1) }))], 1) })) },
            m = [],
            h = { name: "Home", data: function() { return { data: [], loading: !0 } }, created: function() { var t = this;
                    this.axios.get("./album.json").then(function(e) { t.data = e.data.data, t.loading = !1 }) } },
            b = h,
            g = (a("Z7g8"), Object(c["a"])(b, v, m, !1, null, "11140c33", null)),
            y = g.exports,
            _ = function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("div", { staticClass: "about" }, [t._v("\n  探索穿山甲到底说了什么\n")]) },
            w = [],
            x = { name: "About" },
            j = x,
            C = (a("ymiu"), Object(c["a"])(j, _, w, !1, null, "3de6366e", null)),
            O = C.exports,
            k = function() { var t = this,
                    e = t.$createElement,
                    a = t._self._c || e; return a("div", { directives: [{ name: "loading", rawName: "v-loading", value: t.loading, expression: "loading" }], staticClass: "video" }, [a("el-breadcrumb", { staticClass: "breadcrumb", attrs: { "separator-class": "el-icon-arrow-right" } }, [a("el-breadcrumb-item", [t._v(t._s(t.data.name))]), a("el-breadcrumb-item", [t._v(t._s(t.video.name))])], 1), a("el-row", { staticClass: "player" }, [a("el-col", { staticClass: "dplayer-wrap" }, [a("div", { ref: "dplayer", staticClass: "dplayer" })]), a("el-col", { staticClass: "player-playlist" }, [a("div", { staticClass: "album-name" }, [t._v(t._s(t.data.name))]), a("ul", { staticClass: "playlist" }, t._l(t.data.video, function(e, n) { return a("li", { key: e.id || e.name, class: { active: t.index === n }, on: { click: function(e) { t.switchVideo(n) } } }, [t._v(t._s(e.name))]) }))])], 1)], 1) },
            D = [],
            V = { props: ["id"], name: "Video", data: function() { return { data: {}, loading: !0, index: 0 } }, computed: { video: function() { return this.data.video ? this.data.video[this.index] : {} } }, created: function() { var t = this;
                    this.axios.get("./".concat(this.id, ".json")).then(function(e) { t.data = e.data.data, document.title = "".concat(t.data.name, " | DIYgod 的媒体库"), t.loading = !1, window.dp = new window.DPlayer({ container: t.$refs.dplayer, autoplay: !0, video: { url: "https://pan.prprpr.me/?/".concat(t.data.album, "/").concat(t.id, "/").concat(t.video.id || t.video.name, ".mp4") }, danmaku: { id: "".concat(t.data.album, "-").concat(t.id, "-").concat(t.video.id || t.video.name), api: "https://dplayer.prprpr.me/", addition: t.video.cid ? ["https://dplayer.prprpr.me/v3/bilibili?cid=".concat(t.video.cid)] : null } }), window.dp.on("ended", function() { t.switchVideo(t.index === t.data.video.length - 1 ? 0 : t.index + 1) }) }) }, methods: { switchVideo: function(t) { t !== this.index && (this.index = t, window.dp.switchVideo({ url: "https://pan.prprpr.me/?/".concat(this.data.album, "/").concat(this.id, "/").concat(this.video.id || this.video.name, ".mp4") }, { id: "".concat(this.data.album, "-").concat(this.id, "-").concat(this.video.id || this.video.name), api: "https://dplayer.prprpr.me/", addition: this.video.cid ? ["https://dplayer.prprpr.me/v3/bilibili?cid=".concat(this.video.cid)] : null })) } } },
            Y = V,
            P = (a("Ur83"), Object(c["a"])(Y, k, D, !1, null, "ab6e92be", null)),
            S = P.exports;
        n["default"].use(f["a"]); var E = new f["a"]({ routes: [{ path: "/", component: y }, { path: "/about", component: O, meta: { name: "关于" } }, { path: "/video/:id", component: S, props: !0 }] });
        E.afterEach(function(t) { t.meta && (document.title = t.meta.name ? "".concat(t.meta.name, " | DIYgod 的媒体库") : "DIYgod 的媒体库") }); var $ = E,
            I = a("vDqi"),
            Z = a.n(I);
        n["default"].config.productionTip = !1, n["default"].prototype.axios = Z.a, n["default"].use(r.a), new n["default"]({ router: $, render: function(t) { return t(p) } }).$mount("#app") }, Z7g8: function(t, e, a) { "use strict"; var n = a("9lQF"),
            i = a.n(n);
        i.a }, ZL7j: function(t, e, a) { "use strict"; var n = a("slcd"),
            i = a.n(n);
        i.a }, pLSf: function(t, e, a) {}, slcd: function(t, e, a) {}, ymiu: function(t, e, a) { "use strict"; var n = a("pLSf"),
            i = a.n(n);
        i.a } });
//# sourceMappingURL=app.456e66b7.js.map