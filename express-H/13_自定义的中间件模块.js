const qs = require("querystring");
// 解析表单数据的中间件
// 自定义中间件
const bodyParser = (req, res, next) => {
  // 定义一个str字符串，专门用来储存客户端发送过来的请求体数据
  let str = "";
  // 监听req的data时间
  req.on("data", (chunk) => {
    // 拼接请求体数据
    str += chunk;
  });
  req.on("end", () => {
    let body = qs.parse(str);
    req.body = body;
    next();
  });
};

module.exports = bodyParser;
