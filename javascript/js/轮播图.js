document.write("<script type='text/javascript' src='../js/tool.js'></script>");// 引入工具文件
let ul = document.getElementsByTagName("ul")[0]; //获取ul
let lis = document.getElementsByTagName("li"); //获取li
ul.style.width = 240*lis.length + "px"; //设置ul的宽度
let alink = document.getElementById("alink"); //获取存放超链接选项的div
let as = document.getElementsByTagName("a"); //获取超链接的数量
if(as.length+1 < lis.length){ //设置选项的数量
// 创建一个超链接选项
    let a = document.createElement("a");
    a.href = "#";
    // 添加选项
    for(let i=0; i<lis.length-as.length; i++)
    as[0].parentElement.appendChild(a);
}
let sum = 0;  //设置一个使图片循环播放的变量
as[0].style.backgroundColor = "black"; //将选项的颜色改变
// 点击超链接切换到对应的图片
for(let i=0; i<as.length; i++){
    as[i].onclick = function(){
        clearInterval(timer); //点击图片停止自动播放
        sum = i;
        setA(); //选择图片后，对应的选项颜色变化
        move(ul,"left",-240*i,20,function(){
            autoChange(); //动画完成后开启自动播放
        }); //图片切换动画
    };
}
let timer;
// 开启自动切换
autoChange();
// 创建一个自动轮播图片的函数
function autoChange(){
    timer = setInterval(function(){
        sum++;
        sum = sum%lis.length;
        console.log(sum);
        move(ul,"left",-240*sum,20,function(){
            if(sum == 0) ul.style.left = 0;
        });
        setA();
    },2000);
};
// 创建一个方法用来设置选中的a选项
function setA(){ //options选项(按钮)
    if(sum>=lis.length-1) sum = 0;
    // 将所有的a的背景颜色都设置为lightpink
    for(let i=0; i<as.length; i++){
        as[i].style.backgroundColor = "";
    };
    // 将选中的a的背景颜色设置为黑色
    as[sum].style.backgroundColor = "black";
};