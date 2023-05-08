//1.create a buffer
// var buf = new Buffer('hello world');//<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
// console.log(buf);

//2.create a buffer 1个英文占1个字节
var buf = Buffer.from('hell');//<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(buf);

//3.字符串中包含中文 一个中文占3个字节
var buf = Buffer.from('你好世界');//<Buffer e4 bd a0 e5 a5 bd e4 b8 96 e7 95 8c>
console.log(buf);