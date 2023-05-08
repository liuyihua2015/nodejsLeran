//events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
//EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

//1.引入events模块
var events = require('events');
//2.创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//3.绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
//我们可以通过addListener方法为指定事件添加多个监听器。eventEmitter.on()与 eventEmitter.addListener()是同义词。
//eventEmitter.addListener('eventName', eventHandler);

function eventHandler() {
  console.log('eventHandler');
}

//4.触发事件
// eventEmitter.emit('eventName');

//延迟2s触发事件
setTimeout(function () {
  eventEmitter.emit('eventName');
}, 2000);