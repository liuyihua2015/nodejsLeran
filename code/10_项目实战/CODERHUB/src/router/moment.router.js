const koaRouter = require('@koa/router');
const { verifyAuth } = require('../middleware/login.middleware');
const { create, list, detail, update, remove } = require('../controller/moment.controller');
const { verifyMomentPermission } = require('../middleware/permission.mideleware');

const momentRouter = new koaRouter({ prefix: '/moment' });

//发表动态
momentRouter.post('/', verifyAuth, create);

//获取动态列表
momentRouter.get('/', list);

//获取动态详情
momentRouter.get('/:momentId', detail);

//删除动态
momentRouter.delete('/:momentId', verifyAuth, verifyMomentPermission, remove);

//更新动态
momentRouter.patch('/:momentId', verifyAuth, verifyMomentPermission, update);


module.exports = momentRouter;