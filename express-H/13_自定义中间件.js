// 手动模拟express.urlencoded中间件,解析post提交到服务器的表单数据
// 1.定义中间件
// 2.监听req的data事件
// 3.监听req的end事件
// 4.使用querystring模块解析请求数据
// 5.将解析出来的数据对象挂载到req.body
// 6.将自定义中间件封装模块
// 使用querystring模块解析请求体数据
// nodejs内置一个querystring模块，专门处理查询字符串，通过这个模块提供的parse()函数，可以将查询的字符串解析成对象的格式
const express = require("express");
const app = express();
const bodystring = require("./13_自定义的中间件模块");
// 解析表单数据的中间件
app.use(bodystring);
app.post("/user", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.listen(7666, () => {
  console.log("已启动");
});
