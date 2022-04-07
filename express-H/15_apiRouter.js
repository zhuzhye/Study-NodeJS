const express = require("express");
const router = express.Router();
// 在这里挂载对应的路由
router.get("/get", (req, res) => {
  // 通过req.query获取客户端通过查询字符串，发送给服务器的数据
  const query = req.query;
  // 调用res.send()向客户端响应处理的数据
  res.send({
    status: 0,
    msg: "GET请求成功",
    data: query,
  });
});

router.post("/post", (req, res) => {
  // 1.获取客户端通过请求体，发送到服务器的URL-encoded数据
  const body = req.body;
  // 2.调用res.send()向客户端响应处理的数据
  res.send({
    status: 0,
    msg: "POST请求成功",
    data: body,
  });
});

router.delete("/delete", (req, res) => {
  res.send({
    status: 0,
    msg: "DELETE请求成功",
  });
});
module.exports = router;
