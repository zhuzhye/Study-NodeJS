const express = require("express");
const app = express();
// 定义一个最简单的中间件函数
// const mw = function (req, res, next) {
//   console.log("这是最简单的中间件函数");
//   // 把流转关系转交给下一个中间件或路由
//   next();
// };
// // 全局生效的中间件
// // 客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件
// app.use(mw);
app.use((req, res, next) => {
  console.log("这是最简单的中间件函数");
  // 把流转关系转交给下一个中间件或路由
  next();
});
app.get("/", (req, res, next) => {
  res.send("请求成功");
});
app.listen(6777, () => {
  console.log("服务器已启动");
});
