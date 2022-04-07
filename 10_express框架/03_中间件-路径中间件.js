const express = require("express");
const app = express();
// 路径匹配
app.use("/home", (req, res, next) => {
  res.end("hello");
});
app.listen(8000, () => {
  console.log("服务器启动服务");
});
