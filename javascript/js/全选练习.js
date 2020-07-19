// 全选按钮-点击按钮后全都选中
let item = document.getElementsByName("items");//获取四个框的对象
// 1.全选按钮#checkAllBtn
let checkAllBtn = document.getElementById("checkAllBtn");
checkAllBtn.onclick = function(){
    // 设置4个多选框为选中状态
    for(let i = 0; i<item.length; i++){
        item[i].checked = true;
    }
    check.checked = true;
};
// 2.全不选按钮#checkNoBtn
let checkNoBtn = document.getElementById("checkNoBtn");
checkNoBtn.onclick = function(){
    // 设置4个多选框为没选中状态
    for(let i = 0; i<item.length; i++){
        item[i].checked = false;
    }
    check.checked = false;
};
// 3.反选按钮#checkRevBtn
let checkRevBtn = document.getElementById("checkRevBtn");
checkRevBtn.onclick = function(){
    check.checked = true;//设置check默认为选中状态
    for(let i = 0; i<item.length; i++){
        item[i].checked = !item[i].checked
        if(!item[i].checked) check.checked = false; //如果有框没勾上则check状态改变
    }
};
// 4.全选/全不选按钮#check
let check = document.getElementById("check");
check.onclick = function(){
    for(let i = 0; i<item.length; i++){
        item[i].checked = this.checked;//将四个框的状态设置成check的状态
    }

};
// 5.提交按钮弹出按钮的状态#sendBtn
let sendBtn = document.getElementById("sendBtn");
sendBtn.onclick = function(){
    for(let i = 0; i<item.length; i++){
        alert(item[i].value+"="+item[i].checked);
    }
};
// 6.4个框状态判断
for(let i = 0; i<item.length; i++){
    item[i].onclick = function(){
        check.checked = true;//设置check默认为选中状态
        for(let j = 0; j<item.length; j++){
            if(!item[j].checked){
                check.checked = false;
                break;
             } //如果有框没勾上则check状态改变
        }
    };
}
