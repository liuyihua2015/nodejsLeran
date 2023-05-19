const koa = require('koa');
const koaRouter = require('koa-router');
const jwt = require('jsonwebtoken');

//创建app对象
const app = new koa();

//注册路由对象
const userRouter = new koaRouter({prefix: '/users'});

//获取私钥和公钥
const fs = require('fs');
const path = require('path');
const privateKey = fs.readFileSync(path.join(__dirname, './keys/private.key'));
const publicKey = fs.readFileSync(path.join(__dirname, './keys/public.key'));

userRouter.get('/login', (ctx, next) => {
    
    //1.获取用户信息
    const payload = { id:111, name: 'jack' };
    const token = jwt.sign(payload, privateKey, {algorithm: 'RS256', expiresIn: '1h'});
    console.log(token);
    
    ctx.body = {
        status: 200,
        msg: '请求成功~',
        data: token
    }
    


});

userRouter.get('/list', (ctx, next) => {
    //获取请求头中的token
    const authorization = ctx.header.authorization;
    const token = authorization.replace('Bearer ', '');
    console.log(token);

    //验证token
    try {
        const res = jwt.verify(token, publicKey, {algorithms: ['RS256']});
        console.log(res);
        ctx.body = {
            status: 200,
            msg: '请求成功~',
            data: res
        }
    } catch (error) {
        ctx.body = {
            status: 401,
            msg: 'token验证失败~',
            data: error
        }
    }
});



app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

//启动服务
app.listen(8000, () => {
    console.log('服务器启动成功~');
});