const Koa = require("koa");
const app = new Koa();
app.use((ctx, next) => {
  const isLogin = false;
  if (!isLogin) {
    ctx.app.emit("error", new Error("用户登录失败"), ctx);
  }
});
app.on("error", (err, ctx) => {
  ctx.status = 401;
  ctx.body = "你还没有登录";
});
app.listen(7666, () => {
  console.log("服务器启动");
});
