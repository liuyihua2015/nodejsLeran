//了解events模块的其他方法

//1.引入events模块
var events = require('events');
//2.创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

eventEmitter.on('eventName', () => {});
eventEmitter.on('eventName', () => {});
eventEmitter.on('eventName', () => {});
eventEmitter.on('kobe', () => {});
eventEmitter.on('kobe', () => {});

//1.获取所有监听事件的名称
console.log(eventEmitter.eventNames());

//2.获取监听最大的监听器数量
console.log(eventEmitter.getMaxListeners());

//3.获取指定事件的监听器数量
console.log(eventEmitter.listenerCount('eventName'));

//4.获取某一个事件名称对应的所有监听器
console.log(eventEmitter.listeners('eventName'));