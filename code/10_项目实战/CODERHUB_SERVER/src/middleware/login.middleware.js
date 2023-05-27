const service = require('../service/user.service');
const jwt = require('jsonwebtoken');
const { NAME_OR_PASSWORD_IS_REQUIRED, USER_DOES_NOT_EXISTS, PASSWORD_IS_INCORRECT, UNAUTHORIZED } = require("../config/error");
const md5password = require('../utils/md5-password');
const { JsonWebTokenError } = require('jsonwebtoken');
const { PUBLICKEY } = require('../config/screct');

const verifyLogin = async (ctx, next) => {
    const { name, password } = ctx.request.body;

    //1.判断用户名和密码是否为空
    if (!name || !password) {
        return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
    }

    //2.判断用户是否存在（用户不存在）
    const values = await service.getUserByName(name);
    const user = values[0];
    if (!user) {
        return ctx.app.emit('error', USER_DOES_NOT_EXISTS, ctx);
    }

    //3.判断密码是否和数据库中的密码一致（加密）
    if (md5password(password) !== user.password) {
        return ctx.app.emit('error', PASSWORD_IS_INCORRECT, ctx);
    }

    //4.将用户信息挂载到ctx上
    ctx.user = user;

    next();

}

//验证权限
const verifyAuth = async (ctx, next) => {
    //1.获取token
    const authorization = ctx.header.authorization;
    if (!authorization) {
        ctx.app.emit('error', UNAUTHORIZED, ctx);
        return;
    }
    const token = authorization.replace('Bearer ', '');
    console.log(token);

    //2.验证token
    try {
        //获取token中的信息
        const result = jwt.verify(token, PUBLICKEY, {
            algorithms: ['RS256']
        });

        console.log(result);

        //将用户信息挂载到ctx上
        ctx.user = result;

        //执行下一步
        await next();

    } catch (error) {
        console.log(error);
        ctx.app.emit('error', UNAUTHORIZED, ctx);
    }

}

module.exports = {
    verifyLogin,
    verifyAuth
}