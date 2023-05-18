const { text } = require('express');
const koa = require('koa');

//创建app对象
const app = new koa();

app.use((ctx, next) => {
    console.log('中间件1执行了~');
    ctx.msg = 'hello';
    next();
    console.log('中间件1执行结束~');
    //返回结果
    ctx.body = ctx.msg;
});
app.use((ctx, next) => {
    console.log('中间件2执行了~');
    ctx.msg += ' world';
    next();
    console.log('中间件2执行结束~');
});
app.use((ctx, next) => {
    console.log('中间件3执行了~');
    ctx.msg += '!';
    next();
    console.log('中间件3执行结束~');
});
//执行同步中间件过程 洋葱模型 1 2 3 3 2 1
//执行异步中间件过程 1 2 3 1 2 3

//启动服务
app.listen(8000, () => {
    console.log('服务器启动成功~');
});