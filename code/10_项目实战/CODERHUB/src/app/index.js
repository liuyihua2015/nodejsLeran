//1.导入koa
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const userRouter = require('../router/user.router');

//创建app对象
const app = new koa();

//注册中间件
app.use(bodyParser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

module.exports = app;