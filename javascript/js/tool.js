// 使用方法 
// document.write("<script type='text/javascript' src='../js/tool.js'></script>")
// 获取样式
function getStyle(obj, attr) {
    return window.getComputedStyle(obj,null)[attr] ? window.getComputedStyle(obj,null)[attr] : obj.currentStyle[attr];
}
// 元素移动动画
function move(obj,attr,target,speed,fun){ //对象，方向，元素最终的目的地的位置，速度，回调函数
    if(obj.timer) clearInterval(obj.timer); //关闭上一个定时器
    let current = parseInt(getStyle(obj,attr)); //获取元素目前的位置
    if(current>target) speed = -speed; //判断速度的正负
    obj.timer = setInterval(function(){ //开启一个定时器来执行动画
        let oldValue = parseInt(getStyle(obj,attr)); //获取元素原来的位置
        let newValue = oldValue + speed; //获取新的位置
        /*  向反方向移动时，判断newValue是否小于target
            向正方向移动时，判断newValue是否大于target */
       if((speed<0 && newValue<target) || (speed>0 && newValue>target)){
           newValue = target;
       }
       obj.style[attr] = newValue + "px"; //将新值设置给对象
       if(newValue == target){ //当元素到达指定位置时停止动画(关闭计时器)
           clearInterval(obj.timer);
           fun();
       }
    },30);
};
// 获取元素的旋转角度
function rotateValue(obj){
    // var el = document.getElementById(obj);
    var st = window.getComputedStyle(obj, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "FAIL";
    var values = tr.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return angle;
};
// 元素旋转动画
function rotate(obj,value,speed,fun){ //对象，元素最终的目的地的位置，速度，回调函数
    if(obj.timer) clearInterval(obj.timer); //关闭上一个定时器
    let rv= rotateValue(obj); //获取目标元素当前的角度
    if(rv>value) speed = -speed; //判断速度的正负
    obj.timer = setInterval(function(){ //开启一个定时器来执行动画
        let oldValue = rotateValue(obj); //获取目标元素当前的角度
        let newValue = oldValue + speed; //获取新的位置
        /*  向反方向旋转时，判断newValue是否小于value
            向正方向旋转时，判断newValue是否大于value */
    if((speed<0 && newValue<value) || (speed>0 && newValue>value)){
        newValue = value;
    }
    obj.style.webkitTransform = "rotate("+newValue+"deg)"; //将新值设置给对象
    if(newValue == value){ //当元素到达指定位置时停止动画(关闭计时器)
        clearInterval(obj.timer);
        fun();
    }
    },30);
};