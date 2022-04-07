const path = require("path");
const express = require("express");
const app = express();
const multer = require("multer");
app.use(express.json());
app.use(express.urlencoded());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, res, cb) => {
    cb(null, Date.now() + path.extname(res.originalname));
  },
});
const upload = multer({
  //   dest: "./uploads/",
  storage,
});

// app.use(upload.any());
// npm i multer 解析form-data
app.post("/login", (req, res, next) => {
  // console.log(req.body);
  res.end("登录成功");
});

app.post("/upload", upload.fields([{ name: "file" }, { name: "myfile" }]), (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  res.end("上传成功");
});
app.listen(8000, () => {
  console.log("服务器启动成功");
});
