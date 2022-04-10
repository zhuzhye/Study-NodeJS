const Router = require("koa-router");
const router = new Router({ prefix: "/user" });
router.get("/", (ctx, next) => {
  ctx.response.body = "User list ";
});
router.put("/", (ctx, next) => {
  ctx.response.body = "Put request";
});
module.exports = router;
