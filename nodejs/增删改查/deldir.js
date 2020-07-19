const fs = require('fs')
// 删除的文件夹必须是空的
fs.rmdir('./',(err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('删除成功')
    }
})