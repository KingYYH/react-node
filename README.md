### 一、
    1、npm install -g create-react-app
    2、新建一个应用 create-react-app test（test为项目名）  
    3、安装第三方库  npm i redux --save
    4、自定义配置 npm run eject 弹出配置文件，可以自定义配置webpack
    5、扩展package.json里的script字段，扩展npm run命令  

### 二、
    安装node.js，express 在根文件和src同级新建server文件夹和server.js文件
    由于node里没有原生支持import   需要require依赖

    const express = require('express')
    // 新建app
    const app = express()

    app.get('/', function(req, res){
      res.send('<h1>hello world1</h1>')
    })

    app.get('/data', function(req, res){
      res.json({
        name: 'yyh',
        type: 'IT'
      })
    })

    app.listen(9090, function(){
      console.log('node start at 9090')
    })

    初始node

  ###  监听路由和响应内容，使用nodemon自动重启npm install -g nodemon
  ###  安装mongodb, mongoose npm install mongoose --save
  ###  mongodb是一个基于分布式文件存储的数据库


const mongoose = require('mongoose')
// 链接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL, {useNewUrlParser:true})

mongoose基础使用

connerct链接数据库
定义文档模型，schema和model新建模型

mongoose 文档类型 string，number等
增删改查  create， remoce ，update， find / findOne

// User.create({
//   name: 'imooc',
//   age: 18
// }, function(err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })


  User.find({}, function(err, doc) {
    res.json(doc)
  })


  User.update({'user': 'xiaoming'}, {'$set': {age: 26}}, function(err, doc) {
    console.log(doc)
  })


