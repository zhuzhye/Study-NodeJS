const express = require("express");
const app = express();
app.use("/clock", express.static("./clock"));
app.listen(7666, () => {
  console.log("服务器已启动");
});
