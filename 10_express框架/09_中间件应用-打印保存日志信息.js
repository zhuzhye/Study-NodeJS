const path = require("path");
// npm i morgan
const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const app = express();
const writerStream = fs.createWriteStream("./logs/asscess.log", { flags: "a" });
app.use(morgan("combined", { stream: writerStream }));
app.listen(8000, () => {
  console.log("服务器启动成功");
});
