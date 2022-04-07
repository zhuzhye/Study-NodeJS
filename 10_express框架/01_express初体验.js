const express = require("express");
// express其实是一个函数，createApplication
// 返回app
const app = express();

// 监听默认请求
app.get("/", (req, res, next) => {
  res.end("hello express");
});
app.post("/", (req, res, next) => {
  res.end("Post hello");
});
//开启监听
app.listen(9999, () => {
  console.log("开启服务器");
});

// Express是一个路由和中间件的web框架，它本身的功能是非常少de

// 中间件是什么？
// 中间件的本质是传递给express的一个回调函数
// 这个回调函数接受三个参数
// 请求对象 request
// 响应对象 response
// next    在express中定义的用于执行下一个中间件的函数

// 中间件可以执行哪些任务
// 1.执行任何代码
// 2.更改请求(request)和响应(response)对象
// 3.结束请求-响应周期(返回数据)
// 4.调用栈中的下一个中间件

// 如果中间件功能没有结束请求-响应周期，则必须调用next将控制权传递给下一个中间件，否则请求将被挂起
