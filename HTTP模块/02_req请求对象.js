const http = require("http");
const server = http.createServer((req, res) => {
  // req.url是客户端请求的URL地址
  const url = req.url;
  // req.method是客户端请求的method类型
  const method = req.method;
  const str = `methods ${method} url ${url}`;
  console.log(str);
});
server.listen(3333, () => {
  console.log("http://127.0.0.1:3333");
});
