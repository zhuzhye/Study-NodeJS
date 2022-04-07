const express = require("express");
const app = express();
// 路径和方法匹配的中间件
app.use((req, res, next) => {
  console.log("comm middleware01");
  next();
});
app.get(
  "/home",
  (req, res, next) => {
    console.log("home");
    next();
  },
  (req, res, next) => {},
  (req, res, next) => {}
);
app.listen(8000, () => {
  console.log("服务器启动");
});
