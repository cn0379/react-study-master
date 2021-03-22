// 引入http核心模块
var http = require('http')
const multer = require('multer')
var server = http.createServer()
var upload = multer({ dest: 'file' })

server.on('request', function (request, response) {
  if (request.url == '/login') {
    console.log(1111);
  } else {
    console.log("来自客户端的请求,请求路径是" + request.url);
  }
  response.write('hellow')
  response.end("hellow;;;;")
})

// 绑定端口号
server.listen(3001, function () {
  console.log("服务器启动成功,可以端口3000来访问");
})
