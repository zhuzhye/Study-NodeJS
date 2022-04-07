const http = require("http");
// 创建一个web服务器
const server = http.createServer((req, res) => {
  // 设置响应的header
  // 设置方式一
  //   res.setHeader("Content-Type", "text/plain;charset=utf8");
  // 设置方式二
  // 会显示html文本 text / html
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8",
  });
  //  响应结果
  res.write("响应结果一");
  res.end("<h2>hello world</h2>");
});

server.listen("8080", "127.0.0.1", () => {
  console.log("服务器已启动");
});
