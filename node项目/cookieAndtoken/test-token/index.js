const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const jwt = require("jsonwebtoken");
const testRouter = new Router();
const fs = require("fs");
//项目中的任何地方相对路径都是相对于process.cwd()
const PRIVATE_KEY = fs.readFileSync("./keys/private.key");
const PUBLIC_KEY = fs.readFileSync("./keys/public.key");
//npm i jsonwebtoken
testRouter.get("/test", (ctx, next) => {
  const user = { id: 110, name: "why" };
  const token = jwt.sign(user, PRIVATE_KEY, {
    expiresIn: 10 * 10000,
    algorithm: "RS256",
  });
  ctx.body = token;
});
testRouter.get("/demo", (ctx, next) => {
  authorization = ctx.headers.authorization;
  console.log(authorization);
  const token = authorization.replace("Bearer ", "");
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
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
