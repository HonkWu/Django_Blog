(function(e) {
    var r = [];
    var t = false;
    var a = false;
    var i = { interval: 250, force_process: false };
    var f = e(window);
    var n;

    function s() {
        a = false;
        for (var t = 0; t < r.length; t++) {
            var i = e(r[t]).filter(function() { return e(this).is(":appeared") });
            i.trigger("appear", [i]);
            if (n) {
                var f = n.not(i);
                f.trigger("disappear", [f])
            }
            n = i
        }
    }
    e.expr[":"]["appeared"] = function(r) { var t = e(r); if (!t.is(":visible")) { return false } var a = f.scrollLeft(); var i = f.scrollTop(); var n = t.offset(); var s = n.left; var o = n.top; if (o + t.height() >= i && o - (t.data("appear-top-offset") || 0) <= i + f.height() && s + t.width() >= a && s - (t.data("appear-left-offset") || 0) <= a + f.width()) { return true } else { return false } };
    e.fn.extend({
        appear: function(f) {
            var n = e.extend({}, i, f || {});
            var o = this.selector || this;
            if (!t) {
                var l = function() {
                    if (a) { return }
                    a = true;
                    setTimeout(s, n.interval)
                };
                e(window).scroll(l).resize(l);
                t = true
            }
            if (n.force_process) { setTimeout(s, n.interval) }
            r.push(o);
            return e(o)
        }
    });
    e.extend({ force_appear: function() { if (t) { s(); return true } return false } })
})(jQuery);