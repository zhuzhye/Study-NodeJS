const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const userRouter = new Router({ prefix: "/user" });
userRouter.get("/:id", (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.request.query);
  ctx.response.body = "hello word";
});
// app.use((ctx, next) => {
//   console.log(ctx.request.url);
//   console.log(ctx.request.query);
//   console.log(ctx.request.params);
//   ctx.response.body = "Hello word";
// });
app.use(userRouter.routes());
app.listen(7666, () => {
  console.log("服务启动");
});
