const message = "Hello Word";
//1. 创建方式一：Buffer 不推荐（过期）
// const buffer = new Buffer(message);
// console.log(buffer);

//2.创建方式二：
const buffer = Buffer.from(message);
console.log(buffer);
