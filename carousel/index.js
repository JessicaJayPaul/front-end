$(document).ready(function(){
    var interval = setInterval('transformLeft(-1, .8)', 2000);
    $(".carousel").hover(function(){
        clearInterval(interval);
    },
    function(){
        interval = setInterval('transformLeft(-1, .8)', 2000);
    });
});

/* left值变换，direction代表移动的方向，interval代表动画的持续时间 */
function transformLeft(direction, interval){
    var carousel = $(".carousel");
    var carouselWidth = transformPxToInt(carousel.css("width"));
    var imgs = $(".carousel .imgs").children();
    var isStop = true;
    var newLefts = new Array();
    // 当通过点击触发动画时遍历所有图片，若有未归位的则跳出本方法
    imgs.each(function(){
        var left = transformPxToInt($(this).css("left"));
        newLefts.push(left + direction * carouselWidth)
        isStop = isStop && (left % carouselWidth == 0);
    });
    if (!isStop) return;

    imgs.each(function(index){
        var img = $(this);
        var leftNew = newLefts[index];
        if (direction == -1) {
            if (leftNew < -carouselWidth) {
                leftNew = carouselWidth * (imgs.length - 2);
                img.css("transition", "none");
            } else{
                img.css("transition", "all " + interval +"s");
            }
        } else if (direction == 1) {
            if (leftNew > carouselWidth * (imgs.length - 2)) {
                leftNew = -carouselWidth;
                img.css("transition", "none");
            } else{
                img.css("transition", "all " + interval +"s");
            }
        }
        img.css("left", leftNew + "px");
    });
    }

function transformPxToInt(str){
    return parseInt(str.split("px")[0]);
}