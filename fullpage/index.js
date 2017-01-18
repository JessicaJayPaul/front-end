var screenWidth = $(window).width();
var screenHeight = $(window).height();

/* 鼠标滚轮事件 */
$(document).on("mousewheel DOMMouseScroll", function (e) {
    var delta = e.originalEvent.wheelDelta > 0 ||                   // chrome & ie
       e.originalEvent.detail < 0                                             // firefox
    if (delta) {
        // 向上滚
        scrollToTop();
    } else {
        // 向下滚
        scrollToBottom();
    }
});

/* 键盘响应事件 */
$(document).keypress(function(event){
    var code = event.keyCode;
    // 37、38、39、40键盘事件：左上右下
    switch (code){
        case 38:
            scrollTo(1);
            break;
        case 40:
            scrollTo(-1);
            break;
    }
});

/* 页面滚动方法，direction为方向，1：向上滚动，-1：向下滚动 */
function scrollTo(direction){
    var top = getIntPx($(".one").css("margin-top"));
    if (top % screenHeight != 0) return;
    var topNew = top + direction * screenHeight;
    if (topNew < (-3) * screenHeight || topNew > 0) return;
    $(".one").css("margin-top", topNew  + "px");
}

function getIntPx(pxStr){
    return parseInt(pxStr.split("px")[0]);
}