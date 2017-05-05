
var express = require('express')
var app = express()

app.get("/", function (req, res) {
  var obj = {}
  obj.ip = req.headers["x-forwarded-for"]
  obj.lang = req.headers['accept-language'].slice(0,5)
  obj.userAgent = req.headers['user-agent']
  res.send({"ipaddress":obj.ip, "language":obj.lang, "software":obj.userAgent})
})

app.listen(process.env.PORT, process.env.IP)