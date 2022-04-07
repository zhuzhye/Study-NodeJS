const express = require("express");
const app = express();
//挂载路由
app.get("/", (re, res, next) => {
  res.send("hello word");
});
app.post("/", (req, res, next) => {
  res.send("post query");
});
app.listen(7666, () => {
  console.log("服务启动");
});
