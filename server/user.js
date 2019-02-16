const express = require('express')
const Router = express.Router()

Router.get('/info', function(req, res){
  return res.json({
    code: 1,
    data: {
      'yyh': '一枝花',
      'age': '18'
    }
  })
})

module.exports = Router