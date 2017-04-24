(function(e, t) {
    "use strict";
    var n, i, r = e.document,
        o = e.location,
        s = e.jQuery,
        a = e.$,
        u = {},
        l = [],
        f = "1.9.0",
        c = l.concat,
        p = l.push,
        d = l.slice,
        h = l.indexOf,
        g = u.toString,
        m = u.hasOwnProperty,
        y = f.trim,
        v = function(e, t) { return new v.fn.init(e, t, n) },
        b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        x = /\S+/g,
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        T = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        C = /^[\],:{}\s]*$/,
        k = /(?:^|:|,)(?:\s*\[)+/g,
        E = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        S = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        A = /^-ms-/,
        j = /-([\da-z])/gi,
        D = function(e, t) { return t.toUpperCase() },
        L = function() {
            if (r.addEventListener) {
                r.removeEventListener("DOMContentLoaded", L, false);
                v.ready()
            } else if (r.readyState === "complete") {
                r.detachEvent("onreadystatechange", L);
                v.ready()
            }
        };
    v.fn = v.prototype = {
        jquery: f,
        constructor: v,
        init: function(e, n, i) {
            var o, s;
            if (!e) { return this }
            if (typeof e === "string") {
                if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) { o = [null, e, null] } else { o = T.exec(e) }
                if (o && (o[1] || !n)) {
                    if (o[1]) {
                        n = n instanceof v ? n[0] : n;
                        v.merge(this, v.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : r, true));
                        if (N.test(o[1]) && v.isPlainObject(n)) { for (o in n) { if (v.isFunction(this[o])) { this[o](n[o]) } else { this.attr(o, n[o]) } } }
                        return this
                    } else {
                        s = r.getElementById(o[2]);
                        if (s && s.parentNode) {
                            if (s.id !== o[2]) { return i.find(e) }
                            this.length = 1;
                            this[0] = s
                        }
                        this.context = r;
                        this.selector = e;
                        return this
                    }
                } else if (!n || n.jquery) { return (n || i).find(e) } else { return this.constructor(n).find(e) }
            } else if (e.nodeType) {
                this.context = this[0] = e;
                this.length = 1;
                return this
            } else if (v.isFunction(e)) { return i.ready(e) }
            if (e.selector !== t) {
                this.selector = e.selector;
                this.context = e.context
            }
            return v.makeArray(e, this)
        },
        selector: "",
        length: 0,
        size: function() { return this.length },
        toArray: function() { return d.call(this) },
        get: function(e) { return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e] },
        pushStack: function(e) {
            var t = v.merge(this.constructor(), e);
            t.prevObject = this;
            t.context = this.context;
            return t
        },
        each: function(e, t) { return v.each(this, e, t) },
        ready: function(e) { v.ready.promise().done(e); return this },
        slice: function() { return this.pushStack(d.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        map: function(e) { return this.pushStack(v.map(this, function(t, n) { return e.call(t, n, t) })) },
        end: function() { return this.prevObject || this.constructor(null) },
        push: p,
        sort: [].sort,
        splice: [].splice
    };
    v.fn.init.prototype = v.fn;
    v.extend = v.fn.extend = function() {
        var e, n, i, r, o, s, a = arguments[0] || {},
            u = 1,
            l = arguments.length,
            f = false;
        if (typeof a === "boolean") {
            f = a;
            a = arguments[1] || {};
            u = 2
        }
        if (typeof a !== "object" && !v.isFunction(a)) { a = {} }
        if (l === u) { a = this;--u }
        for (; u < l; u++) {
            if ((e = arguments[u]) != null) {
                for (n in e) {
                    i = a[n];
                    r = e[n];
                    if (a === r) { continue }
                    if (f && r && (v.isPlainObject(r) || (o = v.isArray(r)))) {
                        if (o) {
                            o = false;
                            s = i && v.isArray(i) ? i : []
                        } else { s = i && v.isPlainObject(i) ? i : {} }
                        a[n] = v.extend(f, s, r)
                    } else if (r !== t) { a[n] = r }
                }
            }
        }
        return a
    };
    v.extend({
        noConflict: function(t) { if (e.$ === v) { e.$ = a } if (t && e.jQuery === v) { e.jQuery = s } return v },
        isReady: false,
        readyWait: 1,
        holdReady: function(e) { if (e) { v.readyWait++ } else { v.ready(true) } },
        ready: function(e) {
            if (e === true ? --v.readyWait : v.isReady) { return }
            if (!r.body) { return setTimeout(v.ready) }
            v.isReady = true;
            if (e !== true && --v.readyWait > 0) { return }
            i.resolveWith(r, [v]);
            if (v.fn.trigger) { v(r).trigger("ready").off("ready") }
        },
        isFunction: function(e) { return v.type(e) === "function" },
        isArray: Array.isArray || function(e) { return v.type(e) === "array" },
        isWindow: function(e) { return e != null && e == e.window },
        isNumeric: function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
        type: function(e) { if (e == null) { return String(e) } return typeof e === "object" || typeof e === "function" ? u[g.call(e)] || "object" : typeof e },
        isPlainObject: function(e) { if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) { return false } try { if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf")) { return false } } catch (n) { return false } var i; for (i in e) {} return i === t || m.call(e, i) },
        isEmptyObject: function(e) { var t; for (t in e) { return false } return true },
        error: function(e) { throw new Error(e) },
        parseHTML: function(e, t, n) {
            if (!e || typeof e !== "string") { return null }
            if (typeof t === "boolean") {
                n = t;
                t = false
            }
            t = t || r;
            var i = N.exec(e),
                o = !n && [];
            if (i) { return [t.createElement(i[1])] }
            i = v.buildFragment([e], t, o);
            if (o) { v(o).remove() }
            return v.merge([], i.childNodes)
        },
        parseJSON: function(t) {
            if (e.JSON && e.JSON.parse) { return e.JSON.parse(t) }
            if (t === null) { return t }
            if (typeof t === "string") { t = v.trim(t); if (t) { if (C.test(t.replace(E, "@").replace(S, "]").replace(k, ""))) { return new Function("return " + t)() } } }
            v.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var i, r;
            if (!n || typeof n !== "string") { return null }
            try {
                if (e.DOMParser) {
                    r = new DOMParser;
                    i = r.parseFromString(n, "text/xml")
                } else {
                    i = new ActiveXObject("Microsoft.XMLDOM");
                    i.async = "false";
                    i.loadXML(n)
                }
            } catch (o) { i = t }
            if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) { v.error("Invalid XML: " + n) }
            return i
        },
        noop: function() {},
        globalEval: function(t) {
            if (t && v.trim(t)) {
                (e.execScript || function(t) { e["eval"].call(e, t) })(t)
            }
        },
        camelCase: function(e) { return e.replace(A, "ms-").replace(j, D) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t, n) {
            var i, r = 0,
                o = e.length,
                s = H(e);
            if (n) { if (s) { for (; r < o; r++) { i = t.apply(e[r], n); if (i === false) { break } } } else { for (r in e) { i = t.apply(e[r], n); if (i === false) { break } } } } else { if (s) { for (; r < o; r++) { i = t.call(e[r], r, e[r]); if (i === false) { break } } } else { for (r in e) { i = t.call(e[r], r, e[r]); if (i === false) { break } } } }
            return e
        },
        trim: y && !y.call("\ufeff ") ? function(e) { return e == null ? "" : y.call(e) } : function(e) { return e == null ? "" : (e + "").replace(w, "") },
        makeArray: function(e, t) { var n = t || []; if (e != null) { if (H(Object(e))) { v.merge(n, typeof e === "string" ? [e] : e) } else { p.call(n, e) } } return n },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (h) { return h.call(t, e, n) }
                i = t.length;
                n = n ? n < 0 ? Math.max(0, i + n) : n : 0;
                for (; n < i; n++) { if (n in t && t[n] === e) { return n } }
            }
            return -1
        },
        merge: function(e, n) {
            var i = n.length,
                r = e.length,
                o = 0;
            if (typeof i === "number") { for (; o < i; o++) { e[r++] = n[o] } } else { while (n[o] !== t) { e[r++] = n[o++] } }
            e.length = r;
            return e
        },
        grep: function(e, t, n) {
            var i, r = [],
                o = 0,
                s = e.length;
            n = !!n;
            for (; o < s; o++) { i = !!t(e[o], o); if (n !== i) { r.push(e[o]) } }
            return r
        },
        map: function(e, t, n) {
            var i, r = 0,
                o = e.length,
                s = H(e),
                a = [];
            if (s) { for (; r < o; r++) { i = t(e[r], r, n); if (i != null) { a[a.length] = i } } } else { for (r in e) { i = t(e[r], r, n); if (i != null) { a[a.length] = i } } }
            return c.apply([], a)
        },
        guid: 1,
        proxy: function(e, n) {
            var i, r, o;
            if (typeof n === "string") {
                i = e[n];
                n = e;
                e = i
            }
            if (!v.isFunction(e)) { return t }
            r = d.call(arguments, 2);
            o = function() { return e.apply(n || this, r.concat(d.call(arguments))) };
            o.guid = e.guid = e.guid || v.guid++;
            return o
        },
        access: function(e, n, i, r, o, s, a) {
            var u = 0,
                l = e.length,
                f = i == null;
            if (v.type(i) === "object") { o = true; for (u in i) { v.access(e, n, u, i[u], true, s, a) } } else if (r !== t) {
                o = true;
                if (!v.isFunction(r)) { a = true }
                if (f) {
                    if (a) {
                        n.call(e, r);
                        n = null
                    } else {
                        f = n;
                        n = function(e, t, n) { return f.call(v(e), n) }
                    }
                }
                if (n) { for (; u < l; u++) { n(e[u], i, a ? r : r.call(e[u], u, n(e[u], i))) } }
            }
            return o ? e : f ? n.call(e) : l ? n(e[0], i) : s
        },
        now: function() { return (new Date).getTime() }
    });
    v.ready.promise = function(t) {
        if (!i) {
            i = v.Deferred();
            if (r.readyState === "complete") { setTimeout(v.ready) } else if (r.addEventListener) {
                r.addEventListener("DOMContentLoaded", L, false);
                e.addEventListener("load", v.ready, false)
            } else {
                r.attachEvent("onreadystatechange", L);
                e.attachEvent("onload", v.ready);
                var n = false;
                try { n = e.frameElement == null && r.documentElement } catch (o) {}
                if (n && n.doScroll) {
                    (function s() {
                        if (!v.isReady) {
                            try { n.doScroll("left") } catch (e) { return setTimeout(s, 50) }
                            v.ready()
                        }
                    })()
                }
            }
        }
        return i.promise(t)
    };
    v.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { u["[object " + t + "]"] = t.toLowerCase() });

    function H(e) {
        var t = e.length,
            n = v.type(e);
        if (v.isWindow(e)) { return false }
        if (e.nodeType === 1 && t) { return true }
        return n === "array" || n !== "function" && (t === 0 || typeof t === "number" && t > 0 && t - 1 in e)
    }
    n = v(r);
    var M = {};

    function q(e) {
        var t = M[e] = {};
        v.each(e.match(x) || [], function(e, n) { t[n] = true });
        return t
    }
    v.Callbacks = function(e) {
        e = typeof e === "string" ? M[e] || q(e) : v.extend({}, e);
        var n, i, r, o, s, a, u = [],
            l = !e.once && [],
            f = function(t) {
                n = e.memory && t;
                i = true;
                a = o || 0;
                o = 0;
                s = u.length;
                r = true;
                for (; u && a < s; a++) { if (u[a].apply(t[0], t[1]) === false && e.stopOnFalse) { n = false; break } }
                r = false;
                if (u) { if (l) { if (l.length) { f(l.shift()) } } else if (n) { u = [] } else { c.disable() } }
            },
            c = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        (function i(t) { v.each(t, function(t, n) { var r = v.type(n); if (r === "function") { if (!e.unique || !c.has(n)) { u.push(n) } } else if (n && n.length && r !== "string") { i(n) } }) })(arguments);
                        if (r) { s = u.length } else if (n) {
                            o = t;
                            f(n)
                        }
                    }
                    return this
                },
                remove: function() { if (u) { v.each(arguments, function(e, t) { var n; while ((n = v.inArray(t, u, n)) > -1) { u.splice(n, 1); if (r) { if (n <= s) { s-- } if (n <= a) { a-- } } } }) } return this },
                has: function(e) { return v.inArray(e, u) > -1 },
                empty: function() { u = []; return this },
                disable: function() { u = l = n = t; return this },
                disabled: function() { return !u },
                lock: function() { l = t; if (!n) { c.disable() } return this },
                locked: function() { return !l },
                fireWith: function(e, t) {
                    t = t || [];
                    t = [e, t.slice ? t.slice() : t];
                    if (u && (!i || l)) { if (r) { l.push(t) } else { f(t) } }
                    return this
                },
                fire: function() { c.fireWith(this, arguments); return this },
                fired: function() { return !!i }
            };
        return c
    };
    v.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", v.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() { return n },
                    always: function() { r.done(arguments).fail(arguments); return this },
                    then: function() {
                        var e = arguments;
                        return v.Deferred(function(n) {
                            v.each(t, function(t, o) {
                                var s = o[0],
                                    a = v.isFunction(e[t]) && e[t];
                                r[o[1]](function() { var e = a && a.apply(this, arguments); if (e && v.isFunction(e.promise)) { e.promise().done(n.resolve).fail(n.reject).progress(n.notify) } else { n[s + "With"](this === i ? n.promise() : this, a ? [e] : arguments) } })
                            });
                            e = null
                        }).promise()
                    },
                    promise: function(e) { return e != null ? v.extend(e, i) : i }
                },
                r = {};
            i.pipe = i.then;
            v.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add;
                if (a) { s.add(function() { n = a }, t[e ^ 1][2].disable, t[2][2].lock) }
                r[o[0]] = function() { r[o[0] + "With"](this === r ? i : this, arguments); return this };
                r[o[0] + "With"] = s.fireWith
            });
            i.promise(r);
            if (e) { e.call(r, r) }
            return r
        },
        when: function(e) {
            var t = 0,
                n = d.call(arguments),
                i = n.length,
                r = i !== 1 || e && v.isFunction(e.promise) ? i : 0,
                o = r === 1 ? e : v.Deferred(),
                s = function(e, t, n) {
                    return function(i) {
                        t[e] = this;
                        n[e] = arguments.length > 1 ? d.call(arguments) : i;
                        if (n === a) { o.notifyWith(t, n) } else if (!--r) { o.resolveWith(t, n) }
                    }
                },
                a, u, l;
            if (i > 1) {
                a = new Array(i);
                u = new Array(i);
                l = new Array(i);
                for (; t < i; t++) { if (n[t] && v.isFunction(n[t].promise)) { n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) } else {--r } }
            }
            if (!r) { o.resolveWith(l, n) }
            return o.promise()
        }
    });
    v.support = function() {
        var t, n, i, o, s, a, u, l, f, c, p = r.createElement("div");
        p.setAttribute("className", "t");
        p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        n = p.getElementsByTagName("*");
        i = p.getElementsByTagName("a")[0];
        if (!n || !i || !n.length) { return {} }
        o = r.createElement("select");
        s = o.appendChild(r.createElement("option"));
        a = p.getElementsByTagName("input")[0];
        i.style.cssText = "top:1px;float:left;opacity:.5";
        t = { getSetAttribute: p.className !== "t", leadingWhitespace: p.firstChild.nodeType === 3, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(i.getAttribute("style")), hrefNormalized: i.getAttribute("href") === "/a", opacity: /^0.5/.test(i.style.opacity), cssFloat: !!i.style.cssFloat, checkOn: !!a.value, optSelected: s.selected, enctype: !!r.createElement("form").enctype, html5Clone: r.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>", boxModel: r.compatMode === "CSS1Compat", deleteExpando: true, noCloneEvent: true, inlineBlockNeedsLayout: false, shrinkWrapBlocks: false, reliableMarginRight: true, boxSizingReliable: true, pixelPosition: false };
        a.checked = true;
        t.noCloneChecked = a.cloneNode(true).checked;
        o.disabled = true;
        t.optDisabled = !s.disabled;
        try { delete p.test } catch (d) { t.deleteExpando = false }
        a = r.createElement("input");
        a.setAttribute("value", "");
        t.input = a.getAttribute("value") === "";
        a.value = "t";
        a.setAttribute("type", "radio");
        t.radioValue = a.value === "t";
        a.setAttribute("checked", "t");
        a.setAttribute("name", "t");
        u = r.createDocumentFragment();
        u.appendChild(a);
        t.appendChecked = a.checked;
        t.checkClone = u.cloneNode(true).cloneNode(true).lastChild.checked;
        if (p.attachEvent) {
            p.attachEvent("onclick", function() { t.noCloneEvent = false });
            p.cloneNode(true).click()
        }
        for (c in { submit: true, change: true, focusin: true }) {
            p.setAttribute(l = "on" + c, "t");
            t[c + "Bubbles"] = l in e || p.attributes[l].expando === false
        }
        p.style.backgroundClip = "content-box";
        p.cloneNode(true).style.backgroundClip = "";
        t.clearCloneStyle = p.style.backgroundClip === "content-box";
        v(function() {
            var n, i, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = r.getElementsByTagName("body")[0];
            if (!a) { return }
            n = r.createElement("div");
            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            a.appendChild(n).appendChild(p);
            p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            o = p.getElementsByTagName("td");
            o[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            f = o[0].offsetHeight === 0;
            o[0].style.display = "";
            o[1].style.display = "none";
            t.reliableHiddenOffsets = f && o[0].offsetHeight === 0;
            p.innerHTML = "";
            p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            t.boxSizing = p.offsetWidth === 4;
            t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1;
            if (e.getComputedStyle) {
                t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%";
                t.boxSizingReliable = (e.getComputedStyle(p, null) || { width: "4px" }).width === "4px";
                i = p.appendChild(r.createElement("div"));
                i.style.cssText = p.style.cssText = s;
                i.style.marginRight = i.style.width = "0";
                p.style.width = "1px";
                t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)
            }
            if (typeof p.style.zoom !== "undefined") {
                p.innerHTML = "";
                p.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1";
                t.inlineBlockNeedsLayout = p.offsetWidth === 3;
                p.style.display = "block";
                p.innerHTML = "<div></div>";
                p.firstChild.style.width = "5px";
                t.shrinkWrapBlocks = p.offsetWidth !== 3;
                a.style.zoom = 1
            }
            a.removeChild(n);
            n = p = o = i = null
        });
        n = o = u = s = i = a = null;
        return t
    }();
    var _ = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        F = /([A-Z])/g;

    function O(e, n, i, r) {
        if (!v.acceptData(e)) { return }
        var o, s, a = v.expando,
            u = typeof n === "string",
            f = e.nodeType,
            c = f ? v.cache : e,
            p = f ? e[a] : e[a] && a;
        if ((!p || !c[p] || !r && !c[p].data) && u && i === t) { return }
        if (!p) { if (f) { e[a] = p = l.pop() || v.guid++ } else { p = a } }
        if (!c[p]) { c[p] = {}; if (!f) { c[p].toJSON = v.noop } }
        if (typeof n === "object" || typeof n === "function") { if (r) { c[p] = v.extend(c[p], n) } else { c[p].data = v.extend(c[p].data, n) } }
        o = c[p];
        if (!r) {
            if (!o.data) { o.data = {} }
            o = o.data
        }
        if (i !== t) { o[v.camelCase(n)] = i }
        if (u) { s = o[n]; if (s == null) { s = o[v.camelCase(n)] } } else { s = o }
        return s
    }

    function B(e, t, n) {
        if (!v.acceptData(e)) { return }
        var i, r, o, s = e.nodeType,
            a = s ? v.cache : e,
            u = s ? e[v.expando] : v.expando;
        if (!a[u]) { return }
        if (t) { i = n ? a[u] : a[u].data; if (i) { if (!v.isArray(t)) { if (t in i) { t = [t] } else { t = v.camelCase(t); if (t in i) { t = [t] } else { t = t.split(" ") } } } else { t = t.concat(v.map(t, v.camelCase)) } for (r = 0, o = t.length; r < o; r++) { delete i[t[r]] } if (!(n ? R : v.isEmptyObject)(i)) { return } } }
        if (!n) { delete a[u].data; if (!R(a[u])) { return } }
        if (s) { v.cleanData([e], true) } else if (v.support.deleteExpando || a != a.window) { delete a[u] } else { a[u] = null }
    }
    v.extend({ cache: {}, expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noData: { embed: true, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: true }, hasData: function(e) { e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando]; return !!e && !R(e) }, data: function(e, t, n) { return O(e, t, n, false) }, removeData: function(e, t) { return B(e, t, false) }, _data: function(e, t, n) { return O(e, t, n, true) }, _removeData: function(e, t) { return B(e, t, true) }, acceptData: function(e) { var t = e.nodeName && v.noData[e.nodeName.toLowerCase()]; return !t || t !== true && e.getAttribute("classid") === t } });
    v.fn.extend({
        data: function(e, n) {
            var i, r, o = this[0],
                s = 0,
                a = null;
            if (e === t) {
                if (this.length) {
                    a = v.data(o);
                    if (o.nodeType === 1 && !v._data(o, "parsedAttrs")) {
                        i = o.attributes;
                        for (; s < i.length; s++) {
                            r = i[s].name;
                            if (!r.indexOf("data-")) {
                                r = v.camelCase(r.substring(5));
                                P(o, r, a[r])
                            }
                        }
                        v._data(o, "parsedAttrs", true)
                    }
                }
                return a
            }
            if (typeof e === "object") { return this.each(function() { v.data(this, e) }) }
            return v.access(this, function(n) {
                if (n === t) { return o ? P(o, e, v.data(o, e)) : null }
                this.each(function() { v.data(this, e, n) })
            }, null, n, arguments.length > 1, null, true)
        },
        removeData: function(e) { return this.each(function() { v.removeData(this, e) }) }
    });

    function P(e, n, i) {
        if (i === t && e.nodeType === 1) {
            var r = "data-" + n.replace(F, "-$1").toLowerCase();
            i = e.getAttribute(r);
            if (typeof i === "string") {
                try { i = i === "true" ? true : i === "false" ? false : i === "null" ? null : +i + "" === i ? +i : _.test(i) ? v.parseJSON(i) : i } catch (o) {}
                v.data(e, n, i)
            } else { i = t }
        }
        return i
    }

    function R(e) { var t; for (t in e) { if (t === "data" && v.isEmptyObject(e[t])) { continue } if (t !== "toJSON") { return false } } return true }
    v.extend({
        queue: function(e, t, n) {
            var i;
            if (e) {
                t = (t || "fx") + "queue";
                i = v._data(e, t);
                if (n) { if (!i || v.isArray(n)) { i = v._data(e, t, v.makeArray(n)) } else { i.push(n) } }
                return i || []
            }
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = v._queueHooks(e, t),
                s = function() { v.dequeue(e, t) };
            if (r === "inprogress") {
                r = n.shift();
                i--
            }
            o.cur = r;
            if (r) {
                if (t === "fx") { n.unshift("inprogress") }
                delete o.stop;
                r.call(e, s, o)
            }
            if (!i && o) { o.empty.fire() }
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function() {
                    v._removeData(e, t + "queue");
                    v._removeData(e, n)
                })
            })
        }
    });
    v.fn.extend({
        queue: function(e, n) {
            var i = 2;
            if (typeof e !== "string") {
                n = e;
                e = "fx";
                i--
            }
            if (arguments.length < i) { return v.queue(this[0], e) }
            return n === t ? this : this.each(function() {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e);
                if (e === "fx" && t[0] !== "inprogress") { v.dequeue(this, e) }
            })
        },
        dequeue: function(e) { return this.each(function() { v.dequeue(this, e) }) },
        delay: function(e, t) {
            e = v.fx ? v.fx.speeds[e] || e : e;
            t = t || "fx";
            return this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() { clearTimeout(i) }
            })
        },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, n) {
            var i, r = 1,
                o = v.Deferred(),
                s = this,
                a = this.length,
                u = function() { if (!--r) { o.resolveWith(s, [s]) } };
            if (typeof e !== "string") {
                n = e;
                e = t
            }
            e = e || "fx";
            while (a--) {
                i = v._data(s[a], e + "queueHooks");
                if (i && i.empty) {
                    r++;
                    i.empty.add(u)
                }
            }
            u();
            return o.promise(n)
        }
    });
    var W, $, I = /[\t\r\n]/g,
        z = /\r/g,
        X = /^(?:input|select|textarea|button|object)$/i,
        U = /^(?:a|area)$/i,
        V = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Y = /^(?:checked|selected)$/i,
        J = v.support.getSetAttribute,
        G = v.support.input;
    v.fn.extend({
        attr: function(e, t) { return v.access(this, v.attr, e, t, arguments.length > 1) },
        removeAttr: function(e) { return this.each(function() { v.removeAttr(this, e) }) },
        prop: function(e, t) { return v.access(this, v.prop, e, t, arguments.length > 1) },
        removeProp: function(e) {
            e = v.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = t;
                    delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, i, r, o, s = 0,
                a = this.length,
                u = typeof e === "string" && e;
            if (v.isFunction(e)) { return this.each(function(t) { v(this).addClass(e.call(this, t, this.className)) }) }
            if (u) {
                t = (e || "").match(x) || [];
                for (; s < a; s++) {
                    n = this[s];
                    i = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(I, " ") : " ");
                    if (i) {
                        o = 0;
                        while (r = t[o++]) { if (i.indexOf(" " + r + " ") < 0) { i += r + " " } }
                        n.className = v.trim(i)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s = 0,
                a = this.length,
                u = arguments.length === 0 || typeof e === "string" && e;
            if (v.isFunction(e)) { return this.each(function(t) { v(this).removeClass(e.call(this, t, this.className)) }) }
            if (u) {
                t = (e || "").match(x) || [];
                for (; s < a; s++) {
                    n = this[s];
                    i = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(I, " ") : "");
                    if (i) {
                        o = 0;
                        while (r = t[o++]) { while (i.indexOf(" " + r + " ") >= 0) { i = i.replace(" " + r + " ", " ") } }
                        n.className = e ? v.trim(i) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = typeof t === "boolean";
            if (v.isFunction(e)) { return this.each(function(n) { v(this).toggleClass(e.call(this, n, this.className, t), t) }) }
            return this.each(function() {
                if (n === "string") {
                    var r, o = 0,
                        s = v(this),
                        a = t,
                        u = e.match(x) || [];
                    while (r = u[o++]) {
                        a = i ? a : !s.hasClass(r);
                        s[a ? "addClass" : "removeClass"](r)
                    }
                } else if (n === "undefined" || n === "boolean") {
                    if (this.className) { v._data(this, "__className__", this.className) }
                    this.className = this.className || e === false ? "" : v._data(this, "__className__") || ""
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                i = this.length;
            for (; n < i; n++) { if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(I, " ").indexOf(t) >= 0) { return true } }
            return false
        },
        val: function(e) {
            var n, i, r, o = this[0];
            if (!arguments.length) {
                if (o) {
                    n = v.valHooks[o.type] || v.valHooks[o.nodeName.toLowerCase()];
                    if (n && "get" in n && (i = n.get(o, "value")) !== t) { return i }
                    i = o.value;
                    return typeof i === "string" ? i.replace(z, "") : i == null ? "" : i
                }
                return
            }
            r = v.isFunction(e);
            return this.each(function(i) {
                var o, s = v(this);
                if (this.nodeType !== 1) { return }
                if (r) { o = e.call(this, i, s.val()) } else { o = e }
                if (o == null) { o = "" } else if (typeof o === "number") { o += "" } else if (v.isArray(o)) { o = v.map(o, function(e) { return e == null ? "" : e + "" }) }
                n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, o, "value") === t) { this.value = o }
            })
        }
    });
    v.extend({
        valHooks: {
            option: { get: function(e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } },
            select: {
                get: function(e) {
                    var t, n, i = e.options,
                        r = e.selectedIndex,
                        o = e.type === "select-one" || r < 0,
                        s = o ? null : [],
                        a = o ? r + 1 : i.length,
                        u = r < 0 ? a : o ? r : 0;
                    for (; u < a; u++) {
                        n = i[u];
                        if ((n.selected || u === r) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (o) { return t }
                            s.push(t)
                        }
                    }
                    return s
                },
                set: function(e, t) {
                    var n = v.makeArray(t);
                    v(e).find("option").each(function() { this.selected = v.inArray(v(this).val(), n) >= 0 });
                    if (!n.length) { e.selectedIndex = -1 }
                    return n
                }
            }
        },
        attr: function(e, n, i) {
            var r, o, s, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) { return }
            if (typeof e.getAttribute === "undefined") { return v.prop(e, n, i) }
            s = a !== 1 || !v.isXMLDoc(e);
            if (s) {
                n = n.toLowerCase();
                o = v.attrHooks[n] || (V.test(n) ? $ : W)
            }
            if (i !== t) { if (i === null) { v.removeAttr(e, n) } else if (o && s && "set" in o && (r = o.set(e, i, n)) !== t) { return r } else { e.setAttribute(n, i + ""); return i } } else if (o && s && "get" in o && (r = o.get(e, n)) !== null) { return r } else { if (typeof e.getAttribute !== "undefined") { r = e.getAttribute(n) } return r == null ? t : r }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(x);
            if (o && e.nodeType === 1) {
                while (n = o[r++]) {
                    i = v.propFix[n] || n;
                    if (V.test(n)) { if (!J && Y.test(n)) { e[v.camelCase("default-" + n)] = e[i] = false } else { e[i] = false } } else { v.attr(e, n, "") }
                    e.removeAttribute(J ? n : i)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        e.setAttribute("type", t);
                        if (n) { e.value = n }
                        return t
                    }
                }
            }
        },
        propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
        prop: function(e, n, i) {
            var r, o, s, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) { return }
            s = a !== 1 || !v.isXMLDoc(e);
            if (s) {
                n = v.propFix[n] || n;
                o = v.propHooks[n]
            }
            if (i !== t) { if (o && "set" in o && (r = o.set(e, i, n)) !== t) { return r } else { return e[n] = i } } else { if (o && "get" in o && (r = o.get(e, n)) !== null) { return r } else { return e[n] } }
        },
        propHooks: { tabIndex: { get: function(e) { var n = e.getAttributeNode("tabindex"); return n && n.specified ? parseInt(n.value, 10) : X.test(e.nodeName) || U.test(e.nodeName) && e.href ? 0 : t } } }
    });
    $ = {
        get: function(e, n) {
            var i = v.prop(e, n),
                r = typeof i === "boolean" && e.getAttribute(n),
                o = typeof i === "boolean" ? G && J ? r != null : Y.test(n) ? e[v.camelCase("default-" + n)] : !!r : e.getAttributeNode(n);
            return o && o.value !== false ? n.toLowerCase() : t
        },
        set: function(e, t, n) { if (t === false) { v.removeAttr(e, n) } else if (G && J || !Y.test(n)) { e.setAttribute(!J && v.propFix[n] || n, n) } else { e[v.camelCase("default-" + n)] = e[n] = true } return n }
    };
    if (!G || !J) { v.attrHooks.value = { get: function(e, n) { var i = e.getAttributeNode(n); return v.nodeName(e, "input") ? e.defaultValue : i && i.specified ? i.value : t }, set: function(e, t, n) { if (v.nodeName(e, "input")) { e.defaultValue = t } else { return W && W.set(e, t, n) } } } }
    if (!J) {
        W = v.valHooks.button = {
            get: function(e, n) { var i = e.getAttributeNode(n); return i && (n === "id" || n === "name" || n === "coords" ? i.value !== "" : i.specified) ? i.value : t },
            set: function(e, n, i) {
                var r = e.getAttributeNode(i);
                if (!r) { e.setAttributeNode(r = e.ownerDocument.createAttribute(i)) }
                r.value = n += "";
                return i === "value" || n === e.getAttribute(i) ? n : t
            }
        };
        v.attrHooks.contenteditable = { get: W.get, set: function(e, t, n) { W.set(e, t === "" ? false : t, n) } };
        v.each(["width", "height"], function(e, t) { v.attrHooks[t] = v.extend(v.attrHooks[t], { set: function(e, n) { if (n === "") { e.setAttribute(t, "auto"); return n } } }) })
    }
    if (!v.support.hrefNormalized) {
        v.each(["href", "src", "width", "height"], function(e, n) { v.attrHooks[n] = v.extend(v.attrHooks[n], { get: function(e) { var i = e.getAttribute(n, 2); return i == null ? t : i } }) });
        v.each(["href", "src"], function(e, t) { v.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } })
    }
    if (!v.support.style) { v.attrHooks.style = { get: function(e) { return e.style.cssText || t }, set: function(e, t) { return e.style.cssText = t + "" } } }
    if (!v.support.optSelected) { v.propHooks.selected = v.extend(v.propHooks.selected, { get: function(e) { var t = e.parentNode; if (t) { t.selectedIndex; if (t.parentNode) { t.parentNode.selectedIndex } } return null } }) }
    if (!v.support.enctype) { v.propFix.enctype = "encoding" }
    if (!v.support.checkOn) { v.each(["radio", "checkbox"], function() { v.valHooks[this] = { get: function(e) { return e.getAttribute("value") === null ? "on" : e.value } } }) }
    v.each(["radio", "checkbox"], function() { v.valHooks[this] = v.extend(v.valHooks[this], { set: function(e, t) { if (v.isArray(t)) { return e.checked = v.inArray(v(e).val(), t) >= 0 } } }) });
    var Q = /^(?:input|select|textarea)$/i,
        K = /^key/,
        Z = /^(?:mouse|contextmenu)|click/,
        ee = /^(?:focusinfocus|focusoutblur)$/,
        te = /^([^.]*)(?:\.(.+)|)$/;

    function ne() { return true }

    function ie() { return false }
    v.event = {
        global: {},
        add: function(e, n, i, r, o) {
            var s, a, u, l, f, c, p, d, h, g, m, y = e.nodeType !== 3 && e.nodeType !== 8 && v._data(e);
            if (!y) { return }
            if (i.handler) {
                s = i;
                i = s.handler;
                o = s.selector
            }
            if (!i.guid) { i.guid = v.guid++ }
            if (!(l = y.events)) { l = y.events = {} }
            if (!(a = y.handle)) {
                a = y.handle = function(e) { return typeof v !== "undefined" && (!e || v.event.triggered !== e.type) ? v.event.dispatch.apply(a.elem, arguments) : t };
                a.elem = e
            }
            n = (n || "").match(x) || [""];
            f = n.length;
            while (f--) {
                u = te.exec(n[f]) || [];
                h = m = u[1];
                g = (u[2] || "").split(".").sort();
                p = v.event.special[h] || {};
                h = (o ? p.delegateType : p.bindType) || h;
                p = v.event.special[h] || {};
                c = v.extend({ type: h, origType: m, data: r, handler: i, guid: i.guid, selector: o, needsContext: o && v.expr.match.needsContext.test(o), namespace: g.join(".") }, s);
                if (!(d = l[h])) {
                    d = l[h] = [];
                    d.delegateCount = 0;
                    if (!p.setup || p.setup.call(e, r, g, a) === false) { if (e.addEventListener) { e.addEventListener(h, a, false) } else if (e.attachEvent) { e.attachEvent("on" + h, a) } }
                }
                if (p.add) { p.add.call(e, c); if (!c.handler.guid) { c.handler.guid = i.guid } }
                if (o) { d.splice(d.delegateCount++, 0, c) } else { d.push(c) }
                v.event.global[h] = true
            }
            e = null
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, u, l, f, c, p, d, h, g, m = v.hasData(e) && v._data(e);
            if (!m || !(u = m.events)) { return }
            t = (t || "").match(x) || [""];
            l = t.length;
            while (l--) {
                a = te.exec(t[l]) || [];
                d = g = a[1];
                h = (a[2] || "").split(".").sort();
                if (!d) { for (d in u) { v.event.remove(e, d + t[l], n, i, true) } continue }
                c = v.event.special[d] || {};
                d = (i ? c.delegateType : c.bindType) || d;
                p = u[d] || [];
                a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                s = o = p.length;
                while (o--) { f = p[o]; if ((r || g === f.origType) && (!n || n.guid === f.guid) && (!a || a.test(f.namespace)) && (!i || i === f.selector || i === "**" && f.selector)) { p.splice(o, 1); if (f.selector) { p.delegateCount-- } if (c.remove) { c.remove.call(e, f) } } }
                if (s && !p.length) {
                    if (!c.teardown || c.teardown.call(e, h, m.handle) === false) { v.removeEvent(e, d, m.handle) }
                    delete u[d]
                }
            }
            if (v.isEmptyObject(u)) {
                delete m.handle;
                v._removeData(e, "events")
            }
        },
        trigger: function(n, i, o, s) {
            var a, u, l, f, c, p, d, h = [o || r],
                g = n.type || n,
                m = n.namespace ? n.namespace.split(".") : [];
            u = l = o = o || r;
            if (o.nodeType === 3 || o.nodeType === 8) { return }
            if (ee.test(g + v.event.triggered)) { return }
            if (g.indexOf(".") >= 0) {
                m = g.split(".");
                g = m.shift();
                m.sort()
            }
            c = g.indexOf(":") < 0 && "on" + g;
            n = n[v.expando] ? n : new v.Event(g, typeof n === "object" && n);
            n.isTrigger = true;
            n.namespace = m.join(".");
            n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            n.result = t;
            if (!n.target) { n.target = o }
            i = i == null ? [n] : v.makeArray(i, [n]);
            d = v.event.special[g] || {};
            if (!s && d.trigger && d.trigger.apply(o, i) === false) { return }
            if (!s && !d.noBubble && !v.isWindow(o)) {
                f = d.delegateType || g;
                if (!ee.test(f + g)) { u = u.parentNode }
                for (; u; u = u.parentNode) {
                    h.push(u);
                    l = u
                }
                if (l === (o.ownerDocument || r)) { h.push(l.defaultView || l.parentWindow || e) }
            }
            a = 0;
            while ((u = h[a++]) && !n.isPropagationStopped()) {
                n.type = a > 1 ? f : d.bindType || g;
                p = (v._data(u, "events") || {})[n.type] && v._data(u, "handle");
                if (p) { p.apply(u, i) }
                p = c && u[c];
                if (p && v.acceptData(u) && p.apply && p.apply(u, i) === false) { n.preventDefault() }
            }
            n.type = g;
            if (!s && !n.isDefaultPrevented()) {
                if ((!d._default || d._default.apply(o.ownerDocument, i) === false) && !(g === "click" && v.nodeName(o, "a")) && v.acceptData(o)) {
                    if (c && o[g] && !v.isWindow(o)) {
                        l = o[c];
                        if (l) { o[c] = null }
                        v.event.triggered = g;
                        try { o[g]() } catch (y) {}
                        v.event.triggered = t;
                        if (l) { o[c] = l }
                    }
                }
            }
            return n.result
        },
        dispatch: function(e) {
            e = v.event.fix(e);
            var n, i, r, o, s, a = [],
                u = d.call(arguments),
                l = (v._data(this, "events") || {})[e.type] || [],
                f = v.event.special[e.type] || {};
            u[0] = e;
            e.delegateTarget = this;
            if (f.preDispatch && f.preDispatch.call(this, e) === false) { return }
            a = v.event.handlers.call(this, e, l);
            n = 0;
            while ((o = a[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = o.elem;
                i = 0;
                while ((s = o.handlers[i++]) && !e.isImmediatePropagationStopped()) {
                    if (!e.namespace_re || e.namespace_re.test(s.namespace)) {
                        e.handleObj = s;
                        e.data = s.data;
                        r = ((v.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u);
                        if (r !== t) {
                            if ((e.result = r) === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (f.postDispatch) { f.postDispatch.call(this, e) }
            return e.result
        },
        handlers: function(e, n) {
            var i, r, o, s, a = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || e.type !== "click")) {
                for (; l != this; l = l.parentNode || this) {
                    if (l.disabled !== true || e.type !== "click") {
                        r = [];
                        for (i = 0; i < u; i++) {
                            s = n[i];
                            o = s.selector + " ";
                            if (r[o] === t) { r[o] = s.needsContext ? v(o, this).index(l) >= 0 : v.find(o, this, null, [l]).length }
                            if (r[o]) { r.push(s) }
                        }
                        if (r.length) { a.push({ elem: l, handlers: r }) }
                    }
                }
            }
            if (u < n.length) { a.push({ elem: this, handlers: n.slice(u) }) }
            return a
        },
        fix: function(e) {
            if (e[v.expando]) { return e }
            var t, n, i = e,
                o = v.event.fixHooks[e.type] || {},
                s = o.props ? this.props.concat(o.props) : this.props;
            e = new v.Event(i);
            t = s.length;
            while (t--) {
                n = s[t];
                e[n] = i[n]
            }
            if (!e.target) { e.target = i.srcElement || r }
            if (e.target.nodeType === 3) { e.target = e.target.parentNode }
            e.metaKey = !!e.metaKey;
            return o.filter ? o.filter(e, i) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { if (e.which == null) { e.which = t.charCode != null ? t.charCode : t.keyCode } return e } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var i, o, s, a = n.button,
                    u = n.fromElement;
                if (e.pageX == null && n.clientX != null) {
                    i = e.target.ownerDocument || r;
                    o = i.documentElement;
                    s = i.body;
                    e.pageX = n.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0);
                    e.pageY = n.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)
                }
                if (!e.relatedTarget && u) { e.relatedTarget = u === e.target ? n.toElement : u }
                if (!e.which && a !== t) { e.which = a & 1 ? 1 : a & 2 ? 3 : a & 4 ? 2 : 0 }
                return e
            }
        },
        special: {
            load: { noBubble: true },
            click: { trigger: function() { if (v.nodeName(this, "input") && this.type === "checkbox" && this.click) { this.click(); return false } } },
            focus: { trigger: function() { if (this !== r.activeElement && this.focus) { try { this.focus(); return false } catch (e) {} } }, delegateType: "focusin" },
            blur: { trigger: function() { if (this === r.activeElement && this.blur) { this.blur(); return false } }, delegateType: "focusout" },
            beforeunload: {
                postDispatch: function(e) {
                    if (e.result !== t) {
                        e.originalEvent.returnValue = e.result;
                    }
                }
            }
        },
        simulate: function(e, t, n, i) { var r = v.extend(new v.Event, n, { type: e, isSimulated: true, originalEvent: {} }); if (i) { v.event.trigger(r, null, t) } else { v.event.dispatch.call(t, r) } if (r.isDefaultPrevented()) { n.preventDefault() } }
    };
    v.removeEvent = r.removeEventListener ? function(e, t, n) { if (e.removeEventListener) { e.removeEventListener(t, n, false) } } : function(e, t, n) {
        var i = "on" + t;
        if (e.detachEvent) {
            if (typeof e[i] === "undefined") { e[i] = null }
            e.detachEvent(i, n)
        }
    };
    v.Event = function(e, t) {
        if (!(this instanceof v.Event)) { return new v.Event(e, t) }
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || e.returnValue === false || e.getPreventDefault && e.getPreventDefault() ? ne : ie
        } else { this.type = e }
        if (t) { v.extend(this, t) }
        this.timeStamp = e && e.timeStamp || v.now();
        this[v.expando] = true
    };
    v.Event.prototype = {
        isDefaultPrevented: ie,
        isPropagationStopped: ie,
        isImmediatePropagationStopped: ie,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ne;
            if (!e) { return }
            if (e.preventDefault) { e.preventDefault() } else { e.returnValue = false }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ne;
            if (!e) { return }
            if (e.stopPropagation) { e.stopPropagation() }
            e.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ne;
            this.stopPropagation()
        }
    };
    v.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                if (!r || r !== i && !v.contains(i, r)) {
                    e.type = o.origType;
                    n = o.handler.apply(this, arguments);
                    e.type = t
                }
                return n
            }
        }
    });
    if (!v.support.submitBubbles) {
        v.event.special.submit = {
            setup: function() {
                if (v.nodeName(this, "form")) { return false }
                v.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        i = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                    if (i && !v._data(i, "submitBubbles")) {
                        v.event.add(i, "submit._submit", function(e) { e._submit_bubble = true });
                        v._data(i, "submitBubbles", true)
                    }
                })
            },
            postDispatch: function(e) { if (e._submit_bubble) { delete e._submit_bubble; if (this.parentNode && !e.isTrigger) { v.event.simulate("submit", this.parentNode, e, true) } } },
            teardown: function() {
                if (v.nodeName(this, "form")) { return false }
                v.event.remove(this, "._submit")
            }
        }
    }
    if (!v.support.changeBubbles) {
        v.event.special.change = {
            setup: function() {
                if (Q.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        v.event.add(this, "propertychange._change", function(e) { if (e.originalEvent.propertyName === "checked") { this._just_changed = true } });
                        v.event.add(this, "click._change", function(e) {
                            if (this._just_changed && !e.isTrigger) { this._just_changed = false }
                            v.event.simulate("change", this, e, true)
                        })
                    }
                    return false
                }
                v.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    if (Q.test(t.nodeName) && !v._data(t, "changeBubbles")) {
                        v.event.add(t, "change._change", function(e) { if (this.parentNode && !e.isSimulated && !e.isTrigger) { v.event.simulate("change", this.parentNode, e, true) } });
                        v._data(t, "changeBubbles", true)
                    }
                })
            },
            handle: function(e) { var t = e.target; if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") { return e.handleObj.handler.apply(this, arguments) } },
            teardown: function() { v.event.remove(this, "._change"); return !Q.test(this.nodeName) }
        }
    }
    if (!v.support.focusinBubbles) {
        v.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = 0,
                i = function(e) { v.event.simulate(t, e.target, v.event.fix(e), true) };
            v.event.special[t] = { setup: function() { if (n++ === 0) { r.addEventListener(e, i, true) } }, teardown: function() { if (--n === 0) { r.removeEventListener(e, i, true) } } }
        })
    }
    v.fn.extend({
        on: function(e, n, i, r, o) {
            var s, a;
            if (typeof e === "object") {
                if (typeof n !== "string") {
                    i = i || n;
                    n = t
                }
                for (a in e) { this.on(a, n, i, e[a], o) }
                return this
            }
            if (i == null && r == null) {
                r = n;
                i = n = t
            } else if (r == null) {
                if (typeof n === "string") {
                    r = i;
                    i = t
                } else {
                    r = i;
                    i = n;
                    n = t
                }
            }
            if (r === false) { r = ie } else if (!r) { return this }
            if (o === 1) {
                s = r;
                r = function(e) { v().off(e); return s.apply(this, arguments) };
                r.guid = s.guid || (s.guid = v.guid++)
            }
            return this.each(function() { v.event.add(this, e, r, i, n) })
        },
        one: function(e, t, n, i) { return this.on(e, t, n, i, 1) },
        off: function(e, n, i) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) {
                r = e.handleObj;
                v(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                return this
            }
            if (typeof e === "object") { for (o in e) { this.off(o, n, e[o]) } return this }
            if (n === false || typeof n === "function") {
                i = n;
                n = t
            }
            if (i === false) { i = ie }
            return this.each(function() { v.event.remove(this, e, i, n) })
        },
        bind: function(e, t, n) { return this.on(e, null, t, n) },
        unbind: function(e, t) { return this.off(e, null, t) },
        delegate: function(e, t, n, i) { return this.on(t, e, n, i) },
        undelegate: function(e, t, n) { return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n) },
        trigger: function(e, t) { return this.each(function() { v.event.trigger(e, t, this) }) },
        triggerHandler: function(e, t) { var n = this[0]; if (n) { return v.event.trigger(e, t, n, true) } },
        hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) }
    });
    v.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(e, t) { v.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) }; if (K.test(t)) { v.event.fixHooks[t] = v.event.keyHooks } if (Z.test(t)) { v.event.fixHooks[t] = v.event.mouseHooks } });
    (function(e, t) {
        var n, i, r, o, s, a, u, l, f, c, p, d, h, g, m, y, b, x = "sizzle" + -new Date,
            w = e.document,
            T = {},
            N = 0,
            C = 0,
            k = re(),
            E = re(),
            S = re(),
            A = typeof t,
            j = 1 << 31,
            D = [],
            L = D.pop,
            H = D.push,
            M = D.slice,
            q = D.indexOf || function(e) {
                var t = 0,
                    n = this.length;
                for (; t < n; t++) { if (this[t] === e) { return t } }
                return -1
            },
            _ = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = F.replace("w", "w#"),
            B = "([*^$|!~]?=)",
            P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
            R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
            W = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
            $ = new RegExp("^" + _ + "*," + _ + "*"),
            I = new RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
            z = new RegExp(R),
            X = new RegExp("^" + O + "$"),
            U = { ID: new RegExp("^#(" + F + ")"), CLASS: new RegExp("^\\.(" + F + ")"), NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"), TAG: new RegExp("^(" + F.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + R), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"), needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i") },
            V = /[\x20\t\r\n\f]*[+~]/,
            Y = /\{\s*\[native code\]\s*\}/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            G = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /'|\\/g,
            Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            ee = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            te = function(e, t) { var n = "0x" + t - 65536; return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320) };
        try { M.call(p.childNodes, 0)[0].nodeType } catch (ne) { M = function(e) { var t, n = []; for (; t = this[e]; e++) { n.push(t) } return n } }

        function ie(e) { return Y.test(e + "") }

        function re() { var e, t = []; return e = function(n, i) { if (t.push(n += " ") > r.cacheLength) { delete e[t.shift()] } return e[n] = i } }

        function oe(e) { e[x] = true; return e }

        function se(e) { var t = c.createElement("div"); try { return e(t) } catch (n) { return false } finally { t = null } }

        function ae(e, t, n, i) {
            var r, o, s, a, u, l, p, g, m, v;
            if ((t ? t.ownerDocument || t : w) !== c) { f(t) }
            t = t || c;
            n = n || [];
            if (!e || typeof e !== "string") { return n }
            if ((a = t.nodeType) !== 1 && a !== 9) { return [] }
            if (!d && !i) {
                if (r = J.exec(e)) { if (s = r[1]) { if (a === 9) { o = t.getElementById(s); if (o && o.parentNode) { if (o.id === s) { n.push(o); return n } } else { return n } } else { if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && y(t, o) && o.id === s) { n.push(o); return n } } } else if (r[2]) { H.apply(n, M.call(t.getElementsByTagName(e), 0)); return n } else if ((s = r[3]) && T.getByClassName && t.getElementsByClassName) { H.apply(n, M.call(t.getElementsByClassName(s), 0)); return n } }
                if (T.qsa && !h.test(e)) {
                    p = true;
                    g = x;
                    m = t;
                    v = a === 9 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        l = pe(e);
                        if (p = t.getAttribute("id")) { g = p.replace(K, "\\$&") } else { t.setAttribute("id", g) }
                        g = "[id='" + g + "'] ";
                        u = l.length;
                        while (u--) { l[u] = g + de(l[u]) }
                        m = V.test(e) && t.parentNode || t;
                        v = l.join(",")
                    }
                    if (v) { try { H.apply(n, M.call(m.querySelectorAll(v), 0)); return n } catch (b) {} finally { if (!p) { t.removeAttribute("id") } } }
                }
            }
            return we(e.replace(W, "$1"), t, n, i)
        }
        s = ae.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return t ? t.nodeName !== "HTML" : false };
        f = ae.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w;
            if (n === c || n.nodeType !== 9 || !n.documentElement) { return c }
            c = n;
            p = n.documentElement;
            d = s(n);
            T.tagNameNoComments = se(function(e) { e.appendChild(n.createComment("")); return !e.getElementsByTagName("*").length });
            T.attributes = se(function(e) { e.innerHTML = "<select></select>"; var t = typeof e.lastChild.getAttribute("multiple"); return t !== "boolean" && t !== "string" });
            T.getByClassName = se(function(e) {
                e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                if (!e.getElementsByClassName || !e.getElementsByClassName("e").length) { return false }
                e.lastChild.className = "e";
                return e.getElementsByClassName("e").length === 2
            });
            T.getByName = se(function(e) {
                e.id = x + 0;
                e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>";
                p.insertBefore(e, p.firstChild);
                var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                T.getIdNotName = !n.getElementById(x);
                p.removeChild(e);
                return t
            });
            r.attrHandle = se(function(e) { e.innerHTML = "<a href='#'></a>"; return e.firstChild && typeof e.firstChild.getAttribute !== A && e.firstChild.getAttribute("href") === "#" }) ? {} : { href: function(e) { return e.getAttribute("href", 2) }, type: function(e) { return e.getAttribute("type") } };
            if (T.getIdNotName) {
                r.find["ID"] = function(e, t) { if (typeof t.getElementById !== A && !d) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } };
                r.filter["ID"] = function(e) { var t = e.replace(ee, te); return function(e) { return e.getAttribute("id") === t } }
            } else {
                r.find["ID"] = function(e, n) { if (typeof n.getElementById !== A && !d) { var i = n.getElementById(e); return i ? i.id === e || typeof i.getAttributeNode !== A && i.getAttributeNode("id").value === e ? [i] : t : [] } };
                r.filter["ID"] = function(e) { var t = e.replace(ee, te); return function(e) { var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id"); return n && n.value === t } }
            }
            r.find["TAG"] = T.tagNameNoComments ? function(e, t) { if (typeof t.getElementsByTagName !== A) { return t.getElementsByTagName(e) } } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if (e === "*") { for (; n = o[r]; r++) { if (n.nodeType === 1) { i.push(n) } } return i }
                return o
            };
            r.find["NAME"] = T.getByName && function(e, t) { if (typeof t.getElementsByName !== A) { return t.getElementsByName(name) } };
            r.find["CLASS"] = T.getByClassName && function(e, t) { if (typeof t.getElementsByClassName !== A && !d) { return t.getElementsByClassName(e) } };
            g = [];
            h = [":focus"];
            if (T.qsa = ie(n.querySelectorAll)) {
                se(function(e) { e.innerHTML = "<select><option selected=''></option></select>"; if (!e.querySelectorAll("[selected]").length) { h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)") } if (!e.querySelectorAll(":checked").length) { h.push(":checked") } });
                se(function(e) {
                    e.innerHTML = "<input type='hidden' i=''/>";
                    if (e.querySelectorAll("[i^='']").length) { h.push("[*^$]=" + _ + "*(?:\"\"|'')") }
                    if (!e.querySelectorAll(":enabled").length) { h.push(":enabled", ":disabled") }
                    e.querySelectorAll("*,:x");
                    h.push(",.*:")
                })
            }
            if (T.matchesSelector = ie(m = p.matchesSelector || p.mozMatchesSelector || p.webkitMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) {
                se(function(e) {
                    T.disconnectedMatch = m.call(e, "div");
                    m.call(e, "[s!='']:x");
                    g.push("!=", R)
                })
            }
            h = new RegExp(h.join("|"));
            g = new RegExp(g.join("|"));
            y = ie(p.contains) || p.compareDocumentPosition ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !!(i && i.nodeType === 1 && (n.contains ? n.contains(i) : e.compareDocumentPosition && e.compareDocumentPosition(i) & 16))
            } : function(e, t) { if (t) { while (t = t.parentNode) { if (t === e) { return true } } } return false };
            b = p.compareDocumentPosition ? function(e, t) { var i; if (e === t) { u = true; return 0 } if (i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) { if (i & 1 || e.parentNode && e.parentNode.nodeType === 11) { if (e === n || y(w, e)) { return -1 } if (t === n || y(w, t)) { return 1 } return 0 } return i & 4 ? -1 : 1 } return e.compareDocumentPosition ? -1 : 1 } : function(e, t) {
                var i, r = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    a = [e],
                    l = [t];
                if (e === t) { u = true; return 0 } else if (e.sourceIndex && t.sourceIndex) { return (~t.sourceIndex || j) - (y(w, e) && ~e.sourceIndex || j) } else if (!o || !s) { return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : 0 } else if (o === s) { return ue(e, t) }
                i = e;
                while (i = i.parentNode) { a.unshift(i) }
                i = t;
                while (i = i.parentNode) { l.unshift(i) }
                while (a[r] === l[r]) { r++ }
                return r ? ue(a[r], l[r]) : a[r] === w ? -1 : l[r] === w ? 1 : 0
            };
            u = false;
            [0, 0].sort(b);
            T.detectDuplicates = u;
            return c
        };
        ae.matches = function(e, t) { return ae(e, null, null, t) };
        ae.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== c) { f(e) }
            t = t.replace(Z, "='$1']");
            if (T.matchesSelector && !d && (!g || !g.test(t)) && !h.test(t)) { try { var n = m.call(e, t); if (n || T.disconnectedMatch || e.document && e.document.nodeType !== 11) { return n } } catch (i) {} }
            return ae(t, c, null, [e]).length > 0
        };
        ae.contains = function(e, t) { if ((e.ownerDocument || e) !== c) { f(e) } return y(e, t) };
        ae.attr = function(e, t) { var n; if ((e.ownerDocument || e) !== c) { f(e) } if (!d) { t = t.toLowerCase() } if (n = r.attrHandle[t]) { return n(e) } if (d || T.attributes) { return e.getAttribute(t) } return ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === true ? t : n && n.specified ? n.value : null };
        ae.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) };
        ae.uniqueSort = function(e) {
            var t, n = [],
                i = 1,
                r = 0;
            u = !T.detectDuplicates;
            e.sort(b);
            if (u) { for (; t = e[i]; i++) { if (t === e[i - 1]) { r = n.push(i) } } while (r--) { e.splice(n[r], 1) } }
            return e
        };

        function ue(e, t) { var n = e && t && e.nextSibling; for (; n; n = n.nextSibling) { if (n === t) { return -1 } } return e ? 1 : -1 }

        function le(e) { return function(t) { var n = t.nodeName.toLowerCase(); return n === "input" && t.type === e } }

        function fe(e) { return function(t) { var n = t.nodeName.toLowerCase(); return (n === "input" || n === "button") && t.type === e } }

        function ce(e) {
            return oe(function(t) {
                t = +t;
                return oe(function(n, i) {
                    var r, o = e([], n.length, t),
                        s = o.length;
                    while (s--) { if (n[r = o[s]]) { n[r] = !(i[r] = n[r]) } }
                })
            })
        }
        o = ae.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (!r) { for (; t = e[i]; i++) { n += o(t) } } else if (r === 1 || r === 9 || r === 11) { if (typeof e.textContent === "string") { return e.textContent } else { for (e = e.firstChild; e; e = e.nextSibling) { n += o(e) } } } else if (r === 3 || r === 4) { return e.nodeValue }
            return n
        };
        r = ae.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: U,
            find: {},
            relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function(e) {
                    e[1] = e[1].replace(ee, te);
                    e[3] = (e[4] || e[5] || "").replace(ee, te);
                    if (e[2] === "~=") { e[3] = " " + e[3] + " " }
                    return e.slice(0, 4)
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        if (!e[3]) { ae.error(e[0]) }
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] = +(e[7] + e[8] || e[3] === "odd")
                    } else if (e[3]) { ae.error(e[0]) }
                    return e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    if (U["CHILD"].test(e[0])) { return null }
                    if (e[4]) { e[2] = e[4] } else if (n && z.test(n) && (t = pe(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                        e[0] = e[0].slice(0, t);
                        e[2] = n.slice(0, t)
                    }
                    return e.slice(0, 3)
                }
            },
            filter: {
                TAG: function(e) {
                    if (e === "*") { return function() { return true } }
                    e = e.replace(ee, te).toLowerCase();
                    return function(t) { return t.nodeName && t.nodeName.toLowerCase() === e }
                },
                CLASS: function(e) { var t = k[e + " "]; return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) { return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "") }) },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var r = ae.attr(i, e);
                        if (r == null) { return t === "!=" }
                        if (!t) { return true }
                        r += "";
                        return t === "=" ? r === n : t === "!=" ? r !== n : t === "^=" ? n && r.indexOf(n) === 0 : t === "*=" ? n && r.indexOf(n) > -1 : t === "$=" ? n && r.substr(r.length - n.length) === n : t === "~=" ? (" " + r + " ").indexOf(n) > -1 : t === "|=" ? r === n || r.substr(0, n.length + 1) === n + "-" : false
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = e.slice(0, 3) !== "nth",
                        s = e.slice(-4) !== "last",
                        a = t === "of-type";
                    return i === 1 && r === 0 ? function(e) { return !!e.parentNode } : function(t, n, u) {
                        var l, f, c, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = a && t.nodeName.toLowerCase(),
                            v = !u && !a;
                        if (m) {
                            if (o) {
                                while (g) {
                                    c = t;
                                    while (c = c[g]) { if (a ? c.nodeName.toLowerCase() === y : c.nodeType === 1) { return false } }
                                    h = g = e === "only" && !h && "nextSibling"
                                }
                                return true
                            }
                            h = [s ? m.firstChild : m.lastChild];
                            if (s && v) {
                                f = m[x] || (m[x] = {});
                                l = f[e] || [];
                                d = l[0] === N && l[1];
                                p = l[0] === N && l[2];
                                c = d && m.childNodes[d];
                                while (c = ++d && c && c[g] || (p = d = 0) || h.pop()) { if (c.nodeType === 1 && ++p && c === t) { f[e] = [N, d, p]; break } }
                            } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) { p = l[1] } else {
                                while (c = ++d && c && c[g] || (p = d = 0) || h.pop()) {
                                    if ((a ? c.nodeName.toLowerCase() === y : c.nodeType === 1) && ++p) {
                                        if (v) {
                                            (c[x] || (c[x] = {}))[e] = [N, p]
                                        }
                                        if (c === t) { break }
                                    }
                                }
                            }
                            p -= r;
                            return p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    if (i[x]) { return i(t) }
                    if (i.length > 1) {
                        n = [e, e, "", t];
                        return r.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, n) {
                            var r, o = i(e, t),
                                s = o.length;
                            while (s--) {
                                r = q.call(e, o[s]);
                                e[r] = !(n[r] = o[s])
                            }
                        }) : function(e) { return i(e, 0, n) }
                    }
                    return i
                }
            },
            pseudos: {
                not: oe(function(e) {
                    var t = [],
                        n = [],
                        i = a(e.replace(W, "$1"));
                    return i[x] ? oe(function(e, t, n, r) {
                        var o, s = i(e, null, r, []),
                            a = e.length;
                        while (a--) { if (o = s[a]) { e[a] = !(t[a] = o) } }
                    }) : function(e, r, o) {
                        t[0] = e;
                        i(t, null, o, n);
                        return !n.pop()
                    }
                }),
                has: oe(function(e) { return function(t) { return ae(e, t).length > 0 } }),
                contains: oe(function(e) { return function(t) { return (t.textContent || t.innerText || o(t)).indexOf(e) > -1 } }),
                lang: oe(function(e) {
                    if (!X.test(e || "")) { ae.error("unsupported lang: " + e) }
                    e = e.replace(ee, te).toLowerCase();
                    return function(t) {
                        var n;
                        do { if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) { n = n.toLowerCase(); return n === e || n.indexOf(e + "-") === 0 } } while ((t = t.parentNode) && t.nodeType === 1);
                        return false
                    }
                }),
                target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                root: function(e) { return e === p },
                focus: function(e) { return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                enabled: function(e) { return e.disabled === false },
                disabled: function(e) { return e.disabled === true },
                checked: function(e) { var t = e.nodeName.toLowerCase(); return t === "input" && !!e.checked || t === "option" && !!e.selected },
                selected: function(e) { if (e.parentNode) { e.parentNode.selectedIndex } return e.selected === true },
                empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling) { if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) { return false } } return true },
                parent: function(e) { return !r.pseudos["empty"](e) },
                header: function(e) { return Q.test(e.nodeName) },
                input: function(e) { return G.test(e.nodeName) },
                button: function(e) { var t = e.nodeName.toLowerCase(); return t === "input" && e.type === "button" || t === "button" },
                text: function(e) { var t; return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type) },
                first: ce(function() { return [0] }),
                last: ce(function(e, t) { return [t - 1] }),
                eq: ce(function(e, t, n) { return [n < 0 ? n + t : n] }),
                even: ce(function(e, t) { var n = 0; for (; n < t; n += 2) { e.push(n) } return e }),
                odd: ce(function(e, t) { var n = 1; for (; n < t; n += 2) { e.push(n) } return e }),
                lt: ce(function(e, t, n) { var i = n < 0 ? n + t : n; for (; --i >= 0;) { e.push(i) } return e }),
                gt: ce(function(e, t, n) { var i = n < 0 ? n + t : n; for (; ++i < t;) { e.push(i) } return e })
            }
        };
        for (n in { radio: true, checkbox: true, file: true, password: true, image: true }) { r.pseudos[n] = le(n) }
        for (n in { submit: true, reset: true }) { r.pseudos[n] = fe(n) }

        function pe(e, t) {
            var n, i, o, s, a, u, l, f = E[e + " "];
            if (f) { return t ? 0 : f.slice(0) }
            a = e;
            u = [];
            l = r.preFilter;
            while (a) {
                if (!n || (i = $.exec(a))) {
                    if (i) { a = a.slice(i[0].length) || a }
                    u.push(o = [])
                }
                n = false;
                if (i = I.exec(a)) {
                    n = i.shift();
                    o.push({ value: n, type: i[0].replace(W, " ") });
                    a = a.slice(n.length)
                }
                for (s in r.filter) {
                    if ((i = U[s].exec(a)) && (!l[s] || (i = l[s](i)))) {
                        n = i.shift();
                        o.push({ value: n, type: s, matches: i });
                        a = a.slice(n.length)
                    }
                }
                if (!n) { break }
            }
            return t ? a.length : a ? ae.error(e) : E(e, u).slice(0)
        }

        function de(e) {
            var t = 0,
                n = e.length,
                i = "";
            for (; t < n; t++) { i += e[t].value }
            return i
        }

        function he(e, t, n) {
            var r = t.dir,
                o = n && t.dir === "parentNode",
                s = C++;
            return t.first ? function(t, n, i) { while (t = t[r]) { if (t.nodeType === 1 || o) { return e(t, n, i) } } } : function(t, n, a) {
                var u, l, f, c = N + " " + s;
                if (a) { while (t = t[r]) { if (t.nodeType === 1 || o) { if (e(t, n, a)) { return true } } } } else {
                    while (t = t[r]) {
                        if (t.nodeType === 1 || o) {
                            f = t[x] || (t[x] = {});
                            if ((l = f[r]) && l[0] === c) { if ((u = l[1]) === true || u === i) { return u === true } } else {
                                l = f[r] = [c];
                                l[1] = e(t, n, a) || i;
                                if (l[1] === true) { return true }
                            }
                        }
                    }
                }
            }
        }

        function ge(e) { return e.length > 1 ? function(t, n, i) { var r = e.length; while (r--) { if (!e[r](t, n, i)) { return false } } return true } : e[0] }

        function me(e, t, n, i, r) {
            var o, s = [],
                a = 0,
                u = e.length,
                l = t != null;
            for (; a < u; a++) { if (o = e[a]) { if (!n || n(o, i, r)) { s.push(o); if (l) { t.push(a) } } } }
            return s
        }

        function ye(e, t, n, i, r, o) {
            if (i && !i[x]) { i = ye(i) }
            if (r && !r[x]) { r = ye(r, o) }
            return oe(function(o, s, a, u) {
                var l, f, c, p = [],
                    d = [],
                    h = s.length,
                    g = o || xe(t || "*", a.nodeType ? [a] : a, []),
                    m = e && (o || !t) ? me(g, p, e, a, u) : g,
                    y = n ? r || (o ? e : h || i) ? [] : s : m;
                if (n) { n(m, y, a, u) }
                if (i) {
                    l = me(y, d);
                    i(l, [], a, u);
                    f = l.length;
                    while (f--) { if (c = l[f]) { y[d[f]] = !(m[d[f]] = c) } }
                }
                if (o) {
                    if (r || e) {
                        if (r) {
                            l = [];
                            f = y.length;
                            while (f--) { if (c = y[f]) { l.push(m[f] = c) } }
                            r(null, y = [], l, u)
                        }
                        f = y.length;
                        while (f--) { if ((c = y[f]) && (l = r ? q.call(o, c) : p[f]) > -1) { o[l] = !(s[l] = c) } }
                    }
                } else { y = me(y === s ? y.splice(h, y.length) : y); if (r) { r(null, s, y, u) } else { H.apply(s, y) } }
            })
        }

        function ve(e) {
            var t, n, i, o = e.length,
                s = r.relative[e[0].type],
                a = s || r.relative[" "],
                u = s ? 1 : 0,
                f = he(function(e) { return e === t }, a, true),
                c = he(function(e) { return q.call(t, e) > -1 }, a, true),
                p = [function(e, n, i) { return !s && (i || n !== l) || ((t = n).nodeType ? f(e, n, i) : c(e, n, i)) }];
            for (; u < o; u++) {
                if (n = r.relative[e[u].type]) { p = [he(ge(p), n)] } else {
                    n = r.filter[e[u].type].apply(null, e[u].matches);
                    if (n[x]) { i = ++u; for (; i < o; i++) { if (r.relative[e[i].type]) { break } } return ye(u > 1 && ge(p), u > 1 && de(e.slice(0, u - 1)).replace(W, "$1"), n, u < i && ve(e.slice(u, i)), i < o && ve(e = e.slice(i)), i < o && de(e)) }
                    p.push(n)
                }
            }
            return ge(p)
        }

        function be(e, t) {
            var n = 0,
                o = t.length > 0,
                s = e.length > 0,
                a = function(a, u, f, p, d) {
                    var h, g, m, y = [],
                        v = 0,
                        b = "0",
                        x = a && [],
                        w = d != null,
                        T = l,
                        C = a || s && r.find["TAG"]("*", d && u.parentNode || u),
                        k = N += T == null ? 1 : Math.E;
                    if (w) {
                        l = u !== c && u;
                        i = n
                    }
                    for (;
                        (h = C[b]) != null; b++) {
                        if (s && h) {
                            for (g = 0; m = e[g]; g++) { if (m(h, u, f)) { p.push(h); break } }
                            if (w) {
                                N = k;
                                i = ++n
                            }
                        }
                        if (o) { if (h = !m && h) { v-- } if (a) { x.push(h) } }
                    }
                    v += b;
                    if (o && b !== v) {
                        for (g = 0; m = t[g]; g++) { m(x, y, u, f) }
                        if (a) {
                            if (v > 0) { while (b--) { if (!(x[b] || y[b])) { y[b] = L.call(p) } } }
                            y = me(y)
                        }
                        H.apply(p, y);
                        if (w && !a && y.length > 0 && v + t.length > 1) { ae.uniqueSort(p) }
                    }
                    if (w) {
                        N = k;
                        l = T
                    }
                    return x
                };
            return o ? oe(a) : a
        }
        a = ae.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = S[e + " "];
            if (!o) {
                if (!t) { t = pe(e) }
                n = t.length;
                while (n--) { o = ve(t[n]); if (o[x]) { i.push(o) } else { r.push(o) } }
                o = S(e, be(r, i))
            }
            return o
        };

        function xe(e, t, n) {
            var i = 0,
                r = t.length;
            for (; i < r; i++) { ae(e, t[i], n) }
            return n
        }

        function we(e, t, n, i) {
            var o, s, u, l, f, c = pe(e);
            if (!i) {
                if (c.length === 1) {
                    s = c[0] = c[0].slice(0);
                    if (s.length > 2 && (u = s[0]).type === "ID" && t.nodeType === 9 && !d && r.relative[s[1].type]) {
                        t = r.find["ID"](u.matches[0].replace(ee, te), t)[0];
                        if (!t) { return n }
                        e = e.slice(s.shift().value.length)
                    }
                    for (o = U["needsContext"].test(e) ? -1 : s.length - 1; o >= 0; o--) {
                        u = s[o];
                        if (r.relative[l = u.type]) { break }
                        if (f = r.find[l]) {
                            if (i = f(u.matches[0].replace(ee, te), V.test(s[0].type) && t.parentNode || t)) {
                                s.splice(o, 1);
                                e = i.length && de(s);
                                if (!e) { H.apply(n, M.call(i, 0)); return n }
                                break
                            }
                        }
                    }
                }
            }
            a(e, c)(i, t, d, n, V.test(e));
            return n
        }
        r.pseudos["nth"] = r.pseudos["eq"];

        function Te() {}
        r.filters = Te.prototype = r.pseudos;
        r.setFilters = new Te;
        f();
        ae.attr = v.attr;
        v.find = ae;
        v.expr = ae.selectors;
        v.expr[":"] = v.expr.pseudos;
        v.unique = ae.uniqueSort;
        v.text = ae.getText;
        v.isXMLDoc = ae.isXML;
        v.contains = ae.contains
    })(e);
    var re = /Until$/,
        oe = /^(?:parents|prev(?:Until|All))/,
        se = /^.[^:#\[\.,]*$/,
        ae = v.expr.match.needsContext,
        ue = { children: true, contents: true, next: true, prev: true };
    v.fn.extend({
        find: function(e) {
            var t, n, i;
            if (typeof e !== "string") { i = this; return this.pushStack(v(e).filter(function() { for (t = 0; t < i.length; t++) { if (v.contains(i[t], this)) { return true } } })) }
            n = [];
            for (t = 0; t < this.length; t++) { v.find(e, this[t], n) }
            n = this.pushStack(v.unique(n));
            n.selector = (this.selector ? this.selector + " " : "") + e;
            return n
        },
        has: function(e) {
            var t, n = v(e, this),
                i = n.length;
            return this.filter(function() { for (t = 0; t < i; t++) { if (v.contains(this, n[t])) { return true } } })
        },
        not: function(e) { return this.pushStack(fe(this, e, false)) },
        filter: function(e) { return this.pushStack(fe(this, e, true)) },
        is: function(e) { return !!e && (typeof e === "string" ? ae.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0) },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = ae.test(e) || typeof e !== "string" ? v(e, t || this.context) : 0;
            for (; i < r; i++) {
                n = this[i];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (s ? s.index(n) > -1 : v.find.matchesSelector(n, e)) { o.push(n); break }
                    n = n.parentNode
                }
            }
            return this.pushStack(o.length > 1 ? v.unique(o) : o)
        },
        index: function(e) { if (!e) { return this[0] && this[0].parentNode ? this.first().prevAll().length : -1 } if (typeof e === "string") { return v.inArray(this[0], v(e)) } return v.inArray(e.jquery ? e[0] : e, this) },
        add: function(e, t) {
            var n = typeof e === "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                i = v.merge(this.get(), n);
            return this.pushStack(v.unique(i))
        },
        addBack: function(e) { return this.add(e == null ? this.prevObject : this.prevObject.filter(e)) }
    });
    v.fn.andSelf = v.fn.addBack;

    function le(e, t) { do { e = e[t] } while (e && e.nodeType !== 1); return e }
    v.each({ parent: function(e) { var t = e.parentNode; return t && t.nodeType !== 11 ? t : null }, parents: function(e) { return v.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return v.dir(e, "parentNode", n) }, next: function(e) { return le(e, "nextSibling") }, prev: function(e) { return le(e, "previousSibling") }, nextAll: function(e) { return v.dir(e, "nextSibling") }, prevAll: function(e) { return v.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return v.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return v.dir(e, "previousSibling", n) }, siblings: function(e) { return v.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return v.sibling(e.firstChild) }, contents: function(e) { return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes) } }, function(e, t) {
        v.fn[e] = function(n, i) {
            var r = v.map(this, t, n);
            if (!re.test(e)) { i = n }
            if (i && typeof i === "string") { r = v.filter(i, r) }
            r = this.length > 1 && !ue[e] ? v.unique(r) : r;
            if (this.length > 1 && oe.test(e)) { r = r.reverse() }
            return this.pushStack(r)
        }
    });
    v.extend({
        filter: function(e, t, n) { if (n) { e = ":not(" + e + ")" } return t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t) },
        dir: function(e, n, i) {
            var r = [],
                o = e[n];
            while (o && o.nodeType !== 9 && (i === t || o.nodeType !== 1 || !v(o).is(i))) {
                if (o.nodeType === 1) { r.push(o) }
                o = o[n]
            }
            return r
        },
        sibling: function(e, t) { var n = []; for (; e; e = e.nextSibling) { if (e.nodeType === 1 && e !== t) { n.push(e) } } return n }
    });

    function fe(e, t, n) { t = t || 0; if (v.isFunction(t)) { return v.grep(e, function(e, i) { var r = !!t.call(e, i, e); return r === n }) } else if (t.nodeType) { return v.grep(e, function(e) { return e === t === n }) } else if (typeof t === "string") { var i = v.grep(e, function(e) { return e.nodeType === 1 }); if (se.test(t)) { return v.filter(t, i, !n) } else { t = v.filter(t, i) } } return v.grep(e, function(e) { return v.inArray(e, t) >= 0 === n }) }

    function ce(e) {
        var t = pe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) { while (t.length) { n.createElement(t.pop()) } }
        return n
    }
    var pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        de = / jQuery\d+="(?:null|\d+)"/g,
        he = new RegExp("<(?:" + pe + ")[\\s/>]", "i"),
        ge = /^\s+/,
        me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ye = /<([\w:]+)/,
        ve = /<tbody/i,
        be = /<|&#?\w+;/,
        xe = /<(?:script|style|link)/i,
        we = /^(?:checkbox|radio)$/i,
        Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^$|\/(?:java|ecma)script/i,
        Ce = /^true\/(.*)/,
        ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ee = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: v.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        Se = ce(r),
        Ae = Se.appendChild(r.createElement("div"));
    Ee.optgroup = Ee.option;
    Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead;
    Ee.th = Ee.td;
    v.fn.extend({
        text: function(e) { return v.access(this, function(e) { return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(e)) }, null, e, arguments.length) },
        wrapAll: function(e) {
            if (v.isFunction(e)) { return this.each(function(t) { v(this).wrapAll(e.call(this, t)) }) }
            if (this[0]) {
                var t = v(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) { t.insertBefore(this[0]) }
                t.map(function() { var e = this; while (e.firstChild && e.firstChild.nodeType === 1) { e = e.firstChild } return e }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            if (v.isFunction(e)) { return this.each(function(t) { v(this).wrapInner(e.call(this, t)) }) }
            return this.each(function() {
                var t = v(this),
                    n = t.contents();
                if (n.length) { n.wrapAll(e) } else { t.append(e) }
            })
        },
        wrap: function(e) { var t = v.isFunction(e); return this.each(function(n) { v(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function() { return this.parent().each(function() { if (!v.nodeName(this, "body")) { v(this).replaceWith(this.childNodes) } }).end() },
        append: function() { return this.domManip(arguments, true, function(e) { if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) { this.appendChild(e) } }) },
        prepend: function() { return this.domManip(arguments, true, function(e) { if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) { this.insertBefore(e, this.firstChild) } }) },
        before: function() { return this.domManip(arguments, false, function(e) { if (this.parentNode) { this.parentNode.insertBefore(e, this) } }) },
        after: function() { return this.domManip(arguments, false, function(e) { if (this.parentNode) { this.parentNode.insertBefore(e, this.nextSibling) } }) },
        remove: function(e, t) {
            var n, i = 0;
            for (;
                (n = this[i]) != null; i++) {
                if (!e || v.filter(e, [n]).length > 0) {
                    if (!t && n.nodeType === 1) { v.cleanData(_e(n)) }
                    if (n.parentNode) {
                        if (t && v.contains(n.ownerDocument, n)) { He(_e(n, "script")) }
                        n.parentNode.removeChild(n)
                    }
                }
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) { if (e.nodeType === 1) { v.cleanData(_e(e, false)) } while (e.firstChild) { e.removeChild(e.firstChild) } if (e.options && v.nodeName(e, "select")) { e.options.length = 0 } }
            return this
        },
        clone: function(e, t) {
            e = e == null ? false : e;
            t = t == null ? e : t;
            return this.map(function() { return v.clone(this, e, t) })
        },
        html: function(e) {
            return v.access(this, function(e) {
                var n = this[0] || {},
                    i = 0,
                    r = this.length;
                if (e === t) { return n.nodeType === 1 ? n.innerHTML.replace(de, "") : t }
                if (typeof e === "string" && !xe.test(e) && (v.support.htmlSerialize || !he.test(e)) && (v.support.leadingWhitespace || !ge.test(e)) && !Ee[(ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(me, "<$1></$2>");
                    try {
                        for (; i < r; i++) {
                            n = this[i] || {};
                            if (n.nodeType === 1) {
                                v.cleanData(_e(n, false));
                                n.innerHTML = e
                            }
                        }
                        n = 0
                    } catch (o) {}
                }
                if (n) { this.empty().append(e) }
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = v.isFunction(e);
            if (!t && typeof e !== "string") { e = v(e).not(this).detach() }
            return this.domManip([e], true, function(e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                if (n && this.nodeType === 1 || this.nodeType === 11) { v(this).remove(); if (t) { t.parentNode.insertBefore(e, t) } else { n.appendChild(e) } }
            })
        },
        detach: function(e) { return this.remove(e, true) },
        domManip: function(e, n, i) {
            e = c.apply([], e);
            var r, o, s, a, u, l, f = 0,
                p = this.length,
                d = this,
                h = p - 1,
                g = e[0],
                m = v.isFunction(g);
            if (m || !(p <= 1 || typeof g !== "string" || v.support.checkClone || !Te.test(g))) {
                return this.each(function(r) {
                    var o = d.eq(r);
                    if (m) { e[0] = g.call(this, r, n ? o.html() : t) }
                    o.domManip(e, n, i)
                })
            }
            if (p) {
                r = v.buildFragment(e, this[0].ownerDocument, false, this);
                o = r.firstChild;
                if (r.childNodes.length === 1) { r = o }
                if (o) {
                    n = n && v.nodeName(o, "tr");
                    s = v.map(_e(r, "script"), De);
                    a = s.length;
                    for (; f < p; f++) {
                        u = r;
                        if (f !== h) { u = v.clone(u, true, true); if (a) { v.merge(s, _e(u, "script")) } }
                        i.call(n && v.nodeName(this[f], "table") ? je(this[f], "tbody") : this[f], u, f)
                    }
                    if (a) {
                        l = s[s.length - 1].ownerDocument;
                        v.map(s, Le);
                        for (f = 0; f < a; f++) {
                            u = s[f];
                            if (Ne.test(u.type || "") && !v._data(u, "globalEval") && v.contains(l, u)) {
                                if (u.src) { v.ajax({ url: u.src, type: "GET", dataType: "script", async: false, global: false, "throws": true }) } else {
                                    v.globalEval((u.text || u.textContent || u.innerHTML || "").replace(ke, ""));
                                }
                            }
                        }
                    }
                    r = o = null
                }
            }
            return this
        }
    });

    function je(e, t) { return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) }

    function De(e) {
        var t = e.getAttributeNode("type");
        e.type = (t && t.specified) + "/" + e.type;
        return e
    }

    function Le(e) { var t = Ce.exec(e.type); if (t) { e.type = t[1] } else { e.removeAttribute("type") } return e }

    function He(e, t) {
        var n, i = 0;
        for (;
            (n = e[i]) != null; i++) { v._data(n, "globalEval", !t || v._data(t[i], "globalEval")) }
    }

    function Me(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) { return }
        var n, i, r, o = v._data(e),
            s = v._data(t, o),
            a = o.events;
        if (a) {
            delete s.handle;
            s.events = {};
            for (n in a) { for (i = 0, r = a[n].length; i < r; i++) { v.event.add(t, n, a[n][i]) } }
        }
        if (s.data) { s.data = v.extend({}, s.data) }
    }

    function qe(e, t) {
        var n, i, r;
        if (t.nodeType !== 1) { return }
        n = t.nodeName.toLowerCase();
        if (!v.support.noCloneEvent && t[v.expando]) {
            i = v._data(t);
            for (r in i.events) { v.removeEvent(t, r, i.handle) }
            t.removeAttribute(v.expando)
        }
        if (n === "script" && t.text !== e.text) {
            De(t).text = e.text;
            Le(t)
        } else if (n === "object") { if (t.parentNode) { t.outerHTML = e.outerHTML } if (v.support.html5Clone && (e.innerHTML && !v.trim(t.innerHTML))) { t.innerHTML = e.innerHTML } } else if (n === "input" && we.test(e.type)) { t.defaultChecked = t.checked = e.checked; if (t.value !== e.value) { t.value = e.value } } else if (n === "option") { t.defaultSelected = t.selected = e.defaultSelected } else if (n === "input" || n === "textarea") { t.defaultValue = e.defaultValue }
    }
    v.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) {
        v.fn[e] = function(e) {
            var n, i = 0,
                r = [],
                o = v(e),
                s = o.length - 1;
            for (; i <= s; i++) {
                n = i === s ? this : this.clone(true);
                v(o[i])[t](n);
                p.apply(r, n.get())
            }
            return this.pushStack(r)
        }
    });

    function _e(e, n) {
        var i, r, o = 0,
            s = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== "undefined" ? e.querySelectorAll(n || "*") : t;
        if (!s) {
            for (s = [], i = e.childNodes || e;
                (r = i[o]) != null; o++) { if (!n || v.nodeName(r, n)) { s.push(r) } else { v.merge(s, _e(r, n)) } }
        }
        return n === t || n && v.nodeName(e, n) ? v.merge([e], s) : s
    }

    function Fe(e) { if (we.test(e.type)) { e.defaultChecked = e.checked } }
    v.extend({
        clone: function(e, t, n) {
            var i, r, o, s, a, u = v.contains(e.ownerDocument, e);
            if (v.support.html5Clone || v.isXMLDoc(e) || !he.test("<" + e.nodeName + ">")) { a = e.cloneNode(true) } else {
                Ae.innerHTML = e.outerHTML;
                Ae.removeChild(a = Ae.firstChild)
            }
            if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                i = _e(a);
                r = _e(e);
                for (s = 0;
                    (o = r[s]) != null; ++s) { if (i[s]) { qe(o, i[s]) } }
            }
            if (t) {
                if (n) {
                    r = r || _e(e);
                    i = i || _e(a);
                    for (s = 0;
                        (o = r[s]) != null; s++) { Me(o, i[s]) }
                } else { Me(e, a) }
            }
            i = _e(a, "script");
            if (i.length > 0) { He(i, !u && _e(e, "script")) }
            i = r = o = null;
            return a
        },
        buildFragment: function(e, t, n, i) {
            var r, o, s, a, u, l, f, c = e.length,
                p = ce(t),
                d = [],
                h = 0;
            for (; h < c; h++) {
                o = e[h];
                if (o || o === 0) {
                    if (v.type(o) === "object") { v.merge(d, o.nodeType ? [o] : o) } else if (!be.test(o)) { d.push(t.createTextNode(o)) } else {
                        a = a || p.appendChild(t.createElement("div"));
                        s = (ye.exec(o) || ["", ""])[1].toLowerCase();
                        u = Ee[s] || Ee._default;
                        a.innerHTML = u[1] + o.replace(me, "<$1></$2>") + u[2];
                        f = u[0];
                        while (f--) { a = a.lastChild }
                        if (!v.support.leadingWhitespace && ge.test(o)) { d.push(t.createTextNode(ge.exec(o)[0])) }
                        if (!v.support.tbody) {
                            o = s === "table" && !ve.test(o) ? a.firstChild : u[1] === "<table>" && !ve.test(o) ? a : 0;
                            f = o && o.childNodes.length;
                            while (f--) { if (v.nodeName(l = o.childNodes[f], "tbody") && !l.childNodes.length) { o.removeChild(l) } }
                        }
                        v.merge(d, a.childNodes);
                        a.textContent = "";
                        while (a.firstChild) { a.removeChild(a.firstChild) }
                        a = p.lastChild
                    }
                }
            }
            if (a) { p.removeChild(a) }
            if (!v.support.appendChecked) { v.grep(_e(d, "input"), Fe) }
            h = 0;
            while (o = d[h++]) {
                if (i && v.inArray(o, i) !== -1) { continue }
                r = v.contains(o.ownerDocument, o);
                a = _e(p.appendChild(o), "script");
                if (r) { He(a) }
                if (n) { f = 0; while (o = a[f++]) { if (Ne.test(o.type || "")) { n.push(o) } } }
            }
            a = null;
            return p
        },
        cleanData: function(e, t) {
            var n, i, r, o, s = 0,
                a = v.expando,
                u = v.cache,
                f = v.support.deleteExpando,
                c = v.event.special;
            for (;
                (r = e[s]) != null; s++) {
                if (t || v.acceptData(r)) {
                    i = r[a];
                    n = i && u[i];
                    if (n) {
                        if (n.events) { for (o in n.events) { if (c[o]) { v.event.remove(r, o) } else { v.removeEvent(r, o, n.handle) } } }
                        if (u[i]) {
                            delete u[i];
                            if (f) { delete r[a] } else if (typeof r.removeAttribute !== "undefined") { r.removeAttribute(a) } else { r[a] = null }
                            l.push(i)
                        }
                    }
                }
            }
        }
    });
    var Oe, Be, Pe, Re = /alpha\([^)]*\)/i,
        We = /opacity\s*=\s*([^)]*)/,
        $e = /^(top|right|bottom|left)$/,
        Ie = /^(none|table(?!-c[ea]).+)/,
        ze = /^margin/,
        Xe = new RegExp("^(" + b + ")(.*)$", "i"),
        Ue = new RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"),
        Ve = new RegExp("^([+-])=(" + b + ")", "i"),
        Ye = { BODY: "block" },
        Je = { position: "absolute", visibility: "hidden", display: "block" },
        Ge = { letterSpacing: 0, fontWeight: 400 },
        Qe = ["Top", "Right", "Bottom", "Left"],
        Ke = ["Webkit", "O", "Moz", "ms"];

    function Ze(e, t) {
        if (t in e) { return t }
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            i = t,
            r = Ke.length;
        while (r--) { t = Ke[r] + n; if (t in e) { return t } }
        return i
    }

    function et(e, t) { e = t || e; return v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e) }

    function tt(e, t) {
        var n, i = [],
            r = 0,
            o = e.length;
        for (; r < o; r++) {
            n = e[r];
            if (!n.style) { continue }
            i[r] = v._data(n, "olddisplay");
            if (t) { if (!i[r] && n.style.display === "none") { n.style.display = "" } if (n.style.display === "" && et(n)) { i[r] = v._data(n, "olddisplay", ot(n.nodeName)) } } else if (!i[r] && !et(n)) { v._data(n, "olddisplay", v.css(n, "display")) }
        }
        for (r = 0; r < o; r++) { n = e[r]; if (!n.style) { continue } if (!t || n.style.display === "none" || n.style.display === "") { n.style.display = t ? i[r] || "" : "none" } }
        return e
    }
    v.fn.extend({
        css: function(e, n) {
            return v.access(this, function(e, n, i) {
                var r, o, s = {},
                    a = 0;
                if (v.isArray(n)) {
                    r = Be(e);
                    o = n.length;
                    for (; a < o; a++) { s[n[a]] = v.css(e, n[a], false, r) }
                    return s
                }
                return i !== t ? v.style(e, n, i) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() { return tt(this, true) },
        hide: function() { return tt(this) },
        toggle: function(e) { var t = typeof e === "boolean"; return this.each(function() { if (t ? e : et(this)) { v(this).show() } else { v(this).hide() } }) }
    });
    v.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Oe(e, "opacity"); return n === "" ? "1" : n } } } },
        cssNumber: { columnCount: true, fillOpacity: true, fontWeight: true, lineHeight: true, opacity: true, orphans: true, widows: true, zIndex: true, zoom: true },
        cssProps: { "float": v.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(e, n, i, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) { return }
            var o, s, a, u = v.camelCase(n),
                l = e.style;
            n = v.cssProps[u] || (v.cssProps[u] = Ze(l, u));
            a = v.cssHooks[n] || v.cssHooks[u];
            if (i !== t) {
                s = typeof i;
                if (s === "string" && (o = Ve.exec(i))) {
                    i = (o[1] + 1) * o[2] + parseFloat(v.css(e, n));
                    s = "number"
                }
                if (i == null || s === "number" && isNaN(i)) { return }
                if (s === "number" && !v.cssNumber[u]) { i += "px" }
                if (!v.support.clearCloneStyle && i === "" && n.indexOf("background") === 0) { l[n] = "inherit" }
                if (!a || !("set" in a) || (i = a.set(e, i, r)) !== t) { try { l[n] = i } catch (f) {} }
            } else { if (a && "get" in a && (o = a.get(e, false, r)) !== t) { return o } return l[n] }
        },
        css: function(e, n, i, r) {
            var o, s, a, u = v.camelCase(n);
            n = v.cssProps[u] || (v.cssProps[u] = Ze(e.style, u));
            a = v.cssHooks[n] || v.cssHooks[u];
            if (a && "get" in a) { o = a.get(e, true, i) }
            if (o === t) { o = Oe(e, n, r) }
            if (o === "normal" && n in Ge) { o = Ge[n] }
            if (i) { s = parseFloat(o); return i === true || v.isNumeric(s) ? s || 0 : o }
            return o
        },
        swap: function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) {
                s[o] = e.style[o];
                e.style[o] = t[o]
            }
            r = n.apply(e, i || []);
            for (o in t) { e.style[o] = s[o] }
            return r
        }
    });
    if (e.getComputedStyle) {
        Be = function(t) { return e.getComputedStyle(t, null) };
        Oe = function(e, n, i) {
            var r, o, s, a = i || Be(e),
                u = a ? a.getPropertyValue(n) || a[n] : t,
                l = e.style;
            if (a) {
                if (u === "" && !v.contains(e.ownerDocument, e)) { u = v.style(e, n) }
                if (Ue.test(u) && ze.test(n)) {
                    r = l.width;
                    o = l.minWidth;
                    s = l.maxWidth;
                    l.minWidth = l.maxWidth = l.width = u;
                    u = a.width;
                    l.width = r;
                    l.minWidth = o;
                    l.maxWidth = s
                }
            }
            return u
        }
    } else if (r.documentElement.currentStyle) {
        Be = function(e) { return e.currentStyle };
        Oe = function(e, n, i) {
            var r, o, s, a = i || Be(e),
                u = a ? a[n] : t,
                l = e.style;
            if (u == null && l && l[n]) { u = l[n] }
            if (Ue.test(u) && !$e.test(n)) {
                r = l.left;
                o = e.runtimeStyle;
                s = o && o.left;
                if (s) { o.left = e.currentStyle.left }
                l.left = n === "fontSize" ? "1em" : u;
                u = l.pixelLeft + "px";
                l.left = r;
                if (s) { o.left = s }
            }
            return u === "" ? "auto" : u
        }
    }

    function nt(e, t, n) { var i = Xe.exec(t); return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t }

    function it(e, t, n, i, r) {
        var o = n === (i ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; o < 4; o += 2) { if (n === "margin") { s += v.css(e, n + Qe[o], true, r) } if (i) { if (n === "content") { s -= v.css(e, "padding" + Qe[o], true, r) } if (n !== "margin") { s -= v.css(e, "border" + Qe[o] + "Width", true, r) } } else { s += v.css(e, "padding" + Qe[o], true, r); if (n !== "padding") { s += v.css(e, "border" + Qe[o] + "Width", true, r) } } }
        return s
    }

    function rt(e, t, n) {
        var i = true,
            r = t === "width" ? e.offsetWidth : e.offsetHeight,
            o = Be(e),
            s = v.support.boxSizing && v.css(e, "boxSizing", false, o) === "border-box";
        if (r <= 0 || r == null) {
            r = Oe(e, t, o);
            if (r < 0 || r == null) { r = e.style[t] }
            if (Ue.test(r)) { return r }
            i = s && (v.support.boxSizingReliable || r === e.style[t]);
            r = parseFloat(r) || 0
        }
        return r + it(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function ot(e) {
        var t = r,
            n = Ye[e];
        if (!n) {
            n = st(e, t);
            if (n === "none" || !n) {
                Pe = (Pe || v("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement);
                t = (Pe[0].contentWindow || Pe[0].contentDocument).document;
                t.write("<!doctype html><html><body>");
                t.close();
                n = st(e, t);
                Pe.detach()
            }
            Ye[e] = n
        }
        return n
    }

    function st(e, t) {
        var n = v(t.createElement(e)).appendTo(t.body),
            i = v.css(n[0], "display");
        n.remove();
        return i
    }
    v.each(["height", "width"], function(e, t) { v.cssHooks[t] = { get: function(e, n, i) { if (n) { return e.offsetWidth === 0 && Ie.test(v.css(e, "display")) ? v.swap(e, Je, function() { return rt(e, t, i) }) : rt(e, t, i) } }, set: function(e, n, i) { var r = i && Be(e); return nt(e, n, i ? it(e, t, i, v.support.boxSizing && v.css(e, "boxSizing", false, r) === "border-box", r) : 0) } } });
    if (!v.support.opacity) {
        v.cssHooks.opacity = {
            get: function(e, t) { return We.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1;
                if ((t >= 1 || t === "") && v.trim(o.replace(Re, "")) === "" && n.removeAttribute) { n.removeAttribute("filter"); if (t === "" || i && !i.filter) { return } }
                n.filter = Re.test(o) ? o.replace(Re, r) : o + " " + r
            }
        }
    }
    v(function() { if (!v.support.reliableMarginRight) { v.cssHooks.marginRight = { get: function(e, t) { if (t) { return v.swap(e, { display: "inline-block" }, Oe, [e, "marginRight"]) } } } } if (!v.support.pixelPosition && v.fn.position) { v.each(["top", "left"], function(e, t) { v.cssHooks[t] = { get: function(e, n) { if (n) { n = Oe(e, t); return Ue.test(n) ? v(e).position()[t] + "px" : n } } } }) } });
    if (v.expr && v.expr.filters) {
        v.expr.filters.hidden = function(e) { return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || v.css(e, "display")) === "none" };
        v.expr.filters.visible = function(e) { return !v.expr.filters.hidden(e) }
    }
    v.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(n) {
                var i = 0,
                    r = {},
                    o = typeof n === "string" ? n.split(" ") : [n];
                for (; i < 4; i++) { r[e + Qe[i] + t] = o[i] || o[i - 2] || o[0] }
                return r
            }
        };
        if (!ze.test(e)) { v.cssHooks[e + t].set = nt }
    });
    var at = /%20/g,
        ut = /\[\]$/,
        lt = /\r?\n/g,
        ft = /^(?:submit|button|image|reset)$/i,
        ct = /^(?:input|select|textarea|keygen)/i;
    v.fn.extend({ serialize: function() { return v.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = v.prop(this, "elements"); return e ? v.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !v(this).is(":disabled") && ct.test(this.nodeName) && !ft.test(e) && (this.checked || !we.test(e)) }).map(function(e, t) { var n = v(this).val(); return n == null ? null : v.isArray(n) ? v.map(n, function(e) { return { name: t.name, value: e.replace(lt, "\r\n") } }) : { name: t.name, value: n.replace(lt, "\r\n") } }).get() } });
    v.param = function(e, n) {
        var i, r = [],
            o = function(e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t) { n = v.ajaxSettings && v.ajaxSettings.traditional }
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) { v.each(e, function() { o(this.name, this.value) }) } else { for (i in e) { pt(i, e[i], n, o) } }
        return r.join("&").replace(at, "+")
    };

    function pt(e, t, n, i) { var r; if (v.isArray(t)) { v.each(t, function(t, r) { if (n || ut.test(e)) { i(e, r) } else { pt(e + "[" + (typeof r === "object" ? t : "") + "]", r, n, i) } }) } else if (!n && v.type(t) === "object") { for (r in t) { pt(e + "[" + r + "]", t[r], n, i) } } else { i(e, t) } }
    var dt, ht, gt = v.now(),
        mt = /\?/,
        yt = /#.*$/,
        vt = /([?&])_=[^&]*/,
        bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        wt = /^(?:GET|HEAD)$/,
        Tt = /^\/\//,
        Nt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Ct = v.fn.load,
        kt = {},
        Et = {},
        St = "*/".concat("*");
    try { ht = o.href } catch (At) {
        ht = r.createElement("a");
        ht.href = "";
        ht = ht.href
    }
    dt = Nt.exec(ht.toLowerCase()) || [];

    function jt(e) {
        return function(t, n) {
            if (typeof t !== "string") {
                n = t;
                t = "*"
            }
            var i, r = 0,
                o = t.toLowerCase().match(x) || [];
            if (v.isFunction(n)) {
                while (i = o[r++]) {
                    if (i[0] === "+") {
                        i = i.slice(1) || "*";
                        (e[i] = e[i] || []).unshift(n)
                    } else {
                        (e[i] = e[i] || []).push(n)
                    }
                }
            }
        }
    }

    function Dt(e, t, n, i) {
        var r = {},
            o = e === Et;

        function s(a) {
            var u;
            r[a] = true;
            v.each(e[a] || [], function(e, a) {
                var l = a(t, n, i);
                if (typeof l === "string" && !o && !r[l]) {
                    t.dataTypes.unshift(l);
                    s(l);
                    return false
                } else if (o) { return !(u = l) }
            });
            return u
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Lt(e, n) {
        var i, r, o = v.ajaxSettings.flatOptions || {};
        for (i in n) {
            if (n[i] !== t) {
                (o[i] ? e : r || (r = {}))[i] = n[i]
            }
        }
        if (r) { v.extend(true, e, r) }
        return e
    }
    v.fn.load = function(e, n, i) {
        if (typeof e !== "string" && Ct) { return Ct.apply(this, arguments) }
        var r, o, s, a = this,
            u = e.indexOf(" ");
        if (u >= 0) {
            r = e.slice(u, e.length);
            e = e.slice(0, u)
        }
        if (v.isFunction(n)) {
            i = n;
            n = t
        } else if (n && typeof n === "object") { o = "POST" }
        if (a.length > 0) {
            v.ajax({ url: e, type: o, dataType: "html", data: n }).done(function(e) {
                s = arguments;
                a.html(r ? v("<div>").append(v.parseHTML(e)).find(r) : e)
            }).complete(i && function(e, t) { a.each(i, s || [e.responseText, t, e]) })
        }
        return this
    };
    v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { v.fn[t] = function(e) { return this.on(t, e) } });
    v.each(["get", "post"], function(e, n) {
        v[n] = function(e, i, r, o) {
            if (v.isFunction(i)) {
                o = o || r;
                r = i;
                i = t
            }
            return v.ajax({ url: e, type: n, dataType: o, data: i, success: r })
        }
    });
    v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: ht, type: "GET", isLocal: xt.test(dt[1]), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": St, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": true, "text json": v.parseJSON, "text xml": v.parseXML }, flatOptions: { url: true, context: true } },
        ajaxSetup: function(e, t) { return t ? Lt(Lt(e, v.ajaxSettings), t) : Lt(v.ajaxSettings, e) },
        ajaxPrefilter: jt(kt),
        ajaxTransport: jt(Et),
        ajax: function(e, n) {
            if (typeof e === "object") {
                n = e;
                e = t
            }
            n = n || {};
            var i, r, o, s, a, u, l, f, c = v.ajaxSetup({}, n),
                p = c.context || c,
                d = c.context && (p.nodeType || p.jquery) ? v(p) : v.event,
                h = v.Deferred(),
                g = v.Callbacks("once memory"),
                m = c.statusCode || {},
                y = {},
                b = {},
                w = 0,
                T = "canceled",
                N = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (w === 2) {
                            if (!s) { s = {}; while (t = bt.exec(o)) { s[t[1].toLowerCase()] = t[2] } }
                            t = s[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() { return w === 2 ? o : null },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        if (!w) {
                            e = b[n] = b[n] || e;
                            y[e] = t
                        }
                        return this
                    },
                    overrideMimeType: function(e) { if (!w) { c.mimeType = e } return this },
                    statusCode: function(e) { var t; if (e) { if (w < 2) { for (t in e) { m[t] = [m[t], e[t]] } } else { N.always(e[N.status]) } } return this },
                    abort: function(e) {
                        var t = e || T;
                        if (i) { i.abort(t) }
                        k(0, t);
                        return this
                    }
                };
            h.promise(N).complete = g.add;
            N.success = N.done;
            N.error = N.fail;
            c.url = ((e || c.url || ht) + "").replace(yt, "").replace(Tt, dt[1] + "//");
            c.type = n.method || n.type || c.method || c.type;
            c.dataTypes = v.trim(c.dataType || "*").toLowerCase().match(x) || [""];
            if (c.crossDomain == null) {
                u = Nt.exec(c.url.toLowerCase());
                c.crossDomain = !!(u && (u[1] !== dt[1] || u[2] !== dt[2] || (u[3] || (u[1] === "http:" ? 80 : 443)) != (dt[3] || (dt[1] === "http:" ? 80 : 443))))
            }
            if (c.data && c.processData && typeof c.data !== "string") { c.data = v.param(c.data, c.traditional) }
            Dt(kt, c, n, N);
            if (w === 2) { return N }
            l = c.global;
            if (l && v.active++ === 0) { v.event.trigger("ajaxStart") }
            c.type = c.type.toUpperCase();
            c.hasContent = !wt.test(c.type);
            r = c.url;
            if (!c.hasContent) {
                if (c.data) {
                    r = c.url += (mt.test(r) ? "&" : "?") + c.data;
                    delete c.data
                }
                if (c.cache === false) { c.url = vt.test(r) ? r.replace(vt, "$1_=" + gt++) : r + (mt.test(r) ? "&" : "?") + "_=" + gt++ }
            }
            if (c.ifModified) { if (v.lastModified[r]) { N.setRequestHeader("If-Modified-Since", v.lastModified[r]) } if (v.etag[r]) { N.setRequestHeader("If-None-Match", v.etag[r]) } }
            if (c.data && c.hasContent && c.contentType !== false || n.contentType) { N.setRequestHeader("Content-Type", c.contentType) }
            N.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + St + "; q=0.01" : "") : c.accepts["*"]);
            for (f in c.headers) { N.setRequestHeader(f, c.headers[f]) }
            if (c.beforeSend && (c.beforeSend.call(p, N, c) === false || w === 2)) { return N.abort() }
            T = "abort";
            for (f in { success: 1, error: 1, complete: 1 }) { N[f](c[f]) }
            i = Dt(Et, c, n, N);
            if (!i) { k(-1, "No Transport") } else {
                N.readyState = 1;
                if (l) { d.trigger("ajaxSend", [N, c]) }
                if (c.async && c.timeout > 0) { a = setTimeout(function() { N.abort("timeout") }, c.timeout) }
                try {
                    w = 1;
                    i.send(y, k)
                } catch (C) { if (w < 2) { k(-1, C) } else { throw C } }
            }

            function k(e, n, s, u) {
                var f, y, b, x, T, C = n;
                if (w === 2) { return }
                w = 2;
                if (a) { clearTimeout(a) }
                i = t;
                o = u || "";
                N.readyState = e > 0 ? 4 : 0;
                if (s) { x = Ht(c, N, s) }
                if (e >= 200 && e < 300 || e === 304) {
                    if (c.ifModified) {
                        T = N.getResponseHeader("Last-Modified");
                        if (T) { v.lastModified[r] = T }
                        T = N.getResponseHeader("etag");
                        if (T) { v.etag[r] = T }
                    }
                    if (e === 304) {
                        f = true;
                        C = "notmodified"
                    } else {
                        f = Mt(c, x);
                        C = f.state;
                        y = f.data;
                        b = f.error;
                        f = !b
                    }
                } else { b = C; if (e || !C) { C = "error"; if (e < 0) { e = 0 } } }
                N.status = e;
                N.statusText = (n || C) + "";
                if (f) { h.resolveWith(p, [y, C, N]) } else { h.rejectWith(p, [N, C, b]) }
                N.statusCode(m);
                m = t;
                if (l) { d.trigger(f ? "ajaxSuccess" : "ajaxError", [N, c, f ? y : b]) }
                g.fireWith(p, [N, C]);
                if (l) { d.trigger("ajaxComplete", [N, c]); if (!--v.active) { v.event.trigger("ajaxStop") } }
            }
            return N
        },
        getScript: function(e, n) { return v.get(e, t, n, "script") },
        getJSON: function(e, t, n) { return v.get(e, t, n, "json") }
    });

    function Ht(e, n, i) {
        var r, o, s, a, u = e.contents,
            l = e.dataTypes,
            f = e.responseFields;
        for (o in f) { if (o in i) { n[f[o]] = i[o] } }
        while (l[0] === "*") { l.shift(); if (r === t) { r = e.mimeType || n.getResponseHeader("Content-Type") } }
        if (r) { for (o in u) { if (u[o] && u[o].test(r)) { l.unshift(o); break } } }
        if (l[0] in i) { s = l[0] } else {
            for (o in i) { if (!l[0] || e.converters[o + " " + l[0]]) { s = o; break } if (!a) { a = o } }
            s = s || a
        }
        if (s) { if (s !== l[0]) { l.unshift(s) } return i[s] }
    }

    function Mt(e, t) {
        var n, i, r, o, s = {},
            a = 0,
            u = e.dataTypes.slice(),
            l = u[0];
        if (e.dataFilter) { t = e.dataFilter(t, e.dataType) }
        if (u[1]) { for (n in e.converters) { s[n.toLowerCase()] = e.converters[n] } }
        for (; r = u[++a];) {
            if (r !== "*") {
                if (l !== "*" && l !== r) {
                    n = s[l + " " + r] || s["* " + r];
                    if (!n) {
                        for (i in s) {
                            o = i.split(" ");
                            if (o[1] === r) {
                                n = s[l + " " + o[0]] || s["* " + o[0]];
                                if (n) {
                                    if (n === true) { n = s[i] } else if (s[i] !== true) {
                                        r = o[0];
                                        u.splice(a--, 0, r)
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (n !== true) { if (n && e["throws"]) { t = n(t) } else { try { t = n(t) } catch (f) { return { state: "parsererror", error: n ? f : "No conversion from " + l + " to " + r } } } }
                }
                l = r
            }
        }
        return { state: "success", data: t }
    }
    v.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) { v.globalEval(e); return e } } });
    v.ajaxPrefilter("script", function(e) {
        if (e.cache === t) { e.cache = false }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    v.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = r.head || v("head")[0] || r.documentElement;
            return {
                send: function(t, o) {
                    n = r.createElement("script");
                    n.async = true;
                    if (e.scriptCharset) { n.charset = e.scriptCharset }
                    n.src = e.url;
                    n.onload = n.onreadystatechange = function(e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState)) {
                            n.onload = n.onreadystatechange = null;
                            if (n.parentNode) { n.parentNode.removeChild(n) }
                            n = null;
                            if (!t) { o(200, "success") }
                        }
                    };
                    i.insertBefore(n, i.firstChild)
                },
                abort: function() { if (n) { n.onload(t, true) } }
            }
        }
    });
    var qt = [],
        _t = /(=)\?(?=&|$)|\?\?/;
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = qt.pop() || v.expando + "_" + gt++;
            this[e] = true;
            return e
        }
    });
    v.ajaxPrefilter("json jsonp", function(n, i, r) {
        var o, s, a, u = n.jsonp !== false && (_t.test(n.url) ? "url" : typeof n.data === "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(n.data) && "data");
        if (u || n.dataTypes[0] === "jsonp") {
            o = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback;
            if (u) { n[u] = n[u].replace(_t, "$1" + o) } else if (n.jsonp !== false) { n.url += (mt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o }
            n.converters["script json"] = function() { if (!a) { v.error(o + " was not called") } return a[0] };
            n.dataTypes[0] = "json";
            s = e[o];
            e[o] = function() { a = arguments };
            r.always(function() {
                e[o] = s;
                if (n[o]) {
                    n.jsonpCallback = i.jsonpCallback;
                    qt.push(o)
                }
                if (a && v.isFunction(s)) { s(a[0]) }
                a = s = t
            });
            return "script"
        }
    });
    var Ft, Ot, Bt = 0,
        Pt = e.ActiveXObject && function() { var e; for (e in Ft) { Ft[e](t, true) } };

    function Rt() { try { return new e.XMLHttpRequest } catch (t) {} }

    function Wt() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }
    v.ajaxSettings.xhr = e.ActiveXObject ? function() { return !this.isLocal && Rt() || Wt() } : Rt;
    Ot = v.ajaxSettings.xhr();
    v.support.cors = !!Ot && "withCredentials" in Ot;
    Ot = v.support.ajax = !!Ot;
    if (Ot) {
        v.ajaxTransport(function(n) {
            if (!n.crossDomain || v.support.cors) {
                var i;
                return {
                    send: function(r, o) {
                        var s, a, u = n.xhr();
                        if (n.username) { u.open(n.type, n.url, n.async, n.username, n.password) } else { u.open(n.type, n.url, n.async) }
                        if (n.xhrFields) { for (a in n.xhrFields) { u[a] = n.xhrFields[a] } }
                        if (n.mimeType && u.overrideMimeType) { u.overrideMimeType(n.mimeType) }
                        if (!n.crossDomain && !r["X-Requested-With"]) { r["X-Requested-With"] = "XMLHttpRequest" }
                        try { for (a in r) { u.setRequestHeader(a, r[a]) } } catch (l) {}
                        u.send(n.hasContent && n.data || null);
                        i = function(e, r) {
                            var a, l, f, c, p;
                            try {
                                if (i && (r || u.readyState === 4)) {
                                    i = t;
                                    if (s) { u.onreadystatechange = v.noop; if (Pt) { delete Ft[s] } }
                                    if (r) { if (u.readyState !== 4) { u.abort() } } else {
                                        c = {};
                                        a = u.status;
                                        p = u.responseXML;
                                        f = u.getAllResponseHeaders();
                                        if (p && p.documentElement) { c.xml = p }
                                        if (typeof u.responseText === "string") { c.text = u.responseText }
                                        try { l = u.statusText } catch (d) { l = "" }
                                        if (!a && n.isLocal && !n.crossDomain) { a = c.text ? 200 : 404 } else if (a === 1223) { a = 204 }
                                    }
                                }
                            } catch (h) { if (!r) { o(-1, h) } }
                            if (c) { o(a, l, c, f) }
                        };
                        if (!n.async) { i() } else if (u.readyState === 4) { setTimeout(i) } else {
                            s = ++Bt;
                            if (Pt) {
                                if (!Ft) {
                                    Ft = {};
                                    v(e).unload(Pt)
                                }
                                Ft[s] = i
                            }
                            u.onreadystatechange = i
                        }
                    },
                    abort: function() { if (i) { i(t, true) } }
                }
            }
        })
    }
    var $t, It, zt = /^(?:toggle|show|hide)$/,
        Xt = new RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
        Ut = /queueHooks$/,
        Vt = [Zt],
        Yt = {
            "*": [function(e, t) {
                var n, i, r = this.createTween(e, t),
                    o = Xt.exec(t),
                    s = r.cur(),
                    a = +s || 0,
                    u = 1,
                    l = 20;
                if (o) {
                    n = +o[2];
                    i = o[3] || (v.cssNumber[e] ? "" : "px");
                    if (i !== "px" && a) {
                        a = v.css(r.elem, e, true) || n || 1;
                        do {
                            u = u || ".5";
                            a = a / u;
                            v.style(r.elem, e, a + i)
                        } while (u !== (u = r.cur() / s) && u !== 1 && --l)
                    }
                    r.unit = i;
                    r.start = a;
                    r.end = o[1] ? a + (o[1] + 1) * n : n
                }
                return r
            }]
        };

    function Jt() { setTimeout(function() { $t = t }); return $t = v.now() }

    function Gt(e, t) {
        v.each(t, function(t, n) {
            var i = (Yt[t] || []).concat(Yt["*"]),
                r = 0,
                o = i.length;
            for (; r < o; r++) { if (i[r].call(e, t, n)) { return } }
        })
    }

    function Qt(e, t, n) {
        var i, r, o = 0,
            s = Vt.length,
            a = v.Deferred().always(function() { delete u.elem }),
            u = function() {
                if (r) { return false }
                var t = $t || Jt(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    i = n / l.duration || 0,
                    o = 1 - i,
                    s = 0,
                    u = l.tweens.length;
                for (; s < u; s++) { l.tweens[s].run(o) }
                a.notifyWith(e, [l, o, n]);
                if (o < 1 && u) { return n } else { a.resolveWith(e, [l]); return false }
            },
            l = a.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(true, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: $t || Jt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = v.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    l.tweens.push(i);
                    return i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? l.tweens.length : 0;
                    if (r) { return this }
                    r = true;
                    for (; n < i; n++) { l.tweens[n].run(1) }
                    if (t) { a.resolveWith(e, [l, t]) } else { a.rejectWith(e, [l, t]) }
                    return this
                }
            }),
            f = l.props;
        Kt(f, l.opts.specialEasing);
        for (; o < s; o++) { i = Vt[o].call(l, e, f, l.opts); if (i) { return i } }
        Gt(l, f);
        if (v.isFunction(l.opts.start)) { l.opts.start.call(e, l) }
        v.fx.timer(v.extend(u, { elem: e, anim: l, queue: l.opts.queue }));
        return l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function Kt(e, t) {
        var n, i, r, o, s;
        for (n in e) {
            i = v.camelCase(n);
            r = t[i];
            o = e[n];
            if (v.isArray(o)) {
                r = o[1];
                o = e[n] = o[0]
            }
            if (n !== i) {
                e[i] = o;
                delete e[n]
            }
            s = v.cssHooks[i];
            if (s && "expand" in s) {
                o = s.expand(o);
                delete e[i];
                for (n in o) {
                    if (!(n in e)) {
                        e[n] = o[n];
                        t[n] = r
                    }
                }
            } else { t[i] = r }
        }
    }
    v.Animation = v.extend(Qt, {
        tweener: function(e, t) {
            if (v.isFunction(e)) {
                t = e;
                e = ["*"]
            } else { e = e.split(" ") }
            var n, i = 0,
                r = e.length;
            for (; i < r; i++) {
                n = e[i];
                Yt[n] = Yt[n] || [];
                Yt[n].unshift(t)
            }
        },
        prefilter: function(e, t) { if (t) { Vt.unshift(e) } else { Vt.push(e) } }
    });

    function Zt(e, t, n) {
        var i, r, o, s, a, u, l, f, c, p = this,
            d = e.style,
            h = {},
            g = [],
            m = e.nodeType && et(e);
        if (!n.queue) {
            f = v._queueHooks(e, "fx");
            if (f.unqueued == null) {
                f.unqueued = 0;
                c = f.empty.fire;
                f.empty.fire = function() { if (!f.unqueued) { c() } }
            }
            f.unqueued++;
            p.always(function() { p.always(function() { f.unqueued--; if (!v.queue(e, "fx").length) { f.empty.fire() } }) })
        }
        if (e.nodeType === 1 && ("height" in t || "width" in t)) { n.overflow = [d.overflow, d.overflowX, d.overflowY]; if (v.css(e, "display") === "inline" && v.css(e, "float") === "none") { if (!v.support.inlineBlockNeedsLayout || ot(e.nodeName) === "inline") { d.display = "inline-block" } else { d.zoom = 1 } } }
        if (n.overflow) {
            d.overflow = "hidden";
            if (!v.support.shrinkWrapBlocks) {
                p.done(function() {
                    d.overflow = n.overflow[0];
                    d.overflowX = n.overflow[1];
                    d.overflowY = n.overflow[2]
                })
            }
        }
        for (i in t) {
            o = t[i];
            if (zt.exec(o)) {
                delete t[i];
                u = u || o === "toggle";
                if (o === (m ? "hide" : "show")) { continue }
                g.push(i)
            }
        }
        s = g.length;
        if (s) {
            a = v._data(e, "fxshow") || v._data(e, "fxshow", {});
            if ("hidden" in a) { m = a.hidden }
            if (u) { a.hidden = !m }
            if (m) { v(e).show() } else { p.done(function() { v(e).hide() }) }
            p.done(function() {
                var t;
                v._removeData(e, "fxshow");
                for (t in h) { v.style(e, t, h[t]) }
            });
            for (i = 0; i < s; i++) {
                r = g[i];
                l = p.createTween(r, m ? a[r] : 0);
                h[r] = a[r] || v.style(e, r);
                if (!(r in a)) {
                    a[r] = l.start;
                    if (m) {
                        l.end = l.start;
                        l.start = r === "width" || r === "height" ? 1 : 0
                    }
                }
            }
        }
    }

    function en(e, t, n, i, r) { return new en.prototype.init(e, t, n, i, r) }
    v.Tween = en;
    en.prototype = {
        constructor: en,
        init: function(e, t, n, i, r, o) {
            this.elem = e;
            this.prop = n;
            this.easing = r || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = i;
            this.unit = o || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() { var e = en.propHooks[this.prop]; return e && e.get ? e.get(this) : en.propHooks._default.get(this) },
        run: function(e) {
            var t, n = en.propHooks[this.prop];
            if (this.options.duration) { this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) } else { this.pos = t = e }
            this.now = (this.end - this.start) * t + this.start;
            if (this.options.step) { this.options.step.call(this.elem, this.now, this) }
            if (n && n.set) { n.set(this) } else { en.propHooks._default.set(this) }
            return this
        }
    };
    en.prototype.init.prototype = en.prototype;
    en.propHooks = {
        _default: {
            get: function(e) {
                var t;
                if (e.elem[e.prop] != null && (!e.elem.style || e.elem.style[e.prop] == null)) { return e.elem[e.prop] }
                t = v.css(e.elem, e.prop, "auto");
                return !t || t === "auto" ? 0 : t
            },
            set: function(e) { if (v.fx.step[e.prop]) { v.fx.step[e.prop](e) } else if (e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop])) { v.style(e.elem, e.prop, e.now + e.unit) } else { e.elem[e.prop] = e.now } }
        }
    };
    en.propHooks.scrollTop = en.propHooks.scrollLeft = { set: function(e) { if (e.elem.nodeType && e.elem.parentNode) { e.elem[e.prop] = e.now } } };
    v.each(["toggle", "show", "hide"], function(e, t) {
        var n = v.fn[t];
        v.fn[t] = function(e, i, r) { return e == null || typeof e === "boolean" ? n.apply(this, arguments) : this.animate(tn(t, true), e, i, r) }
    });
    v.fn.extend({
        fadeTo: function(e, t, n, i) { return this.filter(et).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) },
        animate: function(e, t, n, i) {
            var r = v.isEmptyObject(e),
                o = v.speed(t, n, i),
                s = function() {
                    var t = Qt(this, v.extend({}, e), o);
                    s.finish = function() { t.stop(true) };
                    if (r || v._data(this, "finish")) { t.stop(true) }
                };
            s.finish = s;
            return r || o.queue === false ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, n, i) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop;
                t(i)
            };
            if (typeof e !== "string") {
                i = n;
                n = e;
                e = t
            }
            if (n && e !== false) { this.queue(e || "fx", []) }
            return this.each(function() {
                var t = true,
                    n = e != null && e + "queueHooks",
                    o = v.timers,
                    s = v._data(this);
                if (n) { if (s[n] && s[n].stop) { r(s[n]) } } else { for (n in s) { if (s[n] && s[n].stop && Ut.test(n)) { r(s[n]) } } }
                for (n = o.length; n--;) {
                    if (o[n].elem === this && (e == null || o[n].queue === e)) {
                        o[n].anim.stop(i);
                        t = false;
                        o.splice(n, 1)
                    }
                }
                if (t || !i) { v.dequeue(this, e) }
            })
        },
        finish: function(e) {
            if (e !== false) { e = e || "fx" }
            return this.each(function() {
                var t, n = v._data(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = v.timers,
                    s = i ? i.length : 0;
                n.finish = true;
                v.queue(this, e, []);
                if (r && r.cur && r.cur.finish) { r.cur.finish.call(this) }
                for (t = o.length; t--;) {
                    if (o[t].elem === this && o[t].queue === e) {
                        o[t].anim.stop(true);
                        o.splice(t, 1)
                    }
                }
                for (t = 0; t < s; t++) { if (i[t] && i[t].finish) { i[t].finish.call(this) } }
                delete n.finish
            })
        }
    });

    function tn(e, t) {
        var n, i = { height: e },
            r = 0;
        t = t ? 1 : 0;
        for (; r < 4; r += 2 - t) {
            n = Qe[r];
            i["margin" + n] = i["padding" + n] = e
        }
        if (t) { i.opacity = i.width = e }
        return i
    }
    v.each({ slideDown: tn("show"), slideUp: tn("hide"), slideToggle: tn("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { v.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } });
    v.speed = function(e, t, n) {
        var i = e && typeof e === "object" ? v.extend({}, e) : { complete: n || !n && t || v.isFunction(e) && e, duration: e, easing: n && t || t && !v.isFunction(t) && t };
        i.duration = v.fx.off ? 0 : typeof i.duration === "number" ? i.duration : i.duration in v.fx.speeds ? v.fx.speeds[i.duration] : v.fx.speeds._default;
        if (i.queue == null || i.queue === true) { i.queue = "fx" }
        i.old = i.complete;
        i.complete = function() { if (v.isFunction(i.old)) { i.old.call(this) } if (i.queue) { v.dequeue(this, i.queue) } };
        return i
    };
    v.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } };
    v.timers = [];
    v.fx = en.prototype.init;
    v.fx.tick = function() {
        var e, n = v.timers,
            i = 0;
        $t = v.now();
        for (; i < n.length; i++) { e = n[i]; if (!e() && n[i] === e) { n.splice(i--, 1) } }
        if (!n.length) { v.fx.stop() }
        $t = t
    };
    v.fx.timer = function(e) { if (e() && v.timers.push(e)) { v.fx.start() } };
    v.fx.interval = 13;
    v.fx.start = function() { if (!It) { It = setInterval(v.fx.tick, v.fx.interval) } };
    v.fx.stop = function() {
        clearInterval(It);
        It = null
    };
    v.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    v.fx.step = {};
    if (v.expr && v.expr.filters) { v.expr.filters.animated = function(e) { return v.grep(v.timers, function(t) { return e === t.elem }).length } }
    v.fn.offset = function(e) {
        if (arguments.length) { return e === t ? this : this.each(function(t) { v.offset.setOffset(this, e, t) }) }
        var n, i, r = { top: 0, left: 0 },
            o = this[0],
            s = o && o.ownerDocument;
        if (!s) { return }
        n = s.documentElement;
        if (!v.contains(n, o)) { return r }
        if (typeof o.getBoundingClientRect !== "undefined") { r = o.getBoundingClientRect() }
        i = nn(s);
        return { top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }
    };
    v.offset = {
        setOffset: function(e, t, n) {
            var i = v.css(e, "position");
            if (i === "static") { e.style.position = "relative" }
            var r = v(e),
                o = r.offset(),
                s = v.css(e, "top"),
                a = v.css(e, "left"),
                u = (i === "absolute" || i === "fixed") && v.inArray("auto", [s, a]) > -1,
                l = {},
                f = {},
                c, p;
            if (u) {
                f = r.position();
                c = f.top;
                p = f.left
            } else {
                c = parseFloat(s) || 0;
                p = parseFloat(a) || 0
            }
            if (v.isFunction(t)) { t = t.call(e, n, o) }
            if (t.top != null) { l.top = t.top - o.top + c }
            if (t.left != null) { l.left = t.left - o.left + p }
            if ("using" in t) { t.using.call(e, l) } else { r.css(l) }
        }
    };
    v.fn.extend({
        position: function() {
            if (!this[0]) { return }
            var e, t, n = { top: 0, left: 0 },
                i = this[0];
            if (v.css(i, "position") === "fixed") { t = i.getBoundingClientRect() } else {
                e = this.offsetParent();
                t = this.offset();
                if (!v.nodeName(e[0], "html")) { n = e.offset() }
                n.top += v.css(e[0], "borderTopWidth", true);
                n.left += v.css(e[0], "borderLeftWidth", true)
            }
            return { top: t.top - n.top - v.css(i, "marginTop", true), left: t.left - n.left - v.css(i, "marginLeft", true) }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent || r.documentElement; while (e && (!v.nodeName(e, "html") && v.css(e, "position") === "static")) { e = e.offsetParent } return e || r.documentElement }) }
    });
    v.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, n) {
        var i = /Y/.test(n);
        v.fn[e] = function(r) { return v.access(this, function(e, r, o) { var s = nn(e); if (o === t) { return s ? n in s ? s[n] : s.document.documentElement[r] : e[r] } if (s) { s.scrollTo(!i ? o : v(s).scrollLeft(), i ? o : v(s).scrollTop()) } else { e[r] = o } }, e, r, arguments.length, null) }
    });

    function nn(e) { return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false }
    v.each({ Height: "height", Width: "width" }, function(e, n) {
        v.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(i, r) {
            v.fn[r] = function(r, o) {
                var s = arguments.length && (i || typeof r !== "boolean"),
                    a = i || (r === true || o === true ? "margin" : "border");
                return v.access(this, function(n, i, r) {
                    var o;
                    if (v.isWindow(n)) { return n.document.documentElement["client" + e] }
                    if (n.nodeType === 9) { o = n.documentElement; return Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e]) }
                    return r === t ? v.css(n, i, a) : v.style(n, i, r, a)
                }, n, s ? r : t, s, null)
            }
        })
    });
    e.jQuery = e.$ = v;
    if (typeof define === "function" && define.amd && define.amd.jQuery) { define("jquery", [], function() { return v }) }
})(window);