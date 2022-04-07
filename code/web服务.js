const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  let url = req.url;
  console.log(path.join(__dirname, url));
  fs.readFile(path.join(__dirname, url), { encoding: "utf-8" }, (err, data) => {
    if (err) {
      return console.log("读取失败");
    }
    res.end(data);
  });
});
server.listen(3333, () => {
  console.log("http://127.0.0.1:3333");
});
