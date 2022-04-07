// console.log("我的%s已经%d岁", "猫", 2);

// const x = 1;
// const y = 2;
// const z = 3;
// console.count("x 的值为 " + x + " 且已经检查了几次？");
// console.count("x 的值为 " + x + " 且已经检查了几次？");
// console.count("x 的值为 " + x + " 且已经检查了几次？");
// console.count("y 的值为 " + y + " 且已经检查了几次？");
// const chalk = require("chalk");
// const oranges = ["橙子", "橙子"];
// const apples = ["苹果"];
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });
// apples.forEach((fruit) => {
//   console.count(fruit);
// });
// console.log("\x1b[33m%s\x1b[0m", "你好");
const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
