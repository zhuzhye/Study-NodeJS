const Koa = require("koa");
const app = new Koa();
const axios = require("axios");
const middleware1 = async (ctx, next) => {
  ctx.message = "aaa";
  await next();
  ctx.body = ctx.message;
  console.log("你好1");
};
const middleware2 = async (ctx, next) => {
  ctx.message += "bbb";
  await next();
  console.log("zzy1");
};
const middleware3 = async (ctx, next) => {
  await axios.get("http://123.207.32.32:9001/lyric?id=167876").then((result) => {
    ctx.message += result.data.lrc.lyric;
  });
  console.log("zzy");
};
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.listen(7666, () => {
  console.log("已启动Koa服务器 地址为 http://127.0.0.1:7666");
});
