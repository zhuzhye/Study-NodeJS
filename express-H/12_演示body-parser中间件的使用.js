const express = require("express");
const app = express();
// 1.导入解析表单数据的中间件 body-parser
const parser = require("body-parser");
app.use(parser.urlencoded({ extended: false }));
app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("ok");
});
app.listen(7666, () => {
  console.log("服务器已启动");
});
