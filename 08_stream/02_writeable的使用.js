const fs = require("fs");
//传统方式
// fs.writeFile("./foo.txt", "helloss", { flag: "a" }, (err) => {
//   console.log(err);
// });

//stream写入方式
const writer = fs.createWriteStream("./foo.txt", {
  flags: "a",
  start: 1,
  encoding: "utf-8",
});

writer.write("你好啊", (err) => {
  console.log(err);
  if (err) {
    console.log(err);
    return;
  }
  console.log("写入成功");
});

writer.write("zzy", (err) => {
  console.log(err);
  if (err) {
    console.log(err);
    return;
  }
  console.log("写入成功");
});

// writer.close();
writer.end("hello word");
writer.on("close", () => {
  console.log("关闭");
});
