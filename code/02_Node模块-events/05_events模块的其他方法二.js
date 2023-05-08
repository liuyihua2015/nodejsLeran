//了解events模块的其他方法

//1.引入events模块
var events = require('events');
//2.创建eventEmitter对象
var eventEmitter = new events.EventEmitter();



//只监听一次的事件
eventEmitter.once('eventName', () => {
  console.log('eventName - once');
});

eventEmitter.on('eventName', () => {
  console.log('eventName - on');
});

//将事件添加到最前面
eventEmitter.prependListener('eventName', () => {
  console.log('eventName - prependListener');
});

//将事件添加到最前面，只监听一次
eventEmitter.prependOnceListener('eventName', () => {
  console.log('eventName - prependOnceListener');
});


eventEmitter.emit('eventName');
eventEmitter.emit('eventName');
eventEmitter.emit('eventName');
eventEmitter.emit('eventName');

//移除所有的事件监听,不传参数 区别是啥
// eventEmitter.removeAllListeners();
// eventEmitter.removeAllListeners('eventName');
