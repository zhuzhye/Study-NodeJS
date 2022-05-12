const express = require("express");
const app = express();
const axios = require("axios");
function middleware1(req, res, next) {
  req.message = "aaa";
  next();
  res.end(req.message);
}
function middleware2(req, res, next) {
  req.message += "bbb";
  next();
}
function middleware3(req, res, next) {
  axios.get("http://123.207.32.32:9001/lyric?id=167876").then((result) => {
    req.message += result.data.lrc.lyric;
  });
}
app.use(middleware1, middleware2, middleware3);
app.listen(7666, () => {
  console.log("已启动express服务器 地址为 http://127.0.0.1:7666");
});
