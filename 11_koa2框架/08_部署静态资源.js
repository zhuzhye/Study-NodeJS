const Koa = require("koa");
const app = new Koa();
const path = require("path");
const Mount = require("koa-mount");
const StaticAessets = require("koa-static");
// app.use(StaticAessets("./clock"));
app.use(StaticAessets("./clock"), { defer: true });
app.use(Mount("/clock", StaticAessets(path.join(__dirname, "./clock"))));
// npm i koa-static
// npm i koa-mount 虚拟路径
app.listen(7666, () => {
  console.log("服务器启动");
});
