const app = require('../app');
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_ALREADY_EXISTS } = require('../config/error');

app.on('error', (err, ctx) => {
    let code = 0;
    let message = '';
    switch (err) {
        case NAME_OR_PASSWORD_IS_REQUIRED:
            code = -1001;
            message = '用户名或者密码不能为空~';
            break;
        case NAME_ALREADY_EXISTS:
            code = -1002;
            message = '用户名已经被注册~';
            break;
        case USER_DOES_NOT_EXISTS:
            code = -1003;
            message = '用户不存在~';
            break;
        case PASSWORD_IS_INCORRECT:
            code = -1004;
            message = '密码错误~';
            break;
        case UNAUTHORIZED:
            code = -1005;
            message = '未授权~';
            break;
        case NO - PERMISSION:
            code = -1006;
            message = '您不具备操作的权限~';
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