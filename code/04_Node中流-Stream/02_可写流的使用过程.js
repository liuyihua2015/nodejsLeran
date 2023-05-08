const fs = require('fs');
//1.一次性写入内容
// fs.writeFile('./aaa.txt', 'hello world', {
// encoding: 'utf8',
// flag: 'a',
// }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('写入成功');
//   }
// });


//2.通过流的方式写入
//2.1创建一个可写流
const ws = fs.createWriteStream('./bbb.txt', {
  flags: 'a', //对文件进行何种操作,默认是r
  // encoding: 'utf8', //默认是buffer
  // fd: null, //文件描述符
  // mode: 0o666, //文件权限
  // autoClose: true, //读取完毕后是否自动关闭
  // start: 1, //读取的开始位置
});
// //2.2监听流的开启和关闭
ws.on('open', (fd) => {
  console.log('可写流打开了', fd);
}
);


//写入
ws.write(' 123123刘以华 ', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('写入成功');
  }
});

// ws.write(' 1刘以华 ', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('写入成功');
//   }
// });
// ws.write(' 2刘以华 ', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('写入成功');
//   }
// });
// ws.write(' 3刘以华 ', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('写入成功');
//   }
// });


ws.on('close', () => {
  console.log('可写流关闭了');
});

//监听流的结束  finish 对应的是 end 方法
ws.on('finish', () => {
  console.log('可写流结束了');
}
);


//关闭流 相当于做了两步操作  end方法和close方法  write传入的数据和调用close方法
// end方法是写入完毕后关闭流  close方法是手动关闭流 

// ws.end('哈哈哈');//等价于ws.close();  但是end可以传参,close不可以传参

ws.close();

