function wisplayer() {
    function i(i, l) {
        var s = t(i);
        if (s) {
            var p = $(i).width(),
                r = $(i).find(".wpl-proc"),
                e = l.pageX - r.offset().left,
                p = e / p,
                c = $(i).parents(".wisplayer");
            s.currentTime = s.duration * p;
            $(i).parents(".wisplayer").find(".wpl-ptime").text(n(s.currentTime));
            r.width(e);
            a(c, s.currentTime)
        }
    }

    function a(i, a) {
        if (!$(i).find(".wpl-lyric").is(":hidden")) {
            var t = $(i).find(".wpl-lyric li"),
                n = $(i).attr("id"),
                s = r[n][0],
                p;
            for (p in r[n]) {
                p = parseInt(p);
                var e = void 0 == r[n][p + 1] ? void 0 : r[n][p + 1];
                a >= r[n][p] && (a < e || void 0 == e) ? l(t.eq(p)) : a < s && l(t.eq(0))
            }
        }
    }

    function l(i) {
        if (!$(i).hasClass("current")) {
            $(i).siblings(".current").removeClass("current");
            $(i).addClass("current");
            var a = -($(i).position().top - 12);
            $(i).parents(".wpl-lyric").css({ marginTop: a + "px" })
        }
    }

    function t(i) { return $(i).parents(".wisplayer").find("audio")[0] }

    function n(i) {
        var a = parseInt(i / 60);
        i = parseInt(i % 60);
        return (10 > a ? "0" + a : a) + ":" + (10 > i ? "0" + i : i)
    }
    var s = 0,
        p = {},
        r = {},
        e = { play: "&#xe603;", pause: "&#xe602;" },
        c = !1,
        d = "";
    $("audio").each(function() {
        s++;
        $(this).wrap('<div class="wisplayer" id="wpl-' + s + '"></div>');
        var i = $(this).parent(".wisplayer"),
            a = $(this).find("track").attr("song"),
            l = $(this).find("track").attr("singer"),
            t = $(this).find("track").attr("album"),
            p = $(this).find("track").attr("imgsrc");
        i.append('<ul class="wpl-main"></ul>').append('<div class="wpl-lyricbox"><div class="wpl-detail"><img src="' + p + '"><ul><li title="' + a + '">' + a + "</li><li>" + l + "</li><li>" + t + '</li></ul></div><ul class="wpl-lyric"></ul></div>').find(".wpl-main").append('<li class="wpl-play"></li>').append('<li class="wpl-right"></li>').append('<li class="wpl-bar"></li>').find(".wpl-play").append('<span class="wpl-playicon iconfont">' + e.play + "</span>").siblings(".wpl-right").append('<div class="wpl-time"><span class="wpl-ptime">00:00</span> / <span class="wpl-ttime">00:00</div><div class="wpl-lyswt">词</div>').siblings(".wpl-bar").append('<div class="wpl-proc"></div>');
        $(this)[0].addEventListener("canplay", function() { $("#" + i.attr("id")).find(".wpl-ttime").text(n($(this)[0].duration)) });
        a = $(this).find("track").attr("src");
        $.ajax({
            url: a,
            dataType: "text",
            success: function(a) {
                a = a.replace(/(^s*)|(s*$)/g, "").split("\n");
                var l = 0,
                    t;
                for (t in a) {
                    var n = /^\[(.*)\](.*)$/g.exec(a[t]);
                    if (void 0 != n) {
                        i.find(".wpl-lyric").append("<li>" + n[2] + "</li>");
                        var s = i.attr("id");
                        void 0 == r[s] && (r[s] = {});
                        var s = r[s],
                            p = l,
                            n = /^(.*)\:(.*)$/.exec(n[1]),
                            n = void 0 != n ? 60 * parseInt(n[1]) + parseFloat(n[2]) : "0";
                        s[p] = n;
                        l++
                    }
                }
            }
        })
    });
    $(".wpl-play").on("click", function() {
        var i = $(this).find(".wpl-playicon"),
            l = $(this).parents(".wisplayer"),
            s = l.attr("id"),
            r = t(this);
        1 == r.paused ? (r.play(), p[s] = setInterval(function() {
            var i = r.currentTime,
                t = r.duration;
            i >= t && ($(l).find(".wpl-playicon").html(e.play), clearInterval(p[s]));
            $(l).find(".wpl-proc").css("width", i / t * 100 + "%");
            $(l).find(".wpl-ptime").text(n(i));
            a(l, i)
        }, 200), i.html(e.pause)) : (clearInterval(p[s]), r.pause(), i.html(e.play))
    });
    $(".wpl-lyswt").on("click", function() {
        $(this).toggleClass("wpl-lyon");
        $(this).parents(".wisplayer").toggleClass("wisplayeron");
        $(this).parents(".wisplayer").find(".wpl-lyricbox").slideToggle(500)
    });
    $(document).on("mouseup", function() { c = !1 });
    $(".wisplayer").on("selectstart", function() { return !1 });
    $(".wpl-bar").on("mousedown", function(a) {
        c = !0;
        d = this;
        i(this, a)
    });
    $(document).on("mousemove", function(a) { 1 == c && i(d, a) })
}