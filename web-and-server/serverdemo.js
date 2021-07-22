const express = require('express');
const mysql = require('mysql')
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
const pool = mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'root',
  database:'testserver4'
})
function query(sql,callback){
  pool.getConnection((err,connection)=>{
    connection.query(sql,(err,rows)=>{
      callback(err,rows);
      connection.release();
    })
  })
}

// router.use((req,res,next)=>{
//   console.log('路由执行~~~');
//   next()
// })
router.get('/all',(req,res,next)=>{
  // console.log('get请求....');
  pool.getConnection((err,connection)=>{
    connection.query('select * from user_table',(err,rows)=>{
      if(!err){
        res.send(rows)
      }
    })
    connection.release();
  })
})
router.post("/add",(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  let username = req.body.username;
  let pwd = req.body.pwd;
  pool.getConnection((err,connection)=>{
    connection.query("insert into user_table(username,pwd) values('" + username + "'," + pwd + ")",(err,rows)=>{
      if(!err){
        res.send("注册成功")
      }
    })
    // pool.end()
    connection.release();
  })
})
router.post("/uploadimg",(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  // console.log("提交的req.body",req.body);
  let avatar = req.body.avatar
  pool.getConnection((err,connection)=>{
    console.log("连上准备中。。。");
    connection.query("insert into test_img_upload(avatar) values('"+avatar+"')",(err,rows)=>{
      if(!err){
        console.log("·~~~上传成功了");
        res.send(rows)
      }else{
        console.log(err);
      }
    })
    connection.release();
  })
})
router.get("/geticon",(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  pool.getConnection((err,connection)=>{
    connection.query("select * from test_img_upload",(err,rows)=>{
      if(!err){
        // console.log(rows)           
        let result=[]
        for(let item in rows){
          let bfr = new Buffer(rows[item].avatar)                
          let str = bfr.toString()
          result.push(str)
      }       
        console.log(result) 
        res.send(result)
      }else{
        console.log("获取icon失败")
        res.send("获取icon失败")
      }
    })
  })
})
app.use('/',router);
app.listen(3200,()=>{
  console.log('running at 3200 port');
})