const fs = require('fs');

//有一段内容，想要写入到文件中
const content = '今天天气真不错 ';

//1.同步写入
// fs.writeFileSync('./ccc.txt', content, 'utf-8');

//2.异步写入 a+ 追加写入

//将 "你好" 追加到文件 ccc.txt 中 ,不删除文件中内容,追加写入
fs.writeFile('./ccc.txt', content, {
  encoding: 'utf-8',
  flag: 'a'
}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('文件写入成功');
  }
});



// fs.writeFile('./ccc.txt', content, 'utf-8', 'a+', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('文件写入成功');
//   }
// });

  // flag值解释:
  // r: 读取文件，文件不存在则报错
  // w: 写入文件，文件不存在则创建，存在则清空
  // a: 追加写入，文件不存在则创建
  // r+: 读取并写入文件，文件不存在则报错
  // w+: 写入并读取文件，文件不存在则创建，存在则清空
  // a+: 追加写入并读取文件，文件不存在则创建
  // 默认情况下，flag值为w



  //3.异步写入: promise

