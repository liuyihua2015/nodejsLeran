const http = require('http');

// 1.创建一个服务器
const server = http.createServer((request, response) => {
const url = request.url;
    if (url === '/index.html') {
        response.end('index.html');
    } else if (url === '/login.html') {
        if (request.method === 'POST') {
            response.end('登录成功');
        }else{
            response.end('不支持的请求方式,请使用POST请求');
        }
    } else if (url === '/list.html') {
        response.end('list.html');
    } else {
        response.end('404 Not Found');
    }
});

//2.开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(8000, () => {
  console.log('服务器启动成功了');
});
