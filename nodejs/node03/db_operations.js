const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'japanese'
})

// 连接数据库
con.connect()
// console.log('连接成功')
//数据库操作

//查找语句
// con.query('select translation_chinese from words where id<=10',(error,results,fields)=>{
//     if(error) throw error
//     console.log(results)
// })

// 添加语句
// let sql = `insert into user(name,username,password) values('feng2','haha','123456')`
// con.query(sql,(error,results,fields)=>{
//     if(error){
//         throw error
//     }else{
//         console.log('插入成功')
//     }   
// })

// 修改语句
// let sql = `update user set name='feng3' where name='feng2';`
// con.query(sql,(error,results,fields)=>{
//     if(error){
//         throw error
//     }else{
//         console.log('修改成功')
//     }   
// })

// 删除语句
// let sql = `delete from user where name='feng3';`
// con.query(sql,(error,results,fields)=>{
//     if(error){
//         throw error
//     }else{
//         console.log('删除成功')
//     }   
// })

// 断开数据库
con.end()