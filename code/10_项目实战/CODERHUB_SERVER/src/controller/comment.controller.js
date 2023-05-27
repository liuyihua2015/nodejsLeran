const { PARAMETER_IS_INCOMPLETE } = require("../config/error");
const commentService = require("../service/comment.service");

class commentController {
    async create(ctx) {
        //获取评论的内容
        const { momentId, content } = ctx.request.body;
        //获取用户id
        const { id } = ctx.user;

        console.log(momentId, content, id);

        //没有参数返回错误信息
        if (!momentId || !content) {
            return ctx.app.emit('error', PARAMETER_IS_INCOMPLETE, ctx);
        }

        //将评论插入到数据库
        const result = await commentService.create(momentId, content, id);

        //返回数据
        ctx.body = {
            code: 0,
            message: '评论成功',
            result: result
        }
    }
    //回复评论
    async reply(ctx) {
        //获取评论的内容
        const { momentId, content } = ctx.request.body;
        //获取用户id
        const { id } = ctx.user;
        //获取评论id
        const { commentId } = ctx.params;

        console.log(momentId, content, id, commentId);

        //没有参数返回错误信息
        if (!momentId || !content || !commentId) {
            return ctx.app.emit('error', PARAMETER_IS_INCOMPLETE, ctx);
        }
        //将评论插入到数据库
        const result = await commentService.reply(momentId, content, id, commentId);
       
        //返回数据
        ctx.body = {
            code: 0,
            message: '回复评论成功',
            result: result
        }


    }
}
module.exports = new commentController();