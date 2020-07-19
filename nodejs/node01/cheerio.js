const cheerio = require('cheerio')
let $ = cheerio.load('<p>你好，世界！</p><img src="https://www.baidu.com"><img src="https://www.bilibili.com">')
// 将一组html格式的字符串转换成类dom，之后可以通过jq的语法选中其中的元素
//只能读取第一个
//console.log($('img').attr('src'))
//console.log($('p').text())
//读取多个
$('img').each((index,el)=>{
    console.log($(el).attr('src'))
})