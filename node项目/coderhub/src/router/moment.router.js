const Router = require("koa-router");
const momentRouter = new Router({ prefix: "/moment" });
const { verifyAuth, verfiyPermission } = require("../middleware/auth.middleware");
const { create, detail, list, update, remove } = require("../controller/moment.controller");
momentRouter.post("/", verifyAuth, create);
momentRouter.get("/", list);
momentRouter.get("/:momentId", detail);
momentRouter.patch("/:momentId", verifyAuth, verfiyPermission, update);
momentRouter.delete("/:momentId", verifyAuth, verfiyPermission, remove);
module.exports = momentRouter;
