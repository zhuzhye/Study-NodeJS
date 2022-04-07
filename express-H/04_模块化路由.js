const express = require("express");
const app = express();
const router = require("./04_router");
//注意 ： app.use()函数的作用，就是注册全局中间件
app.use("/user", router);
app.listen(7666, () => {
  console.log("服务启动");
});
