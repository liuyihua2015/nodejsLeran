const fileService = require("../service/file.service");
const userService = require("../service/user.service");

class fileController {

    //create a new file
    async create(ctx, next) {

        //1.获取图像信息
        const { filename, mimetype, size } = ctx.file;
        const { id } = ctx.user;
        console.log(filename, mimetype, size, id);

        //2.将图像信息数据保存到数据库中
        const result = await fileService.createAvatar(filename, mimetype, size, id);

        //3.将头像的地址信息,存储到user表中
        const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/users/avatar/${id}`;
        console.log(avatarUrl);
        const result2 = await userService.updateAvatarUrlById(avatarUrl, id);

        //4.返回结果
        ctx.body = {
            code: 0,
            message: '上传头像成功~',
            result: avatarUrl
        }

    }

}

module.exports = new fileController();