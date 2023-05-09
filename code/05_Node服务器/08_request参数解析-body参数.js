const http = require('http');
const url = require('url');
const qs = require('querystring');

// 1.创建一个服务器
const server = http.createServer((request, response) => {
    console.log('有人请求服务器了');
    const url = request.url;
    if (url === '/index.html') {
        response.end('index.html');
    } else if (url === '/login.html') {
        //获取参数: body参数
        //rqeuest对象:本质是一个readable stream 可读流
        //data事件:当有请求参数的时候,会触发data事件,并且把参数传递进来
        //end事件:当参数传递完成的时候,会触发end事件
        let isLogin = false
        request.on('data', (data) => {
            const postData = data.toString();
            const postInfo = JSON.parse(postData);
            console.log(postInfo.name, postInfo.password);

            if (postInfo.name === 'liuyihua' && postInfo.password === '123456') {
                isLogin = true
            } else {
                isLogin = false
            }

        });
        request.on('end', () => {
            if (isLogin) {
                response.end('登录成功');
            } else {
                response.end('登录失败');
            }
        });
    } else {
        response.end('404 Not Found');
    }

});

//2.开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(8000, () => {
    console.log('服务器启动成功了');
});