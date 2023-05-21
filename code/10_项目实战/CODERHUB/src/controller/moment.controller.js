const momentService = require("../service/moment.service");

class momentController {

    async create(ctx, next) {
        //1.获取数据(user_id, content)
        const userId = ctx.user.id;
        const content = ctx.request.body.content;

        //2.将数据插入到数据库中
        const result = await momentService.create(userId, content);

        //3.返回数据

        ctx.body = {
            code: 0,
            data: result
        }
    }

    // async detail(ctx, next) {
    //     ctx.body = '获取动态详情成功'
    // }

    // async list(ctx, next) {
    //     ctx.body = '获取动态列表成功'
    // }

    // async update(ctx, next) {
    //     ctx.body = '更新动态成功'
    // }

    // async remove(ctx, next) {
    //     ctx.body = '删除动态成功'
    // }

    // async addLabels(ctx, next) {
    //     ctx.body = '给动态添加标签成功'
    // }

    // async fileInfo(ctx, next) {
    //     ctx.body = '获取动态配图成功'
    // }

}

module.exports = new momentController()