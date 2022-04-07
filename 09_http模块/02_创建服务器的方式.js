const http = require("http");
const server1 = http.createServer((req, res) => {
  res.end("Server http");
});
// server1.listen(8000, () => {
//   console.log("服务器启动成功");
// });
//创建web服务器
// const server2 = http.createServer((req, res) => {
//   res.end("hello serve11");
// });

// server2.listen(8011, "0.0.0.0", () => {
//   console.log("服务器启动成功");
// });

const server2 = new http.Server((req, res) => {
  res.end("Server http2");
});
server2.listen(8011, "0.0.0.0", () => {
  console.log("服务器启动成功");
});

// 2.监听方法的使用
// port
server1.listen("127.0.0.1 ", () => {
  console.log("server1启动");
  console.log(server1.address().port);
});
