const koaRouter = require('@koa/router');
const { verifyAuth } = require('../middleware/login.middleware');
const { create, list, detail } = require('../controller/moment.controller');

const momentRouter = new koaRouter({ prefix: '/moment' });

//发表动态
momentRouter.post('/', verifyAuth, create);

//获取动态列表
momentRouter.get('/', list);

//获取动态详情
momentRouter.get('/:momentId', detail);


module.exports = momentRouter;