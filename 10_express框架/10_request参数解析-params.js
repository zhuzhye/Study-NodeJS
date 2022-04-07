const express = require("express");
const app = express();
app.get("/products/:id/:name", (req, res, next) => {
  console.log(req.params);
  res.send("请求成功");
});
app.get("/login", (req, res, next) => {
  console.log(req.query);
  res.send("请求成功");
});
app.listen(8000, () => {
  console.log("普通中间件服务器启动");
});
