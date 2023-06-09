const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_ALREADY_EXISTS } = require('../config/error');
const service = require('../service/user.service');
const md5password = require('../utils/md5-password');

const verifyUser = async (ctx, next) => {
    //1.判断逻辑
    const { name, password } = ctx.request.body;

    //1.1 判断用户名或者密码不能为空
    if (!name || !password) {
        return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx);
    }

    //1.2 判断用户名是否已经被注册
    const values = await service.getUserByName(name);
    if (values.length) {
        return ctx.app.emit('error', NAME_ALREADY_EXISTS, ctx);
    }

    await next();

}

//密码加密
const handlePassword = async (ctx, next) => {
    const { password } = ctx.request.body;
    ctx.request.body.password = md5password(password);
    await next();
}

module.exports = {
    verifyUser,
    handlePassword
}