const koa = require('koa');
const koaRouter = require('koa-router');

//创建app对象
const app = new koa();

//注册路由对象
const userRouter = new koaRouter({ prefix: '/users' });

userRouter.get('/', (ctx, next) => {
    // ctx.body = '用户列表';
    const isAuth = false;

    if (isAuth) {
        ctx.body = {
            code: 0,
            data: [
                { name: 'tom', age: 20 },
                { name: 'jerry', age: 18 }
            ]
        };
    } else {
        // ctx.body = '用户未登录';
        // ctx.status = 401;
        // ctx.throw(401, '用户未登录');
        ctx.app.emit('error', -1001, ctx);
    }



});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());


// 比如这里 是个 独立的文件  error-handle.js
app.on('error', (code, ctx) => {
    const errCode = code
    let message = '';
    switch (errCode) {
        case -1001:
            message = '用户未登录';
            break;
        default:
            message = '未知错误';
            break;
    }
    ctx.body = {
        code: errCode,
        message: message
    }

});


//启动服务
app.listen(3000, () => {
    console.log('服务器启动成功~');
});