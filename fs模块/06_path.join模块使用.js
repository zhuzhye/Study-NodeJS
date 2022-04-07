const path = require("path");
// // 注意 ../会抵消前面的路径
// const pathStr = path.join("/a", "/b/c", "../", "./d", "c");
// console.log(pathStr);

const fs = require("fs");
fs.readFile(
  path.join(__dirname, "./test.txt"),
  { encoding: "utf-8" },
  function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  }
);
