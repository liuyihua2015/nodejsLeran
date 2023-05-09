const http = require('http');

// 1.使用http模块发送get请求
// http.get('http://localhost:8000', (response) => {
//     // console.log(response);
//     // console.log(response.statusCode);
//     // console.log(response.headers);
//     // console.log(response.httpVersion);
//     response.on('data', (chunk) => {
//         console.log(chunk.toString());
//     });
// });

//2.使用http模块发送post请求
// http.request(options, callback)
http.request({
    method: 'POST',
    hostname: 'localhost',
    port: 8000,
}, (res) => {
    // console.log(res);
    res.on('data', (data) => {
        const str = data.toString();
        const obj = JSON.parse(str);
        console.log(obj);
    });
}).end();

