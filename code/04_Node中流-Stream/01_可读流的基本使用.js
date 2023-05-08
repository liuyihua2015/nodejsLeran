const fs = require('fs');
//1.一次性读取
//缺点二:没有办法精准控制从哪里读取,读取到什么位置
//缺点二:读取到某一个位置的,暂停读取,恢复读取
//缺点三:文件非常大的时候,多次读取,可能会导致内存溢出
// fs.readFile('./aaa.txt', (err, data) => {
//   console.log(data);
// });

//2.通过流的方式读取
//2.1创建一个可读流
const rs = fs.createReadStream('./aaa.txt', {
  flags: 'r', //对文件进行何种操作,默认是r
  encoding: null, //默认是buffer
  fd: null, //文件描述符
  mode: 0o666, //文件权限
  autoClose: true, //读取完毕后是否自动关闭
  start: 0, //读取的开始位置
  end: 20, //读取的结束位置
  highWaterMark: 2, //每次读取的最大值 默认是64*1024
});
//2.2监听流的开启和关闭
rs.on('open', (fd) => {
  console.log('可读流打开了', fd);
});
//监听流的结束
rs.on('end', () => {
  console.log('可读流结束了');
});

rs.on('close', () => {
  console.log('可读流关闭了');
});
//2.3监听流的读取
rs.on('data', (data) => {
  // console.log(data);
  console.log(data.toString());

  //暂停读取
  // rs.pause();
  // setTimeout(() => {
  //   //恢复读取
  //   rs.resume();
  // }, 1000);
});

//2.4监听流的错误
rs.on('error', (err) => {
  console.log(err);
});