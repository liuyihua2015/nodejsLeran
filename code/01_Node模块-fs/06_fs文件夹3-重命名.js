const fs = require('fs');

//rename a folder
// fs.rename('./liuyihua', './lyh', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('文件夹重命名成功');
//   }
// });

//rename a file
fs.rename('./lyh/aaa/aaa1.txt', './lyh/aaa/aaa2.txt', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('文件重命名成功');
  }
});

