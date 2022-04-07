const http = require("http");

//创建web服务器
const server = http.createServer((req, res) => {
  res.end("hello server11");
});

server.listen(8080, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
