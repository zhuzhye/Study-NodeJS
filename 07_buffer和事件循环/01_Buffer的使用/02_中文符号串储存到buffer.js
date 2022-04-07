const message = "你好";
const buffer = Buffer.from(message, "utf16le");
//1.对字节进行解码：utf-8
// console.log(buffer.toString());
//2.编码使用utf16le, 解码使用utf-8
console.log(buffer.toString("utf16le"));
