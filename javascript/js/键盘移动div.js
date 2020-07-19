// 1.获取div
let box = document.getElementById("container");
// 绑定事件 onkeydown键盘按下 onkeyup键盘松开
// 上38，下40，左37，右39
let dir = 0; //通过值来控制方向
let timer = setInterval(function(){
    switch(dir){
        case 37: 
            box.style.left = box.offsetLeft - 3 + "px"; //左
            break;
        case 39: 
            box.style.left = box.offsetLeft + 3 + "px"; //右
            break;
        case 38: 
            box.style.top = box.offsetTop - 3 + "px"; //上
            break;
        case 40: 
            box.style.top = box.offsetTop + 3 + "px"; //下
            break;
    }
});
document.onkeydown = function(event){ //键盘按下
    event = event || window.event;
    dir = event.keyCode;
};
document.onkeyup = function(){ //键盘松开
    dir = 0;
};

