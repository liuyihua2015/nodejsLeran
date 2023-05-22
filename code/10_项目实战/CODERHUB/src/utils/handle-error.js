const app = require('../app');
const errorUtil = require('../config/error');

app.on('error', (err, ctx) => {
    let code = 0;
    let message = '';
    switch (err) {
        case errorUtil.NAME_OR_PASSWORD_IS_REQUIRED:
            code = -1001;
            message = '用户名或者密码不能为空~';
            break;
        case errorUtil.NAME_ALREADY_EXISTS:
            code = -1002;
            message = '用户名已经被注册~';
            break;
        case errorUtil.USER_DOES_NOT_EXISTS:
            code = -1003;
            message = '用户不存在~';
            break;
        case errorUtil.PASSWORD_IS_INCORRECT:
            code = -1004;
            message = '密码错误~';
            break;
        case errorUtil.UNAUTHORIZED:
            code = -1005;
            message = '未授权,无效token或者token已过期~';
            break;
        case errorUtil.NO_PERMISSION:
            code = -1006;
            message = '您不具备操作的权限~';
            break;
            case errorUtil.PARAMETER_IS_INCOMPLETE:
            code = -1007;
            message = '参数不完整~';
            break;
        default:
            code = -999;
            message = '未知错误~';
            break;
    }
    ctx.body = {
        code,
        message
    }
})