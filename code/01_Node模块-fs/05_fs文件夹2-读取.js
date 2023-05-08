const fs = require('fs');

//read a folder
//1.read dir , get all files name string
// fs.readdir('./lyh', (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(files);
//   }
// });

//2.read dir , get all files info
// fs.readdir('./lyh', { withFileTypes: true }, (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(files);
//     files.forEach(file => {
//       if (file.isDirectory()) {
//         console.log(file.name + '是文件夹');
//       } else {
//         console.log(file.name + '是文件');
//       }
//     });
//   }
// });

//3. recursion read dir ,get all files info
function readDir(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(files);
      files.forEach(file => {
        if (file.isDirectory()) {
          readDir(dir + '/' + file.name);
        } else {
          console.log(dir + '/' + file.name);
        }
      });
    }
  });
}

readDir('./lyh');