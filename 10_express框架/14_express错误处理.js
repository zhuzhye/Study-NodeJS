const express = require("express");
const app = express();
const Username_Does_Not_Exists = "username does not exists";
const Username_Already_Exists = "username already exists";
app.post("/login", (req, res, next) => {
  // 数据库中查询用户名时，发现不存在
  const isLogin = false;
  if (isLogin) {
    res.json("user login success");
  } else {
    // res.type(400);
    // res.json("username does not exists");
    next(new Error(Username_Does_Not_Exists));
  }
});
app.post("/register", (req, res, next) => {
  const isExists = true;
  if (!isExists) {
    res.json("user register success");
  } else {
    // res.type(400);
    // res.json("username  already exists");
    next(new Error(Username_Already_Exists));
  }
});
app.use((err, req, res, next) => {
  let status = 400;
  let message = "";
  switch (err.message) {
    case Username_Does_Not_Exists:
      message = "username does not exists";
      break;
    case Username_Already_Exists:
      message = "username already exists";
      break;
    default:
      message = "NOT FOUND";
  }
  res.status(status);
  res.json({
    errCode: status,
    errMessage: message,
  });
});
app.listen(7666, () => {
  console.log("服务器已启动");
});
