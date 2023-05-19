const koaRouter = require('@koa/router');
const { sign, test } = require('../controller/login.controller');
const { verifyLogin, verifyAuth } = require('../middleware/login.middleware');

const loginRouter = new koaRouter({ prefix: '/login' });

loginRouter.post('/', verifyLogin, sign)

//test
loginRouter.get('/test', verifyAuth, test);

module.exports = loginRouter;