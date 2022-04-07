// 1.导入express
const express = require("express");
// 2.创建路由对象
const router = express.Router();
// 3.挂载具体的对象
router.get("/list", (req, res) => {
  res.send("get user list");
});
router.post("/add", (req, res) => {
  res.send("get user add");
});
// 4.向外导出路由对象
module.exports = router;
