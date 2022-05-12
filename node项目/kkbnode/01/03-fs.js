// const fs = require("fs");
// 同步读取 //文本文件 图片 视频 二进制
// js中确实没有一个可以描述二进制的变量类型
// node 自己封装Buffer 缓冲区
// const data = fs.readFileSync("./conf.json"); //10ms
// console.log("data", data.toString()); //编码类型 默认utf-8

// 异步读取
// 错误优先的回调
// 使用promise风格的api aysnc/await
// fs.readFile("./conf.json", (err, data) => {
//   console.log("data", data.toString());
// });
// const fsp = require("fs").promises;
// fsp.readFile("./conf.json").then((data) => console.log("data", data.toString()));
// console.log("read end");

const { promisify } = require("util");
const fs = require("fs");
const readFile = promisify(fs.readFile);
readFile("./conf.json").then((data) => {
  console.log(data.toString());
});

// promise
// fs.readFile封装成一个promise风格的接口
// promisify
