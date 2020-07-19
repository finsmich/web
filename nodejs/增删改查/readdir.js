const fs = require('fs')
// 读取文件（不读取内容）
//同步读取
// let dirs = fs.readdirSync('./2.md')
// try{
//     dirs = fs.readdirSync('./2.md')
// }
// catch(err){
//     console.log(err)
// }
// console.log(dirs)
异步读取
fs.readdir('./',(err,data)=>{
    if(err){
        console.log(err.message)
    }else{
       console.log(data) 
    }
})

// 读取文件内容
//同步读取
// let data = fs.readFileSync('./','utf-8')
// try{
//     data = fs.readFileSync('./','utf-8')
// }
// catch(err){
//     console.log(err)
// }
// console.log(data)
// 异步读取
// fs.readFile('./text1.php','utf-8',(err,data)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//        console.log(data) 
//     }
// })