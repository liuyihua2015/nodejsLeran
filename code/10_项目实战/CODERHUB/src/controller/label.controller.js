const labelService = require("../service/label.service");

class lableController {

    //create label
    async create(ctx) {
        //1.获取数据
        const { name } = ctx.request.body;
        console.log(name);
        //2.将数据插入到数据库中
        const result = await labelService.create(name);

        // 3.返回数据
        ctx.body = {
            code: 0,
            message: '创建标签成功',
            data: result
        }
    }

}

module.exports = new lableController();