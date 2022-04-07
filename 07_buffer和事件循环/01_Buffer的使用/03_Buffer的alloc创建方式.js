//通过alloc方式创建Buffer
const buffer = Buffer.alloc(8);
console.log(buffer);
//默认十进制
buffer[0] = 88;
// 0x代表16进制
buffer[1] = 0x88;
console.log(buffer);
