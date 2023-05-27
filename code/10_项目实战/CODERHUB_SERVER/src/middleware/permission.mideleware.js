const { NO_PERMISSION } = require('../config/error');
const { verifyPermission } = require('../service/permission.service');

const verifyMomentPermission = async (ctx, next) => {
    //1.获取参数
    console.log(ctx.params);

    const [resourceKey] = Object.keys(ctx.params);
    console.log(resourceKey);

    const tableName = resourceKey.replace('Id', '');
    console.log(tableName);
    const resourceId = ctx.params[resourceKey];
    console.log(resourceId);

    console.log(ctx.user);
    console.log('验证权限的中间件执行了');

    const { id } = ctx.user;
    console.log(tableName, resourceId, id);

    //2.查询是否具备权限
    try {
        const isPermission = await verifyPermission(tableName, resourceId, id);
        if (!isPermission) {
            return ctx.app.emit('error', NO_PERMISSION, ctx);
        }
        await next();
    } catch (error) {
        return ctx.app.emit('error', NO_PERMISSION, ctx);
    }

}

module.exports = {
    verifyMomentPermission
}