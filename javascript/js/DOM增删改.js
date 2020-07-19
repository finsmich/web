function myClick(btnid,fun){
    let btn = document.getElementById(btnid);
    btn.onclick = fun;
}
let lis = document.getElementsByTagName("li");
// 1.btn01 创建一个“广州节点”，添加到ul里面
myClick("btn01",function(){
    let li = document.createElement("li"); // 创建一个广州节点
    li.innerHTML = "广州";
    let city = document.getElementById("city"); // 获取ul
    city.appendChild(li); // 将节点添加到ul里
});
// 2.btn02 将“广州”节点插入到“北京”前面
myClick("btn02",function(){
    let li = document.createElement("li"); // 创建一个广州节点
    li.innerHTML = "广州";
    for(let i=0; i<lis.length; i++){ //查看所有的li里有没有北京
        if(lis[i].innerHTML === "北京"){
            city.insertBefore(li,lis[i]);//有的话就插入然后跳出循环
            break;
        } 
    }
});
// 3.btn03 使用“广州”节点替换“北京”节点
myClick("btn03",function(){
    let li = document.createElement("li"); // 创建一个广州节点
    li.innerHTML = "广州";
    for(let i=0; i<lis.length; i++){ //查看所有的li里有没有北京
        if(lis[i].innerHTML === "北京"){
            city.replaceChild(li,lis[i]); //有的话就替换然后跳出循环
            break;
        }
    }
});
// 4.btn04 删除“北京”节点
myClick("btn04",function(){
    for(let i=0; i<lis.length; i++){ //查看所有的li里有没有北京
        if(lis[i].innerHTML === "北京"){
            city.removeChild(lis[i]); //有的话就删除然后跳出循环
            break;
        }
    }
});
// 5. btn05 读取city的html代码
myClick("btn05",function(){
    let city = document.getElementById("city");
    alert(city.innerHTML);
})
// 6. btn06 修改“北京”的html代码
myClick("btn06",function(){
    for(let i=0; i<lis.length; i++){ //查看所有的li里有没有北京
        if(lis[i].innerHTML === "北京"){
            lis[i].innerHTML = "南京";
            break;
        }
    }
});