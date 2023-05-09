const http = require('http');

// 1.创建一个服务器
const server = http.createServer((request, response) => {
  console.log('有人请求服务器了');
  // response: 响应对象
  response.end('hello world');
});

//2.开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(8000, () => {
  console.log('服务器启动成功了');
});


//服务器实时重启的工具: nodemon
//1.安装: npm i nodemon -g
//2.使用: nodemon 文件名
//3.如果想要在终端中退出: ctrl + c
//4.如果想要在终端中清屏: clear
//5.如果想要在终端中查看历史命令: history
