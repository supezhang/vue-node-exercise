const express = require("express");
const mysql = require("mysql");
const url = require('url')
const bodyParser = require('body-parser');
const router = express.Router();
var app = express();
app.use(bodyParser.urlencoded({extended:true}))

// app.use(bodyParser.json())
let connection = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'root',
    database:'testserver4'
})
connection.connect();
let sql = 'select * from user_table';

let str="";

connection.query(sql,(err,res)=>{
    if(!err){
        str = JSON.stringify(res)
    }
})
app.post("/reg",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    // let {pathname,query} = url.parse(req.url,true)
    console.log(req.body);
    res.send(s)
})
app.get("/login",(req,res)=>{  
    // res.header("Access-Control-Allow-Origin","http://localhost:8080");
    res.header("Access-Control-Allow-Origin","*");
    console.log(req.query);
    res.send(str)
})
connection.end();
app.listen(3100,()=>{    
    console.log('running at 3100 port');
})
// ------------------------------------------------------
// const http = require("http");
// const fs = require("fs");
// const mysql = require("mysql");
// const url = require("url");
// const zlib = require("zlib");
// const crypto = require("crypto");

// let key = "1234656";
// function md5(str){
//     let obj = crypto.createHash("md5");
//     obj.update(str);
//     return obj.digest("hex");
// }
// function md5_2(str){
//     return md5(md5(str+key));
// }
// //创建数据库的连接
// let db = mysql.createPool({host: "localhost", port: "3306", user: "root", password: "root", database: "testserver"})
// //创建服务
// let server = http.createServer((req,res)=>{
//     console.log("创建http服务");
//     let {pathname,query} = url.parse(req.url,true);
//     let {
//         username,
//         password
//     } = query;
//     switch(pathname){
//         case "/reg":
//             //对数据进行校验
//             if(!username){
//                 res.write('{"err":1,"msg":"username can\'t be empty"}');
//                 res.end();
//             }else if(!password){
//                 res.write('{"err":1,"msg":"password can\'t be empty"}');
//                 res.end();
//             }else if(!/^\w{4,16}$/.test(username)){
//                 res.write('{"err":1,"msg":"username is invalid"}');
//                 res.end();
//             }else if(/['|"]/.test(password)){
//                 res.write('{"err":1,"msg":"password is invalid"}');
//                 res.end();
//             }else{
//                 //写入数据库之前先判断用户明是否存在
//                 db.query(`SELECT * FROM user_table WHERE username='${username}'`,(err,data)=>{
//                     if(err){
//                         res.write('{"err":1,"msg":"database error"}');
//                         res.end();
//                     }else{
//                         if(data.length>0){
//                             res.write('{"err":1,"msg":"the username is exists"}');
//                             res.end();
//                         }else{
//                             db.query(`INSERT INTO user_table (id,username,password) VALUES(0,'${username}','${md5_2(password)}')`, (err, data) => {
//                                 if(err){
//                                     res.write('{"err":1,"msg":"database error"}');
//                                     res.end();
//                                 }else{
//                                     res.write('{"err":0,"msg":"success"}')
//                                     res.end();
//                                 }
//                             })
//                         }
//                     }
//                 })
//             }
//             break;
//         case "/login":
//             //对数据进行校验
//             if (!username) {
//                 res.write('{"err":1,"msg":"username can\'t be empty"}');
//                 res.end();
//             } else if (!password) {
//                 res.write('{"err":1,"msg":"password can\'t be empty"}');
//                 res.end();
//             } else if (!/^\w{4,16}$/.test(username)) {
//                 res.write('{"err":1,"msg":"username is invalid"}');
//                 res.end();
//             } else if (/['|"]/.test(password)) {
//                 res.write('{"err":1,"msg":"password is invalid"}');
//                 res.end();
//             } else {
//                 //写入数据库之前先判断用户明是否存在
//                 console.log('接入sql');
//                 db.query(`SELECT * FROM user_table WHERE username='${username}'`, (err, data) => {
//                     if (err) {
//                         res.write('{"err":1,"msg":"database error"}');
//                         res.end();
//                     }else if(data.length == 0){
//                         res.write('{"err":1,"msg":"the username is not exists"}');
//                         res.end();
//                     }else if(data[0].password != md5_2(password)){
//                         res.write('{"err":1,"msg":"the username or password is incorrect"}');
//                         res.end();
//                     }else{
//                         res.write('{"err":0,"msg":"success"}');
//                         res.end();
//                     }
//                 })
//             }
//             break;
//         default:
//             let rs = fs.createReadStream(`www${pathname}`);
//             let gz = zlib.createGzip();
//             res.setHeader("content-encoding","gzip");
//             rs.pipe(gz).pipe(res);
//             rs.on("error",err=>{
//                 res.writeHeader(404);
//                 res.write("Not Found");
//                 res.end();
//             });
//             break;
//     }
// })
// http.get("localhost:3306/login",(res)=>{
//     console.log("登录请求",res);
// })
// // 监听端口
// server.listen(4000);

// console.log('runing');