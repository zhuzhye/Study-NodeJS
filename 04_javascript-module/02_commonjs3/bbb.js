console.log("bbb");
require("./ccc");
// 最终目的都是他们两个指向一个对象
exports = { name: "zzy" };
module.exports = exports;
