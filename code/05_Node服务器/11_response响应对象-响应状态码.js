const http = require('http');

// 1.创建一个服务器
const server = http.createServer((request, response) => {
    console.log('有人请求服务器了');
    // response: 响应对象
    //方式一:statusCode
    // response.statusCode = 403;
    //方式二:sethead 响应头
    // response.writeHead(404);

    //方式三:响应头和响应状态码一起设置

    // response.writeHead : 同时写入header和statusCode
    // response.setHeader : 一次写入一个头部信息

    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    // response.setHeader('name', 'lyh');

    // response.writeHead(403, {
    //     'Content-Type': 'text/html;charset=utf-8',
    //     'name': 'lyh'
    // });


    response.end('你好啊,我是Node服务器');
});

//2.开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(8000, () => {
    console.log('服务器启动成功了');
});