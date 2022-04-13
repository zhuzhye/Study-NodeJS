const Koa = require("koa");
const app = new Koa();
app.use((ctx, next) => {
  //设置响应状态改
  ctx.status = 200;
  //响应结果
  // ctx.response.body = {
  //   name: "yy",
  //   age: 18,
  //   avatar_url: "http://abc.png",
  // };
  ctx.body = {
    name: "zzy",
    age: 18,
    avatar_url: "http://abc.png",
  };
});
app.listen(7666, () => {
  console.log("服务已启动");
});
