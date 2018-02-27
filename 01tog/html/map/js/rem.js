/**
 * Created by hnothing on 2017/4/27.
 */
!function(win) {
    function resize() {
        var domWidth = domEle.getBoundingClientRect().width;
        // if(domWidth / v > 740){
        //     domWidth = 740 * v;
        // }
        win.rem = domWidth / 10;
        domEle.style.fontSize = win.rem + "px";
    }
    var v, initial_scale, timeCode, dom = win.document, domEle = dom.documentElement, viewport = dom.querySelector('meta[name="viewport"]'), flexible = dom.querySelector('meta[name="flexible"]');
    if (viewport) {
        var o = viewport.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
        if(o){
            initial_scale = parseFloat(o[2]);
            v = parseInt(1 / initial_scale);
        }
    } else if(flexible) {
        var o = flexible.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
        if (o) {
            v = parseFloat(o[2]);
            initial_scale = parseFloat((1 / v).toFixed(2))
        }
    }
    if (!v && !initial_scale) {
        var n = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi));
        v = win.devicePixelRatio;
        v = n ? v >= 3 ? 3 : v >= 2 ? 2 : 1 : 1, initial_scale = 1 / v
    }
    win.dpr = v;
    win.addEventListener("resize", function() {
        clearTimeout(timeCode), timeCode = setTimeout(resize, 300)
    }, false);
    win.addEventListener("pageshow", function(b) {
        b.persisted && (clearTimeout(timeCode), timeCode = setTimeout(resize, 300))
    }, false);
    resize();
}(window);