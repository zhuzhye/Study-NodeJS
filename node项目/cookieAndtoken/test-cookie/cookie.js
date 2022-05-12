const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const testRouter = new Router();
testRouter.get("/test", (ctx, next) => {
  ctx.body = "test";
  ctx.cookies.set("name", "lilei", {
    maxAge: 10000,
  });
});
testRouter.get("/demo", (ctx, next) => {
  // 读取cookie
  const value = ctx.cookies.get("name");
  ctx.body = value;
});
app.use(testRouter.routes());
app.use(testRouter.allowedMethods());
app.listen("5544", () => {
  console.log("服务启动");
});
