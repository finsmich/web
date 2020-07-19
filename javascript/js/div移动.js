// let move = document.getElementById("move"); //获取div
// drag(move);
function drag(obj){
    obj.onmousedown = function(event){ //鼠标按下
        // 获取div的偏移量
        let ol = event.clientX - obj.offsetLeft;
        let ot = event.clientY - obj.offsetTop;
        document.onmousemove = function(event){ //鼠标移动
            event = event || window.event; //兼容浏览器
            // 获取滚动条的距离
            let st = document.body.scrollTop || document.documentElement.scrollTop;
            let sl = document.body.scrollLeft || document.documentElement.scrollLeft;
            // 获取鼠标当前的位置
            let mousex = event.clientX - ol;
            let mousey = event.clientY - ot;
            // 设置div跟随鼠标
            if(st || sl){//如果滚动条滚动了
                obj.style.left = mousex+"px";
                obj.style.top = mousey+"px";
            }else{ //如果滚动条没滚动
                obj.style.left = mousex+sl+"px";
                obj.style.top = mousey+st+"px";
            }
            return false;
        }
        document.onmouseup = function(){ //鼠标松开
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}