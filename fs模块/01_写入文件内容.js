// 1.导入文件系统模块
const fs = require("fs");
// 2.调用fs.writeFile()方法写入文件
// 参数1:文件存放路径
// 参数2:表示写入内容
// 参数3:回调函数
fs.writeFile("./foo", "aaaa", function (err) {
  // 如果文件写入成功 则 err 的值为null
  // 如果文件写入失败 则 err 的值为错误对象
  console.log(err);
});
