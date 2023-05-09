const http = require('http');

// 1.创建一个服务器
const server = http.createServer((request, response) => {
    console.log('有人请求服务器了');
    if (request.url === '/upload') {

        request.setEncoding('binary');

        const boundary = '--' + request.headers['content-type'].split('; ')[1].split('=')[1];
        // console.log(boundary);

        //客户端传递的数据是表单数(请求体)
        //监听request的data事件
        let formData = '';
        request.on('data', (chunk) => {
            // console.log('有数据传递过来了');
            // console.log(chunk);
            formData += chunk;
        });

        request.on('end', () => {
            // console.log(formData);

            //1.截取从image/jpeg位置开始后面所有数据
            const imageType = 'image/jpeg'
            const imageTypePosition = formData.indexOf(imageType) + imageType.length
            let imageData = formData.substring(imageTypePosition);
            console.log(imageData);

            // imageData = imageData.substring(0, imageData.indexOf( `--${boundary}--`));

            //2.imageData 去除 开始位置会有两个空格
            imageData = imageData.replace(/^\s\s*/, '');

            //3 .imageData 去除 --${boundary}--
            imageData = imageData.slice(0, -(`--${boundary}--`).length);

            console.log(imageData);

            // 4. 将imageData的数据存储到文件中
            const fs = require('fs');
            fs.writeFile('./1.jpg', imageData, {
                encoding: 'binary'
            }, (err) => {
                if (err) {
                    console.log('文件写入失败', err);
                    response.end('文件上传失败~');
                } else {
                    console.log('文件写入成功');
                    response.end('文件上传成功~');
                }
            });
            
        });
    } else {
        console.log('请求的不是/upload');
        response.end('hello world');
    }
});

//2.开启服务器,并且可以指定端口号  1025 ~ 256*256=65535
server.listen(8000, () => {
    console.log('服务器启动成功了');
});