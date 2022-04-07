// 局部生效的中间件
// 不使用app.use定义的中间件，叫做局部生效的中间件
const express = require("express");
const app = express();
// 定义中间件函数
const mw1 = (req, res, next) => {
  console.log("调用了局部生效的中间件1");
  next();
};
const mw2 = (req, res, next) => {
  console.log("调用了局部生效的中间件2");
  next();
};
app.get("/", [mw1, mw2], (req, res) => {
  res.send("Home page");
});
app.get("/user", mw2, mw1, (req, res) => {
  res.send("Userpage");
});
app.listen(7666, () => {
  console.log("服务器已启动");
});
