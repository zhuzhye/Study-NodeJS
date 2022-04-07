const path = require("path");
// 1.获取路径信息
const filepath = "/use/why/acb.txt";

console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath));

// 2.join路径的拼接
const basePath = "../User/why";
const filename = "/abc.txt";
const filePath = path.join(basePath, filename);
console.log(filePath);

// 3.resole路劲拼接
//  reslove会判断拼接的路径字符串中，是否有以/ 或者 ./ 或者../开头的路劲
const filepath2 = path.resolve(basePath, filename);
console.log(filepath2);
