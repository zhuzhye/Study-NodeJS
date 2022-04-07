const express = require("express");
const app = express();
// 中间件作用：多个中间件之间，共享同一份req和res。基于这样的特性。我们可以在上游的中间件中，统一为req或res对象添加自定义的属性和方法，供下游的中间件或路由进行使用
app.use((req, res, next) => {
  const time = Date.now();
  // 为req对象，挂载自定义属性，从而把时间共享给后面的所有路由
  req.startTime = time;
  next();
});
app.get("/", (req, res, next) => {
  res.send("请求成功" + req.startTime);
});
app.get("/user", (req, res) => {
  res.send("user page" + req.startTime);
});
app.listen(7666, () => {
  console.log("服务启动成功");
});
