const http = require("http");
//创建一个web服务器
const server = http.createServer((request, response) => {
  // request封装了客服端传给服务所有的信息
  //请求的url
  console.log(request.url);
  //请求的方式
  console.log(request.method);
  //请求头
  console.log(request.headers);
  response.setHeader("Content-Type", "text/plain; charset=utf-8");
  response.end("你好啊");
});

//请求的服务器端口和主机
server.listen("8000", "127.0.0.1", () => {
  console.log("服务已启动");
});
