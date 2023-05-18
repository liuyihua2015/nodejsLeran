const service = require('../service/user.service');

class userController {
    async create(ctx, next) {
        //1.获取请求参数
        const user = ctx.request.body;
        console.log(user);

        //3.将user信息保存到数据库中
        const [result] = await service.create(user);

        //返回响应
        console.log(result);

        ctx.body = {
            message: '注册成功~',
            data: result
        }
    }


}

module.exports = new userController();