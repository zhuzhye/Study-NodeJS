const EventEmitter = require("events");
// 1.创建发射器
const emitter = new EventEmitter();

// 2.监听某一个事件
// on alias
emitter.on("click", (args) => {
  console.log("监听到了click事件1", args);
});

const listener2 = (args) => {
  console.log("监听到了click事件2", args);
};
emitter.on("click", listener2);

// 3.发出一个事件
setTimeout(() => {
  emitter.emit("click", "coderwhy", "james", "kobe");
  emitter.off("click", listener2);
  emitter.emit("click", "coderwhy", "james", "kobe");
}, 1000);
