const mongoose = require('mongoose')
// 链接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)