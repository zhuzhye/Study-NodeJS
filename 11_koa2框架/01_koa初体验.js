const Koa = require("koa");
const app = new Koa();
app.use((ctx, next) => {
  console.log("中间件被执行");
  ctx.response.body = "hello word";
  // 执行下一个中间件
  next();
});
app.listen(7666, () => {
  console.log("服务已启动");
});
