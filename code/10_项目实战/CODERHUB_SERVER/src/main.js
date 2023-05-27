//1.引入app
const app = require('./app');
const { SERVER_PORT } = require('./config/server');
require('./utils/handle-error');
//2.启动服务
app.listen(SERVER_PORT, () => {
    console.log('服务器启动成功~');
});  