const koaRouter = require('@koa/router');
const { verifyAuth } = require('../middleware/login.middleware');
const { create } = require('../controller/moment.controller');

const momentRouter = new koaRouter({ prefix: '/moment' });

momentRouter.post('/', verifyAuth, create);


module.exports = momentRouter;