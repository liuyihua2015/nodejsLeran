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

    //Content-Type 所有类型 很多
    // response.setHeader('Content-Type', 'text/html;charset=utf-8');
    // response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    // response.setHeader('Content-Type', 'text/css;charset=utf-8');
    // response.setHeader('Content-Type', 'text/javascript;charset=utf-8');
    // response.setHeader('Content-Type', 'application/json;charset=utf-8');
    // response.setHeader('Content-Type', 'image/jpeg;charset=utf-8');
    // response.setHeader('Content-Type', 'image/png;charset=utf-8');
    // response.setHeader('Content-Type', 'image/gif;charset=utf-8');
    // response.setHeader('Content-Type', 'audio/mpeg;charset=utf-8');
    // response.setHeader('Content-Type', 'video/mp4;charset=utf-8');
    // response.setHeader('Content-Type', 'application/pdf;charset=utf-8');
    // response.setHeader('Content-Type', 'application/msword;charset=utf-8');
    // response.setHeader('Content-Type', 'application/vnd.ms-excel;charset=utf-8');
    // response.setHeader('Content-Type', 'application/vnd.ms-powerpoint;charset=utf-8');
    // response.setHeader('Content-Type', 'application/x-shockwave-flash;charset=utf-8');
    // response.setHeader('Content-Type', 'application/octet-stream;charset=utf-8');
    // response.setHeader('Content-Type', 'application/octet-stream;charset=utf-8');
    // response.setHeader('Content-Type', 'multipart/form-data;charset=utf-8');
    // response.setHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    // response.setHeader('Content-Type', 'text/xml;charset=utf-8');
    // response.setHeader('Content-Type', 'application/xml;charset=utf-8');
    // response.setHeader('Content-Type', 'application/zip;charset=utf-8');
    // response.setHeader('Content-Type', 'application/x-rar-compressed;charset=utf-8');
    // response.setHeader('Content-Type', 'application/x-gzip;charset=utf-8');
    // response.setHeader('Content-Type', 'application/x-7z-compressed;charset=utf-8');
    // response.setHeader('Content-Type', 'application/x-iso9660-image;charset=utf-8');
    // response.setHeader('Content-Type', 'application/x-java-archive-diff;charset=utf-8');
    // response.setHeader('Content-Type', 'application/x-java-archive;charset=utf-8');
    // response.setHeader('Content-Type', 'application/x-java-jnlp-file;charset=utf-8');
    // response.setHeader('Content-Type', 'application/x-makeself;charset=utf-8');



    response.setHeader('Content-Type', 'application/json;charset=utf-8');
    // response.setHeader('name', 'lyh');

    // response.writeHead(403, {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     'name': 'lyh'
    // });

    // response.end('{"name":"你好啊,我是Node服务器","age":18}');

    const list = [
        { name: 'zs', age: 18 },
        { name: 'ls', age: 19 },
        { name: 'ww', age: 20 },
    ]
    response.end(JSON.stringify(list));
    
});

//2.开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(8000, () => {
    console.log('服务器启动成功了');
});