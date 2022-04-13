// npm i koa-bodyparser json和urlencoded解析
// npm i koa-multer form-data解析
const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const LoginRouter = new Router({ prefix: "/login" });
const multer = require("koa-multer");
const upload = multer();
//解析json和urlencoded
app.use(bodyparser());
//formdata参数解析
LoginRouter.post("/", (ctx, next) => {
  console.log(ctx.req.body);
  ctx.response.body = "哈哈";
});
app.use(LoginRouter.routes());
app.use((ctx, next) => {
  console.log(ctx.request.body);
  ctx.response.body = ctx.request.body;
});
app.listen(7666, () => {
  console.log("服务器已启动");
});
