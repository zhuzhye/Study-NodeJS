const express = require("express");
const app = express();
// 注意除了错误级别的中间件,其他的中间件,必须在路由之前配置
// express.json()解析表单中的JOSN格式的数据
app.use(express.json());
// 通过express.urlencoded()这个中间件,来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false }));
app.post("/user", (req, res, next) => {
  console.log(req.body);
  // 在服务器,可以使用req.body这个属性,来接收客户端发送过来的请求体数据
  // 默认情况下,如果不配置解析表单的中间件,则req.body默认等于undefined
  res.send("ok");
});
app.post("/book", (req, res) => {
  // 在服务器端,可以通过req.body来获取JSON格式的表单数据和url-encoded格式的数据
  console.log(req.body);
  res.send("book ok");
});
app.listen(7666, () => {
  console.log("服务已启动");
});
