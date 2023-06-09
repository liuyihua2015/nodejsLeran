const koaRouter = require('koa-router');
const userController = require('../controller/user.controller');
const { verifyUser, handlePassword } = require('../middleware/user.middleware');
//注册路由对象
const userRouter = new koaRouter({ prefix: '/users' });

//2.定义路由中映射
//2.1. 用户注册接口
userRouter.post('/',verifyUser,handlePassword,userController.create);

//查看用户头像
userRouter.get('/avatar/:userId',userController.avatarInfo);

module.exports = userRouter;