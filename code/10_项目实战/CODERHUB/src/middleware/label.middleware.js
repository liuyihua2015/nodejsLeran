const labelService = require("../service/label.service");
const { PARAMETER_IS_INCOMPLETE } = require("../config/error");

//验证label表中是否存在该标签
const verifyLabelExists = async (ctx, next) => {
    //1.获取标签名
    const { labels } = ctx.request.body;
    if (!labels) {
        return ctx.app.emit('error', PARAMETER_IS_INCOMPLETE, ctx);
    }
    try {
        //2.判断每一个标签在label表中是否存在
        const newLabels = [];
        for (let name of labels) {
            const labelResult = await labelService.getLabelByName(name);
            const label = { name };
            if (!labelResult.length) {
                //创建标签数据
                const result = await labelService.create(name);
                label.id = result.insertId;//=> [{id: 1, name: '标签1'}]
            } else {
                label.id = labelResult[0].id;//=> [{id: 1, name: '标签1'}]
            }
            newLabels.push(label);
        }
        //格式: [{id: 1, name: '标签1'}, {id: 2, name: '标签2'}]
        ctx.labels = newLabels;
        await next();
    } catch (error) {
        return ctx.app.emit('error', NO_PERMISSION, ctx);
    }

}
module.exports = {
    verifyLabelExists
}