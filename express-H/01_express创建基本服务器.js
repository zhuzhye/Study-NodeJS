// 导入express
const express = require("express");
// 创建web服务器
const app = express();
// 监听客户端的get和post请求
app.get("/user", (req, res, next) => {
  // 调用express提供的res.send()方法，向客户端响应一个JSON对象
  res.send({ name: "zzy", age: 18 });
});
app.post("/user", (req, res, next) => {
  res.send("请求成功");
});
app.get("/", (req, res, next) => {
  // req.query默认是一个空对象
  // 客户端使用 ?name=zzy&age18 这种查询字符串形式，发送到服务器的参数
  // 可以通过req.query 对象访问到
  // req.query.name req.query.name
  res.send(req.query);
  // next函数是实现多个中间件连续调用的关键，他表示把流转关系转交给下一个中间件或路由
});
//注意：这里的:id是一个动态参数
app.get("/user/:id", (req, res, next) => {
  // req.params是动态匹配到的URL参数
  res.send(req.params);
});
// 启动web服务器
app.listen(7666, () => {
  console.log("服务器启动成功");
});
