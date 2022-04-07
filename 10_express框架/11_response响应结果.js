const express = require("express");
const app = express();
app.get("/products/:id/:name", (req, res, next) => {
  console.log(req.params);
  res.end("请求成功");
});
app.get("/login", (req, res, next) => {
  console.log(req.query);
  //   res.type("application/json");
  //   res.end(JSON.stringify({ name: "zzy", age: 18 }));
  //   设置响应码
  res.status(200);
  res.json({ name: "zzy", age: 17 });
});
app.listen(8000, () => {
  console.log("普通中间件服务器启动");
});
