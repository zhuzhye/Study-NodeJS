const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const jwt = require("jsonwebtoken");
const testRouter = new Router();
//npm i jsonwebtoken
const SERCET_KEY = "zzy123";
testRouter.get("/test", (ctx, next) => {
  const user = { id: 110, name: "why" };
  const token = jwt.sign(user, SERCET_KEY, {
    expiresIn: 10 * 10000,
  });
  ctx.body = token;
});
testRouter.get("/demo", (ctx, next) => {
  authorization = ctx.headers.authorization;
  console.log(authorization);
  const token = authorization.replace("Bearer ", "");
  console.log(SERCET_KEY);
  try {
    const result = jwt.verify(token, SERCET_KEY);
    ctx.body = result;
  } catch (err) {
    console.log(err);
    ctx.body = "token无效";
  }
});
app.use(testRouter.routes());
app.use(testRouter.allowedMethods());
app.listen("5544", () => {
  console.log("服务启动");
});
