// commonjs
const fs = require('fs');
//1.同步读取
const res1 = fs.readFileSync('./abc.txt', 'utf-8');
console.log(res1);
console.log('同步读取结束');

//2.异步读取
fs.readFile('./abc.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data); 
  }
});
console.log('异步读取结束');


//3.异步读取: promise 
// const { promisify } = require('util');
// const readFile = promisify(fs.readFile);
// readFile('./abc.txt', 'utf-8').then(data => {
//   console.log(data);
// }
// ).catch(err => {
//   console.log(err);
// }
// );
// console.log('promise读取结束');

fs.promises.readFile('./abc.txt', 'utf-8').then(data => {
  console.log(data);
}
).catch(err => {
  console.log(err);
}
);
console.log('promise读取结束');
