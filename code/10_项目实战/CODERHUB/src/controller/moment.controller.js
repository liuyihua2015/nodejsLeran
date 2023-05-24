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
        const { offset, size } = ctx.query;
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

        //资源不存在
        if (!result) {
            return ctx.app.emit('error', PARAMETER_IS_INCOMPLETE, ctx)
        }

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
    //删除动态
    async remove(ctx, next) {
        //1.获取动态id
        const { momentId } = ctx.params;
        //2.删除动态
        const result = await momentService.remove(momentId);
        //3.返回结果
        ctx.body = {
            code: 0,
            message: '删除动态成功',
            data: result
        }
    }

    async addLabels(ctx, next) {
        console.log('添加标签');
        //1.获取标签和动态id
        const { labels } = ctx.request.body;
        const { momentId } = ctx.params;
        
        console.log(labels);
        console.log(momentId);

        // //labels参数判断
        // if (labels === undefined || labels.length === 0) {
        //     return ctx.app.emit('error', RESOURCE_DOES_NOT_EXIST, ctx);
        // }

        //2.添加所有的标签
        // for (let label of labels) {
        //     //2.1判断标签是否已经和动态有关系
        //     const isExist = await momentService.hasLabel(momentId, label.id);
        //     console.log(isExist);
        //     if (!isExist) {
        //         await momentService.addLabel(momentId, label.id);
        //     }
        // }
        //3.返回结果
        ctx.body = {
            code: 0,
            message: '给动态添加标签成功'
        }
    }

}

module.exports = new momentController()