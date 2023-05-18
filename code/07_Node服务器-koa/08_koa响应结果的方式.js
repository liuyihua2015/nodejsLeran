const fs = require('fs');
const koa = require('koa');
const koaRouter = require('koa-router');

//创建app对象
const app = new koa();

//注册路由对象
const userRouter = new koaRouter({ prefix: '/users' });

userRouter.get('/', (ctx, next) => {
    //1.body响应方式类似是String
    // ctx.body = '用户列表';
    // 2.body的类型是Buffer
    // ctx.body = Buffer.from('用户列表');
    //3.body的类型是stream
    // const readStream = fs.createReadStream('./IMG_0505.jpeg');
    // ctx.type = 'image/jpeg'
    // ctx.body = readStream

    //4.body的类型是数据对象(Array, Object)
    ctx.body = {
        code: 0,
        data: [
            { name: 'tom', age: 20 },
            { name: 'jerry', age: 18 }
        ]
    };

    //5.body的类型是NULL 自动设置状态码为204
    // ctx.body = null;


});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

//启动服务
app.listen(6000, () => {
    console.log('服务器启动成功~');
});