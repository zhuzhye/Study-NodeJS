const momentService = require("../serivce/moment.service");
class MomentController {
  async create(ctx, next) {
    // 1.获取数据(user_id,content,图片)

    const userId = ctx.user.id;
    const content = ctx.request.body.content;
    const result = await momentService.create(userId, content);
    ctx.body = result;
  }
  async detail(ctx, next) {
    // 1.获取数据（moemntId）
    const momentId = ctx.params.momentId;
    // 2.根据id去查询这条数据
    const result = await momentService.getMomentById(momentId);
    ctx.body = result;
  }
  async list(ctx, next) {
    // 1.获取数据(page,current)
    const { page, current } = ctx.query;
    console.log(page, current);
    const result = await momentService.getMomentlist(current, page);
    ctx.body = result;
  }
  async update(ctx, next) {
    //获取参数
    const { content } = ctx.request.body;
    const { momentId } = ctx.params;
    //修改内容
    const result = await momentService.update(content, momentId);
    ctx.body = result;
  }
  async remove(ctx, next) {
    //获取参数
    const { momentId } = ctx.params;
    //删除内容
    const result = await momentService.remove(momentId);
    ctx.body = result;
  }
}
module.exports = new MomentController();
