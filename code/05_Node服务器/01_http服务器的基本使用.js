const http = require('http');

// 创建一个服务器
const server = http.createServer((request, response) => {
  // request: 请求对象
  // console.log('有人请求服务器了');
  // console.log(request.url);
  // console.log(request.method);
  // console.log(request.headers);

  // response: 响应对象
  response.write('hello');
  response.write(' world');
  response.end();
});

//开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(9999, () => {
  console.log('服务器启动成功了');
});
