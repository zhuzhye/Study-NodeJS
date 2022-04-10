const Koa = require("koa");
const app = new Koa();
// use注册中间件
app.use((ctx, next) => {
  if (ctx.request.url === "/login") {
    if (ctx.request.method === "GET") {
      console.log("中间件被执行");
      ctx.response.body = "Login sucess";
    } else {
      ctx.response.body = "hello word";
    }
  }
  // 执行下一个中间件
});
// 没有提供下面注册方式
// methods方式   app.get()
// path方式      app.use('/home',(ctx,next)=>{})
// 连续调用use    app.use((ctx,next)=>{},(ctx,next)=>{})
app.listen(7666, () => {
  console.log("服务已启动");
});
