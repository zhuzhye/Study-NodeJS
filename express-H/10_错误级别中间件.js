const express = require("express");
const app = express();
app.get("/", (req, res) => {
  //1.1认为制造错误
  throw new Error("服务器内部发生错误");
  res.send("Home page");
});
// 定义错误级别的中间件,捕获这个项目的异常错误,从而防止程序崩溃
// 错误级别的中间件注册在所有路由之后
app.use(function (err, req, res, next) {
  console.log("发生错误" + err.message);
  res.send("Error" + err.message);
});
app.listen(7666, () => {
  console.log("服务已启动");
});
