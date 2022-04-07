const path = require("path");
const express = require("express");
const app = express();

// 在这里，调用express.static()方法，快速对外提供静态资源
// 挂载路径前缀 127.0.0.1:7666/file/index.html
app.use("/file", express.static(path.join(__dirname, "./file")));
app.use(express.static(path.join(__dirname, "./clock")));

app.listen(7666, () => {
  console.log("express server running");
});
