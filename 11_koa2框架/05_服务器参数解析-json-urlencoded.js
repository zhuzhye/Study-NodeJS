// npm i koa-bodyparser json和urlencoded解析
// npm i koa-multer form-data解析
const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const LoginRouter = new Router({ prefix: "/login" });
const multer = require("koa-multer");
const uplpoad = multer();
const bodyparser = require("koa-bodyparser");

app.use(bodyparser());
app.use((ctx, next) => {
  console.log(ctx.request.body);
  ctx.response.body = ctx.request.body;
});
app.listen(7666, () => {
  console.log("服务器已启动");
});
