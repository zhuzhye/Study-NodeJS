const Koa = require("koa");
const app = new Koa();
function middleware1(ctx, next) {
  ctx.message = "aaa";
  next();
  ctx.body = ctx.message;
}
function middleware2(ctx, next) {
  ctx.message += "bbb";
  next();
}
function middleware3(ctx, next) {
  ctx.message += "ccc";
  next();
}
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.listen(7666, () => {
  console.log("已启动Koa服务器 地址为 http://127.0.0.1:7666");
});
