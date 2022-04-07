const express = require("express");
const UserRouter = express.Router();

UserRouter.get("/", (req, res, next) => {
  res.json({ name: "zzy", age: 16 });
});
UserRouter.post("/", (req, res, next) => {
  res.json("请求成功");
});
UserRouter.post("/:id", (req, res, next) => {
  console.log(req.params);
  res.json(`${req.params.id}`);
});
module.exports = UserRouter;
