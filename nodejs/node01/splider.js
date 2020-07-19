// 1、请求网站的数据
// 2、将网站保存到本地文件
const http = require('http')
const fs = require('fs')
const cheerio = require('cheerio')
let url = 'http://www.cntour.cn/'
http.get(url,(res)=>{
    // 安全判断
    const { statusCode } = res; //状态码
    const contentType = res.headers['content-type']; //文本类型
    // console.log(statusCode)
    let err = null;
    if(statusCode !== 200){
        err = new Error('请求状态错误');
    }else if(!/^text\/html/.test(contentType)){
        err = new Error('请求类型错误');
    }
    // err为真的话说明上面两个判断至少有一个执行了
    if(err){
        console.log(err);
        res.resume(); //清除缓存
        return false;
    }
    // 数据处理
    // 数据分流：将网页数据分成多份，每次接收一份数据就触发一次data事件，chunk是每次接收的数据片段
    let rawData = ''
    res.on('data',(chunk)=>{
        rawData += chunk.toString('utf8')   //将数据由二进制转换成utf8格式
        //写入文件
        // fs.writeFile('./百度.html',rawData,(err)=>{
        //     if(err){
        //         console.log(err.message)
        //     }
        // })
        //将得到的数据里面的图片地址提取出来
        let $ = cheerio.load(rawData)
        $('img').each((index,el)=>{
            fs.writeFile('./图片地址.txt',$(el).attr('src'),(err)=>{
                if(err){ console.log(err.message) }
            })
        })
    })
    res.on('end',()=>{
        console.log('爬取结束')
    })
}).on('error',()=>{
    console.log('爬取失败')
})