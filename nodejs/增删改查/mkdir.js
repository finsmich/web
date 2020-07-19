const fs = require('fs')
fs.mkdir('./',(err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('创建成功')
    }
})