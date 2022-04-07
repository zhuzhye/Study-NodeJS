const express = require("express");
const app = express();
// 编写普通中间件
// use注册一个中间件(回调函数)
app.use((req, res, next) => {
  console.log("注册了第一个普通中间件");
  next();
});
app.use((req, res, next) => {
  console.log("注册了第二个普通中间件");
  next();
});
app.use((req, res, next) => {
  console.log("注册了第三个普通中间件");
  res.end("ok");
});
app.listen(8000, () => {
  console.log("服务器启动");
});
