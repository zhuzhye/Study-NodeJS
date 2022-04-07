const EventEmitter = require("events");
// 1.创建发射器
const emitter = new EventEmitter();

// 2.监听某一个事件
// on alias
// once 只执行一次
emitter.once("click", (args, args2, args3) => {
  console.log("监听到了click事件1", args, args2, args3);
});

const listener2 = (args) => {
  console.log("监听到了click事件2", args);
};
emitter.on("click", listener2);

// 把本次监听放到最前面 prependOnceListener
emitter.prependListener("click", (args, args2, args3) => {
  console.log("监听到了click事件3", args, args2, args3);
});

emitter.on("srcoll", (args, args2, args3) => {
  console.log("监听到了srcoll事件3", args, args2, args3);
});

// 3.发出一个事件
setTimeout(() => {
  //移除所有click 监听器 ()移除所有监听器
  emitter.removeAllListeners("click");
  emitter.emit("click", "coderwhy", "james", "kobe");
  emitter.emit("click", "coderwhy", "james", "kobe");
  emitter.emit("srcoll", "coderwhy", "james", "kobe");
}, 1000);
