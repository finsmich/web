const express = require('express')
const app = express()
const bodyparser = require('body-parser')
//引用中间件（使用插件）
app.use(bodyParser.urlencoded({ extended: false })) //解析表单数据
app.use(bodyParser.json()) //解析json数据
//自定义中间件，拦截器
app.use('/',(req,res,next)=>{
    let {token} = req.query
    if(token){
        next() //是否选择继续往下执行代码
    }else{
        res.send('缺失token')
    }
})
// 最简单的api接口
app.get('/user/login',(req,res)=>{
    //接收get参数，保存在req.query，数据的格式由后端确定
    // console.log('你好')
    // res.send('注册成功')
    let {us,ps} = req.query
    if(us==='feng'&&ps==123){
        res.send({err:0,msg:'login ok'})
    }else{
        res.send({err:-1,msg:'login error'})
    }
})

app.post('/user/reg',(req,res)=>{
    //接收post数据 消息体 请求体 req.body
    let {us,ps} = req.body
    console.log(req.body)
    //express不能直接解析消息体，需要通过第三方插件body-parser解析
    res.send({err:0,mes:'regist ok'})
})

app.listen(3000,()=>{
    //监听端口号，开启nodejs服务器
    console.log('server start')
})

// http://localhost:3000/user/login