const express = require("express");
//创建服务器实例
const app = express();
const cors = require("cors");
//全局中间件解析urlencoded
app.use(express.urlencoded({ extended: false }));
//一定要在路由之前，配置cors这个中间件，解决接口跨域问题
//必须在配置cors中间件之前，配置JSONP的接口
app.get("/api/JSONP", (req, res) => {
  // 定义jsonp接口具体的实现过程
  // 实现JSONP接口的步骤
  console.log(req.query);
  // 1.获取客户端发送过来的回调函数的名字
  const funcname = req.query.callback;
  // 2.得到要通过JSONP形式发送给客户端的数据
  const data = { name: "zzy", age: 15 };
  // 3.根据前两步得到数据，拼接出一个函数调用的字符串
  const scriptstr = `${funcname}(${JSON.stringify(data)})`;
  // 4.把上一部拼接得到的字符串，响应给客户端的<script></script>标签解析执行
  res.send(scriptstr);
});
app.use(cors());
//导入路由模块
const router = require("./15_apiRouter");
app.use("/api", router);
//启动服务器
app.listen(7666, () => {
  console.log("启动服务器");
});

/* 
  什么是CORS
  CORS由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否组织前段JS代码跨域获取资源
  浏览器不同的同源安全政策默认会组织网页跨域获取资源，但如果接口服务器配置了CORS相关的HTTP响应头，就可以接触浏览器端的跨域访问限制
  注意事项
  1.cors主要在服务器端进行配置，客户端浏览器无需做任何额外的配置，即可请求开启了CORS的接口
  2.cors在浏览器中右兼容性,只有支持XMLHttpRequest Level2的浏览器，才能正常访问开启CORS的服务接口(例如:IE10+,Chrome4+,FireFox3.5+)
*/
