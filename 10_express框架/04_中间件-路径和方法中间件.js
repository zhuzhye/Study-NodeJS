const express = require("express");
const app = express();
// 路径和方法匹配的中间件
app.use((req, res, next) => {
  console.log("comm middleware01");
  next();
});
// 路径和方法匹配中间件
app.get("/home", (req, res, next) => {
  console.log("home");
});
app.listen(8000, () => {
  console.log("服务器启动");
});
