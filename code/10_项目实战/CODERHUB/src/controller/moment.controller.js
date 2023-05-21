const momentService = require("../service/moment.service");

class momentController {

    //发表动态
    async create(ctx, next) {
        //1.获取数据(user_id, content)
        const userId = ctx.user.id;
        const content = ctx.request.body.content;

        //2.将数据插入到数据库中
        const result = await momentService.create(userId, content);

        //3.返回数据

        ctx.body = {
            code: 0,
            message: '发表动态成功',
            data: result
        }
    }
    //获取动态列表
    async list(ctx, next) {
        //1.获取数据(offset/size)
        const { offset, size} = ctx.query;
        console.log(offset, size);
        // offset/size 没值 设置默认值
        

        //2.查询列表
        const result = await momentService.getMomentList(offset, size);

        //3.返回结果

        ctx.body = {
            code: 0,
            message: '获取动态列表成功',
            data: result
        }
    }

    //获取动态详情
    async detail(ctx, next) {
        //1.获取数据(momentId)
        const { momentId } = ctx.params;

        //2,根据id查询数据
        const result = await momentService.getMomentById(momentId);

        //3.返回结果
        ctx.body = {
            code:0,
            message: '获取动态详情成功',
            data: result
        }
    }

    //更新动态
    async update(ctx, next) {
        console.log('更新动态');
        //1.获取需要修改的动态id
        const { momentId } = ctx.params;
        //2.获取需要修改的内容
        const { content } = ctx.request.body;

        //3.修改内容
        const result = await momentService.update(content, momentId);

        //4.返回结果
        ctx.body = {
            code: 0,
            message: '更新动态成功',
            data: result
        }
    }

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