// 引入工具文件
document.write("<script type='text/javascript' src='../js/tool.js'></script>")
// 获取对象
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let buttons = document.getElementsByTagName("button");
// 绑定按钮事件
buttons[0].onclick = function(){
    move(red,"left",800,20,function(){});
};
buttons[1].onclick = function(){
    move(red,"left",0,20,function(){});
};
buttons[2].onclick = function(){
    move(yellow,"left",800,20,function(){});
};
buttons[3].onclick = function(){
    move(yellow,"top",0,20,function(){});
};
