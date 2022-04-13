const Koa = require("koa");
const Router = require("koa-router");
const multer = require("koa-multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, res, cb) => {
    cb(null, Date.now() + path.extname(res.originalname));
  },
});
const upload = multer({
  // dest: "./uploads/",
  storage,
});
const app = new Koa();

const uploadRouter = new Router({ prefix: "/upload" });
uploadRouter.post("/avatar", upload.single("avatar"), (ctx, next) => {
  console.log(ctx.req.file);
  // console.log(ctx.req);
  ctx.response.body = "上传成功";
});
app.use(uploadRouter.routes());
app.listen(7666, () => {
  console.log("服务启动");
});
