const fs = require("fs");
// 案例：读取文件的信息
const filepath = "./abc.txt";
// 1.方式一：同步操作
// const info = fs.statSync(filepath);
// console.log("后去需要执行代码");
// console.log(info);

// 2.方式二：异步操作
// fs.stat(filepath, (err, info) => {
//   if (err) {
//     return;
//   }
//   console.log(info);
// });
// console.log("后去需要执行代码");

// 3.方式三：promise
fs.promises
  .stat(filepath)
  .then((info) => {
    console.log(info);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("后去需要执行代码");
const fs = require("fs");
// 案例：读取文件的信息
const filepath = "./abc.txt";
// 1.方式一：同步操作
// const info = fs.statSync(filepath);
// console.log("后去需要执行代码");
// console.log(info);

// 2.方式二：异步操作
// fs.stat(filepath, (err, info) => {
//   if (err) {
//     return;
//   }
//   console.log(info);
// });
// console.log("后去需要执行代码");

// 3.方式三：promise
fs.promises
  .stat(filepath)
  .then((info) => {
    console.log(info);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("后去需要执行代码");
const fs = require("fs");
// 案例：读取文件的信息
const filepath = "./abc.txt";
// 1.方式一：同步操作
// const info = fs.statSync(filepath);
// console.log("后去需要执行代码");
// console.log(info);

// 2.方式二：异步操作
// fs.stat(filepath, (err, info) => {
//   if (err) {
//     return;
//   }
//   console.log(info);
// });
// console.log("后去需要执行代码");

// 3.方式三：promise
fs.promises
  .stat(filepath)
  .then((info) => {
    console.log(info);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("后去需要执行代码");
const fs = require("fs");
// 案例：读取文件的信息
const filepath = "./abc.txt";
// 1.方式一：同步操作
// const info = fs.statSync(filepath);
// console.log("后去需要执行代码");
// console.log(info);

// 2.方式二：异步操作
// fs.stat(filepath, (err, info) => {
//   if (err) {
//     return;
//   }
//   console.log(info);
// });
// console.log("后去需要执行代码");

// 3.方式三：promise
fs.promises
  .stat(filepath)
  .then((info) => {
    console.log(info);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("后去需要执行代码");
