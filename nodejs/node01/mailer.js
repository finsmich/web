"use strict";
const nodemailer = require("nodemailer");
  //创建发送邮件的对象
  let transporter = nodemailer.createTransport({
    //查找相关信息的地方在下载的nodemailer包里的lib/well-known/services.json
    host: "smtp.qq.com",//发送方的邮箱
    port: 465,//端口号
    secure: true, // true for 465, false for other ports
    auth: {
      user: '1585330068@qq.com', // 发送方的邮箱地址
      pass: 'vxnytscrzkwsgdhi', // smtp验证码
    },
  });
  // 邮件信息
  let mailobj = {
    from: '"Fred Foo 👻" <1585330068@qq.com>', // 发送方
    to: "1585330068@qq.com", // 接收方
    subject: "验证码", // 邮件的标题
    text: "您的验证码是123456，有效期五分钟", // 邮件的内容，与html只能存在一个
    //html: "<b>Hello world?</b>", // html body
  }
  //发送邮件
  transporter.sendMail(mailobj,(err,data)=>{
    if(err){
      console.log('发送失败')
    }
  });