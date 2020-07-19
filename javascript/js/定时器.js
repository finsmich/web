let timeup = document.getElementById("timeup");
let i = 1;
let timer; //保存定时器的标识
// 获取按钮
let btn01 = document.getElementById("btn01");
let btn02 = document.getElementById("btn02");
let btn03 = document.getElementById("btn03");
btn01.onclick = function(){ //开始计时
    clearInterval(timer);
    timer = setInterval(function(){ //开启定时器
        timeup.innerHTML = i++;
    },200);
};
btn02.onclick = function(){ //关闭计时
    clearInterval(timer); //关闭计时器
};
btn03.onclick = function(){ //清除
    i = 1;
    timeup.innerHTML = i;
};
