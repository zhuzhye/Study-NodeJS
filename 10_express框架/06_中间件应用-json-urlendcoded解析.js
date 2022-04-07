const express = require("express");
const app = express();
// 路径和方法匹配的中间件
// app.use((req, res, next) => {
//   if (req.headers["content-type"] === "application/json") {
//     req.on("data", (data) => {
//       const info = JSON.parse(data.toString());
//       req.body = info;
//     });
//     req.on("end", () => {
//       next();
//     });
//   }
// });
// 传过来的时json
app.use(express.json());
// exprended
// true 那么对urlendcoded进行解析时，它使用时的时第三方库qs
// false 那么对 urlendcoded进行解析时，它使用node内置模块 querystring
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res, next) => {
  //   req.on("data", (data) => {
  //     console.log(data.toString());
  //   });
  //   req.on("end", () => {
  //     res.end("zzy welcome");
  //   });
  console.log(req.body);
  res.end("zzy ");
});

app.post("/product", (req, res, next) => {
  res.end("product");
});
app.listen(8000, () => {
  console.log("服务器启动");
});
