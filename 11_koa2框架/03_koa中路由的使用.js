const Koa = require("koa");
const app = new Koa();
const UserRouter = require("./router/user");
// express.Router() koa想使用router npm i koa-router
app.use(UserRouter.routes());
//若请求方式不存在则返回 Method Not Allowed 或  Not Implemented
app.use(UserRouter.allowedMethods());
app.listen(7666, () => {
  console.log("服务已启动");
});
