const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const server = http.createServer((req, res) => {
  if (req.url === "/upload") {
    if (req.method === "POST") {
      req.setEncoding("binary");

      let body = "";
      req.on("data", (data) => {
        body += data;
      });
      req.on("end", () => {
        console.log(body);
        const boundary = req.headers["content-type"].split(";")[1].split("=")[1];
        console.log(boundary);
        //处理body
        // 1.获取image/png位置
        const payload = qs.parse(body, "\r\n", ": ");
        console.log(payload["Content-Type"]);
        const type = payload["Content-Type"];
        // 2.开始在image/png的位置进行截取
        const typeIndex = body.indexOf(type);
        const typeLength = type.length;
        let imageDate = body.substring(typeIndex + typeLength);
        // 3.将中间的两个空格去掉
        imageDate = imageDate.replace(/^\s\s*/, "");
        // 4.将最后的boundary
        imageDate = imageDate.substring(0, imageDate.indexOf(`--${boundary}--`));
        fs.writeFile("./foo.png", imageDate, { encoding: "binary" }, (err) => {
          res.end("文件上传成功~");
        });
      });
    }
  }
});
server.listen("9999", "127.0.0.1", () => {
  console.log("文件服务器启动成功");
});
