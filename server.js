
var express = require('express')
var app = express()

app.get("/", function (req, res) {
  var obj = {}
  obj.ipaddress = req.headers["x-forwarded-for"]
  obj.language = req.headers['accept-language'].slice(0,5)
  obj.software = req.headers['user-agent']
  res.send(obj)
})

app.listen(process.env.PORT, process.env.IP)