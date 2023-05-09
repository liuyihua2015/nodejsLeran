const http = require('http');

// 1.创建一个服务器
const server = http.createServer((request, response) => {
  // request: 请求对象
  //url: 请求地址
  console.log(request.url);
  //method: 请求方式
  console.log(request.method);
  //headers: 请求头
  console.log(request.headers);

  // response: 响应对象
  response.end('hello world');
});

//2.开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(8000, () => {
  console.log('服务器启动成功了');
});