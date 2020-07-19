const fs = require('fs')
fs.rename('./','./',(err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('修改成功')
    }
})