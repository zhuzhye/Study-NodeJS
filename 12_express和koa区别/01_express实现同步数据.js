const express = require("express");
const app = express();
const middleware1 = function (req, res, next) {
  req.message = "aaa";
};
const middleware2 = function (req, res, next) {
  req.message += "bbb";
};
const middleware3 = function (req, res, next) {
  req.message += "ccc";
};
app.use("/login", middleware1, middleware2, middleware3);
app.listen(7555, () => {
  console.log("服务器已启动");
});
