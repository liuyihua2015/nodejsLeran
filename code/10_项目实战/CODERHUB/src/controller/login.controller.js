const jwt = require('jsonwebtoken');
const { PRIVATEKEY } = require('../config/screct');

class loginController {
    sign(ctx, next) {
        //1.获取用户id 和 name
        const { id, name } = ctx.user;

        //2.生成token
        const token = jwt.sign({ id, name }, PRIVATEKEY, {
            expiresIn: 60 * 60 * 24,
            algorithm: 'RS256'
        });

        //3.返回信息
        ctx.body = { code: 0, data: { token, id, name } }

    }

    //test
    test(ctx, next) {
        ctx.body = 'success';
    }
}

module.exports = new loginController();