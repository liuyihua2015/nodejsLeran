const fs = require('fs');
//打开文件bbb.txt
fs.open('./bbb.txt', 'r', (err, fd) => {
  if (err) {
    console.log(err);
  } else {
    console.log(fd);
    //读取文件
    fs.read(fd, Buffer.alloc(100), 0, 100, 0, (err, bytesRead, buffer) => {
      if (err) {
        console.log(err);
      } else {
        console.log(bytesRead);
        console.log(buffer);
        console.log(buffer.toString());
      }
    });

    //获取文件信息
    fs.fstat(fd, (err, stats) => {
      if (err) {
        console.log(err);
      } else {
        console.log(stats);
      }
    });

    //关闭文件
    fs.close(fd, err => {
      if (err) {
        console.log(err);
      } else {
        console.log('文件关闭成功');
      }
    });
  }
});