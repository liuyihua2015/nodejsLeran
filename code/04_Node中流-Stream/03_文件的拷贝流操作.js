const fs = require('fs');

//1.方式一 一次性读取和写入文件
// fs.readFile('./ccc.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile('./ccc_copy.txt', data, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('拷贝成功');
//       }
//     });
//   }
// });

//2.方式二 创建可读流和可写流
//2.1创建可读流
const rs = fs.createReadStream('./ccc.txt')
//2.2创建可写流
const ws = fs.createWriteStream('./ccc_copy.txt')
//2.3监听可读流的开启和关闭
rs.once('open', () => {
  console.log('可读流打开了');
}
);
rs.once('close', () => {
  console.log('可读流关闭了');
}
);
//2.4监听可写流的开启和关闭
ws.once('open', () => {
  console.log('可写流打开了');
}
);
ws.once('close', () => {
  console.log('可写流关闭了');
}
);

// rs.on('data', (data) => {
//   ws.write(data);
// });

// rs.on('end', () => {
//   ws.end();
// });

//方式三 pipe()管道
// 2.5通过pipe()来拷贝文件
rs.pipe(ws);
