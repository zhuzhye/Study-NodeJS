const Koa = require("koa");
const Router = require("koa-router");
const Session = require("koa-session");
const app = new Koa();
const testRouter = new Router();
// npm i koa-session
// 创建session配置
const session = Session(
  {
    key: "sessionid",
    maxAge: 5 * 10000,
    signed: true, //是否使用加密签名
  },
  app
);
app.keys = ["aaaaa"];
app.use(session);
testRouter.get("/test", (ctx, next) => {
  const id = 110;
  const name = "coderwhy";
  ctx.session.user = {
    id,
    name,
  };
  ctx.body = "test";
});
testRouter.get("/demo", (ctx, next) => {
  ctx.body = "demo";
  console.log(ctx.session.user);
});
app.use(testRouter.routes());
app.use(testRouter.allowedMethods());
app.listen("5544", () => {
  console.log("服务启动");
});
