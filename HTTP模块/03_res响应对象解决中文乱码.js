const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const str = `你请求的方式是${method} 你请求的地址是 ${url}`;
  // 为了防止中文显示乱码的问题,需要设置响应头, Content-Type的值为text/html; charset="utf-8
  res.setHeader("Content-Type", 'text/html; charset="utf-8"');
  res.end(str);
});
server.listen(3333, () => {
  console.log("服务器已启动");
});
