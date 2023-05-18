const koa = require('koa');
const static = require('koa-static');
  
const app = new koa();

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../05_Node服务器'

app.use(static(
    staticPath
))

app.listen(3000, () => {
    console.log('[demo] static-use-middleware is starting at port 3000')
})