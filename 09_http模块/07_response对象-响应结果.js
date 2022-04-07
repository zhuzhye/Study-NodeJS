const http = require("http");
const server = http.createServer((req, res) => {
  //设置状态码
  //方式一：直接给属性赋值
  res.statusCode = 401;
  //方式二：和Head一起设置
  res.writeHead(503);
  // 响应结果一
  res.write("hello");
  res.end();
  //   res.end("hello");
});
server.listen("8080", "127.0.0.1", () => {
  console.log("服务器启动成功");
});

// http状态码
// 200 Ok 客户端请求成功
// 400 Bad Request 由于客户端请求语法错误，不能被服务器所理解
// 401 Unauthorized 请求未经授权，这个状态码必须和WWW-Authenticate报头一域一起使用
// 403 Forbidden 服务器收到请求，但是拒绝提供服务、服务器通常会在响应正文中给出不提供服务的原因
// 404 Not Found 请求资源不存在，例如，输入了错误的URL
// 500 Internal Server Error 服务器发生不可预期的错误，导致无法完成客户端的请求
// 503 Server Unavailable 服务器当前不能处理客户端的请求，在一段时间之后，服务器可能恢复正常
