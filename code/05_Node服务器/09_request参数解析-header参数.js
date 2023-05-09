const http = require('http');
const url = require('url');
const qs = require('querystring');

// 1.创建一个服务器
const server = http.createServer((request, response) => {
    console.log('有人请求服务器了');
    response.end('查看header参数~');
    console.log(request.headers);
    // authorization
    console.log(request.headers.authorization);
    //打印参数
    console.log(request.url);

    request.on('data', (data) => {
        console.log(data.toString());
    });


});

//2.开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(8000, () => {
    console.log('服务器启动成功了');
});