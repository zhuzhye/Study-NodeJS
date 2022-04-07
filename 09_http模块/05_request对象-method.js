const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  console.log(req.url);
  const { pathname } = url.parse(req.url);
  if (pathname == "/login") {
    if (req.method === "POST") {
      //拿到body中的数据
      // 获取到的data是二进制流的数据可以先设置utf-8 或者使用data.toString()
      req.setEncoding("utf-8");
      req.on("data", (data) => {
        // console.log(data);

        // data.toString()
        const { username, password } = JSON.parse(data);
        console.log(username, password);
      });
      res.end("hello");
    }
  }
});
server.listen("8000", "127.0.0.1", () => {
  console.log("服务器启动成功");
});
// 获取post中的参数
// {
//     "username":"zzy",
//     "password":"123"
// }
