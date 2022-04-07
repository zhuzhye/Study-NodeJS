const http = require("http");
// 处理url
const url = require("url");
// get请求解析数据
const qs = require("querystring");
const server = http.createServer((req, res) => {
  //最基本的使用方式
  //   if (req.url === "/login") {
  //     res.end("欢迎回来");
  //   } else if (req.url === "/users") {
  //     res.end("用户列表");
  //   } else {
  //     res.end("错误请求");
  //   }
  console.log(req.url);
  const { pathname, query } = url.parse(req.url);
  if (pathname === "/login") {
    console.log(qs.parse(query));
    const { username, password } = qs.parse(query);
    console.log(username, password);
    res.end("登录成功");
  }
});
server.listen("8080", "127.0.0.1", () => {
  console.log("启动服务成功");
});
