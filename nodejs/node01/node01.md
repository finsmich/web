### marckdown 使用
# 标题1
## 标题2
``` js
console.log(111)
```
>内容引用
+ 列表1
  + XXX
  - XXX
+ 列表2
  - 111
  - 111

[百度链接](http://www.baidu.com)

### 邮箱验证码案例
  1、用到的模块nodemailer，是第三方模块，在npm官网可以找到
  [npm官网](https://www.npmjs.com)
  2、对应的文件mailer.js

### 爬虫案例
  1、获取目标网站 通过http.get模块获取，文件splider.js
  2、分析网站内容 cheerio 可以使用jq里的各种选择器
  3、获取有效信息，下载或者其他操作 cheerio.js