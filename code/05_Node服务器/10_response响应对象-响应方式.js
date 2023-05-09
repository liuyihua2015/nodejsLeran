const http = require('http');

// 1.创建一个服务器
const server = http.createServer((request, response) => {
    console.log('有人请求服务器了');
    // response: 响应对象
    // response.end('hello world');


    // response对象 writadle 可写流
    response.write('hello');
    response.write(' world');
    response.end(' hello world');

    //如果我们希里给客户端响应的结果数据,可以通过两种方式:
    // Write方法:这种方式是直接写出数据,但是井没有关闭流
    // end法:这种方式星写出最后的数野,井目写出后会关闭流

    

});

//2.开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(8000, () => {
    console.log('服务器启动成功了');
});