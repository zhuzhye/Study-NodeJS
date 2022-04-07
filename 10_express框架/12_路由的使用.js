const express = require("express");
const app = express();
const UserRouter = require("./routers/user");
app.use("/user", UserRouter);
app.listen(8000, () => {
  console.log("普通中间件服务器启动");
});
