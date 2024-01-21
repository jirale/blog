const baseUrl = "https://cdn.jsdelivr.net/gh/ngylduy/blog@d0ca1ff";
const newUrl = "https://cdn.jsdelivr.net/gh/tanvir-ul10/Flashes-Pro@main";
function puViews() {
    if ("" != PuSet.realViews.databaseUrl && null != getid("fb-db") && 0 < firebase.apps.length) {
        for (var _0xac0ex4 = qSell(".pu-views"), _0xac0ex5 = firebase.database(), _0xac0ex6 = 0; _0xac0ex6 < _0xac0ex4.length; _0xac0ex6++) {
            var _0xac0ex7 = _0xac0ex4[_0xac0ex6],
                _0xac0ex8 = _0xac0ex7.getAttribute("data-id");
            (_0xac0ex8 = _0xac0ex5.ref("BlogID_" + blogID + "/PostID_" + _0xac0ex8)).once("value", function (_0xac0ex5, _0xac0ex6) {
                return function (_0xac0ex9) {
                    0 < (_0xac0ex9 = _0xac0ex9.exists() ? _0xac0ex9.val() : 0) && ("true" == PuSet.realViews.abbreviation ? _0xac0ex5.setAttribute("data-text", Pu.abv(_0xac0ex9)) : _0xac0ex5.setAttribute("data-text", _0xac0ex9), remCt(_0xac0ex5, "hidden")), "true" == _0xac0ex5.getAttribute("data-add") && (_0xac0ex5.setAttribute("data-add", !1), _0xac0ex9 = parseInt(_0xac0ex9) + 1, _0xac0ex6.set(_0xac0ex9))
                }
            }(_0xac0ex7, _0xac0ex8))
        }
    }
}
function blogAdmin() {
    null != qSel("#maintainCont") && addCt(qSel("#maintainCont"), "hdn")
}
var aryLzJs = [];
function loadLzJs() {
    var _0xac0exd, _0xac0ex4;
    aryLzJs.push(1), Defer(function () {
        var _0xac0exe = "www.jirale.com",
            _0xac0exf = "www.jirale.com";
        console.log("Licensed to: " + _0xac0exe + ", Licensed for: " + _0xac0exf)
    }, 1e3);
    null != typeof PuSet.license.key && ("true" == isSingleItem && ldJs(baseUrl + "/js/CopyPreContent.min.js", "pre-js", !0, "body"), ldJs(baseUrl + "/js/NoInternetWidget.min.js", "noInt-js", !0, "body"), "true" == isSingleItem && (_0xac0exd = qSell("#postToc, #autoToc"), _0xac0ex4 = qSell("#postBody h1, #postBody h2, #postBody h3, #postBody h4, #postBody h5, #postBody h6"), 0 < _0xac0exd.length && 0 < _0xac0ex4.length && ldJs(baseUrl + "/js/TableOfContents.min.js", "toc-js", !0, "head", function () {
        ldCss(baseUrl + "/css/TableOfContents.min.css", "toc-css", function () {
            null != qSel("#postToc") && new TableOfContents({
                from: qSel("#postBody"),
                to: qSel("#postToc")
            }).generateToc(), null != qSel("#autoToc") && new TableOfContents({
                from: qSel("#postBody"),
                to: qSel("#autoToc")
            }).generateToc()
        })
    })), Defer(function () {
        function _0xac0ex9() {
            dataLayer.push(arguments)
        }
        var _0xac0ex5;
        0 < qSell(".dldCo").length && ldJs(baseUrl + "/js/CountdownDownloadBox.min.js", "cdb-js", !0, "body", function () {
            ldCss(baseUrl + "/css/CountdownDownloadBox.min.css", "cdb-css")
        }), null != qSel("#safelink-setting") && ldJs(newUrl + "/js/safelink-setting.js", "safelink-setting-js", !0, "body", function () {
            ldCss(newUrl + "/css/safelink-new.css", "safelink-css"), ldJs(newUrl + "/js/safelink.js", "safelink-js-2", !0, "body")
        }), null != qSel(".pre pre") && ldCss(newUrl + "/css/highlight.css", "highlight-css"), null != qSel(".pre.ta pre") && ldCss(newUrl + "/css/morder-syntax.css", "morder-syntax-css"), "" != PuSet.analytics.propertyID && ((_0xac0ex5 = document.createElement("script")).src = "https://www.googletagmanager.com/gtag/js?id=" + PuSet.analytics.propertyID, document.body.appendChild(_0xac0ex5), window.dataLayer = window.dataLayer || [], _0xac0ex9("js", new Date), _0xac0ex9("config", PuSet.analytics.propertyID)), "" != PuSet.realViews.databaseUrl && ldJs("https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js", "fb-app", !0, "body", function () {
            ldJs("https://www.gstatic.com/firebasejs/8.4.2/firebase-database.js", "fb-db", !0, "body", function () {
                var _0xac0exd = qSell(".pu-views"),
                    _0xac0ex4 = {};
                _0xac0ex4.databaseURL = PuSet.realViews.databaseUrl, firebase.initializeApp(_0xac0ex4);
                for (var _0xac0ex6 = firebase.database(), _0xac0ex7 = 0; _0xac0ex7 < _0xac0exd.length; _0xac0ex7++) {
                    var _0xac0ex8 = _0xac0exd[_0xac0ex7],
                        _0xac0ex10 = _0xac0ex8.getAttribute("data-id");
                    (_0xac0ex10 = _0xac0ex6.ref("BlogID_" + blogID + "/PostID_" + _0xac0ex10)).once("value", function (_0xac0ex5, _0xac0ex6) {
                        return function (_0xac0ex9) {
                            0 < (_0xac0ex9 = _0xac0ex9.exists() ? _0xac0ex9.val() : 0) && ("true" == PuSet.realViews.abbreviation ? _0xac0ex5.setAttribute("data-text", Pu.abv(_0xac0ex9)) : _0xac0ex5.setAttribute("data-text", _0xac0ex9), remCt(_0xac0ex5, "hidden")), "true" == _0xac0ex5.getAttribute("data-add") && (_0xac0ex5.setAttribute("data-add", !1), _0xac0ex9 = parseInt(_0xac0ex9) + 1, _0xac0ex6.set(_0xac0ex9))
                        }
                    }(_0xac0ex8, _0xac0ex10))
                }
            })
        })
    }, 100), setTimeout(function () {
        null != qSel(".isBkm") && ldJs(baseUrl + "/js/BookmarkPosts.min.js", "bkm-js", !0, "body", function () {
            ldCss(baseUrl + "/css/BookmarkPosts.min.css", "bkm-css")
        }), null != qSel(".topM") && ldCss(newUrl + "/css/topics-menu.css", "topics-css")
    }, 200), "true" != isError && ("lazy" == PuSet.adsenseAds.loadType ? ldJs(baseUrl + "/js/AdsenseAds.min.js", "adstr-js") : "defer" == PuSet.adsenseAds.loadType && Defer.js(baseUrl + "/js/AdsenseAds.min.js", "adstr-js")), lazyCustomJs())
}
var aryLzJsM = [];
function loadLzJsM() {
    var _0xac0ex9, _0xac0exd;
    aryLzJsM.push(1), null != qSel("#font-family") && PuSet.fontFamily.mobileFonts && ((_0xac0exd = (_0xac0ex9 = document).createElement("style")).id = "FontsStyle", _0xac0exd.textContent = PuSet.fontFamily.mobileFonts, _0xac0ex9.getElementsByTagName("head")[0].appendChild(_0xac0exd))
}
var lazyJs = !1;
window.addEventListener("scroll", function () {
    (0 != document.documentElement.scrollTop && !1 === lazyJs || 0 != document.body.scrollTop && !1 === lazyJs) && (0 == aryLzJs.length && null == Pu.gLS("Lz_Js") && (loadLzJs(), Pu.sLS("Lz_Js", 1)), 0 == aryLzJsM.length && null == Pu.gLS("Lz_JsM") && (loadLzJsM(), Pu.sLS("Lz_JsM", 1)), null != qSel("#ckWrap") && null == Pu.gC("CookiePolicy") && Defer(function () {
        ldCss(baseUrl + "/css/CookieConsent.min.css", "ck-css", function () {
            ldJs(baseUrl + "/js/CookieConsent.min.js", "ck-js", !0, "body")
        })
    }, 5e3), 0 < qSell("div.hl pre").length && ldJs(baseUrl + "/lib/highlight-11.5.0.min.js", "hl-js", !0, "body", function () {
        qSell("div.hl pre").forEach((_0xac0ex9) => {
            hljs.highlightElement(_0xac0ex9)
        })
    }), "true" == isPost && "true" != isPrivateBlog && (null != qSel("#rPst") && ldCss(baseUrl + "/css/RelatedPosts.min.css", "rPst-css", function () {
        ldJs(baseUrl + "/js/RelatedPosts.min.js", "rPst-js", !0, "body")
    }), null != qSel("div.pre.pF") && ldJs(newUrl + "/js/code-box.js", "code-box-js", !0, "body", function () {
        ldCss(newUrl + "/css/code-box.css", "code-box-css")
    }), null != qSel("#aRel") && ldJs(baseUrl + "/js/AutoRelated.min.js", "aRel-js", !0, "body"), null != qSel("#aChp") && ldJs(baseUrl + "/js/AutoChapters.min.js", "aChp-js", !0, "body")), scrollCustomJs(), "true" != isError && "scroll" == PuSet.adsenseAds.loadType && ldJs(baseUrl + "/js/AdsenseAds.min.js", "adstr-js"), lazyJs = !0)
}, !0), qSel("body").addEventListener("click", (_0xac0ex9) => {
    0 == aryLzJs.length && null == Pu.gLS("Lz_Js") && (loadLzJs(), Pu.sLS("Lz_Js", 1)), 0 == aryLzJsM.length && null == Pu.gLS("Lz_JsM") && (loadLzJsM(), Pu.sLS("Lz_JsM", 1))
}), Pu.gLS("Lz_Js") && loadLzJs(), Pu.gLS("Lz_JsM") && loadLzJsM();
function lazyCallback() {
    ldJs("https://raw.githack.com/jirale/blog/main/AdditionalJavascripts.js", "add-js", !0, "body"), null != qSel("#pace-progress") && ldJs("https://raw.githack.com/jirale/blog/main/pace.min.js", "pace-js", !0, "body")
}
Lazy(lazyCallback);