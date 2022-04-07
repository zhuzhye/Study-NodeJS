const http = require("http");
//http 发送get请求
http.get("http://localhost:8080", (res) => {
  res.on("data", (data) => {
    console.log(data.toString());
  });
});
//http发送post请求
const req = http.request(
  {
    method: "POST",
    hostname: "localhost",
    port: 8080,
  },
  (res) => {
    res.on("data", (data) => {
      console.log(data.toString());
    });
    res.on("end", () => {
      console.log("获取了所有数据");
    });
  }
);
req.end();
