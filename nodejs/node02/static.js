const express = require('express')
const app = express()
const path = require('path')

// console.log(path.join(__dirname)) //获取当前路径
app.use(express.static(path.join(__dirname,'./htdocs')))
// app.use('./',express.static(path.join(__dirname,'./htdocs'))) //与上面一样
// app.use('./html',express.static(path.join(__dirname,'./htdocs'))) //在端口号后面加上/html


app.listen(3000,()=>{
    //监听端口号，开启nodejs服务器
    console.log('server start')
})