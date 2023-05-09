const http = require('http');
const fs = require('fs');

// 1.创建一个服务器
const server = http.createServer((request, response) => {
    console.log('有人请求服务器了');
    if (request.url === '/upload') {
        //创建写入流
        const writeStream = fs.createWriteStream('./foo.png', {
            flags: 'a+'
        });

        //客户端传递的数据是表单数(请求体)
        //监听request的data事件
        request.on('data', (chunk) => {
            console.log('有数据传递过来了');
            console.log(chunk);
            writeStream.write(chunk);
        });

        request.on('end', () => {
            console.log('数据接收完毕');
            writeStream.end();
        });
    } else {
        console.log('请求的不是/upload');
        response.end('hello world');
    }
});

//2.开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(8000, () => {
    console.log('服务器启动成功了');
});