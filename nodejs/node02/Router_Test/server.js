const express = require('express')
const app = express()
//设置对应的路由文件
let userRouter = require('./Router/userRouter')
// let foodRouter = require('./Router/foodRouter')
//接收对应的数据
app.use('/user',userRouter)
// app.use('/food',userRouter)

app.listen(3000,()=>{
    //监听端口号，开启nodejs服务器
    console.log('server start')
})
