const http = require('http');
const url = require('url');
const qs = require('querystring');

// 1.创建一个服务器
const server = http.createServer((request, response) => {
    console.log('有人请求服务器了');

    console.log(request.url);
    //解析url
    const urlStr = request.url;
    const urlInfo = url.parse(urlStr);
    console.log(urlInfo.query, urlInfo.pathname);

    //解析query
    const queryString = urlInfo.query;
    const queryInfo = qs.parse(queryString);
    console.log(queryInfo.name, queryInfo.age,queryInfo.email);

    // response: 响应对象
    response.end('hello world');
});

//2.开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(8000, () => {
    console.log('服务器启动成功了');
});