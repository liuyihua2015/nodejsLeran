const koaRouter = require('@koa/router');
const { verifyAuth } = require('../middleware/login.middleware');
const { create, list, detail, update, remove, addLabels } = require('../controller/moment.controller');
const { verifyMomentPermission } = require('../middleware/permission.mideleware');
const { verifyLabelExists } = require('../middleware/label.middleware');

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

//给动态添加标签
momentRouter.post('/:momentId/labels', verifyAuth, verifyMomentPermission, verifyLabelExists, addLabels);


module.exports = momentRouter;