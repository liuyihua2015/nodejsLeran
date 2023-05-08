const fs = require('fs');

//create a folder
fs.mkdir('./lyh/aaa', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('文件夹创建成功');
  }
});

fs.mkdir('./lyh/bbb', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('文件夹创建成功');
  }
});

fs.mkdir('./lyh/ccc', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('文件夹创建成功');
  }
});