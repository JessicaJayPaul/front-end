$(document).ready(function (){
    var context = $("#canvas-seven")[0].getContext("2d");
    // beginPath和closePath类似下笔的时刻和抬起的时刻
    context.beginPath();
    context.strokeStyle = "#0070c9";
    // lineWidth就是stroke描边的宽度
    context.lineWidth = 3;
    // 参数的含义依次是：圆心横坐标、纵坐标、半径、起始角度、结束角度、是否为逆时针
    context.arc(50,50,45,Math.PI*(-.45),Math.PI*1.45,false); 
    context.stroke();
    context.closePath();
});