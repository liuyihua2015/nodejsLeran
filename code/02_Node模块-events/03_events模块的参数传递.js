
//1.引入events模块
var events = require('events');
//2.创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//3.绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
//我们可以通过addListener方法为指定事件添加多个监听器。eventEmitter.on()与 eventEmitter.addListener()是同义词。
//eventEmitter.addListener('eventName', eventHandler);

function eventHandler(a,b) {

  console.log('eventHandler',a,b);
}

//4.触发事件
eventEmitter.emit('eventName', 'arg1', 'arg2');

//延迟2s触发事件
// setTimeout(function () {
//   eventEmitter.emit('eventName', 'arg1', 'arg2');
// }, 2000);