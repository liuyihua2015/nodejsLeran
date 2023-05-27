const koaRouter = require('@koa/router');
const multer = require('@koa/multer');
const { verifyAuth } = require('../middleware/login.middleware');
const { create } = require('../controller/file.controller');

const fileRouter = new koaRouter({ prefix: '/file' });

//定义上传中间件
const uploadAvatar = multer({
    dest: './uploads/avatar'
});


//上传头像
fileRouter.post('/avatar', verifyAuth, uploadAvatar.single('avatar'), create);

module.exports = fileRouter;