// jq基类增加自定义方法
$.fn.autotype = function(){
    var div = $(this);
    var str = div.html();
    // 获取到文本信息后立即清空
    div.html("");
    var index = 0;
    // 是否显示光标
    var showCursor = true;
    // 创建定时器，循环打印字符
    var interval = setInterval(function(){
        showCursor = !showCursor;
        if(index >= str.length){
            // 打印文字完成，光标保持闪烁，不执行下面语句
            var curStr = div.html();
            var tempStr = curStr.substring(0, curStr.length - 1);
            div.html(tempStr + (showCursor ? '_': ' '));
            return;
        }
        // 注意substr和substring的区别，前者是去start length，后者施start end
        var current = str.substr(index, 1);
        // index跳过标签，直接读取文本信息
        if(current == '<'){
            index = str.indexOf('>', index) + 1;
        }else{
            index ++ ;
        }
        // 打印文字
        div.html(str.substring(0, index) + (showCursor ? '_': ' '));
    }, 100);
};