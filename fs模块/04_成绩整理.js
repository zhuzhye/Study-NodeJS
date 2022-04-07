const fs = require("fs");
fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) {
    return console.log("读取文件失败" + err.message);
  }
  data = data.split(" ");
  let arrnew = [];
  data.forEach((item) => {
    arrnew.push(item.replace("=", ":"));
  });
  arrnew = arrnew.join("\r\n");
  fs.writeFile(
    "./test1.txt",
    arrnew,
    { flag: "a", encoding: "utf-8" },
    (err) => {
      if (err) {
        return console.log("写入失败" + err);
      }
      console.log("写入成功");
    }
  );
  console.log(arrnew);
});
