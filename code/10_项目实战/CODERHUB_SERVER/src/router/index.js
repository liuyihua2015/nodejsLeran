//动态获取router.js文件,自动注册
const fs = require('fs');
function registerRoutes() {
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.js') return;
        const router = require(`./${file}`);
        this.use(router.routes());
        this.use(router.allowedMethods());
    })
}
module.exports = registerRoutes;