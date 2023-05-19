//1.导入koa
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const registerRoutes = require('../router');
// const userRouter = require('../router/user.router');
// const loginRouter = require('../router/login.router');

//创建app对象
const app = new koa();

//注册中间件
app.use(bodyParser());

registerRoutes.call(app);

module.exports = app;