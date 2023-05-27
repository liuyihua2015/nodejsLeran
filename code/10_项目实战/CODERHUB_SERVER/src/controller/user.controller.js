const fileService = require('../service/file.service');
const service = require('../service/user.service');
const fs = require('fs');
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

    //查询用户头像
    async avatarInfo(ctx, next) {
    
        //.1获取用户id
        const { userId } = ctx.params;

        //2.查询用户头像信息
        const result = await fileService.getAvatarByUserId(userId);

        console.log(result);

        //3.返回用户头像信息
        const { filename, mimetype} = result;
        ctx.type = mimetype;
        ctx.body = fs.createReadStream(`./uploads/avatar/${filename}`);

    }


}

module.exports = new userController();