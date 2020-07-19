### 通过express框架书写api
#### 什么是api
    ajax 前后端分离 前端通过ajax请求数据
    $.get('http://www.baidu.com/user/login?us=123&ps=456',()=>{})
    http://www.baidu.com/user/login?us=123&ps=456这一块就是api接口

    通过api接口实现数据的请求

    前端：1、写界面 2、请求数据 3、数据处理

    后端：写api接口

    登录接口逻辑分析
    1、接收用户传递的数据(账号密码)
    2、处理数据(判断账号密码是否正确)
    3、返回数据

    api接口构成要素
    - ip
    - port
    - pathname 要求语义化
    - method get post
    接收用户传递数据，数据格式由后端确定
### api接口的书写
+ 接收数据
    - get 保存在req.query
    - post 保存在req.body，需要用body-parser进行解析
### express基本使用
- 实例文件 server.js
- 安装express，是第三方插件
```
npm install express -save
引用第三方插件的时候，会从文件当前的文件夹开始，依次向上级文件夹找node_modules
```
### 服务器
- 服务器
    - 1、本质上就是一台电脑
    - 2、服务器软件(apache，tomcat，iis，ngnix，node)
    - 3、服务器IP和端口号
### 中间件 
+ 内置中间件 static
+ 自定义中间件
+ 第三方中间件 body-parser等
### 设置站点文件夹（静态目录）
+ 实例文件static.js
+ 通过app.use(express.static(路径))设置站点文件夹
    - 通过path.join(__dirname)获取当前文件的路径
    - 通过path.join()连接路径，例如path.join(__dirname,'./要连接的站点文件夹的名字')
### 路由Router
+ 实例文件router_test/server.js
    - 使用express.Router()来将接收到的数据进行拆分
### postman工具 测试接口
### 非关系型数据库(文档) mongodb