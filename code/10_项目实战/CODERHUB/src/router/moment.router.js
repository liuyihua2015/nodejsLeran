const koaRouter = require('@koa/router');
const { verifyAuth } = require('../middleware/login.middleware');
const { create, list } = require('../controller/moment.controller');

const momentRouter = new koaRouter({ prefix: '/moment' });

//发表动态
momentRouter.post('/', verifyAuth, create);

//获取动态列表
momentRouter.get('/', list);


module.exports = momentRouter;