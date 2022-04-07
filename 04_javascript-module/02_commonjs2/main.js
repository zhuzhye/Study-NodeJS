// 加载过程同步
require("./bar");
require("./foo");
console.log("main中代码被执行");
console.log(module);
