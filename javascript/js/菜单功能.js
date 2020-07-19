document.write("<script type='text/javascript' src='../js/tool.js'></script>")
let menuName = document.querySelectorAll('.menuName'), //div
    menuButton = document.querySelectorAll('.menuButton'), //button
    embed = document.getElementsByTagName("embed"); //图标
let lastIndex = 0; //设置上一次点击的button的下标
for(let i=0; i<menuButton.length; i++){
    menuName[i].index = i; //自定义属性
    //自定义开关，将初始所有的开关都设置为关上
    menuName[i].isClick = false; 
    menuName[i].onclick = function(){
        //清除上一次的样式
        //如果点击的是不同的button，则上一个button关闭
        //如果点击的是同一个button，则这个button关闭
        move(menuName[lastIndex],"height",40,10,function(){});
        menuButton[lastIndex].style.backgroundColor = "";
        rotate(embed[lastIndex],0,5,function(){});
        //如果两次点击的是同一个button，则进入if，否则进入else
        if(this.isClick){
            //因为样式已经清除了，所以直接将开关关上即可
            menuName[this.index].isClick = false;
        }else{
            //设置当前样式
            move(menuName[this.index],"height",240,10,function(){});
            menuButton[this.index].style.backgroundColor = "lightpink";
            rotate(embed[this.index],90,5,function(){});
            //当前的button打开了所以开关设置为true
            menuName[this.index].isClick = true;
            //上一个button因为被清除样式了所以设置为false
            menuName[lastIndex].isClick = false;
            lastIndex = this.index; //保存上一次的下标
        }
    }
}