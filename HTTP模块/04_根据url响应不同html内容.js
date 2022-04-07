const http = require("http");
const server = http.createServer((req, res) => {
  // 1.获取请求的url地址
  const url = req.url;
  // 2.设置默认的响应内容404 Not found
  let content = "404 Not Found";
  // 3.判断用户请求是否为/ 或 /index.html首页
  // 4.判断用户请求的是否/about.html关于页面
  if (req.url === "/" || req.url === "/index") {
    content = "<h1>首页</h1>";
  } else if (req.url === "/about") {
    content = "<h1>关于</h1>";
  }
  res.setHeader("Content-Type", 'text/html; charset="utf-8"');
  // 5.设置Contnet-type响应头,防止中文乱码
  // 6.使用res.end()把内容响应给客户端
  res.end(content);
});
server.listen(3333, () => {
  console.log("http://127.0.0.1:3333");
});
